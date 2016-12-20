describe("Consulta", function() {

  var guilherme;

  /*antes de rodar cada teste roda esse metodo para criar o paciente*/
  beforeEach(function() {
    guilherme = new PacienteBuilder().constroi();
  });

  describe("consultas do tipo retorno", function() {

    it("nao deve cobrar nada se for retorno", function() {

      var consulta = new Consulta(guilherme, [], true, true);
      expect(consulta.preco()).toEqual(0);
    });

  });

  describe("consultas com procedimentos", function() {

    it("deve cobrar 25 por cada procedimento comum", function() {

      var procedimentosPadrao = ["proc1", "proc2"];
      var consulta = new Consulta(guilherme, procedimentosPadrao, false, false);
      expect(consulta.preco()).toEqual(procedimentosPadrao.length * 25);
    });

    it("deve cobrar valor pelo procedimento particular", function() {

      var procedimentosPadrao = ["raio-x", "gesso"];
      var consulta = new Consulta(guilherme, procedimentosPadrao, false, false);
      expect(consulta.preco()).toEqual(55 + 32);
    });

    it("deve cobrar preco específico dependendo do procedimento", function() {

      var consulta = new Consulta(guilherme, ["procedimento-comum", "raio-x", "procedimento-comum", "gesso"], false, false);
      expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
    });

  });

});

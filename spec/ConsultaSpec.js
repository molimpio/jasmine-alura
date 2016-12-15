describe("Consulta", function() {
  
  it("nao deve cobrar nada se for retorno", function() {
    
    var guilherme = new Paciente("Guilherme", 28, 72, 1.80);
    var consulta = new Consulta(guilherme, [], true, true);
    
    expect(consulta.preco()).toEqual(0);
  });

  it("deve cobrar 25 por cada procedimento comum", function() {

    var guilherme = new Paciente("Guilherme", 28, 72, 1.80);

    var procedimentosPadrao = ["proc1", "proc2"];

    var consulta = new Consulta(guilherme, procedimentosPadrao, false, false);

    expect(consulta.preco()).toEqual(procedimentosPadrao.length * 25);
  });

  it("deve cobrar valor pelo procedimento particular", function() {

    var guilherme = new Paciente("Guilherme", 28, 72, 1.80);

    var procedimentosPadrao = ["raio-x", "gesso"];

    var consulta = new Consulta(guilherme, procedimentosPadrao, false, false);

    expect(consulta.preco()).toEqual(55 + 32);
  });

  it("deve cobrar preco específico dependendo do procedimento", function() {

    var guilherme = new Paciente("Guilherme", 28, 72, 1.80);
    var consulta = new Consulta(guilherme, ["procedimento-comum", "raio-x", "procedimento-comum", "gesso"], false, false);

    expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
  });

});

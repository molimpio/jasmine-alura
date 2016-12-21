describe("Agendamento", function() {
  
  it("deve agendar para 20 dias depois", function() {
    
    var gui = new PacienteBuilder().constroi();
    var agenda = new Agendamento();
    
    var consulta = new Consulta(gui, [], false, false, new Date(2014, 7, 1));
    var novaConsulta = agenda.para(consulta);
    
    expect(novaConsulta.getData().toString()).toEqual(new Date(2014, 7, 21).toString());
    
  });
  
});

function Agendamento() {

  var clazz = {

    para: function(consulta) {
      var vinteDiasEmMilisegundos = 1000 * 60 * 60 * 24 * 20;
      var novaData = new Date(consulta.getData().getTime() + vinteDiasEmMilisegundos);

      var novaConsulta = new Consulta(
        consulta.getNome(),
        consulta.getProcedimentos(),
        consulta.isParticular(),
        true, novaData
      );
      return novaConsulta;
    }
  };

  return clazz;
}

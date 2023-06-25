SkillEvents.registration(event => {

  /* Edad de piedra */
  event.add('edad_piedra', 'basic', skill => {
    skill.initialValue(false);
  });
  event.add('piedra_pico', 'basic', skill => {
    skill.initialValue(false);
  });
  event.add('piedra_hacha', 'basic', skill => {
    skill.initialValue(false);
  });
  event.add('piedra_azada', 'basic', skill => {
    skill.initialValue(false);
  });
  event.add('piedra_pala', 'basic', skill => {
    skill.initialValue(false);
  });
  event.add('piedra_espada', 'basic', skill => {
    skill.initialValue(false);
  });

});
SkillEvents.registration(event => {

  /* Edad de madera */
  event.add('edad_madera', 'basic', skill => {
    skill.initialValue(false);
  });
  event.add('madera_pico', 'basic', skill => {
    skill.initialValue(false);
  });
  event.add('madera_hacha', 'basic', skill => {
    skill.initialValue(false);
  });
  event.add('madera_azada', 'basic', skill => {
    skill.initialValue(false);
  });
  event.add('madera_pala', 'basic', skill => {
    skill.initialValue(false);
  });
  event.add('madera_espada', 'basic', skill => {
    skill.initialValue(false);
  });

});
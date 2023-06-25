SkillEvents.registration(event => {

  /* FREEMODE */
  event.add('freemode', 'basic', skill => {
    skill.initialValue(false);
  });

});
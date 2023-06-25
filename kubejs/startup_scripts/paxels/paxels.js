SkillEvents.registration(event => {

  /* Paxels */
  event.add('paxels', "numeric", skill => {
    skill.initialValue(0);
  });

  event.add('upgradepaxels', "numeric", skill => {
    skill.initialValue(0);
  });

});
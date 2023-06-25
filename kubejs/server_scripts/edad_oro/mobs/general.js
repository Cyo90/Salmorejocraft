MobSkillEvents.register(event => {
 
  //EDAD ORO
  event.restrict("graveyard:ghoul", is => is.spawnable(true).if(player => player.can("skills:edad_oro", true) && player.can('skills:freemode', true)));
  event.restrict("minecraft:witch", is => is.spawnable(true).if(player => player.can("skills:edad_oro", true) && player.can('skills:freemode', true)));
  
});
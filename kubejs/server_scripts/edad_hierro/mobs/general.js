MobSkillEvents.register(event => {
 
  //EDAD HIERRO
  event.restrict("minecraft:creeper", is => is.spawnable(true).if(player => player.can("skills:edad_hierro", true) && player.can('skills:freemode', true)));
  event.restrict("minecraft:spider", is => is.spawnable(true).if(player => player.can("skills:edad_hierro", true) && player.can('skills:freemode', true)));
  event.restrict("minecraft:skeleton", is => is.spawnable(true).if(player => player.can("skills:edad_hierro", true) && player.can('skills:freemode', true)));

});
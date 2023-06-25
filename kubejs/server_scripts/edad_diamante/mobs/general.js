MobSkillEvents.register(event => {
 
  //EDAD DIAMANTE
  event.restrict("minecraft:cave_spider", is => is.spawnable(true).if(player => player.can("skills:edad_diamante", true) && player.can('skills:freemode', true)));

});
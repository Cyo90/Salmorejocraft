MobSkillEvents.register(event => {
 
  //EDAD NETHERITA
  event.restrict("minecraft:enderman", is => is.spawnable(true).if(player => player.can("skills:edad_netherita", true) && player.can('skills:freemode', true)));
  event.restrict("minecraft:wither_skeleton", is => is.spawnable(true).if(player => player.can("skills:edad_netherita", true) && player.can('skills:freemode', true)));

});
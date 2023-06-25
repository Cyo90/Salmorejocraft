BlockSkillEvents.register(event => {

  //EDAD NETHERITA
  event.restrict(
    'minecraft:ancient_debris',
    r => r.replaceWithBlock('minecraft:netherrack').unless(player => player.can('skills:edad_netherita', true) || player.can('skills:freemode', true))
  );

});
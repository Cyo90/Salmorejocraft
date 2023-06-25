BlockSkillEvents.register(event => {

  //EDAD DIAMANTE
  event.restrict(
    'minecraft:diamond_block',
    r => r.replaceWithBlock('minecraft:stone').unless(player => player.can('skills:edad_diamante', true) || player.can('skills:freemode', true))
  );
  event.restrict(
    'minecraft:diamond_ore',
    r => r.replaceWithBlock('minecraft:stone').unless(player => player.can('skills:edad_diamante', true) || player.can('skills:freemode', true))
  );

});
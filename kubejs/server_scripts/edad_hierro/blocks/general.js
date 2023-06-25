BlockSkillEvents.register(event => {

  //EDAD HIERRO
  event.restrict(
    'minecraft:iron_ore',
    r => r.replaceWithBlock('minecraft:stone').unless(player => player.can('skills:edad_hierro', true) || player.can('skills:freemode', true))
  );
  event.restrict(
    'minecraft:iron_block',
    r => r.replaceWithBlock('minecraft:stone').unless(player => player.can('skills:edad_hierro', true) || player.can('skills:freemode', true))
  );
  event.restrict(
    'minecraft:raw_iron_block',
    r => r.replaceWithBlock('minecraft:stone').unless(player => player.can('skills:edad_hierro', true) || player.can('skills:freemode', true))
  );

});
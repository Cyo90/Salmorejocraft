BlockSkillEvents.register(event => {

 //EDAD ORO
  event.restrict(
    'minecraft:gold_block',
    r => r.replaceWithBlock('minecraft:stone').unless(player => player.can('skills:edad_oro', true) || player.can('skills:freemode', true))
  );
  event.restrict(
    'minecraft:raw_gold_block',
    r => r.replaceWithBlock('minecraft:stone').unless(player => player.can('skills:edad_oro', true) || player.can('skills:freemode', true))
  );
  event.restrict(
    'minecraft:redstone_block',
    r => r.replaceWithBlock('minecraft:stone').unless(player => player.can('skills:edad_oro', true) || player.can('skills:freemode', true))
  );
  event.restrict(
    'minecraft:lapis_block',
    r => r.replaceWithBlock('minecraft:stone').unless(player => player.can('skills:edad_oro', true) || player.can('skills:freemode', true))
  );
  event.restrict(
    'byg:cryptic_redstone_ore',
    r => r.replaceWithBlock('minecraft:stone').unless(player => player.can('skills:edad_oro', true) || player.can('skills:freemode', true))
  );
  event.restrict(
    'minecraft:nether_gold_ore',
    r => r.replaceWithBlock('minecraft:netherrack').unless(player => player.can('skills:edad_oro', true) || player.can('skills:freemode', true))
  );
  event.restrict(
    'betternether:nether_redstone_ore',
    r => r.replaceWithBlock('minecraft:netherrack').unless(player => player.can('skills:edad_oro', true) || player.can('skills:freemode', true))
  );
  event.restrict(
    'betternether:nether_lapis_ore',
    r => r.replaceWithBlock('minecraft:netherrack').unless(player => player.can('skills:edad_oro', true) || player.can('skills:freemode', true))
  );

});
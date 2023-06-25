ItemSkillEvents.register(event => {
  
//OBJETOS EDAD PIEDRA
  event.restrict('minecraft:stone_pickaxe', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:piedra_pico', true) && player.cannot('skills:freemode', true));
  });
  event.restrict('minecraft:stone_axe', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:piedra_hacha', true) && player.cannot('skills:freemode', true));
  });
  event.restrict('minecraft:stone_hoe', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:piedra_azada', true) && player.cannot('skills:freemode', true));
  });
  event.restrict('minecraft:stone_shovel', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:piedra_pala', true) && player.cannot('skills:freemode', true));
  });
  event.restrict('minecraft:stone_sword', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:piedra_espada', true) && player.cannot('skills:freemode', true));
  });

});
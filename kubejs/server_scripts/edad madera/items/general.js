ItemSkillEvents.register(event => {
  
  //OBJETOS EDAD MADERA
  event.restrict('minecraft:wooden_pickaxe', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:madera_pico', true) && player.cannot('skills:freemode', true));
  });
  event.restrict('minecraft:wooden_axe', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:madera_hacha', true) && player.cannot('skills:freemode', true));
  });
  event.restrict('minecraft:wooden_hoe', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:madera_azada', true) && player.cannot('skills:freemode', true));
  });
  event.restrict('minecraft:wooden_shovel', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:madera_pala', true) && player.cannot('skills:freemode', true));
  });
  event.restrict('minecraft:wooden_sword', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:madera_espada', true) && player.cannot('skills:freemode', true));
  });

});
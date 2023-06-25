ItemSkillEvents.register(event => {
  
//OBJETOS EDAD HIERRO

  event.restrict('minecraft:iron_ingot', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:edad_hierro', true) && player.cannot('skills:freemode', true));
  });

  event.restrict('minecraft:iron_pickaxe', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:hierro_pico', true) && player.cannot('skills:freemode', true));
  });

  event.restrict('minecraft:iron_axe', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:hierro_hacha', true) && player.cannot('skills:freemode', true));
  });

  event.restrict('minecraft:iron_hoe', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:hierro_azada', true) && player.cannot('skills:freemode', true));
  });

  event.restrict('minecraft:iron_shovel', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:hierro_pala', true) && player.cannot('skills:freemode', true));
  });

  event.restrict('minecraft:iron_sword', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:hierro_espada', true) && player.cannot('skills:freemode', true));
  });
  
  event.restrict('minecraft:shield', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:hierro_escudo', true) && player.cannot('skills:freemode', true));
  });

});
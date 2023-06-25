ItemSkillEvents.register(event => {
  
  //OBJETOS EDAD NETHERITA
  event.restrict('minecraft:netherite_ingot', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:edad_netherita', true) && player.cannot('skills:freemode', true));
  });
  event.restrict('minecraft:quartz', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:edad_netherita', true) && player.cannot('skills:freemode', true));
  });
  event.restrict('minecraft:smithing_table', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:netherita_smith', true) && player.cannot('skills:freemode', true));
  });
  event.restrict('minecraft:netherite_pickaxe', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:netherita_pico', true) && player.cannot('skills:freemode', true));
  });
  event.restrict('minecraft:netherite_axe', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:netherita_hacha', true) && player.cannot('skills:freemode', true));
  });
  event.restrict('minecraft:netherite_hoe', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:netherita_azada', true) && player.cannot('skills:freemode', true));
  });
  event.restrict('minecraft:netherite_shovel', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:netherita_pala', true) && player.cannot('skills:freemode', true));
  });
  event.restrict('minecraft:netherite_sword', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:netherita_espada', true) && player.cannot('skills:freemode', true));
  });

});
ItemSkillEvents.register(event => {
  
  //OBJETOS EDAD DIAMANTE

  event.restrict('minecraft:diamond', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:edad_diamante', true) && player.cannot('skills:freemode', true));
  });
  event.restrict('minecraft:diamond_pickaxe', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:diamante_pico', true) && player.cannot('skills:freemode', true));
  });
  event.restrict('minecraft:diamond_axe', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:diamante_hacha', true) && player.cannot('skills:freemode', true));
  });
  event.restrict('minecraft:diamond_hoe', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:diamante_azada', true) && player.cannot('skills:freemode', true));
  });
  event.restrict('minecraft:diamond_shovel', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:diamante_pala', true) && player.cannot('skills:freemode', true));
  });
  event.restrict('minecraft:diamond_sword', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:diamante_espada', true) && player.cannot('skills:freemode', true));
  });
  event.restrict('minecraft:enchanting_table', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:diamante_mesa_encantamiento', true) && player.cannot('skills:freemode', true));
  });
  event.restrict('minecraft:enchanted_book', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:diamante_libros_encantamiento', true) && player.cannot('skills:freemode', true));
  });

});
ItemSkillEvents.register(event => {
  
  //OBJETOS EDAD ORO

  event.restrict('minecraft:gold_ingot', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:edad_oro', true) && player.cannot('skills:freemode', true));
  });

  event.restrict('minecraft:lapis_lazuli', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:edad_oro', true) && player.cannot('skills:freemode', true));
  });

  event.restrict('minecraft:redstone', restrict => {
    restrict.everything()
      .if(player => player.cannot('skills:edad_oro', true) && player.cannot('skills:freemode', true));
  });


});
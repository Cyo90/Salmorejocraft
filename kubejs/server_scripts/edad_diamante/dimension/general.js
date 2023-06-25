DimensionSkillEvents.register((event) => {

  // Los jugadores no pueden acceder al Nether hasta conseguir la skills edad_diamante o estar en freemode
  event.restrict("minecraft:the_nether", (restrict) =>
    restrict.inaccessible().if(player => player.cannot('edad_diamante', true) && player.cannot('skills:freemode', true))
  );
  
});
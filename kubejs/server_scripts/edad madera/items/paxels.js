ItemSkillEvents.register(event => {

  //PAXEL MADERA
  event.restrict('piercingpaxels:wooden_paxel', restrict => {
    restrict.unusable()
      .unholdable()
      .unidentifiable()
      .harmless()
      .unwearable()
      .if(player => player.cannot('skills:paxels', 1) && player.cannot('skills:freemode', true));
  });

  event.restrict('piercingpaxels:wooden_paxel', restrict => {
    restrict.unproducible()
      .unconsumable()
      .if(player => player.cannot('skills:paxels', 1));
  });

});
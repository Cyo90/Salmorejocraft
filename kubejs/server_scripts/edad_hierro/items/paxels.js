ItemSkillEvents.register(event => {

  //PAXEL HIERRO
  event.restrict('piercingpaxels:iron_paxel', restrict => {
    restrict.unusable()
      .unholdable()
      .unidentifiable()
      .harmless()
      .unwearable()
      .if(player => player.cannot('skills:paxels', 3) && player.cannot('skills:freemode', true));
  });

  event.restrict('piercingpaxels:iron_paxel', restrict => {
    restrict.unproducible()
      .unconsumable()
      .if(player => player.cannot('skills:paxels', 3));
  });

});
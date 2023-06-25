ItemSkillEvents.register(event => {

  //PAXEL PIEDRA
  event.restrict('piercingpaxels:stone_paxel', restrict => {
    restrict.unusable()
      .unholdable()
      .unidentifiable()
      .harmless()
      .unwearable()
      .if(player => player.cannot('skills:paxels', 2) && player.cannot('skills:freemode', true));
  });

  event.restrict('piercingpaxels:stone_paxel', restrict => {
    restrict.unproducible()
      .unconsumable()
      .if(player => player.cannot('skills:paxels', 2));
  });

});
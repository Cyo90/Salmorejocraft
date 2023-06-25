ItemSkillEvents.register(event => {

  //PAXEL ORO
  event.restrict('piercingpaxels:golden_paxel', restrict => {
    restrict.unusable()
      .unholdable()
      .unidentifiable()
      .harmless()
      .unwearable()
      .if(player => player.cannot('skills:paxels', 4) && player.cannot('skills:freemode', true));
  });

  event.restrict('piercingpaxels:golden_paxel', restrict => {
    restrict.unproducible()
      .unconsumable()
      .if(player => player.cannot('skills:paxels', 4));
  });


  //PACK DE MEJORAS 1
  event.restrict('piercingpaxels:usage_shovel', restrict => {
    restrict.unusable()
      .unholdable()
      .unidentifiable()
      .harmless()
      .unwearable()
      .if(player => player.cannot('skills:upgradepaxels', 1) && player.cannot('skills:freemode', true));
  });

  event.restrict('piercingpaxels:usage_shovel', restrict => {
    restrict.unproducible()
      .unconsumable()
      .if(player => player.cannot('skills:upgradepaxels', 1));
  });

  event.restrict('piercingpaxels:usage_hoe', restrict => {
    restrict.unusable()
      .unholdable()
      .unidentifiable()
      .harmless()
      .unwearable()
      .if(player => player.cannot('skills:upgradepaxels', 1) && player.cannot('skills:freemode', true));
  });

  event.restrict('piercingpaxels:usage_hoe', restrict => {
    restrict.unproducible()
      .unconsumable()
      .if(player => player.cannot('skills:upgradepaxels', 1));
  });

  event.restrict('piercingpaxels:usage_axe', restrict => {
    restrict.unusable()
      .unholdable()
      .unidentifiable()
      .harmless()
      .unwearable()
      .if(player => player.cannot('skills:upgradepaxels', 1) && player.cannot('skills:freemode', true));
  });

  event.restrict('piercingpaxels:usage_axe', restrict => {
    restrict.unproducible()
      .unconsumable()
      .if(player => player.cannot('skills:upgradepaxels', 1));
  });

});
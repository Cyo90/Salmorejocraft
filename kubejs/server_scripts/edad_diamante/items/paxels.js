ItemSkillEvents.register(event => {

  //PAXEL DIAMANTE
  event.restrict('piercingpaxels:diamond_paxel', restrict => {
    restrict.unusable()
      .unholdable()
      .unidentifiable()
      .harmless()
      .unwearable()
      .if(player => player.cannot('skills:paxels', 5) && player.cannot('skills:freemode', true));
  });

  event.restrict('piercingpaxels:diamond_paxel', restrict => {
    restrict.unproducible()
      .unconsumable()
      .if(player => player.cannot('skills:paxels', 5));
  });

  //PACK DE MEJORAS 2
  event.restrict('piercingpaxels:passive_silence', restrict => {
    restrict.unusable()
      .unholdable()
      .unidentifiable()
      .harmless()
      .unwearable()
      .if(player => player.cannot('skills:upgradepaxels', 2) && player.cannot('skills:freemode', true));
  });

  event.restrict('piercingpaxels:passive_silence', restrict => {
    restrict.unproducible()
      .unconsumable()
      .if(player => player.cannot('skills:upgradepaxels', 2));
  });

  event.restrict('piercingpaxels:passive_smelt', restrict => {
    restrict.unusable()
      .unholdable()
      .unidentifiable()
      .harmless()
      .unwearable()
      .if(player => player.cannot('skills:upgradepaxels', 2) && player.cannot('skills:freemode', true));
  });

  event.restrict('piercingpaxels:passive_smelt', restrict => {
    restrict.unproducible()
      .unconsumable()
      .if(player => player.cannot('skills:upgradepaxels', 2));
  });

  event.restrict('piercingpaxels:passive_vacuum', restrict => {
    restrict.unusable()
      .unholdable()
      .unidentifiable()
      .harmless()
      .unwearable()
      .if(player => player.cannot('skills:upgradepaxels', 2) && player.cannot('skills:freemode', true));
  });

  event.restrict('piercingpaxels:passive_vacuum', restrict => {
    restrict.unproducible()
      .unconsumable()
      .if(player => player.cannot('skills:upgradepaxels', 2));
  });

});
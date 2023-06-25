ItemSkillEvents.register(event => {

//PAXEL NETHERITA
  event.restrict('piercingpaxels:netherite_paxel', restrict => {
    restrict.unusable()
      .unholdable()
      .unidentifiable()
      .harmless()
      .unwearable()
      .if(player => player.cannot('skills:paxels', 6) && player.cannot('skills:freemode', true));
  });

  event.restrict('piercingpaxels:netherite_paxel', restrict => {
    restrict.unproducible()
      .unconsumable()
      .if(player => player.cannot('skills:paxels', 6));
  });

  //PACK DE MEJORAS 3
  event.restrict('piercingpaxels:active_hole', restrict => {
    restrict.unusable()
      .unholdable()
      .unidentifiable()
      .harmless()
      .unwearable()
      .if(player => player.cannot('skills:upgradepaxels', 3) && player.cannot('skills:freemode', true));
  });

  event.restrict('piercingpaxels:active_hole', restrict => {
    restrict.unproducible()
      .unconsumable()
      .if(player => player.cannot('skills:upgradepaxels', 3));
  });

  event.restrict('piercingpaxels:active_tunnel', restrict => {
    restrict.unusable()
      .unholdable()
      .unidentifiable()
      .harmless()
      .unwearable()
      .if(player => player.cannot('skills:upgradepaxels', 3) && player.cannot('skills:freemode', true));
  });

  event.restrict('piercingpaxels:active_tunnel', restrict => {
    restrict.unproducible()
      .unconsumable()
      .if(player => player.cannot('skills:upgradepaxels', 3));
  });

  event.restrict('piercingpaxels:active_wall', restrict => {
    restrict.unusable()
      .unholdable()
      .unidentifiable()
      .harmless()
      .unwearable()
      .if(player => player.cannot('skills:upgradepaxels', 3) && player.cannot('skills:freemode', true));
  });

  event.restrict('piercingpaxels:active_wall', restrict => {
    restrict.unproducible()
      .unconsumable()
      .if(player => player.cannot('skills:upgradepaxels', 3));
  });

  //PACK DE MEJORAS 4
  event.restrict('piercingpaxels:upgrade_restoration', restrict => {
    restrict.unusable()
      .unholdable()
      .unidentifiable()
      .harmless()
      .unwearable()
      .if(player => player.cannot('skills:upgradepaxels', 4) && player.cannot('skills:freemode', true));
  });

  event.restrict('piercingpaxels:upgrade_restoration', restrict => {
    restrict.unproducible()
      .unconsumable()
      .if(player => player.cannot('skills:upgradepaxels', 4));
  });

  //PACK DE MEJORAS 5
  event.restrict('piercingpaxels:upgrade_unbreakable', restrict => {
    restrict.unusable()
      .unholdable()
      .unidentifiable()
      .harmless()
      .unwearable()
      .if(player => player.cannot('skills:upgradepaxels', 5) && player.cannot('skills:freemode', true));
  });

  event.restrict('piercingpaxels:upgrade_unbreakable', restrict => {
    restrict.unproducible()
      .unconsumable()
      .if(player => player.cannot('skills:upgradepaxels', 5));
  });

});
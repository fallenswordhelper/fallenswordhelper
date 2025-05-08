// BUGFIX - in case of teleporting in new realm with footprints turned on

function invalidFootprints() {
  return window.GameController && GameController.Realm
    && !GameController.Realm.footprintTileList;
}

export default function fixTeleport() {
  if (invalidFootprints()) {
    GameController.Realm.footprintTileList = [];
  }
}

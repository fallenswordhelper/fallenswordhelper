import calf from '../../support/calf';

export default function isHuntMode() {
  return calf.huntingMode && window.realmKeyHandler;
}

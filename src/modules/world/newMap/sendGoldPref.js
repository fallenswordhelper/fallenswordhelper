import getValue from '../../system/getValue';

let sendGoldOnWorld = 0;

export const getSendGoldOnWorld = () => sendGoldOnWorld;

export function initSendGoldOnWorld() {
  sendGoldOnWorld = getValue('sendGoldonWorld');
}

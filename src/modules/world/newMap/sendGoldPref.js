import getValue from '../../system/getValue';

let sendGoldOnWorld;

export const getSendGoldOnWorld = () => sendGoldOnWorld;

export function initSendGoldOnWorld() {
  sendGoldOnWorld = getValue('sendGoldonWorld');
}

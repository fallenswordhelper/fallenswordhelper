import daTemple from '../../_dataAccess/daTemple';
import calf from '../../support/calf';
import displayDisconnectedFromGodsMessage
  from './displayDisconnectedFromGodsMessage';
import saveTempleSettings from './saveTempleSettings';

export default async function checkTemple() {
  if (!calf.enableTempleAlert) return;
  const response = await daTemple();
  if (!response.s) return;

  const needToPray = response.r.pray_index === -1;

  if (needToPray) displayDisconnectedFromGodsMessage();
  saveTempleSettings(needToPray);
}

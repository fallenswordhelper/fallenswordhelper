import indexAjaxDoc from '../../ajax/indexAjaxDoc';
import getTextTrim from '../../common/getTextTrim';
import querySelector from '../../common/querySelector';
import calf from '../../support/calf';
import displayDisconnectedFromGodsMessage from './displayDisconnectedFromGodsMessage';
import saveTempleSettings from './saveTempleSettings';

export default async function parseTemplePage() {
  if (!calf.enableTempleAlert) return;
  const doc =
    calf.cmd === 'temple' ? document : await indexAjaxDoc({ cmd: 'temple' });
  if (!doc) return;
  const thisPcc = querySelector('#pCC', doc);
  if (!thisPcc) return;
  const needToPray =
    getTextTrim(thisPcc) !== 'You are currently praying at the temple.';
  if (needToPray) displayDisconnectedFromGodsMessage();
  saveTempleSettings(needToPray);
}

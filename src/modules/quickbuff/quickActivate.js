import daQuickbuff from '../_dataAccess/daQuickbuff';
import sendEvent from '../analytics/sendEvent';
import playerName from '../common/playerName';
import quickbuffSuccess from '../common/quickbuffSuccess';
import setInnerHtml from '../dom/setInnerHtml';

export default async function quickActivate(evt) {
  const trigger = evt.target;
  if (trigger.className !== 'quickbuffActivate') return;
  sendEvent('quickbuff', 'quickActivate');
  setInnerHtml('', trigger);
  trigger.className = 'fshSpinner fshSpinner12';
  const json = await daQuickbuff([playerName()], [trigger.dataset.buffid]);
  if (quickbuffSuccess(json)) {
    trigger.className = 'fshLime';
    setInnerHtml('On', trigger);
  }
}

import indexAjaxDoc from '../../ajax/indexAjaxDoc';
import sendEvent from '../../analytics/sendEvent';
import infoBox from '../../common/infoBox';
import regExpFirstCapture from '../../common/regExpFirstCapture';
import { composingFragmentType } from '../../support/constants';
import stdout from '../../support/stdout';

const ret = (info, prop) => ({
  r: { [prop]: [{ n: regExpFirstCapture(/'(?<id>.*)'/, info) }] },
  s: true,
});
const components = (info) => ret(info, 'components');
const zombie = (info) => ret(info, 'mailbox_items');

function fragObj(pair) {
  const thisResult = pair.split(' x ');
  return {
    amount: thisResult[0],
    type: composingFragmentType.indexOf(thisResult[1]),
  };
}

function stash(info) {
  const fragList = regExpFirstCapture(/You gained {1,2}}(?<fragList>.*) Fragment\(s\)/, info);
  if (fragList) {
    const frags = fragList.split(', ').map(fragObj);
    return { r: { frags }, s: true };
  }
  sendEvent('da/useItem', 'Bad Msg', info);
  if (defineUserIsDev) stdout('da/useItem', 'Bad Msg', info); //  da/useItem Bad Msg
}

const outputLookup = [
  ['You successfully used', () => ({ s: true })],
  ['You successfully extracted', components],
  ['You failed to extract', () => ({ r: {}, s: true })],
  ['You gained', stash],
  ['You received', zombie],
];

function devHook() {
  if (defineUserIsDev) stdout('da/useItem', 'No Info'); //  da/useItem No Info
}

function formatResults(doc) {
  const info = infoBox(doc);
  if (info) {
    const thisResult = outputLookup.find((e) => info.startsWith(e[0]));
    if (thisResult) return thisResult[1](info);
  } else {
    sendEvent('da/useItem', 'No Info');
    devHook();
    return { e: { message: 'No Info' }, s: false };
  }
  return { e: { message: info }, s: false };
}

export default async function useItem(backpackInvId) {
  const doc = await indexAjaxDoc({
    cmd: 'profile',
    subcmd: 'useitem',
    inventory_id: backpackInvId,
  });
  if (!doc) return { s: false };
  return formatResults(doc);
}

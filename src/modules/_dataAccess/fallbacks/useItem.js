import indexAjaxDoc from '../../ajax/indexAjaxDoc';
import sendEvent from '../../analytics/sendEvent';
import infoBox from '../../common/infoBox';
import regExpFirstCapture from '../../common/regExpFirstCapture';
import calf from '../../support/calf';
import { composingFragmentType } from '../../support/constants';

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
  if (calf.userIsDev) { //  da/useItem Bad Msg
    // eslint-disable-next-line no-console
    console.log('da/useItem', 'Bad Msg', info); // skipcq: JS-0002
  }
}

const outputLookup = [
  ['You successfully used', () => ({ s: true })],
  ['You successfully extracted', components],
  ['You failed to extract', () => ({ r: {}, s: true })],
  ['You gained', stash],
  ['You received', zombie],
];

function devHook() {
  if (calf.userIsDev) { //  da/useItem No Info
    // eslint-disable-next-line no-console
    console.log('da/useItem', 'No Info'); // skipcq: JS-0002
  }
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
  return formatResults(doc);
}

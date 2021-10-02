import calf from '../../support/calf';
import { composingFragmentType } from '../../support/constants';
import indexAjaxData from '../../ajax/indexAjaxData';
import infoBoxFrom from '../../common/InfoBoxFrom';
import sendEvent from '../../analytics/sendEvent';

const extract = (info) => ({ r: { item: { n: info.match(/'(.*)'/)[1] } }, s: true });

function fragObj(pair) {
  const thisResult = pair.split(' x ');
  return {
    amount: thisResult[0],
    type: composingFragmentType.indexOf(thisResult[1]),
  };
}

function stash(info) {
  const reAry = info.match(/You gained (.*) Fragments/);
  if (reAry) {
    const frags = reAry[1].split(', ').map(fragObj);
    return { r: { frags }, s: true };
  }
  sendEvent('da/useItem', 'Bad Msg', info);
  if (calf.userIsDev) { //  da/useItem Bad Msg
    // eslint-disable-next-line no-console
    console.log('da/useItem', 'Bad Msg', info);
  }
}

const outputLookup = [
  ['You successfully used', () => ({ s: true })],
  ['You successfully extracted', extract],
  ['You failed to extract', () => ({ r: {}, s: true })],
  ['You gained', stash],
];

function devHook() {
  if (calf.userIsDev) { //  da/useItem No Info
    // eslint-disable-next-line no-console
    console.log('da/useItem', 'No Info');
  }
}

function formatResults(html) {
  const info = infoBoxFrom(html);
  if (info) {
    const thisResult = outputLookup.find((e) => info.startsWith(e[0]));
    if (thisResult) { return thisResult[1](info); }
  } else {
    sendEvent('da/useItem', 'No Info');
    devHook();
    return { s: false };
  }
  return { e: { message: info }, s: false };
}

export default function useItem(backpackInvId) {
  return indexAjaxData({
    cmd: 'profile',
    subcmd: 'useitem',
    inventory_id: backpackInvId,
  }).then(formatResults);
}

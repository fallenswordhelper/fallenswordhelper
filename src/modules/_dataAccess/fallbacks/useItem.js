import { composingFragmentType } from '../../support/constants';
import indexAjaxData from '../../ajax/indexAjaxData';
import infoBoxFrom from '../../common/InfoBoxFrom';
import sendEvent from '../../analytics/sendEvent';

const extract = (info) => ({ r: { item: { n: info.match(/'(.*)'/)[1] } }, s: true });

function fragObj(pair) {
  const thisResult = pair.match(/(\d+) x (.*)/);
  return {
    amount: thisResult[1],
    type: composingFragmentType.indexOf(thisResult[2]),
  };
}

function stash(info) {
  const reAry = info.match(/You gained (.*) Fragments/);
  if (reAry) {
    const frags = reAry[1].split(', ').map(fragObj);
    return { r: { frags }, s: true };
  }
  sendEvent('da/useItem', 'Bad Msg', info);
  // eslint-disable-next-line no-unused-labels, no-labels
  devLbl: { //  da/useItem Bad Msg
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

function formatResults(html) {
  const info = infoBoxFrom(html);
  if (info) {
    const thisResult = outputLookup.find((e) => info.startsWith(e[0]));
    if (thisResult) { return thisResult[1](info); }
  } else {
    sendEvent('da/useItem', 'No Info');
    // eslint-disable-next-line no-unused-labels, no-labels
    devLbl: { //  da/useItem No Info
      // eslint-disable-next-line no-console
      console.log('da/useItem', 'No Info');
    }
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

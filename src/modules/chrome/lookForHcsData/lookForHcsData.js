import add from '../../support/task';
import calf from '../../support/calf';
import dialogMsg from '../../common/dialogMsg';
import gameHelpLink from './gameHelpLink';
import getElementById from '../../common/getElement';
import getValue from '../../system/getValue';
import injectHelperMenu from '../helperMenu/injectHelperMenu';
import jsonParse from '../../common/jsonParse';
import notHuntMode from './notHuntMode';
import { nowSecs } from '../../support/now';
import replaceKeyHandler from '../keyHandler/keyHandler';
import sendEvent from '../../analytics/sendEvent';
import setValue from '../../system/setValue';

function betaWarning() {
  const lastBetaWarning = getValue('lastBetaWarning');
  if (calf.fshVer.length === 5 && lastBetaWarning < nowSecs - 24 * 60 * 60) {
    dialogMsg('<b>Beta version is deprecated.</b><br>'
      + 'There is a new user preference in<br>'
      + 'settings for Beta Program Opt-In.<br>'
      + 'Please install normal FSH here:<br>'
      + '<a href="https://fallenswordhelper.github.io/fallenswordhelper/Releases/Current/fallenswordhelper.user.js">'
      + 'https://fallenswordhelper.github.io/<br>'
      + 'fallenswordhelper/Releases/Current/<br>'
      + 'fallenswordhelper.user.js</a>');
    setValue('lastBetaWarning', nowSecs);
    sendEvent('Beta Warning', 'Warn');
  }
}

function prepareEnv() {
  if (getValue('gameHelpLink')) {
    add(3, gameHelpLink);
  }
  calf.huntingMode = getValue('huntingMode');
  add(3, replaceKeyHandler);
  notHuntMode();
  if (!getValue('hideHelperMenu')) {
    add(3, injectHelperMenu);
  }
  // eslint-disable-next-line no-unused-labels, no-labels
  betaLbl: { //  betaWarning
    betaWarning();
  }
}

function findHcsData() {
  const hcsHtml = getElementById('html');
  if (hcsHtml && hcsHtml.dataset) {
    return hcsHtml.dataset.hcs;
  }
}

function lookForUi(hcsData) {
  const thisJson = jsonParse(hcsData);
  if (thisJson && thisJson['new-ui']) {
    prepareEnv();
  }
}

export default function lookForHcsData() {
  const hcsData = findHcsData();
  if (hcsData) {
    lookForUi(hcsData);
  }
}

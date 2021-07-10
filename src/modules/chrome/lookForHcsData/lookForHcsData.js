import calf from '../../support/calf';
import gameHelpLink from './gameHelpLink';
import getElementById from '../../common/getElementById';
import getValue from '../../system/getValue';
import injectHelperMenu from '../helperMenu/injectHelperMenu';
import jsonParse from '../../common/jsonParse';
import notHuntMode from './notHuntMode';
import replaceKeyHandler from '../keyHandler/replaceKeyHandler';
import task from '../../support/task';

function prepareEnv() {
  if (getValue('gameHelpLink')) {
    task(3, gameHelpLink);
  }
  calf.huntingMode = getValue('huntingMode');
  task(3, replaceKeyHandler);
  notHuntMode();
  if (!getValue('hideHelperMenu')) {
    task(3, injectHelperMenu);
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

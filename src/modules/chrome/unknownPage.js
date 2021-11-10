import calf from '../support/calf';
import getElementById from '../common/getElementById';
import injectQuestBookFull from './pageSwitcher/loader/injectQuestBookFull';
import inventing from './pageSwitcher/loader/inventing';
import jQueryNotPresent from '../common/jQueryNotPresent';
import news from './pageSwitcher/loader/news';
import querySelector from '../common/querySelector';
import querySelectorAll from '../common/querySelectorAll';
import screenview from '../analytics/screenview';
import updateBuffLog from '../notepad/buffLog/updateBuffLog';
import xPath from '../common/xPath';

const unknown = [
  [
    () => querySelector('.news_left_column'),
    () => {
      screenview('unknown.news');
      news();
    },
  ],
  [
    () => getElementById('quickbuff-report'),
    () => {
      screenview('unknown.buffLog.updateBuffLog');
      updateBuffLog();
    },
  ],
  [
    () => xPath('//td[.="Quest Name"]'),
    () => {
      screenview('unknown.questBook.injectQuestBookFull');
      injectQuestBookFull();
    },
  ],
  [
    () => querySelectorAll('#pCC img[title="Inventing"]').length > 0,
    () => {
      screenview('unknown.recipes.inventing');
      inventing();
    },
  ],
  [
    () => calf.userIsDev, // unknownPage
    // eslint-disable-next-line no-console
    () => { console.log('Fell through!'); },
  ],
];

export default function unknownPage() { // Legacy
  if (jQueryNotPresent()) { return; }
  if (calf.userIsDev) { // unknownPage
    // eslint-disable-next-line no-console
    console.log('unknownPage');
  }
  const known = unknown.find((el) => el[0]());
  if (known) { known[1](); }
}

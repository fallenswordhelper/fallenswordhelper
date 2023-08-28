import screenview from '../analytics/screenview';
import getElementById from '../common/getElementById';
import jQueryNotPresent from '../common/jQueryNotPresent';
import querySelector from '../common/querySelector';
import xPath from '../common/xPath';
import updateBuffLog from '../notepad/buffLog/updateBuffLog';
import calf from '../support/calf';
import stdout from '../support/stdout';
import injectQuestBookFull from './pageSwitcher/loader/injectQuestBookFull';
import news from './pageSwitcher/loader/news';
import viewRecipe from './pageSwitcher/loader/viewRecipe';

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
    () => querySelector('#pCC input[value="doinvent"]'),
    () => {
      screenview('unknown.recipes.inventing');
      viewRecipe();
    },
  ],
  [
    () => calf.userIsDev, // unknownPage
    () => { stdout('Fell through!'); },
  ],
];

export default function unknownPage() { // Legacy
  if (jQueryNotPresent()) return;
  const show = 0;
  if (calf.userIsDev && show) stdout('unknownPage'); // unknownPage
  const known = unknown.find((el) => el[0]());
  if (known) known[1]();
}

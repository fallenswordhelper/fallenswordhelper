import add from '../../../support/task';
import currentGuildId from '../../../common/currentGuildId';
import eventHandlers from './eventHandlers';
import getMembrList from '../../../ajax/getMembrList';
import jQueryNotPresent from '../../../common/jQueryNotPresent';
import prepareChildRows from './prepareChildRows';
import reportHeader from './reportHeader';
import searchUser from './searchUser';

async function doReportHeader() {
  await getMembrList(false);
  add(3, reportHeader);
}

export default function injectReportPaint() { // jQuery
  if (jQueryNotPresent() || !currentGuildId()) { return; }
  doReportHeader();
  add(2, searchUser);
  add(3, prepareChildRows);
  eventHandlers();
}

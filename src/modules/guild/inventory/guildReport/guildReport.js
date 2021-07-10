import currentGuildId from '../../../common/currentGuildId';
import eventHandlers from './eventHandlers';
import getMembrList from '../../../ajax/getMembrList';
import jQueryNotPresent from '../../../common/jQueryNotPresent';
import prepareChildRows from './prepareChildRows';
import reportHeader from './reportHeader';
import searchUser from './searchUser';
import task from '../../../support/task';

async function doReportHeader() {
  await getMembrList(false);
  task(3, reportHeader);
}

export default function guildReport() { // jQuery
  if (jQueryNotPresent() || !currentGuildId()) { return; }
  doReportHeader();
  task(2, searchUser);
  task(3, prepareChildRows);
  eventHandlers();
}

import getMembrList from '../../../ajax/getMembrList';
import currentGuildId from '../../../common/currentGuildId';
import jQueryNotPresent from '../../../common/jQueryNotPresent';
import task from '../../../support/task';
import eventHandlers from './eventHandlers';
import prepareChildRows from './prepareChildRows';
import reportHeader from './reportHeader';
import searchUser from './searchUser';

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

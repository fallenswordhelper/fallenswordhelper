import './privateMsg.css';
import dataRows from '../../common/dataRows';
import getTextTrim from '../../common/getTextTrim';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import { secureUrl, tradeUrl } from '../../support/constants';
import getUrlParameter from '../../system/getUrlParameter';
import getValue from '../../system/getValue';
import addLogColoring from '../addLogColoring';
import addLogWidgets from '../playerLogWidgets/addLogWidgets';
import getLastTable from '../playerLogWidgets/getLastTable';
import interceptLinks from './interceptLinks';

const getMsgCell = (tr) => [getTextTrim(tr.children[2]), tr.children[3]];

function addMsgButtons(logTable) {
  if (!getValue('privateMsgButtons')) {
    return;
  }
  const msgCells = dataRows(logTable, 6, 0).map(getMsgCell);
  msgCells.forEach(([sender, msgCell]) => {
    insertHtmlBeforeEnd(
      msgCell,
      '&nbsp;&nbsp;[ ' +
        `<button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${
          tradeUrl + sender
        }">Send</a> | <a class="pmSecureUrl" href="${
          secureUrl + sender
        }">Trade</a> ]`,
    );
  });
}

function addMsgWidgets() {
  const logTable = getLastTable();
  if (logTable) {
    addMsgButtons(logTable);
    addLogWidgets(1);
    interceptLinks(logTable);
  }
}

export default function privateMsg() {
  if (getUrlParameter('type') === '1') {
    addLogColoring('PrivateMsg', 1, 6);
    addMsgWidgets();
  } else {
    addLogColoring('OutBox', 1, 4);
  }
}

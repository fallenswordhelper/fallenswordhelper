import runDefault from '../../common/runDefault';
import injectQuestbookFull from '../../questbook/injectQuestbookFull';

const injectQuestTracker = () => { runDefault(import('../../questbook/injectQuestTracker')); };

export default {
  '-': { '-': injectQuestbookFull },
  atoz: { '-': injectQuestbookFull },
  viewquest: { '-': injectQuestTracker },
};

import runDefault from '../../common/runDefault';
import injectQuestBookFull from '../../questbook/injectQuestBookFull';

const injectQuestTracker = () => { runDefault(import('../../questbook/injectQuestTracker')); };

export default {
  '-': { '-': injectQuestBookFull },
  atoz: { '-': injectQuestBookFull },
  viewquest: { '-': injectQuestTracker },
};

import { injectQuestBookFull } from './loader';
import runDefault from '../../common/runDefault';

const injectQuestTracker = () => { runDefault(import('../../questbook/injectQuestTracker')); };

export default {
  '-': { '-': injectQuestBookFull },
  atoz: { '-': injectQuestBookFull },
  viewquest: { '-': injectQuestTracker },
};

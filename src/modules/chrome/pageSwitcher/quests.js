import runDefault from '../../common/runDefault';
import { ufsgAllowBack } from './loader';

const showAllQuestSteps = () => { runDefault(import('../../guide/showAllQuestSteps')); };

export default {
  '-': { '-': ufsgAllowBack },
  view: { '-': showAllQuestSteps },
};

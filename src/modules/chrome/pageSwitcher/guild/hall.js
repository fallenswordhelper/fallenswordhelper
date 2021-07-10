import { bioWidgets } from '../loader';
import runDefault from '../../../common/runDefault';

const hall = () => { runDefault(import('../../../guild/hall/hall')); };

export default {
  '-': hall,
  post: bioWidgets,
};

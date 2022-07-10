import runDefault from '../../../common/runDefault';
import bioWidgets from '../loader/bioWidgets';

const hall = () => { runDefault(import('../../../guild/hall/hall')); };

export default {
  '-': hall,
  post: bioWidgets,
};

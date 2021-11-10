import bioWidgets from '../loader/bioWidgets';
import runDefault from '../../../common/runDefault';

const hall = () => { runDefault(import('../../../guild/hall/hall')); };

export default {
  '-': hall,
  post: bioWidgets,
};

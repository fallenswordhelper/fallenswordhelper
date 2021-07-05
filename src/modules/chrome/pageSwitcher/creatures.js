import runDefault from '../../common/runDefault';
import { ufsgAllowBack } from './loader';

const imgFix = () => { runDefault(import('../../guide/imgFix')); };

export default {
  '-': { '-': ufsgAllowBack },
  view: { '-': imgFix },
};

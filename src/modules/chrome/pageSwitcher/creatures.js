import runDefault from '../../common/runDefault';
import ufsgAllowBack from './loader/ufsgAllowBack';

const imgFix = () => { runDefault(import('../../guide/imgFix')); };

export default {
  '-': { '-': ufsgAllowBack },
  view: { '-': imgFix },
};

import bioWidgets from './loader/bioWidgets';
import injectProfileDropItems from './loader/injectProfileDropItems';
import profile from './loader/profile';

export default {
  '-': { '-': profile },
  managecombatset: { '-': profile },
  report: { '-': profile },
  equipitem: { '-': profile },
  useitem: { '-': profile },
  changebio: { '-': bioWidgets },
  dropitems: { '-': injectProfileDropItems },
};

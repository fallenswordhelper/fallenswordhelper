import {
  bioWidgets,
  injectProfileDropItems,
  profile,
} from './loader';

export default {
  '-': { '-': profile },
  managecombatset: { '-': profile },
  report: { '-': profile },
  equipitem: { '-': profile },
  useitem: { '-': profile },
  changebio: { '-': bioWidgets },
  dropitems: { '-': injectProfileDropItems },
};

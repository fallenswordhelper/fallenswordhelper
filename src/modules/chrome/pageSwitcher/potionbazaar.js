import runDefault from '../../common/runDefault';

const bazaar = () => { runDefault(import('../../bazaar/bazaar')); };

export default {
  '-': { '-': bazaar },
  buyitem: { '-': bazaar },
};

import runDefault from '../../common/runDefault';

const bazaar = () => { runDefault(import('../../bazaar')); };

export default {
  '-': { '-': bazaar },
  buyitem: { '-': bazaar },
};

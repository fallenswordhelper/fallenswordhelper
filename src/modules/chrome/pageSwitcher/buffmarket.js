import runDefault from '../../common/runDefault';

const injectBuyButtons = () => { runDefault(import('../../buffmarket/injectBuyButtons')); };

export default {
  '-': { '-': injectBuyButtons },
};

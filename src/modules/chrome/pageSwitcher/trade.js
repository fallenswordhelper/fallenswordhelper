import runDefault from '../../common/runDefault';

const trade = () => { runDefault(import('../../trade/trade')); };

export default {
  '-': { '-': trade },
  sendgold: { '-': trade },
  createsecure: { '-': trade },
  docreatesecure: { '-': trade },
};

import runDefault from '../../common/runDefault';

const globalQuest = () => { runDefault(import('../../topRated/globalQuest')); };
const toprated = () => { runDefault(import('../../topRated/toprated')); };

export default {
  xp: { '-': toprated },
  monthlyxp: { '-': toprated },
  gold: { '-': toprated },
  killstreak: { '-': toprated },
  bounties: { '-': toprated },
  risingstars: { '-': toprated },
  arena: { '-': toprated },
  superelites: { '-': toprated },
  smasher: { '-': toprated },
  globalquest: { '-': globalQuest },
};

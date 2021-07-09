import runDefault from '../../common/runDefault';

const injectArena = () => { runDefault(import('../../arena/arena')); };
const arenaDoJoin = () => { runDefault(import('../../arena/arenaDoJoin')); };
const arenaJoin = () => {
  runDefault(import('../../arena/arenaJoin/arenaJoin'));
};
const completedArenas = () => {
  runDefault(import('../../arena/completedArenas'));
};
const setupMoves = () => {
  runDefault(import('../../arena/arenaSetup/setupMoves'));
};
const storeMoves = () => { runDefault(import('../../arena/storeMoves')); };

const arena = {
  '-': { '-': injectArena },
  dojoin: { '-': arenaDoJoin },
  join: { '-': arenaJoin },
  completed: { '-': completedArenas },
  pickmove: { '-': storeMoves },
  setup: { '-': setupMoves },
};

export default arena;

import myStats from '../../ajax/myStats';
import jsonStringify from '../../common/jsonStringify';
import playerName from '../../common/playerName';
import sendException from '../../exceptions/sendException';

const justUsername = (obj) => obj.username;

let allyPrm = null;

async function getAllyEnemy() {
  const stats = await myStats(false);
  if (stats?.username !== playerName()) return {};
  if (!stats._allies || !stats._enemies) {
    sendException(`myStats returned ${jsonStringify(stats)}`);
  }
  return {
    ...(stats._allies && { _allies: stats._allies.map(justUsername) }),
    ...(stats._enemies && { _enemies: stats._enemies.map(justUsername) }),
  };
}

function getPrm() {
  if (!allyPrm) allyPrm = getAllyEnemy();
  return allyPrm;
}

export async function isAlly(username) {
  return (await getPrm())._allies?.includes(username);
}

export async function isEnemy(username) {
  return (await getPrm())._enemies?.includes(username);
}

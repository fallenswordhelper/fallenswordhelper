import myStats from '../../ajax/myStats';

const justUsername = (obj) => obj.username;

let allyPrm = 0;

async function getAllyEnemy() {
  const stats = await myStats(false);
  return {
    ...(stats._allies && { _allies: stats._allies.map(justUsername) }),
    ...(stats._enemies && { _enemies: stats._enemies.map(justUsername) }),
  };
}

function getPrm() {
  if (!allyPrm) allyPrm = getAllyEnemy();
  return allyPrm;
}

export async function isAlly(playerName) {
  return (await getPrm())._allies?.includes(playerName);
}

export async function isEnemy(playerName) {
  return (await getPrm())._enemies?.includes(playerName);
}

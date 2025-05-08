import keys from '../../common/keys';
import partial from '../../common/partial';

function onlinePlayer(onlinePlayers, player) {
  const guildImage = $('<div/>').append(onlinePlayers[player][0]);
  $('img', guildImage).addClass('fshImgCntr');
  return [
    guildImage.html(),
    onlinePlayers[player][1],
    onlinePlayers[player][2],
    onlinePlayers[player][3] * 100
    + onlinePlayers[player][4] + 1,
  ];
}

export default function buildOnlinePlayerData(onlinePlayers) { // jQuery
  return keys(onlinePlayers).map(partial(onlinePlayer, onlinePlayers));
}

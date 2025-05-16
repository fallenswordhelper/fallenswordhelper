import gold from './player/gold';
import playerBank from './player/playerBank';
import guildBank from './guild/guildBank';

const playerData = {
  gold,
  bank: playerBank,
};

const guildData = {
  bank: guildBank,
};


export default function hData(doc, fields) {
  return {
    p: (fields.player ?? []).map((field) => playerData[field](doc)),
    g: (fields.guild ?? []).map((field) => guildData[field](doc)),
  };
}

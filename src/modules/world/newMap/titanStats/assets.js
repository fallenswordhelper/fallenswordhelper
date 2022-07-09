import textSpan from '../../../common/cElement/textSpan';

let current = 0;
let kills = 0;
let member = 0;
let pctTotal = 0;
let status = 0;
let titanHp = 0;
let total = 0;
let yourGuild = 0;

export const getCurrent = () => current;
export const getKills = () => kills;
export const getMember = () => member;
export const getPctTotal = () => pctTotal;
export const getStatus = () => status;
export const getTitanHp = () => titanHp;
export const getTotal = () => total;
export const getYourGuild = () => yourGuild;

function partOne() {
  current = textSpan('Current');
  kills = textSpan('Kills');
  member = textSpan('Member');
  pctTotal = textSpan('% of Total');
}

function partTwo() {
  status = textSpan('Status');
  titanHp = textSpan('Titan HP');
  total = textSpan('Total');
  yourGuild = textSpan('Your Guild');
}

export function buildAssets() {
  partOne();
  partTwo();
}

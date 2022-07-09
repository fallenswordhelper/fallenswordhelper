import textSpan from '../../../common/cElement/textSpan';

let current;
let kills;
let member;
let pctTotal;
let status;
let titanHp;
let total;
let yourGuild;

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

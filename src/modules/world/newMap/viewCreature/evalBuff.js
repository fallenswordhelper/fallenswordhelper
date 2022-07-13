/* eslint-disable no-param-reassign */
export default function evalBuff(combat, buffLvl, label, effectedStat) {
  if (buffLvl > 0) {
    combat.extraNotes += `${label} = ${Math.floor(effectedStat * buffLvl * 0.001)}<br>`;
  }
}

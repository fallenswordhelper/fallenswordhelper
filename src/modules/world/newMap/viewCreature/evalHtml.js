const willIBeHit = (combat) => (combat.creatureHitByHowMuch >= 0 ? 'Yes' : 'No');
const canIHitIt = (combat) => (combat.hitByHowMuch > 0 ? 'Yes' : 'No');
const doesGroupExist = (combat) => (combat.callback.groupExists ? 'Group ' : '');

const dataSpan = (stuff) => `<span style="color:#333333">${stuff}</span>`;
const basicRow = (stuff) => `<tr>${stuff}</tr>`;
const dataCell = (element, index) => `<td${index % 2 ? '' : ' class="fshRight"'}>${element}</td>`;
const dataRow = (stuffAry) => basicRow(stuffAry.map(dataCell).join(''));

const headerRow = (combat) => basicRow(`<td bgcolor="#CD9E4B" colspan="4" align="center">${
  doesGroupExist(combat)}Combat Evaluation</td>`);

const willIHitItRow = (combat) => dataRow([
  dataSpan('Will I hit it?'),
  canIHitIt(combat),
  dataSpan('Extra Attack:'),
  `( ${combat.hitByHowMuch} )`,
]);

const numberOfHitsRequiredRow = (combat) => dataRow([
  dataSpan('# Hits to kill it?'),
  combat.numberOfHitsRequired,
  dataSpan('Extra Damage:'),
  `( ${combat.damageDone} )`,
]);

const willIBeHitRow = (combat) => dataRow([
  dataSpan('Will I be hit?'),
  willIBeHit(combat),
  dataSpan('Extra Defense:'),
  `( ${-1 * combat.creatureHitByHowMuch} )`,
]);

const hitsToKillMeRow = (combat) => dataRow([
  dataSpan('# Hits to kill me?'),
  combat.numberOfCreatureHitsTillDead,
  dataSpan('Extra Armor + HP:'),
  `( ${-1 * combat.creatureDamageDone} )`,
]);

const numberOfHitsRow = (combat) => dataRow([
  dataSpan('# Player Hits?'),
  combat.playerHits,
  dataSpan('# Creature Hits?'),
  combat.creatureHits,
]);

const fightStatusRow = (combat) => basicRow(`${
  dataCell(dataSpan('Fight Status:'), 0)}<td colspan="3"><span>${combat.fightStatus}</span></td>`);

const notesRow = (combat) => basicRow(`${
  dataCell(dataSpan('Notes:'), 0)}<td colspan="3"><span style="font-size:x-small;">${
  combat.extraNotes}</span></td>`);

export default function evalHTML(combat) {
  return `<table width="100%"><tbody>${
    headerRow(combat)
  }${willIHitItRow(combat)
  }${numberOfHitsRequiredRow(combat)
  }${willIBeHitRow(combat)
  }${hitsToKillMeRow(combat)
  }${numberOfHitsRow(combat)
  }${fightStatusRow(combat)
  }${notesRow(combat)
  }</tbody></table>`;
}

import isString from '../../common/isString';
import partial from '../../common/partial';

const lookup = [
  [],
  ['(Potion)'],
  ['recalled the item', 'took the item', 'auto-returned the',
    'stored the item'],
  ['has added flags to', 'has removed flags to'],
  ['relic. This relic now has an empower level of',
    'relic. The relic empower level has been reset to zero.',
    'failed to capture the relic', 'captured the relic', 'captured your relic',
    'has captured the undefended relic', 'attempted to capture your relic',
    / empowered the .+ relic/, / removed the empowerment from the .+ relic/],
  ['disbanded a mercenary.', 'hired the mercenary'],
  ['has disbanded one of their groups',
    /A group from your guild was (.*) in combat./],
  [/deposited [,0-9]+ gold into the guild bank/,
    /deposited [,0-9]+ Fallen Sword Points into the guild./],
  ['has added a new rank entitled', 'has deleted the rank',
    'has requested to join the guild', 'has invited the player',
    'has officially joined the guild', 'has been kicked from the guild by',
    'has left the guild', 'has been assigned the rank',
    'has added/updated a rank entitled',
    /has revoked .+'s invite to the guild/],
  [/resulted in .* with a final score of/,
    'resulted in a draw. Your GvG rating ',
    'has just initiated a conflict with the guild',
    'has initiated a conflict with your guild',
    'is participating in the conflict against'],
  ['bought the Titan Reward item',
    'from your guild\'s contribution to the defeat of the titan',
    'a 7 day cooldown has been activated on your guild for this titan'],
];

function isMatch(data, el) {
  if (isString(el)) {
    return data.includes(el);
  }
  return el.test(data);
}

function logType(data, ary) { return ary.some(partial(isMatch, data)); }

export default function profiler(data) {
  const myIndex = lookup.findIndex(partial(logType, data));
  if (myIndex === -1) { return 0; }
  return myIndex;
}

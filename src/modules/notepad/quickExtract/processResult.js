import { composingFragmentType } from '../../support/constants';

function expandFrags(frag) {
  return `${frag.amount} x ${composingFragmentType[frag.type]}`;
}

const resultType = [
  [
    (r) => r.components?.length,
    (r) => `You successfully extracted 1 '${
      r.components?.[0].n}' component(s) from 1 resource(s).`,
  ],
  [
    (r) => r.frags,
    (r) => `You gained ${
      r.frags.map(expandFrags).join(', ')} Fragments by opening the Fragment Stash.`,
  ],
  [
    (r) => r.mailbox_items?.length,
    (r) => `You received 1 x '${r.mailbox_items?.[0].n}' from the container.`,
  ],
  [
    () => 1,
    () => '<span class="fshRed">You failed to extract any components from resource(s).</span>',
  ],
];

export default function processResult(r) {
  return resultType.find(([c]) => c(r))[1](r);
}

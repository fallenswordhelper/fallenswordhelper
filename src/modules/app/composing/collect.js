import composing from './composing';

export default function collect(pid) {
  return composing({ subcmd: 'collect', potion_id: pid });
}

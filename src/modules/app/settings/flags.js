import settings from './settings';

export default function flags(flagsArray) {
  return settings({
    subcmd: 'flags',
    flags: flagsArray.map((i) => (i ? 1 : 0)),
  });
}

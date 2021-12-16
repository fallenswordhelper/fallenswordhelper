import postApp from '../postApp';

export default function skill(level, blocked) {
  return postApp({
    cmd: 'settings',
    subcmd: 'skill',
    level,
    blocked,
  });
}

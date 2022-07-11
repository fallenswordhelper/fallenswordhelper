import regExpExec from './regExpExec';

export default function regExpGroups(re, str) {
  return regExpExec(re, str)?.groups ?? {};
}

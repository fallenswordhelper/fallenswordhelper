import regExpExec from './regExpExec';

export default function regExpFirstCapture(re, str) {
  const matches = regExpExec(re, str);
  if (matches) return matches[1];
}

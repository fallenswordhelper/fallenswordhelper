export default function regExpFirstCapture(re, str) {
  const matches = re.exec(str);
  if (matches) return matches[1];
}

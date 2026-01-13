import stdout from './stdout';

export default function devStdOut(...rest) {
  if (defineUserIsDev) {
    const timestamp = new Date().toLocaleTimeString();
    const [first, ...remaining] = rest;
    stdout(`[${timestamp}] ${first}`, ...remaining);
  }
}

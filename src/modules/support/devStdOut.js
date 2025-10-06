import stdout from './stdout';

export default function devStdOut(...rest) {
  if (defineUserIsDev) stdout(...rest);
}

import { phEvent } from './posthog';

export default function screenview(funcName) {
  phEvent(`screenview__${funcName}`);
}

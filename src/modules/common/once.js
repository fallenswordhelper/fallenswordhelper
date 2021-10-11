import isBoolean from './isBoolean';
import on from './on';

function listenerOptions(options) {
  if (isBoolean(options)) {
    return { capture: options };
  }
  return options;
}

export default function once(target, type, listener, addOptions) {
  on(target, type, listener, { once: true, ...listenerOptions(addOptions) });
}

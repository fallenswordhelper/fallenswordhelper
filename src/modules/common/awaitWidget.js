import toLowerCase from './toLowerCase';

const thisWidget = (el, widget, prefix) => $(el).data(`${prefix}${widget}`);

function waitForWidget(el, widget, prefix, resolve) {
  $(el).on(`${toLowerCase(widget)}create`, () => {
    resolve(thisWidget(el, widget, prefix));
  });
}

export default function awaitWidget(el, widget, prefix) {
  return new Promise((resolve) => {
    const preWidget = thisWidget(el, widget, prefix);
    if (preWidget) {
      resolve(preWidget);
    } else {
      waitForWidget(el, widget, prefix, resolve);
    }
  });
}

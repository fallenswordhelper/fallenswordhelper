import toLowerCase from './toLowerCase';

const thisWidget = (el, widget, prefix) => $(el).data(`${prefix}${widget}`);

function widgetPromise(el, widget, prefix) {
  return (resolve) => {
    const preWidget = thisWidget(el, widget, prefix);
    if (preWidget) {
      resolve(preWidget);
    } else {
      $(el).on(`${toLowerCase(widget)}create`, () => {
        resolve(thisWidget(el, widget, prefix));
      });
    }
  };
}

export default function awaitWidget(el, widget, prefix) {
  return new Promise(widgetPromise(el, widget, prefix));
}

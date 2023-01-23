import toLowerCase from './toLowerCase';

const thisWidget = (el, widget) => $(el).data(`hcs${widget}`);
const onCreate = (el, widget, resolve) => () => { resolve(thisWidget(el, widget)); };

function widgetPromise(el, widget) {
  return (resolve) => {
    const preWidget = thisWidget(el, widget);
    if (preWidget) {
      resolve(preWidget);
    } else {
      $(el).on(`${toLowerCase(widget)}create`, onCreate(el, widget, resolve));
    }
  };
}

export default function awaitWidget(el, widget) {
  return new Promise(widgetPromise(el, widget));
}

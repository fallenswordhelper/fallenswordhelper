import toLowerCase from './toLowerCase';

const thisWidget = (el, widget) => $(el).data(`hcs${widget}`);

export default function awaitWidget(el, widget) {
  return new Promise((resolve) => {
    const preWidget = thisWidget(el, widget);
    if (preWidget) {
      resolve(preWidget);
    } else {
      $(el).on(`${toLowerCase(widget)}create`, () => {
        resolve(thisWidget(el, widget));
      });
    }
  });
}

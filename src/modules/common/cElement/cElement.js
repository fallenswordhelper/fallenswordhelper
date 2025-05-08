import mixin from '../mixin';

export default function cElement(type, props) {
  const el = document.createElement(type);
  if (props) { mixin(el, props); }
  return el;
}

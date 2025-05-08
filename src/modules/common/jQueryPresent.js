import isFunction from './isFunction';

export default function jQueryPresent() { return isFunction(window.jQuery); }

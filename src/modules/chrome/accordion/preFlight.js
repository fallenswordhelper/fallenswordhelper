import sendException from '../../analytics/sendException';
import getElementById from '../../common/getElementById';
import isObject from '../../common/isObject';

function foundNav(myNav) {
  if (isObject(myNav)) { return true; }
  sendException('$(\'#nav\').data(\'hcsNav\') is not an object', false);
}

function foundHeights(myNav) {
  if ('heights' in myNav) { return true; }
  sendException('$(\'#nav\').data(\'hcsNav\').heights does not exist', false);
}

function foundWidget(myNav) {
  if (foundNav(myNav) && foundHeights(myNav)) { return true; }
}

export default function preFlight() { // jQuery.min
  const theNav = getElementById('nav');
  const myNav = $(theNav).data('hcsNav');
  if (myNav && foundWidget(myNav)) {
    return [theNav, myNav];
  }
  return [];
}

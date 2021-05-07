import noGa from './noGa';

export default function screenview(funcName) {
  if (noGa()) { return; }
  ga('fshApp.set', 'screenName', funcName);
  ga('fshApp.send', 'screenview');
}

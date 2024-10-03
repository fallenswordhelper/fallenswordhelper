import handleEvent from './handleEvent';
import partial from './partial';

function passingTest(target, el) {
  return el[0](target);
}

export default function eventHandler5(evtAry) {
  return partial(handleEvent, passingTest, evtAry);
}

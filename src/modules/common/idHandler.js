import handleEvent from './handleEvent';

const idTest = (target, [id]) => target.id === id;

export default function idHandler(evtAry) {
  return (e) => handleEvent(idTest, evtAry, e);
}

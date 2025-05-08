import partial from './partial';

export default function handleEvent(passingTest, evtAry, evt) {
  const { target } = evt;
  const hdl = evtAry.find(partial(passingTest, target));
  if (hdl) { return hdl[1](target); }
}

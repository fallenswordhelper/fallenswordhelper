import './arenaJoin.css';
import getElementById from '../../common/getElement';
import injectArena from '../arena';
import interceptSubmit from '../../common/interceptSubmit';
import showAttribs from './showAttribs';
import view from '../../app/arena/view';

export default function arenaJoin() {
  const tabs = getElementById('arenaTypeTabs');
  if (tabs) {
    injectArena();
  } else {
    interceptSubmit();
    view().catch(() => ({})).then(showAttribs);
  }
}

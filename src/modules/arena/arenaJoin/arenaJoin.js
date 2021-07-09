import './arenaJoin.css';
import arena from '../arena';
import getElementById from '../../common/getElement';
import interceptSubmit from '../../common/interceptSubmit';
import showAttribs from './showAttribs';
import view from '../../app/arena/view';

export default function arenaJoin() {
  const tabs = getElementById('arenaTypeTabs');
  if (tabs) {
    arena();
  } else {
    interceptSubmit();
    view().catch(() => ({})).then(showAttribs);
  }
}

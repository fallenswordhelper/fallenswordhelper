import interceptSubmit from '../common/interceptSubmit';
import optInWidget from './optInWidget';
import trackLastReset from './trackLastReset';

export default function ladder() {
  interceptSubmit();
  trackLastReset();
  optInWidget();
}

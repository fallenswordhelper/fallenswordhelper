import './liquid.css';
import getElementById from '../../common/getElementById';
import setInnerHtml from '../../dom/setInnerHtml';
import settings from './settings.liquid';

export default function injectHtml() {
  setInnerHtml(settings, getElementById('fshSettings'));
}

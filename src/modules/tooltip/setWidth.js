import './tooltip.css';
import cElement from '../common/cElement/cElement';

export default function setWidth(width, node = false) {
  if (node) {
    /* eslint-disable no-param-reassign */
    node.style.width = `${width}px`;
    node.style.marginLeft = `${width / 2 + 4}px`;
    /* eslint-enable no-param-reassign */
  } else {
    const styleSheet = cElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `.fshTooltipContent { width: ${width}px; margin-left: -${width / 2 + 4};}`;
    document.head.appendChild(styleSheet);
  }
}

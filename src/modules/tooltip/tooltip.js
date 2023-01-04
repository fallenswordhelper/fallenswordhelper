import './tooltip.css';
import createBr from '../common/cElement/createBr';
import createDiv from '../common/cElement/createDiv';
import createSpan from '../common/cElement/createSpan';

export default function tooltip(tooltipHover, tooltipContent, tooltipTitle = false) {
  const ttDiv = createDiv({ classList: 'fshTooltip' });
  const tttDiv = createDiv({ classList: 'fshTooltipContent' });
  if (tooltipTitle) {
    tttDiv.append(
      createSpan({ classList: 'fshTooltiptitle', innerHTML: tooltipTitle }),
      createBr(),
      createBr(),
    );
  }
  tttDiv.append(tooltipContent);
  ttDiv.append(tooltipHover, tttDiv);
  return ttDiv;
}

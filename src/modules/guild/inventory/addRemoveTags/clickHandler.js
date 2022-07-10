import daGsTake from '../../../_dataAccess/daGsTake';
import clickThis from '../../../common/clickThis';
import partial from '../../../common/partial';
import querySelectorArray from '../../../common/querySelectorArray';
import setText from '../../../dom/setText';
import { cdn } from '../../../system/system';

function doCheckAll() {
  querySelectorArray('#pCC input[name="tagIndex[]"]').forEach(clickThis);
}

function takeResult(ctx, data) {
  if (data.s) {
    ctx.removeAttribute('style');
    ctx.className = 'fshGreen';
    setText('Taken', ctx);
  }
}

function fastBp(ctx) {
  const itmId = ctx.parentNode.previousElementSibling.previousElementSibling
    .children[0].value;
  daGsTake(itmId).then(partial(takeResult, ctx));
  setText('', ctx);
  ctx.className = 'guildTagSpinner';
  ctx.style.backgroundImage = `url('${cdn}ui/misc/spinner.gif')`;
}

export default function clickHandler(e) {
  const { target } = e;
  if (target.value === 'Check All') { doCheckAll(); }
  if (target.className === 'sendLink') { fastBp(target); }
}

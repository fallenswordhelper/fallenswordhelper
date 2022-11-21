import './makeToggleBtn.css';
import createDiv from '../../../common/cElement/createDiv';
import createInput from '../../../common/cElement/createInput';
import createLabel from '../../../common/cElement/createLabel';
import insertElement from '../../../common/insertElement';

function createLbl(className, tip, htmlFor) {
  return createLabel({
    className: `fshCurveEle fshCurveLbl fshPoint tip-static ${className}`,
    dataset: { tipped: tip },
    htmlFor,
  });
}

export default function makeToggleBtn(o) {
  const btnDiv = createDiv({ className: 'fshToggle' });
  const btnCheck = createInput({
    checked: o.prefVal,
    id: o.checkId,
    type: 'checkbox',
  });
  insertElement(btnDiv, btnCheck);
  const onLbl = createLbl(o.onClass, o.onTip, o.checkId);
  insertElement(btnDiv, onLbl);
  const offLbl = createLbl(o.offClass, o.offTip, o.checkId);
  insertElement(btnDiv, offLbl);
  insertElement(o.worldName, btnDiv);
  return btnCheck;
}

import createDiv from '../common/cElement/createDiv';
import { pCC } from '../support/layout';

const errorDiv = createDiv({
  hidden: true,
  style: `
    border: 2px solid #fff;
    margin: 10px auto;
    width: 80%;
    background-color: #D3CFC1;
    text-align: center;
    padding: 2px;
  `,
});
const errorHeader = createDiv({
  style: `
    background-color: #8E8668;
    color: #fff;
    text-transform: capitalize;
  `,
});
errorDiv.append(errorHeader);
errorDiv.append(createDiv());
pCC.prepend(errorDiv);

export function clearError() {
  errorDiv.hidden = true;
}

export function showError(message, header = 'INFORMATION') {
  errorDiv.childNodes[0].textContent = header;
  errorDiv.childNodes[1].textContent = message;
  errorDiv.hidden = false;
}

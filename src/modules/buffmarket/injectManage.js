import createInput from '../common/cElement/createInput';
import onclick from '../common/onclick';
import querySelector from '../common/querySelector';
import ResetCasts from './ResetCasts.svelte';

let app = false;

function startApp() {
  if (!app) {
    app = new ResetCasts({
      target: querySelector('input[value="Toggle All Off"]').parentElement,
      visible: false,
    });
    return app;
  }
  app.show();
}

export default function injectManage() {
  const appButton = createInput({
    type: 'button',
    value: 'Reset Casts',
  });
  querySelector('input[value="Toggle All Off"]').after(' ', appButton);
  onclick(appButton, startApp);
}

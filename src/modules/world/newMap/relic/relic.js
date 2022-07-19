import getElementById from '../../../common/getElementById';
import { defRelicView } from '../../../support/constants';
import Relic from './Relic.svelte';

let app = 0;

function startApp(target, relicData) {
  if (app) app.$destroy();
  app = new Relic({ props: { relicData }, target });
}

function viewRelic(_e, data) {
  if (data?.response?.data?.defenders?.length > 0) {
    startApp(getElementById('dialog-relic'), data.response.data);
  }
}

export default function relic() {
  $.subscribe(defRelicView, viewRelic);
}

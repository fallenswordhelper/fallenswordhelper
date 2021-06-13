import { N as navigateTo, O as indexPhp } from './calfSystem-86663d02.js';

function formToUrl(form) {
  navigateTo(`${indexPhp}?${(new URLSearchParams(new FormData(form))).toString()}`);
}

export { formToUrl as f };
//# sourceMappingURL=formToUrl-bdc5f748.js.map

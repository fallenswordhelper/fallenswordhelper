import { N as navigateTo, O as indexPhp } from './calfSystem-23094c64.js';

function formToUrl(form) {
  navigateTo(`${indexPhp}?${(new URLSearchParams(new FormData(form))).toString()}`);
}

export { formToUrl as f };
//# sourceMappingURL=formToUrl-68851fbc.js.map

import { N as navigateTo, O as indexPhp } from './calfSystem-02fd040d.js';

function formToUrl(form) {
  navigateTo(`${indexPhp}?${(new URLSearchParams(new FormData(form))).toString()}`);
}

export { formToUrl as f };
//# sourceMappingURL=formToUrl-37eb4bb6.js.map

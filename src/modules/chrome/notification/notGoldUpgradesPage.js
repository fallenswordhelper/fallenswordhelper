export default function notGoldUpgradesPage() {
  return window.location.search.indexOf('cmd=points&type=1') === -1;
}

export default function addCommas(x) {
  return new Intl.NumberFormat('en-us').format(x);
}

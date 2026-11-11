import regExpFirstCapture from '../common/regExpFirstCapture';

// Game 4.6 moved the buy/toggle/delete/feature actions from onclick to
// data-fs-post="index.php?...&id=123". Read either.
export default function getPackageId(button) {
  const post = button.getAttribute('data-fs-post');
  if (post) {
    const id = new URL(post, window.location.href).searchParams.get('id');
    if (/^\d+$/.test(id ?? '')) return id;
  }
  return regExpFirstCapture(/id=(?<id>\d+)/, button.getAttribute('onclick'));
}

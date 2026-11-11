import regExpFirstCapture from './regExpFirstCapture';

// Game 4.6 moved many button actions from onclick="...name=123" to
// data-fs-post="index.php?...&name=123". Read the number from either.
export default function fsPostParam(el, name) {
  const post = el.dataset.fsPost;
  if (post) {
    const value = new URL(post, window.location.href).searchParams.get(name);
    if (/^\d+$/.test(value ?? '')) return value;
  }
  return regExpFirstCapture(
    new RegExp(`${name}=(?<value>\\d+)`),
    el.getAttribute('onclick'),
  );
}

export default function getId(a) {
  return a.href.split('=').at(-1);
}

export default function delay(ms) {
  return new Promise((r) => {
    setTimeout(() => r({ s: true }), ms);
  });
}

export default function loadScript(src) {
  return new Promise((resolve) => {
    const scriptTag = document.createElement('script');
    scriptTag.async = true;
    scriptTag.onload = resolve;
    scriptTag.src = src;
    document.body.appendChild(scriptTag);
  });
}

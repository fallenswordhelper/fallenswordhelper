export default function loadScript(src) {
  return new Promise((resolve) => {
    const scriptTag = document.createElement('script');
    scriptTag.async = true;
    // scriptTag.crossOrigin = 'anonymous';
    scriptTag.onload = resolve;
    scriptTag.src = src;
    // scriptTag.type = 'text/javascript';
    document.body.appendChild(scriptTag);
  });
}

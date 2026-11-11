import querySelector from './querySelector';

// The game swaps pages in place unless it finds
// link[href*="fallenswordhelper"]. FSH only runs on full page loads, so
// the prod stylesheet link doubles as that marker. Keep "fallenswordhelper"
// in its URL.
function addDevMarker() {
  const marker = document.createElement('link');
  // No rel, so the browser doesn't fetch it
  marker.href = 'https://github.com/fallenswordhelper/fallenswordhelper';
  document.body.append(marker);
}

export default function loadCss(c) {
  // In dev mode, CSS is injected by Vite, so path is empty
  if (!c) {
    addDevMarker();
    return Promise.resolve();
  }

  const target = querySelector('link', document.body);
  return new Promise((resolve) => {
    const linkTag = document.createElement('link');
    linkTag.type = 'text/css';
    linkTag.rel = 'stylesheet';
    linkTag.onload = () => {
      resolve();
    };
    linkTag.href = c;
    if (target) {
      target.before(linkTag);
    } else {
      document.body.append(linkTag);
    }
  });
}

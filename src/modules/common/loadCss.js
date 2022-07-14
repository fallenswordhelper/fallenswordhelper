import querySelector from './querySelector';

export default function loadCss(c) {
  const target = querySelector('link', document.body);
  return new Promise((resolve) => {
    const linkTag = document.createElement('link');
    linkTag.type = 'text/css';
    linkTag.rel = 'stylesheet';
    linkTag.onload = () => { resolve(); };
    linkTag.href = c;
    if (target) {
      target.before(linkTag);
    } else {
      document.body.append(linkTag);
    }
  });
}

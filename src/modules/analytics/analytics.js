import loadScript from '../common/loadScript';
import playerName from '../common/playerName';

function gtagSetup() {
  loadScript('https://www.googletagmanager.com/gtag/js?id=G-14Y99WX8XL');
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments); // skipcq: JS-0244
    };
  gtag('js', new Date());
  const pid = playerName();
  if (pid) gtag('config', 'G-14Y99WX8XL', { user_id: pid });
}

export default function analytics() {
  const ga4Enabled = true;
  if (ga4Enabled) gtagSetup();
}

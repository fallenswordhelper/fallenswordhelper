import sendEvent from '../analytics/sendEvent';

export default function questEvent(source) {
  return (e) => {
    if (e.target.classList.contains('fshTempleOne')) sendEvent(source, 'UFSG Link');
    if (e.target.classList.contains('fshWiki')) sendEvent(source, 'Wiki Link');
  };
}

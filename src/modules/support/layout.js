import getElementById from '../common/getElementById';

export let pCL = 0;
export let pCC = 0;
export let pCR = 0;
export let heightGuess = 0;

export function initPcc() {
  if (!pCC) {
    pCL = getElementById('pCL');
    pCC = getElementById('pCC');
    pCR = getElementById('pCR');
    heightGuess = Math.max(
      window.screen.height,
      window.innerHeight,
      document.documentElement.clientHeight,
      document.documentElement.offsetHeight,
      document.documentElement.scrollHeight,
    );
  }
}

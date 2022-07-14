let heightGuess = 0;

export default function getHeightGuess() {
  if (!heightGuess) {
    heightGuess = Math.max(
      window.screen.height,
      window.innerHeight,
      document.documentElement.clientHeight,
      document.documentElement.offsetHeight,
      document.documentElement.scrollHeight,
    );
  }
  return heightGuess;
}

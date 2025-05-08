const checkBounds = (percent) => Math.max(Math.min(percent, 100), 0);
const toHex = (rgb) => (`000000${rgb.toString(16)}`).slice(-6);

export default function perc2color(count, minpoint, maxpoint) {
  const percent = ((count - minpoint) / (maxpoint - minpoint)) * 100;
  const perc = checkBounds(percent);
  let red = 255;
  let green = 255;
  const blue = 0;
  if (perc < 50) {
    green = Math.round(5.1 * perc);
  } else {
    red = Math.round(510 - 5.10 * perc);
  }
  const rgb = red * 0x10000 + green * 0x100 + blue;
  const colour = toHex(rgb);
  return `#${colour}`;
}

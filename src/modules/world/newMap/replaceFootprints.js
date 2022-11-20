import getValue from '../../system/getValue';

// codebeat:disable[ARITY]
function drawCircle(
  context,
  cropX,
  cropY,
  cropWidth,
  cropHeight,
  x,
  y,
  width,
  height,
) {
  context.beginPath();
  context.arc(x + width / 2, y + height / 2, width / 6, 0, 2 * Math.PI, false);
  context.fillStyle = this.color; // skipcq: JS-0069
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = 'black';
  context.stroke();
  return true;
}
// codebeat:enable[ARITY]

export default function replaceFootprints() {
  const texture = GameController.Realm.footprintTexture;
  texture.color = getValue('footprintColor');
  texture.Draw = drawCircle;
}

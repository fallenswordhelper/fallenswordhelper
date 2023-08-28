import getValue from '../../system/getValue';

let patched = false;

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

function patchFootprints() {
  if (!patched) {
    const texture = GameController.Realm.footprintTexture;
    texture.color = getValue('footprintColor');
    texture.Draw = drawCircle;
    patched = true;
  }
}

function canihazfootprints() {
  if (GameController?.Realm?.footprintTexture) {
    patchFootprints();
    $.unsubscribe('fixed.realm', canihazfootprints);
  }
}

export default function replaceFootprints() {
  if (GameController?.Realm?.footprintTexture) patchFootprints();
  else $.subscribe('fixed.realm', canihazfootprints);
}

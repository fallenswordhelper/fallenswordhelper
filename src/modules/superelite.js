import partial from './common/partial';
import querySelectorAll from './common/querySelectorAll';
import { ufsgItemLink } from './common/ufsgItemLink';
import { ufsgLinkFromImg } from './common/ufsgMonsterLink';

export default function superelite() {
  querySelectorAll('#pCC table table img[src*="/creatures/"]').forEach(
    partial(ufsgLinkFromImg, 'se-log'),
  );
  querySelectorAll('#pCC table table img[src*="/items/"]').forEach(
    partial(ufsgItemLink, 'se-log'),
  );
}

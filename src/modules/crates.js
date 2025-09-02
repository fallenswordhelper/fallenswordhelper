import partial from "./common/partial";
import querySelectorAll from "./common/querySelectorAll";
import { ufsgItemLink } from "./common/ufsgItemLink";

export default function crates() {
  querySelectorAll('#pCC table table img[src*="/items/"]').forEach(
    partial(ufsgItemLink, 'chest-log'),
  );
}

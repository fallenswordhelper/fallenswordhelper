import injectInvent from './injectInvent';
import injectViewRecipe from './injectViewRecipe';
import jQueryPresent from '../../common/jQueryPresent';

export default function viewRecipe() {
  if (jQueryPresent()) {
    injectViewRecipe();
    injectInvent();
  }
}

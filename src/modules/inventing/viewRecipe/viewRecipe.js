import jQueryPresent from '../../common/jQueryPresent';
import injectInvent from './injectInvent';
import injectViewRecipe from './injectViewRecipe';

export default function viewRecipe() {
  if (jQueryPresent()) {
    injectViewRecipe();
    injectInvent();
  }
}

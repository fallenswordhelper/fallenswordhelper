import runDefault from '../../common/runDefault';
import viewRecipe from './loader/viewRecipe';

function inventing() { runDefault(import('../../inventing/inventing')); }

export default {
  '-': { '-': inventing },
  viewrecipe: { '-': viewRecipe },
};

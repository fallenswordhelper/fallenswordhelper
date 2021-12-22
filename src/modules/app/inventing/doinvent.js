import inventing from './inventing';

export default function doinvent(recipe) {
  return inventing({
    subcmd: 'doinvent',
    recipe_id: recipe,
  });
}

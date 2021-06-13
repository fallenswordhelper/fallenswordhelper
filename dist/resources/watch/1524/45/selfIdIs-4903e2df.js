import { s as partial } from './calfSystem-02fd040d.js';

function idTest(id, target) {
  return target.id === id;
}

function selfIdIs(id) {
  return partial(idTest, id);
}

export { selfIdIs as s };
//# sourceMappingURL=selfIdIs-4903e2df.js.map

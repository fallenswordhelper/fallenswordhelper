import { s as partial, b8 as handleEvent } from './calfSystem-cc2b30b5.js';

function passingTest(target, el) { return el[0](target); }

function eventHandler5(evtAry) {
  return partial(handleEvent, passingTest, evtAry);
}

export { eventHandler5 as e };
//# sourceMappingURL=eventHandler5-579e070b.js.map

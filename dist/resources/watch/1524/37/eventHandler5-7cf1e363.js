import { s as partial, b9 as handleEvent } from './calfSystem-6840a38e.js';

function passingTest(target, el) { return el[0](target); }

function eventHandler5(evtAry) {
  return partial(handleEvent, passingTest, evtAry);
}

export { eventHandler5 as e };
//# sourceMappingURL=eventHandler5-7cf1e363.js.map

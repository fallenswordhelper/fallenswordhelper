import { a as add, s as partial } from './calfSystem-cc2b30b5.js';

/*
Based on
https://github.com/addyosmani/pubsubz
*/

const topics = {};
let subUid = -1;

function execute(args, el) { add(3, el.func, [args]); }

function publish(topic, args) {
  // eslint-disable-next-line no-unused-labels, no-labels
  devLbl: { //  pubsubz publish
    // eslint-disable-next-line no-console
    console.log('publish', topic);
  }
  if (!topics[topic]) { return; }
  topics[topic].forEach(partial(execute, args));
  return true; // probably not needed
}

function subscribe(topic, func) {
  if (!topics[topic]) { topics[topic] = []; }
  subUid += 1;
  const token = subUid.toString();
  topics[topic].push({ token, func });
  return token;
}

function subscribeOnce(topic, func) {
  if (topics[topic]) {
    return topics[topic][0].token;
  }
  return subscribe(topic, func);
}

function hasSub(token, subs, el, i) {
  if (el.token === token) {
    subs.splice(i, 1);
    return true;
  }
}

function hasTopic(token, subs) {
  return subs.some(partial(hasSub, token, subs));
}

function unsubscribe(token) {
  if (topics.values().some(partial(hasTopic, token))) { return token; }
}

export { subscribeOnce as a, publish as p, subscribe as s };
//# sourceMappingURL=pubsub-9ca67e06.js.map

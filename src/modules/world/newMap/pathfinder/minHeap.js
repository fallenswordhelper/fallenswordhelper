/**
 * Binary min-heap of [priority, value] pairs, used by the route search.
 */
export default class MinHeap {
  /**
   * Creates an empty heap.
   */
  constructor() {
    this.items = [];
  }
  /**
   * Adds a value.
   * @param {number} priority Smaller comes out first.
   * @param {*} value What to return from `pop`.
   */
  push(priority, value) {
    const { items } = this;
    items.push([priority, value]);
    let index = items.length - 1;
    while (index > 0) {
      const parent = (index - 1) >> 1;
      if (items[parent][0] <= items[index][0]) break;
      [items[parent], items[index]] = [items[index], items[parent]];
      index = parent;
    }
  }
  /**
   * Removes the entry with the smallest priority.
   * @returns {Array|undefined} The [priority, value] pair, or undefined when empty.
   */
  pop() {
    const { items } = this;
    const top = items[0];
    const last = items.pop();
    if (items.length) {
      items[0] = last;
      let index = 0;
      for (;;) {
        const left = 2 * index + 1;
        const right = left + 1;
        let smallest = index;
        if (left < items.length && items[left][0] < items[smallest][0])
          smallest = left;
        if (right < items.length && items[right][0] < items[smallest][0])
          smallest = right;
        if (smallest === index) break;
        [items[smallest], items[index]] = [items[index], items[smallest]];
        index = smallest;
      }
    }
    return top;
  }
  /**
   * Number of entries in the heap.
   * @returns {number}
   */
  get size() {
    return this.items.length;
  }
}

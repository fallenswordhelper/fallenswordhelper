/*
Based on
fiddle.jshell.net/GRIFFnDOOR/r7tvg/
*/

const heap = [null];

function cmp(i, j) {
  return heap[i] && heap[i].priority < heap[j].priority;
}

function swp(i, j) {
  const temp = heap[i];
  heap[i] = heap[j];
  heap[j] = temp;
}

function calcChildIndex(leftHigher, i) {
  if (leftHigher) {
    return i * 2;
  }
  return i * 2 + 1;
}

function sink(j) {
  let i = j;
  while (i * 2 < heap.length) {
    const leftHigher = !cmp(i * 2 + 1, i * 2);
    const childIndex = calcChildIndex(leftHigher, i);
    if (cmp(i, childIndex)) {
      break;
    }
    swp(i, childIndex);
    i = childIndex;
  }
}

function bubble(j) {
  let i = j;
  while (i > 1) {
    const parentIndex = i >> 1;
    if (!cmp(i, parentIndex)) {
      break;
    }
    swp(i, parentIndex);
    i = parentIndex;
  }
}

export function pop() {
  if (heap.length === 1) {
    return;
  }
  const topVal = heap[1].data;
  const last = heap.pop();
  if (heap.length > 1) {
    heap[1] = last;
    sink(1);
  }
  return topVal;
}

export function push(data, priority) {
  bubble(heap.push({ data, priority }) - 1);
}

export function getLength() {
  return heap.length - 1;
}

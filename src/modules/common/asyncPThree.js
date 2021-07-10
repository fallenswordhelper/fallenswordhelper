import task from '../support/task';

export default function asyncPThree(fnList) {
  fnList.forEach((fn) => task(3, fn));
}

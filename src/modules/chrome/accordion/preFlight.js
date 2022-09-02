import sendException from '../../analytics/sendException';
import awaitWidget from '../../common/awaitWidget';
import getElementById from '../../common/getElementById';
import isObject from '../../common/isObject';

const problems = [
  [
    (hcsNav) => !isObject(hcsNav),
    () => sendException('$(\'#nav\').data(\'hcsNav\') is not an object', false),
  ],
  [
    (hcsNav) => !('heights' in hcsNav),
    () => sendException('$(\'#nav\').data(\'hcsNav\').heights does not exist', false),
  ],
];

function noProblems(hcsNav) {
  const problem = problems.find(([fn]) => fn(hcsNav));
  if (problem) {
    problem[1]();
    return false;
  }
  return true;
}

export default async function preFlight() {
  const theNav = getElementById('nav');
  const myNav = await awaitWidget(theNav, 'Nav');
  if (noProblems(myNav)) return { theNav, myNav };
  return {};
}

import arrayFrom from './arrayFrom';

export default function arrayFromRadioNodeList(radioNodeList) {
  return arrayFrom(radioNodeList instanceof RadioNodeList ? radioNodeList : [radioNodeList]);
}

export default function failStub() {
  const dfd = $.Deferred();
  dfd.reject('sorry', 'sorry', 'sorry');
  return dfd;
}

import formToUrl from './formToUrl';

export default function handleSubmit(e) {
  e.preventDefault();
  formToUrl(e);
}

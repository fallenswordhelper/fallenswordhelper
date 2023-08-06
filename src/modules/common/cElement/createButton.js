import cElement from './cElement';

export default function createButton(props) {
  return cElement('button', { ...props, type: 'button' });
}

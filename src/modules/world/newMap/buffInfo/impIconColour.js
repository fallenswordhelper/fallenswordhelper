const colorHash = [
  'red', // Should never see this.
  'orange',
  'yellow',
];

export default function impIconColour() { // jQuery
  const imp = $('#actionlist-shield-imp');
  if (imp.length === 1) {
    imp.css('background-color', colorHash[imp.text()] || '#ad8043');
  }
}

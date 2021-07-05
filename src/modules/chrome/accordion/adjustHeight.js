import querySelectorArray from '../../common/querySelectorArray';

export default function adjustHeight(theNav, myNav) {
  // first the closed saved variables
  // eslint-disable-next-line no-param-reassign
  myNav.heights = querySelectorArray('#nav > li')
    .map((li) => (querySelectorArray('li', li).length * 22) || null);
  const index = Number(myNav.state);
  if (index && index > -1 && index < theNav.children.length) {
    // and now the open one
    // eslint-disable-next-line no-param-reassign
    theNav.children[myNav.state].children[1].style.height = `${myNav.heights[myNav.state]}px`;
  }
}

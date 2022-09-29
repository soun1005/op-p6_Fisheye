/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
/* gloabal getJsonData */

const filterElement = document.getElementById('filter');

function sortMedias() {
  const filterValue = document.getElementById('filter').value;
  // getting filter value works.


  function sortByTitle(a, b) {
    const titleA = a.getElementByClassName('dscr__title');
    const titleB = b.getElementByClassName('dscr__title');
    
    if (a.title.value > b.title.value) {
      return 1;
    } if (b.title.value > a.title.value) {
      return -1;
    }
    return 0;
  }

  if (filterValue === 'Titre') {
    const mediaDivs = document.querySelectorAll('.media__wrap');
    mediaDivs.sort(sortByTitle);
  }
  return medias;
}

filterElement.addEventListener('change', (sortMedias));

/* eslint-disable no-plusplus */
/* eslint-disable spaced-comment */
// /* eslint-disable no-unused-vars */
// /* eslint-disable no-unreachable */
// /* eslint-disable no-undef */
// /* gloabal getJsonData */

// functions

const filterElement = document.getElementById('filter');

/************ function that goes inside sort**********/
function sortMedias() {
  // filter's values = popularity, title, date
  const filterValue = document.getElementById('filter').value;
  const mediaDivs = document.querySelectorAll('.media__wrap');
  // turn mediaDivs to arrays
  const mediaDivsArr = Array.from(mediaDivs);

  /****************** when 'titre' is selected ****************/
  if (filterValue === 'Titre') {
    mediaDivsArr.sort((a, b) => {
      const titleA = a.querySelector('.dscr__title');
      const titleB = b.querySelector('.dscr__title');
      return titleA.innerText.localeCompare(titleB.innerText);
    });

  /*************** when 'popularite' is selected **************/
  } else if (filterValue === 'Popularite') {
    mediaDivsArr.sort((a, b) => {
      const likesA = a.querySelector('.liked-number').innerHTML;
      const likesB = b.querySelector('.liked-number').innerHTML;

      // console.log(typeof likesA);
      const likesAnum = parseInt(likesA, 10);
      const likesBnum = parseInt(likesB, 10);

      if (likesBnum > likesAnum) {
        return 1;
      } if (likesAnum > likesBnum) {
        return -1;
      }
      return 0;
    });

  /****************** when 'date' is selected ******************/
  } else {
    mediaDivsArr.sort((a, b) => {
      const dateA = a.querySelector('.element-date').innerHTML;
      const dateB = b.querySelector('.element-date').innerHTML;
      // console.log(typeof likesA);
      // date turn into string ( 1990-04-20 -> 19900420);
      const dateAnum = dateA.replace(/\D/g, '');
      const dateBnum = dateB.replace(/\D/g, '');
      if (dateBnum > dateAnum) {
        return 1;
      } if (dateAnum > dateBnum) {
        return -1;
      }
      return 0;
    });
  }
  /************* clear all elements in media-container **************/
  const mediaContainer = document.querySelector('.media-container');
  mediaContainer.innerHTML = '';

  /*** append organised elements back in media-container ***/
  mediaContainer.append(...mediaDivsArr);
}

// when filter value is changed, it trigger 'sortMedias' filter to sort medias
filterElement.addEventListener('change', (sortMedias));

// for styling

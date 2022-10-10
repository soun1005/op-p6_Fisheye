/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable spaced-comment */
// /* eslint-disable no-unused-vars */
// /* eslint-disable no-unreachable */
// /* eslint-disable no-undef */
// /* gloabal getJsonData */
const filterMainBtn = document.querySelector('.filter-main-btn');
const listBtnPopular = document.querySelector('.filter-list-popular');
const listBtnDate = document.querySelector('.filter-list-date');
const listBtnTitle = document.querySelector('.filter-list-title');
const filterList = document.querySelector('.filter-list');
const arrow = document.querySelector('.fa-downside');

// media divs into array
function intoArray() {
  const mediaDivs = document.querySelectorAll('.media__wrap');
  // turn mediaDivs to arrays
  const mediaDivsArr = Array.from(mediaDivs);
  return { mediaDivs, mediaDivsArr };
}

// open nav list
filterMainBtn.addEventListener('click', () => {
  const listElements = document.querySelectorAll('li');
  const buttonCurrentValue = document.querySelector('.filter-main-btn');
  const list = document.querySelector('.filter-list');
  // each buttons inside <li>
  listElements.forEach((elem) => {
    // if list match the main button, display none
    if (elem.innerText === buttonCurrentValue.innerText) {
      elem.style.display = 'none';
    } else {
      elem.style.display = 'block';
      elem.addEventListener('click', () => {
        buttonCurrentValue.innerText = elem.innerText;
        filterList.classList.remove('active');
        buttonCurrentValue.classList.remove('active');
      });
    }
  });

  // list.style.display = currentDisplay === 'none' ? 'block' : 'none';
  if (!list.classList.contains('active')) {
    filterList.classList.add('active');
    buttonCurrentValue.classList.add('active');
    arrow.classList.add('active');
  } else {
    filterList.classList.remove('active');
    buttonCurrentValue.classList.remove('active');
    arrow.classList.remove('active');
  }
  // last button border-radius
  const displayedBtn = list.style.display;
});

//  when 'popularity' is clicked.
function filterPopul() {
  filterMainBtn.classList.remove('active');
  filterList.classList.remove('active');
  const { mediaDivsArr } = intoArray();
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
  const mediaContainer = document.querySelector('.media-container');
  mediaContainer.innerHTML = '';
  /*** append organised elements back in media-container ***/
  mediaContainer.append(...mediaDivsArr);
}

function filterDate() {
  const { mediaDivsArr } = intoArray();
  filterMainBtn.classList.remove('active');
  filterList.classList.remove('active');
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
  const mediaContainer = document.querySelector('.media-container');
  mediaContainer.innerHTML = '';
  /*** append organised elements back in media-container ***/
  mediaContainer.append(...mediaDivsArr);
}

function filterTitle() {
  const { mediaDivsArr } = intoArray();
  filterMainBtn.classList.remove('active');
  filterList.classList.remove('active');
  mediaDivsArr.sort((a, b) => {
    const titleA = a.querySelector('.dscr__title');
    const titleB = b.querySelector('.dscr__title');
    return titleA.innerText.localeCompare(titleB.innerText);
  });

  const mediaContainer = document.querySelector('.media-container');
  mediaContainer.innerHTML = '';
  /*** append organised elements back in media-container ***/
  mediaContainer.append(...mediaDivsArr);
}

listBtnPopular.addEventListener('click', filterPopul);
listBtnDate.addEventListener('click', filterDate);
listBtnTitle.addEventListener('click', filterTitle);

// /************ function that goes inside sort**********/
// function sortMedias(data) {
//   // // filter's values = popularity, title, date
//   // const mediaDivs = document.querySelectorAll('.media__wrap');
//   // // turn mediaDivs to arrays
//   // const mediaDivsArr = Array.from(mediaDivs);

//   /****************** when 'titre' is selected ****************/

//   if (filterValue === 'Titre') {
//     mediaDivsArr.sort((a, b) => {
//       const titleA = a.querySelector('.dscr__title');
//       const titleB = b.querySelector('.dscr__title');
//       return titleA.innerText.localeCompare(titleB.innerText);
//     });

//   /*************** when 'popularite' is selected **************/
//   } else if (filterValue === 'Popularite') {
//     mediaDivsArr.sort((a, b) => {
//       const likesA = a.querySelector('.liked-number').innerHTML;
//       const likesB = b.querySelector('.liked-number').innerHTML;

//       // console.log(typeof likesA);
//       const likesAnum = parseInt(likesA, 10);
//       const likesBnum = parseInt(likesB, 10);

//       if (likesBnum > likesAnum) {
//         return 1;
//       } if (likesAnum > likesBnum) {
//         return -1;
//       }
//       return 0;
//     });

//   /****************** when 'date' is selected ******************/
//   } else {
//     mediaDivsArr.sort((a, b) => {
//       const dateA = a.querySelector('.element-date').innerHTML;
//       const dateB = b.querySelector('.element-date').innerHTML;
//       // console.log(typeof likesA);
//       // date turn into string ( 1990-04-20 -> 19900420);
//       const dateAnum = dateA.replace(/\D/g, '');
//       const dateBnum = dateB.replace(/\D/g, '');
//       if (dateBnum > dateAnum) {
//         return 1;
//       } if (dateAnum > dateBnum) {
//         return -1;
//       }
//       return 0;
//     });
//   }
//   /************* clear all elements in media-container **************/
//   const mediaContainer = document.querySelector('.media-container');
//   mediaContainer.innerHTML = '';

//   /*** append organised elements back in media-container ***/
//   mediaContainer.append(...mediaDivsArr);
// }

// // when filter value is changed, it trigger 'sortMedias' filter to sort medias
// filterElement.addEventListener('change', (sortMedias));

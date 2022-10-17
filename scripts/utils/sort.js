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
const listElements = document.querySelectorAll('li');

/*************************
turn media divs to array
*************************/
function intoArray() {
  const mediaDivs = document.querySelectorAll('.media__wrap');
  const mediaDivsArr = Array.from(mediaDivs);
  return { mediaDivs, mediaDivsArr };
}

/****************************
this function is triggered
when 'trier par' is clicked
****************************/
function filterManager() {
  // 3 buttons of <li>
  listElements.forEach((elem) => {
    // if list match the main button, display none
    const textContent = elem.querySelector('span').innerText;

    if (textContent === filterMainBtn.innerText) {
      elem.style.display = 'none';
      arrow.classList.add('active');
    } else {
      elem.style.display = 'block';
      elem.addEventListener('click', () => {
        filterMainBtn.innerText = textContent;
        filterList.classList.remove('active');
        filterMainBtn.classList.remove('active');
        filterMainBtn.setAttribute('aria-label', filterMainBtn.innerText);
        arrow.classList.remove('active');
      });
    }
  });

  // if the list is expanded
  if (!filterList.classList.contains('active')) {
    filterList.classList.add('active');
    filterMainBtn.classList.add('active');
    arrow.classList.add('active');
    filterMainBtn.setAttribute('aria-expanded', true);
  } else {
    filterList.classList.remove('active');
    filterMainBtn.classList.remove('active');
    arrow.classList.remove('active');
    filterMainBtn.setAttribute('aria-expanded', false);
  }

  // border radius for 2nd button when display:block
  const sortBtns = document.querySelectorAll('li');
  const sortBtnsArr = Array.from(sortBtns);
  const btnsDisplayed = sortBtnsArr.filter((element) => element.style.display === 'block');
  const lastElem = btnsDisplayed[1];
  const lastBtn = lastElem.querySelector('button');
  lastBtn.style.borderRadius = '0 0 5px 5px';
}
// when 'trier par' button is clicked,
filterMainBtn.addEventListener('click', (filterManager));
// closing 'trier par' with ESC
filterMainBtn.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    filterList.classList.remove('active');
    filterMainBtn.classList.remove('active');
    arrow.classList.remove('active');
    filterMainBtn.setAttribute('aria-expanded', false);
  }
});

/*******************************
functions to sort media gallery
********************************/

// when 'popularity' is selected
function filterPopul() {
  filterMainBtn.classList.remove('active');
  filterList.classList.remove('active');
  filterMainBtn.setAttribute('aria-label', 'trier par popularite');
  const { mediaDivsArr } = intoArray();
  mediaDivsArr.sort((a, b) => {
    const likesA = a.querySelector('.liked-number').innerHTML;
    const likesB = b.querySelector('.liked-number').innerHTML;

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
  /******* append newly sorted elements back in media-container *******/
  mediaContainer.append(...mediaDivsArr);
  const dateList = document.querySelector('.filter-list-date');
  dateList.style.borderRadius = '0';
}

// when 'Date' is selected
function filterDate() {
  const { mediaDivsArr } = intoArray();
  filterMainBtn.classList.remove('active');
  filterList.classList.remove('active');
  filterMainBtn.setAttribute('aria-label', 'trier par date');
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

// when 'Title' is selected
function filterTitle() {
  filterMainBtn.setAttribute('aria-label', 'trier par titre');
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

// each filters' event
listBtnPopular.addEventListener('click', filterPopul);
listBtnPopular.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    filterPopul();
  }
});

listBtnDate.addEventListener('click', filterDate);
listBtnDate.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    filterDate();
  }
});
listBtnTitle.addEventListener('click', filterTitle);
listBtnTitle.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    filterTitle();
  }
});

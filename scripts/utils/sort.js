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

  // 3 buttons of <li>
  listElements.forEach((elem) => {
    // if list match the main button, display none
    const textContent = elem.querySelector('span').innerText;

    if (textContent === buttonCurrentValue.innerText) {
      elem.style.display = 'none';
    } else {
      elem.style.display = 'block';
      elem.addEventListener('click', () => {
        buttonCurrentValue.innerText = textContent;
        filterList.classList.remove('active');
        buttonCurrentValue.classList.remove('active');
        buttonCurrentValue.setAttribute('aria-label', buttonCurrentValue.innerText);
      });
    }
  });

  // if the list is expanded
  if (!list.classList.contains('active')) {
    filterList.classList.add('active');
    buttonCurrentValue.classList.add('active');
    arrow.classList.add('active');
    buttonCurrentValue.setAttribute('aria-expanded', true);
  } else {
    filterList.classList.remove('active');
    buttonCurrentValue.classList.remove('active');
    arrow.classList.remove('active');
    buttonCurrentValue.setAttribute('aria-expanded', false);
  }

  // border radius for 2nd button when display:block
  const sortBtns = document.querySelectorAll('li');
  const sortBtnsArr = Array.from(sortBtns);

  const btnsDisplayed = sortBtnsArr.filter((element) => element.style.display === 'block');
  const lastElem = btnsDisplayed[1];
  const lastBtn = lastElem.querySelector('button');
  lastBtn.style.borderRadius = '0 0 5px 5px';
});

//  when 'popularity' is clicked.
function filterPopul() {
  filterMainBtn.classList.remove('active');
  filterList.classList.remove('active');
  filterMainBtn.setAttribute('aria-label', 'trier par popularite');
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

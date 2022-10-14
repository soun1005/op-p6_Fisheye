/* eslint-disable no-unused-vars */
const lightBox = document.querySelector('.lightbox');
const lbCloseBtn = document.querySelector('.close-btn');

lbCloseBtn.style.cursor = 'pointer';

// arrow buttons on lightbox
const arrowBtns = document.querySelectorAll('.slide-btn');

// when arrows are clicked,
function gallerySwitch(direction) {
  // image, figcaption
  const lightboxContainer = document.querySelector('.lightbox__img');
  // gallery div (media, title, heart icon)
  const galleryMedias = document.querySelectorAll('.media__wrap');
  // length of medias
  // console.log(galleryMedias.length);
  // id of each media
  const lightboxId = parseInt(lightboxContainer.getAttribute('id'), 10);
  // remove lightbox img src, lightbox dscr contents
  const lightboxDscr = document.querySelector('.lightbox__dscr');
  const nextMedia = galleryMedias[lightboxId + direction];

  lightboxDscr.innerHTML = nextMedia.querySelector('.dscr__title').innerHTML;

  const lightboxElement = document.querySelector('.lightbox__current-element');
  lightboxContainer.removeChild(lightboxElement);

  // selecting only images and video in the gallery div
  let image = nextMedia.querySelector('img');
  let video = nextMedia.querySelector('video');

  if (image) {
    // copy image
    image = image.cloneNode();
    lightboxContainer.prepend(image);
    image.classList.add('lightbox__current-element');
    image.setAttribute('aria-label', lightboxDscr.innerHTML);
  // when the element is video
  } else {
    video = video.cloneNode();
    lightboxContainer.prepend(video);
    video.setAttribute('controls', 'true');
    video.setAttribute('autoplay', 'true');
    video.classList.add('lightbox__current-element');
    video.setAttribute('aria-label', lightboxDscr.innerHTML);
  }

  lightboxContainer.setAttribute('id', lightboxId + direction);
}

function getLbInfo() {
  const lightboxContainer = document.querySelector('.lightbox__img');
  // gallery div (media, title, heart icon)
  const galleryMedias = document.querySelectorAll('.media__wrap');
  // id of each media
  const lightboxId = parseInt(lightboxContainer.getAttribute('id'), 10);
  const mediaLength = galleryMedias.length - 1;

  return { lightboxId, mediaLength };
}

// 'previous' function
function mediaSlideLeftBtn() {
  const { lightboxId, mediaLength } = getLbInfo();
  // when element's id is 0, next element id is same as the length of the medias
  if (lightboxId === 0) {
    gallerySwitch(mediaLength);
  } else {
    gallerySwitch(-1);
  }
}

// 'next' function
function mediaSlideRightBtn() {
  const { lightboxId, mediaLength } = getLbInfo();
  if (lightboxId === mediaLength) {
    gallerySwitch(-mediaLength);
  } else {
    gallerySwitch(1);
  }
}

// 'previous' button events
arrowBtns[0].addEventListener('click', (mediaSlideLeftBtn));
arrowBtns[0].addEventListener(
  'keydown',
  (event) => {
    // event.preventDefault();
    if (event.key === 'Enter') {
      event.preventDefault();
      mediaSlideLeftBtn();
    }
  },
);

// 'next' button events
arrowBtns[1].addEventListener('click', (mediaSlideRightBtn));
arrowBtns[1].addEventListener(
  'keydown',
  (event) => {
    // event.preventDefault();
    if (event.key === 'Enter') {
      event.preventDefault();
      mediaSlideRightBtn();
    }
  },
);
lightBox.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    console.log('arrow left works');
    mediaSlideLeftBtn();
  }
});
lightBox.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    event.preventDefault();
    console.log('arrow right works');
    mediaSlideRightBtn();
  }
});

// lightBox.addEventListener = (e) => {
//   switch (e.key) {
//     case 'ArrowLeft':
//       e.preventDefault();
//       console.log('arrow button works');
//       mediaSlideLeftBtn();
//       break;
//     case 39:
//       e.preventDefault();
//       mediaSlideRightBtn();
//       break;
//     default:
//       break;
//   }
// };

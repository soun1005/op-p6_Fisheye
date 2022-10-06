/* eslint-disable no-unused-vars */
const lightBox = document.querySelector('.lightbox');
const lbCloseBtn = document.querySelector('.close-btn');

// close lightbox modal
function closeLb() {
  lightBox.style.display = 'none';
}

lbCloseBtn.addEventListener('click', closeLb);
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
  // when the element is video
  } else {
    video = video.cloneNode();
    lightboxContainer.prepend(video);
    video.setAttribute('controls', 'true');
    video.setAttribute('autoplay', 'true');
    video.classList.add('lightbox__current-element');
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

arrowBtns[0].addEventListener('click', () => {
  const { lightboxId, mediaLength } = getLbInfo();
  // when element's id is 0, next element id is same as the length of the medias
  if (lightboxId === 0) {
    gallerySwitch(mediaLength);
  } else {
    gallerySwitch(-1);
  }
});

arrowBtns[1].addEventListener('click', () => {
  const { lightboxId, mediaLength } = getLbInfo();
  if (lightboxId === mediaLength) {
    gallerySwitch(-mediaLength);
  } else {
    gallerySwitch(1);
  }
});

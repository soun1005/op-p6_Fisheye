/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable padded-blocks */
/* eslint-disable spaced-comment */

function mediaFactory(data, index) {
  const {
    photographerId, title, image, likes, date, price, video,
  } = data;

  const picture = `assets/images/${photographerId}/${image}`;
  const videoSrc = `assets/images/${photographerId}/${video}`;

  // to display medias
  function getMediaDom() {
    const mediaWrap = document.createElement('div');
    mediaWrap.classList.add('media__wrap');
    // if there is image, add <img> or <video>
    if (image) {
      const imageTag = document.createElement('img');
      imageTag.setAttribute('src', picture);
      // for accessiblility
      imageTag.setAttribute('alt', `${title} closeup view`);
      imageTag.classList.add('gallery-media');
      mediaWrap.append(imageTag);
      imageTag.tabIndex = 0;
    } else {
      const videoTag = document.createElement('video');
      videoTag.setAttribute('src', videoSrc);
      // for accessiblility
      videoTag.setAttribute('aria-label', `${title} closeup view`);
      videoTag.classList.add('gallery-media');
      // for accessiblility
      mediaWrap.append(videoTag);
      videoTag.tabIndex = 0;
    }

    const dscrWrap = document.createElement('div');
    dscrWrap.classList.add('dscr');

    const mediaTitle = document.createElement('p');
    mediaTitle.classList.add('dscr__title');
    // for accessiblility
    mediaTitle.textContent = title;

    const countLikeWrap = document.createElement('div');
    countLikeWrap.classList.add('dscr__like-count');
    const likedNumber = document.createElement('p');
    likedNumber.classList.add('liked-number');
    likedNumber.textContent = likes;
    // for accessiblility
    likedNumber.setAttribute('aria-label', `${likes} likes`);
    likedNumber.tabIndex = 0;
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('icon-wrap');
    const elementDate = document.createElement('p');
    elementDate.textContent = date;
    elementDate.classList.add('element-date');
    elementDate.style.display = 'none';

    const likeIcon = document.createElement('span');
    likeIcon.classList.add('fa-solid');
    likeIcon.classList.add('fa-heart');
    likeIcon.classList.add('photoHeart');

    mediaWrap.append(dscrWrap);
    mediaWrap.append(countLikeWrap);
    dscrWrap.append(mediaTitle);
    dscrWrap.append(countLikeWrap);
    dscrWrap.append(elementDate);
    countLikeWrap.append(likedNumber);
    countLikeWrap.append(iconDiv);
    iconDiv.append(likeIcon);

    // like button
    likeIcon.style.cursor = 'pointer';
    function addLike() {
      const totalCount = document.getElementById('likes-total');
      totalCount.textContent = parseInt(totalCount.textContent, 10) + 1;
      likedNumber.textContent = parseInt(likedNumber.textContent, 10) + 1;
      likeIcon.classList.add('active');
    }
    // can click only once by { once: true}
    likeIcon.addEventListener('click', (addLike), { once: true });
    likeIcon.addEventListener(
      'keydown',
      (event) => {
        if (event.key === 'Enter') {
          addLike();
        }
      },
      { once: true },
    );
    // open lightbox
    const lightBox = document.querySelector('.lightbox');
    const lbImgTag = document.createElement('img');
    const lbVideoTag = document.createElement('video');
    const lbFigure = document.querySelector('.lightbox__img');

    // when media is clicked runs function openLb
    function openLb() {
      lightBox.style.display = 'flex';
      let child = lbFigure.firstElementChild;
      while (child) {
        lbFigure.removeChild(child);
        child = lbFigure.firstElementChild;
      }
      lbFigure.setAttribute('id', index);
      // if the element is img,
      if (image) {
        lbFigure.append(lbImgTag);
        lbImgTag.setAttribute('src', picture);
        lbImgTag.setAttribute('alt', title);
        lbImgTag.classList.add('lightbox__current-element');
      // when the element is video
      } else {
        lbFigure.append(lbVideoTag);
        lbVideoTag.setAttribute('src', videoSrc);
        lbVideoTag.setAttribute('controls', 'true');
        lbVideoTag.setAttribute('autoplay', 'true');
        lbVideoTag.classList.add('lightbox__current-element');
      }
      // media description
      const figCaption = document.createElement('figcaption');
      figCaption.textContent = title;
      figCaption.classList.add('lightbox__dscr');
      lbFigure.append(figCaption);
    }
    // when media element is clicked
    mediaWrap.childNodes[0].addEventListener('click', (openLb));
    mediaWrap.childNodes[0].addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        openLb();
      }
    });

    return mediaWrap;
  }

  return {
    photographerId, title, image, likes, date, price, video, getMediaDom,
  };
}

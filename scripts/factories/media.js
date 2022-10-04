/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable padded-blocks */
/* eslint-disable spaced-comment */

function mediaFactory(data) {
  const {
    photographerId, title, image, likes, date, price, video,
  } = data;

  const picture = `assets/images/${photographerId}/${image}`;
  const videoSrc = `assets/images/${photographerId}/${video}`;

  // to display medias
  function getMediaDom(media) {
    const mediaWrap = document.createElement('div');
    mediaWrap.classList.add('media__wrap');
    // if there is image, add <img> or <video>
    if (image) {
      const imageTag = document.createElement('img');
      imageTag.setAttribute('src', picture);
      imageTag.setAttribute('alt', title);
      mediaWrap.append(imageTag);
    } else {
      const videoTag = document.createElement('video');
      videoTag.setAttribute('src', videoSrc);
      mediaWrap.append(videoTag);
    }

    const dscrWrap = document.createElement('div');
    dscrWrap.classList.add('dscr');

    const mediaTitle = document.createElement('p');
    mediaTitle.classList.add('dscr__title');
    mediaTitle.textContent = title;

    const countLikeWrap = document.createElement('div');
    countLikeWrap.classList.add('dscr__like-count');
    const likedNumber = document.createElement('p');
    likedNumber.classList.add('liked-number');
    likedNumber.textContent = likes;
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
    }
    // can click only once by { once: true}
    likeIcon.addEventListener('click', (addLike), { once: true });

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
      // if the element is img,
      if (image) {
        lbFigure.append(lbImgTag);
        lbImgTag.setAttribute('src', picture);
        lbImgTag.setAttribute('alt', title);
      // when the element is video
      } else {
        lbFigure.append(lbVideoTag);
        lbVideoTag.setAttribute('src', videoSrc);
        lbVideoTag.setAttribute('controls', 'true');
        lbVideoTag.setAttribute('autoplay', 'true');
      }
      // media description
      const figCaption = document.createElement('figcaption');
      figCaption.textContent = title;
      lbFigure.append(figCaption);
    }
    // when media element is clicked
    mediaWrap.addEventListener('click', (openLb));

    // 1. get array of medias
    





    return mediaWrap;
  }
  return {
    photographerId, title, image, likes, date, price, video, getMediaDom,
  };
}

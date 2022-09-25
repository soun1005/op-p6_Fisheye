/* eslint-disable no-unused-vars */
/* eslint-disable padded-blocks */
/* eslint-disable spaced-comment */

function mediaFactory(data) {
  const {
    photographerId, title, image, likes, video,
  } = data;
  const pictures = `assets/images/${photographerId}`;

  // to get photos for media gallery
  function getMediaDom() {
    const photographerMedia = document.querySelector('.media-container');
    const mediaWrap = document.createElement('div');
    mediaWrap.classList.add('media__wrap');
    const media = document.createElement('img');
    // media.setAttribute('src', image);
    media.setAttribute('alt', title);

    const mediaTitle = document.createElement('p');
    mediaTitle.classList.add('media__wrap__title');
    mediaTitle.textContent = title;

    const countLikeWrap = document.createElement('div');
    countLikeWrap.classList.add('media__wrap__like-count');
    const likedNumber = document.createElement('p');
    likedNumber.classList.add('liked-number');
    likedNumber.textContent = likes;
    const likeIcon = document.createElement('i');
    likeIcon.classList.add('fa-solid fa-heart');

    photographerMedia.append(mediaWrap);
    mediaWrap.append(media);
    mediaWrap.append(mediaTitle);
    mediaWrap.append(countLikeWrap);
    countLikeWrap.append(likedNumber);
    countLikeWrap.append(likeIcon);
  }

}

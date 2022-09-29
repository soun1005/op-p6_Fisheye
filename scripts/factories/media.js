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

    const likeIcon = document.createElement('span');
    likeIcon.classList.add('fa-solid');
    likeIcon.classList.add('fa-heart');
    likeIcon.classList.add('photoHeart');

    mediaWrap.append(dscrWrap);
    mediaWrap.append(countLikeWrap);
    dscrWrap.append(mediaTitle);
    dscrWrap.append(countLikeWrap);
    countLikeWrap.append(likedNumber);
    countLikeWrap.append(iconDiv);
    iconDiv.append(likeIcon);

    // like button
    likeIcon.style.cursor = 'pointer';
    function addLike() {
      // fix : can click 'like' only once for medias
      const totalCount = document.getElementById('likes-total');
      totalCount.textContent = parseInt(totalCount.textContent, 10) + 1;
      likedNumber.textContent = parseInt(likedNumber.textContent, 10) + 1;
    }
    likeIcon.addEventListener('click', (addLike));

    return mediaWrap;
  }
  return {
    photographerId, title, image, likes, date, price, video, getMediaDom,
  };
}

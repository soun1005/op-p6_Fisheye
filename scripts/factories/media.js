/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable padded-blocks */
/* eslint-disable spaced-comment */

/********************************
mediaFactory() includes :
          media gallery,
          like button,
          open&close of lightbox
*********************************/

function mediaFactory(data, index) {
  const {
    photographerId, title, image, likes, date, price, video,
  } = data;

  // address of its media
  const picture = `assets/images/${photographerId}/${image}`;
  const videoSrc = `assets/images/${photographerId}/${video}`;

  function getMediaDom() {
    // mediaWrap wraps each of medias
    const mediaWrap = document.createElement('div');
    mediaWrap.classList.add('media__wrap');

    // if there is image, add <img> or <video>
    if (image) {
      const imageTag = document.createElement('img');
      imageTag.setAttribute('src', picture);
      // for accessiblility
      imageTag.setAttribute('alt', `agrandir l'image de ${title}`);
      imageTag.classList.add('gallery-media');
      mediaWrap.append(imageTag);
      imageTag.tabIndex = 0;
    } else {
      const videoTag = document.createElement('video');
      videoTag.setAttribute('src', videoSrc);
      videoTag.classList.add('gallery-media');
      mediaWrap.append(videoTag);
      // for accessiblility
      videoTag.setAttribute('aria-label', `agrandir l'image de ${title}`);
      videoTag.tabIndex = 0;
    }

    // div class = "dscr"
    const dscrWrap = document.createElement('div');
    dscrWrap.classList.add('dscr');

    // p class = "dscr__title"
    const mediaTitle = document.createElement('p');
    mediaTitle.classList.add('dscr__title');
    mediaTitle.textContent = title;

    // div class = "dscr__like-count"
    const countLikeWrap = document.createElement('div');
    countLikeWrap.classList.add('dscr__like-count');

    // p class = "liked-number"
    const likedNumber = document.createElement('p');
    likedNumber.classList.add('liked-number');
    likedNumber.textContent = likes;
    likedNumber.setAttribute('aria-label', `${likes} jaime`);
    likedNumber.tabIndex = 0;

    // div class = "icon-wrap"
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('icon-wrap');

    // p class = "element-date"
    const elementDate = document.createElement('p');
    elementDate.textContent = date;
    elementDate.classList.add('element-date');
    elementDate.style.display = 'none';

    // heart icon under the media
    const likeIcon = document.createElement('span');
    likeIcon.classList.add('fa-solid');
    likeIcon.classList.add('fa-heart');
    likeIcon.classList.add('photoHeart');
    likeIcon.setAttribute('aria-label', 'cliquez jaime');
    likeIcon.tabIndex = 0;

    // appending divs
    mediaWrap.append(dscrWrap);
    mediaWrap.append(countLikeWrap);
    dscrWrap.append(mediaTitle);
    dscrWrap.append(countLikeWrap);
    dscrWrap.append(elementDate);
    countLikeWrap.append(likedNumber);
    countLikeWrap.append(iconDiv);
    iconDiv.append(likeIcon);

    /************************
     like button
    *************************/
    likeIcon.style.cursor = 'pointer';
    const totalCount = document.getElementById('likes-total');

    function like() {
      if (likeIcon.classList.contains('active')) {
        likeIcon.classList.toggle('active');
        totalCount.textContent = parseInt(totalCount.textContent, 10) - 1;
        likedNumber.textContent = parseInt(likedNumber.textContent, 10) - 1;
      } else {
        likeIcon.classList.toggle('active');
        totalCount.textContent = parseInt(totalCount.textContent, 10) + 1;
        likedNumber.textContent = parseInt(likedNumber.textContent, 10) + 1;
      }
    }

    /* Add or remove like on click */
    likeIcon.addEventListener('click', like);
    likeIcon.setAttribute('role', 'button');
    /* Add or remove like on Enter */
    likeIcon.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        like();
      }
    });

    /************************
      lightbox
    *************************/
    const lightBox = document.querySelector('.lightbox');
    const lbImgTag = document.createElement('img');
    const lbVideoTag = document.createElement('video');
    const lbFigure = document.querySelector('.lightbox__img');
    const modalOverlayLb = document.querySelector('.modal-overlay-lightbox');
    const lbCloseBtn = document.querySelector('.close-btn');

    /******* when media is clicked runs function openLb ********/
    function openLb() {
      lbImgTag.setAttribute('aria-label', title);
      lbImgTag.tabIndex = 0;
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
        lbVideoTag.tabIndex = -1;
        lbVideoTag.classList.add('lightbox__current-element');
      }

      // media description
      const figCaption = document.createElement('figcaption');
      figCaption.textContent = title;
      figCaption.classList.add('lightbox__dscr');
      lbFigure.append(figCaption);

      // accessibility
      const focusedElementBeforeModal = document.activeElement;

      // Find all focusable children

      const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
      let focusableElements = lightBox.querySelectorAll(focusableElementsString);
      // Convert NodeList to Array
      focusableElements = Array.prototype.slice.call(focusableElements);

      const firstTabStop = focusableElements[0];
      const lastTabStop = focusableElements[focusableElements.length - 1];

      // Show the modal and overlay
      lightBox.style.display = 'flex';
      modalOverlayLb.style.display = 'block';

      // Focus first child
      function trapTabKey(e) {
        // Check for TAB key press
        if (e.keyCode === 9) {
          // SHIFT + TAB
          if (e.shiftKey) {
            if (document.activeElement === firstTabStop) {
              e.preventDefault();
              lastTabStop.focus();
            }
            // TAB
          } else if (document.activeElement === lastTabStop) {
            e.preventDefault();
            firstTabStop.focus();
          }
        }
      }
      firstTabStop.focus();
      lightBox.addEventListener('keydown', trapTabKey);
    }

    function closeLb() {
      lightBox.style.display = 'none';
    }

    // when media element is clicked, open lightbox
    mediaWrap.childNodes[0].addEventListener('click', (openLb));
    // open lightbox with enter key
    mediaWrap.childNodes[0].addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        openLb();
      }
    });
    // close lightbox by X button or Escape key
    lbCloseBtn.addEventListener('click', (closeLb));
    lightBox.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeLb();
      }
    });

    return mediaWrap;
  }

  return {
    photographerId, title, image, likes, date, price, video, getMediaDom,
  };
}

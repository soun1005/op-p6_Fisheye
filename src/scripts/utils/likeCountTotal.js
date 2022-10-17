/* eslint-disable spaced-comment */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/*****************************************************
this page contains codes to get total sum of 'like'.
  codes for 'like' of each elements are
  located ->  /factories/media.js
*****************************************************/
function countLike(medias) {
  let likeSum = 0;
  medias.forEach((media) => {
    likeSum += media.likes;
  });
  const likeCounter = document.getElementById('likes-total');
  likeCounter.textContent = `${likeSum}`;
  likeCounter.setAttribute('aria-label', `${likeSum}likes`);
}

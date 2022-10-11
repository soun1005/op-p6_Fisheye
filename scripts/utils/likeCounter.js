/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// getting sum of likes number on each elements.
function countLike(medias) {
  let likeSum = 0;
  medias.forEach((media) => {
    likeSum += media.likes;
  });
  const likeCounter = document.getElementById('likes-total');
  likeCounter.textContent = `${likeSum}`;
  likeCounter.setAttribute('aria-label', `${likeSum}likes`);
  // console.log(likeSum);
}

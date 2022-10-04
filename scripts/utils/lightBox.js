const lightBox = document.querySelector('.lightbox');
const lbCloseBtn = document.querySelector('.close-btn');

// close lightbox modal
function closeLb() {
  lightBox.style.display = 'none';
}

lbCloseBtn.addEventListener('click', closeLb);
lbCloseBtn.style.cursor = 'pointer';

/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/* global getJsonData */
//Mettre le code JavaScript lié à la page photographer.html

async function displayDataHeader(photographers) {
  const photographersHeader = document.querySelector('.photograph-header');
  const makeProfile = photographerFactory(photographers);
  // makeProfile = factory with data
  // setHeader = factory+data -> combine with method
  const setHeader = makeProfile.getUserProfileDom();
  // prepend factory+data+method in the <header> in HTML
  photographersHeader.prepend(setHeader);
}

/* to get the id of photographers from URL*/
function getIdParameter() {
  const parameters = new URLSearchParams(window.location.search);
  const idString = parameters.get('id');
  return parseInt(idString, 10);
}

/* if id matches -> return the object of photographer matched */
function getPhotographerById(id, photographers) {
  const matchedPhotographer = photographers.filter((data) => data.id === id);
  // return first match
  return matchedPhotographer[0];
}

function getMediaByPhotographerId(id, media) {
  return media.filter((data) => data.photographerId === id);
}

async function init() {
// fetch Json data
  const { photographers, media } = await getJsonData();
  //   photographerId = the page's photographer's ID
  const photographerId = getIdParameter();

  // 'photographer' is the object of the photographer that matched ID in Json
  const photographer = getPhotographerById(photographerId, photographers);
  displayDataHeader(photographer);
  //  medias that match photographer
  const photographerMedia = getMediaByPhotographerId(photographerId, media);
  console.log('photographerMedia', photographerMedia);
}
init();

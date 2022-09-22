/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/* global getJsonData */
//Mettre le code JavaScript lié à la page photographer.html

async function displayDataHeader(photographers) {
  const photographersHeader = document.querySelector('.photograph-header');
  const makeProfile = photographerFactory(photographers);
  const setHeader = makeProfile.getUserProfileDom();
  photographersHeader.prepend(setHeader);
}

/* to get the id of photographers*/
function getIdParameter() {
  const parameters = new URLSearchParams(window.location.search);
  const idString = parameters.get('id');
  return parseInt(idString, 10);
}

/* if id matches -> return the object of photographer matched */
function getPhotographerById(id, photographers) {
  const matchedPhotographer = photographers.filter((photographer) => photographer.id === id);
  return matchedPhotographer[0];
}

async function init() {
// fetch Json data
  const { photographers } = await getJsonData();
  const photographerId = getIdParameter();
  // 'photographer' is the object of the photographer that matched ID in Json
  const photographer = getPhotographerById(photographerId, photographers);
  //   console.log(photographer);
  displayDataHeader(photographer);
}
init();

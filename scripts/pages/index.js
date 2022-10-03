/* eslint-disable spaced-comment */
/* global photographerFactory */
/* global getJsonData */
/* eslint no-undef: "error" */

/********* display photographer data inside photographer_section *********/
async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section');
  // loop for each { photographer } objects (by forEach)
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    // in HTML tag <section> append each elements
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
/******* Récupère les datas des photographes********/
// const result = getJasonData()
// result.photographers
  const { photographers } = await getJsonData();
  displayData(photographers);
}
init();

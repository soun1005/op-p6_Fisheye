/* global photographerFactory */
/* eslint no-undef: "error" */

// eslint-disable-next-line spaced-comment
/**************** fetch data from Json file ****************/
async function getDataJson() {
  let fetchedData = { photographers: [], media: [] };
  await fetch('data/photographers.json')
    .then(async (response) => {
      fetchedData = await response.json();
    });
  return fetchedData;
}

// displayData = display data in the landing page
async function displayData(photographers) {
  // select div called 'photographer section'
  const photographersSection = document.querySelector('.photographer_section');

  // each photographers are going to have userCardDom inside <div class="photographer_section">
  photographers.forEach((photographer) => {
    // photographerModel = factory method + parameters(data)
    const photographerModel = photographerFactory(photographer);
    // userCardDOM = user html tags
    const userCardDOM = photographerModel.getUserCardDOM();
    // inside <section> put user html tags
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getDataJson();
  displayData(photographers);
}

init();

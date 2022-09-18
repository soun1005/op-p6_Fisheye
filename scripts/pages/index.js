async function getPhotographers() {
  let fetchedData = {};

  await fetch('data/photographers.json')
    .then(async (response) => {
      fetchedData = await response.json();
    }).catch(() => {
      fetchedData = { photographers: [], media: [] };
    });
  console.log(fetchedData);
  return fetchedData;
}

async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section');

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();

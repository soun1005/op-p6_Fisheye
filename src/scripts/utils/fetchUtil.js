/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */

/*************************
 fetch data from Json file
 *************************/
async function getJsonData() {
  // default value
  let fetchedData = { photographers: [], media: [] };
  await fetch('data/photographers.json')
    .then(async (response) => {
      fetchedData = await response.json();
    });
  return fetchedData;
}

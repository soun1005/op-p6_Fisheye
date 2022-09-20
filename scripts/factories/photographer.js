// factory method to create objects.
function photographerFactory(data) { // eslint-disable-line no-unused-vars
  // let name = data.name;
  // let portrait = data.portrait;
  // 객체구조분해
  const {
    name, portrait, id, city, country, tagline, price,
  } = data;

  // photos of photographers
  // data.portrait = address of the imgs
  const picture = `assets/photographers/${portrait}`;

  // to create 'article' in HTML.
  function getUserCardDOM() {
    // eslint-disable-next-line spaced-comment
    /**** create tags in HTML(=createElement).
     <article> & <a> ************************/
    const article = document.createElement('article');
    const photographerLink = document.createElement('a');
    photographerLink.href = `photographer.html?id=${id}`;
    // <img>
    const img = document.createElement('img');
    img.setAttribute('src', picture);
    img.setAttribute('alt', `photo of ${name}`);
    // <h2>
    const h2 = document.createElement('h2');
    h2.textContent = name;

    // articleInfo > hometown(h3), tagline(p), price(p)
    const articleInfo = document.createElement('article');
    const tagLineElement = document.createElement('p');
    const homeTown = document.createElement('h3');
    const priceElement = document.createElement('p');
    homeTown.textContent = `${city}, ${country}`;
    tagLineElement.textContent = tagline;
    priceElement.textContent = `${price}€ / jour`;

    // class names added in HTML
    articleInfo.classList.add('info');
    homeTown.classList.add('city');
    tagLineElement.classList.add('tagLine');
    priceElement.classList.add('price');

    // appending elements in a parent elements
    photographerLink.appendChild(img);
    photographerLink.appendChild(h2);
    article.appendChild(articleInfo);
    articleInfo.appendChild(homeTown);
    articleInfo.appendChild(tagLineElement);
    articleInfo.appendChild(priceElement);

    return (article);
  }
  return { name, picture, getUserCardDOM };
}

/* eslint-disable no-unused-vars */
/* eslint-disable padded-blocks */
/* eslint-disable spaced-comment */
// factory method to create objects.

function photographerFactory(data) { // eslint-disable-line no-unused-vars
  // Destructuring Assignment 객체구조분해
  const {
    name, portrait, id, city, country, tagline, price, title,
  } = data;

  // photos of photographers
  // data.portrait = address of the imgs
  const picture = `assets/photographers/${portrait}`;

  // to create 'article' in index.html
  function getUserCardDOM(cardNum) {
    /**** <article> & <a> ************************/
    const article = document.createElement('article');
    const photographerLink = document.createElement('a');
    photographerLink.href = `photographer.html?id=${id}`;
    // accessibility
    photographerLink.setAttribute('role', 'link');

    // <img>
    const img = document.createElement('img');
    img.setAttribute('src', picture);
    img.setAttribute('alt', '');

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

    // appending elements in parent elements
    article.appendChild(photographerLink);
    article.appendChild(articleInfo);
    photographerLink.appendChild(img);
    photographerLink.appendChild(h2);
    articleInfo.appendChild(homeTown);
    articleInfo.appendChild(tagLineElement);
    articleInfo.appendChild(priceElement);

    return (article);
  }

  // profile dom for photographer.html
  function getUserProfileDom(cardNum) {

    const photographeHeader = document.querySelector('.photograph-header');
    const profileDiv = document.createElement('div');
    photographeHeader.prepend(profileDiv);

    const profileName = document.createElement('h1');
    profileName.textContent = name;
    profileName.tabIndex = 0;

    const location = document.createElement('p');
    location.textContent = `${city}, ${country}`;

    const tagLine = document.createElement('p');
    tagLine.textContent = tagline;

    profileDiv.appendChild(profileName);
    profileDiv.appendChild(location);
    profileDiv.appendChild(tagLine);

    const profileImg = document.createElement('img');
    profileImg.setAttribute('src', picture);
    profileImg.setAttribute('alt', name);
    photographeHeader.append(profileImg);

    profileName.classList.add('header__profile-wrap__name');
    location.classList.add('header__profile-wrap__location');
    tagLine.classList.add('header__profile-wrap__tagline');
    profileDiv.classList.add('header__profile-wrap');
    profileImg.classList.add('header__img');
    // profileImg.setAttribute('aria-label', 'photo');

    // user price
    const userPrice = document.getElementById('user-price');
    userPrice.textContent = `${price}€ / jour`;

    // modal name display
    const modalHeaderWrap = document.querySelector('.modal__header__wrap');
    const contactName = document.createElement('h2');
    contactName.textContent = name;
    contactName.setAttribute('aria-label', name);
    contactName.tabIndex = 0;
    modalHeaderWrap.append(contactName);

    return profileDiv;
  }

  return {
    name, portrait, id, city, country, tagline, price, title, getUserCardDOM, getUserProfileDom,
  };
}

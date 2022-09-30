/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */

/*****
REGEX
******/
const mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
const nameRegex = /[a-zA-Z]+/i;

// open & close modal
function displayModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'none';
}

// input control

/**********************************************************
Error message control
Parameter(name) is each input.
When user information is not validated, show error message,
when it's validated, error message on HTML is set to false.
***********************************************************/
function addAttr(name) {
  (name).parentNode.setAttribute('data-error-visible', 'true');
}

// when input is validated - no error msg
function setAttr(name) {
  (name).parentNode.setAttribute('data-error-visible', 'false');
}

/*************************************
1. First name & Last name validation.
**************************************/

const firstNameValidation = () => {
  const fName = document.getElementById('first');
  if (fName.value === '' || fName.value.length < 2 || !fName.value.match(nameRegex)) {
    addAttr(fName);
  } else {
    setAttr(fName);
  }
};

const lastNameValidation = () => {
  const lName = document.getElementById('last');
  if (lName.value === '' || lName.value.length < 2 || !lName.value.match(nameRegex)) {
    addAttr(lName);
  } else {
    setAttr(lName);
  }
};

/*********************
2. Email validation.
**********************/
const emailValidation = () => {
  const enteredEmail = document.getElementById('email');
  if (!enteredEmail.value.match(mailRegex) || enteredEmail.value === '') {
    addAttr(enteredEmail);
  } else {
    setAttr(enteredEmail);
  }
};
/*********************
3. Message validation.
**********************/
const messageValidation = () => {
  const enteredMsg = document.getElementById('message');
  if (enteredMsg.value === '') {
    addAttr(enteredMsg);
  } else {
    setAttr(enteredMsg);
  }
};

/************************************
4. Submit button.
All validation functions combined.
When submit btn is clicked -> validate all inputs.
************************************/
const send = document.getElementById('form');
send.addEventListener('submit', (e) => {
  e.preventDefault();
  firstNameValidation();
  lastNameValidation();
  emailValidation();
  messageValidation();
});

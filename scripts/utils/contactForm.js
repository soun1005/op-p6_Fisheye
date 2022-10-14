/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */

/*****
REGEX
******/
const mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
const nameRegex = /[a-zA-Z]+/i;
const modal = document.getElementById('contact_modal');
const contactForm = document.getElementById('contactForm');
const closeContactFormModal = document.getElementById('close_button');
const submitButton = document.getElementById('contact_btn');
const confirmModal = document.querySelector('.confirm-bg');
const confirmModalText = document.querySelector('.confirm-modal');
const inputField = document.querySelectorAll('.text-control');
const contactModal = document.getElementById('contact_modal');

// accessibility
const modalDiv = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal-overlay');

// open & close modal
const accessibility = (e) => {
  // e.key는 esc, 닫기버튼
  e.key === 'Escape' && closeModal();
  // 만약에 e.key가 탭이거나, 타겟이 '보내기'버튼이면
  // 모달안에 포커스 하고 디폴트 노노
  if (e.key === 'Tab' && e.target === submitButton) {
    e.preventDefault();
    modal.focus();
  }
};

const closeModal = () => {
  document.removeEventListener('keydown', accessibility);
  modal.style.display = 'none';
};

const displayModal = () => {
  // Show the modal and overlay
  modal.style.display = 'block';
  modalOverlay.style.display = 'block';
  document.addEventListener('keydown', accessibility);
  modal.focus();
  modalOverlay.addEventListener('click', closeModal);
};

const closeConfirm = () => {
  confirmModal.removeEventListener('keydown', accessibility);
  confirmModal.style.display = 'none';
};

// function closeConfirm() {
//   confirmModal.style.display = 'none';
// }

// function displayModal() {
//   modal.style.display = 'block';
//   const focusedElementBeforeModal = document.activeElement;

//   // Sign-Up button
//   const signUpBtn = modal.querySelector('#signup');

//   // Find all focusable children
//   const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
//   let focusableElements = modal.querySelectorAll(focusableElementsString);
//   // Convert NodeList to Array
//   focusableElements = Array.prototype.slice.call(focusableElements);

//   const firstTabStop = focusableElements[0];
//   const lastTabStop = focusableElements[focusableElements.length - 1];

//   // Show the modal and overlay
//   modal.style.display = 'block';
//   modalOverlay.style.display = 'block';

//   // Focus first child
//   firstTabStop.focus();

//   function trapTabKey(e) {
//     // Check for TAB key press
//     if (e.keyCode === 9) {
//       // SHIFT + TAB
//       if (e.shiftKey) {
//         if (document.activeElement === firstTabStop) {
//           e.preventDefault();
//           lastTabStop.focus();
//         }

//       // TAB
//       } else if (document.activeElement === lastTabStop) {
//         e.preventDefault();
//         firstTabStop.focus();
//       }
//     }
//     // ESCAPE
//     if (e.keyCode === 27) {
//       closeModal();
//     }
//   }
//   modal.addEventListener('keydown', trapTabKey);
//   modalOverlay.addEventListener('click', closeModal);
// }

// function closeConfirm() {
//   confirmModal.style.display = 'none';
// }

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

// 4. Console input values

const consoleValue = () => {
  const inputText = document.querySelectorAll('.text-control');
  inputText.forEach((input) => {
    console.log(input.value);
  });
};

// 5. Confirm Modal
const confirmModalOn = (e) => {
  // when the validation failed
  const errorsVisible = document.querySelectorAll('[data-error-visible="true"]');
  // when error message is 0, open confirm modal.
  const noError = errorsVisible.length === 0;
  const form = document.getElementById('form');
  if (noError) {
    confirmModal.style.display = 'block';
    confirmModalText.style.display = 'block';
    closeModal();
    // reset modal when everything is validated.
    form.reset();
  }
};

/************************************
6. Submit button.
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
  consoleValue();
  confirmModalOn();
});

const confirmBtn = document.getElementById('close-confirm');
confirmBtn.addEventListener('click', closeConfirm);

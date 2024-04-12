// ================ import modules ================

// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// import { getItems } from './js/go-it-api';
// import { createMarkup } from './js/render-functions';

// ============= document elements =============

// const element = document.querySelector('elem');
// const form = document.querySelector('form');
// const button = document.querySelector('.button-class');
// const attribute = document.querySelectorAll('[attribute]');

// form.addEventListener('submit', handleSubmit);
// button.addEventListener('click', handleClick);

// =========== module initialization params ===========

const module = new Module('.element', {
  params,
});

// ============= / Submit function / =============

async function handleSubmit(event) {
  event.preventDefault();

  element.innerHTML = ''; // Clear markup
  query = event.target['attribute'].value.trim();

  if (query !== '') {
    // --------------------------------------------
    try {
      const res = await getItems(email, message);
      if (res.length === 0) {
        loaderStop();
        return iziToast.error({
          message:
            'Sorry, there are no items matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      element.innerHTML = galleryMarkup(res.hits); // Create markup
      event.target['attribute'].value = ''; // clear input value
      // --------------------------------------------
    } catch (err) {
      console.log(err);
    }
    // --------------------------------------------
  } else {
    iziToast.info({
      message: 'Please, enter a query!',
      position: 'topLeft',
    });
  }
}

// ============= / internal functions / =============

function fooOn(value) {
  console.log(value);
}
function fooOff(value) {
  console.error(value);
}

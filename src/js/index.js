import Splide from '@splidejs/splide';
import '@splidejs/splide/css/core';
//import '@splidejs/splide/css';
import '@scss/main.scss'

//preloader
const preloader = () => {
  setTimeout(function () {
    let preloader = document.body.querySelector('#page-preloader');
    if (!preloader)
      return false
    if (!preloader.classList.contains('done'))
      preloader.classList.add('done');
  }, 1000);
}
document.addEventListener('DOMContentLoaded', preloader, false);

//upload photo
const uploadPhotoInput = document.querySelector('.custom-file-input');
const profilePhoto = document.querySelector('.settings-photo .profile-photo');
const uploadPhoto = () => {
  let url = 'assets/img/photos/ava.jpg';
  profilePhoto.style.backgroundImage = 'url(' + url + ')';
  console.log('uploadPhoto');
}
if (!!uploadPhotoInput)
  uploadPhotoInput.addEventListener('change', uploadPhoto, false);


// Splidejs (cursor customisation)
const splides = document.querySelectorAll('.splide');

const splideIsDrag = (e) => {
  if (e.target.closest('.splide') === null)
    return false
  e.target.closest('.splide').classList.add('is-grab');
}

const splideIsntDrag = (e) => {
  if (e.target.closest('.splide') === null)
    return false
  e.target.closest('.splide').classList.remove('is-grab');
}

if (!!splides) {
  splides.forEach(el => el.addEventListener('mousedown', splideIsDrag, false));
  splides.forEach(el => el.addEventListener('mouseup', splideIsntDrag, false));
}

// Splidejs
// https://github.com/Splidejs/splide

if (document.querySelector('.splide_up') !== null) {
  new Splide( '.splide_up', {
    type       : 'loop',
    arrows     : false,
    autoHeight : true,
    perPage    : 1,
    breakpoints: {
      640: {
        //height: '6rem',
      },
    },
  } ).mount();
}

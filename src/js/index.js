import '@scss/main.scss'

const foo = bar => console.log('some...', bar);
foo('bar');


//preloader
const preloader = () => {
  setTimeout(function () {
    let preloader = document.body.querySelector('#page-preloader');
    if (preloader != null) {
      if (!preloader.classList.contains('done')) {
        preloader.classList.add('done');
      }
    }
  }, 1000);
}
document.addEventListener('DOMContentLoaded', preloader, false);

//upload photo
const uploadPhotoInput = document.querySelector('.custom-file-input');
const profilePhoto = document.querySelector('.profile-photo');
const uploadPhoto = () => {
  let url = 'img/photos/ava.jpg';
  profilePhoto.style.backgroundImage = 'url(' + url + ')';
  console.log('uploadPhoto');
}
uploadPhotoInput.addEventListener('change', uploadPhoto, false);

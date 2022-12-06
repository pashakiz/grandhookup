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

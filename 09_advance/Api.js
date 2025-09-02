const requestUrl = "https://api.github.com/users/hiteshchoudhary";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);

let profile, followersCount;

xhr.onreadystatechange = function () {
  // console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    // console.log(typeof data);
    profile = data.avatar_url;
    followersCount = data.followers;
  }
};
xhr.send();

let followers = document.querySelector('.text-container span')
let img = document.querySelector('.img-container img')
let btn = document.querySelector('button');

btn.addEventListener('click', function () {
  //!== {not equal to undefined} If profile exists AND followersCount is not undefined, then run the code to update the image and followers
  if ( profile && followersCount !== undefined) {
    img.src = profile;
    followers.innerHTML = followersCount;
  // warna is wale ko 
  } else{
    console.log('data is not loaded yet, please wait a moment')
  }
})
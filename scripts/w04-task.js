/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};

/* Populate Profile Object with placesLive objects */
/* Photo with attributes */
myProfile.photo = "images/profile.jpeg";
/* Name */
myProfile.name = "Jade Miller";

/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods = [
    ' Eggs',
    ' Blueberries',
    ' Icecream',
    'Tomatoes'
  ];

/* Hobbies List */
myProfile.hobbies = [' Cooking',' Audio books', ' Photography']; 

/* Places Lived DataList */
myProfile.placesLived = [];

myProfile.placesLived.push(
    {
      place: 'Idaho',
      length: '20 years'
    },
    {
      place: 'Chicago',
      length: '1 year'
    },
    {
        place: 'Ohio',
        length: '4 months'
    }
  );
  
  
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});

myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  dt.textContent = place.place;
  let dd = document.createElement('dd');
  dd.textContent = place.length;
  document.querySelector('#places-lived').appendChild(dt);
  document.querySelector('#places-lived').appendChild(dd);
});
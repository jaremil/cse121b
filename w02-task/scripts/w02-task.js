/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */
 
/* Step 2 - Variables */
let fullName = 'Jade Miller';
let currentYear = '2024';
let profilePicture = 'images/profile.jpeg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('#year');
const imageElement = document.getElementById('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFood = ['Eggs', 'Blueberries', 'Rice'];
let singleFood = 'Tomatoes';

favoriteFood.push(singleFood);
foodElement.innerHTML += '<br>${favoriteFood}';
favoriteFood.shift();
foodElement.innerHTML += '<br>${favoriteFood}';
favoriteFood.pop();
foodElement.innerHTML += '<br>${favoriteFood}';
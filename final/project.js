// API KEY:
// app_key=5da969c846771f1263644b02730a6d4e
// app_id=1113c3cd
// Example Get Query:
// https://api.edamam.com/api/recipes/v2?app_key=5da969c846771f1263644b02730a6d4e&app_id=1113c3cd&type=public&q=tofu

// Access Point: https://api.edamam.com/api/recipes/v2
// https://api.edamam.com/doc/open-api/recipe-search-v2.json

// All string builds use template literals versus string concatenation.
// The application works as planned, uses JavaScript, interacts with the DOM, and is usable to the client. The range option is provided to the grader in order to account for levels of functionality, or usability of the applications.
// The JavaScript application is rendered on the student's GitHub Pages in a subfolder within cse121b.

/* Search by category Filter */

const recipeElement = document.getElementById("recipeContainer");
const recipeList = [];

const displayRecipe = async (searchTerm) => {
  const response = await fetch(
    `https://api.edamam.com/api/recipes/v2?app_key=5da969c846771f1263644b02730a6d4e&app_id=1113c3cd&type=public&q=${searchTerm}`
  );
  const data = await response.json();
  document.querySelector("#recipeContainer").innerHTML = data.hits.map((e) => {
    return `<br><a href="${e.recipe.url}">${e.recipe.label}</a>`;
  });
  return data;
};

const reset = () => {
  recipeElement.innerHTML = "";
};

document
  .querySelector("#filter-select-submit")
  .addEventListener("click", filterRecipes);

async function filterRecipes(recipes) {
  reset();

  const filter = document.getElementById("filter-select").value;

  // Conditional Branching
  switch (filter) {
    case "biscuits_and_cookies":
      displayRecipe("biscuits%20and%20cookies");
      break;

    case "bread":
      displayRecipe("bread");
      break;

    case "cereals":
      displayRecipe("cereals");
      break;

    case "desserts":
      displayRecipe("desserts");
      break;

    case "drinks":
      displayRecipe("drinks");
      break;

    case "pancake":
      displayRecipe("pancake");
      break;

    case "preps":
      displayRecipe("preps");
      break;

    case "preserve":
      displayRecipe("preserve");
      break;

    case "salad":
      displayRecipe("salad");
      break;

    case "sandwiches":
      displayRecipe("sandwiches");
      break;

    case "soup":
      displayRecipe("soup");
      break;

    case "starter":
      displayRecipe("starter");
      break;

    case "sweets":
      displayRecipe("sweets");
      break;
  }
}

/* Search Randomly Button */

async function getRandom() {
  // Array Method
  const searchOptions = [
    "chicken",
    "tofu",
    "blueberry",
    "salmon",
    "rice",
    "chocolate",
    "lemon",
    "onion",
  ];
  const searchTerm =
    searchOptions[Math.floor(Math.random() * searchOptions.length)];

  // Fetch - JSON
  const response = await fetch(
    `https://api.edamam.com/api/recipes/v2?app_key=5da969c846771f1263644b02730a6d4e&app_id=1113c3cd&type=public&random=true&q=${searchTerm}`
  );
  const data = await response.json();

  document.querySelector("#recipeContainer").innerHTML = data.hits.map((e) => {
    return `<br><a href="${e.recipe.url}">${e.recipe.label}</a>`;
  });
}

document.querySelector("#randomButton").addEventListener("click", () => {
  getRandom();
});

/* Search by Name */

async function getName() {
  reset();
  let input = document.getElementById("searchInput").value;
  let data = await displayRecipe(input);

  if (data.hits.length == 0) {
    document.querySelector("#recipeContainer").innerHTML = "No results";
  }
}

document.querySelector("#searchButton").addEventListener("click", () => {
  getName();
});

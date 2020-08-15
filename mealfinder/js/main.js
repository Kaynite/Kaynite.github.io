const search = document.getElementById("search"),
    submit = document.getElementById("submit"),
    random = document.getElementById("random"),
    mealsEL = document.getElementById("meals"),
    resultHeading = document.getElementById("result-heading"),
    singleMealEl = document.getElementById("single-meal");

// Functions
function searchMeal(e) {
    e.preventDefault();
    singleMealEl.innerHTML = "";
    term = search.value;
    if (term.trim()) {
        fetch(` https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then((res) => res.json())
            .then((data) => {
                let searchResults = data.meals;
                console.log(searchResults);
                resultHeading.innerHTML = `<h2>Search Results for '${term}':</h2>`;
                if (searchResults === null) {
                    resultHeading.innerHTML = `<h2>There are no search Results, Try Again.</h2>`;
                    mealsEL.innerHTML = "";
                } else {
                    mealsEL.innerHTML = searchResults
                        .map(
                            (meal) => `
                            <div class="meal" >
                                <img src="${meal.strMealThumb}" />
                                <div class="meal-info" data-mealID="${meal.idMeal}">
                                    <h3>${meal.strMeal}</h3>
                                </div>
                            </div>`
                        )
                        .join("");
                }
            });
    } else {
        alert("Please Enter a Search Word!");
    }
    search.value = "";
}

function getMealById(id) {
    fetch(` https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => res.json())
        .then((data) => {
            let meal = data.meals[0];
            const ingredients = [];
            for (let i = 1; i <= 20; i++) {
                if (meal[`strIngredient${i}`]) {
                    ingredients.push(
                        meal[`strIngredient${i}`] +
                        " - " +
                        meal[`strMeasure${i}`]
                    );
                } else {
                    break;
                }
            }
            singleMealEl.innerHTML = `
        <div>
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}" />
            <div class="single-meal-info">
                ${
                meal.strCategory
                    ? "<p>" +
                    meal.strCategory +
                    (meal.strArea ? " (" + meal.strArea + ")</p>" : "")
                    : ""
                }
            </div>
            <h3>Instructions</h3>
            <p class="instructions">${meal.strInstructions}</p>
            <h3>Ingredients</h3>
            <ul>
                ${ingredients
                    .map((ingredient) => {
                        return "<li>" + ingredient + "</li>";
                    })
                    .join("")}
            </ul>
        </div>
        `;
        });
}

function getRandomMeal() {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then((res) => res.json())
        .then((data) => {
            let meal = data.meals[0];
            const ingredients = [];
            for (let i = 1; i <= 20; i++) {
                if (meal[`strIngredient${i}`]) {
                    ingredients.push(
                        meal[`strIngredient${i}`] +
                        " - " +
                        meal[`strMeasure${i}`]
                    );
                } else {
                    break;
                }
            }
            singleMealEl.innerHTML = `
    <div>
        <h2>${meal.strMeal}</h2>
        <img src="${meal.strMealThumb}" />
        <div class="single-meal-info">
            ${
                meal.strCategory
                    ? "<p>" +
                    meal.strCategory +
                    (meal.strArea ? " (" + meal.strArea + ")</p>" : "")
                    : ""
                }
        </div>
        <h3>Instructions</h3>
        <p class="instructions">${meal.strInstructions}</p>
        <h3>Ingredients</h3>
        <ul>
            ${ingredients
                    .map((ingredient) => {
                        return "<li>" + ingredient + "</li>";
                    })
                    .join("")}
        </ul>
    </div>
    `;
        });
}

mealsEL.addEventListener("click", function (e) {
    const mealInfo = e.composedPath().find((item) => {
        if (item.classList) {
            return item.classList.contains("meal-info");
        } else {
            return false;
        }
    });

    if (mealInfo) {
        let mealID = mealInfo.getAttribute("data-mealid");
        getMealById(mealID);
    }
});

submit.addEventListener("submit", searchMeal);

random.addEventListener("click", getRandomMeal);

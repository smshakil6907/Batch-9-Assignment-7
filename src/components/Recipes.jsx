import React, { useEffect, useState } from "react";

export default function Recipes({ handleAddToCook }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("./recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="w-2/3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {recipes.map((recipe) => (
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-4 mt-4">
              <img
                className="rounded-lg"
                src={recipe.recipe_image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-gray-700 text-2xl font-bold">
                {recipe.recipe_name}
              </h2>
              <p className="text-gray-500">{recipe.short_description}</p>
              <h2 className="text-xl font-bold text-gray-600">
                Ingredients:
                {recipe.ingredients.length}
              </h2>
              <ul className="ml-8">
                {recipe.ingredients.map((item, index) => (
                  <li className="list-disc text-gray-500" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <div className="flex items-center gap-4 text-gray-500">
                  <i className="fa-regular fa-clock"></i>
                  <p>{recipe.preparing_time} Minute.</p>
                </div>
                <div className="flex items-center gap-4 text-gray-500">
                  <i className="fa-solid fa-fire-flame-curved"></i>
                  <p>{recipe.calories} Calories.</p>
                </div>
              </div>
              <div className="card-actions">
                <button
                  onClick={() => handleAddToCook(recipe)}
                  className="btn bg-green-800 rounded-full text-white px-8 font-bold "
                >
                  Want to Cook
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

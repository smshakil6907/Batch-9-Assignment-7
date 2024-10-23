import React from "react";

export default function Sidebar({
  recipeCook,
  handleRemove,
  preparingRecipe,
  handelTimeCalories,
  totalTime,
  totalCalories,
}) {
  return (
    <div className="w-1/3 border-2 rounded-xl text-gray-600 p-2 bg-base-100">
      {/* want to cook table */}
      <div className="overflow-x-auto">
        <h2 className="border-b-2 mx-auto font-semibold text-gray-800 text-center pb-3">
          Want To Cook: {recipeCook.length}
        </h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="">
            {recipeCook.map((recipe, index) => (
              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td>
                  <button
                    onClick={() => {
                      handleRemove(recipe.recipe_id);
                      handelTimeCalories(
                        recipe.preparing_time,
                        recipe.calories
                      );
                    }}
                    className="bg-green-800 rounded-full text-white px-4 py-2"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* current cooking table */}
      <div className="overflow-x-auto mt-8">
        <h2 className="border-b-2 mx-auto font-semibold text-gray-800 text-center pb-3">
          Preparing Recipe : {preparingRecipe.length}
        </h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody className="">
            {preparingRecipe.map((recipe, index) => (
              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
              </tr>
            ))}
            <tr>
              <th></th>
              <td></td>
              <td>Total Time: {totalTime}</td>
              <td>Total Calories: {totalCalories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

function App() {
  const [recipeCook, setRecipeCook] = useState([]);
  const [preparingRecipe, setPreparingRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleAddToCook = (recipe) => {
    const isExist = recipeCook.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );
    if (!isExist) {
      setRecipeCook([...recipeCook, recipe]);
    } else {
      alert("Recipe already exists!!");
    }
  };

  const handleRemove = (id) => {
    const delateRecipe = recipeCook.find((recipe) => recipe.recipe_id === id);
    const updateCook = recipeCook.filter((recipe) => recipe.recipe_id !== id);
    setRecipeCook(updateCook);
    setPreparingRecipe([...preparingRecipe, delateRecipe]);
  };

  const handelTimeCalories = (time, calories) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);
  };

  return (
    <>
      <div className="container mx-auto px-10 space-y-6">
        {/* Header section */}
        <Header></Header>
        {/* Banner section */}
        <Banner></Banner>
        {/* Our recipe section */}
        <OurRecipes></OurRecipes>
        <section className="flex gap-4 flex-col md:flex-row">
          <Recipes handleAddToCook={handleAddToCook}></Recipes>
          <Sidebar
            handleRemove={handleRemove}
            recipeCook={recipeCook}
            preparingRecipe={preparingRecipe}
            handelTimeCalories={handelTimeCalories}
            totalTime={totalTime}
            totalCalories={totalCalories}
          ></Sidebar>
        </section>
      </div>
    </>
  );
}

export default App;

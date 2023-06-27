import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

function RecipeList({ recipes, onRecipeClick }) {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
  
    const handleRecipeClick = (recipe) => {
      setSelectedRecipe(recipe);
      onRecipeClick(recipe);
    };
  
    return (
      <div>
        <div className="recipe-list grid grid-cols-3 gap-4 mt-8">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div
                key={recipe.uri}
                className="recipe-card text-center bg-yellow-100 rounded-lg p-4 shadow-md"
                onClick={() => handleRecipeClick(recipe)}
              >
                <img
                  src={recipe.image}
                  alt={recipe.label}
                  className="w-full h-auto rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold">{recipe.label}</h3>
              </div>
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
        {/* {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />} */}
      </div>
    );
  }
  
  export default RecipeList;
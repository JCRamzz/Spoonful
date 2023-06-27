import React from "react";

function RecipeList({recipes}) {

        const recipeItems = recipes.map((recipe) => (
          <div key={recipe.uri} className="recipe-card text-center bg-yellow-100 rounded-lg p-4 shadow-md">
            <img src={recipe.image} alt={recipe.label} className="w-full h-auto rounded-lg mb-2" />
            <h3 className="text-lg font-semibold">{recipe.label}</h3>
          </div>
        ));
      
        return (
          <div className="recipe-list grid grid-cols-3 gap-4 mt-8">
            {recipes.length > 0 ? recipeItems : <p>No recipes found.</p>}
          </div>
        );
      }

export default RecipeList;
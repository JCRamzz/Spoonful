import React from "react"

function RecipeDetails({recipe}) {
    const {label, image, ingredientLines } = recipe;
    return (
        <div className="recipe-details">
            <h2>{label}</h2>
            <img src={image} alt={label} className="recipe-image"/>
            <h3>Ingredients:</h3>
            <ul>
                {ingredientLines.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>

    );
}

export default RecipeDetails;
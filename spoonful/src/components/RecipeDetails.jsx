import React from "react"

function RecipeDetails({recipe}) {
    const {label, image, ingredientLines } = recipe;
    return (
        <div className="recipe-details">
            <h2 className="text-center text-xl py-3 font-bold">{label}</h2>
            <div className="flex justify-center">
            <img src={image} alt={label} className="recipe-image border border-gray-300"/>
            </div>
            <h3 className="text-center text-lg font-semibold">Ingredients</h3>
            <ul className="list-disc ml-6">
                {ingredientLines.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <div className="flex justify-end">
                <button className="bg-orange-600 hover:bg-orange-400 text-white font-semibold py-3 px-4 rounded shadow-lg mt-1 focus:outline focus:outline-black">Save</button>

            </div>
        </div>

    );
}

export default RecipeDetails;
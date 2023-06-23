import React, { useState, useEffect } from 'react';
import './App.css';
import { API_KEY, APP_ID } from '../env';


//const API_KEY = import.meta.env.VITE_API_KEY;
//const APP_ID = import.meta.env.VITE_APP_ID;

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  

  useEffect(() => {
    // Function to fetch recipes from the API based on search query
    const fetchRecipes = async () => {
      if (searchQuery.trim() === '') {
        // Don't make the API call if the search query is empty
        setRecipes([]);
        return;
      }
      
      try {
        const response = await fetch(
        `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${API_KEY}`
        );
        const data = await response.json();
        console.log(response);
        setRecipes(data.hits.map((hit) => hit.recipe)); 
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setRecipes([]); // Set recipes to an empty array in case of an error
      }
      console.log()
    };

    // Call the fetchRecipes function when searchQuery changes
    fetchRecipes();
  }, [searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300">
      <h1 className="text-6xl font-bold">Spoonful</h1>
      <input 
      type="text" 
      value={searchQuery} 
      onChange={handleSearch} 
      placeholder="Search for recipes"
      className='mt-4 p-2 rounded border'
      />
      {/* Display the recipe results */}
      <div className="recipe-list">
      {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.uri} className="recipe-card">
              <img src={recipe.image} alt={recipe.strMeal} />
              <h3>{recipe.label}</h3>
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Function to fetch recipes from the API based on search query
    const fetchRecipes = async () => {
      const response = await fetch(`API_URL?q=${searchQuery}`);
      const data = await response.json();
      setRecipes(data.results);
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
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
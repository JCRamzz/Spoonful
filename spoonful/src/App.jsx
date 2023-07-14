import React, { useState, useEffect } from 'react';
import './styling/App.css'
import RecipeList from './components/RecipeList';
import RecipeModal from './components/RecipeModal';
import { API_KEY, APP_ID } from '../env';
import NavBar from './components/NavBar';


//const API_KEY = import.meta.env.VITE_API_KEY;
//const APP_ID = import.meta.env.VITE_APP_ID;

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
    setModalIsOpen(false);
  };
  

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
        console.log('API response: ', data);
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
    //e.preventDefault(); // possible solution to the search-by-key-press
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-[url(./src/styling/background.jpg)]">
      <h1 className="font-burtons text-6xl mt-4 ">Spoonful</h1>
      <input 
      type="text" 
      value={searchQuery} 
      onChange={handleSearch}
      placeholder="Search for recipes"
      className='mt-4 p-2 rounded border'
      />
      <NavBar />
      <RecipeList recipes={recipes} onRecipeClick={openModal} />
      <RecipeModal isOpen={modalIsOpen} onRequestClose={closeModal} recipe={selectedRecipe}/>
      </div>
  );
};

export default App;
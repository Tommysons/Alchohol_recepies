"use client"
import React, { useState } from 'react';
import Modal from 'react-modal';
import recepies, { Recipe } from '../../utils/recepies';
import styled from 'styled-components';

const RecipeComponent = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const openModal = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <RecipeContainer>
      <h3 className="text-white text-3xl md:text-4xl font-extrabold text-center">
        Recipes
      </h3>
      <div className="recipe-grid">
        {recepies.map((recipe, index) => (
          <div key={index} className="recipe-card" onClick={() => openModal(recipe)}>
            <img src={recipe.link} alt={recipe.name} />
            <h2>{recipe.name}</h2>
          </div>
        ))}
      </div>
      <Modal
        className="h-screen modal modal-bottom sm:modal-middle place-items-center flex"
        isOpen={selectedRecipe !== null}
        onRequestClose={closeModal}
        contentLabel="Recipe Modal"
      >
        {selectedRecipe && (
          <RecipeModal className='p-2'>
            <h3 className="text-lg font-bold">Ingredients</h3>
            <ul>
              {selectedRecipe.ingredients.map((ingredient, idx) => (
                <li key={idx}>
                  {ingredient.title}: {ingredient.amount} {ingredient.unit}
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-bold">Method</h3>
            <p>{selectedRecipe.method}</p>
            {selectedRecipe.garnish && (
              <>
                <h3 className="text-lg font-bold">Garnish</h3>
                <p>{selectedRecipe.garnish}</p>
              </>
            )}
            <button className="btn" onClick={closeModal}>Close</button>
          </RecipeModal>
        )}
      </Modal>
    </RecipeContainer>
  );
};

const RecipeContainer = styled.section`
  padding: 10rem 0;
  background-color: black;
  color: white;

  .recipe-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .recipe-card {
    position: relative;
    cursor: pointer;
    background-color: #1f1f1f;
    padding: 0; /* Changed */
    border-radius: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    height: 250px; /* Added: Set a fixed height */
    overflow: hidden; /* Added: Hide overflow content */
  }
  
  .recipe-card:hover {
    transform: translateY(-5px);
  }
  
  img {
    width: 100%;
    height: 100%; /* Modified: Make the image take up the entire container height */
    object-fit: cover;
    border-radius: 1rem;
  }
  

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-align: center;
    position: absolute; /* Added */
    top: 50%; /* Added */
    left: 50%; /* Added */
    transform: translate(-50%, -50%); /* Added */
    color: white; /* Added */
    z-index: 1; /* Added */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Added */
    padding: 0.5rem; /* Added */
    background-color: rgba(0, 0, 0, 0.7); /* Added */
    border-radius: 0.5rem; /* Added */
    width: 80%; /* Added */
    opacity: 0; /* Added */
    transition: opacity 0.3s ease; /* Added */
  }

  .recipe-card:hover h2 {
    opacity: 1; /* Added */
  }
`;

const RecipeModal = styled.div`
  padding: 2rem;
  background-color: black;
  border-radius: 1rem;
  max-width: 600px;
  margin: 0 auto;
  text-align: left;

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
    margin-bottom: 0.5rem;
  }

  button {
    margin-top: 1rem;
  }
`;

export default RecipeComponent;

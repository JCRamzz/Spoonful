import React from 'react';
import Modal from 'react-modal';
import RecipeDetails from './RecipeDetails';
import '../styling/Modal.css'

const RecipeModal = ({ isOpen, onRequestClose, recipe }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Recipe Modal"
      className="modal"
      overlayClassName="modal-overlay"
    >
      {recipe && <RecipeDetails recipe={recipe} />}
    </Modal>
  );
};

export default RecipeModal;
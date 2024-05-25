// src/CheckboxForm.js
import React, { useState } from 'react';
import './CheckboxForm.css';
import { movieCharacters, historicalWords } from './words';

function chooseRandomWord(words) {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

function generateRandomWord() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let word = '';
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      word += alphabet[randomIndex];
    }
    return word;
  }

const randomHistoricalWord = chooseRandomWord(historicalWords);
const randomMovieCharacter = chooseRandomWord(movieCharacters);
const randomWord = generateRandomWord();
const common = "You twitter pseudoname is "

const CheckboxForm = () => {
  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: false,
    item3: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };


  const getSelectedMessage = () => {
    const { item1, item2, item3 } = checkedItems;
    if (item1 && item2 && item3) {
      return (common + randomMovieCharacter +randomHistoricalWord + "_" + randomWord);
    } else if (item1 && item2) {
      return (common + randomMovieCharacter + randomHistoricalWord);
    } else if (item1 && item3) {
      return (common + randomMovieCharacter + randomWord);
    } else if (item2 && item3) {
      return (common + randomHistoricalWord + randomWord);
    } else if (item1) {
      return (common + randomMovieCharacter);
    } else if (item2) {
      return (common + randomHistoricalWord);
    } else if (item3) {
      return (common + randomWord);
    } else {
      return 'No options are selected';
    }
  };


  return (
    <div className="form-container">
      <h1>Choose your preference for your twitter pseudo name.</h1>
      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            name="item1"
            checked={checkedItems.item1}
            onChange={handleChange}
          />
          Movie Character
        </label>
        <label>
          <input
            type="checkbox"
            name="item2"
            checked={checkedItems.item2}
            onChange={handleChange}
          />
          Historical Person
        </label>
        <label>
          <input
            type="checkbox"
            name="item3"
            checked={checkedItems.item3}
            onChange={handleChange}
          />
          Random Gibberish
        </label>
      </div>
      <div className="selected-message">
        {getSelectedMessage()}
      </div>
    </div>
  );
};

export default CheckboxForm;

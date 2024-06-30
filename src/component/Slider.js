// src/components/Slider.js
import React, { useState } from 'react';
import axios from 'axios';
import './slider.css';
import image1 from '../images/image 1.jpeg';
import image2 from '../images/image 2.jpeg';
import image3 from '../images/image 3.jpeg';
import image4 from '../images/image 4.jpeg';
const images = [
  image1,
  image2,
  image3,
  image4
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const handleLeftClick = async () => {
    const newIndex = (current - 1 + images.length) % images.length;
    setCurrent(newIndex);
    await axios.post('http://localhost:5000/clicks', { direction: 'left' });
  };

  const handleRightClick = async () => {
    const newIndex = (current + 1) % images.length;
    setCurrent(newIndex);
    await axios.post('http://localhost:5000/clicks', { direction: 'right' });
  };

  return (
    <div className="slider">
      <button className="arrow left" onClick={handleLeftClick}>&lt;</button>
      <img src={images[current]} alt={`slider ${current + 1}`} />
      <button className="arrow right" onClick={handleRightClick}>&gt;</button>
    </div>
  );
};

export default Slider;
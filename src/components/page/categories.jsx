import React from 'react';
import image from '../../assets/construct.png';

const Categories = () => (
  <div className="flex-center categories">
    <p>Under construction</p>
    <div className="img-wrapper"><img src={image} alt="construction" /></div>
  </div>
);

export default Categories;

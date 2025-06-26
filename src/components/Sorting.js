import React from 'react';
import { useDispatch } from 'react-redux';
import { sortContents } from '../store/actions/contentsActions';

const Sorting = () => {
  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    dispatch(sortContents(e.target.value));
  };

  return (
    <div>
      <select onChange={handleSortChange}>
        <option value="name">Item Name</option>
        <option value="priceHigh">Higher Price</option>
        <option value="priceLow">Lower Price</option>
      </select>
    </div>
  );
};

export default Sorting;
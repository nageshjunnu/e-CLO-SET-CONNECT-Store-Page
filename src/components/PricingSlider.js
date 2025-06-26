import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContents } from '../store/actions/contentsActions';

const PricingSlider = () => {
  const dispatch = useDispatch();
  const { pricingOptions } = useSelector((state) => state.contents.filters);

  const handleSliderChange = (e) => {
    const value = e.target.value;
    dispatch(filterContents({ priceRange: value }));
  };

  return (
    <div>
      {pricingOptions.includes('Paid') && (
        <input
          type="range"
          min="0"
          max="999"
          onChange={handleSliderChange}
        />
      )}
    </div>
  );
};

export default PricingSlider;
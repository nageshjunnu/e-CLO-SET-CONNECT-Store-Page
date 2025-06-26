import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContents } from '../store/actions/contentsActions';
import "./ContentsFilter.css";  

const ContentsFilter = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.contents.filters.pricingOptions);

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    dispatch(filterContents({ pricingOptions: { ...filters, [name]: checked } }));
  };

  const handleReset = () => {
    dispatch(
      filterContents({
        pricingOptions: {
          Paid: false,
          Free: false,
          'View Only': false,
        },
      })
    );
  };

  return (
    <div className="filter-section">

      <div className="filter-options">
        <p style={{fontSize:"10px",color:"#5c5c5c"}}>Pricing Options</p>
        <label>
          <input
            type="checkbox"
            name="Paid"
            checked={filters.Paid}
            onChange={handleFilterChange}
          />
          Paid
        </label>
        <label>
          <input
            type="checkbox"
            name="Free"
            checked={filters.Free}
            onChange={handleFilterChange}
          />
          Free
        </label>
        <label>
          <input
            type="checkbox"
            name="View Only"
            checked={filters['View Only']}
            onChange={handleFilterChange}
          />
          View Only
        </label>
        <button className="reset-button" onClick={handleReset}>
         RESET
        </button>
      </div>
      
    </div>
  );
};

export default ContentsFilter;
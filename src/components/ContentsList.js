import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setContents } from '../store/actions/contentsActions';
import { fetchContents } from '../utils/api';
import { pricingOptionMap } from '../utils/mappings';

const ContentsList = () => {
  const contents = useSelector((state) => state.contents.contents);
  const filters = useSelector((state) => state.contents.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchContents().then((data) => dispatch(setContents(data)));
  }, [dispatch]);

  const filteredContents = contents.filter((item) => {
    const itemPricingOption = pricingOptionMap[item.pricingOption];
    const matchesKeyword = item.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
                           item.creator.toLowerCase().includes(filters.keyword.toLowerCase());

    const selectedPricingOptions = Object.entries(filters.pricingOptions)
      .filter(([_, checked]) => checked)
      .map(([key]) => key);

    if (selectedPricingOptions.length === 0) {
      return matchesKeyword;
    }

    const matchesPricingOption = selectedPricingOptions.includes(itemPricingOption);

    return matchesKeyword && matchesPricingOption;
  });

  return (
    <>
      {filteredContents.map((item) => {
        const itemPricingOption = pricingOptionMap[item.pricingOption];
        const price =
          itemPricingOption === "Paid" ? `$${item.price}` : itemPricingOption;

        return (
          <div key={item.id} className="content-item">
          <img src={item.imagePath} alt={item.title} />
          <div className="content-info">
            <div className="text-block">
              <p className="title">{item.title}</p>
              <p className="creator">{item.creator}</p>
            </div>
            <p className="price">
              {itemPricingOption === 'Paid' ? `$${item.price}` : itemPricingOption.toUpperCase()}
            </p>
          </div>
        </div>

        );
      })}
    </>
  );
};

export default ContentsList;
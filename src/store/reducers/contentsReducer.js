const initialState = {
  contents: [],
  filters: {
    pricingOptions: {
      Paid: false,
      Free: false,
      'View Only': false,
    },
    keyword: '',
  },
};

const contentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CONTENTS':
      return { ...state, contents: action.payload };
    case 'FILTER_CONTENTS':
      return { ...state, filters: { ...state.filters, ...action.payload } };
    default:
      return state;
  }
};

export default contentsReducer;
export const setContents = (contents) => ({
  type: 'SET_CONTENTS',
  payload: contents,
});

export const filterContents = (filters) => ({
  type: 'FILTER_CONTENTS',
  payload: filters,
});

export const sortContents = (sortBy) => ({
  type: 'SORT_CONTENTS',
  payload: sortBy,
});
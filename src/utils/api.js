import axios from 'axios';

export const fetchContents = async () => {
  const response = await axios.get('https://closet-recruiting-api.azurewebsites.net/api/data');
  return response.data;
};

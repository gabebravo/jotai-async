import axios from 'axios';
import { atom } from 'jotai';

const fetchBreedData = async () => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');
    return await Object.keys(response.data.message).splice(0, 10);
  } catch (error) {
    throw new Error('error');
  }
};

export const fetchBreedsSelector = atom(async (get) => await fetchBreedData());

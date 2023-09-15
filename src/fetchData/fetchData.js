import axios from 'axios';

export const getImgs = async (q, page, per_page) => {
  const { data } = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '39023312-2f71f46960a1d00fee06a2093',
      q,
      page,
      per_page,
    },
  });
  // console.log(data.hits);
  return data;
};

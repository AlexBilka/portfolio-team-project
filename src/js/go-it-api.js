import axios from 'axios';

const BASE_URL = 'https://portfolio-js.b.goit.study/api-docs';

export async function getItems(email, message) {
  try {
    const res = await axios.get(BASE_URL, {
      params: {
        email,
        message,
      },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

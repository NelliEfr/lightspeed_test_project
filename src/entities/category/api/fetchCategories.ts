import axios from 'axios';

const storeId = '108362264';
const API_URL = `https://app.ecwid.com/api/v3/${storeId}/categories`;

export async function fetchCategories(token: string) {
  try {
    const res = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data.items;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

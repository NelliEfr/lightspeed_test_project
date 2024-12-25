import axios from 'axios';

const storeId = '108362264';
const API_URL = `https://app.ecwid.com/api/v3/${storeId}/products`;

export async function fetchAllProducts(token: string) {
  try {
    const res = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data.items;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export async function fetchCategoryProducts(token: string, categoryId: number) {
  try {
    const res = await axios.get(`${API_URL}?category=${categoryId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data.items;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export async function fetchProductDetails(token: string, productId: number) {
  try {
    const res = await axios.get(`${API_URL}/${productId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
}
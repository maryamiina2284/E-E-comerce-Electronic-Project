import axios from 'axios';

const fetchProducts = async () => {
  try {
    const response = await axios.get('https://api.example.com/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

const fetchProductDetails = async (id) => {
  try {
    const response = await axios.get(`https://api.example.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};

export { fetchProducts, fetchProductDetails };

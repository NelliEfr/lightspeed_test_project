import { defineStore } from "pinia";
import { ref } from "vue";
import { type Product } from "@/entities/product/model/types";
import { fetchProductDetails } from "@/entities/product/api/fetchProducts";

export const useProductDetailsStore = defineStore('productDetails', () => {
    const product = ref<Product | null>(null);
    const loading = ref(false);
    const error = ref<string | null>(null);

    const loadProductDetails = async (token: string, productId: number) => {
        loading.value = true;
        error.value = null; 
        try {
          const fetchedProduct = await fetchProductDetails(token, productId);
          product.value = fetchedProduct; 
        } catch (err) {
          console.error('Failed to load product details:', err);
          error.value = 'Failed to load product details';
          product.value = null; 
        } finally {
          loading.value = false; 
        }
      };
    
    const clearProductDetails = () => product.value = null;

    return {
      product,
      loading,
      error,
      loadProductDetails,
      clearProductDetails
    }
});
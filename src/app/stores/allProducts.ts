import { defineStore } from "pinia";
import { ref } from "vue";
import { type Product } from "@/entities/product/model/types";
import { fetchAllProducts } from "@/entities/product/api/fetchProducts";

export const useAllProductsStore = defineStore('allProducts', () => {
    const products = ref<Product[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);

    const loadProducts = async (token: string) => {
      loading.value = true;
      try {
        const fetchedProducts = await fetchAllProducts(token);
        products.value.splice(0, products.value.length, ...fetchedProducts);
      } catch (err) {
        error.value = 'Failed to load products';
      } finally {
        loading.value = false; 
      }
    };

    return {
      products,
      loading,
      error,
      loadProducts,
    }
});
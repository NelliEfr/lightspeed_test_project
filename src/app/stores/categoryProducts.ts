import { defineStore } from "pinia";
import { ref } from "vue";
import { type Product } from "@/entities/product/model/types";
import { fetchCategoryProducts } from "@/entities/product/api/fetchProducts";

export const useCategoryProductsStore = defineStore('categoryProducts', () => {
    const products = ref<Product[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);

    const loadCategoryProducts = async (token: string, categoryId: number) => {
        loading.value = true;
        try {
            const fetchedProducts = await fetchCategoryProducts(token, categoryId);
            products.value.splice(0, products.value.length, ...fetchedProducts);
        } catch (err) {
            error.value = 'Failed to load products';
        } finally {
            loading.value = false; 
        }
    };

    const clearCategoryProducts = () => products.value.length = 0;

    return {
      products,
      loading,
      error,
      loadCategoryProducts,
      clearCategoryProducts
    }
});
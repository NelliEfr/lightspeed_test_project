import { defineStore } from "pinia";
import { ref } from "vue";
import { type Category } from "@/entities/category/model/types";
import { fetchCategories } from "@/entities/category/api/fetchCategories";

export const useCategoriesStore = defineStore('categories', () => {
    const categories = ref<Category[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);

    const loadCategories = async (token: string) => {
      loading.value = true;
      try {
        const fetchedProducts = await fetchCategories(token);
        categories.value.splice(0, categories.value.length, ...fetchedProducts);
      } catch (err) {
        error.value = 'Failed to load products';
      } finally {
        loading.value = false; 
      }
    };

    return {
      categories,
      loading,
      error,
      loadCategories,
    }
});
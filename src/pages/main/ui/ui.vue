<script setup lang="ts">
import { onMounted } from 'vue';
import { Content } from '@/shared/content';
import { Products } from '@/widgets/products';
import { useAllProductsStore } from '@/app/stores/allProducts';
import { useCategoriesStore } from '@/app/stores/categories';
import { Categories } from '@/widgets/categories';
import token from '@/token';

const storeAllProducts = useAllProductsStore();
const storeCategories = useCategoriesStore();

onMounted(() => {
  storeAllProducts.loadProducts(token),
  storeCategories.loadCategories(token)
});

const productsData = {
  title: 'All products',
  items: storeAllProducts.products
};

const categoriesData = {
  title: 'All categories',
  items: storeCategories.categories
}

</script>

<template>
    <Content>
      <Categories :data="categoriesData" />
      <Products :data="productsData" />
    </Content>
</template>

<script lang="ts" setup>
import { type Product } from '@/entities/product/model/types';
import { Typography } from '@/shared/typograghy';
import { ProductCard } from '@/entities/product';

interface CardsProps {
    items: Product[];
}

const { items } = defineProps<CardsProps>();
</script>

<template>
    <div v-if="items.length" class="products-list__container">
        <ProductCard v-for="product in items" :key="product.id" :data="product" />
    </div>
    <Typography tagName="p" v-else>Products are loading...</Typography>
</template>

<style scoped>
.products-list__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
  column-gap: 30px;
}

@media screen and (max-width: 768px){
    .products-list__container {
      grid-template-columns: 1fr;
    }
}
</style>
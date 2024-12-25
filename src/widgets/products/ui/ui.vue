<script lang="ts" setup>
import { type Product } from '@/entities/product/model/types';
import { Typography } from '@/shared/typograghy';
import { ProductsList } from '@/features/products-list';

interface CardsProps {
  data: {
    title: string;
    items: Product[];
  }
}

const { data } = defineProps<CardsProps>();

</script>

<template>
    <section class="products-list">
        <Typography tagName="h2">{{ data.title }}</Typography>
        <ProductsList :items="data.items" />
    </section>
</template>

<style scoped>
.products-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 30px 0;
}
</style>
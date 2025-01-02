<script lang="ts" setup>
import { CartItem } from '@/entities/cart';
import type { CartProduct } from '@/entities/cart/model/types';

interface ItemsProps {
    items: CartProduct[];
}

const { items } = defineProps<ItemsProps>();
</script>

<template>
    <div>
        <CartItem v-for="product in items" :key="product.id" :data="product" />
    </div>
</template>
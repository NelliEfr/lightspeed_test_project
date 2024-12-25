<script lang="ts" setup>
import { CartItem } from '@/entities/cart';
import { Button } from '@/shared/button';
import { RouterLink } from 'vue-router';
import { type CartProduct } from '@/entities/cart/model/types';
import { Typography } from '@/shared/typograghy';
import { computed } from 'vue';
import { useModalStore } from '@/app/stores/modal';

interface ItemsProps {
  data: {
    items: CartProduct[];
  }
}

const storeModal = useModalStore();

const { data } = defineProps<ItemsProps>();

const totalPrice = computed(() => data.items.reduce((acc, el) => acc + (el.price * el.count), 0));
</script>

<template>
    <section>
        <Typography tagName="h2">Shopping cart</Typography>
        <div v-if="data.items.length" class="shopping-cart">
          <div>
            <CartItem v-for="product in data.items" :key="product.id" :data="product" />
          </div>
          <div class="shopping-cart__order">
            <Typography tagName="p" fontSize="l">Total: € {{ totalPrice.toFixed(2) }}</Typography>
            <Button color="dark" @click="storeModal.openModal">
              Place order
            </Button>
          </div>
        </div>

        <div v-else>
          <Typography tagName="p">Your shopping cart is empty...</Typography>
          <RouterLink to="/">
            <Button color="dark">Back to shopping</Button>
          </RouterLink>
        </div>
    </section>
</template>

<style scoped>
.shopping-cart {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;
}

.shopping-cart__order {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media screen and (max-width: 768px){
  .shopping-cart {
    grid-template-columns: 1fr;
  }
}
</style>
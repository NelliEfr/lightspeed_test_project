<script lang="ts" setup>
import { type CartProduct } from '../model/types';
import { Typography } from '@/shared/typograghy';
import { AkCross } from '@kalimahapps/vue-icons';
import { useShoppingCartStore } from '@/app/stores/shoppingCart';

const { data } = defineProps<{data: CartProduct}>();
const { id, thumbnailUrl, price, name } = data;

const storeShoppingCart = useShoppingCartStore();

const removeFromCart = () => storeShoppingCart.removeProduct(id);
const incrCount = () => storeShoppingCart.incrProductCount(id);
const decrCount = () => storeShoppingCart.decrProductCount(id);

</script>

<template>
    <article class="cart-item">
        <img :src="thumbnailUrl" :alt="name" class="cart-item__image">
        <div class="cart-item__info">
            <Typography tagName="p" bold>{{ name }}</Typography>
            <div class="cart-item__info2">
                <div class="cart-item__counter">
                    <div @click="decrCount">-</div>
                    <Typography tagName="span">{{ data.count }}</Typography>
                    <div @click="incrCount">+</div>
                </div>
                <Typography tagName="p">€ {{ (price * data.count).toFixed(2) }}</Typography>
            </div>  
        </div>
        <AkCross @click="removeFromCart" class="cart-item__close" />
    </article>
</template>

<style scoped>
.cart-item {
    display: flex;
    align-items: center;
    padding: 20px;
    position: relative;
    gap: 30px;
}

.cart-item__image {
    width: 100px;
    object-fit: contain;
}

.cart-item__info {
    display: flex;
    flex-direction: column;
    gap: 30px;
    min-width: 400px;
}

.cart-item__info2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.cart-item__counter {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    border: 1px solid var(--main-on-surface);
    border-radius: 10px;
    padding: 10px;
    min-width: 80px;
}

.cart-item__counter > div {
    cursor: pointer;
}

.cart-item__close {
    position: absolute;
    top: 15px;
    right: 20px;
    cursor: pointer;
}

@media screen and (max-width: 768px){
  .cart-item__info {
    min-width: 300px;
  }
}
</style>
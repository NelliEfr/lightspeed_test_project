<script setup lang="ts">
import { Content } from '@/shared/content';
import { ShoppingCartList } from '@/widgets/shopping-cart';
import { useShoppingCartStore } from '@/app/stores/shoppingCart';
import { useModalStore } from '@/app/stores/modal';
import { ModalWindow } from '@/shared/modal';
import { computed } from 'vue';

const storeShoppingCart = useShoppingCartStore();
const storeModal = useModalStore();
const isModalOpen = computed(() => storeModal.isModalOpen);

</script>

<template>
  <Content>
    <ModalWindow :data="{ content: 'Thank you for your order!', isModalOpen, closeAction: storeShoppingCart.clearCart }" />
    <ShoppingCartList :data="{items: storeShoppingCart.cartProducts}" />
  </Content>
</template>

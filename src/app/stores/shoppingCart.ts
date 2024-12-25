import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { type Product } from "@/entities/product/model/types";
import { type CartProduct } from "@/entities/cart/model/types";

export const useShoppingCartStore = defineStore("shoppingCart", () => {
  const cartProducts = ref<CartProduct[]>([]);

  const addProduct = (product: Product) => {
    const existingProduct = cartProducts.value.find(el => el.id === product.id);
    if (!existingProduct) {
      cartProducts.value.push({ ...product, count: 1 });
    } else {
      console.warn("Product is already in the cart");
    }
  };

  const removeProduct = (productId: number) => {
    cartProducts.value = cartProducts.value.filter(el => el.id !== productId);
  };

  const incrProductCount = (productId: number) => {
    const product = cartProducts.value.find(el => el.id === productId);
    if (product) {
      product.count += 1;
    }
  };

  const decrProductCount = (productId: number) => {
    const productIndex = cartProducts.value.findIndex(el => el.id === productId);
    if (productIndex !== -1) {
      const product = cartProducts.value[productIndex];
      if (product.count > 1) {
        product.count -= 1;
      } else {
        cartProducts.value.splice(productIndex, 1); 
      }
    }
  };

  const clearCart = () => cartProducts.value.length = 0;

  const computedCartProducts = computed(() => cartProducts.value);

  return {
    cartProducts,
    addProduct,
    removeProduct,
    incrProductCount,
    decrProductCount,
    clearCart,
    computedCartProducts
  };
});

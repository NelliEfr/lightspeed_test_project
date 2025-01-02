import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { type Product } from "@/entities/product/model/types";
import { type CartProduct } from "@/entities/cart/model/types";

const LOCAL_STORAGE_KEY = "shoppingCart";

export const useShoppingCartStore = defineStore("shoppingCart", () => {
  const cartProducts = ref<CartProduct[]>([]);

  const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedCart) {
      try {
        cartProducts.value = JSON.parse(savedCart);
      } catch (e) {
        console.error("Failed to parse cart data from localStorage", e);
      }
    }
  };

  loadCartFromLocalStorage();

  const saveCartToLocalStorage = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartProducts.value));
  };

  watch(
    cartProducts,
    () => {
      saveCartToLocalStorage();
    },
    { deep: true }
  );

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

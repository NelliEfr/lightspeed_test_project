import { MainPage } from '@/pages/main';
import { ShoppingCartPage } from '@/pages/shopping-cart';
import { ProductDetailsPage } from '@/pages/product-details';
import { CategoryProductsPage } from '@/pages/category-products';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage,
    },
    {
      path: '/product/:product_name',
      name: 'productDetails',
      component: ProductDetailsPage,
    },
    {
      path: '/products/:category_name',
      name: 'categoryProducts',
      component: CategoryProductsPage,
    },
    {
      path: '/cart',
      name: 'cart',
      component: ShoppingCartPage,
    },
  ],
})

export default router

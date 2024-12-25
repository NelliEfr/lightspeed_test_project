<script lang="ts" setup>
    import { type Category } from '@/entities/category/model/types';
    import { Typography } from '@/shared/typograghy';
    import { CategoryCard } from '@/entities/category';

    interface CardsProps {
        items: Category[]
    }

    const { items } = defineProps<CardsProps>();

</script>

<template>
     <div v-if="items.length" class="categories-list__container">
        <CategoryCard v-for="category in items" :key="category.id" :data="category" />
    </div>
    <Typography tagName="p" v-else>Categories are loading...</Typography>
</template>

<style scoped>
.categories-list__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
}

@media screen and (max-width: 768px){
    .categories-list__container {
        grid-template-columns: 1fr;
        gap: 20px;
    }
}
</style>
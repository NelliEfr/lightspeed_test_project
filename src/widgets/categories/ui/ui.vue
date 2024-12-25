<script lang="ts" setup>
import { type Category } from '@/entities/category/model/types';
import { Typography } from '@/shared/typograghy';
import { CategoriesList } from '@/features/categories-list';

interface CardsProps {
    data: {
        title: string,
        items: Category[]
    }
}

const { data } = defineProps<CardsProps>();

</script>

<template>
    <section class="categories-list">
        <Typography tagName="h2" bold>{{ data.title }}</Typography>
        <CategoriesList :items="data.items" />
    </section>
</template>

<style scoped>
.categories-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px 0;
}
</style>
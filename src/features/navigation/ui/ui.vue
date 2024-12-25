<script lang="ts" setup>

import { RouterLink } from 'vue-router';
import { Typography } from '@/shared/typograghy';
import type { Component } from "vue";

interface Props {
    data: {
        label: string;
        link: string;
        fontSize: 'xs' | 's' | 'm' | 'l' | 'xl';
        icon?: Component;
        count?: number;
    }[]
}
const { data } = defineProps<Props>()
</script>

<template>
    <nav class="header-navigation">
        <ul>
            <li v-for="item in data" :key="item.label">
                <RouterLink :to="item.link" class="item">
                    <component v-if="item.icon" :is="item.icon" class="item__icon" />
                    <span v-if="item.count !== undefined" class="item__count">{{ item.count }}</span>
                    <Typography tagName="span" :fontSize="item.fontSize">{{ item.label }}</Typography>
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
/* .header-navigation {
    border-bottom: 2px solid var(--grayscale-hardest);
    padding: 10px 0;
} */

.header-navigation > ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 24px;
}

.item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 8px;
  text-decoration: none;
  color: var(--main-on-surface);
}

.item__icon {
    font-size: 25px;
}

.item__count {
  position: absolute;
  top: -6px;
  right: 0;
  padding: 2px 4px;
  font-size: 12px;
  color: var(--main-on-primary);
  background-color: var(--main-primary);
  border-radius: 4px;
}
</style>
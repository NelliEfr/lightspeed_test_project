<script lang="ts" setup>

import { Typography } from '@/shared/typograghy';

interface Props {
  color?: 'primary' | 'secondary' | 'grayscale' | 'dark' | 'error';
  decoration?: 'default' | 'outline' | 'none';
  size?: 'L' | 'M' | 'S';
  disabled?: boolean;
}

const props = defineProps<Props>();
const {
  color = 'primary',
  decoration = 'default',
  size = 'M',
  disabled = false,
} = props;

</script>

<template>
    <button 
        :disabled="disabled"
        :class="['button', `size_${size}`, `decoration_${decoration}`, `color_${color}`]"
    >
        <Typography class="button__text" tagName="p" size="s">
            <slot></slot>
        </Typography>
    </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button__text {
  width: 100%;
  text-align: center;
}

.button.size_M {
  grid-gap: 8px;
  padding: 8px;
}

.button.color_secondary {
  background-color: var(--main-secondary);
  color: var(--main-on-secondary);
}

.button.color_dark {
  background-color: var(--main-dark);
  color: var(--main-on-dark);
}

</style>
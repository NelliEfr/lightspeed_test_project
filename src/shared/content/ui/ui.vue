<script lang="ts" setup>
import { Wrapper } from '@/shared/wrapper';
</script>

<template>
    <main class="main">
        <Wrapper>
          <slot></slot>
        </Wrapper>
    </main>
</template>

<style scoped>
.main {
  min-height: calc(100vh - 79px);
  padding: 30px 0;
}

@media screen and (max-width: 767px) {
  .main {
    min-height: calc(100vh - 73px);
  }
}
</style>
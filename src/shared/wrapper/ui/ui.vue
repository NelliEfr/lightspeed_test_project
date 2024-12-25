<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>

<style scoped>
.wrapper {
    max-width: 1208px;
    margin: 0 auto;
}

@media screen and (max-width: 768px){
    .wrapper {
        max-width: 480px;
    }
}
</style>
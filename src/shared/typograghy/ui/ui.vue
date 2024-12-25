<script lang="ts" setup>

interface Props {
    tagName: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
    bold?: boolean;
    fontSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
}

const props = defineProps<Props>();

</script>

<template>
    <component 
        :is="props.tagName"  
        :class="['typography', fontSize && `font_size_${fontSize}`, `tag_name_${tagName}`, bold && 'bold']"
    >
        <slot></slot>
    </component>
</template>

<style scoped>
.typography {
    line-height: 150%;
    font-style: normal;
}

.bold {
    font-weight: 700;
}

.font_size_xs { font-size: 12px; }
.font_size_s { font-size: 16px; }
.font_size_m { font-size: 18px; }
.font_size_l { font-size: 20px; }
.font_size_xl { font-size: 36px; }

.tag_name_h1 { font-size: 64px; }
.tag_name_h2 { font-size: 48px; }
.tag_name_h3 { font-size: 36px; }
.tag_name_h4 { font-size: 24px; }
.tag_name_h5 { font-size: 18px; }

@media screen and (max-width: 768px){
    .font_size_xs { font-size: 8px; }
    .font_size_s { font-size: 12px; }
    .font_size_m { font-size: 14px; }
    .font_size_l { font-size: 18px; }
    .font_size_xl { font-size: 32px; }

    .tag_name_h1 { font-size: 48px; }
    .tag_name_h2 { font-size: 36px; }
    .tag_name_h3 { font-size: 24px; }
    .tag_name_h4 { font-size: 20px; }
    .tag_name_h5 { font-size: 16px; }
}

</style>
<script lang="ts" setup>
import { useModalStore } from '@/app/stores/modal';
import { Typography } from '@/shared/typograghy';
import { AkCross } from '@kalimahapps/vue-icons';

interface Props {
    data: {
        content: string,
        isModalOpen: boolean,
        closeAction?: () => number
    }
}

const props = defineProps<Props>();
const storeModal = useModalStore();

const closeModalWindow = () => {
    storeModal.closeModal();
    props.data.closeAction && props.data.closeAction();
}

</script>

<template>
    <div class="modal" v-if="props.data.isModalOpen">
        <div class="modal-content">
            <Typography tagName="p">
                {{ props.data.content }}
            </Typography>
            <AkCross class="modal-content__cross" @click="closeModalWindow" />
        </div>
    </div>
</template>

<style>
.modal {
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.modal-content {
    position: relative;
    background-color: var(--main-background);
    border-radius: 10px;
    padding: 50px;
    max-width: 500px;
    text-align: center;
}

.modal-content__cross {
    position: absolute;
    top: 15px;
    right: 20px;
    cursor: pointer;
    font-size: 20px;
    color: var(--main-on-surface);
}

.modal-content__cross:hover {
    color: var(--main-primary);
}
</style>
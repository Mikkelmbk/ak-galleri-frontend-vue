<script setup>
import Product from "./Product.vue";
import { useModalStore } from "../stores/modal";
import { storeToRefs } from "pinia";

const modalStore = useModalStore();

const { showModal } = modalStore;

const { modalTitle, modalImg } = storeToRefs(modalStore);

</script>

<template>
    <div @click="showModal(false)" class="c-modal">
        <Product :modalClass="`c-product--modal`" :title="modalTitle" :image="modalImg"/>
    </div>
</template>

<style scoped>
.c-modal{
    position:fixed;
    inset:0;
    top:calc(var(--primary-mobile-navigation-height) + var(--primary-mobile-header-height));
    background-color: rgba(0, 0, 0, 0.8);
    display:flex;
    justify-content:center;
    align-items:center;
}

@media(min-width:768px){
    .c-modal{
        top: var(--primary-desktop-header-height);
    }
}
</style>
<script setup>
// Component import
import Product from "./Product.vue";
// Composable import
import { useFetchProducts } from "../composables/useFetchProducts"
// Pinia import
import { useModalStore } from "../stores/modal";

const { productFetchUrl, start, end } = defineProps(['productFetchUrl' ,'start','end']);

// modalStore
const modalStore = useModalStore();
const { showModal } = modalStore;

const { products } = useFetchProducts(productFetchUrl,start,end);
</script>

<template>
    <Product v-for="product in products" @click="showModal(true,product.title,product.thumbnailUrl)" :modalClass="``" :key="product.id" :title="product.title" :image="product.thumbnailUrl" />
</template>

<style scoped></style>
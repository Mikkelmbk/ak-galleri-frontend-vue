<script setup>
import Product from "./Product.vue";
import { useFetchProducts } from "../composables/useFetchProducts"
import { useModalStore } from "../stores/modal";

const modalStore = useModalStore();

const { showModal } = modalStore;

const { productFetchUrl, start, end } = defineProps(['productFetchUrl' ,'start','end']);

const { products, error, loading } = useFetchProducts(productFetchUrl,start,end);

</script>

<template>
    <Product v-for="product in products" @click="showModal(true,product.title,product.thumbnailUrl)" :key="product.id" :title="product.title" :image="product.thumbnailUrl" />
</template>

<style scoped></style>
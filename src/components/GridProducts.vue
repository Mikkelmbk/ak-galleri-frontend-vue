<script setup>
import Product from "./Product.vue";
import { useFetchProducts } from "../composables/useFetchProducts"

const { productFetchUrl, start, end } = defineProps(['productFetchUrl' ,'start','end']);

const { products, error, loading } = useFetchProducts(productFetchUrl,start,end);

</script>

<template>
    <Product v-for="product in products" :key="product.id" :title="product.title" :image="product.thumbnailUrl" />
</template>

<style scoped></style>
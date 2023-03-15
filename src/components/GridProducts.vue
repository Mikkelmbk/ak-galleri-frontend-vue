<script setup>
// import { ref } from "vue";
import Product from "./Product.vue";
// import { defineProps } from "vue";
import { useFetch } from "../composables/useFetch"

const { currentPath } = defineProps(['currentPath']);

const { products, error, loading } = useFetch("https://jsonplaceholder.typicode.com/photos", { currentPath, swiper:false });

</script>

<template>
    <Product v-for="product in products" :title="product.title" :image="product.thumbnailUrl" />
</template>

<style scoped></style>
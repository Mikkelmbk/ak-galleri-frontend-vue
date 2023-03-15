<script setup>
// import { ref } from "vue";
import Product from "./Product.vue";
// import { defineProps } from "vue";
import { useFetchProducts } from "../composables/useFetchProducts"

const { currentPath } = defineProps(['currentPath']);

const { products, error, loading } = useFetchProducts("https://jsonplaceholder.typicode.com/photos", { currentPath });

</script>

<template>
    <Product v-for="product in products" :title="product.title" :image="product.thumbnailUrl" />
</template>

<style scoped></style>
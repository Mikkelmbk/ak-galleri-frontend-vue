<script setup>
// import { ref } from "vue";
import Product from "./Product.vue";
import { useProductsStore } from "../stores/products";
import { storeToRefs } from "pinia";
import { defineProps } from "vue";

const { currentPath } = defineProps(['currentPath']);
const productsStore = useProductsStore();
const { productData } = storeToRefs(productsStore);

// const products = ref("");
// async function getProductData() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/photos");
//     const finalRes = await res.json();
//     products.value = finalRes
// }
// getProductData();
let products = [];

switch(currentPath){
    case "/originals":
        products = productData.value.originals.products;
        break;
    case "/frames":
        products = productData.value.frames.products;
        break;
    case "/guests":
        products = productData.value.guests.products;
        break;
}
</script>

<template>
    <Product v-for="product in products" :title="product.title" :image="product.thumbnailUrl" />
</template>

<style scoped></style>
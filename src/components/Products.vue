<script setup>
import { ref } from "vue";
import Product from "./Product.vue";
import { useRouter } from "vue-router";
import localDummyData from "../data/localDummyData.json";

const products = ref(localDummyData);

const router = useRouter();
const currentPath = router.currentRoute.value.path;
// const productSlice = {
//     start: null,
//     end: null
// }

// switch (currentPath) {
//     case "/originals":
//         productSlice.start = 0;
//         productSlice.end = 20;
//         break;
//     case "/guests":
//         productSlice.start = 20;
//         productSlice.end = 40;
//         break;
//     case "/frames":
//         productSlice.start = 40;
//         productSlice.end = 60;
//         break;
//     case "/":
//         productSlice.start = 60;
//         productSlice.end = 80;
//         break;
// }

// const products = ref("");
// async function getProductData() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/photos");
//     const finalRes = await res.json();
//     products.value = finalRes.slice(productSlice.start, productSlice.end);
// }
// getProductData();
</script>

<template>
    <Product v-for="product in products" :title="product.title" :image="product.thumbnailUrl" />
</template>

<style scoped></style>
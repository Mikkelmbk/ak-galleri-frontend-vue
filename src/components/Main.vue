<script setup>
import { ref } from "vue";
import GridProducts from "./GridProducts.vue"
import SwiperProducts from "./SwiperProducts.vue"
import { useProductsStore } from "../stores/products"
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router"
const router = useRouter();
const currentPath = ref(router.currentRoute.value.path);

const productsStore = useProductsStore();

const { productFetchConfig } = storeToRefs(productsStore);

const { updateFetchConfig } = productsStore;

updateFetchConfig(currentPath.value);

function loadGridProducts() {
    return currentPath.value == "/" || currentPath.value == "/contact" ? false : true;
}

function loadSwiperProducts() {
    return currentPath.value == "/search" || currentPath.value == "/contact" ? false : true;
}

</script>

<template>
    <main class="c-main h-nav-spacing">

        <div v-if="loadSwiperProducts()" class="js-swiper-anchor">
            <SwiperProducts v-for="config in productFetchConfig" :productFetchUrl="config.productFetchUrl" :start="config.start" :end="config.end" :swiperTitle="config.swiperTitle" />
        </div>
        <div v-if="loadGridProducts()" class="l-grid js-product-anchor">
            <GridProducts v-for="config in productFetchConfig" :productFetchUrl="config.productFetchUrl" :start="config.start" :end="config.end"/>
        </div>
    </main>
</template>

<style scoped></style>
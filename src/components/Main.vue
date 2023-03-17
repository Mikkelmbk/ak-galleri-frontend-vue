<script setup>
import GridProducts from "./GridProducts.vue";
import SwiperProducts from "./SwiperProducts.vue";
import { useFetchConfigStore } from "../stores/fetchConfig";
import { storeToRefs } from "pinia";
import { defineProps } from "vue";

const { currentPath } = defineProps(['currentPath']);

const fetchConfigStore = useFetchConfigStore();
const { productFetchConfig } = storeToRefs(fetchConfigStore);
const { updateFetchConfig } = fetchConfigStore;
updateFetchConfig(currentPath);

function loadGridProducts() {
    return currentPath == "/" || currentPath == "/contact" ? false : true;
}

function loadSwiperProducts() {
    return currentPath == "/search" || currentPath == "/contact" ? false : true;
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
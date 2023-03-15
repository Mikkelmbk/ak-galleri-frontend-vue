<script setup>
import { ref } from "vue";
import GridProducts from "./GridProducts.vue"
import SwiperProducts from "./SwiperProducts.vue"
import { useRouter } from "vue-router"

const router = useRouter();
const currentPath = ref(router.currentRoute.value.path);

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
            <SwiperProducts :currentPath="currentPath" />
        </div>

        <div v-if="loadGridProducts()" class="l-grid js-product-anchor">
            <GridProducts :currentPath="currentPath"/>
        </div>
    </main>
</template>

<style scoped></style>
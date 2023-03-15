<script setup>
import Product from "./Product.vue";
import { useFetchProducts } from "../composables/useFetchProducts"

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';

const { productFetchUrl, start, end, swiperTitle } = defineProps(['productFetchUrl' ,'start','end','swiperTitle']);

const { products, error, loading } = useFetchProducts(productFetchUrl,start,end);

</script>

<template>
    <div class="c-swiper">
        <h1 class="c-swiper__heading">{{ swiperTitle }}</h1>
        <Swiper :modules="[Pagination, Autoplay]" :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }" :speed="800" :space-between="20" :loop="true" :pagination="{ clickable: true }" :breakpoints="{
    457: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    667: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    962: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
    1237: {
        slidesPerView: 4,
        spaceBetween: 20,
    },
    1511: {
        slidesPerView: 5,
        spaceBetween: 20,
    },
    1770: {
        slidesPerView: 6,
        spaceBetween: 20,
    },
}" class="c-swiper__init">
            <SwiperSlide v-for="product in products" :key="product.id" class="c-swiper__slide">
                <Product :title="product.title" :image="product.thumbnailUrl" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style scoped>
.c-swiper__init {
    overflow: hidden;
    position: relative;
    padding-bottom: 30px;
    padding-top: 10px;
}

.c-swiper {
    width: calc(100% - 40px);
    margin: 20px auto !important;
    position: relative;
    z-index: 0;
}

.c-swiper__pagination {
    bottom: 0px !important;
    transform: scale(1.5);
}

.c-swiper__slide {
    height: auto !important;
}

.c-swiper__heading {
    color: var(--primary-theme-transparent-text);
    text-align: center;
}

@media(min-width:768px) {
    .c-swiper__heading {
        text-align: left;
    }

}
</style>
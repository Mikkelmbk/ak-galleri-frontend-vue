<script setup>
const { title, image, modalClass } = defineProps(['title', 'image', 'modalClass']);

</script>

<template>
    <div :class="`c-product js-product ${modalClass}`">
        <figure class="c-product__figure">
            <img :src="image" :alt="title" class="c-product__image">
            <figcaption class="c-product__figcaption">{{ title }}</figcaption>
        </figure>
        <section class="c-product__content"></section>
    </div>
</template>

<style scoped>
.c-product {
    background-color: var(--primary-theme-light-grey);
    padding: 10px;
    transition: all .3s ease;
    height: 100%;
}

.c-product:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.75);
    cursor: pointer;
}

.c-product__figure {
    text-align: center;
}

.c-product__image {
    width: 100%;
    display: block;
}

.c-product__figcaption {
    color: var(--primary-theme-transparent-text);
    padding: 15px 0;
    font-weight: bold;
}

.c-product--modal {
    height: auto;
    width: 80%;
    max-width: 450px;
}

.c-product--modal:hover {
    transform: unset;
    box-shadow: unset;
    cursor: unset;
}

@media(min-width:768px) {
    .c-product--modal {
        max-width: 525px;
    }
}
</style>
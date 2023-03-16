<script setup>
import Product from "./Product.vue";
</script>

<template>
    <div class="c-modal">
        <Product :modalClass="`c-product--modal`" :title="`Some title`" :image="`https://via.placeholder.com/600/92c952`"/>
    </div>
</template>

<style scoped>
.c-modal{
    position:fixed;
    inset:0;
    top:calc(var(--primary-mobile-navigation-height) + var(--primary-mobile-header-height));
    background-color: rgba(0, 0, 0, 0.8);
    display:flex;
    justify-content:center;
    align-items:center;
}

@media(min-width:768px){
    .c-modal{
        top: var(--primary-desktop-header-height);
    }
}
</style>
<script setup>
import SearchForm from "./SearchForm.vue"
</script>

<template>
    <header class="c-header">
        <SearchForm/>
    </header>
</template>

<style scoped>
.c-header {
    height: var(--primary-mobile-header-height);
    background-color: var(--primary-theme-light-grey);
    position: sticky;
    top: 0;
    left: 0;
    box-shadow: 0px 2px 3px rgb(0 0 0 / 20%);
    z-index: 1;
}
@media(min-width:768px) {
    .c-header {
        height: var(--primary-desktop-header-height);
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
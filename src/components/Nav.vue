<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="c-nav">
        <ul class="c-nav__ul js-page-switcher l-flex l-flex--reverse">
            <li class="c-nav__li">
                <RouterLink active-class="c-nav__a--active" class="c-nav__a" to="/">Hjem</RouterLink>
            </li>
            <li class="c-nav__li">
                <RouterLink active-class="c-nav__a--active" class="c-nav__a" to="/originals">Originaler</RouterLink>
            </li>
            <li class="c-nav__li">
                <RouterLink active-class="c-nav__a--active" class="c-nav__a" to="/guests">Gæster</RouterLink>
            </li>
            <li class="c-nav__li">
                <RouterLink active-class="c-nav__a--active" class="c-nav__a" to="/frames">Rammer</RouterLink>
            </li>
            <li class="c-nav__li">
                <RouterLink active-class="c-nav__a--active" class="c-nav__a" to="/contact">Kontakt</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.c-nav {
    background-color: var(--primary-theme-light-grey);
    position: fixed;
    right: 0;
    left: 0;
    top: var(--primary-mobile-header-height);
    z-index: 2;
}

.c-nav__ul {
    display: flex;
    justify-content: space-evenly;
}

.c-nav__li {
    flex-basis: 20%;
    text-align: center;
}

.c-nav__a {
    color: var(--primary-theme-transparent-text);
    padding: calc((var(--primary-mobile-navigation-height) - 18px) / 2) 0;
    /* 18 is the height of the text. */
    display: block;
    transition: background-color .2s ease;
}

.c-nav__a:hover {
    background-color: var(--primary-theme-dark-grey);
}

.c-nav__a--active {
    color: var(--primary-theme-text) !important;
    background-color: var(--primary-theme-light-blue) !important;
}

@media(min-width:768px) {
    .c-nav {
        left: unset;
        right: unset;
        bottom: 0;
        top: var(--primary-desktop-header-height);
        width: var(--primary-desktop-navigation-width);
    }
}
</style>
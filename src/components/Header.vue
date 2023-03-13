<script setup>

</script>

<template>
    <header class="c-header">
        <form class="c-header__form">
            <input type="search" name="query" class="c-header__input" placeholder="Søg" />
        </form>
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

.c-header__form {
    height: 100%;
    position: relative;
}

/*.c-header__form::before{
    position:absolute;
    content: "\002315";
    transform:scale(1.7) translateY(50%);
    color:var(--primary-theme-transparent-text);
    top:8px;
    left:10px;
    z-index:1;
}*/

.c-header__input {
    width: 100%;
    height: 100%;
    outline: none;
    background-color: var(--primary-theme-dark-grey);
    border: none;
    color: var(--primary-theme-text);
    padding-left: 35px;
}

.c-header__input::placeholder {
    color: var(--primary-theme-transparent-text);
}

@media(min-width:768px) {
    .c-header {
        height: var(--primary-desktop-header-height);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .c-header__form {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        height: 45%;
    }

    .c-header__input {
        /* height:25px; */
        border-radius: 8px;
    }
}
</style>
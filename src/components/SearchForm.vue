<script setup>
import { useSearchQueryStore } from "../stores/searchQuery";
import { ref } from "vue";

const q = ref("");

// searchQueryStore
const searchQueryStore = useSearchQueryStore();
const { updateQuery } = searchQueryStore;

function search(){
    updateQuery(q.value);
}
</script>

<template>
    <form @submit.prevent="search()" class="c-search">
        <input v-model="q" type="search" name="query" class="c-search__input" placeholder="Søg" />
    </form>
</template>

<style scoped>
.c-search {
    height: 100%;
    position: relative;
}

.c-search__input {
    width: 100%;
    height: 100%;
    outline: none;
    background-color: var(--primary-theme-dark-grey);
    border: none;
    color: var(--primary-theme-text);
    padding-left: 35px;
}

.c-search__input::placeholder {
    color: var(--primary-theme-transparent-text);
}

@media(min-width:768px) {
    .c-search {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        height: 45%;
    }

    .c-search__input {
        /* height:25px; */
        border-radius: 8px;
    }
}
</style>
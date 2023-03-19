<script setup>
// Component import
import Nav from "./Nav.vue";
import Main from "./Main.vue";
import Modal from "./Modal.vue";
// Vue import
import { useRouter } from "vue-router"
import { ref } from "vue";
// Pinia import
import { storeToRefs } from "pinia";
import { useModalStore } from "../stores/modal";
import { useSearchQueryStore } from "../stores/searchQuery";
const router = useRouter();
const currentPath = ref(router.currentRoute.value.path);

// modalStore
const modalStore = useModalStore();
const { displayModal } = storeToRefs(modalStore);

// searchQueryStore
const searchQueryStore = useSearchQueryStore();
const { query } = storeToRefs(searchQueryStore);

displayModal.value = false;
function loadModal() {
    return currentPath.value == "/contact" ? false : true;
}
</script>

<template>
    <div class="c-wrapper l-flex">
        <Nav/>
        <!-- by adding :key here and having it listen for query (query is defined in searchQuery.js pinia store), we can update the rerender the Main.vue everytime the search query changes, effectively rerendering the product view at every search term. The SearchForm.vue component is responsible for routing us to the /search route. -->
        <Main :currentPath="currentPath" :key="query"/>
    </div>
    <Modal v-show="displayModal" v-if="loadModal()"/>
</template>

<style scoped>
</style>

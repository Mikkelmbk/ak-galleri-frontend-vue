<script setup>
import Nav from "./Nav.vue";
import Main from "./Main.vue";
import Modal from "./Modal.vue";
import { useRouter } from "vue-router"
import { ref } from "vue";
import { useModalStore } from "../stores/modal";
import { storeToRefs } from "pinia";
const router = useRouter();
const currentPath = ref(router.currentRoute.value.path);

const modalStore = useModalStore();

const { displayModal } = storeToRefs(modalStore);

displayModal.value = false;
function loadModal() {
    return currentPath.value == "/contact" ? false : true;
}
</script>

<template>
    <div class="c-wrapper l-flex">
        <Nav/>
        <Main :currentPath="currentPath"/>
    </div>
    <Modal v-show="displayModal" v-if="loadModal()"/>
</template>

<style scoped>
</style>

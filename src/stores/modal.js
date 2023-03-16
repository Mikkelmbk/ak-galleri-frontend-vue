import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalStore = defineStore("modal", () => {
    const displayModal = ref(false);
    const modalTitle = ref("");
    const modalImg = ref("");

    function showModal(show){
        displayModal.value = show;
    }
    return { displayModal, modalTitle, modalImg, showModal }
});
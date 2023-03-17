import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalStore = defineStore("modal", () => {
    const displayModal = ref(false);
    const modalTitle = ref("");
    const modalImg = ref("");

    function showModal(show, title, image){
        displayModal.value = show;
        modalTitle.value = title;
        modalImg.value = image;
    }
    return { displayModal, modalTitle, modalImg, showModal }
});
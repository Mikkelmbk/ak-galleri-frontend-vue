import { defineStore } from 'pinia';
import { ref, computed } from 'vue'
import localDummyData from "../data/localDummyData.json";

export const useProductsStore = defineStore("products",{
    state: () => ({
        products: ref(localDummyData),
        productData:ref({
            guests:{
                products: localDummyData,
                sliderTitle: "Nye Gæster"
            },
            originals: {
                products: ref(localDummyData),
                sliderTitle: "Nye Originaler"
            },
            frames: {
                products: ref(localDummyData),
                sliderTitle: "Nye Rammer"
            }
        })
    }),
})
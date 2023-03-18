import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFetchConfigStore = defineStore("products", () => {
    const productFetchConfig = ref([]);
    const updateFetchConfig = (currentPath, query) => {
        productFetchConfig.value = [];
        switch (currentPath) {
            case "/originals":
                productFetchConfig.value.push(
                    {
                        productFetchUrl: "https://jsonplaceholder.typicode.com/photos",
                        start: 0,
                        end: 20,
                        swiperTitle: "Nye Originaler"
                    }
                )
                break;
            case "/frames":
                productFetchConfig.value.push(
                    {
                        productFetchUrl: "https://jsonplaceholder.typicode.com/photos",
                        start: 20,
                        end: 40,
                        swiperTitle: "Nye Rammer"
                    }
                )
                break;
            case "/guests":
                productFetchConfig.value.push(
                    {
                        productFetchUrl: "https://jsonplaceholder.typicode.com/photos",
                        start: 40,
                        end: 60,
                        swiperTitle: "Nye Gæster"
                    }
                )
                break;
            case "/search":
                productFetchConfig.value.push(
                    {
                        productFetchUrl: `https://jsonplaceholder.typicode.com/photos/${query}`,
                        start: 0,
                        end: 1000,
                        swiperTitle: ""
                    }
                )
                break;
            case "/":
                productFetchConfig.value.push(
                    {
                        productFetchUrl: "https://jsonplaceholder.typicode.com/photos",
                        start: 20,
                        end: 40,
                        swiperTitle: "Nye Originaler"
                    },
                    {
                        productFetchUrl: "https://jsonplaceholder.typicode.com/photos",
                        start: 40,
                        end: 60,
                        swiperTitle: "Nye Rammer"
                    },
                    {
                        productFetchUrl: "https://jsonplaceholder.typicode.com/photos",
                        start: 60,
                        end: 80,
                        swiperTitle: "Nye Gæster"
                    },

                )
                break;
        }
    }
    return { productFetchConfig, updateFetchConfig }
})
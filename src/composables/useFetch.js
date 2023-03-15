import { ref } from "vue";

export const useFetch = (url,config) => {
    const products = ref(null);
    const response = ref(null);
    const error = ref(null);
    const loading = ref(false);
    const swiperTitle = ref("");
    const currentPath = ref(config.currentPath);
    const productSlices = ref({
        start:null,
        end:null,
    });

    switch (currentPath) {
        case "/originals":
            productSlices.start = 0;
            productSlices.end = 20;
            swiperTitle.value = "Nye Originaler";
            break;
        case "/frames":
            productSlices.start = 20;
            productSlices.end = 40;
            swiperTitle.value = "Nye Rammer";
            break;
        case "/guests":
            productSlices.start = 40;
            productSlices.end = 60;
            swiperTitle.value = "Nye Gæster";
            break;
        case "/":
            productSlices.start = 60;
            productSlices.end = 80;
            break;
    }

    const fetchProducts = async () => {
        loading.value = true;
        try {
            const res = await fetch(url);
            const result = await res.json();
            response.value = result;
            products.value = result.slice(productSlices.start, productSlices.end);
        } catch (err) {
            error.value = err;
        }
        finally{
            loading.value = false;
        }
    }

    fetchProducts();
    return { response, error, products, loading, swiperTitle, fetchProducts }
}
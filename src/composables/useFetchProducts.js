import { ref } from "vue";

export const useFetchProducts = (url, start, end) => {
    const products = ref(null);
    const response = ref(null);
    const error = ref(null);
    const loading = ref(false);

    const fetchProducts = async () => {
        if (!loading.value) {
            loading.value = true;
            try {
                const res = await fetch(url);
                const result = await res.json();
                response.value = result;
                products.value = result.slice(start, end);
            } catch (err) {
                error.value = err;
            }
            finally {
                loading.value = false;
            }
        }
    }

    fetchProducts();
    return { response, error, products, loading, fetchProducts }
}
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
                response.value = result; // "response" would contain a broader scope of response information than "products", but because the broadest scope of data from this request, is the product data, response is not really necessary here. I am keeping it for the sake of example.
                if(Array.isArray(result) && result.length > 0) {
                    products.value = result.slice(start, end);
                }
                else if(typeof result === 'object' && Object.keys(result).length > 0){
                    products.value = [result];
                }
            } catch (err) {
                error.value = err;
            }
            finally {
                loading.value = false;
            }
        }
    };

    fetchProducts();
    return { response, error, products, loading, fetchProducts };
};
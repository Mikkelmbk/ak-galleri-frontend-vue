import { defineStore } from 'pinia';
import { ref} from 'vue';
import { useRouter } from "vue-router";


export const useSearchQueryStore = defineStore("searchQuery", () => {
    const router = useRouter();
    const query = ref("");

    function updateQuery(q) {
        router.push(`/search?q=${q}`);
        query.value = q;
    }
    return { query, updateQuery };
});
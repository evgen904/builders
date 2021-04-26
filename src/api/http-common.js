import axios from 'axios'
import {
    cacheAdapterEnhancer,
    throttleAdapterEnhancer,
    retryAdapterEnhancer,
} from "axios-extensions";

export default axios.create({
    adapter: throttleAdapterEnhancer(
        cacheAdapterEnhancer(retryAdapterEnhancer(axios.defaults.adapter))
    ),
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
});


import axios from "axios";

export const Api = axios.create({
    baseURL: "https://run.mocky.io/v3/",
})
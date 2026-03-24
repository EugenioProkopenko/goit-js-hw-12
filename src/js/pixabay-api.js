import axios from 'axios';
const API_KEY = "49627476-e05c06d50af5be4d22ab8156c";


export async function getImagesByQuery(query, page) {
    const BASE_URL = "https://pixabay.com";
    const END_POINT = "/api/";
    const url = `${BASE_URL}${END_POINT}`;
    const params = {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 15,
        page: page
    };

    const res = await axios.get(url, { params });
    return res.data
}



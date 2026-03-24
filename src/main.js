
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions'
 

const refs = {
    formElem: document.querySelector(".form"),
    hitsListElem: document.querySelector(".gallery"),
};


refs.formElem.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const query = formData.get('query');
    const res = await getImagesByQuery(query, 1);
    console.log(res);
    const markup = createGallery(res.hits);
    refs.hitsListElem.innerHTML = markup



    e.target.reset();
});

///////////////////////////////////////////////(






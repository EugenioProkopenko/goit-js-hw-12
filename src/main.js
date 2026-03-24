
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api';
import { 
    createGallery,
    
} from './js/render-functions'
 

const refs = {
    formElem: document.querySelector(".form"),
    hitsListElem: document.querySelector(".gallery"),
    btnLoadMore: document.querySelector(".load"),
};

const PER_PAGE = 15;
let query;
let page;
let totalHitsPage;




refs.formElem.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    page = 1;
    hideLoadMoreButton()
    
    try {
        const res = await getImagesByQuery(query, 1);
        console.log(res);
        const markup = createGallery(res.hits);
        refs.hitsListElem.innerHTML = markup;

        totalHitsPage = Math.ceil(res.totalHits / PER_PAGE);

    } catch {

    }


    checkBtnStatus();
    e.target.reset();
});

refs.btnLoadMore.addEventListener('click', async e=> {
    hideLoadMoreButton()
    page += 1;
    try {
        const res = await getImagesByQuery(query, page);
        const markup = createGallery(res.hits);
        refs.hitsListElem.insertAdjacentHTML("beforeend", markup);
    
    } catch {

    }
    
    checkBtnStatus();
})

///////////////////////////////////////////////(

function showLoadMoreButton() {
    refs.btnLoadMore.classList.remove('is-hidden');

};
function hideLoadMoreButton() {
    refs.btnLoadMore.classList.add('is-hidden');
    
}
//////////////////////////Final Colecion Load More/////////////

 function checkBtnStatus() {
    if (page >= totalHitsPage) {
         hideLoadMoreButton();
    } else {
        showLoadMoreButton();
    }
 }
/////////////////////////////Show iziToast////////////
function showSuccess() {
   iziToast.success({
       title: 'OK',
       message: 'Successfully inserted record!',
   }) 
}

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api';
import { 
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
   
    } from './js/render-functions'
 

const refs = {
    formElem: document.querySelector(".form"),
    hitsListElem: document.querySelector(".gallery"),
    btnLoadMore: document.querySelector(".load"),
    targetElem: document.querySelector('.js-target'),
    
};

const PER_PAGE = 15;
let query;
let page;
let totalHitsPage;




refs.formElem.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    query = formData.get('query').trim();
   
    page = 1;
    hideLoadMoreButton();
    clearGallery();
    showLoader();
    
    try {
         const res = await getImagesByQuery(query, page);
       
         const markup = createGallery(res.hits);
         refs.hitsListElem.innerHTML = markup;
         totalHitsPage = Math.ceil(res.totalHits / PER_PAGE);

     } catch (error) {
        console.error(error);
       iziToast.error({
        message: 'An error occurred. Try again!',
        position: 'bottomCenter',
    });
}
    
   
    hideLoader();
    checkBtnStatus();
    e.target.reset();
});

refs.btnLoadMore.addEventListener('click', async e=> {
    hideLoadMoreButton()
    
    page += 1;
    showLoader();
    try {
         const res = await getImagesByQuery(query, page);
    
         const markup = createGallery(res.hits);
         refs.hitsListElem.insertAdjacentHTML("beforeend", markup);
         scrollPage();
    } catch {}
        
    hideLoader();
    
       checkBtnStatus();
})


 function showLoadMoreButton() {
    refs.btnLoadMore.classList.remove('is-hidden');

};
 function hideLoadMoreButton() {
    refs.btnLoadMore.classList.add('is-hidden');
    
};

 function checkBtnStatus() {
    if (page >= totalHitsPage) {
        iziToastSuccess('Were sorry, but youve reached the end of search results.');
        
         hideLoadMoreButton();
    } else {
        
        showLoadMoreButton();
    }
 }

function iziToastSuccess(message) {
    iziToast.success({
    message: message,
    position: 'bottomCenter',
});
}


function scrollPage() {
    const elem = refs.hitsListElem.lastElementChild;
    
    const height = elem.getBoundingClientRect().height;
    window.scrollBy({
        top: height * 2.2,
        behavior: "smooth",

    })

}
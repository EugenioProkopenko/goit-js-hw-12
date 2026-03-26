
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
    hideLoadMoreButton()
    
    try {
         const res = await getImagesByQuery(query, page);
    console.log(res);
    const markup = createGallery(res.hits);
    refs.hitsListElem.innerHTML = markup;
    totalHitsPage = Math.ceil(res.totalHits / PER_PAGE);
    if(totalHitsPage === 0) {
        iziToastError('Nothing found');

    }
  
    } catch {}
    
   

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
    scrollPage();
    } catch {}
    
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
        iziToastSuccess('Were sorry, but youve reached the end of search results.');
        
         hideLoadMoreButton();
    } else {
        
        showLoadMoreButton();
    }
 }
///////////////////////

function iziToastSuccess(message) {
    iziToast.success({
    message: message,
});
}

/////////////////////////////////
const vasya = new IntersectionObserver((items) => {
    const item = items[0];
    
    if(item.isIntersecting) {
        console.log("Load More");
        getImagesByQuery();
    }
  

});
vasya.observe(refs.targetElem);


///////////////////////////////////////
function scrollPage() {
    const elem = refs.hitsListElem.lastElementChild;
    console.log(elem);
    const height = elem.getBoundingClientRect().height;
    window.scrollBy({
        top: height * 2.2,
        behavior: "smooth",

    })

}
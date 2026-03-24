import{a as y}from"./assets/vendor-MoVzAjbq.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const h="49627476-e05c06d50af5be4d22ab8156c";async function d(e,s){const t="https://pixabay.com/api/",o={key:h,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s};return(await y.get(t,{params:o})).data}document.querySelector(".gallery");function L(e){const s=e.tags.split(",").slice(0,3).join(", ");return`
    <li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-link">
            <img
                class="gallery-image"
                src="${e.webformatURL}"
                alt="${s}"
            />
            <div class="info">
                <div class="info-item">
                    <p class="info-label">Likes</p>
                    <span class="info-value">${e.likes}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Views</p>
                    <span class="info-value">${e.views}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Comments</p>
                    <span class="info-value">${e.comments}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Downloads</p>
                    <span class="info-value">${e.downloads}</span>
                </div>
            </div>
        </a>
    </li>
    `}function u(e){return e.map(L).join("")}const a={formElem:document.querySelector(".form"),hitsListElem:document.querySelector(".gallery"),btnLoadMore:document.querySelector(".load")},g=15;let f,i,p;a.formElem.addEventListener("submit",async e=>{e.preventDefault(),new FormData(e.target),i=1,c();try{const s=await d(f,1);console.log(s);const r=u(s.hits);a.hitsListElem.innerHTML=r,p=Math.ceil(s.totalHits/g)}catch{}m(),e.target.reset()});a.btnLoadMore.addEventListener("click",async e=>{c(),i+=1;try{const s=await d(f,i),r=u(s.hits);a.hitsListElem.insertAdjacentHTML("beforeend",r)}catch{}m()});function v(){a.btnLoadMore.classList.remove("is-hidden")}function c(){a.btnLoadMore.classList.add("is-hidden")}function m(){i>=p?c():v()}
//# sourceMappingURL=index.js.map

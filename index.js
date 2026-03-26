import{a as h,i as d}from"./assets/vendor-D8utHqLp.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const g="49627476-e05c06d50af5be4d22ab8156c";async function f(e,o){const t="https://pixabay.com/api/",s={key:g,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};return(await h.get(t,{params:s})).data}const L=document.querySelector(".gallery");function v(e){const o=e.tags.split(",").slice(0,3).join(", ");return`
    <li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-link">
            <img
                class="gallery-image"
                src="${e.webformatURL}"
                alt="${o}"
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
    `}function m(e){return e.map(v).join("")}function b(){L.innerHTML=""}const n={formElem:document.querySelector(".form"),hitsListElem:document.querySelector(".gallery"),btnLoadMore:document.querySelector(".load"),targetElem:document.querySelector(".js-target")},E=15;let l,i,p;n.formElem.addEventListener("submit",async e=>{e.preventDefault(),l=new FormData(e.target).get("query").trim(),i=1,u(),b();try{const r=await f(l,i),a=m(r.hits);n.hitsListElem.innerHTML=a,p=Math.ceil(r.totalHits/E)}catch(r){console.error(r),d.error({message:"An error occurred. Try again!",position:"bottomCenter"})}y(),e.target.reset()});n.btnLoadMore.addEventListener("click",async e=>{u(),i+=1;try{const o=await f(l,i),r=m(o.hits);n.hitsListElem.insertAdjacentHTML("beforeend",r),P()}catch{}y()});function w(){n.btnLoadMore.classList.remove("is-hidden")}function u(){n.btnLoadMore.classList.add("is-hidden")}function y(){i>=p?(M("Were sorry, but youve reached the end of search results."),u()):w()}function M(e){d.success({message:e,position:"bottomCenter"})}function P(){const o=n.hitsListElem.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:o*2.2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map

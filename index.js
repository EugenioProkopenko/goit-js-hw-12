import{a as v,i as u}from"./assets/vendor-D8utHqLp.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const b="49627476-e05c06d50af5be4d22ab8156c";async function f(e,o){const t="https://pixabay.com/api/",s={key:b,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};return(await v.get(t,{params:s})).data}const E=document.querySelector(".gallery"),m=document.querySelector(".is-hidden");function w(e){const o=e.tags.split(",").slice(0,3).join(", ");return`
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
    `}function p(e){return e.map(w).join("")}function M(){E.innerHTML=""}function h(){m.classList.remove("is-hidden")}function y(){m.classList.add("is-hidden")}const n={formElem:document.querySelector(".form"),hitsListElem:document.querySelector(".gallery"),btnLoadMore:document.querySelector(".load"),targetElem:document.querySelector(".js-target")},P=15;let l,a,g;n.formElem.addEventListener("submit",async e=>{e.preventDefault(),l=new FormData(e.target).get("query").trim(),a=1,d(),M(),h();try{const r=await f(l,a),i=p(r.hits);n.hitsListElem.innerHTML=i,g=Math.ceil(r.totalHits/P)}catch(r){console.error(r),u.error({message:"An error occurred. Try again!",position:"bottomCenter"})}y(),L(),e.target.reset()});n.btnLoadMore.addEventListener("click",async e=>{d(),a+=1,h();try{const o=await f(l,a),r=p(o.hits);n.hitsListElem.insertAdjacentHTML("beforeend",r),$()}catch{}y(),L()});function S(){n.btnLoadMore.classList.remove("is-hidden")}function d(){n.btnLoadMore.classList.add("is-hidden")}function L(){a>=g?(q("Were sorry, but youve reached the end of search results."),d()):S()}function q(e){u.success({message:e,position:"bottomCenter"})}function $(){const o=n.hitsListElem.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:o*2.2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map

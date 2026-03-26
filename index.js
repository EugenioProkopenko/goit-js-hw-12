import{a as g,i as h}from"./assets/vendor-D8utHqLp.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const y="49627476-e05c06d50af5be4d22ab8156c";async function u(e,s){const t="https://pixabay.com/api/",o={key:y,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s};return(await g.get(t,{params:o})).data}document.querySelector(".gallery");function L(e){const s=e.tags.split(",").slice(0,3).join(", ");return`
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
    `}function m(e){return e.map(L).join("")}const n={formElem:document.querySelector(".form"),hitsListElem:document.querySelector(".gallery"),btnLoadMore:document.querySelector(".load"),targetElem:document.querySelector(".js-target")},v=15;let l,a,d;n.formElem.addEventListener("submit",async e=>{e.preventDefault(),l=new FormData(e.target).get("query").trim(),a=1,f();try{const r=await u(l,a);console.log(r);const i=m(r.hits);n.hitsListElem.innerHTML=i,d=Math.ceil(r.totalHits/v),d===0&&iziToastError("Nothing found")}catch{}p(),e.target.reset()});n.btnLoadMore.addEventListener("click",async e=>{f(),a+=1;try{const s=await u(l,a),r=m(s.hits);n.hitsListElem.insertAdjacentHTML("beforeend",r),M()}catch{}p()});function b(){n.btnLoadMore.classList.remove("is-hidden")}function f(){n.btnLoadMore.classList.add("is-hidden")}function p(){a>=d?(E("Were sorry, but youve reached the end of search results."),f()):b()}function E(e){h.success({message:e})}const w=new IntersectionObserver(e=>{e[0].isIntersecting&&(console.log("Load More"),u())});w.observe(n.targetElem);function M(){const e=n.hitsListElem.lastElementChild;console.log(e);const s=e.getBoundingClientRect().height;window.scrollBy({top:s*2.2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map

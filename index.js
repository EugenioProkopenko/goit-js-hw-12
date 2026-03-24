import{a as l}from"./assets/vendor-MoVzAjbq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const c="49627476-e05c06d50af5be4d22ab8156c";async function f(t,r){const e="https://pixabay.com/api/",s={key:c,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r};return(await l.get(e,{params:s})).data}document.querySelector(".gallery");function u(t){const r=t.tags.split(",").slice(0,3).join(", ");return`
    <li class="gallery-item">
        <a href="${t.largeImageURL}" class="gallery-link">
            <img
                class="gallery-image"
                src="${t.webformatURL}"
                alt="${r}"
            />
            <div class="info">
                <div class="info-item">
                    <p class="info-label">Likes</p>
                    <span class="info-value">${t.likes}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Views</p>
                    <span class="info-value">${t.views}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Comments</p>
                    <span class="info-value">${t.comments}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Downloads</p>
                    <span class="info-value">${t.downloads}</span>
                </div>
            </div>
        </a>
    </li>
    `}function p(t){return t.map(u).join("")}const i={formElem:document.querySelector(".form"),hitsListElem:document.querySelector(".gallery")};i.formElem.addEventListener("submit",async t=>{t.preventDefault();const a=new FormData(t.target).get("query"),o=await f(a,1);console.log(o);const e=p(o.hits);i.hitsListElem.innerHTML=e,t.target.reset()});
//# sourceMappingURL=index.js.map

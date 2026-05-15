/* empty css                      */import{a as p,S as u,i}from"./assets/vendor-DirGshhi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="55880661-10035f87f77481362b79097ec",d="https://pixabay.com/api/";async function m(o){return(await p.get(d,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}})).data}const c=document.querySelector(".js-gallery"),l=document.querySelector(".js-loader"),h=new u(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const s=o.map(t=>`
      <li class="photo-card">
        <a class="photo-link" href="${t.largeImageURL}">
          <img
            class="photo-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
            loading="lazy"
          />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b><span>${t.likes}</span></p>
          <p class="info-item"><b>Views</b><span>${t.views}</span></p>
          <p class="info-item"><b>Comments</b><span>${t.comments}</span></p>
          <p class="info-item"><b>Downloads</b><span>${t.downloads}</span></p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",s),h.refresh()}function y(){c.innerHTML=""}function b(){l.classList.remove("hidden")}function L(){l.classList.add("hidden")}const w=document.querySelector(".js-search-form");w.addEventListener("submit",o=>{o.preventDefault();const s=o.currentTarget.elements["search-text"].value.trim();if(!s){i.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}b(),y(),m(s).then(t=>{if(!t.hits||t.hits.length===0){i.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits)}).catch(()=>{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map

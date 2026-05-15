import{a as g,S as y,i as a}from"./assets/vendor-DirGshhi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const L="55880661-10035f87f77481362b79097ec",b="https://pixabay.com/api/",w=15;async function P(e,o=1){return(await g.get(b,{params:{key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:w,page:o}})).data}const d=document.querySelector(".js-gallery"),f=document.querySelector(".js-loader"),p=document.querySelector(".js-load-more"),v=new y(".gallery a",{captionsData:"alt",captionDelay:250});function E(e){const o=e.map(s=>`
      <li class="photo-card">
        <a class="photo-link" href="${s.largeImageURL}">
          <img
            class="photo-image"
            src="${s.webformatURL}"
            alt="${s.tags}"
            loading="lazy"
          />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b><span>${s.likes}</span></p>
          <p class="info-item"><b>Views</b><span>${s.views}</span></p>
          <p class="info-item"><b>Comments</b><span>${s.comments}</span></p>
          <p class="info-item"><b>Downloads</b><span>${s.downloads}</span></p>
        </div>
      </li>`).join("");d.insertAdjacentHTML("beforeend",o),v.refresh()}function R(){d.innerHTML=""}function S(){f.classList.remove("hidden")}function q(){f.classList.add("hidden")}function M(){p.classList.remove("hidden")}function i(){p.classList.add("hidden")}const $=document.querySelector(".js-search-form"),j=document.querySelector(".js-load-more");let h="",n=1,c=0;const A=15;$.addEventListener("submit",async e=>{e.preventDefault();const o=e.currentTarget.elements["search-text"].value.trim();if(!o){a.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}h=o,n=1,c=0,R(),i(),await m()});j.addEventListener("click",async()=>{n+=1,await m()});async function m(){S();try{const e=await P(h,n);if(!e.hits||e.hits.length===0){n===1?a.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):a.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),i();return}if(n===1&&(c=e.totalHits,c===0)){a.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i();return}E(e.hits),n*A<c?M():(i(),a.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),n>1&&B()}catch{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{q()}}function B(){const e=document.querySelector(".gallery .photo-card");if(!e)return;const{height:o}=e.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map

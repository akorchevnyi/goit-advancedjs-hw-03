import{S as m,i as u}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const s={gallery:document.querySelector(".gallery"),form:document.querySelector(".query-form"),loader:document.querySelector(".loader")},f="28534332-8f968f9e2a1846e3bb62dda3d",c="query",d={overlay:!0,overlayOpacity:1,captions:!0,captionPosition:"bottom",captionType:"attr",captionsData:"alt",captionDelay:250},y="https://pixabay.com/api";function g(a){const t=new URLSearchParams({key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${y}/?${t}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})}function h(a){return a.map(({webformatURL:t,tags:o,likes:i,views:e,comments:r,downloads:l,largeImageURL:p})=>`
            <li class="gallery-card">
                <a class="gallery-link" href="${p}">
                    <img class="gallery-image" src="${t}" alt="${o}" height=312 width=200>
                    <ul class="statistics">
                        <li class="stat-element">
                            <p class="stat-name">Likes</p>
                            <p class="stat-value">${i}</p>
                        </li>

                        <li class="stat-element">
                            <p class="stat-name">Views</p>
                            <p class="stat-value">${e}</p>
                        </li>

                        <li class="stat-element">
                            <p class="stat-name">Comments</p>
                            <p class="stat-value">${r}</p>
                        </li>

                        <li class="stat-element">
                            <p class="stat-name">Downloads</p>
                            <p class="stat-value">${l}</p>
                        </li>
                    </ul>
                </a>
            </li>
      `).join("")}let n=b(s.form);s.form.addEventListener("input",S);s.form.addEventListener("submit",v);const L=new m(".gallery li a",d);function S(a){n=a.target.value.trim(),localStorage.setItem(c,n)}function v(a){a.preventDefault(),n&&(s.gallery.innerHTML="",s.loader.style.display="block",g(n).then(({hits:t})=>{s.loader.style.display="none",t.length?(s.gallery.innerHTML=h(t),L.refresh()):u.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(t=>{u.error({message:"There was an error while loading pictures. Please try again!",position:"topRight"}),console.error(t)}).finally(()=>{n="",localStorage.removeItem(c),s.form.reset()}))}function b(a){const t=localStorage.getItem(c);if(t)return a.elements.query.value=t,t||""}
//# sourceMappingURL=index.js.map

(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const e of o.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&s(e)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const d=[{id:"horizon-house",num:"01",title:"HORIZON HOUSE",category:"Residential",location:"Islamabad, Pakistan",year:"2025",type:"Residential Project",role:"Architectural Assistant",scope:"Concept, Design Development, Technical Drawings, Visualization",tools:"AutoCAD, SketchUp, Lumion, Enscape, Photoshop, Revit",heroImage:"/assets/villa-hero.jpg",secondaryImage:"/assets/interior-spatial.jpg",ideaStatement:"The concept revolves around creating a harmonious relationship between built form and nature. The design emphasizes open spaces, natural light and fluid transitions between indoors and outdoors.",ideaPoints:["Deep horizontal cantilevers shielding high-performance low-E glass","Central water courtyard facilitating natural evaporative cooling","Seamless material transitions from raw travertine to board-formed concrete"],technicalThumbnails:[{type:"plan",label:"Ground Floor Plan"},{type:"elevation",label:"South Elevation"},{type:"section",label:"Transverse Section"},{type:"render",label:"Interior Perspective"}]},{id:"the-courtyard",num:"02",title:"THE COURTYARD",category:"Residential",location:"Islamabad",year:"2024",type:"Residential Villa & Landscape",role:"Architectural Assistant & Visualization",scope:"Zoning Studies, Floor Plans, 3D Modeling, Enscape Renders",tools:"AutoCAD, SketchUp, Enscape, Photoshop",heroImage:"/assets/interior-spatial.jpg",secondaryImage:"/assets/villa-hero.jpg",ideaStatement:"A modern courtyard home structured around internal private gardens, maximizing natural cross-ventilation while providing complete visual privacy in a dense urban neighborhood.",ideaPoints:["Inward-looking spatial layout with floor-to-ceiling sliding glass screens","Perforated brick brise-soleil creating dynamic shadow patterns throughout the day","Double-height living pavilion oriented towards northern indirect light"],technicalThumbnails:[{type:"plan",label:"Courtyard Layout"},{type:"elevation",label:"Internal Facade"},{type:"section",label:"Lightwell Section"},{type:"render",label:"Garden Lounge"}]},{id:"form-in-light",num:"03",title:"FORM IN LIGHT",category:"Conceptual · Academic",location:"Margalla Foothills",year:"2024",type:"Cultural Pavilion & Spatial Exploration",role:"Lead Student Designer",scope:"Parametric Massing, Sunlight Angle Studies, Physical Modeling",tools:"Rhino, SketchUp, Lumion, Hand Drafting",heroImage:"/assets/pavilion-hero.jpg",secondaryImage:"/assets/pavilion-hero.jpg",ideaStatement:"An architectural exploration of how daylight and shadow sculpt spatial perception, embedding stepped stone volumes directly into the topography.",ideaPoints:["Stepped rammed-earth terraces contouring the mountain gradient","Zenithal light scoops illuminating subterranean gallery spaces","Water retention ponds integrated with natural mountain runoff"],technicalThumbnails:[{type:"plan",label:"Contour Plan"},{type:"elevation",label:"Mountain Elevation"},{type:"section",label:"Terraced Section"},{type:"render",label:"Water Plaza"}]},{id:"urban-insert",num:"04",title:"URBAN INSERT",category:"Urban Design · Academic",location:"Old City, Rawalpindi",year:"2023",type:"Adaptive Reuse & Urban Infill",role:"Urban Research & Documentation",scope:"Site Survey, Heritage Documentation, Structural Retrofit",tools:"AutoCAD, SketchUp, Photoshop",heroImage:"/assets/urban-infill-hero.jpg",secondaryImage:"/assets/urban-infill-hero.jpg",ideaStatement:"Inserting contemporary timber lattice screens and a multi-level light atrium into a historic 19th-century masonry shell, restoring life to the bazaar quarter.",ideaPoints:["Structural stabilization of original load-bearing terracotta brick arches","Lightweight glulam timber roof truss bringing skyward light into the core","Porous public ground plane supporting local artisan workshops"],technicalThumbnails:[{type:"plan",label:"Bazaar Infill Plan"},{type:"elevation",label:"Street Elevation"},{type:"section",label:"Atrium Section"},{type:"render",label:"Courtyard View"}]},{id:"interior-envision",num:"05",title:"INTERIOR ENVISION",category:"Interior · Residential",location:"Islamabad",year:"2024",type:"Luxury Residential Interior",role:"Visualization & Material Selection",scope:"Bespoke Joinery, Lighting Analysis, Photorealistic Rendering",tools:"SketchUp, Lumion Pro, Photoshop",heroImage:"/assets/commercial-hero.jpg",secondaryImage:"/assets/interior-spatial.jpg",ideaStatement:"A refined interior spatial composition celebrating minimalist materiality: vein-cut travertine, dark oak joinery, and floating concrete staircases.",ideaPoints:["Custom monolithic travertine fireplace partition dividing living and dining","Concealed architectural linear lighting casting soft grazing wash on textured walls","Acoustic timber slat paneling optimizing spatial auditory comfort"],technicalThumbnails:[{type:"plan",label:"Interior Layout"},{type:"elevation",label:"Joinery Elevation"},{type:"section",label:"Staircase Detail"},{type:"render",label:"Living Room Atrium"}]}];function u(n){const i=document.getElementById("project-selector-list"),r=document.getElementById("active-project-img"),s=document.getElementById("btn-view-active-project");if(!i)return;let t=0;function o(){i.innerHTML=d.map((a,l)=>`
      <div class="project-item-row ${l===t?"active":""}" data-index="${l}">
        <span class="project-item-num">${a.num}</span>
        <div class="project-item-info">
          <span class="project-item-title">${a.title}</span>
          <span class="project-item-meta">${a.category} · ${a.location} · ${a.year}</span>
        </div>
      </div>
    `).join(""),i.querySelectorAll(".project-item-row").forEach(a=>{a.addEventListener("click",()=>{const l=parseInt(a.getAttribute("data-index"),10);e(l)})})}function e(a){t=a;const l=d[a];i.querySelectorAll(".project-item-row").forEach((c,p)=>{c.classList.toggle("active",p===a)}),r&&l&&(r.style.opacity="0.4",setTimeout(()=>{r.src=l.heroImage,r.alt=`${l.title} Preview`,r.style.opacity="1"},150))}s&&s.addEventListener("click",()=>{const a=d[t];a&&n&&n(a)}),o(),e(0)}function m(){const n=document.getElementById("project-case-study-modal"),i=document.getElementById("btn-close-case-study"),r=document.getElementById("case-study-content-body");if(!n||!r)return{openProject:()=>{}};function s(e){r.innerHTML=`
      <!-- Left Column: Specs & Index -->
      <div class="cs-left-col">
        <span class="cs-project-num">${e.num}</span>
        <h2 class="cs-project-title">${e.title}</h2>
        <span class="cs-project-type">${e.type.toUpperCase()}</span>

        <!-- Technical Metadata Table -->
        <div class="cs-spec-table">
          <div class="cs-spec-row">
            <span class="cs-spec-k">LOCATION</span>
            <span class="cs-spec-v">${e.location}</span>
          </div>
          <div class="cs-spec-row">
            <span class="cs-spec-k">TYPE</span>
            <span class="cs-spec-v">${e.category}</span>
          </div>
          <div class="cs-spec-row">
            <span class="cs-spec-k">YEAR</span>
            <span class="cs-spec-v">${e.year}</span>
          </div>
          <div class="cs-spec-row">
            <span class="cs-spec-k">ROLE</span>
            <span class="cs-spec-v">${e.role}</span>
          </div>
          <div class="cs-spec-row">
            <span class="cs-spec-k">SCOPE</span>
            <span class="cs-spec-v">${e.scope}</span>
          </div>
          <div class="cs-spec-row">
            <span class="cs-spec-k">TOOLS</span>
            <span class="cs-spec-v">${e.tools}</span>
          </div>
        </div>

        <!-- Narrative Index Nav -->
        <div class="cs-index-nav">
          <div class="cs-index-item active">01 CONTEXT</div>
          <div class="cs-index-item">02 CONCEPT</div>
          <div class="cs-index-item">03 EXPLORATION</div>
          <div class="cs-index-item">04 TECHNICAL</div>
          <div class="cs-index-item">05 MATERIAL & ATMOSPHERE</div>
          <div class="cs-index-item">06 FINAL VISUALS</div>
        </div>
      </div>

      <!-- Right Column: Visuals & The Idea -->
      <div class="cs-right-col">
        <!-- Main Render -->
        <div class="cs-main-render-wrap">
          <img id="cs-active-hero-img" src="${e.heroImage}" alt="${e.title} Render" class="cs-main-render-img">
        </div>

        <!-- Thumbnails Strip (CAD Plans, Elevations, Render Angles) -->
        <div class="cs-thumbnails-strip">
          <div class="cs-thumb-box" data-src="${e.heroImage}">
            <svg viewBox="0 0 100 60" class="cs-thumb-svg">
              <g stroke="#ffffff" stroke-width="0.75" fill="none" opacity="0.6">
                <rect x="10" y="10" width="80" height="40" />
                <line x1="30" y1="10" x2="30" y2="50" />
                <line x1="60" y1="10" x2="60" y2="50" />
                <text x="50" y="34" font-size="7" fill="#ffffff" text-anchor="middle" font-family="sans-serif">PLAN</text>
              </g>
            </svg>
          </div>
          <div class="cs-thumb-box" data-src="${e.secondaryImage}">
            <img src="${e.secondaryImage}" alt="Perspective" class="cs-thumb-img">
          </div>
          <div class="cs-thumb-box" data-src="${e.heroImage}">
            <svg viewBox="0 0 100 60" class="cs-thumb-svg">
              <g stroke="#ffffff" stroke-width="0.75" fill="none" opacity="0.6">
                <line x1="5" y1="45" x2="95" y2="45" />
                <polygon points="20,45 20,20 50,15 80,25 80,45" />
                <text x="50" y="38" font-size="7" fill="#ffffff" text-anchor="middle" font-family="sans-serif">ELEVATION</text>
              </g>
            </svg>
          </div>
          <div class="cs-thumb-box" data-src="${e.heroImage}">
            <img src="${e.heroImage}" alt="Exterior" class="cs-thumb-img">
          </div>
        </div>

        <!-- The Idea Editorial Card (Matching Reference Bottom Right) -->
        <div class="cs-idea-card">
          <div class="cs-idea-left">
            <h3 class="cs-idea-title">THE IDEA</h3>
            <p class="cs-idea-text">${e.ideaStatement}</p>
          </div>
          <div class="cs-idea-sketch-wrap">
            <svg viewBox="0 0 280 180" class="cs-idea-sketch-svg">
              <g stroke="currentColor" stroke-width="0.85" fill="none" opacity="0.7">
                <!-- Architectural Perspective Lines -->
                <line x1="20" y1="150" x2="260" y2="150" />
                <polygon points="40,140 160,140 220,105 100,105" stroke-width="1.2" />
                <polygon points="60,95 180,95 240,65 120,65" stroke-width="1.2" />
                <line x1="40" y1="140" x2="60" y2="95" />
                <line x1="160" y1="140" x2="180" y2="95" />
                <line x1="220" y1="105" x2="240" y2="65" />
                <!-- Tree sketch -->
                <path d="M 230,140 Q 225,100 230,80 Q 215,70 230,50 Q 245,70 230,80" stroke-width="0.75" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    `,r.querySelectorAll(".cs-thumb-box").forEach(a=>{a.addEventListener("click",()=>{const l=a.getAttribute("data-src"),c=r.querySelector("#cs-active-hero-img");l&&c&&(c.src=l)})})}function t(e){s(e),n.classList.add("open"),n.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden"}function o(){n.classList.remove("open"),n.setAttribute("aria-hidden","true"),document.body.style.overflow="auto"}return i&&i.addEventListener("click",o),window.addEventListener("keydown",e=>{e.key==="Escape"&&n.classList.contains("open")&&o()}),{openProject:t,closeProject:o}}function g(){const n=document.getElementById("btn-start-conversation"),i=document.getElementById("inquiry-modal"),r=document.getElementById("btn-close-inquiry"),s=document.getElementById("direct-inquiry-form"),t=document.getElementById("inq-success-msg");if(!i)return;function o(){i.classList.add("open"),i.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden"}function e(){i.classList.remove("open"),i.setAttribute("aria-hidden","true"),document.body.style.overflow="auto"}n&&n.addEventListener("click",o),r&&r.addEventListener("click",e),i.addEventListener("click",a=>{a.target===i&&e()}),window.addEventListener("keydown",a=>{a.key==="Escape"&&i.classList.contains("open")&&e()}),s&&s.addEventListener("submit",a=>{a.preventDefault(),t&&(t.style.display="block"),s.reset(),setTimeout(()=>{t&&(t.style.display="none"),e()},2800)})}document.addEventListener("DOMContentLoaded",()=>{h(),f(),y();const n=m();u(i=>{n.openProject(i)}),g(),document.querySelectorAll('a[href^="#"]').forEach(i=>{i.addEventListener("click",function(r){const s=this.getAttribute("href");if(s&&s!=="#"&&s.startsWith("#")){const t=document.querySelector(s);t&&(r.preventDefault(),t.scrollIntoView({behavior:"smooth"}))}})})});function h(){const n=document.getElementById("modern-loader"),i=document.getElementById("loader-progress-fill"),r=document.getElementById("loader-counter");if(!n)return;let s=0;const t=performance.now(),o=1200;function e(a){const l=a-t;s=Math.min(100,Math.floor(l/o*100)),i&&(i.style.width=`${s}%`),r&&(r.textContent=`${s}%`),s<100?requestAnimationFrame(e):setTimeout(()=>{n.classList.add("is-loaded"),v()},200)}requestAnimationFrame(e)}function v(){document.querySelectorAll("#hero .reveal-text, #hero .reveal-image, #hero .reveal-fade").forEach(i=>{i.classList.add("is-revealed")})}function f(){const n=document.querySelectorAll(".reveal-text, .reveal-up, .reveal-image, .reveal-fade"),i={root:null,rootMargin:"0px 0px -12% 0px",threshold:.08},r=new IntersectionObserver((s,t)=>{s.forEach(o=>{o.isIntersecting&&(o.target.classList.add("is-revealed"),t.unobserve(o.target))})},i);n.forEach(s=>{s.closest("#hero")||r.observe(s)})}function y(){const n=document.getElementById("site-header");n&&window.addEventListener("scroll",()=>{(window.scrollY||window.pageYOffset)>50?n.classList.add("scrolled"):n.classList.remove("scrolled")},{passive:!0})}

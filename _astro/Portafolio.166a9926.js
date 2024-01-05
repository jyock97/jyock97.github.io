import{r as _}from"./index.ed373d49.js";import{j as e,H as x}from"./Header.40b5c0ae.js";import{s as j,a as g,b as i,c as d,d as v,e as R}from"./index.5d28df72.a45f9886.js";const T=({title:c,description:t,imageSrc:o})=>e.jsxs("div",{className:j.wrapper,children:[e.jsx("img",{className:j.image,src:o}),e.jsxs("div",{className:j.rightWrapper,children:[e.jsx("h2",{className:j.title,children:c}),e.jsx("h3",{className:j.description,children:t})]})]}),N=({refEle:c,titleName:t})=>e.jsxs("div",{className:g.wrapper,children:[e.jsx("h2",{children:t}),e.jsx("div",{ref:c,className:g.goodAnchor})]}),L="modulepreload",I=function(c){return"/"+c},P={},l=function(t,o,a){if(!o||o.length===0)return t();const m=document.getElementsByTagName("link");return Promise.all(o.map(s=>{if(s=I(s),s in P)return;P[s]=!0;const r=s.endsWith(".css"),h=r?'[rel="stylesheet"]':"";if(!!a)for(let p=m.length-1;p>=0;p--){const f=m[p];if(f.href===s&&(!r||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${h}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":L,r||(n.as="script",n.crossOrigin=""),n.href=s,document.head.appendChild(n),r)return new Promise((p,f)=>{n.addEventListener("load",p),n.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=s,window.dispatchEvent(r),!r.defaultPrevented)throw s})},C=Symbol.for("astro:fragment"),W=Symbol.for("astro:renderer");new TextEncoder;new TextDecoder;typeof process=="object"&&Object.prototype.toString.call(process);function E({globResult:c,contentDir:t}){const o={};for(const a in c){const s=a.replace(new RegExp(`^${t}`),"").split("/");if(s.length<=1)continue;const r=s[0];o[r]??={},o[r][a]=c[a]}return o}const b="/src/content/",w=Object.assign({"/src/content/about/about.md":()=>l(()=>import("./about.7410c987.js"),[]),"/src/content/contact/contact.md":()=>l(()=>import("./contact.6f721c57.js"),[]),"/src/content/profession/profession.md":()=>l(()=>import("./profession.0b2b83b1.js"),[]),"/src/content/projects/01_uaschool.md":()=>l(()=>import("./01_uaschool.113317d5.js"),[]),"/src/content/projects/02_cidev.md":()=>l(()=>import("./02_cidev.8178361c.js"),[]),"/src/content/projects/03_witchcrafttales.md":()=>l(()=>import("./03_witchcrafttales.e783bb9b.js"),[])});E({globResult:w,contentDir:b});const y=Object.assign({});E({globResult:y,contentDir:b});E({globResult:{...w,...y},contentDir:b});const O=Object.assign({"/src/content/about/about.md":()=>l(()=>import("./about.b17a0fbd.js"),["_astro/about.b17a0fbd.js","_astro/index.ed373d49.js","_astro/Header.40b5c0ae.js","_astro/index.5d28df72.a45f9886.js","_astro/index.2e9df92a.css"]),"/src/content/contact/contact.md":()=>l(()=>import("./contact.aad99a08.js"),["_astro/contact.aad99a08.js","_astro/index.ed373d49.js","_astro/Header.40b5c0ae.js","_astro/index.5d28df72.a45f9886.js","_astro/index.2e9df92a.css"]),"/src/content/profession/profession.md":()=>l(()=>import("./profession.96b8d53b.js"),["_astro/profession.96b8d53b.js","_astro/index.ed373d49.js","_astro/Header.40b5c0ae.js","_astro/index.5d28df72.a45f9886.js","_astro/index.2e9df92a.css"]),"/src/content/projects/01_uaschool.md":()=>l(()=>import("./01_uaschool.3b3ff081.js"),["_astro/01_uaschool.3b3ff081.js","_astro/index.ed373d49.js","_astro/Header.40b5c0ae.js","_astro/index.5d28df72.a45f9886.js","_astro/index.2e9df92a.css"]),"/src/content/projects/02_cidev.md":()=>l(()=>import("./02_cidev.657fb20d.js"),["_astro/02_cidev.657fb20d.js","_astro/index.ed373d49.js","_astro/Header.40b5c0ae.js","_astro/index.5d28df72.a45f9886.js","_astro/index.2e9df92a.css"]),"/src/content/projects/03_witchcrafttales.md":()=>l(()=>import("./03_witchcrafttales.47704020.js"),["_astro/03_witchcrafttales.47704020.js","_astro/index.ed373d49.js","_astro/Header.40b5c0ae.js","_astro/index.5d28df72.a45f9886.js","_astro/index.2e9df92a.css"])});E({globResult:O,contentDir:b});const D=({title:c,subtitle:t,description:o,paragraphs:a,bulletsTitle:m,bulletsContent:s,imageSrc:r,ctaName:h,cta:u})=>e.jsxs("div",{className:i.wrapper,children:[e.jsxs("div",{className:i.leftWrapper,children:[e.jsx("h2",{className:i.title,children:c}),e.jsx("h3",{className:i.subtitle,children:t}),e.jsx("p",{className:i.description,children:o}),a.map((n,p)=>e.jsx("p",{className:i.paragraph,children:n},`paragraph${p}`)),e.jsx("h3",{className:i.bulletTitle,children:m}),e.jsx("ul",{className:i.bulletList,children:s.map((n,p)=>e.jsx("li",{className:i.bullet,children:n},`bullet${p}`))})]}),e.jsxs("div",{className:i.rightWrapper,children:[e.jsx("img",{className:i.image,src:r}),h?e.jsx("a",{className:i.cta,href:u,children:h}):null]})]}),V=({professions:c})=>e.jsx("div",{className:d.wrapper,children:c.map((t,o)=>e.jsxs("div",{className:d.professionWrapper,children:[e.jsxs("div",{className:d.professionLeftWrapper,children:[e.jsx("h2",{className:d.title,children:t.title}),e.jsx("h3",{className:d.subtitle,children:t.subtitle}),t.experience.map((a,m)=>e.jsxs("div",{className:d.experienceWrapper,children:[e.jsx("h4",{className:d.experienceTitle,children:a.title}),a.descriptions.map((s,r)=>e.jsx("p",{className:d.experienceParagraph,children:s},`description${r}`))]},`experience${m}`))]}),e.jsx("div",{className:d.professionRightWrapper,children:e.jsx("img",{className:d.image,src:t.imageSrc})})]},`profession${o}`))}),$=({contacts:c})=>e.jsx("div",{className:v.wrapper,children:c.map((t,o)=>e.jsxs("a",{href:t.linkSrc,target:"_blank",className:v.anchor,children:[e.jsx("img",{src:t.imageSrc,className:v.image}),e.jsx("h2",{className:v.title,children:t.title})]},`contact${o}`))}),G=({about:c,projects:t,profession:o,contact:a})=>{const m=_.useRef(null),s=_.useRef(null),r=_.useRef(null),h=_.useRef(null);return _.useEffect(()=>{document.addEventListener("scroll",u=>{switch(u.detail){case x.Home:m.current?.scrollIntoView({behavior:"smooth"});break;case x.Projects:s.current?.scrollIntoView({behavior:"smooth"});break;case x.Profession:r.current?.scrollIntoView({behavior:"smooth"});break;case x.Contact:h.current?.scrollIntoView({behavior:"smooth"});break}})},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:m,className:R.goodAnchor}),e.jsxs("div",{className:R.wrapper,children:[e.jsx(T,{...c}),e.jsx(N,{refEle:s,titleName:"Projects"}),t.map((u,n)=>e.jsx(D,{...u},`project${n}`)),e.jsx(N,{refEle:r,titleName:"Profession"}),e.jsx(V,{...o}),e.jsx(N,{refEle:h,titleName:"Contact"}),e.jsx($,{...a})]})]})};export{C as F,G as P,W as R,l as _};
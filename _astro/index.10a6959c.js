import{R as m}from"./Portafolio.31cf20ff.js";function y(t){const r={};return e(t),Object.keys(r).join(" ");function e(s){s&&typeof s.forEach=="function"?s.forEach(e):s===Object(s)?Object.keys(s).forEach(i=>{s[i]&&e(i)}):(s=s===!1||s==null?"":String(s).trim(),s&&s.split(/\s+/).forEach(i=>{r[i]=!0}))}}class f extends String{get[Symbol.toStringTag](){return"HTMLString"}}const n=t=>t instanceof f?t:typeof t=="string"?new f(t):t,$="astro:jsx",c=Symbol("empty"),l=t=>t;function a(t){return t&&typeof t=="object"&&t[$]}function h(t){if(typeof t.type=="string")return t;const r={};if(a(t.props.children)){const e=t.props.children;if(!a(e)||!("slot"in e.props))return;const s=l(e.props.slot);r[s]=[e],r[s].$$slot=!0,delete e.props.slot,delete t.props.children}Array.isArray(t.props.children)&&(t.props.children=t.props.children.map(e=>{if(!a(e)||!("slot"in e.props))return e;const s=l(e.props.slot);return Array.isArray(r[s])?r[s].push(e):(r[s]=[e],r[s].$$slot=!0),delete e.props.slot,c}).filter(e=>e!==c)),Object.assign(t.props,r)}function b(t){return typeof t=="string"?n(t):Array.isArray(t)?t.map(r=>b(r)):t}function S(t){if("set:html"in t.props||"set:text"in t.props){if("set:html"in t.props){const r=b(t.props["set:html"]);delete t.props["set:html"],Object.assign(t.props,{children:r});return}if("set:text"in t.props){const r=t.props["set:text"];delete t.props["set:text"],Object.assign(t.props,{children:r});return}}}function T(t,r){const e={[m]:"astro:jsx",[$]:!0,type:t,props:r??{}};return S(e),h(e),e}const A=/^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i,d=/^(contenteditable|draggable|spellcheck|value)$/i,j=/^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i,x=new Set(["set:html","set:text"]),o=(t,r=!0)=>r?String(t).replace(/&/g,"&#38;").replace(/"/g,"&#34;"):t,p=t=>t.toLowerCase()===t?t:t.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`),u=t=>Object.entries(t).map(([r,e])=>r[0]!=="-"&&r[1]!=="-"?`${p(r)}:${e}`:p(r)!==r?`${p(r)}:var(${r});${r}:${e}`:`${r}:${e}`).join(";");function w(t,r,e=!0){if(t==null)return"";if(t===!1)return d.test(r)||j.test(r)?n(` ${r}="false"`):"";if(x.has(r))return console.warn(`[astro] The "${r}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${r}={value}\`) instead of the dynamic spread syntax (\`{...{ "${r}": value }}\`).`),"";if(r==="class:list"){const s=o(y(t),e);return s===""?"":n(` ${r.slice(0,-5)}="${s}"`)}if(r==="style"&&!(t instanceof f)){if(Array.isArray(t)&&t.length===2)return n(` ${r}="${o(`${u(t[0])};${t[1]}`,e)}"`);if(typeof t=="object")return n(` ${r}="${o(u(t),e)}"`)}return r==="className"?n(` class="${o(t,e)}"`):t===!0&&(r.startsWith("data-")||A.test(r))?n(` ${r}`):n(` ${r}="${o(t,e)}"`)}function R(t={},r,{class:e}={}){let s="";e&&(typeof t.class<"u"?t.class+=` ${e}`:typeof t["class:list"]<"u"?t["class:list"]=[t["class:list"],e]:t.class=e);for(const[i,g]of Object.entries(t))s+=w(g,i,!0);return n(s)}export{T as c,R as s};
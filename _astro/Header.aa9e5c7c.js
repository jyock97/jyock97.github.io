import{r as m}from"./index.ed373d49.js";import{c as s}from"./index.5d28df72.b86d7c27.js";var u={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=m,j=Symbol.for("react.element"),h=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,P=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N={key:!0,ref:!0,__self:!0,__source:!0};function _(t,e,p){var o,n={},i=null,d=null;p!==void 0&&(i=""+p),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(d=e.ref);for(o in e)v.call(e,o)&&!N.hasOwnProperty(o)&&(n[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)n[o]===void 0&&(n[o]=e[o]);return{$$typeof:j,type:t,key:i,ref:d,props:n,_owner:P.current}}c.Fragment=h;c.jsx=_;c.jsxs=_;u.exports=c;var r=u.exports;const f=["/JPY_01.png","/JPY_03.png","/JPY_05.png","/JPY_07.png"],a={Home:"scroll::Home",Projects:"scroll::Projects",Profession:"scroll::Profession",Contact:"scroll::Contact"},l=t=>{const e=new CustomEvent("scroll",{detail:t});document?.dispatchEvent(e)},y=()=>{const[t,e]=m.useState(f[0]);return m.useEffect(()=>{e(f[Math.floor(Math.random()*4)])},[]),r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:s.wrapper,children:[r.jsxs("button",{className:s.homeWrapper,onClick:()=>l(a.Home),children:[r.jsx("img",{className:s.homeWrapper_img,src:t}),r.jsxs("div",{children:[r.jsx("h1",{className:s.homeWrapper_title,children:"Jose Yock"}),r.jsx("h2",{className:s.homeWrapper_subtitle,children:"Indie Game Developer"})]})]}),r.jsx("button",{onClick:()=>l(a.Projects),className:s.button,children:"Projects"}),r.jsx("div",{className:s.separator}),r.jsx("button",{onClick:()=>l(a.Profession),className:s.button,children:"Profession"}),r.jsx("div",{className:s.separator}),r.jsx("button",{onClick:()=>l(a.Contact),className:s.button,children:"Contact"})]}),r.jsx("div",{className:s.wrapperOffset})]})};export{a as H,y as a,r as j};

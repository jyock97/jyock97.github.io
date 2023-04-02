import{r as u}from"./index.45a47ed6.js";var o={},_={get exports(){return o},set exports(r){o=r}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=u,a=Symbol.for("react.element"),x=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,m=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function p(r,e,f){var t,n={},l=null,i=null;f!==void 0&&(l=""+f),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(i=e.ref);for(t in e)d.call(e,t)&&!y.hasOwnProperty(t)&&(n[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)n[t]===void 0&&(n[t]=e[t]);return{$$typeof:a,type:r,key:l,ref:i,props:n,_owner:m.current}}s.Fragment=x;s.jsx=p;s.jsxs=p;(function(r){r.exports=s})(_);const b=()=>{const[r,e]=u.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:()=>e(!r),children:"Test"}),r?o.jsx("div",{children:"Test"}):null]})};export{b as default};

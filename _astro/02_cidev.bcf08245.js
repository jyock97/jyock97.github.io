import{c as s,s as i}from"./index.183b0330.js";import{F as a}from"./Portafolio.f319f98f.js";import"./index.ed373d49.js";import"./Header.c7f97fdc.js";import"./index.5d28df72.0361e2d8.js";const o={};function c(n){return n.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(e,t)=>i({src:o[t].src,...o[t].attributes}))}const r=c(""),m={title:"CIDeV",subtitle:"(Comunidad Interuniversitaria de Desarrollo de Videojuegos)",description:"Co-Founder and Mentor",paragraphs:["Found this community alongside other peers when I was at the University","Is one of the biggest developer communities in Costa Rica","One of this community goals is to help students to know better about game development and the industry"],bulletsTitle:"What I do:",bulletsContent:["Mentor on GameJams, help teams with any Game Design and Programming question. Engines: Unity, Godot, Unreal.","Producer for Teams, help teams manage their scope of projects, milestones, and deliverables."],imageSrc:"/CIDeV.gif",ctaName:"Know more about CIDeV",cta:"http://www.cidev-cr.com/"},u="/home/runner/work/jyock97.github.io.source/jyock97.github.io.source/src/content/projects/02_cidev.md",d=void 0;function y(){return""}function w(){return r}function C(){return[]}async function l(){const{layout:n,...e}=m;return e.file=u,e.url=d,s(a,{"set:html":r})}l[Symbol.for("astro.needsHeadRendering")]=!0;export{l as Content,w as compiledContent,l as default,u as file,m as frontmatter,C as getHeadings,o as images,y as rawContent,d as url};
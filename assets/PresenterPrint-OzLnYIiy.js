import{d,a0 as _,a1 as h,h as m,g as p,W as u,o as a,b as n,e as t,Z as s,a as l,F as f,S as g,A as v,E as x,a2 as y,j as b,k,f as w,_ as N}from"./index-hlP8xfms.js";import{N as P}from"./NoteDisplay-2egsjygG.js";const S={class:"m-4"},V={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},A=d({__name:"PresenterPrint",setup(C){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const i=p(()=>u.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(a(),n("div",{id:"page-root",style:v(l(x))},[t("div",S,[t("div",V,[t("h1",L,s(l(m).title),1),t("div",T,s(new Date().toLocaleString()),1)]),(a(!0),n(f,null,g(i.value,(e,c)=>(a(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,s(e==null?void 0:e.no)+"/"+s(l(y)),1),b(" "+s(e==null?void 0:e.title)+" ",1),j])]),k(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(a(),n("hr",z)):w("v-if",!0)]))),128))])],4))}}),M=N(A,[["__file","/home/runner/work/node-test-runner-workshop/node-test-runner-workshop/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{M as default};

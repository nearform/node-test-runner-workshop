import{d as _,$ as u,y as h,b as a,e as t,x as s,A as c,F as f,Z as v,o as n,a0 as g,l as x,g as b}from"../modules/vue-BosWmjqO.js";import{u as k,j as y,c as m,b as N}from"../index-ClPanYpS.js";import{N as w}from"./NoteDisplay-DlpUjN6v.js";import"../modules/shiki-BOWrjQ1j.js";const L={id:"page-root"},T={class:"m-4"},V={class:"mb-10"},B={class:"text-4xl font-bold mt-2"},D={class:"opacity-50"},H={class:"text-lg"},S={class:"font-bold flex gap-2"},j={class:"opacity-50"},A=t("div",{class:"flex-auto"},null,-1),C={key:0,class:"border-main mb-8"},F=_({__name:"print",setup(M){const{slides:p,total:d}=k();u(`
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
`),y({title:`Notes - ${m.title}`});const l=h(()=>p.value.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(n(),a("div",L,[t("div",T,[t("div",V,[t("h1",B,s(c(m).title),1),t("div",D,s(new Date().toLocaleString()),1)]),(n(!0),a(f,null,v(l.value,(e,i)=>(n(),a("div",{key:i,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",H,[t("div",S,[t("div",j,s(e==null?void 0:e.no)+"/"+s(c(d)),1),g(" "+s(e==null?void 0:e.title)+" ",1),A])]),x(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),i<l.value.length-1?(n(),a("hr",C)):b("v-if",!0)]))),128))])]))}}),Z=N(F,[["__file","/home/runner/work/node-test-runner-workshop/node-test-runner-workshop/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{Z as default};

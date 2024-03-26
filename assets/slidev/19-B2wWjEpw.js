import{o as l,c as o,k as n,q as r,s as i,A as s,e,a0 as t}from"../modules/vue-CG2MA2Il.js";import{I as c}from"./default-6kn7dy8J.js";import{b as u,U as a}from"../index-jLVCiAPI.js";import{p as d,u as m,f as p}from"./context-vEMjG3g4.js";import"../modules/shiki-HjOJiBtT.js";const f=e("h1",null,"A03 Parallel testing",-1),_=e("div",{class:"dense"},[e("ul",null,[e("li",null,"Running tests in parallel can drastically reduce the time needed to execute extensive test suites, especially beneficial for long-running tests."),e("li",null,[t("Use "),e("code",null,'node -e "console.log(os.availableParallelism())"'),t(" to determine the maximum number of concurrent tasks supported, guiding the optimal setting for "),e("code",null,"--test-concurrency"),t(".")]),e("li",null,[t("Node.js defaults to "),e("code",null,"os.availableParallelism() - 1"),t(" for parallel test execution, leaving one CPU core free. Increasing "),e("code",null,"--test-concurrency"),t(" can further speed up testing, depending on the workload and system capabilities.")]),e("li",null,"Tests involving heavy computations see the most benefit from parallel execution, making efficient use of available hardware resources.")])],-1),g={__name:"19",setup(h){return d(a),m(),(v,x)=>(l(),o(c,r(i(s(p)(s(a),18))),{default:n(()=>[f,_]),_:1},16))}},B=u(g,[["__file","/@slidev/slides/19.md"]]);export{B as default};

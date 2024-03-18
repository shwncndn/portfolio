import{s as q,n as T,d as H,e as W,u as C,g as R,f as X,r as Y,c as B}from"../chunks/scheduler.CPORa_ZC.js";import{S as L,i as O,e as v,c as w,a as b,d as _,l as p,g as D,h as g,z as F,t as G,s as j,b as J,f as z,A,p as y,q as x,v as K,m as M,n as N,o as Q,r as U,x as Z}from"../chunks/index.i4RGhbyw.js";import{e as I}from"../chunks/each.D6YF6ztN.js";import{p as ee}from"../chunks/stores.miOSFbqO.js";function S(a,e,s){const o=a.slice();return o[1]=e[s],o[3]=s,o}function V(a){let e,s,o=a[1].name+"",t,n;return{c(){e=v("a"),s=v("p"),t=G(o),n=j(),this.h()},l(r){e=w(r,"A",{href:!0,class:!0});var l=b(e);s=w(l,"P",{});var f=b(s);t=J(f,o),f.forEach(_),n=z(l),l.forEach(_),this.h()},h(){p(e,"href",a[1].link),p(e,"class","duration-200 hover:text-violet-400")},m(r,l){D(r,e,l),g(e,s),g(s,t),g(e,n)},p:T,d(r){r&&_(e)}}}function te(a){let e,s,o=I(a[0]),t=[];for(let n=0;n<o.length;n+=1)t[n]=V(S(a,o,n));return{c(){e=v("header"),s=v("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=w(n,"HEADER",{class:!0});var r=b(e);s=w(r,"DIV",{class:!0});var l=b(s);for(let f=0;f<t.length;f+=1)t[f].l(l);l.forEach(_),r.forEach(_),this.h()},h(){p(s,"class","sm:flex items-center gap-4 hidden"),p(e,"class","sticky z-[10] top-0 duration-200 px-6 flex justify-between")},m(n,r){D(n,e,r),g(e,s);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(s,null)},p(n,[r]){if(r&1){o=I(n[0]);let l;for(l=0;l<o.length;l+=1){const f=S(n,o,l);t[l]?t[l].p(f,r):(t[l]=V(f),t[l].c(),t[l].m(s,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=o.length}},i:T,o:T,d(n){n&&_(e),F(t,n)}}}function le(a){return[[{name:"Tuner",link:"/projects/tuner"},{name:"SoundLift",link:"/projects/soundlift"},{name:"Tonex",link:"/projects/tonex"}]]}class ne extends L{constructor(e){super(),O(this,e,le,te,q,{})}}function $(a){let e,s;return e=new ne({}),{c(){M(e.$$.fragment)},l(o){N(e.$$.fragment,o)},m(o,t){Q(e,o,t),s=!0},i(o){s||(y(e.$$.fragment,o),s=!0)},o(o){x(e.$$.fragment,o),s=!1},d(o){U(e,o)}}}function se(a){let e=!1,s=()=>{e=!1},o,t,n,r,l,f,d,k,h;H(a[6]),H(a[7]);let i=a[3].url.pathname!=="/"&&$();const E=a[5].default,m=W(E,a,a[4],null);return{c(){t=v("div"),n=v("div"),l=j(),i&&i.c(),f=j(),m&&m.c(),this.h()},l(c){t=w(c,"DIV",{class:!0});var u=b(t);n=w(u,"DIV",{class:!0});var P=b(n);P.forEach(_),l=z(u),i&&i.l(u),f=z(u),m&&m.l(u),u.forEach(_),this.h()},h(){p(n,"class",r="fixed bottom-0 w-full duration-200 flex p-10 z-[10] "+(a[0]>0?"opacity-full pointer-events-auto":"pointer-events-none opacity-0")),p(t,"class","relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen")},m(c,u){D(c,t,u),g(t,n),g(t,l),i&&i.m(t,null),g(t,f),m&&m.m(t,null),d=!0,k||(h=[A(window,"scroll",()=>{e=!0,clearTimeout(o),o=setTimeout(s,100),a[6]()}),A(window,"resize",a[7])],k=!0)},p(c,[u]){u&1&&!e&&(e=!0,clearTimeout(o),scrollTo(window.pageXOffset,c[0]),o=setTimeout(s,100)),(!d||u&1&&r!==(r="fixed bottom-0 w-full duration-200 flex p-10 z-[10] "+(c[0]>0?"opacity-full pointer-events-auto":"pointer-events-none opacity-0")))&&p(n,"class",r),c[3].url.pathname!=="/"?i?u&8&&y(i,1):(i=$(),i.c(),y(i,1),i.m(t,f)):i&&(Z(),x(i,1,1,()=>{i=null}),K()),m&&m.p&&(!d||u&16)&&C(m,E,c,c[4],d?X(E,c[4],u,null):R(c[4]),null)},i(c){d||(y(i),y(m,c),d=!0)},o(c){x(i),x(m,c),d=!1},d(c){c&&_(t),i&&i.d(),m&&m.d(c),k=!1,Y(h)}}}function oe(a,e,s){let o;B(a,ee,h=>s(3,o=h));let{$$slots:t={},$$scope:n}=e,{y:r}=e,l=0,f=0;function d(){s(0,r=window.pageYOffset)}function k(){s(1,l=window.innerHeight),s(2,f=window.innerWidth)}return a.$$set=h=>{"y"in h&&s(0,r=h.y),"$$scope"in h&&s(4,n=h.$$scope)},[r,l,f,o,n,t,d,k]}class fe extends L{constructor(e){super(),O(this,e,oe,se,q,{y:0})}}export{fe as component};

(this.webpackJsonppokewiz=this.webpackJsonppokewiz||[]).push([[0],{49:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(38),s=n.n(r),i=(n(49),n(17)),o=n(5),j=n(92),l=n(8),d=n.n(l),u=n(15),b=n(16),p=n(21),x=n.n(p),h=n(89),m=n(90),O=n(94),f=n(2),v=function(e){var t=e.pokemon;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(O.a,{className:"".concat(t.types[0].type.name," my-3 p-3 rounded text-center shadow p-3 mb-3 rounded"),style:{border:"none"},children:[Object(f.jsx)(i.Link,{to:"/pokewiz/pokemon/".concat(t.id,"/"),children:Object(f.jsx)(O.a.Img,{style:{width:"8rem"},src:t.sprites.other.home.front_default,variant:"top"})}),Object(f.jsx)(O.a.Body,{className:"".concat(t.types[0].type.name," rounded text-white"),children:Object(f.jsx)(i.Link,{to:"/pokewiz/pokemon/".concat(t.name,"/"),className:"link-name",children:Object(f.jsx)(O.a.Title,{as:"div",children:Object(f.jsxs)("strong",{children:[t.id,". ",t.name.charAt(0).toUpperCase()+t.name.slice(1)," "]})})})})]})})},k=n(91),y=function(){return Object(f.jsxs)("div",{className:"d-flex justify-content-center mt-5",style:{height:"100vh"},children:[Object(f.jsx)(h.a,{children:Object(f.jsx)(m.a,{children:Object(f.jsx)(k.a,{className:"spinner-border  spinner-border-lg",role:"status",style:{height:"5vh",width:"5vh"}})})}),Object(f.jsx)(h.a,{children:Object(f.jsx)(m.a,{children:Object(f.jsx)("div",{className:"mx-3",children:" Fetching Pokemon..."})})})]})},g=n(95);function w(e){var t=e.gotoNextPage,n=e.gotoPrevPage;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"w-100 justify-content-between d-flex",children:[n&&Object(f.jsx)(g.a,{onClick:n,className:"my-4",children:"Previous"}),t&&Object(f.jsx)(g.a,{onClick:t,className:"my-4",children:"Next"})]})})}var N=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!0),s=Object(b.a)(r,2),i=s[0],o=s[1],j=Object(c.useState)(),l=Object(b.a)(j,2),p=l[0],O=l[1],k=Object(c.useState)(1),g=Object(b.a)(k,2),N=g[0],P=g[1],z=[];console.log(898);var C=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=1;case 1:if(!(t<7)){e.next=10;break}return e.t0=z,e.next=5,S(t);case 5:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 7:t++,e.next=1;break;case 10:a(z),o(!1),O(7),P(1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){C()}),[]);var F=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(!0),t=p;case 2:if(!(t<p+6)){e.next=11;break}return e.t0=z,e.next=6,S(t);case 6:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 8:t++,e.next=2;break;case 11:a(z),o(!1),P(p-6),O(p+6==898?p:p+6);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(!0),t=N;case 2:if(!(t<N+6)){e.next=11;break}return e.t0=z,e.next=6,S(t);case 6:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 8:t++,e.next=2;break;case 11:a(z),o(!1),P(1==N?N:N-6),O(N+6),console.log(p),console.log(N);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[i?Object(f.jsx)(y,{}):Object(f.jsx)(h.a,{children:n.map((function(e){return Object(f.jsx)(m.a,{xs:12,sm:12,md:4,lg:4,xl:4,children:Object(f.jsx)(v,{pokemon:e.data})},e.data.name)}))}),Object(f.jsx)(w,{gotoNextPage:F,gotoPrevPage:U})]})},P=n(96),z=function(e){var t=e.match,n=Object(c.useState)(),a=Object(b.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(!0),o=Object(b.a)(i,2),j=o[0],l=o[1],p=t.params.id,v=function(){var e=Object(u.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:n=e.sent,s(n.data),l(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){v(p)}),[]),Object(f.jsx)(f.Fragment,{children:j?Object(f.jsx)(y,{}):Object(f.jsx)(h.a,{children:Object(f.jsx)(m.a,{xs:12,sm:12,md:12,lg:12,xl:12,children:Object(f.jsx)(O.a,{className:"rounded text-center shadow p-1 m-3 bg-white",style:{border:"none"},children:Object(f.jsxs)(O.a.Body,{className:"rounded text-black font-weight-bold",children:[Object(f.jsx)(O.a.Img,{style:{width:"15rem"},src:r.sprites.other.home.front_default,variant:"top"}),Object(f.jsx)(O.a.Title,{as:"div",children:Object(f.jsxs)("strong",{children:["#",r.id," ",r.name.charAt(0).toUpperCase()+r.name.slice(1)]})}),Object(f.jsxs)(O.a.Text,{children:[Object(f.jsx)(h.a,{children:r.types.map((function(e){return Object(f.jsx)(m.a,{children:Object(f.jsx)("div",{className:"".concat(r.types[0].type.name," rounded px-4 py-1"),style:{color:"white"},children:e.type.name.toUpperCase()})},e.type.name)}))}),Object(f.jsx)(h.a,{className:"mt-4",children:Object(f.jsx)(m.a,{xs:12,sm:12,md:12,lg:12,xl:12,children:Object(f.jsx)("div",{className:"px-4 py-1 rounded",style:{border:"1px black solid"},children:"Abilities"})})}),Object(f.jsx)(h.a,{className:"text-center",children:r.abilities.map((function(e){return Object(f.jsx)(m.a,{xs:6,sm:6,md:6,lg:6,xl:6,children:Object(f.jsx)(h.a,{className:"rounded px-4 py-1",children:e.ability.name.toUpperCase()})},e.ability.name)}))}),Object(f.jsx)(h.a,{children:Object(f.jsx)(m.a,{xs:12,sm:12,md:12,lg:12,xl:12,children:Object(f.jsx)("div",{className:"px-4 py-1 rounded",style:{border:"1px black solid"},children:"Stats"})})}),Object(f.jsx)(h.a,{children:r.stats.map((function(e){return Object(f.jsx)(m.a,{xs:12,sm:12,md:6,lg:6,xl:6,children:Object(f.jsxs)("div",{className:"rounded px-4 py-1",children:[Object(f.jsxs)(m.a,{children:[" ",e.stat.name.toUpperCase()]}),Object(f.jsxs)(m.a,{children:[" ",Object(f.jsx)(P.a,{animated:!0,variant:"success",striped:!0,now:"".concat(e.base_stat),label:"".concat(e.base_stat,"%")})," "]})]})},e.stat.name)}))})]})]})})})})})},C=n(40),S=n(93),F=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(S.a,{position:"static",color:"primary",className:"p-2",children:Object(f.jsx)(j.a,{children:Object(f.jsx)(C.LinkContainer,{to:"/pokewiz/",children:Object(f.jsx)("h1",{children:"PokeWiz"})})})})})},U=function(){return Object(f.jsxs)(i.HashRouter,{children:[Object(f.jsx)(F,{}),Object(f.jsxs)(j.a,{children:[Object(f.jsx)(o.d,{exact:!0,path:"/pokewiz/",component:N}),Object(f.jsx)(o.d,{path:"/pokewiz/pokemon/:id/",component:z})]})]})};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(U,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.d1273a57.chunk.js.map
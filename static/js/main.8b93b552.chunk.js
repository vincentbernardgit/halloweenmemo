(this.webpackJsonphalloweenmemo=this.webpackJsonphalloweenmemo||[]).push([[0],[,,,,,,,,,,function(e,c,t){},function(e,c,t){},,function(e,c,t){},function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),a=t(5),r=t.n(a),i=(t(10),t(3)),d=t(2),l=(t(11),t(0));function u(e){var c=e.card,t=e.handleChoice,s=e.flipped,n=e.disabled;return Object(l.jsx)("div",{className:"card",children:Object(l.jsxs)("div",{className:s?"flipped":"",children:[Object(l.jsx)("img",{className:"front",src:c.src,alt:"card front"}),Object(l.jsx)("img",{className:"back",src:"assets/33.png",onClick:function(){n||t(c)},alt:"card back"})]})})}t(13);var o=[{src:"assets/4.png",matched:!1},{src:"assets/5.png",matched:!1},{src:"assets/13.png",matched:!1},{src:"assets/14.png",matched:!1},{src:"assets/15.png",matched:!1},{src:"assets/16.png",matched:!1},{src:"assets/17.png",matched:!1},{src:"assets/18.png",matched:!1},{src:"assets/38.png",matched:!1},{src:"assets/39.png",matched:!1}];var j=function(){var e=Object(s.useState)([]),c=Object(d.a)(e,2),t=c[0],n=c[1],a=Object(s.useState)(0),r=Object(d.a)(a,2),j=r[0],b=r[1],m=Object(s.useState)(null),h=Object(d.a)(m,2),O=h[0],f=h[1],p=Object(s.useState)(null),g=Object(d.a)(p,2),x=g[0],v=g[1],N=Object(s.useState)(!1),k=Object(d.a)(N,2),w=k[0],S=k[1],C=function(){var e=[].concat(o,o).sort((function(){return Math.random()-.5})).map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:Math.random()})}));f(null),v(null),n(e),b(0)},M=function(e){O?v(e):f(e)};Object(s.useEffect)((function(){O&&x&&(S(!0),O.src===x.src?(n((function(e){return e.map((function(e){return e.src===O.src?Object(i.a)(Object(i.a)({},e),{},{matched:!0}):e}))})),E()):setTimeout((function(){return E()}),1e3))}),[O,x]),console.log(t);var E=function(){f(null),v(null),b((function(e){return e+1})),S(!1)};return Object(s.useEffect)((function(){C()}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Halloween Memo"}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"card-grid",children:t.map((function(e){return Object(l.jsx)("div",{className:"card",children:Object(l.jsx)(u,{handleChoice:M,card:e,flipped:e===O||e===x||e.matched,disabled:w},e.id)},e.id)}))}),Object(l.jsxs)("div",{className:"menu",children:[Object(l.jsx)("button",{onClick:C,children:"New Game"}),Object(l.jsxs)("p",{children:["Turns: ",j]})]})]})]})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.8b93b552.chunk.js.map
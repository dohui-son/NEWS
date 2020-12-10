(this["webpackJsonpnews-viewer"]=this["webpackJsonpnews-viewer"]||[]).push([[0],{42:function(n,e,t){},65:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t(0),c=t(31),i=t.n(c),o=(t(42),t(2)),s=t(8),l=t(9),u=t(13);function m(){var n=Object(s.a)(["\n  font-size: 1.125rem;\n  cursor: pointer;\n  white-space: pre;\n  text-decoration: none;\n  color: inherit;\n  padding-bottom: 0.25rem;\n  margin-left:1rem;\n\n  &:hover{color: #495057;}\n \n\n\n&.active {\n    font-weight: 600;\n    border-bottom:2 px solid #22b8cf;\n    color:#22b8cf;\n    &:hover{\n      color: #3bc9db;\n    }\n  }\n  & + & {\n    margin-left: 1 rem;\n  }\n"]);return m=function(){return n},n}function b(){var n=Object(s.a)(["\n  display: flex;\n  padding: 1rem;\n  width: 768px;\n  margin : 0 auto;\n  @media screen and (max-width:768px){\n    width: 100%;\n    overflow-x: auto;\n  }\n"]);return b=function(){return n},n}var d=[{name:"all",text:"HOME"},{name:"business",text:"BUSINESS"},{name:"entertainment",text:"ENTERTAINMENT"},{name:"health",text:"HEALTH"},{name:"science",text:"SCIENCE"},{name:"sports",text:"SPORTS"},{name:"technology",text:"TECHNOLOGY"}],h=l.a.div(b()),j=Object(l.a)(u.b)(m()),p=function(){return Object(r.jsx)(h,{children:d.map((function(n){return Object(r.jsx)(j,{activeClassName:"active",exact:"all"===n.name,to:"all"===n.name?"/":"/".concat(n.name),children:n.text},n.name)}))})},x=t(11);function f(){var n=Object(s.a)(["\ndisplay: flex;\n  .thumbnail{\n    margin-right: 1rem;\n    img{\n      //margin-top: 10;\n      display: block;\n      width: 160px;\n      height: 100px;\n      object-fit: cover;\n  }\n}\n  .contents{\n  h2{\n    //margin-top: 10;\n    margin: 0;\n    a{ color: black; }\n  }\n  p{\n    margin: 0;\n    line-height: 1.5;\n    margin-top: 0.5rem;\n    white-space: normal;\n  }\n}\n  & +& { \n    margin-top: 3rem; \n    }\n"]);return f=function(){return n},n}var g=l.a.div(f()),O=function(n){var e=n.article,t=e.title,a=e.description,c=e.url,i=e.urlToImage;return Object(r.jsxs)(g,{children:[i&&Object(r.jsx)("div",{className:"thumbnail",children:Object(r.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("img",{src:i,alt:"thumbnail"})})}),Object(r.jsxs)("div",{className:"contents",children:[Object(r.jsx)("h2",{children:Object(r.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:t})}),Object(r.jsx)("p",{children:a})]})]})},v=t(35),w=t.n(v),y=t(20),E=t.n(y),N=t(36);function S(){var n=Object(s.a)(["\n  box-sizing: border-box;\n  padding-bottom: 6rem;\n  width: 768px;\n  margin: 0 auto;\n  margin-top: 4rem;\n  @media screen and(max-width: 768px){\n    width: 100%;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    //margin-top:2rem;\n  }\n"]);return S=function(){return n},n}var k=l.a.div(S()),T=function(n){var e=n.category,t=function(n,e){var t=Object(a.useState)(!1),r=Object(x.a)(t,2),c=r[0],i=r[1],o=Object(a.useState)(null),s=Object(x.a)(o,2),l=s[0],u=s[1],m=Object(a.useState)(null),b=Object(x.a)(m,2),d=b[0],h=b[1];return Object(a.useEffect)((function(){!function(){var e=Object(N.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,n();case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),h(e.t0);case 11:i(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}()()}),e),[c,l,d]}((function(){var n="all"===e?"":"&category=".concat(e);return w.a.get("https://newsapi.org/v2/top-headlines?country=us".concat(n,"&apiKey=10d42cc40f96409bb613b2b1cdccb5bc"))}),[e]),c=Object(x.a)(t,3),i=c[0],o=c[1],s=c[2];if(i)return Object(r.jsx)(k,{children:" waiting ... "});if(!o)return null;if(s)return Object(r.jsx)(k,{children:" ERROR OCCURED !!! "});var l=o.data.articles;return Object(r.jsx)(k,{children:l.map((function(n){return Object(r.jsx)(O,{article:n},n.url)}))})},C=function(n){var e=n.match.params.category||"all";return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p,{}),Object(r.jsx)(T,{category:e})]})},R=function(){return Object(r.jsx)(o.a,{path:"/:category?",component:C})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(r.jsx)(u.a,{children:Object(r.jsx)(R,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.32459978.chunk.js.map
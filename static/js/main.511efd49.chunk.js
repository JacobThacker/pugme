(this.webpackJsonppugme=this.webpackJsonppugme||[]).push([[0],{20:function(e,t,n){"use strict";var c=n(1),i=n(0),l=n(16),a=n(27),s=n(3),r=n(13),j=Object({NODE_ENV:"production",PUBLIC_URL:"/pugme",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),o=j.NODE_ENV,b=j.REACT_APP_GA_TRACKING_ID;"production"===o&&r.a.initialize(b);var u=function(){var e=Object(s.f)().pathname;return Object(i.useEffect)((function(){"production"===o&&(r.a.set({page:e}),r.a.pageview(e))}),[e]),null},d=n(5),h=n(23),O=[{index:!0,label:"PugMe.co.nz",path:"/"},{label:"Pugs",path:"/pugs"},{label:"Store",path:"/store"},{label:"Contact",path:"/contact"}],x=Object(i.lazy)((function(){return n.e(3).then(n.t.bind(null,63,7))})),m=function(){var e=Object(i.useState)(!1),t=Object(h.a)(e,2),n=t[0],l=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(x,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:O.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:e.path,onClick:function(){return l(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},p=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:O.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(d.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:O.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},f=n(24),g=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(d.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("/pugme","/images/KingPug.jpeg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h3",{children:"Welcome to PugMe.co.nz"}),Object(c.jsx)("p",{children:"New Zealands Premier Pug Website"})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsx)("p",{children:"Welcome to PugMe.co.nz we aim to connect people with pictures of Pugs and Pug paraphernalia"}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/contact")?Object(c.jsx)(d.b,{to:"/",className:"button",children:"Home"}):Object(c.jsx)(d.b,{to:"/contact",className:"button",children:"Contact"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(f.a,{}),Object(c.jsx)("p",{className:"copyright",children:"\xa9 Jake Thacker 2021."})]})]})},k=function(){var e=Object(s.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},N=function(e){return Object(c.jsxs)(l.b,{children:[Object(c.jsx)(a.Widget,{}),Object(c.jsx)(u,{}),Object(c.jsx)(k,{}),Object(c.jsxs)(l.a,{titleTemplate:"%s | PugMe",defaultTitle:"PugMe",children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(p,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(g,{})]})]})};N.defaultProps={children:null,fullPage:!1,title:null,description:"PugMe.co.nz"};t.a=N},24:function(e,t,n){"use strict";var c=n(1),i=(n(0),n(29)),l=n(30),a=n(31),s=n(32),r=n(33),j=[{link:"https://github.com/JacobThacker",label:"Github",icon:l.faGithub},{link:"https://www.facebook.com/jake.thacker2/",label:"Facebook",icon:a.faFacebookF},{link:"https://www.linkedin.com/in/jake-thacker/",label:"LinkedIn",icon:s.faLinkedinIn},{link:"mailto:jakethacker80@gmail.com",label:"Email",icon:r.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:j.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),l=n.n(i),a=n(12),s=n(5),r=n(3),j=n(20),o=(n(51),Object(i.lazy)((function(){return n.e(6).then(n.bind(null,64))}))),b=Object(i.lazy)((function(){return n.e(4).then(n.bind(null,60))})),u=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,61))})),d=Object(i.lazy)((function(){return n.e(5).then(n.bind(null,62))})),h=function(){return Object(c.jsx)(s.a,{basename:"/pugme",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:b}),Object(c.jsx)(r.a,{path:"/contact",component:o}),Object(c.jsx)(r.a,{path:"/pugs",component:d}),Object(c.jsx)(r.a,{component:u,status:404})]})})})},O=function(){return Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(h,{})})},x=document.getElementById("root");x.hasChildNodes()?Object(a.hydrate)(Object(c.jsx)(O,{}),x):Object(a.render)(Object(c.jsx)(O,{}),x)}},[[52,1,2]]]);
//# sourceMappingURL=main.511efd49.chunk.js.map
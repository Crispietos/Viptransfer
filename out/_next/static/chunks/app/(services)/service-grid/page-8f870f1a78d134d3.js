(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4309],{13142:function(e,t,i){Promise.resolve().then(i.bind(i,1419)),Promise.resolve().then(i.bind(i,42551)),Promise.resolve().then(i.bind(i,64326)),Promise.resolve().then(i.t.bind(i,65878,23)),Promise.resolve().then(i.t.bind(i,72972,23))},1419:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return l}});var n=i(57437),s=i(2265);function l(){let[e,t]=(0,s.useState)(1);return(0,n.jsxs)("ul",{className:"pagination",children:[(0,n.jsx)("li",{className:"page-item",children:(0,n.jsx)("a",{className:"page-link page-prev cursor-pointer",onClick:()=>t(e=>e>1?e-1:e),children:(0,n.jsx)("svg",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})})})}),[1,2,3].map((i,s)=>(0,n.jsx)("li",{className:"page-item",children:(0,n.jsx)("a",{onClick:()=>t(i),className:"page-link cursor-pointer ".concat(i==e?"active":""),children:i})},s))," ",e>4&&e<10&&(0,n.jsx)("li",{className:"page-item",children:(0,n.jsx)("a",{className:"page-link",href:"#",children:"..."})}),e>3&&e<10&&(0,n.jsx)("li",{className:"page-item cursor-pointer",children:(0,n.jsx)("a",{className:"page-link cursor-pointer active",children:e})}),9!=e&&(0,n.jsx)("li",{className:"page-item",children:(0,n.jsx)("a",{className:"page-link",href:"#",children:"..."})}),(0,n.jsx)("li",{onClick:()=>t(()=>10),className:"page-item cursor-pointer",children:(0,n.jsx)("a",{className:"page-link cursor-pointer ".concat(10==e?"active":""),children:"10"})}),(0,n.jsx)("li",{className:"page-item cursor-pointer",onClick:()=>t(e=>e<10?e+1:e),children:(0,n.jsx)("a",{className:"page-link page-next",children:(0,n.jsx)("svg",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})})})})]})}},42551:function(e,t,i){"use strict";i.d(t,{default:function(){return c}});var n=i(57437),s=i(2265),l=i(11232),a=i(33145),r=i(27648);function c(){let[e,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=()=>{t(window.scrollY>200)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,n.jsx)("header",{className:"header sticky-bar ".concat(e?"stick":""),children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center py-2",style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"40px",marginBottom:"10px"},children:[(0,n.jsxs)("div",{className:"flex items-center gap-8",style:{display:"flex",alignItems:"center",gap:"15px"},children:[(0,n.jsx)("a",{className:"text-14-medium call-phone text-white hover-up flex items-center gap-3",href:"tel:+353876899968",style:{display:"flex",alignItems:"center",gap:"8px"},children:"+353 876 899 968"}),(0,n.jsxs)(r.default,{className:"text-14-medium text-white hover-up flex items-center gap-3",href:"mailto:info@viptransfer.ie",style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,n.jsx)("i",{className:"fas fa-envelope text-white text-lg"}),"info@viptransfer.ie"]})]}),(0,n.jsxs)("div",{className:"flex items-center gap-8",style:{display:"flex",alignItems:"center",gap:"15px"},children:[(0,n.jsx)(r.default,{href:"https://www.facebook.com/viptransferireland",target:"_blank",rel:"noopener noreferrer",className:"hover-up flex items-center",children:(0,n.jsx)("i",{className:"fab fa-facebook-f text-white text-lg"})}),(0,n.jsx)(r.default,{href:"https://www.instagram.com/viptransfer_ireland/",target:"_blank",rel:"noopener noreferrer",className:"hover-up flex items-center",children:(0,n.jsx)("i",{className:"fab fa-instagram text-white text-lg"})})]})]}),(0,n.jsxs)("div",{className:"main-header flex justify-between items-center",style:{flexWrap:"nowrap",marginTop:"5px"},children:[(0,n.jsx)("div",{className:"header-logo flex-shrink-0",children:(0,n.jsx)(r.default,{className:"d-flex",href:"/",children:(0,n.jsx)(a.default,{width:150,height:19,alt:"luxride",src:"/assets/imgs/template/logo.webp",style:{height:"fit-content"}})})}),(0,n.jsx)("div",{className:"header-nav flex-grow",children:(0,n.jsx)("nav",{className:"nav-main-menu",children:(0,n.jsx)("ul",{className:"main-menu flex justify-center",style:{gap:"20px"},children:(0,n.jsx)(l.Z,{})})})})]})]})})}i(3185)},64326:function(e,t,i){"use strict";i.d(t,{default:function(){return o}});var n=i(57437),s=i(2265),l=i(99659),a=i(27648),r=i(99376);function c(){let e=(0,r.usePathname)(),[t,i]=(0,s.useState)(-1);return(0,n.jsxs)(n.Fragment,{children:[l.p.map((s,l)=>{var r;return(0,n.jsxs)("li",{className:"has-children ".concat(s.subMenu?"has-submenu":""),children:[(0,n.jsxs)("a",{onClick:()=>s.subMenu&&i(e=>e===l?-1:l),className:"active mobileMenuParent ".concat((null===(r=s.subMenu)||void 0===r?void 0:r.some(t=>e.split("/")[1]===t.link.split("/")[1]))?"active-link":""," ").concat(t===l?"parent-open":""),children:[(0,n.jsx)("span",{children:s.title}),s.subMenu&&(0,n.jsx)("span",{className:"menu-expand",children:(0,n.jsx)("svg",{className:"w-6 h-6 icon-16",viewBox:"0 0 16 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M15.7911 1.0474C15.5023 0.741097 15.0192 0.729691 14.7145 1.01768L7.99961 7.37897L1.28555 1.01772C0.980773 0.728941 0.498472 0.741128 0.208947 1.04743C-0.080577 1.35296 -0.0676398 1.83526 0.237916 2.12478L7.47618 8.98209C7.62246 9.12077 7.81143 9.19087 7.99961 9.19087C8.18779 9.19087 8.37751 9.12077 8.52382 8.98209L15.7621 2.12478C16.0676 1.83523 16.0806 1.35296 15.7911 1.0474Z",fill:"#181A1F"})})})]}),s.subMenu&&(0,n.jsx)("ul",{className:"sub-menu mobile-sub-menu ".concat(t===l?"menu-open":""),children:s.subMenu.map((t,i)=>(0,n.jsx)("li",{children:(0,n.jsx)(a.default,{className:e.split("/")[1]===t.link.split("/")[1]?"active-link":"",href:t.link,children:t.title})},i))})]},l)}),(0,n.jsx)("li",{children:(0,n.jsx)(a.default,{className:"".concat("/contact"===e?"active-link":""),style:{fontSize:"20px"},href:"/contact",children:"Contact"})})]})}function o(){return(0,s.useEffect)(()=>{let e=document.getElementsByClassName("burger-icon")[0],t=document.getElementsByClassName("mobile-header-active")[0],i=document.body,n=n=>{console.log("first"),null==e||e.classList.toggle("burger-close"),n.preventDefault(),null==t||t.classList.toggle("sidebar-visible"),i.classList.toggle("mobile-menu-active")};return null==e||e.addEventListener("click",n),()=>{null==e||e.removeEventListener("click",n)}},[]),(0,n.jsx)("div",{className:"mobile-header-active mobile-header-wrapper-style perfect-scrollbar",children:(0,n.jsx)("div",{className:"mobile-header-wrapper-inner",children:(0,n.jsx)("div",{className:"mobile-header-content-area",children:(0,n.jsx)("div",{className:"perfect-scroll",children:(0,n.jsx)("div",{className:"mobile-menu-wrap mobile-header-border",children:(0,n.jsx)("nav",{className:"mt-15",children:(0,n.jsx)("ul",{className:"mobile-menu font-heading",children:(0,n.jsx)(c,{})})})})})})})})}},11232:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var n=i(57437),s=i(99659),l=i(27648),a=i(99376);function r(){let e=(0,a.usePathname)();return(0,n.jsxs)(n.Fragment,{children:[s.p.map((t,i)=>(0,n.jsxs)("li",{className:"menu-item ".concat(t.subMenu?"has-submenu":""),children:[(0,n.jsx)(l.default,{href:t.link,className:"menu-link ".concat(e.split("/")[1]===t.link.split("/")[1]?"active-link":""),children:t.title}),t.subMenu&&(0,n.jsx)("ul",{className:"sub-menu",children:t.subMenu.map((t,i)=>(0,n.jsx)("li",{className:"submenu-item",children:(0,n.jsx)(l.default,{href:t.link,className:e.split("/")[1]===t.link.split("/")[1]?"active-link":"",children:t.title})},i))})]},i)),(0,n.jsx)("li",{children:(0,n.jsx)(l.default,{href:"/contact",className:"menu-link",children:"Contact"})})]})}},99659:function(e,t,i){"use strict";i.d(t,{p:function(){return n}});let n=[{id:1,title:"Home",link:"/"},{id:2,title:"About",link:"/aboutus"},{id:3,title:"Prices",link:"/prices"},{id:4,title:"Day Trip",link:"#",subMenu:[{id:41,title:"Cliffs of Moher",link:"/trips/cliffs-of-moher"},{id:42,title:"Glendalough & Powerscourt",link:"/trips/glendalough-and-powerscourt"},{id:43,title:"Giant’s Causeway",link:"/trips/giants-causeway"},{id:44,title:"Waterford & Kilkenny",link:"/trips/waterford-kilkenny"},{id:45,title:"Blarney Castle",link:"/trips/Blarney-Castle"},{id:46,title:"Castle South and Southwest",link:"/trips/CastleSouthandSouthwest"},{id:47,title:"Ancient & Medieval Wonders",link:"/trips/AncientandMedievalWonders"},{id:48,title:"\uD83D\uDCC5 Book a Day Trip",link:"/bookingdaytrip"}]},{id:5,title:"Gallery",link:"/gallery"},{id:6,title:"Services",link:"/services"},{id:7,title:"Booking",link:"/booking-extra"}]},33145:function(e,t,i){"use strict";i.d(t,{default:function(){return s.a}});var n=i(48461),s=i.n(n)},48461:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return c},getImageProps:function(){return r}});let n=i(47043),s=i(55346),l=i(65878),a=n._(i(5084));function r(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let c=l.Image},3185:function(){}},function(e){e.O(0,[8152,3448,5878,2971,2117,1744],function(){return e(e.s=13142)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7200,9160,9959,2119,9333,7327,3310],{24835:function(e,t,n){Promise.resolve().then(n.bind(n,42551)),Promise.resolve().then(n.bind(n,64326)),Promise.resolve().then(n.t.bind(n,65878,23)),Promise.resolve().then(n.t.bind(n,72972,23))},42551:function(e,t,n){"use strict";n.d(t,{default:function(){return c}});var l=n(57437),i=n(2265),s=n(11232),a=n(33145),r=n(27648);function c(){let[e,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=()=>{t(window.scrollY>200)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,l.jsx)("header",{className:"header sticky-bar ".concat(e?"stick":""),children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)("div",{className:"flex justify-between items-center py-2",style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"40px",marginBottom:"10px"},children:[(0,l.jsxs)("div",{className:"flex items-center gap-8",style:{display:"flex",alignItems:"center",gap:"15px"},children:[(0,l.jsx)("a",{className:"text-14-medium call-phone text-white hover-up flex items-center gap-3",href:"tel:+353876899968",style:{display:"flex",alignItems:"center",gap:"8px"},children:"+353 876 899 968"}),(0,l.jsxs)(r.default,{className:"text-14-medium text-white hover-up flex items-center gap-3",href:"mailto:info@viptransfer.ie",style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,l.jsx)("i",{className:"fas fa-envelope text-white text-lg"}),"info@viptransfer.ie"]})]}),(0,l.jsxs)("div",{className:"flex items-center gap-8",style:{display:"flex",alignItems:"center",gap:"15px"},children:[(0,l.jsx)(r.default,{href:"https://www.facebook.com/viptransferireland",target:"_blank",rel:"noopener noreferrer",className:"hover-up flex items-center",children:(0,l.jsx)("i",{className:"fab fa-facebook-f text-white text-lg"})}),(0,l.jsx)(r.default,{href:"https://www.instagram.com/viptransfer_ireland/",target:"_blank",rel:"noopener noreferrer",className:"hover-up flex items-center",children:(0,l.jsx)("i",{className:"fab fa-instagram text-white text-lg"})})]})]}),(0,l.jsxs)("div",{className:"main-header flex justify-between items-center",style:{flexWrap:"nowrap",marginTop:"5px"},children:[(0,l.jsx)("div",{className:"header-logo flex-shrink-0",children:(0,l.jsx)(r.default,{className:"d-flex",href:"/",children:(0,l.jsx)(a.default,{width:150,height:19,alt:"luxride",src:"/assets/imgs/template/logo.webp",style:{height:"fit-content"}})})}),(0,l.jsx)("div",{className:"header-nav flex-grow",children:(0,l.jsx)("nav",{className:"nav-main-menu",children:(0,l.jsx)("ul",{className:"main-menu flex justify-center",style:{gap:"20px"},children:(0,l.jsx)(s.Z,{})})})})]})]})})}n(3185)},64326:function(e,t,n){"use strict";n.d(t,{default:function(){return o}});var l=n(57437),i=n(2265),s=n(99659),a=n(27648),r=n(99376);function c(){let e=(0,r.usePathname)(),[t,n]=(0,i.useState)(-1);return(0,l.jsxs)(l.Fragment,{children:[s.p.map((i,s)=>{var r;return(0,l.jsxs)("li",{className:"has-children ".concat(i.subMenu?"has-submenu":""),children:[(0,l.jsxs)("a",{onClick:()=>i.subMenu&&n(e=>e===s?-1:s),className:"active mobileMenuParent ".concat((null===(r=i.subMenu)||void 0===r?void 0:r.some(t=>e.split("/")[1]===t.link.split("/")[1]))?"active-link":""," ").concat(t===s?"parent-open":""),children:[(0,l.jsx)("span",{children:i.title}),i.subMenu&&(0,l.jsx)("span",{className:"menu-expand",children:(0,l.jsx)("svg",{className:"w-6 h-6 icon-16",viewBox:"0 0 16 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M15.7911 1.0474C15.5023 0.741097 15.0192 0.729691 14.7145 1.01768L7.99961 7.37897L1.28555 1.01772C0.980773 0.728941 0.498472 0.741128 0.208947 1.04743C-0.080577 1.35296 -0.0676398 1.83526 0.237916 2.12478L7.47618 8.98209C7.62246 9.12077 7.81143 9.19087 7.99961 9.19087C8.18779 9.19087 8.37751 9.12077 8.52382 8.98209L15.7621 2.12478C16.0676 1.83523 16.0806 1.35296 15.7911 1.0474Z",fill:"#181A1F"})})})]}),i.subMenu&&(0,l.jsx)("ul",{className:"sub-menu mobile-sub-menu ".concat(t===s?"menu-open":""),children:i.subMenu.map((t,n)=>(0,l.jsx)("li",{children:(0,l.jsx)(a.default,{className:e.split("/")[1]===t.link.split("/")[1]?"active-link":"",href:t.link,children:t.title})},n))})]},s)}),(0,l.jsx)("li",{children:(0,l.jsx)(a.default,{className:"".concat("/contact"===e?"active-link":""),style:{fontSize:"20px"},href:"/contact",children:"Contact"})})]})}function o(){return(0,i.useEffect)(()=>{let e=document.getElementsByClassName("burger-icon")[0],t=document.getElementsByClassName("mobile-header-active")[0],n=document.body,l=l=>{console.log("first"),null==e||e.classList.toggle("burger-close"),l.preventDefault(),null==t||t.classList.toggle("sidebar-visible"),n.classList.toggle("mobile-menu-active")};return null==e||e.addEventListener("click",l),()=>{null==e||e.removeEventListener("click",l)}},[]),(0,l.jsx)("div",{className:"mobile-header-active mobile-header-wrapper-style perfect-scrollbar",children:(0,l.jsx)("div",{className:"mobile-header-wrapper-inner",children:(0,l.jsx)("div",{className:"mobile-header-content-area",children:(0,l.jsx)("div",{className:"perfect-scroll",children:(0,l.jsx)("div",{className:"mobile-menu-wrap mobile-header-border",children:(0,l.jsx)("nav",{className:"mt-15",children:(0,l.jsx)("ul",{className:"mobile-menu font-heading",children:(0,l.jsx)(c,{})})})})})})})})}},11232:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var l=n(57437),i=n(99659),s=n(27648),a=n(99376);function r(){let e=(0,a.usePathname)();return(0,l.jsxs)(l.Fragment,{children:[i.p.map((t,n)=>(0,l.jsxs)("li",{className:"menu-item ".concat(t.subMenu?"has-submenu":""),children:[(0,l.jsx)(s.default,{href:t.link,className:"menu-link ".concat(e.split("/")[1]===t.link.split("/")[1]?"active-link":""),children:t.title}),t.subMenu&&(0,l.jsx)("ul",{className:"sub-menu",children:t.subMenu.map((t,n)=>(0,l.jsx)("li",{className:"submenu-item",children:(0,l.jsx)(s.default,{href:t.link,className:e.split("/")[1]===t.link.split("/")[1]?"active-link":"",children:t.title})},n))})]},n)),(0,l.jsx)("li",{children:(0,l.jsx)(s.default,{href:"/contact",className:"menu-link",children:"Contact"})})]})}},99659:function(e,t,n){"use strict";n.d(t,{p:function(){return l}});let l=[{id:1,title:"Home",link:"/"},{id:2,title:"About",link:"/aboutus"},{id:3,title:"Prices",link:"/prices"},{id:4,title:"Day Trip",link:"#",subMenu:[{id:41,title:"Cliffs of Moher",link:"/trips/cliffs-of-moher"},{id:42,title:"Glendalough & Powerscourt",link:"/trips/glendalough-and-powerscourt"},{id:43,title:"Giant’s Causeway",link:"/trips/giants-causeway"},{id:44,title:"Waterford & Kilkenny",link:"/trips/waterford-kilkenny"},{id:45,title:"Blarney Castle",link:"/trips/Blarney-Castle"},{id:46,title:"Castle South and Southwest",link:"/trips/CastleSouthandSouthwest"},{id:47,title:"Ancient & Medieval Wonders",link:"/trips/AncientandMedievalWonders"},{id:48,title:"\uD83D\uDCC5 Book a Day Trip",link:"/bookingdaytrip"}]},{id:5,title:"Gallery",link:"/gallery"},{id:6,title:"Services",link:"/services"},{id:7,title:"Booking",link:"/booking-extra"}]},33145:function(e,t,n){"use strict";n.d(t,{default:function(){return i.a}});var l=n(48461),i=n.n(l)},48461:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return c},getImageProps:function(){return r}});let l=n(47043),i=n(55346),s=n(65878),a=l._(n(5084));function r(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let c=s.Image},3185:function(){}},function(e){e.O(0,[8152,3448,5878,2971,2117,1744],function(){return e(e.s=24835)}),_N_E=e.O()}]);
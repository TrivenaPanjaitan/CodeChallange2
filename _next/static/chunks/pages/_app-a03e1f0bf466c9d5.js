(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4476)}])},6691:function(e,t){"use strict";var n,r,o,u;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ACTION_FAST_REFRESH:function(){return s},ACTION_NAVIGATE:function(){return a},ACTION_PREFETCH:function(){return c},ACTION_REFRESH:function(){return l},ACTION_RESTORE:function(){return f},ACTION_SERVER_ACTION:function(){return d},ACTION_SERVER_PATCH:function(){return i},PrefetchCacheEntryStatus:function(){return r},PrefetchKind:function(){return n},isThenable:function(){return p}});let l="refresh",a="navigate",f="restore",i="server-patch",c="prefetch",s="fast-refresh",d="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(o=n||(n={})).AUTO="auto",o.FULL="full",o.TEMPORARY="temporary",(u=r||(r={})).fresh="fresh",u.reusable="reusable",u.expired="expired",u.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4318:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(8364),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9577:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return C}});let r=n(8754),o=n(5893),u=r._(n(7294)),l=n(1401),a=n(2045),f=n(7420),i=n(7201),c=n(1443),s=n(9953),d=n(5320),p=n(2905),h=n(4318),_=n(953),v=n(6691),y=new Set;function b(e,t,n,r,o,u){if(u||(0,a.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(y.has(o))return;y.add(o)}(async()=>u?e.prefetch(t,o):e.prefetch(t,n,r))().catch(e=>{})}}function j(e){return"string"==typeof e?e:(0,f.formatUrl)(e)}let C=u.default.forwardRef(function(e,t){let n,r;let{href:f,as:y,children:C,prefetch:O=null,passHref:m,replace:E,shallow:g,scroll:x,locale:P,onClick:T,onMouseEnter:k,onTouchStart:M,legacyBehavior:R=!1,...I}=e;n=C,R&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let N=u.default.useContext(s.RouterContext),A=u.default.useContext(d.AppRouterContext),L=null!=N?N:A,S=!N,w=!1!==O,H=null===O?v.PrefetchKind.AUTO:v.PrefetchKind.FULL,{href:U,as:F}=u.default.useMemo(()=>{if(!N){let e=j(f);return{href:e,as:y?j(y):e}}let[e,t]=(0,l.resolveHref)(N,f,!0);return{href:e,as:y?(0,l.resolveHref)(N,y):t||e}},[N,f,y]),K=u.default.useRef(U),D=u.default.useRef(F);R&&(r=u.default.Children.only(n));let V=R?r&&"object"==typeof r&&r.ref:t,[z,B,X]=(0,p.useIntersection)({rootMargin:"200px"}),Y=u.default.useCallback(e=>{(D.current!==F||K.current!==U)&&(X(),D.current=F,K.current=U),z(e),V&&("function"==typeof V?V(e):"object"==typeof V&&(V.current=e))},[F,V,U,X,z]);u.default.useEffect(()=>{L&&B&&w&&b(L,U,F,{locale:P},{kind:H},S)},[F,U,B,P,w,null==N?void 0:N.locale,L,S,H]);let q={ref:Y,onClick(e){R||"function"!=typeof T||T(e),R&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,n,r,o,l,f,i,c){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,a.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==f||f;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,locale:i,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};c?u.default.startTransition(d):d()}(e,L,U,F,E,g,x,P,S)},onMouseEnter(e){R||"function"!=typeof k||k(e),R&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),L&&(w||!S)&&b(L,U,F,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:H},S)},onTouchStart:function(e){R||"function"!=typeof M||M(e),R&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),L&&(w||!S)&&b(L,U,F,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:H},S)}};if((0,i.isAbsoluteUrl)(F))q.href=F;else if(!R||m||"a"===r.type&&!("href"in r.props)){let e=void 0!==P?P:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&(0,h.getDomainLocale)(F,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);q.href=t||(0,_.addBasePath)((0,c.addLocale)(F,e,null==N?void 0:N.defaultLocale))}return R?u.default.cloneElement(r,q):(0,o.jsx)("a",{...I,...q,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2905:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return f}});let r=n(7294),o=n(3815),u="function"==typeof IntersectionObserver,l=new Map,a=[];function f(e){let{rootRef:t,rootMargin:n,disabled:f}=e,i=f||!u,[c,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(u){if(i||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},a.push(n),l.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[i,n,t,c,d.current]),[p,c,(0,r.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4476:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893);n(7294);var o=n(1664),u=n.n(o),l=n(7698),a=n.n(l),f=()=>(0,r.jsx)("header",{className:a().header,children:(0,r.jsxs)("nav",{className:a().navContainer,children:[(0,r.jsx)(u(),{href:"/",className:a().navLink,children:(0,r.jsx)("p",{className:a().navItem,children:"Home"})}),(0,r.jsx)(u(),{href:"/favorites",className:a().navLink,children:(0,r.jsx)("p",{className:a().navItem,children:"Favorites"})})]})}),i=e=>{let{children:t}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)(f,{}),(0,r.jsx)("main",{children:t})]})};n(9871);var c=e=>{let{Component:t,pageProps:n}=e;return(0,r.jsx)(i,{children:(0,r.jsx)(t,{...n})})}},7698:function(e){e.exports={header:"Header_header__3r5eO",navContainer:"Header_navContainer__jz2j_",navItem:"Header_navItem__CSfef",navLink:"Header_navLink__TsYBW"}},9871:function(){},1664:function(e,t,n){e.exports=n(9577)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(9090)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[826],{3126:function(i,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/book/[id]",function(){return e(9043)}])},410:function(i,t,e){"use strict";var n=e(5893),o=e(7294),s=e(3669),r=e.n(s);t.Z=i=>{let{bookId:t}=i,[e,s]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{var i;s(((null===(i=localStorage.getItem("favorites"))||void 0===i?void 0:i.split(","))||[]).includes(t))},[t]),(0,n.jsx)("button",{onClick:()=>{var i;let n=(null===(i=localStorage.getItem("favorites"))||void 0===i?void 0:i.split(","))||[];e?n=n.filter(i=>i!==t):n.push(t),localStorage.setItem("favorites",n.join(",")),s(!e)},className:"".concat(r().button," ").concat(e?r().favorite:r().notFavorite),children:e?"Unfavorite":"Favorite"})}},9043:function(i,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return a}});var n=e(5893),o=e(410),s=e(7822),r=e.n(s),a=!0;t.default=i=>{var t,e,s,a,l;let{book:c}=i;if(!c||!c.volumeInfo)return(0,n.jsx)("p",{children:"Book not found or loading..."});let{volumeInfo:d}=c;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:r().container,children:[(0,n.jsx)("div",{className:r().imageContainer,children:(null===(t=d.imageLinks)||void 0===t?void 0:t.thumbnail)&&(0,n.jsx)("img",{src:d.imageLinks.thumbnail,alt:d.title})}),(0,n.jsxs)("div",{className:r().details,children:[(0,n.jsx)("h1",{children:d.title}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Author:"})," ",null===(e=d.authors)||void 0===e?void 0:e.join(", ")]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Publisher:"})," ",d.publisher," (",d.publishedDate,")"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Rating:"})," ",d.ratingsCount," /"," ",d.averageRating]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Categories:"})," ",null===(s=d.categories)||void 0===s?void 0:s.join(", ")]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Pages:"})," ",d.pageCount]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Dimensions:"})," ",null===(a=d.dimensions)||void 0===a?void 0:a.height," x"," ",null===(l=d.dimensions)||void 0===l?void 0:l.width]}),(0,n.jsx)("div",{className:r().favoriteButton,children:(0,n.jsx)(o.Z,{bookId:c.id})})]})]}),(0,n.jsx)("div",{className:r().containerDesc,children:(0,n.jsxs)("p",{className:r().description,children:[(0,n.jsx)("strong",{children:"Description:"})," ",(0,n.jsx)("br",{}),(0,n.jsx)("span",{style:{textAlign:"justify"},dangerouslySetInnerHTML:{__html:d.description||"No description available."}})]})})]})}},7822:function(i){i.exports={container:"BookDetail_container__87vT7",containerDesc:"BookDetail_containerDesc__smxEG",imageContainer:"BookDetail_imageContainer__OGPxi",details:"BookDetail_details__P4Kpt",favoriteButton:"BookDetail_favoriteButton__z1j_q",description:"BookDetail_description__gXQL0"}},3669:function(i){i.exports={button:"FavoriteButton_button__miIDg",favorite:"FavoriteButton_favorite__B1pzP",notFavorite:"FavoriteButton_notFavorite__SYepb"}}},function(i){i.O(0,[888,774,179],function(){return i(i.s=3126)}),_N_E=i.O()}]);
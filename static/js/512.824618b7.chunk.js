"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[512],{9113:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,c,u=e(1413),o=e(885),A=e(168),i=e(4709),s=i.Z.ul(r||(r=(0,A.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: ","px;\n  gap: ","px;\n  list-style: none;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[3]})),p=i.Z.li(a||(a=(0,A.Z)(["\n  background-color: ",";\n"])),(function(n){return n.theme.colors.textPrimary})),f=i.Z.img(c||(c=(0,A.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  cursor: pointer;\n  box-shadow: none;\n\n  transition: box-shadow 250ms linear;\n\n  :hover,\n  :focus {\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.shadows.blackShadow})),l=e(2791),d=e(7689),g=e(4390),h=e(5740),v=e(5193),x=e(5717),Z=(e(3037),e(8688),e(3682)),k=e(184);function w(){var n=(0,d.UO)(),t=(0,l.useState)([]),e=(0,o.Z)(t,2),r=e[0],a=e[1],c=(0,l.useState)(!1),A=(0,o.Z)(c,2),i=A[0],w=A[1],y=(0,l.useState)(0),m=(0,o.Z)(y,2),Q=m[0],b=m[1],E=function(){w(!i)};(0,l.useEffect)((function(){(0,g.Et)(n.actorId).then((function(n){a(n.profiles)}))}),[n.actorId]);var B={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:Q,lazyLoad:"ondemand",draggable:!1};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(s,{children:r.map((function(n,t){return(0,k.jsx)(p,{children:(0,k.jsx)(f,{width:"200",src:n.file_path?"https://image.tmdb.org/t/p/w200".concat(n.file_path):v,alt:n.file_path,loading:"lazy",onClick:function(){return function(n){b(n),E()}(t)}})},n.file_path)}))}),i&&(0,k.jsx)(h.Z,{onClose:E,children:(0,k.jsx)(x.Z,(0,u.Z)((0,u.Z)({},B),{},{children:r.map((function(n){return(0,k.jsx)(Z.xu,{display:"flex",alignItems:"center",children:(0,k.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.file_path),alt:n.file_path})},n.file_path)}))}))})]})}},5740:function(n,t,e){e.d(t,{Z:function(){return l}});var r,a,c=e(2791),u=e(168),o=e(4709),A=o.Z.div(r||(r=(0,u.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),i=o.Z.div(a||(a=(0,u.Z)(["\n  width: 500px;\n  max-height: calc(100vh - 24px);\n  overflow-y: clip;\n  overflow-x: visible;  \n"]))),s=e(4164),p=e(184),f=document.querySelector("#modal-root");function l(n){var t=n.onClose,e=n.children;(0,c.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(n){"Escape"===n.code&&t()};return(0,s.createPortal)((0,p.jsx)(A,{onClick:function(n){n.currentTarget===n.target&&t()},children:(0,p.jsx)(i,{children:e})}),f)}},4390:function(n,t,e){e.d(t,{Et:function(){return w},IV:function(){return d},J:function(){return v},Mc:function(){return l},PY:function(){return p},SL:function(){return Z},oO:function(){return h},vw:function(){return f},wH:function(){return g},wL:function(){return x},yY:function(){return k}});var r=e(5861),a=e(4687),c=e.n(a),u=e(2007),o=e.n(u),A=e(1044),i="https://api.themoviedb.org/3",s="7944ae355bdc42ac579681e106149d6b",p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.ZP.get("".concat(i,"/trending/all/day?api_key=").concat(s,"&language=").concat(t,"&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t,e,r){var a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.ZP.get("".concat(i,"/search/movie?api_key=").concat(s,"&query=").concat(t,"&language=").concat(r,"&page=").concat(e,"&include_adult=false"));case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.ZP.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(s,"&language=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.ZP.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(s,"&language=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.ZP.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(s,"&language=").concat(e,"&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.ZP.get("".concat(i,"/movie/").concat(t,"/videos?api_key=").concat(s,"&language=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t,e){var a,u;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.map(function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.ZP.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(s,"&language=").concat(e)).then((function(n){return n.data})).catch((function(n){return console.log(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()),n.next=3,Promise.all(a);case 3:return u=n.sent,n.abrupt("return",u);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t,e,r){var a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.ZP.get("".concat(i,"/search/person?api_key=").concat(s,"&query=").concat(t,"&language=").concat(r,"&page=").concat(e,"&include_adult=false"));case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),Z=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.ZP.get("".concat(i,"/person/").concat(t,"?api_key=").concat(s,"&language=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),k=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.ZP.get("".concat(i,"/person/").concat(t,"/movie_credits?api_key=").concat(s,"&language=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),w=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.ZP.get("".concat(i,"/person/").concat(t,"/images?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();f.propTypes={query:o().string,page:o().number},l.propTypes={id:o().string},d.propTypes={id:o().string},g.propTypes={id:o().string}},5193:function(n){n.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=512.824618b7.chunk.js.map
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[655],{655:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(885),a={movie__over:"MovieItem_movie__over__5KAj4",movie__genres:"MovieItem_movie__genres__HeCxp",movie__add:"MovieItem_movie__add__cwMM0",goback__btn:"MovieItem_goback__btn__ZX4oi"},c=n(864),i=n(791),s=n(731),o=n(689),u=n(390),p=n(184);function _(){var e,t,n=(0,i.useState)(null),_=(0,r.Z)(n,2),d=_[0],l=_[1],v=(0,o.TH)(),m=(0,o.UO)(),f=(0,i.useRef)(null!==(e=null===(t=v.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return(0,i.useEffect)((function(){(0,u.Mc)(m.movieId).then((function(e){l(e)})).catch((function(e){alert(e.message)}))}),[m.movieId]),(0,p.jsxs)(c.x,{p:3,mt:"48px",textAlign:"left",children:[(0,p.jsx)(s.OL,{to:f.current,className:a.goback__btn,children:"Go Back"}),d&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(c.x,{display:"flex",mt:3,children:[(0,p.jsx)("div",{className:a.trend__thumb,children:(0,p.jsx)("img",{className:a.trend__img,width:"160",src:"https://image.tmdb.org/t/p/w200/".concat(d.poster_path),alt:"".concat(d.original_title)})}),(0,p.jsxs)(c.x,{ml:3,children:[(0,p.jsx)("h3",{children:d.original_title}),(0,p.jsx)("p",{className:a.movie__over,children:d.overview}),(0,p.jsx)("p",{className:a.movie__genres,children:d.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,p.jsxs)(c.x,{mt:3,textAlign:"center",children:[(0,p.jsx)(s.rU,{className:a.movie__add,to:"cast",children:"Cast"}),(0,p.jsx)(s.rU,{className:a.movie__add,to:"reviews",children:"Reviews"})]}),(0,p.jsx)(o.j3,{})]})]})}},390:function(e,t,n){n.d(t,{IV:function(){return v},Mc:function(){return l},PY:function(){return _},vw:function(){return d},wH:function(){return m}});var r=n(861),a=n(687),c=n.n(a),i=n(7),s=n.n(i),o=n(44),u="https://api.themoviedb.org/3",p="7944ae355bdc42ac579681e106149d6b",_=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.ZP.get("".concat(u,"/trending/all/day?api_key=").concat(p,"&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.ZP.get("".concat(u,"/search/movie?api_key=").concat(p,"&query=").concat(t,"&language=en-US&page=").concat(n,"&include_adult=false"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.ZP.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(p,"&language=en-US&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.ZP.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(p,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.ZP.get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(p,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();d.propTypes={query:s().string,page:s().number},l.propTypes={id:s().string},v.propTypes={id:s().string},m.propTypes={id:s().string}}}]);
//# sourceMappingURL=655.9a474648.chunk.js.map
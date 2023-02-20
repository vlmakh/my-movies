"use strict";(self.webpackChunkmy_movies=self.webpackChunkmy_movies||[]).push([[657],{3657:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,a,c=t(9439),u=t(2791),o=t(7689),i=t(4390),s=t(3682),l=t(168),p=t(4709),f=t(3433),d=t(1725),v=t.n(d),y=function(n){for(var e=n.url,t=n.allowFullScreen,r=n.position,a=n.display,c=n.height,o=n.width,i=n.overflow,s=n.styles,l=n.onLoad,p=n.onMouseOver,d=n.onMouseOut,y=n.scrolling,h=n.id,g=n.frameBorder,m=n.ariaHidden,w=n.sandbox,x=n.allow,b=n.className,_=n.title,k=n.ariaLabel,Z=n.ariaLabelledby,P=n.name,O=n.target,S=n.loading,T=n.importance,E=n.referrerpolicy,C=n.allowpaymentrequest,j=n.src,L=n.key,R=v()({src:j||e,target:O||null,style:{position:r||null,display:a||"initial",overflow:i||null},scrolling:y||null,allowpaymentrequest:C||null,importance:T||null,sandbox:w&&(0,f.Z)(w).join(" ")||null,loading:S||null,styles:s||null,name:P||null,className:b||null,allowFullScreen:"allowFullScreen",referrerpolicy:E||null,title:_||null,allow:x||null,id:h||null,"aria-labelledby":Z||null,"aria-hidden":m||null,"aria-label":k||null,width:o||null,height:c||null,onLoad:l||null,onMouseOver:p||null,onMouseOut:d||null,key:L||"iframe"}),A=Object.create(null),D=0,F=Object.keys(R);D<F.length;D++){var H=F[D];null!=R[H]&&(A[H]=R[H])}for(var I=0,K=Object.keys(A.style);I<K.length;I++){var M=K[I];null==A.style[M]&&delete A.style[M]}if(A.styles)for(var N=0,U=Object.keys(A.styles);N<U.length;N++){var W=U[N];A.styles.hasOwnProperty(W)&&(A.style[W]=A.styles[W]),Object.keys(A.styles).pop()==W&&delete A.styles}if(t)if("allow"in A){var q=A.allow.replace("fullscreen","");A.allow="fullscreen ".concat(q.trim()).trim()}else A.allow="fullscreen";return g>=0&&(A.style.hasOwnProperty("border")||(A.style.border=g)),u.createElement("iframe",Object.assign({},A))},h=(0,p.Z)(y)(r||(r=(0,l.Z)(["\n  width: 640px;\n  height: 360px;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);\n\n  @media (max-width: 900px) {\n    max-width: 100%;\n    height: 360px;\n  }\n"]))),g=p.Z.p(a||(a=(0,l.Z)(["\n  margin-top: ","px;\n  font-size: ",";\n  color: ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.textPrimary})),m=t(8966),w=t(1105),x=t(184);function b(){var n=(0,o.UO)(),e=(0,u.useState)("plugtext"),t=(0,c.Z)(e,2),r=t[0],a=t[1],l=(0,w.t)("lang");return(0,u.useEffect)((function(){(0,i.oO)(n.movieId,l).then((function(n){var e=n.results.find((function(n){return"Trailer"===n.type}));a(e?"https://www.youtube.com/embed/".concat(e.key):"")}))}),[l,n.movieId,r]),(0,x.jsx)(s.xu,{mt:4,children:(0,x.jsx)(u.Suspense,{fallback:(0,x.jsx)(m.Z1,{height:"100",width:"100",color:"#bcc3ce",ariaLabel:"Three-Circles-rotating",visible:!0}),children:r?(0,x.jsx)(h,{src:r,title:r,frameBorder:"0",allowfullscreen:!0}):(0,x.jsx)(g,{children:(0,w.t)("notFoundMsg")})})})}},4390:function(n,e,t){t.d(e,{CS:function(){return x},Et:function(){return _},IV:function(){return v},J:function(){return g},Mc:function(){return d},PY:function(){return p},SL:function(){return w},oO:function(){return h},vw:function(){return f},wH:function(){return y},wL:function(){return m},yY:function(){return b}});var r=t(5861),a=t(4687),c=t.n(a),u=t(2007),o=t.n(u),i=t(1044),s={NODE_ENV:"production",PUBLIC_URL:"/my-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_MAIN_URL,l={NODE_ENV:"production",PUBLIC_URL:"/my-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,p=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(s,"/trending/all/day?api_key=").concat(l,"&language=").concat(e,"&page=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e,t,r){var a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(s,"/search/movie?api_key=").concat(l,"&query=").concat(e,"&language=").concat(r,"&page=").concat(t,"&include_adult=false"));case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(s,"/movie/").concat(e,"?api_key=").concat(l,"&language=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(l,"&language=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),y=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(l,"&language=").concat(t,"&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(s,"/movie/").concat(e,"/videos?api_key=").concat(l,"&language=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(c().mark((function n(e,t){var a,u;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.map(function(){var n=(0,r.Z)(c().mark((function n(e){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(s,"/movie/").concat(e,"?api_key=").concat(l,"&language=").concat(t)).then((function(n){return n.data})).catch((function(n){return console.log(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),n.next=3,Promise.all(a);case 3:return u=n.sent,n.abrupt("return",u);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(c().mark((function n(e,t,r){var a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(s,"/search/person?api_key=").concat(l,"&query=").concat(e,"&language=").concat(r,"&page=").concat(t,"&include_adult=false"));case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),w=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(s,"/person/").concat(e,"?api_key=").concat(l,"&language=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(e,t){var a,u;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.map(function(){var n=(0,r.Z)(c().mark((function n(e){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(s,"/person/").concat(e,"?api_key=").concat(l,"&language=").concat(t)).then((function(n){return n.data})).catch((function(n){return console.log(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),n.next=3,Promise.all(a);case 3:return u=n.sent,n.abrupt("return",u);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),b=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(s,"/person/").concat(e,"/movie_credits?api_key=").concat(l,"&language=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),_=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(s,"/person/").concat(e,"/images?api_key=").concat(l));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();f.propTypes={query:o().string,page:o().number},d.propTypes={id:o().string},v.propTypes={id:o().string},y.propTypes={id:o().string}}}]);
//# sourceMappingURL=657.e782e7ef.chunk.js.map
"use strict";(self.webpackChunkmy_movies=self.webpackChunkmy_movies||[]).push([[308],{1308:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var a=t(9439),r=t(2202),i=t(2791),o=t(7689),s=t(6731),c=t(1033),l=t(6369),u=t(1105),d=t(8570),f=t(184);function m(){var n=(0,o.UO)().actorId,e=(0,i.useState)([]),t=(0,a.Z)(e,2),m=t[0],p=t[1],g=(0,o.TH)(),h=(0,u.t)("lang"),v=(0,i.useState)(1),x=(0,a.Z)(v,2),b=x[0],y=x[1],_=(0,s.lr)(),j=(0,a.Z)(_,2),k=j[0],w=j[1],C=Number(k.get("page"))?Number(k.get("page")):1;(0,i.useEffect)((function(){var e=20*(C-1),t=20*C;(0,c.yY)(n,h).then((function(n){p(n.cast.sort((function(n,e){var t,a;return(null!==(t=e.release_date)&&void 0!==t?t:e.first_air_date)>(null!==(a=n.release_date)&&void 0!==a?a:n.first_air_date)?1:-1})).filter((function(n,a){return a>=e&&a<t}))),y(Math.ceil(n.cast.length/20))}))}),[h,n,C]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r.aV,{children:m.map((function(n){return(0,f.jsx)(r.ck,{children:(0,f.jsx)(s.OL,{to:"/movies/".concat(n.id),state:{from:g},children:(0,f.jsx)(l.u,{movie:n})})},n.id)}))}),b>1&&(0,f.jsx)(d.T,{breakLabel:"...",nextLabel:">",onPageChange:function(n){w({page:n.selected+1})},pageRangeDisplayed:5,pageCount:b,previousLabel:"<",disabledLinkClassName:"disabled",activeClassName:"activePage",forcePage:C-1})]})}},8570:function(n,e,t){t.d(e,{T:function(){return c}});var a,r=t(168),i=t(4709),o=t(6048),s=t.n(o),c=(0,i.Z)(s())(a||(a=(0,r.Z)(["\n  display: flex;\n  list-style: none;\n  justify-content: center;\n  margin-top: 16px;\n  font-size: ",";\n  font-weight: 700;\n\n  @media (max-width: 479.98px) {\n    flex-wrap: wrap;\n  }\n\n  & li {\n    color: ",";\n\n    transition: color 250ms linear;\n\n    :hover:not(.disabled) {\n      color: ",";\n    }\n  }\n\n  & .activePage {\n    color: ",";\n  }\n\n  & a {\n    padding: 0 8px;\n    cursor: pointer;\n  }\n\n  & a.disabled {\n    cursor: default;\n  }\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}))}}]);
//# sourceMappingURL=308.40351710.chunk.js.map
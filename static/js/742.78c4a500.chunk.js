"use strict";(self.webpackChunkmy_movies=self.webpackChunkmy_movies||[]).push([[742],{261:function(n,e,t){t.d(e,{f:function(){return s},j:function(){return u}});var r,a,o=t(168),i=t(4709),c=t(3320),u=i.Z.div(r||(r=(0,o.Z)(["\n  margin: ","px auto 0;\n  max-width: 1280px;\n  height: 720px;\n  background-image: radial-gradient(\n      at center,\n      rgba(59, 67, 81, 0.2),\n      "," 70%\n    ),\n    url(",");\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.bcgMain}),c.nI),s=i.Z.div(a||(a=(0,o.Z)(["\n  margin: ","px auto 0;\n  max-width: 1280px;\n  height: 720px;\n  background-image: radial-gradient(\n      at center,\n      rgba(59, 67, 81, 0.2),\n      "," 70%\n    ),\n    url(",");\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.bcgMain}),c.I4)},8570:function(n,e,t){t.d(e,{T:function(){return u}});var r,a=t(168),o=t(4709),i=t(6048),c=t.n(i),u=(0,o.Z)(c())(r||(r=(0,a.Z)(["\n  display: flex;\n  list-style: none;\n  justify-content: center;\n  margin-top: 16px;\n  font-size: ",";\n  font-weight: 700;\n\n  @media (max-width: 479.98px) {\n    flex-wrap: wrap;\n  }\n\n  & li {\n    color: ",";\n\n    transition: color 250ms linear;\n\n    :hover:not(.disabled) {\n      color: ",";\n    }\n  }\n\n  & .activePage {\n    color: ",";\n  }\n\n  & a {\n    padding: 0 8px;\n    cursor: pointer;\n  }\n\n  & a.disabled {\n    cursor: default;\n  }\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}))},9803:function(n,e,t){t.d(e,{M:function(){return u},U:function(){return c}});var r,a,o=t(168),i=t(4709),c=i.Z.form(r||(r=(0,o.Z)(["\n  display: flex;\n  margin: 0 auto;\n  max-width: 400px;\n"]))),u=i.Z.input(a||(a=(0,o.Z)(["\n  width: 100%;\n  padding: 4px 8px;\n\n  &:hover + button {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.bcgBtn}))},6742:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r=t(3433),a=t(9439),o=t(261),i=t(2202),c=t(9803),u=t(7839),s=t(8570),l=t(6369),d=(t(1174),t(6731)),p=t(3682),f=t(7689),g=t(2791),h=t(1033),m=t(4373),x=t(5218),b=t(1105),v=t(184);function Z(){var n=(0,g.useState)([]),e=(0,a.Z)(n,2),t=e[0],Z=e[1],j=(0,d.lr)(),k=(0,a.Z)(j,2),y=k[0],w=k[1],C=y.get("search"),M=Number(y.get("page"))?Number(y.get("page")):1,P=(0,g.useState)(null!==C&&void 0!==C?C:""),L=(0,a.Z)(P,2),S=L[0],N=L[1],z=(0,f.TH)(),T=(0,g.useState)(0),_=(0,a.Z)(T,2),B=_[0],D=_[1],E=(0,b.t)("lang"),H=(0,b.t)("placeholders.film");(0,g.useEffect)((function(){document.title="My Movies | ".concat((0,b.t)("nav.movies")),C&&(0,h.vw)(C,M,E).then((function(n){if(!n.results.length)return x.ZP.error((0,b.t)("noResults"));D(n.total_pages),Z((0,r.Z)(n.results))})).catch((function(n){return console.log(n)}))}),[E,M,C]);return(0,v.jsxs)(p.EB,{children:[(0,v.jsxs)(c.U,{onSubmit:function(n){if(n.preventDefault(),!S.trim())return x.ZP.error((0,b.t)("emptyQuery"));S.trim()!==C&&(Z([]),w({search:S.trim(),page:1}))},children:[(0,v.jsxs)(p.xu,{position:"relative",flexGrow:"1",children:[(0,v.jsx)(c.M,{type:"text",value:S,onChange:function(n){N(n.target.value)},placeholder:H}),(0,v.jsx)(u.Yg,{type:"button",onClick:function(){N(""),Z([]),w({search:"",page:0}),D(0)},children:(0,v.jsx)(m.FMH,{size:"20"})})]}),(0,v.jsx)(u.Yq,{type:"submit",children:(0,b.t)("buttons.search")})]}),!t.length&&(0,v.jsx)(o.j,{}),(0,v.jsx)(i.aV,{children:t.map((function(n){return(0,v.jsx)(i.ck,{children:(0,v.jsx)(d.OL,{to:"".concat(n.id),state:{from:z},children:(0,v.jsx)(l.u,{movie:n})})},n.id)}))}),B>1&&(0,v.jsx)(s.T,{breakLabel:"...",nextLabel:">",onPageChange:function(n){w({search:S,page:n.selected+1})},pageRangeDisplayed:5,pageCount:B,previousLabel:"<",disabledLinkClassName:"disabled",activeClassName:"activePage",forcePage:M-1})]})}}}]);
//# sourceMappingURL=742.78c4a500.chunk.js.map
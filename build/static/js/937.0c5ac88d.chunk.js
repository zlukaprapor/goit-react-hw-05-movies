"use strict";(self.webpackChunkreactstart=self.webpackChunkreactstart||[]).push([[937],{1933:function(n,t,e){e.d(t,{wr:function(){return u},jC:function(){return o},wL:function(){return s},oO:function(){return h},Ch:function(){return f}});var c=e(4569),r=e.n(c),a="https://api.themoviedb.org/3",i="62536649c4794eb812bab597e52cdce5";function u(){return r().get("".concat(a,"/trending/movie/day?api_key=").concat(i,"&language=en-US&page=").concat(1)).then((function(n){return n.data}))}function o(n){return r().get("".concat(a,"/movie/").concat(n,"?api_key=").concat(i,"&language=en-US")).then((function(n){return n.data}))}function s(n){return r().get("".concat(a,"/movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US")).then((function(n){return n.data}))}function h(n){return r().get("".concat(a,"/movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US")).then((function(n){return n.data}))}function f(n){return r().get("".concat(a,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(n)).then((function(n){return n.data}))}},8937:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var c=e(8152),r=e(2791),a=e(9271),i=e(1933),u=e(184),o=(0,r.lazy)((function(){return e.e(79).then(e.bind(e,6079))})),s=(0,r.lazy)((function(){return e.e(62).then(e.bind(e,7062))})),h=(0,r.lazy)((function(){return e.e(679).then(e.bind(e,2679))})),f=(0,r.lazy)((function(){return e.e(387).then(e.bind(e,6387))})),d=function(){var n=(0,r.useState)(null),t=(0,c.Z)(n,2),e=t[0],d=t[1],l=(0,a.UO)().movieId,g=(0,a.$B)().path,j=(0,a.TH)(),p=(0,r.useRef)(j.state).current,x=(0,a.k6)();return(0,r.useEffect)((function(){(0,i.jC)(l).then((function(n){d(n)})).catch((function(n){x.push("/"),console.warn(n)}))}),[l,x]),(0,u.jsxs)("div",{children:[(0,u.jsx)("button",{onClick:function(){return x.push(p?p.from:"/")},children:"\u2190 Go back"}),e&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(r.Suspense,{fallback:(0,u.jsx)("h2",{children:"Loading..."}),children:[(0,u.jsx)(o,{movie:e}),(0,u.jsx)("hr",{}),(0,u.jsx)("p",{children:"Additional information"}),(0,u.jsx)(s,{movieId:l})]}),(0,u.jsx)("hr",{}),(0,u.jsx)(r.Suspense,{fallback:(0,u.jsx)("h2",{children:"Loading..."}),children:(0,u.jsxs)(a.rs,{children:[(0,u.jsx)(a.AW,{path:"".concat(g,"/cast"),children:(0,u.jsx)(h,{})}),(0,u.jsx)(a.AW,{path:"".concat(g,"/reviews"),children:(0,u.jsx)(f,{})})]})})]})]})}}}]);
//# sourceMappingURL=937.0c5ac88d.chunk.js.map
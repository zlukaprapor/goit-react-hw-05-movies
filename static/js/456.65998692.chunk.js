"use strict";(self.webpackChunkreactstart=self.webpackChunkreactstart||[]).push([[456],{1933:function(n,t,e){e.d(t,{wr:function(){return o},jC:function(){return i},wL:function(){return f},oO:function(){return s},Ch:function(){return d}});var c=e(4569),r=e.n(c),a="https://api.themoviedb.org/3",u="62536649c4794eb812bab597e52cdce5";function o(){return r().get("".concat(a,"/trending/movie/day?api_key=").concat(u,"&language=en-US&page=").concat(1)).then((function(n){return n.data}))}function i(n){return r().get("".concat(a,"/movie/").concat(n,"?api_key=").concat(u,"&language=en-US")).then((function(n){return n.data}))}function f(n){return r().get("".concat(a,"/movie/").concat(n,"/credits?api_key=").concat(u,"&language=en-US")).then((function(n){return n.data}))}function s(n){return r().get("".concat(a,"/movie/").concat(n,"/reviews?api_key=").concat(u,"&language=en-US")).then((function(n){return n.data}))}function d(n){return r().get("".concat(a,"/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(n)).then((function(n){return n.data}))}},1456:function(n,t,e){e.r(t),e.d(t,{default:function(){return i}});var c=e(8152),r=e(2791),a=e(1523),u=e(1933),o=e(184),i=function(){var n=(0,r.useState)(null),t=(0,c.Z)(n,2),e=t[0],i=t[1];return(0,r.useEffect)((function(){(0,u.wr)().then((function(n){i(n.results)})).catch((function(n){return console.warn(n)}))}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:"Trending today"}),e&&(0,o.jsx)("ul",{children:e.map((function(n){return(0,o.jsx)("li",{children:(0,o.jsxs)(a.rU,{to:"movies/".concat(n.id),children:[n.title," ",n.name]})},n.id)}))})]})}}}]);
//# sourceMappingURL=456.65998692.chunk.js.map
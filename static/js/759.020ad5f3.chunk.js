"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[759],{8123:function(e,t,r){r.d(t,{Df:function(){return o},Ph:function(){return f},TP:function(){return v},_L:function(){return p},tx:function(){return l},zv:function(){return h}});var n=r(5861),a=r(7757),u=r.n(a),c=r(1912),s="https://api.themoviedb.org/3/",i="25e4eeadea4cf520d825a9bf9fd0e85d",o=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"trending/movie/day"),{params:{api_key:i}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"trending/all/week"),{params:{api_key:i}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"search/movie"),{params:{api_key:i,query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"movie/").concat(t),{params:{api_key:i}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"movie/").concat(t,"/credits"),{params:{api_key:i}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"movie/").concat(t,"/reviews"),{params:{api_key:i}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},8759:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(5861),a=r(9439),u=r(7757),c=r.n(u),s=r(8123),i=r(4154),o=r(8683),p=r(184),f=function(e){var t=e.author,r=e.content;return(0,p.jsxs)("li",{className:"",children:[(0,p.jsxs)("h3",{children:["Author: ",t]}),(0,p.jsx)("p",{children:r})]})},v=r(2007),h=function(e){var t=e.reviews;return 0===t.length?"We don`t have any reviews for this movie. ":(0,p.jsx)("ul",{className:"",children:t&&t.map((function(e){return(0,p.jsx)(f,(0,o.Z)({},e),e.id)}))})};h.propType={movie:r.n(v)().object};var l=r(2791),d=r(7689),m=function(){var e=(0,l.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],o=(0,l.useState)(!1),f=(0,a.Z)(o,2),v=f[0],m=f[1],x=(0,l.useState)(null),w=(0,a.Z)(x,2),k=w[0],y=w[1],Z=(0,d.UO)().movieId;return(0,d.UO)(),(0,l.useEffect)((function(){if(Z){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,s.tx)(Z);case 4:t=e.sent,u(t),y(null),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),y(e.t0.message);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[Z]),(0,l.useEffect)((function(){k&&alert(k)}),[k]),(0,p.jsxs)(p.Fragment,{children:[r&&(0,p.jsx)(h,{reviews:r}),v&&(0,p.jsx)(i.a,{})]})}}}]);
//# sourceMappingURL=759.020ad5f3.chunk.js.map
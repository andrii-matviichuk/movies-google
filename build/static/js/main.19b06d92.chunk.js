(this["webpackJsonpmovies-google"]=this["webpackJsonpmovies-google"]||[]).push([[0],{50:function(e,t,c){},79:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),r=c.n(n),s=c(25),i=c.n(s),o=c(19),u=(c(50),c(6)),h=c.n(u),d=c(13),j=c(15),b=c(17),v=c(18),l=c(4);var p=function(){var e=Object(l.f)(),t=Object(n.useState)(""),c=Object(j.a)(t,2),r=c[0],s=c[1],i=Object(n.useState)(window.innerWidth),o=Object(j.a)(i,2),u=o[0],p=o[1],O=function(){var t=Object(d.a)(h.a.mark((function t(c){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c.preventDefault(),s(""),e.push("/&query=".concat(r.replace(" ","+")));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return window.addEventListener("resize",(function(e){p(window.innerWidth)})),Object(a.jsxs)("form",{onSubmit:O,className:"search",children:[Object(a.jsx)("input",{className:"search-input",type:"text",placeholder:"Write the movie name",value:r,onChange:function(e){s(e.target.value)}}),Object(a.jsx)(b.a,{className:"search-icon 2x",type:"submit",icon:v.b,size:u<768?"2x":"3x",onClick:O})]})};var O=function(){return Object(a.jsx)("div",{className:"home",children:Object(a.jsx)(p,{})})},f=c(5),g=c(14),E=c.n(g),m="https://api.themoviedb.org/3/",x=function(e,t){return e?"".concat("https://image.tmdb.org/t/p/").concat(t).concat(e):null},I=function(e){return"".concat(m,"movie/").concat(e,"?api_key=").concat("2b670c7a2e5ff83740139fb924335283")},C=function(e){return"".concat(m,"movie/").concat(e,"/credits?api_key=").concat("2b670c7a2e5ff83740139fb924335283")},N=c(24),Q=function(e,t){var c=[];return e&&t?(e.forEach((function(e){if(c.length===t.length)return c;t.includes(e.id)&&c.push(e.name)})),c):[]},M=c(32),w=function(e){return function(){var t=Object(d.a)(h.a.mark((function t(c){var a,n,r,s,i,o,u,d,j,b,v;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=-1,n=0,r=Object(M.a)(e),t.prev=3,r.s();case 5:if((s=r.n()).done){t.next=34;break}return i=s.value,t.next=9,E.a.get(C(i));case 9:o=t.sent.data.cast,u=0,d=0,j=Object(M.a)(o),t.prev=13,v=h.a.mark((function e(){var t,c,a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=b.value,!(u>12)){e.next=3;break}return e.abrupt("return","break");case 3:return e.next=5,E.a.get((r=t.id,"".concat(m,"person/").concat(r,"/movie_credits?api_key=").concat("2b670c7a2e5ff83740139fb924335283")));case 5:c=e.sent.data.cast,a=0,n=0,c.forEach((function(e){0!==e.vote_average&&(a+=e.vote_average,n++)})),d+=a/n,u++;case 11:case"end":return e.stop()}var r}),e)})),j.s();case 16:if((b=j.n()).done){t.next=23;break}return t.delegateYield(v(),"t0",18);case 18:if("break"!==t.t0){t.next=21;break}return t.abrupt("break",23);case 21:t.next=16;break;case 23:t.next=28;break;case 25:t.prev=25,t.t1=t.catch(13),j.e(t.t1);case 28:return t.prev=28,j.f(),t.finish(28);case 31:d/u>n&&(n=d/u,a=i);case 32:t.next=5;break;case 34:t.next=39;break;case 36:t.prev=36,t.t2=t.catch(3),r.e(t.t2);case 39:return t.prev=39,r.f(),t.finish(39);case 42:c({type:"UPDATE_DATA",payload:{movieIds:e,bestMovie:{id:23,title:"Inception",overallScore:100},theMostPopularMovie:{id:23,title:"Inception",overallScore:100},bestCast:a}});case 45:case"end":return t.stop()}}),t,null,[[3,36,39,42],[13,25,28,31]])})));return function(e){return t.apply(this,arguments)}}()},B=function(e){return function(){var t=Object(d.a)(h.a.mark((function t(c){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c({type:"UPDATE_DRAG",payload:{currentMovieDragId:e}});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P="data:image/png;base64,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";var R=function(e){var t=e.id,c=e.size,r=Object(f.b)(),s=Object(n.useState)([]),i=Object(j.a)(s,2),o=i[0],u=i[1],b=Object(l.f)(),v=Object(f.c)((function(e){return e.compare.movieIds})),p=Object(f.c)((function(e){return e.search.searchResults})).find((function(e){return e.id===t})),O=Object(f.c)((function(e){return e.search.searchHistory})).find((function(e){return e.id===t}));Object(n.useEffect)((function(){(function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!!0){e.next=6;break}return e.next=4,E.a.get("".concat(m,"genre/movie/list?api_key=").concat("2b670c7a2e5ff83740139fb924335283"));case 4:t=e.sent,p&&u((function(e){return Object(N.a)(Q(t.data.genres,p.genre_ids))}));case 6:return e.abrupt("return",(function(){return!1}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p]);var g=function(e){"btn"!==e.target.classList[0]&&b.push("/movie/".concat(t))};return"small"===c?(console.log(),Object(a.jsxs)("div",{className:"movie small",onClick:g,children:[O&&Object(a.jsxs)("div",{className:"movie-info",children:[Object(a.jsxs)("h2",{children:[O.title,Object(a.jsx)("span",{className:"gray-text small-text",children:O.release_date?" (".concat(O.release_date.split("-")[0],")"):""})]}),Object(a.jsx)("h3",{children:o?o.join(", "):""})]}),Object(a.jsx)("button",{className:"btn red",onClick:function(){v.includes(t)&&v.splice(v.indexOf(t),1),r(w(v)),r(B(null)),r(B(t))},children:"Remove"})]})):Object(a.jsxs)("div",{className:"movie",onDragStart:function(){r(B(t))},onClick:g,draggable:!0,children:[x(p.poster_path,"w200")?Object(a.jsx)("div",{className:"poster",children:Object(a.jsx)("img",{src:x(p.poster_path,"w200"),alt:""})}):Object(a.jsx)("div",{className:"poster",children:Object(a.jsx)("img",{src:P,alt:""})}),Object(a.jsxs)("div",{className:"movie-info",children:[Object(a.jsxs)("h2",{children:[p.title,Object(a.jsx)("span",{className:"gray-text small-text",children:p.release_date?" (".concat(p.release_date.split("-")[0],")"):""})]}),Object(a.jsx)("h3",{children:o?o.join(", "):""})]})]})};var D=function(e){var t=e.movieIds;return Object(a.jsx)("div",{className:"compare-list",children:t&&t.map((function(e){return Object(a.jsx)(R,{size:"small",id:e},e)}))})};var k=function(){var e=Object(f.b)(),t=Object(n.useState)(),c=Object(j.a)(t,2),r=c[0],s=c[1],i=Object(n.useState)(0),o=Object(j.a)(i,2),u=o[0],h=o[1],d=Object(f.c)((function(e){return e.compare.bestCast})),l=Object(n.useState)(d),p=Object(j.a)(l,2),O=p[0],g=p[1];Object(n.useEffect)((function(){0===u&&s(!1),g(d)}),[u,d]);var E=Object(f.c)((function(e){return e.compare.movieIds})),m=Object(f.c)((function(e){return e.compare.currentMovieDragId})),x=Object(n.useState)(E),I=Object(j.a)(x,2),C=I[0],N=I[1];return Object(a.jsxs)("div",{className:r?"compare-container hovered":"compare-container",onDragEnter:function(e){e.preventDefault(),h(u+1),s(!0)},onDragLeave:function(e){h(u-1)},onDragOver:function(e){return e.preventDefault()},onDrop:function(t){s(!1),h(0),E.includes(m)||E.push(m),e(w(E)),N(E),g(d)},children:[Object(a.jsxs)("div",{className:"compare-info",children:[Object(a.jsx)("div",{className:"best-section best-movie",children:Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(b.a,{className:"star-icon",icon:v.c}),Object(a.jsx)("h3",{children:"Best Movie"}),Object(a.jsx)(b.a,{className:"star-icon",icon:v.c})]})}),Object(a.jsxs)("div",{className:"best-section best-cast",children:[Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(b.a,{className:"users-icon",icon:v.d}),Object(a.jsx)("h3",{children:"Best Cast"}),Object(a.jsx)(b.a,{className:"users-icon",icon:v.d})]}),O>=0?Object(a.jsx)(R,{size:"small",id:O}):""]})]}),Object(a.jsx)(D,{movieIds:C}),Object(a.jsxs)("div",{className:"drop-placeholder",children:[Object(a.jsx)("h3",{children:"Drop movie here"}),Object(a.jsx)(b.a,{className:"circle-up-icon",icon:v.a,size:"5x"})]})]})};var G=function(){var e=Object(f.b)(),t=Object(l.g)();Object(n.useEffect)((function(){var c,a=!0;return a&&e((c=t.pathname.substring(1),function(){var e=Object(d.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get((n=c,"".concat(m,"search/movie?api_key=").concat("2b670c7a2e5ff83740139fb924335283").concat(n)));case 2:a=e.sent,t({type:"FETCH_SEARCH",payload:{search:a.data.results}});case 4:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}())),function(){return a=!1}}),[t]);var c=Object(f.c)((function(e){return e.search.searchResults}));return Object(a.jsxs)("div",{className:"search-results-container",children:[Object(a.jsx)(p,{}),Object(a.jsx)("div",{className:"movie-list",children:c&&c.sort((function(e,t){return t.popularity-e.popularity})).map((function(e){return Object(a.jsx)(R,{id:e.id},e.id)}))}),Object(a.jsxs)("div",{className:"compare-div",children:[Object(a.jsx)("h4",{children:"Compare Movies"}),Object(a.jsx)(k,{})]})]})};var A=function(e){var t=e.id,c=Object(f.c)((function(e){return e.movie.movieCast.cast})).find((function(e){return e.id===t}));return Object(a.jsxs)("div",{className:"actor",children:[Object(a.jsx)("img",{src:c.profile_path?x(c.profile_path,"w200"):P,alt:""}),Object(a.jsx)("h4",{children:c.original_name}),Object(a.jsx)("h5",{children:c.character})]})};var y=function(){var e=Object(f.b)(),t=Object(l.g)();Object(n.useEffect)((function(){var c;e((c=t.pathname.replace("/movie/",""),function(){var e=Object(d.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(I(c));case 2:return a=e.sent,e.next=5,E.a.get(C(c));case 5:n=e.sent,t({type:"FETCH_MOVIE",payload:{movieDetails:a.data,movieCast:n.data}});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[t]);var c=Object(f.c)((function(e){return e.movie.movieDetails})),r=Object(f.c)((function(e){return e.movie.movieCast}));return Object(a.jsxs)("div",{className:"movie-details",children:[Object(a.jsxs)("div",{className:"header",style:{background:'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("'.concat(x(c.backdrop_path,"original"),'") center center/cover')},children:[Object(a.jsx)("h1",{children:c.title}),x(c.poster_path,"w1280")?Object(a.jsx)("div",{className:"poster",children:Object(a.jsx)("img",{src:x(c.poster_path,"w200"),alt:""})}):Object(a.jsx)("div",{className:"poster",children:Object(a.jsx)("img",{src:P,alt:""})}),Object(a.jsx)("h3",{className:c.vote_average>=7?"green":c.vote_average>=5?"gray":"red",children:c.vote_average})]}),Object(a.jsx)("div",{className:"description",children:Object(a.jsx)("p",{children:c.overview})}),Object(a.jsx)("div",{className:"cast",children:r.cast?r.cast.map((function(e){return Object(a.jsx)(A,{id:e.id},e.id)})):""})]})};var S=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:["/","/&query="],exact:!0,children:Object(a.jsx)(O,{})}),Object(a.jsx)(l.a,{path:"/&query=:id",children:Object(a.jsx)(G,{})}),Object(a.jsx)(l.a,{path:"/movie/:id",children:Object(a.jsx)(y,{})})]})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,80)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))},H=c(16),T=c(8),F={movieDetails:[],movieCast:[]},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MOVIE":return Object(T.a)(Object(T.a)({},e),{},{movieDetails:t.payload.movieDetails,movieCast:t.payload.movieCast});default:return Object(T.a)({},e)}},Y={searchResults:[],searchHistory:[]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SEARCH":return Object(T.a)(Object(T.a)({},e),{},{searchResults:t.payload.search,searchHistory:[].concat(Object(N.a)(e.searchHistory),Object(N.a)(t.payload.search))});default:return Object(T.a)({},e)}},V={movieIds:[],bestMovie:{},theMostPopularMovie:{},bestCast:{},currentMovieDragId:null},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_DATA":return Object(T.a)(Object(T.a)({},e),{},{movieIds:t.payload.movieIds,bestMovie:t.payload.bestMovie,theMostPopularMovie:t.payload.theMostPopularMovie,bestCast:t.payload.bestCast});case"UPDATE_DRAG":return Object(T.a)(Object(T.a)({},e),{},{currentMovieDragId:t.payload.currentMovieDragId});default:return Object(T.a)({},e)}},z=Object(H.c)({search:L,movie:W,compare:X}),q=c(44),U=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.d)(Object(H.a)(q.a)),Z=Object(H.e)(z,U);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(f.a,{store:Z,children:Object(a.jsx)(o.a,{children:Object(a.jsx)(S,{})})})}),document.getElementById("root")),J()}},[[79,1,2]]]);
//# sourceMappingURL=main.19b06d92.chunk.js.map
(this.webpackJsonpproj=this.webpackJsonpproj||[]).push([[0],{100:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(45),n=s.n(c),r=(s(56),s(57),s(69),s(70),s(14)),i=s(3),l=s(5),j=s(0);function b(e){var t=e.loginData,s=e.loguot;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("nav",{className:"navbar nav-new-bg navbar-expand-lg navbar-dark",children:Object(j.jsxs)("div",{className:"container-fluid py-1",children:[Object(j.jsx)(l.b,{className:"navbar-brand fs-2 fw-bolder",to:"/home",children:"Noxe"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[t?Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("ul",{className:"navbar-nav me-auto pt-2 mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{activeClassName:"text-info",className:"nav-link h6 px-2",to:"/home",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{activeClassName:"text-info",className:"nav-link h6 px-2",to:"/about",children:"About"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{activeClassName:"text-info",className:"nav-link h6 px-2",to:"/movies",children:"Movies"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{activeClassName:"text-info",className:"nav-link h6 px-2",to:"/tvshows",children:"TvShows"})})]})}):"",Object(j.jsxs)("ul",{className:"navbar-nav ms-auto pt-2 mb-2 mb-lg-0",children:[t?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("li",{className:"nav-item  pe-5",children:Object(j.jsxs)("h2",{className:"h5 px-2 text-white",children:["welcom back ",Object(j.jsxs)("span",{className:"h3 text-warning",children:[t.first_name," "]})," "]})})}):"",Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{activeClassName:"text-info",className:"nav-link h6 px-2 text-white",href:"https://www.facebook.com/",target:"_blank",children:Object(j.jsx)("i",{className:"fab fa-facebook"})})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{activeClassName:"text-info",className:"nav-link h6 px-2 text-white",href:"https://www.instagram.com/",target:"_blank",children:Object(j.jsx)("i",{className:"fab fa-instagram"})})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{activeClassName:"text-info",className:"nav-link h6 px-2 text-white",href:"https://www.youtube.com/",target:"_blank",children:Object(j.jsx)("i",{className:"fab fa-youtube"})})}),t?Object(j.jsx)("li",{onClick:s,className:"nav-item",children:Object(j.jsx)("h3",{className:"nav-link h6 px-2 cursor-pointer",children:"Logout"})}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{activeClassName:"text-info",className:"nav-link h6 px-2",to:"/login",children:"Login"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{activeClassName:"text-info",className:"nav-link h6 px-2",to:"/register",children:"Register"})})]})]})]})]})})})}var o=s(4),m=s.n(o),d=s(9),h=s(10),x=s.n(h),p=s.p+"static/media/244649966_4232205663544220_8405245313951318868_n.4ae35ca8.jpg";function O(){var e="https://image.tmdb.org/t/p/w500",t=Object(a.useState)([]),s=Object(i.a)(t,2),c=s[0],n=s[1],r=Object(a.useState)([]),b=Object(i.a)(r,2),o=b[0],h=b[1];function O(e,t){return u.apply(this,arguments)}function u(){return(u=Object(d.a)(m.a.mark((function e(t,s){var a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()("https://api.themoviedb.org/3/trending/".concat(t,"/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1HUBTbEEbza_cbq0onB8g6ZkK0xau9NPUHjQjoYDgdd_6NnCJudZW0KNI"));case 2:a=e.sent,c=a.data,s(c.results.slice(0,10));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){O("movie",n),O("person",h)}),[]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"row mt-3",children:[Object(j.jsxs)("div",{className:"col-md-4",children:[Object(j.jsx)("div",{className:"badr w-25"}),Object(j.jsxs)("h2",{className:"fw-light",children:["Trending ",Object(j.jsx)("br",{})," Movies ",Object(j.jsx)("br",{})," To Watch Now"]}),Object(j.jsx)("p",{className:"text-muted my-3",children:"Most watch movies by days "}),Object(j.jsx)("div",{className:"badr"})]}),c.map((function(t,s){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"col-md-2 my-2",children:[Object(j.jsxs)("div",{className:"position-relative movie-details",children:[t.poster_path?Object(j.jsx)("img",{className:"w-100",src:e+t.poster_path,alt:t.title}):Object(j.jsx)("img",{className:"w-100",src:p,alt:"Not Found"}),Object(j.jsx)(l.b,{to:"/home/"+t.id,children:Object(j.jsx)("div",{className:"hidden-details pt-4",children:Object(j.jsxs)("h3",{className:"h5 pt-5 text-center text-warning",children:["click here ",Object(j.jsx)("br",{})," to ",Object(j.jsx)("br",{})," watch details "]})})})]}),Object(j.jsx)("h2",{className:"h6 mt-2",children:t.title})]},s)})}))]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"row mt-3",children:[Object(j.jsxs)("div",{className:"col-md-4",children:[Object(j.jsx)("div",{className:"badr w-25"}),Object(j.jsxs)("h2",{className:"fw-light",children:["Trending ",Object(j.jsx)("br",{})," Peoples ",Object(j.jsx)("br",{})," To Watch Now"]}),Object(j.jsx)("p",{className:"text-muted my-3",children:"Most watch Peoples by days "}),Object(j.jsx)("div",{className:"badr"})]}),o.map((function(t,s){return Object(j.jsxs)("div",{className:"col-md-2 my-2",children:[t.profile_path?Object(j.jsx)("img",{className:"w-100",src:e+t.profile_path,alt:t.name}):Object(j.jsx)("img",{className:"w-100",src:p,alt:"Not Found"}),Object(j.jsx)("h2",{className:"h6 mt-2",children:t.name})]},s)}))]})]})}function u(){return(u=Object(d.a)(m.a.mark((function e(t){var s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1HUBTbEEbza_cbq0onB8g6ZkK0xau9NPUHjQjoYDgdd_6NnCJudZW0KNI&language=en-US"));case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"d-flex flex-column vh-100 justify-content-between",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"text-center",children:"About"}),Object(j.jsx)("p",{className:"text-center text-muted h5",children:"Movies Data Base "}),Object(j.jsx)("p",{className:"text-center text-muted h5",children:"Full FrontEnd Project Using React "})]}),Object(j.jsx)("div",{children:Object(j.jsx)("footer",{className:"pb-5",children:Object(j.jsx)("p",{className:"mb-5 text-info h5",children:" Powered by Ahmed Abdelhamid Ahmed"})})})]})})}var v=s(13),f=s.n(v);function g(e){var t=Object(a.useState)(""),s=Object(i.a)(t,2),c=s[0],n=s[1],l=Object(a.useState)([]),b=Object(i.a)(l,2),o=b[0],h=b[1],p=Object(a.useState)(!1),O=Object(i.a)(p,2),u=O[0],N=O[1],v=Object(a.useState)({email:"",password:""}),g=Object(i.a)(v,2),w=g[0],y=g[1];function _(e){var t=Object(r.a)({},w);t[e.target.name]=e.target.value,y(t)}function k(){return f.a.object({email:f.a.string().required().email({tlds:{allow:["com","net"]}}),password:f.a.string().required().pattern(new RegExp("^[a-z][0-9]{3}$"))}).validate(w,{abortEarly:!1})}function S(){return(S=Object(d.a)(m.a.mark((function t(s){var a,c,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),!(a=k()).error){t.next=6;break}h(a.error.details),t.next=13;break;case 6:return N(!0),t.next=9,x.a.post("https://routeegypt.herokuapp.com/signin",w);case 9:c=t.sent,"success"==(r=c.data).message?(localStorage.setItem("userData",JSON.stringify(r.user)),e.getUserData(),e.history.push("/home"),N(!1)):(n(r.message),N(!1));case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsxs)("form",{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(j.jsxs)("div",{className:"my-2",children:[Object(j.jsx)("label",{htmlFor:"first_name",className:"my-1",children:"Email"}),Object(j.jsx)("input",{onChange:_,type:"email",name:"email",className:"form-control"})]}),Object(j.jsxs)("div",{className:"my-2",children:[Object(j.jsx)("label",{htmlFor:"first_name",className:"my-1",children:"Password"}),Object(j.jsx)("input",{onChange:_,type:"password",name:"password",className:"form-control"})]}),c?"":o.map((function(e,t){return Object(j.jsx)("div",{className:"alert alert-danger my-4 py-1",children:e.message},t)})),c?Object(j.jsx)("div",{className:"alert alert-danger my-4 py-1",children:c}):"",u?Object(j.jsx)("button",{className:"btn btn-info my-2",children:Object(j.jsx)("i",{className:"fas fa-spinner fa-spin"})}):Object(j.jsx)("button",{type:"submit",className:"btn btn-info my-2",children:"Login"})]})]})}function w(){var e="https://image.tmdb.org/t/p/w500",t=Object(a.useState)([]),s=Object(i.a)(t,2),c=s[0],n=s[1],r=Object(a.useState)([]),b=Object(i.a)(r,2),o=b[0],h=b[1],O=Object(a.useState)([]),u=Object(i.a)(O,2),N=u[0],v=u[1],f=Object(a.useState)([]),g=Object(i.a)(f,2),w=g[0],y=g[1];function _(e,t){return k.apply(this,arguments)}function k(){return(k=Object(d.a)(m.a.mark((function e(t,s){var a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1HUBTbEEbza_cbq0onB8g6ZkK0xau9NPUHjQjoYDgdd_6NnCJudZW0KNI"));case 2:a=e.sent,c=a.data,s(c.results.slice(0,10));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){_("now_playing",n),_("popular",h),_("top_rated",v),_("upcoming",y)}),[]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"row mt-3",children:[Object(j.jsxs)("div",{className:"col-md-4",children:[Object(j.jsx)("div",{className:"badr w-25"}),Object(j.jsxs)("h2",{className:"fw-light",children:["Now Playing ",Object(j.jsx)("br",{})," Movies ",Object(j.jsx)("br",{})," To Watch Now"]}),Object(j.jsx)("p",{className:"text-muted my-3",children:"Most watch movies by days "}),Object(j.jsx)("div",{className:"badr"})]}),c.map((function(t,s){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"col-md-2 my-2",children:[Object(j.jsxs)("div",{className:"position-relative movie-details",children:[t.poster_path?Object(j.jsx)("img",{className:"w-100",src:e+t.poster_path,alt:t.title}):Object(j.jsx)("img",{className:"w-100",src:p,alt:"Not Found"}),Object(j.jsx)(l.b,{to:"/movies/"+t.id,children:Object(j.jsx)("div",{className:"hidden-details pt-4",children:Object(j.jsxs)("h3",{className:"h5 pt-5 text-center text-warning",children:["click here ",Object(j.jsx)("br",{})," to ",Object(j.jsx)("br",{})," watch details "]})})})]}),Object(j.jsx)("h2",{className:"h6 mt-2",children:t.title})]},s)})}))]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"row mt-3",children:[Object(j.jsxs)("div",{className:"col-md-4",children:[Object(j.jsx)("div",{className:"badr w-25"}),Object(j.jsxs)("h2",{className:"fw-light",children:["Popular ",Object(j.jsx)("br",{})," Movies ",Object(j.jsx)("br",{})," To Watch Now"]}),Object(j.jsx)("p",{className:"text-muted my-3",children:"Most watch movies by days "}),Object(j.jsx)("div",{className:"badr"})]}),o.map((function(t,s){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"col-md-2 my-2",children:[Object(j.jsxs)("div",{className:"position-relative movie-details",children:[t.poster_path?Object(j.jsx)("img",{className:"w-100",src:e+t.poster_path,alt:t.title}):Object(j.jsx)("img",{className:"w-100",src:p,alt:"Not Found"}),Object(j.jsx)(l.b,{to:"/movies/"+t.id,children:Object(j.jsx)("div",{className:"hidden-details pt-4",children:Object(j.jsxs)("h3",{className:"h5 pt-5 text-center text-warning",children:["click here ",Object(j.jsx)("br",{})," to ",Object(j.jsx)("br",{})," watch details "]})})})]}),Object(j.jsx)("h2",{className:"h6 mt-2",children:t.title})]},s)})}))]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"row mt-3",children:[Object(j.jsxs)("div",{className:"col-md-4",children:[Object(j.jsx)("div",{className:"badr w-25"}),Object(j.jsxs)("h2",{className:"fw-light",children:["Top Rated ",Object(j.jsx)("br",{})," Movies ",Object(j.jsx)("br",{})," To Watch Now"]}),Object(j.jsx)("p",{className:"text-muted my-3",children:"Most watch movies by days "}),Object(j.jsx)("div",{className:"badr"})]}),N.map((function(t,s){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"col-md-2 my-2",children:[Object(j.jsxs)("div",{className:"position-relative movie-details",children:[t.poster_path?Object(j.jsx)("img",{className:"w-100",src:e+t.poster_path,alt:t.title}):Object(j.jsx)("img",{className:"w-100",src:p,alt:"Not Found"}),Object(j.jsx)(l.b,{to:"/movies/"+t.id,children:Object(j.jsx)("div",{className:"hidden-details pt-4",children:Object(j.jsxs)("h3",{className:"h5 pt-5 text-center text-warning",children:["click here ",Object(j.jsx)("br",{})," to ",Object(j.jsx)("br",{})," watch details "]})})})]}),Object(j.jsx)("h2",{className:"h6 mt-2",children:t.title})]},s)})}))]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"row mt-3",children:[Object(j.jsxs)("div",{className:"col-md-4",children:[Object(j.jsx)("div",{className:"badr w-25"}),Object(j.jsxs)("h2",{className:"fw-light",children:["Upcoming ",Object(j.jsx)("br",{})," Movies ",Object(j.jsx)("br",{})," To Watch Now"]}),Object(j.jsx)("p",{className:"text-muted my-3",children:"Most watch movies by days "}),Object(j.jsx)("div",{className:"badr"})]}),w.map((function(t,s){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"col-md-2 my-2",children:[Object(j.jsxs)("div",{className:"position-relative movie-details",children:[t.poster_path?Object(j.jsx)("img",{className:"w-100",src:e+t.poster_path,alt:t.title}):Object(j.jsx)("img",{className:"w-100",src:p,alt:"Not Found"}),Object(j.jsx)(l.b,{to:"/movies/"+t.id,children:Object(j.jsx)("div",{className:"hidden-details pt-4",children:Object(j.jsxs)("h3",{className:"h5 pt-5 text-center text-warning",children:["click here ",Object(j.jsx)("br",{})," to ",Object(j.jsx)("br",{})," watch details "]})})})]}),Object(j.jsx)("h2",{className:"h6 mt-2",children:t.title})]},s)})}))]})]})}function y(){return(y=Object(d.a)(m.a.mark((function e(t){var s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1HUBTbEEbza_cbq0onB8g6ZkK0xau9NPUHjQjoYDgdd_6NnCJudZW0KNI&language=en-US"));case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=s(48),k=s(49),S=s(51),F=s(50),C=function(e){Object(S.a)(s,e);var t=Object(F.a)(s);function s(){return Object(_.a)(this,s),t.apply(this,arguments)}return Object(k.a)(s,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"container p-5 vh-100",children:[Object(j.jsx)("h1",{className:"fs-1 fw-bolder p-4",children:"Page Not Found"}),Object(j.jsx)("p",{className:"fs-4 text-white text-opacity-50 p-4",children:"We couldn't find what you were looking for."})]})})}}]),s}(a.Component);function E(e){var t=Object(a.useState)(""),s=Object(i.a)(t,2),c=s[0],n=s[1],l=Object(a.useState)([]),b=Object(i.a)(l,2),o=b[0],h=b[1],p=Object(a.useState)(!1),O=Object(i.a)(p,2),u=O[0],N=O[1],v=Object(a.useState)({first_name:"",last_name:"",age:0,email:"",password:""}),g=Object(i.a)(v,2),w=g[0],y=g[1];function _(e){var t=Object(r.a)({},w);t[e.target.name]=e.target.value,y(t)}function k(){return f.a.object({first_name:f.a.string().alphanum().min(3).max(10).required(),last_name:f.a.string().alphanum().min(3).max(10).required(),age:f.a.number().min(16).max(60).required(),email:f.a.string().required().email({tlds:{allow:["com","net"]}}),password:f.a.string().required().pattern(new RegExp("^[a-z][0-9]{3}$"))}).validate(w,{abortEarly:!1})}function S(){return(S=Object(d.a)(m.a.mark((function t(s){var a,c,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),!(a=k()).error){t.next=6;break}h(a.error.details),t.next=13;break;case 6:return N(!0),t.next=9,x.a.post("https://routeegypt.herokuapp.com/signup",w);case 9:c=t.sent,"success"==(r=c.data).message?(e.history.push("/login"),N(!1)):(n(r.message),N(!1));case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Registeration form"}),Object(j.jsxs)("form",{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(j.jsxs)("div",{className:"my-2",children:[Object(j.jsx)("label",{htmlFor:"first_name",className:"my-1",children:"First Name"}),Object(j.jsx)("input",{onChange:_,type:"text",name:"first_name",className:"form-control"})]}),Object(j.jsxs)("div",{className:"my-2",children:[Object(j.jsx)("label",{htmlFor:"first_name",className:"my-1",children:"Last Name"}),Object(j.jsx)("input",{onChange:_,type:"text",name:"last_name",className:"form-control"})]}),Object(j.jsxs)("div",{className:"my-2",children:[Object(j.jsx)("label",{htmlFor:"first_name",className:"my-1",children:"Age"}),Object(j.jsx)("input",{onChange:_,type:"number",name:"age",className:"form-control"})]}),Object(j.jsxs)("div",{className:"my-2",children:[Object(j.jsx)("label",{htmlFor:"first_name",className:"my-1",children:"Email"}),Object(j.jsx)("input",{onChange:_,type:"email",name:"email",className:"form-control"})]}),Object(j.jsxs)("div",{className:"my-2",children:[Object(j.jsx)("label",{htmlFor:"first_name",className:"my-1",children:"Password"}),Object(j.jsx)("input",{onChange:_,type:"password",name:"password",className:"form-control"})]}),c?"":o.map((function(e,t){return Object(j.jsx)("div",{className:"alert alert-danger my-4 py-1",children:e.message},t)})),c?Object(j.jsx)("div",{className:"alert alert-danger my-4 py-1",children:c}):"",u?Object(j.jsx)("button",{className:"btn btn-info my-2",children:Object(j.jsx)("i",{className:"fas fa-spinner fa-spin"})}):Object(j.jsx)("button",{type:"submit",className:"btn btn-info my-2",children:"Register"})]})]})}function I(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1];function n(){return(n=Object(d.a)(m.a.mark((function e(t,s){var a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()("https://api.themoviedb.org/3/tv/".concat(t,"?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1HUBTbEEbza_cbq0onB8g6ZkK0xau9NPUHjQjoYDgdd_6NnCJudZW0KNI"));case 2:a=e.sent,c=a.data,s(c.results.slice(0,16));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(e,t){n.apply(this,arguments)}("popular",c)}),[]),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"row mt-3",children:[Object(j.jsxs)("div",{className:"col-md-4",children:[Object(j.jsx)("div",{className:"badr w-25"}),Object(j.jsxs)("h2",{className:"fw-light",children:["TV ",Object(j.jsx)("br",{})," Shows ",Object(j.jsx)("br",{})," To Watch Now"]}),Object(j.jsx)("p",{className:"text-muted my-3",children:"Most watch Shows by days "}),Object(j.jsx)("div",{className:"badr"})]}),s.map((function(e,t){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"col-md-2 my-2",children:[Object(j.jsxs)("div",{className:"position-relative movie-details",children:[e.poster_path?Object(j.jsx)("img",{className:"w-100",src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:e.name}):Object(j.jsx)("img",{className:"w-100",src:p,alt:"Not Found"}),Object(j.jsx)(l.b,{to:"/tvshows/"+e.id,children:Object(j.jsx)("div",{className:"hidden-details pt-4",children:Object(j.jsxs)("h3",{className:"h5 pt-5 text-center text-warning",children:["click here ",Object(j.jsx)("br",{})," to ",Object(j.jsx)("br",{})," watch details "]})})})]}),Object(j.jsx)("h2",{className:"h6 mt-2",children:e.name})]},t)})}))]})})}function D(){return(D=Object(d.a)(m.a.mark((function e(t){var s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()("https://api.themoviedb.org/3/tv/".concat(t,"?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1HUBTbEEbza_cbq0onB8g6ZkK0xau9NPUHjQjoYDgdd_6NnCJudZW0KNI&language=en-US"));case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){var t=e.match.params.id,s=Object(a.useState)(""),c=Object(i.a)(s,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){(function(e){return u.apply(this,arguments)})(t).then((function(e){r(e.data)})),r(n)}),[]),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-6 p-5",children:n.poster_path?Object(j.jsx)("img",{className:"w-100 ",src:"https://image.tmdb.org/t/p/w500"+n.poster_path,alt:n.title}):Object(j.jsx)("img",{className:"w-100",src:p,alt:"Not Found"})}),Object(j.jsxs)("div",{className:"col-md-6 p-5",children:[Object(j.jsx)("h1",{children:n.title}),Object(j.jsx)("p",{className:"pt-5 h4",children:n.overview}),Object(j.jsxs)("p",{className:"pt-5 h5",children:["Show Date : ",Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"pt-2 h6",children:n.release_date})," "]}),Object(j.jsxs)("p",{className:"pt-5 h5",children:["Vote Average : ",Object(j.jsx)("br",{})," ",Object(j.jsx)("span",{className:"pt-2 h6",children:n.vote_average})]}),Object(j.jsxs)("p",{className:"pt-5 h5",children:["Vote Count : ",Object(j.jsx)("br",{})," ",Object(j.jsx)("span",{className:"pt-2 h6",children:n.vote_count})]}),Object(j.jsxs)("p",{className:"pt-5 h5",children:[" For More Information ",Object(j.jsx)("a",{href:n.homepage,children:"click here"})]})]})]})})}function U(e){var t=e.match.params.id,s=Object(a.useState)(""),c=Object(i.a)(s,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){(function(e){return y.apply(this,arguments)})(t).then((function(e){r(e.data)})),r(n)}),[]),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-6 p-5",children:n.poster_path?Object(j.jsx)("img",{className:"w-100 ",src:"https://image.tmdb.org/t/p/w500"+n.poster_path,alt:n.title}):Object(j.jsx)("img",{className:"w-100",src:p,alt:"Not Found"})}),Object(j.jsxs)("div",{className:"col-md-6 p-5",children:[Object(j.jsx)("h1",{children:n.title}),Object(j.jsx)("p",{className:"pt-5 h4",children:n.overview}),Object(j.jsxs)("p",{className:"pt-5 h5",children:["Show Date : ",Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"pt-2 h6",children:n.release_date})," "]}),Object(j.jsxs)("p",{className:"pt-5 h5",children:["Vote Average : ",Object(j.jsx)("br",{})," ",Object(j.jsx)("span",{className:"pt-2 h6",children:n.vote_average})]}),Object(j.jsxs)("p",{className:"pt-5 h5",children:["Vote Count : ",Object(j.jsx)("br",{})," ",Object(j.jsx)("span",{className:"pt-2 h6",children:n.vote_count})]}),Object(j.jsxs)("p",{className:"pt-5 h5",children:[" For More Information ",Object(j.jsx)("a",{href:n.homepage,children:"click here"})]})]})]})})}function M(e){var t=e.match.params.id,s=Object(a.useState)(""),c=Object(i.a)(s,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){(function(e){return D.apply(this,arguments)})(t).then((function(e){r(e.data)})),r(n)}),[]),console.log(n),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-6 p-5",children:n.poster_path?Object(j.jsx)("img",{className:"w-100 ",src:"https://image.tmdb.org/t/p/w500"+n.poster_path,alt:n.name}):Object(j.jsx)("img",{className:"w-100",src:p,alt:"Not Found"})}),Object(j.jsxs)("div",{className:"col-md-6 p-5",children:[Object(j.jsx)("h1",{children:n.name}),Object(j.jsx)("p",{className:"pt-5 h4",children:n.overview}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{className:"pt-5 h5 pe-5 d-inline-block",children:["Number Of Episodes : ",Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"pt-2 h6",children:n.number_of_episodes})," "]}),Object(j.jsxs)("p",{className:"pt-5 h5 ps-2 d-inline-block",children:["Number Of Seasons : ",Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"pt-2 h6",children:n.number_of_seasons})," "]})]}),Object(j.jsxs)("p",{className:"pt-5 h5",children:["Vote Average : ",Object(j.jsx)("br",{})," ",Object(j.jsx)("span",{className:"pt-2 h6",children:n.vote_average})]}),Object(j.jsxs)("p",{className:"pt-5 h5",children:["Vote Count : ",Object(j.jsx)("br",{})," ",Object(j.jsx)("span",{className:"pt-2 h6",children:n.vote_count})]}),Object(j.jsxs)("p",{className:"pt-5 h5",children:[" For More Information ",Object(j.jsx)("a",{href:n.homepage,children:"click here"})]})]})]})})}var A=s(2);function P(e){var t=e.path,s=e.component;return localStorage.getItem("userData")?Object(j.jsx)(A.b,{path:t,component:s}):Object(j.jsx)(A.a,{to:"/login"})}function B(){var e=Object(A.g)(),t=Object(a.useState)(null),s=Object(i.a)(t,2),c=s[0],n=s[1];function l(){var e=JSON.parse(localStorage.getItem("userData"));n(e)}return Object(a.useEffect)((function(){localStorage.getItem("userData")&&l()}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{loginData:c,loguot:function(){localStorage.removeItem("userData"),n(null),e.push("/login")}}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(A.d,{children:[Object(j.jsx)(A.a,{exact:!0,from:"/",to:"/home"}),Object(j.jsx)(P,{path:"/home",exact:!0,component:O}),Object(j.jsx)(P,{path:"/about",component:N}),Object(j.jsx)(P,{path:"/movies",exact:!0,component:w}),Object(j.jsx)(P,{path:"/tvshows",exact:!0,component:I}),Object(j.jsx)(P,{path:"/home/:id",exact:!0,component:T,render:function(e){return Object(j.jsx)(T,Object(r.a)({},e))}}),Object(j.jsx)(P,{path:"/movies/:id",exact:!0,component:U,render:function(e){return Object(j.jsx)(U,Object(r.a)({},e))}}),Object(j.jsx)(P,{path:"/tvshows/:id",exact:!0,component:M,render:function(e){return Object(j.jsx)(M,Object(r.a)({},e))}}),Object(j.jsx)(A.b,{path:"/register",render:function(e){return Object(j.jsx)(E,Object(r.a)({},e))}}),Object(j.jsx)(A.b,{path:"/login",render:function(e){return Object(j.jsx)(g,Object(r.a)({getUserData:l},e))}}),Object(j.jsx)(A.b,{path:"*",component:C})]})})]})}n.a.render(Object(j.jsx)(l.a,{children:Object(j.jsx)(B,{})}),document.getElementById("root"))},70:function(e,t,s){}},[[100,1,2]]]);
//# sourceMappingURL=main.478fbc41.chunk.js.map
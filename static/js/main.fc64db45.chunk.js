(this["webpackJsonpmodular-admin-tailwind-react"]=this["webpackJsonpmodular-admin-tailwind-react"]||[]).push([[0],{145:function(e,a,t){},15:function(e,a,t){"use strict";var n={navigationType:"hash",useSampleData:!0,api:{useMocks:!0,url:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_URL||"/api"}};a.a=n},197:function(e,a){},199:function(e,a){},347:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t.n(n),s=t(20),i=(t(0),t(132)),o=t.n(i),c=(t(145),t(63)),u=t.n(c),l=t(15),m={token:null,init:function(){l.a.api.useMocks?this.token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Db8fjZU7MkBZoJDjmjuvv2EeDgG9RSaZ1xKm__qHelw":this.token=u.a.get("token")||null},auth:function(e){u.a.set("token",e)},unauth:function(){u.a.remove("token")},isAuthenticated:function(){return!!this.token},getToken:function(){return this.token}},d=t(133),p=t.n(d).a.create({baseURL:l.a.api.url});p.interceptors.request.use((function(e){var a=m.getToken();return e.headers.Authorization="Bearer ".concat(a),e}),(function(e){return Promise.reject(e)})),p.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&m.unauth(),Promise.reject(e)}));var f,g=p,b={getOne:function(e){return g.get("/organizations/".concat(e)).then((function(e){return e.data}))},getList:function(e){return g.get("/organizations",{params:e}).then((function(e){return e.data}))},create:function(e){return g.post("/organizations",e).then((function(e){return e.data}))},update:function(e,a){return g.put("/organizations/".concat(e),a).then((function(e){return e.data}))},remove:function(e){return g.delete("/organizations/".concat(e)).then((function(e){return e.data}))}},j={getProfile:function(){return g.get("/users/profile").then((function(e){return e.data}))},getOne:function(e){return g.get("/users/".concat(e)).then((function(e){return e.data}))},getList:function(e){return g.get("/users",{params:e}).then((function(e){return e.data}))},create:function(e){return g.post("/users",e).then((function(e){return e.data}))},update:function(e,a){return g.put("/users/".concat(e),a).then((function(e){return e.data}))},remove:function(e){return g.delete("/users/".concat(e)).then((function(e){return e.data}))}};l.a.api.useMocks&&(f=t(348));var h={instance:g,organizations:b,users:j,init:function(){var e=Object(s.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f){e.next=8;break}return e.next=3,caches.keys();case 3:return a=e.sent,e.next=6,Promise.all(a.map((function(e){return caches.delete(e)})));case 6:return e.next=8,f.default.init();case 8:return e.abrupt("return",g);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},v=t(350),x=t(9),y=t(136),O=t(78),N=t(5),I=t(4),w=function(e){var a=e.children;return Object(I.jsx)("div",{children:a})},k=function(){return Object(I.jsx)("div",{className:"w-full h-full max-w-8xl mx-auto",children:Object(I.jsxs)("div",{className:"lg:flex h-screen",children:[Object(I.jsxs)("div",{id:"AppSidebarContainer",className:" overflow-scroll z-40 inset-0 flex-none h-screen bg-black bg-opacity-25 w-full static top-0 hidden lg:w-60 xl:w-72 lg:block ",children:[Object(I.jsx)("div",{className:"h-16 bg-red-100 sticky top-0",children:"Logo"}),Object(I.jsx)("div",{id:"AppSidebarNav",className:"bg-blue-200",style:{height:300},children:"Nav Menu"})]}),Object(I.jsxs)("div",{id:"AppContentContainer",className:"w-full h-screen overflow-scroll",children:[Object(I.jsx)("div",{id:"AppHeaderContainer",className:"w-full bg-gray-200 h-16 sticky top-0",children:"Header"}),Object(I.jsx)("div",{id:"AppPageContainer",className:"bg-yellow-100",style:{height:1500},children:"Content"})]})]})})},M=function(e){var a=e.children;return"history"===l.a.navigationType?Object(I.jsx)(O.a,{children:a}):Object(I.jsx)(O.b,{children:a})},z=function(e){var a=e.component,t=e.layout,n=e.children,r=Object(y.a)(e,["component","layout","children"]);return Object(I.jsx)(N.a,Object(x.a)(Object(x.a)({},r),{},{render:function(e){return a?t?Object(I.jsx)(t,{children:Object(I.jsx)(a,Object(x.a)({},e))}):Object(I.jsx)(a,Object(x.a)({},e)):null},children:n}))},U=function(){return Object(I.jsx)(M,{children:Object(I.jsx)(N.c,{children:Object(I.jsx)(z,{exact:!0,path:"/",component:k,layout:w})})})},A=function(){return Object(I.jsx)("div",{className:"App",children:Object(I.jsx)(U,{})})},_=function(){return Object(I.jsx)(v.a,{locale:navigator.language,children:Object(I.jsx)(A,{})})};Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m.init(),e.next=3,h.init();case 3:o.a.render(Object(I.jsx)(_,{}),document.getElementById("root"));case 4:case"end":return e.stop()}}),e)})))()},348:function(e,a,t){"use strict";t.r(a);var n=t(23),r=t(76),s=(t(173),t(9)),i=t(3),o=t.n(i),c=t(20),u=t(44),l=t.n(u),m=t(14),d=t(15),p=t(134),f=t.n(p),g=t(77),b=t.n(g),j=[{id:1,organizationId:1,userId:1,role:"owner"},{id:2,organizationId:1,userId:2,role:"admin"},{id:3,organizationId:1,userId:2,role:"member"},{id:4,organizationId:2,userId:2,role:"owner"},{id:5,organizationId:3,userId:3,role:"owner"},{id:6,organizationId:3,userId:2,role:"member"}],h={list:j,byUserId:b()(j,"userId"),byOrganizationId:b()(j,"organizationId")},v=t(135),x=[{id:1,name:"ModularCode",plan:{id:"silver",name:"Silver"}},{id:2,name:"Cool LLC",plan:{id:"gold",name:"Gold"}},{id:3,name:"Other LLC",plan:{id:"trial",name:"Trial"}}],y={list:x,byId:t.n(v)()(x,"id")},O=[{id:1,firstName:"Gevorg",lastName:"Harutyunyan",username:"modularcoder",email:"modularcoder@gmail.com",avatarUrl:"https://avatars3.githubusercontent.com/u/3959008?v=3&s=40",globalRole:"admin",status:"active"},{id:2,firstName:"Jay",lastName:"Nickolson",username:null,email:"example@gmail.com",avatarUrl:"https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg",status:"active"},{id:3,firstName:"Ana",lastName:"De Armas",username:null,email:"Ana+De+Armas@example.com",avatarUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NjYzMzE1MV5BMl5BanBnXkFtZTgwNTA4NDY4OTE@._V1_UX172_CR0,0,172,256_AL_.jpg",status:"active"},{id:4,firstName:"Armas",lastName:"De Ana",username:null,email:"Ana+De+Armas@example.com",avatarUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MzgxMzQ5N15BMl5BanBnXkFtZTgwMzMzNjkwOTE@._V1_UX172_CR0,0,172,256_AL_.jpg",status:"active"},{id:5,firstName:"Sonequa",lastName:"Martin-Green",email:"Sonequa+Martin+Green@example.com",avatarUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg",status:"disabled"},{id:6,firstName:"Bessie",lastName:"Walker",username:"bwalk",email:"bessie.walker@example.com",avatarUrl:"https://randomuser.me/api/portraits/women/29.jpg",globalRole:"admin",status:"active"},{id:7,firstName:"Scarlett",lastName:"Sanders",username:"sanders",email:"scarlett.sanders@example.com",avatarUrl:"https://randomuser.me/api/portraits/women/26.jpg",status:"active"},{id:8,firstName:"Scott",lastName:"Jensen",username:"scjx",email:"scott.jensen@example.com",avatarUrl:"https://randomuser.me/api/portraits/men/87.jpg",status:"pending"},{id:9,firstName:"Marcus ",lastName:"Barrett",username:null,email:"marcus.barrett@example.com",avatarUrl:"https://randomuser.me/api/portraits/men/88.jpg",status:"pending"},{id:10,firstName:"Penny",lastName:"Lawrence",email:"penny.lawrence@example.com",avatarUrl:"https://randomuser.me/api/portraits/women/79.jpg",status:"active"},{id:11,firstName:"Melvin",lastName:"Sutton",username:"johndoe1",email:"melvin.sutton@example.com",avatarUrl:"https://randomuser.me/api/portraits/men/85.jpg",globalRole:"admin",status:"disabled"},{id:12,firstName:"Della",lastName:"Case",username:null,email:"della.case@example.com",avatarUrl:"https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e",status:"pending"},{id:13,firstName:"Fischer",lastName:"Garland",username:"fgfr",email:"Fischer+Garland@example.com",avatarUrl:"https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=f05c14dd4db49f08a789e6449604c490",status:"active"},{id:14,firstName:"Abdullah",lastName:"Hadley",username:"hadley",email:"Hadley+Abdullah@example.com",avatarUrl:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f",status:"active"},{id:15,firstName:"Lucy",lastName:"Walker",email:"Lucy+Walker@example.com",avatarUrl:"https://randomuser.me/api/portraits/women/0.jpg",status:"active"}].map((function(e){var a=h.byUserId[e.id]||[];return Object(s.a)(Object(s.a)({},e),{},{userOgranizations:a.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{organization:Object(u.get)(y.byId,e.organizationId,{})})})),createdAt:f()().subtract(e.id,"days").format()})})),N=Object(u.keyBy)(O,"id"),I={list:O,byId:N,current:N[1]},w=d.a.api.url,k=[m.c.get("".concat(w,"/users/profile"),(function(e,a,t){return a(t.json(I.current))})),m.c.get("".concat(w,"/users"),function(){var e=Object(c.a)(o.a.mark((function e(a,t,n){var r,s,i,c,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=parseInt(a.params.limit||"10"),s=parseInt(a.params.offset||"0"),i=a.params.order?JSON.parse(a.params.order||"{}"):null,c=i?l.a.orderBy(I.list,[i.orderBy],[i.order]):I.list,u={users:c.slice(s,s+r),count:c.length},e.abrupt("return",t(n.status(200),n.delay(500),n.json(u)));case 6:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}()),m.c.get("".concat(w,"/users/:userId"),(function(e,a,t){var n=e.params.userId,r=I.byId[n];return r?a(t.status(200),t.delay(200),t.json(r)):a(t.status(404),t.status(200),t.json({message:"User not found"}))})),m.c.post("".concat(w,"/users"),(function(e,a,t){return a(t.status(200),t.delay(200),t.json(Object(s.a)({},e.body)))})),m.c.put("".concat(w,"/users/:userId"),(function(e,a,t){var n=e.params.userId,r=I.byId[n];return r?a(t.status(200),t.delay(200),t.json(Object(s.a)({},r))):a(t.status(403),t.json({message:"Update not permitted"}))})),m.c.delete("".concat(w,"/users/:userId"),(function(e,a,t){var n=e.params.userId;return I.byId[n]?a(t.status(200),t.delay(200),t.json({message:"User removed"})):a(t.status(403),t.json({message:"User not found or forbidden"}))}))],M=r.a.apply(void 0,Object(n.a)(k)).start;a.default={init:M}}},[[347,1,2]]]);
//# sourceMappingURL=main.fc64db45.chunk.js.map
(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{65:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(28),i=c.n(s),a=(c(32),c(16)),j=c.n(a),b=c(8),o=c(29),u=c(7),d=c(6),l=c(2),h=c(0);var O=function(e){var t=e.user;return Object(h.jsxs)("div",{children:["Balance: ",t.accountBalance]})};var x=function(e){var t=e.user;return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:"https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png",alt:"bank"}),Object(h.jsx)("h1",{children:"Bank of React"}),Object(h.jsx)(d.b,{to:"/userProfile",children:"User Profile"})," "," ",Object(h.jsx)(d.b,{to:"/Debit",children:"Debit"}),Object(h.jsx)(d.b,{to:"/Credit",children:"Credit"}),Object(h.jsx)(O,{user:t})]})};var m=function(e){var t=e.user;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"User Profile"}),Object(h.jsxs)("div",{children:["Username: ",t.userName]}),Object(h.jsxs)("div",{children:["Member Since: ",t.memberSince]}),Object(h.jsx)(d.b,{to:"/",children:"Return to Home"})]})};var p=function(e){var t=e.mockLogIn,c=Object(n.useState)({userName:"",password:""}),r=Object(u.a)(c,2),s=r[0],i=r[1],a=Object(n.useState)(!1),j=Object(u.a)(a,2),o=j[0],d=j[1];function O(e){var t=Object(b.a)({},s),c=e.target.name,n=e.target.value;t[c]=n,i(t)}return Object(h.jsx)(h.Fragment,{children:o?Object(h.jsx)(l.a,{to:"/userProfile"}):Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(s),d(!0)},children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"userName",children:"User Name"}),Object(h.jsx)("input",{type:"text",name:"userName",onChange:O,value:s.userName})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{type:"password",name:"password",onChange:O,value:s.password})]}),Object(h.jsx)("button",{children:"Log In"})]})})})};var f=function(e){var t=e.debits;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:" Debit "}),Object(h.jsxs)("form",{action:"/action_page.php",children:[Object(h.jsx)("label",{for:"fname",children:" Debit Amount "}),Object(h.jsx)("input",{type:"text",id:"amount",name:"amount",value:""}),Object(h.jsx)("label",{for:"lname",children:" Description "}),Object(h.jsx)("input",{type:"text",id:"description",name:"description",value:""}),Object(h.jsx)("input",{type:"submit",value:"Submit"})]}),Object(h.jsxs)("table",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:" Date "}),Object(h.jsx)("th",{children:" Amount "}),Object(h.jsx)("th",{children:" Description "})]}),t.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("th",{children:[" ",e.date," "]}),Object(h.jsxs)("th",{children:[" ",e.amount," "]}),Object(h.jsxs)("th",{children:[" ",e.description," "]})]})}))]})]})};var v=function(e){var t=e.credits,c=e.addCredit,r=Object(n.useState)({amount:100,description:"",time:"hi"}),s=Object(u.a)(r,2),i=s[0],a=s[1];function j(e){var t={credit:i},c=e.target.name,n=e.target.value;t[c]=n,a(t)}return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:" Credit "}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(i)},children:[Object(h.jsx)("label",{for:"fname",children:" Credit Amount "}),Object(h.jsx)("input",{type:"text",id:"amount",name:"amount",onChange:j,value:i.amount}),Object(h.jsx)("label",{for:"lname   ",children:" Description "}),Object(h.jsx)("input",{type:"text",id:"description",name:"description",onChange:j,value:i.description}),Object(h.jsx)("input",{type:"submit",value:"Submit"})]}),Object(h.jsxs)("table",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:" Date "}),Object(h.jsx)("th",{children:" Amount "}),Object(h.jsx)("th",{children:" Description "})]}),t.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("th",{children:[" ",e.date," "]}),Object(h.jsxs)("th",{children:[" ",e.amount," "]}),Object(h.jsxs)("th",{children:[" ",e.description," "]})]})}))]})]})},g=c(19),k=c.n(g);var D=function(){var e=Object(n.useState)({accountBalance:14568.27,currentUser:{userName:"joe_shmo",memberSince:"07/23/96"},debits:[],credits:[]}),t=Object(u.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(b.a)({},c),k.a.get("https://moj-api.herokuapp.com/debits").then((function(e){t.debits=e.data})).catch((function(e){return console.log(e)})),k.a.get("https://moj-api.herokuapp.com/credits").then((function(e){t.credits=e.data})).catch((function(e){return console.log(e)})),r(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(h.jsx)(d.a,{children:Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{exact:!0,path:"/login",children:Object(h.jsx)(p,{mockLogIn:function(e){var t=c.currentUser;t.userName=e.userName,r({currentUser:t})}})}),Object(h.jsx)(l.b,{exact:!0,path:"/",component:x,children:Object(h.jsx)(x,{user:c})}),Object(h.jsx)(l.b,{exact:!0,path:"/userProfile",children:Object(h.jsx)(m,{user:c.currentUser})}),Object(h.jsx)(l.b,{exact:!0,path:"/Debit",children:Object(h.jsx)(f,{debits:c.debits})}),Object(h.jsx)(l.b,{exact:!0,path:"/Credit",children:Object(h.jsx)(v,{addCredit:function(e){var t=Object(b.a)({},c);t.credits=t.credits.concat(e),r(t),function(){var e=0;c.credits.map((function(t){return e-=t.amount})),c.debits.map((function(t){return e+=t.amount}));var t=Object(b.a)({},c);t.accountBalance=e,r(t)}()},credits:c.credits})})]})})};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(D,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.9cfd9a58.chunk.js.map
(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1),o=(c(10),c(11),c(3)),d=c.n(o),i=c(0),r=function(e){var t=e.todo,c=e.selectedTodo,s=e.onSelectedTodo,a=t.id,n=t.title,l=t.completed,o=a===(null===c||void 0===c?void 0:c.id);return Object(i.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":o}),children:[Object(i.jsx)("td",{className:"is-vcentered",children:a}),Object(i.jsx)("td",{className:"is-vcentered",children:l&&Object(i.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("td",{className:"is-vcentered is-expanded",children:Object(i.jsx)("p",{className:d()({"has-text-success":l,"has-text-danger":!l}),children:n})}),Object(i.jsx)("td",{className:"has-text-right is-vcentered",children:Object(i.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(t)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:d()("far",{"fa-eye":!o,"fa-eye-slash":o})})})})})]},a)},j=function(e){var t=e.todos,c=e.selectedTodo,s=e.onSelectedTodo;return Object(i.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("th",{children:"Title"}),Object(i.jsx)("th",{children:" "})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(r,{todo:e,selectedTodo:c,onSelectedTodo:s})}))})]})},u=function(e){var t=e.status,c=e.query,s=e.onStatusChange,a=e.onQueryChange,n=Object(l.useCallback)((function(e){s(e.target.value)}),[]);return Object(i.jsxs)("form",{className:"field has-addons",children:[Object(i.jsx)("p",{className:"control",children:Object(i.jsx)("span",{className:"select",children:Object(i.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:n,children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"active",children:"Active"}),Object(i.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(i.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(i.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){return a(e.target.value)}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-magnifying-glass"})}),c.length&&Object(i.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(i.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})},b=(c(13),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m,O=function(e){var t=e.todo,c=e.onClose,s=t.id,a=t.title,o=t.completed,d=t.userId,r=Object(l.useState)(null),j=Object(n.a)(r,2),u=j[0],m=j[1];return Object(l.useEffect)((function(){(function(e){return h("/users/".concat(e))})(d).then((function(e){m(e)}))}),[d]),Object(i.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(i.jsx)("div",{className:"modal-background"}),u?Object(i.jsxs)("div",{className:"modal-card",children:[Object(i.jsxs)("header",{className:"modal-card-head",children:[Object(i.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(s)}),Object(i.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(i.jsxs)("div",{className:"modal-card-body",children:[Object(i.jsx)("p",{className:"block","data-cy":"modal-title",children:a}),Object(i.jsxs)("p",{className:"block","data-cy":"modal-user",children:[o?Object(i.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(i.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(i.jsx)("a",{href:"mailto:".concat(null===u||void 0===u?void 0:u.email),children:null===u||void 0===u?void 0:u.name})]})]})]}):Object(i.jsx)(b,{})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(m||(m={}));var x=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(null),o=Object(n.a)(a,2),d=o[0],r=o[1],x=Object(l.useState)(!1),f=Object(n.a)(x,2),v=f[0],p=f[1],N=Object(l.useState)(m.All),y=Object(n.a)(N,2),g=y[0],C=y[1],S=Object(l.useState)(""),k=Object(n.a)(S,2),T=k[0],w=k[1],A=Object(l.useMemo)((function(){return c.filter((function(e){return e.title.toLowerCase().includes(T.toLowerCase())})).filter((function(e){var t=e.completed;switch(g){case m.Active:return!t;case m.Completed:return t;default:return!0}}))}),[c,g,T]);return Object(l.useEffect)((function(){h("/todos").then((function(e){s(e),p(!0)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("h1",{className:"title",children:"Todos:"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)(u,{status:g,query:T,onStatusChange:C,onQueryChange:w})}),Object(i.jsxs)("div",{className:"block",children:[!v&&Object(i.jsx)(b,{}),v&&(A.length?Object(i.jsx)(j,{todos:A,selectedTodo:d,onSelectedTodo:r}):Object(i.jsx)("p",{children:"No data with this words..."}))]})]})})}),d&&Object(i.jsx)(O,{todo:d,onClose:function(){r(null)}})]})};a.a.render(Object(i.jsx)(x,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.965d6da0.chunk.js.map
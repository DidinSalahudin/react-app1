(this["webpackJsonpreact-app1"]=this["webpackJsonpreact-app1"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),o=a.n(r),i=(a(14),a(8)),s=a(1),l=a(2),m=a(4),u=a(3),d=a(5),p=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement("h1",{className:"mt-5"},"Todo List"),c.a.createElement("ul",{className:"list-group text-left"},this.props.item.map((function(e,t){return c.a.createElement("li",{className:"list-group-item",key:t}," ",e," ")}))))}}]),t}(n.Component),h=(a(15),a(16),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.setState({item:[].concat(Object(i.a)(a.state.item),[a.state.todoItem]),todoItem:""})},a.handleChange=function(e){a.setState({todoItem:e.target.value}),console.log(a.state)},a.state={todoItem:"",item:[]},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container text-center"},c.a.createElement("h1",{className:"mt-5"},"Todo Input"),c.a.createElement("div",{className:"card text-center"},c.a.createElement("div",{className:"card-body"},c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"input-group mb-3"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},c.a.createElement("i",{className:"fa fa-list"}))),c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",value:this.state.todoItem,onChange:this.handleChange}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("button",{className:"btn btn-primary btn-block"},"Tambah"))))),c.a.createElement(p,{item:this.state.item}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.dc1933fc.chunk.js.map
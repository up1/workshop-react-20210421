(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),c=n(8),s=n.n(c),r=(n(13),n(2)),o=n(3),u=n(5),j=n(4),l=n(0),b=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={date:new Date},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.xx=setInterval((function(){t.setState({date:new Date})}),500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.xx)}},{key:"render",value:function(){return Object(l.jsxs)("p",{children:[this.props.title,this.state.date.toLocaleTimeString()]})}}]),n}(a.Component),h=n(6),O=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).state={name:"",message:""},t.doKey1=t.doKey.bind(Object(h.a)(t)),t}return Object(o.a)(n,[{key:"doKey",value:function(t){this.setState({name:t.target.value})}},{key:"sayHi",value:function(){console.log("Click say hi"),this.setState({message:"Hello "+this.state.name})}},{key:"render",value:function(){var t=this;return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"text",onKeyUp:this.doKey1}),Object(l.jsx)("button",{onClick:function(){return t.sayHi()},children:"Say Hi"}),Object(l.jsx)("p",{children:this.state.message})]})}}]),n}(a.Component),d=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("li",{children:[this.props.info,"-",this.props.age]})}}]),n}(a.Component),f=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("ul",{children:[Object(l.jsx)(d,{info:"User 01",age:"30"}),Object(l.jsx)(d,{info:"User 02"}),Object(l.jsx)(d,{info:"User 03"})]}),Object(l.jsx)(b,{title:"Current data naja = "}),Object(l.jsx)(O,{})]})}}]),n}(a.Component),p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),a(t),i(t),c(t),s(t)}))};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.c08a2c71.chunk.js.map
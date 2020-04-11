(this.webpackJsonpxe=this.webpackJsonpxe||[]).push([[0],[,,,,,,,,,function(t,e,a){t.exports=a.p+"static/media/logo.c8582efa.svg"},,function(t){t.exports=JSON.parse('{"success":true,"query":{"from":"USD","to":"CRC","amount":10},"info":{"timestamp":1519328414,"rate":573.463},"historical":"","date":"2020-04-10","result":5734.57}')},function(t){t.exports=JSON.parse('{"success":true,"symbols":{"USD":"United States Dollar","CRC":"Costa Rican Col\xf3n"}}')},function(t,e,a){t.exports=a(21)},,,,,function(t,e,a){},,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(8),s=a.n(o),i=a(1),c=a(4),l=a(3),m=a(2),u=a(9),p=a.n(u),d=function(t){Object(l.a)(a,t);var e=Object(m.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var t=this.props.title;return r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,t),r.a.createElement("a",{className:"App-link",href:"https://fixer.io",target:"_blank",rel:"noopener noreferrer"},"XE uses fixer.io API"))}}]),a}(r.a.Component),h=a(6),f=a(10),v=a(5),b=function(t){Object(l.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).setErrorClass=function(){return t.props.validations?"is-invalid":"is-valid"},t}return a}(r.a.Component),E=function(t){Object(l.a)(a,t);var e=Object(m.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-4 mb-3"},r.a.createElement("label",{htmlFor:this.props.id},this.props.display),r.a.createElement("select",{name:this.props.id,id:this.props.id,value:this.props.value,onChange:this.props.action,required:!0,className:"form-control ".concat(this.setErrorClass())},this.props.options),r.a.createElement("div",{className:"invalid-feedback"},this.props.validations))}}]),a}(b),g=function(t){Object(l.a)(a,t);var e=Object(m.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-4 mb-3"},r.a.createElement("label",{htmlFor:this.props.id},this.props.display),r.a.createElement("input",{type:"number",name:this.props.id,id:this.props.id,value:this.props.value,placeholder:this.props.placeholder,onChange:this.props.action,required:!0,className:"form-control ".concat(this.setErrorClass())}),r.a.createElement("div",{className:"invalid-feedback"},this.props.validations))}}]),a}(b),y=a(11),S=a(12),j="http://data.fixer.io/api/",O="f1b1366b496bedfeeecb78075a2d1c3d",N=function(t){Object(l.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).setAPIError=function(){var t="Currencies no available";n.setState((function(e){var a=Object(f.a)({},e.validations);return a.from=t,a.to=t,{validations:a}}))},n.onChange=function(t){n.setState(Object(h.a)({},t.target.name,t.target.value))},n.onChangeNumeric=function(t){n.onChange(t);var e=t.target.value,a=Object.assign({},n.state);a.validations.amount=e?e<=0?"Amount must be positive":"":"Amount is required"},n.onSubmit=function(t){fetch("".concat(j).concat("convert","?access_key=").concat(O,"&from=").concat(n.state.from,"&to=").concat(n.state.to,"&amount=").concat(n.state.amount)).then((function(t){return t.json()})).then((function(t){t&&!t.success&&105===t.error.code&&(t=y,n.setState({error:"Using mock response due to API limitations"})),t&&t.success?(n.setState({amount:new Intl.NumberFormat("en-US").format(t.query.amount)}),n.setState({from:t.query.from}),n.setState({to:t.query.to}),n.setState({result:new Intl.NumberFormat("en-US").format(t.result)}),n.setState({rate:new Intl.NumberFormat("en-US").format(t.info.rate)}),n.setState({timestamp:new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(t.info.timestamp)}),n.setState({clicked:!0})):t?(n.setState({error:t.error.info}),n.setAPIError()):(n.setState({error:"Failed to load response data"}),n.setAPIError())}),(function(t){n.setState({error:t.toString()}),n.setAPIError()})),t.preventDefault()},n.state={clicked:!1,amount:1,from:"CRC",to:"USD",result:"",timestamp:"",rate:"",currencies:[],error:"",validations:{amount:"",from:"",to:""}},n.onChange=n.onChange.bind(Object(v.a)(n)),n.onSubmit=n.onSubmit.bind(Object(v.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("".concat(j).concat("symbols","?access_key=").concat(O)).then((function(t){return t.json()})).then((function(e){e&&!e.success&&105===e.error.code&&(e=S),e&&e.success?(t.setState({currencies:Object.keys(e.symbols).map((function(t){return{value:t,name:e.symbols[t]}}))}),t.setState({options:t.state.currencies.map((function(t){return r.a.createElement("option",{key:t.value,value:t.value},t.name)}))})):e?(t.setState({error:e.error.info}),t.setAPIError()):(t.setState({error:"Failed to load response data"}),t.setAPIError())}),(function(e){t.setState({error:e.toString()}),t.setAPIError()}))}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-row"},r.a.createElement(g,{action:this.onChangeNumeric,display:"Amount",placeholder:"Enter amount",id:"amount",value:this.state.amount,validations:this.state.validations.amount}),r.a.createElement(E,{action:this.onChange,display:"From",id:"from",value:this.state.from,options:this.state.options,validations:this.state.validations.from}),r.a.createElement(E,{action:this.onChange,display:"To",id:"to",value:this.state.to,options:this.state.options,validations:this.state.validations.to}),r.a.createElement("button",{className:"btn btn-primary btn-lg btn-block",type:"submit"},"Convert")),r.a.createElement("div",{className:"center-block ".concat(this.state.validations.amount||!this.state.clicked?"d-none":"")},r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item font-weight-bold"},r.a.createElement("span",{className:"result-md"},this.state.amount," ",this.state.from," = "),r.a.createElement("span",{className:"result-lg"},this.state.result," "),r.a.createElement("span",{className:"result-md"},this.state.to)),r.a.createElement("li",{className:"list-group-item font-weight-bold"},r.a.createElement("span",{className:"result-sm"},"1 ",this.state.from," = ",this.state.rate," ",this.state.to)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("small",{className:"text-muted"},"Last updated: ",this.state.timestamp)))),r.a.createElement("div",{className:"alert alert-warning center-block ".concat(this.state.error?"":"d-none"),role:"alert"},this.state.error))}}]),a}(r.a.Component),C=(a(18),function(t){Object(l.a)(a,t);var e=Object(m.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var t=this.props.header;return r.a.createElement("div",{className:"App"},r.a.createElement(d,{title:t}),r.a.createElement(N,null))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(19),a(20);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,{header:"Exchange rate app."})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.f46b4b09.chunk.js.map
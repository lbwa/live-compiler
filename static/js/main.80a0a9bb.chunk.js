(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),i=(n(14),n(3)),u=n(4),s=n(7),l=n(5),p=n(8),m=n(6),d=(n(16),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(l.a)(t).call(this))).update=function(t){try{e.setState({output:e.compiler(t.target.value),err:""})}catch(t){e.setState({err:t.message})}},e.compiler=function(e){return m.transform(e,{presets:["es2015","react"]}).code},e.state={input:'<div className="code"/>',output:"",err:""},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState(function(t){return{output:e.compiler(t.input)}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,this.state.err),r.a.createElement("main",{className:"container"},r.a.createElement("textarea",{onChange:this.update,defaultValue:this.state.input}),r.a.createElement("pre",null,this.state.output)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.80a0a9bb.chunk.js.map
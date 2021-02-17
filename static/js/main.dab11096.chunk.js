(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{16:function(e,t,n){},23:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),r=n(17),c=n.n(r),o=(n(23),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))}),s=n(3),l=n(5),d=n(6),u=n(10),h=n(9),m=n(11),b=n.n(m),j=n(4),p=n(8),f=(n(16),n(0)),O=function(){return Object(f.jsxs)("button",{className:"button button--md print",onClick:function(){return window.print()},children:[Object(f.jsx)(p.a,{icon:j.c}),"Print page"]})},g=n(18),x=n(7),v=(n(29),function(e){var t=e.animation,n=e.id,a=e.isRequired,i=e.label,r=e.name,c=e.onChange,o=e.placeholder,l=e.type,d=e.value,u={};switch(l){case"text":u.pattern="^\\p{L}*$",u.type="text";break;case"email":u.type="email";break;case"phone":u.type="phone";break;default:throw new Error("Unknown input type passed to <Input />.")}return Object(f.jsxs)("div",{className:"input ".concat(t),children:[Object(f.jsx)("label",{htmlFor:n,children:i}),Object(f.jsx)("input",Object(s.a)(Object(s.a)({autoComplete:"on",id:n,name:r,placeholder:o,required:a,value:d},u),{},{onChange:c}))]})}),y=function(e){var t=e.onClick;return Object(f.jsxs)("button",{className:"button button--md new-info",onClick:t,children:[Object(f.jsx)(p.a,{icon:j.b}),"Add more information"]})},k=(n(30),function(e){var t=e.inputs,n=e.enableAnimation;return Object(f.jsx)("div",{children:t.map((function(e,t){var i=n?"text-anim-".concat(t+1):"";return e.row?Object(f.jsx)("div",{className:"row ".concat(i),children:e.row.map((function(e){return Object(a.createElement)(v,Object(s.a)(Object(s.a)({},e),{},{key:b()()}))}))},b()()):Object(a.createElement)(v,Object(s.a)(Object(s.a)({animation:i},e),{},{key:b()()}))}))})}),w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={info:[]},a.addNewInfo=a.addNewInfo.bind(Object(x.a)(a)),a}return Object(d.a)(n,[{key:"addNewInfo",value:function(e){e.preventDefault();var t=Object(f.jsx)(k,{inputs:this.props.inputs,enableAnimation:!0}),n=[].concat(Object(g.a)(this.state.info),[t]);this.setState({info:n})}},{key:"render",value:function(){var e=this.props.legend,t=e.title,n=e.description,a="Personal Information"===t,i=Object(f.jsx)(k,{inputs:this.props.inputs,enableAnimation:!1}),r=this.state.info;return Object(f.jsxs)("fieldset",{children:[Object(f.jsxs)("legend",{className:"legend",children:[Object(f.jsx)("h2",{children:t}),Object(f.jsx)("p",{children:n})]}),Object(f.jsxs)("div",{className:"input-container",children:[i,0!==r.length&&r.map((function(e){return e})),!a&&Object(f.jsx)(y,{onClick:this.addNewInfo})]})]})}}]),n}(a.Component),N=(n(31),function(e){var t=e.children;return Object(f.jsx)("section",{className:"form-container",children:Object(f.jsx)("form",{className:"form form--round",children:t})})}),S=(n(32),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).formSection=[{legend:{title:"Personal Information",description:"Share your contact information so companies know how to reach you."},inputs:[{row:[{type:"text",label:"First Name",id:"first-name",isRequired:!0,name:"firstName",placeholder:"e.g. Biggy"},{type:"text",label:"Last Name",id:"last-name",isRequired:!0,name:"lastName",placeholder:"e.g. Enterprise"}]},{row:[{type:"email",label:"Email address",id:"email",isRequired:!0,name:"email",placeholder:"e.g. enterprise6@email.com"},{type:"phone",label:"Phone Number",id:"phone-number",isRequired:!0,name:"phoneNumber",placeholder:"e.g. (123) 456-7890"}]},{type:"text",label:"Residence",id:"residence",isRequired:!0,name:"residence",placeholder:"e.g. Newport News, US"}]},{legend:{title:"Education History",description:"Having a degree shows an ability to learn. Although not required, you may include it if you wish to share."},inputs:[{row:[{type:"text",label:"School Name",id:"school-name",isRequired:!1,name:"schoolName",placeholder:"e.g. Harvard University"},{type:"text",label:"Field of Study",id:"field-of-study",isRequired:!1,name:"fieldOfStudy",placeholder:"e.g. Computer Science, B.S."}]},{type:"text",label:"Date",id:"date",isRequired:!1,name:"date",placeholder:"e.g. 05/12/1938-02/17/1947"}]},{legend:{title:"Work Experience",description:"Employers love practical experience. List all relevant work stuff."},inputs:[{type:"text",label:"Date",id:"date",isRequired:!1,name:"date",placeholder:"e.g. 05/12/1938-02/17/1947"}]}],e.state={},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(N,{children:[this.formSection.map((function(e){return Object(a.createElement)(w,Object(s.a)(Object(s.a)({},e),{},{key:b()()}))})),Object(f.jsx)(O,{})]})}}]),n}(a.Component)),C=function(e){var t=e.themeState,n=e.clickHandler;return Object(f.jsx)("button",{"aria-label":t?"Activate dark theme":"Activate light theme",onClick:n,children:Object(f.jsx)(p.a,{icon:t?j.d:j.a})})},q=document.documentElement,A=function(){var e="light",t=localStorage.getItem("theme"),n=window.matchMedia("(prefers-color-scheme: dark)");return t?(q.setAttribute("data-theme","light"),"dark"===t&&(e="dark")):n.matches&&(e="dark"),"dark"===e?(q.setAttribute("data-theme","dark"),!1):(q.setAttribute("data-theme","light"),!0)}(),E=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={isLightTheme:A},e.changeTheme=e.changeTheme.bind(Object(x.a)(e)),e}return Object(d.a)(n,[{key:"changeTheme",value:function(){var e=this;this.setState({isLightTheme:!this.state.isLightTheme},(function(){var t=e.state.isLightTheme?"light":"dark";q.setAttribute("data-theme",t),localStorage.setItem("theme",t)}))}},{key:"render",value:function(){var e=this.state.isLightTheme;return Object(f.jsx)("header",{children:Object(f.jsx)(C,{themeState:e,clickHandler:this.changeTheme})})}}]),n}(a.Component);var I=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(E,{}),Object(f.jsx)("main",{children:Object(f.jsx)(S,{})})]})};c.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(I,{})}),document.getElementById("root")),o()}},[[33,1,2]]]);
//# sourceMappingURL=main.dab11096.chunk.js.map
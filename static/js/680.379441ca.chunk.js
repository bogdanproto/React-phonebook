"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{2390:function(n,r,e){e.d(r,{t:function(){return o}});var i,t=e(168),o=e(5867).ZP.form(i||(i=(0,t.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  input {\n    width: 312px;\n    height: 48px;\n    padding: 8px;\n\n    border-radius: 10px;\n    border: 1px solid rgba(0, 0, 0, 0.4);\n    background: rgba(255, 255, 255, 0.08);\n  }\n\n  button {\n    width: 312px;\n    height: 48px;\n\n    padding: 10px 20px;\n    margin-top: 16px;\n    margin-bottom: 16px;\n\n    cursor: pointer;\n    text-align: center;\n\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    border-radius: 5px;\n    border: 1px solid rgba(0, 0, 0, 0.4);\n    background-color: rgba(14, 100, 210, 0.9);\n    color: rgba(255, 255, 255, 0.9);\n\n    transition: background-color 0.3s, color 0.3s;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n\n    &:hover {\n      background-color: rgba(14, 100, 210, 1);\n    }\n\n    &:active {\n      background-color: rgba(14, 100, 210, 1);\n      transform: scale(0.98);\n      transition: transform 0.1s;\n    }\n  }\n  p {\n    position: absolute;\n    display: block;\n    padding: 8px;\n\n    font-size: 12px;\n    color: red;\n  }\n"])))},5508:function(n,r,e){e.d(r,{Dx:function(){return s},IV:function(){return p},w2:function(){return u}});var i,t,o,a=e(168),d=e(5867),l=e(1087),s=d.ZP.div(i||(i=(0,a.Z)(["\n  padding-top: 128px;\n  padding-bottom: 64px;\n  padding-left: 24px;\n  padding-right: 24px;\n  color: rgba(0, 0, 0, 0.8);\n\n  h1 {\n    margin-bottom: 48px;\n    text-align: center;\n  }\n"]))),p=d.ZP.div(t||(t=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 4px;\n  p {\n    color: rgba(0, 0, 0, 0.8);\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n  }\n"]))),u=(0,d.ZP)(l.OL)(o||(o=(0,a.Z)(["\n  text-decoration: none;\n\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  color: rgba(47, 137, 252, 1);\n"])))},3680:function(n,r,e){e.r(r),e.d(r,{default:function(){return w}});var i,t,o=e(1413),a=(e(2791),e(1134)),d=e(4695),l=e(410),s=e(9434),p=e(4640),u=e(2390),c=e(184),m=function(){var n,r,e,i=(0,a.cI)({resolver:(0,d.X)(l.MO)}),t=i.register,m=i.handleSubmit,x=i.formState.errors,g=(0,s.I0)();return(0,c.jsxs)(u.t,{onSubmit:m((function(n){g((0,p.w2)(n))})),children:[(0,c.jsxs)("label",{children:[(0,c.jsx)("input",(0,o.Z)((0,o.Z)({},t("name")),{},{placeholder:"Enter Your Full Name"})),(0,c.jsx)("p",{children:null===(n=x.name)||void 0===n?void 0:n.message})]}),(0,c.jsxs)("label",{children:[(0,c.jsx)("input",(0,o.Z)((0,o.Z)({},t("email")),{},{placeholder:"Enter Your Email"})),(0,c.jsx)("p",{children:null===(r=x.email)||void 0===r?void 0:r.message})]}),(0,c.jsxs)("label",{children:[(0,c.jsx)("input",(0,o.Z)((0,o.Z)({},t("password")),{},{type:"password",placeholder:"Enter Your Password"})),(0,c.jsx)("p",{children:null===(e=x.password)||void 0===e?void 0:e.message})]}),(0,c.jsx)("button",{type:"submit",children:"Signup"})]})},x=e(168),g=e(5867),h=g.ZP.div(i||(i=(0,x.Z)(["\n  padding-top: 128px;\n  padding-bottom: 64px;\n  padding-left: 24px;\n  padding-right: 24px;\n  color: rgba(0, 0, 0, 0.8);\n\n  h1 {\n    margin-bottom: 48px;\n    text-align: center;\n  }\n"]))),b=g.ZP.div(t||(t=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 4px;\n  p {\n    color: rgba(0, 0, 0, 0.8);\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n  }\n"]))),f=e(5508),Z=e(2186),w=function(){return(0,c.jsxs)(h,{children:[(0,c.jsx)("h1",{children:"PHONEBOOK"}),(0,c.jsx)(m,{}),(0,c.jsxs)(b,{children:[(0,c.jsx)("p",{children:"Already have an account"}),(0,c.jsx)(f.w2,{to:Z._.LOGIN,children:"Login"})]})]})}},410:function(n,r,e){e.d(r,{MO:function(){return a},UI:function(){return t},qp:function(){return o}});var i=e(6727),t=i.Ry({name:i.Z_().required("Name is required").trim(),phone:i.Rx().typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").min(8).required("A phone number is required")}),o=i.Ry({email:i.Z_().email("Email must be a valid").required("Email is required").trim(),password:i.Z_().required("Password is required").trim()}),a=i.Ry({name:i.Z_().required("Name is required").trim(),email:i.Z_().email("Email must be a valid").required("Email is required").trim(),password:i.Z_().required("Password is required").trim()})}}]);
//# sourceMappingURL=680.379441ca.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[581],{2390:function(n,r,e){e.d(r,{t:function(){return o}});var i,t=e(168),o=e(5867).ZP.form(i||(i=(0,t.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  input {\n    width: 312px;\n    height: 48px;\n    padding: 8px;\n\n    border-radius: 10px;\n    border: 1px solid rgba(0, 0, 0, 0.4);\n    background: rgba(255, 255, 255, 0.08);\n  }\n\n  button {\n    width: 312px;\n    height: 48px;\n\n    padding: 10px 20px;\n    margin-top: 16px;\n    margin-bottom: 16px;\n\n    cursor: pointer;\n    text-align: center;\n\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    border-radius: 5px;\n    border: 1px solid rgba(0, 0, 0, 0.4);\n    background-color: rgba(14, 100, 210, 0.9);\n    color: rgba(255, 255, 255, 0.9);\n\n    transition: background-color 0.3s, color 0.3s;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n\n    &:hover {\n      background-color: rgba(14, 100, 210, 1);\n    }\n\n    &:active {\n      background-color: rgba(14, 100, 210, 1);\n      transform: scale(0.98);\n      transition: transform 0.1s;\n    }\n  }\n  p {\n    position: absolute;\n    display: block;\n    padding: 8px;\n\n    font-size: 12px;\n    color: red;\n  }\n"])))},2581:function(n,r,e){e.r(r),e.d(r,{default:function(){return b}});var i=e(1413),t=e(1134),o=e(4695),a=e(410),s=e(9434),d=e(4640),l=e(2390),u=e(184),p=function(){var n,r,e=(0,t.cI)({resolver:(0,o.X)(a.qp)}),p=e.register,c=e.handleSubmit,m=e.formState.errors,x=(0,s.I0)();return(0,u.jsxs)(l.t,{onSubmit:c((function(n){x((0,d.vz)(n))})),children:[(0,u.jsxs)("label",{children:[(0,u.jsx)("input",(0,i.Z)((0,i.Z)({},p("email")),{},{placeholder:"Enter Your Email"})),(0,u.jsx)("p",{children:null===(n=m.email)||void 0===n?void 0:n.message})]}),(0,u.jsxs)("label",{children:[(0,u.jsx)("input",(0,i.Z)((0,i.Z)({},p("password")),{},{type:"password",placeholder:"Enter Your Password"})),(0,u.jsx)("p",{children:null===(r=m.password)||void 0===r?void 0:r.message})]}),(0,u.jsx)("button",{type:"submit",children:"Login"})]})},c=e(2791),m=e(5508),x=e(2186),h=e(8862),g=e(8119),b=function(){var n=(0,s.v9)(h.w).token,r=(0,s.I0)();return(0,c.useEffect)((function(){n||r((0,g.O)())}),[r,n]),(0,u.jsxs)(m.Dx,{children:[(0,u.jsx)("h1",{children:"PHONEBOOK"}),(0,u.jsx)(p,{}),(0,u.jsxs)(m.IV,{children:[(0,u.jsx)("p",{children:"Don't have an account?"}),(0,u.jsx)(m.w2,{to:x._.SIGIN,children:"Signup"})]})]})}},5508:function(n,r,e){e.d(r,{Dx:function(){return l},IV:function(){return u},w2:function(){return p}});var i,t,o,a=e(168),s=e(5867),d=e(1087),l=s.ZP.div(i||(i=(0,a.Z)(["\n  padding-top: 128px;\n  padding-bottom: 64px;\n  padding-left: 24px;\n  padding-right: 24px;\n  color: rgba(0, 0, 0, 0.8);\n\n  h1 {\n    margin-bottom: 48px;\n    text-align: center;\n  }\n"]))),u=s.ZP.div(t||(t=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 4px;\n  p {\n    color: rgba(0, 0, 0, 0.8);\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n  }\n"]))),p=(0,s.ZP)(d.OL)(o||(o=(0,a.Z)(["\n  text-decoration: none;\n\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  color: rgba(47, 137, 252, 1);\n"])))},410:function(n,r,e){e.d(r,{MO:function(){return a},UI:function(){return t},qp:function(){return o}});var i=e(6727),t=i.Ry({name:i.Z_().required("Name is required").trim(),phone:i.Rx().typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").min(8).required("A phone number is required")}),o=i.Ry({email:i.Z_().email("Email must be a valid").required("Email is required").trim(),password:i.Z_().required("Password is required").trim()}),a=i.Ry({name:i.Z_().required("Name is required").trim(),email:i.Z_().email("Email must be a valid").required("Email is required").trim(),password:i.Z_().required("Password is required").trim()})}}]);
//# sourceMappingURL=581.2f47840d.chunk.js.map
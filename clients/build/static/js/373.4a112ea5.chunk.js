"use strict";(self.webpackChunkclients=self.webpackChunkclients||[]).push([[373],{9373:function(e,n,o){o.r(n),o.d(n,{default:function(){return w}});var i,t=o(168),r=o(7630),a=o(4554),l=o(890),s=o(7689),c=o(6148),d=o(9201),u=o(184),h=(0,d.Z)((0,u.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack"),m=(0,d.Z)((0,u.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete"),p=(0,r.ZP)(a.Z)({padding:15}),f=(0,r.ZP)(l.Z)({fontSize:22,margin:"10px 0 20px 75px",display:"flex"}),v=(0,r.ZP)(a.Z)(i||(i=(0,t.Z)(["\n    font-size: 12px !important;\n    background: #ddd;\n    color: #222;\n    border-radius: 4px;\n    margin-left: 6px;\n    padding: 2px 4px;\n    align-self: center;\n"]))),g=(0,r.ZP)("img")({borderRadius:"50%",width:40,height:40,margin:"5px 10px 0 10px",backgroundColor:"#cccccc"}),x=(0,r.ZP)(a.Z)({marginLeft:15,width:"100%","& > div":{display:"flex","& > p > span":{fontSize:12,color:"#5E5E5E"}}}),S=(0,r.ZP)(l.Z)({margin:"0 50px 0 auto",fontSize:12,color:"#5E5E5E"}),w=function(){var e=(0,s.bx)().openDrawer,n=(0,s.TH)().state.email;return(0,u.jsxs)(a.Z,{style:e?{marginLeft:250,width:"100%"}:{width:"100%"},children:[(0,u.jsxs)(p,{children:[(0,u.jsx)(h,{fontSize:"small",color:"action",onClick:function(){return window.history.back()}}),(0,u.jsx)(m,{fontSize:"small",color:"action",style:{marginLeft:40}})]}),(0,u.jsxs)(f,{children:[n.subject," ",(0,u.jsx)(v,{component:"span",children:"Inbox"})]}),(0,u.jsxs)(a.Z,{style:{display:"flex"},children:[(0,u.jsx)(g,{src:c.RJ,alt:"profile"}),(0,u.jsxs)(x,{children:[(0,u.jsxs)(a.Z,{children:[(0,u.jsxs)(l.Z,{children:[n.to.split("@")[0],(0,u.jsxs)(a.Z,{component:"span",children:["\xa0<",n.to,">"]})]}),(0,u.jsxs)(S,{children:[new window.Date(n.date).getDate(),"\xa0",new window.Date(n.date).toLocaleString("default",{month:"long"}),"\xa0",new window.Date(n.date).getFullYear()]})]}),(0,u.jsx)(l.Z,{style:{marginTop:20},children:n.body})]})]})]})}},6148:function(e,n,o){o.d(n,{Fr:function(){return r},Pv:function(){return i},RJ:function(){return t}});var i="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png",t="https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png",r={inbox:{heading:"Your inbox is empty",subHeading:"Mails that don't appear in other tabs will be shown here."},drafts:{heading:"You don't have any saved drafts.",subHeading:"Saving a draft allows you to keep a message you aren't ready to send yet."},starred:{heading:"No starred messages",subHeading:"Stars let you give messages a special status to make them easier to find. To star a message, click on the star outline beside any message or conversation."},sent:{heading:"No sent messages!",subHeading:"Send one now!"},bin:{heading:"No conversations in Bin.",subHeading:""}}},9201:function(e,n,o){o.d(n,{Z:function(){return S}});var i=o(7462),t=o(2791),r=o(3366),a=o(3733),l=o(4419),s=o(4036),c=o(1046),d=o(7630),u=o(5878),h=o(1217);function m(e){return(0,h.Z)("MuiSvgIcon",e)}(0,u.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var p=o(184),f=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],v=(0,d.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,"inherit"!==o.color&&n["color".concat((0,s.Z)(o.color))],n["fontSize".concat((0,s.Z)(o.fontSize))]]}})((function(e){var n,o,i,t,r,a,l,s,c,d,u,h,m,p=e.theme,f=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:f.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(n=p.transitions)||null==(o=n.create)?void 0:o.call(n,"fill",{duration:null==(i=p.transitions)||null==(i=i.duration)?void 0:i.shorter}),fontSize:{inherit:"inherit",small:(null==(t=p.typography)||null==(r=t.pxToRem)?void 0:r.call(t,20))||"1.25rem",medium:(null==(a=p.typography)||null==(l=a.pxToRem)?void 0:l.call(a,24))||"1.5rem",large:(null==(s=p.typography)||null==(c=s.pxToRem)?void 0:c.call(s,35))||"2.1875rem"}[f.fontSize],color:null!=(d=null==(u=(p.vars||p).palette)||null==(u=u[f.color])?void 0:u.main)?d:{action:null==(h=(p.vars||p).palette)||null==(h=h.action)?void 0:h.active,disabled:null==(m=(p.vars||p).palette)||null==(m=m.action)?void 0:m.disabled,inherit:void 0}[f.color]}})),g=t.forwardRef((function(e,n){var o=(0,c.Z)({props:e,name:"MuiSvgIcon"}),d=o.children,u=o.className,h=o.color,g=void 0===h?"inherit":h,x=o.component,S=void 0===x?"svg":x,w=o.fontSize,Z=void 0===w?"medium":w,b=o.htmlColor,y=o.inheritViewBox,z=void 0!==y&&y,j=o.titleAccess,k=o.viewBox,H=void 0===k?"0 0 24 24":k,N=(0,r.Z)(o,f),P=t.isValidElement(d)&&"svg"===d.type,R=(0,i.Z)({},o,{color:g,component:S,fontSize:Z,instanceFontSize:e.fontSize,inheritViewBox:z,viewBox:H,hasSvgAsChild:P}),B={};z||(B.viewBox=H);var C=function(e){var n=e.color,o=e.fontSize,i=e.classes,t={root:["root","inherit"!==n&&"color".concat((0,s.Z)(n)),"fontSize".concat((0,s.Z)(o))]};return(0,l.Z)(t,m,i)}(R);return(0,p.jsxs)(v,(0,i.Z)({as:S,className:(0,a.Z)(C.root,u),focusable:"false",color:b,"aria-hidden":!j||void 0,role:j?"img":void 0,ref:n},B,N,P&&d.props,{ownerState:R,children:[P?d.props.children:d,j?(0,p.jsx)("title",{children:j}):null]}))}));g.muiName="SvgIcon";var x=g;function S(e,n){function o(o,t){return(0,p.jsx)(x,(0,i.Z)({"data-testid":"".concat(n,"Icon"),ref:t},o,{children:e}))}return o.muiName=x.muiName,t.memo(t.forwardRef(o))}}}]);
//# sourceMappingURL=373.4a112ea5.chunk.js.map
"use strict";(self.webpackChunkcmssample=self.webpackChunkcmssample||[]).push([[5895],{39223:(k,O,t)=>{t.r(O),t.d(O,{SettingsPage:()=>Me});var e=t(27279),C=t(27997),c=t(57537),R=t(364),m=t(61020),E=t(51447),f=t(92807),y=t(80902),T=t(95187),U=t(14155),K=t(71877),V=t(25804),v=t(96220),j=t(20534),S=t(49370),F=t(70627),n=t.n(F),Z=t(47533);const B=({menu:a})=>{const{formatMessage:o}=(0,m.Z)(),{trackUsage:l}=(0,c.useTracking)(),{pathname:s}=(0,E.TH)(),u=a.filter(r=>!r.links.every(i=>i.isDisplayed===!1)).map(r=>({...r,title:r.intlLabel,links:r.links.map(i=>({...i,title:i.intlLabel,name:i.id}))})),p=o({id:"global.settings",defaultMessage:"Settings"}),g=(r=null)=>{l("willNavigate",{from:s,to:r})};return e.createElement(K.m,{ariaLabel:p},e.createElement(V.p,{label:p}),e.createElement(v.Z,null,u.map(r=>e.createElement(j.D,{key:r.id,label:o(r.intlLabel)},r.links.map(i=>e.createElement(S.E,{as:Z.NavLink,withBullet:i.hasNotification,to:i.to,onClick:()=>g(i.to),key:i.id},o(i.intlLabel)))))))};B.propTypes={menu:n().array.isRequired};const X=B,q=[{async Component(){return await t.e(3455).then(t.bind(t,7513))},to:"/settings/roles",exact:!0},{async Component(){return await Promise.all([t.e(4260),t.e(2544)]).then(t.bind(t,25545))},to:"/settings/roles/duplicate/:id",exact:!0},{async Component(){return await Promise.all([t.e(4260),t.e(2544)]).then(t.bind(t,25545))},to:"/settings/roles/new",exact:!0},{async Component(){return await Promise.all([t.e(4260),t.e(2544)]).then(t.bind(t,63727))},to:"/settings/roles/:id",exact:!0},{async Component(){return await t.e(5199).then(t.bind(t,87901))},to:"/settings/users",exact:!0},{async Component(){return await t.e(4263).then(t.bind(t,93552))},to:"/settings/users/:id",exact:!0},{async Component(){return await t.e(5162).then(t.bind(t,71589))},to:"/settings/webhooks/create",exact:!0},{async Component(){return await t.e(5162).then(t.bind(t,10372))},to:"/settings/webhooks/:id",exact:!0},{async Component(){return await t.e(4121).then(t.bind(t,38542))},to:"/settings/webhooks",exact:!0},{async Component(){return await t.e(8056).then(t.bind(t,71362))},to:"/settings/api-tokens",exact:!0},{async Component(){return await Promise.all([t.e(4260),t.e(765),t.e(2458),t.e(4299)]).then(t.bind(t,1880))},to:"/settings/api-tokens/create",exact:!0},{async Component(){return await Promise.all([t.e(4260),t.e(765),t.e(2458),t.e(92)]).then(t.bind(t,50955))},to:"/settings/api-tokens/:id",exact:!0},{async Component(){return await Promise.all([t.e(4260),t.e(765),t.e(3467),t.e(4816)]).then(t.bind(t,81524))},to:"/settings/transfer-tokens/create",exact:!0},{async Component(){return await t.e(9600).then(t.bind(t,68446))},to:"/settings/transfer-tokens",exact:!0},{async Component(){return await Promise.all([t.e(4260),t.e(765),t.e(3467),t.e(2492)]).then(t.bind(t,63252))},to:"/settings/transfer-tokens/:id",exact:!0}];var Y=t(9941),_=t(77970),J=t(27875),P=t(48102),Q=t(74758),I=t(10701),L=t(21395),et=t(23298),W=t(74577),b=t(68412),at=t(59082),nt=t(48157),ot=t(40464),st=t(49402),N=t(36364),$=t(93415);const w=750,tt=100,vt=["image/jpeg","image/png","image/svg+xml"];var Dt=t(6120),At=t(97767),Mt=t(4987),jt=t(93841),Bt=t(36938),zt=t(84352),Ut=t(5938),Ft=t(6918),lt=t(61815);const Lt={localImage:void 0},Zt=(a=Lt,o)=>(0,lt.ZP)(a,l=>{switch(o.type){case"SET_LOCAL_IMAGE":{l.localImage=o.value;break}default:return l}}),it=({onChangeLogo:a,customLogo:o,goTo:l,Component:s,modalTitle:d,next:u,prev:p,currentStep:g})=>{const[{localImage:r},i]=(0,e.useReducer)(Zt,Lt),{formatMessage:x}=(0,m.Z)(),h=A=>{i({type:"SET_LOCAL_IMAGE",value:A})},D=()=>{l(null)};return g?e.createElement(Ut.P,{labelledBy:"modal",onClose:D},e.createElement(Ft.x,null,e.createElement(L.Z,{fontWeight:"bold",as:"h2",id:"modal"},x(d))),e.createElement(s,{setLocalImage:h,goTo:l,next:u,prev:p,onClose:D,asset:r||o,onChangeLogo:a})):null};it.defaultProps={Component:void 0,currentStep:void 0,customLogo:void 0,modalTitle:void 0,next:null,prev:null},it.propTypes={Component:n().elementType,currentStep:n().string,customLogo:n().shape({name:n().string,url:n().string,width:n().number,height:n().number,ext:n().string}),goTo:n().func.isRequired,modalTitle:n().shape({id:n().string,defaultMessage:n().string}),next:n().string,onChangeLogo:n().func.isRequired,prev:n().string};const Wt=it,xt={currentStep:void 0},Kt=(a=xt,o)=>(0,lt.ZP)(a,l=>{switch(o.type){case"GO_TO":{l.currentStep=o.to;break}default:return l}});var Nt=t(69878),rt=t(94098),$t=t(84366),dt=t(61908),Gt=t(77804),Ht=t(1821),Vt=t(50703),Jt=t(55911),ct=t(35250),Qt=t(80153),Xt=t(72450);const Yt={id:"Settings.application.customization.modal.upload.error-format",defaultMessage:"Wrong format uploaded (accepted formats only: jpeg, jpg, png, svg)."},Ct={id:"Settings.application.customization.modal.upload.error-size",defaultMessage:"The file uploaded is too large (max dimension: {dimension}x{dimension}, max file size: {size}KB)"},bt=a=>new Promise(o=>{const l=new FileReader;l.onload=()=>{const s=new Image;s.onload=function(){o({width:s.width,height:s.height})},s.src=l.result},l.readAsDataURL(a)}),wt=(a,o)=>({ext:a.name.split(".").pop(),size:a.size/1e3,name:a.name,url:URL.createObjectURL(a),rawFile:a,width:o.width,height:o.height}),St=async a=>{let o;if(!vt.includes(a.type))throw o=new Error("File format"),o.displayMessage=Yt,o;const s=await bt(a);if(!(s.width<=w&&s.height<=w))throw o=new Error("File sizing"),o.displayMessage=Ct,o;const u=wt(a,s);if(!(u.size<=tt))throw o=new Error("File sizing"),o.displayMessage=Ct,o;return u},kt=(0,Xt.default)(Gt._)`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`,mt=({setLocalImage:a,goTo:o,next:l,onClose:s})=>{const{formatMessage:d}=(0,m.Z)(),[u,p]=(0,e.useState)(!1),[g,r]=(0,e.useState)(void 0),i=(0,e.useRef)(null),x=()=>p(!0),h=()=>p(!1),D=G=>{G.preventDefault(),i.current.click()},A=async()=>{h();const G=i.current.files[0];if(G)try{const H=await St(G);a(H),o(l)}catch(H){if(H.displayMessage)r(d(H.displayMessage,{size:tt,dimension:w})),i.current.focus();else throw H}},z=()=>u?"primary500":g?"danger600":"neutral300";return e.createElement(e.Fragment,null,e.createElement("form",null,e.createElement($.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement(Ht.g,{name:"logo-upload",error:g},e.createElement("label",{htmlFor:"logo-upload"},e.createElement(I.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(I.k,{paddingTop:9,paddingBottom:7,hasRadius:!0,justifyContent:"center",direction:"column",background:u?"primary100":"neutral100",borderColor:z(),borderStyle:"dashed",borderWidth:"1px",position:"relative",onDragEnter:x,onDragLeave:h},e.createElement(Vt.J,{color:"primary600",width:`${60/16}rem`,height:`${60/16}rem`,as:Qt.Z,"aria-hidden":!0}),e.createElement($.x,{paddingTop:3,paddingBottom:5},e.createElement(L.Z,{variant:"delta",as:"span"},d({id:"Settings.application.customization.modal.upload.drag-drop",defaultMessage:"Drag and Drop here or"}))),e.createElement(kt,{accept:vt,cursor:"pointer",as:"input",type:"file",name:"files",tabIndex:-1,zIndex:1,onChange:A,ref:i,id:"logo-upload"}),e.createElement(P.z,{type:"button",onClick:D},d({id:"Settings.application.customization.modal.upload.cta.browse",defaultMessage:"Browse files"})),e.createElement($.x,{paddingTop:6},e.createElement(L.Z,{variant:"pi",textColor:"neutral600"},d({id:"Settings.application.customization.modal.upload.file-validation",defaultMessage:"Max dimension: {dimension}x{dimension}, Max size: {size}KB"},{size:tt,dimension:w})))),e.createElement(Jt.c,null)))))),e.createElement(ct.m,{startActions:e.createElement(P.z,{onClick:s,variant:"tertiary"},d({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"}))}))};mt.defaultProps={next:null},mt.propTypes={goTo:n().func.isRequired,next:n().string,onClose:n().func.isRequired,setLocalImage:n().func.isRequired};const qt=mt;var _t=t(12881);const te=async a=>{try{const{get:o}=(0,c.getFetchClient)(),l=await o(a,{responseType:"blob",timeout:8e3});return new File([l.data],l.config.url,{type:l.headers["content-type"]})}catch(o){throw o.displayMessage={id:"Settings.application.customization.modal.upload.error-network",defaultMessage:"Network error"},o}},gt=({goTo:a,next:o,onClose:l,setLocalImage:s})=>{const{formatMessage:d}=(0,m.Z)(),[u,p]=(0,e.useState)(""),[g,r]=(0,e.useState)(null),i=h=>{p(h.target.value)},x=async()=>{try{const h=await te(u),D=await St(h);s(D),a(o)}catch(h){if(h.displayMessage)r(d(h.displayMessage,{size:tt,dimension:w}));else throw h}};return e.createElement("form",{onSubmit:h=>{h.preventDefault(),x()}},e.createElement($.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement(_t.o,{label:d({id:"Settings.application.customization.modal.upload.from-url.input-label",defaultMessage:"URL"}),error:g,onChange:i,value:u,name:"logo-url"})),e.createElement(ct.m,{startActions:e.createElement(P.z,{onClick:l,variant:"tertiary"},d({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(P.z,{type:"submit"},d({id:"Settings.application.customization.modal.upload.next",defaultMessage:"Next"}))}))};gt.defaultProps={next:null},gt.propTypes={goTo:n().func.isRequired,next:n().string,onClose:n().func.isRequired,setLocalImage:n().func.isRequired};const ee=gt,ut=({setLocalImage:a,goTo:o,next:l,onClose:s})=>{const{formatMessage:d}=(0,m.Z)();return e.createElement(Nt.v,{label:d({id:"Settings.application.customization.modal.tab.label",defaultMessage:"How do you want to upload your assets?"}),variant:"simple"},e.createElement($.x,{paddingLeft:8,paddingRight:8},e.createElement(rt.m,null,e.createElement(rt.O,null,d({id:"Settings.application.customization.modal.upload.from-computer",defaultMessage:"From computer"})),e.createElement(rt.O,null,d({id:"Settings.application.customization.modal.upload.from-url",defaultMessage:"From url"}))),e.createElement($t.i,null)),e.createElement(dt.n,null,e.createElement(dt.x,null,e.createElement(qt,{onClose:s,setLocalImage:a,goTo:o,next:l})),e.createElement(dt.x,null,e.createElement(ee,{onClose:s,setLocalImage:a,goTo:o,next:l}))))};ut.defaultProps={next:null},ut.propTypes={goTo:n().func.isRequired,next:n().string,onClose:n().func.isRequired,setLocalImage:n().func.isRequired};const ne=ut;var oe=t(98410),ae=t(1597),se=t(77011),le=t(67909),ie=t(9902),yt=t(83375),re=t(94485);const Rt=({asset:a})=>{const{formatMessage:o}=(0,m.Z)();return e.createElement(oe.Z,null,e.createElement(ae.O,null,e.createElement(se.H,{size:"S",src:a.url})),e.createElement(le.e,null,e.createElement(ie.a,null,e.createElement(yt.l,null,a.name),e.createElement(yt._,null,`${a.ext.toUpperCase()} - ${a.width}\u2715${a.height}`)),e.createElement(re.E,null,o({id:"Settings.application.customization.modal.pending.card-badge",defaultMessage:"image"}))))};Rt.propTypes={asset:n().shape({name:n().string,url:n().string,width:n().number,height:n().number,ext:n().string}).isRequired};const de=Rt,pt=({onClose:a,asset:o,prev:l,next:s,goTo:d,setLocalImage:u,onChangeLogo:p})=>{const{formatMessage:g}=(0,m.Z)(),r=()=>{u(void 0),d(l)},i=()=>{p(o),d(s)};return e.createElement(e.Fragment,null,e.createElement($.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement(I.k,{justifyContent:"space-between",paddingBottom:6},e.createElement(I.k,{direction:"column",alignItems:"flex-start"},e.createElement(L.Z,{variant:"pi",fontWeight:"bold"},g({id:"Settings.application.customization.modal.pending.title",defaultMessage:"Logo ready to upload"})),e.createElement(L.Z,{variant:"pi",textColor:"neutral500"},g({id:"Settings.application.customization.modal.pending.subtitle",defaultMessage:"Manage the chosen logo before uploading it"}))),e.createElement(P.z,{onClick:r,variant:"secondary"},g({id:"Settings.application.customization.modal.pending.choose-another",defaultMessage:"Choose another logo"}))),e.createElement($.x,{maxWidth:(0,c.pxToRem)(180)},o.url?e.createElement(de,{asset:o}):null)),e.createElement(ct.m,{startActions:e.createElement(P.z,{onClick:a,variant:"tertiary"},g({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(P.z,{onClick:i},g({id:"Settings.application.customization.modal.pending.upload",defaultMessage:"Upload logo"}))}))};pt.defaultProps={next:null,prev:null},pt.propTypes={goTo:n().func.isRequired,asset:n().shape({name:n().string,url:n().string,width:n().number,height:n().number,ext:n().string}).isRequired,next:n().string,onClose:n().func.isRequired,onChangeLogo:n().func.isRequired,prev:n().string,setLocalImage:n().func.isRequired};const ce={upload:{Component:ne,modalTitle:{id:"Settings.application.customization.modal.upload",defaultMessage:"Upload logo"},next:"pending",prev:null},pending:{Component:pt,modalTitle:{id:"Settings.application.customization.modal.pending",defaultMessage:"Pending logo"},next:null,prev:"upload"}},ht=({canUpdate:a,customLogo:o,defaultLogo:l,hint:s,label:d,onChangeLogo:u,onResetLogo:p})=>{const[{currentStep:g},r]=(0,e.useReducer)(Kt,xt),{Component:i,next:x,prev:h,modalTitle:D}=ce[g]||{},{formatMessage:A}=(0,m.Z)(),z=G=>{r({type:"GO_TO",to:G})};return e.createElement(e.Fragment,null,e.createElement(Dt.F,{label:d,selectedSlide:0,hint:s,previousLabel:"",nextLabel:"",onNext:()=>{},onPrevious:()=>{},secondaryLabel:o?.name||"logo.png",actions:e.createElement(At.b,null,e.createElement(Mt.h,{disabled:!a,onClick:()=>z(o?"pending":"upload"),label:A({id:"Settings.application.customization.carousel.change-action",defaultMessage:"Change logo"}),icon:e.createElement(Bt.Z,null)}),o&&e.createElement(Mt.h,{disabled:!a,onClick:p,label:A({id:"Settings.application.customization.carousel.reset-action",defaultMessage:"Reset logo"}),icon:e.createElement(zt.Z,null)}))},e.createElement(jt.q,{label:A({id:"Settings.application.customization.carousel-slide.label",defaultMessage:"Logo slide"})},e.createElement($.x,{maxHeight:"40%",maxWidth:"40%",as:"img",src:o?.url||l,alt:A({id:"Settings.application.customization.carousel.title",defaultMessage:"Logo"})}))),e.createElement(Wt,{Component:i,currentStep:g,onChangeLogo:u,customLogo:o,goTo:z,next:x,prev:h,modalTitle:D}))};ht.defaultProps={canUpdate:!1,customLogo:null,hint:null},ht.propTypes={canUpdate:n().bool,customLogo:n().shape({url:n().string,name:n().string}),label:n().string.isRequired,hint:n().string,defaultLogo:n().string.isRequired,onChangeLogo:n().func.isRequired,onResetLogo:n().func.isRequired};const Tt=ht;var me=t(87830),ge=t.n(me);const ue=(a,o)=>ge()(a,{menuLogo:{display:o.menuLogo},authLogo:{display:o.authLogo}}),Et={menuLogo:{display:null,submit:{rawFile:null,isReset:!1}},authLogo:{display:null,submit:{rawFile:null,isReset:!1}}},pe=(a=Et,o)=>(0,lt.ZP)(a,l=>{switch(o.type){case"SET_CUSTOM_MENU_LOGO":{l.menuLogo.display=o.value,l.menuLogo.submit.rawFile=o.value.rawFile;break}case"SET_CUSTOM_AUTH_LOGO":{l.authLogo.display=o.value,l.authLogo.submit.rawFile=o.value.rawFile;break}case"RESET_CUSTOM_MENU_LOGO":{l.menuLogo.display=null,l.menuLogo.submit={rawFile:null,isReset:!0};break}case"RESET_CUSTOM_AUTH_LOGO":{l.authLogo.display=null,l.authLogo.submit={rawFile:null,isReset:!0};break}default:return l}}),ft=(0,e.forwardRef)(({canUpdate:a,projectSettingsStored:o},l)=>{const{formatMessage:s}=(0,m.Z)(),{trackUsage:d}=(0,c.useTracking)(),{logos:{menu:u,auth:p}}=(0,f.um)(),[{menuLogo:g,authLogo:r},i]=(0,e.useReducer)(pe,Et,()=>ue(Et,o)),x=z=>{i({type:"SET_CUSTOM_MENU_LOGO",value:z})},h=()=>{d("didClickResetLogo",{logo:"menu"}),i({type:"RESET_CUSTOM_MENU_LOGO"})},D=z=>{i({type:"SET_CUSTOM_AUTH_LOGO",value:z})},A=()=>{d("didClickResetLogo",{logo:"auth"}),i({type:"RESET_CUSTOM_AUTH_LOGO"})};return(0,e.useImperativeHandle)(l,()=>({getValues:()=>({menuLogo:g.submit,authLogo:r.submit})})),e.createElement($.x,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7},e.createElement(L.Z,{variant:"delta",as:"h3"},s({id:"Settings.application.customization",defaultMessage:"Customization"})),e.createElement(L.Z,{variant:"pi",textColor:"neutral600"},s({id:"Settings.application.customization.size-details",defaultMessage:"Max dimension: {dimension}\xD7{dimension}, Max file size: {size}KB"},{dimension:w,size:tt})),e.createElement(et.r,{paddingTop:4,gap:4},e.createElement(W.P,{col:6,s:12},e.createElement(Tt,{canUpdate:a,customLogo:g.display,defaultLogo:u.default,hint:s({id:"Settings.application.customization.menu-logo.carousel-hint",defaultMessage:"Replace the logo in the main navigation"}),label:s({id:"Settings.application.customization.carousel.menu-logo.title",defaultMessage:"Menu logo"}),onChangeLogo:x,onResetLogo:h})),e.createElement(W.P,{col:6,s:12},e.createElement(Tt,{canUpdate:a,customLogo:r.display,defaultLogo:p.default,hint:s({id:"Settings.application.customization.auth-logo.carousel-hint",defaultMessage:"Replace the logo in the authentication pages"}),label:s({id:"Settings.application.customization.carousel.auth-logo.title",defaultMessage:"Auth logo"}),onChangeLogo:D,onResetLogo:A}))))});ft.defaultProps={canUpdate:!1,projectSettingsStored:null},ft.propTypes={canUpdate:n().bool,projectSettingsStored:n().shape({menuLogo:n().shape({url:n().string,name:n().string})})};const he=ft,Ee=a=>{const o=new FormData;return Object.entries(a).forEach(([l,s])=>{s&&s.rawFile instanceof File&&o.append(l,s.rawFile),s&&s.isReset&&o.append(l,null)}),o},fe=()=>null,ve=()=>{const a=e.useRef(),o=(0,c.useNotification)(),{trackUsage:l}=(0,c.useTracking)(),{formatMessage:s}=(0,m.Z)(),{get:d,post:u}=(0,c.useFetchClient)(),{updateProjectSettings:p}=(0,f.um)(),g=(0,st.v9)(N._),{formatAPIError:r}=(0,c.useAPIErrorHandler)(),{communityEdition:i,latestStrapiReleaseTag:x,nodeVersion:h,shouldUpdateStrapi:D,strapiVersion:A}=(0,c.useAppInfo)(),z=(0,y.c)(fe,async()=>(await t.e(5013).then(t.bind(t,65013))).AdminSeatInfoEE),{allowedActions:{canRead:G,canUpdate:H}}=(0,c.useRBAC)(g.settings["project-settings"]);(0,c.useFocusWhenNavigate)();const{data:Ot,isLoading:Le}=(0,ot.useQuery)(["project-settings"],async()=>{const{data:M}=await d("/admin/project-settings");return M},{cacheTime:0,enabled:G,select(M){return{...M,authLogo:M.authLogo?{...M.authLogo,url:(0,c.prefixFileUrlWithBackendUrl)(M.authLogo.url)}:M.authLogo,menuLogo:M.menuLogo?{...M.menuLogo,url:(0,c.prefixFileUrlWithBackendUrl)(M.menuLogo.url)}:M.menuLogo}}}),xe=(0,ot.useMutation)(M=>u("/admin/project-settings",M,{headers:{"Content-Type":"multipart/form-data"}}),{onError(M){o({type:"warning",message:r(M)})},async onSuccess(M){const{menuLogo:Pt,authLogo:It}=M;p({menuLogo:Pt?.url,authLogo:It?.url}),Pt?.rawFile&&l("didChangeLogo",{logo:"menu"}),It?.rawFile&&l("didChangeLogo",{logo:"auth"}),o({type:"success",message:s({id:"app",defaultMessage:"Saved"})})}}),Ce=M=>{M.preventDefault(),xe.mutate(Ee(a.current.getValues()))};return z?e.createElement(C.A,null,e.createElement(c.SettingsPageTitle,{name:"Application"}),e.createElement(Y.o,null,Le?e.createElement(_.a,null,s({id:"Settings.application.isLoading",defaultMessage:"Loading"})):e.createElement("form",{onSubmit:Ce},e.createElement(J.T,{title:s({id:"Settings.application.title",defaultMessage:"Overview"}),subtitle:s({id:"Settings.application.description",defaultMessage:"Administration panel\u2019s global information"}),primaryAction:H&&e.createElement(P.z,{type:"submit",startIcon:e.createElement(at.Z,null)},s({id:"global.save",defaultMessage:"Save"}))}),e.createElement(Q.D,null,e.createElement(I.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(I.k,{direction:"column",alignItems:"stretch",gap:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7},e.createElement(L.Z,{variant:"delta",as:"h3"},s({id:"global.details",defaultMessage:"Details"})),e.createElement(et.r,{gap:5,as:"dl"},e.createElement(W.P,{col:6,s:12},e.createElement(L.Z,{variant:"sigma",textColor:"neutral600",as:"dt"},s({id:"Settings.application.strapiVersion",defaultMessage:"strapi version"})),e.createElement(I.k,{gap:3,direction:"column",alignItems:"start",as:"dd"},e.createElement(L.Z,null,"v",A),D&&e.createElement(b.r,{href:`https://github.com/strapi/strapi/releases/tag/${x}`,isExternal:!0,endIcon:e.createElement(nt.Z,null)},s({id:"Settings.application.link-upgrade",defaultMessage:"Upgrade your admin panel"})))),e.createElement(W.P,{col:6,s:12},e.createElement(L.Z,{variant:"sigma",textColor:"neutral600",as:"dt"},s({id:"Settings.application.edition-title",defaultMessage:"current plan"})),e.createElement(I.k,{gap:3,direction:"column",alignItems:"start",as:"dd"},e.createElement(L.Z,null,s({id:"Settings.application.ee-or-ce",defaultMessage:"{communityEdition, select, true {Community Edition} other {Enterprise Edition}}"},{communityEdition:i})),e.createElement(b.r,{href:"https://strapi.io/pricing-self-hosted",isExternal:!0,endIcon:e.createElement(nt.Z,null)},s({id:"Settings.application.link-pricing",defaultMessage:"See all pricing plans"})))),e.createElement(W.P,{col:6,s:12},e.createElement(L.Z,{variant:"sigma",textColor:"neutral600",as:"dt"},s({id:"Settings.application.node-version",defaultMessage:"node version"})),e.createElement(L.Z,{as:"dd"},h)),e.createElement(z,null))),G&&Ot&&e.createElement(he,{canUpdate:H,ref:a,projectSettingsStored:Ot})))))):null};function Me(){const{settingId:a}=(0,E.UO)(),{settings:o}=(0,c.useStrapiApp)(),{formatMessage:l}=(0,m.Z)(),{isLoading:s,menu:d}=(0,f.Te)(),u=(0,y.c)(q,async()=>(await t.e(1470).then(t.bind(t,51470))).ROUTES_EE,{combine(r,i){return[...r,...i]},defaultValue:[]}),p=e.useMemo(()=>(0,U.Z)(u.map(({to:r,Component:i,exact:x})=>(0,T.Z)(i,r,x))),[u]),g=Object.values(o).flatMap(r=>{const{links:i}=r;return i.map(x=>(0,T.Z)(x.Component,x.to,x.exact||!1))});return s?e.createElement(c.LoadingIndicatorPage,null):a?e.createElement(C.A,{sideNav:e.createElement(X,{menu:d})},e.createElement(R.q,{title:l({id:"global.settings",defaultMessage:"Settings"})}),e.createElement(E.rs,null,e.createElement(E.AW,{path:"/settings/application-infos",component:ve,exact:!0}),p,g)):e.createElement(E.l_,{to:"/settings/application-infos"})}},71877:(k,O,t)=>{t.d(O,{m:()=>E});var e=t(74081),C=t(72450),c=t(23298);const R=`${232/16}rem`,m=(0,C.default)(c.r)`
  width: ${R};
  background: ${({theme:f})=>f.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:f})=>f.colors.neutral200};
  z-index: 1;
`,E=({ariaLabel:f,...y})=>(0,e.jsx)(m,{"aria-label":f,as:"nav",...y})},25804:(k,O,t)=>{t.d(O,{p:()=>F});var e=t(74081),C=t(27279),c=t(10382),R=t(72450),m=t(89166),E=t(74513),f=t(76646),y=t(84366),T=t(93415),U=t(28479),K=t(31624),V=t(10701),v=t(21395),j=t(4987);const S=(0,R.default)(y.i)`
  width: ${24/16}rem;
  background-color: ${({theme:n})=>n.colors.neutral200};
`,F=({as:n="h2",label:Z,searchLabel:B="",searchable:X=!1,onChange:q=()=>{},value:Y="",onClear:_=()=>{},onSubmit:J=()=>{},id:P})=>{const[Q,I]=(0,C.useState)(!1),L=(0,f.D)(Q),et=(0,E.M)(P),W=(0,C.useRef)(void 0),b=(0,C.useRef)(void 0);(0,C.useEffect)(()=>{Q&&W.current&&W.current.focus(),L&&!Q&&b.current&&b.current.focus()},[Q,L]);const at=()=>{I(N=>!N)},nt=N=>{_(N),W.current.focus()},ot=N=>{N.relatedTarget?.id!==et&&I(!1)},st=N=>{N.key===m.y.ESCAPE&&I(!1)};return Q?(0,e.jsxs)(T.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,e.jsx)(U.U,{children:(0,e.jsx)(K.w,{name:"searchbar",value:Y,onChange:q,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:st,ref:W,onBlur:ot,onClear:nt,onSubmit:J,clearLabel:"Clear",size:"S",children:B})}),(0,e.jsx)(T.x,{paddingLeft:2,paddingTop:4,children:(0,e.jsx)(S,{})})]}):(0,e.jsxs)(T.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,e.jsxs)(V.k,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,e.jsx)(v.Z,{variant:"beta",as:n,children:Z}),X&&(0,e.jsx)(j.h,{ref:b,onClick:at,label:B,icon:(0,e.jsx)(c.Z,{})})]}),(0,e.jsx)(T.x,{paddingTop:4,children:(0,e.jsx)(S,{})})]})}},49370:(k,O,t)=>{t.d(O,{E:()=>V});var e=t(74081),C=t(27279),c=t(79830),R=t(72450),m=t(93415),E=t(21395),f=t(10701),y=t(30413);const T=(0,R.default)(m.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:v})=>v.colors.neutral800};
  svg > * {
    fill: ${({theme:v})=>v.colors.neutral600};
  }

  &.active {
    ${({theme:v})=>`
      background-color: ${v.colors.primary100};
      border-right: 2px solid ${v.colors.primary600};
      svg > * {
        fill: ${v.colors.primary700};
      }
      ${E.Z} {
        color: ${v.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,U=(0,R.default)(c.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:v,$active:j})=>j?v.colors.primary600:v.colors.neutral600};
  }
`,K=R.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,V=C.forwardRef(({children:v,icon:j=null,withBullet:S=!1,as:F=y.f,isSubSectionChild:n=!1,...Z},B)=>(0,e.jsxs)(T,{as:F,icon:j,background:"neutral100",paddingLeft:n?9:7,paddingBottom:2,paddingTop:2,ref:B,...Z,children:[(0,e.jsxs)(f.k,{children:[j?(0,e.jsx)(K,{children:j}):(0,e.jsx)(U,{}),(0,e.jsx)(m.x,{paddingLeft:2,children:(0,e.jsx)(E.Z,{as:"span",children:v})})]}),S&&(0,e.jsx)(m.x,{as:f.k,paddingRight:4,children:(0,e.jsx)(U,{$active:!0})})]}))},20534:(k,O,t)=>{t.d(O,{D:()=>j});var e=t(74081),C=t(27279),c=t(72450),R=t(10411),m=t(10701),E=t(93415),f=t(21395);const y=(0,c.default)(m.k)`
  border: none;
  padding: 0;
  background: transparent;
`,T=c.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:S})=>S?"0deg":"180deg"});
`,U=({collapsable:S=!1,label:F,onClick:n=()=>{},ariaExpanded:Z,ariaControls:B})=>S?(0,e.jsxs)(y,{as:"button",onClick:n,"aria-expanded":Z,"aria-controls":B,textAlign:"left",children:[(0,e.jsx)(E.x,{paddingRight:1,children:(0,e.jsx)(f.Z,{variant:"sigma",textColor:"neutral600",children:F})}),S&&(0,e.jsx)(T,{rotated:Z,children:(0,e.jsx)(R.Z,{"aria-hidden":!0})})]}):(0,e.jsx)(y,{children:(0,e.jsx)(E.x,{paddingRight:1,children:(0,e.jsx)(f.Z,{variant:"sigma",textColor:"neutral600",children:F})})});var K=t(74513),V=t(4963);const v=(0,c.default)(E.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:S})=>S.colors.neutral500};
    }
  }
`,j=({collapsable:S=!1,label:F,badgeLabel:n,children:Z,id:B})=>{const[X,q]=(0,C.useState)(!0),Y=(0,K.M)(B),_=()=>{q(J=>!J)};return(0,e.jsxs)(m.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(v,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,e.jsxs)(E.x,{position:"relative",paddingRight:n?6:0,children:[(0,e.jsx)(U,{onClick:_,ariaExpanded:X,ariaControls:Y,collapsable:S,label:F}),n&&(0,e.jsx)(V.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:n})]})}),(!S||X)&&(0,e.jsx)("ol",{id:Y,children:C.Children.map(Z,(J,P)=>(0,e.jsx)("li",{children:J},P))})]})}},96220:(k,O,t)=>{t.d(O,{Z:()=>m});var e=t(74081),C=t(27279),c=t(93415),R=t(10701);const m=({children:E,spacing:f=2,horizontal:y=!1,...T})=>(0,e.jsx)(c.x,{paddingTop:2,paddingBottom:4,children:(0,e.jsx)(R.k,{as:"ol",gap:f,direction:y?"row":"column",alignItems:y?"center":"stretch",...T,children:C.Children.map(E,(U,K)=>(0,e.jsx)("li",{children:U},K))})})}}]);

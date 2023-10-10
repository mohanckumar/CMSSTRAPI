(self.webpackChunkcmssample=self.webpackChunkcmssample||[]).push([[2458],{49699:(f,g,e)=>{"use strict";e.d(g,{Z:()=>C});var t=e(27279),p=e(27875),r=e(10701),o=e(48102),a=e(57537),i=e(59082),u=e(76827),T=e(70627),s=e.n(T),v=e(61020),A=e(84352),n=e(92807);const h=({onRegenerate:R,idToRegenerate:O,backUrl:H,onError:z})=>{const{formatMessage:B}=(0,v.Z)(),[k,F]=(0,t.useState)(!1),{regenerateData:Z,isLoadingConfirmation:X}=(0,n.rW)(H,O,R,z),V=async()=>{Z(),F(!1)};return t.createElement(t.Fragment,null,t.createElement(o.z,{startIcon:t.createElement(A.Z,null),type:"button",size:"S",variant:"tertiary",onClick:()=>F(!0),name:"regenerate"},B({id:"Settings.tokens.regenerate",defaultMessage:"Regenerate"})),t.createElement(a.ConfirmDialog,{bodyText:{id:"Settings.tokens.popUpWarning.message",defaultMessage:"Are you sure you want to regenerate this token?"},iconRightButton:t.createElement(A.Z,null),isConfirmButtonLoading:X,isOpen:k,onToggleDialog:()=>F(!1),onConfirm:V,leftButtonText:{id:"Settings.tokens.Button.cancel",defaultMessage:"Cancel"},rightButtonText:{id:"Settings.tokens.Button.regenerate",defaultMessage:"Regenerate"},title:{id:"Settings.tokens.RegenerateDialog.title",defaultMessage:"Regenerate token"}}))};h.defaultProps={onRegenerate(){},onError:void 0},h.propTypes={onRegenerate:s().func,idToRegenerate:s().oneOfType([s().number,s().string]).isRequired,backUrl:s().string.isRequired,onError:s().func};const P=h,M=({title:R,token:O,setToken:H,canEditInputs:z,canRegenerate:B,isSubmitting:k,backUrl:F,regenerateUrl:Z,onErrorRegenerate:X})=>{const{formatMessage:V}=(0,v.Z)(),w=ee=>{H({...O,accessKey:ee})};return t.createElement(p.T,{title:O?.name||V(R),primaryAction:z?t.createElement(r.k,{gap:2},B&&O?.id&&t.createElement(P,{backUrl:Z,onRegenerate:w,idToRegenerate:O?.id,onError:X}),t.createElement(o.z,{disabled:k,loading:k,startIcon:t.createElement(i.Z,null),type:"submit",size:"S"},V({id:"global.save",defaultMessage:"Save"}))):B&&O?.id&&t.createElement(P,{onRegenerate:w,idToRegenerate:O?.id,backUrl:Z}),navigationAction:t.createElement(a.Link,{startIcon:t.createElement(u.Z,null),to:F},V({id:"global.back",defaultMessage:"Back"})),ellipsis:!0})};M.propTypes={token:s().shape({id:s().oneOfType([s().number,s().string]),type:s().string,lifespan:s().oneOfType([s().number,s().string]),name:s().string,accessKey:s().string,permissions:s().array,description:s().string,createdAt:s().string}),canEditInputs:s().bool.isRequired,canRegenerate:s().bool.isRequired,setToken:s().func.isRequired,isSubmitting:s().bool.isRequired,backUrl:s().string.isRequired,title:s().shape({id:s().string,label:s().string}).isRequired,regenerateUrl:s().string.isRequired,onErrorRegenerate:s().func},M.defaultProps={token:void 0,onErrorRegenerate:void 0};const C=M},89982:(f,g,e)=>{"use strict";e.d(g,{Z:()=>v});var t=e(27279),p=e(5627),r=e(78955),o=e(21395),a=e(70627),i=e.n(a),u=e(61020),T=e(51352);const s=({token:A,errors:n,values:h,onChange:P,isCreating:M})=>{const{formatMessage:C}=(0,u.Z)();return t.createElement(t.Fragment,null,t.createElement(p.P,{name:"lifespan",label:C({id:"Settings.tokens.form.duration",defaultMessage:"Token duration"}),value:h.lifespan!==null?h.lifespan:"0",error:n.lifespan?C(n.lifespan?.id?n.lifespan:{id:n.lifespan,defaultMessage:n.lifespan}):null,onChange:R=>{P({target:{name:"lifespan",value:R}})},required:!0,disabled:!M,placeholder:"Select"},t.createElement(r.W,{value:"604800000"},C({id:"Settings.tokens.duration.7-days",defaultMessage:"7 days"})),t.createElement(r.W,{value:"2592000000"},C({id:"Settings.tokens.duration.30-days",defaultMessage:"30 days"})),t.createElement(r.W,{value:"7776000000"},C({id:"Settings.tokens.duration.90-days",defaultMessage:"90 days"})),t.createElement(r.W,{value:"0"},C({id:"Settings.tokens.duration.unlimited",defaultMessage:"Unlimited"}))),t.createElement(o.Z,{variant:"pi",textColor:"neutral600"},!M&&`${C({id:"Settings.tokens.duration.expiration-date",defaultMessage:"Expiration date"})}: ${(0,T.IX)(A?.createdAt,parseInt(h.lifespan,10))}`))};s.propTypes={errors:i().shape({lifespan:i().string}),onChange:i().func.isRequired,values:i().shape({lifespan:i().oneOfType([i().number,i().string])}).isRequired,isCreating:i().bool.isRequired,token:i().shape({id:i().oneOfType([i().number,i().string]),type:i().string,lifespan:i().string,name:i().string,accessKey:i().string,permissions:i().array,description:i().string,createdAt:i().string})},s.defaultProps={errors:{},token:{}};const v=s},81384:(f,g,e)=>{"use strict";e.d(g,{Z:()=>v});var t=e(27279),p=e(4987),r=e(57537),o=e(78031),a=e(5368),i=e(70627),u=e.n(i),T=e(61020);const s=({token:A,tokenType:n})=>{const{formatMessage:h}=(0,T.Z)(),P=(0,r.useNotification)(),{trackUsage:M}=(0,r.useTracking)(),{copy:C}=(0,r.useClipboard)(),R=O=>async()=>{await C(O)&&(M("didCopyTokenKey",{tokenType:n}),P({type:"success",message:{id:"Settings.tokens.notification.copied"}}))};return t.createElement(r.ContentBox,{endAction:A&&t.createElement("span",{style:{alignSelf:"start"}},t.createElement(p.h,{label:h({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),onClick:R(A),noBorder:!0,icon:t.createElement(o.Z,null),style:{padding:0,height:"1rem"}})),title:A||h({id:"Settings.tokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:h(A?{id:"Settings.tokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.tokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:t.createElement(a.Z,null),iconBackground:"neutral100"})};s.defaultProps={token:null},s.propTypes={token:u().string,tokenType:u().string.isRequired};const v=s},37651:(f,g,e)=>{"use strict";e.d(g,{Z:()=>u});var t=e(27279),p=e(39708),r=e(70627),o=e.n(r),a=e(61020);const i=({errors:T,values:s,onChange:v,canEditInputs:A})=>{const{formatMessage:n}=(0,a.Z)();return t.createElement(p.g,{label:n({id:"Settings.tokens.form.description",defaultMessage:"Description"}),id:"description",error:T.description?n(T.description?.id?T.description:{id:T.description,defaultMessage:T.description}):null,onChange:v,disabled:!A},s.description)};i.propTypes={errors:o().shape({description:o().string}),onChange:o().func.isRequired,canEditInputs:o().bool.isRequired,values:o().shape({description:o().string}).isRequired},i.defaultProps={errors:{}};const u=i},72028:(f,g,e)=>{"use strict";e.d(g,{Z:()=>u});var t=e(27279),p=e(12881),r=e(70627),o=e.n(r),a=e(61020);const i=({errors:T,values:s,onChange:v,canEditInputs:A})=>{const{formatMessage:n}=(0,a.Z)();return t.createElement(p.o,{name:"name",error:T.name?n(T.name?.id?T.name:{id:T.name,defaultMessage:T.name}):null,label:n({id:"Settings.tokens.form.name",defaultMessage:"Name"}),onChange:v,value:s.name,disabled:!A,required:!0})};i.propTypes={errors:o().shape({name:o().string}),onChange:o().func.isRequired,canEditInputs:o().bool.isRequired,values:o().shape({name:o().string}).isRequired},i.defaultProps={errors:{}};const u=i},32381:(f,g,e)=>{"use strict";e.d(g,{Z:()=>T});var t=e(27279),p=e(5627),r=e(78955),o=e(70627),a=e.n(o),i=e(61020);const u=({name:s,errors:v,values:A,onChange:n,canEditInputs:h,options:P,label:M})=>{const{formatMessage:C}=(0,i.Z)();return t.createElement(p.P,{name:s,label:C({id:M.id,defaultMessage:M.defaultMessage}),value:A&&A[s],error:v[s]?C(v[s]?.id?v[s]:{id:v[s],defaultMessage:v[s]}):null,onChange:n,placeholder:"Select",required:!0,disabled:!h},P&&P.map(({value:R,label:O})=>t.createElement(r.W,{key:R,value:R},C(O))))};u.propTypes={name:a().string,options:a().arrayOf(a().shape({label:a().shape({id:a().string,defaultMessage:a().string}),value:a().string})),errors:a().shape({type:a().string}),onChange:a().func.isRequired,canEditInputs:a().bool.isRequired,values:a().shape({type:a().string}).isRequired,label:a().shape({id:a().string,defaultMessage:a().string}).isRequired},u.defaultProps={name:"type",errors:{},options:[]};const T=u},81966:(f,g,e)=>{"use strict";e.d(g,{Z:()=>t,f:()=>p});const t="api-token",p="transfer-token"},92458:(f,g,e)=>{"use strict";e.d(g,{Z:()=>Xe});var t=e(27279),p=e(9941),r=e(74758),o=e(10701),a=e(57537),i=e(71563),u=e(61020),T=e(40464),s=e(49402),v=e(51447),A=e(70627),n=e.n(A);const h=(0,t.createContext)({}),P=({children:l,...d})=>t.createElement(h.Provider,{value:d},l),M=()=>(0,t.useContext)(h);P.propTypes={children:n().node.isRequired};var C=e(96854),R=e(36364),O=e(81966),H=e(49699),z=e(81384),B=e(93415),k=e(21395),F=e(23298),Z=e(74577),X=e(89982),V=e(37651),w=e(72028),ee=e(32381);const te=({errors:l,onChange:d,canEditInputs:c,isCreating:I,values:E,apiToken:D,onDispatch:y,setHasChangedPermissions:$})=>{const{formatMessage:W}=(0,u.Z)(),K=({target:{value:b}})=>{$(!1),b==="full-access"&&y({type:"SELECT_ALL_ACTIONS"}),b==="read-only"&&y({type:"ON_CHANGE_READ_ONLY"})},Y=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return t.createElement(B.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(k.Z,{variant:"delta",as:"h2"},W({id:"global.details",defaultMessage:"Details"})),t.createElement(F.r,{gap:5},t.createElement(Z.P,{key:"name",col:6,xs:12},t.createElement(w.Z,{errors:l,values:E,canEditInputs:c,onChange:d})),t.createElement(Z.P,{key:"description",col:6,xs:12},t.createElement(V.Z,{errors:l,values:E,canEditInputs:c,onChange:d})),t.createElement(Z.P,{key:"lifespan",col:6,xs:12},t.createElement(X.Z,{isCreating:I,errors:l,values:E,onChange:d,token:D})),t.createElement(Z.P,{key:"type",col:6,xs:12},t.createElement(ee.Z,{values:E,errors:l,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:b=>{K({target:{value:b}}),d({target:{name:"type",value:b}})},options:Y,canEditInputs:c})))))};te.propTypes={errors:n().shape({name:n().string,description:n().string,lifespan:n().string,type:n().string}),onChange:n().func.isRequired,canEditInputs:n().bool.isRequired,values:n().shape({name:n().string,description:n().string,lifespan:n().oneOfType([n().number,n().string]),type:n().string}).isRequired,isCreating:n().bool.isRequired,apiToken:n().shape({id:n().oneOfType([n().number,n().string]),type:n().string,lifespan:n().string,name:n().string,accessKey:n().string,permissions:n().array,description:n().string,createdAt:n().string}),onDispatch:n().func.isRequired,setHasChangedPermissions:n().func.isRequired},te.defaultProps={errors:{},apiToken:{}};const Ee=te;var fe=e(27875),ye=e(48102),Te=e(59082);const ne=({apiTokenName:l})=>{const{formatMessage:d}=(0,u.Z)();return(0,a.useFocusWhenNavigate)(),t.createElement(p.o,{"aria-busy":"true"},t.createElement(a.SettingsPageTitle,{name:"API Tokens"}),t.createElement(fe.T,{primaryAction:t.createElement(ye.z,{disabled:!0,startIcon:t.createElement(Te.Z,null),type:"button",size:"L"},d({id:"global.save",defaultMessage:"Save"})),title:l||d({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),t.createElement(r.D,null,t.createElement(a.LoadingIndicatorPage,null)))};ne.defaultProps={apiTokenName:null},ne.propTypes={apiTokenName:n().string};const he=ne;var ve=e(58422),Ae=e.n(ve),Ce=e(34049),Pe=e.n(Ce),_=e(72450);const Me=l=>{switch(l){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Re=(0,_.default)(B.x)`
  margin: -1px;
  border-radius: ${({theme:l})=>l.spaces[1]} 0 0 ${({theme:l})=>l.spaces[1]};
`;function se({route:l}){const{formatMessage:d}=(0,u.Z)(),{method:c,handler:I,path:E}=l,D=E?Pe()(E.split("/")):[],[y="",$=""]=I?I.split("."):[],W=Me(l.method);return t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(k.Z,{variant:"delta",as:"h3"},d({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",t.createElement("span",null,y),t.createElement(k.Z,{variant:"delta",textColor:"primary600"},".",$)),t.createElement(o.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0},t.createElement(Re,{background:W.background,borderColor:W.border,padding:2},t.createElement(k.Z,{fontWeight:"bold",textColor:W.text},c)),t.createElement(B.x,{paddingLeft:2,paddingRight:2},Ae()(D,K=>t.createElement(k.Z,{key:K,textColor:K.includes(":")?"neutral600":"neutral900"},"/",K)))))}se.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},se.propTypes={route:n().shape({handler:n().string,method:n().string,path:n().string})};const Oe=se,Ie=()=>{const{value:{selectedAction:l,routes:d}}=M(),{formatMessage:c}=(0,u.Z)(),I=l?.split(".")[0];return t.createElement(Z.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},l?t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:2},d[I]?.map(E=>E.config.auth?.scope?.includes(l)||E.handler===l?t.createElement(Oe,{key:E.handler,route:E}):null)):t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(k.Z,{variant:"delta",as:"h3"},c({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})),t.createElement(k.Z,{as:"p",textColor:"neutral600"},c({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))};var De=e(45322),xe=e(24920),ke=e(34642),ue=e(22572),Se=e(35318),Le=e(98344),Be=e.n(Le);const ge=(0,_.css)`
  background: ${l=>l.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Ue=(0,_.default)(B.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${l=>l.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${l=>l.isActive&&ge}
  &:hover {
    ${ge}
  }
`,Ze=_.default.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:l})=>l.colors.neutral150};
`,ae=({controllers:l,label:d,orderNumber:c,disabled:I,onExpanded:E,indexExpandendCollapsedContent:D})=>{const{value:{onChangeSelectAll:y,onChange:$,selectedActions:W,setSelectedAction:K,selectedAction:Y}}=M(),[b,q]=(0,t.useState)(!1),{formatMessage:re}=(0,u.Z)(),j=()=>{q(x=>!x),E(c)};(0,t.useEffect)(()=>{D!==null&&D!==c&&b&&q(!1)},[D,c,b]);const L=x=>x===Y;return t.createElement(De.U,{expanded:b,onToggle:j,variant:c%2?"primary":"secondary"},t.createElement(xe.B,{title:Be()(d)}),t.createElement(ke.v,null,l?.map(x=>{const Q=x.actions.every(U=>W.includes(U.actionId)),le=x.actions.some(U=>W.includes(U.actionId));return t.createElement(B.x,{key:`${d}.${x?.controller}`},t.createElement(o.k,{justifyContent:"space-between",alignItems:"center",padding:4},t.createElement(B.x,{paddingRight:4},t.createElement(k.Z,{variant:"sigma",textColor:"neutral600"},x?.controller)),t.createElement(Ze,null),t.createElement(B.x,{paddingLeft:4},t.createElement(ue.X,{value:Q,indeterminate:!Q&&le,onValueChange:()=>{y({target:{value:[...x.actions]}})},disabled:I},re({id:"app.utils.select-all",defaultMessage:"Select all"})))),t.createElement(F.r,{gap:4,padding:4},x?.actions&&x?.actions.map(U=>t.createElement(Z.P,{col:6,key:U.actionId},t.createElement(Ue,{isActive:L(U.actionId),padding:2,hasRadius:!0},t.createElement(ue.X,{value:W.includes(U.actionId),name:U.actionId,onValueChange:()=>{$({target:{value:U.actionId}})},disabled:I},U.action),t.createElement("button",{type:"button","data-testid":"action-cog",onClick:()=>K({target:{value:U.actionId}}),style:{display:"inline-flex",alignItems:"center"}},t.createElement(Se.Z,null)))))))})))};ae.defaultProps={controllers:[],orderNumber:0,disabled:!1,onExpanded:()=>null,indexExpandendCollapsedContent:null},ae.propTypes={controllers:n().array,orderNumber:n().number,label:n().string.isRequired,disabled:n().bool,onExpanded:n().func,indexExpandendCollapsedContent:n().number};const Ne=ae,oe=({section:l,...d})=>{const[c,I]=(0,t.useState)(null),E=D=>I(D);return t.createElement(B.x,{padding:4,background:"neutral0"},l&&l.map((D,y)=>t.createElement(Ne,{key:D.apiId,label:D.label,controllers:D.controllers,orderNumber:y,indexExpandendCollapsedContent:c,onExpanded:E,name:D.apiId,...d})))};oe.defaultProps={section:null},oe.propTypes={section:n().arrayOf(n().object)};const We=oe,Ke=({...l})=>{const{value:{data:d}}=M(),{formatMessage:c}=(0,u.Z)();return t.createElement(F.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},t.createElement(Z.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(k.Z,{variant:"delta",as:"h2"},c({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})),t.createElement(k.Z,{as:"p",textColor:"neutral600"},c({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."}))),d?.permissions&&t.createElement(We,{section:d?.permissions,...l})),t.createElement(Ie,null))},be=(0,t.memo)(Ke);var ie=e(51352);const Fe=(l,d=[])=>({...l,selectedAction:null,routes:[],selectedActions:[],data:(0,ie.mk)(d)});var $e=e(61815),He=e(22009),me=e.n(He);const Ve={data:{},selectedActions:[]},Ge=(l,d)=>(0,$e.ZP)(l,c=>{switch(d.type){case"ON_CHANGE":{c.selectedActions.includes(d.value)?me()(c.selectedActions,d.value):c.selectedActions.push(d.value);break}case"SELECT_ALL_IN_PERMISSION":{d.value.every(E=>c.selectedActions.includes(E.actionId))?d.value.forEach(E=>{me()(c.selectedActions,E.actionId)}):d.value.forEach(E=>{c.selectedActions.push(E.actionId)});break}case"SELECT_ALL_ACTIONS":{c.selectedActions=[...c.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const I=c.data.allActionsIds.filter(E=>E.includes("find")||E.includes("findOne"));c.selectedActions=[...I];break}case"UPDATE_PERMISSIONS_LAYOUT":{c.data=(0,ie.mk)(d.value);break}case"UPDATE_ROUTES":{c.routes={...d.value};break}case"UPDATE_PERMISSIONS":{c.selectedActions=[...d.value];break}case"SET_SELECTED_ACTION":{c.selectedAction=d.value;break}default:return c}}),ze="Name already taken",Xe=()=>{(0,a.useFocusWhenNavigate)();const{formatMessage:l}=(0,u.Z)(),{lockApp:d,unlockApp:c}=(0,a.useOverlayBlocker)(),I=(0,a.useNotification)(),E=(0,v.k6)(),D=(0,s.v9)(R._),[y,$]=(0,t.useState)(E.location.state?.apiToken.accessKey?{...E.location.state.apiToken}:null),{trackUsage:W}=(0,a.useTracking)(),K=(0,t.useRef)(W),{setCurrentStep:Y}=(0,a.useGuidedTour)(),{allowedActions:{canCreate:b,canUpdate:q,canRegenerate:re}}=(0,a.useRBAC)(D.settings["api-tokens"]),[j,L]=(0,t.useReducer)(Ge,Ve,m=>Fe(m,{})),{params:{id:x}}=(0,v.$B)("/settings/api-tokens/:id"),{get:Q,post:le,put:U}=(0,a.useFetchClient)(),N=x==="create";(0,T.useQuery)("content-api-permissions",async()=>{const[m,G]=await Promise.all(["/admin/content-api/permissions","/admin/content-api/routes"].map(async J=>{const{data:S}=await Q(J);return S.data}));L({type:"UPDATE_PERMISSIONS_LAYOUT",value:m}),L({type:"UPDATE_ROUTES",value:G}),y&&(y?.type==="read-only"&&L({type:"ON_CHANGE_READ_ONLY"}),y?.type==="full-access"&&L({type:"SELECT_ALL_ACTIONS"}),y?.type==="custom"&&L({type:"UPDATE_PERMISSIONS",value:y?.permissions}))},{onError(){I({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),(0,t.useEffect)(()=>{K.current(N?"didAddTokenFromList":"didEditTokenFromList",{tokenType:O.Z})},[N]);const{status:Ye}=(0,T.useQuery)(["api-token",x],async()=>{const{data:{data:m}}=await Q(`/admin/api-tokens/${x}`);return $({...m}),m?.type==="read-only"&&L({type:"ON_CHANGE_READ_ONLY"}),m?.type==="full-access"&&L({type:"SELECT_ALL_ACTIONS"}),m?.type==="custom"&&L({type:"UPDATE_PERMISSIONS",value:m?.permissions}),m},{enabled:!N&&!y,onError(){I({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),je=async(m,G)=>{K.current(N?"willCreateToken":"willEditToken",{tokenType:O.Z}),d();const J=m.lifespan&&parseInt(m.lifespan,10)&&m.lifespan!=="0"?parseInt(m.lifespan,10):null;try{const{data:{data:S}}=N?await le("/admin/api-tokens",{...m,lifespan:J,permissions:m.type==="custom"?j.selectedActions:null}):await U(`/admin/api-tokens/${x}`,{name:m.name,description:m.description,type:m.type,permissions:m.type==="custom"?j.selectedActions:null});N&&(E.replace(`/settings/api-tokens/${S.id}`,{apiToken:S}),Y("apiTokens.success")),c(),$({...S}),I({type:"success",message:l(N?{id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"}:{id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),K.current(N?"didCreateToken":"didEditToken",{type:y.type,tokenType:O.Z})}catch(S){const pe=(0,C.Iz)(S.response.data);G.setErrors(pe),S?.response?.data?.error?.message===ze?I({type:"warning",message:S.response.data.message||"notification.error.tokennamenotunique"}):I({type:"warning",message:S?.response?.data?.message||"notification.error"}),c()}},[Qe,de]=(0,t.useState)(!1),Je={...j,onChange:({target:{value:m}})=>{de(!0),L({type:"ON_CHANGE",value:m})},onChangeSelectAll:({target:{value:m}})=>{de(!0),L({type:"SELECT_ALL_IN_PERMISSION",value:m})},setSelectedAction:({target:{value:m}})=>{L({type:"SET_SELECTED_ACTION",value:m})}},ce=q&&!N||b&&N;return!N&&!y&&Ye!=="success"?t.createElement(he,{apiTokenName:y?.name}):t.createElement(P,{value:Je},t.createElement(p.o,null,t.createElement(a.SettingsPageTitle,{name:"API Tokens"}),t.createElement(i.Formik,{validationSchema:ie.fK,validateOnChange:!1,initialValues:{name:y?.name||"",description:y?.description||"",type:y?.type,lifespan:y?.lifespan?y.lifespan.toString():y?.lifespan},enableReinitialize:!0,onSubmit:(m,G)=>je(m,G)},({errors:m,handleChange:G,isSubmitting:J,values:S,setFieldValue:pe})=>(Qe&&S?.type!=="custom"&&pe("type","custom"),t.createElement(a.Form,null,t.createElement(H.Z,{backUrl:"/settings/api-tokens",title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:y,setToken:$,canEditInputs:ce,canRegenerate:re,isSubmitting:J,regenerateUrl:"/admin/api-tokens/"}),t.createElement(r.D,null,t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:6},Boolean(y?.name)&&t.createElement(z.Z,{token:y?.accessKey,tokenType:O.Z}),t.createElement(Ee,{errors:m,onChange:G,canEditInputs:ce,isCreating:N,values:S,apiToken:y,onDispatch:L,setHasChangedPermissions:de}),t.createElement(be,{disabled:!ce||S?.type==="read-only"||S?.type==="full-access"}))))))))}},51352:(f,g,e)=>{"use strict";e.d(g,{IX:()=>a,fK:()=>s,mk:()=>A});var t=e(84260),p=e(1851),r=e(90765);const a=(n,h,P="en")=>{if(h&&typeof h=="number"){const M=h/24/60/60/1e3;return(0,t.Z)((0,p.Z)(new Date(n),M),"PPP",{locale:r[P]})}return"Unlimited"};var i=e(57537),u=e(47853);const s=u.Ry().shape({name:u.Z_(i.translatedErrors.string).max(100).required(i.translatedErrors.required),type:u.Z_(i.translatedErrors.string).oneOf(["read-only","full-access","custom"]).required(i.translatedErrors.required),description:u.Z_().nullable(),lifespan:u.Rx().integer().min(0).nullable().defined(i.translatedErrors.required)}),A=n=>{const h={allActionsIds:[],permissions:[]};return h.permissions=Object.keys(n).map(P=>({apiId:P,label:P.split("::")[1],controllers:Object.keys(n[P].controllers).map(M=>({controller:M,actions:n[P].controllers[M].map(C=>{const R=`${P}.${M}.${C}`;return P.includes("api::")&&h.allActionsIds.push(R),{action:C,actionId:R}}).flat()})).flat()})),h}},32652:f=>{function g(e,t,p,r){for(var o=e.length,a=p+(r?1:-1);r?a--:++a<o;)if(t(e[a],a,e))return a;return-1}f.exports=g},62878:(f,g,e)=>{var t=e(32652),p=e(2784),r=e(51425);function o(a,i,u){return i===i?r(a,i,u):t(a,p,u)}f.exports=o},1786:f=>{function g(e,t,p,r){for(var o=p-1,a=e.length;++o<a;)if(r(e[o],t))return o;return-1}f.exports=g},2784:f=>{function g(e){return e!==e}f.exports=g},12186:(f,g,e)=>{var t=e(36393),p=e(62878),r=e(1786),o=e(20435),a=e(22033),i=Array.prototype,u=i.splice;function T(s,v,A,n){var h=n?r:p,P=-1,M=v.length,C=s;for(s===v&&(v=a(v)),A&&(C=t(s,o(A)));++P<M;)for(var R=0,O=v[P],H=A?A(O):O;(R=h(C,H,R,n))>-1;)C!==s&&u.call(C,R,1),u.call(s,R,1);return s}f.exports=T},51425:f=>{function g(e,t,p){for(var r=p-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}f.exports=g},58422:(f,g,e)=>{var t=e(36393),p=e(90040),r=e(92403),o=e(26126);function a(i,u){var T=o(i)?t:r;return T(i,p(u,3))}f.exports=a},22009:(f,g,e)=>{var t=e(52431),p=e(45906),r=t(p);f.exports=r},45906:(f,g,e)=>{var t=e(12186);function p(r,o){return r&&r.length&&o&&o.length?t(r,o):r}f.exports=p},34049:(f,g,e)=>{var t=e(20454);function p(r){var o=r==null?0:r.length;return o?t(r,1,o):[]}f.exports=p}}]);

"use strict";(self.webpackChunkcmssample=self.webpackChunkcmssample||[]).push([[5162],{34882:(le,S,t)=>{t.d(S,{Z:()=>oe});var e=t(27279),x=t(96226),p=t(10701),b=t(2878),W=t(77970),z=t(25191),U=t(4540),l=t(51094),ne=t(10989),se=t(21395),H=t(67472),N=t(22572),O=t(73411),G=t(71563),ie=t(70627),f=t.n(ie),Q=t(61020),T=t(72450),de=t(92686);const g=s=>s.reduce((o,c)=>{const v=c.split(".")[0];return o[v]||(o[v]=[]),o[v].push(c),o},{}),B=(0,T.default)(x.w)`
  tbody tr:nth-child(odd) {
    background: ${({theme:s})=>s.colors.neutral100};
  }

  thead th span {
    color: ${({theme:s})=>s.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({theme:s})=>s.spaces[3]};
    padding-block-end: ${({theme:s})=>s.spaces[3]};
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr td:first-child {
    /**
     * Add padding to the start of the first column to avoid the checkbox appearing
     * too close to the edge of the table
     */
    padding-inline-start: ${({theme:s})=>s.spaces[2]};
  }
`,ae=s=>{const o=[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}];return s&&(o.push({id:"app.utils.publish",defaultMessage:"Publish"}),o.push({id:"app.utils.unpublish",defaultMessage:"Unpublish"})),o},J=s=>{const o=["entry.create","entry.update","entry.delete"];return s&&o.push("entry.publish","entry.unpublish"),{entry:o,media:["media.create","media.update","media.delete"]}},Y=e.createContext(),re=({children:s})=>{const{formatMessage:o}=(0,Q.Z)(),{collectionTypes:c,isLoading:v}=(0,de.G)(),u=e.useMemo(()=>c.some(A=>A.options.draftAndPublish===!0),[c]),I=o({id:"Settings.webhooks.form.events",defaultMessage:"Events"});return e.createElement(Y.Provider,{value:{isDraftAndPublish:u}},e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(b.Q,{"aria-hidden":!0},I),v&&e.createElement(W.a,null,o({id:"Settings.webhooks.events.isLoading",defaultMessage:"Events loading"})),e.createElement(B,{"aria-label":I},s)))};re.propTypes={children:f().oneOfType([f().arrayOf(f().node),f().node]).isRequired};const _=({getHeaders:s=ae})=>{const{isDraftAndPublish:o}=e.useContext(Y),{formatMessage:c}=(0,Q.Z)(),v=s(o);return e.createElement(z.S,null,e.createElement(U.Z,null,e.createElement(l.g,null,e.createElement(ne.T,null,c({id:"Settings.webhooks.event.select",defaultMessage:"Select event"}))),v.map(u=>["app.utils.publish","app.utils.unpublish"].includes(u.id)?e.createElement(l.g,{key:u.id,title:c({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"})},e.createElement(se.Z,{variant:"sigma",textColor:"neutral600"},c(u))):e.createElement(l.g,{key:u.id},e.createElement(se.Z,{variant:"sigma",textColor:"neutral600"},c(u))))))};_.defaultProps={getHeaders:ae},_.propTypes={getHeaders:f().func};const q=({providedEvents:s})=>{const{isDraftAndPublish:o}=e.useContext(Y),c=s||J(o),{values:v,handleChange:u}=(0,G.useFormikContext)(),I="events",A=v.events,j=[],Z=g(A),k=({target:{name:C,value:m}})=>{let P=new Set(A);m?P.add(C):P.delete(C),u({target:{name:I,value:Array.from(P)}})},F=({target:{name:C,value:m}})=>{let P=new Set(A);m?c[C].forEach(M=>{j.includes(M)||P.add(M)}):c[C].forEach(M=>P.delete(M)),u({target:{name:I,value:Array.from(P)}})};return e.createElement(H.X,null,Object.entries(c).map(([C,m])=>e.createElement(w,{disabledEvents:j,key:C,name:C,events:m,inputValue:Z[C],handleSelect:k,handleSelectAll:F})))};q.defaultProps={providedEvents:null},q.propTypes={providedEvents:f().object};const ce=s=>s.replace(/-/g," ").split(" ").map(o=>o.charAt(0).toUpperCase()+o.slice(1).toLowerCase()).join(" "),w=({disabledEvents:s,name:o,events:c,inputValue:v,handleSelect:u,handleSelectAll:I})=>{const{formatMessage:A}=(0,Q.Z)(),j=c.filter(m=>!s.includes(m)),Z=v.length>0,k=v.length===j.length,F=({target:{name:m}})=>{I({target:{name:m,value:!k}})},C=5;return e.createElement(U.Z,null,e.createElement(l.f,null,e.createElement(N.X,{indeterminate:Z&&!k,"aria-label":A({id:"global.select-all-entries",defaultMessage:"Select all entries"}),name:o,onChange:F,value:k},ce(o))),c.map(m=>e.createElement(l.f,{key:m},e.createElement(O.C,{disabled:s.includes(m),"aria-label":m,name:m,value:v.includes(m),onValueChange:P=>u({target:{name:m,value:P}})}))),c.length<C&&e.createElement(l.f,{colSpan:C-c.length}))};w.defaultProps={disabledEvents:[],events:[],inputValue:[],handleSelect(){},handleSelectAll(){}},w.propTypes={disabledEvents:f().array,events:f().array,inputValue:f().array,handleSelect:f().func,handleSelectAll:f().func,name:f().string.isRequired};const oe={Root:re,Headers:_,Body:q,EventRow:w}},81164:(le,S,t)=>{t.d(S,{Z:()=>fe});var e=t(27279),x=t(9941),p=t(57537),b=t(40464),W=t(51447),z=t(92686),U=t(27875),l=t(10701),ne=t(48102),se=t(74758),H=t(93415),N=t(23298),O=t(74577),G=t(12881),ie=t(64820),f=t(59082),Q=t(76827),T=t(71563),de=t(70627),g=t.n(de),B=t(61020),ae=t(80902),J=t(34882);function Y(){return e.createElement(J.Z.Root,null,e.createElement(J.Z.Headers,null),e.createElement(J.Z.Body,null))}var re=t(2878),_=t(1782),q=t(36938),ce=t(8295),w=t(61121);const oe=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],s=({name:n,onChange:a,value:r,...d})=>{const{values:{headers:E}}=(0,T.useFormikContext)(),[y,i]=(0,e.useState)(oe);(0,e.useEffect)(()=>{i(oe.filter(h=>!E?.some(K=>K.key!==r&&K.key===h)))},[E,r]);const $=h=>{a({target:{name:n,value:h}})},X=h=>{i(K=>[...K,h]),$(h)};return e.createElement(ce.XU,{...d,onClear:()=>$(""),onChange:$,onCreateOption:X,placeholder:"",value:r},y.map(h=>e.createElement(w.O,{value:h,key:h},h)))};s.defaultProps={value:void 0},s.propTypes={name:g().string.isRequired,onChange:g().func.isRequired,value:g().string};const o=s,v=()=>{const{formatMessage:n}=(0,B.Z)(),{values:a,errors:r}=(0,T.useFormikContext)();return e.createElement(l.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(re.Q,null,n({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})),e.createElement(H.x,{padding:8,background:"neutral100",hasRadius:!0},e.createElement(T.FieldArray,{validateOnChange:!1,name:"headers",render:({push:d,remove:E})=>e.createElement(N.r,{gap:4},a.headers.map((y,i)=>e.createElement(e.Fragment,{key:`${i}.${y.key}`},e.createElement(O.P,{col:6},e.createElement(T.Field,{as:o,name:`headers.${i}.key`,"aria-label":`row ${i+1} key`,label:n({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:r.headers?.[i]?.key&&r.headers[i].key})),e.createElement(O.P,{col:6},e.createElement(l.k,{alignItems:"flex-end"},e.createElement(H.x,{style:{flex:1}},e.createElement(T.Field,{as:G.o,name:`headers.${i}.value`,"aria-label":`row ${i+1} value`,label:n({id:"Settings.webhooks.value",defaultMessage:"Value"}),error:r.headers?.[i]?.value&&r.headers[i].value})),e.createElement(l.k,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:r.headers?.[i]?.value?0:5},e.createElement(p.RemoveRoundedButton,{disabled:a.headers.length===1,onClick:()=>E(i),label:n({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:i+1})})))))),e.createElement(O.P,{col:12},e.createElement(_.A,{type:"button",onClick:()=>{d({key:"",value:""})},startIcon:e.createElement(q.Z,null)},n({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"}))))})))};var u=t(21395),I=t(34547),A=t(95066),j=t(72450);const Z=j.default.svg(({theme:n,color:a})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;

  path {
    fill: ${n.colors[a]};
  }
`),k=({isPending:n,statusCode:a})=>{const{formatMessage:r}=(0,B.Z)();return n?e.createElement(l.k,{gap:2,alignItems:"center"},e.createElement(Z,{as:I.Z}),e.createElement(u.Z,null,r({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"}))):a>=200&&a<300?e.createElement(l.k,{gap:2,alignItems:"center"},e.createElement(Z,{as:f.Z,color:"success700"}),e.createElement(u.Z,null,r({id:"Settings.webhooks.trigger.success",defaultMessage:"success"}))):a>=300?e.createElement(l.k,{gap:2,alignItems:"center"},e.createElement(Z,{as:A.Z,color:"danger700"}),e.createElement(u.Z,null,r({id:"Settings.error",defaultMessage:"error"})," ",a)):null};k.propTypes={isPending:g().bool.isRequired,statusCode:g().number},k.defaultProps={statusCode:void 0};const F=({statusCode:n,message:a})=>{const{formatMessage:r}=(0,B.Z)();return n>=200&&n<300?e.createElement(l.k,{justifyContent:"flex-end"},e.createElement(u.Z,{textColor:"neutral600",ellipsis:!0},r({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"}))):n>=300?e.createElement(l.k,{justifyContent:"flex-end"},e.createElement(l.k,{maxWidth:(0,p.pxToRem)(250),justifyContent:"flex-end",title:a},e.createElement(u.Z,{ellipsis:!0,textColor:"neutral600"},a))):null};F.propTypes={statusCode:g().number,message:g().string},F.defaultProps={statusCode:void 0,message:void 0};const C=({onCancel:n})=>{const{formatMessage:a}=(0,B.Z)();return e.createElement(l.k,{justifyContent:"flex-end"},e.createElement("button",{onClick:n,type:"button"},e.createElement(l.k,{gap:2,alignItems:"center"},e.createElement(u.Z,{textColor:"neutral400"},a({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})),e.createElement(Z,{as:A.Z,color:"neutral400"}))))};C.propTypes={onCancel:g().func.isRequired};const m=({isPending:n,onCancel:a,response:r})=>{const{statusCode:d,message:E}=r,{formatMessage:y}=(0,B.Z)();return e.createElement(H.x,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0},e.createElement(N.r,{gap:4,style:{alignItems:"center"}},e.createElement(O.P,{col:3},e.createElement(u.Z,null,y({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"}))),e.createElement(O.P,{col:3},e.createElement(k,{isPending:n,statusCode:d})),e.createElement(O.P,{col:6},n?e.createElement(C,{onCancel:a}):e.createElement(F,{statusCode:d,message:E}))))};m.defaultProps={isPending:!1,onCancel(){},response:{}},m.propTypes={isPending:g().bool,onCancel:g().func,response:g().object};const P=m;var M=t(47853);const ge=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,Ee=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,he=({formatMessage:n})=>M.Ry().shape({name:M.Z_().required(n({id:"Settings.webhooks.validation.name.required",defaultMessage:"Name is required"})).matches(ge,n({id:"Settings.webhooks.validation.name.regex",defaultMessage:"The name must start with a letter and only contain letters, numbers, spaces and underscores"})),url:M.Z_().required(n({id:"Settings.webhooks.validation.url.required",defaultMessage:"Url is required"})).matches(Ee,n({id:"Settings.webhooks.validation.url.regex",defaultMessage:"The value must be a valid Url"})),headers:M.Vo(a=>{let r=M.IX();if(a.length===1){const{key:d,value:E}=a[0];if(!d&&!E)return r}return r.of(M.Ry().shape({key:M.Z_().required(n({id:"Settings.webhooks.validation.key",defaultMessage:"Key is required"})),value:M.Z_().required(n({id:"Settings.webhooks.validation.value",defaultMessage:"Value is required"}))}))}),events:M.IX()}),ue=({handleSubmit:n,triggerWebhook:a,isCreating:r,isTriggering:d,triggerResponse:E,data:y})=>{const{formatMessage:i}=(0,B.Z)(),[$,X]=(0,e.useState)(!1),h=(0,ae.c)(Y,async()=>(await t.e(568).then(t.bind(t,70568))).EventTableEE),K=L=>Object.keys(L).length?Object.entries(L).map(([ee,te])=>({key:ee,value:te})):[{key:"",value:""}],D=(0,T.useFormik)({initialValues:{name:y?.name||"",url:y?.url||"",headers:K(y?.headers||{}),events:y?.events||[]},onSubmit(L,{resetForm:ee,setSubmitting:te}){n(L),ee({values:L}),te(!1)},validationSchema:he({formatMessage:i}),validateOnChange:!1,validateOnBlur:!1});return h?e.createElement(T.FormikProvider,{value:D},e.createElement(p.Form,{onSubmit:D.handleSubmit},e.createElement(U.T,{primaryAction:e.createElement(l.k,{gap:2},e.createElement(ne.z,{onClick:()=>{a(),X(!0)},variant:"tertiary",startIcon:e.createElement(ie.Z,null),disabled:r||d,size:"L"},i({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})),e.createElement(ne.z,{startIcon:e.createElement(f.Z,null),type:"submit",size:"L",disabled:!D.dirty,loading:D.isSubmitting},i({id:"global.save",defaultMessage:"Save"}))),title:r?i({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):y?.name,navigationAction:e.createElement(p.Link,{startIcon:e.createElement(Q.Z,null),to:"/settings/webhooks"},i({id:"global.back",defaultMessage:"Back"}))}),e.createElement(se.D,null,e.createElement(l.k,{direction:"column",alignItems:"stretch",gap:4},$&&e.createElement(P,{isPending:d,response:E,onCancel:()=>X(!1)}),e.createElement(H.x,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0},e.createElement(l.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(N.r,{gap:6},e.createElement(O.P,{col:6},e.createElement(T.Field,{as:G.o,name:"name",error:D?.errors?.name&&D.errors.name,label:i({id:"global.name",defaultMessage:"Name"}),required:!0})),e.createElement(O.P,{col:12},e.createElement(T.Field,{as:G.o,name:"url",error:D?.errors?.url&&D.errors.url,label:i({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0}))),e.createElement(v,null),e.createElement(h,null))))))):null};ue.propTypes={data:g().object,handleSubmit:g().func.isRequired,triggerWebhook:g().func.isRequired,isCreating:g().bool.isRequired,isTriggering:g().bool.isRequired,triggerResponse:g().object},ue.defaultProps={data:void 0,triggerResponse:void 0};const pe=ue,me=n=>({...n,headers:n.headers.reduce((a,{key:r,value:d})=>(r!==""&&(a[r]=d),a),{})}),fe=()=>{const{params:{id:n}}=(0,W.$B)("/settings/webhooks/:id"),a=n==="create",{replace:r}=(0,W.k6)(),d=(0,p.useNotification)(),{formatAPIError:E}=(0,p.useAPIErrorHandler)(),y=(0,b.useQueryClient)(),{isLoading:i}=(0,z.G)(),{put:$,get:X,post:h}=(0,p.useFetchClient)(),{isLoading:K,data:D,error:L}=(0,b.useQuery)(["webhooks",n],async()=>{const{data:{data:R}}=await X(`/admin/webhooks/${n}`);return R},{enabled:!a});e.useEffect(()=>{L&&d({type:"warning",message:E(L)})},[L,d,E]);const{isLoading:ee,data:te,isIdle:ve,mutate:Ce}=(0,b.useMutation)(()=>h(`/admin/webhooks/${n}/trigger`)),Me=()=>Ce(null,{onError(R){d({type:"warning",message:E(R)})}}),ye=(0,b.useMutation)(R=>h("/admin/webhooks",R)),Pe=(0,b.useMutation)(({id:R,body:V})=>$(`/admin/webhooks/${R}`,V)),be=async R=>{if(a){ye.mutate(me(R),{onSuccess({data:V}){d({type:"success",message:{id:"Settings.webhooks.created"}}),r(`/settings/webhooks/${V.data.id}`)},onError(V){d({type:"warning",message:E(V)})}});return}Pe.mutate({id:n,body:me(R)},{onSuccess(){y.invalidateQueries(["webhooks",n]),d({type:"success",message:{id:"notification.form.success.fields"}})},onError(V){d({type:"warning",message:E(V)})}})};return K||i?e.createElement(p.LoadingIndicatorPage,null):e.createElement(x.o,null,e.createElement(p.SettingsPageTitle,{name:"Webhooks"}),e.createElement(pe,{data:D,handleSubmit:be,triggerWebhook:Me,isCreating:a,isTriggering:ee,isTriggerIdle:ve,triggerResponse:te?.data.data}))}},71589:(le,S,t)=>{t.r(S),t.d(S,{default:()=>U});var e=t(27279),x=t(57537),p=t(49402),b=t(36364),W=t(81164);const U=()=>{const l=(0,p.v9)(b._);return e.createElement(x.CheckPagePermissions,{permissions:l.settings.webhooks.create},e.createElement(W.Z,null))}},10372:(le,S,t)=>{t.r(S),t.d(S,{default:()=>U});var e=t(27279),x=t(57537),p=t(49402),b=t(36364),W=t(81164);const U=()=>{const l=(0,p.v9)(b._);return e.createElement(x.CheckPagePermissions,{permissions:l.settings.webhooks.update},e.createElement(W.Z,null))}}}]);

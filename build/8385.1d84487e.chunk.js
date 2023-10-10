"use strict";(self.webpackChunkcmssample=self.webpackChunkcmssample||[]).push([[8385],{52713:(S,L,n)=>{n.d(L,{r:()=>R});var m=n(27279),g=n(93415),O=n(70627),M=n.n(O),x=n(67621);function v(b,C,p){if(!b||!C)return{display:"none"};const{x:P,y:K}=p;return{transform:`translate(${P}px, ${K}px)`}}function R({renderItem:b}){const{itemType:C,isDragging:p,item:P,initialOffset:K,currentOffset:U,mouseOffset:Z}=(0,x.useDragLayer)(A=>({item:A.getItem(),itemType:A.getItemType(),initialOffset:A.getInitialSourceClientOffset(),currentOffset:A.getSourceClientOffset(),isDragging:A.isDragging(),mouseOffset:A.getClientOffset()}));return p?m.createElement(g.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%"},m.createElement(g.x,{style:v(K,U,Z)},b({type:C,item:P}))):null}R.propTypes={renderItem:M().func.isRequired}},27661:(S,L,n)=>{var m=n(27279);const g=(0,m.createContext)();var O=null},21440:(S,L,n)=>{n.d(L,{PL:()=>x,Y9:()=>v.Y,zE:()=>ae,Ky:()=>$,fi:()=>ne,zH:()=>ce,r5:()=>i});var m=n(27279),g=n(49402),O=n(25398);const x=()=>{const e=(0,g.v9)(O.Z),t=(0,m.useCallback)(s=>e?.components?.[s]??{},[e]);return{...e,getComponentLayout:t}};var v=n(79116),R=n(57537),b=n(5466),C=n(42225),p=n(61815);const P={error:null,isLoading:!0,layout:{},layouts:{}},U=(e,t)=>(0,p.ZP)(e,s=>{switch(t.type){case"GET_DATA":{s.isLoading=!0,s.error=null,s.layout={};break}case"GET_DATA_SUCCEEDED":{const a=t.data.contentType.uid;s.layout=t.data,s.layouts[a]=t.data,s.isLoading=!1;break}case"GET_DATA_ERROR":{s.isLoading=!1,s.error=t.error;break}case"SET_LAYOUT_FROM_STATE":{s.error=null,s.layout=e.layouts[t.uid];break}case"UPDATE_LAYOUT":{const a=e.layout;s.layout={...a,contentType:{uid:a.contentType.uid,...t.newLayout.contentType}},s.layouts[a.contentType.uid]={...a,contentType:{uid:a.contentType.uid,...t.newLayout.contentType}};break}default:return s}});var Z=n(8175),A=n.n(Z),H=n(98934),k=n.n(H),re=n(43433),N=n.n(re),q=n(21892);const Q=(e,t)=>t.find(s=>s.uid===e),oe=(e,t)=>{const s=_(e,t),a=F(s.contentType,t),u=ee(s.contentType,s.components);return N()(s,["contentType","layouts","edit"],a),N()(s,["contentType","layouts","list"],u),Object.keys(s.components).forEach(c=>{const f=F(s.components[c],t);N()(s,["components",c,"layouts","edit"],f)}),s},_=(e,t)=>{const s=(0,q.w8)(A()(e),t,"contentType"),{components:a,contentType:u}=s,c=f=>Object.keys(f.metadatas).reduce((T,h)=>{const j=k()(f,["attributes",h],{});let I=f.metadatas[h];if(j.type==="relation"){const ye=Q(j.targetModel,t),W=I.edit.mainField,X={name:W,schema:k()(ye,["attributes",W])};I={list:{...I.list,mainField:X},edit:{...I.edit,mainField:X}}}return T[h]=I,T},{});return N()(s,["contentType","metadatas"],c(u)),Object.keys(a).forEach(f=>{const T=a[f],h=c(T);N()(s,["components",f,"metadatas"],h)}),s},F=(e,t)=>e.layouts.edit.reduce((s,a)=>{const u=a.map(c=>{const f=k()(e,["attributes",c.name],{}),T={...c,fieldSchema:f,metadatas:k()(e,["metadatas",c.name,"edit"],{})};if(f.type==="relation"){const j=Q(f.targetModel,t).pluginOptions||{};N()(T,"targetModelPluginOptions",j),N()(T,"queryInfos",{shouldDisplayRelationLink:Y(e,c.name,t)})}return T});return s.push(u),s},[]),ee=(e,t)=>e.layouts.list.reduce((a,u)=>{const c=k()(e,["attributes",u],{}),f=k()(e,["metadatas",u,"list"],{}),T=c.type;if(T==="relation")return a.push({key:`__${u}_key__`,name:u,fieldSchema:c,metadatas:f}),a;if(T==="component"){const h=t[c.component],j=h.settings.mainField,I=h.attributes[j];return a.push({key:`__${u}_key__`,name:u,fieldSchema:c,metadatas:{...f,mainField:{...I,name:j}}}),a}return a.push({key:`__${u}_key__`,name:u,fieldSchema:c,metadatas:f}),a},[]),Y=(e,t,s)=>{const a=k()(e,["attributes",t,"targetModel"],"");return B(s).includes(a)},B=e=>e.filter(t=>t.isDisplayed).map(({uid:t})=>t),V=oe,ae=e=>{const[{error:t,isLoading:s,layout:a,layouts:u},c]=(0,m.useReducer)(U,P),f=(0,m.useMemo)(C.Vo,[]),{schemas:T}=(0,g.v9)(W=>f(W),g.wU),h=(0,m.useRef)(!0),{get:j}=(0,R.useFetchClient)(),I=(0,m.useCallback)(async(W,X)=>{if(u[W]){c({type:"SET_LAYOUT_FROM_STATE",uid:W});return}c({type:"GET_DATA"});try{const{data:{data:se}}=await j(`/content-manager/content-types/${W}/configuration`,{cancelToken:X.token});c({type:"GET_DATA_SUCCEEDED",data:V(se,T)})}catch(se){if(b.default.isCancel(se))return;h.current&&console.error(se),h.current&&c({type:"GET_DATA_ERROR",error:se})}},[u,T,j]);(0,m.useEffect)(()=>()=>{h.current=!1},[]),(0,m.useEffect)(()=>{const X=b.default.CancelToken.source();return I(e,X),()=>{X.cancel("Operation canceled by the user.")}},[e,I]);const ye=(0,m.useCallback)(W=>{c({type:"UPDATE_LAYOUT",newLayout:V(W,T)})},[T]);return{error:t,isLoading:s,layout:a,updateLayout:ye}},ge=e=>e["content-manager_app"].collectionTypeLinks;var ue=n(3243),E=n.n(ue),J=n(29206);const ie=(e,t)=>Object.keys(e).reduce((s,a)=>{const u=e[a],c=k()(t,[a],u);return E()(u)?{...s,[a]:ie(u,c)}:(s[a]=c,s)},{}),le=(e,t,s)=>{const a=e.find(({to:I})=>I.includes(t));if(!a)return"/";const{to:u,search:c}=a,f=(0,J.parse)(c),T=(0,J.parse)(s.substring(1)),h=ie(f,T);return`${u}?${(0,J.stringify)(h,{encode:!1})}`},$=e=>{const[{rawQuery:t}]=(0,R.useQueryParams)(),s=(0,g.v9)(ge);return le(s,e,t)};var he=n(25950),z=n(51447);const ne=()=>{const{search:e}=(0,z.TH)(),t=e?(0,J.parse)(e.substring(1)):{};return t.plugins?(0,J.stringify)({plugins:t.plugins},{encode:!1}):""},ce=e=>{const t=(0,m.useRef)();return(0,m.useEffect)(()=>{t.current=e},[e]),t.current};var w=n(14996);const de=(e,t,s)=>({type:w.m,permissions:e,__meta__:{plugins:t,containerName:s}}),me=()=>({type:w.Q}),fe=e=>e["content-manager_rbacManager"].permissions,r=e=>e.rbacProvider.collectionTypesRelatedPermissions,i=(e,t,s="listView")=>{const a=(0,g.I0)(),u=(0,g.v9)(r),c=(0,g.v9)(fe),f=u[t];(0,m.useEffect)(()=>f?(a(de(f,e?e.plugins:null,s)),()=>{a(me())}):()=>{},[f,a,e,s]);const T=c?.some(h=>h.subject!==t)??!0;return{isValid:c&&!T,permissions:c}};var o=n(27661);const d=()=>useContext(WysiwygContext),y=null},79116:(S,L,n)=>{n.d(L,{Y:()=>x});var m=n(27279),g=n(67621),O=n.n(g),M=n(25950);const x=(v,{type:R="STRAPI_DND",index:b,item:C={},onStart:p,onEnd:P,onGrabItem:K,onDropItem:U,onCancel:Z,onMoveItem:A,dropSensitivity:H="regular"})=>{const k=(0,m.useRef)(null),[{handlerId:re},N]=(0,g.useDrop)({accept:R,collect(F){return{handlerId:F.getHandlerId()}},hover(F,ee){if(!k.current)return;const Y=F.index,B=b;if(Y!==B){if(H==="regular"){const V=k.current.getBoundingClientRect(),te=(V.bottom-V.top)/2,G=ee.getClientOffset().y-V.top;if(Y<B&&G<te||Y>B&&G>te)return}A(B,Y),F.index=B}}}),[{isDragging:q},Q,oe]=(0,g.useDrag)({type:R,item(){p&&p();const{width:F}=k.current?.getBoundingClientRect()??{};return{index:b,width:F,...C}},end(){P&&P()},canDrag:v,isDragging:C.id?F=>C.id===F.getItem().id:void 0,collect:F=>({isDragging:F.isDragging()})}),_=(0,M.A)(v,b,{onGrabItem:K,onDropItem:U,onCancel:Z,onMoveItem:A});return[{handlerId:re,isDragging:q,handleKeyDown:_},k,N,Q,oe]}},25950:(S,L,n)=>{n.d(L,{A:()=>g});var m=n(27279);const g=(O,M,{onCancel:x,onDropItem:v,onGrabItem:R,onMoveItem:b})=>{const[C,p]=(0,m.useState)(!1),P=A=>{C&&(A==="UP"?b(M-1,M):A==="DOWN"&&b(M+1,M))},K=()=>{C?(v&&v(M),p(!1)):(R&&R(M),p(!0))},U=()=>{C&&(p(!1),x&&x(M))};return A=>{if(O&&!(A.key==="Tab"&&!C))switch(A.preventDefault(),A.key){case" ":case"Enter":K();break;case"Escape":U();break;case"ArrowDown":case"ArrowRight":P("DOWN");break;case"ArrowUp":case"ArrowLeft":P("UP");break;default:}}}},42225:(S,L,n)=>{n.d(L,{Jg:()=>b,KQ:()=>v,Vo:()=>R,Yg:()=>O});var m=n(57150),g=n(23301);const O=()=>p=>p["content-manager_app"]||g.E,M=()=>createSelector(O(),p=>p),x=()=>createSelector(O(),p=>p.models),v=()=>(0,m.P1)(O(),p=>({collectionTypeLinks:p.collectionTypeLinks,singleTypeLinks:p.singleTypeLinks})),R=()=>(0,m.P1)(O(),({components:p,models:P})=>({schemas:[...p,...P]})),b=(0,m.P1)(O(),p=>p.fieldSizes);var C=null},25398:(S,L,n)=>{n.d(L,{Z:()=>g});const g=O=>O["content-manager_editViewLayoutManager"].currentLayout},56837:(S,L,n)=>{n.d(L,{Z:()=>m});const m={COMPONENT:"component",EDIT_FIELD:"editField",FIELD:"field",DYNAMIC_ZONE:"dynamicZone",RELATION:"relation"}},78186:(S,L,n)=>{n.d(L,{G:()=>m});const m=({firstname:g,lastname:O,username:M,email:x},v)=>M||(g?v({id:"global.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:g,lastname:O}).trim():x)},45283:(S,L,n)=>{n.d(L,{Z:()=>g});const g=O=>`content-manager.${O}`},21892:(S,L,n)=>{n.d(L,{_Q:()=>B.Z,W3:()=>M,ko:()=>v,FE:()=>b,Di:()=>K,Ex:()=>me,du:()=>H,TA:()=>N,Gf:()=>fe.G,Ts:()=>_,Uo:()=>ee,OB:()=>Y.Z,w8:()=>ue,kc:()=>ie});var m=n(8175),g=n.n(m);const M=(r,l,i)=>{if(Array.isArray(r)&&l>=0&&i>=0&&l<=r.length-1&&i<=r.length-1){const o=g()(r),d=o.splice(l,1);return o.splice(i,0,d[0]),o}return r},v=r=>{const{type:l}=r;return l==="relation"?!(r?.relationType??"").toLowerCase().includes("morph"):!["json","dynamiczone","richtext","password"].includes(l)&&!!l},R=(r,l)=>{typeof r=="function"?r(l):r!=null&&(r.current=l)},b=(...r)=>l=>r.forEach(i=>R(i,l));var C=n(98934),p=n.n(C);const P=(r,l)=>Object.keys(r).reduce((i,o)=>{const d=p()(r,[o],{}),{default:y,component:e,type:t,required:s,min:a,repeatable:u}=d;if(y!==void 0&&(i[o]=y),t==="component"){const c=l?.[e]?.attributes??{},f=P(c,l);if(s===!0&&(i[o]=u===!0?[]:f),a&&u===!0&&s){i[o]=[];for(let T=0;T<a;T+=1)i[o].push(f)}}return t==="dynamiczone"&&s===!0&&(i[o]=[]),i},{}),K=P;var U=n(74919),Z=n.n(U);const H=({layouts:r,metadatas:l,...i})=>{const o=r.list.map(e=>e.name?e.name:e),d=Object.keys(l).reduce((e,t)=>{const s=p()(l,[t],{});let a=s.edit;return a.mainField&&(a={...a,mainField:s.edit.mainField.name}),{...e,[t]:{edit:a,list:Z()(s.list,["mainField"])}}},{}),y=r.edit.map(e=>e.map(({name:t,size:s})=>({name:t,size:s})));return{...i,layouts:{edit:y,list:o},metadatas:d}},k=(r,l)=>r.map(i=>({...i,subject:l})),N=r=>{const l={create:[{action:"plugin::content-manager.explorer.create",subject:null}],delete:[{action:"plugin::content-manager.explorer.delete",subject:null}],publish:[{action:"plugin::content-manager.explorer.publish",subject:null}],read:[{action:"plugin::content-manager.explorer.read",subject:null}],update:[{action:"plugin::content-manager.explorer.update",subject:null}]};return Object.keys(l).reduce((i,o)=>(i[o]=k(l[o],r),i),{})};var q=n(92249),Q=n.n(q);const _=r=>r.split(".").filter(l=>Q()(parseInt(l,10))),ee=r=>{if(r.length===0)return-1;const l=Math.max.apply(Math,r.map(i=>i.__temp_key__??0));return Number.isNaN(l)?-1:l};var Y=n(45283),B=n(56837),V=n(87830),te=n.n(V),ae=n(43433),G=n.n(ae);const ue=(r,l,i)=>{const o=t=>l.find(s=>s.uid===t),d=Object.assign({},r),y=r[i].uid,e=o(y);return G()(d,[i],te()({},e,r[i])),Object.keys(r.components).forEach(t=>{const s=o(t);G()(d,["components",t],{...r.components[t],...s})}),d};var E=n(57537);const ie=(r,l,i)=>{const o=(d,y)=>Object.keys(d).reduce((e,t)=>{const s=(0,E.getType)(y,t),a=p()(d,t),u=(0,E.getOtherInfos)(y,[t,"component"]),c=(0,E.getOtherInfos)(y,[t,"repeatable"]);return s==="dynamiczone"?(e[t]=a.map(f=>o(f,i[f.__component])),e):s==="component"?(c?e[t]=a&&a.map(f=>o(f,i[u])):e[t]=a&&o(a,i[u]),e):(s!=="password"&&(e[t]=a),e)},{});return o(r,l)};var pe=n(86961),le=n.n(pe),Ee=n(10124),$=n.n(Ee),he=n(51527),z=n.n(he),D=n(47853),ne=n(72262);D.kM(D.nK,"defined",function(){return this.test("defined",E.translatedErrors.required,r=>r!==void 0)}),D.kM(D.IX,"notEmptyMin",function(r){return this.test("notEmptyMin",E.translatedErrors.min,l=>$()(l)?!0:l.length>=r)}),D.kM(D.Z_,"isInferior",function(r,l){return this.test("isInferior",r,function(i){return!i||Number.isNaN(z()(i))?!0:z()(l)>=z()(i)})}),D.kM(D.Z_,"isSuperior",function(r,l){return this.test("isSuperior",r,function(i){return!i||Number.isNaN(z()(i))?!0:z()(i)>=z()(l)})});const ce=r=>p()(r,["attributes"],{}),w=(r,{components:l},i={isCreatingEntry:!0,isDraft:!0,isFromComponent:!1,isJSONTestDisabled:!1})=>{const o=ce(r);return D.Ry().shape(Object.keys(o).reduce((d,y)=>{const e=o[y];if(e.type!=="relation"&&e.type!=="component"&&e.type!=="dynamiczone"){const t=de(e.type,e,i);d[y]=t}if(e.type==="relation"&&(d[y]=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(e.relationType)?D.Ry().nullable():D.IX().nullable()),e.type==="component"){const t=w(l[e.component],{components:l},{...i,isFromComponent:!0});if(e.repeatable===!0){const{min:a,max:u,required:c}=e;let f=D.Vo(T=>{let h=D.IX().of(t);return a?c?h=h.min(a,E.translatedErrors.min):c!==!0&&$()(T)?h=h.nullable():h=h.min(a,E.translatedErrors.min):c&&!i.isDraft&&(h=h.min(1,E.translatedErrors.required)),u&&(h=h.max(u,E.translatedErrors.max)),h});return d[y]=f,d}const s=D.Vo(a=>a!==void 0?e.required===!0&&!i.isDraft?t.defined():t.nullable():e.required===!0?D.Ry().defined():D.Ry().nullable());return d[y]=s,d}if(e.type==="dynamiczone"){let t=D.IX().of(D.Vo(({__component:u})=>w(l[u],{components:l},{...i,isFromComponent:!0})));const{max:s,min:a}=e;a?e.required?t=t.test("min",E.translatedErrors.min,u=>i.isCreatingEntry?u&&u.length>=a:u===void 0?!0:u!==null&&u.length>=a).test("required",E.translatedErrors.required,u=>i.isCreatingEntry?u!==null||u!==void 0:u===void 0?!0:u!==null):t=t.notEmptyMin(a):e.required&&!i.isDraft&&(t=t.test("required",E.translatedErrors.required,u=>i.isCreatingEntry?u!==null||u!==void 0:u===void 0?!0:u!==null)),s&&(t=t.max(s,E.translatedErrors.max)),d[y]=t}return d},{}))},de=(r,l,i)=>{let o=D.nK();return["string","uid","text","richtext","email","password","enumeration"].includes(r)&&(o=D.Z_()),r==="blocks"&&(o=D.nK().test("isJSON",E.translatedErrors.json,d=>i.isJSONTestDisabled||i.isDraft?!0:!!Array.isArray(d))),r==="json"&&(o=D.nK(E.translatedErrors.json).test("isJSON",E.translatedErrors.json,d=>{if(i.isJSONTestDisabled||!d||!d.length)return!0;try{return JSON.parse(d),!0}catch{return!1}}).nullable().test("required",E.translatedErrors.required,d=>!(l.required&&(!d||!d.length)))),r==="email"&&(o=o.email(E.translatedErrors.email)),["number","integer","float","decimal"].includes(r)&&(o=D.Rx().transform(d=>Q()(d)?void 0:d).typeError()),r==="biginteger"&&(o=D.Z_().matches(/^-?\d*$/)),["date","datetime"].includes(r)&&(o=D.hT()),Object.keys(l).forEach(d=>{const y=l[d];if(y||!le()(y)&&Number.isInteger(Math.floor(y))||y===0)switch(d){case"required":{i.isDraft||(r==="password"&&i.isCreatingEntry&&(o=o.required(E.translatedErrors.required)),r!=="password"&&(i.isCreatingEntry?o=o.required(E.translatedErrors.required):o=o.test("required",E.translatedErrors.required,e=>e===void 0&&!i.isFromComponent?!0:(0,ne.Z)(r)?e===0?!0:!!e:r==="boolean"?e!=null:r==="date"||r==="datetime"?typeof e=="string"?!$()(e):!$()(e?.toString()):!$()(e))));break}case"max":{r==="biginteger"?o=o.isInferior(E.translatedErrors.max,y):o=o.max(y,E.translatedErrors.max);break}case"maxLength":o=o.max(y,E.translatedErrors.maxLength);break;case"min":{r==="biginteger"?o=o.isSuperior(E.translatedErrors.min,y):o=o.min(y,E.translatedErrors.min);break}case"minLength":{i.isDraft||(o=o.min(y,E.translatedErrors.minLength));break}case"regex":o=o.matches(new RegExp(y),{message:E.translatedErrors.regex,excludeEmptyString:!l.required});break;case"lowercase":["text","textarea","email","string"].includes(r)&&(o=o.strict().lowercase());break;case"uppercase":["text","textarea","email","string"].includes(r)&&(o=o.strict().uppercase());break;case"positive":(0,ne.Z)(r)&&(o=o.positive());break;case"negative":(0,ne.Z)(r)&&(o=o.negative());break;default:o=o.nullable()}}),o},me=w;var fe=n(78186)},72262:(S,L,n)=>{n.d(L,{Z:()=>m});function m(g){return["integer","biginteger","decimal","float","number"].includes(g)}}}]);

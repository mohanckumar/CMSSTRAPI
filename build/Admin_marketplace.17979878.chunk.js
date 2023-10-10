"use strict";(self.webpackChunkcmssample=self.webpackChunkcmssample||[]).push([[5516],{63109:(Pe,Z,n)=>{n.d(Z,{Z:()=>D});var e=n(27279);const D=(x,I)=>{const[P,N]=(0,e.useState)(x);return(0,e.useEffect)(()=>{const f=setTimeout(()=>{N(x)},I);return()=>{clearTimeout(f)}},[x,I]),P}},91278:(Pe,Z,n)=>{n.r(Z),n.d(Z,{MarketPlacePage:()=>pe,default:()=>vt});var e=n(27279),A=n(27997),D=n(9941),x=n(74758),I=n(69878),P=n(10701),N=n(94098),f=n(93415),ve=n(31624),V=n(61908),g=n(57537),Ee=n(364),v=n(61020),ye=n(49402),Me=n(63109);const ke=()=>{const a=typeof navigator<"u"&&typeof navigator.onLine=="boolean"?navigator.onLine:!0,[s,i]=(0,e.useState)(a),o=()=>i(!0),r=()=>i(!1);return(0,e.useEffect)(()=>(window.addEventListener("online",o),window.addEventListener("offline",r),()=>{window.removeEventListener("online",o),window.removeEventListener("offline",r)}),[]),s};var be=n(36364),C=n(50703),Re=n(12997),Y=n(48157);const Ce=()=>{const{formatMessage:a}=(0,v.Z)(),{trackUsage:s}=(0,g.useTracking)();return e.createElement("a",{href:"https://strapi.canny.io/plugin-requests",target:"_blank",rel:"noopener noreferrer nofollow",style:{textDecoration:"none"},onClick:()=>s("didMissMarketplacePlugin")},e.createElement(g.ContentBox,{title:a({id:"admin.pages.MarketPlacePage.missingPlugin.title",defaultMessage:"Documentation"}),subtitle:a({id:"admin.pages.MarketPlacePage.missingPlugin.description",defaultMessage:"Tell us what plugin you are looking for and we'll let our community plugin developers know in case they are in search for inspiration!"}),icon:e.createElement(Re.Z,null),iconBackground:"alternative100",endAction:e.createElement(C.J,{as:Y.Z,color:"neutral600",width:3,height:3,marginLeft:2})}))};var Se=n(35157),j=n(48102),Te=n(95066),xe=n(57121),Ne=n(70627),t=n.n(Ne),S=n(72450),Ze=n(8990),K=n(5627),X=n(78955);const _=({message:a,value:s,onChange:i,possibleFilters:o,onClear:r,customizeContent:d})=>{const l=(c,p)=>`${c} (${p})`;return e.createElement(K.P,{"data-testid":`${a}-button`,label:a,placeholder:a,size:"M",onChange:i,onClear:r,value:s,customizeContent:d,multi:!0},Object.entries(o).map(([c,p])=>e.createElement(X.W,{"data-testid":`${c}-${p}`,key:c,value:c},l(c,p))))};_.propTypes={message:t().string.isRequired,value:t().array.isRequired,onChange:t().func.isRequired,possibleFilters:t().object.isRequired,onClear:t().func.isRequired,customizeContent:t().func.isRequired};const ee=_,te=({source:a,onToggle:s,query:i,npmPackageType:o,possibleCategories:r,possibleCollections:d,handleSelectChange:l,handleSelectClear:c})=>{const{formatMessage:p}=(0,v.Z)();return e.createElement(Ze.J2,{source:a,onDismiss:s,padding:3,spacing:4},e.createElement(Ie,{direction:"column",alignItems:"stretch",gap:1},e.createElement(ee,{message:p({id:"admin.pages.MarketPlacePage.filters.collections",defaultMessage:"Collections"}),value:i?.collections||[],onChange:m=>{l({collections:m})},onClear:()=>c("collections"),possibleFilters:d,customizeContent:m=>p({id:"admin.pages.MarketPlacePage.filters.collectionsSelected",defaultMessage:"{count, plural, =0 {No collections} one {# collection} other {# collections}} selected"},{count:m.length})}),o==="plugin"&&e.createElement(ee,{message:p({id:"admin.pages.MarketPlacePage.filters.categories",defaultMessage:"Categories"}),value:i?.categories||[],onChange:m=>{l({categories:m})},onClear:()=>c("categories"),possibleFilters:r,customizeContent:m=>p({id:"admin.pages.MarketPlacePage.filters.categoriesSelected",defaultMessage:"{count, plural, =0 {No categories} one {# category} other {# categories}} selected"},{count:m.length}),name:"categories"})))};te.propTypes={onToggle:t().func.isRequired,source:t().shape({current:t().instanceOf(Element)}).isRequired,query:t().object.isRequired,npmPackageType:t().oneOf(["plugin","provider"]).isRequired,possibleCollections:t().object.isRequired,possibleCategories:t().object.isRequired,handleSelectChange:t().func.isRequired,handleSelectClear:t().func.isRequired};const De=te,Ie=(0,S.default)(P.k)`
  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,w=({name:a,handleRemove:s})=>e.createElement(f.x,{padding:1},e.createElement(Se.V,{icon:e.createElement(Te.Z,null),onClick:s},a)),Le=(0,S.default)(j.z)`
  height: ${({theme:a})=>a.sizes.input.S};
`,ae=({possibleCollections:a,possibleCategories:s,npmPackageType:i,query:o,handleSelectClear:r,handleSelectChange:d})=>{const[l,c]=(0,e.useState)(!1),p=(0,e.useRef)(),{formatMessage:m}=(0,v.Z)(),h=()=>c(u=>!u),E=(u,y)=>{const b={[y]:o[y].filter(T=>T!==u)};d(b)};return e.createElement(e.Fragment,null,e.createElement(f.x,{paddingTop:1,paddingBottom:1},e.createElement(Le,{variant:"tertiary",ref:p,startIcon:e.createElement(xe.Z,null),onClick:h,size:"S"},m({id:"app.utils.filters",defaultMessage:"Filters"})),l&&e.createElement(De,{onToggle:h,source:p,query:o,handleSelectClear:r,handleSelectChange:d,possibleCollections:a,possibleCategories:s,npmPackageType:i})),o.collections?.map(u=>e.createElement(w,{name:u,key:u,handleRemove:()=>E(u,"collections")})),i==="plugin"&&o.categories?.map(u=>e.createElement(w,{name:u,key:u,handleRemove:()=>E(u,"categories")})))};w.propTypes={name:t().string.isRequired,handleRemove:t().func.isRequired},ae.propTypes={npmPackageType:t().oneOf(["plugin","provider"]).isRequired,possibleCollections:t().object.isRequired,possibleCategories:t().object.isRequired,query:t().object.isRequired,handleSelectChange:t().func.isRequired,handleSelectClear:t().func.isRequired};const Oe=ae;var $e=n(77970),Be=n(23298),Fe=n(74577),k=n(21395),Ae=n(52448),Ve=n(87393);const je=(0,S.default)(f.x)`
  background: ${({theme:a})=>`linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${a.colors.neutral150} 100%)`};
  opacity: 0.33;
`,we=()=>e.createElement(Ve.M,null,Array(12).fill(null).map((a,s)=>e.createElement(je,{key:`empty-plugin-card-${s}`,height:"234px",hasRadius:!0}))),ne=({content:a})=>e.createElement(f.x,{position:"relative"},e.createElement(we,null),e.createElement(f.x,{position:"absolute",top:11,width:"100%"},e.createElement(P.k,{alignItems:"center",justifyContent:"center",direction:"column"},e.createElement(C.J,{as:Ae.Z,color:"",width:"160px",height:"88px"}),e.createElement(f.x,{paddingTop:6},e.createElement(k.Z,{variant:"delta",as:"p",textColor:"neutral600"},a)))));ne.propTypes={content:t().string.isRequired};const ze=ne;var z=n(2981),se=n(37370),Ue=n(15398),Ge=n(6699),Qe=n.n(Ge),He=n(61473),qe=n(59082),re=n(78031),Je=n(96487),ie=n.n(Je);const L=({description:a,installMessage:s,disabled:i,handleCopy:o,pluginName:r})=>e.createElement(z.u,{"data-testid":`tooltip-${r}`,description:a},e.createElement(f.x,null,e.createElement(j.z,{size:"S",startIcon:e.createElement(re.Z,null),variant:"secondary",disabled:i,onClick:o},s))),U=({strapiPeerDepVersion:a,strapiAppVersion:s,handleCopy:i,pluginName:o})=>{const{formatMessage:r}=(0,v.Z)(),d=ie().validRange(a),l=ie().satisfies(s,d),c=r({id:"admin.pages.MarketPlacePage.plugin.copy",defaultMessage:"Copy install command"});if(s){if(!d)return e.createElement(L,{installMessage:c,pluginName:o,description:r({id:"admin.pages.MarketPlacePage.plugin.version.null",defaultMessage:'Unable to verify compatibility with your Strapi version: "{strapiAppVersion}"'},{strapiAppVersion:s}),handleCopy:i});if(!l)return e.createElement(L,{installMessage:c,pluginName:o,description:r({id:"admin.pages.MarketPlacePage.plugin.version",defaultMessage:'Update your Strapi version: "{strapiAppVersion}" to: "{versionRange}"'},{strapiAppVersion:s,versionRange:d}),disabled:!0})}return e.createElement(j.z,{size:"S",startIcon:e.createElement(re.Z,null),variant:"secondary",onClick:i},c)};L.defaultProps={disabled:!1,handleCopy:null},L.propTypes={description:t().string.isRequired,installMessage:t().string.isRequired,disabled:t().bool,handleCopy:t().func,pluginName:t().string.isRequired},U.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},U.propTypes={strapiAppVersion:t().string,strapiPeerDepVersion:t().string,handleCopy:t().func.isRequired,pluginName:t().string.isRequired};const We=U,G=({isInstalled:a,isInDevelopmentMode:s,commandToCopy:i,strapiAppVersion:o,strapiPeerDepVersion:r,pluginName:d})=>{const l=(0,g.useNotification)(),{formatMessage:c}=(0,v.Z)(),{trackUsage:p}=(0,g.useTracking)(),{copy:m}=(0,g.useClipboard)(),h=async()=>{await m(i)&&(p("willInstallPlugin"),l({type:"success",message:{id:"admin.pages.MarketPlacePage.plugin.copy.success"}}))};return a?e.createElement(f.x,{paddingLeft:4},e.createElement(C.J,{as:qe.Z,marginRight:2,width:12,height:12,color:"success600"}),e.createElement(k.Z,{variant:"omega",textColor:"success600",fontWeight:"bold"},c({id:"admin.pages.MarketPlacePage.plugin.installed",defaultMessage:"Installed"}))):s?e.createElement(We,{strapiAppVersion:o,strapiPeerDepVersion:r,handleCopy:h,pluginName:d}):null};G.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},G.propTypes={isInstalled:t().bool.isRequired,isInDevelopmentMode:t().bool.isRequired,commandToCopy:t().string.isRequired,strapiAppVersion:t().string,strapiPeerDepVersion:t().string,pluginName:t().string.isRequired};const Ye=G;var Ke=n(84366),Xe=n(66770),_e=n(39142),et=n(33766);const tt=(0,S.default)(Ke.i)`
  width: ${(0,g.pxToRem)(12)};
  transform: rotate(90deg);
`,Q=({githubStars:a,npmDownloads:s,npmPackageType:i})=>{const{formatMessage:o}=(0,v.Z)();return e.createElement(P.k,{gap:1},!!a&&e.createElement(e.Fragment,null,e.createElement(C.J,{as:Xe.Z,height:(0,g.pxToRem)(12),width:(0,g.pxToRem)(12),"aria-hidden":!0}),e.createElement(C.J,{as:_e.Z,height:(0,g.pxToRem)(12),width:(0,g.pxToRem)(12),color:"warning500","aria-hidden":!0}),e.createElement("p",{"aria-label":o({id:`admin.pages.MarketPlacePage.${i}.githubStars`,defaultMessage:"This {package} was starred {starsCount} on GitHub"},{starsCount:a,package:i})},e.createElement(k.Z,{variant:"pi",textColor:"neutral800"},a)),e.createElement(tt,{unsetMargin:!1,background:"neutral200"})),e.createElement(C.J,{as:et.Z,height:(0,g.pxToRem)(12),width:(0,g.pxToRem)(12),"aria-hidden":!0}),e.createElement("p",{"aria-label":o({id:`admin.pages.MarketPlacePage.${i}.downloads`,defaultMessage:"This {package} has {downloadsCount} weekly downloads"},{downloadsCount:s,package:i})},e.createElement(k.Z,{variant:"pi",textColor:"neutral800"},s)))};Q.defaultProps={githubStars:0,npmDownloads:0},Q.propTypes={githubStars:t().number,npmDownloads:t().number,npmPackageType:t().string.isRequired};const at=Q,nt=(0,S.default)(k.Z)`
  /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */
  overflow: hidden;
`,H=({npmPackage:a,isInstalled:s,useYarn:i,isInDevelopmentMode:o,npmPackageType:r,strapiAppVersion:d})=>{const{attributes:l}=a,{formatMessage:c}=(0,v.Z)(),{trackUsage:p}=(0,g.useTracking)(),m=i?`yarn add ${l.npmPackageName}`:`npm install ${l.npmPackageName}`,h=c({id:"admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi",defaultMessage:"Made by Strapi"}),E=`https://market.strapi.io/${Qe().plural(r)}/${l.slug}`;return e.createElement(P.k,{direction:"column",justifyContent:"space-between",paddingTop:4,paddingRight:4,paddingBottom:4,paddingLeft:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",alignItems:"normal","data-testid":"npm-package-card"},e.createElement(f.x,null,e.createElement(P.k,{direction:"row",justifyContent:"space-between",alignItems:"flex-start"},e.createElement(f.x,{as:"img",src:l.logo.url,alt:`${l.name} logo`,hasRadius:!0,width:11,height:11}),e.createElement(at,{githubStars:l.githubStars,npmDownloads:l.npmDownloads,npmPackageType:r})),e.createElement(f.x,{paddingTop:4},e.createElement(k.Z,{as:"h3",variant:"delta"},e.createElement(P.k,{alignItems:"center"},l.name,l.validated&&!l.madeByStrapi&&e.createElement(z.u,{description:c({id:"admin.pages.MarketPlacePage.plugin.tooltip.verified",defaultMessage:"Plugin verified by Strapi"})},e.createElement(P.k,null,e.createElement(C.J,{as:Ue.Z,marginLeft:2,color:"success600"}))),l.madeByStrapi&&e.createElement(z.u,{description:h},e.createElement(P.k,null,e.createElement(f.x,{as:"img",src:He,alt:h,marginLeft:1,width:6,height:"auto"})))))),e.createElement(f.x,{paddingTop:2},e.createElement(nt,{as:"p",variant:"omega",textColor:"neutral600"},l.description))),e.createElement(P.k,{gap:2,style:{alignSelf:"flex-end"},paddingTop:6},e.createElement(se.Q,{size:"S",href:E,isExternal:!0,endIcon:e.createElement(Y.Z,null),"aria-label":c({id:"admin.pages.MarketPlacePage.plugin.info.label",defaultMessage:"Learn more about {pluginName}"},{pluginName:l.name}),variant:"tertiary",onClick:()=>p("didPluginLearnMore")},c({id:"admin.pages.MarketPlacePage.plugin.info.text",defaultMessage:"More"})),e.createElement(Ye,{isInstalled:s,isInDevelopmentMode:o,commandToCopy:m,strapiAppVersion:d,strapiPeerDepVersion:l.strapiVersion,pluginName:l.name})))};H.defaultProps={isInDevelopmentMode:!1,strapiAppVersion:null},H.propTypes={npmPackage:t().shape({id:t().string.isRequired,attributes:t().shape({name:t().string.isRequired,description:t().string.isRequired,slug:t().string.isRequired,npmPackageName:t().string.isRequired,npmPackageUrl:t().string.isRequired,repositoryUrl:t().string.isRequired,logo:t().object.isRequired,developerName:t().string.isRequired,validated:t().bool.isRequired,madeByStrapi:t().bool.isRequired,strapiCompatibility:t().oneOf(["v3","v4"]),strapiVersion:t().string,githubStars:t().number,npmDownloads:t().number}).isRequired}).isRequired,isInstalled:t().bool.isRequired,useYarn:t().bool.isRequired,isInDevelopmentMode:t().bool,npmPackageType:t().string.isRequired,strapiAppVersion:t().string};const st=H,q=({status:a,npmPackages:s,installedPackageNames:i,useYarn:o,isInDevelopmentMode:r,npmPackageType:d,strapiAppVersion:l,debouncedSearch:c})=>{const{formatMessage:p}=(0,v.Z)();if(a==="error")return e.createElement(P.k,{paddingTop:8},e.createElement(g.AnErrorOccurred,null));if(a==="loading")return e.createElement(P.k,{justifyContent:"center",paddingTop:8},e.createElement($e.a,null,"Loading content..."));const m=p({id:"admin.pages.MarketPlacePage.search.empty",defaultMessage:'No result for "{target}"'},{target:c});return s.length===0?e.createElement(ze,{content:m}):e.createElement(Be.r,{gap:4},s.map(h=>e.createElement(Fe.P,{col:4,s:6,xs:12,style:{height:"100%"},key:h.id},e.createElement(st,{npmPackage:h,isInstalled:i.includes(h.attributes.npmPackageName),useYarn:o,isInDevelopmentMode:r,npmPackageType:d,strapiAppVersion:l}))))};q.defaultProps={npmPackages:[],installedPackageNames:[],strapiAppVersion:null,debouncedSearch:""},q.propTypes={status:t().string.isRequired,npmPackages:t().array,installedPackageNames:t().arrayOf(t().string),useYarn:t().bool.isRequired,isInDevelopmentMode:t().bool.isRequired,npmPackageType:t().string.isRequired,strapiAppVersion:t().string,debouncedSearch:t().string};const oe=q,le=({pagination:a})=>e.createElement(f.x,{paddingTop:4},e.createElement(P.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(g.PageSizeURLQuery,{options:["12","24","50","100"],defaultValue:"24"}),e.createElement(g.PaginationURLQuery,{pagination:a})));le.propTypes={pagination:t().shape({page:t().number.isRequired,pageCount:t().number.isRequired,pageSize:t().number.isRequired,total:t().number.isRequired}).isRequired};const rt=le,it=n.p+"9d5d788027e86620c234.svg";var ot=n(27875),lt=n(70521);const J=({isOnline:a,npmPackageType:s})=>{const{formatMessage:i}=(0,v.Z)(),{trackUsage:o}=(0,g.useTracking)(),r=s==="provider"?"didSubmitProvider":"didSubmitPlugin";return e.createElement(ot.T,{title:i({id:"global.marketplace",defaultMessage:"Marketplace"}),subtitle:i({id:"admin.pages.MarketPlacePage.subtitle",defaultMessage:"Get more out of Strapi"}),primaryAction:a&&e.createElement(se.Q,{startIcon:e.createElement(lt.Z,null),variant:"tertiary",href:`https://market.strapi.io/submit-${s}`,onClick:()=>o(r),isExternal:!0},i({id:`admin.pages.MarketPlacePage.submit.${s}.link`,defaultMessage:`Submit ${s}`}))})},ce=J;J.defaultProps={npmPackageType:"plugin"},J.propTypes={isOnline:t().bool.isRequired,npmPackageType:t().string};const ct=()=>{const{formatMessage:a}=(0,v.Z)();return e.createElement(A.A,null,e.createElement(D.o,null,e.createElement(ce,{isOnline:!1}),e.createElement(P.k,{width:"100%",direction:"column",alignItems:"center",justifyContent:"center",paddingTop:(0,g.pxToRem)(120)},e.createElement(f.x,{paddingBottom:2},e.createElement(k.Z,{textColor:"neutral700",variant:"alpha"},a({id:"admin.pages.MarketPlacePage.offline.title",defaultMessage:"You are offline"}))),e.createElement(f.x,{paddingBottom:6},e.createElement(k.Z,{textColor:"neutral700",variant:"epsilon"},a({id:"admin.pages.MarketPlacePage.offline.subtitle",defaultMessage:"You need to be connected to the Internet to access Strapi Market."}))),e.createElement("img",{src:it,alt:"offline",style:{width:"88px",height:"88px"}}))))},dt=(0,S.default)(f.x)`
  font-weight: ${({theme:a})=>a.fontWeights.semiBold};

  span {
    font-size: ${({theme:a})=>a.fontSizes[1]};
  }

  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,de=({sortQuery:a,handleSelectChange:s})=>{const{formatMessage:i}=(0,v.Z)(),o={"name:asc":{selected:{id:"admin.pages.MarketPlacePage.sort.alphabetical.selected",defaultMessage:"Sort by alphabetical order"},option:{id:"admin.pages.MarketPlacePage.sort.alphabetical",defaultMessage:"Alphabetical order"}},"submissionDate:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.newest.selected",defaultMessage:"Sort by newest"},option:{id:"admin.pages.MarketPlacePage.sort.newest",defaultMessage:"Newest"}},"githubStars:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.githubStars.selected",defaultMessage:"Sort by GitHub stars"},option:{id:"admin.pages.MarketPlacePage.sort.githubStars",defaultMessage:"Number of GitHub stars"}},"npmDownloads:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.npmDownloads.selected",defaultMessage:"Sort by npm downloads"},option:{id:"admin.pages.MarketPlacePage.sort.npmDownloads",defaultMessage:"Number of downloads"}}};return e.createElement(dt,null,e.createElement(K.P,{size:"S",id:"sort-by-select",value:a,customizeContent:()=>i(o[a].selected),onChange:r=>{s({sort:r})},label:i({id:"admin.pages.MarketPlacePage.sort.label",defaultMessage:"Sort by"})},Object.entries(o).map(([r,d])=>e.createElement(X.W,{key:r,value:r},i(d.option)))))};de.propTypes={sortQuery:t().string.isRequired,handleSelectChange:t().func.isRequired};const gt=de;var ut=n(51926),pt=n(29206),O=n.n(pt),ge=n(40464);const ue="https://market-api.strapi.io",mt=(a,s={})=>{const i=(0,g.useNotification)();return(0,ge.useQuery)(["marketplace","plugins",s],async()=>{try{const o=O().stringify(O().parse(s)),r=await fetch(`${ue}/plugins?${o}`);if(!r.ok)throw new Error("Failed to fetch marketplace plugins.");return await r.json()}catch{}return null},{onSuccess(){a&&a()},onError(){i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},ft=(a,s={})=>{const i=(0,g.useNotification)();return(0,ge.useQuery)(["marketplace","providers",s],async()=>{try{const o=O().stringify(O().parse(s)),r=await fetch(`${ue}/providers?${o}`);if(!r.ok)throw new Error("Failed to fetch marketplace providers.");return await r.json()}catch{}return null},{onSuccess(){a&&a()},onError(){i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};function ht({npmPackageType:a,debouncedSearch:s,query:i,tabQuery:o}){const{notifyStatus:r}=(0,ut.G)(),{formatMessage:d}=(0,v.Z)(),l=d({id:"global.marketplace",defaultMessage:"Marketplace"}),c=()=>{r(d({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:l}))},p={page:i?.page||1,pageSize:i?.pageSize||24},{data:m,status:h}=mt(c,{...o.plugin,pagination:p,search:s}),{data:E,status:u}=ft(c,{...o.provider,pagination:p,search:s}),y=a==="plugin"?m:E,b=a==="plugin"?h:u,[T,$]=(0,e.useState)({}),[B,F]=(0,e.useState)({});(0,e.useEffect)(()=>{b==="success"&&$(y.meta.collections),h==="success"&&F(m.meta.categories)},[m?.meta.categories,h,y?.meta.collections,b]);const{pagination:W}=b==="success"?y.meta:{};return{pluginsResponse:m,providersResponse:E,pluginsStatus:h,providersStatus:u,possibleCollections:T,possibleCategories:B,pagination:W}}const Pt=ht,pe=()=>{const{formatMessage:a}=(0,v.Z)(),{trackUsage:s}=(0,g.useTracking)(),i=(0,e.useRef)(s),o=(0,g.useNotification)(),[{query:r},d]=(0,g.useQueryParams)(),l=(0,Me.Z)(r?.search,500)||"",{autoReload:c,dependencies:p,useYarn:m,strapiVersion:h}=(0,g.useAppInfo)(),E=ke(),u=r?.npmPackageType||"plugin",[y,b]=(0,e.useState)({plugin:u==="plugin"?{...r}:{},provider:u==="provider"?{...r}:{}});(0,g.useFocusWhenNavigate)(),(0,e.useEffect)(()=>{i.current("didGoToMarketplace")},[]),(0,e.useEffect)(()=>{c||o({type:"info",message:{id:"admin.pages.MarketPlacePage.production",defaultMessage:"Manage plugins from the development environment"}})},[o,c]);const{pluginsResponse:T,providersResponse:$,pluginsStatus:B,providersStatus:F,possibleCollections:W,possibleCategories:Et,pagination:me}=Pt({npmPackageType:u,debouncedSearch:l,query:r,tabQuery:y});if(!E)return e.createElement(ct,null);const yt=R=>{const M=R===0?"plugin":"provider",kt=y[M]&&Object.keys(y[M]).length;d(kt?{...y[M],search:r?.search||"",npmPackageType:M,page:1}:{npmPackageType:M,collections:[],categories:[],sort:"name:asc",page:1,search:r?.search||""})},fe=R=>{d({...R,page:1}),b(M=>({...M,[u]:{...M[u],...R}}))},Mt=R=>{d({[R]:[],page:null},"remove"),b(M=>({...M,[u]:{}}))},he=Object.keys(p);return e.createElement(A.A,null,e.createElement(D.o,null,e.createElement(Ee.q,{title:a({id:"admin.pages.MarketPlacePage.helmet",defaultMessage:"Marketplace - Plugins"})}),e.createElement(ce,{isOnline:E,npmPackageType:u}),e.createElement(x.D,null,e.createElement(I.v,{label:a({id:"admin.pages.MarketPlacePage.tab-group.label",defaultMessage:"Plugins and Providers for Strapi"}),id:"tabs",variant:"simple",initialSelectedTabIndex:["plugin","provider"].indexOf(u),onTabChange:yt},e.createElement(P.k,{justifyContent:"space-between",paddingBottom:4},e.createElement(N.m,null,e.createElement(N.O,null,a({id:"admin.pages.MarketPlacePage.plugins",defaultMessage:"Plugins"})," ",B==="success"?`(${T.meta.pagination.total})`:"..."),e.createElement(N.O,null,a({id:"admin.pages.MarketPlacePage.providers",defaultMessage:"Providers"})," ",F==="success"?`(${$.meta.pagination.total})`:"...")),e.createElement(f.x,{width:"25%"},e.createElement(ve.w,{name:"searchbar",onClear:()=>d({search:"",page:1}),value:r?.search,onChange:R=>d({search:R.target.value,page:1}),clearLabel:a({id:"admin.pages.MarketPlacePage.search.clear",defaultMessage:"Clear the search"}),placeholder:a({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})},a({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})))),e.createElement(P.k,{paddingBottom:4,gap:2},e.createElement(gt,{sortQuery:r?.sort||"name:asc",handleSelectChange:fe}),e.createElement(Oe,{npmPackageType:u,possibleCollections:W,possibleCategories:Et,query:r||{},handleSelectChange:fe,handleSelectClear:Mt})),e.createElement(V.n,null,e.createElement(V.x,null,e.createElement(oe,{npmPackages:T?.data,status:B,installedPackageNames:he,useYarn:m,isInDevelopmentMode:c,npmPackageType:"plugin",strapiAppVersion:h,debouncedSearch:l})),e.createElement(V.x,null,e.createElement(oe,{npmPackages:$?.data,status:F,installedPackageNames:he,useYarn:m,isInDevelopmentMode:c,npmPackageType:"provider",debouncedSearch:l})))),me&&e.createElement(rt,{pagination:me}),e.createElement(f.x,{paddingTop:8},e.createElement(Ce,null)))))},vt=()=>{const a=(0,ye.v9)(be._);return e.createElement(g.CheckPagePermissions,{permissions:a.marketplace.main},e.createElement(pe,null))}}}]);

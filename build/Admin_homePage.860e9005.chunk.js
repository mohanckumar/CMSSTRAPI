"use strict";(self.webpackChunkcmssample=self.webpackChunkcmssample||[]).push([[3981],{96753:(Ze,H,n)=>{n.r(H),n.d(H,{HomePageCE:()=>R,default:()=>He});var e=n(27279),d=n(93415),G=n(27997),I=n(9941),C=n(23298),y=n(74577),l=n(57537),j=n(364),W=n(47415),D=n(51447),i=n(72450),c=n(10701),u=n(21395),L=n(48102),P=n(53274),E=n(61020),O=n(99571),F=n(70627),r=n.n(F),p=n(16334),A=n(43234),$=n(2364);const S=({type:t,title:a,number:o,content:s,hasLine:m})=>{const{formatMessage:h}=(0,E.Z)();return e.createElement(d.x,null,e.createElement(c.k,null,e.createElement(d.x,{minWidth:(0,l.pxToRem)(30),marginRight:5},e.createElement($.Z,{type:t,number:o})),e.createElement(u.Z,{variant:"delta",as:"h3"},h(a))),e.createElement(c.k,{alignItems:"flex-start"},e.createElement(c.k,{justifyContent:"center",minWidth:(0,l.pxToRem)(30),marginBottom:3,marginTop:3,marginRight:5},m&&e.createElement(A.Z,{type:t,minHeight:t===p.lW?(0,l.pxToRem)(85):(0,l.pxToRem)(65)})),e.createElement(d.x,{marginTop:2},t===p.lW&&s)))};S.defaultProps={content:void 0,number:void 0,type:p.VM,hasLine:!0},S.propTypes={content:r().node,number:r().number,title:r().shape({id:r().string,defaultMessage:r().string}).isRequired,type:r().oneOf([p.lW,p.hx,p.VM]),hasLine:r().bool};const z=S,V=(t,a)=>t===-1||a<t?p.hx:a>t?p.VM:p.lW,b=({sections:t,currentSectionKey:a})=>{const o=t.findIndex(s=>s.key===a);return e.createElement(d.x,null,t.map((s,m)=>e.createElement(z,{key:s.key,title:s.title,content:s.content,number:m+1,type:V(o,m),hasLine:m!==t.length-1})))};b.defaultProps={currentSectionKey:void 0},b.propTypes={sections:r().arrayOf(r().shape({key:r().string.isRequired,title:r().shape({id:r().string,defaultMessage:r().string}).isRequired,content:r().node})).isRequired,currentSectionKey:r().string};const K=b,U=()=>{const{guidedTourState:t,setSkipped:a}=(0,l.useGuidedTour)(),{formatMessage:o}=(0,E.Z)(),{trackUsage:s}=(0,l.useTracking)(),m=Object.entries(O.Z).map(([g,f])=>({key:g,title:f.home.title,content:e.createElement(l.LinkButton,{onClick:()=>s(f.home.trackingEvent),to:f.home.cta.target,endIcon:e.createElement(P.Z,null)},o(f.home.cta.title))})),B=m.map(g=>({isDone:Object.entries(t[g.key]).every(([,f])=>f),...g})).find(g=>!g.isDone)?.key,x=()=>{a(!0),s("didSkipGuidedtour")};return e.createElement(d.x,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},e.createElement(c.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(u.Z,{variant:"beta",as:"h2"},o({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),e.createElement(K,{sections:m,currentSectionKey:B})),e.createElement(c.k,{justifyContent:"flex-end"},e.createElement(L.z,{variant:"tertiary",onClick:x},o({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))},J=t=>Object.entries(t).every(([,a])=>Object.entries(a).every(([,o])=>o));var N=n(92686),Q=n(80902);const Y=n.p+"7e9af4fb7e723fcebf1f.svg";var w=n(87050),X=n(23227),q=n(75682),_=n(96700);const ee=n.p+"27d16aefee06412db90a.png",te=n.p+"bb4d0d527bdfb161bc5a.svg",ne=n.p+"bb3108f7fd1e6179bde1.svg",oe=i.default.a`
  text-decoration: none;
`,ae=(0,i.default)(d.x)`
  background-image: url(${({backgroundImage:t})=>t});
`,le=(0,i.default)(c.k)`
  background: rgba(255, 255, 255, 0.3);
`,re=()=>{const{formatMessage:t}=(0,E.Z)(),{trackUsage:a}=(0,l.useTracking)();return e.createElement(oe,{href:"https://cloud.strapi.io",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>{a("didClickOnTryStrapiCloudSection")}},e.createElement(c.k,{shadow:"tableShadow",hasRadius:!0,padding:6,background:"neutral0",position:"relative",gap:6},e.createElement(ae,{backgroundImage:ee,hasRadius:!0,padding:3},e.createElement(le,{width:(0,l.pxToRem)(32),height:(0,l.pxToRem)(32),justifyContent:"center",hasRadius:!0,alignItems:"center"},e.createElement("img",{src:ne,alt:t({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"})}))),e.createElement(c.k,{gap:1,direction:"column",alignItems:"start"},e.createElement(c.k,null,e.createElement(u.Z,{fontWeight:"semiBold",variant:"pi"},t({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"}))),e.createElement(u.Z,{textColor:"neutral600"},t({id:"app.components.BlockLink.cloud.content",defaultMessage:"A fully composable, and collaborative platform to boost your team velocity."})),e.createElement(d.x,{src:te,position:"absolute",top:0,right:0,as:"img"}))))},v=i.default.a`
  text-decoration: none;
`,se=()=>{const{formatMessage:t}=(0,E.Z)(),{trackUsage:a}=(0,l.useTracking)(),o=s=>{a(s)};return e.createElement(c.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(re,null),e.createElement(v,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonReadTheDocumentationSection")},e.createElement(l.ContentBox,{title:t({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:t({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:e.createElement(w.Z,null),iconBackground:"primary100"})),e.createElement(v,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonCodeExampleSection")},e.createElement(l.ContentBox,{title:t({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:t({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:e.createElement(X.Z,null),iconBackground:"warning100"})),e.createElement(v,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonTutorialSection")},e.createElement(l.ContentBox,{title:t({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:t({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:e.createElement(q.Z,null),iconBackground:"secondary100"})),e.createElement(v,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonBlogSection")},e.createElement(l.ContentBox,{title:t({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:t({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:e.createElement(_.Z,null),iconBackground:"alternative100"})))};var Z=n(79213);const ie=(0,i.default)(u.Z)`
  word-break: break-word;
`,T=({hasCreatedContentType:t,onCreateCT:a})=>{const{formatMessage:o}=(0,E.Z)();return e.createElement("div",null,e.createElement(d.x,{paddingLeft:6,paddingBottom:10},e.createElement(c.k,{direction:"column",alignItems:"flex-start",gap:5},e.createElement(u.Z,{as:"h1",variant:"alpha"},o(t?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),e.createElement(ie,{textColor:"neutral600",variant:"epsilon"},o(t?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),t?e.createElement(Z.r,{isExternal:!0,href:"https://strapi.io/blog"},o({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):e.createElement(L.z,{size:"L",onClick:a,endIcon:e.createElement(P.Z,null)},o({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};T.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},T.propTypes={hasCreatedContentType:r().bool,onCreateCT:r().func};const ce=T;var de=n(37370),me=n(73352),pe=n(82063),ue=n(70525),ge=n(1072),fe=n(73354),he=n(66770),Ee=n(48157);const ke=(0,i.default)(me.Z)`
  path {
    fill: #7289da !important;
  }
`,ye=(0,i.default)(pe.Z)`
  > path:first-child {
    fill: #ff4500;
  }
`,M=(0,i.default)(ue.Z)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`,ve=(0,i.default)(ge.Z)`
  path {
    fill: #1da1f2 !important;
  }
`,Ce=(0,i.default)(fe.Z)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`,Se=[{name:{id:"app.components.HomePage.community.links.github",defaultMessage:"Github"},link:"https://github.com/strapi/strapi/",icon:e.createElement(he.Z,{fill:"#7289DA"}),alt:"github"},{name:{id:"app.components.HomePage.community.links.discord",defaultMessage:"Discord"},link:"https://discord.strapi.io/",icon:e.createElement(ke,null),alt:"discord"},{name:{id:"app.components.HomePage.community.links.reddit",defaultMessage:"Reddit"},link:"https://www.reddit.com/r/Strapi/",icon:e.createElement(ye,null),alt:"reddit"},{name:{id:"app.components.HomePage.community.links.twitter",defaultMessage:"Twitter"},link:"https://twitter.com/strapijs",icon:e.createElement(ve,null),alt:"twitter"},{name:{id:"app.components.HomePage.community.links.forum",defaultMessage:"Forum"},link:"https://forum.strapi.io",icon:e.createElement(Ce,null),alt:"forum"},{name:{id:"app.components.HomePage.community.links.blog",defaultMessage:"Blog"},link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:e.createElement(M,null),alt:"blog"},{name:{id:"app.components.HomePage.community.links.career",defaultMessage:"We are hiring!"},link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:e.createElement(M,null),alt:"career"}],be=(0,i.default)(de.Q)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:t})=>t.spaces[6]};
    height: ${({theme:t})=>t.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,Te=(0,i.default)(C.r)`
  row-gap: ${({theme:t})=>t.spaces[2]};
  column-gap: ${({theme:t})=>t.spaces[4]};
`,Me=()=>{const{formatMessage:t}=(0,E.Z)(),{communityEdition:a}=(0,l.useAppInfo)(),o=[...Se,{icon:e.createElement(M,null),link:a?"https://discord.strapi.io":"https://support.strapi.io/support/home",name:{id:"Settings.application.get-help",defaultMessage:"Get help"}}];return e.createElement(d.x,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},e.createElement(d.x,{paddingBottom:7},e.createElement(c.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(c.k,{direction:"column",alignItems:"stretch",gap:3},e.createElement(u.Z,{variant:"delta",as:"h2",id:"join-the-community"},t({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),e.createElement(u.Z,{textColor:"neutral600"},t({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),e.createElement(Z.r,{href:"https://feedback.strapi.io/",isExternal:!0,endIcon:e.createElement(Ee.Z,null)},t({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),e.createElement(Te,null,o.map(({icon:s,link:m,name:h})=>e.createElement(y.P,{col:6,s:12,key:h.id},e.createElement(be,{size:"L",startIcon:s,variant:"tertiary",href:m,isExternal:!0},t(h))))))},Be=(0,i.default)(d.x)`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: ${150/16}rem;
  }
`,R=()=>{const{collectionTypes:t,singleTypes:a,isLoading:o}=(0,N.G)(),{guidedTourState:s,isGuidedTourVisible:m,isSkipped:h}=(0,l.useGuidedTour)(),B=!J(s)&&m&&!h,{push:x}=(0,D.k6)(),g=k=>{k.preventDefault(),x("/plugins/content-type-builder/content-types/create-content-type")},f=(0,e.useMemo)(()=>{const k=Le=>Le.filter(Pe=>Pe.isDisplayed);return k(t).length>1||k(a).length>0},[t,a]);return o?e.createElement(l.LoadingIndicatorPage,null):e.createElement(G.A,null,e.createElement(W.Z,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},k=>e.createElement(j.q,{title:k[0]})),e.createElement(I.o,null,e.createElement(Be,null,e.createElement("img",{alt:"","aria-hidden":!0,src:Y})),e.createElement(d.x,{padding:10},e.createElement(C.r,null,e.createElement(y.P,{col:8,s:12},e.createElement(ce,{onCreateCT:g,hasCreatedContentType:f}))),e.createElement(C.r,{gap:6},e.createElement(y.P,{col:8,s:12},B?e.createElement(U,null):e.createElement(se,null)),e.createElement(y.P,{col:4,s:12},e.createElement(Me,null))))))};function xe(){const t=(0,Q.c)(R,async()=>(await n.e(8296).then(n.bind(n,66831))).HomePageEE);return t?e.createElement(t,null):null}const He=xe}}]);

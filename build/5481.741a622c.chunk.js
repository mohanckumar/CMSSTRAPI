"use strict";(self.webpackChunkcmssample=self.webpackChunkcmssample||[]).push([[5481],{99123:(g,i,t)=>{t.d(i,{a:()=>f});var n=t(27279),a=t(57537),o=t(69439),l=t.n(o),u=t(61020),d=t(51447),_=t(75021);const E="strapi-notification-seat-limit",L="https://cloud.strapi.io/profile/billing",r="https://strapi.io/billing/request-seats",f=()=>{const{formatMessage:e}=(0,u.Z)();let{license:m,isError:c,isLoading:D}=(0,_.q)();const T=(0,a.useNotification)(),{pathname:M}=(0,d.TH)(),{enforcementUserCount:C,permittedSeats:O,licenseLimitStatus:s,isHostedOnStrapiCloud:I}=m;(0,n.useEffect)(()=>{if(c||D)return;const A=!l()(O)&&!window.sessionStorage.getItem(`${E}-${M}`)&&(s==="AT_LIMIT"||s==="OVER_LIMIT");let P;s==="OVER_LIMIT"?P="warning":s==="AT_LIMIT"&&(P="softWarning"),A&&T({type:P,message:e({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:s}),title:e({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:s,enforcementUserCount:C,permittedSeats:O}),link:{url:I?L:r,label:e({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:I})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${E}-${M}`,!0)}})},[T,m,M,e,D,O,s,C,I,c])}},75021:(g,i,t)=>{t.d(i,{q:()=>l});var n=t(27279),a=t(57537),o=t(40464);function l({enabled:u}={enabled:!0}){const{get:d}=(0,a.useFetchClient)(),{data:_,isError:E,isLoading:L}=(0,o.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:e}}=await d("/admin/license-limit-information");return e},{enabled:u}),r=n.useMemo(()=>_??{},[_]),f=n.useCallback(e=>(r?.features??[]).find(c=>c.name===e)?.options??{},[r?.features]);return{license:r,getFeature:f,isError:E,isLoading:L}}},17403:(g,i,t)=>{t.r(i),t.d(i,{UserListPageEE:()=>l});var n=t(27279),a=t(61611),o=t(99123);function l(){return(0,o.a)(),n.createElement(a.W,null)}}}]);

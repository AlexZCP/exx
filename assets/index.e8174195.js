import{_ as p}from"./ProductElementTypesEdit.812a2dac.js";import{u as r,C as _,T as y,O as k,a as b,b as h,c as x}from"./index.7bb75959.js";import{bk as w,bp as g,j as v,k as C,l as T,D as I,e as l,q as O,t as u}from"./naive-ui.871da52f.js";function d(s=""){if(!s)return;const{copyToClipboard:c}=h(),o=w(),i=g(),{t}=r();return{copyId:{title:t("text.copy_ids"),icon:_,async:!1,callback:function(e){const n=Array.isArray(e)?e.join(","):e;return c(n),o.success("Choosed numbers: "+n),"Choosed numbers: "+n}},disableOff:{title:t("text.disable_off"),icon:y,async:!0,callback:function(e){e.forEach((n,f)=>{setTimeout(()=>{[2,3].includes(f)?o.error("Failed with: "+n):o.success("Changed successfully: "+n)},500)})}},editInBlankWindow:{title:t("text.edit_in_blank"),icon:k,async:!1,callback:function(e){if(!+e)return;const n=window.location.href+(window.location.href.endsWith("/")?"":"/");return window.open(n+e,"_blank"),!0}},removeItem:{title:t("text.remove_item"),icon:b,async:!0,callback:function(e){!+e||i.warning({title:t("text.remove_item"),content:t("text.are_you_sure"),positiveText:t("text.yes"),negativeText:t("text.cancel"),onPositiveClick:()=>(o.success(t("messages.successfuly_removed")),!0)})}}}[s]||{}}var m={};const j=u("h1",null,"Product element types",-1),A=u("hr",null,null,-1),B=v({setup(s){r(),x();const c=[{key:"id"},{key:"name"},{key:"note"},{key:"code",sorter:!1},{key:"state"}],o=[d("editInBlankWindow"),d("removeItem")];return(i,t)=>{const a=p,e=C("cp-datalist-offline");return T(),I("div",null,[j,A,l(e,{storeModuleName:"productElementTypes",columnsOptions:c,rowActions:o,rowContextActions:!0},{editPopup:O(()=>[l(a,{elementId:i.pathToMove},null,8,["elementId"])]),_:1})])}}});typeof m=="function"&&m(B);export{B as default};
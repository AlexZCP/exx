import{_ as p}from"./ProductElementTypesEdit.3be555af.js";import{u as r,C as _,T as y,O as k,a as b,b as h,c as x}from"./index.aeca5aec.js";import{bk as w,bp as v,j as g,k as C,v as T,l as I,e as l,x as O,t as u}from"./naive-ui.59c4dc36.js";function d(s=""){if(!s)return;const{copyToClipboard:c}=h(),o=w(),i=v(),{t}=r();return{copyId:{title:t("text.copy_ids"),icon:_,async:!1,callback:function(e){const n=Array.isArray(e)?e.join(","):e;return c(n),o.success("Choosed numbers: "+n),"Choosed numbers: "+n}},disableOff:{title:t("text.disable_off"),icon:y,async:!0,callback:function(e){e.forEach((n,f)=>{setTimeout(()=>{[2,3].includes(f)?o.error("Failed with: "+n):o.success("Changed successfully: "+n)},500)})}},editInBlankWindow:{title:t("text.edit_in_blank"),icon:k,async:!1,callback:function(e){if(!+e)return;const n=window.location.href+(window.location.href.endsWith("/")?"":"/");return window.open(n+e,"_blank"),!0}},removeItem:{title:t("text.remove_item"),icon:b,async:!0,callback:function(e){!+e||i.warning({title:t("text.remove_item"),content:t("text.are_you_sure"),positiveText:t("text.yes"),negativeText:t("text.cancel"),onPositiveClick:()=>(o.success(t("messages.successfuly_removed")),!0)})}}}[s]||{}}var m={};const j=u("h1",null,"Product element types",-1),A=u("hr",null,null,-1),B=g({setup(s){r(),x();const c=[{key:"id"},{key:"name"},{key:"note"},{key:"code",sorter:!1},{key:"state"}],o=[d("editInBlankWindow"),d("removeItem")];return(i,t)=>{const a=p,e=C("cp-datalist-offline");return T(),I("div",null,[j,A,l(e,{storeModuleName:"productElementTypes",columnsOptions:c,rowActions:o,rowContextActions:!0},{editPopup:O(()=>[l(a,{elementId:i.pathToMove},null,8,["elementId"])]),_:1})])}}});typeof m=="function"&&m(B);export{B as default};

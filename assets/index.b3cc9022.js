import{b as f}from"./index.f61c5f4a.js";import{j as g,r as u,k as c,l as r,D as k,e as z,m as d,E as s,t as i}from"./naive-ui.26efb6a0.js";var p={};const y=i("div",{class:"page__header"},[i("h1",null,"Price check - by product"),i("hr")],-1),x=g({setup(b){f();const n=u(null),a=u(98),t=u(106),l=u(null);return(h,o)=>{const v=c("cp-organization-chooser"),_=c("cp-product-chooser"),m=c("cp-product-options-chooser");return r(),k("div",null,[y,z(v,{addAccountSelect:"","organization-id":a.value,"onUpdate:organization-id":o[0]||(o[0]=e=>a.value=e),"account-id":t.value,"onUpdate:account-id":o[1]||(o[1]=e=>t.value=e)},null,8,["organization-id","account-id"]),a.value&&t.value?(r(),d(_,{key:0,"organization-id":a.value,"account-id":t.value,value:n.value,"onUpdate:value":o[2]||(o[2]=e=>n.value=e)},null,8,["organization-id","account-id","value"])):s("",!0),n.value?(r(),d(m,{key:1,"product-id":n.value,value:l.value,"onUpdate:value":o[3]||(o[3]=e=>l.value=e)},null,8,["product-id","value"])):s("",!0)])}}});typeof p=="function"&&p(x);export{x as default};

var O=Object.defineProperty,h=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var r=(o,e,t)=>e in o?O(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,a=(o,e)=>{for(var t in e||(e={}))w.call(e,t)&&r(o,t,e[t]);if(i)for(var t of i(e))C.call(e,t)&&r(o,t,e[t]);return o},c=(o,e)=>h(o,I(e));import{b as A,u as N,C as S,A as f,O as d,T as u}from"./index.f61c5f4a.js";import{u as l}from"./vtc-actions.c81cd914.js";import{j as x,bk as D,k as $,l as j,D as v,e as g,t as p}from"./naive-ui.26efb6a0.js";var y={};const B=p("h1",null,"Product elements",-1),E=p("hr",null,null,-1),J=x({setup(o){const{t:e}=A();N(),D();const t=[{title:"Edit",key:"edit",icon:f,callback:(n,s)=>{alert(`Row: ${JSON.stringify(s)}, ID: ${n}`)}},{title:"Open",key:"open",icon:d,callback:(n,s)=>{alert(`Row: ${JSON.stringify(s)}, ID: ${n}`)}},{label:"Delete",key:"delete",icon:u,callback:(n,s)=>{alert(`Row: ${JSON.stringify(s)}, ID: ${n}`)}}],m=[{key:"id",filter:"default",sorter:"default"},{title:"Name",key:"name",filter:"default",sorter:"default"},{key:"note",title:"Note",filter:!1},{key:"product_element_type",title:e("column.type"),filter:!1},{key:"state",title:"State",filter:!1}],k=[{title:"Show alert",icon:S,async:!1,callback:function(n){alert("Choosed numbers: "+n.join(", "))}},a({},l("disableOff")),c(a({},l("copyId")),{icon:f}),l("copyId"),l("copyId"),l("copyId")],_=[{title:"Show alert",icon:d,async:!1,callback:function(n){alert("Choosed numbers: "+n)}},l("copyId"),l("editInBlankWindow"),c(a({},l("copyId")),{icon:u})];return(n,s)=>{const b=$("cp-datalist-offline");return j(),v("div",null,[B,E,g(b,{storeModuleName:"productElements",columnsOptions:m,rowActions:_,rowCheckboxActions:k,disableAutoColumnDecorations:!1,rowContextActions:t})])}}});typeof y=="function"&&y(J);export{J as default};

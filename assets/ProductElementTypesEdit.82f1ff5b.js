import{j as k,r as F,d as f,w as I,k as d,l as r,D as p,e as u,q as c,t as n,v as N,x as g,u as s,F as j,G as q,m as v,N as M,P,h as T}from"./naive-ui.871da52f.js";import{c as U,u as x,H as G}from"./index.b04f394d.js";const V={class:"action cols"},W={class:"column col-6"},$={class:"form__buttons"},H={class:"column col-6 align-right"},O={class:"form__buttons"},Y={class:"cols"},L=k({props:{structure:null,storeModuleName:null,id:null},setup(_){const e=_,o=U(),{t:i}=x(),m=F("primary"),a=f({get(){return e.storeModuleName&&o.state[e.storeModuleName].currentElement?o.state[e.storeModuleName].currentElement:{}},set(l){m.value="warning"}}),C=f(()=>e.structure||Object.keys(a.value).map(l=>({key:l,label:i("label."+l),disabled:l==="id"}))||[]);f(()=>o.state[e.storeModuleName].options),e.storeModuleName&&e.id&&y(),I(()=>e.id,l=>y(l));function y(l=e.id){typeof o!==void 0&&o.dispatch(e.storeModuleName+"/getInfo",{queryParameters:{id:l}})}function w(){o.dispatch(e.storeModuleName+"/update",{queryParameters:a.value})}return(l,J)=>{const h=d("cp-button"),S=d("cp-icon"),E=d("cp-form-item"),B=d("cp-form");return r(),p("div",null,[u(B,{onSubmit:P(w,["prevent"])},{default:c(()=>[n("div",V,[n("div",W,[n("div",$,[u(h,{"attr-type":"submit",type:m.value},{default:c(()=>[N(g(s(i)("text.save")),1)]),_:1},8,["type"])])]),n("div",H,[n("div",O,[u(h,null,{icon:c(()=>[u(S,{color:"#000"},{default:c(()=>[u(s(G))]),_:1})]),default:c(()=>[N(" "+g(s(i)("text.help")),1)]),_:1})])])]),n("div",Y,[(r(!0),p(j,null,q(s(C),(t,D)=>(r(),p("div",{class:"column col-12 col-xs-6 col-md-4",key:D},[t.withoutItemCover?(r(),v(M(t.render?t.render:"cp-input"),{key:0,value:s(a)[t.key],"onUpdate:value":b=>s(a)[t.key]=b,disabled:t.disabled},null,8,["value","onUpdate:value","disabled"])):(r(),v(E,{key:1,label:t.label,path:t.key},{default:c(()=>[(r(),v(M(t.render?t.render:"cp-input"),{value:s(a)[t.key],"onUpdate:value":b=>s(a)[t.key]=b,disabled:t.disabled},null,8,["value","onUpdate:value","disabled"]))]),_:2},1032,["label","path"]))]))),128))])]),_:1},8,["onSubmit"])])}}}),z=n("h1",null,"Product element type - Edit",-1),A=n("hr",null,null,-1),R=k({props:{elementId:null},setup(_){const{t:e}=x(),o=[{key:"name",label:"Name",placeholder:"Enter name",validation:{required:!0,message:e("text.please_input_email"),trigger:"blur"}},{key:"note",label:"Note",validation:null},{key:"file_type_id",label:"File type",validation:null,render:T(d("cp-select"),{placeholder:"",filterable:!0,options:[{label:"Drive My Car",value:"1"},{label:"Norwegian Wood",value:"2"},{label:"You Won't See",value:3},{label:"Nowhere Man",value:5},{label:"Think For Yourself",value:6},{label:"The Word",value:7}]})},{key:"spec_group_id",label:"Group",validation:null}];return(i,m)=>{const a=L;return r(),p("div",null,[z,A,u(a,{storeModuleName:"productElementTypes",structure:o,id:_.elementId},null,8,["id"])])}}});export{R as _};
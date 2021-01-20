import{_ as e}from"./index.f935c75b.js";import{a as s}from"./index.d913b92a.js";import{d as o,h as t,i as l,o as i,j as a,w as n,k as r,n as p}from"./index.a1da5219.js";import{_ as d}from"./index.9ef011db.js";import{u as c}from"./useForm.cb0543c4.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.47fbc714.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.9c4a2f87.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.21ee0d6a.js";import"./useTimeout.fc5397ab.js";import"./useWindowSizeFn.9d6f6d4a.js";import"./FullscreenOutlined.f3bd68b1.js";import"./index.a45b2b74.js";import"./index.b062bb5c.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.75a30ff9.js";import"./domUtils.941be389.js";import"./index.7eaf0b8a.js";import"./RightOutlined.0ff6c3f8.js";import"./useScrollTo.d6397d0a.js";import"./animation.faff1b9d.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.40689edc.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var u=o({components:{BasicForm:e,CollapseContainer:s,PageWrapper:d},setup(){const{createMessage:e}=t(),[s,{setProps:o}]=c({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:s,schemas:m,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:o}}});const f={class:"mb-4"},b=p("更改labelWidth"),j=p("还原labelWidth"),P=p("更改Size"),x=p("还原Size"),C=p("禁用表单"),k=p("解除禁用"),h=p("紧凑表单"),_=p("还原正常间距"),g=p(" 操作按钮位置 "),S={class:"mb-4"},v=p(" 隐藏操作按钮 "),w=p(" 显示操作按钮 "),B=p(" 隐藏重置按钮 "),W=p(" 显示重置按钮 "),F=p(" 隐藏查询按钮 "),O=p(" 显示查询按钮 "),R=p(" 修改重置按钮 "),z=p(" 修改查询按钮 ");u.render=function(e,s,o,t,p,d){const c=l("a-button"),m=l("BasicForm"),u=l("CollapseContainer"),G=l("PageWrapper");return i(),a(G,{title:"UseForm操作示例"},{default:n((()=>[r("div",f,[r(c,{onClick:s[1]||(s[1]=s=>e.setProps({labelWidth:150})),class:"mr-2"},{default:n((()=>[b])),_:1}),r(c,{onClick:s[2]||(s[2]=s=>e.setProps({labelWidth:120})),class:"mr-2"},{default:n((()=>[j])),_:1}),r(c,{onClick:s[3]||(s[3]=s=>e.setProps({size:"large"})),class:"mr-2"},{default:n((()=>[P])),_:1}),r(c,{onClick:s[4]||(s[4]=s=>e.setProps({size:"default"})),class:"mr-2"},{default:n((()=>[x])),_:1}),r(c,{onClick:s[5]||(s[5]=s=>e.setProps({disabled:!0})),class:"mr-2"},{default:n((()=>[C])),_:1}),r(c,{onClick:s[6]||(s[6]=s=>e.setProps({disabled:!1})),class:"mr-2"},{default:n((()=>[k])),_:1}),r(c,{onClick:s[7]||(s[7]=s=>e.setProps({compact:!0})),class:"mr-2"},{default:n((()=>[h])),_:1}),r(c,{onClick:s[8]||(s[8]=s=>e.setProps({compact:!1})),class:"mr-2"},{default:n((()=>[_])),_:1}),r(c,{onClick:s[9]||(s[9]=s=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:n((()=>[g])),_:1})]),r("div",S,[r(c,{onClick:s[10]||(s[10]=s=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:n((()=>[v])),_:1}),r(c,{onClick:s[11]||(s[11]=s=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:n((()=>[w])),_:1}),r(c,{onClick:s[12]||(s[12]=s=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:n((()=>[B])),_:1}),r(c,{onClick:s[13]||(s[13]=s=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:n((()=>[W])),_:1}),r(c,{onClick:s[14]||(s[14]=s=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:n((()=>[F])),_:1}),r(c,{onClick:s[15]||(s[15]=s=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:n((()=>[O])),_:1}),r(c,{onClick:s[16]||(s[16]=s=>e.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:n((()=>[R])),_:1}),r(c,{onClick:s[17]||(s[17]=s=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:n((()=>[z])),_:1})]),r(u,{title:"useForm示例"},{default:n((()=>[r(m,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default u;
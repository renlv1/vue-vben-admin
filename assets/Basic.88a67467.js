import{_ as e}from"./index.00fa045a.js";import{getBasicColumns as i,getBasicData as t}from"./tableData.7aa0192c.js";import{_ as o}from"./index.9ef011db.js";import{d as a,r as s,i as r,o as n,j as d,k as p,w as c,n as m,m as l}from"./index.a1da5219.js";import"./index.47fbc714.js";import"./index.f935c75b.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.9c4a2f87.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.21ee0d6a.js";import"./useTimeout.fc5397ab.js";import"./useWindowSizeFn.9d6f6d4a.js";import"./index.d913b92a.js";import"./index.7eaf0b8a.js";import"./domUtils.941be389.js";import"./RightOutlined.0ff6c3f8.js";import"./useScrollTo.d6397d0a.js";import"./animation.faff1b9d.js";import"./FullscreenOutlined.f3bd68b1.js";import"./index.a45b2b74.js";import"./index.b062bb5c.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.75a30ff9.js";import"./index.27bb0464.js";import"./clickOutside.1bc34f02.js";import"./CheckOutlined.861808da.js";import"./useSortable.bb766778.js";import"./SettingOutlined.bc0a42f6.js";import"./useExpose.4342ccc1.js";import"./useForm.cb0543c4.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.40689edc.js";var u=a({components:{BasicTable:e,PageWrapper:o},setup(){const e=s(!1),o=s(!1),a=s(!0),r=s(!0),n=s(!1);return{columns:i(),data:t(),canResize:e,loading:o,striped:a,border:r,toggleStriped:function(){a.value=!a.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){o.value=!0,setTimeout((()=>{o.value=!1,n.value={pageSize:20}}),3e3)},toggleBorder:function(){r.value=!r.value},pagination:n}}});const j={class:"p-4"},b=m(" 开启loading ");u.render=function(e,i,t,o,a,s){const u=r("a-button"),f=r("BasicTable");return n(),d("div",j,[p(f,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,showTableSetting:"",pagination:e.pagination},{toolbar:c((()=>[p(u,{type:"primary",onClick:e.toggleCanResize},{default:c((()=>[m(l(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),p(u,{type:"primary",onClick:e.toggleBorder},{default:c((()=>[m(l(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),p(u,{type:"primary",onClick:e.toggleLoading},{default:c((()=>[b])),_:1},8,["onClick"]),p(u,{type:"primary",onClick:e.toggleStriped},{default:c((()=>[m(l(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination"])])};export default u;
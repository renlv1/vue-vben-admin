import{_ as i}from"./index.00fa045a.js";import{getBasicColumns as e,getTreeTableData as t}from"./tableData.7aa0192c.js";import{d as s,i as o,o as d,j as r,k as a}from"./index.a1da5219.js";import"./index.47fbc714.js";import"./index.f935c75b.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.9c4a2f87.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.21ee0d6a.js";import"./useTimeout.fc5397ab.js";import"./useWindowSizeFn.9d6f6d4a.js";import"./index.d913b92a.js";import"./index.7eaf0b8a.js";import"./domUtils.941be389.js";import"./RightOutlined.0ff6c3f8.js";import"./useScrollTo.d6397d0a.js";import"./animation.faff1b9d.js";import"./FullscreenOutlined.f3bd68b1.js";import"./index.a45b2b74.js";import"./index.b062bb5c.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.75a30ff9.js";import"./index.27bb0464.js";import"./clickOutside.1bc34f02.js";import"./CheckOutlined.861808da.js";import"./useSortable.bb766778.js";import"./SettingOutlined.bc0a42f6.js";import"./useExpose.4342ccc1.js";import"./useForm.cb0543c4.js";var m=s({components:{BasicTable:i},setup:()=>({columns:e(),data:t()})});const n={class:"p-4"};m.render=function(i,e,t,s,m,p){const c=o("BasicTable");return d(),r("div",n,[a(c,{rowSelection:{type:"checkbox"},title:"树形表格",titleHelpMessage:"树形组件不能和序列号列同时存在",columns:i.columns,dataSource:i.data,rowKey:"id",indentSize:20,isTreeTable:""},null,8,["columns","dataSource"])])};export default m;
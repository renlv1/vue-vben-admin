import{a as e,i,o as t,j as o,k as s,w as r,p as d}from"./index.dc2474c5.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.5f2ca698.js";import"./index.42b663c7.js";import"./omit.b6891b40.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.483b4322.js";import"./CheckOutlined.443a507c.js";import"./index.51354d44.js";import"./index.24bd1cf1.js";import"./colors.36c97d94.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.954ddf05.js";import"./index.0316d2b5.js";import"./UpOutlined.a4448786.js";import"./LeftOutlined.3ec9da63.js";import"./DownOutlined.16ed644d.js";import"./index.ff51f9f3.js";import"./index.c8d3fa2a.js";import"./index.d62063f1.js";import"./zh_CN.0242bd16.js";import"./index.0ed8c2eb.js";import"./index.4b77d643.js";import"./CaretDownFilled.0a95fe44.js";import"./CheckOutlined.d40c5cf4.js";import"./CloseOutlined.b1e89784.js";import{s as a}from"./EditTableHeaderIcon.a84133a3.js";import"./index.45a74137.js";import"./index.aa029d51.js";import"./LeftOutlined.9fba55b2.js";import"./functional.eee1b379.js";import"./RightOutlined.69404973.js";import"./useTimeout.ece0018d.js";import"./useDebounce.6bfe7d92.js";import"./useEventListener.242996ad.js";import"./useBreakpoint.0182c2b6.js";import"./resizeEvent.4ed1410d.js";import"./domUtils.7f740ab5.js";import"./useExpose.d292bc72.js";import"./index.177e3769.js";import"./useWindowSizeFn.b69303c2.js";import"./uuid.40269c00.js";import"./download.5de813c4.js";import"./useForm.423dbb98.js";import"./useFullScreen.e8706629.js";import"./index.eb1a3eb6.js";import{u as n}from"./useTable.e46fe14d.js";import{getBasicColumns as p}from"./tableData.44c41ade.js";import{d as m}from"./table.9d6145dd.js";var j=e({components:{BasicTable:a},setup(){const[e,{reload:i}]=n({title:"远程加载示例",api:m,columns:p()});return{registerTable:e,handleReloadCurrent:function(){i()},handleReload:function(){i({page:1})}}}});const l={class:"p-4"},c=d(" 刷新当前页 "),u=d(" 刷新并返回第一页 ");j.render=function(e,d,a,n,p,m){const j=i("a-button"),b=i("BasicTable");return t(),o("div",l,[s(b,{onRegister:e.registerTable},{toolbar:r((()=>[s(j,{type:"primary",onClick:e.handleReloadCurrent},{default:r((()=>[c])),_:1},8,["onClick"]),s(j,{type:"primary",onClick:e.handleReload},{default:r((()=>[u])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default j;
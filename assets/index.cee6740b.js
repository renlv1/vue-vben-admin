import{d as o,au as t,u as e,Y as s,N as i,s as a,as as r,f as n,at as d,br as l,bs as p,i as c,o as m,j as u,k as f,m as j,l as b,aJ as x}from"./index.a1da5219.js";import"./index.9dd5a858.js";import{D as _,G as C,S as F}from"./siteSetting.2daee9f0.js";import{G as S}from"./GithubFilled.725566c5.js";import"./index.673364b0.js";import"./index.8d91dadc.js";import"./useTimeout.fc5397ab.js";import"./useHeaderSetting.ead031fc.js";import"./domUtils.941be389.js";import"./index.d913b92a.js";import"./index.7eaf0b8a.js";import"./RightOutlined.0ff6c3f8.js";import"./useScrollTo.d6397d0a.js";import"./animation.faff1b9d.js";import"./index.17c1a2c1.js";import"./useWindowSizeFn.9d6f6d4a.js";import"./usePageContext.40689edc.js";import"./index.6f7c662f.js";import"./clickOutside.1bc34f02.js";import"./index.a0e9bc88.js";import"./index.b062bb5c.js";import"./useSortable.bb766778.js";var h=o({name:"LayoutFooter",components:{Footer:t.Footer,GithubFilled:S},setup(){const{t:o}=e(),{getShowFooter:t}=d(),{currentRoute:l}=s(),{prefixCls:p}=i("layout-footer");return{getShowLayoutFooter:a((()=>{var o;return n(t)&&!(null==(o=n(l).meta)?void 0:o.hiddenFooter)})),prefixCls:p,t:o,DOC_URL:_,GITHUB_URL:C,SITE_URL:F,openWindow:r}}});const g=x("data-v-47369c67");l("data-v-47369c67");const v=f("div",null,"Copyright ©2020 Vben Admin",-1);p();const w=g(((o,t,e,s,i,a)=>{const r=c("GithubFilled"),n=c("Footer");return o.getShowLayoutFooter?(m(),u(n,{key:0,class:o.prefixCls},{default:g((()=>[f("div",{class:`${o.prefixCls}__links`},[f("a",{onClick:t[1]||(t[1]=t=>o.openWindow(o.SITE_URL))},j(o.t("layout.footer.onlinePreview")),1),f(r,{onClick:t[2]||(t[2]=t=>o.openWindow(o.GITHUB_URL)),class:`${o.prefixCls}__github`},null,8,["class"]),f("a",{onClick:t[3]||(t[3]=t=>o.openWindow(o.DOC_URL))},j(o.t("layout.footer.onlineDocument")),1)],2),v])),_:1},8,["class"])):b("",!0)}));h.render=w,h.__scopeId="data-v-47369c67";export default h;
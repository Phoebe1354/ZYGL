webpackJsonp([7],{VMKq:function(t,e,n){"use strict";function a(t){n("v57t")}Object.defineProperty(e,"__esModule",{value:!0});var c=n("Xxa5"),s=n.n(c),r=n("exGp"),i=n.n(r),o=n("0jG4"),l=n("Du/2"),u={data:function(){return{searchType:1,searchText:"",totalNumber:0,columns:[{type:"selection",width:60,align:"center"},{type:"index",width:60,align:"center"},{title:"姓名",align:"center",key:"name",width:100},{title:"账号",align:"center",key:"account",width:120},{title:"邮箱",align:"center",key:"email"},{title:"角色",align:"center",key:"role"},{title:"操作",key:"action",align:"center",render:function(t,e){return t("div",[t("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px"},on:{click:function(){}}},"查看"),t("Button",{props:{type:"success",size:"small"},on:{click:function(){}}},"修改")])}}],accountList:[]}},created:function(){this.getAccountList()},methods:{getAccountList:function(t){var e=this;return i()(s.a.mark(function n(){var a;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.a.system.getAccountList(t);case 3:a=n.sent,e.accountList=a.accountList,e.totalNumber=a.totalNumber,n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),e.$store.commit(l.d,{content:n.t0.message});case 11:case"end":return n.stop()}},n,e,[[0,8]])}))()}}},p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"ui-toolbar"},[n("Select",{staticStyle:{width:"100px"},model:{value:t.searchType,callback:function(e){t.searchType=e},expression:"searchType"}},[n("Option",{attrs:{value:1}},[t._v("手机号码")]),t._v(" "),n("Option",{attrs:{value:2}},[t._v("姓名")]),t._v(" "),n("Option",{attrs:{value:3}},[t._v("角色名称")])],1),t._v(" "),n("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入..."},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}}),t._v(" "),n("Button",{attrs:{type:"primary",icon:"ios-search"}},[t._v("查询")]),t._v(" "),n("div",{staticClass:"pull-right"},[n("Button",{attrs:{type:"success",icon:"plus"}},[t._v("新增")]),t._v(" "),n("Button",{attrs:{type:"warning",icon:"trash-a"}},[t._v("删除")])],1)],1),t._v(" "),n("Table",{attrs:{border:"",stripe:"",columns:t.columns,data:t.accountList}}),t._v(" "),n("appPage",{attrs:{total:t.totalNumber},on:{pageChange:t.getAccountList}})],1)},v=[],d={render:p,staticRenderFns:v},h=d,m=n("VU/8"),y=a,f=m(u,h,!1,y,"data-v-2f9df787",null);e.default=f.exports},v57t:function(t,e){}});
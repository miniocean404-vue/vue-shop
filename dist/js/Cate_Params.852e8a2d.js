(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cate_Params"],{"08c5":function(t,e,r){},"170b":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),r("el-breadcrumb-item",[t._v("商品管理")]),r("el-breadcrumb-item",[t._v("商品分类")])],1),r("el-card",[r("el-row",[r("el-col",[r("el-button",{attrs:{type:"primary"},on:{click:t.showAddCateDialog}},[t._v("添加分类")])],1)],1),r("tree-table",{staticClass:"treeTable",attrs:{data:t.catelist,columns:t.columns,"selection-type":!1,"expand-type":!1,"show-index":!0,"index-text":"编号",border:""},scopedSlots:t._u([{key:"isok",fn:function(t){return[!1===t.row.cat_deleted?r("i",{staticClass:"Fel-icon-check"}):r("i",{staticClass:"el-icon-close"})]}},{key:"order",fn:function(e){return[0===e.row.cat_level?r("el-tag",[t._v("一级")]):1===e.row.cat_level?r("el-tag",{attrs:{type:"success"}},[t._v("二级")]):r("el-tag",{attrs:{type:"warning"}},[t._v("三级")])]}}])},[r("template",{slot:"opt"},[r("el-button",{attrs:{type:"info",icon:"el-icon-edit"}},[t._v("编辑")]),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete"}},[t._v("搜索")])],1)],2),r("div",{staticClass:"block"},[r("el-pagination",{attrs:{"current-page":t.cateInfo.pagenum,"page-sizes":[1,2,5,10],"page-size":t.cateInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),r("el-dialog",{attrs:{title:"添加分类",visible:t.addCateDialogVisible,width:"50%","before-close":t.addCateDialogClosed},on:{"update:visible":function(e){t.addCateDialogVisible=e}}},[r("el-form",{ref:"addCateRuleFormRef",attrs:{model:t.addCateRuleForm,"status-icon":"",rules:t.addCateRuleFormRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"分类名称",prop:"cat_name"}},[r("el-input",{model:{value:t.addCateRuleForm.cat_name,callback:function(e){t.$set(t.addCateRuleForm,"cat_name",e)},expression:"addCateRuleForm.cat_name"}})],1),r("el-form-item",{attrs:{label:"父级分类"}},[r("el-cascader",{attrs:{"expand-trigger":"hover",options:t.parentCateList,props:t.cascaderProps,clearable:"","change-on-select":""},on:{change:t.parentCateChanged},model:{value:t.selectedKeys,callback:function(e){t.selectedKeys=e},expression:"selectedKeys"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.addCateDialogVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.addCate}},[t._v("确 定")])],1)],1)],1)},n=[],i=(r("96cf"),r("1da1")),o={created:function(){this.getCateLitst()},data:function(){return{cateInfo:{type:3,pagenum:1,pagesize:5},total:0,catelist:[],columns:[{label:"分类名称",prop:"cat_name"},{label:"是否有效",type:"template",template:"isok"},{label:"排序",type:"template",template:"order"},{label:"排序",type:"template",template:"opt"}],addCateDialogVisible:!1,addCateRuleForm:{cat_name:"",cat_pid:0,cat_level:0},addCateRuleFormRules:{cat_name:[{required:!0,message:"请输入分类名称",trigger:"blur"}]},parentCateList:[],cascaderProps:{value:"cat_id",label:"cat_name",children:"children"},selectedKeys:[]}},methods:{getCateLitst:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("categories",{params:t.cateInfo});case 2:if(r=e.sent,a=r.data,200==a.meta.status){e.next=6;break}return e.abrupt("return",t.$message.error("页面初始化信息出错"));case 6:t.catelist=a.data.result,t.total=a.data.total;case 8:case"end":return e.stop()}}),e)})))()},handleSizeChange:function(t){this.cateInfo.pagesize=t,this.getCateLitst()},handleCurrentChange:function(t){this.cateInfo.pagenum=t,this.getCateLitst()},showAddCateDialog:function(){this.getParentCateList(),this.addCateDialogVisible=!0},getParentCateList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("categories",{params:{type:2}});case 2:if(r=e.sent,a=r.data,200===a.meta.status){e.next=6;break}return e.abrupt("return",t.$message.error("获取父级分类数据失败！"));case 6:t.parentCateList=a.data;case 7:case"end":return e.stop()}}),e)})))()},parentCateChanged:function(){if(this.selectedKeys.length>0)return this.addCateRuleForm.cat_pid=this.selectedKeys[this.selectedKeys.length-1],void(this.addCateRuleForm.cat_level=this.selectedKeys.length);this.addCateRuleForm.cat_pid=0,this.addCateRuleForm.cat_level=0},addCate:function(){var t=this;this.$refs.addCateRuleFormRef.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(r){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$http.post("categories",t.addCateForm);case 4:if(a=e.sent,n=a.data,201===n.meta.status){e.next=8;break}return e.abrupt("return",t.$message.error("添加分类失败！"));case 8:t.$message.success("添加分类成功！"),t.getCateList(),t.addCateDialogVisible=!1;case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},addCateDialogClosed:function(){this.$refs.addCateRuleFormRef.resetFields(),this.selectedKeys=[],this.addCateRuleForm.cat_level=0,this.addCateRuleForm.cat_pid=0}}},s=o,c=(r("4460"),r("2877")),l=Object(c["a"])(s,a,n,!1,null,"303cdc90",null);e["default"]=l.exports},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r("d3b7");function a(t,e,r,a,n,i,o){try{var s=t[i](o),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(a,n)}function n(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function s(t){a(o,n,i,s,c,"next",t)}function c(t){a(o,n,i,s,c,"throw",t)}s(void 0)}))}}},4460:function(t,e,r){"use strict";r("ca2f")},"96cf":function(t,e,r){var a=function(t){"use strict";var e,r=Object.prototype,a=r.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(j){c=function(t,e,r){return t[e]=r}}function l(t,e,r,a){var n=e&&e.prototype instanceof g?e:g,i=Object.create(n.prototype),o=new E(a||[]);return i._invoke=F(t,r,o),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(j){return{type:"throw",arg:j}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",m={};function g(){}function b(){}function v(){}var y={};y[i]=function(){return this};var w=Object.getPrototypeOf,_=w&&w(w($([])));_&&_!==r&&a.call(_,i)&&(y=_);var x=v.prototype=g.prototype=Object.create(y);function C(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(n,i,o,s){var c=u(t[n],t,i);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"===typeof d&&a.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,o,s)}),(function(t){r("throw",t,o,s)})):e.resolve(d).then((function(t){l.value=t,o(l)}),(function(t){return r("throw",t,o,s)}))}s(c.arg)}var n;function i(t,a){function i(){return new e((function(e,n){r(t,a,e,n)}))}return n=n?n.then(i,i):i()}this._invoke=i}function F(t,e,r){var a=d;return function(n,i){if(a===p)throw new Error("Generator is already running");if(a===h){if("throw"===n)throw i;return V()}r.method=n,r.arg=i;while(1){var o=r.delegate;if(o){var s=R(o,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===d)throw a=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=p;var c=u(t,e,r);if("normal"===c.type){if(a=r.done?h:f,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=h,r.method="throw",r.arg=c.arg)}}}function R(t,r){var a=t.iterator[r.method];if(a===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,R(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=u(a,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,m;var i=n.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function $(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){while(++n<t.length)if(a.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:V}}function V(){return{value:e,done:!0}}return b.prototype=x.constructor=v,v.constructor=b,b.displayName=c(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},C(k.prototype),k.prototype[o]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,a,n,i){void 0===i&&(i=Promise);var o=new k(l(e,r,a,n),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},C(x),c(x,s,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var a=e.pop();if(a in t)return r.value=a,r.done=!1,r}return r.done=!0,r}},t.values=$,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(D),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(a,n){return s.type="throw",s.arg=t,r.next=a,n&&(r.method="next",r.arg=e),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),D(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;D(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,a){return this.delegate={iterator:$(t),resultName:r,nextLoc:a},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=a}catch(n){Function("r","regeneratorRuntime = r")(a)}},a652:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),r("el-breadcrumb-item",[t._v("商品管理")]),r("el-breadcrumb-item",[t._v("参数列表")])],1),r("el-card",[r("el-alert",{attrs:{title:"注意:只允许为第三级分类设置相关参数",type:"warning","show-icon":"",closeable:""}}),r("el-row",{staticClass:"goods"},[r("el-col",[r("span",[t._v("选择商品分类：")]),r("el-cascader",{attrs:{options:t.cateList,props:t.cateProps},on:{change:t.cateHandleChange},model:{value:t.cateValue,callback:function(e){t.cateValue=e},expression:"cateValue"}}),r("el-tabs",{on:{"tab-click":t.tabHandleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"用户管理",name:"many"}},[r("el-button",{attrs:{type:"primary",disabled:t.btnDisable},on:{click:function(e){t.addDialogVisible=!0}}},[t._v("添加参数")]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.manyData,stripe:"",border:""},scopedSlots:t._u([{key:"default",fn:function(e){return r("el-table-column",{attrs:{label:"操作"}},[r("el-button",{attrs:{type:"info",icon:"el-icon-edit"},on:{click:function(r){t.showEidt(e.row.attr_id)}}},[t._v("修改")]),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete"}},[t._v("删除")])],1)}}])},[r("el-table-column",{attrs:{type:"expand"}}),r("el-table-column",{attrs:{type:"index"}}),r("el-table-column",{attrs:{prop:"attr_name",label:"参数名称"}})],1)],1),r("el-tab-pane",{attrs:{label:"配置管理",name:"only"}},[r("el-button",{attrs:{type:"primary",disabled:t.btnDisable},on:{click:function(e){t.addDialogVisible=!0}}},[t._v("配置管理 ")]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.onlyData,stripe:"",border:""},scopedSlots:t._u([{key:"default",fn:function(e){return r("el-table-column",{attrs:{label:"操作"}},[r("el-button",{attrs:{type:"info",icon:"el-icon-edit"},on:{click:function(r){return t.showEidt(e.row.attr_id)}}},[t._v("修改")]),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete"}},[t._v("删除")])],1)}}])},[r("el-table-column",{attrs:{type:"expand"}}),r("el-table-column",{attrs:{type:"index"}}),r("el-table-column",{attrs:{prop:"attr_name",label:"属性名称"}})],1)],1)],1)],1)],1)],1),r("el-dialog",{attrs:{title:"添加"+t.titleText,visible:t.addDialogVisible,width:"50%"},on:{"update:visible":function(e){t.addDialogVisible=e},close:t.closeAddDialog}},[r("el-form",{ref:"addFormRef",attrs:{model:t.addForm,rules:t.addFormRules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:t.titleText,prop:"attr_name"}},[r("el-input",{model:{value:t.addForm.attr_name,callback:function(e){t.$set(t.addForm,"attr_name",e)},expression:"addForm.attr_name"}})],1)],1),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.addDialogVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.addParms}},[t._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"添加"+t.titleText,visible:t.editDialogVisible,width:"50%"},on:{"update:visible":function(e){t.editDialogVisible=e},close:t.closeEditDialog}},[r("el-form",{ref:"editFormRef",attrs:{model:t.editForm,rules:t.editFormRules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:t.titleText,prop:"attr_name"}},[r("el-input",{model:{value:t.editForm.attr_name,callback:function(e){t.$set(t.editForm,"attr_name",e)},expression:"editForm.attr_name"}})],1)],1),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.editDialogVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.editParms}},[t._v("确 定")])],1)],1)],1)},n=[],i=(r("99af"),r("96cf"),r("1da1")),o={created:function(){this.getCateList()},data:function(){return{cateList:[],cateProps:{expandTrigger:"hover",value:"cat_id",label:"cat_name",children:"children"},cateValue:[],activeName:"many",manyData:[],onlyData:[],addDialogVisible:!1,addForm:{attr_name:""},addFormRules:{attr_name:[{required:!0,message:"请输入参数名称",trigger:"blur"}]},editDialogVisible:!1,editForm:{},editFormRules:{attr_name:[{required:!0,message:"请输入参数名称",trigger:"blur"}]}}},methods:{getCateList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("categories");case 2:if(r=e.sent,a=r.data,200===a.meta.status){e.next=6;break}return e.abrupt("return",t.$message.error("获取商品失败"));case 6:t.cateList=a.data,t.$message.success("获取商品信息成功");case 8:case"end":return e.stop()}}),e)})))()},cateHandleChange:function(){this.getparams()},tabHandleClick:function(){this.getparams()},getparams:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(3!==t.cateValue.length){e.next=8;break}return e.next=3,t.$http.get("categories/".concat(t.cateId,"/attributes"),{params:{sel:t.activeName}});case 3:r=e.sent,a=r.data,200!==a.meta.status&&t.$message.error("获取商品失败"),"many"==t.activeName?t.manyData=a.data:t.onlyData=a.data,t.$message.success("获取商品成功");case 8:case"end":return e.stop()}}),e)})))()},closeAddDialog:function(){this.$refs.addFormRef.resetFields()},addParms:function(){var t=this;this.$refs.addFormRef.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(r){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$http.post("categories/".concat(t.cateId,"/attributes"),{attr_name:t.addForm.attr_name,attr_sel:t.activeName});case 4:if(a=e.sent,n=a.data,201===n.meta.status){e.next=8;break}return e.abrupt("return",t.$message.error("添加失败"));case 8:t.$message.success("添加成功"),t.addDialogVisible=!1,t.getparams();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},showEidt:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$http.get("categories/".concat(e.cateId,"/attributes/").concat(t),{params:{attr_sel:e.activeName}});case 2:if(a=r.sent,n=a.data,201===n.meta.status){r.next=6;break}return r.abrupt("return",e.$message.error("获取失败"));case 6:e.editForm=n.data,e.editDialogVisible=!0;case 8:case"end":return r.stop()}}),r)})))()},closeEditDialog:function(){this.$refs.editFormRef.resetFields()},editParms:function(){}},computed:{btnDisable:function(){return 3!==this.cateValue.length},cateId:function(){return 3==this.cateValue.length?this.cateValue[2]:null},titleText:function(){return"many"==this.activeName?"动态属性":"静态属性"}}},s=o,c=(r("ee76"),r("2877")),l=Object(c["a"])(s,a,n,!1,null,"4caf7e60",null);e["default"]=l.exports},ca2f:function(t,e,r){},ee76:function(t,e,r){"use strict";r("08c5")}}]);
//# sourceMappingURL=Cate_Params.852e8a2d.js.map
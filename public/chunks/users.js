(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"+8+f":function(t,a,e){"use strict";e("3PeW")},"/XB0":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".mobile-action-button[data-v-2b93f6fa]{background:#f4f5f6;margin-right:8px;border-radius:8px;padding:7px 14px;cursor:pointer;border:none;transition:all .15s ease}.mobile-action-button .flex[data-v-2b93f6fa]{display:flex;align-items:center}.mobile-action-button .icon[data-v-2b93f6fa]{font-size:.875em}.mobile-action-button .icon circle[data-v-2b93f6fa],.mobile-action-button .icon line[data-v-2b93f6fa],.mobile-action-button .icon path[data-v-2b93f6fa],.mobile-action-button .icon polygon[data-v-2b93f6fa],.mobile-action-button .icon polyline[data-v-2b93f6fa],.mobile-action-button .icon rect[data-v-2b93f6fa]{transition:all .15s ease}.mobile-action-button .label[data-v-2b93f6fa]{transition:all .15s ease;font-size:.875em;font-weight:700;color:#1b2539;padding-left:10px}.mobile-action-button[data-v-2b93f6fa]:active{transform:scale(.95)}.dark-mode .mobile-action-button[data-v-2b93f6fa]{background:#1e2024}.dark-mode .mobile-action-button circle[data-v-2b93f6fa],.dark-mode .mobile-action-button line[data-v-2b93f6fa],.dark-mode .mobile-action-button path[data-v-2b93f6fa],.dark-mode .mobile-action-button polygon[data-v-2b93f6fa],.dark-mode .mobile-action-button polyline[data-v-2b93f6fa],.dark-mode .mobile-action-button rect[data-v-2b93f6fa]{color:inherit}.dark-mode .mobile-action-button .label[data-v-2b93f6fa]{color:#bec6cf}",""])},"/nGJ":function(t,a,e){"use strict";e("T0k5")},"0wQE":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".cell-image-thumbnail[data-v-49976037]{display:flex;align-items:center;cursor:pointer}.cell-image-thumbnail .image[data-v-49976037]{margin-right:20px;line-height:0;position:relative}.cell-image-thumbnail .image img[data-v-49976037]{line-height:0;width:48px;height:48px;border-radius:8px;z-index:1;position:relative}.cell-image-thumbnail .image img.blurred[data-v-49976037]{position:absolute;left:0;top:2px;z-index:0;filter:blur(8px);opacity:.5}.cell-image-thumbnail .image.small img[data-v-49976037]{width:32px;height:32px}.cell-image-thumbnail .info .description[data-v-49976037],.cell-image-thumbnail .info .name[data-v-49976037]{max-width:150px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}.cell-image-thumbnail .info .name[data-v-49976037]{font-size:.9375em;line-height:1;color:#1b2539}.cell-image-thumbnail .info .description[data-v-49976037]{color:rgba(27,37,57,.7);font-size:.75em}.dark-mode .cell-image-thumbnail .image img.blurred[data-v-49976037]{display:none}.dark-mode .cell-image-thumbnail .info .name[data-v-49976037]{color:#bec6cf}.dark-mode .cell-image-thumbnail .info .description[data-v-49976037]{color:#7d858c}",""])},"1wHr":function(t,a,e){"use strict";e("aKcM")},"2Sb1":function(t,a,e){"use strict";var i={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:e("CjXH").h}},n=(e("1wHr"),e("KHd+")),o=Object(n.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-header"},[t.canBack?e("div",{staticClass:"go-back",on:{click:function(a){return t.$router.back()}}},[e("chevron-left-icon",{attrs:{size:"17"}})],1):t._e(),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.title))])])])}),[],!1,null,"8bbfeb00",null);a.a=o.exports},"2ojD":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".text-label[data-v-acb23b3a]{font-size:.75em;color:#afafaf;font-weight:700;display:block;margin-bottom:20px}.dark-mode .text-label[data-v-acb23b3a]{color:#00bc7e}",""])},"3PeW":function(t,a,e){var i=e("0wQE");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},"4iuB":function(t,a,e){"use strict";e("8vOH")},"5iZi":function(t,a,e){var i=e("lNml");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},"6TPS":function(t,a,e){"use strict";var i=e("CjXH"),n={props:["data"],computed:{normalizedColumns:function(){return this.data.id&&delete this.data.id,Object.values(this.data)}}},o=(e("/nGJ"),e("KHd+")),s=Object(o.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticClass:"table-row"},t._l(t.normalizedColumns,(function(a,i){return e("td",{key:i,staticClass:"table-cell"},[e("span",[t._v(t._s(a))])])})),0)}),[],!1,null,"d6678dd0",null).exports,r=e("vDqi"),l=e.n(r),c={name:"DatatableWrapper",props:["columns","scope","paginator","api","tableData"],components:{ChevronRightIcon:i.i,ChevronLeftIcon:i.h,DatatableCell:s,ChevronUpIcon:i.j},computed:{hasData:function(){return this.data&&this.data.data&&this.data.data.length>0},floatPages:function(){return[this.pageIndex-1,this.pageIndex,this.pageIndex+1]}},data:function(){return{data:void 0,isLoading:!0,pageIndex:1,filter:{sort:"DESC",field:void 0}}},methods:{goToPage:function(t){t>this.data.meta.last_page||0===t||(this.pageIndex=t,this.getPage(t))},sort:function(t,a){a&&(this.filter.field=t,"DESC"===this.filter.sort?this.filter.sort="ASC":"ASC"===this.filter.sort&&(this.filter.sort="DESC"),this.getPage(this.pageIndex))},getPage:function(t){var a=this;this.URI=this.api,this.paginator&&(this.URI=this.URI+"?page="+t),this.filter.field&&(this.URI=this.URI+(this.paginator?"&":"?")+"sort="+this.filter.field+"&direction="+this.filter.sort),this.isLoading=!0,l.a.get(this.URI).then((function(t){a.data=t.data,a.$emit("data",t.data)})).catch((function(){return a.$isSomethingWrong()})).finally((function(){a.$emit("init",!0),a.isLoading=!1}))}},created:function(){this.api&&this.getPage(this.pageIndex),this.tableData&&(this.data=this.tableData,this.isLoading=!1)}},d=(e("Y9xi"),Object(o.a)(c,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"datatable"},[t.hasData?e("table",{staticClass:"table"},[e("thead",{staticClass:"table-header"},[e("tr",t._l(t.columns,(function(a,i){return a.hidden?t._e():e("th",{key:i,class:{sortable:a.sortable},on:{click:function(e){return t.sort(a.field,a.sortable)}}},[e("span",{staticClass:"text-theme dark-text-theme"},[t._v(t._s(a.label))]),t._v(" "),a.sortable?e("chevron-up-icon",{staticClass:"filter-arrow",class:{"arrow-down":"ASC"===t.filter.sort},attrs:{size:"14"}}):t._e()],1)})),0)]),t._v(" "),e("tbody",{staticClass:"table-body"},[t._l(t.data.data,(function(a){return t._t("default",[e("DatatableCell",{key:a.id,attrs:{data:a}})],{row:a})}))],2)]):t._e(),t._v(" "),t.isLoading||t.hasData?t._e():t._t("empty-page"),t._v(" "),t.paginator&&t.hasData?e("div",{staticClass:"paginator-wrapper"},[t.data.meta.total>20&&t.data.meta.last_page<=6?e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item previous"},[e("a",{staticClass:"page-link",class:{disabled:0==t.pageIndex},on:{click:function(a){return t.goToPage(t.pageIndex-1)}}},[e("chevron-left-icon",{staticClass:"icon",attrs:{size:"14"}})],1)]),t._v(" "),t._l(6,(function(a,i){return e("li",{key:i,staticClass:"page-item",on:{click:function(e){return t.goToPage(a)}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===a}},[t._v("\n                    "+t._s(a)+"\n                ")])])})),t._v(" "),e("li",{staticClass:"page-item next"},[e("a",{staticClass:"page-link",class:{disabled:t.pageIndex+1==t.data.meta.last_page},on:{click:function(a){return t.goToPage(t.pageIndex+1)}}},[e("chevron-right-icon",{staticClass:"icon",attrs:{size:"14"}})],1)])],2):t._e(),t._v(" "),t.data.meta.total>20&&t.data.meta.last_page>6?e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item previous"},[e("a",{staticClass:"page-link",class:{disabled:0==t.pageIndex},on:{click:function(a){return t.goToPage(t.pageIndex-1)}}},[e("chevron-left-icon",{staticClass:"icon",attrs:{size:"14"}})],1)]),t._v(" "),t.pageIndex>=5?e("li",{staticClass:"page-item",on:{click:function(a){return t.goToPage(1)}}},[e("a",{staticClass:"page-link"},[t._v("\n                    1\n                ")])]):t._e(),t._v(" "),t._l(5,(function(a,i){return t.pageIndex<5?e("li",{key:i,staticClass:"page-item",on:{click:function(e){return t.goToPage(a)}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===a}},[t._v("\n                    "+t._s(a)+"\n                ")])]):t._e()})),t._v(" "),t.pageIndex>=5?e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link"},[t._v("...")])]):t._e(),t._v(" "),t._l(t.floatPages,(function(a,i){return t.pageIndex>=5&&t.pageIndex<t.data.meta.last_page-3?e("li",{key:i,staticClass:"page-item",on:{click:function(e){return t.goToPage(a)}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===a}},[t._v("\n                    "+t._s(a)+"\n                ")])]):t._e()})),t._v(" "),t.pageIndex<t.data.meta.last_page-3?e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link"},[t._v("...")])]):t._e(),t._v(" "),t._l(5,(function(a,i){return t.pageIndex>t.data.meta.last_page-4?e("li",{key:i,staticClass:"page-item",on:{click:function(a){t.goToPage(t.data.meta.last_page-(4-i))}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===t.data.meta.last_page-(4-i)}},[t._v("\n                    "+t._s(t.data.meta.last_page-(4-i))+"\n                ")])]):t._e()})),t._v(" "),t.pageIndex<t.data.meta.last_page-3?e("li",{staticClass:"page-item",on:{click:function(a){return t.goToPage(t.data.meta.last_page)}}},[e("a",{staticClass:"page-link"},[t._v("\n                    "+t._s(t.data.meta.last_page)+"\n                ")])]):t._e(),t._v(" "),e("li",{staticClass:"page-item next"},[e("a",{staticClass:"page-link",class:{disabled:t.pageIndex+1==t.data.meta.last_page},on:{click:function(a){return t.goToPage(t.pageIndex+1)}}},[e("chevron-right-icon",{staticClass:"icon",attrs:{size:"14"}})],1)])],2):t._e(),t._v(" "),e("span",{staticClass:"paginator-info"},[t._v(t._s(t.$t("datatable.paginate_info",{visible:t.data.meta.per_page,total:t.data.meta.total})))])]):t._e()],2)}),[],!1,null,"028ef2e8",null));a.a=d.exports},"7w3u":function(t,a,e){"use strict";e("5iZi")},"8vOH":function(t,a,e){var i=e("/XB0");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},CLdG:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".preview-list-icon line,.preview-list-icon rect{color:inherit}",""])},"D4g/":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".page-header[data-v-8bbfeb00]{display:flex;align-items:center;background:#fff;z-index:9;width:100%;position:sticky;top:0;padding-top:20px;padding-bottom:20px}.page-header .title[data-v-8bbfeb00]{font-size:1.125em;font-weight:700;color:#1b2539}.page-header .go-back[data-v-8bbfeb00]{margin-right:10px;cursor:pointer}.page-header .go-back svg[data-v-8bbfeb00]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:960px){.page-header .title[data-v-8bbfeb00]{font-size:1.125em}}@media only screen and (max-width:690px){.page-header[data-v-8bbfeb00]{display:none}}.dark-mode .page-header[data-v-8bbfeb00]{background:#131414}.dark-mode .page-header .title[data-v-8bbfeb00]{color:#bec6cf}.dark-mode .page-header .icon path[data-v-8bbfeb00]{fill:#00bc7e}",""])},D62o:function(t,a,e){"use strict";var i=e("xCqy"),n=e("CjXH"),o={name:"MobileHeader",props:["title"],components:{ChevronLeftIcon:n.h,MenuIcon:n.P},methods:{showMobileNavigation:function(){i.a.$emit("mobile-menu:show","user-navigation")},goBack:function(){this.$router.back()}}},s=(e("ayom"),e("KHd+")),r=Object(s.a)(o,(function(){var t=this.$createElement,a=this._self._c||t;return a("header",{staticClass:"mobile-header"},[a("div",{staticClass:"go-back",on:{click:this.goBack}},[a("chevron-left-icon",{staticClass:"icon",attrs:{size:"17"}})],1),this._v(" "),a("div",{staticClass:"location-name"},[this._v(this._s(this.title))]),this._v(" "),a("div",{staticClass:"mobile-menu",on:{click:this.showMobileNavigation}},[a("menu-icon",{staticClass:"icon",attrs:{size:"17"}})],1)])}),[],!1,null,"39c25ac0",null);a.a=r.exports},GELx:function(t,a,e){"use strict";var i={name:"DatatableCellImage",props:["image","title","description","image-size"]},n=(e("+8+f"),e("KHd+")),o=Object(n.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cell-image-thumbnail"},[t.image?e("div",{staticClass:"image",class:t.imageSize},[e("img",{attrs:{src:t.image,alt:t.title}}),t._v(" "),e("img",{staticClass:"blurred",attrs:{src:t.image,alt:t.title}})]):t._e(),t._v(" "),e("div",{staticClass:"info"},[t.title?e("b",{staticClass:"name"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.description?e("span",{staticClass:"description"},[t._v(t._s(t.description))]):t._e()])])}),[],!1,null,"49976037",null);a.a=o.exports},GIzx:function(t,a,e){"use strict";e("jPdv")},JsZR:function(t,a,e){"use strict";e("mGdo")},LcTr:function(t,a,e){var i=e("2ojD");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},MDVf:function(t,a,e){var i=e("lZOx");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},Pb6s:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".mobile-header[data-v-39c25ac0]{padding:10px 0;text-align:center;background:#fff;position:sticky;display:none;z-index:6;top:0}.mobile-header>div[data-v-39c25ac0]{flex-grow:1;align-self:center;white-space:nowrap}.mobile-header .go-back[data-v-39c25ac0]{text-align:left}.mobile-header .location-name[data-v-39c25ac0]{line-height:1;text-align:center;width:100%;vertical-align:middle;font-size:.9375em;color:#1b2539;font-weight:700;max-width:220px;overflow:hidden;text-overflow:ellipsis;display:inline-block}.mobile-header .mobile-menu[data-v-39c25ac0]{text-align:right}.mobile-header .icon[data-v-39c25ac0]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:690px){.mobile-header[data-v-39c25ac0]{display:flex;margin-bottom:15px}}.dark-mode .mobile-header[data-v-39c25ac0]{background:#131414}.dark-mode .mobile-header .location-name[data-v-39c25ac0]{color:#bec6cf}",""])},T0k5:function(t,a,e){var i=e("uv/y");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},THmQ:function(t,a,e){"use strict";var i={name:"SectionTitle"},n=(e("pL59"),e("KHd+")),o=Object(n.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"acb23b3a",null);a.a=o.exports},VWrN:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".preview-list-icon line,.preview-list-icon path{color:inherit}",""])},WFjI:function(t,a,e){"use strict";e("JsZR");var i=e("KHd+"),n=Object(i.a)({},(function(){var t=this.$createElement,a=this._self._c||t;return a("svg",{staticClass:"preview-list-icon",attrs:{fill:"none",stroke:"currentColor","stroke-width":"1.5","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round",width:"15px",height:"15px",viewBox:"0 0 20 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("rect",{attrs:{x:"9.77777778",y:"0",width:"6.22222222",height:"6.22222222"}}),this._v(" "),a("rect",{attrs:{x:"9.77777778",y:"9.77777778",width:"6.22222222",height:"6.22222222"}}),this._v(" "),a("line",{attrs:{x1:"0",y1:"2",x2:"6",y2:"2"}}),this._v(" "),a("line",{attrs:{x1:"0",y1:"8",x2:"6",y2:"8"}}),this._v(" "),a("line",{attrs:{x1:"0",y1:"14",x2:"6",y2:"14"}})])}),[],!1,null,null,null);a.a=n.exports},Y9xi:function(t,a,e){"use strict";e("MDVf")},YJjr:function(t,a,e){var i=e("n1Op");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},ZIRg:function(t,a,e){"use strict";e.r(a);var i=e("GELx"),n=e("6TPS"),o=e("t5U/"),s=e("D62o"),r=e("THmQ"),l=e("Nv84"),c=e("CjXH"),d=e("2Sb1"),p=e("kPoH"),b=e("zTYo"),f=e("L2JU");e("vDqi");function g(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,i)}return e}function u(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var v={name:"Profile",components:{DatatableCellImage:i.a,MobileActionButton:o.a,DatatableWrapper:n.a,SectionTitle:r.a,MobileHeader:s.a,Trash2Icon:c.ib,PageHeader:d.a,ButtonBase:l.a,ColorLabel:p.a,Edit2Icon:c.u,Spinner:b.a},computed:function(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?g(Object(e),!0).forEach((function(a){u(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):g(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}({},Object(f.b)(["config"])),data:function(){return{isLoading:!0,columns:void 0}},methods:{getRoleColor:function(t){switch(t){case"admin":return"purple";case"user":return"yellow"}}},created:function(){this.columns=[{label:this.$t("admin_page_user.table.name"),field:"email",sortable:!0},{label:this.$t("admin_page_user.table.role"),field:"role",sortable:!0},{label:this.$t("admin_page_user.table.plan"),field:"subscription",sortable:!1,hidden:!this.config.isSaaS},{label:this.$t("admin_page_user.table.storage_used"),field:"used",sortable:!0},{label:this.$t("admin_page_user.table.storage_capacity"),field:"settings.storage_capacity",sortable:!0,hidden:!this.config.storageLimit},{label:this.$t("admin_page_user.table.created_at"),field:"created_at",sortable:!0},{label:this.$t("admin_page_user.table.action"),field:"data.action",sortable:!1}]}},h=(e("ruO2"),e("KHd+")),m=Object(h.a)(v,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"single-page"}},[e("div",{attrs:{id:"page-content"}},[e("MobileHeader",{attrs:{title:t.$t(t.$router.currentRoute.meta.title)}}),t._v(" "),e("PageHeader",{attrs:{title:t.$t(t.$router.currentRoute.meta.title)}}),t._v(" "),e("div",{staticClass:"content-page"},[e("div",{staticClass:"table-tools"},[e("div",{staticClass:"buttons"},[e("router-link",{attrs:{to:{name:"UserCreate"}}},[e("MobileActionButton",{attrs:{icon:"user-plus"}},[t._v("\n                            "+t._s(t.$t("admin_page_user.create_user.submit"))+"\n                        ")])],1)],1)]),t._v(" "),e("DatatableWrapper",{staticClass:"table table-users",attrs:{api:"/api/admin/users",paginator:!0,columns:t.columns},on:{init:function(a){t.isLoading=!1}},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.row;return[e("tr",[e("td",{staticStyle:{"min-width":"320px"}},[e("router-link",{attrs:{to:{name:"UserDetail",params:{id:i.data.id}}}},[e("DatatableCellImage",{attrs:{image:i.data.relationships.settings.data.attributes.avatar,title:i.data.relationships.settings.data.attributes.name,description:i.data.attributes.email}})],1)],1),t._v(" "),e("td",[e("ColorLabel",{attrs:{color:t.getRoleColor(i.data.attributes.role)}},[t._v("\n                                "+t._s(i.data.attributes.role)+"\n                            ")])],1),t._v(" "),t.config.isSaaS?e("td",[i.data.attributes.subscription?e("span",{staticClass:"cell-item"},[t._v("\n                                "+t._s(t.$t("global.premium"))+"\n                            ")]):e("span",{staticClass:"cell-item"},[t._v("\n                                "+t._s(t.$t("global.free"))+"\n                            ")])]):t._e(),t._v(" "),e("td",[0!==i.data.attributes.storage.capacity?e("span",{staticClass:"cell-item"},[t._v("\n                                "+t._s(i.data.attributes.storage.used_formatted)+"\n                            ")]):t._e(),t._v(" "),0==i.data.attributes.storage.capacity?e("span",{staticClass:"cell-item"},[t._v("\n                                -\n                            ")]):t._e()]),t._v(" "),t.config.storageLimit?e("td",[0!==i.data.attributes.storage.capacity?e("span",{staticClass:"cell-item"},[t._v("\n                                "+t._s(i.data.attributes.storage.capacity_formatted)+"\n                            ")]):t._e(),t._v(" "),0==i.data.attributes.storage.capacity?e("span",{staticClass:"cell-item"},[t._v("\n                                -\n                            ")]):t._e()]):t._e(),t._v(" "),e("td",[e("span",{staticClass:"cell-item"},[t._v("\n                                "+t._s(i.data.attributes.created_at_formatted)+"\n                            ")])]),t._v(" "),e("td",[e("div",{staticClass:"action-icons"},[e("router-link",{attrs:{to:{name:"UserDetail",params:{id:i.data.id}}}},[e("Edit2Icon",{staticClass:"icon icon-edit",attrs:{size:"15"}})],1),t._v(" "),e("router-link",{attrs:{to:{name:"UserDelete",params:{id:i.data.id}}}},[e("Trash2Icon",{staticClass:"icon icon-trash",attrs:{size:"15"}})],1)],1)])])]}}])})],1)],1),t._v(" "),t.isLoading?e("div",{attrs:{id:"loader"}},[e("Spinner")],1):t._e()])}),[],!1,null,"2c2aba62",null);a.default=m.exports},aKcM:function(t,a,e){var i=e("D4g/");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},ayom:function(t,a,e){"use strict";e("uXZy")},"gn/r":function(t,a,e){"use strict";e("GIzx");var i=e("KHd+"),n=Object(i.a)({},(function(){var t=this.$createElement,a=this._self._c||t;return a("svg",{staticClass:"preview-list-icon",attrs:{fill:"none",stroke:"currentColor","stroke-width":"1.5","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round",width:"15px",height:"15px",viewBox:"0 0 17 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("path",{attrs:{d:"M14.2729998,10.7729998 C15.6774712,10.0073227 16.384111,8.38688297 15.9895447,6.83668332 C15.5949785,5.28648367 14.1996249,4.20105605 12.5999998,4.19999993 L11.7179998,4.19999993 C11.1377566,1.9556703 9.23470173,0.300843012 6.93154234,0.0378706728 C4.62838295,-0.225101666 2.40127934,0.958148431 1.33005562,3.01391529 C0.258831904,5.06968215 0.564955244,7.57295196 2.09999996,9.30999984",id:"Path"}}),this._v(" "),a("line",{attrs:{x1:"8.5",y1:"7",x2:"8.5",y2:"12",id:"Path"}}),this._v(" "),a("line",{attrs:{x1:"6",y1:"9.5",x2:"11",y2:"9.5",id:"Path"}})])}),[],!1,null,null,null);a.a=n.exports},jPdv:function(t,a,e){var i=e("VWrN");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},kPoH:function(t,a,e){"use strict";var i={name:"ColorLabel",props:["color"]},n=(e("7w3u"),e("KHd+")),o=Object(n.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("b",{staticClass:"color-label",class:this.color},[this._t("default")],2)}),[],!1,null,"00f26e1e",null);a.a=o.exports},lNml:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".color-label[data-v-00f26e1e]{text-transform:capitalize;font-size:.75em;display:inline-block;border-radius:6px;font-weight:700;padding:4px 6px}.color-label.purple[data-v-00f26e1e]{color:#9d66fe;background:rgba(157,102,254,.1)}.color-label.yellow[data-v-00f26e1e]{color:#ffbd2d;background:rgba(255,189,45,.1)}.color-label.green[data-v-00f26e1e]{color:#00bc7e;background:rgba(0,188,126,.1)}.color-label.red[data-v-00f26e1e]{color:#fd397a;background:rgba(253,57,122,.1)}",""])},lZOx:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".datatable[data-v-028ef2e8]{height:100%}.table-row[data-v-028ef2e8]{transition:all .3s ease}.table-row-enter[data-v-028ef2e8],.table-row-leave-to[data-v-028ef2e8]{opacity:0;transform:translateY(-100%)}.table-row-leave-active[data-v-028ef2e8]{position:absolute}.table[data-v-028ef2e8]{border-collapse:collapse;overflow-x:auto}.table[data-v-028ef2e8],.table tr[data-v-028ef2e8]{width:100%}.table tr td[data-v-028ef2e8]:first-child,.table tr th[data-v-028ef2e8]:first-child{padding-left:15px}.table tr td[data-v-028ef2e8]:last-child,.table tr th[data-v-028ef2e8]:last-child{padding-right:15px;text-align:right}.table .table-header[data-v-028ef2e8]{margin-bottom:10px}.table .table-header tr td[data-v-028ef2e8],.table .table-header tr th[data-v-028ef2e8]{padding:12px;text-align:left}.table .table-header tr td span[data-v-028ef2e8],.table .table-header tr th span[data-v-028ef2e8]{font-weight:700;font-size:.75em;white-space:nowrap}.table .table-header tr td.sortable[data-v-028ef2e8],.table .table-header tr th.sortable[data-v-028ef2e8]{cursor:pointer}.table .table-header tr td.sortable:hover .filter-arrow[data-v-028ef2e8],.table .table-header tr th.sortable:hover .filter-arrow[data-v-028ef2e8]{opacity:1}.table .table-header tr td[data-v-028ef2e8]:last-child,.table .table-header tr th[data-v-028ef2e8]:last-child{text-align:right}.table .table-header .filter-arrow[data-v-028ef2e8]{vertical-align:middle;margin-left:8px;transition:all .3s ease;opacity:0}.table .table-header .filter-arrow path[data-v-028ef2e8]{fill:rgba(27,37,57,.7)}.table .table-header .filter-arrow.arrow-down[data-v-028ef2e8]{transform:rotate(180deg)}.table .table-header span[data-v-028ef2e8]{font-size:13px;font-weight:700}.table .table-body tr[data-v-028ef2e8]{border-radius:8px}.table .table-body tr[data-v-028ef2e8]:hover{background:#f4f5f6}.table .table-body tr td[data-v-028ef2e8],.table .table-body tr th[data-v-028ef2e8]{padding:12px}.table .table-body tr td:last-child button[data-v-028ef2e8],.table .table-body tr th:last-child button[data-v-028ef2e8]{margin-right:0}.table .table-body a.page-link[data-v-028ef2e8],.table .table-body span[data-v-028ef2e8]{font-size:.9375em;font-weight:700;padding:10px 35px 10px 0;display:block;white-space:nowrap}.pagination .page-item[data-v-028ef2e8]{padding:3px;display:inline-block}.pagination .page-link[data-v-028ef2e8]{width:30px;height:30px;display:block;color:#1b2539;border-radius:6px;text-align:center;line-height:2.4;font-weight:700;font-size:13px;cursor:pointer;transition:all .15s ease}.pagination .page-link .icon[data-v-028ef2e8]{vertical-align:middle;margin-top:-2px}.pagination .page-link.active[data-v-028ef2e8],.pagination .page-link[data-v-028ef2e8]:hover:not(.disabled){background:#f4f5f6;color:#1b2539}.pagination .page-link.disabled[data-v-028ef2e8]{background:transparent;cursor:default}.pagination .page-link.disabled svg path[data-v-028ef2e8]{fill:rgba(27,37,57,.7)}.paginator-wrapper[data-v-028ef2e8]{margin-top:30px;margin-bottom:40px;display:flex;justify-content:space-between;align-items:center}.paginator-wrapper .paginator-info[data-v-028ef2e8]{font-size:13px;color:rgba(27,37,57,.7)}.user-preview[data-v-028ef2e8]{display:flex;align-items:center;cursor:pointer}.user-preview img[data-v-028ef2e8]{width:45px;margin-right:22px}@media only screen and (max-width:690px){.paginator-wrapper[data-v-028ef2e8]{display:block;text-align:center}.paginator-wrapper .paginator-info[data-v-028ef2e8]{margin-top:10px;display:block}}.dark-mode .table .table-body th[data-v-028ef2e8]:hover,.dark-mode .table .table-body tr[data-v-028ef2e8]:hover{background:#1e2024}.dark-mode .pagination .page-link[data-v-028ef2e8],.dark-mode .paginator-wrapper .paginator-info[data-v-028ef2e8]{color:#7d858c}.dark-mode .pagination .page-link svg polyline[data-v-028ef2e8]{stroke:#bec6cf}.dark-mode .pagination .page-link.active[data-v-028ef2e8],.dark-mode .pagination .page-link[data-v-028ef2e8]:hover:not(.disabled){color:#00bc7e;background:rgba(0,188,126,.1)}.dark-mode .pagination .page-link.disabled[data-v-028ef2e8]{background:transparent;cursor:default}.dark-mode .pagination .page-link.disabled svg polyline[data-v-028ef2e8]{stroke:#7d858c}",""])},mGdo:function(t,a,e){var i=e("CLdG");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},n1Op:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".table-tools[data-v-2c2aba62]{background:#fff;display:flex;justify-content:space-between;padding:15px 0 10px;position:sticky;top:40px;z-index:9}.table .cell-item[data-v-2c2aba62]{font-size:.9375em;white-space:nowrap}@media only screen and (max-width:690px){.table-tools[data-v-2c2aba62]{padding:0 0 5px}}.dark-mode .table-tools[data-v-2c2aba62]{background:#131414}",""])},pL59:function(t,a,e){"use strict";e("LcTr")},ruO2:function(t,a,e){"use strict";e("YJjr")},"t5U/":function(t,a,e){"use strict";var i=e("CjXH"),n=e("gn/r"),o=e("WFjI"),s={name:"MobileActionButton",props:["icon"],components:{CheckSquareIcon:i.f,DollarSignIcon:i.r,CreditCardIcon:i.p,FolderPlusIcon:i.C,RefreshCwIcon:i.Z,CloudPlusIcon:n.a,UserPlusIcon:i.nb,DownloadIcon:i.t,SortingIcon:o.a,XSquareIcon:i.rb,FilterIcon:i.A,SearchIcon:i.ab,CheckIcon:i.e,TrashIcon:i.jb,PlusIcon:i.W,CopyIcon:i.n,ListIcon:i.M,GridIcon:i.E}},r=(e("4iuB"),e("KHd+")),l=Object(r.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"mobile-action-button"},[e("div",{staticClass:"flex"},["search"===t.icon?e("search-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"refresh"===t.icon?e("refresh-cw-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"download"===t.icon?e("download-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"copy"===t.icon?e("copy-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"filter"===t.icon?e("filter-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"credit-card"===t.icon?e("credit-card-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"folder-plus"===t.icon?e("folder-plus-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"th-list"===t.icon?e("list-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"trash"===t.icon?e("trash-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"th"===t.icon?e("grid-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"user-plus"===t.icon?e("user-plus-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"plus"===t.icon?e("plus-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"check-square"===t.icon?e("check-square-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"x-square"===t.icon?e("x-square-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"check"===t.icon?e("check-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"dollar-sign"===t.icon?e("dollar-sign-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}):t._e(),t._v(" "),"preview-sorting"===t.icon?e("sorting-icon",{staticClass:"icon dark-text-theme preview-sorting"}):t._e(),t._v(" "),"cloud-plus"===t.icon?e("cloud-plus-icon",{staticClass:"icon dark-text-theme preview-sorting"}):t._e(),t._v(" "),t.$slots.default?e("span",{staticClass:"label"},[t._t("default")],2):t._e()],1)])}),[],!1,null,"2b93f6fa",null);a.a=l.exports},uXZy:function(t,a,e){var i=e("Pb6s");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},"uv/y":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".table-row[data-v-d6678dd0]{border-radius:8px}.table-row[data-v-d6678dd0]:hover{background:#f4f5f6}.table-row .table-cell[data-v-d6678dd0]{padding-top:15px;padding-bottom:15px}.table-row .table-cell[data-v-d6678dd0]:first-child{padding-left:15px}.table-row .table-cell[data-v-d6678dd0]:last-child{padding-right:15px;text-align:right}.table-row .table-cell span[data-v-d6678dd0]{font-size:1em;font-weight:700}",""])}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"/b5n":function(t,a,e){"use strict";var i=e("L4cV");e.n(i).a},"2Sb1":function(t,a,e){"use strict";var i={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:e("CjXH").d}},n=(e("qf9i"),e("KHd+")),o=Object(n.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-header"},[t.canBack?e("div",{staticClass:"go-back",on:{click:function(a){return t.$router.back()}}},[e("chevron-left-icon",{attrs:{size:"17"}})],1):t._e(),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.title))])])])}),[],!1,null,"aafe7e24",null);a.a=o.exports},"3Idf":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".page-header[data-v-aafe7e24]{display:flex;align-items:center;background:#fff;z-index:9;width:100%;position:-webkit-sticky;position:sticky;top:0;padding-top:20px;padding-bottom:20px}.page-header .title[data-v-aafe7e24]{font-size:1.125em;font-weight:700;color:#1b2539}.page-header .go-back[data-v-aafe7e24]{margin-right:10px;cursor:pointer}.page-header .go-back svg[data-v-aafe7e24]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:960px){.page-header .title[data-v-aafe7e24]{font-size:1.125em}}@media only screen and (max-width:690px){.page-header[data-v-aafe7e24]{display:none}}@media (prefers-color-scheme:dark){.page-header[data-v-aafe7e24]{background:#111314}.page-header .title[data-v-aafe7e24]{color:#bec6cf}.page-header .icon path[data-v-aafe7e24]{fill:#00bc7e}}",""])},"3YzQ":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".empty-page-content[data-v-2d45c340]{width:100%;height:100%;display:flex;align-items:center;text-align:center}.empty-page-content .content[data-v-2d45c340]{margin:0 auto;max-width:360px}.empty-page-content .content[data-v-2d45c340] .button-base{margin:0 auto}.empty-page-content .icon circle[data-v-2d45c340],.empty-page-content .icon line[data-v-2d45c340],.empty-page-content .icon path[data-v-2d45c340],.empty-page-content .icon polyline[data-v-2d45c340]{stroke:#00bc7e}.empty-page-content .header[data-v-2d45c340]{margin-top:15px;margin-bottom:25px}.empty-page-content .title[data-v-2d45c340]{font-size:1.4375em;font-weight:700;padding-bottom:5px}.empty-page-content .description[data-v-2d45c340]{font-size:1em;font-weight:500}",""])},"5XA5":function(t,a,e){var i=e("aUEw");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},"6TPS":function(t,a,e){"use strict";var i=e("CjXH"),n={props:["data"],computed:{normalizedColumns:function(){return this.data.id&&delete this.data.id,Object.values(this.data)}}},o=(e("FNZF"),e("KHd+")),s=Object(o.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticClass:"table-row"},t._l(t.normalizedColumns,(function(a,i){return e("td",{key:i,staticClass:"table-cell"},[e("span",[t._v(t._s(a))])])})),0)}),[],!1,null,"15a1e318",null).exports,r=(e("LvDl"),e("vDqi")),l=e.n(r),c={name:"DatatableWrapper",props:["columns","scope","paginator","api","tableData"],components:{ChevronRightIcon:i.e,ChevronLeftIcon:i.d,DatatableCell:s,ChevronUpIcon:i.f},computed:{hasData:function(){return this.data&&this.data.data&&this.data.data.length>0},floatPages:function(){return[this.pageIndex-1,this.pageIndex,this.pageIndex+1]}},data:function(){return{data:void 0,isLoading:!0,pageIndex:1,filter:{sort:"DESC",field:void 0}}},methods:{goToPage:function(t){t>this.data.meta.last_page||0===t||(this.pageIndex=t,this.getPage(t))},sort:function(t,a){a&&(this.filter.field=t,"DESC"===this.filter.sort?this.filter.sort="ASC":"ASC"===this.filter.sort&&(this.filter.sort="DESC"),this.getPage(this.pageIndex))},getPage:function(t){var a=this;this.URI=this.api,this.paginator&&(this.URI=this.URI+"?page="+t),this.filter.field&&(this.URI=this.URI+(this.paginator?"&":"?")+"sort="+this.filter.field+"&direction="+this.filter.sort),this.isLoading=!0,l.a.get(this.URI).then((function(t){a.data=t.data,a.$emit("data",t.data)})).catch((function(){return a.$isSomethingWrong()})).finally((function(){a.$emit("init",!0),a.isLoading=!1}))}},created:function(){this.api&&this.getPage(this.pageIndex),this.tableData&&(this.data=this.tableData,this.isLoading=!1)}},d=(e("HMoj"),Object(o.a)(c,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"datatable"},[t.hasData?e("table",{staticClass:"table"},[e("thead",{staticClass:"table-header"},[e("tr",t._l(t.columns,(function(a,i){return a.hidden?t._e():e("th",{key:i,class:{sortable:a.sortable},on:{click:function(e){return t.sort(a.field,a.sortable)}}},[e("span",[t._v(t._s(a.label))]),t._v(" "),a.sortable?e("chevron-up-icon",{staticClass:"filter-arrow",class:{"arrow-down":"ASC"===t.filter.sort},attrs:{size:"14"}}):t._e()],1)})),0)]),t._v(" "),e("tbody",{staticClass:"table-body"},[t._l(t.data.data,(function(a){return t._t("default",[e("DatatableCell",{key:a.id,attrs:{data:a}})],{row:a})}))],2)]):t._e(),t._v(" "),t.isLoading||t.hasData?t._e():t._t("empty-page"),t._v(" "),t.paginator&&t.hasData?e("div",{staticClass:"paginator-wrapper"},[t.data.meta.total>20&&t.data.meta.last_page<=6?e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item previous"},[e("a",{staticClass:"page-link",class:{disabled:0==t.pageIndex},on:{click:function(a){return t.goToPage(t.pageIndex-1)}}},[e("chevron-left-icon",{staticClass:"icon",attrs:{size:"14"}})],1)]),t._v(" "),t._l(6,(function(a,i){return e("li",{key:i,staticClass:"page-item",on:{click:function(e){return t.goToPage(a)}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===a}},[t._v("\n                    "+t._s(a)+"\n                ")])])})),t._v(" "),e("li",{staticClass:"page-item next"},[e("a",{staticClass:"page-link",class:{disabled:t.pageIndex+1==t.data.meta.last_page},on:{click:function(a){return t.goToPage(t.pageIndex+1)}}},[e("chevron-right-icon",{staticClass:"icon",attrs:{size:"14"}})],1)])],2):t._e(),t._v(" "),t.data.meta.total>20&&t.data.meta.last_page>6?e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item previous"},[e("a",{staticClass:"page-link",class:{disabled:0==t.pageIndex},on:{click:function(a){return t.goToPage(t.pageIndex-1)}}},[e("chevron-left-icon",{staticClass:"icon",attrs:{size:"14"}})],1)]),t._v(" "),t.pageIndex>=5?e("li",{staticClass:"page-item",on:{click:function(a){return t.goToPage(1)}}},[e("a",{staticClass:"page-link"},[t._v("\n                    1\n                ")])]):t._e(),t._v(" "),t._l(5,(function(a,i){return t.pageIndex<5?e("li",{key:i,staticClass:"page-item",on:{click:function(e){return t.goToPage(a)}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===a}},[t._v("\n                    "+t._s(a)+"\n                ")])]):t._e()})),t._v(" "),t.pageIndex>=5?e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link"},[t._v("...")])]):t._e(),t._v(" "),t._l(t.floatPages,(function(a,i){return t.pageIndex>=5&&t.pageIndex<t.data.meta.last_page-3?e("li",{key:i,staticClass:"page-item",on:{click:function(e){return t.goToPage(a)}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===a}},[t._v("\n                    "+t._s(a)+"\n                ")])]):t._e()})),t._v(" "),t.pageIndex<t.data.meta.last_page-3?e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link"},[t._v("...")])]):t._e(),t._v(" "),t._l(5,(function(a,i){return t.pageIndex>t.data.meta.last_page-4?e("li",{key:i,staticClass:"page-item",on:{click:function(a){t.goToPage(t.data.meta.last_page-(4-i))}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===t.data.meta.last_page-(4-i)}},[t._v("\n                    "+t._s(t.data.meta.last_page-(4-i))+"\n                ")])]):t._e()})),t._v(" "),t.pageIndex<t.data.meta.last_page-3?e("li",{staticClass:"page-item",on:{click:function(a){return t.goToPage(t.data.meta.last_page)}}},[e("a",{staticClass:"page-link"},[t._v("\n                    "+t._s(t.data.meta.last_page)+"\n                ")])]):t._e(),t._v(" "),e("li",{staticClass:"page-item next"},[e("a",{staticClass:"page-link",class:{disabled:t.pageIndex+1==t.data.meta.last_page},on:{click:function(a){return t.goToPage(t.pageIndex+1)}}},[e("chevron-right-icon",{staticClass:"icon",attrs:{size:"14"}})],1)])],2):t._e(),t._v(" "),e("span",{staticClass:"paginator-info"},[t._v(t._s(t.$t("datatable.paginate_info",{visible:t.data.meta.per_page,total:t.data.meta.total})))])]):t._e()],2)}),[],!1,null,"56f3a787",null));a.a=d.exports},"92Jy":function(t,a,e){"use strict";var i=e("qphJ");e.n(i).a},DbZS:function(t,a,e){"use strict";var i=e("J9xV");e.n(i).a},F11w:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".color-label[data-v-ffcb2882]{text-transform:capitalize;font-size:.75em;display:inline-block;border-radius:6px;font-weight:700;padding:4px 6px}.color-label.purple[data-v-ffcb2882]{color:#9d66fe;background:rgba(157,102,254,.1)}.color-label.yellow[data-v-ffcb2882]{color:#ffbd2d;background:rgba(255,189,45,.1)}.color-label.green[data-v-ffcb2882]{color:#00bc7e;background:rgba(0,188,126,.1)}.color-label.red[data-v-ffcb2882]{color:#fd397a;background:rgba(253,57,122,.1)}",""])},FNZF:function(t,a,e){"use strict";var i=e("Mrvf");e.n(i).a},"GAT/":function(t,a,e){"use strict";e.r(a);var i=e("6TPS"),n=e("t5U/"),o=e("KfIT"),s=e("xxrA"),r=e("D62o"),l=e("THmQ"),c=e("Nv84"),d=e("CjXH"),p=e("2Sb1"),b=e("kPoH"),f=e("zTYo"),g=e("L2JU");e("vDqi");function u(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,i)}return e}function v(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?u(Object(e),!0).forEach((function(a){h(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function h(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var m={name:"Plans",components:{MobileActionButton:n.a,EmptyPageContent:o.a,DatatableWrapper:i.a,SectionTitle:l.a,MobileHeader:r.a,SwitchInput:s.a,Trash2Icon:d.Q,PageHeader:p.a,ButtonBase:c.a,ColorLabel:b.a,Edit2Icon:d.m,Spinner:f.a},computed:v(v({},Object(g.b)(["config"])),{},{isEmptyPlans:function(){return!this.isLoading&&0===this.plans.length&&this.config.stripe_public_key},stripeIsNotConfigured:function(){return!this.config.stripe_public_key},stripeConfiguredWithPlans:function(){return!this.isLoading&&this.config.stripe_public_key}}),data:function(){return{isLoading:!0,plans:[],columns:[{label:this.$t("admin_page_plans.table.status"),field:"data.attributes.status",sortable:!1},{label:this.$t("admin_page_plans.table.name"),field:"data.attributes.name",sortable:!1},{label:this.$t("admin_page_plans.table.subscribers"),field:"data.attributes.subscribers",sortable:!1},{label:this.$t("admin_page_plans.table.price"),field:"data.attributes.price",sortable:!1},{label:this.$t("admin_page_plans.table.storage_capacity"),field:"data.attributes.capacity",sortable:!1},{label:this.$t("admin_page_user.table.action"),sortable:!1}]}},methods:{changeStatus:function(t,a){this.$updateText("/plans/"+a+"/update","is_active",t)}},created:function(){this.config.stripe_public_key||(this.isLoading=!1)}},_=(e("DbZS"),e("KHd+")),x=Object(_.a)(m,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"single-page"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.stripeConfiguredWithPlans,expression:"stripeConfiguredWithPlans"}],attrs:{id:"page-content"}},[e("MobileHeader",{attrs:{title:t.$router.currentRoute.meta.title}}),t._v(" "),e("PageHeader",{attrs:{title:t.$router.currentRoute.meta.title}}),t._v(" "),t.config.stripe_public_key?e("div",{staticClass:"content-page"},[e("div",{staticClass:"table-tools"},[e("div",{staticClass:"buttons"},[e("router-link",{attrs:{to:{name:"PlanCreate"}}},[e("MobileActionButton",{attrs:{icon:"plus"}},[t._v("\n                            "+t._s(t.$t("admin_page_plans.create_plan_button"))+"\n                        ")])],1)],1),t._v(" "),e("div",{staticClass:"searching"})]),t._v(" "),e("DatatableWrapper",{staticClass:"table table-users",attrs:{api:"/api/plans",paginator:!1,columns:t.columns},on:{data:function(a){t.plans=a},init:function(a){t.isLoading=!1}},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.row;return[e("tr",[e("td",{staticStyle:{"max-width":"80px"}},[e("span",{staticClass:"cell-item"},[e("SwitchInput",{staticClass:"switch",attrs:{state:i.data.attributes.status},on:{input:function(a){return t.changeStatus(a,i.data.id)}}})],1)]),t._v(" "),e("td",{staticClass:"name",staticStyle:{"min-width":"120px"}},[e("router-link",{staticClass:"cell-item",attrs:{to:{name:"PlanSettings",params:{id:i.data.id}},tag:"div"}},[e("span",[t._v(t._s(i.data.attributes.name))])])],1),t._v(" "),e("td",[e("span",{staticClass:"cell-item"},[t._v("\n                                "+t._s(i.data.attributes.subscribers)+"\n                            ")])]),t._v(" "),e("td",[e("span",{staticClass:"cell-item"},[t._v("\n                                "+t._s(i.data.attributes.price_formatted)+"\n                            ")])]),t._v(" "),e("td",[e("span",{staticClass:"cell-item"},[t._v("\n                                "+t._s(i.data.attributes.capacity_formatted)+"\n                            ")])]),t._v(" "),e("td",[e("div",{staticClass:"action-icons"},[e("router-link",{attrs:{to:{name:"PlanSettings",params:{id:i.data.id}}}},[e("edit-2-icon",{staticClass:"icon icon-edit",attrs:{size:"15"}})],1),t._v(" "),e("router-link",{attrs:{to:{name:"PlanDelete",params:{id:i.data.id}}}},[e("trash2-icon",{staticClass:"icon icon-trash",attrs:{size:"15"}})],1)],1)])])]}}],null,!1,3279855567)})],1):t._e()],1),t._v(" "),t.isEmptyPlans?e("EmptyPageContent",{attrs:{icon:"file",title:t.$t("admin_page_plans.empty.title"),description:t.$t("admin_page_plans.empty.description")}},[e("router-link",{attrs:{to:{name:"PlanCreate"},tag:"p"}},[e("ButtonBase",{attrs:{"button-style":"theme"}},[t._v(t._s(t.$t("admin_page_plans.empty.button")))])],1)],1):t._e(),t._v(" "),t.stripeIsNotConfigured?e("EmptyPageContent",{attrs:{icon:"settings",title:t.$t("activation.stripe.title"),description:t.$t("activation.stripe.description")}},[e("router-link",{attrs:{to:{name:"AppPayments"}}},[e("ButtonBase",{attrs:{"button-style":"theme"}},[t._v(t._s(t.$t("activation.stripe.button")))])],1)],1):t._e(),t._v(" "),t.isLoading?e("div",{attrs:{id:"loader"}},[e("Spinner")],1):t._e()],1)}),[],!1,null,"38c2ecdb",null);a.default=x.exports},GkQO:function(t,a,e){"use strict";var i=e("J5Z7");e.n(i).a},HMoj:function(t,a,e){"use strict";var i=e("5XA5");e.n(i).a},J5Z7:function(t,a,e){var i=e("F11w");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},J9xV:function(t,a,e){var i=e("mu07");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},KPNK:function(t,a,e){var i=e("3Idf");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},KbUq:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".table-row[data-v-15a1e318]{border-radius:8px}.table-row[data-v-15a1e318]:hover{background:#f4f5f6}.table-row .table-cell[data-v-15a1e318]{padding-top:15px;padding-bottom:15px}.table-row .table-cell[data-v-15a1e318]:first-child{padding-left:15px}.table-row .table-cell[data-v-15a1e318]:last-child{padding-right:15px;text-align:right}.table-row .table-cell span[data-v-15a1e318]{font-size:1em;font-weight:700}",""])},KfIT:function(t,a,e){"use strict";var i=e("CjXH"),n={name:"EmptyPageContent",props:["icon","title","description"],components:{SettingsIcon:i.N,FileTextIcon:i.r,FileIcon:i.q}},o=(e("oeGM"),e("KHd+")),s=Object(o.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"empty-page-content"},[e("div",{staticClass:"content"},[e("div",{staticClass:"icon"},["file"===t.icon?e("file-icon",{attrs:{size:"38"}}):t._e(),t._v(" "),"file-text"===t.icon?e("file-text-icon",{attrs:{size:"38"}}):t._e(),t._v(" "),"settings"===t.icon?e("settings-icon",{attrs:{size:"38"}}):t._e()],1),t._v(" "),e("div",{staticClass:"header"},[e("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("h2",{staticClass:"description"},[t._v(t._s(t.description))])]),t._v(" "),t._t("default")],2)])}),[],!1,null,"2d45c340",null);a.a=s.exports},L4cV:function(t,a,e){var i=e("UgoL");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},Mrvf:function(t,a,e){var i=e("KbUq");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},THmQ:function(t,a,e){"use strict";var i={name:"SectionTitle"},n=(e("92Jy"),e("KHd+")),o=Object(n.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"69d97df2",null);a.a=o.exports},UgoL:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".mobile-action-button[data-v-8b0e9378]{background:#f4f5f6;margin-right:15px;border-radius:8px;padding:7px 10px;cursor:pointer;border:none;transition:all .15s ease}.mobile-action-button .flex[data-v-8b0e9378]{display:flex;align-items:center}.mobile-action-button .icon[data-v-8b0e9378]{margin-right:10px;font-size:.875em}.mobile-action-button .icon circle[data-v-8b0e9378],.mobile-action-button .icon line[data-v-8b0e9378],.mobile-action-button .icon path[data-v-8b0e9378],.mobile-action-button .icon polyline[data-v-8b0e9378],.mobile-action-button .icon rect[data-v-8b0e9378]{transition:all .15s ease}.mobile-action-button .label[data-v-8b0e9378]{transition:all .15s ease;font-size:.875em;font-weight:700;color:#1b2539}.mobile-action-button[data-v-8b0e9378]:active{transform:scale(.95)}.mobile-action-button[data-v-8b0e9378]:hover{background:rgba(0,188,126,.1)}.mobile-action-button:hover .icon circle[data-v-8b0e9378],.mobile-action-button:hover .icon line[data-v-8b0e9378],.mobile-action-button:hover .icon path[data-v-8b0e9378],.mobile-action-button:hover .icon polyline[data-v-8b0e9378],.mobile-action-button:hover .icon rect[data-v-8b0e9378]{stroke:#00bc7e}.mobile-action-button:hover .label[data-v-8b0e9378]{color:#00bc7e}@media (prefers-color-scheme:dark){.mobile-action-button[data-v-8b0e9378]{background:#1e2024}.mobile-action-button circle[data-v-8b0e9378],.mobile-action-button line[data-v-8b0e9378],.mobile-action-button path[data-v-8b0e9378],.mobile-action-button polyline[data-v-8b0e9378],.mobile-action-button rect[data-v-8b0e9378]{stroke:#00bc7e}.mobile-action-button .label[data-v-8b0e9378]{color:#bec6cf}}",""])},aUEw:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".datatable[data-v-56f3a787]{height:100%}.table-row[data-v-56f3a787]{transition:all .3s ease}.table-row-enter[data-v-56f3a787],.table-row-leave-to[data-v-56f3a787]{opacity:0;transform:translateY(-100%)}.table-row-leave-active[data-v-56f3a787]{position:absolute}.table[data-v-56f3a787]{border-collapse:collapse;overflow-x:auto}.table[data-v-56f3a787],.table tr[data-v-56f3a787]{width:100%}.table tr td[data-v-56f3a787]:first-child,.table tr th[data-v-56f3a787]:first-child{padding-left:15px}.table tr td[data-v-56f3a787]:last-child,.table tr th[data-v-56f3a787]:last-child{padding-right:15px;text-align:right}.table .table-header[data-v-56f3a787]{margin-bottom:10px}.table .table-header tr td[data-v-56f3a787],.table .table-header tr th[data-v-56f3a787]{padding:12px;text-align:left}.table .table-header tr td span[data-v-56f3a787],.table .table-header tr th span[data-v-56f3a787]{color:#00bc7e;font-weight:700;font-size:.75em;white-space:nowrap}.table .table-header tr td.sortable[data-v-56f3a787],.table .table-header tr th.sortable[data-v-56f3a787]{cursor:pointer}.table .table-header tr td.sortable:hover .filter-arrow[data-v-56f3a787],.table .table-header tr th.sortable:hover .filter-arrow[data-v-56f3a787]{opacity:1}.table .table-header tr td[data-v-56f3a787]:last-child,.table .table-header tr th[data-v-56f3a787]:last-child{text-align:right}.table .table-header .filter-arrow[data-v-56f3a787]{vertical-align:middle;margin-left:8px;transition:all .3s ease;opacity:0}.table .table-header .filter-arrow path[data-v-56f3a787]{fill:rgba(27,37,57,.7)}.table .table-header .filter-arrow.arrow-down[data-v-56f3a787]{transform:rotate(180deg)}.table .table-header span[data-v-56f3a787]{font-size:13px;color:rgba(27,37,57,.7);font-weight:700}.table .table-body tr[data-v-56f3a787]{border-radius:8px}.table .table-body tr[data-v-56f3a787]:hover{background:#f4f5f6}.table .table-body tr td[data-v-56f3a787],.table .table-body tr th[data-v-56f3a787]{padding:12px}.table .table-body tr td:last-child button[data-v-56f3a787],.table .table-body tr th:last-child button[data-v-56f3a787]{margin-right:0}.table .table-body a.page-link[data-v-56f3a787],.table .table-body span[data-v-56f3a787]{font-size:.9375em;font-weight:700;padding:10px 35px 10px 0;display:block;white-space:nowrap}.pagination .page-item[data-v-56f3a787]{padding:3px;display:inline-block}.pagination .page-link[data-v-56f3a787]{width:30px;height:30px;display:block;color:#1b2539;border-radius:6px;text-align:center;line-height:2.4;font-weight:700;font-size:13px;cursor:pointer;transition:all .15s ease}.pagination .page-link .icon[data-v-56f3a787]{vertical-align:middle;margin-top:-2px}.pagination .page-link.active[data-v-56f3a787],.pagination .page-link[data-v-56f3a787]:hover:not(.disabled){background:#f4f5f6;color:#1b2539}.pagination .page-link.disabled[data-v-56f3a787]{background:transparent;cursor:default}.pagination .page-link.disabled svg path[data-v-56f3a787]{fill:rgba(27,37,57,.7)}.paginator-wrapper[data-v-56f3a787]{margin-top:30px;margin-bottom:40px;display:flex;justify-content:space-between;align-items:center}.paginator-wrapper .paginator-info[data-v-56f3a787]{font-size:13px;color:rgba(27,37,57,.7)}.user-preview[data-v-56f3a787]{display:flex;align-items:center;cursor:pointer}.user-preview img[data-v-56f3a787]{width:45px;margin-right:22px}@media only screen and (max-width:690px){.paginator-wrapper[data-v-56f3a787]{display:block;text-align:center}.paginator-wrapper .paginator-info[data-v-56f3a787]{margin-top:10px;display:block}}@media (prefers-color-scheme:dark){.table .table-header tr td span[data-v-56f3a787],.table .table-header tr th span[data-v-56f3a787]{color:#00bc7e}.table .table-body th[data-v-56f3a787]:hover,.table .table-body tr[data-v-56f3a787]:hover{background:#1e2024}.pagination .page-link[data-v-56f3a787],.paginator-wrapper .paginator-info[data-v-56f3a787]{color:#7d858c}.pagination .page-link svg polyline[data-v-56f3a787]{stroke:#bec6cf}.pagination .page-link.active[data-v-56f3a787],.pagination .page-link[data-v-56f3a787]:hover:not(.disabled){color:#00bc7e;background:rgba(0,188,126,.1)}.pagination .page-link.disabled[data-v-56f3a787]{background:transparent;cursor:default}.pagination .page-link.disabled svg polyline[data-v-56f3a787]{stroke:#7d858c}}",""])},kPoH:function(t,a,e){"use strict";var i={name:"ColorLabel",props:["color"]},n=(e("GkQO"),e("KHd+")),o=Object(n.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("b",{staticClass:"color-label",class:this.color},[this._t("default")],2)}),[],!1,null,"ffcb2882",null);a.a=o.exports},lW02:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".text-label[data-v-69d97df2]{font-size:.75em;color:#afafaf;font-weight:700;display:block;margin-bottom:20px}@media (prefers-color-scheme:dark){.text-label[data-v-69d97df2]{color:#00bc7e}}",""])},mu07:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".table-tools[data-v-38c2ecdb]{background:#fff;display:flex;justify-content:space-between;padding:15px 0 10px;position:-webkit-sticky;position:sticky;top:40px;z-index:9}.table .cell-item[data-v-38c2ecdb]{font-size:.9375em;white-space:nowrap}.table .name[data-v-38c2ecdb]{font-weight:700;cursor:pointer}@media only screen and (max-width:690px){.table-tools[data-v-38c2ecdb]{padding:0 0 5px}}@media (prefers-color-scheme:dark){.table-tools[data-v-38c2ecdb]{background:#111314}.action-icons .icon[data-v-38c2ecdb]{cursor:pointer}.action-icons .icon circle[data-v-38c2ecdb],.action-icons .icon line[data-v-38c2ecdb],.action-icons .icon path[data-v-38c2ecdb],.action-icons .icon polyline[data-v-38c2ecdb]{stroke:#bec6cf}.user-thumbnail .info .email[data-v-38c2ecdb]{color:#7d858c}}",""])},oeGM:function(t,a,e){"use strict";var i=e("xjpg");e.n(i).a},qf9i:function(t,a,e){"use strict";var i=e("KPNK");e.n(i).a},qphJ:function(t,a,e){var i=e("lW02");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)},"t5U/":function(t,a,e){"use strict";var i=e("CjXH"),n={name:"MobileActionButton",props:["icon"],components:{CreditCardIcon:i.j,FolderPlusIcon:i.t,UserPlusIcon:i.V,TrashIcon:i.R,PlusIcon:i.I,ListIcon:i.B,GridIcon:i.u}},o=(e("/b5n"),e("KHd+")),s=Object(o.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"mobile-action-button"},[e("div",{staticClass:"flex"},["credit-card"===t.icon?e("credit-card-icon",{staticClass:"icon",attrs:{size:"15"}}):t._e(),t._v(" "),"folder-plus"===t.icon?e("folder-plus-icon",{staticClass:"icon",attrs:{size:"15"}}):t._e(),t._v(" "),"th-list"===t.icon?e("list-icon",{staticClass:"icon",attrs:{size:"15"}}):t._e(),t._v(" "),"trash"===t.icon?e("trash-icon",{staticClass:"icon",attrs:{size:"15"}}):t._e(),t._v(" "),"th"===t.icon?e("grid-icon",{staticClass:"icon",attrs:{size:"15"}}):t._e(),t._v(" "),"user-plus"===t.icon?e("user-plus-icon",{staticClass:"icon",attrs:{size:"15"}}):t._e(),t._v(" "),"plus"===t.icon?e("plus-icon",{staticClass:"icon",attrs:{size:"15"}}):t._e(),t._v(" "),e("span",{staticClass:"label"},[t._t("default")],2)],1)])}),[],!1,null,"8b0e9378",null);a.a=s.exports},xjpg:function(t,a,e){var i=e("3YzQ");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(t.exports=i.locals)}}]);
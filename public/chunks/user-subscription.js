(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"1L+q":function(t,a,e){"use strict";e("4EzG")},"3sV/":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".page-tab-group[data-v-445d3e0e]{margin-bottom:65px}",""])},"4EzG":function(t,a,e){var i=e("jexE");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,s);i.locals&&(t.exports=i.locals)},"5hN9":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,"",""])},"5uHn":function(t,a,e){var i=e("VLR+");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,s);i.locals&&(t.exports=i.locals)},"6TPS":function(t,a,e){"use strict";var i=e("CjXH"),s={props:["data"],computed:{normalizedColumns:function(){return this.data.id&&delete this.data.id,Object.values(this.data)}}},n=(e("YLwN"),e("KHd+")),o=Object(n.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticClass:"table-row"},t._l(t.normalizedColumns,(function(a,i){return e("td",{key:i,staticClass:"table-cell"},[e("span",[t._v(t._s(a))])])})),0)}),[],!1,null,"b0f3a8d0",null).exports,r=e("vDqi"),l=e.n(r),d={name:"DatatableWrapper",props:["columns","scope","paginator","api","tableData"],components:{ChevronRightIcon:i.i,ChevronLeftIcon:i.h,DatatableCell:o,ChevronUpIcon:i.j},computed:{hasData:function(){return this.data&&this.data.data&&this.data.data.length>0},floatPages:function(){return[this.pageIndex-1,this.pageIndex,this.pageIndex+1]}},data:function(){return{data:void 0,isLoading:!0,pageIndex:1,filter:{sort:"DESC",field:void 0}}},methods:{goToPage:function(t){t>this.data.meta.last_page||0===t||(this.pageIndex=t,this.getPage(t))},sort:function(t,a){a&&(this.filter.field=t,"DESC"===this.filter.sort?this.filter.sort="ASC":"ASC"===this.filter.sort&&(this.filter.sort="DESC"),this.getPage(this.pageIndex))},getPage:function(t){var a=this;this.URI=this.api,this.paginator&&(this.URI=this.URI+"?page="+t),this.filter.field&&(this.URI=this.URI+(this.paginator?"&":"?")+"sort="+this.filter.field+"&direction="+this.filter.sort),this.isLoading=!0,l.a.get(this.URI).then((function(t){a.data=t.data,a.$emit("data",t.data)})).catch((function(){return a.$isSomethingWrong()})).finally((function(){a.$emit("init",!0),a.isLoading=!1}))}},created:function(){this.api&&this.getPage(this.pageIndex),this.tableData&&(this.data=this.tableData,this.isLoading=!1)}},c=(e("BL2S"),Object(n.a)(d,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"datatable"},[t.hasData?e("table",{staticClass:"table"},[e("thead",{staticClass:"table-header"},[e("tr",t._l(t.columns,(function(a,i){return a.hidden?t._e():e("th",{key:i,class:{sortable:a.sortable},on:{click:function(e){return t.sort(a.field,a.sortable)}}},[e("span",{staticClass:"text-theme"},[t._v(t._s(a.label))]),t._v(" "),a.sortable?e("chevron-up-icon",{staticClass:"filter-arrow",class:{"arrow-down":"ASC"===t.filter.sort},attrs:{size:"14"}}):t._e()],1)})),0)]),t._v(" "),e("tbody",{staticClass:"table-body"},[t._l(t.data.data,(function(a){return t._t("default",[e("DatatableCell",{key:a.id,attrs:{data:a}})],{row:a})}))],2)]):t._e(),t._v(" "),t.isLoading||t.hasData?t._e():t._t("empty-page"),t._v(" "),t.paginator&&t.hasData?e("div",{staticClass:"paginator-wrapper"},[t.data.meta.total>20&&t.data.meta.last_page<=6?e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item previous"},[e("a",{staticClass:"page-link",class:{disabled:0==t.pageIndex},on:{click:function(a){return t.goToPage(t.pageIndex-1)}}},[e("chevron-left-icon",{staticClass:"icon",attrs:{size:"14"}})],1)]),t._v(" "),t._l(6,(function(a,i){return e("li",{key:i,staticClass:"page-item",on:{click:function(e){return t.goToPage(a)}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===a}},[t._v("\n                    "+t._s(a)+"\n                ")])])})),t._v(" "),e("li",{staticClass:"page-item next"},[e("a",{staticClass:"page-link",class:{disabled:t.pageIndex+1==t.data.meta.last_page},on:{click:function(a){return t.goToPage(t.pageIndex+1)}}},[e("chevron-right-icon",{staticClass:"icon",attrs:{size:"14"}})],1)])],2):t._e(),t._v(" "),t.data.meta.total>20&&t.data.meta.last_page>6?e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item previous"},[e("a",{staticClass:"page-link",class:{disabled:0==t.pageIndex},on:{click:function(a){return t.goToPage(t.pageIndex-1)}}},[e("chevron-left-icon",{staticClass:"icon",attrs:{size:"14"}})],1)]),t._v(" "),t.pageIndex>=5?e("li",{staticClass:"page-item",on:{click:function(a){return t.goToPage(1)}}},[e("a",{staticClass:"page-link"},[t._v("\n                    1\n                ")])]):t._e(),t._v(" "),t._l(5,(function(a,i){return t.pageIndex<5?e("li",{key:i,staticClass:"page-item",on:{click:function(e){return t.goToPage(a)}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===a}},[t._v("\n                    "+t._s(a)+"\n                ")])]):t._e()})),t._v(" "),t.pageIndex>=5?e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link"},[t._v("...")])]):t._e(),t._v(" "),t._l(t.floatPages,(function(a,i){return t.pageIndex>=5&&t.pageIndex<t.data.meta.last_page-3?e("li",{key:i,staticClass:"page-item",on:{click:function(e){return t.goToPage(a)}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===a}},[t._v("\n                    "+t._s(a)+"\n                ")])]):t._e()})),t._v(" "),t.pageIndex<t.data.meta.last_page-3?e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link"},[t._v("...")])]):t._e(),t._v(" "),t._l(5,(function(a,i){return t.pageIndex>t.data.meta.last_page-4?e("li",{key:i,staticClass:"page-item",on:{click:function(a){t.goToPage(t.data.meta.last_page-(4-i))}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===t.data.meta.last_page-(4-i)}},[t._v("\n                    "+t._s(t.data.meta.last_page-(4-i))+"\n                ")])]):t._e()})),t._v(" "),t.pageIndex<t.data.meta.last_page-3?e("li",{staticClass:"page-item",on:{click:function(a){return t.goToPage(t.data.meta.last_page)}}},[e("a",{staticClass:"page-link"},[t._v("\n                    "+t._s(t.data.meta.last_page)+"\n                ")])]):t._e(),t._v(" "),e("li",{staticClass:"page-item next"},[e("a",{staticClass:"page-link",class:{disabled:t.pageIndex+1==t.data.meta.last_page},on:{click:function(a){return t.goToPage(t.pageIndex+1)}}},[e("chevron-right-icon",{staticClass:"icon",attrs:{size:"14"}})],1)])],2):t._e(),t._v(" "),e("span",{staticClass:"paginator-info"},[t._v(t._s(t.$t("datatable.paginate_info",{visible:t.data.meta.per_page,total:t.data.meta.total})))])]):t._e()],2)}),[],!1,null,"bee2ed74",null));a.a=c.exports},"8N1S":function(t,a,e){var i=e("3sV/");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,s);i.locals&&(t.exports=i.locals)},"8YPn":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,"",""])},"9sCX":function(t,a,e){"use strict";e("8N1S")},BL2S:function(t,a,e){"use strict";e("XG7Q")},BfOa:function(t,a,e){var i=e("5hN9");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,s);i.locals&&(t.exports=i.locals)},CK9m:function(t,a,e){var i=e("Wx07");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,s);i.locals&&(t.exports=i.locals)},CtGM:function(t,a,e){"use strict";e.r(a);var i=e("6TPS"),s=e("gahf"),n=e("gy3V"),o=e("eZ9V"),r=e("Nv84"),l=e("qefO"),d=e("KnjL"),c=e("VPMc"),p=e("CjXH"),b=(e("xCqy"),e("vDqi")),f=e.n(b),u={name:"UserSubscription",components:{ExternalLinkIcon:p.v,DatatableWrapper:i.a,ListInfoItem:n.a,PageTabGroup:s.a,ButtonBase:r.a,FormLabel:o.a,ListInfo:c.a,InfoBox:d.a,PageTab:l.a},computed:{status:function(){return this.subscription.attributes.incomplete?this.$t("global.incomplete"):this.subscription.attributes.canceled?this.$t("global.canceled"):this.subscription.attributes.active?this.$t("global.active"):void 0}},data:function(){return{subscription:void 0,isLoading:!0}},created:function(){var t=this;f.a.get("/api/admin/users/"+this.$route.params.id+"/subscription").then((function(a){t.subscription=a.data.data,t.isLoading=!1})).catch((function(a){404==a.response.status&&(t.isLoading=!1)}))}},g=(e("UAWh"),e("KHd+")),v=Object(g.a)(u,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("PageTab",{staticClass:"form-fixed-width",attrs:{"is-loading":t.isLoading}},[t.subscription&&!t.isLoading?e("PageTabGroup",[e("FormLabel",[t._v("\n            "+t._s(t.$t("user_subscription.title"))+"\n        ")]),t._v(" "),t.subscription.attributes.canceled?t._e():e("div",{staticClass:"state active"},[e("ListInfo",{staticClass:"list-info"},[e("ListInfoItem",{staticClass:"list-item",attrs:{title:t.$t("user_subscription.plan"),content:t.subscription.attributes.name+" - "+t.subscription.attributes.capacity_formatted}}),t._v(" "),e("ListInfoItem",{staticClass:"list-item",attrs:{title:t.$t("user_subscription.billed"),content:t.$t("admin_page_user.subscription.interval_mo")}}),t._v(" "),e("ListInfoItem",{staticClass:"list-item",attrs:{title:t.$t("user_subscription.status"),content:t.status}}),t._v(" "),e("ListInfoItem",{staticClass:"list-item capitalize",attrs:{title:t.$t("user_subscription.created_at"),content:t.subscription.attributes.created_at}}),t._v(" "),e("ListInfoItem",{staticClass:"list-item capitalize",attrs:{title:t.$t("user_subscription.renews_at"),content:t.subscription.attributes.ends_at}})],1)],1),t._v(" "),t.subscription.attributes.canceled?e("div",{staticClass:"state canceled"},[e("ListInfo",{staticClass:"list-info"},[e("ListInfoItem",{staticClass:"list-item",attrs:{title:t.$t("user_subscription.plan"),content:t.subscription.attributes.name+" - "+t.subscription.attributes.capacity_formatted}}),t._v(" "),e("ListInfoItem",{staticClass:"list-item",attrs:{title:t.$t("user_subscription.status"),content:t.status}}),t._v(" "),e("ListInfoItem",{staticClass:"list-item capitalize",attrs:{title:t.$t("user_subscription.canceled_at"),content:t.subscription.attributes.canceled_at}}),t._v(" "),e("ListInfoItem",{staticClass:"list-item capitalize",attrs:{title:t.$t("user_subscription.ends_at"),content:t.subscription.attributes.ends_at}})],1)],1):t._e()],1):t._e(),t._v(" "),t.subscription||t.isLoading?t._e():e("PageTabGroup",[e("InfoBox",[e("p",[t._v(t._s(t.$t("admin_page_user.subscription.empty")))])])],1)],1)}),[],!1,null,"2f71072c",null);a.default=v.exports},HucI:function(t,a,e){"use strict";e("pToe")},J5Vd:function(t,a,e){var i=e("uGNG");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,s);i.locals&&(t.exports=i.locals)},KnjL:function(t,a,e){"use strict";var i={name:"InfoBox",props:["type"]},s=(e("pFam"),e("KHd+")),n=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"8e7c42f6",null);a.a=n.exports},LvH8:function(t,a,e){"use strict";e("J5Vd")},"Qqv+":function(t,a,e){var i=e("biqn");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,s);i.locals&&(t.exports=i.locals)},SdtT:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".datatable[data-v-bee2ed74]{height:100%}.table-row[data-v-bee2ed74]{transition:all .3s ease}.table-row-enter[data-v-bee2ed74],.table-row-leave-to[data-v-bee2ed74]{opacity:0;transform:translateY(-100%)}.table-row-leave-active[data-v-bee2ed74]{position:absolute}.table[data-v-bee2ed74]{border-collapse:collapse;overflow-x:auto}.table[data-v-bee2ed74],.table tr[data-v-bee2ed74]{width:100%}.table tr td[data-v-bee2ed74]:first-child,.table tr th[data-v-bee2ed74]:first-child{padding-left:15px}.table tr td[data-v-bee2ed74]:last-child,.table tr th[data-v-bee2ed74]:last-child{padding-right:15px;text-align:right}.table .table-header[data-v-bee2ed74]{margin-bottom:10px}.table .table-header tr td[data-v-bee2ed74],.table .table-header tr th[data-v-bee2ed74]{padding:12px;text-align:left}.table .table-header tr td span[data-v-bee2ed74],.table .table-header tr th span[data-v-bee2ed74]{font-weight:700;font-size:.75em;white-space:nowrap}.table .table-header tr td.sortable[data-v-bee2ed74],.table .table-header tr th.sortable[data-v-bee2ed74]{cursor:pointer}.table .table-header tr td.sortable:hover .filter-arrow[data-v-bee2ed74],.table .table-header tr th.sortable:hover .filter-arrow[data-v-bee2ed74]{opacity:1}.table .table-header tr td[data-v-bee2ed74]:last-child,.table .table-header tr th[data-v-bee2ed74]:last-child{text-align:right}.table .table-header .filter-arrow[data-v-bee2ed74]{vertical-align:middle;margin-left:8px;transition:all .3s ease;opacity:0}.table .table-header .filter-arrow path[data-v-bee2ed74]{fill:rgba(27,37,57,.7)}.table .table-header .filter-arrow.arrow-down[data-v-bee2ed74]{transform:rotate(180deg)}.table .table-header span[data-v-bee2ed74]{font-size:13px;font-weight:700}.table .table-body tr[data-v-bee2ed74]{border-radius:8px}.table .table-body tr[data-v-bee2ed74]:hover{background:#f4f5f6}.table .table-body tr td[data-v-bee2ed74],.table .table-body tr th[data-v-bee2ed74]{padding:12px}.table .table-body tr td:last-child button[data-v-bee2ed74],.table .table-body tr th:last-child button[data-v-bee2ed74]{margin-right:0}.table .table-body a.page-link[data-v-bee2ed74],.table .table-body span[data-v-bee2ed74]{font-size:.9375em;font-weight:700;padding:10px 35px 10px 0;display:block;white-space:nowrap}.pagination .page-item[data-v-bee2ed74]{padding:3px;display:inline-block}.pagination .page-link[data-v-bee2ed74]{width:30px;height:30px;display:block;color:#1b2539;border-radius:6px;text-align:center;line-height:2.4;font-weight:700;font-size:13px;cursor:pointer;transition:all .15s ease}.pagination .page-link .icon[data-v-bee2ed74]{vertical-align:middle;margin-top:-2px}.pagination .page-link.active[data-v-bee2ed74],.pagination .page-link[data-v-bee2ed74]:hover:not(.disabled){background:#f4f5f6;color:#1b2539}.pagination .page-link.disabled[data-v-bee2ed74]{background:transparent;cursor:default}.pagination .page-link.disabled svg path[data-v-bee2ed74]{fill:rgba(27,37,57,.7)}.paginator-wrapper[data-v-bee2ed74]{margin-top:30px;margin-bottom:40px;display:flex;justify-content:space-between;align-items:center}.paginator-wrapper .paginator-info[data-v-bee2ed74]{font-size:13px;color:rgba(27,37,57,.7)}.user-preview[data-v-bee2ed74]{display:flex;align-items:center;cursor:pointer}.user-preview img[data-v-bee2ed74]{width:45px;margin-right:22px}@media only screen and (max-width:690px){.paginator-wrapper[data-v-bee2ed74]{display:block;text-align:center}.paginator-wrapper .paginator-info[data-v-bee2ed74]{margin-top:10px;display:block}}@media (prefers-color-scheme:dark){.table .table-body th[data-v-bee2ed74]:hover,.table .table-body tr[data-v-bee2ed74]:hover{background:#1e2024}.pagination .page-link[data-v-bee2ed74],.paginator-wrapper .paginator-info[data-v-bee2ed74]{color:#7d858c}.pagination .page-link svg polyline[data-v-bee2ed74]{stroke:#bec6cf}.pagination .page-link.active[data-v-bee2ed74],.pagination .page-link[data-v-bee2ed74]:hover:not(.disabled){color:#00bc7e;background:rgba(0,188,126,.1)}.pagination .page-link.disabled[data-v-bee2ed74]{background:transparent;cursor:default}.pagination .page-link.disabled svg polyline[data-v-bee2ed74]{stroke:#7d858c}}",""])},UAWh:function(t,a,e){"use strict";e("5uHn")},"VLR+":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".cancel-plan[data-v-2f71072c]{margin-top:10px}.list-info[data-v-2f71072c]{display:flex;flex-wrap:wrap}.list-info .list-item[data-v-2f71072c]{flex:0 0 50%}",""])},VPMc:function(t,a,e){"use strict";var i={name:"ListInfo"},s=(e("HucI"),e("KHd+")),n=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("ul",{staticClass:"list-info"},[this._t("default")],2)}),[],!1,null,"fc1884d8",null);a.a=n.exports},Wx07:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".table-row[data-v-b0f3a8d0]{border-radius:8px}.table-row[data-v-b0f3a8d0]:hover{background:#f4f5f6}.table-row .table-cell[data-v-b0f3a8d0]{padding-top:15px;padding-bottom:15px}.table-row .table-cell[data-v-b0f3a8d0]:first-child{padding-left:15px}.table-row .table-cell[data-v-b0f3a8d0]:last-child{padding-right:15px;text-align:right}.table-row .table-cell span[data-v-b0f3a8d0]{font-size:1em;font-weight:700}",""])},XG7Q:function(t,a,e){var i=e("SdtT");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,s);i.locals&&(t.exports=i.locals)},YLwN:function(t,a,e){"use strict";e("CK9m")},biqn:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".info-box[data-v-8e7c42f6]{padding:20px;border-radius:8px;margin-bottom:32px;background:#f4f5f6;text-align:left}.info-box.error[data-v-8e7c42f6]{background:rgba(253,57,122,.1)}.info-box.error a[data-v-8e7c42f6],.info-box.error p[data-v-8e7c42f6]{color:#fd397a}.info-box.error a[data-v-8e7c42f6]{text-decoration:underline}.info-box p[data-v-8e7c42f6]{line-height:1.6;word-break:break-word;font-weight:600}.info-box p[data-v-8e7c42f6],.info-box p[data-v-8e7c42f6] a{font-size:15px}.info-box p[data-v-8e7c42f6] b{font-size:15px;font-weight:700}.info-box a[data-v-8e7c42f6],.info-box b[data-v-8e7c42f6]{font-weight:700}.info-box a[data-v-8e7c42f6]{font-size:.9375em;line-height:1.6}.info-box ul[data-v-8e7c42f6]{margin-top:15px}.info-box ul[data-v-8e7c42f6],.info-box ul li[data-v-8e7c42f6],.info-box ul li a[data-v-8e7c42f6]{display:block}@media only screen and (max-width:690px){.info-box[data-v-8e7c42f6]{padding:15px}}@media (prefers-color-scheme:dark){.info-box[data-v-8e7c42f6]{background:#1e2024}.info-box p[data-v-8e7c42f6],.info-box ul li[data-v-8e7c42f6]{color:#bec6cf}}",""])},eZ9V:function(t,a,e){"use strict";var i=e("CjXH"),s={name:"FormLabel",props:["icon"],components:{Edit2Icon:i.u,SettingsIcon:i.bb}},n=(e("1L+q"),e("KHd+")),o=Object(n.a)(s,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"form-label"},[this.icon?this._e():a("edit-2-icon",{staticClass:"icon text-theme",attrs:{size:"22"}}),this._v(" "),"settings"===this.icon?a("settings-icon",{staticClass:"icon text-theme",attrs:{size:"22"}}):this._e(),this._v(" "),a("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"10bcab7e",null);a.a=o.exports},gahf:function(t,a,e){"use strict";var i={name:"PageTabGroup"},s=(e("9sCX"),e("KHd+")),n=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"page-tab-group"},[this._t("default")],2)}),[],!1,null,"445d3e0e",null);a.a=n.exports},gy3V:function(t,a,e){"use strict";var i={name:"ListInfoItem",props:["title","content"]},s=(e("LvH8"),e("KHd+")),n=Object(s.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"list-info-item"},[e("b",{staticClass:"text-theme"},[t._v(t._s(t.title))]),t._v(" "),t.content?e("span",[t._v(t._s(t.content))]):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,"645a2011",null);a.a=n.exports},hJ7W:function(t,a,e){"use strict";e("BfOa")},jexE:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".form-label[data-v-10bcab7e]{display:flex;align-items:center;margin-bottom:30px}.form-label .icon[data-v-10bcab7e]{margin-right:10px}.form-label .icon circle[data-v-10bcab7e],.form-label .icon path[data-v-10bcab7e]{color:inherit}.form-label .label[data-v-10bcab7e]{font-size:1.125em;font-weight:700}@media (prefers-color-scheme:dark){.form-label .label[data-v-10bcab7e]{color:#bec6cf}}",""])},pFam:function(t,a,e){"use strict";e("Qqv+")},pToe:function(t,a,e){var i=e("8YPn");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,s);i.locals&&(t.exports=i.locals)},qefO:function(t,a,e){"use strict";var i={name:"PageTab",props:["isLoading"],components:{Spinner:e("zTYo").a}},s=(e("hJ7W"),e("KHd+")),n=Object(s.a)(i,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-tab"},[a("div",{directives:[{name:"show",rawName:"v-show",value:this.isLoading,expression:"isLoading"}],attrs:{id:"loader"}},[a("Spinner")],1),this._v(" "),this._t("default")],2)}),[],!1,null,"71034d34",null);a.a=n.exports},uGNG:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".list-info-item[data-v-645a2011]{display:block;padding-bottom:20px}.list-info-item .action-button[data-v-645a2011]{cursor:pointer}.list-info-item .action-button .edit-icon[data-v-645a2011]{display:inline-block;margin-left:3px}.list-info-item b[data-v-645a2011]{display:block;font-size:.8125em;margin-bottom:2px}.list-info-item span[data-v-645a2011]{display:inline-block;font-size:.875em;font-weight:700;color:#1b2539}@media (prefers-color-scheme:dark){.list-info-item .action-button .icon[data-v-645a2011],.list-info-item span[data-v-645a2011]{color:#bec6cf}}",""])}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"1wHr":function(t,e,a){"use strict";a("aKcM")},"2Sb1":function(t,e,a){"use strict";var i={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:a("CjXH").h}},n=(a("1wHr"),a("KHd+")),o=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[t.canBack?a("div",{staticClass:"go-back",on:{click:function(e){return t.$router.back()}}},[a("chevron-left-icon",{attrs:{size:"17"}})],1):t._e(),t._v(" "),a("div",{staticClass:"content"},[a("h1",{staticClass:"title"},[t._v(t._s(t.title))])])])}),[],!1,null,"8bbfeb00",null);e.a=o.exports},"2ojD":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".text-label[data-v-acb23b3a]{font-size:.75em;color:#afafaf;font-weight:700;display:block;margin-bottom:20px}.dark-mode .text-label[data-v-acb23b3a]{color:#00bc7e}",""])},"D4g/":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".page-header[data-v-8bbfeb00]{display:flex;align-items:center;background:#fff;z-index:9;width:100%;position:sticky;top:0;padding-top:20px;padding-bottom:20px}.page-header .title[data-v-8bbfeb00]{font-size:1.125em;font-weight:700;color:#1b2539}.page-header .go-back[data-v-8bbfeb00]{margin-right:10px;cursor:pointer}.page-header .go-back svg[data-v-8bbfeb00]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:960px){.page-header .title[data-v-8bbfeb00]{font-size:1.125em}}@media only screen and (max-width:690px){.page-header[data-v-8bbfeb00]{display:none}}.dark-mode .page-header[data-v-8bbfeb00]{background:#131414}.dark-mode .page-header .title[data-v-8bbfeb00]{color:#bec6cf}.dark-mode .page-header .icon path[data-v-8bbfeb00]{fill:#00bc7e}",""])},D62o:function(t,e,a){"use strict";var i=a("xCqy"),n=a("CjXH"),o={name:"MobileHeader",props:["title"],components:{ChevronLeftIcon:n.h,MenuIcon:n.P},methods:{showMobileNavigation:function(){i.a.$emit("mobile-menu:show","user-navigation")},goBack:function(){this.$router.back()}}},s=(a("ayom"),a("KHd+")),r=Object(s.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"mobile-header"},[e("div",{staticClass:"go-back",on:{click:this.goBack}},[e("chevron-left-icon",{staticClass:"icon",attrs:{size:"17"}})],1),this._v(" "),e("div",{staticClass:"location-name"},[this._v(this._s(this.title))]),this._v(" "),e("div",{staticClass:"mobile-menu",on:{click:this.showMobileNavigation}},[e("menu-icon",{staticClass:"icon",attrs:{size:"17"}})],1)])}),[],!1,null,"39c25ac0",null);e.a=r.exports},LcTr:function(t,e,a){var i=a("2ojD");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,n);i.locals&&(t.exports=i.locals)},OLOt:function(t,e,a){"use strict";a.r(e);var i=a("CjXH"),n=a("D62o"),o=a("THmQ"),s=a("2Sb1"),r=a("L2JU");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d={name:"AppSettings",components:{HomeIcon:i.G,CreditCardIcon:i.p,CodeIcon:i.m,MailIcon:i.O,FileTextIcon:i.z,EyeIcon:i.w,UsersIcon:i.ob,Trash2Icon:i.ib,SettingsIcon:i.cb,SectionTitle:o.a,MobileHeader:n.a,PageHeader:s.a},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(r.b)(["config"]))},b=(a("VEno"),a("KHd+")),m=Object(b.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"single-page"}},[a("div",{attrs:{id:"page-content"}},[a("MobileHeader",{attrs:{title:t.$t(t.$router.currentRoute.meta.title)}}),t._v(" "),a("PageHeader",{attrs:{"can-back":!0,title:t.$t(t.$router.currentRoute.meta.title)}}),t._v(" "),a("div",{staticClass:"content-page"},[a("div",{staticClass:"menu-list-wrapper horizontal"},[a("router-link",{staticClass:"menu-list-item link border-bottom-theme",attrs:{replace:"",to:{name:"AppOthers"}}},[a("div",{staticClass:"icon text-theme"},[a("settings-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label text-theme "},[t._v("\n                        "+t._s(t.$t("admin_settings.tabs.others"))+"\n                    ")])]),t._v(" "),a("router-link",{staticClass:"menu-list-item link link border-bottom-theme",attrs:{replace:"",to:{name:"AppAppearance"}}},[a("div",{staticClass:"icon text-theme"},[a("eye-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label text-theme"},[t._v("\n                        "+t._s(t.$t("admin_settings.tabs.appearance"))+"\n                    ")])]),t._v(" "),t.config.isSaaS?a("router-link",{staticClass:"menu-list-item link link border-bottom-theme",attrs:{replace:"",to:{name:"AppBillings"}}},[a("div",{staticClass:"icon text-theme"},[a("file-text-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label text-theme"},[t._v("\n                        "+t._s(t.$t("admin_settings.tabs.billings"))+"\n                    ")])]):t._e(),t._v(" "),t.config.isSaaS?a("router-link",{staticClass:"menu-list-item link link border-bottom-theme",attrs:{replace:"",to:{name:"AppPayments"}}},[a("div",{staticClass:"icon text-theme"},[a("credit-card-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label text-theme"},[t._v("\n                        "+t._s(t.$t("admin_settings.tabs.payments"))+"\n                    ")])]):t._e(),t._v(" "),a("router-link",{staticClass:"menu-list-item link link border-bottom-theme",attrs:{replace:"",to:{name:"AppIndex"}}},[a("div",{staticClass:"icon text-theme"},[a("home-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label text-theme"},[t._v("\n                        Homepage\n                    ")])]),t._v(" "),a("router-link",{staticClass:"menu-list-item link link border-bottom-theme",attrs:{replace:"",to:{name:"AppEmail"}}},[a("div",{staticClass:"icon text-theme"},[a("mail-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label text-theme"},[t._v("\n                        "+t._s(t.$t("admin_settings.tabs.email"))+"\n                    ")])])],1),t._v(" "),a("router-view")],1)],1)])}),[],!1,null,"28dd31a6",null);e.default=m.exports},Pb6s:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".mobile-header[data-v-39c25ac0]{padding:10px 0;text-align:center;background:#fff;position:sticky;display:none;z-index:6;top:0}.mobile-header>div[data-v-39c25ac0]{flex-grow:1;align-self:center;white-space:nowrap}.mobile-header .go-back[data-v-39c25ac0]{text-align:left}.mobile-header .location-name[data-v-39c25ac0]{line-height:1;text-align:center;width:100%;vertical-align:middle;font-size:.9375em;color:#1b2539;font-weight:700;max-width:220px;overflow:hidden;text-overflow:ellipsis;display:inline-block}.mobile-header .mobile-menu[data-v-39c25ac0]{text-align:right}.mobile-header .icon[data-v-39c25ac0]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:690px){.mobile-header[data-v-39c25ac0]{display:flex;margin-bottom:15px}}.dark-mode .mobile-header[data-v-39c25ac0]{background:#131414}.dark-mode .mobile-header .location-name[data-v-39c25ac0]{color:#bec6cf}",""])},THmQ:function(t,e,a){"use strict";var i={name:"SectionTitle"},n=(a("pL59"),a("KHd+")),o=Object(n.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"acb23b3a",null);e.a=o.exports},VEno:function(t,e,a){"use strict";a("tvP7")},aKcM:function(t,e,a){var i=a("D4g/");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,n);i.locals&&(t.exports=i.locals)},ayom:function(t,e,a){"use strict";a("uXZy")},iLEg:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"",""])},pL59:function(t,e,a){"use strict";a("LcTr")},tvP7:function(t,e,a){var i=a("iLEg");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,n);i.locals&&(t.exports=i.locals)},uXZy:function(t,e,a){var i=a("Pb6s");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,n);i.locals&&(t.exports=i.locals)}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2Sb1":function(t,e,a){"use strict";var n={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:a("CjXH").d}},i=(a("qf9i"),a("KHd+")),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[t.canBack?a("div",{staticClass:"go-back",on:{click:function(e){return t.$router.back()}}},[a("chevron-left-icon",{attrs:{size:"17"}})],1):t._e(),t._v(" "),a("div",{staticClass:"content"},[a("h1",{staticClass:"title"},[t._v(t._s(t.title))])])])}),[],!1,null,"aafe7e24",null);e.a=s.exports},"3Idf":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".page-header[data-v-aafe7e24] {\n  display: flex;\n  align-items: center;\n  background: white;\n  z-index: 9;\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.page-header .title[data-v-aafe7e24] {\n  font-size: 1.125em;\n  font-weight: 700;\n  color: #1B2539;\n}\n.page-header .go-back[data-v-aafe7e24] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n.page-header .go-back svg[data-v-aafe7e24] {\n  vertical-align: middle;\n  margin-top: -4px;\n}\n@media only screen and (max-width: 960px) {\n.page-header .title[data-v-aafe7e24] {\n    font-size: 1.125em;\n}\n}\n@media only screen and (max-width: 690px) {\n.page-header[data-v-aafe7e24] {\n    display: none;\n}\n}\n@media (prefers-color-scheme: dark) {\n.page-header[data-v-aafe7e24] {\n    background: #111314;\n}\n.page-header .title[data-v-aafe7e24] {\n    color: #bec6cf;\n}\n.page-header .icon path[data-v-aafe7e24] {\n    fill: #00BC7E;\n}\n}\n",""])},"92Jy":function(t,e,a){"use strict";var n=a("qphJ");a.n(n).a},KPNK:function(t,e,a){var n=a("3Idf");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(t.exports=n.locals)},MOFO:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"",""])},OLOt:function(t,e,a){"use strict";a.r(e);var n=a("CjXH"),i=a("D62o"),s=a("THmQ"),r=a("2Sb1"),o=a("L2JU");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d={name:"AppSettings",components:{HomeIcon:n.w,CreditCardIcon:n.j,CodeIcon:n.h,MailIcon:n.D,FileTextIcon:n.r,EyeIcon:n.o,UsersIcon:n.W,Trash2Icon:n.Q,SettingsIcon:n.N,SectionTitle:s.a,MobileHeader:i.a,PageHeader:r.a},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(o.b)(["config"]))},p=(a("S7pX"),a("KHd+")),v=Object(p.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"single-page"}},[a("div",{attrs:{id:"page-content"}},[a("MobileHeader",{attrs:{title:t.$router.currentRoute.meta.title}}),t._v(" "),a("PageHeader",{attrs:{"can-back":!0,title:t.$router.currentRoute.meta.title}}),t._v(" "),a("div",{staticClass:"content-page"},[a("div",{staticClass:"menu-list-wrapper horizontal"},[a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"AppOthers"}}},[a("div",{staticClass:"icon"},[a("settings-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("admin_settings.tabs.others"))+"\n                    ")])]),t._v(" "),a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"AppAppearance"}}},[a("div",{staticClass:"icon"},[a("eye-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("admin_settings.tabs.appearance"))+"\n                    ")])]),t._v(" "),t.config.isSaaS?a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"AppBillings"}}},[a("div",{staticClass:"icon"},[a("file-text-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("admin_settings.tabs.billings"))+"\n                    ")])]):t._e(),t._v(" "),t.config.isSaaS?a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"AppPayments"}}},[a("div",{staticClass:"icon"},[a("credit-card-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("admin_settings.tabs.payments"))+"\n                    ")])]):t._e(),t._v(" "),t.config.isSaaS?a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"AppIndex"}}},[a("div",{staticClass:"icon"},[a("home-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label"},[t._v("\n                        Homepage\n                    ")])]):t._e(),t._v(" "),a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"AppEmail"}}},[a("div",{staticClass:"icon"},[a("mail-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("admin_settings.tabs.email"))+"\n                    ")])])],1),t._v(" "),a("router-view")],1)],1)])}),[],!1,null,"343f037e",null);e.default=v.exports},S7pX:function(t,e,a){"use strict";var n=a("wWlU");a.n(n).a},THmQ:function(t,e,a){"use strict";var n={name:"SectionTitle"},i=(a("92Jy"),a("KHd+")),s=Object(i.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"69d97df2",null);e.a=s.exports},lW02:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".text-label[data-v-69d97df2] {\n  font-size: 0.75em;\n  color: #AFAFAF;\n  font-weight: 700;\n  display: block;\n  margin-bottom: 20px;\n}\n@media (prefers-color-scheme: dark) {\n.text-label[data-v-69d97df2] {\n    color: #00BC7E;\n}\n}\n",""])},qf9i:function(t,e,a){"use strict";var n=a("KPNK");a.n(n).a},qphJ:function(t,e,a){var n=a("lW02");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(t.exports=n.locals)},wWlU:function(t,e,a){var n=a("MOFO");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(t.exports=n.locals)}}]);
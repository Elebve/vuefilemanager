(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"2wZp":function(t,n,e){"use strict";var i=e("Mlra");e.n(i).a},"35KB":function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,".text-label[data-v-4c36e0a9] {\n  padding-left: 25px;\n  font-size: 0.75em;\n  color: #AFAFAF;\n  font-weight: 700;\n  display: block;\n  margin-bottom: 5px;\n}\n@media only screen and (max-width: 1024px) {\n.text-label[data-v-4c36e0a9] {\n    padding-left: 20px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.text-label[data-v-4c36e0a9] {\n    color: #00BC7E;\n}\n}\n",""])},"6Rdq":function(t,n,e){"use strict";var i=e("yMep"),a=e("c4kp"),o=e("2QtR"),r=e("L2JU"),s=e("xCqy");function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var d={name:"FilesView",components:{DesktopToolbar:i.a,FileBrowser:a.a,ContextMenu:o.a},computed:function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},Object(r.b)(["config"])),methods:{fileViewClick:function(){s.a.$emit("contextMenu:hide")},contextMenu:function(t,n){s.a.$emit("contextMenu:show",t,n)}}},u=(e("2wZp"),e("KHd+")),p=Object(u.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"files-view"},on:{click:t.fileViewClick,"!contextmenu":function(n){return n.preventDefault(),t.contextMenu(n,void 0)}}},[e("ContextMenu"),t._v(" "),e("DesktopToolbar"),t._v(" "),e("FileBrowser")],1)}),[],!1,null,null,null);n.a=p.exports},"8sO+":function(t,n,e){var i=e("B4Jk");"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,a);i.locals&&(t.exports=i.locals)},B4Jk:function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,".content-group[data-v-da1bd2b8] {\n  margin-bottom: 30px;\n}\n",""])},CoTS:function(t,n,e){"use strict";e.r(n);var i=e("6Rdq"),a=e("LtV2"),o=e("hXay"),r=e("CjXH"),s={name:"FilesView",components:{ContentFileView:i.a,ContentSidebar:a.a,ContentGroup:o.a,LinkIcon:r.A,UsersIcon:r.W},methods:{getShared:function(){this.$store.dispatch("getShared",[{back:!1,init:!1}])},getParticipantUploads:function(){this.$store.dispatch("getParticipantUploads")}},mounted:function(){this.getShared()}},c=e("KHd+"),l=Object(c.a)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{attrs:{id:"viewport"}},[e("ContentSidebar",[e("ContentGroup",{attrs:{title:t.$t("sidebar.locations_title")}},[e("div",{staticClass:"menu-list-wrapper vertical"},[e("li",{staticClass:"menu-list-item link",class:{"is-active":t.$isThisLocation(["shared"])},on:{click:function(n){return t.getShared()}}},[e("div",{staticClass:"icon"},[e("link-icon",{attrs:{size:"17"}})],1),t._v(" "),e("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("sidebar.my_shared"))+"\n                    ")])]),t._v(" "),e("li",{staticClass:"menu-list-item link",class:{"is-active":t.$isThisLocation(["participant_uploads"])},on:{click:function(n){return t.getParticipantUploads()}}},[e("div",{staticClass:"icon"},[e("users-icon",{attrs:{size:"17"}})],1),t._v(" "),e("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("sidebar.participant_uploads"))+"\n                    ")])])])])],1),t._v(" "),e("ContentFileView")],1)}),[],!1,null,"fd8b19c0",null);n.default=l.exports},G4a4:function(t,n,e){"use strict";var i=e("8sO+");e.n(i).a},JoIu:function(t,n,e){var i=e("nSuU");"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,a);i.locals&&(t.exports=i.locals)},LtV2:function(t,n,e){"use strict";var i={name:"ContentSidebar"},a=(e("u5fQ"),e("KHd+")),o=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"content-sidebar"},[this._t("default")],2)}),[],!1,null,"5101d4ac",null);n.a=o.exports},Mlra:function(t,n,e){var i=e("Q8SN");"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,a);i.locals&&(t.exports=i.locals)},Q8SN:function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,"#files-view {\n  font-family: 'Nunito', sans-serif;\n  font-size: 16px;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  min-width: 320px;\n  overflow-x: hidden;\n  padding-left: 15px;\n  padding-right: 15px;\n  overflow-y: hidden;\n}\n@media only screen and (max-width: 690px) {\n#files-view {\n    padding-left: 0;\n    padding-right: 0;\n}\n}\n",""])},Q8fg:function(t,n,e){var i=e("35KB");"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,a);i.locals&&(t.exports=i.locals)},hXay:function(t,n,e){"use strict";var i={name:"TextLabel"},a=(e("wu+2"),e("KHd+")),o={name:"ContentGroup",props:["title"],components:{TextLabel:Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"4c36e0a9",null).exports}},r=(e("G4a4"),Object(a.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"content-group"},[n("TextLabel",[this._v(this._s(this.title))]),this._v(" "),this._t("default")],2)}),[],!1,null,"da1bd2b8",null));n.a=r.exports},nSuU:function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,".content-sidebar[data-v-5101d4ac] {\n  background: rgba(244, 245, 246, 0.6);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding-top: 25px;\n  overflow-y: auto;\n  flex: 0 0 225px;\n}\n@media only screen and (max-width: 1024px) {\n.content-sidebar[data-v-5101d4ac] {\n    flex: 0 0 205px;\n}\n}\n@media only screen and (max-width: 690px) {\n.content-sidebar[data-v-5101d4ac] {\n    display: none;\n}\n}\n@media (prefers-color-scheme: dark) {\n.content-sidebar[data-v-5101d4ac] {\n    background: rgba(30, 32, 36, 0.2);\n}\n}\n",""])},u5fQ:function(t,n,e){"use strict";var i=e("JoIu");e.n(i).a},"wu+2":function(t,n,e){"use strict";var i=e("Q8fg");e.n(i).a}}]);
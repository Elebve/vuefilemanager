<<<<<<< HEAD
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"2wZp":function(t,e,n){"use strict";var i=n("Mlra");n.n(i).a},"35KB":function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".text-label[data-v-4c36e0a9]{padding-left:25px;font-size:.75em;color:#afafaf;font-weight:700;display:block;margin-bottom:5px}@media only screen and (max-width:1024px){.text-label[data-v-4c36e0a9]{padding-left:20px}}@media (prefers-color-scheme:dark){.text-label[data-v-4c36e0a9]{color:#00bc7e}}",""])},"6Rdq":function(t,e,n){"use strict";var i=n("yMep"),a=n("c4kp"),o=n("2QtR"),r=n("L2JU"),s=n("xCqy");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={name:"FilesView",components:{DesktopToolbar:i.a,FileBrowser:a.a,ContextMenu:o.a},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(r.b)(["config"])),methods:{fileViewClick:function(){s.a.$emit("contextMenu:hide")},contextMenu:function(t,e){s.a.$emit("contextMenu:show",t,e)}}},u=(n("2wZp"),n("KHd+")),p=Object(u.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"files-view"},on:{click:t.fileViewClick,"!contextmenu":function(e){return e.preventDefault(),t.contextMenu(e,void 0)}}},[n("ContextMenu"),t._v(" "),n("DesktopToolbar"),t._v(" "),n("FileBrowser")],1)}),[],!1,null,null,null);e.a=p.exports},"8sO+":function(t,e,n){var i=n("B4Jk");"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,a);i.locals&&(t.exports=i.locals)},B4Jk:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".content-group[data-v-da1bd2b8]{margin-bottom:30px}",""])},CoTS:function(t,e,n){"use strict";n.r(e);var i=n("6Rdq"),a=n("LtV2"),o=n("hXay"),r=n("CjXH"),s={name:"FilesView",components:{ContentFileView:i.a,ContentSidebar:a.a,ContentGroup:o.a,LinkIcon:r.A,UsersIcon:r.W},methods:{getShared:function(){this.$store.dispatch("getShared",[{back:!1,init:!1}])},getParticipantUploads:function(){this.$store.dispatch("getParticipantUploads")}},mounted:function(){this.getShared()}},c=n("KHd+"),l=Object(c.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"viewport"}},[n("ContentSidebar",[n("ContentGroup",{attrs:{title:t.$t("sidebar.locations_title")}},[n("div",{staticClass:"menu-list-wrapper vertical"},[n("li",{staticClass:"menu-list-item link",class:{"is-active":t.$isThisLocation(["shared"])},on:{click:function(e){return t.getShared()}}},[n("div",{staticClass:"icon"},[n("link-icon",{attrs:{size:"17"}})],1),t._v(" "),n("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("sidebar.my_shared"))+"\n                    ")])]),t._v(" "),n("li",{staticClass:"menu-list-item link",class:{"is-active":t.$isThisLocation(["participant_uploads"])},on:{click:function(e){return t.getParticipantUploads()}}},[n("div",{staticClass:"icon"},[n("users-icon",{attrs:{size:"17"}})],1),t._v(" "),n("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("sidebar.participant_uploads"))+"\n                    ")])])])])],1),t._v(" "),n("ContentFileView")],1)}),[],!1,null,"fd8b19c0",null);e.default=l.exports},G4a4:function(t,e,n){"use strict";var i=n("8sO+");n.n(i).a},JoIu:function(t,e,n){var i=n("nSuU");"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,a);i.locals&&(t.exports=i.locals)},LtV2:function(t,e,n){"use strict";var i={name:"ContentSidebar"},a=(n("u5fQ"),n("KHd+")),o=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"content-sidebar"},[this._t("default")],2)}),[],!1,null,"5101d4ac",null);e.a=o.exports},Mlra:function(t,e,n){var i=n("Q8SN");"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,a);i.locals&&(t.exports=i.locals)},Q8SN:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"#files-view{font-family:Nunito,sans-serif;font-size:16px;width:100%;height:100%;position:relative;min-width:320px;overflow-x:hidden;padding-left:15px;padding-right:15px;overflow-y:hidden}@media only screen and (max-width:690px){#files-view{padding-left:0;padding-right:0}}",""])},Q8fg:function(t,e,n){var i=n("35KB");"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,a);i.locals&&(t.exports=i.locals)},hXay:function(t,e,n){"use strict";var i={name:"TextLabel"},a=(n("wu+2"),n("KHd+")),o={name:"ContentGroup",props:["title"],components:{TextLabel:Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"4c36e0a9",null).exports}},r=(n("G4a4"),Object(a.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-group"},[e("TextLabel",[this._v(this._s(this.title))]),this._v(" "),this._t("default")],2)}),[],!1,null,"da1bd2b8",null));e.a=r.exports},nSuU:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".content-sidebar[data-v-5101d4ac]{background:rgba(244,245,246,.6);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding-top:25px;overflow-y:auto;flex:0 0 225px}@media only screen and (max-width:1024px){.content-sidebar[data-v-5101d4ac]{flex:0 0 205px}}@media only screen and (max-width:690px){.content-sidebar[data-v-5101d4ac]{display:none}}@media (prefers-color-scheme:dark){.content-sidebar[data-v-5101d4ac]{background:rgba(30,32,36,.2)}}",""])},u5fQ:function(t,e,n){"use strict";var i=n("JoIu");n.n(i).a},"wu+2":function(t,e,n){"use strict";var i=n("Q8fg");n.n(i).a}}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"2wZp":function(t,e,n){"use strict";var i=n("Mlra");n.n(i).a},"6Rdq":function(t,e,n){"use strict";var i=n("yMep"),a=n("c4kp"),o=n("2QtR"),r=n("L2JU"),s=n("xCqy");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={name:"FilesView",components:{DesktopToolbar:i.a,FileBrowser:a.a,ContextMenu:o.a},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(r.b)(["config"])),methods:{fileViewClick:function(){s.a.$emit("contextMenu:hide")},contextMenu:function(t,e){s.a.$emit("contextMenu:show",t,e)}}},u=(n("2wZp"),n("KHd+")),p=Object(u.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"files-view"},on:{click:t.fileViewClick,"!contextmenu":function(e){return e.preventDefault(),t.contextMenu(e,void 0)}}},[n("ContextMenu"),t._v(" "),n("DesktopToolbar"),t._v(" "),n("FileBrowser")],1)}),[],!1,null,null,null);e.a=p.exports},CoTS:function(t,e,n){"use strict";n.r(e);var i=n("6Rdq"),a=n("LtV2"),o=n("hXay"),r=n("CjXH"),s={name:"FilesView",components:{ContentFileView:i.a,ContentSidebar:a.a,ContentGroup:o.a,LinkIcon:r.A,UsersIcon:r.W},methods:{getShared:function(){this.$store.dispatch("getShared",[{back:!1,init:!1}])},getParticipantUploads:function(){this.$store.dispatch("getParticipantUploads")}},mounted:function(){this.getShared()}},c=n("KHd+"),l=Object(c.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"viewport"}},[n("ContentSidebar",[n("ContentGroup",{attrs:{title:t.$t("sidebar.locations_title")}},[n("div",{staticClass:"menu-list-wrapper vertical"},[n("li",{staticClass:"menu-list-item link",class:{"is-active":t.$isThisLocation(["shared"])},on:{click:function(e){return t.getShared()}}},[n("div",{staticClass:"icon"},[n("link-icon",{attrs:{size:"17"}})],1),t._v(" "),n("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("sidebar.my_shared"))+"\n                    ")])]),t._v(" "),n("li",{staticClass:"menu-list-item link",class:{"is-active":t.$isThisLocation(["participant_uploads"])},on:{click:function(e){return t.getParticipantUploads()}}},[n("div",{staticClass:"icon"},[n("users-icon",{attrs:{size:"17"}})],1),t._v(" "),n("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("sidebar.participant_uploads"))+"\n                    ")])])])])],1),t._v(" "),n("ContentFileView")],1)}),[],!1,null,"0f5cebee",null);e.default=l.exports},"F+P+":function(t,e,n){"use strict";var i=n("T/s9");n.n(i).a},IBFw:function(t,e,n){"use strict";var i=n("RGXi");n.n(i).a},LtV2:function(t,e,n){"use strict";var i={name:"ContentSidebar"},a=(n("IBFw"),n("KHd+")),o=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"content-sidebar"},[this._t("default")],2)}),[],!1,null,"2d78f180",null);e.a=o.exports},Mlra:function(t,e,n){var i=n("Q8SN");"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,a);i.locals&&(t.exports=i.locals)},OlFf:function(t,e,n){"use strict";var i=n("ZUQy");n.n(i).a},Q8SN:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"#files-view{font-family:Nunito,sans-serif;font-size:16px;width:100%;height:100%;position:relative;min-width:320px;overflow-x:hidden;padding-left:15px;padding-right:15px;overflow-y:hidden}@media only screen and (max-width:690px){#files-view{padding-left:0;padding-right:0}}",""])},"R+nY":function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".content-sidebar[data-v-2d78f180]{background:rgba(244,245,246,.6);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding-top:25px;overflow-y:auto;flex:0 0 225px}@media only screen and (max-width:1024px){.content-sidebar[data-v-2d78f180]{flex:0 0 205px}}@media only screen and (max-width:690px){.content-sidebar[data-v-2d78f180]{display:none}}@media (prefers-color-scheme:dark){.content-sidebar[data-v-2d78f180]{background:rgba(30,32,36,.2)}}",""])},RGXi:function(t,e,n){var i=n("R+nY");"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,a);i.locals&&(t.exports=i.locals)},"T/s9":function(t,e,n){var i=n("uxOQ");"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,a);i.locals&&(t.exports=i.locals)},ZUQy:function(t,e,n){var i=n("orIN");"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,a);i.locals&&(t.exports=i.locals)},hXay:function(t,e,n){"use strict";var i={name:"TextLabel"},a=(n("F+P+"),n("KHd+")),o={name:"ContentGroup",props:["title"],components:{TextLabel:Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"49abd9b8",null).exports}},r=(n("OlFf"),Object(a.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-group"},[e("TextLabel",[this._v(this._s(this.title))]),this._v(" "),this._t("default")],2)}),[],!1,null,"8d15d252",null));e.a=r.exports},orIN:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".content-group[data-v-8d15d252]{margin-bottom:30px}",""])},uxOQ:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".text-label[data-v-49abd9b8]{padding-left:25px;font-size:.75em;color:#afafaf;font-weight:700;display:block;margin-bottom:5px}@media only screen and (max-width:1024px){.text-label[data-v-49abd9b8]{padding-left:20px}}@media (prefers-color-scheme:dark){.text-label[data-v-49abd9b8]{color:#00bc7e}}",""])}}]);
>>>>>>> 559bee6ca28c361794205e23baae6ee65e15ac81

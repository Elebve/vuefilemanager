(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{AGO6:function(t,e,n){"use strict";n.r(e);var i=n("RXD1"),o=n("t5U/"),r=n("G7DB"),a=n("Hi0u"),c=n("0gRs"),l=n("c4kp"),s=n("2QtR"),u=n("axtU"),d=n("uFbu"),f=n("L2JU"),m=n("xCqy");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h={name:"MySharedItems",components:{MobileActionButtonUpload:i.a,MobileActionButton:o.a,MobileMultiSelectToolbar:r.a,MobileContextMenu:a.a,ToolbarButton:c.a,OptionGroup:u.a,FileBrowser:l.a,ContextMenu:s.a,Option:d.a},computed:b(b({},Object(f.b)(["clipboard","user"])),{},{isFolder:function(){return this.item&&"folder"===this.item.type},isInFavourites:function(){var t=this;return this.favourites.find((function(e){return e.id===t.item.id}))},hasFile:function(){return this.clipboard.find((function(t){return"folder"!==t.type}))},favourites:function(){return this.user.data.relationships.favourites.data.attributes.folders},filterLocationTitle:function(){return{RecentUploads:this.$t("Recent"),MySharedItems:this.$t("Shared"),Trash:this.$t("Trash"),Public:this.$t("Files"),Files:this.$t("Files")}[this.$route.name]}}),data:function(){return{item:void 0}},methods:{addToFavourites:function(){var t=this;this.favourites&&!this.favourites.find((function(e){return e.id===t.item.data.id}))?(this.clipboard.includes(this.item)||this.$store.dispatch("addToFavourites",this.item),this.clipboard.includes(this.item)&&this.$store.dispatch("addToFavourites",null)):this.$store.dispatch("removeFromFavourites",this.item)}},created:function(){var t=this;this.$store.dispatch("getMySharedItems"),m.a.$on("context-menu:show",(function(e,n){return t.item=n})),m.a.$on("mobile-context-menu:show",(function(e){return t.item=e}))}},_=n("KHd+"),O=Object(_.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ContextMenu",{scopedSlots:t._u([t.item?{key:"single-select",fn:function(){return[t.isFolder?n("OptionGroup",[n("Option",{attrs:{title:t.isInFavourites?t.$t("context_menu.remove_from_favourites"):t.$t("context_menu.add_to_favourites"),icon:"favourites"},nativeOn:{click:function(e){return t.addToFavourites(e)}}})],1):t._e(),t._v(" "),n("OptionGroup",[n("Option",{attrs:{title:t.$t("context_menu.rename"),icon:"rename"},nativeOn:{click:function(e){return t.$renameFileOrFolder(t.item)}}}),t._v(" "),n("Option",{attrs:{title:t.$t("context_menu.delete"),icon:"trash"},nativeOn:{click:function(e){return t.$deleteFileOrFolder(t.item)}}})],1),t._v(" "),n("OptionGroup",[n("Option",{attrs:{title:t.item.data.relationships.shared?t.$t("context_menu.share_edit"):t.$t("context_menu.share"),icon:"share"},nativeOn:{click:function(e){return t.$shareFileOrFolder(t.item)}}})],1),t._v(" "),n("OptionGroup",[n("Option",{attrs:{title:t.$t("context_menu.detail"),icon:"detail"},nativeOn:{click:function(e){return t.$openInDetailPanel(t.item)}}}),t._v(" "),n("Option",{attrs:{title:t.$t("context_menu.download"),icon:"download"},nativeOn:{click:function(e){return t.$downloadSelection(t.item)}}})],1)]},proxy:!0}:null,t.item?{key:"multiple-select",fn:function(){return[t.hasFile?t._e():n("OptionGroup",[n("Option",{attrs:{title:t.isInFavourites?t.$t("context_menu.remove_from_favourites"):t.$t("context_menu.add_to_favourites"),icon:"favourites"},nativeOn:{click:function(e){return t.addToFavourites(e)}}})],1),t._v(" "),n("OptionGroup",[n("Option",{attrs:{title:t.$t("context_menu.share_cancel"),icon:"share"},nativeOn:{click:function(e){return t.$shareCancel(e)}}}),t._v(" "),n("Option",{attrs:{title:t.$t("context_menu.delete"),icon:"trash"},nativeOn:{click:function(e){return t.$deleteFileOrFolder(t.item)}}})],1),t._v(" "),n("OptionGroup",[n("Option",{attrs:{title:t.$t("context_menu.download"),icon:"download"},nativeOn:{click:function(e){return t.$downloadSelection(t.item)}}})],1)]},proxy:!0}:null],null,!0)}),t._v(" "),n("MobileContextMenu",[t.isFolder?n("OptionGroup",[n("Option",{attrs:{title:t.isInFavourites?t.$t("context_menu.remove_from_favourites"):t.$t("context_menu.add_to_favourites"),icon:"favourites"},nativeOn:{click:function(e){return t.addToFavourites(e)}}})],1):t._e(),t._v(" "),n("OptionGroup",[n("Option",{attrs:{title:t.$t("context_menu.rename"),icon:"rename"},nativeOn:{click:function(e){return t.$renameFileOrFolder(t.item)}}}),t._v(" "),n("Option",{attrs:{title:t.$t("context_menu.delete"),icon:"trash"},nativeOn:{click:function(e){return t.$deleteFileOrFolder(t.item)}}})],1),t._v(" "),n("OptionGroup",[n("Option",{attrs:{title:t.item&&t.item.shared?t.$t("context_menu.share_edit"):t.$t("context_menu.share"),icon:"share"},nativeOn:{click:function(e){return t.$shareFileOrFolder(t.item)}}})],1),t._v(" "),n("OptionGroup",[n("Option",{attrs:{title:t.$t("context_menu.download"),icon:"download"},nativeOn:{click:function(e){return t.$downloadSelection(t.item)}}})],1)],1),t._v(" "),n("FileBrowser",{scopedSlots:t._u([{key:"file-actions-mobile",fn:function(){return[n("MobileActionButton",{attrs:{icon:"search"},nativeOn:{click:function(e){return t.$openSpotlight(e)}}},[t._v("\n\t\t\t\t"+t._s(t.$t("actions.search"))+"\n\t\t\t")]),t._v(" "),n("MobileActionButton",{attrs:{icon:"filter"},nativeOn:{click:function(e){return t.$showLocations(e)}}},[t._v("\n\t\t\t\t"+t._s(t.filterLocationTitle)+"\n\t\t\t")]),t._v(" "),n("MobileActionButton",{attrs:{icon:"check-square"},nativeOn:{click:function(e){return t.$enableMultiSelectMode(e)}}},[t._v("\n\t\t\t\t"+t._s(t.$t("context_menu.select"))+"\n\t\t\t")]),t._v(" "),n("MobileActionButton",{attrs:{icon:"preview-sorting"},nativeOn:{click:function(e){return t.$showViewOptions(e)}}},[t._v("\n\t\t\t\t"+t._s(t.$t("preview_sorting.preview_sorting_button"))+"\n\t\t\t")])]},proxy:!0},{key:"empty-file-page",fn:function(){return[n("h1",{staticClass:"title"},[t._v(t._s(t.$t("shared.empty_shared")))])]},proxy:!0}])}),t._v(" "),n("MobileMultiSelectToolbar",[n("ToolbarButton",{staticClass:"action-btn",attrs:{source:"download",action:t.$t("actions.download")},nativeOn:{click:function(e){return t.$downloadSelection(t.item)}}}),t._v(" "),n("ToolbarButton",{staticClass:"action-btn",attrs:{source:"shared-off"},nativeOn:{click:function(e){return t.$shareCancel(e)}}})],1)],1)}),[],!1,null,null,null);e.default=O.exports},Pp7K:function(t,e,n){"use strict";n("ZrEW")},RXD1:function(t,e,n){"use strict";var i={name:"MobileActionButtonUpload",components:{UploadCloudIcon:n("CjXH").lb},methods:{emmitFiles:function(t){this.$uploadFiles(t.target.files)}}},o=(n("Pp7K"),n("KHd+")),r=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"mobile-action-button"},[e("div",{staticClass:"flex"},[e("upload-cloud-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}),this._v(" "),e("label",{staticClass:"label button file-input button-base",attrs:{label:"file"}},[this._t("default"),this._v(" "),e("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{id:"file",type:"file",name:"files[]",multiple:""},on:{change:this.emmitFiles}})],2)],1)])}),[],!1,null,"5f4cb0b8",null);e.a=r.exports},ZrEW:function(t,e,n){var i=n("naYb");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,o);i.locals&&(t.exports=i.locals)},naYb:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".mobile-action-button[data-v-5f4cb0b8]{background:#f4f5f6;margin-right:8px;border-radius:8px;padding:7px 14px;cursor:pointer;border:none}.mobile-action-button .flex[data-v-5f4cb0b8]{display:flex;align-items:center}.mobile-action-button .icon[data-v-5f4cb0b8]{vertical-align:middle;margin-right:10px;font-size:.875em}.mobile-action-button .label[data-v-5f4cb0b8]{vertical-align:middle;font-size:.875em;font-weight:700;color:#1b2539}.dark-mode .mobile-action-button[data-v-5f4cb0b8]{background:#1e2024}.dark-mode .mobile-action-button circle[data-v-5f4cb0b8],.dark-mode .mobile-action-button line[data-v-5f4cb0b8],.dark-mode .mobile-action-button path[data-v-5f4cb0b8],.dark-mode .mobile-action-button polyline[data-v-5f4cb0b8],.dark-mode .mobile-action-button rect[data-v-5f4cb0b8]{color:inherit}.dark-mode .mobile-action-button .label[data-v-5f4cb0b8]{color:#bec6cf}",""])}}]);
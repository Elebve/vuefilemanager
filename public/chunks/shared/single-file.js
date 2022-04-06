"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2637],{4734:(d,u,e)=>{e.d(u,{Z:()=>c});var t=e(3645),f=e.n(t)()((function(d){return d[1]}));f.push([d.id,".emoji{font-size:inherit;height:1em;width:1em}",""]);const c=f},9621:(d,u,e)=>{e.d(u,{Z:()=>f});const t={name:"Video",props:["file"]};const f=(0,e(1900).Z)(t,(function(){var d=this,u=d.$createElement;return(d._self._c||u)("video",{staticClass:"video",class:{"file-shadow":!d.$isMobile()},attrs:{src:d.file.data.attributes.file_url,controlsList:"nodownload",disablePictureInPicture:"",playsinline:"",controls:""}})}),[],!1,null,null,null).exports},9470:(d,u,e)=>{e.d(u,{Z:()=>f});const t={name:"CheckBox",props:["isClicked"],components:{CheckIcon:e(9101).nQG},data:function(){return{isSwitched:void 0}},methods:{changeState:function(){this.isSwitched=!this.isSwitched,this.$emit("input",this.isSwitched)}},mounted:function(){this.isSwitched=this.isClicked}};const f=(0,e(1900).Z)(t,(function(){var d=this,u=d.$createElement,e=d._self._c||u;return e("div",[e("div",{staticClass:"flex h-5 w-5 items-center justify-center rounded-md",class:{"bg-theme":d.isClicked,"bg-light-background dark:bg-4x-dark-foreground":!d.isClicked},on:{click:d.changeState}},[d.isClicked?e("CheckIcon",{staticClass:"vue-feather text-white",attrs:{size:"17"}}):d._e()],1)])}),[],!1,null,null,null).exports},3119:(d,u,e)=>{e.d(u,{Z:()=>f});const t={name:"FileIconThumbnail",props:["entry"]};const f=(0,e(1900).Z)(t,(function(){var d=this,u=d.$createElement,e=d._self._c||u;return e("div",{staticClass:"flex items-center justify-center"},[e("span",{staticClass:"text-theme absolute z-[5] mx-auto mt-1 inline-block w-7 overflow-hidden text-ellipsis text-center text-[9px] font-semibold"},[d._v("\n            "+d._s(d.entry.data.attributes.mimetype)+"\n        ")]),d._v(" "),e("svg",{staticClass:"vue-feather dark:text-gray-800 text-gray-100 ",attrs:{width:"38px",height:"51px",fill:"currentColor",viewBox:"0 0 38 51",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("path",{attrs:{d:"M22.1666667,13.546875 L22.1666667,0 L2.375,0 C1.05885417,0 0,1.06582031 0,2.390625 L0,48.609375 C0,49.9341797 1.05885417,51 2.375,51 L35.625,51 C36.9411458,51 38,49.9341797 38,48.609375 L38,15.9375 L24.5416667,15.9375 C23.2354167,15.9375 22.1666667,14.8617187 22.1666667,13.546875 Z M38,12.1423828 L38,12.75 L25.3333333,12.75 L25.3333333,0 L25.9369792,0 C26.5703125,0 27.1739583,0.249023438 27.6192708,0.697265625 L37.3072917,10.4589844 C37.7526042,10.9072266 38,11.5148437 38,12.1423828 Z"}})])])}),[],!1,null,null,null).exports},4886:(d,u,e)=>{e.d(u,{Z:()=>a});var t=e(8569),f=e(7212);const c={name:"FolderIcon",props:["item"],components:{VueFolderTeamIcon:t.Z,VueFolderIcon:f.Z}};const a=(0,e(1900).Z)(c,(function(){var d=this,u=d.$createElement,e=d._self._c||u;return e("div",[d.item.data.attributes.isTeamFolder?d._e():e("VueFolderIcon"),d._v(" "),d.item.data.attributes.isTeamFolder?e("VueFolderTeamIcon",{staticStyle:{width:"53px",height:"52px"}}):d._e()],1)}),[],!1,null,null,null).exports},7212:(d,u,e)=>{e.d(u,{Z:()=>f});const t={name:"VueFolderIcon"};const f=(0,e(1900).Z)(t,(function(){var d=this,u=d.$createElement,e=d._self._c||u;return e("svg",{attrs:{width:"53px",height:"52px",viewBox:"0 0 53 39",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("path",{staticClass:"svg-color-theme",attrs:{d:"M48.03125,6.5 L29.790833,6.5 C28.7431613,6.5 27.7373076,6.08896217 26.9894703,5.35523504 L22.6980297,1.14476496 C21.9501924,0.41103783 20.9443387,-6.36543387e-16 19.896667,0 L4.96875,0 L4.96875,0 C2.22455078,0 0,2.18257812 0,4.875 L0,34.125 C0,36.8174219 2.22455078,39 4.96875,39 L48.03125,39 C50.7754492,39 53,36.8174219 53,34.125 L53,11.375 C53,8.68257813 50.7754492,6.5 48.03125,6.5 Z",stroke:"none","stroke-width":"0"}}),d._v(" "),e("path",{attrs:{d:"M48.03125,6.5 L29.790833,6.5 C28.7431613,6.5 27.7373076,6.08896217 26.9894703,5.35523504 L22.6980297,1.14476496 C21.9501924,0.41103783 20.9443387,-6.36543387e-16 19.896667,0 L4.96875,0 L4.96875,0 C2.22455078,0 0,2.18257812 0,4.875 L0,34.125 C0,36.8174219 2.22455078,39 4.96875,39 L48.03125,39 C50.7754492,39 53,36.8174219 53,34.125 L53,11.375 C53,8.68257813 50.7754492,6.5 48.03125,6.5 Z",fill:"black","fill-opacity":"0.2",stroke:"none","stroke-width":"0"}}),d._v(" "),e("path",{staticClass:"svg-color-theme",attrs:{d:"M48.03125,12.75 C49.0609313,12.75 49.9941504,13.1577174 50.6692739,13.8201027 C51.3356976,14.4739525 51.75,15.3766531 51.75,16.375 L51.75,16.375 L51.75,34.125 C51.75,35.1233469 51.3356976,36.0260475 50.6692739,36.6798973 C49.9941504,37.3422826 49.0609313,37.75 48.03125,37.75 L48.03125,37.75 L4.96875,37.75 C3.93906868,37.75 3.00584961,37.3422826 2.33072613,36.6798973 C1.66430239,36.0260475 1.25,35.1233469 1.25,34.125 L1.25,34.125 L1.25,16.375 C1.25,15.3766531 1.66430239,14.4739525 2.33072613,13.8201027 C3.00584961,13.1577174 3.93906868,12.75 4.96875,12.75 L4.96875,12.75 Z","stroke-width":"2",fill:"green"}})])}),[],!1,null,null,null).exports},8569:(d,u,e)=>{e.d(u,{Z:()=>f});const t={name:"VueFolderTeamIcon"};const f=(0,e(1900).Z)(t,(function(){var d=this,u=d.$createElement,e=d._self._c||u;return e("svg",{attrs:{viewBox:"0 0 53 39",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("g",{attrs:{id:"V2",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{id:"team-folder"}},[e("path",{staticClass:"svg-color-theme",attrs:{d:"M48.03125,6.5 L29.790833,6.5 C28.7431613,6.5 27.7373076,6.08896217 26.9894703,5.35523504 L22.6980297,1.14476496 C21.9501924,0.41103783 20.9443387,-6.36543387e-16 19.896667,0 L4.96875,0 L4.96875,0 C2.22455078,0 0,2.18257812 0,4.875 L0,34.125 C0,36.8174219 2.22455078,39 4.96875,39 L48.03125,39 C50.7754492,39 53,36.8174219 53,34.125 L53,11.375 C53,8.68257813 50.7754492,6.5 48.03125,6.5 Z",stroke:"none","stroke-width":"0"}}),d._v(" "),e("path",{attrs:{d:"M48.03125,6.5 L29.790833,6.5 C28.7431613,6.5 27.7373076,6.08896217 26.9894703,5.35523504 L22.6980297,1.14476496 C21.9501924,0.41103783 20.9443387,-6.36543387e-16 19.896667,0 L4.96875,0 L4.96875,0 C2.22455078,0 0,2.18257812 0,4.875 L0,34.125 C0,36.8174219 2.22455078,39 4.96875,39 L48.03125,39 C50.7754492,39 53,36.8174219 53,34.125 L53,11.375 C53,8.68257813 50.7754492,6.5 48.03125,6.5 Z",fill:"black","fill-opacity":"0.2",stroke:"none","stroke-width":"0"}}),d._v(" "),e("path",{staticClass:"svg-color-theme",attrs:{d:"M48.03125,12.75 C49.0609313,12.75 49.9941504,13.1577174 50.6692739,13.8201027 C51.3356976,14.4739525 51.75,15.3766531 51.75,16.375 L51.75,16.375 L51.75,34.125 C51.75,35.1233469 51.3356976,36.0260475 50.6692739,36.6798973 C49.9941504,37.3422826 49.0609313,37.75 48.03125,37.75 L48.03125,37.75 L4.96875,37.75 C3.93906868,37.75 3.00584961,37.3422826 2.33072613,36.6798973 C1.66430239,36.0260475 1.25,35.1233469 1.25,34.125 L1.25,34.125 L1.25,16.375 C1.25,15.3766531 1.66430239,14.4739525 2.33072613,13.8201027 C3.00584961,13.1577174 3.93906868,12.75 4.96875,12.75 L4.96875,12.75 Z","stroke-width":"2",fill:"green"}}),d._v(" "),e("g",{staticClass:"svg-stroke-theme-darken",attrs:{id:"Icon",transform:"translate(8.000000, 20.000000)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.3",stroke:"black","stroke-opacity":"0.25"}},[e("path",{attrs:{d:"M9.59999943,10.7999994 L9.59999943,9.59999943 C9.59999943,8.27451611 8.52548289,7.19999957 7.19999957,7.19999957 L2.39999986,7.19999957 C1.07451654,7.19999957 0,8.27451611 0,9.59999943 L0,10.7999994"}}),d._v(" "),e("circle",{attrs:{cx:"4.79999971",cy:"2.39999986",r:"2.39999986"}}),d._v(" "),e("path",{attrs:{d:"M13.1999992,10.7999994 L13.1999992,9.59999943 C13.1991834,8.50627014 12.4589985,7.55143166 11.3999993,7.27799957"}}),d._v(" "),e("path",{attrs:{d:"M8.99999946,0.0779999954 C10.0619483,0.349901852 10.8047053,1.30679461 10.8047053,2.40299986 C10.8047053,3.4992051 10.0619483,4.45609786 8.99999946,4.72799972"}})])])])])}),[],!1,null,null,null).exports},5812:(d,u,e)=>{e.d(u,{Z:()=>p});var t=e(4886),f=e(9101),c=e(3119),a=e(167),n=e(1165),r=e(9470),i=e(6486),s=e(629),o=e(826);function l(d,u){var e=Object.keys(d);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(d);u&&(t=t.filter((function(u){return Object.getOwnPropertyDescriptor(d,u).enumerable}))),e.push.apply(e,t)}return e}function b(d){for(var u=1;u<arguments.length;u++){var e=null!=arguments[u]?arguments[u]:{};u%2?l(Object(e),!0).forEach((function(u){m(d,u,e[u])})):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(u){Object.defineProperty(d,u,Object.getOwnPropertyDescriptor(e,u))}))}return d}function m(d,u,e){return u in d?Object.defineProperty(d,u,{value:e,enumerable:!0,configurable:!0,writable:!0}):d[u]=e,d}const h={name:"ItemGrid",components:{FileIconThumbnail:c.Z,MoreHorizontalIcon:f.xhG,MemberAvatar:a.Z,FolderIcon:t.Z,CheckBox:r.Z,LinkIcon:f.xPt,EyeIcon:f.tEF,Emoji:n.Z},props:["mobileHandler","entry","canHover"],data:function(){return{mobileMultiSelect:!1,itemName:void 0,imageSrc:void 0}},computed:b(b({},(0,s.Se)(["isMultiSelectMode","clipboard","user"])),{},{isClicked:function(){var d=this;return this.clipboard.some((function(u){return u.data.id===d.entry.data.id}))},isAudio:function(){return"audio"===this.entry.data.type},isVideo:function(){return"video"===this.entry.data.type},isFile:function(){return"file"===this.entry.data.type},isImage:function(){return"image"===this.entry.data.type},isFolder:function(){return"folder"===this.entry.data.type},timeStamp:function(){return this.entry.data.attributes.deleted_at?this.$t("entry_thumbnail.deleted_at",{time:this.entry.data.attributes.deleted_at}):this.entry.data.attributes.created_at},canEditName:function(){return!this.$isMobile()&&!this.$isThisRoute(this.$route,["Trash","SharedSingleFile"])&&!this.$checkPermission("visitor")},folderItems:function(){return this.entry.data.attributes.deleted_at?this.entry.data.attributes.trashed_items:this.entry.data.attributes.items},canShowAuthor:function(){return this.$isThisRoute(this.$route,["SharedWithMe","TeamFolders"])&&!this.isFolder&&this.entry.data.relationships.creator&&this.user.data.id!==this.entry.data.relationships.creator.data.id},canShowLinkIcon:function(){return this.entry.data.relationships.shared&&!this.$isThisRoute(this.$route,["SharedSingleFile"])},canDrag:function(){return!this.isDeleted&&this.$checkPermission(["master","editor"])}}),methods:{getImageSrc:function(){this.imageSrc="svg"===this.entry.data.attributes.mimetype?this.entry.data.attributes.file_url:this.entry.data.attributes.thumbnail.sm},replaceByOriginal:function(){this.imageSrc=this.entry.data.attributes.file_url},showItemActions:function(){this.$store.commit("CLIPBOARD_CLEAR"),this.$store.commit("ADD_ITEM_TO_CLIPBOARD",this.entry),this.$showMobileMenu("file-menu"),o.U.$emit("mobile-context-menu:show",this.entry)},renameItem:(0,i.debounce)((function(d){""!==d.target.innerText.trim()&&this.$store.dispatch("renameItem",{id:this.entry.data.id,type:this.entry.data.type,name:d.target.innerText})}),300)},created:function(){var d=this;o.U.$on("change:name",(function(u){d.entry.data.id===u.id&&(d.itemName=u.name)})),o.U.$on("newFolder:focus",(function(u){d.$isMobile()||d.entry.data.id!==u||(d.$refs.name.focus(),document.execCommand("selectAll"))})),this.itemName=this.entry.data.attributes.name,"image"===this.entry.data.type&&this.getImageSrc()}};const p=(0,e(1900).Z)(h,(function(){var d=this,u=d.$createElement,e=d._self._c||u;return e("div",{staticClass:"relative z-0 flex h-48 select-none flex-wrap items-center justify-center rounded-lg border-2 border-dashed border-transparent px-1 pt-2 text-center sm:h-56 lg:h-60",class:{"bg-light-background dark:bg-dark-foreground":d.isClicked&&d.canHover,"dark:hover:bg-dark-foreground lg:hover:bg-light-background":d.canHover},attrs:{draggable:d.canDrag,spellcheck:"false"}},[d.isMultiSelectMode?e("CheckBox",{staticClass:"mr-5",attrs:{"is-clicked":d.isClicked}}):d._e(),d._v(" "),e("div",{staticClass:"w-full"},[e("div",{staticClass:"relative mx-auto"},[d.entry.data.attributes.emoji?e("Emoji",{staticClass:"mb-10 inline-block scale-150 transform text-5xl",attrs:{emoji:d.entry.data.attributes.emoji}}):d._e(),d._v(" "),d.isFolder&&!d.entry.data.attributes.emoji?e("FolderIcon",{staticClass:"mt-3 mb-5 inline-block scale-150 transform lg:mt-2 lg:mb-8",attrs:{item:d.entry}}):d._e(),d._v(" "),d.isFile||d.isVideo||d.isAudio||d.isImage&&!d.entry.data.attributes.thumbnail?e("div",{staticClass:"relative mx-auto w-24"},[d.user&&d.canShowAuthor?e("MemberAvatar",{staticClass:"absolute right-2 -bottom-5 z-10 z-10 scale-75 transform lg:-bottom-7 lg:scale-100",attrs:{size:38,"is-border":!0,member:d.entry.data.relationships.creator}}):d._e(),d._v(" "),e("FileIconThumbnail",{staticClass:"z-0 mt-5 mb-10 scale-125 transform lg:mb-12 lg:mt-6 lg:scale-150",attrs:{entry:d.entry}})],1):d._e(),d._v(" "),d.isImage&&d.entry.data.attributes.thumbnail?e("div",{staticClass:"relative mb-4 inline-block h-24 w-28 lg:h-28 lg:w-36"},[d.user&&d.canShowAuthor?e("MemberAvatar",{staticClass:"absolute -right-3 -bottom-2.5 z-10 scale-75 transform lg:scale-100",attrs:{size:38,"is-border":!0,member:d.entry.data.relationships.creator}}):d._e(),d._v(" "),e("img",{staticClass:"h-full w-full rounded-lg object-cover shadow-lg pointer-events-none",attrs:{src:d.imageSrc,alt:"",loading:"lazy"},on:{error:d.replaceByOriginal}})],1):d._e()],1),d._v(" "),e("div",{staticClass:"text-center"},[e("span",{ref:"name",staticClass:"inline-block w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold leading-3 tracking-tight md:px-6",class:{"hover:underline":d.canEditName},attrs:{contenteditable:d.canEditName},on:{input:d.renameItem,keydown:[function(u){if(!u.type.indexOf("key")&&d._k(u.keyCode,"delete",[8,46],u.key,["Backspace","Delete","Del"]))return null;u.stopPropagation()},function(u){return!u.type.indexOf("key")&&d._k(u.keyCode,"enter",13,u.key,"Enter")?null:d.$refs.name.blur()}],click:function(d){d.stopPropagation()}}},[d._v("\n                    "+d._s(d.itemName)+"\n                ")]),d._v(" "),e("div",{staticClass:"flex items-center justify-center"},[d.isFolder?d._e():e("small",{staticClass:"block text-xs text-gray-500 dark:text-gray-500"},[e("link-icon",{staticClass:"text-theme dark-text-theme vue-feather inline-block mr-0.5 mb-1",attrs:{size:"12"}}),d._v("\n\t\t\t\t\t\t"+d._s(d.entry.data.attributes.filesize)+",\n                        "),e("span",{staticClass:"hidden text-xs text-gray-500 dark:text-gray-500 lg:inline-block"},[d._v(d._s(d.timeStamp))])],1),d._v(" "),d.isFolder?e("small",{staticClass:"block text-xs text-gray-500 dark:text-gray-500"},[d.canShowLinkIcon?e("link-icon",{staticClass:"text-theme dark-text-theme vue-feather mr-0.5 mb-1 inline-block",attrs:{size:"12"}}):d._e(),d._v("\n                        "+d._s(0===d.folderItems?d.$t("empty"):d.$tc("folder.item_counts",d.folderItems))+", "),e("span",{staticClass:"hidden text-xs text-gray-500 dark:text-gray-500 lg:inline-block"},[d._v(d._s(d.timeStamp))])],1):d._e()])]),d._v(" "),d.mobileHandler&&!d.isMultiSelectMode&&d.$isMobile()?e("div",{staticClass:"relative flex items-center justify-center py-0.5 px-2"},[e("div",{staticClass:"hidden p-2.5 sm:block",on:{mouseup:function(u){return u.stopPropagation(),d.$openInDetailPanel(d.entry)}}},[e("eye-icon",{staticClass:"vue-feather inline-block opacity-30",attrs:{size:"18"}})],1),d._v(" "),e("div",{staticClass:"p-2.5",on:{mouseup:function(u){return u.stopPropagation(),d.showItemActions.apply(null,arguments)}}},[e("MoreHorizontalIcon",{staticClass:"vue-feather text-theme dark-text-theme inline-block",attrs:{size:"18"}})],1)]):d._e()])],1)}),[],!1,null,null,null).exports},1165:(d,u,e)=>{e.d(u,{Z:()=>b});var t=function(){var d={base:"https://twemoji.maxcdn.com/v/13.1.1/",ext:".png",size:"72x72",className:"emoji",convert:{fromCodePoint:function(d){var u="string"==typeof d?parseInt(d,16):d;if(u<65536)return n(u);return n(55296+((u-=65536)>>10),56320+(1023&u))},toCodePoint:g},onerror:function(){this.parentNode&&this.parentNode.replaceChild(r(this.alt,!1),this)},parse:function(u,e){e&&"function"!=typeof e||(e={callback:e});return("string"==typeof u?b:l)(u,{callback:e.callback||i,attributes:"function"==typeof e.attributes?e.attributes:h,base:"string"==typeof e.base?e.base:d.base,ext:e.ext||d.ext,size:e.folder||(t=e.size||d.size,"number"==typeof t?t+"x"+t:t),className:e.className||d.className,onerror:e.onerror||d.onerror});var t},replace:p,test:function(d){e.lastIndex=0;var u=e.test(d);return e.lastIndex=0,u}},u={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},e=/(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udeeb\udeec\udef4-\udefc\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78\udd7a-\uddb4\uddb7\uddba\uddbc-\uddcb\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,t=/\uFE0F/g,f=String.fromCharCode(8205),c=/[&<>'"]/g,a=/^(?:iframe|noframes|noscript|script|select|style|textarea)$/,n=String.fromCharCode;return d;function r(d,u){return document.createTextNode(u?d.replace(t,""):d)}function i(d,u){return"".concat(u.base,u.size,"/",d,u.ext)}function s(d,u){for(var e,t,f=d.childNodes,c=f.length;c--;)3===(t=(e=f[c]).nodeType)?u.push(e):1!==t||"ownerSVGElement"in e||a.test(e.nodeName.toLowerCase())||s(e,u);return u}function o(d){return g(d.indexOf(f)<0?d.replace(t,""):d)}function l(d,u){for(var t,f,c,a,n,i,l,b,m,h,p,g,v,y=s(d,[]),C=y.length;C--;){for(c=!1,a=document.createDocumentFragment(),i=(n=y[C]).nodeValue,b=0;l=e.exec(i);){if((m=l.index)!==b&&a.appendChild(r(i.slice(b,m),!0)),g=o(p=l[0]),b=m+p.length,v=u.callback(g,u),g&&v){for(f in(h=new Image).onerror=u.onerror,h.setAttribute("draggable","false"),t=u.attributes(p,g))t.hasOwnProperty(f)&&0!==f.indexOf("on")&&!h.hasAttribute(f)&&h.setAttribute(f,t[f]);h.className=u.className,h.alt=p,h.src=v,c=!0,a.appendChild(h)}h||a.appendChild(r(p,!1)),h=null}c&&(b<i.length&&a.appendChild(r(i.slice(b),!0)),n.parentNode.replaceChild(a,n))}return d}function b(d,u){return p(d,(function(d){var e,t,f=d,a=o(d),n=u.callback(a,u);if(a&&n){for(t in f="<img ".concat('class="',u.className,'" ','draggable="false" ','alt="',d,'"',' src="',n,'"'),e=u.attributes(d,a))e.hasOwnProperty(t)&&0!==t.indexOf("on")&&-1===f.indexOf(" "+t+"=")&&(f=f.concat(" ",t,'="',e[t].replace(c,m),'"'));f=f.concat("/>")}return f}))}function m(d){return u[d]}function h(){return null}function p(d,u){return String(d).replace(e,u)}function g(d,u){for(var e=[],t=0,f=0,c=0;c<d.length;)t=d.charCodeAt(c++),f?(e.push((65536+(f-55296<<10)+(t-56320)).toString(16)),f=0):55296<=t&&t<=56319?f=t:e.push(t.toString(16));return e.join(u||"-")}}();const f=t;function c(d,u){var e=Object.keys(d);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(d);u&&(t=t.filter((function(u){return Object.getOwnPropertyDescriptor(d,u).enumerable}))),e.push.apply(e,t)}return e}function a(d){for(var u=1;u<arguments.length;u++){var e=null!=arguments[u]?arguments[u]:{};u%2?c(Object(e),!0).forEach((function(u){n(d,u,e[u])})):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(u){Object.defineProperty(d,u,Object.getOwnPropertyDescriptor(e,u))}))}return d}function n(d,u,e){return u in d?Object.defineProperty(d,u,{value:e,enumerable:!0,configurable:!0,writable:!0}):d[u]=e,d}const r={name:"Emoji",props:["emoji"],data:function(){return{isApple:!1,sizeClass:void 0}},computed:a(a({},(0,e(629).Se)(["config"])),{},{transferEmoji:function(){return f.parse(this.emoji.char,{folder:"svg",ext:".svg",attributes:function(){return{loading:"lazy"}}})}})};var i=e(3379),s=e.n(i),o=e(4734),l={insert:"head",singleton:!1};s()(o.Z,l);o.Z.locals;const b=(0,e(1900).Z)(r,(function(){var d=this,u=d.$createElement,e=d._self._c||u;return d.emoji?e("div",["twemoji"===d.config.defaultEmoji?e("div",{staticStyle:{"font-size":"inherit",transform:"scale(0.95)"},domProps:{innerHTML:d._s(d.transferEmoji)}}):d._e(),d._v(" "),"applemoji"===d.config.defaultEmoji?e("div",{staticStyle:{"font-size":"inherit"}},[d._v("\n        "+d._s(d.emoji.char)+"\n    ")]):d._e()]):d._e()}),[],!1,null,null,null).exports},8473:(d,u,e)=>{e.r(u),e.d(u,{default:()=>b});var t=e(890),f=e(9621),c=e(5812),a=e(629),n=e(9669),r=e.n(n);function i(d,u){var e=Object.keys(d);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(d);u&&(t=t.filter((function(u){return Object.getOwnPropertyDescriptor(d,u).enumerable}))),e.push.apply(e,t)}return e}function s(d){for(var u=1;u<arguments.length;u++){var e=null!=arguments[u]?arguments[u]:{};u%2?i(Object(e),!0).forEach((function(u){o(d,u,e[u])})):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(u){Object.defineProperty(d,u,Object.getOwnPropertyDescriptor(e,u))}))}return d}function o(d,u,e){return u in d?Object.defineProperty(d,u,{value:e,enumerable:!0,configurable:!0,writable:!0}):d[u]=e,d}const l={name:"SharedSingleItem",components:{ButtonBase:t.Z,ItemGrid:c.Z,Video:f.Z},computed:s(s({},(0,a.Se)(["config","isDarkMode"])),{},{logoSrc:function(){return this.isDarkMode&&this.config.app_logo_horizontal?this.config.app_logo_horizontal_dark:this.config.app_logo_horizontal},isVideo:function(){return"video"===this.file.data.type}}),data:function(){return{file:void 0}},mounted:function(){var d=this;r().get("/api/browse/file/".concat(this.$router.currentRoute.params.token)).then((function(u){d.file=u.data})).catch((function(u){403===u.response.status&&d.$router.push({name:"SharedAuthentication"})}))}};const b=(0,e(1900).Z)(l,(function(){var d=this,u=d.$createElement,e=d._self._c||u;return e("div",{staticClass:"flex h-screen items-center justify-center p-4"},[d.file&&!d.isVideo?e("div",{staticClass:"fixed top-4 left-0 right-0"},[e("router-link",{staticClass:"block",attrs:{to:{name:"SignIn"}}},[d.config.app_logo_horizontal?e("img",{staticClass:"mx-auto w-44",attrs:{src:d.$getImage(d.logoSrc),alt:d.config.app_name}}):d._e(),d._v(" "),d.config.app_logo_horizontal?d._e():e("b",{staticClass:"mb-4 block text-xl font-bold text-center"},[d._v("\n                "+d._s(d.config.app_name)+"\n            ")])])],1):d._e(),d._v(" "),d.file?e("div",{staticClass:"w-full text-center"},[d.isVideo?e("router-link",{staticClass:"block",attrs:{to:{name:"SignIn"}}},[d.config.app_logo_horizontal?e("img",{staticClass:"mx-auto w-44",attrs:{src:d.$getImage(d.logoSrc),alt:d.config.app_name}}):d._e(),d._v(" "),d.config.app_logo_horizontal?d._e():e("b",{staticClass:"mb-4 block text-xl font-bold"},[d._v("\n                "+d._s(d.config.app_name)+"\n            ")])]):d._e(),d._v(" "),d.isVideo?d._e():e("ItemGrid",{staticClass:"mt-2",attrs:{entry:d.file,"mobile-handler":!1}}),d._v(" "),d.isVideo?e("div",{staticClass:"mb-4"},[e("Video",{staticClass:"mx-auto my-10 w-full self-center rounded-lg shadow-xl lg:max-w-xl xl:max-w-3xl 2xl:max-w-5xl",attrs:{file:d.file}}),d._v(" "),e("div",{staticClass:"text-center"},[e("b",{staticClass:"inline-block w-full text-sm tracking-tight md:px-6"},[d._v("\n                    "+d._s(d.file.data.attributes.name)+"\n                ")]),d._v(" "),e("div",{staticClass:"flex items-center justify-center"},[e("small",{staticClass:"block text-xs text-gray-500 dark:text-gray-500"},[d._v("\n                        "+d._s(d.file.data.attributes.filesize)),e("span",{staticClass:"text-xs text-gray-500 lg:inline-block"},[d._v(", "+d._s(d.file.data.attributes.created_at))])])])])],1):d._e(),d._v(" "),e("ButtonBase",{staticClass:"mx-auto",attrs:{"button-style":"theme"},nativeOn:{click:function(u){return d.$downloadSelection(d.file)}}},[d._v("\n            "+d._s(d.$t("page_shared.download_file"))+"\n        ")]),d._v(" "),d.config.allowedAdsense&&d.config.adsenseBanner02?e("div",{staticClass:"mt-5 min-h-[120px]",domProps:{innerHTML:d._s(d.config.adsenseBanner02)}}):d._e()],1):d._e()])}),[],!1,null,null,null).exports}}]);
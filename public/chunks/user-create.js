(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"0a8W":function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".select[data-v-ff7bf0ec]{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.select-search[data-v-ff7bf0ec]{background:#fff;position:sticky;top:0;padding:13px}.select-search .search-input[data-v-ff7bf0ec]{border:1px solid transparent;background:#f4f5f6;transition:all .15s ease;font-size:.875em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%}.input-options[data-v-ff7bf0ec]{box-shadow:0 5px 15px rgba(0,0,0,.12);background:#fff;border-radius:8px;position:absolute;overflow:hidden;top:65px;left:0;right:0;z-index:9;max-height:295px;overflow-y:auto}.input-options .option-item[data-v-ff7bf0ec]{padding:13px 20px;display:block;cursor:pointer}.input-options .option-item[data-v-ff7bf0ec]:hover{color:#00bc7e;background:#f4f5f6}.input-options .option-item[data-v-ff7bf0ec]:last-child{border-bottom:none}.input-area[data-v-ff7bf0ec]{border:1px solid transparent;justify-content:space-between;box-shadow:0 1px 5px rgba(0,0,0,.12);align-items:center;border-radius:8px;padding:13px 20px;display:flex;outline:0;width:100%;cursor:pointer}.input-area[data-v-ff7bf0ec],.input-area .chevron[data-v-ff7bf0ec]{transition:all .15s ease}.input-area.is-active .chevron[data-v-ff7bf0ec]{transform:rotate(180deg)}.input-area.is-error[data-v-ff7bf0ec]{border-color:#fd397a;box-shadow:0 0 7px rgba(253,57,122,.3)}.option-icon[data-v-ff7bf0ec]{width:20px;display:inline-block;font-size:.625em}.option-icon svg[data-v-ff7bf0ec]{margin-top:-4px;vertical-align:middle}.option-icon svg circle[data-v-ff7bf0ec],.option-icon svg line[data-v-ff7bf0ec],.option-icon svg path[data-v-ff7bf0ec]{color:inherit}.option-value[data-v-ff7bf0ec]{font-size:.875em;font-weight:700;width:100%;vertical-align:middle}.option-value.placehoder[data-v-ff7bf0ec]{color:rgba(27,37,57,.5)}.slide-in-enter-active[data-v-ff7bf0ec]{transition:all .15s ease}.slide-in-enter[data-v-ff7bf0ec]{opacity:0;transform:translateY(-50px)}.dark .select-search[data-v-ff7bf0ec]{background:#1e2024}.dark .select-search .search-input[data-v-ff7bf0ec]{background:#151515}.dark .input-area[data-v-ff7bf0ec]{background:#1e2024;border-color:#1e2024}.dark .popup-wrapper .input-area[data-v-ff7bf0ec]{background:#25272c}.dark .input-options[data-v-ff7bf0ec]{background:#1e2024}.dark .input-options .option-item[data-v-ff7bf0ec]{border-bottom:none}.dark .input-options .option-item[data-v-ff7bf0ec]:hover{background:#2a2c32}.dark .input-options .option-item:hover .option-icon circle[data-v-ff7bf0ec],.dark .input-options .option-item:hover .option-icon path[data-v-ff7bf0ec]{color:inherit}.dark .input-options .option-item[data-v-ff7bf0ec]:last-child{border-bottom:none}.dark .option-value.placehoder[data-v-ff7bf0ec]{color:#7d858c}",""])},"2Sb1":function(e,t,a){"use strict";var r={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:a("CjXH").h}},o=(a("xdXa"),a("KHd+")),i=Object(o.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-header"},[e.canBack?a("div",{staticClass:"go-back",on:{click:function(t){return e.$router.back()}}},[a("chevron-left-icon",{attrs:{size:"17"}})],1):e._e(),e._v(" "),a("div",{staticClass:"content"},[a("h1",{staticClass:"title"},[e._v(e._s(e.title))])])])}),[],!1,null,"52888952",null);t.a=i.exports},"36qJ":function(e,t,a){var r=a("TnoB");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,o);r.locals&&(e.exports=r.locals)},"4TWA":function(e,t,a){"use strict";var r=a("CjXH"),o=a("LvDl"),i={name:"SelectInput",props:["placeholder","options","isError","default"],components:{Edit2Icon:r.u,UserIcon:r.nb,ChevronDownIcon:r.g},watch:{query:Object(o.debounce)((function(e){this.searchedResults=Object(o.omitBy)(this.options,(function(t){return!t.label.toLowerCase().includes(e.toLowerCase())}))}),200)},computed:{isSearching:function(){return this.searchedResults&&""!==this.query},optionList:function(){return this.isSearching?this.searchedResults:this.options}},data:function(){return{searchedResults:void 0,selected:void 0,isOpen:!1,query:""}},methods:{selectOption:function(e){this.$emit("input",e.value),this.selected=e,this.isOpen=!1},openMenu:function(){var e=this;this.isOpen=!this.isOpen,this.isOpen&&this.$nextTick((function(){return e.$refs.search.focus()}))}},created:function(){var e=this;this.default&&(this.selected=this.options.find((function(t){return t.value===e.default})))}},n=(a("zmzx"),a("KHd+")),s=Object(n.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"select"},[a("div",{staticClass:"input-area",class:{"is-active":e.isOpen,"is-error":e.isError},on:{click:e.openMenu}},[e.selected?a("div",{staticClass:"selected"},[e.selected.icon?a("div",{staticClass:"option-icon"},["user"===e.selected.icon?a("user-icon",{staticClass:"text-theme dark-text-theme",attrs:{size:"14"}}):e._e(),e._v(" "),"user-edit"===e.selected.icon?a("edit2-icon",{staticClass:"text-theme dark-text-theme",attrs:{size:"14"}}):e._e()],1):e._e(),e._v(" "),a("span",{staticClass:"option-value"},[e._v(e._s(e.selected.label))])]):e._e(),e._v(" "),e.selected?e._e():a("div",{staticClass:"not-selected"},[a("span",{staticClass:"option-value placehoder"},[e._v(e._s(e.placeholder))])]),e._v(" "),a("chevron-down-icon",{staticClass:"chevron",attrs:{size:"19"}})],1),e._v(" "),a("transition",{attrs:{name:"slide-in"}},[e.isOpen?a("div",{staticClass:"input-options"},[e.options.length>5?a("div",{staticClass:"select-search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],ref:"search",staticClass:"search-input focus-border-theme",attrs:{type:"text",placeholder:e.$t("select_search_placeholder")},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}})]):e._e(),e._v(" "),a("ul",{staticClass:"option-list"},e._l(e.optionList,(function(t,r){return a("li",{key:r,staticClass:"option-item",on:{click:function(a){return e.selectOption(t)}}},[t.icon?a("div",{staticClass:"option-icon"},["user"===t.icon?a("user-icon",{attrs:{size:"14"}}):e._e(),e._v(" "),"user-edit"===t.icon?a("edit2-icon",{attrs:{size:"14"}}):e._e()],1):e._e(),e._v(" "),a("span",{staticClass:"option-value"},[e._v(e._s(t.label))])])})),0)]):e._e()])],1)}),[],!1,null,"ff7bf0ec",null);t.a=s.exports},"5/d3":function(e,t,a){"use strict";a("B+0d")},"B+0d":function(e,t,a){var r=a("FgVS");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,o);r.locals&&(e.exports=r.locals)},"D+dh":function(e,t,a){"use strict";var r=a("CjXH"),o={name:"ImageInput",props:["image","error"],components:{ImageIcon:r.H,XIcon:r.sb},data:function(){return{imagePreview:void 0}},computed:{isData:function(){return void 0!==this.imagePreview&&""!==this.imagePreview}},methods:{resetImage:function(){this.imagePreview=void 0,this.$emit("input",void 0)},showImagePreview:function(e){var t=this,a=e.target.files[0].name,r=a.substring(a.lastIndexOf(".")+1).toLowerCase();if(["png","jpg","jpeg","svg"].includes(r)){var o=e.target.files[0],i=new FileReader;i.onload=function(){return t.imagePreview=i.result},i.readAsDataURL(o),this.$emit("input",e.target.files[0])}else alert(this.$t("validation_errors.wrong_image"))}},created:function(){this.image&&(this.imagePreview=this.image)}},i=(a("5/d3"),a("KHd+")),n=Object(i.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dropzone",class:{"is-error":e.error}},[e.imagePreview?a("div",{staticClass:"reset-image",on:{click:e.resetImage}},[a("x-icon",{staticClass:"close-icon text-theme",attrs:{size:"14"}})],1):e._e(),e._v(" "),a("input",{ref:"file",staticClass:"dummy",attrs:{type:"file"},on:{change:function(t){return e.showImagePreview(t)}}}),e._v(" "),e.imagePreview?a("img",{ref:"image",staticClass:"image-preview",attrs:{src:e.imagePreview}}):e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isData,expression:"! isData"}],staticClass:"dropzone-message"},[a("image-icon",{staticClass:"icon-upload text-theme",attrs:{size:"28"}}),e._v(" "),a("span",{staticClass:"dropzone-title"},[e._v("\n            "+e._s(e.$t("input_image.title"))+"\n        ")]),e._v(" "),a("span",{staticClass:"dropzone-description"},[e._v("\n            "+e._s(e.$t("input_image.supported"))+"\n        ")])],1)])}),[],!1,null,"2449d24c",null);t.a=n.exports},D62o:function(e,t,a){"use strict";a("xCqy");var r=a("CjXH"),o={name:"MobileHeader",props:["title"],components:{ChevronLeftIcon:r.h,MenuIcon:r.P},methods:{goBack:function(){this.$router.back()}}},i=(a("lpU+"),a("KHd+")),n=Object(i.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"mobile-header"},[a("div",{staticClass:"go-back",on:{click:e.goBack}},[a("chevron-left-icon",{staticClass:"icon",attrs:{size:"17"}})],1),e._v(" "),a("div",{staticClass:"location-name"},[e._v(e._s(e.title))]),e._v(" "),a("div",{staticClass:"mobile-menu",on:{click:function(t){return e.$showMobileMenu("user-navigation")}}},[a("menu-icon",{staticClass:"icon",attrs:{size:"17"}})],1)])}),[],!1,null,"0da6bf54",null);t.a=n.exports},EeBR:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".page-header[data-v-52888952]{display:flex;align-items:center;background:#fff;z-index:9;width:100%;position:sticky;top:0;padding-top:20px;padding-bottom:20px}.page-header .title[data-v-52888952]{font-size:1.125em;font-weight:700;color:#1b2539}.page-header .go-back[data-v-52888952]{margin-right:10px;cursor:pointer}.page-header .go-back svg[data-v-52888952]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:960px){.page-header .title[data-v-52888952]{font-size:1.125em}}@media only screen and (max-width:690px){.page-header[data-v-52888952]{display:none}}.dark .page-header[data-v-52888952]{background:#151515}.dark .page-header .title[data-v-52888952]{color:#bec6cf}.dark .page-header .icon path[data-v-52888952]{fill:#00bc7e}",""])},FgVS:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".dropzone[data-v-2449d24c]{border:1px dashed #a1abc2;border-radius:8px;position:relative;text-align:center;display:flex;align-items:center;min-height:175px}.dropzone.is-error[data-v-2449d24c]{border:2px dashed rgba(253,57,122,.3)}.dropzone.is-error .dropzone-title[data-v-2449d24c]{color:#fd397a}.dropzone.is-error .icon-upload circle[data-v-2449d24c],.dropzone.is-error .icon-upload polyline[data-v-2449d24c],.dropzone.is-error .icon-upload rect[data-v-2449d24c]{stroke:#fd397a}.dropzone input[type=file][data-v-2449d24c]{opacity:0;position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;width:100%;cursor:pointer}.dropzone .image-preview[data-v-2449d24c]{position:absolute;width:100%;height:100%;-o-object-fit:contain;object-fit:contain;left:0;padding:25px;display:block}.dropzone .image-preview.fit-image[data-v-2449d24c]{-o-object-fit:cover;object-fit:cover;border-radius:12px;overflow:hidden}.dropzone .dropzone-message[data-v-2449d24c]{padding:50px 0;width:100%}.dropzone .dropzone-message .icon-upload circle[data-v-2449d24c],.dropzone .dropzone-message .icon-upload polyline[data-v-2449d24c],.dropzone .dropzone-message .icon-upload rect[data-v-2449d24c]{color:inherit}.dropzone .dropzone-message .dropzone-title[data-v-2449d24c]{font-size:1em;font-weight:700;display:block}.dropzone .dropzone-message .dropzone-description[data-v-2449d24c]{color:rgba(27,37,57,.7);font-size:.75em}.dropzone .reset-image[data-v-2449d24c]{z-index:2;background:#fff;border-radius:50px;display:block;position:absolute;right:0;top:0;cursor:pointer;transform:translateY(-50%) translateX(50%);padding:0 4px;box-shadow:0 1px 5px rgba(0,0,0,.12)}.dropzone .reset-image .close-icon[data-v-2449d24c]{vertical-align:middle}.dropzone .reset-image .close-icon line path[data-v-2449d24c]{fill:#1b2539}.dark .dropzone[data-v-2449d24c]{border-color:hsla(0,0%,100%,.2)}.dark .dropzone .dropzone-message .icon-upload line[data-v-2449d24c],.dark .dropzone .dropzone-message .icon-upload path[data-v-2449d24c],.dark .dropzone .dropzone-message .icon-upload polyline[data-v-2449d24c]{color:inherit}.dark .dropzone .dropzone-message .dropzone-description[data-v-2449d24c]{color:#7d858c}",""])},KJww:function(e,t,a){var r=a("c6IS");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,o);r.locals&&(e.exports=r.locals)},KutZ:function(e,t,a){var r=a("EeBR");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,o);r.locals&&(e.exports=r.locals)},NEz6:function(e,t,a){"use strict";a("KJww")},Otk1:function(e,t,a){"use strict";a("36qJ")},Qak4:function(e,t,a){var r=a("qESJ");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,o);r.locals&&(e.exports=r.locals)},"T3V+":function(e,t,a){"use strict";a.r(t);var r=a("o0o1"),o=a.n(r),i=a("A5+z"),n=a("4TWA"),s=a("D+dh"),d=a("eZ9V"),l=a("D62o"),p=a("THmQ"),c=a("Nv84"),u=a("2Sb1"),b=a("TJPC"),f=a("L2JU"),m=a("xCqy"),v=a("vDqi"),g=a.n(v);function h(e,t,a,r,o,i,n){try{var s=e[i](n),d=s.value}catch(e){return void a(e)}s.done?t(d):Promise.resolve(d).then(r,o)}function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function x(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var w={name:"Profile",components:{ValidationProvider:i.ValidationProvider,ValidationObserver:i.ValidationObserver,SectionTitle:p.a,MobileHeader:l.a,SelectInput:n.a,ButtonBase:c.a,ImageInput:s.a,PageHeader:u.a,FormLabel:d.a,required:b.a},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(Object(a),!0).forEach((function(t){x(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},Object(f.b)(["roles"])),data:function(){return{isLoading:!1,user:{role:"",avatar:void 0,name:"",email:"",password:"",password_confirmation:"",storage_capacity:5}}},methods:{createUser:function(){var e,t=this;return(e=o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.createUser.validate();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:t.isLoading=!0,(a=new FormData).append("name",t.user.name),a.append("role",t.user.role),a.append("email",t.user.email),a.append("password",t.user.password),a.append("storage_capacity",t.user.storage_capacity),a.append("password_confirmation",t.user.password_confirmation),t.user.avatar&&a.append("avatar",t.user.avatar),g.a.post("/api/admin/users",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.isLoading=!1,m.a.$emit("toaster",{type:"success",message:t.$t("toaster.created_user")}),t.$router.push({name:"UserDetail",params:{id:e.data.data.id}})})).catch((function(e){422==e.response.status?(e.response.data.errors.email&&t.$refs.createUser.setErrors({email:e.response.data.errors.email}),e.response.data.errors.password&&t.$refs.createUser.setErrors({password:e.response.data.errors.password}),e.response.data.errors.storage_capacity&&t.$refs.createUser.setErrors({"storage capacity":t.$t("errors.capacity_digit")})):m.a.$emit("alert:open",{title:t.$t("popup_error.title"),message:t.$t("popup_error.message")}),t.isLoading=!1}));case 15:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(r,o){var i=e.apply(t,a);function n(e){h(i,r,o,n,s,"next",e)}function s(e){h(i,r,o,n,s,"throw",e)}n(void 0)}))})()}}},k=(a("vjsQ"),a("KHd+")),y=Object(k.a)(w,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"single-page"}},[a("div",{staticClass:"small-width",attrs:{id:"page-content"}},[a("MobileHeader",{attrs:{title:e.$t(e.$router.currentRoute.meta.title)}}),e._v(" "),a("PageHeader",{attrs:{"can-back":!0,title:e.$t(e.$router.currentRoute.meta.title)}}),e._v(" "),a("div",{staticClass:"content-page"},[a("ValidationObserver",{ref:"createUser",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),e.createUser(t)}},scopedSlots:e._u([{key:"default",fn:function(t){t.invalid;return[a("div",{staticClass:"form-group"},[a("FormLabel",[e._v(e._s(e.$t("admin_page_user.create_user.group_details")))]),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_page_user.create_user.avatar")))]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"avatar"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("ImageInput",{attrs:{error:r[0]},model:{value:e.user.avatar,callback:function(t){e.$set(e.user,"avatar",t)},expression:"user.avatar"}})]}}],null,!0)})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("page_registration.label_email"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"email",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"focus-border-theme",class:{"is-error":r[0]},attrs:{placeholder:e.$t("admin_page_user.create_user.label_email"),type:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e._v(" "),r[0]?a("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("page_registration.label_name"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"user name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"focus-border-theme",class:{"is-error":r[0]},attrs:{placeholder:e.$t("admin_page_user.create_user.label_name"),type:"text"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}}),e._v(" "),r[0]?a("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),a("div",{staticClass:"wrapper-inline"},[a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("page_registration.label_pass"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"focus-border-theme",class:{"is-error":r[0]},attrs:{placeholder:e.$t("page_registration.placeholder_pass"),type:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e._v(" "),r[0]?a("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("page_registration.label_confirm_pass"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"password confirm",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password_confirmation,expression:"user.password_confirmation"}],staticClass:"focus-border-theme",class:{"is-error":r[0]},attrs:{placeholder:e.$t("admin_page_user.create_user.label_conf_pass"),type:"password"},domProps:{value:e.user.password_confirmation},on:{input:function(t){t.target.composing||e.$set(e.user,"password_confirmation",t.target.value)}}}),e._v(" "),r[0]?a("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1)])],1),e._v(" "),a("div",{staticClass:"form-group"},[a("FormLabel",[e._v(e._s(e.$t("admin_page_user.create_user.group_settings")))]),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_page_user.select_role"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"permission",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("SelectInput",{attrs:{options:e.$translateSelectOptions(e.roles),placeholder:e.$t("admin_page_user.select_role"),isError:r[0]},model:{value:e.user.role,callback:function(t){e.$set(e.user,"role",t)},expression:"user.role"}}),e._v(" "),r[0]?a("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_page_user.label_change_capacity")))]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"storage capacity",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.storage_capacity,expression:"user.storage_capacity"}],staticClass:"focus-border-theme",class:{"is-error":r[0]},attrs:{min:"1",max:"999999999",placeholder:e.$t("admin_page_user.label_change_capacity"),type:"number"},domProps:{value:e.user.storage_capacity},on:{input:function(t){t.target.composing||e.$set(e.user,"storage_capacity",t.target.value)}}}),e._v(" "),r[0]?a("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1)],1),e._v(" "),a("div",{staticClass:"form-group"},[a("ButtonBase",{attrs:{disabled:e.isLoading,loading:e.isLoading,"button-style":"theme",type:"submit"}},[e._v("\n                        "+e._s(e.$t("admin_page_user.create_user.submit"))+"\n                    ")])],1)]}}])})],1)],1)])}),[],!1,null,"53fbb362",null);t.default=y.exports},THmQ:function(e,t,a){"use strict";var r={name:"SectionTitle"},o=(a("NEz6"),a("KHd+")),i=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"9cac37aa",null);t.a=i.exports},TJPC:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));function r(e){return null==e}function o(e){return Array.isArray(e)&&0===e.length}var i={validate:function(e,t){var a=(void 0===t?{allowFalse:!0}:t).allowFalse,i={valid:!1,required:!0};return r(e)||o(e)?i:!1!==e||a?(i.valid=!!String(e).trim().length,i):i},params:[{name:"allowFalse",default:!0}],computesRequired:!0}},TnoB:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".form-label[data-v-b034447c]{display:flex;align-items:center;margin-bottom:30px}.form-label .icon[data-v-b034447c]{margin-right:10px}.form-label .icon circle[data-v-b034447c],.form-label .icon line[data-v-b034447c],.form-label .icon path[data-v-b034447c],.form-label .icon rect[data-v-b034447c]{color:inherit}.form-label .label[data-v-b034447c]{font-size:1.125em;font-weight:700}.dark .form-label .label[data-v-b034447c]{color:#bec6cf}",""])},baB4:function(e,t,a){var r=a("hqEK");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,o);r.locals&&(e.exports=r.locals)},c6IS:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".text-label[data-v-9cac37aa]{font-size:.75em;color:#afafaf;font-weight:700;display:block;margin-bottom:20px}.dark .text-label[data-v-9cac37aa]{color:#00bc7e}",""])},eZ9V:function(e,t,a){"use strict";var r=a("CjXH"),o={name:"FormLabel",props:["icon"],components:{KeyIcon:r.J,Edit2Icon:r.u,SettingsIcon:r.cb,SmartphoneIcon:r.eb}},i=(a("Otk1"),a("KHd+")),n=Object(i.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-label"},[e.icon?e._e():a("edit-2-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}),e._v(" "),"settings"===e.icon?a("settings-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):e._e(),e._v(" "),"smartphone"===e.icon?a("smartphone-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):e._e(),e._v(" "),"key"===e.icon?a("key-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):e._e(),e._v(" "),a("b",{staticClass:"label"},[e._t("default")],2)],1)}),[],!1,null,"b034447c",null);t.a=n.exports},hqEK:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".form[data-v-53fbb362]{max-width:700px}.form.inline-form[data-v-53fbb362]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-53fbb362]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-53fbb362]{position:absolute;left:0;bottom:-25px}.form.block-form .switch-wrapper[data-v-53fbb362]{padding-bottom:13px;margin-bottom:13px;border-bottom:1px solid #f4f5f6}.form.block-form .switch-wrapper[data-v-53fbb362]:last-child{padding-bottom:0;margin-bottom:0;border-bottom:none}.form.block-form .wrapper-inline[data-v-53fbb362]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-53fbb362]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-53fbb362]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-53fbb362]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-53fbb362]:last-child{margin-bottom:0}.form.block-form .button[data-v-53fbb362]{margin-top:50px}.form .inline-wrapper[data-v-53fbb362]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-53fbb362]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-53fbb362]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.input-help[data-v-53fbb362]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-53fbb362]{display:flex}.single-line-form .submit-button[data-v-53fbb362]{margin-left:20px}.error-message[data-v-53fbb362]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-53fbb362]{width:100%}input[type=email][data-v-53fbb362],input[type=number][data-v-53fbb362],input[type=password][data-v-53fbb362],input[type=text][data-v-53fbb362],textarea[data-v-53fbb362]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-53fbb362],input[type=number].is-error[data-v-53fbb362],input[type=password].is-error[data-v-53fbb362],input[type=text].is-error[data-v-53fbb362],textarea.is-error[data-v-53fbb362]{border-color:#fd397a}input[type=email][data-v-53fbb362]::-moz-placeholder,input[type=number][data-v-53fbb362]::-moz-placeholder,input[type=password][data-v-53fbb362]::-moz-placeholder,input[type=text][data-v-53fbb362]::-moz-placeholder,textarea[data-v-53fbb362]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-53fbb362]:-ms-input-placeholder,input[type=number][data-v-53fbb362]:-ms-input-placeholder,input[type=password][data-v-53fbb362]:-ms-input-placeholder,input[type=text][data-v-53fbb362]:-ms-input-placeholder,textarea[data-v-53fbb362]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-53fbb362]::placeholder,input[type=number][data-v-53fbb362]::placeholder,input[type=password][data-v-53fbb362]::placeholder,input[type=text][data-v-53fbb362]::placeholder,textarea[data-v-53fbb362]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][disabled][data-v-53fbb362],input[type=number][disabled][data-v-53fbb362],input[type=password][disabled][data-v-53fbb362],input[type=text][disabled][data-v-53fbb362],textarea[disabled][data-v-53fbb362]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}input[type=color][data-v-53fbb362]{width:38px!important;height:40px;border:none;outline:none;background:none;min-width:0!important}.additional-link[data-v-53fbb362]{font-size:1em;margin-top:50px;display:block}.additional-link a[data-v-53fbb362],.additional-link b[data-v-53fbb362]{cursor:pointer}.additional-link a[data-v-53fbb362]:hover,.additional-link b[data-v-53fbb362]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-53fbb362]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-53fbb362]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-53fbb362],.form textarea[data-v-53fbb362]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-53fbb362]{display:block}.form.block-form .block-wrapper label[data-v-53fbb362]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-53fbb362]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-53fbb362]{display:block}.form.inline-form .input-wrapper .error-message[data-v-53fbb362]{position:relative;bottom:0}.form .button[data-v-53fbb362]{padding:14px 32px}.single-line-form[data-v-53fbb362]{display:block}.single-line-form .submit-button[data-v-53fbb362]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-53fbb362],input[type=number][data-v-53fbb362],input[type=password][data-v-53fbb362],input[type=text][data-v-53fbb362],textarea[data-v-53fbb362]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-53fbb362]{display:block}}.dark .form .input-help[data-v-53fbb362]{color:#7d858c}.dark .form.block-form .block-wrapper label[data-v-53fbb362]{color:#bec6cf}.dark .form.block-form .switch-wrapper[data-v-53fbb362]{border-color:hsla(0,0%,100%,.02)}.dark .form .inline-wrapper .switch-label .input-label[data-v-53fbb362]{color:#bec6cf}.dark input[type=email][data-v-53fbb362],.dark input[type=number][data-v-53fbb362],.dark input[type=password][data-v-53fbb362],.dark input[type=text][data-v-53fbb362],.dark textarea[data-v-53fbb362]{border-color:#1e2024;background:#1e2024;color:#bec6cf}.dark input[type=email][data-v-53fbb362]::-moz-placeholder,.dark input[type=number][data-v-53fbb362]::-moz-placeholder,.dark input[type=password][data-v-53fbb362]::-moz-placeholder,.dark input[type=text][data-v-53fbb362]::-moz-placeholder,.dark textarea[data-v-53fbb362]::-moz-placeholder{color:#7d858c}.dark input[type=email][data-v-53fbb362]:-ms-input-placeholder,.dark input[type=number][data-v-53fbb362]:-ms-input-placeholder,.dark input[type=password][data-v-53fbb362]:-ms-input-placeholder,.dark input[type=text][data-v-53fbb362]:-ms-input-placeholder,.dark textarea[data-v-53fbb362]:-ms-input-placeholder{color:#7d858c}.dark input[type=email][data-v-53fbb362]::placeholder,.dark input[type=number][data-v-53fbb362]::placeholder,.dark input[type=password][data-v-53fbb362]::placeholder,.dark input[type=text][data-v-53fbb362]::placeholder,.dark textarea[data-v-53fbb362]::placeholder{color:#7d858c}.dark input[type=email][disabled][data-v-53fbb362],.dark input[type=number][disabled][data-v-53fbb362],.dark input[type=password][disabled][data-v-53fbb362],.dark input[type=text][disabled][data-v-53fbb362],.dark textarea[disabled][data-v-53fbb362]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}.dark .popup-wrapper input[type=email][data-v-53fbb362],.dark .popup-wrapper input[type=number][data-v-53fbb362],.dark .popup-wrapper input[type=password][data-v-53fbb362],.dark .popup-wrapper input[type=text][data-v-53fbb362],.dark .popup-wrapper textarea[data-v-53fbb362]{background:#25272c}",""])},"lpU+":function(e,t,a){"use strict";a("Qak4")},pI4u:function(e,t,a){var r=a("0a8W");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,o);r.locals&&(e.exports=r.locals)},qESJ:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".mobile-header[data-v-0da6bf54]{padding:10px 0;text-align:center;background:#fff;position:sticky;display:none;z-index:6;top:0}.mobile-header>div[data-v-0da6bf54]{flex-grow:1;align-self:center;white-space:nowrap}.mobile-header .go-back[data-v-0da6bf54]{text-align:left}.mobile-header .location-name[data-v-0da6bf54]{line-height:1;text-align:center;width:100%;vertical-align:middle;font-size:.9375em;color:#1b2539;font-weight:700;max-width:220px;overflow:hidden;text-overflow:ellipsis;display:inline-block}.mobile-header .mobile-menu[data-v-0da6bf54]{text-align:right}.mobile-header .icon[data-v-0da6bf54]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:690px){.mobile-header[data-v-0da6bf54]{display:flex;margin-bottom:15px}}.dark .mobile-header[data-v-0da6bf54]{background:#151515}.dark .mobile-header .location-name[data-v-0da6bf54]{color:#bec6cf}",""])},vjsQ:function(e,t,a){"use strict";a("baB4")},xdXa:function(e,t,a){"use strict";a("KutZ")},zmzx:function(e,t,a){"use strict";a("pI4u")}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+Pqb":function(a,e,t){"use strict";var i={name:"ProgressBar",props:["progress"]},o=(t("NQIx"),t("KHd+")),r=Object(o.a)(i,(function(){var a=this.$createElement,e=this._self._c||a;return e("div",{staticClass:"progress-bar"},[e("span",{staticClass:"bg-theme",style:{width:this.progress+"%"}})])}),[],!1,null,"39123ae4",null);e.a=r.exports},"0a8W":function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".select[data-v-ff7bf0ec]{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.select-search[data-v-ff7bf0ec]{background:#fff;position:sticky;top:0;padding:13px}.select-search .search-input[data-v-ff7bf0ec]{border:1px solid transparent;background:#f4f5f6;transition:all .15s ease;font-size:.875em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%}.input-options[data-v-ff7bf0ec]{box-shadow:0 5px 15px rgba(0,0,0,.12);background:#fff;border-radius:8px;position:absolute;overflow:hidden;top:65px;left:0;right:0;z-index:9;max-height:295px;overflow-y:auto}.input-options .option-item[data-v-ff7bf0ec]{padding:13px 20px;display:block;cursor:pointer}.input-options .option-item[data-v-ff7bf0ec]:hover{color:#00bc7e;background:#f4f5f6}.input-options .option-item[data-v-ff7bf0ec]:last-child{border-bottom:none}.input-area[data-v-ff7bf0ec]{border:1px solid transparent;justify-content:space-between;box-shadow:0 1px 5px rgba(0,0,0,.12);align-items:center;border-radius:8px;padding:13px 20px;display:flex;outline:0;width:100%;cursor:pointer}.input-area[data-v-ff7bf0ec],.input-area .chevron[data-v-ff7bf0ec]{transition:all .15s ease}.input-area.is-active .chevron[data-v-ff7bf0ec]{transform:rotate(180deg)}.input-area.is-error[data-v-ff7bf0ec]{border-color:#fd397a;box-shadow:0 0 7px rgba(253,57,122,.3)}.option-icon[data-v-ff7bf0ec]{width:20px;display:inline-block;font-size:.625em}.option-icon svg[data-v-ff7bf0ec]{margin-top:-4px;vertical-align:middle}.option-icon svg circle[data-v-ff7bf0ec],.option-icon svg line[data-v-ff7bf0ec],.option-icon svg path[data-v-ff7bf0ec]{color:inherit}.option-value[data-v-ff7bf0ec]{font-size:.875em;font-weight:700;width:100%;vertical-align:middle}.option-value.placehoder[data-v-ff7bf0ec]{color:rgba(27,37,57,.5)}.slide-in-enter-active[data-v-ff7bf0ec]{transition:all .15s ease}.slide-in-enter[data-v-ff7bf0ec]{opacity:0;transform:translateY(-50px)}.dark .select-search[data-v-ff7bf0ec]{background:#1e2024}.dark .select-search .search-input[data-v-ff7bf0ec]{background:#151515}.dark .input-area[data-v-ff7bf0ec]{background:#1e2024;border-color:#1e2024}.dark .popup-wrapper .input-area[data-v-ff7bf0ec]{background:#25272c}.dark .input-options[data-v-ff7bf0ec]{background:#1e2024}.dark .input-options .option-item[data-v-ff7bf0ec]{border-bottom:none}.dark .input-options .option-item[data-v-ff7bf0ec]:hover{background:#2a2c32}.dark .input-options .option-item:hover .option-icon circle[data-v-ff7bf0ec],.dark .input-options .option-item:hover .option-icon path[data-v-ff7bf0ec]{color:inherit}.dark .input-options .option-item[data-v-ff7bf0ec]:last-child{border-bottom:none}.dark .option-value.placehoder[data-v-ff7bf0ec]{color:#7d858c}",""])},"4TWA":function(a,e,t){"use strict";var i=t("CjXH"),o=t("LvDl"),r={name:"SelectInput",props:["placeholder","options","isError","default"],components:{Edit2Icon:i.u,UserIcon:i.nb,ChevronDownIcon:i.g},watch:{query:Object(o.debounce)((function(a){this.searchedResults=Object(o.omitBy)(this.options,(function(e){return!e.label.toLowerCase().includes(a.toLowerCase())}))}),200)},computed:{isSearching:function(){return this.searchedResults&&""!==this.query},optionList:function(){return this.isSearching?this.searchedResults:this.options}},data:function(){return{searchedResults:void 0,selected:void 0,isOpen:!1,query:""}},methods:{selectOption:function(a){this.$emit("input",a.value),this.selected=a,this.isOpen=!1},openMenu:function(){var a=this;this.isOpen=!this.isOpen,this.isOpen&&this.$nextTick((function(){return a.$refs.search.focus()}))}},created:function(){var a=this;this.default&&(this.selected=this.options.find((function(e){return e.value===a.default})))}},s=(t("zmzx"),t("KHd+")),d=Object(s.a)(r,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"select"},[t("div",{staticClass:"input-area",class:{"is-active":a.isOpen,"is-error":a.isError},on:{click:a.openMenu}},[a.selected?t("div",{staticClass:"selected"},[a.selected.icon?t("div",{staticClass:"option-icon"},["user"===a.selected.icon?t("user-icon",{staticClass:"text-theme dark-text-theme",attrs:{size:"14"}}):a._e(),a._v(" "),"user-edit"===a.selected.icon?t("edit2-icon",{staticClass:"text-theme dark-text-theme",attrs:{size:"14"}}):a._e()],1):a._e(),a._v(" "),t("span",{staticClass:"option-value"},[a._v(a._s(a.selected.label))])]):a._e(),a._v(" "),a.selected?a._e():t("div",{staticClass:"not-selected"},[t("span",{staticClass:"option-value placehoder"},[a._v(a._s(a.placeholder))])]),a._v(" "),t("chevron-down-icon",{staticClass:"chevron",attrs:{size:"19"}})],1),a._v(" "),t("transition",{attrs:{name:"slide-in"}},[a.isOpen?t("div",{staticClass:"input-options"},[a.options.length>5?t("div",{staticClass:"select-search"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.query,expression:"query"}],ref:"search",staticClass:"search-input focus-border-theme",attrs:{type:"text",placeholder:a.$t("select_search_placeholder")},domProps:{value:a.query},on:{input:function(e){e.target.composing||(a.query=e.target.value)}}})]):a._e(),a._v(" "),t("ul",{staticClass:"option-list"},a._l(a.optionList,(function(e,i){return t("li",{key:i,staticClass:"option-item",on:{click:function(t){return a.selectOption(e)}}},[e.icon?t("div",{staticClass:"option-icon"},["user"===e.icon?t("user-icon",{attrs:{size:"14"}}):a._e(),a._v(" "),"user-edit"===e.icon?t("edit2-icon",{attrs:{size:"14"}}):a._e()],1):a._e(),a._v(" "),t("span",{staticClass:"option-value"},[a._v(a._s(e.label))])])})),0)]):a._e()])],1)}),[],!1,null,"ff7bf0ec",null);e.a=d.exports},"5/d3":function(a,e,t){"use strict";t("B+0d")},"B+0d":function(a,e,t){var i=t("FgVS");"string"==typeof i&&(i=[[a.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,o);i.locals&&(a.exports=i.locals)},"D+dh":function(a,e,t){"use strict";var i=t("CjXH"),o={name:"ImageInput",props:["image","error"],components:{ImageIcon:i.H,XIcon:i.sb},data:function(){return{imagePreview:void 0}},computed:{isData:function(){return void 0!==this.imagePreview&&""!==this.imagePreview}},methods:{resetImage:function(){this.imagePreview=void 0,this.$emit("input",void 0)},showImagePreview:function(a){var e=this,t=a.target.files[0].name,i=t.substring(t.lastIndexOf(".")+1).toLowerCase();if(["png","jpg","jpeg","svg"].includes(i)){var o=a.target.files[0],r=new FileReader;r.onload=function(){return e.imagePreview=r.result},r.readAsDataURL(o),this.$emit("input",a.target.files[0])}else alert(this.$t("validation_errors.wrong_image"))}},created:function(){this.image&&(this.imagePreview=this.image)}},r=(t("5/d3"),t("KHd+")),s=Object(r.a)(o,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"dropzone",class:{"is-error":a.error}},[a.imagePreview?t("div",{staticClass:"reset-image",on:{click:a.resetImage}},[t("x-icon",{staticClass:"close-icon text-theme",attrs:{size:"14"}})],1):a._e(),a._v(" "),t("input",{ref:"file",staticClass:"dummy",attrs:{type:"file"},on:{change:function(e){return a.showImagePreview(e)}}}),a._v(" "),a.imagePreview?t("img",{ref:"image",staticClass:"image-preview",attrs:{src:a.imagePreview}}):a._e(),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!a.isData,expression:"! isData"}],staticClass:"dropzone-message"},[t("image-icon",{staticClass:"icon-upload text-theme",attrs:{size:"28"}}),a._v(" "),t("span",{staticClass:"dropzone-title"},[a._v("\n            "+a._s(a.$t("input_image.title"))+"\n        ")]),a._v(" "),t("span",{staticClass:"dropzone-description"},[a._v("\n            "+a._s(a.$t("input_image.supported"))+"\n        ")])],1)])}),[],!1,null,"2449d24c",null);e.a=s.exports},FgVS:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".dropzone[data-v-2449d24c]{border:1px dashed #a1abc2;border-radius:8px;position:relative;text-align:center;display:flex;align-items:center;min-height:175px}.dropzone.is-error[data-v-2449d24c]{border:2px dashed rgba(253,57,122,.3)}.dropzone.is-error .dropzone-title[data-v-2449d24c]{color:#fd397a}.dropzone.is-error .icon-upload circle[data-v-2449d24c],.dropzone.is-error .icon-upload polyline[data-v-2449d24c],.dropzone.is-error .icon-upload rect[data-v-2449d24c]{stroke:#fd397a}.dropzone input[type=file][data-v-2449d24c]{opacity:0;position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;width:100%;cursor:pointer}.dropzone .image-preview[data-v-2449d24c]{position:absolute;width:100%;height:100%;-o-object-fit:contain;object-fit:contain;left:0;padding:25px;display:block}.dropzone .image-preview.fit-image[data-v-2449d24c]{-o-object-fit:cover;object-fit:cover;border-radius:12px;overflow:hidden}.dropzone .dropzone-message[data-v-2449d24c]{padding:50px 0;width:100%}.dropzone .dropzone-message .icon-upload circle[data-v-2449d24c],.dropzone .dropzone-message .icon-upload polyline[data-v-2449d24c],.dropzone .dropzone-message .icon-upload rect[data-v-2449d24c]{color:inherit}.dropzone .dropzone-message .dropzone-title[data-v-2449d24c]{font-size:1em;font-weight:700;display:block}.dropzone .dropzone-message .dropzone-description[data-v-2449d24c]{color:rgba(27,37,57,.7);font-size:.75em}.dropzone .reset-image[data-v-2449d24c]{z-index:2;background:#fff;border-radius:50px;display:block;position:absolute;right:0;top:0;cursor:pointer;transform:translateY(-50%) translateX(50%);padding:0 4px;box-shadow:0 1px 5px rgba(0,0,0,.12)}.dropzone .reset-image .close-icon[data-v-2449d24c]{vertical-align:middle}.dropzone .reset-image .close-icon line path[data-v-2449d24c]{fill:#1b2539}.dark .dropzone[data-v-2449d24c]{border-color:hsla(0,0%,100%,.2)}.dark .dropzone .dropzone-message .icon-upload line[data-v-2449d24c],.dark .dropzone .dropzone-message .icon-upload path[data-v-2449d24c],.dark .dropzone .dropzone-message .icon-upload polyline[data-v-2449d24c]{color:inherit}.dark .dropzone .dropzone-message .dropzone-description[data-v-2449d24c]{color:#7d858c}",""])},GEeg:function(a,e,t){"use strict";t.r(e);var i=t("o0o1"),o=t.n(i),r=t("A5+z"),s=t("xnZf"),d=t("gahf"),n=t("4TWA"),l=t("D+dh"),p=t("eZ9V"),c=t("Nv84"),m=t("13Td"),u=t("qefO"),v=t("KnjL"),f=t("TJPC"),b=t("xCqy"),g=t("vDqi"),h=t.n(g);function k(a,e,t,i,o,r,s){try{var d=a[r](s),n=d.value}catch(a){return void t(a)}d.done?e(n):Promise.resolve(n).then(i,o)}var x={name:"AppAppearance",components:{ValidationObserver:r.ValidationObserver,ValidationProvider:r.ValidationProvider,StorageItemDetail:s.a,PageTabGroup:d.a,SelectInput:n.a,ImageInput:l.a,ButtonBase:c.a,FormLabel:p.a,SetupBox:m.a,required:f.a,PageTab:u.a,InfoBox:v.a},data:function(){return{isLoading:!1,isSendingRequest:!1,encryptionList:[{label:"TLS",value:"tls"},{label:"SSL",value:"ssl"}],mail:{driver:"",host:"",port:"",username:"",password:"",encryption:""}}},methods:{EmailSetupSubmit:function(){var a,e=this;return(a=o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$refs.EmailSetup.validate();case 2:if(a.sent){a.next=5;break}return a.abrupt("return");case 5:e.isSendingRequest=!0,h.a.post("/api/admin/settings/email",e.mail).then((function(){b.a.$emit("toaster",{type:"success",message:e.$t("toaster.email_set")})})).catch((function(){b.a.$emit("alert:open",{title:e.$t("popup_error.title"),message:e.$t("popup_error.message")})})).finally((function(){e.isSendingRequest=!1}));case 7:case"end":return a.stop()}}),a)})),function(){var e=this,t=arguments;return new Promise((function(i,o){var r=a.apply(e,t);function s(a){k(r,i,o,s,d,"next",a)}function d(a){k(r,i,o,s,d,"throw",a)}s(void 0)}))})()}}},y=(t("KODj"),t("KHd+")),w=Object(y.a)(x,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("PageTab",{staticClass:"form-fixed-width",attrs:{"is-loading":a.isLoading}},[t("PageTabGroup",[t("ValidationObserver",{ref:"EmailSetup",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(e){return e.preventDefault(),a.EmailSetupSubmit(e)}},scopedSlots:a._u([{key:"default",fn:function(e){e.invalid;return[t("FormLabel",[a._v(a._s(a.$t("admin_settings.email.section_email")))]),a._v(" "),t("InfoBox",[t("p",{domProps:{innerHTML:a._s(a.$t("admin_settings.email.email_disclaimer"))}})]),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v(a._s(a.$t("admin_settings.email.driver"))+":")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Driver",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var i=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.mail.driver,expression:"mail.driver"}],staticClass:"focus-border-theme",class:{"is-error":i[0]},attrs:{placeholder:a.$t("admin_settings.email.driver_plac"),type:"text"},domProps:{value:a.mail.driver},on:{input:function(e){e.target.composing||a.$set(a.mail,"driver",e.target.value)}}}),a._v(" "),i[0]?t("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v(a._s(a.$t("admin_settings.email.host"))+":")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Host",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var i=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.mail.host,expression:"mail.host"}],staticClass:"focus-border-theme",class:{"is-error":i[0]},attrs:{placeholder:a.$t("admin_settings.email.host_plac"),type:"text"},domProps:{value:a.mail.host},on:{input:function(e){e.target.composing||a.$set(a.mail,"host",e.target.value)}}}),a._v(" "),i[0]?t("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v(a._s(a.$t("admin_settings.email.port"))+":")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Port",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var i=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.mail.port,expression:"mail.port"}],staticClass:"focus-border-theme",class:{"is-error":i[0]},attrs:{placeholder:a.$t("admin_settings.email.port_plac"),type:"text"},domProps:{value:a.mail.port},on:{input:function(e){e.target.composing||a.$set(a.mail,"port",e.target.value)}}}),a._v(" "),i[0]?t("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v(a._s(a.$t("admin_settings.email.username"))+":")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Username",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var i=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.mail.username,expression:"mail.username"}],staticClass:"focus-border-theme",class:{"is-error":i[0]},attrs:{placeholder:a.$t("admin_settings.email.username_plac"),type:"text"},domProps:{value:a.mail.username},on:{input:function(e){e.target.composing||a.$set(a.mail,"username",e.target.value)}}}),a._v(" "),i[0]?t("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v(a._s(a.$t("admin_settings.email.password"))+":")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Password",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var i=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.mail.password,expression:"mail.password"}],staticClass:"focus-border-theme",class:{"is-error":i[0]},attrs:{placeholder:a.$t("admin_settings.email.password_plac"),type:"text"},domProps:{value:a.mail.password},on:{input:function(e){e.target.composing||a.$set(a.mail,"password",e.target.value)}}}),a._v(" "),i[0]?t("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v(a._s(a.$t("admin_settings.email.encryption"))+":")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Encryption",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var i=e.errors;return[t("SelectInput",{attrs:{options:a.encryptionList,placeholder:a.$t("admin_settings.email.encryption_plac"),isError:i[0]},model:{value:a.mail.encryption,callback:function(e){a.$set(a.mail,"encryption",e)},expression:"mail.encryption"}}),a._v(" "),i[0]?t("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("ButtonBase",{staticClass:"submit-button",attrs:{loading:a.isSendingRequest,disabled:a.isSendingRequest,type:"submit","button-style":"theme"}},[a._v("\n                "+a._s(a.$t("admin_settings.email.save_button"))+"\n            ")])]}}])})],1)],1)}),[],!1,null,"55bad252",null);e.default=w.exports},HYSO:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".form[data-v-55bad252]{max-width:700px}.form.inline-form[data-v-55bad252]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-55bad252]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-55bad252]{position:absolute;left:0;bottom:-25px}.form.block-form .switch-wrapper[data-v-55bad252]{padding-bottom:13px;margin-bottom:13px;border-bottom:1px solid #f4f5f6}.form.block-form .switch-wrapper[data-v-55bad252]:last-child{padding-bottom:0;margin-bottom:0;border-bottom:none}.form.block-form .wrapper-inline[data-v-55bad252]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-55bad252]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-55bad252]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-55bad252]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-55bad252]:last-child{margin-bottom:0}.form.block-form .button[data-v-55bad252]{margin-top:50px}.form .inline-wrapper[data-v-55bad252]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-55bad252]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-55bad252]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.input-help[data-v-55bad252]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-55bad252]{display:flex}.single-line-form .submit-button[data-v-55bad252]{margin-left:20px}.error-message[data-v-55bad252]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-55bad252]{width:100%}input[type=email][data-v-55bad252],input[type=number][data-v-55bad252],input[type=password][data-v-55bad252],input[type=text][data-v-55bad252],textarea[data-v-55bad252]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-55bad252],input[type=number].is-error[data-v-55bad252],input[type=password].is-error[data-v-55bad252],input[type=text].is-error[data-v-55bad252],textarea.is-error[data-v-55bad252]{border-color:#fd397a}input[type=email][data-v-55bad252]::-moz-placeholder,input[type=number][data-v-55bad252]::-moz-placeholder,input[type=password][data-v-55bad252]::-moz-placeholder,input[type=text][data-v-55bad252]::-moz-placeholder,textarea[data-v-55bad252]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-55bad252]:-ms-input-placeholder,input[type=number][data-v-55bad252]:-ms-input-placeholder,input[type=password][data-v-55bad252]:-ms-input-placeholder,input[type=text][data-v-55bad252]:-ms-input-placeholder,textarea[data-v-55bad252]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-55bad252]::placeholder,input[type=number][data-v-55bad252]::placeholder,input[type=password][data-v-55bad252]::placeholder,input[type=text][data-v-55bad252]::placeholder,textarea[data-v-55bad252]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][disabled][data-v-55bad252],input[type=number][disabled][data-v-55bad252],input[type=password][disabled][data-v-55bad252],input[type=text][disabled][data-v-55bad252],textarea[disabled][data-v-55bad252]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}input[type=color][data-v-55bad252]{width:38px!important;height:40px;border:none;outline:none;background:none;min-width:0!important}.additional-link[data-v-55bad252]{font-size:1em;margin-top:50px;display:block}.additional-link a[data-v-55bad252],.additional-link b[data-v-55bad252]{cursor:pointer}.additional-link a[data-v-55bad252]:hover,.additional-link b[data-v-55bad252]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-55bad252]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-55bad252]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-55bad252],.form textarea[data-v-55bad252]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-55bad252]{display:block}.form.block-form .block-wrapper label[data-v-55bad252]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-55bad252]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-55bad252]{display:block}.form.inline-form .input-wrapper .error-message[data-v-55bad252]{position:relative;bottom:0}.form .button[data-v-55bad252]{padding:14px 32px}.single-line-form[data-v-55bad252]{display:block}.single-line-form .submit-button[data-v-55bad252]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-55bad252],input[type=number][data-v-55bad252],input[type=password][data-v-55bad252],input[type=text][data-v-55bad252],textarea[data-v-55bad252]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-55bad252]{display:block}}.dark .form .input-help[data-v-55bad252]{color:#7d858c}.dark .form.block-form .block-wrapper label[data-v-55bad252]{color:#bec6cf}.dark .form.block-form .switch-wrapper[data-v-55bad252]{border-color:hsla(0,0%,100%,.02)}.dark .form .inline-wrapper .switch-label .input-label[data-v-55bad252]{color:#bec6cf}.dark input[type=email][data-v-55bad252],.dark input[type=number][data-v-55bad252],.dark input[type=password][data-v-55bad252],.dark input[type=text][data-v-55bad252],.dark textarea[data-v-55bad252]{border-color:#1e2024;background:#1e2024;color:#bec6cf}.dark input[type=email][data-v-55bad252]::-moz-placeholder,.dark input[type=number][data-v-55bad252]::-moz-placeholder,.dark input[type=password][data-v-55bad252]::-moz-placeholder,.dark input[type=text][data-v-55bad252]::-moz-placeholder,.dark textarea[data-v-55bad252]::-moz-placeholder{color:#7d858c}.dark input[type=email][data-v-55bad252]:-ms-input-placeholder,.dark input[type=number][data-v-55bad252]:-ms-input-placeholder,.dark input[type=password][data-v-55bad252]:-ms-input-placeholder,.dark input[type=text][data-v-55bad252]:-ms-input-placeholder,.dark textarea[data-v-55bad252]:-ms-input-placeholder{color:#7d858c}.dark input[type=email][data-v-55bad252]::placeholder,.dark input[type=number][data-v-55bad252]::placeholder,.dark input[type=password][data-v-55bad252]::placeholder,.dark input[type=text][data-v-55bad252]::placeholder,.dark textarea[data-v-55bad252]::placeholder{color:#7d858c}.dark input[type=email][disabled][data-v-55bad252],.dark input[type=number][disabled][data-v-55bad252],.dark input[type=password][disabled][data-v-55bad252],.dark input[type=text][disabled][data-v-55bad252],.dark textarea[disabled][data-v-55bad252]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}.dark .popup-wrapper input[type=email][data-v-55bad252],.dark .popup-wrapper input[type=number][data-v-55bad252],.dark .popup-wrapper input[type=password][data-v-55bad252],.dark .popup-wrapper input[type=text][data-v-55bad252],.dark .popup-wrapper textarea[data-v-55bad252]{background:#25272c}.block-form[data-v-55bad252]{max-width:100%}",""])},IZWy:function(a,e,t){var i=t("aQc7");"string"==typeof i&&(i=[[a.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,o);i.locals&&(a.exports=i.locals)},KODj:function(a,e,t){"use strict";t("LVM1")},LVM1:function(a,e,t){var i=t("HYSO");"string"==typeof i&&(i=[[a.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,o);i.locals&&(a.exports=i.locals)},NQIx:function(a,e,t){"use strict";t("IZWy")},S7o3:function(a,e,t){"use strict";t("hwI8")},aQc7:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".progress-bar[data-v-39123ae4]{width:100%;height:5px;background:#f4f5f6;margin-top:6px;border-radius:10px}.progress-bar span[data-v-39123ae4]{display:block;height:100%;border-radius:10px;max-width:100%}.dark .progress-bar[data-v-39123ae4]{background:#1e2024}@media only screen and (min-width:680px){.dark .progress-bar[data-v-39123ae4]{background:#1e2024}}",""])},hwI8:function(a,e,t){var i=t("n1yv");"string"==typeof i&&(i=[[a.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,o);i.locals&&(a.exports=i.locals)},n1yv:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".detail-storage-item[data-v-038f9062]{margin-bottom:35px}.detail-storage-item.disk .icon circle[data-v-038f9062],.detail-storage-item.disk .icon line[data-v-038f9062],.detail-storage-item.disk .icon path[data-v-038f9062],.detail-storage-item.disk .icon polygon[data-v-038f9062],.detail-storage-item.disk .icon polyline[data-v-038f9062],.detail-storage-item.disk .icon rect[data-v-038f9062]{stroke:#1b2539}.detail-storage-item.disk .storage-progress[data-v-038f9062] span{background:#1b2539}.detail-storage-item.images .icon circle[data-v-038f9062],.detail-storage-item.images .icon line[data-v-038f9062],.detail-storage-item.images .icon path[data-v-038f9062],.detail-storage-item.images .icon polygon[data-v-038f9062],.detail-storage-item.images .icon polyline[data-v-038f9062],.detail-storage-item.images .icon rect[data-v-038f9062]{stroke:#9d66fe}.detail-storage-item.images .storage-progress[data-v-038f9062] span{background:#9d66fe}.detail-storage-item.videos .icon circle[data-v-038f9062],.detail-storage-item.videos .icon line[data-v-038f9062],.detail-storage-item.videos .icon path[data-v-038f9062],.detail-storage-item.videos .icon polygon[data-v-038f9062],.detail-storage-item.videos .icon polyline[data-v-038f9062],.detail-storage-item.videos .icon rect[data-v-038f9062]{stroke:#ffbd2d}.detail-storage-item.videos .storage-progress[data-v-038f9062] span{background:#ffbd2d}.detail-storage-item.audios .icon circle[data-v-038f9062],.detail-storage-item.audios .icon line[data-v-038f9062],.detail-storage-item.audios .icon path[data-v-038f9062],.detail-storage-item.audios .icon polygon[data-v-038f9062],.detail-storage-item.audios .icon polyline[data-v-038f9062],.detail-storage-item.audios .icon rect[data-v-038f9062]{stroke:#fe66a1}.detail-storage-item.audios .storage-progress[data-v-038f9062] span{background:#fe66a1}.detail-storage-item.documents .icon circle[data-v-038f9062],.detail-storage-item.documents .icon line[data-v-038f9062],.detail-storage-item.documents .icon path[data-v-038f9062],.detail-storage-item.documents .icon polygon[data-v-038f9062],.detail-storage-item.documents .icon polyline[data-v-038f9062],.detail-storage-item.documents .icon rect[data-v-038f9062]{stroke:#fe6057}.detail-storage-item.documents .storage-progress[data-v-038f9062] span{background:#fe6057}.detail-storage-item.others .icon circle[data-v-038f9062],.detail-storage-item.others .icon line[data-v-038f9062],.detail-storage-item.others .icon path[data-v-038f9062],.detail-storage-item.others .icon polygon[data-v-038f9062],.detail-storage-item.others .icon polyline[data-v-038f9062],.detail-storage-item.others .icon rect[data-v-038f9062]{stroke:#1b2539}.detail-storage-item.others .storage-progress[data-v-038f9062] span{background:#1b2539}.header-storage-item[data-v-038f9062]{display:flex;align-items:flex-start;margin-bottom:10px}.header-storage-item .icon[data-v-038f9062]{width:35px}.header-storage-item .type[data-v-038f9062]{font-size:.9375em;color:#1b2539}.header-storage-item .total-size[data-v-038f9062]{font-size:.625em;display:block;color:rgba(27,37,57,.7)}.dark .header-storage-item .type[data-v-038f9062]{color:#bec6cf}.dark .header-storage-item .total-size[data-v-038f9062]{color:#7d858c}.dark .detail-storage-item.disk .icon circle[data-v-038f9062],.dark .detail-storage-item.disk .icon line[data-v-038f9062],.dark .detail-storage-item.disk .icon path[data-v-038f9062],.dark .detail-storage-item.disk .icon polygon[data-v-038f9062],.dark .detail-storage-item.disk .icon polyline[data-v-038f9062],.dark .detail-storage-item.disk .icon rect[data-v-038f9062],.dark .detail-storage-item.others .icon circle[data-v-038f9062],.dark .detail-storage-item.others .icon line[data-v-038f9062],.dark .detail-storage-item.others .icon path[data-v-038f9062],.dark .detail-storage-item.others .icon polygon[data-v-038f9062],.dark .detail-storage-item.others .icon polyline[data-v-038f9062],.dark .detail-storage-item.others .icon rect[data-v-038f9062]{stroke:#41454e}.dark .detail-storage-item.disk .storage-progress[data-v-038f9062] span,.dark .detail-storage-item.others .storage-progress[data-v-038f9062] span{background:#41454e}",""])},pI4u:function(a,e,t){var i=t("0a8W");"string"==typeof i&&(i=[[a.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,o);i.locals&&(a.exports=i.locals)},xnZf:function(a,e,t){"use strict";var i=t("+Pqb"),o=t("CjXH"),r={name:"StorageItemDetail",props:["percentage","title","type","used"],components:{HardDriveIcon:o.F,FileTextIcon:o.z,ProgressBar:i.a,MusicIcon:o.U,VideoIcon:o.rb,ImageIcon:o.H,FileIcon:o.y}},s=(t("S7o3"),t("KHd+")),d=Object(s.a)(r,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("article",{staticClass:"detail-storage-item",class:a.type},[t("div",{staticClass:"header-storage-item"},[t("div",{staticClass:"icon"},["images"==a.type?t("image-icon",{attrs:{size:"23"}}):a._e(),a._v(" "),"videos"==a.type?t("video-icon",{attrs:{size:"23"}}):a._e(),a._v(" "),"audios"==a.type?t("music-icon",{attrs:{size:"23"}}):a._e(),a._v(" "),"documents"==a.type?t("file-text-icon",{attrs:{size:"23"}}):a._e(),a._v(" "),"others"==a.type?t("file-icon",{attrs:{size:"23"}}):a._e(),a._v(" "),"disk"==a.type?t("hard-drive-icon",{attrs:{size:"23"}}):a._e()],1),a._v(" "),t("div",{staticClass:"title"},[t("b",{staticClass:"type"},[a._v(a._s(a.title))]),a._v(" "),t("span",{staticClass:"total-size"},[a._v(a._s(a.used))])])]),a._v(" "),t("ProgressBar",{staticClass:"storage-progress",attrs:{progress:a.percentage}})],1)}),[],!1,null,"038f9062",null);e.a=d.exports},zmzx:function(a,e,t){"use strict";t("pI4u")}}]);
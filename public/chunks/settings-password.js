(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"0go1":function(t,a,e){"use strict";e("8j5K")},"8j5K":function(t,a,e){var o=e("qCtf");"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,r);o.locals&&(t.exports=o.locals)},FCdB:function(t,a,e){"use strict";e("eNCu")},KnjL:function(t,a,e){"use strict";var o={name:"InfoBox",props:["type"]},r=(e("0go1"),e("KHd+")),i=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"b202b3ae",null);a.a=i.exports},POQZ:function(t,a,e){var o=e("mKil");"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,r);o.locals&&(t.exports=o.locals)},Rbea:function(t,a,e){"use strict";var o={props:["label","name","avatar","info","error"],data:function(){return{imagePreview:void 0}},watch:{imagePreview:function(t){this.$store.commit("UPDATE_AVATAR",t)}},methods:{showImagePreview:function(t){var a=this,e=t.target.files[0].name,o=e.substring(e.lastIndexOf(".")+1).toLowerCase();if(["png","jpg","jpeg"].includes(o)){var r=t.target.files[0],i=new FileReader;i.onload=function(){return a.imagePreview=i.result},i.readAsDataURL(r),this.$updateImage("/user/settings","avatar",t.target.files[0])}else alert(this.$t("validation_errors.wrong_image"))}},created:function(){this.avatar&&(this.imagePreview=this.avatar)}},r=(e("kjFj"),e("KHd+")),i=Object(r.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dropzone",class:{"is-error":t.error}},[e("input",{ref:"file",staticClass:"dummy",attrs:{type:"file",name:t.name},on:{change:function(a){return t.showImagePreview(a)}}}),t._v(" "),t.imagePreview?e("img",{ref:"image",staticClass:"image-preview",attrs:{src:t.imagePreview}}):t._e(),t._v(" "),t.imagePreview?e("img",{ref:"image",staticClass:"image-preview blurred",attrs:{src:t.imagePreview}}):t._e()])}),[],!1,null,"e3ccefc6",null);a.a=i.exports},UbiG:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".form[data-v-c05f564a]{max-width:700px}.form.inline-form[data-v-c05f564a]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-c05f564a]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-c05f564a]{position:absolute;left:0;bottom:-25px}.form.block-form .switch-wrapper[data-v-c05f564a]{padding-bottom:13px;margin-bottom:13px;border-bottom:1px solid #f4f5f6}.form.block-form .switch-wrapper[data-v-c05f564a]:last-child{padding-bottom:0;margin-bottom:0;border-bottom:none}.form.block-form .wrapper-inline[data-v-c05f564a]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-c05f564a]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-c05f564a]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-c05f564a]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-c05f564a]:last-child{margin-bottom:0}.form.block-form .button[data-v-c05f564a]{margin-top:50px}.form .inline-wrapper[data-v-c05f564a]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-c05f564a]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-c05f564a]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.input-help[data-v-c05f564a]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-c05f564a]{display:flex}.single-line-form .submit-button[data-v-c05f564a]{margin-left:20px}.error-message[data-v-c05f564a]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-c05f564a]{width:100%}input[type=email][data-v-c05f564a],input[type=number][data-v-c05f564a],input[type=password][data-v-c05f564a],input[type=text][data-v-c05f564a],textarea[data-v-c05f564a]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-c05f564a],input[type=number].is-error[data-v-c05f564a],input[type=password].is-error[data-v-c05f564a],input[type=text].is-error[data-v-c05f564a],textarea.is-error[data-v-c05f564a]{border-color:#fd397a}input[type=email][data-v-c05f564a]::-moz-placeholder,input[type=number][data-v-c05f564a]::-moz-placeholder,input[type=password][data-v-c05f564a]::-moz-placeholder,input[type=text][data-v-c05f564a]::-moz-placeholder,textarea[data-v-c05f564a]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-c05f564a]:-ms-input-placeholder,input[type=number][data-v-c05f564a]:-ms-input-placeholder,input[type=password][data-v-c05f564a]:-ms-input-placeholder,input[type=text][data-v-c05f564a]:-ms-input-placeholder,textarea[data-v-c05f564a]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-c05f564a]::placeholder,input[type=number][data-v-c05f564a]::placeholder,input[type=password][data-v-c05f564a]::placeholder,input[type=text][data-v-c05f564a]::placeholder,textarea[data-v-c05f564a]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][disabled][data-v-c05f564a],input[type=number][disabled][data-v-c05f564a],input[type=password][disabled][data-v-c05f564a],input[type=text][disabled][data-v-c05f564a],textarea[disabled][data-v-c05f564a]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}input[type=color][data-v-c05f564a]{width:38px!important;height:40px;border:none;outline:none;background:none;min-width:0!important}.additional-link[data-v-c05f564a]{font-size:1em;margin-top:50px;display:block}.additional-link a[data-v-c05f564a],.additional-link b[data-v-c05f564a]{cursor:pointer}.additional-link a[data-v-c05f564a]:hover,.additional-link b[data-v-c05f564a]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-c05f564a]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-c05f564a]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-c05f564a],.form textarea[data-v-c05f564a]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-c05f564a]{display:block}.form.block-form .block-wrapper label[data-v-c05f564a]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-c05f564a]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-c05f564a]{display:block}.form.inline-form .input-wrapper .error-message[data-v-c05f564a]{position:relative;bottom:0}.form .button[data-v-c05f564a]{padding:14px 32px}.single-line-form[data-v-c05f564a]{display:block}.single-line-form .submit-button[data-v-c05f564a]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-c05f564a],input[type=number][data-v-c05f564a],input[type=password][data-v-c05f564a],input[type=text][data-v-c05f564a],textarea[data-v-c05f564a]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-c05f564a]{display:block}}.dark .form .input-help[data-v-c05f564a]{color:#7d858c}.dark .form.block-form .block-wrapper label[data-v-c05f564a]{color:#bec6cf}.dark .form.block-form .switch-wrapper[data-v-c05f564a]{border-color:hsla(0,0%,100%,.02)}.dark .form .inline-wrapper .switch-label .input-label[data-v-c05f564a]{color:#bec6cf}.dark input[type=email][data-v-c05f564a],.dark input[type=number][data-v-c05f564a],.dark input[type=password][data-v-c05f564a],.dark input[type=text][data-v-c05f564a],.dark textarea[data-v-c05f564a]{border-color:#1e2024;background:#1e2024;color:#bec6cf}.dark input[type=email][data-v-c05f564a]::-moz-placeholder,.dark input[type=number][data-v-c05f564a]::-moz-placeholder,.dark input[type=password][data-v-c05f564a]::-moz-placeholder,.dark input[type=text][data-v-c05f564a]::-moz-placeholder,.dark textarea[data-v-c05f564a]::-moz-placeholder{color:#7d858c}.dark input[type=email][data-v-c05f564a]:-ms-input-placeholder,.dark input[type=number][data-v-c05f564a]:-ms-input-placeholder,.dark input[type=password][data-v-c05f564a]:-ms-input-placeholder,.dark input[type=text][data-v-c05f564a]:-ms-input-placeholder,.dark textarea[data-v-c05f564a]:-ms-input-placeholder{color:#7d858c}.dark input[type=email][data-v-c05f564a]::placeholder,.dark input[type=number][data-v-c05f564a]::placeholder,.dark input[type=password][data-v-c05f564a]::placeholder,.dark input[type=text][data-v-c05f564a]::placeholder,.dark textarea[data-v-c05f564a]::placeholder{color:#7d858c}.dark input[type=email][disabled][data-v-c05f564a],.dark input[type=number][disabled][data-v-c05f564a],.dark input[type=password][disabled][data-v-c05f564a],.dark input[type=text][disabled][data-v-c05f564a],.dark textarea[disabled][data-v-c05f564a]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}.dark .popup-wrapper input[type=email][data-v-c05f564a],.dark .popup-wrapper input[type=number][data-v-c05f564a],.dark .popup-wrapper input[type=password][data-v-c05f564a],.dark .popup-wrapper input[type=text][data-v-c05f564a],.dark .popup-wrapper textarea[data-v-c05f564a]{background:#25272c}.tokens-wrapper[data-v-c05f564a]{margin-top:0!important}.tokens-wrapper .token-item[data-v-c05f564a]{display:flex;justify-content:space-between;width:100%;padding:10px 0;border-bottom:1px solid #ebebeb;align-items:center}.tokens-wrapper .token-item[data-v-c05f564a]:first-child{padding-top:0}.tokens-wrapper .token-item[data-v-c05f564a]:last-child{border-bottom:0 solid transparent;padding-bottom:0}.tokens-wrapper .tokens-details .name[data-v-c05f564a]{font-size:1em}.tokens-wrapper .tokens-details .last-used[data-v-c05f564a]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;display:block}.tokens-wrapper .tokens-destroyer[data-v-c05f564a]{margin-top:10px}.tokens-wrapper .tokens-destroyer .close-icon[data-v-c05f564a]{opacity:.2}.tokens-wrapper .tokens-destroyer .close-icon[data-v-c05f564a]:hover{opacity:1}.tokens-wrapper .tokens-destroyer .close-icon:hover line[data-v-c05f564a]{color:inherit}.tokens-wrapper .tokens-destroyer[data-v-c05f564a]{cursor:pointer}@media only screen and (max-width:960px){.form .button-base[data-v-c05f564a]{width:100%;margin-top:0;text-align:center}}@media only screen and (max-width:690px){.form .button-block[data-v-c05f564a]{display:block}.form .button-block .popup-button[data-v-c05f564a]{margin-top:15px}}.dark .tokens-wrapper[data-v-c05f564a]{margin-top:0!important}.dark .tokens-wrapper .token-item[data-v-c05f564a]{border-color:#25272c}.dark .tokens-wrapper .tokens-details .last-used[data-v-c05f564a]{color:#7d858c}",""])},aoJh:function(t,a,e){"use strict";e.r(a);var o=e("o0o1"),r=e.n(o),i=e("A5+z"),n=e("gahf"),s=e("Rbea"),p=e("xxrA"),c=e("eZ9V"),d=e("D62o"),l=e("Nv84"),f=e("qefO"),u=e("KnjL"),m=e("2Sb1"),v=e("owoR"),b=e("TJPC"),w=e("CjXH"),h=e("L2JU"),g=e("xCqy"),k=e("vDqi"),x=e.n(k);function _(t,a,e,o,r,i,n){try{var s=t[i](n),p=s.value}catch(t){return void e(t)}s.done?a(p):Promise.resolve(p).then(o,r)}function y(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,o)}return e}function C(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var P={name:"Password",components:{PageTabGroup:n.a,FormLabel:c.a,PageTab:f.a,InfoBox:u.a,XIcon:w.sb,ValidationProvider:i.ValidationProvider,ValidationObserver:i.ValidationObserver,UserImageInput:s.a,SwitchInput:p.a,MobileHeader:d.a,PageHeader:m.a,ButtonBase:l.a,ThemeLabel:v.a,required:b.a},computed:function(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?y(Object(e),!0).forEach((function(a){C(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}({},Object(h.b)(["user"])),data:function(){return{newPasswordConfirmation:"",newPassword:"",isLoading:!1,tokens:[]}},methods:{formatDate:function(t){return new Intl.DateTimeFormat("en").format(new Date(t))},confirmDeleteToken:function(t){g.a.$emit("confirm:open",{title:this.$t("popup_delete_personal_token.title"),message:this.$t("popup_delete_personal_token.description"),action:{id:t.id,operation:"delete-personal-access-token"}})},deleteToken:function(t){var a=this;x.a.delete("/api/user/tokens/".concat(t)).then((function(){a.tokens=a.tokens.filter((function(a){return a.id!==t})),g.a.$emit("toaster",{type:"success",message:a.$t("personal_token.token_deleted")})})).catch((function(){return a.$isSomethingWrong()}))},resetPassword:function(){var t,a=this;return(t=r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.$refs.password.validate();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:x.a.post(a.$store.getters.api+"/user/password",{password:a.newPassword,password_confirmation:a.newPasswordConfirmation}).then((function(){a.newPassword="",a.newPasswordConfirmation="",a.$refs.password.reset(),g.a.$emit("success:open",{title:a.$t("popup_pass_changed.title"),message:a.$t("popup_pass_changed.message")})})).catch((function(t){422==t.response.status&&t.response.data.errors.password&&a.$refs.password.setErrors({"New Password":t.response.data.errors.password})}));case 6:case"end":return t.stop()}}),t)})),function(){var a=this,e=arguments;return new Promise((function(o,r){var i=t.apply(a,e);function n(t){_(i,o,r,n,s,"next",t)}function s(t){_(i,o,r,n,s,"throw",t)}n(void 0)}))})()},getPersonalAccessTokens:function(){var t=this;x.a.get("/api/user/tokens").then((function(a){t.tokens=a.data})).catch((function(){return t.$isSomethingWrong()}))},open2faPopup:function(){g.a.$emit("popup:open",{name:"two-factor-authentication-confirm"})},showRecoveryCodes:function(){g.a.$emit("popup:open",{name:"two-factor-recovery-codes"})},openCreateTokenPopup:function(){g.a.$emit("popup:open",{name:"create-personal-token"})}},created:function(){var t=this;this.getPersonalAccessTokens(),g.a.$on("action:confirmed",(function(a){"delete-personal-access-token"===a.operation&&t.deleteToken(a.id)})),g.a.$on("reload-personal-access-tokens",(function(){return t.getPersonalAccessTokens()}))}},$=(e("xJB9"),e("KHd+")),z=Object($.a)(P,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("PageTab",[e("PageTabGroup",[e("ValidationObserver",{ref:"password",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(a){return a.preventDefault(),t.resetPassword(a)}},scopedSlots:t._u([{key:"default",fn:function(a){a.invalid;return[e("FormLabel",[t._v(t._s(t.$t("user_password.title")))]),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[t._v(t._s(t.$t("page_create_password.label_new_pass"))+":")]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"New Password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var o=a.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPassword,expression:"newPassword"}],staticClass:"focus-border-theme",class:{"is-error":o[0]},attrs:{placeholder:t.$t("page_create_password.label_new_pass"),type:"password"},domProps:{value:t.newPassword},on:{input:function(a){a.target.composing||(t.newPassword=a.target.value)}}}),t._v(" "),o[0]?e("span",{staticClass:"error-message"},[t._v(t._s(o[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[t._v(t._s(t.$t("page_create_password.label_confirm_pass"))+":")]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Confirm Your Password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var o=a.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPasswordConfirmation,expression:"newPasswordConfirmation"}],staticClass:"focus-border-theme",class:{"is-error":o[0]},attrs:{placeholder:t.$t("page_create_password.label_confirm_pass"),type:"password"},domProps:{value:t.newPasswordConfirmation},on:{input:function(a){a.target.composing||(t.newPasswordConfirmation=a.target.value)}}}),t._v(" "),o[0]?e("span",{staticClass:"error-message"},[t._v(t._s(o[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("ButtonBase",{staticClass:"confirm-form",attrs:{type:"submit","button-style":"theme"}},[t._v("\n                        "+t._s(t.$t("profile.store_pass"))+"\n                    ")])],1)]}}])})],1),t._v(" "),e("PageTabGroup",{staticClass:"form block-form"},[e("FormLabel",{attrs:{icon:"smartphone"}},[t._v(t._s(t.$t("2fa.settings.title")))]),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("div",{staticClass:"input-wrapper"},[e("div",{staticClass:"inline-wrapper"},[e("div",{staticClass:"switch-label"},[e("label",{staticClass:"input-label"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.$t("popup_2fa.switch_title"))+"\n\t\t\t\t\t\t\t")]),t._v(" "),e("small",{staticClass:"input-help",domProps:{innerHTML:t._s(t.$t("popup_2fa.switch_info"))}})]),t._v(" "),e("SwitchInput",{staticClass:"switch",attrs:{state:t.user.data.attributes.two_factor_authentication},nativeOn:{click:function(a){return a.preventDefault(),a.stopPropagation(),t.open2faPopup(a)}}})],1)])]),t._v(" "),t.user&&t.user.data.attributes.two_factor_authentication?e("div",{staticClass:"block-wrapper"},[e("div",{staticClass:"input-wrapper"},[e("div",{staticClass:"inline-wrapper button-block"},[e("div",{staticClass:"switch-label"},[e("label",{staticClass:"input-label"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.$t("popup_2fa.codes_title"))+"\n\t\t\t\t\t\t\t")]),t._v(" "),e("small",{staticClass:"input-help"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.$t("popup_2fa.codes_info"))+"\n\t\t\t\t\t\t\t")])]),t._v(" "),e("ButtonBase",{staticClass:"popup-button",attrs:{"button-style":"secondary"},nativeOn:{click:function(a){return t.showRecoveryCodes(a)}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("popup_2fa.codes_button"))+"\n\t\t\t\t\t\t")])],1)])]):t._e()],1),t._v(" "),e("PageTabGroup",{staticClass:"form block-form"},[e("FormLabel",{attrs:{icon:"key"}},[t._v(t._s(t.$t("personal_token.section_title")))]),t._v(" "),0===t.tokens.length?e("InfoBox",[e("p",[t._v(t._s(t.$t("personal_token.section_description")))])]):t._e(),t._v(" "),t.tokens.length>0?e("InfoBox",[e("ul",{staticClass:"tokens-wrapper"},t._l(t.tokens,(function(a){return e("li",{key:a.id,staticClass:"token-item"},[e("div",{staticClass:"tokens-details"},[e("b",{staticClass:"name"},[t._v(t._s(a.name))]),t._v(" "),e("time",{staticClass:"last-used"},[t._v(t._s(t.$t("last_used"))+": "+t._s(a.last_used_at?t.formatDate(a.last_used_at):t.$t("never")))])]),t._v(" "),e("div",{staticClass:"tokens-destroyer",on:{click:function(e){return t.confirmDeleteToken(a)}}},[e("x-icon",{staticClass:"close-icon hover-text-theme",attrs:{size:"16"}})],1)])})),0)]):t._e(),t._v(" "),e("ButtonBase",{staticClass:"confirm-form",attrs:{type:"submit","button-style":"theme"},nativeOn:{click:function(a){return t.openCreateTokenPopup(a)}}},[t._v("\n\t\t\t\t"+t._s(t.$t("personal_token.create_token"))+"\n\t\t\t")])],1)],1)}),[],!1,null,"c05f564a",null);a.default=z.exports},eNCu:function(t,a,e){var o=e("kMhN");"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,r);o.locals&&(t.exports=o.locals)},kMhN:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".input-wrapper[data-v-0029e4d1]{display:flex;width:100%}.input-wrapper .input-label[data-v-0029e4d1]{color:#1b2539}.input-wrapper .switch-content[data-v-0029e4d1]{width:100%}.input-wrapper .switch-content[data-v-0029e4d1]:last-child{width:80px}.switch[data-v-0029e4d1]{width:50px;height:28px;background:#f1f1f5;position:relative}.switch[data-v-0029e4d1],.switch .switch-button[data-v-0029e4d1]{border-radius:50px;display:block;transition:all .3s ease}.switch .switch-button[data-v-0029e4d1]{width:22px;height:22px;background:#fff;position:absolute;top:3px;left:3px;box-shadow:0 2px 4px rgba(37,38,94,.1);cursor:pointer}.switch.active .switch-button[data-v-0029e4d1]{left:25px}.dark .switch[data-v-0029e4d1]{background:#1e2024}.dark .popup-wrapper .switch[data-v-0029e4d1]{background:#25272c}",""])},kjFj:function(t,a,e){"use strict";e("POQZ")},mKil:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".dropzone[data-v-e3ccefc6]{position:relative;line-height:0}.dropzone input[type=file][data-v-e3ccefc6]{opacity:0;position:absolute;top:0;left:0;right:0;bottom:0;z-index:2;width:100%;cursor:pointer}.dropzone .image-preview[data-v-e3ccefc6]{width:62px;height:62px;-o-object-fit:cover;object-fit:cover;border-radius:8px;z-index:1;position:relative}.dropzone .blurred[data-v-e3ccefc6]{position:absolute;left:0;top:2px;z-index:0;filter:blur(8px);opacity:.5}",""])},qCtf:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".info-box[data-v-b202b3ae]{padding:20px;border-radius:8px;margin-bottom:32px;background:#f4f5f6;text-align:left}.info-box.error[data-v-b202b3ae]{background:rgba(253,57,122,.1)}.info-box.error a[data-v-b202b3ae],.info-box.error p[data-v-b202b3ae]{color:#fd397a}.info-box.error a[data-v-b202b3ae]{text-decoration:underline}.info-box p[data-v-b202b3ae]{line-height:1.6;word-break:break-word;font-weight:600}.info-box p[data-v-b202b3ae],.info-box p[data-v-b202b3ae] a{font-size:15px}.info-box p[data-v-b202b3ae] b{font-size:15px;font-weight:700}.info-box a[data-v-b202b3ae],.info-box b[data-v-b202b3ae]{font-weight:700}.info-box a[data-v-b202b3ae]{font-size:.9375em;line-height:1.6}.info-box ul[data-v-b202b3ae]{margin-top:15px}.info-box ul[data-v-b202b3ae],.info-box ul li[data-v-b202b3ae],.info-box ul li a[data-v-b202b3ae]{display:block}@media only screen and (max-width:690px){.info-box[data-v-b202b3ae]{padding:15px}}.dark .info-box[data-v-b202b3ae]{background:#1e2024}.dark .info-box p[data-v-b202b3ae],.dark .info-box ul li[data-v-b202b3ae]{color:#bec6cf}",""])},rTq1:function(t,a,e){var o=e("UbiG");"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,r);o.locals&&(t.exports=o.locals)},xJB9:function(t,a,e){"use strict";e("rTq1")},xxrA:function(t,a,e){"use strict";var o={name:"SwitchInput",props:["label","name","state","info"],data:function(){return{isSwitched:void 0}},methods:{changeState:function(){this.isSwitched=!this.isSwitched,this.$emit("input",this.isSwitched)}},mounted:function(){this.isSwitched=this.state}},r=(e("FCdB"),e("KHd+")),i=Object(r.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"input-wrapper"},[e("div",{staticClass:"switch-content"},[t.label?e("label",{staticClass:"input-label"},[t._v(t._s(t.label)+":")]):t._e(),t._v(" "),t.info?e("small",{staticClass:"input-info"},[t._v(t._s(t.info))]):t._e()]),t._v(" "),e("div",{staticClass:"switch-content text-right"},[e("div",{staticClass:"switch",class:{active:t.isSwitched},on:{click:t.changeState}},[e("div",{staticClass:"switch-button"})])])])}),[],!1,null,"0029e4d1",null);a.a=i.exports}}]);
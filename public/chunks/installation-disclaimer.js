(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"4TWA":function(t,a,e){"use strict";var o=e("CjXH"),i=e("LvDl"),n={name:"SelectInput",props:["placeholder","options","isError","default"],components:{Edit2Icon:o.u,UserIcon:o.mb,ChevronDownIcon:o.g},watch:{query:Object(i.debounce)((function(t){this.searchedResults=Object(i.omitBy)(this.options,(function(a){return!a.label.toLowerCase().includes(t.toLowerCase())}))}),200)},computed:{isSearching:function(){return this.searchedResults&&""!==this.query},optionList:function(){return this.isSearching?this.searchedResults:this.options}},data:function(){return{searchedResults:void 0,selected:void 0,isOpen:!1,query:""}},methods:{selectOption:function(t){this.$emit("input",t.value),this.selected=t,this.isOpen=!1},openMenu:function(){var t=this;this.isOpen=!this.isOpen,this.isOpen&&this.$nextTick((function(){return t.$refs.search.focus()}))}},created:function(){var t=this;this.default&&(this.selected=this.options.find((function(a){return a.value===t.default})))}},r=(e("h8fA"),e("KHd+")),d=Object(r.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"select"},[e("div",{staticClass:"input-area",class:{"is-active":t.isOpen,"is-error":t.isError},on:{click:t.openMenu}},[t.selected?e("div",{staticClass:"selected"},[t.selected.icon?e("div",{staticClass:"option-icon"},["user"===t.selected.icon?e("user-icon",{attrs:{size:"14"}}):t._e(),t._v(" "),"user-edit"===t.selected.icon?e("edit2-icon",{attrs:{size:"14"}}):t._e()],1):t._e(),t._v(" "),e("span",{staticClass:"option-value"},[t._v(t._s(t.selected.label))])]):t._e(),t._v(" "),t.selected?t._e():e("div",{staticClass:"not-selected"},[e("span",{staticClass:"option-value placehoder"},[t._v(t._s(t.placeholder))])]),t._v(" "),e("chevron-down-icon",{staticClass:"chevron",attrs:{size:"19"}})],1),t._v(" "),e("transition",{attrs:{name:"slide-in"}},[t.isOpen?e("div",{staticClass:"input-options"},[t.options.length>5?e("div",{staticClass:"select-search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],ref:"search",staticClass:"search-input focus-border-theme",attrs:{type:"text",placeholder:t.$t("select_search_placeholder")},domProps:{value:t.query},on:{input:function(a){a.target.composing||(t.query=a.target.value)}}})]):t._e(),t._v(" "),e("ul",{staticClass:"option-list"},t._l(t.optionList,(function(a,o){return e("li",{key:o,staticClass:"option-item",on:{click:function(e){return t.selectOption(a)}}},[a.icon?e("div",{staticClass:"option-icon"},["user"===a.icon?e("user-icon",{attrs:{size:"14"}}):t._e(),t._v(" "),"user-edit"===a.icon?e("edit2-icon",{attrs:{size:"14"}}):t._e()],1):t._e(),t._v(" "),e("span",{staticClass:"option-value"},[t._v(t._s(a.label))])])})),0)]):t._e()])],1)}),[],!1,null,"0e43906c",null);a.a=d.exports},"8PNr":function(t,a,e){var o=e("StbF");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(t.exports=o.locals)},"8cuL":function(t,a,e){var o=e("gzm+");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(t.exports=o.locals)},ASoH:function(t,a,e){"use strict";var o={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},i=(e("AUMa"),e("KHd+")),n=Object(i.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"button outline hover-text-theme hover-border-theme"},[e("span",{staticClass:"text-label"},[t._v(t._s(t.text))]),t._v(" "),t.loading?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{staticClass:"sync-alt svg-color-theme",attrs:{icon:"sync-alt"}})],1):t._e(),t._v(" "),!t.loading&&t.icon?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{staticClass:"svg-color-theme",attrs:{icon:t.icon}})],1):t._e()])}),[],!1,null,"2a4dfe94",null);a.a=n.exports},AUMa:function(t,a,e){"use strict";e("8cuL")},Jx8r:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,"#auth[data-v-31af8372]{height:100%;width:100%;display:table}",""])},KnjL:function(t,a,e){"use strict";var o={name:"InfoBox",props:["type"]},i=(e("twCh"),e("KHd+")),n=Object(i.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"384ec59e",null);a.a=n.exports},N3BI:function(t,a,e){"use strict";e("8PNr")},Nvns:function(t,a,e){"use strict";e("lm1I")},StbF:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".form-label[data-v-7f5410c4]{display:flex;align-items:center;margin-bottom:30px}.form-label .icon[data-v-7f5410c4]{margin-right:10px}.form-label .icon circle[data-v-7f5410c4],.form-label .icon line[data-v-7f5410c4],.form-label .icon path[data-v-7f5410c4],.form-label .icon rect[data-v-7f5410c4]{color:inherit}.form-label .label[data-v-7f5410c4]{font-size:1.125em;font-weight:700}.dark-mode .form-label .label[data-v-7f5410c4]{color:#bec6cf}",""])},TJPC:function(t,a,e){"use strict";e.d(a,"a",(function(){return n}));function o(t){return null==t}function i(t){return Array.isArray(t)&&0===t.length}var n={validate:function(t,a){var e=(void 0===a?{allowFalse:!0}:a).allowFalse,n={valid:!1,required:!0};return o(t)||i(t)?n:!1!==t||e?(n.valid=!!String(t).trim().length,n):n},params:[{name:"allowFalse",default:!0}],computesRequired:!0}},TxpJ:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".select[data-v-0e43906c]{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.select-search[data-v-0e43906c]{background:#fff;position:sticky;top:0;padding:13px}.select-search .search-input[data-v-0e43906c]{border:1px solid transparent;background:#f4f5f6;transition:all .15s ease;font-size:.875em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%}.input-options[data-v-0e43906c]{box-shadow:0 5px 15px rgba(0,0,0,.12);background:#fff;border-radius:8px;position:absolute;overflow:hidden;top:65px;left:0;right:0;z-index:9;max-height:295px;overflow-y:auto}.input-options .option-item[data-v-0e43906c]{padding:13px 20px;display:block;cursor:pointer}.input-options .option-item[data-v-0e43906c]:hover{color:#00bc7e;background:#f4f5f6}.input-options .option-item[data-v-0e43906c]:last-child{border-bottom:none}.input-area[data-v-0e43906c]{border:1px solid transparent;justify-content:space-between;box-shadow:0 1px 5px rgba(0,0,0,.12);align-items:center;border-radius:8px;padding:13px 20px;display:flex;outline:0;width:100%;cursor:pointer}.input-area[data-v-0e43906c],.input-area .chevron[data-v-0e43906c]{transition:all .15s ease}.input-area.is-active .chevron[data-v-0e43906c]{transform:rotate(180deg)}.input-area.is-error[data-v-0e43906c]{border-color:#fd397a;box-shadow:0 0 7px rgba(253,57,122,.3)}.option-icon[data-v-0e43906c]{width:20px;display:inline-block;font-size:.625em}.option-icon svg[data-v-0e43906c]{margin-top:-4px;vertical-align:middle}.option-value[data-v-0e43906c]{font-size:.875em;font-weight:700;width:100%;vertical-align:middle}.option-value.placehoder[data-v-0e43906c]{color:rgba(27,37,57,.5)}.slide-in-enter-active[data-v-0e43906c]{transition:all .15s ease}.slide-in-enter[data-v-0e43906c]{opacity:0;transform:translateY(-50px)}.dark-mode .select-search[data-v-0e43906c]{background:#1e2024}.dark-mode .select-search .search-input[data-v-0e43906c]{background:#131414}.dark-mode .input-area[data-v-0e43906c]{background:#1e2024;border-color:#1e2024}.dark-mode .popup-wrapper .input-area[data-v-0e43906c]{background:#25272c}.dark-mode .input-options[data-v-0e43906c]{background:#1e2024}.dark-mode .input-options .option-item[data-v-0e43906c]{border-bottom:none}.dark-mode .input-options .option-item[data-v-0e43906c]:hover{background:#2a2c32}.dark-mode .input-options .option-item:hover .option-icon circle[data-v-0e43906c],.dark-mode .input-options .option-item:hover .option-icon path[data-v-0e43906c]{color:inherit}.dark-mode .input-options .option-item[data-v-0e43906c]:last-child{border-bottom:none}.dark-mode .option-value.placehoder[data-v-0e43906c]{color:#7d858c}",""])},"aEI+":function(t,a,e){"use strict";e.r(a);var o=e("A5+z"),i=e("bDRN"),n=e("4TWA"),r=e("eZ9V"),d=e("KnjL"),c=e("j8qy"),s=e("ASoH"),l=e("zTYo"),p=e("CjXH"),u=e("TJPC"),m=e("vDqi"),v=e.n(m),f={name:"InstallationDisclaimer",components:{AuthContentWrapper:i.a,ValidationProvider:o.ValidationProvider,ValidationObserver:o.ValidationObserver,SettingsIcon:p.cb,SelectInput:n.a,AuthContent:c.a,AuthButton:s.a,FormLabel:r.a,required:u.a,Spinner:l.a,InfoBox:d.a},data:function(){return{isLoading:!0,isError:!1,isExtended:void 0}},created:function(){var t=this;v.a.post("/api/setup/purchase-code",{purchaseCode:localStorage.getItem("purchase_code")}).then((function(a){t.$scrollTop(),t.isLoading=!1,"b6896a44017217c36f4a6fdc56699728"===a.data?(t.isExtended=!0,localStorage.setItem("license","Extended")):(t.isExtended=!1,localStorage.setItem("license","Regular"))})).catch((function(a){t.isLoading=!1,400==a.response.status&&t.$router.push({name:"PurchaseCode"})}))}},h=(e("Nvns"),e("KHd+")),b=Object(h.a)(f,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("AuthContentWrapper",{ref:"auth"},[e("AuthContent",{attrs:{name:"database-credentials",visible:!0}},[e("div",{staticClass:"content-headline"},[e("settings-icon",{staticClass:"title-icon text-theme",attrs:{size:"40"}}),t._v(" "),e("h1",[t._v("Setup Wizard")]),t._v(" "),e("h2",[t._v("Database was installed successfully. Let's set up application, Make sure you have these informations before continue:")])],1),t._v(" "),t.isLoading?e("div",{attrs:{id:"loader"}},[e("Spinner")],1):t._e(),t._v(" "),t.isLoading?t._e():e("div",{staticClass:"form block-form"},[e("InfoBox",[t.isExtended?e("ul",{staticClass:"information-list",staticStyle:{"margin-top":"0"}},[e("li",[t._v("\n                        1. Stripe API Credentials\n                    ")]),t._v(" "),e("li",[t._v("\n                        2. Billing details for Stripe Subscription Service\n                    ")]),t._v(" "),e("li",[t._v("\n                        3. You will create your subscription plans\n                    ")]),t._v(" "),e("li",[t._v("\n                        4. Email Account Credentials for sending emails to your users\n                    ")]),t._v(" "),e("li",[t._v("\n                        5. If you use external storage service, then you will need set your API credentials\n                    ")]),t._v(" "),e("li",[t._v("\n                        6. Some general settings for VueFileManager like Google Analytics, logo, favicon and application name\n                    ")]),t._v(" "),e("li",[t._v("\n                        7. You will create admin account\n                    ")])]):e("ul",{staticClass:"information-list",staticStyle:{"margin-top":"0"}},[e("li",[t._v("\n                        1. Email Account Credentials for sending emails to your users\n                    ")]),t._v(" "),e("li",[t._v("\n                        2. If you use external storage service, then you will need set your API credentials\n                    ")]),t._v(" "),e("li",[t._v("\n                        3. Some general settings for VueFileManager like Google Analytics, logo, favicon and application name\n                    ")]),t._v(" "),e("li",[t._v("\n                        4. You will create admin account\n                    ")])])]),t._v(" "),t.isExtended?e("router-link",{staticClass:"submit-wrapper",attrs:{to:{name:"SubscriptionService"},tag:"div"}},[e("AuthButton",{attrs:{icon:"chevron-right",text:"I Get It! Let's Set Up Application",loading:t.isLoading,disabled:t.isLoading}})],1):t._e(),t._v(" "),t.isExtended?t._e():e("router-link",{staticClass:"submit-wrapper",attrs:{to:{name:"EnvironmentSetup"},tag:"div"}},[e("AuthButton",{attrs:{icon:"chevron-right",text:"I Get It! Let's Set Up Application",loading:t.isLoading,disabled:t.isLoading}})],1)],1)])],1)}),[],!1,null,"d38964c6",null);a.default=b.exports},bDRN:function(t,a,e){"use strict";var o={name:"AuthContentWrapper"},i=(e("iYAH"),e("KHd+")),n=Object(i.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);a.a=n.exports},eZ9V:function(t,a,e){"use strict";var o=e("CjXH"),i={name:"FormLabel",props:["icon"],components:{KeyIcon:o.J,Edit2Icon:o.u,SettingsIcon:o.cb,SmartphoneIcon:o.eb}},n=(e("N3BI"),e("KHd+")),r=Object(n.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-label"},[t.icon?t._e():e("edit-2-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}),t._v(" "),"settings"===t.icon?e("settings-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"smartphone"===t.icon?e("smartphone-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"key"===t.icon?e("key-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),e("b",{staticClass:"label"},[t._t("default")],2)],1)}),[],!1,null,"7f5410c4",null);a.a=r.exports},"gzm+":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".button[data-v-2a4dfe94]{cursor:pointer;border-radius:8px;text-decoration:none;padding:12px 32px;display:inline-block;margin-left:15px;margin-right:15px;white-space:nowrap;transition:all .15s ease;background:transparent}.button .text-label[data-v-2a4dfe94]{transition:all .15s ease;font-size:1.0625em;font-weight:800;line-height:0}.button .icon[data-v-2a4dfe94]{margin-left:12px;font-size:1em}.button.solid[data-v-2a4dfe94]{background:#00bc7e;border:2px solid #00bc7e}.button.solid .text-label[data-v-2a4dfe94]{color:#fff}.button.outline[data-v-2a4dfe94]{border:2px solid #1b2539}.button.outline .text-label[data-v-2a4dfe94]{color:#1b2539}.button.outline .icon path[data-v-2a4dfe94]{fill:inherit}.button.outline[data-v-2a4dfe94]:hover{border-color:inherit}.button.outline:hover .text-label[data-v-2a4dfe94]{color:inherit}.dark-mode .button.outline[data-v-2a4dfe94]{background:#131414;border-color:#bec6cf}.dark-mode .button.outline .text-label[data-v-2a4dfe94]{color:#bec6cf}.sync-alt[data-v-2a4dfe94]{-webkit-animation:spin-data-v-2a4dfe94 1s linear infinite;animation:spin-data-v-2a4dfe94 1s linear infinite}@-webkit-keyframes spin-data-v-2a4dfe94{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin-data-v-2a4dfe94{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""])},h8fA:function(t,a,e){"use strict";e("umRX")},iYAH:function(t,a,e){"use strict";e("lh0Q")},j8qy:function(t,a,e){"use strict";var o={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},i=e("KHd+"),n=Object(i.a)(o,(function(){var t=this.$createElement,a=this._self._c||t;return this.isVisible?a("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);a.a=n.exports},jmps:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".form[data-v-d38964c6]{max-width:700px}.form.inline-form[data-v-d38964c6]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-d38964c6]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-d38964c6]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-d38964c6]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-d38964c6]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-d38964c6]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-d38964c6]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-d38964c6]:last-child{margin-bottom:0}.form.block-form .button[data-v-d38964c6]{margin-top:50px}.form .inline-wrapper[data-v-d38964c6]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-d38964c6]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-d38964c6]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-d38964c6]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-d38964c6]{display:flex}.single-line-form .submit-button[data-v-d38964c6]{margin-left:20px}.error-message[data-v-d38964c6]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-d38964c6]{width:100%}input[type=email][data-v-d38964c6],input[type=number][data-v-d38964c6],input[type=password][data-v-d38964c6],input[type=text][data-v-d38964c6],textarea[data-v-d38964c6]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-d38964c6],input[type=number].is-error[data-v-d38964c6],input[type=password].is-error[data-v-d38964c6],input[type=text].is-error[data-v-d38964c6],textarea.is-error[data-v-d38964c6]{border-color:#fd397a}input[type=email][data-v-d38964c6]::-moz-placeholder,input[type=number][data-v-d38964c6]::-moz-placeholder,input[type=password][data-v-d38964c6]::-moz-placeholder,input[type=text][data-v-d38964c6]::-moz-placeholder,textarea[data-v-d38964c6]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-d38964c6]:-ms-input-placeholder,input[type=number][data-v-d38964c6]:-ms-input-placeholder,input[type=password][data-v-d38964c6]:-ms-input-placeholder,input[type=text][data-v-d38964c6]:-ms-input-placeholder,textarea[data-v-d38964c6]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-d38964c6]::placeholder,input[type=number][data-v-d38964c6]::placeholder,input[type=password][data-v-d38964c6]::placeholder,input[type=text][data-v-d38964c6]::placeholder,textarea[data-v-d38964c6]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][disabled][data-v-d38964c6],input[type=number][disabled][data-v-d38964c6],input[type=password][disabled][data-v-d38964c6],input[type=text][disabled][data-v-d38964c6],textarea[disabled][data-v-d38964c6]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}input[type=color][data-v-d38964c6]{width:38px!important;height:40px;border:none;outline:none;background:none;min-width:0!important}.additional-link[data-v-d38964c6]{font-size:1em;margin-top:50px;display:block}.additional-link a[data-v-d38964c6],.additional-link b[data-v-d38964c6]{cursor:pointer}.additional-link a[data-v-d38964c6]:hover,.additional-link b[data-v-d38964c6]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-d38964c6]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-d38964c6]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-d38964c6],.form textarea[data-v-d38964c6]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-d38964c6]{display:block}.form.block-form .block-wrapper label[data-v-d38964c6]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-d38964c6]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-d38964c6]{display:block}.form.inline-form .input-wrapper .error-message[data-v-d38964c6]{position:relative;bottom:0}.form .button[data-v-d38964c6]{padding:14px 32px}.single-line-form[data-v-d38964c6]{display:block}.single-line-form .submit-button[data-v-d38964c6]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-d38964c6],input[type=number][data-v-d38964c6],input[type=password][data-v-d38964c6],input[type=text][data-v-d38964c6],textarea[data-v-d38964c6]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-d38964c6]{display:block}}.dark-mode .form .input-help[data-v-d38964c6]{color:#7d858c}.dark-mode .form.block-form .block-wrapper label[data-v-d38964c6],.dark-mode .form .inline-wrapper .switch-label .input-label[data-v-d38964c6]{color:#bec6cf}.dark-mode input[type=email][data-v-d38964c6],.dark-mode input[type=number][data-v-d38964c6],.dark-mode input[type=password][data-v-d38964c6],.dark-mode input[type=text][data-v-d38964c6],.dark-mode textarea[data-v-d38964c6]{border-color:#1e2024;background:#1e2024;color:#bec6cf}.dark-mode input[type=email][data-v-d38964c6]::-moz-placeholder,.dark-mode input[type=number][data-v-d38964c6]::-moz-placeholder,.dark-mode input[type=password][data-v-d38964c6]::-moz-placeholder,.dark-mode input[type=text][data-v-d38964c6]::-moz-placeholder,.dark-mode textarea[data-v-d38964c6]::-moz-placeholder{color:#7d858c}.dark-mode input[type=email][data-v-d38964c6]:-ms-input-placeholder,.dark-mode input[type=number][data-v-d38964c6]:-ms-input-placeholder,.dark-mode input[type=password][data-v-d38964c6]:-ms-input-placeholder,.dark-mode input[type=text][data-v-d38964c6]:-ms-input-placeholder,.dark-mode textarea[data-v-d38964c6]:-ms-input-placeholder{color:#7d858c}.dark-mode input[type=email][data-v-d38964c6]::placeholder,.dark-mode input[type=number][data-v-d38964c6]::placeholder,.dark-mode input[type=password][data-v-d38964c6]::placeholder,.dark-mode input[type=text][data-v-d38964c6]::placeholder,.dark-mode textarea[data-v-d38964c6]::placeholder{color:#7d858c}.dark-mode input[type=email][disabled][data-v-d38964c6],.dark-mode input[type=number][disabled][data-v-d38964c6],.dark-mode input[type=password][disabled][data-v-d38964c6],.dark-mode input[type=text][disabled][data-v-d38964c6],.dark-mode textarea[disabled][data-v-d38964c6]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}.dark-mode .popup-wrapper input[type=email][data-v-d38964c6],.dark-mode .popup-wrapper input[type=number][data-v-d38964c6],.dark-mode .popup-wrapper input[type=password][data-v-d38964c6],.dark-mode .popup-wrapper input[type=text][data-v-d38964c6],.dark-mode .popup-wrapper textarea[data-v-d38964c6]{background:#25272c}.auth-logo-text[data-v-d38964c6]{font-size:1.375em;font-weight:800;margin-bottom:40px;display:block}.auth-form[data-v-d38964c6]{text-align:center;max-width:600px;padding:25px 20px;display:table-cell;vertical-align:middle}.auth-form input[data-v-d38964c6]{min-width:310px}.auth-form .additional-link a[data-v-d38964c6]{font-weight:700;text-decoration:none}.auth-form .user-avatar[data-v-d38964c6]{width:100px;height:100px;-o-object-fit:cover;object-fit:cover;margin-bottom:20px;border-radius:8px;box-shadow:0 10px 30px rgba(25,54,60,.2)}.auth-form .logo[data-v-d38964c6]{width:120px;margin-bottom:20px}.auth-form h1[data-v-d38964c6]{font-size:2.125em;font-weight:800;line-height:1.2;margin-bottom:2px;color:#1b2539}.auth-form h2[data-v-d38964c6]{font-size:1.4375em;font-weight:500;margin-bottom:50px;color:#1b2539}.auth-form .block-form[data-v-d38964c6]{margin-left:auto;margin-right:auto}@media only screen and (min-width:690px) and (max-width:960px){.auth-form[data-v-d38964c6]{padding-left:20%;padding-right:20%}}@media only screen and (max-width:690px){.auth-form[data-v-d38964c6]{width:100%}.auth-form h1[data-v-d38964c6]{font-size:1.875em}.auth-form h2[data-v-d38964c6]{font-size:1.3125em}}@media only screen and (max-width:490px){.auth-form h1[data-v-d38964c6]{font-size:1.375em}.auth-form h2[data-v-d38964c6]{font-size:1.125em}.auth-form input[data-v-d38964c6]{min-width:0}.auth-form .additional-link[data-v-d38964c6]{font-size:.9375em}}.dark-mode .auth-form .additional-link[data-v-d38964c6],.dark-mode .auth-form h1[data-v-d38964c6],.dark-mode .auth-form h2[data-v-d38964c6]{color:#bec6cf}.content-headline[data-v-d38964c6]{max-width:630px;margin-left:auto;margin-right:auto}.auth-form input[data-v-d38964c6]{min-width:0}.duplicator .duplicator-add-button[data-v-d38964c6]{width:100%}.duplicator .duplicator-item[data-v-d38964c6]{box-shadow:0 1px 5px rgba(0,0,0,.12);border-radius:8px;background:#fff;padding:25px;margin:0 -25px 32px;position:relative}.duplicator .duplicator-item .duplicator-title[data-v-d38964c6]{font-size:1.125em;margin-bottom:20px;display:block;font-weight:700}.duplicator .duplicator-item .delete-item[data-v-d38964c6]{position:absolute;top:15px;right:15px;cursor:pointer}.duplicator .duplicator-item .delete-item:hover line[data-v-d38964c6]{stroke:#00bc7e}.duplicator .duplicator-item input[data-v-d38964c6],.duplicator .duplicator-item textarea[data-v-d38964c6]{box-shadow:none;background:#fafafa}.form[data-v-d38964c6]{max-width:580px;text-align:left}.submit-wrapper[data-v-d38964c6]{text-align:right}.submit-wrapper .button[data-v-d38964c6]{margin:58px 0 50px;width:100%}.title-icon[data-v-d38964c6]{margin-bottom:10px;-webkit-animation:spinner-data-v-d38964c6 5s linear infinite;animation:spinner-data-v-d38964c6 5s linear infinite}.title-icon circle[data-v-d38964c6],.title-icon path[data-v-d38964c6]{color:inherit}@-webkit-keyframes spinner-data-v-d38964c6{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spinner-data-v-d38964c6{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.dark-mode .duplicator .duplicator-item[data-v-d38964c6]{background:#1e2024}.dark-mode .duplicator .duplicator-item input[data-v-d38964c6],.dark-mode .duplicator .duplicator-item textarea[data-v-d38964c6]{background:#131414}#loader[data-v-d38964c6]{position:relative;margin-top:80px}.information-list li[data-v-d38964c6]{padding:8px 0;font-size:1.0625em;font-weight:600}.information-list li[data-v-d38964c6]:first-child{padding-top:0}.information-list li[data-v-d38964c6]:last-child{padding-bottom:0}",""])},lh0Q:function(t,a,e){var o=e("Jx8r");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(t.exports=o.locals)},lm1I:function(t,a,e){var o=e("jmps");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(t.exports=o.locals)},qmhD:function(t,a,e){var o=e("z7Fm");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(t.exports=o.locals)},twCh:function(t,a,e){"use strict";e("qmhD")},umRX:function(t,a,e){var o=e("TxpJ");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(t.exports=o.locals)},z7Fm:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".info-box[data-v-384ec59e]{padding:20px;border-radius:8px;margin-bottom:32px;background:#f4f5f6;text-align:left}.info-box.error[data-v-384ec59e]{background:rgba(253,57,122,.1)}.info-box.error a[data-v-384ec59e],.info-box.error p[data-v-384ec59e]{color:#fd397a}.info-box.error a[data-v-384ec59e]{text-decoration:underline}.info-box p[data-v-384ec59e]{line-height:1.6;word-break:break-word;font-weight:600}.info-box p[data-v-384ec59e],.info-box p[data-v-384ec59e] a{font-size:15px}.info-box p[data-v-384ec59e] b{font-size:15px;font-weight:700}.info-box a[data-v-384ec59e],.info-box b[data-v-384ec59e]{font-weight:700}.info-box a[data-v-384ec59e]{font-size:.9375em;line-height:1.6}.info-box ul[data-v-384ec59e]{margin-top:15px}.info-box ul[data-v-384ec59e],.info-box ul li[data-v-384ec59e],.info-box ul li a[data-v-384ec59e]{display:block}@media only screen and (max-width:690px){.info-box[data-v-384ec59e]{padding:15px}}.dark-mode .info-box[data-v-384ec59e]{background:#1e2024}.dark-mode .info-box p[data-v-384ec59e],.dark-mode .info-box ul li[data-v-384ec59e]{color:#bec6cf}",""])}}]);
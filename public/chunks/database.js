(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"4TWA":function(a,t,e){"use strict";var o=e("CjXH"),r=e("LvDl"),i={name:"SelectInput",props:["placeholder","options","isError","default"],components:{Edit2Icon:o.u,UserIcon:o.mb,ChevronDownIcon:o.g},watch:{query:Object(r.debounce)((function(a){this.searchedResults=Object(r.omitBy)(this.options,(function(t){return!t.label.toLowerCase().includes(a.toLowerCase())}))}),200)},computed:{isSearching:function(){return this.searchedResults&&""!==this.query},optionList:function(){return this.isSearching?this.searchedResults:this.options}},data:function(){return{searchedResults:void 0,selected:void 0,isOpen:!1,query:""}},methods:{selectOption:function(a){this.$emit("input",a.value),this.selected=a,this.isOpen=!1},openMenu:function(){var a=this;this.isOpen=!this.isOpen,this.isOpen&&this.$nextTick((function(){return a.$refs.search.focus()}))}},created:function(){var a=this;this.default&&(this.selected=this.options.find((function(t){return t.value===a.default})))}},n=(e("h8fA"),e("KHd+")),d=Object(n.a)(i,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"select"},[e("div",{staticClass:"input-area",class:{"is-active":a.isOpen,"is-error":a.isError},on:{click:a.openMenu}},[a.selected?e("div",{staticClass:"selected"},[a.selected.icon?e("div",{staticClass:"option-icon"},["user"===a.selected.icon?e("user-icon",{attrs:{size:"14"}}):a._e(),a._v(" "),"user-edit"===a.selected.icon?e("edit2-icon",{attrs:{size:"14"}}):a._e()],1):a._e(),a._v(" "),e("span",{staticClass:"option-value"},[a._v(a._s(a.selected.label))])]):a._e(),a._v(" "),a.selected?a._e():e("div",{staticClass:"not-selected"},[e("span",{staticClass:"option-value placehoder"},[a._v(a._s(a.placeholder))])]),a._v(" "),e("chevron-down-icon",{staticClass:"chevron",attrs:{size:"19"}})],1),a._v(" "),e("transition",{attrs:{name:"slide-in"}},[a.isOpen?e("div",{staticClass:"input-options"},[a.options.length>5?e("div",{staticClass:"select-search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.query,expression:"query"}],ref:"search",staticClass:"search-input focus-border-theme",attrs:{type:"text",placeholder:a.$t("select_search_placeholder")},domProps:{value:a.query},on:{input:function(t){t.target.composing||(a.query=t.target.value)}}})]):a._e(),a._v(" "),e("ul",{staticClass:"option-list"},a._l(a.optionList,(function(t,o){return e("li",{key:o,staticClass:"option-item",on:{click:function(e){return a.selectOption(t)}}},[t.icon?e("div",{staticClass:"option-icon"},["user"===t.icon?e("user-icon",{attrs:{size:"14"}}):a._e(),a._v(" "),"user-edit"===t.icon?e("edit2-icon",{attrs:{size:"14"}}):a._e()],1):a._e(),a._v(" "),e("span",{staticClass:"option-value"},[a._v(a._s(t.label))])])})),0)]):a._e()])],1)}),[],!1,null,"0e43906c",null);t.a=d.exports},"8PNr":function(a,t,e){var o=e("StbF");"string"==typeof o&&(o=[[a.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,r);o.locals&&(a.exports=o.locals)},"8cuL":function(a,t,e){var o=e("gzm+");"string"==typeof o&&(o=[[a.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,r);o.locals&&(a.exports=o.locals)},"9xkz":function(a,t,e){"use strict";e.r(t);var o=e("o0o1"),r=e.n(o),i=e("A5+z"),n=e("bDRN"),d=e("4TWA"),s=e("eZ9V"),c=e("KnjL"),l=e("j8qy"),p=e("ASoH"),u=e("CjXH"),m=e("TJPC"),v=e("vDqi"),f=e.n(v);function b(a,t,e,o,r,i,n){try{var d=a[i](n),s=d.value}catch(a){return void e(a)}d.done?t(s):Promise.resolve(s).then(o,r)}var h={name:"Database",components:{AuthContentWrapper:n.a,ValidationProvider:i.ValidationProvider,ValidationObserver:i.ValidationObserver,SettingsIcon:u.cb,SelectInput:d.a,AuthContent:l.a,AuthButton:p.a,FormLabel:s.a,required:m.a,InfoBox:c.a},computed:{submitButtonText:function(){return this.isLoading?"Testing and Installing Database":"Test Connection and Install Database"}},data:function(){return{isLoading:!1,isError:!1,errorMessage:"",connectionList:[{label:"MySQL",value:"mysql"}],databaseCredentials:{connection:"mysql",host:"",port:"",name:"",username:"",password:""}}},methods:{databaseCredentialsSubmit:function(){var a,t=this;return(a=r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$refs.verifyPurchaseCode.validate();case 2:if(a.sent){a.next=5;break}return a.abrupt("return");case 5:t.isLoading=!0,t.isError=!1,f.a.post("/api/setup/database",t.databaseCredentials).then((function(a){t.isLoading=!1,t.$router.push({name:"InstallationDisclaimer"})})).catch((function(a){(a.response.status=500)&&(t.isError=!0,t.errorMessage=a.response.data.message),t.isLoading=!1}));case 8:case"end":return a.stop()}}),a)})),function(){var t=this,e=arguments;return new Promise((function(o,r){var i=a.apply(t,e);function n(a){b(i,o,r,n,d,"next",a)}function d(a){b(i,o,r,n,d,"throw",a)}n(void 0)}))})()}},created:function(){this.$scrollTop()}},x=(e("il2q"),e("KHd+")),g=Object(x.a)(h,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("AuthContentWrapper",{ref:"auth"},[e("AuthContent",{attrs:{name:"database-credentials",visible:!0}},[e("div",{staticClass:"content-headline"},[e("settings-icon",{staticClass:"title-icon text-theme",attrs:{size:"40"}}),a._v(" "),e("h1",[a._v("Setup Wizard")]),a._v(" "),e("h2",[a._v("Set up your database connection to install application database.")])],1),a._v(" "),e("ValidationObserver",{ref:"verifyPurchaseCode",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),a.databaseCredentialsSubmit(t)}},scopedSlots:a._u([{key:"default",fn:function(t){t.invalid;return[e("FormLabel",[a._v("Database Credentials")]),a._v(" "),e("InfoBox",[e("p",[a._v("We strongly recommend use MySQL or MariaDB database. Create new database, set all privileges and get credentials. For those who use cPanel or Plesk, here is useful resources:")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.inmotionhosting.com/support/edu/cpanel/create-database-2/",target:"_blank"}},[a._v("1. cPanel - MySQL Database Wizard")]),a._v(" "),e("a",{attrs:{href:"https://docs.plesk.com/en-US/obsidian/customer-guide/65157/",target:"_blank"}},[a._v("2. Plesk - Website databases")])])])]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Connection:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Connection",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("SelectInput",{attrs:{options:a.connectionList,default:"mysql",placeholder:"Select your database connection",isError:o[0]},model:{value:a.databaseCredentials.connection,callback:function(t){a.$set(a.databaseCredentials,"connection",t)},expression:"databaseCredentials.connection"}}),a._v(" "),o[0]?e("span",{staticClass:"error-message"},[a._v(a._s(o[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Host:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Host",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.databaseCredentials.host,expression:"databaseCredentials.host"}],class:{"is-error":o[0]},attrs:{placeholder:"Type your database host",type:"text"},domProps:{value:a.databaseCredentials.host},on:{input:function(t){t.target.composing||a.$set(a.databaseCredentials,"host",t.target.value)}}}),a._v(" "),o[0]?e("span",{staticClass:"error-message"},[a._v(a._s(o[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Port:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Port",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.databaseCredentials.port,expression:"databaseCredentials.port"}],class:{"is-error":o[0]},attrs:{placeholder:"Type your database port",type:"text"},domProps:{value:a.databaseCredentials.port},on:{input:function(t){t.target.composing||a.$set(a.databaseCredentials,"port",t.target.value)}}}),a._v(" "),o[0]?e("span",{staticClass:"error-message"},[a._v(a._s(o[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Database Name:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Database Name",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.databaseCredentials.name,expression:"databaseCredentials.name"}],class:{"is-error":o[0]},attrs:{placeholder:"Select your database name",type:"text"},domProps:{value:a.databaseCredentials.name},on:{input:function(t){t.target.composing||a.$set(a.databaseCredentials,"name",t.target.value)}}}),a._v(" "),o[0]?e("span",{staticClass:"error-message"},[a._v(a._s(o[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Database Username:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Database Username",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.databaseCredentials.username,expression:"databaseCredentials.username"}],class:{"is-error":o[0]},attrs:{placeholder:"Select your database name",type:"text"},domProps:{value:a.databaseCredentials.username},on:{input:function(t){t.target.composing||a.$set(a.databaseCredentials,"username",t.target.value)}}}),a._v(" "),o[0]?e("span",{staticClass:"error-message"},[a._v(a._s(o[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Database Password:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Database Password",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.databaseCredentials.password,expression:"databaseCredentials.password"}],class:{"is-error":o[0]},attrs:{placeholder:"Select your database password",type:"text"},domProps:{value:a.databaseCredentials.password},on:{input:function(t){t.target.composing||a.$set(a.databaseCredentials,"password",t.target.value)}}}),a._v(" "),o[0]?e("span",{staticClass:"error-message"},[a._v(a._s(o[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),a.isError?e("InfoBox",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"error"}},[e("p",[a._v("We couldn't establish database connection. Please double check your database credentials.")]),a._v(" "),e("br"),a._v(" "),e("p",[a._v("Detailed error: "+a._s(a.errorMessage))])]):a._e(),a._v(" "),e("div",{staticClass:"submit-wrapper"},[e("AuthButton",{attrs:{icon:"chevron-right",text:a.submitButtonText,loading:a.isLoading,disabled:a.isLoading}})],1)]}}])})],1)],1)}),[],!1,null,"48058cda",null);t.default=g.exports},ASoH:function(a,t,e){"use strict";var o={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},r=(e("AUMa"),e("KHd+")),i=Object(r.a)(o,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("button",{staticClass:"button outline hover-text-theme hover-border-theme"},[e("span",{staticClass:"text-label"},[a._v(a._s(a.text))]),a._v(" "),a.loading?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{staticClass:"sync-alt svg-color-theme",attrs:{icon:"sync-alt"}})],1):a._e(),a._v(" "),!a.loading&&a.icon?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{staticClass:"svg-color-theme",attrs:{icon:a.icon}})],1):a._e()])}),[],!1,null,"2a4dfe94",null);t.a=i.exports},AUMa:function(a,t,e){"use strict";e("8cuL")},Jx8r:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,"#auth[data-v-31af8372]{height:100%;width:100%;display:table}",""])},KnjL:function(a,t,e){"use strict";var o={name:"InfoBox",props:["type"]},r=(e("twCh"),e("KHd+")),i=Object(r.a)(o,(function(){var a=this.$createElement;return(this._self._c||a)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"384ec59e",null);t.a=i.exports},N3BI:function(a,t,e){"use strict";e("8PNr")},StbF:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".form-label[data-v-7f5410c4]{display:flex;align-items:center;margin-bottom:30px}.form-label .icon[data-v-7f5410c4]{margin-right:10px}.form-label .icon circle[data-v-7f5410c4],.form-label .icon line[data-v-7f5410c4],.form-label .icon path[data-v-7f5410c4],.form-label .icon rect[data-v-7f5410c4]{color:inherit}.form-label .label[data-v-7f5410c4]{font-size:1.125em;font-weight:700}.dark-mode .form-label .label[data-v-7f5410c4]{color:#bec6cf}",""])},TJPC:function(a,t,e){"use strict";e.d(t,"a",(function(){return i}));function o(a){return null==a}function r(a){return Array.isArray(a)&&0===a.length}var i={validate:function(a,t){var e=(void 0===t?{allowFalse:!0}:t).allowFalse,i={valid:!1,required:!0};return o(a)||r(a)?i:!1!==a||e?(i.valid=!!String(a).trim().length,i):i},params:[{name:"allowFalse",default:!0}],computesRequired:!0}},TxpJ:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".select[data-v-0e43906c]{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.select-search[data-v-0e43906c]{background:#fff;position:sticky;top:0;padding:13px}.select-search .search-input[data-v-0e43906c]{border:1px solid transparent;background:#f4f5f6;transition:all .15s ease;font-size:.875em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%}.input-options[data-v-0e43906c]{box-shadow:0 5px 15px rgba(0,0,0,.12);background:#fff;border-radius:8px;position:absolute;overflow:hidden;top:65px;left:0;right:0;z-index:9;max-height:295px;overflow-y:auto}.input-options .option-item[data-v-0e43906c]{padding:13px 20px;display:block;cursor:pointer}.input-options .option-item[data-v-0e43906c]:hover{color:#00bc7e;background:#f4f5f6}.input-options .option-item[data-v-0e43906c]:last-child{border-bottom:none}.input-area[data-v-0e43906c]{border:1px solid transparent;justify-content:space-between;box-shadow:0 1px 5px rgba(0,0,0,.12);align-items:center;border-radius:8px;padding:13px 20px;display:flex;outline:0;width:100%;cursor:pointer}.input-area[data-v-0e43906c],.input-area .chevron[data-v-0e43906c]{transition:all .15s ease}.input-area.is-active .chevron[data-v-0e43906c]{transform:rotate(180deg)}.input-area.is-error[data-v-0e43906c]{border-color:#fd397a;box-shadow:0 0 7px rgba(253,57,122,.3)}.option-icon[data-v-0e43906c]{width:20px;display:inline-block;font-size:.625em}.option-icon svg[data-v-0e43906c]{margin-top:-4px;vertical-align:middle}.option-value[data-v-0e43906c]{font-size:.875em;font-weight:700;width:100%;vertical-align:middle}.option-value.placehoder[data-v-0e43906c]{color:rgba(27,37,57,.5)}.slide-in-enter-active[data-v-0e43906c]{transition:all .15s ease}.slide-in-enter[data-v-0e43906c]{opacity:0;transform:translateY(-50px)}.dark-mode .select-search[data-v-0e43906c]{background:#1e2024}.dark-mode .select-search .search-input[data-v-0e43906c]{background:#131414}.dark-mode .input-area[data-v-0e43906c]{background:#1e2024;border-color:#1e2024}.dark-mode .popup-wrapper .input-area[data-v-0e43906c]{background:#25272c}.dark-mode .input-options[data-v-0e43906c]{background:#1e2024}.dark-mode .input-options .option-item[data-v-0e43906c]{border-bottom:none}.dark-mode .input-options .option-item[data-v-0e43906c]:hover{background:#2a2c32}.dark-mode .input-options .option-item:hover .option-icon circle[data-v-0e43906c],.dark-mode .input-options .option-item:hover .option-icon path[data-v-0e43906c]{color:inherit}.dark-mode .input-options .option-item[data-v-0e43906c]:last-child{border-bottom:none}.dark-mode .option-value.placehoder[data-v-0e43906c]{color:#7d858c}",""])},bDRN:function(a,t,e){"use strict";var o={name:"AuthContentWrapper"},r=(e("iYAH"),e("KHd+")),i=Object(r.a)(o,(function(){var a=this.$createElement;return(this._self._c||a)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);t.a=i.exports},eZ9V:function(a,t,e){"use strict";var o=e("CjXH"),r={name:"FormLabel",props:["icon"],components:{KeyIcon:o.J,Edit2Icon:o.u,SettingsIcon:o.cb,SmartphoneIcon:o.eb}},i=(e("N3BI"),e("KHd+")),n=Object(i.a)(r,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"form-label"},[a.icon?a._e():e("edit-2-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}),a._v(" "),"settings"===a.icon?e("settings-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):a._e(),a._v(" "),"smartphone"===a.icon?e("smartphone-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):a._e(),a._v(" "),"key"===a.icon?e("key-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):a._e(),a._v(" "),e("b",{staticClass:"label"},[a._t("default")],2)],1)}),[],!1,null,"7f5410c4",null);t.a=n.exports},"gzm+":function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".button[data-v-2a4dfe94]{cursor:pointer;border-radius:8px;text-decoration:none;padding:12px 32px;display:inline-block;margin-left:15px;margin-right:15px;white-space:nowrap;transition:all .15s ease;background:transparent}.button .text-label[data-v-2a4dfe94]{transition:all .15s ease;font-size:1.0625em;font-weight:800;line-height:0}.button .icon[data-v-2a4dfe94]{margin-left:12px;font-size:1em}.button.solid[data-v-2a4dfe94]{background:#00bc7e;border:2px solid #00bc7e}.button.solid .text-label[data-v-2a4dfe94]{color:#fff}.button.outline[data-v-2a4dfe94]{border:2px solid #1b2539}.button.outline .text-label[data-v-2a4dfe94]{color:#1b2539}.button.outline .icon path[data-v-2a4dfe94]{fill:inherit}.button.outline[data-v-2a4dfe94]:hover{border-color:inherit}.button.outline:hover .text-label[data-v-2a4dfe94]{color:inherit}.dark-mode .button.outline[data-v-2a4dfe94]{background:#131414;border-color:#bec6cf}.dark-mode .button.outline .text-label[data-v-2a4dfe94]{color:#bec6cf}.sync-alt[data-v-2a4dfe94]{-webkit-animation:spin-data-v-2a4dfe94 1s linear infinite;animation:spin-data-v-2a4dfe94 1s linear infinite}@-webkit-keyframes spin-data-v-2a4dfe94{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin-data-v-2a4dfe94{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""])},h8fA:function(a,t,e){"use strict";e("umRX")},iYAH:function(a,t,e){"use strict";e("lh0Q")},il2q:function(a,t,e){"use strict";e("v6S0")},j8qy:function(a,t,e){"use strict";var o={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},r=e("KHd+"),i=Object(r.a)(o,(function(){var a=this.$createElement,t=this._self._c||a;return this.isVisible?t("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);t.a=i.exports},lh0Q:function(a,t,e){var o=e("Jx8r");"string"==typeof o&&(o=[[a.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,r);o.locals&&(a.exports=o.locals)},qmhD:function(a,t,e){var o=e("z7Fm");"string"==typeof o&&(o=[[a.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,r);o.locals&&(a.exports=o.locals)},twCh:function(a,t,e){"use strict";e("qmhD")},uNcU:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".form[data-v-48058cda]{max-width:700px}.form.inline-form[data-v-48058cda]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-48058cda]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-48058cda]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-48058cda]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-48058cda]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-48058cda]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-48058cda]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-48058cda]:last-child{margin-bottom:0}.form.block-form .button[data-v-48058cda]{margin-top:50px}.form .inline-wrapper[data-v-48058cda]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-48058cda]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-48058cda]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-48058cda]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-48058cda]{display:flex}.single-line-form .submit-button[data-v-48058cda]{margin-left:20px}.error-message[data-v-48058cda]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-48058cda]{width:100%}input[type=email][data-v-48058cda],input[type=number][data-v-48058cda],input[type=password][data-v-48058cda],input[type=text][data-v-48058cda],textarea[data-v-48058cda]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-48058cda],input[type=number].is-error[data-v-48058cda],input[type=password].is-error[data-v-48058cda],input[type=text].is-error[data-v-48058cda],textarea.is-error[data-v-48058cda]{border-color:#fd397a}input[type=email][data-v-48058cda]::-moz-placeholder,input[type=number][data-v-48058cda]::-moz-placeholder,input[type=password][data-v-48058cda]::-moz-placeholder,input[type=text][data-v-48058cda]::-moz-placeholder,textarea[data-v-48058cda]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-48058cda]:-ms-input-placeholder,input[type=number][data-v-48058cda]:-ms-input-placeholder,input[type=password][data-v-48058cda]:-ms-input-placeholder,input[type=text][data-v-48058cda]:-ms-input-placeholder,textarea[data-v-48058cda]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-48058cda]::placeholder,input[type=number][data-v-48058cda]::placeholder,input[type=password][data-v-48058cda]::placeholder,input[type=text][data-v-48058cda]::placeholder,textarea[data-v-48058cda]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][disabled][data-v-48058cda],input[type=number][disabled][data-v-48058cda],input[type=password][disabled][data-v-48058cda],input[type=text][disabled][data-v-48058cda],textarea[disabled][data-v-48058cda]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}input[type=color][data-v-48058cda]{width:38px!important;height:40px;border:none;outline:none;background:none;min-width:0!important}.additional-link[data-v-48058cda]{font-size:1em;margin-top:50px;display:block}.additional-link a[data-v-48058cda],.additional-link b[data-v-48058cda]{cursor:pointer}.additional-link a[data-v-48058cda]:hover,.additional-link b[data-v-48058cda]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-48058cda]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-48058cda]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-48058cda],.form textarea[data-v-48058cda]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-48058cda]{display:block}.form.block-form .block-wrapper label[data-v-48058cda]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-48058cda]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-48058cda]{display:block}.form.inline-form .input-wrapper .error-message[data-v-48058cda]{position:relative;bottom:0}.form .button[data-v-48058cda]{padding:14px 32px}.single-line-form[data-v-48058cda]{display:block}.single-line-form .submit-button[data-v-48058cda]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-48058cda],input[type=number][data-v-48058cda],input[type=password][data-v-48058cda],input[type=text][data-v-48058cda],textarea[data-v-48058cda]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-48058cda]{display:block}}.dark-mode .form .input-help[data-v-48058cda]{color:#7d858c}.dark-mode .form.block-form .block-wrapper label[data-v-48058cda],.dark-mode .form .inline-wrapper .switch-label .input-label[data-v-48058cda]{color:#bec6cf}.dark-mode input[type=email][data-v-48058cda],.dark-mode input[type=number][data-v-48058cda],.dark-mode input[type=password][data-v-48058cda],.dark-mode input[type=text][data-v-48058cda],.dark-mode textarea[data-v-48058cda]{border-color:#1e2024;background:#1e2024;color:#bec6cf}.dark-mode input[type=email][data-v-48058cda]::-moz-placeholder,.dark-mode input[type=number][data-v-48058cda]::-moz-placeholder,.dark-mode input[type=password][data-v-48058cda]::-moz-placeholder,.dark-mode input[type=text][data-v-48058cda]::-moz-placeholder,.dark-mode textarea[data-v-48058cda]::-moz-placeholder{color:#7d858c}.dark-mode input[type=email][data-v-48058cda]:-ms-input-placeholder,.dark-mode input[type=number][data-v-48058cda]:-ms-input-placeholder,.dark-mode input[type=password][data-v-48058cda]:-ms-input-placeholder,.dark-mode input[type=text][data-v-48058cda]:-ms-input-placeholder,.dark-mode textarea[data-v-48058cda]:-ms-input-placeholder{color:#7d858c}.dark-mode input[type=email][data-v-48058cda]::placeholder,.dark-mode input[type=number][data-v-48058cda]::placeholder,.dark-mode input[type=password][data-v-48058cda]::placeholder,.dark-mode input[type=text][data-v-48058cda]::placeholder,.dark-mode textarea[data-v-48058cda]::placeholder{color:#7d858c}.dark-mode input[type=email][disabled][data-v-48058cda],.dark-mode input[type=number][disabled][data-v-48058cda],.dark-mode input[type=password][disabled][data-v-48058cda],.dark-mode input[type=text][disabled][data-v-48058cda],.dark-mode textarea[disabled][data-v-48058cda]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}.dark-mode .popup-wrapper input[type=email][data-v-48058cda],.dark-mode .popup-wrapper input[type=number][data-v-48058cda],.dark-mode .popup-wrapper input[type=password][data-v-48058cda],.dark-mode .popup-wrapper input[type=text][data-v-48058cda],.dark-mode .popup-wrapper textarea[data-v-48058cda]{background:#25272c}.auth-logo-text[data-v-48058cda]{font-size:1.375em;font-weight:800;margin-bottom:40px;display:block}.auth-form[data-v-48058cda]{text-align:center;max-width:600px;padding:25px 20px;display:table-cell;vertical-align:middle}.auth-form input[data-v-48058cda]{min-width:310px}.auth-form .additional-link a[data-v-48058cda]{font-weight:700;text-decoration:none}.auth-form .user-avatar[data-v-48058cda]{width:100px;height:100px;-o-object-fit:cover;object-fit:cover;margin-bottom:20px;border-radius:8px;box-shadow:0 10px 30px rgba(25,54,60,.2)}.auth-form .logo[data-v-48058cda]{width:120px;margin-bottom:20px}.auth-form h1[data-v-48058cda]{font-size:2.125em;font-weight:800;line-height:1.2;margin-bottom:2px;color:#1b2539}.auth-form h2[data-v-48058cda]{font-size:1.4375em;font-weight:500;margin-bottom:50px;color:#1b2539}.auth-form .block-form[data-v-48058cda]{margin-left:auto;margin-right:auto}@media only screen and (min-width:690px) and (max-width:960px){.auth-form[data-v-48058cda]{padding-left:20%;padding-right:20%}}@media only screen and (max-width:690px){.auth-form[data-v-48058cda]{width:100%}.auth-form h1[data-v-48058cda]{font-size:1.875em}.auth-form h2[data-v-48058cda]{font-size:1.3125em}}@media only screen and (max-width:490px){.auth-form h1[data-v-48058cda]{font-size:1.375em}.auth-form h2[data-v-48058cda]{font-size:1.125em}.auth-form input[data-v-48058cda]{min-width:0}.auth-form .additional-link[data-v-48058cda]{font-size:.9375em}}.dark-mode .auth-form .additional-link[data-v-48058cda],.dark-mode .auth-form h1[data-v-48058cda],.dark-mode .auth-form h2[data-v-48058cda]{color:#bec6cf}.content-headline[data-v-48058cda]{max-width:630px;margin-left:auto;margin-right:auto}.auth-form input[data-v-48058cda]{min-width:0}.duplicator .duplicator-add-button[data-v-48058cda]{width:100%}.duplicator .duplicator-item[data-v-48058cda]{box-shadow:0 1px 5px rgba(0,0,0,.12);border-radius:8px;background:#fff;padding:25px;margin:0 -25px 32px;position:relative}.duplicator .duplicator-item .duplicator-title[data-v-48058cda]{font-size:1.125em;margin-bottom:20px;display:block;font-weight:700}.duplicator .duplicator-item .delete-item[data-v-48058cda]{position:absolute;top:15px;right:15px;cursor:pointer}.duplicator .duplicator-item .delete-item:hover line[data-v-48058cda]{stroke:#00bc7e}.duplicator .duplicator-item input[data-v-48058cda],.duplicator .duplicator-item textarea[data-v-48058cda]{box-shadow:none;background:#fafafa}.form[data-v-48058cda]{max-width:580px;text-align:left}.submit-wrapper[data-v-48058cda]{text-align:right}.submit-wrapper .button[data-v-48058cda]{margin:58px 0 50px;width:100%}.title-icon[data-v-48058cda]{margin-bottom:10px;-webkit-animation:spinner-data-v-48058cda 5s linear infinite;animation:spinner-data-v-48058cda 5s linear infinite}.title-icon circle[data-v-48058cda],.title-icon path[data-v-48058cda]{color:inherit}@-webkit-keyframes spinner-data-v-48058cda{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spinner-data-v-48058cda{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.dark-mode .duplicator .duplicator-item[data-v-48058cda]{background:#1e2024}.dark-mode .duplicator .duplicator-item input[data-v-48058cda],.dark-mode .duplicator .duplicator-item textarea[data-v-48058cda]{background:#131414}",""])},umRX:function(a,t,e){var o=e("TxpJ");"string"==typeof o&&(o=[[a.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,r);o.locals&&(a.exports=o.locals)},v6S0:function(a,t,e){var o=e("uNcU");"string"==typeof o&&(o=[[a.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,r);o.locals&&(a.exports=o.locals)},z7Fm:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".info-box[data-v-384ec59e]{padding:20px;border-radius:8px;margin-bottom:32px;background:#f4f5f6;text-align:left}.info-box.error[data-v-384ec59e]{background:rgba(253,57,122,.1)}.info-box.error a[data-v-384ec59e],.info-box.error p[data-v-384ec59e]{color:#fd397a}.info-box.error a[data-v-384ec59e]{text-decoration:underline}.info-box p[data-v-384ec59e]{line-height:1.6;word-break:break-word;font-weight:600}.info-box p[data-v-384ec59e],.info-box p[data-v-384ec59e] a{font-size:15px}.info-box p[data-v-384ec59e] b{font-size:15px;font-weight:700}.info-box a[data-v-384ec59e],.info-box b[data-v-384ec59e]{font-weight:700}.info-box a[data-v-384ec59e]{font-size:.9375em;line-height:1.6}.info-box ul[data-v-384ec59e]{margin-top:15px}.info-box ul[data-v-384ec59e],.info-box ul li[data-v-384ec59e],.info-box ul li a[data-v-384ec59e]{display:block}@media only screen and (max-width:690px){.info-box[data-v-384ec59e]{padding:15px}}.dark-mode .info-box[data-v-384ec59e]{background:#1e2024}.dark-mode .info-box p[data-v-384ec59e],.dark-mode .info-box ul li[data-v-384ec59e]{color:#bec6cf}",""])}}]);
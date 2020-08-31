(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"6gqG":function(n,a,t){var e=t("ydEr");"string"==typeof e&&(e=[[n.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(e,i);e.locals&&(n.exports=e.locals)},"6zvB":function(n,a,t){var e=t("o8II");"string"==typeof e&&(e=[[n.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(e,i);e.locals&&(n.exports=e.locals)},"7OGm":function(n,a,t){"use strict";var e=t("6gqG");t.n(e).a},ASoH:function(n,a,t){"use strict";var e={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},i=(t("s/ZW"),t("KHd+")),o=Object(i.a)(e,(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("button",{staticClass:"button outline"},[t("span",{staticClass:"text-label"},[n._v(n._s(n.text))]),n._v(" "),n.loading?t("span",{staticClass:"icon"},[t("FontAwesomeIcon",{staticClass:"sync-alt",attrs:{icon:"sync-alt"}})],1):n._e(),n._v(" "),!n.loading&&n.icon?t("span",{staticClass:"icon"},[t("FontAwesomeIcon",{attrs:{icon:n.icon}})],1):n._e()])}),[],!1,null,"59e2dfc0",null);a.a=o.exports},G6zf:function(n,a,t){"use strict";t.r(a);var e=t("o0o1"),i=t.n(e),o=t("A5+z"),r=t("bDRN"),l=t("4TWA"),s=t("eZ9V"),d=t("KnjL"),c=t("j8qy"),p=t("ASoH"),u=t("CjXH"),m=t("TJPC"),b=t("L2JU"),v=t("vDqi"),f=t.n(v);function g(n,a,t,e,i,o,r){try{var l=n[o](r),s=l.value}catch(n){return void t(n)}l.done?a(s):Promise.resolve(s).then(e,i)}function h(n,a){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),t.push.apply(t,e)}return t}function x(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}var y={name:"BillingsDetail",components:{AuthContentWrapper:r.a,ValidationProvider:o.ValidationProvider,ValidationObserver:o.ValidationObserver,SettingsIcon:u.N,SelectInput:l.a,AuthContent:c.a,AuthButton:p.a,FormLabel:s.a,required:m.a,InfoBox:d.a},computed:function(n){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?h(Object(t),!0).forEach((function(a){x(n,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))}))}return n}({},Object(b.b)(["countries"])),data:function(){return{isLoading:!1,billingInformation:{billing_phone_number:"",billing_postal_code:"",billing_vat_number:"",billing_address:"",billing_country:"",billing_state:"",billing_city:"",billing_name:""}}},methods:{billingInformationSubmit:function(){var n,a=this;return(n=i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.$refs.billingInformation.validate();case 2:if(n.sent){n.next=5;break}return n.abrupt("return");case 5:a.isLoading=!0,f.a.post("/api/setup/stripe-billings",a.billingInformation).then((function(){a.$router.push({name:"SubscriptionPlans"})})).catch((function(n){})).finally((function(){a.isLoading=!1}));case 7:case"end":return n.stop()}}),n)})),function(){var a=this,t=arguments;return new Promise((function(e,i){var o=n.apply(a,t);function r(n){g(o,e,i,r,l,"next",n)}function l(n){g(o,e,i,r,l,"throw",n)}r(void 0)}))})()}},created:function(){this.$scrollTop()}},w=(t("QlRt"),t("KHd+")),_=Object(w.a)(y,(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("AuthContentWrapper",{ref:"auth"},[t("AuthContent",{attrs:{name:"database-credentials",visible:!0}},[t("div",{staticClass:"content-headline"},[t("settings-icon",{staticClass:"title-icon",attrs:{size:"40"}}),n._v(" "),t("h1",[n._v("Setup Wizard")]),n._v(" "),t("h2",[n._v("Set up your billing information.")])],1),n._v(" "),t("ValidationObserver",{ref:"billingInformation",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(a){return a.preventDefault(),n.billingInformationSubmit(a)}},scopedSlots:n._u([{key:"default",fn:function(a){a.invalid;return[t("FormLabel",[n._v("Company Information")]),n._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[n._v("Company Name:")]),n._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Name",rules:"required"},scopedSlots:n._u([{key:"default",fn:function(a){var e=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:n.billingInformation.billing_name,expression:"billingInformation.billing_name"}],class:{"is-error":e[0]},attrs:{placeholder:"Type your company name",type:"text"},domProps:{value:n.billingInformation.billing_name},on:{input:function(a){a.target.composing||n.$set(n.billingInformation,"billing_name",a.target.value)}}}),n._v(" "),e[0]?t("span",{staticClass:"error-message"},[n._v(n._s(e[0]))]):n._e()]}}],null,!0)})],1),n._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[n._v("VAT Number:")]),n._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Vat Number",rules:"required"},scopedSlots:n._u([{key:"default",fn:function(a){var e=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:n.billingInformation.billing_vat_number,expression:"billingInformation.billing_vat_number"}],class:{"is-error":e[0]},attrs:{placeholder:"Type your VAT number",type:"text"},domProps:{value:n.billingInformation.billing_vat_number},on:{input:function(a){a.target.composing||n.$set(n.billingInformation,"billing_vat_number",a.target.value)}}}),n._v(" "),e[0]?t("span",{staticClass:"error-message"},[n._v(n._s(e[0]))]):n._e()]}}],null,!0)})],1),n._v(" "),t("FormLabel",{staticClass:"mt-70"},[n._v("Billing Information")]),n._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[n._v("Billing Country:")]),n._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Country",rules:"required"},scopedSlots:n._u([{key:"default",fn:function(a){var e=a.errors;return[t("SelectInput",{attrs:{options:n.countries,placeholder:"Select your billing country",isError:e[0]},model:{value:n.billingInformation.billing_country,callback:function(a){n.$set(n.billingInformation,"billing_country",a)},expression:"billingInformation.billing_country"}}),n._v(" "),e[0]?t("span",{staticClass:"error-message"},[n._v(n._s(e[0]))]):n._e()]}}],null,!0)})],1),n._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[n._v("Billing Address:")]),n._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Address",rules:"required"},scopedSlots:n._u([{key:"default",fn:function(a){var e=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:n.billingInformation.billing_address,expression:"billingInformation.billing_address"}],class:{"is-error":e[0]},attrs:{placeholder:"Type your billing address",type:"text"},domProps:{value:n.billingInformation.billing_address},on:{input:function(a){a.target.composing||n.$set(n.billingInformation,"billing_address",a.target.value)}}}),n._v(" "),e[0]?t("span",{staticClass:"error-message"},[n._v(n._s(e[0]))]):n._e()]}}],null,!0)})],1),n._v(" "),t("div",{staticClass:"wrapper-inline"},[t("div",{staticClass:"block-wrapper"},[t("label",[n._v("Billing City:")]),n._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing City",rules:"required"},scopedSlots:n._u([{key:"default",fn:function(a){var e=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:n.billingInformation.billing_city,expression:"billingInformation.billing_city"}],class:{"is-error":e[0]},attrs:{placeholder:"Type your billing city",type:"text"},domProps:{value:n.billingInformation.billing_city},on:{input:function(a){a.target.composing||n.$set(n.billingInformation,"billing_city",a.target.value)}}}),n._v(" "),e[0]?t("span",{staticClass:"error-message"},[n._v(n._s(e[0]))]):n._e()]}}],null,!0)})],1),n._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[n._v("Billing Postal Code:")]),n._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Postal Code",rules:"required"},scopedSlots:n._u([{key:"default",fn:function(a){var e=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:n.billingInformation.billing_postal_code,expression:"billingInformation.billing_postal_code"}],class:{"is-error":e[0]},attrs:{placeholder:"Type your billing postal code",type:"text"},domProps:{value:n.billingInformation.billing_postal_code},on:{input:function(a){a.target.composing||n.$set(n.billingInformation,"billing_postal_code",a.target.value)}}}),n._v(" "),e[0]?t("span",{staticClass:"error-message"},[n._v(n._s(e[0]))]):n._e()]}}],null,!0)})],1)]),n._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[n._v("Billing State:")]),n._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing State",rules:"required"},scopedSlots:n._u([{key:"default",fn:function(a){var e=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:n.billingInformation.billing_state,expression:"billingInformation.billing_state"}],class:{"is-error":e[0]},attrs:{placeholder:"Type your billing state",type:"text"},domProps:{value:n.billingInformation.billing_state},on:{input:function(a){a.target.composing||n.$set(n.billingInformation,"billing_state",a.target.value)}}}),n._v(" "),e[0]?t("span",{staticClass:"error-message"},[n._v(n._s(e[0]))]):n._e()]}}],null,!0)})],1),n._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[n._v("Billing Phone Number (optional):")]),n._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Phone Number"},scopedSlots:n._u([{key:"default",fn:function(a){var e=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:n.billingInformation.billing_phone_number,expression:"billingInformation.billing_phone_number"}],class:{"is-error":e[0]},attrs:{placeholder:"Type your billing phone number",type:"text"},domProps:{value:n.billingInformation.billing_phone_number},on:{input:function(a){a.target.composing||n.$set(n.billingInformation,"billing_phone_number",a.target.value)}}}),n._v(" "),e[0]?t("span",{staticClass:"error-message"},[n._v(n._s(e[0]))]):n._e()]}}],null,!0)})],1),n._v(" "),t("div",{staticClass:"submit-wrapper"},[t("AuthButton",{attrs:{icon:"chevron-right",text:"Save and Create Plans",loading:n.isLoading,disabled:n.isLoading}})],1)]}}])})],1)],1)}),[],!1,null,"23c357ae",null);a.default=_.exports},GwTe:function(n,a,t){(n.exports=t("I1BE")(!1)).push([n.i,".button[data-v-59e2dfc0] {\n  cursor: pointer;\n  border-radius: 8px;\n  text-decoration: none;\n  padding: 12px 32px;\n  display: inline-block;\n  margin-left: 15px;\n  margin-right: 15px;\n  white-space: nowrap;\n  transition: 150ms all ease;\n  background: transparent;\n}\n.button .text-label[data-v-59e2dfc0] {\n  transition: 150ms all ease;\n  font-size: 1.0625em;\n  font-weight: 800;\n  line-height: 0;\n}\n.button .icon[data-v-59e2dfc0] {\n  margin-left: 12px;\n  font-size: 1em;\n}\n.button.solid[data-v-59e2dfc0] {\n  background: #00BC7E;\n  border: 2px solid #00BC7E;\n}\n.button.solid .text-label[data-v-59e2dfc0] {\n  color: white;\n}\n.button.outline[data-v-59e2dfc0] {\n  border: 2px solid #1B2539;\n}\n.button.outline .text-label[data-v-59e2dfc0] {\n  color: #1B2539;\n}\n.button.outline .icon path[data-v-59e2dfc0] {\n  fill: #00BC7E;\n}\n.button.outline[data-v-59e2dfc0]:hover {\n  border-color: #00BC7E;\n}\n.button.outline:hover .text-label[data-v-59e2dfc0] {\n  color: #00BC7E;\n}\n@media (prefers-color-scheme: dark) {\n.button.outline[data-v-59e2dfc0] {\n    background: #111314;\n    border-color: #bec6cf;\n}\n.button.outline .text-label[data-v-59e2dfc0] {\n    color: #bec6cf;\n}\n}\n.sync-alt[data-v-59e2dfc0] {\n  -webkit-animation: spin-data-v-59e2dfc0 1s linear infinite;\n          animation: spin-data-v-59e2dfc0 1s linear infinite;\n}\n@-webkit-keyframes spin-data-v-59e2dfc0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spin-data-v-59e2dfc0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n",""])},Idvm:function(n,a,t){var e=t("lig4");"string"==typeof e&&(e=[[n.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(e,i);e.locals&&(n.exports=e.locals)},Jx8r:function(n,a,t){(n.exports=t("I1BE")(!1)).push([n.i,"#auth[data-v-31af8372] {\n  height: 100%;\n  width: 100%;\n  display: table;\n}\n",""])},KnjL:function(n,a,t){"use strict";var e={name:"InfoBox",props:["type"]},i=(t("7OGm"),t("KHd+")),o=Object(i.a)(e,(function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"bf43be5e",null);a.a=o.exports},NbAf:function(n,a,t){var e=t("GwTe");"string"==typeof e&&(e=[[n.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(e,i);e.locals&&(n.exports=e.locals)},QlRt:function(n,a,t){"use strict";var e=t("6zvB");t.n(e).a},Xk6H:function(n,a,t){"use strict";var e=t("Idvm");t.n(e).a},bDRN:function(n,a,t){"use strict";var e={name:"AuthContentWrapper"},i=(t("iYAH"),t("KHd+")),o=Object(i.a)(e,(function(){var n=this.$createElement;return(this._self._c||n)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);a.a=o.exports},eZ9V:function(n,a,t){"use strict";var e={name:"FormLabel",components:{Edit2Icon:t("CjXH").m}},i=(t("Xk6H"),t("KHd+")),o=Object(i.a)(e,(function(){var n=this.$createElement,a=this._self._c||n;return a("div",{staticClass:"form-label"},[a("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),a("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);a.a=o.exports},iYAH:function(n,a,t){"use strict";var e=t("lh0Q");t.n(e).a},j8qy:function(n,a,t){"use strict";var e={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},i=t("KHd+"),o=Object(i.a)(e,(function(){var n=this.$createElement,a=this._self._c||n;return this.isVisible?a("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);a.a=o.exports},lh0Q:function(n,a,t){var e=t("Jx8r");"string"==typeof e&&(e=[[n.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(e,i);e.locals&&(n.exports=e.locals)},lig4:function(n,a,t){(n.exports=t("I1BE")(!1)).push([n.i,".form-label[data-v-c1157a8e] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-label .icon[data-v-c1157a8e] {\n  margin-right: 10px;\n}\n.form-label .icon path[data-v-c1157a8e] {\n  stroke: #00BC7E;\n}\n.form-label .label[data-v-c1157a8e] {\n  font-size: 1.125em;\n  font-weight: 700;\n}\n@media (prefers-color-scheme: dark) {\n.form-label .label[data-v-c1157a8e] {\n    color: #bec6cf;\n}\n}\n",""])},o8II:function(n,a,t){(n.exports=t("I1BE")(!1)).push([n.i,'.form[data-v-23c357ae] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-23c357ae] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-23c357ae] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-23c357ae] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-23c357ae] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-23c357ae] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-23c357ae] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-23c357ae] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-23c357ae]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-23c357ae] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-23c357ae] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-23c357ae] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-23c357ae] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-23c357ae] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-23c357ae] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-23c357ae] {\n  margin-left: 20px;\n}\n.error-message[data-v-23c357ae] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-23c357ae] {\n  width: 100%;\n}\ntextarea[data-v-23c357ae],\ninput[type="password"][data-v-23c357ae],\ninput[type="text"][data-v-23c357ae],\ninput[type="number"][data-v-23c357ae],\ninput[type="email"][data-v-23c357ae] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-23c357ae],\ninput[type="password"].is-error[data-v-23c357ae],\ninput[type="text"].is-error[data-v-23c357ae],\ninput[type="number"].is-error[data-v-23c357ae],\ninput[type="email"].is-error[data-v-23c357ae] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-23c357ae]::-webkit-input-placeholder, input[type="password"][data-v-23c357ae]::-webkit-input-placeholder, input[type="text"][data-v-23c357ae]::-webkit-input-placeholder, input[type="number"][data-v-23c357ae]::-webkit-input-placeholder, input[type="email"][data-v-23c357ae]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-23c357ae]::-moz-placeholder, input[type="password"][data-v-23c357ae]::-moz-placeholder, input[type="text"][data-v-23c357ae]::-moz-placeholder, input[type="number"][data-v-23c357ae]::-moz-placeholder, input[type="email"][data-v-23c357ae]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-23c357ae]:-ms-input-placeholder, input[type="password"][data-v-23c357ae]:-ms-input-placeholder, input[type="text"][data-v-23c357ae]:-ms-input-placeholder, input[type="number"][data-v-23c357ae]:-ms-input-placeholder, input[type="email"][data-v-23c357ae]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-23c357ae]::-ms-input-placeholder, input[type="password"][data-v-23c357ae]::-ms-input-placeholder, input[type="text"][data-v-23c357ae]::-ms-input-placeholder, input[type="number"][data-v-23c357ae]::-ms-input-placeholder, input[type="email"][data-v-23c357ae]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-23c357ae]::placeholder,\ninput[type="password"][data-v-23c357ae]::placeholder,\ninput[type="text"][data-v-23c357ae]::placeholder,\ninput[type="number"][data-v-23c357ae]::placeholder,\ninput[type="email"][data-v-23c357ae]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-23c357ae]:focus,\ninput[type="password"][data-v-23c357ae]:focus,\ninput[type="text"][data-v-23c357ae]:focus,\ninput[type="number"][data-v-23c357ae]:focus,\ninput[type="email"][data-v-23c357ae]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-23c357ae],\ninput[type="password"][disabled][data-v-23c357ae],\ninput[type="text"][disabled][data-v-23c357ae],\ninput[type="number"][disabled][data-v-23c357ae],\ninput[type="email"][disabled][data-v-23c357ae] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-23c357ae] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-23c357ae], .additional-link a[data-v-23c357ae] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-23c357ae]:hover, .additional-link a[data-v-23c357ae]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-23c357ae] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-23c357ae] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-23c357ae], .form textarea[data-v-23c357ae] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-23c357ae] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-23c357ae] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-23c357ae] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-23c357ae] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-23c357ae] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-23c357ae] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-23c357ae] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-23c357ae] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-23c357ae],\n  input[type="password"][data-v-23c357ae],\n  input[type="number"][data-v-23c357ae],\n  input[type="text"][data-v-23c357ae],\n  input[type="email"][data-v-23c357ae] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-23c357ae] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-23c357ae] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-23c357ae] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-23c357ae] {\n    color: #bec6cf;\n}\ntextarea[data-v-23c357ae],\n  input[type="password"][data-v-23c357ae],\n  input[type="text"][data-v-23c357ae],\n  input[type="number"][data-v-23c357ae],\n  input[type="email"][data-v-23c357ae] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-23c357ae]::-webkit-input-placeholder, input[type="password"][data-v-23c357ae]::-webkit-input-placeholder, input[type="text"][data-v-23c357ae]::-webkit-input-placeholder, input[type="number"][data-v-23c357ae]::-webkit-input-placeholder, input[type="email"][data-v-23c357ae]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-23c357ae]::-moz-placeholder, input[type="password"][data-v-23c357ae]::-moz-placeholder, input[type="text"][data-v-23c357ae]::-moz-placeholder, input[type="number"][data-v-23c357ae]::-moz-placeholder, input[type="email"][data-v-23c357ae]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-23c357ae]:-ms-input-placeholder, input[type="password"][data-v-23c357ae]:-ms-input-placeholder, input[type="text"][data-v-23c357ae]:-ms-input-placeholder, input[type="number"][data-v-23c357ae]:-ms-input-placeholder, input[type="email"][data-v-23c357ae]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-23c357ae]::-ms-input-placeholder, input[type="password"][data-v-23c357ae]::-ms-input-placeholder, input[type="text"][data-v-23c357ae]::-ms-input-placeholder, input[type="number"][data-v-23c357ae]::-ms-input-placeholder, input[type="email"][data-v-23c357ae]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-23c357ae]::placeholder,\n  input[type="password"][data-v-23c357ae]::placeholder,\n  input[type="text"][data-v-23c357ae]::placeholder,\n  input[type="number"][data-v-23c357ae]::placeholder,\n  input[type="email"][data-v-23c357ae]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-23c357ae],\n  input[type="password"][disabled][data-v-23c357ae],\n  input[type="text"][disabled][data-v-23c357ae],\n  input[type="number"][disabled][data-v-23c357ae],\n  input[type="email"][disabled][data-v-23c357ae] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.auth-logo-text[data-v-23c357ae] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-23c357ae] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-23c357ae] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-23c357ae] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-23c357ae] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-23c357ae] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-23c357ae] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-23c357ae] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-23c357ae] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-23c357ae] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-23c357ae] {\n    width: 100%;\n}\n.auth-form h1[data-v-23c357ae] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-23c357ae] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-23c357ae] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-23c357ae] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-23c357ae] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-23c357ae] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-23c357ae], .auth-form h2[data-v-23c357ae], .auth-form .additional-link[data-v-23c357ae] {\n    color: #bec6cf;\n}\n}\n.content-headline[data-v-23c357ae] {\n  max-width: 630px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.auth-form input[data-v-23c357ae] {\n  min-width: initial;\n}\n.duplicator .duplicator-add-button[data-v-23c357ae] {\n  width: 100%;\n}\n.duplicator .duplicator-item[data-v-23c357ae] {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  background: white;\n  padding: 25px;\n  margin: 0 -25px 32px;\n  position: relative;\n}\n.duplicator .duplicator-item .duplicator-title[data-v-23c357ae] {\n  font-size: 1.125em;\n  margin-bottom: 20px;\n  display: block;\n  font-weight: 700;\n}\n.duplicator .duplicator-item .delete-item[data-v-23c357ae] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n}\n.duplicator .duplicator-item .delete-item:hover line[data-v-23c357ae] {\n  stroke: #00BC7E;\n}\n.duplicator .duplicator-item input[data-v-23c357ae],\n.duplicator .duplicator-item textarea[data-v-23c357ae] {\n  box-shadow: none;\n  background: #FAFAFA;\n}\n.form[data-v-23c357ae] {\n  max-width: 580px;\n  text-align: left;\n}\n.submit-wrapper[data-v-23c357ae] {\n  text-align: right;\n}\n.submit-wrapper .button[data-v-23c357ae] {\n  margin: 58px 0 50px 0;\n  width: 100%;\n}\n.title-icon[data-v-23c357ae] {\n  margin-bottom: 10px;\n  -webkit-animation: spinner-data-v-23c357ae 5s linear infinite;\n          animation: spinner-data-v-23c357ae 5s linear infinite;\n}\n.title-icon circle[data-v-23c357ae], .title-icon path[data-v-23c357ae] {\n  stroke: #00BC7E;\n}\n@-webkit-keyframes spinner-data-v-23c357ae {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spinner-data-v-23c357ae {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@media (prefers-color-scheme: dark) {\n.duplicator .duplicator-item[data-v-23c357ae] {\n    background: #1e2024;\n}\n.duplicator .duplicator-item input[data-v-23c357ae],\n  .duplicator .duplicator-item textarea[data-v-23c357ae] {\n    background: #111314;\n}\n}\n',""])},"s/ZW":function(n,a,t){"use strict";var e=t("NbAf");t.n(e).a},ydEr:function(n,a,t){(n.exports=t("I1BE")(!1)).push([n.i,".info-box[data-v-bf43be5e] {\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 32px;\n  background: #f4f5f6;\n  text-align: left;\n}\n.info-box.error[data-v-bf43be5e] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.info-box.error p[data-v-bf43be5e], .info-box.error a[data-v-bf43be5e] {\n  color: #fd397a;\n}\n.info-box.error a[data-v-bf43be5e] {\n  text-decoration: underline;\n}\n.info-box p[data-v-bf43be5e] {\n  font-size: 0.9375em;\n  line-height: 1.6;\n  word-break: break-word;\n  font-weight: 600;\n}\n.info-box p[data-v-bf43be5e] a {\n  color: #00BC7E;\n}\n.info-box b[data-v-bf43be5e] {\n  font-weight: 700;\n  color: #00BC7E;\n}\n.info-box a[data-v-bf43be5e] {\n  color: #00BC7E;\n  font-weight: 700;\n  font-size: 0.9375em;\n  line-height: 1.6;\n}\n.info-box ul[data-v-bf43be5e] {\n  margin-top: 15px;\n  display: block;\n}\n.info-box ul li[data-v-bf43be5e] {\n  display: block;\n}\n.info-box ul li a[data-v-bf43be5e] {\n  display: block;\n}\n@media only screen and (max-width: 690px) {\n.info-box[data-v-bf43be5e] {\n    padding: 15px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.info-box[data-v-bf43be5e] {\n    background: #1e2024;\n}\n.info-box p[data-v-bf43be5e] {\n    color: #bec6cf;\n}\n.info-box ul li[data-v-bf43be5e] {\n    color: #bec6cf;\n}\n}\n",""])}}]);
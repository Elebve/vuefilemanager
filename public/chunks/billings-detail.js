(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"0OA4":function(a,t,e){var i=e("8K6n");"string"==typeof i&&(i=[[a.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(a.exports=i.locals)},"1L+q":function(a,t,e){"use strict";e("4EzG")},"4EzG":function(a,t,e){var i=e("jexE");"string"==typeof i&&(i=[[a.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(a.exports=i.locals)},"4TWA":function(a,t,e){"use strict";var i=e("CjXH"),o=e("LvDl"),n={name:"SelectInput",props:["placeholder","options","isError","default"],components:{Edit2Icon:i.u,UserIcon:i.jb,ChevronDownIcon:i.g},watch:{query:Object(o.debounce)((function(a){this.searchedResults=Object(o.omitBy)(this.options,(function(t){return!t.label.toLowerCase().includes(a.toLowerCase())}))}),200)},computed:{isSearching:function(){return this.searchedResults&&""!==this.query},optionList:function(){return this.isSearching?this.searchedResults:this.options}},data:function(){return{searchedResults:void 0,selected:void 0,isOpen:!1,query:""}},methods:{selectOption:function(a){this.$emit("input",a.value),this.selected=a,this.isOpen=!1},openMenu:function(){var a=this;this.isOpen=!this.isOpen,this.isOpen&&this.$nextTick((function(){return a.$refs.search.focus()}))}},created:function(){var a=this;this.default&&(this.selected=this.options.find((function(t){return t.value===a.default})))}},r=(e("7y9c"),e("KHd+")),l=Object(r.a)(n,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"select"},[e("div",{staticClass:"input-area",class:{"is-active":a.isOpen,"is-error":a.isError},on:{click:a.openMenu}},[a.selected?e("div",{staticClass:"selected"},[a.selected.icon?e("div",{staticClass:"option-icon"},["user"===a.selected.icon?e("user-icon",{attrs:{size:"14"}}):a._e(),a._v(" "),"user-edit"===a.selected.icon?e("edit2-icon",{attrs:{size:"14"}}):a._e()],1):a._e(),a._v(" "),e("span",{staticClass:"option-value"},[a._v(a._s(a.selected.label))])]):a._e(),a._v(" "),a.selected?a._e():e("div",{staticClass:"not-selected"},[e("span",{staticClass:"option-value placehoder"},[a._v(a._s(a.placeholder))])]),a._v(" "),e("chevron-down-icon",{staticClass:"chevron",attrs:{size:"19"}})],1),a._v(" "),e("transition",{attrs:{name:"slide-in"}},[a.isOpen?e("div",{staticClass:"input-options"},[a.options.length>5?e("div",{staticClass:"select-search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.query,expression:"query"}],ref:"search",staticClass:"search-input focus-border-theme",attrs:{type:"text",placeholder:a.$t("select_search_placeholder")},domProps:{value:a.query},on:{input:function(t){t.target.composing||(a.query=t.target.value)}}})]):a._e(),a._v(" "),e("ul",{staticClass:"option-list"},a._l(a.optionList,(function(t,i){return e("li",{key:i,staticClass:"option-item",on:{click:function(e){return a.selectOption(t)}}},[t.icon?e("div",{staticClass:"option-icon"},["user"===t.icon?e("user-icon",{attrs:{size:"14"}}):a._e(),a._v(" "),"user-edit"===t.icon?e("edit2-icon",{attrs:{size:"14"}}):a._e()],1):a._e(),a._v(" "),e("span",{staticClass:"option-value"},[a._v(a._s(t.label))])])})),0)]):a._e()])],1)}),[],!1,null,"5fb2ed60",null);t.a=l.exports},"5b+A":function(a,t,e){"use strict";e("vRyx")},"7y9c":function(a,t,e){"use strict";e("0OA4")},"8K6n":function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".select[data-v-5fb2ed60]{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.select-search[data-v-5fb2ed60]{background:#fff;position:sticky;top:0;padding:13px}.select-search .search-input[data-v-5fb2ed60]{border:1px solid transparent;background:#f4f5f6;transition:all .15s ease;font-size:.875em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%}.input-options[data-v-5fb2ed60]{box-shadow:0 5px 15px rgba(0,0,0,.12);background:#fff;border-radius:8px;position:absolute;overflow:hidden;top:65px;left:0;right:0;z-index:9;max-height:295px;overflow-y:auto}.input-options .option-item[data-v-5fb2ed60]{padding:13px 20px;display:block;cursor:pointer}.input-options .option-item[data-v-5fb2ed60]:hover{color:#00bc7e;background:#f4f5f6}.input-options .option-item[data-v-5fb2ed60]:last-child{border-bottom:none}.input-area[data-v-5fb2ed60]{border:1px solid transparent;justify-content:space-between;box-shadow:0 1px 5px rgba(0,0,0,.12);align-items:center;border-radius:8px;padding:13px 20px;display:flex;outline:0;width:100%;cursor:pointer}.input-area[data-v-5fb2ed60],.input-area .chevron[data-v-5fb2ed60]{transition:all .15s ease}.input-area.is-active .chevron[data-v-5fb2ed60]{transform:rotate(180deg)}.input-area.is-error[data-v-5fb2ed60]{border-color:#fd397a;box-shadow:0 0 7px rgba(253,57,122,.3)}.option-icon[data-v-5fb2ed60]{width:20px;display:inline-block;font-size:.625em}.option-icon svg[data-v-5fb2ed60]{margin-top:-4px;vertical-align:middle}.option-value[data-v-5fb2ed60]{font-size:.875em;font-weight:700;width:100%;vertical-align:middle}.option-value.placehoder[data-v-5fb2ed60]{color:rgba(27,37,57,.5)}.slide-in-enter-active[data-v-5fb2ed60]{transition:all .15s ease}.slide-in-enter[data-v-5fb2ed60]{opacity:0;transform:translateY(-50px)}@media (prefers-color-scheme:dark){.select-search[data-v-5fb2ed60]{background:#1e2024}.select-search .search-input[data-v-5fb2ed60]{background:#131414}.input-area[data-v-5fb2ed60]{background:#1e2024;border-color:#1e2024}.popup-wrapper .input-area[data-v-5fb2ed60]{background:#25272c}.input-options[data-v-5fb2ed60]{background:#1e2024}.input-options .option-item[data-v-5fb2ed60]{border-bottom:none}.input-options .option-item[data-v-5fb2ed60]:hover{background:#2a2c32}.input-options .option-item:hover .option-icon circle[data-v-5fb2ed60],.input-options .option-item:hover .option-icon path[data-v-5fb2ed60]{color:inherit}.input-options .option-item[data-v-5fb2ed60]:last-child{border-bottom:none}.option-value.placehoder[data-v-5fb2ed60]{color:#7d858c}}",""])},"9kSd":function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".form[data-v-7eaabd11]{max-width:700px}.form.inline-form[data-v-7eaabd11]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-7eaabd11]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-7eaabd11]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-7eaabd11]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-7eaabd11]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-7eaabd11]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-7eaabd11]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-7eaabd11]:last-child{margin-bottom:0}.form.block-form .button[data-v-7eaabd11]{margin-top:50px}.form .inline-wrapper[data-v-7eaabd11]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-7eaabd11]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-7eaabd11]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-7eaabd11]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-7eaabd11]{display:flex}.single-line-form .submit-button[data-v-7eaabd11]{margin-left:20px}.error-message[data-v-7eaabd11]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-7eaabd11]{width:100%}input[type=email][data-v-7eaabd11],input[type=number][data-v-7eaabd11],input[type=password][data-v-7eaabd11],input[type=text][data-v-7eaabd11],textarea[data-v-7eaabd11]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-7eaabd11],input[type=number].is-error[data-v-7eaabd11],input[type=password].is-error[data-v-7eaabd11],input[type=text].is-error[data-v-7eaabd11],textarea.is-error[data-v-7eaabd11]{border-color:#fd397a}input[type=email][data-v-7eaabd11]::-moz-placeholder,input[type=number][data-v-7eaabd11]::-moz-placeholder,input[type=password][data-v-7eaabd11]::-moz-placeholder,input[type=text][data-v-7eaabd11]::-moz-placeholder,textarea[data-v-7eaabd11]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-7eaabd11]:-ms-input-placeholder,input[type=number][data-v-7eaabd11]:-ms-input-placeholder,input[type=password][data-v-7eaabd11]:-ms-input-placeholder,input[type=text][data-v-7eaabd11]:-ms-input-placeholder,textarea[data-v-7eaabd11]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-7eaabd11]::placeholder,input[type=number][data-v-7eaabd11]::placeholder,input[type=password][data-v-7eaabd11]::placeholder,input[type=text][data-v-7eaabd11]::placeholder,textarea[data-v-7eaabd11]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][disabled][data-v-7eaabd11],input[type=number][disabled][data-v-7eaabd11],input[type=password][disabled][data-v-7eaabd11],input[type=text][disabled][data-v-7eaabd11],textarea[disabled][data-v-7eaabd11]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}input[type=color][data-v-7eaabd11]{width:38px!important;height:40px;border:none;outline:none;background:none;min-width:0!important}.additional-link[data-v-7eaabd11]{font-size:1em;margin-top:50px;display:block}.additional-link a[data-v-7eaabd11],.additional-link b[data-v-7eaabd11]{cursor:pointer}.additional-link a[data-v-7eaabd11]:hover,.additional-link b[data-v-7eaabd11]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-7eaabd11]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-7eaabd11]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-7eaabd11],.form textarea[data-v-7eaabd11]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-7eaabd11]{display:block}.form.block-form .block-wrapper label[data-v-7eaabd11]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-7eaabd11]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-7eaabd11]{display:block}.form.inline-form .input-wrapper .error-message[data-v-7eaabd11]{position:relative;bottom:0}.form .button[data-v-7eaabd11]{padding:14px 32px}.single-line-form[data-v-7eaabd11]{display:block}.single-line-form .submit-button[data-v-7eaabd11]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-7eaabd11],input[type=number][data-v-7eaabd11],input[type=password][data-v-7eaabd11],input[type=text][data-v-7eaabd11],textarea[data-v-7eaabd11]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-7eaabd11]{display:block}}@media (prefers-color-scheme:dark){.form .input-help[data-v-7eaabd11]{color:#7d858c}.form.block-form .block-wrapper label[data-v-7eaabd11],.form .inline-wrapper .switch-label .input-label[data-v-7eaabd11]{color:#bec6cf}input[type=email][data-v-7eaabd11],input[type=number][data-v-7eaabd11],input[type=password][data-v-7eaabd11],input[type=text][data-v-7eaabd11],textarea[data-v-7eaabd11]{border-color:#1e2024;background:#1e2024;color:#bec6cf}input[type=email][data-v-7eaabd11]::-moz-placeholder,input[type=number][data-v-7eaabd11]::-moz-placeholder,input[type=password][data-v-7eaabd11]::-moz-placeholder,input[type=text][data-v-7eaabd11]::-moz-placeholder,textarea[data-v-7eaabd11]::-moz-placeholder{color:#7d858c}input[type=email][data-v-7eaabd11]:-ms-input-placeholder,input[type=number][data-v-7eaabd11]:-ms-input-placeholder,input[type=password][data-v-7eaabd11]:-ms-input-placeholder,input[type=text][data-v-7eaabd11]:-ms-input-placeholder,textarea[data-v-7eaabd11]:-ms-input-placeholder{color:#7d858c}input[type=email][data-v-7eaabd11]::placeholder,input[type=number][data-v-7eaabd11]::placeholder,input[type=password][data-v-7eaabd11]::placeholder,input[type=text][data-v-7eaabd11]::placeholder,textarea[data-v-7eaabd11]::placeholder{color:#7d858c}input[type=email][disabled][data-v-7eaabd11],input[type=number][disabled][data-v-7eaabd11],input[type=password][disabled][data-v-7eaabd11],input[type=text][disabled][data-v-7eaabd11],textarea[disabled][data-v-7eaabd11]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}.popup-wrapper input[type=email][data-v-7eaabd11],.popup-wrapper input[type=number][data-v-7eaabd11],.popup-wrapper input[type=password][data-v-7eaabd11],.popup-wrapper input[type=text][data-v-7eaabd11],.popup-wrapper textarea[data-v-7eaabd11]{background:#25272c}}.auth-logo-text[data-v-7eaabd11]{font-size:1.375em;font-weight:800;margin-bottom:40px;display:block}.auth-form[data-v-7eaabd11]{text-align:center;max-width:600px;padding:25px 20px;display:table-cell;vertical-align:middle}.auth-form input[data-v-7eaabd11]{min-width:310px}.auth-form .additional-link a[data-v-7eaabd11]{font-weight:700;text-decoration:none}.auth-form .user-avatar[data-v-7eaabd11]{width:100px;height:100px;-o-object-fit:cover;object-fit:cover;margin-bottom:20px;border-radius:8px;box-shadow:0 10px 30px rgba(25,54,60,.2)}.auth-form .logo[data-v-7eaabd11]{width:120px;margin-bottom:20px}.auth-form h1[data-v-7eaabd11]{font-size:2.125em;font-weight:800;line-height:1.2;margin-bottom:2px;color:#1b2539}.auth-form h2[data-v-7eaabd11]{font-size:1.4375em;font-weight:500;margin-bottom:50px;color:#1b2539}.auth-form .block-form[data-v-7eaabd11]{margin-left:auto;margin-right:auto}@media only screen and (min-width:690px) and (max-width:960px){.auth-form[data-v-7eaabd11]{padding-left:20%;padding-right:20%}}@media only screen and (max-width:690px){.auth-form[data-v-7eaabd11]{width:100%}.auth-form h1[data-v-7eaabd11]{font-size:1.875em}.auth-form h2[data-v-7eaabd11]{font-size:1.3125em}}@media only screen and (max-width:490px){.auth-form h1[data-v-7eaabd11]{font-size:1.375em}.auth-form h2[data-v-7eaabd11]{font-size:1.125em}.auth-form input[data-v-7eaabd11]{min-width:0}.auth-form .additional-link[data-v-7eaabd11]{font-size:.9375em}}@media (prefers-color-scheme:dark){.auth-form .additional-link[data-v-7eaabd11],.auth-form h1[data-v-7eaabd11],.auth-form h2[data-v-7eaabd11]{color:#bec6cf}}.content-headline[data-v-7eaabd11]{max-width:630px;margin-left:auto;margin-right:auto}.auth-form input[data-v-7eaabd11]{min-width:0}.duplicator .duplicator-add-button[data-v-7eaabd11]{width:100%}.duplicator .duplicator-item[data-v-7eaabd11]{box-shadow:0 1px 5px rgba(0,0,0,.12);border-radius:8px;background:#fff;padding:25px;margin:0 -25px 32px;position:relative}.duplicator .duplicator-item .duplicator-title[data-v-7eaabd11]{font-size:1.125em;margin-bottom:20px;display:block;font-weight:700}.duplicator .duplicator-item .delete-item[data-v-7eaabd11]{position:absolute;top:15px;right:15px;cursor:pointer}.duplicator .duplicator-item .delete-item:hover line[data-v-7eaabd11]{stroke:#00bc7e}.duplicator .duplicator-item input[data-v-7eaabd11],.duplicator .duplicator-item textarea[data-v-7eaabd11]{box-shadow:none;background:#fafafa}.form[data-v-7eaabd11]{max-width:580px;text-align:left}.submit-wrapper[data-v-7eaabd11]{text-align:right}.submit-wrapper .button[data-v-7eaabd11]{margin:58px 0 50px;width:100%}.title-icon[data-v-7eaabd11]{margin-bottom:10px;-webkit-animation:spinner-data-v-7eaabd11 5s linear infinite;animation:spinner-data-v-7eaabd11 5s linear infinite}.title-icon circle[data-v-7eaabd11],.title-icon path[data-v-7eaabd11]{color:inherit}@-webkit-keyframes spinner-data-v-7eaabd11{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spinner-data-v-7eaabd11{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media (prefers-color-scheme:dark){.duplicator .duplicator-item[data-v-7eaabd11]{background:#1e2024}.duplicator .duplicator-item input[data-v-7eaabd11],.duplicator .duplicator-item textarea[data-v-7eaabd11]{background:#131414}}",""])},ASoH:function(a,t,e){"use strict";var i={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=(e("RLEU"),e("KHd+")),n=Object(o.a)(i,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("button",{staticClass:"button outline hover-text-theme hover-border-theme"},[e("span",{staticClass:"text-label"},[a._v(a._s(a.text))]),a._v(" "),a.loading?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{staticClass:"sync-alt svg-color-theme",attrs:{icon:"sync-alt"}})],1):a._e(),a._v(" "),!a.loading&&a.icon?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{staticClass:"svg-color-theme",attrs:{icon:a.icon}})],1):a._e()])}),[],!1,null,"16e9ad58",null);t.a=n.exports},G6zf:function(a,t,e){"use strict";e.r(t);var i=e("o0o1"),o=e.n(i),n=e("A5+z"),r=e("bDRN"),l=e("4TWA"),d=e("eZ9V"),s=e("KnjL"),p=e("j8qy"),c=e("ASoH"),u=e("CjXH"),b=e("TJPC"),m=e("L2JU"),v=e("vDqi"),f=e.n(v);function g(a,t,e,i,o,n,r){try{var l=a[n](r),d=l.value}catch(a){return void e(a)}l.done?t(d):Promise.resolve(d).then(i,o)}function h(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,i)}return e}function x(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var y={name:"BillingsDetail",components:{AuthContentWrapper:r.a,ValidationProvider:n.ValidationProvider,ValidationObserver:n.ValidationObserver,SettingsIcon:u.bb,SelectInput:l.a,AuthContent:p.a,AuthButton:c.a,FormLabel:d.a,required:b.a,InfoBox:s.a},computed:function(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?h(Object(e),!0).forEach((function(t){x(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}({},Object(m.b)(["countries"])),data:function(){return{isLoading:!1,billingInformation:{billing_phone_number:"",billing_postal_code:"",billing_vat_number:"",billing_address:"",billing_country:"",billing_state:"",billing_city:"",billing_name:""}}},methods:{billingInformationSubmit:function(){var a,t=this;return(a=o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$refs.billingInformation.validate();case 2:if(a.sent){a.next=5;break}return a.abrupt("return");case 5:t.isLoading=!0,f.a.post("/api/setup/stripe-billings",t.billingInformation).then((function(){t.$router.push({name:"SubscriptionPlans"})})).catch((function(a){})).finally((function(){t.isLoading=!1}));case 7:case"end":return a.stop()}}),a)})),function(){var t=this,e=arguments;return new Promise((function(i,o){var n=a.apply(t,e);function r(a){g(n,i,o,r,l,"next",a)}function l(a){g(n,i,o,r,l,"throw",a)}r(void 0)}))})()}},created:function(){this.$scrollTop()}},_=(e("5b+A"),e("KHd+")),w=Object(_.a)(y,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("AuthContentWrapper",{ref:"auth"},[e("AuthContent",{attrs:{name:"database-credentials",visible:!0}},[e("div",{staticClass:"content-headline"},[e("settings-icon",{staticClass:"title-icon",attrs:{size:"40"}}),a._v(" "),e("h1",[a._v("Setup Wizard")]),a._v(" "),e("h2",[a._v("Set up your billing information.")])],1),a._v(" "),e("ValidationObserver",{ref:"billingInformation",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),a.billingInformationSubmit(t)}},scopedSlots:a._u([{key:"default",fn:function(t){t.invalid;return[e("FormLabel",[a._v("Company Information")]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Company Name:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Name",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var i=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_name,expression:"billingInformation.billing_name"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your company name",type:"text"},domProps:{value:a.billingInformation.billing_name},on:{input:function(t){t.target.composing||a.$set(a.billingInformation,"billing_name",t.target.value)}}}),a._v(" "),i[0]?e("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("VAT Number:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Vat Number",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var i=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_vat_number,expression:"billingInformation.billing_vat_number"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your VAT number",type:"text"},domProps:{value:a.billingInformation.billing_vat_number},on:{input:function(t){t.target.composing||a.$set(a.billingInformation,"billing_vat_number",t.target.value)}}}),a._v(" "),i[0]?e("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("FormLabel",{staticClass:"mt-70"},[a._v("Billing Information")]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Billing Country:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Country",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var i=t.errors;return[e("SelectInput",{attrs:{options:a.countries,placeholder:"Select your billing country",isError:i[0]},model:{value:a.billingInformation.billing_country,callback:function(t){a.$set(a.billingInformation,"billing_country",t)},expression:"billingInformation.billing_country"}}),a._v(" "),i[0]?e("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Billing Address:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Address",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var i=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_address,expression:"billingInformation.billing_address"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your billing address",type:"text"},domProps:{value:a.billingInformation.billing_address},on:{input:function(t){t.target.composing||a.$set(a.billingInformation,"billing_address",t.target.value)}}}),a._v(" "),i[0]?e("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"wrapper-inline"},[e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Billing City:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing City",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var i=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_city,expression:"billingInformation.billing_city"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your billing city",type:"text"},domProps:{value:a.billingInformation.billing_city},on:{input:function(t){t.target.composing||a.$set(a.billingInformation,"billing_city",t.target.value)}}}),a._v(" "),i[0]?e("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Billing Postal Code:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Postal Code",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var i=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_postal_code,expression:"billingInformation.billing_postal_code"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your billing postal code",type:"text"},domProps:{value:a.billingInformation.billing_postal_code},on:{input:function(t){t.target.composing||a.$set(a.billingInformation,"billing_postal_code",t.target.value)}}}),a._v(" "),i[0]?e("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1)]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Billing State:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing State",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var i=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_state,expression:"billingInformation.billing_state"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your billing state",type:"text"},domProps:{value:a.billingInformation.billing_state},on:{input:function(t){t.target.composing||a.$set(a.billingInformation,"billing_state",t.target.value)}}}),a._v(" "),i[0]?e("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Billing Phone Number (optional):")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Phone Number"},scopedSlots:a._u([{key:"default",fn:function(t){var i=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_phone_number,expression:"billingInformation.billing_phone_number"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your billing phone number",type:"text"},domProps:{value:a.billingInformation.billing_phone_number},on:{input:function(t){t.target.composing||a.$set(a.billingInformation,"billing_phone_number",t.target.value)}}}),a._v(" "),i[0]?e("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"submit-wrapper"},[e("AuthButton",{attrs:{icon:"chevron-right",text:"Save and Create Plans",loading:a.isLoading,disabled:a.isLoading}})],1)]}}])})],1)],1)}),[],!1,null,"7eaabd11",null);t.default=w.exports},JHC5:function(a,t,e){var i=e("YUi1");"string"==typeof i&&(i=[[a.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(a.exports=i.locals)},Jx8r:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,"#auth[data-v-31af8372]{height:100%;width:100%;display:table}",""])},KnjL:function(a,t,e){"use strict";var i={name:"InfoBox",props:["type"]},o=(e("pFam"),e("KHd+")),n=Object(o.a)(i,(function(){var a=this.$createElement;return(this._self._c||a)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"8e7c42f6",null);t.a=n.exports},"Qqv+":function(a,t,e){var i=e("biqn");"string"==typeof i&&(i=[[a.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(a.exports=i.locals)},RLEU:function(a,t,e){"use strict";e("JHC5")},TJPC:function(a,t,e){"use strict";e.d(t,"a",(function(){return n}));function i(a){return null==a}function o(a){return Array.isArray(a)&&0===a.length}var n={validate:function(a,t){var e=(void 0===t?{allowFalse:!0}:t).allowFalse,n={valid:!1,required:!0};return i(a)||o(a)?n:!1!==a||e?(n.valid=!!String(a).trim().length,n):n},params:[{name:"allowFalse",default:!0}],computesRequired:!0}},YUi1:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".button[data-v-16e9ad58]{cursor:pointer;border-radius:8px;text-decoration:none;padding:12px 32px;display:inline-block;margin-left:15px;margin-right:15px;white-space:nowrap;transition:all .15s ease;background:transparent}.button .text-label[data-v-16e9ad58]{transition:all .15s ease;font-size:1.0625em;font-weight:800;line-height:0}.button .icon[data-v-16e9ad58]{margin-left:12px;font-size:1em}.button.solid[data-v-16e9ad58]{background:#00bc7e;border:2px solid #00bc7e}.button.solid .text-label[data-v-16e9ad58]{color:#fff}.button.outline[data-v-16e9ad58]{border:2px solid #1b2539}.button.outline .text-label[data-v-16e9ad58]{color:#1b2539}.button.outline .icon path[data-v-16e9ad58]{fill:inherit}.button.outline[data-v-16e9ad58]:hover{border-color:inherit}.button.outline:hover .text-label[data-v-16e9ad58]{color:inherit}@media (prefers-color-scheme:dark){.button.outline[data-v-16e9ad58]{background:#131414;border-color:#bec6cf}.button.outline .text-label[data-v-16e9ad58]{color:#bec6cf}}.sync-alt[data-v-16e9ad58]{-webkit-animation:spin-data-v-16e9ad58 1s linear infinite;animation:spin-data-v-16e9ad58 1s linear infinite}@-webkit-keyframes spin-data-v-16e9ad58{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin-data-v-16e9ad58{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""])},bDRN:function(a,t,e){"use strict";var i={name:"AuthContentWrapper"},o=(e("iYAH"),e("KHd+")),n=Object(o.a)(i,(function(){var a=this.$createElement;return(this._self._c||a)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);t.a=n.exports},biqn:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".info-box[data-v-8e7c42f6]{padding:20px;border-radius:8px;margin-bottom:32px;background:#f4f5f6;text-align:left}.info-box.error[data-v-8e7c42f6]{background:rgba(253,57,122,.1)}.info-box.error a[data-v-8e7c42f6],.info-box.error p[data-v-8e7c42f6]{color:#fd397a}.info-box.error a[data-v-8e7c42f6]{text-decoration:underline}.info-box p[data-v-8e7c42f6]{line-height:1.6;word-break:break-word;font-weight:600}.info-box p[data-v-8e7c42f6],.info-box p[data-v-8e7c42f6] a{font-size:15px}.info-box p[data-v-8e7c42f6] b{font-size:15px;font-weight:700}.info-box a[data-v-8e7c42f6],.info-box b[data-v-8e7c42f6]{font-weight:700}.info-box a[data-v-8e7c42f6]{font-size:.9375em;line-height:1.6}.info-box ul[data-v-8e7c42f6]{margin-top:15px}.info-box ul[data-v-8e7c42f6],.info-box ul li[data-v-8e7c42f6],.info-box ul li a[data-v-8e7c42f6]{display:block}@media only screen and (max-width:690px){.info-box[data-v-8e7c42f6]{padding:15px}}@media (prefers-color-scheme:dark){.info-box[data-v-8e7c42f6]{background:#1e2024}.info-box p[data-v-8e7c42f6],.info-box ul li[data-v-8e7c42f6]{color:#bec6cf}}",""])},eZ9V:function(a,t,e){"use strict";var i=e("CjXH"),o={name:"FormLabel",props:["icon"],components:{Edit2Icon:i.u,SettingsIcon:i.bb}},n=(e("1L+q"),e("KHd+")),r=Object(n.a)(o,(function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"form-label"},[this.icon?this._e():t("edit-2-icon",{staticClass:"icon text-theme",attrs:{size:"22"}}),this._v(" "),"settings"===this.icon?t("settings-icon",{staticClass:"icon text-theme",attrs:{size:"22"}}):this._e(),this._v(" "),t("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"10bcab7e",null);t.a=r.exports},iYAH:function(a,t,e){"use strict";e("lh0Q")},j8qy:function(a,t,e){"use strict";var i={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=e("KHd+"),n=Object(o.a)(i,(function(){var a=this.$createElement,t=this._self._c||a;return this.isVisible?t("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);t.a=n.exports},jexE:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".form-label[data-v-10bcab7e]{display:flex;align-items:center;margin-bottom:30px}.form-label .icon[data-v-10bcab7e]{margin-right:10px}.form-label .icon circle[data-v-10bcab7e],.form-label .icon path[data-v-10bcab7e]{color:inherit}.form-label .label[data-v-10bcab7e]{font-size:1.125em;font-weight:700}@media (prefers-color-scheme:dark){.form-label .label[data-v-10bcab7e]{color:#bec6cf}}",""])},lh0Q:function(a,t,e){var i=e("Jx8r");"string"==typeof i&&(i=[[a.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(a.exports=i.locals)},pFam:function(a,t,e){"use strict";e("Qqv+")},vRyx:function(a,t,e){var i=e("9kSd");"string"==typeof i&&(i=[[a.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(a.exports=i.locals)}}]);
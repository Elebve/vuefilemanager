(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"2Sb1":function(a,e,t){"use strict";var r={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:t("CjXH").d}},i=(t("qf9i"),t("KHd+")),n=Object(i.a)(r,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"page-header"},[a.canBack?t("div",{staticClass:"go-back",on:{click:function(e){return a.$router.back()}}},[t("chevron-left-icon",{attrs:{size:"17"}})],1):a._e(),a._v(" "),t("div",{staticClass:"content"},[t("h1",{staticClass:"title"},[a._v(a._s(a.title))])])])}),[],!1,null,"aafe7e24",null);e.a=n.exports},"3Idf":function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".page-header[data-v-aafe7e24]{display:flex;align-items:center;background:#fff;z-index:9;width:100%;position:-webkit-sticky;position:sticky;top:0;padding-top:20px;padding-bottom:20px}.page-header .title[data-v-aafe7e24]{font-size:1.125em;font-weight:700;color:#1b2539}.page-header .go-back[data-v-aafe7e24]{margin-right:10px;cursor:pointer}.page-header .go-back svg[data-v-aafe7e24]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:960px){.page-header .title[data-v-aafe7e24]{font-size:1.125em}}@media only screen and (max-width:690px){.page-header[data-v-aafe7e24]{display:none}}@media (prefers-color-scheme:dark){.page-header[data-v-aafe7e24]{background:#111314}.page-header .title[data-v-aafe7e24]{color:#bec6cf}.page-header .icon path[data-v-aafe7e24]{fill:#00bc7e}}",""])},"6gqG":function(a,e,t){var r=t("ydEr");"string"==typeof r&&(r=[[a.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,i);r.locals&&(a.exports=r.locals)},"7OGm":function(a,e,t){"use strict";var r=t("6gqG");t.n(r).a},D72z:function(a,e,t){"use strict";var r=t("o/H5");t.n(r).a},F11w:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".color-label[data-v-ffcb2882]{text-transform:capitalize;font-size:.75em;display:inline-block;border-radius:6px;font-weight:700;padding:4px 6px}.color-label.purple[data-v-ffcb2882]{color:#9d66fe;background:rgba(157,102,254,.1)}.color-label.yellow[data-v-ffcb2882]{color:#ffbd2d;background:rgba(255,189,45,.1)}.color-label.green[data-v-ffcb2882]{color:#00bc7e;background:rgba(0,188,126,.1)}.color-label.red[data-v-ffcb2882]{color:#fd397a;background:rgba(253,57,122,.1)}",""])},GkQO:function(a,e,t){"use strict";var r=t("J5Z7");t.n(r).a},GxOr:function(a,e,t){"use strict";t.r(e);var r=t("o0o1"),i=t.n(r),n=t("A5+z"),s=t("wz3J"),o=t("4TWA"),d=t("eZ9V"),l=t("D62o"),b=t("Nv84"),p=t("KnjL"),c=t("kPoH"),u=t("2Sb1"),v=t("zTYo"),m=t("CjXH"),f=t("TJPC"),g=t("L2JU"),_=t("xCqy"),h=t("vDqi"),x=t.n(h);function y(a,e,t,r,i,n,s){try{var o=a[n](s),d=o.value}catch(a){return void t(a)}o.done?e(d):Promise.resolve(d).then(r,i)}function w(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,r)}return t}function k(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?w(Object(t),!0).forEach((function(e){C(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function C(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var P=void 0,$=void 0,O={name:"UpgradePlan",components:{ValidationProvider:n.ValidationProvider,ValidationObserver:n.ValidationObserver,PlanPricingTables:s.a,CreditCardIcon:m.j,MobileHeader:l.a,SelectInput:o.a,ButtonBase:b.a,PageHeader:u.a,ColorLabel:c.a,FormLabel:d.a,required:f.a,Spinner:v.a,InfoBox:p.a},computed:k(k({},Object(g.b)(["requestedPlan","config","countries"])),{},{billing:function(){return this.$store.getters.user.relationships.settings.data.attributes},taxRates:function(){var a=this;return this.requestedPlan.data.attributes.tax_rates.find((function(e){return e.jurisdiction===a.billing.billing_country}))}}),data:function(){return{complete:!1,stripeOptions:{hidePostalCode:!1},isLoading:!0,isSubmitted:!1,PaymentMethods:void 0,defaultPaymentMethod:void 0,errorMessage:void 0,isError:!1,payByNewCard:!1,clientSecret:void 0}},methods:{initStripe:function(){var a=(P=Stripe(this.config.stripe_public_key)).elements();($=a.create("card")).mount(this.$refs.stripeCard)},payByNewCardForm:function(){this.payByNewCard=!0,this.isError=!1},successOrder:function(){this.$store.dispatch("getAppData"),_.a.$emit("toaster",{type:"success",message:this.$t("toaster.account_upgraded")}),this.$router.push({name:"Subscription"})},errorOrder:function(a){402===a.response.status&&(window.location.href=a.response.data.message),400===a.response.status&&(this.isError=!0,this.errorMessage=a.response.data.message),500===a.response.status&&(this.isError=!0,this.errorMessage=a.response.data.message,_.a.$emit("alert:open",{title:this.$t("popup_error.title"),message:this.$t("popup_error.message")}))},submitOrder:function(){var a,e=this;return(a=i.a.mark((function a(){var t,r,n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$refs.order.validate();case 2:if(a.sent){a.next=5;break}return a.abrupt("return");case 5:if(e.isError=!1,e.isSubmitted=!0,e.defaultPaymentMethod&&!e.payByNewCard){a.next=14;break}return a.next=10,P.confirmCardSetup(e.clientSecret,{payment_method:{card:$}});case 10:t=a.sent,r=t.setupIntent,(n=t.error)?(e.isError=!0,e.isSubmitted=!1,e.errorMessage=n.message):x.a.post("/api/subscription/upgrade",{billing:e.billing,plan:e.requestedPlan,payment:{type:"stripe",meta:{pm:r.payment_method}}}).then((function(){return e.successOrder()})).catch((function(a){return e.errorOrder(a)})).finally((function(){e.isSubmitted=!1}));case 14:e.defaultPaymentMethod&&!e.payByNewCard&&x.a.post("/api/subscription/upgrade",{billing:e.billing,plan:e.requestedPlan,payment:{type:"stripe"}}).then((function(){return e.successOrder()})).catch((function(a){return e.errorOrder(a)})).finally((function(){e.isSubmitted=!1}));case 15:case"end":return a.stop()}}),a)})),function(){var e=this,t=arguments;return new Promise((function(r,i){var n=a.apply(e,t);function s(a){y(n,r,i,s,o,"next",a)}function o(a){y(n,r,i,s,o,"throw",a)}s(void 0)}))})()}},mounted:function(){this.requestedPlan?this.initStripe():this.$router.push({name:"UpgradePlan"})},created:function(){var a=this;x.a.get("/api/stripe/setup-intent").then((function(e){a.clientSecret=e.data.client_secret})).catch((function(){return a.$isSomethingWrong()})),x.a.get("/api/user/payments").then((function(e){a.defaultPaymentMethod=e.data.default,a.PaymentMethods=e.data.others})).catch((function(){return a.$isSomethingWrong()})).finally((function(){a.isLoading=!1}))}},z=(t("D72z"),t("KHd+")),j=Object(z.a)(O,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"single-page"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:!a.isLoading,expression:"! isLoading"}],staticClass:"large-width center-page",attrs:{id:"page-content"}},[t("MobileHeader",{attrs:{title:a.$router.currentRoute.meta.title}}),a._v(" "),t("div",{staticClass:"content-page"},[t("div",{staticClass:"plan-title"},[t("credit-card-icon",{staticClass:"title-icon",attrs:{size:"42"}}),a._v(" "),t("h1",[a._v(a._s(a.$t("page_upgrade_account.title")))]),a._v(" "),t("h2",[a._v(a._s(a.$t("page_upgrade_account.desription")))])],1),a._v(" "),t("div",{staticClass:"order"},[t("div",{staticClass:"steps"},[t("div",{staticClass:"payment-card"},[t("FormLabel",[a._v(a._s(a.$t("page_upgrade_account.section_card")))]),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!a.defaultPaymentMethod||a.payByNewCard,expression:"! defaultPaymentMethod || payByNewCard"}],staticClass:"register-card"},[a.config.isDemo?t("InfoBox",[t("p",[a._v("For test your payment please use "),t("b",[a._v("4242 4242 4242 4242")]),a._v(" or "),t("b",[a._v("5555 5555 5555 4444")]),a._v(" as a card number, "),t("b",[a._v("11/22")]),a._v("\n                                    as the expiration date and "),t("b",[a._v("123")]),a._v(" as CVC number and ZIP "),t("b",[a._v("12345")]),a._v(".")])]):a._e(),a._v(" "),t("div",{ref:"stripeCard",staticClass:"stripe-card",class:{"is-error":a.isError}}),a._v(" "),a.isError?t("div",{staticClass:"card-error-message"},[t("span",[a._v(a._s(a.errorMessage))])]):a._e()],1),a._v(" "),a.defaultPaymentMethod&&!a.payByNewCard?t("div",{staticClass:"registered-cards"},[t("div",{staticClass:"credit-card",class:{"is-error":a.isError}},[t("div",{staticClass:"card-number"},[t("img",{staticClass:"credit-card-icon",attrs:{src:a.$getCreditCardBrand(a.defaultPaymentMethod.data.attributes.brand),alt:a.defaultPaymentMethod.data.attributes.brand}}),a._v(" "),t("div",{staticClass:"credit-card-numbers"},[a._v("\n                                        •••• "+a._s(a.defaultPaymentMethod.data.attributes.last4)+"\n                                    ")]),a._v(" "),t("ColorLabel",{attrs:{color:"purple"}},[a._v(a._s(a.$t("global.default")))])],1),a._v(" "),t("div",{staticClass:"expiration-date"},[t("span",[a._v(a._s(a.defaultPaymentMethod.data.attributes.exp_month)+" / "+a._s(a.defaultPaymentMethod.data.attributes.exp_year))])])]),a._v(" "),a.isError?a._e():t("div",{staticClass:"change-payment"},[t("span",[a._v("\n                                    "+a._s(a.$t("page_upgrade_account.change_payment.you_can"))+"\n                                ")]),a._v(" "),a.PaymentMethods.data.length>0?t("router-link",{attrs:{to:{name:"PaymentMethods"}}},[a._v("\n                                    "+a._s(a.$t("page_upgrade_account.change_payment.change_payment"))+"\n                                ")]):a._e(),a._v(" "),a.PaymentMethods.data.length>0?t("span",[a._v("\n                                    "+a._s(a.$t("global.or"))+"\n                                ")]):a._e(),a._v(" "),t("a",{on:{click:a.payByNewCardForm}},[a._v("\n                                    "+a._s(a.$t("page_upgrade_account.change_payment.pay_by_new_card"))+"\n                                ")])],1),a._v(" "),a.isError?t("div",{staticClass:"card-error-message"},[t("span",[a._v(a._s(a.errorMessage))]),a._v(" "),t("span",{staticClass:"link",on:{click:a.payByNewCardForm}},[a._v("\n                                    "+a._s(a.$t("page_upgrade_account.errors.pay_by_another_card"))+"\n                                ")]),a._v(" "),t("span",[a._v("\n                                    "+a._s(a.$t("global.or"))+"\n                                ")]),a._v(" "),t("router-link",{staticClass:"link",attrs:{to:{name:"PaymentMethods"}}},[a._v("\n                                    "+a._s(a.$t("page_upgrade_account.change_payment.change_payment"))+"\n                                ")])],1):a._e()]):a._e()],1),a._v(" "),a.billing?t("div",{staticClass:"billing"},[t("FormLabel",[a._v(a._s(a.$t("page_upgrade_account.section_billing")))]),a._v(" "),t("ValidationObserver",{ref:"order",staticClass:"form block-form",attrs:{tag:"form"},scopedSlots:a._u([{key:"default",fn:function(e){e.invalid;return[t("div",{staticClass:"form block-form"},[t("div",{staticClass:"block-wrapper"},[t("label",[a._v(a._s(a.$t("user_settings.name"))+":")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",rules:"required",name:"billing_name"},scopedSlots:a._u([{key:"default",fn:function(e){var r=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.billing.billing_name,expression:"billing.billing_name"}],class:{"is-error":r[0]},attrs:{placeholder:a.$t("user_settings.name_plac"),type:"text"},domProps:{value:a.billing.billing_name},on:{input:function(e){e.target.composing||a.$set(a.billing,"billing_name",e.target.value)}}}),a._v(" "),r[0]?t("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v(a._s(a.$t("user_settings.address"))+":")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",rules:"required",name:"billing_address"},scopedSlots:a._u([{key:"default",fn:function(e){var r=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.billing.billing_address,expression:"billing.billing_address"}],class:{"is-error":r[0]},attrs:{placeholder:a.$t("user_settings.address_plac"),type:"text"},domProps:{value:a.billing.billing_address},on:{input:function(e){e.target.composing||a.$set(a.billing,"billing_address",e.target.value)}}}),a._v(" "),r[0]?t("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"wrapper-inline"},[t("div",{staticClass:"block-wrapper"},[t("label",[a._v(a._s(a.$t("user_settings.city"))+":")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",rules:"required",name:"billing_city"},scopedSlots:a._u([{key:"default",fn:function(e){var r=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.billing.billing_city,expression:"billing.billing_city"}],class:{"is-error":r[0]},attrs:{placeholder:a.$t("user_settings.city_plac"),type:"text"},domProps:{value:a.billing.billing_city},on:{input:function(e){e.target.composing||a.$set(a.billing,"billing_city",e.target.value)}}}),a._v(" "),r[0]?t("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v(a._s(a.$t("user_settings.postal_code"))+":")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",rules:"required",name:"billing_postal_code"},scopedSlots:a._u([{key:"default",fn:function(e){var r=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.billing.billing_postal_code,expression:"billing.billing_postal_code"}],class:{"is-error":r[0]},attrs:{placeholder:a.$t("user_settings.postal_code_plac"),type:"text"},domProps:{value:a.billing.billing_postal_code},on:{input:function(e){e.target.composing||a.$set(a.billing,"billing_postal_code",e.target.value)}}}),a._v(" "),r[0]?t("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1)]),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v(a._s(a.$t("user_settings.country"))+":")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",rules:"required",name:"billing_country"},scopedSlots:a._u([{key:"default",fn:function(e){var r=e.errors;return[t("SelectInput",{attrs:{default:a.billing.billing_country,options:a.countries,placeholder:a.$t("user_settings.country_plac"),isError:r[0]},model:{value:a.billing.billing_country,callback:function(e){a.$set(a.billing,"billing_country",e)},expression:"billing.billing_country"}}),a._v(" "),r[0]?t("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v(a._s(a.$t("user_settings.state"))+":")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",rules:"required",name:"billing_state"},scopedSlots:a._u([{key:"default",fn:function(e){var r=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.billing.billing_state,expression:"billing.billing_state"}],class:{"is-error":r[0]},attrs:{placeholder:a.$t("user_settings.state_plac"),type:"text"},domProps:{value:a.billing.billing_state},on:{input:function(e){e.target.composing||a.$set(a.billing,"billing_state",e.target.value)}}}),a._v(" "),t("small",{staticClass:"input-help"},[a._v("\n                                            State, county, province, or region.\n                                        ")]),a._v(" "),r[0]?t("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v(a._s(a.$t("user_settings.phone_number"))+":")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",rules:"required",name:"billing_phone_number"},scopedSlots:a._u([{key:"default",fn:function(e){var r=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.billing.billing_phone_number,expression:"billing.billing_phone_number"}],class:{"is-error":r[0]},attrs:{placeholder:a.$t("user_settings.phone_number_plac"),type:"text"},domProps:{value:a.billing.billing_phone_number},on:{input:function(e){e.target.composing||a.$set(a.billing,"billing_phone_number",e.target.value)}}}),a._v(" "),r[0]?t("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1)])]}}],null,!1,2994122159)})],1):a._e()]),a._v(" "),t("div",{staticClass:"summary"},[t("FormLabel",[a._v(a._s(a.$t("page_upgrade_account.section_summary")))]),a._v(" "),a.requestedPlan?t("div",{staticClass:"summary-list",class:{"is-error":a.isError}},[t("div",{staticClass:"row"},[t("div",{staticClass:"cell"},[t("b",[a._v(a._s(a.requestedPlan.data.attributes.name))]),a._v(" "),t("small",[a._v(a._s(a.$t("page_upgrade_account.summary.period")))])]),a._v(" "),t("div",{staticClass:"cell"},[t("b",[a._v(a._s(a.requestedPlan.data.attributes.price))])])]),a._v(" "),a.taxRates?t("div",{staticClass:"row"},[t("div",{staticClass:"cell"},[t("b",[a._v(a._s(a.$t("page_upgrade_account.summary.vat"))+" - ("+a._s(a.taxRates.jurisdiction)+" "+a._s(a.taxRates.percentage)+"%)")])]),a._v(" "),t("div",{staticClass:"cell"},[t("b",[a._v(a._s(a.taxRates.plan_price_formatted))])])]):a._e(),a._v(" "),a.taxRates?a._e():t("div",{staticClass:"row"},[t("div",{staticClass:"cell"},[t("b",[a._v(a._s(a.$t("global.total")))])]),a._v(" "),t("div",{staticClass:"cell"},[t("b",[a._v(a._s(a.requestedPlan.data.attributes.price))])])]),a._v(" "),a.taxRates?t("div",{staticClass:"row"},[t("div",{staticClass:"cell"},[t("b",[a._v(a._s(a.$t("page_upgrade_account.summary.total_with_vat")))])]),a._v(" "),t("div",{staticClass:"cell"},[t("b",[a._v(a._s(a.taxRates.plan_price_formatted))])])]):a._e(),a._v(" "),t("ButtonBase",{staticClass:"next-submit",attrs:{disabled:a.isSubmitted,loading:a.isSubmitted,type:"submit","button-style":"theme-solid"},nativeOn:{click:function(e){return a.submitOrder(e)}}},[a._v("\n                            "+a._s(a.$t("page_upgrade_account.summary.submit_button"))+"\n                        ")]),a._v(" "),a.isError?t("p",{staticClass:"error-message"},[a._v(a._s(a.errorMessage))]):a._e(),a._v(" "),t("small",{staticClass:"disclaimer"},[a._v("\n                            "+a._s(a.$t("page_upgrade_account.summary.submit_disclaimer",{app:a.config.app_name}))+"\n                        ")])],1):a._e()],1)])])],1),a._v(" "),a.isLoading?t("div",{attrs:{id:"loader"}},[t("Spinner")],1):a._e()])}),[],!1,null,"1b5476db",null);e.default=j.exports},HnvT:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".form[data-v-1b5476db]{max-width:700px}.form.inline-form[data-v-1b5476db]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-1b5476db]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-1b5476db]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-1b5476db]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-1b5476db]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-1b5476db]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-1b5476db]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-1b5476db]:last-child{margin-bottom:0}.form.block-form .button[data-v-1b5476db]{margin-top:50px}.form .inline-wrapper[data-v-1b5476db]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-1b5476db]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-1b5476db]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-1b5476db]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-1b5476db]{display:flex}.single-line-form .submit-button[data-v-1b5476db]{margin-left:20px}.error-message[data-v-1b5476db]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-1b5476db]{width:100%}input[type=email][data-v-1b5476db],input[type=number][data-v-1b5476db],input[type=password][data-v-1b5476db],input[type=text][data-v-1b5476db],textarea[data-v-1b5476db]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-1b5476db],input[type=number].is-error[data-v-1b5476db],input[type=password].is-error[data-v-1b5476db],input[type=text].is-error[data-v-1b5476db],textarea.is-error[data-v-1b5476db]{border-color:#fd397a;box-shadow:0 1px 5px rgba(253,57,122,.3)}input[type=email][data-v-1b5476db]::-moz-placeholder,input[type=number][data-v-1b5476db]::-moz-placeholder,input[type=password][data-v-1b5476db]::-moz-placeholder,input[type=text][data-v-1b5476db]::-moz-placeholder,textarea[data-v-1b5476db]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-1b5476db]:-ms-input-placeholder,input[type=number][data-v-1b5476db]:-ms-input-placeholder,input[type=password][data-v-1b5476db]:-ms-input-placeholder,input[type=text][data-v-1b5476db]:-ms-input-placeholder,textarea[data-v-1b5476db]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-1b5476db]::placeholder,input[type=number][data-v-1b5476db]::placeholder,input[type=password][data-v-1b5476db]::placeholder,input[type=text][data-v-1b5476db]::placeholder,textarea[data-v-1b5476db]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-1b5476db]:focus,input[type=number][data-v-1b5476db]:focus,input[type=password][data-v-1b5476db]:focus,input[type=text][data-v-1b5476db]:focus,textarea[data-v-1b5476db]:focus{border-color:#00bc7e;box-shadow:0 1px 5px rgba(0,188,126,.3)}input[type=email][disabled][data-v-1b5476db],input[type=number][disabled][data-v-1b5476db],input[type=password][disabled][data-v-1b5476db],input[type=text][disabled][data-v-1b5476db],textarea[disabled][data-v-1b5476db]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}.additional-link[data-v-1b5476db]{font-size:1em;margin-top:50px;display:block;color:#1b2539}.additional-link a[data-v-1b5476db],.additional-link b[data-v-1b5476db]{color:#00bc7e;cursor:pointer}.additional-link a[data-v-1b5476db]:hover,.additional-link b[data-v-1b5476db]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-1b5476db]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-1b5476db]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-1b5476db],.form textarea[data-v-1b5476db]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-1b5476db]{display:block}.form.block-form .block-wrapper label[data-v-1b5476db]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-1b5476db]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-1b5476db]{display:block}.form.inline-form .input-wrapper .error-message[data-v-1b5476db]{position:relative;bottom:0}.form .button[data-v-1b5476db]{padding:14px 32px}.single-line-form[data-v-1b5476db]{display:block}.single-line-form .submit-button[data-v-1b5476db]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-1b5476db],input[type=number][data-v-1b5476db],input[type=password][data-v-1b5476db],input[type=text][data-v-1b5476db],textarea[data-v-1b5476db]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-1b5476db]{display:block}}@media (prefers-color-scheme:dark){.form .input-help[data-v-1b5476db]{color:#7d858c}.form.block-form .block-wrapper label[data-v-1b5476db],.form .inline-wrapper .switch-label .input-label[data-v-1b5476db]{color:#bec6cf}input[type=email][data-v-1b5476db],input[type=number][data-v-1b5476db],input[type=password][data-v-1b5476db],input[type=text][data-v-1b5476db],textarea[data-v-1b5476db]{border-color:#1e2024;background:#1e2024;color:#bec6cf}input[type=email][data-v-1b5476db]::-moz-placeholder,input[type=number][data-v-1b5476db]::-moz-placeholder,input[type=password][data-v-1b5476db]::-moz-placeholder,input[type=text][data-v-1b5476db]::-moz-placeholder,textarea[data-v-1b5476db]::-moz-placeholder{color:#7d858c}input[type=email][data-v-1b5476db]:-ms-input-placeholder,input[type=number][data-v-1b5476db]:-ms-input-placeholder,input[type=password][data-v-1b5476db]:-ms-input-placeholder,input[type=text][data-v-1b5476db]:-ms-input-placeholder,textarea[data-v-1b5476db]:-ms-input-placeholder{color:#7d858c}input[type=email][data-v-1b5476db]::placeholder,input[type=number][data-v-1b5476db]::placeholder,input[type=password][data-v-1b5476db]::placeholder,input[type=text][data-v-1b5476db]::placeholder,textarea[data-v-1b5476db]::placeholder{color:#7d858c}input[type=email][disabled][data-v-1b5476db],input[type=number][disabled][data-v-1b5476db],input[type=password][disabled][data-v-1b5476db],input[type=text][disabled][data-v-1b5476db],textarea[disabled][data-v-1b5476db]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}}.change-payment[data-v-1b5476db]{padding-top:10px}.change-payment span[data-v-1b5476db]{font-weight:600}.change-payment a[data-v-1b5476db]{cursor:pointer;font-weight:700}.change-payment a[data-v-1b5476db]:hover{text-decoration:underline}.change-payment a[data-v-1b5476db],.change-payment span[data-v-1b5476db]{color:rgba(27,37,57,.7);font-size:.875em}.card-error-message[data-v-1b5476db]{padding-top:10px}.card-error-message a[data-v-1b5476db],.card-error-message span[data-v-1b5476db]{font-size:.875em;font-weight:600;color:#fd397a}.card-error-message .link[data-v-1b5476db],.card-error-message a[data-v-1b5476db]{text-decoration:underline;cursor:pointer}.card-error-message .link[data-v-1b5476db]:hover,.card-error-message a[data-v-1b5476db]:hover{text-decoration:none}.registered-cards[data-v-1b5476db]{margin-bottom:50px}.register-card[data-v-1b5476db]{margin-bottom:55px}.credit-card[data-v-1b5476db]{display:flex;align-items:center;justify-content:space-between;padding:15px;background:#f4f5f6;border-radius:8px;margin-top:20px}.credit-card.is-error[data-v-1b5476db]{box-shadow:0 0 7px rgba(253,57,122,.3);border:2px solid #fd397a;border-radius:4px}.credit-card span[data-v-1b5476db]{font-weight:700}.credit-card .card-number[data-v-1b5476db]{display:flex}.credit-card .credit-card-numbers[data-v-1b5476db]{vertical-align:middle;margin-right:10px}.credit-card .credit-card-icon[data-v-1b5476db]{vertical-align:middle;max-height:20px;margin-right:8px}.stripe-card[data-v-1b5476db]{box-sizing:border-box;padding:13px 20px;border:1px solid transparent;border-radius:4px;background-color:#fff;box-shadow:0 1px 3px 0 #e6ebf1;transition:box-shadow .15s ease}.stripe-card.is-error[data-v-1b5476db]{box-shadow:0 0 7px rgba(253,57,122,.3);border:2px solid #fd397a;border-radius:4px}.stripe-card.StripeElement--focus[data-v-1b5476db]{box-shadow:0 1px 3px 0 #cfd7df}.stripe-card.StripeElement--invalid[data-v-1b5476db]{border-color:#fa755a}.stripe-card.StripeElement--webkit-autofill[data-v-1b5476db]{background-color:#fefde5!important}.stripe-card iframe .InputContainer .InputElement[data-v-1b5476db]{color:#fff}.summary-list[data-v-1b5476db]{box-shadow:0 7px 20px 5px rgba(26,36,55,.06);border-radius:8px;position:-webkit-sticky;position:sticky;padding:25px;top:30px}.summary-list.is-error[data-v-1b5476db]{border:2px solid #fd397a;box-shadow:0 7px 20px 5px rgba(253,57,122,.06)}.summary-list .error-message[data-v-1b5476db]{font-weight:600}.summary-list .next-submit[data-v-1b5476db]{width:100%;margin-top:20px}.summary-list .disclaimer[data-v-1b5476db]{font-size:.75em;line-height:1.6;display:block;margin-top:12px}.summary-list .row[data-v-1b5476db]{display:flex;justify-content:space-between;padding:15px 0}.summary-list .row[data-v-1b5476db]:first-child{padding-top:0}.summary-list .row[data-v-1b5476db]:last-of-type{border-top:1px solid #f8f8f8;padding-bottom:0}.summary-list .row:last-of-type b[data-v-1b5476db]{font-weight:800}.summary-list .cell b[data-v-1b5476db]{display:block;font-size:1.125em}.summary-list .cell small[data-v-1b5476db]{color:rgba(27,37,57,.7);font-size:.75em}.order[data-v-1b5476db]{display:flex;margin-bottom:30px}.order .steps[data-v-1b5476db]{flex:0 0 65%;padding-right:30px}.order .steps .form[data-v-1b5476db]{max-width:100%}.order .summary[data-v-1b5476db]{flex:0 0 34%}.plan-title[data-v-1b5476db]{text-align:center;max-width:600px;margin:0 auto 80px}.plan-title circle[data-v-1b5476db],.plan-title line[data-v-1b5476db],.plan-title path[data-v-1b5476db],.plan-title polyline[data-v-1b5476db],.plan-title rect[data-v-1b5476db]{color:#00bc7e}.plan-title h1[data-v-1b5476db]{font-size:2.375em;font-weight:800;margin-bottom:5px}.plan-title h2[data-v-1b5476db]{font-size:1.25em;font-weight:500}@media (prefers-color-scheme:dark){.plan-title h1[data-v-1b5476db]{color:#bec6cf}.plan-title h2[data-v-1b5476db]{color:#7d858c}.credit-card[data-v-1b5476db]{background:#1e2024}.credit-card .credit-card-numbers[data-v-1b5476db],.credit-card span[data-v-1b5476db]{color:#bec6cf}.change-payment span[data-v-1b5476db]{color:#7d858c}.change-payment a[data-v-1b5476db]{color:#00bc7e}.summary-list[data-v-1b5476db]{background:#1e2024}.summary-list .disclaimer[data-v-1b5476db]{color:#7d858c}.summary-list .row[data-v-1b5476db]:last-of-type{border-top:1px solid hsla(0,0%,100%,.02)}.summary-list .cell b[data-v-1b5476db],.summary-list .row:last-of-type b[data-v-1b5476db]{color:#bec6cf}.summary-list .cell small[data-v-1b5476db]{color:#7d858c}.stripe-card[data-v-1b5476db]{border:1px solid transparent;box-shadow:none}.stripe-card.StripeElement--webkit-autofill[data-v-1b5476db]{background-color:#1e2024!important}.stripe-card.StripeElement--focus[data-v-1b5476db]{box-shadow:none;border-color:#00bc7e;box-shadow:0 1px 5px rgba(0,188,126,.3)}}@media only screen and (max-width:960px){.order[data-v-1b5476db]{display:block}.order .steps[data-v-1b5476db]{margin-bottom:70px}}",""])},Idvm:function(a,e,t){var r=t("lig4");"string"==typeof r&&(r=[[a.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,i);r.locals&&(a.exports=r.locals)},J5Z7:function(a,e,t){var r=t("F11w");"string"==typeof r&&(r=[[a.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,i);r.locals&&(a.exports=r.locals)},KPNK:function(a,e,t){var r=t("3Idf");"string"==typeof r&&(r=[[a.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,i);r.locals&&(a.exports=r.locals)},KnjL:function(a,e,t){"use strict";var r={name:"InfoBox",props:["type"]},i=(t("7OGm"),t("KHd+")),n=Object(i.a)(r,(function(){var a=this.$createElement;return(this._self._c||a)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"bf43be5e",null);e.a=n.exports},VNWY:function(a,e,t){"use strict";var r=t("j+Oh");t.n(r).a},Xk6H:function(a,e,t){"use strict";var r=t("Idvm");t.n(r).a},ZaIx:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".plan[data-v-8b2ebeb2]{text-align:center;flex:0 0 33%;padding:0 25px;margin-bottom:45px}.plan .plan-wrapper[data-v-8b2ebeb2]{box-shadow:0 7px 20px 5px rgba(26,36,55,.03);padding:25px;border-radius:8px;transition:all .3s ease}.plan .plan-wrapper[data-v-8b2ebeb2]:hover{transform:translateY(-20px) scale(1.05);box-shadow:0 15px 25px 5px rgba(26,36,55,.08)}.plan .plan-header .icon circle[data-v-8b2ebeb2],.plan .plan-header .icon line[data-v-8b2ebeb2],.plan .plan-header .icon path[data-v-8b2ebeb2],.plan .plan-header .icon polyline[data-v-8b2ebeb2],.plan .plan-header .icon rect[data-v-8b2ebeb2]{color:#00bc7e}.plan .plan-header .title[data-v-8b2ebeb2]{font-size:1.375em;font-weight:800}.plan .plan-header .description[data-v-8b2ebeb2]{font-size:.875em;font-weight:600}.plan .plan-features[data-v-8b2ebeb2]{margin:65px 0}.plan .plan-features .storage-size[data-v-8b2ebeb2]{font-size:3em;font-weight:900;line-height:1.1}.plan .plan-features .storage-description[data-v-8b2ebeb2]{display:block;font-size:.9375em;font-weight:800}.plan .plan-footer .sign-in-button[data-v-8b2ebeb2]{width:100%;text-align:center}.plan .plan-footer .price[data-v-8b2ebeb2]{color:#00bc7e;font-size:1.125em;display:block;margin-bottom:20px}.plan .plan-footer .price .vat-disclaimer[data-v-8b2ebeb2]{font-size:.6875em;color:#1b2539;display:block;font-weight:300;opacity:.45;margin-top:5px}.plans-wrapper[data-v-8b2ebeb2]{display:flex;flex-wrap:wrap;margin:0 -25px;justify-content:center}@media only screen and (max-width:960px){.plans-wrapper[data-v-8b2ebeb2]{display:block;margin:0}}@media (prefers-color-scheme:dark){.plan .plan-wrapper[data-v-8b2ebeb2]{background:#1e2024}.plan .plan-header .title[data-v-8b2ebeb2]{color:#bec6cf}.plan .plan-header .description[data-v-8b2ebeb2]{color:#7d858c}.plan .plan-features .storage-description[data-v-8b2ebeb2],.plan .plan-features .storage-size[data-v-8b2ebeb2]{color:#bec6cf}.plan .plan-footer .sign-in-button[data-v-8b2ebeb2]{background:rgba(0,188,126,.1)}.plan .plan-footer .sign-in-button[data-v-8b2ebeb2] .content{color:#00bc7e}.plan .plan-footer .price .vat-disclaimer[data-v-8b2ebeb2]{color:#bec6cf}}",""])},eZ9V:function(a,e,t){"use strict";var r={name:"FormLabel",components:{Edit2Icon:t("CjXH").m}},i=(t("Xk6H"),t("KHd+")),n=Object(i.a)(r,(function(){var a=this.$createElement,e=this._self._c||a;return e("div",{staticClass:"form-label"},[e("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),e("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);e.a=n.exports},"j+Oh":function(a,e,t){var r=t("ZaIx");"string"==typeof r&&(r=[[a.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,i);r.locals&&(a.exports=r.locals)},kPoH:function(a,e,t){"use strict";var r={name:"ColorLabel",props:["color"]},i=(t("GkQO"),t("KHd+")),n=Object(i.a)(r,(function(){var a=this.$createElement;return(this._self._c||a)("b",{staticClass:"color-label",class:this.color},[this._t("default")],2)}),[],!1,null,"ffcb2882",null);e.a=n.exports},lig4:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".form-label[data-v-c1157a8e]{display:flex;align-items:center;margin-bottom:30px}.form-label .icon[data-v-c1157a8e]{margin-right:10px}.form-label .icon path[data-v-c1157a8e]{stroke:#00bc7e}.form-label .label[data-v-c1157a8e]{font-size:1.125em;font-weight:700}@media (prefers-color-scheme:dark){.form-label .label[data-v-c1157a8e]{color:#bec6cf}}",""])},"o/H5":function(a,e,t){var r=t("HnvT");"string"==typeof r&&(r=[[a.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,i);r.locals&&(a.exports=r.locals)},qf9i:function(a,e,t){"use strict";var r=t("KPNK");t.n(r).a},wz3J:function(a,e,t){"use strict";var r=t("Nv84"),i=t("CjXH"),n=t("L2JU"),s=t("vDqi"),o=t.n(s);function d(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,r)}return t}function l(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var b={name:"PlanPricingTables",components:{HardDriveIcon:i.v,ButtonBase:r.a},data:function(){return{plans:void 0}},computed:function(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){l(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}({},Object(n.b)(["user"])),methods:{selectPlan:function(a){this.$emit("selected-plan",a),this.$router.push({name:"UpgradeBilling"})}},created:function(){var a=this;o.a.get("/api/public/pricing").then((function(e){a.plans=e.data.filter((function(e){return e.data.attributes.capacity>a.user.data.attributes.storage_capacity})),a.$emit("load",!1)}))}},p=(t("VNWY"),t("KHd+")),c=Object(p.a)(b,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return a.plans?t("div",{staticClass:"plans-wrapper"},a._l(a.plans,(function(e,r){return t("article",{key:r,staticClass:"plan"},[t("div",{staticClass:"plan-wrapper"},[t("header",{staticClass:"plan-header"},[t("div",{staticClass:"icon"},[t("hard-drive-icon",{attrs:{size:"26"}})],1),a._v(" "),t("h1",{staticClass:"title"},[a._v(a._s(e.data.attributes.name))]),a._v(" "),t("h2",{staticClass:"description"},[a._v(a._s(e.data.attributes.description))])]),a._v(" "),t("section",{staticClass:"plan-features"},[t("b",{staticClass:"storage-size"},[a._v(a._s(e.data.attributes.capacity_formatted))]),a._v(" "),t("span",{staticClass:"storage-description"},[a._v(a._s(a.$t("page_pricing_tables.storage_capacity")))])]),a._v(" "),t("footer",{staticClass:"plan-footer"},[t("b",{staticClass:"price"},[a._v("\n                    "+a._s(e.data.attributes.price)+"/"+a._s(a.$t("global.monthly_ac"))+"\n                    "),e.data.attributes.tax_rates.length>0?t("small",{staticClass:"vat-disclaimer"},[a._v(a._s(a.$t("page_pricing_tables.vat_excluded")))]):a._e()]),a._v(" "),t("ButtonBase",{staticClass:"sign-in-button",attrs:{type:"submit","button-style":"secondary"},nativeOn:{click:function(t){return a.selectPlan(e)}}},[a._v("\n                    "+a._s(a.$t("global.get_it"))+"\n                ")])],1)])])})),0):a._e()}),[],!1,null,"8b2ebeb2",null);e.a=c.exports},ydEr:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".info-box[data-v-bf43be5e]{padding:20px;border-radius:8px;margin-bottom:32px;background:#f4f5f6;text-align:left}.info-box.error[data-v-bf43be5e]{background:rgba(253,57,122,.1)}.info-box.error a[data-v-bf43be5e],.info-box.error p[data-v-bf43be5e]{color:#fd397a}.info-box.error a[data-v-bf43be5e]{text-decoration:underline}.info-box p[data-v-bf43be5e]{font-size:.9375em;line-height:1.6;word-break:break-word;font-weight:600}.info-box p[data-v-bf43be5e] a{color:#00bc7e}.info-box a[data-v-bf43be5e],.info-box b[data-v-bf43be5e]{font-weight:700;color:#00bc7e}.info-box a[data-v-bf43be5e]{font-size:.9375em;line-height:1.6}.info-box ul[data-v-bf43be5e]{margin-top:15px}.info-box ul[data-v-bf43be5e],.info-box ul li[data-v-bf43be5e],.info-box ul li a[data-v-bf43be5e]{display:block}@media only screen and (max-width:690px){.info-box[data-v-bf43be5e]{padding:15px}}@media (prefers-color-scheme:dark){.info-box[data-v-bf43be5e]{background:#1e2024}.info-box p[data-v-bf43be5e],.info-box ul li[data-v-bf43be5e]{color:#bec6cf}}",""])}}]);
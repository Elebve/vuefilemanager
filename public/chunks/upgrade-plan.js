(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"2Sb1":function(a,t,e){"use strict";var i={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:e("CjXH").d}},n=(e("qf9i"),e("KHd+")),r=Object(n.a)(i,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"page-header"},[a.canBack?e("div",{staticClass:"go-back",on:{click:function(t){return a.$router.back()}}},[e("chevron-left-icon",{attrs:{size:"17"}})],1):a._e(),a._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[a._v(a._s(a.title))])])])}),[],!1,null,"aafe7e24",null);t.a=r.exports},"3Idf":function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".page-header[data-v-aafe7e24]{display:flex;align-items:center;background:#fff;z-index:9;width:100%;position:-webkit-sticky;position:sticky;top:0;padding-top:20px;padding-bottom:20px}.page-header .title[data-v-aafe7e24]{font-size:1.125em;font-weight:700;color:#1b2539}.page-header .go-back[data-v-aafe7e24]{margin-right:10px;cursor:pointer}.page-header .go-back svg[data-v-aafe7e24]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:960px){.page-header .title[data-v-aafe7e24]{font-size:1.125em}}@media only screen and (max-width:690px){.page-header[data-v-aafe7e24]{display:none}}@media (prefers-color-scheme:dark){.page-header[data-v-aafe7e24]{background:#111314}.page-header .title[data-v-aafe7e24]{color:#bec6cf}.page-header .icon path[data-v-aafe7e24]{fill:#00bc7e}}",""])},"4iaM":function(a,t,e){"use strict";var i=e("7OGN");e.n(i).a},"4zU4":function(a,t,e){"use strict";e.r(t);var i=e("wz3J"),n=e("D62o"),r=e("2Sb1"),o=e("zTYo"),p=e("CjXH"),l=(e("vDqi"),{name:"UpgradePlan",components:{PlanPricingTables:i.a,MobileHeader:n.a,PageHeader:r.a,CloudIcon:p.g,Spinner:o.a},data:function(){return{isLoading:!0}},methods:{onLoadPricingTables:function(a){this.isLoading=a},onSelectTable:function(a){this.$store.commit("STORE_REQUESTED_PLAN",a)}},beforeMount:function(){var a=document.createElement("script");a.setAttribute("src","https://js.stripe.com/v3/"),document.head.appendChild(a)},mounted:function(){this.$store.dispatch("getAppData")}}),d=(e("4iaM"),e("KHd+")),s=Object(d.a)(l,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"single-page"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!a.isLoading,expression:"! isLoading"}],staticClass:"large-width center-page",attrs:{id:"page-content"}},[e("MobileHeader",{attrs:{title:a.$router.currentRoute.meta.title}}),a._v(" "),e("div",{staticClass:"content-page"},[e("div",{staticClass:"plan-title"},[e("cloud-icon",{staticClass:"title-icon",attrs:{size:"42"}}),a._v(" "),e("h1",[a._v(a._s(a.$t("page_pricing_tables.title")))]),a._v(" "),e("h2",[a._v(a._s(a.$t("page_pricing_tables.description")))])],1),a._v(" "),e("PlanPricingTables",{on:{load:a.onLoadPricingTables,"selected-plan":a.onSelectTable}})],1)],1),a._v(" "),a.isLoading?e("div",{attrs:{id:"loader"}},[e("Spinner")],1):a._e()])}),[],!1,null,"67317b10",null);t.default=s.exports},"7OGN":function(a,t,e){var i=e("sUUd");"string"==typeof i&&(i=[[a.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(a.exports=i.locals)},KPNK:function(a,t,e){var i=e("3Idf");"string"==typeof i&&(i=[[a.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(a.exports=i.locals)},VNWY:function(a,t,e){"use strict";var i=e("j+Oh");e.n(i).a},ZaIx:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".plan[data-v-8b2ebeb2]{text-align:center;flex:0 0 33%;padding:0 25px;margin-bottom:45px}.plan .plan-wrapper[data-v-8b2ebeb2]{box-shadow:0 7px 20px 5px rgba(26,36,55,.03);padding:25px;border-radius:8px;transition:all .3s ease}.plan .plan-wrapper[data-v-8b2ebeb2]:hover{transform:translateY(-20px) scale(1.05);box-shadow:0 15px 25px 5px rgba(26,36,55,.08)}.plan .plan-header .icon circle[data-v-8b2ebeb2],.plan .plan-header .icon line[data-v-8b2ebeb2],.plan .plan-header .icon path[data-v-8b2ebeb2],.plan .plan-header .icon polyline[data-v-8b2ebeb2],.plan .plan-header .icon rect[data-v-8b2ebeb2]{color:#00bc7e}.plan .plan-header .title[data-v-8b2ebeb2]{font-size:1.375em;font-weight:800}.plan .plan-header .description[data-v-8b2ebeb2]{font-size:.875em;font-weight:600}.plan .plan-features[data-v-8b2ebeb2]{margin:65px 0}.plan .plan-features .storage-size[data-v-8b2ebeb2]{font-size:3em;font-weight:900;line-height:1.1}.plan .plan-features .storage-description[data-v-8b2ebeb2]{display:block;font-size:.9375em;font-weight:800}.plan .plan-footer .sign-in-button[data-v-8b2ebeb2]{width:100%;text-align:center}.plan .plan-footer .price[data-v-8b2ebeb2]{color:#00bc7e;font-size:1.125em;display:block;margin-bottom:20px}.plan .plan-footer .price .vat-disclaimer[data-v-8b2ebeb2]{font-size:.6875em;color:#1b2539;display:block;font-weight:300;opacity:.45;margin-top:5px}.plans-wrapper[data-v-8b2ebeb2]{display:flex;flex-wrap:wrap;margin:0 -25px;justify-content:center}@media only screen and (max-width:960px){.plans-wrapper[data-v-8b2ebeb2]{display:block;margin:0}}@media (prefers-color-scheme:dark){.plan .plan-wrapper[data-v-8b2ebeb2]{background:#1e2024}.plan .plan-header .title[data-v-8b2ebeb2]{color:#bec6cf}.plan .plan-header .description[data-v-8b2ebeb2]{color:#7d858c}.plan .plan-features .storage-description[data-v-8b2ebeb2],.plan .plan-features .storage-size[data-v-8b2ebeb2]{color:#bec6cf}.plan .plan-footer .sign-in-button[data-v-8b2ebeb2]{background:rgba(0,188,126,.1)}.plan .plan-footer .sign-in-button[data-v-8b2ebeb2] .content{color:#00bc7e}.plan .plan-footer .price .vat-disclaimer[data-v-8b2ebeb2]{color:#bec6cf}}",""])},"j+Oh":function(a,t,e){var i=e("ZaIx");"string"==typeof i&&(i=[[a.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,n);i.locals&&(a.exports=i.locals)},qf9i:function(a,t,e){"use strict";var i=e("KPNK");e.n(i).a},sUUd:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".form[data-v-67317b10]{max-width:700px}.form.inline-form[data-v-67317b10]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-67317b10]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-67317b10]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-67317b10]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-67317b10]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-67317b10]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-67317b10]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-67317b10]:last-child{margin-bottom:0}.form.block-form .button[data-v-67317b10]{margin-top:50px}.form .inline-wrapper[data-v-67317b10]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-67317b10]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-67317b10]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-67317b10]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-67317b10]{display:flex}.single-line-form .submit-button[data-v-67317b10]{margin-left:20px}.error-message[data-v-67317b10]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-67317b10]{width:100%}input[type=email][data-v-67317b10],input[type=number][data-v-67317b10],input[type=password][data-v-67317b10],input[type=text][data-v-67317b10],textarea[data-v-67317b10]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-67317b10],input[type=number].is-error[data-v-67317b10],input[type=password].is-error[data-v-67317b10],input[type=text].is-error[data-v-67317b10],textarea.is-error[data-v-67317b10]{border-color:#fd397a;box-shadow:0 1px 5px rgba(253,57,122,.3)}input[type=email][data-v-67317b10]::-moz-placeholder,input[type=number][data-v-67317b10]::-moz-placeholder,input[type=password][data-v-67317b10]::-moz-placeholder,input[type=text][data-v-67317b10]::-moz-placeholder,textarea[data-v-67317b10]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-67317b10]:-ms-input-placeholder,input[type=number][data-v-67317b10]:-ms-input-placeholder,input[type=password][data-v-67317b10]:-ms-input-placeholder,input[type=text][data-v-67317b10]:-ms-input-placeholder,textarea[data-v-67317b10]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-67317b10]::placeholder,input[type=number][data-v-67317b10]::placeholder,input[type=password][data-v-67317b10]::placeholder,input[type=text][data-v-67317b10]::placeholder,textarea[data-v-67317b10]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-67317b10]:focus,input[type=number][data-v-67317b10]:focus,input[type=password][data-v-67317b10]:focus,input[type=text][data-v-67317b10]:focus,textarea[data-v-67317b10]:focus{border-color:#00bc7e;box-shadow:0 1px 5px rgba(0,188,126,.3)}input[type=email][disabled][data-v-67317b10],input[type=number][disabled][data-v-67317b10],input[type=password][disabled][data-v-67317b10],input[type=text][disabled][data-v-67317b10],textarea[disabled][data-v-67317b10]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}.additional-link[data-v-67317b10]{font-size:1em;margin-top:50px;display:block;color:#1b2539}.additional-link a[data-v-67317b10],.additional-link b[data-v-67317b10]{color:#00bc7e;cursor:pointer}.additional-link a[data-v-67317b10]:hover,.additional-link b[data-v-67317b10]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-67317b10]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-67317b10]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-67317b10],.form textarea[data-v-67317b10]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-67317b10]{display:block}.form.block-form .block-wrapper label[data-v-67317b10]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-67317b10]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-67317b10]{display:block}.form.inline-form .input-wrapper .error-message[data-v-67317b10]{position:relative;bottom:0}.form .button[data-v-67317b10]{padding:14px 32px}.single-line-form[data-v-67317b10]{display:block}.single-line-form .submit-button[data-v-67317b10]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-67317b10],input[type=number][data-v-67317b10],input[type=password][data-v-67317b10],input[type=text][data-v-67317b10],textarea[data-v-67317b10]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-67317b10]{display:block}}@media (prefers-color-scheme:dark){.form .input-help[data-v-67317b10]{color:#7d858c}.form.block-form .block-wrapper label[data-v-67317b10],.form .inline-wrapper .switch-label .input-label[data-v-67317b10]{color:#bec6cf}input[type=email][data-v-67317b10],input[type=number][data-v-67317b10],input[type=password][data-v-67317b10],input[type=text][data-v-67317b10],textarea[data-v-67317b10]{border-color:#1e2024;background:#1e2024;color:#bec6cf}input[type=email][data-v-67317b10]::-moz-placeholder,input[type=number][data-v-67317b10]::-moz-placeholder,input[type=password][data-v-67317b10]::-moz-placeholder,input[type=text][data-v-67317b10]::-moz-placeholder,textarea[data-v-67317b10]::-moz-placeholder{color:#7d858c}input[type=email][data-v-67317b10]:-ms-input-placeholder,input[type=number][data-v-67317b10]:-ms-input-placeholder,input[type=password][data-v-67317b10]:-ms-input-placeholder,input[type=text][data-v-67317b10]:-ms-input-placeholder,textarea[data-v-67317b10]:-ms-input-placeholder{color:#7d858c}input[type=email][data-v-67317b10]::placeholder,input[type=number][data-v-67317b10]::placeholder,input[type=password][data-v-67317b10]::placeholder,input[type=text][data-v-67317b10]::placeholder,textarea[data-v-67317b10]::placeholder{color:#7d858c}input[type=email][disabled][data-v-67317b10],input[type=number][disabled][data-v-67317b10],input[type=password][disabled][data-v-67317b10],input[type=text][disabled][data-v-67317b10],textarea[disabled][data-v-67317b10]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}}.plan-title[data-v-67317b10]{text-align:center;max-width:600px;margin:0 auto 80px}.plan-title circle[data-v-67317b10],.plan-title line[data-v-67317b10],.plan-title path[data-v-67317b10],.plan-title polyline[data-v-67317b10],.plan-title rect[data-v-67317b10]{color:#00bc7e}.plan-title h1[data-v-67317b10]{font-size:2.375em;font-weight:800;margin-bottom:5px}.plan-title h2[data-v-67317b10]{font-size:1.25em;font-weight:500}@media (prefers-color-scheme:dark){.plan-title h1[data-v-67317b10]{color:#bec6cf}.plan-title h2[data-v-67317b10]{color:#7d858c}}",""])},wz3J:function(a,t,e){"use strict";var i=e("Nv84"),n=e("CjXH"),r=e("L2JU"),o=e("vDqi"),p=e.n(o);function l(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,i)}return e}function d(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var s={name:"PlanPricingTables",components:{HardDriveIcon:n.v,ButtonBase:i.a},data:function(){return{plans:void 0}},computed:function(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){d(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}({},Object(r.b)(["user"])),methods:{selectPlan:function(a){this.$emit("selected-plan",a),this.$router.push({name:"UpgradeBilling"})}},created:function(){var a=this;p.a.get("/api/public/pricing").then((function(t){a.plans=t.data.filter((function(t){return t.data.attributes.capacity>a.user.data.attributes.storage_capacity})),a.$emit("load",!1)}))}},b=(e("VNWY"),e("KHd+")),c=Object(b.a)(s,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return a.plans?e("div",{staticClass:"plans-wrapper"},a._l(a.plans,(function(t,i){return e("article",{key:i,staticClass:"plan"},[e("div",{staticClass:"plan-wrapper"},[e("header",{staticClass:"plan-header"},[e("div",{staticClass:"icon"},[e("hard-drive-icon",{attrs:{size:"26"}})],1),a._v(" "),e("h1",{staticClass:"title"},[a._v(a._s(t.data.attributes.name))]),a._v(" "),e("h2",{staticClass:"description"},[a._v(a._s(t.data.attributes.description))])]),a._v(" "),e("section",{staticClass:"plan-features"},[e("b",{staticClass:"storage-size"},[a._v(a._s(t.data.attributes.capacity_formatted))]),a._v(" "),e("span",{staticClass:"storage-description"},[a._v(a._s(a.$t("page_pricing_tables.storage_capacity")))])]),a._v(" "),e("footer",{staticClass:"plan-footer"},[e("b",{staticClass:"price"},[a._v("\n                    "+a._s(t.data.attributes.price)+"/"+a._s(a.$t("global.monthly_ac"))+"\n                    "),t.data.attributes.tax_rates.length>0?e("small",{staticClass:"vat-disclaimer"},[a._v(a._s(a.$t("page_pricing_tables.vat_excluded")))]):a._e()]),a._v(" "),e("ButtonBase",{staticClass:"sign-in-button",attrs:{type:"submit","button-style":"secondary"},nativeOn:{click:function(e){return a.selectPlan(t)}}},[a._v("\n                    "+a._s(a.$t("global.get_it"))+"\n                ")])],1)])])})),0):a._e()}),[],!1,null,"8b2ebeb2",null);t.a=c.exports}}]);
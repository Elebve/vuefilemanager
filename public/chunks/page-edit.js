(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"2Sb1":function(a,t,e){"use strict";var n={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:e("CjXH").d}},i=(e("qf9i"),e("KHd+")),r=Object(i.a)(n,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"page-header"},[a.canBack?e("div",{staticClass:"go-back",on:{click:function(t){return a.$router.back()}}},[e("chevron-left-icon",{attrs:{size:"17"}})],1):a._e(),a._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[a._v(a._s(a.title))])])])}),[],!1,null,"aafe7e24",null);t.a=r.exports},"3Idf":function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".page-header[data-v-aafe7e24] {\n  display: flex;\n  align-items: center;\n  background: white;\n  z-index: 9;\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.page-header .title[data-v-aafe7e24] {\n  font-size: 1.125em;\n  font-weight: 700;\n  color: #1B2539;\n}\n.page-header .go-back[data-v-aafe7e24] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n.page-header .go-back svg[data-v-aafe7e24] {\n  vertical-align: middle;\n  margin-top: -4px;\n}\n@media only screen and (max-width: 960px) {\n.page-header .title[data-v-aafe7e24] {\n    font-size: 1.125em;\n}\n}\n@media only screen and (max-width: 690px) {\n.page-header[data-v-aafe7e24] {\n    display: none;\n}\n}\n@media (prefers-color-scheme: dark) {\n.page-header[data-v-aafe7e24] {\n    background: #111314;\n}\n.page-header .title[data-v-aafe7e24] {\n    color: #bec6cf;\n}\n.page-header .icon path[data-v-aafe7e24] {\n    fill: #00BC7E;\n}\n}\n",""])},"6tb/":function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,'.form[data-v-392a47b2] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-392a47b2] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-392a47b2] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-392a47b2] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-392a47b2] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-392a47b2] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-392a47b2] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-392a47b2] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-392a47b2]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-392a47b2] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-392a47b2] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-392a47b2] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-392a47b2] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-392a47b2] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-392a47b2] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-392a47b2] {\n  margin-left: 20px;\n}\n.error-message[data-v-392a47b2] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-392a47b2] {\n  width: 100%;\n}\ntextarea[data-v-392a47b2],\ninput[type="password"][data-v-392a47b2],\ninput[type="text"][data-v-392a47b2],\ninput[type="number"][data-v-392a47b2],\ninput[type="email"][data-v-392a47b2] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-392a47b2],\ninput[type="password"].is-error[data-v-392a47b2],\ninput[type="text"].is-error[data-v-392a47b2],\ninput[type="number"].is-error[data-v-392a47b2],\ninput[type="email"].is-error[data-v-392a47b2] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-392a47b2]::-webkit-input-placeholder, input[type="password"][data-v-392a47b2]::-webkit-input-placeholder, input[type="text"][data-v-392a47b2]::-webkit-input-placeholder, input[type="number"][data-v-392a47b2]::-webkit-input-placeholder, input[type="email"][data-v-392a47b2]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-392a47b2]::-moz-placeholder, input[type="password"][data-v-392a47b2]::-moz-placeholder, input[type="text"][data-v-392a47b2]::-moz-placeholder, input[type="number"][data-v-392a47b2]::-moz-placeholder, input[type="email"][data-v-392a47b2]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-392a47b2]:-ms-input-placeholder, input[type="password"][data-v-392a47b2]:-ms-input-placeholder, input[type="text"][data-v-392a47b2]:-ms-input-placeholder, input[type="number"][data-v-392a47b2]:-ms-input-placeholder, input[type="email"][data-v-392a47b2]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-392a47b2]::-ms-input-placeholder, input[type="password"][data-v-392a47b2]::-ms-input-placeholder, input[type="text"][data-v-392a47b2]::-ms-input-placeholder, input[type="number"][data-v-392a47b2]::-ms-input-placeholder, input[type="email"][data-v-392a47b2]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-392a47b2]::placeholder,\ninput[type="password"][data-v-392a47b2]::placeholder,\ninput[type="text"][data-v-392a47b2]::placeholder,\ninput[type="number"][data-v-392a47b2]::placeholder,\ninput[type="email"][data-v-392a47b2]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-392a47b2]:focus,\ninput[type="password"][data-v-392a47b2]:focus,\ninput[type="text"][data-v-392a47b2]:focus,\ninput[type="number"][data-v-392a47b2]:focus,\ninput[type="email"][data-v-392a47b2]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-392a47b2],\ninput[type="password"][disabled][data-v-392a47b2],\ninput[type="text"][disabled][data-v-392a47b2],\ninput[type="number"][disabled][data-v-392a47b2],\ninput[type="email"][disabled][data-v-392a47b2] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-392a47b2] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-392a47b2], .additional-link a[data-v-392a47b2] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-392a47b2]:hover, .additional-link a[data-v-392a47b2]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-392a47b2] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-392a47b2] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-392a47b2], .form textarea[data-v-392a47b2] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-392a47b2] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-392a47b2] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-392a47b2] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-392a47b2] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-392a47b2] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-392a47b2] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-392a47b2] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-392a47b2] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-392a47b2],\n  input[type="password"][data-v-392a47b2],\n  input[type="number"][data-v-392a47b2],\n  input[type="text"][data-v-392a47b2],\n  input[type="email"][data-v-392a47b2] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-392a47b2] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-392a47b2] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-392a47b2] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-392a47b2] {\n    color: #bec6cf;\n}\ntextarea[data-v-392a47b2],\n  input[type="password"][data-v-392a47b2],\n  input[type="text"][data-v-392a47b2],\n  input[type="number"][data-v-392a47b2],\n  input[type="email"][data-v-392a47b2] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-392a47b2]::-webkit-input-placeholder, input[type="password"][data-v-392a47b2]::-webkit-input-placeholder, input[type="text"][data-v-392a47b2]::-webkit-input-placeholder, input[type="number"][data-v-392a47b2]::-webkit-input-placeholder, input[type="email"][data-v-392a47b2]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-392a47b2]::-moz-placeholder, input[type="password"][data-v-392a47b2]::-moz-placeholder, input[type="text"][data-v-392a47b2]::-moz-placeholder, input[type="number"][data-v-392a47b2]::-moz-placeholder, input[type="email"][data-v-392a47b2]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-392a47b2]:-ms-input-placeholder, input[type="password"][data-v-392a47b2]:-ms-input-placeholder, input[type="text"][data-v-392a47b2]:-ms-input-placeholder, input[type="number"][data-v-392a47b2]:-ms-input-placeholder, input[type="email"][data-v-392a47b2]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-392a47b2]::-ms-input-placeholder, input[type="password"][data-v-392a47b2]::-ms-input-placeholder, input[type="text"][data-v-392a47b2]::-ms-input-placeholder, input[type="number"][data-v-392a47b2]::-ms-input-placeholder, input[type="email"][data-v-392a47b2]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-392a47b2]::placeholder,\n  input[type="password"][data-v-392a47b2]::placeholder,\n  input[type="text"][data-v-392a47b2]::placeholder,\n  input[type="number"][data-v-392a47b2]::placeholder,\n  input[type="email"][data-v-392a47b2]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-392a47b2],\n  input[type="password"][disabled][data-v-392a47b2],\n  input[type="text"][disabled][data-v-392a47b2],\n  input[type="number"][disabled][data-v-392a47b2],\n  input[type="email"][disabled][data-v-392a47b2] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n',""])},"92Jy":function(a,t,e){"use strict";var n=e("qphJ");e.n(n).a},Idvm:function(a,t,e){var n=e("lig4");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(a.exports=n.locals)},KPNK:function(a,t,e){var n=e("3Idf");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(a.exports=n.locals)},THmQ:function(a,t,e){"use strict";var n={name:"SectionTitle"},i=(e("92Jy"),e("KHd+")),r=Object(i.a)(n,(function(){var a=this.$createElement;return(this._self._c||a)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"69d97df2",null);t.a=r.exports},Xk6H:function(a,t,e){"use strict";var n=e("Idvm");e.n(n).a},btva:function(a,t,e){"use strict";e.r(t);var n=e("A5+z"),i=e("eZ9V"),r=e("TJPC"),o=e("xxrA"),p=e("D62o"),l=e("THmQ"),d=e("Nv84"),s=e("2Sb1"),c=e("zTYo"),b=e("vDqi"),u=e.n(b),m={name:"PageEdit",components:{ValidationProvider:n.ValidationProvider,ValidationObserver:n.ValidationObserver,FormLabel:i.a,SectionTitle:l.a,MobileHeader:p.a,SwitchInput:o.a,PageHeader:s.a,ButtonBase:d.a,required:r.a,Spinner:c.a},data:function(){return{isLoading:!0,page:void 0}},methods:{changeStatus:function(a){this.$updateText("/pages/"+this.$route.params.slug,"visibility",a)}},created:function(){var a=this;u.a.get("/api/pages/"+this.$route.params.slug).then((function(t){a.page=t.data,a.isLoading=!1}))}},v=(e("ynCS"),e("KHd+")),f=Object(v.a)(m,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"single-page"}},[!a.isLoading&&a.page?e("div",{attrs:{id:"page-content"}},[e("MobileHeader",{attrs:{title:a.$router.currentRoute.meta.title}}),a._v(" "),e("PageHeader",{attrs:{title:a.$router.currentRoute.meta.title}}),a._v(" "),e("div",{staticClass:"content-page"},[e("ValidationObserver",{ref:"personalInformation",staticClass:"form block-form form-fixed-width",attrs:{tag:"form"},scopedSlots:a._u([{key:"default",fn:function(t){t.invalid;return[e("FormLabel",[a._v("\n                    "+a._s(a.page.data.attributes.title)+"\n                ")]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("div",{staticClass:"input-wrapper"},[e("div",{staticClass:"inline-wrapper"},[e("div",{staticClass:"switch-label"},[e("label",{staticClass:"input-label"},[a._v(a._s(a.$t("admin_pages.form.visibility"))+":")]),a._v(" "),e("small",{staticClass:"input-help"},[a._v(a._s(a.$t("admin_pages.form.visibility_help")))])]),a._v(" "),e("SwitchInput",{staticClass:"switch",attrs:{state:a.page.data.attributes.visibility},on:{input:a.changeStatus}})],1)])]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("admin_pages.form.title"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Name",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var n=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.page.data.attributes.title,expression:"page.data.attributes.title"}],class:{"is-error":n[0]},attrs:{placeholder:a.$t("admin_pages.form.title_plac"),type:"text"},domProps:{value:a.page.data.attributes.title},on:{input:[function(t){t.target.composing||a.$set(a.page.data.attributes,"title",t.target.value)},function(t){return a.$updateText("/pages/"+a.$route.params.slug,"title",a.page.data.attributes.title)}]}}),a._v(" "),n[0]?e("span",{staticClass:"error-message"},[a._v(a._s(n[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("admin_pages.form.slug"))+":")]),a._v(" "),e("div",{staticClass:"input-wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.page.data.attributes.slug,expression:"page.data.attributes.slug"}],attrs:{type:"text",disabled:""},domProps:{value:a.page.data.attributes.slug},on:{input:function(t){t.target.composing||a.$set(a.page.data.attributes,"slug",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("admin_pages.form.content"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Name",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var n=t.errors;return[e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.page.data.attributes.content,expression:"page.data.attributes.content"}],class:{"is-error":n[0]},attrs:{placeholder:a.$t("admin_pages.form.content_plac"),rows:"18"},domProps:{value:a.page.data.attributes.content},on:{input:[function(t){t.target.composing||a.$set(a.page.data.attributes,"content",t.target.value)},function(t){return a.$updateText("/pages/"+a.$route.params.slug,"content",a.page.data.attributes.content)}]}}),a._v(" "),n[0]?e("span",{staticClass:"error-message"},[a._v(a._s(n[0]))]):a._e()]}}],null,!0)})],1)]}}],null,!1,3800545431)})],1)],1):a._e(),a._v(" "),a.isLoading?e("div",{attrs:{id:"loader"}},[e("Spinner")],1):a._e()])}),[],!1,null,"392a47b2",null);t.default=f.exports},dGrK:function(a,t,e){var n=e("6tb/");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(a.exports=n.locals)},eZ9V:function(a,t,e){"use strict";var n={name:"FormLabel",components:{Edit2Icon:e("CjXH").m}},i=(e("Xk6H"),e("KHd+")),r=Object(i.a)(n,(function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"form-label"},[t("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),t("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);t.a=r.exports},lW02:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".text-label[data-v-69d97df2] {\n  font-size: 0.75em;\n  color: #AFAFAF;\n  font-weight: 700;\n  display: block;\n  margin-bottom: 20px;\n}\n@media (prefers-color-scheme: dark) {\n.text-label[data-v-69d97df2] {\n    color: #00BC7E;\n}\n}\n",""])},lig4:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".form-label[data-v-c1157a8e] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-label .icon[data-v-c1157a8e] {\n  margin-right: 10px;\n}\n.form-label .icon path[data-v-c1157a8e] {\n  stroke: #00BC7E;\n}\n.form-label .label[data-v-c1157a8e] {\n  font-size: 1.125em;\n  font-weight: 700;\n}\n@media (prefers-color-scheme: dark) {\n.form-label .label[data-v-c1157a8e] {\n    color: #bec6cf;\n}\n}\n",""])},qf9i:function(a,t,e){"use strict";var n=e("KPNK");e.n(n).a},qphJ:function(a,t,e){var n=e("lW02");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(a.exports=n.locals)},ynCS:function(a,t,e){"use strict";var n=e("dGrK");e.n(n).a}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+Pqb":function(e,t,a){"use strict";var i={name:"ProgressBar",props:["progress"]},o=(a("2jb4"),a("KHd+")),r=Object(o.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"progress-bar"},[t("span",{style:{width:this.progress+"%"}})])}),[],!1,null,"9f98bf3e",null);t.a=r.exports},"+t0u":function(e,t,a){var i=a("QO4y");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(e.exports=i.locals)},"13Td":function(e,t,a){"use strict";var i={name:"SetupBox",props:["title","description","theme"]},o=(a("jS71"),a("KHd+")),r=Object(o.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"setup-box",class:e.theme},[a("b",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),a("p",{staticClass:"description"},[e._v(e._s(e.description))]),e._v(" "),e._t("default")],2)}),[],!1,null,"664a78dc",null);t.a=r.exports},"2jb4":function(e,t,a){"use strict";var i=a("i5u3");a.n(i).a},"5BDI":function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".progress-bar[data-v-9f98bf3e]{width:100%;height:5px;background:#f4f5f6;margin-top:5px;border-radius:10px}.progress-bar span[data-v-9f98bf3e]{background:#00bc7e;display:block;height:100%;border-radius:10px;max-width:100%}@media (prefers-color-scheme:dark){.progress-bar[data-v-9f98bf3e]{background:#1e2024}}@media only screen and (min-width:680px) and (prefers-color-scheme:dark){.progress-bar[data-v-9f98bf3e]{background:#1e2024}}",""])},"5pbA":function(e,t,a){"use strict";var i=a("+t0u");a.n(i).a},"6gqG":function(e,t,a){var i=a("ydEr");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(e.exports=i.locals)},"7OGm":function(e,t,a){"use strict";var i=a("6gqG");a.n(i).a},"D+dh":function(e,t,a){"use strict";var i=a("kvrn"),o=a.n(i),r={name:"ImageInput",props:["image","error"],components:{ImageIcon:{name:"ImageIcon",props:{size:{type:String,default:"24",validator:function(e){return!isNaN(e)||e.length>=2&&!isNaN(e.slice(0,e.length-1))&&"x"===e.slice(-1)}}},functional:!0,render:function(e,t){var a="x"===t.props.size.slice(-1)?t.props.size.slice(0,t.props.size.length-1)+"em":parseInt(t.props.size)+"px",i=t.data.attrs||{};return i.width=i.width||a,i.height=i.height||a,t.data.attrs=i,e("svg",o()([{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},class:"feather feather-image"},t.data]),[e("rect",{attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}}),e("circle",{attrs:{cx:"8.5",cy:"8.5",r:"1.5"}}),e("polyline",{attrs:{points:"21 15 16 10 5 21"}})])}}},data:function(){return{imagePreview:void 0}},computed:{isData:function(){return void 0!==this.imagePreview&&""!==this.imagePreview}},methods:{showImagePreview:function(e){var t=this,a=e.target.files[0].name,i=a.substring(a.lastIndexOf(".")+1).toLowerCase();if(["png","jpg","jpeg","svg"].includes(i)){var o=e.target.files[0],r=new FileReader;r.onload=function(){return t.imagePreview=r.result},r.readAsDataURL(o),this.$emit("input",e.target.files[0])}else alert(this.$t("validation_errors.wrong_image"))}},created:function(){this.image&&(this.imagePreview=this.image)}},n=(a("cO+9"),a("KHd+")),s=Object(n.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dropzone",class:{"is-error":e.error}},[a("input",{ref:"file",staticClass:"dummy",attrs:{type:"file"},on:{change:function(t){return e.showImagePreview(t)}}}),e._v(" "),e.imagePreview?a("img",{ref:"image",staticClass:"image-preview",attrs:{src:e.imagePreview}}):e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isData,expression:"! isData"}],staticClass:"dropzone-message"},[a("image-icon",{staticClass:"icon-upload",attrs:{size:"28"}}),e._v(" "),a("span",{staticClass:"dropzone-title"},[e._v("\n            "+e._s(e.$t("input_image.title"))+"\n        ")]),e._v(" "),a("span",{staticClass:"dropzone-description"},[e._v("\n            "+e._s(e.$t("input_image.supported"))+"\n        ")])],1)])}),[],!1,null,"24846626",null);t.a=s.exports},FEcZ:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".setup-box[data-v-664a78dc]{padding:20px;border-radius:8px;margin-bottom:30px}.setup-box .title[data-v-664a78dc]{font-size:1.3125em;margin-bottom:5px;display:block;font-weight:700}.setup-box .description[data-v-664a78dc]{font-size:.9375em;line-height:1.5;margin-bottom:20px}.setup-box.base[data-v-664a78dc],.setup-box.danger[data-v-664a78dc]{background:#f4f5f6}.setup-box.danger .title[data-v-664a78dc]{color:#fd397a}.setup-box[data-v-664a78dc] .input-area,.setup-box[data-v-664a78dc] input .input-area,.setup-box[data-v-664a78dc] input[type=number],.setup-box[data-v-664a78dc] input[type=text]{background:#fff}.setup-box[data-v-664a78dc] .form{margin-top:20px}.setup-box[data-v-664a78dc] .form.block-form{max-width:450px}.setup-box[data-v-664a78dc] .form.block-form .single-line-form{display:flex}.setup-box[data-v-664a78dc] .form.block-form .single-line-form .submit-button{margin-left:20px}@media only screen and (max-width:960px){.setup-box[data-v-664a78dc] .form.block-form{max-width:100%}.setup-box[data-v-664a78dc] .form input{min-width:0}}@media only screen and (max-width:690px){.setup-box[data-v-664a78dc]{padding:15px}.setup-box .title[data-v-664a78dc]{font-size:1.0625em;margin-bottom:10px}.setup-box .description[data-v-664a78dc]{font-size:.875em}.setup-box[data-v-664a78dc] .form.block-form .single-line-form{display:block}.setup-box[data-v-664a78dc] .form.block-form .single-line-form .submit-button{margin-left:0;margin-top:10px}}@media (prefers-color-scheme:dark){.setup-box.base[data-v-664a78dc],.setup-box.danger[data-v-664a78dc]{background:#1e2024}.setup-box[data-v-664a78dc] .input-area,.setup-box[data-v-664a78dc] input .input-area,.setup-box[data-v-664a78dc] input[type=number],.setup-box[data-v-664a78dc] input[type=text]{background:#111314}}",""])},Idvm:function(e,t,a){var i=a("lig4");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(e.exports=i.locals)},KnjL:function(e,t,a){"use strict";var i={name:"InfoBox",props:["type"]},o=(a("7OGm"),a("KHd+")),r=Object(o.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"bf43be5e",null);t.a=r.exports},LE5O:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".detail-storage-item[data-v-56af1b6e]{margin-bottom:35px}.detail-storage-item.disk .icon circle[data-v-56af1b6e],.detail-storage-item.disk .icon line[data-v-56af1b6e],.detail-storage-item.disk .icon path[data-v-56af1b6e],.detail-storage-item.disk .icon polygon[data-v-56af1b6e],.detail-storage-item.disk .icon polyline[data-v-56af1b6e],.detail-storage-item.disk .icon rect[data-v-56af1b6e]{stroke:#1b2539}.detail-storage-item.disk .storage-progress[data-v-56af1b6e] span{background:#1b2539}.detail-storage-item.images .icon circle[data-v-56af1b6e],.detail-storage-item.images .icon line[data-v-56af1b6e],.detail-storage-item.images .icon path[data-v-56af1b6e],.detail-storage-item.images .icon polygon[data-v-56af1b6e],.detail-storage-item.images .icon polyline[data-v-56af1b6e],.detail-storage-item.images .icon rect[data-v-56af1b6e]{stroke:#9d66fe}.detail-storage-item.images .storage-progress[data-v-56af1b6e] span{background:#9d66fe}.detail-storage-item.videos .icon circle[data-v-56af1b6e],.detail-storage-item.videos .icon line[data-v-56af1b6e],.detail-storage-item.videos .icon path[data-v-56af1b6e],.detail-storage-item.videos .icon polygon[data-v-56af1b6e],.detail-storage-item.videos .icon polyline[data-v-56af1b6e],.detail-storage-item.videos .icon rect[data-v-56af1b6e]{stroke:#ffbd2d}.detail-storage-item.videos .storage-progress[data-v-56af1b6e] span{background:#ffbd2d}.detail-storage-item.audios .icon circle[data-v-56af1b6e],.detail-storage-item.audios .icon line[data-v-56af1b6e],.detail-storage-item.audios .icon path[data-v-56af1b6e],.detail-storage-item.audios .icon polygon[data-v-56af1b6e],.detail-storage-item.audios .icon polyline[data-v-56af1b6e],.detail-storage-item.audios .icon rect[data-v-56af1b6e]{stroke:#fe66a1}.detail-storage-item.audios .storage-progress[data-v-56af1b6e] span{background:#fe66a1}.detail-storage-item.documents .icon circle[data-v-56af1b6e],.detail-storage-item.documents .icon line[data-v-56af1b6e],.detail-storage-item.documents .icon path[data-v-56af1b6e],.detail-storage-item.documents .icon polygon[data-v-56af1b6e],.detail-storage-item.documents .icon polyline[data-v-56af1b6e],.detail-storage-item.documents .icon rect[data-v-56af1b6e]{stroke:#fe6057}.detail-storage-item.documents .storage-progress[data-v-56af1b6e] span{background:#fe6057}.detail-storage-item.others .icon circle[data-v-56af1b6e],.detail-storage-item.others .icon line[data-v-56af1b6e],.detail-storage-item.others .icon path[data-v-56af1b6e],.detail-storage-item.others .icon polygon[data-v-56af1b6e],.detail-storage-item.others .icon polyline[data-v-56af1b6e],.detail-storage-item.others .icon rect[data-v-56af1b6e]{stroke:#1b2539}.detail-storage-item.others .storage-progress[data-v-56af1b6e] span{background:#1b2539}.header-storage-item[data-v-56af1b6e]{display:flex;align-items:flex-start;margin-bottom:10px}.header-storage-item .icon[data-v-56af1b6e]{width:35px}.header-storage-item .type[data-v-56af1b6e]{font-size:.9375em;color:#1b2539}.header-storage-item .total-size[data-v-56af1b6e]{font-size:.625em;display:block;color:rgba(27,37,57,.7)}@media (prefers-color-scheme:dark){.header-storage-item .type[data-v-56af1b6e]{color:#bec6cf}.header-storage-item .total-size[data-v-56af1b6e]{color:#7d858c}.detail-storage-item.disk .icon circle[data-v-56af1b6e],.detail-storage-item.disk .icon line[data-v-56af1b6e],.detail-storage-item.disk .icon path[data-v-56af1b6e],.detail-storage-item.disk .icon polygon[data-v-56af1b6e],.detail-storage-item.disk .icon polyline[data-v-56af1b6e],.detail-storage-item.disk .icon rect[data-v-56af1b6e],.detail-storage-item.others .icon circle[data-v-56af1b6e],.detail-storage-item.others .icon line[data-v-56af1b6e],.detail-storage-item.others .icon path[data-v-56af1b6e],.detail-storage-item.others .icon polygon[data-v-56af1b6e],.detail-storage-item.others .icon polyline[data-v-56af1b6e],.detail-storage-item.others .icon rect[data-v-56af1b6e]{stroke:#41454e}.detail-storage-item.disk .storage-progress[data-v-56af1b6e] span,.detail-storage-item.others .storage-progress[data-v-56af1b6e] span{background:#41454e}}",""])},QO4y:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,"",""])},Xk6H:function(e,t,a){"use strict";var i=a("Idvm");a.n(i).a},b0xl:function(e,t,a){"use strict";var i=a("oyp5");a.n(i).a},"cO+9":function(e,t,a){"use strict";var i=a("gZrO");a.n(i).a},eZ9V:function(e,t,a){"use strict";var i={name:"FormLabel",components:{Edit2Icon:a("CjXH").m}},o=(a("Xk6H"),a("KHd+")),r=Object(o.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form-label"},[t("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),t("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);t.a=r.exports},eaI4:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".form[data-v-24d9fd8e]{max-width:700px}.form.inline-form[data-v-24d9fd8e]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-24d9fd8e]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-24d9fd8e]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-24d9fd8e]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-24d9fd8e]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-24d9fd8e]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-24d9fd8e]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-24d9fd8e]:last-child{margin-bottom:0}.form.block-form .button[data-v-24d9fd8e]{margin-top:50px}.form .inline-wrapper[data-v-24d9fd8e]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-24d9fd8e]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-24d9fd8e]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-24d9fd8e]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-24d9fd8e]{display:flex}.single-line-form .submit-button[data-v-24d9fd8e]{margin-left:20px}.error-message[data-v-24d9fd8e]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-24d9fd8e]{width:100%}input[type=email][data-v-24d9fd8e],input[type=number][data-v-24d9fd8e],input[type=password][data-v-24d9fd8e],input[type=text][data-v-24d9fd8e],textarea[data-v-24d9fd8e]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-24d9fd8e],input[type=number].is-error[data-v-24d9fd8e],input[type=password].is-error[data-v-24d9fd8e],input[type=text].is-error[data-v-24d9fd8e],textarea.is-error[data-v-24d9fd8e]{border-color:#fd397a;box-shadow:0 1px 5px rgba(253,57,122,.3)}input[type=email][data-v-24d9fd8e]::-moz-placeholder,input[type=number][data-v-24d9fd8e]::-moz-placeholder,input[type=password][data-v-24d9fd8e]::-moz-placeholder,input[type=text][data-v-24d9fd8e]::-moz-placeholder,textarea[data-v-24d9fd8e]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-24d9fd8e]:-ms-input-placeholder,input[type=number][data-v-24d9fd8e]:-ms-input-placeholder,input[type=password][data-v-24d9fd8e]:-ms-input-placeholder,input[type=text][data-v-24d9fd8e]:-ms-input-placeholder,textarea[data-v-24d9fd8e]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-24d9fd8e]::placeholder,input[type=number][data-v-24d9fd8e]::placeholder,input[type=password][data-v-24d9fd8e]::placeholder,input[type=text][data-v-24d9fd8e]::placeholder,textarea[data-v-24d9fd8e]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-24d9fd8e]:focus,input[type=number][data-v-24d9fd8e]:focus,input[type=password][data-v-24d9fd8e]:focus,input[type=text][data-v-24d9fd8e]:focus,textarea[data-v-24d9fd8e]:focus{border-color:#00bc7e;box-shadow:0 1px 5px rgba(0,188,126,.3)}input[type=email][disabled][data-v-24d9fd8e],input[type=number][disabled][data-v-24d9fd8e],input[type=password][disabled][data-v-24d9fd8e],input[type=text][disabled][data-v-24d9fd8e],textarea[disabled][data-v-24d9fd8e]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}.additional-link[data-v-24d9fd8e]{font-size:1em;margin-top:50px;display:block;color:#1b2539}.additional-link a[data-v-24d9fd8e],.additional-link b[data-v-24d9fd8e]{color:#00bc7e;cursor:pointer}.additional-link a[data-v-24d9fd8e]:hover,.additional-link b[data-v-24d9fd8e]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-24d9fd8e]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-24d9fd8e]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-24d9fd8e],.form textarea[data-v-24d9fd8e]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-24d9fd8e]{display:block}.form.block-form .block-wrapper label[data-v-24d9fd8e]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-24d9fd8e]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-24d9fd8e]{display:block}.form.inline-form .input-wrapper .error-message[data-v-24d9fd8e]{position:relative;bottom:0}.form .button[data-v-24d9fd8e]{padding:14px 32px}.single-line-form[data-v-24d9fd8e]{display:block}.single-line-form .submit-button[data-v-24d9fd8e]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-24d9fd8e],input[type=number][data-v-24d9fd8e],input[type=password][data-v-24d9fd8e],input[type=text][data-v-24d9fd8e],textarea[data-v-24d9fd8e]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-24d9fd8e]{display:block}}@media (prefers-color-scheme:dark){.form .input-help[data-v-24d9fd8e]{color:#7d858c}.form.block-form .block-wrapper label[data-v-24d9fd8e],.form .inline-wrapper .switch-label .input-label[data-v-24d9fd8e]{color:#bec6cf}input[type=email][data-v-24d9fd8e],input[type=number][data-v-24d9fd8e],input[type=password][data-v-24d9fd8e],input[type=text][data-v-24d9fd8e],textarea[data-v-24d9fd8e]{border-color:#1e2024;background:#1e2024;color:#bec6cf}input[type=email][data-v-24d9fd8e]::-moz-placeholder,input[type=number][data-v-24d9fd8e]::-moz-placeholder,input[type=password][data-v-24d9fd8e]::-moz-placeholder,input[type=text][data-v-24d9fd8e]::-moz-placeholder,textarea[data-v-24d9fd8e]::-moz-placeholder{color:#7d858c}input[type=email][data-v-24d9fd8e]:-ms-input-placeholder,input[type=number][data-v-24d9fd8e]:-ms-input-placeholder,input[type=password][data-v-24d9fd8e]:-ms-input-placeholder,input[type=text][data-v-24d9fd8e]:-ms-input-placeholder,textarea[data-v-24d9fd8e]:-ms-input-placeholder{color:#7d858c}input[type=email][data-v-24d9fd8e]::placeholder,input[type=number][data-v-24d9fd8e]::placeholder,input[type=password][data-v-24d9fd8e]::placeholder,input[type=text][data-v-24d9fd8e]::placeholder,textarea[data-v-24d9fd8e]::placeholder{color:#7d858c}input[type=email][disabled][data-v-24d9fd8e],input[type=number][disabled][data-v-24d9fd8e],input[type=password][disabled][data-v-24d9fd8e],input[type=text][disabled][data-v-24d9fd8e],textarea[disabled][data-v-24d9fd8e]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}}.block-form[data-v-24d9fd8e]{max-width:100%}",""])},gZrO:function(e,t,a){var i=a("yORL");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(e.exports=i.locals)},gahf:function(e,t,a){"use strict";var i={name:"PageTabGroup"},o=(a("yI2c"),a("KHd+")),r=Object(o.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"page-tab-group"},[this._t("default")],2)}),[],!1,null,"1bb470e4",null);t.a=r.exports},i5u3:function(e,t,a){var i=a("5BDI");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(e.exports=i.locals)},jS71:function(e,t,a){"use strict";var i=a("wsaA");a.n(i).a},l48x:function(e,t,a){"use strict";var i=a("ySns");a.n(i).a},lig4:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".form-label[data-v-c1157a8e]{display:flex;align-items:center;margin-bottom:30px}.form-label .icon[data-v-c1157a8e]{margin-right:10px}.form-label .icon path[data-v-c1157a8e]{stroke:#00bc7e}.form-label .label[data-v-c1157a8e]{font-size:1.125em;font-weight:700}@media (prefers-color-scheme:dark){.form-label .label[data-v-c1157a8e]{color:#bec6cf}}",""])},mYUh:function(e,t,a){"use strict";a.r(t);var i=a("A5+z"),o=a("xnZf"),r=a("gahf"),n=a("4TWA"),s=a("D+dh"),d=a("eZ9V"),l=a("Nv84"),p=a("13Td"),c=a("qefO"),f=a("KnjL"),m=a("TJPC"),b=a("vDqi"),u=a.n(b),g=a("L2JU");function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function _(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var x={name:"AppAppearance",components:{ValidationObserver:i.ValidationObserver,ValidationProvider:i.ValidationProvider,StorageItemDetail:o.a,PageTabGroup:r.a,SelectInput:n.a,ImageInput:s.a,ButtonBase:l.a,FormLabel:d.a,SetupBox:p.a,required:m.a,PageTab:c.a,InfoBox:f.a},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){_(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},Object(g.b)(["countries"])),data:function(){return{isLoading:!0,billingInformation:void 0}},mounted:function(){var e=this;u.a.get("/api/settings",{params:{column:"billing_phone_number|billing_postal_code|billing_vat_number|billing_address|billing_country|billing_state|billing_city|billing_name"}}).then((function(t){e.isLoading=!1,e.billingInformation={billing_phone_number:t.data.billing_phone_number,billing_postal_code:t.data.billing_postal_code,billing_vat_number:t.data.billing_vat_number,billing_address:t.data.billing_address,billing_country:t.data.billing_country,billing_state:t.data.billing_state,billing_city:t.data.billing_city,billing_name:t.data.billing_name}}))}},h=(a("l48x"),a("KHd+")),y=Object(h.a)(x,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("PageTab",{staticClass:"form-fixed-width",attrs:{"is-loading":e.isLoading}},[e.billingInformation?a("PageTabGroup",[a("div",{staticClass:"form block-form"},[a("FormLabel",[e._v(e._s(e.$t("admin_settings.billings.section_company")))]),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.billings.company_name"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInformation.billing_name,expression:"billingInformation.billing_name"}],class:{"is-error":i[0]},attrs:{placeholder:e.$t("admin_settings.billings.company_name_plac"),type:"text"},domProps:{value:e.billingInformation.billing_name},on:{input:[function(t){t.target.composing||e.$set(e.billingInformation,"billing_name",t.target.value)},function(t){return e.$updateText("/settings","billing_name",e.billingInformation.billing_name)}]}}),e._v(" "),i[0]?a("span",{staticClass:"error-message"},[e._v(e._s(i[0]))]):e._e()]}}],null,!1,2655941275)})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.billings.vat"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Vat Number",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInformation.billing_vat_number,expression:"billingInformation.billing_vat_number"}],class:{"is-error":i[0]},attrs:{placeholder:e.$t("admin_settings.billings.vat_plac"),type:"text"},domProps:{value:e.billingInformation.billing_vat_number},on:{input:[function(t){t.target.composing||e.$set(e.billingInformation,"billing_vat_number",t.target.value)},function(t){return e.$updateText("/settings","billing_vat_number",e.billingInformation.billing_vat_number)}]}}),e._v(" "),i[0]?a("span",{staticClass:"error-message"},[e._v(e._s(i[0]))]):e._e()]}}],null,!1,1879464263)})],1),e._v(" "),a("FormLabel",{staticClass:"mt-70"},[e._v(e._s(e.$t("admin_settings.billings.section_billing")))]),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.billings.country"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Country",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("SelectInput",{attrs:{default:e.billingInformation.billing_country,options:e.countries,placeholder:e.$t("admin_settings.billings.country_plac"),isError:i[0]},on:{input:function(t){return e.$updateText("/settings","billing_country",e.billingInformation.billing_country)}},model:{value:e.billingInformation.billing_country,callback:function(t){e.$set(e.billingInformation,"billing_country",t)},expression:"billingInformation.billing_country"}}),e._v(" "),i[0]?a("span",{staticClass:"error-message"},[e._v(e._s(i[0]))]):e._e()]}}],null,!1,682383683)})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.billings.address"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Address",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInformation.billing_address,expression:"billingInformation.billing_address"}],class:{"is-error":i[0]},attrs:{placeholder:e.$t("admin_settings.billings.address_plac"),type:"text"},domProps:{value:e.billingInformation.billing_address},on:{input:[function(t){t.target.composing||e.$set(e.billingInformation,"billing_address",t.target.value)},function(t){return e.$updateText("/settings","billing_address",e.billingInformation.billing_address)}]}}),e._v(" "),i[0]?a("span",{staticClass:"error-message"},[e._v(e._s(i[0]))]):e._e()]}}],null,!1,1499604818)})],1),e._v(" "),a("div",{staticClass:"wrapper-inline"},[a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.billings.city"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing City",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInformation.billing_city,expression:"billingInformation.billing_city"}],class:{"is-error":i[0]},attrs:{placeholder:e.$t("admin_settings.billings.city_plac"),type:"text"},domProps:{value:e.billingInformation.billing_city},on:{input:[function(t){t.target.composing||e.$set(e.billingInformation,"billing_city",t.target.value)},function(t){return e.$updateText("/settings","billing_city",e.billingInformation.billing_city)}]}}),e._v(" "),i[0]?a("span",{staticClass:"error-message"},[e._v(e._s(i[0]))]):e._e()]}}],null,!1,2593429539)})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.billings.postal_code"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Postal Code",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInformation.billing_postal_code,expression:"billingInformation.billing_postal_code"}],class:{"is-error":i[0]},attrs:{placeholder:e.$t("admin_settings.billings.postal_code_plac"),type:"text"},domProps:{value:e.billingInformation.billing_postal_code},on:{input:[function(t){t.target.composing||e.$set(e.billingInformation,"billing_postal_code",t.target.value)},function(t){return e.$updateText("/settings","billing_postal_code",e.billingInformation.billing_postal_code)}]}}),e._v(" "),i[0]?a("span",{staticClass:"error-message"},[e._v(e._s(i[0]))]):e._e()]}}],null,!1,871160259)})],1)]),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.billings.state"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing State",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInformation.billing_state,expression:"billingInformation.billing_state"}],class:{"is-error":i[0]},attrs:{placeholder:e.$t("admin_settings.billings.state_plac"),type:"text"},domProps:{value:e.billingInformation.billing_state},on:{input:[function(t){t.target.composing||e.$set(e.billingInformation,"billing_state",t.target.value)},function(t){return e.$updateText("/settings","billing_state",e.billingInformation.billing_state)}]}}),e._v(" "),i[0]?a("span",{staticClass:"error-message"},[e._v(e._s(i[0]))]):e._e()]}}],null,!1,2085352051)})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.billings.phone_number"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Phone Number"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInformation.billing_phone_number,expression:"billingInformation.billing_phone_number"}],class:{"is-error":i[0]},attrs:{placeholder:e.$t("admin_settings.billings.phone_number_plac"),type:"text"},domProps:{value:e.billingInformation.billing_phone_number},on:{input:[function(t){t.target.composing||e.$set(e.billingInformation,"billing_phone_number",t.target.value)},function(t){return e.$updateText("/settings","billing_phone_number",e.billingInformation.billing_phone_number)}]}}),e._v(" "),i[0]?a("span",{staticClass:"error-message"},[e._v(e._s(i[0]))]):e._e()]}}],null,!1,1212048740)})],1)],1)]):e._e()],1)}),[],!1,null,"24d9fd8e",null);t.default=y.exports},oDxr:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".page-tab-group[data-v-1bb470e4]{margin-bottom:65px}",""])},oyp5:function(e,t,a){var i=a("LE5O");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(e.exports=i.locals)},qefO:function(e,t,a){"use strict";var i={name:"PageTab",props:["isLoading"],components:{Spinner:a("zTYo").a}},o=(a("5pbA"),a("KHd+")),r=Object(o.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-tab"},[t("div",{directives:[{name:"show",rawName:"v-show",value:this.isLoading,expression:"isLoading"}],attrs:{id:"loader"}},[t("Spinner")],1),this._v(" "),this._t("default")],2)}),[],!1,null,"4339da66",null);t.a=r.exports},wsaA:function(e,t,a){var i=a("FEcZ");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(e.exports=i.locals)},xnZf:function(e,t,a){"use strict";var i=a("+Pqb"),o=a("CjXH"),r={name:"StorageItemDetail",props:["percentage","title","type","used"],components:{HardDriveIcon:o.v,FileTextIcon:o.r,ProgressBar:i.a,MusicIcon:o.H,VideoIcon:o.X,ImageIcon:o.x,FileIcon:o.q}},n=(a("b0xl"),a("KHd+")),s=Object(n.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{staticClass:"detail-storage-item",class:e.type},[a("div",{staticClass:"header-storage-item"},[a("div",{staticClass:"icon"},["images"==e.type?a("image-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"videos"==e.type?a("video-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"audios"==e.type?a("music-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"documents"==e.type?a("file-text-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"others"==e.type?a("file-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"disk"==e.type?a("hard-drive-icon",{attrs:{size:"23"}}):e._e()],1),e._v(" "),a("div",{staticClass:"title"},[a("b",{staticClass:"type"},[e._v(e._s(e.title))]),e._v(" "),a("span",{staticClass:"total-size"},[e._v(e._s(e.used))])])]),e._v(" "),a("ProgressBar",{staticClass:"storage-progress",attrs:{progress:e.percentage}})],1)}),[],!1,null,"56af1b6e",null);t.a=s.exports},yI2c:function(e,t,a){"use strict";var i=a("zlQ3");a.n(i).a},yORL:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".dropzone[data-v-24846626]{border:1px dashed #a1abc2;border-radius:8px;position:relative;text-align:center;display:flex;align-items:center;min-height:175px}.dropzone.is-error[data-v-24846626]{border:2px dashed rgba(253,57,122,.3)}.dropzone.is-error .dropzone-title[data-v-24846626]{color:#fd397a}.dropzone.is-error .icon-upload circle[data-v-24846626],.dropzone.is-error .icon-upload polyline[data-v-24846626],.dropzone.is-error .icon-upload rect[data-v-24846626]{stroke:#fd397a}.dropzone input[type=file][data-v-24846626]{opacity:0;position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;width:100%;cursor:pointer}.dropzone .image-preview[data-v-24846626]{position:absolute;width:100%;height:100%;-o-object-fit:contain;object-fit:contain;left:0;padding:25px;display:block}.dropzone .image-preview.fit-image[data-v-24846626]{-o-object-fit:cover;object-fit:cover;border-radius:12px;overflow:hidden}.dropzone .dropzone-message[data-v-24846626]{padding:50px 0;width:100%}.dropzone .dropzone-message .icon-upload circle[data-v-24846626],.dropzone .dropzone-message .icon-upload polyline[data-v-24846626],.dropzone .dropzone-message .icon-upload rect[data-v-24846626]{stroke:#00bc7e}.dropzone .dropzone-message .dropzone-title[data-v-24846626]{font-size:1em;font-weight:700;display:block}.dropzone .dropzone-message .dropzone-description[data-v-24846626]{color:rgba(27,37,57,.7);font-size:.75em}@media (prefers-color-scheme:dark){.dropzone[data-v-24846626]{border-color:hsla(0,0%,100%,.2)}.dropzone .dropzone-message .icon-upload line[data-v-24846626],.dropzone .dropzone-message .icon-upload path[data-v-24846626],.dropzone .dropzone-message .icon-upload polyline[data-v-24846626]{stroke:#00bc7e}.dropzone .dropzone-message .dropzone-description[data-v-24846626]{color:#7d858c}}",""])},ySns:function(e,t,a){var i=a("eaI4");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(e.exports=i.locals)},ydEr:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".info-box[data-v-bf43be5e]{padding:20px;border-radius:8px;margin-bottom:32px;background:#f4f5f6;text-align:left}.info-box.error[data-v-bf43be5e]{background:rgba(253,57,122,.1)}.info-box.error a[data-v-bf43be5e],.info-box.error p[data-v-bf43be5e]{color:#fd397a}.info-box.error a[data-v-bf43be5e]{text-decoration:underline}.info-box p[data-v-bf43be5e]{font-size:.9375em;line-height:1.6;word-break:break-word;font-weight:600}.info-box p[data-v-bf43be5e] a{color:#00bc7e}.info-box a[data-v-bf43be5e],.info-box b[data-v-bf43be5e]{font-weight:700;color:#00bc7e}.info-box a[data-v-bf43be5e]{font-size:.9375em;line-height:1.6}.info-box ul[data-v-bf43be5e]{margin-top:15px}.info-box ul[data-v-bf43be5e],.info-box ul li[data-v-bf43be5e],.info-box ul li a[data-v-bf43be5e]{display:block}@media only screen and (max-width:690px){.info-box[data-v-bf43be5e]{padding:15px}}@media (prefers-color-scheme:dark){.info-box[data-v-bf43be5e]{background:#1e2024}.info-box p[data-v-bf43be5e],.info-box ul li[data-v-bf43be5e]{color:#bec6cf}}",""])},zlQ3:function(e,t,a){var i=a("oDxr");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(e.exports=i.locals)}}]);
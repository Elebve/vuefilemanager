(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"0a8W":function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".select[data-v-ff7bf0ec]{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.select-search[data-v-ff7bf0ec]{background:#fff;position:sticky;top:0;padding:13px}.select-search .search-input[data-v-ff7bf0ec]{border:1px solid transparent;background:#f4f5f6;transition:all .15s ease;font-size:.875em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%}.input-options[data-v-ff7bf0ec]{box-shadow:0 5px 15px rgba(0,0,0,.12);background:#fff;border-radius:8px;position:absolute;overflow:hidden;top:65px;left:0;right:0;z-index:9;max-height:295px;overflow-y:auto}.input-options .option-item[data-v-ff7bf0ec]{padding:13px 20px;display:block;cursor:pointer}.input-options .option-item[data-v-ff7bf0ec]:hover{color:#00bc7e;background:#f4f5f6}.input-options .option-item[data-v-ff7bf0ec]:last-child{border-bottom:none}.input-area[data-v-ff7bf0ec]{border:1px solid transparent;justify-content:space-between;box-shadow:0 1px 5px rgba(0,0,0,.12);align-items:center;border-radius:8px;padding:13px 20px;display:flex;outline:0;width:100%;cursor:pointer}.input-area[data-v-ff7bf0ec],.input-area .chevron[data-v-ff7bf0ec]{transition:all .15s ease}.input-area.is-active .chevron[data-v-ff7bf0ec]{transform:rotate(180deg)}.input-area.is-error[data-v-ff7bf0ec]{border-color:#fd397a;box-shadow:0 0 7px rgba(253,57,122,.3)}.option-icon[data-v-ff7bf0ec]{width:20px;display:inline-block;font-size:.625em}.option-icon svg[data-v-ff7bf0ec]{margin-top:-4px;vertical-align:middle}.option-icon svg circle[data-v-ff7bf0ec],.option-icon svg line[data-v-ff7bf0ec],.option-icon svg path[data-v-ff7bf0ec]{color:inherit}.option-value[data-v-ff7bf0ec]{font-size:.875em;font-weight:700;width:100%;vertical-align:middle}.option-value.placehoder[data-v-ff7bf0ec]{color:rgba(27,37,57,.5)}.slide-in-enter-active[data-v-ff7bf0ec]{transition:all .15s ease}.slide-in-enter[data-v-ff7bf0ec]{opacity:0;transform:translateY(-50px)}.dark .select-search[data-v-ff7bf0ec]{background:#1e2024}.dark .select-search .search-input[data-v-ff7bf0ec]{background:#151515}.dark .input-area[data-v-ff7bf0ec]{background:#1e2024;border-color:#1e2024}.dark .popup-wrapper .input-area[data-v-ff7bf0ec]{background:#25272c}.dark .input-options[data-v-ff7bf0ec]{background:#1e2024}.dark .input-options .option-item[data-v-ff7bf0ec]{border-bottom:none}.dark .input-options .option-item[data-v-ff7bf0ec]:hover{background:#2a2c32}.dark .input-options .option-item:hover .option-icon circle[data-v-ff7bf0ec],.dark .input-options .option-item:hover .option-icon path[data-v-ff7bf0ec]{color:inherit}.dark .input-options .option-item[data-v-ff7bf0ec]:last-child{border-bottom:none}.dark .option-value.placehoder[data-v-ff7bf0ec]{color:#7d858c}",""])},"0go1":function(a,e,t){"use strict";t("8j5K")},"36qJ":function(a,e,t){var r=t("TnoB");"string"==typeof r&&(r=[[a.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,o);r.locals&&(a.exports=r.locals)},"4TWA":function(a,e,t){"use strict";var r=t("CjXH"),o=t("LvDl"),i={name:"SelectInput",props:["placeholder","options","isError","default"],components:{Edit2Icon:r.u,UserIcon:r.nb,ChevronDownIcon:r.g},watch:{query:Object(o.debounce)((function(a){this.searchedResults=Object(o.omitBy)(this.options,(function(e){return!e.label.toLowerCase().includes(a.toLowerCase())}))}),200)},computed:{isSearching:function(){return this.searchedResults&&""!==this.query},optionList:function(){return this.isSearching?this.searchedResults:this.options}},data:function(){return{searchedResults:void 0,selected:void 0,isOpen:!1,query:""}},methods:{selectOption:function(a){this.$emit("input",a.value),this.selected=a,this.isOpen=!1},openMenu:function(){var a=this;this.isOpen=!this.isOpen,this.isOpen&&this.$nextTick((function(){return a.$refs.search.focus()}))}},created:function(){var a=this;this.default&&(this.selected=this.options.find((function(e){return e.value===a.default})))}},n=(t("zmzx"),t("KHd+")),s=Object(n.a)(i,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"select"},[t("div",{staticClass:"input-area",class:{"is-active":a.isOpen,"is-error":a.isError},on:{click:a.openMenu}},[a.selected?t("div",{staticClass:"selected"},[a.selected.icon?t("div",{staticClass:"option-icon"},["user"===a.selected.icon?t("user-icon",{staticClass:"text-theme dark-text-theme",attrs:{size:"14"}}):a._e(),a._v(" "),"user-edit"===a.selected.icon?t("edit2-icon",{staticClass:"text-theme dark-text-theme",attrs:{size:"14"}}):a._e()],1):a._e(),a._v(" "),t("span",{staticClass:"option-value"},[a._v(a._s(a.selected.label))])]):a._e(),a._v(" "),a.selected?a._e():t("div",{staticClass:"not-selected"},[t("span",{staticClass:"option-value placehoder"},[a._v(a._s(a.placeholder))])]),a._v(" "),t("chevron-down-icon",{staticClass:"chevron",attrs:{size:"19"}})],1),a._v(" "),t("transition",{attrs:{name:"slide-in"}},[a.isOpen?t("div",{staticClass:"input-options"},[a.options.length>5?t("div",{staticClass:"select-search"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.query,expression:"query"}],ref:"search",staticClass:"search-input focus-border-theme",attrs:{type:"text",placeholder:a.$t("select_search_placeholder")},domProps:{value:a.query},on:{input:function(e){e.target.composing||(a.query=e.target.value)}}})]):a._e(),a._v(" "),t("ul",{staticClass:"option-list"},a._l(a.optionList,(function(e,r){return t("li",{key:r,staticClass:"option-item",on:{click:function(t){return a.selectOption(e)}}},[e.icon?t("div",{staticClass:"option-icon"},["user"===e.icon?t("user-icon",{attrs:{size:"14"}}):a._e(),a._v(" "),"user-edit"===e.icon?t("edit2-icon",{attrs:{size:"14"}}):a._e()],1):a._e(),a._v(" "),t("span",{staticClass:"option-value"},[a._v(a._s(e.label))])])})),0)]):a._e()])],1)}),[],!1,null,"ff7bf0ec",null);e.a=s.exports},"8j5K":function(a,e,t){var r=t("qCtf");"string"==typeof r&&(r=[[a.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,o);r.locals&&(a.exports=r.locals)},"9aPE":function(a,e,t){var r=t("E+jl");"string"==typeof r&&(r=[[a.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,o);r.locals&&(a.exports=r.locals)},ASoH:function(a,e,t){"use strict";var r={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=(t("PCwK"),t("KHd+")),i=Object(o.a)(r,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("button",{staticClass:"button outline hover-text-theme hover-border-theme"},[t("span",{staticClass:"text-label"},[a._v(a._s(a.text))]),a._v(" "),a.loading?t("span",{staticClass:"icon"},[t("FontAwesomeIcon",{staticClass:"sync-alt svg-color-theme",attrs:{icon:"sync-alt"}})],1):a._e(),a._v(" "),!a.loading&&a.icon?t("span",{staticClass:"icon"},[t("FontAwesomeIcon",{staticClass:"svg-color-theme",attrs:{icon:a.icon}})],1):a._e()])}),[],!1,null,"e69ac918",null);e.a=i.exports},Dcbv:function(a,e,t){"use strict";t.r(e);var r=t("o0o1"),o=t.n(r),i=t("A5+z"),n=t("bDRN"),s=t("4TWA"),l=t("eZ9V"),c=t("KnjL"),d=t("j8qy"),p=t("ASoH"),u=t("CjXH"),v=t("aSdZ"),m=t("TJPC"),b=t("vDqi"),f=t.n(b);function h(a,e,t,r,o,i,n){try{var s=a[i](n),l=s.value}catch(a){return void t(a)}s.done?e(l):Promise.resolve(l).then(r,o)}var g={name:"EnvironmentSetup",components:{AuthContentWrapper:n.a,ValidationProvider:i.ValidationProvider,ValidationObserver:i.ValidationObserver,SettingsIcon:u.cb,SelectInput:s.a,AuthContent:d.a,AuthButton:p.a,FormLabel:l.a,required:m.a,InfoBox:c.a,Headline:v.a},watch:{"storage.driver":function(){this.storage.region=""},"storage.region":function(a){"spaces"===this.storage.driver&&(this.storage.endpoint="https://"+a+".digitaloceanspaces.com"),"wasabi"===this.storage.driver&&(this.storage.endpoint="https://s3."+a+".wasabisys.com"),"backblaze"===this.storage.driver&&(this.storage.endpoint="https://s3."+a+".backblazeb2.com"),"oss"===this.storage.driver&&(this.storage.endpoint="https://"+a+".aliyuncs.com")}},computed:{regionList:function(){switch(this.storage.driver){case"s3":return this.s3Regions;case"spaces":return this.digitalOceanRegions;case"wasabi":return this.wasabiRegions;case"backblaze":return this.backblazeRegions;case"oss":return this.ossRegions}}},data:function(){return{isLoading:!1,ossRegions:[{label:"China (Hangzhou)",value:"oss-cn-hangzhou"},{label:"China (Shanghai)",value:"oss-cn-shanghai"},{label:"China (Qingdao)",value:"oss-cn-qingdao"},{label:"China (Beijing)",value:"oss-cn-beijing"},{label:"China (Zhangjiakou)",value:"oss-cn-zhangjiakou"},{label:"China (Hohhot)",value:"oss-cn-huhehaote"},{label:"China (Ulanqab)",value:"oss-cn-wulanchabu"},{label:"China (Shenzhen)",value:"oss-cn-shenzhen"},{label:"China (Heyuan)",value:"oss-cn-heyuan"},{label:"China (Guangzhou)",value:"oss-cn-guangzhou"},{label:"China (Chengdu)",value:"oss-cn-chengdu"},{label:"China (Hong Kong)",value:"oss-cn-hongkong"}],wasabiRegions:[{label:"US East 1 (N. Virginia)",value:"us-east-1"},{label:"US East 2 (N. Virginia)",value:"us-east-2"},{label:"US West 1 (Oregon)",value:"us-west-1"},{label:"EU Central 1 (Amsterdam)",value:"eu-central-1"}],backblazeRegions:[{label:"us-west-001",value:"us-west-001"},{label:"us-west-002",value:"us-west-002"},{label:"eu-central-003",value:"eu-central-003"}],digitalOceanRegions:[{label:"New York",value:"nyc3"},{label:"San Francisco",value:"sfo2"},{label:"Amsterdam",value:"ams3"},{label:"Singapore",value:"sgp1"},{label:"Frankfurt",value:"fra1"}],s3Regions:[{label:"us-east-1",value:"us-east-1"},{label:"us-east-2",value:"us-east-2"},{label:"us-west-1",value:"us-west-1"},{label:"us-west-2",value:"us-west-2"},{label:"af-south-1",value:"af-south-1"},{label:"ap-east-1",value:"ap-east-1"},{label:"ap-south-1",value:"ap-south-1"},{label:"ap-northeast-2",value:"ap-northeast-2"},{label:"ap-southeast-1",value:"ap-southeast-1"},{label:"ap-southeast-2",value:"ap-southeast-2"},{label:"ap-northeast-1",value:"ap-northeast-1"},{label:"ca-central-1",value:"ca-central-1"},{label:"eu-central-1",value:"eu-central-1"},{label:"eu-west-1",value:"eu-west-1"},{label:"eu-west-2",value:"eu-west-2"},{label:"eu-south-1",value:"eu-south-1"},{label:"eu-west-3",value:"eu-west-3"},{label:"eu-north-1",value:"eu-north-1"},{label:"me-south-1",value:"me-south-1"},{label:"sa-east-1",value:"sa-east-1"}],storageServiceList:[{label:"Local Driver",value:"local"},{label:"Amazon Web Services S3",value:"s3"},{label:"Digital Ocean Spaces",value:"spaces"},{label:"Object Cloud Storage by Wasabi",value:"wasabi"},{label:"Backblaze B2 Cloud Storage",value:"backblaze"},{label:"Alibaba Cloud OSS",value:"oss"}],encryptionList:[{label:"TLS",value:"tls"},{label:"SSL",value:"ssl"}],mailDriverList:[{label:"smtp",value:"smtp"},{label:"sendmail",value:"sendmail"},{label:"mailgun",value:"mailgun"},{label:"ses",value:"ses"},{label:"postmark",value:"postmark"},{label:"log",value:"log"},{label:"array",value:"array"}],storage:{driver:"local",key:"",secret:"",endpoint:"",region:"",bucket:""},mail:{driver:"smtp",host:"",port:"",username:"",password:"",encryption:""}}},methods:{EnvironmentSetupSubmit:function(){var a,e=this;return(a=o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$refs.environmentSetup.validate();case 2:if(a.sent){a.next=5;break}return a.abrupt("return");case 5:e.isLoading=!0,f.a.post("/api/setup/environment-setup",{storage:e.storage,mail:e.mail}).then((function(a){e.isLoading=!1,e.$router.push({name:"AppSetup"})})).catch((function(a){e.isLoading=!1}));case 7:case"end":return a.stop()}}),a)})),function(){var e=this,t=arguments;return new Promise((function(r,o){var i=a.apply(e,t);function n(a){h(i,r,o,n,s,"next",a)}function s(a){h(i,r,o,n,s,"throw",a)}n(void 0)}))})()}},created:function(){this.$scrollTop()}},x=(t("um9z"),t("KHd+")),k=Object(x.a)(g,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("AuthContentWrapper",{ref:"auth"},[t("AuthContent",{attrs:{name:"database-credentials",visible:!0}},[t("Headline",{staticClass:"container mx-auto max-w-screen-sm",attrs:{title:"Setup Wizard",description:"Set up your storage driver and email client."}},[t("settings-icon",{staticClass:"title-icon text-theme mx-auto",attrs:{size:"40"}})],1),a._v(" "),t("ValidationObserver",{ref:"environmentSetup",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(e){return e.preventDefault(),a.EnvironmentSetupSubmit(e)}},scopedSlots:a._u([{key:"default",fn:function(e){e.invalid;return[t("InfoBox",[t("p",[a._v("If you don’t know which storage driver set, keep selected "),t("b",[a._v("'Local Driver'")]),a._v(". For more info, where\n                        you can host your files "),t("a",{attrs:{href:"https://vuefilemanager.com/docs/guide/storage.html#introduction",target:"_blank"}},[a._v("visit our guide")]),a._v(".")])]),a._v(" "),t("FormLabel",[a._v("Storage Setup")]),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Storage Service:")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Storage Service",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var r=e.errors;return[t("SelectInput",{attrs:{options:a.storageServiceList,default:"local",placeholder:"Select your storage service",isError:r[0]},model:{value:a.storage.driver,callback:function(e){a.$set(a.storage,"driver",e)},expression:"storage.driver"}}),a._v(" "),r[0]?t("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),"local"!==a.storage.driver?t("div",{staticClass:"storage-additionals"},[t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Key:")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Key",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var r=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.storage.key,expression:"storage.key"}],class:{"is-error":r[0]},attrs:{placeholder:"Paste your key",type:"text"},domProps:{value:a.storage.key},on:{input:function(e){e.target.composing||a.$set(a.storage,"key",e.target.value)}}}),a._v(" "),r[0]?t("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Secret:")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Secret",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var r=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.storage.secret,expression:"storage.secret"}],class:{"is-error":r[0]},attrs:{placeholder:"Paste your secret",type:"text"},domProps:{value:a.storage.secret},on:{input:function(e){e.target.composing||a.$set(a.storage,"secret",e.target.value)}}}),a._v(" "),r[0]?t("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Region:")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Region",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var r=e.errors;return[t("SelectInput",{key:a.storage.driver,attrs:{options:a.regionList,placeholder:"Select your region",isError:r[0]},model:{value:a.storage.region,callback:function(e){a.$set(a.storage,"region",e)},expression:"storage.region"}}),a._v(" "),r[0]?t("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e(),a._v(" "),t("small",{staticClass:"input-help"},[a._v("\n                                Select your region where is your bucket/space created.\n                            ")])]}}],null,!0)})],1),a._v(" "),"s3"!==a.storage.driver?t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Endpoint URL:")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Endpoint",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var r=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.storage.endpoint,expression:"storage.endpoint"}],class:{"is-error":r[0]},attrs:{placeholder:"Type your endpoint",type:"text",readonly:""},domProps:{value:a.storage.endpoint},on:{input:function(e){e.target.composing||a.$set(a.storage,"endpoint",e.target.value)}}}),a._v(" "),r[0]?t("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1):a._e(),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Bucket:")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Bucket",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var r=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.storage.bucket,expression:"storage.bucket"}],class:{"is-error":r[0]},attrs:{placeholder:"Type your bucket name",type:"text"},domProps:{value:a.storage.bucket},on:{input:function(e){e.target.composing||a.$set(a.storage,"bucket",e.target.value)}}}),a._v(" "),r[0]?t("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e(),a._v(" "),t("small",{staticClass:"input-help"},[a._v("\n                                Provide your created unique bucket name\n                            ")])]}}],null,!0)})],1),a._v(" "),t("InfoBox",[t("p",[a._v("Later, you can edit these data in your "),t("b",[a._v(".env")]),a._v(" file which is located in app root folder.")])])],1):a._e(),a._v(" "),t("FormLabel",{staticClass:"mt-70"},[a._v("Email Setup")]),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Mail Driver:")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Driver",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var r=e.errors;return[t("SelectInput",{attrs:{options:a.mailDriverList,default:"smtp",placeholder:"Select your mail driver",isError:r[0]},model:{value:a.mail.driver,callback:function(e){a.$set(a.mail,"driver",e)},expression:"mail.driver"}}),a._v(" "),r[0]?t("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Mail Host:")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Host",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var r=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.mail.host,expression:"mail.host"}],class:{"is-error":r[0]},attrs:{placeholder:"Type your mail host",type:"text"},domProps:{value:a.mail.host},on:{input:function(e){e.target.composing||a.$set(a.mail,"host",e.target.value)}}}),a._v(" "),r[0]?t("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Mail Port:")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Port",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var r=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.mail.port,expression:"mail.port"}],class:{"is-error":r[0]},attrs:{placeholder:"Type your mail port",type:"text"},domProps:{value:a.mail.port},on:{input:function(e){e.target.composing||a.$set(a.mail,"port",e.target.value)}}}),a._v(" "),r[0]?t("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Mail Username:")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Username",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var r=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.mail.username,expression:"mail.username"}],class:{"is-error":r[0]},attrs:{placeholder:"Type your mail username",type:"text"},domProps:{value:a.mail.username},on:{input:function(e){e.target.composing||a.$set(a.mail,"username",e.target.value)}}}),a._v(" "),r[0]?t("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Mail Password:")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Password",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var r=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.mail.password,expression:"mail.password"}],class:{"is-error":r[0]},attrs:{placeholder:"Type your mail password",type:"text"},domProps:{value:a.mail.password},on:{input:function(e){e.target.composing||a.$set(a.mail,"password",e.target.value)}}}),a._v(" "),r[0]?t("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Mail Encryption:")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Encryption",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var r=e.errors;return[t("SelectInput",{attrs:{options:a.encryptionList,placeholder:"Select your mail encryption",isError:r[0]},model:{value:a.mail.encryption,callback:function(e){a.$set(a.mail,"encryption",e)},expression:"mail.encryption"}}),a._v(" "),r[0]?t("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"submit-wrapper"},[t("AuthButton",{attrs:{icon:"chevron-right",text:"Save and Set General Settings",loading:a.isLoading,disabled:a.isLoading}})],1)]}}])})],1)],1)}),[],!1,null,"24a682ac",null);e.default=k.exports},"E+jl":function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".logo{width:120px;margin-bottom:20px}h1{font-size:2.125em;font-weight:800;line-height:1.2;margin-bottom:2px}h1,h2{color:#1b2539}h2{font-size:1.4375em;font-weight:500;margin-bottom:50px}@media only screen and (max-width:690px){h1{font-size:1.875em}h2{font-size:1.3125em}}@media only screen and (max-width:490px){h1{font-size:1.375em}h2{font-size:1.125em}}",""])},I9DQ:function(a,e,t){var r=t("x0Ai");"string"==typeof r&&(r=[[a.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,o);r.locals&&(a.exports=r.locals)},KnjL:function(a,e,t){"use strict";var r={name:"InfoBox",props:["type"]},o=(t("0go1"),t("KHd+")),i=Object(o.a)(r,(function(){var a=this.$createElement;return(this._self._c||a)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"b202b3ae",null);e.a=i.exports},Otk1:function(a,e,t){"use strict";t("36qJ")},PCwK:function(a,e,t){"use strict";t("I9DQ")},SjQP:function(a,e,t){"use strict";t("9aPE")},TJPC:function(a,e,t){"use strict";t.d(e,"a",(function(){return i}));function r(a){return null==a}function o(a){return Array.isArray(a)&&0===a.length}var i={validate:function(a,e){var t=(void 0===e?{allowFalse:!0}:e).allowFalse,i={valid:!1,required:!0};return r(a)||o(a)?i:!1!==a||t?(i.valid=!!String(a).trim().length,i):i},params:[{name:"allowFalse",default:!0}],computesRequired:!0}},TnoB:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".form-label[data-v-b034447c]{display:flex;align-items:center;margin-bottom:30px}.form-label .icon[data-v-b034447c]{margin-right:10px}.form-label .icon circle[data-v-b034447c],.form-label .icon line[data-v-b034447c],.form-label .icon path[data-v-b034447c],.form-label .icon rect[data-v-b034447c]{color:inherit}.form-label .label[data-v-b034447c]{font-size:1.125em;font-weight:700}.dark .form-label .label[data-v-b034447c]{color:#bec6cf}",""])},aSdZ:function(a,e,t){"use strict";var r=t("L2JU");function o(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,r)}return t}function i(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var n={name:"Headline",props:["description","title"],computed:function(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}({},Object(r.b)(["config"]))},s=(t("SjQP"),t("KHd+")),l=Object(s.a)(n,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[a._t("default"),a._v(" "),a.$slots.default?a._e():t("div",[a.config.app_logo?t("img",{staticClass:"logo mx-auto",attrs:{src:a.$getImage(a.config.app_logo),alt:a.config.app_name}}):a._e(),a._v(" "),a.config.app_logo?a._e():t("b",{staticClass:"auth-logo-text"},[a._v(a._s(a.config.app_name))])]),a._v(" "),t("h1",[a._v(a._s(a.title))]),a._v(" "),t("h2",[a._v(a._s(a.description))])],2)}),[],!1,null,null,null);e.a=l.exports},bDRN:function(a,e,t){"use strict";var r={name:"AuthContentWrapper"},o=t("KHd+"),i=Object(o.a)(r,(function(){var a=this.$createElement;return(this._self._c||a)("div",{staticClass:"h-screen flex justify-center items-center"},[this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},eZ9V:function(a,e,t){"use strict";var r=t("CjXH"),o={name:"FormLabel",props:["icon"],components:{KeyIcon:r.J,Edit2Icon:r.u,SettingsIcon:r.cb,SmartphoneIcon:r.eb}},i=(t("Otk1"),t("KHd+")),n=Object(i.a)(o,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"form-label"},[a.icon?a._e():t("edit-2-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}),a._v(" "),"settings"===a.icon?t("settings-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):a._e(),a._v(" "),"smartphone"===a.icon?t("smartphone-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):a._e(),a._v(" "),"key"===a.icon?t("key-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):a._e(),a._v(" "),t("b",{staticClass:"label"},[a._t("default")],2)],1)}),[],!1,null,"b034447c",null);e.a=n.exports},j8qy:function(a,e,t){"use strict";var r={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=t("KHd+"),i=Object(o.a)(r,(function(){var a=this.$createElement,e=this._self._c||a;return this.isVisible?e("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);e.a=i.exports},jFLG:function(a,e,t){var r=t("xHbU");"string"==typeof r&&(r=[[a.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,o);r.locals&&(a.exports=r.locals)},pI4u:function(a,e,t){var r=t("0a8W");"string"==typeof r&&(r=[[a.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,o);r.locals&&(a.exports=r.locals)},qCtf:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".info-box[data-v-b202b3ae]{padding:20px;border-radius:8px;margin-bottom:32px;background:#f4f5f6;text-align:left}.info-box.error[data-v-b202b3ae]{background:rgba(253,57,122,.1)}.info-box.error a[data-v-b202b3ae],.info-box.error p[data-v-b202b3ae]{color:#fd397a}.info-box.error a[data-v-b202b3ae]{text-decoration:underline}.info-box p[data-v-b202b3ae]{line-height:1.6;word-break:break-word;font-weight:600}.info-box p[data-v-b202b3ae],.info-box p[data-v-b202b3ae] a{font-size:15px}.info-box p[data-v-b202b3ae] b{font-size:15px;font-weight:700}.info-box a[data-v-b202b3ae],.info-box b[data-v-b202b3ae]{font-weight:700}.info-box a[data-v-b202b3ae]{font-size:.9375em;line-height:1.6}.info-box ul[data-v-b202b3ae]{margin-top:15px}.info-box ul[data-v-b202b3ae],.info-box ul li[data-v-b202b3ae],.info-box ul li a[data-v-b202b3ae]{display:block}@media only screen and (max-width:690px){.info-box[data-v-b202b3ae]{padding:15px}}.dark .info-box[data-v-b202b3ae]{background:#1e2024}.dark .info-box p[data-v-b202b3ae],.dark .info-box ul li[data-v-b202b3ae]{color:#bec6cf}",""])},um9z:function(a,e,t){"use strict";t("jFLG")},x0Ai:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".button[data-v-e69ac918]{cursor:pointer;border-radius:8px;text-decoration:none;padding:12px 32px;display:inline-block;margin-left:15px;margin-right:15px;white-space:nowrap;transition:all .15s ease;background:transparent}.button .text-label[data-v-e69ac918]{transition:all .15s ease;font-size:1.0625em;font-weight:800;line-height:0}.button .icon[data-v-e69ac918]{margin-left:12px;font-size:1em}.button.solid[data-v-e69ac918]{background:#00bc7e;border:2px solid #00bc7e}.button.solid .text-label[data-v-e69ac918]{color:#fff}.button.outline[data-v-e69ac918]{border:2px solid #1b2539}.button.outline .text-label[data-v-e69ac918]{color:#1b2539}.button.outline .icon path[data-v-e69ac918]{fill:inherit}.button.outline[data-v-e69ac918]:hover{border-color:inherit}.button.outline:hover .text-label[data-v-e69ac918]{color:inherit}.dark .button.outline[data-v-e69ac918]{background:#151515;border-color:#bec6cf}.dark .button.outline .text-label[data-v-e69ac918]{color:#bec6cf}.sync-alt[data-v-e69ac918]{-webkit-animation:spin-data-v-e69ac918 1s linear infinite;animation:spin-data-v-e69ac918 1s linear infinite}@-webkit-keyframes spin-data-v-e69ac918{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin-data-v-e69ac918{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""])},xHbU:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".form[data-v-24a682ac]{max-width:700px}.form.inline-form[data-v-24a682ac]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-24a682ac]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-24a682ac]{position:absolute;left:0;bottom:-25px}.form.block-form .switch-wrapper[data-v-24a682ac]{padding-bottom:13px;margin-bottom:13px;border-bottom:1px solid #f4f5f6}.form.block-form .switch-wrapper[data-v-24a682ac]:last-child{padding-bottom:0;margin-bottom:0;border-bottom:none}.form.block-form .wrapper-inline[data-v-24a682ac]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-24a682ac]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-24a682ac]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-24a682ac]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-24a682ac]:last-child{margin-bottom:0}.form.block-form .button[data-v-24a682ac]{margin-top:50px}.form .inline-wrapper[data-v-24a682ac]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-24a682ac]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-24a682ac]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.input-help[data-v-24a682ac]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-24a682ac]{display:flex}.single-line-form .submit-button[data-v-24a682ac]{margin-left:20px}.error-message[data-v-24a682ac]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-24a682ac]{width:100%}input[type=email][data-v-24a682ac],input[type=number][data-v-24a682ac],input[type=password][data-v-24a682ac],input[type=text][data-v-24a682ac],textarea[data-v-24a682ac]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-24a682ac],input[type=number].is-error[data-v-24a682ac],input[type=password].is-error[data-v-24a682ac],input[type=text].is-error[data-v-24a682ac],textarea.is-error[data-v-24a682ac]{border-color:#fd397a}input[type=email][data-v-24a682ac]::-moz-placeholder,input[type=number][data-v-24a682ac]::-moz-placeholder,input[type=password][data-v-24a682ac]::-moz-placeholder,input[type=text][data-v-24a682ac]::-moz-placeholder,textarea[data-v-24a682ac]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-24a682ac]:-ms-input-placeholder,input[type=number][data-v-24a682ac]:-ms-input-placeholder,input[type=password][data-v-24a682ac]:-ms-input-placeholder,input[type=text][data-v-24a682ac]:-ms-input-placeholder,textarea[data-v-24a682ac]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-24a682ac]::placeholder,input[type=number][data-v-24a682ac]::placeholder,input[type=password][data-v-24a682ac]::placeholder,input[type=text][data-v-24a682ac]::placeholder,textarea[data-v-24a682ac]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][disabled][data-v-24a682ac],input[type=number][disabled][data-v-24a682ac],input[type=password][disabled][data-v-24a682ac],input[type=text][disabled][data-v-24a682ac],textarea[disabled][data-v-24a682ac]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}input[type=color][data-v-24a682ac]{width:38px!important;height:40px;border:none;outline:none;background:none;min-width:0!important}.additional-link[data-v-24a682ac]{font-size:1em;margin-top:50px;display:block}.additional-link a[data-v-24a682ac],.additional-link b[data-v-24a682ac]{cursor:pointer}.additional-link a[data-v-24a682ac]:hover,.additional-link b[data-v-24a682ac]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-24a682ac]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-24a682ac]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-24a682ac],.form textarea[data-v-24a682ac]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-24a682ac]{display:block}.form.block-form .block-wrapper label[data-v-24a682ac]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-24a682ac]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-24a682ac]{display:block}.form.inline-form .input-wrapper .error-message[data-v-24a682ac]{position:relative;bottom:0}.form .button[data-v-24a682ac]{padding:14px 32px}.single-line-form[data-v-24a682ac]{display:block}.single-line-form .submit-button[data-v-24a682ac]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-24a682ac],input[type=number][data-v-24a682ac],input[type=password][data-v-24a682ac],input[type=text][data-v-24a682ac],textarea[data-v-24a682ac]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-24a682ac]{display:block}}.dark .form .input-help[data-v-24a682ac]{color:#7d858c}.dark .form.block-form .block-wrapper label[data-v-24a682ac]{color:#bec6cf}.dark .form.block-form .switch-wrapper[data-v-24a682ac]{border-color:hsla(0,0%,100%,.02)}.dark .form .inline-wrapper .switch-label .input-label[data-v-24a682ac]{color:#bec6cf}.dark input[type=email][data-v-24a682ac],.dark input[type=number][data-v-24a682ac],.dark input[type=password][data-v-24a682ac],.dark input[type=text][data-v-24a682ac],.dark textarea[data-v-24a682ac]{border-color:#1e2024;background:#1e2024;color:#bec6cf}.dark input[type=email][data-v-24a682ac]::-moz-placeholder,.dark input[type=number][data-v-24a682ac]::-moz-placeholder,.dark input[type=password][data-v-24a682ac]::-moz-placeholder,.dark input[type=text][data-v-24a682ac]::-moz-placeholder,.dark textarea[data-v-24a682ac]::-moz-placeholder{color:#7d858c}.dark input[type=email][data-v-24a682ac]:-ms-input-placeholder,.dark input[type=number][data-v-24a682ac]:-ms-input-placeholder,.dark input[type=password][data-v-24a682ac]:-ms-input-placeholder,.dark input[type=text][data-v-24a682ac]:-ms-input-placeholder,.dark textarea[data-v-24a682ac]:-ms-input-placeholder{color:#7d858c}.dark input[type=email][data-v-24a682ac]::placeholder,.dark input[type=number][data-v-24a682ac]::placeholder,.dark input[type=password][data-v-24a682ac]::placeholder,.dark input[type=text][data-v-24a682ac]::placeholder,.dark textarea[data-v-24a682ac]::placeholder{color:#7d858c}.dark input[type=email][disabled][data-v-24a682ac],.dark input[type=number][disabled][data-v-24a682ac],.dark input[type=password][disabled][data-v-24a682ac],.dark input[type=text][disabled][data-v-24a682ac],.dark textarea[disabled][data-v-24a682ac]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}.dark .popup-wrapper input[type=email][data-v-24a682ac],.dark .popup-wrapper input[type=number][data-v-24a682ac],.dark .popup-wrapper input[type=password][data-v-24a682ac],.dark .popup-wrapper input[type=text][data-v-24a682ac],.dark .popup-wrapper textarea[data-v-24a682ac]{background:#25272c}.auth-logo-text[data-v-24a682ac]{font-size:1.375em;font-weight:800;margin-bottom:40px;display:block}.auth-form[data-v-24a682ac]{text-align:center;max-width:600px;padding:25px 20px;display:table-cell;vertical-align:middle}.auth-form input[data-v-24a682ac]{min-width:310px}.auth-form .additional-link a[data-v-24a682ac]{font-weight:700;text-decoration:none}.auth-form .user-avatar[data-v-24a682ac]{width:100px;height:100px;-o-object-fit:cover;object-fit:cover;margin-bottom:20px;border-radius:8px;box-shadow:0 10px 30px rgba(25,54,60,.2)}.auth-form .block-form[data-v-24a682ac]{margin-left:auto;margin-right:auto}@media only screen and (min-width:690px) and (max-width:960px){.auth-form[data-v-24a682ac]{padding-left:20%;padding-right:20%}}@media only screen and (max-width:690px){.auth-form[data-v-24a682ac]{width:100%}}@media only screen and (max-width:490px){.auth-form input[data-v-24a682ac]{min-width:0}.auth-form .additional-link[data-v-24a682ac]{font-size:.9375em}}.dark .auth-form .additional-link[data-v-24a682ac],.dark .auth-form h1[data-v-24a682ac],.dark .auth-form h2[data-v-24a682ac]{color:#bec6cf}.content-headline[data-v-24a682ac]{max-width:630px;margin-left:auto;margin-right:auto}.auth-form input[data-v-24a682ac]{min-width:0}.duplicator .duplicator-add-button[data-v-24a682ac]{width:100%}.duplicator .duplicator-item[data-v-24a682ac]{box-shadow:0 1px 5px rgba(0,0,0,.12);border-radius:8px;background:#fff;padding:25px;margin:0 -25px 32px;position:relative}.duplicator .duplicator-item .duplicator-title[data-v-24a682ac]{font-size:1.125em;margin-bottom:20px;display:block;font-weight:700}.duplicator .duplicator-item .delete-item[data-v-24a682ac]{position:absolute;top:15px;right:15px;cursor:pointer}.duplicator .duplicator-item .delete-item:hover line[data-v-24a682ac]{stroke:#00bc7e}.duplicator .duplicator-item input[data-v-24a682ac],.duplicator .duplicator-item textarea[data-v-24a682ac]{box-shadow:none;background:#fafafa}.form[data-v-24a682ac]{max-width:580px;text-align:left}.submit-wrapper[data-v-24a682ac]{text-align:right}.submit-wrapper .button[data-v-24a682ac]{margin:58px 0 50px;width:100%}.title-icon[data-v-24a682ac]{margin-bottom:10px;-webkit-animation:spinner-data-v-24a682ac 5s linear infinite;animation:spinner-data-v-24a682ac 5s linear infinite}.title-icon circle[data-v-24a682ac],.title-icon path[data-v-24a682ac]{color:inherit}@-webkit-keyframes spinner-data-v-24a682ac{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spinner-data-v-24a682ac{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.dark .duplicator .duplicator-item[data-v-24a682ac]{background:#1e2024}.dark .duplicator .duplicator-item input[data-v-24a682ac],.dark .duplicator .duplicator-item textarea[data-v-24a682ac]{background:#151515}",""])},zmzx:function(a,e,t){"use strict";t("pI4u")}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{122:function(e,t,i){},25:function(e,t,i){"use strict";i.d(t,"h",(function(){return s})),i.d(t,"e",(function(){return o})),i.d(t,"i",(function(){return n})),i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return c})),i.d(t,"c",(function(){return p})),i.d(t,"d",(function(){return l})),i.d(t,"f",(function(){return r})),i.d(t,"g",(function(){return h}));const s=["speechService","googleSpeechApiKey","ibmSpeechApiLoc","ibmSpeechApiKey","microsoftSpeechApiLoc","microsoftSpeechApiKey","witSpeechApiKeys","loadEnglishChallenge","tryEnglishSpeechModel","simulateUserInput","autoUpdateClientApp","navigateWithKeyboard"],o=["windows/amd64","windows/386","linux/amd64","macos/amd64"],n=/^https:\/\/www\.(?:google\.com|recaptcha\.net)\/recaptcha\/(?:api2|enterprise)\/bframe.*/,a={ar:"ar-SA",af:"af-ZA",am:"am-ET",hy:"hy-AM",az:"az-AZ",eu:"eu-ES",bn:"bn-BD",bg:"bg-BG",ca:"ca-ES","zh-HK":"cmn-Hans-HK","zh-CN":"cmn-Hans-CN","zh-TW":"cmn-Hant-TW",hr:"hr-HR",cs:"cs-CZ",da:"da-DK",nl:"nl-NL","en-GB":"en-GB",en:"en-US",et:"",fil:"fil-PH",fi:"fi-FI",fr:"fr-FR","fr-CA":"fr-CA",gl:"gl-ES",ka:"ka-GE",de:"de-DE","de-AT":"de-DE","de-CH":"de-DE",el:"el-GR",gu:"gu-IN",iw:"he-IL",hi:"hi-IN",hu:"hu-HU",is:"is-IS",id:"id-ID",it:"it-IT",ja:"ja-JP",kn:"kn-IN",ko:"ko-KR",lo:"lo-LA",lv:"lv-LV",lt:"lt-LT",ms:"ms-MY",ml:"ml-IN",mr:"mr-IN",mn:"",no:"nb-NO",fa:"fa-IR",pl:"pl-PL",pt:"pt-PT","pt-BR":"pt-BR","pt-PT":"pt-PT",ro:"ro-RO",ru:"ru-RU",sr:"sr-RS",si:"si-LK",sk:"sk-SK",sl:"sl-SI",es:"es-ES","es-419":"es-MX",sw:"sw-TZ",sv:"sv-SE",ta:"ta-IN",te:"te-IN",th:"th-TH",tr:"tr-TR",uk:"uk-UA",ur:"ur-IN",vi:"vi-VN",zu:"zu-ZA"},c={ar:"ar-AR_BroadbandModel",af:"",am:"",hy:"",az:"",eu:"",bn:"",bg:"",ca:"","zh-HK":"","zh-CN":"zh-CN_BroadbandModel","zh-TW":"zh-CN_BroadbandModel",hr:"",cs:"",da:"",nl:"nl-NL_BroadbandModel","en-GB":"en-GB_BroadbandModel",en:"en-US_BroadbandModel",et:"",fil:"",fi:"",fr:"fr-FR_BroadbandModel","fr-CA":"fr-FR_BroadbandModel",gl:"",ka:"",de:"de-DE_BroadbandModel","de-AT":"de-DE_BroadbandModel","de-CH":"de-DE_BroadbandModel",el:"",gu:"",iw:"",hi:"",hu:"",is:"",id:"",it:"it-IT_BroadbandModel",ja:"ja-JP_BroadbandModel",kn:"",ko:"ko-KR_BroadbandModel",lo:"",lv:"",lt:"",ms:"",ml:"",mr:"",mn:"",no:"",fa:"",pl:"",pt:"pt-BR_BroadbandModel","pt-BR":"pt-BR_BroadbandModel","pt-PT":"pt-BR_BroadbandModel",ro:"",ru:"",sr:"",si:"",sk:"",sl:"",es:"es-ES_BroadbandModel","es-419":"es-ES_BroadbandModel",sw:"",sv:"",ta:"",te:"",th:"",tr:"",uk:"",ur:"",vi:"",zu:""},p={ar:"ar-EG",af:"",am:"",hy:"",az:"",eu:"",bn:"",bg:"",ca:"ca-ES","zh-HK":"zh-HK","zh-CN":"zh-CN","zh-TW":"zh-TW",hr:"",cs:"",da:"da-DK",nl:"nl-NL","en-GB":"en-GB",en:"en-US",et:"",fil:"",fi:"fi-FI",fr:"fr-FR","fr-CA":"fr-CA",gl:"",ka:"",de:"de-DE","de-AT":"de-DE","de-CH":"de-DE",el:"",gu:"gu-IN",iw:"",hi:"hi-IN",hu:"",is:"",id:"",it:"it-IT",ja:"ja-JP",kn:"",ko:"ko-KR",lo:"",lv:"",lt:"",ms:"",ml:"",mr:"mr-IN",mn:"",no:"nb-NO",fa:"",pl:"pl-PL",pt:"pt-PT","pt-BR":"pt-BR","pt-PT":"pt-PT",ro:"",ru:"ru-RU",sr:"",si:"",sk:"",sl:"",es:"es-ES","es-419":"es-MX",sw:"",sv:"sv-SE",ta:"ta-IN",te:"te-IN",th:"th-TH",tr:"tr-TR",uk:"",ur:"",vi:"",zu:""},l={ar:"arabic",af:"",am:"",hy:"",az:"",eu:"",bn:"bengali",bg:"",ca:"catalan","zh-HK":"","zh-CN":"chinese","zh-TW":"chinese",hr:"",cs:"",da:"",nl:"dutch","en-GB":"english",en:"english",et:"",fil:"",fi:"finnish",fr:"french","fr-CA":"french",gl:"",ka:"",de:"german","de-AT":"german","de-CH":"german",el:"",gu:"",iw:"",hi:"hindi",hu:"",is:"",id:"indonesian",it:"italian",ja:"japanese",kn:"kannada",ko:"korean",lo:"",lv:"",lt:"",ms:"malay",ml:"malayalam",mr:"marathi",mn:"",no:"",fa:"",pl:"polish",pt:"portuguese","pt-BR":"portuguese","pt-PT":"portuguese",ro:"",ru:"russian",sr:"",si:"sinhala",sk:"",sl:"",es:"spanish","es-419":"spanish",sw:"",sv:"swedish",ta:"tamil",te:"telugu",th:"thai",tr:"turkish",uk:"",ur:"urdu",vi:"vietnamese",zu:""},r={london:"https://api.eu-gb.speech-to-text.watson.cloud.ibm.com/v1/recognize",frankfurt:"https://api.eu-de.speech-to-text.watson.cloud.ibm.com/v1/recognize",dallas:"https://api.us-south.speech-to-text.watson.cloud.ibm.com/v1/recognize",washington:"https://api.us-east.speech-to-text.watson.cloud.ibm.com/v1/recognize",sydney:"https://api.au-syd.speech-to-text.watson.cloud.ibm.com/v1/recognize",tokyo:"https://api.jp-tok.speech-to-text.watson.cloud.ibm.com/v1/recognize"},h={eastAu:"https://australiaeast.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1",centralCa:"https://canadacentral.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1",centralUs:"https://centralus.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1",centralFr:"https://francecentral.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1",centralIn:"https://centralindia.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1",eastJp:"https://japaneast.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1",centralKr:"https://koreacentral.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1",northCentralUs:"https://northcentralus.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1",southCentralUs:"https://southcentralus.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1",southUk:"https://uksouth.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1",eastUs:"https://eastus.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1",eastUs2:"https://eastus.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1",westUs:"https://westus.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1",westUs2:"https://westus2.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1",eastAsia:"https://eastasia.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1",southeastAsia:"https://southeastasia.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1",westEu:"https://westeurope.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1",northEu:"https://northeurope.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1"}},341:function(e,t,i){"use strict";var s=i(122);i.n(s).a},349:function(e,t,i){"use strict";i.r(t);i(5);var s=i(70),o=(i(0),i(14)),n=i(11),a=i(6),c=i(1),p=i(10),l=i(25),r={components:{[o.a.name]:o.a,[o.d.name]:o.d,[o.e.name]:o.e,[o.b.name]:o.b,[o.f.name]:o.f},data:function(){return{dataLoaded:!1,selectOptions:Object(a.a)({speechService:["witSpeechApiDemo","googleSpeechApi","witSpeechApi","ibmSpeechApi","microsoftSpeechApi"],ibmSpeechApiLoc:["london","frankfurt","dallas","washington","sydney","tokyo"],microsoftSpeechApiLoc:["eastAu","centralCa","centralUs","centralFr","centralIn","eastJp","centralKr","northCentralUs","southCentralUs","southUk","eastUs","eastUs2","westUs","westUs2","eastAsia","southeastAsia","westEu","northEu"],witSpeechApiLang:[...new Set(Object.values(l.d).filter(Boolean))].sort()}),witSpeechApiLang:"",witSpeechApis:[],clientAppVerified:!1,clientAppInstalled:!1,clientAppDownloadUrl:"",installGuideUrl:"",options:{speechService:"",googleSpeechApiKey:"",ibmSpeechApiLoc:"",ibmSpeechApiKey:"",microsoftSpeechApiLoc:"",microsoftSpeechApiKey:"",witSpeechApiKeys:{},loadEnglishChallenge:!1,tryEnglishSpeechModel:!1,simulateUserInput:!1,autoUpdateClientApp:!1,navigateWithKeyboard:!1}}},methods:{getText:c.k,verifyClientApp:async function(){try{await Object(a.c)(),this.clientAppInstalled=!0}catch(e){if(!this.installGuideUrl){this.installGuideUrl="https://github.com/dessant/buster/wiki/Installing-the-client-app";const{os:e,arch:t}=await Object(c.h)();l.e.includes(`${e}/${t}`)&&(this.installGuideUrl+="#"+e,this.clientAppDownloadUrl=`https://github.com/dessant/buster-client/releases/download/v${p.a}/buster-client-setup-v${p.a}-${e}-${t}`,"windows"===e&&(this.clientAppDownloadUrl+=".exe"))}this.clientAppInstalled=!1}this.clientAppVerified=!0},setWitSpeechApiLangOptions:function(){this.selectOptions.witSpeechApiLang=this.selectOptions.witSpeechApiLang.filter(e=>!this.witSpeechApis.includes(e.id))},addWitSpeechApi:function(){this.witSpeechApis.push(this.witSpeechApiLang),this.witSpeechApiLang="",this.setWitSpeechApiLangOptions()},saveWitSpeechApiKey:function(e,t){const i=this.options.witSpeechApiKeys;e?this.options.witSpeechApiKeys=Object.assign({},i,{[t]:e}):i[t]&&(delete i[t],this.options.witSpeechApiKeys=Object.assign({},i))}},created:async function(){const e=await n.a.get(l.h,"sync");for(const t of Object.keys(this.options))this.options[t]=e[t],this.$watch("options."+t,(async function(e){await n.a.set({[t]:e},"sync")}));this.witSpeechApis=Object.keys(e.witSpeechApiKeys),this.setWitSpeechApiLangOptions(),document.title=Object(c.k)("pageTitle",[Object(c.k)("pageTitle_options"),Object(c.k)("extensionName")]),this.verifyClientApp(),this.dataLoaded=!0}},h=(i(341),i(8)),d=Object(h.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.dataLoaded?i("div",{attrs:{id:"app"}},[i("div",{staticClass:"section"},[e._m(0),e._v(" "),i("div",{staticClass:"option-wrap"},[i("div",{staticClass:"option select"},[i("v-select",{attrs:{label:e.getText("optionTitle_speechService"),options:e.selectOptions.speechService},model:{value:e.options.speechService,callback:function(t){e.$set(e.options,"speechService",t)},expression:"options.speechService"}})],1),e._v(" "),"googleSpeechApi"===e.options.speechService?i("div",{staticClass:"option text-field"},[i("v-textfield",{attrs:{label:e.getText("inputLabel_apiKey")},model:{value:e.options.googleSpeechApiKey,callback:function(t){e.$set(e.options,"googleSpeechApiKey","string"==typeof t?t.trim():t)},expression:"options.googleSpeechApiKey"}})],1):e._e(),e._v(" "),"ibmSpeechApi"===e.options.speechService?i("div",{staticClass:"option select"},[i("v-select",{attrs:{label:e.getText("optionTitle_ibmSpeechApiLoc"),options:e.selectOptions.ibmSpeechApiLoc},model:{value:e.options.ibmSpeechApiLoc,callback:function(t){e.$set(e.options,"ibmSpeechApiLoc",t)},expression:"options.ibmSpeechApiLoc"}})],1):e._e(),e._v(" "),"ibmSpeechApi"===e.options.speechService?i("div",{staticClass:"option text-field"},[i("v-textfield",{attrs:{label:e.getText("inputLabel_apiKey")},model:{value:e.options.ibmSpeechApiKey,callback:function(t){e.$set(e.options,"ibmSpeechApiKey","string"==typeof t?t.trim():t)},expression:"options.ibmSpeechApiKey"}})],1):e._e(),e._v(" "),"microsoftSpeechApi"===e.options.speechService?i("div",{staticClass:"option select"},[i("v-select",{attrs:{label:e.getText("optionTitle_microsoftSpeechApiLoc"),options:e.selectOptions.microsoftSpeechApiLoc},model:{value:e.options.microsoftSpeechApiLoc,callback:function(t){e.$set(e.options,"microsoftSpeechApiLoc",t)},expression:"options.microsoftSpeechApiLoc"}})],1):e._e(),e._v(" "),"microsoftSpeechApi"===e.options.speechService?i("div",{staticClass:"option text-field"},[i("v-textfield",{attrs:{label:e.getText("inputLabel_apiKey")},model:{value:e.options.microsoftSpeechApiKey,callback:function(t){e.$set(e.options,"microsoftSpeechApiKey","string"==typeof t?t.trim():t)},expression:"options.microsoftSpeechApiKey"}})],1):e._e(),e._v(" "),e._l(e.witSpeechApis,(function(t){return"witSpeechApi"===e.options.speechService?i("v-textfield",{key:t.id,attrs:{value:e.options.witSpeechApiKeys[t]||"",label:e.getText("inputLabel_apiKeyType",[e.getText("optionValue_witSpeechApiLang_"+t)])},on:{input:function(i){e.saveWitSpeechApiKey(i.trim(),t)}}}):e._e()})),e._v(" "),"witSpeechApi"===e.options.speechService?i("div",{staticClass:"wit-add-api"},[i("v-select",{attrs:{options:e.selectOptions.witSpeechApiLang,label:e.getText("optionTitle_witSpeechApiLang")},model:{value:e.witSpeechApiLang,callback:function(t){e.witSpeechApiLang=t},expression:"witSpeechApiLang"}}),e._v(" "),i("v-button",{attrs:{outlined:!0,disabled:!e.witSpeechApiLang,label:e.getText("buttonText_addApi")},on:{click:e.addWitSpeechApi}})],1):e._e(),e._v(" "),"witSpeechApi"===e.options.speechService?i("a",{staticClass:"service-guide",attrs:{target:"_blank",rel:"noreferrer",href:"https://github.com/dessant/buster/wiki/Configuring-Wit.ai"}},[e._v("\n        "+e._s(e.getText("linkText_witSpeechApiGuide"))+"\n      ")]):e._e()],2)]),e._v(" "),i("div",{staticClass:"section"},[e._m(1),e._v(" "),e._m(2),e._v(" "),i("div",{staticClass:"option-wrap"},[e.clientAppInstalled||e.clientAppVerified&&e.options.simulateUserInput?i("div",{staticClass:"option"},[i("v-form-field",{attrs:{"input-id":"si",label:e.getText("optionTitle_simulateUserInput")}},[i("v-switch",{attrs:{id:"si"},model:{value:e.options.simulateUserInput,callback:function(t){e.$set(e.options,"simulateUserInput",t)},expression:"options.simulateUserInput"}})],1)],1):e._e(),e._v(" "),e.clientAppVerified&&e.options.simulateUserInput?i("div",{staticClass:"option"},[i("v-form-field",{attrs:{"input-id":"nc",label:e.getText("optionTitle_navigateWithKeyboard")}},[i("v-switch",{attrs:{id:"nc"},model:{value:e.options.navigateWithKeyboard,callback:function(t){e.$set(e.options,"navigateWithKeyboard",t)},expression:"options.navigateWithKeyboard"}})],1)],1):e._e(),e._v(" "),e.clientAppInstalled?i("div",{staticClass:"option"},[i("v-form-field",{attrs:{"input-id":"auc",label:e.getText("optionTitle_autoUpdateClientApp")}},[i("v-switch",{attrs:{id:"auc"},model:{value:e.options.autoUpdateClientApp,callback:function(t){e.$set(e.options,"autoUpdateClientApp",t)},expression:"options.autoUpdateClientApp"}})],1)],1):e._e(),e._v(" "),e.clientAppVerified&&!e.clientAppInstalled?i("div",{staticClass:"client-download"},[i("div",{staticClass:"download-desc",domProps:{innerHTML:e._s(e.getText("pageContent_optionClientAppDownloadDesc",["<a target='_blank' rel='noreferrer' href='"+e.installGuideUrl+"'>"+e.getText("linkText_installGuide")+"</a>"]))}}),e._v(" "),e.clientAppDownloadUrl?e._e():i("div",{staticClass:"download-error"},[e._v("\n          "+e._s(e.getText("pageContent_optionClientAppOSError"))+"\n        ")]),e._v(" "),i("v-button",{staticClass:"download-button",attrs:{unelevated:!0,disabled:!e.clientAppDownloadUrl,label:e.getText("buttonText_downloadApp")},on:{click:function(t){return e.$refs.dlLink.click()}}}),e._v(" "),i("a",{ref:"dlLink",staticClass:"download-link",attrs:{target:"_blank",rel:"noreferrer",href:e.clientAppDownloadUrl}})],1):e._e()])]),e._v(" "),i("div",{staticClass:"section"},[e._m(3),e._v(" "),i("div",{staticClass:"option-wrap"},[i("div",{staticClass:"option"},[i("v-form-field",{attrs:{"input-id":"lec",label:e.getText("optionTitle_loadEnglishChallenge")}},[i("v-switch",{attrs:{id:"lec"},model:{value:e.options.loadEnglishChallenge,callback:function(t){e.$set(e.options,"loadEnglishChallenge",t)},expression:"options.loadEnglishChallenge"}})],1)],1),e._v(" "),e.options.loadEnglishChallenge?e._e():i("div",{staticClass:"option"},[i("v-form-field",{attrs:{"input-id":"esm",label:e.getText("optionTitle_tryEnglishSpeechModel")}},[i("v-switch",{attrs:{id:"esm"},model:{value:e.options.tryEnglishSpeechModel,callback:function(t){e.$set(e.options,"tryEnglishSpeechModel",t)},expression:"options.tryEnglishSpeechModel"}})],1)],1)])])]):e._e()}),[function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"section-title"},[this._v("\n      "+this._s(this.getText("optionSectionTitle_services"))+"\n    ")])},function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"section-title"},[this._v("\n      "+this._s(this.getText("optionSectionTitle_client"))+"\n    ")])},function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"section-desc"},[this._v("\n      "+this._s(this.getText("optionSectionDescription_client"))+"\n    ")])},function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"section-title"},[this._v("\n      "+this._s(this.getText("optionSectionTitle_misc"))+"\n    ")])}],!1,null,null,null).exports;!async function(){try{await document.fonts.load("400 14px Roboto"),await document.fonts.load("500 14px Roboto")}catch(e){}new s.a({el:"#app",render:e=>e(d)})}()}},[[349,0,1]]]);
//# sourceMappingURL=script.js.map
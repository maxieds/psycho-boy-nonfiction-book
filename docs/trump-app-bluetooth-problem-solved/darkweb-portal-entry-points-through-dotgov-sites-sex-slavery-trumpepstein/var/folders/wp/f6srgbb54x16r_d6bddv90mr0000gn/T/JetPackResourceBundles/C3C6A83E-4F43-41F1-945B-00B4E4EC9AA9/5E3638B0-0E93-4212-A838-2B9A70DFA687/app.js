(()=>{function n(i){if(t[i])return t[i].exports
var o=t[i]={exports:{}}
return e[i].call(o.exports,o,o.exports,n),o.exports}var e={908:(n,e,t)=>{e.f3=e.vv=void 0
const i=t(450)
e.vv=class{constructor(n){this._members={},this.name=n}adding(n,e){const t=this.clone()
return t._members[n.name]=e,t}removing(n){const e=this.clone()
return delete e._members[n.name],e}optional(n){return this._members[n.name]}required(n){const e=this._members[n.name]
if(i.isNothing(e)){const e=Object.keys(this._members).sort().join(", ")
throw new Error(`No member with type ${n.name} found in ${this.name}. Candidates ${e}`)}return e}clone(){const n=new(0,this.constructor)(this.name)
for(const[e,t]of Object.entries(this._members))n._members[e]=t
return n}},e.f3=function(n,e){return e.required(n)}},89:(n,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.isBaseActionProvider=void 0
const i=t(450)
e.isBaseActionProvider=function(n){return"object"==typeof n&&i.isSome(null==n?void 0:n.actionFor)}},129:function(n,e,t){var i=this&&this.__createBinding||(Object.create?function(n,e,t,i){void 0===i&&(i=t),Object.defineProperty(n,i,{enumerable:!0,get:function(){return e[t]}})}:function(n,e,t,i){void 0===i&&(i=t),n[i]=e[t]}),o=this&&this.__exportStar||function(n,e){for(var t in n)"default"===t||Object.prototype.hasOwnProperty.call(e,t)||i(e,n,t)}
Object.defineProperty(e,"__esModule",{value:!0}),o(t(89),e)},770:(n,e)=>{Object.defineProperty(e,"__esModule",{value:!0})},421:(n,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.IntentDispatcher=void 0
const i=t(450),o=t(395)
e.IntentDispatcher=class{constructor(){this.dispatchableMap={}}register(n){if(i.isNothing(n.$intentKind))throw new Error("Dispatcher cannot register a controller without an $intentKind")
if(n.$intentKind in this.dispatchableMap)throw new Error(`Dispatcher already has a controller registered for ${n.$intentKind}`)
this.dispatchableMap[n.$intentKind]=n}async dispatch(n,e){const t=this.dispatchableMap[n.$kind]
if(i.isNothing(t)||!o.isIntentController(t))throw new Error(`No controller registered to handle ${n.$kind}`)
return t.perform(n,e)}controller(n){return this.dispatchableMap[n.$kind]}get registeredControllers(){return Object.values(this.dispatchableMap)}}},346:function(n,e,t){var i=this&&this.__createBinding||(Object.create?function(n,e,t,i){void 0===i&&(i=t),Object.defineProperty(n,i,{enumerable:!0,get:function(){return e[t]}})}:function(n,e,t,i){void 0===i&&(i=t),n[i]=e[t]}),o=this&&this.__exportStar||function(n,e){for(var t in n)"default"===t||Object.prototype.hasOwnProperty.call(e,t)||i(e,n,t)}
Object.defineProperty(e,"__esModule",{value:!0}),o(t(395),e),o(t(421),e),o(t(770),e),o(t(867),e)},395:(n,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.isIntentController=void 0
const i=t(450)
e.isIntentController=function(n){return"object"==typeof n&&i.isSome(null==n?void 0:n.perform)}},867:(n,e)=>{Object.defineProperty(e,"__esModule",{value:!0})},881:function(n,e,t){var i=this&&this.__createBinding||(Object.create?function(n,e,t,i){void 0===i&&(i=t),Object.defineProperty(n,i,{enumerable:!0,get:function(){return e[t]}})}:function(n,e,t,i){void 0===i&&(i=t),n[i]=e[t]}),o=this&&this.__exportStar||function(n,e){for(var t in n)"default"===t||Object.prototype.hasOwnProperty.call(e,t)||i(e,n,t)}
Object.defineProperty(e,"__esModule",{value:!0}),o(t(346),e),o(t(129),e)},542:function(n,e,t){var i=this&&this.__createBinding||(Object.create?function(n,e,t,i){void 0===i&&(i=t),Object.defineProperty(n,i,{enumerable:!0,get:function(){return e[t]}})}:function(n,e,t,i){void 0===i&&(i=t),n[i]=e[t]}),o=this&&this.__exportStar||function(n,e){for(var t in n)"default"===t||Object.prototype.hasOwnProperty.call(e,t)||i(e,n,t)}
Object.defineProperty(e,"__esModule",{value:!0}),o(t(721),e),o(t(31),e),o(t(447),e),o(t(24),e),o(t(450),e)},647:(n,e,t)=>{function i(n,e){const t=n.topic
return o.isSome(t)?t:e}e.bI=void 0
const o=t(450)
e.bI=function(n,e,t,r){const l="click"
return function(n,e,t){return{fields:n,includingFields:e.defaultIncludeRequests.click,excludingFields:e.defaultExcludeRequests.click,topic:i(n,e.defaultTopic),shouldFlush:!!o.isSome(e.shouldFlush)&&e.shouldFlush(n)}}({...t,eventType:l,targetType:e,targetId:n},r)}},781:function(n,e,t){var i=this&&this.__createBinding||(Object.create?function(n,e,t,i){void 0===i&&(i=t),Object.defineProperty(n,i,{enumerable:!0,get:function(){return e[t]}})}:function(n,e,t,i){void 0===i&&(i=t),n[i]=e[t]}),o=this&&this.__exportStar||function(n,e){for(var t in n)"default"===t||Object.prototype.hasOwnProperty.call(e,t)||i(e,n,t)}
Object.defineProperty(e,"__esModule",{value:!0}),o(t(762),e),o(t(865),e),o(t(702),e)},865:(n,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.registerRoutesProvider=e.isRouteProvider=void 0
const i=t(450)
e.isRouteProvider=function(n){return"object"==typeof n&&i.isSome(null==n?void 0:n.routes)},e.registerRoutesProvider=function(n,e,t){e.routes(t).forEach(e=>{n.associate(e.rules,e.handler)})}},702:(n,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.makeRouterUsingRegisteredControllers=void 0
const i=t(865),o=t(762)
e.makeRouterUsingRegisteredControllers=function(n,e){const t=new o.Router
for(const o of n.registeredControllers)i.isRouteProvider(o)&&i.registerRoutesProvider(t,o,e)
return t}},762:(n,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Router=void 0
const i=t(450),o=t(52)
e.Router=class{constructor(){this.router=new o.UrlRouter}associate(n,e){this.router.associate(n,e)}intentFor(n){const e=this.router.routedObjectForUrl(n)
return i.isSome(e.object)&&i.isSome(e.parameters)?e.object(e.normalizedUrl,e.parameters,e):null}}},52:(n,e,t)=>{function i(n){return n.startsWith("{")&&n.endsWith("}")}Object.defineProperty(e,"__esModule",{value:!0}),e.UrlRouter=e.UrlRule=void 0
const o=t(450),r=t(974)
class l{constructor(n){this.identifier=n.identifier,this.protocol=n.protocol,this.hostName=n.hostName,o.isSome(n.path)?(this.pathComponents=n.path.split("/").filter(n=>n.length>0),this.pathParameterMap=function(n){const e={}
return n.forEach((n,t)=>{i(n)&&(e[n]=t)}),e}(this.pathComponents)):(this.pathComponents=void 0,this.pathParameterMap=void 0),this.pathExtension=n.pathExtension,this.query=function(n){const e=[]
if(o.isNothing(n))return e
for(const t of n){const n=t.split("=")
let i=n[0]
const o=-1!==i.indexOf("?")
i=i.replace("?","")
let r=null
n.length>1&&(r=decodeURIComponent(n[1])),e.push({key:i,value:r,optional:o})}return e}(n.query),this.hash=n.hash,this.regex=n.regex,o.isSome(n.exclusions)?this.exclusions=n.exclusions.map(function(n){return new l(n)}):this.exclusions=void 0}matches(n){return o.isSome(this.match(n))}extractParameters(n){var e
const t={}
if(o.isSome(this.pathComponents)&&o.isSome(this.pathParameterMap)){const e=n.pathComponents()
for(const n of Object.keys(this.pathParameterMap)){const i=n.replace("{","").replace("}",""),o=this.pathParameterMap[n]
t[i]=decodeURIComponent(e[o])}}if(o.isSome(this.query))for(const i of this.query){const r=null===(e=n.query)||void 0===e?void 0:e[i.key]
o.isSome(r)&&(t[i.key]=r)}return t}match(n){var e,t
let r=null
if(o.isSome(this.regex)){if(0===this.regex.length)return null
let t=!1
for(const i of this.regex){const o=i.exec(n.toString())
if(null!==o){t=!0,r=null!==(e=o.groups)&&void 0!==e?e:null
break}}if(!t)return null}if(o.isSome(this.protocol)&&n.protocol!==this.protocol)return null
if(o.isSome(this.hostName)&&n.host!==this.hostName)return null
if(o.isSome(this.pathComponents)){const e=this.pathComponents,t=n.pathComponents()
if(e.length!==t.length)return null
const o=e.length
for(let n=0;n<o;n+=1){const o=e[n]
if(!i(o)&&o!==t[n])return null}}if(o.isSome(this.pathExtension)&&n.pathExtension()!==this.pathExtension)return null
if(o.isSome(this.query))for(const e of this.query){const i=null===(t=n.query)||void 0===t?void 0:t[e.key]
if(o.isNothing(i)&&!e.optional)return null
if(o.isSome(e.value)&&e.value!==i)return null}if(o.isSome(this.hash)&&n.hash!==this.hash)return null
if(o.isSome(this.exclusions))for(const e of this.exclusions){if(o.isSome(e.exclusions))throw Error("Matching exclusion rules with further exclusion rules may introduce significant code-complexity and/or reduce the ease with which developers are able to reason about your desired goals. Are there any simpler options?")
if(o.isSome(e.match(n)))return null}return{parameters:this.extractParameters(n),matchGroups:r}}}e.UrlRule=l,e.UrlRouter=class{constructor(){this.routeMappings=[]}associate(n,e){const t=[]
for(const e of n)t.push(new l(e))
this.routeMappings.push({route:t,object:e})}routedObjectForUrl(n){var e
const t="string"==typeof n?new r.URL(n):n
for(const n of this.routeMappings)for(const i of n.route){const r=i.match(t)
if(o.isSome(r))return{normalizedUrl:t,parameters:r.parameters,object:n.object,matchedRuleIdentifier:null!==(e=i.identifier)&&void 0!==e?e:null,regexMatchGroups:r.matchGroups}}return{normalizedUrl:t,parameters:null,object:null,matchedRuleIdentifier:null,regexMatchGroups:null}}}},882:(n,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.exportBootstrap=void 0,e.exportBootstrap=function(n){"undefined"!=typeof $exportBootstrap&&$exportBootstrap(n)}},706:function(n,e,t){var i=this&&this.__createBinding||(Object.create?function(n,e,t,i){void 0===i&&(i=t),Object.defineProperty(n,i,{enumerable:!0,get:function(){return e[t]}})}:function(n,e,t,i){void 0===i&&(i=t),n[i]=e[t]}),o=this&&this.__exportStar||function(n,e){for(var t in n)"default"===t||Object.prototype.hasOwnProperty.call(e,t)||i(e,n,t)}
Object.defineProperty(e,"__esModule",{value:!0}),o(t(882),e),o(t(816),e)},816:(n,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.LegacyRuntime=e.Runtime=void 0
const t="function"==typeof exportService
class i{constructor(n,e){this.dispatcher=n,this.objectGraph=e}async dispatch(n){return this.dispatcher.dispatch(n,this.objectGraph)}}e.Runtime=i,e.LegacyRuntime=class extends i{constructor(n,e,t){super(n,e),this.services=t}serviceWithName(n){return this.services[n]}exportingService(n,e){return t&&function(n,e){exportService(n,e)}(n,e),this.services[n]=e,this}}},219:(n,e)=>{Object.defineProperty(e,"__esModule",{value:!0})},45:(n,e)=>{Object.defineProperty(e,"__esModule",{value:!0})},891:(n,e)=>{Object.defineProperty(e,"__esModule",{value:!0})},121:(n,e)=>{Object.defineProperty(e,"__esModule",{value:!0})},721:function(n,e,t){var i=this&&this.__createBinding||(Object.create?function(n,e,t,i){void 0===i&&(i=t),Object.defineProperty(n,i,{enumerable:!0,get:function(){return e[t]}})}:function(n,e,t,i){void 0===i&&(i=t),n[i]=e[t]}),o=this&&this.__exportStar||function(n,e){for(var t in n)"default"===t||Object.prototype.hasOwnProperty.call(e,t)||i(e,n,t)}
Object.defineProperty(e,"__esModule",{value:!0}),"undefined"==typeof preprocessor&&(globalThis.preprocessor={PRODUCTION_BUILD:!1,CARRY_BUILD:!1,DEBUG_BUILD:!1,INTERNAL_BUILD:!1}),"undefined"==typeof testContent&&(globalThis.testContent={INCLUDE_TEST_CONTENT:!1}),o(t(219),e),o(t(45),e),o(t(891),e),o(t(121),e),o(t(907),e),o(t(534),e),o(t(817),e),o(t(43),e),o(t(37),e),o(t(937),e),o(t(222),e)},907:(n,e)=>{Object.defineProperty(e,"__esModule",{value:!0})},534:(n,e)=>{Object.defineProperty(e,"__esModule",{value:!0})},817:(n,e)=>{Object.defineProperty(e,"__esModule",{value:!0})},43:(n,e)=>{Object.defineProperty(e,"__esModule",{value:!0})},37:(n,e)=>{Object.defineProperty(e,"__esModule",{value:!0})},937:(n,e)=>{Object.defineProperty(e,"__esModule",{value:!0})},222:(n,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.services=e.random=e.plist=e.platform=e.net=e.localizer=e.host=e.cryptography=e.bundle=e.bag=void 0
const i=t(900)
e.bag=i.makeMetatype("jet-engine:bag"),e.bundle=i.makeMetatype("jet-engine:bundle"),e.cryptography=i.makeMetatype("jet-engine:cryptography"),e.host=i.makeMetatype("jet-engine:host"),e.localizer=i.makeMetatype("jet-engine:localizer"),e.net=i.makeMetatype("jet-engine:net"),e.platform=i.makeMetatype("jet-engine:platform"),e.plist=i.makeMetatype("jet-engine:plist"),e.random=i.makeMetatype("jet-engine:random"),e.services=i.makeMetatype("jet-engine:services")},490:(n,e)=>{Object.defineProperty(e,"__esModule",{value:!0})},31:function(n,e,t){var i=this&&this.__createBinding||(Object.create?function(n,e,t,i){void 0===i&&(i=t),Object.defineProperty(n,i,{enumerable:!0,get:function(){return e[t]}})}:function(n,e,t,i){void 0===i&&(i=t),n[i]=e[t]}),o=this&&this.__exportStar||function(n,e){for(var t in n)"default"===t||Object.prototype.hasOwnProperty.call(e,t)||i(e,n,t)}
Object.defineProperty(e,"__esModule",{value:!0}),o(t(490),e)},447:(n,e)=>{var t
Object.defineProperty(e,"__esModule",{value:!0}),e.notInstrumented=e.PageInvocationPoint=e.EMPTY_LINTED_METRICS_EVENT=void 0,e.EMPTY_LINTED_METRICS_EVENT={fields:{},issues:[]},(t=e.PageInvocationPoint||(e.PageInvocationPoint={})).pageEnter="pageEnter",t.pageExit="pageExit",t.appExit="appExit",t.appEnter="appEnter",t.backButton="backButton",e.notInstrumented=function(n){switch(n){case 0:return{data:[],custom:{}}
case 1:default:return{}
case 2:return{instructions:[],custom:{}}
case 3:return{id:{id:"",impressionIndex:NaN},fields:{},custom:{}}}}},24:(n,e)=>{Object.defineProperty(e,"__esModule",{value:!0})},450:(n,e)=>{function t(n){return null==n}function i(n){return null!=n}Object.defineProperty(e,"__esModule",{value:!0}),e.flatMapOptional=e.mapOptional=e.unsafeUnwrapOptional=e.unwrapOptional=e.isSome=e.isNothing=e.unsafeUninitialized=void 0,e.unsafeUninitialized=function(){},e.isNothing=t,e.isSome=i,e.unwrapOptional=function(n){if(t(n))throw new ReferenceError
return n},e.unsafeUnwrapOptional=function(n){return n},e.mapOptional=function(n,e){return i(n)?e(n):n},e.flatMapOptional=function(n,e){return i(n)?e(n):n}},900:(n,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.makeMetatype=void 0,e.makeMetatype=function(n){return{name:n}}},974:(n,e,t)=>{function i(n,e,t){const i=n.indexOf(e)
let o,r=n
if(-1!==i){const l=n.slice(0,i),s=n.slice(i+e.length,n.length)
"prefix"===t?(o=l,r=s):(o=s,r=l)}return{result:o,remainder:r}}Object.defineProperty(e,"__esModule",{value:!0}),e.URL=void 0
const o=t(450),r=/^([a-z][a-z0-9.+-]*:)(\/\/)?([\S\s]*)/i,l=/([^=?&]+)=?([^&]*)/g,s=["hash","query","pathname","host"]
class a{constructor(n){var e
if(this.query={},o.isNothing(n))return
let t=n
const l=r.exec(n)
if(o.isSome(l)){let n=l[1]
null!=n&&(n=n.split(":")[0]),this.protocol=null!=n?n:void 0,t=null!==(e=l[3])&&void 0!==e?e:void 0}let u={remainder:t,result:void 0}
for(const n of s){if(void 0===u||void 0===u.remainder)break
switch(n){case"hash":u=i(u.remainder,"#","suffix"),this.hash=null==u?void 0:u.result
break
case"query":u=i(u.remainder,"?","suffix"),void 0!==(null==u?void 0:u.result)&&(this.query=a.queryFromString(u.result))
break
case"pathname":u=i(u.remainder,"/","suffix"),void 0!==(null==u?void 0:u.result)&&(this.pathname="/"+u.result)
break
case"host":{const n=i(u.remainder,"@","prefix"),e=null==n?void 0:n.result,t=null==n?void 0:n.remainder
if(void 0!==e){const n=e.split(":")
this.username=decodeURIComponent(n[0]),this.password=decodeURIComponent(n[1])}if(void 0!==t){const n=t.split(":")
this.host=n[0],this.port=n[1]}break}default:throw new Error("Unhandled case!")}}}get(n){switch(n){case"protocol":return this.protocol
case"username":return this.username
case"password":return this.password
case"port":return this.port
case"pathname":return this.pathname
case"query":return this.query
case"hash":return this.hash
default:return this[n]}}set(n,e){if(void 0===e)return this
switch("query"===n&&"string"==typeof e&&(e=a.queryFromString(e)),n){case"protocol":this.protocol=e
break
case"username":this.username=e
break
case"password":this.password=e
break
case"port":this.port=e
break
case"pathname":this.pathname=e
break
case"query":this.query=e
break
case"hash":this.hash=e
break
default:this[n]=e}return this}append(n,e){let t,i=this.get(n)
if("query"===n)void 0===i&&(i={}),"string"==typeof e&&(e=a.queryFromString(e)),t="string"==typeof i?{existingValue:i,...e}:{...i,...e}
else{void 0===i&&(i="")
let o=i
void 0===o&&(o="")
let r=o
if("pathname"===n){const n=o.length
0!==n&&"/"===i[n-1]||(r+="/")}r+=e,t=r}return this.set(n,t)}param(n,e){return null===n||(void 0===this.query&&(this.query={}),void 0===e?delete this.query[n]:this.query[n]=e),this}removeParam(n){return void 0===n||void 0===this.query||n in this.query&&delete this.query[n],this}path(n){return this.append("pathname",n)}pathExtension(){var n,e
if(void 0===this.pathname)return
const t=null!==(e=null===(n=this.pathname.split("/").filter(n=>n.length>0).pop())||void 0===n?void 0:n.split("."))&&void 0!==e?e:[]
return t.filter(function(n){return""!==n}).length<2?void 0:t.pop()}pathComponents(){return void 0===this.pathname?[]:this.pathname.split("/").filter(n=>n.length>0)}build(){return this.toString()}toString(){let n=""
return void 0!==this.protocol&&(n+=this.protocol+"://"),void 0!==this.username&&(n+=encodeURIComponent(this.username),void 0!==this.password&&(n+=":"+encodeURIComponent(this.password)),n+="@"),void 0!==this.host&&(n+=this.host,void 0!==this.port&&(n+=":"+this.port)),void 0!==this.pathname&&(n+=this.pathname),void 0!==this.query&&0!==Object.keys(this.query).length&&(n+="?"+a.toQueryString(this.query)),void 0!==this.hash&&(n+="#"+this.hash),n}static queryFromString(n){const e={}
let t=l.exec(n)
for(;null!==t;){const i=decodeURIComponent(t[1]),o=decodeURIComponent(t[2])
e[i]=o,t=l.exec(n)}return e}static toQueryString(n){let e="",t=!0
for(const i of Object.keys(n)){t||(e+="&"),t=!1,e+=encodeURIComponent(i)
const o=n[i]
null!==o&&o.length>0&&(e+="="+encodeURIComponent(o))}return e}static from(n){return new a(n)}static fromComponents(n,e,t,i,o){const r=new a
return r.protocol=n,r.host=e,r.pathname=t,r.query=null!=i?i:{},r.hash=o,r}}e.URL=a}},t={};(()=>{function e(n){return{$kind:"RecordLabelDetailPageIntent",contentDescriptor:n}}function t(n){return{$kind:"SongDetailPageIntent",contentDescriptor:n}}function i(n,e){var t
return null===(t=n.manifest.properties)||void 0===t?void 0:t.localizations[e]}function o(n,e){return n.hasOwnProperty(e)}function r(n){return`ContentDescriptor: ${n.kind}, ${e=n.identifiers,Object.entries(e).filter(([n,e])=>(0,Ko.isSome)(e)).map(([n,e])=>`${n}=${e}`).join(", ")}`
var e}function l(n,e){if(!n)return null
const t=new Date(n.toString()),i=Ho.languageTag(e)
return t.toLocaleString(i,{year:"numeric",timeZone:"UTC"})}function s(n,e){if(!n)return null
const t=Math.floor(n/1e3)
if(0===t)return
let i=t
t<60&&(i=60)
const o=i/3600
let r=Math.floor(o)
const l=i%3600
let s=Math.round(l/60)
60===s&&(r+=1,s=0)
const a=(0,Bo.f3)(_o.localization,e),u=Ho.languageTag(e),c=1===r?"FUSE.Hours.one":"FUSE.Hours.other",d=a.string(c,{count:r.toLocaleString(u)}),v=1===s?"FUSE.Minutes.one":"FUSE.Minutes.other",p=a.string(v,{count:s.toLocaleString(u)})
let f
return f=r>0&&s>0?a.string("FUSE.TotalTime.Format",{countHour:d,countMin:p}):r>0?d:p,f}function a(n,e){var t
const i=Ho.languageTag(e)
return null===(t=u(n,e))||void 0===t?void 0:t.toLocaleUpperCase(i)}function u(n,e){if(!n)return null
const t=new Date(n.toString()),i=Ho.languageTag(e)
return t.toLocaleString(i,{month:"long",day:"numeric",year:"numeric",timeZone:"UTC"})}function c(n,e){const t=Ho.languageTag(e)
return n.toLocaleString(t,{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"}).toLocaleUpperCase(t)}function d(n,e){if(!n)return null
const t=Ho.languageTag(e),i=new Date(Date.parse(n)),o=function(n){const e=v(n)
return(v(new Date).getTime()-e.getTime())/864e5}(i)
let r
return 0===o?r="FUSE.PlaylistLastUpdated.UpdatedToday":1===o?r="FUSE.PlaylistLastUpdated.UpdatedYesterday":o<7?r=function(n,e){const t=n.getDay()
switch(t){case 0:return"FUSE.PlaylistLastUpdated.UpdatedSunday"
case 1:return"FUSE.PlaylistLastUpdated.UpdatedMonday"
case 2:return"FUSE.PlaylistLastUpdated.UpdatedTuesday"
case 3:return"FUSE.PlaylistLastUpdated.UpdatedWednesday"
case 4:return"FUSE.PlaylistLastUpdated.UpdatedThursday"
case 5:return"FUSE.PlaylistLastUpdated.UpdatedFriday"
case 6:return"FUSE.PlaylistLastUpdated.UpdatedSaturday"
default:return Jo.error(e,"Invalid day of the week number",t.toString()),null}}(i,e):o<14?r="FUSE.PlaylistLastUpdated.UpdatedLastWeek":o<21&&(r="FUSE.PlaylistLastUpdated.UpdatedTwoWeeksAgo"),r?(0,Bo.f3)(_o.localization,e).string(r).toLocaleUpperCase(t):null}function v(n){const e=new Date(n)
return e.setHours(0,0,0,0),e}function p(n,e,t,i,o,r){(o={...o,...r}).actionType=i
const l=(0,Bo.f3)(_o.metrics,n),s=(0,eo.bI)(e,t,o,l.configuration)
return s.fields.eventVersion=5,{data:[s],custom:null!=r?r:{}}}function f(n,e,t,i,o,r){var l,s
const a=e.identifiers,u=null!==(s=null!==(l=a.storeAdamID)&&void 0!==l?l:a.storePurchasedAdamID)&&void 0!==s?s:"0"
return e.url&&((o=null!=o?o:{}).actionUrl=e.url),p(n,u,t,i,o,r)}function m(n,e,t,i,o=null,r=null,l){var s,a,u,c,d,v
const p=null!=l?l:{},f=null===(a=null===(s=e.body)||void 0===s?void 0:s.data)||void 0===a?void 0:a[0],m=null!=r?r:null==f?void 0:f.id
f&&(p.pageUrl=null!==(d=null===(c=null===(u=null==o?void 0:o.resource(f))||void 0===u?void 0:u.attributes)||void 0===c?void 0:c.url)&&void 0!==d?d:new Go(null!==(v=f.href)&&void 0!==v?v:"",n).string),p.pageType=i,t&&(p.pageFeatureName=t),m&&(p.pageId=m)
const h=function(n,e){return(0,Ko.isNothing)(e)?null:`${n}_${e}`}(i,m)
return h&&(p.page=h),{instructions:[{data:{topic:Vo,shouldFlush:!1,fields:{eventType:"page"},includingFields:["pageFields","languages"],excludingFields:[]},invocationPoints:[to.PageInvocationPoint.pageEnter]}],pageFields:p,custom:{}}}function h(n,e=!1){return{$kind:"SocialProfilePageIntent",contentDescriptor:n,isOwner:e}}function g(n,e=!1){return{$kind:"SocialProfilePageIntent",handle:n,isOwner:e}}function w(n){var e,t,i,o,r
return null!==(o=null!==(t=null===(e=null==n?void 0:n.plainEditorialNotes)||void 0===e?void 0:e.short)&&void 0!==t?t:null===(i=null==n?void 0:n.editorialNotes)||void 0===i?void 0:i.short)&&void 0!==o?o:null===(r=null==n?void 0:n.description)||void 0===r?void 0:r.short}function b(n){var e,t,i,o,r
return null!==(o=null!==(t=null===(e=null==n?void 0:n.plainEditorialNotes)||void 0===e?void 0:e.standard)&&void 0!==t?t:null===(i=null==n?void 0:n.editorialNotes)||void 0===i?void 0:i.standard)&&void 0!==o?o:null===(r=null==n?void 0:n.description)||void 0===r?void 0:r.standard}function k(n){var e
return(null==n?void 0:n.type)===oo.Stations&&"Episode"===(null===(e=null==n?void 0:n.attributes)||void 0===e?void 0:e.streamingRadioSubType)}function y(n,e){switch(n){case oo.Albums:return no.Album
case oo.AppleCurators:return no.AppleCurator
case oo.LibraryAlbums:return no.Album
case oo.LibrarySongs:return no.Song
case oo.Composers:return no.Artist
case oo.EditorialItems:return no.EditorialItem
case oo.Playlists:case oo.LibraryPlaylists:return no.Playlist
case oo.MusicMovies:return no.Movie
case oo.MusicVideos:return no.MusicVideo
case oo.SocialProfiles:case oo.PersonalSocialProfiles:return no.SocialProfile
case oo.Songs:return no.Song
case oo.Stations:return no.RadioStation
case oo.RecordLabels:return no.RecordLabel
case oo.TVShows:return no.TVShow
case oo.TVEpisodes:return no.TVEpisode
case oo.UploadedAudios:return no.ArtistUploadedSong
case oo.UploadedVideos:return no.ArtistUploadedVideo
case oo.Artists:return no.Artist
case oo.Curators:return no.Curator
case oo.Accounts:case oo.Activities:case oo.EditorialElements:case oo.Genres:case oo.Groupings:case oo.MarketingItems:case oo.MultiRooms:case oo.PersonalRecommendation:case oo.Rooms:case oo.SocialUpsells:case oo.StationEvents:case oo.TastePreferences:case oo.TVSeasons:return Jo.warn(e,`A ContentKind could not be found for a MediaAPI resource type "${n}".`),null}}function S(n,e){var t,i,o
const r=y(n.type,e)
if(!r)return null
const l=D(n.type,r,n.id),s=null!==(i=null===(t=n.attributes)||void 0===t?void 0:t.url)&&void 0!==i?i:null===(o=n.attributes)||void 0===o?void 0:o.postUrl
return l.url=s,l}function $(n,e){const t=y(n.type,e)
return t?D(n.type,t,n.id):null}function D(n,e,t){switch(n){case oo.LibraryAlbums:return{kind:e,identifiers:{storeCloudAlbumID:t}}
case oo.LibraryPlaylists:return{kind:e,identifiers:{cloudUniversalLibraryID:t}}
case oo.SocialProfiles:case oo.PersonalSocialProfiles:return{kind:e,identifiers:{socialProfileID:t}}
default:return{kind:e,identifiers:{storeAdamID:t}}}}function A(n){return"flowAction"===n.$kind}function P(n,e){return{$kind:"flowAction",destination:n,actionMetrics:e}}function E(n,i,o=null,r,l){const s=function(n){const e=new Set
return function(n){const e=n.identifiers
return(0,Ko.isSome)(e.storeAdamID)||(0,Ko.isSome)(e.socialProfileID)}(n)&&e.add("catalog"),function(n){const e=n.identifiers
return(0,Ko.isSome)(e.cloudUniversalLibraryID)||(0,Ko.isSome)(e.libraryPersistentID)||(0,Ko.isSome)(e.storeCloudAlbumID)||(0,Ko.isSome)(e.storePurchasedAdamID)||(0,Ko.isSome)(e.storeCloudID)}(n)&&e.add("library"),e}(n)
return s.has("library")?function(n,e,t=null,i,o){const r=f(i,n,e,"navigate",void 0,o)
switch(n.kind){case no.Album:case no.Playlist:return P({kind:lo.LibraryItemDetailPage,contentDescriptor:n},r)
default:return Jo.warn(i,`No FlowAction for content descriptor with kind: "${n.kind}".`),null}}(n,i,o,r,l):s.has("catalog")?function(n,i,o=null,r,l){const s=f(r,n,i,"navigate",void 0,l)
switch(n.kind){case no.Album:case no.Playlist:case no.Artist:case no.MusicVideo:case no.Movie:case no.TVEpisode:case no.TVShow:case no.AppleCurator:case no.Curator:case no.ArtistUploadedVideo:return P({kind:lo.CatalogItemDetailPage,contentDescriptor:n,prominentItemIdentifier:o},s)
case no.RecordLabel:return P({kind:lo.CatalogPage,intent:e(n)},s)
case no.SocialProfile:return P({kind:lo.CatalogPage,intent:h(n)},s)
case no.Song:return P({kind:lo.CatalogPage,intent:t(n)},s)
default:return Jo.warn(r,`No FlowAction for content descriptor with kind: "${n.kind}".`),null}}(n,i,o,r,l):(Jo.warn(r,`Couldn't create flow action, content descriptor has no identifier: "${n.kind}".`),null)}function O(n,e){var t
const i=null===(t=n.attributes)||void 0===t?void 0:t.url
if((0,Ko.isNothing)(i))return Jo.warn(e,`No url in resource with id "${n.id}" and type "${n.type}". Could not create FlowAction.`),null
const o=I(i,n.id,"link",e)
if(o)return o
const r=S(n,e)
return r?E(r,"link",null,e):(Jo.warn(e,`No content descriptor in resource with id '${n.id}' and type '${n.type}'. Could not create FlowAction.`),null)}function I(n,e,t,i,o=!1){if(!n)return null
const r=p(i,null!=e?e:"0",t,"navigate",{actionUrl:n}),l=(0,Bo.f3)(_o.router,i).intentFor(n)
if(!l)return void Jo.warn(i,`No intent for url '${n}'. Couldn't create a segue.`)
const s=(0,Bo.f3)(_o.intentDispatcher,i).actionFor(l,i,{metrics:r,isDeepLinkAction:o})
return(0,Ko.isSome)(s)?s:(Jo.warn(i,`Couldn't create a segue for URL '${n}'.`),null)}function N(n,e){const t=n.match(/^(\d+)([A-Z]+)(\d+)([a-z]*)$/)
if(!t)return Jo.error(e,`Unable to construct components for os version string: '${n}'`),null
const[,i,o,r,l]=t,s=parseInt(i,10)
if(isNaN(s))return Jo.error(e,`Expected major number to be a number: ${n}`),null
let a=!1,u=r
4===u.length&&(a="5"===r[0],u=r.substring(1))
const c=parseInt(u,10)
return isNaN(c)?(Jo.error(e,`Expected minor number to be a number: ${n}`),null):{majorNumber:s,majorLetter:o,minorNumber:c,isSeedBuild:a,...""!==l&&{minorLetter:l}}}function F(n,e){return U(N(n,e),e)}function U(n,e){var t,i
if(!n)return!1
const o=function(n){return N((0,Bo.f3)(_o.host,n).osBuild,n)}(e)
return!!o&&(o.majorNumber!==n.majorNumber?o.majorNumber>n.majorNumber:o.majorLetter!==n.majorLetter?o.majorLetter>n.majorLetter:o.minorNumber!==n.minorNumber?o.minorNumber>n.minorNumber:(null!==(t=o.minorLetter)&&void 0!==t?t:"")>=(null!==(i=n.minorLetter)&&void 0!==i?i:""))}function C(n){return"macOS"===(0,Bo.f3)(_o.host,n).platform}function L(n){const e=(0,Bo.f3)(_o.host,n)
return"iOS"===e.platform||"macOS"===e.platform||"tvOS"===e.platform||"watchOS"===e.platform}function M(n){const e=n.optional(_o.restrictionsController)
return!0===(null==e?void 0:e.isExplicitContentRestricted)}function R(n){return(null==n?void 0:n.contentRating)===so.Explicit}function B(n){return(0,Bo.f3)(_o.subscriptionStatusCoordinator,n).subscriptionStatus}function T(n){const e=B(n)
return(0,Ko.isSome)(e)&&"subscribed"===e.accountStatus}function x(n){var e
if(!L(n))return!1
const t=B(n),i=null===(e=null==t?void 0:t.rawResponse)||void 0===e?void 0:e.music
return"glide"===(null==t?void 0:t.accountStatus)||"Glide"===(null==i?void 0:i.status)||!0===(null==i?void 0:i.isInGlidePreview)}function K(n){var e
const t=null===(e=B(n))||void 0===e?void 0:e.capabilities
return new Set(t)}function j(n){const e=B(n)
return(0,Ko.isSome)(null==e?void 0:e.accountIdentifier)}function _(n){return j(n)&&K(n).has("fullCatalogPlayback")&&!function(n){const e=B(n)
return!0===(null==e?void 0:e.isMinor)}(n)&&!function(n){const e=n.optional(_o.restrictionsController)
return!0===(null==e?void 0:e.isSocialDisabled)}(n)&&Ho.musicFriendsExists(n)}function J(n,e,t,i){return{$kind:"openFinancePageAction",id:e,url:n,actionMetrics:t,metricsOverlay:i,data:null}}function q(n,e,t){var i,o
const r=function(n,e){return(null==n?void 0:n.url)||(Jo.warn(e,"Marketing item offer missing url."),"https://finance-app.itunes.apple.com/subscribe")}(n,t)
return J(r,"finance-app",e,{app:"com.apple.Music",topic:"xp_its_music_main",dsId:null!==(o=null===(i=B(t))||void 0===i?void 0:i.accountIdentifier)&&void 0!==o?o:"",...H(n)})}function H(n){const e=null==n?void 0:n.metrics
return e?{precedingMarketing:e}:null}function z(n,e){var t,i
if(n.type!==oo.PersonalRecommendation)return null
const o=null===(i=null===(t=n.meta)||void 0===t?void 0:t.metrics)||void 0===i?void 0:i.reco_id
return o||Jo.warn(e,`Personal recommendation with id '${n.id}' missing recoID.`),o}function W(n,e){const t=function(n,e){var t,i
const o=null===(i=null===(t=null==n?void 0:n.meta)||void 0===t?void 0:t.metrics)||void 0===i?void 0:i.reco_id
return o||Jo.warn(e,"Music API response body missing recoID."),o}(n,e)
return G(t)}function G(n){return n?{recoID:n}:null}function V(n){return"playAction"===n.$kind}function Z(n){switch(n){case no.EditorialItem:case no.Artist:case no.AppleCurator:case no.Curator:case no.RecordLabel:case no.SocialProfile:case no.TVShow:return!1
default:return!0}}function X(n){switch(n){case no.Song:case no.MusicVideo:case no.ArtistUploadedSong:case no.ArtistUploadedVideo:case no.TVEpisode:case no.Movie:return!0
default:return!1}}function Y(n,e,t,i,o,r=!1){if(!n)return null
if(!Z(n.kind))return null
return Q(n,e,r)||{$kind:"playAction",actionMetrics:f(e,n,"button","play",void 0,G(o)),items:[{contentDescriptor:n}],containerContentDescriptor:i,groupingIdentifier:X(n.kind)?t:null}}function Q(n,e,t){if(!U(er,e))return null
if(T(e))return null
if(x(e)&&t)return null
if(n&&function(n){switch(n){case no.RadioStation:case no.ArtistUploadedVideo:case no.ArtistUploadedSong:return!0
default:return!1}}(n.kind))return null
const i=nr.actionToOpenPlaybackUpsell(n,e)
return i?rn([i],Zo):null}function nn(n){switch(n.id){case Qi.ListenNow:return{kind:uo.ListenNow}
case Qi.Browse:return{kind:uo.Browse}
case Qi.Radio:return{kind:uo.Radio}
case Qi.Search:return{kind:uo.Search}
case Qi.Library:return{kind:uo.Library}}}function en(n,e){return n.some(n=>n.kind===e.kind)}function tn(n,e,t){var i
let o=n
const r=null===(i=function(n){const e=Ho.musicTabs(n)
if(!e)return null
const t=B(n)
if(!t)return null
switch(t.accountStatus){case"subscribed":return e.subscriber
case"glide":return e.voiceSubscriber
default:return e.undecided}}(t))||void 0===i?void 0:i.map(nn)
if(r){if(!en(r,n)){const e=function(n,e){return e.find(e=>en(n,e))}(r,[{kind:uo.Search},{kind:uo.ListenNow}])
e?(Jo.log(t,`Tab '${n.kind}' not available, falling back to '${e.kind}'.`),o=e):Jo.error(t,`Unable to resolve tab '${n.kind}' from tabs available in bag ${JSON.stringify(null!=r?r:{})}`)}}else Jo.error(t,"Available tabs missing.")
return{$kind:"setActiveNavigationControllerAction",navigationControllerIdentifier:o,actionMetrics:e}}function on(n){return"compoundAction"===n.$kind}function rn(n,e){return{$kind:"compoundAction",subactions:n,actionMetrics:e}}function ln(n){return on(n)?sn(n):A(n)?function(n){var e
let t
switch(n.kind){case lo.CatalogItemDetailPage:t=`CatalogDetailPage: ${r(n.contentDescriptor)} ${null!==(e=n.prominentItemIdentifier)&&void 0!==e?e:""}`
break
case lo.CatalogPage:t=`CatalogPage: Intent: ${n.intent.$kind}`
break
case lo.LibraryItemDetailPage:t=`LibraryDetailPage: ${r(n.contentDescriptor)}}`
break
case lo.NavigationControllerRootPage:t="TabRoot"
break
case lo.OnboardingPage:t="OnboardingPage"
break
case lo.SearchResults:t=`SearchResults: ${n.searchParameters.term}`}return`FlowAction: ${null!=t?t:""}`}(n.destination):function(n){return"setActiveNavigationControllerAction"===n.$kind}(n)?function(n){return`SelectTabAction: ${n.navigationControllerIdentifier.kind}`}(n):function(n){return"openFinancePageAction"===n.$kind}(n)?function(n){return`OpenFinancePageAction: ${n.url}`}(n):function(n){return"setPersistenceItemAction"===n.$kind}(n)?function(n){return`SetPersistenceItemAction: ${n.scope}.${n.key}`}(n):V(n)?function(n){return`PlayAction: ${JSON.stringify(n.items)}`}(n):n.$kind}function sn(n){return`CompoundAction: ${n.subactions.map(ln).join(", ")}`}function an(n,e,t){const i=t.getTime()-1e3*e.secondsUntilExpiration.start,o=t.getTime()-1e3*e.secondsUntilExpiration.end,r=n.getTime()
return!(r<i||r>o)}function un(n,e){const t=function(n,e){var t,i
const o=null===(i=null===(t=n.rawResponse)||void 0===t?void 0:t.account)||void 0===i?void 0:i.studentExpirationDate
return o?new Date(o):null}(n)
if(!t)return null
const i=new Date,o=rr.find(n=>an(i,n,t))
if(!o)return null
const r=function(n,e,t){const i=tr.lastStudentReverificationPromptDate(t)
if(!i)return!0
switch(n.promptCadence){case"once":return!an(i,n,e)
case"daily":return o=i,r=new Date,!(o.getFullYear()===r.getFullYear()&&o.getMonth()===r.getMonth()&&o.getDate()===r.getDate())}var o,r}(o,t,e)
if(!r)return null
const l=ir.urlForMusicDeepLinkKey("studentreverification",e)
return l?rn([tr.setLastStudentReverificationPromptDateAction(i,e),J(l.toString(),"open-student-reverification",Zo)],Zo):(Jo.error(e,"Unable to construct Commerce App student reverification URL."),null)}function cn(n,e){const t=Object.keys(n).find(n=>n.toLowerCase()===e.toLowerCase())
return t?n[t]:null}function dn(n,e){return(0,Bo.f3)(_o.network,e).fetch(n).then(t=>{if(!t.ok){const e=new Error(`Bad Status code ${t.status} for ${n.url}`)
throw Object.assign(e,{userInfo:{status:t.status,body:t.body}}),e}const i=t.body,o=(0,Ko.isSome)(i)&&i.length>0
if(!o&&"GET"===n.method)throw new Error(`Empty response body for ${n.url}`)
const r=function(n,e){const t=function(n){const e=cn(n,"Cache-Control")
if(!e)return null
const t={}
return e.split(",").forEach(n=>{const e=n.split("=")
if(1===e.length){const n=e[0].trim()
t[n]=void 0}else if(2===e.length){const n=e[0].trim(),i=e[1].trim()
t[n]=i}}),t}(n)
if(!t)return Jo.warn(e,"Missing `cache-control` header"),null
const i=t["max-age"]
if(!i)return Jo.warn(e,"Missing `cache-control:max-age` header"),null
const o=cn(n,"Date")
if(!o)return Jo.warn(e,"Missing `date` header"),null
const r=new Date(o),l=1e3*parseInt(i,10),s=r.getTime()+l
return new Date(s)}(t.headers,e),l=t.metrics
return{body:o?JSON.parse(i):null,statusCode:t.status,expirationDate:r,metrics:l}})}function vn(n,e){return dn({url:n.string},e)}function pn(n){var e
const t=n.metrics,i=null==t?void 0:t[t.length-1]
return!!i&&null!==(e=i.responseWasCached)&&void 0!==e&&e}async function fn(n,e,t){const i=Ho.countryCode(t),o=new Go(`/v1/engagement/${i}/upsell/marketing-items`,t)
return o.queryString.addParameters({serviceType:"music",placement:n,limit:e.toString()}),L(t)&&o.queryString.with.add("voice"),vn(o,t)}function mn(n,e){return F("21D5026",e)?{invalidationRules:{eventTriggers:[{events:[{name:"subscriptionStatusChange"}],intent:n}]}}:null}function hn(n){if(!j(n))return Jo.log(n,"Not requesting recently played radio, user isn't signed in."),Promise.resolve(null)
const e=new Go("/v1/me/recent/radio-stations",n)
return e.queryString.addParameters({limit:"10"}),dn({url:e.string,cache:"no-cache"},n)}function gn(n){switch(n){case po.HeroListShelf:case po.CopperSwoosh:case po.CopperTrackSwoosh:case po.RecentlyPlayedRadioMarker:case po.LinkList:case po.LiveRadioShelf:case po.BrickSwoosh:case po.MasterSwoosh:case po.RoomSwoosh:case po.Paragraph:case po.SingularLink:return!0
default:return!1}}function wn(n,e){return n?{dictionary:n,cropStyle:e}:null}function bn(n,e){return n&&function(n){return(0,Ko.isSome)(n.motionArtistFullscreen16x9)||(0,Ko.isSome)(n.motionArtistWide16x9)||(0,Ko.isSome)(n.motionDetailSquare)||(0,Ko.isSome)(n.motionDetailTall)||(0,Ko.isSome)(n.motionMediumVideo16x9)||(0,Ko.isSome)(n.motionSquareVideo1x1)||(0,Ko.isSome)(n.motionTallVideo3x4)||(0,Ko.isSome)(n.motionWideVideo21x9)}(n)?{dictionary:n,cropStyle:e}:null}function kn(n,e,t,i){return(0,Bo.f3)(vr,t).uniqueItemID(n,e,i)}function yn(n,e){return(0,Bo.f3)(vr,e).uniqueSectionID(n)}function Sn(n){return n?n.replace("Apple Music","\uf8ff\u202fMusic"):null}function $n(n,e){var t
const i=null===(t=n.attributes)||void 0===t?void 0:t.endTime
if(!i)return Jo.warn(e,`Can't determine whether station event with id "${n.id}" ends in the future, missing end time ${i}".`),!1
const o=Date.now()
return new Date(i).getTime()>o}function Dn(n,e){var t,i
const o=null===(t=n.attributes)||void 0===t?void 0:t.startTime,r=null===(i=n.attributes)||void 0===i?void 0:i.endTime
if(!o||!r)return Jo.warn(e,`Can't determine whether event with id "${n.id}" is active, missing timings "${o} - ${r}".`),!1
const l=Date.now()
return!(new Date(o).getTime()>l||new Date(r).getTime()<=l)}function An(n,e){var t,i
const o=null===(t=n.attributes)||void 0===t?void 0:t.startTime,r=null===(i=n.attributes)||void 0===i?void 0:i.endTime
if(!o||!r)return Jo.warn(e,`Can't derive localized time range, station event with id "${n.id}" missing timings "${o} - ${r}".`),null
const l=function(n,e,t,i=!1){const o=Ho.languageTag(t),r=o.substring(0,2),l=new Intl.DateTimeFormat(o,{hour:"numeric",minute:"numeric",timeZone:i?"UTC":void 0})
return"en"===r.toLowerCase()?function(n,e,t){const i=t.resolvedOptions().hour12,o=t.formatRangeToParts(n,e),r=i&&0===n.getMinutes(),l=i&&0===e.getMinutes(),s=i&&function(n){let e
for(const t of n)if("startRange"===t.source&&"dayPeriod"===t.type)e=t.value
else if("endRange"===t.source&&"dayPeriod"===t.type&&e===t.value)return!0
return!1}(o)
let a="",u=!1
return o.forEach(n=>{"month"!==n.type&&"year"!==n.type&&"day"!==n.type&&"second"!==n.type?("hour"!==n.type&&"minute"!==n.type||(u=!1),u||"literal"===n.type&&" "===n.value||s&&"startRange"===n.source&&"dayPeriod"===n.type||(!r||"startRange"!==n.source||"minute"!==n.type&&"literal"!==n.type)&&(!l||"endRange"!==n.source||"minute"!==n.type&&"literal"!==n.type)&&(a+=n.value)):u=!0}),a}(n,e,l):l.formatRange(n,e)}(new Date(o),new Date(r),e)
if(!Dn(n,e))return l
const s=(0,Bo.f3)(_o.localization,e),a=s.string("FUSE.Radio.Live")
return s.string("AMWEB.ContentA.Middot.ContentB",{contentA:a,contentB:l})}function Pn(n,e){var t,i
const o=null===(t=n.attributes)||void 0===t?void 0:t.startTime,r=null===(i=e.attributes)||void 0===i?void 0:i.startTime
return(o?new Date(o).getTime():0)-(r?new Date(r).getTime():0)}function En(n,e,t){var i,o
const r=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.events)||void 0===o?void 0:o.data
return r?e.resources(r).sort(Pn):(Jo.warn(t,`Radio station with id "${n.id}" and type "${n.type}", missing station event resource identifiers.`),null)}function On(n,e,t){return{$kind:"RefreshLiveRadioShelfItemIntent",reason:n,station:e,orderedStationEvents:t}}function In(n,e,t,i){var o,r,l,s,a,u,c,d,v,f,m,h,g,w,k,y,D
const A=e.attributes
if(!A)return Jo.warn(i,`Dropping live radio item with id "${e.id}" and type "${e.type}", missing attributes.`),null
const O=t.filter(n=>$n(n,i)),I=O.find(n=>Dn(n,i))
if(!I)return Jo.warn(i,`Dropping live radio item with id "${e.id}" and type "${e.type}", couldn't find active station event.`),null
let N
const F=null===(r=null===(o=I.attributes)||void 0===o?void 0:o.editorialVideo)||void 0===r?void 0:r.motionMediumVideo16x9
let U
F&&(N=bn({motionMediumVideo16x9:F},mo.SpecificRectangle))
const C=e.href
if(C){const n=null!==(l=Sn(A.name))&&void 0!==l?l:"",e=zo.string("FUSE.Radio.Station.Schedule",i,{stationName:n})
U=P({kind:lo.CatalogPage,intent:(y=C,D=e,{$kind:"LiveRadioSchedulePageIntent",href:y,title:D})},p(i,"fullSchedule","button","navigate",{actionUrl:C}))}const L=S(e,i),M=Y(L,i)
let R
const B=null===(u=null===(a=null===(s=I.relationships)||void 0===s?void 0:s.curator)||void 0===a?void 0:a.data)||void 0===u?void 0:u[0]
if(B){const n=$(B,i)
n&&(R=E(n,"ShelfItem",null,i))}let T
R||Jo.warn(i,`Station event with id '${I.id}' missing curator, no segue can be constructed.`),T=M&&R?rn([M,R],M.actionMetrics):null!=M?M:R
const x={id:n,heading:Sn(A.name),subheading:null!==(d=null!==(c=A.artistName)&&void 0!==c?c:A.curatorName)&&void 0!==d?d:null===(v=A.plainEditorialNotes)||void 0===v?void 0:v.tagline,headline:An(I,i),title:null===(f=I.attributes)||void 0===f?void 0:f.title,subtitle:b(I.attributes),artwork:wn(null===(m=I.attributes)||void 0===m?void 0:m.heroArtwork,fo.SpecificRectangle),videoArtwork:N,contentDescriptor:L,playAction:M,segue:T,scheduleSegue:U,name:A.name},K=function(n,e){const t=n.findIndex(n=>n===e)
return-1===t?null:n[t+1]}(O,I)
let j
if(K){const t=`Station Event "${null!==(w=null!==(g=null===(h=K.attributes)||void 0===h?void 0:h.title)&&void 0!==g?g:A.name)&&void 0!==w?w:"Unknown show"}" starting.`
j={events:[{name:"expirationDate",date:new Date(null===(k=K.attributes)||void 0===k?void 0:k.startTime).toJSON()}],invalidatingItemIDs:[n],intent:On(t,e,O)}}return{lockup:x,invalidationEventTrigger:j}}function Nn(n){return x(n)?{title:zo.string("FUSE.Glide.SiriBanner.Title",n)}:null}function Fn(n,e){return n||e?{dolbyAtmos:null==n?void 0:n.includes("atmos"),dolbyAudio:null==n?void 0:n.includes("surround"),lossless:null==n?void 0:n.includes("lossless"),hiResLossless:null==n?void 0:n.includes("hi-res-lossless"),digitalMaster:e}:null}function Un(n,e){return{id:n,itemKind:"containerDetailHeaderLockup",presentation:{kind:"single"},items:[e]}}function Cn(){return{$kind:"pausePlaybackAction",actionMetrics:Zo}}function Ln(){return{$kind:"resumePlaybackAction",actionMetrics:Zo}}function Mn(n,e){const t=e?"FUSE.SongsListHeaders.video":"FUSE.SongsListHeaders.song"
return{item:{firstColumnText:zo.string(t,n),secondColumnText:zo.string("FUSE.SongsListHeaders.artist",n),thirdColumnText:zo.string("FUSE.SongsListHeaders.album",n)},kind:"column"}}function Rn(n){return!!n&&"default"===n.kind}function Bn(n,e,t){return{id:n,itemKind:"trackLockup",presentation:{kind:"collection",layout:"list"},items:e,header:t}}function Tn(n,e,t,i){return{id:n,itemKind:"trackLockup",presentation:{kind:"collection",layout:{kind:"shelf",numberOfRows:t}},items:e,header:i,displaySeparator:!0}}function xn(n,e,t){return Bn(e,n,Mn(t,!1))}function Kn(n,e,t,i,o){var r,l
const s=null===(l=null===(r=n.relationships)||void 0===r?void 0:r.tracks)||void 0===l?void 0:l.data
if(!s)return Jo.warn(t,"No tracks in container."),null
const a=[]
let u=!1,c=i?1:null,d=!0
const v=[]
let p,m=0,h=0,g=!1
e.resourcesAndIdentifiers(s).forEach(([i,r])=>{const l=!u&&(0,Ko.isSome)(o)&&o===i.id
u=u||l
const s=jn(i.id,i,n.type,n,e,t,l,null==c?void 0:c.toLocaleString(),r)
c&&(c+=1),s.socialProfileContentDescriptor=function(n,e,t){var i,o
const r=null===(o=null===(i=n.meta)||void 0===i?void 0:i.contributors)||void 0===o?void 0:o[oo.SocialProfiles],l=null==r?void 0:r[0]
if(!l)return null
const s=e.resourceWithID(l,oo.SocialProfiles)
return s?S(s,t):null}(r,e,t),d=d&&i.type===oo.MusicVideos,a.push(s),v.push(i),p||(p=s.discNumber),(0,Ko.isSome)(s.workName)&&m++,(0,Ko.isSome)(s.discNumber)&&(h++,p!==s.discNumber&&(g=!0))})
const w=yn(`track-list - ${n.id}`,t)
let b
return b=a.length===m?function(n,e,t,i,o){if(0===e.length)return[]
const r=S(n,t),l=[]
let s,a,u,c,d,v=[]
return e.forEach((e,p)=>{var m,h,g,w,b
const k=o[p]
if(e.workName!==s){s=e.workName,a=[],v=[],u=0,(0,Ko.isSome)(e.playAction)&&V(e.playAction)&&(d=e.playAction.groupingIdentifier)
const o=re(oo.Composers,k,i.resourceMap,t,null===(m=k.attributes)||void 0===m?void 0:m.composerName)||re(oo.Artists,k,i.resourceMap,t,null===(h=k.attributes)||void 0===h?void 0:h.composerName)
c={firstRowText:null!=s?s:"",secondRowLinks:o,duration:0,groupingIdentifier:d},l.push({id:yn(`track-list - ${n.id} - ${s}`,t),itemKind:"trackLockup",presentation:{kind:"collection",layout:"list"},items:a,header:{kind:"composer",item:c}})}e.contentDescriptor&&v.push(e.contentDescriptor)
const y=function(n,e,t,i,o){if(0===n.length||!i)return null
if(n.findIndex(n=>!Z(n.kind))>=0)return null
const r=n.findIndex(n=>!X(n.kind))>=0,l=n.map(n=>({contentDescriptor:n}))
return{$kind:"playAction",actionMetrics:f(e,i,"button","play",void 0,G(void 0)),items:l,containerContentDescriptor:i,groupingIdentifier:r?null:t}}(v,t,d,r)
let S=null!==(g=c.duration)&&void 0!==g?g:0
S+=null!==(w=e.duration)&&void 0!==w?w:0,c.duration=S,c.playAction=y,a.push(e),e.isSectionGrouped=!0
const $=(b=e.playAction)?V(b)?b:on(b)?b.subactions.find(V):null:null
$&&($.groupingIdentifier=d)}),l}(n,a,t,e,v):g&&a.length===h&&n.type===oo.Albums?function(n,e,t){if(0===e.length)return[]
const i=[]
let o,r,l
return e.forEach((e,s)=>{const a=e.discNumber
if(o!==a){l=[],o=a
const e=zo.string("FUSE.Disc",t,{discNumber:`${o}`})
r={title:e},i.push({id:yn(`track-list - ${n.id} - ${o}`,t),itemKind:"trackLockup",presentation:{kind:"collection",layout:"list"},items:l,header:{kind:"default",item:r}})}l.push(e)}),i}(n,a,t):[Bn(w,a)],n.type===oo.Playlists&&b.length>0&&(b[0].header=Mn(t,d)),{sections:b,isHomogenousMusicVideoTracklist:d&&!!a.length}}function jn(n,e,t,i,o,r,l,s,a){var u,c,d,v,p,f,m,h,g,w,b,k
const y=S(e,r)
let $,D
y||Jo.warn(r,`For trackResource.id = ${n}, contentDescriptor missing...`),i&&($=i.id,D=S(i,r))
const A=null===(u=null==i?void 0:i.attributes)||void 0===u?void 0:u.artistName,P=t===oo.Albums,E=null===(c=e.attributes)||void 0===c?void 0:c.artistName,O=null===(d=e.attributes)||void 0===d?void 0:d.workName,I=function(n){const e=n.attributes
let t=""
return(null==e?void 0:e.movementNumber)&&(t+=`${function(n){let e=""
for(let t=0;t<pr.length;t++){const i=pr[t],o=fr[t],r=Math.floor(n/o)
n-=r*o,e+=i.repeat(r)}return e}(e.movementNumber)}. `),(null==e?void 0:e.movementName)?t+=e.movementName:(null==e?void 0:e.name)?t+=e.name:(null==e?void 0:e.workName)&&(t=e.workName),t}(e),N=null===(v=e.attributes)||void 0===v?void 0:v.composerName,F=null===(p=e.attributes)||void 0===p?void 0:p.discNumber,U=A===E&&P||!!O,C=P?null:null===(f=e.attributes)||void 0===f?void 0:f.artwork
let L
L=P?{kind:"albumTrackList",hasVideo:!1}:{kind:"playlistTrackList",hasVideo:!1,hasBadging:!1}
const M=Y(y,r,$,D),B=Jn(e,r),x=(null!==(h=null===(m=null==a?void 0:a.meta)||void 0===m?void 0:m.popularity)&&void 0!==h?h:0)>.7
return{id:kn(`track-lockup - ${null!==(g=null==i?void 0:i.id)&&void 0!==g?g:""}`,n,r),title:O?I:null===(w=e.attributes)||void 0===w?void 0:w.name,trackNumber:P?null===(b=e.attributes)||void 0===b?void 0:b.trackNumber:null,tertiaryLinks:P?null:qn(e,r),duration:null===(k=e.attributes)||void 0===k?void 0:k.durationInMillis,contentDescriptor:y,artwork:wn(C),subtitleLinks:U?null:re(oo.Artists,e,o.resourceMap,r,E),playAction:B?null:M,layoutStyle:L,showExplicitBadge:R(e.attributes),isProminent:l,rankingText:s,pauseAction:Cn(),resumeAction:Ln(),isDisabled:B,isPreviewMode:!T(r),workName:O,composer:N,showPopularityIndicator:x,discNumber:F}}function _n(n,e){var t
if(n.type!==oo.Albums)return Jo.error(e,`isPreReleaseAlbum called with non-album resource ${JSON.stringify(n)}`),!1
const i=null===(t=n.attributes)||void 0===t?void 0:t.releaseDate
return!(0,Ko.isNothing)(i)&&new Date(i.toString())>new Date}function Jn(n,e){var t
const i=M(e)&&R(n.attributes),o=(0,Ko.isNothing)(null===(t=n.attributes)||void 0===t?void 0:t.playParams)
return i||o}function qn(n,e){var t,i,o
const r=null===(t=n.attributes)||void 0===t?void 0:t.albumName
if(!r)return null
const l=null===(i=n.attributes)||void 0===i?void 0:i.url
if(!l)return te(r)
const s=new ao.URL(l)
return null===(o=s.query)||void 0===o||delete o.i,[{title:r,segue:I(s.toString(),n.id,"link",e)}]}function Hn(n,e){var t,i
const o=n.attributes
return{headerTitle:null==o?void 0:o.name,headerSubtitle:zn(n,e),paragraphText:null!==(i=null===(t=null==o?void 0:o.editorialNotes)||void 0===t?void 0:t.standard)&&void 0!==i?i:w(o)}}function zn(n,e){const t=Zn(n),i=n.attributes,o=l(null==i?void 0:i.releaseDate,e)
return t?o?(0,Bo.f3)(_o.localization,e).string("AMWEB.ContentA.Middot.ContentB",{contentA:t,contentB:o}):t:o}function Wn(n,e,t,i,o){if(!n)return null
const r=function(n,e,t,i,o,r,l,s=!1){var a
if(!r||!M(e))return Y(n,e,t,i,l,s)
if(!n)return null
if(!Z(n.kind))return null
const u=Q(n,e,s)
if(u)return u
const c=G(l),d=[]
return(null==r?void 0:r.data)&&(null===(a=null==o?void 0:o.resources(r.data))||void 0===a||a.forEach(n=>{var t
if(n&&(null===(t=n.attributes)||void 0===t?void 0:t.contentRating)!==so.Explicit){const t=S(n,e)
if(t){const n={contentDescriptor:t}
d.push(n)}}})),{$kind:"playAction",actionMetrics:f(e,n,"button","play",void 0,c),items:d,containerContentDescriptor:i,groupingIdentifier:X(n.kind)?t:null}}(n,o,t,n,e,i)
return T(o)?{id:`play-button-subscriber-${t}`,segue:r,title:zo.string("FUSE.Play",o)}:{id:`play-button-non-subscriber-${t}`,segue:r,title:zo.string("FUSE.Preview",o)}}function Gn(n,e,t,i){if(!T(i))return null
if(!t||t<=1)return null
const o=function(n,e,t,i){return n?{$kind:"shuffleAction",actionMetrics:f(e,n,"button","shuffleAction"),items:[{contentDescriptor:n}],containerContentDescriptor:i,groupingIdentifier:t}:null}(n,i,e,n)
return{id:`shuffle-button-premium-subscriber-${e}`,segue:o,title:zo.string("FUSE.Shuffle",i)}}function Vn(n,e){var t,i
const o=n.attributes,r=null===(t=function(n,e){var t
if(!_n(n,e))return null
const i=null===(t=n.attributes)||void 0===t?void 0:t.releaseDate
if((0,Ko.isNothing)(i))return null
const o=zo.string("FUSE.PreRelease",e),r=u(i,e)
return r?zo.string("AMWEB.ContentA.Middot.ContentB",e,{contentA:o,contentB:r}):o}(n,e))||void 0===t?void 0:t.toLocaleUpperCase(),s=l(null==o?void 0:o.releaseDate,e),a=null===(i=null==o?void 0:o.genreNames)||void 0===i?void 0:i[0].toLocaleUpperCase(),c=null!=r?r:s
return c?a?(0,Bo.f3)(_o.localization,e).string("AMWEB.ContentA.Middot.ContentB",{contentA:a,contentB:c}):c:a}function Zn(n){var e,t
let i
switch(n.type){case oo.Albums:case oo.MusicVideos:i=null===(e=n.attributes)||void 0===e?void 0:e.artistName
break
case oo.Playlists:i=null===(t=n.attributes)||void 0===t?void 0:t.curatorName}return i}function Xn(n,e,t){return I(n,e,"unknown",t)||(n?{$kind:"openExternalURLAction",url:n,actionMetrics:Zo}:null)}function Yn(n){return n!==oo.Stations}function Qn(n,e,t,i,o){var r,l,s
if(!Yn(e.type))return null
const a=G(null!=o?o:z(e,i))
if(e.type===oo.Songs)return function(n,e,t,i){var o,r,l
const s=null===(l=null===(r=null===(o=n.relationships)||void 0===o?void 0:o.albums)||void 0===r?void 0:r.data)||void 0===l?void 0:l[0]
if(!s)return Jo.log(t,`Couldn't create segue, song resource with id '${n.id}' missing album relationship.`),null
const a=$(s,t)
return a?E(a,e,n.id,t,void 0):null}(e,t,i)
if((0,Ko.isSome)(n)){const e=E(n,t,null,i,a)
if((0,Ko.isSome)(e))return e}return null!==(r=O(e,i))&&void 0!==r?r:Xn(null===(s=null===(l=e.attributes)||void 0===l?void 0:l.link)||void 0===s?void 0:s.url,null,i)}function ne(n,e,t,i){return Yn(n.type)?E(t,e,null,i):null}function ee(n,e){return{title:n,segue:e}}function te(...n){const e=n.filter(Ko.isSome)
return 0===e.length?null:e.map(n=>ee(n))}function ie(n,e,t){var i,o,r
const l=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.artists)||void 0===o?void 0:o.data
return l?le(l,e,t):(Jo.warn(t,`Missing artist resource identifiers, couldn't create artist links for resource with id '${n.id}' and type '${n.type}'.`),te(null===(r=n.attributes)||void 0===r?void 0:r.artistName))}function oe(n,e,t){var i,o,r
const l=Zn(n),s=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.curator)||void 0===o?void 0:o.data
if(!s||0===s.length){const e=function(n){var e,t
const i=null===(e=n.attributes)||void 0===e?void 0:e.curatorSocialHandle
if(!i)return null
const o=null===(t=n.attributes)||void 0===t?void 0:t.curatorName
if(!o)return null
const r=g(i,!1)
return[{title:o,segue:P({kind:lo.CatalogPage,intent:r},Zo)}]}(n)
return e&&0!==e.length?e:te(l)}const a=le(s,e,t)
return 0===(null!==(r=null==a?void 0:a.length)&&void 0!==r?r:0)?te(l):a}function re(n,e,t,i,o){var r,l,s
const a=null===(l=null===(r=e.relationships)||void 0===r?void 0:r[n])||void 0===l?void 0:l.data
if(!a||0===a.length)return te(o)
const u=le(a,new ur(t,i),i)
return 0===(null!==(s=null==u?void 0:u.length)&&void 0!==s?s:0)?te(o):u}function le(n,e,t){const i=[]
return e.resources(n).forEach(n=>{const e=n.attributes,o=null==e?void 0:e.name
if(o){const e=S(n,t)
i.push({title:o,segue:Qn(e,n,"link",t)})}else Jo.warn(t,`Couldn't create link for resource type '${n.type}' and id '${n.id}', missing name field.`)}),0===i.length?null:i}function se(n,e,t,i=1){return{id:n,header:t,itemKind:"verticalVideoLockup",presentation:{kind:"collection",layout:{kind:"shelf",numberOfRows:i}},items:e,displaySeparator:!0}}function ae(n,e,t){return{kind:"default",item:{id:n,text:e,segue:t}}}function ue(n,e,t){return{kind:"popover",item:{id:n,items:e,selectedItemID:t}}}function ce(n,e,t,i=1,o=!1){return{id:n,header:t,itemKind:"horizontalLockup",presentation:{kind:"collection",layout:{kind:"shelf",numberOfRows:i}},items:e,displaySeparator:o}}function de(n,e,t,i,o=1){return{id:n,header:t,itemKind:"squareLockup",presentation:{kind:"collection",layout:{kind:"shelf",numberOfRows:o}},items:e,invalidationRules:i,displaySeparator:!0}}function ve(n,e){return{id:n,title:e,$kind:"RoomPageIntent"}}function pe(n,e,t){return{id:n,header:t,itemKind:"bubbleLockup",presentation:{kind:"collection",layout:{kind:"shelf",numberOfRows:1}},items:e,displaySeparator:!0}}function fe(n,e){const t=null==n?void 0:n.stationProviderName
return t?zo.string("FUSE.Radio.From.Provider",e,{provider:t}):null}function me(n,e,t,i){var o,r,s,a,u
const c=null===(r=null===(o=n.relationships)||void 0===o?void 0:o.contents)||void 0===r?void 0:r.data
if(!c||0===c.length)return Jo.warn(i,`Dropping video lockup swoosh with id "${n.id}" and type "${n.type}", missing child resource identifiers.`),null
const d=yn(`video-lockup-swoosh - ${n.id}`,i),v=[]
if(e.resources(c).forEach(n=>{var e,t,o,r,s
const a=n.attributes
if(!a)return void Jo.warn(i,`Dropping video lockup swoosh item with id "${n.id}" and type "${n.type}", missing resource attributes.`)
const u=null!==(o=null!==(e=l(a.releaseDate,i))&&void 0!==e?e:null===(t=a.editorialNotes)||void 0===t?void 0:t.tagline)&&void 0!==o?o:a.artistName,c=S(n,i),p={id:kn(d,n.id,i),titleLinks:te(a.name),subtitleLinks:te(u),artwork:wn(null!==(s=null===(r=a.editorialArtwork)||void 0===r?void 0:r.browseCover)&&void 0!==s?s:a.artwork),contentDescriptor:c,playAction:Y(c,i,d),segue:Qn(c,n,"BrickItem",i),showExplicitBadge:R(a),displayStyle:go.Small,name:a.name}
v.push(p)}),0===v.length)return null
const p=null!==(a=null===(s=n.attributes)||void 0===s?void 0:s.name)&&void 0!==a?a:null===(u=null==n?void 0:n.attributes)||void 0===u?void 0:u.title,f={kind:"default",item:{title:p,accessoryButtons:be(n,v.length,p,i)}}
return se(d,v,f,t)}function he(n,e,t,i=ho.Regular){var o,r,s
const a=null===(r=null===(o=n.relationships)||void 0===o?void 0:o.contents)||void 0===r?void 0:r.data
if(!a||0===a.length)return Jo.warn(t,`Dropping video lockup swoosh with id "${n.id}" and type "${n.type}", missing child resource identifiers.`),null
const u=yn(`circle-lockup-swoosh - ${n.id}`,t),c=[]
if(e.resources(a).forEach(n=>{var e,o,r,s
const a=n.attributes
if(!a)return void Jo.warn(t,`Dropping video lockup swoosh item with id "${n.id}" and type "${n.type}", missing resource attributes.`)
const d=null!==(e=l(a.releaseDate,t))&&void 0!==e?e:null===(o=a.editorialNotes)||void 0===o?void 0:o.tagline,v=S(n,t),p={id:kn(u,n.id,t),title:a.name,subtitle:d,artwork:wn(null!==(s=null===(r=a.editorialArtwork)||void 0===r?void 0:r.browseCover)&&void 0!==s?s:a.artwork),contentDescriptor:v,segue:Qn(v,n,"ShelfItem",t),displayStyle:i,name:a.name}
c.push(p)}),0===c.length)return null
const d=null===(s=n.attributes)||void 0===s?void 0:s.name,v={kind:"default",item:{title:d,accessoryButtons:be(n,c.length,d,t)}}
return pe(u,c,v)}function ge(n,e,t,i){var o,r,l,s,a
const u=null===(r=null===(o=n.relationships)||void 0===o?void 0:o.contents)||void 0===r?void 0:r.data
if(!u||0===u.length)return Jo.warn(i,`Dropping album lockup swoosh with id "${n.id}" and type "${n.type}", missing child resource identifiers.`),null
const c=yn(`square-lockup-swoosh - ${n.id}`,i),d=[]
if(e.resources(u).forEach(n=>{const t=n.attributes
if(!t)return void Jo.warn(i,`Dropping album lockup swoosh item with id "${n.id}" and type "${n.type}", missing resource attributes.`)
const o=S(n,i),r={id:kn(c,n.id,i),titleLinks:te(t.name),subtitleLinks:we(n,e,i),artwork:wn(t.artwork,fo.SpecificRectangle),contentDescriptor:o,playAction:Y(o,i),segue:Qn(o,n,"ShelfItem",i),numberOfSocialBadges:3,showExplicitBadge:R(t),name:t.name}
d.push(r)}),0===d.length)return null
const v=null!==(s=null===(l=n.attributes)||void 0===l?void 0:l.name)&&void 0!==s?s:null===(a=null==n?void 0:n.attributes)||void 0===a?void 0:a.title,p={kind:"default",item:{title:v,accessoryButtons:be(n,d.length,v,i)}}
return de(c,d,p,void 0,t)}function we(n,e,t){var i,o,r,l,s,a
const u=(0,Bo.f3)(_o.localization,t),c=n.attributes,d=null!==(s=null!==(l=null!==(r=null!==(o=null===(i=null==c?void 0:c.editorialNotes)||void 0===i?void 0:i.tagline)&&void 0!==o?o:null==c?void 0:c.artistName)&&void 0!==r?r:null==c?void 0:c.curatorName)&&void 0!==l?l:w(c))&&void 0!==s?s:null===(a=null==c?void 0:c.plainEditorialNotes)||void 0===a?void 0:a.tagline,v=null==c?void 0:c.stationProviderName
switch(n.type){case oo.Albums:return ie(n,e,t)
case oo.Stations:return te(v?u.string("FUSE.Radio.From.Provider",{provider:v}):d)
default:return te(d)}}function be(n,e,t,i){var o,r,l
const s=null===(l=null===(r=null===(o=n.relationships)||void 0===o?void 0:o.room)||void 0===r?void 0:r.data)||void 0===l?void 0:l[0]
if((0,Ko.isNothing)(s))return null
if(e<6)return null
const a=P({kind:lo.CatalogPage,intent:ve(s.id,t)},p(i,"seeAll","button","navigate",{actionUrl:n.href})),u=(0,Bo.f3)(_o.localization,i)
return[ae(s.id,u.string("FUSE.SeeAll"),a)]}function ke(n,e){var t
return n?null===(t=e.attributes)||void 0===t?void 0:t.durationInMillis:null}function ye(n,e=!1,t=!1){return n?{kind:"playlistTrackList",hasVideo:e,hasBadging:t}:"shelfTrackList"}function Se(n,e,t){return n?qn(e,t):null}function $e(n,e){let t=w(null==n?void 0:n.attributes)
return k(n)&&(0,Ko.isNothing)(t)&&(t=b(null==n?void 0:n.attributes)),t===e?null:t}function De(n,e,t){const i=n.attributes
if(!i)return Jo.warn(t,`Dropping editorial flowcase item with id "${n.id}" and type "${n.type}", missing attributes.`),null
if(!i.artwork)return Jo.warn(t,`Dropping flowcase because no artwork was found: ${JSON.stringify(n)}`),null
const o=i.link
return o?{id:kn(e,n.id,t),heading:i.designBadge,title:i.designTag,artwork:wn(i.artwork,fo.SpecificRectangle),segue:Xn(o.url,o.label,t),name:i.name}:(Jo.warn(t,`Dropping editorial flowcase item with id '${n.id}' and type '${n.type}', missing link.`),null)}function Ae(n,e=null,t){return{id:n,items:[t],itemKind:"paragraphComponentModel",presentation:{kind:"single"},displaySeparator:!1,header:{kind:"default",item:{title:e}}}}function Pe(n,e,t){return{$kind:"RefreshRecentlyPlayedRadioIntent",id:n,title:t,reason:e}}function Ee(n,e,t,i){var o,r
const l=null===(o=n.body)||void 0===o?void 0:o.data
if(!l||0===l.length)return void Jo.warn(t,"No resource identifiers in Recently Played Radio response")
const s=null===(r=n.body)||void 0===r?void 0:r.resources
if(!s)return void Jo.warn(t,"No resource map in Recently Played Radio response")
const a=new ur(s,t),u=[]
if(a.resources(l).forEach(n=>{var i,o
const r=n.attributes
if(!r)return void Jo.warn(t,`Dropping recently played radio album lockup swoosh item with id "${n.id}" and type "${n.type}", missing resource attributes.`)
const l=S(n,t),s={id:kn(e,n.id,t),titleLinks:te(r.name),subtitleLinks:te(null!==(o=null===(i=r.editorialNotes)||void 0===i?void 0:i.tagline)&&void 0!==o?o:w(r)),artwork:wn(r.artwork),contentDescriptor:l,playAction:Y(l,t),segue:Qn(l,n,"ShelfItem",t),numberOfSocialBadges:3,name:r.name}
u.push(s)}),0===u.length)return
const c={kind:"default",item:{title:i}},d={eventTriggers:[{events:[{name:"playActivity",delay:2e3}],intent:Pe(e,"Play Activity",i)}]}
return de(e,u,c,d)}function Oe(n,e,t,i){var o,r,l,s,a
const u=null===(r=null===(o=n.relationships)||void 0===o?void 0:o.contents)||void 0===r?void 0:r.data
if(!(null==u?void 0:u.length))return Jo.warn(i,`Dropping spotlight with copy room swoosh with id "${n.id}" and type "${n.type}", missing child resource identifiers.`),null
const c=yn(`spotlight-room - ${t} - ${n.id}`,i),d=[]
if(e.resources(u).forEach(n=>{var e,o,r
const l=n.attributes
if(!l)return void Jo.warn(i,`Dropping video lockup swoosh item with id "${n.id}" and type "${n.type}", missing resource attributes.`)
const s=S(n,i),a={id:kn(c,n.id,i),headline:l.name,title:l.artistName,subtitle:t?w(l):null,artwork:wn(null!==(o=null===(e=l.editorialArtwork)||void 0===e?void 0:e.browseCover)&&void 0!==o?o:l.artwork,fo.SpecificRectangle),contentDescriptor:s,playAction:null,segue:null!==(r=Qn(s,n,"ShelfItem",i))&&void 0!==r?r:Y(s,i),displayStyle:Do.Large,name:l.name}
d.push(a)}),!d.length)return null
const v=null!==(s=null===(l=n.attributes)||void 0===l?void 0:l.name)&&void 0!==s?s:null===(a=null==n?void 0:n.attributes)||void 0===a?void 0:a.title
return ce(c,d,{kind:"default",item:{title:v}},1,!0)}function Ie(n,e,t,i,o){var r
const s=null===(r=n.attributes)||void 0===r?void 0:r.editorialElementKind
if(!s)return Jo.warn(o,`Dropping section with id "${n.id}", type "${n.type}", missing editorialElementKind.`),null
if(!gn(s))return Jo.warn(o,`Dropping section with id "${n.id}", type "${n.type}", editorialElementKind "${s}" is not a section.`),null
const a=o.optional(gr)
if(!1===(null==a?void 0:a.filterEditorialElementKind(s,t,i)))return Jo.log(o,`Filtered section with id '${n.id}', type '${n.type}', element kind '${s}'.`),null
switch(s){case po.HeroListShelf:return function(n,e,t){var i,o
const r=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.children)||void 0===o?void 0:o.data
if(!r||0===r.length)return Jo.warn(t,`Dropping hero list shelf with id "${n.id}" and type "${n.type}", missing child resource identifiers.`),null
const l=yn(`hero-list-shelf - ${n.id}`,t),s=[]
return e.resources(r).forEach(n=>{var i
let o
const r=null===(i=n.attributes)||void 0===i?void 0:i.editorialElementKind
switch(r){case po.AppleMusicOneHero:case po.Hero:o=function(n,e,t,i){var o,r,l,s,a,u,c,d,v,p,f,m,h,g,b
const k=null===(l=null===(r=null===(o=n.relationships)||void 0===o?void 0:o.contents)||void 0===r?void 0:r.data)||void 0===l?void 0:l[0]
if(!k)return De(n,e,i)
const y=t.resource(k)
if(!y)return null
const $=y.attributes
if(!$)return Jo.warn(i,`Dropping editorial flowcase item with id "${n.id}" and type "${n.type}", missing content resource attributes.`),null
let D
hr.includes(y.type)&&(D=wn($.artwork))
const A=null===(s=n.attributes)||void 0===s?void 0:s.designBadge,P=S(y,i),E=null!==(p=null!==(d=null!==(u=null!==(a=$.artistName)&&void 0!==a?a:$.curatorName)&&void 0!==u?u:null===(c=$.editorialNotes)||void 0===c?void 0:c.tagline)&&void 0!==d?d:null===(v=$.genreNames)||void 0===v?void 0:v[0])&&void 0!==p?p:w($),O=Y(P,i),I=null!==(m=null===(f=$.editorialArtwork)||void 0===f?void 0:f.subscriptionHero)&&void 0!==m?m:null===(h=$.editorialArtwork)||void 0===h?void 0:h.subscriptionCover
return{id:kn(e,n.id,i),heading:A,title:$.name,subtitle:E,artwork:wn(I,fo.SpecificRectangle),contentDescriptor:P,description:$e(y,E),playAction:O,coverArtwork:D,segue:null!==(g=Qn(P,y,"FlowcaseItem",i))&&void 0!==g?g:O,name:null===(b=n.attributes)||void 0===b?void 0:b.name}}(n,l,e,t)
break
case po.HeroCustom:o=function(n,e,t,i){var o,r,l,s,a,u,c,d
const v=null===(l=null===(r=null===(o=n.relationships)||void 0===o?void 0:o.contents)||void 0===r?void 0:r.data)||void 0===l?void 0:l[0]
if(!v)return De(n,e,i)
const p=t.resource(v)
if(!p)return null
if(!p.attributes)return Jo.warn(i,`Dropping editorial flowcase item with id "${n.id}" and type "${n.type}", missing content resource attributes.`),null
const f=S(p,i),m=Y(f,i),h=null===(s=n.attributes)||void 0===s?void 0:s.artwork
return h?{id:kn(e,n.id,i),heading:null===(a=n.attributes)||void 0===a?void 0:a.designBadge,title:null===(u=n.attributes)||void 0===u?void 0:u.designTag,subtitle:null,artwork:wn(h,fo.SpecificRectangle),contentDescriptor:f,description:null,playAction:null,coverArtwork:null,segue:null!==(c=Qn(f,p,"FlowcaseItem",i))&&void 0!==c?c:m,name:null===(d=n.attributes)||void 0===d?void 0:d.name}:(Jo.warn(i,`Dropping flowcase because no artwork was found: ${JSON.stringify(n)}`),null)}(n,l,e,t)
break
default:Jo.warn(t,`Dropping hero list item resource with id "${n.id}" and type "${n.type}", invalid editorialElementKind "${r}".`)}o&&s.push(o)}),0===s.length?null:{id:l,itemKind:"flowcaseLockup",presentation:{kind:"collection",layout:{kind:"shelf",numberOfRows:1}},items:s,displaySeparator:!0}}(n,i,o)
case po.LiveRadioShelf:return function(n,e,t){var i,o
const r=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.children)||void 0===o?void 0:o.data
if(!r||0===r.length)return Jo.warn(t,`Dropping live radio shelf with id "${n.id}" and type "${n.type}", missing child resource identifiers.`),null
const l=[]
if(e.resources(r).forEach(n=>{var i
let o
const r=null===(i=n.attributes)||void 0===i?void 0:i.editorialElementKind
r===po.LiveRadioShelfItem?o=function(n,e,t){var i,o,r
const l=null===(r=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.contents)||void 0===o?void 0:o.data)||void 0===r?void 0:r[0]
if(!l)return Jo.warn(t,`Dropping horizontal poster lockup with id "${n.id}" and type "${n.type}", missing content resource identifier.`),null
const s=e.resource(l)
if(!s)return Jo.warn(t,`Dropping horizontal poster lockup with id "${n.id}" and type "${n.type}", missing station resource.`),null
const a=En(s,e,t)
return a&&0!==a.length?In(kn(n.id,s.id,t),s,a,t):(Jo.warn(t,`Dropping horizontal poster lockup with id "${n.id}" and type "${n.type}", no ordered station events.`),null)}(n,e,t):Jo.warn(t,`Dropping hero list item resource with id "${n.id}" and type "${n.type}", invalid editorialElementKind "${r}".`),o&&l.push(o)}),0===l.length)return null
const s=l.map(n=>n.invalidationEventTrigger).filter(Ko.isSome)
return{id:n.id,itemKind:"horizontalPosterLockup",presentation:{kind:"collection",layout:{kind:"shelf",numberOfRows:1}},items:l.map(n=>n.lockup),invalidationRules:{eventTriggers:s},displaySeparator:!0}}(n,i,o)
case po.CopperSwoosh:return function(n,e,t){var i,o,r,l
const s=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.contents)||void 0===o?void 0:o.data
if(!s||0===s.length)return Jo.warn(t,`Dropping copper swoosh with id "${n.id}" and type "${n.type}", missing child resource identifiers.`),null
const a=null!==(l=null===(r=n.attributes)||void 0===r?void 0:r.displayStyle)&&void 0!==l?l:bo.Compact
switch(a){case bo.Compact:return function(n,e,t){var i,o
const r=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.contents)||void 0===o?void 0:o.data
if(!r||0===r.length)return Jo.warn(t,`Dropping compact copper swoosh with id "${n.id}" and type "${n.type}", missing child resource identifiers.`),null
const l=r[0].type
switch(l){case oo.AppleCurators:case oo.Albums:case oo.Playlists:case oo.Stations:case oo.UploadedAudios:return ge(n,e,1,t)
case oo.MusicMovies:case oo.MusicVideos:case oo.UploadedVideos:return me(n,e,1,t)
case oo.Curators:return he(n,e,t,ho.Large)
case oo.Artists:case oo.SocialProfiles:return he(n,e,t)
default:return Jo.warn(t,`Dropping compact copper swoosh with id "${n.id}" and type "${n.type}", unsupported first child type "${l}".`),null}}(n,e,t)
case bo.Expanded:return function(n,e,t){var i,o
const r=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.contents)||void 0===o?void 0:o.data
if(!r||0===r.length)return Jo.warn(t,`Dropping expanded copper swoosh with id "${n.id}" and type "${n.type}", missing child resource identifiers.`),null
const l=r[0].type
switch(l){case oo.AppleCurators:case oo.Stations:return function(n,e,t){var i,o,r
const l=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.contents)||void 0===o?void 0:o.data
if(!l||0===l.length)return Jo.warn(t,`Dropping horizontal swoosh with id "${n.id}" and type "${n.type}", missing child resource identifiers.`),null
const s=yn(`horizontal-lockup-swoosh - ${n.id}`,t),a=[]
if(e.resources(l).forEach(n=>{var e,i,o
const r=n.attributes
if(!r)return void Jo.warn(t,`Dropping horizontal swoosh item with id "${n.id}" and type "${n.type}", missing resource attributes.`)
let l
k(n)&&(l=null===(i=null===(e=r.plainEditorialNotes)||void 0===e?void 0:e.standard)||void 0===i?void 0:i.toLocaleUpperCase())
const u=fe(n.attributes,t),c=S(n,t),d={id:kn(s,n.id,t),headline:l,title:r.name,subtitle:null!==(o=w(r))&&void 0!==o?o:u,artwork:wn(r.artwork,fo.SpecificRectangle),contentDescriptor:c,showExplicitBadge:R(r),playAction:Y(c,t),segue:Qn(c,n,"ShelfItem",t),name:r.name}
a.push(d)}),0===a.length)return null
const u=null===(r=n.attributes)||void 0===r?void 0:r.name,c={kind:"default",item:{title:u,accessoryButtons:be(n,a.length,u,t)}}
return ce(s,a,c,2)}(n,e,t)
case oo.Albums:case oo.Playlists:return ge(n,e,2,t)
case oo.MusicMovies:case oo.MusicVideos:case oo.UploadedVideos:return me(n,e,!C(t)||U(mr,t)?2:1,t)
default:return Jo.warn(t,`Dropping expanded copper swoosh with id "${n.id}" and type "${n.type}", unsupported first child type "${l}".`),null}}(n,e,t)
default:return void Jo.warn(t,`Dropping copper swoosh with id "${n.id}" and type "${n.type}", unsupported displayStyle "${a}".`)}}(n,i,o)
case po.RoomSwoosh:return function(n,e,t){var i,o,r
const s=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.contents)||void 0===o?void 0:o.data
if(!s||0===s.length)return Jo.warn(t,`Dropping compact copper swoosh with id "${n.id}" and type "${n.type}", missing child resource identifiers.`),null
const a=s[0].type
switch(null===(r=n.attributes)||void 0===r?void 0:r.lockupStyle){case Ao.SpotlightWithCopy:return Oe(n,e,!0,t)
case Ao.Spotlight:return Oe(n,e,!1,t)
default:return function(n,e,t,i){switch(n){case oo.AppleCurators:case oo.Albums:case oo.Playlists:case oo.Stations:case oo.TVShows:return function(n,e,t){var i,o,r,l,s
const a=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.contents)||void 0===o?void 0:o.data
if(!a||0===a.length)return Jo.warn(t,`Dropping album lockup swoosh with id "${n.id}" and type "${n.type}", missing child resource identifiers.`),null
const u=yn(`room-square - ${n.id}`,t),c=[]
if(e.resources(a).forEach(n=>{var e,i,o,r,l,s
const a=n.attributes
if(!a)return void Jo.warn(t,`Dropping album lockup swoosh item with id "${n.id}" and type "${n.type}", missing resource attributes.`)
const d=null!==(l=null!==(r=null!==(o=null!==(i=null===(e=a.editorialNotes)||void 0===e?void 0:e.tagline)&&void 0!==i?i:a.artistName)&&void 0!==o?o:a.curatorName)&&void 0!==r?r:w(a))&&void 0!==l?l:null===(s=a.plainEditorialNotes)||void 0===s?void 0:s.tagline,v=S(n,t),p={id:kn(u,n.id,t),titleLinks:te(a.name),subtitleLinks:te(d),artwork:wn(a.artwork,fo.SpecificRectangle),contentDescriptor:v,playAction:Y(v,t),segue:Qn(v,n,"ShelfItem",t),numberOfSocialBadges:3,showExplicitBadge:R(n.attributes),displayStyle:yo.Large,name:a.name}
c.push(p)}),!c.length)return null
const d=null!==(l=null===(r=n.attributes)||void 0===r?void 0:r.name)&&void 0!==l?l:null===(s=null==n?void 0:n.attributes)||void 0===s?void 0:s.title,v={kind:"default",item:{title:d,accessoryButtons:be(n,c.length,d,t)}}
return de(u,c,v)}(e,t,i)
case oo.MusicMovies:case oo.MusicVideos:case oo.UploadedVideos:case oo.TVEpisodes:return function(n,e,t){var i,o,r,s,a
const u=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.contents)||void 0===o?void 0:o.data
if(!u||0===u.length)return Jo.warn(t,`Dropping video lockup swoosh with id "${n.id}" and type "${n.type}", missing child resource identifiers.`),null
const c=yn(`room-video - ${n.id}`,t),d=[]
if(e.resources(u).forEach(n=>{var e,i,o,r,s,a,u,v
const p=n.attributes
if(!p)return void Jo.warn(t,`Dropping video lockup swoosh item with id "${n.id}" and type "${n.type}", missing resource attributes.`)
let f
f=n.type===oo.MusicVideos?wn(p.artwork):wn(null!==(s=null!==(i=null===(e=p.editorialArtwork)||void 0===e?void 0:e.browseCover)&&void 0!==i?i:null===(r=null===(o=p.previews)||void 0===o?void 0:o[0])||void 0===r?void 0:r.artwork)&&void 0!==s?s:p.artwork)
const m=null!==(u=null!==(a=p.artistName)&&void 0!==a?a:l(p.releaseDate,t))&&void 0!==u?u:null===(v=p.editorialNotes)||void 0===v?void 0:v.tagline,h=S(n,t),g={id:kn(c,n.id,t),titleLinks:te(p.name),subtitleLinks:te(m),artwork:f,contentDescriptor:h,playAction:Y(h,t,c),segue:Qn(h,n,"BrickItem",t),showExplicitBadge:R(n.attributes),displayStyle:go.Regular,name:p.name}
d.push(g)}),0===d.length)return null
const v=null!==(s=null===(r=n.attributes)||void 0===r?void 0:r.name)&&void 0!==s?s:null===(a=null==n?void 0:n.attributes)||void 0===a?void 0:a.title,p={kind:"default",item:{title:v,accessoryButtons:be(n,d.length,v,t)}}
return se(c,d,p)}(e,t,i)
case oo.Songs:return function(n,e,t){var i,o,r,l,s
const a=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.contents)||void 0===o?void 0:o.data
if(!a||0===a.length)return Jo.warn(t,`Dropping copper track swoosh with id "${n.id}" and type "${n.type}", missing child resource identifiers.`),null
const u=yn(`room-track - ${n.id}`,t),c=[]
if(e.resources(a).forEach(n=>{var e,i,o
const r=n.attributes
if(!r)return void Jo.warn(t,`Dropping copper track lockup swoosh item with id "${n.id}" and type "${n.type}", missing resource attributes.`)
const l=S(n,t),s=null!==(i=null!==(e=r.artistName)&&void 0!==e?e:r.curatorName)&&void 0!==i?i:null===(o=r.editorialNotes)||void 0===o?void 0:o.tagline,a={id:kn(u,n.id,t),title:r.name,subtitleLinks:te(s),artwork:wn(r.artwork),contentDescriptor:l,playAction:Y(l,t,u),segue:Qn(l,n,"ShelfItem",t),layoutStyle:"shelfTrackList",showExplicitBadge:R(n.attributes),resumeAction:Ln(),pauseAction:Cn()}
c.push(a)}),0===c.length)return null
const d=null!==(l=null===(r=n.attributes)||void 0===r?void 0:r.name)&&void 0!==l?l:null===(s=null==n?void 0:n.attributes)||void 0===s?void 0:s.title,v={kind:"default",item:{title:d,accessoryButtons:be(n,c.length,d,t)}}
return Tn(u,c,4,v)}(e,t,i)
case oo.Artists:return function(n,e,t){var i,o,r
const s=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.contents)||void 0===o?void 0:o.data
if(!s||0===s.length)return Jo.warn(t,`Dropping video lockup swoosh with id "${n.id}" and type "${n.type}", missing child resource identifiers.`),null
const a=yn(`room-circle - ${n.id}`,t),u=[]
if(e.resources(s).forEach(n=>{var e,i,o,r
const s=n.attributes
if(!s)return void Jo.warn(t,`Dropping video lockup swoosh item with id "${n.id}" and type "${n.type}", missing resource attributes.`)
const c=null!==(e=l(s.releaseDate,t))&&void 0!==e?e:null===(i=s.editorialNotes)||void 0===i?void 0:i.tagline,d=S(n,t),v={id:kn(a,n.id,t),title:s.name,subtitle:c,artwork:wn(null!==(r=null===(o=s.editorialArtwork)||void 0===o?void 0:o.browseCover)&&void 0!==r?r:s.artwork),contentDescriptor:d,segue:Qn(d,n,"ShelfItem",t),displayStyle:ho.Large,name:s.name}
u.push(v)}),0===u.length)return null
const c=null===(r=n.attributes)||void 0===r?void 0:r.title,d={kind:"default",item:{title:c,accessoryButtons:be(n,u.length,c,t)}}
return pe(a,u,d)}(e,t,i)
default:return Jo.warn(i,`Dropping room swoosh with id "${e.id}" and type "${e.type}", unsupported child type "${n}".`),null}}(a,n,e,t)}}(n,i,o)
case po.MasterSwoosh:return function(n,e,t){var i,o,r
const l=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.contents)||void 0===o?void 0:o.data
if(!l||0===l.length)return Jo.warn(t,`Dropping copper swoosh with id "${n.id}" and type "${n.type}", missing child resource identifiers.`),null
const s=yn(`master-swoosh - ${n.id}`,t),a=[]
if(e.resources(l).forEach(n=>{const e=n.attributes
if(!e)return void Jo.warn(t,`Dropping album lockup swoosh item with id "${n.id}" and type "${n.type}", missing resource attributes.`)
const i=S(n,t),o={id:kn(s,n.id,t),titleLinks:te(e.name),subtitleLinks:te(w(e)),artwork:wn(e.artwork,fo.SpecificRectangle),contentDescriptor:i,playAction:Y(i,t),segue:Qn(i,n,"ShelfItem",t),numberOfSocialBadges:3,showExplicitBadge:R(n.attributes),displayStyle:yo.Large,name:e.name}
a.push(o)}),0===a.length)return null
const u=null===(r=n.attributes)||void 0===r?void 0:r.name,c={kind:"default",item:{title:u,accessoryButtons:be(n,a.length,u,t)}}
return de(s,a,c)}(n,i,o)
case po.CopperTrackSwoosh:return function(n,e,t,i){var o,r
const l=null===(r=null===(o=n.relationships)||void 0===o?void 0:o.contents)||void 0===r?void 0:r.data
if(!l||0===l.length)return Jo.warn(i,`Dropping copper track swoosh with id "${n.id}" and type "${n.type}", missing child resource identifiers.`),null
const s=yn(`copper-track-swoosh - ${n.id}`,i),a=[]
return t.resources(l).forEach(n=>{const o=n.attributes
if(!o)return void Jo.warn(i,`Dropping copper track lockup swoosh item with id "${n.id}" and type "${n.type}", missing resource attributes.`)
const r=S(n,i),l={id:kn(s,n.id,i),title:o.name,subtitleLinks:ie(n,t,i),tertiaryLinks:Se(e,n,i),duration:ke(e,n),artwork:wn(o.artwork),contentDescriptor:r,playAction:Y(r,i,s),segue:Qn(r,n,"ShelfItem",i),layoutStyle:ye(e),showExplicitBadge:R(n.attributes),pauseAction:Cn(),resumeAction:Ln(),isDisabled:Jn(n,i)}
a.push(l)}),0===a.length?null:e?xn(a,s,i):function(n,e,t,i){var o
const r=null===(o=t.attributes)||void 0===o?void 0:o.name
return Tn(e,n,4,{kind:"default",item:{title:r,accessoryButtons:be(t,n.length,r,i)}})}(a,s,n,i)}(n,e,i,o)
case po.LinkList:return function(n,e){const t=n.attributes
if(!t)return Jo.warn(e,`Dropping link list with id "${n.id}" and type "${n.type}", missing attributes.`),null
const i=t.links
if(!i||0===i.length)return Jo.warn(e,`Dropping link list with id "${n.id}" and type "${n.type}", missing links.`),null
const o=yn(`link-list-shelf - ${n.id}`,e),r=i.map(n=>({id:kn(o,n.label,e),segue:Xn(n.url,n.label,e),title:n.label})),l={kind:"default",item:{title:t.name}}
return function(n,e,t){return{id:n,itemKind:"linkComponentModel",presentation:{kind:"collection",layout:{kind:"grid",flowStyle:"column"}},items:e,header:t}}(o,r,l)}(n,o)
case po.RecentlyPlayedRadioMarker:return function(n,e){const t=n.attributes
if(!t)return Jo.warn(e,`Dropping recently played radio marker with id "${n.id}" and type "${n.type}", missing attributes.`),null
const i=e.optional(wr)
if(!i)return Jo.warn(e,`Dropping recently played radio marker with id "${n.id}" and type "${n.type}", missing collected markers on object graph.`),null
const o=i.recentlyPlayedRadio
return o?Ee(o,yn(`recently-played-radio - ${n.id}`,e),e,t.name):(Jo.warn(e,`Dropping recently played radio marker with id "${n.id}" and type "${n.type}", missing collected recentlyPlayedRadio marker.`),null)}(n,o)
case po.BrickSwoosh:return function(n,e,t){var i,o,r
const l=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.children)||void 0===o?void 0:o.data
if(!l||0===l.length)return Jo.warn(t,`Dropping hero list shelf with id "${n.id}" and type "${n.type}", missing child resource identifiers.`),null
const s=[],a=yn(`brick-swoosh - ${n.id}`,t)
if(e.resources(l).forEach(n=>{var i
let o
const r=null===(i=n.attributes)||void 0===i?void 0:i.editorialElementKind
switch(r){case po.Brick:o=function(n,e,t,i){var o,r,l,s,a,u,c,d
const v=null===(l=null===(r=null===(o=n.relationships)||void 0===o?void 0:o.contents)||void 0===r?void 0:r.data)||void 0===l?void 0:l[0]
if(!v)return Jo.warn(i,`Dropping editorial brick lockup item with id "${n.id}" and type "${n.type}", missing content resource identifier.`),null
const p=t.resource(v)
if(!p)return null
const f=p.attributes
if(!f)return Jo.warn(i,`Dropping editorial brick lockup item with id "${n.id}" and type "${n.type}", missing content resource attributes.`),null
const m=S(p,i),h=null!==(a=null!==(s=f.artistName)&&void 0!==s?s:f.curatorName)&&void 0!==a?a:null===(u=f.editorialNotes)||void 0===u?void 0:u.tagline,g=Y(m,i,e)
return{id:kn(e,n.id,i),titleLinks:te(f.name),subtitleLinks:te(h),artwork:wn(null===(c=f.editorialArtwork)||void 0===c?void 0:c.subscriptionHero,fo.SpecificRectangle),contentDescriptor:m,playAction:null,segue:null!==(d=Qn(m,p,"brick",i))&&void 0!==d?d:g,name:f.name}}(n,a,e,t)
break
case po.CustomBrick:o=function(n,e,t,i){var o,r,l,s,a,u,c,d,v,p
const f=null===(l=null===(r=null===(o=n.relationships)||void 0===o?void 0:o.contents)||void 0===r?void 0:r.data)||void 0===l?void 0:l[0]
if(!f)return function(n,e,t){const i=n.attributes
if(!i)return Jo.warn(t,`Dropping editorial brick item with id "${n.id}" and type "${n.type}", missing attributes.`),null
if(!i.artwork)return Jo.warn(t,`Dropping brick because no artwork was found: ${JSON.stringify(n)}`),null
const o=i.link
return o?{id:kn(e,n.id,t),headline:i.designBadge,titleLinks:te(i.designTag),artwork:wn(i.artwork,fo.SpecificRectangle),segue:Xn(o.url,o.label,t),name:i.name,playAction:null}:(Jo.warn(t,`Dropping editorial brick item with id '${n.id}' and type '${n.type}', missing link.`),null)}(n,e,i)
const m=t.resource(f)
if(!m)return null
const h=m.attributes
if(!h)return Jo.warn(i,`Dropping editorial brick lockup item with id "${n.id}" and type "${n.type}", missing content resource attributes.`),null
const g=S(m,i),w=null!==(a=null!==(s=h.artistName)&&void 0!==s?s:h.curatorName)&&void 0!==a?a:null===(u=h.editorialNotes)||void 0===u?void 0:u.tagline,b=Y(g,i,e)
return{id:kn(e,n.id,i),titleLinks:te(null===(c=n.attributes)||void 0===c?void 0:c.designTag),subtitleLinks:te(w),artwork:wn(null===(d=n.attributes)||void 0===d?void 0:d.artwork,fo.SpecificRectangle),contentDescriptor:g,playAction:null,segue:null!==(v=Qn(g,m,"GridItem",i))&&void 0!==v?v:b,name:null===(p=n.attributes)||void 0===p?void 0:p.name}}(n,a,e,t)
break
default:Jo.warn(t,`Dropping brick swoosh item resource with id "${n.id}" and type "${n.type}", invalid editorialElementKind "${r}".`)}o&&s.push(o)}),!s.length)return null
const u={kind:"default",item:{title:null===(r=n.attributes)||void 0===r?void 0:r.name}}
return se(a,s,u)}(n,i,o)
case po.Paragraph:return function(n,e){var t,i
const o=null===(t=n.attributes)||void 0===t?void 0:t.description
if(!o)return Jo.warn(e,`No paragraph text for resource.  Dropping paragraph: '${JSON.stringify(n)}'`),null
const r=null===(i=n.attributes)||void 0===i?void 0:i.title
return Ae(yn(`paragraph-section - ${n.id}`,e),r,{id:kn("paragraph",n.id,e),text:o,textAlignment:$o.Leading})}(n,o)
case po.SingularLink:return function(n,e){var t,i,o
const r=n.attributes
if(!r)return Jo.warn(e,`Dropping singular link with id "${n.id}" and type "${n.type}", missing attributes.`),null
const l=null===(t=r.links)||void 0===t?void 0:t[0]
if(!l)return Jo.warn(e,`Dropping singular list with id "${n.id}" and type "${n.type}". No link found`),null
const s=yn(`singular-link - ${n.id}`,e)
return i=s,o=r.title,{id:i,itemKind:"linkComponentModel",presentation:{kind:"single"},items:[{id:kn(s,l.label,e),segue:Xn(l.url,l.label,e),title:l.label}],header:{kind:"default",item:{title:o||null}}}}(n,o)}}function Ne(n,e,t,i){if(!n||0===n.length)throw new Error("No resource identifiers in tab root.")
const o=[]
return t.resources(n).forEach(r=>{const l=Ie(r,e,n,t,i)
l&&o.push(l)}),o}async function Fe(n,e){var t,i
const o=null===(t=n.body)||void 0===t?void 0:t.data
if(!o||0===o.length)throw new Error("No resource identifiers in editorial page response")
const r=null===(i=n.body)||void 0===i?void 0:i.resources
if(!r)throw new Error("No resource map in editorial page response")
const l=new ur(r,e)
return await Ue(o,l,e)}async function Ue(n,e,t){const i=function(n,e,t){var i,o,r
if(0===n.length)throw new Error("No root resource identifiers in editorial page response")
n.length>1&&Jo.warn(t,'Received more than one top-level resource identifer in the editorial page response, dropping all but the first.".')
const l=n[0],s=e.resource(l)
if(!s)throw new Error(`Missing top-level grouping resource with id "${l.id}" and type "${l.type}", in editorial page response.`)
if(s.type!==oo.Groupings)throw new Error(`Top-level resource in editorial page response with id "${l.id}" and type "${l.type}" must be of type "${oo.Groupings}"`)
const a=null===(o=null===(i=s.relationships)||void 0===i?void 0:i.tabs)||void 0===o?void 0:o.data
if(!a||0===a.length)throw new Error(`Top-level group resource with id "${s.id}" and type "${s.type}", missing tab resource identifers.`)
a.length>1&&Jo.warn(t,'Received more than one grouping child resource identifer in the editorial page response, dropping all but the first.".')
const u=a[0],c=e.resource(u)
if(!c)throw new Error(`Missing tab root resource with id "${u.id}" and type "${u.type}", in editorial page response.`)
if(c.type!==oo.EditorialElements)throw new Error(`Tab root resource with id "${u.id}" and type "${u.type}" must be of type "${oo.EditorialElements}.`)
const d=null===(r=c.attributes)||void 0===r?void 0:r.editorialElementKind
if(d!==po.TabRoot)throw new Error(`Tab root resource with id "${u.id}" and element kind "${d}"  must be a tab root.`)
return c}(n,e,t),o=await function(n,e,t){const i=function(n,e,t){var i,o,r,l,s
const a=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.children)||void 0===o?void 0:o.data
if(!a)return
const u=[...a],c=new Set
for(;u.length>0;){const n=u.pop()
if(!n)continue
const i=e.resource(n)
if(!i)continue
if(i.type!==oo.EditorialElements)continue
const o=null===(r=i.attributes)||void 0===r?void 0:r.editorialElementKind
if(!o)continue
if(gn(o)){const n=t.optional(gr)
if(!1===(null==n?void 0:n.filterEditorialElementKind(o,a,e)))continue}o===po.RecentlyPlayedRadioMarker&&c.add(o)
const d=null===(s=null===(l=i.relationships)||void 0===l?void 0:l.children)||void 0===s?void 0:s.data
d&&u.push(...d)}return c}(n,e,t)
if(!i)return Promise.resolve({})
const o={},r=Array.from(i).map(n=>{if(n===po.RecentlyPlayedRadioMarker)return hn(t).then(n=>{o.recentlyPlayedRadio=n})}).filter(Ko.isSome).map(n=>n.catch(n=>{Jo.error(t,"Failed to request marker:",n)}))
return Promise.all(r).then(()=>o)}(i,e,t)
return function(n,e,t){var i,o
return Ne(null===(o=null===(i=n.relationships)||void 0===i?void 0:i.children)||void 0===o?void 0:o.data,!1,e,t)}(i,e,t.adding(wr,o))}function Ce(n){return!C(n)||F("21F62",n)}function Le(n,e){return{$kind:"RefreshPageIntent",intent:n,reason:e}}function Me(n){return{events:[{name:"subscriptionStatusChange"}],intent:Le(n,"Subscription status changed")}}function Re(n,e,t){const i=[]
e&&i.push(Me(n))
const o=function(n,e){return e?{events:[{name:"expirationDate",date:e.toJSON()}],intent:Le(n,"Exceeded expiration date"),deferIntentUntilEvent:"nextPageDisappearance"}:null}(n,t)
return o&&i.push(o),0===i.length?null:{eventTriggers:i}}async function Be(n,e){const t=Ho.countryCode(e),i=new Go(`/v1/editorial/${t}/groupings`,e)
return i.queryString.addParameters({name:n,"omit[resource:artists]":"relationships","relate[songs]":"albums","include[albums]":"artists","include[songs]":"artists","include[music-videos]":"artists","include[stations]":"events","extend[station-events]":"editorialVideo","fields[artists]":"name,url,artwork","fields[albums]":"artistName,artistUrl,artwork,contentRating,editorialArtwork,plainEditorialNotes,name,playParams,releaseDate,url,trackCount",tabs:T(e)?"subscriber":"nonsubscriber"}),i.queryString.artworkURL.add(io.OmitCropCode),i.queryString.artworkURL.add(io.OmitFileExtension),i.queryString.extend.add("editorialArtwork"),i.queryString.extend.add("artistUrl"),i.queryString.extend.add("plainEditorialNotes"),vn(i,e)}function Te(n){return{$kind:"openPurchaseStorePageAction",id:"purchaseStorePage",url:n.toString(),actionMetrics:Zo}}function xe(n,e){return{$kind:"modalFlowAction",destination:n,actionMetrics:e}}function Ke(){return xe({kind:lo.CatalogPage,intent:{$kind:"StartSocialOnboardingActionIntent"}},Zo)}function je(n,e){const t={browse:uo.Browse,"browse-newmusic":uo.Browse,listennow:uo.ListenNow,foryou:uo.ListenNow,radio:uo.Radio},i={"browse.index":uo.Browse,radio:uo.Radio,"radio.index":uo.Radio}
let o=t[n.split(e||"-")[0].toLowerCase()]
if((0,Ko.isNothing)(o)){const e=/([a-z\d])([A-Z])/g,t=/[ _]/g
o=i[n.replace(e,"$1_$2").toLowerCase().replace(t,".")]}return o}function _e(n,e,t,i){const o=E(n,"unknown",e,t)
if(!o)throw new Error(`Unable to create default segue for content descriptor '${r(n)}'`)
return i.isDeepLinkAction?rn([tn({kind:uo.Browse},Zo,t),o],Zo):o}function Je(n,e,t,i){var o,r,l
const s=null===(o=n.attributes)||void 0===o?void 0:o.artwork,a=null===(r=n.attributes)||void 0===r?void 0:r.name,u=kn(e,n.id,t,i),c=S(n,t)
return c||Jo.warn(t,`For childID = ${u}, contentDescriptor missing, skipping...`),{id:u,artwork:wn(s),title:a,contentDescriptor:c,segue:Qn(c,n,"ShelfItem",t),name:null===(l=n.attributes)||void 0===l?void 0:l.name}}function qe(n,e,t,i,o,r,l){var s,a
const u=null===(s=null==n?void 0:n.views)||void 0===s?void 0:s[t]
if(!u)return null
const c=null===(a=u.attributes)||void 0===a?void 0:a.title,d=[],v=u.data
if(!v)return null
const p=yn(`${e} - ${t}`,i)
return r.resources(v).forEach(e=>{const o=l(e,n,t,i,r,!1,p)
d.push(o)}),0===d.length?null:{id:p,itemKind:o,presentation:{kind:"collection",layout:{kind:"shelf",numberOfRows:1}},items:d,header:{kind:"default",item:{title:c,accessoryButtons:He(u,t,i,e,c,n)}},displaySeparator:!0}}function He(n,e,t,i,o,r){if(!n.href||!n.next)return null
const l={$kind:"ContainerDetailSeeAllPageIntent",url:n.href,viewKind:e,id:i,title:o,containerType:r.type},s=P({kind:lo.CatalogPage,intent:l},p(t,"seeAll","button","navigate",{actionUrl:n.href})),a=(0,Bo.f3)(_o.localization,t)
return[ae(n.href,a.string("FUSE.SeeAll"),s)]}function ze(n,e,t,i){const o=qe(n,"artist",e,i,"bubbleLockup",t,We)
return o?(o.backgroundTreatment="alternate",o):null}function We(n,e,t,i,o,r){var l
return{...Je(n,t,i,r),name:null===(l=n.attributes)||void 0===l?void 0:l.name}}function Ge(n,e,t,i){const o={id:n,itemKind:"groupTextListLockup",presentation:{kind:"single"},items:[e],displaySeparator:!0,backgroundTreatment:t}
return(0,Ko.isSome)(i)&&(o.header={kind:"default",item:{title:i,accessoryButtons:null}}),o}function Ve(n,e){var t,i,o,r
const l=(0,Bo.f3)(_o.localization,e),s=null===(t=n.attributes)||void 0===t?void 0:t.bornOrFormed,a=null===(o=null===(i=n.attributes)||void 0===i?void 0:i.genreNames)||void 0===o?void 0:o[0],u=null===(r=n.attributes)||void 0===r?void 0:r.origin
if(s&&a&&u){const n=l.string("AMWEB.ContentA.Middot.ContentB",{contentA:u,contentB:s})
return l.string("AMWEB.ContentA.Middot.ContentB",{contentA:n,contentB:a})}return null}function Ze(n){var e,t,i,o
const r=n.attributes,l=null===(o=null===(i=null===(t=null===(e=null==r?void 0:r.hero)||void 0===e?void 0:e[0])||void 0===t?void 0:t.content)||void 0===i?void 0:i[0])||void 0===o?void 0:o.artwork
return l?wn(l):wn(null==r?void 0:r.artwork,fo.AlbumFallbackArt)}function Xe(n,e,t){var i,o,r
const l=null===(i=null==e?void 0:e.views)||void 0===i?void 0:i[n],s=null===(o=null==l?void 0:l.data)||void 0===o?void 0:o[0],a=t.resource(s)
return a&&a.attributes?{title:null===(r=null==l?void 0:l.attributes)||void 0===r?void 0:r.title,resource:a}:null}function Ye(n,e){if(!n)return null
const t=c(new Date(n),e)
return t?zo.string("Fuse.Artist.AiredDate",e,{airedDate:t}):null}function Qe(n,e){return n?1===n?zo.string("FUSE.Social.Onboarding.SharePlaylists.Songs.One",e):zo.string("FUSE.Social.Onboarding.SharePlaylists.Songs.Others",e,{num:`${n}`}):null}function nt(n,e,t,i,o){const r=S(n,t),l=n.attributes
return{id:kn(e,n.id,t,i),artwork:wn(null==l?void 0:l.artwork,fo.SquareCenterCrop),titleLinks:te(null==l?void 0:l.name),contentDescriptor:r,subtitleLinks:o,segue:Qn(r,n,"ShelfItem",t),playAction:Y(r,t),numberOfSocialBadges:3,showExplicitBadge:R(l),name:null==l?void 0:l.name}}function et(n,e,t,i,o,r){var s,a
return nt(n,t,i,r,te(null!==(a=l(null===(s=n.attributes)||void 0===s?void 0:s.releaseDate,i))&&void 0!==a?a:w(n.attributes)))}function tt(n,e,t,i,o,r){var s,a,u
const c=Qe(null===(s=n.attributes)||void 0===s?void 0:s.trackCount,i)
return nt(n,t,i,r,te(null!==(u=null!=c?c:l(null===(a=n.attributes)||void 0===a?void 0:a.releaseDate,i))&&void 0!==u?u:w(n.attributes)))}function it(n,e,t,i,o,r){var s,a,u,c,d,v,p
const f=S(n,t),m=n.attributes,h=null!==(u=null!==(s=null==m?void 0:m.previewArtwork)&&void 0!==s?s:null===(a=null==m?void 0:m.editorialArtwork)||void 0===a?void 0:a.browseCover)&&void 0!==u?u:null==m?void 0:m.artwork,g=te(null!==(d=l(null===(c=n.attributes)||void 0===c?void 0:c.releaseDate,t))&&void 0!==d?d:null===(v=n.attributes)||void 0===v?void 0:v.artistName)
return{id:kn(e,n.id,t,i),artwork:wn(h),titleLinks:te(null==m?void 0:m.name),contentDescriptor:f,subtitleLinks:g,segue:Qn(f,n,"ShelfItem",t),playAction:Y(f,t,o),showExplicitBadge:R(m),name:null===(p=n.attributes)||void 0===p?void 0:p.name,displayStyle:r}}function ot(n,e,t,i,o,r,l){return it(n,t,i,r,l,go.Small)}function rt(n,e,t,i,o,r,l){return it(n,t,i,r,l)}function lt(n,e,t=!0){return{id:n,itemKind:"headerComponentModel",presentation:{kind:"single"},items:[e],displaySeparator:t}}function st(n,e){var t,i,o
const r=n.attributes
return r?null!==(o=null!==(i=null!==(t=r.artistName)&&void 0!==t?t:r.curatorName)&&void 0!==i?i:l(r.releaseDate,e))&&void 0!==o?o:w(r):null}function at(n,e,t){switch(n.type){case oo.Albums:return ie(n,e,t)
case oo.Playlists:return oe(n,e,t)
default:return te(st(n,t))}}function ut(n,e,t,i,o){var r
return{...Je(n,t,i,!1),headline:a(null===(r=n.attributes)||void 0===r?void 0:r.releaseDate,i),subtitle:st(n,i),playAction:Y(S(n,i),i),showExplicitBadge:R(n.attributes)}}function ct(n,e,t,i,o,r,l){var s,a,u
const c=null===(s=n.attributes)||void 0===s?void 0:s.artwork,d=null===(a=n.attributes)||void 0===a?void 0:a.name,v=kn(t,n.id,i,r),p=S(n,i)
return p||Jo.warn(i,`For childID = ${v}, contentDescriptor missing, skipping...`),{id:v,artwork:wn(c),titleLinks:te(d),contentDescriptor:p,segue:Qn(p,n,"ShelfItem",i),name:null===(u=n.attributes)||void 0===u?void 0:u.name,subtitleLinks:at(n,o,i),playAction:Y(S(n,i),i),numberOfSocialBadges:3,showExplicitBadge:R(null==n?void 0:n.attributes)}}function dt(n,e,t,i,o,r,s){var a,u,c,d,v
const p=null!==(a=w(n.attributes))&&void 0!==a?a:l(null===(u=n.attributes)||void 0===u?void 0:u.releaseDate,i),f=null===(c=n.attributes)||void 0===c?void 0:c.artwork,m=null===(d=n.attributes)||void 0===d?void 0:d.name,h=kn(t,n.id,i,r),g=S(n,i)
return g||Jo.warn(i,`For childID = ${h}, contentDescriptor missing, skipping...`),{id:h,artwork:wn(f,fo.SquareCenterCrop),titleLinks:te(m),contentDescriptor:g,segue:Qn(g,n,"ShelfItem",i),name:null===(v=n.attributes)||void 0===v?void 0:v.name,subtitleLinks:te(p),playAction:Y(S(n,i),i),numberOfSocialBadges:3,showExplicitBadge:R(null==n?void 0:n.attributes),displayStyle:yo.Large}}function vt(n,e,t,i,o,r,l){var s,a,u
const c=Je(n,t,i,r),d=n.attributes,v=null!==(u=null!==(s=null==d?void 0:d.previewArtwork)&&void 0!==s?s:null===(a=null==d?void 0:d.editorialArtwork)||void 0===a?void 0:a.browseCover)&&void 0!==u?u:null==d?void 0:d.artwork
return{...c,subtitleLinks:at(n,o,i),playAction:Y(S(n,i),i,l),showExplicitBadge:R(null==n?void 0:n.attributes),artwork:wn(v)}}function pt(n,e,t,i,o,r,l){return{...vt(n,0,t,i,o,r,l),displayStyle:go.Large}}function ft(n,e,t,i,o){switch(e){case Eo.TopSongs:case Eo.OtherEpisodes:case Eo.LatestRelease:case Eo.FeaturedRelease:return null
case Eo.FeaturedAlbums:case Eo.Playlists:case Eo.CrossMerchandise:case Eo.RadioShows:return qe(n,null!=o?o:e,e,t,"squareLockup",i,dt)
case Eo.FullAlbums:case Eo.Singles:case Eo.LiveAlbums:case Eo.CompilationAlbums:case Eo.FeaturedOnAlbums:case Eo.MoreToHear:case Eo.MoreByCurator:return qe(n,null!=o?o:e,e,t,"squareLockup",i,et)
case Eo.AppearsOnAlbums:case Eo.AppearsOn:case Eo.AudioExtras:case Eo.YouMightAlsoLike:return qe(n,null!=o?o:e,e,t,"squareLockup",i,ct)
case Eo.MoreToSee:return qe(n,null!=o?o:e,e,t,"verticalVideoLockup",i,ot)
case Eo.TopMusicVideos:return qe(n,null!=o?o:e,e,t,"verticalVideoLockup",i,rt)
case Eo.SimilarArtists:case Eo.MusicArtists:case Eo.FeaturedArtists:case Eo.Contributors:case Eo.FriendsWhoListened:return ze(n,e,i,t)
case Eo.TopReleases:return mt(qe(n,null!=o?o:e,e,t,"squareLockup",i,ct),2)
case Eo.LatestReleases:return mt(qe(n,null!=o?o:e,e,t,"horizontalLockup",i,ut),2)
case Eo.VideoExtras:case Eo.RelatedVideos:return qe(n,"video",e,t,"verticalVideoLockup",i,pt)
case Eo.MoreInGenre:return n.type===oo.MusicVideos?qe(n,"video",e,t,"verticalVideoLockup",i,vt):qe(n,"audio",e,t,"squareLockup",i,ct)
case Eo.OtherVersions:return qe(n,null!=o?o:e,e,t,"squareLockup",i,tt)
case Eo.MoreByArtist:return n.type===oo.MusicVideos?qe(n,"video",e,t,"verticalVideoLockup",i,vt):qe(n,null!=o?o:e,e,t,"squareLockup",i,et)}}function mt(n,e){return n&&(n.presentation.layout.numberOfRows=e),n}function ht(n,e){switch(n){case no.Album:return oo.Albums
case no.AppleCurator:return oo.AppleCurators
case no.EditorialItem:return oo.EditorialItems
case no.Playlist:return oo.Playlists
case no.Movie:return oo.MusicMovies
case no.MusicVideo:return oo.MusicVideos
case no.SocialProfile:return oo.SocialProfiles
case no.Song:return oo.Songs
case no.RadioStation:return oo.Stations
case no.TVShow:return oo.TVShows
case no.TVEpisode:return oo.TVEpisodes
case no.ArtistUploadedSong:return oo.UploadedAudios
case no.ArtistUploadedVideo:return oo.UploadedVideos
case no.Artist:return oo.Artists
case no.Curator:return oo.Curators
case no.RecordLabel:return oo.RecordLabels
default:return Jo.warn(e,`A MediaAPI resource type could not be found for a content kind "${n}".`),null}}function gt(n,e){const t=wt(n,e)
return new Go(t,e)}function wt(n,e){if((0,Ko.isNothing)(n.identifiers.storeAdamID))throw new Error("No storeAdamID in ContentDescriptor")
const t=n.identifiers.storeAdamID
return`/v1/catalog/${Ho.countryCode(e)}/${ht(n.kind,e)}/${t}`}function bt(n,e){return{id:n,itemKind:"containerDetailTracklistFooterLockup",presentation:{kind:"single"},items:[e]}}function kt(n){var e
const t=n.optional(_o.userSocialProfileCoordinator)
return!0===(null===(e=null==t?void 0:t.userProfile)||void 0===e?void 0:e.isSocialOnboarded)}function yt(n,e){return{id:n,itemKind:"inlineUpsell",presentation:{kind:"single"},items:[e],invalidationRules:{eventTriggers:[{events:[{name:"invalidationAction",kind:"containerDetailSocialOnboardingUpsellDismissed",scope:"page"},{name:"socialOnboardingStatusChange"}],intent:{$kind:"RefreshInlineUpsellSectionIntent"}}]}}}function St(n,e){if(!$t(e))return null
let t,i
switch(n){case Oo.AlbumDetail:t=zo.string("FUSE.Social.DT.AlbumUpsell.Header",e),i=zo.string("FUSE.Social.DT.AlbumUpsell.Description",e)
break
case Oo.PlaylistDetail:t=zo.string("FUSE.Social.DT.PlaylistUpsell.Header",e),i=zo.string("FUSE.Social.DT.PlaylistUpsell.Description",e)}const o=rn([(0,Bo.f3)(_o.storage,e).setItemAction(vo.User.DetailSocialOnboardingUpsellDismissed,!0,Zo),{actionMetrics:Zo,metadata:{kind:n},scope:"page",kind:"containerDetailSocialOnboardingUpsellDismissed",$kind:"invalidationAction"}],Zo),r=Ke(),l=yn("inline-social-onboarding",e)
return yt(l,{id:kn(l,"inline-social-onboarding-item",e),title:t,subtitle:i,buttonTitle:zo.string("FUSE.Social.DT.DiscoverFriends.CTA",e),buttonAction:r,segue:r,closeAction:o})}function $t(n){return!!_(n)&&!kt(n)&&!(0,Bo.f3)(_o.storage,n).getItem(vo.User.DetailSocialOnboardingUpsellDismissed)}function Dt(n,e,t){const i=[]
let o=[]
switch(n.type){case oo.Albums:o=[Eo.OtherVersions,Eo.RelatedVideos,Eo.AudioExtras,Eo.VideoExtras,Eo.MoreByArtist,Eo.AppearsOn,Eo.YouMightAlsoLike]
break
case oo.Playlists:o=[Eo.Contributors,Eo.MoreByCurator,Eo.FeaturedArtists]}return o.forEach(o=>{const r=ft(n,o,t,e)
r&&(r.backgroundTreatment="alternate",i.push(r))}),i}function At(n,e,t,i){var o,r,l,s,a,u,c,v,p,f,h,g,w,b,k,y
const $=null===(r=null===(o=n.playlistResponse)||void 0===o?void 0:o.body)||void 0===r?void 0:r.data
if(!$||0===$.length)throw new Error("No resource identifiers in playlist detail page response")
const D=null===(s=null===(l=n.playlistResponse)||void 0===l?void 0:l.body)||void 0===s?void 0:s.resources
if(!D)throw new Error("No resource map in playlist detail page response")
const A=new ur(D,e),P=A.resource($[0])
if(!P)throw new Error("No container in container detail page response.")
const E=null===(u=null===(a=n.contributorsResponse)||void 0===a?void 0:a.body)||void 0===u?void 0:u.resources
if((0,Ko.isSome)(E)){const n=new ur(E,e).resource($[0]),t=null==n?void 0:n.views;(0,Ko.isSome)(t)&&(P.views=null!==(c=P.views)&&void 0!==c?c:{},Object.assign(P.views,t)),A.addResourceMap(E,e)
const i=null===(p=null===(v=null==n?void 0:n.relationships)||void 0===v?void 0:v.tracks)||void 0===p?void 0:p.data
i&&(null===(g=null===(h=null===(f=P.relationships)||void 0===f?void 0:f.tracks)||void 0===h?void 0:h.data)||void 0===g||g.forEach((n,e)=>{var t
const o=null===(t=i[e])||void 0===t?void 0:t.meta
o&&(n.meta=o)}))}let O=[]
const I=function(n,e,t){var i,o
const r=n.attributes,l=S(n,t),s=yn(`playlist-detail-header-section - ${n.id}`,t),a=n.id
return Un(s,{id:kn("playlist-detail-header",n.id,t),artwork:wn(null==r?void 0:r.artwork),title:null==r?void 0:r.name,subtitleLinks:oe(n,e,t),tertiaryTitleLinks:[],quaternaryTitle:!0===(null==r?void 0:r.isChart)?null:d(null==r?void 0:r.lastModifiedDate,t),modalPresentationDescriptor:Hn(n,t),showExplicitBadge:R(r),contentDescriptor:l,playButton:Wn(l,e,a,null===(i=n.relationships)||void 0===i?void 0:i.tracks,t),shuffleButton:Gn(l,a,null==r?void 0:r.trackCount,t),videoArtwork:bn({motionDetailSquare:null===(o=null==r?void 0:r.editorialVideo)||void 0===o?void 0:o.motionDetailSquare},mo.SquareCenterCrop),siriBannerConfiguration:Nn(t)})}(P,A,e)
I&&O.push(I)
const N=Kn(P,A,e,null!==(b=null===(w=P.attributes)||void 0===w?void 0:w.isChart)&&void 0!==b&&b,i)
N&&(O=O.concat(N.sections))
const F=function(n,e,t,i){const o=S(n,i)
return o?bt(yn(`track-list-footer-section - ${n.id}`,i),{id:kn("track-list-footer",n.id,i),contentDescriptor:o,numberOfSocialBadges:10,description:Pt(n,e,t,i)}):null}(P,A,null!==(k=null==N?void 0:N.isHomogenousMusicVideoTracklist)&&void 0!==k&&k,e)
F&&O.push(F)
const U=St(Oo.PlaylistDetail,e)
U&&O.push(U)
const C=Dt(P,A,e)
return O.push(...C),{pageMetrics:m(e,n.playlistResponse,"playlist_detail","Playlist",A),sections:O,invalidationRules:{eventTriggers:[{events:[{name:"subscriptionStatusChange"},{name:"restrictionsDidChange"}],intent:Le(t,"Subscription Status Changed")}]},canonicalURL:null===(y=null==P?void 0:P.attributes)||void 0===y?void 0:y.url}}function Pt(n,e,t,i){var o,r
const l=null===(r=null===(o=n.relationships)||void 0===o?void 0:o.tracks)||void 0===r?void 0:r.data
if(!l)return null
const a=e.resources(l),u=a.reduce((n,e)=>{var t,i
return n+(null!==(i=null===(t=e.attributes)||void 0===t?void 0:t.durationInMillis)&&void 0!==i?i:0)},0)
return`${t?function(n,e){return n?1===n?zo.string("FUSE.NoOfVideos.one",e):zo.string("FUSE.NoOfVideos.other",e,{count:`${n}`}):null}(a.length,i):Qe(a.length,i)}, ${s(u,i)}`}function Et(n,e,t,i){var o,r,l
const s=null===(o=n.body)||void 0===o?void 0:o.data
if(!s||0===s.length)throw new Error("No resource identifiers in container detail page response")
const a=null===(r=n.body)||void 0===r?void 0:r.resources
if(!a)throw new Error("No resource map in container detail page response")
const u=new ur(a,e),c=u.resource(s[0])
if(!c)throw new Error("No container in container detail page response.")
let d=[]
const v=function(n,e,t){var i,o,r,l
const s=n.attributes,a=null==s?void 0:s.audioTraits,u=null==s?void 0:s.isMasteredForItunes,c=S(n,t),d=yn(`album-detail-header-section - ${n.id}`,t),v=n.id,p=Zn(n),f=re(oo.Artists,n,e.resourceMap,t,p)||te(p)
return Un(d,{id:kn("album-detail-header",n.id,t),artwork:wn(null==s?void 0:s.artwork),title:null==s?void 0:s.name,subtitleLinks:f,tertiaryTitleLinks:null,quaternaryTitle:Vn(n,t),modalPresentationDescriptor:{headerTitle:null==s?void 0:s.name,headerSubtitle:zn(n,t),paragraphText:null!==(o=null===(i=null==s?void 0:s.editorialNotes)||void 0===i?void 0:i.standard)&&void 0!==o?o:w(s)},showExplicitBadge:R(s),audioBadges:Fn(a,u),contentDescriptor:c,playButton:Wn(c,e,v,null===(r=n.relationships)||void 0===r?void 0:r.tracks,t),shuffleButton:Gn(c,v,null==s?void 0:s.trackCount,t),videoArtwork:bn({motionDetailSquare:null===(l=null==s?void 0:s.editorialVideo)||void 0===l?void 0:l.motionDetailSquare},mo.SquareCenterCrop),siriBannerConfiguration:Nn(t)})}(c,u,e)
v&&d.push(v)
const p=function(n,e,t,i,o){var r
return null===(r=Kn(n,e,t,!1,o))||void 0===r?void 0:r.sections}(c,u,e,0,i)
p&&(d=d.concat(p))
const f=function(n,e,t){var i,o
const r=S(n,t)
if(!r)return null
const l=[],s=Pt(n,e,!1,t)
s&&l.push(s)
const a=null===(i=n.attributes)||void 0===i?void 0:i.copyright
a&&l.push(a)
const u=function(n,e){var t
const i=n.resourcesForType(oo.RecordLabels),o=null==i?void 0:i[0]
if(!o)return null
const r=O(o,e),l=(0,Bo.f3)(_o.localization,e),s=null===(t=o.attributes)||void 0===t?void 0:t.name,a=s?ee(s,r):null
return{title:l.string("AMWeb.Label.Module.Record.Label.one").toLocaleUpperCase(),link:a}}(e,t),c=null===(o=n.attributes)||void 0===o?void 0:o.recordLabel
return(0,Ko.isNothing)(u)&&(0,Ko.isSome)(c)&&l.push(c),bt(yn(`track-list-section - ${n.id}`,t),{id:kn("tracklist-footer",n.id,t),contentDescriptor:r,numberOfSocialBadges:10,description:l.join("\n"),linkSection:u})}(c,u,e)
f&&d.push(f)
const h=St(Oo.AlbumDetail,e)
h&&d.push(h)
const g=Dt(c,u,e)
return d.push(...g),{pageMetrics:m(e,n,"album_detail","Album",u),sections:d,invalidationRules:{eventTriggers:[{events:[{name:"subscriptionStatusChange"},{name:"restrictionsDidChange"}],intent:Le(t,"Subscription Status Changed")}]},canonicalURL:null===(l=null==c?void 0:c.attributes)||void 0===l?void 0:l.url}}function Ot(n,e){const t=new Go(n,e)
return t.queryString.extend.add("offers").add("editorialArtwork").add("editorialVideo").add("extendedAssetUrls"),t.queryString.artworkURL.add(io.OmitFileExtension),t.queryString.addParameters({include:"record-labels,artists","meta[albums:tracks]":"popularity","include[songs]":"artists,composers,albums","include[music-videos]":"artists","include[playlists]":"curator","fields[artists]":"name,url","fields[record-labels]":"name,url","fields[curators]":"name"}),t.queryString.views.add(Eo.AppearsOn).add(Eo.MoreByArtist).add(Eo.RelatedVideos).add(Eo.OtherVersions).add(Eo.YouMightAlsoLike).add(Eo.AudioExtras).add(Eo.VideoExtras),t}function It(n,e){return Ot(wt(n,e),e)}function Nt(n){return{$kind:"AnyCuratorPageDetailIntent",id:n}}function Ft(n,e,t){return{id:yn(`curator-detail-header - ${n}`,t),items:[e],itemKind:"curatorDetailHeaderComponentModel",presentation:{kind:"single"}}}function Ut(n,e){return{$kind:"AnyCuratorDetailSeeAllPageIntent",url:n,title:e}}async function Ct(n,e){var t,i,o,r,l,s,a,u,c,d,v
const p=null===(t=n.body)||void 0===t?void 0:t.data
if(!p||0===p.length)throw new Error("No resource identifiers in editorial page response")
const f=null===(i=n.body)||void 0===i?void 0:i.resources
if(!f)throw new Error("No resource map in editorial page response")
const h=new ur(f,e),g=h.resource(p[0]),w=[],b=function(n,e){var t,i,o,r,l,s
if(!n)return null
const a=n.attributes
if(!a)return null
const u="Show"!==a.kind&&"Genre"!==a.kind,c={id:kn("curator-header",n.id,e),artwork:wn(null!==(r=null!==(i=null===(t=a.editorialArtwork)||void 0===t?void 0:t.bannerUber)&&void 0!==i?i:null===(o=a.editorialArtwork)||void 0===o?void 0:o.subscriptionCover)&&void 0!==r?r:null===(l=a.editorialArtwork)||void 0===l?void 0:l.subscriptionHero),coverArtwork:u?wn(null===(s=a.editorialArtwork)||void 0===s?void 0:s.brandLogo):null}
return Ft(n.id,c,e)}(g,e),k="Genre"===(null===(o=null==g?void 0:g.attributes)||void 0===o?void 0:o.kind)
b&&!k&&w.push(b)
const y=null==g?void 0:g.attributes
let $
if(y&&g){const n=lt(yn(`headerComponentItemSection - ${g.id}`,e),{id:kn("apple-curator-header",g.id,e),title:null!==(r=y.shortName)&&void 0!==r?r:y.name,contentDescriptor:S(g,e)})
w.push(n),$=Rt(g,!1,e),$&&!k&&w.push($)}let D=!1
const A=null===(s=null===(l=null==g?void 0:g.relationships)||void 0===l?void 0:l.grouping)||void 0===s?void 0:s.data
if(null==A?void 0:A.length){A[0].id=null!==(c=null===(u=Object.keys(null!==(a=f.groupings)&&void 0!==a?a:{}))||void 0===u?void 0:u[0])&&void 0!==c?c:A[0].id
const n=await Ue(A,h,e)
w.push(...n),D=!!n.length}if(!D){const n=null===(d=null==g?void 0:g.relationships)||void 0===d?void 0:d.playlists,t=Lt(null==n?void 0:n.data,h,null==g?void 0:g.id,null==n?void 0:n.href,e)
t&&w.push(t)}if(k&&$){const n=(0,Bo.f3)(_o.localization,e)
$.header={kind:"default",item:{title:n.string("FUSE.Bio.About")}},w.push($)}return{pageMetrics:m(e,n,"curator","Curator",h),sections:w,canonicalURL:null===(v=null==g?void 0:g.attributes)||void 0===v?void 0:v.url}}function Lt(n,e,t,i,o){if(!(null==n?void 0:n.length)||!t)return null
const r=[]
e.resources(n).forEach(n=>{const e=n.attributes
if(!e)return void Jo.warn(o,`Dropping video lockup swoosh item with id "${n.id}" and type "${n.type}", missing resource attributes.`)
const i=S(n,o),l={id:kn(t,n.id,o),titleLinks:te(e.name),subtitleLinks:te(e.curatorName),artwork:wn(e.artwork),contentDescriptor:i,playAction:Y(i,o),segue:Qn(i,n,"ShelfItem",o),showExplicitBadge:R(null==n?void 0:n.attributes),numberOfSocialBadges:3,name:e.name}
r.push(l)})
const l=(0,Bo.f3)(_o.localization,o).string("FUSE.Social.Playlist"),s={kind:"default",item:{title:l,accessoryButtons:Mt(l,i,r.length,o)}}
return de(yn(t,o),r,s,null,2)}function Mt(n,e,t,i){if(!e)return null
if(t<6)return null
const o=P({kind:lo.CatalogPage,intent:Ut(e,n)},p(i,"seeAll","button","navigate",{actionUrl:e}))
return[ae(e,(0,Bo.f3)(_o.localization,i).string("FUSE.SeeAll"),o)]}function Rt(n,e,t){const i=b(null==n?void 0:n.attributes)
if(!i||i.length<1)return null
const o=e?zo.string("FUSE.Bio.About",t):null,r={id:kn(`curatorBio - ${n.id}`,n.id,t),modalPresentationDescriptor:{headerTitle:o,paragraphText:i}}
return Ge(yn(`curator-bio-section - ${n.id}`,t),r,null,o)}function Bt(n,e,t){var i,o
const r=n.body
if(!r)return Jo.log(t,`Missing body for response '${JSON.stringify(n)}'`),null
const l=r.resources
if(!l)return Jo.log(t,`Missing resources for response '${JSON.stringify(n)}'`),null
const s=r.data
if(!s)return Jo.log(t,`Missing resource identifiers for response '${JSON.stringify(n)}'`),null
const a=Ho.countryCode(t),u=new ur(l,t),c=u.resource(s[0]),d=null==c?void 0:c[0]
let v;(function(n){return"AnyCuratorDetailSeeAllPaginateIntent"===n.$kind})(e)&&(v=e.id)
const p=Lt(s,u,null!=v?v:"curator-see-all-page",e.url,t),f=[]
let h
const g=r.next
if(p){p.presentation.layout="grid"
const n=p.header
Rn(n)&&(n.item.accessoryButtons=null),f.push(p),g&&(h={$kind:"AnyCuratorDetailSeeAllPaginateIntent",url:g,id:p.id})}const w=null!==(o=null===(i=null==d?void 0:d.attributes)||void 0===i?void 0:i.url)&&void 0!==o?o:(null==d?void 0:d.id)&&`https://music.apple.com/WebObjects/MZStore.woa/wa/viewGrouping?cc=${encodeURIComponent(a)}&id=${encodeURIComponent(null==d?void 0:d.id)}`
return{pageMetrics:m(t,n,"see_all","SeeAll",u),sections:f,nextIntent:h,...w&&{canonicalURL:w}}}function Tt(n,e){return{id:n,itemKind:"tvMovieDetailHeaderLockup",presentation:{kind:"single"},items:[e],displaySeparator:!0}}function xt(n,e){return{id:n,itemKind:"textListComponentModel",presentation:{kind:"collection",layout:{kind:"shelf",numberOfRows:1}},items:e,backgroundTreatment:"alternate"}}function Kt(n,e,t,i,o){const r=[],s=function(n,e){var t
const i=null===(t=null==n?void 0:n.attributes)||void 0===t?void 0:t.credits
if(!i)return null
const o=(0,Bo.f3)(_o.localization,e),r=[]
return[{propertyName:"cast",localizationKey:"FUSE.OC.Crew.Actors"},{propertyName:"guests",localizationKey:"FUSE.OC.Crew.Guests"},{propertyName:"hosts",localizationKey:"FUSE.OC.Crew.Hosts"},{propertyName:"producers",localizationKey:"FUSE.OC.Crew.Producers"},{propertyName:"directors",localizationKey:"FUSE.OC.Crew.Directors"},{propertyName:"screenwriters",localizationKey:"FUSE.OC.Crew.Screenwriters"},{propertyName:"performers",localizationKey:"FUSE.OC.Crew.Producers"}].forEach(n=>{const e=i[n.propertyName]
e.length&&r.push({title:o.string(n.localizationKey).toLocaleUpperCase(),content:e.map(n=>n.name).join("\n")})}),r.length?xt(yn(`castAndCrewSection - ${n.id}`,e),[{id:kn("castAndCrewSectionItem",n.id,e),title:o.string("FUSE.OC.Crew.Title"),subsections:r}]):null}(n,o)
s&&r.push(s)
const a=ft(n,Eo.MusicArtists,o,i)
if(a){a.backgroundTreatment="alternate"
const n={kind:"default",item:{title:(0,Bo.f3)(_o.localization,o).string("FUSE.OC.Episode.ArtistsOnThisEpisode")}}
a.header=n,s&&(s.displaySeparator=!0),r.push(a)}const u=function(n,e,t,i,o){const r=[],s=function(n,e,t){var i,o,r,s,a,u
const c=n.attributes
if(!c)return null
const d=(0,Bo.f3)(_o.localization,t),v=[]
c.studioName&&v.push({title:d.string("FUSE.OC.Information.Studio").toLocaleUpperCase(),content:c.studioName}),c.releaseDate&&v.push({title:d.string("FUSE.OC.Information.Released").toLocaleUpperCase(),content:l(c.releaseDate,t)})
const p=null!==(i=c.genreNames)&&void 0!==i?i:null===(s=null===(r=null===(o=e.resourcesForType(oo.TVSeasons))||void 0===o?void 0:o[0])||void 0===r?void 0:r.attributes)||void 0===s?void 0:s.genreNames
if(p&&p.length&&v.push({title:d.string("FUSE.OC.Information.Genre").toLocaleUpperCase(),content:null===(a=c.genreNames)||void 0===a?void 0:a.join("\n")}),c.hasHD&&v.push({title:d.string("FUSE.OC.Information.HD"),content:d.string("FUSE.OC.Information.HDVersions")}),c.contentRatingsBySystem){const n=null===(u=Object.keys(c.contentRatingsBySystem))||void 0===u?void 0:u[0],e=c.contentRatingsBySystem[n],t=e.advisories,i=t?t.join(", "):""
v.push({title:d.string("FUSE.OC.Information.Rating").toLocaleUpperCase(),content:`${e.name} ${i}`})}return c.copyright&&v.push({title:null,content:c.copyright}),v.length?{id:kn("information-text",n.id,t),subsections:v,title:d.string("FUSE.OC.Information.title")}:null}(n,i,o)
s&&r.push(s)
const a=function(n,e,t,i){const o=(0,Bo.f3)(_o.localization,i),r=[]
return e&&r.push({title:o.string("FUSE.OC.Languages.Primary").toLocaleUpperCase(),content:jt(e,i)}),(null==t?void 0:t.length)&&r.push({title:o.string("FUSE.OC.Languages.Additional").toLocaleUpperCase(),content:t.map(n=>jt(n,i)).join("\n")}),r.length?{id:kn("languages-text",n.id,i),subsections:r,title:o.string("FUSE.OC.Languages.title")}:null}(n,e,t,o)
a&&r.push(a)
const u=function(n,e,t){if(!n)return null
const i=(0,Bo.f3)(_o.localization,t),o=[]
return n.hasSDH&&o.push({title:i.string("FUSE.OC.Languages.hasSDH"),content:i.string("FUSE.OC.Accessibility.Product.SDH"),renderTitleAsBadge:!0}),n.hasAudioDescription&&o.push({title:i.string("FUSE.OC.Languages.hasAD"),content:i.string("FUSE.OC.Accessibility.Product.AD"),renderTitleAsBadge:!0}),n.hasClosedCaptioning&&o.push({title:i.string("FUSE.OC.Languages.hasClosedCaptioning"),content:i.string("FUSE.OC.Accessibility.Product.CC"),renderTitleAsBadge:!0}),o.length?{id:kn("accessibility-text",e,t),subsections:o,title:i.string("FUSE.OC.Accessibility.title")}:null}(e,n.id,o)
return u&&r.push(u),xt(yn(`information-section - ${n.id}`,o),r)}(n,e,t,i,o)
return u&&(a&&(a.displaySeparator=!1),r.push(u)),r}function jt(n,e){const t=(0,Bo.f3)(_o.localization,e),i=[]
return n.hasStereo&&i.push(t.string("FUSE.OC.Languages.hasStereo")),n.hasAudioDescription&&i.push(t.string("FUSE.OC.Languages.hasAudioDescription")),n.hasDolby71&&i.push(t.string("FUSE.OC.Languages.hasDolby71")),n.hasClosedCaptioning&&i.push(t.string("FUSE.OC.Languages.hasClosedCaptioning")),n.hasDolby&&i.push(t.string("FUSE.OC.Languages.hasDolby")),n.hasSDH&&i.push(t.string("FUSE.OC.Languages.hasSDH")),n.hasSubtitles&&i.push(t.string("FUSE.OC.Languages.hasSubtitles")),i.length?`${n.name} (${i.join(", ")})`:n.name}function _t(n,e,t){var i,o,r
const l=e.attributes
if(!l)return Jo.warn(t,`Dropping episode with no attributes: '${JSON.stringify(e)}'`),null
const s=S(e,t),u=null===(o=null===(i=l.previews)||void 0===i?void 0:i.find(n=>(0,Ko.isSome)(n.artwork)))||void 0===o?void 0:o.artwork,c=null!==(r=b(l))&&void 0!==r?r:w(l)
return{id:kn(`tv-episode-video - ${n}`,e.id,t),titleLinks:te(l.name),subtitleLinks:te(c),playAction:Y(s,t,n),contentDescriptor:s,segue:Qn(s,e,"GridItem",t),artwork:wn(null!=u?u:l.artwork),displayStyle:go.Large,headline:a(l.releaseDate,t),name:l.name}}function Jt(n,e,t){const i=_t(n,e,t)
if(!i)return null
const o=(0,Bo.f3)(_o.localization,t)
return{...i,displayStyle:go.Regular,headline:o.string("FUSE.OC.Episode.Extra")}}function qt(n){var e
const t=null===(e=n.attributes)||void 0===e?void 0:e.kind
return!!t&&["episodebonus","tvtrailer","seasonbonus"].includes(t)}async function Ht(n,e){var t
const i=n.resourcesForType(oo.Playlists),o=null==i?void 0:i[0]
if(!o)return null
const r=Ho.countryCode(e),l=new Go(`/v1/catalog/${r}/${oo.Playlists}/${o.id}/tracks`,e)
null===(t=l.queryString)||void 0===t||t.addParameters({"include[songs]":"artists","fields[artists]":"name","omit[resource]":"autos"})
const s=(await vn(l,e)).body,a=null==s?void 0:s.resources
if(!a)return Jo.warn(e,`Failed to fetch songs for playlist with response: ${JSON.stringify(a)}`),null
n.addResourceMap(a,e)
const u=new ur(a,e),c=null==s?void 0:s.data
return c?u.resources(c):u.resourcesForType(oo.Songs)}function zt(n,e,t){var i,o,r
const l=n.attributes
if(!l)return Jo.log(t,`No attributes for container: ${JSON.stringify(n)}`),null
const s=a(l.releaseDate,t),u=(0,Bo.f3)(_o.localization,t),c=S(n,t)
return Tt(yn(`tvMovieDetailHeaderSection - ${n.id}`,t),{id:kn("tv-movie-detail-header-item",n.id,t),title:l.name,modalPresentationDescriptor:{headerTitle:null,headerSubtitle:null,paragraphText:b(l)},artwork:wn(null!==(r=null===(o=null===(i=l.previews)||void 0===i?void 0:i[0])||void 0===o?void 0:o.artwork)&&void 0!==r?r:l.artwork),headline:s,contentDescriptor:c,playAction:Y(c,t),tertiaryTitle:Vt(l,s,t),trailingTertiaryBadges:Wt(l,u),subtitleLinks:Gt(n,e,t)})}function Wt(n,e){var t,i,o,r
const l=[],s=null===(t=Object.keys(n.contentRatingsBySystem))||void 0===t?void 0:t[0],a=null===(o=null===(i=n.contentRatingsBySystem)||void 0===i?void 0:i[s])||void 0===o?void 0:o.name
a&&l.push(a),n.hasHD&&l.push(e.string("FUSE.OC.Information.HD"))
const u=null===(r=n.supportedLocales)||void 0===r?void 0:r.primary
return u?(u.hasClosedCaptioning&&l.push(e.string("FUSE.OC.Languages.hasClosedCaptioning")),u.hasAudioDescription&&l.push(e.string("FUSE.OC.Languages.hasAD")),l):l}function Gt(n,e,t){var i,o,r,l
const s=null===(r=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.show)||void 0===o?void 0:o.data)||void 0===r?void 0:r[0]
if(!s)return null
const a=e.resource(s)
if(!a)return null
const u=null===(l=a.attributes)||void 0===l?void 0:l.name
return u?[ee(u,Qn(S(a,t),a,"link",t))]:null}function Vt(n,e,t){var i,o
const r=s(null===(o=null===(i=n.offers)||void 0===i?void 0:i[0])||void 0===o?void 0:o.durationInMilliseconds,t)
return!e&&r?r:!r&&e?e:e&&r?(0,Bo.f3)(_o.localization,t).string("AMWEB.ContentA.Middot.ContentB",{contentA:e,contentB:r}).toLocaleUpperCase():null}function Zt(n,e,t,i,o){if(!(null==e?void 0:e.length))return null
const r=e.map(n=>{const e=S(n,o)
return{...jn(`songListSong - ${n.id}`,n,oo.Songs,t,i,o,!1),layoutStyle:"shelfTrackList",subtitleLinks:ie(n,i,o),tertiaryLinks:null,segue:Qn(e,n,"ShelfItem",o)}})
if(!r.length)return null
const l=(0,Bo.f3)(_o.localization,o),s=t.type===oo.TVEpisodes?"FUSE.OC.Information.SongsOnEpisode":"FUSE.Music.Show.SongsInTitle",a=l.string(s)
return Tn(yn(`songListShelf - ${n}`,o),r,3,{kind:"default",item:{title:a}})}function Xt(n,e){var t,i
const o=null===(t=n.genreNames)||void 0===t?void 0:t[0],r=null!==(i=l(n.releaseDate,e))&&void 0!==i?i:""
return o?r?(0,Bo.f3)(_o.localization,e).string("AMWEB.ContentA.Middot.ContentB",{contentA:o.toLocaleUpperCase(),contentB:r.toLocaleUpperCase()}):o.toLocaleUpperCase():r.toLocaleUpperCase()}async function Yt(n,e,t){const i=function(n,e,t){const i=new Go(n,e)
return i.queryString.extend.add("offers").add("editorialArtwork").add("editorialVideo").add("trackCount"),i.queryString.artworkURL.add(io.OmitFileExtension),i.queryString.addParameters({include:"tracks,curator","include[songs]":"artists","omit[resource]":"autos","fields[artists]":"name,artwork","limit[tracks]":"300","fields[curators]":"name","fields[songs]":"name,artistName,curatorName,composerName,artwork,playParams,contentRating,albumName,url,durationInMillis,audioTraits,extendedAssetUrls","include[music-videos]":"artists","limit[view.more-by-curator]":"15","limit[view.featured-artists]":"15","fields[albums]":"name,artwork,playParams"}),i.queryString.views.add(Eo.MoreByCurator).add(Eo.FeaturedArtists),(0,Ko.isSome)(t)&&i.queryString.addParameters({"filter[personal-mix]":t}),i}(n,e,t),o=function(n,e,t){const i=function(n,e,t){if(!_(e)||!kt(e))return null
const i=new Go(n,e)
return i.queryString.addParameters({"meta[playlists:tracks]":"contributors","fields[social-profiles]":"name,artwork","omit[resource]":"autos","relate[playlists]":"tracks","limit[tracks]":"300","fields[playlists]":"tracks"}),i.queryString.views.add(Eo.Contributors),(0,Ko.isSome)(t)&&i.queryString.addParameters({"filter[personal-mix]":t}),i}(n,e,t)
return(0,Ko.isNothing)(i)?null:vn(i,e).catch(n=>(Jo.error(e,"Request for contributors metadata failed",n),null))}(n,e,t),[r,l]=await Promise.all([vn(i,e),o])
return{playlistResponse:r,contributorsResponse:l}}function Qt(n,e,t){const i=n.body,o=null==i?void 0:i.data,r=null==i?void 0:i.resources,l=null==i?void 0:i.next
if(!i)return Jo.error(e,`Missing body from response: ${JSON.stringify(n)}`),null
if(!o)return Jo.error(e,`Missing identifiers from response: ${JSON.stringify(n)}`),null
if(!r)return Jo.error(e,`Missing resource map from response: ${JSON.stringify(n)}`),null
const s=new ur(r,e),a=[],u=function(n,e,t,i){switch(i.viewKind){case Eo.TopSongs:return ei(t,"trackLockup",n,e,i,ni)
case Eo.FeaturedAlbums:case Eo.Playlists:case Eo.RadioShows:return ei(t,"squareLockup",n,e,i,dt)
case Eo.FullAlbums:case Eo.Singles:case Eo.LiveAlbums:case Eo.CompilationAlbums:case Eo.FeaturedOnAlbums:case Eo.MoreToHear:case Eo.MoreByCurator:return ei(t,"squareLockup",n,e,i,et)
case Eo.AppearsOnAlbums:case Eo.LatestReleases:case Eo.AppearsOn:case Eo.OtherVersions:case Eo.AudioExtras:case Eo.YouMightAlsoLike:return ei(t,"squareLockup",n,e,i,ct)
case Eo.MoreToSee:case Eo.VideoExtras:return ei(t,"verticalVideoLockup",n,e,i,ot)
case Eo.TopMusicVideos:case Eo.RelatedVideos:return ei(t,"verticalVideoLockup",n,e,i,rt)
case Eo.SimilarArtists:case Eo.FeaturedArtists:case Eo.MusicArtists:case Eo.Contributors:case Eo.FriendsWhoListened:return ei(t,"bubbleLockup",n,e,i,We)
case Eo.TopReleases:return ei(t,"squareLockup",n,e,i,ct)
case Eo.MoreByArtist:return i.containerType===oo.MusicVideos?ei(t,"verticalVideoLockup",n,e,i,vt):ei(t,"squareLockup",n,e,i,et)
case Eo.MoreInGenre:return i.containerType===oo.MusicVideos?ei(t,"verticalVideoLockup",n,e,i,vt):ei(t,"squareLockup",n,e,i,ct)}return null}(s,o,e,t)
let c
return u&&a.push(u),l&&(c={$kind:"ContainerDetailSeeAllPaginateIntent",url:l,id:t.id,viewKind:t.viewKind,title:t.title,containerType:t.containerType}),{pageMetrics:m(e,n,"see_all","SeeAll",s),sections:a,nextIntent:c}}function ni(n,e,t,i,o,r){var l,s,a,u
const c=S(n,i)
if(!c)return Jo.warn(i,`Track lockup with id '${n.id}' missing content descriptor.`),null
const d=`${t}-see-all`,v=null===(l=n.attributes)||void 0===l?void 0:l.artistName,p=null===(s=n.attributes)||void 0===s?void 0:s.artwork,f=Y(c,i,d),m=Jn(n,i)
return{id:kn("track-lockup-see-all",n.id,i,r),title:null===(a=n.attributes)||void 0===a?void 0:a.name,tertiaryLinks:qn(n,i),duration:null===(u=n.attributes)||void 0===u?void 0:u.durationInMillis,contentDescriptor:c,artwork:wn(p),subtitleLinks:re(oo.Artists,n,o.resourceMap,i,v),playAction:m?null:f,layoutStyle:{kind:"playlistTrackList",hasVideo:!1,hasBadging:!1},showExplicitBadge:R(n.attributes),pauseAction:Cn(),resumeAction:Ln(),isDisabled:m,isPreviewMode:!T(i)}}function ei(n,e,t,i,o,r){const l=[],s=yn(`${o.id} - ${o.viewKind}`,n)
return t.resources(i).forEach(e=>{const i=r(e,null,o.viewKind,n,t,!0,s)
i&&l.push(i)}),0===l.length?null:{id:s,itemKind:e,presentation:{kind:"collection",layout:"trackLockup"===e?"list":"grid"},items:l,header:{kind:"default",item:{title:o.title,accessoryButtons:null}}}}function ti(n){var e,t,i,o,r
return{$kind:"MultiRoomPageIntent",id:null!==(o=null!==(t=null===(e=n.query)||void 0===e?void 0:e.fcId)&&void 0!==t?t:null===(i=n.query)||void 0===i?void 0:i.id)&&void 0!==o?o:null===(r=n.pathComponents())||void 0===r?void 0:r[n.pathComponents().length-1]}}function ii(n,e){return 1===n.length&&e?(t=n[0].header)&&"column"===t.kind?{title:e,showSeparator:!1}:void 0:null
var t}function oi(n=Zo){return{$kind:"popToRootAction",actionMetrics:n}}function ri(n,e,t){const i=S(n,e)
return{contentDescriptor:i,segue:Qn(i,n,"PosterItem",e,t),playAction:Y(i,e,void 0,void 0,t,!0),showExplicitBadge:R(n.attributes)}}function li(n,e,t,i,o,r,s){var a,u,c,d,v
const p=n.attributes
if(!p)return Jo.warn(r,`"${n.id}" resource missing attributes, dropping poster lockup with id "${n.id}".`),null
let f
const m=null===(a=e.meta)||void 0===a?void 0:a.editorialCard
if(m&&(f=null===(u=p.plainEditorialCard)||void 0===u?void 0:u[m]),f)return function(n,e,t,i,o,r){var l,s,a,u,c,d,v,p,f,m,h
const g=null===(l=t.editorialArtwork)||void 0===l?void 0:l.superHeroTall
if(!g)return Jo.warn(r,`'${n.id}' resource missing editorial card tall artwork, dropping poster lockup with id "${n.id}".`),null
const b=null===(s=t.editorialVideo)||void 0===s?void 0:s.motionTallVideo3x4,k=o?null===(u=null===(a=e.meta)||void 0===a?void 0:a.reason)||void 0===u?void 0:u.stringForDisplay:null
let y,S,$;(0,Ko.isSome)(t.title)&&(0,Ko.isSome)(t.subtitle)?(S=t.title,$=te(t.subtitle),y=null):(y=null!==(c=w(n.attributes))&&void 0!==c?c:null===(d=n.attributes)||void 0===d?void 0:d.name,S=null,$=null)
const D={id:kn(i,n.id,r),artwork:wn(g,fo.SpecificRectangle),videoArtwork:bn({motionTallVideo3x4:b},mo.SpecificRectangle),heading:null!=k?k:null===(v=t.plainEditorialNotes)||void 0===v?void 0:v.tagline,title:S,subtitleLinks:$,description:y,numberOfSocialBadges:3,style:{style:"tallArtwork",shouldShowLegibilityGradient:null===(f=null===(p=null==t?void 0:t.display)||void 0===p?void 0:p.decorations)||void 0===f?void 0:f.some(n=>"gradient"===n)},name:null===(m=n.attributes)||void 0===m?void 0:m.name,...ri(n,r)},A=(0,Ko.isSome)(D.subtitleLinks)&&(null===(h=D.subtitleLinks)||void 0===h?void 0:h.length)>0
return(0,Ko.isNothing)(D.heading)&&!A&&(0,Ko.isNothing)(D.title)&&(D.showExplicitBadge=!1),D}(n,e,f,t,i,r)
const h={id:kn(t,n.id,r),artwork:wn(p.artwork),heading:i?null===(d=null===(c=null==e?void 0:e.meta)||void 0===c?void 0:c.reason)||void 0===d?void 0:d.stringForDisplay:null,numberOfSocialBadges:3,style:{style:"squareArtwork"},name:p.name,...ri(n,r,s)}
switch(n.type){case oo.Albums:Object.assign(h,function(n,e,t){const i=n.attributes,o={title:null==i?void 0:i.name,subtitleLinks:ie(n,e,t),style:{style:"squareArtwork"}}
if(null==i?void 0:i.releaseDate){const n=Date.now()-2592e6,e=new Date(i.releaseDate).getTime(),r=l(i.releaseDate,t),s=function(n,e){if(!n)return""
const t=new Date(n.toString()),i=Ho.languageTag(e)
return t.toLocaleString(i,{month:"long",day:"numeric",timeZone:"UTC"})}(i.releaseDate,t)
o.description=e<n?r:s}return o}(n,o,r))
break
case oo.Playlists:Object.assign(h,function(n){var e,t
const i=n.attributes,o=null==i?void 0:i.artistNames,r=null==i?void 0:i.isChart,l=null==i?void 0:i.playlistType,s={}
r||-1!==["personal-mix","replay"].indexOf(l)?s.subtitleLinks=te(o):(s.title=null==i?void 0:i.name,s.subtitleLinks=te(null!==(e=w(i))&&void 0!==e?e:null==i?void 0:i.curatorName))
const a=null===(t=null==i?void 0:i.editorialVideo)||void 0===t?void 0:t.motionSquareVideo1x1
return{...s,videoArtwork:bn({motionSquareVideo1x1:a},mo.SpecificRectangle),style:{style:"squareArtwork"}}}(n))
break
case oo.Stations:Object.assign(h,function(n){var e
const t=n.attributes
return{title:null==t?void 0:t.name,subtitleLinks:te(null!==(e=w(t))&&void 0!==e?e:null==t?void 0:t.curatorName),style:{style:"squareArtwork"}}}(n))
break
case oo.EditorialItems:Object.assign(h,function(n){var e,t,i,o
const r=n.attributes
return{title:null!==(t=null===(e=null==r?void 0:r.plainEditorialNotes)||void 0===e?void 0:e.badge)&&void 0!==t?t:null===(i=null==r?void 0:r.plainEditorialNotes)||void 0===i?void 0:i.name,description:w(r),artwork:wn(null===(o=null==r?void 0:r.editorialArtwork)||void 0===o?void 0:o.subscriptionCover),style:{style:"squareArtwork"}}}(n))
break
case oo.Curators:case oo.Activities:case oo.TVShows:case oo.AppleCurators:Object.assign(h,{title:null===(v=n.attributes)||void 0===v?void 0:v.name,subtitle:w(n.attributes)})
break
case oo.UploadedVideos:Object.assign(h,{title:p.name})
break
default:return Jo.warn(r,`"${n.type}" resource type unsupported, dropping poster lockup item with id "${n.id}".`),null}return h}function si(n,e,t){var i,o
return 0===e.length?null:{id:yn(n.id,t),itemKind:"posterLockup",presentation:{kind:"collection",layout:{kind:"shelf",numberOfRows:1}},items:e,header:{kind:"default",item:{title:null===(o=null===(i=n.attributes)||void 0===i?void 0:i.title)||void 0===o?void 0:o.stringForDisplay}}}}function ai(n){var e,t
const i=null===(t=null===(e=n.attributes)||void 0===e?void 0:e.display)||void 0===t?void 0:t.decorations
return!!i&&i.some(n=>"explanation"===n)}function ui(n,e,t,i={kind:"shelf",numberOfRows:1}){var o,r,l,s
const a=null===(r=null===(o=n.relationships)||void 0===o?void 0:o.contents)||void 0===r?void 0:r.data
if(!a)return Jo.warn(t,`Dropping personal recommendation with id "${n.id}", missing child resource identifiers.`),null
const u=z(n,t),c=[]
return e.optionalResourcesAndIdentifiers(a).forEach(([o,r])=>{var l
if((null===(l=n.attributes)||void 0===l?void 0:l.isGroupRecommendation)&&r.type===oo.PersonalRecommendation)if(o){const n=ui(o,e,t,i)
n?c.push(...n.items):Jo.warn(t,`Dropping personal recommendation item with id "${r.id}" and type "${r.type}", no children found.`)}else Jo.warn(t,`Dropping grouped personal recommendation item with id "${r.id}" and type "${r.type}", missing resource.`)
else{const i=function(n,e,t,i,o,r){return function(n){switch(n.type){case oo.LibraryAlbums:case oo.LibraryPlaylists:return!1
default:return!0}}(e)?n?function(n,e,t,i,o,r){var l,s,a,u,c,d
const v=S(n,o),p={id:kn(t,n.id,o),artwork:wn(null===(l=n.attributes)||void 0===l?void 0:l.artwork,fo.BoundedBox),contentDescriptor:v,playAction:Y(v,o,void 0,void 0,r,!0),segue:Qn(v,n,"ShelfItem",o,r),numberOfSocialBadges:3,showExplicitBadge:R(null==n?void 0:n.attributes)}
let f
switch(n.type){case oo.Albums:case oo.MusicMovies:f={titleLinks:te(null===(s=n.attributes)||void 0===s?void 0:s.name),subtitleLinks:ie(n,i,o)}
break
case oo.Playlists:f={titleLinks:te(null===(a=n.attributes)||void 0===a?void 0:a.name),subtitleLinks:te(null===(u=n.attributes)||void 0===u?void 0:u.curatorName)}
break
case oo.Stations:f={titleLinks:te(Sn(null===(c=n.attributes)||void 0===c?void 0:c.name))}
break
case oo.TVShows:f={titleLinks:te(null===(d=n.attributes)||void 0===d?void 0:d.name)}
break
default:return Jo.warn(o,`"${e.type}" resource type unsupported, dropping catalog square lockup item with id "${e.id}".`),null}return{...p,...f}}(n,e,t,i,o,r):void Jo.warn(o,`Dropping catalog square lockup with id "${e.id}" and type "${e.type}", missing resource.`):function(n,e,t){const i=t.optional(_o.cloudLibraryStatusProvider)
if(i&&!i.isCloudLibraryLoaded)return null
switch(n.type){case oo.LibraryAlbums:case oo.LibraryPlaylists:break
default:return Jo.warn(t,`'${n.type}' resource type unsupported, dropping personal recommendation item with id '${n.id}'.`),null}const o=$(n,t)
if(o)return{id:kn(e,n.id,t),contentDescriptor:o,playAction:Y(o,t,null,null,null,!0),segue:ne(n,"ShelfItem",o,t),numberOfSocialBadges:3}
Jo.warn(t,`Couldn't create content descriptor for library square lockup item of type "${n.type}" with id "${n.id}".`)}(e,t,o)}(o,r,n.id,e,t,u)
i&&c.push(i)}}),0===c.length?null:{id:yn(n.id,t),itemKind:"squareLockup",presentation:{kind:"collection",layout:i},items:c,header:{kind:"default",item:{title:null===(s=null===(l=n.attributes)||void 0===l?void 0:l.title)||void 0===s?void 0:s.stringForDisplay,accessoryButtons:ci(n,t)}},displaySeparator:!0}}function ci(n,e){var t
if(!(null===(t=n.attributes)||void 0===t?void 0:t.hasSeeAll))return null
const i={$kind:"ListenNowSeeAllPageIntent",personalRecommendationID:n.id},o=P({kind:lo.CatalogPage,intent:i},p(e,"seeAll","button","navigate",{actionUrl:n.href})),r=(0,Bo.f3)(_o.localization,e)
return[ae(n.id,r.string("FUSE.SeeAll"),o)]}function di(n,e){return{$kind:"RefreshRecentlyPlayedIntent",refreshPath:n,reason:e}}function vi(n,e,t,i){const o=n.href
if(!o)return Jo.warn(i,"Personal recommendation missing refresh path, dropping section invalidation rules."),null
let r
return!e&&function(n){var e
const t=null===(e=n.attributes)||void 0===e?void 0:e.nextUpdateDate
if(!t)return!1
const i=new Date(t).getTime()+1e4
return Date.now()>i}(n)&&(r={events:[{name:"expirationDate",date:(new Date).toJSON()}],intent:t(o,"Exceeded next update date")}),r?{eventTriggers:[r]}:{eventTriggers:[{events:[{name:"playActivity",delay:2e3}],intent:t(o,"Play Activity")},{events:[{name:"cloudLibraryStatusDidChange"}],intent:t(o,"Cloud Library Status")}]}}function pi(n,e,t,i){const o=ui(n,e,i)
if(!o)return null
const r=vi(n,t,di,i)
return r?(o.invalidationRules=r,o):(Jo.warn(i,`No invalidation rules found for recently played shelf.  Dropping personal recommendation '${JSON.stringify(n)}'`),null)}function fi(n,e){return{$kind:"RefreshHorizontalGridIntent",refreshPath:n,reason:e}}function mi(n,e,t,i){var o,r,l,s
const a=null===(r=null===(o=n.relationships)||void 0===o?void 0:o.contents)||void 0===r?void 0:r.data
if(!a)return Jo.warn(i,`Dropping personal recommendation with id "${n.id}", missing child resource identifiers.`),null
const u=z(n,i),c=[],d=n.id
if(e.resourcesAndIdentifiers(a).forEach(([n,e])=>{const t=function(n,e,t,i,o){var r,l,s
const a=n.attributes
if(!a)return Jo.warn(i,`Dropping horizontal lockup because no attributes were found: '${JSON.stringify(n)}'`),null
let u,c
switch(k(n)&&(u=null===(l=null===(r=a.plainEditorialNotes)||void 0===r?void 0:r.standard)||void 0===l?void 0:l.toLocaleUpperCase()),e.type){case oo.Albums:c={title:a.name,subtitle:a.artistName}
break
case oo.Playlists:c={title:a.name,subtitle:a.curatorName}
break
case oo.Stations:c={title:Sn(a.name),subtitle:fe(n.attributes,i)}
break
default:return Jo.warn(i,`Unsupported content type: ${e.type}.  Dropping horizontal lockup`),null}const d=S(n,i),v=Y(d,i,void 0,void 0,o,!0)
return{id:kn(t,e.id,i),artwork:wn(a.artwork),contentDescriptor:d,playAction:v,segue:v,title:c.title,subtitle:null!==(s=c.subtitle)&&void 0!==s?s:w(a),headline:u,name:a.name}}(n,e,d,i,u)
t&&c.push(t)}),0===c.length)return null
const v=vi(n,t,fi,i)
return{id:yn(d,i),itemKind:"horizontalLockup",presentation:{kind:"collection",layout:{kind:"shelf",numberOfRows:3}},items:c,header:{kind:"default",item:{title:null===(s=null===(l=n.attributes)||void 0===l?void 0:l.title)||void 0===s?void 0:s.stringForDisplay}},displaySeparator:!0,invalidationRules:v}}function hi(n,e,t){switch(n.type){case oo.PersonalRecommendation:return function(n,e,t){var i,o
const r=n.attributes,l=null===(i=null==r?void 0:r.display)||void 0===i?void 0:i.kind,s=null==r?void 0:r.kind
switch(l){case No.CardShelf:return function(n,e,t){var i,o
const r=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.contents)||void 0===o?void 0:o.data
if(!r||0===r.length)return Jo.warn(t,`Dropping personal recommendation with id "${n.id}", missing child resource identifiers.`),null
const l=z(n,t),s=[],a=ai(n)
return e.resourcesAndIdentifiers(r).forEach(([i,o])=>{var r,u
const c=li(i,o,n.id,a,e,t,l)
if(c)switch(o.type){case oo.Albums:case oo.Playlists:case oo.Stations:const n={...c,segue:c.playAction,textAlignment:$o.Leading,description:null,subtitleLinks:null,title:null===(u=null===(r=o.meta)||void 0===r?void 0:r.utterance)||void 0===u?void 0:u.stringForDisplay}
s.push(n)
break
default:Jo.warn(t,`Type not supported: '${o.type}'.  Dropping item`)}}),si(n,s,t)}(n,e,t)
case No.CoverShelf:return"recently-played"===s?pi(n,e,!1,t):ui(n,e,t)
case No.NotesHeroShelf:return function(n,e,t){var i,o
const r=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.contents)||void 0===o?void 0:o.data
if(!r||0===r.length)return Jo.warn(t,`Dropping personal recommendation with id "${n.id}", missing child resource identifiers.`),null
const l=z(n,t),s=[],a=ai(n)
return e.resourcesAndIdentifiers(r).forEach(([i,o])=>{const r=li(i,o,n.id,a,e,t,l)
r&&s.push(r)}),si(n,s,t)}(n,e,t)
case No.HorizontalLockupGrid:return mi(n,e,!1,t)
case No.SuperHeroShelf:return function(n,e,t){var i,o,r,l,s,a,u,c,d,v,p,f,m,h,g
const w=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.contents)||void 0===o?void 0:o.data
if(!w||0===w.length)return Jo.warn(t,`Dropping personal recommendation with id "${n.id}", missing child resource identifiers.`),null
const b=w[0],k=e.resource(b)
if(!k)return Jo.warn(t,`Dropping personal recommendation with id "${n.id}", missing child resource.`),null
const y=k.attributes
if(!y)return Jo.warn(t,`"${b.id}" resource missing attributes, dropping personal recommendation item with id "${n.id}".`),null
let $
const D=null===(r=b.meta)||void 0===r?void 0:r.editorialCard
if(D&&($=null===(l=y.plainEditorialCard)||void 0===l?void 0:l[D]),!$){const n=null===(a=Object.keys(null!==(s=y.plainEditorialCard)&&void 0!==s?s:{}))||void 0===a?void 0:a[0]
$=null===(u=y.plainEditorialCard)||void 0===u?void 0:u[n]}const A=null==$?void 0:$.editorialArtwork
if(!A)return Jo.warn(t,`"${b.type}" resource missing editorial artwork, dropping personal recommendation item with id "${b.id}".`),null
if(!A.superHeroWide)return Jo.warn(t,`Resource missing wide artwork for super hero, ${b.type} ${b.id} for item.`),null
const P=z(n,t),E=null===(c=null==y?void 0:y.editorialVideo)||void 0===c?void 0:c.motionWideVideo21x9,O=S(k,t),I=null!==(v=null===(d=null==$?void 0:$.display)||void 0===d?void 0:d.decorations)&&void 0!==v?v:[],N={id:kn(n.id,b.id,t),wideArtwork:wn(A.superHeroWide,fo.SpecificRectangle),wideVideoArtwork:bn({motionWideVideo21x9:E},mo.SpecificRectangle),numberOfSocialBadges:3,segue:Qn(O,k,"PosterItem",t,P),description:null===(p=null==$?void 0:$.plainEditorialNotes)||void 0===p?void 0:p.short,playAction:Y(O,t,void 0,void 0,P,!0),contentDescriptor:O,shouldShowLegibilityGradient:I.some(n=>"gradient"===n),showExplicitBadge:R(y),name:y.name}
return{id:yn(n.id,t),itemKind:"superHeroLockup",presentation:{kind:"single"},items:[N],header:{kind:"default",item:{title:null!==(h=null===(m=null===(f=n.attributes)||void 0===f?void 0:f.title)||void 0===m?void 0:m.stringForDisplay)&&void 0!==h?h:null===(g=null==$?void 0:$.plainEditorialNotes)||void 0===g?void 0:g.tagline}}}}(n,e,t)
case No.SocialCardShelf:return function(n,e,t){var i,o,r,l
const s=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.contents)||void 0===o?void 0:o.data
if(!s)return void Jo.warn(t,`Dropping personal recommendation with id "${n.id}", missing child resource identifiers.`)
const a=yn(`recommended-friends - ${n.id}`,t),u=[]
return e.resourcesAndIdentifiers(s).forEach(([n,e])=>{let i
switch(n.type){case oo.SocialProfiles:i=function(n,e,t,i){var o,r
const l=e.attributes
if(!l)return Jo.warn(i,`"${n.type}" resource missing attributes, dropping personal recommendation item with id "${n.id}".`),null
let s
if(!0===l.isPrivate&&(s=(0,Bo.f3)(_o.localization,i).string("FUSE.Social.Onboarding.FindandFollow.Explanation.Private")),s||(s=null===(r=null===(o=n.meta)||void 0===o?void 0:o.reason)||void 0===r?void 0:r.stringForDisplay),!s){const n=null==l?void 0:l.topGenreNames
n&&n.length>0&&(s=n.join(", "))}const a=kn("recommended-friends",n.id,i),u={$kind:"removeItemAction",sectionIdentifier:t,itemIdentifier:a,actionMetrics:p(i,a,"lockup","delete")},c=S(e,i),d=null==c?void 0:c.identifiers.socialProfileID
if(!d)return Jo.warn(i,`"${n.type}" unable to find social profile id.  Dropping item".`),null
const v={$kind:"compoundAction",subactions:[u,{$kind:"intentAction",intent:{$kind:"removeRecommendedFriendIntent",socialProfileID:d},actionMetrics:Zo}],actionMetrics:Zo},f=Qn(c,e,"Card",i)
return{id:a,title:l.name,subtitle:s,artwork:wn(l.artwork),buttonTitle:"FOLLOW",closeAction:v,primaryButtonAction:null,segue:f,contentDescriptor:c}}(e,n,a,t)
break
case oo.SocialUpsells:i=function(n,e,t){var i,o,r,l,s,a,u
const c=xe({kind:lo.CatalogPage,intent:{$kind:"SocialOnboardingFindFriendsPageIntent",ignoreSocialOnboardingFlow:!0}},Zo)
return{id:kn("recommended-friends",n.id,t),title:null!==(r=null===(o=null===(i=e.meta)||void 0===i?void 0:i.reason)||void 0===o?void 0:o.stringForDisplay)&&void 0!==r?r:null===(s=null===(l=n.meta)||void 0===l?void 0:l.reason)||void 0===s?void 0:s.stringForDisplay,buttonTitle:null===(a=e.attributes)||void 0===a?void 0:a.action,artwork:wn(null===(u=e.attributes)||void 0===u?void 0:u.artwork),segue:null,closeAction:null,subtitle:null,contentDescriptor:null,primaryButtonAction:c}}(e,n,t)
break
default:Jo.warn(t,`"${e.type}" resource type unsupported, dropping shelf item with id "${e.id}".`)}i&&u.push(i)}),0===u.length?null:{id:a,itemKind:"socialCardLockup",presentation:{kind:"collection",layout:{kind:"shelf",numberOfRows:1}},items:u,header:{kind:"default",item:{title:null===(l=null===(r=n.attributes)||void 0===r?void 0:r.title)||void 0===l?void 0:l.stringForDisplay,accessoryButtons:null}},displaySeparator:!0,backgroundTreatment:"alternate"}}(n,e,t)
default:const i=null===(o=null==r?void 0:r.title)||void 0===o?void 0:o.stringForDisplay
return void Jo.warn(t,`Unsupported display kind "${l}" dropping personal recommendation with title "${i}".`)}}(n,e,t)
case oo.MarketingItems:return function(n,e){var t
return"musicListenNowBanner"===(null===(t=n.attributes)||void 0===t?void 0:t.placement)?function(n,e){var t
const i=n.attributes
if(!i)return void Jo.warn(e,`"${n.id}" resource missing attributes, dropping marketing item with id "${n.id}".`)
const o=null===(t=null==i?void 0:i.offers)||void 0===t?void 0:t[0]
return yt(n.id,{id:kn("listen-now-inline-marketing-item",n.id,e),title:null==i?void 0:i.title,subtitle:null==i?void 0:i.subtitle,buttonTitle:null==o?void 0:o.callToActionLabel,buttonAction:q(o,Zo,e)})}(n,e):function(n,e){var t,i,o,r,l,s,a,u,c,d,v,f,m,h,g,w,b,k,y,S,$,D,A,P
const E=n.attributes
if(!E)return void Jo.warn(e,`"${n.id}" resource missing attributes, dropping marketing item with id "${n.id}".`)
const O=null===(t=E.offers)||void 0===t?void 0:t[0],I=E.marketingArtwork,N={placementType:null!==(o=null===(i=null==O?void 0:O.metrics)||void 0===i?void 0:i.placementType)&&void 0!==o?o:null===(l=null===(r=n.meta)||void 0===r?void 0:r.metrics)||void 0===l?void 0:l.placementType,upsellType:"generic",placement:null!==(a=null===(s=null==O?void 0:O.metrics)||void 0===s?void 0:s.placement)&&void 0!==a?a:null===(c=null===(u=n.meta)||void 0===u?void 0:u.metrics)||void 0===c?void 0:c.placement,marketing:{offerDecisionId:null!==(v=null===(d=null==O?void 0:O.metrics)||void 0===d?void 0:d.offerDecisionId)&&void 0!==v?v:null===(m=null===(f=n.meta)||void 0===f?void 0:f.metrics)||void 0===m?void 0:m.offerDecisionId,"marketing.marketingItemId":null!==(g=null===(h=null==O?void 0:O.metrics)||void 0===h?void 0:h["marketing.marketingItemId"])&&void 0!==g?g:null===(b=null===(w=n.meta)||void 0===w?void 0:w.metrics)||void 0===b?void 0:b["marketing.marketingItemId"]}},F=p(e,null!==(A=null!==(S=null===(y=null===(k=n.meta)||void 0===k?void 0:k.metrics)||void 0===y?void 0:y.targetId)&&void 0!==S?S:null===(D=null===($=n.meta)||void 0===$?void 0:$.metrics)||void 0===D?void 0:D.id)&&void 0!==A?A:n.id,"PosterItem","buy",N),U={id:kn("listen-now-marketing-item",n.id,e),wideArtwork:wn(null==I?void 0:I.superHeroWide,fo.SpecificRectangle),headline:E.title,title:null==O?void 0:O.callToActionLabel,subtitle:null==E?void 0:E.subtitle,numberOfSocialBadges:0,shouldShowLegibilityGradient:!1,segue:q(O,F,e),name:null==E?void 0:E.name}
return{id:yn(`listen-now-marketing-item - ${n.id}`,e),itemKind:"superHeroLockup",presentation:{kind:"single"},header:{kind:"default",item:{title:null===(P=n.attributes)||void 0===P?void 0:P.header}},items:[U]}}(n,e)}(n,t)
default:return Jo.warn(t,`Unexpected resource type: '${n.type}', Dropping section`),null}}function gi(n,e){var t,i
if(function(n){var e,t
return"OnboardingRequired"===(null===(t=null===(e=null==n?void 0:n.body)||void 0===e?void 0:e.meta)||void 0===t?void 0:t.account)}(n))return function(n,e){const t=yn("onboarding-required-section-header",e),i=lt(t,{title:zo.string("FUSE.Upsell.Onboard.Description",e),contentDescriptor:null,hideContextMenuButton:!0,textAlignment:$o.Centered,id:kn(t,"onboarding-required-page-item",e)},!1),o=yn("onboarding-required-section-button",e),r={id:o,itemKind:"socialProfileFindFriendsButtonComponentModel",presentation:{kind:"single"},items:[{id:kn(o,"onboarding-required-section-button-item",e),buttonTitle:zo.string("FUSE.Upsell.Onboard.CTA",e),segue:P({kind:lo.OnboardingPage},Zo)}]}
return{pageMetrics:m(e,n,"onboarding","Onboarding"),sections:[i,r],invalidationRules:{eventTriggers:[{events:[{name:"invalidationAction",kind:"onboardingCompleted",scope:"page"}],intent:Le({$kind:"ListenNowPageIntent"},"Onboarding Completed")},Me({$kind:"ListenNowPageIntent"})]}}}(n,e)
const o=null===(t=n.body)||void 0===t?void 0:t.data
if(!o||0===o.length)throw new Error("No resource identifiers in Listen Now response")
const r=null===(i=n.body)||void 0===i?void 0:i.resources
if(!r)throw new Error("No resource map in Listen Now response")
const l=Ho.countryCode(e),s=[],a=new ur(r,e)
let u=!1
a.resources(o).forEach((n,t)=>{const i=hi(n,a,e)
0===t&&"inlineUpsell"===(null==i?void 0:i.itemKind)&&(u=!0),"socialCardLockup"===(null==i?void 0:i.itemKind)&&s.length>0&&(s[s.length-1].displaySeparator=!1),i&&s.push(i)})
const c=W(n.body,e)
return{pageMetrics:m(e,n,"grouping","ListenNow",a,"ListenNowLanding",c),sections:s,header:{showAccountButton:_(e),title:zo.string("FUSE.ListenNow.Pageheader",e),showSeparator:!1===u},invalidationRules:Re({$kind:"ListenNowPageIntent"},!0,n.expirationDate),canonicalURL:`https://music.apple.com/${encodeURIComponent(l)}/listen-now`}}async function wi(n){const e=function(n){return x(n)?new Qr(n):new nl(n)}(n)
return vn(e,n)}function bi(n=Zo){return{$kind:"dismissModalPresentationAction",actionMetrics:n}}async function ki(n){return net.fetch(n).then(e=>{if(!e.ok)throw new Error(`Bad Status code ${e.status} for ${n.url}`)
return e})}function yi(n){return n?null==n?void 0:n.map(n=>{const e=n
if(!e)return null
const t=e.timestamp
return t?{timestamp:new Date(Date.parse(t)),contentDescriptor:e.contentDescriptor}:null}).filter(Ko.isSome):null}async function Si(n,e){const t=Ho.countryCode(e),i=new Go(`/v1/catalog/${t}/search`,e)
return i.queryString.addParameters({term:n,limit:"21"}),i.queryString.extend.add("artistUrl"),i.queryString.with.add("serverBubbles"),i.queryString.with.add("lyrics"),i.queryString.artworkURL.add(io.OmitFileExtension),i.queryString.addParameters({"relate[albums]":"artists","include[albums]":"artists","include[music-videos]":"artists","relate[songs]":"albums","fields[artists]":"url,name,artwork","fields[albums]":"artistName,artistUrl,artwork,contentRating,editorialArtwork,editorialNotes,name,playParams,releaseDate,url,trackCount","include[songs]":"artists","omit[resource]":"autos"}),[oo.Activities,oo.Albums,oo.AppleCurators,oo.Artists,oo.Curators,oo.EditorialItems,oo.MusicMovies,oo.MusicVideos,oo.Playlists,oo.RecordLabels,oo.Songs,oo.Stations,oo.TVEpisodes,oo.UploadedVideos].forEach(i.queryString.types.add,i.queryString.types),await dn({url:i.string,method:"GET"},e)}async function $i(n,e){const t=Ho.countryCode(e),i=new Go(`/v1/social/${t}/search`,e)
return i.queryString.addParameters({term:n,limit:"21"}),i.queryString.with.add("serverBubbles"),i.queryString.with.add("lyrics"),i.queryString.artworkURL.add(io.OmitFileExtension),i.queryString.addParameters({"art[social-profiles:url]":"c"}),[oo.Playlists,oo.SocialProfiles].forEach(i.queryString.types.add,i.queryString.types),await dn({url:i.string,method:"GET"},e)}function Di(n,e,t,i){let o
if(!n.groupId)return null
const r={$kind:"SearchResultsSeeAllPageIntent",term:e,type:t,title:n.name},l=P({kind:lo.CatalogPage,intent:r},p(i,"seeAll","button","navigate"))
if((0,Ko.isSome)(n.next)&&(0,Ko.isSome)(n.groupId)){const e=(0,Bo.f3)(_o.localization,i)
o=[ae(n.groupId,e.string("FUSE.SeeAll"),l)]}return o}function Ai(n,e,t){var i,o
switch(n.type){case oo.Albums:case oo.MusicVideos:return ie(n,e,t)
case oo.UploadedVideos:case oo.MusicMovies:return te(null===(i=n.attributes)||void 0===i?void 0:i.artistName)
case oo.Playlists:return te(null===(o=n.attributes)||void 0===o?void 0:o.curatorName)
case oo.TVEpisodes:case oo.TVSeasons:case oo.TVShows:case oo.Stations:case oo.Curators:case oo.AppleCurators:case oo.EditorialItems:return te(w(n.attributes))
default:return null}}function Pi(n,e,t){var i,o,r
const l=function(n,e){switch(n){case no.Album:return zo.string("IXDisplayableKind.album.one",e)
case no.Artist:return zo.string("IXDisplayableKind.artist.one",e)
case no.AppleCurator:case no.Curator:return zo.string("IXDisplayableKind.iTunesBrand.Curator.one",e)
case no.ArtistUploadedVideo:return zo.string("IXDisplayableKind.uploadedVideo.one",e)
case no.ArtistUploadedSong:return zo.string("IXDisplayableKind.uploadedAudio.other",e)
case no.EditorialItem:return zo.string("FUSE.Search.Category",e)
case no.Movie:return zo.string("IXDisplayableKind.movie.one",e)
case no.MusicVideo:return zo.string("IXDisplayableKind.musicVideo.one",e)
case no.Playlist:return zo.string("IXDisplayableKind.playlist.one",e)
case no.RadioStation:return zo.string("IXDisplayableKind.radioStation.one",e)
case no.RecordLabel:return zo.string("AMWeb.Label.Module.Record.Label.one",e)
case no.SocialProfile:return zo.string("FUSE.Social.Profile",e)
case no.Song:return zo.string("IXDisplayableKind.song.one",e)
case no.TVEpisode:return zo.string("IXDisplayableKind.tvEpisode.one",e)
case no.TVSeason:return zo.string("IXDisplayableKind.tvSeason.one",e)
case no.TVShow:return zo.string("IXDisplayableKind.showBrand.Linear.one",e)}}(n,t)
switch(n){case no.Album:case no.ArtistUploadedVideo:case no.Movie:case no.MusicVideo:case no.RadioStation:case no.Song:case no.TVEpisode:case no.TVSeason:case no.TVShow:case no.Playlist:{const n=null!==(o=null===(i=e.attributes)||void 0===i?void 0:i.artistName)&&void 0!==o?o:null===(r=e.attributes)||void 0===r?void 0:r.curatorName
return n?zo.string("AMWEB.ContentA.Middot.ContentB",t,{contentA:l,contentB:n}):l}case no.Curator:case no.RecordLabel:case no.AppleCurator:case no.Artist:case no.EditorialItem:case no.SocialProfile:return l
default:return null}}function Ei(n,e,t,i,o){var r
if(!U(er,o)&&t===Uo.Playback)return Y(n,o,i)
const l={timestamp:new Date,contentDescriptor:n},s=(0,Bo.f3)(_o.storage,o),a=null!==(r=yi(s.getItem(vo.User.RecentlySearchedItems)))&&void 0!==r?r:[],u=[s.setItemAction(vo.User.RecentlySearchedItems,[...a,l]),{$kind:"invalidationAction",actionMetrics:Zo,scope:"global",kind:"recentCatalogSearchesChanged"}]
let c
switch(t){case Uo.Playback:const t=Y(n,o,i)
if(!t)return null
c=t
break
case Uo.Navigation:c=Qn(n,e,"ShelfItem",o)}return c&&u.push(c),rn(u,n?f(o,n,"ShelfItem","navigate"):p(o,e.id,"ShelfItem","navigate"))}function Oi(n){var e,t,i,o,r,l,s,a,u,c
return null!==(a=null!==(l=null!==(t=null===(e=n.attributes)||void 0===e?void 0:e.previewArtwork)&&void 0!==t?t:null===(r=null===(o=null===(i=n.attributes)||void 0===i?void 0:i.movieClips)||void 0===o?void 0:o[0])||void 0===r?void 0:r.previewArtwork)&&void 0!==l?l:null===(s=n.attributes)||void 0===s?void 0:s.artwork)&&void 0!==a?a:null===(c=null===(u=n.attributes)||void 0===u?void 0:u.editorialArtwork)||void 0===c?void 0:c.brandLogo}function Ii(n,e,t,i,o,r){var l
const s=null===(l=t.results)||void 0===l?void 0:l[e.toString()]
if(!s)throw new Error(`No relationship contents found for type: '${e}'`)
switch(e){case Fo.TopResults:return function(n,e,t,i){var o
let r=n.data
if(!r)return void Jo.warn(t,`Dropping top search results with groupId '${n.groupId}', missing resource identifiers.`)
r=r.slice(0,3)
const l=[],s=yn(`top-search-section - ${null!==(o=n.groupId)&&void 0!==o?o:""}`,t)
return e.resourcesAndIdentifiers(r).forEach(([n,e])=>{var i,o,r,a,u
const c=S(n,t),d=null==c?void 0:c.kind,v=Oi(n),p=(0,Ko.isSome)(d)?Pi(d,n,t):null,f=Ni(e,t),m=(null===(i=n.attributes)||void 0===i?void 0:i.inLibrary)?zo.string("Fuse.Music.Search.FromYourLibrary",t):null
l.push({id:kn(s,e.id,t),subtitle:p,subheadline:null!=f?f:m,artwork:wn(v),title:null!==(r=null===(o=n.attributes)||void 0===o?void 0:o.name)&&void 0!==r?r:null===(u=null===(a=n.attributes)||void 0===a?void 0:a.editorialNotes)||void 0===u?void 0:u.name,contentDescriptor:c,segue:Ei(c,n,Uo.Navigation,s,t),playAction:Ei(c,n,Uo.Playback,s,t),showExplicitBadge:R(n.attributes),pauseAction:Cn(),resumeAction:Ln()})}),0===l.length?null:{id:s,presentation:{kind:"collection",layout:{kind:"shelf",numberOfRows:1}},header:{kind:"default",item:{title:n.name}},itemKind:"topSearchLockup",items:l,displaySeparator:!0}}(s,o,r)
case Fo.Profile:case Fo.Artist:case Fo.RecordLabel:case Fo.Curator:return function(n,e,t,i,o,r){var l
const s=n.data
if(!s)return void Jo.warn(r,`Dropping bubble search results with groupId '${n.groupId}', missing resource identifiers.`)
const a=[],u=yn(`bubble-section - ${null!==(l=n.groupId)&&void 0!==l?l:""}`,r)
if(o.resourcesAndIdentifiers(s).forEach(([n,e])=>{var t,o,l,s,c,d,v
const p=S(n,r),f=Oi(n),m=null!==(o=null===(t=n.attributes)||void 0===t?void 0:t.name)&&void 0!==o?o:null===(s=null===(l=n.attributes)||void 0===l?void 0:l.editorialNotes)||void 0===s?void 0:s.name,h=(0,Ko.isSome)(null===(c=n.attributes)||void 0===c?void 0:c.handle)?`@${null===(d=n.attributes)||void 0===d?void 0:d.handle}`:null,g=i
a.push({id:kn(u,e.id,r,g),title:m,subtitle:h,artwork:wn(f),contentDescriptor:p,segue:Ei(p,n,Uo.Navigation,u,r),name:null===(v=n.attributes)||void 0===v?void 0:v.name})}),0===a.length)return null
const c=i?"grid":{kind:"shelf",numberOfRows:1},d=i?null:Di(n,e,t,r)
return{id:u,presentation:{kind:"collection",layout:c},header:{kind:"default",item:{title:n.name,accessoryButtons:d}},itemKind:"bubbleLockup",items:a,displaySeparator:!0}}(s,n,e,i,o,r)
case Fo.Album:case Fo.Playlist:case Fo.RadioEpisode:case Fo.Station:case Fo.Category:case Fo.RadioShow:return function(n,e,t,i,o,r){var l
const s=n.data
if(!s)return void Jo.warn(r,`Dropping square lockup search results with groupId '${n.groupId}', missing resource identifiers.`)
const a=[],u=yn(`square-section - ${null!==(l=n.groupId)&&void 0!==l?l:""}`,r)
if(o.resourcesAndIdentifiers(s).forEach(([n,e])=>{var l,s,c,d,v
const p=S(n,r),f=Oi(n),m=null!==(s=null===(l=n.attributes)||void 0===l?void 0:l.name)&&void 0!==s?s:null===(d=null===(c=n.attributes)||void 0===c?void 0:c.editorialNotes)||void 0===d?void 0:d.name,h=t===Fo.Curator?yo.Small:yo.Regular,g=i
a.push({id:kn(u,e.id,r,g),titleLinks:te(m),subtitleLinks:Ai(n,o,r),artwork:wn(f),contentDescriptor:p,segue:Ei(p,n,Uo.Navigation,u,r),playAction:Ei(p,n,Uo.Playback,u,r),numberOfSocialBadges:3,displayStyle:h,name:null===(v=n.attributes)||void 0===v?void 0:v.name,showExplicitBadge:R(n.attributes)})}),0===a.length)return null
const c=i?"grid":{kind:"shelf",numberOfRows:1},d=i?null:Di(n,e,t,r)
return{id:u,presentation:{kind:"collection",layout:c},header:{kind:"default",item:{title:n.name,accessoryButtons:d}},itemKind:"squareLockup",items:a,displaySeparator:!0}}(s,n,e,i,o,r)
case Fo.MusicVideo:case Fo.VideoExtra:return function(n,e,t,i,o,r){var l
const s=n.data
if(!s)return void Jo.warn(r,`Dropping vertical video lockup search results with groupId '${n.groupId}', missing resource identifiers.`)
const a=[],u=yn(`vertical-video-section - ${null!==(l=n.groupId)&&void 0!==l?l:""}`,r)
if(o.resourcesAndIdentifiers(s).forEach(([n,e])=>{var t,l,s,c,d
const v=S(n,r),p=Oi(n),f=null!==(l=null===(t=n.attributes)||void 0===t?void 0:t.name)&&void 0!==l?l:null===(c=null===(s=n.attributes)||void 0===s?void 0:s.editorialNotes)||void 0===c?void 0:c.name,m=i
a.push({id:kn(u,e.id,r,m),titleLinks:te(f),subtitleLinks:Ai(n,o,r),artwork:wn(p),contentDescriptor:v,segue:Ei(v,n,Uo.Navigation,u,r),playAction:Ei(v,n,Uo.Playback,u,r),name:null===(d=n.attributes)||void 0===d?void 0:d.name,showExplicitBadge:R(n.attributes)})}),0===a.length)return null
const c=i?"grid":{kind:"shelf",numberOfRows:1},d=i?null:Di(n,e,t,r)
return{id:u,presentation:{kind:"collection",layout:c},header:{kind:"default",item:{title:n.name,accessoryButtons:d}},itemKind:"verticalVideoLockup",items:a,displaySeparator:!0}}(s,n,e,i,o,r)
case Fo.Song:return function(n,e,t,i,o,r){var l
const s=n.data
if(!s)return void Jo.warn(r,`Dropping track lockup search results with groupId '${n.groupId}', missing resource identifiers.`)
const a=[],u=yn(`track-section - ${null!==(l=n.groupId)&&void 0!==l?l:""}`,r)
return o.resourcesAndIdentifiers(s).forEach(([n,e])=>{var t,l,s,c
const d=S(n,r),v=Oi(n),p=Ni(e,r),f=i?qn(n,r):te(p),m=i
a.push({id:kn(u,e.id,r,m),title:null!==(l=null===(t=n.attributes)||void 0===t?void 0:t.name)&&void 0!==l?l:null===(c=null===(s=n.attributes)||void 0===s?void 0:s.editorialNotes)||void 0===c?void 0:c.name,subtitleLinks:ie(n,o,r),tertiaryLinks:f,artwork:wn(v),contentDescriptor:d,segue:Ei(d,n,Uo.Navigation,u,r),playAction:Ei(d,n,Uo.Playback,u,r),pauseAction:Cn(),resumeAction:Ln(),duration:ke(i,n),layoutStyle:ye(i),isDisabled:Jn(n,r),showExplicitBadge:R(n.attributes)})}),0===a.length?null:i?xn(a,u,r):function(n,e,t,i,o,r){return Tn(t,n,3,{kind:"default",item:{title:e.name,accessoryButtons:Di(e,i,o,r)}})}(a,n,u,e,t,r)}(s,n,e,i,o,r)
default:return null}}function Ni(n,e){var t,i
const o=null===(t=n.meta)||void 0===t?void 0:t.snippets,r=null===(i=null==o?void 0:o[0])||void 0===i?void 0:i.text
return r?zo.string("FUSE.DT.Search.LyricsColon.Raw",e,{lyricSnippet:r}):null}async function Fi(n){const e=await async function(n){var e
const t=(0,Bo.f3)(_o.recentLibrarySearchesProvider,n).retrieveRecentLibrarySearches(),i=null!==(e=yi((0,Bo.f3)(_o.storage,n).getItem(vo.User.RecentlySearchedItems)))&&void 0!==e?e:[]
let o=t.concat(i)
o.sort((n,e)=>e.timestamp.getTime()-n.timestamp.getTime())
const r=new Set
o=o.filter(n=>{var e,t,i
const o=null!==(t=null===(e=n.contentDescriptor)||void 0===e?void 0:e.identifiers.storeAdamID)&&void 0!==t?t:null===(i=n.contentDescriptor)||void 0===i?void 0:i.identifiers.libraryPersistentID
return!r.has(o)&&r.add(o)}),o=o.slice(0,6)
const l=o.map(n=>n.contentDescriptor).filter(Ko.isSome)
return await async function(n,e){if(!n.length)return[]
const t=Ho.countryCode(e),i=new Go(`/v1/catalog/${t}`,e),o={}
if(n.forEach(n=>{var t
const i=ht(n.kind,e)
if(i!==oo.SocialProfiles&&i){const e=`ids[${i}]`,r=null!==(t=n.identifiers.storeAdamID)&&void 0!==t?t:n.identifiers.libraryPersistentID
o[e]?o[e]+=`,${r}`:o[e]=`${r}`}}),!Object.keys(o).length)return Jo.log(e,`No content identifiers found for '${JSON.stringify(n)}'`),[]
i.queryString.addParameters({fields:"artwork,artistName,url,name,playParams,inLibrary,contentRating,requiresSubscription,kind,editorialArtwork,postUrl","relate[songs]":"albums","include[albums]":"tracks","include[library-albums]":"tracks",include:"artists,curator","include[editorial-items]":"contents","fields[editorial-items]":"editorialNotes","omit[resource]":"autos",...o})
const r=function(n,e,t){var i
const o=null===(i=n.body)||void 0===i?void 0:i.resources
if(!o)return Jo.warn(t,`No resources found for MAPI response: '${JSON.stringify(n)}'`),[]
const r=[]
return e.forEach(n=>{var e,i,l,s,a,u,c,d,v,p,f,m,h,g,w,b,k
const y=ht(n.kind,t),S=null!==(e=n.identifiers.storeAdamID)&&void 0!==e?e:n.identifiers.libraryPersistentID
if(y&&S){const e=null===(i=o[y])||void 0===i?void 0:i[S]
if(e){const i=null!==(s=null===(l=e.attributes)||void 0===l?void 0:l.inLibrary)&&void 0!==s&&s,o=Qn(n,e,"ShelfItem",t),y=null!==(u=null===(a=e.attributes)||void 0===a?void 0:a.previewArtwork)&&void 0!==u?u:null===(v=null===(d=null===(c=e.attributes)||void 0===c?void 0:c.movieClips)||void 0===d?void 0:d[0])||void 0===v?void 0:v.previewArtwork,$=null===(f=null===(p=e.attributes)||void 0===p?void 0:p.editorialArtwork)||void 0===f?void 0:f.brandLogo,D=null!==(h=null!=y?y:null===(m=e.attributes)||void 0===m?void 0:m.artwork)&&void 0!==h?h:$,A={id:kn("top-search-lockup",S,t),artwork:wn(D),contentDescriptor:n,playAction:Y(n,t),segue:o,showExplicitBadge:R(e.attributes),title:null!==(w=null===(g=e.attributes)||void 0===g?void 0:g.name)&&void 0!==w?w:null===(k=null===(b=e.attributes)||void 0===b?void 0:b.editorialNotes)||void 0===k?void 0:k.name,subtitle:Pi(n.kind,e,t),subheadline:i?zo.string("Fuse.Music.Search.FromYourLibrary",t):null,pauseAction:Cn(),resumeAction:Ln()}
r.push(A)}}}),r}(await dn({url:i.string},e),n,e)
return Promise.resolve(r)}(l,n)}(n),t=function(n){const e=(0,Bo.f3)(_o.storage,n).setItemAction(vo.User.RecentlySearchedItems,[]),t=rn([{$kind:"removeRecentLibrarySearchesAction",actionMetrics:Zo},e,{actionMetrics:Zo,scope:"global",kind:"recentCatalogSearchesChanged",$kind:"invalidationAction"}],p(n,"clear","button","delete"))
return[ae("clearButton",zo.string("FUSE.Search.Clear",n),t)]}(n),i={id:yn("top-search-section",n),itemKind:"topSearchLockup",presentation:{kind:"collection",layout:"grid"},items:e,header:{kind:"default",item:{title:zo.string("FUSE.Search.RecentlySearched",n),accessoryButtons:t}},invalidationRules:{eventTriggers:[{events:[{name:"recentLibrarySearchesDidChange"},{name:"invalidationAction",kind:"recentCatalogSearchesChanged",scope:"global"}],intent:{$kind:"RefreshRecentSearchesIntent"}}]},displaySeparator:!0}
return Promise.resolve(i)}function Ui(n,e,t){var i,o
let r=e.results[n]
const l=null==t?void 0:t.results[n]
if(r){const n=null!==(i=null==l?void 0:l.data)&&void 0!==i?i:[]
null===(o=r.data)||void 0===o||o.push(...n)}else r=l
return r}function Ci(n,e,t,i){var o,r,l,s,a
const u=null!==(r=null===(o=n.attributes)||void 0===o?void 0:o.handle)&&void 0!==r?r:"",c=S(n,t)
return{id:kn(e,n.id,t,i),artwork:wn(null===(l=n.attributes)||void 0===l?void 0:l.artwork),title:null===(s=n.attributes)||void 0===s?void 0:s.name,subtitle:`@${u}`,contentDescriptor:c,segue:Qn(c,n,"ShelfItem",t),name:null===(a=n.attributes)||void 0===a?void 0:a.name}}function Li(n,e,t,i,o,r,l,s={kind:"shelf",numberOfRows:1}){const a=e.data
if(!a)return void Jo.warn(l,`Dropping shelf in social profile with id "${n.id}", missing views data.`)
const u=yn(`${i} - ${n.id} `,l),c=new ur(r,l).resources(a).map(n=>Ci(n,u,l,!1))
return 0===c.length?null:{id:u,itemKind:"bubbleLockup",presentation:{kind:"collection",layout:s},items:c,header:{kind:"default",item:{title:t,accessoryButtons:"grid"===s?null:Bi(e,"bubbleLockup",t,u,o,l)}},displaySeparator:!0}}function Mi(n,e,t,i,o,r){var l,s,a,u,c,d,v
const p=S(i,o),f={id:kn(n,i.id,o,r),artwork:wn(null===(l=i.attributes)||void 0===l?void 0:l.artwork,fo.BoundedBox),contentDescriptor:p,playAction:Y(p,o),segue:Qn(p,i,"ShelfItem",o),numberOfSocialBadges:t?3:0,showExplicitBadge:R(null==i?void 0:i.attributes),name:null===(s=null==i?void 0:i.attributes)||void 0===s?void 0:s.name}
switch(i.type){case oo.Albums:case oo.MusicMovies:Object.assign(f,{title:null===(a=i.attributes)||void 0===a?void 0:a.name,subtitle:e?null===(u=i.attributes)||void 0===u?void 0:u.artistName:null})
break
case oo.Playlists:Object.assign(f,{title:null===(c=i.attributes)||void 0===c?void 0:c.name,subtitle:e?null===(d=i.attributes)||void 0===d?void 0:d.curatorName:null})
break
case oo.Stations:case oo.TVShows:Object.assign(f,{title:null===(v=i.attributes)||void 0===v?void 0:v.name})
break
default:return void Jo.warn(o,`"${i.type}" resource type unsupported, dropping social profile view item with id "${i.id}".`)}return f}function Ri(n,e,t,i,o,r,l,s,a={kind:"shelf",numberOfRows:1}){const u=e.data
if(!u)return void Jo.warn(s,`Dropping shelf in social profile with id "${n.id}", missing views data.`)
const c=yn(`${i} - ${n.id} `,s),d=[]
return new ur(l,s).resources(u).forEach(n=>{const e=Mi(c,o,r,n,s,!1)
e&&d.push(e)}),0===d.length?null:{id:c,itemKind:"squareLockup",presentation:{kind:"collection",layout:a},items:d,header:{kind:"default",item:{title:t,accessoryButtons:"grid"===a?null:Bi(e,"squareLockup",t,c,!1,s)}},displaySeparator:!0}}function Bi(n,e,t,i,o,r){var l,s
const a=n.href
if(!a)return null
const u=kn(`Social Profile - See All - ${i}`,a,r),c=null!==(s=null===(l=n.data)||void 0===l?void 0:l.length)&&void 0!==s?s:0
if("bubbleLockup"===e&&c<18||"squareLockup"===e&&c<10)return null
const d=(0,Bo.f3)(_o.localization,r),v={$kind:"SocialProfileSeeAllPageIntent",url:a,title:t,lockupType:e,needsSocialGraphEventTrigger:o},f=P({kind:lo.CatalogPage,intent:v},p(r,"seeAll","button","navigate",{actionUrl:a}))
return[ae(u,d.string("FUSE.SeeAll"),f)]}async function Ti(n,e){var t,i,o
const r=new Go("/v1/social/us/social-profiles",e)
r.queryString.addParameters({"filter[handle]":n}),r.queryString.extend.add("followState")
const l=await vn(r,e),s=null===(t=l.body)||void 0===t?void 0:t.resources,a=null===(i=l.body)||void 0===i?void 0:i.data
if(!s||!a)return null
const u=s["personal-social-profiles"]
if(u){const n=u.me
if(!n)throw new Error("No personal social profile resource identifier in response")
return{socialProfileID:n.id,isOwner:!0}}const c=s["social-profiles"]
if(c){const n=a[0],e=c[n.id]
return{socialProfileID:n.id,isOwner:(null===(o=e.attributes)||void 0===o?void 0:o.followState)===Mo.Self}}return null}function xi(n=Zo){return{$kind:"findFriendsBatchFollowAction",actionMetrics:n}}function Ki(n=Zo){return{$kind:"popAction",actionMetrics:n}}function ji(n,e,t){if(0===n.length)return null
const i=(0,Bo.f3)(_o.localization,t),o=[]
n.forEach(n=>{var r,l
const s=n.name,a=n.socialProfileId,u=n.contactId
if(!s||!a||!u)return
const c=n.localContactId,d=null!==(l=null===(r=n.reason)||void 0===r?void 0:r.stringForDisplay)&&void 0!==l?l:i.string("FUSE.Social.Onboarding.FindandFollow.Explanation.Private"),v=e?i.string("FUSE.Social.Onboarding.FindandFollow.Contacts.Invite"):i.string("FUSE.Social.Follow"),p={id:kn(`SocialOnboardingFindFriendsLockup - ${a}`,u,t),title:s,artwork:wn(n.profileImage),subtitle:e?null:d,buttonTitle:v,socialProfileID:a,localContactIdentifier:c,canBeInvited:e}
o.push(p)})
const r=e?i.string("FUSE.Social.Onboarding.FindandFollow.Contacts.Invite"):i.string("FUSE.Social.Onboarding.FindandFollow.Contacts.Header1")
return function(n,e,t){return{id:n,itemKind:"socialOnboardingFindFriendsPageLockup",displaySeparator:!0,presentation:{kind:"collection",layout:"list"},header:{kind:"default",item:{title:e}},items:t}}(yn(e?"SocialOnboardingFindFriends - Invite":"SocialOnboardingFindFriends - Find Friends",t),r,o)}function _i(n,e){return(0,Ko.isNothing)(n.name)?(0,Ko.isNothing)(e.name)?0:-1:(0,Ko.isNothing)(e.name)?1:n.name.localeCompare(e.name)}function Ji(n,e,t){var i,o,r,l,s,a,u,c
const d=(0,Bo.f3)(_o.localization,t),v=[]
let p
if(e)p=rn([xi(),bi()],Zo)
else{const n={$kind:"SocialOnboardingPrivacySettingsPageIntent"}
p=P({kind:lo.CatalogPage,intent:n},Zo)}const f={id:kn("PageFooterButton","Social Onboarding Notification Settings Page - Primary Button",t),title:e?d.string("Done"):d.string("Next"),segue:p}
let m
if(!e){const n=Ki()
m={id:kn("PageFooterButton","Social Onboarding Notification Settings Page - Secondary Button",t),title:d.string("Back"),segue:n}}const h=null!==(o=null===(i=null==n?void 0:n.friendsToFollow)||void 0===i?void 0:i.friends)&&void 0!==o?o:[]
null!==(l=null===(r=null==n?void 0:n.friendsToFollow)||void 0===r?void 0:r.obeySortOrder)&&void 0!==l&&l||h.sort(_i)
const g=ji(h,!1,t)
g&&v.push(g)
let w=null!==(a=null===(s=null==n?void 0:n.contactsToInvite)||void 0===s?void 0:s.contacts)&&void 0!==a?a:[]
null!==(c=null===(u=null==n?void 0:n.contactsToInvite)||void 0===u?void 0:u.obeySortOrder)&&void 0!==c&&c||w.sort(_i),w=function(n){const e=new Set,t=[]
for(const i of n)(0,Ko.isSome)(i.socialProfileId)&&(e.has(i.socialProfileId)||(e.add(i.socialProfileId),t.push(i)))
return t}(w)
const b=ji(w,!0,t)
if(b&&v.push(b),0===v.length){const n=yn("find-friends-results-empty-header-description",t),e=Ae(n,null,{text:d.string("FUSE.Social.NoContactsFound"),textAlignment:$o.Centered,id:kn(n,"find-friends-results-empty-header-description-item",t)})
v.push(e)}return{pageMetrics:{instructions:[{data:{topic:void 0,shouldFlush:!1,fields:{eventType:"page"},includingFields:["pageFields","languages"],excludingFields:[]},invocationPoints:[to.PageInvocationPoint.pageEnter]}],pageFields:{pageType:"Social Onboarding - Find & follow friends"},custom:{}},sections:v,header:{title:d.string("FUSE.Social.Onboarding.FindandFollow.Header"),showSeparator:!1},footer:{primaryButton:f,secondaryButton:m}}}function qi(n=Zo){return{$kind:"updateFindFriendsPrivacySettingsAction",actionMetrics:n}}function Hi(n,e,t,i,o){if(!n||0===n.length)throw new Error("No resource identifiers in social profile see all page.")
const r=yn(`Social Profile See All - ${t}`,o),l=[]
return e.resources(n).forEach(n=>{switch(t){case"bubbleLockup":const e=Ci(n,r,o,!0)
l.push(e)
break
case"squareLockup":const t=Mi(r,!0,!0,n,o,!0)
t&&l.push(t)}}),0===l.length?null:{id:r,header:{kind:"default",item:{title:i}},itemKind:t,presentation:{kind:"collection",layout:"grid"},items:l,displaySeparator:!0}}function zi(n){return{$kind:"RefreshTopChartSeeAllPageIntent",url:n}}function Wi(n,e,t,i,o,r){const l=Xl.has(n)
switch(n){case Ro.CityCharts:case Ro.DailyGlobalTopCharts:case Ro.Albums:case Ro.Playlists:return function(n,e,t,i,o,r,l){const s=n.data
if(!(null==s?void 0:s.length))return Jo.warn(r,`Dropping top chart resource identifier because no children were found ${JSON.stringify(n)}`),null
const a=[]
let u=i
e.resources(s).forEach(n=>{var i,s,c,d,v,p
const f=S(n,r),m=t?u.toLocaleString():null,h=o===Ro.Albums?ie(n,e,r):te(null!==(s=null===(i=n.attributes)||void 0===i?void 0:i.artistName)&&void 0!==s?s:null===(c=n.attributes)||void 0===c?void 0:c.curatorName)
u+=1,a.push({id:kn("square-lockup",n.id,r,l),titleLinks:te(null===(d=n.attributes)||void 0===d?void 0:d.name),subtitleLinks:h,playAction:Y(f,r),artwork:wn(null===(v=n.attributes)||void 0===v?void 0:v.artwork),contentDescriptor:f,numberOfSocialBadges:3,showExplicitBadge:R(n.attributes),segue:Qn(f,n,"ShelfItem",r),headline:m,name:null===(p=n.attributes)||void 0===p?void 0:p.name})})
const c={kind:"default",item:{title:n.name,accessoryButtons:Gi(n,r)}}
return de(yn(n.chart,r),a,c)}(e,t,l,i,n,o,r)
case Ro.Songs:return function(n,e,t,i,o){const r=n.data
if(!(null==r?void 0:r.length))return Jo.warn(i,`Dropping top chart resource identifier because no children were found ${JSON.stringify(n)}`),null
const l=[],s=n.href
let a=t
e.resources(r).forEach(n=>{var r,u,c,d,v,p,f
const m=n.attributes,h=a.toLocaleString()
a+=1
const g=null!==(d=null!==(u=null!==(r=null==m?void 0:m.artistName)&&void 0!==r?r:null==m?void 0:m.curatorName)&&void 0!==u?u:null===(c=null==m?void 0:m.editorialNotes)||void 0===c?void 0:c.tagline)&&void 0!==d?d:"",w=re(oo.Artists,n,e.resourceMap,i,g),b=S(n,i)
l.push({id:kn(`track-lockup - ${t}`,n.id,i,o),title:null===(v=n.attributes)||void 0===v?void 0:v.name,subtitleLinks:w,playAction:Y(b,i,s,null),artwork:wn(null===(p=n.attributes)||void 0===p?void 0:p.artwork),contentDescriptor:b,showExplicitBadge:R(n.attributes),segue:Qn(b,n,"ShelfItem",i),tertiaryLinks:qn(n,i),duration:null===(f=n.attributes)||void 0===f?void 0:f.durationInMillis,layoutStyle:"shelfTrackList",rankingText:h,pauseAction:Cn(),resumeAction:Ln()})})
const u={kind:"default",item:{title:n.name,accessoryButtons:Gi(n,i)}}
return Tn(yn(n.chart,i),l,3,u)}(e,t,i,o,r)
case Ro.MusicVideos:return function(n,e,t,i,o){const r=n.data
if(!(null==r?void 0:r.length))return Jo.warn(i,`Dropping top chart resource identifier because no children were found ${JSON.stringify(n)}`),null
const l=[],s=yn(n.chart,i)
let a=t
e.resources(r).forEach(n=>{var t,r,u
const c=S(n,i),d=a.toLocaleString()
a+=1,l.push({id:kn("vertical-video-lockup",n.id,i,o),titleLinks:te(null===(t=n.attributes)||void 0===t?void 0:t.name),subtitleLinks:ie(n,e,i),playAction:Y(c,i,s),artwork:wn(null===(r=n.attributes)||void 0===r?void 0:r.artwork),contentDescriptor:c,showExplicitBadge:R(n.attributes),segue:Qn(c,n,"BrickItem",i),headline:d,headlineStyle:wo.Bold,name:null===(u=n.attributes)||void 0===u?void 0:u.name})})
const u={kind:"default",item:{title:n.name,accessoryButtons:Gi(n,i)}}
return se(s,l,u)}(e,t,i,o,r)}}function Gi(n,e){const t=n.href
if(!t||!n.next)return null
const i={$kind:"TopChartSeeAllPageIntent",url:t},o=P({kind:lo.CatalogPage,intent:i},p(e,"seeAll","button","navigate",{actionUrl:t}))
return[ae(t,(0,Bo.f3)(_o.localization,e).string("FUSE.SeeAll"),o)]}async function Vi(n,e,t,i,o){var r,l
const s=n.body
if(!s)throw new Error(`Missing body for response '${JSON.stringify(n)}'`)
const a=s.resources
if(!a)throw new Error(`Missing resource map for response '${JSON.stringify(n)}'`)
const u=s.results
if(!u)throw new Error(`Missing top charts results for response '${JSON.stringify(n)}'`)
const c=new ur(a,o),d=null===(r=Object.keys(u))||void 0===r?void 0:r[0]
if(!d)throw new Error(`No kind found in results of response '${JSON.stringify(n)}'`)
const v=[],p=null===(l=u[d])||void 0===l?void 0:l[0]
if(!p)throw new Error(`No identifier found for top charts response with kind: ${d}.`)
const f=Wi(d,p,c,e,o,!0)
if(f){f.presentation={kind:"collection",layout:d===Ro.Songs?"list":"grid"}
const n=f.items
d===Ro.Songs&&n&&n.forEach(n=>{n.layoutStyle={kind:"playlistTrackList",hasVideo:!1,hasBadging:!1}})
const e=f.header
Rn(e)&&(e.item.accessoryButtons=await async function(n,e,t){if(n!==Ro.Songs)return null
const i=await async function(n){var e,t
const i=Ho.countryCode(n),o=Ho.languageTag(n),r=new Go(`/v1/catalog/${i}/genres`,n)
r.queryString.addParameters({"ids[l]":o,"ids[platform]":"mac"})
const l=await vn(r,n),s=null===(e=l.body)||void 0===e?void 0:e.resources
if(!s)return Jo.error(n,`Failed to fetch genres because no resources were found: ${JSON.stringify(l)}`),[]
const a=null===(t=l.body)||void 0===t?void 0:t.data
return a?new ur(s,n).resources(a):(Jo.error(n,`Failed to fetch genres because no identifiers were found: ${JSON.stringify(s)}`),[])}(t),o=i.map(n=>function(n,e){var t
const i="34"===n.id?zo.string("FUSE.New.AllGenres",e):null===(t=n.attributes)||void 0===t?void 0:t.name
return i?{title:i,segue:Xi(n),id:n.id}:null}(n,t)).filter(Ko.isSome)
return 0===o.length?null:[ue(n,o,null!=e?e:null==i?void 0:i[0].id)]}(d,i,o)),v.push(f)}const h=p.next
let g
return h&&f&&(g={$kind:"TopChartSeeAllPaginateIntent",next:h,lastRanking:e+f.items.length}),{pageMetrics:m(o,n,"see_all","SeeAll",c),sections:v,nextIntent:g,invalidationRules:Zi(d,t)}}function Zi(n,e){return n!==Ro.Songs?null:{eventTriggers:[{events:[{name:"invalidationAction",kind:"genres",scope:"page"}],intent:zi(e)}]}}function Xi(n){return{actionMetrics:Zo,metadata:{id:n.id},scope:"page",kind:"genres",$kind:"invalidationAction"}}function Yi(n,e){const t=new Go(n,e)
return t.queryString.addParameters({limit:"50",include:"tracks","fields[albums]":"artistName,artistUrl,artwork,contentRating,editorialArtwork,name,playParams,releaseDate,url,trackCount","fields[playlists]":"artistName,artistUrl,artwork,contentRating,editorialArtwork,name,playParams,releaseDate,url,curatorName","include[songs]":"artists"}),t.queryString.extend.add("artistUrl"),t}var Qi,no,eo,to,io,oo,ro,lo,so,ao,uo,co,vo,po,fo,mo,ho,go,wo,bo,ko,yo,So,$o,Do,Ao,Po,Eo,Oo,Io,No,Fo,Uo,Co,Lo,Mo,Ro,Bo=n(908),To=n(781),xo=n(706),Ko=n(450),jo=n(900)
const _o={bag:(0,jo.makeMetatype)("bag"),bundle:(0,jo.makeMetatype)("bundle"),campaignAttributionService:(0,jo.makeMetatype)("campaignAttributionService"),cloudLibraryStatusProvider:(0,jo.makeMetatype)("cloudLibraryStatusProvider"),findFriendsContactsProvider:(0,jo.makeMetatype)("findFriendsContactsProvider"),host:(0,jo.makeMetatype)("host"),intentDispatcher:(0,jo.makeMetatype)("intentDispatcher"),localization:(0,jo.makeMetatype)("localization"),logger:(0,jo.makeMetatype)("logger"),metrics:(0,jo.makeMetatype)("metrics"),network:(0,jo.makeMetatype)("network"),random:(0,jo.makeMetatype)("random"),recentLibrarySearchesProvider:(0,jo.makeMetatype)("recentLibrarySearchesProvider"),restrictionsController:(0,jo.makeMetatype)("restrictionsController"),router:(0,jo.makeMetatype)("router"),storage:(0,jo.makeMetatype)("storage"),subscriptionStatusCoordinator:(0,jo.makeMetatype)("subscriptionStatusCoordinator"),userSocialProfileCoordinator:(0,jo.makeMetatype)("userSocialProfileCoordinator")}
class Jo{constructor(n){this.queuedMessages=[],this.shouldQueueMessages=!1,this.label=n}log(...n){const e=this.formattedMessage(n)
this.shouldQueueMessages?this.queueMessage(e,"log"):console.log(e)}warn(...n){const e=this.formattedMessage(n)
this.shouldQueueMessages?this.queueMessage(e,"warn"):console.warn(e)}error(...n){const e=this.formattedMessage(n)
this.shouldQueueMessages?this.queueMessage(e,"error"):console.error(e)}flushMessages(){this.queuedMessages.forEach(n=>{switch(n.type){case"log":console.log(n.message)
break
case"warn":console.warn(n.message)
break
case"error":console.error(n.message)}}),this.queuedMessages=[]}static log(n,...e){(0,Bo.f3)(_o.logger,n).log(...e)}static warn(n,...e){(0,Bo.f3)(_o.logger,n).warn(...e)}static error(n,...e){(0,Bo.f3)(_o.logger,n).error(...e)}queueMessage(n,e){this.queuedMessages.push({type:e,message:n})}get prefix(){return this.label?`${this.label}: `:""}formattedMessage(n){return`${this.prefix}${n.join(" ")}`}}const qo={"ampMusicAPIDomains/default":"string",countryCode:"string","commerceApp/baseUrl":"string","commerceApp/urlPath":"dictionary","commerce-ui-urls/dynamic-url-patterns":"array","commerce-ui-urls/v2-url-patterns":"array","language-tag":"string",marketingItemDynamicUIUrl:"string",metrics:"dictionary",musicFriends:"dictionary",musicTabs:"dictionary","url-resolution":"array",getMusicSDKAuthorizationsSrv:"string",revokeMusicSDKAuthorizationSrv:"string"}
!function(n){n.Library="my_music",n.ListenNow="for_you",n.Browse="new",n.Radio="radio",n.Search="search"}(Qi||(Qi={}))
class Ho{constructor(n){this.bagImplementation=n,n.registerBagKeys(Ho.allBagKeyDescriptors)}optionalString(n){return this.bagImplementation.string(n)}optionalDictionary(n){return this.bagImplementation.dictionary(n)}optionalArray(n){return this.bagImplementation.array(n)}static ampMusicAPIDomainsDefault(n){return Ho.string("ampMusicAPIDomains/default","amp-api.music.apple.com",n)}static countryCode(n){return Ho.string("countryCode","us",n)}static commerceAppBaseURL(n){return Ho.optionalString("commerceApp/baseUrl",n)}static commerceAppURLPath(n){return Ho.optionalDictionary("commerceApp/urlPath",n)}static commerceUIDynamicURLPatterns(n){return Ho.optionalArray("commerce-ui-urls/dynamic-url-patterns",n)}static commerceUIV2URLPatterns(n){return Ho.optionalArray("commerce-ui-urls/v2-url-patterns",n)}static languageTag(n){return Ho.string("language-tag","en-US",n)}static marketingItemDynamicUIURL(n){return Ho.optionalString("marketingItemDynamicUIUrl",n)}static musicURLResolutionRules(n){return Ho.optionalArray("url-resolution",n)}static musicFriendsExists(n){return!!Ho.optionalDictionary("musicFriends",n)}static musicTabs(n){return Ho.optionalDictionary("musicTabs",n)}static getMusicSDKAuthorizationsSrv(n){return Ho.optionalString("getMusicSDKAuthorizationsSrv",n)}static revokeMusicSDKAuthorizationSrv(n){return Ho.optionalString("revokeMusicSDKAuthorizationSrv",n)}static get allBagKeyDescriptors(){return Object.entries(qo).map(([n,e])=>({key:n,type:e}))}static optionalString(n,e){return(0,Bo.f3)(_o.bag,e).optionalString(n)}static string(n,e,t){const i=Ho.optionalString(n,t)
return(0,Ko.isSome)(i)?i:(Jo.warn(t,`Bag missing key "${n}" falling back to value "${e}"`),e)}static optionalDictionary(n,e){return(0,Bo.f3)(_o.bag,e).optionalDictionary(n)}static optionalArray(n,e){return(0,Bo.f3)(_o.bag,e).optionalArray(n)}}class zo{constructor(n){this.partialObjectGraph=n}async loadStrings(){var n,e
const t=this.languageCode
if((null===(n=this.localizedStrings)||void 0===n?void 0:n.languageCode)===t)return Promise.resolve(this.localizedStrings)
if((null===(e=this.pendingLocalizedStrings)||void 0===e?void 0:e.languageCode)===t)return await this.pendingLocalizedStrings.loadingPromise
const i=this.loadStringForLanguageCode(t)
this.pendingLocalizedStrings={languageCode:t,loadingPromise:i}
const o=await i
return o.languageCode!==this.languageCode?(Jo.log(this.partialObjectGraph,"Language changed while localization was loading, starting new load."),await this.loadStrings()):(Jo.log(this.partialObjectGraph,`Localization resource "${o.languageCode}" loaded with ${Object.keys(o.strings).length} strings.`),this.localizedStrings=o,this.pendingLocalizedStrings=void 0,Promise.resolve(o))}string(n,e){if(!this.localizedStrings)throw new Error(`Localization.string(key:) called before localization was loaded, key "${n}"`)
const t=this.localizedStrings.strings[n]
return e?zo.replaceTokens(t,e):t}get languageCode(){return Ho.languageTag(this.partialObjectGraph).toLowerCase()}static string(n,e,t){return(0,Bo.f3)(_o.localization,e).string(n,t)}static replaceTokens(n,e){let t=n
return Object.entries(e).forEach(([n,e])=>{t=t.split(`@@${n}@@`).join(e)}),t}async loadStringForLanguageCode(n){const e=(0,Bo.f3)(_o.bundle,this.partialObjectGraph)
let t=i(e,n)
if(t||(Jo.error(this.partialObjectGraph,`Bundle missing "${n}" localization, falling back to "${zo.fallbackLanguageCode}".`),t=i(e,zo.fallbackLanguageCode)),!t)throw new Error(`Failed to load localization, missing localization resources "${n}", "${zo.fallbackLanguageCode}".`)
return Jo.log(this.partialObjectGraph,`Loading localization resource for language "${n}"...`),{languageCode:n,strings:await e.loadResource(t)}}}zo.fallbackLanguageCode="en-us",function(n){n.Album="album",n.AppleCurator="appleCurator",n.Artist="artist",n.ArtistUploadedVideo="artistUploadedVideo",n.ArtistUploadedSong="artistUploadedSong",n.Curator="curator",n.EditorialItem="editorialItem",n.Movie="movie",n.MusicVideo="musicVideo",n.Playlist="playlist",n.RadioStation="radioStation",n.RecordLabel="recordLabel",n.SocialProfile="socialProfile",n.Song="song",n.TVEpisode="tvEpisode",n.TVSeason="tvSeason",n.TVShow="tvShow"}(no||(no={})),eo=n(647),to=n(447),function(n){n.OmitCropCode="c",n.OmitFileExtension="f"}(io||(io={}))
class Wo{constructor(n){this.shouldIncludeLanguage=!0,this.shouldIncludePlatform=!0,this.shouldIncludeFormatResourcesMap=!0,this.shouldIncludeTimezoneOffset=!1,this.parameters={},this._objectGraph=n}get encodedString(){const n=this.object()
return Object.entries(n).map(([n,e])=>`${encodeURIComponent(n)}=${encodeURIComponent(e)}`).join("&")}addParameters(n){Object.assign(this.parameters,n)}get extend(){return this._extend||(this._extend=new Set),this._extend}get with(){return this._with||(this._with=new Set),this._with}get types(){return this._types||(this._types=new Set),this._types}get sparse(){return this._sparse||(this._sparse=new Set),this._sparse}get displayFilterKind(){return this._displayFilterKind||(this._displayFilterKind=new Set),this._displayFilterKind}get artworkURL(){return this._artworkURL||(this._artworkURL=new Set),this._artworkURL}get views(){return this._views||(this._views=new Set),this._views}object(){const n={...this.parameters}
if(this._extend&&this._extend.size>0&&(n.extend=Wo.commaSeparatedStringFromSet(this._extend)),this._with&&this._with.size>0&&(n.with=Wo.commaSeparatedStringFromSet(this._with)),this._types&&this._types.size>0&&(n.types=Wo.commaSeparatedStringFromSet(this._types)),this._sparse&&this._sparse.size>0&&(n.sparse=Wo.commaSeparatedStringFromSet(this._sparse)),this._views&&this._views.size>0&&(n.views=Wo.commaSeparatedStringFromSet(this._views)),this._displayFilterKind&&this._displayFilterKind.size>0&&(n["displayFilter[kind]"]=Wo.commaSeparatedStringFromSet(this._displayFilterKind)),this._artworkURL&&this._artworkURL.size>0&&(n["art[url]"]=Wo.commaSeparatedStringFromSet(this._artworkURL)),this.shouldIncludeLanguage&&(n.l=Ho.languageTag(this._objectGraph)),this.shouldIncludePlatform){const e=(0,Bo.f3)(_o.host,this._objectGraph)
n.platform=function(n){switch(n.platform){case"iOS":return"iPad"===n.deviceModel?"ipad":"iphone"
case"macOS":case"Windows":return"desktop"
case"tvOS":return"appletv"
case"watchOS":return"watch"
case"web":return"web"
default:return"iphone"}}(e)}return this.shouldIncludeFormatResourcesMap&&(n["format[resources]"]="map"),this.shouldIncludeTimezoneOffset&&(n.timezone=function(n=new Date){const e=n.getTimezoneOffset(),t=Math.abs(e),i=t%60
return`${e>0?"-":"+"}${Math.floor(t/60).toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`}()),n}static commaSeparatedStringFromSet(n){return Array.from(n).join(",")}}class Go{constructor(n,e){this.path=n,this._objectGraph=e,this.domain=Ho.ampMusicAPIDomainsDefault(e)}get queryString(){return this._queryString||(this._queryString=new Wo(this._objectGraph)),this._queryString}get string(){var n
return function(n,e){let t=n
if(e){const i=-1!==n.indexOf("?")
t=`${n}${i?"&":"?"}${e}`}return t}(function(n,e){const t="/"===n.slice(-1),i="/"===e.slice(0,1)
return t&&i?`${n}${e.slice(1)}`:t||i?`${n}${e}`:`${n}/${e}`}(`https://${this.domain}`,this.path),null===(n=this.queryString)||void 0===n?void 0:n.encodedString)}}const Vo="xp_its_music_main",Zo=(0,to.notInstrumented)(0),Xo={defaultTopic:Vo,defaultIncludeRequests:{click:["pageFields","languages"],page:["pageFields","languages"],search:["pageFields","languages"],impressions:["pageFields","languages"],media:["pageFields","languages"],pageRender:["pageFields","languages"]},defaultExcludeRequests:{click:[],page:[],search:[],impressions:[],media:[],pageRender:[]},shouldFlush:null}
class Yo{constructor(){this.configuration=Xo}}!function(n){n.Accounts="accounts",n.Activities="activities",n.Albums="albums",n.AppleCurators="apple-curators",n.Artists="artists",n.Composers="composers",n.Curators="curators",n.EditorialItems="editorial-items",n.EditorialElements="editorial-elements",n.Genres="genres",n.Groupings="groupings",n.LibraryAlbums="library-albums",n.LibraryPlaylists="library-playlists",n.LibrarySongs="library-songs",n.MarketingItems="marketing-items",n.MultiRooms="multirooms",n.MusicMovies="music-movies",n.MusicVideos="music-videos",n.PersonalRecommendation="personal-recommendation",n.PersonalSocialProfiles="personal-social-profiles",n.Playlists="playlists",n.RecordLabels="record-labels",n.Rooms="rooms",n.SocialProfiles="social-profiles",n.SocialUpsells="social-upsells",n.Songs="songs",n.Stations="stations",n.StationEvents="station-events",n.TastePreferences="taste-preferences",n.TVEpisodes="tv-episodes",n.TVSeasons="tv-seasons",n.TVShows="tv-shows",n.UploadedAudios="uploaded-audios",n.UploadedVideos="uploaded-videos"}(oo||(oo={})),function(n){n.Inline="INLINE"}(ro||(ro={})),function(n){n.CatalogItemDetailPage="catalogItemDetailPage",n.CatalogPage="catalogPage",n.LibraryItemDetailPage="libraryItemDetailPage",n.NavigationControllerRootPage="navigationControllerRootPage",n.OnboardingPage="onboardingPage",n.SearchResults="searchResults"}(lo||(lo={}))
class Qo{constructor(n){this.$intentKind=null,this.objectGraph=n}actionFor(n,e,t){if(o(n,"contentDescriptor")&&"object"==typeof(i=n.contentDescriptor)&&null!==i&&o(i,"kind")&&"string"==typeof i.kind&&Object.values(no).includes(i.kind)){const e=o(n,"prominentItemIdentifier")?n.prominentItemIdentifier:null,t=E(n.contentDescriptor,"unknown",e,this.objectGraph)
if((0,Ko.isSome)(t))return t}var i
return P({kind:lo.CatalogPage,intent:n},t.metrics)}}!function(n){n.Explicit="explicit"}(so||(so={})),ao=n(974)
class nr{static financeUrl(n,e){if(n){const n=Ho.commerceAppBaseURL(e)
return(0,Ko.isSome)(n)?new ao.URL(n):null}{const n=Ho.marketingItemDynamicUIURL(e)
return(0,Ko.isSome)(n)?new ao.URL(`${n}&serviceType=music`):null}}static isFinancePath(n,e){const t=Ho.commerceAppURLPath(e)
if((0,Ko.isNothing)(t))return!1
const i=[]
return Object.entries(t).forEach(([n,e])=>{const t=Object.keys(e).map(n=>n.toLowerCase())
i.push(...t)}),i.indexOf(n.toLowerCase())>-1}static commerceAppPathForMusicDeepLinkKey(n,e){var t,i
return null===(i=null===(t=Ho.commerceAppURLPath(e))||void 0===t?void 0:t.musicDeeplinks)||void 0===i?void 0:i[n]}static commerceAppPathForMusicInternalKey(n,e){var t,i
return null===(i=null===(t=Ho.commerceAppURLPath(e))||void 0===t?void 0:t.musicInternal)||void 0===i?void 0:i[n]}static isCommerceAppHost(n,e){const t=Ho.commerceAppBaseURL(e)
return(0,Ko.isSome)(t)&&n.toString().indexOf(t)>-1}static actionToOpenSharedListeningUpsell(n){const e={platform:"mac",placement:nr.DynamicAMSUIUrlPlacements.MusicSharedListenUpsell}
let t=nr.financeUrl(!1,n)
return(0,Ko.isSome)(t)?(t=t.append("query",e),J(t.toString(),"finance-app",Zo)):null}static actionToOpenPlaybackUpsell(n,e){const t={platform:"mac",placement:nr.DynamicAMSUIUrlPlacements.PlaybackUpsell},i=null==n?void 0:n.identifiers.storeAdamID
i&&(t.adamId=i)
const o=null==n?void 0:n.kind
o&&(t.contentType=o)
let r=nr.financeUrl(!1,e)
return(0,Ko.isSome)(r)?(r=r.append("query",t),J(r.toString(),"finance-app",Zo)):null}static actionForUpsell(n,e,t,i){let o=nr.financeUrl(t,i)
if((0,Ko.isNothing)(o))return null
const r={...n.query,...e}
return t?o=new ao.URL(o.toString()+n.toString()):(0,Ko.isNothing)(r.placement)&&(r.placement=nr.DynamicAMSUIUrlPlacements.LaunchUpsell),o=o.append("query",r),J(o.toString(),"finance-app",Zo)}}nr.DynamicAMSUIUrlPlacements={LaunchUpsell:"musicAppLaunch",ListenNow:"musicListenNowUpsell",PlaybackUpsell:"musicPlaybackUpsell",MusicPreBuy:"musicPreBuyFlow",MusicSharedListenUpsell:"musicSharedListenUpsell"},nr.DynamicAMSUIOptionKeys={OfferHint:"offerHints"},nr.DynamicAMSUIOfferHints={HomePod:"HOMEPOD",WinBack:"WINBACK",Retail:"RETAIL",Other:"OTHER"}
const er={majorNumber:21,majorLetter:"D",minorNumber:43,isSeedBuild:!1}
!function(n){n.ListenNow="listenNow",n.Browse="browse",n.Radio="radio",n.Search="search",n.Library="library",n.PurchaseStore="purchaseStore",n.RecentlyAdded="recentlyAdded",n.Artists="artists",n.Albums="albums",n.Songs="songs",n.Genres="genres",n.Composers="composers",n.MusicVideos="musicVideos",n.TVAndMovies="tvAndMovies",n.AllPlaylists="allPlaylists",n.Playlist="playlist"}(uo||(uo={})),function(n){n.User="user",n.Device="device"}(co||(co={})),function(n){let e,t
!function(n){n.RecentlySearchedItems="RecentlySearchedItems",n.DetailSocialOnboardingUpsellDismissed="DetailSocialOnboardingUpsellDismissed",n.LastStudentReverificationPrompt="LastStudentReverificationPrompt"}(e=n.User||(n.User={})),t=n.Device||(n.Device={})}(vo||(vo={}))
class tr{static lastStudentReverificationPromptDate(n){const e=(0,Bo.f3)(_o.storage,n).getItem(vo.User.LastStudentReverificationPrompt)
return"string"!=typeof e?null:function(n){const e=new Date(n)
return isNaN(e.getTime())?null:e}(e)}static setLastStudentReverificationPromptDateAction(n,e){return(0,Bo.f3)(_o.storage,e).setItemAction(vo.User.LastStudentReverificationPrompt,function(n){return n.toJSON()}(n))}}class ir{static urlForMusicDeepLinkKey(n,e){const t=nr.financeUrl(!0,e)
if(!t)return null
const i=nr.commerceAppPathForMusicDeepLinkKey(n,e)
return i?t.append("pathname",i):null}}const or=604800,rr=[{secondsUntilExpiration:{start:2419200,end:1814400},promptCadence:"once"},{secondsUntilExpiration:{start:1814400,end:1209600},promptCadence:"once"},{secondsUntilExpiration:{start:1209600,end:or},promptCadence:"once"},{secondsUntilExpiration:{start:or,end:0},promptCadence:"daily"}],lr={$intentKind:"AppDidBecomeActiveIntent",async perform(n,e){Jo.log(e,"App did become active.")
const t=class{static promptPresentationAction(n){const e=B(n)
if(!e)return Jo.error(n,"Unable to present app prompt, subscription status is absent."),null
const t=[un]
let i
for(;!i&&t.length>0;){const o=t.shift()
o&&(i=o(e,n))}return i}}.promptPresentationAction(e)
if(!t)return null
const i=(o=t)?on(o)?o:rn([o],Zo):null
var o
return i&&Jo.log(e,`App launch prompt action: ${ln(i)}`),i}},sr={$intentKind:"AppDidFinishLaunchingIntent",perform:async(n,e)=>(Jo.log(e,"App did finish launching."),null)},ar={$intentKind:"AppWillResignActiveIntent",perform:async(n,e)=>(Jo.log(e,"App will resign active."),null)}
class ur{constructor(n,e){this.resourceMap=n,this.objectGraph=e}resource(n,e=!0){var t
return n?(null===(t=this.resourceMap[n.type])||void 0===t?void 0:t[n.id])||(e&&Jo.warn(this.objectGraph,`Missing resource with "${n.id}" and type "${n.type}".`),null):null}resourceWithID(n,e,t=!0){return this.resource({id:n,type:e},t)}resources(n){const e=[]
return n.forEach(n=>{const t=this.resource(n)
t&&e.push(t)}),e}resourcesAndIdentifiers(n){const e=[]
return n.forEach(n=>{const t=this.resource(n)
t&&e.push([t,n])}),e}optionalResourcesAndIdentifiers(n){const e=[]
return n.forEach(n=>{const t=this.resource(n,!1)
e.push([t,n])}),e}resourcesForType(n){const e=this.resourceMap[n]
if(!e)return[]
const t=Object.keys(e).map(e=>({id:e,type:n}))
return t?this.resources(t):[]}addResources(n){n.forEach(n=>{var e
const t=null!==(e=this.resourceMap[n.type])&&void 0!==e?e:{}
t[n.id]={...t[n.id],...n},this.resourceMap[n.type]=t})}addResourceMap(n,e){if(!n)return
const t=new ur(n,e)
Object.keys(n).forEach(n=>{const e=t.resourcesForType(n)
this.addResources(e)})}}const cr={$intentKind:"TabBannerIntent",async perform(n,e){var t,i,o,r,l,s
const a=function(n){switch(n){case"listenNow":return null
case"browse":return"musicBrowseBanner"
case"searchLanding":case"searchResults":case"radio":return"musicRadioBanner"}}(n.identifier)
if(!a)return Promise.resolve(null)
if(T(e))return Promise.resolve(mn(n,e))
const u=await fn(a,1,e),c=null==u?void 0:u.body
if(!c)return Jo.error(e,`Response body not found for intent '${JSON.stringify(n)}'`),mn(n,e)
const d=c.resources
if(!d)return Jo.error(e,`No resources found for response '${JSON.stringify(u)}'`),mn(n,e)
const v=new ur(d,e).resource(null===(i=null===(t=null==c?void 0:c.results)||void 0===t?void 0:t.data)||void 0===i?void 0:i[0])
if(!v)return Jo.error(e,`No marketing item resource found in response: '${JSON.stringify(u)}'`),mn(n,e)
const p=null===(o=v.attributes)||void 0===o?void 0:o.title
if(!p)return Jo.error(e,`Title required for marketing items response: '${JSON.stringify(v)}'`),mn(n,e)
const f=null===(r=v.attributes)||void 0===r?void 0:r.subtitle
if(!f)return Jo.error(e,`Subtitle required for marketing items response: '${JSON.stringify(v)}'`),mn(n,e)
const m=null===(s=null===(l=v.attributes)||void 0===l?void 0:l.offers)||void 0===s?void 0:s[0],h=q(m,Zo,e),g={title:p,subtitle:f,artwork:null,buttonTitle:null==m?void 0:m.callToActionLabel,buttonAction:h,bannerAction:h,invalidationRules:{eventTriggers:[{events:[{name:"subscriptionStatusChange"}],intent:n}]},showsAppleMusicLogo:!0}
return Promise.resolve(g)}}
!function(n){n.HeroListShelf="316",n.Hero="317",n.HeroCustom="320",n.CopperSwoosh="326",n.CopperTrackSwoosh="327",n.RecentlyPlayedRadioMarker="332",n.RoomSwoosh="345",n.TabRoot="382",n.AppleMusicOneHero="383",n.BrickSwoosh="385",n.Brick="386",n.MasterSwoosh="387",n.LinkList="391",n.CustomBrick="394",n.Paragraph="404",n.SingularLink="405",n.LiveRadioShelf="488",n.LiveRadioShelfItem="489"}(po||(po={})),function(n){n.BoundedBox="bb",n.ConstrainedWidth="w",n.ConstrainedHeight="h",n.SourceSize="ss",n.SpecificRectangle="sr",n.SquareCenterCrop="cc",n.HeroGalleryCrop="vf",n.FixedArtworkCropCode="ea",n.AlbumFallbackArt="ac"}(fo||(fo={})),function(n){n.BoundedBox="bb",n.SpecificRectangle="sr",n.SquareCenterCrop="cc"}(mo||(mo={}))
class dr{constructor(n){this.itemIDs=new Set,this.sectionIDs=new Set,this.objectGraph=n,this.random=(0,Bo.f3)(_o.random,n)}uniqueItemID(n,e,t){let i=`${n} - ${e}`
return(t||this.itemIDs.has(i))&&(t||Jo.warn(this.objectGraph,`Duplicate itemID '${i}'.`),i=`${i} - ${this.random.nextUUID()}`),this.itemIDs.add(i),i}uniqueSectionID(n){let e=n
return this.sectionIDs.has(e)&&(Jo.warn(this.objectGraph,`Duplicate sectionID '${e}'.`),e=`${e} - ${this.random.nextUUID()}`),this.sectionIDs.add(e),e}}const vr=(0,jo.makeMetatype)("idProvider"),pr=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"],fr=[1e3,900,500,400,100,90,50,40,10,9,5,4,1]
!function(n){n.Regular="regular",n.Large="large"}(ho||(ho={})),function(n){n.Small="small",n.Regular="regular",n.Large="large"}(go||(go={})),function(n){n.Regular="regular",n.Bold="bold"}(wo||(wo={}))
const mr={majorNumber:22,majorLetter:"A",minorNumber:240,isSeedBuild:!1}
!function(n){n.Compact="compact",n.Expanded="expanded"}(bo||(bo={}))
const hr=[oo.TVEpisodes,oo.Songs,oo.MusicVideos,oo.Albums,oo.UploadedAudios]
!function(n){n.External="external"}(ko||(ko={})),function(n){n.Small="small",n.Regular="regular",n.Large="large"}(yo||(yo={})),function(n){n.Default="default",n.Selection="selection"}(So||(So={})),function(n){n.Leading="leading",n.Trailing="trailing",n.Centered="centered"}($o||($o={})),function(n){n.Regular="regular",n.Large="large"}(Do||(Do={})),function(n){n.Spotlight="Spotlight",n.SpotlightWithCopy="Spotlight+ShortCopy",n.Grid="Grid",n.GridWithCopy="Grid+ShortCopy"}(Ao||(Ao={}))
const gr=(0,jo.makeMetatype)("editorialElementSectionFilter"),wr=(0,jo.makeMetatype)("collectedMarkers"),br={$intentKind:"BrowsePageIntent",async perform(n,e){const t=await async function(n){return Be("music",n)}(e)
return async function(n,e){const t=await Fe(n,e),i=Ho.countryCode(e)
return{invalidationRules:Re({$kind:"BrowsePageIntent"},!1,Ce(e)?n.expirationDate:null),pageMetrics:m(e,n,"grouping","Genre"),sections:t,header:{showAccountButton:!1,title:zo.string("FUSE.Browse.Pageheader",e)},canonicalURL:`https://music.apple.com/${encodeURIComponent(i)}/browse`}}(t,e)}}
Po=n(542)
const kr={$intentKind:"ProcessDeepLinkIntent",async perform(n,e){var t
Jo.log(e,`Handling deep link intent with URL '${n.url}'`)
let i=new ao.URL(n.url)
if(function(n){var e
return"itunes.apple.com"===n.host&&"tuneMyTastes"===(null===(e=n.query)||void 0===e?void 0:e.cmd)}(i))return Jo.log(e,"Starting onboarding."),async function(n){let e=!0
try{e=await async function(n){var e,t,i,o,r
const l=new Go("/v1/me/account",n)
l.queryString.extend.add("hasTastePreferences")
const s=null===(r=null===(o=null===(i=null===(t=null===(e=(await dn({url:l.string,cache:"no-cache"},n)).body)||void 0===e?void 0:e.resources)||void 0===t?void 0:t.accounts)||void 0===i?void 0:i.me)||void 0===o?void 0:o.attributes)||void 0===r?void 0:r.hasTastePreferences
if((0,Po.isNothing)(s))throw new Error("hasTastePreferences is undefined.")
return s}(n)}catch(e){Jo.error(n,e)}const t=[tn({kind:uo.ListenNow},Zo,n)]
return e?Jo.log(n,"Taste preferences already set, no onboarding required."):(Jo.log(n,"Taste preferences not set, onboarding page required."),t.push(P({kind:lo.OnboardingPage},Zo))),rn(t,Zo)}(e)
const o=function(n,e){var t,i,o
const r=null===(t=n.pathname)||void 0===t?void 0:t.slice(1).toLowerCase()
if((0,Ko.isSome)(r)){const t=ir.urlForMusicDeepLinkKey(r,e)
if((0,Ko.isSome)(t)){const e=n.query
return(0,Ko.isSome)(e)&&t.append("query",e),t}}const l=n.toString()
return(null!==(i=Ho.commerceUIDynamicURLPatterns(e))&&void 0!==i?i:[]).some(n=>new RegExp(n).test(l))?(Jo.log(e,"Matched a Commerce UI dynamic URL pattern."),n):(null!==(o=Ho.commerceUIV2URLPatterns(e))&&void 0!==o?o:[]).some(n=>new RegExp(n).test(l))?(Jo.log(e,"Matched a Commerce UI v2 URL pattern."),n):null}(i,e)
if(C(e)&&function(n,e){const t=T(e)?"yes":"undecided",i=Ho.musicURLResolutionRules(e)
if(!i)return Jo.error(e,"Missing Music URL resolution rules from bag."),!1
const o=i.filter(n=>n["subscribed-mode"]===t)
return 0===o.length?(Jo.error(e,`'${t}' subscribed-mode not found in Music URL resolution rules.`),!1):!function(n,e){return e.some(e=>{var t,i,o
const r=null!==(i=null===(t=n.host)||void 0===t?void 0:t.toLowerCase())&&void 0!==i?i:"",l=e["host-patterns"]
if(!(null==l?void 0:l.some(n=>r.match(n))))return!1
const s=null!==(o=n.pathname)&&void 0!==o?o:"?",a=n.toString(),u=a.substring(a.indexOf(s)).toLowerCase(),c=e["path-patterns"]
return!!(null==c?void 0:c.some(n=>u.match(n)))})}(n,o)}(i,e)&&!o)return Jo.log(e,"Opening store page link."),rn([Te(i)],Zo)
if(i=await async function(n,e){const t=(0,Bo.f3)(_o.campaignAttributionService,e)
try{const e=await t.processRedirectURL(n.toString())
return new ao.URL(e)}catch(t){return Jo.error(e,"campaignAttributionService.processRedirectURL failed. Continuing processing deep link. Error details: ",t),n}}(i,e),"music"===(null===(t=i.query)||void 0===t?void 0:t.app)){const n=function(n,e){var t,i,o
const r=null!==(t=n.query)&&void 0!==t?t:{},l=null!==(o=null===(i=n.pathname)||void 0===i?void 0:i.slice(1).toLowerCase())&&void 0!==o?o:""
return/^([a-z]{2}\/)?deeplink$/i.test(l)&&(0,Ko.isSome)(r.p)?function(n,e,t){const i=n.match(/[\w]+([-/]?)[\w-]+$/)
if((0,Ko.isSome)(i)){const[n,o]=i,r=ir.urlForMusicDeepLinkKey(n,t)
if((0,Ko.isSome)(r)){const n={...e}
return n[nr.DynamicAMSUIOptionKeys.OfferHint]=nr.DynamicAMSUIOfferHints.WinBack,r.append("query",n),rn([J(r.toString(),"finance-app",Zo)],Zo)}if("sharing"===n)return rn([Ke()],Zo)
if("library"===n)return Jo.log(t,"Opening library link."),rn([tn({kind:uo.Library},Zo,t)],Zo)
const l=je(n,o)
if((0,Ko.isSome)(l))return rn([tn({kind:l},Zo,t),P({kind:lo.NavigationControllerRootPage},Zo)],Zo)}return null}(r.p,r,e):-1!==l.indexOf("mzcontentlink")&&(0,Ko.isSome)(r.path)?function(n,e,t){const i=n.match(/music\/[\w]+([-/]?)[\w-]+$/)
if((0,Ko.isSome)(i)){const[n,e]=i,o=je(n.split("/")[1],e)
if((0,Ko.isSome)(o))return rn([tn({kind:o},Zo,t),P({kind:lo.NavigationControllerRootPage},Zo)],Zo)}return null}(r.path,0,e):null}(i,e)
if((0,Ko.isSome)(n))return Jo.log(e,`Opening query param action: ${sn(n)}`),n}if((0,Ko.isSome)(o))return Jo.log(e,`Opening commerce app with URL '${o}'`),rn([J(o.toString(),"finance-app",Zo)],Zo)
const r=function(n,e){const t=I(n.toString(),null,"link",e,!0)
if(!(0,Ko.isSome)(t))return null
if(on(t))return t
const i=[]
return A(t)&&(Jo.warn(e,`segueForURL("${n.build()}") returned no action to set the active tab.`),i.push(tn({kind:uo.Browse},Zo,e))),i.push(t),rn(i,Zo)}(i,e)
return(0,Ko.isSome)(r)?(Jo.log(e,`Opening routed action: ${sn(r)}`),r):rn([{$kind:"emptyAction",actionMetrics:Zo}],Zo)}}
!function(n){n.TopSongs="top-songs",n.FeaturedAlbums="featured-albums",n.Playlists="playlists",n.FullAlbums="full-albums",n.Singles="singles",n.LiveAlbums="live-albums",n.CompilationAlbums="compilation-albums",n.FeaturedOnAlbums="featured-on-albums",n.MoreToHear="more-to-hear",n.AppearsOnAlbums="appears-on-albums",n.AppearsOn="appears-on",n.MoreToSee="more-to-see",n.TopMusicVideos="top-music-videos",n.SimilarArtists="similar-artists",n.FeaturedArtists="featured-artists",n.FeaturedRelease="featured-release",n.LatestRelease="latest-release",n.RadioShows="radio-shows",n.OtherVersions="other-versions",n.YouMightAlsoLike="you-might-also-like",n.RelatedVideos="related-videos",n.AudioExtras="audio-extras",n.VideoExtras="video-extras",n.MoreByCurator="more-by-curator",n.Contributors="contributors",n.FriendsWhoListened="friends-who-listened",n.TopReleases="top-releases",n.LatestReleases="latest-releases",n.OtherEpisodes="other-episodes",n.MusicArtists="music-artists",n.CrossMerchandise="cross-merchandise",n.MoreByArtist="more-by-artist",n.MoreInGenre="more-in-genre"}(Eo||(Eo={})),function(n){n[n.AlbumDetail=0]="AlbumDetail",n[n.PlaylistDetail=1]="PlaylistDetail"}(Oo||(Oo={}))
const yr=[/(?:http|music|itms)s?:\/\/(?:itunes|music)\.apple\.com\/.*?\/MZStore\.woa\/.*?\/viewAlbum(?=.*?[?&]id=(?<id>[\w\.-]+))(?:(?=.*?[?&]cc=(?<cc>\w{2})))?/,/(?:http|music|itms)s?:\/\/(?:itunes|music)\.apple\.com\/(?:(?<cc>\w{2})\/)?album\/(?:.*\/)?(?:id)?(?<id>[\w\.-]+)(?:(?=.*?[?&]i=(?<trackId>[\w\.-]+)))?/],Sr={$intentKind:"AlbumDetailPageIntent",routes:()=>yr.map(n=>({rules:[{regex:[n]}],handler:(e,t)=>{var i,o
const r=null!==(o=null===(i=e.toString().match(n))||void 0===i?void 0:i.groups)&&void 0!==o?o:{},l=r.trackId
return function(n,e){return{$kind:"AlbumDetailPageIntent",contentDescriptor:n,prominentItemIdentifier:e}}({kind:no.Album,identifiers:{storeAdamID:r.id}},l)}})),async perform(n,e){const t=It(n.contentDescriptor,e),i=n.prominentItemIdentifier
let o=await vn(t,e)
const r=function(n,e){var t,i,o,r,l
const s=null===(t=n.body)||void 0===t?void 0:t.data
if(!s||0===s.length)throw new Error("No resource identifiers in container detail page response")
const a=null===(i=n.body)||void 0===i?void 0:i.resources
if(!a)throw new Error("No resource map in container detail page response")
const u=new ur(a,e).resource(s[0])
if(u&&u.type===oo.Songs){const n=null===(l=null===(r=null===(o=u.relationships)||void 0===o?void 0:o.albums)||void 0===r?void 0:r.data)||void 0===l?void 0:l[0],t=null==n?void 0:n.href
if(t)return Ot(t,e)}return null}(o,e)
return r&&(o=await vn(r,e)),Et(o,e,n,i)},actionFor:(n,e,t)=>_e(n.contentDescriptor,n.prominentItemIdentifier,e,t)}
class $r extends Go{constructor(n,e){super(n,e),this.queryString.extend.add("artistBio").add("isGroup").add("origin").add("bornOrFormed").add("editorialArtwork").add("editorialVideo").add("extendedAssetUrls").add("hero").add("plainEditorialNotes"),this.queryString.artworkURL.add(io.OmitFileExtension).add(io.OmitCropCode),this.queryString.addParameters({include:"record-labels,artists,default-playable-content","include[songs]":"artists","extend[playlists]":"trackCount","include[music-videos]":"artists","meta[albums:tracks]":"popularity","relate[songs]":"albums"}),this.queryString.views.add(Eo.AppearsOnAlbums).add(Eo.CompilationAlbums).add(Eo.FeaturedAlbums).add(Eo.FeaturedOnAlbums).add(Eo.FeaturedRelease).add(Eo.FullAlbums).add(Eo.LatestRelease).add(Eo.LiveAlbums).add(Eo.MoreToHear).add(Eo.MoreToSee).add(Eo.Playlists).add(Eo.RadioShows).add(Eo.SimilarArtists).add(Eo.Singles).add(Eo.TopMusicVideos).add(Eo.TopSongs)}}const Dr=[/(?:http|music|itms)s?:\/\/(?:itunes|music)\.apple\.com\/.*?\/MZStore\.woa\/.*?\/viewArtist(?=.*?[?&]id=(?<id>[\w\.-]+))(?:(?=.*?[?&]cc=(?<cc>\w{2})))?/,/(?:http|music|itms)s?:\/\/(?:itunes|music)\.apple\.com\/(?:(?<cc>\w{2})\/)?artist\/(?:.*?\/)?(?:id)?(?<id>[\w\.-]+)(?:\?|$)/],Ar={$intentKind:"ArtistDetailPageIntent",routes:()=>Dr.map(n=>({rules:[{regex:[n]}],handler:(e,t)=>{var i,o
const r=null!==(o=null===(i=e.toString().match(n))||void 0===i?void 0:i.groups)&&void 0!==o?o:{}
return{$kind:"ArtistDetailPageIntent",contentDescriptor:{kind:no.Artist,identifiers:{storeAdamID:r.id}}}}})),async perform(n,e){const t=wt(n.contentDescriptor,e),i=new $r(t,e)
return function(n,e){var t,i,o
const r=null===(t=n.body)||void 0===t?void 0:t.data
if(!r||0===r.length)throw new Error("No resource identifiers in artist detail page response")
const s=null===(i=n.body)||void 0===i?void 0:i.resources
if(!s)throw new Error("No resource map in artist detail page response")
const a=new ur(s,e),u=a.resource(r[0])
if(!u)throw new Error("No container in artist detail page response.")
const d=[],v=function(n,e,t){var i,o,r,l,s,a
const u=n.attributes,c=S(n,t)
let d
const v=null===(l=null===(r=null===(o=null===(i=null==n?void 0:n.relationships)||void 0===i?void 0:i["default-playable-content"])||void 0===o?void 0:o.data)||void 0===r?void 0:r[0])||void 0===l?void 0:l.id,p=null===(s=e[oo.Stations])||void 0===s?void 0:s[v]
p&&(d=Y(S(p,t),t))
const f=function(n){var e,t,i,o,r,l
const s=n.attributes,a=null===(e=null==s?void 0:s.editorialArtwork)||void 0===e?void 0:e.centeredFullscreenBackground
if(a)return wn(a,fo.FixedArtworkCropCode)
const u=null===(r=null===(o=null===(i=null===(t=null==s?void 0:s.hero)||void 0===t?void 0:t[0])||void 0===i?void 0:i.content)||void 0===o?void 0:o[0])||void 0===r?void 0:r.artwork
return!0!==(null===(l=null==u?void 0:u.recommendedCropCodes)||void 0===l?void 0:l.includes(fo.HeroGalleryCrop))?null:wn(u,fo.HeroGalleryCrop)}(n),m={id:kn("artist-detail-header",n.id,t),artwork:Ze(n),title:null==u?void 0:u.name,contentDescriptor:c,playAction:d,uberArtwork:f},h=null===(a=null==u?void 0:u.editorialVideo)||void 0===a?void 0:a.motionArtistWide16x9
h&&(m.videoArtwork=bn({motionArtistWide16x9:h},mo.SquareCenterCrop))
const g={id:yn(`artist-detail-header-section - ${n.id}`,t),itemKind:"artistDetailHeaderLockup",presentation:{kind:"single"},items:[m],header:null,invalidationRules:null}
return g.backgroundTreatment=(null!=f?f:h)?"none":null,g}(u,s,e)
if(!v)throw new Error("Unable to create artist detail header.")
d.push(v)
const p=function(n,e,t){var i,o,r,s,a
let u
const d=null!==(i=Xe(Eo.FeaturedRelease,n,e))&&void 0!==i?i:Xe(Eo.LatestRelease,n,e)
d&&(u=function(n,e,t){var i,o,r,l,s,a
if(n.resource.type===oo.Stations)return function(n,e,t){var i,o,r,l,s,a,u
const c=S(n.resource,t),d=Y(c,t)
return{item:{id:kn("latest-release",n.resource.id,t),headline:Ye(null===(o=null===(i=n.resource.attributes)||void 0===i?void 0:i.airTime)||void 0===o?void 0:o.start,t),title:null===(r=n.resource.attributes)||void 0===r?void 0:r.name,trackCountTitle:null!==(s=w(null===(l=n.resource)||void 0===l?void 0:l.attributes))&&void 0!==s?s:" ",subtitle:w(null===(a=n.resource)||void 0===a?void 0:a.attributes),contentDescriptor:c,artwork:wn(null===(u=n.resource.attributes)||void 0===u?void 0:u.artwork,fo.SpecificRectangle),playAction:d,segue:Qn(c,e,"GridItem",t),showExplicitBadge:R(n.resource.attributes)},kind:"artistLatestReleaseLockup",title:n.title}}(n,e,t)
const u=S(n.resource,t),d=Y(u,t),v=kn("latest-release",n.resource.id,t),p=e.type===oo.Albums&&_n(n.resource,t),f=p?zo.string("FUSE.PreRelease",t):n.title,m=function(n,e){return n?c(new Date(n.toString()),e):null}(null===(i=n.resource.attributes)||void 0===i?void 0:i.releaseDate,t)
return{item:{id:v,headline:p&&m?zo.string("Fuse.Artist.PreRelease",t,{releaseDate:m}):m,title:null===(o=n.resource.attributes)||void 0===o?void 0:o.name,trackCountTitle:null!==(l=Qe(null===(r=n.resource.attributes)||void 0===r?void 0:r.trackCount,t))&&void 0!==l?l:" ",subtitle:Qe(null===(s=n.resource.attributes)||void 0===s?void 0:s.trackCount,t),contentDescriptor:u,artwork:wn(null===(a=n.resource.attributes)||void 0===a?void 0:a.artwork),playAction:d,segue:Qn(u,e,"GridItem",t),showExplicitBadge:R(n.resource.attributes)},kind:"artistLatestReleaseLockup",title:f}}(d,n,t))
const v=[],p=null===(o=null==n?void 0:n.views)||void 0===o?void 0:o[Eo.TopSongs]
if((0,Ko.isNothing)(p))return null
const f=null!==(r=p.data)&&void 0!==r?r:[]
return e.resources(f).forEach(i=>{var o,r
const s=function(n,e,t){const i=(0,Bo.f3)(_o.localization,t),o=l(e,t)
return o?i.string("AMWEB.ContentA.Middot.ContentB",{contentA:n,contentB:o}):n}(null===(o=i.attributes)||void 0===o?void 0:o.albumName,null===(r=i.attributes)||void 0===r?void 0:r.releaseDate,t),a=S(i,t),u={...jn(i.id,i,n.type,n,e,t,!1),subtitleLinks:te(s),layoutStyle:"shelfTrackList",tertiaryLinks:null,segue:Qn(a,i,"ShelfItem",t)}
v.push(u)}),{id:yn(`latest-release-and-top-songs - ${n.id}`,t),itemKind:"trackLockup",presentation:{kind:"collection",layout:{kind:"shelf",numberOfRows:3}},items:v,header:{kind:"default",item:{title:null===(s=null==p?void 0:p.attributes)||void 0===s?void 0:s.title,accessoryButtons:He(p,Eo.TopSongs,t,p.id,null===(a=null==p?void 0:p.attributes)||void 0===a?void 0:a.title,n)}},invalidationRules:null,pinnedLeadingItem:u}}(u,a,e)
p&&(d.push(function(n,e){const t=yn(`spacerSection - ${n}`,e)
return{id:t,itemKind:"spacer",presentation:{kind:"single"},items:[{id:kn(t,`spacer item - ${n}`,e)}]}}(u.id,e)),d.push(p)),[Eo.FeaturedAlbums,Eo.FullAlbums,Eo.TopMusicVideos,Eo.Playlists,Eo.Singles,Eo.LiveAlbums,Eo.CompilationAlbums,Eo.AppearsOnAlbums,Eo.FeaturedOnAlbums,Eo.RadioShows,Eo.MoreToHear,Eo.MoreToSee].forEach(n=>{const t=ft(u,n,e,a)
t&&d.push(t)})
const f=null==d?void 0:d[d.length-1],h=function(n,e,t){var i,o,r,l,s,a,u
const c=null!==(o=null===(i=null==n?void 0:n.attributes)||void 0===i?void 0:i.artistBio)&&void 0!==o?o:""
if((null==c?void 0:c.length)<1)return null
const d=(0,Bo.f3)(_o.localization,t),v=[],p=null===(r=null==n?void 0:n.attributes)||void 0===r?void 0:r.origin
p&&v.push({title:d.string("FUSE.Artist.Bio.Hometown"),content:p})
const f=null===(l=null==n?void 0:n.attributes)||void 0===l?void 0:l.bornOrFormed
f&&v.push({title:(null===(s=null==n?void 0:n.attributes)||void 0===s?void 0:s.isGroup)?d.string("FUSE.ArtistBio.Debuted"):d.string("FUSE.ArtistBio.Born"),content:f})
const m={id:kn("artist-bio",n.id,t),modalPresentationDescriptor:{headerTitle:null===(a=null==n?void 0:n.attributes)||void 0===a?void 0:a.name,headerSubtitle:Ve(n,t),paragraphText:c},subsections:v},h=null===(u=null==n?void 0:n.attributes)||void 0===u?void 0:u.name,g=h?d.string("FUSE.About.Creator",{name:h}):null
return Ge(yn(`artist-bio-section - ${n.id}`,t),m,"alternate",g)}(u,0,e)
h&&(f&&(f.displaySeparator=!1),d.push(h))
const g=ze(u,Eo.SimilarArtists,a,e)
return g&&(g.backgroundTreatment="alternate",f&&(f.displaySeparator=!1),d.push(g)),{pageMetrics:m(e,n,"artist_detail","Artist",a),sections:d,canonicalURL:null===(o=null==u?void 0:u.attributes)||void 0===o?void 0:o.url}}(await vn(i,e),e)},actionFor:(n,e,t)=>_e(n.contentDescriptor,null,e,t)},Pr=[/(?:http|music|itms)s?:\/\/(?:itunes|music)\.apple\.com\/(?:(?<cc>\w{2})\/)?curator\/(?:.*?\/)?(?:id)?(?<id>[\w\.-]+)(?:\?|$)/],Er={$intentKind:"AnyCuratorPageDetailIntent",routes:()=>Pr.map(n=>({rules:[{regex:[n]}],handler:(e,t)=>{var i,o
return Nt((null!==(o=null===(i=e.toString().match(n))||void 0===i?void 0:i.groups)&&void 0!==o?o:{}).id)}})),async perform(n,e){const t=Ho.countryCode(e),i=new Go(`/v1/catalog/${t}`,e)
return i.queryString.extend.add("editorialArtwork"),i.queryString.addParameters({"ids[curators]":n.id,"ids[apple-curators]":n.id,"art[url]":"f",include:"grouping,playlists","fields[albums]":"artistName,artistUrl,artwork,contentRating,editorialArtwork,name,playParams,releaseDate,url"}),Ct(await dn({url:i.string},e),e)},actionFor(n,e,t){var i
const o=null!==(i=t.metrics)&&void 0!==i?i:p(e,n.id,"unknown","navigate"),r=P({kind:lo.CatalogPage,intent:n},o)
return t.isDeepLinkAction?rn([tn({kind:uo.Browse},Zo,e),r],Zo):r}},Or={$intentKind:"AnyCuratorDetailSeeAllPageIntent",async perform(n,e){const t=new Go(n.url,e)
return Bt(await vn(t,e),n,e)||Promise.reject("Unable to build curator detail see all page")}},Ir={$intentKind:"AnyCuratorDetailSeeAllPaginateIntent",async perform(n,e){var t,i
const o=new Go(n.url,e),r=await vn(o,e),l=Bt(r,n,e),s=null===(t=null==l?void 0:l.sections)||void 0===t?void 0:t[0]
if(s){const n={pageChangeInstruction:{instruction:{instruction:"addItemsToSection",newSectionToAppendItemsFrom:s}}},e=null===(i=r.body)||void 0===i?void 0:i.next
if(e){const t={$kind:"AnyCuratorDetailSeeAllPaginateIntent",url:e,id:s.id}
n.nextIntent=t}return Promise.resolve(n)}return Promise.reject()}},Nr={$intentKind:"AppleCuratorDetailPageIntent",async perform(n,e){const t=gt(n.contentDescriptor,e)
return t.queryString.extend.add("editorialArtwork"),t.queryString.addParameters({"art[url]":"f",include:"grouping,playlists","fields[albums]":"artistName,artistUrl,artwork,contentRating,editorialArtwork,plainEditorialNotes,name,playParams,releaseDate,url,trackCount","extend[stations]":"plainEditorialNotes","extend[curators]":"plainEditorialNotes","extend[apple-curators]":"plainEditorialNotes","include[songs]":"artists"}),t.queryString.artworkURL.add(io.OmitCropCode).add(io.OmitFileExtension),Ct(await vn(t,e),e)}},Fr={$intentKind:"MovieDetailPageIntent",routes:()=>[{rules:[{protocol:"https",path:"{country}/music-movie/{name}/{id}"}],handler:(n,e)=>({$kind:"MovieDetailPageIntent",contentDescriptor:{kind:no.Movie,identifiers:{storeAdamID:e.id}}})}],async perform(n,e){const t=gt(n.contentDescriptor,e)
t.queryString.extend.add("editorialArtwork"),t.queryString.addParameters({"art[url]":"f",include:"grouping,playlists","fields[albums]":"artistName,artistUrl,artwork,contentRating,editorialArtwork,name,playParams,releaseDate,url,trackCount",extend:"credits"}),t.queryString.views.add(Eo.Playlists).add(Eo.MusicArtists).add(Eo.CrossMerchandise)
const i=await vn(t,e),o=await async function(n,e){var t,i,o
const r=n.body
if(!r)return Jo.warn(e,`Unable to construct page because no body was found in response: '${JSON.stringify(n)}'`),null
const a=r.resources
if(!a)return Jo.error(e,`Unable to construct page because no resources were found in response: '${JSON.stringify(r)}'`),null
const u=new ur(a,e),c=null===(t=r.data)||void 0===t?void 0:t[0]
if(!c)return Jo.error(e,`Unable to construct page because no container identifier was found in response: '${JSON.stringify(r)}'`),null
const d=u.resource(c)
if(!d)return Jo.error(e,`Unable to construct page because no container was found in resources: '${JSON.stringify(a)}'`),null
const v=[],p=function(n,e,t){var i,o,r,a,u,c
const d=n.attributes
if(!d)return Jo.log(t,`No attributes for container: ${JSON.stringify(n)}`),null
const v=zt(n,e,t),p=(0,Bo.f3)(_o.localization,t),f=null!==(a=null!==(o=null===(i=d.editorialArtwork)||void 0===i?void 0:i.storeFlowcase)&&void 0!==o?o:null===(r=d.editorialArtwork)||void 0===r?void 0:r.subscriptionHero)&&void 0!==a?a:null===(u=d.editorialArtwork)||void 0===u?void 0:u.fullscreenBackground,m=null===(c=null==v?void 0:v.items)||void 0===c?void 0:c[0]
return m&&(m.headline=null,m.artwork=wn(f),m.tertiaryTitle=function(n,e,t,i){var o,r,a
let u
const c=e?l(e,i):null,d=s(null===(r=null===(o=n.offers)||void 0===o?void 0:o[0])||void 0===r?void 0:r.durationInMilliseconds,i)
!c&&d&&(u=d),!d&&c&&(u=c),c&&d&&(u=t.string("AMWEB.ContentA.Middot.ContentB",{contentA:c,contentB:d}).toLocaleUpperCase())
const v=null===(a=n.genreNames)||void 0===a?void 0:a.join(", ").toLocaleUpperCase()
return v?u?t.string("AMWEB.ContentA.Middot.ContentB",{contentA:v,contentB:u}):v:u}(d,d.releaseDate,p,t)),v}(d,u,e)
p&&v.push(p)
const f=function(n,e){var t
const i=(0,Bo.f3)(_o.localization,e),o=null===(t=n.attributes)||void 0===t?void 0:t.movieClips
if(!o||!o.length)return null
const r=S(n,e),l=Y(r,e),s=o.map(t=>{var i
return{id:kn("movie-clips",n.id,e),title:t.title,playAction:l,artwork:wn(t.previewArtwork),subtitle:null,contentDescriptor:r,name:null===(i=n.attributes)||void 0===i?void 0:i.name}})
if(!s.length)return null
const a=i.string("FUSE.OC.Movie.TrailerTitle")
return se(yn(`musicMovieClipSection - ${n.id}`,e),s,{item:{title:a},kind:"default"})}(d,e)
f&&v.push(f)
const h=await Ht(u,e),g=Zt(d.id,h,d,u,e)
g&&v.push(g)
const w=ft(d,Eo.CrossMerchandise,e,u)
if(w){const n=w.header
if(Rn(n)){const t=(0,Bo.f3)(_o.localization,e),i=1===w.items.length?"IXDisplayableKind.album.one":"IXDisplayableKind.album"
n.item.title=t.string(i)}v.push(w)}const b=null===(i=d.attributes)||void 0===i?void 0:i.supportedLocales,k=Kt(d,b.primary,b.additional,u,e)
if(null==k?void 0:k.length){const n=null==v?void 0:v[v.length-1]
n&&(n.displaySeparator=!1),v.push(...k)}return{pageMetrics:m(e,n,"movie","Movie",u),sections:v,canonicalURL:null===(o=null==d?void 0:d.attributes)||void 0===o?void 0:o.url}}(i,e)
return o||Promise.reject()},actionFor:(n,e,t)=>_e(n.contentDescriptor,null,e,t)},Ur=[/(?:http|music|itms)s?:\/\/(?:itunes|music)\.apple\.com\/.*?\/MZStore\.woa\/.*?\/viewMusicVideo(?=.*?[?&]id=(?<id>[\w\.-]+))(?:(?=.*?[?&]cc=(?<cc>\w{2})))?/,/(?:http|music|itms)s?:\/\/(?:itunes|music)\.apple\.com\/(?:(?<cc>\w{2})\/)?music-video\/(?:.*?\/)?(?:id)?(?<id>[\w\.-]+)(?:\?|$)/],Cr={$intentKind:"MusicVideoDetailPageIntent",routes:()=>Ur.map(n=>({rules:[{regex:[n]}],handler:(e,t)=>{var i,o
const r=null!==(o=null===(i=e.toString().match(n))||void 0===i?void 0:i.groups)&&void 0!==o?o:{}
return{$kind:"MusicVideoDetailPageIntent",contentDescriptor:{kind:no.MusicVideo,identifiers:{storeAdamID:r.id}}}}})),async perform(n,e){const t=gt(n.contentDescriptor,e)
return t.queryString.views.add(Eo.MoreByArtist).add(Eo.MoreInGenre),t.queryString.addParameters({"include[music-videos]":"artists","fields[artists]":"name","omit[resource]":"autos"}),function(n,e){var t,i,o
const r=null===(t=n.body)||void 0===t?void 0:t.data
if(!r)throw new Error(`No resource identifiers in music video page response: '${JSON.stringify(n)}'`)
const l=null===(i=n.body)||void 0===i?void 0:i.resources
if(!l)throw new Error(`No resource map in music video page response: ${JSON.stringify(n)}`)
const s=[],a=new ur(l,e),u=a.resource(null==r?void 0:r[0])
if(!u)throw new Error(`No container was found in resources: ${JSON.stringify(l)}, identifier: '${null==r?void 0:r[0]}'`)
const c=function(n,e,t){const i=n.attributes
if(!i)return null
const o=S(n,t)
return Tt(yn(`music-video-header - ${n.id}`,t),{id:kn("music-video-header-item",n.id,t),contentDescriptor:o,playAction:Y(o,t),showExplicitBadge:R(i),artwork:wn(i.artwork),headline:null,title:i.name,subtitleLinks:re(oo.Artists,n,e.resourceMap,t,i.artistName),tertiaryTitle:Xt(i,t)})}(u,a,e)
return c&&s.push(c),[Eo.MoreByArtist,Eo.MoreInGenre].forEach(n=>{const t=ft(u,n,e,a)
t&&s.push(t)}),{pageMetrics:m(e,n,"music_video_detail","MusicVideo",a),sections:s,canonicalURL:null===(o=null==u?void 0:u.attributes)||void 0===o?void 0:o.url}}(await vn(t,e),e)},actionFor:(n,e,t)=>_e(n.contentDescriptor,null,e,t)},Lr=[/(?:http|music|itms)s?:\/\/(?:itunes|music)\.apple\.com\/.*?\/MZStore\.woa\/.*?\/viewPlaylist(?=.*?[?&]id=(?<id>[\w\.-]+))(?:(?=.*?[?&]cc=(?<cc>\w{2})))?/,/(?:http|music|itms)s?:\/\/(?:itunes|music)\.apple\.com\/(?:(?<cc>\w{2})\/)?playlist\/(?:.*?\/)?(?<id>[\w\.-]+)(?:\?|$)/],Mr={$intentKind:"PlaylistDetailPageIntent",routes:()=>Lr.map(n=>({rules:[{regex:[n]}],handler:(e,t)=>{var i,o
const r=null!==(o=null===(i=e.toString().match(n))||void 0===i?void 0:i.groups)&&void 0!==o?o:{}
return{$kind:"PlaylistDetailPageIntent",contentDescriptor:{kind:no.Playlist,identifiers:{storeAdamID:r.id}},prominentItemIdentifier:void 0}}})),async perform(n,e){const t=wt(n.contentDescriptor,e)
return At(await Yt(t,e),e,n)},actionFor:(n,e,t)=>_e(n.contentDescriptor,n.prominentItemIdentifier,e,t)},Rr={$intentKind:"PersonalMixDetailPageIntent",routes:()=>[{rules:[{protocol:"https",path:"/{countryCode}/personal-mix/{name}/{id}",hostName:"music.apple.com"}],handler:(n,e)=>({$kind:"PersonalMixDetailPageIntent",id:e.id})}],async perform(n,e){const t=Ho.countryCode(e)
return At(await Yt(`/v1/catalog/${t}/playlists`,e,n.id),e,n)},actionFor(n,e,t){const i=P({kind:lo.CatalogPage,intent:n},t.metrics)
return t.isDeepLinkAction?rn([tn({kind:uo.ListenNow},Zo,e),i],Zo):i}},Br={$intentKind:"RecordLabelDetailPageIntent",routes:()=>[{rules:[{protocol:"https",hostName:"music.apple.com",path:"/{cc}/label/{id}"},{protocol:"https",hostName:"itunes.apple.com",path:"/{cc}/label/{id}"},{protocol:"https",hostName:"music.apple.com",path:"/{cc}/label/{name}/{id}"},{protocol:"https",hostName:"itunes.apple.com",path:"/{cc}/label/{name}/{id}"}],handler:(n,e)=>{const t=e.id
return{$kind:"RecordLabelDetailPageIntent",contentDescriptor:{kind:no.RecordLabel,identifiers:{storeAdamID:t}}}}}],async perform(n,e){const t=gt(n.contentDescriptor,e)
return t.queryString.extend.add("editorialArtwork"),t.queryString.addParameters({"limit[record-labels:top-releases]":"25","limit[record-labels:latest-releases]":"25","fields[albums]":"artistName,artistUrl,artwork,contentRating,editorialArtwork,name,playParams,releaseDate,url,trackCount"}),t.queryString.views.add(Eo.TopReleases).add(Eo.LatestReleases).add(Eo.FeaturedRelease),async function(n,e){var t,i,o,r,l,s
const a=null===(t=n.body)||void 0===t?void 0:t.data
if(!a||0===a.length)throw new Error("No resource identifiers in editorial page response")
const u=null===(i=n.body)||void 0===i?void 0:i.resources
if(!u)throw new Error("No resource map in editorial page response")
const c=new ur(u,e),d=c.resource(a[0]),v=[],p=function(n,e){var t,i,o,r,l,s
if(!n)return null
const a=n.attributes
if(!a)return null
const u=[],c={id:kn("curator-detail-header",n.id,e),artwork:wn(null!==(r=null!==(i=null===(t=a.editorialArtwork)||void 0===t?void 0:t.bannerUber)&&void 0!==i?i:null===(o=a.editorialArtwork)||void 0===o?void 0:o.subscriptionCover)&&void 0!==r?r:null===(l=a.editorialArtwork)||void 0===l?void 0:l.subscriptionHero),coverArtwork:null},d={id:yn(`curator-detail-header-section - ${n.id}`,e),items:[c],itemKind:"curatorDetailHeaderComponentModel",presentation:{kind:"single"}}
u.push(d)
const v={id:kn("title-header-component",n.id,e),title:null!==(s=a.name)&&void 0!==s?s:"",contentDescriptor:S(n,e)},p=lt(yn(`title-header-section - ${n.id}`,e),v)
return u.push(p),u}(d,e)
p&&v.push(...p),(null!==(l=null===(r=null===(o=null==d?void 0:d.meta)||void 0===o?void 0:o.views)||void 0===r?void 0:r.order)&&void 0!==l?l:[Eo.TopReleases,Eo.LatestReleases]).forEach(n=>{if(d){const t=ft(d,n,e,c)
t&&v.push(t)}})
const f=function(n,e){if(!n)return null
const t=b(n.attributes)
if(!t)return Jo.warn(e,`Dropping bio section for container: '${JSON.stringify(n)}'`),null
const i=(0,Bo.f3)(_o.localization,e),o={id:kn("record-label-bio",n.id,e),modalPresentationDescriptor:{paragraphText:t}},r=i.string("FUSE.Bio.About")
return{...Ge(yn(`record-label-bio-section - ${n.id}`,e),o,null,r),backgroundTreatment:"alternate"}}(d,e)
if(f){const n=v[v.length-1]
n&&(n.displaySeparator=!1),v.push(f)}return{pageMetrics:m(e,n,"record_label_detail","RecordLabel",c),sections:v,canonicalURL:null===(s=null==d?void 0:d.attributes)||void 0===s?void 0:s.url}}(await dn({url:t.string},e),e)},actionFor:(n,e,t)=>_e(n.contentDescriptor,void 0,e,t)},Tr={$intentKind:"ContainerDetailSeeAllPageIntent",async perform(n,e){const t=new Go(n.url,e)
t.queryString.addParameters({"include[songs]":"artists,composers",limit:"20"}),t.queryString.extend.add("artistUrl")
const i=await dn({url:t.string},e)
return Qt(i,e,n)||Promise.reject(`Failed to construct page with response: '${JSON.stringify(i)}'`)}},xr={$intentKind:"ContainerDetailSeeAllPaginateIntent",async perform(n,e){var t,i
const o=new Go(n.url,e)
o.queryString.addParameters({"include[songs]":"artists,composers",limit:"25"}),o.queryString.extend.add("artistUrl")
const r=await dn({url:o.string},e),l=Qt(r,e,n),s=null===(t=null==l?void 0:l.sections)||void 0===t?void 0:t[0]
if(s){const e={pageChangeInstruction:{instruction:{instruction:"addItemsToSection",newSectionToAppendItemsFrom:s}}},t=null===(i=r.body)||void 0===i?void 0:i.next
if(t){const i={$kind:"ContainerDetailSeeAllPaginateIntent",url:t,id:n.id,viewKind:n.viewKind,title:n.title,containerType:n.containerType}
e.nextIntent=i}return Promise.resolve(e)}return Promise.reject()}},Kr={$intentKind:"SongDetailPageIntent",routes:()=>[{rules:[{protocol:"https",path:"/{countryCode}/song/{id}",hostName:"music.apple.com"}],handler:(n,e)=>t({kind:no.Song,identifiers:{storeAdamID:e.id}})}],async perform(n,e){var t,i
const o=n.contentDescriptor.identifiers.storeAdamID
if(!o)throw new Error("Missing songID in SongDetailPageIntent")
const r=Ho.countryCode(e),l=new Go(`/v1/catalog/${r}/songs/${o}/albums`,e)
l.queryString.addParameters({limit:"1"})
const s=null===(i=null===(t=(await vn(l,e)).body)||void 0===t?void 0:t.data)||void 0===i?void 0:i.find(n=>n.type===oo.Albums)
if(!s)throw new Error("Missing album resource identifier in song response")
const a=$(s,e)
if(!a)throw new Error("Couldn't create album content descriptor.")
const u=It(a,e)
return Et(await vn(u,e),e,n,o)},actionFor:(n,e,t)=>_e(n.contentDescriptor,null,e,t)},jr={$intentKind:"TVEpisodeDetailPageIntent",routes:()=>[{rules:[{protocol:"https",path:"{country}/tvepisode/{name}/{id}"}],handler:(n,e)=>({$kind:"TVEpisodeDetailPageIntent",contentDescriptor:{kind:no.TVEpisode,identifiers:{storeAdamID:e.id}}})}],async perform(n,e){const t=gt(n.contentDescriptor,e)
t.queryString.addParameters({include:"show",extend:"credits","limit[tv-episodes:other-episodes]":"25"}),t.queryString.views.add(Eo.OtherEpisodes).add(Eo.MusicArtists).add(Eo.Playlists)
const i=await vn(t,e),o=await async function(n,e){var t,i,o,r,l
const s=null===(t=n.body)||void 0===t?void 0:t.resources
if(!s)return Jo.warn(e,`Missing resources for response: '${JSON.stringify(n)}'`),null
const a=new ur(s,e),u=null===(o=null===(i=n.body)||void 0===i?void 0:i.data)||void 0===o?void 0:o[0]
if(!u)return Jo.warn(e,`No container resource identifier found for response: '${JSON.stringify(n)}'`),null
const c=a.resource(u)
if(!c)return Jo.warn(e,`No container resource found in resource manager: '${JSON.stringify(a)}'`),null
const d=[],v=zt(c,a,e)
v&&d.push(v)
const p=function(n,e,t){var i
const o=n.attributes
if(!o)return Jo.log(t,`No attributes for container: ${JSON.stringify(n)}`),null
const r=null===(i=n.views)||void 0===i?void 0:i[Eo.OtherEpisodes]
if(!r)return Jo.log(t,`No view ${Eo.OtherEpisodes} found in container: ${JSON.stringify(n)}`),null
const l=r.data
if(!l)return Jo.log(t,`No resource identifiers found in view: ${JSON.stringify(r)}`),null
const s=yn(`${Eo.OtherEpisodes} - ${n.id}`,t),a=(0,Bo.f3)(_o.localization,t),u=[]
if(e.resources(l).forEach(n=>{var e,i,o,r
if(qt(n)){const e=Jt(s,n,t)
e&&u.push(e)}else{const l=_t(s,n,t),c=null===(i=null===(e=n.attributes)||void 0===e?void 0:e.episodeSeasonNumber)||void 0===i?void 0:i.toString(),d=null===(r=null===(o=n.attributes)||void 0===o?void 0:o.episodeNumber)||void 0===r?void 0:r.toString()
if(l&&c&&d){const n=a.string("FUSE.OC.Show.EpisodeTrack.cap",{seasonNumber:c,trackNumber:d})
u.push({...l,headline:n})}}}),!u.length)return null
const c=o.artistName?a.string("FUSE.moreFromCurator",{curator:o.artistName}):null
return se(s,u,{kind:"default",item:{title:c}})}(c,a,e)
p&&d.push(p)
const f=await Ht(a,e),h=Zt(c.id,f,c,a,e)
h&&d.push(h)
const g=null===(r=c.attributes)||void 0===r?void 0:r.supportedLocales,w=Kt(c,g.primary,g.additional,a,e)
if(null==w?void 0:w.length){const n=null==d?void 0:d[d.length-1]
n&&(n.displaySeparator=!1),d.push(...w)}return{pageMetrics:m(e,n,"tv_episode_detail","TVEpisode",a),sections:d,canonicalURL:null===(l=null==c?void 0:c.attributes)||void 0===l?void 0:l.url}}(i,e)
return o||Promise.reject()},actionFor:(n,e,t)=>_e(n.contentDescriptor,null,e,t)},_r={$intentKind:"TVShowDetailPageIntent",routes:()=>[{rules:[{protocol:"https",path:"{country}/show/{name}/{id}"}],handler:(n,e)=>({$kind:"TVShowDetailPageIntent",contentDescriptor:{kind:no.TVShow,identifiers:{storeAdamID:e.id}}})}],async perform(n,e){const t=await function(n,e){const t=gt(n.contentDescriptor,e)
return t.queryString.addParameters({include:"tv-seasons"}),t.queryString.extend.add("editorialArtwork"),vn(t,e)}(n,e),i=t.body,o=null==i?void 0:i.data
if(!o)return Promise.reject(`Unable to parse resource identifiers from response '${JSON.stringify(t)}'`)
const r=null==i?void 0:i.resources
if(!r)return Promise.reject(`Unable to parse resources from response '${JSON.stringify(t)}'`)
const s=new ur(r,e),a=s.resourcesForType(oo.TVSeasons).map(n=>n.id),u=(await function(n,e){const t=Ho.countryCode(e),i=new Go(`/v1/catalog/${t}/${oo.TVSeasons}`,e)
return i.queryString.addParameters({"fields[tv-episodes]":"name,artwork,previews,url,description,episodeNumber,episodeSubNumber,episodeSeasonNumber,kind,offers,releaseDate",include:"episodes",ids:n.join(","),extend:"credits"}),vn(i,e)}(a,e)).body,c=null==u?void 0:u.data
return c?(s.addResourceMap(null==u?void 0:u.resources,e),function(n,e,t,i,o){var r,s
if(!e)return Jo.warn(o,"Dropping page because no container was found."),null
if(!t)return Jo.warn(o,`No identifiers found for container: ${JSON.stringify(e)}`),null
const a=[],u=function(n,e,t,i){var o,r,s,a,u,c,d,v
const p=n.attributes
if(!p)return Jo.log(i,`Dropping header because no attributes were found '${JSON.stringify(n)}`),null
const f=[],m={id:kn("header",n.id,i),artwork:wn(null!==(a=null!==(r=null===(o=p.editorialArtwork)||void 0===o?void 0:o.bannerUber)&&void 0!==r?r:null===(s=p.editorialArtwork)||void 0===s?void 0:s.subscriptionCover)&&void 0!==a?a:null===(u=p.editorialArtwork)||void 0===u?void 0:u.subscriptionHero),coverArtwork:null}
f.push({id:yn(`header-section - ${n.id}`,i),items:[m],itemKind:"curatorDetailHeaderComponentModel",presentation:{kind:"single"}})
const h=lt(yn(`headerComponentItemSection - ${n.id}`,i),{id:kn("header-component-item",n.id,i),title:null!==(c=p.shortName)&&void 0!==c?c:p.name,contentDescriptor:S(n,i),hideContextMenuButton:!0},!1)
f.push(h)
const g=null!==(v=null===(d=p.editorialNotes)||void 0===d?void 0:d.standard)&&void 0!==v?v:w(p),b=Ae(yn(`tv-show-description-section - ${n.id}`,i),null,{id:kn("tv-show-description-paragraph",n.id,i),text:g,textAlignment:$o.Leading});(null==g?void 0:g.length)&&f.push(b)
const k=function(n,e,t,i){const o=t.attributes
if(!o)return Jo.log(i,`Dropping header because no attributes were found '${JSON.stringify(t)}`),null
let r,s
n.resources(e).forEach(e=>{var t,o
const l=null===(o=null===(t=e.relationships)||void 0===t?void 0:t.episodes)||void 0===o?void 0:o.data
l&&n.resources(l).forEach(n=>{if(n&&!qt(n)){const e=S(n,i)
r=null!=r?r:Y(e,i),s=null!=s?s:function(n,e){var t,i
const o=null===(t=n.attributes)||void 0===t?void 0:t.episodeSeasonNumber,r=null===(i=n.attributes)||void 0===i?void 0:i.episodeNumber
return o&&r?zo.string("FUSE.OC.Show.playbackDescription",e,{seasonNumber:o.toString(),episodeNumber:r.toString()}):o?zo.string("FUSE.OC.Show.playbackDescription",e,{seasonNumber:o.toString()}):r?zo.string("FUSE.OC.Show.playbackDescription",e,{episodeNumber:r.toString()}):null}(n,i)}})})
const a=(0,Bo.f3)(_o.localization,i),u={heading:l(o.releaseDate,i),headingTrailingBadges:Wt(o,a),playAction:r,title:s,id:kn("tv-show-metadata-description-item",t.id,i),contentDescriptor:S(t,i)}
return{id:yn(`tv-show-metadata-description-item-${t.id}`,i),itemKind:"tvMovieDescription",presentation:{kind:"single"},items:[u],displaySeparator:!0}}(t,e,n,i)
return k&&f.push(k),f}(e,t,i,o)
u&&a.push(...u)
const c=function(n,e,t){const i=[]
return e.resources(n).forEach(n=>{const o=function(n,e,t){var i,o
const r=[],l=null===(o=null===(i=n.relationships)||void 0===i?void 0:i.episodes)||void 0===o?void 0:o.data
if(!l)return Jo.warn(t,`Dropping season because no episodes were found: '${JSON.stringify(n)}'`),null
const s=yn(`tv-show-season-shelf - ${n.id}`,t)
let a
e.resources(l).forEach(n=>{var e,i
a=null!=a?a:null===(i=null===(e=n.attributes)||void 0===e?void 0:e.episodeSeasonNumber)||void 0===i?void 0:i.toString()
const o=_t(s,n,t)
o&&!qt(n)&&r.push(o)})
const u=(0,Bo.f3)(_o.localization,t)
let c
return a&&(c=u.string("FUSE.OC.Show.Season",{number:a})),se(s,r,{kind:"default",item:{title:c}})}(n,e,t)
o&&i.push(o)}),i}(t,i,o)
c&&a.push(...c)
const d=function(n,e,t,i){const o=[]
if(t.resources(e).forEach(e=>{var r,l
const s=null===(l=null===(r=e.relationships)||void 0===r?void 0:r.episodes)||void 0===l?void 0:l.data,a=function(n,e,t,i){if(!e)return null
const o=[]
return t.resources(e).filter(qt).forEach(e=>{const t=Jt(n,e,i)
t&&o.push(t)}),o}(n,s,t,i)
a&&o.push(...a)}),!o.length)return null
const r=(0,Bo.f3)(_o.localization,i).string("FUSE.OC.TrailerAndBonus")
return se(yn(`bonus-content-shelf - ${n}`,i),o,{kind:"default",item:{title:r}})}(e.id,t,i,o)
d&&a.push(d)
const v=null===(r=e.attributes)||void 0===r?void 0:r.languageAttributes,p=Kt(e,null==v?void 0:v.find(n=>n.isPrimary),null==v?void 0:v.filter(n=>!n.isPrimary),i,o)
if(p.length){const n=null==a?void 0:a[a.length-1]
n&&(n.displaySeparator=!1),a.push(...p)}return{pageMetrics:m(o,n,"tv_show_detail","TVShow",i),sections:a,canonicalURL:null===(s=null==e?void 0:e.attributes)||void 0===s?void 0:s.url}}(t,s.resource(o[0]),c,s,e)||Promise.reject()):Promise.reject(`Unable to parse resource identifiers from response '${JSON.stringify(t)}'`)},actionFor:(n,e,t)=>_e(n.contentDescriptor,null,e,t)},Jr={$intentKind:"ArtistUploadedVideoDetailPageIntent",async perform(n,e){const t=n.contentDescriptor.identifiers.storeAdamID
if(!t)return Promise.reject(`No store adam id was found in content descriptor: '${JSON.stringify(n.contentDescriptor)}'`)
const i=Ho.countryCode(e),o=new Go(`/v1/catalog/${i}/contents/${t}`,e)
return o.queryString.addParameters({include:"artists,curator"}),function(n,e){var t,i,o
const r=null===(t=n.body)||void 0===t?void 0:t.data
if(!r||0===r.length)throw new Error("No resource identifiers in editorial page response")
const l=null===(i=n.body)||void 0===i?void 0:i.resources
if(!l)throw new Error("No resource map in editorial page response")
const s=new ur(l,e),u=s.resource(r[0])
if(!u)throw new Error(`No container found for resources ${JSON.stringify(s)}`)
const c=function(n,e,t){const i=n.attributes,o=a(null==i?void 0:i.uploadDate,t),r=yn(`auc-detail-page - ${n.id}`,t),l=S(n,t),s=re(no.Curator,n,e.resourceMap,t)
return Tt(r,{id:kn(n.id,`auc-content-header-item - ${n.id}`,t),title:null==i?void 0:i.name,artwork:wn(null==i?void 0:i.artwork),headline:null,contentDescriptor:l,playAction:Y(l,t),subtitleLinks:s,tertiaryTitle:o,showExplicitBadge:R(i)})}(u,s,e)
return{pageMetrics:m(e,n,"uploaded_video_detail","MusicVideo",s),sections:[c],canonicalURL:null===(o=null==u?void 0:u.attributes)||void 0===o?void 0:o.url}}(await vn(o,e),e)}},qr={$intentKind:"GroupingPageIntent",routes:()=>[{rules:[{protocol:"https",path:"/WebObjects/MZStore.woa/wa/viewGrouping",hostName:"itunes.apple.com"},{protocol:"https",path:"/WebObjects/MZStore.woa/wa/viewGrouping",hostName:"music.apple.com"}],handler:n=>function(n){var e
return{$kind:"GroupingPageIntent",id:null===(e=n.query)||void 0===e?void 0:e.id}}(n)}],async perform(n,e){const t=n.id
if(!t)throw new Error(`Unable to render page because no grouping id was found in intent: ${JSON.stringify(n)}`)
const i=Ho.countryCode(e),o=new Go(`/v1/editorial/${i}/groupings/${t}`,e)
return o.queryString.addParameters({"omit[resource:artists]":"relationships","include[groupings]":"curator","include[songs]":"artists","include[music-videos]":"artists","include[albums]":"artists","fields[artists]":"name,url,artwork,editorialArtwork,genreNames,plainEditorialNotes","fields[albums]":"name,url,artwork,editorialArtwork,genreNames,artistName,trackCount,contentRating,plainEditorialNotes",tabs:T(e)?"subscriber":"nonsubscriber"}),o.queryString.artworkURL.add(io.OmitCropCode).add(io.OmitFileExtension),o.queryString.extend.add("editorialArtwork"),o.queryString.extend.add("artistUrl"),o.queryString.extend.add("plainEditorialNotes"),async function(n,e){var t,i,o,r,l,s,a
const u=[],c=Ho.countryCode(e),d=null===(t=n.body)||void 0===t?void 0:t.resources
if(!d)throw new Error(`Missing resources for response: '${JSON.stringify(n)}'`)
const v=new ur(d,e),p=v.resourcesForType(oo.Groupings),f=null==p?void 0:p[0],h=null===(r=null===(o=null===(i=f.relationships)||void 0===i?void 0:i.curator)||void 0===o?void 0:o.data)||void 0===r?void 0:r[0],g=v.resource(h),w=function(n,e,t){var i
if(!n)return Jo.warn(t,"No container found. Dropping header"),null
const o=null==n?void 0:n.attributes
let r
return o?(e&&(r=S(e,t)),lt(yn(`headerComponentItemSection - ${n.id}`,t),{id:yn(`headerComponentItem - ${n.id}`,t),title:null!==(i=o.shortName)&&void 0!==i?i:o.name,contentDescriptor:r})):(Jo.warn(t,`No attributes found for container: '${JSON.stringify(n)}'.  Dropping header`),null)}(f,g,e)
w&&u.push(w)
const b=await Fe(n,e)
if(u.push(...b),(0,Ko.isSome)(g)&&"Genre"===(null===(l=g.attributes)||void 0===l?void 0:l.kind)){const n=Rt(g,!0,e)
n&&u.push(n)}const k=null!==(a=null===(s=null==f?void 0:f.attributes)||void 0===s?void 0:s.url)&&void 0!==a?a:(null==f?void 0:f.id)&&`https://music.apple.com/WebObjects/MZStore.woa/wa/viewGrouping?cc=${encodeURIComponent(c)}&id=${encodeURIComponent(null==f?void 0:f.id)}`
return{pageMetrics:m(e,n,"grouping","Grouping"),sections:u,...k&&{canonicalURL:k}}}(await vn(o,e),e)},actionFor(n,e,t){var i
const o=null!==(i=t.metrics)&&void 0!==i?i:p(e,"0","unknown","navigate"),r=P({kind:lo.CatalogPage,intent:n},o)
return t.isDeepLinkAction?rn([tn({kind:uo.Browse},Zo,e),r],Zo):r}},Hr={$intentKind:"MultiRoomPageIntent",routes:()=>[{rules:[{protocol:"https",path:"/{country}/multi-room/{id}",hostName:"music.apple.com"},{protocol:"https",path:"/{country}/multi-room/{id}",hostName:"itunes.apple.com"}],handler:n=>ti(n)},...zr.map(n=>({rules:[{regex:[n]}],handler:n=>ti(n)}))],async perform(n,e){const t=n.id
if(!t)throw new Error(`Unable to render page because no multiroom id was found in intent: ${JSON.stringify(n)}`)
const i=Ho.countryCode(e),o=new Go(`/v1/editorial/${i}/multirooms/${t}`,e)
return o.queryString.extend.add("editorialArtwork"),o.queryString.extend.add("uber"),o.queryString.extend.add("lockupStyle"),o.queryString.artworkURL.add(io.OmitCropCode).add(io.OmitFileExtension),function(n,e){var t,i,o,r,l,s
const a=null===(t=n.body)||void 0===t?void 0:t.data
if(!(null==a?void 0:a.length))throw new Error(`No resource identifiers in multi room response ${JSON.stringify(n)}`)
const u=null===(i=n.body)||void 0===i?void 0:i.resources
if(!u)throw new Error(`No resource map in multi room response: ${JSON.stringify(n)}`)
const c=Ho.countryCode(e),d=new ur(u,e),v=d.resource(a[0]),p=null==v?void 0:v[0]
if(!v)throw new Error(`No multi room resource in page response: ${JSON.stringify(n)}`)
const f=null===(r=null===(o=v.relationships)||void 0===o?void 0:o.children)||void 0===r?void 0:r.data,h=[],g=function(n,e){var t,i
const o=null===(i=null===(t=n.attributes)||void 0===t?void 0:t.uber)||void 0===i?void 0:i.masterArt
if(!o)return Jo.log(e,`No master art found in resource.  Dropping multiroom resource: '${JSON.stringify(n)}'`),null
const r={id:kn("multi-room-header",n.id,e),artwork:wn(o),coverArtwork:null}
return Ft(n.id,r,e)}(v,e)
g&&h.push(g)
const w=function(n,e){var t
const i=null===(t=n.attributes)||void 0===t?void 0:t.title
return i?lt(yn(`headerComponentModelSection - ${n.id}`,e),{id:kn(`headerComponentModelSection - ${n.id}`,n.id,e),title:i,contentDescriptor:null,hideContextMenuButton:!0}):null}(v,e)
w&&h.push(w)
const b=Ne(f,!1,d,e)
h.push(...b)
const k=null!==(s=null===(l=null==p?void 0:p.attributes)||void 0===l?void 0:l.url)&&void 0!==s?s:(null==p?void 0:p.id)&&`https://music.apple.com/WebObjects/MZStore.woa/wa/viewMultiRoom?cc=${encodeURIComponent(c)}&id=${encodeURIComponent(null==p?void 0:p.id)}`
return{pageMetrics:m(e,n,"multi_room","Room",d),sections:h,...k&&{canonicalURL:k}}}(await vn(o,e),e)},actionFor(n,e,t){var i
const o=null!==(i=t.metrics)&&void 0!==i?i:p(e,"0","unknown","navigate"),r=P({kind:lo.CatalogPage,intent:n},o)
return t.isDeepLinkAction?rn([tn({kind:uo.Browse},Zo,e),r],Zo):r}},zr=[/(?:http|music|itms)s?:\/\/(?:itunes|music|podcasts|apps|books)\.apple\.com\/.*?\/MZStore\.woa\/.*?\/viewMultiRoom(?=.*?[?&]fcId=(?<id>\w+))(?:(?=.*?[?&]cc=(?<cc>\w{2})))?/],Wr=[/(?:http|music|itms)s?:\/\/(?:itunes|music|podcasts|apps|books)\.apple\.com\/.*?\/MZStore\.woa\/.*?\/viewRoom(?=.*?[?&]fcId=(?<id>\w+))((?=.*?[?&]cc=(?<cc>\w{2})))?/,/https?:\/\/(?:podcasts|apps|books)\.apple\.com\/(?:(?<cc>\w{2})\/)?collection\/(?:.*?\/)?(?=.*?[?&]fcId=(?<id>\w+))/,/(?:http|music|itms)s?:\/\/(?:itunes|music)\.apple\.com\/(?:(?<cc>\w{2})\/)?collection\/(?:.*?\/)?(?=.*?[?&]fcId=(?<id>\w+))/],Gr={routes:()=>Wr.map(n=>({rules:[{regex:[n]}],handler:(e,t)=>{var i,o
return ve((null!==(o=null===(i=e.toString().match(n))||void 0===i?void 0:i.groups)&&void 0!==o?o:{}).id)}})),$intentKind:"RoomPageIntent",async perform(n,e){const t=Ho.countryCode(e),i=new Go(`/v1/editorial/${t}/rooms/${n.id}`,e)
return i.queryString.addParameters({"omit[resource:artists]":"relationships","relate[songs]":"albums","include[albums]":"artists,composers","include[songs]":"artists,composers","fields[albums]":"artistName,artistUrl,artwork,contentRating,editorialArtwork,editorialNotes,name,playParams,releaseDate,url,trackCount","extend[albums]":"artistUrl"}),i.queryString.artworkURL.add(io.OmitCropCode).add(io.OmitFileExtension),i.queryString.extend.add("offers"),function(n,e,t){var i,o,r,l
const s=null===(i=n.body)||void 0===i?void 0:i.data
if(!s||0===s.length)throw new Error(`No resource identifiers in room see all page response ${JSON.stringify(n)}`)
const a=null===(o=n.body)||void 0===o?void 0:o.resources
if(!a)throw new Error(`No resource map in room see all page response: ${JSON.stringify(n)}`)
const u=Ho.countryCode(t),c=new ur(a,t),d=c.resource(s[0]),v=null==d?void 0:d[0],p=Ne(s,!0,c,t)
p.forEach(n=>{var t
"trackLockup"!==n.itemKind&&(n.presentation={kind:"collection",layout:"grid"})
const i=n.header
if(Rn(i)){const n=i
n.item.title=null!==(t=n.item.title)&&void 0!==t?t:e.title}})
const f=null!==(l=null===(r=null==v?void 0:v.attributes)||void 0===r?void 0:r.url)&&void 0!==l?l:(null==v?void 0:v.id)&&`https://music.apple.com/WebObjects/MZStore.woa/wa/viewGrouping?cc=${encodeURIComponent(u)}&id=${encodeURIComponent(null==v?void 0:v.id)}`
return{header:ii(p,e.title),pageMetrics:m(t,n,"see_all","SeeAll",c),sections:p,...f&&{canonicalURL:f}}}(await dn({url:i.string},e),n,e)},actionFor(n,e,t){var i,o
const r=null!==(i=t.metrics)&&void 0!==i?i:p(e,null!==(o=n.id)&&void 0!==o?o:"0","unknown","navigate"),l=P({kind:lo.CatalogPage,intent:n},r)
return t.isDeepLinkAction?rn([tn({kind:uo.Browse},Zo,e),l],Zo):l}},Vr=[/(?:http|music|itms)s?:\/\/(?:itunes|music|apps|books|podcasts)\.apple\.com\/.*?\/MZStore\.woa\/.*?\/viewFeature(?:(?=.*?[?&]cc=(?<cc>\w+)))?(?=.*?[?&]id=(?<id>\w+))/],Zr={$intentKind:"MultiplexPageIntent",routes:()=>Vr.map(n=>({rules:[{regex:[n]}],handler:n=>function(n){var e
return{$kind:"MultiplexPageIntent",id:null===(e=n.query)||void 0===e?void 0:e.id}}(n)})),async perform(n,e){const t=n.id
if(!t)throw new Error(`Unable to render page because no multiplex id was found in intent: ${JSON.stringify(n)}`)
const i=Ho.countryCode(e),o=new Go(`/v1/editorial/${i}/multiplex/${t}`,e)
return function(n,e){var t
const i=n.body
if(!i)throw new Error(`Couldn't route multiplex response because no payload was found: '${JSON.stringify(n)}'`)
const o=null===(t=i.results)||void 0===t?void 0:t.target
if(!o)throw new Error(`Couldn't route multiplex response because no target was found: '${JSON.stringify(o)}'`)
const r=o.type
if(!r)throw new Error(`Couldn't route multiplex response because no type was found: '${JSON.stringify(i.results)}'`)
switch(r){case oo.MultiRooms:return function(n,e){const t={$kind:"MultiRoomPageIntent",id:n.id}
return Hr.perform(t,e)}(o,e)
case oo.Groupings:return function(n,e){const t={$kind:"GroupingPageIntent",id:n.id}
return qr.perform(t,e)}(o,e)
case oo.Rooms:return function(n,e){const t={$kind:"RoomPageIntent",id:n.id,title:null}
return Gr.perform(t,e)}(o,e)
case oo.Curators:return function(n,e){if((0,Ko.isNothing)(n.id))throw new Error("No id found in response")
return Er.perform(Nt(n.id),e)}(o,e)
case oo.AppleCurators:return function(n,e){var t
const i={$kind:"AppleCuratorDetailPageIntent",contentDescriptor:{kind:no.AppleCurator,identifiers:{storeAdamID:null!==(t=n.id)&&void 0!==t?t:void 0}}}
return Nr.perform(i,e)}(o,e)
default:throw new Error(`Unhandled multiplex type '${r}'`)}}(await vn(o,e),e)},actionFor(n,e,t){var i
const o=null!==(i=t.metrics)&&void 0!==i?i:p(e,"0","unknown","navigate"),r=P({kind:lo.CatalogPage,intent:n},o)
return t.isDeepLinkAction?rn([tn({kind:uo.Browse},Zo,e),r],Zo):r}},Xr={$intentKind:"RefreshInlineUpsellSectionIntent",perform(n,e){var t
const i=null===(t=n.metadata)||void 0===t?void 0:t.kind
if(i&&$t(e)){const n=St(i,e)
return n?Promise.resolve({instruction:{instruction:"replaceSection",newSection:n}}):Promise.resolve({instruction:{instruction:"discardSection"}})}return Promise.resolve({instruction:{instruction:"discardSection"}})}}
Io=n(881)
class Yr{constructor(n){this.dispatcher=new Io.IntentDispatcher,this.defaultActionProvider=n}register(n){this.dispatcher.register(n)}async dispatch(n,e){const t=(0,Bo.f3)(_o.localization,e)
await t.loadStrings()
const i=(0,Bo.f3)(_o.logger,e)
i.shouldQueueMessages&&(i.flushMessages(),i.shouldQueueMessages=!1)
const o=Yr.objectGraphWithIntentDependencies(e,n.$kind)
try{return await this.dispatcher.dispatch(n,o)}catch(n){if(!C(e)||F("21E205",e))throw n
throw new Error(t.string("FUSE.Error.GenericDataError"))}}controller(n){return this.dispatcher.controller(n)}get registeredControllers(){return this.dispatcher.registeredControllers}actionFor(n,e,t){const i=this.dispatcher.controller(n)
return(0,Io.isBaseActionProvider)(i)?i.actionFor(n,e,t):this.defaultActionProvider.actionFor(n,e,t)}static objectGraphWithIntentDependencies(n,e){const t=n.adding(_o.logger,new Jo(e))
return t.adding(vr,new dr(t))}}!function(n){n.CardShelf="MusicCardShelf",n.CoverShelf="MusicCoverShelf",n.CoverGrid="MusicCoverGrid",n.HorizontalLockupGrid="MusicHorizontalLockupGrid",n.NamedBrickShelf="MusicNamedBrickShelf",n.NotesHeroShelf="MusicNotesHeroShelf",n.SocialCardShelf="MusicSocialCardShelf",n.SuperHeroShelf="MusicSuperHeroShelf",n.UpsellShelf="MusicUpsellShelf"}(No||(No={}))
class Qr extends Go{constructor(n){super("/v1/me/recommendations",n),this.queryString.addParameters({name:"listen-now"}),this.queryString.displayFilterKind.add(No.CardShelf).add(No.HorizontalLockupGrid),this.queryString.types.add(oo.Albums).add(oo.Playlists).add(oo.Stations),this.queryString.with.add("marketingItems").add("voice"),this.queryString.shouldIncludeTimezoneOffset=!0,this.queryString.addParameters({meta:"vacToken"}),this.queryString.extend.add("plainEditorialNotes")}}class nl extends Go{constructor(n){super("/v1/me/recommendations",n),this.queryString.addParameters({name:"listen-now","extend[playlists]":"artistNames","include[albums]":"artists","fields[artists]":"name","omit[resource]":"autos"}),this.queryString.displayFilterKind.add(No.CoverShelf).add(No.CoverGrid).add(No.NotesHeroShelf).add(No.SuperHeroShelf).add(No.SocialCardShelf),this.queryString.types.add(oo.Activities).add(oo.Albums).add(oo.AppleCurators).add(oo.Curators).add(oo.EditorialItems).add(oo.LibraryAlbums).add(oo.LibraryPlaylists).add(oo.MusicMovies).add(oo.Playlists).add(oo.SocialProfiles).add(oo.SocialUpsells).add(oo.Songs).add(oo.Stations).add(oo.TVShows).add(oo.UploadedAudios).add(oo.UploadedVideos),_(n)&&(this.queryString.with.add("social"),this.queryString.with.add("friendsMix")),L(n)&&this.queryString.with.add("voice"),this.queryString.shouldIncludeTimezoneOffset=!0
const e=n.optional(_o.cloudLibraryStatusProvider)
!(null==e?void 0:e.isCloudLibraryEnabled)&&e||(this.queryString.with.add("library"),this.queryString.sparse.add(oo.LibraryAlbums).add(oo.LibraryPlaylists)),this.queryString.extend.add("plainEditorialNotes").add("plainEditorialCard").add("editorialVideo")}}const el={$intentKind:"ListenNowPageIntent",routes:()=>[{rules:[{protocol:"https",path:"listen-now"},{protocol:"https",path:"listennow"},{protocol:"https",path:"for-you"},{protocol:"https",path:"foryou"},{protocol:"https",path:"for_you"}],handler:()=>({$kind:"ListenNowPageIntent"})}],perform:async(n,e)=>async function(n){if(F("21D5026",n)){if(K(n).has("anyCatalogPlayback"))return gi(await wi(n),n)}else{const e=(0,Bo.f3)(_o.subscriptionStatusCoordinator,n)
if((await e.fetch({shouldIgnoreCache:!0})).capabilities.includes("anyCatalogPlayback"))return gi(await wi(n),n)}const e=await async function(n){return fn(nr.DynamicAMSUIUrlPlacements.ListenNow,2,n)}(n)
return function(n,e){var t,i,o
const r=null===(i=null===(t=n.body)||void 0===t?void 0:t.results)||void 0===i?void 0:i.data
if(!r||0===r.length)throw new Error("No resource identifiers in marketing items page response")
const l=null===(o=n.body)||void 0===o?void 0:o.resources
if(!l)throw new Error("No resource map in marketing items page response")
const s=[],a=new ur(l,e)
return a.resources(r).forEach(n=>{const t=hi(n,a,e)
t&&s.push(t)}),{pageMetrics:m(e,n,"grouping","ListenNow",a,"ListenNowLanding"),sections:s,header:{showAccountButton:j(e),title:zo.string("FUSE.ListenNow.Pageheader",e)},invalidationRules:{eventTriggers:[{events:[{name:"subscriptionStatusChange"}],intent:Le({$kind:"ListenNowPageIntent"},"Subscription Status Change")}]},ignoresSocialBadging:!0}}(e,n)}(e),actionFor(n,e,t){var i
const o=null!==(i=t.metrics)&&void 0!==i?i:p(e,"0","unknown","navigate"),r=P({kind:lo.CatalogPage,intent:n},o)
return t.isDeepLinkAction?rn([tn({kind:uo.ListenNow},Zo,e),oi(Zo)],Zo):r}},tl={$intentKind:"RefreshHorizontalGridIntent",async perform(n,e){var t,i
if(!x(e))return Jo.warn(e,"Refreshing horizontal grid only valid for Glide subscribers.  Ignoring refresh attempt"),{instruction:{instruction:"noOperation"}}
Jo.log(e,`Refreshing Horizontal Grid for reason "${n.reason}".`)
const o=new Go(n.refreshPath,e)
o.queryString.shouldIncludeLanguage=!1,o.queryString.displayFilterKind.add(No.HorizontalLockupGrid),o.queryString.addParameters({action:"refresh",meta:"vacToken"}),o.queryString.with.add("voice"),o.queryString.types.add(oo.Albums).add(oo.Playlists).add(oo.Stations),o.queryString.extend.add("plainEditorialNotes"),o.queryString.shouldIncludeTimezoneOffset=!0
const r=await dn({url:o.string,method:"POST"},e),l=null===(t=r.body)||void 0===t?void 0:t.data
if(!l||0===l.length)throw new Error("No resource identifiers in Listen Now See All response")
const s=null===(i=r.body)||void 0===i?void 0:i.resources
if(!s)throw new Error(`Missing resource map from response: '${JSON.stringify(r)}'`)
const a=l[0],u=new ur(s,e),c=u.resource(a)
if(!c)throw new Error("Missing resource for personal recommendation.")
const d=mi(c,u,!0,e)
if(!d)throw new Error("Couldn't create horizontal grid section.")
return{instruction:{instruction:"replaceSection",newSection:d}}}},il={$intentKind:"RefreshRecentlyPlayedIntent",async perform(n,e){var t,i
Jo.log(e,`Refreshing Recently Played for reason "${n.reason}".`)
const o=new Go(n.refreshPath,e)
o.queryString.shouldIncludeLanguage=!1,o.queryString.addParameters({action:"refresh","include[albums]":"artists","fields[artists]":"name","omit[resource]":"autos"}),o.queryString.extend.add("plainEditorialNotes")
const r=e.optional(_o.cloudLibraryStatusProvider)
!(null==r?void 0:r.isCloudLibraryEnabled)&&r||(o.queryString.with.add("library"),o.queryString.sparse.add(oo.LibraryAlbums).add(oo.LibraryPlaylists)),o.queryString.shouldIncludeTimezoneOffset=!0
const l=await dn({url:o.string,method:"POST"},e),s=null===(t=l.body)||void 0===t?void 0:t.data
if(!s||0===s.length)throw new Error("No resource identifiers in Recently Played shelf response")
const a=null===(i=l.body)||void 0===i?void 0:i.resources
if(!a)throw new Error("Missing resource map.")
const u=s[0],c=new ur(a,e),d=c.resource(u)
if(!d)throw new Error("Missing resource for personal recommendation.")
const v=pi(d,c,!0,e)
if(!v)throw new Error("Couldn't create recently played section.")
return{instruction:{instruction:"replaceSection",newSection:v}}}},ol={$intentKind:"ListenNowSeeAllPageIntent",async perform(n,e){const t=new Go(`/v1/me/recommendations/${n.personalRecommendationID}/view/see-all`,e)
return t.queryString.addParameters({action:"refresh",name:"listen-now",extend:"artistUrl","include[personal-recommendation]":"contents","limit[contents]":"100"}),t.queryString.shouldIncludeTimezoneOffset=!0,t.queryString.with.add("library"),_(e)&&t.queryString.with.add("social"),kt(e)&&t.queryString.with.add("friendsMix"),[oo.Artists,oo.Albums,oo.EditorialItems,oo.LibraryAlbums,oo.LibraryPlaylists,oo.MusicMovies,oo.Playlists,oo.Stations,oo.UploadedAudios].forEach(t.queryString.types.add,t.queryString.types),function(n,e){var t,i
const o=null===(t=n.body)||void 0===t?void 0:t.data
if(!o||0===o.length)throw new Error("No resource identifiers in Listen Now See All response")
const r=null===(i=n.body)||void 0===i?void 0:i.resources
if(!r)throw new Error(`No resources were found in response: ${JSON.stringify(n)}`)
const l=o[0],s=new ur(r,e),a=s.resource(l)
if(!a)throw new Error(`No personal recommendation found in response: ${JSON.stringify(n)}`)
const u=[],c=ui(a,s,e,"grid")
return c&&u.push(c),{pageMetrics:m(e,n,"see_all","SeeAll",s),sections:u,nextIntent:void 0}}(await dn({url:t.string},e),e)}},rl={$intentKind:"LintMetricsEventIntent",async perform(n,e){var t,i,o
const r=n.fields
delete r.pageFeatureName
const l=null===(t=B(e))||void 0===t?void 0:t.accountIdentifier
l&&(r.dsId=l),r.isSignedIn=j(e)
const s=null===(i=(0,Bo.f3)(_o.bundle,e).manifest.properties)||void 0===i?void 0:i.version
s&&(r.resourceRevNum=s)
const a=Ho.optionalDictionary("metrics",e)
if(a&&"object"==typeof a){const n=a.postFrequency
n&&(r.xpPostFrequency=n)
const e=null===(o=a.metricsBase)||void 0===o?void 0:o.storeFrontHeader
e&&(r.storeFrontHeader=e)}r.xpSendMethod="jet"
const u=r.actionDetails
return"Library"===(null==u?void 0:u.addTo)&&(r.targetId="LibraryItem",r.pageId="LibraryItem"),r.recoID&&(r["data.reco.dataSetId"]=r.recoID,delete r.recoID),{fields:r}}},ll={$intentKind:"OnboardingArtistPageIntent",async perform(n,e){const t={url:new Go("/v1/me/taste/taste-preferences",e).string,method:"POST",body:JSON.stringify({data:n.bubbles})}
return function(n,e){var t,i,o
const r=null===(t=n.body)||void 0===t?void 0:t.data
if(!r)throw new Error(`No resource identifiers were found for response: '${JSON.stringify(n)}'`)
const l=null===(i=n.body)||void 0===i?void 0:i.resources
if(!l)throw new Error(`No resources were found for response: '${JSON.stringify(n)}'`)
const s=new ur(l,e),a=null!==(o=s.resources(r))&&void 0!==o?o:s.resourcesForType(oo.TastePreferences)
if(!a)throw new Error(`No taste preferences were found in resources: '${JSON.stringify(l)}'`)
const u=P({kind:lo.CatalogPage,intent:{$kind:"ListenNowPageIntent"}},Zo),c=rn([{$kind:"onboardingSaveTastesAction",actionMetrics:Zo},u],Zo)
return{pageMetrics:m(e,n,"unimplemented","Onboarding",s),title:zo.string("FUSE.Onboarding.ChooseArtistsYouLove",e),subtitle:zo.string("FUSE.Onboarding.SelectionsWillInspire.ListenNow",e),secondaryTitle:zo.string("FUSE.Onboarding.ChooseMore",e,{count:"2"}),tertiaryTitle:zo.string("FUSE.Onboarding.ChooseMore",e,{count:"1"}),completionText:zo.string("FUSE.Onboarding.CompletedMessage",e),primaryButtonAction:{$kind:"onboardingShowMoreArtistsAction",actionMetrics:Zo},secondaryButtonAction:c,primaryButtonTitle:zo.string("FUSE.Onboarding.SuggestMore",e),secondaryButtonTitle:zo.string("Done",e),bubbles:a}}(await dn(t,e),e)}},sl={$intentKind:"OnboardingGenrePageIntent",async perform(n,e){F("21D5026",e)||(0,Bo.f3)(_o.subscriptionStatusCoordinator,e).refreshSubscriptionStatus()
const t=new Go("/v1/me/taste/taste-preferences",e)
return function(n,e){var t,i,o
const r=null===(t=n.body)||void 0===t?void 0:t.data
if(!r)throw new Error(`No resource identifiers were found for response: '${JSON.stringify(n)}'`)
const l=null===(i=n.body)||void 0===i?void 0:i.resources
if(!l)throw new Error(`No resources were found for response: '${JSON.stringify(n)}'`)
const s=new ur(l,e),a=null!==(o=s.resources(r))&&void 0!==o?o:s.resourcesForType(oo.TastePreferences)
if(!a)throw new Error(`No taste preferences were found in resources: '${JSON.stringify(l)}'`)
return{pageMetrics:m(e,n,"unimplemented","Onboarding",s),title:zo.string("FUSE.Onboarding.ChooseGenresYouLove",e),subtitle:zo.string("FUSE.Onboarding.SelectionsWillInspire.ListenNow",e),primaryButtonAction:{$kind:"onboardingResetAction",actionMetrics:Zo},secondaryButtonAction:{$kind:"onboardingSaveTastesAction",actionMetrics:Zo},primaryButtonTitle:zo.string("Reset",e),secondaryButtonTitle:zo.string("Next",e),bubbles:a}}(await vn(t,e),e)}},al={$intentKind:"AppsWithAccessPageIntent",async perform(n,e){const t=Ho.getMusicSDKAuthorizationsSrv(e)
if(!t)throw new Error("Bag key: getMusicSDKAuthorizationsSrv was not available")
return function(n,e){const t=bi(),i={id:kn("PageFooterButton","Apps with Access Page",e),title:zo.string("Done",e),segue:t},o=[],r=function(n,e){const t=n.body
if(!t)throw new Error("No response body in AppsWithAccessPageIntentController response")
const i=[],o=zo.string("FUSE.Settings.SDK.AppsAccess.delete.DT",e),r=JSON.parse(t)
if(!r)throw new Error("Unable to parse response body in AppsWithAccessPageIntentController response")
const l=yn("Apps With Access Collection ID",e),s=r.data.attributes.appList
return null==s||s.forEach(n=>{const t=n.id,r=n.name
if(!t||!r)return void Jo.warn(e,"Dropping App with access because of missing id or app name")
const s=kn("Apps with Access Page",t,e),a={$kind:"removeItemAction",sectionIdentifier:l,itemIdentifier:s,actionMetrics:Zo},u=function(n=Zo,e){return{$kind:"removeAppWithAccessAction",actionMetrics:n,appID:e}}(Zo,t),c={id:s,appName:r,appID:t,buttonTitle:o,segue:{$kind:"compoundAction",subactions:[a,u],actionMetrics:Zo}}
i.push(c)}),function(n,e){return{id:n,itemKind:"appsWithAccessComponentModel",displaySeparator:!0,presentation:{kind:"collection",layout:"list"},items:e}}(l,i)}(n,e)
if(r&&r.items.length>0)o.push(r)
else{const n=yn("apps-with-access-empty-header-description",e),t=Ae(n,null,{text:null,textAlignment:$o.Centered,id:kn(n,"find-friends-results-empty-header-description-item",e)})
o.push(t)}return{pageMetrics:{instructions:[{data:{topic:void 0,shouldFlush:!1,fields:{eventType:"page"},includingFields:["pageFields","languages"],excludingFields:[]},invocationPoints:[to.PageInvocationPoint.pageEnter]}],pageFields:{pageType:"Apps witth Access"},custom:{}},sections:o,header:{title:zo.string("FUSE.Settings.SDK.AppsAccess.Header.DT",e),showSeparator:!1},footer:{primaryButton:i}}}(await ki({url:t}),e)}},ul={$intentKind:"RemoveAppWithAccessIntent",async perform(n,e){var t
const i=null!==(t=Ho.revokeMusicSDKAuthorizationSrv(e))&&void 0!==t?t:"https://play.itunes.apple.com/WebObjects/MZPlay.woa/wa/revokeMusicSDKAuthorizationSrv"
if(!i)throw new Error("Bag key: revokeMusicSDKAuthorizationSrv was not available")
const o=JSON.stringify({musicId:n.appID})
return{success:(await ki({url:i,method:"POST",headers:{"Content-Type":"application/json"},body:o})).ok}}},cl={$intentKind:"UpdateNotificationSettingsIntent",async perform(n,e){const t=new Go("/v1/me/account",e),i={attributes:{notificationSettings:{push:{"notifications.music.account.artistsAndShows":n.artistsAndShowsNotifications,"notifications.music.account.friends":n.friendsNotifications}}}},o=JSON.stringify(i)
let r
try{r=await dn({url:t.string,body:o,method:"PATCH"},e)}catch(n){return Jo.error(e,"Failed to update user account notification settings, failing silently. Error: ",n),{success:!0}}const l=r.statusCode
return l&&null!=r.body&&204===l||Jo.error(e,`Failed to update user account notification settings, failing silently. Response body: '${JSON.stringify(r)}'`),{success:!0}}},dl={$intentKind:"LiveRadioSchedulePageIntent",async perform(n,e){const t=new Go(n.href,e)
return t.queryString.shouldIncludeLanguage=!1,t.queryString.artworkURL.add(io.OmitCropCode),t.queryString.addParameters({"include[stations]":"events"}),function(n,e,t){var i,o,r
const l=null===(i=n.body)||void 0===i?void 0:i.data
if(!l||0===l.length)throw new Error("No resource identifiers in radio schedule page response.")
const s=null===(o=n.body)||void 0===o?void 0:o.resources
if(!s)throw new Error("No resource map in radio schedule page response.")
const a=new ur(s,t),u=a.resource(l[0])
if(!u)throw new Error("No station resource in radio schedule page response.")
let c=En(u,a,t)
if(!c||0===c.length)throw new Error("No ordered station events in radio schedule page response.")
c=c.filter(n=>$n(n,t))
const d=function(n,e,t,i,o){const r=[],l=yn(`live-radio-schedule - ${n}`,i)
return e.forEach(n=>{var e,t,o
const s=n.attributes
if(!s)return void Jo.warn(i,`Dropping live radio schedule item with id '${n.id}' and type '${n.type}', missing resource attributes.`)
const a=null===(o=null===(t=null===(e=n.relationships)||void 0===e?void 0:e.curator)||void 0===t?void 0:t.data)||void 0===o?void 0:o[0]
let u,c
a&&(u=$(a,i),u&&(c=E(u,"ShelfItem",null,i))),c||Jo.warn(i,`Station event with id '${n.id}' missing curator, no segue can be constructed.`)
const d=Dn(n,i)?"tintColor":"default",v={id:kn(l,n.id,i),headline:An(n,i),headlineColor:d,title:s.title,subtitle:b(s),artwork:wn(s.artwork,fo.SpecificRectangle),contentDescriptor:u,segue:c,name:s.name}
r.push(v)}),0===r.length?null:{id:l,itemKind:"horizontalLockup",presentation:{kind:"collection",layout:"grid"},header:{kind:"default",item:{title:o}},items:r}}(u,c,0,t,e.title)
if(!d)throw new Error("No section built from radio schedule page response.")
return{pageMetrics:m(t,n,"schedule","Schedule",a),sections:[d],canonicalURL:null===(r=null==u?void 0:u.attributes)||void 0===r?void 0:r.url}}(await vn(t,e),n,e)}},vl={$intentKind:"RefreshLiveRadioShelfItemIntent",async perform(n,e){Jo.log(e,`Refreshing Live Radio Shelf Item for reason "${n.reason}".`)
const t=n.invalidatedItemIDs
if(!t||0===t.length)return Jo.warn(e,"No invalidated item IDs present."),{instruction:{instruction:"noOperation"}}
const i=In(t[0],n.station,n.orderedStationEvents,e)
if(!i)return{instruction:{instruction:"noOperation"}}
const o={instruction:{instruction:"replaceItems",itemKind:"horizontalPosterLockup",items:[i.lockup]}},r=i.invalidationEventTrigger
return r&&(o.invalidationRulesChange={operation:"add",newRules:{eventTriggers:[r]}}),o}},pl={filterEditorialElementKind:(n,e,t)=>n!==po.HeroListShelf||!t.resources(e).some(n=>{var e
return(null===(e=n.attributes)||void 0===e?void 0:e.editorialElementKind)===po.LiveRadioShelf})},fl={$intentKind:"RadioPageIntent",routes:()=>[{rules:[{protocol:"https",path:"radio"}],handler:(n,e)=>({$kind:"RadioPageIntent"})}],async perform(n,e){const t=await async function(n){return Be("radio",n)}(e)
return async function(n,e,t){const i=t.adding(gr,pl),o=await Fe(n,i),r=(0,Bo.f3)(_o.localization,t),l=Ho.countryCode(t),s=Ce(t)?n.expirationDate:null
return{pageMetrics:m(t,n,"grouping","Genre"),sections:o,header:{showAccountButton:!1,title:r.string("FUSE.Radio.Pageheader")},invalidationRules:Re(e,!0,s),canonicalURL:`https://music.apple.com/${encodeURIComponent(l)}/radio`}}(t,n,e)},actionFor(n,e,t){var i
const o=null!==(i=t.metrics)&&void 0!==i?i:p(e,"0","unknown","navigate"),r=P({kind:lo.CatalogPage,intent:n},o)
return t.isDeepLinkAction?rn([tn({kind:uo.Radio},Zo,e),oi(Zo)],Zo):r}},ml={$intentKind:"RefreshRecentlyPlayedRadioIntent",async perform(n,e){Jo.log(e,`Refreshing Recently Played Radio for reason "${n.reason}".`)
const t=await hn(e)
if(!t)return{instruction:{instruction:"noOperation"}}
const i=Ee(t,n.id,e,n.title)
if(!i)throw new Error("Couldn't create recently played radio section.")
return{instruction:{instruction:"replaceSection",newSection:i}}}},hl={$intentKind:"RadioStationPlaybackIntent",routes:()=>[{rules:[{protocol:"https",hostName:"music.apple.com",path:"/{cc}/station/{id}"},{protocol:"https",hostName:"itunes.apple.com",path:"/{cc}/station/{id}"},{protocol:"https",hostName:"music.apple.com",path:"/{cc}/station/{name}/{id}"},{protocol:"https",hostName:"itunes.apple.com",path:"/{cc}/station/{name}/{id}"},{protocol:"https",hostName:"itunes.apple.com",path:"/WebObjects/MZStore.woa/wa/viewRadioStation",query:["id","cc"]},{protocol:"https",hostName:"music.apple.com",path:"/WebObjects/MZStore.woa/wa/viewRadioStation",query:["id","cc"]}],handler:(n,e)=>{const t=e.id
return{$kind:"RadioStationPlaybackIntent",contentDescriptor:{kind:no.RadioStation,identifiers:{storeAdamID:t}}}}}],async perform(n,e){const t=Y(n.contentDescriptor,e)
if(!t)throw new Error(`Unable to create play action from radio playback intent: ${JSON.stringify(n)}`)
return t},actionFor:(n,e,t)=>Y(n.contentDescriptor,e)}
!function(n){n.TopResults="top",n.Artist="artist",n.Album="album",n.Song="song",n.Curator="curator",n.Category="category",n.Playlist="playlist",n.Profile="profile",n.RadioEpisode="radio_episode",n.RadioShow="radio_show",n.RecordLabel="record_label",n.Station="station",n.MusicVideo="music_video",n.VideoExtra="video_extra"}(Fo||(Fo={})),function(n){n[n.Playback=0]="Playback",n[n.Navigation=1]="Navigation"}(Uo||(Uo={}))
const gl={$intentKind:"RefreshRecentSearchesIntent",async perform(n,e){const t=await Fi(e)
return t?{instruction:{instruction:"replaceSection",newSection:t}}:{instruction:{instruction:"discardSection"}}}},wl={$intentKind:"SearchLandingPageIntent",routes:()=>[{rules:[{protocol:"https",path:"/{cc}/search",exclusions:[{query:["term"]}]}],handler:(n,e)=>({$kind:"SearchLandingPageIntent"})}],async perform(n,e){const t=Ho.countryCode(e),i=new Go(`/v1/recommendations/${t}`,e)
i.queryString.addParameters({name:"search-landing"}),i.queryString.extend.add("editorialArtwork"),i.queryString.artworkURL.add(io.OmitCropCode).add(io.OmitFileExtension),i.queryString.types.add(oo.Activities).add(oo.AppleCurators).add(oo.EditorialItems)
const o=await dn({url:i.string},e)
return await async function(n,e){const t=[]
let i="SearchLanding"
const o=await Fi(e)
o&&(o.items.length>0&&(i="Recent"),t.push(o))
const r=function(n,e){var t,i
const o=null===(t=n.body)||void 0===t?void 0:t.data
if(!o||0===o.length)throw new Error("No resource identifiers in Listen Now response")
const r=null===(i=n.body)||void 0===i?void 0:i.resources
if(!r)throw new Error("No resource map in Listen Now response")
const l=[]
let s
return o.forEach(n=>{var t,i,o
const a=null===(t=r[n.type])||void 0===t?void 0:t[n.id]
if(!a)return void Jo.warn(e,`Search Landing page response missing resource for id "${n.id}".`)
const u=null===(o=null===(i=a.attributes)||void 0===i?void 0:i.display)||void 0===o?void 0:o.kind
switch(u){case No.NamedBrickShelf:{const n=function(n,e,t){var i,o,r
const l=n.attributes,s=null===(i=null==l?void 0:l.title)||void 0===i?void 0:i.stringForDisplay,a=null===(r=null===(o=n.relationships)||void 0===o?void 0:o.contents)||void 0===r?void 0:r.data,u=[]
return null==a||a.forEach(n=>{var i
const o=null===(i=e[n.type])||void 0===i?void 0:i[n.id]
if(!o)return void Jo.warn(t,`Missing resource ${n.type} ${n.id} for recommendation item.`)
const r=function(n,e){var t,i
const o=n.attributes
if(!o)return null
const r=null===(t=null==o?void 0:o.editorialArtwork)||void 0===t?void 0:t.subscriptionHero
if(!(null==r?void 0:r.url))return Jo.warn(e,`Missing artwork for resource id ${n.id}`),null
const l=S(n,e),s=Qn(l,n,"Category",e)
let a
switch(n.type){case oo.AppleCurators:a=null==o?void 0:o.shortName
break
case oo.EditorialItems:a=null===(i=null==o?void 0:o.editorialNotes)||void 0===i?void 0:i.name
break
case oo.Activities:a=null==o?void 0:o.name
break
default:Jo.warn(e,`"${n.type}" resource type unsupported, dropping personal recommendation item with id "${n.id}".`)}return{id:kn("brick-lockup",n.id,e),artwork:wn(r),title:a,contentDescriptor:l,segue:s,name:null==o?void 0:o.name}}(o,t)
r&&u.push(r)}),{brickLockups:u,title:s}}(a,r,e)
n&&(l.push(...n.brickLockups),s||(s=null==n?void 0:n.title))
break}default:Jo.warn(e,`Unsupported display kind "${u}". Dropping personal recommendation.`)}}),l.length?{id:yn("browse-category-bricks",e),itemKind:"brickLockup",presentation:{kind:"collection",layout:"grid"},items:l,header:{kind:"default",item:{title:s}},style:"regular"}:(Jo.warn(e,`No brick lockups were generated for response: '${JSON.stringify(n)}'`),null)}(n,e)
return r&&t.push(r),{pageMetrics:m(e,n,"search","Search",null,i,W(n.body,e)),sections:t,invalidationRules:Re({$kind:"SearchLandingPageIntent"},!0,n.expirationDate)}}(o,e)},actionFor(n,e,t){const i=P({kind:lo.CatalogPage,intent:n},t.metrics)
if(!t.isDeepLinkAction)return i
const o=P({kind:lo.NavigationControllerRootPage},t.metrics)
return rn([tn({kind:uo.Search},Zo,e),o],Zo)}},bl={$intentKind:"SearchResultsPageIntent",routes:()=>[{rules:[{protocol:"https",path:"/{cc}/search",query:["term"]}],handler:(n,e)=>({$kind:"SearchResultsPageIntent",term:e.term})}],async perform(n,e){var t,i,o,r,l
const s=(_(e)?$i(n.term,e):Promise.resolve(null)).catch(n=>(Jo.error(e,"Social search failed",n),null)),[a,u]=await Promise.all([s,Si(n.term,e)]),c=u.body,d=null==a?void 0:a.body,v=new ur(null===(t=u.body)||void 0===t?void 0:t.resources,e)
v.addResourceMap(null==d?void 0:d.resources,e),(null==c?void 0:c.results)&&(c.results[Fo.Playlist]=Ui(Fo.Playlist,c,d),c.results[Fo.Profile]=Ui(Fo.Profile,c,d),c.results[Fo.TopResults]=Ui(Fo.TopResults,c,d))
const p=null!==(r=null===(o=null===(i=null==c?void 0:c.meta)||void 0===i?void 0:i.results)||void 0===o?void 0:o.order)&&void 0!==r?r:[]
return(null==d?void 0:d.results)&&((null==d?void 0:d.results[Fo.Profile])&&p.push(Fo.Profile),(null==d?void 0:d.results[Fo.Playlist])&&-1===p.indexOf(Fo.Playlist)&&p.push(Fo.Playlist)),(null===(l=null==c?void 0:c.meta)||void 0===l?void 0:l.results)&&(c.meta.results.order=p),function(n,e,t,i){var o,r
const l=null===(r=null===(o=null==e?void 0:e.meta)||void 0===o?void 0:o.results)||void 0===r?void 0:r.order,s=[]
null==l||l.forEach(o=>{const r=Ii(n,o,e,!1,t,i)
r&&s.push(r)})
const a=s.length>0
s.length||s.push(...function(n,e){const t=yn("search-results-empty-header",e),i=lt(t,{title:zo.string("SF.NoResultsFoundForTerm",e,{searchTerm:n}),contentDescriptor:null,hideContextMenuButton:!0,textAlignment:$o.Centered,id:kn(t,"search-results-empty-header-item",e)},!1),o=yn("search-results-empty-header-description",e)
return[i,Ae(o,null,{text:zo.string("FUSE.Error.TryAgain",e),textAlignment:$o.Centered,id:kn(o,"search-results-empty-header-description-item",e)})]}(n,i))
const u=Ho.countryCode(i),c=new Go(`/v1/catalog/${u}/search`,i)
c.queryString.addParameters({term:n,limit:"21"})
const d={dataSetId:e.meta.metrics.dataSetId,pageDetails:{hasResults:a},searchTerm:n,pageUrl:c.string}
return{pageMetrics:m(i,e,"search_results","Search",t,"searchResultsMain",d),sections:s}}(n.term,c,v,e)},actionFor(n,e,t){const i=P({kind:lo.SearchResults,searchParameters:{term:n.term}},t.metrics)
return t.isDeepLinkAction?rn([tn({kind:uo.Search},Zo,e),i],Zo):i}},kl={$intentKind:"SearchResultsSeeAllPageIntent",async perform(n,e){var t,i,o
let r
r=n.type===Fo.Profile?await $i(n.term,e):await Si(n.term,e)
const l=null===(t=null==r?void 0:r.body)||void 0===t?void 0:t.resources
if(!l)throw new Error("No resource map in Search Results See All Response")
const s=new ur(l,e),a=Ii(n.term,n.type,r.body,!0,s,e),u=[]
let c
const d=null===(o=null===(i=r.body.results)||void 0===i?void 0:i[n.type.toString()])||void 0===o?void 0:o.next
return a&&d&&(c={$kind:"SearchResultsSeeAllPaginateIntent",term:n.term,groups:n.type,next:d},u.push(a)),{header:ii(u,n.title),pageMetrics:m(e,r,"see_all","SeeAll"),sections:u,nextIntent:c}}},yl={$intentKind:"SearchResultsSeeAllPaginateIntent",async perform(n,e){var t,i,o
if(n.groups===Fo.Profile)return Promise.reject()
const r=new Go(n.next,e)
r.queryString.artworkURL.add(io.OmitFileExtension),r.queryString.addParameters({"relate[songs]":"albums","relate[albums]":"artists","fields[artists]":"url,name,artwork","fields[albums]":"artistName,artistUrl,artwork,contentRating,editorialArtwork,editorialNotes,name,playParams,releaseDate,url,trackCount","omit[resource]":"autos",limit:"21","include[songs]":"artists","include[editorial-items]":"contents","relate[editorial-items]":"contents"}),r.queryString.with.add("serverBubbles").add("lyrics"),r.queryString.extend.add("artistUrl"),[oo.Activities,oo.Albums,oo.AppleCurators,oo.Artists,oo.Curators,oo.MusicMovies,oo.MusicVideos,oo.Playlists,oo.Songs,oo.Stations,oo.TVEpisodes,oo.UploadedVideos].forEach(r.queryString.types.add,r.queryString.types)
const l=await dn({url:r.string,method:"GET"},e),s=null===(t=l.body)||void 0===t?void 0:t.resources
if(!s)throw new Error("No resource map in Search Results See All Response")
const a=new ur(s,e),u=Ii(n.term,n.groups,l.body,!0,a,e)
if(u){const e={pageChangeInstruction:{instruction:{instruction:"addItemsToSection",newSectionToAppendItemsFrom:u}}},t=null===(o=null===(i=l.body)||void 0===i?void 0:i.results)||void 0===o?void 0:o[n.groups.toString()].next
if(t){const i=n
i.next=t,e.nextIntent=i}return Promise.resolve(e)}return Promise.reject()}},Sl={$intentKind:"CopyEmbeddedCodeShareIntent",async perform(n,e){const t=function(n){var e,t
const i={height:"450",width:"660"}
if(!$l.test(n))throw new Error("Invalid content url")
const o=null===(e=n.match(Al))||void 0===e?void 0:e[2],r=new ao.URL(n);("song"===o||(null===(t=r.query)||void 0===t?void 0:t.i))&&(i.height="150"),i.height=`${i.height}`.replace(/(\d+)px/i,"$1"),i.width=`${i.width}`.replace(/^(\d+)(?!px)%?$/i,"$1px")
const l=`width:100%;max-width:${i.width};overflow:hidden;background:transparent;`
return`<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="${i.height}" style="${l}" sandbox="${Dl.join(" ")}" src="${n.replace($l,"https://embed.music.apple.com")}"></iframe>`}(n.url)
return Promise.resolve(t)}},$l=/^http(?:s)?\:\/\/(?:itunes|(embed\.)?(music|podcast))\.apple\.com/i,Dl=["allow-forms","allow-popups","allow-same-origin","allow-scripts","allow-storage-access-by-user-activation","allow-top-navigation-by-user-activation"],Al=/\/([a-z]{2})\/(album|artist|music-video|playlist|podcast|song|station)\/(?:[^\/]*\/)?(?:id)?(\d+|[a-z]{2}\.[a-z0-9\-]+)(?:.*(?:[\?|\&]i=(\d+)).*)?.*$/i,Pl={$intentKind:"FetchSocialProfilesIntent",async perform(n,e){if(!n.identifiers.length)return Promise.reject(`Missing social profile identifiers for intent: ${JSON.stringify(n)}`)
const t=function(n,e){const t=[]
let i=0
const o=n.length
for(;i<o;)t.push(n.slice(i,i+=100))
return t}(n.identifiers).map(n=>async function(n,e){var t,i
const o=Ho.countryCode(e),r=new Go(`/v1/social/${o}/social-profiles`,e)
r.queryString.artworkURL.add(io.OmitCropCode),r.queryString.addParameters({ids:n.join(",")}),r.queryString.extend.add("followState")
const l=await vn(r,e),s=null===(t=l.body)||void 0===t?void 0:t.data
if(!s||0===s.length)throw new Error("No resource identifiers in Social Profile page response")
const a=null===(i=l.body)||void 0===i?void 0:i.resources
if(!a)throw new Error("No resource map in Social Profile page response")
const u={}
return pn(l)||new ur(a,e).resourcesForType(oo.SocialProfiles).forEach(n=>{var e
const t=n.id,i=null===(e=n.attributes)||void 0===e?void 0:e.followState
t&&i&&u&&(u[t]=i)}),u}(n,e)),i={}
return await Promise.all(t).then(n=>{n.forEach(n=>{Object.assign(i,n)})}),{followStateMap:i}}},El={$intentKind:"SocialBadgingMapIntent",async perform(n,e){var t,i,o,r
const l=new Go("/v1/social/badging-map",e),s=!0===n.shouldIgnoreCache?"no-cache":"default",a=await dn({url:l.string,method:"GET",cache:s},e),u=a.expirationDate
if(!u)return Promise.reject("Failed to fetch badging map.  Missing expiration date from response headers")
const c=null===(i=null===(t=a.body)||void 0===t?void 0:t.meta)||void 0===i?void 0:i.versionHash
if(!c)return Promise.reject("Failed to fetch badging map.  Missing version hash from response body")
const d=null===(r=null===(o=a.body)||void 0===o?void 0:o.results)||void 0===r?void 0:r.badgingMap
return d?{expirationDate:u,versionHash:c,contents:d}:Promise.reject(`Failed to fetch badging map.  Missing badging map contents from response: '${JSON.stringify(a.body)}'`)}}
!function(n){n[n.unknown=0]="unknown",n[n.success=202]="success",n[n.incorrectAuthenticationHeader=401]="incorrectAuthenticationHeader",n[n.incorrectAuthentication=403]="incorrectAuthentication",n[n.conflict=409]="conflict",n[n.serverError=500]="serverError"}(Co||(Co={})),function(n){n.Accept="accept",n.Reject="reject"}(Lo||(Lo={}))
const Ol={$intentKind:"BlockRequestIntent",async perform(n,e){const t=new Go("/v1/me/social/profile/blocked-profiles",e),i={data:[{id:n.socialProfileID,type:oo.SocialProfiles}]},o=JSON.stringify(i),r=(await dn({url:t.string,body:o,method:"POST"},e)).statusCode
return{responseCode:null!=r?r:Co.unknown}}},Il={$intentKind:"CancelFollowRequestIntent",async perform(n,e){const t=new Go("/v1/me/social/profile/pending-followees",e),i={data:[{id:n.socialProfileID,type:oo.SocialProfiles}]},o=JSON.stringify(i),r=(await dn({url:t.string,body:o,method:"DELETE"},e)).statusCode
return{responseCode:null!=r?r:Co.unknown}}},Nl={$intentKind:"FollowRequestIntent",async perform(n,e){const t=new Go("/v1/me/social/profile/followees",e),i={data:n.socialProfileIDs.map(n=>({id:n,type:oo.SocialProfiles}))},o=JSON.stringify(i),r=(await dn({url:t.string,body:o,method:"POST"},e)).statusCode
return{responseCode:null!=r?r:Co.unknown}}},Fl={$intentKind:"FollowRequestResponseIntent",async perform(n,e){const t=n.followResponseAction,i=t===Lo.Accept?"/v1/me/social/profile/followers":"/v1/me/social/profile/pending-followers",o=t===Lo.Accept?"POST":"DELETE",r=new Go(i,e),l={data:[{id:n.socialProfileID,type:oo.SocialProfiles}]},s=JSON.stringify(l),a=(await dn({url:r.string,body:s,method:o},e)).statusCode
return{responseCode:null!=a?a:Co.unknown}}}
!function(n){n.Following="following",n.NotFollowing="notFollowing",n.Requested="requested",n.Blocked="blocked",n.BlockedBy="blockedBy",n.Self="self"}(Mo||(Mo={}))
const Ul={$intentKind:"SocialProfilePageIntent",routes:()=>[{rules:[{protocol:"https",path:"/{cc}/profile/{handle}"},{protocol:"https",path:"/profile/{handle}"}],handler:(n,e)=>g(e.handle)}],async perform(n,e){var t,i
Jo.log(e,`Social profile page ${null===(t=n.contentDescriptor)||void 0===t?void 0:t.identifiers.socialProfileID} ${n.handle}`)
let o=null===(i=n.contentDescriptor)||void 0===i?void 0:i.identifiers.socialProfileID,r=n.isOwner
const l=n.handle
if(l){const n=await Ti(l,e)
n&&(o=n.socialProfileID,r=n.isOwner)}let s=new Go("/v1/me/social/profile",e)
if(!r&&o){const n=Ho.countryCode(e)
s=new Go(`/v1/social/${n}/social-profiles`,e),s.queryString.addParameters({ids:o,include:"followers,followees,shared-playlists,listening-to"}),s.queryString.extend.add("followState")}else s.queryString.addParameters({include:"followers,followees,pending-followers,shared-playlists,listening-to"}),s.queryString.extend.add("pendingFollowersCount").add("followState")
return s.queryString.shouldIncludeTimezoneOffset=!1,function(n,e,t){var i,o,r,l
const s=null===(i=n.body)||void 0===i?void 0:i.data
if(!s||0===s.length)throw new Error("No resource identifiers in Social Profile page response")
const a=null===(o=n.body)||void 0===o?void 0:o.resources
if(!a)throw new Error("No resource map in Social Profile page response")
const u=s[0],c=null===(r=a[u.type])||void 0===r?void 0:r[u.id]
if(!c)throw new Error("No resource identifier for Social Profile in page response")
const d=null===(l=c.attributes)||void 0===l?void 0:l.followState,v=e.isOwner||d===Mo.Self
let p=null
!pn(n)&&d&&(p={},new ur(a,t).resourcesForType(oo.SocialProfiles).forEach(n=>{var e
const t=n.id,i=null===(e=n.attributes)||void 0===e?void 0:e.followState
t&&i&&p&&(p[t]=i)}))
const f=[],h=function(n,e,t){var i,o,r
const l=[],s=null!==(o=null===(i=n.attributes)||void 0===i?void 0:i.pendingFollowersCount)&&void 0!==o?o:0,a=null===(r=n.relationships)||void 0===r?void 0:r["pending-followers"]
if(s>0&&a&&a.data){new ur(e,t).resources(a.data).forEach(n=>{const e=S(n,t)
e&&l.push(e)})
const i={id:kn("Social Profile Page","view-follower-requests-header",t),pendingRequestCount:s,pendingFollowers:l}
return{id:yn(`view-follower-requests-header - ${n.id}`,t),itemKind:"socialProfileViewFollowRequestsHeader",presentation:{kind:"single"},items:[i]}}return null}(c,a,t)
h&&f.push(h)
const g=function(n,e,t){const i=function(n,e,t){const i=n.attributes
if(!i)return void Jo.warn(t,`Dropping header in social profile with id "${n.id}", missing attributes data.`)
const o=S(n,t)
return{id:kn("SocialProfileDetailHeader",n.id,t),artwork:wn(i.artwork,fo.SpecificRectangle),contentDescriptor:o,title:i.name,handle:i.handle,isPrivate:i.isPrivate,isVerified:i.isVerified}}(n,0,t)
return i?{id:yn(`social-profile-header-section - ${n.id}`,t),itemKind:"socialProfileDetailHeaderLockup",presentation:{kind:"single"},items:[i]}:void Jo.warn(t,`Could not generate social profile lockup with id "${n.id}"`)}(c,0,t)
if(!g)throw new Error("Unable to create Social Profile page header.")
f.push(g)
const w=function(n,e,t,i){const o=[],r=n.attributes,l=n.relationships,s=(0,Bo.f3)(_o.localization,i)
if(l){const r=l["shared-playlists"]
if(r&&r.data){const t=Ri(n,r,s.string("FUSE.Social.Playlist"),"shared-playlists",!1,!1,e,i)
t&&o.push(t)}const a=l["listening-to"]
if(a&&a.data){const t=Ri(n,a,s.string("FUSE.Social.ListeningTo"),"listening-to",!0,!0,e,i)
t&&o.push(t)}const u=l.followers
if(u&&u.data){const r=Li(n,u,s.string("FUSE.Social.Followers"),"followers",t,e,i)
r&&o.push(r)}const c=l.followees
if(c&&c.data){const r=Li(n,c,s.string("FUSE.Social.Following"),"following",t,e,i)
r&&o.push(r)}}if(!t&&0===o.length&&r&&r.isPrivate){const e=Ae(yn(`Private profile paragraph section - ${n.id}`,i),null,{id:kn("Private Profile Paragraph description",n.id,i),text:s.string("FUSE.Social.AwaitingApproval.Description"),textAlignment:$o.Centered})
o.push(e)}return o}(c,a,v,t)
let b
return f.push(...w),e.isOwner&&f.push(function(n,e){const t=xe({kind:lo.CatalogPage,intent:{$kind:"SocialOnboardingFindFriendsPageIntent",ignoreSocialOnboardingFlow:!0}},Zo)
return{id:n,itemKind:"socialProfileFindFriendsButtonComponentModel",presentation:{kind:"single"},items:[{id:kn(n,"Find More Friends Button",e),buttonTitle:zo.string("FUSE.Social.Onboarding.FindandFollow.Button.FindMore",e),segue:t}]}}(yn(c.id,t),t)),v&&(b=[{events:[{name:"socialGraphChange"}],intent:Le(e,"Social Graph Changed")}]),{pageMetrics:m(t,n,"social_profile","SocialProfile"),sections:f,invalidationRules:{eventTriggers:b},followStateMap:p}}(await dn({url:s.string,cache:n.isOwner?"no-cache":"default"},e),n,e)},actionFor(n,e,t){const i=P({kind:lo.CatalogPage,intent:n},t.metrics)
return t.isDeepLinkAction?rn([tn({kind:uo.ListenNow},Zo,e),i],Zo):i}},Cl={$intentKind:"CheckSocialHandleAvailabilityIntent",async perform(n,e){var t
const i=await Ti(n.userHandle,e)
if((0,Ko.isSome)(i)){const n=new Go("/v1/me/social/suggested-handles",e),i=(await vn(n,e)).body
if(!i)throw new Error("No response body in suggested handle request")
const o=i.results
return{userHandleAvailable:!1,suggestedHandle:null===(t=null==o?void 0:o.suggestedHandles)||void 0===t?void 0:t[0]}}return{userHandleAvailable:!0}}},Ll={$intentKind:"SocialOnboardingFindFriendsPageIntent",async perform(n,e){var t
const i=(0,Bo.f3)(_o.findFriendsContactsProvider,e),o=null!==(t=n.ignoreSocialOnboardingFlow)&&void 0!==t&&t
try{const n=await i.contactsDictionary()
return Promise.resolve(Ji(n,o,e))}catch(n){return Jo.error(e,"findFriendsContactsProvider.contactsDictionary failed. Error details: ",n),Promise.resolve(Ji([],o,e))}}},Ml={$intentKind:"SocialOnboardingNotificationSettingsPageIntent",async perform(n,e){var t
const i=new Go("/v1/me/account",e)
i.queryString.extend.add("notificationSettings")
const o=await vn(i,e),r=null!==(t=n.ignoreSocialOnboardingFlow)&&void 0!==t&&t
return Promise.resolve(function(n,e,t){var i,o,r,l,s,a,u,c,d,v
const p=(0,Bo.f3)(_o.localization,t),f=function(n=Zo){return{$kind:"updateNotificationSettingsAction",actionMetrics:n}}(),m=function(n=Zo){return{$kind:"completeSocialOnboardingAction",actionMetrics:n}}(),h=bi()
let g
if(e)g=rn([f,h],Zo)
else{const n={$kind:"SocialProfilePageIntent",isOwner:!0}
g=rn([f,m,h,P({kind:lo.CatalogPage,intent:n},Zo)],Zo)}const w={id:kn("PageFooterButton","Social Onboarding Notification Settings Page - Primary Button",t),title:p.string("Done"),segue:g},b=null===(o=null===(i=n.body)||void 0===i?void 0:i.data)||void 0===o?void 0:o[0]
if(!b)throw new Error("No resource identifier provided from /v1/me/account response")
const k=null===(r=n.body)||void 0===r?void 0:r.resources
if(!k)throw new Error("No resourceMap provided from /v1/me/account response")
const y=null===(l=k[oo.Accounts])||void 0===l?void 0:l[b.id]
if(!y)throw new Error("No accounts resource type found in resource provided for /v1/me/account response")
const S=y.attributes
S||Jo.warn(t,`No user account data provided from /v1/me/account response: ${JSON.stringify(n)}`)
const $=[],D={id:kn("SocialOnboardingNotificationSettingsPage","me",t),friendActivity:null!==(u=null===(a=null===(s=null==S?void 0:S.notificationSettings)||void 0===s?void 0:s.push)||void 0===a?void 0:a["notifications.music.account.friends"])&&void 0!==u&&u,artistsAndShows:null!==(v=null===(d=null===(c=null==S?void 0:S.notificationSettings)||void 0===c?void 0:c.push)||void 0===d?void 0:d["notifications.music.account.artistsAndShows"])&&void 0!==v&&v,notificationDisclaimer:p.string("FUSE.Notifications.NextAppLaunch.Disclaimer")}
return $.push(function(n){return{id:n.id,itemKind:"socialOnboardingNotificationSettingsPageLockup",presentation:{kind:"single"},items:[n]}}(D)),{pageMetrics:{instructions:[{data:{topic:void 0,shouldFlush:!1,fields:{eventType:"page"},includingFields:["pageFields","languages"],excludingFields:[]},invocationPoints:[to.PageInvocationPoint.pageEnter]}],pageFields:{pageType:"Social Onboarding - Get updates you care about"},custom:{}},sections:$,header:{title:p.string("FUSE.Social.Onboarding.GetNotifications.Header"),showSeparator:!1},footer:{primaryButton:w}}}(o,r,e))}},Rl={$intentKind:"SocialOnboardingPrivacySettingsPageIntent",async perform(n,e){var t
const i=null!==(t=n.ignoreSocialOnboardingFlow)&&void 0!==t&&t,o=new Go("/v1/me/social/profile",e)
return function(n,e,t){var i,o,r,l,s,a,u
const c=null===(i=n.body)||void 0===i?void 0:i.data
if(!c||0===c.length)throw new Error("No resource identifiers in Social Onboarding page response")
const d=null===(o=n.body)||void 0===o?void 0:o.resources
if(!d)throw new Error("No resource map in Social Onboarding page response")
const v=c[0],p=null===(r=d[v.type])||void 0===r?void 0:r[v.id]
if(!p)throw new Error("No resource identifier for Social Onboarding in page response")
const f=p.attributes
if(!f)throw new Error("No attributes for Social Onboarding in page response")
const m=[],h=null!==(l=f.isPrivate)&&void 0!==l&&l,g=null!==(s=f.isDiscoverableByContact)&&void 0!==s&&s,w=null!==(a=f.isContactCheckAllowed)&&void 0!==a&&a,b={id:kn("SocialOnboardingPrivacySettingsPageLockup",p.id,t),isPrivate:h,isDiscoverableByContact:g,isContactCheckAllowed:w,shouldDisplayUserSettings:!e,everyoneButtonText:zo.string("FUSE.Social.Profile.ShareWith.Everyone.Header",t),peopleYouApproveButtonText:zo.string("FUSE.Social.Profile.ShareWith.Restricted.header",t)}
if(!b)throw new Error("Unable to create Social Onboarding Privacy Settings Lockup.")
let k
if(m.push({id:(u=b).id,itemKind:"socialOnboardingPrivacySettingsPageLockup",presentation:{kind:"single"},items:[u]}),e)k=rn([qi(),bi()],Zo)
else{const n={$kind:"SocialOnboardingSharedPlaylistsPageIntent"}
k=P({kind:lo.CatalogPage,intent:n},Zo)}const y={id:kn("PageFooterButton","Social Onboarding Shared Playlist Page - Primary Button",t),title:e?zo.string("Done",t):zo.string("Next",t),segue:k}
let S
return e||(S={id:kn("PageFooterButton","Social Onboarding Shared Playlist Page - Secondary Button",t),title:zo.string("Back",t),segue:Ki()}),{pageMetrics:{instructions:[{data:{topic:void 0,shouldFlush:!1,fields:{eventType:"page"},includingFields:["pageFields","languages"],excludingFields:[]},invocationPoints:[to.PageInvocationPoint.pageEnter]}],pageFields:{pageType:"Social Onboarding - Choose who can follow you"},custom:{}},sections:m,header:{title:e?zo.string("FUSE.Settings.FindFriends.DT.Header",t):zo.string("FUSE.Social.Onboarding.HowYouShare.Header",t),showSeparator:!1},footer:{primaryButton:y,secondaryButton:S}}}(await dn({url:o.string},e),i,e)}},Bl={$intentKind:"SocialOnboardingSharedPlaylistsPageIntent",async perform(n,e){const t=new Go("/v1/me/social/profile",e)
return t.queryString.addParameters({include:"shareable-playlists"}),function(n,e){var t,i,o
const r=null===(t=n.body)||void 0===t?void 0:t.data
if(!r||0===r.length)throw new Error("No resource identifiers in Social Profile page response")
const l=null===(i=n.body)||void 0===i?void 0:i.resources
if(!l)throw new Error("No resource map in Social Profile page response")
const s=r[0],a=null===(o=l[s.type])||void 0===o?void 0:o[s.id]
if(!a)throw new Error("No resource identifier for Social Profile in page response")
const u=a.id,c=(0,Bo.f3)(_o.localization,e),d=[],v=a.relationships
if(v){const n=v["shareable-playlists"]
if(n&&n.data&&n.data.length>0){const t=function(n,e,t,i){const o=e.data
if(!o)return void Jo.warn(i,`Dropping shared playlists in social profile onboarding page with id "${n}", missing views data.`)
const r=[]
return new ur(t,i).resources(o).forEach(e=>{var t,o,l,s
const a=S(e,i),u={id:kn(n,e.id,i),artwork:wn(null===(t=e.attributes)||void 0===t?void 0:t.artwork,fo.BoundedBox),title:null===(o=e.attributes)||void 0===o?void 0:o.name,isPublic:null!==(s=null===(l=e.attributes)||void 0===l?void 0:l.isPublic)&&void 0!==s&&s,contentDescriptor:a}
u&&r.push(u)}),0===r.length?null:function(n,e){return{id:n,itemKind:"socialOnboardingSharedPlaylistLockup",displaySeparator:!0,presentation:{kind:"collection",layout:"list"},items:e}}(n,r)}(u,n,l,e)
t&&d.push(t)}else{const n=yn("no-shared-playlists-header-description",e),t=Ae(n,null,{text:c.string("FUSE.Social.Onboarding.SharePlaylists.NoPlaylists"),textAlignment:$o.Centered,id:kn(n,"find-friends-results-empty-header-description-item",e)})
d.push(t)}}const p=P({kind:lo.CatalogPage,intent:{$kind:"SocialOnboardingNotificationSettingsPageIntent"}},Zo),f={id:kn("PageFooterButton","Social Onboarding Shared Playlists Page - Primary Button",e),title:c.string("Next"),segue:p},m=Ki(),h={id:kn("PageFooterButton","Social Onboarding Shared Playlists Page - Secondary Button",e),title:c.string("Back"),segue:m},g=function(n=Zo){return{$kind:"hideAllPlaylistsAction",actionMetrics:n}}(),w=ae(kn("Hide All Button","me",e),c.string("FUSE.Social.Onboarding.SharePlaylists.HideAll"),g)
return{pageMetrics:{instructions:[{data:{topic:void 0,shouldFlush:!1,fields:{eventType:"page"},includingFields:["pageFields","languages"],excludingFields:[]},invocationPoints:[to.PageInvocationPoint.pageEnter]}],pageFields:{pageType:"Social Onboarding - Show off your playlists"},custom:{}},sections:d,header:{title:c.string("FUSE.Social.Onboarding.SharePlaylists.Header"),showSeparator:!1,trailingAccessoryButton:w},footer:{primaryButton:f,secondaryButton:h}}}(await dn({url:t.string},e),e)}},Tl={$intentKind:"SocialOnboardingUserNameHandlePageIntent",perform:(n,e)=>Promise.resolve(function(n){const e=(0,Bo.f3)(_o.localization,n),t=[],i=P({kind:lo.CatalogPage,intent:{$kind:"SocialOnboardingFindFriendsPageIntent"}},Zo),o={id:kn("PageFooterButton","Social Onboarding User Name and Handle Page",n),title:e.string("FUSE.Social.FindContacts.CTA"),segue:i},r="SocialOnboarding.userNameAndHandle",l={id:(s={id:kn("SocialOnboardingUserNameHandlePageLockup","me",n),editingScopeIdentifier:r}).id,itemKind:"socialOnboardingUserNameHandlePageLockup",presentation:{kind:"single"},items:[s]}
var s
t.push(l)
const a=bi(),u=ae(kn("Not Now Button","me",n),e.string("FUSE.NotNow"),a)
return{pageMetrics:{instructions:[{data:{topic:void 0,shouldFlush:!1,fields:{eventType:"page"},includingFields:["pageFields","languages"],excludingFields:[]},invocationPoints:[to.PageInvocationPoint.pageEnter]}],pageFields:{pageType:"Social Onboarding - Help others find you"},custom:{}},sections:t,header:{title:e.string("FUSE.Social.Onboarding.FindYou.Header"),showSeparator:!1,trailingAccessoryButton:u},footer:{primaryButton:o,editingScopeIdentifier:r}}}(e))},xl={$intentKind:"StartSocialOnboardingActionIntent",async perform(n,e){const t=Ho.countryCode(e),i=new Go(`/v1/social/${t}/onboarding-upsell`,e)
return i.queryString.shouldIncludeFormatResourcesMap=!1,function(n,e){var t,i,o
const r=null===(i=null===(t=n.body)||void 0===t?void 0:t.results)||void 0===i?void 0:i.upsell
if(!r)throw new Error("No resource identifiers in Social Onboarding Welcome Page response")
const l=r.attributes
if(!l)throw new Error("No attributes dictionary in Social Onboarding Welcome Page response")
const s=l.artwork
if(!s)throw new Error("No artwork dictionary in Social Onboarding Welcome Page response")
const a=[],u=P({kind:lo.CatalogPage,intent:{$kind:"SocialOnboardingUserNameHandlePageIntent"}},Zo),c={id:kn("PageFooterButton","Start Social Onboarding Page - Primary Button",e),title:l.action,segue:u},d={id:kn("SocialOnboardingWelcomePageLockup",r.id,e),artwork:wn(s,fo.BoundedBox),title:l.title,descriptionText:l.description}
if(!d)throw new Error(`Could not generate social onboarding welcome page with id "${r.id}"`)
const v={id:(o=d).id,itemKind:"socialOnboardingWelcomePageLockup",presentation:{kind:"single"},items:[o]}
return a.push(v),{pageMetrics:{instructions:[{data:{topic:void 0,shouldFlush:!1,fields:{eventType:"page"},includingFields:["pageFields","languages"],excludingFields:[]},invocationPoints:[to.PageInvocationPoint.pageEnter]}],pageFields:{pageType:"Social Onboarding - Music + Friends",pageId:r.id},custom:{}},sections:a,footer:{primaryButton:c}}}(await vn(i,e),e)}},Kl={$intentKind:"RemoveFollowerRequestIntent",async perform(n,e){const t=new Go("/v1/me/social/profile/followers",e),i={data:[{id:n.socialProfileID,type:oo.SocialProfiles}]},o=JSON.stringify(i),r=(await dn({url:t.string,body:o,method:"DELETE"},e)).statusCode
return{responseCode:null!=r?r:Co.unknown}}},jl={$intentKind:"SocialProfileEditorPageIntent",async perform(n,e){const t=new Go("/v1/me/social/profile",e)
return t.queryString.addParameters({include:"shareable-playlists"}),t.queryString.extend.add("hideListeningTo"),function(n,e){var t,i,o
const r=null===(t=n.body)||void 0===t?void 0:t.data
if(!r||0===r.length)throw new Error("No resource identifiers in Social Profile page response")
const l=null===(i=n.body)||void 0===i?void 0:i.resources
if(!l)throw new Error("No resource map in Social Profile page response")
const s=r[0],a=null===(o=l[s.type])||void 0===o?void 0:o[s.id]
if(!a)throw new Error("No resource identifier for Social Profile in page response")
const u=[],c=function(n,e,t,i){const o=function(n,e,t,i){var o
const r=n.attributes
if(!r)return void Jo.warn(t,`Dropping editor in social profile with id "${n.id}", missing attributes data.`)
const l=S(n,t),s=null!==(o=r.hideListeningTo)&&void 0!==o&&o
return{id:kn("SocialProfileDetailHeader",n.id,t),artwork:wn(r.artwork,fo.SpecificRectangle),contentDescriptor:l,segue:null,title:i?null:r.name,handle:i?null:r.handle,isPrivate:i?null:r.isPrivate,hideListeningTo:s,editingScopeIdentifier:"Social Profile Editing",headerTitleText:zo.string("FUSE.Social.Profile.Intro.Description",t),chooseWhoCanFollowText:zo.string("FUSE.Social.DT.Profile.ShareWith.Header",t),everyoneButtonText:zo.string("FUSE.Social.Profile.ShareWith.Everyone.Header",t),peopleYouApproveButtonText:zo.string("FUSE.Social.Profile.ShareWith.Restricted.header",t)}}(n,0,t,i)
var r
if(o)return{id:(r=o).id,itemKind:"socialProfileEditorHeaderLockup",presentation:{kind:"single"},items:[r]}
Jo.warn(t,`Could not generate social profile editor page with id "${n.id}"`)}(a,0,e,pn(n))
if(!c)throw new Error("Unable to create Social Profile page header.")
u.push(c)
const d=a.relationships
if(d){const n=d["shareable-playlists"]
if(n&&n.data){const t=function(n,e,t,i,o,r,l={kind:"shelf",numberOfRows:1}){const s=e.data
if(!s)return void Jo.warn(r,`Dropping shared playlists in social profile editor with id "${n.id}", missing views data.`)
const a=yn(`${i} - ${n.id} `,r),u=[]
return new ur(o,r).resources(s).forEach(n=>{const e=function(n,e,t){var i,o,r,l,s
const a=S(e,t),u={id:kn(n,e.id,t),artwork:wn(null===(i=e.attributes)||void 0===i?void 0:i.artwork,fo.BoundedBox),contentDescriptor:a,numberOfSocialBadges:0,showExplicitBadge:!1,displayStyle:yo.Large,overlayStyle:So.Selection,isSelected:null!==(r=null===(o=e.attributes)||void 0===o?void 0:o.isPublic)&&void 0!==r&&r,editingScopeIdentifier:"Social Profile Editing",name:null===(l=e.attributes)||void 0===l?void 0:l.name}
switch(e.type){case oo.LibraryPlaylists:case oo.Playlists:Object.assign(u,{title:null===(s=e.attributes)||void 0===s?void 0:s.name})
break
default:return void Jo.warn(t,`"${e.type}" resource type unsupported, dropping social profile editor - shared playlists item with id "${e.id}".`)}return u}(a,n,r)
e&&u.push(e)}),0===u.length?null:{id:a,itemKind:"squareLockup",presentation:{kind:"collection",layout:l},items:u,header:{kind:"default",item:{title:t}},displaySeparator:!0}}(a,n,zo.string("FUSE.Social.DT.Profile.SharePlaylist.Header",e),"share-playlist",l,e)
t&&u.push(t)}}return{pageMetrics:m(e,n,"unimplemented","SocialProfile"),sections:u}}(await vn(t,e),e)}},_l={$intentKind:"UnblockRequestIntent",async perform(n,e){const t=new Go("/v1/me/social/profile/blocked-profiles",e),i={data:[{id:n.socialProfileID,type:oo.SocialProfiles}]},o=JSON.stringify(i),r=(await dn({url:t.string,body:o,method:"DELETE"},e)).statusCode
return{responseCode:null!=r?r:Co.unknown}}},Jl={$intentKind:"UnfollowRequestIntent",async perform(n,e){const t=new Go("/v1/me/social/profile/followees",e),i={data:[{id:n.socialProfileID,type:oo.SocialProfiles}]},o=JSON.stringify(i),r=(await dn({url:t.string,body:o,method:"DELETE"},e)).statusCode
return{responseCode:null!=r?r:Co.unknown}}},ql={$intentKind:"UpdateSocialProfileIntent",async perform(n,e){var t,i
const o=new Go("/v1/me/social/profile",e)
o.queryString.shouldIncludeFormatResourcesMap=!1
const r={attributes:n.attributes},l=JSON.stringify(r)
let s
try{s=await dn({url:o.string,body:l,method:"PATCH"},e)}catch(n){const e=n.userInfo.body,r=new Error(`Bad Status code ${n.userInfo.status} for ${o}`),l=JSON.parse(null!=e?e:""),s=null===(t=null==l?void 0:l.errors)||void 0===t?void 0:t[0]
if(s){const n=null===(i=s.meta.suggestedHandles)||void 0===i?void 0:i[0]
Object.assign(r,{userInfo:{status:s.status,code:s.code,suggestedHandle:n}})}throw r}const a=s.statusCode
return{responseCode:null!=a?a:Co.unknown}}},Hl={$intentKind:"UpdateSocialProfileSharedPlaylistsIntent",async perform(n,e){const t=new Go("/v1/me/social/profile/shared-playlists",e)
t.queryString.shouldIncludeFormatResourcesMap=!1
const i=[]
n.sharedPlaylistIDs.forEach(n=>{const e={id:n,type:oo.LibraryPlaylists}
i.push(e)})
const o={data:i},r=JSON.stringify(o),l=(await dn({url:t.string,body:r,method:"PUT"},e)).statusCode
return{responseCode:null!=l?l:Co.unknown}}},zl={$intentKind:"UserSocialProfileIntent",async perform(n,e){var t,i,o,r
const l=new Go("/v1/me/social/profile",e)
l.queryString.addParameters({include:"followers,pending-followers",extend:"followState"})
const s=await dn({url:l.string,cache:"no-cache"},e),a=null===(t=s.body)||void 0===t?void 0:t.data
if(!a||0===a.length)throw new Error("No resource identifiers in Social Profile page response")
const u=null===(i=s.body)||void 0===i?void 0:i.resources
if(!u)throw new Error("No resource map in Social Profile response")
const c=u["personal-social-profiles"]
if(!c)throw new Error("No personal-social-profile in Social Profile response")
const d=c.me
if(!d)throw new Error("No resource identifier for social profile in Social Profile response")
const v=S(d,e)
if(!v)throw new Error("Could not construct SocialProfile content descriptor from response")
const p=d.relationships,f=[],m=[],h=[]
if(p){const n=new ur(u,e),t=p.followees
t&&t.data&&n.resources(t.data).forEach(n=>{const t=S(n,e)
t&&f.push(t)})
const i=p["pending-followers"]
i&&i.data&&n.resources(i.data).forEach(n=>{const t=S(n,e)
t&&m.push(t)})
const o=p.followers
o&&o.data&&n.resources(o.data).forEach(n=>{const t=S(n,e)
t&&h.push(t)})}return{userSocialProfileDescriptor:{contentDescriptor:v,isOnboarded:null!==(r=null===(o=d.attributes)||void 0===o?void 0:o.isOnboarded)&&void 0!==r&&r},followees:f,pendingFollowers:m,followers:h}}},Wl={$intentKind:"removeRecommendedFriendIntent",async perform(n,e){const t=new Go("/v1/social/recommended-friends",e),i={ids:{socialProfiles:[n.socialProfileID]}},o=JSON.stringify(i)
return await dn({url:t.string,body:o,method:"DELETE"},e),Promise.resolve()}},Gl={$intentKind:"SocialProfileSeeAllPageIntent",async perform(n,e){const t=new Go(n.url,e)
return t.queryString.addParameters({limit:"20"}),function(n,e,t,i){var o,r,l
const s=null===(o=n.body)||void 0===o?void 0:o.data
if(!s||0===s.length)throw new Error(`No resource identifiers in social profile see all page response ${JSON.stringify(n)}`)
const a=null===(r=n.body)||void 0===r?void 0:r.resources
if(!a)throw new Error(`No resource map in social profile see all page response: ${JSON.stringify(n)}`)
const u=new ur(a,i),c=Hi(s,u,e.lockupType,e.title,i),d=[]
let v
c&&d.push(c)
const p=null===(l=n.body)||void 0===l?void 0:l.next
let f
return p&&(v={$kind:"SocialProfileSeeAllPaginateIntent",nextHREF:p,lockupType:e.lockupType}),t&&(f=[{events:[{name:"socialGraphChange"}],intent:Le(e,"Social Graph Changed")}]),{pageMetrics:m(i,n,"see_all","SeeAll",u),sections:d,invalidationRules:{eventTriggers:f},nextIntent:v}}(await dn({url:t.string},e),n,n.needsSocialGraphEventTrigger,e)}},Vl={$intentKind:"SocialProfileSeeAllPaginateIntent",async perform(n,e){var t,i,o
const r=new Go(n.nextHREF,e)
r.queryString.addParameters({limit:"20"})
const l=await dn({url:r.string},e),s=null===(t=l.body)||void 0===t?void 0:t.data
if(!s||0===s.length)throw new Error(`No resource identifiers in social profile see all page response ${JSON.stringify(l)}`)
const a=null===(i=l.body)||void 0===i?void 0:i.resources
if(!a)throw new Error(`No resource map in social profile see all page response: ${JSON.stringify(l)}`)
const u=Hi(s,new ur(a,e),n.lockupType,null,e)
if(!u)throw new Error(`No section could be created in social profile see all page response: ${JSON.stringify(l)}`)
const c={pageChangeInstruction:{instruction:{instruction:"addItemsToSection",newSectionToAppendItemsFrom:u}}},d=null===(o=l.body)||void 0===o?void 0:o.next
if(d){const e=n
e.nextHREF=d,c.nextIntent=e}return Promise.resolve(c)}}
!function(n){n.CityCharts="cityCharts",n.DailyGlobalTopCharts="dailyGlobalTopCharts",n.Albums="albums",n.Playlists="playlists",n.Songs="songs",n.MusicVideos="music-videos"}(Ro||(Ro={}))
const Zl=[Ro.Songs,Ro.CityCharts,Ro.DailyGlobalTopCharts,Ro.Playlists,Ro.Albums,Ro.MusicVideos],Xl=new Set([Ro.Songs,Ro.Playlists,Ro.Albums,Ro.MusicVideos]),Yl={$intentKind:"TopChartSeeAllPageIntent",async perform(n,e){const t=Yi(n.url,e),i=await vn(t,e)
return await Vi(i,1,n.url,null,e)||Promise.reject(`Failed to construct page with response: '${JSON.stringify(i)}'`)}},Ql={$intentKind:"RefreshTopChartSeeAllPageIntent",async perform(n,e){var t
const i=Yi(n.url,e),o=null===(t=n.metadata)||void 0===t?void 0:t.id
o&&i.queryString.addParameters({genre:o})
const r=await vn(i,e)
return{instruction:{instruction:"replacePage",newPage:await Vi(r,1,n.url,o,e)}}}},ns={$intentKind:"TopChartPageIntent",routes:()=>[{rules:[{protocol:"https",path:"/WebObjects/MZStore.woa/wa/viewTop",hostName:"itunes.apple.com"},{protocol:"https",path:"/WebObjects/MZStore.woa/wa/viewTop",hostName:"music.apple.com"}],handler:(n,e)=>function(n){var e
return{$kind:"TopChartPageIntent",genreID:null===(e=n.query)||void 0===e?void 0:e.genreId}}(n)}],async perform(n,e){const t=n.genreID
if(!t)return Promise.reject(`Expected genre id in intent: '${JSON.stringify(n)}'`)
const i=Ho.countryCode(e),o=new Go(`/v1/catalog/${i}/charts`,e)
return o.queryString.addParameters({limit:"50",genre:t,include:"tracks","fields[albums]":"artistName,artistUrl,artwork,contentRating,editorialArtwork,name,playParams,releaseDate,url,trackCount","fields[playlists]":"artistName,artistUrl,artwork,contentRating,editorialArtwork,name,playParams,releaseDate,url,curatorName","include[songs]":"artists","relate[songs]":"albums","include[albums]":"artists","include[music-videos]":"artists","fields[artists]":"name","omit[resource]":"autos"}),o.queryString.with.add(Ro.CityCharts).add(Ro.DailyGlobalTopCharts),o.queryString.types.add(oo.Albums).add(oo.Songs).add(oo.MusicVideos).add(oo.Playlists),o.queryString.extend.add("artistUrl"),function(n,e){const t=n.body
if(!t)throw new Error(`Missing body for response '${JSON.stringify(n)}'`)
const i=t.resources
if(!i)throw new Error(`Missing resource map for response '${JSON.stringify(n)}'`)
const o=t.results
if(!o)throw new Error(`Missing top charts results for response '${JSON.stringify(n)}'`)
const r=new ur(i,e),l=[],s=function(n){const e=(0,Bo.f3)(_o.localization,n)
return lt(yn("chartsPageHeader",n),{id:kn("chartsPageHeaderSectionItemID","chartsPageHeaderSectionItemID",n),title:e.string("FUSE.TopCharts"),contentDescriptor:null})}(e)
return l.push(s),Zl.forEach(n=>{var t
const i=null===(t=o[n])||void 0===t?void 0:t[0]
if(!i)return void Jo.warn(e,`Dropping top charts resource identifier with kind: ${n}.  No identifier found`)
const s=Wi(n,i,r,1,e)
if(s){if(n===Ro.Songs){const n=s.items
n&&n.forEach(n=>{n.tertiaryLinks=null})}l.push(s)}}),{pageMetrics:m(e,n,"top_charts","topChartsPage",r),sections:l}}(await vn(o,e),e)},actionFor(n,e,t){var i
const o=null!==(i=t.metrics)&&void 0!==i?i:p(e,"0","unknown","navigate"),r=P({kind:lo.CatalogPage,intent:n},o)
return t.isDeepLinkAction?rn([tn({kind:uo.Browse},Zo,e),r],Zo):r}},es={$intentKind:"TopChartSeeAllPaginateIntent",async perform(n,e){var t
const i=new Go(n.next,e)
i.queryString.addParameters({limit:"50",include:"tracks","fields[albums]":"artistName,artistUrl,artwork,contentRating,editorialArtwork,name,playParams,releaseDate,url,trackCount","fields[playlists]":"artistName,artistUrl,artwork,contentRating,editorialArtwork,name,playParams,releaseDate,url,curatorName","include[songs]":"artists"}),i.queryString.extend.add("artistUrl")
const o=await vn(i,e),r=await Vi(o,n.lastRanking,n.next,null,e),l=null===(t=null==r?void 0:r.sections)||void 0===t?void 0:t[0]
if(l){const n={pageChangeInstruction:{instruction:{instruction:"addItemsToSection",newSectionToAppendItemsFrom:l}},nextIntent:r.nextIntent}
return Promise.resolve(n)}return Promise.reject()}},ts={$intentKind:"RefreshPageIntent",async perform(n,e){Jo.log(e,`Refreshing Page Kind '${n.intent.$kind}' for reason "${n.reason}".`)
const t=(0,Bo.f3)(_o.intentDispatcher,e)
return{instruction:{instruction:"replacePage",newPage:await t.dispatch(n.intent,e)}}}}
class is{constructor(n){this.persistence=n}getItem(n){const e=this.persistenceScopeForKey(n)
return this.persistence.getValueForKey(n,e)}setItemAction(n,e,t=Zo){return{$kind:"setPersistenceItemAction",scope:this.persistenceScopeForKey(n),item:e,actionMetrics:t,key:n}}persistenceScopeForKey(n){return n in vo.User?co.User:co.Device}}(0,xo.exportBootstrap)(function(n){var e,t,i,o,r
const l=new Jo
l.shouldQueueMessages=!0,l.log("MusicUI JS bootstrapped! Version:",null!==(t=null===(e=n.bundle.manifest.properties)||void 0===e?void 0:e.version)&&void 0!==t?t:"[Missing version]")
const s=new Bo.vv("Dependency Graph").adding(_o.bag,new Ho(n.bag)).adding(_o.network,n.net).adding(_o.recentLibrarySearchesProvider,n.recentLibrarySearchesProvider).adding(_o.bundle,n.bundle).adding(_o.campaignAttributionService,n.campaignAttributionService).adding(_o.cloudLibraryStatusProvider,n.cloudLibraryStatusProvider).adding(_o.subscriptionStatusCoordinator,n.subscriptionStatusCoordinator).adding(_o.findFriendsContactsProvider,n.findFriendsContactsProvider).adding(_o.userSocialProfileCoordinator,n.userSocialProfileCoordinator).adding(_o.host,n.host).adding(_o.logger,l).adding(_o.random,n.random).adding(_o.userSocialProfileCoordinator,n.userSocialProfileCoordinator).adding(_o.restrictionsController,n.restrictionsController).adding(_o.storage,new is(n.persistence)).adding(_o.metrics,new Yo),a=function(n){const e=new Yr(new Qo(n))
return e.register(el),e.register(ol),e.register(il),e.register(tl),e.register(wl),e.register(gl),e.register(bl),e.register(kl),e.register(yl),e.register(Sr),e.register(Er),e.register(Or),e.register(Ir),e.register(Nr),e.register(Ar),e.register(Jr),e.register(Tr),e.register(xr),e.register(Fr),e.register(Cr),e.register(Mr),e.register(Rr),e.register(Br),e.register(Kr),e.register(jr),e.register(_r),e.register(br),e.register(fl),e.register(ml),e.register(dl),e.register(vl),e.register(hl),e.register(Sl),e.register(Ol),e.register(Il),e.register(Pl),e.register(Nl),e.register(Fl),e.register(Xr),e.register(Kl),e.register(Wl),e.register(El),e.register(jl),e.register(Ul),e.register(Gl),e.register(Vl),e.register(_l),e.register(Jl),e.register(ql),e.register(Hl),e.register(zl),e.register(Cl),e.register(xl),e.register(Tl),e.register(Ll),e.register(Rl),e.register(Bl),e.register(Ml),e.register(sl),e.register(ll),e.register(qr),e.register(Zr),e.register(Hr),e.register(kr),e.register(Gr),e.register(cr),e.register(ts),e.register(ns),e.register(Yl),e.register(es),e.register(Ql),e.register(rl),e.register(al),e.register(ul),e.register(cl),e.register(lr),e.register(ar),e.register(sr),e}(s)
null===(o=null===(i=n.prebootstrap)||void 0===i?void 0:i.addIntents)||void 0===o||o.call(i,a)
const u=new zo(s)
u.loadStrings()
const c=s.adding(_o.intentDispatcher,a).adding(_o.localization,u),d=(0,To.makeRouterUsingRegisteredControllers)(a,c)
let v=c.adding(_o.router,d)
const p=null===(r=n.prebootstrap)||void 0===r?void 0:r.modifyObjectGraph
return p&&(v=p(v)),new xo.Runtime(a,v)})})()})()

//# sourceMappingURL=main.js.map
/*! For license information please see chunk.788.19b7ef0ab11c70a20553.js.LICENSE.txt */
(self.webpackChunk_ember_auto_import_=self.webpackChunk_ember_auto_import_||[]).push([[788],{866:function(__unused_webpack_module,exports){(function(exports){"use strict"
exports.stringify=function(e){return JSON.stringify(e,(function(e,t){var n
return t instanceof Function||"function"==typeof t?(n=t.toString()).length<8||"function"!==n.substring(0,8)?"_NuFrRa_"+n:n:t instanceof RegExp?"_PxEgEr_"+t:t}))},exports.parse=function(str,date2obj){var iso8061=!!date2obj&&/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/
return JSON.parse(str,(function(key,value){var prefix
return"string"!=typeof value||value.length<8?value:(prefix=value.substring(0,8),iso8061&&value.match(iso8061)?new Date(value):"function"===prefix?eval("("+value+")"):"_PxEgEr_"===prefix||"_NuFrRa_"===prefix?eval(value.slice(8)):value)}))},exports.clone=function(e,t){return exports.parse(exports.stringify(e),t)}})(exports)},916:function(e,t,n){var r
e=n.nmd(e),function(){"use strict"
var i,o="function"==typeof o?o:function(){var e=Object.create(null),t=Object.prototype.hasOwnProperty
this.get=function(t){return e[t]},this.set=function(n,r){return t.call(e,n)||this.size++,e[n]=r,this},this.delete=function(n){t.call(e,n)&&(delete e[n],this.size--)},this.forEach=function(t){for(var n in e)t(e[n],n)},this.clear=function(){e=Object.create(null),this.size=0},this.size=0}
function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,i,o=[],s=!0,a=!1
try{for(n=n.call(e);!(s=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(e){a=!0,i=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw i}}return o}}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return h(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}!function(e){if("object"===("undefined"==typeof globalThis?"undefined":s(globalThis)))i=globalThis
else{var t=function(){i=this||self,delete e.prototype._T_}
this?t():(e.defineProperty(e.prototype,"_T_",{configurable:!0,get:t}),_T_)}}(Object)
var p=i,g=p.window,m=p.self,v=p.console,y=p.setTimeout,b=p.clearTimeout,w=g&&g.document,k=g&&g.navigator,x=function(){var e="qunit-test-string"
try{return p.sessionStorage.setItem(e,e),p.sessionStorage.removeItem(e),p.sessionStorage}catch(e){return}}(),E={warn:v?Function.prototype.bind.call(v.warn||v.log,v):function(){}},T=Object.prototype.toString,C=Object.prototype.hasOwnProperty,_=Date.now||function(){return(new Date).getTime()},S=g&&void 0!==g.performance&&"function"==typeof g.performance.mark&&"function"==typeof g.performance.measure?g.performance:void 0,N={now:S?S.now.bind(S):_,measure:S?function(e,t,n){try{S.measure(e,t,n)}catch(e){E.warn("performance.measure could not be executed because of ",e.message)}}:function(){},mark:S?S.mark.bind(S):function(){}}
function j(e,t){for(var n=e.slice(),r=0;r<n.length;r++)for(var i=0;i<t.length;i++)if(n[r]===t[i]){n.splice(r,1),r--
break}return n}function A(e,t){return-1!==t.indexOf(e)}function R(e){var t=M("array",e)?[]:{}
for(var n in e)if(C.call(e,n)){var r=e[n]
t[n]=r===Object(r)?R(r):r}return t}function q(e,t,n){for(var r in t)C.call(t,r)&&(void 0===t[r]?delete e[r]:n&&void 0!==e[r]||(e[r]=t[r]))
return e}function I(e){if(void 0===e)return"undefined"
if(null===e)return"null"
var t=T.call(e).match(/^\[object\s(.*)\]$/),n=t&&t[1]
switch(n){case"Number":return isNaN(e)?"nan":"number"
case"String":case"Boolean":case"Array":case"Set":case"Map":case"Date":case"RegExp":case"Function":case"Symbol":return n.toLowerCase()
default:return s(e)}}function M(e,t){return I(t)===e}function O(e,t){for(var n=e+""+t,r=0,i=0;i<n.length;i++)r=(r<<5)-r+n.charCodeAt(i),r|=0
var o=(4294967296+r).toString(16)
return o.length<8&&(o="0000000"+o),o.slice(-8)}function B(e){var t=String(e)
return"[object"===t.slice(0,7)?(e.name||"Error")+(e.message?": ".concat(e.message):""):t}var P=function(){var e=[],t=Object.getPrototypeOf||function(e){return e.__proto__}
function n(e,t){return"object"===s(e)&&(e=e.valueOf()),"object"===s(t)&&(t=t.valueOf()),e===t}function r(e){return"flags"in e?e.flags:e.toString().match(/[gimuy]*$/)[0]}function i(t,n){return t===n||(-1===["object","array","map","set"].indexOf(I(t))?a(t,n):(e.every((function(e){return e.a!==t||e.b!==n}))&&e.push({a:t,b:n}),!0))}var o={string:n,boolean:n,number:n,null:n,undefined:n,symbol:n,date:n,nan:function(){return!0},regexp:function(e,t){return e.source===t.source&&r(e)===r(t)},function:function(){return!1},array:function(e,t){var n=e.length
if(n!==t.length)return!1
for(var r=0;r<n;r++)if(!i(e[r],t[r]))return!1
return!0},set:function(t,n){if(t.size!==n.size)return!1
var r=!0
return t.forEach((function(t){if(r){var i=!1
n.forEach((function(n){if(!i){var r=e
u(n,t)&&(i=!0),e=r}})),i||(r=!1)}})),r},map:function(t,n){if(t.size!==n.size)return!1
var r=!0
return t.forEach((function(t,i){if(r){var o=!1
n.forEach((function(n,r){if(!o){var s=e
u([n,r],[t,i])&&(o=!0),e=s}})),o||(r=!1)}})),r},object:function(e,n){if(!1===function(e,n){var r=t(e),i=t(n)
return e.constructor===n.constructor||(r&&null===r.constructor&&(r=null),i&&null===i.constructor&&(i=null),null===r&&i===Object.prototype||null===i&&r===Object.prototype)}(e,n))return!1
var r=[],o=[]
for(var s in e)if(r.push(s),(e.constructor===Object||void 0===e.constructor||"function"!=typeof e[s]||"function"!=typeof n[s]||e[s].toString()!==n[s].toString())&&!i(e[s],n[s]))return!1
for(var u in n)o.push(u)
return a(r.sort(),o.sort())}}
function a(e,t){var n=I(e)
return I(t)===n&&o[n](e,t)}function u(t,n){if(arguments.length<2)return!0
e=[{a:t,b:n}]
for(var r=0;r<e.length;r++){var i=e[r]
if(i.a!==i.b&&!a(i.a,i.b))return!1}return 2===arguments.length||u.apply(this,[].slice.call(arguments,1))}return function(){var t=u.apply(void 0,arguments)
return e.length=0,t}}(),L={queue:[],stats:{all:0,bad:0,testCount:0},blocking:!0,failOnZeroTests:!0,reorder:!0,altertitle:!0,collapse:!0,scrolltop:!0,maxDepth:5,requireExpects:!1,urlConfig:[],modules:[],currentModule:{name:"",tests:[],childModules:[],testsRun:0,testsIgnored:0,hooks:{before:[],beforeEach:[],afterEach:[],after:[]}},callbacks:{},storage:x},U=g&&g.QUnit&&g.QUnit.config
g&&g.QUnit&&!g.QUnit.version&&q(L,U),L.modules.push(L.currentModule)
var D=function(){function e(e){return'"'+e.toString().replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'}function t(e){return e+""}function n(e,t,n){var r=o.separator(),i=o.indent(1)
return t.join&&(t=t.join(","+r+i)),t?[e,i+t,o.indent()+n].join(r):e+n}function r(e,t){if(o.maxDepth&&o.depth>o.maxDepth)return"[object Array]"
this.up()
for(var r=e.length,i=new Array(r);r--;)i[r]=this.parse(e[r],void 0,t)
return this.down(),n("[",i,"]")}var i=/^function (\w+)/,o={parse:function(e,t,n){var r=(n=n||[]).indexOf(e)
if(-1!==r)return"recursion(".concat(r-n.length,")")
t=t||this.typeOf(e)
var i=this.parsers[t],o=s(i)
if("function"===o){n.push(e)
var a=i.call(this,e,n)
return n.pop(),a}return"string"===o?i:"[ERROR: Missing QUnit.dump formatter for type "+t+"]"},typeOf:function(e){var t
return t=null===e?"null":void 0===e?"undefined":M("regexp",e)?"regexp":M("date",e)?"date":M("function",e)?"function":void 0!==e.setInterval&&void 0!==e.document&&void 0===e.nodeType?"window":9===e.nodeType?"document":e.nodeType?"node":function(e){return"[object Array]"===T.call(e)||"number"==typeof e.length&&void 0!==e.item&&(e.length?e.item(0)===e[0]:null===e.item(0)&&void 0===e[0])}(e)?"array":e.constructor===Error.prototype.constructor?"error":s(e),t},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&#160;":" "},indent:function(e){if(!this.multiline)return""
var t=this.indentChar
return this.HTML&&(t=t.replace(/\t/g,"   ").replace(/ /g,"&#160;")),new Array(this.depth+(e||0)).join(t)},up:function(e){this.depth+=e||1},down:function(e){this.depth-=e||1},setParser:function(e,t){this.parsers[e]=t},quote:e,literal:t,join:n,depth:1,maxDepth:L.maxDepth,parsers:{window:"[Window]",document:"[Document]",error:function(e){return'Error("'+e.message+'")'},unknown:"[Unknown]",null:"null",undefined:"undefined",function:function(e){var t="function",r="name"in e?e.name:(i.exec(e)||[])[1]
return r&&(t+=" "+r),n(t=[t+="(",o.parse(e,"functionArgs"),"){"].join(""),o.parse(e,"functionCode"),"}")},array:r,nodelist:r,arguments:r,object:function(e,t){var r=[]
if(o.maxDepth&&o.depth>o.maxDepth)return"[object Object]"
o.up()
var i=[]
for(var s in e)i.push(s)
var a=["message","name"]
for(var u in a){var l=a[u]
l in e&&!A(l,i)&&i.push(l)}i.sort()
for(var c=0;c<i.length;c++){var f=i[c],d=e[f]
r.push(o.parse(f,"key")+": "+o.parse(d,void 0,t))}return o.down(),n("{",r,"}")},node:function(e){var t=o.HTML?"&lt;":"<",n=o.HTML?"&gt;":">",r=e.nodeName.toLowerCase(),i=t+r,s=e.attributes
if(s)for(var a=0,u=s.length;a<u;a++){var l=s[a].nodeValue
l&&"inherit"!==l&&(i+=" "+s[a].nodeName+"="+o.parse(l,"attribute"))}return i+=n,3!==e.nodeType&&4!==e.nodeType||(i+=e.nodeValue),i+t+"/"+r+n},functionArgs:function(e){var t=e.length
if(!t)return""
for(var n=new Array(t);t--;)n[t]=String.fromCharCode(97+t)
return" "+n.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:t,number:t,boolean:t,symbol:function(e){return e.toString()}},HTML:!1,indentChar:"  ",multiline:!0}
return o}(),F=function(){function e(t,n){a(this,e),this.name=t,this.fullName=n?n.fullName.concat(t):[],this.globalFailureCount=0,this.tests=[],this.childSuites=[],n&&n.pushChildSuite(this)}return l(e,[{key:"start",value:function(e){if(e){this._startTime=N.now()
var t=this.fullName.length
N.mark("qunit_suite_".concat(t,"_start"))}return{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.start()})),childSuites:this.childSuites.map((function(e){return e.start()})),testCounts:{total:this.getTestCounts().total}}}},{key:"end",value:function(e){if(e){this._endTime=N.now()
var t=this.fullName.length,n=this.fullName.join(" – ")
N.mark("qunit_suite_".concat(t,"_end")),N.measure(0===t?"QUnit Test Run":"QUnit Test Suite: ".concat(n),"qunit_suite_".concat(t,"_start"),"qunit_suite_".concat(t,"_end"))}return{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.end()})),childSuites:this.childSuites.map((function(e){return e.end()})),testCounts:this.getTestCounts(),runtime:this.getRuntime(),status:this.getStatus()}}},{key:"pushChildSuite",value:function(e){this.childSuites.push(e)}},{key:"pushTest",value:function(e){this.tests.push(e)}},{key:"getRuntime",value:function(){return this._endTime-this._startTime}},{key:"getTestCounts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{passed:0,failed:0,skipped:0,todo:0,total:0}
return e.failed+=this.globalFailureCount,e.total+=this.globalFailureCount,e=this.tests.reduce((function(e,t){return t.valid&&(e[t.getStatus()]++,e.total++),e}),e),this.childSuites.reduce((function(e,t){return t.getTestCounts(e)}),e)}},{key:"getStatus",value:function(){var e=this.getTestCounts(),t=e.total,n=e.failed,r=e.skipped,i=e.todo
return n?"failed":r===t?"skipped":i===t?"todo":"passed"}}]),e}(),H=[]
function Q(e,t,n){var r=H.length?H.slice(-1)[0]:null,i=null!==r?[r.name,e].join(" > "):e,o=r?r.suiteReport:ze,s=null!==r&&r.skip||n.skip,a=null!==r&&r.todo||n.todo,u={name:i,parentModule:r,tests:[],moduleId:O(i),testsRun:0,testsIgnored:0,childModules:[],suiteReport:new F(e,o),skip:s,todo:!s&&a,ignored:n.ignored||!1},l={}
return r&&(r.childModules.push(u),q(l,r.testEnvironment)),q(l,t),u.testEnvironment=l,L.modules.push(u),u}function $(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
"function"===I(t)&&(n=t,t=void 0)
var i=Q(e,t,r),o=i.testEnvironment,s=i.hooks={}
c(s,o,"before"),c(s,o,"beforeEach"),c(s,o,"afterEach"),c(s,o,"after")
var a={before:f(i,"before"),beforeEach:f(i,"beforeEach"),afterEach:f(i,"afterEach"),after:f(i,"after")},u=L.currentModule
if(L.currentModule=i,"function"===I(n)){H.push(i)
try{var l=n.call(i.testEnvironment,a)
null!=l&&"function"===I(l.then)&&E.warn("Returning a promise from a module callback is not supported. Instead, use hooks for async behavior. This will become an error in QUnit 3.0.")}finally{H.pop(),L.currentModule=i.parentModule||u}}function c(e,t,n){var r=t[n]
e[n]="function"==typeof r?[r]:[],delete t[n]}function f(e,t){return function(n){L.currentModule!==e&&E.warn("The `"+t+"` hook was called inside the wrong module (`"+L.currentModule.name+"`). Instead, use hooks provided by the callback to the containing module (`"+e.name+"`). This will become an error in QUnit 3.0."),e.hooks[t].push(n)}}}var z=!1
function G(e,t,n){var r,i=z&&(r=L.modules.filter((function(e){return!e.ignored})).map((function(e){return e.moduleId})),!H.some((function(e){return r.includes(e.moduleId)})))
$(e,t,n,{ignored:i})}G.only=function(){z||(L.modules.length=0,L.queue.length=0,L.currentModule.ignored=!0),z=!0,$.apply(void 0,arguments)},G.skip=function(e,t,n){z||$(e,t,n,{skip:!0})},G.todo=function(e,t,n){z||$(e,t,n,{todo:!0})}
var Y=Object.create(null),J=["error","runStart","suiteStart","testStart","assertion","testEnd","suiteEnd","runEnd"]
function W(e,t){if("string"!==I(e))throw new TypeError("eventName must be a string when emitting an event")
for(var n=Y[e],r=n?f(n):[],i=0;i<r.length;i++)r[i](t)}var V="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Z={exports:{}}
!function(){var e=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if(void 0!==V)return V
throw new Error("unable to locate global object")}()
if("function"!=typeof e.Promise){var t=setTimeout
i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(r)
return o(this,new c(e,t,n)),n},i.prototype.finally=function(e){var t=this.constructor
return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))},i.all=function(e){return new i((function(t,r){if(!n(e))return r(new TypeError("Promise.all accepts an array"))
var i=Array.prototype.slice.call(e)
if(0===i.length)return t([])
var o=i.length
function a(e,n){try{if(n&&("object"===s(n)||"function"==typeof n)){var u=n.then
if("function"==typeof u)return void u.call(n,(function(t){a(e,t)}),r)}i[e]=n,0==--o&&t(i)}catch(e){r(e)}}for(var u=0;u<i.length;u++)a(u,i[u])}))},i.allSettled=function(e){return new this((function(t,n){if(!e||void 0===e.length)return n(new TypeError(s(e)+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"))
var r=Array.prototype.slice.call(e)
if(0===r.length)return t([])
var i=r.length
function o(e,n){if(n&&("object"===s(n)||"function"==typeof n)){var a=n.then
if("function"==typeof a)return void a.call(n,(function(t){o(e,t)}),(function(n){r[e]={status:"rejected",reason:n},0==--i&&t(r)}))}r[e]={status:"fulfilled",value:n},0==--i&&t(r)}for(var a=0;a<r.length;a++)o(a,r[a])}))},i.resolve=function(e){return e&&"object"===s(e)&&e.constructor===i?e:new i((function(t){t(e)}))},i.reject=function(e){return new i((function(t,n){n(e)}))},i.race=function(e){return new i((function(t,r){if(!n(e))return r(new TypeError("Promise.race accepts an array"))
for(var o=0,s=e.length;o<s;o++)i.resolve(e[o]).then(t,r)}))},i._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){t(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},Z.exports=i}else Z.exports=e.Promise
function n(e){return Boolean(e&&void 0!==e.length)}function r(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new")
if("function"!=typeof e)throw new TypeError("not a function")
this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function o(e,t){for(;3===e._state;)e=e._value
0!==e._state?(e._handled=!0,i._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected
if(null!==n){var r
try{r=n(e._value)}catch(e){return void u(t.promise,e)}a(t.promise,r)}else(1===e._state?a:u)(t.promise,e._value)}))):e._deferreds.push(t)}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"===s(t)||"function"==typeof t)){var n=t.then
if(t instanceof i)return e._state=3,e._value=t,void l(e)
if("function"==typeof n)return void f((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,l(e)}catch(t){u(e,t)}var r,o}function u(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&i._immediateFn((function(){e._handled||i._unhandledRejectionFn(e._value)}))
for(var t=0,n=e._deferreds.length;t<n;t++)o(e,e._deferreds[t])
e._deferreds=null}function c(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function f(e,t){var n=!1
try{e((function(e){n||(n=!0,a(t,e))}),(function(e){n||(n=!0,u(t,e))}))}catch(e){if(n)return
n=!0,u(t,e)}}}()
var X=Z.exports
function K(e,t){var n=L.callbacks[e]
if("log"!==e)return n.reduce((function(e,n){return e.then((function(){return X.resolve(n(t))}))}),X.resolve([]))
n.map((function(e){return e(t)}))}var ee=(ne(0)||"").replace(/(:\d+)+\)?/,"").replace(/.+\//,"")
function te(e,t){if(t=void 0===t?4:t,e&&e.stack){var n=e.stack.split("\n")
if(/^error$/i.test(n[0])&&n.shift(),ee){for(var r=[],i=t;i<n.length&&-1===n[i].indexOf(ee);i++)r.push(n[i])
if(r.length)return r.join("\n")}return n[t]}}function ne(e){var t=new Error
if(!t.stack)try{throw t}catch(e){t=e}return te(t,e)}var re,ie=0,oe=[]
function se(){var e,t
e=_(),L.depth=(L.depth||0)+1,ae(e),L.depth--,oe.length||L.blocking||L.current||(L.blocking||L.queue.length||0!==L.depth?(t=L.queue.shift()(),oe.push.apply(oe,f(t)),ie>0&&ie--,se()):function(){var e
if(0===L.stats.testCount&&!0===L.failOnZeroTests)return e=L.filter&&L.filter.length?new Error('No tests matched the filter "'.concat(L.filter,'".')):L.module&&L.module.length?new Error('No tests matched the module "'.concat(L.module,'".')):L.moduleId&&L.moduleId.length?new Error('No tests matched the moduleId "'.concat(L.moduleId,'".')):L.testId&&L.testId.length?new Error('No tests matched the testId "'.concat(L.testId,'".')):new Error("No tests were run."),me("global failure",q((function(t){t.pushResult({result:!1,message:e.message,source:e.stack})}),{validTest:!0})),void se()
var t=L.storage,n=_()-L.started,r=L.stats.all-L.stats.bad
ue.finished=!0,W("runEnd",ze.end(!0)),K("done",{passed:r,failed:L.stats.bad,total:L.stats.all,runtime:n}).then((function(){if(t&&0===L.stats.bad)for(var e=t.length-1;e>=0;e--){var n=t.key(e)
0===n.indexOf("qunit-test-")&&t.removeItem(n)}}))}())}function ae(e){if(oe.length&&!L.blocking){var t=_()-e
if(!y||L.updateRate<=0||t<L.updateRate){var n=oe.shift()
X.resolve(n()).then((function(){oe.length?ae(e):se()}))}else y(se)}}var ue={finished:!1,add:function(e,t,n){if(t)L.queue.splice(ie++,0,e)
else if(n){re||(re=function(e){var t=parseInt(O(e),16)||-1
return function(){return t^=t<<13,t^=t>>>17,(t^=t<<5)<0&&(t+=4294967296),t/4294967296}}(n))
var r=Math.floor(re()*(L.queue.length-ie+1))
L.queue.splice(ie+r,0,e)}else L.queue.push(e)},advance:se,taskCount:function(){return oe.length}},le=function(){function e(t,n,r){a(this,e),this.name=t,this.suiteName=n.name,this.fullName=n.fullName.concat(t),this.runtime=0,this.assertions=[],this.skipped=!!r.skip,this.todo=!!r.todo,this.valid=r.valid,this._startTime=0,this._endTime=0,n.pushTest(this)}return l(e,[{key:"start",value:function(e){return e&&(this._startTime=N.now(),N.mark("qunit_test_start")),{name:this.name,suiteName:this.suiteName,fullName:this.fullName.slice()}}},{key:"end",value:function(e){if(e&&(this._endTime=N.now(),N)){N.mark("qunit_test_end")
var t=this.fullName.join(" – ")
N.measure("QUnit Test: ".concat(t),"qunit_test_start","qunit_test_end")}return q(this.start(),{runtime:this.getRuntime(),status:this.getStatus(),errors:this.getFailedAssertions(),assertions:this.getAssertions()})}},{key:"pushAssertion",value:function(e){this.assertions.push(e)}},{key:"getRuntime",value:function(){return this._endTime-this._startTime}},{key:"getStatus",value:function(){return this.skipped?"skipped":(this.getFailedAssertions().length>0?this.todo:!this.todo)?this.todo?"todo":"passed":"failed"}},{key:"getFailedAssertions",value:function(){return this.assertions.filter((function(e){return!e.passed}))}},{key:"getAssertions",value:function(){return this.assertions.slice()}},{key:"slimAssertions",value:function(){this.assertions=this.assertions.map((function(e){return delete e.actual,delete e.expected,e}))}}]),e}()
function ce(e){if(this.expected=null,this.assertions=[],this.module=L.currentModule,this.steps=[],this.timeout=void 0,this.data=void 0,this.withData=!1,this.pauses=new o,this.nextPauseId=1,q(this,e),this.module.skip?(this.skip=!0,this.todo=!1):this.module.todo&&!this.skip&&(this.todo=!0),ue.finished)E.warn("Unexpected test after runEnd. This is unstable and will fail in QUnit 3.0.")
else{if(!this.skip&&"function"!=typeof this.callback){var t=this.todo?"QUnit.todo":"QUnit.test"
throw new TypeError("You must provide a callback to ".concat(t,'("').concat(this.testName,'")'))}++ce.count,this.errorForStack=new Error,this.callback&&this.callback.validTest&&(this.errorForStack.stack=void 0),this.testReport=new le(this.testName,this.module.suiteReport,{todo:this.todo,skip:this.skip,valid:this.valid()})
for(var n=0,r=this.module.tests;n<r.length;n++)this.module.tests[n].name===this.testName&&(this.testName+=" ")
this.testId=O(this.module.name,this.testName),this.module.tests.push({name:this.testName,testId:this.testId,skip:!!this.skip}),this.skip?(this.callback=function(){},this.async=!1,this.expected=0):this.assert=new Ce(this)}}function fe(){if(!L.current)throw new Error("pushFailure() assertion outside test context, in "+ne(2))
var e=L.current
return e.pushFailure.apply(e,arguments)}function de(){if(L.pollution=[],L.noglobals)for(var e in p)if(C.call(p,e)){if(/^qunit-test-output/.test(e))continue
L.pollution.push(e)}}ce.count=0,ce.prototype={get stack(){return te(this.errorForStack,2)},before:function(){var e=this,t=this.module,n=function(e){for(var t=e,n=[];t&&0===t.testsRun;)n.push(t),t=t.parentModule
return n.reverse()}(t)
return n.reduce((function(e,t){return e.then((function(){return t.stats={all:0,bad:0,started:_()},W("suiteStart",t.suiteReport.start(!0)),K("moduleStart",{name:t.name,tests:t.tests})}))}),X.resolve([])).then((function(){return L.current=e,e.testEnvironment=q({},t.testEnvironment),e.started=_(),W("testStart",e.testReport.start(!0)),K("testStart",{name:e.testName,module:t.name,testId:e.testId,previousFailure:e.previousFailure}).then((function(){L.pollution||de()}))}))},run:function(){if(L.current=this,this.callbackStarted=_(),L.notrycatch)e(this)
else try{e(this)}catch(e){this.pushFailure("Died on test #"+(this.assertions.length+1)+" "+this.stack+": "+(e.message||e),te(e,0)),de(),L.blocking&&we(this)}function e(e){var t
t=e.withData?e.callback.call(e.testEnvironment,e.assert,e.data):e.callback.call(e.testEnvironment,e.assert),e.resolvePromise(t),0===e.timeout&&e.pauses.size>0&&fe("Test did not finish synchronously even though assert.timeout( 0 ) was used.",ne(2))}},after:function(){!function(){var e=L.pollution
de()
var t=j(L.pollution,e)
t.length>0&&fe("Introduced global variable(s): "+t.join(", "))
var n=j(e,L.pollution)
n.length>0&&fe("Deleted global variable(s): "+n.join(", "))}()},queueHook:function(e,t,n){var r=this,i=function(){var n=e.call(r.testEnvironment,r.assert)
r.resolvePromise(n,t)}
return function(){if("before"===t){if(0!==n.testsRun)return
r.preserveEnvironment=!0}if("after"!==t||function(e){return e.testsRun===xe(e).filter((function(e){return!e.skip})).length-1}(n)||!(L.queue.length>0||ue.taskCount()>2))if(L.current=r,L.notrycatch)i()
else try{i()}catch(e){r.pushFailure(t+" failed on "+r.testName+": "+(e.message||e),te(e,0))}}},hooks:function(e){var t=[]
return this.skip||function n(r,i){if(i.parentModule&&n(r,i.parentModule),i.hooks[e].length)for(var o=0;o<i.hooks[e].length;o++)t.push(r.queueHook(i.hooks[e][o],e,i))}(this,this.module),t},finish:function(){if(L.current=this,this.callback=void 0,this.steps.length){var e=this.steps.join(", ")
this.pushFailure("Expected assert.verifySteps() to be called before end of test "+"after using assert.step(). Unverified steps: ".concat(e),this.stack)}L.requireExpects&&null===this.expected?this.pushFailure("Expected number of assertions to be defined, but expect() was not called.",this.stack):null!==this.expected&&this.expected!==this.assertions.length?this.pushFailure("Expected "+this.expected+" assertions, but "+this.assertions.length+" were run",this.stack):null!==this.expected||this.assertions.length||this.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.",this.stack)
var t=this.module,n=t.name,r=this.testName,i=!!this.skip,o=!!this.todo,s=0,a=L.storage
this.runtime=_()-this.started,L.stats.all+=this.assertions.length,L.stats.testCount+=1,t.stats.all+=this.assertions.length
for(var u=0;u<this.assertions.length;u++)this.assertions[u].result||(s++,L.stats.bad++,t.stats.bad++)
i?Te(t):function(e){for(e.testsRun++;e=e.parentModule;)e.testsRun++}(t),a&&(s?a.setItem("qunit-test-"+n+"-"+r,s):a.removeItem("qunit-test-"+n+"-"+r)),W("testEnd",this.testReport.end(!0)),this.testReport.slimAssertions()
var l=this
return K("testDone",{name:r,module:n,skipped:i,todo:o,failed:s,passed:this.assertions.length-s,total:this.assertions.length,runtime:i?0:this.runtime,assertions:this.assertions,testId:this.testId,get source(){return l.stack}}).then((function(){if(Ee(t)){for(var e=[t],n=t.parentModule;n&&Ee(n);)e.push(n),n=n.parentModule
return e.reduce((function(e,t){return e.then((function(){return function(e){for(var t=[e];t.length;){var n=t.shift()
n.hooks={},t.push.apply(t,f(n.childModules))}return W("suiteEnd",e.suiteReport.end(!0)),K("moduleDone",{name:e.name,tests:e.tests,failed:e.stats.bad,passed:e.stats.all-e.stats.bad,total:e.stats.all,runtime:_()-e.stats.started})}(t)}))}),X.resolve([]))}})).then((function(){L.current=void 0}))},preserveTestEnvironment:function(){this.preserveEnvironment&&(this.module.testEnvironment=this.testEnvironment,this.testEnvironment=q({},this.module.testEnvironment))},queue:function(){var e=this
if(this.valid()){var t=L.storage&&+L.storage.getItem("qunit-test-"+this.module.name+"-"+this.testName),n=L.reorder&&!!t
this.previousFailure=!!t,ue.add((function(){return[function(){return e.before()}].concat(f(e.hooks("before")),[function(){e.preserveTestEnvironment()}],f(e.hooks("beforeEach")),[function(){e.run()}],f(e.hooks("afterEach").reverse()),f(e.hooks("after").reverse()),[function(){e.after()},function(){return e.finish()}])}),n,L.seed)}else Te(this.module)},pushResult:function(e){if(this!==L.current){var t=e&&e.message||"",n=this&&this.testName||""
throw new Error("Assertion occurred after test finished.\n> Test: "+n+"\n> Message: "+t+"\n")}var r={module:this.module.name,name:this.testName,result:e.result,message:e.message,actual:e.actual,testId:this.testId,negative:e.negative||!1,runtime:_()-this.started,todo:!!this.todo}
if(C.call(e,"expected")&&(r.expected=e.expected),!e.result){var i=e.source||ne()
i&&(r.source=i)}this.logAssertion(r),this.assertions.push({result:!!e.result,message:e.message})},pushFailure:function(e,t,n){if(!(this instanceof ce))throw new Error("pushFailure() assertion outside test context, was "+ne(2))
this.pushResult({result:!1,message:e||"error",actual:n||null,source:t})},logAssertion:function(e){K("log",e)
var t={passed:e.result,actual:e.actual,expected:e.expected,message:e.message,stack:e.source,todo:e.todo}
this.testReport.pushAssertion(t),W("assertion",t)},resolvePromise:function(e,t){if(null!=e){var n=this,r=e.then
if("function"===I(r)){var i=be(n),o=function(){i()}
L.notrycatch?r.call(e,o):r.call(e,o,(function(e){var r="Promise rejected "+(t?t.replace(/Each$/,""):"during")+' "'+n.testName+'": '+(e&&e.message||e)
n.pushFailure(r,te(e,0)),de(),we(n)}))}}},valid:function(){var e=L.filter,t=/^(!?)\/([\w\W]*)\/(i?$)/.exec(e),n=L.module&&L.module.toLowerCase(),r=this.module.name+": "+this.testName
return!(!this.callback||!this.callback.validTest)||!(L.moduleId&&L.moduleId.length>0&&!function e(t){return A(t.moduleId,L.moduleId)||t.parentModule&&e(t.parentModule)}(this.module))&&!(L.testId&&L.testId.length>0&&!A(this.testId,L.testId))&&!(n&&!function e(t){return(t.name?t.name.toLowerCase():null)===n||!!t.parentModule&&e(t.parentModule)}(this.module))&&(!e||(t?this.regexFilter(!!t[1],t[2],t[3],r):this.stringFilter(e,r)))},regexFilter:function(e,t,n,r){return new RegExp(t,n).test(r)!==e},stringFilter:function(e,t){e=e.toLowerCase(),t=t.toLowerCase()
var n="!"!==e.charAt(0)
return n||(e=e.slice(1)),-1!==t.indexOf(e)?n:!n}}
var he=!1
function pe(e){he||L.currentModule.ignored||new ce(e).queue()}function ge(e){L.currentModule.ignored||(he||(L.queue.length=0,he=!0),new ce(e).queue())}function me(e,t){pe({testName:e,callback:t})}function ve(e,t){return"".concat(e," [").concat(t,"]")}function ye(e,t){if(Array.isArray(e))e.forEach(t)
else{if("object"!==s(e)||null===e)throw new Error("test.each() expects an array or object as input, but\nfound ".concat(s(e)," instead."))
Object.keys(e).forEach((function(n){t(e[n],n)}))}}function be(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1
L.blocking=!0
var n,r=e.nextPauseId++,i={cancelled:!1,remaining:t}
function o(){if(!i.cancelled){if(void 0===L.current)throw new Error("Unexpected release of async pause after tests finished.\n"+"> Test: ".concat(e.testName," [async #").concat(r,"]"))
if(L.current!==e)throw new Error("Unexpected release of async pause during a different test.\n"+"> Test: ".concat(e.testName," [async #").concat(r,"]"))
if(i.remaining<=0)throw new Error("Tried to release async pause that was already released.\n"+"> Test: ".concat(e.testName," [async #").concat(r,"]"))
i.remaining--,0===i.remaining&&e.pauses.delete(r),ke(e)}}return e.pauses.set(r,i),y&&("number"==typeof e.timeout?n=e.timeout:"number"==typeof L.testTimeout&&(n=L.testTimeout),"number"==typeof n&&n>0&&(L.timeoutHandler=function(t){return function(){L.timeout=null,i.cancelled=!0,e.pauses.delete(r),e.pushFailure("Test took longer than ".concat(t,"ms; test timed out."),ne(2)),ke(e)}},b(L.timeout),L.timeout=y(L.timeoutHandler(n),n))),o}function we(e){e.pauses.forEach((function(e){e.cancelled=!0})),e.pauses.clear(),ke(e)}function ke(e){e.pauses.size>0||(y?(b(L.timeout),L.timeout=y((function(){e.pauses.size>0||(b(L.timeout),L.timeout=null,Ve())}))):Ve())}function xe(e){for(var t=[].concat(e.tests),n=f(e.childModules);n.length;){var r=n.shift()
t.push.apply(t,r.tests),n.push.apply(n,f(r.childModules))}return t}function Ee(e){return e.testsRun+e.testsIgnored===xe(e).length}function Te(e){for(e.testsIgnored++;e=e.parentModule;)e.testsIgnored++}q(me,{todo:function(e,t){pe({testName:e,callback:t,todo:!0})},skip:function(e){pe({testName:e,skip:!0})},only:function(e,t){ge({testName:e,callback:t})},each:function(e,t,n){ye(t,(function(t,r){pe({testName:ve(e,r),callback:n,withData:!0,data:t})}))}}),me.todo.each=function(e,t,n){ye(t,(function(t,r){pe({testName:ve(e,r),callback:n,todo:!0,withData:!0,data:t})}))},me.skip.each=function(e,t){ye(t,(function(t,n){pe({testName:ve(e,n),skip:!0})}))},me.only.each=function(e,t,n){ye(t,(function(t,r){ge({testName:ve(e,r),callback:n,withData:!0,data:t})}))}
var Ce=function(){function e(t){a(this,e),this.test=t}return l(e,[{key:"timeout",value:function(e){if("number"!=typeof e)throw new Error("You must pass a number as the duration to assert.timeout")
var t
this.test.timeout=e,L.timeout&&(b(L.timeout),L.timeout=null,L.timeoutHandler&&this.test.timeout>0&&(t=this.test.timeout,b(L.timeout),L.timeout=y(L.timeoutHandler(t),t)))}},{key:"step",value:function(e){var t=e,n=!!e
this.test.steps.push(e),"undefined"===I(e)||""===e?t="You must provide a message to assert.step":"string"!==I(e)&&(t="You must provide a string value to assert.step",n=!1),this.pushResult({result:n,message:t})}},{key:"verifySteps",value:function(e,t){var n=this.test.steps.slice()
this.deepEqual(n,e,t),this.test.steps.length=0}},{key:"expect",value:function(e){if(1!==arguments.length)return this.test.expected
this.test.expected=e}},{key:"async",value:function(e){var t=void 0===e?1:e
return be(this.test,t)}},{key:"push",value:function(t,n,r,i,o){return E.warn("assert.push is deprecated and will be removed in QUnit 3.0. Please use assert.pushResult instead (https://api.qunitjs.com/assert/pushResult)."),(this instanceof e?this:L.current.assert).pushResult({result:t,actual:n,expected:r,message:i,negative:o})}},{key:"pushResult",value:function(t){var n=this,r=n instanceof e&&n.test||L.current
if(!r)throw new Error("assertion outside test context, in "+ne(2))
return n instanceof e||(n=r.assert),n.test.pushResult(t)}},{key:"ok",value:function(e,t){t||(t=e?"okay":"failed, expected argument to be truthy, was: ".concat(D.parse(e))),this.pushResult({result:!!e,actual:e,expected:!0,message:t})}},{key:"notOk",value:function(e,t){t||(t=e?"failed, expected argument to be falsy, was: ".concat(D.parse(e)):"okay"),this.pushResult({result:!e,actual:e,expected:!1,message:t})}},{key:"true",value:function(e,t){this.pushResult({result:!0===e,actual:e,expected:!0,message:t})}},{key:"false",value:function(e,t){this.pushResult({result:!1===e,actual:e,expected:!1,message:t})}},{key:"equal",value:function(e,t,n){var r=t==e
this.pushResult({result:r,actual:e,expected:t,message:n})}},{key:"notEqual",value:function(e,t,n){var r=t!=e
this.pushResult({result:r,actual:e,expected:t,message:n,negative:!0})}},{key:"propEqual",value:function(e,t,n){e=R(e),t=R(t),this.pushResult({result:P(e,t),actual:e,expected:t,message:n})}},{key:"notPropEqual",value:function(e,t,n){e=R(e),t=R(t),this.pushResult({result:!P(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"deepEqual",value:function(e,t,n){this.pushResult({result:P(e,t),actual:e,expected:t,message:n})}},{key:"notDeepEqual",value:function(e,t,n){this.pushResult({result:!P(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"strictEqual",value:function(e,t,n){this.pushResult({result:t===e,actual:e,expected:t,message:n})}},{key:"notStrictEqual",value:function(e,t,n){this.pushResult({result:t!==e,actual:e,expected:t,message:n,negative:!0})}},{key:"throws",value:function(t,n,r){var i=c(_e(n,r,"throws"),2)
n=i[0],r=i[1]
var o=this instanceof e&&this.test||L.current
if("function"===I(t)){var s,a=!1
o.ignoreGlobalErrors=!0
try{t.call(o.testEnvironment)}catch(e){s=e}if(o.ignoreGlobalErrors=!1,s){var u=c(Se(s,n,r),3)
a=u[0],n=u[1],r=u[2]}o.assert.pushResult({result:a,actual:s&&B(s),expected:n,message:r})}else{var l='The value provided to `assert.throws` in "'+o.testName+'" was not a function.'
o.assert.pushResult({result:!1,actual:t,message:l})}}},{key:"rejects",value:function(t,n,r){var i=c(_e(n,r,"rejects"),2)
n=i[0],r=i[1]
var o=this instanceof e&&this.test||L.current,s=t&&t.then
if("function"===I(s)){var a=this.async()
return s.call(t,(function(){var e='The promise returned by the `assert.rejects` callback in "'+o.testName+'" did not reject.'
o.assert.pushResult({result:!1,message:e,actual:t}),a()}),(function(e){var t,i=c(Se(e,n,r),3)
t=i[0],n=i[1],r=i[2],o.assert.pushResult({result:t,actual:e&&B(e),expected:n,message:r}),a()}))}var u='The value provided to `assert.rejects` in "'+o.testName+'" was not a promise.'
o.assert.pushResult({result:!1,message:u,actual:t})}}]),e}()
function _e(e,t,n){var r=I(e)
if("string"===r){if(void 0===t)return t=e,[e=void 0,t]
throw new Error("assert."+n+" does not accept a string value for the expected argument.\nUse a non-string object value (e.g. RegExp or validator function) instead if necessary.")}if(e&&"regexp"!==r&&"function"!==r&&"object"!==r)throw new Error("Invalid expected value type ("+r+") provided to assert."+n+".")
return[e,t]}function Se(e,t,n){var r=!1,i=I(t)
if(t){if("regexp"===i)r=t.test(B(e)),t=String(t)
else if("function"===i&&void 0!==t.prototype&&e instanceof t)r=!0
else if("object"===i)r=e instanceof t.constructor&&e.name===t.name&&e.message===t.message,t=B(t)
else if("function"===i)try{r=!0===t.call({},e),t=null}catch(e){t=B(e)}}else r=!0
return[r,t,n]}Ce.prototype.raises=Ce.prototype.throws
var Ne,je,Ae,Re,qe=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
a(this,e),this.log=n.log||Function.prototype.bind.call(v.log,v),t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testStart",this.onTestStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return l(e,[{key:"onError",value:function(e){this.log("error",e)}},{key:"onRunStart",value:function(e){this.log("runStart",e)}},{key:"onTestStart",value:function(e){this.log("testStart",e)}},{key:"onTestEnd",value:function(e){this.log("testEnd",e)}},{key:"onRunEnd",value:function(e){this.log("runEnd",e)}}],[{key:"init",value:function(t,n){return new e(t,n)}}]),e}(),Ie=!0
if("undefined"!=typeof process){var Me=process.env
Ne=Me.FORCE_COLOR,je=Me.NODE_DISABLE_COLORS,Ae=Me.NO_COLOR,Re=Me.TERM,Ie=process.stdout&&process.stdout.isTTY}var Oe={enabled:!je&&null==Ae&&"dumb"!==Re&&(null!=Ne&&"0"!==Ne||Ie),reset:Pe(0,0),bold:Pe(1,22),dim:Pe(2,22),italic:Pe(3,23),underline:Pe(4,24),inverse:Pe(7,27),hidden:Pe(8,28),strikethrough:Pe(9,29),black:Pe(30,39),red:Pe(31,39),green:Pe(32,39),yellow:Pe(33,39),blue:Pe(34,39),magenta:Pe(35,39),cyan:Pe(36,39),white:Pe(37,39),gray:Pe(90,39),grey:Pe(90,39),bgBlack:Pe(40,49),bgRed:Pe(41,49),bgGreen:Pe(42,49),bgYellow:Pe(43,49),bgBlue:Pe(44,49),bgMagenta:Pe(45,49),bgCyan:Pe(46,49),bgWhite:Pe(47,49)}
function Be(e,t){for(var n,r=0,i="",o="";r<e.length;r++)i+=(n=e[r]).open,o+=n.close,~t.indexOf(n.close)&&(t=t.replace(n.rgx,n.close+n.open))
return i+t+o}function Pe(e,t){var n={open:"[".concat(e,"m"),close:"[".concat(t,"m"),rgx:new RegExp("\\x1b\\[".concat(t,"m"),"g")}
return function(t){return void 0!==this&&void 0!==this.has?(~this.has.indexOf(e)||(this.has.push(e),this.keys.push(n)),void 0===t?this:Oe.enabled?Be(this.keys,t+""):t+""):void 0===t?((r={has:[e],keys:[n]}).reset=Oe.reset.bind(r),r.bold=Oe.bold.bind(r),r.dim=Oe.dim.bind(r),r.italic=Oe.italic.bind(r),r.underline=Oe.underline.bind(r),r.inverse=Oe.inverse.bind(r),r.hidden=Oe.hidden.bind(r),r.strikethrough=Oe.strikethrough.bind(r),r.black=Oe.black.bind(r),r.red=Oe.red.bind(r),r.green=Oe.green.bind(r),r.yellow=Oe.yellow.bind(r),r.blue=Oe.blue.bind(r),r.magenta=Oe.magenta.bind(r),r.cyan=Oe.cyan.bind(r),r.white=Oe.white.bind(r),r.gray=Oe.gray.bind(r),r.grey=Oe.grey.bind(r),r.bgBlack=Oe.bgBlack.bind(r),r.bgRed=Oe.bgRed.bind(r),r.bgGreen=Oe.bgGreen.bind(r),r.bgYellow=Oe.bgYellow.bind(r),r.bgBlue=Oe.bgBlue.bind(r),r.bgMagenta=Oe.bgMagenta.bind(r),r.bgCyan=Oe.bgCyan.bind(r),r.bgWhite=Oe.bgWhite.bind(r),r):Oe.enabled?Be([n],t+""):t+""
var r}}var Le=Object.prototype.hasOwnProperty
function Ue(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4
if(void 0===e&&(e=String(e)),"number"!=typeof e||isFinite(e)||(e=String(e)),"number"==typeof e)return JSON.stringify(e)
if("string"==typeof e){var n=/['"\\/[{}\]\r\n]/,r=/[-?:,[\]{}#&*!|=>'"%@`]/,i=/(^\s|\s$)/,o=/^[\d._-]+$/,s=/^(true|false|y|n|yes|no|on|off)$/i
if(""===e||n.test(e)||r.test(e[0])||i.test(e)||o.test(e)||s.test(e)){if(!/\n/.test(e))return JSON.stringify(e)
var a=new Array(t+1).join(" "),u=e.match(/\n+$/),l=u?u[0].length:0
if(1===l){var c=e.replace(/\n$/,"").split("\n").map((function(e){return a+e}))
return"|\n"+c.join("\n")}var f=e.split("\n").map((function(e){return a+e}))
return"|+\n"+f.join("\n")}return e}return JSON.stringify(De(e),null,2)}function De(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
if(-1!==n.indexOf(e))return"[Circular]"
var r=Object.prototype.toString.call(e).replace(/^\[.+\s(.+?)]$/,"$1").toLowerCase()
switch(r){case"array":n.push(e),t=e.map((function(e){return De(e,n)})),n.pop()
break
case"object":n.push(e),t={},Object.keys(e).forEach((function(r){t[r]=De(e[r],n)})),n.pop()
break
default:t=e}return t}var Fe=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
a(this,e),this.log=n.log||Function.prototype.bind.call(v.log,v),this.testCount=0,this.ended=!1,this.bailed=!1,t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return l(e,[{key:"onRunStart",value:function(e){this.log("TAP version 13")}},{key:"onError",value:function(e){this.bailed||(this.bailed=!0,this.ended||(this.testCount=this.testCount+1,this.log(Oe.red("not ok ".concat(this.testCount," global failure"))),this.logError(e)),this.log("Bail out! "+B(e).split("\n")[0]),this.ended&&this.logError(e))}},{key:"onTestEnd",value:function(e){var t=this
this.testCount=this.testCount+1,"passed"===e.status?this.log("ok ".concat(this.testCount," ").concat(e.fullName.join(" > "))):"skipped"===e.status?this.log(Oe.yellow("ok ".concat(this.testCount," # SKIP ").concat(e.fullName.join(" > ")))):"todo"===e.status?(this.log(Oe.cyan("not ok ".concat(this.testCount," # TODO ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e,"todo")}))):(this.log(Oe.red("not ok ".concat(this.testCount," ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e)})))}},{key:"onRunEnd",value:function(e){this.ended=!0,this.log("1..".concat(e.testCounts.total)),this.log("# pass ".concat(e.testCounts.passed)),this.log(Oe.yellow("# skip ".concat(e.testCounts.skipped))),this.log(Oe.cyan("# todo ".concat(e.testCounts.todo))),this.log(Oe.red("# fail ".concat(e.testCounts.failed)))}},{key:"logAssertion",value:function(e,t){var n="  ---"
n+="\n  message: ".concat(Ue(e.message||"failed")),n+="\n  severity: ".concat(Ue(t||"failed")),Le.call(e,"actual")&&(n+="\n  actual  : ".concat(Ue(e.actual))),Le.call(e,"expected")&&(n+="\n  expected: ".concat(Ue(e.expected))),e.stack&&(n+="\n  stack: ".concat(Ue(e.stack+"\n"))),n+="\n  ...",this.log(n)}},{key:"logError",value:function(e){var t="  ---"
t+="\n  message: ".concat(Ue(B(e))),t+="\n  severity: ".concat(Ue("failed")),e&&e.stack&&(t+="\n  stack: ".concat(Ue(e.stack+"\n"))),t+="\n  ...",this.log(t)}}],[{key:"init",value:function(t,n){return new e(t,n)}}]),e}(),He={console:qe,tap:Fe}
function Qe(e){L.current?L.current.assert.pushResult({result:!1,message:"global failure: ".concat(B(e)),source:e&&e.stack||ne(2)}):(ze.globalFailureCount++,L.stats.bad++,L.stats.all++,W("error",e))}var $e={},ze=new F
L.currentModule.suiteReport=ze
var Ge=!1,Ye=!1
function Je(){Ye=!0,y?y((function(){Ve()})):Ve()}function We(){L.blocking=!1,ue.advance()}function Ve(){if(L.started)We()
else{L.started=_(),""===L.modules[0].name&&0===L.modules[0].tests.length&&L.modules.shift()
for(var e=L.modules.length,t=[],n=0;n<e;n++)t.push({name:L.modules[n].name,tests:L.modules[n].tests})
W("runStart",ze.start(!0)),K("begin",{totalTests:ce.count,modules:t}).then(We)}}$e.isLocal=g&&g.location&&"file:"===g.location.protocol,$e.version="2.17.2",q($e,{config:L,dump:D,equiv:P,reporters:He,is:M,objectType:I,on:function(e,t){if("string"!==I(e))throw new TypeError("eventName must be a string when registering a listener")
if(!A(e,J)){var n=J.join(", ")
throw new Error('"'.concat(e,'" is not a valid event; must be one of: ').concat(n,"."))}if("function"!==I(t))throw new TypeError("callback must be a function when registering a listener")
Y[e]||(Y[e]=[]),A(t,Y[e])||Y[e].push(t)},onError:function(e){if(E.warn("QUnit.onError is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),L.current&&L.current.ignoreGlobalErrors)return!0
var t=new Error(e.message)
return t.stack=e.stacktrace||e.fileName+":"+e.lineNumber,Qe(t),!1},onUncaughtException:Qe,pushFailure:fe,assert:Ce.prototype,module:G,test:me,todo:me.todo,skip:me.skip,only:me.only,start:function(e){if(L.current)throw new Error("QUnit.start cannot be called inside a test context.")
var t=Ge
if(Ge=!0,Ye)throw new Error("Called start() while test already started running")
if(t||e>1)throw new Error("Called start() outside of a test context too many times")
if(L.autostart)throw new Error("Called start() outside of a test context when QUnit.config.autostart was true")
if(!L.pageLoaded)return L.autostart=!0,void(w||$e.load())
Je()},onUnhandledRejection:function(e){E.warn("QUnit.onUnhandledRejection is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),Qe(e)},extend:function(){E.warn("QUnit.extend is deprecated and will be removed in QUnit 3.0. Please use Object.assign instead.")
for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return q.apply(this,t)},load:function(){L.pageLoaded=!0,q(L,{started:0,updateRate:1e3,autostart:!0,filter:""},!0),Ye||(L.blocking=!1,L.autostart&&Je())},stack:function(e){return ne(e=(e||0)+2)}}),function(e){var t=["begin","done","log","testStart","testDone","moduleStart","moduleDone"]
function n(e){return function(t){if("function"!==I(t))throw new Error("QUnit logging methods require a callback function as their first parameters.")
L.callbacks[e].push(t)}}for(var r=0,i=t.length;r<i;r++){var o=t[r]
"undefined"===I(L.callbacks[o])&&(L.callbacks[o]=[]),e[o]=n(o)}}($e),function(i){var o=!1
if(g&&w){if(g.QUnit&&g.QUnit.version)throw new Error("QUnit has already been defined.")
g.QUnit=i,o=!0}e&&e.exports&&(e.exports=i,e.exports.QUnit=i,o=!0),t&&(t.QUnit=i,o=!0),void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r),i.config.autostart=!1,o=!0,m&&m.WorkerGlobalScope&&m instanceof m.WorkerGlobalScope&&(m.QUnit=i,o=!0),o||(p.QUnit=i)}($e),function(){if(g&&w){var e=$e.config,t=Object.prototype.hasOwnProperty
$e.begin((function(){if(!t.call(e,"fixture")){var n=w.getElementById("qunit-fixture")
n&&(e.fixture=n.cloneNode(!0))}})),$e.testStart((function(){if(null!=e.fixture){var t=w.getElementById("qunit-fixture")
if("string"===s(e.fixture)){var n=w.createElement("div")
n.setAttribute("id","qunit-fixture"),n.innerHTML=e.fixture,t.parentNode.replaceChild(n,t)}else{var r=e.fixture.cloneNode(!0)
t.parentNode.replaceChild(r,t)}}}))}}(),function(){var e=void 0!==g&&g.location
if(e){var t=function(){var t,r,i,o,s=Object.create(null),a=e.search.slice(1).split("&"),u=a.length
for(t=0;t<u;t++)a[t]&&(i=n((r=a[t].split("="))[0]),o=1===r.length||n(r.slice(1).join("=")),s[i]=i in s?[].concat(s[i],o):o)
return s}()
$e.urlParams=t,$e.config.moduleId=[].concat(t.moduleId||[]),$e.config.testId=[].concat(t.testId||[]),$e.config.module=t.module,$e.config.filter=t.filter,!0===t.seed?$e.config.seed=Math.random().toString(36).slice(2):t.seed&&($e.config.seed=t.seed),$e.config.urlConfig.push({id:"hidepassed",label:"Hide passed tests",tooltip:"Only show tests and assertions that fail. Stored as query-strings."},{id:"noglobals",label:"Check for Globals",tooltip:"Enabling this will test if any test introduces new properties on the global object (`window` in Browsers). Stored as query-strings."},{id:"notrycatch",label:"No try-catch",tooltip:"Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."}),$e.begin((function(){var e,n,r=$e.config.urlConfig
for(e=0;e<r.length;e++)"string"!=typeof(n=$e.config.urlConfig[e])&&(n=n.id),void 0===$e.config[n]&&($e.config[n]=t[n])}))}function n(e){return decodeURIComponent(e.replace(/\+/g,"%20"))}}()
var Ze={exports:{}}
!function(e){var t,n
t=V,n=function(){var e="undefined"==typeof window,t=new o,n=new o,r=[]
r.total=0
var i=[],a=[]
function u(){t.clear(),n.clear(),i=[],a=[]}function l(e){for(var t=-9007199254740991,n=e.length-1;n>=0;--n){var r=e[n]
if(null!==r){var i=r.score
i>t&&(t=i)}}return-9007199254740991===t?null:t}function c(e,t){var n=e[t]
if(void 0!==n)return n
var r=t
Array.isArray(t)||(r=t.split("."))
for(var i=r.length,o=-1;e&&++o<i;)e=e[r[o]]
return e}function f(e){return"object"===s(e)}var d=function(){var e=[],t=0,n={}
function r(){for(var n=0,r=e[n],i=1;i<t;){var o=i+1
n=i,o<t&&e[o].score<e[i].score&&(n=o),e[n-1>>1]=e[n],i=1+(n<<1)}for(var s=n-1>>1;n>0&&r.score<e[s].score;s=(n=s)-1>>1)e[n]=e[s]
e[n]=r}return n.add=function(n){var r=t
e[t++]=n
for(var i=r-1>>1;r>0&&n.score<e[i].score;i=(r=i)-1>>1)e[r]=e[i]
e[r]=n},n.poll=function(){if(0!==t){var n=e[0]
return e[0]=e[--t],r(),n}},n.peek=function(n){if(0!==t)return e[0]},n.replaceTop=function(t){e[0]=t,r()},n},h=d()
return function o(s){var p={single:function(e,t,n){return e?(f(e)||(e=p.getPreparedSearch(e)),t?(f(t)||(t=p.getPrepared(t)),((n&&void 0!==n.allowTypo?n.allowTypo:!s||void 0===s.allowTypo||s.allowTypo)?p.algorithm:p.algorithmNoTypo)(e,t,e[0])):null):null},go:function(e,t,n){if(!e)return r
var i=(e=p.prepareSearch(e))[0],o=n&&n.threshold||s&&s.threshold||-9007199254740991,a=n&&n.limit||s&&s.limit||9007199254740991,u=(n&&void 0!==n.allowTypo?n.allowTypo:!s||void 0===s.allowTypo||s.allowTypo)?p.algorithm:p.algorithmNoTypo,d=0,g=0,m=t.length
if(n&&n.keys)for(var v=n.scoreFn||l,y=n.keys,b=y.length,w=m-1;w>=0;--w){for(var k=t[w],x=new Array(b),E=b-1;E>=0;--E)(_=c(k,C=y[E]))?(f(_)||(_=p.getPrepared(_)),x[E]=u(e,_,i)):x[E]=null
x.obj=k
var T=v(x)
null!==T&&(T<o||(x.score=T,d<a?(h.add(x),++d):(++g,T>h.peek().score&&h.replaceTop(x))))}else if(n&&n.key){var C=n.key
for(w=m-1;w>=0;--w)(_=c(k=t[w],C))&&(f(_)||(_=p.getPrepared(_)),null!==(S=u(e,_,i))&&(S.score<o||(S={target:S.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:S.score,indexes:S.indexes,obj:k},d<a?(h.add(S),++d):(++g,S.score>h.peek().score&&h.replaceTop(S)))))}else for(w=m-1;w>=0;--w){var _,S;(_=t[w])&&(f(_)||(_=p.getPrepared(_)),null!==(S=u(e,_,i))&&(S.score<o||(d<a?(h.add(S),++d):(++g,S.score>h.peek().score&&h.replaceTop(S)))))}if(0===d)return r
var N=new Array(d)
for(w=d-1;w>=0;--w)N[w]=h.poll()
return N.total=d+g,N},goAsync:function(t,n,i){var o=!1,a=new Promise((function(a,u){if(!t)return a(r)
var h=(t=p.prepareSearch(t))[0],g=d(),m=n.length-1,v=i&&i.threshold||s&&s.threshold||-9007199254740991,y=i&&i.limit||s&&s.limit||9007199254740991,b=(i&&void 0!==i.allowTypo?i.allowTypo:!s||void 0===s.allowTypo||s.allowTypo)?p.algorithm:p.algorithmNoTypo,w=0,k=0
function x(){if(o)return u("canceled")
var s=Date.now()
if(i&&i.keys)for(var d=i.scoreFn||l,E=i.keys,T=E.length;m>=0;--m){for(var C=n[m],_=new Array(T),S=T-1;S>=0;--S)(A=c(C,j=E[S]))?(f(A)||(A=p.getPrepared(A)),_[S]=b(t,A,h)):_[S]=null
_.obj=C
var N=d(_)
if(null!==N&&!(N<v)&&(_.score=N,w<y?(g.add(_),++w):(++k,N>g.peek().score&&g.replaceTop(_)),m%1e3==0&&Date.now()-s>=10))return void(e?setImmediate(x):setTimeout(x))}else if(i&&i.key){for(var j=i.key;m>=0;--m)if((A=c(C=n[m],j))&&(f(A)||(A=p.getPrepared(A)),null!==(R=b(t,A,h))&&!(R.score<v)&&(R={target:R.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:R.score,indexes:R.indexes,obj:C},w<y?(g.add(R),++w):(++k,R.score>g.peek().score&&g.replaceTop(R)),m%1e3==0&&Date.now()-s>=10)))return void(e?setImmediate(x):setTimeout(x))}else for(;m>=0;--m){var A,R
if((A=n[m])&&(f(A)||(A=p.getPrepared(A)),null!==(R=b(t,A,h))&&!(R.score<v)&&(w<y?(g.add(R),++w):(++k,R.score>g.peek().score&&g.replaceTop(R)),m%1e3==0&&Date.now()-s>=10)))return void(e?setImmediate(x):setTimeout(x))}if(0===w)return a(r)
for(var q=new Array(w),I=w-1;I>=0;--I)q[I]=g.poll()
q.total=w+k,a(q)}e?setImmediate(x):x()}))
return a.cancel=function(){o=!0},a},highlight:function(e,t,n){if(null===e)return null
void 0===t&&(t="<b>"),void 0===n&&(n="</b>")
for(var r="",i=0,o=!1,s=e.target,a=s.length,u=e.indexes,l=0;l<a;++l){var c=s[l]
if(u[i]===l){if(o||(o=!0,r+=t),++i===u.length){r+=c+n+s.substr(l+1)
break}}else o&&(o=!1,r+=n)
r+=c}return r},prepare:function(e){if(e)return{target:e,_targetLowerCodes:p.prepareLowerCodes(e),_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSlow:function(e){if(e)return{target:e,_targetLowerCodes:p.prepareLowerCodes(e),_nextBeginningIndexes:p.prepareNextBeginningIndexes(e),score:null,indexes:null,obj:null}},prepareSearch:function(e){if(e)return p.prepareLowerCodes(e)},getPrepared:function(e){if(e.length>999)return p.prepare(e)
var n=t.get(e)
return void 0!==n||(n=p.prepare(e),t.set(e,n)),n},getPreparedSearch:function(e){if(e.length>999)return p.prepareSearch(e)
var t=n.get(e)
return void 0!==t||(t=p.prepareSearch(e),n.set(e,t)),t},algorithm:function(e,t,n){for(var r=t._targetLowerCodes,o=e.length,s=r.length,u=0,l=0,c=0,f=0;;){if(n===r[l]){if(i[f++]=l,++u===o)break
n=e[0===c?u:c===u?u+1:c===u-1?u-1:u]}if(++l>=s)for(;;){if(u<=1)return null
if(0===c){if(n===e[--u])continue
c=u}else{if(1===c)return null
if((n=e[1+(u=--c)])===e[u])continue}l=i[(f=u)-1]+1
break}}u=0
var d=0,h=!1,g=0,m=t._nextBeginningIndexes
null===m&&(m=t._nextBeginningIndexes=p.prepareNextBeginningIndexes(t.target))
var v=l=0===i[0]?0:m[i[0]-1]
if(l!==s)for(;;)if(l>=s){if(u<=0){if(++d>o-2)break
if(e[d]===e[d+1])continue
l=v
continue}--u,l=m[a[--g]]}else if(e[0===d?u:d===u?u+1:d===u-1?u-1:u]===r[l]){if(a[g++]=l,++u===o){h=!0
break}++l}else l=m[l]
if(h)var y=a,b=g
else y=i,b=f
for(var w=0,k=-1,x=0;x<o;++x)k!==(l=y[x])-1&&(w-=l),k=l
for(h?0!==d&&(w+=-20):(w*=1e3,0!==c&&(w+=-20)),w-=s-o,t.score=w,t.indexes=new Array(b),x=b-1;x>=0;--x)t.indexes[x]=y[x]
return t},algorithmNoTypo:function(e,t,n){for(var r=t._targetLowerCodes,o=e.length,s=r.length,u=0,l=0,c=0;;){if(n===r[l]){if(i[c++]=l,++u===o)break
n=e[u]}if(++l>=s)return null}u=0
var f=!1,d=0,h=t._nextBeginningIndexes
if(null===h&&(h=t._nextBeginningIndexes=p.prepareNextBeginningIndexes(t.target)),(l=0===i[0]?0:h[i[0]-1])!==s)for(;;)if(l>=s){if(u<=0)break;--u,l=h[a[--d]]}else if(e[u]===r[l]){if(a[d++]=l,++u===o){f=!0
break}++l}else l=h[l]
if(f)var g=a,m=d
else g=i,m=c
for(var v=0,y=-1,b=0;b<o;++b)y!==(l=g[b])-1&&(v-=l),y=l
for(f||(v*=1e3),v-=s-o,t.score=v,t.indexes=new Array(m),b=m-1;b>=0;--b)t.indexes[b]=g[b]
return t},prepareLowerCodes:function(e){for(var t=e.length,n=[],r=e.toLowerCase(),i=0;i<t;++i)n[i]=r.charCodeAt(i)
return n},prepareBeginningIndexes:function(e){for(var t=e.length,n=[],r=0,i=!1,o=!1,s=0;s<t;++s){var a=e.charCodeAt(s),u=a>=65&&a<=90,l=u||a>=97&&a<=122||a>=48&&a<=57,c=u&&!i||!o||!l
i=u,o=l,c&&(n[r++]=s)}return n},prepareNextBeginningIndexes:function(e){for(var t=e.length,n=p.prepareBeginningIndexes(e),r=[],i=n[0],o=0,s=0;s<t;++s)i>s?r[s]=i:(i=n[++o],r[s]=void 0===i?t:i)
return r},cleanup:u,new:o}
return p}()},e.exports?e.exports=n():t.fuzzysort=n()}(Ze)
var Xe=Ze.exports,Ke={failedTests:[],defined:0,completed:0}
function et(e){return e?(e+="").replace(/['"<>&]/g,(function(e){switch(e){case"'":return"&#039;"
case'"':return"&quot;"
case"<":return"&lt;"
case">":return"&gt;"
case"&":return"&amp;"}})):""}!function(){if(g&&w){var e=$e.config,t=[],n=!1,r=Object.prototype.hasOwnProperty,i=C({filter:void 0,module:void 0,moduleId:void 0,testId:void 0})
$e.on("runStart",(function(e){Ke.defined=e.testCounts.total})),$e.begin((function(){var t,n,o,s,a,u,d,h,v,C,N;(u=b("qunit"))&&(u.setAttribute("role","main"),u.innerHTML="<h1 id='qunit-header'>"+et(w.title)+"</h1><h2 id='qunit-banner'></h2><div id='qunit-testrunner-toolbar' role='navigation'></div>"+(!(t=$e.config.testId)||t.length<=0?"":"<div id='qunit-filteredTest'>Rerunning selected tests: "+et(t.join(", "))+" <a id='qunit-clearFilter' href='"+et(i)+"'>Run all tests</a></div>")+"<h2 id='qunit-userAgent'></h2><ol id='qunit-tests'></ol>"),(n=b("qunit-header"))&&(n.innerHTML="<a href='"+et(i)+"'>"+n.innerHTML+"</a> "),(o=b("qunit-banner"))&&(o.className=""),C=b("qunit-tests"),(N=b("qunit-testresult"))&&N.parentNode.removeChild(N),C&&(C.innerHTML="",(N=w.createElement("p")).id="qunit-testresult",N.className="result",C.parentNode.insertBefore(N,C),N.innerHTML='<div id="qunit-testresult-display">Running...<br />&#160;</div><div id="qunit-testresult-controls"></div><div class="clearfix"></div>',h=b("qunit-testresult-controls")),h&&h.appendChild(((v=w.createElement("button")).id="qunit-abort-tests-button",v.innerHTML="Abort",l(v,"click",x),v)),(s=b("qunit-userAgent"))&&(s.innerHTML="",s.appendChild(w.createTextNode("QUnit "+$e.version+"; "+k.userAgent))),(a=b("qunit-testrunner-toolbar"))&&(a.appendChild(((d=w.createElement("span")).innerHTML=function(){var t,n,i,o,s,a=!1,u=e.urlConfig,l=""
for(t=0;t<u.length;t++)if("string"==typeof(i=e.urlConfig[t])&&(i={id:i,label:i}),o=et(i.id),s=et(i.tooltip),i.value&&"string"!=typeof i.value){if(l+="<label for='qunit-urlconfig-"+o+"' title='"+s+"'>"+i.label+": </label><select id='qunit-urlconfig-"+o+"' name='"+o+"' title='"+s+"'><option></option>",Array.isArray(i.value))for(n=0;n<i.value.length;n++)l+="<option value='"+(o=et(i.value[n]))+"'"+(e[i.id]===i.value[n]?(a=!0)&&" selected='selected'":"")+">"+o+"</option>"
else for(n in i.value)r.call(i.value,n)&&(l+="<option value='"+et(n)+"'"+(e[i.id]===n?(a=!0)&&" selected='selected'":"")+">"+et(i.value[n])+"</option>")
e[i.id]&&!a&&(l+="<option value='"+(o=et(e[i.id]))+"' selected='selected' disabled='disabled'>"+o+"</option>"),l+="</select>"}else l+="<label for='qunit-urlconfig-"+o+"' title='"+s+"'><input id='qunit-urlconfig-"+o+"' name='"+o+"' type='checkbox'"+(i.value?" value='"+et(i.value)+"'":"")+(e[i.id]?" checked='checked'":"")+" title='"+s+"' />"+et(i.label)+"</label>"
return l}(),p(d,"qunit-url-config"),f(d.getElementsByTagName("input"),"change",T),f(d.getElementsByTagName("select"),"change",T),d)),a.appendChild(function(){var t,n,r,i,o=w.createElement("span")
return o.id="qunit-toolbar-filters",o.appendChild((t=w.createElement("form"),n=w.createElement("label"),r=w.createElement("input"),i=w.createElement("button"),p(t,"qunit-filter"),n.innerHTML="Filter: ",r.type="text",r.value=e.filter||"",r.name="filter",r.id="qunit-filter-input",i.innerHTML="Go",n.appendChild(r),t.appendChild(n),t.appendChild(w.createTextNode(" ")),t.appendChild(i),l(t,"submit",E),t)),o.appendChild(function(){var t,n,r,i=w.createElement("form"),o=w.createElement("label"),s=w.createElement("input"),a=w.createElement("div"),u=w.createElement("span"),f=w.createElement("button"),d=w.createElement("button"),h=w.createElement("label"),p=w.createElement("input"),v=w.createElement("ul"),b=!1
function k(){function e(t){var n=i.contains(t.target)
27!==t.keyCode&&n||(27===t.keyCode&&n&&s.focus(),a.style.display="none",c(w,"click",e),c(w,"keydown",e),s.value="",x())}"none"===a.style.display&&(a.style.display="block",l(w,"click",e),l(w,"keydown",e))}function x(){g.clearTimeout(r),r=g.setTimeout((function(){var t,n=""===(t=s.value.toLowerCase())?e.modules:Xe.go(t,e.modules,{key:"namePrepared",threshold:-1e4}).map((function(e){return e.obj}))
v.innerHTML=S(n)}),200)}function T(e){var r,i,o=e&&e.target||p,a=v.getElementsByTagName("input"),u=[]
for(m(o.parentNode,"checked",o.checked),b=!1,o.checked&&o!==p&&(p.checked=!1,y(p.parentNode,"checked")),r=0;r<a.length;r++)i=a[r],e?o===p&&o.checked&&(i.checked=!1,y(i.parentNode,"checked")):m(i.parentNode,"checked",i.checked),b=b||i.checked!==i.defaultChecked,i.checked&&u.push(i.parentNode.textContent)
t.style.display=n.style.display=b?"":"none",s.placeholder=u.join(", ")||p.parentNode.textContent,s.title="Type to filter list. Current selection:\n"+(u.join("\n")||p.parentNode.textContent)}return s.id="qunit-modulefilter-search",s.autocomplete="off",l(s,"input",x),l(s,"input",k),l(s,"focus",k),l(s,"click",k),e.modules.forEach((function(e){return e.namePrepared=Xe.prepare(e.name)})),o.id="qunit-modulefilter-search-container",o.innerHTML="Module: ",o.appendChild(s),f.textContent="Apply",f.style.display="none",d.textContent="Reset",d.type="reset",d.style.display="none",p.type="checkbox",p.checked=0===e.moduleId.length,h.className="clickable",e.moduleId.length&&(h.className="checked"),h.appendChild(p),h.appendChild(w.createTextNode("All modules")),u.id="qunit-modulefilter-actions",u.appendChild(f),u.appendChild(d),u.appendChild(h),t=u.firstChild,n=t.nextSibling,l(t,"click",_),v.id="qunit-modulefilter-dropdown-list",v.innerHTML=S(e.modules),a.id="qunit-modulefilter-dropdown",a.style.display="none",a.appendChild(u),a.appendChild(v),l(a,"change",T),T(),i.id="qunit-modulefilter",i.appendChild(o),i.appendChild(a),l(i,"submit",E),l(i,"reset",(function(){g.setTimeout(T)})),i}()),o}()),a.appendChild(w.createElement("div")).className="clearfix")})),$e.on("runEnd",(function(t){var n,r,i,o=b("qunit-banner"),s=b("qunit-tests"),a=b("qunit-abort-tests-button"),u=e.stats.all-e.stats.bad,l=[t.testCounts.total," tests completed in ",t.runtime," milliseconds, with ",t.testCounts.failed," failed, ",t.testCounts.skipped," skipped, and ",t.testCounts.todo," todo.<br />","<span class='passed'>",u,"</span> assertions of <span class='total'>",e.stats.all,"</span> passed, <span class='failed'>",e.stats.bad,"</span> failed.",j(Ke.failedTests)].join("")
if(a&&a.disabled){l="Tests aborted after "+t.runtime+" milliseconds."
for(var c=0;c<s.children.length;c++)""!==(n=s.children[c]).className&&"running"!==n.className||(n.className="aborted",i=n.getElementsByTagName("ol")[0],(r=w.createElement("li")).className="fail",r.innerHTML="Test aborted.",i.appendChild(r))}!o||a&&!1!==a.disabled||(o.className="failed"===t.status?"qunit-fail":"qunit-pass"),a&&a.parentNode.removeChild(a),s&&(b("qunit-testresult-display").innerHTML=l),e.altertitle&&w.title&&(w.title=["failed"===t.status?"✖":"✔",w.title.replace(/^[\u2714\u2716] /i,"")].join(" ")),e.scrolltop&&g.scrollTo&&g.scrollTo(0,0)})),$e.testStart((function(e){var t,n
N(e.name,e.testId,e.module),(t=b("qunit-testresult-display"))&&(p(t,"running"),n=$e.config.reorder&&e.previousFailure,t.innerHTML=[R(Ke),n?"Rerunning previously failed test: <br />":"Running: ",A(e.name,e.module),j(Ke.failedTests)].join(""))})),$e.log((function(e){var t,n,i,o,s,a,u=!1,l=b("qunit-test-output-"+e.testId)
l&&(i="<span class='test-message'>"+(i=et(e.message)||(e.result?"okay":"failed"))+"</span>",i+="<span class='runtime'>@ "+e.runtime+" ms</span>",!e.result&&r.call(e,"expected")?(o=e.negative?"NOT "+$e.dump.parse(e.expected):$e.dump.parse(e.expected),s=$e.dump.parse(e.actual),i+="<table><tr class='test-expected'><th>Expected: </th><td><pre>"+et(o)+"</pre></td></tr>",s!==o?(i+="<tr class='test-actual'><th>Result: </th><td><pre>"+et(s)+"</pre></td></tr>","number"==typeof e.actual&&"number"==typeof e.expected?isNaN(e.actual)||isNaN(e.expected)||(u=!0,a=((a=e.actual-e.expected)>0?"+":"")+a):"boolean"!=typeof e.actual&&"boolean"!=typeof e.expected&&(u=I(a=$e.diff(o,s)).length!==I(o).length+I(s).length),u&&(i+="<tr class='test-diff'><th>Diff: </th><td><pre>"+a+"</pre></td></tr>")):-1!==o.indexOf("[object Array]")||-1!==o.indexOf("[object Object]")?i+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the depth of object is more than current max depth ("+$e.config.maxDepth+").<p>Hint: Use <code>QUnit.dump.maxDepth</code> to  run with a higher max depth or <a href='"+et(C({maxDepth:-1}))+"'>Rerun</a> without max depth.</p></td></tr>":i+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the expected and actual results have an equivalent serialization</td></tr>",e.source&&(i+="<tr class='test-source'><th>Source: </th><td><pre>"+et(e.source)+"</pre></td></tr>"),i+="</table>"):!e.result&&e.source&&(i+="<table><tr class='test-source'><th>Source: </th><td><pre>"+et(e.source)+"</pre></td></tr></table>"),t=l.getElementsByTagName("ol")[0],(n=w.createElement("li")).className=e.result?"pass":"fail",n.innerHTML=i,t.appendChild(n))})),$e.testDone((function(r){var i,o,s,a,u,c,f,d,h,g=b("qunit-tests"),v=b("qunit-test-output-"+r.testId)
if(g&&v){y(v,"running"),a=r.failed>0?"failed":r.todo?"todo":r.skipped?"skipped":"passed",s=v.getElementsByTagName("ol")[0],u=r.passed,c=r.failed
var k=r.failed>0?r.todo:!r.todo
if(k?p(s,"qunit-collapsed"):(Ke.failedTests.push(r.testId),e.collapse&&(n?p(s,"qunit-collapsed"):n=!0)),f=c?"<b class='failed'>"+c+"</b>, <b class='passed'>"+u+"</b>, ":"",(i=v.firstChild).innerHTML+=" <b class='counts'>("+f+r.assertions.length+")</b>",Ke.completed++,r.skipped)v.className="skipped",(d=w.createElement("em")).className="qunit-skipped-label",d.innerHTML="skipped",v.insertBefore(d,i)
else{if(l(i,"click",(function(){m(s,"qunit-collapsed")})),v.className=k?"pass":"fail",r.todo){var x=w.createElement("em")
x.className="qunit-todo-label",x.innerHTML="todo",v.className+=" todo",v.insertBefore(x,i)}(o=w.createElement("span")).className="runtime",o.innerHTML=r.runtime+" ms",v.insertBefore(o,s)}r.source&&((h=w.createElement("p")).innerHTML="<strong>Source: </strong>"+et(r.source),p(h,"qunit-source"),k&&p(h,"qunit-collapsed"),l(i,"click",(function(){m(h,"qunit-collapsed")})),v.appendChild(h)),e.hidepassed&&("passed"===a||r.skipped)&&(t.push(v),g.removeChild(v))}})),$e.on("error",(function(e){var t=N("global failure")
if(t){var n=et(B(e))
n="<span class='test-message'>"+n+"</span>",e&&e.stack&&(n+="<table><tr class='test-source'><th>Source: </th><td><pre>"+et(e.stack)+"</pre></td></tr></table>")
var r=t.getElementsByTagName("ol")[0],i=w.createElement("li")
i.className="fail",i.innerHTML=n,r.appendChild(i),t.className="fail"}}))
var o,s=(o=g.phantom)&&o.version&&o.version.major>0
s&&v.warn("Support for PhantomJS is deprecated and will be removed in QUnit 3.0."),s||"complete"!==w.readyState?l(g,"load",$e.load):$e.load()
var a=g.onerror
g.onerror=function(t,n,r,i,o){var s=!1
if(a){for(var u=arguments.length,l=new Array(u>5?u-5:0),c=5;c<u;c++)l[c-5]=arguments[c]
s=a.call.apply(a,[this,t,n,r,i,o].concat(l))}if(!0!==s){if(e.current&&e.current.ignoreGlobalErrors)return!0
var f=o||new Error(t)
!f.stack&&n&&r&&(f.stack="".concat(n,":").concat(r)),$e.onUncaughtException(f)}return s},g.addEventListener("unhandledrejection",(function(e){$e.onUncaughtException(e.reason)}))}function u(e){return"function"==typeof e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function l(e,t,n){e.addEventListener(t,n,!1)}function c(e,t,n){e.removeEventListener(t,n,!1)}function f(e,t,n){for(var r=e.length;r--;)l(e[r],t,n)}function h(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>=0}function p(e,t){h(e,t)||(e.className+=(e.className?" ":"")+t)}function m(e,t,n){n||void 0===n&&!h(e,t)?p(e,t):y(e,t)}function y(e,t){for(var n=" "+e.className+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ")
e.className=u(n)}function b(e){return w.getElementById&&w.getElementById(e)}function x(){var e=b("qunit-abort-tests-button")
return e&&(e.disabled=!0,e.innerHTML="Aborting..."),$e.config.queue.length=0,!1}function E(e){var t=b("qunit-filter-input")
return t.value=u(t.value),_(),e&&e.preventDefault&&e.preventDefault(),!1}function T(){var n,r,i,o=this,s={}
if(r="selectedIndex"in o?o.options[o.selectedIndex].value||void 0:o.checked?o.defaultValue||!0:void 0,s[o.name]=r,n=C(s),"hidepassed"===o.name&&"replaceState"in g.history){if($e.urlParams[o.name]=r,e[o.name]=r||!1,i=b("qunit-tests")){var a=i.children.length,u=i.children
if(o.checked){for(var l=0;l<a;l++){var c=u[l],f=c?c.className:"",h=f.indexOf("pass")>-1,p=f.indexOf("skipped")>-1;(h||p)&&t.push(c)}var m,v=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!n){if(Array.isArray(e)||(n=d(e))){n&&(e=n)
var r=0,i=function(){}
return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1
return{s:function(){n=n.call(e)},n:function(){var e=n.next()
return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}(t)
try{for(v.s();!(m=v.n()).done;){var y=m.value
i.removeChild(y)}}catch(e){v.e(e)}finally{v.f()}}else for(;null!=(c=t.pop());)i.appendChild(c)}g.history.replaceState(null,"",n)}else g.location=n}function C(e){var t,n,i,o="?",s=g.location
for(t in e=q(q({},$e.urlParams),e))if(r.call(e,t)&&void 0!==e[t])for(n=[].concat(e[t]),i=0;i<n.length;i++)o+=encodeURIComponent(t),!0!==n[i]&&(o+="="+encodeURIComponent(n[i])),o+="&"
return s.protocol+"//"+s.host+s.pathname+o.slice(0,-1)}function _(){var e,t=[],n=b("qunit-modulefilter-dropdown-list").getElementsByTagName("input"),r=b("qunit-filter-input").value
for(e=0;e<n.length;e++)n[e].checked&&t.push(n[e].value)
g.location=C({filter:""===r?void 0:r,moduleId:0===t.length?void 0:t,module:void 0,testId:void 0})}function S(t){var n,r,i=""
for(n=0;n<t.length;n++)""!==t[n].name&&(i+="<li><label class='clickable"+((r=e.moduleId.indexOf(t[n].moduleId)>-1)?" checked":"")+"'><input type='checkbox' value='"+t[n].moduleId+"'"+(r?" checked='checked'":"")+" />"+et(t[n].name)+"</label></li>")
return i}function N(e,t,n){var r,i,o,s,a=b("qunit-tests")
if(a)return(r=w.createElement("strong")).innerHTML=A(e,n),(o=w.createElement("li")).appendChild(r),void 0!==t&&((i=w.createElement("a")).innerHTML="Rerun",i.href=C({testId:t}),o.id="qunit-test-output-"+t,o.appendChild(i)),(s=w.createElement("ol")).className="qunit-assert-list",o.appendChild(s),a.appendChild(o),o}function j(e){return 0===e.length?"":["<br /><a href='"+et(C({testId:e}))+"'>",1===e.length?"Rerun 1 failed test":"Rerun "+e.length+" failed tests","</a>"].join("")}function A(e,t){var n=""
return t&&(n="<span class='module-name'>"+et(t)+"</span>: "),n+"<span class='test-name'>"+et(e)+"</span>"}function R(e){return[e.completed," / ",e.defined," tests completed.<br />"].join("")}function I(e){return e.replace(/<\/?[^>]+(>|$)/g,"").replace(/&quot;/g,"").replace(/\s+/g,"")}}(),$e.diff=function(){function e(){}var t=-1,n=Object.prototype.hasOwnProperty
return e.prototype.DiffMain=function(e,t,n){var r,i,o,s,a,u
if(r=(new Date).getTime()+1e3,null===e||null===t)throw new Error("Null input. (DiffMain)")
return e===t?e?[[0,e]]:[]:(void 0===n&&(n=!0),i=n,o=this.diffCommonPrefix(e,t),s=e.substring(0,o),e=e.substring(o),t=t.substring(o),o=this.diffCommonSuffix(e,t),a=e.substring(e.length-o),e=e.substring(0,e.length-o),t=t.substring(0,t.length-o),u=this.diffCompute(e,t,i,r),s&&u.unshift([0,s]),a&&u.push([0,a]),this.diffCleanupMerge(u),u)},e.prototype.diffCleanupEfficiency=function(e){var n,r,i,o,s,a,u,l,c
for(n=!1,r=[],i=0,o=null,s=0,a=!1,u=!1,l=!1,c=!1;s<e.length;)0===e[s][0]?(e[s][1].length<4&&(l||c)?(r[i++]=s,a=l,u=c,o=e[s][1]):(i=0,o=null),l=c=!1):(e[s][0]===t?c=!0:l=!0,o&&(a&&u&&l&&c||o.length<2&&a+u+l+c===3)&&(e.splice(r[i-1],0,[t,o]),e[r[i-1]+1][0]=1,i--,o=null,a&&u?(l=c=!0,i=0):(s=--i>0?r[i-1]:-1,l=c=!1),n=!0)),s++
n&&this.diffCleanupMerge(e)},e.prototype.diffPrettyHtml=function(e){var n,r,i,o=[]
for(i=0;i<e.length;i++)switch(n=e[i][0],r=e[i][1],n){case 1:o[i]="<ins>"+et(r)+"</ins>"
break
case t:o[i]="<del>"+et(r)+"</del>"
break
case 0:o[i]="<span>"+et(r)+"</span>"}return o.join("")},e.prototype.diffCommonPrefix=function(e,t){var n,r,i,o
if(!e||!t||e.charAt(0)!==t.charAt(0))return 0
for(i=0,n=r=Math.min(e.length,t.length),o=0;i<n;)e.substring(o,n)===t.substring(o,n)?o=i=n:r=n,n=Math.floor((r-i)/2+i)
return n},e.prototype.diffCommonSuffix=function(e,t){var n,r,i,o
if(!e||!t||e.charAt(e.length-1)!==t.charAt(t.length-1))return 0
for(i=0,n=r=Math.min(e.length,t.length),o=0;i<n;)e.substring(e.length-n,e.length-o)===t.substring(t.length-n,t.length-o)?o=i=n:r=n,n=Math.floor((r-i)/2+i)
return n},e.prototype.diffCompute=function(e,n,r,i){var o,s,a,u,l,c,f,d,h,p,g,m
return e?n?(s=e.length>n.length?e:n,a=e.length>n.length?n:e,-1!==(u=s.indexOf(a))?(o=[[1,s.substring(0,u)],[0,a],[1,s.substring(u+a.length)]],e.length>n.length&&(o[0][0]=o[2][0]=t),o):1===a.length?[[t,e],[1,n]]:(l=this.diffHalfMatch(e,n))?(c=l[0],d=l[1],f=l[2],h=l[3],p=l[4],g=this.DiffMain(c,f,r,i),m=this.DiffMain(d,h,r,i),g.concat([[0,p]],m)):r&&e.length>100&&n.length>100?this.diffLineMode(e,n,i):this.diffBisect(e,n,i)):[[t,e]]:[[1,n]]},e.prototype.diffHalfMatch=function(e,t){var n,r,i,o,s,a,u,l,c,f
if(n=e.length>t.length?e:t,r=e.length>t.length?t:e,n.length<4||2*r.length<n.length)return null
function d(e,t,n){var r,o,s,a,u,l,c,f,d
for(r=e.substring(n,n+Math.floor(e.length/4)),o=-1,s="";-1!==(o=t.indexOf(r,o+1));)a=i.diffCommonPrefix(e.substring(n),t.substring(o)),u=i.diffCommonSuffix(e.substring(0,n),t.substring(0,o)),s.length<u+a&&(s=t.substring(o-u,o)+t.substring(o,o+a),l=e.substring(0,n-u),c=e.substring(n+a),f=t.substring(0,o-u),d=t.substring(o+a))
return 2*s.length>=e.length?[l,c,f,d,s]:null}return i=this,l=d(n,r,Math.ceil(n.length/4)),c=d(n,r,Math.ceil(n.length/2)),l||c?(f=c?l&&l[4].length>c[4].length?l:c:l,e.length>t.length?(o=f[0],u=f[1],a=f[2],s=f[3]):(a=f[0],s=f[1],o=f[2],u=f[3]),[o,u,a,s,f[4]]):null},e.prototype.diffLineMode=function(e,n,r){var i,o,s,a,u,l,c,f,d
for(e=(i=this.diffLinesToChars(e,n)).chars1,n=i.chars2,s=i.lineArray,o=this.DiffMain(e,n,!1,r),this.diffCharsToLines(o,s),this.diffCleanupSemantic(o),o.push([0,""]),a=0,l=0,u=0,f="",c="";a<o.length;){switch(o[a][0]){case 1:u++,c+=o[a][1]
break
case t:l++,f+=o[a][1]
break
case 0:if(l>=1&&u>=1){for(o.splice(a-l-u,l+u),a=a-l-u,d=(i=this.DiffMain(f,c,!1,r)).length-1;d>=0;d--)o.splice(a,0,i[d])
a+=i.length}u=0,l=0,f="",c=""}a++}return o.pop(),o},e.prototype.diffBisect=function(e,n,r){var i,o,s,a,u,l,c,f,d,h,p,g,m,v,y,b,w,k,x,E,T,C,_
for(i=e.length,o=n.length,a=s=Math.ceil((i+o)/2),u=2*s,l=new Array(u),c=new Array(u),f=0;f<u;f++)l[f]=-1,c[f]=-1
for(l[a+1]=0,c[a+1]=0,h=(d=i-o)%2!=0,p=0,g=0,m=0,v=0,T=0;T<s&&!((new Date).getTime()>r);T++){for(C=-T+p;C<=T-g;C+=2){for(b=a+C,x=(w=C===-T||C!==T&&l[b-1]<l[b+1]?l[b+1]:l[b-1]+1)-C;w<i&&x<o&&e.charAt(w)===n.charAt(x);)w++,x++
if(l[b]=w,w>i)g+=2
else if(x>o)p+=2
else if(h&&(y=a+d-C)>=0&&y<u&&-1!==c[y]&&w>=(k=i-c[y]))return this.diffBisectSplit(e,n,w,x,r)}for(_=-T+m;_<=T-v;_+=2){for(y=a+_,E=(k=_===-T||_!==T&&c[y-1]<c[y+1]?c[y+1]:c[y-1]+1)-_;k<i&&E<o&&e.charAt(i-k-1)===n.charAt(o-E-1);)k++,E++
if(c[y]=k,k>i)v+=2
else if(E>o)m+=2
else if(!h&&(b=a+d-_)>=0&&b<u&&-1!==l[b]&&(x=a+(w=l[b])-b,w>=(k=i-k)))return this.diffBisectSplit(e,n,w,x,r)}}return[[t,e],[1,n]]},e.prototype.diffBisectSplit=function(e,t,n,r,i){var o,s,a,u,l,c
return o=e.substring(0,n),a=t.substring(0,r),s=e.substring(n),u=t.substring(r),l=this.DiffMain(o,a,!1,i),c=this.DiffMain(s,u,!1,i),l.concat(c)},e.prototype.diffCleanupSemantic=function(e){var n,r,i,o,s,a,u,l,c,f,d,h,p
for(n=!1,r=[],i=0,o=null,s=0,l=0,c=0,a=0,u=0;s<e.length;)0===e[s][0]?(r[i++]=s,l=a,c=u,a=0,u=0,o=e[s][1]):(1===e[s][0]?a+=e[s][1].length:u+=e[s][1].length,o&&o.length<=Math.max(l,c)&&o.length<=Math.max(a,u)&&(e.splice(r[i-1],0,[t,o]),e[r[i-1]+1][0]=1,i--,s=--i>0?r[i-1]:-1,l=0,c=0,a=0,u=0,o=null,n=!0)),s++
for(n&&this.diffCleanupMerge(e),s=1;s<e.length;)e[s-1][0]===t&&1===e[s][0]&&(f=e[s-1][1],d=e[s][1],(h=this.diffCommonOverlap(f,d))>=(p=this.diffCommonOverlap(d,f))?(h>=f.length/2||h>=d.length/2)&&(e.splice(s,0,[0,d.substring(0,h)]),e[s-1][1]=f.substring(0,f.length-h),e[s+1][1]=d.substring(h),s++):(p>=f.length/2||p>=d.length/2)&&(e.splice(s,0,[0,f.substring(0,p)]),e[s-1][0]=1,e[s-1][1]=d.substring(0,d.length-p),e[s+1][0]=t,e[s+1][1]=f.substring(p),s++),s++),s++},e.prototype.diffCommonOverlap=function(e,t){var n,r,i,o,s,a,u
if(n=e.length,r=t.length,0===n||0===r)return 0
if(n>r?e=e.substring(n-r):n<r&&(t=t.substring(0,n)),i=Math.min(n,r),e===t)return i
for(o=0,s=1;;){if(a=e.substring(i-s),-1===(u=t.indexOf(a)))return o
s+=u,0!==u&&e.substring(i-s)!==t.substring(0,s)||(o=s,s++)}},e.prototype.diffLinesToChars=function(e,t){var r,i
function o(e){var t,o,s,a,u
for(t="",o=0,s=-1,a=r.length;s<e.length-1;)-1===(s=e.indexOf("\n",o))&&(s=e.length-1),u=e.substring(o,s+1),o=s+1,n.call(i,u)?t+=String.fromCharCode(i[u]):(t+=String.fromCharCode(a),i[u]=a,r[a++]=u)
return t}return i={},(r=[])[0]="",{chars1:o(e),chars2:o(t),lineArray:r}},e.prototype.diffCharsToLines=function(e,t){var n,r,i,o
for(n=0;n<e.length;n++){for(r=e[n][1],i=[],o=0;o<r.length;o++)i[o]=t[r.charCodeAt(o)]
e[n][1]=i.join("")}},e.prototype.diffCleanupMerge=function(e){var n,r,i,o,s,a,u,l
for(e.push([0,""]),n=0,r=0,i=0,s="",o="";n<e.length;)switch(e[n][0]){case 1:i++,o+=e[n][1],n++
break
case t:r++,s+=e[n][1],n++
break
case 0:r+i>1?(0!==r&&0!==i&&(0!==(a=this.diffCommonPrefix(o,s))&&(n-r-i>0&&0===e[n-r-i-1][0]?e[n-r-i-1][1]+=o.substring(0,a):(e.splice(0,0,[0,o.substring(0,a)]),n++),o=o.substring(a),s=s.substring(a)),0!==(a=this.diffCommonSuffix(o,s))&&(e[n][1]=o.substring(o.length-a)+e[n][1],o=o.substring(0,o.length-a),s=s.substring(0,s.length-a))),0===r?e.splice(n-i,r+i,[1,o]):0===i?e.splice(n-r,r+i,[t,s]):e.splice(n-r-i,r+i,[t,s],[1,o]),n=n-r-i+(r?1:0)+(i?1:0)+1):0!==n&&0===e[n-1][0]?(e[n-1][1]+=e[n][1],e.splice(n,1)):n++,i=0,r=0,s="",o=""}for(""===e[e.length-1][1]&&e.pop(),u=!1,n=1;n<e.length-1;)0===e[n-1][0]&&0===e[n+1][0]&&((l=e[n][1]).substring(l.length-e[n-1][1].length)===e[n-1][1]?(e[n][1]=e[n-1][1]+e[n][1].substring(0,e[n][1].length-e[n-1][1].length),e[n+1][1]=e[n-1][1]+e[n+1][1],e.splice(n-1,1),u=!0):l.substring(0,e[n+1][1].length)===e[n+1][1]&&(e[n-1][1]+=e[n+1][1],e[n][1]=e[n][1].substring(e[n+1][1].length)+e[n+1][1],e.splice(n+1,1),u=!0)),n++
u&&this.diffCleanupMerge(e)},function(t,n){var r,i
return i=(r=new e).DiffMain(t,n),r.diffCleanupEfficiency(i),r.diffPrettyHtml(i)}}()}()},629:function(e,t,n){"use strict"
function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.r(t),n.d(t,{Headers:function(){return g},Request:function(){return x},Response:function(){return T},DOMException:function(){return _},fetch:function(){return S}})
var i="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==i&&i,o="URLSearchParams"in i,s="Symbol"in i&&"iterator"in Symbol,a="FileReader"in i&&"Blob"in i&&function(){try{return new Blob,!0}catch(e){return!1}}(),u="FormData"in i,l="ArrayBuffer"in i
if(l)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],f=ArrayBuffer.isView||function(e){return e&&c.indexOf(Object.prototype.toString.call(e))>-1}
function d(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError('Invalid character in header field name: "'+e+'"')
return e.toLowerCase()}function h(e){return"string"!=typeof e&&(e=String(e)),e}function p(e){var t={next:function(){var t=e.shift()
return{done:void 0===t,value:t}}}
return s&&(t[Symbol.iterator]=function(){return t}),t}function g(e){this.map={},e instanceof g?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function m(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"))
e.bodyUsed=!0}function v(e){return new Promise((function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function y(e){var t=new FileReader,n=v(t)
return t.readAsArrayBuffer(e),n}function b(e){if(e.slice)return e.slice(0)
var t=new Uint8Array(e.byteLength)
return t.set(new Uint8Array(e)),t.buffer}function w(){return this.bodyUsed=!1,this._initBody=function(e){var t
this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:a&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:u&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:o&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():l&&a&&(t=e)&&DataView.prototype.isPrototypeOf(t)?(this._bodyArrayBuffer=b(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):l&&(ArrayBuffer.prototype.isPrototypeOf(e)||f(e))?this._bodyArrayBuffer=b(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},a&&(this.blob=function(){var e=m(this)
if(e)return e
if(this._bodyBlob)return Promise.resolve(this._bodyBlob)
if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]))
if(this._bodyFormData)throw new Error("could not read FormData body as blob")
return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?m(this)||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer)):this.blob().then(y)}),this.text=function(){var e,t,n,r=m(this)
if(r)return r
if(this._bodyBlob)return e=this._bodyBlob,n=v(t=new FileReader),t.readAsText(e),n
if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r])
return n.join("")}(this._bodyArrayBuffer))
if(this._bodyFormData)throw new Error("could not read FormData body as text")
return Promise.resolve(this._bodyText)},u&&(this.formData=function(){return this.text().then(E)}),this.json=function(){return this.text().then(JSON.parse)},this}g.prototype.append=function(e,t){e=d(e),t=h(t)
var n=this.map[e]
this.map[e]=n?n+", "+t:t},g.prototype.delete=function(e){delete this.map[d(e)]},g.prototype.get=function(e){return e=d(e),this.has(e)?this.map[e]:null},g.prototype.has=function(e){return this.map.hasOwnProperty(d(e))},g.prototype.set=function(e,t){this.map[d(e)]=h(t)},g.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},g.prototype.keys=function(){var e=[]
return this.forEach((function(t,n){e.push(n)})),p(e)},g.prototype.values=function(){var e=[]
return this.forEach((function(t){e.push(t)})),p(e)},g.prototype.entries=function(){var e=[]
return this.forEach((function(t,n){e.push([n,t])})),p(e)},s&&(g.prototype[Symbol.iterator]=g.prototype.entries)
var k=["DELETE","GET","HEAD","OPTIONS","POST","PUT"]
function x(e,t){if(!(this instanceof x))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
var n,r,i=(t=t||{}).body
if(e instanceof x){if(e.bodyUsed)throw new TypeError("Already read")
this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new g(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,i||null==e._bodyInit||(i=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e)
if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new g(t.headers)),this.method=(r=(n=t.method||this.method||"GET").toUpperCase(),k.indexOf(r)>-1?r:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests")
if(this._initBody(i),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==t.cache&&"no-cache"!==t.cache)){var o=/([?&])_=[^&]*/
o.test(this.url)?this.url=this.url.replace(o,"$1_="+(new Date).getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}function E(e){var t=new FormData
return e.trim().split("&").forEach((function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),i=n.join("=").replace(/\+/g," ")
t.append(decodeURIComponent(r),decodeURIComponent(i))}})),t}function T(e,t){if(!(this instanceof T))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===t.statusText?"":""+t.statusText,this.headers=new g(t.headers),this.url=t.url||"",this._initBody(e)}x.prototype.clone=function(){return new x(this,{body:this._bodyInit})},w.call(x.prototype),w.call(T.prototype),T.prototype.clone=function(){return new T(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new g(this.headers),url:this.url})},T.error=function(){var e=new T(null,{status:0,statusText:""})
return e.type="error",e}
var C=[301,302,303,307,308]
T.redirect=function(e,t){if(-1===C.indexOf(t))throw new RangeError("Invalid status code")
return new T(null,{status:t,headers:{location:e}})}
var _=i.DOMException
try{new _}catch(e){(_=function(e,t){this.message=e,this.name=t
var n=Error(e)
this.stack=n.stack}).prototype=Object.create(Error.prototype),_.prototype.constructor=_}function S(e,t){return new Promise((function(n,o){var s=new x(e,t)
if(s.signal&&s.signal.aborted)return o(new _("Aborted","AbortError"))
var u=new XMLHttpRequest
function c(){u.abort()}u.onload=function(){var e,t,r={status:u.status,statusText:u.statusText,headers:(e=u.getAllResponseHeaders()||"",t=new g,e.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(e){return 0===e.indexOf("\n")?e.substr(1,e.length):e})).forEach((function(e){var n=e.split(":"),r=n.shift().trim()
if(r){var i=n.join(":").trim()
t.append(r,i)}})),t)}
r.url="responseURL"in u?u.responseURL:r.headers.get("X-Request-URL")
var i="response"in u?u.response:u.responseText
setTimeout((function(){n(new T(i,r))}),0)},u.onerror=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},u.ontimeout=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},u.onabort=function(){setTimeout((function(){o(new _("Aborted","AbortError"))}),0)},u.open(s.method,function(e){try{return""===e&&i.location.href?i.location.href:e}catch(t){return e}}(s.url),!0),"include"===s.credentials?u.withCredentials=!0:"omit"===s.credentials&&(u.withCredentials=!1),"responseType"in u&&(a?u.responseType="blob":l&&s.headers.get("Content-Type")&&-1!==s.headers.get("Content-Type").indexOf("application/octet-stream")&&(u.responseType="arraybuffer")),!t||"object"!==r(t.headers)||t.headers instanceof g?s.headers.forEach((function(e,t){u.setRequestHeader(t,e)})):Object.getOwnPropertyNames(t.headers).forEach((function(e){u.setRequestHeader(e,h(t.headers[e]))})),s.signal&&(s.signal.addEventListener("abort",c),u.onreadystatechange=function(){4===u.readyState&&s.signal.removeEventListener("abort",c)}),u.send(void 0===s._bodyInit?null:s._bodyInit)}))}S.polyfill=!0,i.fetch||(i.fetch=S,i.Headers=g,i.Request=x,i.Response=T)}}])

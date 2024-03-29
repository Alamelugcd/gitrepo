/*! jQuery JavaScript Library v1.4.2 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);



 function tab_link()
{
 document.write('<!-- Tab navigation starts here --><div  class="tab_nav"><div  class="tab_left"></div><div  class="tab_right"></div><div  class="top-menu1"><ul><li><a href="https://www.mapsofindia.com/maps/">Maps</a> <ul class="drop_ul"><li><a href="https://www.mapsofindia.com/maps/india/india-political-map.htm">Political Map</a></li><li><a href="https://www.mapsofindia.com/maps/india/physical-map.html">Physical Map</a></li><li><a href="https://www.mapsofindia.com/maps/india/outlinemapofindia.htm">Outline Map</a></li><li><a href="https://www.mapsofindia.com/maps/india/india-railway-map.htm">Railway Map</a></li><li><a href="https://www.mapsofindia.com/roads/">Road Map</a></li><li><a href="https://www.mapsofindia.com/">More...</a></li></ul></li><li class="mobhide"><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="34" alt="" /></li><li><a href="https://www.mapsofindia.com/states/">States of India</a><ul class="drop_ul"><li><a href="https://www.mapsofindia.com/uttar-pradesh/">Uttar Pradesh</a></li><li><a href="https://www.mapsofindia.com/maharashtra/">Maharashtra</a></li><li><a href="https://www.mapsofindia.com/rajasthan/">Rajasthan</a></li><li><a href="https://www.mapsofindia.com/karnataka/">Karnataka</a></li><li><a href="https://www.mapsofindia.com/maps/tamilnadu/">Tamilnadu</a></li><li><a href="https://www.mapsofindia.com/states/">More...</a></li></ul></li><li class="mobhide"><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="34" alt="" /></li><li><a href="https://www.mapsofindia.com/maps/cities/">Cities of India</a><ul class="drop_ul"><li><a href="https://www.mapsofindia.com/delhi/">Delhi</a></li><li><a href="https://www.mapsofindia.com/maps/maharashtra/mumbai-map.htm">Mumbai</a></li><li><a href="https://www.mapsofindia.com/maps/westbengal/kolkata-city-map.htm">Kolkata</a></li><li><a href="https://www.mapsofindia.com/maps/tamilnadu/chennai-map.htm">Chennai</a></li><li><a href="https://www.mapsofindia.com/maps/karnataka/bangalore-map.htm">Bangalore</a></li><li><a href="https://www.mapsofindia.com/maps/cities/">More...</a></li></ul></li>    <li class="mobhide"><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="34" alt="" /></li><li><a href="https://www.mapsofindia.com/tourism/">India Travel</a><ul class="drop_ul"><li><a href="https://www.mapsofindia.com/hotels-india/">Hotels in India</a></li><li><a href="https://www.mapsofindia.com/maps/india/tourist-centers.htm">Tourist Places in India</a></li><li><a href="https://www.mapsofindia.com/hill-stations-india/">Hill Stations</a></li><li><a href="https://www.mapsofindia.com/tourism/beaches-in-india.html">Beaches in India</a></li><li><a href="https://www.mapsofindia.com/maps/india/religious-places.htm">Religious Places in India </a></li><li><a href="https://www.mapsofindia.com/tourism/">More...</a></li></ul></li> <li class="mobhide"><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="34" alt="" /></li><li><a href="https://www.mapsofindia.com/my-india/">My India</a><ul class="drop_ul"><li><a href="https://www.mapsofindia.com/my-india/movies">Movie Reviews</a></li><li><a href="https://www.mapsofindia.com/my-india/travel/">Travel</a></li><li><a href="https://www.mapsofindia.com/my-india/society/">Society</a></li><li><a href="https://www.mapsofindia.com/my-india/government/">Government</a></li><li><a href="https://www.mapsofindia.com/my-india/food/">Indian Food</a></li><li><a href="https://www.mapsofindia.com/my-india/politics/">Politics</a></li><li><a href="https://www.mapsofindia.com/my-india/">More...</a></li></ul></li><li class="mobhide"><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="34" alt="" /></li><li><a href="https://www.mapsofindia.com/utilities/">Utilities</a><ul class="drop_ul"><li><a href="https://www.mapsofindia.com/pincode/">Pin Codes</a></li><li><a href="https://www.mapsofindia.com/std/">STD Search</a></li><li><a href="https://www.mapsofindia.com/railway-timetable/">Railway Time Table</a></li><li><a href="https://www.mapsofindia.com/flight-schedule/">Flight Schedule</a></li><li><a href="https://www.mapsofindia.com/distance/">Distance Calculator</a></li><li><a href="https://www.mapsofindia.com/ifsccode/">IFSC Code</a></li><li><a href="https://www.mapsofindia.com/utilities/">More...</a></li></ul>	</li><li class="mobhide"><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="34" alt="" /></li><li><a nohref="">Our Channel</a><ul class="drop_ul"><li><a href="https://www.mapsofindia.com/education/">Education</a></li><li><a href="https://www.mapsofindia.com/election/">Election</a></li><li><a href="http://business.mapsofindia.com/">Business</a></li><li><a href="http://sports.mapsofindia.com/">Sports</a></li><li><a href="http://hindi.mapsofindia.com/">भारत का मानचित्र</a></li></ul></li><li class="mobhide"><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="34" alt="" /></li><li><a href="https://www.mapsofindia.com/whats-new.html">What\'s New</a><ul class="drop_ul"><li><a href="https://www.mapsofindia.com/current-events/">Current Affairs 2018</a></li><li><a href="https://www.mapsofindia.com/my-india/movies/new-upcoming-movies-releasing-this-week-on-friday">Upcoming Bollywood Movies</a></li><li><a href="https://www.mapsofindia.com/fairs-and-festivals/">Fair and Festivals in India</a></li><li><a href="https://www.mapsofindia.com/events/">Events in India</a></li><li><a href="https://www.mapsofindia.com/who-is-who/">Biographies of Famous Personalities</a></li></ul></li></ul></div> <div class="search_container"><table cellspacing="0" cellpadding="0" border="0"><tr><td valign="middle" align="center"><script language="JavaScript" type="text/Javascript">myList();</script></td></tr></table></div>  <div class="search_container1" style="display:none;"><table cellspacing="0" cellpadding="0" border="0"><tr><td width="25%" valign="top" style="padding-top:3px;"><font size="2" ><div class="slidebtn"><img src="https://www.mapsofindia.com/images1/navigation-icon.png"></font></td><td valign="middle" align="center"><script language="JavaScript" type="text/Javascript">myListevent();</script></td></tr></table></div></div></div><!-- Tab navigation Ends here -->');
}

 function tab_link_railways_new_lay()
{
 document.write('<!-- Tab navigation starts here --><div  class="tab_nav rail-tab"><div  class="top-menu1"><ul><li><a href="https://www.mapsofindia.com/maps/">Maps</a> <ul class="drop_ul"><li><a href="https://www.mapsofindia.com/maps/india/india-political-map.htm">Political Map</a></li><li><a href="https://www.mapsofindia.com/maps/india/physical-map.html">Physical Map</a></li><li><a href="https://www.mapsofindia.com/maps/india/outlinemapofindia.htm">Outline Map</a></li><li><a href="https://www.mapsofindia.com/maps/india/india-railway-map.htm">Railway Map</a></li><li><a href="https://www.mapsofindia.com/roads/">Road Map</a></li><li><a href="https://www.mapsofindia.com/">More...</a></li></ul></li><li><a href="https://www.mapsofindia.com/states/">States of India</a><ul class="drop_ul"><li><a href="https://www.mapsofindia.com/uttar-pradesh/">Uttar Pradesh</a></li><li><a href="https://www.mapsofindia.com/maharashtra/">Maharashtra</a></li><li><a href="https://www.mapsofindia.com/rajasthan/">Rajasthan</a></li><li><a href="https://www.mapsofindia.com/karnataka/">Karnataka</a></li><li><a href="https://www.mapsofindia.com/maps/tamilnadu/">Tamilnadu</a></li><li><a href="https://www.mapsofindia.com/states/">More...</a></li></ul></li><li><a href="https://www.mapsofindia.com/maps/cities/">Cities of India</a><ul class="drop_ul"><li><a href="https://www.mapsofindia.com/delhi/">Delhi</a></li><li><a href="https://www.mapsofindia.com/maps/maharashtra/mumbai-map.htm">Mumbai</a></li><li><a href="https://www.mapsofindia.com/maps/westbengal/kolkata-city-map.htm">Kolkata</a></li><li><a href="https://www.mapsofindia.com/maps/tamilnadu/chennai-map.htm">Chennai</a></li><li><a href="https://www.mapsofindia.com/maps/karnataka/bangalore-map.htm">Bangalore</a></li><li><a href="https://www.mapsofindia.com/maps/cities/">More...</a></li></ul></li>    <li><a href="https://www.mapsofindia.com/tourism/">India Travel</a><ul class="drop_ul"><li><a href="https://www.mapsofindia.com/hotels-india/">Hotels in India</a></li><li><a href="https://www.mapsofindia.com/maps/india/tourist-centers.htm">Tourist Places in India</a></li><li><a href="https://www.mapsofindia.com/hill-stations-india/">Hill Stations</a></li><li><a href="https://www.mapsofindia.com/tourism/beaches-in-india.html">Beaches in India</a></li><li><a href="https://www.mapsofindia.com/maps/india/religious-places.htm">Religious Places in India </a></li><li><a href="https://www.mapsofindia.com/tourism/">More...</a></li></ul></li> <li><a href="https://www.mapsofindia.com/my-india/">My India</a><ul class="drop_ul"><li><a href="https://www.mapsofindia.com/my-india/movies">Movie Reviews</a></li><li><a href="https://www.mapsofindia.com/my-india/travel/">Travel</a></li><li><a href="https://www.mapsofindia.com/my-india/society/">Society</a></li><li><a href="https://www.mapsofindia.com/my-india/government/">Government</a></li><li><a href="https://www.mapsofindia.com/my-india/food/">Indian Food</a></li><li><a href="https://www.mapsofindia.com/my-india/politics/">Politics</a></li><li><a href="https://www.mapsofindia.com/my-india/">More...</a></li></ul></li><li><a href="https://www.mapsofindia.com/utilities/">Utilities</a><ul class="drop_ul"><li><a href="https://www.mapsofindia.com/pincode/">Pin Codes</a></li><li><a href="https://www.mapsofindia.com/std/">STD Search</a></li><li><a href="https://www.mapsofindia.com/railway-timetable/">Railway Time Table</a></li><li><a href="https://www.mapsofindia.com/flight-schedule/">Flight Schedule</a></li><li><a href="https://www.mapsofindia.com/distance/">Distance Calculator</a></li><li><a href="https://www.mapsofindia.com/ifsccode/">IFSC Code</a></li><li><a href="https://www.mapsofindia.com/utilities/">More...</a></li></ul>	</li><li><a nohref="">Our Channel</a><ul class="drop_ul"><li><a href="https://www.mapsofindia.com/education/">Education</a></li><li><a href="https://www.mapsofindia.com/election/">Election</a></li><li><a href="http://business.mapsofindia.com/">Business</a></li><li><a href="http://sports.mapsofindia.com/">Sports</a></li><li><a href="http://hindi.mapsofindia.com/">भारत का मानचित्र</a></li></ul></li><li><a href="https://www.mapsofindia.com/whats-new.html">What\'s New</a><ul class="drop_ul"><li><a href="https://www.mapsofindia.com/current-events/">Current Affairs 2018</a></li><li><a href="https://www.mapsofindia.com/my-india/movies/new-upcoming-movies-releasing-this-week-on-friday">Upcoming Bollywood Movies</a></li><li><a href="https://www.mapsofindia.com/fairs-and-festivals/">Fair and Festivals in India</a></li><li><a href="https://www.mapsofindia.com/events/">Events in India</a></li><li><a href="https://www.mapsofindia.com/who-is-who/">Biographies of Famous Personalities</a></li></ul></li></ul></div> <div class="search_container"><table cellspacing="0" cellpadding="0" border="0"><tr><td valign="middle" align="center"><script language="JavaScript" type="text/Javascript">myList();</script></td></tr></table></div>  <div class="search_container1" style="display:none;"><table cellspacing="0" cellpadding="0" border="0"><tr><td width="25%" valign="top" style="padding-top:3px;"><font size="2" ><div class="slidebtn"><img src="https://www.mapsofindia.com/images1/navigation-icon.png"></font></td><td valign="middle" align="center"><script language="JavaScript" type="text/Javascript">myListevent();</script></td></tr></table></div></div></div><!-- Tab navigation Ends here -->');
}

function tab_link1()
{
  document.write('<!-- Tab navigation starts here --><div  class="tab_nav"><div  class="tab_left"></div><div  class="tab_right"></div><div  class="top-menu1"><ul><li><a href="https://www.mapsofindia.com/maps/">Maps</a> <ul class="drop_ul"><li><a href="https://www.mapsofindia.com/maps/india/india-political-map.htm">Political Map</a></li><li><a href="https://www.mapsofindia.com/maps/india/physical-map.html">Physical Map</a></li><li><a href="https://www.mapsofindia.com/maps/india/outlinemapofindia.htm">Outline Map</a></li><li><a href="https://www.mapsofindia.com/maps/india/india-railway-map.htm">Railway Map</a></li><li><a href="https://www.mapsofindia.com/roads/">Road Map</a></li><li><a href="https://www.mapsofindia.com/">More...</a></li></ul></li><li class="mobhide"><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="34" alt="" /></li><li><a href="https://www.mapsofindia.com/states/">States of India</a><ul class="drop_ul"><li><a href="https://www.mapsofindia.com/uttar-pradesh/">Uttar Pradesh</a></li><li><a href="https://www.mapsofindia.com/maharashtra/">Maharashtra</a></li><li><a href="https://www.mapsofindia.com/rajasthan/">Rajasthan</a></li><li><a href="https://www.mapsofindia.com/karnataka/">Karnataka</a></li><li><a href="https://www.mapsofindia.com/maps/tamilnadu/">Tamilnadu</a></li><li><a href="https://www.mapsofindia.com/states/">More...</a></li></ul></li><li class="mobhide"><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="34" alt="" /></li><li><a href="https://www.mapsofindia.com/maps/cities/">Cities of India</a><ul class="drop_ul"><li><a href="https://www.mapsofindia.com/maps/delhi/">Delhi</a></li><li><a href="https://www.mapsofindia.com/maps/maharashtra/mumbai-map.htm">Mumbai</a></li><li><a href="https://www.mapsofindia.com/maps/westbengal/kolkata-city-map.htm">Kolkata</a></li><li><a href="https://www.mapsofindia.com/maps/tamilnadu/chennai-map.htm">Chennai</a></li><li><a href="https://www.mapsofindia.com/maps/karnataka/bangalore-map.htm">Bangalore</a></li><li><a href="https://www.mapsofindia.com/maps/cities/">More...</a></li></ul></li>    <li class="mobhide"><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="34" alt="" /></li><li><a href="https://www.mapsofindia.com/tourism/">India Travel</a><ul class="drop_ul"><li><a href="https://www.mapsofindia.com/hotels-india/">Hotels in India</a></li><li><a href="https://www.mapsofindia.com/maps/india/tourist-centers.htm">Tourist Places in India</a></li><li><a href="https://www.mapsofindia.com/hill-stations-india/">Hill Stations</a></li><li><a href="https://www.mapsofindia.com/tourism/beaches-in-india.html">Beaches in India</a></li><li><a href="https://www.mapsofindia.com/maps/india/religious-places.htm">Religious Places in India </a></li><li><a href="https://www.mapsofindia.com/tourism/">More...</a></li></ul></li> <li class="mobhide"><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="34" alt="" /></li><li><a href="https://www.mapsofindia.com/my-india/">My India</a><ul class="drop_ul"><li><a href="https://www.mapsofindia.com/my-india/movies">Movie Reviews</a></li><li><a href="https://www.mapsofindia.com/my-india/travel/">Travel</a></li><li><a href="https://www.mapsofindia.com/my-india/society/">Society</a></li><li><a href="https://www.mapsofindia.com/my-india/government/">Government</a></li><li><a href="https://www.mapsofindia.com/my-india/food/">Indian Food</a></li><li><a href="https://www.mapsofindia.com/my-india/politics/">Politics</a></li><li><a href="https://www.mapsofindia.com/my-india/">More...</a></li></ul></li><li class="mobhide"><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="34" alt="" /></li><li><a href="https://www.mapsofindia.com/utilities/">Utilities</a><ul class="drop_ul"><li><a href="https://www.mapsofindia.com/pincode/">Pin Codes</a></li><li><a href="https://www.mapsofindia.com/std/">STD Search</a></li><li><a href="https://www.mapsofindia.com/railway-timetable/">Railway Time Table</a></li><li><a href="https://www.mapsofindia.com/flight-schedule/">Flight Schedule</a></li><li><a href="https://www.mapsofindia.com/distance/">Distance Calculator</a></li><li><a href="https://www.mapsofindia.com/ifsccode/">IFSC Code</a></li><li><a href="https://www.mapsofindia.com/utilities/">More...</a></li></ul>	</li><li class="mobhide"><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="34" alt="" /></li><li><a nohref="">Our Channel</a><ul class="drop_ul"><li><a href="https://www.mapsofindia.com/education/">Education</a></li><li><a href="https://www.mapsofindia.com/election/">Election</a></li><li><a href="http://business.mapsofindia.com/">Business</a></li><li><a href="http://sports.mapsofindia.com/">Sports</a></li><li><a href="http://hindi.mapsofindia.com/">भारत का मानचित्र</a></li></ul></li><li class="mobhide"><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="34" alt="" /></li><li><a href="https://www.mapsofindia.com/whats-new.html">What\'s New</a><ul class="drop_ul"><li><a href="https://www.mapsofindia.com/current-events/">Current Affairs 2018</a></li><li><a href="https://www.mapsofindia.com/my-india/movies/new-upcoming-movies-releasing-this-week-on-friday">Upcoming Bollywood Movies</a></li><li><a href="https://www.mapsofindia.com/fairs-and-festivals/">Fair and Festivals in India</a></li><li><a href="https://www.mapsofindia.com/events/">Events in India</a></li><li><a href="https://www.mapsofindia.com/who-is-who/">Biographies of Famous Personalities</a></li></ul></li></ul></div> <div class="search_container"><table cellspacing="0" cellpadding="0" border="0"><tr><td valign="middle" align="center"><script language="JavaScript" type="text/Javascript">myList();</script></td></tr></table></div>  <div class="search_container1" style="display:none;"><table cellspacing="0" cellpadding="0" border="0"><tr><td width="25%" valign="top" style="padding-top:3px;"><font size="2" ><div class="slidebtn"><img src="https://www.mapsofindia.com/images1/navigation-icon.png"></font></td><td valign="middle" align="center"><script language="JavaScript" type="text/Javascript">myListevent();</script></td></tr></table></div></div></div><!-- Tab navigation Ends here -->');
}

function myListevent(){
document.write('<table align="center"><tr><td valign="top"><form action="https://www.mapsofindia.com/searchresult-page.html" id="cse-search-box"><input type="hidden" name="cx" value="partner-pub-8993220319430392:59jmgvbhm8y" /><input type="hidden" name="cof" value="FORID:10" /><input type="hidden" name="ie" value="ISO-8859-1" /><table border="0" ><tr><td valign="top"><input name="q" style="height:18px;width: 150px;" id="query-input" value="" /></td><td><input type="submit" name="sa" value="Search" style="width: 60px;" class="search" /></td></tr></table></form> <script type="text/javascript" src="https://www.google.com/cse/brand?form=cse-search-box&amp;lang=en"></script></td></tr></table>');}


function myList(){
document.write('<table align="center"><tr><td valign="top"><form action="https://www.mapsofindia.com/searchresult-page.html" id="cse-search-box"><input type="hidden" name="cx" value="partner-pub-8993220319430392:59jmgvbhm8y" /><input type="hidden" name="cof" value="FORID:10" /><input type="hidden" name="ie" value="ISO-8859-1" /><table border="0" ><tr><td valign="top"><input name="q" style="height:18px;width:150px;" id="query-input" value="" /></td><td><input type="submit" name="sa" value="Search" class="search" /></td></tr></table></form> <script type="text/javascript" src="https://www.google.com/cse/brand?form=cse-search-box&amp;lang=en"></script></td></tr></table>');}

$(document).bind("contextmenu",function(e){
 return false;
});
$(document).ready(function(){

$("table tr td").each(function(){
$(this).find( "img[src='https://www.mapsofindia.com/images2009/tweet-this.jpg']" ).parent().parent().addClass("twitimg");
$(this).find("td:contains(Free Download)").remove();
$(this).find("td:contains(Save)").remove();
$(this).find( "img[src='https://www.mapsofindia.com/images2009/save-icon.jpg']" ).parent().parent().remove();
$(this).find("td:contains(Print)").remove();
$(this).find( "img[src='https://www.mapsofindia.com/images2009/print-icon.jpg']" ).parent().parent().remove();
$(this).find("td:contains(Email)").remove();
$(this).find( "img[src='https://www.mapsofindia.com/images2009/email-icon.jpg']" ).parent().parent().remove();
});

$(".google_search").after("<div style='width:100%;float:left;' class='mobhide'><!-- /5535731/MOI-970x90-new-1 --><div id='div-gpt-ad-1537164943793-0' style='height:90px; width:970px; background: url(https://www.mapsofindia.com/advertisement1.png) 0 0 no-repeat transparent;padding: 7px 0 0;margin:5px auto;float:none;padding-bottom:15px;'><script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1537164943793-0'); });</script></div></div>" );

$(".navigation").append('<div class="customer-servises" style="margin: 5px 0 0 0;font-family: arial;"><a href="https://www.mapsofindia.com/custom-maps/" style="color:#C00;text-decoration:none;font-weight:600;font-size:12px">For Custom/ Business Map Quote </a>&nbsp;&nbsp; <b style="color:#C00;font-size:12px;"> +91-9871399004 | <a href="mailto:sales@mapsofindia.com">sales@mapsofindia.com</a></b></div>');

	var res=$(window).width();
if(res<1030){$('#rtsl,.quiz_rgt_add').css("display"),("none")}
else{
$('#rtsl').animate({left:0},1000,'swing',function(){});
$('#hide_left').click(function(){
$('#slide_left').animate({left:-127},10,'swing',function(){});
$('#hide_left').animate({left:-127},1000,'swing',function(){});
$('#slide_left').hide('slow');
});
}




//var content_heading=$(".content_heading").size();
  //if(content_heading>=1) {
	//  $(".content_heading:contains(Last Updated)").after("<table cellpadding='0' cellspacing='0' border='0' width='610px' class='bottom_two_ads' align='center'><tr><td class='houseads'><!-- /5535731/MOI-300-bottom-left --><div id='div-gpt-ad-1487157790183-0' style='height:250px; width:300px;'><script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1487157790183-0'); });</script></div></td><td class='houseads'><!-- /5535731/MOI-300-bottom-right --><div id='div-gpt-ad-1487157856163-0' style='height:250px; width:300px;'><script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1487157856163-0'); });</script></div></td></tr></table><br />	" );
  //} else {
//$("<table cellpadding='0' cellspacing='0' border='0' width='610px' class='bottom_two_ads' align='center'><tr><td class='houseads'><!-- /5535731/MOI-300-bottom-left --><div id='div-gpt-ad-1487157790183-0' style='height:250px; width:300px;'><script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1487157790183-0'); });</script></div></td><td class='houseads'><!-- /5535731/MOI-300-bottom-right --><div id='div-gpt-ad-1487157856163-0' style='height:250px; width:300px;'><script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1487157856163-0'); });</script></div></td></tr></table><br />").insertAfter( $(".bottom_two_ads" ) );
  //}

var content_heading=$(".content_heading").size();
  if(content_heading>=1) {
	  $(".content_heading:contains(Last Updated)").after("<script>googletag.cmd.push(function() {googletag.defineSlot('/5535731/MOI-Inread', [1, 1], 'div-gpt-ad-1490270688678-0').addService(googletag.pubads()); googletag.pubads().enableSingleRequest(); googletag.enableServices(); });</script><!-- /5535731/MOI-Inread --><div id='div-gpt-ad-1490270688678-0' style='height:1px; width:1px;'><script> googletag.cmd.push(function() { googletag.display('div-gpt-ad-1490270688678-0'); });</script></div>" );
} else {
$("<script>googletag.cmd.push(function() {googletag.defineSlot('/5535731/MOI-Inread', [1, 1], 'div-gpt-ad-1490270688678-0').addService(googletag.pubads()); googletag.pubads().enableSingleRequest(); googletag.enableServices(); });</script><!-- /5535731/MOI-Inread --><div id='div-gpt-ad-1490270688678-0' style='height:1px; width:1px;'><script> googletag.cmd.push(function() { googletag.display('div-gpt-ad-1490270688678-0'); });</script></div>").insertAfter( $(".bottom_two_ads" ) );
  }
$("head").append("<!-- Facebook Pixel Code --><script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1552463041738922');fbq('track', 'PageView');</script><noscript><img height='1' width='1' style='display:none'src='https://www.facebook.com/tr?id=1552463041738922&ev=PageView&noscript=1'/></noscript><!-- End Facebook Pixel Code -->");



var leftslides =
images = new Array(17);
images[0] = '<a href="http://www.amazon.in/gp/product/B00VJW1K1Q/ref=as_li_tl?ie=UTF8&camp=3626&creative=24790&creativeASIN=B00VJW1K1Q&linkCode=as2&tag=mapofindia-21&linkId=2BAM25QSNMRROP6Q" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/banner-animal-map-2.jpg" ></div></a>';
images[1] = '<a href="http://www.amazon.in/gp/product/B00VJW1K1Q/ref=as_li_tl?ie=UTF8&camp=3626&creative=24790&creativeASIN=B00VJW1K1Q&linkCode=as2&tag=mapofindia-21&linkId=2BAM25QSNMRROP6Q" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/banner-animal-map-1.jpg" ></div></a>';
images[2] = '<a href="http://www.amazon.in/gp/product/B00VJW1I9K/ref=as_li_tl?ie=UTF8&camp=3626&creative=24790&creativeASIN=B00VJW1I9K&linkCode=as2&tag=mapofindia-21&linkId=QVZXSKPPJ67PLQHO" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/banner-delhi-map-1.jpg" ></div></a>';
images[3] = '<a href="http://www.amazon.in/gp/product/B00VJW1I9K/ref=as_li_tl?ie=UTF8&camp=3626&creative=24790&creativeASIN=B00VJW1I9K&linkCode=as2&tag=mapofindia-21&linkId=QVZXSKPPJ67PLQHO" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/banner-delhi-map-2.jpg" ></div></a>';
images[4] = '<a href="http://www.amazon.in/gp/product/9351965821/ref=as_li_tl?ie=UTF8&camp=3626&creative=24790&creativeASIN=9351965821&linkCode=as2&tag=mapofindia-21&linkId=OQ2RHONWSX5DTSBY" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/banner-india-folded-map.jpg" ></div></a>';
images[5] = '<a href="http://www.amazon.in/gp/product/B00VJW1CLY/ref=as_li_tl?ie=UTF8&camp=3626&creative=24790&creativeASIN=B00VJW1CLY&linkCode=as2&tag=mapofindia-21&linkId=S7LBNA2BIAIY53VX" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/banner-india-map-1.jpg" ></div></a>';
images[6] = '<a href="http://www.amazon.in/gp/product/B00VJW1CLY/ref=as_li_tl?ie=UTF8&camp=3626&creative=24790&creativeASIN=B00VJW1CLY&linkCode=as2&tag=mapofindia-21&linkId=S7LBNA2BIAIY53VX" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/banner-india-map-2.jpg" ></div></a>';
images[7] = '<a href="http://www.amazon.in/gp/product/B00VJW1E4E/ref=as_li_tl?ie=UTF8&camp=3626&creative=24790&creativeASIN=B00VJW1E4E&linkCode=as2&tag=mapofindia-21&linkId=F2UQ5R3RWY4YJLPA" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/banner-india-political-map-1.jpg" ></div></a>';
images[8] = '<a href="http://www.amazon.in/gp/product/B00VJW1FYS/ref=as_li_tl?ie=UTF8&camp=3626&creative=24790&creativeASIN=B00VJW1FYS&linkCode=as2&tag=mapofindia-21&linkId=KH7MORARW6ZCE7KH" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/banner-world-map-1.jpg" ></div></a>';
images[9] = '<a href="http://www.amazon.in/gp/product/B00VJW1FYS/ref=as_li_tl?ie=UTF8&camp=3626&creative=24790&creativeASIN=B00VJW1FYS&linkCode=as2&tag=mapofindia-21&linkId=KH7MORARW6ZCE7KH" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/banner-world-map-2.jpg" ></div></a>';
images[10] = '<a href="http://www.amazon.in/gp/product/9351043991/ref=as_li_tl?ie=UTF8&camp=3626&creative=24790&creativeASIN=9351043991&linkCode=as2&tag=mapofindia-21&linkId=OIMI6WCWJ6GEPTH6" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/my-first-atlas.jpg" ></div></a>';
images[11] = '<a href="http://www.amazon.in/gp/product/9351049442/ref=as_li_tl?ie=UTF8&camp=3626&creative=24790&creativeASIN=9351049442&linkCode=as2&tag=mapofindia-21&linkId=ESZ4MF4RZRRK55GK" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/my-first-atlas-hindi.jpg" ></div></a>';
images[12] = '<a href="http://www.amazon.in/gp/product/B00WSI8AN6/ref=as_li_tl?ie=UTF8&camp=3626&creative=24790&creativeASIN=B00WSI8AN6&linkCode=as2&tag=mapofindia-21&linkId=RQTZWMOS4LCVIPAS" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/banner-animal-kingdom-map-on-vinyl.jpg" ></div></a>';
images[13] = '<a href="http://www.amazon.in/gp/product/B00WSK7AYY/ref=as_li_tl?ie=UTF8&camp=3626&creative=24790&creativeASIN=B00WSK7AYY&linkCode=as2&tag=mapofindia-21&linkId=OH774ICSJWZNKSBI" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/banner-India-Map-on-vinyl.jpg" ></div></a>';
images[14] = '<a href="http://www.amazon.in/gp/product/B00WMGKYZ6/ref=as_li_tl?ie=UTF8&camp=3626&creative=24790&creativeASIN=B00WMGKYZ6&linkCode=as2&tag=mapofindia-21&linkId=C4FLXHGQTIRWLK4E" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/banner-vinyl-maps-combo-kit.jpg" ></div></a>';
images[15] = '<a href="http://www.amazon.in/gp/product/B00WSN0F6Q/ref=as_li_tl?ie=UTF8&camp=3626&creative=24790&creativeASIN=B00WSN0F6Q&linkCode=as2&tag=mapofindia-21&linkId=6AKF77EACCJJMTVE" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/banner-world-map-on-vinyl.jpg" ></div></a>';
images[16] = '<a href="http://www.amazon.in/gp/product/8190346423/ref=as_li_tl?ie=UTF8&camp=3626&creative=24790&creativeASIN=8190346423&linkCode=as2&tag=mapofindia-21&linkId=MZ5IXBH3V6I7CMHA" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/banner-moi-cd.jpg" ></div></a>';
index = Math.floor(Math.random() * images.length);

  if(document.getElementById("amaz_banner_left")) {
	  $("#amaz_banner_left").append(images[index]);
  } else {
$(images[index]) .insertAfter( $("#left-panel > div:first-child" ) );
  }


var leftslides2 =
images = new Array(4);
images[0] = '<a href="http://deals.mapsofindia.com/" target="_blank" rel="nofollow" onclick="trackOutboundLink("http://deals.mapsofindia.com/"); return false;"><div style="margin: 0px 0 5px 0;width: 100%;text-align: left;float: left;height: 603px;padding: 5px 0 0 0;"><img border="0" src="https://www.mapsofindia.com/images1/diwali_dhamaka1_120x600purple.png" ></div></a>';
images[1] = '<a href="http://deals.mapsofindia.com/" target="_blank" rel="nofollow" onclick="trackOutboundLink("http://deals.mapsofindia.com/"); return false;"><div style="margin: 0px 0 5px 0;width: 100%;text-align: left;float: left;height: 603px;padding: 5px 0 0 0;"><img border="0" src="https://www.mapsofindia.com/images1/diwali_dhamaka_120x600purple.png" ></div></a>';
images[2] = '<a href="http://deals.mapsofindia.com/" target="_blank" rel="nofollow" onclick="trackOutboundLink("http://deals.mapsofindia.com/"); return false;"><div style="margin: 0px 0 5px 0;width: 100%;text-align: left;float: left;height: 603px;padding: 5px 0 0 0;"><img border="0" src="https://www.mapsofindia.com/images1/diwali_dhamaka3_120x600purple.png" ></div></a>';
images[3] = '<a href="http://deals.mapsofindia.com/" target="_blank" rel="nofollow" onclick="trackOutboundLink("http://deals.mapsofindia.com/"); return false;"><div style="margin: 0px 0 5px 0;width: 100%;text-align: left;float: left;height: 603px;padding: 5px 0 0 0;"><img border="0" src="https://www.mapsofindia.com/images1/diwali_dhamaka2_120x600purple.png" ></div></a>';
index = Math.floor(Math.random() * images.length);

  if(document.getElementById("deals-moi")) {
	  $("#deals-moi").append(images[index]);
  }



/*var leftslides =
images = new Array(25);
images[0] = '<a href="http://www.amazon.in/Animal-Kingdom-Map-Printed-Vinyl/dp/B00WSI8AN6/ref=sr_1_32?s=books&ie=UTF8&qid=1467024024&sr=1-32" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner-animal-kingdom.jpg"></div></a>';
images[1] = '<a href="http://www.amazon.in/Bangalore-Printed-Vinyl-Maps-India/dp/9385579401/ref=sr_1_16?s=books&ie=UTF8&qid=1467023514&sr=1-16" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner-bangalore.jpg"></div></a>';
images[2] = '<a href="http://www.amazon.in/India-Charminar-Hyderabad--Vintage-Posters/dp/9385579177/ref=sr_1_6?s=books&ie=UTF8&qid=1467023514&sr=1-6" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-bannercharminar.jpg"></div></a>';
images[3] = '<a href="http://www.amazon.in/Chennai-Printed-Vinyl-Maps-India/dp/938557941X/ref=sr_1_14?s=books&ie=UTF8&qid=1467023514&sr=1-14" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner-chennai.jpg"></div></a>';
images[4] = '<a href="http://www.amazon.in/Delhi-Printed-Vinyl-Maps-India/dp/9385579061/ref=sr_1_15?s=books&ie=UTF8&qid=1467023514&sr=1-15" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner_delhi-Map.jpg"></div></a>';
images[5] = '<a href="http://www.amazon.in/Delhi-Wall-Map-Synthetic-68-5/dp/B00VJW1I9K/ref=sr_1_18?s=books&ie=UTF8&qid=1467024024&sr=1-18" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner_Delhi-Wall-Map-Synthetic-68.5-x-76-cm.jpg"></div></a>';
images[6] = '<a href="http://www.amazon.in/India-Fatehpur-sikri-Vintage-Posters/dp/9385579185/ref=sr_1_7?s=books&ie=UTF8&qid=1467023514&sr=1-7" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner_Fatehpur-Sikri-Poster-A3-.jpg"></div></a>';
images[7] = '<a href="http://www.amazon.in/India-Gateway-Mumbai--Vintage-Posters/dp/9385579134/ref=sr_1_25?s=books&ie=UTF8&qid=1467024024&sr=1-25" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner_Gateway-of-India-Poster-A3.jpg"></div></a>';
images[8] = '<a href="http://www.amazon.in/India-Humayuns-Delhi--Vintage-Posters/dp/9385579193/ref=sr_1_8?s=books&ie=UTF8&qid=1467023514&sr=1-8" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner_Humayuns-Tomb-Poster-A3.jpg"></div></a>';
images[9] = '<a href="http://www.amazon.in/India-Folded-Map-70-94/dp/9351965821/ref=sr_1_12?s=books&ie=UTF8&qid=1467023514&sr=1-12" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner_india-folded.jpg"></div></a>';
images[10] = '<a href="http://www.amazon.in/Maps-India-Delhi--Vintage-Posters/dp/9385579215/ref=sr_1_4?s=books&ie=UTF8&qid=1467023514&sr=1-4" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner_India-Gate-Poster-A3.jpg"></div></a>';
images[11] = '<a href="http://www.amazon.in/India-Map-Printed-Vinyl-Maps/dp/B00WSK7AYY/ref=sr_1_22?s=books&ie=UTF8&qid=1467024024&sr=1-22" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner_India-Map-Vinyl.jpg"></div></a>';
images[12] = '<a href="http://www.amazon.in/India-Political-Wall-Map-Synthetic/dp/B00VJW1E4E/ref=sr_1_6?ie=UTF8&qid=1467023371&sr=8-6&keywords=india+map" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner_India-Political-Wall-Map-Synthetic-70-x-83-cm.jpg"></div></a>';
images[13] = '<a href="http://www.amazon.in/India-Wall-Map-Synthetic-70/dp/B00VJW1CLY/ref=sr_1_2?ie=UTF8&qid=1467023371&sr=8-2&keywords=india+map" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner_India-Wall-Map-Synthetic-70-x-83-cm.jpg"></div></a>';
images[14] = '<a href="http://www.amazon.in/Khajuraho-Madhya-Pradesh--Vintage-Posters/dp/938557910X/ref=sr_1_21?s=books&ie=UTF8&qid=1467024024&sr=1-21" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner_Khajuraho-Poster-A3.jpg"></div></a>';
images[15] = '<a href="http://www.amazon.in/India-Merhrangarh-Jodhpur--Vintage-Posters/dp/9385579207/ref=sr_1_9?s=books&ie=UTF8&qid=1467023514&sr=1-9" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner_merhrangarh-fort-Poster-A3.jpg"></div></a>';
images[16] = '<a href="http://www.amazon.in/dp/8190346423" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner_moi-cd.jpg"></div></a>';
images[17] = '<a href="http://www.amazon.in/Mumbai-Printed-Vinyl-Maps-India/dp/9385579169/ref=sr_1_20?s=books&ie=UTF8&qid=1467024024&sr=1-20" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner_Mumbai.jpg"></div></a>';
images[18] = '<a href="http://www.amazon.in/Rajasthan-Map-Printed-Vinyl-1st/dp/9385579150/ref=sr_1_19?s=books&ie=UTF8&qid=1467024024&sr=1-19" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner_Rajasthan.jpg"></div></a>';
images[19] = '<a href="http://www.amazon.in/Sanchi-Madhya-Pradesh--Vintage-Posters/dp/9385579126/ref=sr_1_3?s=books&ie=UTF8&qid=1467024638&sr=1-3&keywords=sanchi+stupa" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner_Sanchi-Stupa-Poster-A3.jpg"></div></a>';
images[20] = '<a href="http://www.amazon.in/India-Mahal-Agra--Vintage-Posters/dp/9385579096/ref=sr_1_10?s=books&ie=UTF8&qid=1467023514&sr=1-10" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner_Taj-Mahal.jpg"></div></a>';
images[21] = '<a href="http://www.amazon.in/Victoria-Memorial-Kolkata--Vintage-Posters/dp/9385579118/ref=sr_1_1?s=books&ie=UTF8&qid=1467024617&sr=1-1&keywords=Victoria+Memorial%2CKolkata-+Vintage+Series+Posters+A3+size" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner_Victoria-Memorial-Poster-A3.jpg"></div></a>';
images[22] = '<a href="http://www.amazon.in/Antique-Look-World-Printed-Vinyl/dp/9385579428/ref=sr_1_17?s=books&ie=UTF8&qid=1467024024&sr=1-17" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner_World-Map-Large-Antique-look-without-flag.jpg"></div></a>';
images[23] = '<a href="http://www.amazon.in/World-Map-Printed-Vinyl-137/dp/B00WSN0F6Q/ref=sr_1_13?s=books&ie=UTF8&qid=1467023514&sr=1-13" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner_World-Map-Printed-on-Vinyl-137-x-99-cm.jpg"></div></a>';
images[24] = '<a href="http://www.amazon.in/World-Wall-Map-Synthetic-132/dp/B00VJW1FYS/ref=sr_1_2?ie=UTF8&qid=1467023038&sr=8-2&keywords=world+map" target="_blank" rel="nofollow"><div style="margin: 10px 0 5px 0;width: 100%;text-align: left;float: left;height: 175px;padding: 5px 0 0 0;" class="left_ban_ind"><img border="0" src="https://www.mapsofindia.com/images2/amaz3/amazing-discount-banner_World-Wall-Map-Synthetic-132-x-94-cm.jpg"></div></a>';
index = Math.floor(Math.random() * images.length);
if(document.getElementById("amaz_banner_left")) {
$("#amaz_banner_left").append(images[index]);
} else {
$(images[index]) .insertAfter( $("#left-panel > div:first-child" ) );
}*/




$( ".disclaimer table tr td:nth-child(2)" ) .remove();
$( ".disclaimer table tr td div:nth-child(1)" ) .remove();

});
//for event tracking//
function recordOutboundLink(link, category, action) {
category=category.replace('+',' ');
  try {
	  console.log(category);
    var pageTracker=_gat._getTracker("UA-22494977-1");
    pageTracker._trackEvent(category, action);
    setTimeout('document.location = "' + link.href + '"', 100)
  }catch(err){}
}


function newheaderbanners()
{

document.write('<scr'+'ipt language="JavaScript">');
document.write('e9 = new Object(); e9.size = "728x90"; e9.noAd = 1;');
document.write('</scr'+'ipt> ');
document.write('<scr'+'ipt language="JavaScript"  src="http://tags.expo9.exponential.com/tags/MapsOfIndia/ROS/tags.js">');
document.write('</scr'+'ipt> ');

}

function footer1()
{
document.write('')
}
function footer()
{
document.write('')
}


//travel widget
function base64_decode(data) {
  
  var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
    ac = 0,
    dec = '',
    tmp_arr = [];

  if (!data) {
    return data;
  }

  data += '';

  do { // unpack four hexets into three octets using index points in b64
    h1 = b64.indexOf(data.charAt(i++));
    h2 = b64.indexOf(data.charAt(i++));
    h3 = b64.indexOf(data.charAt(i++));
    h4 = b64.indexOf(data.charAt(i++));

    bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

    o1 = bits >> 16 & 0xff;
    o2 = bits >> 8 & 0xff;
    o3 = bits & 0xff;

    if (h3 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1);
    } else if (h4 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1, o2);
    } else {
      tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
    }
  } while (i < data.length);

  dec = tmp_arr.join('');

  return dec.replace(/\0+$/, '');
}


function buy_now_button()
{
	var ref = document.URL;
 document.write('<a href="https://store.mapsofindia.com/store_mapped.php?ref='+ref+'" target="_blank" title="Buy Now"><img src="https://www.mapsofindia.com/new-home-page-images/buy-this-button.png" alt="buy this map" id="buy_now_str"/></a>');
 }

 
function fb_like_box()
{
 document.write('<style>._4s7c {border-radius: 5px;}</style><div id="fb-root"></div><script>(function(d, s, id) {  var js, fjs = d.getElementsByTagName(s)[0];  if (d.getElementById(id)) return;  js = d.createElement(s); js.id = id;  js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1";  fjs.parentNode.insertBefore(js, fjs);}(document, "script", "facebook-jssdk"));</script><div class="fb-like-box" style="background-color:#ffffff;" data-href="https://www.facebook.com/mapsofindia" data-width="181" data-height="260" data-colorscheme="light" data-show-faces="true" data-header="false" data-stream="false" data-show-border="true"></div>');
 }



//parliamentry constituencies tabbing start//
$(document).ready(function() {

	//Default Action
	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content
	
	//On Click Event
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active content
		return false;
	});

       $("div.tabbing-link ul li")
         .mouseover(function() {
             $(this).addClass('mouseover');
         })
         .mouseout(function() {
             $(this).removeClass('mouseover');
         });

        $("div.tabbing-link ul li").click(function(e) {
            e.preventDefault(); 
            $(this).toggleClass("clicked");
            $("div.tabbing-link ul li").not(this).removeClass("clicked"); 
			
			});



//Default Action
	$(".tab_content1").hide(); //Hide all content
	$("ul.tabs1 li:first").addClass("active1").show(); //Activate first tab
	$(".tab_content1:first").show(); //Show first tab content
	
	//On Click Event
	$("ul.tabs1 li").click(function() {
		$("ul.tabs1 li").removeClass("active1"); //Remove any "active" class
		$(this).addClass("active1"); //Add "active" class to selected tab
		$(".tab_content1").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active content
		return false;
	});

       $("div.tabbing-link1 ul li")
         .mouseover(function() {
             $(this).addClass('mouseover1');
         })
         .mouseout(function() {
             $(this).removeClass('mouseover1');
         });

        $("div.tabbing-link1 ul li").click(function(e) {
            e.preventDefault(); 
            $(this).toggleClass("clicked1");
            $("div.tabbing-link1 ul li").not(this).removeClass("clicked1"); 
			
			});


var res=$(window).width();
if(res>1030){$(".google_search").append('<div class="social-box indexcategory"><button class="share-wrp">Share</button><div class="newsocial" style="display: none;"><div class="newsocial1">	<div class="addthis_toolbox"><div class="custom_images" tabindex="1000"><a class="addthis_button_facebook at300b" title="Facebook" href="#"><img src="https://www.mapsofindia.com/images1/icons/facebook.jpg" width="32" height="32" alt="Share to Facebook"></a><a class="addthis_button_twitter at300b" title="Twitter" href="#"><img src="https://www.mapsofindia.com/images1/icons/twitter.jpg" width="32" height="32" alt="Share to Twitter"></a><a class="pin-it-button addthis_button_pinterest_share at300b" target="_blank" title="Pinterest" href="#"><img src="https://www.mapsofindia.com/images1/icons/pinterest.jpg" title="Pin It" alt="Pin It"></a><a class="addthis_button_compact at300m" href="#"><img src="https://www.mapsofindia.com/images1/icons/adthis.jpg" width="32" height="32" alt="Share"></a></div><div class="atclear"></div></div></div></div></div>');}

$(".social-box").click( function(e){
$(".newsocial").slideToggle();
});


    });




//parliamentry constituencies tabbing end//

jQuery(document).ready(function($) {
	
	$('.lightbox_trigger').click(function(e) {
		
		//prevent default action (hyperlink)
		e.preventDefault();
		
		//Get clicked link href
		var image_href = $(this).attr("href");
			
		if ($('#lightbox').length > 0) { // #lightbox exists
			
			//place href as img src value
			$('#content').html('<img src="' + image_href + '" />');
		   	
			//show lightbox window - you could use .show('fast') for a transition
			$('#lightbox').show();
		}
		
		else { //#lightbox does not exist - create and insert (runs 1st time only)
			
			//create HTML markup for lightbox window
			var lightbox = 
			'<div id="lightbox">' +
				'<p>Click to close</p>' +
				'<div id="content">' + //insert clicked link's href into img src
					'<img src="' + image_href +'" />' +
				'</div>' +	
			'</div>';
				
			//insert lightbox HTML into page
			$('body').append(lightbox);
		}
		
	});
	
	//Click anywhere on the page to get rid of lightbox window
	$('#lightbox').live('click', function() { //must use live, as the lightbox element is inserted into the DOM
		$('#lightbox').hide();
	});

});


//states index page slider start//
 $(document).ready(function(){
	/*reasson slider */
	$('.slider-top1 ul li:nth-child(1)').each(function() {
		$(this).addClass('active');
	});

	/* reasons-365 slider*/
	

	$('#gallery-next1').live("click", function(){
		var sped = 500;
		//var par = $(this).parent().parent().attr("class").split(' ')[0];
		var mrgn = $('.slider-top1 ul').css("marginLeft");
		var no_li = $('.slider-top1 ul li').size()-1;
		var li_act = $('.slider-top1 ul li').index($('.slider-top1 ul li.active'));
		
		var li_wid = $('.slider-top1 ul li').width()+0;
		var new_mrgn = parseInt(mrgn);
		if (li_act < no_li)
		{
			$('.slider-top1 ul li').removeClass('active');
			$('.slider-top1 ul li:nth-child('+(li_act+2)+')').addClass('active');
			$('.slider-top1 ul').animate({marginLeft: '-='+li_wid+''}, sped);

			/*if ( new_mrgn >= "-350")
			{
				$('.'+par+' .slider-top ul').animate({marginLeft: '-=126px'}, sped);
			}*/
		}
		else
		{ 
			 li_act=1; 
		   $('.slider-top1 ul li').removeClass('active');
			$('.slider-top1 ul li:nth-child('+(li_act)+')').addClass('active');
			$('.slider-top1 ul').animate({marginLeft:'0px'}, sped);
		
		}
	});

	$('#gallery-prev1').live("click", function(){
		var sped = 500;
		//var par = $(this).parent().parent().attr("class").split(' ')[0];
		var mrgn = $('.slider-top1 ul').css("marginLeft");
		var new_mrgn = parseInt(mrgn);
		var no_li = $('.slider-top1 ul li').size();
		var li_act = $('.slider-top1 ul li').index($('.slider-top1 ul li.active'));
		var li_wid = $('.slider-top1 ul li').width()+0;
		var nw_no_li = noli3();
		if (li_act >= nw_no_li )
		{	
			$('.slider-top1 ul li').removeClass('active');
			$('.slider-top1 ul li:nth-child('+(li_act)+')').addClass('active');
			$('.slider-top1 ul').animate({marginLeft: '+='+li_wid+''}, sped);
		}
	});

  });
  function noli3() {
	var no_li_sldr = 1;
	return no_li_sldr; 
}

//states index page slider end//


//states index page slider start//
 $(document).ready(function(){
	/*reasson slider */
	$('.slider-top ul li:nth-child(1)').each(function() {
		$(this).addClass('active');
	});

	/* reasons-365 slider*/
	

	$('#gallery-next').live("click", function(){
		var sped = 500;
		//var par = $(this).parent().parent().attr("class").split(' ')[0];
		var mrgn = $('.slider-top ul').css("marginLeft");
		var no_li = $('.slider-top ul li').size()-1;
		var li_act = $('.slider-top ul li').index($('.slider-top ul li.active'));
		var li_wid = $('.slider-top ul li').width()+20;
		var new_mrgn = parseInt(mrgn);
		if (li_act < no_li)
		{
			$('.slider-top ul li').removeClass('active');
			$('.slider-top ul li:nth-child('+(li_act+2)+')').addClass('active');
			$('.slider-top ul').animate({marginLeft: '-='+li_wid+''}, sped);

			/*if ( new_mrgn >= "-350")
			{
				$('.'+par+' .slider-top ul').animate({marginLeft: '-=126px'}, sped);
			}*/
		}
	});

	$('#gallery-prev').live("click", function(){
		var sped = 500;
		//var par = $(this).parent().parent().attr("class").split(' ')[0];
		var mrgn = $('.slider-top ul').css("marginLeft");
		var new_mrgn = parseInt(mrgn);
		var no_li = $('.slider-top ul li').size();
		var li_act = $('.slider-top ul li').index($('.slider-top ul li.active'));
		var li_wid = $('.slider-top ul li').width()+20;
		var nw_no_li = noli2();
		if (li_act >= nw_no_li )
		{	
			$('.slider-top ul li').removeClass('active');
			$('.slider-top ul li:nth-child('+(li_act)+')').addClass('active');
			$('.slider-top ul').animate({marginLeft: '+='+li_wid+''}, sped);
		}
	});

  });
  function noli2() {
	var no_li_sldr = 1;
	return no_li_sldr; 
}

//states index page slider end//

//Delhi slider starts here
//<![CDATA[
  $(document).ready(function(){
	/*reasson slider */
	$('.slider ul li:nth-child(3)').each(function() {
		$(this).addClass('active');
	});

	/* reasons-365 slider*/
	

	$('#prebutton').live("click", function(){
		var sped = 500;
		//var par = $(this).parent().parent().attr("class").split(' ')[0];
		var mrgn = $('.slider ul').css("marginLeft");
		var no_li = $('.slider ul li').size()-1;
		var li_act = $('.slider ul li').index($('.slider ul li.active'));
		var li_wid = $('.slider ul li').width()+20;
		var new_mrgn = parseInt(mrgn);
		if (li_act < no_li)
		{
			$('.slider ul li').removeClass('active');
			$('.slider ul li:nth-child('+(li_act+2)+')').addClass('active');
			$('.slider ul').animate({marginLeft: '-='+li_wid+''}, sped);

			/*if ( new_mrgn >= "-350")
			{
				$('.'+par+' .slider ul').animate({marginLeft: '-=126px'}, sped);
			}*/
		}
	});

	$('#nextbutton').live("click", function(){
		var sped = 500;
		//var par = $(this).parent().parent().attr("class").split(' ')[0];
		var mrgn = $('.slider ul').css("marginLeft");
		var new_mrgn = parseInt(mrgn);
		var no_li = $('.slider ul li').size();
		var li_act = $('.slider ul li').index($('.slider ul li.active'));
		var li_wid = $('.slider ul li').width()+20;
		var nw_no_li = noli();
		if (li_act >= nw_no_li )
		{	
			$('.slider ul li').removeClass('active');
			$('.slider ul li:nth-child('+(li_act)+')').addClass('active');
			$('.slider ul').animate({marginLeft: '+='+li_wid+''}, sped);
		}
	});

  });
  function noli() {
	var no_li_sldr = 3;
	return no_li_sldr; 
}


$(document).ready(function(){
/**slider start here*****/
	$('.country-slider ul li:nth-child(3)').each(function() {
		$(this).addClass('active');
	});

	/* pre button*/
	$('#prebutton1').live("click", function(){
		var sped1 = 500; //set the speed of slide
		var mrgn1 = $('.country-slider ul').css("marginLeft");//set the slide left and right
		var no_li1 = $('.country-slider ul li').size()-1;//total no of list
		var li_act1 = $('.country-slider ul li').index($('.country-slider ul li.active'));//Return the list position
		var li_wid1 = $('.country-slider ul li').width()+20;//Total width of ul li
		var new_mrgn1 = parseInt(mrgn1); //convert the width into number
		if (li_act1 < no_li1)  // checking the active list less total no list
		{
			$('.country-slider ul li').removeClass('active');//removing the class active
			$('.country-slider ul li:nth-child('+(li_act1+2)+')').addClass('active');
			$('.country-slider ul').animate({marginLeft: '-='+li_wid1+''}, sped1);

		}
	});
	/* pre button ends*/

	/* next button*/
	$('#nextbutton1').live("click", function(){
		var sped1 = 500;
		var mrgn1 = $('.country-slider ul').css("marginLeft");
		var new_mrgn1 = parseInt(mrgn1);
		var no_li1 = $('.country-slider ul li').size();
		var li_act1 = $('.country-slider ul li').index($('.country-slider ul li.active'));
		var li_wid1 = $('.country-slider ul li').width()+20;
		var nw_no_li1 = noli1();
		if (li_act1 >= nw_no_li1 )
		{	
			$('.country-slider ul li').removeClass('active');
			$('.country-slider ul li:nth-child('+(li_act1)+')').addClass('active');
			$('.country-slider ul').animate({marginLeft: '+='+li_wid1+''}, sped1);
		}
	});
  });
  function noli1() {
	var no_li_sldr1 = 3;
	return no_li_sldr1; 
}

//Delhi slider ends here

 function tf160x600()
{
images = new Array(7);
images[0] = "<a href='http://travel.mapsofindia.com/travel-orissa/' target='_blank' rel='nofollow'><img src='https://www.mapsofindia.com/widgets/tf-default/160x600-images/odisha-160x600.jpg' title='' alt='' height='600' width='160' border='0' /></a>";
images[1] = "<a href ='http://travel.mapsofindia.com/travel-india.html' target='_blank' rel='nofollow'><img src='https://www.mapsofindia.com/widgets/tf-default/160x600-images/india_160X600.jpg' width='160' height='600' alt='' title='' border='0'/></a>";
images[2] = "<a href ='http://travel.mapsofindia.com/travel-jammu-kashmir/' target='_blank'><img src='https://www.mapsofindia.com/widgets/tf-default/160x600-images/kashmir-160x600.jpg' width='160' height='600' alt='' title='' border='0'/></a>";
images[3] = "<a href ='http://travel.mapsofindia.com/travel-mussoorie/' target='_blank' rel='nofollow'><img src='https://www.mapsofindia.com/widgets/tf-default/160x600-images/mussourie-160x600.jpg' width='160' height='600' alt='' title='' border='0'/></a>";
images[4] = "<a href ='http://travel.mapsofindia.com/travel-destination-finder/ooty-tours.html' target='_blank' rel='nofollow'><img src='https://www.mapsofindia.com/widgets/tf-default/160x600-images/ooty-160x600.jpg' width='160' height='600' alt='' title='' border='0'/></a>";
images[5] = "<a href ='http://travel.mapsofindia.com/travel-goa/' target='_blank' rel='nofollow'><img src='https://www.mapsofindia.com/widgets/tf-default/160x600-images/goa_160X600.png' width='160' height='600' alt='' title='' border='0'/></a>";
images[6] = "<a href ='http://travel.mapsofindia.com/travel-vaishno-devi/' target='_blank' rel='nofollow'><img src='https://www.mapsofindia.com/widgets/tf-default/160x600-images/vaishnodevi_160X600.png' width='160' height='600' alt='' title='' border='0'/></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
	
}

function tf300x250()
{
images = new Array(7);
images[0] = "<a href='http://travel.mapsofindia.com/travel-india.html' target='_blank' rel='nofollow'><img src='https://www.mapsofindia.com/widgets/tf-default/300x250-images/india-300x250.jpg' title='' alt='' height='250' width='300' border='0' /></a>";
images[1] = "<a href ='http://travel.mapsofindia.com/travel-jammu-kashmir/' target='_blank' rel='nofollow'><img src='https://www.mapsofindia.com/widgets/tf-default/300x250-images/kashmir-300x250.jpg' width='300' height='250' alt='' title='' border='0'/></a>";
images[2] = "<a href ='http://travel.mapsofindia.com/travel-mussoorie/' target='_blank'><img src='https://www.mapsofindia.com/widgets/tf-default/300x250-images/mussourie-300x250.jpg' width='300' height='250' alt='' title='' border='0'/></a>";
images[3] = "<a href ='http://travel.mapsofindia.com/travel-orissa/' target='_blank' rel='nofollow'><img src='https://www.mapsofindia.com/widgets/tf-default/300x250-images/odisha-300x250.jpg' height='250' width='300' alt='' title='' border='0'/></a>";
images[4] = "<a href ='http://travel.mapsofindia.com/travel-destination-finder/ooty-tours.html' target='_blank' rel='nofollow'><img src='https://www.mapsofindia.com/widgets/tf-default/300x250-images/ooty-300x250.jpg' width='300' height='250' alt='' title='' border='0'/></a>";
images[5] = "<a href ='http://travel.mapsofindia.com/travel-goa/' target='_blank' rel='nofollow'><img src='https://www.mapsofindia.com/widgets/tf-default/300x250-images/goa_300X250.png' height='250' width='300' alt='' title='' border='0'/></a>";
images[6] = "<a href ='http://travel.mapsofindia.com/travel-vaishno-devi/' target='_blank' rel='nofollow'><img src='https://www.mapsofindia.com/widgets/tf-default/300x250-images/vaishnodevi_300X250.png' width='300' height='250' alt='' title='' border='0'/></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
	
}

function tf728x90()
{
images = new Array(7);
images[0] = "<a href='http://travel.mapsofindia.com/travel-orissa/' target='_blank' rel='nofollow'><img src='https://www.mapsofindia.com/widgets/tf-default/728x90-images/odisha-728x90.jpg' title='' alt='' height='90' width='728' border='0' /></a>";
images[1] = "<a href ='http://travel.mapsofindia.com/' target='_blank' rel='nofollow'><img src='https://www.mapsofindia.com/widgets/tf-default/728x90-images/india-728x90.jpg' width='728' height='90' alt='' title='' border='0'/></a>";
images[2] = "<a href ='http://travel.mapsofindia.com/travel-jammu-kashmir/ ' target='_blank'><img src='https://www.mapsofindia.com/widgets/tf-default/728x90-images/kashmir-728x90.jpg' width='728' height='90' alt='' title='' border='0'/></a>";
images[3] = "<a href ='http://travel.mapsofindia.com/travel-mussoorie/' target='_blank' rel='nofollow'><img src='https://www.mapsofindia.com/widgets/tf-default/728x90-images/mussourie-728x90.jpg' width='728' height='90' alt='' title='' border='0'/></a>";
images[4] = "<a href ='http://travel.mapsofindia.com/travel-destination-finder/ooty-tours.html' target='_blank' rel='nofollow'><img src='https://www.mapsofindia.com/widgets/tf-default/728x90-images/ooty-728x90.jpg' width='728' height='90' alt='' title='' border='0'/></a>";
images[5] = "<a href ='http://travel.mapsofindia.com/travel-goa/' target='_blank' rel='nofollow'><img src='https://www.mapsofindia.com/widgets/tf-default/728x90-images/goa_728X90.png' width='728' height='90' alt='' title='' border='0'/></a>";
images[6] = "<a href ='http://travel.mapsofindia.com/travel-vaishno-devi/' target='_blank' rel='nofollow'><img src='https://www.mapsofindia.com/widgets/tf-default/728x90-images/vaishnodevi_728X90.png' width='728' height='90' alt='' title='' border='0'/></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);

	
}


function displayHideBox(boxNumber)
{
    if(document.getElementById("LightBox"+boxNumber).style.display=="none") {
        document.getElementById("LightBox"+boxNumber).style.display="block";
        
    } else {
        document.getElementById("LightBox"+boxNumber).style.display="none";
        
    }
}


function displayHideBox1(boxNumber)
{
    if(document.getElementById("LightBox"+boxNumber).style.display=="none") {
        document.getElementById("LightBox"+boxNumber).style.display="block";
        
    } else {
        document.getElementById("LightBox"+boxNumber).style.display="none";
        
    }
}

function bottom_table_link()
{
 document.write('<!-- Tab navigation starts here --><div class="bottom-menu-bg"><div class="bottom-menu"><div class="bt-menu"><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/india/">India</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/reference-maps/">India Maps</a><li><li><a href="https://www.mapsofindia.com/geography/">Geography of India</a></li><li><a href="https://www.mapsofindia.com/history/">History of India</a></li><li><a href="https://www.mapsofindia.com/census/">India Census Maps</a></li><li><a href="https://www.mapsofindia.com/education/">Education</a></li><li><a href="https://www.mapsofindia.com/culture/">Culture</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/infrastructure/">India Transport Network</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/roads/">Road Map of India</a></li><li><a href="https://www.mapsofindia.com/maps/india/india-railway-map.htm">Indian Railways</a></li><li><a href="https://www.mapsofindia.com/air-network/">Air Network in India</a></li><li><a href="https://www.mapsofindia.com/water/">Ports in India &amp; waterways</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/states/">India States &amp; UTs </a></div><div class="bt-text-menu"> <ul><li><a href="https://www.mapsofindia.com/stateprofiles/">State Profiles</a></li><li><a href="https://www.mapsofindia.com/tamilnadu/">Tamil Nadu</a></li><li><a href="https://www.mapsofindia.com/karnataka/">Karnataka</a></li><li><a href="https://www.mapsofindia.com/goa/">Goa</a></li><li><a href="https://www.mapsofindia.com/andhra-pradesh/">Andhra Pradesh</a></li><li><a href="https://www.mapsofindia.com/maharashtra/">Maharashtra</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/maps/cities/">Cities Of India</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/top-ten-cities-of-india/">Top 10 Cities of India</a></li><li><a href="https://www.mapsofindia.com/maps/karnataka/bangalore-map.htm">Bangalore</a></li><li><a href="https://www.mapsofindia.com/maps/mumbai/" >Mumbai</a></li><li><a href="https://www.mapsofindia.com/maps/tamilnadu/chennai-map.htm">Chennai</a></li><li><a href="https://www.mapsofindia.com/delhi/">Delhi</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/tourism/">Travel to India</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/hotels-india/">Hotels in India</a></li><li><a href="https://www.mapsofindia.com/maps/india/tourist-centers.htm">Tourist Places in India</a></li><li><a href="https://www.mapsofindia.com/india-tour/">India Tour</a></li><div class="bt-hd-text"><a href="https://www.mapsofindia.com/games/">Map Game</a></div><li><a href="https://www.mapsofindia.com/games/iknowmyindia.html">I Know My India Game</a></li><li><a href="https://www.mapsofindia.com/ikaailand/">Ikaai Land</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/high-resolution-maps.html">Product &amp; Services</a></div><div class="bt-text-menu"><ul><li><a href="http://www.mapsofindiacd.com/about_moi_cd.html">Maps of India CD</a></li><li><a href="https://www.mapsofindia.com/custom-maps/">Custom Mapping</a></li><li><a href="https://www.mapsofindia.com/location-locator/">Location Locator</a></li></ul></div><div class="bt-hd-text"><a href="https://www.mapsofindia.com/current-events/">Current Events</a></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/worldmap/">World Map</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/worldmap/latitude-longitude.html">World Map with Latitude and Longitude</a></li><li><a href="https://www.mapsofindia.com/worldmap/large.html">World Large Map</a></li><li><a href="https://www.mapsofindia.com/worldmap/clickable-world-map.html" >Clickable World Map</a></li><li><a href="https://www.mapsofindia.com/worldmap/physical.html">World Physical Map</a></li></ul></div></div></div></div></div><br /><div class="bottom-menu-bg"><div class="bottom-menu"><div class="bt-menu"><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/utilities/">India Utilities:</a></div><div class="bt-text-menu2"><ul><li><a href="https://www.mapsofindia.com/distance/">Distance Calculator India</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/pincode/">Pin Code</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/flight-schedule/">Flight Schedule</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/ifsccode/">IFSC Code</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/railway-timetable/">Railway Time Table</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/driving-directions-maps/">Driving Direction Maps</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="http://www.gis.mapxl.com/path-finder/map_routing.phtml?config=routing">Shortest Path Finder</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/maps/pocketmaps/">Road Maps</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/delhi/information/mcd-circle-rates.html">MCD Delhi Circle Rate</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/std/">STD Search</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/bus-schedule/">Bus Schedule</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/census/">India census</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/cricket/">Live Cricket Score</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/international-flight-schedule/">International Flights Schedule</a></li></ul></div></div></div></div></div><!-- Tab navigation Ends here -->');
}


function bottom_table_link_gujarat()
{
 document.write('<!-- Tab navigation starts here --><div class="bottom-menu-bg"><div class="bottom-menu"><div class="bt-menu"><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/india/">India</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/reference-maps/">India Maps</a><li><li><a href="https://www.mapsofindia.com/geography/">Geography of India</a></li><li><a href="https://www.mapsofindia.com/history/">History of India</a></li><li><a href="https://www.mapsofindia.com/census/">India Census Maps</a></li><li><a href="https://www.mapsofindia.com/education/">Education</a></li><li><a href="https://www.mapsofindia.com/culture/">Culture</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/infrastructure/">India Transport Network</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/roads/">Road Map of India</a></li><li><a href="https://www.mapsofindia.com/maps/india/india-railway-map.htm">Indian Railways</a></li><li><a href="https://www.mapsofindia.com/air-network/">Air Network in India</a></li><li><a href="https://www.mapsofindia.com/water/">Ports in India &amp; waterways</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/states/">India States &amp; UTs </a></div><div class="bt-text-menu"> <ul><li><a href="https://www.mapsofindia.com/stateprofiles/">State Profiles</a></li><li><a href="https://www.mapsofindia.com/goa/">Goa</a></li><li><a href="https://www.mapsofindia.com/rajasthan/">Rajasthan</a></li><li><a href="https://www.mapsofindia.com/goa/">Daman and Diu</a></li><li><a href="https://www.mapsofindia.com/madhya-pradesh/">Madhya Pradesh</a></li><li><a href="https://www.mapsofindia.com/maharashtra/">Maharashtra</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/maps/cities/">Cities Of India</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/top-ten-cities-of-india/">Top 10 Cities of India</a></li><li><a href="https://www.mapsofindia.com/maps/karnataka/bangalore-map.htm">Bangalore</a></li><li><a href="https://www.mapsofindia.com/maps/mumbai/" >Mumbai</a></li><li><a href="https://www.mapsofindia.com/maps/tamilnadu/chennai-map.htm">Chennai</a></li><li><a href="https://www.mapsofindia.com/delhi/">Delhi</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/tourism/">Travel to India</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/hotels-india/">Hotels in India</a></li><li><a href="https://www.mapsofindia.com/maps/india/tourist-centers.htm">Tourist Places in India</a></li><li><a href="https://www.mapsofindia.com/india-tour/">India Tour</a></li><div class="bt-hd-text"><a href="https://www.mapsofindia.com/games/">Map Game</a></div><li><a href="https://www.mapsofindia.com/games/iknowmyindia.html">I Know My India Game</a></li><li><a href="https://www.mapsofindia.com/ikaailand/">Ikaai Land</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/high-resolution-maps.html">Product &amp; Services</a></div><div class="bt-text-menu"><ul><li><a href="http://www.mapsofindiacd.com/about_moi_cd.html">Maps of India CD</a></li><li><a href="https://www.mapsofindia.com/custom-maps/">Custom Mapping</a></li><li><a href="https://www.mapsofindia.com/location-locator/">Location Locator</a></li></ul></div><div class="bt-hd-text"><a href="https://www.mapsofindia.com/current-events/">Current Events</a></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/worldmap/">World Map</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/worldmap/latitude-longitude.html">World Map with Latitude and Longitude</a></li><li><a href="https://www.mapsofindia.com/worldmap/large.html">World Large Map</a></li><li><a href="https://www.mapsofindia.com/worldmap/clickable-world-map.html" >Clickable World Map</a></li><li><a href="https://www.mapsofindia.com/worldmap/physical.html">World Physical Map</a></li></ul></div></div></div></div></div><br /><div class="bottom-menu-bg"><div class="bottom-menu"><div class="bt-menu"><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/utilities/">India Utilities:</a></div><div class="bt-text-menu2"><ul><li><a href="https://www.mapsofindia.com/distance/">Distance Calculator India</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/pincode/">Pin Code</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/flight-schedule/">Flight Schedule</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/ifsccode/">IFSC Code</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/railway-timetable/">Railway Time Table</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/driving-directions-maps/">Driving Direction Maps</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="http://www.gis.mapxl.com/path-finder/map_routing.phtml?config=routing">Shortest Path Finder</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/maps/pocketmaps/">Road Maps</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/delhi/information/mcd-circle-rates.html">MCD Delhi Circle Rate</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/std/">STD Search</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/bus-schedule/">Bus Schedule</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/census/">India census</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/cricket/">Live Cricket Score</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/international-flight-schedule/">International Flights Schedule</a></li></ul></div></div></div></div></div><!-- Tab navigation Ends here -->');
}

function bottom_table_link_assam()
{
 document.write('<!-- Tab navigation starts here --><div class="bottom-menu-bg"><div class="bottom-menu"><div class="bt-menu"><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/india/">India</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/reference-maps/">India Maps</a><li><li><a href="https://www.mapsofindia.com/geography/">Geography of India</a></li><li><a href="https://www.mapsofindia.com/history/">History of India</a></li><li><a href="https://www.mapsofindia.com/census/">India Census Maps</a></li><li><a href="https://www.mapsofindia.com/education/">Education</a></li><li><a href="https://www.mapsofindia.com/culture/">Culture</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/infrastructure/">India Transport Network</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/roads/">Road Map of India</a></li><li><a href="https://www.mapsofindia.com/maps/india/india-railway-map.htm">Indian Railways</a></li><li><a href="https://www.mapsofindia.com/air-network/">Air Network in India</a></li><li><a href="https://www.mapsofindia.com/water/">Ports in India &amp; waterways</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/states/">India States &amp; UTs </a></div><div class="bt-text-menu"> <ul><li><a href="https://www.mapsofindia.com/stateprofiles/">State Profiles</a></li><li><a href="https://www.mapsofindia.com/manipur/">Manipur</a></li><li><a href="https://www.mapsofindia.com/meghalaya/">Meghalaya</a></li><li><a href="https://www.mapsofindia.com/arunachal-pradesh/">Arunachal Pradesh</a></li><li><a href="https://www.mapsofindia.com/nagaland/">Nagaland</a></li><li><a href="https://www.mapsofindia.com/tripura/">Tripura</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/maps/cities/">Cities Of India</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/top-ten-cities-of-india/">Top 10 Cities of India</a></li><li><a href="https://www.mapsofindia.com/maps/karnataka/bangalore-map.htm">Bangalore</a></li><li><a href="https://www.mapsofindia.com/maps/mumbai/" >Mumbai</a></li><li><a href="https://www.mapsofindia.com/maps/tamilnadu/chennai-map.htm">Chennai</a></li><li><a href="https://www.mapsofindia.com/delhi/">Delhi</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/tourism/">India Travel</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/hotels-india/">Hotels in India</a></li><li><a href="https://www.mapsofindia.com/maps/india/tourist-centers.htm">Tourist Places in India</a></li><li><a href="https://www.mapsofindia.com/india-tour/">India Tour</a></li><div class="bt-hd-text"><a href="https://www.mapsofindia.com/games/">Map Game</a></div><li><a href="https://www.mapsofindia.com/games/iknowmyindia.html">I Know My India Game</a></li><li><a href="https://www.mapsofindia.com/ikaailand/">Ikaai Land</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/high-resolution-maps.html">Product &amp; Services</a></div><div class="bt-text-menu"><ul><li><a href="http://www.mapsofindiacd.com/about_moi_cd.html">Maps of India CD</a></li><li><a href="https://www.mapsofindia.com/custom-maps/">Custom Mapping</a></li><li><a href="https://www.mapsofindia.com/location-locator/">Location Locator</a></li></ul></div><div class="bt-hd-text"><a href="https://www.mapsofindia.com/current-events/">Current Events</a></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/worldmap/">World Map</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/worldmap/latitude-longitude.html">World Map with Latitude and Longitude</a></li><li><a href="https://www.mapsofindia.com/worldmap/large.html">World Large Map</a></li><li><a href="https://www.mapsofindia.com/worldmap/clickable-world-map.html" >Clickable World Map</a></li><li><a href="https://www.mapsofindia.com/worldmap/physical.html">World Physical Map</a></li></ul></div></div></div></div></div><br /><div class="bottom-menu-bg"><div class="bottom-menu"><div class="bt-menu"><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/utilities/">India Utilities:</a></div><div class="bt-text-menu2"><ul><li><a href="https://www.mapsofindia.com/distance/">Distance Calculator India</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/pincode/">Pin Code</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/flight-schedule/">Flight Schedule</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/ifsccode/">IFSC Code</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/railway-timetable/">Railway Time Table</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/driving-directions-maps/">Driving Direction Maps</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="http://www.gis.mapxl.com/path-finder/map_routing.phtml?config=routing">Shortest Path Finder</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/maps/pocketmaps/">Road Maps</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/delhi/information/mcd-circle-rates.html">MCD Delhi Circle Rate</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/std/">STD Search</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/bus-schedule/">Bus Schedule</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/census/">India census</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/cricket/">Live Cricket Score</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/international-flight-schedule/">International Flights Schedule</a></li></ul></div></div></div></div></div><!-- Tab navigation Ends here -->');
}

function bottom_table_link_maharashtra()
{
 document.write('<!-- Tab navigation starts here --><div class="bottom-menu-bg"><div class="bottom-menu"><div class="bt-menu"><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/india/">India</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/reference-maps/">India Maps</a><li><li><a href="https://www.mapsofindia.com/geography/">Geography of India</a></li><li><a href="https://www.mapsofindia.com/history/">History of India</a></li><li><a href="https://www.mapsofindia.com/census/">India Census Maps</a></li><li><a href="https://www.mapsofindia.com/education/">Education</a></li><li><a href="https://www.mapsofindia.com/culture/">Culture</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/infrastructure/">India Transport Network</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/roads/">Road Map of India</a></li><li><a href="https://www.mapsofindia.com/maps/india/india-railway-map.htm">Indian Railways</a></li><li><a href="https://www.mapsofindia.com/air-network/">Air Network in India</a></li><li><a href="https://www.mapsofindia.com/water/">Ports in India &amp; waterways</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/states/">India States &amp; UTs </a></div><div class="bt-text-menu"> <ul><li><a href="https://www.mapsofindia.com/stateprofiles/">State Profiles</a></li><li><a href="https://www.mapsofindia.com/madhya-pradesh/">Madhya Pradesh</a></li><li><a href="https://www.mapsofindia.com/andhra-pradesh/">Andhra Pradesh</a></li><li><a href="https://www.mapsofindia.com/karnataka/">Karnataka</a></li><li><a href="https://www.mapsofindia.com/chhattisgarh/">Chhattisgarh</a></li><li><a href="https://www.mapsofindia.com/gujarat/">Gujarat</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/maps/cities/">Cities Of India</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/top-ten-cities-of-india/">Top 10 Cities of India</a></li><li><a href="https://www.mapsofindia.com/maps/karnataka/bangalore-map.htm">Bangalore</a></li><li><a href="https://www.mapsofindia.com/maps/mumbai/" >Mumbai</a></li><li><a href="https://www.mapsofindia.com/maps/tamilnadu/chennai-map.htm">Chennai</a></li><li><a href="https://www.mapsofindia.com/delhi/">Delhi</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/tourism/">Travel to India</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/hotels-india/">Hotels in India</a></li><li><a href="https://www.mapsofindia.com/maps/india/tourist-centers.htm">Tourist Places in India</a></li><li><a href="https://www.mapsofindia.com/india-tour/">India Tour</a></li><div class="bt-hd-text"><a href="https://www.mapsofindia.com/games/">Map Game</a></div><li><a href="https://www.mapsofindia.com/games/iknowmyindia.html">I Know My India Game</a></li><li><a href="https://www.mapsofindia.com/ikaailand/">Ikaai Land</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/high-resolution-maps.html">Product &amp; Services</a></div><div class="bt-text-menu"><ul><li><a href="http://www.mapsofindiacd.com/about_moi_cd.html">Maps of India CD</a></li><li><a href="https://www.mapsofindia.com/custom-maps/">Custom Mapping</a></li><li><a href="https://www.mapsofindia.com/location-locator/">Location Locator</a></li></ul></div><div class="bt-hd-text"><a href="https://www.mapsofindia.com/current-events/">Current Events</a></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/worldmap/">World Map</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/worldmap/latitude-longitude.html">World Map with Latitude and Longitude</a></li><li><a href="https://www.mapsofindia.com/worldmap/large.html">World Large Map</a></li><li><a href="https://www.mapsofindia.com/worldmap/clickable-world-map.html" >Clickable World Map</a></li><li><a href="https://www.mapsofindia.com/worldmap/physical.html">World Physical Map</a></li></ul></div></div></div></div></div><br /><div class="bottom-menu-bg"><div class="bottom-menu"><div class="bt-menu"><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/utilities/">India Utilities:</a></div><div class="bt-text-menu2"><ul><li><a href="https://www.mapsofindia.com/distance/">Distance Calculator India</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/pincode/">Pin Code</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/flight-schedule/">Flight Schedule</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/ifsccode/">IFSC Code</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/railway-timetable/">Railway Time Table</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/driving-directions-maps/">Driving Direction Maps</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="http://www.gis.mapxl.com/path-finder/map_routing.phtml?config=routing">Shortest Path Finder</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/maps/pocketmaps/">Road Maps</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/delhi/information/mcd-circle-rates.html">MCD Delhi Circle Rate</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/std/">STD Search</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/bus-schedule/">Bus Schedule</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/census/">India census</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/cricket/">Live Cricket Score</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/international-flight-schedule/">International Flights Schedule</a></li></ul></div></div></div></div></div><!-- Tab navigation Ends here -->');
}


function bottom_table_link_tamilnadu()
{
 document.write('<!-- Tab navigation starts here --><div class="bottom-menu-bg"><div class="bottom-menu"><div class="bt-menu"><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/india/">India</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/reference-maps/">India Maps</a><li><li><a href="https://www.mapsofindia.com/geography/">Geography of India</a></li><li><a href="https://www.mapsofindia.com/history/">History of India</a></li><li><a href="https://www.mapsofindia.com/census/">India Census Maps</a></li><li><a href="https://www.mapsofindia.com/education/">Education</a></li><li><a href="https://www.mapsofindia.com/culture/">Culture</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/infrastructure/">India Transport Network</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/roads/">Road Map of India</a></li><li><a href="https://www.mapsofindia.com/maps/india/india-railway-map.htm">Indian Railways</a></li><li><a href="https://www.mapsofindia.com/air-network/">Air Network in India</a></li><li><a href="https://www.mapsofindia.com/water/">Ports in India &amp; waterways</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/states/">India States &amp; UTs </a></div><div class="bt-text-menu"> <ul><li><a href="https://www.mapsofindia.com/stateprofiles/">State Profiles</a></li><li><a href="https://www.mapsofindia.com/kerala/">Kerala</a></li><li><a href="https://www.mapsofindia.com/karnataka/">Karnataka</a></li><li><a href="https://www.mapsofindia.com/andhra-pradesh/">Andhra Pradesh</a></li><li><a href="https://www.mapsofindia.com/andaman-nicobar-islands/">Andaman &amp; Nicobar</a></li><li><a href="https://www.mapsofindia.com/goa/">Goa</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/maps/cities/">Cities Of India</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/top-ten-cities-of-india/">Top 10 Cities of India</a></li><li><a href="https://www.mapsofindia.com/maps/karnataka/bangalore-map.htm">Bangalore</a></li><li><a href="https://www.mapsofindia.com/maps/mumbai/" >Mumbai</a></li><li><a href="https://www.mapsofindia.com/maps/tamilnadu/chennai-map.htm">Chennai</a></li><li><a href="https://www.mapsofindia.com/delhi/">Delhi</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/tourism/">Travel to India</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/hotels-india/">Hotels in India</a></li><li><a href="https://www.mapsofindia.com/maps/india/tourist-centers.htm">Tourist Places in India</a></li><li><a href="https://www.mapsofindia.com/india-tour/">India Tour</a></li><div class="bt-hd-text"><a href="https://www.mapsofindia.com/games/">Map Game</a></div><li><a href="https://www.mapsofindia.com/games/iknowmyindia.html">I Know My India Game</a></li><li><a href="https://www.mapsofindia.com/ikaailand/">Ikaai Land</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/high-resolution-maps.html">Product &amp; Services</a></div><div class="bt-text-menu"><ul><li><a href="http://www.mapsofindiacd.com/about_moi_cd.html">Maps of India CD</a></li><li><a href="https://www.mapsofindia.com/custom-maps/">Custom Mapping</a></li><li><a href="https://www.mapsofindia.com/location-locator/">Location Locator</a></li></ul></div><div class="bt-hd-text"><a href="https://www.mapsofindia.com/current-events/">Current Events</a></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/worldmap/">World Map</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/worldmap/latitude-longitude.html">World Map with Latitude and Longitude</a></li><li><a href="https://www.mapsofindia.com/worldmap/large.html">World Large Map</a></li><li><a href="https://www.mapsofindia.com/worldmap/clickable-world-map.html" >Clickable World Map</a></li><li><a href="https://www.mapsofindia.com/worldmap/physical.html">World Physical Map</a></li></ul></div></div></div></div></div><br /><div class="bottom-menu-bg"><div class="bottom-menu"><div class="bt-menu"><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/utilities/">India Utilities:</a></div><div class="bt-text-menu2"><ul><li><a href="https://www.mapsofindia.com/distance/">Distance Calculator India</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/pincode/">Pin Code</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/flight-schedule/">Flight Schedule</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/ifsccode/">IFSC Code</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/railway-timetable/">Railway Time Table</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/driving-directions-maps/">Driving Direction Maps</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="http://www.gis.mapxl.com/path-finder/map_routing.phtml?config=routing">Shortest Path Finder</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/maps/pocketmaps/">Road Maps</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/delhi/information/mcd-circle-rates.html">MCD Delhi Circle Rate</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/std/">STD Search</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/bus-schedule/">Bus Schedule</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/census/">India census</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/cricket/">Live Cricket Score</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/international-flight-schedule/">International Flights Schedule</a></li></ul></div></div></div></div></div><!-- Tab navigation Ends here -->');
}



function bottom_table_link_uttar_pradesh()
{
 document.write('<!-- Tab navigation starts here --><div class="bottom-menu-bg"><div class="bottom-menu"><div class="bt-menu"><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/india/">India</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/reference-maps/">India Maps</a><li><li><a href="https://www.mapsofindia.com/geography/">Geography of India</a></li><li><a href="https://www.mapsofindia.com/history/">History of India</a></li><li><a href="https://www.mapsofindia.com/census/">India Census Maps</a></li><li><a href="https://www.mapsofindia.com/education/">Education</a></li><li><a href="https://www.mapsofindia.com/culture/">Culture</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/infrastructure/">India Transport Network</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/roads/">Road Map of India</a></li><li><a href="https://www.mapsofindia.com/maps/india/india-railway-map.htm">Indian Railways</a></li><li><a href="https://www.mapsofindia.com/air-network/">Air Network in India</a></li><li><a href="https://www.mapsofindia.com/water/">Ports in India &amp; waterways</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/states/">India States &amp; UTs </a></div><div class="bt-text-menu"> <ul><li><a href="https://www.mapsofindia.com/stateprofiles/">State Profiles</a></li><li><a href="https://www.mapsofindia.com/uttarakhand/">Uttarakhand</a></li><li><a href="https://www.mapsofindia.com/bihar/">Bihar</a></li><li><a href="https://www.mapsofindia.com/madhya-pradesh/">Madhya Pradesh</a></li><li><a href="https://www.mapsofindia.com/rajasthan/">Rajasthan</a></li><li><a href="https://www.mapsofindia.com/chhattisgarh/">Chhattisgarh</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/maps/cities/">Cities Of India</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/top-ten-cities-of-india/">Top 10 Cities of India</a></li><li><a href="https://www.mapsofindia.com/maps/karnataka/bangalore-map.htm">Bangalore</a></li><li><a href="https://www.mapsofindia.com/maps/mumbai/" >Mumbai</a></li><li><a href="https://www.mapsofindia.com/maps/tamilnadu/chennai-map.htm">Chennai</a></li><li><a href="https://www.mapsofindia.com/delhi/">Delhi</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/tourism/">Travel to India</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/hotels-india/">Hotels in India</a></li><li><a href="https://www.mapsofindia.com/maps/india/tourist-centers.htm">Tourist Places in India</a></li><li><a href="https://www.mapsofindia.com/india-tour/">India Tour</a></li><div class="bt-hd-text"><a href="https://www.mapsofindia.com/games/">Map Game</a></div><li><a href="https://www.mapsofindia.com/games/iknowmyindia.html">I Know My India Game</a></li><li><a href="https://www.mapsofindia.com/ikaailand/">Ikaai Land</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/high-resolution-maps.html">Product &amp; Services</a></div><div class="bt-text-menu"><ul><li><a href="http://www.mapsofindiacd.com/about_moi_cd.html">Maps of India CD</a></li><li><a href="https://www.mapsofindia.com/custom-maps/">Custom Mapping</a></li><li><a href="https://www.mapsofindia.com/location-locator/">Location Locator</a></li></ul></div><div class="bt-hd-text"><a href="https://www.mapsofindia.com/current-events/">Current Events</a></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/worldmap/">World Map</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/worldmap/latitude-longitude.html">World Map with Latitude and Longitude</a></li><li><a href="https://www.mapsofindia.com/worldmap/large.html">World Large Map</a></li><li><a href="https://www.mapsofindia.com/worldmap/clickable-world-map.html" >Clickable World Map</a></li><li><a href="https://www.mapsofindia.com/worldmap/physical.html">World Physical Map</a></li></ul></div></div></div></div></div><br /><div class="bottom-menu-bg"><div class="bottom-menu"><div class="bt-menu"><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/utilities/">India Utilities:</a></div><div class="bt-text-menu2"><ul><li><a href="https://www.mapsofindia.com/distance/">Distance Calculator India</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/pincode/">Pin Code</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/flight-schedule/">Flight Schedule</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/ifsccode/">IFSC Code</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/railway-timetable/">Railway Time Table</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/driving-directions-maps/">Driving Direction Maps</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="http://www.gis.mapxl.com/path-finder/map_routing.phtml?config=routing">Shortest Path Finder</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/maps/pocketmaps/">Road Maps</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/delhi/information/mcd-circle-rates.html">MCD Delhi Circle Rate</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/std/">STD Search</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/bus-schedule/">Bus Schedule</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/census/">India census</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/cricket/">Live Cricket Score</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/international-flight-schedule/">International Flights Schedule</a></li></ul></div></div></div></div></div><!-- Tab navigation Ends here -->');
}


function bottom_table_link_rajasthan()
{
 document.write('<!-- Tab navigation starts here --><div class="bottom-menu-bg"><div class="bottom-menu"><div class="bt-menu"><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/india/">India</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/reference-maps/">India Maps</a><li><li><a href="https://www.mapsofindia.com/geography/">Geography of India</a></li><li><a href="https://www.mapsofindia.com/history/">History of India</a></li><li><a href="https://www.mapsofindia.com/census/">India Census Maps</a></li><li><a href="https://www.mapsofindia.com/education/">Education</a></li><li><a href="https://www.mapsofindia.com/culture/">Culture</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/infrastructure/">India Transport Network</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/roads/">Road Map of India</a></li><li><a href="https://www.mapsofindia.com/maps/india/india-railway-map.htm">Indian Railways</a></li><li><a href="https://www.mapsofindia.com/air-network/">Air Network in India</a></li><li><a href="https://www.mapsofindia.com/water/">Ports in India &amp; waterways</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/states/">India States &amp; UTs </a></div><div class="bt-text-menu"> <ul><li><a href="https://www.mapsofindia.com/stateprofiles/">State Profiles</a></li><li><a href="https://www.mapsofindia.com/punjab/" >Punjab</a></li><li><a href="https://www.mapsofindia.com/haryana/">Haryana</a></li><li><a href="https://www.mapsofindia.com/uttar-pradesh/">Uttar Pradesh</a></li><li><a href="https://www.mapsofindia.com/madhya-pradesh/">Madhya Pradesh</a></li><li><a href="https://www.mapsofindia.com/gujarat/">Gujarat</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/maps/cities/">Cities Of India</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/top-ten-cities-of-india/">Top 10 Cities of India</a></li><li><a href="https://www.mapsofindia.com/maps/karnataka/bangalore-map.htm">Bangalore</a></li><li><a href="https://www.mapsofindia.com/maps/mumbai/" >Mumbai</a></li><li><a href="https://www.mapsofindia.com/maps/tamilnadu/chennai-map.htm">Chennai</a></li><li><a href="https://www.mapsofindia.com/delhi/">Delhi</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/tourism/">Travel to India</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/hotels-india/">Hotels in India</a></li><li><a href="https://www.mapsofindia.com/maps/india/tourist-centers.htm">Tourist Places in India</a></li><li><a href="https://www.mapsofindia.com/india-tour/">India Tour</a></li><div class="bt-hd-text"><a href="https://www.mapsofindia.com/games/">Map Game</a></div><li><a href="https://www.mapsofindia.com/games/iknowmyindia.html">I Know My India Game</a></li><li><a href="https://www.mapsofindia.com/ikaailand/">Ikaai Land</a></li></ul></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/high-resolution-maps.html">Product &amp; Services</a></div><div class="bt-text-menu"><ul><li><a href="http://www.mapsofindiacd.com/about_moi_cd.html">Maps of India CD</a></li><li><a href="https://www.mapsofindia.com/custom-maps/">Custom Mapping</a></li><li><a href="https://www.mapsofindia.com/location-locator/">Location Locator</a></li></ul></div><div class="bt-hd-text"><a href="https://www.mapsofindia.com/current-events/">Current Events</a></div></div><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/worldmap/">World Map</a></div><div class="bt-text-menu"><ul><li><a href="https://www.mapsofindia.com/worldmap/latitude-longitude.html">World Map with Latitude and Longitude</a></li><li><a href="https://www.mapsofindia.com/worldmap/large.html">World Large Map</a></li><li><a href="https://www.mapsofindia.com/worldmap/clickable-world-map.html" >Clickable World Map</a></li><li><a href="https://www.mapsofindia.com/worldmap/physical.html">World Physical Map</a></li></ul></div></div></div></div></div><br /><div class="bottom-menu-bg"><div class="bottom-menu"><div class="bt-menu"><div class="bt-menu1"><div class="bt-hd-text"><a href="https://www.mapsofindia.com/utilities/">India Utilities:</a></div><div class="bt-text-menu2"><ul><li><a href="https://www.mapsofindia.com/distance/">Distance Calculator India</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/pincode/">Pin Code</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/flight-schedule/">Flight Schedule</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/ifsccode/">IFSC Code</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/railway-timetable/">Railway Time Table</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/driving-directions-maps/">Driving Direction Maps</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="http://www.gis.mapxl.com/path-finder/map_routing.phtml?config=routing">Shortest Path Finder</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/maps/pocketmaps/">Road Maps</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/delhi/information/mcd-circle-rates.html">MCD Delhi Circle Rate</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/std/">STD Search</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/bus-schedule/">Bus Schedule</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/census/">India census</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/cricket/">Live Cricket Score</a></li><li><img src="https://www.mapsofindia.com/images2009/navigation-partition.gif" width="2" height="15" alt=""></li><li><a href="https://www.mapsofindia.com/international-flight-schedule/">International Flights Schedule</a></li></ul></div></div></div></div></div><!-- Tab navigation Ends here -->');
}



function bottom_link()
{
document.write('<div  class="tab_nav mobhide" id="ftaw"><div  class="tab_left"></div><div  class="tab_right"></div> <table cellspacing="0" cellpadding="0" border="0" align="center"><tr><td valign="middle" style="padding-top:1px;"><form action="https://www.mapsofindia.com/searchresult-page.html" id="cse-search-box"><table align="center"><tr><td><font size="2" color="white"><b>Could not find what you were looking for?</b></font></td><td><input type="hidden" name="cx" value="partner-pub-8993220319430392:59jmgvbhm8y" /><input type="hidden" name="cof" value="FORID:10" /><input type="hidden" name="ie" value="ISO-8859-1" /><input name="q" size="31" style="padding:2px 0 5px 0px; border:0px;" id="query-input rail-bott" /></td><td><input type="submit" name="sa" value="Search" class="search" /></td><td width="100px"></td><td><font size="2" color="white"><b><a href="mailto:operations@mapsofindia.com" class="advertise-link" style="background: #F4BA03;color: #000 !important;   border-radius: 5px;width: 170px;margin: 5px 15px;display: block;padding: 2px;">Advertise with Mapsofindia.com</a></b></font></td></tr></table></form><script type="text/javascript" src="https://www.google.com/cse/brand?form=cse-search-box&amp;lang=en"></script> <div id="branding"></div></td></tr></table></div><!-- Bottom Links starts here --><div  class="bottom-links"><a href="https://www.mapsofindia.com/testimonials.html" rel="nofollow" >Testimonials</a> | <a href="https://www.mapsofindia.com/sponsors/index.html" rel="nofollow" >Sponsors Directory</a> | <a href="https://www.mapsofindia.com/disclaim.htm" rel="nofollow" >Disclaimer</a> | <a href="https://www.mapsofindia.com/faq.html" rel="nofollow" >FAQs</a>  | <a href="https://www.mapsofindia.com/affiliatenetwork.htm" rel="nofollow" >Our Affiliates</a> | <a href="https://www.mapsofindia.com/suggestamap.htm" rel="nofollow" >Suggest a Map</a> | <a href="https://www.mapsofindia.com/become-our-sponsor.html" rel="nofollow" >Become Our Sponsor</a> | <a href="https://www.mapsofindia.com/copyright/index.html" rel="nofollow" >Copyright &amp; Terms of Use</a> |  <a href="https://www.mapsofindia.com/privacy-policy/index.html" rel="nofollow" style="background: #F4BA03;color: #000 !important;border-radius: 5px;width: 115px;margin: 5px;padding: 5px 10px;">Privacy Policy</a> | <a href="https://www.mapsofindia.com/aboutus.html" rel="nofollow" >About Us</a> | <a href="https://www.mapsofindia.com/aboutus.html#contact" rel="nofollow" >Contact Us</a> | <a href="https://www.mapsofindia.com/feedback.html" rel="nofollow" >Feedback</a> | <a href="https://www.mapsofindia.com/careers.html">Careers</a> | <a href="https://www.mapsofindia.com/sitemap.htm">Site Map</a> | <a href="https://www.mapsofindia.com/link/" rel="nofollow" >Link to Us</a> | <a href="https://www.mapsofindia.com/press-release.html" rel="nofollow" >Press Release</a>| <a href="https://www.mapsofindia.com/newsletter/">Get the latest Issue of Weekly Newsletter</a></div><!-- Bottom Links Ends here -->');
}

function christmas_bottom_link()
{
document.write('<div  class="tab_nav"><div  class="tab_left"></div><div  class="tab_right"></div> <table cellspacing="0" cellpadding="0" border="0" align="center"><tr><td valign="middle" style="padding-top:1px;"><form action="https://www.mapsofindia.com/searchresult-page.html" method="GET" ><table align="center"><tr><td><font size="2" color="white"><b>Could not find what you were looking for?</b></font></td><td><input name="q" size="31" style="padding:2px 0 5px 0px; border:0px;" id="query-input" onfocus="inputFocus();" onblur="inputBlur();" /></td><td><input type="submit" name="sa" value="Search" class="search" /></td><td width="100px"></td><td><font size="2" color="white"><b><a href="mailto:operations@mapsofindia.com" class="advertise-link">Advertise with Mapsofindia.com</a></b></font></td></tr></table></form> <div id="branding"></div></td></tr></table></div><!-- Bottom Links starts here --><div  class="bottom-links"><a href="https://www.mapsofindia.com/testimonials.html" rel="nofollow" >Testimonials</a> | <a href="https://www.mapsofindia.com/sponsors/index.html" rel="nofollow" >Sponsors Directory</a> | <a href="https://www.mapsofindia.com/disclaim.htm" rel="nofollow" >Disclaimer</a> | <a href="https://www.mapsofindia.com/faq.html" rel="nofollow" >FAQs</a>  | <a href="https://www.mapsofindia.com/affiliatenetwork.htm" rel="nofollow" >Our Affiliates</a> | <a href="https://www.mapsofindia.com/suggestamap.htm" rel="nofollow" >Suggest a Map</a> | <a href="https://www.mapsofindia.com/become-our-sponsor.html" rel="nofollow" >Become Our Sponsor</a> | <a href="https://www.mapsofindia.com/copyright/index.html" rel="nofollow" >Copyright &amp; Terms of Use</a> | <a href="https://www.mapsofindia.com/poweryoursearch.htm" rel="nofollow" >Power Your Map Search</a> |  <a href="https://www.mapsofindia.com/privacy-policy/index.html" rel="nofollow" >Privacy Policy</a> | <a href="https://www.mapsofindia.com/aboutus.html" rel="nofollow" >About Us</a> | <a href="https://www.mapsofindia.com/aboutus.html#contact" rel="nofollow" >Contact Us</a> | <a href="https://www.mapsofindia.com/feedback.html" rel="nofollow" >Feedback</a> | <a href="https://www.mapsofindia.com/christmas-in-goa/sitemap.html">Goa Christmas HTML Site Map</a> | <a href="https://www.mapsofindia.com/christmas-in-goa/sitemap.xml">Goa Christmas XML Site Map</a> | <a href="https://www.mapsofindia.com/link/" rel="nofollow" >Link to Us</a> | <a href="https://www.mapsofindia.com/press-release.html" rel="nofollow" >Press Release</a>| <a href="https://www.mapsofindia.com/newsletter/">Get the latest Issue of Weekly Newsletter</a></div><!-- Bottom Links Ends here -->');
}


//For of affinity type widget and ipad popup.
function setCookie(cookieName,cookieValue,mins) 
{
	var today = new Date();
	var expire = new Date();
	if (mins==null || mins==0) 
		mins=3;
	expire.setTime(today.getTime() + 60000*mins);
	document.cookie = cookieName+"="+escape(cookieValue)
	 + ";expires="+expire.toGMTString();

}
function getCookie(c_name)
{
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	{
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==c_name)
			return unescape(y);
	}
}
function checkCookie(cookiename,cookietime)
{
	var ck_ipad=getCookie(cookiename);
	if (ck_ipad)
		return true;
	else {
		setCookie(cookiename,"very_true",cookietime);
		return false;
	}
}

//Original Code
var scroll2=0;
$(window).scroll(function() {
	if ($(this).scrollTop() != 0 && scroll2==0) {
		slide_slider();
	}
});

/*var scroll2=0;
$(document).ready(function() {
	
		slide_slider();
	
});*/
function slide_slider()
{
	if(!getCookie('popup'))
	{
		scroll2=1;
		$('#hide_btn').css({"display" : "block"});
		setTimeout(function() {
			$('#block-ec_ads-slider_ad').css({"display" : "block"});
			$('#slider_alt').animate({bottom:0},1000,'swing',function(){});
			$('#down_arrow').show();
			$('#up_arrow').hide();
		},1000);
	}
}

var popupStatus = 0;
function loadPopup2(){
	if(popupStatus==0){
		$("#backgroundPopup").css({
			"opacity": "0.7"
		});
		document.getElementById('backgroundPopup').oncontextmenu = mischandler;
		document.getElementById('popupIpad').oncontextmenu = mischandler;
		$("#backgroundPopup").fadeIn("slow");
		$("#popupIpad").fadeIn("slow");
		popupStatus = 2;
	}
}
function mischandler(){
	return false;
	}
function disablePopup(){
	if(popupStatus==2){
		$("#backgroundPopup").fadeOut("slow");
		$("#popupIpad").fadeOut("slow");
		popupStatus = 0;
	}
}


function affinity_type_slider_ipad_popup()
{
	//<![CDATA[
	if (navigator.userAgent.indexOf('iPad') != -1) {
		var falg=checkCookie("ck_ipad",'3');
		if(falg)
			var data=false;
		else
		{
			var v='<!--<div id="popupIpad"><div id="popupContactipad"><div class="hanger"></div><!-- Image and content Starts --><div class="contentimage"><div class="contentimage_r_head">Mapsofindia.com is also available as an iPad Application</div><div class="center-part"><!-- center part start --><div class="left-box"><div class="left-box-heading">World Atlas and Maps - HD</div><div class="contentimage_l"><img src="https://www.mapsofindia.com/images/ipad-popup/world-atlas-lite.jpg" width="121" height="121" border="0" alt=""></div><div class="contentimage_r"><ul><li>500,000+ Downloads</li><li>World Utilities</li><li>Individual Country Maps</li></ul></div><div class="downloadbtn"><a href="http://bit.ly/GF9DIS"><img src="https://www.mapsofindia.com/images/ipad-popup/free-version-bt.png"/></a></div></div><!-- left box end --><div class="right-box"><div class="right-box-heading">World Atlas and Maps - HD</div><div class="contentimage_l"><img src="https://www.mapsofindia.com/images/ipad-popup/world-atlas-HD.jpg" width="121" height="121" border="0" alt=""></div><div class="contentimage_r2"><ul><li>200,000+ Downloads</li><li>Individual Country Maps for Sale</li><li>Ranked&nbsp;#&nbsp;7 in reference category</li></ul></div>	<div class="downloadbtn"><a href="http://bit.ly/xjv4sH"><img src="https://www.mapsofindia.com/images/ipad-popup/premium-version-bt.png"/></a></div></div><!-- right ends --></div><!-- center part closed --></div><!-- images ends --><!-- images Start --><!-- <a id="popupContactItunes" onclick="document.location.href=\'http://bit.ly/xjv4sH\';"></a> --><a id="popupContactitunesClose" onclick="disablePopup();"></a></div></div><div id="backgroundPopup" onclick="disablePopup();"></div>-->';
			document.write(v);
			loadPopup2();
		}
	} // ]]>

	else if ((screen.width<=1023) && (screen.height<=768))
	{
	 //do nothing
	}
	else
	{
		
		var v='<!-- Slider starts here --><div class="block-ec_ads" id="block-ec_ads-slider_ad" style="display: none !important;"><div class="pop_up1_alt" id="slider_alt" ><div class="slide_left_alt"></div><div class="slide_mid_alt"></div><div class="slide_alt"><script type="text/javascript">var switchTo5x=true;</script><script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script><script type="text/javascript">stLight.options({publisher:"056ea25f-a4a0-4308-9c4d-e8271ef2bc0d"});</script><span class="st_email_hcount" displayText="Emai"></span><span  class="st_digg_hcount" displayText="Digg"></span><span  class="st_delicious_hcount" displayText="Delicious"></span><span  class="st_twitter_hcount" displayText="Tweet"></span><span  class="st_facebook_hcount" displayText="Facebook"></span><span  class="st_plusone_hcount" ></span><span class="item6"><script src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script><fb:like href="https://www.facebook.com/pages/mapsofindia/282252519772" layout="button_count" show_faces="false" width="50" font="arial"></fb:like></span><span class="item5"><a href="https://plus.google.com/115773901953431719189"><img src="https://www.mapsofindia.com/g+.gif" width="20" height="20" title="Connect with us in G+" border="0"/></a></span></div></div><div id="close_sld"><div id="hide_btn"></div><div id="up_arrow"></div><div id="down_arrow"></div></div></div><!-- Slider ends here -->';
		if(!getCookie('popup'))
			document.write(v);
		/*}*/
	}
}

//For of affinity type widget and ipad popup.

function election468x60()
{
document.write('<iframe src="https://www.mapsofindia.com/dgreetings-election.html" width="610" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" height="260"> </iframe>');
}



function headeradd468x60()
{
document.write('<iframe src="https://www.mapsofindia.com/dgreetings.html" width="610" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" height="260"> </iframe>');
}


function utilities600x250()
{
document.write('<iframe src="https://www.mapsofindia.com/utilities-below-add.html" width="610" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" height="260"> </iframe>');
}


function Instructions1()	
{
	if(location.hash == '#bot1'){
		document.writeln('<table cellspacing="0" cellpadding="0" border="0" align="center" width="95%" class="mytable buynowform" style="display:block;">');
	}else{
		document.writeln('<table cellspacing="0" cellpadding="0" border="0" align="center" width="95%" class="mytable" style="display:none;">');
	}
//document.writeln('<form onsubmit="return callNow3(this);">');


document.writeln('<tr><td width="11" class="table_left_corner1" >&nbsp;</td><td class="table_head1">Buy this Map </td><td width="11" class="table_right_corner1" style="background: #ffffff;  color: #000000; border-radius: 9px;font-size: 20px; padding: 2px 6px 3px; font-weight: bold;  cursor: pointer;  font-family: arial; line-height: 16px;" id="closebuyform">x</td></tr><tr><td colspan="3"><table  cellpadding="0" cellspacing="0" width="97%" class="text_form" align="center" border="0" class="mobhide"><tr><td colspan="2" style="padding:0px 0 8px 0px;">The default format of this map would be JPEG (72dpi) This map can be used for internal purpose of project report/presentation and would be available without the watermark.</td></tr><form onsubmit="return callNow3(this);"><tr><td nowrap><strong>Usage:</strong></td><td>Project Report / Presentation <!--<select name="usage"><option value="NS" selected>Please select map image Usage</option><option value="project">Project Report</option><option value="presentation">Presentation / Circulation</option><option value="brochure">Brochure</option><option value="internet">Internet site</option><option value="tv">TV Channel</option><option value="print">Print Media(Books,Newspapers,Magazines,Publication)</option><option value="all">All Uses</option></select>-->&nbsp;&nbsp;<a href="javascript:void(0)" style="{color:blue;text-decoration:none; font-weight:bold;}" onclick="return openeRates();"><font style="color:#015998; font-weight:bold; text-decoration:underline ">[View Rates]</font></a></td></tr><!--<tr><td valign="top"><strong>Resolution:</strong></td><td valign="top"><select name="resolution"><option value="NS" selected>Please select Resolution&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option><option value="72DPI">72 DPI </option><option value="300DPI">300 DPI</option></select></td></tr>--><tr><td><strong>Currency:</strong></td><td> <select name="currency"><option value="inr">INR</option><option value="usd">USD</option></select>&nbsp;<input type="submit" value="Buy Now" class="button"></td></tr><tr><td colspan=2  valign="top" style="padding:8px 0 0 0px;">For any other format or requirements, please get in touch with Parminder Singh +91 9871399004 or e-mail at <a href="mailto:apoorv@comparemails.com?cc=solutions@mapsofindia.com">apoorv@comparemails.com</a> <br />Mapsofindia.com reserves the right to act against any unauthorized use of its Intellectual Property.</font></td></tr></form></table></td></tr></table>');	

var elem = $('.buy-now a').position();
$('.mytable').css("top",elem.top+"px");

}


function Instructions()	
{
	if(location.hash == '#bot1'){
		document.writeln('<table cellspacing="0" cellpadding="0" border="0" align="center" width="95%" class="mytable buynowform" style="display:block;">');
	}else{
		document.writeln('<table cellspacing="0" cellpadding="0" border="0" align="center" width="95%" class="mytable" style="display:none;">');
	}
//document.writeln('<form onsubmit="return callNow3(this);">');


document.writeln('<tr><td width="11" class="table_left_corner1" >&nbsp;</td><td class="table_head1">Buy this Map </td><td width="11" class="table_right_corner1" style="background: #ffffff;  color: #000000; border-radius: 9px;font-size: 20px; padding: 2px 6px 3px; font-weight: bold;  cursor: pointer;  font-family: arial; line-height: 16px;" id="closebuyform">x</td></tr><tr><td colspan="3"><table  cellpadding="0" cellspacing="0" width="97%" class="text_form" align="center" border="0"><tr><td colspan="2" style="padding:0px 0 8px 0px;">The default format of this map would be JPEG (72dpi) This map can be used for internal purpose of project report/presentation and would be available without the watermark.</td></tr><form onsubmit="return callNow3(this);"><tr><td nowrap><strong>Usage:</strong></td><td>Project Report / Presentation <!--<select name="usage"><option value="NS" selected>Please select map image Usage</option><option value="project">Project Report</option><option value="presentation">Presentation / Circulation</option><option value="brochure">Brochure</option><option value="internet">Internet site</option><option value="tv">TV Channel</option><option value="print">Print Media(Books,Newspapers,Magazines,Publication)</option><option value="all">All Uses</option></select>-->&nbsp;&nbsp;<a href="javascript:void(0)" style="{color:blue;text-decoration:none; font-weight:bold;}" onclick="return openeRates();"><font style="color:#015998; font-weight:bold; text-decoration:underline ">[View Rates]</font></a></td></tr><!--<tr><td valign="top"><strong>Resolution:</strong></td><td valign="top"><select name="resolution"><option value="NS" selected>Please select Resolution&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option><option value="72DPI">72 DPI </option><option value="300DPI">300 DPI</option></select></td></tr>--><tr><td><strong>Currency:</strong></td><td> <select name="currency"><option value="inr">INR</option><option value="usd">USD</option></select>&nbsp;<input type="submit" value="Buy Now" class="button"></td></tr><tr><td colspan=2  valign="top" style="padding:8px 0 0 0px;">For any other format or requirements, please get in touch with Parminder Singh +91 9871399004 or e-mail at <a href="mailto:apoorv@comparemails.com?cc=solutions@mapsofindia.com">apoorv@comparemails.com</a> <br />Mapsofindia.com reserves the right to act against any unauthorized use of its Intellectual Property.</font></td></tr></form></table></td></tr></table>');
//document.writeln('<table  cellpadding="0" cellspacing="0" width="97%" align="center" border="0" style=" display:none;background-color:#ffffff;" class="mobhide"><tr><td><ins style="display: inline-table; border: medium none; height: 330px; margin: 0pt; padding: 0pt; position: relative; visibility: visible; width: 600px;"><ins style="display: block; border: medium none; height: 330px; margin: 0pt; padding: 0pt; position: relative; visibility: visible; width: 600px;" ><iframe width="610" height="330" frameborder="0" scrolling="no" vspace="0" style="left: 0pt; position: absolute; top: 0pt;"  src="https://www.mapsofindia.com/whitepages/home/index" marginwidth="0" marginheight="0" hspace="0" allowtransparency="true"></iframe></ins></ins></td></tr></table>');



var elem = $('.buy-now a').position();
$('.mytable').css("top",elem.top+"px");

}
var x = 250;
var mapRates = new Array( new Array("project",(x),(x) * 2 ), new Array("presentation",(x*2),(x*2) * 2 ), new Array("brochure",(x*6),(x*6) * 2 ),  new Array("print",(x*12),(x*12) * 2 ), new Array("tv",(x*16),(x*16) * 2 ),  new Array("internet",(x*20),(x*20) * 2 ),  new Array("all",(x*24),(x*24) * 2 )); 

function callNow3(frm){
var pcode,pname;
var isOk = false;
var parameters="";
var usageValue, format, currency, rate,resolution;
rate=0;
var usdRate=60;
pcode="MOIMAP";
pname=self.location+"";
//pname=self.location;
i=pname.toLowerCase().indexOf("mapsofindia.com");
//alert(i);
if (i >-1){
	pname=pname.substring(i,pname.length);
}
		usageValue = 'project-report-or-presentation';
	
	rate=999;
	currency=frm.currency.value;
	if (currency == "usd"){
		//rate=Math.ceil(rate/usdRate);
		rate=15;
	}

	usage="FOR-USE-IN-"+usageValue.toUpperCase(); 
	//////////////////////////////////////
	pcode+=rate; //added on 16 Mar 2004.
	/////////////////////////////////////
	
	//local path
	//parameters = "../../cart/" + currency + "/viewCart.html?" + pcode + "//" + pname + "//"+usage+"=" + rate + "//1";

	//remote path
	parameters = "https://www.mapsofindia.com/cart/" + currency + "/viewCart.html?" + pcode + "//" + pname + "//"+usage+"=" + rate + "//1";

	window.location.href=parameters;

//return true;
return false;
}



function callNow3_11_03_2014(frm){
var pcode,pname;
var isOk = false;
var parameters="";
var usageValue, format, currency, rate;
rate=0;
var usdRate=43.5;
pcode="MOIMAP";
pname=self.location+"";
//pname=self.location;
i=pname.toLowerCase().indexOf("mapsofindia.com");
//alert(i);
if (i >-1){
	pname=pname.substring(i,pname.length);
}
	if (frm.usage.value == "NS"){
		alert("Please select your <Usage type> i.e. for Internet Site or Presentation etc.");
		return false;
	}else{
		usageValue = frm.usage.value;
	}
	if (frm.format.value == "NS"){
			alert("Please select map image format.");
			return false;
	}else{
		format = frm.format.value;
	}
	
	//alert(usageValue);
	//alert(format);
	rate=getMapRate(usageValue,format);
	currency=frm.currency.value;
	if (currency == "usd"){
		rate=Math.ceil(rate/usdRate);
	}

	if (format.toLowerCase() == "withwatermark"){
		usage="FOR-USE-IN-"+usageValue.toUpperCase()+"-WITH-WATERMARK"; 
	}else{
		usage="FOR-USE-IN-"+usageValue.toUpperCase()+"-WITHOUT-WATERMARK"; 
	}

	//////////////////////////////////////
	pcode+=rate; //added on 16 Mar 2004.
	/////////////////////////////////////
	
	//local path
	//parameters = "../../cart/" + currency + "/viewCart.html?" + pcode + "//" + pname + "//"+usage+"=" + rate + "//1";

	//remote path
	parameters = "https://www.mapsofindia.com/cart/" + currency + "/viewCart.html?" + pcode + "//" + pname + "//"+usage+"=" + rate + "//1";

	//alert(parameters);
	window.location.href=parameters;

//return true;
return false;
}


function callNow_election(frm){
var pcode,pname;
var isOk = false;
var parameters="";
var usageValue, format, currency, rate;
rate=0;
var usdRate=43.5;
pcode="MOIELCT";
pname=self.location+"";
//pname=self.location;
i=pname.toLowerCase().indexOf("mapsofindia.com");
//alert(i);
if (i >-1){
	pname=pname.substring(i,pname.length);
}
	
		usageValue = frm.usage.value;
	
		format = frm.format.value;

	
	//alert(usageValue);
	//alert(format);
	rate=getMapRate(usageValue,format);
	currency=frm.currency.value;
	if (currency == "usd"){
		rate=Math.ceil(rate/usdRate);
	}

	if (format.toLowerCase() == "withwatermark"){
		usage="FOR-USE-IN-"+usageValue.toUpperCase()+"-WITH-WATERMARK"; 
	}else{
		usage="FOR-USE-IN-"+usageValue.toUpperCase()+"-WITHOUT-WATERMARK"; 
	}

	//////////////////////////////////////
	pcode+=rate; //added on 16 Mar 2004.
	/////////////////////////////////////
	
	//local path
	//parameters = "../../cart/" + currency + "/viewCart.html?" + pcode + "//" + pname + "//"+usage+"=" + rate + "//1";

	//remote path
	
	parameters = "https://www.mapsofindia.com/cart/" + currency + "/viewCart.html?" + pcode + "//" + pname + "//"+usage+"=" + rate + "//1";
//alert(parameters);
	//alert(parameters);
	window.location.href=parameters;

//return true;
return false;
}

function rightbannertop1()
{
document.write('<iframe src="https://www.mapsofindia.com/widgets/rightbannertop1.html" width="172" height="92" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> </iframe>');
}

function internationalobe()
{
document.write('<iframe src="https://www.mapsofindia.com/widgets/tribalfusionpopup.html" width="300" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> </iframe>');	
}

function internationalflight()
{
document.write('<iframe src="http://automobiles.mapsofindia.com/widget/300x250_mmtbanner_01022011.html" width="300" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> </iframe>');	

}

function rightbannerbottom3()
{
document.write('<iframe src="https://www.mapsofindia.com/widgets/rightbannerbottom3.html" width="160" height="180" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> </iframe>');
}


function getMapRate(strUsageValue,strFormat){
	for (var i=0;i<mapRates.length;i++){
		//alert(mapRates[i][0]);
		if (strUsageValue.toLowerCase() == mapRates[i][0].toLowerCase()){
			if (strFormat.toLowerCase() == "withwatermark"){

				return mapRates[i][1];
			}else{
				return mapRates[i][2];
			}
		}
	}
}

function openeRates(){
var ratesWin=window.open("https://www.mapsofindia.com/emrm.html","ratesWindow","width=400, height=190, toolbars=0");
return false;
}
function printImage(imagepath, spid)
{
	var fileName = 'https://www.mapsofindia.com/print_image.php?id='+imagepath+'&spid='+spid;
	window.open(fileName, 'myWin', 'resizable=yes,toolbar=no, left=0, top=0, location=no,directories=no,status=no,menubar=no,scrollbars=yes, width=800, height=600');

}
function saveImage(imagepath)
{
	var fileName = 'https://www.mapsofindia.com/save_map.php?id='+imagepath;
	popUpWin1(fileName);
}
function saveImage2(imagepath)
{
	var fileName = 'https://www.mapsofindia.com/save_map1.php?id='+imagepath;
	popUpWin1(fileName);
}



function popUpWin1(URL)
{
	day = new Date();
	id	= day.getTime();
	eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0, scrollbars=1, location=center, statusbar=0, menubar=0, resizable=0, width=500, height=500')");
}///end of function.

function saveImage1(imagepath)
{
var fileName = 'https://www.mapsofindia.com/save_map.php?id='+imagepath;
//var fileName = 'http://localhost/MOI/save_map.php?id='+imagepath;
	popUpWin1(fileName);
	}

$(function() {
  $('#q').focus(function() {           
    if($(this).val() == 'Search...') $(this).val('');
  }).blur(function() {
    if($(this).val() == '') $(this).val('Search...');
  });
});





function openUrl() {

//var myindex=document.myform.dir.selectedIndex;
if (document.myform.dir.selectedIndex=="") {
alert("\nYou must make a selection from the drop-down menu.");
return false;
}
else
//alert(document.myform.dir.options[myform.dir.selectedIndex].value);
window.location=(document.myform.dir.options[document.myform.dir.selectedIndex].value);
}
function google_search()
{
	document.write('<table cellpadding="0" cellspacing="0" width="100%" style="float:left"><tr><td style="display:none;"><span class="item8" style="position:relative;"><div id="google_translate_element" style="height:18px; float:left;"></div><script type="text/javascript">function googleTranslateElementInit() {  new google.translate.TranslateElement({pageLanguage: \'en\', includedLanguages:\'ar,bn,de,el,en,es,fa,fr,gu,hi,id,it,ja,kn,ko,la,pt,ru,ta,te,th,ur,zh-CN,zh-TW\', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true, gaId: \'UA-22494977-1\'}, \'google_translate_element\');}</script><script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script></span></td><td align="top"><form name="myform" id="myform" style="margin-top:0px;margin-bottom:0px;" action=""><select name="dir"  style="font-family:verdana;font-size:11px;color:navy; width:130px;"><option value="">Select City,State or U.T.</option><option value="https://www.mapsofindia.com/agra/">Agra</option><option value="https://www.mapsofindia.com/ahmedabad/">Ahmedabad</option><option value="https://www.mapsofindia.com/maps/uttarpradesh/districts/allahabad.htm">Allahabad</option><option value="https://www.mapsofindia.com/amritsar/">Amritsar</option><option value="https://www.mapsofindia.com/arunachal-pradesh/">Arunachal Pradesh</option><option value="https://www.mapsofindia.com/assam/">Assam</option><option value="https://www.mapsofindia.com/aurangabad/">Aurangabad</option><option value="https://www.mapsofindia.com/bangalore/">Bengaluru</option><option value="https://www.mapsofindia.com/bhopal/">Bhopal</option><option value="https://www.mapsofindia.com/bihar/">Bihar</option><option value="https://www.mapsofindia.com/maps/rajasthan/bikaner.htm">Bikaner</option><option value="https://www.mapsofindia.com/chandigarh/">Chandigarh</option><option value="https://www.mapsofindia.com/chennai/">Chennai</option><option value="https://www.mapsofindia.com/chhattisgarh/">Chhattisgarh</option><option value="https://www.mapsofindia.com/kochi/">Kochi</option><option value="https://www.mapsofindia.com/coimbatore/">Coimbatore</option><option value="https://www.mapsofindia.com/hill-stations-india/darjeeling.html">Darjiling</option><option value="https://www.mapsofindia.com/dehradun/">Dehradun</option><option value="https://www.mapsofindia.com/delhi/">Delhi</option><option value="https://www.mapsofindia.com/faridabad/">Faridabad</option><option value="https://www.mapsofindia.com/ghaziabad/">Ghaziabad</option><option value="https://www.mapsofindia.com/maps/goa/">Goa</option><option value="https://www.mapsofindia.com/maps/gujarat/">Gujarat</option><option value="https://www.mapsofindia.com/gurgaon/">Gurgaon</option><option value="https://www.mapsofindia.com/guwahati/">Guwahati</option><option value="https://www.mapsofindia.com/gwalior/">Gwalior</option><option value="https://www.mapsofindia.com/haryana/">Haryana</option><option value="https://www.mapsofindia.com/himachal-pradesh/">Himanchal Pradesh</option><option value="https://www.mapsofindia.com/hyderabad/">Hyderabad</option><option value="https://www.mapsofindia.com/indore/">Indore</option><option value="https://www.mapsofindia.com/maps/madhyapradesh/jabalpur-map.htm">Jabalpur</option><option value="https://www.mapsofindia.com/jaipur/">Jaipur</option><option value="https://www.mapsofindia.com/jaisalmer/">Jaisalmer</option><option value="https://www.mapsofindia.com/maps/jammuandkashmir/">Jammu and Kashmir</option><option value="https://www.mapsofindia.com/maps/uttarpradesh/districts/jhansi.htm">Jhansi</option><option value="https://www.mapsofindia.com/jharkhand/">Jharkhand</option><option value="https://www.mapsofindia.com/jodhpur/">Jodhpur</option><option value="https://www.mapsofindia.com/kanpur/">Kanpur</option><option value="https://www.mapsofindia.com/karnataka/">Karnataka</option><option value="https://www.mapsofindia.com/maps/kerala/">Kerala</option><option value="https://www.mapsofindia.com/kodaikanal/">Kodaikanal</option><option value="https://www.mapsofindia.com/kolkata/">Kolkata</option><option value="https://www.mapsofindia.com/kota/">Kota</option><option value="https://www.mapsofindia.com/kottayam/">Kottayam</option><option value="https://www.mapsofindia.com/maps/jammuandkashmir/leh-ladakh-map.html">Ladakh</option><option value="https://www.mapsofindia.com/lakshadweep/">Lakshadweep</option><option value="https://www.mapsofindia.com/lucknow/">Lucknow</option><option value="https://www.mapsofindia.com/ludhiana/">Ludhiana</option><option value="https://www.mapsofindia.com/maps/maharashtra/">Maharashtra</option><option value="https://www.mapsofindia.com/manali/">Manali</option><option value="https://www.mapsofindia.com/mangalore/">Mangaluru</option><option value="https://www.mapsofindia.com/maps/manipur/">Manipur</option><option value="https://www.mapsofindia.com/mathura/">Mathura</option><option value="https://www.mapsofindia.com/maps/meghalaya/">Meghalaya</option><option value="https://www.mapsofindia.com/maps/mizoram/">Mizoram</option><option value="https://www.mapsofindia.com/maps/uttarpradesh/districts/moradabad.htm">Moradabad</option><option value="https://www.mapsofindia.com/mountabu/">Mount Abu</option><option value="https://www.mapsofindia.com/maps/mumbai/">Mumbai</option><option value="https://www.mapsofindia.com/mysore/">Mysuru</option><option value="https://www.mapsofindia.com/maps/nagaland/">Nagaland</option><option value="https://www.mapsofindia.com/nagpur/">Nagpur</option><option value="https://www.mapsofindia.com/nainital/">Nainital</option><option value="https://www.mapsofindia.com/noida/">Noida</option><option value="https://www.mapsofindia.com/ooty/">Ooty</option><option value="https://www.mapsofindia.com/orissa/">Odisha</option><option value="https://www.mapsofindia.com/patna/">Patna</option><option value="https://www.mapsofindia.com/maps/pondicherry/">Puducherry</option><option value="https://www.mapsofindia.com/portblair/">Port Blair</option><option value="https://www.mapsofindia.com/pune/">Pune</option><option value="https://www.mapsofindia.com/maps/punjab/">Punjab</option><option value="https://www.mapsofindia.com/maps/rajasthan/">Rajasthan</option><option value="https://www.mapsofindia.com/rajkot/">Rajkot</option><option value="https://www.mapsofindia.com/rishikesh/">Rishikesh</option><option value="https://www.mapsofindia.com/maps/uttarpradesh/districts/saharanpur.htm">Saharanpur</option><option value="https://www.mapsofindia.com/maps/andhrapradesh/secunderabad.htm">Secunderabad</option><option value="https://www.mapsofindia.com/maps/sikkim/">Sikkim</option><option value="https://www.mapsofindia.com/surat/">Surat</option><option value="https://www.mapsofindia.com/tamilnadu/">Tamilnadu</option><option value="https://www.mapsofindia.com/maps/tamilnadu/tiruchchirapalli.htm">Trichy</option><option value="https://www.mapsofindia.com/maps/kerala/thiruvananthapuram.htm">Thiruvananthapuram</option><option value="https://www.mapsofindia.com/udaipur/">Udaipur</option><option value="https://www.mapsofindia.com/uttar-pradesh/index.html">Uttar Pradesh</option><option value="https://www.mapsofindia.com/uttarakhand/">Uttarakhand</option><option value="https://www.mapsofindia.com/maps/gujarat/vadodra.htm">Vadodara</option><option value="https://www.mapsofindia.com/varanasi/">Varanasi</option><option value="https://www.mapsofindia.com/west-bengal/">West Bengal</option></select>&nbsp;<input type="button" name="submit" value="Go" style="font-family:verdana;font-size:11px;font-weight:bold;color:navy;" align="bottom" onclick="javascript:openUrl();" />&nbsp;</form></td></table>');

}


function hotel_obe(){
document.write('<IFRAME style="margin:5px 7px 5px 0px;" SRC="http://www.bookingdragon.com/hyaff8l/adel/ifdel_01.asp?fm_mic=1yvcp4l&wid=i024&prod=hotel&ibackground=" ID="I024" WIDTH=300 HEIGHT=250 MARGINWIDTH=0 MARGINHEIGHT=0 FRAMEBORDER="NO" SCROLLING="NO" ALIGN="CENTER"></IFRAME>');
}

function hotel_obe1(){

document.write('<IFRAME SRC="http://www.bookingdragon.com/hyaff8l/adel/ifdel_01.asp?fm_mic=1yvcp4l&wid=i024&prod=hotel&ibackground=" ID="I024" WIDTH=300 HEIGHT=250 MARGINWIDTH=0 MARGINHEIGHT=0 FRAMEBORDER="NO" SCROLLING="NO" ALIGN="CENTER"></IFRAME>');
}

function WoC728x90()
{

 document.write('<table align="center"><tr><td><a href=\'https://www.mapsofindia.com/best-travel-deals.html\'><img src=\'https://www.mapsofindia.com/images/hotel/hotels.gif\' border=\'0\' alt=\'Online Hotel Booking\' width="728" height="90" /></a></td></tr></table>');
}

function WoC338x250()
{
  
  document.write('<table align="right"><tr><td><a href=\'https://www.mapsofindia.com/best-travel-deals.html\'><img src=\'https://www.mapsofindia.com/images/hotel/338x250.gif\' border=\'0\' alt=\'Online Hotel Booking\' width="338" height="250" /></a></td></tr></table>');
}



function WoC160x600()
{
  document.write('<a href=\'https://www.mapsofindia.com/best-travel-deals.html\'><img src=\'https://www.mapsofindia.com/images/120x600.gif\' border=\'0\' alt=\'Hotel Booking\' width="120" height="600" /></a>');
	
}


function WoC468x60(){

document.write('<a href=\'http://www.warofcricket.com/WarofCricket/index.jsp\'><img src=\'https://www.mapsofindia.com/images/warofcricket/468x60.jpg\' border=\'0\'  alt=\'War of Cricket\' width="468" height="60" /></a>');
}
 
function poponload()
{
    var title = document.getElementsByTagName("H1")[0];
    if (title) h1 = title.innerHTML;
    testwindow= window.open ("https://twitter.com/intent/tweet?&amp;text="+encodeURIComponent(location.href)+" "+encodeURIComponent(h1), "mywindow", "location=1,status=1,scrollbars=1,width=815,top=0,left=0,height=510");
}

function right_top1()
{
document.write("<table cellpadding='0' cellspacing='0'><tr><td style='font: 14px arial; font-weight: bold; color:#000; padding:0 3px'>Follow us on</td><td style='padding: 0 7px'><a href='http://www.facebook.com/pages/mapsofindia/282252519772'><img src='https://www.mapsofindia.com/images2009/icon_facebook.gif' alt='Follow us on Facebook' style='border:none;' align='absmidddle' /></a></td><td><a href='http://twitter.com/mapsofindia'><img src='https://www.mapsofindia.com/images2009/icon_twitter.gif' alt='Follow us on Twitter' style='border:none;' align='absmidddle' /></a> </td></tr></table>");
}
function hotel_booking()
{
document.write('<br /><iframe src="https://www.mapsofindia.com/flight-schedule/obe/travelocity160x600.html" width="160" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> </iframe><br />');
}
function hotel_city_search()
{
document.write('<form name="search" ><table cellspacing="1" cellpadding="1" border="0"  align="center"><tr><td style="font-family:verdana;font-size:11px;font-weight:bold;color:black;">Search Hotels in City </td><td style="font-family:verdana;font-size:11px;font-weight:bold;color:black;"><input type="text" id="search_pc" name="search_pc" value="Type City Name..." size="25" onclick="clearAndFocus( document.getElementById(\'search_pc\') )" onKeyUp="lookupkey(this.value);" /></td><td><input type="button" name="submit" value="Go" style="font-family:verdana;font-size:11px;font-weight:bold;color:navy;" valign="bottom" onclick="javascript:openUrl();" />&nbsp;</td></tr></table><div class="suggestionsBox" id="suggestionskey" style="display: none;z-index:99;position: absolute; margin-left:800px; margin-top:5px; valign:top;border:1px solid #333333;"><img src="https://www.mapsofindia.com/hotels-india/upArrow.png" style="position: absolute; top: -7px;right: 47px;" alt="upArrow" /><div class="suggestionList" id="autoSuggestionsListkey" style="display: block;">&nbsp;</div><div id="search_hotel"></div></div></form>');
}

function clearAndFocus( el )
		  { 
			  el.value = '';
			  el.focus();
	  }
$(document).ready(function(){
	
	$("#closebuyform").click(function(){
		$('.mytable').slideToggle();
	});

//Intialization of affinity type widget
	$(document).keypress(function(e){
			if(e.keyCode==27 && popupStatus==1){
			disablePopup();
		}
	});
	$('#block-ec_ads-slider_ad').css({"display" : "none" , "position": "relative"});		
	
	$('#up_arrow').click(function(){ 
		$('#slider_alt').animate({bottom:0},1000,'swing',function(){});
		$('#down_arrow').show();
		$('#up_arrow').hide();   
	});
	$('#down_arrow').click(function(){
		$('#slider_alt').animate({bottom:-90},1000,'swing',function(){}); 
		$('#up_arrow').show();
		$('#down_arrow').hide();
	});
	$('#slider_alt').animate({bottom:-90},1000,'swing',function(){});
	$('#hide_btn').click(function(){    
		setCookie('popup','envoked','120');
		$('#block-ec_ads-slider_ad').css({"display" : "none"});
		$('#down_arrow').hide();
		$('#up_arrow').hide();
		$('#hide_btn').hide();
		$('#slider_alt').hide();
		$('#block-ec_ads-slider_ad').hide();
	});
	setTimeout(function() {	
	},1000);
	$('#hide').click(function(){
		$('#slide').hide('slow');
	});
//Intialization of affinity type widget

	//calling widget function on body load
	setTimeout('prod_widget()', 10000);
	//end calling widget function on body load
	$('.table_head').each(function(){
		if($.trim($(this).html())=='Buy this Map'){
			$(this).prev('td').hide();
			$(this).next('td').hide();
			$(this).hide();
			}
	});
	
	$('.buy-now a').click(function(){
			$(this).attr('href','javascript:void(0)');
			var elem = $(this).position()
			$('.mytable').addClass('buynowform');
			$('.mytable').css("top",elem.top+"px");
			$('.mytable').slideToggle();
	});

		$('.disclamer b').click(function(){
		var myshwd = $(this).parent().parent().find('p');
		if (myshwd.is(':visible'))
		{
			myshwd.hide.stop(1000);
		}
		else{
			myshwd.show(1000);
		}
	});

	$('.disclamer1 b').click(function(){
		var myshwd = $(this).parent().parent().find('p');
		if (myshwd.is(':visible'))
		{
			myshwd.hide(1000);
		}
		else{
			myshwd.show(1000);
		}
	});
	

});

function mumbaidomestic()
{
document.write('<iframe src="https://www.mapsofindia.com/widgets/mumbai-domestic.html" width="160" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> </iframe>');
}

function commonwealthgames160()
{
document.write('<iframe src="https://www.mapsofindia.com/widgets/commonwealthgames160.html" width="160" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> </iframe>');
}


function internationalflights160()
{
document.write('<iframe src="https://www.mapsofindia.com/widgets/international-flights-160.html" width="160" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> </iframe>');
}
function randbannerstop1()
{
document.write('<iframe src="https://www.mapsofindia.com/widgets/randbannerstop1.html" width="160" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> </iframe>');
}

function delhiTCobe()
{
	document.write('<iframe src="https://www.mapsofindia.com/widgets/tribalfusionboxadd.html" width="300" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> </iframe>');

}



function helloformnarrow()
{
document.write('<table><tr><td><script>form_format="1";form_width="100%";form_lang="en";form_bgcolor="#B8D3E4";form_bordercolor="#95BFD9";form_fontcolor="#172A35";form_headbg="#FFFFFF";form_headtext="#172A35";form_typeid="1";form_afid="318";form_site="mapsofindia.com";form_title="Contact Our Tour Planner";</script><script type="text/javascript" SRC="http://www.hellotravel.com/serveform/serveform.js" ></script></td></tr></table>');
}




function flighttwoads()
{

document.write('<iframe src="https://www.mapsofindia.com/widgets/tribalfusionpopup.html" width="300" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> </iframe>');
}


function travelocity160x600_obe()
{
document.write('<iframe src="https://www.mapsofindia.com/flight-schedule/obe/travelocity160x600.html" width="160" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> </iframe>');
}

function travelocity728x90_obe()
{
document.write('<iframe src="https://www.mapsofindia.com/flight-schedule/obe/travelocity728x90.html" width="728" height="90" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> </iframe>');
}

function tribalfusionboxadd()
{

	document.write('<iframe src="https://www.mapsofindia.com/widgets/tribalfusionboxadd.html" width="300" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> </iframe>');


}

function internationalflights160x600()
{
document.write('<iframe src="https://www.mapsofindia.com/widgets/international-flights-160x600.html" width="160" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> </iframe>');
}

function politicalthumb()
	{document.write('<table align="center"cellspacing="0"cellpadding="0"border="0"width="614"><tr><td valign="top"width="150"><a href="https://www.mapsofindia.com/free-download/free-download-india-political-maps.html"><img src="thumb/india-political-out-line-map.jpg"width="150"height="180"alt="India Outline Map Small"title="India Outline Map Small"border="0"/></a></td><td valign="top"width="3"></td><td valign="top"width="150"><a href="https://www.mapsofindia.com/maps/india/physical-map.html"><img src="thumb/india-physical-map.jpg"width="150"height="180"alt="India Physical Map Small"title="India Physical Map Small"border="0"/></a></td><td valign="top"width="3"></td><td valign="top"width="150"><a href="https://www.mapsofindia.com/india-map-hindi.html"><img src="thumb/india-map-in-hindi.jpg"width="150"height="180"alt="India Map in Hindi Small"title="India Map in Hindi Small"border="0"/></a></td><td valign="top"width="3"></td><td valign="top"width="150"><a href="https://www.mapsofindia.com/india-map-tamil.html"><img src="thumb/india-map-in-tamil.jpg"width="150"height="180"alt="India Map in Tamil Small"title="India Map in Tamil Small"border="0"/></a></td></tr><tr><td colspan="7"height="4"></td></tr><tr><td valign="top"align="center"><a href="https://www.mapsofindia.com/free-download/free-download-india-political-maps.html"class="back">India Outline Map</a></td><td valign="top"width="3"></td><td valign="top"align="center"><a href="https://www.mapsofindia.com/maps/india/physical-map.html"class="back">India Physical Map</a></td><td valign="top"width="3"></td><td valign="top"align="center"><a href="https://www.mapsofindia.com/india-map-hindi.html"class="back">India Map in Hindi</a></td><td valign="top"width="3"></td><td valign="top"align="center"><a href="https://www.mapsofindia.com/india-map-tamil.html"class="back">India Map in Tamil</a></td></tr><tr><td colspan="7"height="12"></td></tr><tr><td valign="top"width="150"><a href="https://www.mapsofindia.com/india-map-telugu.html"><img src="thumb/india-map-in-telgu.jpg"width="150"height="180"alt="India Map in Telugu Small"title="India Map in Telugu Small"border="0"/></a></td><td valign="top"width="3"></td><td valign="top"width="150"><a href="https://www.mapsofindia.com/french-maps/india-political-map-in-french.html"><img src="thumb/india-map-in-french.jpg"width="150"height="180"alt="India Map in French Small"title="India Map in French Small"border="0"/></a></td><td valign="top"width="3"></td><td valign="top"width="150"><a href="https://www.mapsofindia.com/spanish-maps/india-political-map-in-spanish.html"><img src="thumb/india-map-in-spanish.jpg"width="150"height="180"alt="India Map in Spanish Small"title="India Map in Spanish Small"border="0"/></a></td><td valign="top"width="3"></td><td valign="top"width="150"><a href="https://www.mapsofindia.com/italian-maps/india-political-map-in-italian.html"><img src="thumb/indial-map-in-italian.jpg"width="150"height="180"alt="India Map in Italian Small"title="India Map in Italian Small"border="0"/></a></td></tr><tr><td colspan="7"height="4"></td></tr><tr><td valign="top"align="center"><a href="https://www.mapsofindia.com/india-map-telugu.html"class="back">India Map in Telugu</a></td><td valign="top"width="3"></td><td valign="top"align="center"><a href="https://www.mapsofindia.com/french-maps/india-political-map-in-french.html"class="back">India Map in French</a></td><td valign="top"width="3"></td><td valign="top"align="center"><a href="https://www.mapsofindia.com/spanish-maps/india-political-map-in-spanish.html"class="back">India Map in Spanish</a></td><td valign="top"width="3"></td><td valign="top"align="center"><a href="https://www.mapsofindia.com/italian-maps/india-political-map-in-italian.html"class="back">India Map in Italian</a></td></tr><tr><td colspan="7"height="12"></td></tr><tr><td valign="top"width="150"><a href="https://www.mapsofindia.com/india-map-marathi.html"><img src="thumb/india-map-in-marathi.jpg"width="150"height="180"alt="India Map in Marathi Small"title="India Map in Marathi Small"border="0"/></a></td><td valign="top"width="3"></td><td valign="top"width="150"><a href="https://www.mapsofindia.com/maps/india/seismiczone.htm"><img src="thumb/india-seismic-zone-map.jpg"width="150"height="180"alt="Seismic Zone Map of India Small"title="Seismic Zone Map of India Small"border="0"/></a></td><td valign="top"width="3"></td><td valign="top"width="150"><a href="https://www.mapsofindia.com/maps/india/outlinemapofindia.htm"><img src="thumb/india-out-line-map.jpg"width="150"height="180"alt="Blank Map of India Small"title="Blank Map of India Small"border="0"/></a></td><td valign="top"width="3"></td><td valign="top"width="150"><a href="https://www.mapsofindia.com/maps/india/india-railway-map.htm"><img src="thumb/railway-map-of-india.jpg"width="150"height="180"alt="Rail Network Map of India Small"title="Rail Network Map of India Small"border="0"/></a></td></tr><tr><td colspan="7"height="4"></td></tr><tr><td valign="top"align="center"><a href="https://www.mapsofindia.com/india-map-marathi.html"class="back">India Map in Marathi</a></td><td valign="top"width="3"></td><td valign="top"align="center"><a href="https://www.mapsofindia.com/maps/india/seismiczone.htm"class="back">Seismic Zone Map of India</a></td><td valign="top"width="3"></td><td valign="top"align="center"><a href="https://www.mapsofindia.com/maps/india/outlinemapofindia.htm"class="back">Blank Map of India</a></td><td valign="top"width="3"></td><td valign="top"align="center"><a href="https://www.mapsofindia.com/maps/india/india-railway-map.htm"class="back">Rail Network Map of India</a></td></tr><tr><td colspan="7"height="8"></td></tr><tr><td valign="top"width="150"><a href="https://www.mapsofindia.com/india-map-nepali.html"><img src="thumb/india-map-nepali.jpg"width="150"height="180"alt="India Map in Nepali Small"title="India Map in Nepali Small"border="0"/></a></td><td valign="top"width="3"></td><td valign="top"width="150"><a href="https://www.mapsofindia.com/chinese-maps/india-political-map-in-chinese.html"><img src="thumb/india-political-map-in-chinese.jpg"width="150"height="180"alt="India Map in Chinese Small"title="India Map in Chinese Small"border="0"/></a></td><td valign="top"width="3"></td><td valign="top"width="150"><a href="https://www.mapsofindia.com/india-political-map-sanskrit.html"><img src="thumb/india-political-map-in-sanskrit.jpg"width="150"height="180"alt="India Map in Sanskrit Small"title="India Map in Sanskrit Small"border="0"/></a></td><td valign="top"width="3"></td><td valign="top"width="150"><a href="https://www.mapsofindia.com/maps/india-large-map.html"><img src="thumb/large-india-map.jpg"width="150"height="180"alt="India large Map Small"title="India large Map Small"border="0"/></a></td></tr><tr><td colspan="7"height="4"></td></tr><tr><td valign="top"align="center"><a href="https://www.mapsofindia.com/india-map-nepali.html"class="back">India Map in Nepali</a></td><td valign="top"width="3"></td><td valign="top"align="center"><a href="https://www.mapsofindia.com/chinese-maps/india-political-map-in-chinese.html"class="back">India Map in Chinese</a></td><td valign="top"width="3"></td><td valign="top"align="center"><a href="https://www.mapsofindia.com/india-political-map-sanskrit.html"class="back">India Map in Sanskrit</a></td><td valign="top"width="3"></td><td valign="top"align="center"><a href="https://www.mapsofindia.com/maps/india-large-map.html"class="back">India large Map</a></td></tr><tr><td colspan="7"height="8"></td></tr></table>');}


var expDays = 1; 

function GetCookie (name) { 
  var arg = name + "="; 
  var alen = arg.length; 
  var clen = document.cookie.length; 
  var i = 0; 

  while (i < clen) { 
    var j = i + alen; 

   if (document.cookie.substring(i, j) == arg) 
       return getCookieVal (j); 

      i = document.cookie.indexOf(" ", i) + 1; 

 if (i == 0) break; 

} 

return null;

}

function SetCookie (name, value) { 
  var argv = SetCookie.arguments; 
  var argc = SetCookie.arguments.length; 
  var expires = (argc > 2) ? argv[2] : null; 
  var path = '/'; 
  var domain = (argc > 4) ? argv[4] : null; 
  var secure = (argc > 5) ? argv[5] : false; 
document.cookie = name + "=" + escape (value) + 
((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + 
((path == null) ? "" : ("; path=" + path)) + 
((domain == null) ? "" : ("; domain=" + domain)) + 
((secure == true) ? "; secure" : "");

}

function DeleteCookie (name) { 
  var exp = new Date(); 
  exp.setTime (exp.getTime() - 1); 
  var cval = GetCookie (name); 
  document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();

}

var exp = new Date(); 
exp.setTime(exp.getTime() + (expDays*24*60*60*1000));

function amt(){
  var count = GetCookie('count')
   
  if(count == null) {
    SetCookie('count','1')
    return 1
} else {
   var newcount = parseInt(count) + 1;
   DeleteCookie('count')
   SetCookie('count',newcount,exp)
return count

}

}

function getCookieVal(offset) {
   var endstr = document.cookie.indexOf (";", offset);
   if (endstr == -1)
     endstr = document.cookie.length;
     return unescape(document.cookie.substring(offset, endstr));
}



function checkCount() {
  var count = GetCookie('count');
  if (count == null) {
    count=1;
    SetCookie('count', count, exp);
    window.open(page, "", windowprops);
  } else {
    count++;
    SetCookie('count', count, exp);
  }

}

window.onload=checkCount

/*!
 * jQuery JavaScript Library v1.4
 */
(function( window, undefined ) {

// Define a local copy of jQuery
var jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context );
	},

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$,

	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	// A central reference to the root jQuery(document)
	rootjQuery,

	// A simple way to check for HTML strings or ID strings
	// (both of which we optimize for)
	quickExpr = /^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,

	// Is it a simple selector
	isSimple = /^.[^:#\[\.,]*$/,

	// Check if a string has a non-whitespace character in it
	rnotwhite = /\S/,

	// Used for trimming whitespace
	rtrim = /^(\s|\u00A0)+|(\s|\u00A0)+$/g,

	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,

	// Keep a UserAgent string for use with jQuery.browser
	userAgent = navigator.userAgent,

	// For matching the engine and version of the browser
	browserMatch,
	
	// Has the ready events already been bound?
	readyBound = false,
	
	// The functions to execute on DOM ready
	readyList = [],

	// The ready event handler
	DOMContentLoaded,

	// Save a reference to some core methods
	toString = Object.prototype.toString,
	hasOwnProperty = Object.prototype.hasOwnProperty,
	push = Array.prototype.push,
	slice = Array.prototype.slice,
	indexOf = Array.prototype.indexOf;

jQuery.fn = jQuery.prototype = {
	init: function( selector, context ) {
		var match, elem, ret, doc;

		// Handle $(""), $(null), or $(undefined)
		if ( !selector ) {
			return this;
		}

		// Handle $(DOMElement)
		if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			// Are we dealing with HTML string or an ID?
			match = quickExpr.exec( selector );

			// Verify a match, and that no context was specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					doc = (context ? context.ownerDocument || context : document);

					// If a single string is passed in and it's a single tag
					// just do a createElement and skip the rest
					ret = rsingleTag.exec( selector );

					if ( ret ) {
						if ( jQuery.isPlainObject( context ) ) {
							selector = [ document.createElement( ret[1] ) ];
							jQuery.fn.attr.call( selector, context, true );

						} else {
							selector = [ doc.createElement( ret[1] ) ];
						}

					} else {
						ret = buildFragment( [ match[1] ], [ doc ] );
						selector = (ret.cacheable ? ret.fragment.cloneNode(true) : ret.fragment).childNodes;
					}

				// HANDLE: $("#id")
				} else {
					elem = document.getElementById( match[2] );

					if ( elem ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $("TAG")
			} else if ( !context && /^\w+$/.test( selector ) ) {
				this.selector = selector;
				this.context = document;
				selector = document.getElementsByTagName( selector );

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return (context || rootjQuery).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return jQuery( context ).find( selector );
			}

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return rootjQuery.ready( selector );
		}

		if (selector.selector !== undefined) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.isArray( selector ) ?
			this.setArray( selector ) :
			jQuery.makeArray( selector, this );
	},

	// Start with an empty selector
	selector: "",

	// The current version of jQuery being used
	jquery: "1.4",

	// The default length of a jQuery object is 0
	length: 0,

	// The number of elements contained in the matched element set
	size: function() {
		return this.length;
	},

	toArray: function() {
		return slice.call( this, 0 );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num == null ?

			// Return a 'clean' array
			this.toArray() :

			// Return just the object
			( num < 0 ? this.slice(num)[ 0 ] : this[ num ] );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems, name, selector ) {
		// Build a new jQuery matched element set
		var ret = jQuery( elems || null );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		ret.context = this.context;

		if ( name === "find" ) {
			ret.selector = this.selector + (this.selector ? " " : "") + selector;
		} else if ( name ) {
			ret.selector = this.selector + "." + name + "(" + selector + ")";
		}

		// Return the newly-formed element set
		return ret;
	},

	setArray: function( elems ) {
		// Resetting the length to 0, then using the native Array push
		// is a super-fast way to populate an object with array-like properties
		this.length = 0;
		push.apply( this, elems );

		return this;
	},

	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},
	
	ready: function( fn ) {
		// Attach the listeners
		jQuery.bindReady();

		// If the DOM is already ready
		if ( jQuery.isReady ) {
			// Execute the function immediately
			fn.call( document, jQuery );

		// Otherwise, remember the function for later
		} else if ( readyList ) {
			// Add the function to the wait list
			readyList.push( fn );
		}

		return this;
	},
	
	eq: function( i ) {
		return i === -1 ?
			this.slice( i ) :
			this.slice( i, +i + 1 );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ),
			"slice", slice.call(arguments).join(",") );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},
	
	end: function() {
		return this.prevObject || jQuery(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: [].sort,
	splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
	// copy reference to target object
	var target = arguments[0] || {}, i = 1, length = arguments.length, deep = false, options, name, src, copy;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( length === i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging object literal values or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || jQuery.isArray(copy) ) ) {
					var clone = src && ( jQuery.isPlainObject(src) || jQuery.isArray(src) ) ? src
						: jQuery.isArray(copy) ? [] : {};

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	noConflict: function( deep ) {
		window.$ = _$;

		if ( deep ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	},
	
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,
	
	// Handle when the DOM is ready
	ready: function() {
		// Make sure that the DOM is not already loaded
		if ( !jQuery.isReady ) {
			// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
			if ( !document.body ) {
				return setTimeout( jQuery.ready, 13 );
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If there are functions bound, to execute
			if ( readyList ) {
				// Execute all of them
				var fn, i = 0;
				while ( (fn = readyList[ i++ ]) ) {
					fn.call( document, jQuery );
				}

				// Reset the list of functions
				readyList = null;
			}

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
			}
		}
	},
	
	bindReady: function() {
		if ( readyBound ) {
			return;
		}

		readyBound = true;

		// Catch cases where $(document).ready() is called after the
		// browser event has already occurred.
		if ( document.readyState === "complete" ) {
			return jQuery.ready();
		}

		// Mozilla, Opera and webkit nightlies currently support this event
		if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );
			
			// A fallback to window.onload, that will always work
			window.addEventListener( "load", jQuery.ready, false );

		// If IE event model is used
		} else if ( document.attachEvent ) {
			// ensure firing before onload,
			// maybe late but safe also for iframes
			document.attachEvent("onreadystatechange", DOMContentLoaded);
			
			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", jQuery.ready );

			// If IE and not a frame
			// continually check to see if the document is ready
			var toplevel = false;

			try {
				toplevel = window.frameElement == null;
			} catch(e) {}

			if ( document.documentElement.doScroll && toplevel ) {
				doScrollCheck();
			}
		}
	},


	isFunction: function( obj ) {
		return toString.call(obj) === "[object Function]";
	},

	isArray: function( obj ) {
		return toString.call(obj) === "[object Array]";
	},

	isPlainObject: function( obj ) {
		if ( !obj || toString.call(obj) !== "[object Object]" || obj.nodeType || obj.setInterval ) {
			return false;
		}
		
		// Not own constructor property must be Object
		if ( obj.constructor
			&& !hasOwnProperty.call(obj, "constructor")
			&& !hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf") ) {
			return false;
		}
		
		var key;
		for ( key in obj ) {}
		
		return key === undefined || hasOwnProperty.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		for ( var name in obj ) {
			return false;
		}
		return true;
	},

	noop: function() {},

	// Evalulates a script in a global context
	globalEval: function( data ) {
		if ( data && rnotwhite.test(data) ) {
			// Inspired by code by Andrea Giammarchi
			// http://webreflection.blogspot.com/2007/08/global-scope-evaluation-and-dom.html
			var head = document.getElementsByTagName("head")[0] || document.documentElement,
				script = document.createElement("script");

			script.type = "text/javascript";

			if ( jQuery.support.scriptEval ) {
				script.appendChild( document.createTextNode( data ) );
			} else {
				script.text = data;
			}

			// Use insertBefore instead of appendChild to circumvent an IE6 bug.
			// This arises when a base node is used (#2709).
			head.insertBefore( script, head.firstChild );
			head.removeChild( script );
		}
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toUpperCase() === name.toUpperCase();
	},

	// args is for internal usage only
	each: function( object, callback, args ) {
		var name, i = 0,
			length = object.length,
			isObj = length === undefined || jQuery.isFunction(object);

		if ( args ) {
			if ( isObj ) {
				for ( name in object ) {
					if ( callback.apply( object[ name ], args ) === false ) {
						break;
					}
				}
			} else {
				for ( ; i < length; ) {
					if ( callback.apply( object[ i++ ], args ) === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isObj ) {
				for ( name in object ) {
					if ( callback.call( object[ name ], name, object[ name ] ) === false ) {
						break;
					}
				}
			} else {
				for ( var value = object[0];
					i < length && callback.call( value, i, value ) !== false; value = object[++i] ) {}
			}
		}

		return object;
	},

	trim: function( text ) {
		return (text || "").replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( array, results ) {
		var ret = results || [];

		if ( array != null ) {
			if ( array.length == null || typeof array === "string" || jQuery.isFunction(array) || (typeof array !== "function" && array.setInterval) ) {
				push.call( ret, array );
			} else {
				jQuery.merge( ret, array );
			}
		}

		return ret;
	},

	inArray: function( elem, array ) {
		if ( array.indexOf ) {
			return array.indexOf( elem );
		}

		for ( var i = 0, length = array.length; i < length; i++ ) {
			if ( array[ i ] === elem ) {
				return i;
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var i = first.length, j = 0;

		if ( typeof second.length === "number" ) {
			for ( var l = second.length; j < l; j++ ) {
				first[ i++ ] = second[ j ];
			}
		} else {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, inv ) {
		var ret = [];

		// Go through the array, only saving the items
		// that pass the validator function
		for ( var i = 0, length = elems.length; i < length; i++ ) {
			if ( !inv !== !callback( elems[ i ], i ) ) {
				ret.push( elems[ i ] );
			}
		}

		return ret;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var ret = [], value;

		// Go through the array, translating each of the items to their
		// new value (or values).
		for ( var i = 0, length = elems.length; i < length; i++ ) {
			value = callback( elems[ i ], i, arg );

			if ( value != null ) {
				ret[ ret.length ] = value;
			}
		}

		return ret.concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	proxy: function( fn, proxy, thisObject ) {
		if ( arguments.length === 2 ) {
			if ( typeof proxy === "string" ) {
				thisObject = fn;
				fn = thisObject[ proxy ];
				proxy = undefined;

			} else if ( proxy && !jQuery.isFunction( proxy ) ) {
				thisObject = proxy;
				proxy = undefined;
			}
		}

		if ( !proxy && fn ) {
			proxy = function() {
				return fn.apply( thisObject || this, arguments );
			};
		}

		// Set the guid of unique handler to the same of original handler, so it can be removed
		if ( fn ) {
			proxy.guid = fn.guid = fn.guid || proxy.guid || jQuery.guid++;
		}

		// So proxy can be declared as an argument
		return proxy;
	},

	// Use of jQuery.browser is frowned upon.
	// More details: http://docs.jquery.com/Utilities/jQuery.browser
	uaMatch: function( ua ) {
		var ret = { browser: "" };

		ua = ua.toLowerCase();

		if ( /webkit/.test( ua ) ) {
			ret = { browser: "webkit", version: /webkit[\/ ]([\w.]+)/ };

		} else if ( /opera/.test( ua ) ) {
			ret = { browser: "opera", version:  /version/.test( ua ) ? /version[\/ ]([\w.]+)/ : /opera[\/ ]([\w.]+)/ };
			
		} else if ( /msie/.test( ua ) ) {
			ret = { browser: "msie", version: /msie ([\w.]+)/ };

		} else if ( /mozilla/.test( ua ) && !/compatible/.test( ua ) ) {
			ret = { browser: "mozilla", version: /rv:([\w.]+)/ };
		}

		ret.version = (ret.version && ret.version.exec( ua ) || [0, "0"])[1];

		return ret;
	},

	browser: {}
});

browserMatch = jQuery.uaMatch( userAgent );
if ( browserMatch.browser ) {
	jQuery.browser[ browserMatch.browser ] = true;
	jQuery.browser.version = browserMatch.version;
}

// Deprecated, use jQuery.browser.webkit instead
if ( jQuery.browser.webkit ) {
	jQuery.browser.safari = true;
}

if ( indexOf ) {
	jQuery.inArray = function( elem, array ) {
		return indexOf.call( array, elem );
	};
}

// All jQuery objects should point back to these
rootjQuery = jQuery(document);

// Cleanup functions for the document ready method
if ( document.addEventListener ) {
	DOMContentLoaded = function() {
		document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
		jQuery.ready();
	};

} else if ( document.attachEvent ) {
	DOMContentLoaded = function() {
		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( document.readyState === "complete" ) {
			document.detachEvent( "onreadystatechange", DOMContentLoaded );
			jQuery.ready();
		}
	};
}

// The DOM ready check for Internet Explorer
function doScrollCheck() {
	if ( jQuery.isReady ) {
		return;
	}

	try {
		// If IE is used, use the trick by Diego Perini
		// http://javascript.nwbox.com/IEContentLoaded/
		document.documentElement.doScroll("left");
	} catch( error ) {
		setTimeout( doScrollCheck, 1 );
		return;
	}

	// and execute any waiting functions
	jQuery.ready();
}

if ( indexOf ) {
	jQuery.inArray = function( elem, array ) {
		return indexOf.call( array, elem );
	};
}

function evalScript( i, elem ) {
	if ( elem.src ) {
		jQuery.ajax({
			url: elem.src,
			async: false,
			dataType: "script"
		});
	} else {
		jQuery.globalEval( elem.text || elem.textContent || elem.innerHTML || "" );
	}

	if ( elem.parentNode ) {
		elem.parentNode.removeChild( elem );
	}
}

// Mutifunctional method to get and set values to a collection
// The value/s can be optionally by executed if its a function
function access( elems, key, value, exec, fn, pass ) {
	var length = elems.length;
	
	// Setting many attributes
	if ( typeof key === "object" ) {
		for ( var k in key ) {
			access( elems, k, key[k], exec, fn, value );
		}
		return elems;
	}
	
	// Setting one attribute
	if ( value !== undefined ) {
		// Optionally, function values get executed if exec is true
		exec = !pass && exec && jQuery.isFunction(value);
		
		for ( var i = 0; i < length; i++ ) {
			fn( elems[i], key, exec ? value.call( elems[i], i, fn( elems[i], key ) ) : value, pass );
		}
		
		return elems;
	}
	
	// Getting an attribute
	return length ? fn( elems[0], key ) : null;
}

function now() {
	return (new Date).getTime();
}
(function() {

	jQuery.support = {};

	var root = document.documentElement,
		script = document.createElement("script"),
		div = document.createElement("div"),
		id = "script" + now();

	div.style.display = "none";
	div.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";

	var all = div.getElementsByTagName("*"),
		a = div.getElementsByTagName("a")[0];

	// Can't get basic test support
	if ( !all || !all.length || !a ) {
		return;
	}

	jQuery.support = {
		// IE strips leading whitespace when .innerHTML is used
		leadingWhitespace: div.firstChild.nodeType === 3,

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		tbody: !div.getElementsByTagName("tbody").length,

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		htmlSerialize: !!div.getElementsByTagName("link").length,

		// Get the style information from getAttribute
		// (IE uses .cssText insted)
		style: /red/.test( a.getAttribute("style") ),

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		hrefNormalized: a.getAttribute("href") === "/a",

		// Make sure that element opacity exists
		// (IE uses filter instead)
		// Use a regex to work around a WebKit issue. See #5145
		opacity: /^0.55$/.test( a.style.opacity ),

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		cssFloat: !!a.style.cssFloat,

		// Make sure that if no value is specified for a checkbox
		// that it defaults to "on".
		// (WebKit defaults to "" instead)
		checkOn: div.getElementsByTagName("input")[0].value === "on",

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		optSelected: document.createElement("select").appendChild( document.createElement("option") ).selected,

		// Will be defined later
		scriptEval: false,
		noCloneEvent: true,
		boxModel: null
	};

	script.type = "text/javascript";
	try {
		script.appendChild( document.createTextNode( "window." + id + "=1;" ) );
	} catch(e) {}

	root.insertBefore( script, root.firstChild );

	// Make sure that the execution of code works by injecting a script
	// tag with appendChild/createTextNode
	// (IE doesn't support this, fails, and uses .text instead)
	if ( window[ id ] ) {
		jQuery.support.scriptEval = true;
		delete window[ id ];
	}

	root.removeChild( script );

	if ( div.attachEvent && div.fireEvent ) {
		div.attachEvent("onclick", function click() {
			// Cloning a node shouldn't copy over any
			// bound event handlers (IE does this)
			jQuery.support.noCloneEvent = false;
			div.detachEvent("onclick", click);
		});
		div.cloneNode(true).fireEvent("onclick");
	}

	// Figure out if the W3C box model works as expected
	// document.body must exist before we can do this
	// TODO: This timeout is temporary until I move ready into core.js.
	jQuery(function() {
		var div = document.createElement("div");
		div.style.width = div.style.paddingLeft = "1px";

		document.body.appendChild( div );
		jQuery.boxModel = jQuery.support.boxModel = div.offsetWidth === 2;
		document.body.removeChild( div ).style.display = 'none';
		div = null;
	});

	// Technique from Juriy Zaytsev
	// http://thinkweb2.com/projects/prototype/detecting-event-support-without-browser-sniffing/
	var eventSupported = function( eventName ) { 
		var el = document.createElement("div"); 
		eventName = "on" + eventName; 

		var isSupported = (eventName in el); 
		if ( !isSupported ) { 
			el.setAttribute(eventName, "return;"); 
			isSupported = typeof el[eventName] === "function"; 
		} 
		el = null; 

		return isSupported; 
	};
	
	jQuery.support.submitBubbles = eventSupported("submit");
	jQuery.support.changeBubbles = eventSupported("change");

	// release memory in IE
	root = script = div = all = a = null;
})();

jQuery.props = {
	"for": "htmlFor",
	"class": "className",
	readonly: "readOnly",
	maxlength: "maxLength",
	cellspacing: "cellSpacing",
	rowspan: "rowSpan",
	colspan: "colSpan",
	tabindex: "tabIndex",
	usemap: "useMap",
	frameborder: "frameBorder"
};
var expando = "jQuery" + now(), uuid = 0, windowData = {};
var emptyObject = {};

jQuery.extend({
	cache: {},
	
	expando:expando,

	// The following elements throw uncatchable exceptions if you
	// attempt to add expando properties to them.
	noData: {
		"embed": true,
		"object": true,
		"applet": true
	},

	data: function( elem, name, data ) {
		if ( elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()] ) {
			return;
		}

		elem = elem == window ?
			windowData :
			elem;

		var id = elem[ expando ], cache = jQuery.cache, thisCache;

		// Handle the case where there's no name immediately
		if ( !name && !id ) {
			return null;
		}

		// Compute a unique ID for the element
		if ( !id ) { 
			id = ++uuid;
		}

		// Avoid generating a new cache unless none exists and we
		// want to manipulate it.
		if ( typeof name === "object" ) {
			elem[ expando ] = id;
			thisCache = cache[ id ] = jQuery.extend(true, {}, name);
		} else if ( cache[ id ] ) {
			thisCache = cache[ id ];
		} else if ( typeof data === "undefined" ) {
			thisCache = emptyObject;
		} else {
			thisCache = cache[ id ] = {};
		}

		// Prevent overriding the named cache with undefined values
		if ( data !== undefined ) {
			elem[ expando ] = id;
			thisCache[ name ] = data;
		}

		return typeof name === "string" ? thisCache[ name ] : thisCache;
	},

	removeData: function( elem, name ) {
		if ( elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()] ) {
			return;
		}

		elem = elem == window ?
			windowData :
			elem;

		var id = elem[ expando ], cache = jQuery.cache, thisCache = cache[ id ];

		// If we want to remove a specific section of the element's data
		if ( name ) {
			if ( thisCache ) {
				// Remove the section of cache data
				delete thisCache[ name ];

				// If we've removed all the data, remove the element's cache
				if ( jQuery.isEmptyObject(thisCache) ) {
					jQuery.removeData( elem );
				}
			}

		// Otherwise, we want to remove all of the element's data
		} else {
			// Clean up the element expando
			try {
				delete elem[ expando ];
			} catch( e ) {
				// IE has trouble directly removing the expando
				// but it's ok with using removeAttribute
				if ( elem.removeAttribute ) {
					elem.removeAttribute( expando );
				}
			}

			// Completely remove the data cache
			delete cache[ id ];
		}
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		if ( typeof key === "undefined" && this.length ) {
			return jQuery.data( this[0] );

		} else if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		var parts = key.split(".");
		parts[1] = parts[1] ? "." + parts[1] : "";

		if ( value === undefined ) {
			var data = this.triggerHandler("getData" + parts[1] + "!", [parts[0]]);

			if ( data === undefined && this.length ) {
				data = jQuery.data( this[0], key );
			}
			return data === undefined && parts[1] ?
				this.data( parts[0] ) :
				data;
		} else {
			return this.trigger("setData" + parts[1] + "!", [parts[0], value]).each(function() {
				jQuery.data( this, key, value );
			});
		}
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});
jQuery.extend({
	queue: function( elem, type, data ) {
		if ( !elem ) {
			return;
		}

		type = (type || "fx") + "queue";
		var q = jQuery.data( elem, type );

		// Speed up dequeue by getting out quickly if this is just a lookup
		if ( !data ) {
			return q || [];
		}

		if ( !q || jQuery.isArray(data) ) {
			q = jQuery.data( elem, type, jQuery.makeArray(data) );

		} else {
			q.push( data );
		}

		return q;
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ), fn = queue.shift();

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
		}

		if ( fn ) {
			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift("inprogress");
			}

			fn.call(elem, function() {
				jQuery.dequeue(elem, type);
			});
		}
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
		}

		if ( data === undefined ) {
			return jQuery.queue( this[0], type );
		}
		return this.each(function( i, elem ) {
			var queue = jQuery.queue( this, type, data );

			if ( type === "fx" && queue[0] !== "inprogress" ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},

	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	delay: function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
		type = type || "fx";

		return this.queue( type, function() {
			var elem = this;
			setTimeout(function() {
				jQuery.dequeue( elem, type );
			}, time );
		});
	},

	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	}
});
var rclass = /[\n\t]/g,
	rspace = /\s+/,
	rreturn = /\r/g,
	rspecialurl = /href|src|style/,
	rtype = /(button|input)/i,
	rfocusable = /(button|input|object|select|textarea)/i,
	rclickable = /^(a|area)$/i,
	rradiocheck = /radio|checkbox/;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, name, value, true, jQuery.attr );
	},

	removeAttr: function( name, fn ) {
		return this.each(function(){
			jQuery.attr( this, name, "" );
			if ( this.nodeType === 1 ) {
				this.removeAttribute( name );
			}
		});
	},

	addClass: function( value ) {
		if ( jQuery.isFunction(value) ) {
			return this.each(function(i) {
				var self = jQuery(this);
				self.addClass( value.call(this, i, self.attr("class")) );
			});
		}

		if ( value && typeof value === "string" ) {
			var classNames = (value || "").split( rspace );

			for ( var i = 0, l = this.length; i < l; i++ ) {
				var elem = this[i];

				if ( elem.nodeType === 1 ) {
					if ( !elem.className ) {
						elem.className = value;

					} else {
						var className = " " + elem.className + " ";
						for ( var c = 0, cl = classNames.length; c < cl; c++ ) {
							if ( className.indexOf( " " + classNames[c] + " " ) < 0 ) {
								elem.className += " " + classNames[c];
							}
						}
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		if ( jQuery.isFunction(value) ) {
			return this.each(function(i) {
				var self = jQuery(this);
				self.removeClass( value.call(this, i, self.attr("class")) );
			});
		}

		if ( (value && typeof value === "string") || value === undefined ) {
			var classNames = (value || "").split(rspace);

			for ( var i = 0, l = this.length; i < l; i++ ) {
				var elem = this[i];

				if ( elem.nodeType === 1 && elem.className ) {
					if ( value ) {
						var className = (" " + elem.className + " ").replace(rclass, " ");
						for ( var c = 0, cl = classNames.length; c < cl; c++ ) {
							className = className.replace(" " + classNames[c] + " ", " ");
						}
						elem.className = className.substring(1, className.length - 1);

					} else {
						elem.className = "";
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value, isBool = typeof stateVal === "boolean";

		if ( jQuery.isFunction( value ) ) {
			return this.each(function(i) {
				var self = jQuery(this);
				self.toggleClass( value.call(this, i, self.attr("class"), stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className, i = 0, self = jQuery(this),
					state = stateVal,
					classNames = value.split( rspace );

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space seperated list
					state = isBool ? state : !self.hasClass( className );
					self[ state ? "addClass" : "removeClass" ]( className );
				}

			} else if ( type === "undefined" || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery.data( this, "__className__", this.className );
				}

				// toggle whole className
				this.className = this.className || value === false ? "" : jQuery.data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ";
		for ( var i = 0, l = this.length; i < l; i++ ) {
			if ( (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	},

	val: function( value ) {
		if ( value === undefined ) {
			var elem = this[0];

			if ( elem ) {
				if ( jQuery.nodeName( elem, "option" ) ) {
					return (elem.attributes.value || {}).specified ? elem.value : elem.text;
				}

				// We need to handle select boxes special
				if ( jQuery.nodeName( elem, "select" ) ) {
					var index = elem.selectedIndex,
						values = [],
						options = elem.options,
						one = elem.type === "select-one";

					// Nothing was selected
					if ( index < 0 ) {
						return null;
					}

					// Loop through all the selected options
					for ( var i = one ? index : 0, max = one ? index + 1 : options.length; i < max; i++ ) {
						var option = options[ i ];

						if ( option.selected ) {
							// Get the specifc value for the option
							value = jQuery(option).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				}

				// Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
				if ( rradiocheck.test( elem.type ) && !jQuery.support.checkOn ) {
					return elem.getAttribute("value") === null ? "on" : elem.value;
				}
				

				// Everything else, we just grab the value
				return (elem.value || "").replace(rreturn, "");

			}

			return undefined;
		}

		var isFunction = jQuery.isFunction(value);

		return this.each(function(i) {
			var self = jQuery(this), val = value;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call(this, i, self.val());
			}

			// Typecast each time if the value is a Function and the appended
			// value is therefore different each time.
			if ( typeof val === "number" ) {
				val += "";
			}

			if ( jQuery.isArray(val) && rradiocheck.test( this.type ) ) {
				this.checked = jQuery.inArray( self.val(), val ) >= 0;

			} else if ( jQuery.nodeName( this, "select" ) ) {
				var values = jQuery.makeArray(val);

				jQuery( "option", this ).each(function() {
					this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;
				});

				if ( !values.length ) {
					this.selectedIndex = -1;
				}

			} else {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	attrFn: {
		val: true,
		css: true,
		html: true,
		text: true,
		data: true,
		width: true,
		height: true,
		offset: true
	},
		
	attr: function( elem, name, value, pass ) {
		// don't set attributes on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 ) {
			return undefined;
		}

		if ( pass && name in jQuery.attrFn ) {
			return jQuery(elem)[name](value);
		}

		var notxml = elem.nodeType !== 1 || !jQuery.isXMLDoc( elem ),
			// Whether we are setting (or getting)
			set = value !== undefined;

		// Try to normalize/fix the name
		name = notxml && jQuery.props[ name ] || name;

		// Only do all the following if this is a node (faster for style)
		if ( elem.nodeType === 1 ) {
			// These attributes require special treatment
			var special = rspecialurl.test( name );

			// Safari mis-reports the default selected property of an option
			// Accessing the parent's selectedIndex property fixes it
			if ( name === "selected" && !jQuery.support.optSelected ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;
	
					// Make sure that it also works with optgroups, see #5701
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}

			// If applicable, access the attribute via the DOM 0 way
			if ( name in elem && notxml && !special ) {
				if ( set ) {
					// We can't allow the type property to be changed (since it causes problems in IE)
					if ( name === "type" && rtype.test( elem.nodeName ) && elem.parentNode ) {
						throw "type property can't be changed";
					}

					elem[ name ] = value;
				}

				// browsers index elements by id/name on forms, give priority to attributes.
				if ( jQuery.nodeName( elem, "form" ) && elem.getAttributeNode(name) ) {
					return elem.getAttributeNode( name ).nodeValue;
				}

				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				if ( name === "tabIndex" ) {
					var attributeNode = elem.getAttributeNode( "tabIndex" );

					return attributeNode && attributeNode.specified ?
						attributeNode.value :
						rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							undefined;
				}

				return elem[ name ];
			}

			if ( !jQuery.support.style && notxml && name === "style" ) {
				if ( set ) {
					elem.style.cssText = "" + value;
				}

				return elem.style.cssText;
			}

			if ( set ) {
				// convert the value to a string (all browsers do this but IE) see #1070
				elem.setAttribute( name, "" + value );
			}

			var attr = !jQuery.support.hrefNormalized && notxml && special ?
					// Some attributes require a special call on IE
					elem.getAttribute( name, 2 ) :
					elem.getAttribute( name );

			// Non-existent attributes return null, we normalize to undefined
			return attr === null ? undefined : attr;
		}

		// elem is actually elem.style ... set the style
		// Using attr for specific style information is now deprecated. Use style insead.
		return jQuery.style( elem, name, value );
	}
});
var fcleanup = function( nm ) {
	return nm.replace(/[^\w\s\.\|`]/g, function( ch ) {
		return "\\" + ch;
	});
};

/*
 * A number of helper functions used for managing events.
 * Many of the ideas behind this code originated from
 * Dean Edwards' addEvent library.
 */
jQuery.event = {

	// Bind an event to an element
	// Original by Dean Edwards
	add: function( elem, types, handler, data ) {
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// For whatever reason, IE has trouble passing the window object
		// around, causing it to be cloned in the process
		if ( elem.setInterval && ( elem !== window && !elem.frameElement ) ) {
			elem = window;
		}

		// Make sure that the function being executed has a unique ID
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// if data is passed, bind to handler
		if ( data !== undefined ) {
			// Create temporary function pointer to original handler
			var fn = handler;

			// Create unique handler function, wrapped around original handler
			handler = jQuery.proxy( fn );

			// Store data in unique handler
			handler.data = data;
		}

		// Init the element's event structure
		var events = jQuery.data( elem, "events" ) || jQuery.data( elem, "events", {} ),
			handle = jQuery.data( elem, "handle" ), eventHandle;

		if ( !handle ) {
			eventHandle = function() {
				// Handle the second event of a trigger and when
				// an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && !jQuery.event.triggered ?
					jQuery.event.handle.apply( eventHandle.elem, arguments ) :
					undefined;
			};

			handle = jQuery.data( elem, "handle", eventHandle );
		}

		// If no handle is found then we must be trying to bind to one of the
		// banned noData elements
		if ( !handle ) {
			return;
		}

		// Add elem as a property of the handle function
		// This is to prevent a memory leak with non-native
		// event in IE.
		handle.elem = elem;

		// Handle multiple events separated by a space
		// jQuery(...).bind("mouseover mouseout", fn);
		types = types.split( /\s+/ );
		var type, i=0;
		while ( (type = types[ i++ ]) ) {
			// Namespaced event handlers
			var namespaces = type.split(".");
			type = namespaces.shift();
			handler.type = namespaces.slice(0).sort().join(".");

			// Get the current list of functions bound to this event
			var handlers = events[ type ],
				special = this.special[ type ] || {};

			

			// Init the event handler queue
			if ( !handlers ) {
				handlers = events[ type ] = {};

				// Check for a special event handler
				// Only use addEventListener/attachEvent if the special
				// events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, handler) === false ) {
					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, handle, false );
					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, handle );
					}
				}
			}
			
			if ( special.add ) { 
				var modifiedHandler = special.add.call( elem, handler, data, namespaces, handlers ); 
				if ( modifiedHandler && jQuery.isFunction( modifiedHandler ) ) { 
					modifiedHandler.guid = modifiedHandler.guid || handler.guid; 
					handler = modifiedHandler; 
				} 
			} 
			
			// Add the function to the element's handler list
			handlers[ handler.guid ] = handler;

			// Keep track of which events have been used, for global triggering
			this.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	global: {},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler ) {
		// don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		var events = jQuery.data( elem, "events" ), ret, type, fn;

		if ( events ) {
			// Unbind all events for the element
			if ( types === undefined || (typeof types === "string" && types.charAt(0) === ".") ) {
				for ( type in events ) {
					this.remove( elem, type + (types || "") );
				}
			} else {
				// types is actually an event object here
				if ( types.type ) {
					handler = types.handler;
					types = types.type;
				}

				// Handle multiple events separated by a space
				// jQuery(...).unbind("mouseover mouseout", fn);
				types = types.split(/\s+/);
				var i = 0;
				while ( (type = types[ i++ ]) ) {
					// Namespaced event handlers
					var namespaces = type.split(".");
					type = namespaces.shift();
					var all = !namespaces.length,
						cleaned = jQuery.map( namespaces.slice(0).sort(), fcleanup ),
						namespace = new RegExp("(^|\\.)" + cleaned.join("\\.(?:.*\\.)?") + "(\\.|$)"),
						special = this.special[ type ] || {};

					if ( events[ type ] ) {
						// remove the given handler for the given type
						if ( handler ) {
							fn = events[ type ][ handler.guid ];
							delete events[ type ][ handler.guid ];

						// remove all handlers for the given type
						} else {
							for ( var handle in events[ type ] ) {
								// Handle the removal of namespaced events
								if ( all || namespace.test( events[ type ][ handle ].type ) ) {
									delete events[ type ][ handle ];
								}
							}
						}

						if ( special.remove ) {
							special.remove.call( elem, namespaces, fn);
						}

						// remove generic event handler if no more handlers exist
						for ( ret in events[ type ] ) {
							break;
						}
						if ( !ret ) {
							if ( !special.teardown || special.teardown.call( elem, namespaces ) === false ) {
								if ( elem.removeEventListener ) {
									elem.removeEventListener( type, jQuery.data( elem, "handle" ), false );
								} else if ( elem.detachEvent ) {
									elem.detachEvent( "on" + type, jQuery.data( elem, "handle" ) );
								}
							}
							ret = null;
							delete events[ type ];
						}
					}
				}
			}

			// Remove the expando if it's no longer used
			for ( ret in events ) {
				break;
			}
			if ( !ret ) {
				var handle = jQuery.data( elem, "handle" );
				if ( handle ) {
					handle.elem = null;
				}
				jQuery.removeData( elem, "events" );
				jQuery.removeData( elem, "handle" );
			}
		}
	},

	// bubbling is internal
	trigger: function( event, data, elem /*, bubbling */ ) {
		// Event object or event type
		var type = event.type || event,
			bubbling = arguments[3];

		if ( !bubbling ) {
			event = typeof event === "object" ?
				// jQuery.Event object
				event[expando] ? event :
				// Object literal
				jQuery.extend( jQuery.Event(type), event ) :
				// Just the event type (string)
				jQuery.Event(type);

			if ( type.indexOf("!") >= 0 ) {
				event.type = type = type.slice(0, -1);
				event.exclusive = true;
			}

			// Handle a global trigger
			if ( !elem ) {
				// Don't bubble custom events when global (to avoid too much overhead)
				event.stopPropagation();

				// Only trigger if we've ever bound an event for it
				if ( this.global[ type ] ) {
					jQuery.each( jQuery.cache, function() {
						if ( this.events && this.events[type] ) {
							jQuery.event.trigger( event, data, this.handle.elem );
						}
					});
				}
			}

			// Handle triggering a single element

			// don't do events on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 ) {
				return undefined;
			}

			// Clean up in case it is reused
			event.result = undefined;
			event.target = elem;

			// Clone the incoming data, if any
			data = jQuery.makeArray( data );
			data.unshift( event );
		}

		event.currentTarget = elem;

		// Trigger the event, it is assumed that "handle" is a function
		var handle = jQuery.data( elem, "handle" );
		if ( handle ) {
			handle.apply( elem, data );
		}

		var nativeFn, nativeHandler;
		try {
			if ( !(elem && elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()]) ) {
				nativeFn = elem[ type ];
				nativeHandler = elem[ "on" + type ];
			}
		// prevent IE from throwing an error for some elements with some event types, see #3533
		} catch (e) {}

		var isClick = jQuery.nodeName(elem, "a") && type === "click";

		// Trigger the native events (except for clicks on links)
		if ( !bubbling && nativeFn && !event.isDefaultPrevented() && !isClick ) {
			this.triggered = true;
			try {
				elem[ type ]();
			// prevent IE from throwing an error for some hidden elements
			} catch (e) {}

		// Handle triggering native .onfoo handlers
		} else if ( nativeHandler && elem[ "on" + type ].apply( elem, data ) === false ) {
			event.result = false;
		}

		this.triggered = false;

		if ( !event.isPropagationStopped() ) {
			var parent = elem.parentNode || elem.ownerDocument;
			if ( parent ) {
				jQuery.event.trigger( event, data, parent, true );
			}
		}
	},

	handle: function( event ) {
		// returned undefined or false
		var all, handlers;

		event = arguments[0] = jQuery.event.fix( event || window.event );
		event.currentTarget = this;

		// Namespaced event handlers
		var namespaces = event.type.split(".");
		event.type = namespaces.shift();

		// Cache this now, all = true means, any handler
		all = !namespaces.length && !event.exclusive;

		var namespace = new RegExp("(^|\\.)" + namespaces.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)");

		handlers = ( jQuery.data(this, "events") || {} )[ event.type ];

		for ( var j in handlers ) {
			var handler = handlers[ j ];

			// Filter the functions by class
			if ( all || namespace.test(handler.type) ) {
				// Pass in a reference to the handler function itself
				// So that we can later remove it
				event.handler = handler;
				event.data = handler.data;

				var ret = handler.apply( this, arguments );

				if ( ret !== undefined ) {
					event.result = ret;
					if ( ret === false ) {
						event.preventDefault();
						event.stopPropagation();
					}
				}

				if ( event.isImmediatePropagationStopped() ) {
					break;
				}

			}
		}

		return event.result;
	},

	props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),

	fix: function( event ) {
		if ( event[ expando ] ) {
			return event;
		}

		// store a copy of the original event object
		// and "clone" to set read-only properties
		var originalEvent = event;
		event = jQuery.Event( originalEvent );

		for ( var i = this.props.length, prop; i; ) {
			prop = this.props[ --i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Fix target property, if necessary
		if ( !event.target ) {
			event.target = event.srcElement || document; // Fixes #1925 where srcElement might not be defined either
		}

		// check if target is a textnode (safari)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Add relatedTarget, if necessary
		if ( !event.relatedTarget && event.fromElement ) {
			event.relatedTarget = event.fromElement === event.target ? event.toElement : event.fromElement;
		}

		// Calculate pageX/Y if missing and clientX/Y available
		if ( event.pageX == null && event.clientX != null ) {
			var doc = document.documentElement, body = document.body;
			event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
			event.pageY = event.clientY + (doc && doc.scrollTop  || body && body.scrollTop  || 0) - (doc && doc.clientTop  || body && body.clientTop  || 0);
		}

		// Add which for key events
		if ( !event.which && ((event.charCode || event.charCode === 0) ? event.charCode : event.keyCode) ) {
			event.which = event.charCode || event.keyCode;
		}

		// Add metaKey to non-Mac browsers (use ctrl for PC's and Meta for Macs)
		if ( !event.metaKey && event.ctrlKey ) {
			event.metaKey = event.ctrlKey;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		// Note: button is not normalized, so don't use it
		if ( !event.which && event.button !== undefined ) {
			event.which = (event.button & 1 ? 1 : ( event.button & 2 ? 3 : ( event.button & 4 ? 2 : 0 ) ));
		}

		return event;
	},

	// Deprecated, use jQuery.guid instead
	guid: 1E8,

	// Deprecated, use jQuery.proxy instead
	proxy: jQuery.proxy,

	special: {
		ready: {
			// Make sure the ready event is setup
			setup: jQuery.bindReady,
			teardown: jQuery.noop
		},

		live: {
			add: function( proxy, data, namespaces, live ) {
				jQuery.extend( proxy, data || {} );

				proxy.guid += data.selector + data.live; 
				jQuery.event.add( this, data.live, liveHandler, data ); 
				
			},

			remove: function( namespaces ) {
				if ( namespaces.length ) {
					var remove = 0, name = new RegExp("(^|\\.)" + namespaces[0] + "(\\.|$)");

					jQuery.each( (jQuery.data(this, "events").live || {}), function() {
						if ( name.test(this.type) ) {
							remove++;
						}
					});

					if ( remove < 1 ) {
						jQuery.event.remove( this, namespaces[0], liveHandler );
					}
				}
			},
			special: {}
		},
		beforeunload: {
			setup: function( data, namespaces, fn ) {
				// We only want to do this special case on windows
				if ( this.setInterval ) {
					this.onbeforeunload = fn;
				}

				return false;
			},
			teardown: function( namespaces, fn ) {
				if ( this.onbeforeunload === fn ) {
					this.onbeforeunload = null;
				}
			}
		}
	}
};

jQuery.Event = function( src ) {
	// Allow instantiation without the 'new' keyword
	if ( !this.preventDefault ) {
		return new jQuery.Event( src );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;
	// Event type
	} else {
		this.type = src;
	}

	// timeStamp is buggy for some events on Firefox(#3843)
	// So we won't rely on the native value
	this.timeStamp = now();

	// Mark it as fixed
	this[ expando ] = true;
};

function returnFalse() {
	return false;
}
function returnTrue() {
	return true;
}

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	preventDefault: function() {
		this.isDefaultPrevented = returnTrue;

		var e = this.originalEvent;
		if ( !e ) {
			return;
		}
		
		// if preventDefault exists run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();
		}
		// otherwise set the returnValue property of the original event to false (IE)
		e.returnValue = false;
	},
	stopPropagation: function() {
		this.isPropagationStopped = returnTrue;

		var e = this.originalEvent;
		if ( !e ) {
			return;
		}
		// if stopPropagation exists run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}
		// otherwise set the cancelBubble property of the original event to true (IE)
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	},
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse
};

// Checks if an event happened on an element within another element
// Used in jQuery.event.special.mouseenter and mouseleave handlers
var withinElement = function( event ) {
	// Check if mouse(over|out) are still within the same parent element
	var parent = event.relatedTarget;

	// Traverse up the tree
	while ( parent && parent !== this ) {
		// Firefox sometimes assigns relatedTarget a XUL element
		// which we cannot access the parentNode property of
		try {
			parent = parent.parentNode;

		// assuming we've left the element since we most likely mousedover a xul element
		} catch(e) {
			break;
		}
	}

	if ( parent !== this ) {
		// set the correct event type
		event.type = event.data;

		// handle event if we actually just moused on to a non sub-element
		jQuery.event.handle.apply( this, arguments );
	}

},

// In case of event delegation, we only need to rename the event.type,
// liveHandler will take care of the rest.
delegate = function( event ) {
	event.type = event.data;
	jQuery.event.handle.apply( this, arguments );
};

// Create mouseenter and mouseleave events
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		setup: function( data ) {
			jQuery.event.add( this, fix, data && data.selector ? delegate : withinElement, orig );
		},
		teardown: function( data ) {
			jQuery.event.remove( this, fix, data && data.selector ? delegate : withinElement );
		}
	};
});

// submit delegation
if ( !jQuery.support.submitBubbles ) {

jQuery.event.special.submit = {
	setup: function( data, namespaces, fn ) {
		if ( this.nodeName.toLowerCase() !== "form" ) {
			jQuery.event.add(this, "click.specialSubmit." + fn.guid, function( e ) {
				var elem = e.target, type = elem.type;

				if ( (type === "submit" || type === "image") && jQuery( elem ).closest("form").length ) {
					return trigger( "submit", this, arguments );
				}
			});
	 
			jQuery.event.add(this, "keypress.specialSubmit." + fn.guid, function( e ) {
				var elem = e.target, type = elem.type;

				if ( (type === "text" || type === "password") && jQuery( elem ).closest("form").length && e.keyCode === 13 ) {
					return trigger( "submit", this, arguments );
				}
			});

		} else {
			return false;
		}
	},

	remove: function( namespaces, fn ) {
		jQuery.event.remove( this, "click.specialSubmit" + (fn ? "."+fn.guid : "") );
		jQuery.event.remove( this, "keypress.specialSubmit" + (fn ? "."+fn.guid : "") );
	}
};

}

// change delegation, happens here so we have bind.
if ( !jQuery.support.changeBubbles ) {

var formElems = /textarea|input|select/i;

function getVal( elem ) {
	var type = elem.type, val = elem.value;

	if ( type === "radio" || type === "checkbox" ) {
		val = elem.checked;

	} else if ( type === "select-multiple" ) {
		val = elem.selectedIndex > -1 ?
			jQuery.map( elem.options, function( elem ) {
				return elem.selected;
			}).join("-") :
			"";

	} else if ( elem.nodeName.toLowerCase() === "select" ) {
		val = elem.selectedIndex;
	}

	return val;
}

function testChange( e ) {
		var elem = e.target, data, val;

		if ( !formElems.test( elem.nodeName ) || elem.readOnly ) {
			return;
		}

		data = jQuery.data( elem, "_change_data" );
		val = getVal(elem);

		if ( val === data ) {
			return;
		}

		// the current data will be also retrieved by beforeactivate
		if ( e.type !== "focusout" || elem.type !== "radio" ) {
			jQuery.data( elem, "_change_data", val );
		}

		if ( elem.type !== "select" && (data != null || val) ) {
			e.type = "change";
			return jQuery.event.trigger( e, arguments[1], this );
		}
}

jQuery.event.special.change = {
	filters: {
		focusout: testChange, 

		click: function( e ) {
			var elem = e.target, type = elem.type;

			if ( type === "radio" || type === "checkbox" || elem.nodeName.toLowerCase() === "select" ) {
				return testChange.call( this, e );
			}
		},

		// Change has to be called before submit
		// Keydown will be called before keypress, which is used in submit-event delegation
		keydown: function( e ) {
			var elem = e.target, type = elem.type;

			if ( (e.keyCode === 13 && elem.nodeName.toLowerCase() !== "textarea") ||
				(e.keyCode === 32 && (type === "checkbox" || type === "radio")) ||
				type === "select-multiple" ) {
				return testChange.call( this, e );
			}
		},

		// Beforeactivate happens also before the previous element is blurred
		// with this event you can't trigger a change event, but you can store
		// information/focus[in] is not needed anymore
		beforeactivate: function( e ) {
			var elem = e.target;

			if ( elem.nodeName.toLowerCase() === "input" && elem.type === "radio" ) {
				jQuery.data( elem, "_change_data", getVal(elem) );
			}
		}
	},
	setup: function( data, namespaces, fn ) {
		for ( var type in changeFilters ) {
			jQuery.event.add( this, type + ".specialChange." + fn.guid, changeFilters[type] );
		}

		return formElems.test( this.nodeName );
	},
	remove: function( namespaces, fn ) {
		for ( var type in changeFilters ) {
			jQuery.event.remove( this, type + ".specialChange" + (fn ? "."+fn.guid : ""), changeFilters[type] );
		}

		return formElems.test( this.nodeName );
	}
};

var changeFilters = jQuery.event.special.change.filters;

}

function trigger( type, elem, args ) {
	args[0].type = type;
	return jQuery.event.handle.apply( elem, args );
}

// Create "bubbling" focus and blur events
if ( document.addEventListener ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {
		jQuery.event.special[ fix ] = {
			setup: function() {
				this.addEventListener( orig, handler, true );
			}, 
			teardown: function() { 
				this.removeEventListener( orig, handler, true );
			}
		};

		function handler( e ) { 
			e = jQuery.event.fix( e );
			e.type = fix;
			return jQuery.event.handle.call( this, e );
		}
	});
}

jQuery.each(["bind", "one"], function( i, name ) {
	jQuery.fn[ name ] = function( type, data, fn ) {
		// Handle object literals
		if ( typeof type === "object" ) {
			for ( var key in type ) {
				this[ name ](key, data, type[key], fn);
			}
			return this;
		}
		
		if ( jQuery.isFunction( data ) ) {
			thisObject = fn;
			fn = data;
			data = undefined;
		}

		var handler = name === "one" ? jQuery.proxy( fn, function( event ) {
			jQuery( this ).unbind( event, handler );
			return fn.apply( this, arguments );
		}) : fn;

		return type === "unload" && name !== "one" ?
			this.one( type, data, fn, thisObject ) :
			this.each(function() {
				jQuery.event.add( this, type, handler, data );
			});
	};
});

jQuery.fn.extend({
	unbind: function( type, fn ) {
		// Handle object literals
		if ( typeof type === "object" && !type.preventDefault ) {
			for ( var key in type ) {
				this.unbind(key, type[key]);
			}
			return this;
		}

		return this.each(function() {
			jQuery.event.remove( this, type, fn );
		});
	},
	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},

	triggerHandler: function( type, data ) {
		if ( this[0] ) {
			var event = jQuery.Event( type );
			event.preventDefault();
			event.stopPropagation();
			jQuery.event.trigger( event, data, this[0] );
			return event.result;
		}
	},

	toggle: function( fn ) {
		// Save reference to arguments for access in closure
		var args = arguments, i = 1;

		// link all the functions, so any of them can unbind this click handler
		while ( i < args.length ) {
			jQuery.proxy( fn, args[ i++ ] );
		}

		return this.click( jQuery.proxy( fn, function( event ) {
			// Figure out which function to execute
			var lastToggle = ( jQuery.data( this, "lastToggle" + fn.guid ) || 0 ) % i;
			jQuery.data( this, "lastToggle" + fn.guid, lastToggle + 1 );

			// Make sure that clicks stop
			event.preventDefault();

			// and execute the function
			return args[ lastToggle ].apply( this, arguments ) || false;
		}));
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	live: function( type, data, fn ) {
		if ( jQuery.isFunction( data ) ) {
			fn = data;
			data = undefined;
		}

		jQuery( this.context ).bind( liveConvert( type, this.selector ), {
			data: data, selector: this.selector, live: type
		}, fn );

		return this;
	},

	die: function( type, fn ) {
		jQuery( this.context ).unbind( liveConvert( type, this.selector ), fn ? { guid: fn.guid + this.selector + type } : null );
		return this;
	}
});

function liveHandler( event ) {
	var stop = true, elems = [], selectors = [], args = arguments,
		related, match, fn, elem, j, i, data,
		live = jQuery.extend({}, jQuery.data( this, "events" ).live);

	for ( j in live ) {
		fn = live[j];
		if ( fn.live === event.type ||
				fn.altLive && jQuery.inArray(event.type, fn.altLive) > -1 ) {

			data = fn.data;
			if ( !(data.beforeFilter && data.beforeFilter[event.type] && 
					!data.beforeFilter[event.type](event)) ) {
				selectors.push( fn.selector );
			}
		} else {
			delete live[j];
		}
	}

	match = jQuery( event.target ).closest( selectors, event.currentTarget );

	for ( i = 0, l = match.length; i < l; i++ ) {
		for ( j in live ) {
			fn = live[j];
			elem = match[i].elem;
			related = null;

			if ( match[i].selector === fn.selector ) {
				// Those two events require additional checking
				if ( fn.live === "mouseenter" || fn.live === "mouseleave" ) {
					related = jQuery( event.relatedTarget ).closest( fn.selector )[0];
				}

				if ( !related || related !== elem ) {
					elems.push({ elem: elem, fn: fn });
				}
			}
		}
	}

	for ( i = 0, l = elems.length; i < l; i++ ) {
		match = elems[i];
		event.currentTarget = match.elem;
		event.data = match.fn.data;
		if ( match.fn.apply( match.elem, args ) === false ) {
			stop = false;
			break;
		}
	}

	return stop;
}

function liveConvert( type, selector ) {
	return ["live", type, selector.replace(/\./g, "`").replace(/ /g, "&")].join(".");
}

jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( fn ) {
		return fn ? this.bind( name, fn ) : this.trigger( name );
	};

	if ( jQuery.attrFn ) {
		jQuery.attrFn[ name ] = true;
	}
});

// Prevent memory leaks in IE
// Window isn't included so as not to unbind existing unload events
// More info:
//  - http://isaacschlueter.com/2006/10/msie-memory-leaks/
if ( window.attachEvent && !window.addEventListener ) {
	window.attachEvent("onunload", function() {
		for ( var id in jQuery.cache ) {
			if ( jQuery.cache[ id ].handle ) {
				// Try/Catch is to handle iframes being unloaded, see #4280
				try {
					jQuery.event.remove( jQuery.cache[ id ].handle.elem );
				} catch(e) {}
			}
		}
	});
}
/*!
 * Sizzle CSS Selector Engine - v1.0
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){

var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
	done = 0,
	toString = Object.prototype.toString,
	hasDuplicate = false,
	baseHasDuplicate = true;

//   Thus far that includes Google Chrome.
[0, 0].sort(function(){
	baseHasDuplicate = false;
	return 0;
});

var Sizzle = function(selector, context, results, seed) {
	results = results || [];
	var origContext = context = context || document;

	if ( context.nodeType !== 1 && context.nodeType !== 9 ) {
		return [];
	}
	
	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	var parts = [], m, set, checkSet, extra, prune = true, contextXML = isXML(context),
		soFar = selector;
	
	// Reset the position of the chunker regexp (start from head)
	while ( (chunker.exec(""), m = chunker.exec(soFar)) !== null ) {
		soFar = m[3];
		
		parts.push( m[1] );
		
		if ( m[2] ) {
			extra = m[3];
			break;
		}
	}

	if ( parts.length > 1 && origPOS.exec( selector ) ) {
		if ( parts.length === 2 && Expr.relative[ parts[0] ] ) {
			set = posProcess( parts[0] + parts[1], context );
		} else {
			set = Expr.relative[ parts[0] ] ?
				[ context ] :
				Sizzle( parts.shift(), context );

			while ( parts.length ) {
				selector = parts.shift();

				if ( Expr.relative[ selector ] ) {
					selector += parts.shift();
				}
				
				set = posProcess( selector, set );
			}
		}
	} else {
		// Take a shortcut and set the context if the root selector is an ID
		// (but not if it'll be faster if the inner selector is an ID)
		if ( !seed && parts.length > 1 && context.nodeType === 9 && !contextXML &&
				Expr.match.ID.test(parts[0]) && !Expr.match.ID.test(parts[parts.length - 1]) ) {
			var ret = Sizzle.find( parts.shift(), context, contextXML );
			context = ret.expr ? Sizzle.filter( ret.expr, ret.set )[0] : ret.set[0];
		}

		if ( context ) {
			var ret = seed ?
				{ expr: parts.pop(), set: makeArray(seed) } :
				Sizzle.find( parts.pop(), parts.length === 1 && (parts[0] === "~" || parts[0] === "+") && context.parentNode ? context.parentNode : context, contextXML );
			set = ret.expr ? Sizzle.filter( ret.expr, ret.set ) : ret.set;

			if ( parts.length > 0 ) {
				checkSet = makeArray(set);
			} else {
				prune = false;
			}

			while ( parts.length ) {
				var cur = parts.pop(), pop = cur;

				if ( !Expr.relative[ cur ] ) {
					cur = "";
				} else {
					pop = parts.pop();
				}

				if ( pop == null ) {
					pop = context;
				}

				Expr.relative[ cur ]( checkSet, pop, contextXML );
			}
		} else {
			checkSet = parts = [];
		}
	}

	if ( !checkSet ) {
		checkSet = set;
	}

	if ( !checkSet ) {
		throw "Syntax error, unrecognized expression: " + (cur || selector);
	}

	if ( toString.call(checkSet) === "[object Array]" ) {
		if ( !prune ) {
			results.push.apply( results, checkSet );
		} else if ( context && context.nodeType === 1 ) {
			for ( var i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && contains(context, checkSet[i])) ) {
					results.push( set[i] );
				}
			}
		} else {
			for ( var i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && checkSet[i].nodeType === 1 ) {
					results.push( set[i] );
				}
			}
		}
	} else {
		makeArray( checkSet, results );
	}

	if ( extra ) {
		Sizzle( extra, origContext, results, seed );
		Sizzle.uniqueSort( results );
	}

	return results;
};

Sizzle.uniqueSort = function(results){
	if ( sortOrder ) {
		hasDuplicate = baseHasDuplicate;
		results.sort(sortOrder);

		if ( hasDuplicate ) {
			for ( var i = 1; i < results.length; i++ ) {
				if ( results[i] === results[i-1] ) {
					results.splice(i--, 1);
				}
			}
		}
	}

	return results;
};

Sizzle.matches = function(expr, set){
	return Sizzle(expr, null, null, set);
};

Sizzle.find = function(expr, context, isXML){
	var set, match;

	if ( !expr ) {
		return [];
	}

	for ( var i = 0, l = Expr.order.length; i < l; i++ ) {
		var type = Expr.order[i], match;
		
		if ( (match = Expr.leftMatch[ type ].exec( expr )) ) {
			var left = match[1];
			match.splice(1,1);

			if ( left.substr( left.length - 1 ) !== "\\" ) {
				match[1] = (match[1] || "").replace(/\\/g, "");
				set = Expr.find[ type ]( match, context, isXML );
				if ( set != null ) {
					expr = expr.replace( Expr.match[ type ], "" );
					break;
				}
			}
		}
	}

	if ( !set ) {
		set = context.getElementsByTagName("*");
	}

	return {set: set, expr: expr};
};

Sizzle.filter = function(expr, set, inplace, not){
	var old = expr, result = [], curLoop = set, match, anyFound,
		isXMLFilter = set && set[0] && isXML(set[0]);

	while ( expr && set.length ) {
		for ( var type in Expr.filter ) {
			if ( (match = Expr.leftMatch[ type ].exec( expr )) != null && match[2] ) {
				var filter = Expr.filter[ type ], found, item, left = match[1];
				anyFound = false;

				match.splice(1,1);

				if ( left.substr( left.length - 1 ) === "\\" ) {
					continue;
				}

				if ( curLoop === result ) {
					result = [];
				}

				if ( Expr.preFilter[ type ] ) {
					match = Expr.preFilter[ type ]( match, curLoop, inplace, result, not, isXMLFilter );

					if ( !match ) {
						anyFound = found = true;
					} else if ( match === true ) {
						continue;
					}
				}

				if ( match ) {
					for ( var i = 0; (item = curLoop[i]) != null; i++ ) {
						if ( item ) {
							found = filter( item, match, i, curLoop );
							var pass = not ^ !!found;

							if ( inplace && found != null ) {
								if ( pass ) {
									anyFound = true;
								} else {
									curLoop[i] = false;
								}
							} else if ( pass ) {
								result.push( item );
								anyFound = true;
							}
						}
					}
				}

				if ( found !== undefined ) {
					if ( !inplace ) {
						curLoop = result;
					}

					expr = expr.replace( Expr.match[ type ], "" );

					if ( !anyFound ) {
						return [];
					}

					break;
				}
			}
		}

		// Improper expression
		if ( expr === old ) {
			if ( anyFound == null ) {
				throw "Syntax error, unrecognized expression: " + expr;
			} else {
				break;
			}
		}

		old = expr;
	}

	return curLoop;
};

var Expr = Sizzle.selectors = {
	order: [ "ID", "NAME", "TAG" ],
	match: {
		ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
		CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
		NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
		ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
		TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
		CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
		POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
		PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
	},
	leftMatch: {},
	attrMap: {
		"class": "className",
		"for": "htmlFor"
	},
	attrHandle: {
		href: function(elem){
			return elem.getAttribute("href");
		}
	},
	relative: {
		"+": function(checkSet, part){
			var isPartStr = typeof part === "string",
				isTag = isPartStr && !/\W/.test(part),
				isPartStrNotTag = isPartStr && !isTag;

			if ( isTag ) {
				part = part.toLowerCase();
			}

			for ( var i = 0, l = checkSet.length, elem; i < l; i++ ) {
				if ( (elem = checkSet[i]) ) {
					while ( (elem = elem.previousSibling) && elem.nodeType !== 1 ) {}

					checkSet[i] = isPartStrNotTag || elem && elem.nodeName.toLowerCase() === part ?
						elem || false :
						elem === part;
				}
			}

			if ( isPartStrNotTag ) {
				Sizzle.filter( part, checkSet, true );
			}
		},
		">": function(checkSet, part){
			var isPartStr = typeof part === "string";

			if ( isPartStr && !/\W/.test(part) ) {
				part = part.toLowerCase();

				for ( var i = 0, l = checkSet.length; i < l; i++ ) {
					var elem = checkSet[i];
					if ( elem ) {
						var parent = elem.parentNode;
						checkSet[i] = parent.nodeName.toLowerCase() === part ? parent : false;
					}
				}
			} else {
				for ( var i = 0, l = checkSet.length; i < l; i++ ) {
					var elem = checkSet[i];
					if ( elem ) {
						checkSet[i] = isPartStr ?
							elem.parentNode :
							elem.parentNode === part;
					}
				}

				if ( isPartStr ) {
					Sizzle.filter( part, checkSet, true );
				}
			}
		},
		"": function(checkSet, part, isXML){
			var doneName = done++, checkFn = dirCheck;

			if ( typeof part === "string" && !/\W/.test(part) ) {
				var nodeCheck = part = part.toLowerCase();
				checkFn = dirNodeCheck;
			}

			checkFn("parentNode", part, doneName, checkSet, nodeCheck, isXML);
		},
		"~": function(checkSet, part, isXML){
			var doneName = done++, checkFn = dirCheck;

			if ( typeof part === "string" && !/\W/.test(part) ) {
				var nodeCheck = part = part.toLowerCase();
				checkFn = dirNodeCheck;
			}

			checkFn("previousSibling", part, doneName, checkSet, nodeCheck, isXML);
		}
	},
	find: {
		ID: function(match, context, isXML){
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				return m ? [m] : [];
			}
		},
		NAME: function(match, context){
			if ( typeof context.getElementsByName !== "undefined" ) {
				var ret = [], results = context.getElementsByName(match[1]);

				for ( var i = 0, l = results.length; i < l; i++ ) {
					if ( results[i].getAttribute("name") === match[1] ) {
						ret.push( results[i] );
					}
				}

				return ret.length === 0 ? null : ret;
			}
		},
		TAG: function(match, context){
			return context.getElementsByTagName(match[1]);
		}
	},
	preFilter: {
		CLASS: function(match, curLoop, inplace, result, not, isXML){
			match = " " + match[1].replace(/\\/g, "") + " ";

			if ( isXML ) {
				return match;
			}

			for ( var i = 0, elem; (elem = curLoop[i]) != null; i++ ) {
				if ( elem ) {
					if ( not ^ (elem.className && (" " + elem.className + " ").replace(/[\t\n]/g, " ").indexOf(match) >= 0) ) {
						if ( !inplace ) {
							result.push( elem );
						}
					} else if ( inplace ) {
						curLoop[i] = false;
					}
				}
			}

			return false;
		},
		ID: function(match){
			return match[1].replace(/\\/g, "");
		},
		TAG: function(match, curLoop){
			return match[1].toLowerCase();
		},
		CHILD: function(match){
			if ( match[1] === "nth" ) {
				// parse equations like 'even', 'odd', '5', '2n', '3n+2', '4n-1', '-n+6'
				var test = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(
					match[2] === "even" && "2n" || match[2] === "odd" && "2n+1" ||
					!/\D/.test( match[2] ) && "0n+" + match[2] || match[2]);

				// calculate the numbers (first)n+(last) including if they are negative
				match[2] = (test[1] + (test[2] || 1)) - 0;
				match[3] = test[3] - 0;
			}

			// TODO: Move to normal caching system
			match[0] = done++;

			return match;
		},
		ATTR: function(match, curLoop, inplace, result, not, isXML){
			var name = match[1].replace(/\\/g, "");
			
			if ( !isXML && Expr.attrMap[name] ) {
				match[1] = Expr.attrMap[name];
			}

			if ( match[2] === "~=" ) {
				match[4] = " " + match[4] + " ";
			}

			return match;
		},
		PSEUDO: function(match, curLoop, inplace, result, not){
			if ( match[1] === "not" ) {
				// If we're dealing with a complex expression, or a simple one
				if ( ( chunker.exec(match[3]) || "" ).length > 1 || /^\w/.test(match[3]) ) {
					match[3] = Sizzle(match[3], null, null, curLoop);
				} else {
					var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);
					if ( !inplace ) {
						result.push.apply( result, ret );
					}
					return false;
				}
			} else if ( Expr.match.POS.test( match[0] ) || Expr.match.CHILD.test( match[0] ) ) {
				return true;
			}
			
			return match;
		},
		POS: function(match){
			match.unshift( true );
			return match;
		}
	},
	filters: {
		enabled: function(elem){
			return elem.disabled === false && elem.type !== "hidden";
		},
		disabled: function(elem){
			return elem.disabled === true;
		},
		checked: function(elem){
			return elem.checked === true;
		},
		selected: function(elem){
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			elem.parentNode.selectedIndex;
			return elem.selected === true;
		},
		parent: function(elem){
			return !!elem.firstChild;
		},
		empty: function(elem){
			return !elem.firstChild;
		},
		has: function(elem, i, match){
			return !!Sizzle( match[3], elem ).length;
		},
		header: function(elem){
			return /h\d/i.test( elem.nodeName );
		},
		text: function(elem){
			return "text" === elem.type;
		},
		radio: function(elem){
			return "radio" === elem.type;
		},
		checkbox: function(elem){
			return "checkbox" === elem.type;
		},
		file: function(elem){
			return "file" === elem.type;
		},
		password: function(elem){
			return "password" === elem.type;
		},
		submit: function(elem){
			return "submit" === elem.type;
		},
		image: function(elem){
			return "image" === elem.type;
		},
		reset: function(elem){
			return "reset" === elem.type;
		},
		button: function(elem){
			return "button" === elem.type || elem.nodeName.toLowerCase() === "button";
		},
		input: function(elem){
			return /input|select|textarea|button/i.test(elem.nodeName);
		}
	},
	setFilters: {
		first: function(elem, i){
			return i === 0;
		},
		last: function(elem, i, match, array){
			return i === array.length - 1;
		},
		even: function(elem, i){
			return i % 2 === 0;
		},
		odd: function(elem, i){
			return i % 2 === 1;
		},
		lt: function(elem, i, match){
			return i < match[3] - 0;
		},
		gt: function(elem, i, match){
			return i > match[3] - 0;
		},
		nth: function(elem, i, match){
			return match[3] - 0 === i;
		},
		eq: function(elem, i, match){
			return match[3] - 0 === i;
		}
	},
	filter: {
		PSEUDO: function(elem, match, i, array){
			var name = match[1], filter = Expr.filters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			} else if ( name === "contains" ) {
				return (elem.textContent || elem.innerText || getText([ elem ]) || "").indexOf(match[3]) >= 0;
			} else if ( name === "not" ) {
				var not = match[3];

				for ( var i = 0, l = not.length; i < l; i++ ) {
					if ( not[i] === elem ) {
						return false;
					}
				}

				return true;
			} else {
				throw "Syntax error, unrecognized expression: " + name;
			}
		},
		CHILD: function(elem, match){
			var type = match[1], node = elem;
			switch (type) {
				case 'only':
				case 'first':
					while ( (node = node.previousSibling) )	 {
						if ( node.nodeType === 1 ) { 
							return false; 
						}
					}
					if ( type === "first" ) { 
						return true; 
					}
					node = elem;
				case 'last':
					while ( (node = node.nextSibling) )	 {
						if ( node.nodeType === 1 ) { 
							return false; 
						}
					}
					return true;
				case 'nth':
					var first = match[2], last = match[3];

					if ( first === 1 && last === 0 ) {
						return true;
					}
					
					var doneName = match[0],
						parent = elem.parentNode;
	
					if ( parent && (parent.sizcache !== doneName || !elem.nodeIndex) ) {
						var count = 0;
						for ( node = parent.firstChild; node; node = node.nextSibling ) {
							if ( node.nodeType === 1 ) {
								node.nodeIndex = ++count;
							}
						} 
						parent.sizcache = doneName;
					}
					
					var diff = elem.nodeIndex - last;
					if ( first === 0 ) {
						return diff === 0;
					} else {
						return ( diff % first === 0 && diff / first >= 0 );
					}
			}
		},
		ID: function(elem, match){
			return elem.nodeType === 1 && elem.getAttribute("id") === match;
		},
		TAG: function(elem, match){
			return (match === "*" && elem.nodeType === 1) || elem.nodeName.toLowerCase() === match;
		},
		CLASS: function(elem, match){
			return (" " + (elem.className || elem.getAttribute("class")) + " ")
				.indexOf( match ) > -1;
		},
		ATTR: function(elem, match){
			var name = match[1],
				result = Expr.attrHandle[ name ] ?
					Expr.attrHandle[ name ]( elem ) :
					elem[ name ] != null ?
						elem[ name ] :
						elem.getAttribute( name ),
				value = result + "",
				type = match[2],
				check = match[4];

			return result == null ?
				type === "!=" :
				type === "=" ?
				value === check :
				type === "*=" ?
				value.indexOf(check) >= 0 :
				type === "~=" ?
				(" " + value + " ").indexOf(check) >= 0 :
				!check ?
				value && result !== false :
				type === "!=" ?
				value !== check :
				type === "^=" ?
				value.indexOf(check) === 0 :
				type === "$=" ?
				value.substr(value.length - check.length) === check :
				type === "|=" ?
				value === check || value.substr(0, check.length + 1) === check + "-" :
				false;
		},
		POS: function(elem, match, i, array){
			var name = match[2], filter = Expr.setFilters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			}
		}
	}
};

var origPOS = Expr.match.POS;

for ( var type in Expr.match ) {
	Expr.match[ type ] = new RegExp( Expr.match[ type ].source + /(?![^\[]*\])(?![^\(]*\))/.source );
	Expr.leftMatch[ type ] = new RegExp( /(^(?:.|\r|\n)*?)/.source + Expr.match[ type ].source.replace(/\\(\d+)/g, function(all, num){
		return "\\" + (num - 0 + 1);
	}));
}

var makeArray = function(array, results) {
	array = Array.prototype.slice.call( array, 0 );

	if ( results ) {
		results.push.apply( results, array );
		return results;
	}
	
	return array;
};

// Perform a simple check to determine if the browser is capable of
// converting a NodeList to an array using builtin methods.
try {
	Array.prototype.slice.call( document.documentElement.childNodes, 0 );

// Provide a fallback method if it does not work
} catch(e){
	makeArray = function(array, results) {
		var ret = results || [];

		if ( toString.call(array) === "[object Array]" ) {
			Array.prototype.push.apply( ret, array );
		} else {
			if ( typeof array.length === "number" ) {
				for ( var i = 0, l = array.length; i < l; i++ ) {
					ret.push( array[i] );
				}
			} else {
				for ( var i = 0; array[i]; i++ ) {
					ret.push( array[i] );
				}
			}
		}

		return ret;
	};
}

var sortOrder;

if ( document.documentElement.compareDocumentPosition ) {
	sortOrder = function( a, b ) {
		if ( !a.compareDocumentPosition || !b.compareDocumentPosition ) {
			if ( a == b ) {
				hasDuplicate = true;
			}
			return a.compareDocumentPosition ? -1 : 1;
		}

		var ret = a.compareDocumentPosition(b) & 4 ? -1 : a === b ? 0 : 1;
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
} else if ( "sourceIndex" in document.documentElement ) {
	sortOrder = function( a, b ) {
		if ( !a.sourceIndex || !b.sourceIndex ) {
			if ( a == b ) {
				hasDuplicate = true;
			}
			return a.sourceIndex ? -1 : 1;
		}

		var ret = a.sourceIndex - b.sourceIndex;
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
} else if ( document.createRange ) {
	sortOrder = function( a, b ) {
		if ( !a.ownerDocument || !b.ownerDocument ) {
			if ( a == b ) {
				hasDuplicate = true;
			}
			return a.ownerDocument ? -1 : 1;
		}

		var aRange = a.ownerDocument.createRange(), bRange = b.ownerDocument.createRange();
		aRange.setStart(a, 0);
		aRange.setEnd(a, 0);
		bRange.setStart(b, 0);
		bRange.setEnd(b, 0);
		var ret = aRange.compareBoundaryPoints(Range.START_TO_END, bRange);
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
}

// Utility function for retreiving the text value of an array of DOM nodes
function getText( elems ) {
	var ret = "", elem;

	for ( var i = 0; elems[i]; i++ ) {
		elem = elems[i];

		// Get the text from text nodes and CDATA nodes
		if ( elem.nodeType === 3 || elem.nodeType === 4 ) {
			ret += elem.nodeValue;

		// Traverse everything else, except comment nodes
		} else if ( elem.nodeType !== 8 ) {
			ret += getText( elem.childNodes );
		}
	}

	return ret;
}

// Check to see if the browser returns elements by name when
// querying by getElementById (and provide a workaround)
(function(){
	// We're going to inject a fake input element with a specified name
	var form = document.createElement("div"),
		id = "script" + (new Date).getTime();
	form.innerHTML = "<a name='" + id + "'/>";

	// Inject it into the root element, check its status, and remove it quickly
	var root = document.documentElement;
	root.insertBefore( form, root.firstChild );

	// The workaround has to do additional checks after a getElementById
	// Which slows things down for other browsers (hence the branching)
	if ( document.getElementById( id ) ) {
		Expr.find.ID = function(match, context, isXML){
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				return m ? m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ? [m] : undefined : [];
			}
		};

		Expr.filter.ID = function(elem, match){
			var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
			return elem.nodeType === 1 && node && node.nodeValue === match;
		};
	}

	root.removeChild( form );
	root = form = null; // release memory in IE
})();

(function(){
	// Check to see if the browser returns only elements
	// when doing getElementsByTagName("*")

	// Create a fake element
	var div = document.createElement("div");
	div.appendChild( document.createComment("") );

	// Make sure no comments are found
	if ( div.getElementsByTagName("*").length > 0 ) {
		Expr.find.TAG = function(match, context){
			var results = context.getElementsByTagName(match[1]);

			// Filter out possible comments
			if ( match[1] === "*" ) {
				var tmp = [];

				for ( var i = 0; results[i]; i++ ) {
					if ( results[i].nodeType === 1 ) {
						tmp.push( results[i] );
					}
				}

				results = tmp;
			}

			return results;
		};
	}

	// Check to see if an attribute returns normalized href attributes
	div.innerHTML = "<a href='#'></a>";
	if ( div.firstChild && typeof div.firstChild.getAttribute !== "undefined" &&
			div.firstChild.getAttribute("href") !== "#" ) {
		Expr.attrHandle.href = function(elem){
			return elem.getAttribute("href", 2);
		};
	}

	div = null; // release memory in IE
})();

if ( document.querySelectorAll ) {
	(function(){
		var oldSizzle = Sizzle, div = document.createElement("div");
		div.innerHTML = "<p class='TEST'></p>";

		// Safari can't handle uppercase or unicode characters when
		// in quirks mode.
		if ( div.querySelectorAll && div.querySelectorAll(".TEST").length === 0 ) {
			return;
		}
	
		Sizzle = function(query, context, extra, seed){
			context = context || document;

			// Only use querySelectorAll on non-XML documents
			// (ID selectors don't work in non-HTML documents)
			if ( !seed && context.nodeType === 9 && !isXML(context) ) {
				try {
					return makeArray( context.querySelectorAll(query), extra );
				} catch(e){}
			}
		
			return oldSizzle(query, context, extra, seed);
		};

		for ( var prop in oldSizzle ) {
			Sizzle[ prop ] = oldSizzle[ prop ];
		}

		div = null; // release memory in IE
	})();
}

(function(){
	var div = document.createElement("div");

	div.innerHTML = "<div class='test e'></div><div class='test'></div>";

	// Opera can't find a second classname (in 9.6)
	// Also, make sure that getElementsByClassName actually exists
	if ( !div.getElementsByClassName || div.getElementsByClassName("e").length === 0 ) {
		return;
	}

	// Safari caches class attributes, doesn't catch changes (in 3.2)
	div.lastChild.className = "e";

	if ( div.getElementsByClassName("e").length === 1 ) {
		return;
	}
	
	Expr.order.splice(1, 0, "CLASS");
	Expr.find.CLASS = function(match, context, isXML) {
		if ( typeof context.getElementsByClassName !== "undefined" && !isXML ) {
			return context.getElementsByClassName(match[1]);
		}
	};

	div = null; // release memory in IE
})();

function dirNodeCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];
		if ( elem ) {
			elem = elem[dir];
			var match = false;

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 && !isXML ){
					elem.sizcache = doneName;
					elem.sizset = i;
				}

				if ( elem.nodeName.toLowerCase() === cur ) {
					match = elem;
					break;
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

function dirCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];
		if ( elem ) {
			elem = elem[dir];
			var match = false;

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 ) {
					if ( !isXML ) {
						elem.sizcache = doneName;
						elem.sizset = i;
					}
					if ( typeof cur !== "string" ) {
						if ( elem === cur ) {
							match = true;
							break;
						}

					} else if ( Sizzle.filter( cur, [elem] ).length > 0 ) {
						match = elem;
						break;
					}
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

var contains = document.compareDocumentPosition ? function(a, b){
	return a.compareDocumentPosition(b) & 16;
} : function(a, b){
	return a !== b && (a.contains ? a.contains(b) : true);
};

var isXML = function(elem){
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833) 
	var documentElement = (elem ? elem.ownerDocument || elem : 0).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

var posProcess = function(selector, context){
	var tmpSet = [], later = "", match,
		root = context.nodeType ? [context] : context;

	// Position selectors must be done after the filter
	// And so must :not(positional) so we move all PSEUDOs to the end
	while ( (match = Expr.match.PSEUDO.exec( selector )) ) {
		later += match[0];
		selector = selector.replace( Expr.match.PSEUDO, "" );
	}

	selector = Expr.relative[selector] ? selector + "*" : selector;

	for ( var i = 0, l = root.length; i < l; i++ ) {
		Sizzle( selector, root[i], tmpSet );
	}

	return Sizzle.filter( later, tmpSet );
};

// EXPOSE
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.filters;
jQuery.unique = Sizzle.uniqueSort;
jQuery.getText = getText;
jQuery.isXMLDoc = isXML;
jQuery.contains = contains;

return;

window.Sizzle = Sizzle;

})();
var runtil = /Until$/,
	rparentsprev = /^(?:parents|prevUntil|prevAll)/,
	// Note: This RegExp should be improved, or likely pulled from Sizzle
	rmultiselector = /,/,
	slice = Array.prototype.slice;

// Implement the identical functionality for filter and not
var winnow = function( elements, qualifier, keep ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep(elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) === keep;
		});

	} else if ( qualifier.nodeType ) {
		return jQuery.grep(elements, function( elem, i ) {
			return (elem === qualifier) === keep;
		});

	} else if ( typeof qualifier === "string" ) {
		var filtered = jQuery.grep(elements, function( elem ) {
			return elem.nodeType === 1;
		});

		if ( isSimple.test( qualifier ) ) {
			return jQuery.filter(qualifier, filtered, !keep);
		} else {
			qualifier = jQuery.filter( qualifier, elements );
		}
	}

	return jQuery.grep(elements, function( elem, i ) {
		return (jQuery.inArray( elem, qualifier ) >= 0) === keep;
	});
};

jQuery.fn.extend({
	find: function( selector ) {
		var ret = this.pushStack( "", "find", selector ), length = 0;

		for ( var i = 0, l = this.length; i < l; i++ ) {
			length = ret.length;
			jQuery.find( selector, this[i], ret );

			if ( i > 0 ) {
				// Make sure that the results are unique
				for ( var n = length; n < ret.length; n++ ) {
					for ( var r = 0; r < length; r++ ) {
						if ( ret[r] === ret[n] ) {
							ret.splice(n--, 1);
							break;
						}
					}
				}
			}
		}

		return ret;
	},

	has: function( target ) {
		var targets = jQuery( target );
		return this.filter(function() {
			for ( var i = 0, l = targets.length; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	not: function( selector ) {
		return this.pushStack( winnow(this, selector, false), "not", selector);
	},

	filter: function( selector ) {
		return this.pushStack( winnow(this, selector, true), "filter", selector );
	},
	
	is: function( selector ) {
		return !!selector && jQuery.filter( selector, this ).length > 0;
	},

	closest: function( selectors, context ) {
		if ( jQuery.isArray( selectors ) ) {
			var ret = [], cur = this[0], match, matches = {}, selector;

			if ( cur && selectors.length ) {
				for ( var i = 0, l = selectors.length; i < l; i++ ) {
					selector = selectors[i];

					if ( !matches[selector] ) {
						matches[selector] = jQuery.expr.match.POS.test( selector ) ? 
							jQuery( selector, context || this.context ) :
							selector;
					}
				}

				while ( cur && cur.ownerDocument && cur !== context ) {
					for ( selector in matches ) {
						match = matches[selector];

						if ( match.jquery ? match.index(cur) > -1 : jQuery(cur).is(match) ) {
							ret.push({ selector: selector, elem: cur });
							delete matches[selector];
						}
					}
					cur = cur.parentNode;
				}
			}

			return ret;
		}

		var pos = jQuery.expr.match.POS.test( selectors ) ? 
			jQuery( selectors, context || this.context ) : null;

		return this.map(function( i, cur ) {
			while ( cur && cur.ownerDocument && cur !== context ) {
				if ( pos ? pos.index(cur) > -1 : jQuery(cur).is(selectors) ) {
					return cur;
				}
				cur = cur.parentNode;
			}
			return null;
		});
	},
	
	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {
		if ( !elem || typeof elem === "string" ) {
			return jQuery.inArray( this[0],
				// If it receives a string, the selector is used
				// If it receives nothing, the siblings are used
				elem ? jQuery( elem ) : this.parent().children() );
		}
		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	},

	add: function( selector, context ) {
		var set = typeof selector === "string" ?
				jQuery( selector, context || this.context ) :
				jQuery.makeArray( selector ),
			all = jQuery.merge( this.get(), set );

		return this.pushStack( isDisconnected( set[0] ) || isDisconnected( all[0] ) ?
			all :
			jQuery.unique( all ) );
	},

	andSelf: function() {
		return this.add( this.prevObject );
	}
});

// A painfully simple check to see if an element is disconnected
// from a document (should be improved, where feasible).
function isDisconnected( node ) {
	return !node || !node.parentNode || node.parentNode.nodeType === 11;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return jQuery.nth( elem, 2, "nextSibling" );
	},
	prev: function( elem ) {
		return jQuery.nth( elem, 2, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( elem.parentNode.firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.makeArray( elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );
		
		if ( !runtil.test( name ) ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		ret = this.length > 1 ? jQuery.unique( ret ) : ret;

		if ( (this.length > 1 || rmultiselector.test( selector )) && rparentsprev.test( name ) ) {
			ret = ret.reverse();
		}

		return this.pushStack( ret, name, slice.call(arguments).join(",") );
	};
});

jQuery.extend({
	filter: function( expr, elems, not ) {
		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return jQuery.find.matches(expr, elems);
	},
	
	dir: function( elem, dir, until ) {
		var matched = [], cur = elem[dir];
		while ( cur && cur.nodeType !== 9 && (until === undefined || !jQuery( cur ).is( until )) ) {
			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},

	nth: function( cur, result, dir, elem ) {
		result = result || 1;
		var num = 0;

		for ( ; cur; cur = cur[dir] ) {
			if ( cur.nodeType === 1 && ++num === result ) {
				break;
			}
		}

		return cur;
	},

	sibling: function( n, elem ) {
		var r = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}
});
var rinlinejQuery = / jQuery\d+="(?:\d+|null)"/g,
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /(<([\w:]+)[^>]*?)\/>/g,
	rselfClosing = /^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&\w+;/,
	fcloseTag = function( all, front, tag ) {
		return rselfClosing.test( tag ) ?
			all :
			front + "></" + tag + ">";
	},
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		area: [ 1, "<map>", "</map>" ],
		_default: [ 0, "", "" ]
	};

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// IE can't serialize <link> and <script> tags normally
if ( !jQuery.support.htmlSerialize ) {
	wrapMap._default = [ 1, "div<div>", "</div>" ];
}

jQuery.fn.extend({
	text: function( text ) {
		if ( jQuery.isFunction(text) ) {
			return this.each(function(i) {
				var self = jQuery(this);
				return self.text( text.call(this, i, self.text()) );
			});
		}

		if ( typeof text !== "object" && text !== undefined ) {
			return this.empty().append( (this[0] && this[0].ownerDocument || document).createTextNode( text ) );
		}

		return jQuery.getText( this );
	},

	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			}).append(this);
		}

		return this;
	},

	wrapInner: function( html ) {
		return this.each(function() {
			var self = jQuery( this ), contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		return this.each(function() {
			jQuery( this ).wrapAll( html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	},

	append: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 ) {
				this.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 ) {
				this.insertBefore( elem, this.firstChild );
			}
		});
	},

	before: function() {
		if ( this[0] && this[0].parentNode ) {
			return this.domManip(arguments, false, function( elem ) {
				this.parentNode.insertBefore( elem, this );
			});
		} else if ( arguments.length ) {
			var set = jQuery(arguments[0]);
			set.push.apply( set, this.toArray() );
			return this.pushStack( set, "before", arguments );
		}
	},

	after: function() {
		if ( this[0] && this[0].parentNode ) {
			return this.domManip(arguments, false, function( elem ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			});
		} else if ( arguments.length ) {
			var set = this.pushStack( this, "after", arguments );
			set.push.apply( set, jQuery(arguments[0]).toArray() );
			return set;
		}
	},

	clone: function( events ) {
		// Do the clone
		var ret = this.map(function() {
			if ( !jQuery.support.noCloneEvent && !jQuery.isXMLDoc(this) ) {
			// the name attribute on an input).
				var html = this.outerHTML, ownerDocument = this.ownerDocument;
				if ( !html ) {
					var div = ownerDocument.createElement("div");
					div.appendChild( this.cloneNode(true) );
					html = div.innerHTML;
				}

				return jQuery.clean([html.replace(rinlinejQuery, "")
					.replace(rleadingWhitespace, "")], ownerDocument)[0];
			} else {
				return this.cloneNode(true);
			}
		});

		// Copy the events from the original to the clone
		if ( events === true ) {
			cloneCopyEvent( this, ret );
			cloneCopyEvent( this.find("*"), ret.find("*") );
		}

		// Return the cloned set
		return ret;
	},

	html: function( value ) {
		if ( value === undefined ) {
			return this[0] && this[0].nodeType === 1 ?
				this[0].innerHTML.replace(rinlinejQuery, "") :
				null;

		// See if we can take a shortcut and just use innerHTML
		} else if ( typeof value === "string" && !/<script/i.test( value ) &&
			(jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value )) &&
			!wrapMap[ (rtagName.exec( value ) || ["", ""])[1].toLowerCase() ] ) {

			try {
				for ( var i = 0, l = this.length; i < l; i++ ) {
					// Remove element nodes and prevent memory leaks
					if ( this[i].nodeType === 1 ) {
						cleanData( this[i].getElementsByTagName("*") );
						this[i].innerHTML = value;
					}
				}

			// If using innerHTML throws an exception, use the fallback method
			} catch(e) {
				this.empty().append( value );
			}

		} else if ( jQuery.isFunction( value ) ) {
			this.each(function(i){
				var self = jQuery(this), old = self.html();
				self.empty().append(function(){
					return value.call( this, i, old );
				});
			});

		} else {
			this.empty().append( value );
		}

		return this;
	},

	replaceWith: function( value ) {
		if ( this[0] && this[0].parentNode ) {
			// Make sure that the elements are removed from the DOM before they are inserted
			// this can help fix replacing a parent with child elements
			if ( !jQuery.isFunction( value ) ) {
				value = jQuery( value ).detach();
			}

			return this.each(function() {
				var next = this.nextSibling, parent = this.parentNode;

				jQuery(this).remove();

				if ( next ) {
					jQuery(next).before( value );
				} else {
					jQuery(parent).append( value );
				}
			});
		} else {
			return this.pushStack( jQuery(jQuery.isFunction(value) ? value() : value), "replaceWith", value );
		}
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, table, callback ) {
		var results, first, value = args[0], scripts = [];

		if ( jQuery.isFunction(value) ) {
			return this.each(function(i) {
				var self = jQuery(this);
				args[0] = value.call(this, i, table ? self.html() : undefined);
				return self.domManip( args, table, callback );
			});
		}

		if ( this[0] ) {
			// If we're in a fragment, just use that instead of building a new one
			if ( args[0] && args[0].parentNode && args[0].parentNode.nodeType === 11 ) {
				results = { fragment: args[0].parentNode };
			} else {
				results = buildFragment( args, this, scripts );
			}

			first = results.fragment.firstChild;

			if ( first ) {
				table = table && jQuery.nodeName( first, "tr" );

				for ( var i = 0, l = this.length; i < l; i++ ) {
					callback.call(
						table ?
							root(this[i], first) :
							this[i],
						results.cacheable || this.length > 1 || i > 0 ?
							results.fragment.cloneNode(true) :
							results.fragment
					);
				}
			}

			if ( scripts ) {
				jQuery.each( scripts, evalScript );
			}
		}

		return this;

		function root( elem, cur ) {
			return jQuery.nodeName(elem, "table") ?
				(elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild(elem.ownerDocument.createElement("tbody"))) :
				elem;
		}
	}
});

function cloneCopyEvent(orig, ret) {
	var i = 0;

	ret.each(function() {
		if ( this.nodeName !== (orig[i] && orig[i].nodeName) ) {
			return;
		}

		var oldData = jQuery.data( orig[i++] ), curData = jQuery.data( this, oldData ), events = oldData && oldData.events;

		if ( events ) {
			delete curData.handle;
			curData.events = {};

			for ( var type in events ) {
				for ( var handler in events[ type ] ) {
					jQuery.event.add( this, type, events[ type ][ handler ], events[ type ][ handler ].data );
				}
			}
		}
	});
}

function buildFragment( args, nodes, scripts ) {
	var fragment, cacheable, cached, cacheresults, doc;

	if ( args.length === 1 && typeof args[0] === "string" && args[0].length < 512 && args[0].indexOf("<option") < 0 ) {
		cacheable = true;
		cacheresults = jQuery.fragments[ args[0] ];
		if ( cacheresults ) {
			if ( cacheresults !== 1 ) {
				fragment = cacheresults;
			}
			cached = true;
		}
	}

	if ( !fragment ) {
		doc = (nodes && nodes[0] ? nodes[0].ownerDocument || nodes[0] : document);
		fragment = doc.createDocumentFragment();
		jQuery.clean( args, doc, fragment, scripts );
	}

	if ( cacheable ) {
		jQuery.fragments[ args[0] ] = cacheresults ? fragment : 1;
	}

	return { fragment: fragment, cacheable: cacheable };
}

jQuery.fragments = {};

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var ret = [], insert = jQuery( selector );

		for ( var i = 0, l = insert.length; i < l; i++ ) {
			var elems = (i > 0 ? this.clone(true) : this).get();
			jQuery.fn[ original ].apply( jQuery(insert[i]), elems );
			ret = ret.concat( elems );
		}
		return this.pushStack( ret, name, insert.selector );
	};
});

jQuery.each({
	// keepData is for internal use only--do not document
	remove: function( selector, keepData ) {
		if ( !selector || jQuery.filter( selector, [ this ] ).length ) {
			if ( !keepData && this.nodeType === 1 ) {
				cleanData( this.getElementsByTagName("*") );
				cleanData( [ this ] );
			}

			if ( this.parentNode ) {
				 this.parentNode.removeChild( this );
			}
		}
	},

	empty: function() {
		// Remove element nodes and prevent memory leaks
		if ( this.nodeType === 1 ) {
			cleanData( this.getElementsByTagName("*") );
		}

		// Remove any remaining nodes
		while ( this.firstChild ) {
			this.removeChild( this.firstChild );
		}
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function() {
		return this.each( fn, arguments );
	};
});

jQuery.extend({
	clean: function( elems, context, fragment, scripts ) {
		context = context || document;

		// !context.createElement fails in IE with an error but returns typeof 'object'
		if ( typeof context.createElement === "undefined" ) {
			context = context.ownerDocument || context[0] && context[0].ownerDocument || document;
		}

		var ret = [];

		jQuery.each(elems, function( i, elem ) {
			if ( typeof elem === "number" ) {
				elem += "";
			}

			if ( !elem ) {
				return;
			}

			// Convert html string into DOM nodes
			if ( typeof elem === "string" && !rhtml.test( elem ) ) {
				elem = context.createTextNode( elem );

			} else if ( typeof elem === "string" ) {
				// Fix "XHTML"-style tags in all browsers
				elem = elem.replace(rxhtmlTag, fcloseTag);

				// Trim whitespace, otherwise indexOf won't work as expected
				var tag = (rtagName.exec( elem ) || ["", ""])[1].toLowerCase(),
					wrap = wrapMap[ tag ] || wrapMap._default,
					depth = wrap[0],
					div = context.createElement("div");

				// Go to html and back, then peel off extra wrappers
				div.innerHTML = wrap[1] + elem + wrap[2];

				// Move to the right depth
				while ( depth-- ) {
					div = div.lastChild;
				}

				// Remove IE's autoinserted <tbody> from table fragments
				if ( !jQuery.support.tbody ) {

					// String was a <table>, *may* have spurious <tbody>
					var hasBody = rtbody.test(elem),
						tbody = tag === "table" && !hasBody ?
							div.firstChild && div.firstChild.childNodes :

							// String was a bare <thead> or <tfoot>
							wrap[1] === "<table>" && !hasBody ?
								div.childNodes :
								[];

					for ( var j = tbody.length - 1; j >= 0 ; --j ) {
						if ( jQuery.nodeName( tbody[ j ], "tbody" ) && !tbody[ j ].childNodes.length ) {
							tbody[ j ].parentNode.removeChild( tbody[ j ] );
						}
					}

				}

				// IE completely kills leading whitespace when innerHTML is used
				if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
					div.insertBefore( context.createTextNode( rleadingWhitespace.exec(elem)[0] ), div.firstChild );
				}

				elem = jQuery.makeArray( div.childNodes );
			}

			if ( elem.nodeType ) {
				ret.push( elem );
			} else {
				ret = jQuery.merge( ret, elem );
			}

		});

		if ( fragment ) {
			for ( var i = 0; ret[i]; i++ ) {
				if ( scripts && jQuery.nodeName( ret[i], "script" ) && (!ret[i].type || ret[i].type.toLowerCase() === "text/javascript") ) {
					scripts.push( ret[i].parentNode ? ret[i].parentNode.removeChild( ret[i] ) : ret[i] );
				} else {
					if ( ret[i].nodeType === 1 ) {
						ret.splice.apply( ret, [i + 1, 0].concat(jQuery.makeArray(ret[i].getElementsByTagName("script"))) );
					}
					fragment.appendChild( ret[i] );
				}
			}
		}

		return ret;
	}
});

function cleanData( elems ) {
	for ( var i = 0, elem, id; (elem = elems[i]) != null; i++ ) {
		if ( !jQuery.noData[elem.nodeName.toLowerCase()] && (id = elem[expando]) ) {
			delete jQuery.cache[ id ];
		}
	}
}
// exclude the following css properties to add px
var rexclude = /z-?index|font-?weight|opacity|zoom|line-?height/i,
	ralpha = /alpha\([^)]*\)/,
	ropacity = /opacity=([^)]*)/,
	rfloat = /float/i,
	rdashAlpha = /-([a-z])/ig,
	rupper = /([A-Z])/g,
	rnumpx = /^-?\d+(?:px)?$/i,
	rnum = /^-?\d/,

	cssShow = { position: "absolute", visibility: "hidden", display:"block" },
	cssWidth = [ "Left", "Right" ],
	cssHeight = [ "Top", "Bottom" ],

	// cache check for defaultView.getComputedStyle
	getComputedStyle = document.defaultView && document.defaultView.getComputedStyle,
	// normalize float css property
	styleFloat = jQuery.support.cssFloat ? "cssFloat" : "styleFloat",
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn.css = function( name, value ) {
	return access( this, name, value, true, function( elem, name, value ) {
		if ( value === undefined ) {
			return jQuery.curCSS( elem, name );
		}
		
		if ( typeof value === "number" && !rexclude.test(name) ) {
			value += "px";
		}

		jQuery.style( elem, name, value );
	});
};

jQuery.extend({
	style: function( elem, name, value ) {
		// don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 ) {
			return undefined;
		}

		// ignore negative width and height values #1599
		if ( (name === "width" || name === "height") && parseFloat(value) < 0 ) {
			value = undefined;
		}

		var style = elem.style || elem, set = value !== undefined;

		// IE uses filters for opacity
		if ( !jQuery.support.opacity && name === "opacity" ) {
			if ( set ) {
				// IE has trouble with opacity if it does not have layout
				// Force it by setting the zoom level
				style.zoom = 1;

				// Set the alpha filter to set the opacity
				var opacity = parseInt( value, 10 ) + "" === "NaN" ? "" : "alpha(opacity=" + value * 100 + ")";
				var filter = style.filter || jQuery.curCSS( elem, "filter" ) || "";
				style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : opacity;
			}

			return style.filter && style.filter.indexOf("opacity=") >= 0 ?
				(parseFloat( ropacity.exec(style.filter)[1] ) / 100) + "":
				"";
		}

		// Make sure we're using the right name for getting the float value
		if ( rfloat.test( name ) ) {
			name = styleFloat;
		}

		name = name.replace(rdashAlpha, fcamelCase);

		if ( set ) {
			style[ name ] = value;
		}

		return style[ name ];
	},

	css: function( elem, name, force, extra ) {
		if ( name === "width" || name === "height" ) {
			var val, props = cssShow, which = name === "width" ? cssWidth : cssHeight;

			function getWH() {
				val = name === "width" ? elem.offsetWidth : elem.offsetHeight;

				if ( extra === "border" ) {
					return;
				}

				jQuery.each( which, function() {
					if ( !extra ) {
						val -= parseFloat(jQuery.curCSS( elem, "padding" + this, true)) || 0;
					}

					if ( extra === "margin" ) {
						val += parseFloat(jQuery.curCSS( elem, "margin" + this, true)) || 0;
					} else {
						val -= parseFloat(jQuery.curCSS( elem, "border" + this + "Width", true)) || 0;
					}
				});
			}

			if ( elem.offsetWidth !== 0 ) {
				getWH();
			} else {
				jQuery.swap( elem, props, getWH );
			}

			return Math.max(0, Math.round(val));
		}

		return jQuery.curCSS( elem, name, force );
	},

	curCSS: function( elem, name, force ) {
		var ret, style = elem.style, filter;

		// IE uses filters for opacity
		if ( !jQuery.support.opacity && name === "opacity" && elem.currentStyle ) {
			ret = ropacity.test(elem.currentStyle.filter || "") ?
				(parseFloat(RegExp.$1) / 100) + "" :
				"";

			return ret === "" ?
				"1" :
				ret;
		}

		// Make sure we're using the right name for getting the float value
		if ( rfloat.test( name ) ) {
			name = styleFloat;
		}

		if ( !force && style && style[ name ] ) {
			ret = style[ name ];

		} else if ( getComputedStyle ) {

			// Only "float" is needed here
			if ( rfloat.test( name ) ) {
				name = "float";
			}

			name = name.replace( rupper, "-$1" ).toLowerCase();

			var defaultView = elem.ownerDocument.defaultView;

			if ( !defaultView ) {
				return null;
			}

			var computedStyle = defaultView.getComputedStyle( elem, null );

			if ( computedStyle ) {
				ret = computedStyle.getPropertyValue( name );
			}

			// We should always get a number back from opacity
			if ( name === "opacity" && ret === "" ) {
				ret = "1";
			}

		} else if ( elem.currentStyle ) {
			var camelCase = name.replace(rdashAlpha, fcamelCase);

			ret = elem.currentStyle[ name ] || elem.currentStyle[ camelCase ];

					if ( !rnumpx.test( ret ) && rnum.test( ret ) ) {
				// Remember the original values
				var left = style.left, rsLeft = elem.runtimeStyle.left;

				// Put in the new values to get a computed value out
				elem.runtimeStyle.left = elem.currentStyle.left;
				style.left = camelCase === "fontSize" ? "1em" : (ret || 0);
				ret = style.pixelLeft + "px";

				// Revert the changed values
				style.left = left;
				elem.runtimeStyle.left = rsLeft;
			}
		}

		return ret;
	},

	// A method for quickly swapping in/out CSS properties to get correct calculations
	swap: function( elem, options, callback ) {
		var old = {};

		// Remember the old values, and insert the new ones
		for ( var name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		callback.call( elem );

		// Revert the old values
		for ( var name in options ) {
			elem.style[ name ] = old[ name ];
		}
	}
});

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.hidden = function( elem ) {
		var width = elem.offsetWidth, height = elem.offsetHeight,
			skip = elem.nodeName.toLowerCase() === "tr";

		return width === 0 && height === 0 && !skip ?
			true :
			width > 0 && height > 0 && !skip ?
				false :
				jQuery.curCSS(elem, "display") === "none";
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
}
var jsc = now(),
	rscript = /<script(.|\s)*?\/script>/gi,
	rselectTextarea = /select|textarea/i,
	rinput = /color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,
	jsre = /=\?(&|$)/,
	rquery = /\?/,
	rts = /(\?|&)_=.*?(&|$)/,
	rurl = /^(\w+:)?\/\/([^\/?#]+)/,
	r20 = /%20/g;

jQuery.fn.extend({
	// Keep a copy of the old load
	_load: jQuery.fn.load,

	load: function( url, params, callback ) {
		if ( typeof url !== "string" ) {
			return this._load( url );

		// Don't do a request if no elements are being requested
		} else if ( !this.length ) {
			return this;
		}

		var off = url.indexOf(" ");
		if ( off >= 0 ) {
			var selector = url.slice(off, url.length);
			url = url.slice(0, off);
		}

		// Default to a GET request
		var type = "GET";

		// If the second parameter was provided
		if ( params ) {
			// If it's a function
			if ( jQuery.isFunction( params ) ) {
				// We assume that it's the callback
				callback = params;
				params = null;

			// Otherwise, build a param string
			} else if ( typeof params === "object" ) {
				params = jQuery.param( params, jQuery.ajaxSettings.traditional );
				type = "POST";
			}
		}

		// Request the remote document
		jQuery.ajax({
			url: url,
			type: type,
			dataType: "html",
			data: params,
			context:this,
			complete: function( res, status ) {
				// If successful, inject the HTML into all the matched elements
				if ( status === "success" || status === "notmodified" ) {
					// See if a selector was specified
					this.html( selector ?
						// Create a dummy div to hold the results
						jQuery("<div />")
							// inject the contents of the document in, removing the scripts
							// to avoid any 'Permission Denied' errors in IE
							.append(res.responseText.replace(rscript, ""))

							// Locate the specified elements
							.find(selector) :

						// If not, just inject the full result
						res.responseText );
				}

				if ( callback ) {
					this.each( callback, [res.responseText, status, res] );
				}
			}
		});

		return this;
	},

	serialize: function() {
		return jQuery.param(this.serializeArray());
	},
	serializeArray: function() {
		return this.map(function() {
			return this.elements ? jQuery.makeArray(this.elements) : this;
		})
		.filter(function() {
			return this.name && !this.disabled &&
				(this.checked || rselectTextarea.test(this.nodeName) ||
					rinput.test(this.type));
		})
		.map(function( i, elem ) {
			var val = jQuery(this).val();

			return val == null ?
				null :
				jQuery.isArray(val) ?
					jQuery.map( val, function( val, i ) {
						return { name: elem.name, value: val };
					}) :
					{ name: elem.name, value: val };
		}).get();
	}
});

// Attach a bunch of functions for handling common AJAX events
jQuery.each( "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function( i, o ) {
	jQuery.fn[o] = function( f ) {
		return this.bind(o, f);
	};
});

jQuery.extend({

	get: function( url, data, callback, type ) {
		// shift arguments if data argument was omited
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = null;
		}

		return jQuery.ajax({
			type: "GET",
			url: url,
			data: data,
			success: callback,
			dataType: type
		});
	},

	getScript: function( url, callback ) {
		return jQuery.get(url, null, callback, "script");
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get(url, data, callback, "json");
	},

	post: function( url, data, callback, type ) {
		// shift arguments if data argument was omited
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = {};
		}

		return jQuery.ajax({
			type: "POST",
			url: url,
			data: data,
			success: callback,
			dataType: type
		});
	},

	ajaxSetup: function( settings ) {
		jQuery.extend( jQuery.ajaxSettings, settings );
	},

	ajaxSettings: {
		url: location.href,
		global: true,
		type: "GET",
		contentType: "application/x-www-form-urlencoded",
		processData: true,
		async: true,
		// Create the request object; Microsoft failed to properly
		// implement the XMLHttpRequest in IE7 (can't request local files),
		// so we use the ActiveXObject when it is available
		// This function can be overriden by calling jQuery.ajaxSetup
		xhr: window.XMLHttpRequest && (window.location.protocol !== "file:" || !window.ActiveXObject) ?
			function() {
				return new window.XMLHttpRequest();
			} :
			function() {
				try {
					return new window.ActiveXObject("Microsoft.XMLHTTP");
				} catch(e) {}
			},
		accepts: {
			xml: "application/xml, text/xml",
			html: "text/html",
			script: "text/javascript, application/javascript",
			json: "application/json, text/javascript",
			text: "text/plain",
			_default: "*/*"
		}
	},

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajax: function( origSettings ) {
		var s = jQuery.extend(true, {}, jQuery.ajaxSettings, origSettings);
		
		var jsonp, status, data,
			callbackContext = s.context || s,
			type = s.type.toUpperCase();

		// convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Handle JSONP Parameter Callbacks
		if ( s.dataType === "jsonp" ) {
			if ( type === "GET" ) {
				if ( !jsre.test( s.url ) ) {
					s.url += (rquery.test( s.url ) ? "&" : "?") + (s.jsonp || "callback") + "=?";
				}
			} else if ( !s.data || !jsre.test(s.data) ) {
				s.data = (s.data ? s.data + "&" : "") + (s.jsonp || "callback") + "=?";
			}
			s.dataType = "json";
		}

		// Build temporary JSONP function
		if ( s.dataType === "json" && (s.data && jsre.test(s.data) || jsre.test(s.url)) ) {
			jsonp = s.jsonpCallback || ("jsonp" + jsc++);

			// Replace the =? sequence both in the query string and the data
			if ( s.data ) {
				s.data = (s.data + "").replace(jsre, "=" + jsonp + "$1");
			}

			s.url = s.url.replace(jsre, "=" + jsonp + "$1");

			// We need to make sure
			// that a JSONP style response is executed properly
			s.dataType = "script";

			// Handle JSONP-style loading
			window[ jsonp ] = window[ jsonp ] || function( tmp ) {
				data = tmp;
				success();
				complete();
				// Garbage collect
				window[ jsonp ] = undefined;

				try {
					delete window[ jsonp ];
				} catch(e) {}

				if ( head ) {
					head.removeChild( script );
				}
			};
		}

		if ( s.dataType === "script" && s.cache === null ) {
			s.cache = false;
		}

		if ( s.cache === false && type === "GET" ) {
			var ts = now();

			// try replacing _= if it is there
			var ret = s.url.replace(rts, "$1_=" + ts + "$2");

			// if nothing was replaced, add timestamp to the end
			s.url = ret + ((ret === s.url) ? (rquery.test(s.url) ? "&" : "?") + "_=" + ts : "");
		}

		// If data is available, append data to url for get requests
		if ( s.data && type === "GET" ) {
			s.url += (rquery.test(s.url) ? "&" : "?") + s.data;
		}

		// Watch for a new set of requests
		if ( s.global && ! jQuery.active++ ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Matches an absolute URL, and saves the domain
		var parts = rurl.exec( s.url ),
			remote = parts && (parts[1] && parts[1] !== location.protocol || parts[2] !== location.host);

		// If we're requesting a remote document
		// and trying to load JSON or Script with a GET
		if ( s.dataType === "script" && type === "GET" && remote ) {
			var head = document.getElementsByTagName("head")[0] || document.documentElement;
			var script = document.createElement("script");
			script.src = s.url;
			if ( s.scriptCharset ) {
				script.charset = s.scriptCharset;
			}

			// Handle Script loading
			if ( !jsonp ) {
				var done = false;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function() {
					if ( !done && (!this.readyState ||
							this.readyState === "loaded" || this.readyState === "complete") ) {
						done = true;
						success();
						complete();

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;
						if ( head && script.parentNode ) {
							head.removeChild( script );
						}
					}
				};
			}

			// Use insertBefore instead of appendChild  to circumvent an IE6 bug.
			// This arises when a base node is used (#2709 and #4378).
			head.insertBefore( script, head.firstChild );

			// We handle everything using the script element injection
			return undefined;
		}

		var requestDone = false;

		// Create the request object
		var xhr = s.xhr();

		if ( !xhr ) {
			return;
		}

		// Open the socket
		// Passing null username, generates a login popup on Opera (#2865)
		if ( s.username ) {
			xhr.open(type, s.url, s.async, s.username, s.password);
		} else {
			xhr.open(type, s.url, s.async);
		}

		// Need an extra try/catch for cross domain requests in Firefox 3
		try {
			// Set the correct header, if data is being sent
			if ( s.data || origSettings && origSettings.contentType ) {
				xhr.setRequestHeader("Content-Type", s.contentType);
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[s.url] ) {
					xhr.setRequestHeader("If-Modified-Since", jQuery.lastModified[s.url]);
				}

				if ( jQuery.etag[s.url] ) {
					xhr.setRequestHeader("If-None-Match", jQuery.etag[s.url]);
				}
			}

			// Set header so the called script knows that it's an XMLHttpRequest
			// Only send the header if it's not a remote XHR
			if ( !remote ) {
				xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			}

			// Set the Accepts header for the server, depending on the dataType
			xhr.setRequestHeader("Accept", s.dataType && s.accepts[ s.dataType ] ?
				s.accepts[ s.dataType ] + ", */*" :
				s.accepts._default );
		} catch(e) {}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && s.beforeSend.call(callbackContext, xhr, s) === false ) {
			// Handle the global AJAX counter
			if ( s.global && ! --jQuery.active ) {
				jQuery.event.trigger( "ajaxStop" );
			}

			// close opended socket
			xhr.abort();
			return false;
		}

		if ( s.global ) {
			trigger("ajaxSend", [xhr, s]);
		}

		// Wait for a response to come back
		var onreadystatechange = xhr.onreadystatechange = function( isTimeout ) {
			// The request was aborted
			if ( !xhr || xhr.readyState === 0 ) {
				// Opera doesn't call onreadystatechange before this point
				// so we simulate the call
				if ( !requestDone ) {
					complete();
				}

				requestDone = true;
				if ( xhr ) {
					xhr.onreadystatechange = jQuery.noop;
				}

			// The transfer is complete and the data is available, or the request timed out
			} else if ( !requestDone && xhr && (xhr.readyState === 4 || isTimeout === "timeout") ) {
				requestDone = true;
				xhr.onreadystatechange = jQuery.noop;

				status = isTimeout === "timeout" ?
					"timeout" :
					!jQuery.httpSuccess( xhr ) ?
						"error" :
						s.ifModified && jQuery.httpNotModified( xhr, s.url ) ?
							"notmodified" :
							"success";

				if ( status === "success" ) {
					// Watch for, and catch, XML document parse errors
					try {
						// process the data (runs the xml through httpData regardless of callback)
						data = jQuery.httpData( xhr, s.dataType, s );
					} catch(e) {
						status = "parsererror";
					}
				}

				// Make sure that the request was successful or notmodified
				if ( status === "success" || status === "notmodified" ) {
					// JSONP handles its own success callback
					if ( !jsonp ) {
						success();
					}
				} else {
					jQuery.handleError(s, xhr, status);
				}

				// Fire the complete handlers
				complete();

				if ( isTimeout === "timeout" ) {
					xhr.abort();
				}

				// Stop memory leaks
				if ( s.async ) {
					xhr = null;
				}
			}
		};

		// Override the abort handler, if we can (IE doesn't allow it, but that's OK)
		// Opera doesn't fire onreadystatechange at all on abort
		try {
			var oldAbort = xhr.abort;
			xhr.abort = function() {
				if ( xhr ) {
					oldAbort.call( xhr );
					if ( xhr ) {
						xhr.readyState = 0;
					}
				}

				onreadystatechange();
			};
		} catch(e) { }

		// Timeout checker
		if ( s.async && s.timeout > 0 ) {
			setTimeout(function() {
				// Check to see if the request is still happening
				if ( xhr && !requestDone ) {
					onreadystatechange( "timeout" );
				}
			}, s.timeout);
		}

		// Send the data
		try {
			xhr.send( type === "POST" || type === "PUT" || type === "DELETE" ? s.data : null );
		} catch(e) {
			jQuery.handleError(s, xhr, null, e);
			// Fire the complete handlers
			complete();
		}

		// firefox 1.5 doesn't fire statechange for sync requests
		if ( !s.async ) {
			onreadystatechange();
		}

		function success() {
			// If a local callback was specified, fire it and pass it the data
			if ( s.success ) {
				s.success.call( callbackContext, data, status, xhr );
			}

			// Fire the global callback
			if ( s.global ) {
				trigger( "ajaxSuccess", [xhr, s] );
			}
		}

		function complete() {
			// Process result
			if ( s.complete ) {
				s.complete.call( callbackContext, xhr, status);
			}

			// The request was completed
			if ( s.global ) {
				trigger( "ajaxComplete", [xhr, s] );
			}

			// Handle the global AJAX counter
			if ( s.global && ! --jQuery.active ) {
				jQuery.event.trigger( "ajaxStop" );
			}
		}
		
		function trigger(type, args) {
			(s.context ? jQuery(s.context) : jQuery.event).trigger(type, args);
		}

		// return XMLHttpRequest to allow aborting the request etc.
		return xhr;
	},

	handleError: function( s, xhr, status, e ) {
		// If a local callback was specified, fire it
		if ( s.error ) {
			s.error.call( s.context || window, xhr, status, e );
		}

		// Fire the global callback
		if ( s.global ) {
			(s.context ? jQuery(s.context) : jQuery.event).trigger( "ajaxError", [xhr, s, e] );
		}
	},

	// Counter for holding the number of active queries
	active: 0,

	// Determines if an XMLHttpRequest was successful or not
	httpSuccess: function( xhr ) {
		try {
			// IE error sometimes returns 1223 when it should be 204 so treat it as success, see #1450
			return !xhr.status && location.protocol === "file:" ||
				// Opera returns 0 when status is 304
				( xhr.status >= 200 && xhr.status < 300 ) ||
				xhr.status === 304 || xhr.status === 1223 || xhr.status === 0;
		} catch(e) {}

		return false;
	},

	// Determines if an XMLHttpRequest returns NotModified
	httpNotModified: function( xhr, url ) {
		var lastModified = xhr.getResponseHeader("Last-Modified"),
			etag = xhr.getResponseHeader("Etag");

		if ( lastModified ) {
			jQuery.lastModified[url] = lastModified;
		}

		if ( etag ) {
			jQuery.etag[url] = etag;
		}

		// Opera returns 0 when status is 304
		return xhr.status === 304 || xhr.status === 0;
	},

	httpData: function( xhr, type, s ) {
		var ct = xhr.getResponseHeader("content-type") || "",
			xml = type === "xml" || !type && ct.indexOf("xml") >= 0,
			data = xml ? xhr.responseXML : xhr.responseText;

		if ( xml && data.documentElement.nodeName === "parsererror" ) {
			throw "parsererror";
		}

		// Allow a pre-filtering function to sanitize the response
		// s is checked to keep backwards compatibility
		if ( s && s.dataFilter ) {
			data = s.dataFilter( data, type );
		}

		// The filter can actually parse the response
		if ( typeof data === "string" ) {
			// Get the JavaScript object, if JSON is used.
			if ( type === "json" || !type && ct.indexOf("json") >= 0 ) {
				// Make sure the incoming data is actual JSON
				// Logic borrowed from http://json.org/json2.js
				if (/^[\],:{}\s]*$/.test(data.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
					.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")
					.replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {

					// Try to use the native JSON parser first
					if ( window.JSON && window.JSON.parse ) {
						data = window.JSON.parse( data );

					} else {
						data = (new Function("return " + data))();
					}

				} else {
					throw "Invalid JSON: " + data;
				}

			// If the type is "script", eval it in global context
			} else if ( type === "script" || !type && ct.indexOf("javascript") >= 0 ) {
				jQuery.globalEval( data );
			}
		}

		return data;
	},

	// Serialize an array of form elements or a set of
	// key/values into a query string
	param: function( a, traditional ) {
		
		var s = [];
		
		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings.traditional;
		}
		
		function add( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction(value) ? value() : value;
			s[ s.length ] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
		}
		
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray(a) || a.jquery ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});
			
		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			jQuery.each( a, function buildParams( prefix, obj ) {
				
				if ( jQuery.isArray(obj) ) {
					// Serialize array item.
					jQuery.each( obj, function( i, v ) {
						if ( traditional ) {
							// Treat each array item as a scalar.
							add( prefix, v );
						} else {
							buildParams( prefix + "[" + ( typeof v === "object" || jQuery.isArray(v) ? i : "" ) + "]", v );
						}
					});
					
				} else if ( !traditional && obj != null && typeof obj === "object" ) {
					// Serialize object item.
					jQuery.each( obj, function( k, v ) {
						buildParams( prefix + "[" + k + "]", v );
					});
					
				} else {
					// Serialize scalar item.
					add( prefix, obj );
				}
			});
		}
		
		// Return the resulting serialization
		return s.join("&").replace(r20, "+");
	}

});
var elemdisplay = {},
	rfxtypes = /toggle|show|hide/,
	rfxnum = /^([+-]=)?([\d+-.]+)(.*)$/,
	timerId,
	fxAttrs = [
		// height animations
		[ "height", "marginTop", "marginBottom", "paddingTop", "paddingBottom" ],
		// width animations
		[ "width", "marginLeft", "marginRight", "paddingLeft", "paddingRight" ],
		// opacity animations
		[ "opacity" ]
	];

jQuery.fn.extend({
	show: function( speed, callback ) {
		if ( speed != null ) {
			return this.animate( genFx("show", 3), speed, callback);

		} else {
			for ( var i = 0, l = this.length; i < l; i++ ) {
				var old = jQuery.data(this[i], "olddisplay");

				this[i].style.display = old || "";

				if ( jQuery.css(this[i], "display") === "none" ) {
					var nodeName = this[i].nodeName, display;

					if ( elemdisplay[ nodeName ] ) {
						display = elemdisplay[ nodeName ];

					} else {
						var elem = jQuery("<" + nodeName + " />").appendTo("body");

						display = elem.css("display");

						if ( display === "none" ) {
							display = "block";
						}

						elem.remove();

						elemdisplay[ nodeName ] = display;
					}

					jQuery.data(this[i], "olddisplay", display);
				}
			}

			// Set the display of the elements in a second loop
			// to avoid the constant reflow
			for ( var j = 0, k = this.length; j < k; j++ ) {
				this[j].style.display = jQuery.data(this[j], "olddisplay") || "";
			}

			return this;
		}
	},

	hide: function( speed, callback ) {
		if ( speed != null ) {
			return this.animate( genFx("hide", 3), speed, callback);

		} else {
			for ( var i = 0, l = this.length; i < l; i++ ) {
				var old = jQuery.data(this[i], "olddisplay");
				if ( !old && old !== "none" ) {
					jQuery.data(this[i], "olddisplay", jQuery.css(this[i], "display"));
				}
			}

			// Set the display of the elements in a second loop
			// to avoid the constant reflow
			for ( var j = 0, k = this.length; j < k; j++ ) {
				this[j].style.display = "none";
			}

			return this;
		}
	},

	// Save the old toggle function
	_toggle: jQuery.fn.toggle,

	toggle: function( fn, fn2 ) {
		var bool = typeof fn === "boolean";

		if ( jQuery.isFunction(fn) && jQuery.isFunction(fn2) ) {
			this._toggle.apply( this, arguments );

		} else if ( fn == null || bool ) {
			this.each(function() {
				var state = bool ? fn : jQuery(this).is(":hidden");
				jQuery(this)[ state ? "show" : "hide" ]();
			});

		} else {
			this.animate(genFx("toggle", 3), fn, fn2);
		}

		return this;
	},

	fadeTo: function( speed, to, callback ) {
		return this.filter(":hidden").css("opacity", 0).show().end()
					.animate({opacity: to}, speed, callback);
	},

	animate: function( prop, speed, easing, callback ) {
		var optall = jQuery.speed(speed, easing, callback);

		if ( jQuery.isEmptyObject( prop ) ) {
			return this.each( optall.complete );
		}

		return this[ optall.queue === false ? "each" : "queue" ](function() {
			var opt = jQuery.extend({}, optall), p,
				hidden = this.nodeType === 1 && jQuery(this).is(":hidden"),
				self = this;

			for ( p in prop ) {
				var name = p.replace(rdashAlpha, fcamelCase);

				if ( p !== name ) {
					prop[ name ] = prop[ p ];
					delete prop[ p ];
					p = name;
				}

				if ( prop[p] === "hide" && hidden || prop[p] === "show" && !hidden ) {
					return opt.complete.call(this);
				}

				if ( ( p === "height" || p === "width" ) && this.style ) {
					// Store display property
					opt.display = jQuery.css(this, "display");

					// Make sure that nothing sneaks out
					opt.overflow = this.style.overflow;
				}

				if ( jQuery.isArray( prop[p] ) ) {
					// Create (if needed) and add to specialEasing
					(opt.specialEasing = opt.specialEasing || {})[p] = prop[p][1];
					prop[p] = prop[p][0];
				}
			}

			if ( opt.overflow != null ) {
				this.style.overflow = "hidden";
			}

			opt.curAnim = jQuery.extend({}, prop);

			jQuery.each( prop, function( name, val ) {
				var e = new jQuery.fx( self, opt, name );

				if ( rfxtypes.test(val) ) {
					e[ val === "toggle" ? hidden ? "show" : "hide" : val ]( prop );

				} else {
					var parts = rfxnum.exec(val),
						start = e.cur(true) || 0;

					if ( parts ) {
						var end = parseFloat( parts[2] ),
							unit = parts[3] || "px";

						// We need to compute starting value
						if ( unit !== "px" ) {
							self.style[ name ] = (end || 1) + unit;
							start = ((end || 1) / e.cur(true)) * start;
							self.style[ name ] = start + unit;
						}

						// If a +=/-= token was provided, we're doing a relative animation
						if ( parts[1] ) {
							end = ((parts[1] === "-=" ? -1 : 1) * end) + start;
						}

						e.custom( start, end, unit );

					} else {
						e.custom( start, val, "" );
					}
				}
			});

			// For JS strict compliance
			return true;
		});
	},

	stop: function( clearQueue, gotoEnd ) {
		var timers = jQuery.timers;

		if ( clearQueue ) {
			this.queue([]);
		}

		this.each(function() {
			// go in reverse order so anything added to the queue during the loop is ignored
			for ( var i = timers.length - 1; i >= 0; i-- ) {
				if ( timers[i].elem === this ) {
					if (gotoEnd) {
						// force the next step to be the last
						timers[i](true);
					}

					timers.splice(i, 1);
				}
			}
		});

		// start the next in the queue if the last step wasn't forced
		if ( !gotoEnd ) {
			this.dequeue();
		}

		return this;
	}

});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show", 1),
	slideUp: genFx("hide", 1),
	slideToggle: genFx("toggle", 1),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, callback ) {
		return this.animate( props, speed, callback );
	};
});

jQuery.extend({
	speed: function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? speed : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			jQuery.fx.speeds[opt.duration] || jQuery.fx.speeds._default;

		// Queueing
		opt.old = opt.complete;
		opt.complete = function() {
			if ( opt.queue !== false ) {
				jQuery(this).dequeue();
			}
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
		};

		return opt;
	},

	easing: {
		linear: function( p, n, firstNum, diff ) {
			return firstNum + diff * p;
		},
		swing: function( p, n, firstNum, diff ) {
			return ((-Math.cos(p*Math.PI)/2) + 0.5) * diff + firstNum;
		}
	},

	timers: [],

	fx: function( elem, options, prop ) {
		this.options = options;
		this.elem = elem;
		this.prop = prop;

		if ( !options.orig ) {
			options.orig = {};
		}
	}

});

jQuery.fx.prototype = {
	// Simple function for setting a style value
	update: function() {
		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		(jQuery.fx.step[this.prop] || jQuery.fx.step._default)( this );

		// Set display property to block for height/width animations
		if ( ( this.prop === "height" || this.prop === "width" ) && this.elem.style ) {
			this.elem.style.display = "block";
		}
	},

	// Get the current size
	cur: function( force ) {
		if ( this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null) ) {
			return this.elem[ this.prop ];
		}

		var r = parseFloat(jQuery.css(this.elem, this.prop, force));
		return r && r > -10000 ? r : parseFloat(jQuery.curCSS(this.elem, this.prop)) || 0;
	},

	// Start an animation from one number to another
	custom: function( from, to, unit ) {
		this.startTime = now();
		this.start = from;
		this.end = to;
		this.unit = unit || this.unit || "px";
		this.now = this.start;
		this.pos = this.state = 0;

		var self = this;
		function t( gotoEnd ) {
			return self.step(gotoEnd);
		}

		t.elem = this.elem;

		if ( t() && jQuery.timers.push(t) && !timerId ) {
			timerId = setInterval(jQuery.fx.tick, 13);
		}
	},

	// Simple 'show' function
	show: function() {
		// Remember where we started, so that we can go back to it later
		this.options.orig[this.prop] = jQuery.style( this.elem, this.prop );
		this.options.show = true;

		// Begin the animation
		// Make sure that we start at a small width/height to avoid any
		// flash of content
		this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());

		// Start by showing the element
		jQuery( this.elem ).show();
	},

	// Simple 'hide' function
	hide: function() {
		// Remember where we started, so that we can go back to it later
		this.options.orig[this.prop] = jQuery.style( this.elem, this.prop );
		this.options.hide = true;

		// Begin the animation
		this.custom(this.cur(), 0);
	},

	// Each step of an animation
	step: function( gotoEnd ) {
		var t = now(), done = true;

		if ( gotoEnd || t >= this.options.duration + this.startTime ) {
			this.now = this.end;
			this.pos = this.state = 1;
			this.update();

			this.options.curAnim[ this.prop ] = true;

			for ( var i in this.options.curAnim ) {
				if ( this.options.curAnim[i] !== true ) {
					done = false;
				}
			}

			if ( done ) {
				if ( this.options.display != null ) {
					// Reset the overflow
					this.elem.style.overflow = this.options.overflow;

					// Reset the display
					var old = jQuery.data(this.elem, "olddisplay");
					this.elem.style.display = old ? old : this.options.display;

					if ( jQuery.css(this.elem, "display") === "none" ) {
						this.elem.style.display = "block";
					}
				}

				// Hide the element if the "hide" operation was done
				if ( this.options.hide ) {
					jQuery(this.elem).hide();
				}

				// Reset the properties, if the item has been hidden or shown
				if ( this.options.hide || this.options.show ) {
					for ( var p in this.options.curAnim ) {
						jQuery.style(this.elem, p, this.options.orig[p]);
					}
				}

				// Execute the complete function
				this.options.complete.call( this.elem );
			}

			return false;

		} else {
			var n = t - this.startTime;
			this.state = n / this.options.duration;

			// Perform the easing function, defaults to swing
			var specialEasing = this.options.specialEasing && this.options.specialEasing[this.prop];
			var defaultEasing = this.options.easing || (jQuery.easing.swing ? "swing" : "linear");
			this.pos = jQuery.easing[specialEasing || defaultEasing](this.state, n, 0, 1, this.options.duration);
			this.now = this.start + ((this.end - this.start) * this.pos);

			// Perform the next step of the animation
			this.update();
		}

		return true;
	}
};

jQuery.extend( jQuery.fx, {
	tick: function() {
		var timers = jQuery.timers;

		for ( var i = 0; i < timers.length; i++ ) {
			if ( !timers[i]() ) {
				timers.splice(i--, 1);
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
	},
		
	stop: function() {
		clearInterval( timerId );
		timerId = null;
	},
	
	speeds: {
		slow: 600,
 		fast: 200,
 		// Default speed
 		_default: 400
	},

	step: {
		opacity: function( fx ) {
			jQuery.style(fx.elem, "opacity", fx.now);
		},

		_default: function( fx ) {
			if ( fx.elem.style && fx.elem.style[ fx.prop ] != null ) {
				fx.elem.style[ fx.prop ] = (fx.prop === "width" || fx.prop === "height" ? Math.max(0, fx.now) : fx.now) + fx.unit;
			} else {
				fx.elem[ fx.prop ] = fx.now;
			}
		}
	}
});

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
}

function genFx( type, num ) {
	var obj = {};

	jQuery.each( fxAttrs.concat.apply([], fxAttrs.slice(0,num)), function() {
		obj[ this ] = type;
	});

	return obj;
}
if ( "getBoundingClientRect" in document.documentElement ) {
	jQuery.fn.offset = function( options ) {
		var elem = this[0];

		if ( !elem || !elem.ownerDocument ) {
			return null;
		}

		if ( options ) { 
			return this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
		}

		if ( elem === elem.ownerDocument.body ) {
			return jQuery.offset.bodyOffset( elem );
		}

		var box = elem.getBoundingClientRect(), doc = elem.ownerDocument, body = doc.body, docElem = doc.documentElement,
			clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0,
			top  = box.top  + (self.pageYOffset || jQuery.support.boxModel && docElem.scrollTop  || body.scrollTop ) - clientTop,
			left = box.left + (self.pageXOffset || jQuery.support.boxModel && docElem.scrollLeft || body.scrollLeft) - clientLeft;

		return { top: top, left: left };
	};

} else {
	jQuery.fn.offset = function( options ) {
		var elem = this[0];

		if ( !elem || !elem.ownerDocument ) {
			return null;
		}

		if ( options ) { 
			return this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
		}

		if ( elem === elem.ownerDocument.body ) {
			return jQuery.offset.bodyOffset( elem );
		}

		jQuery.offset.initialize();

		var offsetParent = elem.offsetParent, prevOffsetParent = elem,
			doc = elem.ownerDocument, computedStyle, docElem = doc.documentElement,
			body = doc.body, defaultView = doc.defaultView,
			prevComputedStyle = defaultView ? defaultView.getComputedStyle( elem, null ) : elem.currentStyle,
			top = elem.offsetTop, left = elem.offsetLeft;

		while ( (elem = elem.parentNode) && elem !== body && elem !== docElem ) {
			if ( jQuery.offset.supportsFixedPosition && prevComputedStyle.position === "fixed" ) {
				break;
			}

			computedStyle = defaultView ? defaultView.getComputedStyle(elem, null) : elem.currentStyle;
			top  -= elem.scrollTop;
			left -= elem.scrollLeft;

			if ( elem === offsetParent ) {
				top  += elem.offsetTop;
				left += elem.offsetLeft;

				if ( jQuery.offset.doesNotAddBorder && !(jQuery.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(elem.nodeName)) ) {
					top  += parseFloat( computedStyle.borderTopWidth  ) || 0;
					left += parseFloat( computedStyle.borderLeftWidth ) || 0;
				}

				prevOffsetParent = offsetParent, offsetParent = elem.offsetParent;
			}

			if ( jQuery.offset.subtractsBorderForOverflowNotVisible && computedStyle.overflow !== "visible" ) {
				top  += parseFloat( computedStyle.borderTopWidth  ) || 0;
				left += parseFloat( computedStyle.borderLeftWidth ) || 0;
			}

			prevComputedStyle = computedStyle;
		}

		if ( prevComputedStyle.position === "relative" || prevComputedStyle.position === "static" ) {
			top  += body.offsetTop;
			left += body.offsetLeft;
		}

		if ( jQuery.offset.supportsFixedPosition && prevComputedStyle.position === "fixed" ) {
			top  += Math.max( docElem.scrollTop, body.scrollTop );
			left += Math.max( docElem.scrollLeft, body.scrollLeft );
		}

		return { top: top, left: left };
	};
}

jQuery.offset = {
	initialize: function() {
		var body = document.body, container = document.createElement("div"), innerDiv, checkDiv, table, td, bodyMarginTop = parseFloat( jQuery.curCSS(body, "marginTop", true) ) || 0,
			html = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";

		jQuery.extend( container.style, { position: "absolute", top: 0, left: 0, margin: 0, border: 0, width: "1px", height: "1px", visibility: "hidden" } );

		container.innerHTML = html;
		body.insertBefore( container, body.firstChild );
		innerDiv = container.firstChild;
		checkDiv = innerDiv.firstChild;
		td = innerDiv.nextSibling.firstChild.firstChild;

		this.doesNotAddBorder = (checkDiv.offsetTop !== 5);
		this.doesAddBorderForTableAndCells = (td.offsetTop === 5);

		checkDiv.style.position = "fixed", checkDiv.style.top = "20px";
		// safari subtracts parent border width here which is 5px
		this.supportsFixedPosition = (checkDiv.offsetTop === 20 || checkDiv.offsetTop === 15);
		checkDiv.style.position = checkDiv.style.top = "";

		innerDiv.style.overflow = "hidden", innerDiv.style.position = "relative";
		this.subtractsBorderForOverflowNotVisible = (checkDiv.offsetTop === -5);

		this.doesNotIncludeMarginInBodyOffset = (body.offsetTop !== bodyMarginTop);

		body.removeChild( container );
		body = container = innerDiv = checkDiv = table = td = null;
		jQuery.offset.initialize = jQuery.noop;
	},

	bodyOffset: function( body ) {
		var top = body.offsetTop, left = body.offsetLeft;

		jQuery.offset.initialize();

		if ( jQuery.offset.doesNotIncludeMarginInBodyOffset ) {
			top  += parseFloat( jQuery.curCSS(body, "marginTop",  true) ) || 0;
			left += parseFloat( jQuery.curCSS(body, "marginLeft", true) ) || 0;
		}

		return { top: top, left: left };
	},
	
	setOffset: function( elem, options, i ) {
		// set position first, in-case top/left are set even on static elem
		if ( /static/.test( jQuery.curCSS( elem, "position" ) ) ) {
			elem.style.position = "relative";
		}
		var curElem   = jQuery( elem ),
			curOffset = curElem.offset(),
			curTop    = parseInt( jQuery.curCSS( elem, "top",  true ), 10 ) || 0,
			curLeft   = parseInt( jQuery.curCSS( elem, "left", true ), 10 ) || 0;

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		var props = {
			top:  (options.top  - curOffset.top)  + curTop,
			left: (options.left - curOffset.left) + curLeft
		};
		
		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};


jQuery.fn.extend({
	position: function() {
		if ( !this[0] ) {
			return null;
		}

		var elem = this[0],

		// Get *real* offsetParent
		offsetParent = this.offsetParent(),

		// Get correct offsets
		offset       = this.offset(),
		parentOffset = /^body|html$/i.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();

		// are the same in Safari causing offset.left to incorrectly be 0
		offset.top  -= parseFloat( jQuery.curCSS(elem, "marginTop",  true) ) || 0;
		offset.left -= parseFloat( jQuery.curCSS(elem, "marginLeft", true) ) || 0;

		// Add offsetParent borders
		parentOffset.top  += parseFloat( jQuery.curCSS(offsetParent[0], "borderTopWidth",  true) ) || 0;
		parentOffset.left += parseFloat( jQuery.curCSS(offsetParent[0], "borderLeftWidth", true) ) || 0;

		// Subtract the two offsets
		return {
			top:  offset.top  - parentOffset.top,
			left: offset.left - parentOffset.left
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || document.body;
			while ( offsetParent && (!/^body|html$/i.test(offsetParent.nodeName) && jQuery.css(offsetParent, "position") === "static") ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent;
		});
	}
});


// Create scrollLeft and scrollTop methods
jQuery.each( ["Left", "Top"], function( i, name ) {
	var method = "scroll" + name;

	jQuery.fn[ method ] = function(val) {
		var elem = this[0], win;
		
		if ( !elem ) {
			return null;
		}

		if ( val !== undefined ) {
			// Set the scroll offset
			return this.each(function() {
				win = getWindow( this );

				if ( win ) {
					win.scrollTo(
						!i ? val : jQuery(win).scrollLeft(),
						 i ? val : jQuery(win).scrollTop()
					);

				} else {
					this[ method ] = val;
				}
			});
		} else {
			win = getWindow( elem );

			// Return the scroll offset
			return win ? ("pageXOffset" in win) ? win[ i ? "pageYOffset" : "pageXOffset" ] :
				jQuery.support.boxModel && win.document.documentElement[ method ] ||
					win.document.body[ method ] :
				elem[ method ];
		}
	};
});

function getWindow( elem ) {
	return ("scrollTo" in elem && elem.document) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}
// Create innerHeight, innerWidth, outerHeight and outerWidth methods
jQuery.each([ "Height", "Width" ], function( i, name ) {

	var type = name.toLowerCase();

	// innerHeight and innerWidth
	jQuery.fn["inner" + name] = function() {
		return this[0] ?
			jQuery.css( this[0], type, false, "padding" ) :
			null;
	};

	// outerHeight and outerWidth
	jQuery.fn["outer" + name] = function( margin ) {
		return this[0] ?
			jQuery.css( this[0], type, false, margin ? "margin" : "border" ) :
			null;
	};

	jQuery.fn[ type ] = function( size ) {
		// Get window width or height
		var elem = this[0];
		if ( !elem ) {
			return size == null ? null : this;
		}

		return ("scrollTo" in elem && elem.document) ? // does it walk and quack like a window?
			// Everyone else use document.documentElement or document.body depending on Quirks vs Standards mode
			elem.document.compatMode === "CSS1Compat" && elem.document.documentElement[ "client" + name ] ||
			elem.document.body[ "client" + name ] :

			// Get document width or height
			(elem.nodeType === 9) ? // is it a document
				// Either scroll[Width/Height] or offset[Width/Height], whichever is greater
				Math.max(
					elem.documentElement["client" + name],
					elem.body["scroll" + name], elem.documentElement["scroll" + name],
					elem.body["offset" + name], elem.documentElement["offset" + name]
				) :

				// Get or set width or height on the element
				size === undefined ?
					// Get width or height on the element
					jQuery.css( elem, type ) :

					// Set the width or height on the element (default to pixels if value is unitless)
					this.css( type, typeof size === "string" ? size : size + "px" );
	};

});
// Expose jQuery to the global object
window.jQuery = window.$ = jQuery;

})(window);

function flightscheduleapp728()
{
document.write('<iframe src="obe/add-and-form.html" width="650" height="280" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> </iframe>');
}


function busscheduleapp728()
{
document.write('<iframe src="https://www.mapsofindia.com/widgets/bus-add-and-form.html" width="650" height="280" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> </iframe>');
}

function distanceapp728()
{
document.write('<iframe src="https://www.mapsofindia.com/widgets/distance-add-and-form.html" width="700" height="280" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> </iframe>');
}


function mmtbus728x90()
{
document.write('<iframe src="https://www.mapsofindia.com/widgets/mmt/bus/728x90/" width="728" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" height="90"> </iframe>');
}

function mmtbus160x600()
{
document.write('<iframe src="https://www.mapsofindia.com/widgets/mmt/bus/160x600/" width="160" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" height="600"> </iframe>');
}

function mmtbus()
{
document.write('<iframe src="https://www.mapsofindia.com/widgets/mmt/bus/" width="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" height="250"> </iframe>');
}


function popikaai()
	{

var popunder="https://www.mapsofindia.com/popunder.html"

var winfeatures="width=336,height=280,scrollbars=0,resizable=0,toolbar=0,location=0,menubar=0,status=0,directories=0"

//Specifying 0 will cause popunder to load every time page is loaded
var once_per_session=0

///No editing beyond here required/////

function get_cookie(Name) {
  var search = Name + "="
  var returnvalue = "";
  if (document.cookie.length > 0) {
    offset = document.cookie.indexOf(search)
    if (offset != -1) { // if cookie exists
      offset += search.length
      // set index of beginning of value
      end = document.cookie.indexOf(";", offset);
      // set index of end of cookie value
      if (end == -1)
         end = document.cookie.length;
      returnvalue=unescape(document.cookie.substring(offset, end))
      }
   }
  return returnvalue;
}

function loadornot(){
if (get_cookie('popunder')==''){
loadpopunder()
document.cookie="popunder=yes"
}
}

function loadpopunder(){
win2=window.open(popunder,"",winfeatures)
win2.blur()
window.focus()
}

if (once_per_session==0)
loadpopunder()
else
loadornot()

}

//parliamentry constituencies tracker start//
function tracker336notshown()
{
	document.write('<div id="election_result" style="padding:0 0 15px 0; width:336;min-height:150px;display:block; clear:both;border:0px #00ff00 solid;"><input type="hidden" id="state_container" /><script language="JavaScript" type="text/javascript">var url=location.href;var nm=url.split("/");var num=nm.length;var state_nm2=nm[4];election_result(state_nm2);</script><br /><br /></div>');


	document.write("<div><br /><a href='http://openx.mapsofindia.com/www/delivery/ck.php?n=a83ef66b&amp;cb=INSERT_RANDOM_NUMBER_HERE' ></a><br /><br /></div>");
}
function election_result(state_nm2)
{
geteleres("https://www.mapsofindia.com/parliamentaryconstituencies/election-res.php?id="+state_nm2,"election_result");
linksTimer = setTimeout('election_result(state_nm2,"election_result")',5000);

}

//parliamentry constituencies tracker end//




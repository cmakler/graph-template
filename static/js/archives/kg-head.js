//Built using buildjs.py script - do not hand edit

// jquery.min.js
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map

// bootstrap.min.js
/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);

// angular.min.js
/*
 AngularJS v1.3.15
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(Q,W,t){'use strict';function R(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.15/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Sa(b){if(null==b||Ta(b))return!1;var a=b.length;return b.nodeType===
qa&&a?!0:C(b)||H(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d,e;if(b)if(G(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(H(b)||Sa(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==r)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Ed(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
b[d[e]],d[e]);return d}function mc(b){return function(a,c){b(c,a)}}function Fd(){return++ob}function nc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function w(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var l=f[g];b[l]=e[l]}}nc(b,a);return b}function aa(b){return parseInt(b,10)}function Ob(b,a){return w(Object.create(b),a)}function E(){}function ra(b){return b}function ea(b){return function(){return b}}function x(b){return"undefined"===
typeof b}function y(b){return"undefined"!==typeof b}function J(b){return null!==b&&"object"===typeof b}function C(b){return"string"===typeof b}function Y(b){return"number"===typeof b}function ga(b){return"[object Date]"===Ca.call(b)}function G(b){return"function"===typeof b}function Ua(b){return"[object RegExp]"===Ca.call(b)}function Ta(b){return b&&b.window===b}function Va(b){return b&&b.$evalAsync&&b.$watch}function Wa(b){return"boolean"===typeof b}function oc(b){return!(!b||!(b.nodeName||b.prop&&
b.attr&&b.find))}function Gd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function va(b){return z(b.nodeName||b[0]&&b[0].nodeName)}function Xa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Da(b,a,c,d){if(Ta(b)||Va(b))throw Ja("cpws");if(a){if(b===a)throw Ja("cpi");c=c||[];d=d||[];if(J(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(H(b))for(var f=a.length=0;f<b.length;f++)e=Da(b[f],null,c,d),J(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);
else{var g=a.$$hashKey;H(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Da(b[f],null,c,d),J(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);nc(a,g)}}else if(a=b)H(b)?a=Da(b,[],c,d):ga(b)?a=new Date(b.getTime()):Ua(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):J(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Da(b,e,c,d));return a}function sa(b,a){if(H(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(J(b))for(c in a=a||{},
b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ha(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(H(b)){if(!H(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ha(b[d],a[d]))return!1;return!0}}else{if(ga(b))return ga(a)?ha(b.getTime(),a.getTime()):!1;if(Ua(b))return Ua(a)?b.toString()==a.toString():!1;if(Va(b)||Va(a)||Ta(b)||Ta(a)||H(a)||ga(a)||Ua(a))return!1;c={};for(d in b)if("$"!==
d.charAt(0)&&!G(b[d])){if(!ha(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==t&&!G(a[d]))return!1;return!0}return!1}function Ya(b,a,c){return b.concat(Za.call(a,c))}function pc(b,a){var c=2<arguments.length?Za.call(arguments,2):[];return!G(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Ya(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Hd(b,a){var c=a;"string"===typeof b&&
"$"===b.charAt(0)&&"$"===b.charAt(1)?c=t:Ta(a)?c="$WINDOW":a&&W===a?c="$DOCUMENT":Va(a)&&(c="$SCOPE");return c}function $a(b,a){if("undefined"===typeof b)return t;Y(a)||(a=a?2:null);return JSON.stringify(b,Hd,a)}function qc(b){return C(b)?JSON.parse(b):b}function wa(b){b=A(b).clone();try{b.empty()}catch(a){}var c=A("<div>").append(b).html();try{return b[0].nodeType===pb?z(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+z(b)})}catch(d){return z(c)}}function rc(b){try{return decodeURIComponent(b)}catch(a){}}
function sc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=rc(c[0]),y(d)&&(b=y(c[1])?rc(c[1]):!0,tc.call(a,d)?H(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Pb(b){var a=[];r(b,function(b,d){H(b)?r(b,function(b){a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))}):a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))});return a.length?a.join("&"):""}function qb(b){return Ea(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ea(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Id(b,a){var c,d,e=rb.length;b=A(b);for(d=0;d<e;++d)if(c=rb[d]+a,C(c=b.attr(c)))return c;return null}function Jd(b,a){var c,d,e={};r(rb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});r(rb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Id(c,"strict-di"),
a(c,d?[d]:[],e))}function uc(b,a,c){J(c)||(c={});c=w({strictDi:!1},c);var d=function(){b=A(b);if(b.injector()){var d=b[0]===W?"document":wa(b);throw Ja("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=ab(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;Q&&e.test(Q.name)&&(c.debugInfoEnabled=!0,Q.name=Q.name.replace(e,""));if(Q&&!f.test(Q.name))return d();Q.name=Q.name.replace(f,"");ca.resumeBootstrap=function(b){r(b,function(b){a.push(b)});return d()};G(ca.resumeDeferredBootstrap)&&ca.resumeDeferredBootstrap()}function Kd(){Q.name="NG_ENABLE_DEBUG_INFO!"+Q.name;Q.location.reload()}function Ld(b){b=ca.element(b).injector();if(!b)throw Ja("test");return b.get("$$testability")}
function vc(b,a){a=a||"_";return b.replace(Md,function(b,d){return(d?a:"")+b.toLowerCase()})}function Nd(){var b;wc||((ta=Q.jQuery)&&ta.fn.on?(A=ta,w(ta.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),b=ta.cleanData,ta.cleanData=function(a){var c;if(Qb)Qb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=ta._data(e,"events"))&&c.$destroy&&ta(e).triggerHandler("$destroy");b(a)}):A=T,ca.element=A,wc=!0)}function Rb(b,a,c){if(!b)throw Ja("areq",
a||"?",c||"required");return b}function sb(b,a,c){c&&H(b)&&(b=b[b.length-1]);Rb(G(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function La(b,a){if("hasOwnProperty"===b)throw Ja("badname",a);}function xc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&G(b)?pc(e,b):b}function tb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return A(c)}function ia(){return Object.create(null)}
function Od(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=R("$injector"),d=R("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||R;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return u}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],q=a("$injector","invoke","push",d),u={_invokeQueue:b,_configBlocks:d,
_runBlocks:e,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:q,run:function(a){e.push(a);return this}};h&&q(h);return u})}})}function Pd(b){w(b,{bootstrap:uc,copy:Da,extend:w,equals:ha,
element:A,forEach:r,injector:ab,noop:E,bind:pc,toJson:$a,fromJson:qc,identity:ra,isUndefined:x,isDefined:y,isString:C,isFunction:G,isObject:J,isNumber:Y,isElement:oc,isArray:H,version:Qd,isDate:ga,lowercase:z,uppercase:ub,callbacks:{counter:0},getTestability:Ld,$$minErr:R,$$csp:bb,reloadWithDebugInfo:Kd});cb=Od(Q);try{cb("ngLocale")}catch(a){cb("ngLocale",[]).provider("$locale",Rd)}cb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Sd});a.provider("$compile",yc).directive({a:Td,
input:zc,textarea:zc,form:Ud,script:Vd,select:Wd,style:Xd,option:Yd,ngBind:Zd,ngBindHtml:$d,ngBindTemplate:ae,ngClass:be,ngClassEven:ce,ngClassOdd:de,ngCloak:ee,ngController:fe,ngForm:ge,ngHide:he,ngIf:ie,ngInclude:je,ngInit:ke,ngNonBindable:le,ngPluralize:me,ngRepeat:ne,ngShow:oe,ngStyle:pe,ngSwitch:qe,ngSwitchWhen:re,ngSwitchDefault:se,ngOptions:te,ngTransclude:ue,ngModel:ve,ngList:we,ngChange:xe,pattern:Ac,ngPattern:Ac,required:Bc,ngRequired:Bc,minlength:Cc,ngMinlength:Cc,maxlength:Dc,ngMaxlength:Dc,
ngValue:ye,ngModelOptions:ze}).directive({ngInclude:Ae}).directive(vb).directive(Ec);a.provider({$anchorScroll:Be,$animate:Ce,$browser:De,$cacheFactory:Ee,$controller:Fe,$document:Ge,$exceptionHandler:He,$filter:Fc,$interpolate:Ie,$interval:Je,$http:Ke,$httpBackend:Le,$location:Me,$log:Ne,$parse:Oe,$rootScope:Pe,$q:Qe,$$q:Re,$sce:Se,$sceDelegate:Te,$sniffer:Ue,$templateCache:Ve,$templateRequest:We,$$testability:Xe,$timeout:Ye,$window:Ze,$$rAF:$e,$$asyncCallback:af,$$jqLite:bf})}])}function db(b){return b.replace(cf,
function(a,b,d,e){return e?d.toUpperCase():d}).replace(df,"Moz$1")}function Gc(b){b=b.nodeType;return b===qa||!b||9===b}function Hc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Sb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(ef.exec(b)||["",""])[1].toLowerCase();d=ja[d]||ja._default;c.innerHTML=d[1]+b.replace(ff,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Ya(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});
return e}function T(b){if(b instanceof T)return b;var a;C(b)&&(b=N(b),a=!0);if(!(this instanceof T)){if(a&&"<"!=b.charAt(0))throw Tb("nosel");return new T(b)}if(a){a=W;var c;b=(c=gf.exec(b))?[a.createElement(c[1])]:(c=Hc(b,a))?c.childNodes:[]}Ic(this,b)}function Ub(b){return b.cloneNode(!0)}function wb(b,a){a||xb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)xb(c[d])}function Jc(b,a,c,d){if(y(d))throw Tb("offargs");var e=(d=yb(b))&&d.events,f=d&&d.handle;if(f)if(a)r(a.split(" "),
function(a){if(y(c)){var d=e[a];Xa(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function xb(b,a){var c=b.ng339,d=c&&zb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Jc(b)),delete zb[c],b.ng339=t))}function yb(b,a){var c=b.ng339,c=c&&zb[c];a&&!c&&(b.ng339=c=++hf,c=zb[c]={events:{},data:{},handle:t});return c}function Vb(b,a,c){if(Gc(b)){var d=y(c),e=!d&&a&&!J(a),
f=!a;b=(b=yb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];w(b,a)}}}function Ab(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Bb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",N((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+N(a)+" "," ")))})}function Cb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");
r(a.split(" "),function(a){a=N(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",N(c))}}function Ic(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Kc(b,a){return Db(b,"$"+(a||"ngController")+"Controller")}function Db(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=H(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=A.data(b,a[d]))!==t)return c;b=b.parentNode||
11===b.nodeType&&b.host}}function Lc(b){for(wb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Mc(b,a){a||wb(b);var c=b.parentNode;c&&c.removeChild(b)}function jf(b,a){a=a||Q;if("complete"===a.document.readyState)a.setTimeout(b);else A(a).on("load",b)}function Nc(b,a){var c=Eb[a.toLowerCase()];return c&&Oc[va(b)]&&c}function kf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Pc[a]}function lf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=
a[e||c.type],g=f?f.length:0;if(g){if(x(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=sa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function bf(){this.$get=function(){return w(T,{hasClass:function(b,a){b.attr&&(b=b[0]);
return Ab(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return Cb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return Bb(b,a)}})}}function Ma(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Fd)():c+":"+b}function eb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function mf(b){return(b=b.toString().replace(Qc,"").match(Rc))?"function("+(b[1]||"").replace(/[\s\r\n]+/,
" ")+")":"fn"}function ab(b,a){function c(a){return function(b,c){if(J(b))r(b,mc(a));else return a(b,c)}}function d(a,b){La(a,"service");if(G(b)||H(b))b=q.instantiate(b);if(!b.$get)throw Fa("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=s.invoke(b,this);if(x(c))throw Fa("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,
e[2])}}if(!n.get(a)){n.put(a,!0);try{C(a)?(c=cb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):G(a)?b.push(q.invoke(a)):H(a)?b.push(q.invoke(a)):sb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Fa("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Fa("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),
b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var k=[],h=ab.$$annotate(b,a,g),l,q,p;q=0;for(l=h.length;q<l;q++){p=h[q];if("string"!==typeof p)throw Fa("itkn",p);k.push(f&&f.hasOwnProperty(p)?f[p]:d(p,g))}H(b)&&(b=b[l]);return b.apply(c,k)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((H(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return J(a)||G(a)?a:d},get:d,annotate:ab.$$annotate,has:function(a){return p.hasOwnProperty(a+
"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],n=new eb([],!0),p={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ea(b),!1)}),constant:c(function(a,b){La(a,"constant");p[a]=b;u[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},q=p.$injector=h(p,function(a,b){ca.isString(b)&&k.push(b);
throw Fa("unpr",k.join(" <- "));}),u={},s=u.$injector=h(u,function(a,b){var c=q.get(a+"Provider",b);return s.invoke(c.$get,c,t,a)});r(g(b),function(a){s.invoke(a||E)});return s}function Be(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===va(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;G(c)?c=c():oc(c)?(c=c[0],c="fixed"!==
a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Y(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||jf(function(){d.$evalAsync(g)})});return g}]}function af(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:
function(b){return a(b,0,!1)}}]}function nf(b,a,c,d){function e(a){try{a.apply(null,Za.call(arguments,1))}finally{if(m--,0===m)for(;F.length;)try{F.pop()()}catch(b){c.error(b)}}}function f(a,b){(function da(){r(Z,function(a){a()});L=b(da,a)})()}function g(){h();l()}function h(){a:{try{B=u.state;break a}catch(a){}B=void 0}B=x(B)?null:B;ha(B,O)&&(B=O);O=B}function l(){if(D!==n.url()||I!==B)D=n.url(),I=B,r(X,function(a){a(n.url(),B)})}function k(a){try{return decodeURIComponent(a)}catch(b){return a}}
var n=this,p=a[0],q=b.location,u=b.history,s=b.setTimeout,M=b.clearTimeout,v={};n.isMock=!1;var m=0,F=[];n.$$completeOutstandingRequest=e;n.$$incOutstandingRequestCount=function(){m++};n.notifyWhenNoOutstandingRequests=function(a){r(Z,function(a){a()});0===m?a():F.push(a)};var Z=[],L;n.addPollFn=function(a){x(L)&&f(100,s);Z.push(a);return a};var B,I,D=q.href,S=a.find("base"),P=null;h();I=B;n.url=function(a,c,e){x(e)&&(e=null);q!==b.location&&(q=b.location);u!==b.history&&(u=b.history);if(a){var f=
I===e;if(D===a&&(!d.history||f))return n;var g=D&&Ga(D)===Ga(a);D=a;I=e;!d.history||g&&f?(g||(P=a),c?q.replace(a):g?(c=q,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):q.href=a):(u[c?"replaceState":"pushState"](e,"",a),h(),I=B);return n}return P||q.href.replace(/%27/g,"'")};n.state=function(){return B};var X=[],ba=!1,O=null;n.onUrlChange=function(a){if(!ba){if(d.history)A(b).on("popstate",g);A(b).on("hashchange",g);ba=!0}X.push(a);return a};n.$$checkUrlChange=l;n.baseHref=function(){var a=S.attr("href");
return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var fa={},y="",ka=n.baseHref();n.cookies=function(a,b){var d,e,f,g;if(a)b===t?p.cookie=encodeURIComponent(a)+"=;path="+ka+";expires=Thu, 01 Jan 1970 00:00:00 GMT":C(b)&&(d=(p.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+ka).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(p.cookie!==y)for(y=p.cookie,d=y.split("; "),fa={},f=0;f<d.length;f++)e=d[f],g=
e.indexOf("="),0<g&&(a=k(e.substring(0,g)),fa[a]===t&&(fa[a]=k(e.substring(g+1))));return fa}};n.defer=function(a,b){var c;m++;c=s(function(){delete v[c];e(a)},b||0);v[c]=!0;return c};n.defer.cancel=function(a){return v[a]?(delete v[a],M(a),e(E),!0):!1}}function De(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new nf(b,d,a,c)}]}function Ee(){this.$get=function(){function b(b,d){function e(a){a!=p&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=
b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw R("$cacheFactory")("iid",b);var g=0,h=w({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,n={},p=null,q=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}if(!x(b))return a in l||g++,l[a]=b,g>k&&this.remove(q.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==p&&(p=b.p);b==q&&(q=b.n);f(b.n,b.p);delete n[a]}delete l[a];
g--},removeAll:function(){l={};g=0;n={};p=q=null},destroy:function(){n=h=l=null;delete a[b]},info:function(){return w({},h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Ve(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function yc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};r(a,function(a,e){var f=a.match(c);if(!f)throw la("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===
f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d={},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Gd("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function p(a,e){La(a,"directive");C(a)?(Rb(e,"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];r(d[a],function(d,g){try{var h=b.invoke(d);G(h)?h={compile:ea(h)}:!h.compile&&h.link&&
(h.compile=ea(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";J(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(k){e(k)}});return f}])),d[a].push(e)):r(a,mc(p));return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};
var k=!0;this.debugInfoEnabled=function(a){return y(a)?(k=a,this):k};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,s,M,v,m,F,Z,L,B){function I(a,b){try{a.addClass(b)}catch(c){}}function D(a,b,c,d,e){a instanceof A||(a=A(a));r(a,function(b,c){b.nodeType==pb&&b.nodeValue.match(/\S+/)&&(a[c]=A(b).wrap("<span></span>").parent()[0])});var f=S(a,b,a,c,d,e);D.$$addScopeClass(a);
var g=null;return function(b,c,d){Rb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==va(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?A(Xb(g,A("<div>").append(a).html())):c?Ka.clone.call(a):a;if(h)for(var k in h)d.data("$"+k+"Controller",h[k].instance);D.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function S(a,b,c,d,e,f){function g(a,
c,d,e){var f,k,l,q,p,s,M;if(m)for(M=Array(c.length),q=0;q<h.length;q+=3)f=h[q],M[f]=c[f];else M=c;q=0;for(p=h.length;q<p;)k=M[h[q++]],c=h[q++],f=h[q++],c?(c.scope?(l=a.$new(),D.$$addScopeInfo(A(k),l)):l=a,s=c.transcludeOnThisElement?P(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?P(a,b):null,c(f,l,k,d,s)):f&&f(a,k.childNodes,t,e)}for(var h=[],k,l,q,p,m,s=0;s<a.length;s++){k=new Yb;l=X(a[s],[],k,0===s?d:t,e);(f=l.length?fa(l,a[s],k,b,c,null,[],[],f):null)&&
f.scope&&D.$$addScopeClass(k.$$element);k=f&&f.terminal||!(q=a[s].childNodes)||!q.length?null:S(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(s,f,k),p=!0,m=m||f;f=null}return p?g:null}function P(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function X(a,b,c,d,g){var h=c.$attr,k;switch(a.nodeType){case qa:ka(b,xa(va(a)),"E",d,g);for(var l,
q,p,m=a.attributes,s=0,M=m&&m.length;s<M;s++){var u=!1,L=!1;l=m[s];k=l.name;q=N(l.value);l=xa(k);if(p=U.test(l))k=k.replace(Sc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var B=l.replace(/(Start|End)$/,"");x(B)&&l===B+"Start"&&(u=k,L=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=xa(k.toLowerCase());h[l]=k;if(p||!c.hasOwnProperty(l))c[l]=q,Nc(a,l)&&(c[l]=!0);Oa(a,b,q,l,p);ka(b,l,"A",d,g,u,L)}a=a.className;J(a)&&(a=a.animVal);if(C(a)&&""!==a)for(;k=f.exec(a);)l=xa(k[2]),
ka(b,l,"C",d,g)&&(c[l]=N(k[3])),a=a.substr(k.index+k[0].length);break;case pb:za(b,a.nodeValue);break;case 8:try{if(k=e.exec(a.nodeValue))l=xa(k[1]),ka(b,l,"M",d,g)&&(c[l]=N(k[2]))}catch(v){}}b.sort(da);return b}function ba(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw la("uterdir",b,c);a.nodeType==qa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return A(d)}function O(a,b,c){return function(d,e,f,g,h){e=ba(e[0],
b,c);return a(d,e,f,g,h)}}function fa(a,d,e,f,g,k,l,p,m){function s(a,b,c,d){if(a){c&&(a=O(a,c,d));a.require=K.require;a.directiveName=da;if(P===K||K.$$isolateScope)a=Y(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=O(b,c,d));b.require=K.require;b.directiveName=da;if(P===K||K.$$isolateScope)b=Y(b,{isolateScope:!0});p.push(b)}}function L(a,b,c,d){var e,f="data",g=!1,k=c,l;if(C(b)){l=b.match(h);b=b.substring(l[0].length);l[3]&&(l[1]?l[3]=null:l[1]=l[3]);"^"===l[1]?f="inheritedData":"^^"===l[1]&&(f="inheritedData",
k=c.parent());"?"===l[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||k[f]("$"+b+"Controller");if(!e&&!g)throw la("ctreq",b,a);return e||null}H(b)&&(e=[],r(b,function(b){e.push(L(a,b,c,d))}));return e}function B(a,c,f,g,h){function k(a,b,c){var d;Va(a)||(c=b,b=a,a=t);E&&(d=F);c||(c=E?X.parent():X);return h(a,b,d,c,Wb)}var m,s,u,I,F,gb,X,O;d===f?(O=e,X=e.$$element):(X=A(f),O=new Yb(X,e));P&&(I=c.$new(!0));h&&(gb=k,gb.$$boundTransclude=h);S&&(Z={},F={},r(S,function(a){var b={$scope:a===
P||a.$$isolateScope?I:c,$element:X,$attrs:O,$transclude:gb};u=a.controller;"@"==u&&(u=O[a.name]);b=v(u,b,!0,a.controllerAs);F[a.name]=b;E||X.data("$"+a.name+"Controller",b.instance);Z[a.name]=b}));if(P){D.$$addScopeInfo(X,I,!0,!(ma&&(ma===P||ma===P.$$originalDirective)));D.$$addScopeClass(X,!0);g=Z&&Z[P.name];var ba=I;g&&g.identifier&&!0===P.bindToController&&(ba=g.instance);r(I.$$isolateBindings=P.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,k,l;switch(a.mode){case "@":O.$observe(e,
function(a){ba[d]=a});O.$$observers[e].$$scope=c;O[e]&&(ba[d]=b(O[e])(c));break;case "=":if(f&&!O[e])break;h=M(O[e]);l=h.literal?ha:function(a,b){return a===b||a!==a&&b!==b};k=h.assign||function(){g=ba[d]=h(c);throw la("nonassign",O[e],P.name);};g=ba[d]=h(c);f=function(a){l(a,ba[d])||(l(a,g)?k(c,a=ba[d]):ba[d]=a);return g=a};f.$stateful=!0;f=a.collection?c.$watchCollection(O[e],f):c.$watch(M(O[e],f),null,h.literal);I.$on("$destroy",f);break;case "&":h=M(O[e]),ba[d]=function(a){return h(c,a)}}})}Z&&
(r(Z,function(a){a()}),Z=null);g=0;for(m=l.length;g<m;g++)s=l[g],$(s,s.isolateScope?I:c,X,O,s.require&&L(s.directiveName,s.require,X,F),gb);var Wb=c;P&&(P.template||null===P.templateUrl)&&(Wb=I);a&&a(Wb,f.childNodes,t,h);for(g=p.length-1;0<=g;g--)s=p[g],$(s,s.isolateScope?I:c,X,O,s.require&&L(s.directiveName,s.require,X,F),gb)}m=m||{};for(var I=-Number.MAX_VALUE,F,S=m.controllerDirectives,Z,P=m.newIsolateScopeDirective,ma=m.templateDirective,fa=m.nonTlbTranscludeDirective,ka=!1,x=!1,E=m.hasElementTranscludeDirective,
w=e.$$element=A(d),K,da,V,fb=f,za,z=0,Q=a.length;z<Q;z++){K=a[z];var Oa=K.$$start,U=K.$$end;Oa&&(w=ba(d,Oa,U));V=t;if(I>K.priority)break;if(V=K.scope)K.templateUrl||(J(V)?(Na("new/isolated scope",P||F,K,w),P=K):Na("new/isolated scope",P,K,w)),F=F||K;da=K.name;!K.templateUrl&&K.controller&&(V=K.controller,S=S||{},Na("'"+da+"' controller",S[da],K,w),S[da]=K);if(V=K.transclude)ka=!0,K.$$tlb||(Na("transclusion",fa,K,w),fa=K),"element"==V?(E=!0,I=K.priority,V=w,w=e.$$element=A(W.createComment(" "+da+": "+
e[da]+" ")),d=w[0],T(g,Za.call(V,0),d),fb=D(V,f,I,k&&k.name,{nonTlbTranscludeDirective:fa})):(V=A(Ub(d)).contents(),w.empty(),fb=D(V,f));if(K.template)if(x=!0,Na("template",ma,K,w),ma=K,V=G(K.template)?K.template(w,e):K.template,V=Tc(V),K.replace){k=K;V=Sb.test(V)?Uc(Xb(K.templateNamespace,N(V))):[];d=V[0];if(1!=V.length||d.nodeType!==qa)throw la("tplrt",da,"");T(g,w,d);Q={$attr:{}};V=X(d,[],Q);var aa=a.splice(z+1,a.length-(z+1));P&&y(V);a=a.concat(V).concat(aa);R(e,Q);Q=a.length}else w.html(V);if(K.templateUrl)x=
!0,Na("template",ma,K,w),ma=K,K.replace&&(k=K),B=of(a.splice(z,a.length-z),w,e,g,ka&&fb,l,p,{controllerDirectives:S,newIsolateScopeDirective:P,templateDirective:ma,nonTlbTranscludeDirective:fa}),Q=a.length;else if(K.compile)try{za=K.compile(w,e,fb),G(za)?s(null,za,Oa,U):za&&s(za.pre,za.post,Oa,U)}catch(pf){c(pf,wa(w))}K.terminal&&(B.terminal=!0,I=Math.max(I,K.priority))}B.scope=F&&!0===F.scope;B.transcludeOnThisElement=ka;B.elementTranscludeOnThisElement=E;B.templateOnThisElement=x;B.transclude=fb;
m.hasElementTranscludeDirective=E;return B}function y(a){for(var b=0,c=a.length;b<c;b++)a[b]=Ob(a[b],{$$isolateScope:!0})}function ka(b,e,f,g,h,k,l){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var q;e=a.get(e+"Directive");for(var m=0,s=e.length;m<s;m++)try{q=e[m],(g===t||g>q.priority)&&-1!=q.restrict.indexOf(f)&&(k&&(q=Ob(q,{$$start:k,$$end:l})),b.push(q),h=q)}catch(M){c(M)}}return h}function x(b){if(d.hasOwnProperty(b))for(var c=a.get(b+"Directive"),e=0,f=c.length;e<f;e++)if(b=c[e],b.multiElement)return!0;
return!1}function R(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(I(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function of(a,b,c,d,e,f,g,h){var k=[],l,q,p=b[0],m=a.shift(),M=Ob(m,{templateUrl:null,transclude:null,
replace:null,$$originalDirective:m}),u=G(m.templateUrl)?m.templateUrl(b,c):m.templateUrl,L=m.templateNamespace;b.empty();s(Z.getTrustedResourceUrl(u)).then(function(s){var B,v;s=Tc(s);if(m.replace){s=Sb.test(s)?Uc(Xb(L,N(s))):[];B=s[0];if(1!=s.length||B.nodeType!==qa)throw la("tplrt",m.name,u);s={$attr:{}};T(d,b,B);var D=X(B,[],s);J(m.scope)&&y(D);a=D.concat(a);R(c,s)}else B=p,b.html(s);a.unshift(M);l=fa(a,B,c,e,b,m,f,g,h);r(d,function(a,c){a==B&&(d[c]=b[0])});for(q=S(b[0].childNodes,e);k.length;){s=
k.shift();v=k.shift();var F=k.shift(),O=k.shift(),D=b[0];if(!s.$$destroyed){if(v!==p){var Z=v.className;h.hasElementTranscludeDirective&&m.replace||(D=Ub(B));T(F,A(v),D);I(A(D),Z)}v=l.transcludeOnThisElement?P(s,l.transclude,O):O;l(q,s,D,d,v)}}k=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(k?k.push(b,c,d,a):(l.transcludeOnThisElement&&(a=P(b,l.transclude,e)),l(q,b,c,d,a)))}}function da(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Na(a,
b,c,d){if(b)throw la("multidir",b.name,c.name,a,wa(d));}function za(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&D.$$addBindingClass(a);return function(a,c){var e=c.parent();b||D.$$addBindingClass(e);D.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Xb(a,b){a=z(a||"html");switch(a){case "svg":case "math":var c=W.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}
function Q(a,b){if("srcdoc"==b)return Z.HTML;var c=va(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return Z.RESOURCE_URL}function Oa(a,c,d,e,f){var h=Q(a,e);f=g[e]||f;var k=b(d,!0,h,f);if(k){if("multiple"===e&&"select"===va(a))throw la("selmulti",wa(a));c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers={});if(l.test(e))throw la("nodomevents");var m=g[e];m!==d&&(k=m&&b(m,!0,h,f),d=m);k&&(g[e]=k(a),(c[e]||(c[e]=[])).$$inter=
!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function T(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=W.createDocumentFragment();a.appendChild(d);A(c).data(A(d).data());ta?(Qb=!0,ta.cleanData([d])):delete A.cache[d[A.expando]];
d=1;for(e=b.length;d<e;d++)f=b[d],A(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Y(a,b){return w(function(){return a.apply(null,arguments)},a,b)}function $(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,wa(d))}}var Yb=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Yb.prototype={$normalize:xa,$addClass:function(a){a&&0<a.length&&L.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&
L.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Vc(a,b);c&&c.length&&L.addClass(this.$$element,c);(c=Vc(b,a))&&c.length&&L.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Nc(f,a),h=kf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=vc(a,"-"));g=va(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=B(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g=
"",h=N(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var q=2*l,g=g+B(N(h[q]),!0),g=g+(" "+N(h[q+1]));h=N(h[2*l]).split(/\s/);g+=B(N(h[0]),!0);2===h.length&&(g+=" "+N(h[1]));this[a]=b=g}!1!==d&&(null===b||b===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&r(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ia()),e=d[a]||(d[a]=[]);e.push(b);
m.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Xa(e,b)}}};var V=b.startSymbol(),ma=b.endSymbol(),Tc="{{"==V||"}}"==ma?ra:function(a){return a.replace(/\{\{/g,V).replace(/}}/g,ma)},U=/^ngAttr[A-Z]/;D.$$addBindingInfo=k?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:E;D.$$addBindingClass=k?function(a){I(a,"ng-binding")}:E;D.$$addScopeInfo=k?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",
b)}:E;D.$$addScopeClass=k?function(a,b){I(a,b?"ng-isolate-scope":"ng-scope")}:E;return D}]}function xa(b){return db(b.replace(Sc,""))}function Vc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Uc(b){b=A(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&qf.call(b,a,1);return b}function Fe(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){La(a,
"controller");J(a)?w(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!J(a.$scope))throw R("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,l,k){var n,p,q;l=!0===l;k&&C(k)&&(q=k);if(C(g)){k=g.match(c);if(!k)throw rf("ctrlfmt",g);p=k[1];q=q||k[3];g=b.hasOwnProperty(p)?b[p]:xc(h.$scope,p,!0)||(a?xc(e,p,!0):t);sb(g,p,!0)}if(l)return l=(H(g)?g[g.length-1]:g).prototype,n=Object.create(l||null),q&&f(h,q,n,p||g.name),w(function(){d.invoke(g,
n,h,p);return n},{instance:n,identifier:q});n=d.instantiate(g,h,p);q&&f(h,q,n,p||g.name);return n}}]}function Ge(){this.$get=["$window",function(b){return A(b.document)}]}function He(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Zb(b,a){if(C(b)){var c=b.replace(sf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(Wc))||(d=(d=c.match(tf))&&uf[d[0]].test(c));d&&(b=qc(c))}}return b}function Xc(b){var a=ia(),c,d,e;if(!b)return a;r(b.split("\n"),
function(b){e=b.indexOf(":");c=z(N(b.substr(0,e)));d=N(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Yc(b){var a=J(b)?b:t;return function(c){a||(a=Xc(b));return c?(c=a[z(c)],void 0===c&&(c=null),c):a}}function Zc(b,a,c,d){if(G(d))return d(b,a,c);r(d,function(d){b=d(b,a,c)});return b}function Ke(){var b=this.defaults={transformResponse:[Zb],transformRequest:[function(a){return J(a)&&"[object File]"!==Ca.call(a)&&"[object Blob]"!==Ca.call(a)&&"[object FormData]"!==Ca.call(a)?$a(a):
a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:sa($b),put:sa($b),patch:sa($b)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=w({},a);b.data=a.data?Zc(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?
b:h.reject(b)}function d(a){var b,c={};r(a,function(a,d){G(a)?(b=a(),null!=b&&(c[d]=b)):c[d]=a});return c}if(!ca.isObject(a))throw R("$http")("badreq",a);var e=w({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},a);e.headers=function(a){var c=b.headers,e=w({},a.headers),f,g,c=w({},c.common,c[z(a.method)]);a:for(f in c){a=z(f);for(g in e)if(z(g)===a)continue a;e[f]=c[f]}return d(e)}(a);e.method=ub(e.method);var f=[function(a){var d=a.headers,e=Zc(a.data,Yc(d),
t,a.transformRequest);x(e)&&r(d,function(a,b){"content-type"===z(b)&&delete d[b]});x(a.withCredentials)&&!x(b.withCredentials)&&(a.withCredentials=b.withCredentials);return n(a,e).then(c,c)},t],g=h.when(e);for(r(u,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),g=g.then(a,k)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=
function(a){g.then(null,function(b){a(b.data,b.status,b.headers,e)});return g};return g}function n(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}I&&(200<=b&&300>b?I.put(P,[b,c,Xc(d),e]):I.remove(P));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?L.resolve:L.reject)({data:a,status:b,headers:Yc(d),config:c,statusText:e})}function n(a){m(a.data,a.status,sa(a.headers()),a.statusText)}function u(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,
1)}var L=h.defer(),B=L.promise,I,D,S=c.headers,P=p(c.url,c.params);k.pendingRequests.push(c);B.then(u,u);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(I=J(c.cache)?c.cache:J(b.cache)?b.cache:q);I&&(D=I.get(P),y(D)?D&&G(D.then)?D.then(n,n):H(D)?m(D[1],D[0],sa(D[2]),D[3]):m(D,200,{},"OK"):I.put(P,B));x(D)&&((D=$c(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:t)&&(S[c.xsrfHeaderName||b.xsrfHeaderName]=D),d(c.method,P,f,l,S,c.timeout,c.withCredentials,c.responseType));
return B}function p(a,b){if(!b)return a;var c=[];Ed(b,function(a,b){null===a||x(a)||(H(a)||(a=[a]),r(a,function(a){J(a)&&(a=ga(a)?a.toISOString():$a(a));c.push(Ea(b)+"="+Ea(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var q=f("$http"),u=[];r(c,function(a){u.unshift(C(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){r(arguments,function(a){k[a]=function(b,c){return k(w(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){k[a]=
function(b,c,d){return k(w(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function vf(){return new Q.XMLHttpRequest}function Le(){this.$get=["$browser","$window","$document",function(b,a,c){return wf(b,vf,b.defer,a.angular.callbacks,c[0])}]}function wf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);
f=null;var g=-1,u="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);c&&c(g,u)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,h,l,k,n,p,q,u){function s(){m&&m();F&&F.abort()}function M(a,d,e,f,g){L!==t&&c.cancel(L);m=F=null;a(d,e,f,g);b.$$completeOutstandingRequest(E)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==z(e)){var v="_"+(d.counter++).toString(36);d[v]=function(a){d[v].data=
a;d[v].called=!0};var m=f(h.replace("JSON_CALLBACK","angular.callbacks."+v),v,function(a,b){M(k,a,d[v].data,"",b);d[v]=E})}else{var F=a();F.open(e,h,!0);r(n,function(a,b){y(a)&&F.setRequestHeader(b,a)});F.onload=function(){var a=F.statusText||"",b="response"in F?F.response:F.responseText,c=1223===F.status?204:F.status;0===c&&(c=b?200:"file"==Aa(h).protocol?404:0);M(k,c,b,F.getAllResponseHeaders(),a)};e=function(){M(k,-1,null,null,"")};F.onerror=e;F.onabort=e;q&&(F.withCredentials=!0);if(u)try{F.responseType=
u}catch(Z){if("json"!==u)throw Z;}F.send(l||null)}if(0<p)var L=c(s,p);else p&&G(p.then)&&p.then(s)}}function Ie(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,u,s){function M(c){return c.replace(k,b).replace(n,a)}function v(a){try{var b=a;a=u?e.getTrusted(u,b):e.valueOf(b);var c;if(s&&!y(a))c=a;else if(null==a)c="";
else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=$a(a)}c=a}return c}catch(g){c=ac("interr",f,g.toString()),d(c)}}s=!!s;for(var m,F,r=0,L=[],B=[],I=f.length,D=[],S=[];r<I;)if(-1!=(m=f.indexOf(b,r))&&-1!=(F=f.indexOf(a,m+h)))r!==m&&D.push(M(f.substring(r,m))),r=f.substring(m+h,F),L.push(r),B.push(c(r,v)),r=F+l,S.push(D.length),D.push("");else{r!==I&&D.push(M(f.substring(r)));break}if(u&&1<D.length)throw ac("noconcat",f);if(!g||L.length){var P=function(a){for(var b=0,c=
L.length;b<c;b++){if(s&&x(a[b]))return;D[S[b]]=a[b]}return D.join("")};return w(function(a){var b=0,c=L.length,e=Array(c);try{for(;b<c;b++)e[b]=B[b](a);return P(e)}catch(g){a=ac("interr",f,g.toString()),d(a)}},{exp:f,expressions:L,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(B,function(c,e){var f=P(c);G(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,l=a.length,k=new RegExp(b.replace(/./g,f),"g"),n=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=
function(){return a};return g}]}function Je(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var n=a.setInterval,p=a.clearInterval,q=0,u=y(k)&&!k,s=(u?d:c).defer(),M=s.promise;l=y(l)?l:0;M.then(null,null,e);M.$$intervalId=n(function(){s.notify(q++);0<l&&q>=l&&(s.resolve(q),p(M.$$intervalId),delete f[M.$$intervalId]);u||b.$apply()},h);f[M.$$intervalId]=s;return M}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),
delete f[b.$$intervalId],!0):!1};return e}]}function Rd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(b){return 1===b?"one":"other"}}}}function bc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=qb(b[a]);
return b.join("/")}function ad(b,a){var c=Aa(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=aa(c.port)||xf[c.protocol]||null}function bd(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Aa(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=sc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ya(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ga(b){var a=b.indexOf("#");
return-1==a?b:b.substr(0,a)}function Fb(b){return b.replace(/(#.+)|#$/,"$1")}function cc(b){return b.substr(0,Ga(b).lastIndexOf("/")+1)}function dc(b,a){this.$$html5=!0;a=a||"";var c=cc(b);ad(b,this);this.$$parse=function(a){var b=ya(c,a);if(!C(b))throw Gb("ipthprfx",a,c);bd(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Pb(this.$$search),b=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=
function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=ya(b,d))!==t?(g=f,g=(f=ya(a,f))!==t?c+(ya("/",f)||f):b+g):(f=ya(c,d))!==t?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function ec(b,a){var c=cc(b);ad(b,this);this.$$parse=function(d){d=ya(b,d)||ya(c,d);var e;"#"===d.charAt(0)?(e=ya(a,d),x(e)&&(e=d)):e=this.$$html5?d:"";bd(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};
this.$$compose=function(){var c=Pb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ga(b)==Ga(a)?(this.$$parse(a),!0):!1}}function cd(b,a){this.$$html5=!0;ec.apply(this,arguments);var c=cc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ga(d)?f=d:(g=ya(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=
function(){var c=Pb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Hb(b){return function(){return this[b]}}function dd(b,a){return function(c){if(x(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Me(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return Wa(b)?(a.enabled=b,this):J(b)?(Wa(b.enabled)&&(a.enabled=
b.enabled),Wa(b.requireBase)&&(a.requireBase=b.requireBase),Wa(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,n;n=d.baseHref();var p=d.url(),q;if(a.enabled){if(!n&&a.requireBase)throw Gb("nobase");
q=p.substring(0,p.indexOf("/",p.indexOf("//")+2))+(n||"/");n=e.history?dc:cd}else q=Ga(p),n=ec;k=new n(q,"#"+b);k.$$parseLinkUrl(p,p);k.$$state=d.state();var u=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=A(b.target);"a"!==va(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");J(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Aa(h.animVal).href);
u.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});Fb(k.absUrl())!=Fb(p)&&d.url(k.absUrl(),!0);var s=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(s=!1,l(d,e)))});c.$$phase||c.$digest()});
c.$watch(function(){var a=Fb(d.url()),b=Fb(k.absUrl()),f=d.state(),g=k.$$replace,q=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(s||q)s=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(q&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function Ne(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof
Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||E;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,
arguments)}}()}}]}function ua(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw na("isecfld",a);return b}function oa(b,a){if(b){if(b.constructor===b)throw na("isecfn",a);if(b.window===b)throw na("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw na("isecdom",a);if(b===Object)throw na("isecobj",a);}return b}function fc(b){return b.constant}function hb(b,a,c,d,e){oa(b,e);oa(a,e);c=c.split(".");for(var f,
g=0;1<c.length;g++){f=ua(c.shift(),e);var h=0===g&&a&&a[f]||b[f];h||(h={},b[f]=h);b=oa(h,e)}f=ua(c.shift(),e);oa(b[f],e);return b[f]=d}function Pa(b){return"constructor"==b}function ed(b,a,c,d,e,f,g){ua(b,f);ua(a,f);ua(c,f);ua(d,f);ua(e,f);var h=function(a){return oa(a,f)},l=g||Pa(b)?h:ra,k=g||Pa(a)?h:ra,n=g||Pa(c)?h:ra,p=g||Pa(d)?h:ra,q=g||Pa(e)?h:ra;return function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=l(h[b]);if(!a)return h;if(null==h)return t;h=k(h[a]);if(!c)return h;if(null==
h)return t;h=n(h[c]);if(!d)return h;if(null==h)return t;h=p(h[d]);return e?null==h?t:h=q(h[e]):h}}function yf(b,a){return function(c,d){return b(c,d,oa,a)}}function zf(b,a,c){var d=a.expensiveChecks,e=d?Af:Bf,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=6>h?ed(g[0],g[1],g[2],g[3],g[4],c,d):function(a,b){var e=0,f;do f=ed(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=t,a=f;while(e<h);return f};else{var l="";d&&(l+="s = eso(s, fe);\nl = eso(l, fe);\n");var k=d;r(g,function(a,b){ua(a,
c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;if(d||Pa(a))e="eso("+e+", fe)",k=!0;l+="if(s == null) return undefined;\ns="+e+";\n"});l+="return s;";a=new Function("s","l","eso","fe",l);a.toString=ea(l);k&&(a=yf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,c,d){return hb(a,d,b,c,b)};return e[b]=f}function gc(b){return G(b.valueOf)?b.valueOf():Cf.call(b)}function Oe(){var b=ia(),a=ia();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,
c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=gc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var k=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,k)||(h=d(a),k=b&&
gc(b));return h},b,c)}for(var l=[],q=0,p=e.length;q<p;q++)l[q]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var k=e[c](a);if(b||(b=!g(k,l[c])))l[c]=k&&gc(k)}b&&(h=d(a));return h},b,c)}function l(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;G(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function k(a,b,c,d){function e(a){var b=!0;r(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},
function(a,c,d){g=a;G(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function n(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){G(b)&&b.apply(this,arguments);e()},c)}function p(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==k&&c!==l?function(c,d){var e=a(c,d);return b(e,c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return y(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=
[a]);return c}var q={csp:d.csp,expensiveChecks:!1},u={csp:d.csp,expensiveChecks:!0};return function(d,f,g){var m,r,t;switch(typeof d){case "string":t=d=d.trim();var L=g?a:b;m=L[t];m||(":"===d.charAt(0)&&":"===d.charAt(1)&&(r=!0,d=d.substring(2)),g=g?u:q,m=new hc(g),m=(new ib(m,c,g)).parse(d),m.constant?m.$$watchDelegate=n:r?(m=e(m),m.$$watchDelegate=m.literal?k:l):m.inputs&&(m.$$watchDelegate=h),L[t]=m);return p(m,f);case "function":return p(d,f);default:return p(E,f)}}}]}function Qe(){this.$get=
["$rootScope","$exceptionHandler",function(b,a){return fd(function(a){b.$evalAsync(a)},a)}]}function Re(){this.$get=["$browser","$exceptionHandler",function(b,a){return fd(function(a){b.defer(a)},a)}]}function fd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;
c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{G(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=R("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&
f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(J(b)||G(b))d=b&&b.then;G(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=
b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(G(b)?b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):
c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{G(c)&&(d=c())}catch(e){return l(e,!1)}return d&&G(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function u(a){if(!G(a))throw h("norslvr",a);if(!(this instanceof u))return new u(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};p.defer=function(){return new g};p.reject=function(a){var b=new g;
b.reject(a);return b.promise};p.when=n;p.all=function(a){var b=new g,c=0,d=H(a)?[]:{};r(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function $e(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=
c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Pe(){function b(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++ob;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=R("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=["$injector","$exceptionHandler",
"$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=!0}function n(){this.$id=++ob;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function p(a){if(v.$$phase)throw c("inprog",v.$$phase);v.$$phase=a}function q(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];
while(a=a.$parent)}function u(){}function s(){for(;t.length;)try{t.shift()()}catch(a){g(a)}e=null}function M(){null===e&&(e=l.defer(function(){v.$apply(s)}))}n.prototype={constructor:n,$new:function(a,c){var d;c=c||this;a?(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},
$watch:function(a,b,c){var e=h(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,c,e);var f=this.$$watchers,g={fn:b,last:u,get:e,exp:a,eq:!!c};d=null;G(b)||(g.fn=E);f||(f=this.$$watchers=[]);f.unshift(g);return function(){Xa(f,g);d=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],
function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!x(e)){if(J(e))if(Sa(e))for(f!==p&&(f=p,u=f.length=0,l++),a=e.length,u!==a&&(l++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==n&&(f=n={},u=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=
f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(u++,f[b]=g,l++));if(u>a)for(b in l++,f)e.hasOwnProperty(b)||(u--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,g,k=1<b.length,l=0,q=h(a,c),p=[],n={},m=!0,u=0;return this.$watch(q,function(){m?(m=!1,b(e,e,d)):b(e,g,d);if(k)if(J(e))if(Sa(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)tc.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,q,n,r=a,t,O=[],M,y;p("$digest");l.$$checkUrlChange();
this===v&&null!==e&&(l.defer.cancel(e),s());d=null;do{n=!1;for(t=this;m.length;){try{y=m.shift(),y.scope.$eval(y.expression,y.locals)}catch(w){g(w)}d=null}a:do{if(k=t.$$watchers)for(q=k.length;q--;)try{if(b=k[q])if((f=b.get(t))!==(h=b.last)&&!(b.eq?ha(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))n=!0,d=b,b.last=b.eq?Da(f,null):f,b.fn(f,h===u?f:h,t),5>r&&(M=4-r,O[M]||(O[M]=[]),O[M].push({msg:G(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===
d){n=!1;break a}}catch(A){g(A)}if(!(k=t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(k=t.$$nextSibling);)t=t.$parent}while(t=k);if((n||m.length)&&!r--)throw v.$$phase=null,c("infdig",a,O);}while(n||m.length);for(v.$$phase=null;F.length;)try{F.shift()()}catch(x){g(x)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==v){for(var b in this.$$listenerCount)q(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=
this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=E;this.$on=this.$watch=this.$watchGroup=function(){return E};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,
b){return h(a)(this,b)},$evalAsync:function(a,b){v.$$phase||m.length||l.defer(function(){m.length&&v.$digest()});m.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){F.push(a)},$apply:function(a){try{return p("$apply"),this.$eval(a)}catch(b){g(b)}finally{v.$$phase=null;try{v.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&t.push(b);M()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||
(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,q(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=Ya([h],arguments,1),l,q;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(q=d.length;l<q;l++)if(d[l])try{d[l].apply(null,k)}catch(p){g(p)}else d.splice(l,1),l--,q--;if(f)return h.currentScope=
null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=Ya([e],arguments,1),h,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,f)}catch(k){g(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=
c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var v=new n,m=v.$$asyncQueue=[],F=v.$$postDigestQueue=[],t=v.$$applyAsyncQueue=[];return v}]}function Sd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Aa(c).href;return""===f||f.match(e)?c:"unsafe:"+
f}}}function Df(b){if("self"===b)return b;if(C(b)){if(-1<b.indexOf("***"))throw Ba("iwcard",b);b=gd(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Ua(b))return new RegExp("^"+b.source+"$");throw Ba("imatcher");}function hd(b){var a=[];y(b)&&r(b,function(b){a.push(Df(b))});return a}function Te(){this.SCE_CONTEXTS=pa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=hd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&
(a=hd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?$c(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ba("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[pa.HTML]=e(g);h[pa.CSS]=e(g);h[pa.URL]=
e(g);h[pa.JS]=e(g);h[pa.RESOURCE_URL]=e(h[pa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ba("icontext",a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw Ba("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===t||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===pa.RESOURCE_URL){var g=Aa(e.toString()),p,q,u=!1;p=0;for(q=b.length;p<q;p++)if(d(b[p],g)){u=!0;break}if(u)for(p=
0,q=a.length;p<q;p++)if(d(a[p],g)){u=!1;break}if(u)return e;throw Ba("insecurl",e.toString());}if(c===pa.HTML)return f(e);throw Ba("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Se(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Qa)throw Ba("iequirks");var d=sa(pa);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=
d.getTrusted=function(a,b){return b},d.valueOf=ra);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;r(pa,function(a,b){var c=z(b);d[db("parse_as_"+c)]=function(b){return e(a,b)};d[db("get_trusted_"+c)]=function(b){return f(a,b)};d[db("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function Ue(){this.$get=["$window","$document",function(b,a){var c={},d=aa((/android (\d+)/.exec(z((b.navigator||
{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,n=!1;if(l){for(var p in l)if(k=h.exec(p)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);n=!!("animation"in l||g+"Animation"in l);!d||k&&n||(k=C(f.body.style.webkitTransition),n=C(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===
a&&11>=Qa)return!1;if(x(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:bb(),vendorPrefix:g,transitions:k,animations:n,android:d}}]}function We(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;var g=a.defaults&&a.defaults.transformResponse;H(g)?g=g.filter(function(a){return a!==Zb}):g===Zb&&(g=null);return a.get(e,{cache:b,transformResponse:g})["finally"](function(){d.totalPendingRequests--}).then(function(a){return a.data},
function(a){if(!f)throw la("tpload",e);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function Xe(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var d=ca.element(a).data("$binding");d&&r(d,function(d){c?(new RegExp("(^|\\s)"+gd(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],
h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Ye(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){var n=y(k)&&!k,p=(n?d:c).defer(),q=p.promise;l=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),e(a)}finally{delete g[q.$$timeoutId]}n||
b.$apply()},l);q.$$timeoutId=l;g[l]=p;return q}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b){Qa&&($.setAttribute("href",b),b=$.href);$.setAttribute("href",b);return{href:$.href,protocol:$.protocol?$.protocol.replace(/:$/,""):"",host:$.host,search:$.search?$.search.replace(/^\?/,""):"",hash:$.hash?$.hash.replace(/^#/,""):"",hostname:$.hostname,port:$.port,pathname:"/"===
$.pathname.charAt(0)?$.pathname:"/"+$.pathname}}function $c(b){b=C(b)?Aa(b):b;return b.protocol===id.protocol&&b.host===id.host}function Ze(){this.$get=ea(Q)}function Fc(b){function a(c,d){if(J(c)){var e={};r(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",jd);a("date",kd);a("filter",Ef);a("json",Ff);a("limitTo",Gf);a("lowercase",Hf);a("number",ld);a("orderBy",md);a("uppercase",
If)}function Ef(){return function(b,a,c){if(!H(b))return b;var d;switch(typeof a){case "function":break;case "boolean":case "number":case "string":d=!0;case "object":a=Jf(a,c,d);break;default:return b}return b.filter(a)}}function Jf(b,a,c){var d=J(b)&&"$"in b;!0===a?a=ha:G(a)||(a=function(a,b){if(J(a)||J(b))return!1;a=z(""+a);b=z(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!J(e)?Ha(e,b.$,a,!1):Ha(e,b,a,c)}}function Ha(b,a,c,d,e){var f=null!==b?typeof b:"null",g=null!==a?typeof a:
"null";if("string"===g&&"!"===a.charAt(0))return!Ha(b,a.substring(1),c,d);if(H(b))return b.some(function(b){return Ha(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&Ha(b[h],a,c,!0))return!0;return e?!1:Ha(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!G(e)&&!x(e)&&(f="$"===h,!Ha(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function jd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){x(d)&&(d=a.CURRENCY_SYM);x(e)&&
(e=a.PATTERNS[1].maxFrac);return null==b?b:nd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function ld(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:nd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function nd(b,a,c,d,e){if(!isFinite(b)||J(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",l=[],k=!1;if(-1!==g.indexOf("e")){var n=g.match(/([\d\.]+)e(-?)(\d+)/);n&&"-"==n[2]&&n[3]>e+1?b=0:(h=g,k=!0)}if(k)0<e&&1>b&&(h=b.toFixed(e),b=parseFloat(h));else{g=(g.split(od)[1]||
"").length;x(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(od),k=g[0],g=g[1]||"",p=0,q=a.lgSize,u=a.gSize;if(k.length>=q+u)for(p=k.length-q,n=0;n<p;n++)0===(p-n)%u&&0!==n&&(h+=c),h+=k.charAt(n);for(n=p;n<k.length;n++)0===(k.length-n)%q&&0!==n&&(h+=c),h+=k.charAt(n);for(;g.length<e;)g+="0";e&&"0"!==e&&(h+=d+g.substr(0,e))}0===b&&(f=!1);l.push(f?a.negPre:a.posPre,h,f?a.negSuf:a.posSuf);return l.join("")}function Ib(b,a,
c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function U(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Ib(e,a,d)}}function Jb(b,a){return function(c,d){var e=c["get"+b](),f=ub(a?"SHORT"+b:b);return d[f][e]}}function pd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function qd(b){return function(a){var c=pd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+
(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Ib(a,b)}}function ic(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function kd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=aa(b[9]+b[10]),g=aa(b[9]+b[11]));h.call(a,aa(b[1]),aa(b[2])-1,aa(b[3]));f=aa(b[4]||0)-f;g=aa(b[5]||0)-g;h=aa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;C(c)&&(c=Kf.test(c)?aa(c):a(c));Y(c)&&(c=new Date(c));if(!ga(c))return c;for(;e;)(k=Lf.exec(e))?(h=Ya(h,k,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));r(h,function(a){l=Mf[a];g+=l?l(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ff(){return function(b,a){x(a)&&(a=2);return $a(b,a)}}function Gf(){return function(b,
a){Y(b)&&(b=b.toString());return H(b)||C(b)?(a=Infinity===Math.abs(Number(a))?Number(a):aa(a))?0<a?b.slice(0,a):b.slice(a):C(b)?"":[]:b}}function md(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function g(a){return null===a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=
typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Sa(a))return a;c=H(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||ra;if(C(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(h,c);d=b(a);if(d.constant){var f=d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,b){return h(d(a),d(b))},c)});return Za.call(a).sort(e(function(a,
b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ia(b){G(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ea(b)}function rd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Kb;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(g,
function(a){a.$commitViewValue()})};f.$addControl=function(a){La(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(f.$pending,function(b,c){f.$setValidity(c,null,a)});r(f.$error,function(b,c){f.$setValidity(c,null,a)});r(f.$$success,function(b,c){f.$setValidity(c,null,a)});Xa(g,a)};sd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];
d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Xa(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Ra);d.addClass(b,Lb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Ra,Lb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(g,function(a){a.$setPristine()})};f.$setUntouched=function(){r(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");
f.$submitted=!0;h.$setSubmitted()}}function jc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function jb(b,a,c,d,e,f){var g=z(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=N(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",
l);else{var k,n=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||n(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",n)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Mb(b,a){return function(c,d){var e,f;if(ga(c))return c;if(C(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(Nf.test(c))return new Date(c);b.lastIndex=
0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function kb(b,a,c,d){return function(e,f,g,h,l,k,n){function p(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function q(a){return y(a)?ga(a)?a:c(a):t}td(e,f,g,h);
jb(e,f,g,h,l,k);var u=h&&h.$options&&h.$options.timezone,s;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,s),"UTC"===u&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):t});h.$formatters.push(function(a){if(a&&!ga(a))throw Nb("datefmt",a);if(p(a)){if((s=a)&&"UTC"===u){var b=6E4*s.getTimezoneOffset();s=new Date(s.getTime()+b)}return n("date")(a,d,u)}s=null;return""});if(y(g.min)||g.ngMin){var r;h.$validators.min=function(a){return!p(a)||x(r)||c(a)>=r};
g.$observe("min",function(a){r=q(a);h.$validate()})}if(y(g.max)||g.ngMax){var v;h.$validators.max=function(a){return!p(a)||x(v)||c(a)<=v};g.$observe("max",function(a){v=q(a);h.$validate()})}}}function td(b,a,c,d){(d.$$hasNativeValidators=J(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?t:b})}function ud(b,a,c,d,e){if(y(d)){b=b(d);if(!b.constant)throw R("ngModel")("constexpr",c,d);return b(a)}return e}function kc(b,a){b="ngClass"+b;return["$animate",
function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){if(!H(a)){if(C(a))return a.split(" ");if(J(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===
a||f.$index%2===a){var k=e(b||[]);if(!n){var u=l(k,1);h.$addClass(u)}else if(!ha(b,n)){var s=e(n),u=d(k,s),k=d(s,k),u=l(u,1),k=l(k,-1);u&&u.length&&c.addClass(g,u);k&&k.length&&c.removeClass(g,k)}}n=sa(b)}var n;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function sd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),
f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+vc(b,"-"):"";a(lb+b,!0===c);a(vd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[vd]=!(f[lb]=e.hasClass(lb));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),wd(d.$pending)&&(d.$pending=t));Wa(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(xd,
!0),d.$valid=d.$invalid=t,c("",null)):(a(xd,!1),d.$valid=wd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function wd(b){if(b)for(var a in b)return!1;return!0}var Of=/^\/(.+)\/([a-z]*)$/,z=function(b){return C(b)?b.toLowerCase():b},tc=Object.prototype.hasOwnProperty,ub=function(b){return C(b)?b.toUpperCase():b},Qa,A,ta,Za=[].slice,qf=[].splice,Pf=[].push,Ca=Object.prototype.toString,Ja=R("ng"),ca=Q.angular||
(Q.angular={}),cb,ob=0;Qa=W.documentMode;E.$inject=[];ra.$inject=[];var H=Array.isArray,N=function(b){return C(b)?b.trim():b},gd=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},bb=function(){if(y(bb.isActive_))return bb.isActive_;var b=!(!W.querySelector("[ng-csp]")&&!W.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return bb.isActive_=b},rb=["ng-","data-ng-","ng:","x-ng-"],Md=/[A-Z]/g,wc=!1,Qb,qa=1,pb=3,Qd={full:"1.3.15",major:1,
minor:3,dot:15,codeName:"locality-filtration"};T.expando="ng339";var zb=T.cache={},hf=1;T._data=function(b){return this.cache[b[this.expando]]||{}};var cf=/([\:\-\_]+(.))/g,df=/^moz([A-Z])/,Qf={mouseleave:"mouseout",mouseenter:"mouseover"},Tb=R("jqLite"),gf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Sb=/<|&#?\w+;/,ef=/<([\w:]+)/,ff=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>",
"</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;ja.th=ja.td;var Ka=T.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===W.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),T(Q).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=
b?A(this[b]):A(this[this.length+b])},length:0,push:Pf,sort:[].sort,splice:[].splice},Eb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){Eb[z(b)]=b});var Oc={};r("input select option textarea button form details".split(" "),function(b){Oc[b]=!0});var Pc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};r({data:Vb,removeData:xb},function(b,a){T[a]=b});r({data:Vb,inheritedData:Db,scope:function(b){return A.data(b,"$scope")||
Db(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return A.data(b,"$isolateScope")||A.data(b,"$isolateScopeNoTemplate")},controller:Kc,injector:function(b){return Db(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ab,css:function(b,a,c){a=db(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=z(a);if(Eb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||E).specified?
d:t;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(x(b)){var d=a.nodeType;return d===qa||d===pb?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(x(a)){if(b.multiple&&"select"===va(b)){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(x(a))return b.innerHTML;
wb(b,!0);b.innerHTML=a},empty:Lc},function(b,a){T.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Lc&&(2==b.length&&b!==Ab&&b!==Kc?a:d)===t){if(J(a)){for(e=0;e<g;e++)if(b===Vb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:xb,on:function a(c,d,e,f){if(y(f))throw Tb("onargs");if(Gc(c)){var g=yb(c,!0);f=g.events;var h=g.handle;h||(h=
g.handle=lf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Qf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Jc,one:function(a,c,d){a=A(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;wb(a);r(new T(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,
a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){a.nodeType===qa&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===qa||11===d){c=new T(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===qa){var d=a.firstChild;r(new T(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=A(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},
remove:Mc,detach:function(a){Mc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new T(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Cb,removeClass:Bb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;x(f)&&(f=!Ab(a,c));(f?Cb:Bb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ub,
triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=yb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:E,type:g,target:a},c.type&&(e=w(e,c)),c=sa(h),f=d?[e].concat(d):[e],r(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,
f)})}},function(a,c){T.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)x(g)?(g=a(this[h],c,e,f),y(g)&&(g=A(g))):Ic(g,a(this[h],c,e,f));return y(g)?g:this};T.prototype.bind=T.prototype.on;T.prototype.unbind=T.prototype.off});eb.prototype={put:function(a,c){this[Ma(a,this.nextUid)]=c},get:function(a){return this[Ma(a,this.nextUid)]},remove:function(a){var c=this[a=Ma(a,this.nextUid)];delete this[a];return c}};var Rc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Rf=/,/,Sf=/^\s*(_?)(\S+?)\1\s*$/,
Qc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Fa=R("$injector");ab.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw C(d)&&d||(d=a.name||mf(a)),Fa("strictdi",d);c=a.toString().replace(Qc,"");c=c.match(Rc);r(c[1].split(Rf),function(a){a.replace(Sf,function(a,c,d){e.push(d)})})}a.$inject=e}}else H(a)?(c=a.length-1,sb(a[c],"fn"),e=a.slice(0,c)):sb(a,"fn",!0);return e};var Tf=R("$animate"),Ce=["$provide",function(a){this.$$selectors={};this.register=function(c,
d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Tf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=ia();
r((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});r(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function l(){n||(n=a.defer(),d(function(){n.resolve();n=null}));return n.promise}function k(a,c){if(ca.isObject(c)){var d=w(c.from||{},c.to||{});a.css(d)}}var n;return{animate:function(a,c,d){k(a,{from:c,to:d});return l()},enter:function(a,c,d,e){k(a,
e);d?d.after(a):c.prepend(a);return l()},leave:function(a,c){k(a,c);a.remove();return l()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=A(a);c=C(c)?c:H(c)?c.join(" "):"";r(a,function(a){Cb(a,c)});k(a,d);return l()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=A(a);c=C(c)?c:H(c)?c.join(" "):"";r(a,function(a){Bb(a,c)});k(a,d);return l()},setClass:function(a,
c,d,e){var k=this,l=!1;a=A(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=ca.extend(m.options||{},e)):(m={classes:{},options:e},l=!0);e=m.classes;c=H(c)?c:c.split(" ");d=H(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,
c);d&&this.$$removeClassImmediately(a,d);k(a,e);return l()},enabled:E,cancel:E}}]}],la=R("$compile");yc.$inject=["$provide","$$sanitizeUriProvider"];var Sc=/^((?:x|data)[\:\-_])/i,rf=R("$controller"),Wc="application/json",$b={"Content-Type":Wc+";charset=utf-8"},tf=/^\[|^\{(?!\{)/,uf={"[":/]$/,"{":/}$/},sf=/^\)\]\}',?\n/,ac=R("$interpolate"),Uf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,xf={http:80,https:443,ftp:21},Gb=R("$location"),Vf={$$html5:!1,$$replace:!1,absUrl:Hb("$$absUrl"),url:function(a){if(x(a))return this.$$url;
var c=Uf.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Hb("$$protocol"),host:Hb("$$host"),port:Hb("$$port"),path:dd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(C(a)||Y(a))a=a.toString(),this.$$search=sc(a);else if(J(a))a=Da(a,{}),r(a,function(c,e){null==c&&delete a[e]}),this.$$search=
a;else throw Gb("isrcharg");break;default:x(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};r([cd,ec,dc],function(a){a.prototype=Object.create(Vf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==dc||!this.$$html5)throw Gb("nostate");this.$$state=x(c)?null:c;return this}});var na=R("$parse"),Wf=Function.prototype.call,
Xf=Function.prototype.apply,Yf=Function.prototype.bind,mb=ia();r({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;mb[c]=a});mb["this"]=function(a){return a};mb["this"].sharedGetter=!0;var nb=w(ia(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?d+e:d:y(e)?e:t},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},
"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},
"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Zf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},hc=function(a){this.options=a};hc.prototype={constructor:hc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,
"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=nb[c],f=nb[d];nb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},
isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw na("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<
this.text.length;){var d=z(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=
this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):
d+=Zf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var ib=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};ib.ZERO=w(function(){return 0},{sharedGetter:!0,constant:!0});ib.prototype={constructor:ib,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);
a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier&&this.peek().text in mb?a=mb[this.consume().text]:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,
d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw na("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw na("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===
f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw na("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},unaryFn:function(a,c){var d=nb[a];return w(function(a,f){return d(a,f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,c,d,e){var f=nb[c];return w(function(c,e){return f(c,e,a,d)},{constant:a.constant&&
d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return zf(a,this.options,this.text)},constant:function(){var a=this.consume().value;return w(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,
d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());var f=[a].concat(d||[]);return w(function(f,h){var l=a(f,h);if(e){e[0]=l;for(l=d.length;l--;)e[l+1]=d[l](f,h);return c.apply(t,e)}return c(l)},{constant:!c.$stateful&&f.every(fc),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},
assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),w(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&(c=this.assignment(),this.consume(":"))){var d=this.assignment();return w(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},
logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){for(var a=this.equality(),c;c=this.expect("&&");)a=this.binaryFn(a,c.text,this.equality(),!0);return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a=this.binaryFn(a,c.text,this.relational());return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a=this.binaryFn(a,c.text,
this.additive());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(ib.ZERO,a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=
this.identifier();return w(function(d,e,f){d=f||a(d,e);return null==d?t:c(d)},{assign:function(d,e,f){var g=a(d,f);g||a.assign(d,g={},f);return c.assign(g,e)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return w(function(e,f){var g=a(e,f),h=d(e,f);ua(h,c);return g?oa(g[h],c):t},{assign:function(e,f,g){var h=ua(d(e,g),c),l=oa(a(e,g),c);l||a.assign(e,l={},g);return l[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());
while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var l=c?c(g,h):y(c)?t:g,k=a(g,h,l)||E;if(f)for(var n=d.length;n--;)f[n]=oa(d[n](g,h),e);oa(l,e);if(k){if(k.constructor===k)throw na("isecfn",e);if(k===Wf||k===Xf||k===Yf)throw na("isecff",e);}l=k.apply?k.apply(l,f):k(f[0],f[1],f[2],f[3],f[4]);f&&(f.length=0);return oa(l,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))
}this.consume("]");return w(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(fc),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))}this.consume("}");return w(function(d,f){for(var g={},h=0,l=c.length;h<l;h++)g[a[h]]=
c[h](d,f);return g},{literal:!0,constant:c.every(fc),inputs:c})}};var Bf=ia(),Af=ia(),Cf=Object.prototype.valueOf,Ba=R("$sce"),pa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},la=R("$compile"),$=W.createElement("a"),id=Aa(Q.location.href);Fc.$inject=["$provide"];jd.$inject=["$locale"];ld.$inject=["$locale"];var od=".",Mf={yyyy:U("FullYear",4),yy:U("FullYear",2,0,!0),y:U("FullYear",1),MMMM:Jb("Month"),MMM:Jb("Month",!0),MM:U("Month",2,1),M:U("Month",1,1),dd:U("Date",2),d:U("Date",
1),HH:U("Hours",2),H:U("Hours",1),hh:U("Hours",2,-12),h:U("Hours",1,-12),mm:U("Minutes",2),m:U("Minutes",1),ss:U("Seconds",2),s:U("Seconds",1),sss:U("Milliseconds",3),EEEE:Jb("Day"),EEE:Jb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Ib(Math[0<a?"floor":"ceil"](a/60),2)+Ib(Math.abs(a%60),2))},ww:qd(2),w:qd(1),G:ic,GG:ic,GGG:ic,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},Lf=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
Kf=/^\-?\d+$/;kd.$inject=["$locale"];var Hf=ea(z),If=ea(ub);md.$inject=["$parse"];var Td=ea({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===Ca.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),vb={};r(Eb,function(a,c){if("multiple"!=a){var d=xa("ng-"+c);vb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],
function(a){g.$set(c,!!a)})}}}}});r(Pc,function(a,c){vb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Of))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});r(["src","srcset","href"],function(a){var c=xa("ng-"+a);vb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ca.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",
g=null);f.$observe(c,function(c){c?(f.$set(h,c),Qa&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Kb={$addControl:E,$$renameControl:function(a,c){a.$name=c},$removeControl:E,$setValidity:E,$setDirty:E,$setPristine:E,$setSubmitted:E};rd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var yd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:rd,compile:function(d,e){d.addClass(Ra).addClass(lb);var f=e.name?"name":a&&e.ngForm?"ngForm":
!1;return{pre:function(a,d,e,k){if(!("action"in e)){var n=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",n,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",n,!1)},0,!1)})}var p=k.$$parentForm;f&&(hb(a,null,k.$name,k,k.$name),e.$observe(f,function(c){k.$name!==c&&(hb(a,null,k.$name,t,k.$name),p.$$renameControl(k,c),hb(a,null,k.$name,k,k.$name))}));d.on("$destroy",function(){p.$removeControl(k);
f&&hb(a,null,e[f],t,k.$name);w(k,Kb)})}}}}}]},Ud=yd(),ge=yd(!0),Nf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,$f=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,ag=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,bg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,zd=/^(\d{4})-(\d{2})-(\d{2})$/,Ad=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,lc=/^(\d{4})-W(\d\d)$/,Bd=/^(\d{4})-(\d\d)$/,
Cd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Dd={text:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);jc(e)},date:kb("date",zd,Mb(zd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":kb("datetimelocal",Ad,Mb(Ad,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:kb("time",Cd,Mb(Cd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:kb("week",lc,function(a,c){if(ga(a))return a;if(C(a)){lc.lastIndex=0;var d=lc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=pd(e),f=7*(f-1);c&&(d=c.getHours(),g=
c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:kb("month",Bd,Mb(Bd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){td(a,c,d,e);jb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:bg.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!Y(a))throw Nb("numfmt",a);a=a.toString()}return a});if(y(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||
x(h)||a>=h};d.$observe("min",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));h=Y(a)&&!isNaN(a)?a:t;e.$validate()})}if(y(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||x(l)||a<=l};d.$observe("max",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));l=Y(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);jc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||$f.test(d)}},email:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);jc(e);
e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||ag.test(d)}},radio:function(a,c,d,e){x(d.name)&&c.attr("name",++ob);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=ud(l,a,"ngTrueValue",d.ngTrueValue,!0),n=ud(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&
a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ha(a,k)});e.$parsers.push(function(a){return a?k:n})},hidden:E,button:E,submit:E,reset:E,file:E},zc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Dd[z(h.type)]||Dd.text)(f,g,h,l[0],c,a,d,e)}}}}],cg=/^(true|false|\d+)$/,ye=function(){return{restrict:"A",priority:100,compile:function(a,
c){return cg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},Zd=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],ae=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));
c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===t?"":a})}}}}],$d=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],xe=ea({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
be=kc("",!0),de=kc("Odd",0),ce=kc("Even",1),ee=Ia({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),fe=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Ec={},dg={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=xa("ng-"+a);Ec[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=
d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};dg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ie=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=W.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=
tb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],je=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(f,g){var h=g.ngInclude||g.src,l=g.onload||"",k=g.autoscroll;return function(f,g,q,r,s){var t=0,v,m,F,w=function(){m&&(m.remove(),m=null);v&&(v.$destroy(),v=null);F&&(d.leave(F).then(function(){m=null}),m=F,F=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=
function(){!y(k)||k&&!f.$eval(k)||c()},m=++t;e?(a(e,!0).then(function(a){if(m===t){var c=f.$new();r.template=a;a=s(c,function(a){w();d.enter(a,null,g).then(h)});v=c;F=a;v.$emit("$includeContentLoaded",e);f.$eval(l)}},function(){m===t&&(w(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(w(),r.template=null)})}}}}],Ae=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Hc(f.template,
W).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ke=Ia({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),we=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?N(f):f;e.$parsers.push(function(a){if(!x(a)){var c=[];a&&r(a.split(h),function(a){a&&c.push(g?N(a):a)});return c}});e.$formatters.push(function(a){return H(a)?
a.join(f):t});e.$isEmpty=function(a){return!a||!a.length}}}},lb="ng-valid",vd="ng-invalid",Ra="ng-pristine",Lb="ng-dirty",xd="ng-pending",Nb=new R("ngModel"),eg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,n){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=t;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;
this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=t;this.$name=n(d.name||"",!1)(a);var p=f(d.ngModel),q=p.assign,u=p,s=q,M=null,v,m=this;this.$$setOptions=function(a){if((m.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");u=function(a){var d=p(a);G(d)&&(d=c(a));return d};s=function(a,c){G(p(a))?g(a,{$$$p:m.$modelValue}):q(a,m.$modelValue)}}else if(!p.assign)throw Nb("nonassign",d.ngModel,wa(e));
};this.$render=E;this.$isEmpty=function(a){return x(a)||""===a||null===a||a!==a};var F=e.inheritedData("$formController")||Kb,w=0;sd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:F,$animate:g});this.$setPristine=function(){m.$dirty=!1;m.$pristine=!0;g.removeClass(e,Lb);g.addClass(e,Ra)};this.$setDirty=function(){m.$dirty=!0;m.$pristine=!1;g.removeClass(e,Ra);g.addClass(e,Lb);F.$setDirty()};this.$setUntouched=function(){m.$touched=!1;m.$untouched=!0;g.setClass(e,
"ng-untouched","ng-touched")};this.$setTouched=function(){m.$touched=!0;m.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(M);m.$viewValue=m.$$lastCommittedViewValue;m.$render()};this.$validate=function(){if(!Y(m.$modelValue)||!isNaN(m.$modelValue)){var a=m.$$rawModelValue,c=m.$valid,d=m.$modelValue,e=m.$options&&m.$options.allowInvalid;m.$$runValidators(a,m.$$lastCommittedViewValue,function(f){e||c===f||(m.$modelValue=f?a:t,m.$modelValue!==d&&m.$$writeModelToScope())})}};
this.$$runValidators=function(a,c,d){function e(){var d=!0;r(m.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(r(m.$asyncValidators,function(a,c){g(c,null)}),!1)}function f(){var d=[],e=!0;r(m.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!G(k.then))throw Nb("$asyncValidators",k);g(h,t);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},E):h(!0)}function g(a,c){l===w&&m.$setValidity(a,c)}function h(a){l===w&&d(a)}w++;var l=
w;(function(){var a=m.$$parserName||"parse";if(v===t)g(a,null);else return v||(r(m.$validators,function(a,c){g(c,null)}),r(m.$asyncValidators,function(a,c){g(c,null)})),g(a,v),v;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=m.$viewValue;h.cancel(M);if(m.$$lastCommittedViewValue!==a||""===a&&m.$$hasNativeValidators)m.$$lastCommittedViewValue=a,m.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=m.$$lastCommittedViewValue;if(v=
x(c)?t:!0)for(var d=0;d<m.$parsers.length;d++)if(c=m.$parsers[d](c),x(c)){v=!1;break}Y(m.$modelValue)&&isNaN(m.$modelValue)&&(m.$modelValue=u(a));var e=m.$modelValue,f=m.$options&&m.$options.allowInvalid;m.$$rawModelValue=c;f&&(m.$modelValue=c,m.$modelValue!==e&&m.$$writeModelToScope());m.$$runValidators(c,m.$$lastCommittedViewValue,function(a){f||(m.$modelValue=a?c:t,m.$modelValue!==e&&m.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,m.$modelValue);r(m.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};
this.$setViewValue=function(a,c){m.$viewValue=a;m.$options&&!m.$options.updateOnDefault||m.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=m.$options;e&&y(e.debounce)&&(e=e.debounce,Y(e)?d=e:Y(e[c])?d=e[c]:Y(e["default"])&&(d=e["default"]));h.cancel(M);d?M=h(function(){m.$commitViewValue()},d):l.$$phase?m.$commitViewValue():a.$apply(function(){m.$commitViewValue()})};a.$watch(function(){var c=u(a);if(c!==m.$modelValue){m.$modelValue=m.$$rawModelValue=c;v=t;for(var d=
m.$formatters,e=d.length,f=c;e--;)f=d[e](f);m.$viewValue!==f&&(m.$viewValue=m.$$lastCommittedViewValue=f,m.$render(),m.$$runValidators(c,f,E))}return c})}],ve=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:eg,priority:1,compile:function(c){c.addClass(Ra).addClass("ng-untouched").addClass(lb);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Kb;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,
a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],fg=/(\s+|^)default(\s+|$)/,ze=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==t?(this.$options.updateOnDefault=
!1,this.$options.updateOn=N(this.$options.updateOn.replace(fg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},le=Ia({terminal:!0,priority:1E3}),me=["$locale","$interpolate",function(a,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(f,g,h){function l(a){g.text(a||"")}var k=h.count,n=h.$attr.when&&g.attr(h.$attr.when),p=h.offset||0,q=f.$eval(n)||{},u={},n=c.startSymbol(),s=c.endSymbol(),t=n+k+"-"+p+s,v=ca.noop,m;r(h,function(a,c){var d=
e.exec(c);d&&(d=(d[1]?"-":"")+z(d[2]),q[d]=g.attr(h.$attr[c]))});r(q,function(a,e){u[e]=c(a.replace(d,t))});f.$watch(k,function(c){c=parseFloat(c);var d=isNaN(c);d||c in q||(c=a.pluralCat(c-p));c===m||d&&isNaN(m)||(v(),v=f.$watch(u[c],l),m=c)})}}}],ne=["$parse","$animate",function(a,c){var d=R("ngRepeat"),e=function(a,c,d,e,k,n,p){a[d]=e;k&&(a[k]=n);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",
priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=W.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var n=k[1],p=k[2],q=k[3],u=k[4],k=n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",n);var s=k[3]||k[1],y=k[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw d("badident",
q);var v,m,w,x,E={$id:Ma};u?v=a(u):(w=function(a,c){return Ma(c)},x=function(a){return a});return function(a,f,g,k,n){v&&(m=function(c,d,e){y&&(E[y]=c);E[s]=d;E.$index=e;return v(a,E)});var u=ia();a.$watchCollection(p,function(g){var k,p,v=f[0],D,E=ia(),G,H,L,S,J,C,z;q&&(a[q]=g);if(Sa(g))J=g,p=m||w;else{p=m||x;J=[];for(z in g)g.hasOwnProperty(z)&&"$"!=z.charAt(0)&&J.push(z);J.sort()}G=J.length;z=Array(G);for(k=0;k<G;k++)if(H=g===J?k:J[k],L=g[H],S=p(H,L,k),u[S])C=u[S],delete u[S],E[S]=C,z[k]=C;else{if(E[S])throw r(z,
function(a){a&&a.scope&&(u[a.id]=a)}),d("dupes",h,S,L);z[k]={id:S,scope:t,clone:t};E[S]=!0}for(D in u){C=u[D];S=tb(C.clone);c.leave(S);if(S[0].parentNode)for(k=0,p=S.length;k<p;k++)S[k].$$NG_REMOVED=!0;C.scope.$destroy()}for(k=0;k<G;k++)if(H=g===J?k:J[k],L=g[H],C=z[k],C.scope){D=v;do D=D.nextSibling;while(D&&D.$$NG_REMOVED);C.clone[0]!=D&&c.move(tb(C.clone),null,A(v));v=C.clone[C.clone.length-1];e(C.scope,k,s,L,y,H,G)}else n(function(a,d){C.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,
null,A(v));v=f;C.clone=a;E[C.id]=C;e(C.scope,k,s,L,y,H,G)});u=E})}}}}],oe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],he=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],pe=Ia(function(a,c,d){a.$watchCollection(d.ngStyle,
function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)})}),qe=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var s=tb(h[d].clone);k[d].$destroy();(l[d]=a.leave(s)).then(n(l,d))}h.length=0;k.length=0;(g=
f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=W.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],re=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),se=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,
link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),ue=Ia({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw R("ngTransclude")("orphan",wa(c));f(function(a){c.empty();c.append(a)})}}),Vd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],gg=R("ngOptions"),te=ea({restrict:"A",terminal:!0}),Wd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
e={$setViewValue:E};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},n=e,p;l.databound=d.ngModel;l.init=function(a,c,d){n=a;p=d};l.addOption=function(c,d){La(c,'"option value"');k[c]=!0;n.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],n.$viewValue===a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c=
"? "+Ma(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=E})}],link:function(e,g,h,l){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(C.parent()&&C.remove(),c.val(a),""===a&&v.prop("selected",!0)):x(a)&&v?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){C.parent()&&C.remove();d.$setViewValue(c.val())})})}function n(a,c,d){var e;
d.$render=function(){var a=new eb(d.$viewValue);r(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){ha(e,d.$viewValue)||(e=sa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(a,c,d){T[x]=d;G&&(T[G]=c);return a(e,T)}function k(a){var c;if(u)if(I&&H(a)){c=new eb([]);for(var d=0;d<a.length;d++)c.put(h(I,null,a[d]),!0)}else c=
new eb(a);else I&&(a=h(I,null,a));return function(d,e){var f;f=I?I:B?B:z;return u?y(c.remove(h(f,d,e))):a===h(f,d,e)}}function l(){m||(e.$$postDigest(p),m=!0)}function n(a,c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function p(){m=!1;var a={"":[]},c=[""],d,l,s,t,v;s=g.$viewValue;t=L(e)||[];var B=G?Object.keys(t).sort():t,x,A,H,z,O={};v=k(s);var N=!1,U,W;Q={};for(z=0;H=B.length,z<H;z++){x=z;if(G&&(x=B[z],"$"===x.charAt(0)))continue;A=t[x];d=h(J,x,A)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=v(x,A);N=N||d;A=h(C,x,A);
A=y(A)?A:"";W=I?I(e,T):G?B[z]:z;I&&(Q[W]=x);l.push({id:W,label:A,selected:d})}u||(w||null===s?a[""].unshift({id:"",label:"",selected:!N}):N||a[""].unshift({id:"?",label:"",selected:!0}));x=0;for(B=c.length;x<B;x++){d=c[x];l=a[d];R.length<=x?(s={element:E.clone().attr("label",d),label:l.label},t=[s],R.push(t),f.append(s.element)):(t=R[x],s=t[0],s.label!=d&&s.element.attr("label",s.label=d));N=null;z=0;for(H=l.length;z<H;z++)d=l[z],(v=t[z+1])?(N=v.element,v.label!==d.label&&(n(O,v.label,!1),n(O,d.label,
!0),N.text(v.label=d.label),N.prop("label",v.label)),v.id!==d.id&&N.val(v.id=d.id),N[0].selected!==d.selected&&(N.prop("selected",v.selected=d.selected),Qa&&N.prop("selected",v.selected))):(""===d.id&&w?U=w:(U=F.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),t.push(v={element:U,label:d.label,id:d.id,selected:d.selected}),n(O,d.label,!0),N?N.after(U):s.element.append(U),N=U);for(z++;t.length>z;)d=t.pop(),n(O,d.label,!1),d.element.remove()}for(;R.length>
x;){l=R.pop();for(z=1;z<l.length;++z)n(O,l[z].label,!1);l[0].element.remove()}r(O,function(a,c){0<a?q.addOption(c):0>a&&q.removeOption(c)})}var v;if(!(v=s.match(d)))throw gg("iexp",s,wa(f));var C=c(v[2]||v[1]),x=v[4]||v[6],A=/ as /.test(v[0])&&v[1],B=A?c(A):null,G=v[5],J=c(v[3]||""),z=c(v[2]?v[1]:x),L=c(v[7]),I=v[8]?c(v[8]):null,Q={},R=[[{element:f,label:""}]],T={};w&&(a(w)(e),w.removeClass("ng-scope"),w.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=L(e)||[],c;if(u)c=[],r(f.val(),
function(d){d=I?Q[d]:d;c.push("?"===d?t:""===d?null:h(B?B:z,d,a[d]))});else{var d=I?Q[f.val()]:f.val();c="?"===d?t:""===d?null:h(B?B:z,d,a[d])}g.$setViewValue(c);p()})});g.$render=p;e.$watchCollection(L,l);e.$watchCollection(function(){var a=L(e),c;if(a&&H(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(C,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(C,d,a[d]));return c},l);u&&e.$watchCollection(function(){return g.$modelValue},l)}if(l[1]){var q=l[0];l=l[1];var u=h.multiple,
s=h.ngOptions,w=!1,v,m=!1,F=A(W.createElement("option")),E=A(W.createElement("optgroup")),C=F.clone();h=0;for(var B=g.children(),G=B.length;h<G;h++)if(""===B[h].value){v=w=B.eq(h);break}q.init(l,w,C);u&&(l.$isEmpty=function(a){return!a||0===a.length});s?p(e,g,l):u?n(e,g,l):k(e,g,l,q)}}}}],Yd=["$interpolate",function(a){var c={addOption:E,removeOption:E};return{restrict:"E",priority:100,compile:function(d,e){if(x(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=
d.parent(),n=k.data("$selectController")||k.parent().data("$selectController");n&&n.databound||(n=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&n.removeOption(c);n.addOption(a,d)}):n.addOption(e.value,d);d.on("$destroy",function(){n.removeOption(e.value)})}}}}],Xd=ea({restrict:"E",terminal:!1}),Bc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},
Ac=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){C(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw R("ngPattern")("noregexp",g,a,wa(c));f=a||t;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||x(f)||f.test(a)}}}}},Dc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=aa(a);f=isNaN(a)?-1:a;e.$validate()});
e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Cc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=aa(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};Q.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Nd(),Pd(ca),A(W).ready(function(){Jd(W,uc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map


// d3.min.js
!function(){function n(n){return n&&(n.ownerDocument||n.document||n).documentElement}function t(n){return n&&(n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView)}function e(n,t){return t>n?-1:n>t?1:n>=t?0:0/0}function r(n){return null===n?0/0:+n}function u(n){return!isNaN(n)}function i(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)<0?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)>0?u=i:r=i+1}return r}}}function o(n){return n.length}function a(n){for(var t=1;n*t%1;)t*=10;return t}function c(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function l(){this._=Object.create(null)}function s(n){return(n+="")===pa||n[0]===va?va+n:n}function f(n){return(n+="")[0]===va?n.slice(1):n}function h(n){return s(n)in this._}function g(n){return(n=s(n))in this._&&delete this._[n]}function p(){var n=[];for(var t in this._)n.push(f(t));return n}function v(){var n=0;for(var t in this._)++n;return n}function d(){for(var n in this._)return!1;return!0}function m(){this._=Object.create(null)}function y(n){return n}function M(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function x(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e=0,r=da.length;r>e;++e){var u=da[e]+t;if(u in n)return u}}function b(){}function _(){}function w(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new l;return t.on=function(t,u){var i,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,i=e.indexOf(o)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function S(){ta.event.preventDefault()}function k(){for(var n,t=ta.event;n=t.sourceEvent;)t=n;return t}function E(n){for(var t=new _,e=0,r=arguments.length;++e<r;)t[arguments[e]]=w(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=ta.event;u.target=n,ta.event=u,t[u.type].apply(e,r)}finally{ta.event=i}}},t}function A(n){return ya(n,_a),n}function N(n){return"function"==typeof n?n:function(){return Ma(n,this)}}function C(n){return"function"==typeof n?n:function(){return xa(n,this)}}function z(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=ta.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?i:u}function q(n){return n.trim().replace(/\s+/g," ")}function L(n){return new RegExp("(?:^|\\s+)"+ta.requote(n)+"(?:\\s+|$)","g")}function T(n){return(n+"").trim().split(/^|\s+/)}function R(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=T(n).map(D);var u=n.length;return"function"==typeof t?r:e}function D(n){var t=L(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",q(u+" "+n))):e.setAttribute("class",q(u.replace(t," ")))}}function P(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function U(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function j(n){function t(){var t=this.ownerDocument,e=this.namespaceURI;return e?t.createElementNS(e,n):t.createElement(n)}function e(){return this.ownerDocument.createElementNS(n.space,n.local)}return"function"==typeof n?n:(n=ta.ns.qualify(n)).local?e:t}function F(){var n=this.parentNode;n&&n.removeChild(this)}function H(n){return{__data__:n}}function O(n){return function(){return ba(this,n)}}function I(n){return arguments.length||(n=e),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function Y(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],o=0,a=i.length;a>o;o++)(u=i[o])&&t(u,o,e);return n}function Z(n){return ya(n,Sa),n}function V(n){var t,e;return function(r,u,i){var o,a=n[i].update,c=a.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(o=a[t])&&++t<c;);return o}}function X(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function u(){var u=c(t,ra(arguments));r.call(this),this.addEventListener(n,this[o]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+ta.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),c=$;a>0&&(n=n.slice(0,a));var l=ka.get(n);return l&&(n=l,c=B),a?t?u:r:t?b:i}function $(n,t){return function(e){var r=ta.event;ta.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{ta.event=r}}}function B(n,t){var e=$(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function W(e){var r=".dragsuppress-"+ ++Aa,u="click"+r,i=ta.select(t(e)).on("touchmove"+r,S).on("dragstart"+r,S).on("selectstart"+r,S);if(null==Ea&&(Ea="onselectstart"in e?!1:x(e.style,"userSelect")),Ea){var o=n(e).style,a=o[Ea];o[Ea]="none"}return function(n){if(i.on(r,null),Ea&&(o[Ea]=a),n){var t=function(){i.on(u,null)};i.on(u,function(){S(),t()},!0),setTimeout(t,0)}}}function J(n,e){e.changedTouches&&(e=e.changedTouches[0]);var r=n.ownerSVGElement||n;if(r.createSVGPoint){var u=r.createSVGPoint();if(0>Na){var i=t(n);if(i.scrollX||i.scrollY){r=ta.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var o=r[0][0].getScreenCTM();Na=!(o.f||o.e),r.remove()}}return Na?(u.x=e.pageX,u.y=e.pageY):(u.x=e.clientX,u.y=e.clientY),u=u.matrixTransform(n.getScreenCTM().inverse()),[u.x,u.y]}var a=n.getBoundingClientRect();return[e.clientX-a.left-n.clientLeft,e.clientY-a.top-n.clientTop]}function G(){return ta.event.changedTouches[0].identifier}function K(n){return n>0?1:0>n?-1:0}function Q(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function nt(n){return n>1?0:-1>n?qa:Math.acos(n)}function tt(n){return n>1?Ra:-1>n?-Ra:Math.asin(n)}function et(n){return((n=Math.exp(n))-1/n)/2}function rt(n){return((n=Math.exp(n))+1/n)/2}function ut(n){return((n=Math.exp(2*n))-1)/(n+1)}function it(n){return(n=Math.sin(n/2))*n}function ot(){}function at(n,t,e){return this instanceof at?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof at?new at(n.h,n.s,n.l):bt(""+n,_t,at):new at(n,t,e)}function ct(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,i=2*e-o,new mt(u(n+120),u(n),u(n-120))}function lt(n,t,e){return this instanceof lt?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof lt?new lt(n.h,n.c,n.l):n instanceof ft?gt(n.l,n.a,n.b):gt((n=wt((n=ta.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new lt(n,t,e)}function st(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new ft(e,Math.cos(n*=Da)*t,Math.sin(n)*t)}function ft(n,t,e){return this instanceof ft?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof ft?new ft(n.l,n.a,n.b):n instanceof lt?st(n.h,n.c,n.l):wt((n=mt(n)).r,n.g,n.b):new ft(n,t,e)}function ht(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=pt(u)*Xa,r=pt(r)*$a,i=pt(i)*Ba,new mt(dt(3.2404542*u-1.5371385*r-.4985314*i),dt(-.969266*u+1.8760108*r+.041556*i),dt(.0556434*u-.2040259*r+1.0572252*i))}function gt(n,t,e){return n>0?new lt(Math.atan2(e,t)*Pa,Math.sqrt(t*t+e*e),n):new lt(0/0,0/0,n)}function pt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function vt(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function dt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function mt(n,t,e){return this instanceof mt?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof mt?new mt(n.r,n.g,n.b):bt(""+n,mt,ct):new mt(n,t,e)}function yt(n){return new mt(n>>16,n>>8&255,255&n)}function Mt(n){return yt(n)+""}function xt(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function bt(n,t,e){var r,u,i,o=0,a=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(kt(u[0]),kt(u[1]),kt(u[2]))}return(i=Ga.get(n.toLowerCase()))?t(i.r,i.g,i.b):(null==n||"#"!==n.charAt(0)||isNaN(i=parseInt(n.slice(1),16))||(4===n.length?(o=(3840&i)>>4,o=o>>4|o,a=240&i,a=a>>4|a,c=15&i,c=c<<4|c):7===n.length&&(o=(16711680&i)>>16,a=(65280&i)>>8,c=255&i)),t(o,a,c))}function _t(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-i,c=(o+i)/2;return a?(u=.5>c?a/(o+i):a/(2-o-i),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=0/0,u=c>0&&1>c?0:r),new at(r,u,c)}function wt(n,t,e){n=St(n),t=St(t),e=St(e);var r=vt((.4124564*n+.3575761*t+.1804375*e)/Xa),u=vt((.2126729*n+.7151522*t+.072175*e)/$a),i=vt((.0193339*n+.119192*t+.9503041*e)/Ba);return ft(116*u-16,500*(r-u),200*(u-i))}function St(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function kt(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function Et(n){return"function"==typeof n?n:function(){return n}}function At(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Nt(t,e,n,r)}}function Nt(n,t,e,r){function u(){var n,t=c.status;if(!t&&zt(c)||t>=200&&300>t||304===t){try{n=e.call(i,c)}catch(r){return void o.error.call(i,r)}o.load.call(i,n)}else o.error.call(i,c)}var i={},o=ta.dispatch("beforesend","progress","load","error"),a={},c=new XMLHttpRequest,l=null;return!this.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=ta.event;ta.event=n;try{o.progress.call(i,c)}finally{ta.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(l=n,i):l},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(ra(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var s in a)c.setRequestHeader(s,a[s]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=l&&(c.responseType=l),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),o.beforesend.call(i,c),c.send(null==r?null:r),i},i.abort=function(){return c.abort(),i},ta.rebind(i,o,"on"),null==r?i:i.get(Ct(r))}function Ct(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function zt(n){var t=n.responseType;return t&&"text"!==t?n.response:n.responseText}function qt(){var n=Lt(),t=Tt()-n;t>24?(isFinite(t)&&(clearTimeout(tc),tc=setTimeout(qt,t)),nc=0):(nc=1,rc(qt))}function Lt(){var n=Date.now();for(ec=Ka;ec;)n>=ec.t&&(ec.f=ec.c(n-ec.t)),ec=ec.n;return n}function Tt(){for(var n,t=Ka,e=1/0;t;)t.f?t=n?n.n=t.n:Ka=t.n:(t.t<e&&(e=t.t),t=(n=t).n);return Qa=n,e}function Rt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Dt(n,t){var e=Math.pow(10,3*ga(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Pt(n){var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r&&e?function(n,t){for(var u=n.length,i=[],o=0,a=r[0],c=0;u>0&&a>0&&(c+a+1>t&&(a=Math.max(1,t-c)),i.push(n.substring(u-=a,u+a)),!((c+=a+1)>t));)a=r[o=(o+1)%r.length];return i.reverse().join(e)}:y;return function(n){var e=ic.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"-",c=e[4]||"",l=e[5],s=+e[6],f=e[7],h=e[8],g=e[9],p=1,v="",d="",m=!1,y=!0;switch(h&&(h=+h.substring(1)),(l||"0"===r&&"="===o)&&(l=r="0",o="="),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===c&&(v="0"+g.toLowerCase());case"c":y=!1;case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===c&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=oc.get(g)||Ut;var M=l&&f;return function(n){var e=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):"-"===a?"":a;if(0>p){var c=ta.formatPrefix(n,h);n=c.scale(n),e=c.symbol+d}else n*=p;n=g(n,h);var x,b,_=n.lastIndexOf(".");if(0>_){var w=y?n.lastIndexOf("e"):-1;0>w?(x=n,b=""):(x=n.substring(0,w),b=n.substring(w))}else x=n.substring(0,_),b=t+n.substring(_+1);!l&&f&&(x=i(x,1/0));var S=v.length+x.length+b.length+(M?0:u.length),k=s>S?new Array(S=s-S+1).join(r):"";return M&&(x=i(k+x,k.length?s-b.length:1/0)),u+=v,n=x+b,("<"===o?u+n+k:">"===o?k+u+n:"^"===o?k.substring(0,S>>=1)+u+n+k.substring(S):u+(M?n:k+n))+e}}}function Ut(n){return n+""}function jt(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Ft(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new cc(e-1)),1),e}function i(n,e){return t(n=new cc(+n),e),n}function o(n,r,i){var o=u(n),a=[];if(i>1)for(;r>o;)e(o)%i||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{cc=jt;var r=new jt;return r._=n,o(r,t,e)}finally{cc=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=o;var c=n.utc=Ht(n);return c.floor=c,c.round=Ht(r),c.ceil=Ht(u),c.offset=Ht(i),c.range=a,n}function Ht(n){return function(t,e){try{cc=jt;var r=new jt;return r._=t,n(r,e)._}finally{cc=Date}}}function Ot(n){function t(n){function t(t){for(var e,u,i,o=[],a=-1,c=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.slice(c,a)),null!=(u=sc[e=n.charAt(++a)])&&(e=n.charAt(++a)),(i=N[e])&&(e=i(t,null==u?"e"===e?" ":"0":u)),o.push(e),c=a+1);return o.push(n.slice(c,a)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=e(r,n,t,0);if(u!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var i=null!=r.Z&&cc!==jt,o=new(i?jt:cc);return"j"in r?o.setFullYear(r.y,0,r.j):"w"in r&&("W"in r||"U"in r)?(o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+(r.Z/100|0),r.M+r.Z%100,r.S,r.L),i?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var u,i,o,a=0,c=t.length,l=e.length;c>a;){if(r>=l)return-1;if(u=t.charCodeAt(a++),37===u){if(o=t.charAt(a++),i=C[o in sc?t.charAt(a++):o],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){_.lastIndex=0;var r=_.exec(t.slice(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){x.lastIndex=0;var r=x.exec(t.slice(e));return r?(n.w=b.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){E.lastIndex=0;var r=E.exec(t.slice(e));return r?(n.m=A.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.slice(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,N.c.toString(),t,r)}function c(n,t,r){return e(n,N.x.toString(),t,r)}function l(n,t,r){return e(n,N.X.toString(),t,r)}function s(n,t,e){var r=M.get(t.slice(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{cc=jt;var t=new cc;return t._=n,r(t)}finally{cc=Date}}var r=t(n);return e.parse=function(n){try{cc=jt;var t=r.parse(n);return t&&t._}finally{cc=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ae;var M=ta.map(),x=Yt(v),b=Zt(v),_=Yt(d),w=Zt(d),S=Yt(m),k=Zt(m),E=Yt(y),A=Zt(y);p.forEach(function(n,t){M.set(n.toLowerCase(),t)});var N={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return It(n.getDate(),t,2)},e:function(n,t){return It(n.getDate(),t,2)},H:function(n,t){return It(n.getHours(),t,2)},I:function(n,t){return It(n.getHours()%12||12,t,2)},j:function(n,t){return It(1+ac.dayOfYear(n),t,3)},L:function(n,t){return It(n.getMilliseconds(),t,3)},m:function(n,t){return It(n.getMonth()+1,t,2)},M:function(n,t){return It(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return It(n.getSeconds(),t,2)},U:function(n,t){return It(ac.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return It(ac.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return It(n.getFullYear()%100,t,2)},Y:function(n,t){return It(n.getFullYear()%1e4,t,4)},Z:ie,"%":function(){return"%"}},C={a:r,A:u,b:i,B:o,c:a,d:Qt,e:Qt,H:te,I:te,j:ne,L:ue,m:Kt,M:ee,p:s,S:re,U:Xt,w:Vt,W:$t,x:c,X:l,y:Wt,Y:Bt,Z:Jt,"%":oe};return t}function It(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function Yt(n){return new RegExp("^(?:"+n.map(ta.requote).join("|")+")","i")}function Zt(n){for(var t=new l,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Vt(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Xt(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e));return r?(n.U=+r[0],e+r[0].length):-1}function $t(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e));return r?(n.W=+r[0],e+r[0].length):-1}function Bt(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Wt(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+2));return r?(n.y=Gt(+r[0]),e+r[0].length):-1}function Jt(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function Gt(n){return n+(n>68?1900:2e3)}function Kt(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function Qt(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function ne(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function te(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function ee(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function re(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ue(n,t,e){fc.lastIndex=0;var r=fc.exec(t.slice(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function ie(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=ga(t)/60|0,u=ga(t)%60;return e+It(r,"0",2)+It(u,"0",2)}function oe(n,t,e){hc.lastIndex=0;var r=hc.exec(t.slice(e,e+1));return r?e+r[0].length:-1}function ae(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function ce(){}function le(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function se(n,t){n&&dc.hasOwnProperty(n.type)&&dc[n.type](n,t)}function fe(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function he(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)fe(n[e],t,1);t.polygonEnd()}function ge(){function n(n,t){n*=Da,t=t*Da/2+qa/4;var e=n-r,o=e>=0?1:-1,a=o*e,c=Math.cos(t),l=Math.sin(t),s=i*l,f=u*c+s*Math.cos(a),h=s*o*Math.sin(a);yc.add(Math.atan2(h,f)),r=n,u=c,i=l}var t,e,r,u,i;Mc.point=function(o,a){Mc.point=n,r=(t=o)*Da,u=Math.cos(a=(e=a)*Da/2+qa/4),i=Math.sin(a)},Mc.lineEnd=function(){n(t,e)}}function pe(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function ve(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function de(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function me(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function ye(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function Me(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function xe(n){return[Math.atan2(n[1],n[0]),tt(n[2])]}function be(n,t){return ga(n[0]-t[0])<Ca&&ga(n[1]-t[1])<Ca}function _e(n,t){n*=Da;var e=Math.cos(t*=Da);we(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function we(n,t,e){++xc,_c+=(n-_c)/xc,wc+=(t-wc)/xc,Sc+=(e-Sc)/xc}function Se(){function n(n,u){n*=Da;var i=Math.cos(u*=Da),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),l=Math.atan2(Math.sqrt((l=e*c-r*a)*l+(l=r*o-t*c)*l+(l=t*a-e*o)*l),t*o+e*a+r*c);bc+=l,kc+=l*(t+(t=o)),Ec+=l*(e+(e=a)),Ac+=l*(r+(r=c)),we(t,e,r)}var t,e,r;qc.point=function(u,i){u*=Da;var o=Math.cos(i*=Da);t=o*Math.cos(u),e=o*Math.sin(u),r=Math.sin(i),qc.point=n,we(t,e,r)}}function ke(){qc.point=_e}function Ee(){function n(n,t){n*=Da;var e=Math.cos(t*=Da),o=e*Math.cos(n),a=e*Math.sin(n),c=Math.sin(t),l=u*c-i*a,s=i*o-r*c,f=r*a-u*o,h=Math.sqrt(l*l+s*s+f*f),g=r*o+u*a+i*c,p=h&&-nt(g)/h,v=Math.atan2(h,g);Nc+=p*l,Cc+=p*s,zc+=p*f,bc+=v,kc+=v*(r+(r=o)),Ec+=v*(u+(u=a)),Ac+=v*(i+(i=c)),we(r,u,i)}var t,e,r,u,i;qc.point=function(o,a){t=o,e=a,qc.point=n,o*=Da;var c=Math.cos(a*=Da);r=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),we(r,u,i)},qc.lineEnd=function(){n(t,e),qc.lineEnd=ke,qc.point=_e}}function Ae(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function Ne(){return!0}function Ce(n,t,e,r,u){var i=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(be(e,r)){u.lineStart();for(var a=0;t>a;++a)u.point((e=n[a])[0],e[1]);return void u.lineEnd()}var c=new qe(e,n,null,!0),l=new qe(e,null,c,!1);c.o=l,i.push(c),o.push(l),c=new qe(r,n,null,!1),l=new qe(r,null,c,!0),c.o=l,i.push(c),o.push(l)}}),o.sort(t),ze(i),ze(o),i.length){for(var a=0,c=e,l=o.length;l>a;++a)o[a].e=c=!c;for(var s,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;s=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var a=0,l=s.length;l>a;++a)u.point((f=s[a])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){s=g.p.z;for(var a=s.length-1;a>=0;--a)u.point((f=s[a])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,s=g.z,p=!p}while(!g.v);u.lineEnd()}}}function ze(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function qe(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Le(n,t,e,r){return function(u,i){function o(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function a(n,t){var e=u(n,t);d.point(e[0],e[1])}function c(){y.point=a,d.lineStart()}function l(){y.point=o,d.lineEnd()}function s(n,t){v.push([n,t]);var e=u(n,t);x.point(e[0],e[1])}function f(){x.lineStart(),v=[]}function h(){s(v[0][0],v[0][1]),x.lineEnd();var n,t=x.clean(),e=M.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r)if(1&t){n=e[0];var u,r=n.length-1,o=-1;if(r>0){for(b||(i.polygonStart(),b=!0),i.lineStart();++o<r;)i.point((u=n[o])[0],u[1]);i.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Te))}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:o,lineStart:c,lineEnd:l,polygonStart:function(){y.point=s,y.lineStart=f,y.lineEnd=h,g=[],p=[]},polygonEnd:function(){y.point=o,y.lineStart=c,y.lineEnd=l,g=ta.merge(g);var n=Fe(m,p);g.length?(b||(i.polygonStart(),b=!0),Ce(g,De,n,e,i)):n&&(b||(i.polygonStart(),b=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),b&&(i.polygonEnd(),b=!1),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},M=Re(),x=t(M),b=!1;return y}}function Te(n){return n.length>1}function Re(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:b,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function De(n,t){return((n=n.x)[0]<0?n[1]-Ra-Ca:Ra-n[1])-((t=t.x)[0]<0?t[1]-Ra-Ca:Ra-t[1])}function Pe(n){var t,e=0/0,r=0/0,u=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(i,o){var a=i>0?qa:-qa,c=ga(i-e);ga(c-qa)<Ca?(n.point(e,r=(r+o)/2>0?Ra:-Ra),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(i,r),t=0):u!==a&&c>=qa&&(ga(e-u)<Ca&&(e-=u*Ca),ga(i-a)<Ca&&(i-=a*Ca),r=Ue(e,r,i,o),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=i,r=o),u=a},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function Ue(n,t,e,r){var u,i,o=Math.sin(n-e);return ga(o)>Ca?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+r)/2}function je(n,t,e,r){var u;if(null==n)u=e*Ra,r.point(-qa,u),r.point(0,u),r.point(qa,u),r.point(qa,0),r.point(qa,-u),r.point(0,-u),r.point(-qa,-u),r.point(-qa,0),r.point(-qa,u);else if(ga(n[0]-t[0])>Ca){var i=n[0]<t[0]?qa:-qa;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function Fe(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,o=0;yc.reset();for(var a=0,c=t.length;c>a;++a){var l=t[a],s=l.length;if(s)for(var f=l[0],h=f[0],g=f[1]/2+qa/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===s&&(d=0),n=l[d];var m=n[0],y=n[1]/2+qa/4,M=Math.sin(y),x=Math.cos(y),b=m-h,_=b>=0?1:-1,w=_*b,S=w>qa,k=p*M;if(yc.add(Math.atan2(k*_*Math.sin(w),v*x+k*Math.cos(w))),i+=S?b+_*La:b,S^h>=e^m>=e){var E=de(pe(f),pe(n));Me(E);var A=de(u,E);Me(A);var N=(S^b>=0?-1:1)*tt(A[2]);(r>N||r===N&&(E[0]||E[1]))&&(o+=S^b>=0?1:-1)}if(!d++)break;h=m,p=M,v=x,f=n}}return(-Ca>i||Ca>i&&0>yc)^1&o}function He(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,c,l,s;return{lineStart:function(){l=c=!1,s=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=o?v?0:u(f,h):v?u(f+(0>f?qa:-qa),h):0;if(!e&&(l=c=v)&&n.lineStart(),v!==c&&(g=r(e,p),(be(e,g)||be(p,g))&&(p[0]+=Ca,p[1]+=Ca,v=t(p[0],p[1]))),v!==c)s=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(a&&e&&o^v){var m;d&i||!(m=r(p,e,!0))||(s=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&be(e,p)||n.point(p[0],p[1]),e=p,c=v,i=d},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return s|(l&&c)<<1}}}function r(n,t,e){var r=pe(n),u=pe(t),o=[1,0,0],a=de(r,u),c=ve(a,a),l=a[0],s=c-l*l;if(!s)return!e&&n;var f=i*c/s,h=-i*l/s,g=de(o,a),p=ye(o,f),v=ye(a,h);me(p,v);var d=g,m=ve(p,d),y=ve(d,d),M=m*m-y*(ve(p,p)-1);if(!(0>M)){var x=Math.sqrt(M),b=ye(d,(-m-x)/y);if(me(b,p),b=xe(b),!e)return b;var _,w=n[0],S=t[0],k=n[1],E=t[1];w>S&&(_=w,w=S,S=_);var A=S-w,N=ga(A-qa)<Ca,C=N||Ca>A;if(!N&&k>E&&(_=k,k=E,E=_),C?N?k+E>0^b[1]<(ga(b[0]-w)<Ca?k:E):k<=b[1]&&b[1]<=E:A>qa^(w<=b[0]&&b[0]<=S)){var z=ye(d,(-m+x)/y);return me(z,p),[b,xe(z)]}}}function u(t,e){var r=o?n:qa-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),o=i>0,a=ga(i)>Ca,c=gr(n,6*Da);return Le(t,e,c,o?[0,-n]:[-qa,n-qa])}function Oe(n,t,e,r){return function(u){var i,o=u.a,a=u.b,c=o.x,l=o.y,s=a.x,f=a.y,h=0,g=1,p=s-c,v=f-l;if(i=n-c,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-c,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-l,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-l,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:c+h*p,y:l+h*v}),1>g&&(u.b={x:c+g*p,y:l+g*v}),u}}}}}}function Ie(n,t,e,r){function u(r,u){return ga(r[0]-n)<Ca?u>0?0:3:ga(r[0]-e)<Ca?u>0?2:1:ga(r[1]-t)<Ca?u>0?1:0:u>0?3:2}function i(n,t){return o(n.x,t.x)}function o(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function c(n){for(var t=0,e=d.length,r=n[1],u=0;e>u;++u)for(var i,o=1,a=d[u],c=a.length,l=a[0];c>o;++o)i=a[o],l[1]<=r?i[1]>r&&Q(l,i,n)>0&&++t:i[1]<=r&&Q(l,i,n)<0&&--t,l=i;return 0!==t}function l(i,a,c,l){var s=0,f=0;if(null==i||(s=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0){do l.point(0===s||3===s?n:e,s>1?r:t);while((s=(s+c+4)%4)!==f)}else l.point(a[0],a[1])}function s(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function f(n,t){s(n,t)&&a.point(n,t)}function h(){C.point=p,d&&d.push(m=[]),S=!0,w=!1,b=_=0/0}function g(){v&&(p(y,M),x&&w&&A.rejoin(),v.push(A.buffer())),C.point=f,w&&a.lineEnd()}function p(n,t){n=Math.max(-Tc,Math.min(Tc,n)),t=Math.max(-Tc,Math.min(Tc,t));var e=s(n,t);if(d&&m.push([n,t]),S)y=n,M=t,x=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:b,y:_},b:{x:n,y:t}};N(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}b=n,_=t,w=e}var v,d,m,y,M,x,b,_,w,S,k,E=a,A=Re(),N=Oe(n,t,e,r),C={point:f,lineStart:h,lineEnd:g,polygonStart:function(){a=A,v=[],d=[],k=!0},polygonEnd:function(){a=E,v=ta.merge(v);var t=c([n,r]),e=k&&t,u=v.length;(e||u)&&(a.polygonStart(),e&&(a.lineStart(),l(null,null,1,a),a.lineEnd()),u&&Ce(v,i,t,l,a),a.polygonEnd()),v=d=m=null}};return C}}function Ye(n){var t=0,e=qa/3,r=ir(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*qa/180,e=n[1]*qa/180):[t/qa*180,e/qa*180]},u}function Ze(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),o-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),o=Math.sqrt(i)/u;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/u,tt((i-(n*n+e*e)*u*u)/(2*u))]},e}function Ve(){function n(n,t){Dc+=u*n-r*t,r=n,u=t}var t,e,r,u;Hc.point=function(i,o){Hc.point=n,t=r=i,e=u=o},Hc.lineEnd=function(){n(t,e)}}function Xe(n,t){Pc>n&&(Pc=n),n>jc&&(jc=n),Uc>t&&(Uc=t),t>Fc&&(Fc=t)}function $e(){function n(n,t){o.push("M",n,",",t,i)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function u(){o.push("Z")}var i=Be(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return i=Be(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function Be(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function We(n,t){_c+=n,wc+=t,++Sc}function Je(){function n(n,r){var u=n-t,i=r-e,o=Math.sqrt(u*u+i*i);kc+=o*(t+n)/2,Ec+=o*(e+r)/2,Ac+=o,We(t=n,e=r)}var t,e;Ic.point=function(r,u){Ic.point=n,We(t=r,e=u)}}function Ge(){Ic.point=We}function Ke(){function n(n,t){var e=n-r,i=t-u,o=Math.sqrt(e*e+i*i);kc+=o*(r+n)/2,Ec+=o*(u+t)/2,Ac+=o,o=u*n-r*t,Nc+=o*(r+n),Cc+=o*(u+t),zc+=3*o,We(r=n,u=t)}var t,e,r,u;Ic.point=function(i,o){Ic.point=n,We(t=r=i,e=u=o)},Ic.lineEnd=function(){n(t,e)}}function Qe(n){function t(t,e){n.moveTo(t+o,e),n.arc(t,e,o,0,La)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function u(){a.point=t}function i(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:u,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=u,a.point=t},pointRadius:function(n){return o=n,a},result:b};return a}function nr(n){function t(n){return(a?r:e)(n)}function e(t){return rr(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){M=0/0,S.point=i,t.lineStart()}function i(e,r){var i=pe([e,r]),o=n(e,r);u(M,x,y,b,_,w,M=o[0],x=o[1],y=e,b=i[0],_=i[1],w=i[2],a,t),t.point(M,x)}function o(){S.point=e,t.lineEnd()}function c(){r(),S.point=l,S.lineEnd=s}function l(n,t){i(f=n,h=t),g=M,p=x,v=b,d=_,m=w,S.point=i}function s(){u(M,x,y,b,_,w,g,p,f,v,d,m,a,t),S.lineEnd=o,o()}var f,h,g,p,v,d,m,y,M,x,b,_,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c
},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,a,c,l,s,f,h,g,p,v,d,m){var y=s-t,M=f-e,x=y*y+M*M;if(x>4*i&&d--){var b=a+g,_=c+p,w=l+v,S=Math.sqrt(b*b+_*_+w*w),k=Math.asin(w/=S),E=ga(ga(w)-1)<Ca||ga(r-h)<Ca?(r+h)/2:Math.atan2(_,b),A=n(E,k),N=A[0],C=A[1],z=N-t,q=C-e,L=M*z-y*q;(L*L/x>i||ga((y*z+M*q)/x-.5)>.3||o>a*g+c*p+l*v)&&(u(t,e,r,a,c,l,N,C,E,b/=S,_/=S,w,d,m),m.point(N,C),u(N,C,E,b,_,w,s,f,h,g,p,v,d,m))}}var i=.5,o=Math.cos(30*Da),a=16;return t.precision=function(n){return arguments.length?(a=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function tr(n){var t=nr(function(t,e){return n([t*Pa,e*Pa])});return function(n){return or(t(n))}}function er(n){this.stream=n}function rr(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function ur(n){return ir(function(){return n})()}function ir(n){function t(n){return n=a(n[0]*Da,n[1]*Da),[n[0]*h+c,l-n[1]*h]}function e(n){return n=a.invert((n[0]-c)/h,(l-n[1])/h),n&&[n[0]*Pa,n[1]*Pa]}function r(){a=Ae(o=lr(m,M,x),i);var n=i(v,d);return c=g-n[0]*h,l=p+n[1]*h,u()}function u(){return s&&(s.valid=!1,s=null),t}var i,o,a,c,l,s,f=nr(function(n,t){return n=i(n,t),[n[0]*h+c,l-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,M=0,x=0,b=Lc,_=y,w=null,S=null;return t.stream=function(n){return s&&(s.valid=!1),s=or(b(o,f(_(n)))),s.valid=!0,s},t.clipAngle=function(n){return arguments.length?(b=null==n?(w=n,Lc):He((w=+n)*Da),u()):w},t.clipExtent=function(n){return arguments.length?(S=n,_=n?Ie(n[0][0],n[0][1],n[1][0],n[1][1]):y,u()):S},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*Da,d=n[1]%360*Da,r()):[v*Pa,d*Pa]},t.rotate=function(n){return arguments.length?(m=n[0]%360*Da,M=n[1]%360*Da,x=n.length>2?n[2]%360*Da:0,r()):[m*Pa,M*Pa,x*Pa]},ta.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function or(n){return rr(n,function(t,e){n.point(t*Da,e*Da)})}function ar(n,t){return[n,t]}function cr(n,t){return[n>qa?n-La:-qa>n?n+La:n,t]}function lr(n,t,e){return n?t||e?Ae(fr(n),hr(t,e)):fr(n):t||e?hr(t,e):cr}function sr(n){return function(t,e){return t+=n,[t>qa?t-La:-qa>t?t+La:t,e]}}function fr(n){var t=sr(n);return t.invert=sr(-n),t}function hr(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*r+a*u;return[Math.atan2(c*i-s*o,a*r-l*u),tt(s*i+c*o)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*i-c*o;return[Math.atan2(c*i+l*o,a*r+s*u),tt(s*r-a*u)]},e}function gr(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,o,a){var c=o*t;null!=u?(u=pr(e,u),i=pr(e,i),(o>0?i>u:u>i)&&(u+=o*La)):(u=n+o*La,i=n-.5*c);for(var l,s=u;o>0?s>i:i>s;s-=c)a.point((l=xe([e,-r*Math.cos(s),-r*Math.sin(s)]))[0],l[1])}}function pr(n,t){var e=pe(t);e[0]-=n,Me(e);var r=nt(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Ca)%(2*Math.PI)}function vr(n,t,e){var r=ta.range(n,t-Ca,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function dr(n,t,e){var r=ta.range(n,t-Ca,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function mr(n){return n.source}function yr(n){return n.target}function Mr(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),o=Math.cos(r),a=Math.sin(r),c=u*Math.cos(n),l=u*Math.sin(n),s=o*Math.cos(e),f=o*Math.sin(e),h=2*Math.asin(Math.sqrt(it(r-t)+u*o*it(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*s,u=e*l+t*f,o=e*i+t*a;return[Math.atan2(u,r)*Pa,Math.atan2(o,Math.sqrt(r*r+u*u))*Pa]}:function(){return[n*Pa,t*Pa]};return p.distance=h,p}function xr(){function n(n,u){var i=Math.sin(u*=Da),o=Math.cos(u),a=ga((n*=Da)-t),c=Math.cos(a);Yc+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*i-e*o*c)*a),e*i+r*o*c),t=n,e=i,r=o}var t,e,r;Zc.point=function(u,i){t=u*Da,e=Math.sin(i*=Da),r=Math.cos(i),Zc.point=n},Zc.lineEnd=function(){Zc.point=Zc.lineEnd=b}}function br(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),o=Math.cos(u);return[Math.atan2(n*i,r*o),Math.asin(r&&e*i/r)]},e}function _r(n,t){function e(n,t){o>0?-Ra+Ca>t&&(t=-Ra+Ca):t>Ra-Ca&&(t=Ra-Ca);var e=o/Math.pow(u(t),i);return[e*Math.sin(i*n),o-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(qa/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),o=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=o-t,r=K(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(o/r,1/i))-Ra]},e):Sr}function wr(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return ga(u)<Ca?ar:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-K(u)*Math.sqrt(n*n+e*e)]},e)}function Sr(n,t){return[n,Math.log(Math.tan(qa/4+t/2))]}function kr(n){var t,e=ur(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=i.apply(e,arguments);if(o===e){if(t=null==n){var a=qa*r(),c=u();i([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function Er(n,t){return[Math.log(Math.tan(qa/4+t/2)),-n]}function Ar(n){return n[0]}function Nr(n){return n[1]}function Cr(n){for(var t=n.length,e=[0,1],r=2,u=2;t>u;u++){for(;r>1&&Q(n[e[r-2]],n[e[r-1]],n[u])<=0;)--r;e[r++]=u}return e.slice(0,r)}function zr(n,t){return n[0]-t[0]||n[1]-t[1]}function qr(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Lr(n,t,e,r){var u=n[0],i=e[0],o=t[0]-u,a=r[0]-i,c=n[1],l=e[1],s=t[1]-c,f=r[1]-l,h=(a*(c-l)-f*(u-i))/(f*o-a*s);return[u+h*o,c+h*s]}function Tr(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Rr(){tu(this),this.edge=this.site=this.circle=null}function Dr(n){var t=el.pop()||new Rr;return t.site=n,t}function Pr(n){Xr(n),Qc.remove(n),el.push(n),tu(n)}function Ur(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,o=n.N,a=[n];Pr(n);for(var c=i;c.circle&&ga(e-c.circle.x)<Ca&&ga(r-c.circle.cy)<Ca;)i=c.P,a.unshift(c),Pr(c),c=i;a.unshift(c),Xr(c);for(var l=o;l.circle&&ga(e-l.circle.x)<Ca&&ga(r-l.circle.cy)<Ca;)o=l.N,a.push(l),Pr(l),l=o;a.push(l),Xr(l);var s,f=a.length;for(s=1;f>s;++s)l=a[s],c=a[s-1],Kr(l.edge,c.site,l.site,u);c=a[0],l=a[f-1],l.edge=Jr(c.site,l.site,null,u),Vr(c),Vr(l)}function jr(n){for(var t,e,r,u,i=n.x,o=n.y,a=Qc._;a;)if(r=Fr(a,o)-i,r>Ca)a=a.L;else{if(u=i-Hr(a,o),!(u>Ca)){r>-Ca?(t=a.P,e=a):u>-Ca?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var c=Dr(n);if(Qc.insert(t,c),t||e){if(t===e)return Xr(t),e=Dr(t.site),Qc.insert(c,e),c.edge=e.edge=Jr(t.site,c.site),Vr(t),void Vr(e);if(!e)return void(c.edge=Jr(t.site,c.site));Xr(t),Xr(e);var l=t.site,s=l.x,f=l.y,h=n.x-s,g=n.y-f,p=e.site,v=p.x-s,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,M=v*v+d*d,x={x:(d*y-g*M)/m+s,y:(h*M-v*y)/m+f};Kr(e.edge,l,p,x),c.edge=Jr(l,n,null,x),e.edge=Jr(n,p,null,x),Vr(t),Vr(e)}}function Fr(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var o=n.P;if(!o)return-1/0;e=o.site;var a=e.x,c=e.y,l=c-t;if(!l)return a;var s=a-r,f=1/i-1/l,h=s/l;return f?(-h+Math.sqrt(h*h-2*f*(s*s/(-2*l)-c+l/2+u-i/2)))/f+r:(r+a)/2}function Hr(n,t){var e=n.N;if(e)return Fr(e,t);var r=n.site;return r.y===t?r.x:1/0}function Or(n){this.site=n,this.edges=[]}function Ir(n){for(var t,e,r,u,i,o,a,c,l,s,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=Kc,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(a=i.edges,c=a.length,o=0;c>o;)s=a[o].end(),r=s.x,u=s.y,l=a[++o%c].start(),t=l.x,e=l.y,(ga(r-t)>Ca||ga(u-e)>Ca)&&(a.splice(o,0,new Qr(Gr(i.site,s,ga(r-f)<Ca&&p-u>Ca?{x:f,y:ga(t-f)<Ca?e:p}:ga(u-p)<Ca&&h-r>Ca?{x:ga(e-p)<Ca?t:h,y:p}:ga(r-h)<Ca&&u-g>Ca?{x:h,y:ga(t-h)<Ca?e:g}:ga(u-g)<Ca&&r-f>Ca?{x:ga(e-g)<Ca?t:f,y:g}:null),i.site,null)),++c)}function Yr(n,t){return t.angle-n.angle}function Zr(){tu(this),this.x=this.y=this.arc=this.site=this.cy=null}function Vr(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var o=u.x,a=u.y,c=r.x-o,l=r.y-a,s=i.x-o,f=i.y-a,h=2*(c*f-l*s);if(!(h>=-za)){var g=c*c+l*l,p=s*s+f*f,v=(f*g-l*p)/h,d=(c*p-s*g)/h,f=d+a,m=rl.pop()||new Zr;m.arc=n,m.site=u,m.x=v+o,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,M=tl._;M;)if(m.y<M.y||m.y===M.y&&m.x<=M.x){if(!M.L){y=M.P;break}M=M.L}else{if(!M.R){y=M;break}M=M.R}tl.insert(y,m),y||(nl=m)}}}}function Xr(n){var t=n.circle;t&&(t.P||(nl=t.N),tl.remove(t),rl.push(t),tu(t),n.circle=null)}function $r(n){for(var t,e=Gc,r=Oe(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!Br(t,n)||!r(t)||ga(t.a.x-t.b.x)<Ca&&ga(t.a.y-t.b.y)<Ca)&&(t.a=t.b=null,e.splice(u,1))}function Br(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,o=t[0][0],a=t[1][0],c=t[0][1],l=t[1][1],s=n.l,f=n.r,h=s.x,g=s.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(o>d||d>=a)return;if(h>p){if(i){if(i.y>=l)return}else i={x:d,y:c};e={x:d,y:l}}else{if(i){if(i.y<c)return}else i={x:d,y:l};e={x:d,y:c}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=l)return}else i={x:(c-u)/r,y:c};e={x:(l-u)/r,y:l}}else{if(i){if(i.y<c)return}else i={x:(l-u)/r,y:l};e={x:(c-u)/r,y:c}}else if(v>g){if(i){if(i.x>=a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}else{if(i){if(i.x<o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}return n.a=i,n.b=e,!0}function Wr(n,t){this.l=n,this.r=t,this.a=this.b=null}function Jr(n,t,e,r){var u=new Wr(n,t);return Gc.push(u),e&&Kr(u,n,t,e),r&&Kr(u,t,n,r),Kc[n.i].edges.push(new Qr(u,n,t)),Kc[t.i].edges.push(new Qr(u,t,n)),u}function Gr(n,t,e){var r=new Wr(n,null);return r.a=t,r.b=e,Gc.push(r),r}function Kr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function Qr(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function nu(){this._=null}function tu(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function eu(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function ru(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function uu(n){for(;n.L;)n=n.L;return n}function iu(n,t){var e,r,u,i=n.sort(ou).pop();for(Gc=[],Kc=new Array(n.length),Qc=new nu,tl=new nu;;)if(u=nl,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(Kc[i.i]=new Or(i),jr(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;Ur(u.arc)}t&&($r(t),Ir(t));var o={cells:Kc,edges:Gc};return Qc=tl=Gc=Kc=null,o}function ou(n,t){return t.y-n.y||t.x-n.x}function au(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function cu(n){return n.x}function lu(n){return n.y}function su(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function fu(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var o=.5*(e+u),a=.5*(r+i),c=t.nodes;c[0]&&fu(n,c[0],e,r,o,a),c[1]&&fu(n,c[1],o,r,u,a),c[2]&&fu(n,c[2],e,a,o,i),c[3]&&fu(n,c[3],o,a,u,i)}}function hu(n,t,e,r,u,i,o){var a,c=1/0;return function l(n,s,f,h,g){if(!(s>i||f>o||r>h||u>g)){if(p=n.point){var p,v=t-n.x,d=e-n.y,m=v*v+d*d;if(c>m){var y=Math.sqrt(c=m);r=t-y,u=e-y,i=t+y,o=e+y,a=p}}for(var M=n.nodes,x=.5*(s+h),b=.5*(f+g),_=t>=x,w=e>=b,S=w<<1|_,k=S+4;k>S;++S)if(n=M[3&S])switch(3&S){case 0:l(n,s,f,x,b);break;case 1:l(n,x,f,h,b);break;case 2:l(n,s,b,x,g);break;case 3:l(n,x,b,h,g)}}}(n,r,u,i,o),a}function gu(n,t){n=ta.rgb(n),t=ta.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,o=t.g-r,a=t.b-u;return function(n){return"#"+xt(Math.round(e+i*n))+xt(Math.round(r+o*n))+xt(Math.round(u+a*n))}}function pu(n,t){var e,r={},u={};for(e in n)e in t?r[e]=mu(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function vu(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function du(n,t){var e,r,u,i=il.lastIndex=ol.lastIndex=0,o=-1,a=[],c=[];for(n+="",t+="";(e=il.exec(n))&&(r=ol.exec(t));)(u=r.index)>i&&(u=t.slice(i,u),a[o]?a[o]+=u:a[++o]=u),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:vu(e,r)})),i=ol.lastIndex;return i<t.length&&(u=t.slice(i),a[o]?a[o]+=u:a[++o]=u),a.length<2?c[0]?(t=c[0].x,function(n){return t(n)+""}):function(){return t}:(t=c.length,function(n){for(var e,r=0;t>r;++r)a[(e=c[r]).i]=e.x(n);return a.join("")})}function mu(n,t){for(var e,r=ta.interpolators.length;--r>=0&&!(e=ta.interpolators[r](n,t)););return e}function yu(n,t){var e,r=[],u=[],i=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(mu(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;o>e;++e)u[e]=t[e];return function(n){for(e=0;a>e;++e)u[e]=r[e](n);return u}}function Mu(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function xu(n){return function(t){return 1-n(1-t)}}function bu(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function _u(n){return n*n}function wu(n){return n*n*n}function Su(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function ku(n){return function(t){return Math.pow(t,n)}}function Eu(n){return 1-Math.cos(n*Ra)}function Au(n){return Math.pow(2,10*(n-1))}function Nu(n){return 1-Math.sqrt(1-n*n)}function Cu(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/La*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*La/t)}}function zu(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function qu(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Lu(n,t){n=ta.hcl(n),t=ta.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,o=t.c-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return st(e+i*n,r+o*n,u+a*n)+""}}function Tu(n,t){n=ta.hsl(n),t=ta.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,o=t.s-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return ct(e+i*n,r+o*n,u+a*n)+""}}function Ru(n,t){n=ta.lab(n),t=ta.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,o=t.a-r,a=t.b-u;return function(n){return ht(e+i*n,r+o*n,u+a*n)+""}}function Du(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Pu(n){var t=[n.a,n.b],e=[n.c,n.d],r=ju(t),u=Uu(t,e),i=ju(Fu(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Pa,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*Pa:0}function Uu(n,t){return n[0]*t[0]+n[1]*t[1]}function ju(n){var t=Math.sqrt(Uu(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Fu(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Hu(n,t){var e,r=[],u=[],i=ta.transform(n),o=ta.transform(t),a=i.translate,c=o.translate,l=i.rotate,s=o.rotate,f=i.skew,h=o.skew,g=i.scale,p=o.scale;return a[0]!=c[0]||a[1]!=c[1]?(r.push("translate(",null,",",null,")"),u.push({i:1,x:vu(a[0],c[0])},{i:3,x:vu(a[1],c[1])})):r.push(c[0]||c[1]?"translate("+c+")":""),l!=s?(l-s>180?s+=360:s-l>180&&(l+=360),u.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:vu(l,s)})):s&&r.push(r.pop()+"rotate("+s+")"),f!=h?u.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:vu(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),u.push({i:e-4,x:vu(g[0],p[0])},{i:e-2,x:vu(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=u.length,function(n){for(var t,i=-1;++i<e;)r[(t=u[i]).i]=t.x(n);return r.join("")}}function Ou(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function Iu(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function Yu(n){for(var t=n.source,e=n.target,r=Vu(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function Zu(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Vu(n,t){if(n===t)return n;for(var e=Zu(n),r=Zu(t),u=e.pop(),i=r.pop(),o=null;u===i;)o=u,u=e.pop(),i=r.pop();return o}function Xu(n){n.fixed|=2}function $u(n){n.fixed&=-7}function Bu(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Wu(n){n.fixed&=-5}function Ju(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,o=n.nodes,a=o.length,c=-1;++c<a;)i=o[c],null!=i&&(Ju(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var l=t*e[n.point.index];n.charge+=n.pointCharge=l,r+=l*n.point.x,u+=l*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function Gu(n,t){return ta.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=ri,n}function Ku(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(u=n.children)&&(r=u.length))for(var r,u;--r>=0;)e.push(u[r])}function Qu(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(i=n.children)&&(u=i.length))for(var u,i,o=-1;++o<u;)e.push(i[o]);for(;null!=(n=r.pop());)t(n)}function ni(n){return n.children}function ti(n){return n.value}function ei(n,t){return t.value-n.value}function ri(n){return ta.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function ui(n){return n.x}function ii(n){return n.y}function oi(n,t,e){n.y0=t,n.y=e}function ai(n){return ta.range(n.length)}function ci(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function li(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function si(n){return n.reduce(fi,0)}function fi(n,t){return n+t[1]}function hi(n,t){return gi(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function gi(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function pi(n){return[ta.min(n),ta.max(n)]}function vi(n,t){return n.value-t.value}function di(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function mi(n,t){n._pack_next=t,t._pack_prev=n}function yi(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function Mi(n){function t(n){s=Math.min(n.x-n.r,s),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(l=e.length)){var e,r,u,i,o,a,c,l,s=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(xi),r=e[0],r.x=-r.r,r.y=0,t(r),l>1&&(u=e[1],u.x=u.r,u.y=0,t(u),l>2))for(i=e[2],wi(r,u,i),t(i),di(r,i),r._pack_prev=i,di(i,u),u=r._pack_next,o=3;l>o;o++){wi(r,u,i=e[o]);var p=0,v=1,d=1;for(a=u._pack_next;a!==u;a=a._pack_next,v++)if(yi(a,i)){p=1;break}if(1==p)for(c=r._pack_prev;c!==a._pack_prev&&!yi(c,i);c=c._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?mi(r,u=a):mi(r=c,u),o--):(di(r,i),u=i,t(i))}var m=(s+f)/2,y=(h+g)/2,M=0;for(o=0;l>o;o++)i=e[o],i.x-=m,i.y-=y,M=Math.max(M,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=M,e.forEach(bi)}}function xi(n){n._pack_next=n._pack_prev=n}function bi(n){delete n._pack_next,delete n._pack_prev}function _i(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,o=u.length;++i<o;)_i(u[i],t,e,r)}function wi(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var o=t.r+e.r,a=u*u+i*i;o*=o,r*=r;var c=.5+(r-o)/(2*a),l=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+c*u+l*i,e.y=n.y+c*i-l*u}else e.x=n.x+r,e.y=n.y}function Si(n,t){return n.parent==t.parent?1:2}function ki(n){var t=n.children;return t.length?t[0]:n.t}function Ei(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function Ai(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function Ni(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function Ci(n,t,e){return n.a.parent===t.parent?n.a:e}function zi(n){return 1+ta.max(n,function(n){return n.y})}function qi(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Li(n){var t=n.children;return t&&t.length?Li(t[0]):n}function Ti(n){var t,e=n.children;return e&&(t=e.length)?Ti(e[t-1]):n}function Ri(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Di(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function Pi(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Ui(n){return n.rangeExtent?n.rangeExtent():Pi(n.range())}function ji(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function Fi(n,t){var e,r=0,u=n.length-1,i=n[r],o=n[u];return i>o&&(e=r,r=u,u=e,e=i,i=o,o=e),n[r]=t.floor(i),n[u]=t.ceil(o),n}function Hi(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:ml}function Oi(n,t,e,r){var u=[],i=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)u.push(e(n[o-1],n[o])),i.push(r(t[o-1],t[o]));return function(t){var e=ta.bisect(n,t,1,a)-1;return i[e](u[e](t))}}function Ii(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?Oi:ji,c=r?Iu:Ou;return o=u(n,t,c,e),a=u(t,n,c,mu),i}function i(n){return o(n)}var o,a;return i.invert=function(n){return a(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(Du)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return Xi(n,t)},i.tickFormat=function(t,e){return $i(n,t,e)},i.nice=function(t){return Zi(n,t),u()},i.copy=function(){return Ii(n,t,e,r)},u()}function Yi(n,t){return ta.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Zi(n,t){return Fi(n,Hi(Vi(n,t)[2]))}function Vi(n,t){null==t&&(t=10);var e=Pi(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function Xi(n,t){return ta.range.apply(ta,Vi(n,t))}function $i(n,t,e){var r=Vi(n,t);if(e){var u=ic.exec(e);if(u.shift(),"s"===u[8]){var i=ta.formatPrefix(Math.max(ga(r[0]),ga(r[1])));return u[7]||(u[7]="."+Bi(i.scale(r[2]))),u[8]="f",e=ta.format(u.join("")),function(n){return e(i.scale(n))+i.symbol}}u[7]||(u[7]="."+Wi(u[8],r)),e=u.join("")}else e=",."+Bi(r[2])+"f";return ta.format(e)}function Bi(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function Wi(n,t){var e=Bi(t[2]);return n in yl?Math.abs(e-Bi(Math.max(ga(t[0]),ga(t[1]))))+ +("e"!==n):e-2*("%"===n)}function Ji(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(u(t))}return o.invert=function(t){return i(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),o):t},o.nice=function(){var t=Fi(r.map(u),e?Math:xl);return n.domain(t),r=t.map(i),o},o.ticks=function(){var n=Pi(r),o=[],a=n[0],c=n[1],l=Math.floor(u(a)),s=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(s-l)){if(e){for(;s>l;l++)for(var h=1;f>h;h++)o.push(i(l)*h);o.push(i(l))}else for(o.push(i(l));l++<s;)for(var h=f-1;h>0;h--)o.push(i(l)*h);for(l=0;o[l]<a;l++);for(s=o.length;o[s-1]>c;s--);o=o.slice(l,s)}return o},o.tickFormat=function(n,t){if(!arguments.length)return Ml;arguments.length<2?t=Ml:"function"!=typeof t&&(t=ta.format(t));var r,a=Math.max(.1,n/o.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+r))<=a?t(n):""}},o.copy=function(){return Ji(n.copy(),t,e,r)},Yi(o,n)}function Gi(n,t,e){function r(t){return n(u(t))}var u=Ki(t),i=Ki(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return Xi(e,n)},r.tickFormat=function(n,t){return $i(e,n,t)},r.nice=function(n){return r.domain(Zi(e,n))},r.exponent=function(o){return arguments.length?(u=Ki(t=o),i=Ki(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return Gi(n.copy(),t,e)},Yi(r,n)}function Ki(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function Qi(n,t){function e(e){return i[((u.get(e)||("range"===t.t?u.set(e,n.push(e)):0/0))-1)%i.length]}function r(t,e){return ta.range(n.length).map(function(n){return t+e*n})}var u,i,o;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new l;for(var i,o=-1,a=r.length;++o<a;)u.has(i=r[o])||u.set(i,n.push(i));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(i=n,o=0,t={t:"range",a:arguments},e):i},e.rangePoints=function(u,a){arguments.length<2&&(a=0);var c=u[0],l=u[1],s=n.length<2?(c=(c+l)/2,0):(l-c)/(n.length-1+a);return i=r(c+s*a/2,s),o=0,t={t:"rangePoints",a:arguments},e},e.rangeRoundPoints=function(u,a){arguments.length<2&&(a=0);var c=u[0],l=u[1],s=n.length<2?(c=l=Math.round((c+l)/2),0):(l-c)/(n.length-1+a)|0;return i=r(c+Math.round(s*a/2+(l-c-(n.length-1+a)*s)/2),s),o=0,t={t:"rangeRoundPoints",a:arguments},e},e.rangeBands=function(u,a,c){arguments.length<2&&(a=0),arguments.length<3&&(c=a);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=(f-s)/(n.length-a+2*c);return i=r(s+h*c,h),l&&i.reverse(),o=h*(1-a),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,a,c){arguments.length<2&&(a=0),arguments.length<3&&(c=a);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=Math.floor((f-s)/(n.length-a+2*c));return i=r(s+Math.round((f-s-(n.length-a)*h)/2),h),l&&i.reverse(),o=Math.round(h*(1-a)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Pi(t.a[0])},e.copy=function(){return Qi(n,t)},e.domain(n)}function no(n,t){function i(){var e=0,r=t.length;for(a=[];++e<r;)a[e-1]=ta.quantile(n,e/r);return o}function o(n){return isNaN(n=+n)?void 0:t[ta.bisect(a,n)]}var a;return o.domain=function(t){return arguments.length?(n=t.map(r).filter(u).sort(e),i()):n},o.range=function(n){return arguments.length?(t=n,i()):t},o.quantiles=function(){return a},o.invertExtent=function(e){return e=t.indexOf(e),0>e?[0/0,0/0]:[e>0?a[e-1]:n[0],e<a.length?a[e]:n[n.length-1]]},o.copy=function(){return no(n,t)},i()}function to(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),o=e.length-1,r}var i,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/i+n,[t,t+1/i]},r.copy=function(){return to(n,t,e)},u()}function eo(n,t){function e(e){return e>=e?t[ta.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return eo(n,t)},e}function ro(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Xi(n,t)},t.tickFormat=function(t,e){return $i(n,t,e)},t.copy=function(){return ro(n)},t}function uo(){return 0}function io(n){return n.innerRadius}function oo(n){return n.outerRadius}function ao(n){return n.startAngle}function co(n){return n.endAngle}function lo(n){return n&&n.padAngle}function so(n,t,e,r){return(n-e)*t-(t-r)*n>0?0:1}function fo(n,t,e,r,u){var i=n[0]-t[0],o=n[1]-t[1],a=(u?r:-r)/Math.sqrt(i*i+o*o),c=a*o,l=-a*i,s=n[0]+c,f=n[1]+l,h=t[0]+c,g=t[1]+l,p=(s+h)/2,v=(f+g)/2,d=h-s,m=g-f,y=d*d+m*m,M=e-r,x=s*g-h*f,b=(0>m?-1:1)*Math.sqrt(M*M*y-x*x),_=(x*m-d*b)/y,w=(-x*d-m*b)/y,S=(x*m+d*b)/y,k=(-x*d+m*b)/y,E=_-p,A=w-v,N=S-p,C=k-v;return E*E+A*A>N*N+C*C&&(_=S,w=k),[[_-c,w-l],[_*e/M,w*e/M]]}function ho(n){function t(t){function o(){l.push("M",i(n(s),a))}for(var c,l=[],s=[],f=-1,h=t.length,g=Et(e),p=Et(r);++f<h;)u.call(this,c=t[f],f)?s.push([+g.call(this,c,f),+p.call(this,c,f)]):s.length&&(o(),s=[]);return s.length&&o(),l.length?l.join(""):null}var e=Ar,r=Nr,u=Ne,i=go,o=i.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?i=n:(i=El.get(n)||go).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function go(n){return n.join("L")}function po(n){return go(n)+"Z"}function vo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function mo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function yo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function Mo(n,t){return n.length<4?go(n):n[1]+_o(n.slice(1,-1),wo(n,t))}function xo(n,t){return n.length<3?go(n):n[0]+_o((n.push(n[0]),n),wo([n[n.length-2]].concat(n,[n[1]]),t))}function bo(n,t){return n.length<3?go(n):n[0]+_o(n,wo(n,t))}function _o(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return go(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],o=t[0],a=o,c=1;if(e&&(r+="Q"+(i[0]-2*o[0]/3)+","+(i[1]-2*o[1]/3)+","+i[0]+","+i[1],u=n[1],c=2),t.length>1){a=t[1],i=n[c],c++,r+="C"+(u[0]+o[0])+","+(u[1]+o[1])+","+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1];for(var l=2;l<t.length;l++,c++)i=n[c],a=t[l],r+="S"+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1]}if(e){var s=n[c];r+="Q"+(i[0]+2*a[0]/3)+","+(i[1]+2*a[1]/3)+","+s[0]+","+s[1]}return r}function wo(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],o=n[1],a=1,c=n.length;++a<c;)e=i,i=o,o=n[a],r.push([u*(o[0]-e[0]),u*(o[1]-e[1])]);return r}function So(n){if(n.length<3)return go(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],o=[u,u,u,(r=n[1])[0]],a=[i,i,i,r[1]],c=[u,",",i,"L",No(Cl,o),",",No(Cl,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),Co(c,o,a);return n.pop(),c.push("L",r),c.join("")}function ko(n){if(n.length<4)return go(n);for(var t,e=[],r=-1,u=n.length,i=[0],o=[0];++r<3;)t=n[r],i.push(t[0]),o.push(t[1]);for(e.push(No(Cl,i)+","+No(Cl,o)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),o.shift(),o.push(t[1]),Co(e,i,o);return e.join("")}function Eo(n){for(var t,e,r=-1,u=n.length,i=u+4,o=[],a=[];++r<4;)e=n[r%u],o.push(e[0]),a.push(e[1]);for(t=[No(Cl,o),",",No(Cl,a)],--r;++r<i;)e=n[r%u],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),Co(t,o,a);return t.join("")}function Ao(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],o=n[0][1],a=n[e][0]-i,c=n[e][1]-o,l=-1;++l<=e;)r=n[l],u=l/e,r[0]=t*r[0]+(1-t)*(i+u*a),r[1]=t*r[1]+(1-t)*(o+u*c);return So(n)}function No(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Co(n,t,e){n.push("C",No(Al,t),",",No(Al,e),",",No(Nl,t),",",No(Nl,e),",",No(Cl,t),",",No(Cl,e))}function zo(n,t){return(t[1]-n[1])/(t[0]-n[0])}function qo(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],o=r[0]=zo(u,i);++t<e;)r[t]=(o+(o=zo(u=i,i=n[t+1])))/2;return r[t]=o,r}function Lo(n){for(var t,e,r,u,i=[],o=qo(n),a=-1,c=n.length-1;++a<c;)t=zo(n[a],n[a+1]),ga(t)<Ca?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),o[a]=u*e,o[a+1]=u*r));for(a=-1;++a<=c;)u=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),i.push([u||0,o[a]*u||0]);return i}function To(n){return n.length<3?go(n):n[0]+_o(n,Lo(n))}function Ro(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]-Ra,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Do(n){function t(t){function c(){v.push("M",a(n(m),f),s,l(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,M=t.length,x=Et(e),b=Et(u),_=e===r?function(){return g}:Et(r),w=u===i?function(){return p}:Et(i);++y<M;)o.call(this,h=t[y],y)?(d.push([g=+x.call(this,h,y),p=+b.call(this,h,y)]),m.push([+_.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],m=[]);return d.length&&c(),v.length?v.join(""):null}var e=Ar,r=Ar,u=0,i=Nr,o=Ne,a=go,c=a.key,l=a,s="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r
},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?a=n:(a=El.get(n)||go).key,l=a.reverse||a,s=a.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Po(n){return n.radius}function Uo(n){return[n.x,n.y]}function jo(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]-Ra;return[e*Math.cos(r),e*Math.sin(r)]}}function Fo(){return 64}function Ho(){return"circle"}function Oo(n){var t=Math.sqrt(n/qa);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Io(n){return function(){var t,e;(t=this[n])&&(e=t[t.active])&&(--t.count?delete t[t.active]:delete this[n],t.active+=.5,e.event&&e.event.interrupt.call(this,this.__data__,e.index))}}function Yo(n,t,e){return ya(n,Pl),n.namespace=t,n.id=e,n}function Zo(n,t,e,r){var u=n.id,i=n.namespace;return Y(n,"function"==typeof e?function(n,o,a){n[i][u].tween.set(t,r(e.call(n,n.__data__,o,a)))}:(e=r(e),function(n){n[i][u].tween.set(t,e)}))}function Vo(n){return null==n&&(n=""),function(){this.textContent=n}}function Xo(n){return null==n?"__transition__":"__transition_"+n+"__"}function $o(n,t,e,r,u){var i=n[e]||(n[e]={active:0,count:0}),o=i[r];if(!o){var a=u.time;o=i[r]={tween:new l,time:a,delay:u.delay,duration:u.duration,ease:u.ease,index:t},u=null,++i.count,ta.timer(function(u){function c(e){if(i.active>r)return s();var u=i[i.active];u&&(--i.count,delete i[i.active],u.event&&u.event.interrupt.call(n,n.__data__,u.index)),i.active=r,o.event&&o.event.start.call(n,n.__data__,t),o.tween.forEach(function(e,r){(r=r.call(n,n.__data__,t))&&v.push(r)}),h=o.ease,f=o.duration,ta.timer(function(){return p.c=l(e||1)?Ne:l,1},0,a)}function l(e){if(i.active!==r)return 1;for(var u=e/f,a=h(u),c=v.length;c>0;)v[--c].call(n,a);return u>=1?(o.event&&o.event.end.call(n,n.__data__,t),s()):void 0}function s(){return--i.count?delete i[r]:delete n[e],1}var f,h,g=o.delay,p=ec,v=[];return p.t=g+a,u>=g?c(u-g):void(p.c=c)},0,a)}}function Bo(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate("+(isFinite(r)?r:e(n))+",0)"})}function Wo(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate(0,"+(isFinite(r)?r:e(n))+")"})}function Jo(n){return n.toISOString()}function Go(n,t,e){function r(t){return n(t)}function u(n,e){var r=n[1]-n[0],u=r/e,i=ta.bisect(Vl,u);return i==Vl.length?[t.year,Vi(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/Vl[i-1]<Vl[i]/u?i-1:i]:[Bl,Vi(n,e)[2]]}return r.invert=function(t){return Ko(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Ko)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,Ko(+e+1),t).length}var i=r.domain(),o=Pi(i),a=null==n?u(o,10):"number"==typeof n&&u(o,n);return a&&(n=a[0],t=a[1]),r.domain(Fi(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=Ko(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=Ko(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Pi(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],Ko(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return Go(n.copy(),t,e)},Yi(r,n)}function Ko(n){return new Date(n)}function Qo(n){return JSON.parse(n.responseText)}function na(n){var t=ua.createRange();return t.selectNode(ua.body),t.createContextualFragment(n.responseText)}var ta={version:"3.5.5"},ea=[].slice,ra=function(n){return ea.call(n)},ua=this.document;if(ua)try{ra(ua.documentElement.childNodes)[0].nodeType}catch(ia){ra=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}if(Date.now||(Date.now=function(){return+new Date}),ua)try{ua.createElement("DIV").style.setProperty("opacity",0,"")}catch(oa){var aa=this.Element.prototype,ca=aa.setAttribute,la=aa.setAttributeNS,sa=this.CSSStyleDeclaration.prototype,fa=sa.setProperty;aa.setAttribute=function(n,t){ca.call(this,n,t+"")},aa.setAttributeNS=function(n,t,e){la.call(this,n,t,e+"")},sa.setProperty=function(n,t,e){fa.call(this,n,t+"",e)}}ta.ascending=e,ta.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},ta.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},ta.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},ta.extent=function(n,t){var e,r,u,i=-1,o=n.length;if(1===arguments.length){for(;++i<o;)if(null!=(r=n[i])&&r>=r){e=u=r;break}for(;++i<o;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<o;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=u=r;break}for(;++i<o;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},ta.sum=function(n,t){var e,r=0,i=n.length,o=-1;if(1===arguments.length)for(;++o<i;)u(e=+n[o])&&(r+=e);else for(;++o<i;)u(e=+t.call(n,n[o],o))&&(r+=e);return r},ta.mean=function(n,t){var e,i=0,o=n.length,a=-1,c=o;if(1===arguments.length)for(;++a<o;)u(e=r(n[a]))?i+=e:--c;else for(;++a<o;)u(e=r(t.call(n,n[a],a)))?i+=e:--c;return c?i/c:void 0},ta.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},ta.median=function(n,t){var i,o=[],a=n.length,c=-1;if(1===arguments.length)for(;++c<a;)u(i=r(n[c]))&&o.push(i);else for(;++c<a;)u(i=r(t.call(n,n[c],c)))&&o.push(i);return o.length?ta.quantile(o.sort(e),.5):void 0},ta.variance=function(n,t){var e,i,o=n.length,a=0,c=0,l=-1,s=0;if(1===arguments.length)for(;++l<o;)u(e=r(n[l]))&&(i=e-a,a+=i/++s,c+=i*(e-a));else for(;++l<o;)u(e=r(t.call(n,n[l],l)))&&(i=e-a,a+=i/++s,c+=i*(e-a));return s>1?c/(s-1):void 0},ta.deviation=function(){var n=ta.variance.apply(this,arguments);return n?Math.sqrt(n):n};var ha=i(e);ta.bisectLeft=ha.left,ta.bisect=ta.bisectRight=ha.right,ta.bisector=function(n){return i(1===n.length?function(t,r){return e(n(t),r)}:n)},ta.shuffle=function(n,t,e){(i=arguments.length)<3&&(e=n.length,2>i&&(t=0));for(var r,u,i=e-t;i;)u=Math.random()*i--|0,r=n[i+t],n[i+t]=n[u+t],n[u+t]=r;return n},ta.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},ta.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},ta.zip=function(){if(!(r=arguments.length))return[];for(var n=-1,t=ta.min(arguments,o),e=new Array(t);++n<t;)for(var r,u=-1,i=e[n]=new Array(r);++u<r;)i[u]=arguments[u][n];return e},ta.transpose=function(n){return ta.zip.apply(ta,n)},ta.keys=function(n){var t=[];for(var e in n)t.push(e);return t},ta.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},ta.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},ta.merge=function(n){for(var t,e,r,u=n.length,i=-1,o=0;++i<u;)o+=n[i].length;for(e=new Array(o);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--o]=r[t];return e};var ga=Math.abs;ta.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),(t-n)/e===1/0)throw new Error("infinite range");var r,u=[],i=a(ga(e)),o=-1;if(n*=i,t*=i,e*=i,0>e)for(;(r=n+e*++o)>t;)u.push(r/i);else for(;(r=n+e*++o)<t;)u.push(r/i);return u},ta.map=function(n,t){var e=new l;if(n instanceof l)n.forEach(function(n,t){e.set(n,t)});else if(Array.isArray(n)){var r,u=-1,i=n.length;if(1===arguments.length)for(;++u<i;)e.set(u,n[u]);else for(;++u<i;)e.set(t.call(n,r=n[u],u),r)}else for(var o in n)e.set(o,n[o]);return e};var pa="__proto__",va="\x00";c(l,{has:h,get:function(n){return this._[s(n)]},set:function(n,t){return this._[s(n)]=t},remove:g,keys:p,values:function(){var n=[];for(var t in this._)n.push(this._[t]);return n},entries:function(){var n=[];for(var t in this._)n.push({key:f(t),value:this._[t]});return n},size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,f(t),this._[t])}}),ta.nest=function(){function n(t,o,a){if(a>=i.length)return r?r.call(u,o):e?o.sort(e):o;for(var c,s,f,h,g=-1,p=o.length,v=i[a++],d=new l;++g<p;)(h=d.get(c=v(s=o[g])))?h.push(s):d.set(c,[s]);return t?(s=t(),f=function(e,r){s.set(e,n(t,r,a))}):(s={},f=function(e,r){s[e]=n(t,r,a)}),d.forEach(f),s}function t(n,e){if(e>=i.length)return n;var r=[],u=o[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,u={},i=[],o=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(ta.map,e,0),0)},u.key=function(n){return i.push(n),u},u.sortKeys=function(n){return o[i.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},ta.set=function(n){var t=new m;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},c(m,{has:h,add:function(n){return this._[s(n+="")]=!0,n},remove:g,values:p,size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,f(t))}}),ta.behavior={},ta.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=M(n,t,t[e]);return n};var da=["webkit","ms","moz","Moz","o","O"];ta.dispatch=function(){for(var n=new _,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=w(n);return n},_.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},ta.event=null,ta.requote=function(n){return n.replace(ma,"\\$&")};var ma=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,ya={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},Ma=function(n,t){return t.querySelector(n)},xa=function(n,t){return t.querySelectorAll(n)},ba=function(n,t){var e=n.matches||n[x(n,"matchesSelector")];return(ba=function(n,t){return e.call(n,t)})(n,t)};"function"==typeof Sizzle&&(Ma=function(n,t){return Sizzle(n,t)[0]||null},xa=Sizzle,ba=Sizzle.matchesSelector),ta.selection=function(){return ta.select(ua.documentElement)};var _a=ta.selection.prototype=[];_a.select=function(n){var t,e,r,u,i=[];n=N(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var c=-1,l=r.length;++c<l;)(u=r[c])?(t.push(e=n.call(u,u.__data__,c,o)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return A(i)},_a.selectAll=function(n){var t,e,r=[];n=C(n);for(var u=-1,i=this.length;++u<i;)for(var o=this[u],a=-1,c=o.length;++a<c;)(e=o[a])&&(r.push(t=ra(n.call(e,e.__data__,a,u))),t.parentNode=e);return A(r)};var wa={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};ta.ns={prefix:wa,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.slice(0,t),n=n.slice(t+1)),wa.hasOwnProperty(e)?{space:wa[e],local:n}:n}},_a.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=ta.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(z(t,n[t]));return this}return this.each(z(n,t))},_a.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=T(n)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!L(n[u]).test(t))return!1;return!0}for(t in n)this.each(R(t,n[t]));return this}return this.each(R(n,t))},_a.style=function(n,e,r){var u=arguments.length;if(3>u){if("string"!=typeof n){2>u&&(e="");for(r in n)this.each(P(r,n[r],e));return this}if(2>u){var i=this.node();return t(i).getComputedStyle(i,null).getPropertyValue(n)}r=""}return this.each(P(n,e,r))},_a.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(U(t,n[t]));return this}return this.each(U(n,t))},_a.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},_a.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},_a.append=function(n){return n=j(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},_a.insert=function(n,t){return n=j(n),t=N(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},_a.remove=function(){return this.each(F)},_a.data=function(n,t){function e(n,e){var r,u,i,o=n.length,f=e.length,h=Math.min(o,f),g=new Array(f),p=new Array(f),v=new Array(o);if(t){var d,m=new l,y=new Array(o);for(r=-1;++r<o;)m.has(d=t.call(u=n[r],u.__data__,r))?v[r]=u:m.set(d,u),y[r]=d;for(r=-1;++r<f;)(u=m.get(d=t.call(e,i=e[r],r)))?u!==!0&&(g[r]=u,u.__data__=i):p[r]=H(i),m.set(d,!0);for(r=-1;++r<o;)m.get(y[r])!==!0&&(v[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],i=e[r],u?(u.__data__=i,g[r]=u):p[r]=H(i);for(;f>r;++r)p[r]=H(e[r]);for(;o>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,a.push(p),c.push(g),s.push(v)}var r,u,i=-1,o=this.length;if(!arguments.length){for(n=new Array(o=(r=this[0]).length);++i<o;)(u=r[i])&&(n[i]=u.__data__);return n}var a=Z([]),c=A([]),s=A([]);if("function"==typeof n)for(;++i<o;)e(r=this[i],n.call(r,r.parentNode.__data__,i));else for(;++i<o;)e(r=this[i],n);return c.enter=function(){return a},c.exit=function(){return s},c},_a.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},_a.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=O(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return A(u)},_a.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},_a.sort=function(n){n=I.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},_a.each=function(n){return Y(this,function(t,e,r){n.call(t,t.__data__,e,r)})},_a.call=function(n){var t=ra(arguments);return n.apply(t[0]=this,t),this},_a.empty=function(){return!this.node()},_a.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},_a.size=function(){var n=0;return Y(this,function(){++n}),n};var Sa=[];ta.selection.enter=Z,ta.selection.enter.prototype=Sa,Sa.append=_a.append,Sa.empty=_a.empty,Sa.node=_a.node,Sa.call=_a.call,Sa.size=_a.size,Sa.select=function(n){for(var t,e,r,u,i,o=[],a=-1,c=this.length;++a<c;){r=(u=this[a]).update,o.push(t=[]),t.parentNode=u.parentNode;for(var l=-1,s=u.length;++l<s;)(i=u[l])?(t.push(r[l]=e=n.call(u.parentNode,i.__data__,l,a)),e.__data__=i.__data__):t.push(null)}return A(o)},Sa.insert=function(n,t){return arguments.length<2&&(t=V(this)),_a.insert.call(this,n,t)},ta.select=function(t){var e;return"string"==typeof t?(e=[Ma(t,ua)],e.parentNode=ua.documentElement):(e=[t],e.parentNode=n(t)),A([e])},ta.selectAll=function(n){var t;return"string"==typeof n?(t=ra(xa(n,ua)),t.parentNode=ua.documentElement):(t=n,t.parentNode=null),A([t])},_a.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(X(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(X(n,t,e))};var ka=ta.map({mouseenter:"mouseover",mouseleave:"mouseout"});ua&&ka.forEach(function(n){"on"+n in ua&&ka.remove(n)});var Ea,Aa=0;ta.mouse=function(n){return J(n,k())};var Na=this.navigator&&/WebKit/.test(this.navigator.userAgent)?-1:0;ta.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=k().changedTouches),t)for(var r,u=0,i=t.length;i>u;++u)if((r=t[u]).identifier===e)return J(n,r)},ta.behavior.drag=function(){function n(){this.on("mousedown.drag",i).on("touchstart.drag",o)}function e(n,t,e,i,o){return function(){function a(){var n,e,r=t(h,v);r&&(n=r[0]-M[0],e=r[1]-M[1],p|=n|e,M=r,g({type:"drag",x:r[0]+l[0],y:r[1]+l[1],dx:n,dy:e}))}function c(){t(h,v)&&(m.on(i+d,null).on(o+d,null),y(p&&ta.event.target===f),g({type:"dragend"}))}var l,s=this,f=ta.event.target,h=s.parentNode,g=r.of(s,arguments),p=0,v=n(),d=".drag"+(null==v?"":"-"+v),m=ta.select(e(f)).on(i+d,a).on(o+d,c),y=W(f),M=t(h,v);u?(l=u.apply(s,arguments),l=[l.x-M[0],l.y-M[1]]):l=[0,0],g({type:"dragstart"})}}var r=E(n,"drag","dragstart","dragend"),u=null,i=e(b,ta.mouse,t,"mousemove","mouseup"),o=e(G,ta.touch,y,"touchmove","touchend");return n.origin=function(t){return arguments.length?(u=t,n):u},ta.rebind(n,r,"on")},ta.touches=function(n,t){return arguments.length<2&&(t=k().touches),t?ra(t).map(function(t){var e=J(n,t);return e.identifier=t.identifier,e}):[]};var Ca=1e-6,za=Ca*Ca,qa=Math.PI,La=2*qa,Ta=La-Ca,Ra=qa/2,Da=qa/180,Pa=180/qa,Ua=Math.SQRT2,ja=2,Fa=4;ta.interpolateZoom=function(n,t){function e(n){var t=n*y;if(m){var e=rt(v),o=i/(ja*h)*(e*ut(Ua*t+v)-et(v));return[r+o*l,u+o*s,i*e/rt(Ua*t+v)]}return[r+n*l,u+n*s,i*Math.exp(Ua*t)]}var r=n[0],u=n[1],i=n[2],o=t[0],a=t[1],c=t[2],l=o-r,s=a-u,f=l*l+s*s,h=Math.sqrt(f),g=(c*c-i*i+Fa*f)/(2*i*ja*h),p=(c*c-i*i-Fa*f)/(2*c*ja*h),v=Math.log(Math.sqrt(g*g+1)-g),d=Math.log(Math.sqrt(p*p+1)-p),m=d-v,y=(m||Math.log(c/i))/Ua;return e.duration=1e3*y,e},ta.behavior.zoom=function(){function n(n){n.on(q,f).on(Oa+".zoom",g).on("dblclick.zoom",p).on(R,h)}function e(n){return[(n[0]-k.x)/k.k,(n[1]-k.y)/k.k]}function r(n){return[n[0]*k.k+k.x,n[1]*k.k+k.y]}function u(n){k.k=Math.max(N[0],Math.min(N[1],n))}function i(n,t){t=r(t),k.x+=n[0]-t[0],k.y+=n[1]-t[1]}function o(t,e,r,o){t.__chart__={x:k.x,y:k.y,k:k.k},u(Math.pow(2,o)),i(d=e,r),t=ta.select(t),C>0&&(t=t.transition().duration(C)),t.call(n.event)}function a(){b&&b.domain(x.range().map(function(n){return(n-k.x)/k.k}).map(x.invert)),w&&w.domain(_.range().map(function(n){return(n-k.y)/k.k}).map(_.invert))}function c(n){z++||n({type:"zoomstart"})}function l(n){a(),n({type:"zoom",scale:k.k,translate:[k.x,k.y]})}function s(n){--z||n({type:"zoomend"}),d=null}function f(){function n(){f=1,i(ta.mouse(u),g),l(a)}function r(){h.on(L,null).on(T,null),p(f&&ta.event.target===o),s(a)}var u=this,o=ta.event.target,a=D.of(u,arguments),f=0,h=ta.select(t(u)).on(L,n).on(T,r),g=e(ta.mouse(u)),p=W(u);Dl.call(u),c(a)}function h(){function n(){var n=ta.touches(p);return g=k.k,n.forEach(function(n){n.identifier in d&&(d[n.identifier]=e(n))}),n}function t(){var t=ta.event.target;ta.select(t).on(x,r).on(b,a),_.push(t);for(var e=ta.event.changedTouches,u=0,i=e.length;i>u;++u)d[e[u].identifier]=null;var c=n(),l=Date.now();if(1===c.length){if(500>l-M){var s=c[0];o(p,s,d[s.identifier],Math.floor(Math.log(k.k)/Math.LN2)+1),S()}M=l}else if(c.length>1){var s=c[0],f=c[1],h=s[0]-f[0],g=s[1]-f[1];m=h*h+g*g}}function r(){var n,t,e,r,o=ta.touches(p);Dl.call(p);for(var a=0,c=o.length;c>a;++a,r=null)if(e=o[a],r=d[e.identifier]){if(t)break;n=e,t=r}if(r){var s=(s=e[0]-n[0])*s+(s=e[1]-n[1])*s,f=m&&Math.sqrt(s/m);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+r[0])/2,(t[1]+r[1])/2],u(f*g)}M=null,i(n,t),l(v)}function a(){if(ta.event.touches.length){for(var t=ta.event.changedTouches,e=0,r=t.length;r>e;++e)delete d[t[e].identifier];for(var u in d)return void n()}ta.selectAll(_).on(y,null),w.on(q,f).on(R,h),E(),s(v)}var g,p=this,v=D.of(p,arguments),d={},m=0,y=".zoom-"+ta.event.changedTouches[0].identifier,x="touchmove"+y,b="touchend"+y,_=[],w=ta.select(p),E=W(p);t(),c(v),w.on(q,null).on(R,t)}function g(){var n=D.of(this,arguments);y?clearTimeout(y):(v=e(d=m||ta.mouse(this)),Dl.call(this),c(n)),y=setTimeout(function(){y=null,s(n)},50),S(),u(Math.pow(2,.002*Ha())*k.k),i(d,v),l(n)}function p(){var n=ta.mouse(this),t=Math.log(k.k)/Math.LN2;o(this,n,e(n),ta.event.shiftKey?Math.ceil(t)-1:Math.floor(t)+1)}var v,d,m,y,M,x,b,_,w,k={x:0,y:0,k:1},A=[960,500],N=Ia,C=250,z=0,q="mousedown.zoom",L="mousemove.zoom",T="mouseup.zoom",R="touchstart.zoom",D=E(n,"zoomstart","zoom","zoomend");return Oa||(Oa="onwheel"in ua?(Ha=function(){return-ta.event.deltaY*(ta.event.deltaMode?120:1)},"wheel"):"onmousewheel"in ua?(Ha=function(){return ta.event.wheelDelta},"mousewheel"):(Ha=function(){return-ta.event.detail},"MozMousePixelScroll")),n.event=function(n){n.each(function(){var n=D.of(this,arguments),t=k;Tl?ta.select(this).transition().each("start.zoom",function(){k=this.__chart__||{x:0,y:0,k:1},c(n)}).tween("zoom:zoom",function(){var e=A[0],r=A[1],u=d?d[0]:e/2,i=d?d[1]:r/2,o=ta.interpolateZoom([(u-k.x)/k.k,(i-k.y)/k.k,e/k.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=o(t),a=e/r[2];this.__chart__=k={x:u-r[0]*a,y:i-r[1]*a,k:a},l(n)}}).each("interrupt.zoom",function(){s(n)}).each("end.zoom",function(){s(n)}):(this.__chart__=k,c(n),l(n),s(n))})},n.translate=function(t){return arguments.length?(k={x:+t[0],y:+t[1],k:k.k},a(),n):[k.x,k.y]},n.scale=function(t){return arguments.length?(k={x:k.x,y:k.y,k:+t},a(),n):k.k},n.scaleExtent=function(t){return arguments.length?(N=null==t?Ia:[+t[0],+t[1]],n):N},n.center=function(t){return arguments.length?(m=t&&[+t[0],+t[1]],n):m},n.size=function(t){return arguments.length?(A=t&&[+t[0],+t[1]],n):A},n.duration=function(t){return arguments.length?(C=+t,n):C},n.x=function(t){return arguments.length?(b=t,x=t.copy(),k={x:0,y:0,k:1},n):b},n.y=function(t){return arguments.length?(w=t,_=t.copy(),k={x:0,y:0,k:1},n):w},ta.rebind(n,D,"on")};var Ha,Oa,Ia=[0,1/0];ta.color=ot,ot.prototype.toString=function(){return this.rgb()+""},ta.hsl=at;var Ya=at.prototype=new ot;Ya.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new at(this.h,this.s,this.l/n)},Ya.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new at(this.h,this.s,n*this.l)},Ya.rgb=function(){return ct(this.h,this.s,this.l)},ta.hcl=lt;var Za=lt.prototype=new ot;Za.brighter=function(n){return new lt(this.h,this.c,Math.min(100,this.l+Va*(arguments.length?n:1)))},Za.darker=function(n){return new lt(this.h,this.c,Math.max(0,this.l-Va*(arguments.length?n:1)))},Za.rgb=function(){return st(this.h,this.c,this.l).rgb()},ta.lab=ft;var Va=18,Xa=.95047,$a=1,Ba=1.08883,Wa=ft.prototype=new ot;Wa.brighter=function(n){return new ft(Math.min(100,this.l+Va*(arguments.length?n:1)),this.a,this.b)},Wa.darker=function(n){return new ft(Math.max(0,this.l-Va*(arguments.length?n:1)),this.a,this.b)},Wa.rgb=function(){return ht(this.l,this.a,this.b)},ta.rgb=mt;var Ja=mt.prototype=new ot;Ja.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),new mt(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new mt(u,u,u)},Ja.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new mt(n*this.r,n*this.g,n*this.b)},Ja.hsl=function(){return _t(this.r,this.g,this.b)},Ja.toString=function(){return"#"+xt(this.r)+xt(this.g)+xt(this.b)};var Ga=ta.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});Ga.forEach(function(n,t){Ga.set(n,yt(t))}),ta.functor=Et,ta.xhr=At(y),ta.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var o=Nt(n,t,null==e?r:u(e),i);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:u(n)):e},o}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function i(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),c=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(s>=l)return o;if(u)return u=!1,i;var t=s;if(34===n.charCodeAt(t)){for(var e=t;e++<l;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}s=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++s):10===r&&(u=!0),n.slice(t+1,e).replace(/""/g,'"')}for(;l>s;){var r=n.charCodeAt(s++),a=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(s)&&(++s,++a);else if(r!==c)continue;return n.slice(t,s-a)}return n.slice(t)}for(var r,u,i={},o={},a=[],l=n.length,s=0,f=0;(r=e())!==o;){for(var h=[];r!==i&&r!==o;)h.push(r),r=e();t&&null==(h=t(h,f++))||a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new m,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(o).join(n)].concat(t.map(function(t){return u.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(i).join("\n")},e},ta.csv=ta.dsv(",","text/csv"),ta.tsv=ta.dsv("	","text/tab-separated-values");var Ka,Qa,nc,tc,ec,rc=this[x(this,"requestAnimationFrame")]||function(n){setTimeout(n,17)};ta.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,f:!1,n:null};Qa?Qa.n=i:Ka=i,Qa=i,nc||(tc=clearTimeout(tc),nc=1,rc(qt))},ta.timer.flush=function(){Lt(),Tt()},ta.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var uc=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Dt);ta.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=ta.round(n,Rt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),uc[8+e/3]};var ic=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,oc=ta.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=ta.round(n,Rt(n,t))).toFixed(Math.max(0,Math.min(20,Rt(n*(1+1e-15),t))))}}),ac=ta.time={},cc=Date;jt.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){lc.setUTCDate.apply(this._,arguments)},setDay:function(){lc.setUTCDay.apply(this._,arguments)},setFullYear:function(){lc.setUTCFullYear.apply(this._,arguments)},setHours:function(){lc.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){lc.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){lc.setUTCMinutes.apply(this._,arguments)},setMonth:function(){lc.setUTCMonth.apply(this._,arguments)},setSeconds:function(){lc.setUTCSeconds.apply(this._,arguments)},setTime:function(){lc.setTime.apply(this._,arguments)}};var lc=Date.prototype;ac.year=Ft(function(n){return n=ac.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),ac.years=ac.year.range,ac.years.utc=ac.year.utc.range,ac.day=Ft(function(n){var t=new cc(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),ac.days=ac.day.range,ac.days.utc=ac.day.utc.range,ac.dayOfYear=function(n){var t=ac.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=ac[n]=Ft(function(n){return(n=ac.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=ac.year(n).getDay();return Math.floor((ac.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});ac[n+"s"]=e.range,ac[n+"s"].utc=e.utc.range,ac[n+"OfYear"]=function(n){var e=ac.year(n).getDay();return Math.floor((ac.dayOfYear(n)+(e+t)%7)/7)}}),ac.week=ac.sunday,ac.weeks=ac.sunday.range,ac.weeks.utc=ac.sunday.utc.range,ac.weekOfYear=ac.sundayOfYear;var sc={"-":"",_:" ",0:"0"},fc=/^\s*\d+/,hc=/^%/;ta.locale=function(n){return{numberFormat:Pt(n),timeFormat:Ot(n)}};var gc=ta.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});ta.format=gc.numberFormat,ta.geo={},ce.prototype={s:0,t:0,add:function(n){le(n,this.t,pc),le(pc.s,this.s,this),this.s?this.t+=pc.t:this.s=pc.t
},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var pc=new ce;ta.geo.stream=function(n,t){n&&vc.hasOwnProperty(n.type)?vc[n.type](n,t):se(n,t)};var vc={Feature:function(n,t){se(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)se(e[r].geometry,t)}},dc={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){fe(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)fe(e[r],t,0)},Polygon:function(n,t){he(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)he(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)se(e[r],t)}};ta.geo.area=function(n){return mc=0,ta.geo.stream(n,Mc),mc};var mc,yc=new ce,Mc={sphere:function(){mc+=4*qa},point:b,lineStart:b,lineEnd:b,polygonStart:function(){yc.reset(),Mc.lineStart=ge},polygonEnd:function(){var n=2*yc;mc+=0>n?4*qa+n:n,Mc.lineStart=Mc.lineEnd=Mc.point=b}};ta.geo.bounds=function(){function n(n,t){M.push(x=[s=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=pe([t*Da,e*Da]);if(m){var u=de(m,r),i=[u[1],-u[0],0],o=de(i,u);Me(o),o=xe(o);var c=t-p,l=c>0?1:-1,v=o[0]*Pa*l,d=ga(c)>180;if(d^(v>l*p&&l*t>v)){var y=o[1]*Pa;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>l*p&&l*t>v)){var y=-o[1]*Pa;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?a(s,t)>a(s,h)&&(h=t):a(t,h)>a(s,h)&&(s=t):h>=s?(s>t&&(s=t),t>h&&(h=t)):t>p?a(s,t)>a(s,h)&&(h=t):a(t,h)>a(s,h)&&(s=t)}else n(t,e);m=r,p=t}function e(){b.point=t}function r(){x[0]=s,x[1]=h,b.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=ga(r)>180?r+(r>0?360:-360):r}else v=n,d=e;Mc.point(n,e),t(n,e)}function i(){Mc.lineStart()}function o(){u(v,d),Mc.lineEnd(),ga(y)>Ca&&(s=-(h=180)),x[0]=s,x[1]=h,m=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function l(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var s,f,h,g,p,v,d,m,y,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=u,b.lineStart=i,b.lineEnd=o,y=0,Mc.polygonStart()},polygonEnd:function(){Mc.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>yc?(s=-(h=180),f=-(g=90)):y>Ca?g=90:-Ca>y&&(f=-90),x[0]=s,x[1]=h}};return function(n){g=h=-(s=f=1/0),M=[],ta.geo.stream(n,b);var t=M.length;if(t){M.sort(c);for(var e,r=1,u=M[0],i=[u];t>r;++r)e=M[r],l(e[0],u)||l(e[1],u)?(a(u[0],e[1])>a(u[0],u[1])&&(u[1]=e[1]),a(e[0],u[1])>a(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);for(var o,e,p=-1/0,t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(o=a(u[1],e[0]))>p&&(p=o,s=e[0],h=u[1])}return M=x=null,1/0===s||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[s,f],[h,g]]}}(),ta.geo.centroid=function(n){xc=bc=_c=wc=Sc=kc=Ec=Ac=Nc=Cc=zc=0,ta.geo.stream(n,qc);var t=Nc,e=Cc,r=zc,u=t*t+e*e+r*r;return za>u&&(t=kc,e=Ec,r=Ac,Ca>bc&&(t=_c,e=wc,r=Sc),u=t*t+e*e+r*r,za>u)?[0/0,0/0]:[Math.atan2(e,t)*Pa,tt(r/Math.sqrt(u))*Pa]};var xc,bc,_c,wc,Sc,kc,Ec,Ac,Nc,Cc,zc,qc={sphere:b,point:_e,lineStart:Se,lineEnd:ke,polygonStart:function(){qc.lineStart=Ee},polygonEnd:function(){qc.lineStart=Se}},Lc=Le(Ne,Pe,je,[-qa,-qa/2]),Tc=1e9;ta.geo.clipExtent=function(){var n,t,e,r,u,i,o={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(a){return arguments.length?(i=Ie(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),u&&(u.valid=!1,u=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(ta.geo.conicEqualArea=function(){return Ye(Ze)}).raw=Ze,ta.geo.albers=function(){return ta.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},ta.geo.albersUsa=function(){function n(n){var i=n[0],o=n[1];return t=null,e(i,o),t||(r(i,o),t)||u(i,o),t}var t,e,r,u,i=ta.geo.albers(),o=ta.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=ta.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?o:u>=.166&&.234>u&&r>=-.214&&-.115>r?a:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),o.precision(t),a.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),o.scale(.35*t),a.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var l=i.scale(),s=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[s-.455*l,f-.238*l],[s+.455*l,f+.238*l]]).stream(c).point,r=o.translate([s-.307*l,f+.201*l]).clipExtent([[s-.425*l+Ca,f+.12*l+Ca],[s-.214*l-Ca,f+.234*l-Ca]]).stream(c).point,u=a.translate([s-.205*l,f+.212*l]).clipExtent([[s-.214*l+Ca,f+.166*l+Ca],[s-.115*l-Ca,f+.234*l-Ca]]).stream(c).point,n},n.scale(1070)};var Rc,Dc,Pc,Uc,jc,Fc,Hc={point:b,lineStart:b,lineEnd:b,polygonStart:function(){Dc=0,Hc.lineStart=Ve},polygonEnd:function(){Hc.lineStart=Hc.lineEnd=Hc.point=b,Rc+=ga(Dc/2)}},Oc={point:Xe,lineStart:b,lineEnd:b,polygonStart:b,polygonEnd:b},Ic={point:We,lineStart:Je,lineEnd:Ge,polygonStart:function(){Ic.lineStart=Ke},polygonEnd:function(){Ic.point=We,Ic.lineStart=Je,Ic.lineEnd=Ge}};ta.geo.path=function(){function n(n){return n&&("function"==typeof a&&i.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=u(i)),ta.geo.stream(n,o)),i.result()}function t(){return o=null,n}var e,r,u,i,o,a=4.5;return n.area=function(n){return Rc=0,ta.geo.stream(n,u(Hc)),Rc},n.centroid=function(n){return _c=wc=Sc=kc=Ec=Ac=Nc=Cc=zc=0,ta.geo.stream(n,u(Ic)),zc?[Nc/zc,Cc/zc]:Ac?[kc/Ac,Ec/Ac]:Sc?[_c/Sc,wc/Sc]:[0/0,0/0]},n.bounds=function(n){return jc=Fc=-(Pc=Uc=1/0),ta.geo.stream(n,u(Oc)),[[Pc,Uc],[jc,Fc]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||tr(n):y,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new $e:new Qe(n),"function"!=typeof a&&i.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(i.pointRadius(+t),+t),n):a},n.projection(ta.geo.albersUsa()).context(null)},ta.geo.transform=function(n){return{stream:function(t){var e=new er(t);for(var r in n)e[r]=n[r];return e}}},er.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},ta.geo.projection=ur,ta.geo.projectionMutator=ir,(ta.geo.equirectangular=function(){return ur(ar)}).raw=ar.invert=ar,ta.geo.rotation=function(n){function t(t){return t=n(t[0]*Da,t[1]*Da),t[0]*=Pa,t[1]*=Pa,t}return n=lr(n[0]%360*Da,n[1]*Da,n.length>2?n[2]*Da:0),t.invert=function(t){return t=n.invert(t[0]*Da,t[1]*Da),t[0]*=Pa,t[1]*=Pa,t},t},cr.invert=ar,ta.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=lr(-n[0]*Da,-n[1]*Da,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=Pa,n[1]*=Pa}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=gr((t=+r)*Da,u*Da),n):t},n.precision=function(r){return arguments.length?(e=gr(t*Da,(u=+r)*Da),n):u},n.angle(90)},ta.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Da,u=n[1]*Da,i=t[1]*Da,o=Math.sin(r),a=Math.cos(r),c=Math.sin(u),l=Math.cos(u),s=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*o)*e+(e=l*s-c*f*a)*e),c*s+l*f*a)},ta.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return ta.range(Math.ceil(i/d)*d,u,d).map(h).concat(ta.range(Math.ceil(l/m)*m,c,m).map(g)).concat(ta.range(Math.ceil(r/p)*p,e,p).filter(function(n){return ga(n%d)>Ca}).map(s)).concat(ta.range(Math.ceil(a/v)*v,o,v).filter(function(n){return ga(n%m)>Ca}).map(f))}var e,r,u,i,o,a,c,l,s,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(l).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],l=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),l>c&&(t=l,l=c,c=t),n.precision(y)):[[i,l],[u,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(y)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,s=vr(a,o,90),f=dr(r,e,y),h=vr(l,c,90),g=dr(i,u,y),n):y},n.majorExtent([[-180,-90+Ca],[180,90-Ca]]).minorExtent([[-180,-80-Ca],[180,80+Ca]])},ta.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=mr,u=yr;return n.distance=function(){return ta.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},ta.geo.interpolate=function(n,t){return Mr(n[0]*Da,n[1]*Da,t[0]*Da,t[1]*Da)},ta.geo.length=function(n){return Yc=0,ta.geo.stream(n,Zc),Yc};var Yc,Zc={sphere:b,point:b,lineStart:xr,lineEnd:b,polygonStart:b,polygonEnd:b},Vc=br(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(ta.geo.azimuthalEqualArea=function(){return ur(Vc)}).raw=Vc;var Xc=br(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},y);(ta.geo.azimuthalEquidistant=function(){return ur(Xc)}).raw=Xc,(ta.geo.conicConformal=function(){return Ye(_r)}).raw=_r,(ta.geo.conicEquidistant=function(){return Ye(wr)}).raw=wr;var $c=br(function(n){return 1/n},Math.atan);(ta.geo.gnomonic=function(){return ur($c)}).raw=$c,Sr.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Ra]},(ta.geo.mercator=function(){return kr(Sr)}).raw=Sr;var Bc=br(function(){return 1},Math.asin);(ta.geo.orthographic=function(){return ur(Bc)}).raw=Bc;var Wc=br(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(ta.geo.stereographic=function(){return ur(Wc)}).raw=Wc,Er.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Ra]},(ta.geo.transverseMercator=function(){var n=kr(Er),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=Er,ta.geom={},ta.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=Et(e),i=Et(r),o=n.length,a=[],c=[];for(t=0;o>t;t++)a.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(a.sort(zr),t=0;o>t;t++)c.push([a[t][0],-a[t][1]]);var l=Cr(a),s=Cr(c),f=s[0]===l[0],h=s[s.length-1]===l[l.length-1],g=[];for(t=l.length-1;t>=0;--t)g.push(n[a[l[t]][2]]);for(t=+f;t<s.length-h;++t)g.push(n[a[s[t]][2]]);return g}var e=Ar,r=Nr;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},ta.geom.polygon=function(n){return ya(n,Jc),n};var Jc=ta.geom.polygon.prototype=[];Jc.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},Jc.centroid=function(n){var t,e,r=-1,u=this.length,i=0,o=0,a=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],i+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[i*n,o*n]},Jc.clip=function(n){for(var t,e,r,u,i,o,a=Tr(n),c=-1,l=this.length-Tr(this),s=this[l-1];++c<l;){for(t=n.slice(),n.length=0,u=this[c],i=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],qr(o,s,u)?(qr(i,s,u)||n.push(Lr(i,o,s,u)),n.push(o)):qr(i,s,u)&&n.push(Lr(i,o,s,u)),i=o;a&&n.push(n[0]),s=u}return n};var Gc,Kc,Qc,nl,tl,el=[],rl=[];Or.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Yr),t.length},Qr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},nu.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=uu(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(eu(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ru(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(ru(this,e),n=e,e=n.U),e.C=!1,r.C=!0,eu(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,o=n.R;if(e=i?o?uu(o):i:o,u?u.L===n?u.L=e:u.R=e:this._=e,i&&o?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==o?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=o,o.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return void(n.C=!1);do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,eu(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ru(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,eu(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,ru(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,eu(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,ru(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},ta.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],u=a[0][1],i=a[1][0],o=a[1][1];return iu(e(n),a).cells.forEach(function(e,a){var c=e.edges,l=e.site,s=t[a]=c.length?c.map(function(n){var t=n.start();return[t.x,t.y]}):l.x>=r&&l.x<=i&&l.y>=u&&l.y<=o?[[r,o],[i,o],[i,u],[r,u]]:[];s.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Ca)*Ca,y:Math.round(o(n,t)/Ca)*Ca,i:t}})}var r=Ar,u=Nr,i=r,o=u,a=ul;return n?t(n):(t.links=function(n){return iu(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return iu(e(n)).cells.forEach(function(e,r){for(var u,i,o=e.site,a=e.edges.sort(Yr),c=-1,l=a.length,s=a[l-1].edge,f=s.l===o?s.r:s.l;++c<l;)u=s,i=f,s=a[c].edge,f=s.l===o?s.r:s.l,r<i.i&&r<f.i&&au(o,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=Et(r=n),t):r},t.y=function(n){return arguments.length?(o=Et(u=n),t):u},t.clipExtent=function(n){return arguments.length?(a=null==n?ul:n,t):a===ul?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===ul?null:a&&a[1]},t)};var ul=[[-1e6,-1e6],[1e6,1e6]];ta.geom.delaunay=function(n){return ta.geom.voronoi().triangles(n)},ta.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,s=n.y;if(null!=c)if(ga(c-e)+ga(s-r)<.01)l(n,t,e,r,u,i,o,a);else{var f=n.point;n.x=n.y=n.point=null,l(n,f,c,s,u,i,o,a),l(n,t,e,r,u,i,o,a)}else n.x=e,n.y=r,n.point=t}else l(n,t,e,r,u,i,o,a)}function l(n,t,e,r,u,o,a,c){var l=.5*(u+a),s=.5*(o+c),f=e>=l,h=r>=s,g=h<<1|f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=su()),f?u=l:a=l,h?o=s:c=s,i(n,t,e,r,u,o,a,c)}var s,f,h,g,p,v,d,m,y,M=Et(a),x=Et(c);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,o)for(g=0;p>g;++g)s=n[g],s.x<v&&(v=s.x),s.y<d&&(d=s.y),s.x>m&&(m=s.x),s.y>y&&(y=s.y),f.push(s.x),h.push(s.y);else for(g=0;p>g;++g){var b=+M(s=n[g],g),_=+x(s,g);v>b&&(v=b),d>_&&(d=_),b>m&&(m=b),_>y&&(y=_),f.push(b),h.push(_)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=su();if(k.add=function(n){i(k,n,+M(n,++g),+x(n,g),v,d,m,y)},k.visit=function(n){fu(n,k,v,d,m,y)},k.find=function(n){return hu(k,n[0],n[1],v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=s=null,k}var o,a=Ar,c=Nr;return(o=arguments.length)?(a=cu,c=lu,3===o&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(a=n,i):a},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},ta.interpolateRgb=gu,ta.interpolateObject=pu,ta.interpolateNumber=vu,ta.interpolateString=du;var il=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ol=new RegExp(il.source,"g");ta.interpolate=mu,ta.interpolators=[function(n,t){var e=typeof t;return("string"===e?Ga.has(t)||/^(#|rgb\(|hsl\()/.test(t)?gu:du:t instanceof ot?gu:Array.isArray(t)?yu:"object"===e&&isNaN(t)?pu:vu)(n,t)}],ta.interpolateArray=yu;var al=function(){return y},cl=ta.map({linear:al,poly:ku,quad:function(){return _u},cubic:function(){return wu},sin:function(){return Eu},exp:function(){return Au},circle:function(){return Nu},elastic:Cu,back:zu,bounce:function(){return qu}}),ll=ta.map({"in":y,out:xu,"in-out":bu,"out-in":function(n){return bu(xu(n))}});ta.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in";return e=cl.get(e)||al,r=ll.get(r)||y,Mu(r(e.apply(null,ea.call(arguments,1))))},ta.interpolateHcl=Lu,ta.interpolateHsl=Tu,ta.interpolateLab=Ru,ta.interpolateRound=Du,ta.transform=function(n){var t=ua.createElementNS(ta.ns.prefix.svg,"g");return(ta.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Pu(e?e.matrix:sl)})(n)},Pu.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var sl={a:1,b:0,c:0,d:1,e:0,f:0};ta.interpolateTransform=Hu,ta.layout={},ta.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Yu(n[e]));return t}},ta.layout.chord=function(){function n(){var n,l,f,h,g,p={},v=[],d=ta.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(l=0,g=-1;++g<i;)l+=u[h][g];v.push(l),m.push(ta.range(i)),n+=l}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&m.forEach(function(n,t){n.sort(function(n,e){return a(u[t][n],u[t][e])})}),n=(La-s*i)/n,l=0,h=-1;++h<i;){for(f=l,g=-1;++g<i;){var y=d[h],M=m[y][g],x=u[y][M],b=l,_=l+=x*n;p[y+"-"+M]={index:y,subindex:M,startAngle:b,endAngle:_,value:x}}r[y]={index:y,startAngle:f,endAngle:l,value:(l-f)/n},l+=s}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,o,a,c,l={},s=0;return l.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,l):u},l.padding=function(n){return arguments.length?(s=n,e=r=null,l):s},l.sortGroups=function(n){return arguments.length?(o=n,e=r=null,l):o},l.sortSubgroups=function(n){return arguments.length?(a=n,e=null,l):a},l.sortChords=function(n){return arguments.length?(c=n,e&&t(),l):c},l.chords=function(){return e||n(),e},l.groups=function(){return r||n(),r},l},ta.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,o=t.cy-n.y,a=u-e,c=i*i+o*o;if(c>a*a/d){if(p>c){var l=t.charge/c;n.px-=i*l,n.py-=o*l}return!0}if(t.point&&c&&p>c){var l=t.pointCharge/c;n.px-=i*l,n.py-=o*l}}return!t.charge}}function t(n){n.px=ta.event.x,n.py=ta.event.y,a.resume()}var e,r,u,i,o,a={},c=ta.dispatch("start","tick","end"),l=[1,1],s=.9,f=fl,h=hl,g=-30,p=gl,v=.1,d=.64,m=[],M=[];return a.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,a,f,h,p,d,y,x,b=m.length,_=M.length;for(e=0;_>e;++e)a=M[e],f=a.source,h=a.target,y=h.x-f.x,x=h.y-f.y,(p=y*y+x*x)&&(p=r*i[e]*((p=Math.sqrt(p))-u[e])/p,y*=p,x*=p,h.x-=y*(d=f.weight/(h.weight+f.weight)),h.y-=x*d,f.x+=y*(d=1-d),f.y+=x*d);if((d=r*v)&&(y=l[0]/2,x=l[1]/2,e=-1,d))for(;++e<b;)a=m[e],a.x+=(y-a.x)*d,a.y+=(x-a.y)*d;if(g)for(Ju(t=ta.geom.quadtree(m),r,o),e=-1;++e<b;)(a=m[e]).fixed||t.visit(n(a));for(e=-1;++e<b;)a=m[e],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*s,a.y-=(a.py-(a.py=a.y))*s);c.tick({type:"tick",alpha:r})},a.nodes=function(n){return arguments.length?(m=n,a):m},a.links=function(n){return arguments.length?(M=n,a):M},a.size=function(n){return arguments.length?(l=n,a):l},a.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,a):f},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(s=+n,a):s},a.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,a):g},a.chargeDistance=function(n){return arguments.length?(p=n*n,a):Math.sqrt(p)},a.gravity=function(n){return arguments.length?(v=+n,a):v},a.theta=function(n){return arguments.length?(d=n*n,a):Math.sqrt(d)},a.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),ta.timer(a.tick)),a):r},a.start=function(){function n(n,r){if(!e){for(e=new Array(c),a=0;c>a;++a)e[a]=[];for(a=0;s>a;++a){var u=M[a];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var i,o=e[t],a=-1,l=o.length;++a<l;)if(!isNaN(i=o[a][n]))return i;return Math.random()*r}var t,e,r,c=m.length,s=M.length,p=l[0],v=l[1];for(t=0;c>t;++t)(r=m[t]).index=t,r.weight=0;for(t=0;s>t;++t)r=M[t],"number"==typeof r.source&&(r.source=m[r.source]),"number"==typeof r.target&&(r.target=m[r.target]),++r.source.weight,++r.target.weight;for(t=0;c>t;++t)r=m[t],isNaN(r.x)&&(r.x=n("x",p)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof f)for(t=0;s>t;++t)u[t]=+f.call(this,M[t],t);else for(t=0;s>t;++t)u[t]=f;if(i=[],"function"==typeof h)for(t=0;s>t;++t)i[t]=+h.call(this,M[t],t);else for(t=0;s>t;++t)i[t]=h;if(o=[],"function"==typeof g)for(t=0;c>t;++t)o[t]=+g.call(this,m[t],t);else for(t=0;c>t;++t)o[t]=g;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return e||(e=ta.behavior.drag().origin(y).on("dragstart.force",Xu).on("drag.force",t).on("dragend.force",$u)),arguments.length?void this.on("mouseover.force",Bu).on("mouseout.force",Wu).call(e):e},ta.rebind(a,c,"on")};var fl=20,hl=1,gl=1/0;ta.layout.hierarchy=function(){function n(u){var i,o=[u],a=[];for(u.depth=0;null!=(i=o.pop());)if(a.push(i),(l=e.call(n,i,i.depth))&&(c=l.length)){for(var c,l,s;--c>=0;)o.push(s=l[c]),s.parent=i,s.depth=i.depth+1;r&&(i.value=0),i.children=l}else r&&(i.value=+r.call(n,i,i.depth)||0),delete i.children;return Qu(u,function(n){var e,u;t&&(e=n.children)&&e.sort(t),r&&(u=n.parent)&&(u.value+=n.value)}),a}var t=ei,e=ni,r=ti;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&(Ku(t,function(n){n.children&&(n.value=0)}),Qu(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},ta.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(o=i.length)){var o,a,c,l=-1;for(r=t.value?r/t.value:0;++l<o;)n(a=i[l],e,c=a.value*r,u),e+=c}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var o=r.call(this,e,i);return n(o[0],0,u[0],u[1]/t(o[0])),o}var r=ta.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},Gu(e,r)},ta.layout.pie=function(){function n(o){var a,c=o.length,l=o.map(function(e,r){return+t.call(n,e,r)}),s=+("function"==typeof r?r.apply(this,arguments):r),f=("function"==typeof u?u.apply(this,arguments):u)-s,h=Math.min(Math.abs(f)/c,+("function"==typeof i?i.apply(this,arguments):i)),g=h*(0>f?-1:1),p=(f-c*g)/ta.sum(l),v=ta.range(c),d=[];return null!=e&&v.sort(e===pl?function(n,t){return l[t]-l[n]}:function(n,t){return e(o[n],o[t])}),v.forEach(function(n){d[n]={data:o[n],value:a=l[n],startAngle:s,endAngle:s+=a*p+g,padAngle:h}}),d}var t=Number,e=pl,r=0,u=La,i=0;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n.padAngle=function(t){return arguments.length?(i=t,n):i},n};var pl={};ta.layout.stack=function(){function n(a,c){if(!(h=a.length))return a;var l=a.map(function(e,r){return t.call(n,e,r)}),s=l.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),o.call(n,t,e)]})}),f=e.call(n,s,c);l=ta.permute(l,f),s=ta.permute(s,f);var h,g,p,v,d=r.call(n,s,c),m=l[0].length;for(p=0;m>p;++p)for(u.call(n,l[0][p],v=d[p],s[0][p][1]),g=1;h>g;++g)u.call(n,l[g][p],v+=s[g-1][p][1],s[g][p][1]);return a}var t=y,e=ai,r=ci,u=oi,i=ui,o=ii;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:vl.get(t)||ai,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:dl.get(t)||ci,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(u=t,n):u},n};var vl=ta.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(li),i=n.map(si),o=ta.range(r).sort(function(n,t){return u[n]-u[t]}),a=0,c=0,l=[],s=[];for(t=0;r>t;++t)e=o[t],c>a?(a+=i[e],l.push(e)):(c+=i[e],s.push(e));return s.reverse().concat(l)},reverse:function(n){return ta.range(n.length).reverse()},"default":ai}),dl=ta.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,o=[],a=0,c=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;i>e;++e)c[e]=(a-o[e])/2;return c},wiggle:function(n){var t,e,r,u,i,o,a,c,l,s=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=l=0,e=1;h>e;++e){for(t=0,u=0;s>t;++t)u+=n[t][e][1];for(t=0,i=0,a=f[e][0]-f[e-1][0];s>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;i+=o*n[t][e][1]}g[e]=c-=u?i/u*a:0,l>c&&(l=c)}for(e=0;h>e;++e)g[e]-=l;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,o=1/u,a=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=o}for(e=0;i>e;++e)a[e]=0;return a},zero:ci});ta.layout.histogram=function(){function n(n,i){for(var o,a,c=[],l=n.map(e,this),s=r.call(this,l,i),f=u.call(this,s,l,i),i=-1,h=l.length,g=f.length-1,p=t?1:1/h;++i<g;)o=c[i]=[],o.dx=f[i+1]-(o.x=f[i]),o.y=0;if(g>0)for(i=-1;++i<h;)a=l[i],a>=s[0]&&a<=s[1]&&(o=c[ta.bisect(f,a,1,g)-1],o.y+=p,o.push(n[i]));return c}var t=!0,e=Number,r=pi,u=hi;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=Et(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return gi(n,t)}:Et(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},ta.layout.pack=function(){function n(n,i){var o=e.call(this,n,i),a=o[0],c=u[0],l=u[1],s=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,Qu(a,function(n){n.r=+s(n.value)}),Qu(a,Mi),r){var f=r*(t?1:Math.max(2*a.r/c,2*a.r/l))/2;Qu(a,function(n){n.r+=f}),Qu(a,Mi),Qu(a,function(n){n.r-=f})}return _i(a,c/2,l/2,t?1:1/Math.max(2*a.r/c,2*a.r/l)),o}var t,e=ta.layout.hierarchy().sort(vi),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},Gu(n,e)},ta.layout.tree=function(){function n(n,u){var s=o.call(this,n,u),f=s[0],h=t(f);if(Qu(h,e),h.parent.m=-h.z,Ku(h,r),l)Ku(f,i);else{var g=f,p=f,v=f;Ku(f,function(n){n.x<g.x&&(g=n),n.x>p.x&&(p=n),n.depth>v.depth&&(v=n)});var d=a(g,p)/2-g.x,m=c[0]/(p.x+a(p,g)/2+d),y=c[1]/(v.depth||1);Ku(f,function(n){n.x=(n.x+d)*m,n.y=n.depth*y})}return s}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var u,i=t.children,o=0,a=i.length;a>o;++o)r.push((i[o]=u={_:i[o],parent:t,children:(u=i[o].children)&&u.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=u);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){Ni(n);var i=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+a(n._,r._),n.m=n.z-i):n.z=i}else r&&(n.z=r.z+a(n._,r._));n.parent.A=u(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function u(n,t,e){if(t){for(var r,u=n,i=n,o=t,c=u.parent.children[0],l=u.m,s=i.m,f=o.m,h=c.m;o=Ei(o),u=ki(u),o&&u;)c=ki(c),i=Ei(i),i.a=n,r=o.z+f-u.z-l+a(o._,u._),r>0&&(Ai(Ci(o,n,e),n,r),l+=r,s+=r),f+=o.m,l+=u.m,h+=c.m,s+=i.m;o&&!Ei(i)&&(i.t=o,i.m+=f-s),u&&!ki(c)&&(c.t=u,c.m+=l-h,e=n)}return e}function i(n){n.x*=c[0],n.y=n.depth*c[1]}var o=ta.layout.hierarchy().sort(null).value(null),a=Si,c=[1,1],l=null;return n.separation=function(t){return arguments.length?(a=t,n):a},n.size=function(t){return arguments.length?(l=null==(c=t)?i:null,n):l?null:c},n.nodeSize=function(t){return arguments.length?(l=null==(c=t)?null:i,n):l?c:null},Gu(n,o)},ta.layout.cluster=function(){function n(n,i){var o,a=t.call(this,n,i),c=a[0],l=0;Qu(c,function(n){var t=n.children;t&&t.length?(n.x=qi(t),n.y=zi(t)):(n.x=o?l+=e(n,o):0,n.y=0,o=n)});var s=Li(c),f=Ti(c),h=s.x-e(s,f)/2,g=f.x+e(f,s)/2;return Qu(c,u?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),a}var t=ta.layout.hierarchy().sort(null).value(null),e=Si,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Gu(n,t)},ta.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var o,a,c,l=f(e),s=[],h=i.slice(),p=1/0,v="slice"===g?l.dx:"dice"===g?l.dy:"slice-dice"===g?1&e.depth?l.dy:l.dx:Math.min(l.dx,l.dy);for(n(h,l.dx*l.dy/e.value),s.area=0;(c=h.length)>0;)s.push(o=h[c-1]),s.area+=o.area,"squarify"!==g||(a=r(s,v))<=p?(h.pop(),p=a):(s.area-=s.pop().area,u(s,v,l,!1),v=Math.min(l.dx,l.dy),s.length=s.area=0,p=1/0);s.length&&(u(s,v,l,!0),s.length=s.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,o=f(t),a=r.slice(),c=[];for(n(a,o.dx*o.dy/t.value),c.area=0;i=a.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?o.dx:o.dy,o,!a.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,o=n.length,a=e.x,l=e.y,s=t?c(n.area/t):0;if(t==e.dx){for((r||s>e.dy)&&(s=e.dy);++i<o;)u=n[i],u.x=a,u.y=l,u.dy=s,a+=u.dx=Math.min(e.x+e.dx-a,s?c(u.area/s):0);u.z=!0,u.dx+=e.x+e.dx-a,e.y+=s,e.dy-=s}else{for((r||s>e.dx)&&(s=e.dx);++i<o;)u=n[i],u.x=a,u.y=l,u.dx=s,l+=u.dy=Math.min(e.y+e.dy-l,s?c(u.area/s):0);u.z=!1,u.dy+=e.y+e.dy-l,e.x+=s,e.dx-=s}}function i(r){var u=o||a(r),i=u[0];return i.x=0,i.y=0,i.dx=l[0],i.dy=l[1],o&&a.revalue(i),n([i],i.dx*i.dy/i.value),(o?e:t)(i),h&&(o=u),u}var o,a=ta.layout.hierarchy(),c=Math.round,l=[1,1],s=null,f=Ri,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));
return i.size=function(n){return arguments.length?(l=n,i):l},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?Ri(t):Di(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Di(t,n)}if(!arguments.length)return s;var r;return f=null==(s=n)?Ri:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,o=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},Gu(i,a)},ta.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=ta.random.normal.apply(ta,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=ta.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},ta.scale={};var ml={floor:y,ceil:y};ta.scale.linear=function(){return Ii([0,1],[0,1],mu,!1)};var yl={s:1,g:1,p:1,r:1,e:1};ta.scale.log=function(){return Ji(ta.scale.linear().domain([0,1]),10,!0,[1,10])};var Ml=ta.format(".0e"),xl={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};ta.scale.pow=function(){return Gi(ta.scale.linear(),1,[0,1])},ta.scale.sqrt=function(){return ta.scale.pow().exponent(.5)},ta.scale.ordinal=function(){return Qi([],{t:"range",a:[[]]})},ta.scale.category10=function(){return ta.scale.ordinal().range(bl)},ta.scale.category20=function(){return ta.scale.ordinal().range(_l)},ta.scale.category20b=function(){return ta.scale.ordinal().range(wl)},ta.scale.category20c=function(){return ta.scale.ordinal().range(Sl)};var bl=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(Mt),_l=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(Mt),wl=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(Mt),Sl=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(Mt);ta.scale.quantile=function(){return no([],[])},ta.scale.quantize=function(){return to(0,1,[0,1])},ta.scale.threshold=function(){return eo([.5],[0,1])},ta.scale.identity=function(){return ro([0,1])},ta.svg={},ta.svg.arc=function(){function n(){var n=Math.max(0,+e.apply(this,arguments)),l=Math.max(0,+r.apply(this,arguments)),s=o.apply(this,arguments)-Ra,f=a.apply(this,arguments)-Ra,h=Math.abs(f-s),g=s>f?0:1;if(n>l&&(p=l,l=n,n=p),h>=Ta)return t(l,g)+(n?t(n,1-g):"")+"Z";var p,v,d,m,y,M,x,b,_,w,S,k,E=0,A=0,N=[];if((m=(+c.apply(this,arguments)||0)/2)&&(d=i===kl?Math.sqrt(n*n+l*l):+i.apply(this,arguments),g||(A*=-1),l&&(A=tt(d/l*Math.sin(m))),n&&(E=tt(d/n*Math.sin(m)))),l){y=l*Math.cos(s+A),M=l*Math.sin(s+A),x=l*Math.cos(f-A),b=l*Math.sin(f-A);var C=Math.abs(f-s-2*A)<=qa?0:1;if(A&&so(y,M,x,b)===g^C){var z=(s+f)/2;y=l*Math.cos(z),M=l*Math.sin(z),x=b=null}}else y=M=0;if(n){_=n*Math.cos(f-E),w=n*Math.sin(f-E),S=n*Math.cos(s+E),k=n*Math.sin(s+E);var q=Math.abs(s-f+2*E)<=qa?0:1;if(E&&so(_,w,S,k)===1-g^q){var L=(s+f)/2;_=n*Math.cos(L),w=n*Math.sin(L),S=k=null}}else _=w=0;if((p=Math.min(Math.abs(l-n)/2,+u.apply(this,arguments)))>.001){v=l>n^g?0:1;var T=null==S?[_,w]:null==x?[y,M]:Lr([y,M],[S,k],[x,b],[_,w]),R=y-T[0],D=M-T[1],P=x-T[0],U=b-T[1],j=1/Math.sin(Math.acos((R*P+D*U)/(Math.sqrt(R*R+D*D)*Math.sqrt(P*P+U*U)))/2),F=Math.sqrt(T[0]*T[0]+T[1]*T[1]);if(null!=x){var H=Math.min(p,(l-F)/(j+1)),O=fo(null==S?[_,w]:[S,k],[y,M],l,H,g),I=fo([x,b],[_,w],l,H,g);p===H?N.push("M",O[0],"A",H,",",H," 0 0,",v," ",O[1],"A",l,",",l," 0 ",1-g^so(O[1][0],O[1][1],I[1][0],I[1][1]),",",g," ",I[1],"A",H,",",H," 0 0,",v," ",I[0]):N.push("M",O[0],"A",H,",",H," 0 1,",v," ",I[0])}else N.push("M",y,",",M);if(null!=S){var Y=Math.min(p,(n-F)/(j-1)),Z=fo([y,M],[S,k],n,-Y,g),V=fo([_,w],null==x?[y,M]:[x,b],n,-Y,g);p===Y?N.push("L",V[0],"A",Y,",",Y," 0 0,",v," ",V[1],"A",n,",",n," 0 ",g^so(V[1][0],V[1][1],Z[1][0],Z[1][1]),",",1-g," ",Z[1],"A",Y,",",Y," 0 0,",v," ",Z[0]):N.push("L",V[0],"A",Y,",",Y," 0 0,",v," ",Z[0])}else N.push("L",_,",",w)}else N.push("M",y,",",M),null!=x&&N.push("A",l,",",l," 0 ",C,",",g," ",x,",",b),N.push("L",_,",",w),null!=S&&N.push("A",n,",",n," 0 ",q,",",1-g," ",S,",",k);return N.push("Z"),N.join("")}function t(n,t){return"M0,"+n+"A"+n+","+n+" 0 1,"+t+" 0,"+-n+"A"+n+","+n+" 0 1,"+t+" 0,"+n}var e=io,r=oo,u=uo,i=kl,o=ao,a=co,c=lo;return n.innerRadius=function(t){return arguments.length?(e=Et(t),n):e},n.outerRadius=function(t){return arguments.length?(r=Et(t),n):r},n.cornerRadius=function(t){return arguments.length?(u=Et(t),n):u},n.padRadius=function(t){return arguments.length?(i=t==kl?kl:Et(t),n):i},n.startAngle=function(t){return arguments.length?(o=Et(t),n):o},n.endAngle=function(t){return arguments.length?(a=Et(t),n):a},n.padAngle=function(t){return arguments.length?(c=Et(t),n):c},n.centroid=function(){var n=(+e.apply(this,arguments)+ +r.apply(this,arguments))/2,t=(+o.apply(this,arguments)+ +a.apply(this,arguments))/2-Ra;return[Math.cos(t)*n,Math.sin(t)*n]},n};var kl="auto";ta.svg.line=function(){return ho(y)};var El=ta.map({linear:go,"linear-closed":po,step:vo,"step-before":mo,"step-after":yo,basis:So,"basis-open":ko,"basis-closed":Eo,bundle:Ao,cardinal:bo,"cardinal-open":Mo,"cardinal-closed":xo,monotone:To});El.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Al=[0,2/3,1/3,0],Nl=[0,1/3,2/3,0],Cl=[0,1/6,2/3,1/6];ta.svg.line.radial=function(){var n=ho(Ro);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},mo.reverse=yo,yo.reverse=mo,ta.svg.area=function(){return Do(y)},ta.svg.area.radial=function(){var n=Do(Ro);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},ta.svg.chord=function(){function n(n,a){var c=t(this,i,n,a),l=t(this,o,n,a);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,l)?u(c.r,c.p1,c.r,c.p0):u(c.r,c.p1,l.r,l.p0)+r(l.r,l.p1,l.a1-l.a0)+u(l.r,l.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=a.call(n,u,r),o=c.call(n,u,r)-Ra,s=l.call(n,u,r)-Ra;return{r:i,a0:o,a1:s,p0:[i*Math.cos(o),i*Math.sin(o)],p1:[i*Math.cos(s),i*Math.sin(s)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>qa)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=mr,o=yr,a=Po,c=ao,l=co;return n.radius=function(t){return arguments.length?(a=Et(t),n):a},n.source=function(t){return arguments.length?(i=Et(t),n):i},n.target=function(t){return arguments.length?(o=Et(t),n):o},n.startAngle=function(t){return arguments.length?(c=Et(t),n):c},n.endAngle=function(t){return arguments.length?(l=Et(t),n):l},n},ta.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),o=e.call(this,n,u),a=(i.y+o.y)/2,c=[i,{x:i.x,y:a},{x:o.x,y:a},o];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=mr,e=yr,r=Uo;return n.source=function(e){return arguments.length?(t=Et(e),n):t},n.target=function(t){return arguments.length?(e=Et(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},ta.svg.diagonal.radial=function(){var n=ta.svg.diagonal(),t=Uo,e=n.projection;return n.projection=function(n){return arguments.length?e(jo(t=n)):t},n},ta.svg.symbol=function(){function n(n,r){return(zl.get(t.call(this,n,r))||Oo)(e.call(this,n,r))}var t=Ho,e=Fo;return n.type=function(e){return arguments.length?(t=Et(e),n):t},n.size=function(t){return arguments.length?(e=Et(t),n):e},n};var zl=ta.map({circle:Oo,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Ll)),e=t*Ll;return"M0,"+-t+"L"+e+",0 0,"+t+" "+-e+",0Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/ql),e=t*ql/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/ql),e=t*ql/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});ta.svg.symbolTypes=zl.keys();var ql=Math.sqrt(3),Ll=Math.tan(30*Da);_a.transition=function(n){for(var t,e,r=Tl||++Ul,u=Xo(n),i=[],o=Rl||{time:Date.now(),ease:Su,delay:0,duration:250},a=-1,c=this.length;++a<c;){i.push(t=[]);for(var l=this[a],s=-1,f=l.length;++s<f;)(e=l[s])&&$o(e,s,u,r,o),t.push(e)}return Yo(i,u,r)},_a.interrupt=function(n){return this.each(null==n?Dl:Io(Xo(n)))};var Tl,Rl,Dl=Io(Xo()),Pl=[],Ul=0;Pl.call=_a.call,Pl.empty=_a.empty,Pl.node=_a.node,Pl.size=_a.size,ta.transition=function(n,t){return n&&n.transition?Tl?n.transition(t):n:ta.selection().transition(n)},ta.transition.prototype=Pl,Pl.select=function(n){var t,e,r,u=this.id,i=this.namespace,o=[];n=N(n);for(var a=-1,c=this.length;++a<c;){o.push(t=[]);for(var l=this[a],s=-1,f=l.length;++s<f;)(r=l[s])&&(e=n.call(r,r.__data__,s,a))?("__data__"in r&&(e.__data__=r.__data__),$o(e,s,i,u,r[i][u]),t.push(e)):t.push(null)}return Yo(o,i,u)},Pl.selectAll=function(n){var t,e,r,u,i,o=this.id,a=this.namespace,c=[];n=C(n);for(var l=-1,s=this.length;++l<s;)for(var f=this[l],h=-1,g=f.length;++h<g;)if(r=f[h]){i=r[a][o],e=n.call(r,r.__data__,h,l),c.push(t=[]);for(var p=-1,v=e.length;++p<v;)(u=e[p])&&$o(u,p,a,o,i),t.push(u)}return Yo(c,a,o)},Pl.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=O(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]);for(var e=this[i],a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return Yo(u,this.namespace,this.id)},Pl.tween=function(n,t){var e=this.id,r=this.namespace;return arguments.length<2?this.node()[r][e].tween.get(n):Y(this,null==t?function(t){t[r][e].tween.remove(n)}:function(u){u[r][e].tween.set(n,t)})},Pl.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?Hu:mu,a=ta.ns.qualify(n);return Zo(this,"attr."+n,t,a.local?i:u)},Pl.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=ta.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Pl.style=function(n,e,r){function u(){this.style.removeProperty(n)}function i(e){return null==e?u:(e+="",function(){var u,i=t(this).getComputedStyle(this,null).getPropertyValue(n);return i!==e&&(u=mu(i,e),function(t){this.style.setProperty(n,u(t),r)})})}var o=arguments.length;if(3>o){if("string"!=typeof n){2>o&&(e="");for(r in n)this.style(r,n[r],e);return this}r=""}return Zo(this,"style."+n,e,i)},Pl.styleTween=function(n,e,r){function u(u,i){var o=e.call(this,u,i,t(this).getComputedStyle(this,null).getPropertyValue(n));return o&&function(t){this.style.setProperty(n,o(t),r)}}return arguments.length<3&&(r=""),this.tween("style."+n,u)},Pl.text=function(n){return Zo(this,"text",n,Vo)},Pl.remove=function(){var n=this.namespace;return this.each("end.transition",function(){var t;this[n].count<2&&(t=this.parentNode)&&t.removeChild(this)})},Pl.ease=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].ease:("function"!=typeof n&&(n=ta.ease.apply(ta,arguments)),Y(this,function(r){r[e][t].ease=n}))},Pl.delay=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].delay:Y(this,"function"==typeof n?function(r,u,i){r[e][t].delay=+n.call(r,r.__data__,u,i)}:(n=+n,function(r){r[e][t].delay=n}))},Pl.duration=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].duration:Y(this,"function"==typeof n?function(r,u,i){r[e][t].duration=Math.max(1,n.call(r,r.__data__,u,i))}:(n=Math.max(1,n),function(r){r[e][t].duration=n}))},Pl.each=function(n,t){var e=this.id,r=this.namespace;if(arguments.length<2){var u=Rl,i=Tl;try{Tl=e,Y(this,function(t,u,i){Rl=t[r][e],n.call(t,t.__data__,u,i)})}finally{Rl=u,Tl=i}}else Y(this,function(u){var i=u[r][e];(i.event||(i.event=ta.dispatch("start","end","interrupt"))).on(n,t)});return this},Pl.transition=function(){for(var n,t,e,r,u=this.id,i=++Ul,o=this.namespace,a=[],c=0,l=this.length;l>c;c++){a.push(n=[]);for(var t=this[c],s=0,f=t.length;f>s;s++)(e=t[s])&&(r=e[o][u],$o(e,s,o,i,{time:r.time,ease:r.ease,delay:r.delay+r.duration,duration:r.duration})),n.push(e)}return Yo(a,o,i)},ta.svg.axis=function(){function n(n){n.each(function(){var n,l=ta.select(this),s=this.__chart__||e,f=this.__chart__=e.copy(),h=null==c?f.ticks?f.ticks.apply(f,a):f.domain():c,g=null==t?f.tickFormat?f.tickFormat.apply(f,a):y:t,p=l.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Ca),d=ta.transition(p.exit()).style("opacity",Ca).remove(),m=ta.transition(p.order()).style("opacity",1),M=Math.max(u,0)+o,x=Ui(f),b=l.selectAll(".domain").data([0]),_=(b.enter().append("path").attr("class","domain"),ta.transition(b));v.append("line"),v.append("text");var w,S,k,E,A=v.select("line"),N=m.select("line"),C=p.select("text").text(g),z=v.select("text"),q=m.select("text"),L="top"===r||"left"===r?-1:1;if("bottom"===r||"top"===r?(n=Bo,w="x",k="y",S="x2",E="y2",C.attr("dy",0>L?"0em":".71em").style("text-anchor","middle"),_.attr("d","M"+x[0]+","+L*i+"V0H"+x[1]+"V"+L*i)):(n=Wo,w="y",k="x",S="y2",E="x2",C.attr("dy",".32em").style("text-anchor",0>L?"end":"start"),_.attr("d","M"+L*i+","+x[0]+"H0V"+x[1]+"H"+L*i)),A.attr(E,L*u),z.attr(k,L*M),N.attr(S,0).attr(E,L*u),q.attr(w,0).attr(k,L*M),f.rangeBand){var T=f,R=T.rangeBand()/2;s=f=function(n){return T(n)+R}}else s.rangeBand?s=f:d.call(n,f,s);v.call(n,s,f),m.call(n,f,f)})}var t,e=ta.scale.linear(),r=jl,u=6,i=6,o=3,a=[10],c=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Fl?t+"":jl,n):r},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var jl="bottom",Fl={top:1,right:1,bottom:1,left:1};ta.svg.brush=function(){function n(t){t.each(function(){var t=ta.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",i).on("touchstart.brush",i),o=t.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),t.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=t.selectAll(".resize").data(v,y);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Hl[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var c,f=ta.transition(t),h=ta.transition(o);l&&(c=Ui(l),h.attr("x",c[0]).attr("width",c[1]-c[0]),r(f)),s&&(c=Ui(s),h.attr("y",c[0]).attr("height",c[1]-c[0]),u(f)),e(f)})}function e(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+f[+/e$/.test(n)]+","+h[+/^s/.test(n)]+")"})}function r(n){n.select(".extent").attr("x",f[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",f[1]-f[0])}function u(n){n.select(".extent").attr("y",h[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",h[1]-h[0])}function i(){function i(){32==ta.event.keyCode&&(C||(M=null,q[0]-=f[1],q[1]-=h[1],C=2),S())}function v(){32==ta.event.keyCode&&2==C&&(q[0]+=f[1],q[1]+=h[1],C=0,S())}function d(){var n=ta.mouse(b),t=!1;x&&(n[0]+=x[0],n[1]+=x[1]),C||(ta.event.altKey?(M||(M=[(f[0]+f[1])/2,(h[0]+h[1])/2]),q[0]=f[+(n[0]<M[0])],q[1]=h[+(n[1]<M[1])]):M=null),A&&m(n,l,0)&&(r(k),t=!0),N&&m(n,s,1)&&(u(k),t=!0),t&&(e(k),w({type:"brush",mode:C?"move":"resize"}))}function m(n,t,e){var r,u,i=Ui(t),c=i[0],l=i[1],s=q[e],v=e?h:f,d=v[1]-v[0];return C&&(c-=s,l-=d+s),r=(e?p:g)?Math.max(c,Math.min(l,n[e])):n[e],C?u=(r+=s)+d:(M&&(s=Math.max(c,Math.min(l,2*M[e]-r))),r>s?(u=r,r=s):u=s),v[0]!=r||v[1]!=u?(e?a=null:o=null,v[0]=r,v[1]=u,!0):void 0}function y(){d(),k.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),ta.select("body").style("cursor",null),L.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),z(),w({type:"brushend"})}var M,x,b=this,_=ta.select(ta.event.target),w=c.of(b,arguments),k=ta.select(b),E=_.datum(),A=!/^(n|s)$/.test(E)&&l,N=!/^(e|w)$/.test(E)&&s,C=_.classed("extent"),z=W(b),q=ta.mouse(b),L=ta.select(t(b)).on("keydown.brush",i).on("keyup.brush",v);if(ta.event.changedTouches?L.on("touchmove.brush",d).on("touchend.brush",y):L.on("mousemove.brush",d).on("mouseup.brush",y),k.interrupt().selectAll("*").interrupt(),C)q[0]=f[0]-q[0],q[1]=h[0]-q[1];else if(E){var T=+/w$/.test(E),R=+/^n/.test(E);x=[f[1-T]-q[0],h[1-R]-q[1]],q[0]=f[T],q[1]=h[R]}else ta.event.altKey&&(M=q.slice());k.style("pointer-events","none").selectAll(".resize").style("display",null),ta.select("body").style("cursor",_.style("cursor")),w({type:"brushstart"}),d()}var o,a,c=E(n,"brushstart","brush","brushend"),l=null,s=null,f=[0,0],h=[0,0],g=!0,p=!0,v=Ol[0];return n.event=function(n){n.each(function(){var n=c.of(this,arguments),t={x:f,y:h,i:o,j:a},e=this.__chart__||t;this.__chart__=t,Tl?ta.select(this).transition().each("start.brush",function(){o=e.i,a=e.j,f=e.x,h=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=yu(f,t.x),r=yu(h,t.y);return o=a=null,function(u){f=t.x=e(u),h=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){o=t.i,a=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(l=t,v=Ol[!l<<1|!s],n):l},n.y=function(t){return arguments.length?(s=t,v=Ol[!l<<1|!s],n):s},n.clamp=function(t){return arguments.length?(l&&s?(g=!!t[0],p=!!t[1]):l?g=!!t:s&&(p=!!t),n):l&&s?[g,p]:l?g:s?p:null},n.extent=function(t){var e,r,u,i,c;return arguments.length?(l&&(e=t[0],r=t[1],s&&(e=e[0],r=r[0]),o=[e,r],l.invert&&(e=l(e),r=l(r)),e>r&&(c=e,e=r,r=c),(e!=f[0]||r!=f[1])&&(f=[e,r])),s&&(u=t[0],i=t[1],l&&(u=u[1],i=i[1]),a=[u,i],s.invert&&(u=s(u),i=s(i)),u>i&&(c=u,u=i,i=c),(u!=h[0]||i!=h[1])&&(h=[u,i])),n):(l&&(o?(e=o[0],r=o[1]):(e=f[0],r=f[1],l.invert&&(e=l.invert(e),r=l.invert(r)),e>r&&(c=e,e=r,r=c))),s&&(a?(u=a[0],i=a[1]):(u=h[0],i=h[1],s.invert&&(u=s.invert(u),i=s.invert(i)),u>i&&(c=u,u=i,i=c))),l&&s?[[e,u],[r,i]]:l?[e,r]:s&&[u,i])},n.clear=function(){return n.empty()||(f=[0,0],h=[0,0],o=a=null),n},n.empty=function(){return!!l&&f[0]==f[1]||!!s&&h[0]==h[1]},ta.rebind(n,c,"on")};var Hl={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Ol=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Il=ac.format=gc.timeFormat,Yl=Il.utc,Zl=Yl("%Y-%m-%dT%H:%M:%S.%LZ");Il.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Jo:Zl,Jo.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},Jo.toString=Zl.toString,ac.second=Ft(function(n){return new cc(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),ac.seconds=ac.second.range,ac.seconds.utc=ac.second.utc.range,ac.minute=Ft(function(n){return new cc(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),ac.minutes=ac.minute.range,ac.minutes.utc=ac.minute.utc.range,ac.hour=Ft(function(n){var t=n.getTimezoneOffset()/60;return new cc(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),ac.hours=ac.hour.range,ac.hours.utc=ac.hour.utc.range,ac.month=Ft(function(n){return n=ac.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),ac.months=ac.month.range,ac.months.utc=ac.month.utc.range;var Vl=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Xl=[[ac.second,1],[ac.second,5],[ac.second,15],[ac.second,30],[ac.minute,1],[ac.minute,5],[ac.minute,15],[ac.minute,30],[ac.hour,1],[ac.hour,3],[ac.hour,6],[ac.hour,12],[ac.day,1],[ac.day,2],[ac.week,1],[ac.month,1],[ac.month,3],[ac.year,1]],$l=Il.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",Ne]]),Bl={range:function(n,t,e){return ta.range(Math.ceil(n/e)*e,+t,e).map(Ko)},floor:y,ceil:y};Xl.year=ac.year,ac.scale=function(){return Go(ta.scale.linear(),Xl,$l)};var Wl=Xl.map(function(n){return[n[0].utc,n[1]]}),Jl=Yl.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",Ne]]);Wl.year=ac.year.utc,ac.scale.utc=function(){return Go(ta.scale.linear(),Wl,Jl)},ta.text=At(function(n){return n.responseText}),ta.json=function(n,t){return Nt(n,"application/json",Qo,t)},ta.html=function(n,t){return Nt(n,"text/html",na,t)},ta.xml=At(function(n){return n.responseXML}),"function"==typeof define&&define.amd?define(ta):"object"==typeof module&&module.exports&&(module.exports=ta),this.d3=ta}();

// underscore-min.js
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map

// katex.min.js
(function(e){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=e()}else if(typeof define==="function"&&define.amd){define([],e)}else{var t;if(typeof window!=="undefined"){t=window}else if(typeof global!=="undefined"){t=global}else if(typeof self!=="undefined"){t=self}else{t=this}t.katex=e()}})(function(){var e,t,i;return function h(e,t,i){function a(l,s){if(!t[l]){if(!e[l]){var p=typeof require=="function"&&require;if(!s&&p)return p(l,!0);if(r)return r(l,!0);var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}var n=t[l]={exports:{}};e[l][0].call(n.exports,function(t){var i=e[l][1][t];return a(i?i:t)},n,n.exports,h,e,t,i)}return t[l].exports}var r=typeof require=="function"&&require;for(var l=0;l<i.length;l++)a(i[l]);return a}({1:[function(e,t,i){var h=e("./src/ParseError");var a=e("./src/Settings");var r=e("./src/buildTree");var l=e("./src/parseTree");var s=e("./src/utils");var p=function(e,t,i){s.clearNode(t);var h=new a(i);var p=l(e,h);var c=r(p,e,h).toNode();t.appendChild(c)};if(typeof document!=="undefined"){if(document.compatMode!=="CSS1Compat"){typeof console!=="undefined"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your "+"website has a suitable doctype.");p=function(){throw new h("KaTeX doesn't work in quirks mode.")}}}var c=function(e,t){var i=new a(t);var h=l(e,i);return r(h,e,i).toMarkup()};var n=function(e,t){var i=new a(t);return l(e,i)};t.exports={render:p,renderToString:c,__parse:n,ParseError:h}},{"./src/ParseError":5,"./src/Settings":7,"./src/buildTree":12,"./src/parseTree":21,"./src/utils":23}],2:[function(e,t,i){"use strict";function h(e){if(!e.__matchAtRelocatable){var t=e.source+"|()";var i="g"+(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"");e.__matchAtRelocatable=new RegExp(t,i)}return e.__matchAtRelocatable}function a(e,t,i){if(e.global||e.sticky){throw new Error("matchAt(...): Only non-global regexes are supported")}var a=h(e);a.lastIndex=i;var r=a.exec(t);if(r[r.length-1]==null){r.length=r.length-1;return r}else{return null}}t.exports=a},{}],3:[function(e,t,i){var h=e("match-at");var a=e("./ParseError");function r(e){this._input=e}function l(e,t,i){this.text=e;this.data=t;this.position=i}var s=[/[/|@.""`0-9a-zA-Z]/,/[*+-]/,/[=<>:]/,/[,;]/,/['\^_{}]/,/[(\[]/,/[)\]?!]/,/~/,/&/,/\\\\/];var p=[/[a-zA-Z0-9`!@*()-=+\[\]'";:?\/.,]/,/[{}]/,/~/,/&/,/\\\\/];var c=/\s*/;var n=/ +|\\  +/;var o=/\\(?:[a-zA-Z]+|.)/;r.prototype._innerLex=function(e,t,i){var r=this._input;var s;if(i){s=h(c,r,e)[0];e+=s.length}else{s=h(n,r,e);if(s!==null){return new l(" ",null,e+s[0].length)}}if(e===r.length){return new l("EOF",null,e)}var p;if(p=h(o,r,e)){return new l(p[0],null,e+p[0].length)}else{for(var g=0;g<t.length;g++){var d=t[g];if(p=h(d,r,e)){return new l(p[0],null,e+p[0].length)}}}throw new a("Unexpected character: '"+r[e]+"'",this,e)};var g=/#[a-z0-9]+|[a-z]+/i;r.prototype._innerLexColor=function(e){var t=this._input;var i=h(c,t,e)[0];e+=i.length;var r;if(r=h(g,t,e)){return new l(r[0],null,e+r[0].length)}else{throw new a("Invalid color",this,e)}};var d=/(-?)\s*(\d+(?:\.\d*)?|\.\d+)\s*([a-z]{2})/;r.prototype._innerLexSize=function(e){var t=this._input;var i=h(c,t,e)[0];e+=i.length;var r;if(r=h(d,t,e)){var s=r[3];if(s!=="em"&&s!=="ex"){throw new a("Invalid unit: '"+s+"'",this,e)}return new l(r[0],{number:+(r[1]+r[2]),unit:s},e+r[0].length)}throw new a("Invalid size",this,e)};r.prototype._innerLexWhitespace=function(e){var t=this._input;var i=h(c,t,e)[0];e+=i.length;return new l(i[0],null,e)};r.prototype.lex=function(e,t){if(t==="math"){return this._innerLex(e,s,true)}else if(t==="text"){return this._innerLex(e,p,false)}else if(t==="color"){return this._innerLexColor(e)}else if(t==="size"){return this._innerLexSize(e)}else if(t==="whitespace"){return this._innerLexWhitespace(e)}};t.exports=r},{"./ParseError":5,"match-at":2}],4:[function(e,t,i){function h(e){this.style=e.style;this.color=e.color;this.size=e.size;this.phantom=e.phantom;this.font=e.font;if(e.parentStyle===undefined){this.parentStyle=e.style}else{this.parentStyle=e.parentStyle}if(e.parentSize===undefined){this.parentSize=e.size}else{this.parentSize=e.parentSize}}h.prototype.extend=function(e){var t={style:this.style,size:this.size,color:this.color,parentStyle:this.style,parentSize:this.size,phantom:this.phantom,font:this.font};for(var i in e){if(e.hasOwnProperty(i)){t[i]=e[i]}}return new h(t)};h.prototype.withStyle=function(e){return this.extend({style:e})};h.prototype.withSize=function(e){return this.extend({size:e})};h.prototype.withColor=function(e){return this.extend({color:e})};h.prototype.withPhantom=function(){return this.extend({phantom:true})};h.prototype.withFont=function(e){return this.extend({font:e})};h.prototype.reset=function(){return this.extend({})};var a={"katex-blue":"#6495ed","katex-orange":"#ffa500","katex-pink":"#ff00af","katex-red":"#df0030","katex-green":"#28ae7b","katex-gray":"gray","katex-purple":"#9d38bd","katex-blueA":"#c7e9f1","katex-blueB":"#9cdceb","katex-blueC":"#58c4dd","katex-blueD":"#29abca","katex-blueE":"#1c758a","katex-tealA":"#acead7","katex-tealB":"#76ddc0","katex-tealC":"#5cd0b3","katex-tealD":"#55c1a7","katex-tealE":"#49a88f","katex-greenA":"#c9e2ae","katex-greenB":"#a6cf8c","katex-greenC":"#83c167","katex-greenD":"#77b05d","katex-greenE":"#699c52","katex-goldA":"#f7c797","katex-goldB":"#f9b775","katex-goldC":"#f0ac5f","katex-goldD":"#e1a158","katex-goldE":"#c78d46","katex-redA":"#f7a1a3","katex-redB":"#ff8080","katex-redC":"#fc6255","katex-redD":"#e65a4c","katex-redE":"#cf5044","katex-maroonA":"#ecabc1","katex-maroonB":"#ec92ab","katex-maroonC":"#c55f73","katex-maroonD":"#a24d61","katex-maroonE":"#94424f","katex-purpleA":"#caa3e8","katex-purpleB":"#b189c6","katex-purpleC":"#9a72ac","katex-purpleD":"#715582","katex-purpleE":"#644172","katex-mintA":"#f5f9e8","katex-mintB":"#edf2df","katex-mintC":"#e0e5cc","katex-grayA":"#fdfdfd","katex-grayB":"#f7f7f7","katex-grayC":"#eeeeee","katex-grayD":"#dddddd","katex-grayE":"#cccccc","katex-grayF":"#aaaaaa","katex-grayG":"#999999","katex-grayH":"#555555","katex-grayI":"#333333","katex-kaBlue":"#314453","katex-kaGreen":"#639b24"};h.prototype.getColor=function(){if(this.phantom){return"transparent"}else{return a[this.color]||this.color}};t.exports=h},{}],5:[function(e,t,i){function h(e,t,i){var a="KaTeX parse error: "+e;if(t!==undefined&&i!==undefined){a+=" at position "+i+": ";var r=t._input;r=r.slice(0,i)+"\u0332"+r.slice(i);var l=Math.max(0,i-15);var s=i+15;a+=r.slice(l,s)}var p=new Error(a);p.name="ParseError";p.__proto__=h.prototype;p.position=i;return p}h.prototype.__proto__=Error.prototype;t.exports=h},{}],6:[function(e,t,i){var h=e("./functions");var a=e("./environments");var r=e("./Lexer");var l=e("./symbols");var s=e("./utils");var p=e("./parseData");var c=e("./ParseError");function n(e,t){this.lexer=new r(e);this.settings=t}var o=p.ParseNode;var g=p.ParseResult;function d(e,t){this.result=e;this.isFunction=t}n.prototype.expect=function(e,t){if(e.text!==t){throw new c("Expected '"+t+"', got '"+e.text+"'",this.lexer,e.position)}};n.prototype.parse=function(e){var t=this.parseInput(0,"math");return t.result};n.prototype.parseInput=function(e,t){var i=this.parseExpression(e,t,false);this.expect(i.peek,"EOF");return i};var w=["}","\\end","\\right","&","\\\\","\\cr"];n.prototype.parseExpression=function(e,t,i,h){var a=[];var r=null;while(true){r=this.lexer.lex(e,t);if(w.indexOf(r.text)!==-1){break}if(h&&r.text===h){break}var l=this.parseAtom(e,t);if(!l){if(!this.settings.throwOnError&&r.text[0]==="\\"){var s=this.handleUnsupportedCmd(r.text,t);a.push(s);e=r.position;continue}break}if(i&&l.result.type==="infix"){break}a.push(l.result);e=l.position}var p=new g(this.handleInfixNodes(a,t),e);p.peek=r;return p};n.prototype.handleInfixNodes=function(e,t){var i=-1;var a;var r;for(var l=0;l<e.length;l++){var s=e[l];if(s.type==="infix"){if(i!==-1){throw new c("only one infix operator per group",this.lexer,-1)}i=l;r=s.value.replaceWith;a=h.funcs[r]}}if(i!==-1){var p,n;var g=e.slice(0,i);var d=e.slice(i+1);if(g.length===1&&g[0].type==="ordgroup"){p=g[0]}else{p=new o("ordgroup",g,t)}if(d.length===1&&d[0].type==="ordgroup"){n=d[0]}else{n=new o("ordgroup",d,t)}var w=a.handler(r,p,n);return[new o(w.type,w,t)]}else{return e}};var u=1;n.prototype.handleSupSubscript=function(e,t,i,a){var r=this.parseGroup(e,t);if(!r){var l=this.lexer.lex(e,t);if(!this.settings.throwOnError&&l.text[0]==="\\"){return new g(this.handleUnsupportedCmd(l.text,t),l.position)}else{throw new c("Expected group after '"+i+"'",this.lexer,e)}}else if(r.isFunction){var s=h.funcs[r.result.result].greediness;if(s>u){return this.parseFunction(e,t)}else{throw new c("Got function '"+r.result.result+"' with no arguments "+"as "+a,this.lexer,e)}}else{return r.result}};n.prototype.handleUnsupportedCmd=function(e,t){var i=[];for(var h=0;h<e.length;h++){i.push(new o("textord",e[h],"text"))}var a=new o("text",{body:i,type:"text"},t);var r=new o("color",{color:this.settings.errorColor,value:[a],type:"color"},t);return r};n.prototype.parseAtom=function(e,t){var i=this.parseImplicitGroup(e,t);if(t==="text"){return i}var h;if(!i){h=e;i=undefined}else{h=i.position}var a;var r;var l;while(true){var s=this.lexer.lex(h,t);if(s.text==="\\limits"||s.text==="\\nolimits"){if(!i||i.result.type!=="op"){throw new c("Limit controls must follow a math operator",this.lexer,h)}else{var p=s.text==="\\limits";i.result.value.limits=p;i.result.value.alwaysHandleSupSub=true;h=s.position}}else if(s.text==="^"){if(a){throw new c("Double superscript",this.lexer,h)}l=this.handleSupSubscript(s.position,t,s.text,"superscript");h=l.position;a=l.result}else if(s.text==="_"){if(r){throw new c("Double subscript",this.lexer,h)}l=this.handleSupSubscript(s.position,t,s.text,"subscript");h=l.position;r=l.result}else if(s.text==="'"){var n=new o("textord","\\prime",t);var d=[n];h=s.position;while((s=this.lexer.lex(h,t)).text==="'"){d.push(n);h=s.position}a=new o("ordgroup",d,t)}else{break}}if(a||r){return new g(new o("supsub",{base:i&&i.result,sup:a,sub:r},t),h)}else{return i}};var k=["\\tiny","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"];var m=["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"];n.prototype.parseImplicitGroup=function(e,t){var i=this.parseSymbol(e,t);if(!i||!i.result){return this.parseFunction(e,t)}var h=i.result.result;var r;if(h==="\\left"){var l=this.parseFunction(e,t);r=this.parseExpression(l.position,t,false);this.expect(r.peek,"\\right");var p=this.parseFunction(r.position,t);return new g(new o("leftright",{body:r.result,left:l.result.value.value,right:p.result.value.value},t),p.position)}else if(h==="\\begin"){var n=this.parseFunction(e,t);var d=n.result.value.name;if(!a.hasOwnProperty(d)){throw new c("No such environment: "+d,this.lexer,n.result.value.namepos)}var w=a[d];var u=[null,t,d];var f=this.parseArguments(n.position,t,"\\begin{"+d+"}",w,u);u[0]=f;var v=w.handler.apply(this,u);var y=this.lexer.lex(v.position,t);this.expect(y,"\\end");var x=this.parseFunction(v.position,t);if(x.result.value.name!==d){throw new c("Mismatch: \\begin{"+d+"} matched "+"by \\end{"+x.result.value.name+"}",this.lexer,x.namepos)}v.position=x.position;return v}else if(s.contains(k,h)){r=this.parseExpression(i.result.position,t,false);return new g(new o("sizing",{size:"size"+(s.indexOf(k,h)+1),value:r.result},t),r.position)}else if(s.contains(m,h)){r=this.parseExpression(i.result.position,t,true);return new g(new o("styling",{style:h.slice(1,h.length-5),value:r.result},t),r.position)}else{return this.parseFunction(e,t)}};n.prototype.parseFunction=function(e,t){var i=this.parseGroup(e,t);if(i){if(i.isFunction){var a=i.result.result;var r=h.funcs[a];if(t==="text"&&!r.allowedInText){throw new c("Can't use function '"+a+"' in text mode",this.lexer,i.position)}var l=[a];var s=this.parseArguments(i.result.position,t,a,r,l);var p=h.funcs[a].handler.apply(this,l);return new g(new o(p.type,p,t),s)}else{return i.result}}else{return null}};n.prototype.parseArguments=function(e,t,i,a,r){var l=a.numArgs+a.numOptionalArgs;if(l===0){return e}var s=e;var p=a.greediness;var n=[s];for(var o=0;o<l;o++){var w=a.argTypes&&a.argTypes[o];var u;if(o<a.numOptionalArgs){if(w){u=this.parseSpecialGroup(s,w,t,true)}else{u=this.parseOptionalGroup(s,t)}if(!u){r.push(null);n.push(s);continue}}else{if(w){u=this.parseSpecialGroup(s,w,t)}else{u=this.parseGroup(s,t)}if(!u){var k=this.lexer.lex(s,t);if(!this.settings.throwOnError&&k.text[0]==="\\"){u=new d(new g(this.handleUnsupportedCmd(k.text,t),k.position),false)}else{throw new c("Expected group after '"+i+"'",this.lexer,e)}}}var m;if(u.isFunction){var f=h.funcs[u.result.result].greediness;if(f>p){m=this.parseFunction(s,t)}else{throw new c("Got function '"+u.result.result+"' as "+"argument to '"+i+"'",this.lexer,u.result.position-1)}}else{m=u.result}r.push(m.result);n.push(m.position);s=m.position}r.push(n);return s};n.prototype.parseSpecialGroup=function(e,t,i,h){if(t==="original"){t=i}if(t==="color"||t==="size"){var a=this.lexer.lex(e,i);if(h&&a.text!=="["){return null}this.expect(a,h?"[":"{");var r=this.lexer.lex(a.position,t);var l;if(t==="color"){l=r.text}else{l=r.data}var s=this.lexer.lex(r.position,i);this.expect(s,h?"]":"}");return new d(new g(new o(t,l,i),s.position),false)}else if(t==="text"){var p=this.lexer.lex(e,"whitespace");e=p.position}if(h){return this.parseOptionalGroup(e,t)}else{return this.parseGroup(e,t)}};n.prototype.parseGroup=function(e,t){var i=this.lexer.lex(e,t);if(i.text==="{"){var h=this.parseExpression(i.position,t,false);var a=this.lexer.lex(h.position,t);this.expect(a,"}");return new d(new g(new o("ordgroup",h.result,t),a.position),false)}else{return this.parseSymbol(e,t)}};n.prototype.parseOptionalGroup=function(e,t){var i=this.lexer.lex(e,t);if(i.text==="["){var h=this.parseExpression(i.position,t,false,"]");var a=this.lexer.lex(h.position,t);this.expect(a,"]");return new d(new g(new o("ordgroup",h.result,t),a.position),false)}else{return null}};n.prototype.parseSymbol=function(e,t){var i=this.lexer.lex(e,t);if(h.funcs[i.text]){return new d(new g(i.text,i.position),true)}else if(l[t][i.text]){return new d(new g(new o(l[t][i.text].group,i.text,t),i.position),false)}else{return null}};n.prototype.ParseNode=o;t.exports=n},{"./Lexer":3,"./ParseError":5,"./environments":15,"./functions":18,"./parseData":20,"./symbols":22,"./utils":23}],7:[function(e,t,i){function h(e,t){return e===undefined?t:e}function a(e){e=e||{};this.displayMode=h(e.displayMode,false);this.throwOnError=h(e.throwOnError,true);this.errorColor=h(e.errorColor,"#cc0000")}t.exports=a},{}],8:[function(e,t,i){function h(e,t,i,h){this.id=e;this.size=t;this.cramped=h;this.sizeMultiplier=i}h.prototype.sup=function(){return w[u[this.id]]};h.prototype.sub=function(){return w[k[this.id]]};h.prototype.fracNum=function(){return w[m[this.id]]};h.prototype.fracDen=function(){return w[f[this.id]]};h.prototype.cramp=function(){return w[v[this.id]]};h.prototype.cls=function(){return g[this.size]+(this.cramped?" cramped":" uncramped")};h.prototype.reset=function(){return d[this.size]};var a=0;var r=1;var l=2;var s=3;var p=4;var c=5;var n=6;var o=7;var g=["displaystyle textstyle","textstyle","scriptstyle","scriptscriptstyle"];var d=["reset-textstyle","reset-textstyle","reset-scriptstyle","reset-scriptscriptstyle"];var w=[new h(a,0,1,false),new h(r,0,1,true),new h(l,1,1,false),new h(s,1,1,true),new h(p,2,.7,false),new h(c,2,.7,true),new h(n,3,.5,false),new h(o,3,.5,true)];var u=[p,c,p,c,n,o,n,o];var k=[c,c,c,c,o,o,o,o];var m=[l,s,p,c,n,o,n,o];var f=[s,s,c,c,o,o,o,o];var v=[r,r,s,s,c,c,o,o];t.exports={DISPLAY:w[a],TEXT:w[l],SCRIPT:w[p],SCRIPTSCRIPT:w[n]}},{}],9:[function(e,t,i){var h=e("./domTree");var a=e("./fontMetrics");var r=e("./symbols");var l=e("./utils");var s=["\\Gamma","\\Delta","\\Theta","\\Lambda","\\Xi","\\Pi","\\Sigma","\\Upsilon","\\Phi","\\Psi","\\Omega"];var p=["\u0131","\u0237"];var c=function(e,t,i,l,s){if(r[i][e]&&r[i][e].replace){e=r[i][e].replace}var p=a.getCharacterMetrics(e,t);var c;if(p){c=new h.symbolNode(e,p.height,p.depth,p.italic,p.skew,s)}else{typeof console!=="undefined"&&console.warn("No character metrics for '"+e+"' in style '"+t+"'");c=new h.symbolNode(e,0,0,0,0,s)}if(l){c.style.color=l}return c};var n=function(e,t,i,h){if(e==="\\"||r[t][e].font==="main"){return c(e,"Main-Regular",t,i,h)}else{return c(e,"AMS-Regular",t,i,h.concat(["amsrm"]))}};var o=function(e,t,i,h,a){if(a==="mathord"){return g(e,t,i,h)}else if(a==="textord"){return c(e,"Main-Regular",t,i,h.concat(["mathrm"]))}else{throw new Error("unexpected type: "+a+" in mathDefault")}};var g=function(e,t,i,h){if(/[0-9]/.test(e.charAt(0))||l.contains(p,e)||l.contains(s,e)){return c(e,"Main-Italic",t,i,h.concat(["mainit"]))}else{return c(e,"Math-Italic",t,i,h.concat(["mathit"]))}};var d=function(e,t,i){var h=e.mode;var s=e.value;if(r[h][s]&&r[h][s].replace){s=r[h][s].replace}var n=["mord"];var d=t.getColor();var w=t.font;if(w){if(w==="mathit"||l.contains(p,s)){return g(s,h,d,n)}else{var u=x[w].fontName;if(a.getCharacterMetrics(s,u)){return c(s,u,h,d,n.concat([w]))}else{return o(s,h,d,n,i)}}}else{return o(s,h,d,n,i)}};var w=function(e){var t=0;var i=0;var h=0;if(e.children){for(var a=0;a<e.children.length;a++){if(e.children[a].height>t){t=e.children[a].height}if(e.children[a].depth>i){i=e.children[a].depth}if(e.children[a].maxFontSize>h){h=e.children[a].maxFontSize}}}e.height=t;e.depth=i;e.maxFontSize=h};var u=function(e,t,i){var a=new h.span(e,t);w(a);if(i){a.style.color=i}return a};var k=function(e){var t=new h.documentFragment(e);w(t);return t};var m=function(e,t){var i=u([],[new h.symbolNode("\u200b")]);i.style.fontSize=t/e.style.sizeMultiplier+"em";var a=u(["fontsize-ensurer","reset-"+e.size,"size5"],[i]);return a};var f=function(e,t,i,a){var r;var l;var s;if(t==="individualShift"){var p=e;e=[p[0]];r=-p[0].shift-p[0].elem.depth;l=r;for(s=1;s<p.length;s++){var c=-p[s].shift-l-p[s].elem.depth;var n=c-(p[s-1].elem.height+p[s-1].elem.depth);l=l+c;e.push({type:"kern",size:n});e.push(p[s])}}else if(t==="top"){var o=i;for(s=0;s<e.length;s++){if(e[s].type==="kern"){o-=e[s].size}else{o-=e[s].elem.height+e[s].elem.depth}}r=o}else if(t==="bottom"){r=-i}else if(t==="shift"){r=-e[0].elem.depth-i}else if(t==="firstBaseline"){r=-e[0].elem.depth}else{r=0}var g=0;for(s=0;s<e.length;s++){if(e[s].type==="elem"){g=Math.max(g,e[s].elem.maxFontSize)}}var d=m(a,g);var w=[];l=r;for(s=0;s<e.length;s++){if(e[s].type==="kern"){l+=e[s].size}else{var k=e[s].elem;var f=-k.depth-l;l+=k.height+k.depth;var v=u([],[d,k]);v.height-=f;v.depth+=f;v.style.top=f+"em";w.push(v)}}var y=u(["baseline-fix"],[d,new h.symbolNode("\u200b")]);w.push(y);var x=u(["vlist"],w);x.height=Math.max(l,x.height);x.depth=Math.max(-r,x.depth);return x};var v={size1:.5,size2:.7,size3:.8,size4:.9,size5:1,size6:1.2,size7:1.44,size8:1.73,size9:2.07,size10:2.49};var y={"\\qquad":{size:"2em",className:"qquad"},"\\quad":{size:"1em",className:"quad"},"\\enspace":{size:"0.5em",className:"enspace"},"\\;":{size:"0.277778em",className:"thickspace"},"\\:":{size:"0.22222em",className:"mediumspace"},"\\,":{size:"0.16667em",className:"thinspace"},"\\!":{size:"-0.16667em",className:"negativethinspace"}};var x={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}};t.exports={fontMap:x,makeSymbol:c,mathsym:n,makeSpan:u,makeFragment:k,makeVList:f,makeOrd:d,sizingMultiplier:v,spacingFunctions:y}},{"./domTree":14,"./fontMetrics":16,"./symbols":22,"./utils":23}],10:[function(e,t,i){var h=e("./ParseError");var a=e("./Style");var r=e("./buildCommon");var l=e("./delimiter");var s=e("./domTree");var p=e("./fontMetrics");var c=e("./utils");var n=r.makeSpan;var o=function(e,t,i){var h=[];for(var a=0;a<e.length;a++){var r=e[a];h.push(v(r,t,i));i=r}return h};var g={mathord:"mord",textord:"mord",bin:"mbin",rel:"mrel",text:"mord",open:"mopen",close:"mclose",inner:"minner",genfrac:"mord",array:"mord",spacing:"mord",punct:"mpunct",ordgroup:"mord",op:"mop",katex:"mord",overline:"mord",rule:"mord",leftright:"minner",sqrt:"mord",accent:"mord"};var d=function(e){if(e==null){return g.mathord}else if(e.type==="supsub"){return d(e.value.base)}else if(e.type==="llap"||e.type==="rlap"){return d(e.value)}else if(e.type==="color"){return d(e.value.value)}else if(e.type==="sizing"){return d(e.value.value)}else if(e.type==="styling"){return d(e.value.value)}else if(e.type==="delimsizing"){return g[e.value.delimType]}else{return g[e.type]}};var w=function(e,t){if(!e){return false}else if(e.type==="op"){return e.value.limits&&(t.style.size===a.DISPLAY.size||e.value.alwaysHandleSupSub)}else if(e.type==="accent"){return k(e.value.base)}else{return null}};var u=function(e){if(!e){return false}else if(e.type==="ordgroup"){if(e.value.length===1){return u(e.value[0])}else{return e}}else if(e.type==="color"){if(e.value.value.length===1){return u(e.value.value[0])}else{return e}}else{return e}};var k=function(e){var t=u(e);return t.type==="mathord"||t.type==="textord"||t.type==="bin"||t.type==="rel"||t.type==="inner"||t.type==="open"||t.type==="close"||t.type==="punct"};var m=function(e){return n(["sizing","reset-"+e.size,"size5",e.style.reset(),a.TEXT.cls(),"nulldelimiter"])};var f={mathord:function(e,t,i){return r.makeOrd(e,t,"mathord")},textord:function(e,t,i){return r.makeOrd(e,t,"textord")},bin:function(e,t,i){var h="mbin";var a=i;while(a&&a.type==="color"){var l=a.value.value;a=l[l.length-1]}if(!i||c.contains(["mbin","mopen","mrel","mop","mpunct"],d(a))){e.type="textord";h="mord"}return r.mathsym(e.value,e.mode,t.getColor(),[h])},rel:function(e,t,i){return r.mathsym(e.value,e.mode,t.getColor(),["mrel"])},open:function(e,t,i){return r.mathsym(e.value,e.mode,t.getColor(),["mopen"])},close:function(e,t,i){return r.mathsym(e.value,e.mode,t.getColor(),["mclose"])},inner:function(e,t,i){return r.mathsym(e.value,e.mode,t.getColor(),["minner"])},punct:function(e,t,i){return r.mathsym(e.value,e.mode,t.getColor(),["mpunct"])},ordgroup:function(e,t,i){return n(["mord",t.style.cls()],o(e.value,t.reset()))},text:function(e,t,i){return n(["text","mord",t.style.cls()],o(e.value.body,t.reset()))},color:function(e,t,i){var h=o(e.value.value,t.withColor(e.value.color),i);return new r.makeFragment(h)},supsub:function(e,t,i){if(w(e.value.base,t)){return f[e.value.base.type](e,t,i)}var h=v(e.value.base,t.reset());var l,c,o,g;if(e.value.sup){o=v(e.value.sup,t.withStyle(t.style.sup()));l=n([t.style.reset(),t.style.sup().cls()],[o])}if(e.value.sub){g=v(e.value.sub,t.withStyle(t.style.sub()));c=n([t.style.reset(),t.style.sub().cls()],[g])}var u,m;if(k(e.value.base)){u=0;m=0}else{u=h.height-p.metrics.supDrop;m=h.depth+p.metrics.subDrop}var y;if(t.style===a.DISPLAY){y=p.metrics.sup1}else if(t.style.cramped){y=p.metrics.sup3}else{y=p.metrics.sup2}var x=a.TEXT.sizeMultiplier*t.style.sizeMultiplier;var b=.5/p.metrics.ptPerEm/x+"em";var z;if(!e.value.sup){m=Math.max(m,p.metrics.sub1,g.height-.8*p.metrics.xHeight);z=r.makeVList([{type:"elem",elem:c}],"shift",m,t);z.children[0].style.marginRight=b;if(h instanceof s.symbolNode){z.children[0].style.marginLeft=-h.italic+"em"}}else if(!e.value.sub){u=Math.max(u,y,o.depth+.25*p.metrics.xHeight);z=r.makeVList([{type:"elem",elem:l}],"shift",-u,t);z.children[0].style.marginRight=b}else{u=Math.max(u,y,o.depth+.25*p.metrics.xHeight);m=Math.max(m,p.metrics.sub2);var S=p.metrics.defaultRuleThickness;if(u-o.depth-(g.height-m)<4*S){m=4*S-(u-o.depth)+g.height;var M=.8*p.metrics.xHeight-(u-o.depth);if(M>0){u+=M;m-=M}}z=r.makeVList([{type:"elem",elem:c,shift:m},{type:"elem",elem:l,shift:-u}],"individualShift",null,t);if(h instanceof s.symbolNode){z.children[0].style.marginLeft=-h.italic+"em"}z.children[0].style.marginRight=b;z.children[1].style.marginRight=b}return n([d(e.value.base)],[h,z])},genfrac:function(e,t,i){var h=t.style;if(e.value.size==="display"){h=a.DISPLAY}else if(e.value.size==="text"){h=a.TEXT}var s=h.fracNum();var c=h.fracDen();var o=v(e.value.numer,t.withStyle(s));var g=n([h.reset(),s.cls()],[o]);var d=v(e.value.denom,t.withStyle(c));var w=n([h.reset(),c.cls()],[d]);var u;if(e.value.hasBarLine){u=p.metrics.defaultRuleThickness/t.style.sizeMultiplier}else{u=0}var k;var f;var y;if(h.size===a.DISPLAY.size){k=p.metrics.num1;if(u>0){f=3*u}else{f=7*p.metrics.defaultRuleThickness}y=p.metrics.denom1}else{if(u>0){k=p.metrics.num2;f=u}else{k=p.metrics.num3;f=3*p.metrics.defaultRuleThickness}y=p.metrics.denom2}var x;if(u===0){var b=k-o.depth-(d.height-y);if(b<f){k+=.5*(f-b);y+=.5*(f-b)}x=r.makeVList([{type:"elem",elem:w,shift:y},{type:"elem",elem:g,shift:-k}],"individualShift",null,t)}else{var z=p.metrics.axisHeight;if(k-o.depth-(z+.5*u)<f){k+=f-(k-o.depth-(z+.5*u))}if(z-.5*u-(d.height-y)<f){y+=f-(z-.5*u-(d.height-y))}var S=n([t.style.reset(),a.TEXT.cls(),"frac-line"]);S.height=u;var M=-(z-.5*u);x=r.makeVList([{type:"elem",elem:w,shift:y},{type:"elem",elem:S,shift:M},{type:"elem",elem:g,shift:-k}],"individualShift",null,t)}x.height*=h.sizeMultiplier/t.style.sizeMultiplier;x.depth*=h.sizeMultiplier/t.style.sizeMultiplier;var q;if(h.size===a.DISPLAY.size){q=p.metrics.delim1}else{q=p.metrics.getDelim2(h)}var A,T;if(e.value.leftDelim==null){A=m(t)}else{A=l.customSizedDelim(e.value.leftDelim,q,true,t.withStyle(h),e.mode)}if(e.value.rightDelim==null){T=m(t)}else{T=l.customSizedDelim(e.value.rightDelim,q,true,t.withStyle(h),e.mode)}return n(["mord",t.style.reset(),h.cls()],[A,n(["mfrac"],[x]),T],t.getColor())},array:function(e,t,i){var a,l;var s=e.value.body.length;var o=0;var g=new Array(s);var d=1/p.metrics.ptPerEm;var w=5*d;var u=12*d;var k=c.deflt(e.value.arraystretch,1);var m=k*u;var f=.7*m;var y=.3*m;var x=0;for(a=0;a<e.value.body.length;++a){var b=e.value.body[a];var z=f;var S=y;if(o<b.length){o=b.length}var M=new Array(b.length);for(l=0;l<b.length;++l){var q=v(b[l],t);if(S<q.depth){S=q.depth}if(z<q.height){z=q.height}M[l]=q}var A=0;if(e.value.rowGaps[a]){A=e.value.rowGaps[a].value;switch(A.unit){case"em":A=A.number;break;case"ex":A=A.number*p.metrics.emPerEx;break;default:console.error("Can't handle unit "+A.unit);A=0}if(A>0){A+=y;if(S<A){S=A}A=0}}M.height=z;M.depth=S;x+=z;M.pos=x;x+=S+A;g[a]=M}var T=x/2+p.metrics.axisHeight;var N=e.value.cols||[];var C=[];var R;var E;for(l=0,E=0;l<o||E<N.length;++l,++E){var P=N[E]||{};var D=true;while(P.type==="separator"){if(!D){R=n(["arraycolsep"],[]);R.style.width=p.metrics.doubleRuleSep+"em";C.push(R)}if(P.separator==="|"){var L=n(["vertical-separator"],[]);L.style.height=x+"em";L.style.verticalAlign=-(x-T)+"em";C.push(L)}else{throw new h("Invalid separator type: "+P.separator)}E++;P=N[E]||{};D=false}if(l>=o){continue}var O;if(l>0||e.value.hskipBeforeAndAfter){O=c.deflt(P.pregap,w);if(O!==0){R=n(["arraycolsep"],[]);R.style.width=O+"em";C.push(R)}}var I=[];for(a=0;a<s;++a){var B=g[a];var F=B[l];if(!F){continue}var _=B.pos-T;F.depth=B.depth;F.height=B.height;I.push({type:"elem",elem:F,shift:_})}I=r.makeVList(I,"individualShift",null,t);I=n(["col-align-"+(P.align||"c")],[I]);C.push(I);if(l<o-1||e.value.hskipBeforeAndAfter){O=c.deflt(P.postgap,w);if(O!==0){R=n(["arraycolsep"],[]);R.style.width=O+"em";C.push(R)}}}g=n(["mtable"],C);return n(["mord"],[g],t.getColor())},spacing:function(e,t,i){if(e.value==="\\ "||e.value==="\\space"||e.value===" "||e.value==="~"){return n(["mord","mspace"],[r.mathsym(e.value,e.mode)])}else{return n(["mord","mspace",r.spacingFunctions[e.value].className])}},llap:function(e,t,i){var h=n(["inner"],[v(e.value.body,t.reset())]);var a=n(["fix"],[]);return n(["llap",t.style.cls()],[h,a])},rlap:function(e,t,i){var h=n(["inner"],[v(e.value.body,t.reset())]);var a=n(["fix"],[]);return n(["rlap",t.style.cls()],[h,a])},op:function(e,t,i){var h;var l;var s=false;if(e.type==="supsub"){h=e.value.sup;l=e.value.sub;e=e.value.base;s=true}var o=["\\smallint"];var g=false;if(t.style.size===a.DISPLAY.size&&e.value.symbol&&!c.contains(o,e.value.body)){g=true}var d;var w=0;var u=0;if(e.value.symbol){var k=g?"Size2-Regular":"Size1-Regular";d=r.makeSymbol(e.value.body,k,"math",t.getColor(),["op-symbol",g?"large-op":"small-op","mop"]);w=(d.height-d.depth)/2-p.metrics.axisHeight*t.style.sizeMultiplier;u=d.italic}else{var m=[];for(var f=1;f<e.value.body.length;f++){m.push(r.mathsym(e.value.body[f],e.mode))}d=n(["mop"],m,t.getColor())}if(s){d=n([],[d]);var y,x,b,z;if(h){var S=v(h,t.withStyle(t.style.sup()));y=n([t.style.reset(),t.style.sup().cls()],[S]);x=Math.max(p.metrics.bigOpSpacing1,p.metrics.bigOpSpacing3-S.depth)}if(l){var M=v(l,t.withStyle(t.style.sub()));b=n([t.style.reset(),t.style.sub().cls()],[M]);z=Math.max(p.metrics.bigOpSpacing2,p.metrics.bigOpSpacing4-M.height)}var q,A,T;if(!h){A=d.height-w;q=r.makeVList([{type:"kern",size:p.metrics.bigOpSpacing5},{type:"elem",elem:b},{type:"kern",size:z},{type:"elem",elem:d}],"top",A,t);q.children[0].style.marginLeft=-u+"em"}else if(!l){T=d.depth+w;q=r.makeVList([{type:"elem",elem:d},{type:"kern",size:x},{type:"elem",elem:y},{type:"kern",size:p.metrics.bigOpSpacing5}],"bottom",T,t);q.children[1].style.marginLeft=u+"em"}else if(!h&&!l){return d}else{T=p.metrics.bigOpSpacing5+b.height+b.depth+z+d.depth+w;q=r.makeVList([{type:"kern",size:p.metrics.bigOpSpacing5},{type:"elem",elem:b},{type:"kern",size:z},{type:"elem",elem:d},{type:"kern",size:x},{type:"elem",elem:y},{type:"kern",size:p.metrics.bigOpSpacing5}],"bottom",T,t);q.children[0].style.marginLeft=-u+"em";q.children[2].style.marginLeft=u+"em"}return n(["mop","op-limits"],[q])}else{if(e.value.symbol){d.style.top=w+"em"}return d}},katex:function(e,t,i){var h=n(["k"],[r.mathsym("K",e.mode)]);var a=n(["a"],[r.mathsym("A",e.mode)]);a.height=(a.height+.2)*.75;a.depth=(a.height-.2)*.75;var l=n(["t"],[r.mathsym("T",e.mode)]);var s=n(["e"],[r.mathsym("E",e.mode)]);s.height=s.height-.2155;s.depth=s.depth+.2155;var p=n(["x"],[r.mathsym("X",e.mode)]);return n(["katex-logo","mord"],[h,a,l,s,p],t.getColor())},overline:function(e,t,i){var h=v(e.value.body,t.withStyle(t.style.cramp()));var l=p.metrics.defaultRuleThickness/t.style.sizeMultiplier;var s=n([t.style.reset(),a.TEXT.cls(),"overline-line"]);s.height=l;s.maxFontSize=1;var c=r.makeVList([{type:"elem",elem:h},{type:"kern",size:3*l},{type:"elem",elem:s},{type:"kern",size:l}],"firstBaseline",null,t);return n(["overline","mord"],[c],t.getColor())},sqrt:function(e,t,i){var h=v(e.value.body,t.withStyle(t.style.cramp()));var s=p.metrics.defaultRuleThickness/t.style.sizeMultiplier;var c=n([t.style.reset(),a.TEXT.cls(),"sqrt-line"],[],t.getColor());c.height=s;c.maxFontSize=1;var o=s;if(t.style.id<a.TEXT.id){o=p.metrics.xHeight}var g=s+o/4;var d=(h.height+h.depth)*t.style.sizeMultiplier;var w=d+g+s;var u=n(["sqrt-sign"],[l.customSizedDelim("\\surd",w,false,t,e.mode)],t.getColor());var k=u.height+u.depth-s;if(k>h.height+h.depth+g){g=(g+k-h.height-h.depth)/2}var m=-(h.height+g+s)+u.height;u.style.top=m+"em";u.height-=m;u.depth+=m;var f;if(h.height===0&&h.depth===0){f=n()}else{f=r.makeVList([{type:"elem",elem:h},{type:"kern",size:g},{type:"elem",elem:c},{type:"kern",size:s}],"firstBaseline",null,t)}if(!e.value.index){return n(["sqrt","mord"],[u,f])}else{var y=v(e.value.index,t.withStyle(a.SCRIPTSCRIPT));var x=n([t.style.reset(),a.SCRIPTSCRIPT.cls()],[y]);var b=Math.max(u.height,f.height);var z=Math.max(u.depth,f.depth);var S=.6*(b-z);var M=r.makeVList([{type:"elem",elem:x}],"shift",-S,t);var q=n(["root"],[M]);return n(["sqrt","mord"],[q,u,f])}},sizing:function(e,t,i){var h=o(e.value.value,t.withSize(e.value.size),i);var a=n(["mord"],[n(["sizing","reset-"+t.size,e.value.size,t.style.cls()],h)]);var l=r.sizingMultiplier[e.value.size];a.maxFontSize=l*t.style.sizeMultiplier;
return a},styling:function(e,t,i){var h={display:a.DISPLAY,text:a.TEXT,script:a.SCRIPT,scriptscript:a.SCRIPTSCRIPT};var r=h[e.value.style];var l=o(e.value.value,t.withStyle(r),i);return n([t.style.reset(),r.cls()],l)},font:function(e,t,i){var h=e.value.font;return v(e.value.body,t.withFont(h),i)},delimsizing:function(e,t,i){var h=e.value.value;if(h==="."){return n([g[e.value.delimType]])}return n([g[e.value.delimType]],[l.sizedDelim(h,e.value.size,t,e.mode)])},leftright:function(e,t,i){var h=o(e.value.body,t.reset());var a=0;var r=0;for(var s=0;s<h.length;s++){a=Math.max(h[s].height,a);r=Math.max(h[s].depth,r)}a*=t.style.sizeMultiplier;r*=t.style.sizeMultiplier;var p;if(e.value.left==="."){p=m(t)}else{p=l.leftRightDelim(e.value.left,a,r,t,e.mode)}h.unshift(p);var c;if(e.value.right==="."){c=m(t)}else{c=l.leftRightDelim(e.value.right,a,r,t,e.mode)}h.push(c);return n(["minner",t.style.cls()],h,t.getColor())},rule:function(e,t,i){var h=n(["mord","rule"],[],t.getColor());var a=0;if(e.value.shift){a=e.value.shift.number;if(e.value.shift.unit==="ex"){a*=p.metrics.xHeight}}var r=e.value.width.number;if(e.value.width.unit==="ex"){r*=p.metrics.xHeight}var l=e.value.height.number;if(e.value.height.unit==="ex"){l*=p.metrics.xHeight}a/=t.style.sizeMultiplier;r/=t.style.sizeMultiplier;l/=t.style.sizeMultiplier;h.style.borderRightWidth=r+"em";h.style.borderTopWidth=l+"em";h.style.bottom=a+"em";h.width=r;h.height=l+a;h.depth=-a;return h},accent:function(e,t,i){var h=e.value.base;var a;if(e.type==="supsub"){var l=e;e=l.value.base;h=e.value.base;l.value.base=h;a=v(l,t.reset(),i)}var s=v(h,t.withStyle(t.style.cramp()));var c;if(k(h)){var o=u(h);var g=v(o,t.withStyle(t.style.cramp()));c=g.skew}else{c=0}var d=Math.min(s.height,p.metrics.xHeight);var w=r.makeSymbol(e.value.accent,"Main-Regular","math",t.getColor());w.italic=0;var m=e.value.accent==="\\vec"?"accent-vec":null;var f=n(["accent-body",m],[n([],[w])]);f=r.makeVList([{type:"elem",elem:s},{type:"kern",size:-d},{type:"elem",elem:f}],"firstBaseline",null,t);f.children[1].style.marginLeft=2*c+"em";var y=n(["mord","accent"],[f]);if(a){a.children[0]=y;a.height=Math.max(y.height,a.height);a.classes[0]="mord";return a}else{return y}},phantom:function(e,t,i){var h=o(e.value.value,t.withPhantom(),i);return new r.makeFragment(h)}};var v=function(e,t,i){if(!e){return n()}if(f[e.type]){var a=f[e.type](e,t,i);var l;if(t.style!==t.parentStyle){l=t.style.sizeMultiplier/t.parentStyle.sizeMultiplier;a.height*=l;a.depth*=l}if(t.size!==t.parentSize){l=r.sizingMultiplier[t.size]/r.sizingMultiplier[t.parentSize];a.height*=l;a.depth*=l}return a}else{throw new h("Got group of unknown type: '"+e.type+"'")}};var y=function(e,t){e=JSON.parse(JSON.stringify(e));var i=o(e,t);var h=n(["base",t.style.cls()],i);var a=n(["strut"]);var r=n(["strut","bottom"]);a.style.height=h.height+"em";r.style.height=h.height+h.depth+"em";r.style.verticalAlign=-h.depth+"em";var l=n(["katex-html"],[a,r,h]);l.setAttribute("aria-hidden","true");return l};t.exports=y},{"./ParseError":5,"./Style":8,"./buildCommon":9,"./delimiter":13,"./domTree":14,"./fontMetrics":16,"./utils":23}],11:[function(e,t,i){var h=e("./buildCommon");var a=e("./fontMetrics");var r=e("./mathMLTree");var l=e("./ParseError");var s=e("./symbols");var p=e("./utils");var c=h.makeSpan;var n=h.fontMap;var o=function(e,t){if(s[t][e]&&s[t][e].replace){e=s[t][e].replace}return new r.TextNode(e)};var g=function(e,t){var i=t.font;if(!i){return null}var h=e.mode;if(i==="mathit"){return"italic"}var r=e.value;if(p.contains(["\\imath","\\jmath"],r)){return null}if(s[h][r]&&s[h][r].replace){r=s[h][r].replace}var l=n[i].fontName;if(a.getCharacterMetrics(r,l)){return n[t.font].variant}return null};var d={mathord:function(e,t){var i=new r.MathNode("mi",[o(e.value,e.mode)]);var h=g(e,t);if(h){i.setAttribute("mathvariant",h)}return i},textord:function(e,t){var i=o(e.value,e.mode);var h=g(e,t)||"normal";var a;if(/[0-9]/.test(e.value)){a=new r.MathNode("mn",[i]);if(t.font){a.setAttribute("mathvariant",h)}}else{a=new r.MathNode("mi",[i]);a.setAttribute("mathvariant",h)}return a},bin:function(e){var t=new r.MathNode("mo",[o(e.value,e.mode)]);return t},rel:function(e){var t=new r.MathNode("mo",[o(e.value,e.mode)]);return t},open:function(e){var t=new r.MathNode("mo",[o(e.value,e.mode)]);return t},close:function(e){var t=new r.MathNode("mo",[o(e.value,e.mode)]);return t},inner:function(e){var t=new r.MathNode("mo",[o(e.value,e.mode)]);return t},punct:function(e){var t=new r.MathNode("mo",[o(e.value,e.mode)]);t.setAttribute("separator","true");return t},ordgroup:function(e,t){var i=w(e.value,t);var h=new r.MathNode("mrow",i);return h},text:function(e,t){var i=w(e.value.body,t);var h=new r.MathNode("mtext",i);return h},color:function(e,t){var i=w(e.value.value,t);var h=new r.MathNode("mstyle",i);h.setAttribute("mathcolor",e.value.color);return h},supsub:function(e,t){var i=[u(e.value.base,t)];if(e.value.sub){i.push(u(e.value.sub,t))}if(e.value.sup){i.push(u(e.value.sup,t))}var h;if(!e.value.sub){h="msup"}else if(!e.value.sup){h="msub"}else{h="msubsup"}var a=new r.MathNode(h,i);return a},genfrac:function(e,t){var i=new r.MathNode("mfrac",[u(e.value.numer,t),u(e.value.denom,t)]);if(!e.value.hasBarLine){i.setAttribute("linethickness","0px")}if(e.value.leftDelim!=null||e.value.rightDelim!=null){var h=[];if(e.value.leftDelim!=null){var a=new r.MathNode("mo",[new r.TextNode(e.value.leftDelim)]);a.setAttribute("fence","true");h.push(a)}h.push(i);if(e.value.rightDelim!=null){var l=new r.MathNode("mo",[new r.TextNode(e.value.rightDelim)]);l.setAttribute("fence","true");h.push(l)}var s=new r.MathNode("mrow",h);return s}return i},array:function(e,t){return new r.MathNode("mtable",e.value.body.map(function(e){return new r.MathNode("mtr",e.map(function(e){return new r.MathNode("mtd",[u(e,t)])}))}))},sqrt:function(e,t){var i;if(e.value.index){i=new r.MathNode("mroot",[u(e.value.body,t),u(e.value.index,t)])}else{i=new r.MathNode("msqrt",[u(e.value.body,t)])}return i},leftright:function(e,t){var i=w(e.value.body,t);if(e.value.left!=="."){var h=new r.MathNode("mo",[o(e.value.left,e.mode)]);h.setAttribute("fence","true");i.unshift(h)}if(e.value.right!=="."){var a=new r.MathNode("mo",[o(e.value.right,e.mode)]);a.setAttribute("fence","true");i.push(a)}var l=new r.MathNode("mrow",i);return l},accent:function(e,t){var i=new r.MathNode("mo",[o(e.value.accent,e.mode)]);var h=new r.MathNode("mover",[u(e.value.base,t),i]);h.setAttribute("accent","true");return h},spacing:function(e){var t;if(e.value==="\\ "||e.value==="\\space"||e.value===" "||e.value==="~"){t=new r.MathNode("mtext",[new r.TextNode("\xa0")])}else{t=new r.MathNode("mspace");t.setAttribute("width",h.spacingFunctions[e.value].size)}return t},op:function(e){var t;if(e.value.symbol){t=new r.MathNode("mo",[o(e.value.body,e.mode)])}else{t=new r.MathNode("mi",[new r.TextNode(e.value.body.slice(1))])}return t},katex:function(e){var t=new r.MathNode("mtext",[new r.TextNode("KaTeX")]);return t},font:function(e,t){var i=e.value.font;return u(e.value.body,t.withFont(i))},delimsizing:function(e){var t=[];if(e.value.value!=="."){t.push(o(e.value.value,e.mode))}var i=new r.MathNode("mo",t);if(e.value.delimType==="open"||e.value.delimType==="close"){i.setAttribute("fence","true")}else{i.setAttribute("fence","false")}return i},styling:function(e,t){var i=w(e.value.value,t);var h=new r.MathNode("mstyle",i);var a={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]};var l=a[e.value.style];h.setAttribute("scriptlevel",l[0]);h.setAttribute("displaystyle",l[1]);return h},sizing:function(e,t){var i=w(e.value.value,t);var a=new r.MathNode("mstyle",i);a.setAttribute("mathsize",h.sizingMultiplier[e.value.size]+"em");return a},overline:function(e,t){var i=new r.MathNode("mo",[new r.TextNode("\u203e")]);i.setAttribute("stretchy","true");var h=new r.MathNode("mover",[u(e.value.body,t),i]);h.setAttribute("accent","true");return h},rule:function(e){var t=new r.MathNode("mrow");return t},llap:function(e,t){var i=new r.MathNode("mpadded",[u(e.value.body,t)]);i.setAttribute("lspace","-1width");i.setAttribute("width","0px");return i},rlap:function(e,t){var i=new r.MathNode("mpadded",[u(e.value.body,t)]);i.setAttribute("width","0px");return i},phantom:function(e,t,i){var h=w(e.value.value,t);return new r.MathNode("mphantom",h)}};var w=function(e,t){var i=[];for(var h=0;h<e.length;h++){var a=e[h];i.push(u(a,t))}return i};var u=function(e,t){if(!e){return new r.MathNode("mrow")}if(d[e.type]){return d[e.type](e,t)}else{throw new l("Got group of unknown type: '"+e.type+"'")}};var k=function(e,t,i){var h=w(e,i);var a=new r.MathNode("mrow",h);var l=new r.MathNode("annotation",[new r.TextNode(t)]);l.setAttribute("encoding","application/x-tex");var s=new r.MathNode("semantics",[a,l]);var p=new r.MathNode("math",[s]);return c(["katex-mathml"],[p])};t.exports=k},{"./ParseError":5,"./buildCommon":9,"./fontMetrics":16,"./mathMLTree":19,"./symbols":22,"./utils":23}],12:[function(e,t,i){var h=e("./buildHTML");var a=e("./buildMathML");var r=e("./buildCommon");var l=e("./Options");var s=e("./Settings");var p=e("./Style");var c=r.makeSpan;var n=function(e,t,i){i=i||new s({});var r=p.TEXT;if(i.displayMode){r=p.DISPLAY}var n=new l({style:r,size:"size5"});var o=a(e,t,n);var g=h(e,n);var d=c(["katex"],[o,g]);if(i.displayMode){return c(["katex-display"],[d])}else{return d}};t.exports=n},{"./Options":4,"./Settings":7,"./Style":8,"./buildCommon":9,"./buildHTML":10,"./buildMathML":11}],13:[function(e,t,i){var h=e("./ParseError");var a=e("./Style");var r=e("./buildCommon");var l=e("./fontMetrics");var s=e("./symbols");var p=e("./utils");var c=r.makeSpan;var n=function(e,t){if(s.math[e]&&s.math[e].replace){return l.getCharacterMetrics(s.math[e].replace,t)}else{return l.getCharacterMetrics(e,t)}};var o=function(e,t,i){return r.makeSymbol(e,"Size"+t+"-Regular",i)};var g=function(e,t,i){var h=c(["style-wrap",i.style.reset(),t.cls()],[e]);var a=t.sizeMultiplier/i.style.sizeMultiplier;h.height*=a;h.depth*=a;h.maxFontSize=t.sizeMultiplier;return h};var d=function(e,t,i,h,a){var s=r.makeSymbol(e,"Main-Regular",a);var p=g(s,t,h);if(i){var c=(1-h.style.sizeMultiplier/t.sizeMultiplier)*l.metrics.axisHeight;p.style.top=c+"em";p.height-=c;p.depth+=c}return p};var w=function(e,t,i,h,r){var s=o(e,t,r);var p=g(c(["delimsizing","size"+t],[s],h.getColor()),a.TEXT,h);if(i){var n=(1-h.style.sizeMultiplier)*l.metrics.axisHeight;p.style.top=n+"em";p.height-=n;p.depth+=n}return p};var u=function(e,t,i){var h;if(t==="Size1-Regular"){h="delim-size1"}else if(t==="Size4-Regular"){h="delim-size4"}var a=c(["delimsizinginner",h],[c([],[r.makeSymbol(e,t,i)])]);return{type:"elem",elem:a}};var k=function(e,t,i,h,s){var p,o,d,w;p=d=w=e;o=null;var k="Size1-Regular";if(e==="\\uparrow"){d=w="\u23d0"}else if(e==="\\Uparrow"){d=w="\u2016"}else if(e==="\\downarrow"){p=d="\u23d0"}else if(e==="\\Downarrow"){p=d="\u2016"}else if(e==="\\updownarrow"){p="\\uparrow";d="\u23d0";w="\\downarrow"}else if(e==="\\Updownarrow"){p="\\Uparrow";d="\u2016";w="\\Downarrow"}else if(e==="["||e==="\\lbrack"){p="\u23a1";d="\u23a2";w="\u23a3";k="Size4-Regular"}else if(e==="]"||e==="\\rbrack"){p="\u23a4";d="\u23a5";w="\u23a6";k="Size4-Regular"}else if(e==="\\lfloor"){d=p="\u23a2";w="\u23a3";k="Size4-Regular"}else if(e==="\\lceil"){p="\u23a1";d=w="\u23a2";k="Size4-Regular"}else if(e==="\\rfloor"){d=p="\u23a5";w="\u23a6";k="Size4-Regular"}else if(e==="\\rceil"){p="\u23a4";d=w="\u23a5";k="Size4-Regular"}else if(e==="("){p="\u239b";d="\u239c";w="\u239d";k="Size4-Regular"}else if(e===")"){p="\u239e";d="\u239f";w="\u23a0";k="Size4-Regular"}else if(e==="\\{"||e==="\\lbrace"){p="\u23a7";o="\u23a8";w="\u23a9";d="\u23aa";k="Size4-Regular"}else if(e==="\\}"||e==="\\rbrace"){p="\u23ab";o="\u23ac";w="\u23ad";d="\u23aa";k="Size4-Regular"}else if(e==="\\lgroup"){p="\u23a7";w="\u23a9";d="\u23aa";k="Size4-Regular"}else if(e==="\\rgroup"){p="\u23ab";w="\u23ad";d="\u23aa";k="Size4-Regular"}else if(e==="\\lmoustache"){p="\u23a7";w="\u23ad";d="\u23aa";k="Size4-Regular"}else if(e==="\\rmoustache"){p="\u23ab";w="\u23a9";d="\u23aa";k="Size4-Regular"}else if(e==="\\surd"){p="\ue001";w="\u23b7";d="\ue000";k="Size4-Regular"}var m=n(p,k);var f=m.height+m.depth;var v=n(d,k);var y=v.height+v.depth;var x=n(w,k);var b=x.height+x.depth;var z=0;var S=1;if(o!==null){var M=n(o,k);z=M.height+M.depth;S=2}var q=f+b+z;var A=Math.ceil((t-q)/(S*y));var T=q+A*S*y;var N=l.metrics.axisHeight;if(i){N*=h.style.sizeMultiplier}var C=T/2-N;var R=[];R.push(u(w,k,s));var E;if(o===null){for(E=0;E<A;E++){R.push(u(d,k,s))}}else{for(E=0;E<A;E++){R.push(u(d,k,s))}R.push(u(o,k,s));for(E=0;E<A;E++){R.push(u(d,k,s))}}R.push(u(p,k,s));var P=r.makeVList(R,"bottom",C,h);return g(c(["delimsizing","mult"],[P],h.getColor()),a.TEXT,h)};var m=["(",")","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","\\lceil","\\rceil","\\surd"];var f=["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","\\lmoustache","\\rmoustache"];var v=["<",">","\\langle","\\rangle","/","\\backslash"];var y=[0,1.2,1.8,2.4,3];var x=function(e,t,i,a){if(e==="<"){e="\\langle"}else if(e===">"){e="\\rangle"}if(p.contains(m,e)||p.contains(v,e)){return w(e,t,false,i,a)}else if(p.contains(f,e)){return k(e,y[t],false,i,a)}else{throw new h("Illegal delimiter: '"+e+"'")}};var b=[{type:"small",style:a.SCRIPTSCRIPT},{type:"small",style:a.SCRIPT},{type:"small",style:a.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}];var z=[{type:"small",style:a.SCRIPTSCRIPT},{type:"small",style:a.SCRIPT},{type:"small",style:a.TEXT},{type:"stack"}];var S=[{type:"small",style:a.SCRIPTSCRIPT},{type:"small",style:a.SCRIPT},{type:"small",style:a.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}];var M=function(e){if(e.type==="small"){return"Main-Regular"}else if(e.type==="large"){return"Size"+e.size+"-Regular"}else if(e.type==="stack"){return"Size4-Regular"}};var q=function(e,t,i,h){var a=Math.min(2,3-h.style.size);for(var r=a;r<i.length;r++){if(i[r].type==="stack"){break}var l=n(e,M(i[r]));var s=l.height+l.depth;if(i[r].type==="small"){s*=i[r].style.sizeMultiplier}if(s>t){return i[r]}}return i[i.length-1]};var A=function(e,t,i,h,a){if(e==="<"){e="\\langle"}else if(e===">"){e="\\rangle"}var r;if(p.contains(v,e)){r=b}else if(p.contains(m,e)){r=S}else{r=z}var l=q(e,t,r,h);if(l.type==="small"){return d(e,l.style,i,h,a)}else if(l.type==="large"){return w(e,l.size,i,h,a)}else if(l.type==="stack"){return k(e,t,i,h,a)}};var T=function(e,t,i,h,a){var r=l.metrics.axisHeight*h.style.sizeMultiplier;var s=901;var p=5/l.metrics.ptPerEm;var c=Math.max(t-r,i+r);var n=Math.max(c/500*s,2*c-p);return A(e,n,true,h,a)};t.exports={sizedDelim:x,customSizedDelim:A,leftRightDelim:T}},{"./ParseError":5,"./Style":8,"./buildCommon":9,"./fontMetrics":16,"./symbols":22,"./utils":23}],14:[function(e,t,i){var h=e("./utils");var a=function(e){e=e.slice();for(var t=e.length-1;t>=0;t--){if(!e[t]){e.splice(t,1)}}return e.join(" ")};function r(e,t,i,h,a,r){this.classes=e||[];this.children=t||[];this.height=i||0;this.depth=h||0;this.maxFontSize=a||0;this.style=r||{};this.attributes={}}r.prototype.setAttribute=function(e,t){this.attributes[e]=t};r.prototype.toNode=function(){var e=document.createElement("span");e.className=a(this.classes);for(var t in this.style){if(Object.prototype.hasOwnProperty.call(this.style,t)){e.style[t]=this.style[t]}}for(var i in this.attributes){if(Object.prototype.hasOwnProperty.call(this.attributes,i)){e.setAttribute(i,this.attributes[i])}}for(var h=0;h<this.children.length;h++){e.appendChild(this.children[h].toNode())}return e};r.prototype.toMarkup=function(){var e="<span";if(this.classes.length){e+=' class="';e+=h.escape(a(this.classes));e+='"'}var t="";for(var i in this.style){if(this.style.hasOwnProperty(i)){t+=h.hyphenate(i)+":"+this.style[i]+";"}}if(t){e+=' style="'+h.escape(t)+'"'}for(var r in this.attributes){if(Object.prototype.hasOwnProperty.call(this.attributes,r)){e+=" "+r+'="';e+=h.escape(this.attributes[r]);e+='"'}}e+=">";for(var l=0;l<this.children.length;l++){e+=this.children[l].toMarkup()}e+="</span>";return e};function l(e,t,i,h){this.children=e||[];this.height=t||0;this.depth=i||0;this.maxFontSize=h||0}l.prototype.toNode=function(){var e=document.createDocumentFragment();for(var t=0;t<this.children.length;t++){e.appendChild(this.children[t].toNode())}return e};l.prototype.toMarkup=function(){var e="";for(var t=0;t<this.children.length;t++){e+=this.children[t].toMarkup()}return e};function s(e,t,i,h,a,r,l){this.value=e||"";this.height=t||0;this.depth=i||0;this.italic=h||0;this.skew=a||0;this.classes=r||[];this.style=l||{};this.maxFontSize=0}s.prototype.toNode=function(){var e=document.createTextNode(this.value);var t=null;if(this.italic>0){t=document.createElement("span");t.style.marginRight=this.italic+"em"}if(this.classes.length>0){t=t||document.createElement("span");t.className=a(this.classes)}for(var i in this.style){if(this.style.hasOwnProperty(i)){t=t||document.createElement("span");t.style[i]=this.style[i]}}if(t){t.appendChild(e);return t}else{return e}};s.prototype.toMarkup=function(){var e=false;var t="<span";if(this.classes.length){e=true;t+=' class="';t+=h.escape(a(this.classes));t+='"'}var i="";if(this.italic>0){i+="margin-right:"+this.italic+"em;"}for(var r in this.style){if(this.style.hasOwnProperty(r)){i+=h.hyphenate(r)+":"+this.style[r]+";"}}if(i){e=true;t+=' style="'+h.escape(i)+'"'}var l=h.escape(this.value);if(e){t+=">";t+=l;t+="</span>";return t}else{return l}};t.exports={span:r,documentFragment:l,symbolNode:s}},{"./utils":23}],15:[function(e,t,i){var h=e("./fontMetrics");var a=e("./parseData");var r=e("./ParseError");var l=a.ParseNode;var s=a.ParseResult;function p(e,t,i,h){var a=[],p=[a],c=[];while(true){var n=e.parseExpression(t,i,false,null);a.push(new l("ordgroup",n.result,i));t=n.position;var o=n.peek.text;if(o==="&"){t=n.peek.position}else if(o==="\\end"){break}else if(o==="\\\\"||o==="\\cr"){var g=e.parseFunction(t,i);c.push(g.result.value.size);t=g.position;a=[];p.push(a)}else{throw new r("Expected & or \\\\ or \\end",e.lexer,n.peek.position)}}h.body=p;h.rowGaps=c;return new s(new l(h.type,h,i),t)}var c=[{names:["array"],numArgs:1,handler:function(e,t,i,h,a){var l=this;h=h.value.map?h.value:[h];var s=h.map(function(e){var t=e.value;if("lcr".indexOf(t)!==-1){return{type:"align",align:t}}else if(t==="|"){return{type:"separator",separator:"|"}}throw new r("Unknown column alignment: "+e.value,l.lexer,a[1])});var c={type:"array",cols:s,hskipBeforeAndAfter:true};c=p(l,e,t,c);return c}},{names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix"],handler:function(e,t,i){var h={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[i];var a={type:"array",hskipBeforeAndAfter:false};a=p(this,e,t,a);if(h){a.result=new l("leftright",{body:[a.result],left:h[0],right:h[1]},t)}return a}},{names:["cases"],handler:function(e,t,i){var a={type:"array",arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:h.metrics.quad},{type:"align",align:"l",pregap:0,postgap:0}]};a=p(this,e,t,a);a.result=new l("leftright",{body:[a.result],left:"\\{",right:"."},t);return a}}];t.exports=function(){var e={};for(var t=0;t<c.length;++t){var i=c[t];i.greediness=1;i.allowedInText=!!i.allowedInText;i.numArgs=i.numArgs||0;i.numOptionalArgs=i.numOptionalArgs||0;for(var h=0;h<i.names.length;++h){e[i.names[h]]=i}}return e}()},{"./ParseError":5,"./fontMetrics":16,"./parseData":20}],16:[function(e,t,i){var h=e("./Style");var a=.025;var r=0;var l=0;var s=0;var p=.431;var c=1;var n=0;var o=.677;var g=.394;var d=.444;var w=.686;var u=.345;var k=.413;var m=.363;var f=.289;var v=.15;var y=.247;var x=.386;var b=.05;var z=2.39;var S=1.01;var M=.81;var q=.71;var A=.25;var T=0;var N=0;var C=0;var R=0;var E=.431;var P=1;var D=0;var L=.04;var O=.111;var I=.166;var B=.2;var F=.6;var _=.1;var V=10;var G=2/V;var H={xHeight:p,quad:c,num1:o,num2:g,num3:d,denom1:w,denom2:u,sup1:k,sup2:m,sup3:f,sub1:v,sub2:y,supDrop:x,subDrop:b,axisHeight:A,defaultRuleThickness:L,bigOpSpacing1:O,bigOpSpacing2:I,bigOpSpacing3:B,bigOpSpacing4:F,bigOpSpacing5:_,ptPerEm:V,emPerEx:p/c,doubleRuleSep:G,delim1:z,getDelim2:function(e){if(e.size===h.TEXT.size){return S}else if(e.size===h.SCRIPT.size){return M}else if(e.size===h.SCRIPTSCRIPT.size){return q}throw new Error("Unexpected style size: "+e.size)}};var X=e("./fontMetricsData");var U=function(e,t){return X[t][e.charCodeAt(0)]};t.exports={metrics:H,getCharacterMetrics:U}},{"./Style":8,"./fontMetricsData":17}],17:[function(e,t,i){t.exports={"AMS-Regular":{65:{depth:0,height:.68889,italic:0,skew:0},66:{depth:0,height:.68889,italic:0,skew:0},67:{depth:0,height:.68889,italic:0,skew:0},68:{depth:0,height:.68889,italic:0,skew:0},69:{depth:0,height:.68889,italic:0,skew:0},70:{depth:0,height:.68889,italic:0,skew:0},71:{depth:0,height:.68889,italic:0,skew:0},72:{depth:0,height:.68889,italic:0,skew:0},73:{depth:0,height:.68889,italic:0,skew:0},74:{depth:.16667,height:.68889,italic:0,skew:0},75:{depth:0,height:.68889,italic:0,skew:0},76:{depth:0,height:.68889,italic:0,skew:0},77:{depth:0,height:.68889,italic:0,skew:0},78:{depth:0,height:.68889,italic:0,skew:0},79:{depth:.16667,height:.68889,italic:0,skew:0},80:{depth:0,height:.68889,italic:0,skew:0},81:{depth:.16667,height:.68889,italic:0,skew:0},82:{depth:0,height:.68889,italic:0,skew:0},83:{depth:0,height:.68889,italic:0,skew:0},84:{depth:0,height:.68889,italic:0,skew:0},85:{depth:0,height:.68889,italic:0,skew:0},86:{depth:0,height:.68889,italic:0,skew:0},87:{depth:0,height:.68889,italic:0,skew:0},88:{depth:0,height:.68889,italic:0,skew:0},89:{depth:0,height:.68889,italic:0,skew:0},90:{depth:0,height:.68889,italic:0,skew:0},107:{depth:0,height:.68889,italic:0,skew:0},165:{depth:0,height:.675,italic:.025,skew:0},174:{depth:.15559,height:.69224,italic:0,skew:0},240:{depth:0,height:.68889,italic:0,skew:0},295:{depth:0,height:.68889,italic:0,skew:0},710:{depth:0,height:.825,italic:0,skew:0},732:{depth:0,height:.9,italic:0,skew:0},770:{depth:0,height:.825,italic:0,skew:0},771:{depth:0,height:.9,italic:0,skew:0},989:{depth:.08167,height:.58167,italic:0,skew:0},1008:{depth:0,height:.43056,italic:.04028,skew:0},8245:{depth:0,height:.54986,italic:0,skew:0},8463:{depth:0,height:.68889,italic:0,skew:0},8487:{depth:0,height:.68889,italic:0,skew:0},8498:{depth:0,height:.68889,italic:0,skew:0},8502:{depth:0,height:.68889,italic:0,skew:0},8503:{depth:0,height:.68889,italic:0,skew:0},8504:{depth:0,height:.68889,italic:0,skew:0},8513:{depth:0,height:.68889,italic:0,skew:0},8592:{depth:-.03598,height:.46402,italic:0,skew:0},8594:{depth:-.03598,height:.46402,italic:0,skew:0},8602:{depth:-.13313,height:.36687,italic:0,skew:0},8603:{depth:-.13313,height:.36687,italic:0,skew:0},8606:{depth:.01354,height:.52239,italic:0,skew:0},8608:{depth:.01354,height:.52239,italic:0,skew:0},8610:{depth:.01354,height:.52239,italic:0,skew:0},8611:{depth:.01354,height:.52239,italic:0,skew:0},8619:{depth:0,height:.54986,italic:0,skew:0},8620:{depth:0,height:.54986,italic:0,skew:0},8621:{depth:-.13313,height:.37788,italic:0,skew:0},8622:{depth:-.13313,height:.36687,italic:0,skew:0},8624:{depth:0,height:.69224,italic:0,skew:0},8625:{depth:0,height:.69224,italic:0,skew:0},8630:{depth:0,height:.43056,italic:0,skew:0},8631:{depth:0,height:.43056,italic:0,skew:0},8634:{depth:.08198,height:.58198,italic:0,skew:0},8635:{depth:.08198,height:.58198,italic:0,skew:0},8638:{depth:.19444,height:.69224,italic:0,skew:0},8639:{depth:.19444,height:.69224,italic:0,skew:0},8642:{depth:.19444,height:.69224,italic:0,skew:0},8643:{depth:.19444,height:.69224,italic:0,skew:0},8644:{depth:.1808,height:.675,italic:0,skew:0},8646:{depth:.1808,height:.675,italic:0,skew:0},8647:{depth:.1808,height:.675,italic:0,skew:0},8648:{depth:.19444,height:.69224,italic:0,skew:0},8649:{depth:.1808,height:.675,italic:0,skew:0},8650:{depth:.19444,height:.69224,italic:0,skew:0},8651:{depth:.01354,height:.52239,italic:0,skew:0},8652:{depth:.01354,height:.52239,italic:0,skew:0},8653:{depth:-.13313,height:.36687,italic:0,skew:0},8654:{depth:-.13313,height:.36687,italic:0,skew:0},8655:{depth:-.13313,height:.36687,italic:0,skew:0},8666:{depth:.13667,height:.63667,italic:0,skew:0},8667:{depth:.13667,height:.63667,italic:0,skew:0},8669:{depth:-.13313,height:.37788,italic:0,skew:0},8672:{depth:-.064,height:.437,italic:0,skew:0},8674:{depth:-.064,height:.437,italic:0,skew:0},8705:{depth:0,height:.825,italic:0,skew:0},8708:{depth:0,height:.68889,italic:0,skew:0},8709:{depth:.08167,height:.58167,italic:0,skew:0},8717:{depth:0,height:.43056,italic:0,skew:0},8722:{depth:-.03598,height:.46402,italic:0,skew:0},8724:{depth:.08198,height:.69224,italic:0,skew:0},8726:{depth:.08167,height:.58167,italic:0,skew:0},8733:{depth:0,height:.69224,italic:0,skew:0},8736:{depth:0,height:.69224,italic:0,skew:0},8737:{depth:0,height:.69224,italic:0,skew:0},8738:{depth:.03517,height:.52239,italic:0,skew:0},8739:{depth:.08167,height:.58167,italic:0,skew:0},8740:{depth:.25142,height:.74111,italic:0,skew:0},8741:{depth:.08167,height:.58167,italic:0,skew:0},8742:{depth:.25142,height:.74111,italic:0,skew:0},8756:{depth:0,height:.69224,italic:0,skew:0},8757:{depth:0,height:.69224,italic:0,skew:0},8764:{depth:-.13313,height:.36687,italic:0,skew:0},8765:{depth:-.13313,height:.37788,italic:0,skew:0},8769:{depth:-.13313,height:.36687,italic:0,skew:0},8770:{depth:-.03625,height:.46375,italic:0,skew:0},8774:{depth:.30274,height:.79383,italic:0,skew:0},8776:{depth:-.01688,height:.48312,italic:0,skew:0},8778:{depth:.08167,height:.58167,italic:0,skew:0},8782:{depth:.06062,height:.54986,italic:0,skew:0},8783:{depth:.06062,height:.54986,italic:0,skew:0},8785:{depth:.08198,height:.58198,italic:0,skew:0},8786:{depth:.08198,height:.58198,italic:0,skew:0},8787:{depth:.08198,height:.58198,italic:0,skew:0},8790:{depth:0,height:.69224,italic:0,skew:0},8791:{depth:.22958,height:.72958,italic:0,skew:0},8796:{depth:.08198,height:.91667,italic:0,skew:0},8806:{depth:.25583,height:.75583,italic:0,skew:0},8807:{depth:.25583,height:.75583,italic:0,skew:0},8808:{depth:.25142,height:.75726,italic:0,skew:0},8809:{depth:.25142,height:.75726,italic:0,skew:0},8812:{depth:.25583,height:.75583,italic:0,skew:0},8814:{depth:.20576,height:.70576,italic:0,skew:0},8815:{depth:.20576,height:.70576,italic:0,skew:0},8816:{depth:.30274,height:.79383,italic:0,skew:0},8817:{depth:.30274,height:.79383,italic:0,skew:0},8818:{depth:.22958,height:.72958,italic:0,skew:0},8819:{depth:.22958,height:.72958,italic:0,skew:0},8822:{depth:.1808,height:.675,italic:0,skew:0},8823:{depth:.1808,height:.675,italic:0,skew:0},8828:{depth:.13667,height:.63667,italic:0,skew:0},8829:{depth:.13667,height:.63667,italic:0,skew:0},8830:{depth:.22958,height:.72958,italic:0,skew:0},8831:{depth:.22958,height:.72958,italic:0,skew:0},8832:{depth:.20576,height:.70576,italic:0,skew:0},8833:{depth:.20576,height:.70576,italic:0,skew:0},8840:{depth:.30274,height:.79383,italic:0,skew:0},8841:{depth:.30274,height:.79383,italic:0,skew:0},8842:{depth:.13597,height:.63597,italic:0,skew:0},8843:{depth:.13597,height:.63597,italic:0,skew:0},8847:{depth:.03517,height:.54986,italic:0,skew:0},8848:{depth:.03517,height:.54986,italic:0,skew:0},8858:{depth:.08198,height:.58198,italic:0,skew:0},8859:{depth:.08198,height:.58198,italic:0,skew:0},8861:{depth:.08198,height:.58198,italic:0,skew:0},8862:{depth:0,height:.675,italic:0,skew:0},8863:{depth:0,height:.675,italic:0,skew:0},8864:{depth:0,height:.675,italic:0,skew:0},8865:{depth:0,height:.675,italic:0,skew:0},8872:{depth:0,height:.69224,italic:0,skew:0},8873:{depth:0,height:.69224,italic:0,skew:0},8874:{depth:0,height:.69224,italic:0,skew:0},8876:{depth:0,height:.68889,italic:0,skew:0},8877:{depth:0,height:.68889,italic:0,skew:0},8878:{depth:0,height:.68889,italic:0,skew:0},8879:{depth:0,height:.68889,italic:0,skew:0},8882:{depth:.03517,height:.54986,italic:0,skew:0},8883:{depth:.03517,height:.54986,italic:0,skew:0},8884:{depth:.13667,height:.63667,italic:0,skew:0},8885:{depth:.13667,height:.63667,italic:0,skew:0},8888:{depth:0,height:.54986,italic:0,skew:0},8890:{depth:.19444,height:.43056,italic:0,skew:0},8891:{depth:.19444,height:.69224,italic:0,skew:0},8892:{depth:.19444,height:.69224,italic:0,skew:0},8901:{depth:0,height:.54986,italic:0,skew:0},8903:{depth:.08167,height:.58167,italic:0,skew:0},8905:{depth:.08167,height:.58167,italic:0,skew:0},8906:{depth:.08167,height:.58167,italic:0,skew:0},8907:{depth:0,height:.69224,italic:0,skew:0},8908:{depth:0,height:.69224,italic:0,skew:0},8909:{depth:-.03598,height:.46402,italic:0,skew:0},8910:{depth:0,height:.54986,italic:0,skew:0},8911:{depth:0,height:.54986,italic:0,skew:0},8912:{depth:.03517,height:.54986,italic:0,skew:0},8913:{depth:.03517,height:.54986,italic:0,skew:0},8914:{depth:0,height:.54986,italic:0,skew:0},8915:{depth:0,height:.54986,italic:0,skew:0},8916:{depth:0,height:.69224,italic:0,skew:0},8918:{depth:.0391,height:.5391,italic:0,skew:0},8919:{depth:.0391,height:.5391,italic:0,skew:0},8920:{depth:.03517,height:.54986,italic:0,skew:0},8921:{depth:.03517,height:.54986,italic:0,skew:0},8922:{depth:.38569,height:.88569,italic:0,skew:0},8923:{depth:.38569,height:.88569,italic:0,skew:0},8926:{depth:.13667,height:.63667,italic:0,skew:0},8927:{depth:.13667,height:.63667,italic:0,skew:0},8928:{depth:.30274,height:.79383,italic:0,skew:0},8929:{depth:.30274,height:.79383,italic:0,skew:0},8934:{depth:.23222,height:.74111,italic:0,skew:0},8935:{depth:.23222,height:.74111,italic:0,skew:0},8936:{depth:.23222,height:.74111,italic:0,skew:0},8937:{depth:.23222,height:.74111,italic:0,skew:0},8938:{depth:.20576,height:.70576,italic:0,skew:0},8939:{depth:.20576,height:.70576,italic:0,skew:0},8940:{depth:.30274,height:.79383,italic:0,skew:0},8941:{depth:.30274,height:.79383,italic:0,skew:0},8994:{depth:.19444,height:.69224,italic:0,skew:0},8995:{depth:.19444,height:.69224,italic:0,skew:0},9416:{depth:.15559,height:.69224,italic:0,skew:0},9484:{depth:0,height:.69224,italic:0,skew:0},9488:{depth:0,height:.69224,italic:0,skew:0},9492:{depth:0,height:.37788,italic:0,skew:0},9496:{depth:0,height:.37788,italic:0,skew:0},9585:{depth:.19444,height:.68889,italic:0,skew:0},9586:{depth:.19444,height:.74111,italic:0,skew:0},9632:{depth:0,height:.675,italic:0,skew:0},9633:{depth:0,height:.675,italic:0,skew:0},9650:{depth:0,height:.54986,italic:0,skew:0},9651:{depth:0,height:.54986,italic:0,skew:0},9654:{depth:.03517,height:.54986,italic:0,skew:0},9660:{depth:0,height:.54986,italic:0,skew:0},9661:{depth:0,height:.54986,italic:0,skew:0},9664:{depth:.03517,height:.54986,italic:0,skew:0},9674:{depth:.11111,height:.69224,italic:0,skew:0},9733:{depth:.19444,height:.69224,italic:0,skew:0},10003:{depth:0,height:.69224,italic:0,skew:0},10016:{depth:0,height:.69224,italic:0,skew:0},10731:{depth:.11111,height:.69224,italic:0,skew:0},10846:{depth:.19444,height:.75583,italic:0,skew:0},10877:{depth:.13667,height:.63667,italic:0,skew:0},10878:{depth:.13667,height:.63667,italic:0,skew:0},10885:{depth:.25583,height:.75583,italic:0,skew:0},10886:{depth:.25583,height:.75583,italic:0,skew:0},10887:{depth:.13597,height:.63597,italic:0,skew:0},10888:{depth:.13597,height:.63597,italic:0,skew:0},10889:{depth:.26167,height:.75726,italic:0,skew:0},10890:{depth:.26167,height:.75726,italic:0,skew:0},10891:{depth:.48256,height:.98256,italic:0,skew:0},10892:{depth:.48256,height:.98256,italic:0,skew:0},10901:{depth:.13667,height:.63667,italic:0,skew:0},10902:{depth:.13667,height:.63667,italic:0,skew:0},10933:{depth:.25142,height:.75726,italic:0,skew:0},10934:{depth:.25142,height:.75726,italic:0,skew:0},10935:{depth:.26167,height:.75726,italic:0,skew:0},10936:{depth:.26167,height:.75726,italic:0,skew:0},10937:{depth:.26167,
height:.75726,italic:0,skew:0},10938:{depth:.26167,height:.75726,italic:0,skew:0},10949:{depth:.25583,height:.75583,italic:0,skew:0},10950:{depth:.25583,height:.75583,italic:0,skew:0},10955:{depth:.28481,height:.79383,italic:0,skew:0},10956:{depth:.28481,height:.79383,italic:0,skew:0},57350:{depth:.08167,height:.58167,italic:0,skew:0},57351:{depth:.08167,height:.58167,italic:0,skew:0},57352:{depth:.08167,height:.58167,italic:0,skew:0},57353:{depth:0,height:.43056,italic:.04028,skew:0},57356:{depth:.25142,height:.75726,italic:0,skew:0},57357:{depth:.25142,height:.75726,italic:0,skew:0},57358:{depth:.41951,height:.91951,italic:0,skew:0},57359:{depth:.30274,height:.79383,italic:0,skew:0},57360:{depth:.30274,height:.79383,italic:0,skew:0},57361:{depth:.41951,height:.91951,italic:0,skew:0},57366:{depth:.25142,height:.75726,italic:0,skew:0},57367:{depth:.25142,height:.75726,italic:0,skew:0},57368:{depth:.25142,height:.75726,italic:0,skew:0},57369:{depth:.25142,height:.75726,italic:0,skew:0},57370:{depth:.13597,height:.63597,italic:0,skew:0},57371:{depth:.13597,height:.63597,italic:0,skew:0}},"Caligraphic-Regular":{48:{depth:0,height:.43056,italic:0,skew:0},49:{depth:0,height:.43056,italic:0,skew:0},50:{depth:0,height:.43056,italic:0,skew:0},51:{depth:.19444,height:.43056,italic:0,skew:0},52:{depth:.19444,height:.43056,italic:0,skew:0},53:{depth:.19444,height:.43056,italic:0,skew:0},54:{depth:0,height:.64444,italic:0,skew:0},55:{depth:.19444,height:.43056,italic:0,skew:0},56:{depth:0,height:.64444,italic:0,skew:0},57:{depth:.19444,height:.43056,italic:0,skew:0},65:{depth:0,height:.68333,italic:0,skew:.19445},66:{depth:0,height:.68333,italic:.03041,skew:.13889},67:{depth:0,height:.68333,italic:.05834,skew:.13889},68:{depth:0,height:.68333,italic:.02778,skew:.08334},69:{depth:0,height:.68333,italic:.08944,skew:.11111},70:{depth:0,height:.68333,italic:.09931,skew:.11111},71:{depth:.09722,height:.68333,italic:.0593,skew:.11111},72:{depth:0,height:.68333,italic:.00965,skew:.11111},73:{depth:0,height:.68333,italic:.07382,skew:0},74:{depth:.09722,height:.68333,italic:.18472,skew:.16667},75:{depth:0,height:.68333,italic:.01445,skew:.05556},76:{depth:0,height:.68333,italic:0,skew:.13889},77:{depth:0,height:.68333,italic:0,skew:.13889},78:{depth:0,height:.68333,italic:.14736,skew:.08334},79:{depth:0,height:.68333,italic:.02778,skew:.11111},80:{depth:0,height:.68333,italic:.08222,skew:.08334},81:{depth:.09722,height:.68333,italic:0,skew:.11111},82:{depth:0,height:.68333,italic:0,skew:.08334},83:{depth:0,height:.68333,italic:.075,skew:.13889},84:{depth:0,height:.68333,italic:.25417,skew:0},85:{depth:0,height:.68333,italic:.09931,skew:.08334},86:{depth:0,height:.68333,italic:.08222,skew:0},87:{depth:0,height:.68333,italic:.08222,skew:.08334},88:{depth:0,height:.68333,italic:.14643,skew:.13889},89:{depth:.09722,height:.68333,italic:.08222,skew:.08334},90:{depth:0,height:.68333,italic:.07944,skew:.13889}},"Fraktur-Regular":{33:{depth:0,height:.69141,italic:0,skew:0},34:{depth:0,height:.69141,italic:0,skew:0},38:{depth:0,height:.69141,italic:0,skew:0},39:{depth:0,height:.69141,italic:0,skew:0},40:{depth:.24982,height:.74947,italic:0,skew:0},41:{depth:.24982,height:.74947,italic:0,skew:0},42:{depth:0,height:.62119,italic:0,skew:0},43:{depth:.08319,height:.58283,italic:0,skew:0},44:{depth:0,height:.10803,italic:0,skew:0},45:{depth:.08319,height:.58283,italic:0,skew:0},46:{depth:0,height:.10803,italic:0,skew:0},47:{depth:.24982,height:.74947,italic:0,skew:0},48:{depth:0,height:.47534,italic:0,skew:0},49:{depth:0,height:.47534,italic:0,skew:0},50:{depth:0,height:.47534,italic:0,skew:0},51:{depth:.18906,height:.47534,italic:0,skew:0},52:{depth:.18906,height:.47534,italic:0,skew:0},53:{depth:.18906,height:.47534,italic:0,skew:0},54:{depth:0,height:.69141,italic:0,skew:0},55:{depth:.18906,height:.47534,italic:0,skew:0},56:{depth:0,height:.69141,italic:0,skew:0},57:{depth:.18906,height:.47534,italic:0,skew:0},58:{depth:0,height:.47534,italic:0,skew:0},59:{depth:.12604,height:.47534,italic:0,skew:0},61:{depth:-.13099,height:.36866,italic:0,skew:0},63:{depth:0,height:.69141,italic:0,skew:0},65:{depth:0,height:.69141,italic:0,skew:0},66:{depth:0,height:.69141,italic:0,skew:0},67:{depth:0,height:.69141,italic:0,skew:0},68:{depth:0,height:.69141,italic:0,skew:0},69:{depth:0,height:.69141,italic:0,skew:0},70:{depth:.12604,height:.69141,italic:0,skew:0},71:{depth:0,height:.69141,italic:0,skew:0},72:{depth:.06302,height:.69141,italic:0,skew:0},73:{depth:0,height:.69141,italic:0,skew:0},74:{depth:.12604,height:.69141,italic:0,skew:0},75:{depth:0,height:.69141,italic:0,skew:0},76:{depth:0,height:.69141,italic:0,skew:0},77:{depth:0,height:.69141,italic:0,skew:0},78:{depth:0,height:.69141,italic:0,skew:0},79:{depth:0,height:.69141,italic:0,skew:0},80:{depth:.18906,height:.69141,italic:0,skew:0},81:{depth:.03781,height:.69141,italic:0,skew:0},82:{depth:0,height:.69141,italic:0,skew:0},83:{depth:0,height:.69141,italic:0,skew:0},84:{depth:0,height:.69141,italic:0,skew:0},85:{depth:0,height:.69141,italic:0,skew:0},86:{depth:0,height:.69141,italic:0,skew:0},87:{depth:0,height:.69141,italic:0,skew:0},88:{depth:0,height:.69141,italic:0,skew:0},89:{depth:.18906,height:.69141,italic:0,skew:0},90:{depth:.12604,height:.69141,italic:0,skew:0},91:{depth:.24982,height:.74947,italic:0,skew:0},93:{depth:.24982,height:.74947,italic:0,skew:0},94:{depth:0,height:.69141,italic:0,skew:0},97:{depth:0,height:.47534,italic:0,skew:0},98:{depth:0,height:.69141,italic:0,skew:0},99:{depth:0,height:.47534,italic:0,skew:0},100:{depth:0,height:.62119,italic:0,skew:0},101:{depth:0,height:.47534,italic:0,skew:0},102:{depth:.18906,height:.69141,italic:0,skew:0},103:{depth:.18906,height:.47534,italic:0,skew:0},104:{depth:.18906,height:.69141,italic:0,skew:0},105:{depth:0,height:.69141,italic:0,skew:0},106:{depth:0,height:.69141,italic:0,skew:0},107:{depth:0,height:.69141,italic:0,skew:0},108:{depth:0,height:.69141,italic:0,skew:0},109:{depth:0,height:.47534,italic:0,skew:0},110:{depth:0,height:.47534,italic:0,skew:0},111:{depth:0,height:.47534,italic:0,skew:0},112:{depth:.18906,height:.52396,italic:0,skew:0},113:{depth:.18906,height:.47534,italic:0,skew:0},114:{depth:0,height:.47534,italic:0,skew:0},115:{depth:0,height:.47534,italic:0,skew:0},116:{depth:0,height:.62119,italic:0,skew:0},117:{depth:0,height:.47534,italic:0,skew:0},118:{depth:0,height:.52396,italic:0,skew:0},119:{depth:0,height:.52396,italic:0,skew:0},120:{depth:.18906,height:.47534,italic:0,skew:0},121:{depth:.18906,height:.47534,italic:0,skew:0},122:{depth:.18906,height:.47534,italic:0,skew:0},8216:{depth:0,height:.69141,italic:0,skew:0},8217:{depth:0,height:.69141,italic:0,skew:0},58112:{depth:0,height:.62119,italic:0,skew:0},58113:{depth:0,height:.62119,italic:0,skew:0},58114:{depth:.18906,height:.69141,italic:0,skew:0},58115:{depth:.18906,height:.69141,italic:0,skew:0},58116:{depth:.18906,height:.47534,italic:0,skew:0},58117:{depth:0,height:.69141,italic:0,skew:0},58118:{depth:0,height:.62119,italic:0,skew:0},58119:{depth:0,height:.47534,italic:0,skew:0}},"Main-Bold":{33:{depth:0,height:.69444,italic:0,skew:0},34:{depth:0,height:.69444,italic:0,skew:0},35:{depth:.19444,height:.69444,italic:0,skew:0},36:{depth:.05556,height:.75,italic:0,skew:0},37:{depth:.05556,height:.75,italic:0,skew:0},38:{depth:0,height:.69444,italic:0,skew:0},39:{depth:0,height:.69444,italic:0,skew:0},40:{depth:.25,height:.75,italic:0,skew:0},41:{depth:.25,height:.75,italic:0,skew:0},42:{depth:0,height:.75,italic:0,skew:0},43:{depth:.13333,height:.63333,italic:0,skew:0},44:{depth:.19444,height:.15556,italic:0,skew:0},45:{depth:0,height:.44444,italic:0,skew:0},46:{depth:0,height:.15556,italic:0,skew:0},47:{depth:.25,height:.75,italic:0,skew:0},48:{depth:0,height:.64444,italic:0,skew:0},49:{depth:0,height:.64444,italic:0,skew:0},50:{depth:0,height:.64444,italic:0,skew:0},51:{depth:0,height:.64444,italic:0,skew:0},52:{depth:0,height:.64444,italic:0,skew:0},53:{depth:0,height:.64444,italic:0,skew:0},54:{depth:0,height:.64444,italic:0,skew:0},55:{depth:0,height:.64444,italic:0,skew:0},56:{depth:0,height:.64444,italic:0,skew:0},57:{depth:0,height:.64444,italic:0,skew:0},58:{depth:0,height:.44444,italic:0,skew:0},59:{depth:.19444,height:.44444,italic:0,skew:0},60:{depth:.08556,height:.58556,italic:0,skew:0},61:{depth:-.10889,height:.39111,italic:0,skew:0},62:{depth:.08556,height:.58556,italic:0,skew:0},63:{depth:0,height:.69444,italic:0,skew:0},64:{depth:0,height:.69444,italic:0,skew:0},65:{depth:0,height:.68611,italic:0,skew:0},66:{depth:0,height:.68611,italic:0,skew:0},67:{depth:0,height:.68611,italic:0,skew:0},68:{depth:0,height:.68611,italic:0,skew:0},69:{depth:0,height:.68611,italic:0,skew:0},70:{depth:0,height:.68611,italic:0,skew:0},71:{depth:0,height:.68611,italic:0,skew:0},72:{depth:0,height:.68611,italic:0,skew:0},73:{depth:0,height:.68611,italic:0,skew:0},74:{depth:0,height:.68611,italic:0,skew:0},75:{depth:0,height:.68611,italic:0,skew:0},76:{depth:0,height:.68611,italic:0,skew:0},77:{depth:0,height:.68611,italic:0,skew:0},78:{depth:0,height:.68611,italic:0,skew:0},79:{depth:0,height:.68611,italic:0,skew:0},80:{depth:0,height:.68611,italic:0,skew:0},81:{depth:.19444,height:.68611,italic:0,skew:0},82:{depth:0,height:.68611,italic:0,skew:0},83:{depth:0,height:.68611,italic:0,skew:0},84:{depth:0,height:.68611,italic:0,skew:0},85:{depth:0,height:.68611,italic:0,skew:0},86:{depth:0,height:.68611,italic:.01597,skew:0},87:{depth:0,height:.68611,italic:.01597,skew:0},88:{depth:0,height:.68611,italic:0,skew:0},89:{depth:0,height:.68611,italic:.02875,skew:0},90:{depth:0,height:.68611,italic:0,skew:0},91:{depth:.25,height:.75,italic:0,skew:0},92:{depth:.25,height:.75,italic:0,skew:0},93:{depth:.25,height:.75,italic:0,skew:0},94:{depth:0,height:.69444,italic:0,skew:0},95:{depth:.31,height:.13444,italic:.03194,skew:0},96:{depth:0,height:.69444,italic:0,skew:0},97:{depth:0,height:.44444,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.44444,italic:0,skew:0},100:{depth:0,height:.69444,italic:0,skew:0},101:{depth:0,height:.44444,italic:0,skew:0},102:{depth:0,height:.69444,italic:.10903,skew:0},103:{depth:.19444,height:.44444,italic:.01597,skew:0},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.69444,italic:0,skew:0},106:{depth:.19444,height:.69444,italic:0,skew:0},107:{depth:0,height:.69444,italic:0,skew:0},108:{depth:0,height:.69444,italic:0,skew:0},109:{depth:0,height:.44444,italic:0,skew:0},110:{depth:0,height:.44444,italic:0,skew:0},111:{depth:0,height:.44444,italic:0,skew:0},112:{depth:.19444,height:.44444,italic:0,skew:0},113:{depth:.19444,height:.44444,italic:0,skew:0},114:{depth:0,height:.44444,italic:0,skew:0},115:{depth:0,height:.44444,italic:0,skew:0},116:{depth:0,height:.63492,italic:0,skew:0},117:{depth:0,height:.44444,italic:0,skew:0},118:{depth:0,height:.44444,italic:.01597,skew:0},119:{depth:0,height:.44444,italic:.01597,skew:0},120:{depth:0,height:.44444,italic:0,skew:0},121:{depth:.19444,height:.44444,italic:.01597,skew:0},122:{depth:0,height:.44444,italic:0,skew:0},123:{depth:.25,height:.75,italic:0,skew:0},124:{depth:.25,height:.75,italic:0,skew:0},125:{depth:.25,height:.75,italic:0,skew:0},126:{depth:.35,height:.34444,italic:0,skew:0},168:{depth:0,height:.69444,italic:0,skew:0},172:{depth:0,height:.44444,italic:0,skew:0},175:{depth:0,height:.59611,italic:0,skew:0},176:{depth:0,height:.69444,italic:0,skew:0},177:{depth:.13333,height:.63333,italic:0,skew:0},180:{depth:0,height:.69444,italic:0,skew:0},215:{depth:.13333,height:.63333,italic:0,skew:0},247:{depth:.13333,height:.63333,italic:0,skew:0},305:{depth:0,height:.44444,italic:0,skew:0},567:{depth:.19444,height:.44444,italic:0,skew:0},710:{depth:0,height:.69444,italic:0,skew:0},711:{depth:0,height:.63194,italic:0,skew:0},713:{depth:0,height:.59611,italic:0,skew:0},714:{depth:0,height:.69444,italic:0,skew:0},715:{depth:0,height:.69444,italic:0,skew:0},728:{depth:0,height:.69444,italic:0,skew:0},729:{depth:0,height:.69444,italic:0,skew:0},730:{depth:0,height:.69444,italic:0,skew:0},732:{depth:0,height:.69444,italic:0,skew:0},768:{depth:0,height:.69444,italic:0,skew:0},769:{depth:0,height:.69444,italic:0,skew:0},770:{depth:0,height:.69444,italic:0,skew:0},771:{depth:0,height:.69444,italic:0,skew:0},772:{depth:0,height:.59611,italic:0,skew:0},774:{depth:0,height:.69444,italic:0,skew:0},775:{depth:0,height:.69444,italic:0,skew:0},776:{depth:0,height:.69444,italic:0,skew:0},778:{depth:0,height:.69444,italic:0,skew:0},779:{depth:0,height:.69444,italic:0,skew:0},780:{depth:0,height:.63194,italic:0,skew:0},824:{depth:.19444,height:.69444,italic:0,skew:0},915:{depth:0,height:.68611,italic:0,skew:0},916:{depth:0,height:.68611,italic:0,skew:0},920:{depth:0,height:.68611,italic:0,skew:0},923:{depth:0,height:.68611,italic:0,skew:0},926:{depth:0,height:.68611,italic:0,skew:0},928:{depth:0,height:.68611,italic:0,skew:0},931:{depth:0,height:.68611,italic:0,skew:0},933:{depth:0,height:.68611,italic:0,skew:0},934:{depth:0,height:.68611,italic:0,skew:0},936:{depth:0,height:.68611,italic:0,skew:0},937:{depth:0,height:.68611,italic:0,skew:0},8211:{depth:0,height:.44444,italic:.03194,skew:0},8212:{depth:0,height:.44444,italic:.03194,skew:0},8216:{depth:0,height:.69444,italic:0,skew:0},8217:{depth:0,height:.69444,italic:0,skew:0},8220:{depth:0,height:.69444,italic:0,skew:0},8221:{depth:0,height:.69444,italic:0,skew:0},8224:{depth:.19444,height:.69444,italic:0,skew:0},8225:{depth:.19444,height:.69444,italic:0,skew:0},8242:{depth:0,height:.55556,italic:0,skew:0},8407:{depth:0,height:.72444,italic:.15486,skew:0},8463:{depth:0,height:.69444,italic:0,skew:0},8465:{depth:0,height:.69444,italic:0,skew:0},8467:{depth:0,height:.69444,italic:0,skew:0},8472:{depth:.19444,height:.44444,italic:0,skew:0},8476:{depth:0,height:.69444,italic:0,skew:0},8501:{depth:0,height:.69444,italic:0,skew:0},8592:{depth:-.10889,height:.39111,italic:0,skew:0},8593:{depth:.19444,height:.69444,italic:0,skew:0},8594:{depth:-.10889,height:.39111,italic:0,skew:0},8595:{depth:.19444,height:.69444,italic:0,skew:0},8596:{depth:-.10889,height:.39111,italic:0,skew:0},8597:{depth:.25,height:.75,italic:0,skew:0},8598:{depth:.19444,height:.69444,italic:0,skew:0},8599:{depth:.19444,height:.69444,italic:0,skew:0},8600:{depth:.19444,height:.69444,italic:0,skew:0},8601:{depth:.19444,height:.69444,italic:0,skew:0},8636:{depth:-.10889,height:.39111,italic:0,skew:0},8637:{depth:-.10889,height:.39111,italic:0,skew:0},8640:{depth:-.10889,height:.39111,italic:0,skew:0},8641:{depth:-.10889,height:.39111,italic:0,skew:0},8656:{depth:-.10889,height:.39111,italic:0,skew:0},8657:{depth:.19444,height:.69444,italic:0,skew:0},8658:{depth:-.10889,height:.39111,italic:0,skew:0},8659:{depth:.19444,height:.69444,italic:0,skew:0},8660:{depth:-.10889,height:.39111,italic:0,skew:0},8661:{depth:.25,height:.75,italic:0,skew:0},8704:{depth:0,height:.69444,italic:0,skew:0},8706:{depth:0,height:.69444,italic:.06389,skew:0},8707:{depth:0,height:.69444,italic:0,skew:0},8709:{depth:.05556,height:.75,italic:0,skew:0},8711:{depth:0,height:.68611,italic:0,skew:0},8712:{depth:.08556,height:.58556,italic:0,skew:0},8715:{depth:.08556,height:.58556,italic:0,skew:0},8722:{depth:.13333,height:.63333,italic:0,skew:0},8723:{depth:.13333,height:.63333,italic:0,skew:0},8725:{depth:.25,height:.75,italic:0,skew:0},8726:{depth:.25,height:.75,italic:0,skew:0},8727:{depth:-.02778,height:.47222,italic:0,skew:0},8728:{depth:-.02639,height:.47361,italic:0,skew:0},8729:{depth:-.02639,height:.47361,italic:0,skew:0},8730:{depth:.18,height:.82,italic:0,skew:0},8733:{depth:0,height:.44444,italic:0,skew:0},8734:{depth:0,height:.44444,italic:0,skew:0},8736:{depth:0,height:.69224,italic:0,skew:0},8739:{depth:.25,height:.75,italic:0,skew:0},8741:{depth:.25,height:.75,italic:0,skew:0},8743:{depth:0,height:.55556,italic:0,skew:0},8744:{depth:0,height:.55556,italic:0,skew:0},8745:{depth:0,height:.55556,italic:0,skew:0},8746:{depth:0,height:.55556,italic:0,skew:0},8747:{depth:.19444,height:.69444,italic:.12778,skew:0},8764:{depth:-.10889,height:.39111,italic:0,skew:0},8768:{depth:.19444,height:.69444,italic:0,skew:0},8771:{depth:.00222,height:.50222,italic:0,skew:0},8776:{depth:.02444,height:.52444,italic:0,skew:0},8781:{depth:.00222,height:.50222,italic:0,skew:0},8801:{depth:.00222,height:.50222,italic:0,skew:0},8804:{depth:.19667,height:.69667,italic:0,skew:0},8805:{depth:.19667,height:.69667,italic:0,skew:0},8810:{depth:.08556,height:.58556,italic:0,skew:0},8811:{depth:.08556,height:.58556,italic:0,skew:0},8826:{depth:.08556,height:.58556,italic:0,skew:0},8827:{depth:.08556,height:.58556,italic:0,skew:0},8834:{depth:.08556,height:.58556,italic:0,skew:0},8835:{depth:.08556,height:.58556,italic:0,skew:0},8838:{depth:.19667,height:.69667,italic:0,skew:0},8839:{depth:.19667,height:.69667,italic:0,skew:0},8846:{depth:0,height:.55556,italic:0,skew:0},8849:{depth:.19667,height:.69667,italic:0,skew:0},8850:{depth:.19667,height:.69667,italic:0,skew:0},8851:{depth:0,height:.55556,italic:0,skew:0},8852:{depth:0,height:.55556,italic:0,skew:0},8853:{depth:.13333,height:.63333,italic:0,skew:0},8854:{depth:.13333,height:.63333,italic:0,skew:0},8855:{depth:.13333,height:.63333,italic:0,skew:0},8856:{depth:.13333,height:.63333,italic:0,skew:0},8857:{depth:.13333,height:.63333,italic:0,skew:0},8866:{depth:0,height:.69444,italic:0,skew:0},8867:{depth:0,height:.69444,italic:0,skew:0},8868:{depth:0,height:.69444,italic:0,skew:0},8869:{depth:0,height:.69444,italic:0,skew:0},8900:{depth:-.02639,height:.47361,italic:0,skew:0},8901:{depth:-.02639,height:.47361,italic:0,skew:0},8902:{depth:-.02778,height:.47222,italic:0,skew:0},8968:{depth:.25,height:.75,italic:0,skew:0},8969:{depth:.25,height:.75,italic:0,skew:0},8970:{depth:.25,height:.75,italic:0,skew:0},8971:{depth:.25,height:.75,italic:0,skew:0},8994:{depth:-.13889,height:.36111,italic:0,skew:0},8995:{depth:-.13889,height:.36111,italic:0,skew:0},9651:{depth:.19444,height:.69444,italic:0,skew:0},9657:{depth:-.02778,height:.47222,italic:0,skew:0},9661:{depth:.19444,height:.69444,italic:0,skew:0},9667:{depth:-.02778,height:.47222,italic:0,skew:0},9711:{depth:.19444,height:.69444,italic:0,skew:0},9824:{depth:.12963,height:.69444,italic:0,skew:0},9825:{depth:.12963,height:.69444,italic:0,skew:0},9826:{depth:.12963,height:.69444,italic:0,skew:0},9827:{depth:.12963,height:.69444,italic:0,skew:0},9837:{depth:0,height:.75,italic:0,skew:0},9838:{depth:.19444,height:.69444,italic:0,skew:0},9839:{depth:.19444,height:.69444,italic:0,skew:0},10216:{depth:.25,height:.75,italic:0,skew:0},10217:{depth:.25,height:.75,italic:0,skew:0},10815:{depth:0,height:.68611,italic:0,skew:0},10927:{depth:.19667,height:.69667,italic:0,skew:0},10928:{depth:.19667,height:.69667,italic:0,skew:0}},"Main-Italic":{33:{depth:0,height:.69444,italic:.12417,skew:0},34:{depth:0,height:.69444,italic:.06961,skew:0},35:{depth:.19444,height:.69444,italic:.06616,skew:0},37:{depth:.05556,height:.75,italic:.13639,skew:0},38:{depth:0,height:.69444,italic:.09694,skew:0},39:{depth:0,height:.69444,italic:.12417,skew:0},40:{depth:.25,height:.75,italic:.16194,skew:0},41:{depth:.25,height:.75,italic:.03694,skew:0},42:{depth:0,height:.75,italic:.14917,skew:0},43:{depth:.05667,height:.56167,italic:.03694,skew:0},44:{depth:.19444,height:.10556,italic:0,skew:0},45:{depth:0,height:.43056,italic:.02826,skew:0},46:{depth:0,height:.10556,italic:0,skew:0},47:{depth:.25,height:.75,italic:.16194,skew:0},48:{depth:0,height:.64444,italic:.13556,skew:0},49:{depth:0,height:.64444,italic:.13556,skew:0},50:{depth:0,height:.64444,italic:.13556,skew:0},51:{depth:0,height:.64444,italic:.13556,skew:0},52:{depth:.19444,height:.64444,italic:.13556,skew:0},53:{depth:0,height:.64444,italic:.13556,skew:0},54:{depth:0,height:.64444,italic:.13556,skew:0},55:{depth:.19444,height:.64444,italic:.13556,skew:0},56:{depth:0,height:.64444,italic:.13556,skew:0},57:{depth:0,height:.64444,italic:.13556,skew:0},58:{depth:0,height:.43056,italic:.0582,skew:0},59:{depth:.19444,height:.43056,italic:.0582,skew:0},61:{depth:-.13313,height:.36687,italic:.06616,skew:0},63:{depth:0,height:.69444,italic:.1225,skew:0},64:{depth:0,height:.69444,italic:.09597,skew:0},65:{depth:0,height:.68333,italic:0,skew:0},66:{depth:0,height:.68333,italic:.10257,skew:0},67:{depth:0,height:.68333,italic:.14528,skew:0},68:{depth:0,height:.68333,italic:.09403,skew:0},69:{depth:0,height:.68333,italic:.12028,skew:0},70:{depth:0,height:.68333,italic:.13305,skew:0},71:{depth:0,height:.68333,italic:.08722,skew:0},72:{depth:0,height:.68333,italic:.16389,skew:0},73:{depth:0,height:.68333,italic:.15806,skew:0},74:{depth:0,height:.68333,italic:.14028,skew:0},75:{depth:0,height:.68333,italic:.14528,skew:0},76:{depth:0,height:.68333,italic:0,skew:0},77:{depth:0,height:.68333,italic:.16389,skew:0},78:{depth:0,height:.68333,italic:.16389,skew:0},79:{depth:0,height:.68333,italic:.09403,skew:0},80:{depth:0,height:.68333,italic:.10257,skew:0},81:{depth:.19444,height:.68333,italic:.09403,skew:0},82:{depth:0,height:.68333,italic:.03868,skew:0},83:{depth:0,height:.68333,italic:.11972,skew:0},84:{depth:0,height:.68333,italic:.13305,skew:0},85:{depth:0,height:.68333,italic:.16389,skew:0},86:{depth:0,height:.68333,italic:.18361,skew:0},87:{depth:0,height:.68333,italic:.18361,skew:0},88:{depth:0,height:.68333,italic:.15806,skew:0},89:{depth:0,height:.68333,italic:.19383,skew:0},90:{depth:0,height:.68333,italic:.14528,skew:0},91:{depth:.25,height:.75,italic:.1875,skew:0},93:{depth:.25,height:.75,italic:.10528,skew:0},94:{depth:0,height:.69444,italic:.06646,skew:0},95:{depth:.31,height:.12056,italic:.09208,skew:0},97:{depth:0,height:.43056,italic:.07671,skew:0},98:{depth:0,height:.69444,italic:.06312,skew:0},99:{depth:0,height:.43056,italic:.05653,skew:0},100:{depth:0,height:.69444,italic:.10333,skew:0},101:{depth:0,height:.43056,italic:.07514,skew:0},102:{depth:.19444,height:.69444,italic:.21194,skew:0},103:{depth:.19444,height:.43056,italic:.08847,skew:0},104:{depth:0,height:.69444,italic:.07671,skew:0},105:{depth:0,height:.65536,italic:.1019,skew:0},106:{depth:.19444,height:.65536,italic:.14467,skew:0},107:{depth:0,height:.69444,italic:.10764,skew:0},108:{depth:0,height:.69444,italic:.10333,skew:0},109:{depth:0,height:.43056,italic:.07671,skew:0},110:{depth:0,height:.43056,italic:.07671,skew:0},111:{depth:0,height:.43056,italic:.06312,skew:0},112:{depth:.19444,height:.43056,italic:.06312,skew:0},113:{depth:.19444,height:.43056,italic:.08847,skew:0},114:{depth:0,height:.43056,italic:.10764,skew:0},115:{depth:0,height:.43056,italic:.08208,skew:0},116:{depth:0,height:.61508,italic:.09486,skew:0},117:{depth:0,height:.43056,italic:.07671,skew:0},118:{depth:0,height:.43056,italic:.10764,skew:0},119:{depth:0,height:.43056,italic:.10764,skew:0},120:{depth:0,height:.43056,italic:.12042,skew:0},121:{depth:.19444,height:.43056,italic:.08847,skew:0},122:{depth:0,height:.43056,italic:.12292,skew:0},126:{depth:.35,height:.31786,italic:.11585,skew:0},163:{depth:0,height:.69444,italic:0,skew:0},305:{depth:0,height:.43056,italic:0,skew:.02778},567:{depth:.19444,height:.43056,italic:0,skew:.08334},768:{depth:0,height:.69444,italic:0,skew:0},769:{depth:0,height:.69444,italic:.09694,skew:0},770:{depth:0,height:.69444,italic:.06646,skew:0},771:{depth:0,height:.66786,italic:.11585,skew:0},772:{depth:0,height:.56167,italic:.10333,skew:0},774:{depth:0,height:.69444,italic:.10806,skew:0},775:{depth:0,height:.66786,italic:.11752,skew:0},776:{depth:0,height:.66786,italic:.10474,skew:0},778:{depth:0,height:.69444,italic:0,skew:0},779:{depth:0,height:.69444,italic:.1225,skew:0},780:{depth:0,height:.62847,italic:.08295,skew:0},915:{depth:0,height:.68333,italic:.13305,skew:0},916:{depth:0,height:.68333,italic:0,skew:0},920:{depth:0,height:.68333,italic:.09403,skew:0},923:{depth:0,height:.68333,italic:0,skew:0},926:{depth:0,height:.68333,italic:.15294,skew:0},928:{depth:0,height:.68333,italic:.16389,skew:0},931:{depth:0,height:.68333,italic:.12028,skew:0},933:{depth:0,height:.68333,italic:.11111,skew:0},934:{depth:0,height:.68333,italic:.05986,skew:0},936:{depth:0,height:.68333,italic:.11111,skew:0},937:{depth:0,height:.68333,italic:.10257,skew:0},8211:{depth:0,height:.43056,italic:.09208,skew:0},8212:{depth:0,height:.43056,italic:.09208,skew:0},8216:{depth:0,height:.69444,italic:.12417,skew:0},8217:{depth:0,height:.69444,italic:.12417,skew:0},8220:{depth:0,height:.69444,italic:.1685,skew:0},8221:{depth:0,height:.69444,italic:.06961,skew:0},8463:{depth:0,height:.68889,italic:0,skew:0}},"Main-Regular":{32:{depth:0,height:0,italic:0,skew:0},33:{depth:0,height:.69444,italic:0,skew:0},34:{depth:0,height:.69444,italic:0,skew:0},35:{depth:.19444,height:.69444,italic:0,skew:0},36:{depth:.05556,height:.75,italic:0,skew:0},37:{depth:.05556,height:.75,italic:0,skew:0},38:{depth:0,height:.69444,italic:0,skew:0},39:{depth:0,height:.69444,italic:0,skew:0},40:{depth:.25,height:.75,italic:0,skew:0},41:{depth:.25,height:.75,italic:0,skew:0},42:{depth:0,height:.75,italic:0,skew:0},43:{depth:.08333,height:.58333,italic:0,skew:0},44:{depth:.19444,height:.10556,italic:0,skew:0},45:{depth:0,height:.43056,italic:0,skew:0},46:{depth:0,height:.10556,italic:0,skew:0},47:{depth:.25,height:.75,italic:0,skew:0},48:{depth:0,height:.64444,italic:0,skew:0},49:{depth:0,height:.64444,italic:0,skew:0},50:{depth:0,height:.64444,italic:0,skew:0},51:{depth:0,height:.64444,italic:0,skew:0},52:{depth:0,height:.64444,italic:0,skew:0},53:{depth:0,height:.64444,italic:0,skew:0},54:{depth:0,height:.64444,italic:0,skew:0},55:{depth:0,height:.64444,italic:0,skew:0},56:{depth:0,height:.64444,italic:0,skew:0},57:{depth:0,height:.64444,italic:0,skew:0},58:{depth:0,height:.43056,italic:0,skew:0},59:{depth:.19444,height:.43056,italic:0,skew:0},60:{depth:.0391,height:.5391,italic:0,skew:0},61:{depth:-.13313,height:.36687,italic:0,skew:0},62:{depth:.0391,height:.5391,italic:0,skew:0},63:{depth:0,height:.69444,italic:0,skew:0},64:{depth:0,height:.69444,italic:0,skew:0},65:{depth:0,height:.68333,italic:0,skew:0},66:{depth:0,height:.68333,italic:0,skew:0},67:{depth:0,height:.68333,italic:0,skew:0},68:{depth:0,height:.68333,italic:0,skew:0},69:{depth:0,height:.68333,italic:0,skew:0},70:{depth:0,height:.68333,italic:0,skew:0},71:{depth:0,height:.68333,italic:0,skew:0},72:{depth:0,height:.68333,italic:0,skew:0},73:{depth:0,height:.68333,italic:0,skew:0},74:{depth:0,height:.68333,italic:0,skew:0},75:{depth:0,height:.68333,italic:0,skew:0},76:{depth:0,height:.68333,italic:0,skew:0},77:{depth:0,height:.68333,italic:0,skew:0},78:{depth:0,height:.68333,italic:0,skew:0},79:{depth:0,height:.68333,italic:0,skew:0},80:{depth:0,height:.68333,italic:0,skew:0},81:{depth:.19444,height:.68333,italic:0,skew:0},82:{depth:0,height:.68333,italic:0,skew:0},83:{depth:0,height:.68333,italic:0,skew:0},84:{depth:0,height:.68333,italic:0,skew:0},85:{depth:0,height:.68333,italic:0,skew:0},86:{depth:0,height:.68333,italic:.01389,skew:0},87:{depth:0,height:.68333,italic:.01389,skew:0},88:{depth:0,height:.68333,italic:0,skew:0},89:{depth:0,height:.68333,italic:.025,skew:0},90:{depth:0,height:.68333,italic:0,skew:0},91:{depth:.25,height:.75,italic:0,skew:0},92:{depth:.25,height:.75,italic:0,skew:0},93:{depth:.25,height:.75,italic:0,skew:0},94:{depth:0,height:.69444,italic:0,skew:0},95:{depth:.31,height:.12056,italic:.02778,skew:0},96:{depth:0,height:.69444,italic:0,skew:0},97:{depth:0,height:.43056,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.43056,italic:0,skew:0},100:{depth:0,height:.69444,italic:0,skew:0},101:{depth:0,height:.43056,italic:0,skew:0},102:{depth:0,height:.69444,italic:.07778,skew:0},103:{depth:.19444,height:.43056,italic:.01389,skew:0},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.66786,italic:0,skew:0},106:{depth:.19444,height:.66786,italic:0,skew:0},107:{depth:0,height:.69444,italic:0,skew:0},108:{depth:0,height:.69444,italic:0,skew:0},109:{depth:0,height:.43056,italic:0,skew:0},110:{depth:0,height:.43056,italic:0,skew:0},111:{depth:0,height:.43056,italic:0,skew:0},112:{depth:.19444,height:.43056,italic:0,skew:0},113:{depth:.19444,height:.43056,italic:0,skew:0},114:{depth:0,height:.43056,italic:0,skew:0},115:{depth:0,height:.43056,italic:0,skew:0},116:{depth:0,height:.61508,italic:0,skew:0},117:{depth:0,height:.43056,italic:0,skew:0},118:{depth:0,height:.43056,italic:.01389,skew:0},119:{depth:0,height:.43056,italic:.01389,skew:0},120:{depth:0,height:.43056,italic:0,skew:0},121:{depth:.19444,height:.43056,italic:.01389,skew:0},122:{depth:0,height:.43056,italic:0,skew:0},123:{depth:.25,height:.75,italic:0,skew:0},124:{depth:.25,height:.75,italic:0,skew:0},125:{depth:.25,height:.75,italic:0,skew:0},126:{depth:.35,height:.31786,italic:0,skew:0},160:{depth:0,height:0,italic:0,skew:0},168:{depth:0,height:.66786,italic:0,skew:0},172:{depth:0,height:.43056,italic:0,skew:0},175:{depth:0,height:.56778,italic:0,skew:0},176:{depth:0,height:.69444,italic:0,skew:0},177:{depth:.08333,height:.58333,italic:0,skew:0},180:{depth:0,height:.69444,italic:0,skew:0},215:{depth:.08333,height:.58333,italic:0,skew:0},247:{depth:.08333,height:.58333,italic:0,skew:0},305:{depth:0,height:.43056,italic:0,skew:0},567:{depth:.19444,height:.43056,italic:0,skew:0},710:{depth:0,height:.69444,italic:0,skew:0},711:{depth:0,height:.62847,italic:0,skew:0},713:{depth:0,height:.56778,italic:0,skew:0},714:{depth:0,height:.69444,italic:0,skew:0},715:{depth:0,height:.69444,italic:0,skew:0},728:{depth:0,height:.69444,italic:0,skew:0},729:{depth:0,height:.66786,italic:0,skew:0},730:{depth:0,height:.69444,italic:0,skew:0},732:{depth:0,height:.66786,italic:0,skew:0},768:{depth:0,height:.69444,italic:0,skew:0},769:{depth:0,height:.69444,italic:0,skew:0},770:{depth:0,height:.69444,italic:0,skew:0},771:{depth:0,height:.66786,italic:0,skew:0},772:{depth:0,height:.56778,italic:0,skew:0},774:{depth:0,height:.69444,italic:0,skew:0},775:{depth:0,height:.66786,italic:0,skew:0},776:{depth:0,height:.66786,italic:0,skew:0},778:{depth:0,height:.69444,italic:0,skew:0},779:{depth:0,height:.69444,italic:0,skew:0},780:{depth:0,height:.62847,italic:0,skew:0},824:{depth:.19444,height:.69444,italic:0,skew:0},915:{depth:0,height:.68333,italic:0,skew:0},916:{depth:0,height:.68333,italic:0,skew:0},920:{depth:0,height:.68333,italic:0,skew:0},923:{depth:0,height:.68333,italic:0,skew:0},926:{depth:0,height:.68333,italic:0,skew:0},928:{depth:0,height:.68333,italic:0,skew:0},931:{depth:0,height:.68333,italic:0,skew:0},933:{depth:0,height:.68333,italic:0,skew:0},934:{depth:0,height:.68333,italic:0,skew:0},936:{depth:0,height:.68333,italic:0,skew:0},937:{depth:0,height:.68333,italic:0,skew:0},8211:{depth:0,height:.43056,italic:.02778,skew:0},8212:{depth:0,height:.43056,italic:.02778,skew:0},8216:{depth:0,height:.69444,italic:0,skew:0},8217:{depth:0,height:.69444,italic:0,skew:0},8220:{depth:0,height:.69444,italic:0,skew:0},8221:{depth:0,height:.69444,italic:0,skew:0},8224:{depth:.19444,height:.69444,italic:0,skew:0},8225:{depth:.19444,height:.69444,italic:0,skew:0},8230:{depth:0,height:.12,italic:0,skew:0},8242:{depth:0,height:.55556,italic:0,skew:0},8407:{depth:0,height:.71444,italic:.15382,skew:0},8463:{depth:0,height:.68889,italic:0,skew:0},8465:{depth:0,height:.69444,italic:0,skew:0},8467:{depth:0,height:.69444,italic:0,skew:.11111},8472:{depth:.19444,height:.43056,italic:0,skew:.11111},8476:{depth:0,height:.69444,italic:0,skew:0},8501:{depth:0,height:.69444,italic:0,skew:0},8592:{depth:-.13313,height:.36687,italic:0,skew:0},8593:{depth:.19444,height:.69444,italic:0,skew:0},8594:{depth:-.13313,height:.36687,italic:0,skew:0},8595:{depth:.19444,height:.69444,italic:0,skew:0},8596:{depth:-.13313,height:.36687,italic:0,skew:0},8597:{depth:.25,height:.75,italic:0,skew:0},8598:{depth:.19444,height:.69444,italic:0,skew:0},8599:{depth:.19444,height:.69444,italic:0,skew:0},8600:{depth:.19444,height:.69444,italic:0,skew:0},8601:{depth:.19444,height:.69444,italic:0,skew:0},8614:{depth:.011,
height:.511,italic:0,skew:0},8617:{depth:.011,height:.511,italic:0,skew:0},8618:{depth:.011,height:.511,italic:0,skew:0},8636:{depth:-.13313,height:.36687,italic:0,skew:0},8637:{depth:-.13313,height:.36687,italic:0,skew:0},8640:{depth:-.13313,height:.36687,italic:0,skew:0},8641:{depth:-.13313,height:.36687,italic:0,skew:0},8652:{depth:.011,height:.671,italic:0,skew:0},8656:{depth:-.13313,height:.36687,italic:0,skew:0},8657:{depth:.19444,height:.69444,italic:0,skew:0},8658:{depth:-.13313,height:.36687,italic:0,skew:0},8659:{depth:.19444,height:.69444,italic:0,skew:0},8660:{depth:-.13313,height:.36687,italic:0,skew:0},8661:{depth:.25,height:.75,italic:0,skew:0},8704:{depth:0,height:.69444,italic:0,skew:0},8706:{depth:0,height:.69444,italic:.05556,skew:.08334},8707:{depth:0,height:.69444,italic:0,skew:0},8709:{depth:.05556,height:.75,italic:0,skew:0},8711:{depth:0,height:.68333,italic:0,skew:0},8712:{depth:.0391,height:.5391,italic:0,skew:0},8715:{depth:.0391,height:.5391,italic:0,skew:0},8722:{depth:.08333,height:.58333,italic:0,skew:0},8723:{depth:.08333,height:.58333,italic:0,skew:0},8725:{depth:.25,height:.75,italic:0,skew:0},8726:{depth:.25,height:.75,italic:0,skew:0},8727:{depth:-.03472,height:.46528,italic:0,skew:0},8728:{depth:-.05555,height:.44445,italic:0,skew:0},8729:{depth:-.05555,height:.44445,italic:0,skew:0},8730:{depth:.2,height:.8,italic:0,skew:0},8733:{depth:0,height:.43056,italic:0,skew:0},8734:{depth:0,height:.43056,italic:0,skew:0},8736:{depth:0,height:.69224,italic:0,skew:0},8739:{depth:.25,height:.75,italic:0,skew:0},8741:{depth:.25,height:.75,italic:0,skew:0},8743:{depth:0,height:.55556,italic:0,skew:0},8744:{depth:0,height:.55556,italic:0,skew:0},8745:{depth:0,height:.55556,italic:0,skew:0},8746:{depth:0,height:.55556,italic:0,skew:0},8747:{depth:.19444,height:.69444,italic:.11111,skew:0},8764:{depth:-.13313,height:.36687,italic:0,skew:0},8768:{depth:.19444,height:.69444,italic:0,skew:0},8771:{depth:-.03625,height:.46375,italic:0,skew:0},8773:{depth:-.022,height:.589,italic:0,skew:0},8776:{depth:-.01688,height:.48312,italic:0,skew:0},8781:{depth:-.03625,height:.46375,italic:0,skew:0},8784:{depth:-.133,height:.67,italic:0,skew:0},8800:{depth:.215,height:.716,italic:0,skew:0},8801:{depth:-.03625,height:.46375,italic:0,skew:0},8804:{depth:.13597,height:.63597,italic:0,skew:0},8805:{depth:.13597,height:.63597,italic:0,skew:0},8810:{depth:.0391,height:.5391,italic:0,skew:0},8811:{depth:.0391,height:.5391,italic:0,skew:0},8826:{depth:.0391,height:.5391,italic:0,skew:0},8827:{depth:.0391,height:.5391,italic:0,skew:0},8834:{depth:.0391,height:.5391,italic:0,skew:0},8835:{depth:.0391,height:.5391,italic:0,skew:0},8838:{depth:.13597,height:.63597,italic:0,skew:0},8839:{depth:.13597,height:.63597,italic:0,skew:0},8846:{depth:0,height:.55556,italic:0,skew:0},8849:{depth:.13597,height:.63597,italic:0,skew:0},8850:{depth:.13597,height:.63597,italic:0,skew:0},8851:{depth:0,height:.55556,italic:0,skew:0},8852:{depth:0,height:.55556,italic:0,skew:0},8853:{depth:.08333,height:.58333,italic:0,skew:0},8854:{depth:.08333,height:.58333,italic:0,skew:0},8855:{depth:.08333,height:.58333,italic:0,skew:0},8856:{depth:.08333,height:.58333,italic:0,skew:0},8857:{depth:.08333,height:.58333,italic:0,skew:0},8866:{depth:0,height:.69444,italic:0,skew:0},8867:{depth:0,height:.69444,italic:0,skew:0},8868:{depth:0,height:.69444,italic:0,skew:0},8869:{depth:0,height:.69444,italic:0,skew:0},8872:{depth:.249,height:.75,italic:0,skew:0},8900:{depth:-.05555,height:.44445,italic:0,skew:0},8901:{depth:-.05555,height:.44445,italic:0,skew:0},8902:{depth:-.03472,height:.46528,italic:0,skew:0},8904:{depth:.005,height:.505,italic:0,skew:0},8942:{depth:.03,height:.9,italic:0,skew:0},8943:{depth:-.19,height:.31,italic:0,skew:0},8945:{depth:-.1,height:.82,italic:0,skew:0},8968:{depth:.25,height:.75,italic:0,skew:0},8969:{depth:.25,height:.75,italic:0,skew:0},8970:{depth:.25,height:.75,italic:0,skew:0},8971:{depth:.25,height:.75,italic:0,skew:0},8994:{depth:-.14236,height:.35764,italic:0,skew:0},8995:{depth:-.14236,height:.35764,italic:0,skew:0},9136:{depth:.244,height:.744,italic:0,skew:0},9137:{depth:.244,height:.744,italic:0,skew:0},9651:{depth:.19444,height:.69444,italic:0,skew:0},9657:{depth:-.03472,height:.46528,italic:0,skew:0},9661:{depth:.19444,height:.69444,italic:0,skew:0},9667:{depth:-.03472,height:.46528,italic:0,skew:0},9711:{depth:.19444,height:.69444,italic:0,skew:0},9824:{depth:.12963,height:.69444,italic:0,skew:0},9825:{depth:.12963,height:.69444,italic:0,skew:0},9826:{depth:.12963,height:.69444,italic:0,skew:0},9827:{depth:.12963,height:.69444,italic:0,skew:0},9837:{depth:0,height:.75,italic:0,skew:0},9838:{depth:.19444,height:.69444,italic:0,skew:0},9839:{depth:.19444,height:.69444,italic:0,skew:0},10216:{depth:.25,height:.75,italic:0,skew:0},10217:{depth:.25,height:.75,italic:0,skew:0},10222:{depth:.244,height:.744,italic:0,skew:0},10223:{depth:.244,height:.744,italic:0,skew:0},10229:{depth:.011,height:.511,italic:0,skew:0},10230:{depth:.011,height:.511,italic:0,skew:0},10231:{depth:.011,height:.511,italic:0,skew:0},10232:{depth:.024,height:.525,italic:0,skew:0},10233:{depth:.024,height:.525,italic:0,skew:0},10234:{depth:.024,height:.525,italic:0,skew:0},10236:{depth:.011,height:.511,italic:0,skew:0},10815:{depth:0,height:.68333,italic:0,skew:0},10927:{depth:.13597,height:.63597,italic:0,skew:0},10928:{depth:.13597,height:.63597,italic:0,skew:0}},"Math-BoldItalic":{47:{depth:.19444,height:.69444,italic:0,skew:0},65:{depth:0,height:.68611,italic:0,skew:0},66:{depth:0,height:.68611,italic:.04835,skew:0},67:{depth:0,height:.68611,italic:.06979,skew:0},68:{depth:0,height:.68611,italic:.03194,skew:0},69:{depth:0,height:.68611,italic:.05451,skew:0},70:{depth:0,height:.68611,italic:.15972,skew:0},71:{depth:0,height:.68611,italic:0,skew:0},72:{depth:0,height:.68611,italic:.08229,skew:0},73:{depth:0,height:.68611,italic:.07778,skew:0},74:{depth:0,height:.68611,italic:.10069,skew:0},75:{depth:0,height:.68611,italic:.06979,skew:0},76:{depth:0,height:.68611,italic:0,skew:0},77:{depth:0,height:.68611,italic:.11424,skew:0},78:{depth:0,height:.68611,italic:.11424,skew:0},79:{depth:0,height:.68611,italic:.03194,skew:0},80:{depth:0,height:.68611,italic:.15972,skew:0},81:{depth:.19444,height:.68611,italic:0,skew:0},82:{depth:0,height:.68611,italic:.00421,skew:0},83:{depth:0,height:.68611,italic:.05382,skew:0},84:{depth:0,height:.68611,italic:.15972,skew:0},85:{depth:0,height:.68611,italic:.11424,skew:0},86:{depth:0,height:.68611,italic:.25555,skew:0},87:{depth:0,height:.68611,italic:.15972,skew:0},88:{depth:0,height:.68611,italic:.07778,skew:0},89:{depth:0,height:.68611,italic:.25555,skew:0},90:{depth:0,height:.68611,italic:.06979,skew:0},97:{depth:0,height:.44444,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.44444,italic:0,skew:0},100:{depth:0,height:.69444,italic:0,skew:0},101:{depth:0,height:.44444,italic:0,skew:0},102:{depth:.19444,height:.69444,italic:.11042,skew:0},103:{depth:.19444,height:.44444,italic:.03704,skew:0},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.69326,italic:0,skew:0},106:{depth:.19444,height:.69326,italic:.0622,skew:0},107:{depth:0,height:.69444,italic:.01852,skew:0},108:{depth:0,height:.69444,italic:.0088,skew:0},109:{depth:0,height:.44444,italic:0,skew:0},110:{depth:0,height:.44444,italic:0,skew:0},111:{depth:0,height:.44444,italic:0,skew:0},112:{depth:.19444,height:.44444,italic:0,skew:0},113:{depth:.19444,height:.44444,italic:.03704,skew:0},114:{depth:0,height:.44444,italic:.03194,skew:0},115:{depth:0,height:.44444,italic:0,skew:0},116:{depth:0,height:.63492,italic:0,skew:0},117:{depth:0,height:.44444,italic:0,skew:0},118:{depth:0,height:.44444,italic:.03704,skew:0},119:{depth:0,height:.44444,italic:.02778,skew:0},120:{depth:0,height:.44444,italic:0,skew:0},121:{depth:.19444,height:.44444,italic:.03704,skew:0},122:{depth:0,height:.44444,italic:.04213,skew:0},915:{depth:0,height:.68611,italic:.15972,skew:0},916:{depth:0,height:.68611,italic:0,skew:0},920:{depth:0,height:.68611,italic:.03194,skew:0},923:{depth:0,height:.68611,italic:0,skew:0},926:{depth:0,height:.68611,italic:.07458,skew:0},928:{depth:0,height:.68611,italic:.08229,skew:0},931:{depth:0,height:.68611,italic:.05451,skew:0},933:{depth:0,height:.68611,italic:.15972,skew:0},934:{depth:0,height:.68611,italic:0,skew:0},936:{depth:0,height:.68611,italic:.11653,skew:0},937:{depth:0,height:.68611,italic:.04835,skew:0},945:{depth:0,height:.44444,italic:0,skew:0},946:{depth:.19444,height:.69444,italic:.03403,skew:0},947:{depth:.19444,height:.44444,italic:.06389,skew:0},948:{depth:0,height:.69444,italic:.03819,skew:0},949:{depth:0,height:.44444,italic:0,skew:0},950:{depth:.19444,height:.69444,italic:.06215,skew:0},951:{depth:.19444,height:.44444,italic:.03704,skew:0},952:{depth:0,height:.69444,italic:.03194,skew:0},953:{depth:0,height:.44444,italic:0,skew:0},954:{depth:0,height:.44444,italic:0,skew:0},955:{depth:0,height:.69444,italic:0,skew:0},956:{depth:.19444,height:.44444,italic:0,skew:0},957:{depth:0,height:.44444,italic:.06898,skew:0},958:{depth:.19444,height:.69444,italic:.03021,skew:0},959:{depth:0,height:.44444,italic:0,skew:0},960:{depth:0,height:.44444,italic:.03704,skew:0},961:{depth:.19444,height:.44444,italic:0,skew:0},962:{depth:.09722,height:.44444,italic:.07917,skew:0},963:{depth:0,height:.44444,italic:.03704,skew:0},964:{depth:0,height:.44444,italic:.13472,skew:0},965:{depth:0,height:.44444,italic:.03704,skew:0},966:{depth:.19444,height:.44444,italic:0,skew:0},967:{depth:.19444,height:.44444,italic:0,skew:0},968:{depth:.19444,height:.69444,italic:.03704,skew:0},969:{depth:0,height:.44444,italic:.03704,skew:0},977:{depth:0,height:.69444,italic:0,skew:0},981:{depth:.19444,height:.69444,italic:0,skew:0},982:{depth:0,height:.44444,italic:.03194,skew:0},1009:{depth:.19444,height:.44444,italic:0,skew:0},1013:{depth:0,height:.44444,italic:0,skew:0}},"Math-Italic":{47:{depth:.19444,height:.69444,italic:0,skew:0},65:{depth:0,height:.68333,italic:0,skew:.13889},66:{depth:0,height:.68333,italic:.05017,skew:.08334},67:{depth:0,height:.68333,italic:.07153,skew:.08334},68:{depth:0,height:.68333,italic:.02778,skew:.05556},69:{depth:0,height:.68333,italic:.05764,skew:.08334},70:{depth:0,height:.68333,italic:.13889,skew:.08334},71:{depth:0,height:.68333,italic:0,skew:.08334},72:{depth:0,height:.68333,italic:.08125,skew:.05556},73:{depth:0,height:.68333,italic:.07847,skew:.11111},74:{depth:0,height:.68333,italic:.09618,skew:.16667},75:{depth:0,height:.68333,italic:.07153,skew:.05556},76:{depth:0,height:.68333,italic:0,skew:.02778},77:{depth:0,height:.68333,italic:.10903,skew:.08334},78:{depth:0,height:.68333,italic:.10903,skew:.08334},79:{depth:0,height:.68333,italic:.02778,skew:.08334},80:{depth:0,height:.68333,italic:.13889,skew:.08334},81:{depth:.19444,height:.68333,italic:0,skew:.08334},82:{depth:0,height:.68333,italic:.00773,skew:.08334},83:{depth:0,height:.68333,italic:.05764,skew:.08334},84:{depth:0,height:.68333,italic:.13889,skew:.08334},85:{depth:0,height:.68333,italic:.10903,skew:.02778},86:{depth:0,height:.68333,italic:.22222,skew:0},87:{depth:0,height:.68333,italic:.13889,skew:0},88:{depth:0,height:.68333,italic:.07847,skew:.08334},89:{depth:0,height:.68333,italic:.22222,skew:0},90:{depth:0,height:.68333,italic:.07153,skew:.08334},97:{depth:0,height:.43056,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.43056,italic:0,skew:.05556},100:{depth:0,height:.69444,italic:0,skew:.16667},101:{depth:0,height:.43056,italic:0,skew:.05556},102:{depth:.19444,height:.69444,italic:.10764,skew:.16667},103:{depth:.19444,height:.43056,italic:.03588,skew:.02778},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.65952,italic:0,skew:0},106:{depth:.19444,height:.65952,italic:.05724,skew:0},107:{depth:0,height:.69444,italic:.03148,skew:0},108:{depth:0,height:.69444,italic:.01968,skew:.08334},109:{depth:0,height:.43056,italic:0,skew:0},110:{depth:0,height:.43056,italic:0,skew:0},111:{depth:0,height:.43056,italic:0,skew:.05556},112:{depth:.19444,height:.43056,italic:0,skew:.08334},113:{depth:.19444,height:.43056,italic:.03588,skew:.08334},114:{depth:0,height:.43056,italic:.02778,skew:.05556},115:{depth:0,height:.43056,italic:0,skew:.05556},116:{depth:0,height:.61508,italic:0,skew:.08334},117:{depth:0,height:.43056,italic:0,skew:.02778},118:{depth:0,height:.43056,italic:.03588,skew:.02778},119:{depth:0,height:.43056,italic:.02691,skew:.08334},120:{depth:0,height:.43056,italic:0,skew:.02778},121:{depth:.19444,height:.43056,italic:.03588,skew:.05556},122:{depth:0,height:.43056,italic:.04398,skew:.05556},915:{depth:0,height:.68333,italic:.13889,skew:.08334},916:{depth:0,height:.68333,italic:0,skew:.16667},920:{depth:0,height:.68333,italic:.02778,skew:.08334},923:{depth:0,height:.68333,italic:0,skew:.16667},926:{depth:0,height:.68333,italic:.07569,skew:.08334},928:{depth:0,height:.68333,italic:.08125,skew:.05556},931:{depth:0,height:.68333,italic:.05764,skew:.08334},933:{depth:0,height:.68333,italic:.13889,skew:.05556},934:{depth:0,height:.68333,italic:0,skew:.08334},936:{depth:0,height:.68333,italic:.11,skew:.05556},937:{depth:0,height:.68333,italic:.05017,skew:.08334},945:{depth:0,height:.43056,italic:.0037,skew:.02778},946:{depth:.19444,height:.69444,italic:.05278,skew:.08334},947:{depth:.19444,height:.43056,italic:.05556,skew:0},948:{depth:0,height:.69444,italic:.03785,skew:.05556},949:{depth:0,height:.43056,italic:0,skew:.08334},950:{depth:.19444,height:.69444,italic:.07378,skew:.08334},951:{depth:.19444,height:.43056,italic:.03588,skew:.05556},952:{depth:0,height:.69444,italic:.02778,skew:.08334},953:{depth:0,height:.43056,italic:0,skew:.05556},954:{depth:0,height:.43056,italic:0,skew:0},955:{depth:0,height:.69444,italic:0,skew:0},956:{depth:.19444,height:.43056,italic:0,skew:.02778},957:{depth:0,height:.43056,italic:.06366,skew:.02778},958:{depth:.19444,height:.69444,italic:.04601,skew:.11111},959:{depth:0,height:.43056,italic:0,skew:.05556},960:{depth:0,height:.43056,italic:.03588,skew:0},961:{depth:.19444,height:.43056,italic:0,skew:.08334},962:{depth:.09722,height:.43056,italic:.07986,skew:.08334},963:{depth:0,height:.43056,italic:.03588,skew:0},964:{depth:0,height:.43056,italic:.1132,skew:.02778},965:{depth:0,height:.43056,italic:.03588,skew:.02778},966:{depth:.19444,height:.43056,italic:0,skew:.08334},967:{depth:.19444,height:.43056,italic:0,skew:.05556},968:{depth:.19444,height:.69444,italic:.03588,skew:.11111},969:{depth:0,height:.43056,italic:.03588,skew:0},977:{depth:0,height:.69444,italic:0,skew:.08334},981:{depth:.19444,height:.69444,italic:0,skew:.08334},982:{depth:0,height:.43056,italic:.02778,skew:0},1009:{depth:.19444,height:.43056,italic:0,skew:.08334},1013:{depth:0,height:.43056,italic:0,skew:.05556}},"Math-Regular":{65:{depth:0,height:.68333,italic:0,skew:.13889},66:{depth:0,height:.68333,italic:.05017,skew:.08334},67:{depth:0,height:.68333,italic:.07153,skew:.08334},68:{depth:0,height:.68333,italic:.02778,skew:.05556},69:{depth:0,height:.68333,italic:.05764,skew:.08334},70:{depth:0,height:.68333,italic:.13889,skew:.08334},71:{depth:0,height:.68333,italic:0,skew:.08334},72:{depth:0,height:.68333,italic:.08125,skew:.05556},73:{depth:0,height:.68333,italic:.07847,skew:.11111},74:{depth:0,height:.68333,italic:.09618,skew:.16667},75:{depth:0,height:.68333,italic:.07153,skew:.05556},76:{depth:0,height:.68333,italic:0,skew:.02778},77:{depth:0,height:.68333,italic:.10903,skew:.08334},78:{depth:0,height:.68333,italic:.10903,skew:.08334},79:{depth:0,height:.68333,italic:.02778,skew:.08334},80:{depth:0,height:.68333,italic:.13889,skew:.08334},81:{depth:.19444,height:.68333,italic:0,skew:.08334},82:{depth:0,height:.68333,italic:.00773,skew:.08334},83:{depth:0,height:.68333,italic:.05764,skew:.08334},84:{depth:0,height:.68333,italic:.13889,skew:.08334},85:{depth:0,height:.68333,italic:.10903,skew:.02778},86:{depth:0,height:.68333,italic:.22222,skew:0},87:{depth:0,height:.68333,italic:.13889,skew:0},88:{depth:0,height:.68333,italic:.07847,skew:.08334},89:{depth:0,height:.68333,italic:.22222,skew:0},90:{depth:0,height:.68333,italic:.07153,skew:.08334},97:{depth:0,height:.43056,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.43056,italic:0,skew:.05556},100:{depth:0,height:.69444,italic:0,skew:.16667},101:{depth:0,height:.43056,italic:0,skew:.05556},102:{depth:.19444,height:.69444,italic:.10764,skew:.16667},103:{depth:.19444,height:.43056,italic:.03588,skew:.02778},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.65952,italic:0,skew:0},106:{depth:.19444,height:.65952,italic:.05724,skew:0},107:{depth:0,height:.69444,italic:.03148,skew:0},108:{depth:0,height:.69444,italic:.01968,skew:.08334},109:{depth:0,height:.43056,italic:0,skew:0},110:{depth:0,height:.43056,italic:0,skew:0},111:{depth:0,height:.43056,italic:0,skew:.05556},112:{depth:.19444,height:.43056,italic:0,skew:.08334},113:{depth:.19444,height:.43056,italic:.03588,skew:.08334},114:{depth:0,height:.43056,italic:.02778,skew:.05556},115:{depth:0,height:.43056,italic:0,skew:.05556},116:{depth:0,height:.61508,italic:0,skew:.08334},117:{depth:0,height:.43056,italic:0,skew:.02778},118:{depth:0,height:.43056,italic:.03588,skew:.02778},119:{depth:0,height:.43056,italic:.02691,skew:.08334},120:{depth:0,height:.43056,italic:0,skew:.02778},121:{depth:.19444,height:.43056,italic:.03588,skew:.05556},122:{depth:0,height:.43056,italic:.04398,skew:.05556},915:{depth:0,height:.68333,italic:.13889,skew:.08334},916:{depth:0,height:.68333,italic:0,skew:.16667},920:{depth:0,height:.68333,italic:.02778,skew:.08334},923:{depth:0,height:.68333,italic:0,skew:.16667},926:{depth:0,height:.68333,italic:.07569,skew:.08334},928:{depth:0,height:.68333,italic:.08125,skew:.05556},931:{depth:0,height:.68333,italic:.05764,skew:.08334},933:{depth:0,height:.68333,italic:.13889,skew:.05556},934:{depth:0,height:.68333,italic:0,skew:.08334},936:{depth:0,height:.68333,italic:.11,skew:.05556},937:{depth:0,height:.68333,italic:.05017,skew:.08334},945:{depth:0,height:.43056,italic:.0037,skew:.02778},946:{depth:.19444,height:.69444,italic:.05278,skew:.08334},947:{depth:.19444,height:.43056,italic:.05556,skew:0},948:{depth:0,height:.69444,italic:.03785,skew:.05556},949:{depth:0,height:.43056,italic:0,skew:.08334},950:{depth:.19444,height:.69444,italic:.07378,skew:.08334},951:{depth:.19444,height:.43056,italic:.03588,skew:.05556},952:{depth:0,height:.69444,italic:.02778,skew:.08334},953:{depth:0,height:.43056,italic:0,skew:.05556},954:{depth:0,height:.43056,italic:0,skew:0},955:{depth:0,height:.69444,italic:0,skew:0},956:{depth:.19444,height:.43056,italic:0,skew:.02778},957:{depth:0,height:.43056,italic:.06366,skew:.02778},958:{depth:.19444,height:.69444,italic:.04601,skew:.11111},959:{depth:0,height:.43056,italic:0,skew:.05556},960:{depth:0,height:.43056,italic:.03588,skew:0},961:{depth:.19444,height:.43056,italic:0,skew:.08334},962:{depth:.09722,height:.43056,italic:.07986,skew:.08334},963:{depth:0,height:.43056,italic:.03588,skew:0},964:{depth:0,height:.43056,italic:.1132,skew:.02778},965:{depth:0,height:.43056,italic:.03588,skew:.02778},966:{depth:.19444,height:.43056,italic:0,skew:.08334},967:{depth:.19444,height:.43056,italic:0,skew:.05556},968:{depth:.19444,height:.69444,italic:.03588,skew:.11111},969:{depth:0,height:.43056,italic:.03588,skew:0},977:{depth:0,height:.69444,italic:0,skew:.08334},981:{depth:.19444,height:.69444,italic:0,skew:.08334},982:{depth:0,height:.43056,italic:.02778,skew:0},1009:{depth:.19444,height:.43056,italic:0,skew:.08334},1013:{depth:0,height:.43056,italic:0,skew:.05556}},"SansSerif-Regular":{33:{depth:0,height:.69444,italic:0,skew:0},34:{depth:0,height:.69444,italic:0,skew:0},35:{depth:.19444,height:.69444,italic:0,skew:0},36:{depth:.05556,height:.75,italic:0,skew:0},37:{depth:.05556,height:.75,italic:0,skew:0},38:{depth:0,height:.69444,italic:0,skew:0},39:{depth:0,height:.69444,italic:0,skew:0},40:{depth:.25,height:.75,italic:0,skew:0},41:{depth:.25,height:.75,italic:0,skew:0},42:{depth:0,height:.75,italic:0,skew:0},43:{depth:.08333,height:.58333,italic:0,skew:0},44:{depth:.125,height:.08333,italic:0,skew:0},45:{depth:0,height:.44444,italic:0,skew:0},46:{depth:0,height:.08333,italic:0,skew:0},47:{depth:.25,height:.75,italic:0,skew:0},48:{depth:0,height:.65556,italic:0,skew:0},49:{depth:0,height:.65556,italic:0,skew:0},50:{depth:0,height:.65556,italic:0,skew:0},51:{depth:0,height:.65556,italic:0,skew:0},52:{depth:0,height:.65556,italic:0,skew:0},53:{depth:0,height:.65556,italic:0,skew:0},54:{depth:0,height:.65556,italic:0,skew:0},55:{depth:0,height:.65556,italic:0,skew:0},56:{depth:0,height:.65556,italic:0,skew:0},57:{depth:0,height:.65556,italic:0,skew:0},58:{depth:0,height:.44444,italic:0,skew:0},59:{depth:.125,height:.44444,italic:0,skew:0},61:{depth:-.13,height:.37,italic:0,skew:0},63:{depth:0,height:.69444,italic:0,skew:0},64:{depth:0,height:.69444,italic:0,skew:0},65:{depth:0,height:.69444,italic:0,skew:0},66:{depth:0,height:.69444,italic:0,skew:0},67:{depth:0,height:.69444,italic:0,skew:0},68:{depth:0,height:.69444,italic:0,skew:0},69:{depth:0,height:.69444,italic:0,skew:0},70:{depth:0,height:.69444,italic:0,skew:0},71:{depth:0,height:.69444,italic:0,skew:0},72:{depth:0,height:.69444,italic:0,skew:0},73:{depth:0,height:.69444,italic:0,skew:0},74:{depth:0,height:.69444,italic:0,skew:0},75:{depth:0,height:.69444,italic:0,skew:0},76:{depth:0,height:.69444,italic:0,skew:0},77:{depth:0,height:.69444,italic:0,skew:0},78:{depth:0,height:.69444,italic:0,skew:0},79:{depth:0,height:.69444,italic:0,skew:0},80:{depth:0,height:.69444,italic:0,skew:0},81:{depth:.125,height:.69444,italic:0,skew:0},82:{depth:0,height:.69444,italic:0,skew:0},83:{depth:0,height:.69444,italic:0,skew:0},84:{depth:0,height:.69444,italic:0,skew:0},85:{depth:0,height:.69444,italic:0,skew:0},86:{depth:0,height:.69444,italic:.01389,skew:0},87:{depth:0,height:.69444,italic:.01389,skew:0},88:{depth:0,height:.69444,italic:0,skew:0},89:{depth:0,height:.69444,italic:.025,skew:0},90:{depth:0,height:.69444,italic:0,skew:0},91:{depth:.25,height:.75,italic:0,skew:0},93:{depth:.25,height:.75,italic:0,skew:0},94:{depth:0,height:.69444,italic:0,skew:0},95:{depth:.35,height:.09444,italic:.02778,skew:0},97:{depth:0,height:.44444,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.44444,italic:0,skew:0},100:{depth:0,height:.69444,italic:0,skew:0},101:{depth:0,height:.44444,italic:0,skew:0},102:{depth:0,height:.69444,italic:.06944,skew:0},103:{depth:.19444,height:.44444,italic:.01389,skew:0},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.67937,italic:0,skew:0},106:{depth:.19444,height:.67937,italic:0,skew:0},107:{depth:0,height:.69444,italic:0,skew:0},108:{depth:0,height:.69444,italic:0,skew:0},109:{depth:0,height:.44444,italic:0,skew:0},110:{depth:0,height:.44444,italic:0,skew:0},111:{depth:0,height:.44444,italic:0,skew:0},112:{depth:.19444,height:.44444,italic:0,skew:0},113:{depth:.19444,height:.44444,italic:0,skew:0},114:{depth:0,height:.44444,italic:.01389,skew:0},115:{depth:0,height:.44444,italic:0,skew:0},116:{depth:0,height:.57143,italic:0,skew:0},117:{depth:0,height:.44444,italic:0,skew:0},118:{depth:0,height:.44444,italic:.01389,skew:0},119:{depth:0,height:.44444,italic:.01389,skew:0},120:{depth:0,height:.44444,italic:0,skew:0},121:{depth:.19444,height:.44444,italic:.01389,skew:0},122:{depth:0,height:.44444,italic:0,skew:0},126:{depth:.35,height:.32659,italic:0,skew:0},305:{depth:0,height:.44444,italic:0,skew:0},567:{depth:.19444,height:.44444,italic:0,skew:0},768:{depth:0,height:.69444,italic:0,skew:0},769:{depth:0,height:.69444,italic:0,skew:0},770:{depth:0,height:.69444,italic:0,skew:0},771:{depth:0,height:.67659,italic:0,skew:0},772:{depth:0,height:.60889,italic:0,skew:0},774:{depth:0,height:.69444,italic:0,skew:0},775:{depth:0,height:.67937,italic:0,skew:0},776:{depth:0,height:.67937,italic:0,skew:0},778:{depth:0,height:.69444,italic:0,skew:0},779:{depth:0,height:.69444,italic:0,skew:0},780:{depth:0,height:.63194,italic:0,skew:0},915:{depth:0,height:.69444,italic:0,skew:0},916:{depth:0,height:.69444,italic:0,skew:0},920:{depth:0,height:.69444,italic:0,skew:0},923:{depth:0,height:.69444,italic:0,skew:0},926:{depth:0,height:.69444,italic:0,skew:0},928:{depth:0,height:.69444,italic:0,skew:0},931:{depth:0,height:.69444,italic:0,skew:0},933:{depth:0,height:.69444,italic:0,skew:0},934:{depth:0,height:.69444,italic:0,skew:0},936:{depth:0,height:.69444,italic:0,skew:0},937:{depth:0,height:.69444,italic:0,skew:0},8211:{depth:0,height:.44444,italic:.02778,skew:0},8212:{depth:0,height:.44444,italic:.02778,skew:0},8216:{depth:0,height:.69444,italic:0,skew:0},8217:{depth:0,height:.69444,italic:0,skew:0},8220:{depth:0,height:.69444,italic:0,skew:0},8221:{depth:0,height:.69444,italic:0,skew:0}},"Script-Regular":{65:{depth:0,height:.7,italic:.22925,skew:0},66:{depth:0,height:.7,italic:.04087,skew:0},67:{depth:0,height:.7,italic:.1689,skew:0},68:{depth:0,height:.7,italic:.09371,skew:0},69:{depth:0,height:.7,italic:.18583,skew:0},70:{depth:0,height:.7,italic:.13634,skew:0},71:{depth:0,height:.7,italic:.17322,skew:0},72:{depth:0,height:.7,italic:.29694,skew:0},73:{depth:0,height:.7,italic:.19189,skew:0},74:{depth:.27778,height:.7,italic:.19189,skew:0},75:{depth:0,height:.7,italic:.31259,skew:0},76:{depth:0,height:.7,italic:.19189,skew:0},77:{depth:0,height:.7,italic:.15981,skew:0},78:{depth:0,height:.7,italic:.3525,skew:0},79:{depth:0,height:.7,italic:.08078,skew:0},80:{depth:0,height:.7,italic:.08078,skew:0},81:{depth:0,height:.7,italic:.03305,skew:0},82:{depth:0,height:.7,italic:.06259,skew:0},83:{depth:0,height:.7,italic:.19189,skew:0},84:{depth:0,height:.7,italic:.29087,skew:0},85:{depth:0,height:.7,italic:.25815,skew:0},86:{depth:0,height:.7,italic:.27523,skew:0},87:{depth:0,height:.7,italic:.27523,skew:0},88:{depth:0,height:.7,italic:.26006,skew:0},89:{depth:0,height:.7,italic:.2939,skew:0},90:{depth:0,height:.7,italic:.24037,skew:0}},"Size1-Regular":{40:{depth:.35001,height:.85,italic:0,skew:0},41:{depth:.35001,height:.85,italic:0,skew:0},47:{depth:.35001,height:.85,italic:0,skew:0},91:{depth:.35001,height:.85,italic:0,skew:0},92:{depth:.35001,height:.85,italic:0,skew:0},93:{depth:.35001,height:.85,italic:0,skew:0},123:{depth:.35001,height:.85,italic:0,skew:0},125:{depth:.35001,height:.85,italic:0,skew:0},710:{depth:0,height:.72222,italic:0,skew:0},732:{depth:0,height:.72222,italic:0,skew:0},770:{depth:0,height:.72222,italic:0,skew:0},771:{depth:0,height:.72222,italic:0,skew:0},8214:{depth:-99e-5,height:.601,italic:0,skew:0},8593:{depth:1e-5,height:.6,italic:0,skew:0},8595:{depth:1e-5,height:.6,italic:0,skew:0},8657:{depth:1e-5,height:.6,italic:0,skew:0},8659:{depth:1e-5,height:.6,italic:0,skew:0},8719:{depth:.25001,height:.75,italic:0,skew:0},8720:{depth:.25001,height:.75,italic:0,skew:0},8721:{depth:.25001,height:.75,italic:0,skew:0},8730:{depth:.35001,height:.85,italic:0,skew:0},8739:{depth:-.00599,height:.606,italic:0,skew:0},8741:{depth:-.00599,height:.606,italic:0,skew:0},8747:{depth:.30612,height:.805,italic:.19445,skew:0},8748:{depth:.306,height:.805,italic:.19445,skew:0},8749:{depth:.306,height:.805,italic:.19445,skew:0},8750:{depth:.30612,height:.805,italic:.19445,skew:0},8896:{depth:.25001,height:.75,italic:0,skew:0},8897:{depth:.25001,height:.75,italic:0,skew:0},8898:{depth:.25001,height:.75,italic:0,skew:0},8899:{depth:.25001,height:.75,italic:0,skew:0},8968:{depth:.35001,height:.85,italic:0,skew:0},8969:{depth:.35001,height:.85,italic:0,skew:0},8970:{depth:.35001,height:.85,italic:0,skew:0},8971:{depth:.35001,height:.85,italic:0,skew:0},9168:{depth:-99e-5,height:.601,italic:0,skew:0},10216:{depth:.35001,height:.85,italic:0,skew:0},10217:{depth:.35001,height:.85,italic:0,skew:0},10752:{depth:.25001,height:.75,italic:0,skew:0},10753:{depth:.25001,height:.75,italic:0,skew:0},10754:{depth:.25001,height:.75,italic:0,skew:0},10756:{depth:.25001,height:.75,italic:0,skew:0},10758:{depth:.25001,height:.75,italic:0,skew:0}},"Size2-Regular":{40:{depth:.65002,height:1.15,italic:0,skew:0},41:{depth:.65002,height:1.15,italic:0,skew:0},47:{depth:.65002,height:1.15,italic:0,skew:0},91:{depth:.65002,height:1.15,italic:0,skew:0},92:{depth:.65002,height:1.15,italic:0,skew:0},93:{depth:.65002,height:1.15,italic:0,skew:0},123:{depth:.65002,height:1.15,italic:0,skew:0},125:{depth:.65002,height:1.15,italic:0,skew:0},710:{depth:0,height:.75,italic:0,skew:0},732:{depth:0,height:.75,italic:0,skew:0},770:{depth:0,height:.75,italic:0,skew:0},771:{depth:0,height:.75,italic:0,skew:0},8719:{depth:.55001,height:1.05,italic:0,skew:0},8720:{depth:.55001,height:1.05,italic:0,skew:0},8721:{depth:.55001,height:1.05,italic:0,skew:0},8730:{depth:.65002,height:1.15,italic:0,skew:0},8747:{depth:.86225,height:1.36,italic:.44445,skew:0},8748:{depth:.862,height:1.36,italic:.44445,skew:0},8749:{depth:.862,height:1.36,italic:.44445,skew:0},8750:{depth:.86225,height:1.36,italic:.44445,skew:0},8896:{depth:.55001,height:1.05,italic:0,skew:0},8897:{depth:.55001,height:1.05,italic:0,skew:0},8898:{depth:.55001,height:1.05,italic:0,skew:0},8899:{depth:.55001,height:1.05,italic:0,skew:0},8968:{depth:.65002,height:1.15,italic:0,skew:0},8969:{depth:.65002,height:1.15,italic:0,skew:0},8970:{depth:.65002,height:1.15,italic:0,skew:0},8971:{depth:.65002,height:1.15,italic:0,skew:0},10216:{depth:.65002,height:1.15,italic:0,skew:0},10217:{depth:.65002,height:1.15,italic:0,skew:0},10752:{depth:.55001,height:1.05,italic:0,skew:0},10753:{depth:.55001,height:1.05,italic:0,skew:0},10754:{depth:.55001,height:1.05,italic:0,skew:0},10756:{depth:.55001,height:1.05,italic:0,skew:0},10758:{depth:.55001,height:1.05,italic:0,skew:0}},"Size3-Regular":{40:{depth:.95003,height:1.45,italic:0,skew:0},41:{depth:.95003,height:1.45,italic:0,skew:0},47:{depth:.95003,height:1.45,italic:0,skew:0},91:{depth:.95003,height:1.45,italic:0,skew:0},92:{depth:.95003,height:1.45,italic:0,skew:0},93:{depth:.95003,height:1.45,italic:0,skew:0},123:{depth:.95003,height:1.45,italic:0,skew:0},125:{depth:.95003,height:1.45,italic:0,skew:0},710:{depth:0,height:.75,italic:0,skew:0},732:{depth:0,height:.75,italic:0,skew:0},770:{depth:0,height:.75,italic:0,skew:0},771:{depth:0,height:.75,italic:0,skew:0},8730:{depth:.95003,height:1.45,italic:0,skew:0},8968:{depth:.95003,height:1.45,italic:0,skew:0},8969:{depth:.95003,height:1.45,italic:0,skew:0},8970:{depth:.95003,height:1.45,italic:0,skew:0},8971:{depth:.95003,height:1.45,italic:0,skew:0},10216:{depth:.95003,height:1.45,italic:0,skew:0},10217:{depth:.95003,height:1.45,italic:0,skew:0}},"Size4-Regular":{40:{depth:1.25003,height:1.75,italic:0,skew:0},41:{depth:1.25003,height:1.75,italic:0,skew:0},47:{depth:1.25003,height:1.75,italic:0,skew:0},91:{depth:1.25003,height:1.75,italic:0,skew:0},92:{depth:1.25003,height:1.75,italic:0,skew:0},93:{depth:1.25003,height:1.75,italic:0,skew:0},123:{depth:1.25003,height:1.75,italic:0,skew:0},125:{depth:1.25003,height:1.75,italic:0,skew:0},710:{depth:0,height:.825,italic:0,skew:0},732:{depth:0,height:.825,italic:0,skew:0},770:{depth:0,height:.825,italic:0,skew:0},771:{depth:0,height:.825,italic:0,skew:0},8730:{depth:1.25003,height:1.75,italic:0,skew:0},8968:{depth:1.25003,height:1.75,italic:0,skew:0},8969:{depth:1.25003,height:1.75,italic:0,skew:0},8970:{depth:1.25003,height:1.75,italic:0,skew:0},8971:{depth:1.25003,height:1.75,italic:0,skew:0},9115:{depth:.64502,height:1.155,italic:0,skew:0},9116:{depth:1e-5,height:.6,italic:0,skew:0},9117:{depth:.64502,height:1.155,italic:0,skew:0},9118:{depth:.64502,height:1.155,italic:0,skew:0},9119:{depth:1e-5,height:.6,italic:0,skew:0},9120:{depth:.64502,height:1.155,italic:0,skew:0},9121:{depth:.64502,height:1.155,italic:0,skew:0},9122:{depth:-99e-5,height:.601,italic:0,skew:0},9123:{depth:.64502,height:1.155,italic:0,skew:0},9124:{depth:.64502,height:1.155,italic:0,skew:0},9125:{depth:-99e-5,height:.601,italic:0,
skew:0},9126:{depth:.64502,height:1.155,italic:0,skew:0},9127:{depth:1e-5,height:.9,italic:0,skew:0},9128:{depth:.65002,height:1.15,italic:0,skew:0},9129:{depth:.90001,height:0,italic:0,skew:0},9130:{depth:0,height:.3,italic:0,skew:0},9131:{depth:1e-5,height:.9,italic:0,skew:0},9132:{depth:.65002,height:1.15,italic:0,skew:0},9133:{depth:.90001,height:0,italic:0,skew:0},9143:{depth:.88502,height:.915,italic:0,skew:0},10216:{depth:1.25003,height:1.75,italic:0,skew:0},10217:{depth:1.25003,height:1.75,italic:0,skew:0},57344:{depth:-.00499,height:.605,italic:0,skew:0},57345:{depth:-.00499,height:.605,italic:0,skew:0},57680:{depth:0,height:.12,italic:0,skew:0},57681:{depth:0,height:.12,italic:0,skew:0},57682:{depth:0,height:.12,italic:0,skew:0},57683:{depth:0,height:.12,italic:0,skew:0}},"Typewriter-Regular":{33:{depth:0,height:.61111,italic:0,skew:0},34:{depth:0,height:.61111,italic:0,skew:0},35:{depth:0,height:.61111,italic:0,skew:0},36:{depth:.08333,height:.69444,italic:0,skew:0},37:{depth:.08333,height:.69444,italic:0,skew:0},38:{depth:0,height:.61111,italic:0,skew:0},39:{depth:0,height:.61111,italic:0,skew:0},40:{depth:.08333,height:.69444,italic:0,skew:0},41:{depth:.08333,height:.69444,italic:0,skew:0},42:{depth:0,height:.52083,italic:0,skew:0},43:{depth:-.08056,height:.53055,italic:0,skew:0},44:{depth:.13889,height:.125,italic:0,skew:0},45:{depth:-.08056,height:.53055,italic:0,skew:0},46:{depth:0,height:.125,italic:0,skew:0},47:{depth:.08333,height:.69444,italic:0,skew:0},48:{depth:0,height:.61111,italic:0,skew:0},49:{depth:0,height:.61111,italic:0,skew:0},50:{depth:0,height:.61111,italic:0,skew:0},51:{depth:0,height:.61111,italic:0,skew:0},52:{depth:0,height:.61111,italic:0,skew:0},53:{depth:0,height:.61111,italic:0,skew:0},54:{depth:0,height:.61111,italic:0,skew:0},55:{depth:0,height:.61111,italic:0,skew:0},56:{depth:0,height:.61111,italic:0,skew:0},57:{depth:0,height:.61111,italic:0,skew:0},58:{depth:0,height:.43056,italic:0,skew:0},59:{depth:.13889,height:.43056,italic:0,skew:0},60:{depth:-.05556,height:.55556,italic:0,skew:0},61:{depth:-.19549,height:.41562,italic:0,skew:0},62:{depth:-.05556,height:.55556,italic:0,skew:0},63:{depth:0,height:.61111,italic:0,skew:0},64:{depth:0,height:.61111,italic:0,skew:0},65:{depth:0,height:.61111,italic:0,skew:0},66:{depth:0,height:.61111,italic:0,skew:0},67:{depth:0,height:.61111,italic:0,skew:0},68:{depth:0,height:.61111,italic:0,skew:0},69:{depth:0,height:.61111,italic:0,skew:0},70:{depth:0,height:.61111,italic:0,skew:0},71:{depth:0,height:.61111,italic:0,skew:0},72:{depth:0,height:.61111,italic:0,skew:0},73:{depth:0,height:.61111,italic:0,skew:0},74:{depth:0,height:.61111,italic:0,skew:0},75:{depth:0,height:.61111,italic:0,skew:0},76:{depth:0,height:.61111,italic:0,skew:0},77:{depth:0,height:.61111,italic:0,skew:0},78:{depth:0,height:.61111,italic:0,skew:0},79:{depth:0,height:.61111,italic:0,skew:0},80:{depth:0,height:.61111,italic:0,skew:0},81:{depth:.13889,height:.61111,italic:0,skew:0},82:{depth:0,height:.61111,italic:0,skew:0},83:{depth:0,height:.61111,italic:0,skew:0},84:{depth:0,height:.61111,italic:0,skew:0},85:{depth:0,height:.61111,italic:0,skew:0},86:{depth:0,height:.61111,italic:0,skew:0},87:{depth:0,height:.61111,italic:0,skew:0},88:{depth:0,height:.61111,italic:0,skew:0},89:{depth:0,height:.61111,italic:0,skew:0},90:{depth:0,height:.61111,italic:0,skew:0},91:{depth:.08333,height:.69444,italic:0,skew:0},92:{depth:.08333,height:.69444,italic:0,skew:0},93:{depth:.08333,height:.69444,italic:0,skew:0},94:{depth:0,height:.61111,italic:0,skew:0},95:{depth:.09514,height:0,italic:0,skew:0},96:{depth:0,height:.61111,italic:0,skew:0},97:{depth:0,height:.43056,italic:0,skew:0},98:{depth:0,height:.61111,italic:0,skew:0},99:{depth:0,height:.43056,italic:0,skew:0},100:{depth:0,height:.61111,italic:0,skew:0},101:{depth:0,height:.43056,italic:0,skew:0},102:{depth:0,height:.61111,italic:0,skew:0},103:{depth:.22222,height:.43056,italic:0,skew:0},104:{depth:0,height:.61111,italic:0,skew:0},105:{depth:0,height:.61111,italic:0,skew:0},106:{depth:.22222,height:.61111,italic:0,skew:0},107:{depth:0,height:.61111,italic:0,skew:0},108:{depth:0,height:.61111,italic:0,skew:0},109:{depth:0,height:.43056,italic:0,skew:0},110:{depth:0,height:.43056,italic:0,skew:0},111:{depth:0,height:.43056,italic:0,skew:0},112:{depth:.22222,height:.43056,italic:0,skew:0},113:{depth:.22222,height:.43056,italic:0,skew:0},114:{depth:0,height:.43056,italic:0,skew:0},115:{depth:0,height:.43056,italic:0,skew:0},116:{depth:0,height:.55358,italic:0,skew:0},117:{depth:0,height:.43056,italic:0,skew:0},118:{depth:0,height:.43056,italic:0,skew:0},119:{depth:0,height:.43056,italic:0,skew:0},120:{depth:0,height:.43056,italic:0,skew:0},121:{depth:.22222,height:.43056,italic:0,skew:0},122:{depth:0,height:.43056,italic:0,skew:0},123:{depth:.08333,height:.69444,italic:0,skew:0},124:{depth:.08333,height:.69444,italic:0,skew:0},125:{depth:.08333,height:.69444,italic:0,skew:0},126:{depth:0,height:.61111,italic:0,skew:0},127:{depth:0,height:.61111,italic:0,skew:0},305:{depth:0,height:.43056,italic:0,skew:0},567:{depth:.22222,height:.43056,italic:0,skew:0},768:{depth:0,height:.61111,italic:0,skew:0},769:{depth:0,height:.61111,italic:0,skew:0},770:{depth:0,height:.61111,italic:0,skew:0},771:{depth:0,height:.61111,italic:0,skew:0},772:{depth:0,height:.56555,italic:0,skew:0},774:{depth:0,height:.61111,italic:0,skew:0},776:{depth:0,height:.61111,italic:0,skew:0},778:{depth:0,height:.61111,italic:0,skew:0},780:{depth:0,height:.56597,italic:0,skew:0},915:{depth:0,height:.61111,italic:0,skew:0},916:{depth:0,height:.61111,italic:0,skew:0},920:{depth:0,height:.61111,italic:0,skew:0},923:{depth:0,height:.61111,italic:0,skew:0},926:{depth:0,height:.61111,italic:0,skew:0},928:{depth:0,height:.61111,italic:0,skew:0},931:{depth:0,height:.61111,italic:0,skew:0},933:{depth:0,height:.61111,italic:0,skew:0},934:{depth:0,height:.61111,italic:0,skew:0},936:{depth:0,height:.61111,italic:0,skew:0},937:{depth:0,height:.61111,italic:0,skew:0},2018:{depth:0,height:.61111,italic:0,skew:0},2019:{depth:0,height:.61111,italic:0,skew:0},8242:{depth:0,height:.61111,italic:0,skew:0}}}},{}],18:[function(e,t,i){var h=e("./utils");var a=e("./ParseError");var r={"\\sqrt":{numArgs:1,numOptionalArgs:1,handler:function(e,t,i,h){return{type:"sqrt",body:i,index:t}}},"\\text":{numArgs:1,argTypes:["text"],greediness:2,handler:function(e,t){var i;if(t.type==="ordgroup"){i=t.value}else{i=[t]}return{type:"text",body:i}}},"\\color":{numArgs:2,allowedInText:true,greediness:3,argTypes:["color","original"],handler:function(e,t,i){var h;if(i.type==="ordgroup"){h=i.value}else{h=[i]}return{type:"color",color:t.value,value:h}}},"\\overline":{numArgs:1,handler:function(e,t){return{type:"overline",body:t}}},"\\rule":{numArgs:2,numOptionalArgs:1,argTypes:["size","size","size"],handler:function(e,t,i,h){return{type:"rule",shift:t&&t.value,width:i.value,height:h.value}}},"\\KaTeX":{numArgs:0,handler:function(e){return{type:"katex"}}},"\\phantom":{numArgs:1,handler:function(e,t){var i;if(t.type==="ordgroup"){i=t.value}else{i=[t]}return{type:"phantom",value:i}}}};var l={"\\bigl":{type:"open",size:1},"\\Bigl":{type:"open",size:2},"\\biggl":{type:"open",size:3},"\\Biggl":{type:"open",size:4},"\\bigr":{type:"close",size:1},"\\Bigr":{type:"close",size:2},"\\biggr":{type:"close",size:3},"\\Biggr":{type:"close",size:4},"\\bigm":{type:"rel",size:1},"\\Bigm":{type:"rel",size:2},"\\biggm":{type:"rel",size:3},"\\Biggm":{type:"rel",size:4},"\\big":{type:"textord",size:1},"\\Big":{type:"textord",size:2},"\\bigg":{type:"textord",size:3},"\\Bigg":{type:"textord",size:4}};var s=["(",")","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","\\lceil","\\rceil","<",">","\\langle","\\rangle","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","\\lmoustache","\\rmoustache","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."];var p={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak"};var c=[{funcs:["\\blue","\\orange","\\pink","\\red","\\green","\\gray","\\purple","\\blueA","\\blueB","\\blueC","\\blueD","\\blueE","\\tealA","\\tealB","\\tealC","\\tealD","\\tealE","\\greenA","\\greenB","\\greenC","\\greenD","\\greenE","\\goldA","\\goldB","\\goldC","\\goldD","\\goldE","\\redA","\\redB","\\redC","\\redD","\\redE","\\maroonA","\\maroonB","\\maroonC","\\maroonD","\\maroonE","\\purpleA","\\purpleB","\\purpleC","\\purpleD","\\purpleE","\\mintA","\\mintB","\\mintC","\\grayA","\\grayB","\\grayC","\\grayD","\\grayE","\\grayF","\\grayG","\\grayH","\\grayI","\\kaBlue","\\kaGreen"],data:{numArgs:1,allowedInText:true,greediness:3,handler:function(e,t){var i;if(t.type==="ordgroup"){i=t.value}else{i=[t]}return{type:"color",color:"katex-"+e.slice(1),value:i}}}},{funcs:["\\arcsin","\\arccos","\\arctan","\\arg","\\cos","\\cosh","\\cot","\\coth","\\csc","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\tan","\\tanh"],data:{numArgs:0,handler:function(e){return{type:"op",limits:false,symbol:false,body:e}}}},{funcs:["\\det","\\gcd","\\inf","\\lim","\\liminf","\\limsup","\\max","\\min","\\Pr","\\sup"],data:{numArgs:0,handler:function(e){return{type:"op",limits:true,symbol:false,body:e}}}},{funcs:["\\int","\\iint","\\iiint","\\oint"],data:{numArgs:0,handler:function(e){return{type:"op",limits:false,symbol:true,body:e}}}},{funcs:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint"],data:{numArgs:0,handler:function(e){return{type:"op",limits:true,symbol:true,body:e}}}},{funcs:["\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom"],data:{numArgs:2,greediness:2,handler:function(e,t,i){var h;var a=null;var r=null;var l="auto";switch(e){case"\\dfrac":case"\\frac":case"\\tfrac":h=true;break;case"\\dbinom":case"\\binom":case"\\tbinom":h=false;a="(";r=")";break;default:throw new Error("Unrecognized genfrac command")}switch(e){case"\\dfrac":case"\\dbinom":l="display";break;case"\\tfrac":case"\\tbinom":l="text";break}return{type:"genfrac",numer:t,denom:i,hasBarLine:h,leftDelim:a,rightDelim:r,size:l}}}},{funcs:["\\llap","\\rlap"],data:{numArgs:1,allowedInText:true,handler:function(e,t){return{type:e.slice(1),body:t}}}},{funcs:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg","\\left","\\right"],data:{numArgs:1,handler:function(e,t,i){if(!h.contains(s,t.value)){throw new a("Invalid delimiter: '"+t.value+"' after '"+e+"'",this.lexer,i[1])}if(e==="\\left"||e==="\\right"){return{type:"leftright",value:t.value}}else{return{type:"delimsizing",size:l[e].size,delimType:l[e].type,value:t.value}}}}},{funcs:["\\tiny","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],data:{numArgs:0}},{funcs:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],data:{numArgs:0}},{funcs:["\\mathrm","\\mathit","\\mathbf","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],data:{numArgs:1,handler:function(e,t){if(e in p){e=p[e]}return{type:"font",font:e.slice(1),body:t}}}},{funcs:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot"],data:{numArgs:1,handler:function(e,t){return{type:"accent",accent:e,base:t}}}},{funcs:["\\over","\\choose"],data:{numArgs:0,handler:function(e){var t;switch(e){case"\\over":t="\\frac";break;case"\\choose":t="\\binom";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",replaceWith:t}}}},{funcs:["\\\\","\\cr"],data:{numArgs:0,numOptionalArgs:1,argTypes:["size"],handler:function(e,t){return{type:"cr",size:t}}}},{funcs:["\\begin","\\end"],data:{numArgs:1,argTypes:["text"],handler:function(e,t,i){if(t.type!=="ordgroup"){throw new a("Invalid environment name",this.lexer,i[1])}var h="";for(var r=0;r<t.value.length;++r){h+=t.value[r].value}return{type:"environment",name:h,namepos:i[1]}}}}];var n=function(e,t){for(var i=0;i<e.length;i++){r[e[i]]=t}};for(var o=0;o<c.length;o++){n(c[o].funcs,c[o].data)}for(var g in r){if(r.hasOwnProperty(g)){var d=r[g];r[g]={numArgs:d.numArgs,argTypes:d.argTypes,greediness:d.greediness===undefined?1:d.greediness,allowedInText:d.allowedInText?d.allowedInText:false,numOptionalArgs:d.numOptionalArgs===undefined?0:d.numOptionalArgs,handler:d.handler}}}t.exports={funcs:r}},{"./ParseError":5,"./utils":23}],19:[function(e,t,i){var h=e("./utils");function a(e,t){this.type=e;this.attributes={};this.children=t||[]}a.prototype.setAttribute=function(e,t){this.attributes[e]=t};a.prototype.toNode=function(){var e=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var t in this.attributes){if(Object.prototype.hasOwnProperty.call(this.attributes,t)){e.setAttribute(t,this.attributes[t])}}for(var i=0;i<this.children.length;i++){e.appendChild(this.children[i].toNode())}return e};a.prototype.toMarkup=function(){var e="<"+this.type;for(var t in this.attributes){if(Object.prototype.hasOwnProperty.call(this.attributes,t)){e+=" "+t+'="';e+=h.escape(this.attributes[t]);e+='"'}}e+=">";for(var i=0;i<this.children.length;i++){e+=this.children[i].toMarkup()}e+="</"+this.type+">";return e};function r(e){this.text=e}r.prototype.toNode=function(){return document.createTextNode(this.text)};r.prototype.toMarkup=function(){return h.escape(this.text)};t.exports={MathNode:a,TextNode:r}},{"./utils":23}],20:[function(e,t,i){function h(e,t,i){this.type=e;this.value=t;this.mode=i}function a(e,t,i){this.result=e;this.position=t}t.exports={ParseNode:h,ParseResult:a}},{}],21:[function(e,t,i){var h=e("./Parser");var a=function(e,t){var i=new h(e,t);return i.parse()};t.exports=a},{"./Parser":6}],22:[function(e,t,i){var h={math:{"\\equiv":{font:"main",group:"rel",replace:"\u2261"},"\\prec":{font:"main",group:"rel",replace:"\u227a"},"\\succ":{font:"main",group:"rel",replace:"\u227b"},"\\sim":{font:"main",group:"rel",replace:"\u223c"},"\\perp":{font:"main",group:"rel",replace:"\u22a5"},"\\preceq":{font:"main",group:"rel",replace:"\u2aaf"},"\\succeq":{font:"main",group:"rel",replace:"\u2ab0"},"\\simeq":{font:"main",group:"rel",replace:"\u2243"},"\\mid":{font:"main",group:"rel",replace:"\u2223"},"\\ll":{font:"main",group:"rel",replace:"\u226a"},"\\gg":{font:"main",group:"rel",replace:"\u226b"},"\\asymp":{font:"main",group:"rel",replace:"\u224d"},"\\parallel":{font:"main",group:"rel",replace:"\u2225"},"\\bowtie":{font:"main",group:"rel",replace:"\u22c8"},"\\smile":{font:"main",group:"rel",replace:"\u2323"},"\\sqsubseteq":{font:"main",group:"rel",replace:"\u2291"},"\\sqsupseteq":{font:"main",group:"rel",replace:"\u2292"},"\\doteq":{font:"main",group:"rel",replace:"\u2250"},"\\frown":{font:"main",group:"rel",replace:"\u2322"},"\\ni":{font:"main",group:"rel",replace:"\u220b"},"\\propto":{font:"main",group:"rel",replace:"\u221d"},"\\vdash":{font:"main",group:"rel",replace:"\u22a2"},"\\dashv":{font:"main",group:"rel",replace:"\u22a3"},"\\owns":{font:"main",group:"rel",replace:"\u220b"},"\\ldotp":{font:"main",group:"punct",replace:"."},"\\cdotp":{font:"main",group:"punct",replace:"\u22c5"},"\\#":{font:"main",group:"textord",replace:"#"},"\\&":{font:"main",group:"textord",replace:"&"},"\\aleph":{font:"main",group:"textord",replace:"\u2135"},"\\forall":{font:"main",group:"textord",replace:"\u2200"},"\\hbar":{font:"main",group:"textord",replace:"\u210f"},"\\exists":{font:"main",group:"textord",replace:"\u2203"},"\\nabla":{font:"main",group:"textord",replace:"\u2207"},"\\flat":{font:"main",group:"textord",replace:"\u266d"},"\\ell":{font:"main",group:"textord",replace:"\u2113"},"\\natural":{font:"main",group:"textord",replace:"\u266e"},"\\clubsuit":{font:"main",group:"textord",replace:"\u2663"},"\\wp":{font:"main",group:"textord",replace:"\u2118"},"\\sharp":{font:"main",group:"textord",replace:"\u266f"},"\\diamondsuit":{font:"main",group:"textord",replace:"\u2662"},"\\Re":{font:"main",group:"textord",replace:"\u211c"},"\\heartsuit":{font:"main",group:"textord",replace:"\u2661"},"\\Im":{font:"main",group:"textord",replace:"\u2111"},"\\spadesuit":{font:"main",group:"textord",replace:"\u2660"},"\\dag":{font:"main",group:"textord",replace:"\u2020"},"\\ddag":{font:"main",group:"textord",replace:"\u2021"},"\\rmoustache":{font:"main",group:"close",replace:"\u23b1"},"\\lmoustache":{font:"main",group:"open",replace:"\u23b0"},"\\rgroup":{font:"main",group:"close",replace:"\u27ef"},"\\lgroup":{font:"main",group:"open",replace:"\u27ee"},"\\mp":{font:"main",group:"bin",replace:"\u2213"},"\\ominus":{font:"main",group:"bin",replace:"\u2296"},"\\uplus":{font:"main",group:"bin",replace:"\u228e"},"\\sqcap":{font:"main",group:"bin",replace:"\u2293"},"\\ast":{font:"main",group:"bin",replace:"\u2217"},"\\sqcup":{font:"main",group:"bin",replace:"\u2294"},"\\bigcirc":{font:"main",group:"bin",replace:"\u25ef"},"\\bullet":{font:"main",group:"bin",replace:"\u2219"},"\\ddagger":{font:"main",group:"bin",replace:"\u2021"},"\\wr":{font:"main",group:"bin",replace:"\u2240"},"\\amalg":{font:"main",group:"bin",replace:"\u2a3f"},"\\longleftarrow":{font:"main",group:"rel",replace:"\u27f5"},"\\Leftarrow":{font:"main",group:"rel",replace:"\u21d0"},"\\Longleftarrow":{font:"main",group:"rel",replace:"\u27f8"},"\\longrightarrow":{font:"main",group:"rel",replace:"\u27f6"},"\\Rightarrow":{font:"main",group:"rel",replace:"\u21d2"},"\\Longrightarrow":{font:"main",group:"rel",replace:"\u27f9"},"\\leftrightarrow":{font:"main",group:"rel",replace:"\u2194"},"\\longleftrightarrow":{font:"main",group:"rel",replace:"\u27f7"},"\\Leftrightarrow":{font:"main",group:"rel",replace:"\u21d4"},"\\Longleftrightarrow":{font:"main",group:"rel",replace:"\u27fa"},"\\mapsto":{font:"main",group:"rel",replace:"\u21a6"},"\\longmapsto":{font:"main",group:"rel",replace:"\u27fc"},"\\nearrow":{font:"main",group:"rel",replace:"\u2197"},"\\hookleftarrow":{font:"main",group:"rel",replace:"\u21a9"},"\\hookrightarrow":{font:"main",group:"rel",replace:"\u21aa"},"\\searrow":{font:"main",group:"rel",replace:"\u2198"},"\\leftharpoonup":{font:"main",group:"rel",replace:"\u21bc"},"\\rightharpoonup":{font:"main",group:"rel",replace:"\u21c0"},"\\swarrow":{font:"main",group:"rel",replace:"\u2199"},"\\leftharpoondown":{font:"main",group:"rel",replace:"\u21bd"},"\\rightharpoondown":{font:"main",group:"rel",replace:"\u21c1"},"\\nwarrow":{font:"main",group:"rel",replace:"\u2196"},"\\rightleftharpoons":{font:"main",group:"rel",replace:"\u21cc"},"\\nless":{font:"ams",group:"rel",replace:"\u226e"},"\\nleqslant":{font:"ams",group:"rel",replace:"\ue010"},"\\nleqq":{font:"ams",group:"rel",replace:"\ue011"},"\\lneq":{font:"ams",group:"rel",replace:"\u2a87"},"\\lneqq":{font:"ams",group:"rel",replace:"\u2268"},"\\lvertneqq":{font:"ams",group:"rel",replace:"\ue00c"},"\\lnsim":{font:"ams",group:"rel",replace:"\u22e6"},"\\lnapprox":{font:"ams",group:"rel",replace:"\u2a89"},"\\nprec":{font:"ams",group:"rel",replace:"\u2280"},"\\npreceq":{font:"ams",group:"rel",replace:"\u22e0"},"\\precnsim":{font:"ams",group:"rel",replace:"\u22e8"},"\\precnapprox":{font:"ams",group:"rel",replace:"\u2ab9"},"\\nsim":{font:"ams",group:"rel",replace:"\u2241"},"\\nshortmid":{font:"ams",group:"rel",replace:"\ue006"},"\\nmid":{font:"ams",group:"rel",replace:"\u2224"},"\\nvdash":{font:"ams",group:"rel",replace:"\u22ac"},"\\nvDash":{font:"ams",group:"rel",replace:"\u22ad"},"\\ntriangleleft":{font:"ams",group:"rel",replace:"\u22ea"},"\\ntrianglelefteq":{font:"ams",group:"rel",replace:"\u22ec"},"\\subsetneq":{font:"ams",group:"rel",replace:"\u228a"},"\\varsubsetneq":{font:"ams",group:"rel",replace:"\ue01a"},"\\subsetneqq":{font:"ams",group:"rel",replace:"\u2acb"},"\\varsubsetneqq":{font:"ams",group:"rel",replace:"\ue017"},"\\ngtr":{font:"ams",group:"rel",replace:"\u226f"},"\\ngeqslant":{font:"ams",group:"rel",replace:"\ue00f"},"\\ngeqq":{font:"ams",group:"rel",replace:"\ue00e"},"\\gneq":{font:"ams",group:"rel",replace:"\u2a88"},"\\gneqq":{font:"ams",group:"rel",replace:"\u2269"},"\\gvertneqq":{font:"ams",group:"rel",replace:"\ue00d"},"\\gnsim":{font:"ams",group:"rel",replace:"\u22e7"},"\\gnapprox":{font:"ams",group:"rel",replace:"\u2a8a"},"\\nsucc":{font:"ams",group:"rel",replace:"\u2281"},"\\nsucceq":{font:"ams",group:"rel",replace:"\u22e1"},"\\succnsim":{font:"ams",group:"rel",replace:"\u22e9"},"\\succnapprox":{font:"ams",group:"rel",replace:"\u2aba"},"\\ncong":{font:"ams",group:"rel",replace:"\u2246"},"\\nshortparallel":{font:"ams",group:"rel",replace:"\ue007"},"\\nparallel":{font:"ams",group:"rel",replace:"\u2226"},"\\nVDash":{font:"ams",group:"rel",replace:"\u22af"},"\\ntriangleright":{font:"ams",group:"rel",replace:"\u22eb"},"\\ntrianglerighteq":{font:"ams",group:"rel",replace:"\u22ed"},"\\nsupseteqq":{font:"ams",group:"rel",replace:"\ue018"},"\\supsetneq":{font:"ams",group:"rel",replace:"\u228b"},"\\varsupsetneq":{font:"ams",group:"rel",replace:"\ue01b"},"\\supsetneqq":{font:"ams",group:"rel",replace:"\u2acc"},"\\varsupsetneqq":{font:"ams",group:"rel",replace:"\ue019"},"\\nVdash":{font:"ams",group:"rel",replace:"\u22ae"},"\\precneqq":{font:"ams",group:"rel",replace:"\u2ab5"},"\\succneqq":{font:"ams",group:"rel",replace:"\u2ab6"},"\\nsubseteqq":{font:"ams",group:"rel",replace:"\ue016"},"\\unlhd":{font:"ams",group:"bin",replace:"\u22b4"},"\\unrhd":{font:"ams",group:"bin",replace:"\u22b5"},"\\nleftarrow":{font:"ams",group:"rel",replace:"\u219a"},"\\nrightarrow":{font:"ams",group:"rel",replace:"\u219b"},"\\nLeftarrow":{font:"ams",group:"rel",replace:"\u21cd"},"\\nRightarrow":{font:"ams",group:"rel",replace:"\u21cf"},"\\nleftrightarrow":{font:"ams",group:"rel",replace:"\u21ae"},"\\nLeftrightarrow":{font:"ams",group:"rel",replace:"\u21ce"},"\\vartriangle":{font:"ams",group:"rel",replace:"\u25b3"},"\\hslash":{font:"ams",group:"textord",replace:"\u210f"},"\\triangledown":{font:"ams",group:"textord",replace:"\u25bd"},"\\lozenge":{font:"ams",group:"textord",replace:"\u25ca"},"\\circledS":{font:"ams",group:"textord",replace:"\u24c8"},"\\circledR":{font:"ams",group:"textord",replace:"\xae"},"\\measuredangle":{font:"ams",group:"textord",replace:"\u2221"},"\\nexists":{font:"ams",group:"textord",replace:"\u2204"},"\\mho":{font:"ams",group:"textord",replace:"\u2127"},"\\Finv":{font:"ams",group:"textord",replace:"\u2132"},"\\Game":{font:"ams",group:"textord",replace:"\u2141"},"\\Bbbk":{font:"ams",group:"textord",replace:"k"},"\\backprime":{font:"ams",group:"textord",replace:"\u2035"},"\\blacktriangle":{font:"ams",group:"textord",replace:"\u25b2"},"\\blacktriangledown":{font:"ams",group:"textord",replace:"\u25bc"},"\\blacksquare":{font:"ams",group:"textord",replace:"\u25a0"},"\\blacklozenge":{font:"ams",group:"textord",replace:"\u29eb"},"\\bigstar":{font:"ams",group:"textord",replace:"\u2605"},"\\sphericalangle":{font:"ams",group:"textord",replace:"\u2222"},"\\complement":{font:"ams",group:"textord",replace:"\u2201"},"\\eth":{font:"ams",group:"textord",replace:"\xf0"},"\\diagup":{font:"ams",group:"textord",replace:"\u2571"},"\\diagdown":{font:"ams",group:"textord",replace:"\u2572"},"\\square":{font:"ams",group:"textord",replace:"\u25a1"},"\\Box":{font:"ams",group:"textord",replace:"\u25a1"},"\\Diamond":{font:"ams",group:"textord",replace:"\u25ca"},"\\yen":{font:"ams",group:"textord",replace:"\xa5"},"\\checkmark":{font:"ams",group:"textord",replace:"\u2713"},"\\beth":{font:"ams",group:"textord",replace:"\u2136"},"\\daleth":{font:"ams",group:"textord",replace:"\u2138"},"\\gimel":{font:"ams",group:"textord",replace:"\u2137"},"\\digamma":{font:"ams",group:"textord",replace:"\u03dd"},"\\varkappa":{font:"ams",group:"textord",replace:"\u03f0"},"\\ulcorner":{font:"ams",group:"open",replace:"\u250c"},"\\urcorner":{font:"ams",group:"close",replace:"\u2510"},"\\llcorner":{font:"ams",group:"open",replace:"\u2514"},"\\lrcorner":{font:"ams",group:"close",replace:"\u2518"},"\\leqq":{font:"ams",group:"rel",replace:"\u2266"},"\\leqslant":{font:"ams",group:"rel",replace:"\u2a7d"},"\\eqslantless":{font:"ams",group:"rel",replace:"\u2a95"},"\\lesssim":{font:"ams",group:"rel",replace:"\u2272"},"\\lessapprox":{font:"ams",group:"rel",replace:"\u2a85"},"\\approxeq":{font:"ams",group:"rel",replace:"\u224a"},"\\lessdot":{font:"ams",group:"bin",replace:"\u22d6"},"\\lll":{font:"ams",group:"rel",replace:"\u22d8"},"\\lessgtr":{font:"ams",group:"rel",replace:"\u2276"},"\\lesseqgtr":{font:"ams",group:"rel",replace:"\u22da"},"\\lesseqqgtr":{font:"ams",group:"rel",replace:"\u2a8b"},"\\doteqdot":{font:"ams",group:"rel",replace:"\u2251"},"\\risingdotseq":{font:"ams",group:"rel",replace:"\u2253"},"\\fallingdotseq":{font:"ams",group:"rel",replace:"\u2252"},"\\backsim":{font:"ams",group:"rel",replace:"\u223d"},"\\backsimeq":{font:"ams",group:"rel",replace:"\u22cd"},"\\subseteqq":{font:"ams",group:"rel",replace:"\u2ac5"},"\\Subset":{font:"ams",group:"rel",replace:"\u22d0"},"\\sqsubset":{font:"ams",group:"rel",replace:"\u228f"},"\\preccurlyeq":{font:"ams",group:"rel",replace:"\u227c"},"\\curlyeqprec":{font:"ams",group:"rel",replace:"\u22de"},"\\precsim":{font:"ams",group:"rel",replace:"\u227e"},"\\precapprox":{font:"ams",group:"rel",replace:"\u2ab7"},"\\vartriangleleft":{font:"ams",group:"rel",replace:"\u22b2"},"\\trianglelefteq":{font:"ams",group:"rel",replace:"\u22b4"},"\\vDash":{font:"ams",group:"rel",replace:"\u22a8"},"\\Vvdash":{font:"ams",group:"rel",replace:"\u22aa"},"\\smallsmile":{font:"ams",group:"rel",replace:"\u2323"},"\\smallfrown":{font:"ams",group:"rel",replace:"\u2322"},"\\bumpeq":{font:"ams",group:"rel",replace:"\u224f"},"\\Bumpeq":{font:"ams",group:"rel",replace:"\u224e"},"\\geqq":{font:"ams",group:"rel",replace:"\u2267"},"\\geqslant":{font:"ams",group:"rel",replace:"\u2a7e"},"\\eqslantgtr":{font:"ams",group:"rel",replace:"\u2a96"},"\\gtrsim":{font:"ams",group:"rel",replace:"\u2273"},"\\gtrapprox":{font:"ams",group:"rel",replace:"\u2a86"},"\\gtrdot":{font:"ams",group:"bin",replace:"\u22d7"},"\\ggg":{font:"ams",group:"rel",replace:"\u22d9"},"\\gtrless":{font:"ams",group:"rel",replace:"\u2277"},"\\gtreqless":{font:"ams",group:"rel",replace:"\u22db"},"\\gtreqqless":{font:"ams",group:"rel",replace:"\u2a8c"},"\\eqcirc":{font:"ams",group:"rel",replace:"\u2256"},"\\circeq":{font:"ams",group:"rel",replace:"\u2257"},"\\triangleq":{font:"ams",group:"rel",replace:"\u225c"},"\\thicksim":{font:"ams",group:"rel",replace:"\u223c"},"\\thickapprox":{font:"ams",group:"rel",replace:"\u2248"},"\\supseteqq":{font:"ams",group:"rel",replace:"\u2ac6"},"\\Supset":{font:"ams",group:"rel",replace:"\u22d1"},"\\sqsupset":{font:"ams",group:"rel",replace:"\u2290"},"\\succcurlyeq":{font:"ams",group:"rel",replace:"\u227d"},"\\curlyeqsucc":{font:"ams",group:"rel",replace:"\u22df"},"\\succsim":{font:"ams",group:"rel",replace:"\u227f"},"\\succapprox":{font:"ams",group:"rel",replace:"\u2ab8"},"\\vartriangleright":{font:"ams",group:"rel",replace:"\u22b3"},"\\trianglerighteq":{font:"ams",group:"rel",replace:"\u22b5"},"\\Vdash":{font:"ams",group:"rel",replace:"\u22a9"},"\\shortmid":{font:"ams",group:"rel",replace:"\u2223"},"\\shortparallel":{font:"ams",group:"rel",replace:"\u2225"},"\\between":{font:"ams",group:"rel",replace:"\u226c"},"\\pitchfork":{font:"ams",group:"rel",replace:"\u22d4"},"\\varpropto":{font:"ams",group:"rel",replace:"\u221d"},"\\blacktriangleleft":{font:"ams",group:"rel",replace:"\u25c0"},"\\therefore":{font:"ams",group:"rel",replace:"\u2234"},"\\backepsilon":{font:"ams",group:"rel",replace:"\u220d"},"\\blacktriangleright":{font:"ams",group:"rel",replace:"\u25b6"},"\\because":{font:"ams",group:"rel",replace:"\u2235"},"\\llless":{font:"ams",group:"rel",replace:"\u22d8"},"\\gggtr":{font:"ams",group:"rel",replace:"\u22d9"},"\\lhd":{font:"ams",group:"bin",replace:"\u22b2"},"\\rhd":{font:"ams",group:"bin",replace:"\u22b3"},"\\eqsim":{font:"ams",group:"rel",replace:"\u2242"},"\\Join":{font:"main",group:"rel",replace:"\u22c8"},"\\Doteq":{font:"ams",group:"rel",replace:"\u2251"},"\\dotplus":{font:"ams",group:"bin",replace:"\u2214"},"\\smallsetminus":{font:"ams",group:"bin",replace:"\u2216"},"\\Cap":{font:"ams",group:"bin",replace:"\u22d2"},"\\Cup":{font:"ams",group:"bin",replace:"\u22d3"},"\\doublebarwedge":{font:"ams",group:"bin",replace:"\u2a5e"},"\\boxminus":{font:"ams",group:"bin",replace:"\u229f"},"\\boxplus":{font:"ams",group:"bin",replace:"\u229e"},"\\divideontimes":{font:"ams",group:"bin",replace:"\u22c7"},"\\ltimes":{font:"ams",group:"bin",replace:"\u22c9"},"\\rtimes":{font:"ams",group:"bin",replace:"\u22ca"},"\\leftthreetimes":{font:"ams",group:"bin",replace:"\u22cb"},"\\rightthreetimes":{font:"ams",group:"bin",replace:"\u22cc"},"\\curlywedge":{font:"ams",group:"bin",replace:"\u22cf"},"\\curlyvee":{font:"ams",group:"bin",replace:"\u22ce"},"\\circleddash":{font:"ams",group:"bin",replace:"\u229d"},"\\circledast":{font:"ams",group:"bin",replace:"\u229b"},"\\centerdot":{font:"ams",group:"bin",replace:"\u22c5"},"\\intercal":{font:"ams",group:"bin",replace:"\u22ba"},"\\doublecap":{font:"ams",group:"bin",replace:"\u22d2"},"\\doublecup":{font:"ams",group:"bin",replace:"\u22d3"},"\\boxtimes":{font:"ams",group:"bin",replace:"\u22a0"},"\\dashrightarrow":{font:"ams",group:"rel",replace:"\u21e2"},"\\dashleftarrow":{font:"ams",group:"rel",replace:"\u21e0"},"\\leftleftarrows":{font:"ams",group:"rel",replace:"\u21c7"},"\\leftrightarrows":{font:"ams",group:"rel",replace:"\u21c6"},"\\Lleftarrow":{font:"ams",group:"rel",replace:"\u21da"},"\\twoheadleftarrow":{font:"ams",group:"rel",replace:"\u219e"},"\\leftarrowtail":{font:"ams",group:"rel",replace:"\u21a2"},"\\looparrowleft":{font:"ams",group:"rel",replace:"\u21ab"},"\\leftrightharpoons":{font:"ams",group:"rel",replace:"\u21cb"},"\\curvearrowleft":{font:"ams",group:"rel",replace:"\u21b6"},"\\circlearrowleft":{font:"ams",group:"rel",replace:"\u21ba"},"\\Lsh":{font:"ams",group:"rel",replace:"\u21b0"},"\\upuparrows":{font:"ams",group:"rel",replace:"\u21c8"},"\\upharpoonleft":{font:"ams",group:"rel",replace:"\u21bf"},"\\downharpoonleft":{font:"ams",group:"rel",replace:"\u21c3"},"\\multimap":{font:"ams",group:"rel",replace:"\u22b8"},"\\leftrightsquigarrow":{font:"ams",group:"rel",replace:"\u21ad"},"\\rightrightarrows":{font:"ams",group:"rel",replace:"\u21c9"},"\\rightleftarrows":{font:"ams",group:"rel",replace:"\u21c4"},"\\twoheadrightarrow":{font:"ams",group:"rel",replace:"\u21a0"},"\\rightarrowtail":{font:"ams",group:"rel",replace:"\u21a3"},"\\looparrowright":{font:"ams",group:"rel",replace:"\u21ac"},"\\curvearrowright":{font:"ams",group:"rel",replace:"\u21b7"},"\\circlearrowright":{font:"ams",group:"rel",replace:"\u21bb"},"\\Rsh":{font:"ams",group:"rel",replace:"\u21b1"},"\\downdownarrows":{font:"ams",group:"rel",replace:"\u21ca"},"\\upharpoonright":{font:"ams",group:"rel",replace:"\u21be"},"\\downharpoonright":{font:"ams",group:"rel",replace:"\u21c2"},"\\rightsquigarrow":{font:"ams",group:"rel",replace:"\u21dd"},"\\leadsto":{font:"ams",group:"rel",replace:"\u21dd"},"\\Rrightarrow":{font:"ams",group:"rel",replace:"\u21db"},"\\restriction":{font:"ams",group:"rel",replace:"\u21be"},"`":{font:"main",group:"textord",replace:"\u2018"},"\\$":{font:"main",group:"textord",replace:"$"},"\\%":{font:"main",group:"textord",replace:"%"},"\\_":{font:"main",group:"textord",replace:"_"},"\\angle":{font:"main",group:"textord",replace:"\u2220"},"\\infty":{font:"main",group:"textord",replace:"\u221e"},"\\prime":{font:"main",group:"textord",replace:"\u2032"},"\\triangle":{font:"main",group:"textord",replace:"\u25b3"},"\\Gamma":{font:"main",group:"textord",replace:"\u0393"},"\\Delta":{font:"main",group:"textord",replace:"\u0394"},"\\Theta":{font:"main",group:"textord",replace:"\u0398"},"\\Lambda":{font:"main",group:"textord",replace:"\u039b"},"\\Xi":{font:"main",group:"textord",replace:"\u039e"},"\\Pi":{font:"main",group:"textord",replace:"\u03a0"},"\\Sigma":{font:"main",group:"textord",replace:"\u03a3"},"\\Upsilon":{font:"main",
group:"textord",replace:"\u03a5"},"\\Phi":{font:"main",group:"textord",replace:"\u03a6"},"\\Psi":{font:"main",group:"textord",replace:"\u03a8"},"\\Omega":{font:"main",group:"textord",replace:"\u03a9"},"\\neg":{font:"main",group:"textord",replace:"\xac"},"\\lnot":{font:"main",group:"textord",replace:"\xac"},"\\top":{font:"main",group:"textord",replace:"\u22a4"},"\\bot":{font:"main",group:"textord",replace:"\u22a5"},"\\emptyset":{font:"main",group:"textord",replace:"\u2205"},"\\varnothing":{font:"ams",group:"textord",replace:"\u2205"},"\\alpha":{font:"main",group:"mathord",replace:"\u03b1"},"\\beta":{font:"main",group:"mathord",replace:"\u03b2"},"\\gamma":{font:"main",group:"mathord",replace:"\u03b3"},"\\delta":{font:"main",group:"mathord",replace:"\u03b4"},"\\epsilon":{font:"main",group:"mathord",replace:"\u03f5"},"\\zeta":{font:"main",group:"mathord",replace:"\u03b6"},"\\eta":{font:"main",group:"mathord",replace:"\u03b7"},"\\theta":{font:"main",group:"mathord",replace:"\u03b8"},"\\iota":{font:"main",group:"mathord",replace:"\u03b9"},"\\kappa":{font:"main",group:"mathord",replace:"\u03ba"},"\\lambda":{font:"main",group:"mathord",replace:"\u03bb"},"\\mu":{font:"main",group:"mathord",replace:"\u03bc"},"\\nu":{font:"main",group:"mathord",replace:"\u03bd"},"\\xi":{font:"main",group:"mathord",replace:"\u03be"},"\\omicron":{font:"main",group:"mathord",replace:"o"},"\\pi":{font:"main",group:"mathord",replace:"\u03c0"},"\\rho":{font:"main",group:"mathord",replace:"\u03c1"},"\\sigma":{font:"main",group:"mathord",replace:"\u03c3"},"\\tau":{font:"main",group:"mathord",replace:"\u03c4"},"\\upsilon":{font:"main",group:"mathord",replace:"\u03c5"},"\\phi":{font:"main",group:"mathord",replace:"\u03d5"},"\\chi":{font:"main",group:"mathord",replace:"\u03c7"},"\\psi":{font:"main",group:"mathord",replace:"\u03c8"},"\\omega":{font:"main",group:"mathord",replace:"\u03c9"},"\\varepsilon":{font:"main",group:"mathord",replace:"\u03b5"},"\\vartheta":{font:"main",group:"mathord",replace:"\u03d1"},"\\varpi":{font:"main",group:"mathord",replace:"\u03d6"},"\\varrho":{font:"main",group:"mathord",replace:"\u03f1"},"\\varsigma":{font:"main",group:"mathord",replace:"\u03c2"},"\\varphi":{font:"main",group:"mathord",replace:"\u03c6"},"*":{font:"main",group:"bin",replace:"\u2217"},"+":{font:"main",group:"bin"},"-":{font:"main",group:"bin",replace:"\u2212"},"\\cdot":{font:"main",group:"bin",replace:"\u22c5"},"\\circ":{font:"main",group:"bin",replace:"\u2218"},"\\div":{font:"main",group:"bin",replace:"\xf7"},"\\pm":{font:"main",group:"bin",replace:"\xb1"},"\\times":{font:"main",group:"bin",replace:"\xd7"},"\\cap":{font:"main",group:"bin",replace:"\u2229"},"\\cup":{font:"main",group:"bin",replace:"\u222a"},"\\setminus":{font:"main",group:"bin",replace:"\u2216"},"\\land":{font:"main",group:"bin",replace:"\u2227"},"\\lor":{font:"main",group:"bin",replace:"\u2228"},"\\wedge":{font:"main",group:"bin",replace:"\u2227"},"\\vee":{font:"main",group:"bin",replace:"\u2228"},"\\surd":{font:"main",group:"textord",replace:"\u221a"},"(":{font:"main",group:"open"},"[":{font:"main",group:"open"},"\\langle":{font:"main",group:"open",replace:"\u27e8"},"\\lvert":{font:"main",group:"open",replace:"\u2223"},"\\lVert":{font:"main",group:"open",replace:"\u2225"},")":{font:"main",group:"close"},"]":{font:"main",group:"close"},"?":{font:"main",group:"close"},"!":{font:"main",group:"close"},"\\rangle":{font:"main",group:"close",replace:"\u27e9"},"\\rvert":{font:"main",group:"close",replace:"\u2223"},"\\rVert":{font:"main",group:"close",replace:"\u2225"},"=":{font:"main",group:"rel"},"<":{font:"main",group:"rel"},">":{font:"main",group:"rel"},":":{font:"main",group:"rel"},"\\approx":{font:"main",group:"rel",replace:"\u2248"},"\\cong":{font:"main",group:"rel",replace:"\u2245"},"\\ge":{font:"main",group:"rel",replace:"\u2265"},"\\geq":{font:"main",group:"rel",replace:"\u2265"},"\\gets":{font:"main",group:"rel",replace:"\u2190"},"\\in":{font:"main",group:"rel",replace:"\u2208"},"\\notin":{font:"main",group:"rel",replace:"\u2209"},"\\subset":{font:"main",group:"rel",replace:"\u2282"},"\\supset":{font:"main",group:"rel",replace:"\u2283"},"\\subseteq":{font:"main",group:"rel",replace:"\u2286"},"\\supseteq":{font:"main",group:"rel",replace:"\u2287"},"\\nsubseteq":{font:"ams",group:"rel",replace:"\u2288"},"\\nsupseteq":{font:"ams",group:"rel",replace:"\u2289"},"\\models":{font:"main",group:"rel",replace:"\u22a8"},"\\leftarrow":{font:"main",group:"rel",replace:"\u2190"},"\\le":{font:"main",group:"rel",replace:"\u2264"},"\\leq":{font:"main",group:"rel",replace:"\u2264"},"\\ne":{font:"main",group:"rel",replace:"\u2260"},"\\neq":{font:"main",group:"rel",replace:"\u2260"},"\\rightarrow":{font:"main",group:"rel",replace:"\u2192"},"\\to":{font:"main",group:"rel",replace:"\u2192"},"\\ngeq":{font:"ams",group:"rel",replace:"\u2271"},"\\nleq":{font:"ams",group:"rel",replace:"\u2270"},"\\!":{font:"main",group:"spacing"},"\\ ":{font:"main",group:"spacing",replace:"\xa0"},"~":{font:"main",group:"spacing",replace:"\xa0"},"\\,":{font:"main",group:"spacing"},"\\:":{font:"main",group:"spacing"},"\\;":{font:"main",group:"spacing"},"\\enspace":{font:"main",group:"spacing"},"\\qquad":{font:"main",group:"spacing"},"\\quad":{font:"main",group:"spacing"},"\\space":{font:"main",group:"spacing",replace:"\xa0"},",":{font:"main",group:"punct"},";":{font:"main",group:"punct"},"\\colon":{font:"main",group:"punct",replace:":"},"\\barwedge":{font:"ams",group:"bin",replace:"\u22bc"},"\\veebar":{font:"ams",group:"bin",replace:"\u22bb"},"\\odot":{font:"main",group:"bin",replace:"\u2299"},"\\oplus":{font:"main",group:"bin",replace:"\u2295"},"\\otimes":{font:"main",group:"bin",replace:"\u2297"},"\\partial":{font:"main",group:"textord",replace:"\u2202"},"\\oslash":{font:"main",group:"bin",replace:"\u2298"},"\\circledcirc":{font:"ams",group:"bin",replace:"\u229a"},"\\boxdot":{font:"ams",group:"bin",replace:"\u22a1"},"\\bigtriangleup":{font:"main",group:"bin",replace:"\u25b3"},"\\bigtriangledown":{font:"main",group:"bin",replace:"\u25bd"},"\\dagger":{font:"main",group:"bin",replace:"\u2020"},"\\diamond":{font:"main",group:"bin",replace:"\u22c4"},"\\star":{font:"main",group:"bin",replace:"\u22c6"},"\\triangleleft":{font:"main",group:"bin",replace:"\u25c3"},"\\triangleright":{font:"main",group:"bin",replace:"\u25b9"},"\\{":{font:"main",group:"open",replace:"{"},"\\}":{font:"main",group:"close",replace:"}"},"\\lbrace":{font:"main",group:"open",replace:"{"},"\\rbrace":{font:"main",group:"close",replace:"}"},"\\lbrack":{font:"main",group:"open",replace:"["},"\\rbrack":{font:"main",group:"close",replace:"]"},"\\lfloor":{font:"main",group:"open",replace:"\u230a"},"\\rfloor":{font:"main",group:"close",replace:"\u230b"},"\\lceil":{font:"main",group:"open",replace:"\u2308"},"\\rceil":{font:"main",group:"close",replace:"\u2309"},"\\backslash":{font:"main",group:"textord",replace:"\\"},"|":{font:"main",group:"textord",replace:"\u2223"},"\\vert":{font:"main",group:"textord",replace:"\u2223"},"\\|":{font:"main",group:"textord",replace:"\u2225"},"\\Vert":{font:"main",group:"textord",replace:"\u2225"},"\\uparrow":{font:"main",group:"rel",replace:"\u2191"},"\\Uparrow":{font:"main",group:"rel",replace:"\u21d1"},"\\downarrow":{font:"main",group:"rel",replace:"\u2193"},"\\Downarrow":{font:"main",group:"rel",replace:"\u21d3"},"\\updownarrow":{font:"main",group:"rel",replace:"\u2195"},"\\Updownarrow":{font:"main",group:"rel",replace:"\u21d5"},"\\coprod":{font:"math",group:"op",replace:"\u2210"},"\\bigvee":{font:"math",group:"op",replace:"\u22c1"},"\\bigwedge":{font:"math",group:"op",replace:"\u22c0"},"\\biguplus":{font:"math",group:"op",replace:"\u2a04"},"\\bigcap":{font:"math",group:"op",replace:"\u22c2"},"\\bigcup":{font:"math",group:"op",replace:"\u22c3"},"\\int":{font:"math",group:"op",replace:"\u222b"},"\\intop":{font:"math",group:"op",replace:"\u222b"},"\\iint":{font:"math",group:"op",replace:"\u222c"},"\\iiint":{font:"math",group:"op",replace:"\u222d"},"\\prod":{font:"math",group:"op",replace:"\u220f"},"\\sum":{font:"math",group:"op",replace:"\u2211"},"\\bigotimes":{font:"math",group:"op",replace:"\u2a02"},"\\bigoplus":{font:"math",group:"op",replace:"\u2a01"},"\\bigodot":{font:"math",group:"op",replace:"\u2a00"},"\\oint":{font:"math",group:"op",replace:"\u222e"},"\\bigsqcup":{font:"math",group:"op",replace:"\u2a06"},"\\smallint":{font:"math",group:"op",replace:"\u222b"},"\\ldots":{font:"main",group:"inner",replace:"\u2026"},"\\cdots":{font:"main",group:"inner",replace:"\u22ef"},"\\ddots":{font:"main",group:"inner",replace:"\u22f1"},"\\vdots":{font:"main",group:"textord",replace:"\u22ee"},"\\acute":{font:"main",group:"accent",replace:"\xb4"},"\\grave":{font:"main",group:"accent",replace:"`"},"\\ddot":{font:"main",group:"accent",replace:"\xa8"},"\\tilde":{font:"main",group:"accent",replace:"~"},"\\bar":{font:"main",group:"accent",replace:"\xaf"},"\\breve":{font:"main",group:"accent",replace:"\u02d8"},"\\check":{font:"main",group:"accent",replace:"\u02c7"},"\\hat":{font:"main",group:"accent",replace:"^"},"\\vec":{font:"main",group:"accent",replace:"\u20d7"},"\\dot":{font:"main",group:"accent",replace:"\u02d9"},"\\imath":{font:"main",group:"mathord",replace:"\u0131"},"\\jmath":{font:"main",group:"mathord",replace:"\u0237"}},text:{"\\ ":{font:"main",group:"spacing",replace:"\xa0"}," ":{font:"main",group:"spacing",replace:"\xa0"},"~":{font:"main",group:"spacing",replace:"\xa0"}}};var a='0123456789/@."';for(var r=0;r<a.length;r++){var l=a.charAt(r);h.math[l]={font:"main",group:"textord"}}var s="0123456789`!@*()-=+[]'\";:?/.,";for(var r=0;r<s.length;r++){var l=s.charAt(r);h.text[l]={font:"main",group:"textord"}}var p="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(var r=0;r<p.length;r++){var l=p.charAt(r);h.math[l]={font:"main",group:"mathord"};h.text[l]={font:"main",group:"textord"}}t.exports=h},{}],23:[function(e,t,i){var h=Array.prototype.indexOf;var a=function(e,t){if(e==null){return-1}if(h&&e.indexOf===h){return e.indexOf(t)}var i=0,a=e.length;for(;i<a;i++){if(e[i]===t){return i}}return-1};var r=function(e,t){return a(e,t)!==-1};var l=function(e,t){return e===undefined?t:e};var s=/([A-Z])/g;var p=function(e){return e.replace(s,"-$1").toLowerCase()};var c={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"};var n=/[&><"']/g;function o(e){return c[e]}function g(e){return(""+e).replace(n,o)}var d;if(typeof document!=="undefined"){var w=document.createElement("span");if("textContent"in w){d=function(e,t){e.textContent=t}}else{d=function(e,t){e.innerText=t}}}function u(e){d(e,"")}t.exports={contains:r,deflt:l,escape:g,hyphenate:p,indexOf:a,setTextContent:d,clearNode:u}},{}]},{},[1])(1)});


// kinetic-graphs.js
/// <reference path="kg.ts"/>
'use strict';
var KG;
(function (KG) {
    KG.CLASS_COLORS = {
        demand: 'blue',
        supply: 'orange',
        growth: 'green',
        diff1: 'purple',
        diff2: 'green',
        capital: 'orange',
        consumption: 'blue',
        asset: 'blue',
        'risk-free': 'green'
    };
    KG.COLORS = {
        blue: {
            dark: "#1f77b4",
            light: "#aec7e8"
        },
        orange: {
            dark: "#ff7f0e",
            light: "#98df8a"
        },
        green: {
            dark: "#2ca02c",
            light: "#74c476"
        },
        red: {
            dark: "d62728",
            light: "ff9896"
        },
        purple: {
            dark: "#9467bd",
            light: "#c5b0d5"
        },
        brown: {
            dark: "#8c564b",
            light: "#c49c94"
        },
        pink: {
            dark: "#e377c2",
            light: "#f7b6d2"
        },
        gray: {
            dark: "#7f7f7f",
            light: "#c7c7c7"
        },
        tan: {
            dark: "#bcbd22",
            light: "#dbdb8d"
        },
        cyan: {
            dark: "#17becf",
            light: "#9edae5"
        }
    };
})(KG || (KG = {}));
/// <reference path="../kg.ts"/>
'use strict';
var KG;
(function (KG) {
    function colorForClassName(className, shade) {
        if (className) {
            className = className.split(' ')[0];
        }
        shade = shade || 'dark';
        var classColor = KG.CLASS_COLORS[className] || 'gray';
        return KG.COLORS[classColor][shade];
    }
    KG.colorForClassName = colorForClassName;
    function allColors() {
        var colorArray = [];
        for (var color in KG.COLORS) {
            for (var shade in KG.COLORS[color]) {
                colorArray.push(KG.COLORS[color][shade]);
            }
        }
        return colorArray;
    }
    KG.allColors = allColors;
    var Domain = (function () {
        function Domain(min, max) {
            this.min = min;
            this.max = max;
            this.min = this.min || 0;
            this.max = this.max || 10;
        }
        Domain.prototype.toArray = function () {
            return [this.min, this.max];
        };
        Domain.prototype.contains = function (x, strict) {
            strict = strict || false;
            if (x == undefined || x == null || isNaN(x)) {
                return false;
            }
            var lowEnough = strict ? (this.max > x) : (this.max >= x);
            var highEnough = strict ? (this.min < x) : (this.min <= x);
            return lowEnough && highEnough;
        };
        Domain.prototype.samplePoints = function (numSamples) {
            var min = this.min, max = this.max, sp = [];
            for (var i = 0; i < numSamples; i++) {
                sp.push(min + (i / (numSamples - 1)) * (max - min));
            }
            return sp;
        };
        Domain.prototype.intersection = function (otherDomain) {
            var thisDomain = this;
            if (!otherDomain || otherDomain == undefined) {
                return thisDomain;
            }
            var min = Math.max(thisDomain.min, otherDomain.min), max = Math.min(thisDomain.max, otherDomain.max);
            if (max < min) {
                return null;
            }
            else {
                return new Domain(min, max);
            }
        };
        return Domain;
    })();
    KG.Domain = Domain;
    function isAlmostTo(a, b, t, basis) {
        t = t || 0.01;
        var diff = Math.abs(a - b), avg = basis || 0.5 * (a + b);
        return (diff / avg < t);
    }
    KG.isAlmostTo = isAlmostTo;
    function areTheSamePoint(a, b) {
        return (a.x === b.x && a.y === b.y);
    }
    KG.areTheSamePoint = areTheSamePoint;
    function areNotTheSamePoint(a, b) {
        return !areTheSamePoint(a, b);
    }
    KG.areNotTheSamePoint = areNotTheSamePoint;
    function arrayAverage(o) {
        var allNumbers = true;
        o.forEach(function (obj) {
            if (typeof obj !== 'number') {
                allNumbers = false;
            }
        });
        if (allNumbers) {
            var sum = 0;
            for (var i = 0; i < o.length; i++) {
                sum += o[i];
            }
            return sum / o.length;
        }
        else {
            var avgObj = {};
            for (var key in o[0]) {
                var allObjectsHaveKey = true;
                o.forEach(function (obj) {
                    if (!obj.hasOwnProperty(key)) {
                        allObjectsHaveKey = false;
                    }
                });
                if (allObjectsHaveKey) {
                    avgObj[key] = arrayAverage(o.map(function (obj) {
                        return obj[key];
                    }));
                }
            }
            return avgObj;
        }
    }
    KG.arrayAverage = arrayAverage;
    function averageTwoObjects(o1, o2) {
        if (typeof o1 == 'number' && typeof o2 == 'number') {
            return 0.5 * (o1 + o2);
        }
        else if (typeof o1 == 'object' && typeof o2 == 'object') {
            var avgObj = {};
            for (var key in o1) {
                if (o1.hasOwnProperty(key) && o2.hasOwnProperty(key)) {
                    avgObj[key] = averageTwoObjects(o1[key], o2[key]);
                }
            }
            return avgObj;
        }
    }
    KG.averageTwoObjects = averageTwoObjects;
    function medianDataPoint(data) {
        var l = data.length;
        if (l % 2) {
            return data[(l - 1) / 2];
        }
        else {
            return averageTwoObjects(data[l / 2], data[l / 2 - 1]);
        }
    }
    KG.medianDataPoint = medianDataPoint;
    function translateByPixelCoordinates(coordinates) {
        return 'translate(' + coordinates.x + ',' + coordinates.y + ')';
    }
    KG.translateByPixelCoordinates = translateByPixelCoordinates;
    function positionByPixelCoordinates(coordinates, dimension) {
        var style = 'position:relative; left: ' + coordinates.x + 'px; top: ' + coordinates.y + 'px;';
        if (dimension) {
            if (dimension.hasOwnProperty('width')) {
                style += ' width: ' + dimension.width + 'px;';
            }
        }
        return style;
    }
    KG.positionByPixelCoordinates = positionByPixelCoordinates;
    function distanceBetweenCoordinates(a, b) {
        return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    }
    KG.distanceBetweenCoordinates = distanceBetweenCoordinates;
    // Takes a variety of ways of defining x-y coordinates and returns an object with x and y properties
    function getCoordinates(def) {
        var defaultCoordinates = { x: 0, y: 0 };
        if (!def || def == undefined) {
            return defaultCoordinates;
        }
        if (def.hasOwnProperty('coordinates')) {
            return def.coordinates;
        }
        else if (def.hasOwnProperty('x') && def.hasOwnProperty('y')) {
            return def;
        }
        else if (def.hasOwnProperty('definition')) {
            return getCoordinates(def.definition);
        }
        else {
            return defaultCoordinates;
        }
    }
    KG.getCoordinates = getCoordinates;
    // Takes a variety of ways of defining x-y coordinates and returns an array [x,y]
    function getBases(def) {
        var coordinates = getCoordinates(def);
        return [coordinates.x, coordinates.y];
    }
    KG.getBases = getBases;
    function sortObjects(key, descending) {
        return function (a, b) {
            var lower = descending ? a[key] : b[key], higher = descending ? b[key] : a[key];
            return lower > higher ? -1 : lower < higher ? 1 : lower <= higher ? 0 : NaN;
        };
    }
    KG.sortObjects = sortObjects;
})(KG || (KG = {}));
/// <reference path="../kg.ts"/>
'use strict';
var KG;
(function (KG) {
    function getDefinitionProperty(def) {
        if (typeof def == 'string') {
            if (def.match(/[\*/+-]/)) {
                return '(' + def + ')';
            }
            else {
                return def;
            }
        }
        else {
            return def;
        }
    }
    KG.getDefinitionProperty = getDefinitionProperty;
    function getPropertyAsString(def) {
        var d = def;
        if (typeof d == 'number') {
            return d.toString();
        }
        else {
            return "(" + d.toString() + ")";
        }
    }
    KG.getPropertyAsString = getPropertyAsString;
    function binaryFunction(def1, def2, fn) {
        if (typeof def1 == 'number' && typeof def2 == 'number') {
            switch (fn) {
                case "+":
                    return def1 + def2;
                    break;
                case "-":
                    return def1 - def2;
                    break;
                case "/":
                    return def1 / def2;
                    break;
                case "*":
                    return def1 * def2;
                case "^":
                    return Math.pow(def1, def2);
            }
        }
        else if (fn === '^') {
            return "Math.pow(" + def1 + "," + def2 + ")";
        }
        else {
            return "(" + getDefinitionProperty(def1) + fn + getDefinitionProperty(def2) + ")";
        }
    }
    KG.binaryFunction = binaryFunction;
    function addDefs(def1, def2) {
        return binaryFunction(def1, def2, '+');
    }
    KG.addDefs = addDefs;
    function subtractDefs(def1, def2) {
        return binaryFunction(def1, def2, '-');
    }
    KG.subtractDefs = subtractDefs;
    function divideDefs(def1, def2) {
        return binaryFunction(def1, def2, '/');
    }
    KG.divideDefs = divideDefs;
    function multiplyDefs(def1, def2) {
        return binaryFunction(def1, def2, '*');
    }
    KG.multiplyDefs = multiplyDefs;
    function squareDef(def) {
        return binaryFunction(def, def, '*');
    }
    KG.squareDef = squareDef;
    function raiseDefToDef(def1, def2) {
        return binaryFunction(def1, def2, '^');
    }
    KG.raiseDefToDef = raiseDefToDef;
    function createInstance(definition) {
        // from http://stackoverflow.com/questions/1366127/
        function typeSpecificConstructor(typeName) {
            var arr = typeName.split(".");
            var fn = (window || this);
            for (var i = 0, len = arr.length; i < len; i++) {
                fn = fn[arr[i]];
            }
            if (typeof fn !== "function") {
                throw new Error("object type " + typeName + " not found");
            }
            return fn;
        }
        // each object is a new instance of the class named in the 'type' parameter
        var newObjectConstructor = typeSpecificConstructor(definition.type);
        return new newObjectConstructor(definition.definition);
    }
    KG.createInstance = createInstance;
})(KG || (KG = {}));
'use strict';
var KG;
(function (KG) {
    var Model = (function () {
        function Model(definition, modelPath) {
            this.definition = definition;
            this.modelPath = modelPath;
            var model = this;
            model.modelPath = modelPath || 'model';
            for (var key in definition) {
                if (definition.hasOwnProperty(key) && definition[key] != undefined) {
                    var value = definition[key];
                    if (value.hasOwnProperty('type') && value.hasOwnProperty('definition')) {
                        model[key] = KG.createInstance(value);
                    }
                    else {
                        model[key] = value;
                    }
                }
            }
        }
        Model.prototype.modelProperty = function (name) {
            return this.modelPath + '.' + name;
        };
        Model.prototype.setNumericProperty = function (propertySetter) {
            var model = this;
            if (!isNaN(propertySetter.value)) {
                model[propertySetter.name] = propertySetter.value;
            }
            else if (!model.hasOwnProperty(propertySetter.name)) {
                model[propertySetter.name] = propertySetter.defaultValue || 0;
            }
            return model;
        };
        Model.prototype.setArrayProperty = function (propertySetter) {
            var model = this;
            if (propertySetter.value instanceof Array) {
                model[propertySetter.name] = propertySetter.value;
            }
            else if (propertySetter.value) {
                model[propertySetter.name] = [propertySetter.value];
            }
            else if (!model.hasOwnProperty(propertySetter.name)) {
                model[propertySetter.name] = propertySetter.defaultValue;
            }
            return model;
        };
        // Update the model
        Model.prototype.update = function (scope, callback) {
            var model = this;
            // Iterates over an object's definition, getting the current value of each property
            function parseObject(def, obj) {
                obj = obj || {};
                for (var key in def) {
                    if (def.hasOwnProperty(key)) {
                        if (obj[key] instanceof KG.Model) {
                            // if the property is itself a model, update the model
                            obj[key].update(scope);
                        }
                        else if (def[key] !== undefined) {
                            // otherwise parse the current value of the property
                            obj[key] = deepParse(def[key]);
                        }
                    }
                }
                return obj;
            }
            // Returns the value of an object's property, evaluated against the current scope.
            function deepParse(value) {
                if (Object.prototype.toString.call(value) == '[object Array]') {
                    // If the object's property is an array, return the array mapped to its parsed values
                    // see http://stackoverflow.com/questions/4775722/check-if-object-is-array
                    return value.map(deepParse);
                }
                else if (typeof value == 'object') {
                    // If the object's property is an object, parses the object.
                    return parseObject(value);
                }
                else if (scope && value.toString() !== undefined) {
                    try {
                        var e = scope.$eval(value.toString());
                        return (e == undefined) ? value : e;
                    }
                    catch (error) {
                        return value;
                    }
                }
                else {
                    return value;
                }
            }
            // Parse the model object
            model = parseObject(model.definition, model);
            // Do any model-specific updating
            model = model._update(scope)._calculateValues();
            if (callback) {
                callback();
            }
            return model;
        };
        Model.prototype._update = function (scope) {
            return this; // overridden by child classes
        };
        Model.prototype._calculateValues = function () {
            return this; // overridden by child classes
        };
        return Model;
    })();
    KG.Model = Model;
})(KG || (KG = {}));
'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var KG;
(function (KG) {
    var Restriction = (function (_super) {
        __extends(Restriction, _super);
        function Restriction(definition) {
            _super.call(this, definition);
        }
        Restriction.prototype.validate = function (params) {
            var RANGE_TYPE = "range";
            var SET_TYPE = "set";
            var BOOLEAN_TYPE = "boolean";
            var r = this;
            function isSimpleParam(name) {
                var match = name.match(/params\.[a-zA-Z0-9]+/);
                if (match) {
                    return (name === match[0]);
                }
                else {
                    return false;
                }
            }
            function paramName(name) {
                return name.split('params.')[1];
            }
            if (r.restrictionType === RANGE_TYPE) {
                if (r.min > r.max) {
                    var maxName = r.definition['max'];
                    if (isSimpleParam(maxName)) {
                        params[paramName(maxName)] = r.min;
                        return params;
                    }
                    var minName = r.definition['min'];
                    if (isSimpleParam(minName)) {
                        params[paramName(minName)] = r.max;
                        return params;
                    }
                    return false;
                }
                var e = r.definition['expression'];
                if (isSimpleParam(e)) {
                    var param = paramName(e);
                    var value = this.round();
                    if (value < r.min) {
                        params[param] = r.min;
                    }
                    else if (value > r.max) {
                        params[param] = r.max;
                    }
                    else {
                        params[param] = value;
                    }
                    return params;
                }
                else if (r.min <= r.expression && r.expression <= r.max) {
                    return params;
                }
                else {
                    return false;
                }
            }
            if (r.restrictionType === SET_TYPE) {
                if (r.set.indexOf(r.expression) > -1) {
                    return params;
                }
                else {
                    return false;
                }
            }
            if (r.restrictionType === BOOLEAN_TYPE) {
                if (r.expression) {
                    return params;
                }
                else {
                    return false;
                }
            }
        };
        Restriction.prototype.round = function () {
            var r = this;
            if (r.precision > 0) {
                var delta = r.expression - r.min;
                var steps = Math.round(delta / r.precision);
                return r.min + (steps * r.precision);
            }
            else {
                return r.expression;
            }
        };
        return Restriction;
    })(KG.Model);
    KG.Restriction = Restriction;
})(KG || (KG = {}));
var KGMath;
(function (KGMath) {
    var Functions;
    (function (Functions) {
        var Base = (function (_super) {
            __extends(Base, _super);
            function Base(definition, modelPath) {
                definition.level = definition.level || 0;
                _super.call(this, definition, modelPath);
                var fn = this;
                if (definition.hasOwnProperty('xDomainDef')) {
                    fn.xDomain = new KG.Domain(definition.xDomainDef.min, definition.xDomainDef.max);
                }
                if (definition.hasOwnProperty('yDomainDef')) {
                    fn.yDomain = new KG.Domain(definition.yDomainDef.min, definition.yDomainDef.max);
                }
            }
            // Returns the slope between (a,f(a)) and (b,f(b)).
            // If inverse = true, returns the slope between (f(a),a) and (f(b),b).
            // Assumes that a and b are both scalars (for now).
            Base.prototype.slopeBetweenPoints = function (a, b, inverse) {
                var f = this;
                b = b || 0;
                inverse = inverse || false;
                var s = (f.yValue(a) - f.yValue(b)) / (a - b);
                return inverse ? 1 / s : s;
            };
            Base.prototype.setBase = function (index, base) {
                var fn = this;
                if (fn.hasOwnProperty('bases')) {
                    fn.bases[index - 1] = base;
                }
                else {
                    fn.bases = [];
                    for (var i = 0; i < index; i++) {
                        fn.bases.push((i == index - 1) ? base : 1);
                    }
                }
                return fn;
            };
            // set bases for evaluating a polynomial or monomial
            Base.prototype.setBases = function (bases) {
                return this.setArrayProperty({
                    name: 'bases',
                    value: bases,
                    defaultValue: []
                });
            };
            // set level of function (for generating level sets)
            Base.prototype.setLevel = function (level) {
                return this.setNumericProperty({
                    name: 'level',
                    value: level,
                    defaultValue: 0
                });
            };
            Base.prototype.value = function (bases) {
                return 0; // overridden by subclass
            };
            Base.prototype.yValue = function (x) {
                return null; // overridden by subclass
            };
            // Returns x value for given y, for a two-dimensional function
            Base.prototype.xValue = function (y) {
                return null;
            };
            Base.prototype.points = function (view, yIsIndependent, numSamplePoints) {
                var fn = this, points = [];
                numSamplePoints = numSamplePoints || 51;
                var xSamplePoints = view.xAxis.domain.samplePoints(numSamplePoints), ySamplePoints = view.yAxis.domain.samplePoints(numSamplePoints);
                for (var i = 0; i < numSamplePoints; i++) {
                    var x = xSamplePoints[i];
                    var yOfX = fn.yValue(x);
                    if (isNaN(yOfX) || yOfX == Infinity) {
                        console.log(yOfX, ' is not plottable');
                    }
                    else if (view.yAxis.domain.contains(yOfX) || (i > 0 && view.yAxis.domain.contains(fn.yValue(xSamplePoints[i - 1]))) || (i < numSamplePoints - 1 && view.yAxis.domain.contains(fn.yValue(xSamplePoints[i + 1])))) {
                        points.push({ x: x, y: yOfX });
                    }
                    var y = ySamplePoints[i];
                    var xOfY = fn.xValue(y);
                    if (isNaN(xOfY) || xOfY == Infinity) {
                        console.log(xOfY, ' is not plottable');
                    }
                    else if (view.xAxis.domain.contains(xOfY)) {
                        points.push({ x: xOfY, y: y });
                    }
                }
                if (yIsIndependent) {
                    return points.sort(KG.sortObjects('y'));
                }
                else {
                    return points.sort(KG.sortObjects('x'));
                }
            };
            return Base;
        })(KG.Model);
        Functions.Base = Base;
    })(Functions = KGMath.Functions || (KGMath.Functions = {}));
})(KGMath || (KGMath = {}));
var KGMath;
(function (KGMath) {
    var Functions;
    (function (Functions) {
        var Implicit = (function (_super) {
            __extends(Implicit, _super);
            function Implicit(definition, modelPath) {
                _super.call(this, definition, modelPath);
                var fn = this;
                fn.xFunction = new KGMath.Functions[definition.xFunctionType](definition.xFunctionDef, fn.modelProperty('xFunction'));
                fn.yFunction = new KGMath.Functions[definition.yFunctionType](definition.yFunctionDef, fn.modelProperty('yFunction'));
                fn.tDomain = new KG.Domain(definition.tDomainDef.min, definition.tDomainDef.max);
            }
            Implicit.prototype._update = function (scope) {
                var fn = this;
                fn.xFunction.update(scope);
                fn.yFunction.update(scope);
                fn.tDomain.update(scope);
                return fn;
            };
            Implicit.prototype.point = function (t) {
                var fn = this;
                return {
                    x: fn.xFunction.yValue(t),
                    y: fn.yFunction.yValue(t)
                };
            };
            // Returns the slope between (x(t1), y(t1)) and (x(t2),y(t2)).
            // If inverse = true, return 1 / that slope.
            Implicit.prototype.slopeBetweenPoints = function (t1, t2, inverse) {
                var p1 = this.point(t1), p2 = this.point(t2);
                inverse = inverse || false;
                var s = (p1.y - p2.y) / (p1.x - p2.x);
                return inverse ? 1 / s : s;
            };
            Implicit.prototype.points = function (view, numSamplePoints) {
                var fn = this, points = [];
                numSamplePoints = numSamplePoints || 51;
                var samplePoints = fn.tDomain.samplePoints(numSamplePoints);
                for (var i = 0; i < numSamplePoints; i++) {
                    var previousPoint = (i > 0) ? fn.point(samplePoints[i - 1]) : null, point = fn.point(samplePoints[i]), nextPoint = (i < numSamplePoints - 1) ? fn.point(samplePoints[i + 1]) : null;
                    if (view.onGraph(point) || view.onGraph(previousPoint) || view.onGraph(nextPoint)) {
                        points.push(point);
                    }
                }
                return points;
            };
            return Implicit;
        })(KG.Model);
        Functions.Implicit = Implicit;
    })(Functions = KGMath.Functions || (KGMath.Functions = {}));
})(KGMath || (KGMath = {}));
var KGMath;
(function (KGMath) {
    var Functions;
    (function (Functions) {
        var Relation = (function (_super) {
            __extends(Relation, _super);
            function Relation(definition, modelPath) {
                definition.inverse = definition.inverse || false;
                _super.call(this, definition, modelPath);
                var f = this;
                f.fn = new KGMath.Functions[definition.functionType](definition.functionDef, f.modelProperty('fn'));
            }
            // Returns the slope between (a,f(a)) and (b,f(b)).
            // If inverse = true, returns the slope between (f(a),a) and (f(b),b).
            // Assumes that a and b are both scalars (for now).
            Relation.prototype.slopeBetweenPoints = function (a, b, inverse) {
                var f = this;
                b = b || 0;
                inverse = inverse || false;
                var s = (f.fn.yValue(a) - f.fn.yValue(b)) / (a - b);
                return (inverse != f.inverse) ? 1 / s : s;
            };
            Relation.prototype.points = function (view, numSamplePoints) {
                var f = this, points = [];
                numSamplePoints = numSamplePoints || 51;
                var independentAxis = f.inverse ? view.yAxis : view.xAxis, sampleIndependentValues = independentAxis.domain.samplePoints(numSamplePoints), sampleDependentValues = sampleIndependentValues.map(f.fn.yValue);
                for (var i = 0; i < numSamplePoints; i++) {
                    var point, previousPoint, nextPoint;
                    if (f.inverse) {
                        previousPoint = (i > 0) ? { x: sampleDependentValues[i - 1], y: sampleIndependentValues[i - 1] } : null;
                        point = { x: sampleDependentValues[i], y: sampleIndependentValues[i] };
                        nextPoint = (i < numSamplePoints - 1) ? { x: sampleDependentValues[i + 1], y: sampleIndependentValues[i + 1] } : null;
                    }
                    else {
                        previousPoint = (i > 0) ? { x: sampleIndependentValues[i - 1], y: sampleDependentValues[i - 1] } : null;
                        point = { x: sampleIndependentValues[i], y: sampleDependentValues[i] };
                        nextPoint = (i < numSamplePoints - 1) ? { x: sampleIndependentValues[i + 1], y: sampleDependentValues[i + 1] } : null;
                    }
                    if (view.onGraph(point) || view.onGraph(previousPoint) || view.onGraph(nextPoint)) {
                        points.push(point);
                    }
                }
                return points;
            };
            return Relation;
        })(KG.Model);
        Functions.Relation = Relation;
    })(Functions = KGMath.Functions || (KGMath.Functions = {}));
})(KGMath || (KGMath = {}));
/*
 A monomial function is a term of the form c(b1^p1)(b2^p2)...(bn^pn)
 where 'c' is the coefficient, 'bi' is the i'th base, and 'pi' is the i'th power.

 The initializing object, params, should be of the form

 params = {coefficient: (number), bases: (number or array), powers: (number or array)}

 Any of these parameters may be null initially and set later with the setters.
 */
var KGMath;
(function (KGMath) {
    var Functions;
    (function (Functions) {
        var Monomial = (function (_super) {
            __extends(Monomial, _super);
            function Monomial(definition, modelPath) {
                this.monomialDefs = {
                    coefficient: definition.coefficient.toString(),
                    powers: definition.powers.map(function (p) {
                        return p.toString();
                    })
                };
                _super.call(this, definition, modelPath);
            }
            // Establish setters
            Monomial.prototype.setCoefficient = function (coefficient) {
                return this.setNumericProperty({
                    name: 'coefficient',
                    value: coefficient,
                    defaultValue: 1
                });
            };
            Monomial.prototype.setPowers = function (powers) {
                return this.setArrayProperty({
                    name: 'powers',
                    value: powers,
                    defaultValue: []
                });
            };
            // Evaluate monomial for a given set of bases. If none are set, use m.bases.
            Monomial.prototype.value = function (bases) {
                var m = this;
                m.setBases(bases);
                var basePowerPairs = Math.min(m.bases.length, m.powers.length);
                var result = m.coefficient;
                for (var t = 0; t < basePowerPairs; t++) {
                    result *= Math.pow(m.bases[t], m.powers[t]);
                }
                return result;
            };
            // Return the monomial that is the derivative of this monomial
            // with respect to the n'th variable
            Monomial.prototype.derivative = function (n) {
                var m = this;
                // n is the index of the term; first term by default
                n = n - 1 || 0;
                return new Monomial({
                    // the new coefficient is the old coefficient times
                    //the power of the variable whose derivative we're taking
                    coefficient: KG.multiplyDefs(m.monomialDefs.coefficient, m.monomialDefs.powers[n]),
                    powers: m.monomialDefs.powers.map(function (p, index) {
                        if (index == n) {
                            return KG.subtractDefs(p, 1);
                        }
                        else {
                            return p;
                        }
                    }),
                    bases: m.bases
                });
            };
            // Return the monomial that is the integral of this monomial
            // with respect to the n'th variable, with no constant of integration
            Monomial.prototype.integral = function (n) {
                var m = this;
                // n is the index of the term; first term by default
                n = n - 1 || 0;
                return new Monomial({
                    // the new coefficient is the old coefficient times
                    //the power of the variable whose derivative we're taking
                    coefficient: KG.divideDefs(m.monomialDefs.coefficient, KG.addDefs(m.monomialDefs.powers[n], 1)),
                    powers: m.monomialDefs.powers.map(function (p, index) {
                        if (index == n) {
                            return KG.addDefs(p, 1);
                        }
                        else {
                            return p;
                        }
                    }),
                    bases: m.bases
                });
            };
            // Return the monomial that reduces the power of the n'th variable by 1
            Monomial.prototype.average = function (n) {
                var m = this;
                // n is the index of the term; first term by default
                n = n - 1 || 0;
                return new Monomial({
                    coefficient: m.monomialDefs.coefficient,
                    // reduce the power of the n'th variable by 1
                    powers: m.monomialDefs.powers.map(function (p, index) {
                        if (index == n) {
                            return p + " - 1";
                        }
                        else {
                            return p;
                        }
                    }),
                    bases: m.bases
                });
            };
            // Return the monomial that multiplies the coefficient by x
            Monomial.prototype.multiply = function (x) {
                var m = this;
                // n is the index of the term; first term by default
                x = x || 1;
                return new Monomial({
                    // multiply the coefficient by x
                    coefficient: "(" + m.monomialDefs.coefficient + ")*(" + x + ")",
                    powers: m.monomialDefs.powers,
                    bases: m.bases
                });
            };
            // Return the monomial that solves the function c(b1^p1)(b2^p2) = level for bn
            // For example, to find the level curve where 3(x^2)(y^3) = 6 and express it as y(x), this would return
            // y = [6/(3x^-2)]^(1/3) = [(6/2)^1/3][(x^-2)^1/3] = [(6/2)^1/3][x^-2/3]
            // Note that the indices of the bases in the returned monomial are the same as the original.
            Monomial.prototype.levelCurve = function (n, level) {
                var m = this;
                // note: level can be a numerical value or an array of bases at which to evaluate the monomial
                if (level) {
                    m.setLevel(level);
                }
                // n is the index of the term; first term by default
                n = n - 1 || 0;
                // pn is the power to which the base variable we're solving for is raised
                var pn = m.powers[n];
                if (pn == 0) {
                    return null;
                }
                return new Monomial({
                    // the coefficient of the new monomial is (level/c)^1/p
                    coefficient: Math.pow(m.level / m.coefficient, 1 / pn),
                    // each of the powers for the remaining bases is divided by -p
                    powers: m.powers.map(function (p, index) {
                        if (index == n) {
                            return 0;
                        }
                        else {
                            return -p / pn;
                        }
                    }),
                    bases: m.bases
                });
            };
            // returns the y value corresponding to the given x value for m(x,y) = m.level
            Monomial.prototype.yValue = function (x) {
                var m = this;
                if (m.powers.length == 1) {
                    return m.coefficient * Math.pow(x, m.powers[0]);
                }
                else {
                    this.setBase(1, x);
                    return this.levelCurve(2).value();
                }
            };
            // returns the x value corresponding to the given y value for m(x,y) = m.level
            Monomial.prototype.xValue = function (y) {
                var m = this;
                if (this.powers.length == 1) {
                    return Math.pow(y / m.coefficient, 1 / m.powers[0]);
                }
                else {
                    this.setBase(2, y);
                    return this.levelCurve(1).value();
                }
            };
            return Monomial;
        })(Functions.Base);
        Functions.Monomial = Monomial;
    })(Functions = KGMath.Functions || (KGMath.Functions = {}));
})(KGMath || (KGMath = {}));
/*
 A polynomial function is an array of monomial functions.
 Its value is the sum of its component functions.
 Its derivative is the array of the derivatives of its component functions.
 */
var KGMath;
(function (KGMath) {
    var Functions;
    (function (Functions) {
        var Polynomial = (function (_super) {
            __extends(Polynomial, _super);
            function Polynomial(definition, modelPath) {
                _super.call(this, definition, modelPath);
                if (definition.hasOwnProperty('termDefs')) {
                    this.terms = definition.termDefs.map(function (termDef) {
                        return new Functions.Monomial(termDef);
                    });
                }
                this.bases = [0];
            }
            Polynomial.prototype._update = function (scope) {
                this.terms.forEach(function (monomial) {
                    monomial.update(scope);
                });
                return this;
            };
            // The coefficients and powers of each term may be get and set via the term's index
            Polynomial.prototype.setCoefficient = function (n, coefficient) {
                var p = this;
                p.terms[n - 1].setCoefficient(coefficient);
                return p;
            };
            Polynomial.prototype.setPowers = function (n, powers) {
                var p = this;
                p.terms[n - 1].setPowers(powers);
                return p;
            };
            // The value of a polynomial is the sum of the values of its monomial terms
            Polynomial.prototype.value = function (bases) {
                var p = this;
                p.setBases(bases);
                var result = 0;
                for (var i = 0; i < p.terms.length; i++) {
                    result += p.terms[i].value(p.bases);
                }
                return result;
            };
            // The derivative of a polynomial is a new polynomial,
            // each of whose terms is the derivative of the original polynomial's terms
            Polynomial.prototype.derivative = function (n) {
                var p = this;
                return new Polynomial({
                    termDefs: p.terms.map(function (term) {
                        return term.derivative(n);
                    })
                });
            };
            // The derivative of a polynomial is a new polynomial,
            // each of whose terms is the integral of the original polynomial's terms,
            // plus the constant of integration c
            Polynomial.prototype.integral = function (n, c) {
                var p = this;
                if (!c) {
                    c = 0;
                }
                var termDefs = p.terms.map(function (term) {
                    return term.integral(n);
                });
                termDefs.push(new Functions.Monomial({ coefficient: c, powers: [0] }));
                return new Polynomial({
                    termDefs: termDefs
                });
            };
            // The average of a polynomial is a new polynomial,
            // each of whose terms is the average of the original polynomial's terms
            Polynomial.prototype.average = function (n) {
                var p = this;
                return new Polynomial({
                    termDefs: p.terms.map(function (term) {
                        return term.average(n);
                    })
                });
            };
            // Multiplying a polynomial by a constant means multiplying each monomial by that constant
            Polynomial.prototype.multiply = function (x) {
                var p = this;
                return new Polynomial({
                    termDefs: p.terms.map(function (term) {
                        return term.multiply(x);
                    })
                });
            };
            // Adding a constant to a polynomial means appending a new constant term
            Polynomial.prototype.add = function (x) {
                var p = this;
                var termDefs = _.clone(p.terms);
                termDefs.push(new Functions.Monomial({ coefficient: x, powers: [0] }));
                return new Polynomial({
                    termDefs: termDefs
                });
            };
            // Assume all bases except the first have been set; replace the base of the first variable ('x') with the x value
            Polynomial.prototype.yValue = function (x) {
                var p = this;
                var inputs = p.bases.map(function (val, index) {
                    return (index == 0) ? x : val;
                });
                return p.value(inputs);
            };
            // Not generally a valid concept for a polynomial
            Polynomial.prototype.xValue = function (y) {
                return null;
            };
            return Polynomial;
        })(Functions.Base);
        Functions.Polynomial = Polynomial;
    })(Functions = KGMath.Functions || (KGMath.Functions = {}));
})(KGMath || (KGMath = {}));
/*
 A linear function is a special polynomial defined either with two points or a point and a slope.
 This function takes either of those and returns a polynomial of the form ax + by + c.
 The params object is of the form: { definitionType: '', param1: foo, param2: bar }
 */
var KGMath;
(function (KGMath) {
    var Functions;
    (function (Functions) {
        var Linear = (function (_super) {
            __extends(Linear, _super);
            function Linear(definition, modelPath) {
                _super.call(this, definition, modelPath);
                this.linearIntersection = function (otherLine, delta) {
                    var thisLine = this;
                    delta = delta || 0;
                    var a = thisLine.coefficients.a, b = thisLine.coefficients.b, c = thisLine.coefficients.c, oa = otherLine.coefficients.a, ob = otherLine.coefficients.b, oc = otherLine.coefficients.c;
                    var diffLine = new Linear({
                        coefficients: {
                            a: a * ob - b * oa,
                            b: b * ob,
                            c: ob * c - oc * b - delta
                        }
                    }).updateLine(), x = diffLine.xIntercept, y = thisLine.yValue(x);
                    return { x: x, y: y };
                };
                definition.coefficients = definition.coefficients || { a: 0, b: -1, c: 0 };
                var l = this;
                if (definition.hasOwnProperty('point1') && definition.hasOwnProperty('point2')) {
                    var p1 = KG.getCoordinates(definition.point1), p2 = KG.getCoordinates(definition.point2), rise = KG.subtractDefs(p2.y, p1.y), run = KG.subtractDefs(p2.x, p1.x);
                    definition.slope = KG.divideDefs(rise, run);
                    definition.point = p1;
                }
                if (definition.hasOwnProperty('slope') && definition.slope != undefined) {
                    definition.coefficients.a = definition.slope;
                    if (definition.hasOwnProperty('intercept')) {
                        definition.coefficients.c = definition.intercept;
                        l.interceptDef = definition.intercept;
                    }
                    else if (definition.hasOwnProperty('point') && definition.point != undefined) {
                        var mx = KG.multiplyDefs(definition.slope, definition.point.x);
                        definition.coefficients.c = KG.subtractDefs(definition.point.y, mx);
                    }
                }
                else {
                    definition.slope = KG.multiplyDefs(-1, KG.divideDefs(definition.coefficients.a, definition.coefficients.b));
                }
                l.slopeDef = definition.slope;
                l.interceptDef = l.interceptDef || KG.multiplyDefs(-1, KG.divideDefs(definition.coefficients.c, definition.coefficients.b));
            }
            Linear.prototype._update = function (scope) {
                return this.updateLine();
            };
            Linear.prototype.updateLine = function () {
                var l = this;
                var a = l.coefficients.a, b = l.coefficients.b, c = l.coefficients.c;
                l.isVertical = (b === 0) || (a === Infinity) || (a === -Infinity);
                l.isHorizontal = (a === 0);
                l.slope = l.isVertical ? Infinity : -a / b;
                l.inverseSlope = l.isHorizontal ? Infinity : -b / a;
                l.xIntercept = l.isHorizontal ? null : (l.isVertical && l.hasOwnProperty('point')) ? l.point.x : -c / a;
                l.yIntercept = l.isVertical ? null : -c / b;
                return l;
            };
            // The derivative of ax^2 + bx + c is 2ax + b
            Linear.prototype.derivative = function (n) {
                var m = this.slopeDef || this.slope || 0;
                return new HorizontalLine({
                    y: m
                });
            };
            // The integral of mx + b is (m/2)x^2 + bx + c
            Linear.prototype.integral = function (n, c, name) {
                var m = this;
                if (!c) {
                    c = 0;
                }
                if (m instanceof HorizontalLine) {
                    return new Linear({
                        slope: m.y,
                        intercept: c
                    }, name);
                }
                else {
                    return new Functions.Quadratic({
                        coefficients: {
                            a: KG.multiplyDefs(0.5, m.slopeDef),
                            b: m.interceptDef,
                            c: c
                        }
                    }, name);
                }
            };
            Linear.prototype.add = function (x, name) {
                var m = this;
                return new Linear({
                    slope: m.slopeDef,
                    intercept: KG.addDefs(m.interceptDef, x)
                }, name);
            };
            // The average of ax^2 + bx + c is ax + b + cx^-2 + C
            Linear.prototype.average = function (n, name) {
                var l = this;
                name = name ? l.modelProperty(name) : null;
                return new Functions.Polynomial({
                    termDefs: [
                        {
                            coefficient: l.slopeDef,
                            powers: [0]
                        },
                        {
                            coefficient: l.interceptDef,
                            powers: [-1]
                        }
                    ]
                }, name);
            };
            Linear.prototype.yValue = function (x) {
                var l = this.updateLine();
                var y = l.isVertical ? undefined : l.yIntercept + l.slope * x;
                return y;
            };
            Linear.prototype.xValue = function (y) {
                var l = this.updateLine();
                var x = l.isHorizontal ? undefined : l.xIntercept + l.inverseSlope * y;
                return x;
            };
            Linear.prototype.points = function (view) {
                var l = this;
                var xDomain = view.xAxis.domain.intersection(l.xDomain), yDomain = view.yAxis.domain.intersection(l.yDomain);
                var points = [];
                if (l.isVertical) {
                    points = [{ x: l.xIntercept, y: yDomain.min }, { x: l.xIntercept, y: yDomain.max }];
                }
                else if (l.isHorizontal) {
                    points = [{ x: xDomain.min, y: l.yIntercept }, { x: xDomain.max, y: l.yIntercept }];
                }
                else {
                    var xTop = l.xValue(yDomain.max), xBottom = l.xValue(yDomain.min), yLeft = l.yValue(xDomain.min), yRight = l.yValue(xDomain.max);
                    // add endpoints on the left or right sides, including the corners
                    if (yDomain.contains(yLeft)) {
                        points.push({ x: xDomain.min, y: yLeft });
                    }
                    if (yDomain.contains(yRight)) {
                        points.push({ x: xDomain.max, y: yRight });
                    }
                    // add endpoints on the top or bottom, not including the corners
                    if (xDomain.contains(xBottom, true)) {
                        points.push({ x: xBottom, y: yDomain.min });
                    }
                    if (xDomain.contains(xTop, true)) {
                        points.push({ x: xTop, y: yDomain.max });
                    }
                    // A maximimum of two points should have been added. If not, something is wrong.
                    if (points.length > 2) {
                        console.log('Oh noes! More than two points! Investigate!');
                    }
                }
                return points;
            };
            return Linear;
        })(Functions.Base);
        Functions.Linear = Linear;
        var HorizontalLine = (function (_super) {
            __extends(HorizontalLine, _super);
            function HorizontalLine(definition, modelPath) {
                definition.coefficients = {
                    a: 0,
                    b: -1,
                    c: definition.y
                };
                _super.call(this, definition, modelPath);
            }
            return HorizontalLine;
        })(Linear);
        Functions.HorizontalLine = HorizontalLine;
        var VerticalLine = (function (_super) {
            __extends(VerticalLine, _super);
            function VerticalLine(definition, modelPath) {
                definition.coefficients = {
                    a: -1,
                    b: 0,
                    c: definition.x
                };
                _super.call(this, definition, modelPath);
            }
            return VerticalLine;
        })(Linear);
        Functions.VerticalLine = VerticalLine;
    })(Functions = KGMath.Functions || (KGMath.Functions = {}));
})(KGMath || (KGMath = {}));
/*
 A quadratic function is a special polynomial defined either with two points or a point and a slope.
 This function takes either of those and returns a polynomial of the form ax + by + c.
 The params object is of the form: { definitionType: '', param1: foo, param2: bar }
 */
var KGMath;
(function (KGMath) {
    var Functions;
    (function (Functions) {
        var Quadratic = (function (_super) {
            __extends(Quadratic, _super);
            function Quadratic(definition, modelPath) {
                definition.coefficients = definition.coefficients || { a: 1, b: 1, c: 1 };
                // extract coefficients from vertex and point
                if (definition.hasOwnProperty('vertex') && definition.hasOwnProperty('point')) {
                    // a = (p.y - vertex.y) / (p.x - vertex.x) ^ 2
                    var yDiff = KG.subtractDefs(definition.point.y, definition.vertex.y), xDiffSquared = KG.squareDef(KG.subtractDefs(definition.point.x, definition.vertex.x));
                    definition.coefficients.a = KG.divideDefs(yDiff, xDiffSquared);
                    // b = -2a*vertex.x
                    definition.coefficients.b = KG.multiplyDefs(-2, KG.multiplyDefs(definition.coefficients.a, definition.vertex.x));
                    // c = vertex.y + a*(vertex.x)^2
                    definition.coefficients.c = KG.addDefs(definition.vertex.y, KG.multiplyDefs(definition.coefficients.a, KG.squareDef(definition.vertex.x)));
                }
                _super.call(this, definition, modelPath);
                if (!definition.hasOwnProperty('vertex') && definition.coefficients.a != 0) {
                    var negativeB = KG.multiplyDefs(-1, definition.coefficients.b), twoA = KG.multiplyDefs(2, definition.coefficients.a), vertexX = KG.divideDefs(negativeB, twoA), vertexY = this.modelProperty('yValue(' + vertexX + ')');
                    definition.vertex = {
                        x: vertexX,
                        y: vertexY
                    };
                }
            }
            Quadratic.prototype._update = function (scope) {
                var q = this;
                q.discriminant = q.coefficients.b * q.coefficients.b - 4 * q.coefficients.a * q.coefficients.c;
                return q;
            };
            // The derivative of ax^2 + bx + c is 2ax + b
            Quadratic.prototype.derivative = function (n) {
                var coefficients = this.coefficients;
                return new Functions.Linear({
                    slope: KG.multiplyDefs(coefficients.a, 2),
                    intercept: coefficients.b
                });
            };
            // The integral of ax^2 + bx + c is (a/3)x^3 + (b/2)x^2 + cx + C
            Quadratic.prototype.integral = function (n, c, name) {
                var q = this, coefficients = this.coefficients;
                if (!c) {
                    c = 0;
                }
                name = name ? q.modelProperty(name) : null;
                return new Functions.Polynomial({
                    termDefs: [
                        {
                            coefficient: KG.divideDefs(coefficients.a, 3),
                            powers: [3]
                        },
                        {
                            coefficient: KG.divideDefs(coefficients.b, 2),
                            powers: [2]
                        },
                        {
                            coefficient: coefficients.c,
                            powers: [1]
                        },
                        {
                            coefficient: c,
                            powers: [0]
                        }
                    ]
                }, name);
            };
            // The average of ax^2 + bx + c is ax + b + cx^-2 + C
            Quadratic.prototype.average = function (n, name) {
                var q = this, coefficients = q.coefficients;
                name = name ? q.modelProperty(name) : null;
                return new Functions.Polynomial({
                    termDefs: [
                        {
                            coefficient: coefficients.a,
                            powers: [1]
                        },
                        {
                            coefficient: coefficients.b,
                            powers: [0]
                        },
                        {
                            coefficient: coefficients.c,
                            powers: [-1]
                        }
                    ]
                }, name);
            };
            Quadratic.prototype.multiply = function (x) {
                var q = this;
                return new Quadratic({
                    coefficients: {
                        a: KG.multiplyDefs(q.coefficients.a, x),
                        b: KG.multiplyDefs(q.coefficients.b, x),
                        c: KG.multiplyDefs(q.coefficients.c, x)
                    }
                });
            };
            Quadratic.prototype.add = function (x) {
                var q = this;
                return new Quadratic({
                    coefficients: {
                        a: q.coefficients.a,
                        b: q.coefficients.b,
                        c: KG.addDefs(q.coefficients.c, x)
                    }
                });
            };
            Quadratic.prototype.yValue = function (x) {
                var coefficients = this.coefficients;
                return coefficients.a * x * x + coefficients.b * x + coefficients.c;
            };
            Quadratic.prototype.differenceFromVertex = function (y) {
                var q = this, a = q.coefficients.a, b = q.coefficients.b, c = q.coefficients.c - y;
                if (b * b > 4 * a * c) {
                    return Math.abs(1 / (2 * a)) * Math.sqrt(b * b - 4 * a * c);
                }
                else {
                    return null;
                }
            };
            // for xValue, use higher real root of ax^2 + bx + c - y
            Quadratic.prototype.xValue = function (y) {
                var q = this;
                if (q.coefficients.a < 0) {
                    // downward facing parabola; real roots exist if y < vertex Y
                    if (y > q.vertex.y) {
                        return null;
                    }
                }
                else if (q.coefficients.a == 0) {
                    if (q.coefficients.b == 0) {
                        return null;
                    }
                    else {
                        return (y - q.coefficients.c) / q.coefficients.b;
                    }
                }
                else {
                    if (y < q.vertex.y) {
                        return null;
                    }
                }
                return q.vertex.x + this.differenceFromVertex(y);
            };
            Quadratic.prototype.points = function (view, yIsIndependent, numSamplePoints) {
                var q = this, points = [];
                numSamplePoints = numSamplePoints || 51;
                if (q.coefficients.a == 0) {
                    var l = new KGMath.Functions.Linear({
                        coefficients: {
                            a: q.coefficients.b,
                            b: -1,
                            c: q.coefficients.c
                        }
                    });
                    return l.points(view);
                }
                var inverse = (q.coefficients.a < 0);
                var xDomain, yDomain;
                if (yIsIndependent) {
                    xDomain = inverse ? new KG.Domain(view.xAxis.min, q.vertex.y) : new KG.Domain(q.vertex.y, view.xAxis.max);
                    yDomain = view.yAxis.domain;
                }
                else {
                    xDomain = view.xAxis.domain;
                    yDomain = inverse ? new KG.Domain(view.yAxis.min, q.vertex.y) : new KG.Domain(q.vertex.y, view.yAxis.max);
                }
                var xSamplePoints = xDomain.samplePoints(numSamplePoints), ySamplePoints = yDomain.samplePoints(numSamplePoints);
                for (var i = 0; i < numSamplePoints; i++) {
                    var x = xSamplePoints[i];
                    var y = ySamplePoints[i];
                    if (yIsIndependent) {
                        var xOfY = q.yValue(y);
                        if (view.onGraph({ x: xOfY, y: y })) {
                            points.push({ x: xOfY, y: y });
                        }
                        ;
                        var yLow = q.vertex.x - q.differenceFromVertex(x);
                        if (view.onGraph({ x: x, y: yLow })) {
                            points.push({ x: x, y: yLow });
                        }
                        ;
                        var yHigh = q.vertex.x + q.differenceFromVertex(x);
                        if (view.onGraph({ x: x, y: yHigh })) {
                            points.push({ x: x, y: yHigh });
                        }
                        ;
                    }
                    else {
                        var yOfX = q.yValue(x);
                        if (view.onGraph({ x: x, y: yOfX })) {
                            points.push({ x: x, y: yOfX });
                        }
                        ;
                        var xLow = q.vertex.x - q.differenceFromVertex(y);
                        if (view.onGraph({ x: xLow, y: y })) {
                            points.push({ x: xLow, y: y });
                        }
                        ;
                        var xHigh = q.vertex.x + q.differenceFromVertex(y);
                        if (view.onGraph({ x: xHigh, y: y })) {
                            points.push({ x: xHigh, y: y });
                        }
                        ;
                    }
                }
                if (yIsIndependent) {
                    return points.sort(KG.sortObjects('y'));
                }
                else {
                    return points.sort(KG.sortObjects('x'));
                }
            };
            return Quadratic;
        })(Functions.Base);
        Functions.Quadratic = Quadratic;
    })(Functions = KGMath.Functions || (KGMath.Functions = {}));
})(KGMath || (KGMath = {}));
/// <reference path="../kg.ts"/>
/// <reference path="functions/base.ts"/>
/// <reference path="functions/implicit.ts"/>
/// <reference path="functions/relation.ts"/>
/// <reference path="functions/monomial.ts"/>
/// <reference path="functions/polynomial.ts"/>
/// <reference path="functions/linear.ts"/>
/// <reference path="functions/quadratic.ts"/>
/// <reference path="../kg.ts"/>
'use strict';
var KG;
(function (KG) {
    var ViewObject = (function (_super) {
        __extends(ViewObject, _super);
        function ViewObject(definition, modelPath) {
            if (definition.hasOwnProperty('params')) {
                var p = definition.params;
                if (p.hasOwnProperty('className')) {
                    if (definition.hasOwnProperty('className')) {
                        definition.className += ' ' + p.className;
                    }
                    else {
                        definition.className = p.className;
                    }
                }
                if (p.hasOwnProperty('name')) {
                    if (definition.hasOwnProperty('name')) {
                        definition.name += '_' + p.name;
                    }
                    else {
                        definition.name = p.name;
                    }
                }
                if (p.hasOwnProperty('xDrag')) {
                    definition.xDrag = p.xDrag;
                }
                if (p.hasOwnProperty('xDragParam')) {
                    definition.yDrag = p.yDrag;
                }
            }
            definition = _.defaults(definition, {
                name: '',
                className: '',
                color: KG.colorForClassName(definition.className),
                show: true,
                xDrag: false,
                yDrag: false
            });
            _super.call(this, definition, modelPath);
            var viewObj = this;
            /* Set drag behavior on object */
            viewObj.xDragDelta = 0;
            viewObj.yDragDelta = 0;
            if (definition.xDrag) {
                if (typeof definition.xDrag == 'string') {
                    viewObj.xDragParam = definition.xDrag.replace('params.', '');
                    viewObj.xDrag = true;
                }
                else if (definition.hasOwnProperty('coordinates') && typeof definition.coordinates.x == 'string') {
                    this.xDragParam = definition.coordinates.x.replace('params.', '');
                }
            }
            if (definition.yDrag) {
                if (typeof definition.yDrag == 'string') {
                    viewObj.yDragParam = definition.yDrag.replace('params.', '');
                    viewObj.yDrag = true;
                }
                else if (definition.hasOwnProperty('coordinates') && typeof definition.coordinates.y == 'string') {
                    this.yDragParam = definition.coordinates.y.replace('params.', '');
                }
            }
        }
        ViewObject.prototype.classAndVisibility = function () {
            var classString = this.viewObjectClass;
            if (this.className) {
                classString += ' ' + this.className;
            }
            if (this.show) {
                classString += ' visible';
            }
            else {
                classString += ' invisible';
            }
            return classString;
        };
        ViewObject.prototype.updateDataForView = function (view) {
            return this;
        };
        ViewObject.prototype.addArrow = function (group, startOrEnd) {
            group.attr("marker-" + startOrEnd, "url(#arrow-" + startOrEnd + "-" + this.color + ")");
        };
        ViewObject.prototype.removeArrow = function (group, startOrEnd) {
            group.attr("marker-" + startOrEnd, null);
        };
        ViewObject.prototype.render = function (view) {
            return view; // overridden by child class
        };
        ViewObject.prototype.createSubObjects = function (view) {
            return view; // overridden by child class
        };
        ViewObject.prototype.initGroupFn = function () {
            var viewObjectSVGtype = this.viewObjectSVGtype, viewObjectClass = this.viewObjectClass;
            return function (newGroup) {
                newGroup.append(viewObjectSVGtype).attr('class', viewObjectClass);
                return newGroup;
            };
        };
        ViewObject.prototype.setDragBehavior = function (view, obj) {
            var viewObj = this;
            obj.style('cursor', viewObj.xDrag ? (viewObj.yDrag ? 'move' : 'ew-resize') : 'ns-resize');
            obj.call(view.drag(viewObj.xDragParam, viewObj.yDragParam, viewObj.xDragDelta, viewObj.yDragDelta));
            return view;
        };
        return ViewObject;
    })(KG.Model);
    KG.ViewObject = ViewObject;
})(KG || (KG = {}));
/// <reference path="../kg.ts"/>
'use strict';
var KG;
(function (KG) {
    var Point = (function (_super) {
        __extends(Point, _super);
        function Point(definition, modelPath) {
            if (definition.hasOwnProperty('params')) {
                var p = definition.params;
                if (p.hasOwnProperty('label')) {
                    definition.label = {
                        text: p.label
                    };
                }
                if (p.hasOwnProperty('xAxisLabel') || p.hasOwnProperty('yAxisLabel')) {
                    if (!definition.hasOwnProperty('droplines')) {
                        definition.droplines = {};
                    }
                    if (p.hasOwnProperty('xAxisLabel')) {
                        definition.droplines.vertical = p.xAxisLabel;
                    }
                    if (p.hasOwnProperty('yAxisLabel')) {
                        definition.droplines.horizontal = p.yAxisLabel;
                    }
                }
            }
            var defaultSize = 100;
            if (definition.hasOwnProperty('label')) {
                if (definition.label.hasOwnProperty('text')) {
                    if (definition.label.text.length > 0) {
                        defaultSize = 500;
                    }
                }
            }
            definition = _.defaults(definition, {
                coordinates: { x: 0, y: 0 },
                size: defaultSize,
                symbol: 'circle'
            });
            _super.call(this, definition, modelPath);
            if (definition.label) {
                var labelDef = _.defaults(definition.label, {
                    name: definition.name + '_label',
                    coordinates: definition.coordinates,
                    xDrag: definition.xDrag,
                    yDrag: definition.yDrag,
                    show: definition.show
                });
                if (!labelDef.hasOwnProperty('align')) {
                    labelDef.className = 'pointLabel';
                }
                this.labelDiv = new KG.GraphDiv(labelDef);
            }
            if (definition.droplines) {
                if (definition.droplines.hasOwnProperty('horizontal')) {
                    this.horizontalDropline = new KG.HorizontalDropline({
                        name: definition.name,
                        coordinates: definition.coordinates,
                        draggable: definition.yDrag,
                        axisLabel: definition.droplines.horizontal,
                        className: definition.className,
                        show: definition.show
                    });
                }
                if (definition.droplines.hasOwnProperty('vertical')) {
                    this.verticalDropline = new KG.VerticalDropline({
                        name: definition.name,
                        coordinates: definition.coordinates,
                        draggable: definition.xDrag,
                        axisLabel: definition.droplines.vertical,
                        className: definition.className,
                        show: definition.show
                    });
                }
            }
            this.viewObjectSVGtype = 'path';
            this.viewObjectClass = 'pointSymbol';
        }
        Point.prototype.createSubObjects = function (view) {
            var p = this;
            if (view instanceof KG.TwoVerticalGraphs) {
                if (p.labelDiv) {
                    view.topGraph.addObject(p.labelDiv);
                }
                if (p.verticalDropline) {
                    var continuationDropLine = new KG.VerticalDropline({
                        name: p.verticalDropline.name,
                        className: p.verticalDropline.className,
                        coordinates: { x: p.verticalDropline.definition.coordinates.x, y: view.bottomGraph.yAxis.domain.max },
                        draggable: p.verticalDropline.draggable,
                        axisLabel: p.verticalDropline.axisLabel
                    });
                    p.verticalDropline.labelDiv = null;
                    view.topGraph.addObject(p.verticalDropline);
                    view.bottomGraph.addObject(continuationDropLine);
                    p.verticalDropline.createSubObjects(view.topGraph); // TODO should probably make this more recursive by default
                    continuationDropLine.createSubObjects(view.bottomGraph);
                }
                if (p.horizontalDropline) {
                    view.topGraph.addObject(p.horizontalDropline);
                    p.horizontalDropline.createSubObjects(view.topGraph); // TODO should probably make this more recursive by default
                }
            }
            else {
                if (p.labelDiv) {
                    view.addObject(p.labelDiv);
                }
                if (p.verticalDropline) {
                    view.addObject(p.verticalDropline);
                    p.verticalDropline.createSubObjects(view); // TODO should probably make this more recursive by default
                }
                if (p.horizontalDropline) {
                    view.addObject(p.horizontalDropline);
                    p.horizontalDropline.createSubObjects(view); // TODO should probably make this more recursive by default
                }
            }
            return view;
        };
        Point.prototype.render = function (view) {
            var point = this, draggable = (point.xDrag || point.yDrag);
            var subview = (view instanceof KG.TwoVerticalGraphs) ? view.topGraph : view;
            if (!point.hasOwnProperty('coordinates')) {
                return view;
            }
            if (isNaN(point.coordinates.x) || isNaN(point.coordinates.y) || point.coordinates.x == Infinity || point.coordinates.y == Infinity) {
                return view;
            }
            var group = subview.objectGroup(point.name, point.initGroupFn(), true);
            if (!subview.onGraph(point.coordinates)) {
                point.show = false;
            }
            if (point.symbol === 'none') {
                point.show = false;
                point.labelDiv.show = false;
            }
            // draw the symbol at the point
            var pointSymbol = group.select('.' + point.viewObjectClass);
            try {
                pointSymbol.attr({
                    'class': point.classAndVisibility(),
                    'fill': point.color,
                    'd': d3.svg.symbol().type(point.symbol).size(point.size),
                    'transform': subview.translateByCoordinates(point.coordinates)
                });
            }
            catch (error) {
                console.log(error);
            }
            if (draggable) {
                return point.setDragBehavior(subview, pointSymbol);
            }
            else {
                return view;
            }
            return view;
        };
        return Point;
    })(KG.ViewObject);
    KG.Point = Point;
})(KG || (KG = {}));
/// <reference path="../kg.ts"/>
'use strict';
var KG;
(function (KG) {
    var Dropline = (function (_super) {
        __extends(Dropline, _super);
        function Dropline(definition, modelPath) {
            definition.coordinates = KG.getCoordinates(definition.coordinates);
            definition = _.defaults(definition, {
                horizontal: false,
                draggable: false,
                axisLabel: ''
            });
            _super.call(this, definition, modelPath);
            if (definition.axisLabel.length > 0) {
                var labelDef = {
                    name: definition.name + '_label',
                    className: definition.className,
                    text: definition.axisLabel,
                    dimensions: { width: 60, height: 20 },
                    backgroundColor: 'white',
                    show: definition.show
                };
                if (definition.horizontal) {
                    labelDef.coordinates = {
                        x: KG.GraphDiv.AXIS_COORDINATE_INDICATOR,
                        y: definition.coordinates.y
                    };
                    labelDef.yDrag = definition.draggable;
                }
                else {
                    labelDef.coordinates = {
                        x: definition.coordinates.x,
                        y: KG.GraphDiv.AXIS_COORDINATE_INDICATOR
                    };
                    labelDef.xDrag = definition.draggable;
                }
                this.labelDiv = new KG.GraphDiv(labelDef);
            }
            this.viewObjectSVGtype = 'line';
            this.viewObjectClass = 'dropline';
        }
        Dropline.prototype.createSubObjects = function (view) {
            var p = this;
            if (p.labelDiv) {
                view.addObject(p.labelDiv);
            }
            return view;
        };
        Dropline.prototype.render = function (view) {
            var dropline = this;
            var pointX = view.xAxis.scale(dropline.coordinates.x), pointY = view.yAxis.scale(dropline.coordinates.y), anchorX = dropline.horizontal ? view.xAxis.scale(view.xAxis.min) : pointX, anchorY = dropline.horizontal ? pointY : view.yAxis.scale(view.yAxis.min);
            if (isNaN(pointX) || isNaN(pointY)) {
                return view;
            }
            var group = view.objectGroup(dropline.name, dropline.initGroupFn(), false);
            var droplineSelection = group.select('.' + dropline.viewObjectClass);
            droplineSelection.attr({
                'x1': anchorX,
                'y1': anchorY,
                'x2': pointX,
                'y2': pointY,
                'class': dropline.classAndVisibility()
            });
            return view;
        };
        return Dropline;
    })(KG.ViewObject);
    KG.Dropline = Dropline;
    var VerticalDropline = (function (_super) {
        __extends(VerticalDropline, _super);
        function VerticalDropline(definition, modelPath) {
            definition.name += '_vDropline';
            definition.horizontal = false;
            _super.call(this, definition, modelPath);
        }
        return VerticalDropline;
    })(Dropline);
    KG.VerticalDropline = VerticalDropline;
    var HorizontalDropline = (function (_super) {
        __extends(HorizontalDropline, _super);
        function HorizontalDropline(definition, modelPath) {
            definition.name += '_hDropline';
            definition.horizontal = true;
            _super.call(this, definition, modelPath);
        }
        return HorizontalDropline;
    })(Dropline);
    KG.HorizontalDropline = HorizontalDropline;
})(KG || (KG = {}));
/// <reference path="../kg.ts"/>
'use strict';
var KG;
(function (KG) {
    var Curve = (function (_super) {
        __extends(Curve, _super);
        function Curve(definition, modelPath) {
            definition = _.defaults(definition, { data: [], interpolation: 'linear' });
            _super.call(this, definition, modelPath);
            if (definition.label) {
                var labelDef = _.defaults(definition.label, {
                    name: definition.name + '_label',
                    className: definition.className,
                    xDrag: definition.xDrag,
                    yDrag: definition.yDrag,
                    color: definition.color,
                    show: definition.show
                });
                //console.log(labelDef);
                this.labelDiv = new KG.GraphDiv(labelDef);
            }
            this.startArrow = (definition.arrows == Curve.START_ARROW_STRING || definition.arrows == Curve.BOTH_ARROW_STRING);
            this.endArrow = (definition.arrows == Curve.END_ARROW_STRING || definition.arrows == Curve.BOTH_ARROW_STRING);
            this.viewObjectSVGtype = 'path';
            this.viewObjectClass = 'curve';
        }
        Curve.prototype.createSubObjects = function (view) {
            var labelDiv = this.labelDiv;
            if (labelDiv) {
                return view.addObject(labelDiv);
            }
            else {
                return view;
            }
        };
        Curve.prototype.positionLabel = function (view) {
            var curve = this;
            if (curve.labelDiv) {
                var labelViewCoordinates = (curve.labelPosition == Curve.LABEL_POSITION_START) ? curve.startPoint : (curve.labelPosition == Curve.LABEL_POSITION_MIDDLE) ? curve.midPoint : curve.endPoint;
                var labelCoordinates = view.modelCoordinates(_.clone(labelViewCoordinates));
                if (labelCoordinates.y > view.yAxis.domain.max) {
                    labelCoordinates.y = view.yAxis.domain.max;
                    curve.labelDiv.align = 'center';
                    curve.labelDiv.valign = 'bottom';
                }
                else if (labelCoordinates.x >= view.xAxis.domain.max) {
                    labelCoordinates.x = view.xAxis.domain.max;
                    curve.labelDiv.align = 'left';
                    curve.labelDiv.valign = 'middle';
                }
                else {
                    curve.labelDiv.align = (view.nearRight(labelCoordinates) || view.nearLeft(labelCoordinates)) || view.nearBottom(labelCoordinates) ? 'left' : 'center';
                    curve.labelDiv.valign = (view.nearTop(labelCoordinates) || view.nearBottom(labelCoordinates)) ? 'bottom' : 'middle';
                }
                curve.labelDiv.coordinates = labelCoordinates;
            }
        };
        Curve.prototype.addArrows = function (group) {
            var curve = this;
            var length = KG.distanceBetweenCoordinates(curve.startPoint, curve.endPoint);
            if (curve.endArrow && length > 0) {
                curve.addArrow(group, 'end');
            }
            else {
                curve.removeArrow(group, 'end');
            }
            if (curve.startArrow && length > 0) {
                curve.addArrow(group, 'start');
            }
            else {
                curve.removeArrow(group, 'start');
            }
        };
        Curve.prototype.render = function (view) {
            var curve = this;
            curve.updateDataForView(view);
            var dataCoordinates = view.dataCoordinates(curve.data);
            var dataLength = dataCoordinates.length;
            curve.startPoint = dataCoordinates[0];
            curve.endPoint = dataCoordinates[dataLength - 1];
            curve.midPoint = KG.medianDataPoint(dataCoordinates);
            var group = view.objectGroup(curve.name, curve.initGroupFn(), false);
            curve.addArrows(group);
            curve.positionLabel(view);
            var dataLine = d3.svg.line().interpolate(this.interpolation).x(function (d) {
                return d.x;
            }).y(function (d) {
                return d.y;
            });
            var dataPath = group.select('.' + curve.viewObjectClass);
            dataPath.attr({
                'class': curve.classAndVisibility(),
                'd': dataLine(dataCoordinates)
            });
            return view;
        };
        Curve.LABEL_POSITION_MIDDLE = 'MIDDLE';
        Curve.LABEL_POSITION_START = 'START';
        Curve.START_ARROW_STRING = 'START';
        Curve.END_ARROW_STRING = 'END';
        Curve.BOTH_ARROW_STRING = 'BOTH';
        return Curve;
    })(KG.ViewObject);
    KG.Curve = Curve;
})(KG || (KG = {}));
/// <reference path="../kg.ts"/>
'use strict';
var KG;
(function (KG) {
    var Segment = (function (_super) {
        __extends(Segment, _super);
        function Segment(definition, modelPath) {
            definition.labelPosition = KG.Curve.LABEL_POSITION_MIDDLE;
            definition.data = [KG.getCoordinates(definition.a), KG.getCoordinates(definition.b)];
            _super.call(this, definition, modelPath);
            this.viewObjectClass = 'segment';
        }
        return Segment;
    })(KG.Curve);
    KG.Segment = Segment;
})(KG || (KG = {}));
/// <reference path="../kg.ts"/>
'use strict';
var KG;
(function (KG) {
    var Arrow = (function (_super) {
        __extends(Arrow, _super);
        function Arrow(definition, modelPath) {
            definition.labelPosition = KG.Curve.LABEL_POSITION_MIDDLE;
            definition.data = [KG.getCoordinates(definition.begin), KG.getCoordinates(definition.end)];
            definition.arrows = KG.Curve.END_ARROW_STRING;
            _super.call(this, definition, modelPath);
            this.viewObjectClass = 'arrow';
        }
        return Arrow;
    })(KG.Curve);
    KG.Arrow = Arrow;
})(KG || (KG = {}));
/// <reference path="../kg.ts"/>
'use strict';
var KG;
(function (KG) {
    var Line = (function (_super) {
        __extends(Line, _super);
        function Line(definition, modelPath) {
            if (definition.hasOwnProperty('params')) {
                var p = definition.params;
                if (p.hasOwnProperty('label')) {
                    definition.label = {
                        text: p.label
                    };
                }
            }
            _super.call(this, definition, modelPath);
            var line = this;
            if (line instanceof HorizontalLine) {
                line.linear = new KGMath.Functions.HorizontalLine({ y: definition.y });
            }
            else if (line instanceof VerticalLine) {
                line.linear = new KGMath.Functions.VerticalLine({ x: definition.x });
            }
            else if (definition.hasOwnProperty('lineDef')) {
                line.linear = new KGMath.Functions.Linear(definition.lineDef);
            }
            line.viewObjectSVGtype = 'path';
            line.viewObjectClass = 'line';
            if (definition.label) {
                var labelDef = _.defaults(definition.label, {
                    name: definition.name + '_label',
                    className: definition.className,
                    xDrag: definition.xDrag,
                    yDrag: definition.yDrag,
                    color: definition.color,
                    show: definition.show
                });
                //console.log(labelDef);
                line.labelDiv = new KG.GraphDiv(labelDef);
            }
            if (definition.hasOwnProperty('xInterceptLabel')) {
                var xInterceptLabelDef = {
                    name: definition.name + 'x_intercept_label',
                    color: definition.color,
                    text: definition.xInterceptLabel,
                    dimensions: { width: 30, height: 20 },
                    xDrag: definition.xDrag,
                    backgroundColor: 'white'
                };
                line.xInterceptLabelDiv = new KG.GraphDiv(xInterceptLabelDef);
            }
            if (definition.hasOwnProperty('yInterceptLabel')) {
                var yInterceptLabelDef = {
                    name: definition.name + 'y_intercept_label',
                    color: definition.color,
                    text: definition.xInterceptLabel,
                    dimensions: { width: 30, height: 20 },
                    yDrag: definition.yDrag,
                    backgroundColor: 'white'
                };
                line.yInterceptLabelDiv = new KG.GraphDiv(yInterceptLabelDef);
            }
        }
        Line.prototype._update = function (scope) {
            this.linear.update(scope);
            return this;
        };
        Line.prototype.createSubObjects = function (view) {
            var line = this;
            if (line.xInterceptLabelDiv) {
                view.addObject(line.xInterceptLabelDiv);
            }
            if (line.yInterceptLabelDiv) {
                view.addObject(line.yInterceptLabelDiv);
            }
            if (line.labelDiv) {
                view.addObject(line.labelDiv);
            }
            return view;
        };
        Line.prototype.render = function (view) {
            var NO_ARROW_STRING = 'NONE', BOTH_ARROW_STRING = 'BOTH', OPEN_ARROW_STRING = 'OPEN';
            var line = this, linear = this.linear, draggable = (line.xDrag || line.yDrag);
            var group = view.objectGroup(line.name, line.initGroupFn(), false);
            var startPoint = linear.points(view)[0], endPoint = linear.points(view)[1];
            var yIntercept = (startPoint.x == view.xAxis.min) ? startPoint : (endPoint.x == view.xAxis.min) ? endPoint : null;
            var xIntercept = (startPoint.y == view.yAxis.min) ? startPoint : (endPoint.y == view.yAxis.min) ? endPoint : null;
            var startIsOpen = (startPoint !== yIntercept && startPoint !== xIntercept);
            var endIsOpen = (endPoint !== yIntercept && endPoint !== xIntercept);
            if (line.arrows == BOTH_ARROW_STRING) {
                line.addArrow(group, 'start');
                line.addArrow(group, 'end');
            }
            else if (line.arrows == OPEN_ARROW_STRING) {
                if (startIsOpen) {
                    line.addArrow(group, 'start');
                }
                else {
                    line.removeArrow(group, 'start');
                }
                if (endIsOpen) {
                    line.addArrow(group, 'end');
                }
                else {
                    line.removeArrow(group, 'end');
                }
            }
            else if (line.arrows == NO_ARROW_STRING) {
                line.removeArrow(group, 'start');
                line.removeArrow(group, 'end');
            }
            if (line.labelDiv) {
                // If one end of the line is open, label that point
                if (endIsOpen || startIsOpen) {
                    line.labelDiv.coordinates = endIsOpen ? _.clone(endPoint) : _.clone(startPoint);
                    if (line.labelDiv.coordinates.x == view.xAxis.max) {
                        line.labelDiv.align = 'left';
                        line.labelDiv.valign = 'middle';
                    }
                    else {
                        line.labelDiv.align = 'center';
                        line.labelDiv.valign = 'bottom';
                    }
                }
                else {
                    var yLevel = view.yAxis.min + (view.yAxis.max - view.yAxis.min) * 0.05;
                    line.labelDiv.coordinates = {
                        x: linear.xValue(yLevel),
                        y: yLevel
                    };
                    line.labelDiv.valign = 'bottom';
                    line.labelDiv.align = (linear.slope > 0) ? 'right' : 'left';
                }
            }
            if (line.xInterceptLabelDiv && xIntercept) {
                line.xInterceptLabelDiv.coordinates = { x: xIntercept.x, y: 'AXIS' };
            }
            if (line.yInterceptLabelDiv && yIntercept) {
                line.yInterceptLabelDiv.coordinates = { x: 'AXIS', y: yIntercept.y };
            }
            var dataLine = d3.svg.line().x(function (d) {
                return view.xAxis.scale(d.x);
            }).y(function (d) {
                return view.yAxis.scale(d.y);
            });
            var lineSelection = group.select('.' + line.viewObjectClass);
            lineSelection.attr({
                'class': line.classAndVisibility(),
                'd': dataLine([startPoint, endPoint]),
                'stroke': line.color
            });
            if (draggable) {
                return line.setDragBehavior(view, lineSelection);
            }
            else {
                return view;
            }
        };
        return Line;
    })(KG.ViewObject);
    KG.Line = Line;
    var VerticalLine = (function (_super) {
        __extends(VerticalLine, _super);
        function VerticalLine(definition, modelPath) {
            _super.call(this, definition, modelPath);
        }
        return VerticalLine;
    })(Line);
    KG.VerticalLine = VerticalLine;
    var HorizontalLine = (function (_super) {
        __extends(HorizontalLine, _super);
        function HorizontalLine(definition, modelPath) {
            _super.call(this, definition, modelPath);
        }
        return HorizontalLine;
    })(Line);
    KG.HorizontalLine = HorizontalLine;
})(KG || (KG = {}));
/// <reference path="../kg.ts"/>
'use strict';
var KG;
(function (KG) {
    var GraphDiv = (function (_super) {
        __extends(GraphDiv, _super);
        function GraphDiv(definition, modelPath) {
            definition = _.defaults(definition, {
                dimensions: { width: 100, height: 20 },
                text: '',
                color: KG.colorForClassName(definition.className)
            });
            _super.call(this, definition, modelPath);
        }
        GraphDiv.prototype.render = function (view) {
            var divObj = this;
            if (!divObj.hasOwnProperty('coordinates')) {
                return view;
            }
            var x, y;
            if (divObj.coordinates.x == GraphDiv.AXIS_COORDINATE_INDICATOR) {
                x = view.margins.left - view.yAxis.textMargin;
                divObj.align = 'right';
                divObj.valign = 'middle';
                if (!view.yAxis.domain.contains(divObj.coordinates.y)) {
                    divObj.className = 'invisible';
                }
            }
            else {
                x = view.margins.left + view.xAxis.scale(divObj.coordinates.x);
            }
            if (divObj.coordinates.y == GraphDiv.AXIS_COORDINATE_INDICATOR) {
                y = view.dimensions.height - view.margins.bottom + view.xAxis.textMargin;
                divObj.align = 'center';
                divObj.valign = 'top';
                if (!view.xAxis.domain.contains(divObj.coordinates.x)) {
                    divObj.className = 'invisible';
                }
            }
            else {
                y = view.margins.top + view.yAxis.scale(divObj.coordinates.y);
            }
            var width = divObj.dimensions.width, height = divObj.dimensions.height, text = divObj.text, draggable = (divObj.xDrag || divObj.yDrag);
            var div = view.getDiv(this.name);
            div.style('cursor', 'default').style('text-align', 'center').style('position', 'absolute').style('width', width + 'px').style('height', height + 'px').style('line-height', height + 'px').style('background-color', divObj.backgroundColor).attr('class', divObj.classAndVisibility());
            // Set left pixel margin; default to centered on x coordinate
            var alignDelta = width * 0.5;
            if (divObj.align == 'left') {
                alignDelta = 0;
                div.style('text-align', 'left');
            }
            else if (this.align == 'right') {
                // move left by half the width of the div if right aligned
                alignDelta = width;
                div.style('text-align', 'right');
            }
            div.style('left', (x - alignDelta) + 'px');
            // Set top pixel margin; default to centered on y coordinate
            var vAlignDelta = height * 0.5;
            // Default to centered on x coordinate
            if (this.valign == 'top') {
                vAlignDelta = 0;
            }
            else if (this.valign == 'bottom') {
                vAlignDelta = height;
            }
            div.style('top', (y - vAlignDelta) + 'px');
            katex.render(text.toString(), div[0][0]);
            if (draggable) {
                return divObj.setDragBehavior(view, div);
            }
            else {
                return view;
            }
        };
        GraphDiv.AXIS_COORDINATE_INDICATOR = 'AXIS';
        return GraphDiv;
    })(KG.ViewObject);
    KG.GraphDiv = GraphDiv;
})(KG || (KG = {}));
/// <reference path="../kg.ts"/>
'use strict';
var KG;
(function (KG) {
    var LinePlot = (function (_super) {
        __extends(LinePlot, _super);
        function LinePlot(definition, modelPath) {
            _super.call(this, definition, modelPath);
            this.viewObjectSVGtype = 'path';
            this.viewObjectClass = 'dataPath';
        }
        return LinePlot;
    })(KG.Curve);
    KG.LinePlot = LinePlot;
})(KG || (KG = {}));
/// <reference path="../kg.ts"/>
'use strict';
var KG;
(function (KG) {
    var PathFamily = (function (_super) {
        __extends(PathFamily, _super);
        function PathFamily(definition, modelPath) {
            definition = _.defaults(definition, {
                data: [],
                interpolation: 'basis'
            });
            _super.call(this, definition, modelPath);
            this.viewObjectSVGtype = 'g';
            this.viewObjectClass = 'dataPathFamily';
        }
        PathFamily.prototype.render = function (view) {
            var pathFamily = this;
            var group = view.objectGroup(pathFamily.name, pathFamily.initGroupFn(), false);
            var dataLine = d3.svg.line().interpolate(this.interpolation).x(function (d) {
                return view.xAxis.scale(d.x);
            }).y(function (d) {
                return view.yAxis.scale(d.y);
            });
            var dataPaths = group.select('.' + pathFamily.viewObjectClass).selectAll('path').data(this.data);
            dataPaths.enter().append('path');
            dataPaths.attr({
                'd': function (d) {
                    return dataLine(d);
                },
                'class': this.classAndVisibility()
            });
            dataPaths.exit().remove();
            return view;
        };
        return PathFamily;
    })(KG.ViewObject);
    KG.PathFamily = PathFamily;
})(KG || (KG = {}));
/// <reference path="../kg.ts"/>
'use strict';
var KG;
(function (KG) {
    var FunctionPlot = (function (_super) {
        __extends(FunctionPlot, _super);
        function FunctionPlot(definition, modelPath) {
            definition = _.defaults(definition, { yIsIndependent: false, interpolation: 'linear', numSamplePoints: 51 });
            _super.call(this, definition, modelPath);
        }
        FunctionPlot.prototype._update = function (scope) {
            var p = this;
            p.fn.update(scope);
            return p;
        };
        FunctionPlot.prototype.updateDataForView = function (view) {
            var p = this;
            p.data = p.fn.points(view, p.yIsIndependent, p.numSamplePoints);
            return p;
        };
        return FunctionPlot;
    })(KG.Curve);
    KG.FunctionPlot = FunctionPlot;
})(KG || (KG = {}));
/// <reference path="../kg.ts"/>
'use strict';
var KG;
(function (KG) {
    var FunctionMap = (function (_super) {
        __extends(FunctionMap, _super);
        function FunctionMap(definition, modelPath) {
            definition = _.defaults(definition, { interpolation: 'basis', numSamplePoints: 51 });
            _super.call(this, definition, modelPath);
        }
        FunctionMap.prototype._update = function (scope) {
            var p = this;
            p.fn.update(scope);
            return p;
        };
        FunctionMap.prototype.updateDataForView = function (view) {
            var p = this;
            p.data = p.levels.map(function (level) {
                return p.fn.setLevel(level).points(view);
            });
            return p;
        };
        return FunctionMap;
    })(KG.PathFamily);
    KG.FunctionMap = FunctionMap;
})(KG || (KG = {}));
/// <reference path="../kg.ts"/>
'use strict';
var KG;
(function (KG) {
    var Area = (function (_super) {
        __extends(Area, _super);
        function Area(definition, modelPath) {
            definition = _.defaults(definition, { data: [], interpolation: 'linear' });
            _super.call(this, definition, modelPath);
            if (definition.label) {
                var labelDef = _.defaults(definition.label, {
                    name: definition.name + '_label',
                    className: definition.className,
                    xDrag: definition.xDrag,
                    yDrag: definition.yDrag,
                    color: definition.color,
                    show: definition.show
                });
                //console.log(labelDef);
                this.labelDiv = new KG.GraphDiv(labelDef);
            }
            this.viewObjectSVGtype = 'path';
            this.viewObjectClass = 'area';
        }
        Area.prototype.createSubObjects = function (view) {
            var labelDiv = this.labelDiv;
            if (labelDiv) {
                return view.addObject(labelDiv);
            }
            else {
                return view;
            }
        };
        Area.prototype.positionLabel = function (view) {
            var area = this;
            if (area.labelDiv) {
                area.labelDiv.coordinates = view.modelCoordinates(KG.arrayAverage(area.data));
            }
        };
        Area.prototype.render = function (view) {
            var area = this;
            area.updateDataForView(view);
            var dataCoordinates = view.dataCoordinates(area.data);
            var group = view.objectGroup(area.name, area.initGroupFn(), false);
            area.positionLabel(view);
            var dataLine = d3.svg.line().interpolate(this.interpolation).x(function (d) {
                return d.x;
            }).y(function (d) {
                return d.y;
            });
            var dataPath = group.select('.' + area.viewObjectClass);
            dataPath.attr({
                'class': area.classAndVisibility(),
                'd': dataLine(dataCoordinates)
            }).style('fill', KG.colorForClassName(area.className, 'light')).style('opacity', 0.5);
            return view;
        };
        return Area;
    })(KG.ViewObject);
    KG.Area = Area;
})(KG || (KG = {}));
/// <reference path='kg.ts'/>
'use strict';
var KG;
(function (KG) {
    var View = (function (_super) {
        __extends(View, _super);
        function View(definition, modelPath) {
            definition = _.defaults(definition, { background: 'white', mask: true });
            _super.call(this, definition, modelPath);
            if (definition.hasOwnProperty('xAxisDef')) {
                this.xAxis = new KG.XAxis(definition.xAxisDef);
            }
            if (definition.hasOwnProperty('yAxisDef')) {
                this.yAxis = new KG.YAxis(definition.yAxisDef);
            }
        }
        View.prototype.render = function (scope, redraw) {
            var view = this;
            view.update(scope, function () {
                view.updateParams = function (params) {
                    scope.updateParams(params);
                };
                if (redraw) {
                    view.redraw(scope);
                }
                else {
                    view.drawObjects(scope);
                }
            });
        };
        View.prototype.redraw = function (scope) {
            var view = this;
            // Establish dimensions of the view
            var element = $('#' + view.element_id)[0];
            view.dimensions = {
                width: Math.min(view.maxDimensions.width, element.clientWidth),
                height: Math.min(view.maxDimensions.height, window.innerHeight - (10 + $('#' + view.element_id).offset().top - $(window).scrollTop()))
            };
            var frameTranslation = KG.positionByPixelCoordinates({ x: (element.clientWidth - view.dimensions.width) / 2, y: 0 });
            var visTranslation = KG.translateByPixelCoordinates({ x: view.margins.left, y: view.margins.top });
            d3.select(element).select('div').remove();
            // Create new div element to contain SVG
            var frame = d3.select(element).append('div').attr({ style: frameTranslation });
            // Create new SVG element for the view visualization
            var svg = frame.append('svg').attr('width', view.dimensions.width).attr('height', view.dimensions.height);
            // Establish marker style for arrow
            var endMarkers = svg.append("svg:defs").selectAll("marker").data(KG.allColors()).enter().append("marker").attr("id", function (d) {
                return "arrow-end-" + d;
            }).attr("refX", 11).attr("refY", 6).attr("markerWidth", 13).attr("markerHeight", 13).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse");
            /*endMarkers.append("svg:rect")
                .attr('x',2)
                .attr('width', 11)
                .attr('height', 13)
                .attr('fill','white');*/
            endMarkers.append("svg:path").attr("d", "M2,2 L2,11 L10,6 L2,2").attr("fill", function (d) {
                return d;
            });
            // Establish marker style for arrow
            var startMarkers = svg.append("svg:defs").selectAll("marker").data(KG.allColors()).enter().append("svg:marker").attr("id", function (d) {
                return "arrow-start-" + d;
            }).attr("refX", 2).attr("refY", 6).attr("markerWidth", 13).attr("markerHeight", 13).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse");
            // TODO need a better way to mask the portion of the line that extends under the arrow
            /*startMarkers.append("svg:rect")
                .attr('x',2)
                .attr('width', 11)
                .attr('height', 13)*/
            startMarkers.append("svg:path").attr("d", "M11,2 L11,11 L2,6 L11,2").attr("fill", function (d) {
                return d;
            });
            // Add a div above the SVG for labels and controls
            view.divs = frame.append('div').attr({ style: visTranslation });
            if (view.mask) {
                // Establish SVG groups for visualization area (vis), mask, axes
                view.masked = svg.append('g').attr('transform', visTranslation);
                var mask = svg.append('g').attr('class', 'mask');
                // Put mask around vis to clip objects that extend beyond the desired viewable area
                mask.append('rect').attr({ x: 0, y: 0, width: view.dimensions.width, height: view.margins.top, fill: view.background });
                mask.append('rect').attr({ x: 0, y: view.dimensions.height - view.margins.bottom, width: view.dimensions.width, height: view.margins.bottom, fill: view.background });
                mask.append('rect').attr({ x: 0, y: 0, width: view.margins.left, height: view.dimensions.height, fill: view.background });
                mask.append('rect').attr({ x: view.dimensions.width - view.margins.right, y: 0, width: view.margins.right, height: view.dimensions.height, fill: view.background });
            }
            if (view.xAxis || view.yAxis) {
                // Establish SVG group for axes
                var axes = svg.append('g').attr('class', 'axes').attr('transform', visTranslation);
                // Establish dimensions of axes (element dimensions minus margins)
                var axisDimensions = {
                    width: view.dimensions.width - view.margins.left - view.margins.right,
                    height: view.dimensions.height - view.margins.top - view.margins.bottom
                };
                // draw axes
                if (view.xAxis) {
                    view.xAxis.update(scope).draw(axes, view.divs, axisDimensions, view.margins);
                }
                if (view.yAxis) {
                    view.yAxis.update(scope).draw(axes, view.divs, axisDimensions, view.margins);
                }
            }
            // Establish SVG group for objects that lie above the axes (e.g., points and labels)
            view.unmasked = svg.append('g').attr('transform', visTranslation);
            return view.drawObjects(scope);
        };
        View.prototype.drawObjects = function (scope) {
            var view = this;
            view.objects.forEach(function (object) {
                object.createSubObjects(view);
            });
            view.objects.forEach(function (object) {
                object.update(scope).render(view);
            });
            return view;
        };
        View.prototype.addObject = function (newObj) {
            this.objects.push(newObj);
        };
        View.prototype.updateParams = function (params) {
            console.log('updateParams called before scope applied');
        };
        View.prototype.objectGroup = function (name, init, unmasked) {
            var layer = unmasked ? this.unmasked : this.masked;
            var group = layer.select('#' + name);
            if (group.empty()) {
                group = layer.append('g').attr('id', name);
                group = init(group);
            }
            return group;
        };
        View.prototype.getDiv = function (name) {
            var selection = this.divs.select('#' + name);
            if (selection.empty()) {
                selection = this.divs.append('div').attr('id', name);
            }
            return selection;
        };
        View.prototype.xOnGraph = function (x) {
            return this.xAxis.domain.contains(x);
        };
        View.prototype.yOnGraph = function (y) {
            return this.yAxis.domain.contains(y);
        };
        View.prototype.nearTop = function (point) {
            return KG.isAlmostTo(point.y, this.yAxis.domain.max, 0.05);
        };
        View.prototype.nearRight = function (point) {
            return KG.isAlmostTo(point.x, this.xAxis.domain.max, 0.05);
        };
        View.prototype.nearBottom = function (point) {
            return KG.isAlmostTo(point.y, this.yAxis.domain.min, 0.05, this.yAxis.domain.max - this.yAxis.domain.min);
        };
        View.prototype.nearLeft = function (point) {
            return KG.isAlmostTo(point.x, this.xAxis.domain.min, 0.05, this.xAxis.domain.max - this.xAxis.domain.min);
        };
        View.prototype.drag = function (xParam, yParam, xDelta, yDelta) {
            var view = this;
            var xAxis = view.xAxis;
            var yAxis = view.yAxis;
            return d3.behavior.drag().on('drag', function () {
                d3.event.sourceEvent.preventDefault();
                var dragUpdate = {}, newX, newY;
                var relativeElement = view.unmasked[0][0], mouseX = d3.mouse(relativeElement)[0], mouseY = d3.mouse(relativeElement)[1];
                if (xAxis && xParam !== null) {
                    newX = xAxis.scale.invert(mouseX + xDelta);
                    if (newX < xAxis.domain.min) {
                        dragUpdate[xParam] = xAxis.domain.min;
                    }
                    else if (newX > xAxis.domain.max) {
                        dragUpdate[xParam] = xAxis.domain.max;
                    }
                    else {
                        dragUpdate[xParam] = newX;
                    }
                }
                if (yAxis && yParam !== null) {
                    newY = yAxis.scale.invert(mouseY + yDelta);
                    if (newY < yAxis.domain.min) {
                        dragUpdate[yParam] = yAxis.domain.min;
                    }
                    else if (newY > yAxis.domain.max) {
                        dragUpdate[yParam] = yAxis.domain.max;
                    }
                    else {
                        dragUpdate[yParam] = newY;
                    }
                }
                view.updateParams(dragUpdate);
            });
        };
        return View;
    })(KG.Model);
    KG.View = View;
})(KG || (KG = {}));
/// <reference path="../kg.ts" />
'use strict';
var KG;
(function (KG) {
    var Axis = (function (_super) {
        __extends(Axis, _super);
        function Axis(definition, modelPath) {
            definition = _.defaults(definition, {
                min: 0,
                max: 10,
                title: '',
                ticks: 5,
                textMargin: 8,
                axisBuffer: 30
            });
            _super.call(this, definition, modelPath);
            if (this.ticks == 0) {
                this.textMargin = 7;
            }
            this.domain = new KG.Domain(definition.min, definition.max);
        }
        Axis.prototype.draw = function (vis, divs, graph_definition, margins) {
            // overridden by child class
        };
        Axis.prototype._update = function (scope) {
            this.domain.min = this.min;
            this.domain.max = this.max;
            return this;
        };
        Axis.prototype.scaleFunction = function (pixelLength, domain) {
            return d3.scale.linear(); // overridden by child class
        };
        return Axis;
    })(KG.Model);
    KG.Axis = Axis;
    var XAxis = (function (_super) {
        __extends(XAxis, _super);
        function XAxis() {
            _super.apply(this, arguments);
        }
        XAxis.prototype.scaleFunction = function (pixelLength, domain) {
            return d3.scale.linear().range([0, pixelLength]).domain(domain.toArray());
        };
        XAxis.prototype.draw = function (vis, divs, graph_dimensions, margins) {
            this.scale = this.scaleFunction(graph_dimensions.width, this.domain);
            var axis_vis = vis.append('g').attr('class', 'x axis').attr("transform", "translate(0," + graph_dimensions.height + ")");
            axis_vis.call(d3.svg.axis().scale(this.scale).orient("bottom").ticks(this.ticks).tickValues(this.tickValues));
            var title = divs.append("div").style('text-align', 'center').style('position', 'absolute').style('width', graph_dimensions.width + 'px').style('height', (margins.bottom - this.axisBuffer) + 'px').style('left', margins.left + 'px').style('top', (margins.top + graph_dimensions.height + this.axisBuffer) + 'px').attr('class', 'medium');
            katex.render(this.title.toString(), title[0][0]);
        };
        return XAxis;
    })(Axis);
    KG.XAxis = XAxis;
    var YAxis = (function (_super) {
        __extends(YAxis, _super);
        function YAxis() {
            _super.apply(this, arguments);
        }
        YAxis.prototype.scaleFunction = function (pixelLength, domain) {
            return d3.scale.linear().range([pixelLength, 0]).domain(domain.toArray());
        };
        YAxis.prototype.draw = function (vis, divs, graph_dimensions, margins) {
            this.scale = this.scaleFunction(graph_dimensions.height, this.domain);
            var axis_vis = vis.append('g').attr('class', 'y axis');
            axis_vis.call(d3.svg.axis().scale(this.scale).orient("left").ticks(this.ticks).tickValues(this.tickValues));
            var title = divs.append("div").style('text-align', 'center').style('position', 'absolute').style('width', graph_dimensions.height + 'px').style('height', (margins.left - this.axisBuffer) + 'px').style('left', 0.5 * (margins.left - graph_dimensions.height - this.axisBuffer) + 'px').style('top', margins.top + 0.5 * (graph_dimensions.height - margins.left + this.axisBuffer) + 'px').style('-webkit-transform', 'rotate(-90deg)').style('transform', 'rotate(-90deg)').attr('class', 'medium');
            katex.render(this.title.toString(), title[0][0]);
        };
        return YAxis;
    })(Axis);
    KG.YAxis = YAxis;
})(KG || (KG = {}));
/// <reference path="../kg.ts"/>
'use strict';
var KG;
(function (KG) {
    var Graph = (function (_super) {
        __extends(Graph, _super);
        function Graph(definition, modelPath) {
            // ensure dimensions and margins are set; set any missing elements to defaults
            definition.maxDimensions = _.defaults(definition.maxDimensions || {}, { width: 800, height: 800 });
            definition.margins = _.defaults(definition.margins || {}, { top: 20, left: 100, bottom: 70, right: 20 });
            _super.call(this, definition, modelPath);
        }
        // Check to see if a point is on the graph
        Graph.prototype.onGraph = function (coordinates) {
            var ok = (coordinates != null) && (coordinates != undefined) && coordinates.hasOwnProperty('x') && coordinates.hasOwnProperty('y');
            if (!ok) {
                return false;
            }
            return (this.xOnGraph(coordinates.x) && this.yOnGraph(coordinates.y));
        };
        // Convert model coordinates to pixel coordinates for a single point
        Graph.prototype.pixelCoordinates = function (coordinates) {
            try {
                coordinates.x = this.xAxis.scale(coordinates.x);
                coordinates.y = this.yAxis.scale(coordinates.y);
            }
            catch (error) {
                console.log(error);
            }
            return coordinates;
        };
        // Convert pixel coordinates to model coordinates for a single point
        Graph.prototype.modelCoordinates = function (coordinates) {
            coordinates.x = this.xAxis.scale.invert(coordinates.x);
            coordinates.y = this.yAxis.scale.invert(coordinates.y);
            return coordinates;
        };
        // Transform pixel coordinates
        Graph.prototype.translateByCoordinates = function (coordinates) {
            return KG.translateByPixelCoordinates(this.pixelCoordinates(coordinates));
        };
        Graph.prototype.positionByCoordinates = function (coordinates, dimension) {
            return KG.positionByPixelCoordinates(this.pixelCoordinates(coordinates), dimension);
        };
        // Convert model coordinates to pixel coordinates for an array of points
        Graph.prototype.dataCoordinates = function (coordinateArray) {
            var graph = this;
            return coordinateArray.map(graph.pixelCoordinates, graph);
        };
        return Graph;
    })(KG.View);
    KG.Graph = Graph;
})(KG || (KG = {}));
/// <reference path="../kg.ts"/>
'use strict';
var KG;
(function (KG) {
    var TwoVerticalGraphs = (function (_super) {
        __extends(TwoVerticalGraphs, _super);
        function TwoVerticalGraphs(definition, modelPath) {
            // ensure dimensions and margins are set; set any missing elements to defaults
            definition.maxDimensions = _.defaults(definition.maxDimensions || {}, { width: 800, height: 800 });
            _super.call(this, definition, modelPath);
            // if top and bottom graphs share a common x axis, create axis elements
            if (definition.hasOwnProperty('xAxisDef')) {
                definition.topGraph.xAxisDef = _.clone(definition.xAxisDef);
                definition.topGraph.xAxisDef.title = '';
                definition.topGraph.margins = _.defaults(definition.topGraph.margins || {}, { top: 20, left: 100, bottom: 20, right: 20 });
                definition.bottomGraph.xAxisDef = _.clone(definition.xAxisDef);
                definition.bottomGraph.margins = _.defaults(definition.bottomGraph.margins || {}, { top: 20, left: 100, bottom: 70, right: 20 });
            }
            // establish definition for top and bottom graphs
            definition.topGraph.element_id = definition.element_id + '_top';
            this.topGraph = new KG.Graph(definition.topGraph);
            definition.bottomGraph.element_id = definition.element_id + '_bottom';
            this.bottomGraph = new KG.Graph(definition.bottomGraph);
        }
        TwoVerticalGraphs.prototype.redraw = function (scope) {
            var view = this;
            // Establish dimensions of the view
            var element = $('#' + view.element_id)[0];
            view.dimensions = {
                width: Math.min(view.maxDimensions.width, element.clientWidth),
                height: Math.min(view.maxDimensions.height, window.innerHeight - (10 + $('#' + view.element_id).offset().top - $(window).scrollTop()))
            };
            var graphHeight = view.dimensions.height / 2;
            var bottomGraphTranslation = KG.translateByPixelCoordinates({ x: 0, y: graphHeight });
            d3.select(element).select('div').remove();
            // Create new div element to contain SVG
            var frame = d3.select(element).append('div');
            frame.append('div').attr('id', view.topGraph.element_id);
            frame.append('div').attr({ 'id': view.bottomGraph.element_id, 'style': bottomGraphTranslation });
            view.topGraph.maxDimensions.height = graphHeight;
            view.bottomGraph.maxDimensions.height = graphHeight;
            view.topGraph.updateParams = view.updateParams;
            view.bottomGraph.updateParams = view.updateParams;
            view.bottomGraph.redraw(scope);
            view.topGraph.redraw(scope);
            return view.drawObjects(scope);
        };
        TwoVerticalGraphs.prototype.drawObjects = function (scope) {
            var view = this;
            view.topGraph.drawObjects(scope);
            view.bottomGraph.drawObjects(scope);
            if (view.hasOwnProperty('objects')) {
                view.objects.forEach(function (object) {
                    object.createSubObjects(view);
                });
                view.objects.forEach(function (object) {
                    object.update(scope).render(view);
                });
                view.topGraph.objects.forEach(function (object) {
                    object.update(scope).render(view.topGraph);
                });
                view.bottomGraph.objects.forEach(function (object) {
                    object.update(scope).render(view.bottomGraph);
                });
            }
            return view;
        };
        return TwoVerticalGraphs;
    })(KG.View);
    KG.TwoVerticalGraphs = TwoVerticalGraphs;
})(KG || (KG = {}));
/// <reference path="../kg.ts"/>
'use strict';
var KG;
(function (KG) {
    var Slider = (function (_super) {
        __extends(Slider, _super);
        function Slider(definition, modelPath) {
            definition.maxDimensions = _.defaults(definition.maxDimensions || {}, { width: 500, height: 50 });
            definition.margins = _.defaults(definition.margins || {}, { top: 25, left: 25, bottom: 25, right: 25 });
            definition.mask = false;
            _super.call(this, definition, modelPath);
            this.xAxis = new KG.XAxis(definition.axisDef);
            this.objects = [
                new SliderControl({ name: definition.element_id + 'Ctrl', param: 'params.' + definition.param })
            ];
        }
        Slider.prototype._update = function (scope) {
            this.xAxis.update(scope);
            return this;
        };
        Slider.prototype.onGraph = function (coordinates) {
            return true;
        };
        return Slider;
    })(KG.View);
    KG.Slider = Slider;
    var SliderControl = (function (_super) {
        __extends(SliderControl, _super);
        function SliderControl(definition, modelPath) {
            definition.xDrag = true;
            definition.yDrag = false;
            definition.coordinates = { x: definition.param, y: 0 };
            _super.call(this, definition, modelPath);
            this.viewObjectSVGtype = 'g';
            this.viewObjectClass = 'sliderControl';
        }
        SliderControl.prototype.render = function (view) {
            var control = this;
            var group = view.objectGroup(control.name, control.initGroupFn(), true);
            var controlGroup = group.select('.' + control.viewObjectClass);
            var controlSquare = controlGroup.selectAll('rect').data([0]);
            controlSquare.enter().append('rect').attr({
                opacity: 0,
                y: -view.dimensions.height * 0.5,
                width: 50,
                height: view.dimensions.height
            });
            controlSquare.attr({
                'x': view.xAxis.scale(control.param) - 25
            });
            var controlCircle = controlGroup.selectAll('circle').data([0]);
            controlCircle.enter().append('circle').attr({
                'class': control.classAndVisibility(),
                'r': view.dimensions.height / 5,
                'cy': 0
            });
            controlCircle.attr({
                'cx': view.xAxis.scale(control.param)
            });
            control.setDragBehavior(view, controlSquare);
            control.setDragBehavior(view, controlCircle);
            return control;
        };
        return SliderControl;
    })(KG.ViewObject);
    KG.SliderControl = SliderControl;
})(KG || (KG = {}));
/// <reference path="kg.ts" />
'use strict';
var KG;
(function (KG) {
    var Controller = (function () {
        function Controller($scope, $interpolate, $window) {
            this.$scope = $scope;
            this.$interpolate = $interpolate;
            $scope.interpolate = $interpolate;
            $scope.color = function (className) {
                return KG.colorForClassName(className);
            };
            $scope.init = function (definition) {
                $scope.params = definition.params;
                $scope.graphParams = {};
                if (definition.graphParams) {
                    definition.graphParams.forEach(function (key) {
                        if ($scope.params.hasOwnProperty(key)) {
                            $scope.graphParams[key] = $scope.params[key];
                        }
                    });
                }
                $scope.restrictions = definition.restrictions.map(function (restrictionDefinition) {
                    return new KG.Restriction(restrictionDefinition);
                });
                $scope.model = KG.createInstance(definition.model);
                $scope.model.update($scope, function () {
                    $scope.views = definition.views.map(function (view) {
                        return KG.createInstance(view);
                    });
                });
            };
            $scope.renderMath = function () {
                var equationElements = $('equation');
                for (var i = 0; i < equationElements.length; i++) {
                    var element = equationElements[i];
                    if (!element.hasAttribute('raw')) {
                        element.setAttribute('raw', element.textContent);
                    }
                    element.innerHTML = '';
                    var lines = element.getAttribute('raw').split('||');
                    var equation = d3.select(element).append('table').attr('align', 'center');
                    for (var l = 0; l < lines.length; l++) {
                        var line = equation.append('tr');
                        if (lines[l].indexOf('frac') > -1) {
                            line.style('height', '85px');
                        }
                        ;
                        var lineElements = lines[l].split('=');
                        for (var le = 0; le < lineElements.length; le++) {
                            var lineElement = line.append('td').attr('class', 'math big').text('\\displaystyle{' + lineElements[le] + '}');
                            if (le == 0) {
                                lineElement.style('text-align', 'right');
                            }
                            else {
                                lineElement.style('text-align', 'left');
                            }
                            if (le < lineElements.length - 1) {
                                line.append('td').attr('class', 'math big').style('padding', '10px').style('valign', 'middle').text('=');
                            }
                        }
                    }
                }
                var mathElements = $('.math');
                for (var i = 0; i < mathElements.length; i++) {
                    var element = mathElements[i];
                    if (!element.hasAttribute('raw')) {
                        element.setAttribute('raw', element.textContent);
                    }
                    var textToRender = $scope.interpolate(element.getAttribute('raw'))($scope);
                    var displayMode = element.classList.contains('displayMath');
                    katex.render(textToRender, element, { displayMode: displayMode });
                }
            };
            // Updates and redraws interactive objects (graphs and sliders) when a parameter changes
            function render(redraw) {
                $scope.model.update($scope, function () {
                    $scope.views.forEach(function (view) {
                        view.render($scope, redraw);
                    });
                    $scope.renderMath();
                });
            }
            // Erase and redraw all graphs; do this when graph parameters change, or the window is resized
            function redrawGraphs() {
                render(true);
            }
            $scope.$watchCollection('graphParams', redrawGraphs);
            angular.element($window).on('resize', redrawGraphs);
            // Update objects on graphs (not the axes or graphs themselves); to this when model parameters change
            function redrawObjects() {
                render(false);
            }
            $scope.$watchCollection('params', redrawObjects);
            $scope.updateParams = function (params) {
                var oldParams = _.clone($scope.params);
                $scope.params = _.defaults(params, $scope.params);
                $scope.$apply();
                var validChange = true;
                $scope.restrictions.forEach(function (r) {
                    r.update($scope, null);
                    var validParams = r.validate($scope.params);
                    if (validParams == false) {
                        validChange = false;
                        $scope.error = r.error;
                    }
                    else {
                        $scope.params = validParams;
                        if ($scope.graphParams) {
                            for (var key in $scope.graphParams) {
                                $scope.graphParams[key] = $scope.params[key];
                            }
                        }
                        $scope.$apply();
                        $scope.error = '';
                    }
                });
                if (!validChange) {
                    console.log('not a valid change');
                    $scope.params = oldParams;
                    $scope.$apply(redrawObjects);
                }
            };
            $scope.init(scopeDefinition);
            render(true);
        }
        return Controller;
    })();
    KG.Controller = Controller;
})(KG || (KG = {}));
'use strict';
var Sample;
(function (Sample) {
    var SinglePoint = (function (_super) {
        __extends(SinglePoint, _super);
        function SinglePoint(definition) {
            _super.call(this, definition);
            this.point = new KG.Point({
                name: definition.name + 'point',
                coordinates: { x: definition.x, y: definition.y },
                size: definition.size,
                symbol: definition.symbol,
                xDrag: definition.xDrag,
                yDrag: definition.yDrag,
                label: definition.label
            });
        }
        return SinglePoint;
    })(KG.Model);
    Sample.SinglePoint = SinglePoint;
    var TwoPoints = (function (_super) {
        __extends(TwoPoints, _super);
        function TwoPoints(definition) {
            _super.call(this, definition);
            this.s = new KG.Segment({
                name: 'twoPointSegment',
                a: definition.point1,
                b: definition.point2
            });
        }
        TwoPoints.prototype.segment = function () {
            return this.s;
        };
        return TwoPoints;
    })(KG.Model);
    Sample.TwoPoints = TwoPoints;
})(Sample || (Sample = {}));
/// <reference path="../fg.ts"/>
'use strict';
var FinanceGraphs;
(function (FinanceGraphs) {
    var Asset = (function (_super) {
        __extends(Asset, _super);
        function Asset(definition, modelPath) {
            _super.call(this, definition, modelPath);
            this.point = new KG.Point({
                name: definition.name + 'point',
                coordinates: { x: definition.stDev, y: definition.mean },
                className: 'asset',
                size: 500,
                xDrag: true,
                yDrag: true,
                label: {
                    text: definition.name
                }
            });
        }
        return Asset;
    })(KG.Model);
    FinanceGraphs.Asset = Asset;
})(FinanceGraphs || (FinanceGraphs = {}));
/// <reference path="../fg.ts"/>
'use strict';
var FinanceGraphs;
(function (FinanceGraphs) {
    var Portfolio = (function (_super) {
        __extends(Portfolio, _super);
        function Portfolio(definition, modelPath) {
            _super.call(this, definition, modelPath);
            var p = this;
            p.assets = [p.asset1, p.asset2, p.asset3];
            p.threeAssetPortfolios = new KG.PathFamily({
                name: 'threeAssetData',
                data: 'model.threeAssetData',
                interpolation: 'basis'
            });
            p.twoAssetPortfolios = new KG.PathFamily({
                name: 'twoAssetData',
                className: 'asset',
                data: 'model.twoAssetData',
                interpolation: 'basis'
            });
            p.riskFreeAsset = new KG.Point({
                name: 'riskFreeAsset',
                coordinates: { x: 0, y: 'params.riskFreeReturn' },
                className: 'risk-free',
                size: 500,
                xDrag: false,
                yDrag: true,
                label: {
                    text: 'RF'
                }
            });
            p.optimalPortfolio = new KG.Point({
                name: 'optimalPortfolio',
                coordinates: { x: 'params.optimalPortfolioStDev', y: 'params.optimalPortfolioMean' },
                className: 'risk-free',
                symbol: 'cross',
                size: 100,
                xDrag: false,
                yDrag: false,
                label: {
                    text: 'P',
                    align: 'right',
                    valign: 'bottom'
                }
            });
            p.riskReturnLine = new KG.Line({
                name: 'twoPointSegment',
                className: 'risk-free',
                arrows: 'OPEN',
                lineDef: {
                    point1: p.riskFreeAsset,
                    point2: p.optimalPortfolio
                }
            });
            p.optimalPortfolioMean = 0;
            p.optimalPortfolioStDev = 0.5;
            p.riskReturnSlope = 0;
        }
        Portfolio.prototype._update = function (scope) {
            var p = this;
            function correlation(i, j) {
                if (i == j) {
                    return 1;
                }
                else if (i > j) {
                    return correlation(j, i);
                }
                else {
                    return p['rho' + (i + 1) + (j + 1)];
                }
            }
            function calculateCorrelationMatrix() {
                var matrix = [];
                for (var i = 0; i < p.assets.length; i++) {
                    var matrixRow = [];
                    for (var j = 0; j < p.assets.length; j++) {
                        matrixRow.push(correlation(i, j));
                    }
                    matrix.push(matrixRow);
                }
                p.correlationMatrix = matrix;
                return matrix;
            }
            function calculateCovarianceMatrix() {
                var matrix = calculateCorrelationMatrix().map(function (correlationMatrixRow, i) {
                    return correlationMatrixRow.map(function (correlationMatrixCell, j) {
                        return correlationMatrixCell * p.stDevArray()[i] * p.stDevArray()[j];
                    });
                });
                p.covarianceMatrix = matrix;
                return matrix;
            }
            function checkPositiveDefinite() {
                p.positiveDefinite = true;
                var eigenvalues = numeric.eig(calculateCovarianceMatrix()).lambda.x;
                eigenvalues.forEach(function (e) {
                    if (e < 0) {
                        p.positiveDefinite = false;
                    }
                });
                return p.positiveDefinite;
            }
            if (checkPositiveDefinite()) {
                p.twoAssetData = p.data2();
                p.threeAssetData = p.data3();
                if (p.optimalPortfolio != undefined) {
                    scope.params.optimalPortfolioMean = p.optimalPortfolioMean;
                    scope.params.optimalPortfolioStDev = p.optimalPortfolioStDev;
                }
            }
            return p;
        };
        Portfolio.prototype.meanArray = function () {
            return this.assets.map(function (asset) {
                return asset.mean;
            });
        };
        Portfolio.prototype.stDevArray = function () {
            return this.assets.map(function (asset) {
                return asset.stDev;
            });
        };
        Portfolio.prototype.mean = function (weightArray) {
            return numeric.dot(this.meanArray(), weightArray);
        };
        Portfolio.prototype.stDev = function (weightArray) {
            var variance = numeric.dot(weightArray, numeric.dot(this.covarianceMatrix, weightArray));
            if (variance >= 0) {
                return Math.sqrt(variance);
            }
            else {
                console.log('oops! getting a negative variance with weights ', weightArray[0], ',', weightArray[1], ',', weightArray[2], '!');
                return 0;
            }
        };
        // Generate dataset of portfolio means and variances for various weights of two assets
        Portfolio.prototype.data2 = function () {
            var portfolio = this, maxLeverage = portfolio.maxLeverage, d = [];
            d.push(portfolio.twoAssetPortfolio(1, 2, [0, 0, 0]));
            d.push(portfolio.twoAssetPortfolio(0, 2, [0, 0, 0]));
            d.push(portfolio.twoAssetPortfolio(0, 1, [0, 0, 0]));
            return d;
        };
        // Generate dataset of portfolio means and variances for various weights of all three assets
        Portfolio.prototype.data3 = function () {
            var portfolio = this, maxLeverage = portfolio.maxLeverage, d = [], w;
            portfolio.riskReturnSlope = 0;
            var min = -maxLeverage * 0.01, max = 1 + maxLeverage * 0.01, dataPoints = 10 + maxLeverage * 0.2;
            for (var i = 0; i < dataPoints + 1; i++) {
                w = min + i * (max - min) / dataPoints;
                d.push(portfolio.twoAssetPortfolio(1, 2, [w, 0, 0]));
                d.push(portfolio.twoAssetPortfolio(0, 2, [0, w, 0]));
                d.push(portfolio.twoAssetPortfolio(0, 1, [0, 0, w]));
            }
            return d;
        };
        // Generate lines representing combinations of two assets
        Portfolio.prototype.twoAssetPortfolio = function (asset1, asset2, weightArray) {
            var portfolio = this, maxLeverage = portfolio.maxLeverage, d = [], otherAssets = 0;
            weightArray.forEach(function (w) {
                otherAssets += w;
            });
            var min = -maxLeverage * 0.01, max = 1 + maxLeverage * 0.01, dataPoints = 2 * (10 + maxLeverage * 0.2);
            var colorScale = d3.scale.linear().domain([0, 1]).range(["red", "blue"]);
            for (var i = 0; i < dataPoints + 1; i++) {
                weightArray[asset1] = min + i * (max - min) / dataPoints;
                weightArray[asset2] = 1 - weightArray[asset1] - otherAssets;
                if (weightArray[asset2] >= min) {
                    var s = portfolio.stDev(weightArray), m = portfolio.mean(weightArray);
                    d.push({
                        x: s,
                        y: m,
                        color: colorScale(weightArray[asset1]),
                        weights: weightArray
                    });
                    if (s > 0) {
                        var slope = (m - portfolio.riskFreeReturn) / s;
                        if (slope > portfolio.riskReturnSlope) {
                            portfolio.optimalPortfolioMean = m;
                            portfolio.optimalPortfolioStDev = s;
                            portfolio.riskReturnSlope = slope;
                            portfolio.optimalPortfolioWeightArray = _.clone(weightArray);
                        }
                    }
                }
            }
            return d;
        };
        return Portfolio;
    })(KG.Model);
    FinanceGraphs.Portfolio = Portfolio;
})(FinanceGraphs || (FinanceGraphs = {}));
/// <reference path="../kg.ts"/>
/// <reference path="capm/asset.ts"/>
/// <reference path="capm/portfolio.ts"/>
/// <reference path="../eg.ts"/>
var EconGraphs;
(function (EconGraphs) {
    var Elasticity = (function (_super) {
        __extends(Elasticity, _super);
        function Elasticity(definition, modelPath) {
            definition.inverse = _.defaults(false, definition.inverse);
            definition.terms = _.defaults({
                perfectlyElastic: "perfectly elastic",
                perfectlyInelastic: "perfectly inelastic",
                elastic: "elastic",
                inelastic: "inelastic",
                unitElastic: "unit elastic"
            }, definition.terms);
            _super.call(this, definition, modelPath);
        }
        Elasticity.prototype.calculateElasticity = function (inputs) {
            var e = this;
            e = e._calculateElasticity(inputs);
            e.absoluteElasticity = Math.abs(e.elasticity);
            if (isNaN(e.absoluteElasticity)) {
                e.absoluteElasticity == '\\emptyset';
            }
            e.elasticityComparator = e.elasticityNumber(true);
            if (e.absoluteElasticity == 0) {
                e.elasticityWord = e.terms.perfectlyInelastic;
            }
            else if (e.absoluteElasticity < 1) {
                e.elasticityWord = e.terms.inelastic;
                e.elasticityComparator += "< 1";
            }
            else if (e.absoluteElasticity == 1) {
                e.elasticityWord = e.terms.unitElastic;
            }
            else if (e.absoluteElasticity == Infinity) {
                e.elasticityWord = e.terms.perfectlyElastic;
            }
            else if (e.absoluteElasticity > 1) {
                e.elasticityWord = e.terms.elastic;
                e.elasticityComparator += "> 1";
            }
            else {
                e.elasticityWord = 'undefined';
            }
            return e;
        };
        Elasticity.prototype._calculateElasticity = function (inputs) {
            return this; // overridden by subclass
        };
        Elasticity.prototype.elasticityNumber = function (absoluteValue) {
            var e = this;
            absoluteValue = absoluteValue || false;
            if (isNaN(e.absoluteElasticity)) {
                return "\\emptyset";
            }
            var returnString = (!absoluteValue && e.elasticity < 0) ? '-' : '';
            returnString += (e.absoluteElasticity == Infinity) ? "\\infty" : (e.absoluteElasticity == 0) ? "0" : (e.absoluteElasticity == 1) ? "1" : e.absoluteElasticity.toFixed(2);
            return returnString;
        };
        Elasticity.prototype._update = function (scope) {
            return this.calculateElasticity();
        };
        return Elasticity;
    })(KG.Model);
    EconGraphs.Elasticity = Elasticity;
})(EconGraphs || (EconGraphs = {}));
/// <reference path="../eg.ts"/>
'use strict';
var EconGraphs;
(function (EconGraphs) {
    var MidpointElasticity = (function (_super) {
        __extends(MidpointElasticity, _super);
        function MidpointElasticity(definition, modelPath) {
            _super.call(this, definition, modelPath);
            this.point1view = new KG.Point({
                name: 'point1',
                coordinates: definition.point1,
                size: 500,
                xDrag: true,
                yDrag: true,
                label: {
                    text: 'B'
                },
                droplines: {
                    horizontal: 'P_B',
                    vertical: 'Q_B'
                }
            });
            this.point2view = new KG.Point({
                name: 'point2',
                coordinates: definition.point2,
                size: 500,
                xDrag: true,
                yDrag: true,
                label: {
                    text: 'A'
                },
                droplines: {
                    horizontal: 'P_A',
                    vertical: 'Q_A'
                }
            });
            this.midpoint = new KG.Point({
                name: 'midpoint',
                coordinates: {
                    x: 'model.xAvg',
                    y: 'model.yAvg'
                },
                symbol: 'cross',
                color: 'grey',
                size: 100,
                xDrag: false,
                yDrag: false,
                label: {
                    text: 'M',
                    align: 'right',
                    valign: 'top',
                    color: 'grey'
                }
            });
            this.line = new KG.Line({
                name: 'demand',
                className: 'demand',
                arrows: 'NONE',
                lineDef: {
                    point1: {
                        x: 'params.x1',
                        y: 'params.y1'
                    },
                    point2: {
                        x: 'params.x2',
                        y: 'params.y2'
                    }
                }
            });
            this.xDiffSegment = new KG.Arrow({
                name: 'xDiffSegment',
                className: 'diff2',
                begin: {
                    x: definition.point2.x,
                    y: 5
                },
                end: {
                    x: definition.point1.x,
                    y: 5
                },
                label: {
                    text: 'model.xPercentDiff | percentage:0',
                    valign: 'top'
                }
            });
            this.yDiffSegment = new KG.Arrow({
                name: 'yDiffSegment',
                className: 'diff1',
                begin: {
                    x: 15,
                    y: definition.point2.y
                },
                end: {
                    x: 15,
                    y: definition.point1.y
                },
                label: {
                    text: 'model.yPercentDiff | percentage:0',
                    align: 'right'
                }
            });
        }
        MidpointElasticity.prototype._calculateElasticity = function (inputs) {
            var e = this;
            if (inputs) {
                if (inputs.hasOwnProperty('point1') && inputs.hasOwnProperty('point2')) {
                    e.point1 = inputs.point1;
                    e.point2 = inputs.point2;
                }
            }
            e.xDiff = e.point1.x - e.point2.x;
            e.yDiff = e.point1.y - e.point2.y;
            e.xAvg = 0.5 * (e.point1.x + e.point2.x);
            e.yAvg = 0.5 * (e.point1.y + e.point2.y);
            e.xPercentDiff = e.xDiff / e.xAvg;
            e.yPercentDiff = e.yDiff / e.yAvg;
            e.elasticity = e.xPercentDiff / e.yPercentDiff;
            console.log('calculating elasticity');
            return e;
        };
        return MidpointElasticity;
    })(EconGraphs.Elasticity);
    EconGraphs.MidpointElasticity = MidpointElasticity;
})(EconGraphs || (EconGraphs = {}));
/// <reference path="../eg.ts"/>
'use strict';
var EconGraphs;
(function (EconGraphs) {
    var PointElasticity = (function (_super) {
        __extends(PointElasticity, _super);
        function PointElasticity(definition, modelPath) {
            _super.call(this, definition, modelPath);
            this.pointView = new KG.Point({
                name: 'point',
                coordinates: definition.point,
                size: 500,
                xDrag: true,
                yDrag: true,
                droplines: {
                    horizontal: 'P',
                    vertical: 'Q'
                }
            });
            this.line = new KGMath.Functions.Linear({
                point: definition.point,
                slope: definition.slope
            });
        }
        PointElasticity.prototype._calculateElasticity = function (inputs) {
            var e = this;
            if (inputs) {
                if (inputs.hasOwnProperty('point')) {
                    e.point = inputs.point;
                }
                if (inputs.hasOwnProperty('slope')) {
                    e.slope = inputs.slope;
                }
            }
            e.elasticity = (e.point.y / e.point.x) / e.slope;
            return e;
        };
        return PointElasticity;
    })(EconGraphs.Elasticity);
    EconGraphs.PointElasticity = PointElasticity;
})(EconGraphs || (EconGraphs = {}));
/// <reference path="../eg.ts"/>
'use strict';
var EconGraphs;
(function (EconGraphs) {
    var ConstantElasticity = (function (_super) {
        __extends(ConstantElasticity, _super);
        function ConstantElasticity(definition, modelPath) {
            _super.call(this, definition, modelPath);
        }
        return ConstantElasticity;
    })(EconGraphs.Elasticity);
    EconGraphs.ConstantElasticity = ConstantElasticity;
})(EconGraphs || (EconGraphs = {}));
/// <reference path="../eg.ts"/>
var EconGraphs;
(function (EconGraphs) {
    var Demand = (function (_super) {
        __extends(Demand, _super);
        function Demand(definition, modelPath) {
            definition.className = definition.className || 'demand';
            definition.curveLabel = definition.curveLabel || 'D';
            _super.call(this, definition, modelPath);
            var d = this;
            d.demandFunction = new KGMath.Functions[definition.type](definition.def);
            d.elasticity = (definition.elasticityMethod == 'point') ? new EconGraphs.PointElasticity({}) : (definition.elasticityMethod = 'constant') ? new EconGraphs.ConstantElasticity({}) : new EconGraphs.MidpointElasticity({});
            var priceLineDrag = (typeof definition.price == 'string') ? definition.price.replace('params.', '') : false;
            d.priceLine = new KG.HorizontalLine({
                name: 'priceLine',
                color: 'grey',
                arrows: 'NONE',
                yDrag: definition.priceDrag,
                y: d.modelProperty('price')
            });
            this.quantityLine = new KG.VerticalLine({
                name: 'quantityLine',
                color: 'grey',
                arrows: 'NONE',
                xDrag: definition.quantityDrag,
                x: d.modelProperty('quantity')
            });
            this.quantityDemandedPoint = new KG.Point({
                name: 'quantityDemandedAtPrice',
                coordinates: { x: this.modelProperty('quantity'), y: this.modelProperty('price') },
                size: 500,
                color: 'black',
                yDrag: definition.price,
                xDrag: definition.quantity,
                label: {
                    text: 'A'
                },
                droplines: {
                    vertical: 'Q^D_A',
                    horizontal: 'P_A'
                }
            });
        }
        Demand.prototype._update = function (scope) {
            var d = this;
            if (d.price) {
                d.quantity = d.quantityAtPrice(d.price);
            }
            else if (d.quantity) {
                d.price = d.priceAtQuantity(d.quantity);
            }
            return d;
        };
        Demand.prototype.quantityAtPrice = function (price) {
            price = (price > 0) ? price : 0;
            var qd = this.demandFunction.xValue(price);
            return Math.max(0, qd);
        };
        Demand.prototype.priceAtQuantity = function (quantity) {
            quantity = (quantity > 0) ? quantity : 0;
            var pd = this.demandFunction.yValue(quantity);
            return Math.max(0, pd);
        };
        Demand.prototype.priceElasticity = function (price) {
            var d = this;
            if (d.elasticity instanceof EconGraphs.MidpointElasticity) {
                d.elasticity = d.elasticity.calculateElasticity({
                    point1: {
                        x: d.quantityAtPrice(price * 0.99),
                        y: price * 0.99
                    },
                    point2: {
                        x: d.quantityAtPrice(price * 1.01),
                        y: price * 1.01
                    }
                });
            }
            else if (d.elasticity instanceof EconGraphs.PointElasticity) {
                var point = {
                    x: d.quantityAtPrice(price),
                    y: price
                }, slope = d.demandFunction.hasOwnProperty('slope') ? d.demandFunction.slope : d.demandFunction.slopeBetweenPoints({
                    x: d.quantityAtPrice(price * 0.99),
                    y: price * 0.99
                }, {
                    x: d.quantityAtPrice(price * 1.01),
                    y: price * 1.01
                }, true);
                d.elasticity = d.elasticity.calculateElasticity({ point: point, slope: slope });
            }
            return d.elasticity;
        };
        Demand.prototype.tr = function (q) {
            return this.totalRevenueFunction.yValue(q);
        };
        Demand.prototype.mr = function (q) {
            return this.marginalRevenueFunction.yValue(q);
        };
        Demand.prototype.priceAtQuantityPoint = function (q, def) {
            return new KG.Point({
                name: 'DemandPoint',
                className: 'demand',
                coordinates: {
                    x: q,
                    y: this.priceAtQuantity(q)
                },
                label: {
                    text: def.label || ''
                },
                droplines: {
                    vertical: def.vDropline,
                    horizontal: def.hDropline
                },
                xDrag: def.xDrag
            });
        };
        Demand.prototype.marginalRevenueAtQuantitySlope = function (q, label) {
            var labelSubscript = label ? '_{' + label + '}' : '';
            return new KG.Line({
                name: 'MRslopeLine' + label,
                className: 'marginalRevenue dotted',
                lineDef: {
                    point: { x: q, y: this.modelProperty('tr(' + q + ')') },
                    slope: this.mr(q)
                },
                label: {
                    text: '\\text{slope} = MR(q' + labelSubscript + ')'
                }
            });
        };
        Demand.prototype.totalRevenueAtQuantityPoint = function (q, label, dragParam) {
            var labelSubscript = label ? '_{' + label + '}' : '';
            return new KG.Point({
                name: 'totalRevenueAtQ' + label,
                coordinates: { x: q, y: this.tr(q) },
                className: 'totalRevenue',
                xDrag: dragParam,
                label: {
                    text: label
                },
                droplines: {
                    vertical: 'q' + labelSubscript,
                    horizontal: 'TR(q' + labelSubscript + ')'
                }
            });
        };
        return Demand;
    })(KG.Model);
    EconGraphs.Demand = Demand;
})(EconGraphs || (EconGraphs = {}));
/// <reference path="../eg.ts"/>
var EconGraphs;
(function (EconGraphs) {
    var LinearDemand = (function (_super) {
        __extends(LinearDemand, _super);
        function LinearDemand(definition, modelPath) {
            _super.call(this, definition, modelPath);
            var demand = this;
            demand.priceInterceptPoint = new KG.Point({
                name: 'demandPriceIntercept',
                coordinates: { x: 0, y: demand.modelProperty('priceIntercept') },
                className: 'demand',
                yDrag: definition.priceInterceptDrag
            });
            demand.quantityInterceptPoint = new KG.Point({
                name: 'demandQuantityIntercept',
                coordinates: { x: demand.modelProperty('quantityIntercept'), y: 0 },
                className: 'demand',
                xDrag: definition.quantityInterceptDrag
            });
            demand.curve = new KG.Line({
                name: 'demand',
                className: 'demand',
                arrows: 'NONE',
                lineDef: definition.def,
                label: {
                    text: definition.curveLabel
                }
            });
            demand.consumerSurplus = new KG.Area({
                name: 'consumerSurplus',
                className: 'demand',
                data: [
                    { x: demand.modelProperty('quantity'), y: definition.price },
                    { x: 0, y: definition.price },
                    { x: 0, y: demand.modelProperty('quantityIntercept') }
                ],
                label: {
                    text: "CS"
                }
            });
            demand.marginalRevenueFunction = new KGMath.Functions.Linear({
                intercept: demand.modelProperty('demandFunction.yIntercept'),
                slope: KG.multiplyDefs(demand.modelProperty('demandFunction.slope'), 2)
            });
            demand.marginalRevenueCurve = new KG.Line({
                name: 'marginalRevenue',
                className: 'marginalRevenue',
                linear: demand.modelProperty('marginalRevenueFunction'),
                label: {
                    text: 'MR'
                }
            });
            demand.totalRevenueFunction = demand.marginalRevenueFunction.integral(0, 0, demand.modelProperty('totalRevenueFunction'));
            demand.totalRevenueCurve = new KG.FunctionPlot({
                name: 'totalRevenue',
                className: 'totalRevenue',
                fn: demand.modelProperty('totalRevenueFunction'),
                label: {
                    text: 'TR'
                }
            });
        }
        LinearDemand.prototype._update = function (scope) {
            var d = this;
            d.demandFunction.update(scope);
            d.marginalRevenueFunction.update(scope);
            d.totalRevenueFunction.update(scope);
            if (d.price) {
                d.quantity = d.quantityAtPrice(d.price);
            }
            else if (d.quantity) {
                d.price = d.priceAtQuantity(d.quantity);
            }
            d.priceIntercept = d.demandFunction.yValue(0);
            d.quantityIntercept = d.demandFunction.xValue(0);
            return d;
        };
        return LinearDemand;
    })(EconGraphs.Demand);
    EconGraphs.LinearDemand = LinearDemand;
})(EconGraphs || (EconGraphs = {}));
/// <reference path="../eg.ts"/>
var EconGraphs;
(function (EconGraphs) {
    var ConstantElasticityDemand = (function (_super) {
        __extends(ConstantElasticityDemand, _super);
        function ConstantElasticityDemand(definition, modelPath) {
            _super.call(this, definition, modelPath);
            this.slopeAtPrice = function (price) {
                var d = this, a = d.demandFunction.level, b = d.demandFunction.powers[1];
                return (-1) * a * b * Math.pow(price, -(1 + b));
            };
            this.slopeAtPriceWords = function (price) {
                return "\\frac { dQ^D }{ dP } = " + this.slopeAtPrice(price).toFixed(2);
            };
            this.curve = new KG.FunctionPlot({
                name: 'demand',
                className: 'demand',
                arrows: 'NONE',
                fn: 'model.demandFunction',
                label: {
                    text: 'D'
                }
            });
            this.priceLine = new KG.HorizontalLine({
                name: 'priceLine',
                color: 'grey',
                arrows: 'NONE',
                type: 'HorizontalLine',
                yDrag: 'price',
                y: 'params.price'
            });
            this.quantityDemandedAtPrice = new KG.Point({
                name: 'quantityDemandedAtPrice',
                coordinates: { x: 'model.quantityAtPrice(params.price)', y: 'params.price' },
                size: 500,
                color: 'black',
                yDrag: true,
                label: {
                    text: 'A'
                },
                droplines: {
                    vertical: 'Q^D(P)',
                    horizontal: 'P'
                }
            });
            this.slopeLine = new KG.Line({
                name: 'slopeLine',
                className: 'demand dotted',
                lineDef: {
                    point: { x: 'model.quantityAtPrice(params.price)', y: 'params.price' },
                    slope: '1/model.slopeAtPrice(params.price)'
                },
                label: {
                    text: 'model.slopeAtPriceWords(params.price)'
                }
            });
            this.elasticity.elasticity = definition.def.powers[1];
        }
        ConstantElasticityDemand.prototype._update = function (scope) {
            var d = this;
            d.demandFunction.update(scope);
            d.slopeLine.linear.update(scope);
            d.elasticity.update(scope);
            return d;
        };
        return ConstantElasticityDemand;
    })(EconGraphs.Demand);
    EconGraphs.ConstantElasticityDemand = ConstantElasticityDemand;
})(EconGraphs || (EconGraphs = {}));
/// <reference path="../eg.ts"/>
'use strict';
var EconGraphs;
(function (EconGraphs) {
    var RamseyCassKoopmans = (function (_super) {
        __extends(RamseyCassKoopmans, _super);
        function RamseyCassKoopmans(definition, modelPath) {
            _super.call(this, definition, modelPath);
            this.steadyCapital = new KGMath.Functions.Polynomial({ termDefs: [
                {
                    coefficient: 1,
                    powers: ['params.alpha']
                },
                {
                    coefficient: '-(params.delta + params.n + params.g)',
                    powers: [1]
                }
            ] });
            this.steadyCapitalView = new KG.FunctionPlot({
                name: 'steadyCapital',
                fn: this.modelProperty('steadyCapital'),
                className: 'capital',
                numSamplePoints: 201,
                label: {
                    text: '\\dot k = 0'
                }
            });
            this.steadyConsumptionView = new KG.VerticalLine({
                name: 'steadyConsumption',
                className: 'consumption',
                x: this.modelProperty('steadyStateK'),
                label: {
                    text: '\\dot c = 0'
                }
            });
            this.steadyStateView = new KG.Point({
                name: 'steadyStatePoint',
                coordinates: {
                    x: this.modelProperty('steadyStateK'),
                    y: this.modelProperty('steadyStateC')
                },
                symbol: 'cross',
                size: 100,
                label: {
                    text: 'S',
                    align: 'right',
                    valign: 'bottom',
                    color: 'grey'
                }
            });
            this.initialPoint = new KG.Point({
                name: 'initialPoint',
                coordinates: {
                    x: 'params.initialK',
                    y: 'params.initialC'
                },
                className: 'growth',
                size: 500,
                label: {
                    text: 'O'
                },
                xDrag: true,
                yDrag: true
            });
            this.growthPathView = new KG.LinePlot({
                name: 'growthPath',
                data: this.modelProperty('growthPath'),
                className: 'growth',
                arrows: 'END'
            });
            this.balancedGrowthPathView = new KG.LinePlot({
                name: 'balancedGrowthPath',
                data: this.modelProperty('balancedGrowthPath'),
                className: 'growth dashed',
                interpolation: 'basis'
            });
        }
        RamseyCassKoopmans.prototype._update = function (scope) {
            var model = this;
            model.steadyCapital.update(scope);
            model.steadyStateK = Math.pow((model.delta + model.rho + model.theta * model.g) / model.alpha, (1 / (model.alpha - 1)));
            model.steadyStateC = model.steadyCapital.yValue(model.steadyStateK);
            model.growthPath = model.dynamicPath(model.initialK, model.initialC);
            model.balancedGrowthPath = model.generateBalancedGrowthPathData();
            model.positiveConsumption = (model.steadyStateC >= 0);
            model.steadyStateOnGraph = (model.steadyStateK <= model.kMax) && (model.steadyStateC <= model.cMax);
            return model;
        };
        RamseyCassKoopmans.prototype.y = function (k) {
            var model = this;
            return Math.pow(k, model.alpha); // y = f(k) = k^alpha
        };
        RamseyCassKoopmans.prototype.r = function (k) {
            var model = this;
            return model.alpha * Math.pow(k, model.alpha - 1) - model.delta; // interest rate = f'(k) - delta
        };
        RamseyCassKoopmans.prototype.kdot = function (k, c) {
            var model = this;
            return model.y(k) - c - (model.n + model.g + model.delta) * k;
        };
        RamseyCassKoopmans.prototype.cdot = function (k, c) {
            var model = this;
            return (model.r(k) - model.rho - model.theta * model.g) * c / model.theta;
        };
        RamseyCassKoopmans.prototype.normalizedNextPoint = function (k, c, distance) {
            var model = this;
            var kdot = model.kdot(k, c), cdot = model.cdot(k, c);
            // normalize to smooth curve
            var vectorLength = Math.sqrt(kdot * kdot + cdot * cdot), deltaK = distance * kdot / vectorLength, deltaC = distance * cdot / vectorLength;
            return { k: k + deltaK, c: c + deltaC };
        };
        RamseyCassKoopmans.prototype.generateBalancedGrowthPathData = function () {
            var model = this;
            function tendsToZeroCapital(testK, testC) {
                var iterations = 0;
                while (model.cdot(testK, testC) * model.kdot(testK, testC) > 0 && iterations < 10000) {
                    var next = model.normalizedNextPoint(testK, testC, model.cMax * model.kMax / 100);
                    testK = next.k;
                    testC = next.c;
                    iterations++;
                }
                // once it's no longer heading NW or SE, return true if it's heading N or false if it's heading S
                return (model.cdot(testK, testC) > 0 || model.kdot(testK, testC) < 0);
            }
            var points = [{ x: 0, y: 0 }];
            var k = 0, c = 0;
            var edgeNotReached = true, kIncrement = model.kMax * 0.002, cIncrement = model.cMax * 0.002;
            while (edgeNotReached) {
                k = k + kIncrement;
                while (!tendsToZeroCapital(k, c) && c < model.cMax) {
                    c += cIncrement;
                }
                if (c < model.cMax) {
                    points.push({ x: k, y: c });
                }
                else {
                    c = model.cMax;
                    k = k - kIncrement;
                    while (tendsToZeroCapital(k, c) && k < model.kMax) {
                        k += kIncrement * 0.1;
                    }
                    points.push({ x: k, y: c });
                    edgeNotReached = false;
                }
                if (k >= model.kMax) {
                    edgeNotReached = false;
                }
            }
            return points;
        };
        RamseyCassKoopmans.prototype.dynamicPath = function (k, c) {
            var model = this;
            var points = [{ x: k, y: c }];
            var steadyStateAchieved = false, zeroConsumption = false, zeroCapital = false;
            var iterations = 0;
            while (!steadyStateAchieved && !zeroConsumption && !zeroCapital && iterations < 10000) {
                iterations++;
                var next = model.normalizedNextPoint(k, c, 0.005);
                if (next.k < 0) {
                    zeroCapital = true;
                }
                else if (next.c < 0) {
                    zeroConsumption = true;
                }
                else if (KG.isAlmostTo(next.k, model.steadyStateK, 0.05) && KG.isAlmostTo(next.c, model.steadyStateC, 0.05)) {
                    points.push({ x: model.steadyStateK, y: model.steadyStateC });
                    steadyStateAchieved = true;
                }
                else {
                    k = next.k;
                    c = next.c;
                    points.push({ x: k, y: c });
                }
            }
            return points;
        };
        return RamseyCassKoopmans;
    })(KG.Model);
    EconGraphs.RamseyCassKoopmans = RamseyCassKoopmans;
})(EconGraphs || (EconGraphs = {}));
/// <reference path="../eg.ts"/>
'use strict';
var EconGraphs;
(function (EconGraphs) {
    var ProductionCost = (function (_super) {
        __extends(ProductionCost, _super);
        function ProductionCost(definition, modelPath) {
            definition.labels = _.defaults(definition.labels || {}, {
                tc: 'TC',
                vc: 'VC',
                fc: 'FC',
                mc: 'MC',
                atc: 'ATC',
                avc: 'AVC',
                mcSlope: 'slope = MC',
                atcSlope: 'slope = ATC',
                avcSlope: 'slope = AVC'
            });
            definition.show = _.defaults(definition.show || {}, {
                tc: true,
                vc: false,
                fc: false,
                mc: true,
                atc: true,
                avc: false,
                mcSlope: false,
                atcSlope: false,
                avcSlope: false
            });
            definition = _.defaults(definition, {
                quantityDraggable: true
            });
            _super.call(this, definition, modelPath);
            var productionCost = this;
            if (definition.hasOwnProperty('costFunctionDef')) {
                productionCost.costFunction = new KGMath.Functions[definition.costFunctionType](definition.costFunctionDef);
                productionCost.marginalCostFunction = productionCost.costFunction.derivative();
            }
            else if (definition.hasOwnProperty('marginalCostFunctionDef')) {
                productionCost.marginalCostFunction = new KGMath.Functions[definition.marginalCostFunctionType](definition.marginalCostFunctionDef, productionCost.modelProperty('marginalCostFunction'));
                productionCost.costFunction = productionCost.marginalCostFunction.integral(0, definition.fixedCost, productionCost.modelProperty('costFunction'));
            }
            else {
                console.log('must initiate production cost object with either total cost or marginal cost function!');
            }
            productionCost.averageCostFunction = productionCost.costFunction.average();
            productionCost.variableCostFunction = productionCost.costFunction.add(KG.subtractDefs(0, this.modelProperty('fixedCost')));
            productionCost.averageVariableCostFunction = productionCost.variableCostFunction.average();
            if (productionCost.costFunction instanceof KGMath.Functions.Linear) {
                productionCost.totalCostCurve = new KG.Line({
                    name: 'totalCostLine',
                    className: 'totalCost',
                    lineDef: {
                        slope: productionCost.modelProperty('marginalCostFunction.y'),
                        intercept: productionCost.modelProperty('fixedCost')
                    },
                    label: {
                        text: 'TC'
                    }
                });
                productionCost.marginalCostCurve = new KG.HorizontalLine({
                    name: 'marginalCostCurve',
                    className: 'marginalCost',
                    y: productionCost.modelProperty('marginalCostFunction.y'),
                    label: {
                        text: 'MC'
                    }
                });
            }
            else {
                productionCost.totalCostCurve = new KG.FunctionPlot({
                    name: 'totalCostCurve',
                    fn: this.modelProperty('costFunction'),
                    className: 'totalCost',
                    numSamplePoints: 201,
                    label: {
                        text: 'TC'
                    }
                });
                productionCost.marginalCostCurve = new KG.FunctionPlot({
                    name: 'marginalCostCurve',
                    className: 'marginalCost',
                    fn: productionCost.modelProperty('marginalCostFunction'),
                    arrows: 'NONE',
                    label: {
                        text: 'MC'
                    },
                    numSamplePoints: 501
                });
            }
            productionCost.variableCostCurve = new KG.FunctionPlot({
                name: 'variableCostCurve',
                className: 'variableCost',
                fn: productionCost.modelProperty('variableCostFunction'),
                arrows: 'NONE',
                label: {
                    text: productionCost.modelProperty('labels.vc')
                },
                numSamplePoints: 501,
                show: productionCost.show.vc
            });
            productionCost.averageCostCurve = new KG.FunctionPlot({
                name: 'averageCostCurve',
                className: 'averageCost',
                fn: productionCost.modelProperty('averageCostFunction'),
                arrows: 'NONE',
                label: {
                    text: productionCost.modelProperty('labels.atc')
                },
                numSamplePoints: 501,
                show: productionCost.show.atc
            });
            productionCost.averageVariableCostCurve = new KG.FunctionPlot({
                name: 'averageVariableCostCurve',
                className: 'averageVariableCost',
                fn: productionCost.modelProperty('averageVariableCostFunction'),
                arrows: 'NONE',
                label: {
                    text: productionCost.modelProperty('labels.avc')
                },
                numSamplePoints: 501,
                show: productionCost.show.avc
            });
            productionCost.fixedCostPoint = new KG.Point({
                name: 'fixedCostPoint',
                className: 'totalCost',
                coordinates: { x: 0, y: productionCost.modelProperty('fixedCost') },
                droplines: {
                    horizontal: definition.labels.fc
                },
                yDrag: definition.fixedCostDragParam
            });
            productionCost.fixedCostLine = new KG.HorizontalLine({
                name: 'fixedCostLine',
                className: 'fixedCost',
                y: productionCost.modelProperty('fixedCost'),
                label: {
                    text: definition.labels.fc
                }
            });
        }
        ProductionCost.prototype._update = function (scope) {
            var p = this;
            p.costFunction.update(scope);
            p.fixedCost = p.tc(0);
            p.marginalCostFunction.update(scope);
            p.fixedCostPoint.update(scope);
            return p;
        };
        ProductionCost.prototype.tc = function (q) {
            return this.costFunction.yValue(q);
        };
        ProductionCost.prototype.vc = function (q) {
            return this.variableCostFunction.yValue(q);
        };
        ProductionCost.prototype.atc = function (q) {
            return this.averageCostFunction.yValue(q);
        };
        ProductionCost.prototype.avc = function (q) {
            return this.averageVariableCostFunction.yValue(q);
        };
        ProductionCost.prototype.mc = function (q) {
            return this.marginalCostFunction.yValue(q);
        };
        ProductionCost.prototype.marginalCostAtQuantitySlope = function (q, label, dragParam) {
            var labelSubscript = label ? '_{' + label + '}' : '', xDrag = this.quantityDraggable ? dragParam : false;
            return new KG.Line({
                name: 'MCslopeLine' + label,
                className: 'marginalCost dotted',
                show: this.show.mcslope,
                lineDef: {
                    point: { x: q, y: this.tc(q) },
                    slope: this.mc(q)
                },
                xDrag: xDrag,
                label: {
                    text: '\\text{slope} = MC'
                }
            });
        };
        ProductionCost.prototype.marginalCostAtVariableCostQuantitySlope = function (q, label, dragParam) {
            var labelSubscript = label ? '_{' + label + '}' : '', xDrag = this.quantityDraggable ? dragParam : false;
            return new KG.Line({
                name: 'MCslopeLineVC' + label,
                className: 'marginalCost dotted',
                show: (this.show.mcslope && this.show.vc),
                lineDef: {
                    point: { x: q, y: this.modelProperty('vc(' + q + ')') },
                    slope: this.mc(q)
                },
                xDrag: xDrag,
                label: {
                    text: '\\text{slope} = MC'
                }
            });
        };
        ProductionCost.prototype.averageCostAtQuantitySlope = function (q, label, dragParam) {
            var labelSubscript = label ? '_{' + label + '}' : '', xDrag = this.quantityDraggable ? dragParam : false;
            ;
            return new KG.Line({
                name: 'ATCslopeLine' + label,
                className: 'averageCost dotted',
                show: this.show.atcslope,
                lineDef: {
                    point: { x: 0, y: 0 },
                    slope: this.modelProperty('atc(' + q + ')')
                },
                xDrag: xDrag,
                label: {
                    text: '\\text{slope} = ATC'
                }
            });
        };
        ProductionCost.prototype.averageVariableCostAtQuantitySlope = function (q, label, dragParam) {
            var labelSubscript = label ? '_{' + label + '}' : '', xDrag = this.quantityDraggable ? dragParam : false;
            ;
            return new KG.Line({
                name: 'AVCslopeLine' + label,
                className: 'averageVariableCost dotted',
                show: this.show.avcslope,
                lineDef: {
                    point: { x: 0, y: 0 },
                    slope: this.modelProperty('avc(' + q + ')')
                },
                xDrag: xDrag,
                label: {
                    text: '\\text{slope} = AVC'
                }
            });
        };
        ProductionCost.prototype.totalCostAtQuantityPoint = function (q, label, dragParam) {
            var labelSubscript = label ? '_{' + label + '}' : '', xDrag = this.quantityDraggable ? dragParam : false;
            ;
            return new KG.Point({
                name: 'totalCostAtQ' + label,
                coordinates: { x: q, y: this.modelProperty('tc(' + q + ')') },
                className: 'totalCost',
                xDrag: xDrag,
                label: {
                    text: label
                },
                droplines: {
                    vertical: 'q' + labelSubscript,
                    horizontal: 'TC(q' + labelSubscript + ')'
                }
            });
        };
        ProductionCost.prototype.variableCostAtQuantityPoint = function (q, label, dragParam) {
            var labelSubscript = label ? '_{' + label + '}' : '', xDrag = this.quantityDraggable ? dragParam : false;
            ;
            return new KG.Point({
                name: 'variableCostAtQ' + label,
                coordinates: { x: q, y: this.modelProperty('vc(' + q + ')') },
                className: 'variableCost',
                show: this.show.vc,
                xDrag: xDrag,
                label: {
                    text: label
                },
                droplines: {
                    horizontal: 'VC(q' + labelSubscript + ')'
                }
            });
        };
        ProductionCost.prototype.marginalCostAtQuantityPoint = function (q, label, dragParam) {
            var axisLabel = this.mc(q).toFixed(1);
            if (label && label.length > 0) {
                axisLabel = label;
            }
            var axisLabel = axisLabel || this.mc(q).toFixed(1), mcq = this.modelProperty('mc(' + q + ')'), xDrag = this.quantityDraggable ? dragParam : false;
            ;
            return new KG.Point({
                name: 'marginalCostAtQ' + label,
                coordinates: { x: q, y: mcq },
                className: 'marginalCost',
                xDrag: xDrag,
                droplines: {
                    horizontal: axisLabel
                }
            });
        };
        ProductionCost.prototype.averageCostAtQuantityPoint = function (q, label, dragParam) {
            var axisLabel = this.atc(q).toFixed(1);
            if (label && label.length > 0) {
                axisLabel = label;
            }
            var atcq = this.modelProperty('atc(' + q + ')'), xDrag = this.quantityDraggable ? dragParam : false;
            ;
            return new KG.Point({
                name: 'averageCostAtQ' + label,
                coordinates: { x: q, y: atcq },
                className: 'averageCost',
                xDrag: xDrag,
                droplines: {
                    horizontal: axisLabel
                },
                show: this.show.atc
            });
        };
        ProductionCost.prototype.averageVariableCostAtQuantityPoint = function (q, label, dragParam) {
            var axisLabel = this.avc(q).toFixed(1);
            if (label && label.length > 0) {
                axisLabel = label;
            }
            var avcq = this.modelProperty('avc(' + q + ')'), xDrag = this.quantityDraggable ? dragParam : false;
            ;
            return new KG.Point({
                name: 'averageVariableCostAtQ' + label,
                coordinates: { x: q, y: avcq },
                className: 'averageVariableCost',
                xDrag: xDrag,
                droplines: {
                    horizontal: axisLabel
                },
                show: this.show.avc
            });
        };
        return ProductionCost;
    })(KG.Model);
    EconGraphs.ProductionCost = ProductionCost;
})(EconGraphs || (EconGraphs = {}));
/// <reference path="../eg.ts"/>
'use strict';
var EconGraphs;
(function (EconGraphs) {
    var LinearMarginalCost = (function (_super) {
        __extends(LinearMarginalCost, _super);
        function LinearMarginalCost(definition, modelPath) {
            definition.marginalCostFunctionType = 'Linear';
            definition.marginalCostFunctionDef = {
                point1: { x: 0, y: definition.marginalCostIntercept },
                point2: definition.marginalCostControlPointCoordinates
            };
            _super.call(this, definition, modelPath);
            var productionCost = this;
            productionCost.marginalCostInterceptPoint = new KG.Point({
                name: 'marginalCostInterceptPoint',
                className: 'marginalCost',
                coordinates: { x: 0, y: definition.marginalCostIntercept },
                yDrag: definition.marginalCostIntercept
            });
            productionCost.marginalCostControlPoint = new KG.Point({
                name: 'marginalCostControlPoint',
                className: 'marginalCost',
                coordinates: definition.marginalCostControlPointCoordinates,
                yDrag: definition.marginalCostControlPointCoordinates.y
            });
        }
        return LinearMarginalCost;
    })(EconGraphs.ProductionCost);
    EconGraphs.LinearMarginalCost = LinearMarginalCost;
})(EconGraphs || (EconGraphs = {}));
/// <reference path="../eg.ts"/>
'use strict';
var EconGraphs;
(function (EconGraphs) {
    var ConstantMarginalCost = (function (_super) {
        __extends(ConstantMarginalCost, _super);
        function ConstantMarginalCost(definition, modelPath) {
            definition.marginalCostFunctionType = 'HorizontalLine';
            definition.marginalCostFunctionDef = {
                y: definition.c
            };
            _super.call(this, definition, modelPath);
        }
        return ConstantMarginalCost;
    })(EconGraphs.ProductionCost);
    EconGraphs.ConstantMarginalCost = ConstantMarginalCost;
})(EconGraphs || (EconGraphs = {}));
/// <reference path="../eg.ts"/>
'use strict';
var EconGraphs;
(function (EconGraphs) {
    var QuadraticMarginalCost = (function (_super) {
        __extends(QuadraticMarginalCost, _super);
        function QuadraticMarginalCost(definition, modelPath) {
            definition.marginalCostFunctionType = 'Quadratic';
            definition.marginalCostFunctionDef = {
                vertex: definition.marginalCostVertexCoordinates,
                point: definition.marginalCostControlPointCoordinates
            };
            _super.call(this, definition, modelPath);
            var productionCost = this;
            productionCost.marginalCostVertex = new KG.Point({
                name: 'marginalCostVertexPoint',
                className: 'marginalCost',
                coordinates: definition.marginalCostVertexCoordinates,
                xDrag: definition.marginalCostVertexCoordinates.x,
                yDrag: definition.marginalCostVertexCoordinates.y
            });
            productionCost.marginalCostControlPoint = new KG.Point({
                name: 'marginalCostControlPoint',
                className: 'marginalCost',
                coordinates: definition.marginalCostControlPointCoordinates,
                xDrag: definition.marginalCostControlPointCoordinates.x,
                yDrag: definition.marginalCostControlPointCoordinates.y
            });
        }
        return QuadraticMarginalCost;
    })(EconGraphs.ProductionCost);
    EconGraphs.QuadraticMarginalCost = QuadraticMarginalCost;
})(EconGraphs || (EconGraphs = {}));
/**
 * Created by cmakler on 10/2/15.
 */
var EconGraphs;
(function (EconGraphs) {
    var Budget = (function (_super) {
        __extends(Budget, _super);
        function Budget(definition, modelPath) {
            _super.call(this, definition, modelPath);
        }
        Budget.prototype.isAffordable = function (bundle) {
            return true; // TODO update
        };
        Budget.prototype.frontier = function (graph) {
            return new KG.FunctionPlot({
                fn: 'foo'
            });
        };
        Budget.prototype.feasibleSet = function (graph) {
            return new KG.Area({});
        };
        Budget.prototype.frontierSegments = function (graph) {
            return this.budgetSegments.map(function (b) {
                return b.budgetSegment(graph);
            });
        };
        return Budget;
    })(KG.Model);
    EconGraphs.Budget = Budget;
})(EconGraphs || (EconGraphs = {}));
/**
 * Created by cmakler on 10/2/15.
 */
var EconGraphs;
(function (EconGraphs) {
    var BudgetSegment = (function (_super) {
        __extends(BudgetSegment, _super);
        function BudgetSegment(definition, modelPath) {
            if (definition.hasOwnProperty('endowment')) {
                if (definition.endowment.hasOwnProperty('x') && definition.endowment.hasOwnProperty('y')) {
                    var endowmentValueX = KG.multiplyDefs(definition.endowment.x, definition.px), endowmentValueY = KG.multiplyDefs(definition.endowment.y, definition.py);
                    definition.income = KG.addDefs(endowmentValueX, endowmentValueY);
                }
                else {
                    console.log('Endowment must have x and y properties:');
                    console.log(definition.endowment);
                }
            }
            definition.priceRatio = KG.divideDefs(definition.px, definition.py);
            _super.call(this, definition, modelPath);
            var b = this;
            var xMin = definition.xMin || 0, xMax = definition.xMax || KG.divideDefs(definition.income, definition.px), yMin = definition.yMin || 0, yMax = definition.yMax || KG.divideDefs(definition.income, definition.py);
            b.xDomain = new KG.Domain(xMin, xMax);
            b.yDomain = new KG.Domain(yMin, yMax);
            if (definition.hasOwnProperty('endowment')) {
                b.budgetLine = new KGMath.Functions.Linear({
                    point: definition.endowment,
                    slope: KG.multiplyDefs(-1, definition.priceRatio)
                });
            }
            else {
                b.budgetLine = new KGMath.Functions.Linear({
                    slope: KG.multiplyDefs(-1, definition.priceRatio),
                    intercept: KG.divideDefs(definition.income, definition.py)
                });
            }
        }
        BudgetSegment.prototype._update = function (scope) {
            var b = this;
            b.budgetLine.update(scope);
            return b;
        };
        BudgetSegment.prototype.isAffordable = function (bundle) {
            var b = this;
            // return false if not in the domain for which this budget segment is relevant
            if (!b.xDomain.contains(bundle.x) || !b.xDomain.contains(bundle.y)) {
                return false;
            }
            // the bundle's cost is the quantities of x and y times their prices
            var bundleCost = b.px * bundle.x + b.py * bundle.y;
            // return true if the bundle's cost is less than or equal to constraint's income
            return (bundleCost <= b.income);
        };
        return BudgetSegment;
    })(KG.Model);
    EconGraphs.BudgetSegment = BudgetSegment;
})(EconGraphs || (EconGraphs = {}));
/**
 * Created by cmakler on 9/23/15.
 */
/// <reference path="../eg.ts"/>
var EconGraphs;
(function (EconGraphs) {
    var Utility = (function (_super) {
        __extends(Utility, _super);
        function Utility(definition, modelPath) {
            definition = _.defaults(definition, {
                className: 'utility'
            });
            _super.call(this, definition, modelPath);
            this.utilityFunction = new KGMath.Functions[definition.type](definition.def);
        }
        Utility.prototype._update = function (scope) {
            var u = this;
            u.utilityFunction.update(scope);
            return u;
        };
        return Utility;
    })(KG.Model);
    EconGraphs.Utility = Utility;
})(EconGraphs || (EconGraphs = {}));
/// <reference path="../eg.ts"/>
var EconGraphs;
(function (EconGraphs) {
    var OneGoodUtility = (function (_super) {
        __extends(OneGoodUtility, _super);
        function OneGoodUtility(definition, modelPath) {
            definition = _.defaults(definition, {
                curveLabel: 'u(c)',
                marginalCurveLabel: 'u\'(c)'
            });
            _super.call(this, definition, modelPath);
            this.utilityFunctionView = new KG.FunctionPlot({
                name: 'utilityFunction',
                className: this.className,
                fn: this.modelProperty('utilityFunction'),
                arrows: 'NONE',
                label: {
                    text: this.curveLabel
                },
                numSamplePoints: 501
            });
            if (this.utilityFunction.derivative()) {
                this.marginalUtilityFunction = this.utilityFunction.derivative();
                this.marginalUtilityFunctionView = new KG.FunctionPlot({
                    name: 'marginalUtilityFunction',
                    className: this.className,
                    fn: this.modelProperty('marginalUtilityFunction'),
                    arrows: 'NONE',
                    label: {
                        text: this.marginalCurveLabel
                    },
                    numSamplePoints: 501
                });
            }
        }
        OneGoodUtility.prototype._update = function (scope) {
            var u = this;
            u.utilityFunction.update(scope);
            if (this.utilityFunction.derivative()) {
                this.marginalUtilityFunction.update(scope);
            }
            return u;
        };
        OneGoodUtility.prototype.utilityAtQuantity = function (c) {
            return this.utilityFunction.yValue(c);
        };
        OneGoodUtility.prototype.marginalUtilityAtQuantity = function (c) {
            return this.marginalUtilityFunction.yValue(c);
        };
        OneGoodUtility.prototype.marginalUtilityAtQuantitySlope = function (c, params) {
            return new KG.Line({
                name: 'marginalUtilityAtQuantitySlope',
                className: 'demand dotted',
                lineDef: {
                    point: { x: c, y: this.utilityAtQuantity(c) },
                    slope: this.marginalUtilityAtQuantity(c)
                },
                params: params
            });
        };
        OneGoodUtility.prototype.utilityAtQuantityPoint = function (q, params) {
            return new KG.Point({
                coordinates: { x: q, y: this.utilityAtQuantity(q) },
                name: 'utilityAtQ',
                className: 'utility',
                params: params
            });
        };
        OneGoodUtility.prototype.marginalUtilityAtQuantityPoint = function (q, params) {
            return new KG.Point({
                name: 'marginalUtilityAtQ',
                coordinates: { x: q, y: this.marginalUtilityFunction.yValue(q) },
                className: 'utility',
                params: params
            });
        };
        OneGoodUtility.prototype.consumptionYieldingUtility = function (u) {
            return this.utilityFunction.xValue(u);
        };
        return OneGoodUtility;
    })(EconGraphs.Utility);
    EconGraphs.OneGoodUtility = OneGoodUtility;
})(EconGraphs || (EconGraphs = {}));
/// <reference path="../eg.ts"/>
var EconGraphs;
(function (EconGraphs) {
    var ConstantRRA = (function (_super) {
        __extends(ConstantRRA, _super);
        function ConstantRRA(definition, modelPath) {
            definition.type = 'Polynomial';
            if (typeof definition.rra == 'number') {
                definition.def = {
                    termDefs: [
                        {
                            coefficient: 1 / (1 - definition.rra),
                            powers: [1 - definition.rra]
                        },
                        {
                            coefficient: -1 / (1 - definition.rra),
                            powers: [0]
                        }
                    ]
                };
            }
            else if (typeof definition.rra == 'string') {
                definition.def = {
                    termDefs: [
                        {
                            coefficient: "1/(1-" + definition.rra + ")",
                            powers: ["1 - " + definition.rra]
                        },
                        {
                            coefficient: "-1/(1-" + definition.rra + ")",
                            powers: [0]
                        }
                    ]
                };
            }
            _super.call(this, definition, modelPath);
        }
        ConstantRRA.prototype.utilityFormula = function (c) {
            var rra = this.rra;
            if (c) {
                if (rra == 0) {
                    return c.toFixed(2) + '-1';
                }
                else if (rra.toFixed(2) == 1) {
                    return '\\log ' + c.toFixed(2);
                }
                else {
                    return "\\frac{" + c.toFixed(2) + "^{" + (1 - rra).toFixed(2) + "} - 1}{ " + (1 - rra).toFixed(2) + " } ";
                }
            }
            else {
                if (rra == 0) {
                    return 'c - 1';
                }
                else if (rra.toFixed(2) == 1) {
                    return '\\log c';
                }
                else {
                    return "\\frac{c^{" + (1 - rra).toFixed(2) + "} - 1}{ " + (1 - rra).toFixed(2) + " } ";
                }
            }
        };
        ConstantRRA.prototype.consumptionYieldingUtility = function (u) {
            var oneMinusRho = 1 - this.rra;
            return Math.pow(1 + oneMinusRho * u, 1 / oneMinusRho);
        };
        return ConstantRRA;
    })(EconGraphs.OneGoodUtility);
    EconGraphs.ConstantRRA = ConstantRRA;
})(EconGraphs || (EconGraphs = {}));
/// <reference path="../eg.ts"/>
var EconGraphs;
(function (EconGraphs) {
    var RiskAversion = (function (_super) {
        __extends(RiskAversion, _super);
        function RiskAversion(definition, modelPath) {
            definition.pLow = definition.pLow || 0.5;
            definition.show = _.defaults(definition.show || {}, {
                ce: false,
                rp: false
            });
            _super.call(this, definition, modelPath);
            this.utility = new EconGraphs[definition.utilityType](definition.utilityDef, this.modelPath + '.utility');
            this.expectedUtilityPoint = new KG.Point({
                name: 'expectedUtilityPoint',
                className: 'riskPremium',
                coordinates: {
                    x: this.modelProperty('expectedC'),
                    y: this.modelProperty('expectedU')
                },
                droplines: {
                    horizontal: "\\mathbb{E}[u(c)]"
                }
            });
            this.expectedConsumptionPoint = new KG.Point({
                name: 'expectedConsumptionPoint',
                className: 'expectedUtility',
                coordinates: {
                    x: this.modelProperty('expectedC'),
                    y: this.modelProperty('utilityOfExpectedC')
                },
                droplines: {
                    vertical: "\\mathbb{E}[c]",
                    horizontal: "u(\\mathbb{E}[c])"
                }
            });
            this.certaintyEquivalentPoint = new KG.Point({
                name: 'certaintyEquivalentPoint',
                className: 'riskPremium',
                show: this.show.ce,
                coordinates: {
                    x: this.modelProperty('certaintyEquivalent'),
                    y: this.modelProperty('expectedU')
                },
                droplines: {
                    vertical: "CE"
                }
            });
            this.expectationSegment = new KG.Segment({
                name: 'expectationSegment',
                className: 'growth dotted',
                a: {
                    x: this.modelProperty('ca'),
                    y: this.modelProperty('ua')
                },
                b: {
                    x: this.modelProperty('cb'),
                    y: this.modelProperty('ub')
                }
            });
            this.riskPremiumSegment = new KG.Segment({
                name: 'xDiffSegment',
                className: 'riskPremium',
                show: this.show.rp,
                a: {
                    x: this.modelProperty('expectedC'),
                    y: this.modelProperty('expectedU')
                },
                b: {
                    x: this.modelProperty('certaintyEquivalent'),
                    y: this.modelProperty('expectedU')
                },
                label: {
                    text: 'RP',
                    valign: 'top'
                }
            });
        }
        RiskAversion.prototype._update = function (scope) {
            var ra = this;
            ra.utility = ra.utility.update(scope);
            ra.ua = ra.utility.utilityFunction.yValue(ra.ca);
            ra.ub = ra.utility.utilityFunction.yValue(ra.cb);
            ra.expectedC = ra.pLow * ra.ca + (1 - ra.pLow) * ra.cb;
            ra.expectedU = ra.pLow * ra.ua + (1 - ra.pLow) * ra.ub;
            ra.utilityOfExpectedC = ra.utility.utilityFunction.yValue(ra.expectedC);
            ra.certaintyEquivalent = ra.utility.consumptionYieldingUtility(ra.expectedU);
            return ra;
        };
        return RiskAversion;
    })(KG.Model);
    EconGraphs.RiskAversion = RiskAversion;
})(EconGraphs || (EconGraphs = {}));
/// <reference path="../eg.ts"/>
var EconGraphs;
(function (EconGraphs) {
    var UtilityRedistribution = (function (_super) {
        __extends(UtilityRedistribution, _super);
        function UtilityRedistribution(definition, modelPath) {
            _super.call(this, definition, modelPath);
            this.utility = new EconGraphs[definition.utilityType](definition.utilityDef, this.modelPath + '.utility');
            this.lowUtilityChangeArrow = new KG.Arrow({
                name: 'lowChangeSegment',
                className: 'diff2',
                begin: {
                    x: 5,
                    y: this.modelProperty('uLow')
                },
                end: {
                    x: 5,
                    y: this.modelProperty('uLowNew')
                }
            });
            this.highUtilityChangeArrow = new KG.Arrow({
                name: 'highChangeSegment',
                className: 'diff1',
                begin: {
                    x: 10,
                    y: this.modelProperty('uHigh')
                },
                end: {
                    x: 10,
                    y: this.modelProperty('uHighNew')
                }
            });
            this.lowConsumptionChangeArrow = new KG.Arrow({
                name: 'lowConsumptionChangeSegment',
                className: 'diff2',
                show: '(' + this.modelProperty('transfer') + ' > 0)',
                begin: {
                    x: this.modelProperty('cLow'),
                    y: this.modelProperty('utility.utilityAtQuantity(100)') + '*0.05'
                },
                end: {
                    x: this.modelProperty('cLowNew'),
                    y: this.modelProperty('utility.utilityAtQuantity(100)') + '*0.05'
                },
                label: {
                    text: 'T',
                    valign: 'top'
                }
            });
            this.highConsumptionChangeArrow = new KG.Arrow({
                name: 'highConsumptionChangeSegment',
                className: 'diff1',
                show: '(' + this.modelProperty('transfer') + ' > 0)',
                begin: {
                    x: this.modelProperty('cHigh'),
                    y: this.modelProperty('utility.utilityAtQuantity(100)') + '*0.1'
                },
                end: {
                    x: this.modelProperty('cHighNew'),
                    y: this.modelProperty('utility.utilityAtQuantity(100)') + '*0.1'
                },
                label: {
                    text: 'T',
                    valign: 'top'
                }
            });
        }
        UtilityRedistribution.prototype._update = function (scope) {
            var r = this;
            r.utility = r.utility.update(scope);
            r.uLow = r.utility.utilityFunction.yValue(r.cLow);
            r.uHigh = r.utility.utilityFunction.yValue(r.cHigh);
            r.cLowNew = r.cLow + r.transfer;
            r.cHighNew = r.cHigh - r.transfer;
            r.uLowNew = r.utility.utilityFunction.yValue(r.cLowNew);
            r.uHighNew = r.utility.utilityFunction.yValue(r.cHighNew);
            return r;
        };
        return UtilityRedistribution;
    })(KG.Model);
    EconGraphs.UtilityRedistribution = UtilityRedistribution;
})(EconGraphs || (EconGraphs = {}));
/// <reference path="../eg.ts"/>
var EconGraphs;
(function (EconGraphs) {
    var TwoGoodUtility = (function (_super) {
        __extends(TwoGoodUtility, _super);
        function TwoGoodUtility(definition, modelPath) {
            definition = _.defaults(definition, {
                indifferenceCurveLabel: 'U'
            });
            _super.call(this, definition, modelPath);
        }
        TwoGoodUtility.prototype._update = function (scope) {
            var u = this;
            u.utilityFunction.update(scope);
            return u;
        };
        TwoGoodUtility.prototype.utility = function (bundle) {
            return this.utilityFunction.value(KG.getBases(bundle));
        };
        TwoGoodUtility.prototype.mux = function (bundle) {
            return this.utilityFunction.derivative(1).value(KG.getBases(bundle));
        };
        TwoGoodUtility.prototype.muy = function (bundle) {
            return this.utilityFunction.derivative(2).value(KG.getBases(bundle));
        };
        TwoGoodUtility.prototype.mrs = function (bundle) {
            return this.mux(bundle) / this.muy(bundle);
        };
        TwoGoodUtility.prototype.mrsLine = function (bundle) {
            var u = this;
            return new KG.Line({
                point: bundle,
                slope: -1 * u.mrs(bundle)
            });
        };
        TwoGoodUtility.prototype.indifferenceCurveAtUtility = function (utility) {
            var u = this;
            return new KG.FunctionPlot({
                fn: u.modelProperty('utilityFunction.setLevel(' + utility + ')')
            });
        };
        TwoGoodUtility.prototype.indifferenceCurveThroughBundle = function (bundle) {
            var u = this, utility = u.utility(bundle);
            return u.indifferenceCurveAtUtility(utility);
        };
        TwoGoodUtility.prototype.indifferenceCurveFamily = function (levels) {
            var u = this;
            return new KG.FunctionMap({
                fn: u.modelProperty('utilityFunction')
            });
        };
        TwoGoodUtility.prototype.optimalBundle = function (budget) {
            return { x: 0, y: 0 };
        };
        TwoGoodUtility.prototype.indirectUtility = function (budget) {
            var u = this;
            return u.utility(u.optimalBundle(budget));
        };
        // Given two bundles, evaluates whether agent prefers first or second, or is indifferent
        TwoGoodUtility.prototype.bundlePreferred = function (bundles, tolerance) {
            var u = this;
            tolerance = tolerance || 0.01; // percent difference within which one is thought to be indifferent
            var u1 = u.utility(bundles[0]), u2 = u.utility(bundles[1]), percentUilityDifference = (u2 - u1) / (0.5 * (u1 + u2));
            if (percentUilityDifference > tolerance) {
                return 2; //second bundle preferred
            }
            if (percentUilityDifference < -tolerance) {
                return 1; //first bundle preferred
            }
            return 0; //indifferent between two bundles
        };
        return TwoGoodUtility;
    })(EconGraphs.Utility);
    EconGraphs.TwoGoodUtility = TwoGoodUtility;
})(EconGraphs || (EconGraphs = {}));
/// <reference path="../eg.ts"/>
var EconGraphs;
(function (EconGraphs) {
    var UtilityDemand = (function (_super) {
        __extends(UtilityDemand, _super);
        function UtilityDemand(definition, modelPath) {
            _super.call(this, definition, modelPath);
            var d = this;
            d.utilityFunction = new EconGraphs[definition.utilityFnDef.utilityType](definition.utilityFnDef.utilityDef, d.modelProperty('utilityFn'));
            d.demandCurve = new KG.FunctionPlot({
                fn: d.modelProperty('demandFunction'),
                yIsIndependent: true
            });
        }
        UtilityDemand.prototype._update = function (scope) {
            var m = this;
            m.utilityFunction.update(scope);
            return m;
        };
        UtilityDemand.prototype.quantityAtPrice = function (price) {
            return 0; // TODO implement
        };
        UtilityDemand.prototype.quantityAtPricePoint = function (price) {
            var d = this;
            return new KG.Point({
                className: 'demand',
                coordinates: {
                    x: d.modelProperty('quantityAtPrice(' + price + ')'),
                    y: price
                }
            });
        };
        return UtilityDemand;
    })(KG.Model);
    EconGraphs.UtilityDemand = UtilityDemand;
})(EconGraphs || (EconGraphs = {}));
/// <reference path="../eg.ts"/>
var EconGraphs;
(function (EconGraphs) {
    var Monopoly = (function (_super) {
        __extends(Monopoly, _super);
        function Monopoly(definition, modelPath) {
            definition = _.defaults(definition, {
                showProfit: true,
                snapToOptimalQuantity: true
            });
            _super.call(this, definition, modelPath);
            var m = this;
            var p = m.modelProperty('price'), q = m.modelProperty('quantity'), mcq = m.modelProperty('costFunction.mc(' + q + ')'), mc0 = m.modelProperty('costFunction.mc(0)'), acq = m.modelProperty('costFunction.atc(' + q + ')'), profitLabel = m.modelProperty('profitLabel');
            definition.demand.demandDef.curveLabel = definition.demand.demandDef.curveLabel || 'D = AR';
            m.demandFunction = new EconGraphs[definition.demand.demandType](definition.demand.demandDef, this.modelPath + '.demandFunction');
            m.costFunction = new EconGraphs[definition.cost.costType](definition.cost.costDef, this.modelPath + '.costFunction');
            m.producerSurplus = new KG.Area({
                data: [
                    { x: 0, y: p },
                    { x: q, y: p },
                    { x: q, y: mcq },
                    { x: 0, y: mc0 }
                ]
            });
            m.profitArea = new KG.Area({
                name: 'profitArea',
                className: 'growth',
                show: m.modelProperty('showACandProfit'),
                data: [
                    { x: 0, y: p },
                    { x: q, y: p },
                    { x: q, y: acq },
                    { x: 0, y: acq }
                ],
                label: {
                    text: profitLabel
                }
            });
        }
        Monopoly.prototype._update = function (scope) {
            var m = this;
            m.demandFunction.update(scope);
            m.costFunction.update(scope);
            m.showACandProfit = (m.showProfit && m.costFunction.showAC);
            if (m.snapToOptimalQuantity && m.demandFunction instanceof EconGraphs.LinearDemand && (m.costFunction instanceof EconGraphs.LinearMarginalCost || m.costFunction instanceof EconGraphs.ConstantMarginalCost)) {
                m.quantity = Math.max(0, m.demandFunction.marginalRevenueFunction.linearIntersection(m.costFunction.marginalCostFunction).x);
            }
            if (m.choosePrice) {
                m.quantity = m.demandFunction.quantityAtPrice(m.price);
                m.demandFunction.quantity = m.quantity;
            }
            else {
                m.price = m.demandFunction.priceAtQuantity(m.quantity);
                m.demandFunction.price = m.price;
            }
            m.profit = m.demandFunction.tr(m.quantity) - m.costFunction.tc(m.quantity);
            m.profitLabel = (m.profit > 0) ? '\\text{Profit}' : (m.profit < 0) ? '\\text{Loss}' : '';
            return m;
        };
        return Monopoly;
    })(KG.Model);
    EconGraphs.Monopoly = Monopoly;
})(EconGraphs || (EconGraphs = {}));
/// <reference path="../eg.ts"/>
var EconGraphs;
(function (EconGraphs) {
    var CournotDuopoly = (function (_super) {
        __extends(CournotDuopoly, _super);
        function CournotDuopoly(definition, modelPath) {
            _super.call(this, definition, modelPath);
            var cournot = this;
            cournot.marketDemand = new EconGraphs.LinearDemand({
                type: 'Linear',
                quantity: KG.addDefs(definition.q1, definition.q2),
                def: {
                    point1: {
                        x: 0,
                        y: cournot.modelProperty('marketDemandPriceIntercept')
                    },
                    point2: {
                        x: cournot.modelProperty('marketDemandQuantityIntercept'),
                        y: 0
                    }
                },
                curveLabel: 'P(q_1 + q_2)',
                quantityLabel: 'q_1 + q_2',
                priceInterceptDrag: 'params.marketDemandPriceIntercept',
                quantityInterceptDrag: 'params.marketDemandQuantityIntercept'
            }, this.modelProperty('marketDemand'));
            cournot.firm1 = new EconGraphs.Monopoly({
                quantity: definition.q1,
                snapToOptimalQuantity: definition.snapToOptimal1,
                showProfit: 'params.showProfit',
                cost: {
                    costType: 'ConstantMarginalCost',
                    costDef: {
                        quantityDraggable: true,
                        fixedCost: 0,
                        c: definition.c1
                    }
                },
                demand: {
                    demandType: 'LinearDemand',
                    demandDef: {
                        elasticityMethod: 'point',
                        quantity: definition.q1,
                        quantityDrag: definition.q1,
                        type: 'Linear',
                        quantityLabel: '1',
                        def: {
                            slope: cournot.modelProperty('marketDemand.demandFunction.slope'),
                            intercept: cournot.modelProperty('residualDemand1Intercept')
                        }
                    }
                }
            }, cournot.modelProperty('firm1'));
            cournot.firm2 = new EconGraphs.Monopoly({
                quantity: definition.q2,
                snapToOptimalQuantity: definition.snapToOptimal2,
                showProfit: 'params.showProfit',
                cost: {
                    costType: 'ConstantMarginalCost',
                    costDef: {
                        quantityDraggable: true,
                        fixedCost: 0,
                        c: definition.c2
                    }
                },
                demand: {
                    demandType: 'LinearDemand',
                    demandDef: {
                        elasticityMethod: 'point',
                        quantity: cournot.modelProperty('firm2.quantity'),
                        quantityDrag: definition.q2,
                        type: 'Linear',
                        def: {
                            slope: cournot.modelProperty('marketDemand.demandFunction.slope'),
                            intercept: cournot.modelProperty('residualDemand2Intercept')
                        }
                    }
                }
            }, cournot.modelProperty('firm2'));
        }
        CournotDuopoly.prototype.residualDemandIntercept = function (otherQuantity) {
            return this.marketDemand.priceAtQuantity(otherQuantity);
        };
        CournotDuopoly.prototype._update = function (scope) {
            var cournot = this;
            cournot.marketDemand.update(scope);
            cournot.residualDemand1Intercept = cournot.residualDemandIntercept(cournot.firm2.quantity);
            cournot.residualDemand2Intercept = cournot.residualDemandIntercept(cournot.firm1.quantity);
            cournot.firm1.update(scope);
            cournot.firm2.update(scope);
            cournot.firm1.update(scope);
            cournot.firm2.update(scope);
            cournot.marketDemand.update(scope);
            cournot.marketDemand.quantity = cournot.firm1.quantity + cournot.firm2.quantity;
            cournot.marketDemand.price = cournot.marketDemand.priceAtQuantity(cournot.marketDemand.quantity);
            return cournot;
        };
        return CournotDuopoly;
    })(KG.Model);
    EconGraphs.CournotDuopoly = CournotDuopoly;
})(EconGraphs || (EconGraphs = {}));
/// <reference path="../kg.ts"/>
/// <reference path="elasticity/elasticity.ts"/>
/// <reference path="elasticity/midpoint.ts"/>
/// <reference path="elasticity/point.ts"/>
/// <reference path="elasticity/constant.ts"/>
/// <reference path="market/demand.ts"/>
/// <reference path="market/linearDemand.ts"/>
/// <reference path="market/constantElasticityDemand.ts"/>
/// <reference path="growth/ramseyCassKoopmans.ts"/>
/// <reference path="production/productionCost.ts"/>
/// <reference path="production/linearMarginalCost.ts"/>
/// <reference path="production/constantMarginalCost.ts"/>
/// <reference path="production/quadraticMarginalCost.ts"/>
/// <reference path="budget/budget.ts"/>
/// <reference path="budget/budgetSegment.ts"/>
/// <reference path="utility/utility.ts"/>
/// <reference path="utility/oneGoodUtility.ts"/>
/// <reference path="utility/crra.ts"/>
/// <reference path="utility/riskAversion.ts"/>
/// <reference path="utility/utilityRedistribution.ts"/>
/// <reference path="utility/twoGoodUtility.ts"/>
/// <reference path="utility/utilityDemand.ts"/>
/// <reference path="monopoly/monopoly.ts"/>
/// <reference path="oligopoly/cournotDuopoly.ts"/> 
/**
 * Created by cmakler on 9/10/15.
 */
var PhysicsGraphs;
(function (PhysicsGraphs) {
    var Acceleration = (function (_super) {
        __extends(Acceleration, _super);
        function Acceleration(definition, modelPath) {
            _super.call(this, definition, modelPath);
            var model = this;
            /*
            model.accelerationFunction = new KGMath.Functions.HorizontalLine({y: definition.acceleration});
            model.velocityFunction = model.accelerationFunction.integral(0,definition.initialVelocity);
            model.positionFunction = model.velocityFunction.integral(0,definition.initialPosition,'positionFunction');
            */
            model.positionFunction = new KGMath.Functions.Quadratic({
                coefficients: {
                    a: definition.acceleration,
                    b: definition.initialVelocity,
                    c: definition.initialPosition
                }
            }, model.modelProperty('positionFunction'));
            model.velocityFunction = model.positionFunction.derivative();
            model.accelerationFunction = model.velocityFunction.derivative();
            model.accelerationView = new KG.HorizontalLine({
                name: 'accelerationView',
                className: 'growth',
                y: definition.acceleration
            });
            model.velocityView = new KG.Line({
                name: 'velocityView',
                className: 'totalCost',
                lineDef: model.velocityFunction.definition
            });
            model.positionView = new KG.FunctionPlot({
                name: 'positionView',
                className: 'growth',
                fn: model.modelProperty('positionFunction')
            });
            model.initialPositionPoint = new KG.Point({
                name: 'initialPositionPoint',
                className: 'growth',
                coordinates: {
                    x: 0,
                    y: definition.initialPosition
                },
                yDrag: definition.initialPosition,
                label: {
                    text: 'x_0'
                }
            });
            model.initialVelocityPoint = new KG.Point({
                name: 'initialVelocityPoint',
                className: 'totalCost',
                coordinates: {
                    x: 0,
                    y: definition.initialVelocity
                },
                yDrag: definition.initialVelocity,
                label: {
                    text: 'v_0'
                }
            });
            model.positionVertexPoint = new KG.Point({
                name: 'positionVertexPoint',
                className: 'growth',
                coordinates: {
                    x: model.positionFunction.definition.vertex.x,
                    y: model.positionFunction.definition.vertex.y
                },
                droplines: {
                    vertical: "x"
                }
            });
            model.zeroVelocityLine = new KG.HorizontalLine({ y: 0, name: 'zeroVelocity', className: 'dotted totalCost' });
        }
        return Acceleration;
    })(KG.Model);
    PhysicsGraphs.Acceleration = Acceleration;
})(PhysicsGraphs || (PhysicsGraphs = {}));
/// <reference path="../kg.ts"/>
/// <reference path="movement/acceleration.ts"/>
/// <reference path="../typings/tsd.d.ts"/>
/// <reference path="../bower_components/dt-d3/d3.d.ts"/>
/// <reference path="constants.ts" />
/// <reference path="helpers/helpers.ts" />
/// <reference path="helpers/definitions.ts" />
/// <reference path="model.ts" />
/// <reference path="restriction.ts" />
/// <reference path="math/math.ts" />
/// <reference path="viewObjects/viewObject.ts"/>
/// <reference path="viewObjects/point.ts"/>
/// <reference path="viewObjects/dropline.ts"/>
/// <reference path="viewObjects/curve.ts"/>
/// <reference path="viewObjects/segment.ts"/>
/// <reference path="viewObjects/arrow.ts"/>
/// <reference path="viewObjects/line.ts"/>
/// <reference path="viewObjects/graphDiv.ts"/>
/// <reference path="viewObjects/linePlot.ts"/>
/// <reference path="viewObjects/pathFamily.ts"/>
/// <reference path="viewObjects/functionPlot.ts"/>
/// <reference path="viewObjects/functionMap.ts"/>
/// <reference path="viewObjects/area.ts"/>
/// <reference path="view.ts" />
/// <reference path="views/axis.ts" />
/// <reference path="views/graph.ts" />
/// <reference path="views/twoVerticalGraphs.ts" />
/// <reference path="views/slider.ts" />
/// <reference path="controller.ts" />
/// <reference path="sample/sample.ts" />
/// <reference path="finance/fg.ts" />
/// <reference path="econ/eg.ts" />
/// <reference path="physics/pg.ts"/>
'use strict';
angular.module('KineticGraphs', []).controller('KineticGraphCtrl', ['$scope', '$interpolate', '$window', KG.Controller]).filter('percentage', ['$filter', function ($filter) {
    return function (input, decimals) {
        return $filter('number')(input * 100, decimals) + '\\%';
    };
}]).filter('extendedReal', ['$filter', function ($filter) {
    return function (input, decimals) {
        if (input == Infinity) {
            return '\\infty';
        }
        else if (input == -Infinity) {
            return '-\\infty';
        }
        else
            return $filter('number')(input, decimals);
    };
}]).directive('toggle', function () {
    function link(scope, el, attrs) {
        scope.toggle = function () {
            scope.params[attrs.param] = !scope.params[attrs.param];
        };
    }
    return {
        link: link,
        restrict: 'E',
        replace: true,
        scope: true,
        transclude: true,
        template: "<button ng-click='toggle()' style='width: 100%'><span ng-transclude/></button>"
    };
});
//# sourceMappingURL=kinetic-graphs.js.map


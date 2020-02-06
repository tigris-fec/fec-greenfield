var Loom = (function() {

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/*! jQuery Migrate v3.0.1 | (c) jQuery Foundation and other contributors | jquery.org/license */

void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0), function(e) {
    "function" == typeof define && define.amd ? define([ "jquery" ], window, e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery"), window) : e(jQuery, window);
}(function(e, t) {
    "use strict";
    function r(r) {
        var n = t.console;
        o[r] || (o[r] = !0, e.migrateWarnings.push(r), n && n.warn && !e.migrateMute && (n.warn("JQMIGRATE: " + r), 
        e.migrateTrace && n.trace && n.trace()));
    }
    function n(e, t, n, a) {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return r(a), n;
            },
            set: function(e) {
                r(a), n = e;
            }
        });
    }
    function a(e, t, n, a) {
        e[t] = function() {
            return r(a), n.apply(this, arguments);
        };
    }
    e.migrateVersion = "3.0.1", function() {
        var r = /^[12]\./;
        t.console && t.console.log && (e && !r.test(e.fn.jquery) || t.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), 
        e.migrateWarnings && t.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), 
        t.console.log("JQMIGRATE: Migrate is installed" + (e.migrateMute ? "" : " with logging active") + ", version " + e.migrateVersion));
    }();
    var o = {};
    e.migrateWarnings = [], void 0 === e.migrateTrace && (e.migrateTrace = !0), e.migrateReset = function() {
        o = {}, e.migrateWarnings.length = 0;
    }, "BackCompat" === t.document.compatMode && r("jQuery is not compatible with Quirks Mode");
    var i = e.fn.init, s = e.isNumeric, u = e.find, c = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, l = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
    e.fn.init = function(e) {
        var t = Array.prototype.slice.call(arguments);
        return "string" == typeof e && "#" === e && (r("jQuery( '#' ) is not a valid selector"), 
        t[0] = []), i.apply(this, t);
    }, e.fn.init.prototype = e.fn, e.find = function(e) {
        var n = Array.prototype.slice.call(arguments);
        if ("string" == typeof e && c.test(e)) try {
            t.document.querySelector(e);
        } catch (a) {
            e = e.replace(l, function(e, t, r, n) {
                return "[" + t + r + '"' + n + '"]';
            });
            try {
                t.document.querySelector(e), r("Attribute selector with '#' must be quoted: " + n[0]), 
                n[0] = e;
            } catch (e) {
                r("Attribute selector with '#' was not fixed: " + n[0]);
            }
        }
        return u.apply(this, n);
    };
    var d;
    for (d in u) Object.prototype.hasOwnProperty.call(u, d) && (e.find[d] = u[d]);
    e.fn.size = function() {
        return r("jQuery.fn.size() is deprecated and removed; use the .length property"), 
        this.length;
    }, e.parseJSON = function() {
        return r("jQuery.parseJSON is deprecated; use JSON.parse"), JSON.parse.apply(null, arguments);
    }, e.isNumeric = function(t) {
        var n = s(t), a = function(t) {
            var r = t && t.toString();
            return !e.isArray(t) && r - parseFloat(r) + 1 >= 0;
        }(t);
        return n !== a && r("jQuery.isNumeric() should not be called on constructed objects"), 
        a;
    }, a(e, "holdReady", e.holdReady, "jQuery.holdReady is deprecated"), a(e, "unique", e.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), 
    n(e.expr, "filters", e.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), 
    n(e.expr, ":", e.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos");
    var p = e.ajax;
    e.ajax = function() {
        var e = p.apply(this, arguments);
        return e.promise && (a(e, "success", e.done, "jQXHR.success is deprecated and removed"), 
        a(e, "error", e.fail, "jQXHR.error is deprecated and removed"), a(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), 
        e;
    };
    var f = e.fn.removeAttr, y = e.fn.toggleClass, m = /\S+/g;
    e.fn.removeAttr = function(t) {
        var n = this;
        return e.each(t.match(m), function(t, a) {
            e.expr.match.bool.test(a) && (r("jQuery.fn.removeAttr no longer sets boolean properties: " + a), 
            n.prop(a, !1));
        }), f.apply(this, arguments);
    }, e.fn.toggleClass = function(t) {
        return void 0 !== t && "boolean" != typeof t ? y.apply(this, arguments) : (r("jQuery.fn.toggleClass( boolean ) is deprecated"), 
        this.each(function() {
            var r = this.getAttribute && this.getAttribute("class") || "";
            r && e.data(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : e.data(this, "__className__") || "");
        }));
    };
    var h = !1;
    e.swap && e.each([ "height", "width", "reliableMarginRight" ], function(t, r) {
        var n = e.cssHooks[r] && e.cssHooks[r].get;
        n && (e.cssHooks[r].get = function() {
            var e;
            return h = !0, e = n.apply(this, arguments), h = !1, e;
        });
    }), e.swap = function(e, t, n, a) {
        var o, i, s = {};
        h || r("jQuery.swap() is undocumented and deprecated");
        for (i in t) s[i] = e.style[i], e.style[i] = t[i];
        o = n.apply(e, a || []);
        for (i in t) e.style[i] = s[i];
        return o;
    };
    var g = e.data;
    e.data = function(t, n, a) {
        var o;
        if (n && "object" == typeof n && 2 === arguments.length) {
            o = e.hasData(t) && g.call(this, t);
            var i = {};
            for (var s in n) s !== e.camelCase(s) ? (r("jQuery.data() always sets/gets camelCased names: " + s), 
            o[s] = n[s]) : i[s] = n[s];
            return g.call(this, t, i), n;
        }
        return n && "string" == typeof n && n !== e.camelCase(n) && (o = e.hasData(t) && g.call(this, t)) && n in o ? (r("jQuery.data() always sets/gets camelCased names: " + n), 
        arguments.length > 2 && (o[n] = a), o[n]) : g.apply(this, arguments);
    };
    var v = e.Tween.prototype.run, j = function(e) {
        return e;
    };
    e.Tween.prototype.run = function() {
        e.easing[this.easing].length > 1 && (r("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), 
        e.easing[this.easing] = j), v.apply(this, arguments);
    }, e.fx.interval = e.fx.interval || 13, t.requestAnimationFrame && n(e.fx, "interval", e.fx.interval, "jQuery.fx.interval is deprecated");
    var Q = e.fn.load, b = e.event.add, w = e.event.fix;
    e.event.props = [], e.event.fixHooks = {}, n(e.event.props, "concat", e.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), 
    e.event.fix = function(t) {
        var n, a = t.type, o = this.fixHooks[a], i = e.event.props;
        if (i.length) for (r("jQuery.event.props are deprecated and removed: " + i.join()); i.length; ) e.event.addProp(i.pop());
        if (o && !o._migrated_ && (o._migrated_ = !0, r("jQuery.event.fixHooks are deprecated and removed: " + a), 
        (i = o.props) && i.length)) for (;i.length; ) e.event.addProp(i.pop());
        return n = w.call(this, t), o && o.filter ? o.filter(n, t) : n;
    }, e.event.add = function(e, n) {
        return e === t && "load" === n && "complete" === t.document.readyState && r("jQuery(window).on('load'...) called after load event occurred"), 
        b.apply(this, arguments);
    }, e.each([ "load", "unload", "error" ], function(t, n) {
        e.fn[n] = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === n && "string" == typeof e[0] ? Q.apply(this, e) : (r("jQuery.fn." + n + "() is deprecated"), 
            e.splice(0, 0, n), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), 
            this));
        };
    }), e.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, n) {
        e.fn[n] = function(e, t) {
            return r("jQuery.fn." + n + "() event shorthand is deprecated"), arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n);
        };
    }), e(function() {
        e(t.document).triggerHandler("ready");
    }), e.event.special.ready = {
        setup: function() {
            this === t.document && r("'ready' event is deprecated");
        }
    }, e.fn.extend({
        bind: function(e, t, n) {
            return r("jQuery.fn.bind() is deprecated"), this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return r("jQuery.fn.unbind() is deprecated"), this.off(e, null, t);
        },
        delegate: function(e, t, n, a) {
            return r("jQuery.fn.delegate() is deprecated"), this.on(t, e, n, a);
        },
        undelegate: function(e, t, n) {
            return r("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        },
        hover: function(e, t) {
            return r("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e);
        }
    });
    var x = e.fn.offset;
    e.fn.offset = function() {
        var n, a = this[0], o = {
            top: 0,
            left: 0
        };
        return a && a.nodeType ? (n = (a.ownerDocument || t.document).documentElement, e.contains(n, a) ? x.apply(this, arguments) : (r("jQuery.fn.offset() requires an element connected to a document"), 
        o)) : (r("jQuery.fn.offset() requires a valid DOM element"), o);
    };
    var k = e.param;
    e.param = function(t, n) {
        var a = e.ajaxSettings && e.ajaxSettings.traditional;
        return void 0 === n && a && (r("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), 
        n = a), k.call(this, t, n);
    };
    var A = e.fn.andSelf || e.fn.addBack;
    e.fn.andSelf = function() {
        return r("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), 
        A.apply(this, arguments);
    };
    var S = e.Deferred, q = [ [ "resolve", "done", e.Callbacks("once memory"), e.Callbacks("once memory"), "resolved" ], [ "reject", "fail", e.Callbacks("once memory"), e.Callbacks("once memory"), "rejected" ], [ "notify", "progress", e.Callbacks("memory"), e.Callbacks("memory") ] ];
    return e.Deferred = function(t) {
        var n = S(), a = n.promise();
        return n.pipe = a.pipe = function() {
            var t = arguments;
            return r("deferred.pipe() is deprecated"), e.Deferred(function(r) {
                e.each(q, function(o, i) {
                    var s = e.isFunction(t[o]) && t[o];
                    n[i[1]](function() {
                        var t = s && s.apply(this, arguments);
                        t && e.isFunction(t.promise) ? t.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[i[0] + "With"](this === a ? r.promise() : this, s ? [ t ] : arguments);
                    });
                }), t = null;
            }).promise();
        }, t && t.call(n, n), n;
    }, e.Deferred.exceptionHook = S.exceptionHook, e;
});

/*!
 * JavaScript Cookie v2.1.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		var _OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = _OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
					attributes.path    && '; path=' + attributes.path,
					attributes.domain  && '; domain=' + attributes.domain,
					attributes.secure ? '; secure' : ''
				].join(''));
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var name = parts[0].replace(rdecode, decodeURIComponent);
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.get = api.set = api;
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(s,p){var m={},l=m.lib={},n=function(){},r=l.Base={extend:function(b){n.prototype=this;var h=new n;b&&h.mixIn(b);h.hasOwnProperty("init")||(h.init=function(){h.$super.init.apply(this,arguments)});h.init.prototype=h;h.$super=this;return h},create:function(){var b=this.extend();b.init.apply(b,arguments);return b},init:function(){},mixIn:function(b){for(var h in b)b.hasOwnProperty(h)&&(this[h]=b[h]);b.hasOwnProperty("toString")&&(this.toString=b.toString)},clone:function(){return this.init.prototype.extend(this)}},
q=l.WordArray=r.extend({init:function(b,h){b=this.words=b||[];this.sigBytes=h!=p?h:4*b.length},toString:function(b){return(b||t).stringify(this)},concat:function(b){var h=this.words,a=b.words,j=this.sigBytes;b=b.sigBytes;this.clamp();if(j%4)for(var g=0;g<b;g++)h[j+g>>>2]|=(a[g>>>2]>>>24-8*(g%4)&255)<<24-8*((j+g)%4);else if(65535<a.length)for(g=0;g<b;g+=4)h[j+g>>>2]=a[g>>>2];else h.push.apply(h,a);this.sigBytes+=b;return this},clamp:function(){var b=this.words,h=this.sigBytes;b[h>>>2]&=4294967295<<
32-8*(h%4);b.length=s.ceil(h/4)},clone:function(){var b=r.clone.call(this);b.words=this.words.slice(0);return b},random:function(b){for(var h=[],a=0;a<b;a+=4)h.push(4294967296*s.random()|0);return new q.init(h,b)}}),v=m.enc={},t=v.Hex={stringify:function(b){var a=b.words;b=b.sigBytes;for(var g=[],j=0;j<b;j++){var k=a[j>>>2]>>>24-8*(j%4)&255;g.push((k>>>4).toString(16));g.push((k&15).toString(16))}return g.join("")},parse:function(b){for(var a=b.length,g=[],j=0;j<a;j+=2)g[j>>>3]|=parseInt(b.substr(j,
2),16)<<24-4*(j%8);return new q.init(g,a/2)}},a=v.Latin1={stringify:function(b){var a=b.words;b=b.sigBytes;for(var g=[],j=0;j<b;j++)g.push(String.fromCharCode(a[j>>>2]>>>24-8*(j%4)&255));return g.join("")},parse:function(b){for(var a=b.length,g=[],j=0;j<a;j++)g[j>>>2]|=(b.charCodeAt(j)&255)<<24-8*(j%4);return new q.init(g,a)}},u=v.Utf8={stringify:function(b){try{return decodeURIComponent(escape(a.stringify(b)))}catch(g){throw Error("Malformed UTF-8 data");}},parse:function(b){return a.parse(unescape(encodeURIComponent(b)))}},
g=l.BufferedBlockAlgorithm=r.extend({reset:function(){this._data=new q.init;this._nDataBytes=0},_append:function(b){"string"==typeof b&&(b=u.parse(b));this._data.concat(b);this._nDataBytes+=b.sigBytes},_process:function(b){var a=this._data,g=a.words,j=a.sigBytes,k=this.blockSize,m=j/(4*k),m=b?s.ceil(m):s.max((m|0)-this._minBufferSize,0);b=m*k;j=s.min(4*b,j);if(b){for(var l=0;l<b;l+=k)this._doProcessBlock(g,l);l=g.splice(0,b);a.sigBytes-=j}return new q.init(l,j)},clone:function(){var b=r.clone.call(this);
b._data=this._data.clone();return b},_minBufferSize:0});l.Hasher=g.extend({cfg:r.extend(),init:function(b){this.cfg=this.cfg.extend(b);this.reset()},reset:function(){g.reset.call(this);this._doReset()},update:function(b){this._append(b);this._process();return this},finalize:function(b){b&&this._append(b);return this._doFinalize()},blockSize:16,_createHelper:function(b){return function(a,g){return(new b.init(g)).finalize(a)}},_createHmacHelper:function(b){return function(a,g){return(new k.HMAC.init(b,
g)).finalize(a)}}});var k=m.algo={};return m}(Math);
(function(s){function p(a,k,b,h,l,j,m){a=a+(k&b|~k&h)+l+m;return(a<<j|a>>>32-j)+k}function m(a,k,b,h,l,j,m){a=a+(k&h|b&~h)+l+m;return(a<<j|a>>>32-j)+k}function l(a,k,b,h,l,j,m){a=a+(k^b^h)+l+m;return(a<<j|a>>>32-j)+k}function n(a,k,b,h,l,j,m){a=a+(b^(k|~h))+l+m;return(a<<j|a>>>32-j)+k}for(var r=CryptoJS,q=r.lib,v=q.WordArray,t=q.Hasher,q=r.algo,a=[],u=0;64>u;u++)a[u]=4294967296*s.abs(s.sin(u+1))|0;q=q.MD5=t.extend({_doReset:function(){this._hash=new v.init([1732584193,4023233417,2562383102,271733878])},
_doProcessBlock:function(g,k){for(var b=0;16>b;b++){var h=k+b,w=g[h];g[h]=(w<<8|w>>>24)&16711935|(w<<24|w>>>8)&4278255360}var b=this._hash.words,h=g[k+0],w=g[k+1],j=g[k+2],q=g[k+3],r=g[k+4],s=g[k+5],t=g[k+6],u=g[k+7],v=g[k+8],x=g[k+9],y=g[k+10],z=g[k+11],A=g[k+12],B=g[k+13],C=g[k+14],D=g[k+15],c=b[0],d=b[1],e=b[2],f=b[3],c=p(c,d,e,f,h,7,a[0]),f=p(f,c,d,e,w,12,a[1]),e=p(e,f,c,d,j,17,a[2]),d=p(d,e,f,c,q,22,a[3]),c=p(c,d,e,f,r,7,a[4]),f=p(f,c,d,e,s,12,a[5]),e=p(e,f,c,d,t,17,a[6]),d=p(d,e,f,c,u,22,a[7]),
c=p(c,d,e,f,v,7,a[8]),f=p(f,c,d,e,x,12,a[9]),e=p(e,f,c,d,y,17,a[10]),d=p(d,e,f,c,z,22,a[11]),c=p(c,d,e,f,A,7,a[12]),f=p(f,c,d,e,B,12,a[13]),e=p(e,f,c,d,C,17,a[14]),d=p(d,e,f,c,D,22,a[15]),c=m(c,d,e,f,w,5,a[16]),f=m(f,c,d,e,t,9,a[17]),e=m(e,f,c,d,z,14,a[18]),d=m(d,e,f,c,h,20,a[19]),c=m(c,d,e,f,s,5,a[20]),f=m(f,c,d,e,y,9,a[21]),e=m(e,f,c,d,D,14,a[22]),d=m(d,e,f,c,r,20,a[23]),c=m(c,d,e,f,x,5,a[24]),f=m(f,c,d,e,C,9,a[25]),e=m(e,f,c,d,q,14,a[26]),d=m(d,e,f,c,v,20,a[27]),c=m(c,d,e,f,B,5,a[28]),f=m(f,c,
d,e,j,9,a[29]),e=m(e,f,c,d,u,14,a[30]),d=m(d,e,f,c,A,20,a[31]),c=l(c,d,e,f,s,4,a[32]),f=l(f,c,d,e,v,11,a[33]),e=l(e,f,c,d,z,16,a[34]),d=l(d,e,f,c,C,23,a[35]),c=l(c,d,e,f,w,4,a[36]),f=l(f,c,d,e,r,11,a[37]),e=l(e,f,c,d,u,16,a[38]),d=l(d,e,f,c,y,23,a[39]),c=l(c,d,e,f,B,4,a[40]),f=l(f,c,d,e,h,11,a[41]),e=l(e,f,c,d,q,16,a[42]),d=l(d,e,f,c,t,23,a[43]),c=l(c,d,e,f,x,4,a[44]),f=l(f,c,d,e,A,11,a[45]),e=l(e,f,c,d,D,16,a[46]),d=l(d,e,f,c,j,23,a[47]),c=n(c,d,e,f,h,6,a[48]),f=n(f,c,d,e,u,10,a[49]),e=n(e,f,c,d,
C,15,a[50]),d=n(d,e,f,c,s,21,a[51]),c=n(c,d,e,f,A,6,a[52]),f=n(f,c,d,e,q,10,a[53]),e=n(e,f,c,d,y,15,a[54]),d=n(d,e,f,c,w,21,a[55]),c=n(c,d,e,f,v,6,a[56]),f=n(f,c,d,e,D,10,a[57]),e=n(e,f,c,d,t,15,a[58]),d=n(d,e,f,c,B,21,a[59]),c=n(c,d,e,f,r,6,a[60]),f=n(f,c,d,e,z,10,a[61]),e=n(e,f,c,d,j,15,a[62]),d=n(d,e,f,c,x,21,a[63]);b[0]=b[0]+c|0;b[1]=b[1]+d|0;b[2]=b[2]+e|0;b[3]=b[3]+f|0},_doFinalize:function(){var a=this._data,k=a.words,b=8*this._nDataBytes,h=8*a.sigBytes;k[h>>>5]|=128<<24-h%32;var l=s.floor(b/
4294967296);k[(h+64>>>9<<4)+15]=(l<<8|l>>>24)&16711935|(l<<24|l>>>8)&4278255360;k[(h+64>>>9<<4)+14]=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360;a.sigBytes=4*(k.length+1);this._process();a=this._hash;k=a.words;for(b=0;4>b;b++)h=k[b],k[b]=(h<<8|h>>>24)&16711935|(h<<24|h>>>8)&4278255360;return a},clone:function(){var a=t.clone.call(this);a._hash=this._hash.clone();return a}});r.MD5=t._createHelper(q);r.HmacMD5=t._createHmacHelper(q)})(Math);


/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(h,s){var f={},g=f.lib={},q=function(){},m=g.Base={extend:function(a){q.prototype=this;var c=new q;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
r=g.WordArray=m.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=s?c:4*a.length},toString:function(a){return(a||k).stringify(this)},concat:function(a){var c=this.words,d=a.words,b=this.sigBytes;a=a.sigBytes;this.clamp();if(b%4)for(var e=0;e<a;e++)c[b+e>>>2]|=(d[e>>>2]>>>24-8*(e%4)&255)<<24-8*((b+e)%4);else if(65535<d.length)for(e=0;e<a;e+=4)c[b+e>>>2]=d[e>>>2];else c.push.apply(c,d);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=h.ceil(c/4)},clone:function(){var a=m.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],d=0;d<a;d+=4)c.push(4294967296*h.random()|0);return new r.init(c,a)}}),l=f.enc={},k=l.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++){var e=c[b>>>2]>>>24-8*(b%4)&255;d.push((e>>>4).toString(16));d.push((e&15).toString(16))}return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b+=2)d[b>>>3]|=parseInt(a.substr(b,
2),16)<<24-4*(b%8);return new r.init(d,c/2)}},n=l.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++)d.push(String.fromCharCode(c[b>>>2]>>>24-8*(b%4)&255));return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b++)d[b>>>2]|=(a.charCodeAt(b)&255)<<24-8*(b%4);return new r.init(d,c)}},j=l.Utf8={stringify:function(a){try{return decodeURIComponent(escape(n.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return n.parse(unescape(encodeURIComponent(a)))}},
u=g.BufferedBlockAlgorithm=m.extend({reset:function(){this._data=new r.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=j.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,d=c.words,b=c.sigBytes,e=this.blockSize,f=b/(4*e),f=a?h.ceil(f):h.max((f|0)-this._minBufferSize,0);a=f*e;b=h.min(4*a,b);if(a){for(var g=0;g<a;g+=e)this._doProcessBlock(d,g);g=d.splice(0,a);c.sigBytes-=b}return new r.init(g,b)},clone:function(){var a=m.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});g.Hasher=u.extend({cfg:m.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){u.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,d){return(new a.init(d)).finalize(c)}},_createHmacHelper:function(a){return function(c,d){return(new t.HMAC.init(a,
d)).finalize(c)}}});var t=f.algo={};return f}(Math);
(function(h){for(var s=CryptoJS,f=s.lib,g=f.WordArray,q=f.Hasher,f=s.algo,m=[],r=[],l=function(a){return 4294967296*(a-(a|0))|0},k=2,n=0;64>n;){var j;a:{j=k;for(var u=h.sqrt(j),t=2;t<=u;t++)if(!(j%t)){j=!1;break a}j=!0}j&&(8>n&&(m[n]=l(h.pow(k,0.5))),r[n]=l(h.pow(k,1/3)),n++);k++}var a=[],f=f.SHA256=q.extend({_doReset:function(){this._hash=new g.init(m.slice(0))},_doProcessBlock:function(c,d){for(var b=this._hash.words,e=b[0],f=b[1],g=b[2],j=b[3],h=b[4],m=b[5],n=b[6],q=b[7],p=0;64>p;p++){if(16>p)a[p]=
c[d+p]|0;else{var k=a[p-15],l=a[p-2];a[p]=((k<<25|k>>>7)^(k<<14|k>>>18)^k>>>3)+a[p-7]+((l<<15|l>>>17)^(l<<13|l>>>19)^l>>>10)+a[p-16]}k=q+((h<<26|h>>>6)^(h<<21|h>>>11)^(h<<7|h>>>25))+(h&m^~h&n)+r[p]+a[p];l=((e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22))+(e&f^e&g^f&g);q=n;n=m;m=h;h=j+k|0;j=g;g=f;f=e;e=k+l|0}b[0]=b[0]+e|0;b[1]=b[1]+f|0;b[2]=b[2]+g|0;b[3]=b[3]+j|0;b[4]=b[4]+h|0;b[5]=b[5]+m|0;b[6]=b[6]+n|0;b[7]=b[7]+q|0},_doFinalize:function(){var a=this._data,d=a.words,b=8*this._nDataBytes,e=8*a.sigBytes;
d[e>>>5]|=128<<24-e%32;d[(e+64>>>9<<4)+14]=h.floor(b/4294967296);d[(e+64>>>9<<4)+15]=b;a.sigBytes=4*d.length;this._process();return this._hash},clone:function(){var a=q.clone.call(this);a._hash=this._hash.clone();return a}});s.SHA256=q._createHelper(f);s.HmacSHA256=q._createHmacHelper(f)})(Math);
(function(){var h=CryptoJS,s=h.enc.Utf8;h.algo.HMAC=h.lib.Base.extend({init:function(f,g){f=this._hasher=new f.init;"string"==typeof g&&(g=s.parse(g));var h=f.blockSize,m=4*h;g.sigBytes>m&&(g=f.finalize(g));g.clamp();for(var r=this._oKey=g.clone(),l=this._iKey=g.clone(),k=r.words,n=l.words,j=0;j<h;j++)k[j]^=1549556828,n[j]^=909522486;r.sigBytes=l.sigBytes=m;this.reset()},reset:function(){var f=this._hasher;f.reset();f.update(this._iKey)},update:function(f){this._hasher.update(f);return this},finalize:function(f){var g=
this._hasher;f=g.finalize(f);g.reset();return g.finalize(this._oKey.clone().concat(f))}})})();


/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function(){var h=CryptoJS,j=h.lib.WordArray;h.enc.Base64={stringify:function(b){var e=b.words,f=b.sigBytes,c=this._map;b.clamp();b=[];for(var a=0;a<f;a+=3)for(var d=(e[a>>>2]>>>24-8*(a%4)&255)<<16|(e[a+1>>>2]>>>24-8*((a+1)%4)&255)<<8|e[a+2>>>2]>>>24-8*((a+2)%4)&255,g=0;4>g&&a+0.75*g<f;g++)b.push(c.charAt(d>>>6*(3-g)&63));if(e=c.charAt(64))for(;b.length%4;)b.push(e);return b.join("")},parse:function(b){var e=b.length,f=this._map,c=f.charAt(64);c&&(c=b.indexOf(c),-1!=c&&(e=c));for(var c=[],a=0,d=0;d<
e;d++)if(d%4){var g=f.indexOf(b.charAt(d-1))<<2*(d%4),h=f.indexOf(b.charAt(d))>>>6-2*(d%4);c[a>>>2]|=(g|h)<<24-8*(a%4);a++}return j.create(c,a)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();


/*1401387697,170428253,JIT Construction: v1267954,en_US*/

/**
 * Copyright Facebook Inc.
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
try {window.FB || (function(window) {
var self = window, document = window.document;
var setTimeout = window.setTimeout, setInterval = window.setInterval,clearTimeout = window.clearTimeout,clearInterval = window.clearInterval;var __DEV__ = 0;
function emptyFunction() {};
var __w, __t;
__t=function(a){return a[0];};__w=function(a){return a;};
var require,__d;(function(a){var b={},c={},d=['global','require','requireDynamic','requireLazy','module','exports'];require=function(e,f){if(c.hasOwnProperty(e))return c[e];if(!b.hasOwnProperty(e)){if(f)return null;throw new Error('Module '+e+' has not been defined');}var g=b[e],h=g.deps,i=h.length,j,k=[];for(var l=0;l<i;l++){switch(h[l]){case 'module':j=g;break;case 'exports':j=g.exports;break;case 'global':j=a;break;case 'require':j=require;break;case 'requireDynamic':j=require;break;case 'requireLazy':j=null;break;default:j=require.call(null,h[l]);}k.push(j);}g.factory.apply(a,k);c[e]=g.exports;return g.exports;};__d=function(e,f,g,h){if(typeof g=='function'){b[e]={factory:g,deps:d.concat(f),exports:{}};if(h===3)require.call(null,e);}else c[e]=g;};})(this);
__d("ES5ArrayPrototype",[],function(a,b,c,d,e,f){var g={};g.map=function(h,i){if(typeof h!='function')throw new TypeError();var j,k=this.length,l=new Array(k);for(j=0;j<k;++j)if(j in this)l[j]=h.call(i,this[j],j,this);return l;};g.forEach=function(h,i){g.map.call(this,h,i);};g.filter=function(h,i){if(typeof h!='function')throw new TypeError();var j,k,l=this.length,m=[];for(j=0;j<l;++j)if(j in this){k=this[j];if(h.call(i,k,j,this))m.push(k);}return m;};g.every=function(h,i){if(typeof h!='function')throw new TypeError();var j=new Object(this),k=j.length;for(var l=0;l<k;l++)if(l in j)if(!h.call(i,j[l],l,j))return false;return true;};g.some=function(h,i){if(typeof h!='function')throw new TypeError();var j=new Object(this),k=j.length;for(var l=0;l<k;l++)if(l in j)if(h.call(i,j[l],l,j))return true;return false;};g.indexOf=function(h,i){var j=this.length;i|=0;if(i<0)i+=j;for(;i<j;i++)if(i in this&&this[i]===h)return i;return -1;};e.exports=g;},null);
__d("ES5FunctionPrototype",[],function(a,b,c,d,e,f){var g={};g.bind=function(h){if(typeof this!='function')throw new TypeError('Bind must be called on a function');var i=this,j=Array.prototype.slice.call(arguments,1);function k(){return i.apply(h,j.concat(Array.prototype.slice.call(arguments)));}k.displayName='bound:'+(i.displayName||i.name||'(?)');k.toString=function l(){return 'bound: '+i;};return k;};e.exports=g;},null);
__d("ES5StringPrototype",[],function(a,b,c,d,e,f){var g={};g.trim=function(){if(this==null)throw new TypeError('String.prototype.trim called on null or undefined');return String.prototype.replace.call(this,/^\s+|\s+$/g,'');};g.startsWith=function(h){var i=String(this);if(this==null)throw new TypeError('String.prototype.startsWith called on null or undefined');var j=arguments.length>1?Number(arguments[1]):0;if(isNaN(j))j=0;var k=Math.min(Math.max(j,0),i.length);return i.indexOf(String(h),j)==k;};g.endsWith=function(h){var i=String(this);if(this==null)throw new TypeError('String.prototype.endsWith called on null or undefined');var j=i.length,k=String(h),l=arguments.length>1?Number(arguments[1]):j;if(isNaN(l))l=0;var m=Math.min(Math.max(l,0),j),n=m-k.length;if(n<0)return false;return i.lastIndexOf(k,n)==n;};g.contains=function(h){if(this==null)throw new TypeError('String.prototype.contains called on null or undefined');var i=String(this),j=arguments.length>1?Number(arguments[1]):0;if(isNaN(j))j=0;return i.indexOf(String(h),j)!=-1;};g.repeat=function(h){if(this==null)throw new TypeError('String.prototype.repeat called on null or undefined');var i=String(this),j=h?Number(h):0;if(isNaN(j))j=0;if(j<0||j===Infinity)throw RangeError();if(j===1)return i;if(j===0)return '';var k='';while(j){if(j&1)k+=i;if((j>>=1))i+=i;}return k;};e.exports=g;},null);
__d("ES5Array",[],function(a,b,c,d,e,f){var g={};g.isArray=function(h){return Object.prototype.toString.call(h)=='[object Array]';};e.exports=g;},null);
__d("ES5Object",[],function(a,b,c,d,e,f){var g={};g.create=function(h){var i=typeof h;if(i!='object'&&i!='function')throw new TypeError('Object prototype may only be a Object or null');var j=new Function();j.prototype=h;return new j();};g.keys=function(h){var i=typeof h;if(i!='object'&&i!='function'||h===null)throw new TypeError('Object.keys called on non-object');var j=[];for(var k in h)if(Object.prototype.hasOwnProperty.call(h,k))j.push(k);var l=!({toString:true}).propertyIsEnumerable('toString'),m=['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf','prototypeIsEnumerable','constructor'];if(l)for(var n=0;n<m.length;n++){var o=m[n];if(Object.prototype.hasOwnProperty.call(h,o))j.push(o);}return j;};e.exports=g;},null);
__d("ES5Date",[],function(a,b,c,d,e,f){var g={};g.now=function(){return new Date().getTime();};e.exports=g;},null);
/**
 * @providesModule JSON3
 * @preserve-header
 *
 *! JSON v3.2.3 | http://bestiejs.github.com/json3 | Copyright 2012, Kit Cambridge | http://kit.mit-license.org
 */__d("JSON3",[],function(a,b,c,d,e,f){(function(){var g={}.toString,h,i,j,k=e.exports={},l='{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}',m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba=new Date(-3509827334573292),ca,da,ea;try{ba=ba.getUTCFullYear()==-109252&&ba.getUTCMonth()===0&&ba.getUTCDate()==1&&ba.getUTCHours()==10&&ba.getUTCMinutes()==37&&ba.getUTCSeconds()==6&&ba.getUTCMilliseconds()==708;}catch(fa){}if(!ba){ca=Math.floor;da=[0,31,59,90,120,151,181,212,243,273,304,334];ea=function(ga,ha){return da[ha]+365*(ga-1970)+ca((ga-1969+(ha=+(ha>1)))/4)-ca((ga-1901+ha)/100)+ca((ga-1601+ha)/400);};}if(typeof JSON=="object"&&JSON){k.stringify=JSON.stringify;k.parse=JSON.parse;}if((m=typeof k.stringify=="function"&&!ea)){(ba=function(){return 1;}).toJSON=ba;try{m=k.stringify(0)==="0"&&k.stringify(new Number())==="0"&&k.stringify(new String())=='""'&&k.stringify(g)===j&&k.stringify(j)===j&&k.stringify()===j&&k.stringify(ba)==="1"&&k.stringify([ba])=="[1]"&&k.stringify([j])=="[null]"&&k.stringify(null)=="null"&&k.stringify([j,g,null])=="[null,null,null]"&&k.stringify({result:[ba,true,false,null,"\0\b\n\f\r\t"]})==l&&k.stringify(null,ba)==="1"&&k.stringify([1,2],null,1)=="[\n 1,\n 2\n]"&&k.stringify(new Date(-8.64e+15))=='"-271821-04-20T00:00:00.000Z"'&&k.stringify(new Date(8.64e+15))=='"+275760-09-13T00:00:00.000Z"'&&k.stringify(new Date(-62198755200000))=='"-000001-01-01T00:00:00.000Z"'&&k.stringify(new Date(-1))=='"1969-12-31T23:59:59.999Z"';}catch(fa){m=false;}}if(typeof k.parse=="function")try{if(k.parse("0")===0&&!k.parse(false)){ba=k.parse(l);if((r=ba.A.length==5&&ba.A[0]==1)){try{r=!k.parse('"\t"');}catch(fa){}if(r)try{r=k.parse("01")!=1;}catch(fa){}}}}catch(fa){r=false;}ba=l=null;if(!m||!r){if(!(h={}.hasOwnProperty))h=function(ga){var ha={},ia;if((ha.__proto__=null,ha.__proto__={toString:1},ha).toString!=g){h=function(ja){var ka=this.__proto__,la=ja in (this.__proto__=null,this);this.__proto__=ka;return la;};}else{ia=ha.constructor;h=function(ja){var ka=(this.constructor||ia).prototype;return ja in this&&!(ja in ka&&this[ja]===ka[ja]);};}ha=null;return h.call(this,ga);};i=function(ga,ha){var ia=0,ja,ka,la,ma;(ja=function(){this.valueOf=0;}).prototype.valueOf=0;ka=new ja();for(la in ka)if(h.call(ka,la))ia++;ja=ka=null;if(!ia){ka=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"];ma=function(na,oa){var pa=g.call(na)=="[object Function]",qa,ra;for(qa in na)if(!(pa&&qa=="prototype")&&h.call(na,qa))oa(qa);for(ra=ka.length;qa=ka[--ra];h.call(na,qa)&&oa(qa));};}else if(ia==2){ma=function(na,oa){var pa={},qa=g.call(na)=="[object Function]",ra;for(ra in na)if(!(qa&&ra=="prototype")&&!h.call(pa,ra)&&(pa[ra]=1)&&h.call(na,ra))oa(ra);};}else ma=function(na,oa){var pa=g.call(na)=="[object Function]",qa,ra;for(qa in na)if(!(pa&&qa=="prototype")&&h.call(na,qa)&&!(ra=qa==="constructor"))oa(qa);if(ra||h.call(na,(qa="constructor")))oa(qa);};return ma(ga,ha);};if(!m){n={"\\":"\\\\",'"':'\\"',"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};o=function(ga,ha){return ("000000"+(ha||0)).slice(-ga);};p=function(ga){var ha='"',ia=0,ja;for(;ja=ga.charAt(ia);ia++)ha+='\\"\b\f\n\r\t'.indexOf(ja)>-1?n[ja]:ja<" "?"\\u00"+o(2,ja.charCodeAt(0).toString(16)):ja;return ha+'"';};q=function(ga,ha,ia,ja,ka,la,ma){var na=ha[ga],oa,pa,qa,ra,sa,ta,ua,va,wa,xa,ya,za,ab,bb,cb;if(typeof na=="object"&&na){oa=g.call(na);if(oa=="[object Date]"&&!h.call(na,"toJSON")){if(na>-1/0&&na<1/0){if(ea){ra=ca(na/86400000);for(pa=ca(ra/365.2425)+1970-1;ea(pa+1,0)<=ra;pa++);for(qa=ca((ra-ea(pa,0))/30.42);ea(pa,qa+1)<=ra;qa++);ra=1+ra-ea(pa,qa);sa=(na%86400000+86400000)%86400000;ta=ca(sa/3600000)%24;ua=ca(sa/60000)%60;va=ca(sa/1000)%60;wa=sa%1000;}else{pa=na.getUTCFullYear();qa=na.getUTCMonth();ra=na.getUTCDate();ta=na.getUTCHours();ua=na.getUTCMinutes();va=na.getUTCSeconds();wa=na.getUTCMilliseconds();}na=(pa<=0||pa>=10000?(pa<0?"-":"+")+o(6,pa<0?-pa:pa):o(4,pa))+"-"+o(2,qa+1)+"-"+o(2,ra)+"T"+o(2,ta)+":"+o(2,ua)+":"+o(2,va)+"."+o(3,wa)+"Z";}else na=null;}else if(typeof na.toJSON=="function"&&((oa!="[object Number]"&&oa!="[object String]"&&oa!="[object Array]")||h.call(na,"toJSON")))na=na.toJSON(ga);}if(ia)na=ia.call(ha,ga,na);if(na===null)return "null";oa=g.call(na);if(oa=="[object Boolean]"){return ""+na;}else if(oa=="[object Number]"){return na>-1/0&&na<1/0?""+na:"null";}else if(oa=="[object String]")return p(na);if(typeof na=="object"){for(ab=ma.length;ab--;)if(ma[ab]===na)throw TypeError();ma.push(na);xa=[];bb=la;la+=ka;if(oa=="[object Array]"){for(za=0,ab=na.length;za<ab;cb||(cb=true),za++){ya=q(za,na,ia,ja,ka,la,ma);xa.push(ya===j?"null":ya);}return cb?(ka?"[\n"+la+xa.join(",\n"+la)+"\n"+bb+"]":("["+xa.join(",")+"]")):"[]";}else{i(ja||na,function(db){var eb=q(db,na,ia,ja,ka,la,ma);if(eb!==j)xa.push(p(db)+":"+(ka?" ":"")+eb);cb||(cb=true);});return cb?(ka?"{\n"+la+xa.join(",\n"+la)+"\n"+bb+"}":("{"+xa.join(",")+"}")):"{}";}ma.pop();}};k.stringify=function(ga,ha,ia){var ja,ka,la,ma,na,oa;if(typeof ha=="function"||typeof ha=="object"&&ha)if(g.call(ha)=="[object Function]"){ka=ha;}else if(g.call(ha)=="[object Array]"){la={};for(ma=0,na=ha.length;ma<na;oa=ha[ma++],((g.call(oa)=="[object String]"||g.call(oa)=="[object Number]")&&(la[oa]=1)));}if(ia)if(g.call(ia)=="[object Number]"){if((ia-=ia%1)>0)for(ja="",ia>10&&(ia=10);ja.length<ia;ja+=" ");}else if(g.call(ia)=="[object String]")ja=ia.length<=10?ia:ia.slice(0,10);return q("",(oa={},oa[""]=ga,oa),ka,la,ja,"",[]);};}if(!r){s=String.fromCharCode;t={"\\":"\\",'"':'"',"/":"/",b:"\b",t:"\t",n:"\n",f:"\f",r:"\r"};u=function(){z=aa=null;throw SyntaxError();};v=function(){var ga=aa,ha=ga.length,ia,ja,ka,la,ma;while(z<ha){ia=ga.charAt(z);if("\t\r\n ".indexOf(ia)>-1){z++;}else if("{}[]:,".indexOf(ia)>-1){z++;return ia;}else if(ia=='"'){for(ja="@",z++;z<ha;){ia=ga.charAt(z);if(ia<" "){u();}else if(ia=="\\"){ia=ga.charAt(++z);if('\\"/btnfr'.indexOf(ia)>-1){ja+=t[ia];z++;}else if(ia=="u"){ka=++z;for(la=z+4;z<la;z++){ia=ga.charAt(z);if(!(ia>="0"&&ia<="9"||ia>="a"&&ia<="f"||ia>="A"&&ia<="F"))u();}ja+=s("0x"+ga.slice(ka,z));}else u();}else{if(ia=='"')break;ja+=ia;z++;}}if(ga.charAt(z)=='"'){z++;return ja;}u();}else{ka=z;if(ia=="-"){ma=true;ia=ga.charAt(++z);}if(ia>="0"&&ia<="9"){if(ia=="0"&&(ia=ga.charAt(z+1),ia>="0"&&ia<="9"))u();ma=false;for(;z<ha&&(ia=ga.charAt(z),ia>="0"&&ia<="9");z++);if(ga.charAt(z)=="."){la=++z;for(;la<ha&&(ia=ga.charAt(la),ia>="0"&&ia<="9");la++);if(la==z)u();z=la;}ia=ga.charAt(z);if(ia=="e"||ia=="E"){ia=ga.charAt(++z);if(ia=="+"||ia=="-")z++;for(la=z;la<ha&&(ia=ga.charAt(la),ia>="0"&&ia<="9");la++);if(la==z)u();z=la;}return +ga.slice(ka,z);}if(ma)u();if(ga.slice(z,z+4)=="true"){z+=4;return true;}else if(ga.slice(z,z+5)=="false"){z+=5;return false;}else if(ga.slice(z,z+4)=="null"){z+=4;return null;}u();}}return "$";};w=function(ga){var ha,ia,ja;if(ga=="$")u();if(typeof ga=="string"){if(ga.charAt(0)=="@")return ga.slice(1);if(ga=="["){ha=[];for(;;ia||(ia=true)){ga=v();if(ga=="]")break;if(ia)if(ga==","){ga=v();if(ga=="]")u();}else u();if(ga==",")u();ha.push(w(ga));}return ha;}else if(ga=="{"){ha={};for(;;ia||(ia=true)){ga=v();if(ga=="}")break;if(ia)if(ga==","){ga=v();if(ga=="}")u();}else u();if(ga==","||typeof ga!="string"||ga.charAt(0)!="@"||v()!=":")u();ha[ga.slice(1)]=w(v());}return ha;}u();}return ga;};y=function(ga,ha,ia){var ja=x(ga,ha,ia);if(ja===j){delete ga[ha];}else ga[ha]=ja;};x=function(ga,ha,ia){var ja=ga[ha],ka;if(typeof ja=="object"&&ja)if(g.call(ja)=="[object Array]"){for(ka=ja.length;ka--;)y(ja,ka,ia);}else i(ja,function(la){y(ja,la,ia);});return ia.call(ga,ha,ja);};k.parse=function(ga,ha){z=0;aa=ga;var ia=w(v());if(v()!="$")u();z=aa=null;return ha&&g.call(ha)=="[object Function]"?x((ba={},ba[""]=ia,ba),"",ha):ia;};}}}).call(this);},null);
__d("ES5",["ES5ArrayPrototype","ES5FunctionPrototype","ES5StringPrototype","ES5Array","ES5Object","ES5Date","JSON3"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=Array.prototype.slice,o=Object.prototype.toString,p={'JSON.stringify':m.stringify,'JSON.parse':m.parse},q={array:g,'function':h,string:i,Object:k,Array:j,Date:l};for(var r in q){if(!q.hasOwnProperty(r))continue;var s=q[r],t=r===r.toLowerCase()?window[r.replace(/^\w/,function(x){return x.toUpperCase();})].prototype:window[r];for(var u in s){if(!s.hasOwnProperty(u))continue;var v=t[u];p[r+'.'+u]=v&&/\{\s+\[native code\]\s\}/.test(v)?v:s[u];}}function w(x,y,z){var aa=n.call(arguments,3),ba=z?/\s(.*)\]/.exec(o.call(x).toLowerCase())[1]:x,ca=p[ba+'.'+y]||x[y];if(typeof ca==='function')return ca.apply(x,aa);}e.exports=w;},null);
var ES5 = require('ES5');
__d("JSSDKRuntimeConfig",[],{"locale":"en_US","rtl":false,"revision":"1267954"});__d("JSSDKConfig",[],{"bustCache":true,"tagCountLogRate":0.01,"errorHandling":{"rate":4},"usePluginPipe":true,"features":{"kill_fragment":true,"xfbml_profile_pic_server":true,"error_handling":{"rate":4},"e2e_ping_tracking":{"rate":1.0e-6},"xd_timeout":{"rate":4,"value":30000},"use_bundle":true},"api":{"mode":"warn","whitelist":["Canvas","Canvas.Prefetcher","Canvas.Prefetcher.addStaticResource","Canvas.Prefetcher.setCollectionMode","Canvas.getPageInfo","Canvas.hideFlashElement","Canvas.scrollTo","Canvas.setAutoGrow","Canvas.setDoneLoading","Canvas.setSize","Canvas.setUrlHandler","Canvas.showFlashElement","Canvas.startTimer","Canvas.stopTimer","Data","Data.process","Data.query","Data.query:wait","Data.waitOn","Data.waitOn:wait","Event","Event.subscribe","Event.unsubscribe","Music.flashCallback","Music.init","Music.send","Payment","Payment.cancelFlow","Payment.continueFlow","Payment.init","Payment.lockForProcessing","Payment.unlockForProcessing","Payment.parse","Payment.setSize","ThirdPartyProvider","ThirdPartyProvider.init","ThirdPartyProvider.sendData","UA","UA.nativeApp","XFBML","XFBML.RecommendationsBar","XFBML.RecommendationsBar.markRead","XFBML.parse","addFriend","api","getAccessToken","getAuthResponse","getLoginStatus","getUserID","init","login","logout","publish","share","ui","ui:subscribe"]},"initSitevars":{"enableMobileComments":1,"iframePermissions":{"read_stream":false,"manage_mailbox":false,"manage_friendlists":false,"read_mailbox":false,"publish_checkins":true,"status_update":true,"photo_upload":true,"video_upload":true,"sms":false,"create_event":true,"rsvp_event":true,"offline_access":true,"email":true,"xmpp_login":false,"create_note":true,"share_item":true,"export_stream":false,"publish_stream":true,"publish_likes":true,"ads_management":false,"contact_email":true,"access_private_data":false,"read_insights":false,"read_requests":false,"read_friendlists":true,"manage_pages":false,"physical_login":false,"manage_groups":false,"read_deals":false}}});__d("UrlMapConfig",[],{"www":"www.facebook.com","m":"m.facebook.com","connect":"connect.facebook.net","business":"business.facebook.com","api_https":"api.facebook.com","api_read_https":"api-read.facebook.com","graph_https":"graph.facebook.com","fbcdn_http":"static.ak.fbcdn.net","fbcdn_https":"fbstatic-a.akamaihd.net","cdn_http":"static.ak.facebook.com","cdn_https":"s-static.ak.facebook.com"});__d("JSSDKXDConfig",[],{"XdUrl":"\/connect\/xd_arbiter.php?version=41","XdBundleUrl":"\/connect\/xd_arbiter\/V80PAcvrynR.js?version=41","Flash":{"path":"https:\/\/connect.facebook.net\/rsrc.php\/v1\/yR\/r\/ks_9ZXiQ0GL.swf"},"useCdn":true});__d("JSSDKCssConfig",[],{"rules":".fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}.fb_link img{border:none}\n.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_reset .fb_dialog_legacy{overflow:visible}.fb_dialog_advanced{padding:10px;-moz-border-radius:8px;-webkit-border-radius:8px;border-radius:8px}.fb_dialog_content{background:#fff;color:#333}.fb_dialog_close_icon{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;_background-image:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/yL\/r\/s816eWC-2sl.gif);cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{top:5px;left:5px;right:auto}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent;_background-image:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/yL\/r\/s816eWC-2sl.gif)}.fb_dialog_close_icon:active{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent;_background-image:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/yL\/r\/s816eWC-2sl.gif)}.fb_dialog_loader{background-color:#f2f2f2;border:1px solid #606060;font-size:24px;padding:20px}.fb_dialog_top_left,.fb_dialog_top_right,.fb_dialog_bottom_left,.fb_dialog_bottom_right{height:10px;width:10px;overflow:hidden;position:absolute}.fb_dialog_top_left{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 0;left:-10px;top:-10px}.fb_dialog_top_right{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -10px;right:-10px;top:-10px}.fb_dialog_bottom_left{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -20px;bottom:-10px;left:-10px}.fb_dialog_bottom_right{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -30px;right:-10px;bottom:-10px}.fb_dialog_vert_left,.fb_dialog_vert_right,.fb_dialog_horiz_top,.fb_dialog_horiz_bottom{position:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_dialog_vert_right{width:10px;height:100\u0025}.fb_dialog_vert_left{margin-left:-10px}.fb_dialog_vert_right{right:0;margin-right:-10px}.fb_dialog_horiz_top,.fb_dialog_horiz_bottom{width:100\u0025;height:10px}.fb_dialog_horiz_top{margin-top:-10px}.fb_dialog_horiz_bottom{bottom:0;margin-bottom:-10px}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #3b5998;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/yd\/r\/Cou7n-nqK52.gif) no-repeat 5px 50\u0025;float:left;padding:5px 0 7px 26px}body.fb_hidden{-webkit-transform:none;height:100\u0025;margin:0;overflow:visible;position:absolute;top:-10000px;left:0;width:100\u0025}.fb_dialog.fb_dialog_mobile.loading{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/ya\/r\/3rhSv5V8j3o.gif) white no-repeat 50\u0025 50\u0025;min-height:100\u0025;min-width:100\u0025;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{max-height:590px;min-height:590px;max-width:500px;min-width:500px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .45);position:absolute;left:0;top:0;width:100\u0025;min-height:100\u0025;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_content .dialog_header{-webkit-box-shadow:white 0 1px 1px -1px inset;background:-webkit-gradient(linear, 0\u0025 0\u0025, 0\u0025 100\u0025, from(#738ABA), to(#2C4987));border-bottom:1px solid;border-color:#1d4088;color:#fff;font:14px Helvetica, sans-serif;font-weight:bold;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{-webkit-font-smoothing:subpixel-antialiased;height:43px;width:100\u0025}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:-webkit-gradient(linear, 0\u0025 0\u0025, 0\u0025 100\u0025, from(#4966A6), color-stop(.5, #355492), to(#2A4887));border:1px solid #29447e;-webkit-background-clip:padding-box;-webkit-border-radius:3px;-webkit-box-shadow:rgba(0, 0, 0, .117188) 0 1px 1px inset, rgba(255, 255, 255, .167969) 0 1px 0;display:inline-block;margin-top:3px;max-width:85px;line-height:18px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{border:none;background:none;color:#fff;font:12px Helvetica, sans-serif;font-weight:bold;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/y9\/r\/jKEcVPZFk-2.gif) no-repeat 50\u0025 50\u0025;border:1px solid #555;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f2f2f2;border:1px solid #555;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}\n.fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_lift{z-index:1}.fb_hide_iframes iframe{position:relative;left:-10000px}.fb_iframe_widget_loader{position:relative;display:inline-block}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100\u0025}.fb_iframe_widget_loader iframe{min-height:32px;z-index:2;zoom:1}.fb_iframe_widget_loader .FB_Loader{background:url(http:\/\/static.ak.fbcdn.net\/rsrc.php\/v2\/y9\/r\/jKEcVPZFk-2.gif) no-repeat;height:32px;width:32px;margin-left:-16px;position:absolute;left:50\u0025;z-index:4}\n.fb_connect_bar_container div,.fb_connect_bar_container span,.fb_connect_bar_container a,.fb_connect_bar_container img,.fb_connect_bar_container strong{background:none;border-spacing:0;border:0;direction:ltr;font-style:normal;font-variant:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal;vertical-align:baseline}.fb_connect_bar_container{position:fixed;left:0 !important;right:0 !important;height:42px !important;padding:0 25px !important;margin:0 !important;vertical-align:middle !important;border-bottom:1px solid #333 !important;background:#3b5998 !important;z-index:99999999 !important;overflow:hidden !important}.fb_connect_bar_container_ie6{position:absolute;top:expression(document.compatMode==\"CSS1Compat\"? document.documentElement.scrollTop+\"px\":body.scrollTop+\"px\")}.fb_connect_bar{position:relative;margin:auto;height:100\u0025;width:100\u0025;padding:6px 0 0 0 !important;background:none;color:#fff !important;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif !important;font-size:13px !important;font-style:normal !important;font-variant:normal !important;font-weight:normal !important;letter-spacing:normal !important;line-height:1 !important;text-decoration:none !important;text-indent:0 !important;text-shadow:none !important;text-transform:none !important;white-space:normal !important;word-spacing:normal !important}.fb_connect_bar a:hover{color:#fff}.fb_connect_bar .fb_profile img{height:30px;width:30px;vertical-align:middle;margin:0 6px 5px 0}.fb_connect_bar div a,.fb_connect_bar span,.fb_connect_bar span a{color:#bac6da;font-size:11px;text-decoration:none}.fb_connect_bar .fb_buttons{float:right;margin-top:7px}\n.fbpluginrecommendationsbarleft,.fbpluginrecommendationsbarright{position:fixed !important;bottom:0;z-index:999}.fbpluginrecommendationsbarleft{left:10px}.fbpluginrecommendationsbarright{right:10px}","components":["css:fb.css.base","css:fb.css.dialog","css:fb.css.iframewidget","css:fb.css.connectbarwidget","css:fb.css.plugin.recommendationsbar"]});__d("ApiClientConfig",[],{"FlashRequest":{"swfUrl":"https:\/\/connect.facebook.net\/rsrc.php\/v1\/yW\/r\/PvklbuW2Ycn.swf"}});__d("JSSDKCanvasPrefetcherConfig",[],{"blacklist":[144959615576466],"sampleRate":500});__d("JSSDKPluginPipeConfig",[],{"threshold":0,"enabledApps":{"209753825810663":1,"187288694643718":1}});__d("JSSDKConnectBarConfig",[],{"imgs":{"buttonUrl":"rsrc.php\/v2\/yY\/r\/h_Y6u1wrZPW.png","missingProfileUrl":"rsrc.php\/v2\/yo\/r\/UlIqmHJn-SK.gif"}});
__d("QueryString",[],function(a,b,c,d,e,f){function g(k){var l=[];ES5(ES5('Object','keys',false,k).sort(),'forEach',true,function(m){var n=k[m];if(typeof n==='undefined')return;if(n===null){l.push(m);return;}l.push(encodeURIComponent(m)+'='+encodeURIComponent(n));});return l.join('&');}function h(k,l){var m={};if(k==='')return m;var n=k.split('&');for(var o=0;o<n.length;o++){var p=n[o].split('=',2),q=decodeURIComponent(p[0]);if(l&&m.hasOwnProperty(q))throw new URIError('Duplicate key: '+q);m[q]=p.length===2?decodeURIComponent(p[1]):null;}return m;}function i(k,l){return k+(~ES5(k,'indexOf',true,'?')?'&':'?')+(typeof l==='string'?l:j.encode(l));}var j={encode:g,decode:h,appendToUrl:i};e.exports=j;},null);
__d("copyProperties",[],function(a,b,c,d,e,f){function g(h,i,j,k,l,m,n){h=h||{};var o=[i,j,k,l,m],p=0,q;while(o[p]){q=o[p++];for(var r in q)h[r]=q[r];if(q.hasOwnProperty&&q.hasOwnProperty('toString')&&(typeof q.toString!='undefined')&&(h.toString!==q.toString))h.toString=q.toString;}return h;}e.exports=g;},null);
__d("ManagedError",[],function(a,b,c,d,e,f){function g(h,i){Error.prototype.constructor.call(this,h);this.message=h;this.innerError=i;}g.prototype=new Error();g.prototype.constructor=g;e.exports=g;},null);
__d("AssertionError",["ManagedError"],function(a,b,c,d,e,f,g){function h(i){g.prototype.constructor.apply(this,arguments);}h.prototype=new g();h.prototype.constructor=h;e.exports=h;},null);
__d("sprintf",[],function(a,b,c,d,e,f){function g(h){var i=Array.prototype.slice.call(arguments,1),j=0;return h.replace(/%s/g,function(k){return i[j++];});}e.exports=g;},null);
__d("Assert",["AssertionError","sprintf"],function(a,b,c,d,e,f,g,h){function i(n,o){if(typeof n!=='boolean'||!n)throw new g(o);return n;}function j(n,o,p){var q;if(o===undefined){q='undefined';}else if(o===null){q='null';}else{var r=Object.prototype.toString.call(o);q=/\s(\w*)/.exec(r)[1].toLowerCase();}i(ES5(n,'indexOf',true,q)!==-1,p||h('Expression is of type %s, not %s',q,n));return o;}function k(n,o,p){i(o instanceof n,p||'Expression not instance of type');return o;}function l(n,o){m['is'+n]=o;m['maybe'+n]=function(p,q){if(p!=null)o(p,q);};}var m={isInstanceOf:k,isTrue:i,isTruthy:function(n,o){return i(!!n,o);},type:j,define:function(n,o){n=n.substring(0,1).toUpperCase()+n.substring(1).toLowerCase();l(n,function(p,q){i(o(p),q);});}};ES5(['Array','Boolean','Date','Function','Null','Number','Object','Regexp','String','Undefined'],'forEach',true,function(n){l(n,ES5(j,'bind',true,null,n.toLowerCase()));});e.exports=m;},null);
__d("Type",["copyProperties","Assert"],function(a,b,c,d,e,f,g,h){function i(){var m=this.__mixins;if(m)for(var n=0;n<m.length;n++)m[n].apply(this,arguments);}function j(m,n){if(n instanceof m)return true;if(n instanceof i)for(var o=0;o<n.__mixins.length;o++)if(n.__mixins[o]==m)return true;return false;}function k(m,n){var o=m.prototype;if(!ES5('Array','isArray',false,n))n=[n];for(var p=0;p<n.length;p++){var q=n[p];if(typeof q=='function'){o.__mixins.push(q);q=q.prototype;}ES5(ES5('Object','keys',false,q),'forEach',true,function(r){o[r]=q[r];});}}function l(m,n,o){var p=n&&n.hasOwnProperty('constructor')?n.constructor:function(){this.parent.apply(this,arguments);};h.isFunction(p);if(m&&m.prototype instanceof i===false)throw new Error('parent type does not inherit from Type');m=m||i;var q=new Function();q.prototype=m.prototype;p.prototype=new q();g(p.prototype,n);p.prototype.constructor=p;p.parent=m;p.prototype.__mixins=m.prototype.__mixins?Array.prototype.slice.call(m.prototype.__mixins):[];if(o)k(p,o);p.prototype.parent=function(){this.parent=m.prototype.parent;m.apply(this,arguments);};p.prototype.parentCall=function(r){return m.prototype[r].apply(this,Array.prototype.slice.call(arguments,1));};p.extend=function(r,s){return l(this,r,s);};return p;}g(i.prototype,{instanceOf:function(m){return j(m,this);}});g(i,{extend:function(m,n){return typeof m==='function'?l.apply(null,arguments):l(null,m,n);},instanceOf:j});e.exports=i;},null);
__d("ObservableMixin",[],function(a,b,c,d,e,f){function g(){this.__observableEvents={};}g.prototype={inform:function(h){var i=Array.prototype.slice.call(arguments,1),j=Array.prototype.slice.call(this.getSubscribers(h));for(var k=0;k<j.length;k++){if(j[k]===null)continue;try{j[k].apply(this,i);}catch(l){setTimeout(function(){throw l;},0);}}return this;},getSubscribers:function(h){return this.__observableEvents[h]||(this.__observableEvents[h]=[]);},clearSubscribers:function(h){if(h)this.__observableEvents[h]=[];return this;},clearAllSubscribers:function(){this.__observableEvents={};return this;},subscribe:function(h,i){var j=this.getSubscribers(h);j.push(i);return this;},unsubscribe:function(h,i){var j=this.getSubscribers(h);for(var k=0;k<j.length;k++)if(j[k]===i){j.splice(k,1);break;}return this;},monitor:function(h,i){if(!i()){var j=ES5(function(k){if(i.apply(i,arguments))this.unsubscribe(h,j);},'bind',true,this);this.subscribe(h,j);}return this;}};e.exports=g;},null);
__d("sdk.Model",["Type","ObservableMixin"],function(a,b,c,d,e,f,g,h){var i=g.extend({constructor:function(j){this.parent();var k={},l=this;ES5(ES5('Object','keys',false,j),'forEach',true,function(m){k[m]=j[m];l['set'+m]=function(n){if(n===k[m])return this;k[m]=n;l.inform(m+'.change',n);return l;};l['get'+m]=function(){return k[m];};});}},h);e.exports=i;},null);
__d("sdk.Runtime",["sdk.Model","JSSDKRuntimeConfig","copyProperties"],function(a,b,c,d,e,f,g,h,i){var j={UNKNOWN:0,PAGETAB:1,CANVAS:2,PLATFORM:4},k=new g({AccessToken:'',ClientID:'',CookieUserID:'',Environment:j.UNKNOWN,Initialized:false,IsVersioned:false,KidDirectedSite:undefined,Locale:h.locale,LoginStatus:undefined,Revision:h.revision,Rtl:h.rtl,Scope:undefined,Secure:undefined,UseCookie:false,UserID:'',Version:undefined});i(k,{ENVIRONMENTS:j,isEnvironment:function(l){var m=this.getEnvironment();return (l|m)===m;}});(function(){var l=/app_runner/.test(window.name)?j.PAGETAB:/iframe_canvas/.test(window.name)?j.CANVAS:j.UNKNOWN;if((l|j.PAGETAB)===l)l=l|j.CANVAS;k.setEnvironment(l);})();e.exports=k;},null);
__d("sdk.Cookie",["QueryString","sdk.Runtime"],function(a,b,c,d,e,f,g,h){var i=null;function j(m,n,o){m=m+h.getClientID();var p=i&&i!=='.';if(p){document.cookie=m+'=; expires=Wed, 04 Feb 2004 08:00:00 GMT;';document.cookie=m+'=; expires=Wed, 04 Feb 2004 08:00:00 GMT;'+'domain='+location.hostname+';';}var q=new Date(o).toGMTString();document.cookie=m+'='+n+(n&&o===0?'':'; expires='+q)+'; path=/'+(p?'; domain='+i:'');}function k(m){m=m+h.getClientID();var n=new RegExp('\\b'+m+'=([^;]*)\\b');return n.test(document.cookie)?RegExp.$1:null;}var l={setDomain:function(m){i=m;var n=g.encode({base_domain:i&&i!=='.'?i:''}),o=new Date();o.setFullYear(o.getFullYear()+1);j('fbm_',n,o.getTime());},getDomain:function(){return i;},loadMeta:function(){var m=k('fbm_');if(m){var n=g.decode(m);if(!i)i=n.base_domain;return n;}},loadSignedRequest:function(){return k('fbsr_');},setSignedRequestCookie:function(m,n){if(!m)throw new Error('Value passed to Cookie.setSignedRequestCookie '+'was empty.');j('fbsr_',m,n);},clearSignedRequestCookie:function(){j('fbsr_','',0);},setRaw:j};e.exports=l;},null);
__d("guid",[],function(a,b,c,d,e,f){function g(){return 'f'+(Math.random()*(1<<30)).toString(16).replace('.','');}e.exports=g;},null);
__d("UserAgent",[],function(a,b,c,d,e,f){var g=false,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;function w(){if(g)return;g=true;var y=navigator.userAgent,z=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(y),aa=/(Mac OS X)|(Windows)|(Linux)/.exec(y);s=/\b(iPhone|iP[ao]d)/.exec(y);t=/\b(iP[ao]d)/.exec(y);q=/Android/i.exec(y);u=/FBAN\/\w+;/i.exec(y);v=/Mobile/i.exec(y);r=!!(/Win64/.exec(y));if(z){h=z[1]?parseFloat(z[1]):(z[5]?parseFloat(z[5]):NaN);if(h&&document&&document.documentMode)h=document.documentMode;var ba=/(?:Trident\/(\d+.\d+))/.exec(y);m=ba?parseFloat(ba[1])+4:h;i=z[2]?parseFloat(z[2]):NaN;j=z[3]?parseFloat(z[3]):NaN;k=z[4]?parseFloat(z[4]):NaN;if(k){z=/(?:Chrome\/(\d+\.\d+))/.exec(y);l=z&&z[1]?parseFloat(z[1]):NaN;}else l=NaN;}else h=i=j=l=k=NaN;if(aa){if(aa[1]){var ca=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(y);n=ca?parseFloat(ca[1].replace('_','.')):true;}else n=false;o=!!aa[2];p=!!aa[3];}else n=o=p=false;}var x={ie:function(){return w()||h;},ieCompatibilityMode:function(){return w()||(m>h);},ie64:function(){return x.ie()&&r;},firefox:function(){return w()||i;},opera:function(){return w()||j;},webkit:function(){return w()||k;},safari:function(){return x.webkit();},chrome:function(){return w()||l;},windows:function(){return w()||o;},osx:function(){return w()||n;},linux:function(){return w()||p;},iphone:function(){return w()||s;},mobile:function(){return w()||(s||t||q||v);},nativeApp:function(){return w()||u;},android:function(){return w()||q;},ipad:function(){return w()||t;}};e.exports=x;},null);
__d("hasNamePropertyBug",["guid","UserAgent"],function(a,b,c,d,e,f,g,h){var i=h.ie()?undefined:false;function j(){var l=document.createElement("form"),m=l.appendChild(document.createElement("input"));m.name=g();i=m!==l.elements[m.name];l=m=null;return i;}function k(){return typeof i==='undefined'?j():i;}e.exports=k;},null);
__d("wrapFunction",[],function(a,b,c,d,e,f){var g={};function h(i,j,k){j=j||'default';return function(){var l=j in g?g[j](i,k):i;return l.apply(this,arguments);};}h.setWrapper=function(i,j){j=j||'default';g[j]=i;};e.exports=h;},null);
__d("DOMEventListener",["wrapFunction"],function(a,b,c,d,e,f,g){var h,i;if(window.addEventListener){h=function(k,l,m){m.wrapper=g(m,'entry','DOMEventListener.add '+l);k.addEventListener(l,m.wrapper,false);};i=function(k,l,m){k.removeEventListener(l,m.wrapper,false);};}else if(window.attachEvent){h=function(k,l,m){m.wrapper=g(m,'entry','DOMEventListener.add '+l);k.attachEvent('on'+l,m.wrapper);};i=function(k,l,m){k.detachEvent('on'+l,m.wrapper);};}else i=h=function(){};var j={add:function(k,l,m){h(k,l,m);return {remove:function(){i(k,l,m);k=null;}};},remove:i};e.exports=j;},null);
__d("sdk.createIframe",["copyProperties","guid","hasNamePropertyBug","DOMEventListener"],function(a,b,c,d,e,f,g,h,i,j){function k(l){l=g({},l);var m,n=l.name||h(),o=l.root,p=l.style||{border:'none'},q=l.url,r=l.onload;if(i()){m=document.createElement('<iframe name="'+n+'"/>');}else{m=document.createElement("iframe");m.name=n;}delete l.style;delete l.name;delete l.url;delete l.root;delete l.onload;var s=g({frameBorder:0,allowTransparency:true,scrolling:'no'},l);if(s.width)m.width=s.width+'px';if(s.height)m.height=s.height+'px';delete s.height;delete s.width;for(var t in s)if(s.hasOwnProperty(t))m.setAttribute(t,s[t]);g(m.style,p);m.src="javascript:false";o.appendChild(m);if(r)var u=j.add(m,'load',function(){u.remove();r();});m.src=q;return m;}e.exports=k;},null);
__d("DOMWrapper",[],function(a,b,c,d,e,f){var g,h,i={setRoot:function(j){g=j;},getRoot:function(){return g||document.body;},setWindow:function(j){h=j;},getWindow:function(){return h||self;}};e.exports=i;},null);
__d("sdk.feature",["JSSDKConfig"],function(a,b,c,d,e,f,g){function h(i,j){if(g.features&&i in g.features){var k=g.features[i];if(typeof k==='object'&&typeof k.rate==='number'){if(k.rate&&Math.random()*100<=k.rate){return k.value||true;}else return k.value?null:false;}else return k;}return typeof j!=='undefined'?j:null;}e.exports=h;},null);
__d("sdk.getContextType",["UserAgent","sdk.Runtime"],function(a,b,c,d,e,f,g,h){function i(){if(g.nativeApp())return 3;if(g.mobile())return 2;if(h.isEnvironment(h.ENVIRONMENTS.CANVAS))return 5;return 1;}e.exports=i;},null);
__d("UrlMap",["UrlMapConfig"],function(a,b,c,d,e,f,g){var h={resolve:function(i,j){var k=typeof j=='undefined'?location.protocol.replace(':',''):j?'https':'http';if(i in g)return k+'://'+g[i];if(typeof j=='undefined'&&i+'_'+k in g)return k+'://'+g[i+'_'+k];if(j!==true&&i+'_http' in g)return 'http://'+g[i+'_http'];if(j!==false&&i+'_https' in g)return 'https://'+g[i+'_https'];}};e.exports=h;},null);
__d("sdk.Impressions",["guid","QueryString","sdk.Runtime","UrlMap"],function(a,b,c,d,e,f,g,h,i,j){function k(m){var n=i.getClientID();if(!m.api_key&&n)m.api_key=n;m.kid_directed_site=i.getKidDirectedSite();var o=new Image();o.src=h.appendToUrl(j.resolve('www',true)+'/impression.php/'+g()+'/',m);}var l={log:function(m,n){if(!n.source)n.source='jssdk';k({lid:m,payload:ES5('JSON','stringify',false,n)});},impression:k};e.exports=l;},null);
__d("Log",["sprintf"],function(a,b,c,d,e,f,g){var h={DEBUG:3,INFO:2,WARNING:1,ERROR:0};function i(k,l){var m=Array.prototype.slice.call(arguments,2),n=g.apply(null,m),o=window.console;if(o&&j.level>=l)o[k in o?k:'log'](n);}var j={level:-1,Level:h,debug:ES5(i,'bind',true,null,'debug',h.DEBUG),info:ES5(i,'bind',true,null,'info',h.INFO),warn:ES5(i,'bind',true,null,'warn',h.WARNING),error:ES5(i,'bind',true,null,'error',h.ERROR)};e.exports=j;},null);
__d("Base64",[],function(a,b,c,d,e,f){var g='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';function h(l){l=(l.charCodeAt(0)<<16)|(l.charCodeAt(1)<<8)|l.charCodeAt(2);return String.fromCharCode(g.charCodeAt(l>>>18),g.charCodeAt((l>>>12)&63),g.charCodeAt((l>>>6)&63),g.charCodeAt(l&63));}var i='>___?456789:;<=_______'+'\0\1\2\3\4\5\6\7\b\t\n\13\f\r\16\17\20\21\22\23\24\25\26\27\30\31'+'______\32\33\34\35\36\37 !"#$%&\'()*+,-./0123';function j(l){l=(i.charCodeAt(l.charCodeAt(0)-43)<<18)|(i.charCodeAt(l.charCodeAt(1)-43)<<12)|(i.charCodeAt(l.charCodeAt(2)-43)<<6)|i.charCodeAt(l.charCodeAt(3)-43);return String.fromCharCode(l>>>16,(l>>>8)&255,l&255);}var k={encode:function(l){l=unescape(encodeURI(l));var m=(l.length+2)%3;l=(l+'\0\0'.slice(m)).replace(/[\s\S]{3}/g,h);return l.slice(0,l.length+m-2)+'=='.slice(m);},decode:function(l){l=l.replace(/[^A-Za-z0-9+\/]/g,'');var m=(l.length+3)&3;l=(l+'AAA'.slice(m)).replace(/..../g,j);l=l.slice(0,l.length+m-3);try{return decodeURIComponent(escape(l));}catch(n){throw new Error('Not valid UTF-8');}},encodeObject:function(l){return k.encode(ES5('JSON','stringify',false,l));},decodeObject:function(l){return ES5('JSON','parse',false,k.decode(l));},encodeNums:function(l){return String.fromCharCode.apply(String,ES5(l,'map',true,function(m){return g.charCodeAt((m|-(m>63))&-(m>0)&63);}));}};e.exports=k;},null);
__d("sdk.SignedRequest",["Base64"],function(a,b,c,d,e,f,g){function h(j){if(!j)return null;var k=j.split('.',2)[1].replace(/\-/g,'+').replace(/\_/g,'/');return g.decodeObject(k);}var i={parse:h};e.exports=i;},null);
__d("URIRFC3986",[],function(a,b,c,d,e,f){var g=new RegExp('^'+'([^:/?#]+:)?'+'(//'+'([^\\\\/?#@]*@)?'+'('+'\\[[A-Fa-f0-9:.]+\\]|'+'[^\\/?#:]*'+')'+'(:[0-9]*)?'+')?'+'([^?#]*)'+'(\\?[^#]*)?'+'(#.*)?'),h={parse:function(i){if(ES5(i,'trim',true)==='')return null;var j=i.match(g),k={};k.uri=j[0]?j[0]:null;k.scheme=j[1]?j[1].substr(0,j[1].length-1):null;k.authority=j[2]?j[2].substr(2):null;k.userinfo=j[3]?j[3].substr(0,j[3].length-1):null;k.host=j[2]?j[4]:null;k.port=j[5]?(j[5].substr(1)?parseInt(j[5].substr(1),10):null):null;k.path=j[6]?j[6]:null;k.query=j[7]?j[7].substr(1):null;k.fragment=j[8]?j[8].substr(1):null;k.isGenericURI=k.authority===null&&!!k.scheme;return k;}};e.exports=h;},null);
__d("createObjectFrom",[],function(a,b,c,d,e,f){function g(h,i){var j={},k=ES5('Array','isArray',false,i);if(typeof i=='undefined')i=true;for(var l=h.length;l--;)j[h[l]]=k?i[l]:i;return j;}e.exports=g;},null);
__d("URISchemes",["createObjectFrom"],function(a,b,c,d,e,f,g){var h=g(['fb','fbcf','fbconnect','fb-messenger','fbrpc','file','ftp','http','https','mailto','ms-app','itms','itms-apps','itms-services','market','svn+ssh','fbstaging','tel','sms']),i={isAllowed:function(j){if(!j)return true;return h.hasOwnProperty(j.toLowerCase());}};e.exports=i;},null);
__d("eprintf",[],function(a,b,c,d,e,f){var g=function(h){var i=ES5(Array.prototype.slice.call(arguments),'map',true,function(l){return String(l);}),j=h.split('%s').length-1;if(j!==i.length-1)return g('eprintf args number mismatch: %s',ES5('JSON','stringify',false,i));var k=1;return h.replace(/%s/g,function(l){return String(i[k++]);});};e.exports=g;},null);
__d("ex",["eprintf"],function(a,b,c,d,e,f,g){var h=function(){var i=Array.prototype.slice.call(arguments,0);i=ES5(i,'map',true,function(j){return String(j);});if(i[0].split('%s').length!==i.length)return h('ex args number mismatch: %s',ES5('JSON','stringify',false,i));return h._prefix+ES5('JSON','stringify',false,i)+h._suffix;};h._prefix='<![EX[';h._suffix=']]>';e.exports=h;},null);
__d("invariant",[],function(a,b,c,d,e,f){"use strict";var g=function(h){if(!h){var i=new Error('Minified exception occured; use the non-minified dev environment for '+'the full error message and additional helpful warnings.');i.framesToPop=1;throw i;}};e.exports=g;},null);
__d("URIBase",["URIRFC3986","URISchemes","copyProperties","ex","invariant"],function(a,b,c,d,e,f,g,h,i,j,k){var l=new RegExp('[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f'+'\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF'+'\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]'),m=new RegExp('^(?:[^/]*:|'+'[\\x00-\\x1f]*/[\\x00-\\x1f]*/)');function n(p,q,r,s){if(!q)return true;if(q instanceof o){p.setProtocol(q.getProtocol());p.setDomain(q.getDomain());p.setPort(q.getPort());p.setPath(q.getPath());p.setQueryData(s.deserialize(s.serialize(q.getQueryData())));p.setFragment(q.getFragment());return true;}q=ES5(q.toString(),'trim',true);var t=g.parse(q)||{};if(!r&&!h.isAllowed(t.scheme))return false;p.setProtocol(t.scheme||'');if(!r&&l.test(t.host))return false;p.setDomain(t.host||'');p.setPort(t.port||'');p.setPath(t.path||'');if(r){p.setQueryData(s.deserialize(t.query)||{});}else try{p.setQueryData(s.deserialize(t.query)||{});}catch(u){return false;}p.setFragment(t.fragment||'');if(t.userinfo!==null)if(r){throw new Error(j('URI.parse: invalid URI (userinfo is not allowed in a URI): %s',p.toString()));}else return false;if(!p.getDomain()&&ES5(p.getPath(),'indexOf',true,'\\')!==-1)if(r){throw new Error(j('URI.parse: invalid URI (no domain but multiple back-slashes): %s',p.toString()));}else return false;if(!p.getProtocol()&&m.test(q))if(r){throw new Error(j('URI.parse: invalid URI (unsafe protocol-relative URLs): %s',p.toString()));}else return false;return true;}function o(p,q){"use strict";k(q);this.$URIBase0=q;this.$URIBase1='';this.$URIBase2='';this.$URIBase3='';this.$URIBase4='';this.$URIBase5='';this.$URIBase6={};n(this,p,true,q);}o.prototype.setProtocol=function(p){"use strict";k(h.isAllowed(p));this.$URIBase1=p;return this;};o.prototype.getProtocol=function(p){"use strict";return this.$URIBase1;};o.prototype.setSecure=function(p){"use strict";return this.setProtocol(p?'https':'http');};o.prototype.isSecure=function(){"use strict";return this.getProtocol()==='https';};o.prototype.setDomain=function(p){"use strict";if(l.test(p))throw new Error(j('URI.setDomain: unsafe domain specified: %s for url %s',p,this.toString()));this.$URIBase2=p;return this;};o.prototype.getDomain=function(){"use strict";return this.$URIBase2;};o.prototype.setPort=function(p){"use strict";this.$URIBase3=p;return this;};o.prototype.getPort=function(){"use strict";return this.$URIBase3;};o.prototype.setPath=function(p){"use strict";this.$URIBase4=p;return this;};o.prototype.getPath=function(){"use strict";return this.$URIBase4;};o.prototype.addQueryData=function(p,q){"use strict";if(Object.prototype.toString.call(p)==='[object Object]'){i(this.$URIBase6,p);}else this.$URIBase6[p]=q;return this;};o.prototype.setQueryData=function(p){"use strict";this.$URIBase6=p;return this;};o.prototype.getQueryData=function(){"use strict";return this.$URIBase6;};o.prototype.removeQueryData=function(p){"use strict";if(!ES5('Array','isArray',false,p))p=[p];for(var q=0,r=p.length;q<r;++q)delete this.$URIBase6[p[q]];return this;};o.prototype.setFragment=function(p){"use strict";this.$URIBase5=p;return this;};o.prototype.getFragment=function(){"use strict";return this.$URIBase5;};o.prototype.isEmpty=function(){"use strict";return !(this.getPath()||this.getProtocol()||this.getDomain()||this.getPort()||ES5('Object','keys',false,this.getQueryData()).length>0||this.getFragment());};o.prototype.toString=function(){"use strict";var p='';if(this.$URIBase1)p+=this.$URIBase1+'://';if(this.$URIBase2)p+=this.$URIBase2;if(this.$URIBase3)p+=':'+this.$URIBase3;if(this.$URIBase4){p+=this.$URIBase4;}else if(p)p+='/';var q=this.$URIBase0.serialize(this.$URIBase6);if(q)p+='?'+q;if(this.$URIBase5)p+='#'+this.$URIBase5;return p;};o.prototype.getOrigin=function(){"use strict";return this.$URIBase1+'://'+this.$URIBase2+(this.$URIBase3?':'+this.$URIBase3:'');};o.isValidURI=function(p,q){return n(new o(null,q),p,false,q);};e.exports=o;},null);
__d("sdk.URI",["Assert","QueryString","URIBase"],function(a,b,c,d,e,f,g,h,i){var j=/\.facebook\.com$/,k={serialize:function(o){return o?h.encode(o):'';},deserialize:function(o){return o?h.decode(o):{};}};for(var l in i)if(i.hasOwnProperty(l))n[l]=i[l];var m=i===null?null:i.prototype;n.prototype=ES5('Object','create',false,m);n.prototype.constructor=n;n.__superConstructor__=i;function n(o){"use strict";g.isString(o,'The passed argument was of invalid type.');if(!(this instanceof n))return new n(o);i.call(this,o,k);}n.prototype.isFacebookURI=function(){"use strict";return j.test(this.getDomain());};n.prototype.valueOf=function(){"use strict";return this.toString();};e.exports=n;},null);
__d("sdk.domReady",[],function(a,b,c,d,e,f){var g,h="readyState" in document?/loaded|complete/.test(document.readyState):!!document.body;function i(){if(!g)return;var l;while(l=g.shift())l();g=null;}function j(l){if(g){g.push(l);return;}else l();}if(!h){g=[];if(document.addEventListener){document.addEventListener('DOMContentLoaded',i,false);window.addEventListener('load',i,false);}else if(document.attachEvent){document.attachEvent('onreadystatechange',i);window.attachEvent('onload',i);}if(document.documentElement.doScroll&&window==window.top){var k=function(){try{document.documentElement.doScroll('left');}catch(l){setTimeout(k,0);return;}i();};k();}}e.exports=j;},3);
__d("sdk.Content",["sdk.domReady","Log","UserAgent"],function(a,b,c,d,e,f,g,h,i){var j,k,l={append:function(m,n){if(!n)if(!j){j=n=document.getElementById('fb-root');if(!n){h.warn('The "fb-root" div has not been created, auto-creating');j=n=document.createElement('div');n.id='fb-root';if(i.ie()||!document.body){g(function(){document.body.appendChild(n);});}else document.body.appendChild(n);}n.className+=' fb_reset';}else n=j;if(typeof m=='string'){var o=document.createElement('div');n.appendChild(o).innerHTML=m;return o;}else return n.appendChild(m);},appendHidden:function(m){if(!n){var n=document.createElement('div'),o=n.style;o.position='absolute';o.top='-10000px';o.width=o.height=0;n=l.append(n);}return l.append(m,n);},submitToTarget:function(m,n){var o=document.createElement('form');o.action=m.url;o.target=m.target;o.method=(n)?'GET':'POST';l.appendHidden(o);for(var p in m.params)if(m.params.hasOwnProperty(p)){var q=m.params[p];if(q!==null&&q!==undefined){var r=document.createElement('input');r.name=p;r.value=q;o.appendChild(r);}}o.submit();o.parentNode.removeChild(o);}};e.exports=l;},null);
__d("sdk.Event",[],function(a,b,c,d,e,f){var g={subscribers:function(){if(!this._subscribersMap)this._subscribersMap={};return this._subscribersMap;},subscribe:function(h,i){var j=this.subscribers();if(!j[h]){j[h]=[i];}else j[h].push(i);},unsubscribe:function(h,i){var j=this.subscribers()[h];if(j)ES5(j,'forEach',true,function(k,l){if(k==i)j[l]=null;});},monitor:function(h,i){if(!i()){var j=this,k=function(){if(i.apply(i,arguments))j.unsubscribe(h,k);};this.subscribe(h,k);}},clear:function(h){delete this.subscribers()[h];},fire:function(h){var i=Array.prototype.slice.call(arguments,1),j=this.subscribers()[h];if(j)ES5(j,'forEach',true,function(k){if(k)k.apply(this,i);});}};e.exports=g;},null);
__d("Queue",["copyProperties"],function(a,b,c,d,e,f,g){var h={};function i(j){"use strict";this._opts=g({interval:0,processor:null},j);this._queue=[];this._stopped=true;}i.prototype._dispatch=function(j){"use strict";if(this._stopped||this._queue.length===0)return;if(!this._opts.processor){this._stopped=true;throw new Error('No processor available');}if(this._opts.interval){this._opts.processor.call(this,this._queue.shift());this._timeout=setTimeout(ES5(this._dispatch,'bind',true,this),this._opts.interval);}else while(this._queue.length)this._opts.processor.call(this,this._queue.shift());};i.prototype.enqueue=function(j){"use strict";if(this._opts.processor&&!this._stopped){this._opts.processor.call(this,j);}else this._queue.push(j);return this;};i.prototype.start=function(j){"use strict";if(j)this._opts.processor=j;this._stopped=false;this._dispatch();return this;};i.prototype.isStarted=function(){"use strict";return !this._stopped;};i.prototype.dispatch=function(){"use strict";this._dispatch(true);};i.prototype.stop=function(j){"use strict";this._stopped=true;if(j)clearTimeout(this._timeout);return this;};i.prototype.merge=function(j,k){"use strict";this._queue[k?'unshift':'push'].apply(this._queue,j._queue);j._queue=[];this._dispatch();return this;};i.prototype.getLength=function(){"use strict";return this._queue.length;};i.get=function(j,k){"use strict";var l;if(j in h){l=h[j];}else l=h[j]=new i(k);return l;};i.exists=function(j){"use strict";return j in h;};i.remove=function(j){"use strict";return delete h[j];};e.exports=i;},null);
__d("JSONRPC",["copyProperties","Log"],function(a,b,c,d,e,f,g,h){function i(j){this._counter=0;this._callbacks={};this.remote=ES5(function(k){this._context=k;return this.remote;},'bind',true,this);this.local={};this._write=j;}g(i.prototype,{stub:function(j){this.remote[j]=ES5(function(){var k=Array.prototype.slice.call(arguments),l={jsonrpc:'2.0',method:j};if(typeof k[k.length-1]=='function'){l.id=++this._counter;this._callbacks[l.id]=k.pop();}l.params=k;this._write(ES5('JSON','stringify',false,l),this._context||{method:j});},'bind',true,this);},read:function(j,k){var l=ES5('JSON','parse',false,j),m=l.id;if(!l.method){if(!this._callbacks[m]){h.warn('Could not find callback %s',m);return;}var n=this._callbacks[m];delete this._callbacks[m];delete l.id;delete l.jsonrpc;n(l);return;}var o=this,p=this.local[l.method],q;if(m){q=function(t,u){var v={jsonrpc:'2.0',id:m};v[t]=u;setTimeout(function(){o._write(ES5('JSON','stringify',false,v),k);},0);};}else q=function(){};if(!p){h.error('Method "%s" has not been defined',l.method);q('error',{code:-32601,message:'Method not found',data:l.method});return;}l.params.push(ES5(q,'bind',true,null,'result'));l.params.push(ES5(q,'bind',true,null,'error'));try{var s=p.apply(k||null,l.params);if(typeof s!=='undefined')q('result',s);}catch(r){h.error('Invokation of RPC method %s resulted in the error: %s',l.method,r.message);q('error',{code:-32603,message:'Internal error',data:r.message});}}});e.exports=i;},null);
__d("sdk.RPC",["Assert","JSONRPC","Queue"],function(a,b,c,d,e,f,g,h,i){var j=new i(),k=new h(function(m){j.enqueue(m);}),l={local:k.local,remote:k.remote,stub:ES5(k.stub,'bind',true,k),setInQueue:function(m){g.isInstanceOf(i,m);m.start(function(n){k.read(n);});},getOutQueue:function(){return j;}};e.exports=l;},null);
__d("sdk.Scribe",["QueryString","sdk.Runtime","UrlMap"],function(a,b,c,d,e,f,g,h,i){function j(l,m){if(typeof m.extra=='object')m.extra.revision=h.getRevision();(new Image()).src=g.appendToUrl(i.resolve('www',true)+'/common/scribe_endpoint.php',{c:l,m:ES5('JSON','stringify',false,m)});}var k={log:j};e.exports=k;},null);
__d("emptyFunction",["copyProperties"],function(a,b,c,d,e,f,g){function h(j){return function(){return j;};}function i(){}g(i,{thatReturns:h,thatReturnsFalse:h(false),thatReturnsTrue:h(true),thatReturnsNull:h(null),thatReturnsThis:function(){return this;},thatReturnsArgument:function(j){return j;}});e.exports=i;},null);
__d("htmlSpecialChars",[],function(a,b,c,d,e,f){var g=/&/g,h=/</g,i=/>/g,j=/"/g,k=/'/g;function l(m){if(typeof m=='undefined'||m===null||!m.toString)return '';if(m===false){return '0';}else if(m===true)return '1';return m.toString().replace(g,'&amp;').replace(j,'&quot;').replace(k,'&#039;').replace(h,'&lt;').replace(i,'&gt;');}e.exports=l;},null);
__d("Flash",["DOMEventListener","DOMWrapper","QueryString","UserAgent","copyProperties","guid","htmlSpecialChars"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n={},o,p=h.getWindow().document;function q(v){var w=p.getElementById(v);if(w)w.parentNode.removeChild(w);delete n[v];}function r(){for(var v in n)if(n.hasOwnProperty(v))q(v);}function s(v){return v.replace(/\d+/g,function(w){return '000'.substring(w.length)+w;});}function t(v){if(!o){if(j.ie()>=9)g.add(window,'unload',r);o=true;}n[v]=v;}var u={embed:function(v,w,x,y){var z=l();v=m(v).replace(/&amp;/g,'&');x=k({allowscriptaccess:'always',flashvars:y,movie:v},x||{});if(typeof x.flashvars=='object')x.flashvars=i.encode(x.flashvars);var aa=[];for(var ba in x)if(x.hasOwnProperty(ba)&&x[ba])aa.push('<param name="'+m(ba)+'" value="'+m(x[ba])+'">');var ca=w.appendChild(p.createElement('span')),da='<object '+(j.ie()?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ':'type="application/x-shockwave-flash"')+'data="'+v+'" '+(x.height?'height="'+x.height+'" ':'')+(x.width?'width="'+x.width+'" ':'')+'id="'+z+'">'+aa.join('')+'</object>';ca.innerHTML=da;var ea=ca.firstChild;t(z);return ea;},remove:q,getVersion:function(){var v='Shockwave Flash',w='application/x-shockwave-flash',x='ShockwaveFlash.ShockwaveFlash',y;if(navigator.plugins&&typeof navigator.plugins[v]=='object'){var z=navigator.plugins[v].description;if(z&&navigator.mimeTypes&&navigator.mimeTypes[w]&&navigator.mimeTypes[w].enabledPlugin)y=z.match(/\d+/g);}if(!y)try{y=(new ActiveXObject(x)).GetVariable('$version').match(/(\d+),(\d+),(\d+),(\d+)/);y=Array.prototype.slice.call(y,1);}catch(aa){}return y;},checkMinVersion:function(v){var w=u.getVersion();if(!w)return false;return s(w.join('.'))>=s(v);},isAvailable:function(){return !!u.getVersion();}};e.exports=u;},null);
__d("dotAccess",[],function(a,b,c,d,e,f){function g(h,i,j){var k=i.split('.');do{var l=k.shift();h=h[l]||j&&(h[l]={});}while(k.length&&h);return h;}e.exports=g;},null);
__d("GlobalCallback",["DOMWrapper","dotAccess","guid","wrapFunction"],function(a,b,c,d,e,f,g,h,i,j){var k,l,m={setPrefix:function(n){k=h(g.getWindow(),n,true);l=n;},create:function(n,o){if(!k)this.setPrefix('__globalCallbacks');var p=i();k[p]=j(n,'entry',o||'GlobalCallback');return l+'.'+p;},remove:function(n){var o=n.substring(l.length+1);delete k[o];}};e.exports=m;},null);
__d("XDM",["DOMEventListener","DOMWrapper","emptyFunction","Flash","GlobalCallback","guid","Log","UserAgent","wrapFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p={},q={transports:[]},r=h.getWindow();function s(u){var v={},w=u.length,x=q.transports;while(w--)v[u[w]]=1;w=x.length;while(w--){var y=x[w],z=p[y];if(!v[y]&&z.isAvailable())return y;}}var t={register:function(u,v){m.debug('Registering %s as XDM provider',u);q.transports.push(u);p[u]=v;},create:function(u){if(!u.whenReady&&!u.onMessage){m.error('An instance without whenReady or onMessage makes no sense');throw new Error('An instance without whenReady or '+'onMessage makes no sense');}if(!u.channel){m.warn('Missing channel name, selecting at random');u.channel=l();}if(!u.whenReady)u.whenReady=i;if(!u.onMessage)u.onMessage=i;var v=u.transport||s(u.blacklist||[]),w=p[v];if(w&&w.isAvailable()){m.debug('%s is available',v);w.init(u);return v;}}};t.register('flash',(function(){var u=false,v,w=false,x=15000,y;return {isAvailable:function(){return j.checkMinVersion('8.0.24');},init:function(z){m.debug('init flash: '+z.channel);var aa={send:function(da,ea,fa,ga){m.debug('sending to: %s (%s)',ea,ga);v.postMessage(da,ea,ga);}};if(u){z.whenReady(aa);return;}var ba=z.root.appendChild(r.document.createElement('div')),ca=k.create(function(){k.remove(ca);clearTimeout(y);m.info('xdm.swf called the callback');var da=k.create(function(ea,fa){ea=decodeURIComponent(ea);fa=decodeURIComponent(fa);m.debug('received message %s from %s',ea,fa);z.onMessage(ea,fa);},'xdm.swf:onMessage');v.init(z.channel,da);z.whenReady(aa);},'xdm.swf:load');v=j.embed(z.flashUrl,ba,null,{protocol:location.protocol.replace(':',''),host:location.host,callback:ca,log:w});y=setTimeout(function(){m.warn('The Flash component did not load within %s ms - '+'verify that the container is not set to hidden or invisible '+'using CSS as this will cause some browsers to not load '+'the components',x);},x);u=true;}};})());t.register('postmessage',(function(){var u=false;return {isAvailable:function(){return !!r.postMessage;},init:function(v){m.debug('init postMessage: '+v.channel);var w='_FB_'+v.channel,x={send:function(y,z,aa,ba){if(r===aa){m.error('Invalid windowref, equal to window (self)');throw new Error();}m.debug('sending to: %s (%s)',z,ba);var ca=function(){aa.postMessage('_FB_'+ba+y,z);};if(n.ie()==8||n.ieCompatibilityMode()){setTimeout(ca,0);}else ca();}};if(u){v.whenReady(x);return;}g.add(r,'message',o(function(event){var y=event.data,z=event.origin||'native';if(!/^(https?:\/\/|native$)/.test(z)){m.debug('Received message from invalid origin type: %s',z);return;}if(typeof y!='string'){m.warn('Received message of type %s from %s, expected a string',typeof y,z);return;}m.debug('received message %s from %s',y,z);if(y.substring(0,w.length)==w)y=y.substring(w.length);v.onMessage(y,z);},'entry','onMessage'));v.whenReady(x);u=true;}};})());e.exports=t;},null);
__d("sdk.XD",["sdk.Content","sdk.Event","Log","QueryString","Queue","sdk.RPC","sdk.Runtime","sdk.Scribe","sdk.URI","UrlMap","JSSDKXDConfig","XDM","sdk.createIframe","sdk.feature","guid"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var v=new k(),w=new k(),x=new k(),y,z,aa=u(),ba=q.useCdn?'cdn':'www',ca=t('use_bundle')?q.XdBundleUrl:q.XdUrl,da=p.resolve(ba,false)+ca,ea=p.resolve(ba,true)+ca,fa=u(),ga=location.protocol+'//'+location.host,ha,ia=false,ja='Facebook Cross Domain Communication Frame',ka={},la=new k();l.setInQueue(la);function ma(sa){i.info('Remote XD can talk to facebook.com (%s)',sa);m.setEnvironment(sa==='canvas'?m.ENVIRONMENTS.CANVAS:m.ENVIRONMENTS.PAGETAB);}function na(sa,ta){if(!ta){i.error('No senderOrigin');throw new Error();}var ua=/^https?/.exec(ta)[0];switch(sa.xd_action){case 'proxy_ready':var va,wa;if(ua=='https'){va=x;wa=z;}else{va=w;wa=y;}if(sa.registered){ma(sa.registered);v=va.merge(v);}i.info('Proxy ready, starting queue %s containing %s messages',ua+'ProxyQueue',va.getLength());va.start(function(ya){ha.send(typeof ya==='string'?ya:j.encode(ya),ta,wa.contentWindow,fa+'_'+ua);});break;case 'plugin_ready':i.info('Plugin %s ready, protocol: %s',sa.name,ua);ka[sa.name]={protocol:ua};if(k.exists(sa.name)){var xa=k.get(sa.name);i.debug('Enqueuing %s messages for %s in %s',xa.getLength(),sa.name,ua+'ProxyQueue');(ua=='https'?x:w).merge(xa);}break;}if(sa.data)oa(sa.data,ta);}function oa(sa,ta){if(ta&&ta!=='native'&&!o(ta).isFacebookURI())return;if(typeof sa=='string'){if(/^FB_RPC:/.test(sa)){la.enqueue(sa.substring(7));return;}if(sa.substring(0,1)=='{'){try{sa=ES5('JSON','parse',false,sa);}catch(ua){i.warn('Failed to decode %s as JSON',sa);return;}}else sa=j.decode(sa);}if(!ta)if(sa.xd_sig==aa)ta=sa.xd_origin;if(sa.xd_action){na(sa,ta);return;}if(sa.access_token)m.setSecure(/^https/.test(ga));if(sa.cb){var va=ra._callbacks[sa.cb];if(!ra._forever[sa.cb])delete ra._callbacks[sa.cb];if(va)va(sa);}}function pa(sa,ta){if(sa=='facebook'){ta.relation='parent.parent';v.enqueue(ta);}else{ta.relation='parent.frames["'+sa+'"]';var ua=ka[sa];if(ua){i.debug('Enqueuing message for plugin %s in %s',sa,ua.protocol+'ProxyQueue');(ua.protocol=='https'?x:w).enqueue(ta);}else{i.debug('Buffering message for plugin %s',sa);k.get(sa).enqueue(ta);}}}l.getOutQueue().start(function(sa){pa('facebook','FB_RPC:'+sa);});function qa(sa){if(ia)return;var ta=g.appendHidden(document.createElement('div')),ua=r.create({blacklist:null,root:ta,channel:fa,flashUrl:q.Flash.path,whenReady:function(va){ha=va;var wa={channel:fa,origin:location.protocol+'//'+location.host,transport:ua,xd_name:sa},xa='#'+j.encode(wa);if(m.getSecure()!==true)y=s({url:da+xa,name:'fb_xdm_frame_http',id:'fb_xdm_frame_http',root:ta,'aria-hidden':true,title:ja,tabindex:-1});z=s({url:ea+xa,name:'fb_xdm_frame_https',id:'fb_xdm_frame_https',root:ta,'aria-hidden':true,title:ja,tabindex:-1});},onMessage:oa});if(!ua)n.log('jssdk_error',{appId:m.getClientID(),error:'XD_TRANSPORT',extra:{message:'Failed to create a valid transport'}});ia=true;}var ra={rpc:l,_callbacks:{},_forever:{},_channel:fa,_origin:ga,onMessage:oa,recv:oa,init:qa,sendToFacebook:pa,inform:function(sa,ta,ua,va){pa('facebook',{method:sa,params:ES5('JSON','stringify',false,ta||{}),behavior:va||'p',relation:ua});},handler:function(sa,ta,ua,va){var wa='#'+j.encode({cb:this.registerCallback(sa,ua,va),origin:ga+'/'+fa,domain:location.hostname,relation:ta||'opener'});return (location.protocol=='https:'?ea:da)+wa;},registerCallback:function(sa,ta,ua){ua=ua||u();if(ta)ra._forever[ua]=true;ra._callbacks[ua]=sa;return ua;}};h.subscribe('init:post',function(sa){qa(sa.xdProxyName);var ta=t('xd_timeout');if(ta)setTimeout(function(){var ua=z&&(!!y==w.isStarted()&&!!z==x.isStarted());if(!ua)n.log('jssdk_error',{appId:m.getClientID(),error:'XD_INITIALIZATION',extra:{message:'Failed to initialize in '+ta+'ms'}});},ta);});e.exports=ra;},null);
__d("sdk.Auth",["sdk.Cookie","copyProperties","sdk.createIframe","DOMWrapper","sdk.feature","sdk.getContextType","guid","sdk.Impressions","Log","ObservableMixin","sdk.Runtime","sdk.SignedRequest","UrlMap","sdk.URI","sdk.XD"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var v,w,x=new p();function y(ea,fa){var ga=q.getUserID(),ha='';if(ea)if(ea.userID){ha=ea.userID;}else if(ea.signedRequest){var ia=r.parse(ea.signedRequest);if(ia&&ia.user_id)ha=ia.user_id;}var ja=q.getLoginStatus(),ka=(ja==='unknown'&&ea)||(q.getUseCookie()&&q.getCookieUserID()!==ha),la=ga&&!ea,ma=ea&&ga&&ga!=ha,na=ea!=v,oa=fa!=(ja||'unknown');q.setLoginStatus(fa);q.setAccessToken(ea&&ea.accessToken||null);q.setUserID(ha);v=ea;var pa={authResponse:ea,status:fa};if(la||ma)x.inform('logout',pa);if(ka||ma)x.inform('login',pa);if(na)x.inform('authresponse.change',pa);if(oa)x.inform('status.change',pa);return pa;}function z(){return v;}function aa(ea,fa,ga){return function(ha){var ia;if(ha&&ha.access_token){var ja=r.parse(ha.signed_request);fa={accessToken:ha.access_token,userID:ja.user_id,expiresIn:parseInt(ha.expires_in,10),signedRequest:ha.signed_request};if(ha.granted_scopes)fa.grantedScopes=ha.granted_scopes;if(q.getUseCookie()){var ka=fa.expiresIn===0?0:ES5('Date','now',false)+fa.expiresIn*1000,la=g.getDomain();if(!la&&ha.base_domain)g.setDomain('.'+ha.base_domain);g.setSignedRequestCookie(ha.signed_request,ka);}ia='connected';y(fa,ia);}else if(ga==='logout'||ga==='login_status'){if(ha.error&&ha.error==='not_authorized'){ia='not_authorized';}else ia='unknown';y(null,ia);if(q.getUseCookie())g.clearSignedRequestCookie();}if(ha&&ha.https==1)q.setSecure(true);if(ea)ea({authResponse:fa,status:q.getLoginStatus()});return fa;};}function ba(ea){var fa,ga=ES5('Date','now',false);if(w){clearTimeout(w);w=null;}var ha=aa(ea,v,'login_status'),ia=t(s.resolve('www',true)+'/connect/ping').setQueryData({client_id:q.getClientID(),response_type:'token,signed_request,code',domain:location.hostname,origin:l(),redirect_uri:u.handler(function(ja){if(k('e2e_ping_tracking',true)){var ka={init:ga,close:ES5('Date','now',false),method:'ping'};o.debug('e2e: %s',ES5('JSON','stringify',false,ka));n.log(114,{payload:ka});}fa.parentNode.removeChild(fa);if(ha(ja))w=setTimeout(function(){ba(function(){});},1200000);},'parent'),sdk:'joey',kid_directed_site:q.getKidDirectedSite()});fa=i({root:j.getRoot(),name:m(),url:ia.toString(),style:{display:'none'}});}var ca;function da(ea,fa){if(!q.getClientID()){o.warn('FB.getLoginStatus() called before calling FB.init().');return;}if(ea)if(!fa&&ca=='loaded'){ea({status:q.getLoginStatus(),authResponse:z()});return;}else x.subscribe('FB.loginStatus',ea);if(!fa&&ca=='loading')return;ca='loading';var ga=function(ha){ca='loaded';x.inform('FB.loginStatus',ha);x.clearSubscribers('FB.loginStatus');};ba(ga);}h(x,{getLoginStatus:da,fetchLoginStatus:ba,setAuthResponse:y,getAuthResponse:z,parseSignedRequest:r.parse,xdResponseWrapper:aa});e.exports=x;},null);
__d("toArray",["invariant"],function(a,b,c,d,e,f,g){function h(i){var j=i.length;g(!ES5('Array','isArray',false,i)&&(typeof i==='object'||typeof i==='function'));g(typeof j==='number');g(j===0||(j-1) in i);if(i.hasOwnProperty)try{return Array.prototype.slice.call(i);}catch(k){}var l=Array(j);for(var m=0;m<j;m++)l[m]=i[m];return l;}e.exports=h;},null);
__d("createArrayFrom",["toArray"],function(a,b,c,d,e,f,g){function h(j){return (!!j&&(typeof j=='object'||typeof j=='function')&&('length' in j)&&!('setInterval' in j)&&(typeof j.nodeType!='number')&&(ES5('Array','isArray',false,j)||('callee' in j)||('item' in j)));}function i(j){if(!h(j)){return [j];}else if(ES5('Array','isArray',false,j)){return j.slice();}else return g(j);}e.exports=i;},null);
__d("sdk.DOM",["Assert","createArrayFrom","sdk.domReady","UserAgent"],function(a,b,c,d,e,f,g,h,i,j){var k={};function l(z,aa){var ba=(z.getAttribute(aa)||z.getAttribute(aa.replace(/_/g,'-'))||z.getAttribute(aa.replace(/-/g,'_'))||z.getAttribute(aa.replace(/-/g,''))||z.getAttribute(aa.replace(/_/g,''))||z.getAttribute('data-'+aa)||z.getAttribute('data-'+aa.replace(/_/g,'-'))||z.getAttribute('data-'+aa.replace(/-/g,'_'))||z.getAttribute('data-'+aa.replace(/-/g,''))||z.getAttribute('data-'+aa.replace(/_/g,'')));return ba?String(ba):null;}function m(z,aa){var ba=l(z,aa);return ba?/^(true|1|yes|on)$/.test(ba):null;}function n(z,aa){g.isTruthy(z,'element not specified');g.isString(aa);try{return String(z[aa]);}catch(ba){throw new Error('Could not read property '+aa+' : '+ba.message);}}function o(z,aa){g.isTruthy(z,'element not specified');g.isString(aa);try{z.innerHTML=aa;}catch(ba){throw new Error('Could not set innerHTML : '+ba.message);}}function p(z,aa){g.isTruthy(z,'element not specified');g.isString(aa);var ba=' '+n(z,'className')+' ';return ES5(ba,'indexOf',true,' '+aa+' ')>=0;}function q(z,aa){g.isTruthy(z,'element not specified');g.isString(aa);if(!p(z,aa))z.className=n(z,'className')+' '+aa;}function r(z,aa){g.isTruthy(z,'element not specified');g.isString(aa);var ba=new RegExp('\\s*'+aa,'g');z.className=ES5(n(z,'className').replace(ba,''),'trim',true);}function s(z,aa,ba){g.isString(z);aa=aa||document.body;ba=ba||'*';if(aa.querySelectorAll)return h(aa.querySelectorAll(ba+'.'+z));var ca=aa.getElementsByTagName(ba),da=[];for(var ea=0,fa=ca.length;ea<fa;ea++)if(p(ca[ea],z))da[da.length]=ca[ea];return da;}function t(z,aa){g.isTruthy(z,'element not specified');g.isString(aa);aa=aa.replace(/-(\w)/g,function(da,ea){return ea.toUpperCase();});var ba=z.currentStyle||document.defaultView.getComputedStyle(z,null),ca=ba[aa];if(/backgroundPosition?/.test(aa)&&/top|left/.test(ca))ca='0%';return ca;}function u(z,aa,ba){g.isTruthy(z,'element not specified');g.isString(aa);aa=aa.replace(/-(\w)/g,function(ca,da){return da.toUpperCase();});z.style[aa]=ba;}function v(z,aa){var ba=true;for(var ca=0,da;da=aa[ca++];)if(!(da in k)){ba=false;k[da]=true;}if(ba)return;if(!j.ie()){var ea=document.createElement('style');ea.type='text/css';ea.textContent=z;document.getElementsByTagName('head')[0].appendChild(ea);}else try{document.createStyleSheet().cssText=z;}catch(fa){if(document.styleSheets[0])document.styleSheets[0].cssText+=z;}}function w(){var z=(document.documentElement&&document.compatMode=='CSS1Compat')?document.documentElement:document.body;return {scrollTop:z.scrollTop||document.body.scrollTop,scrollLeft:z.scrollLeft||document.body.scrollLeft,width:window.innerWidth?window.innerWidth:z.clientWidth,height:window.innerHeight?window.innerHeight:z.clientHeight};}function x(z){g.isTruthy(z,'element not specified');var aa=0,ba=0;do{aa+=z.offsetLeft;ba+=z.offsetTop;}while(z=z.offsetParent);return {x:aa,y:ba};}var y={containsCss:p,addCss:q,removeCss:r,getByClass:s,getStyle:t,setStyle:u,getAttr:l,getBoolAttr:m,getProp:n,html:o,addCssRules:v,getViewportInfo:w,getPosition:x,ready:i};e.exports=y;},null);
__d("sdk.ErrorHandling",["sdk.feature","ManagedError","sdk.Runtime","sdk.Scribe","UserAgent","wrapFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m=g('error_handling',false),n='';function o(u){var v=u._originalError;delete u._originalError;j.log('jssdk_error',{appId:i.getClientID(),error:u.name||u.message,extra:u});throw v;}function p(u){var v={line:u.lineNumber||u.line,message:u.message,name:u.name,script:u.fileName||u.sourceURL||u.script,stack:u.stackTrace||u.stack};v._originalError=u;if(k.chrome()&&/([\w:\.\/]+\.js):(\d+)/.test(u.stack)){v.script=RegExp.$1;v.line=parseInt(RegExp.$2,10);}for(var w in v)(v[w]==null&&delete v[w]);return v;}function q(u,v){return function(){if(!m)return u.apply(this,arguments);try{n=v;return u.apply(this,arguments);}catch(w){if(w instanceof h)throw w;var x=p(w);x.entry=v;var y=ES5(Array.prototype.slice.call(arguments),'map',true,function(z){var aa=Object.prototype.toString.call(z);return (/^\[object (String|Number|Boolean|Object|Date)\]$/).test(aa)?z:z.toString();});x.args=ES5('JSON','stringify',false,y).substring(0,200);o(x);}finally{n='';}};}function r(u){if(!u.__wrapper)u.__wrapper=function(){try{return u.apply(this,arguments);}catch(v){window.setTimeout(function(){throw v;},0);return false;}};return u.__wrapper;}function s(u,v){return function(w,x){var y=v+':'+(n||'[global]')+':'+(w.name||'[anonymous]'+(arguments.callee.caller.name?'('+arguments.callee.caller.name+')':''));return u(l(w,'entry',y),x);};}if(m){setTimeout=s(setTimeout,'setTimeout');setInterval=s(setInterval,'setInterval');l.setWrapper(q,'entry');}var t={guard:q,unguard:r};e.exports=t;},null);
__d("sdk.Insights",["sdk.Impressions"],function(a,b,c,d,e,f,g){var h={TYPE:{NOTICE:'notice',WARNING:'warn',ERROR:'error'},CATEGORY:{DEPRECATED:'deprecated',APIERROR:'apierror'},log:function(i,j,k){var l={source:'jssdk',type:i,category:j,payload:k};g.log(113,l);},impression:g.impression};e.exports=h;},null);
__d("FB",["sdk.Auth","copyProperties","JSSDKCssConfig","dotAccess","sdk.domReady","sdk.DOM","sdk.ErrorHandling","sdk.Content","DOMWrapper","GlobalCallback","sdk.Insights","Log","sdk.Runtime","sdk.Scribe","JSSDKConfig"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var v,w,x=j(u,'api.mode'),y={};v=window.FB={};var z={};r.level=1;p.setPrefix('FB.__globalCallbacks');var aa=document.createElement('div');o.setRoot(aa);k(function(){r.info('domReady');n.appendHidden(aa);if(i.rules)l.addCssRules(i.rules,i.components);});s.subscribe('AccessToken.change',function(da){if(!da&&s.getLoginStatus()==='connected')g.getLoginStatus(null,true);});if(j(u,'api.whitelist.length')){w={};ES5(u.api.whitelist,'forEach',true,function(da){w[da]=1;});}function ba(da,ea,fa,ga){var ha;if(/^_/.test(fa)){ha='hide';}else if(w&&!w[ea])ha=x;switch(ha){case 'hide':return;case 'stub':return function(){r.warn('The method FB.%s has been removed from the JS SDK.',ea);};break;default:return m.guard(function(){if(ha==='warn'){r.warn('The method FB.%s is not officially supported by '+'Facebook and access to it will soon be removed.',ea);if(!y.hasOwnProperty(ea)){q.log(q.TYPE.WARNING,q.CATEGORY.DEPRECATED,'FB.'+ea);t.log('jssdk_error',{appId:s.getClientID(),error:'Private method used',extra:{args:ea}});y[ea]=true;}}function ia(qa){if(ES5('Array','isArray',false,qa))return ES5(qa,'map',true,ia);if(qa&&typeof qa==='object'&&qa.__wrapped)return qa.__wrapped;return typeof qa==='function'&&/^function/.test(qa.toString())?m.unguard(qa):qa;}var ja=ES5(Array.prototype.slice.call(arguments),'map',true,ia),ka=da.apply(ga,ja),la,ma=true;if(ka&&typeof ka==='object'){var na=Function();na.prototype=ka;la=new na();la.__wrapped=ka;for(var oa in ka){var pa=ka[oa];if(typeof pa!=='function'||oa==='constructor')continue;ma=false;la[oa]=ba(pa,ea+':'+oa,oa,ka);}}if(!ma)return la;return ma?ka:la;},ea);}}function ca(da,ea){var fa=da?j(v,da,true):v;ES5(ES5('Object','keys',false,ea),'forEach',true,function(ga){var ha=ea[ga];if(typeof ha==='function'){var ia=(da?da+'.':'')+ga,ja=ba(ha,ia,ga,ea);if(ja)fa[ga]=ja;}});}s.setSecure((function(){var da=/iframe_canvas|app_runner/.test(window.name),ea=/dialog/.test(window.name);if(location.protocol=='https:'&&(window==top||!(da||ea)))return true;if(/_fb_https?/.test(window.name))return ES5(window.name,'indexOf',true,'_fb_https')!=-1;})());h(z,{provide:ca});e.exports=z;},null);
__d("ArgumentError",["ManagedError"],function(a,b,c,d,e,f,g){function h(i,j){g.prototype.constructor.apply(this,arguments);}h.prototype=new g();h.prototype.constructor=h;e.exports=h;},null);
__d("CORSRequest",["wrapFunction","QueryString"],function(a,b,c,d,e,f,g,h){function i(l,m){if(!self.XMLHttpRequest)return null;var n=new XMLHttpRequest(),o=function(){};if('withCredentials' in n){n.open(l,m,true);n.setRequestHeader('Content-type','application/x-www-form-urlencoded');}else if(self.XDomainRequest){n=new XDomainRequest();try{n.open(l,m);n.onprogress=n.ontimeout=o;}catch(p){return null;}}else return null;var q={send:function(t){n.send(t);}},r=g(function(){r=o;if('onload' in q)q.onload(n);},'entry','XMLHttpRequest:load'),s=g(function(){s=o;if('onerror' in q)q.onerror(n);},'entry','XMLHttpRequest:error');n.onload=function(){r();};n.onerror=function(){s();};n.onreadystatechange=function(){if(n.readyState==4)if(n.status==200){r();}else s();};return q;}function j(l,m,n,o){n.suppress_http_code=1;var p=h.encode(n);if(m!='post'){l=h.appendToUrl(l,p);p='';}var q=i(m,l);if(!q)return false;q.onload=function(r){o(ES5('JSON','parse',false,r.responseText));};q.onerror=function(r){if(r.responseText){o(ES5('JSON','parse',false,r.responseText));}else o({error:{type:'http',message:'unknown error',status:r.status}});};q.send(p);return true;}var k={execute:j};e.exports=k;},null);
__d("FlashRequest",["DOMWrapper","Flash","GlobalCallback","QueryString","Queue"],function(a,b,c,d,e,f,g,h,i,j,k){var l,m={},n,o;function p(){if(!n)throw new Error('swfUrl has not been set');var s=i.create(function(){l.start(function(u){var v=o.execute(u.method,u.url,u.body);if(!v)throw new Error('Could create request');m[v]=u.callback;});}),t=i.create(function(u,v,w){var x;try{x=ES5('JSON','parse',false,decodeURIComponent(w));}catch(y){x={error:{type:'SyntaxError',message:y.message,status:v,raw:w}};}m[u](x);delete m[u];});o=h.embed(n,g.getRoot(),null,{log:false,initCallback:s,requestCallback:t});}function q(s,t,u,v){u.suppress_http_code=1;if(!u.method)u.method=t;var w=j.encode(u);if(t==='get'&&s.length+w.length<2000){s=j.appendToUrl(s,w);w='';}else t='post';if(!l){if(!h.isAvailable())return false;l=new k();p();}l.enqueue({method:t,url:s,body:w,callback:v});return true;}var r={setSwfUrl:function(s){n=s;},execute:q};e.exports=r;},null);
__d("flattenObject",[],function(a,b,c,d,e,f){function g(h){var i={};for(var j in h)if(h.hasOwnProperty(j)){var k=h[j];if(null===k||undefined===k){continue;}else if(typeof k=='string'){i[j]=k;}else i[j]=ES5('JSON','stringify',false,k);}return i;}e.exports=g;},null);
__d("JSONPRequest",["DOMWrapper","GlobalCallback","QueryString"],function(a,b,c,d,e,f,g,h,i){function j(l,m,n,o){var p=document.createElement('script'),q=function(s){q=function(){};h.remove(n.callback);o(s);p.parentNode.removeChild(p);};n.callback=h.create(q);if(!n.method)n.method=m;l=i.appendToUrl(l,n);if(l.length>2000){h.remove(n.callback);return false;}p.onerror=function(){q({error:{type:'http',message:'unknown error'}});};var r=function(){setTimeout(function(){q({error:{type:'http',message:'unknown error'}});},0);};if(p.addEventListener){p.addEventListener('load',r,false);}else p.onreadystatechange=function(){if(/loaded|complete/.test(this.readyState))r();};p.src=l;g.getRoot().appendChild(p);return true;}var k={execute:j};e.exports=k;},null);
__d("ApiClient",["ArgumentError","Assert","copyProperties","CORSRequest","FlashRequest","flattenObject","JSONPRequest","Log","ObservableMixin","sprintf","sdk.URI","UrlMap","ApiClientConfig"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var t,u,v,w={get:true,post:true,'delete':true,put:true},x={fql_query:true,fql_multiquery:true,friends_get:true,notifications_get:true,stream_get:true,users_getinfo:true};function y(da,ea,fa,ga){if(v)fa=i({},v,fa);fa.access_token=fa.access_token||t;fa.pretty=fa.pretty||0;fa=l(fa);var ha={jsonp:m,cors:j,flash:k},ia;if(fa.transport){ia=[fa.transport];delete fa.transport;}else ia=['jsonp','cors','flash'];for(var ja=0;ja<ia.length;ja++){var ka=ha[ia[ja]],la=i({},fa);if(ka.execute(da,ea,la,ga))return;}ga({error:{type:'no-transport',message:'Could not find a usable transport for request'}});}function z(da,ea,fa,ga,ha){ca.inform('request.complete',ea,fa,ga,ha);if(da)da(ha);}function aa(da){h.isString(da,'Invalid path');if(!/^https?/.test(da)&&da.charAt(0)!=='/')da='/'+da;var ea,fa={};try{ea=new q(da);}catch(ga){throw new g(ga.message,ga);}ES5(Array.prototype.slice.call(arguments,1),'forEach',true,function(ma){fa[typeof ma]=ma;});var ha=(fa.string||'get').toLowerCase();h.isTrue(w.hasOwnProperty(ha),p('Invalid method passed to ApiClient: %s',ha));var ia=fa['function'];if(!ia)n.warn('No callback passed to the ApiClient');if(fa.object)ea.addQueryData(fa.object);var ja=ea.getQueryData(),ka=ES5(z,'bind',true,null,ia,ea.getPath(),ha,ja),la=ea.getProtocol()&&ea.getDomain()?ea.setQueryData({}).toString():r.resolve('graph')+ea.getPath();ja.method=ha;y(la,ha=='get'?'get':'post',ja,ka);}function ba(da,ea){h.isObject(da);h.isString(da.method,'method missing');if(!ea)n.warn('No callback passed to the ApiClient');var fa=da.method.toLowerCase().replace('.','_');da.format='json-strings';da.api_key=u;var ga=fa in x?'api_read':'api',ha=r.resolve(ga)+'/restserver.php',ia=ES5(z,'bind',true,null,ea,'/restserver.php','get',da);y(ha,'get',da,ia);}var ca=i(new o(),{setAccessToken:function(da){t=da;},setClientID:function(da){u=da;},setDefaultParams:function(da){v=da;},rest:ba,graph:aa});k.setSwfUrl(s.FlashRequest.swfUrl);e.exports=ca;},null);
__d("sdk.PlatformVersioning",["sdk.Runtime","ManagedError"],function(a,b,c,d,e,f,g,h){var i=/^v\d+\.\d\d?$/,j={REGEX:i,assertVersionIsSet:function(){if(!g.getVersion())throw new h('init not called with valid version');},assertValidVersion:function(k){if(!i.test(k))throw new h('invalid version specified');}};e.exports=j;},null);
__d("sdk.api",["ApiClient","sdk.PlatformVersioning","sdk.Runtime","sdk.URI"],function(a,b,c,d,e,f,g,h,i,j){var k;i.subscribe('ClientID.change',function(m){g.setClientID(m);});i.subscribe('AccessToken.change',function(m){k=m;g.setAccessToken(m);});g.setDefaultParams({sdk:'joey'});g.subscribe('request.complete',function(m,n,o,p){var q=false;if(p&&typeof p=='object')if(p.error){if(p.error=='invalid_token'||(p.error.type=='OAuthException'&&p.error.code==190))q=true;}else if(p.error_code)if(p.error_code=='190')q=true;if(q&&k===i.getAccessToken())i.setAccessToken(null);});g.subscribe('request.complete',function(m,n,o,p){if(((m=='/me/permissions'&&n==='delete')||(m=='/restserver.php'&&o.method=='Auth.revokeAuthorization'))&&p===true)i.setAccessToken(null);});function l(m){if(typeof m==='string'){if(i.getIsVersioned()){h.assertVersionIsSet();if(!/https?/.test(m)&&m.charAt(0)!=='/')m='/'+m;m=j(m).setDomain(null).setProtocol(null).toString();if(!h.REGEX.test(m.substring(1,ES5(m,'indexOf',true,'/',1))))m='/'+i.getVersion()+m;var n=[m].concat(Array.prototype.slice.call(arguments,1));g.graph.apply(g,n);}else g.graph.apply(g,arguments);}else g.rest.apply(g,arguments);}e.exports=l;},null);
__d("legacy:fb.api",["FB","sdk.api"],function(a,b,c,d,e,f,g,h){g.provide('',{api:h});},3);
__d("sdk.Canvas.Environment",["sdk.RPC"],function(a,b,c,d,e,f,g){function h(k){g.remote.getPageInfo(function(l){k(l.result);});}function i(k,l){g.remote.scrollTo({x:k||0,y:l||0});}g.stub('getPageInfo');g.stub('scrollTo');var j={getPageInfo:h,scrollTo:i};e.exports=j;},null);
__d("sdk.Intl",["Log"],function(a,b,c,d,e,f,g){var h=('['+'.!?'+'\u3002'+'\uFF01'+'\uFF1F'+'\u0964'+'\u2026'+'\u0EAF'+'\u1801'+'\u0E2F'+'\uFF0E'+']');function i(l){if(typeof l!='string')return false;return !!l.match(new RegExp(h+'['+')"'+"'"+'\u00BB'+'\u0F3B'+'\u0F3D'+'\u2019'+'\u201D'+'\u203A'+'\u3009'+'\u300B'+'\u300D'+'\u300F'+'\u3011'+'\u3015'+'\u3017'+'\u3019'+'\u301B'+'\u301E'+'\u301F'+'\uFD3F'+'\uFF07'+'\uFF09'+'\uFF3D'+'\\s'+']*$'));}function j(l,m){if(m!==undefined)if(typeof m!='object'){g.error('The second arg to FB.Intl.tx() must be an Object for '+'FB.Intl.tx('+l+', ...)');}else{var n;for(var o in m)if(m.hasOwnProperty(o)){if(i(m[o])){n=new RegExp('\\{'+o+'\\}'+h+'*','g');}else n=new RegExp('\\{'+o+'\\}','g');l=l.replace(n,m[o]);}}return l;}function k(){throw new Error('Placeholder function');}k._=j;e.exports={tx:k};},null);
__d("sdk.Dialog",["sdk.Canvas.Environment","sdk.Content","sdk.DOM","DOMEventListener","sdk.Intl","ObservableMixin","sdk.Runtime","Type","UserAgent","sdk.feature"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=590,r=500,s=240,t=575,u=function(){var y;if(p('dialog_resize_refactor')){var z=v();y=z&&(z.height>=q||z.width>=r);}else y=!!o.ipad();u=function(){return y;};return y;};function v(){if(p('dialog_resize_refactor')){var y=i.getViewportInfo();if(y.height&&y.width)return {width:Math.min(y.width,q),height:Math.min(y.height,r)};}return null;}var w=n.extend({constructor:function y(z,aa){this.parent();this.id=z;this.display=aa;this._e2e={};if(!x._dialogs){x._dialogs={};x._addOrientationHandler();}x._dialogs[z]=this;this.trackEvent('init');},trackEvent:function(y,z){if(this._e2e[y])return this;this._e2e[y]=z||ES5('Date','now',false);if(y=='close')this.inform('e2e:end',this._e2e);return this;},trackEvents:function(y){if(typeof y==='string')y=ES5('JSON','parse',false,y);for(var z in y)if(y.hasOwnProperty(z))this.trackEvent(z,y[z]);return this;}},l),x={newInstance:function(y,z){return new w(y,z);},_dialogs:null,_lastYOffset:0,_loaderEl:null,_overlayEl:null,_stack:[],_active:null,get:function(y){return x._dialogs[y];},_findRoot:function(y){while(y){if(i.containsCss(y,'fb_dialog'))return y;y=y.parentNode;}},_createWWWLoader:function(y){y=y?y:460;return x.create({content:('<div class="dialog_title">'+'  <a id="fb_dialog_loader_close">'+'    <div class="fb_dialog_close_icon"></div>'+'  </a>'+'  <span>Facebook</span>'+'  <div style="clear:both;"></div>'+'</div>'+'<div class="dialog_content"></div>'+'<div class="dialog_footer"></div>'),width:y});},_createMobileLoader:function(){var y=o.nativeApp()?'':('<table>'+'  <tbody>'+'    <tr>'+'      <td class="header_left">'+'        <label class="touchable_button">'+'          <input type="submit" value="'+k.tx._("Cancel")+'"'+'            id="fb_dialog_loader_close"/>'+'        </label>'+'      </td>'+'      <td class="header_center">'+'        <div>'+k.tx._("Loading...")+'</div>'+'      </td>'+'      <td class="header_right">'+'      </td>'+'    </tr>'+'  </tbody>'+'</table>');return x.create({classes:'loading'+(u()?' centered':''),content:('<div class="dialog_header">'+y+'</div>')});},_restoreBodyPosition:function(){if(!u()){var y=document.getElementsByTagName('body')[0];i.removeCss(y,'fb_hidden');}},_showTabletOverlay:function(){if(!u())return;if(!x._overlayEl){x._overlayEl=document.createElement('div');x._overlayEl.setAttribute('id','fb_dialog_ipad_overlay');h.append(x._overlayEl,null);}x._overlayEl.className='';},_hideTabletOverlay:function(){if(u())x._overlayEl.className='hidden';},showLoader:function(y,z){x._showTabletOverlay();if(!x._loaderEl)x._loaderEl=x._findRoot(o.mobile()?x._createMobileLoader():x._createWWWLoader(z));if(!y)y=function(){};var aa=document.getElementById('fb_dialog_loader_close');i.removeCss(aa,'fb_hidden');aa.onclick=function(){x._hideLoader();x._restoreBodyPosition();x._hideTabletOverlay();y();};var ba=document.getElementById('fb_dialog_ipad_overlay');if(ba)ba.ontouchstart=aa.onclick;x._makeActive(x._loaderEl);},_hideLoader:function(){if(x._loaderEl&&x._loaderEl==x._active)x._loaderEl.style.top='-10000px';},_makeActive:function(y){x._setDialogSizes();x._lowerActive();x._active=y;if(m.isEnvironment(m.ENVIRONMENTS.CANVAS))g.getPageInfo(function(z){x._centerActive(z);});x._centerActive();},_lowerActive:function(){if(!x._active)return;x._active.style.top='-10000px';x._active=null;},_removeStacked:function(y){x._stack=ES5(x._stack,'filter',true,function(z){return z!=y;});},_centerActive:function(y){var z=x._active;if(!z)return;var aa=i.getViewportInfo(),ba=parseInt(z.offsetWidth,10),ca=parseInt(z.offsetHeight,10),da=aa.scrollLeft+(aa.width-ba)/2,ea=(aa.height-ca)/2.5;if(da<ea)ea=da;var fa=aa.height-ca-ea,ga=(aa.height-ca)/2;if(y)ga=y.scrollTop-y.offsetTop+(y.clientHeight-ca)/2;if(ga<ea){ga=ea;}else if(ga>fa)ga=fa;ga+=aa.scrollTop;if(o.mobile()){var ha=100;if(u()){ha+=(aa.height-ca)/2;}else{var ia=document.getElementsByTagName('body')[0];i.addCss(ia,'fb_hidden');if(p('dialog_resize_refactor'))ia.style.width='auto';ga=10000;}var ja=i.getByClass('fb_dialog_padding',z);if(ja.length)ja[0].style.height=ha+'px';}z.style.left=(da>0?da:0)+'px';z.style.top=(ga>0?ga:0)+'px';},_setDialogSizes:function(){if(!o.mobile()||u())return;for(var y in x._dialogs)if(x._dialogs.hasOwnProperty(y)){var z=document.getElementById(y);if(z){z.style.width=x.getDefaultSize().width+'px';z.style.height=x.getDefaultSize().height+'px';}}},getDefaultSize:function(){if(o.mobile()){var y=v();if(y)return y;if(o.ipad())return {width:r,height:q};if(o.android()){return {width:screen.availWidth,height:screen.availHeight};}else{var z=window.innerWidth,aa=window.innerHeight,ba=z/aa>1.2;return {width:z,height:Math.max(aa,(ba?screen.width:screen.height))};}}return {width:t,height:s};},_handleOrientationChange:function(y){var z=p('dialog_resize_refactor',false)?i.getViewportInfo().width:screen.availWidth;if(o.android()&&z==x._availScreenWidth){setTimeout(x._handleOrientationChange,50);return;}x._availScreenWidth=z;if(u()){x._centerActive();}else{var aa=x.getDefaultSize().width;for(var ba in x._dialogs)if(x._dialogs.hasOwnProperty(ba)){var ca=document.getElementById(ba);if(ca)ca.style.width=aa+'px';}}},_addOrientationHandler:function(){if(!o.mobile())return;var y="onorientationchange" in window?'orientationchange':'resize';x._availScreenWidth=p('dialog_resize_refactor',false)?i.getViewportInfo().width:screen.availWidth;j.add(window,y,x._handleOrientationChange);},create:function(y){y=y||{};var z=document.createElement('div'),aa=document.createElement('div'),ba='fb_dialog';if(y.closeIcon&&y.onClose){var ca=document.createElement('a');ca.className='fb_dialog_close_icon';ca.onclick=y.onClose;z.appendChild(ca);}ba+=' '+(y.classes||'');if(o.ie()){ba+=' fb_dialog_legacy';ES5(['vert_left','vert_right','horiz_top','horiz_bottom','top_left','top_right','bottom_left','bottom_right'],'forEach',true,function(fa){var ga=document.createElement('span');ga.className='fb_dialog_'+fa;z.appendChild(ga);});}else ba+=o.mobile()?' fb_dialog_mobile':' fb_dialog_advanced';if(y.content)h.append(y.content,aa);z.className=ba;var da=parseInt(y.width,10);if(!isNaN(da))z.style.width=da+'px';aa.className='fb_dialog_content';z.appendChild(aa);if(o.mobile()){var ea=document.createElement('div');ea.className='fb_dialog_padding';z.appendChild(ea);}h.append(z);if(y.visible)x.show(z);return aa;},show:function(y){var z=x._findRoot(y);if(z){x._removeStacked(z);x._hideLoader();x._makeActive(z);x._stack.push(z);if('fbCallID' in y)x.get(y.fbCallID).inform('iframe_show').trackEvent('show');}},hide:function(y){var z=x._findRoot(y);x._hideLoader();if(z==x._active){x._lowerActive();x._restoreBodyPosition();x._hideTabletOverlay();if('fbCallID' in y)x.get(y.fbCallID).inform('iframe_hide').trackEvent('hide');}},remove:function(y){y=x._findRoot(y);if(y){var z=x._active==y;x._removeStacked(y);if(z){x._hideLoader();if(x._stack.length>0){x.show(x._stack.pop());}else{x._lowerActive();x._restoreBodyPosition();x._hideTabletOverlay();}}else if(x._active===null&&x._stack.length>0)x.show(x._stack.pop());setTimeout(function(){y.parentNode.removeChild(y);},3000);}},isActive:function(y){var z=x._findRoot(y);return z&&z===x._active;}};e.exports=x;},null);
__d("sdk.Frictionless",["sdk.Auth","sdk.api","sdk.Event","sdk.Dialog"],function(a,b,c,d,e,f,g,h,i,j){var k={_allowedRecipients:{},_useFrictionless:false,_updateRecipients:function(){k._allowedRecipients={};h('/me/apprequestformerrecipients',function(l){if(!l||l.error)return;ES5(l.data,'forEach',true,function(m){k._allowedRecipients[m.recipient_id]=true;});});},init:function(){k._useFrictionless=true;g.getLoginStatus(function(l){if(l.status=='connected')k._updateRecipients();});i.subscribe('auth.login',function(l){if(l.authResponse)k._updateRecipients();});},_processRequestResponse:function(l,m){return function(n){var o=n&&n.updated_frictionless;if(k._useFrictionless&&o)k._updateRecipients();if(n){if(!m&&n.frictionless){j._hideLoader();j._restoreBodyPosition();j._hideIPadOverlay();}delete n.frictionless;delete n.updated_frictionless;}l&&l(n);};},isAllowed:function(l){if(!l)return false;if(typeof l==='number')return l in k._allowedRecipients;if(typeof l==='string')l=l.split(',');l=ES5(l,'map',true,function(o){return ES5(String(o),'trim',true);});var m=true,n=false;ES5(l,'forEach',true,function(o){m=m&&o in k._allowedRecipients;n=true;});return m&&n;}};i.subscribe('init:post',function(l){if(l.frictionlessRequests)k.init();});e.exports=k;},null);
__d("insertIframe",["guid","GlobalCallback"],function(a,b,c,d,e,f,g,h){function i(j){j.id=j.id||g();j.name=j.name||g();var k=false,l=false,m=function(){if(k&&!l){l=true;j.onload&&j.onload(j.root.firstChild);}},n=h.create(m);if(document.attachEvent){var o=('<iframe'+' id="'+j.id+'"'+' name="'+j.name+'"'+(j.title?' title="'+j.title+'"':'')+(j.className?' class="'+j.className+'"':'')+' style="border:none;'+(j.width?'width:'+j.width+'px;':'')+(j.height?'height:'+j.height+'px;':'')+'"'+' src="javascript:false;"'+' frameborder="0"'+' scrolling="no"'+' allowtransparency="true"'+' onload="'+n+'()"'+'></iframe>');j.root.innerHTML=('<iframe src="javascript:false"'+' frameborder="0"'+' scrolling="no"'+' style="height:1px"></iframe>');k=true;setTimeout(function(){j.root.innerHTML=o;j.root.firstChild.src=j.url;j.onInsert&&j.onInsert(j.root.firstChild);},0);}else{var p=document.createElement('iframe');p.id=j.id;p.name=j.name;p.onload=m;p.scrolling='no';p.style.border='none';p.style.overflow='hidden';if(j.title)p.title=j.title;if(j.className)p.className=j.className;if(j.height!==undefined)p.style.height=j.height+'px';if(j.width!==undefined)if(j.width=='100%'){p.style.width=j.width;}else p.style.width=j.width+'px';j.root.appendChild(p);k=true;p.src=j.url;j.onInsert&&j.onInsert(p);}}e.exports=i;},null);
__d("sdk.Native",["copyProperties","Log","UserAgent"],function(a,b,c,d,e,f,g,h,i){var j='fbNativeReady',k={onready:function(l){if(!i.nativeApp()){h.error('FB.Native.onready only works when the page is rendered '+'in a WebView of the native Facebook app. Test if this is the '+'case calling FB.UA.nativeApp()');return;}if(window.__fbNative&&!this.nativeReady)g(this,window.__fbNative);if(this.nativeReady){l();}else{var m=function(n){window.removeEventListener(j,m);this.onready(l);};window.addEventListener(j,m,false);}}};e.exports=k;},null);
__d("resolveURI",[],function(a,b,c,d,e,f){function g(h){if(!h)return window.location.href;h=h.replace(/&/g,'&amp;').replace(/"/g,'&quot;');var i=document.createElement('div');i.innerHTML='<a href="'+h+'"></a>';return i.firstChild.href;}e.exports=g;},null);
__d("sdk.UIServer",["sdk.Auth","sdk.Content","createObjectFrom","copyProperties","sdk.Dialog","sdk.DOM","sdk.Event","flattenObject","sdk.Frictionless","sdk.getContextType","guid","insertIframe","Log","sdk.Native","QueryString","resolveURI","sdk.RPC","sdk.Runtime","JSSDKConfig","UrlMap","UserAgent","sdk.XD"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba){var ca={transform:function(fa){if(fa.params.display==='touch'&&fa.params.access_token&&window.postMessage){fa.params.channel=ea._xdChannelHandler(fa.id,'parent');if(!aa.nativeApp())fa.params.in_iframe=1;return fa;}else return ea.genericTransform(fa);},getXdRelation:function(fa){var ga=fa.display;if(ga==='touch'&&window.postMessage&&fa.in_iframe)return 'parent';return ea.getXdRelation(fa);}},da={'stream.share':{size:{width:670,height:340},url:'sharer.php',transform:function(fa){if(!fa.params.u)fa.params.u=window.location.toString();fa.params.display='popup';return fa;}},apprequests:{transform:function(fa){fa=ca.transform(fa);fa.params.frictionless=o&&o._useFrictionless;if(fa.params.frictionless){if(o.isAllowed(fa.params.to)){fa.params.display='iframe';fa.params.in_iframe=true;fa.hideLoader=true;}fa.cb=o._processRequestResponse(fa.cb,fa.hideLoader);}fa.closeIcon=false;return fa;},getXdRelation:ca.getXdRelation},feed:ca,'permissions.oauth':{url:'dialog/oauth',size:{width:(aa.mobile()?null:475),height:(aa.mobile()?null:183)},transform:function(fa){if(!x.getClientID()){s.error('FB.login() called before FB.init().');return;}if(g.getAuthResponse()&&!fa.params.scope&&!fa.params.auth_type){s.error('FB.login() called when user is already connected.');fa.cb&&fa.cb({status:x.getLoginStatus(),authResponse:g.getAuthResponse()});return;}var ga=fa.cb,ha=fa.id;delete fa.cb;var ia=ES5('Object','keys',false,j(fa.params.response_type?i(fa.params.response_type.split(',')):{},{token:true,signed_request:true})).join(',');if(fa.params.display==='async'){j(fa.params,{client_id:x.getClientID(),origin:p(),response_type:ia,domain:location.hostname});fa.cb=g.xdResponseWrapper(ga,g.getAuthResponse(),'permissions.oauth');}else j(fa.params,{client_id:x.getClientID(),redirect_uri:v(ea.xdHandler(ga,ha,'opener',g.getAuthResponse(),'permissions.oauth')),origin:p(),response_type:ia,domain:location.hostname});return fa;}},'auth.logout':{url:'logout.php',transform:function(fa){if(!x.getClientID()){s.error('FB.logout() called before calling FB.init().');}else if(!g.getAuthResponse()){s.error('FB.logout() called without an access token.');}else{fa.params.next=ea.xdHandler(fa.cb,fa.id,'parent',g.getAuthResponse(),'logout');return fa;}}},'login.status':{url:'dialog/oauth',transform:function(fa){var ga=fa.cb,ha=fa.id;delete fa.cb;j(fa.params,{client_id:x.getClientID(),redirect_uri:ea.xdHandler(ga,ha,'parent',g.getAuthResponse(),'login_status'),origin:p(),response_type:'token,signed_request,code',domain:location.hostname});return fa;}}},ea={Methods:da,_loadedNodes:{},_defaultCb:{},_resultToken:'"xxRESULTTOKENxx"',genericTransform:function(fa){if(fa.params.display=='dialog'||fa.params.display=='iframe')j(fa.params,{display:'iframe',channel:ea._xdChannelHandler(fa.id,'parent.parent')},true);return fa;},checkOauthDisplay:function(fa){var ga=fa.scope||fa.perms||x.getScope();if(!ga)return fa.display;var ha=ga.split(/\s|,/g);for(var ia=0;ia<ha.length;ia++)if(!y.initSitevars.iframePermissions[ES5(ha[ia],'trim',true)])return 'popup';return fa.display;},prepareCall:function(fa,ga){var ha=fa.method.toLowerCase(),ia=j({},ea.Methods[ha]),ja=q(),ka=x.getSecure()||(ha!=='auth.status'&&ha!='login.status');j(fa,{app_id:x.getClientID(),locale:x.getLocale(),sdk:'joey',access_token:ka&&x.getAccessToken()||undefined});fa.display=ea.getDisplayMode(ia,fa);if(!ia.url)ia.url='dialog/'+ha;if((ia.url=='dialog/oauth'||ia.url=='dialog/permissions.request')&&(fa.display=='iframe'||(fa.display=='touch'&&fa.in_iframe)))fa.display=ea.checkOauthDisplay(fa);if(x.getIsVersioned()&&ia.url.substring(0,7)==='dialog/')ia.url=fa.version+'/'+ia.url;var la={cb:ga,id:ja,size:ia.size||ea.getDefaultSize(),url:z.resolve(fa.display=='touch'?'m':'www',ka)+'/'+ia.url,params:fa,name:ha,dialog:k.newInstance(ja,fa.display)},ma=ia.transform?ia.transform:ea.genericTransform;if(ma){la=ma(la);if(!la)return;}var na=ia.getXdRelation||ea.getXdRelation,oa=na(la.params);if(!(la.id in ea._defaultCb)&&!('next' in la.params)&&!('redirect_uri' in la.params))la.params.next=ea._xdResult(la.cb,la.id,oa,true);if(oa==='parent')j(la.params,{channel_url:ea._xdChannelHandler(ja,'parent.parent')},true);la=ea.prepareParams(la);return la;},prepareParams:function(fa){var ga=fa.params.method;if(fa.params.display!=='async')delete fa.params.method;fa.params=n(fa.params);var ha=u.encode(fa.params);if(!aa.nativeApp()&&ea.urlTooLongForIE(fa.url+'?'+ha)){fa.post=true;}else if(ha)fa.url+='?'+ha;return fa;},urlTooLongForIE:function(fa){return fa.length>2000;},getDisplayMode:function(fa,ga){if(ga.display==='hidden'||ga.display==='none')return ga.display;var ha=x.isEnvironment(x.ENVIRONMENTS.CANVAS)||x.isEnvironment(x.ENVIRONMENTS.PAGETAB);if(ha&&!ga.display)return 'async';if(aa.mobile()||ga.display==='touch')return 'touch';if(!x.getAccessToken()&&(ga.display=='iframe'||ga.display=='dialog')&&!fa.loggedOutIframe){s.error('"dialog" mode can only be used when the user is connected.');return 'popup';}if(fa.connectDisplay&&!ha)return fa.connectDisplay;return ga.display||(x.getAccessToken()?'dialog':'popup');},getXdRelation:function(fa){var ga=fa.display;if(ga==='popup'||ga==='touch')return 'opener';if(ga==='dialog'||ga==='iframe'||ga==='hidden'||ga==='none')return 'parent';if(ga==='async')return 'parent.frames['+window.name+']';},popup:function(fa){var ga=typeof window.screenX!='undefined'?window.screenX:window.screenLeft,ha=typeof window.screenY!='undefined'?window.screenY:window.screenTop,ia=typeof window.outerWidth!='undefined'?window.outerWidth:document.documentElement.clientWidth,ja=typeof window.outerHeight!='undefined'?window.outerHeight:(document.documentElement.clientHeight-22),ka=aa.mobile()?null:fa.size.width,la=aa.mobile()?null:fa.size.height,ma=(ga<0)?window.screen.width+ga:ga,na=parseInt(ma+((ia-ka)/2),10),oa=parseInt(ha+((ja-la)/2.5),10),pa=[];if(ka!==null)pa.push('width='+ka);if(la!==null)pa.push('height='+la);pa.push('left='+na);pa.push('top='+oa);pa.push('scrollbars=1');if(fa.name=='permissions.request'||fa.name=='permissions.oauth')pa.push('location=1,toolbar=0');pa=pa.join(',');var qa;if(fa.post){qa=window.open('about:blank',fa.id,pa);if(qa){ea.setLoadedNode(fa,qa,'popup');h.submitToTarget({url:fa.url,target:fa.id,params:fa.params});}}else{qa=window.open(fa.url,fa.id,pa);if(qa)ea.setLoadedNode(fa,qa,'popup');}if(!qa)return;if(fa.id in ea._defaultCb)ea._popupMonitor();},setLoadedNode:function(fa,ga,ha){if(fa.params&&fa.params.display!='popup')ga.fbCallID=fa.id;ga={node:ga,type:ha,fbCallID:fa.id};ea._loadedNodes[fa.id]=ga;},getLoadedNode:function(fa){var ga=typeof fa=='object'?fa.id:fa,ha=ea._loadedNodes[ga];return ha?ha.node:null;},hidden:function(fa){fa.className='FB_UI_Hidden';fa.root=h.appendHidden('');ea._insertIframe(fa);},iframe:function(fa){fa.className='FB_UI_Dialog';var ga=function(){ea._triggerDefault(fa.id);};fa.root=k.create({onClose:ga,closeIcon:fa.closeIcon===undefined?true:fa.closeIcon,classes:(aa.ipad()?'centered':'')});if(!fa.hideLoader)k.showLoader(ga,fa.size.width);l.addCss(fa.root,'fb_dialog_iframe');ea._insertIframe(fa);},touch:function(fa){if(fa.params&&fa.params.in_iframe){if(fa.ui_created){k.showLoader(function(){ea._triggerDefault(fa.id);},0);}else ea.iframe(fa);}else if(aa.nativeApp()&&!fa.ui_created){fa.frame=fa.id;t.onready(function(){ea.setLoadedNode(fa,t.open(fa.url+'#cb='+fa.frameName),'native');});ea._popupMonitor();}else if(!fa.ui_created)ea.popup(fa);},async:function(fa){fa.params.redirect_uri=location.protocol+'//'+location.host+location.pathname;delete fa.params.access_token;w.remote.showDialog(fa.params,function(ga){var ha=ga.result;if(ha&&ha.e2e){var ia=k.get(fa.id);ia.trackEvents(ha.e2e);ia.trackEvent('close');delete ha.e2e;}fa.cb(ha);});},getDefaultSize:function(){return k.getDefaultSize();},_insertIframe:function(fa){ea._loadedNodes[fa.id]=false;var ga=function(ha){if(fa.id in ea._loadedNodes)ea.setLoadedNode(fa,ha,'iframe');};if(fa.post){r({url:'about:blank',root:fa.root,className:fa.className,width:fa.size.width,height:fa.size.height,id:fa.id,onInsert:ga,onload:function(ha){h.submitToTarget({url:fa.url,target:ha.name,params:fa.params});}});}else r({url:fa.url,root:fa.root,className:fa.className,width:fa.size.width,height:fa.size.height,id:fa.id,name:fa.frameName,onInsert:ga});},_handleResizeMessage:function(fa,ga){var ha=ea.getLoadedNode(fa);if(!ha)return;if(ga.height)ha.style.height=ga.height+'px';if(ga.width)ha.style.width=ga.width+'px';ba.inform('resize.ack',ga||{},'parent.frames['+ha.name+']');if(!k.isActive(ha))k.show(ha);},_triggerDefault:function(fa){ea._xdRecv({frame:fa},ea._defaultCb[fa]||function(){});},_popupMonitor:function(){var fa;for(var ga in ea._loadedNodes)if(ea._loadedNodes.hasOwnProperty(ga)&&ga in ea._defaultCb){var ha=ea._loadedNodes[ga];if(ha.type!='popup'&&ha.type!='native')continue;var ia=ha.node;try{if(ia.closed){ea._triggerDefault(ga);}else fa=true;}catch(ja){}}if(fa&&!ea._popupInterval){ea._popupInterval=setInterval(ea._popupMonitor,100);}else if(!fa&&ea._popupInterval){clearInterval(ea._popupInterval);ea._popupInterval=null;}},_xdChannelHandler:function(fa,ga){return ba.handler(function(ha){var ia=ea.getLoadedNode(fa);if(!ia)return;if(ha.type=='resize'){ea._handleResizeMessage(fa,ha);}else if(ha.type=='hide'){k.hide(ia);}else if(ha.type=='rendered'){var ja=k._findRoot(ia);k.show(ja);}else if(ha.type=='fireevent')m.fire(ha.event);},ga,true,null);},_xdNextHandler:function(fa,ga,ha,ia){if(ia)ea._defaultCb[ga]=fa;return ba.handler(function(ja){ea._xdRecv(ja,fa);},ha)+'&frame='+ga;},_xdRecv:function(fa,ga){var ha=ea.getLoadedNode(fa.frame);if(ha)if(ha.close){try{ha.close();if(/iPhone.*Version\/(5|6)/.test(navigator.userAgent)&&RegExp.$1!=='5')window.focus();ea._popupCount--;}catch(ia){}}else if(l.containsCss(ha,'FB_UI_Hidden')){setTimeout(function(){ha.parentNode.parentNode.removeChild(ha.parentNode);},3000);}else if(l.containsCss(ha,'FB_UI_Dialog'))k.remove(ha);delete ea._loadedNodes[fa.frame];delete ea._defaultCb[fa.frame];if(fa.e2e){var ja=k.get(fa.frame);ja.trackEvents(fa.e2e);ja.trackEvent('close');delete fa.e2e;}ga(fa);},_xdResult:function(fa,ga,ha,ia){return (ea._xdNextHandler(function(ja){fa&&fa(ja.result&&ja.result!=ea._resultToken&&ES5('JSON','parse',false,ja.result));},ga,ha,ia)+'&result='+encodeURIComponent(ea._resultToken));},xdHandler:function(fa,ga,ha,ia,ja){return ea._xdNextHandler(g.xdResponseWrapper(fa,ia,ja),ga,ha,true);}};w.stub('showDialog');e.exports=ea;},null);
__d("sdk.ui",["Assert","sdk.Impressions","Log","sdk.PlatformVersioning","sdk.Runtime","sdk.UIServer","copyProperties","sdk.feature"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){function o(p,q){g.isObject(p);g.maybeFunction(q);if(k.getIsVersioned()){j.assertVersionIsSet();if(p.version){j.assertValidVersion(p.version);}else p.version=k.getVersion();}p=m({},p);if(!p.method){i.error('"method" is a required parameter for FB.ui().');return null;}var r=p.method;if(p.redirect_uri){i.warn('When using FB.ui, you should not specify a redirect_uri.');delete p.redirect_uri;}if((r=='permissions.request'||r=='permissions.oauth')&&(p.display=='iframe'||p.display=='dialog'))p.display=l.checkOauthDisplay(p);var s=n('e2e_tracking',true);if(s)p.e2e={};var t=l.prepareCall(p,q||function(){});if(!t)return null;var u=t.params.display;if(u==='dialog'){u='iframe';}else if(u==='none')u='hidden';var v=l[u];if(!v){i.error('"display" must be one of "popup", '+'"dialog", "iframe", "touch", "async", "hidden", or "none"');return null;}if(s)t.dialog.subscribe('e2e:end',function(w){w.method=r;w.display=u;i.debug('e2e: %s',ES5('JSON','stringify',false,w));h.log(114,{payload:w});});v(t);return t.dialog;}e.exports=o;},null);
__d("legacy:fb.auth",["sdk.Auth","sdk.Cookie","copyProperties","sdk.Event","FB","Log","sdk.Runtime","sdk.SignedRequest","sdk.ui"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){k.provide('',{getLoginStatus:function(){return g.getLoginStatus.apply(g,arguments);},getAuthResponse:function(){return g.getAuthResponse();},getAccessToken:function(){return m.getAccessToken()||null;},getUserID:function(){return m.getUserID()||m.getCookieUserID();},login:function(p,q){if(q&&q.perms&&!q.scope){q.scope=q.perms;delete q.perms;l.warn('OAuth2 specification states that \'perms\' '+'should now be called \'scope\'.  Please update.');}var r=m.isEnvironment(m.ENVIRONMENTS.CANVAS)||m.isEnvironment(m.ENVIRONMENTS.PAGETAB);o(i({method:'permissions.oauth',display:r?'async':'popup',domain:location.hostname},q||{}),p);},logout:function(p){o({method:'auth.logout',display:'hidden'},p);}});g.subscribe('logout',ES5(j.fire,'bind',true,j,'auth.logout'));g.subscribe('login',ES5(j.fire,'bind',true,j,'auth.login'));g.subscribe('authresponse.change',ES5(j.fire,'bind',true,j,'auth.authResponseChange'));g.subscribe('status.change',ES5(j.fire,'bind',true,j,'auth.statusChange'));j.subscribe('init:post',function(p){if(p.status)g.getLoginStatus();if(m.getClientID())if(p.authResponse){g.setAuthResponse(p.authResponse,'connected');}else if(m.getUseCookie()){var q=h.loadSignedRequest(),r;if(q){try{r=n.parse(q);}catch(s){h.clearSignedRequestCookie();}if(r&&r.user_id)m.setCookieUserID(r.user_id);}h.loadMeta();}});},3);
__d("sdk.Canvas.Plugin",["sdk.api","sdk.RPC","Log","UserAgent","sdk.Runtime","createArrayFrom"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m='CLSID:D27CDB6E-AE6D-11CF-96B8-444553540000',n='CLSID:444785F1-DE89-4295-863A-D46C3A781394',o=null,p=!(j.osx()>=10.9&&(j.chrome()>=31||j.webkit()>=537.71||j.firefox()>=25));function q(aa){aa._hideunity_savedstyle={};aa._hideunity_savedstyle.left=aa.style.left;aa._hideunity_savedstyle.position=aa.style.position;aa._hideunity_savedstyle.width=aa.style.width;aa._hideunity_savedstyle.height=aa.style.height;aa.style.left='-10000px';aa.style.position='absolute';aa.style.width='1px';aa.style.height='1px';}function r(aa){if(aa._hideunity_savedstyle){aa.style.left=aa._hideunity_savedstyle.left;aa.style.position=aa._hideunity_savedstyle.position;aa.style.width=aa._hideunity_savedstyle.width;aa.style.height=aa._hideunity_savedstyle.height;}}function s(aa){aa._old_visibility=aa.style.visibility;aa.style.visibility='hidden';}function t(aa){aa.style.visibility=aa._old_visibility||'';delete aa._old_visibility;}function u(aa){var ba=aa.type?aa.type.toLowerCase():null,ca=ba==='application/x-shockwave-flash'||(aa.classid&&aa.classid.toUpperCase()==m);if(!ca)return false;var da=/opaque|transparent/i;if(da.test(aa.getAttribute('wmode')))return false;for(var ea=0;ea<aa.childNodes.length;ea++){var fa=aa.childNodes[ea];if(/param/i.test(fa.nodeName)&&/wmode/i.test(fa.name)&&da.test(fa.value))return false;}return true;}function v(aa){var ba=aa.type?aa.type.toLowerCase():null;return ba==='application/vnd.unity'||(aa.classid&&aa.classid.toUpperCase()==n);}function w(aa){var ba=l(window.document.getElementsByTagName('object'));ba=ba.concat(l(window.document.getElementsByTagName('embed')));var ca=false,da=false;ES5(ba,'forEach',true,function(fa){var ga=u(fa),ha=p&&v(fa);if(!ga&&!ha)return;ca=ca||ga;da=da||ha;var ia=function(){if(aa.state==='opened'){if(ga){s(fa);}else q(fa);}else if(ga){t(fa);}else r(fa);};if(o){i.info('Calling developer specified callback');var ja={state:aa.state,elem:fa};o(ja);setTimeout(ia,200);}else ia();});if(Math.random()<=1/1000){var ea={unity:da,flash:ca};g(k.getClientID()+'/occludespopups','post',ea);}}h.local.hidePluginObjects=function(){i.info('hidePluginObjects called');w({state:'opened'});};h.local.showPluginObjects=function(){i.info('showPluginObjects called');w({state:'closed'});};h.local.showFlashObjects=h.local.showPluginObjects;h.local.hideFlashObjects=h.local.hidePluginObjects;function x(){s();q();}function y(){t();r();}var z={_setHidePluginCallback:function(aa){o=aa;},hidePluginElement:x,showPluginElement:y};e.exports=z;},null);
__d("sdk.Canvas.IframeHandling",["DOMWrapper","sdk.RPC"],function(a,b,c,d,e,f,g,h){var i=null,j;function k(){var o=g.getWindow().document,p=o.body,q=o.documentElement,r=Math.max(p.offsetTop,0),s=Math.max(q.offsetTop,0),t=p.scrollHeight+r,u=p.offsetHeight+r,v=q.scrollHeight+s,w=q.offsetHeight+s;return Math.max(t,u,v,w);}function l(o){if(typeof o!='object')o={};var p=0,q=0;if(!o.height){o.height=k();p=16;q=4;}if(!o.frame)o.frame=window.name||'iframe_canvas';if(j){var r=j.height,s=o.height-r;if(s<=q&&s>=-p)return false;}j=o;h.remote.setSize(o);return true;}function m(o,p){if(p===undefined&&typeof o==='number'){p=o;o=true;}if(o||o===undefined){if(i===null)i=setInterval(function(){l();},p||100);l();}else if(i!==null){clearInterval(i);i=null;}}h.stub('setSize');var n={setSize:l,setAutoGrow:m};e.exports=n;},null);
__d("sdk.Canvas.Navigation",["sdk.RPC"],function(a,b,c,d,e,f,g){function h(j){g.local.navigate=function(k){j({path:k});};g.remote.setNavigationEnabled(true);}g.stub('setNavigationEnabled');var i={setUrlHandler:h};e.exports=i;},null);
__d("sdk.Canvas.Tti",["sdk.RPC","sdk.Runtime"],function(a,b,c,d,e,f,g,h){function i(n,o){var p={appId:h.getClientID(),time:ES5('Date','now',false),name:o},q=[p];if(n)q.push(function(r){n(r.result);});g.remote.logTtiMessage.apply(null,q);}function j(){i(null,'StartIframeAppTtiTimer');}function k(n){i(n,'StopIframeAppTtiTimer');}function l(n){i(n,'RecordIframeAppTti');}g.stub('logTtiMessage');var m={setDoneLoading:l,startTimer:j,stopTimer:k};e.exports=m;},null);
__d("legacy:fb.canvas",["Assert","sdk.Canvas.Environment","sdk.Event","FB","sdk.Canvas.Plugin","sdk.Canvas.IframeHandling","Log","sdk.Canvas.Navigation","sdk.Runtime","sdk.Canvas.Tti"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){j.provide('Canvas',{setSize:function(q){g.maybeObject(q,'Invalid argument');return l.setSize.apply(null,arguments);},setAutoGrow:function(){return l.setAutoGrow.apply(null,arguments);},getPageInfo:function(q){g.isFunction(q,'Invalid argument');return h.getPageInfo.apply(null,arguments);},scrollTo:function(q,r){g.maybeNumber(q,'Invalid argument');g.maybeNumber(r,'Invalid argument');return h.scrollTo.apply(null,arguments);},setDoneLoading:function(q){g.maybeFunction(q,'Invalid argument');return p.setDoneLoading.apply(null,arguments);},startTimer:function(){return p.startTimer.apply(null,arguments);},stopTimer:function(q){g.maybeFunction(q,'Invalid argument');return p.stopTimer.apply(null,arguments);},getHash:function(q){g.isFunction(q,'Invalid argument');return n.getHash.apply(null,arguments);},setHash:function(q){g.isString(q,'Invalid argument');return n.setHash.apply(null,arguments);},setUrlHandler:function(q){g.isFunction(q,'Invalid argument');return n.setUrlHandler.apply(null,arguments);}});i.subscribe('init:post',function(q){if(o.isEnvironment(o.ENVIRONMENTS.CANVAS)){g.isTrue(!q.hideFlashCallback||!q.hidePluginCallback,'cannot specify deprecated hideFlashCallback and new hidePluginCallback');k._setHidePluginCallback(q.hidePluginCallback||q.hideFlashCallback);}});},3);
__d("legacy:fb.canvas-legacy",["Assert","FB","Log","sdk.Canvas.Tti"],function(a,b,c,d,e,f,g,h,i,j){h.provide('CanvasInsights',{setDoneLoading:function(k){i.warn('Deprecated: use FB.Canvas.setDoneLoading');g.maybeFunction(k,'Invalid argument');return j.setDoneLoading.apply(null,arguments);}});},3);
__d("sdk.Canvas.Prefetcher",["sdk.api","createArrayFrom","JSSDKCanvasPrefetcherConfig","sdk.Runtime"],function(a,b,c,d,e,f,g,h,i,j){var k={AUTOMATIC:0,MANUAL:1},l=i.sampleRate,m=i.blacklist,n=k.AUTOMATIC,o=[];function p(){var u={object:'data',link:'href',script:'src'};if(n==k.AUTOMATIC)ES5(ES5('Object','keys',false,u),'forEach',true,function(v){var w=u[v];ES5(h(document.getElementsByTagName(v)),'forEach',true,function(x){if(x[w])o.push(x[w]);});});if(o.length===0)return;g(j.getClientID()+'/staticresources','post',{urls:ES5('JSON','stringify',false,o),is_https:location.protocol==='https:'});o=[];}function q(){if(!j.isEnvironment(j.ENVIRONMENTS.CANVAS)||!j.getClientID()||!l)return;if(Math.random()>1/l||m=='*'||~ES5(m,'indexOf',true,j.getClientID()))return;setTimeout(p,30000);}function r(u){n=u;}function s(u){o.push(u);}var t={COLLECT_AUTOMATIC:k.AUTOMATIC,COLLECT_MANUAL:k.MANUAL,addStaticResource:s,setCollectionMode:r,_maybeSample:q};e.exports=t;},null);
__d("legacy:fb.canvas.prefetcher",["FB","sdk.Canvas.Prefetcher","sdk.Event","sdk.Runtime"],function(a,b,c,d,e,f,g,h,i,j){g.provide('Canvas.Prefetcher',h);i.subscribe('init:post',function(k){if(j.isEnvironment(j.ENVIRONMENTS.CANVAS))h._maybeSample();});},3);
__d("legacy:fb.compat.ui",["copyProperties","FB","Log","sdk.ui","sdk.UIServer"],function(a,b,c,d,e,f,g,h,i,j,k){h.provide('',{share:function(l){i.error('share() has been deprecated. Please use FB.ui() instead.');j({display:'popup',method:'stream.share',u:l});},publish:function(l,m){i.error('publish() has been deprecated. Please use FB.ui() instead.');l=l||{};j(g({display:'popup',method:'stream.publish',preview:1},l||{}),m);},addFriend:function(l,m){i.error('addFriend() has been deprecated. Please use FB.ui() instead.');j({display:'popup',id:l,method:'friend.add'},m);}});k.Methods['auth.login']=k.Methods['permissions.request'];},3);
__d("mergeArrays",[],function(a,b,c,d,e,f){function g(h,i){for(var j=0;j<i.length;j++)if(ES5(h,'indexOf',true,i[j])<0)h.push(i[j]);return h;}e.exports=g;},null);
__d("format",[],function(a,b,c,d,e,f){function g(h,i){i=Array.prototype.slice.call(arguments,1);return h.replace(/\{(\d+)\}/g,function(j,k){var l=i[Number(k)];return (l===null||l===undefined)?'':l.toString();});}e.exports=g;},null);
__d("safeEval",[],function(a,b,c,d,e,f){function g(h,i){if(h===null||typeof h==='undefined')return;if(typeof h!=='string')return h;if(/^\w+$/.test(h)&&typeof window[h]==='function')return window[h].apply(null,i||[]);return Function('return eval("'+h.replace(/"/g,'\\"')+'");').apply(null,i||[]);}e.exports=g;},null);
__d("sdk.Waitable",["sdk.Model"],function(a,b,c,d,e,f,g){var h=g.extend({constructor:function(){this.parent({Value:undefined});},error:function(i){this.inform("error",i);},wait:function(i,j){if(j)this.subscribe('error',j);this.monitor('Value.change',ES5(function(){var k=this.getValue();if(k!==undefined){this.value=k;i(k);return true;}},'bind',true,this));}});e.exports=h;},null);
__d("sdk.Query",["format","safeEval","Type","sdk.Waitable"],function(a,b,c,d,e,f,g,h,i,j){function k(p){return ES5(p.split(','),'map',true,function(q){return ES5(q,'trim',true);});}function l(p){var q=(/^\s*(\w+)\s*=\s*(.*)\s*$/i).exec(p),r,s,t='unknown';if(q){s=q[2];if(/^(["'])(?:\\?.)*?\1$/.test(s)){s=h(s);t='index';}else if(/^\d+\.?\d*$/.test(s))t='index';}if(t=='index'){r={type:'index',key:q[1],value:s};}else r={type:'unknown',value:p};return r;}function m(p){return typeof p==='string'?ES5('JSON','stringify',false,p):p;}var n=1,o=j.extend({constructor:function(){this.parent();this.name='v_'+n++;},hasDependency:function(p){if(arguments.length)this._hasDependency=p;return !!this._hasDependency;},parse:function(p){var q=g.apply(null,p),r=(/^select (.*?) from (\w+)\s+where (.*)$/i).exec(q);this.fields=k(r[1]);this.table=r[2];this.where=l(r[3]);for(var s=1;s<p.length;s++)if(i.instanceOf(o,p[s]))p[s].hasDependency(true);return this;},toFql:function(){var p='select '+this.fields.join(',')+' from '+this.table+' where ';switch(this.where.type){case 'unknown':p+=this.where.value;break;case 'index':p+=this.where.key+'='+m(this.where.value);break;case 'in':if(this.where.value.length==1){p+=this.where.key+'='+m(this.where.value[0]);}else p+=this.where.key+' in ('+ES5(this.where.value,'map',true,m).join(',')+')';break;}return p;},toString:function(){return '#'+this.name;}});e.exports=o;},null);
__d("sdk.Data",["sdk.api","sdk.ErrorHandling","mergeArrays","sdk.Query","safeEval","sdk.Waitable"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m={query:function(n,o){var p=new j().parse(Array.prototype.slice.call(arguments));m.queue.push(p);m._waitToProcess();return p;},waitOn:function(n,o){var p=new l(),q=n.length;if(typeof(o)=='string'){var r=o;o=h.unguard(function(){return k(r);});}ES5(n,'forEach',true,function(s){s.monitor('Value.change',function(){var t=false;if(m._getValue(s)!==undefined){s.value=s.getValue();q--;t=true;}if(q===0){var u=o(ES5(n,'map',true,m._getValue));p.setValue(u!==undefined?u:true);}return t;});});return p;},process:function(n){m._process(n);},_getValue:function(n){return n instanceof l?n.getValue():n;},_selectByIndex:function(n,o,p,q){var r=new j();r.fields=n;r.table=o;r.where={type:'index',key:p,value:q};m.queue.push(r);m._waitToProcess();return r;},_waitToProcess:function(){if(m.timer<0)m.timer=setTimeout(function(){m._process();},10);},_process:function(n){m.timer=-1;var o={},p=m.queue;if(!p.length)return;m.queue=[];for(var q=0;q<p.length;q++){var r=p[q];if(r.where.type=='index'&&!r.hasDependency()){m._mergeIndexQuery(r,o);}else o[r.name]=r;}var s={q:{}};for(var t in o)if(o.hasOwnProperty(t))s.q[t]=o[t].toFql();if(n)s.access_token=n;g('/fql','GET',s,function(u){if(u.error){ES5(ES5('Object','keys',false,o),'forEach',true,function(v){o[v].error(new Error(u.error.message));});}else ES5(u.data,'forEach',true,function(v){o[v.name].setValue(v.fql_result_set);});});},_mergeIndexQuery:function(n,o){var p=n.where.key,q=n.where.value,r='index_'+n.table+'_'+p,s=o[r];if(!s){s=o[r]=new j();s.fields=[p];s.table=n.table;s.where={type:'in',key:p,value:[]};}i(s.fields,n.fields);i(s.where.value,[q]);s.wait(function(t){n.setValue(ES5(t,'filter',true,function(u){return u[p]==q;}));});},timer:-1,queue:[]};e.exports=m;},null);
__d("legacy:fb.data",["FB","sdk.Data"],function(a,b,c,d,e,f,g,h){g.provide('Data',h);},3);
__d("legacy:fb.event",["FB","sdk.Event"],function(a,b,c,d,e,f,g,h){g.provide('Event',{subscribe:ES5(h.subscribe,'bind',true,h),unsubscribe:ES5(h.unsubscribe,'bind',true,h)});},3);
__d("legacy:fb.event-legacy",["FB","sdk.Event"],function(a,b,c,d,e,f,g,h){g.provide('Event',{clear:ES5(h.clear,'bind',true,h),fire:ES5(h.fire,'bind',true,h),monitor:ES5(h.monitor,'bind',true,h)});g.provide('EventProvider',h);},3);
__d("legacy:fb.frictionless",["FB","sdk.Frictionless"],function(a,b,c,d,e,f,g,h){g.provide('Frictionless',h);},3);
__d("sdk.init",["sdk.Cookie","sdk.ErrorHandling","sdk.Event","Log","ManagedError","sdk.PlatformVersioning","QueryString","sdk.Runtime","sdk.URI","copyProperties","createArrayFrom"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){function r(t){var u=(typeof t=='number'&&t>0)||(typeof t=='string'&&/^[0-9a-f]{21,}$|^[0-9]{1,21}$/.test(t));if(u)return t.toString();j.warn('Invalid App Id: Must be a number or numeric string representing '+'the application id.');return null;}function s(t){if(n.getInitialized())j.warn('FB.init has already been called - this could indicate a problem');if(n.getIsVersioned()){if(Object.prototype.toString.call(t)!=='[object Object]')throw new k('Invalid argument');if(t.authResponse)throw new k('Setting authResponse is not supported');if(!t.version)t.version=o(location.href).getQueryData().sdk_version;l.assertValidVersion(t.version);n.setVersion(t.version);}else{if(/number|string/.test(typeof t)){j.warn('FB.init called with invalid parameters');t={apiKey:t};}t=p({status:true},t||{});}var u=r(t.appId||t.apiKey);if(u!==null)n.setClientID(u);if('scope' in t)n.setScope(t.scope);if(t.cookie){n.setUseCookie(true);if(typeof t.cookie==='string')g.setDomain(t.cookie);}if(t.kidDirectedSite)n.setKidDirectedSite(true);n.setInitialized(true);i.fire('init:post',t);}setTimeout(function(){var t=/(connect\.facebook\.net|\.facebook\.com\/assets.php).*?#(.*)/;ES5(q(document.getElementsByTagName('script')),'forEach',true,function(u){if(u.src){var v=t.exec(u.src);if(v){var w=m.decode(v[2]);for(var x in w)if(w.hasOwnProperty(x)){var y=w[x];if(y=='0')w[x]=0;}s(w);}}});if(window.fbAsyncInit&&!window.fbAsyncInit.hasRun){window.fbAsyncInit.hasRun=true;h.unguard(window.fbAsyncInit)();}},0);e.exports=s;},null);
__d("legacy:fb.init",["FB","sdk.init"],function(a,b,c,d,e,f,g,h){g.provide('',{init:h});},3);
__d("legacy:fb.json",["FB","ManagedError"],function(a,b,c,d,e,f,g,h){g.provide('JSON',{stringify:function(i){try{return ES5('JSON','stringify',false,i);}catch(j){throw new h(j.message,j);}},parse:function(i){try{return ES5('JSON','parse',false,i);}catch(j){throw new h(j.message,j);}}});},3);
__d("legacy:fb.pay",["copyProperties","sdk.Runtime","sdk.UIServer","sdk.XD","FB"],function(a,b,c,d,e,f,g,h,i,j){b('FB');var k={error_code:1383001,error_message:'An unknown error caused the dialog to be closed'},l=function(m){return function(n){m(n&&n.response?ES5('JSON','parse',false,n.response):k);};};g(i.Methods,{'pay.prompt':{transform:function(m){var n=j.handler(l(m.cb),'parent.frames['+(window.name||'iframe_canvas')+']');m.params.channel=n;j.inform('Pay.Prompt',m.params);}},pay:{size:{width:555,height:120},connectDisplay:'popup',transform:function(m){m.cb=l(m.cb);if(!h.isEnvironment(h.ENVIRONMENTS.CANVAS)){m.params.order_info=ES5('JSON','stringify',false,m.params.order_info);return m;}var n=j.handler(m.cb,'parent.frames['+(window.name||'iframe_canvas')+']');m.params.channel=n;m.params.uiserver=true;j.inform('Pay.Prompt',m.params);}}});},3);
__d("legacy:fb.ua",["FB","UserAgent"],function(a,b,c,d,e,f,g,h){g.provide('UA',{nativeApp:h.nativeApp});},3);
__d("legacy:fb.ui",["FB","sdk.ui"],function(a,b,c,d,e,f,g,h){g.provide('',{ui:h});},3);
__d("Miny",[],function(a,b,c,d,e,f){var g='Miny1',h={encode:[],decode:{}},i='wxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'.split('');function j(n){for(var o=h.encode.length;o<n;o++){var p=o.toString(32).split('');p[p.length-1]=i[parseInt(p[p.length-1],32)];p=p.join('');h.encode[o]=p;h.decode[p]=o;}return h;}function k(n){if(/^$|[~\\]|__proto__/.test(n))return n;var o=n.match(/\w+|\W+/g),p={};for(var q=0;q<o.length;q++)p[o[q]]=(p[o[q]]||0)+1;var r=ES5('Object','keys',false,p);r.sort(function(u,v){return p[u]<p[v]?1:(p[v]<p[u]?-1:0);});var s=j(r.length).encode;for(q=0;q<r.length;q++)p[r[q]]=s[q];var t=[];for(q=0;q<o.length;q++)t[q]=p[o[q]];return [g,r.length].concat(r).concat(t.join('')).join('~');}function l(n){var o=n.split('~');if(o.shift()!=g)return n;var p=parseInt(o.shift(),10),q=o.pop();q=q.match(/[0-9a-v]*[\-w-zA-Z_]/g);var r=o,s=j(p).decode,t=[];for(var u=0;u<q.length;u++)t[u]=r[s[q[u]]];return t.join('');}var m={encode:k,decode:l};e.exports=m;},null);
__d("runOnce",[],function(a,b,c,d,e,f){function g(h){var i,j;return function(){if(!i){i=true;j=h();}return j;};}e.exports=g;},null);
__d("XFBML",["Assert","copyProperties","createArrayFrom","sdk.DOM","sdk.feature","sdk.Impressions","Log","ObservableMixin","runOnce","UserAgent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q={},r={},s=0,t=new n();function u(ca,da){return ca[da]+'';}function v(ca){return ca.scopeName?(ca.scopeName+':'+ca.nodeName):'';}function w(ca){return q[u(ca,'nodeName').toLowerCase()]||q[v(ca).toLowerCase()];}function x(ca){var da=ES5(ES5(u(ca,'className'),'trim',true).split(/\s+/),'filter',true,function(ea){return r.hasOwnProperty(ea);});if(da.length===0)return undefined;if(ca.getAttribute('fb-xfbml-state')||!ca.childNodes||ca.childNodes.length===0||(ca.childNodes.length===1&&ca.childNodes[0].nodeType===3)||(ca.children.length===1&&u(ca.children[0],'className')==='fb-xfbml-parse-ignore'))return r[da[0]];}function y(ca){var da={};ES5(i(ca.attributes),'forEach',true,function(ea){da[u(ea,'name')]=u(ea,'value');});return da;}function z(ca,da,ea){var fa=document.createElement('div');j.addCss(ca,da+'-'+ea);ES5(i(ca.childNodes),'forEach',true,function(ga){fa.appendChild(ga);});ES5(i(ca.attributes),'forEach',true,function(ga){fa.setAttribute(ga.name,ga.value);});ca.parentNode.replaceChild(fa,ca);return fa;}function aa(ca,da,ea){g.isTrue(ca&&ca.nodeType&&ca.nodeType===1&&!!ca.getElementsByTagName,'Invalid DOM node passed to FB.XFBML.parse()');g.isFunction(da,'Invalid callback passed to FB.XFBML.parse()');var fa=++s;m.info('XFBML Parsing Start %s',fa);var ga=1,ha=0,ia=function(){ga--;if(ga===0){m.info('XFBML Parsing Finish %s, %s tags found',fa,ha);da();t.inform('render',fa,ha);}g.isTrue(ga>=0,'onrender() has been called too many times');};ES5(i(ca.getElementsByTagName('*')),'forEach',true,function(ka){if(!ea&&ka.getAttribute('fb-xfbml-state'))return;if(ka.nodeType!==1)return;var la=w(ka)||x(ka);if(!la)return;if(p.ie()<9&&ka.scopeName)ka=z(ka,la.xmlns,la.localName);ga++;ha++;var ma=new la.ctor(ka,la.xmlns,la.localName,y(ka));ma.subscribe('render',o(function(){ka.setAttribute('fb-xfbml-state','rendered');ia();}));var na=function(){if(ka.getAttribute('fb-xfbml-state')=='parsed'){t.subscribe('render.queue',na);}else{ka.setAttribute('fb-xfbml-state','parsed');ma.process();}};na();});t.inform('parse',fa,ha);var ja=30000;setTimeout(function(){if(ga>0)m.warn('%s tags failed to render in %s ms',ga,ja);},ja);ia();}t.subscribe('render',function(){var ca=t.getSubscribers('render.queue');t.clearSubscribers('render.queue');ES5(ca,'forEach',true,function(da){da();});});h(t,{registerTag:function(ca){var da=ca.xmlns+':'+ca.localName;g.isUndefined(q[da],da+' already registered');q[da]=ca;r[ca.xmlns+'-'+ca.localName]=ca;},parse:function(ca,da){aa(ca||document.body,da||function(){},true);},parseNew:function(){aa(document.body,function(){},false);}});if(k('log_tag_count')){var ba=function(ca,da){t.unsubscribe('parse',ba);setTimeout(ES5(l.log,'bind',true,null,102,{tag_count:da}),5000);};t.subscribe('parse',ba);}e.exports=t;},null);
__d("PluginPipe",["sdk.Content","copyProperties","sdk.feature","guid","insertIframe","Miny","ObservableMixin","JSSDKPluginPipeConfig","sdk.Runtime","UrlMap","UserAgent","XFBML"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s=new m(),t=n.threshold,u=[];function v(){return !!(i('plugin_pipe')&&o.getSecure()!==undefined&&(q.chrome()||q.firefox())&&n.enabledApps[o.getClientID()]);}function w(){var y=u;u=[];if(y.length<=t){ES5(y,'forEach',true,function(ba){k(ba.config);});return;}var z=y.length+1;function aa(){z--;if(z===0)x(y);}ES5(y,'forEach',true,function(ba){var ca={};for(var da in ba.config)ca[da]=ba.config[da];ca.url=p.resolve('www',o.getSecure())+'/plugins/plugin_pipe_shell.php';ca.onload=aa;k(ca);});aa();}r.subscribe('parse',w);function x(y){var z=document.createElement('span');g.appendHidden(z);var aa={};ES5(y,'forEach',true,function(fa){aa[fa.config.name]={plugin:fa.tag,params:fa.params};});var ba=ES5('JSON','stringify',false,aa),ca=l.encode(ba);ES5(y,'forEach',true,function(fa){var ga=document.getElementsByName(fa.config.name)[0];ga.onload=fa.config.onload;});var da=p.resolve('www',o.getSecure())+'/plugins/pipe.php',ea=j();k({url:'about:blank',root:z,name:ea,className:'fb_hidden fb_invisible',onload:function(){g.submitToTarget({url:da,target:ea,params:{plugins:ca.length<ba.length?ca:ba}});}});}h(s,{add:function(y){var z=v();z&&u.push({config:y._config,tag:y._tag,params:y._params});return z;}});e.exports=s;},null);
__d("IframePlugin",["sdk.Auth","sdk.DOM","sdk.Event","Log","ObservableMixin","sdk.PlatformVersioning","PluginPipe","QueryString","sdk.Runtime","Type","sdk.URI","UrlMap","UserAgent","sdk.XD","copyProperties","sdk.createIframe","guid","resolveURI"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var y={skin:'string',font:'string',width:'px',height:'px',ref:'string',color_scheme:'string'};function z(ga,ha,ia){if(ha||ha===0)ga.style.width=ha+'px';if(ia||ia===0)ga.style.height=ia+'px';}function aa(ga){return function(ha){var ia={width:ha.width,height:ha.height,pluginID:ga};i.fire('xfbml.resize',ia);};}var ba={string:function(ga){return ga;},bool:function(ga){return ga?(/^(?:true|1|yes|on)$/i).test(ga):undefined;},url:function(ga){return x(ga);},url_maybe:function(ga){return ga?x(ga):ga;},hostname:function(ga){return ga||window.location.hostname;},px:function(ga){return (/^(\d+)(?:px)?$/).test(ga)?parseInt(RegExp.$1,10):undefined;},text:function(ga){return ga;}};function ca(ga,ha){var ia=ga[ha]||ga[ha.replace(/_/g,'-')]||ga[ha.replace(/_/g,'')]||ga['data-'+ha]||ga['data-'+ha.replace(/_/g,'-')]||ga['data-'+ha.replace(/_/g,'')]||undefined;return ia;}function da(ga,ha,ia,ja){ES5(ES5('Object','keys',false,ga),'forEach',true,function(ka){if(ga[ka]=='text'&&!ia[ka]){ia[ka]=ha.textContent||ha.innerText||'';ha.setAttribute(ka,ia[ka]);}ja[ka]=ba[ga[ka]](ca(ia,ka));});}function ea(ga){return ga||ga==='0'||ga===0?parseInt(ga,10):undefined;}var fa=p.extend({constructor:function(ga,ha,ia,ja){this.parent();ia=ia.replace(/-/g,'_');var ka=ca(ja,'plugin_id');this.subscribe('xd.resize',aa(ka));this.subscribe('xd.resize.flow',aa(ka));this.subscribe('xd.resize.flow',ES5(function(ra){this._config.root.style.verticalAlign='bottom';z(this._config.root,ea(ra.width),ea(ra.height));this.updateLift();clearTimeout(this._timeoutID);},'bind',true,this));this.subscribe('xd.resize',ES5(function(ra){this._config.root.style.verticalAlign='bottom';z(this._config.root,ea(ra.width),ea(ra.height));z(this._iframe,ea(ra.width),ea(ra.height));this.updateLift();clearTimeout(this._timeoutID);},'bind',true,this));this.subscribe('xd.resize.iframe',ES5(function(ra){z(this._iframe,ea(ra.width),ea(ra.height));this.updateLift();clearTimeout(this._timeoutID);},'bind',true,this));this.subscribe('xd.sdk_event',function(ra){var sa=ES5('JSON','parse',false,ra.data);sa.pluginID=ka;i.fire(ra.event,sa,ga);});var la=o.getSecure()||window.location.protocol=='https:',ma=r.resolve('www',la)+'/plugins/'+ia+'.php?',na={};da(this.getParams(),ga,ja,na);da(y,ga,ja,na);na.app_id=o.getClientID();na.locale=o.getLocale();na.sdk='joey';na.kid_directed_site=o.getKidDirectedSite();var oa=ES5(function(ra){this.inform('xd.'+ra.type,ra);},'bind',true,this);na.channel=t.handler(oa,'parent.parent',true);h.addCss(ga,'fb_iframe_widget');var pa=w();this.subscribe('xd.verify',function(ra){t.sendToFacebook(pa,{method:'xd/verify',params:ES5('JSON','stringify',false,ra.token)});});this.subscribe('xd.refreshLoginStatus',ES5(g.getLoginStatus,'bind',true,g,ES5(this.inform,'bind',true,this,'login.status'),true));var qa=document.createElement('span');qa.style.verticalAlign='top';qa.style.width='0px';qa.style.height='0px';this._element=ga;this._ns=ha;this._tag=ia;this._params=na;this._config={root:qa,url:ma+n.encode(na),name:pa,width:(s.mobile()?undefined:(na.width||1000)),height:na.height||1000,style:{border:'none',visibility:'hidden'},title:this._ns+':'+this._tag+' Facebook Social Plugin',onload:ES5(function(){this.inform('render');},'bind',true,this)};},process:function(){if(o.getIsVersioned()){l.assertVersionIsSet();var ga=q(this._config.url);this._config.url=ga.setPath('/'+o.getVersion()+ga.getPath()).toString();}var ha=u({},this._params);delete ha.channel;var ia=n.encode(ha);if(this._element.getAttribute('fb-iframe-plugin-query')==ia){j.info('Skipping render: %s:%s %s',this._ns,this._tag,ia);this.inform('render');return;}this._element.setAttribute('fb-iframe-plugin-query',ia);this.subscribe('render',function(){this._iframe.style.visibility='visible';});while(this._element.firstChild)this._element.removeChild(this._element.firstChild);this._element.appendChild(this._config.root);var ja=s.mobile()?120:45;this._timeoutID=setTimeout(ES5(function(){this._iframe&&z(this._iframe,0,0);j.warn('%s:%s failed to resize in %ss',this._ns,this._tag,ja);},'bind',true,this),ja*1000);if(!m.add(this))this._iframe=v(this._config);if(s.mobile()){h.addCss(this._element,'fb_iframe_widget_fluid');this._element.style.display='block';this._element.style.width='100%';this._element.style.height='auto';this._config.root.style.width='100%';this._config.root.style.height='auto';this._iframe.style.width='100%';this._iframe.style.height='auto';this._iframe.style.position='static';}},updateLift:function(){var ga=this._iframe.style.width===this._config.root.style.width&&this._iframe.style.height===this._config.root.style.height;h[ga?'removeCss':'addCss'](this._iframe,'fb_iframe_widget_lift');}},k);fa.getVal=ca;fa.withParams=function(ga){return fa.extend({getParams:function(){return ga;}});};e.exports=fa;},null);
__d("PluginTags",[],function(a,b,c,d,e,f){var g={activity:{filter:'string',action:'string',max_age:'string',linktarget:'string',header:'bool',recommendations:'bool',site:'hostname'},composer:{action_type:'string',action_properties:'string'},create_event_button:{},degrees:{href:'url'},facepile:{href:'string',action:'string',size:'string',max_rows:'string',show_count:'bool'},follow:{href:'url',layout:'string',show_faces:'bool'},like:{href:'url',layout:'string',show_faces:'bool',share:'bool',action:'string',send:'bool'},like_box:{href:'string',show_faces:'bool',header:'bool',stream:'bool',force_wall:'bool',show_border:'bool',id:'string',connections:'string',profile_id:'string',name:'string'},open_graph:{href:'url',layout:'string',show_faces:'bool',action_type:'string',action_properties:'string'},open_graph_preview:{action_type:'string',action_properties:'string'},page_events:{href:'url'},post:{href:'url',show_border:'bool'},privacy_selector:{},profile_pic:{uid:'string',linked:'bool',href:'string',size:'string',facebook_logo:'bool'},recommendations:{filter:'string',action:'string',max_age:'string',linktarget:'string',header:'bool',site:'hostname'},share_button:{href:'url',type:'string'},shared_activity:{header:'bool'},send:{href:'url'},send_to_mobile:{max_rows:'string',show_faces:'bool',size:'string'},story:{href:'url',show_border:'bool'},topic:{topic_name:'string',topic_id:'string'},want:{href:'url',layout:'string',show_faces:'bool'}},h={subscribe:'follow',fan:'like_box',likebox:'like_box',friendpile:'facepile'};ES5(ES5('Object','keys',false,h),'forEach',true,function(i){g[i]=g[h[i]];});e.exports=g;},null);
__d("sdk.Arbiter",[],function(a,b,c,d,e,f){var g={BEHAVIOR_EVENT:'e',BEHAVIOR_PERSISTENT:'p',BEHAVIOR_STATE:'s'};e.exports=g;},null);
__d("sdk.XFBML.Element",["sdk.DOM","Type","ObservableMixin"],function(a,b,c,d,e,f,g,h,i){var j=h.extend({constructor:function(k){this.parent();this.dom=k;},fire:function(){this.inform.apply(this,arguments);},getAttribute:function(k,l,m){var n=g.getAttr(this.dom,k);return n?m?m(n):n:l;},_getBoolAttribute:function(k,l){var m=g.getBoolAttr(this.dom,k);return m===null?l:m;},_getPxAttribute:function(k,l){return this.getAttribute(k,l,function(m){var n=parseInt(m,10);return isNaN(n)?l:n;});},_getLengthAttribute:function(k,l){return this.getAttribute(k,l,function(m){if(m==='100%')return m;var n=parseInt(m,10);return isNaN(n)?l:n;});},_getAttributeFromList:function(k,l,m){return this.getAttribute(k,l,function(n){n=n.toLowerCase();return (ES5(m,'indexOf',true,n)>-1)?n:l;});},isValid:function(){for(var k=this.dom;k;k=k.parentNode)if(k==document.body)return true;},clear:function(){g.html(this.dom,'');}},i);e.exports=j;},null);
__d("sdk.XFBML.IframeWidget",["sdk.Arbiter","sdk.Auth","sdk.Content","copyProperties","sdk.DOM","sdk.Event","sdk.XFBML.Element","guid","insertIframe","QueryString","sdk.Runtime","sdk.ui","UrlMap","sdk.XD"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var u=m.extend({_iframeName:null,_showLoader:true,_refreshOnAuthChange:false,_allowReProcess:false,_fetchPreCachedLoader:false,_visibleAfter:'load',_widgetPipeEnabled:false,_borderReset:false,_repositioned:false,getUrlBits:function(){throw new Error('Inheriting class needs to implement getUrlBits().');},setupAndValidate:function(){return true;},oneTimeSetup:function(){},getSize:function(){},getIframeName:function(){return this._iframeName;},getIframeTitle:function(){return 'Facebook Social Plugin';},getChannelUrl:function(){if(!this._channelUrl){var y=this;this._channelUrl=t.handler(function(z){y.fire('xd.'+z.type,z);},'parent.parent',true);}return this._channelUrl;},getIframeNode:function(){return this.dom.getElementsByTagName('iframe')[0];},arbiterInform:function(event,y,z){t.sendToFacebook(this.getIframeName(),{method:event,params:ES5('JSON','stringify',false,y||{}),behavior:z||g.BEHAVIOR_PERSISTENT});},_arbiterInform:function(event,y,z){var aa='parent.frames["'+this.getIframeNode().name+'"]';t.inform(event,y,aa,z);},getDefaultWebDomain:function(){return s.resolve('www');},process:function(y){if(this._done){if(!this._allowReProcess&&!y)return;this.clear();}else this._oneTimeSetup();this._done=true;this._iframeName=this.getIframeName()||this._iframeName||n();if(!this.setupAndValidate()){this.fire('render');return;}if(this._showLoader)this._addLoader();k.addCss(this.dom,'fb_iframe_widget');if(this._visibleAfter!='immediate'){k.addCss(this.dom,'fb_hide_iframes');}else this.subscribe('iframe.onload',ES5(this.fire,'bind',true,this,'render'));var z=this.getSize()||{},aa=this.getFullyQualifiedURL();if(z.width=='100%')k.addCss(this.dom,'fb_iframe_widget_fluid');this.clear();o({url:aa,root:this.dom.appendChild(document.createElement('span')),name:this._iframeName,title:this.getIframeTitle(),className:q.getRtl()?'fb_rtl':'fb_ltr',height:z.height,width:z.width,onload:ES5(this.fire,'bind',true,this,'iframe.onload')});this._resizeFlow(z);this.loaded=false;this.subscribe('iframe.onload',ES5(function(){this.loaded=true;},'bind',true,this));},generateWidgetPipeIframeName:function(){v++;return 'fb_iframe_'+v;},getFullyQualifiedURL:function(){var y=this._getURL();y+='?'+p.encode(this._getQS());if(y.length>2000){y='about:blank';var z=ES5(function(){this._postRequest();this.unsubscribe('iframe.onload',z);},'bind',true,this);this.subscribe('iframe.onload',z);}return y;},_getWidgetPipeShell:function(){return s.resolve('www')+'/common/widget_pipe_shell.php';},_oneTimeSetup:function(){this.subscribe('xd.resize',ES5(this._handleResizeMsg,'bind',true,this));this.subscribe('xd.resize',ES5(this._bubbleResizeEvent,'bind',true,this));this.subscribe('xd.resize.iframe',ES5(this._resizeIframe,'bind',true,this));this.subscribe('xd.resize.flow',ES5(this._resizeFlow,'bind',true,this));this.subscribe('xd.resize.flow',ES5(this._bubbleResizeEvent,'bind',true,this));this.subscribe('xd.refreshLoginStatus',function(){h.getLoginStatus(function(){},true);});this.subscribe('xd.logout',function(){r({method:'auth.logout',display:'hidden'},function(){});});if(this._refreshOnAuthChange)this._setupAuthRefresh();if(this._visibleAfter=='load')this.subscribe('iframe.onload',ES5(this._makeVisible,'bind',true,this));this.subscribe('xd.verify',ES5(function(y){this.arbiterInform('xd/verify',y.token);},'bind',true,this));this.oneTimeSetup();},_makeVisible:function(){this._removeLoader();k.removeCss(this.dom,'fb_hide_iframes');this.fire('render');},_setupAuthRefresh:function(){h.getLoginStatus(ES5(function(y){var z=y.status;l.subscribe('auth.statusChange',ES5(function(aa){if(!this.isValid())return;if(z=='unknown'||aa.status=='unknown')this.process(true);z=aa.status;},'bind',true,this));},'bind',true,this));},_handleResizeMsg:function(y){if(!this.isValid())return;this._resizeIframe(y);this._resizeFlow(y);if(!this._borderReset){this.getIframeNode().style.border='none';this._borderReset=true;}this._makeVisible();},_bubbleResizeEvent:function(y){var z={height:y.height,width:y.width,pluginID:this.getAttribute('plugin-id')};l.fire('xfbml.resize',z);},_resizeIframe:function(y){var z=this.getIframeNode();if(y.reposition==="true")this._repositionIframe(y);y.height&&(z.style.height=y.height+'px');y.width&&(z.style.width=y.width+'px');this._updateIframeZIndex();},_resizeFlow:function(y){var z=this.dom.getElementsByTagName('span')[0];y.height&&(z.style.height=y.height+'px');y.width&&(z.style.width=y.width+'px');this._updateIframeZIndex();},_updateIframeZIndex:function(){var y=this.dom.getElementsByTagName('span')[0],z=this.getIframeNode(),aa=z.style.height===y.style.height&&z.style.width===y.style.width,ba=aa?'removeCss':'addCss';k[ba](z,'fb_iframe_widget_lift');},_repositionIframe:function(y){var z=this.getIframeNode(),aa=parseInt(k.getStyle(z,'width'),10),ba=k.getPosition(z).x,ca=k.getViewportInfo().width,da=parseInt(y.width,10);if(ba+da>ca&&ba>da){z.style.left=aa-da+'px';this.arbiterInform('xd/reposition',{type:'horizontal'});this._repositioned=true;}else if(this._repositioned){z.style.left='0px';this.arbiterInform('xd/reposition',{type:'restore'});this._repositioned=false;}},_addLoader:function(){if(!this._loaderDiv){k.addCss(this.dom,'fb_iframe_widget_loader');this._loaderDiv=document.createElement('div');this._loaderDiv.className='FB_Loader';this.dom.appendChild(this._loaderDiv);}},_removeLoader:function(){if(this._loaderDiv){k.removeCss(this.dom,'fb_iframe_widget_loader');if(this._loaderDiv.parentNode)this._loaderDiv.parentNode.removeChild(this._loaderDiv);this._loaderDiv=null;}},_getQS:function(){return j({api_key:q.getClientID(),locale:q.getLocale(),sdk:'joey',kid_directed_site:q.getKidDirectedSite(),ref:this.getAttribute('ref')},this.getUrlBits().params);},_getURL:function(){var y=this.getDefaultWebDomain(),z='';return y+'/plugins/'+z+this.getUrlBits().name+'.php';},_postRequest:function(){i.submitToTarget({url:this._getURL(),target:this.getIframeNode().name,params:this._getQS()});}}),v=0,w={};function x(){var y={};for(var z in w){var aa=w[z];y[z]={widget:aa.getUrlBits().name,params:aa._getQS()};}return y;}e.exports=u;},null);
__d("sdk.XFBML.Comments",["sdk.Event","sdk.XFBML.IframeWidget","QueryString","sdk.Runtime","JSSDKConfig","UrlMap","UserAgent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=h.extend({_visibleAfter:'immediate',_refreshOnAuthChange:true,setupAndValidate:function(){var o={channel_url:this.getChannelUrl(),colorscheme:this.getAttribute('colorscheme'),skin:this.getAttribute('skin'),numposts:this.getAttribute('num-posts',10),width:this._getLengthAttribute('width'),href:this.getAttribute('href'),permalink:this.getAttribute('permalink'),publish_feed:this.getAttribute('publish_feed'),order_by:this.getAttribute('order_by'),mobile:this._getBoolAttribute('mobile')};if(!o.width&&!o.permalink)o.width=550;if(k.initSitevars.enableMobileComments&&m.mobile()&&o.mobile!==false){o.mobile=true;delete o.width;}if(!o.skin)o.skin=o.colorscheme;if(!o.href){o.migrated=this.getAttribute('migrated');o.xid=this.getAttribute('xid');o.title=this.getAttribute('title',document.title);o.url=this.getAttribute('url',document.URL);o.quiet=this.getAttribute('quiet');o.reverse=this.getAttribute('reverse');o.simple=this.getAttribute('simple');o.css=this.getAttribute('css');o.notify=this.getAttribute('notify');if(!o.xid){var p=ES5(document.URL,'indexOf',true,'#');if(p>0){o.xid=encodeURIComponent(document.URL.substring(0,p));}else o.xid=encodeURIComponent(document.URL);}if(o.migrated)o.href=l.resolve('www')+'/plugins/comments_v1.php?'+'app_id='+j.getClientID()+'&xid='+encodeURIComponent(o.xid)+'&url='+encodeURIComponent(o.url);}else{var q=this.getAttribute('fb_comment_id');if(!q){q=i.decode(document.URL.substring(ES5(document.URL,'indexOf',true,'?')+1)).fb_comment_id;if(q&&ES5(q,'indexOf',true,'#')>0)q=q.substring(0,ES5(q,'indexOf',true,'#'));}if(q){o.fb_comment_id=q;this.subscribe('render',ES5(function(){if(!window.location.hash)window.location.hash=this.getIframeNode().id;},'bind',true,this));}}this._attr=o;return true;},oneTimeSetup:function(){this.subscribe('xd.addComment',ES5(this._handleCommentMsg,'bind',true,this));this.subscribe('xd.commentCreated',ES5(this._handleCommentCreatedMsg,'bind',true,this));this.subscribe('xd.commentRemoved',ES5(this._handleCommentRemovedMsg,'bind',true,this));},getSize:function(){if(!this._attr.permalink)return {width:this._attr.mobile?'100%':this._attr.width,height:160};},getUrlBits:function(){return {name:'comments',params:this._attr};},getDefaultWebDomain:function(){return l.resolve(this._attr.mobile?'m':'www',true);},_handleCommentMsg:function(o){if(!this.isValid())return;g.fire('comments.add',{post:o.post,user:o.user,widget:this});},_handleCommentCreatedMsg:function(o){if(!this.isValid())return;var p={href:o.href,commentID:o.commentID,parentCommentID:o.parentCommentID};g.fire('comment.create',p);},_handleCommentRemovedMsg:function(o){if(!this.isValid())return;var p={href:o.href,commentID:o.commentID};g.fire('comment.remove',p);}});e.exports=n;},null);
__d("sdk.XFBML.CommentsCount",["sdk.Data","sdk.DOM","sdk.XFBML.Element","sprintf"],function(a,b,c,d,e,f,g,h,i,j){var k=i.extend({process:function(){h.addCss(this.dom,'fb_comments_count_zero');var l=this.getAttribute('href',window.location.href);g._selectByIndex(['commentsbox_count'],'link_stat','url',l).wait(ES5(function(m){var n=m[0].commentsbox_count;h.html(this.dom,j('<span class="fb_comments_count">%s</span>',n));if(n>0)h.removeCss(this.dom,'fb_comments_count_zero');this.fire('render');},'bind',true,this));}});e.exports=k;},null);
__d("sdk.Anim",["sdk.DOM"],function(a,b,c,d,e,f,g){var h={ate:function(i,j,k,l){k=!isNaN(parseFloat(k))&&k>=0?k:750;var m=40,n={},o={},p=null,q=setInterval(ES5(function(){if(!p)p=ES5('Date','now',false);var r=1;if(k!=0)r=Math.min((ES5('Date','now',false)-p)/k,1);for(var s in j)if(j.hasOwnProperty(s)){var t=j[s];if(!n[s]){var u=g.getStyle(i,s);if(u===false)return;n[s]=this._parseCSS(u+'');}if(!o[s])o[s]=this._parseCSS(t.toString());var v='';ES5(n[s],'forEach',true,function(w,x){if(isNaN(o[s][x].numPart)&&o[s][x].textPart=='?'){v=w.numPart+w.textPart;}else if(isNaN(w.numPart)){v=w.textPart;}else v+=(w.numPart+Math.ceil((o[s][x].numPart-w.numPart)*Math.sin(Math.PI/2*r)))+o[s][x].textPart+' ';});g.setStyle(i,s,v);}if(r==1){clearInterval(q);if(l)l(i);}},'bind',true,this),m);},_parseCSS:function(i){var j=[];ES5(i.split(' '),'forEach',true,function(k){var l=parseInt(k,10);j.push({numPart:l,textPart:k.replace(l,'')});});return j;}};e.exports=h;},null);
__d("escapeHTML",[],function(a,b,c,d,e,f){var g=/[&<>"'\/]/g,h={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;','/':'&#x2F;'};function i(j){return j.replace(g,function(k){return h[k];});}e.exports=i;},null);
__d("sdk.Helper",["sdk.ErrorHandling","sdk.Event","UrlMap","safeEval","sprintf"],function(a,b,c,d,e,f,g,h,i,j,k){var l={isUser:function(m){return m<2.2e+09||(m>=1e+14&&m<=100099999989999)||(m>=8.9e+13&&m<=89999999999999);},upperCaseFirstChar:function(m){if(m.length>0){return m.substr(0,1).toUpperCase()+m.substr(1);}else return m;},getProfileLink:function(m,n,o){if(!o&&m)o=k('%s/profile.php?id=%s',i.resolve('www'),m.uid||m.id);if(o)n=k('<a class="fb_link" href="%s">%s</a>',o,n);return n;},invokeHandler:function(m,n,o){if(m)if(typeof m==='string'){g.unguard(j)(m,o);}else if(m.apply)g.unguard(m).apply(n,o||[]);},fireEvent:function(m,n){var o=n._attr.href;n.fire(m,o);h.fire(m,o,n);},executeFunctionByName:function(m){var n=Array.prototype.slice.call(arguments,1),o=m.split("."),p=o.pop(),q=window;for(var r=0;r<o.length;r++)q=q[o[r]];return q[p].apply(this,n);}};e.exports=l;},null);
__d("sdk.XFBML.ConnectBar",["sdk.Anim","sdk.api","sdk.Auth","createArrayFrom","JSSDKConnectBarConfig","sdk.Data","sdk.DOM","sdk.XFBML.Element","escapeHTML","sdk.Event","format","sdk.Helper","sdk.Insights","sdk.Intl","sdk.Runtime","UrlMap","UserAgent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var x=n.extend({_initialHeight:null,_initTopMargin:0,_picFieldName:'pic_square',_page:null,_displayed:false,_notDisplayed:false,_container:null,_animationSpeed:0,process:function(){i.getLoginStatus(ES5(function(y){p.monitor('auth.statusChange',ES5(function(){if(this.isValid()&&u.getLoginStatus()=='connected'){this._uid=u.getUserID();h({method:'Connect.shouldShowConnectBar'},ES5(function(z){if(z!=2){this._animationSpeed=(z==0)?750:0;this._showBar();}else this._noRender();},'bind',true,this));}else this._noRender();return false;},'bind',true,this));},'bind',true,this));},_showBar:function(){var y=l._selectByIndex(['first_name','profile_url',this._picFieldName],'user','uid',this._uid),z=l._selectByIndex(['display_name'],'application','api_key',u.getClientID());l.waitOn([y,z],ES5(function(aa){aa[0][0].site_name=aa[1][0].display_name;if(!this._displayed){this._displayed=true;this._notDisplayed=false;this._renderConnectBar(aa[0][0]);this.fire('render');s.impression({lid:104,name:'widget_load'});this.fire('connectbar.ondisplay');p.fire('connectbar.ondisplay',this);r.invokeHandler(this.getAttribute('on-display'),this);}},'bind',true,this));},_noRender:function(){if(this._displayed){this._displayed=false;this._closeConnectBar();}if(!this._notDisplayed){this._notDisplayed=true;this.fire('render');this.fire('connectbar.onnotdisplay');p.fire('connectbar.onnotdisplay',this);r.invokeHandler(this.getAttribute('on-not-display'),this);}},_renderConnectBar:function(y){var z=document.createElement('div'),aa=document.createElement('div');z.className='fb_connect_bar';aa.className='fb_reset fb_connect_bar_container';aa.appendChild(z);document.body.appendChild(aa);this._container=aa;this._initialHeight=Math.round(parseFloat(m.getStyle(aa,'height'))+parseFloat(m.getStyle(aa,'borderBottomWidth')));m.html(z,q('<div class="fb_buttons">'+'<a href="#" class="fb_bar_close">'+'<img src="{1}" alt="{2}" title="{2}"/>'+'</a>'+'</div>'+'<a href="{7}" class="fb_profile" target="_blank">'+'<img src="{3}" alt="{4}" title="{4}"/>'+'</a>'+'{5}'+' <span>'+'<a href="{8}" class="fb_learn_more" target="_blank">{6}</a> &ndash; '+'<a href="#" class="fb_no_thanks">{0}</a>'+'</span>',t.tx._("No Thanks"),v.resolve('fbcdn')+'/'+k.imgs.buttonUrl,t.tx._("Close"),y[this._picFieldName]||v.resolve('fbcdn')+'/'+k.imgs.missingProfileUrl,o(y.first_name),t.tx._("Hi {firstName}. \u003Cstrong>{siteName}\u003C\/strong> is using Facebook to personalize your experience.",{firstName:o(y.first_name),siteName:o(y.site_name)}),t.tx._("Learn More"),y.profile_url,v.resolve('www')+'/sitetour/connect.php'));ES5(j(z.getElementsByTagName('a')),'forEach',true,function(da){da.onclick=ES5(this._clickHandler,'bind',true,this);},this);this._page=document.body;var ba=0;if(this._page.parentNode){ba=Math.round((parseFloat(m.getStyle(this._page.parentNode,'height'))-parseFloat(m.getStyle(this._page,'height')))/2);}else ba=parseInt(m.getStyle(this._page,'marginTop'),10);ba=isNaN(ba)?0:ba;this._initTopMargin=ba;if(!window.XMLHttpRequest){aa.className+=" fb_connect_bar_container_ie6";}else{aa.style.top=(-1*this._initialHeight)+'px';g.ate(aa,{top:'0px'},this._animationSpeed);}var ca={marginTop:this._initTopMargin+this._initialHeight+'px'};if(w.ie()){ca.backgroundPositionY=this._initialHeight+'px';}else ca.backgroundPosition='? '+this._initialHeight+'px';g.ate(this._page,ca,this._animationSpeed);},_clickHandler:function(y){y=y||window.event;var z=y.target||y.srcElement;while(z.nodeName!='A')z=z.parentNode;switch(z.className){case 'fb_bar_close':h({method:'Connect.connectBarMarkAcknowledged'});s.impression({lid:104,name:'widget_user_closed'});this._closeConnectBar();break;case 'fb_learn_more':case 'fb_profile':window.open(z.href);break;case 'fb_no_thanks':this._closeConnectBar();h({method:'Connect.connectBarMarkAcknowledged'});s.impression({lid:104,name:'widget_user_no_thanks'});h({method:'auth.revokeAuthorization',block:true},ES5(function(){this.fire('connectbar.ondeauth');p.fire('connectbar.ondeauth',this);r.invokeHandler(this.getAttribute('on-deauth'),this);if(this._getBoolAttribute('auto-refresh',true))window.location.reload();},'bind',true,this));break;}return false;},_closeConnectBar:function(){this._notDisplayed=true;var y={marginTop:this._initTopMargin+'px'};if(w.ie()){y.backgroundPositionY='0px';}else y.backgroundPosition='? 0px';var z=(this._animationSpeed==0)?0:300;g.ate(this._page,y,z);g.ate(this._container,{top:(-1*this._initialHeight)+'px'},z,function(aa){aa.parentNode.removeChild(aa);});this.fire('connectbar.onclose');p.fire('connectbar.onclose',this);r.invokeHandler(this.getAttribute('on-close'),this);}});e.exports=x;},null);
__d("sdk.XFBML.LoginButton",["sdk.Helper","IframePlugin"],function(a,b,c,d,e,f,g,h){var i=h.extend({constructor:function(j,k,l,m){this.parent(j,k,l,m);var n=h.getVal(m,'on_login');if(n)this.subscribe('login.status',function(o){g.invokeHandler(n,null,[o]);});},getParams:function(){return {scope:'string',perms:'string',size:'string',login_text:'text',show_faces:'bool',max_rows:'string',show_login_face:'bool',registration_url:'url_maybe',auto_logout_link:'bool',one_click:'bool',show_banner:'bool',auth_type:'string'};}});e.exports=i;},null);
__d("sdk.XFBML.Name",["copyProperties","sdk.Data","escapeHTML","sdk.Event","sdk.XFBML.Element","sdk.Helper","Log","sdk.Runtime"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o=k.extend({process:function(){g(this,{_uid:this.getAttribute('uid'),_firstnameonly:this._getBoolAttribute('first-name-only'),_lastnameonly:this._getBoolAttribute('last-name-only'),_possessive:this._getBoolAttribute('possessive'),_reflexive:this._getBoolAttribute('reflexive'),_objective:this._getBoolAttribute('objective'),_linked:this._getBoolAttribute('linked',true),_subjectId:this.getAttribute('subject-id')});if(!this._uid){m.error('"uid" is a required attribute for <fb:name>');this.fire('render');return;}var p=[];if(this._firstnameonly){p.push('first_name');}else if(this._lastnameonly){p.push('last_name');}else p.push('name');if(this._subjectId){p.push('sex');if(this._subjectId==n.getUserID())this._reflexive=true;}var q;j.monitor('auth.statusChange',ES5(function(){if(!this.isValid()){this.fire('render');return true;}if(!this._uid||this._uid=='loggedinuser')this._uid=n.getUserID();if(!this._uid)return;if(l.isUser(this._uid)){q=h._selectByIndex(p,'user','uid',this._uid);}else q=h._selectByIndex(['name','id'],'profile','id',this._uid);q.wait(ES5(function(r){if(this._subjectId==this._uid){this._renderPronoun(r[0]);}else this._renderOther(r[0]);this.fire('render');},'bind',true,this));},'bind',true,this));},_renderPronoun:function(p){var q='',r=this._objective;if(this._subjectId){r=true;if(this._subjectId===this._uid)this._reflexive=true;}if(this._uid==n.getUserID()&&this._getBoolAttribute('use-you',true)){if(this._possessive){if(this._reflexive){q='your own';}else q='your';}else if(this._reflexive){q='yourself';}else q='you';}else switch(p.sex){case 'male':if(this._possessive){q=this._reflexive?'his own':'his';}else if(this._reflexive){q='himself';}else if(r){q='him';}else q='he';break;case 'female':if(this._possessive){q=this._reflexive?'her own':'her';}else if(this._reflexive){q='herself';}else if(r){q='her';}else q='she';break;default:if(this._getBoolAttribute('use-they',true)){if(this._possessive){if(this._reflexive){q='their own';}else q='their';}else if(this._reflexive){q='themselves';}else if(r){q='them';}else q='they';}else if(this._possessive){if(this._reflexive){q='his/her own';}else q='his/her';}else if(this._reflexive){q='himself/herself';}else if(r){q='him/her';}else q='he/she';break;}if(this._getBoolAttribute('capitalize',false))q=l.upperCaseFirstChar(q);this.dom.innerHTML=q;},_renderOther:function(p){var q='',r='';if(this._uid==n.getUserID()&&this._getBoolAttribute('use-you',true)){if(this._reflexive){if(this._possessive){q='your own';}else q='yourself';}else if(this._possessive){q='your';}else q='you';}else if(p){if(null===p.first_name)p.first_name='';if(null===p.last_name)p.last_name='';if(this._firstnameonly&&p.first_name!==undefined){q=i(p.first_name);}else if(this._lastnameonly&&p.last_name!==undefined)q=i(p.last_name);if(!q)q=i(p.name);if(q!==''&&this._possessive)q+='\'s';}if(!q)q=i(this.getAttribute('if-cant-see','Facebook User'));if(q){if(this._getBoolAttribute('capitalize',false))q=l.upperCaseFirstChar(q);if(p&&this._linked){r=l.getProfileLink(p,q,this.getAttribute('href',null));}else r=q;}this.dom.innerHTML=r;}});e.exports=o;},null);
__d("sdk.XFBML.RecommendationsBar",["sdk.Arbiter","DOMEventListener","sdk.Event","sdk.XFBML.IframeWidget","resolveURI","sdk.Runtime"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m=j.extend({getUrlBits:function(){return {name:'recommendations_bar',params:this._attr};},setupAndValidate:function(){function n(w,x){var y=0,z=null;function aa(){x();z=null;y=ES5('Date','now',false);}return function(){if(!z){var ba=ES5('Date','now',false);if(ba-y<w){z=setTimeout(aa,w-(ba-y));}else aa();}return true;};}function o(w){if(w.match(/^\d+(?:\.\d+)?%$/)){var x=Math.min(Math.max(parseInt(w,10),0),100);w=x/100;}else if(w!='manual'&&w!='onvisible')w='onvisible';return w;}function p(w){return Math.max(parseInt(w,10)||30,10);}function q(w){if(w=='left'||w=='right')return w;return l.getRtl()?'left':'right';}this._attr={channel:this.getChannelUrl(),api_key:l.getClientID(),font:this.getAttribute('font'),colorscheme:this.getAttribute('colorscheme'),href:k(this.getAttribute('href')),side:q(this.getAttribute('side')),site:this.getAttribute('site'),action:this.getAttribute('action'),ref:this.getAttribute('ref'),max_age:this.getAttribute('max_age'),trigger:o(this.getAttribute('trigger','')),read_time:p(this.getAttribute('read_time')),num_recommendations:parseInt(this.getAttribute('num_recommendations'),10)||2};this._showLoader=false;this.subscribe('iframe.onload',ES5(function(){var w=this.dom.children[0];w.className='fbpluginrecommendationsbar'+this._attr.side;},'bind',true,this));var r=ES5(function(){h.remove(window,'scroll',r);h.remove(document.documentElement,'click',r);h.remove(document.documentElement,'mousemove',r);setTimeout(ES5(this.arbiterInform,'bind',true,this,'platform/plugins/recommendations_bar/action',null,g.BEHAVIOR_STATE),this._attr.read_time*1000);return true;},'bind',true,this);h.add(window,'scroll',r);h.add(document.documentElement,'click',r);h.add(document.documentElement,'mousemove',r);if(this._attr.trigger=="manual"){var s=ES5(function(w){if(w==this._attr.href){i.unsubscribe('xfbml.recommendationsbar.read',s);this.arbiterInform('platform/plugins/recommendations_bar/trigger',null,g.BEHAVIOR_STATE);}return true;},'bind',true,this);i.subscribe('xfbml.recommendationsbar.read',s);}else{var t=n(500,ES5(function(){if(this.calculateVisibility()){h.remove(window,'scroll',t);h.remove(window,'resize',t);this.arbiterInform('platform/plugins/recommendations_bar/trigger',null,g.BEHAVIOR_STATE);}return true;},'bind',true,this));h.add(window,'scroll',t);h.add(window,'resize',t);t();}this.visible=false;var u=n(500,ES5(function(){if(!this.visible&&this.calculateVisibility()){this.visible=true;this.arbiterInform('platform/plugins/recommendations_bar/visible');}else if(this.visible&&!this.calculateVisibility()){this.visible=false;this.arbiterInform('platform/plugins/recommendations_bar/invisible');}return true;},'bind',true,this));h.add(window,'scroll',u);h.add(window,'resize',u);u();this.focused=true;var v=ES5(function(){this.focused=!this.focused;return true;},'bind',true,this);h.add(window,'blur',v);h.add(window,'focus',v);this.resize_running=false;this.animate=false;this.subscribe('xd.signal_animation',ES5(function(){this.animate=true;},'bind',true,this));return true;},getSize:function(){return {height:25,width:(this._attr.action=='recommend'?140:96)};},calculateVisibility:function(){var n=document.documentElement.clientHeight;if(!this.focused&&window.console&&window.console.firebug)return this.visible;switch(this._attr.trigger){case "manual":return false;case "onvisible":var o=this.dom.getBoundingClientRect().top;return o<=n;default:var p=window.pageYOffset||document.body.scrollTop,q=document.documentElement.scrollHeight;return (p+n)/q>=this._attr.trigger;}}});e.exports=m;},null);
__d("sdk.XFBML.Registration",["sdk.Auth","sdk.Helper","sdk.XFBML.IframeWidget","sdk.Runtime","UrlMap"],function(a,b,c,d,e,f,g,h,i,j,k){var l=i.extend({_visibleAfter:'immediate',_baseHeight:167,_fieldHeight:28,_skinnyWidth:520,_skinnyBaseHeight:173,_skinnyFieldHeight:52,setupAndValidate:function(){this._attr={action:this.getAttribute('action'),border_color:this.getAttribute('border-color'),channel_url:this.getChannelUrl(),client_id:j.getClientID(),fb_only:this._getBoolAttribute('fb-only',false),fb_register:this._getBoolAttribute('fb-register',false),fields:this.getAttribute('fields'),height:this._getPxAttribute('height'),redirect_uri:this.getAttribute('redirect-uri',window.location.href),no_footer:this._getBoolAttribute('no-footer'),no_header:this._getBoolAttribute('no-header'),onvalidate:this.getAttribute('onvalidate'),width:this._getPxAttribute('width',600),target:this.getAttribute('target')};if(this._attr.onvalidate)this.subscribe('xd.validate',ES5(function(m){var n=ES5('JSON','parse',false,m.value),o=ES5(function(q){this.arbiterInform('Registration.Validation',{errors:q,id:m.id});},'bind',true,this),p=h.executeFunctionByName(this._attr.onvalidate,n,o);if(p)o(p);},'bind',true,this));this.subscribe('xd.authLogin',ES5(this._onAuthLogin,'bind',true,this));this.subscribe('xd.authLogout',ES5(this._onAuthLogout,'bind',true,this));return true;},getSize:function(){return {width:this._attr.width,height:this._getHeight()};},_getHeight:function(){if(this._attr.height)return this._attr.height;var m;if(!this._attr.fields){m=['name'];}else try{m=ES5('JSON','parse',false,this._attr.fields);}catch(n){m=this._attr.fields.split(/,/);}if(this._attr.width<this._skinnyWidth){return this._skinnyBaseHeight+m.length*this._skinnyFieldHeight;}else return this._baseHeight+m.length*this._fieldHeight;},getUrlBits:function(){return {name:'registration',params:this._attr};},getDefaultWebDomain:function(){return k.resolve('www',true);},_onAuthLogin:function(){if(!g.getAuthResponse())g.getLoginStatus();h.fireEvent('auth.login',this);},_onAuthLogout:function(){if(!g.getAuthResponse())g.getLoginStatus();h.fireEvent('auth.logout',this);}});e.exports=l;},null);
__d("sdk.XFBML.SocialContext",["sdk.Event","sdk.XFBML.IframeWidget"],function(a,b,c,d,e,f,g,h){var i=h.extend({setupAndValidate:function(){var j=this.getAttribute('size','small');this._attr={channel:this.getChannelUrl(),width:this._getPxAttribute('width',400),height:this._getPxAttribute('height',100),ref:this.getAttribute('ref'),size:this.getAttribute('size'),keywords:this.getAttribute('keywords'),urls:this.getAttribute('urls'),object_id:this.getAttribute('object_id')};this.subscribe('xd.social_context_stats',ES5(this._bubbleSocialContextStats,'bind',true,this));return true;},_bubbleSocialContextStats:function(j){var k={pluginID:this.getAttribute('plugin-id'),socialContextPageIDs:ES5('JSON','parse',false,j.social_context_page_ids)};g.fire('xfbml.social_context_stats',k);},getSize:function(){return {width:this._attr.width,height:this._attr.height};},getUrlBits:function(){return {name:'social_context',params:this._attr};}});e.exports=i;},null);
__d("legacy:fb.xfbml",["Assert","sdk.domReady","sdk.Event","FB","IframePlugin","PluginTags","wrapFunction","XFBML","sdk.XFBML.Comments","sdk.XFBML.CommentsCount","sdk.XFBML.ConnectBar","sdk.XFBML.LoginButton","sdk.XFBML.Name","sdk.XFBML.RecommendationsBar","sdk.XFBML.Registration","sdk.XFBML.SocialContext"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o={comments:b('sdk.XFBML.Comments'),comments_count:b('sdk.XFBML.CommentsCount'),connect_bar:b('sdk.XFBML.ConnectBar'),login_button:b('sdk.XFBML.LoginButton'),name:b('sdk.XFBML.Name'),recommendations_bar:b('sdk.XFBML.RecommendationsBar'),registration:b('sdk.XFBML.Registration'),social_context:b('sdk.XFBML.SocialContext')};ES5(ES5('Object','keys',false,l),'forEach',true,function(q){n.registerTag({xmlns:'fb',localName:q.replace(/_/g,'-'),ctor:k.withParams(l[q])});});ES5(ES5('Object','keys',false,o),'forEach',true,function(q){n.registerTag({xmlns:'fb',localName:q.replace(/_/g,'-'),ctor:o[q]});});j.provide('XFBML',{parse:function(q){g.maybeXfbml(q,'Invalid argument');if(q&&q.nodeType===9)q=q.body;return n.parse.apply(null,arguments);}});n.subscribe('parse',ES5(i.fire,'bind',true,i,'xfbml.parse'));n.subscribe('render',ES5(i.fire,'bind',true,i,'xfbml.render'));i.subscribe('init:post',function(q){if(q.xfbml)setTimeout(m(ES5(h,'bind',true,null,n.parse),'entry','init:post:xfbml.parse'),0);});g.define('Xfbml',function(q){return (q.nodeType===1||q.nodeType===9)&&typeof q.nodeName==='string';});try{if(document.namespaces&&!document.namespaces.item.fb)document.namespaces.add('fb');}catch(p){}},3);
__d("legacy:fb.xfbml-legacy",["FB","sdk.Event"],function(a,b,c,d,e,f,g,h){g.provide('XFBML.RecommendationsBar',{markRead:function(i){h.fire('xfbml.recommendationsbar.read',i||window.location.href);}});},3);

}).call({}, window.inDapIF ? parent.window : window);
} catch (e) {new Image().src="http:\/\/www.facebook.com\/" + 'common/scribe_endpoint.php?c=jssdk_error&m='+encodeURIComponent('{"error":"LOAD", "extra": {"name":"'+e.name+'","line":"'+(e.lineNumber||e.line)+'","script":"'+(e.fileName||e.sourceURL||e.script)+'","stack":"'+(e.stackTrace||e.stack)+'","revision":"1267954","message":"'+e.message+'"}}');}

/*! jQuery UI - v1.11.1+CommonJS - 2014-09-17
* http://jqueryui.com
* Includes: widget.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory );

	} else if (typeof exports === "object") {
		// Node/CommonJS:
		factory(require("jquery"));

	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {
/*!
 * jQuery UI Widget 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */


var widget_uuid = 0,
	widget_slice = Array.prototype.slice;

$.cleanData = (function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; (elem = elems[i]) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// http://bugs.jquery.com/ticket/8235
			} catch( e ) {}
		}
		orig( elems );
	};
})( $.cleanData );

$.widget = function( name, base, prototype ) {
	var fullName, existingConstructor, constructor, basePrototype,
		// proxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		proxiedPrototype = {},
		namespace = name.split( "." )[ 0 ];

	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};
	// extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,
		// copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),
		// track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	});

	basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = (function() {
			var _super = function() {
					return base.prototype[ prop ].apply( this, arguments );
				},
				_superApply = function( args ) {
					return base.prototype[ prop ].apply( this, args );
				};
			return function() {
				var __super = this._super,
					__superApply = this._superApply,
					returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		})();
	});
	constructor.prototype = $.widget.extend( basePrototype, {
		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	});

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
		});
		// remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widget_slice.call( arguments, 1 ),
		inputIndex = 0,
		inputLength = input.length,
		key,
		value;
	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :
						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );
				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = widget_slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.widget.extend.apply( null, [ options ].concat(args) ) :
			options;

		if ( isMethodCall ) {
			this.each(function() {
				var methodValue,
					instance = $.data( this, fullName );
				if ( options === "instance" ) {
					returnValue = instance;
					return false;
				}
				if ( !instance ) {
					return $.error( "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'" );
				}
				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
				}
				methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue && methodValue.jquery ?
						returnValue.pushStack( methodValue.get() ) :
						methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widget_uuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;
		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			});
			this.document = $( element.style ?
				// element within the document
				element.ownerDocument :
				// element is window or document
				element.document || element );
			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
		}

		this._create();
		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: function() {
		this._destroy();
		// we can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.unbind( this.eventNamespace )
			.removeData( this.widgetFullName )
			// support: jquery <1.6.3
			// http://bugs.jquery.com/ticket/9413
			.removeData( $.camelCase( this.widgetFullName ) );
		this.widget()
			.unbind( this.eventNamespace )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetFullName + "-disabled " +
				"ui-state-disabled" );

		// clean up events and states
		this.bindings.unbind( this.eventNamespace );
		this.hoverable.removeClass( "ui-state-hover" );
		this.focusable.removeClass( "ui-state-focus" );
	},
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key,
			parts,
			curOption,
			i;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {
			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				.toggleClass( this.widgetFullName + "-disabled", !!value );

			// If the widget is becoming disabled, then nothing is interactive
			if ( value ) {
				this.hoverable.removeClass( "ui-state-hover" );
				this.focusable.removeClass( "ui-state-focus" );
			}
		}

		return this;
	},

	enable: function() {
		return this._setOptions({ disabled: false });
	},
	disable: function() {
		return this._setOptions({ disabled: true });
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement,
			instance = this;

		// no suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// no element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {
				// allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ ),
				eventName = match[1] + instance.eventNamespace,
				selector = match[2];
			if ( selector ) {
				delegateElement.delegate( selector, eventName, handlerProxy );
			} else {
				element.bind( eventName, handlerProxy );
			}
		});
	},

	_off: function( element, eventName ) {
		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) + this.eventNamespace;
		element.unbind( eventName ).undelegate( eventName );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-focus" );
			},
			focusout: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-focus" );
			}
		});
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}
		var hasOptions,
			effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}
		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;
		if ( options.delay ) {
			element.delay( options.delay );
		}
		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue(function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			});
		}
	};
});

var widget = $.widget;



}));


/*
 * jQuery Iframe Transport Plugin 1.8.3
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global define, require, window, document */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS:
        factory(require('jquery'));
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Helper variable to create unique names for the transport iframes:
    var counter = 0;

    // The iframe transport accepts four additional options:
    // options.fileInput: a jQuery collection of file input fields
    // options.paramName: the parameter name for the file form data,
    //  overrides the name property of the file input field(s),
    //  can be a string or an array of strings.
    // options.formData: an array of objects with name and value properties,
    //  equivalent to the return data of .serializeArray(), e.g.:
    //  [{name: 'a', value: 1}, {name: 'b', value: 2}]
    // options.initialIframeSrc: the URL of the initial iframe src,
    //  by default set to "javascript:false;"
    $.ajaxTransport('iframe', function (options) {
        if (options.async) {
            // javascript:false as initial iframe src
            // prevents warning popups on HTTPS in IE6:
            /*jshint scripturl: true */
            var initialIframeSrc = options.initialIframeSrc || 'javascript:false;',
            /*jshint scripturl: false */
                form,
                iframe,
                addParamChar;
            return {
                send: function (_, completeCallback) {
                    form = $('<form style="display:none;"></form>');
                    form.attr('accept-charset', options.formAcceptCharset);
                    addParamChar = /\?/.test(options.url) ? '&' : '?';
                    // XDomainRequest only supports GET and POST:
                    if (options.type === 'DELETE') {
                        options.url = options.url + addParamChar + '_method=DELETE';
                        options.type = 'POST';
                    } else if (options.type === 'PUT') {
                        options.url = options.url + addParamChar + '_method=PUT';
                        options.type = 'POST';
                    } else if (options.type === 'PATCH') {
                        options.url = options.url + addParamChar + '_method=PATCH';
                        options.type = 'POST';
                    }
                    // IE versions below IE8 cannot set the name property of
                    // elements that have already been added to the DOM,
                    // so we set the name along with the iframe HTML markup:
                    counter += 1;
                    iframe = $(
                        '<iframe src="' + initialIframeSrc +
                            '" name="iframe-transport-' + counter + '"></iframe>'
                    ).bind('load', function () {
                        var fileInputClones,
                            paramNames = $.isArray(options.paramName) ?
                                    options.paramName : [options.paramName];
                        iframe
                            .unbind('load')
                            .bind('load', function () {
                                var response;
                                // Wrap in a try/catch block to catch exceptions thrown
                                // when trying to access cross-domain iframe contents:
                                try {
                                    response = iframe.contents();
                                    // Google Chrome and Firefox do not throw an
                                    // exception when calling iframe.contents() on
                                    // cross-domain requests, so we unify the response:
                                    if (!response.length || !response[0].firstChild) {
                                        throw new Error();
                                    }
                                } catch (e) {
                                    response = undefined;
                                }
                                // The complete callback returns the
                                // iframe content document as response object:
                                completeCallback(
                                    200,
                                    'success',
                                    {'iframe': response}
                                );
                                // Fix for IE endless progress bar activity bug
                                // (happens on form submits to iframe targets):
                                $('<iframe src="' + initialIframeSrc + '"></iframe>')
                                    .appendTo(form);
                                window.setTimeout(function () {
                                    // Removing the form in a setTimeout call
                                    // allows Chrome's developer tools to display
                                    // the response result
                                    form.remove();
                                }, 0);
                            });
                        form
                            .prop('target', iframe.prop('name'))
                            .prop('action', options.url)
                            .prop('method', options.type);
                        if (options.formData) {
                            $.each(options.formData, function (index, field) {
                                $('<input type="hidden"/>')
                                    .prop('name', field.name)
                                    .val(field.value)
                                    .appendTo(form);
                            });
                        }
                        if (options.fileInput && options.fileInput.length &&
                                options.type === 'POST') {
                            fileInputClones = options.fileInput.clone();
                            // Insert a clone for each file input field:
                            options.fileInput.after(function (index) {
                                return fileInputClones[index];
                            });
                            if (options.paramName) {
                                options.fileInput.each(function (index) {
                                    $(this).prop(
                                        'name',
                                        paramNames[index] || options.paramName
                                    );
                                });
                            }
                            // Appending the file input fields to the hidden form
                            // removes them from their original location:
                            form
                                .append(options.fileInput)
                                .prop('enctype', 'multipart/form-data')
                                // enctype must be set as encoding for IE:
                                .prop('encoding', 'multipart/form-data');
                            // Remove the HTML5 form attribute from the input(s):
                            options.fileInput.removeAttr('form');
                        }
                        form.submit();
                        // Insert the file input fields at their original location
                        // by replacing the clones with the originals:
                        if (fileInputClones && fileInputClones.length) {
                            options.fileInput.each(function (index, input) {
                                var clone = $(fileInputClones[index]);
                                // Restore the original name and form properties:
                                $(input)
                                    .prop('name', clone.prop('name'))
                                    .attr('form', clone.attr('form'));
                                clone.replaceWith(input);
                            });
                        }
                    });
                    form.append(iframe).appendTo(document.body);
                },
                abort: function () {
                    if (iframe) {
                        // javascript:false as iframe src aborts the request
                        // and prevents warning popups on HTTPS in IE6.
                        // concat is used to avoid the "Script URL" JSLint error:
                        iframe
                            .unbind('load')
                            .prop('src', initialIframeSrc);
                    }
                    if (form) {
                        form.remove();
                    }
                }
            };
        }
    });

    // The iframe transport returns the iframe content document as response.
    // The following adds converters from iframe to text, json, html, xml
    // and script.
    // Please note that the Content-Type for JSON responses has to be text/plain
    // or text/html, if the browser doesn't include application/json in the
    // Accept header, else IE will show a download dialog.
    // The Content-Type for XML responses on the other hand has to be always
    // application/xml or text/xml, so IE properly parses the XML response.
    // See also
    // https://github.com/blueimp/jQuery-File-Upload/wiki/Setup#content-type-negotiation
    $.ajaxSetup({
        converters: {
            'iframe text': function (iframe) {
                return iframe && $(iframe[0].body).text();
            },
            'iframe json': function (iframe) {
                return iframe && $.parseJSON($(iframe[0].body).text());
            },
            'iframe html': function (iframe) {
                return iframe && $(iframe[0].body).html();
            },
            'iframe xml': function (iframe) {
                var xmlDoc = iframe && iframe[0];
                return xmlDoc && $.isXMLDoc(xmlDoc) ? xmlDoc :
                        $.parseXML((xmlDoc.XMLDocument && xmlDoc.XMLDocument.xml) ||
                            $(xmlDoc.body).html());
            },
            'iframe script': function (iframe) {
                return iframe && $.globalEval($(iframe[0].body).text());
            }
        }
    });

}));


/*
 * jQuery File Upload Plugin 5.42.3
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* jshint nomen:false */
/* global define, require, window, document, location, Blob, FormData */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'jquery.ui.widget'
        ], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS:
        factory(
            require('jquery'),
            require('./vendor/jquery.ui.widget')
        );
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Detect file input support, based on
    // http://viljamis.com/blog/2012/file-upload-support-on-mobile/
    $.support.fileInput = !(new RegExp(
        // Handle devices which give false positives for the feature detection:
        '(Android (1\\.[0156]|2\\.[01]))' +
            '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' +
            '|(w(eb)?OSBrowser)|(webOS)' +
            '|(Kindle/(1\\.0|2\\.[05]|3\\.0))'
    ).test(window.navigator.userAgent) ||
        // Feature detection for all other devices:
        $('<input type="file">').prop('disabled'));

    // The FileReader API is not actually used, but works as feature detection,
    // as some Safari versions (5?) support XHR file uploads via the FormData API,
    // but not non-multipart XHR file uploads.
    // window.XMLHttpRequestUpload is not available on IE10, so we check for
    // window.ProgressEvent instead to detect XHR2 file upload capability:
    $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
    $.support.xhrFormDataFileUpload = !!window.FormData;

    // Detect support for Blob slicing (required for chunked uploads):
    $.support.blobSlice = window.Blob && (Blob.prototype.slice ||
        Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

    // Helper function to create drag handlers for dragover/dragenter/dragleave:
    function getDragHandler(type) {
        var isDragOver = type === 'dragover';
        return function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var dataTransfer = e.dataTransfer;
            if (dataTransfer && $.inArray('Files', dataTransfer.types) !== -1 &&
                    this._trigger(
                        type,
                        $.Event(type, {delegatedEvent: e})
                    ) !== false) {
                e.preventDefault();
                if (isDragOver) {
                    dataTransfer.dropEffect = 'copy';
                }
            }
        };
    }

    // The fileupload widget listens for change events on file input fields defined
    // via fileInput setting and paste or drop events of the given dropZone.
    // In addition to the default jQuery Widget methods, the fileupload widget
    // exposes the "add" and "send" methods, to add or directly send files using
    // the fileupload API.
    // By default, files added via file input selection, paste, drag & drop or
    // "add" method are uploaded immediately, but it is possible to override
    // the "add" callback option to queue file uploads.
    $.widget('blueimp.fileupload', {

        options: {
            // The drop target element(s), by the default the complete document.
            // Set to null to disable drag & drop support:
            dropZone: $(document),
            // The paste target element(s), by the default undefined.
            // Set to a DOM node or jQuery object to enable file pasting:
            pasteZone: undefined,
            // The file input field(s), that are listened to for change events.
            // If undefined, it is set to the file input fields inside
            // of the widget element on plugin initialization.
            // Set to null to disable the change listener.
            fileInput: undefined,
            // By default, the file input field is replaced with a clone after
            // each input field change event. This is required for iframe transport
            // queues and allows change events to be fired for the same file
            // selection, but can be disabled by setting the following option to false:
            replaceFileInput: true,
            // The parameter name for the file form data (the request argument name).
            // If undefined or empty, the name property of the file input field is
            // used, or "files[]" if the file input name property is also empty,
            // can be a string or an array of strings:
            paramName: undefined,
            // By default, each file of a selection is uploaded using an individual
            // request for XHR type uploads. Set to false to upload file
            // selections in one request each:
            singleFileUploads: true,
            // To limit the number of files uploaded with one XHR request,
            // set the following option to an integer greater than 0:
            limitMultiFileUploads: undefined,
            // The following option limits the number of files uploaded with one
            // XHR request to keep the request size under or equal to the defined
            // limit in bytes:
            limitMultiFileUploadSize: undefined,
            // Multipart file uploads add a number of bytes to each uploaded file,
            // therefore the following option adds an overhead for each file used
            // in the limitMultiFileUploadSize configuration:
            limitMultiFileUploadSizeOverhead: 512,
            // Set the following option to true to issue all file upload requests
            // in a sequential order:
            sequentialUploads: false,
            // To limit the number of concurrent uploads,
            // set the following option to an integer greater than 0:
            limitConcurrentUploads: undefined,
            // Set the following option to true to force iframe transport uploads:
            forceIframeTransport: false,
            // Set the following option to the location of a redirect url on the
            // origin server, for cross-domain iframe transport uploads:
            redirect: undefined,
            // The parameter name for the redirect url, sent as part of the form
            // data and set to 'redirect' if this option is empty:
            redirectParamName: undefined,
            // Set the following option to the location of a postMessage window,
            // to enable postMessage transport uploads:
            postMessage: undefined,
            // By default, XHR file uploads are sent as multipart/form-data.
            // The iframe transport is always using multipart/form-data.
            // Set to false to enable non-multipart XHR uploads:
            multipart: true,
            // To upload large files in smaller chunks, set the following option
            // to a preferred maximum chunk size. If set to 0, null or undefined,
            // or the browser does not support the required Blob API, files will
            // be uploaded as a whole.
            maxChunkSize: undefined,
            // When a non-multipart upload or a chunked multipart upload has been
            // aborted, this option can be used to resume the upload by setting
            // it to the size of the already uploaded bytes. This option is most
            // useful when modifying the options object inside of the "add" or
            // "send" callbacks, as the options are cloned for each file upload.
            uploadedBytes: undefined,
            // By default, failed (abort or error) file uploads are removed from the
            // global progress calculation. Set the following option to false to
            // prevent recalculating the global progress data:
            recalculateProgress: true,
            // Interval in milliseconds to calculate and trigger progress events:
            progressInterval: 100,
            // Interval in milliseconds to calculate progress bitrate:
            bitrateInterval: 500,
            // By default, uploads are started automatically when adding files:
            autoUpload: true,

            // Error and info messages:
            messages: {
                uploadedBytes: 'Uploaded bytes exceed file size'
            },

            // Translation function, gets the message key to be translated
            // and an object with context specific data as arguments:
            i18n: function (message, context) {
                message = this.messages[message] || message.toString();
                if (context) {
                    $.each(context, function (key, value) {
                        message = message.replace('{' + key + '}', value);
                    });
                }
                return message;
            },

            // Additional form data to be sent along with the file uploads can be set
            // using this option, which accepts an array of objects with name and
            // value properties, a function returning such an array, a FormData
            // object (for XHR file uploads), or a simple object.
            // The form of the first fileInput is given as parameter to the function:
            formData: function (form) {
                return form.serializeArray();
            },

            // The add callback is invoked as soon as files are added to the fileupload
            // widget (via file input selection, drag & drop, paste or add API call).
            // If the singleFileUploads option is enabled, this callback will be
            // called once for each file in the selection for XHR file uploads, else
            // once for each file selection.
            //
            // The upload starts when the submit method is invoked on the data parameter.
            // The data object contains a files property holding the added files
            // and allows you to override plugin options as well as define ajax settings.
            //
            // Listeners for this callback can also be bound the following way:
            // .bind('fileuploadadd', func);
            //
            // data.submit() returns a Promise object and allows to attach additional
            // handlers using jQuery's Deferred callbacks:
            // data.submit().done(func).fail(func).always(func);
            add: function (e, data) {
                if (e.isDefaultPrevented()) {
                    return false;
                }
                if (data.autoUpload || (data.autoUpload !== false &&
                        $(this).fileupload('option', 'autoUpload'))) {
                    data.process().done(function () {
                        data.submit();
                    });
                }
            },

            // Other callbacks:

            // Callback for the submit event of each file upload:
            // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);

            // Callback for the start of each file upload request:
            // send: function (e, data) {}, // .bind('fileuploadsend', func);

            // Callback for successful uploads:
            // done: function (e, data) {}, // .bind('fileuploaddone', func);

            // Callback for failed (abort or error) uploads:
            // fail: function (e, data) {}, // .bind('fileuploadfail', func);

            // Callback for completed (success, abort or error) requests:
            // always: function (e, data) {}, // .bind('fileuploadalways', func);

            // Callback for upload progress events:
            // progress: function (e, data) {}, // .bind('fileuploadprogress', func);

            // Callback for global upload progress events:
            // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);

            // Callback for uploads start, equivalent to the global ajaxStart event:
            // start: function (e) {}, // .bind('fileuploadstart', func);

            // Callback for uploads stop, equivalent to the global ajaxStop event:
            // stop: function (e) {}, // .bind('fileuploadstop', func);

            // Callback for change events of the fileInput(s):
            // change: function (e, data) {}, // .bind('fileuploadchange', func);

            // Callback for paste events to the pasteZone(s):
            // paste: function (e, data) {}, // .bind('fileuploadpaste', func);

            // Callback for drop events of the dropZone(s):
            // drop: function (e, data) {}, // .bind('fileuploaddrop', func);

            // Callback for dragover events of the dropZone(s):
            // dragover: function (e) {}, // .bind('fileuploaddragover', func);

            // Callback for the start of each chunk upload request:
            // chunksend: function (e, data) {}, // .bind('fileuploadchunksend', func);

            // Callback for successful chunk uploads:
            // chunkdone: function (e, data) {}, // .bind('fileuploadchunkdone', func);

            // Callback for failed (abort or error) chunk uploads:
            // chunkfail: function (e, data) {}, // .bind('fileuploadchunkfail', func);

            // Callback for completed (success, abort or error) chunk upload requests:
            // chunkalways: function (e, data) {}, // .bind('fileuploadchunkalways', func);

            // The plugin options are used as settings object for the ajax calls.
            // The following are jQuery ajax settings required for the file uploads:
            processData: false,
            contentType: false,
            cache: false
        },

        // A list of options that require reinitializing event listeners and/or
        // special initialization code:
        _specialOptions: [
            'fileInput',
            'dropZone',
            'pasteZone',
            'multipart',
            'forceIframeTransport'
        ],

        _blobSlice: $.support.blobSlice && function () {
            var slice = this.slice || this.webkitSlice || this.mozSlice;
            return slice.apply(this, arguments);
        },

        _BitrateTimer: function () {
            this.timestamp = ((Date.now) ? Date.now() : (new Date()).getTime());
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function (now, loaded, interval) {
                var timeDiff = now - this.timestamp;
                if (!this.bitrate || !interval || timeDiff > interval) {
                    this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                    this.loaded = loaded;
                    this.timestamp = now;
                }
                return this.bitrate;
            };
        },

        _isXHRUpload: function (options) {
            return !options.forceIframeTransport &&
                ((!options.multipart && $.support.xhrFileUpload) ||
                $.support.xhrFormDataFileUpload);
        },

        _getFormData: function (options) {
            var formData;
            if ($.type(options.formData) === 'function') {
                return options.formData(options.form);
            }
            if ($.isArray(options.formData)) {
                return options.formData;
            }
            if ($.type(options.formData) === 'object') {
                formData = [];
                $.each(options.formData, function (name, value) {
                    formData.push({name: name, value: value});
                });
                return formData;
            }
            return [];
        },

        _getTotal: function (files) {
            var total = 0;
            $.each(files, function (index, file) {
                total += file.size || 1;
            });
            return total;
        },

        _initProgressObject: function (obj) {
            var progress = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            if (obj._progress) {
                $.extend(obj._progress, progress);
            } else {
                obj._progress = progress;
            }
        },

        _initResponseObject: function (obj) {
            var prop;
            if (obj._response) {
                for (prop in obj._response) {
                    if (obj._response.hasOwnProperty(prop)) {
                        delete obj._response[prop];
                    }
                }
            } else {
                obj._response = {};
            }
        },

        _onProgress: function (e, data) {
            if (e.lengthComputable) {
                var now = ((Date.now) ? Date.now() : (new Date()).getTime()),
                    loaded;
                if (data._time && data.progressInterval &&
                        (now - data._time < data.progressInterval) &&
                        e.loaded !== e.total) {
                    return;
                }
                data._time = now;
                loaded = Math.floor(
                    e.loaded / e.total * (data.chunkSize || data._progress.total)
                ) + (data.uploadedBytes || 0);
                // Add the difference from the previously loaded state
                // to the global loaded counter:
                this._progress.loaded += (loaded - data._progress.loaded);
                this._progress.bitrate = this._bitrateTimer.getBitrate(
                    now,
                    this._progress.loaded,
                    data.bitrateInterval
                );
                data._progress.loaded = data.loaded = loaded;
                data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(
                    now,
                    loaded,
                    data.bitrateInterval
                );
                // Trigger a custom progress event with a total data property set
                // to the file size(s) of the current upload and a loaded data
                // property calculated accordingly:
                this._trigger(
                    'progress',
                    $.Event('progress', {delegatedEvent: e}),
                    data
                );
                // Trigger a global progress event for all current file uploads,
                // including ajax calls queued for sequential file uploads:
                this._trigger(
                    'progressall',
                    $.Event('progressall', {delegatedEvent: e}),
                    this._progress
                );
            }
        },

        _initProgressListener: function (options) {
            var that = this,
                xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
            // Accesss to the native XHR object is required to add event listeners
            // for the upload progress event:
            if (xhr.upload) {
                $(xhr.upload).bind('progress', function (e) {
                    var oe = e.originalEvent;
                    // Make sure the progress event properties get copied over:
                    e.lengthComputable = oe.lengthComputable;
                    e.loaded = oe.loaded;
                    e.total = oe.total;
                    that._onProgress(e, options);
                });
                options.xhr = function () {
                    return xhr;
                };
            }
        },

        _isInstanceOf: function (type, obj) {
            // Cross-frame instanceof check
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        },

        _initXHRData: function (options) {
            var that = this,
                formData,
                file = options.files[0],
                // Ignore non-multipart setting if not supported:
                multipart = options.multipart || !$.support.xhrFileUpload,
                paramName = $.type(options.paramName) === 'array' ?
                    options.paramName[0] : options.paramName;
            options.headers = $.extend({}, options.headers);
            if (options.contentRange) {
                options.headers['Content-Range'] = options.contentRange;
            }
            if (!multipart || options.blob || !this._isInstanceOf('File', file)) {
                options.headers['Content-Disposition'] = 'attachment; filename="' +
                    encodeURI(file.name) + '"';
            }
            if (!multipart) {
                options.contentType = file.type || 'application/octet-stream';
                options.data = options.blob || file;
            } else if ($.support.xhrFormDataFileUpload) {
                if (options.postMessage) {
                    // window.postMessage does not allow sending FormData
                    // objects, so we just add the File/Blob objects to
                    // the formData array and let the postMessage window
                    // create the FormData object out of this array:
                    formData = this._getFormData(options);
                    if (options.blob) {
                        formData.push({
                            name: paramName,
                            value: options.blob
                        });
                    } else {
                        $.each(options.files, function (index, file) {
                            formData.push({
                                name: ($.type(options.paramName) === 'array' &&
                                    options.paramName[index]) || paramName,
                                value: file
                            });
                        });
                    }
                } else {
                    if (that._isInstanceOf('FormData', options.formData)) {
                        formData = options.formData;
                    } else {
                        formData = new FormData();
                        $.each(this._getFormData(options), function (index, field) {
                            formData.append(field.name, field.value);
                        });
                    }
                    if (options.blob) {
                        formData.append(paramName, options.blob, file.name);
                    } else {
                        $.each(options.files, function (index, file) {
                            // This check allows the tests to run with
                            // dummy objects:
                            if (that._isInstanceOf('File', file) ||
                                    that._isInstanceOf('Blob', file)) {
                                formData.append(
                                    ($.type(options.paramName) === 'array' &&
                                        options.paramName[index]) || paramName,
                                    file,
                                    file.uploadName || file.name
                                );
                            }
                        });
                    }
                }
                options.data = formData;
            }
            // Blob reference is not needed anymore, free memory:
            options.blob = null;
        },

        _initIframeSettings: function (options) {
            var targetHost = $('<a></a>').prop('href', options.url).prop('host');
            // Setting the dataType to iframe enables the iframe transport:
            options.dataType = 'iframe ' + (options.dataType || '');
            // The iframe transport accepts a serialized array as form data:
            options.formData = this._getFormData(options);
            // Add redirect url to form data on cross-domain uploads:
            if (options.redirect && targetHost && targetHost !== location.host) {
                options.formData.push({
                    name: options.redirectParamName || 'redirect',
                    value: options.redirect
                });
            }
        },

        _initDataSettings: function (options) {
            if (this._isXHRUpload(options)) {
                if (!this._chunkedUpload(options, true)) {
                    if (!options.data) {
                        this._initXHRData(options);
                    }
                    this._initProgressListener(options);
                }
                if (options.postMessage) {
                    // Setting the dataType to postmessage enables the
                    // postMessage transport:
                    options.dataType = 'postmessage ' + (options.dataType || '');
                }
            } else {
                this._initIframeSettings(options);
            }
        },

        _getParamName: function (options) {
            var fileInput = $(options.fileInput),
                paramName = options.paramName;
            if (!paramName) {
                paramName = [];
                fileInput.each(function () {
                    var input = $(this),
                        name = input.prop('name') || 'files[]',
                        i = (input.prop('files') || [1]).length;
                    while (i) {
                        paramName.push(name);
                        i -= 1;
                    }
                });
                if (!paramName.length) {
                    paramName = [fileInput.prop('name') || 'files[]'];
                }
            } else if (!$.isArray(paramName)) {
                paramName = [paramName];
            }
            return paramName;
        },

        _initFormSettings: function (options) {
            // Retrieve missing options from the input field and the
            // associated form, if available:
            if (!options.form || !options.form.length) {
                options.form = $(options.fileInput.prop('form'));
                // If the given file input doesn't have an associated form,
                // use the default widget file input's form:
                if (!options.form.length) {
                    options.form = $(this.options.fileInput.prop('form'));
                }
            }
            options.paramName = this._getParamName(options);
            if (!options.url) {
                options.url = options.form.prop('action') || location.href;
            }
            // The HTTP request method must be "POST" or "PUT":
            options.type = (options.type ||
                ($.type(options.form.prop('method')) === 'string' &&
                    options.form.prop('method')) || ''
                ).toUpperCase();
            if (options.type !== 'POST' && options.type !== 'PUT' &&
                    options.type !== 'PATCH') {
                options.type = 'POST';
            }
            if (!options.formAcceptCharset) {
                options.formAcceptCharset = options.form.attr('accept-charset');
            }
        },

        _getAJAXSettings: function (data) {
            var options = $.extend({}, this.options, data);
            this._initFormSettings(options);
            this._initDataSettings(options);
            return options;
        },

        // jQuery 1.6 doesn't provide .state(),
        // while jQuery 1.8+ removed .isRejected() and .isResolved():
        _getDeferredState: function (deferred) {
            if (deferred.state) {
                return deferred.state();
            }
            if (deferred.isResolved()) {
                return 'resolved';
            }
            if (deferred.isRejected()) {
                return 'rejected';
            }
            return 'pending';
        },

        // Maps jqXHR callbacks to the equivalent
        // methods of the given Promise object:
        _enhancePromise: function (promise) {
            promise.success = promise.done;
            promise.error = promise.fail;
            promise.complete = promise.always;
            return promise;
        },

        // Creates and returns a Promise object enhanced with
        // the jqXHR methods abort, success, error and complete:
        _getXHRPromise: function (resolveOrReject, context, args) {
            var dfd = $.Deferred(),
                promise = dfd.promise();
            context = context || this.options.context || promise;
            if (resolveOrReject === true) {
                dfd.resolveWith(context, args);
            } else if (resolveOrReject === false) {
                dfd.rejectWith(context, args);
            }
            promise.abort = dfd.promise;
            return this._enhancePromise(promise);
        },

        // Adds convenience methods to the data callback argument:
        _addConvenienceMethods: function (e, data) {
            var that = this,
                getPromise = function (args) {
                    return $.Deferred().resolveWith(that, args).promise();
                };
            data.process = function (resolveFunc, rejectFunc) {
                if (resolveFunc || rejectFunc) {
                    data._processQueue = this._processQueue =
                        (this._processQueue || getPromise([this])).pipe(
                            function () {
                                if (data.errorThrown) {
                                    return $.Deferred()
                                        .rejectWith(that, [data]).promise();
                                }
                                return getPromise(arguments);
                            }
                        ).pipe(resolveFunc, rejectFunc);
                }
                return this._processQueue || getPromise([this]);
            };
            data.submit = function () {
                if (this.state() !== 'pending') {
                    data.jqXHR = this.jqXHR =
                        (that._trigger(
                            'submit',
                            $.Event('submit', {delegatedEvent: e}),
                            this
                        ) !== false) && that._onSend(e, this);
                }
                return this.jqXHR || that._getXHRPromise();
            };
            data.abort = function () {
                if (this.jqXHR) {
                    return this.jqXHR.abort();
                }
                this.errorThrown = 'abort';
                that._trigger('fail', null, this);
                return that._getXHRPromise(false);
            };
            data.state = function () {
                if (this.jqXHR) {
                    return that._getDeferredState(this.jqXHR);
                }
                if (this._processQueue) {
                    return that._getDeferredState(this._processQueue);
                }
            };
            data.processing = function () {
                return !this.jqXHR && this._processQueue && that
                    ._getDeferredState(this._processQueue) === 'pending';
            };
            data.progress = function () {
                return this._progress;
            };
            data.response = function () {
                return this._response;
            };
        },

        // Parses the Range header from the server response
        // and returns the uploaded bytes:
        _getUploadedBytes: function (jqXHR) {
            var range = jqXHR.getResponseHeader('Range'),
                parts = range && range.split('-'),
                upperBytesPos = parts && parts.length > 1 &&
                    parseInt(parts[1], 10);
            return upperBytesPos && upperBytesPos + 1;
        },

        // Uploads a file in multiple, sequential requests
        // by splitting the file up in multiple blob chunks.
        // If the second parameter is true, only tests if the file
        // should be uploaded in chunks, but does not invoke any
        // upload requests:
        _chunkedUpload: function (options, testOnly) {
            options.uploadedBytes = options.uploadedBytes || 0;
            var that = this,
                file = options.files[0],
                fs = file.size,
                ub = options.uploadedBytes,
                mcs = options.maxChunkSize || fs,
                slice = this._blobSlice,
                dfd = $.Deferred(),
                promise = dfd.promise(),
                jqXHR,
                upload;
            if (!(this._isXHRUpload(options) && slice && (ub || mcs < fs)) ||
                    options.data) {
                return false;
            }
            if (testOnly) {
                return true;
            }
            if (ub >= fs) {
                file.error = options.i18n('uploadedBytes');
                return this._getXHRPromise(
                    false,
                    options.context,
                    [null, 'error', file.error]
                );
            }
            // The chunk upload method:
            upload = function () {
                // Clone the options object for each chunk upload:
                var o = $.extend({}, options),
                    currentLoaded = o._progress.loaded;
                o.blob = slice.call(
                    file,
                    ub,
                    ub + mcs,
                    file.type
                );
                // Store the current chunk size, as the blob itself
                // will be dereferenced after data processing:
                o.chunkSize = o.blob.size;
                // Expose the chunk bytes position range:
                o.contentRange = 'bytes ' + ub + '-' +
                    (ub + o.chunkSize - 1) + '/' + fs;
                // Process the upload data (the blob and potential form data):
                that._initXHRData(o);
                // Add progress listeners for this chunk upload:
                that._initProgressListener(o);
                jqXHR = ((that._trigger('chunksend', null, o) !== false && $.ajax(o)) ||
                        that._getXHRPromise(false, o.context))
                    .done(function (result, textStatus, jqXHR) {
                        ub = that._getUploadedBytes(jqXHR) ||
                            (ub + o.chunkSize);
                        // Create a progress event if no final progress event
                        // with loaded equaling total has been triggered
                        // for this chunk:
                        if (currentLoaded + o.chunkSize - o._progress.loaded) {
                            that._onProgress($.Event('progress', {
                                lengthComputable: true,
                                loaded: ub - o.uploadedBytes,
                                total: ub - o.uploadedBytes
                            }), o);
                        }
                        options.uploadedBytes = o.uploadedBytes = ub;
                        o.result = result;
                        o.textStatus = textStatus;
                        o.jqXHR = jqXHR;
                        that._trigger('chunkdone', null, o);
                        that._trigger('chunkalways', null, o);
                        if (ub < fs) {
                            // File upload not yet complete,
                            // continue with the next chunk:
                            upload();
                        } else {
                            dfd.resolveWith(
                                o.context,
                                [result, textStatus, jqXHR]
                            );
                        }
                    })
                    .fail(function (jqXHR, textStatus, errorThrown) {
                        o.jqXHR = jqXHR;
                        o.textStatus = textStatus;
                        o.errorThrown = errorThrown;
                        that._trigger('chunkfail', null, o);
                        that._trigger('chunkalways', null, o);
                        dfd.rejectWith(
                            o.context,
                            [jqXHR, textStatus, errorThrown]
                        );
                    });
            };
            this._enhancePromise(promise);
            promise.abort = function () {
                return jqXHR.abort();
            };
            upload();
            return promise;
        },

        _beforeSend: function (e, data) {
            if (this._active === 0) {
                // the start callback is triggered when an upload starts
                // and no other uploads are currently running,
                // equivalent to the global ajaxStart event:
                this._trigger('start');
                // Set timer for global bitrate progress calculation:
                this._bitrateTimer = new this._BitrateTimer();
                // Reset the global progress values:
                this._progress.loaded = this._progress.total = 0;
                this._progress.bitrate = 0;
            }
            // Make sure the container objects for the .response() and
            // .progress() methods on the data object are available
            // and reset to their initial state:
            this._initResponseObject(data);
            this._initProgressObject(data);
            data._progress.loaded = data.loaded = data.uploadedBytes || 0;
            data._progress.total = data.total = this._getTotal(data.files) || 1;
            data._progress.bitrate = data.bitrate = 0;
            this._active += 1;
            // Initialize the global progress values:
            this._progress.loaded += data.loaded;
            this._progress.total += data.total;
        },

        _onDone: function (result, textStatus, jqXHR, options) {
            var total = options._progress.total,
                response = options._response;
            if (options._progress.loaded < total) {
                // Create a progress event if no final progress event
                // with loaded equaling total has been triggered:
                this._onProgress($.Event('progress', {
                    lengthComputable: true,
                    loaded: total,
                    total: total
                }), options);
            }
            response.result = options.result = result;
            response.textStatus = options.textStatus = textStatus;
            response.jqXHR = options.jqXHR = jqXHR;
            this._trigger('done', null, options);
        },

        _onFail: function (jqXHR, textStatus, errorThrown, options) {
            var response = options._response;
            if (options.recalculateProgress) {
                // Remove the failed (error or abort) file upload from
                // the global progress calculation:
                this._progress.loaded -= options._progress.loaded;
                this._progress.total -= options._progress.total;
            }
            response.jqXHR = options.jqXHR = jqXHR;
            response.textStatus = options.textStatus = textStatus;
            response.errorThrown = options.errorThrown = errorThrown;
            this._trigger('fail', null, options);
        },

        _onAlways: function (jqXHRorResult, textStatus, jqXHRorError, options) {
            // jqXHRorResult, textStatus and jqXHRorError are added to the
            // options object via done and fail callbacks
            this._trigger('always', null, options);
        },

        _onSend: function (e, data) {
            if (!data.submit) {
                this._addConvenienceMethods(e, data);
            }
            var that = this,
                jqXHR,
                aborted,
                slot,
                pipe,
                options = that._getAJAXSettings(data),
                send = function () {
                    that._sending += 1;
                    // Set timer for bitrate progress calculation:
                    options._bitrateTimer = new that._BitrateTimer();
                    jqXHR = jqXHR || (
                        ((aborted || that._trigger(
                            'send',
                            $.Event('send', {delegatedEvent: e}),
                            options
                        ) === false) &&
                        that._getXHRPromise(false, options.context, aborted)) ||
                        that._chunkedUpload(options) || $.ajax(options)
                    ).done(function (result, textStatus, jqXHR) {
                        that._onDone(result, textStatus, jqXHR, options);
                    }).fail(function (jqXHR, textStatus, errorThrown) {
                        that._onFail(jqXHR, textStatus, errorThrown, options);
                    }).always(function (jqXHRorResult, textStatus, jqXHRorError) {
                        that._onAlways(
                            jqXHRorResult,
                            textStatus,
                            jqXHRorError,
                            options
                        );
                        that._sending -= 1;
                        that._active -= 1;
                        if (options.limitConcurrentUploads &&
                                options.limitConcurrentUploads > that._sending) {
                            // Start the next queued upload,
                            // that has not been aborted:
                            var nextSlot = that._slots.shift();
                            while (nextSlot) {
                                if (that._getDeferredState(nextSlot) === 'pending') {
                                    nextSlot.resolve();
                                    break;
                                }
                                nextSlot = that._slots.shift();
                            }
                        }
                        if (that._active === 0) {
                            // The stop callback is triggered when all uploads have
                            // been completed, equivalent to the global ajaxStop event:
                            that._trigger('stop');
                        }
                    });
                    return jqXHR;
                };
            this._beforeSend(e, options);
            if (this.options.sequentialUploads ||
                    (this.options.limitConcurrentUploads &&
                    this.options.limitConcurrentUploads <= this._sending)) {
                if (this.options.limitConcurrentUploads > 1) {
                    slot = $.Deferred();
                    this._slots.push(slot);
                    pipe = slot.pipe(send);
                } else {
                    this._sequence = this._sequence.pipe(send, send);
                    pipe = this._sequence;
                }
                // Return the piped Promise object, enhanced with an abort method,
                // which is delegated to the jqXHR object of the current upload,
                // and jqXHR callbacks mapped to the equivalent Promise methods:
                pipe.abort = function () {
                    aborted = [undefined, 'abort', 'abort'];
                    if (!jqXHR) {
                        if (slot) {
                            slot.rejectWith(options.context, aborted);
                        }
                        return send();
                    }
                    return jqXHR.abort();
                };
                return this._enhancePromise(pipe);
            }
            return send();
        },

        _onAdd: function (e, data) {
            var that = this,
                result = true,
                options = $.extend({}, this.options, data),
                files = data.files,
                filesLength = files.length,
                limit = options.limitMultiFileUploads,
                limitSize = options.limitMultiFileUploadSize,
                overhead = options.limitMultiFileUploadSizeOverhead,
                batchSize = 0,
                paramName = this._getParamName(options),
                paramNameSet,
                paramNameSlice,
                fileSet,
                i,
                j = 0;
            if (limitSize && (!filesLength || files[0].size === undefined)) {
                limitSize = undefined;
            }
            if (!(options.singleFileUploads || limit || limitSize) ||
                    !this._isXHRUpload(options)) {
                fileSet = [files];
                paramNameSet = [paramName];
            } else if (!(options.singleFileUploads || limitSize) && limit) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i += limit) {
                    fileSet.push(files.slice(i, i + limit));
                    paramNameSlice = paramName.slice(i, i + limit);
                    if (!paramNameSlice.length) {
                        paramNameSlice = paramName;
                    }
                    paramNameSet.push(paramNameSlice);
                }
            } else if (!options.singleFileUploads && limitSize) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i = i + 1) {
                    batchSize += files[i].size + overhead;
                    if (i + 1 === filesLength ||
                            ((batchSize + files[i + 1].size + overhead) > limitSize) ||
                            (limit && i + 1 - j >= limit)) {
                        fileSet.push(files.slice(j, i + 1));
                        paramNameSlice = paramName.slice(j, i + 1);
                        if (!paramNameSlice.length) {
                            paramNameSlice = paramName;
                        }
                        paramNameSet.push(paramNameSlice);
                        j = i + 1;
                        batchSize = 0;
                    }
                }
            } else {
                paramNameSet = paramName;
            }
            data.originalFiles = files;
            $.each(fileSet || files, function (index, element) {
                var newData = $.extend({}, data);
                newData.files = fileSet ? element : [element];
                newData.paramName = paramNameSet[index];
                that._initResponseObject(newData);
                that._initProgressObject(newData);
                that._addConvenienceMethods(e, newData);
                result = that._trigger(
                    'add',
                    $.Event('add', {delegatedEvent: e}),
                    newData
                );
                return result;
            });
            return result;
        },

        _replaceFileInput: function (data) {
            var input = data.fileInput,
                inputClone = input.clone(true);
            // Add a reference for the new cloned file input to the data argument:
            data.fileInputClone = inputClone;
            $('<form></form>').append(inputClone)[0].reset();
            // Detaching allows to insert the fileInput on another form
            // without loosing the file input value:
            input.after(inputClone).detach();
            // Avoid memory leaks with the detached file input:
            $.cleanData(input.unbind('remove'));
            // Replace the original file input element in the fileInput
            // elements set with the clone, which has been copied including
            // event handlers:
            this.options.fileInput = this.options.fileInput.map(function (i, el) {
                if (el === input[0]) {
                    return inputClone[0];
                }
                return el;
            });
            // If the widget has been initialized on the file input itself,
            // override this.element with the file input clone:
            if (input[0] === this.element[0]) {
                this.element = inputClone;
            }
        },

        _handleFileTreeEntry: function (entry, path) {
            var that = this,
                dfd = $.Deferred(),
                errorHandler = function (e) {
                    if (e && !e.entry) {
                        e.entry = entry;
                    }
                    // Since $.when returns immediately if one
                    // Deferred is rejected, we use resolve instead.
                    // This allows valid files and invalid items
                    // to be returned together in one set:
                    dfd.resolve([e]);
                },
                successHandler = function (entries) {
                    that._handleFileTreeEntries(
                        entries,
                        path + entry.name + '/'
                    ).done(function (files) {
                        dfd.resolve(files);
                    }).fail(errorHandler);
                },
                readEntries = function () {
                    dirReader.readEntries(function (results) {
                        if (!results.length) {
                            successHandler(entries);
                        } else {
                            entries = entries.concat(results);
                            readEntries();
                        }
                    }, errorHandler);
                },
                dirReader, entries = [];
            path = path || '';
            if (entry.isFile) {
                if (entry._file) {
                    // Workaround for Chrome bug #149735
                    entry._file.relativePath = path;
                    dfd.resolve(entry._file);
                } else {
                    entry.file(function (file) {
                        file.relativePath = path;
                        dfd.resolve(file);
                    }, errorHandler);
                }
            } else if (entry.isDirectory) {
                dirReader = entry.createReader();
                readEntries();
            } else {
                // Return an empy list for file system items
                // other than files or directories:
                dfd.resolve([]);
            }
            return dfd.promise();
        },

        _handleFileTreeEntries: function (entries, path) {
            var that = this;
            return $.when.apply(
                $,
                $.map(entries, function (entry) {
                    return that._handleFileTreeEntry(entry, path);
                })
            ).pipe(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _getDroppedFiles: function (dataTransfer) {
            dataTransfer = dataTransfer || {};
            var items = dataTransfer.items;
            if (items && items.length && (items[0].webkitGetAsEntry ||
                    items[0].getAsEntry)) {
                return this._handleFileTreeEntries(
                    $.map(items, function (item) {
                        var entry;
                        if (item.webkitGetAsEntry) {
                            entry = item.webkitGetAsEntry();
                            if (entry) {
                                // Workaround for Chrome bug #149735:
                                entry._file = item.getAsFile();
                            }
                            return entry;
                        }
                        return item.getAsEntry();
                    })
                );
            }
            return $.Deferred().resolve(
                $.makeArray(dataTransfer.files)
            ).promise();
        },

        _getSingleFileInputFiles: function (fileInput) {
            fileInput = $(fileInput);
            var entries = fileInput.prop('webkitEntries') ||
                    fileInput.prop('entries'),
                files,
                value;
            if (entries && entries.length) {
                return this._handleFileTreeEntries(entries);
            }
            files = $.makeArray(fileInput.prop('files'));
            if (!files.length) {
                value = fileInput.prop('value');
                if (!value) {
                    return $.Deferred().resolve([]).promise();
                }
                // If the files property is not available, the browser does not
                // support the File API and we add a pseudo File object with
                // the input value as name with path information removed:
                files = [{name: value.replace(/^.*\\/, '')}];
            } else if (files[0].name === undefined && files[0].fileName) {
                // File normalization for Safari 4 and Firefox 3:
                $.each(files, function (index, file) {
                    file.name = file.fileName;
                    file.size = file.fileSize;
                });
            }
            return $.Deferred().resolve(files).promise();
        },

        _getFileInputFiles: function (fileInput) {
            if (!(fileInput instanceof $) || fileInput.length === 1) {
                return this._getSingleFileInputFiles(fileInput);
            }
            return $.when.apply(
                $,
                $.map(fileInput, this._getSingleFileInputFiles)
            ).pipe(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _onChange: function (e) {
            var that = this,
                data = {
                    fileInput: $(e.target),
                    form: $(e.target.form)
                };
            this._getFileInputFiles(data.fileInput).always(function (files) {
                data.files = files;
                if (that.options.replaceFileInput) {
                    that._replaceFileInput(data);
                }
                if (that._trigger(
                        'change',
                        $.Event('change', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    that._onAdd(e, data);
                }
            });
        },

        _onPaste: function (e) {
            var items = e.originalEvent && e.originalEvent.clipboardData &&
                    e.originalEvent.clipboardData.items,
                data = {files: []};
            if (items && items.length) {
                $.each(items, function (index, item) {
                    var file = item.getAsFile && item.getAsFile();
                    if (file) {
                        data.files.push(file);
                    }
                });
                if (this._trigger(
                        'paste',
                        $.Event('paste', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    this._onAdd(e, data);
                }
            }
        },

        _onDrop: function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var that = this,
                dataTransfer = e.dataTransfer,
                data = {};
            if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                e.preventDefault();
                this._getDroppedFiles(dataTransfer).always(function (files) {
                    data.files = files;
                    if (that._trigger(
                            'drop',
                            $.Event('drop', {delegatedEvent: e}),
                            data
                        ) !== false) {
                        that._onAdd(e, data);
                    }
                });
            }
        },

        _onDragOver: getDragHandler('dragover'),

        _onDragEnter: getDragHandler('dragenter'),

        _onDragLeave: getDragHandler('dragleave'),

        _initEventHandlers: function () {
            if (this._isXHRUpload(this.options)) {
                this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop,
                    // event.preventDefault() on dragenter is required for IE10+:
                    dragenter: this._onDragEnter,
                    // dragleave is not required, but added for completeness:
                    dragleave: this._onDragLeave
                });
                this._on(this.options.pasteZone, {
                    paste: this._onPaste
                });
            }
            if ($.support.fileInput) {
                this._on(this.options.fileInput, {
                    change: this._onChange
                });
            }
        },

        _destroyEventHandlers: function () {
            this._off(this.options.dropZone, 'dragenter dragleave dragover drop');
            this._off(this.options.pasteZone, 'paste');
            this._off(this.options.fileInput, 'change');
        },

        _setOption: function (key, value) {
            var reinit = $.inArray(key, this._specialOptions) !== -1;
            if (reinit) {
                this._destroyEventHandlers();
            }
            this._super(key, value);
            if (reinit) {
                this._initSpecialOptions();
                this._initEventHandlers();
            }
        },

        _initSpecialOptions: function () {
            var options = this.options;
            if (options.fileInput === undefined) {
                options.fileInput = this.element.is('input[type="file"]') ?
                        this.element : this.element.find('input[type="file"]');
            } else if (!(options.fileInput instanceof $)) {
                options.fileInput = $(options.fileInput);
            }
            if (!(options.dropZone instanceof $)) {
                options.dropZone = $(options.dropZone);
            }
            if (!(options.pasteZone instanceof $)) {
                options.pasteZone = $(options.pasteZone);
            }
        },

        _getRegExp: function (str) {
            var parts = str.split('/'),
                modifiers = parts.pop();
            parts.shift();
            return new RegExp(parts.join('/'), modifiers);
        },

        _isRegExpOption: function (key, value) {
            return key !== 'url' && $.type(value) === 'string' &&
                /^\/.*\/[igm]{0,3}$/.test(value);
        },

        _initDataAttributes: function () {
            var that = this,
                options = this.options,
                data = this.element.data();
            // Initialize options set via HTML5 data-attributes:
            $.each(
                this.element[0].attributes,
                function (index, attr) {
                    var key = attr.name.toLowerCase(),
                        value;
                    if (/^data-/.test(key)) {
                        // Convert hyphen-ated key to camelCase:
                        key = key.slice(5).replace(/-[a-z]/g, function (str) {
                            return str.charAt(1).toUpperCase();
                        });
                        value = data[key];
                        if (that._isRegExpOption(key, value)) {
                            value = that._getRegExp(value);
                        }
                        options[key] = value;
                    }
                }
            );
        },

        _create: function () {
            this._initDataAttributes();
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = 0;
            this._initProgressObject(this);
            this._initEventHandlers();
        },

        // This method is exposed to the widget API and allows to query
        // the number of active uploads:
        active: function () {
            return this._active;
        },

        // This method is exposed to the widget API and allows to query
        // the widget upload progress.
        // It returns an object with loaded, total and bitrate properties
        // for the running uploads:
        progress: function () {
            return this._progress;
        },

        // This method is exposed to the widget API and allows adding files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files property and can contain additional options:
        // .fileupload('add', {files: filesList});
        add: function (data) {
            var that = this;
            if (!data || this.options.disabled) {
                return;
            }
            if (data.fileInput && !data.files) {
                this._getFileInputFiles(data.fileInput).always(function (files) {
                    data.files = files;
                    that._onAdd(null, data);
                });
            } else {
                data.files = $.makeArray(data.files);
                this._onAdd(null, data);
            }
        },

        // This method is exposed to the widget API and allows sending files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files or fileInput property and can contain additional options:
        // .fileupload('send', {files: filesList});
        // The method returns a Promise object for the file upload call.
        send: function (data) {
            if (data && !this.options.disabled) {
                if (data.fileInput && !data.files) {
                    var that = this,
                        dfd = $.Deferred(),
                        promise = dfd.promise(),
                        jqXHR,
                        aborted;
                    promise.abort = function () {
                        aborted = true;
                        if (jqXHR) {
                            return jqXHR.abort();
                        }
                        dfd.reject(null, 'abort', 'abort');
                        return promise;
                    };
                    this._getFileInputFiles(data.fileInput).always(
                        function (files) {
                            if (aborted) {
                                return;
                            }
                            if (!files.length) {
                                dfd.reject();
                                return;
                            }
                            data.files = files;
                            jqXHR = that._onSend(null, data);
                            jqXHR.then(
                                function (result, textStatus, jqXHR) {
                                    dfd.resolve(result, textStatus, jqXHR);
                                },
                                function (jqXHR, textStatus, errorThrown) {
                                    dfd.reject(jqXHR, textStatus, errorThrown);
                                }
                            );
                        }
                    );
                    return this._enhancePromise(promise);
                }
                data.files = $.makeArray(data.files);
                if (data.files.length) {
                    return this._onSend(null, data);
                }
            }
            return this._getXHRPromise(false, data && data.context);
        }

    });

}));


/*global window, $, navigator, document, loom */
(function($) {	
    var tmpl = [
        '<div class="loom-drag-n-drop" data-state="default">',
            '<div class="uploader-state default-msg group">',
                '<div class="ie">Upload a file <input class="ie" type="file" name="{name}" /></div>',
                '<div class="not-ie">',
                    '<div class="state-title">Drag your file here</div>',
                    'or <a class="trigger-file-upload">upload a file from your computer</a>',
                '</div>',
            '</div>',
            '<div class="uploader-state error-msg group"></div>',
            '<div class="uploader-state uploading-msg group">',
                '<div class="upload-in-progress state-title">Uploading</div>',
                '<progress class="success" id="progress_{name}" value="0" max="100"></progress>',
            '</div>',
            '<div class="uploader-state success-msg group">',
            '</div>',
            '<input class="not-ie" type="file" name="{name}" />',
            '<input type="hidden" class="loom-upload-id" />',
        '</div>'
    ];


    var AjaxFileUploader;
	$.fn.ajaxFileUpload = function(args) {
        return new AjaxFileUploader(this, args);
	};

	$.fn.ajaxFileUpload.uploaders = {};
	$.fn.ajaxFileUpload.fileUploadsInProgress = 0;
	$.fn.ajaxFileUpload.animateEllipses = function(el, maxEllipses, interval) {
		/*
		 * our default text getters and setters, for normal elements with
		 * innerHTML
		 */
		var textGetter, textSetter;
		textGetter = function() {return el.text();}; 
		textSetter = function(text) {return el.text(text);};
		
		/*
		 * to handle inputs, where they don't have an innerHTML, they have
		 * a value
		 */
		if (el.attr("value")) {
			textGetter = function() {
				return el.attr("value");
			};
			
			textSetter = function(text) {
				return el.attr("value", text);
			};
		}
		
		if (maxEllipses === undefined) {
			maxEllipses = 3;
		}
		if (interval === undefined) {
			interval = 500;
		}
		
		$.fn.ajaxFileUpload.stopEllipses(el);

		
		//el.data("ellipsesOriginalTextAlign", el.css("text-align"));
		//el.css("text-align", "left");
		
		el.data("ellipsesOriginalText", textGetter());
		el.data("ellipsesInterval", window.setInterval(function() {
    		var text = textGetter();
    		var matches = text.match(/\.+$/g);
    		var numEllipses = 0;
    		
    		if (matches) {
    			numEllipses = matches[0].length;
    		}
    		
    		if (numEllipses >= maxEllipses) {
    			text = el.data("ellipsesOriginalText");
    		}
    		else {
    			text += ".";
    		}
    		textSetter(text);
    	}, interval));
    	return;
    };
    
    
	$.fn.ajaxFileUpload.stopEllipses = function(el) {
		var existingInterval = el.data("ellipsesInterval");
		if (existingInterval) {
			window.clearInterval(existingInterval);
			el.html(el.data("ellipsesOriginalText"));
			//el.css("text-align", el.data("ellipsesOriginalTextAlign"));
		}
	};
    
    
	
	
	AjaxFileUploader = function(input, args) {
        this.container = $(tmpl.join("\n").replace(/\{name\}/g, "test"));
        $(input).replaceWith(this.container);
        this.hiddenId = this.container.find("input.loom-upload-id");
		var isIE = navigator.userAgent.match(/msie/i) ? 1:0;
		
		
		/*
		 * we don't do this if we're not IE because IE requires that we display
		 * the input[type=file] directly for the user to click, because it
		 * doesn't support programmatic clicks of that element (i guess for
		 * security reasons)
		 */
		if (!isIE) {
			/*
			 * cause clicking the drag-n-drop area to open the file dialog
			 */
			this.container.click(function(e) {
				var el = $(this);
				var notIEInput = el.find("input[type=file].not-ie");
				
				/*
				 * this is so ghetto, but because our input[type=file] is hidden, click
				 * events bubble up to .drag-n-drop's click handler.  what this means
				 * is that $(input).trigger("click") WILL END UP HERE AGAIN, hence
				 * this check
				 */
				if (e.target === notIEInput[0]) {
					return true;
				}
				$(notIEInput).trigger("click");
                return false;
			});

            this.container.find(".ie").hide();
		}
        else {
            this.container.find(".not-ie").hide();
        }
		
		
		this.progressBar = this.container.find("progress");
		
		
		/*
		 * gets all the state divs and puts them into a mapping of state name
		 * => state div
		 */
		var states = {};
		this._states = states;
		var stateList = this.container.find(".uploader-state").map(function() {
			var stateName = null;
			var stateDiv = this;
			$.each(this.className.split(/\s+/), function(i, item) {
				if (/-msg$/.test(item)) {
					stateName = /(.+?)-msg$/.exec(item)[1];
				}
			});
			return [[stateName, stateDiv]];
		});
		$(stateList).each(function(i, el) {
			states[el[0]] = $(el[1]);
		});
		
		/*
		 * enable the actual fileupload widget on the individual form element
		 */
		if (isIE) {
			this._input = this.container.find("input[type=file].ie");
		}
		else {
			this._input = this.container.find("input[type=file].not-ie");
		}
	    this.name = this._input.attr("name");
	    
    	// used in the callbacks
    	var self = this;
    	
    	this._input.fileupload({
            url: loom._apiUrl + "/async-upload",
            paramName: "upload",
            pasteZone: null,
            dropZone: this.container,
            send: $.proxy(this._fileUploadStarted, self)
            //forceIframeTransport: true
        })
            .bind("fileuploadstart", $.proxy(this._startCallback, self))
            .bind("fileuploadprogress", $.proxy(this._progressCallback, self))
            .bind("fileuploaddone", $.proxy(this._doneCallback, self))
            .bind("fileuploadfail", $.proxy(this._failCallback, self));
        
    	$.fn.ajaxFileUpload.uploaders[this._input.attr("name")] = this;
    	
    	
    	/*
    	 * pull the state from the django-rendered widget and sync up the
    	 * javascript widget with that.  so if a file has been uploaded, it
    	 * will display the file link, etc
    	 */
    	this.setState(this.getState());
    	
    	this._uploadingCallback = null;
    	this._doneUploadingCallback = null;
    	this._successCallback = null;
    	this._errorCallback = null;
    	
    	
    	$(this.getStateDiv("success")).on("click", ".uploader-file", function(e) {
    		e.stopPropagation();
    		return true;
    	});
	};
	
	
	AjaxFileUploader.prototype = {
		_progressCallback: function(e, data) {
	    	/*
	    	 * we use 95% and not 100% so that the file won't appear to be finished
	    	 * until our callback (success or failure) is called, at which point
	    	 * we'll set the progress to 100%
	    	 */
	    	var amt = parseInt(data.loaded / data.total * 95, 10);
	    	this._setUploadProgress(amt);
	    },
	    
	    _setUploadProgress: function(amt) {
	    	this.progressBar.attr("value", amt);
	    },
	    
	    _startCallback: function(e) {
	    	this._setUploadProgress(0);
	    	this.setState("uploading");
	    },

        getUploadId: function() {
            return this.hiddenId.val();
        },
	    
	    _doneCallback: function(e, data) {
	    	var xhr = data.jqXHR;
	    	
	    	var res;
	    	
	    	if (xhr.responseText) {
	    		res = JSON.parse(xhr.responseText);
	    	}
	    	else {
	    		res = JSON.parse($(data.result).find("script").html());
	    	}
	    	
	    	var status = res.status;
	    	var msg = res.status_msg;
	    	
	    	var self = this;
            var callback = null;
	    	
	    	// success
	    	if (status) {
	            callback = function() {
	            	self.success(msg);
                    self.hiddenId.val(res.id);
	            	if (self._successCallback) {
	            		self._successCallback(res);
	            	}
	            };
	    	}
	    	else {
	    		callback = function() {
	    			self.error(msg);
	            	if (self._errorCallback) {
	            		self._errorCallback(res);
	            	}
	    		};
	    	}
    
		    this._fileDoneForOneReasonOrAnother(callback);
	    },
	    
	    setSuccessCallback: function(cb) {
	    	this._successCallback = $.proxy(cb, this);
	    },
	    
	    setErrorCallback: function(cb) {
	    	this._errorCallback = $.proxy(cb, this);
	    },
	    
	    setUploadStartCallback: function(cb) {
	    	this._uploadingCallback = $.proxy(cb, this);
	    },
	    
	    setUploadEndCallback: function(cb) {
	    	this._doneUploadingCallback = $.proxy(cb, this);
	    },
	    
	    setUploadTitle: function(html) {
	    	this._getUploadTitleElement().text(html);
	    },
	    
	    _getUploadTitleElement: function() {
	    	var state = this._states.uploading;
	    	return state.find(".upload-in-progress");
	    },
	    
	    _failCallback: function(e, data) {
	    	var xhr = data.jqXHR;
	    	var code = xhr.status;
	    	var error = xhr.statusText;
	    	
	    	var msg = "Upload error " + code + ": " + error;
	    	
	    	var self = this;
	    	function callback() {
	    		self.error(msg);
	    	}
	        
	        this._fileDoneForOneReasonOrAnother(callback);
	    },
	    
	    getStateDiv: function(name) {
	    	return this._states[name];
	    },
	    
	    getState: function() {
	    	return this.container.data("state");
	    },
	    
	    setState: function(state) {
	    	var oldState = this.getState();
	    	if (oldState === "uploading") {
	    		$.fn.ajaxFileUpload.stopEllipses(this._getUploadTitleElement());
	    	}
	    	
	    	this.container.data("state", state);
	    	this._showState(state);
	    	
	    	if (state === "uploading") {
	    		$.fn.ajaxFileUpload.animateEllipses(this._getUploadTitleElement());
	    	}
	    	
	    	return this;
	    },
	    
	    _showState: function(name) {
	    	var self = this;
	    	$.each(this._states, function(k,v) {
	    		if (k === name) {
	    			$(v).show();
	    			self.container.addClass(k);
	    		}
	    		else {
	    			self.container.removeClass(k);
	    			$(v).hide();
	    		}
	    	});
	    	return this;
	    },
	    
	    /*
	     * sets the success msg and shows the success state
	     */
	    success: function(msg) {
	    	this._states.success.html(msg);
	    	this.setState("success");
	    },
	    
	    /*
	     * sets the error msg and shows the error state
	     */
	    error: function(msg) {
	    	msg = $("<div><div class='state-title'>Oops! this file won't work!</div></div>").append(msg);
	    	this._states.error.html(msg);
	    	this.setState("error");
	    },
	    
	    _fileUploadStarted: function() {
	    	if (this._uploadingCallback) {
	    		this._uploadingCallback(this);
	    	}
	        $.fn.ajaxFileUpload.fileUploadsInProgress += 1;
	    },
	    
	    /*
	     * called when the upload completes, either because of an error or
	     * a success.  this does the nice thing of finishing the progress bar
	     * after a delay, so that very fast file uploads won't just have the
	     * progress bar flash in and out very quickly
	     */
	    _fileDoneForOneReasonOrAnother: function(callback) {
	    	var self = this;
	    	window.setTimeout(function() {
		    	$.fn.ajaxFileUpload.fileUploadsInProgress -= 1;
	    		callback();
	    		if (self._doneUploadingCallback) {
	    			self._doneUploadingCallback(self);
	    		}
	    	}, 1000);
	    }
	};
	
}(window.jQuery));


var ourJQuery = $;

$.noConflict(true);

var Loom = (function($) {

$.support.cors = true;

var FACEBOOK_APP_ID = '116832620224';
var GIRAFFE_SERVER = 'https://cdn-images.threadless.com';
var API_URL = 'https://loom.threadless.com';
var EMBED_CSS = 'https://d2djzakkfkyr8w.cloudfront.net/static/css/embed.css';
var API_IE_URL = 'https://www.threadless.com/loom/';

/*global FB, window, $, API_IE_URL, API_URL, FACEBOOK_APP_ID, CryptoJS, Cookies */


var PASSTHROUGH_QS_KEYS = ["Signature", "Expires", "AWSAccessKeyId"];

function isUndefined(name) {
    return name === undefined;
}

function parseDate(dt) {
    return new Date(dt);
}

function ieVersion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    var version = null;

    if (msie > 0) {
        version = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
    }

    return version;
}

function walkObject(obj, path) {
    var paths = path.split(".");
    var i;
    var subpath;

    for (i = 0; i < paths.length; i += 1) {
        subpath = paths[i];
        obj = obj[subpath];
        if (isUndefined(obj)) {
            break;
        }
    }
    return obj;
}

function _toId(obj) {
    var id = obj;
    if (typeof id === "object") {
        id = obj.id;
    }
    return id;
}

function joinURLToPath(url, path) {
    url = url.replace(/\/+$/g, "");
    path = path.replace(/^\/+/g, "");
    return url + "/" + path;
}

function joinURLParts() {
    var full = "";
    $.each(arguments, function (i, el) {
        el = el.replace(/^\/+/g, "").replace(/\/+$/g, "");
        full += "/" + el;
    });
    return full;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function camelCase(word) {
    return word.replace(/(\_\w)/g, function (m) {return m[1].toUpperCase(); });
}

function fullURLToPath(path) {
    var fullUrlMatch = path.match(/https?:\/\/.+?(\/.+)/i);
    if (fullUrlMatch) {
        path = fullUrlMatch[1];
    }
    return path;
}

function composeOptions(page, perPage, options) {
    var allOptions = {"page": page, "per_page": perPage};
    $.extend(allOptions, options);
    return allOptions;
}

function _preprocessQsParams(params) {
    var adjustedParams = {};
    $.each(params, function(k,v) {
        if (v === true) {
            v = 1;
        }
        else if (v === false) {
            v = 0;
        }
        else if (Array.isArray(v)) {
            v = JSON.stringify(v);
        }
        else if (v === null) {
            return true;
        }
        adjustedParams[k] = v;
    });
    return adjustedParams;
}

/*
 * guess who doesn't support btoa?  < IE10!
 */
function btoa(s) {
    var wordArray = CryptoJS.enc.Utf8.parse(s);
    return CryptoJS.enc.Base64.stringify(wordArray);
}

function btoaURL(s) {
    var b64 = btoa(s);
    return b64.replace("+", "-").replace("/", "_");
}

function atob(s) {
    var wordArray = CryptoJS.enc.Base64.parse(s);
    return wordArray.toString(CryptoJS.enc.Utf8);
}

function atobURL(b64) {
    b64 = b64.replace("_", "/").replace("-", "+");
    return atob(b64);
}

/*
 * helper function for default argument handling
 */
function _defaultArg(name, _default) {
    return isUndefined(name) ? _default : name;
}


function _parseGiraffeUrl(source) {
    var path = source;
    var i, key;
    if (/https?:\/\//i.test(source)) {
        path = source.split("/").slice(3).join("/").split("?")[0];
    }

    var qs = {};
    var qsParts = source.split("?");
    if (qsParts.length > 1) {
        var params = qsParts[1].split("&");
        var kv;
        for (i=0; i<params.length; i+=1) {
            kv = params[i].split("=");
            qs[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1] || '');
        }
    }

    var opStack = [];

    var version = parseInt(qs.v, 10);
    var data = null;

    if (qs.v2) {
        data = qs.v2;
        version = 2;
    }
    else if (version === 3) {
        data = qs.d;
    }
    else {
        version = 1;
    }

    var passQS = {};

    for(i = 0; i < PASSTHROUGH_QS_KEYS.length; i += 1) {
        key = PASSTHROUGH_QS_KEYS[i];
        if(qs.hasOwnProperty(key)) {
            passQS[key] = qs[key];
        }
    }

    if (version > 1) {
        var opDict = JSON.parse(atobURL(data));
        opStack = opDict.ops;
    }

    return [path, opStack, passQS];
}

var GiraffeImage = function (source) {
    var res = _parseGiraffeUrl(source);
    this.source = res[0];
    this.opStack = res[1];
    this.passQS = res[2];
};

GiraffeImage.prototype = {
    call: function (opName, args, kwargs) {
        this.opStack.push([opName, args, kwargs]);
        var newImg = new GiraffeImage(this.source);
        $.each(this.opStack, function (i, op) {
            newImg.opStack.push(op);
        });
        return newImg;
    },

    getUrl: function (onlyMeta) {
        if (isUndefined(onlyMeta)) {
            onlyMeta = false;
        }

        var opDict = {
            ops: this.opStack,
            force: false,
            only_meta: onlyMeta
        };
        var server = GIRAFFE_SERVER.replace(/\/+$/, "");
        var opString = btoaURL(JSON.stringify(opDict));
        var url = server + "/" + this.source + "?v2=" + opString;

        if (!$.isEmptyObject(this.passQS)) {
            url += "&" + $.param(this.passQS);
        }

        return url;
    }
};


var LoomModel = function (api, dictOrURL, mappings) {
    /*
     * mappings may be undefined in the case that we're using LoomModel as
     * the model, instead of a derived subclass
     */
    this._mappings = mappings || {};
    this._api = api;

    var lazy = true;
    if (typeof dictOrURL === "object") {
        lazy = false;
        $.extend(this, dictOrURL);
    }

    this._lazy = lazy;
    this._lazyConstructor = null;
    this._underlyingDict = dictOrURL;
};

/*
 * turns some identifier (or nothing), into a model that we can use to
 * wrap around the json response
 */
function modelToModelObj(model) {
    if (!model) {
        model = LoomModel;
    } else if (typeof model === "string") {
        model = eval(model);
    }
    return model;
}


LoomModel.fromCollection = function (model, api, promise) {
    promise = promise.then(function (collection) {
        var newCollection = collection.map(function (item) {
            return LoomModel.fromResolvedObject(model, api, item);
        });
        return newCollection;
    });
    return promise;
};

LoomModel.fromPlainURL = function (Model, api, url) {
    Model = modelToModelObj(Model);
    var obj = new Model(api, url);
    obj._lazyConstructor = Model;
    return obj;
};

LoomModel.fromURL = function (Model, api, promise) {
    Model = modelToModelObj(Model);
    promise = promise.then(function (url) {
        var obj = new Model(api, url);
        obj._lazyConstructor = Model;
        return obj;
    });
    return promise;
};

LoomModel.fromObject = function (model, api, promise) {
    promise = promise.then(function (json) {
        return LoomModel.fromResolvedObject(model, api, json);
    });
    return promise;
};

LoomModel.fromResolvedObject = function (Model, api, json) {
    var obj = new Model(api, json);
    obj._populateFields(obj);
    return obj;
};

/*
 * creates a function that takes a callback and repeatedly calls it on the
 * results of the api endpoint at `path`, after they have been wrapped with
 * `model`
 */
function _mapRelatedIterAPICall(api, path, model) {
    var perPage = api._defaultIterPage;

    /*
     * this will resolve when we're completely done iterating over the
     * collection
     */
    var deferred = $.Deferred();

    function iterAccessor(cb, options) {
        function getMore(page, perPage, options) {
            var promise = api.get(path, composeOptions(page, perPage, options));
            var colPromise = LoomModel.fromCollection(model, api, promise);

            colPromise.then(function (collection) {
                collection.forEach(cb);

                if (collection.length) {
                    getMore(page + 1, perPage, options);
                } else {
                    deferred.resolve();
                }
            });
        }

        getMore(0, perPage, options);
        return deferred.promise();
    }

    return iterAccessor;
}

function setDottedKey(d, field, value) {
    var subD = d;
    var pieces = field.split(".");
    var lastPiece = pieces.pop();
    $.each(pieces, function (i, piece) {
        subD = subD[piece];
    });
    subD[lastPiece] = value;
}

function recursiveDictToFlatDottedDict(d, prefix) {
    var totalDottedDict = {};
    $.each(d, function (k, v) {
        if (typeof v === "object" && v !== null && v.hasOwnProperty) {
            var dottedDict = recursiveDictToFlatDottedDict(v, k);
            $.extend(true, totalDottedDict, dottedDict);
        }
        else {
            var dottedKey;
            if (prefix) {
                dottedKey = prefix + "." + k;
            }
            else {
                dottedKey = k;
            }
            totalDottedDict[dottedKey] = v;
        }
    });
    return totalDottedDict;
}

function _mapRelatedAPICall(api, pathOrShortObj, isCollection, model, method) {
    if (isUndefined(method)) {
        method = "get";
    }

    function getPath() {
        var path = null;
        if (typeof pathOrShortObj === "string") {
            path = pathOrShortObj;
        }
        else {
            path = pathOrShortObj.full_resource || null;
        }
        return path;
    }

    function updater(data) {
        var promise = api.post(getPath(), data);
        return LoomModel.fromObject(model, api, promise);
    }

    function objAccessor(options) {
        options = options || {};
        var promise = api.get(getPath(), options);
        return LoomModel.fromObject(model, api, promise);
    }

    function collectionAccessor(page, perPage, options) {
        options = options || {};
        if (isUndefined(perPage)) {
            perPage = page;
            page = 0;
        }
        options = composeOptions(page, perPage, options);
        var promise = api.get(getPath(), options);
        return LoomModel.fromCollection(model, api, promise);
    }

    var fn;
    if (method === "get") {
        fn = objAccessor;
        if (isCollection) {
            fn = collectionAccessor;
        }
    } else if (method === "post") {
        fn = updater;
    }

    return fn;
}


LoomModel.prototype = {

    inflate: function (options) {
        var promise = null;

        if (this._lazy) {
            promise = this._api.get(this._underlyingDict, options);
            promise = LoomModel.fromObject(this._lazyConstructor, this._api,
                    promise);
        } else {
            var def = $.Deferred();
            def.resolve(this);
            promise = def.promise();
        }

        return promise;
    },

    _populateFields: function (obj) {
        var modelSelf = this;

        function createAccessorName(field) {
            return "get" + capitalize(camelCase(field));
        }

        function createIterName(field) {
            return "each" + capitalize(camelCase(field));
        }


        function createRelatedAccessor(field, isCollection, model) {
            model = modelToModelObj(model);

            var value = obj[field];
            if (isUndefined(value)) {
                return null;
            }

            if (!value) {
                var deferred = $.Deferred();
                deferred.resolve(null);
                return deferred.promise();
            }

            return _mapRelatedAPICall(modelSelf._api, value, isCollection,
                    model);
        }

        /*
         * provides an "each"+name iterator that takes a callback and applies
         * it to every result from a collection endpoint, while seemlessly
         * doing the pagination under the hood
         */
        function createRelatedEach(field, model) {
            model = modelToModelObj(model);

            var value = obj[field];
            if (isUndefined(value)) {
                return null;
            }

            if (!value) {
                var deferred = $.Deferred();
                deferred.resolve(null);
                return deferred.promise();
            }

            return _mapRelatedIterAPICall(modelSelf._api, value, model);
        }

        function createRefreshAccessor(url, model) {
            var accessor = _mapRelatedAPICall(modelSelf._api, url, false,
                    model);
            return accessor;
        }

        function createUpdateAccessor(url, model) {
            var accessor = _mapRelatedAPICall(modelSelf._api, url, false, model,
                    "post");
            return accessor;
        }

        function createDeleter(url, model) {
            var accessor = function () {
                modelSelf._api.delete_(url);
            };
            return accessor;
        }

        var fn = function (obj) {
            var relatedObjectFields = obj._mappings.relatedObjects || {};
            $.each(relatedObjectFields, function (field, model) {
                obj[createAccessorName(field)] = createRelatedAccessor(field, false, model);
            });

            var relatedCollectionFields = obj._mappings.relatedCollections || {};
            $.each(relatedCollectionFields, function (field, model) {
                obj[createAccessorName(field)] = createRelatedAccessor(field,
                        true, model);
                obj[createIterName(field)] = createRelatedEach(field, model);
            });

            var flatFields = recursiveDictToFlatDottedDict(obj._underlyingDict);

            var dateFields = obj._mappings.dates || [];
            $.each(dateFields, function (fi, field) {
                var value = flatFields[field];
                if (!value) {
                    return;
                }
                setDottedKey(obj, field, parseDate(value));
            });

            var giraffeFields = obj._mappings.giraffeImages || [];
            $.each(giraffeFields, function (fi, field) {
                var value = flatFields[field];
                if (!value) {
                    return;
                }
                setDottedKey(obj, field, new GiraffeImage(value));
            });

            var fullResource = obj.full_resource;
            if (!isUndefined(fullResource)) {
                if (isUndefined(obj.refresh)) {
                    obj.refresh = createRefreshAccessor(fullResource, obj.model);
                }
                if (isUndefined(obj.update)) {
                    obj.update = createUpdateAccessor(fullResource, obj.model);
                }
                if (isUndefined(obj.delete_)) {
                    obj.delete_ = createDeleter(fullResource, obj.model);
                }
            }

            return obj;
        };

        /*
         * this is bad of me, but i don't remember why obj would ever be
         * undefined.  the source does not allude to this ever being the case
         */
        var res;
        if (isUndefined(obj)) {
            res = fn;
        } else {
            res = fn(obj);
        }
        return res;
    }
};


/*
 * a convenience function for creating a LoomModel subclass.  name is the name
 * of the model as it will appear in console.log, mappings is an object of
 * relatedCollections, relatedObjects, and dates, methods are additional
 * methods to exist on the subclass prototype
 */
function createModel(name, mappings, methods) {
    /*
     * this looks weird.  what it is doing is identical to the commented-out
     * Model function below.  why we're doing it this way is that if we use
     * the commented-out version, all models created with this helper function
     * will appear in the console.log as "Model", even though the objects
     * being instantiated are indeed using fully-qualified names like
     * "UserModel".  the problem has to do with the creation of the function
     * itself...only then can it be given the name it will appear as in the
     * console.  so we do some magic to create a dynamic function, and now
     * the console.log behaves like we want
     */
    var Model = new Function("LoomModel", "mappings",
            "return function " + name + "(api, json) {" +
            "LoomModel.call(this, api, json, mappings);" +
            "}")(LoomModel, mappings);

    /*
    function Model(api, json) {
        LoomModel.call(this, mappings, api, json);
    }
     */

    var prototype = $.extend({model: Model}, LoomModel.prototype, methods);
    Model.prototype = prototype;
    return Model;
}


/*
 * MODELS DEFINED BELOW
 */


var ShopModelMappings = {
    giraffeImages: [
        "images.cover",
        "images.logo",
        "images.card"
    ],
    relatedCollections: {
        "products": "ShopProductModel"
    },
    relatedObjects: {
        "user": "UserModel"
    }
};
var ShopModel = createModel("ShopModel", ShopModelMappings, {
    createProduct: function (title, description) {
        var path = this.full_resource + "/products";
        var data = {
            "title": title,
            "description": description
        };
        var promise = this._api.post(path, data);
        return LoomModel.fromURL("ShopProductModel", this._api, promise);
    },
    getNav: function () {
        this._api.get(this.nav);
    }
});

var ShopProductModelMappings = {
    relatedCollections: {
        "stock": "ShopProductStockModel"
    },
    relatedObjects: {
        "shop": "ShopModel"
    },
    dates: [
        "date_added"
    ]
};
var ShopProductModel = createModel("ShopProductModel",
        ShopProductModelMappings, {
    getStockNav: function () {
        var path = this.stock_nav;
        var promise = this._api.get(path);
        return promise;
    }
});


var ShopProductStockModelMappings = {
    relatedObjects: {
        "product": "ShopProductModel",
        "attributes": "ShopStockAttributesModel"
    },
    dates: [
        "date_added"
    ]
};
var ShopProductStockModel = createModel("ShopProductStockModel",
        ShopProductStockModelMappings);


var ShopStockAttributesModelMappings = {
};
var ShopStockAttributesModel = createModel("ShopStockAttributesModel",
        ShopStockAttributesModelMappings);


var SubmissionModelMappings = {
    relatedCollections: {
        "preorders": null,
        "likes": null,
        "comments": null,
        "votes": null
    },
    relatedObjects: {
        "artist": "UserModel",
        "design": null
    },
    dates: [
        "voting_end",
        "pub_date",
        "approved_date"
    ]
};
var SubmissionModel = createModel("SubmissionModel", SubmissionModelMappings, {
    refresh: function () {
        return this._api.getSub(this.id);
    }
});


var UserModelMappings = {
    relatedCollections: {
        "preorders": "PreorderModel",
        "sales": "SaleModel",
        "products": null,
        "activities": null,
        "friends": "UserModel",
        "followers": "UserModel",
        "designs": "DesignModel",
        "submissions": "SubmissionModel"
    },
    relatedObjects: {
        "profile": null,
        "account": "AccountModel"
    }
};
var UserModel = createModel("UserModel", UserModelMappings, {
    refresh: function () {
        return this._api.getUser(this.id);
    }
});

var CreditCardMappings = {
    relatedObjects: {
        "user": "UserModel"
    }
};
var CreditCard = createModel("CreditCard", CreditCardMappings, {
    delete_: function () {
        var path = "/users/" + this.user_id + "/account/credit-cards/" + this.id;
        return this._api.delete_(path);
    }
});

var AccountModelMappings = {
    relatedCollections: {
        "addresses": "UserAddress",
        "credit_cards": "CreditCard"
    },
    relatedObjects: {
        "user": "UserModel"
    }
};
var AccountModel = createModel("AccountModel", AccountModelMappings, {
    getCreditCard: function (id) {
        var path = "/users/" + this.user_id + "/account/credit-cards/" + id;
        var promise = this._api.get(path);
        return LoomModel.fromObject(CreditCard, this._api, promise);
    },
    createCreditCard: function (nickname, ccNum, ccExpireMonth, ccExpireYear,
            firstName, lastName, billingAddrId) {
        
        var path = "/users/" + this.user_id + "/account/credit-cards";
        var data = {
            "cc_num": ccNum,
            "cc_expire_month": ccExpireMonth,
            "cc_expire_year": ccExpireYear,
            "first_name": firstName,
            "last_name": lastName,
            "nickname": nickname,
            "billing_address_id": billingAddrId
        };
        var promise = this._api.post(path, data);
        return LoomModel.fromURL(CreditCard, this._api, promise);
    }
});


var UserAddressMappings = {
    relatedObjects: {
        "user": "UserModel"
    }
};
var UserAddress = createModel("UserAddress", UserAddressMappings, {});


var DesignModelMappings = {
    relatedCollections: {
        "products": null
    },
    relatedObjects: {
        "submission": "SubmissionModel"
    }
};
var DesignModel = createModel("DesignModel", DesignModelMappings, {});

var PreorderModelMappings = {
    relatedObjects: {
        "user": "UserModel",
        "submission": "SubmissionModel"
    },
    dates: [
        "created",
        "when_last_state"
    ]
};
var PreorderModel = createModel("PreorderModel", PreorderModelMappings, {
});

var SubPromotionModelMappings = {
    relatedObjects: {
        "promoter": "UserModel",
        "submission": "SubmissionModel",
        "preorder": "PreorderModel"
    }
};
var SubPromotionModel = createModel("SubPromotionModel", SubPromotionModelMappings, {
});

var SaleModelMappings = {
};
var SaleModel = createModel("SaleModel", SaleModelMappings, {
});




function endsWith(target, suffix) {
    var index = target.indexOf(suffix);
    if(index === -1) {
        return false;
    }
    return index + suffix.length === target.length;
}

/*
 * token is the api consumer
 * 
 * token secret is the api consumer secret
 * 
 * badCookieCallback - will be called if they have a loom cookie, but it turns
 *     out to be invalid.  this can happen if people log into different
 *     environments (dev, prod, staging) and try to jump back and forth
 *     
 * fbSuccessCallback
 * 
 * badSyncCallback - called when someone performs an operation that requires
 *     authorization.  this is to catch when a user is logged in through gza
 *     but doesn't have all the cookies required to log in through loom.
 *     they'll still end up making a request they shouldn't be allowed to make
 *     through the UI, but we need to be able to trigger some kind of logout
 *     or login action
 *     
 *     this is slightly different from badCookieCallback in that 
 *     badCookieCallback is designed primarily for handling wrong environments,
 *     while this is designed to handle if we're somehow showing we're logged
 *     in on gza, but not in loom
 *     
 * djangoIsLoggedIn - used as a hint of what actions to take if we find out
 *     we can't do a cookie login.  being logged in in django, but unable
 *     to cookie login will call badCookieCallback
 */
var Loom = function (token, secret, badCookieCallback, fbSuccessCallback,
        badSyncCallback, djangoIsLoggedIn) {

    this.token = token;
    this.secret = secret;
    this.username = null;
    this.userToken = null;
    this.badSyncCallback = badSyncCallback;
    this._defaultIterPage = 10;

    var cookieDomain;

    if(endsWith(document.location.hostname, 'threadless.com')) {
        cookieDomain = '.threadless.com';
    } else {
        cookieDomain = document.location.hostname;
    }

    this._commonCookieOpts = {expires: 1000, domain: cookieDomain,
            path: "/", secure: true};


    /*
     * see the comments for getPreference and loom's /users/<username>/account
     * endpoint
     */
    this._cachedPreferences = null;

    /*
     * temporarily disable this, because this looks at a loom api token cookie.
     * this cookie can become invalid if a user changes his password, and we've
     * had reports of a minority of users trying to score a ton of designs,
     * but their scores not showing up.  this is probably why...because their
     * loom token cookie is invalid, but they're still logged in through
     * gza
     */
    //this.loggedIn = this.checkIfLoggedIn();
    this.loggedIn = false;

    var ie = ieVersion();
    this._shouldTunnel = ie && ie <= 9;
    this._apiUrl = !ie || ie > 9 ? API_URL : API_IE_URL;

    /*
     * iOS devices like iPhone and iPad disable setting of 3rd party cookies
     * by default, which makes things like widget embedding difficult because
     * they can never login in (they can never set a login cookie).  
     * 
     * we're detecting if we can set a cookie, so we can choose to do something
     * else in the code that uses loom.js
     */
    this.setCookie("can-set-cookie", true, this._commonCookieOpts);
    this.canSetCookies = this.getCookie("can-set-cookie");

    this.logInPromise = this.tryAutoLogin(badCookieCallback, fbSuccessCallback,
            djangoIsLoggedIn);
};

Loom.prototype = {
    /*
     * tries to auto-login with our django cookie.  if that can't happen,
     * we hook up a subscription to the facebook login event
     */
    tryAutoLogin: function (badCookieCallback, fbSuccessCallback, djangoIsLoggedIn) {
        var loomSelf = this;
        var cookieLoginPromise = this.loginWithCookie();
        var deferred = $.Deferred();

        cookieLoginPromise.done(function (user) {
            deferred.resolve("gza", user);
        });

        cookieLoginPromise.fail(function (reason) {
            if ((reason === "bad_cookie" || djangoIsLoggedIn) && badCookieCallback) {
                badCookieCallback(loomSelf, deferred);
            } else {

                FB.init({
                    appId: FACEBOOK_APP_ID,
                    status: true, // check login status
                    cookie: true, // enable cookies to allow the server to access the session
                    xfbml: true  // parse XFBML
                });

                FB.Event.subscribe("auth.login", function (authResp) {
                    if (authResp.status === "connected") {
                        FB.api("/me", function (meResp) {
                            var fbToken = authResp.authResponse.accessToken;
                            var fbId = authResp.authResponse.userID;
                            var fbEmail = meResp.email;

                            var fbPromise = loomSelf.loginWithFacebook(fbToken,
                                    fbId, fbEmail);

                            if (fbSuccessCallback) {
                                fbPromise.done($.proxy(fbSuccessCallback, window));
                            }
                        });
                    }
                });
                deferred.reject();
            }
        });
        
        var promise = deferred.promise();
        return promise;
    },

    /*
     * logs in a user. this handles setting all internal state to persist
     * login on the page. returns a promise that you should .then() on to do
     * other api functions that require being logged in
     * 
     * if you already have an api token available to you, you can set it in
     * the Loom constructor, and avoid having to do a login before you make
     * other calls
     */
    login: function (username, password) {
        var loginPromise = this.post("/login", {username: username,
            password: password});

        return loginPromise.then($.proxy(this._loginHandler, this));
    },

    /*
     * logs you out as best as it can.  removes facebook connection cookies,
     * removes loom cookies, removes gza cookies
     */
    logout: function () {
        this.removeCookie("login");

        /*
         * we actually can't remove this cookie because it's httponly
         */
        //Cookies.remove("sessionid", {path: "/"});
    },

    /*
     * logs us into facebook.  this must be embedded in facebook's crazy
     * authentication handler code
     */
    loginWithFacebook: function (fbToken, fbId, fbEmail) {
        var data = {
            facebook_user_id: fbId,
            facebook_email: fbEmail,
            facebook_access_token: fbToken
        };
        var promise = this.post("/auth/facebook", data);
        return promise.then($.proxy(this._loginHandler, this));
    },
    

    /*
     * looks for the threadless website cookies with which to generate a valid
     * loom api user token
     */
    loginWithCookie: function () {
        var promise = null;
        var self = this;
        var deferred = $.Deferred();
        /*
         * if we're logged in already (from a loom cookie), do nothing really,
         * but return a resolved promise so other code waiting for login to
         * complete works as normal.
         * 
         * this should currently never be true because we've disabled the
         * this.loggedIn = self.checkIfLoggedIn() code in the constructor
         */
        if (this.loggedIn) {
            deferred.resolve();
            return deferred.promise();
        }

        /*
         * fail the login and delete the loom cookie if we don't have gza
         * cookies
         */
        var data = {};
        promise = deferred.promise();

        var cookieLoginPromise = this.post("/cookie-login", data);
        cookieLoginPromise.done(function (data) {
            var user = self._loginHandler(data);
            deferred.resolve(user);
        });
        cookieLoginPromise.fail(function () {
            deferred.reject("bad_cookie");
        });
        
    

        return promise;
    },

    checkIfLoggedIn: function () {
        var data = this.getCookie("login");
        var loggedIn = false;

        if (!isUndefined(data)) {
            this.username = data.username;
            this.userToken = data.userToken;
            loggedIn = true;
        }
        return loggedIn;
    },

    /*
     * gets a preference from /users/<username>/account.  returns a promise to
     * the request that will fetch the data and walk to the preference.
     * 
     * notice that we're doing client-side caching of the preferences.  we do
     * this because loom is not yet hooked up to the preference saving,
     * because if it was, we could just clear the preferences cache on save.
     * 
     * but we also don't want *no* caching at all, because we may be checking
     * for preferences constantly...for example, in the case of the scoring
     * feed, where someone is scoring a lot of 5s
     */
    getPreference: function (name) {
        name = name.toLowerCase();
        var deferred = $.Deferred();
        var promise = deferred.promise();
        var loomSelf = this;

        if (this._cachedPreferences) {
            deferred.resolve(this._cachedPreferences);

            promise = promise.then(function (prefs) {
                var value = walkObject(prefs, name);
                return value;
            });
        } else {
            promise = this.getAccount("@" + this.username);
            promise = promise.then(function (account) {
                var prefs = account.preferences;
                loomSelf._cachedPreferences = prefs;

                var value = walkObject(prefs, name);
                return value;
            });
        }

        return promise;
    },

    createUser: function (username, password, email) {
        var path = "/users";
        var data = {
            "username": username,
            "password": password,
            "email": email
        };
        var promise = this.post(path, data);
        return LoomModel.fromURL(UserModel, this, promise);
    },

    getAccount: function (user) {
        var userId = _toId(user);
        var path = "/users/" + userId + "/account";
        return this.get(path);
    },

    getChallenges: function (page, perPage, options) {
        return this.get("/challenges", composeOptions(page, perPage, options));
    },

    getChallengeSubs: function (chalId, page, perPage, options) {
        var path = "/challenges/" + chalId + "/submissions";
        options = composeOptions(page, perPage, options);
        var promise = this.get(path, options);
        return LoomModel.fromCollection(SubmissionModel, this, promise);
    },

    getThreadlessSubs: function (page, perPage, options) {
        var path = "/submissions";
        options = composeOptions(page, perPage, options);
        var promise = this.get(path, options);
        return LoomModel.fromCollection(SubmissionModel, this, promise);
    },

    getSub: function (subIdOrSlug) {
        var path = "/submissions/" + subIdOrSlug;
        var promise = this.get(path);
        return LoomModel.fromObject(SubmissionModel, this, promise);
    },

    getEmbedCode: function (subIdOrSlug, width) {
        var path = "/submissions/" + subIdOrSlug + "/embed";
        return this.get(path, {"width": width});
    },

    getSetting: function (name, def) {
        var path = "/settings/" + name;
        return this.get(path, {"default": JSON.stringify(def)});
    },
    
    chat: function (room, message, args) {
        var path = "/hipchat-rooms/" + room + "/messages";
        var data = {
            "message": message
        };
        $.extend(data, args);
        return this.post(path, data);
    },

    getActivities: function (userId, page, perPage) {
        var path = "/users/" + userId + "/activites";
        return this.get(path, {page: page, per_page: perPage});
    },

    getFacebookFriends: function (user, page, perPage) {
        var path = "/friends/facebook";
        return this.get(path, {page: page, per_page: perPage});
    },

    getColorBuckets: function (page, perPage) {
        var path = "/color-buckets";
        return this.get(path, {page: page, per_page: perPage});
    },

    /*
     * paymentData should be an object like this:
     * 
     * {
     *     "cc_num": "4111111111111111",
     *     "cc_expire_month": "08",
     *     "cc_expire_year": "18",
     *     "cc_cvv": "123",
     *     "first_name": "Andrew",
     *     "last_name": "Moffat",
     *     "billing_address1": "1260 W Madison St",
     *     "billing_address2": "",
     *     "city": "Chicago",
     *     "country": "US",
     *     "postal_code": "60607",
     *     "state": "IL",
     *     "shirt_style": "girly",
     *     "shirt_size": "l",
     *     "save": false,
     * }
     */
    createPreorder: function (sub, paymentData) {
        var id = _toId(sub);
        var path = "/submissions/" + id + "/preorders";
        var promise = this.post(path, paymentData);
        return LoomModel.fromURL(PreorderModel, this, promise);
    },

    /*
     * cancels the preorder made by the current user, on this sub
     */
    cancelMyPreorder: function (sub) {
        var id = _toId(sub);
        var path = "/submissions/" + id + "/preorders/my";
        return this.delete_(path);
    },

    scoreSub: function (sub, score) {
        var data = {
            score: score
        };
        var id = _toId(sub);
        var path = "/submissions/" + id + "/votes";
        return this.post(path, data);
    },

    getPromoCode: function (subIdOrSlug, promoCode) {
        var path = "/submissions/" + subIdOrSlug + "/promotions/" + promoCode;
        var promise = this.get(path);
        return LoomModel.fromObject(SubPromotionModel, this, promise);
    },

    getVotes: function (subIdOrSlug, page, perPage, options) {
        var path = "/submissions/" + subIdOrSlug + "/votes";
        return this.get(path, composeOptions(page, perPage, options));
    },


    likeSub: function (subIdOrSlug) {
        var data = {"source": "web"};
        var path = "/submissions/" + subIdOrSlug + "/likes";
        return this.post(path, data);
    },

    getLikes: function (subIdOrSlug, page, perPage, options) {
        var path = "/submissions/" + subIdOrSlug + "/likes";
        return this.get(path, composeOptions(page, perPage, options));
    },

    sendEmail: function (fromAddr, toAddr, templateId, params, fromDisk) {
        if (isUndefined(fromDisk)) {
            fromDisk = false;
        }

        var path = "/emails";
        var data = {
            "from_addr": fromAddr,
            "to_addr": toAddr,
            "template_slug": templateId,
            "params": params,
            "from_disk": fromDisk
        };
        return this.post(path, data);
    },


    follow: function (user) {
        var friendId = null;
        if (typeof user === "number"){
            friendId = user;
        } else {
            friendId = _toId(user);
        }

        var path = "/users/@" + this.username + "/friends";
        var data = {
            user: friendId
        };
        return this.post(path, data);
    },

    unfollow: function (user) {
        var friendId = null;
        if (typeof user === "number"){
            friendId = user;
        } else {
            friendId = _toId(user);
        }

        var path = "/users/@" + this.username + "/friends/" + friendId;
        return this.delete_(path);
    },

    createShop: function (slug, username) {
        var path = "/shops";
        var data = {
            name: slug
        };
        if (!isUndefined(username)) {
            data.username = username;
        }
        var promise = this.post(path, data);
        return LoomModel.fromURL(ShopModel, this, promise);
    },

    createArtistStockAttributes: function (category, size,
        style, dropshipColorSlug, defaultPrice, weight,
        assetCategory) {

        var path = "/artist-shop-stock-attributes";
        var data = {
            category: category,
            size: size,
            style: style,
            default_price: defaultPrice,
            weight: weight,
            asset_category: assetCategory
        };
        var promise = this.post(path, data);
        return LoomModel.fromURL(ShopStockAttributesModel, this, promise);
    },

    getArtistStockAttributes: function (category, size, style, dropshipColorSlug) {
        var path = "/artist-shop-stock-attributes";
        path = path+"/"+category+"/"+style+"/"+dropshipColorSlug+"/"+size;
        var promise = this.get(path);
        return LoomModel.fromObject(ShopStockAttributesModel, this, promise);
    },

    createArtistShopOverlay: function (attrs, width, x, y, image, name, type) {
        var path = "/artist-shop-overlays";

        var data = {
            attrs: attrs,
            width: width,
            x: x,
            y: y,
            overlay: image,
            name: name,
            type: type
        };
        var promise = this.post(path, data);
        return promise;
    },

    setPrinterInputSize: function (category, size, style, color, width, height) {
        var path = "/printer-inputs";
        var data = {
            "category_slug": category,
            "size_slug": size,
            "style_slug": style,
            "dropship_color_slug": color,
            "printer_input": {
                "width": width,
                "height": height
            }
        };
        var promise = this.post(path, data);
        return promise;
    },

    getShop: function (shopIdOrSlug) {
        var path = "/shops/" + shopIdOrSlug;
        var promise = this.get(path);
        return LoomModel.fromObject(ShopModel, this, promise);
    },

    getShopNav: function (shopIdOrSlug) {
        var path = joinURLParts("shops", shopIdOrSlug, "nav");
        var promise = this.get(path);
        return promise;
    },

    getShopProduct: function (shopIdOrSlug, prodIdOrSlug) {
        var path = joinURLParts("shops", shopIdOrSlug, "products", prodIdOrSlug);
        var promise = this.get(path);
        return LoomModel.fromObject(ShopProductModel, this, promise);
    },

    getUser: function (user) {
        var userId = _toId(user);
        var path = "/users/" + userId;
        var promise = this.get(path);
        return LoomModel.fromObject(UserModel, this, promise);
    },

    resetPassword: function (email) {
        var path = "/users-by-email/" + email + "/account";
        var data = {
            "password": null
        };
        return this.post(path, data);
    },

    getSelf: function () {
        var loomSelf = this;
        var promise = this.logInPromise.then(function () {
            var path = "/users/@" + loomSelf.username;
            return LoomModel.fromObject(UserModel, this, loomSelf.get(path));
        });
        return promise;
    },

    /*
     * the following 4 methods are for low-level loom api manipulation. you
     * don't want to use these. instead, write a wrapper method, like
     * getVotes, or scoreSub, or something, instead of using these directly
     */
    get: function (path, options) {
        if (!isUndefined(options) && !$.isEmptyObject(options)) {
            path = this._addParamsToURL(path, options);
        }
        return this._call("GET", path);
    },

    post: function (path, data) {
        return this._call("POST", path, data);
    },

    put: function (path, data) {
        var fn = this._call;
        if (this._shouldTunnel) {
            fn = this._tunnelRequestToPOST;
        }
        return fn.call(this, "PUT", path, data);
    },

    delete_: function (path) {
        var fn = this._call;
        if (this._shouldTunnel) {
            fn = this._tunnelRequestToPOST;
        }
        return fn.call(this, "DELETE", path, null);
    },

    _tunnelRequestToPOST: function (method, path, data) {
        var wrappedData = {
            _tunnel_method: method,
            _tunnel_data: data
        };
        return this._call("POST", path, wrappedData);
    },


    setCookie: function (name, value, options) {
        value = JSON.stringify(value);
        return Cookies.set(this._prefixCookie(name), value, options);
    },

    getCookie: function (name) {
        var value = Cookies.get(this._prefixCookie(name));
        if (!isUndefined(value)) {
            value = JSON.parse(value);
        }
        return value;
    },

    removeCookie: function (name) {
        return Cookies.remove(this._prefixCookie(name), this._commonCookieOpts);
    },

    _prefixCookie: function (name) {
        var prefix = "loom-";
        var fullName = prefix + name;
        return fullName;
    },

    _loginHandler: function (data) {
        this.loggedIn = true;
        this.username = data.username;
        this.userToken = data.api_token;

        this.setCookie("login", {
            username: this.username,
            userToken: this.userToken
        }, this._commonCookieOpts);

        return LoomModel.fromResolvedObject(UserModel, this, data);
    },

    _addParamsToURL: function (url, params) {
        params = _preprocessQsParams(params);
        var qs = $.param(params);

        var fullUrl = url;
        if (url.indexOf("?") > -1) {
            fullUrl += qs;
        } else {
            fullUrl += "?" + qs;
        }
        return fullUrl;
    },

    _augmentHeadersWithAuth: function (method, path, headers, data, token,
                secret, username, userToken) {

        var nowDateHeader = new Date().toUTCString();
        var date = headers.Date || nowDateHeader;

        var contentMD5 = CryptoJS.MD5(data || "").toString(CryptoJS.enc.Base64);

        var toSign = method + "\n" + contentMD5 + "\n" + date + "\n" + path;
        var signature = CryptoJS.HmacSHA256(toSign, secret).toString(CryptoJS.enc.Base64);

        headers["Content-MD5"] = contentMD5;
        headers["X-Date"] = date;
        headers["X-Authorization"] = "Threadless " + JSON.stringify({
            token: token,
            signature: signature,
            username: username,
            user_token: userToken
        });

        return headers;
    },
    
    _call: function (method, path, data) {
        path = fullURLToPath(path);

        var pathToSign = path;
        if (this._shouldTunnel) {
            pathToSign = path.replace(/\/loom/, "");
        }

        if (!isUndefined(data)) {
            data = JSON.stringify(data);
        }

        var headers = {
            "Content-Type": "application/json"
        };
        if (this._shouldTunnel) {
            headers["X-IE-Tunnelling"] = "1";
        }
        this._augmentHeadersWithAuth(method, pathToSign, headers, data,
                this.token, this.secret, this.username, this.userToken);


        var endpoint = joinURLToPath(this._apiUrl, path);

        var ajaxOpts = {
            type: method,
            data: data,
            headers: headers,
            cache: false,
            xhrFields: {
                withCredentials: true
           }
        };

        var promise = $.ajax(endpoint, ajaxOpts);
        
        var loomSelf = this;
        promise.fail(function (data) {
            if (data.responseJSON && data.responseJSON.error_code === 1 && loomSelf.badSyncCallback) {
                return loomSelf.badSyncCallback(loomSelf);
            }
        });
        
        return promise;
    }
};


Loom.$ = $;

Loom.GiraffeImage = GiraffeImage;

Loom.Cookies = Cookies;

return Loom;

})(ourJQuery);

return Loom;

})();
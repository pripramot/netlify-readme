"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["marketing-readme"],{59753:(e,t,r)=>{function n(){if(!(this instanceof n))return new n;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}r.d(t,{f:()=>O,S:()=>E,on:()=>F});var i,o=window.document.documentElement,s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector;n.prototype.matchesSelector=function(e,t){return s.call(e,t)},n.prototype.querySelectorAll=function(e,t){return t.querySelectorAll(e)},n.prototype.indexes=[];var a=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;n.prototype.indexes.push({name:"ID",selector:function(e){var t;if(t=e.match(a))return t[0].slice(1)},element:function(e){if(e.id)return[e.id]}});var u=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;n.prototype.indexes.push({name:"CLASS",selector:function(e){var t;if(t=e.match(u))return t[0].slice(1)},element:function(e){var t=e.className;if(t){if("string"==typeof t)return t.split(/\s/);if("object"==typeof t&&"baseVal"in t)return t.baseVal.split(/\s/)}}});var l=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;n.prototype.indexes.push({name:"TAG",selector:function(e){var t;if(t=e.match(l))return t[0].toUpperCase()},element:function(e){return[e.nodeName.toUpperCase()]}}),n.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}},i="function"==typeof window.Map?window.Map:function(){function e(){this.map={}}return e.prototype.get=function(e){return this.map[e+" "]},e.prototype.set=function(e,t){this.map[e+" "]=t},e}();var c=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function d(e,t){var r,n,i,o,s,a,u=(e=e.slice(0).concat(e.default)).length,l=t,d=[];do if(c.exec(""),(i=c.exec(l))&&(l=i[3],i[2]||!l)){for(r=0;r<u;r++)if(s=(a=e[r]).selector(i[1])){for(n=d.length,o=!1;n--;)if(d[n].index===a&&d[n].key===s){o=!0;break}o||d.push({index:a,key:s});break}}while(i)return d}function f(e,t){return e.id-t.id}n.prototype.logDefaultIndexUsed=function(){},n.prototype.add=function(e,t){var r,n,o,s,a,u,l,c,f=this.activeIndexes,p=this.selectors,h=this.selectorObjects;if("string"==typeof e){for(n=0,h[(r={id:this.uid++,selector:e,data:t}).id]=r,l=d(this.indexes,e);n<l.length;n++)s=(c=l[n]).key,(a=function(e,t){var r,n,i;for(r=0,n=e.length;r<n;r++)if(i=e[r],t.isPrototypeOf(i))return i}(f,o=c.index))||((a=Object.create(o)).map=new i,f.push(a)),o===this.indexes.default&&this.logDefaultIndexUsed(r),(u=a.map.get(s))||(u=[],a.map.set(s,u)),u.push(r);this.size++,p.push(e)}},n.prototype.remove=function(e,t){if("string"==typeof e){var r,n,i,o,s,a,u,l,c=this.activeIndexes,f=this.selectors=[],p=this.selectorObjects,h={},m=1==arguments.length;for(i=0,r=d(this.indexes,e);i<r.length;i++)for(n=r[i],o=c.length;o--;)if(a=c[o],n.index.isPrototypeOf(a)){if(u=a.map.get(n.key))for(s=u.length;s--;)(l=u[s]).selector===e&&(m||l.data===t)&&(u.splice(s,1),h[l.id]=!0);break}for(i in h)delete p[i],this.size--;for(i in p)f.push(p[i].selector)}},n.prototype.queryAll=function(e){if(!this.selectors.length)return[];var t,r,n,i,o,s,a,u,l={},c=[],d=this.querySelectorAll(this.selectors.join(", "),e);for(t=0,n=d.length;t<n;t++)for(r=0,o=d[t],i=(s=this.matches(o)).length;r<i;r++)l[(u=s[r]).id]?a=l[u.id]:(a={id:u.id,selector:u.selector,data:u.data,elements:[]},l[u.id]=a,c.push(a)),a.elements.push(o);return c.sort(f)},n.prototype.matches=function(e){if(!e)return[];var t,r,n,i,o,s,a,u,l,c,d,p=this.activeIndexes,h={},m=[];for(t=0,i=p.length;t<i;t++)if(u=(a=p[t]).element(e)){for(r=0,o=u.length;r<o;r++)if(l=a.map.get(u[r]))for(n=0,s=l.length;n<s;n++)!h[d=(c=l[n]).id]&&this.matchesSelector(e,c.selector)&&(h[d]=!0,m.push(c))}return m.sort(f)};var p={},h={},m=new WeakMap,g=new WeakMap,v=new WeakMap,b=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function y(e,t,r){var n=e[t];return e[t]=function(){return r.apply(e,arguments),n.apply(e,arguments)},e}function w(){m.set(this,!0)}function x(){m.set(this,!0),g.set(this,!0)}function A(){return v.get(this)||null}function k(e,t){b&&Object.defineProperty(e,"currentTarget",{configurable:!0,enumerable:!0,get:t||b.get})}function S(e){if(function(e){try{return e.eventPhase,!0}catch(e){return!1}}(e)){var t=(1===e.eventPhase?h:p)[e.type];if(t){var r=function(e,t,r){var n=[],i=t;do{if(1!==i.nodeType)break;var o=e.matches(i);if(o.length){var s={node:i,observers:o};r?n.unshift(s):n.push(s)}}while(i=i.parentElement)return n}(t,e.target,1===e.eventPhase);if(r.length){y(e,"stopPropagation",w),y(e,"stopImmediatePropagation",x),k(e,A);for(var n=0,i=r.length;n<i&&!m.get(e);n++){var o=r[n];v.set(e,o.node);for(var s=0,a=o.observers.length;s<a&&!g.get(e);s++)o.observers[s].data.call(o.node,e)}v.delete(e),k(e)}}}}function F(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=!!i.capture,s=o?h:p,a=s[e];a||(a=new n,s[e]=a,document.addEventListener(e,S,o)),a.add(t,r)}function E(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=!!n.capture,o=i?h:p,s=o[e];s&&(s.remove(t,r),s.size||(delete o[e],document.removeEventListener(e,S,i)))}function O(e,t,r){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:r}))}},14597:(e,t,r)=>{var n=r(36071),i=r(59753);let o="data-skew-x",s="data-skew-y",a="data-skew-target-x",u="data-skew-target-y";(0,n.N7)(".js-readme-rotate",e=>{e.addEventListener("mousemove",e=>{let t=e.target;if(null===t)return;let r=t.getBoundingClientRect(),n=e.x-r.left,i=e.y-r.top,o=n/r.width,s=i/r.height,l=(s-.5)*4,c=(o-.5)*4;l=Math.round((l+Number.EPSILON)*1e3)/1e3,c=Math.round((c+Number.EPSILON)*1e3)/1e3,t.setAttribute(a,`${l}`),t.setAttribute(u,`${c}`)}),e.addEventListener("mouseleave",e=>{let t=e.target;null!==t&&(t.setAttribute(a,"0"),t.setAttribute(u,"0"))}),e.addEventListener("mouseenter",()=>{"true"!==e.getAttribute("data-animation-is-running")&&(e.setAttribute("data-animation-is-running","true"),window.requestAnimationFrame(()=>(function e(t){let r=function(e){let t=e.getAttribute(o)||"0",r=e.getAttribute(s)||"0",n=e.getAttribute(a)||"0",i=e.getAttribute(u)||"0";return{x:parseFloat(t),y:parseFloat(r),targetX:parseFloat(n),targetY:parseFloat(i)}}(t);if(0===r.x&&0===r.y&&0===r.targetX&&0===r.targetY){t.setAttribute("data-animation-is-running","false");return}let n=r.x+(r.targetX-r.x)*.1,i=r.y+(r.targetY-r.y)*.1;(n=Math.round((n+Number.EPSILON)*1e3)/1e3)*n<.005&&(n=0),(i=Math.round((i+Number.EPSILON)*1e3)/1e3)*i<.005&&(i=0),t.setAttribute(o,`${n}`),t.setAttribute(s,`${i}`),t.style.transform=`perspective(1000px) rotateX(${-n}deg) rotateY(${i}deg)`,window.requestAnimationFrame(()=>e(t))})(e)))})}),(0,n.N7)(".readme-story-body aside p",e=>{if(null==e.textContent)return;let t=document.createElement("a");t.classList.add("readme-story-blockquote-tweet");let r=`\u{201C}${e.textContent}\u{201D}`;t.href=`https://twitter.com/intent/tweet?url=${encodeURI(window.location.href)}&text=${encodeURI(r)}`,t.setAttribute("aria-label",`Tweet: ${e.textContent}`),t.setAttribute("target","_blank"),t.setAttribute("rel","noopener"),e.appendChild(t)}),(0,i.on)("click",".js-readme-story-body-expand",function(e){e.preventDefault();let t=e.currentTarget,r=t.closest(".readme-story-body-collapsed");r&&r.classList.remove("readme-story-body-collapsed")}),(0,i.on)("submit",".js-newsletter-signup-form",()=>{document.querySelector(".js-newsletter-flash").hidden=!1,document.querySelector(".js-newsletter-email-input").value=""})}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_github_selector-observer_dist_index_esm_js"],()=>t(14597)),e.O()}]);
//# sourceMappingURL=marketing-readme-e980608cf40d.js.map
(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[691],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function i(t,r,a){return o()?(e.exports=i=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=i=function(e,t,r){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return r&&n(i,r.prototype),i},e.exports.__esModule=!0,e.exports.default=e.exports),i.apply(null,arguments)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),i=r(379),a=r(8206);e.exports=function(e){return n(e)||o(e)||i(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},2102:function(e,t,r){var n=r(2632);e.exports={MDXRenderer:n}},2632:function(e,t,r){var n=r(9100),o=r(319),i=r(9713),a=r(7316),c=["scope","children"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=r(7294),f=r(4983).mdx,p=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,i=a(e,c),u=p(t),d=l.useMemo((function(){if(!r)return null;var e=s({React:l,mdx:f},u),t=Object.keys(e),i=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(i)))}),[r,t]);return l.createElement(d,s({},i))}},238:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Oe}});var n=r(7294);r(4694).vc.autoAddCss=!1;var o,i,a,c,u=function(e){var t=e.children;return n.createElement("div",{className:"mx-10 max-w-screen-lg lg:m-auto"},n.createElement("main",{id:"main-content"},t))},s=r(1597),l=function(){return n.createElement("footer",null,n.createElement("div",{className:"flex justify-center my-8"},n.createElement(s.Link,{className:"text-lg px-4 m-3",to:"/","aria-label":"home"},"home"),n.createElement(s.Link,{className:"text-lg px-4 m-3",to:"https://github.com/2ndr9/2ndr9.github.io"},"source")))},f=function(){var e=(0,s.useStaticQuery)("2215800168");return n.createElement("header",{className:"border-b-2 text-center"},n.createElement("nav",{className:"py-5 overflow-x-auto whitespace-nowrap"},e.allMdx.nodes.map((function(e,t){return n.createElement(s.Link,{className:"py-5 text-lg px-4 hover:bg-gray-200",key:t,to:"/#"+e.frontmatter.sectionID},e.frontmatter.title)}))))},p=r(5697),d=r.n(p),m=r(4839),y=r.n(m),h=r(2993),b=r.n(h),v=r(6494),g=r.n(v),T="bodyAttributes",w="htmlAttributes",x="titleAttributes",O={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(O).map((function(e){return O[e]})),"charset"),A="cssText",C="href",S="http-equiv",j="innerHTML",k="itemprop",P="name",M="property",I="rel",_="src",L="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",D="defer",B="encodeSpecialCharacters",H="onChangeClientState",q="titleTemplate",F=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),Y=[O.NOSCRIPT,O.SCRIPT,O.STYLE],U="data-react-helmet",z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},X=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},$=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=re(e,O.TITLE),r=re(e,q);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=re(e,R);return t||n||void 0},J=function(e){return re(e,H)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return V({},e,t)}),{})},ee=function(e,t){return t.filter((function(e){return void 0!==e[O.BASE]})).map((function(e){return e[O.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},te=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ce("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||r===I&&"canonical"===e[r].toLowerCase()||u===I&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==j&&c!==A&&c!==k||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=g()({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},re=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},ne=(o=Date.now(),function(e){var t=Date.now();t-o>16?(o=t,e(t)):setTimeout((function(){ne(e)}),0)}),oe=function(e){return clearTimeout(e)},ie="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ne:r.g.requestAnimationFrame||ne,ae="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||oe:r.g.cancelAnimationFrame||oe,ce=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ue=null,se=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;pe(O.BODY,n),pe(O.HTML,o),fe(f,p);var d={baseTag:de(O.BASE,r),linkTags:de(O.LINK,i),metaTags:de(O.META,a),noscriptTags:de(O.NOSCRIPT,c),scriptTags:de(O.SCRIPT,s),styleTags:de(O.STYLE,l)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(y[e]=d[e].oldTags)})),t&&t(),u(e,m,y)},le=function(e){return Array.isArray(e)?e.join(""):e},fe=function(e,t){void 0!==e&&document.title!==e&&(document.title=le(e)),pe(O.TITLE,t)},pe=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(U),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(U):r.getAttribute(U)!==a.join(",")&&r.setAttribute(U,a.join(","))}},de=function(e,t){var r=document.head||document.querySelector(O.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===j)r.innerHTML=t.innerHTML;else if(n===A)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(U,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},me=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},ye=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[N[r]||r]=e[r],t}),t)},he=function(e,t,r){switch(e){case O.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(o={key:e})[U]=!0,i=ye(r,o),[n.createElement(O.TITLE,i,e)];var e,r,o,i},toString:function(){return function(e,t,r,n){var o=me(r),i=le(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Q(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Q(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case T:case w:return{toComponent:function(){return ye(t)},toString:function(){return me(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var o,i=((o={key:r})[U]=!0,o);return Object.keys(t).forEach((function(e){var r=N[e]||e;if(r===j||r===A){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),n.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===j||e===A)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+Q(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===Y.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},be=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:he(O.BASE,t,n),bodyAttributes:he(T,r,n),htmlAttributes:he(w,o,n),link:he(O.LINK,i,n),meta:he(O.META,a,n),noscript:he(O.NOSCRIPT,c,n),script:he(O.SCRIPT,u,n),style:he(O.STYLE,s,n),title:he(O.TITLE,{title:f,titleAttributes:p},n)}},ve=y()((function(e){return{baseTag:ee([C,L],e),bodyAttributes:Z(T,e),defer:re(e,D),encode:re(e,B),htmlAttributes:Z(w,e),linkTags:te(O.LINK,[I,C],e),metaTags:te(O.META,[P,E,S,M,k],e),noscriptTags:te(O.NOSCRIPT,[j],e),onChangeClientState:J(e),scriptTags:te(O.SCRIPT,[_,j],e),styleTags:te(O.STYLE,[A],e),title:G(e),titleAttributes:Z(x,e)}}),(function(e){ue&&ae(ue),e.defer?ue=ie((function(){se(e,(function(){ue=null}))})):(se(e),ue=null)}),be)((function(){return null})),ge=(i=ve,c=a=function(e){function t(){return K(this,t),$(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!b()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case O.SCRIPT:case O.NOSCRIPT:return{innerHTML:t};case O.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return V({},n,((t={})[r.type]=[].concat(n[r.type]||[],[V({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case O.TITLE:return V({},o,((t={})[n.type]=a,t.titleAttributes=V({},i),t));case O.BODY:return V({},o,{bodyAttributes:V({},i)});case O.HTML:return V({},o,{htmlAttributes:V({},i)})}return V({},o,((r={})[n.type]=V({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=V({},t);return Object.keys(e).forEach((function(t){var n;r=V({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,o={};return n.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,i=n.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[F[r]||r]=e[r],t}),t)}(W(n,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case O.LINK:case O.META:case O.NOSCRIPT:case O.SCRIPT:case O.STYLE:o=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=W(e,["children"]),o=V({},r);return t&&(o=this.mapChildrenToProps(t,o)),n.createElement(i,o)},X(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(n.Component),a.propTypes={base:d().object,bodyAttributes:d().object,children:d().oneOfType([d().arrayOf(d().node),d().node]),defaultTitle:d().string,defer:d().bool,encodeSpecialCharacters:d().bool,htmlAttributes:d().object,link:d().arrayOf(d().object),meta:d().arrayOf(d().object),noscript:d().arrayOf(d().object),onChangeClientState:d().func,script:d().arrayOf(d().object),style:d().arrayOf(d().object),title:d().string,titleAttributes:d().object,titleTemplate:d().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=be({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},c);ge.renderStatic=ge.rewind;var Te=function(e){var t=e.sectionID,r=e.title,o=e.children;return n.createElement("section",{className:"py-5 border-b-2 break-words",id:t},n.createElement("h2",{className:"text-center text-4xl mt-3 mb-5"},r),o)},we=r(2102),xe=function(e){var t=e.works;return n.createElement("ul",{className:"overflow-x-scroll flex"},t.map((function(e,t){var r=e.node.body;return n.createElement("li",{key:t,className:"mr-8 relative pb-4 flex-shrink-0 w-4/6 md:w-2/4 lg:w-2/5 prose prose-sm text-center",style:{order:t}},n.createElement(we.MDXRenderer,null,r))})))},Oe=function(e){var t=e.data,r=t.sections.edges,o=t.works.edges;return n.createElement(u,null,n.createElement(ge,null,n.createElement("html",{lang:"ja"}),n.createElement("title",null,"Riku Tsunoda's portfolio"),n.createElement("meta",{name:"description",content:"This page is top of my portfolio."})),n.createElement(f,null),r.map((function(e){var t="works"===e.node.frontmatter.sectionID?n.createElement(xe,{works:o}):n.createElement("div",{className:"prose min-w-full"},n.createElement(we.MDXRenderer,null,e.node.body));return n.createElement(Te,{sectionID:e.node.frontmatter.sectionID,title:e.node.frontmatter.title},t)})),n.createElement(l,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e2922a0c64cc64da8082.js.map
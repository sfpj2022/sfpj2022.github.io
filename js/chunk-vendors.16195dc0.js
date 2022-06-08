(self["webpackChunksfpj"]=self["webpackChunksfpj"]||[]).push([[998],{1001:function(t,e,n){"use strict";function r(t,e,n,r,i,s,o,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,{Z:function(){return r}})},9662:function(t,e,n){var r=n(614),i=n(6330),s=TypeError;t.exports=function(t){if(r(t))return t;throw s(i(t)+" is not a function")}},6077:function(t,e,n){var r=n(614),i=String,s=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw s("Can't set "+i(t)+" as a prototype")}},1223:function(t,e,n){var r=n(5112),i=n(30),s=n(3070).f,o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s(a,o,{configurable:!0,value:i(null)}),t.exports=function(t){a[o][t]=!0}},5787:function(t,e,n){var r=n(7976),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw i("Incorrect invocation")}},9670:function(t,e,n){var r=n(111),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw s(i(t)+" is not an object")}},4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var r,i,s,o=n(4019),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),f=n(648),d=n(6330),p=n(8880),m=n(8052),g=n(3070).f,v=n(7976),y=n(9518),w=n(7674),_=n(5112),b=n(9711),E=c.Int8Array,T=E&&E.prototype,C=c.Uint8ClampedArray,A=C&&C.prototype,S=E&&y(E),I=T&&y(T),k=Object.prototype,x=c.TypeError,R=_("toStringTag"),O=b("TYPED_ARRAY_TAG"),N=b("TYPED_ARRAY_CONSTRUCTOR"),D=o&&!!w&&"Opera"!==f(c.opera),L=!1,M={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},P={BigInt64Array:8,BigUint64Array:8},U=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(M,e)||h(P,e)},$=function(t){if(!l(t))return!1;var e=f(t);return h(M,e)||h(P,e)},F=function(t){if($(t))return t;throw x("Target is not a typed array")},V=function(t){if(u(t)&&(!w||v(S,t)))return t;throw x(d(t)+" is not a typed array constructor")},j=function(t,e,n,r){if(a){if(n)for(var i in M){var s=c[i];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(u){}}}I[t]&&!n||m(I,t,n?e:D&&T[t]||e,r)}},B=function(t,e,n){var r,i;if(a){if(w){if(n)for(r in M)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(s){}if(S[t]&&!n)return;try{return m(S,t,n?e:D&&S[t]||e)}catch(s){}}for(r in M)i=c[r],!i||i[t]&&!n||m(i,t,e)}};for(r in M)i=c[r],s=i&&i.prototype,s?p(s,N,i):D=!1;for(r in P)i=c[r],s=i&&i.prototype,s&&p(s,N,i);if((!D||!u(S)||S===Function.prototype)&&(S=function(){throw x("Incorrect invocation")},D))for(r in M)c[r]&&w(c[r],S);if((!D||!I||I===k)&&(I=S.prototype,D))for(r in M)c[r]&&w(c[r].prototype,I);if(D&&y(A)!==I&&w(A,I),a&&!h(I,R))for(r in L=!0,g(I,R,{get:function(){return l(this)?this[O]:void 0}}),M)c[r]&&p(c[r],O,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:D,TYPED_ARRAY_CONSTRUCTOR:N,TYPED_ARRAY_TAG:L&&O,aTypedArray:F,aTypedArrayConstructor:V,exportTypedArrayMethod:j,exportTypedArrayStaticMethod:B,isView:U,isTypedArray:$,TypedArray:S,TypedArrayPrototype:I}},1318:function(t,e,n){var r=n(5656),i=n(1400),s=n(6244),o=function(t){return function(e,n,o){var a,c=r(e),u=s(c),l=i(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},206:function(t,e,n){var r=n(1702);t.exports=r([].slice)},4326:function(t,e,n){var r=n(1702),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},648:function(t,e,n){var r=n(1694),i=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),c=Object,u="Arguments"==s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?s(e):"Object"==(r=s(e))&&i(e.callee)?"Arguments":r}},7741:function(t,e,n){var r=n(1702),i=Error,s=r("".replace),o=function(t){return String(i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=s(t,a,"");return t}},9920:function(t,e,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var r=n(9781),i=n(3070),s=n(9114);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),i=n(8880),s=n(6339),o=n(3072);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;return r(n)&&s(n,u,a),a.global?c?t[e]=n:o(e,n):(a.unsafe?t[e]&&(c=!0):delete t[e],c?t[e]=n:i(t,e,n)),t}},3072:function(t,e,n){var r=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},6833:function(t,e,n){var r=n(8113);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},5268:function(t,e,n){var r=n(4326),i=n(7854);t.exports="process"==r(i.process)},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(t,e,n){var r=n(7293),i=n(9114);t.exports=!r((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",i(1,7)),7!==t.stack)}))},2109:function(t,e,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,h,f,d,p,m=t.target,g=t.global,v=t.stat;if(l=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(g?h:m+(v?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&s(d,"sham",!0),o(l,h,d,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var r=n(4374),i=Function.prototype,s=i.apply,o=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},9974:function(t,e,n){var r=n(1702),i=n(9662),s=n(4374),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:s?o(t,e):function(){return t.apply(e,arguments)}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(t,e,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(t,e,n){var r=n(4374),i=Function.prototype,s=i.bind,o=i.call,a=r&&s.bind(o,o);t.exports=r?function(t){return t&&a(t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),i=n(614),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),i=n(7293),s=n(317);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);t.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?a(t,""):o(t)}:o},9587:function(t,e,n){var r=n(614),i=n(111),s=n(7674);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},2788:function(t,e,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},8340:function(t,e,n){var r=n(111),i=n(8880);t.exports=function(t,e){r(e)&&"cause"in e&&i(t,"cause",e.cause)}},9909:function(t,e,n){var r,i,s,o=n(8536),a=n(7854),c=n(1702),u=n(111),l=n(8880),h=n(2597),f=n(5465),d=n(6200),p=n(3501),m="Object already initialized",g=a.TypeError,v=a.WeakMap,y=function(t){return s(t)?i(t):r(t,{})},w=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(o||f.state){var _=f.state||(f.state=new v),b=c(_.get),E=c(_.has),T=c(_.set);r=function(t,e){if(E(_,t))throw new g(m);return e.facade=t,T(_,t,e),e},i=function(t){return b(_,t)||{}},s=function(t){return E(_,t)}}else{var C=d("state");p[C]=!0,r=function(t,e){if(h(t,C))throw new g(m);return e.facade=t,l(t,C,e),e},i=function(t){return h(t,C)?t[C]:{}},s=function(t){return h(t,C)}}t.exports={set:r,get:i,has:s,enforce:y,getterFor:w}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},111:function(t,e,n){var r=n(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&s(e.prototype,a(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(7293),i=n(614),s=n(2597),o=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),l=u.enforce,h=u.get,f=Object.defineProperty,d=o&&!r((function(){return 8!==f((function(){}),"length",{value:8}).length})),p=String(String).split("String"),m=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!s(t,"name")||a&&t.name!==e)&&f(t,"name",{value:e,configurable:!0}),d&&n&&s(n,"arity")&&t.length!==n.arity&&f(t,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?o&&f(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=l(t);return s(r,"source")||(r.source=p.join("string"==typeof e?e:"")),t};Function.prototype.toString=m((function(){return i(this)&&h(this).source||c(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},133:function(t,e,n){var r=n(7392),i=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,e,n){var r=n(7854),i=n(614),s=n(2788),o=r.WeakMap;t.exports=i(o)&&/native code/.test(s(o))},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},30:function(t,e,n){var r,i=n(9670),s=n(6048),o=n(748),a=n(3501),c=n(490),u=n(317),l=n(6200),h=">",f="<",d="prototype",p="script",m=l("IE_PROTO"),g=function(){},v=function(t){return f+p+h+t+f+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},w=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},_=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}_="undefined"!=typeof document?document.domain&&r?y(r):w():y(r);var t=o.length;while(t--)delete _[d][o[t]];return _()};a[m]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(g[d]=i(t),n=new g,g[d]=null,n[m]=t):n=_(),void 0===e?n:s.f(n,e)}},6048:function(t,e,n){var r=n(9781),i=n(3353),s=n(3070),o=n(9670),a=n(5656),c=n(1956);e.f=r&&!i?Object.defineProperties:function(t,e){o(t);var n,r=a(e),i=c(e),u=i.length,l=0;while(u>l)s.f(t,n=i[l++],r[n]);return t}},3070:function(t,e,n){var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(o(t),e=a(e),o(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(2597),i=n(614),s=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=s(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},1956:function(t,e,n){var r=n(6324),i=n(748);t.exports=Object.keys||function(t){return r(t,i)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(1702),i=n(9670),s=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(6916),i=n(614),s=n(111),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!s(a=r(n,t)))return a;if(i(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!s(a=r(n,t)))return a;throw o("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},2626:function(t,e,n){var r=n(3070).f;t.exports=function(t,e,n){n in t||r(t,n,{configurable:!0,get:function(){return e[n]},set:function(t){e[n]=t}})}},4488:function(t){var e=TypeError;t.exports=function(t){if(void 0==t)throw e("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),i=n(9711),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},5465:function(t,e,n){var r=n(7854),i=n(3072),s="__core-js_shared__",o=r[s]||i(s,{});t.exports=o},2309:function(t,e,n){var r=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.8",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.8/LICENSE",source:"https://github.com/zloirock/core-js"})},261:function(t,e,n){var r,i,s,o,a=n(7854),c=n(2104),u=n(9974),l=n(614),h=n(2597),f=n(7293),d=n(490),p=n(206),m=n(317),g=n(8053),v=n(6833),y=n(5268),w=a.setImmediate,_=a.clearImmediate,b=a.process,E=a.Dispatch,T=a.Function,C=a.MessageChannel,A=a.String,S=0,I={},k="onreadystatechange";try{r=a.location}catch(D){}var x=function(t){if(h(I,t)){var e=I[t];delete I[t],e()}},R=function(t){return function(){x(t)}},O=function(t){x(t.data)},N=function(t){a.postMessage(A(t),r.protocol+"//"+r.host)};w&&_||(w=function(t){g(arguments.length,1);var e=l(t)?t:T(t),n=p(arguments,1);return I[++S]=function(){c(e,void 0,n)},i(S),S},_=function(t){delete I[t]},y?i=function(t){b.nextTick(R(t))}:E&&E.now?i=function(t){E.now(R(t))}:C&&!v?(s=new C,o=s.port2,s.port1.onmessage=O,i=u(o.postMessage,o)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!f(N)?(i=N,a.addEventListener("message",O,!1)):i=k in m("script")?function(t){d.appendChild(m("script"))[k]=function(){d.removeChild(this),x(t)}}:function(t){setTimeout(R(t),0)}),t.exports={set:w,clear:_}},1400:function(t,e,n){var r=n(9303),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},5656:function(t,e,n){var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),i=Object;t.exports=function(t){return i(r(t))}},4590:function(t,e,n){var r=n(3002),i=RangeError;t.exports=function(t,e){var n=r(t);if(n%e)throw i("Wrong offset");return n}},3002:function(t,e,n){var r=n(9303),i=RangeError;t.exports=function(t){var e=r(t);if(e<0)throw i("The argument can't be less than 0");return e}},7593:function(t,e,n){var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,c=o(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var r=n(7593),i=n(2190);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},1694:function(t,e,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},1340:function(t,e,n){var r=n(648),i=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),i=n(7293);t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(t){var e=TypeError;t.exports=function(t,n){if(t<n)throw e("Not enough arguments");return t}},5112:function(t,e,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(133),c=n(3307),u=i("wks"),l=r.Symbol,h=l&&l["for"],f=c?l:l&&l.withoutSetter||o;t.exports=function(t){if(!s(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&s(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):f(e)}return u[t]}},9191:function(t,e,n){"use strict";var r=n(5005),i=n(2597),s=n(8880),o=n(7976),a=n(7674),c=n(9920),u=n(2626),l=n(9587),h=n(6277),f=n(8340),d=n(7741),p=n(2914),m=n(9781),g=n(1913);t.exports=function(t,e,n,v){var y="stackTraceLimit",w=v?2:1,_=t.split("."),b=_[_.length-1],E=r.apply(null,_);if(E){var T=E.prototype;if(!g&&i(T,"cause")&&delete T.cause,!n)return E;var C=r("Error"),A=e((function(t,e){var n=h(v?e:t,void 0),r=v?new E(t):new E;return void 0!==n&&s(r,"message",n),p&&s(r,"stack",d(r.stack,2)),this&&o(T,this)&&l(r,this,A),arguments.length>w&&f(r,arguments[w]),r}));if(A.prototype=T,"Error"!==b?a?a(A,C):c(A,C,{name:!0}):m&&y in E&&(u(A,E,y),u(A,E,"prepareStackTrace")),c(A,E),!g)try{T.name!==b&&s(T,"name",b),T.constructor=A}catch(S){}return A}}},2262:function(t,e,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(9303),a=n(1223);r({target:"Array",proto:!0},{at:function(t){var e=i(this),n=s(e),r=o(t),a=r>=0?r:n+r;return a<0||a>=n?void 0:e[a]}}),a("at")},6699:function(t,e,n){"use strict";var r=n(2109),i=n(1318).includes,s=n(7293),o=n(1223),a=s((function(){return!Array(1).includes()}));r({target:"Array",proto:!0,forced:a},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},1703:function(t,e,n){var r=n(2109),i=n(7854),s=n(2104),o=n(9191),a="WebAssembly",c=i[a],u=7!==Error("e",{cause:7}).cause,l=function(t,e){var n={};n[t]=o(t,e,u),r({global:!0,constructor:!0,arity:1,forced:u},n)},h=function(t,e){if(c&&c[t]){var n={};n[t]=o(a+"."+t,e,u),r({target:a,stat:!0,constructor:!0,arity:1,forced:u},n)}};l("Error",(function(t){return function(e){return s(t,this,arguments)}})),l("EvalError",(function(t){return function(e){return s(t,this,arguments)}})),l("RangeError",(function(t){return function(e){return s(t,this,arguments)}})),l("ReferenceError",(function(t){return function(e){return s(t,this,arguments)}})),l("SyntaxError",(function(t){return function(e){return s(t,this,arguments)}})),l("TypeError",(function(t){return function(e){return s(t,this,arguments)}})),l("URIError",(function(t){return function(e){return s(t,this,arguments)}})),h("CompileError",(function(t){return function(e){return s(t,this,arguments)}})),h("LinkError",(function(t){return function(e){return s(t,this,arguments)}})),h("RuntimeError",(function(t){return function(e){return s(t,this,arguments)}}))},4506:function(t,e,n){"use strict";var r=n(2109),i=n(1702),s=n(4488),o=n(9303),a=n(1340),c=n(7293),u=i("".charAt),l=c((function(){return"\ud842"!=="𠮷".at(-2)}));r({target:"String",proto:!0,forced:l},{at:function(t){var e=a(s(this)),n=e.length,r=o(t),i=r>=0?r:n+r;return i<0||i>=n?void 0:u(e,i)}})},8675:function(t,e,n){"use strict";var r=n(260),i=n(6244),s=n(9303),o=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",(function(t){var e=o(this),n=i(e),r=s(t),a=r>=0?r:n+r;return a<0||a>=n?void 0:e[a]}))},3462:function(t,e,n){"use strict";var r=n(7854),i=n(6916),s=n(260),o=n(6244),a=n(4590),c=n(7908),u=n(7293),l=r.RangeError,h=r.Int8Array,f=h&&h.prototype,d=f&&f.set,p=s.aTypedArray,m=s.exportTypedArrayMethod,g=!u((function(){var t=new Uint8ClampedArray(2);return i(d,t,{length:1,0:3},1),3!==t[1]})),v=g&&s.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var t=new h(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));m("set",(function(t){p(this);var e=a(arguments.length>1?arguments[1]:void 0,1),n=c(t);if(g)return i(d,this,n,e);var r=this.length,s=o(n),u=0;if(s+e>r)throw l("Wrong length");while(u<s)this[e+u]=n[u++]}),!g||v)},1091:function(t,e,n){var r=n(2109),i=n(7854),s=n(261).clear;r({global:!0,bind:!0,enumerable:!0,forced:i.clearImmediate!==s},{clearImmediate:s})},2801:function(t,e,n){"use strict";var r=n(2109),i=n(5005),s=n(9114),o=n(3070).f,a=n(2597),c=n(5787),u=n(9587),l=n(6277),h=n(3678),f=n(7741),d=n(1913),p="DOMException",m=i("Error"),g=i(p),v=function(){c(this,y);var t=arguments.length,e=l(t<1?void 0:arguments[0]),n=l(t<2?void 0:arguments[1],"Error"),r=new g(e,n),i=m(e);return i.name=p,o(r,"stack",s(1,f(i.stack,1))),u(r,this,v),r},y=v.prototype=g.prototype,w="stack"in m(p),_="stack"in new g(1,2),b=w&&!_;r({global:!0,constructor:!0,forced:d||b},{DOMException:b?v:g});var E=i(p),T=E.prototype;if(T.constructor!==E)for(var C in d||o(T,"constructor",s(1,E)),h)if(a(h,C)){var A=h[C],S=A.s;a(E,S)||o(E,S,s(6,A.c))}},4633:function(t,e,n){n(1091),n(2986)},2986:function(t,e,n){var r=n(2109),i=n(7854),s=n(261).set;r({global:!0,bind:!0,enumerable:!0,forced:i.setImmediate!==s},{setImmediate:s})},3536:function(t,e,n){"use strict";n.d(e,{BH:function(){return c},L:function(){return a},LL:function(){return _},Mn:function(){return m},ZR:function(){return w},b$:function(){return f},d:function(){return d},eu:function(){return v},hl:function(){return g},m9:function(){return A},ru:function(){return h},uI:function(){return l},vZ:function(){return T},w1:function(){return p}});n(1703),n(2801),n(6699);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return s.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function l(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function h(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function d(){return u().indexOf("Electron/")>=0}function p(){const t=u();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function m(){return u().indexOf("MSAppHost/")>=0}function g(){return"object"===typeof indexedDB}function v(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const y="FirebaseError";class w extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=y,Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?b(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new w(r,o,n);return a}}function b(t,e){return t.replace(E,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const E=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(C(n)&&C(s)){if(!T(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function C(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(t){return t&&t._delegate?t._delegate:t}},9017:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(3367),i="firebase",s="9.8.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,s,"app")},6926:function(t,e,n){"use strict";n.d(e,{ET:function(){return Eh},vr:function(){return Ch},hJ:function(){return bl},JU:function(){return El},PL:function(){return _h},ad:function(){return Al},IO:function(){return hh},r7:function(){return bh},ar:function(){return dh}});n(1703),n(8675),n(3462),n(2801),n(2262),n(4506),n(6699);var r,i=n(3367),s=n(7805),o=n(7366),a=n(3536),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function f(){}function d(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function m(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++v)}var g="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function _(t,e,n){return _=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:w,_.apply(null,arguments)}function b(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function E(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function T(){this.s=this.s,this.o=this.o}var C=0,A={};T.prototype.s=!1,T.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=C)){var t=m(this);delete A[t]}},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const S=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},I=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"===typeof t?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function k(t){t:{var e=Gn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function x(t){return Array.prototype.concat.apply([],arguments)}function R(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function O(t){return/^[\s\xa0]*$/.test(t)}var N,D=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function L(t,e){return-1!=t.indexOf(e)}function M(t,e){return t<e?-1:t>e?1:0}t:{var P=h.navigator;if(P){var U=P.userAgent;if(U){N=U;break t}}N=""}function $(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function F(t){const e={};for(const n in t)e[n]=t[n];return e}var V="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<V.length;e++)n=V[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function B(t){return B[" "](t),t}function q(t){var e=nt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}B[" "]=f;var H,z=L(N,"Opera"),G=L(N,"Trident")||L(N,"MSIE"),K=L(N,"Edge"),W=K||G,X=L(N,"Gecko")&&!(L(N.toLowerCase(),"webkit")&&!L(N,"Edge"))&&!(L(N,"Trident")||L(N,"MSIE"))&&!L(N,"Edge"),Y=L(N.toLowerCase(),"webkit")&&!L(N,"Edge");function Q(){var t=h.document;return t?t.documentMode:void 0}t:{var J="",Z=function(){var t=N;return X?/rv:([^\);]+)(\)|;)/.exec(t):K?/Edge\/([\d\.]+)/.exec(t):G?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):Y?/WebKit\/(\S+)/.exec(t):z?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Z&&(J=Z?Z[1]:""),G){var tt=Q();if(null!=tt&&tt>parseFloat(J)){H=String(tt);break t}}H=J}var et,nt={};function rt(){return q((function(){let t=0;const e=D(String(H)).split("."),n=D("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=M(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||M(0==i[2].length,0==s[2].length)||M(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(h.document&&G){var it=Q();et=it||(parseInt(H,10)||void 0)}else et=void 0;var st=et,ot=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",f,e),h.removeEventListener("test",f,e)}catch(n){}return t}();function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ct(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(X){t:{try{B(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:ut[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ct.Z.h.call(this)}}at.prototype.h=function(){this.defaultPrevented=!0},E(ct,at);var ut={2:"touch",3:"pen",4:"mouse"};ct.prototype.h=function(){ct.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var lt="closure_listenable_"+(1e6*Math.random()|0),ht=0;function ft(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++ht,this.ca=this.fa=!1}function dt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function pt(t){this.src=t,this.g={},this.h=0}function mt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=S(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(dt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function gt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}pt.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=gt(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ft(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var vt="closure_lm_"+(1e6*Math.random()|0),yt={};function wt(t,e,n,r,i){if(r&&r.once)return Et(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)wt(t,e[s],n,r,i);return null}return n=xt(n),t&&t[lt]?t.N(e,n,p(r)?!!r.capture:!!r,i):_t(t,e,n,!1,r,i)}function _t(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=It(t);if(a||(t[vt]=a=new pt(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=bt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ot||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(At(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function bt(){function t(n){return e.call(t.src,t.listener,n)}var e=St;return t}function Et(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Et(t,e[s],n,r,i);return null}return n=xt(n),t&&t[lt]?t.O(e,n,p(r)?!!r.capture:!!r,i):_t(t,e,n,!0,r,i)}function Tt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Tt(t,e[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=xt(n),t&&t[lt]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=gt(s,n,r,i),-1<n&&(dt(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=It(t))&&(e=t.g[e.toString()],t=-1,e&&(t=gt(e,n,r,i)),(n=-1<t?e[t]:null)&&Ct(n))}function Ct(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[lt])mt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(At(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=It(e))?(mt(n,t),0==n.h&&(n.src=null,e[vt]=null)):dt(t)}}}function At(t){return t in yt?yt[t]:yt[t]="on"+t}function St(t,e){if(t.ca)t=!0;else{e=new ct(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Ct(t),t=n.call(r,e)}return t}function It(t){return t=t[vt],t instanceof pt?t:null}var kt="__closure_events_fn_"+(1e9*Math.random()>>>0);function xt(t){return"function"===typeof t?t:(t[kt]||(t[kt]=function(e){return t.handleEvent(e)}),t[kt])}function Rt(){T.call(this),this.i=new pt(this),this.P=this,this.I=null}function Ot(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var i=e;e=new at(r,t),j(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Nt(o,r,!0,e)&&i}if(o=e.g=t,i=Nt(o,r,!0,e)&&i,i=Nt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Nt(o,r,!1,e)&&i}function Nt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&mt(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}E(Rt,T),Rt.prototype[lt]=!0,Rt.prototype.removeEventListener=function(t,e,n,r){Tt(this,t,e,n,r)},Rt.prototype.M=function(){if(Rt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)dt(n[r]);delete e.g[t],e.h--}}this.I=null},Rt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Rt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Dt=h.JSON.stringify;function Lt(){var t=qt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Mt{constructor(){this.h=this.g=null}add(t,e){const n=Ut.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Pt,Ut=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new $t),(t=>t.reset()));class $t{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ft(t){h.setTimeout((()=>{throw t}),0)}function Vt(t,e){Pt||jt(),Bt||(Pt(),Bt=!0),qt.add(t,e)}function jt(){var t=h.Promise.resolve(void 0);Pt=function(){t.then(Ht)}}var Bt=!1,qt=new Mt;function Ht(){for(var t;t=Lt();){try{t.h.call(t.g)}catch(n){Ft(n)}var e=Ut;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Bt=!1}function zt(t,e){Rt.call(this),this.h=t||1,this.g=e||h,this.j=_(this.kb,this),this.l=Date.now()}function Gt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Kt(t,e,n){if("function"===typeof t)n&&(t=_(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=_(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Wt(t){t.g=Kt((()=>{t.g=null,t.i&&(t.i=!1,Wt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}E(zt,Rt),r=zt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ot(this,"tick"),this.da&&(Gt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){zt.Z.M.call(this),Gt(this),delete this.g};class Xt extends T{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Wt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yt(t){T.call(this),this.h=t,this.g={}}E(Yt,T);var Qt=[];function Jt(t,e,n,r){Array.isArray(n)||(n&&(Qt[0]=n.toString()),n=Qt);for(var i=0;i<n.length;i++){var s=wt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Zt(t){$(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Ct(t)}),t),t.g={}}function te(){this.g=!0}function ee(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function ne(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function re(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+se(t,n)+(r?" "+r:"")}))}function ie(t,e){t.info((function(){return"TIMEOUT: "+e}))}function se(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Dt(n)}catch(a){return e}}Yt.prototype.M=function(){Yt.Z.M.call(this),Zt(this)},Yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},te.prototype.Aa=function(){this.g=!1},te.prototype.info=function(){};var oe={},ae=null;function ce(){return ae=ae||new Rt}function ue(t){at.call(this,oe.Ma,t)}function le(t){const e=ce();Ot(e,new ue(e,t))}function he(t,e){at.call(this,oe.STAT_EVENT,t),this.stat=e}function fe(t){const e=ce();Ot(e,new he(e,t))}function de(t,e){at.call(this,oe.Na,t),this.size=e}function pe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}oe.Ma="serverreachability",E(ue,at),oe.STAT_EVENT="statevent",E(he,at),oe.Na="timingevent",E(de,at);var me={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ge={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ve(){}function ye(t){return t.h||(t.h=t.i())}function we(){}ve.prototype.h=null;var _e,be={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ee(){at.call(this,"d")}function Te(){at.call(this,"c")}function Ce(){}function Ae(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Yt(this),this.P=Ie,t=W?125:void 0,this.W=new zt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Se}function Se(){this.i=null,this.g="",this.h=!1}E(Ee,at),E(Te,at),E(Ce,ve),Ce.prototype.g=function(){return new XMLHttpRequest},Ce.prototype.i=function(){return{}},_e=new Ce;var Ie=45e3,ke={},xe={};function Re(t,e,n){t.K=1,t.v=en(Xe(e)),t.s=n,t.U=!0,Oe(t,null)}function Oe(t,e){t.F=Date.now(),Me(t),t.A=Xe(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),vn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Se,t.g=Tr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Xt(_(t.Ia,t,t.g),t.O)),Jt(t.V,t.g,"readystatechange",t.gb),e=t.H?F(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),le(1),ee(t.j,t.u,t.A,t.m,t.X,t.s)}function Ne(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function De(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Le(t,n),r==xe){4==e&&(t.o=4,fe(14),i=!1),re(t.j,t.m,null,"[Incomplete Response]");break}if(r==ke){t.o=4,fe(15),re(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}re(t.j,t.m,r,null),Ve(t,r)}Ne(t)&&r!=xe&&r!=ke&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,fe(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),mr(e),e.L=!0,fe(11))):(re(t.j,t.m,n,"[Invalid Chunked Response]"),Fe(t),$e(t))}function Le(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?xe:(n=Number(e.substring(n,r)),isNaN(n)?ke:(r+=1,r+n>e.length?xe:(e=e.substr(r,n),t.C=r+n,e)))}function Me(t){t.Y=Date.now()+t.P,Pe(t,t.P)}function Pe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=pe(_(t.eb,t),e)}function Ue(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function $e(t){0==t.l.G||t.I||yr(t.l,t)}function Fe(t){Ue(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Gt(t.W),Zt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ve(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||An(n.i,t)))if(n.I=t.N,!t.J&&An(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;vr(n),sr(n)}pr(n),fe(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=pe(_(n.ab,n),6e3));if(1>=Cn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else _r(n,11)}else if((t.J||n.g==t)&&vr(n),!O(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;!s.g&&(L(t,"spdy")||L(t,"quic")||L(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Sn(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,tn(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Er(r,r.H?r.la:null,r.W),o.J){In(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ue(a),Me(a)),r.g=o}else dr(r);0<n.l.length&&cr(n)}else"stop"!=u[0]&&"close"!=u[0]||_r(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?_r(n,7):ir(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}le(4)}catch(u){}}function je(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(d(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Be(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(d(t)||"string"===typeof t)I(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(d(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=je(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function qe(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof qe)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function He(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];ze(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],ze(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function ze(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=Ae.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Jn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const l=Jn(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>l)&&(3!=l||W||this.g&&(this.h.h||this.g.ga()||Zn(this.g)))){this.I||4!=l||7==e||le(8==e||0>=f?3:2),Ue(this);var n=this.g.ba();this.N=n;e:if(Ne(this)){var r=Zn(this.g);t="";var i=r.length,s=4==Jn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Fe(this),$e(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,ne(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,fe(12),Fe(this),$e(this);break t}re(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ve(this,n)}this.U?(De(this,l,o),W&&this.i&&3==l&&(Jt(this.V,this.W,"tick",this.fb),this.W.start())):(re(this.j,this.m,o,null),Ve(this,o)),4==l&&Fe(this),this.i&&!this.I&&(4==l?yr(this.l,this):(this.i=!1,Me(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,fe(12)):(this.o=0,fe(13)),Fe(this),$e(this)}}}catch(l){}},r.fb=function(){if(this.g){var t=Jn(this.g),e=this.g.ga();this.C<e.length&&(Ue(this),De(this,t,e),this.i&&4!=t&&Me(this))}},r.cancel=function(){this.I=!0,Fe(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ie(this.j,this.A),2!=this.K&&(le(3),fe(17)),Fe(this),this.o=2,$e(this)):Pe(this,this.Y-t)},r=qe.prototype,r.R=function(){He(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return He(this),this.g.concat()},r.get=function(t,e){return ze(this.h,t)?this.h[t]:e},r.set=function(t,e){ze(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var Ge=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ke(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function We(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof We){this.g=void 0!==e?e:t.g,Ye(this,t.j),this.s=t.s,Qe(this,t.i),Je(this,t.m),this.l=t.l,e=t.h;var n=new dn;n.i=e.i,e.g&&(n.g=new qe(e.g),n.h=e.h),Ze(this,n),this.o=t.o}else t&&(n=String(t).match(Ge))?(this.g=!!e,Ye(this,n[1]||"",!0),this.s=sn(n[2]||""),Qe(this,n[3]||"",!0),Je(this,n[4]),this.l=sn(n[5]||"",!0),Ze(this,n[6]||"",!0),this.o=sn(n[7]||"")):(this.g=!!e,this.h=new dn(null,this.g))}function Xe(t){return new We(t)}function Ye(t,e,n){t.j=n?sn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qe(t,e,n){t.i=n?sn(e,!0):e}function Je(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ze(t,e,n){e instanceof dn?(t.h=e,wn(t.h,t.g)):(n||(e=on(e,hn)),t.h=new dn(e,t.g))}function tn(t,e,n){t.h.set(e,n)}function en(t){return tn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nn(t){return t instanceof We?Xe(t):new We(t,void 0)}function rn(t,e,n,r){var i=new We(null,void 0);return t&&Ye(i,t),e&&Qe(i,e),n&&Je(i,n),r&&(i.l=r),i}function sn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,an),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function an(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}We.prototype.toString=function(){var t=[],e=this.j;e&&t.push(on(e,cn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(on(e,cn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(on(n,"/"==n.charAt(0)?ln:un,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",on(n,fn)),t.join("")};var cn=/[#\/\?@]/g,un=/[#\?:]/g,ln=/[#\?]/g,hn=/[#\?@]/g,fn=/#/g;function dn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function pn(t){t.g||(t.g=new qe,t.h=0,t.i&&Ke(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function mn(t,e){pn(t),e=yn(t,e),ze(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ze(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&He(t)))}function gn(t,e){return pn(t),e=yn(t,e),ze(t.g.h,e)}function vn(t,e,n){mn(t,e),0<n.length&&(t.i=null,t.g.set(yn(t,e),R(n)),t.h+=n.length)}function yn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function wn(t,e){e&&!t.j&&(pn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(mn(this,e),vn(this,n,t))}),t)),t.j=e}r=dn.prototype,r.add=function(t,e){pn(this),this.i=null,t=yn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){pn(this),this.g.forEach((function(n,r){I(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){pn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},r.R=function(t){pn(this);var e=[];if("string"===typeof t)gn(this,t)&&(e=x(e,this.g.get(yn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=x(e,t[n])}return e},r.set=function(t,e){return pn(this),this.i=null,t=yn(this,t),gn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var _n=class{constructor(t,e){this.h=t,this.g=e}};function bn(t){this.l=t||En,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ea&&h.g.Ea()&&h.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var En=10;function Tn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Cn(t){return t.h?1:t.g?t.g.size:0}function An(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Sn(t,e){t.g?t.g.add(e):t.h=e}function In(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function kn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return R(t.i)}function xn(){}function Rn(){this.g=new xn}function On(t,e,n){const r=n||"";try{Be(t,(function(t,n){let i=t;p(t)&&(i=Dt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Nn(t,e){const n=new te;if(h.Image){const r=new Image;r.onload=b(Dn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=b(Dn,n,r,"TestLoadImage: error",!1,e),r.onabort=b(Dn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=b(Dn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Dn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function Ln(t){this.l=t.$b||null,this.j=t.ib||!1}function Mn(t,e){Rt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Pn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bn.prototype.cancel=function(){if(this.i=kn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},xn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},xn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},E(Ln,ve),Ln.prototype.g=function(){return new Mn(this.l,this.j)},Ln.prototype.i=function(t){return function(){return t}}({}),E(Mn,Rt);var Pn=0;function Un(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function $n(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Fn(t)}function Fn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Mn.prototype,r.open=function(t,e){if(this.readyState!=Pn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Fn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,$n(this)),this.readyState=Pn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Un(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?$n(this):Fn(this),3==this.readyState&&Un(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,$n(this))},r.Ta=function(t){this.g&&(this.response=t,$n(this))},r.ha=function(){this.g&&$n(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Mn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Vn=h.JSON.parse;function jn(t){Rt.call(this),this.headers=new qe,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Bn,this.K=this.L=!1}E(jn,Rt);var Bn="",qn=/^https?$/i,Hn=["POST","PUT"];function zn(t){return G&&rt()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Gn(t){return"content-type"==t.toLowerCase()}function Kn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Wn(t),Yn(t)}function Wn(t){t.D||(t.D=!0,Ot(t,"complete"),Ot(t,"error"))}function Xn(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=Jn(t)||2!=t.ba()))if(t.v&&4==Jn(t))Kt(t.Fa,0,t);else if(Ot(t,"readystatechange"),4==Jn(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var i=String(t.H).match(Ge)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!qn.test(i?i.toLowerCase():"")}n=r}if(n)Ot(t,"complete"),Ot(t,"success");else{t.m=6;try{var o=2<Jn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",Wn(t)}}finally{Yn(t)}}}function Yn(t,e){if(t.g){Qn(t);const r=t.g,i=t.C[0]?f:null;t.g=null,t.C=null,e||Ot(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Qn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Jn(t){return t.g?t.g.readyState:0}function Zn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Bn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tr(t){let e="";return $(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function er(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=tr(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):tn(t,e,n))}function nr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rr(t){this.za=0,this.l=[],this.h=new te,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=nr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=nr("baseRetryDelayMs",5e3,t),this.$a=nr("retryDelaySeedMs",1e4,t),this.Ya=nr("forwardChannelMaxRetries",2,t),this.ra=nr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new bn(t&&t.concurrentRequestLimit),this.Ca=new Rn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ir(t){if(or(t),3==t.G){var e=t.V++,n=Xe(t.F);tn(n,"SID",t.J),tn(n,"RID",e),tn(n,"TYPE","terminate"),hr(t,n),e=new Ae(t,t.h,e,void 0),e.K=2,e.v=en(Xe(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=Tr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Me(e)}br(t)}function sr(t){t.g&&(mr(t),t.g.cancel(),t.g=null)}function or(t){sr(t),t.u&&(h.clearTimeout(t.u),t.u=null),vr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function ar(t,e){t.l.push(new _n(t.Za++,e)),3==t.G&&cr(t)}function cr(t){Tn(t.i)||t.m||(t.m=!0,Vt(t.Ha,t),t.C=0)}function ur(t,e){return!(Cn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=pe(_(t.Ha,t,e),wr(t,t.C)),t.C++,!0))}function lr(t,e){var n;n=e?e.m:t.V++;const r=Xe(t.F);tn(r,"SID",t.J),tn(r,"RID",n),tn(r,"AID",t.U),hr(t,r),t.o&&t.s&&er(r,t.o,t.s),n=new Ae(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=fr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Sn(t.i,n),Re(n,r,e)}function hr(t,e){t.j&&Be({},(function(t,n){tn(e,n,t)}))}function fr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?_(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),s=!1;else try{On(a,t,"req"+n+"_")}catch(Qr){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function dr(t){t.g||t.u||(t.Y=1,Vt(t.Ga,t),t.A=0)}function pr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=pe(_(t.Ga,t),wr(t,t.A)),t.A++,!0)}function mr(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function gr(t){t.g=new Ae(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Xe(t.oa);tn(e,"RID","rpc"),tn(e,"SID",t.J),tn(e,"CI",t.N?"0":"1"),tn(e,"AID",t.U),hr(t,e),tn(e,"TYPE","xmlhttp"),t.o&&t.s&&er(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=en(Xe(e)),n.s=null,n.U=!0,Oe(n,t)}function vr(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function yr(t,e){var n=null;if(t.g==e){vr(t),mr(t),t.g=null;var r=2}else{if(!An(t.i,e))return;n=e.D,In(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ce(),Ot(r,new de(r,n,e,i)),cr(t)}else dr(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&ur(t,e)||2==r&&pr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:_r(t,5);break;case 4:_r(t,10);break;case 3:_r(t,6);break;default:_r(t,2)}}function wr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function _r(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=_(t.jb,t);n||(n=new We("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Ye(n,"https"),en(n)),Nn(n.toString(),r)}else fe(2);t.G=0,t.j&&t.j.va(e),br(t),or(t)}function br(t){t.G=0,t.I=-1,t.j&&(0==kn(t.i).length&&0==t.l.length||(t.i.i.length=0,R(t.l),t.l.length=0),t.j.ua())}function Er(t,e,n){let r=nn(n);if(""!=r.i)e&&Qe(r,e+"."+r.i),Je(r,r.m);else{const t=h.location;r=rn(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&$(t.aa,(function(t,e){tn(r,e,t)})),e=t.D,n=t.sa,e&&n&&tn(r,e,n),tn(r,"VER",t.ma),hr(t,r),r}function Tr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new jn(new Ln({ib:!0})):new jn(t.qa),e.L=t.H,e}function Cr(){}function Ar(){if(G&&!(10<=Number(st)))throw Error("Environmental error: no available transport.")}function Sr(t,e){Rt.call(this),this.g=new rr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!O(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!O(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new xr(this)}function Ir(t){Ee.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function kr(){Te.call(this),this.status=1}function xr(t){this.g=t}r=jn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():_e.g(),this.C=this.u?ye(this.u):ye(_e),this.g.onreadystatechange=_(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Kn(this,s)}t=n||"";const i=new qe(this.headers);r&&Be(r,(function(t,e){i.set(e,t)})),r=k(i.T()),n=h.FormData&&t instanceof h.FormData,!(0<=S(Hn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Qn(this),0<this.B&&((this.K=zn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_(this.pa,this)):this.A=Kt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Kn(this,s)}},r.pa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ot(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ot(this,"complete"),Ot(this,"abort"),Yn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yn(this,!0)),jn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Xn(this):this.cb())},r.cb=function(){Xn(this)},r.ba=function(){try{return 2<Jn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Vn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=rr.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ae(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=F(s),j(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=fr(this,i,e),n=Xe(this.F),tn(n,"RID",t),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),hr(this,n),this.o&&s&&er(n,this.o,s),Sn(this.i,i),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",e),tn(n,"SID","null"),i.$=!0,Re(i,n,null)):Re(i,n,e),this.G=2}}else 3==this.G&&(t?lr(this,t):0==this.l.length||Tn(this.i)||lr(this))},r.Ga=function(){if(this.u=null,gr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=pe(_(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,fe(10),sr(this),gr(this))},r.ab=function(){null!=this.v&&(this.v=null,sr(this),pr(this),fe(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),fe(2)):(this.h.info("Failed to ping google.com"),fe(1))},r=Cr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Ar.prototype.g=function(t,e){return new Sr(t,e)},E(Sr,Rt),Sr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Vt(_(t.hb,t,e))),fe(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Er(t,null,t.W),cr(t)},Sr.prototype.close=function(){ir(this.g)},Sr.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ar(this.g,e)}else this.v?(e={},e.__data__=Dt(t),ar(this.g,e)):ar(this.g,t)},Sr.prototype.M=function(){this.g.j=null,delete this.j,ir(this.g),delete this.g,Sr.Z.M.call(this)},E(Ir,Ee),E(kr,Te),E(xr,Cr),xr.prototype.xa=function(){Ot(this.g,"a")},xr.prototype.wa=function(t){Ot(this.g,new Ir(t))},xr.prototype.va=function(t){Ot(this.g,new kr(t))},xr.prototype.ua=function(){Ot(this.g,"b")},Ar.prototype.createWebChannel=Ar.prototype.g,Sr.prototype.send=Sr.prototype.u,Sr.prototype.open=Sr.prototype.m,Sr.prototype.close=Sr.prototype.close,me.NO_ERROR=0,me.TIMEOUT=8,me.HTTP_ERROR=6,ge.COMPLETE="complete",we.EventType=be,be.OPEN="a",be.CLOSE="b",be.ERROR="c",be.MESSAGE="d",Rt.prototype.listen=Rt.prototype.N,jn.prototype.listenOnce=jn.prototype.O,jn.prototype.getLastError=jn.prototype.La,jn.prototype.getLastErrorCode=jn.prototype.Da,jn.prototype.getStatus=jn.prototype.ba,jn.prototype.getResponseJson=jn.prototype.Qa,jn.prototype.getResponseText=jn.prototype.ga,jn.prototype.send=jn.prototype.ea;var Rr=u.createWebChannelTransport=function(){return new Ar},Or=u.getStatEventTarget=function(){return ce()},Nr=u.ErrorCode=me,Dr=u.EventType=ge,Lr=u.Event=oe,Mr=u.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Pr=u.FetchXmlHttpFactory=Ln,Ur=u.WebChannel=we,$r=u.XhrIo=jn;const Fr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Vr.UNAUTHENTICATED=new Vr(null),Vr.GOOGLE_CREDENTIALS=new Vr("google-credentials-uid"),Vr.FIRST_PARTY=new Vr("first-party-uid"),Vr.MOCK_USER=new Vr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let jr="9.8.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new o.Yd("@firebase/firestore");function qr(){return Br.logLevel}function Hr(t,...e){if(Br.logLevel<=o["in"].DEBUG){const n=e.map(Kr);Br.debug(`Firestore (${jr}): ${t}`,...n)}}function zr(t,...e){if(Br.logLevel<=o["in"].ERROR){const n=e.map(Kr);Br.error(`Firestore (${jr}): ${t}`,...n)}}function Gr(t,...e){if(Br.logLevel<=o["in"].WARN){const n=e.map(Kr);Br.warn(`Firestore (${jr}): ${t}`,...n)}}function Kr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t="Unexpected state"){const e=`FIRESTORE (${jr}) INTERNAL ASSERTION FAILED: `+t;throw zr(e),new Error(e)}function Xr(t,e){t||Wr()}function Yr(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Jr extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ei{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Vr.UNAUTHENTICATED)))}shutdown(){}}class ni{constructor(t){this.t=t,this.currentUser=Vr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Zr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zr,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Hr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Hr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zr)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Hr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Xr("string"==typeof e.accessToken),new ti(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Xr(null===t||"string"==typeof t),new Vr(t)}}class ri{constructor(t,e,n){this.type="FirstParty",this.user=Vr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ii{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new ri(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Vr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class si{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oi{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Hr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Hr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Hr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):Hr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Xr("string"==typeof t.token),this.p=t.token,new si(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ai{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ai.A=-1;class ui{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=ci(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function li(t,e){return t<e?-1:t>e?1:0}function hi(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fi{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Jr(Qr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Jr(Qr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Jr(Qr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Jr(Qr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return fi.fromMillis(Date.now())}static fromDate(t){return fi.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new fi(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?li(this.nanoseconds,t.nanoseconds):li(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t){this.timestamp=t}static fromTimestamp(t){return new di(t)}static min(){return new di(new fi(0,0))}static max(){return new di(new fi(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(t,e,n){void 0===e?e=0:e>t.length&&Wr(),void 0===n?n=t.length-e:n>t.length-e&&Wr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===vi.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof vi?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class yi extends vi{construct(t,e,n){return new yi(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Jr(Qr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new yi(e)}static emptyPath(){return new yi([])}}const wi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _i extends vi{construct(t,e,n){return new _i(t,e,n)}static isValidIdentifier(t){return wi.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_i.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new _i(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Jr(Qr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Jr(Qr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Jr(Qr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new Jr(Qr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new _i(e)}static emptyPath(){return new _i([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t){this.fields=t,t.sort(_i.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return hi(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ei{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Ei(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ei(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return li(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ei.EMPTY_BYTE_STRING=new Ei("");const Ti=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ci(t){if(Xr(!!t),"string"==typeof t){let e=0;const n=Ti.exec(t);if(Xr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ai(t.seconds),nanos:Ai(t.nanos)}}function Ai(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Si(t){return"string"==typeof t?Ei.fromBase64String(t):Ei.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ki(t){const e=t.mapValue.fields.__previous_value__;return Ii(e)?ki(e):e}function xi(t){const e=Ci(t.mapValue.fields.__local_write_time__.timestampValue);return new fi(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Oi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Oi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Oi&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t){return null==t}function Di(t){return 0===t&&1/t==-1/0}function Li(t){return"number"==typeof t&&Number.isInteger(t)&&!Di(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t){this.path=t}static fromPath(t){return new Mi(yi.fromString(t))}static fromName(t){return new Mi(yi.fromString(t).popFirst(5))}static empty(){return new Mi(yi.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===yi.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return yi.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Mi(new yi(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ui(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ii(t)?4:Qi(t)?9007199254740991:10:Wr()}function $i(t,e){if(t===e)return!0;const n=Ui(t);if(n!==Ui(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xi(t).isEqual(xi(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ci(t.timestampValue),r=Ci(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Si(t.bytesValue).isEqual(Si(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ai(t.geoPointValue.latitude)===Ai(e.geoPointValue.latitude)&&Ai(t.geoPointValue.longitude)===Ai(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ai(t.integerValue)===Ai(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ai(t.doubleValue),r=Ai(e.doubleValue);return n===r?Di(n)===Di(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return hi(t.arrayValue.values||[],e.arrayValue.values||[],$i);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(pi(n)!==pi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!$i(n[i],r[i])))return!1;return!0}(t,e);default:return Wr()}}function Fi(t,e){return void 0!==(t.values||[]).find((t=>$i(t,e)))}function Vi(t,e){if(t===e)return 0;const n=Ui(t),r=Ui(e);if(n!==r)return li(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return li(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ai(t.integerValue||t.doubleValue),r=Ai(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ji(t.timestampValue,e.timestampValue);case 4:return ji(xi(t),xi(e));case 5:return li(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Si(t),r=Si(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=li(n[i],r[i]);if(0!==t)return t}return li(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=li(Ai(t.latitude),Ai(e.latitude));return 0!==n?n:li(Ai(t.longitude),Ai(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Vi(n[i],r[i]);if(t)return t}return li(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Pi.mapValue&&e===Pi.mapValue)return 0;if(t===Pi.mapValue)return 1;if(e===Pi.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=li(r[o],s[o]);if(0!==t)return t;const e=Vi(n[r[o]],i[s[o]]);if(0!==e)return e}return li(r.length,s.length)}(t.mapValue,e.mapValue);default:throw Wr()}}function ji(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return li(t,e);const n=Ci(t),r=Ci(e),i=li(n.seconds,r.seconds);return 0!==i?i:li(n.nanos,r.nanos)}function Bi(t){return qi(t)}function qi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ci(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Si(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Mi.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=qi(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${qi(t.fields[i])}`;return n+"}"}(t.mapValue):Wr();var e,n}function Hi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zi(t){return!!t&&"integerValue"in t}function Gi(t){return!!t&&"arrayValue"in t}function Ki(t){return!!t&&"nullValue"in t}function Wi(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xi(t){return!!t&&"mapValue"in t}function Yi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return mi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Yi(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Qi(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji{constructor(t){this.value=t}static empty(){return new Ji({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Xi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Yi(e)}setAll(t){let e=_i.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Yi(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Xi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return $i(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Xi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){mi(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Ji(Yi(this.value))}}function Zi(t){const e=[];return mi(t.fields,((t,n)=>{const r=new _i([t]);if(Xi(n)){const t=Zi(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new bi(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ts{constructor(t,e,n,r,i,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(t){return new ts(t,0,di.min(),di.min(),Ji.empty(),0)}static newFoundDocument(t,e,n){return new ts(t,1,e,di.min(),n,0)}static newNoDocument(t,e){return new ts(t,2,e,di.min(),Ji.empty(),0)}static newUnknownDocument(t,e){return new ts(t,3,e,di.min(),Ji.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ji.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ji.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ts&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ts(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class es{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}es.UNKNOWN_ID=-1;function ns(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=di.fromTimestamp(1e9===r?new fi(n+1,0):new fi(n,r));return new is(i,Mi.empty(),e)}function rs(t){return new is(t.readTime,t.key,-1)}class is{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new is(di.min(),Mi.empty(),-1)}static max(){return new is(di.max(),Mi.empty(),-1)}}function ss(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Mi.comparator(t.documentKey,e.documentKey),0!==n?n:li(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(t,e){this.comparator=t,this.root=e||cs.EMPTY}insert(t,e){return new os(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,cs.BLACK,null,null))}remove(t){return new os(this.comparator,this.root.remove(t,this.comparator).copy(null,null,cs.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new as(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new as(this.root,t,this.comparator,!1)}getReverseIterator(){return new as(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new as(this.root,t,this.comparator,!0)}}class as{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class cs{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:cs.RED,this.left=null!=r?r:cs.EMPTY,this.right=null!=i?i:cs.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new cs(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return cs.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return cs.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,cs.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,cs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Wr();if(this.right.isRed())throw Wr();const t=this.left.check();if(t!==this.right.check())throw Wr();return t+(this.isRed()?0:1)}}cs.EMPTY=null,cs.RED=!0,cs.BLACK=!1,cs.EMPTY=new class{constructor(){this.size=0}get key(){throw Wr()}get value(){throw Wr()}get color(){throw Wr()}get left(){throw Wr()}get right(){throw Wr()}copy(t,e,n,r,i){return this}insert(t,e,n){return new cs(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class us{constructor(t){this.comparator=t,this.data=new os(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ls(this.data.getIterator())}getIteratorFrom(t){return new ls(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof us))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new us(this.comparator);return e.data=t,e}}class ls{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hs{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.P=null}}function fs(t,e=null,n=[],r=[],i=null,s=null,o=null){return new hs(t,e,n,r,i,s,o)}function ds(t){const e=Yr(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Bi(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ni(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Bi(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Bi(t))).join(",")),e.P=t}return e.P}function ps(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Bi(e.value)}`;var e})).join(", ")}]`),Ni(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Bi(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Bi(t))).join(",")),`Target(${e})`}function ms(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!ks(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!$i(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rs(t.startAt,e.startAt)&&Rs(t.endAt,e.endAt)}function gs(t){return Mi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class vs extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.V(t,e,n):new ys(t,e,n):"array-contains"===e?new Es(t,n):"in"===e?new Ts(t,n):"not-in"===e?new Cs(t,n):"array-contains-any"===e?new As(t,n):new vs(t,e,n)}static V(t,e,n){return"in"===e?new ws(t,n):new _s(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(Vi(e,this.value)):null!==e&&Ui(this.value)===Ui(e)&&this.v(Vi(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Wr()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ys extends vs{constructor(t,e,n){super(t,e,n),this.key=Mi.fromName(n.referenceValue)}matches(t){const e=Mi.comparator(t.key,this.key);return this.v(e)}}class ws extends vs{constructor(t,e){super(t,"in",e),this.keys=bs("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class _s extends vs{constructor(t,e){super(t,"not-in",e),this.keys=bs("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function bs(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Mi.fromName(t.referenceValue)))}class Es extends vs{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Gi(e)&&Fi(e.arrayValue,this.value)}}class Ts extends vs{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Fi(this.value.arrayValue,e)}}class Cs extends vs{constructor(t,e){super(t,"not-in",e)}matches(t){if(Fi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Fi(this.value.arrayValue,e)}}class As extends vs{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Gi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Fi(this.value.arrayValue,t)))}}class Ss{constructor(t,e){this.position=t,this.inclusive=e}}class Is{constructor(t,e="asc"){this.field=t,this.dir=e}}function ks(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function xs(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Mi.comparator(Mi.fromName(o.referenceValue),n.key):Vi(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Rs(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$i(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function Ns(t,e,n,r,i,s,o,a){return new Os(t,e,n,r,i,s,o,a)}function Ds(t){return new Os(t)}function Ls(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ms(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ps(t){for(const e of t.filters)if(e.S())return e.field;return null}function Us(t){return null!==t.collectionGroup}function $s(t){const e=Yr(t);if(null===e.D){e.D=[];const t=Ps(e),n=Ms(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new Is(t)),e.D.push(new Is(_i.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Is(_i.keyField(),t))}}}return e.D}function Fs(t){const e=Yr(t);if(!e.C)if("F"===e.limitType)e.C=fs(e.path,e.collectionGroup,$s(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of $s(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Is(i.field,e))}const n=e.endAt?new Ss(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ss(e.startAt.position,e.startAt.inclusive):null;e.C=fs(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.C}function Vs(t,e,n){return new Os(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function js(t,e){return ms(Fs(t),Fs(e))&&t.limitType===e.limitType}function Bs(t){return`${ds(Fs(t))}|lt:${t.limitType}`}function qs(t){return`Query(target=${ps(Fs(t))}; limitType=${t.limitType})`}function Hs(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Mi.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=xs(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,$s(t),e))&&!(t.endAt&&!function(t,e,n){const r=xs(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,$s(t),e))}(t,e)}function zs(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Gs(t){return(e,n)=>{let r=!1;for(const i of $s(t)){const t=Ks(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Ks(t,e,n){const r=t.field.isKeyField()?Mi.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Vi(r,i):Wr()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Wr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Di(e)?"-0":e}}function Xs(t){return{integerValue:""+t}}function Ys(t,e){return Li(e)?Xs(e):Ws(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this._=void 0}}function Js(t,e,n){return t instanceof eo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof no?ro(t,e):t instanceof io?so(t,e):function(t,e){const n=to(t,e),r=ao(n)+ao(t.k);return zi(n)&&zi(t.k)?Xs(r):Ws(t.M,r)}(t,e)}function Zs(t,e,n){return t instanceof no?ro(t,e):t instanceof io?so(t,e):n}function to(t,e){return t instanceof oo?zi(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class eo extends Qs{}class no extends Qs{constructor(t){super(),this.elements=t}}function ro(t,e){const n=co(e);for(const r of t.elements)n.some((t=>$i(t,r)))||n.push(r);return{arrayValue:{values:n}}}class io extends Qs{constructor(t){super(),this.elements=t}}function so(t,e){let n=co(e);for(const r of t.elements)n=n.filter((t=>!$i(t,r)));return{arrayValue:{values:n}}}class oo extends Qs{constructor(t,e){super(),this.M=t,this.k=e}}function ao(t){return Ai(t.integerValue||t.doubleValue)}function co(t){return Gi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,e){this.field=t,this.transform=e}}function lo(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof no&&e instanceof no||t instanceof io&&e instanceof io?hi(t.elements,e.elements,$i):t instanceof oo&&e instanceof oo?$i(t.k,e.k):t instanceof eo&&e instanceof eo}(t.transform,e.transform)}class ho{constructor(t,e){this.version=t,this.transformResults=e}}class fo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new fo}static exists(t){return new fo(void 0,t)}static updateTime(t){return new fo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function po(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class mo{}function go(t,e,n){t instanceof bo?function(t,e,n){const r=t.value.clone(),i=Co(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Eo?function(t,e,n){if(!po(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Co(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(To(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function vo(t,e,n){t instanceof bo?function(t,e,n){if(!po(t.precondition,e))return;const r=t.value.clone(),i=Ao(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(_o(e),r).setHasLocalMutations()}(t,e,n):t instanceof Eo?function(t,e,n){if(!po(t.precondition,e))return;const r=Ao(t.fieldTransforms,n,e),i=e.data;i.setAll(To(t)),i.setAll(r),e.convertToFoundDocument(_o(e),i).setHasLocalMutations()}(t,e,n):function(t,e){po(t.precondition,e)&&e.convertToNoDocument(di.min())}(t,e)}function yo(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=to(r.transform,t||null);null!=i&&(null==n&&(n=Ji.empty()),n.set(r.field,i))}return n||null}function wo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&hi(t,e,((t,e)=>lo(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function _o(t){return t.isFoundDocument()?t.version:di.min()}class bo extends mo{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Eo extends mo{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function To(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Co(t,e,n){const r=new Map;Xr(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Zs(o,a,n[i]))}return r}function Ao(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Js(t,s,e))}return r}class So extends mo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Io extends mo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xo,Ro;function Oo(t){switch(t){default:return Wr();case Qr.CANCELLED:case Qr.UNKNOWN:case Qr.DEADLINE_EXCEEDED:case Qr.RESOURCE_EXHAUSTED:case Qr.INTERNAL:case Qr.UNAVAILABLE:case Qr.UNAUTHENTICATED:return!1;case Qr.INVALID_ARGUMENT:case Qr.NOT_FOUND:case Qr.ALREADY_EXISTS:case Qr.PERMISSION_DENIED:case Qr.FAILED_PRECONDITION:case Qr.ABORTED:case Qr.OUT_OF_RANGE:case Qr.UNIMPLEMENTED:case Qr.DATA_LOSS:return!0}}function No(t){if(void 0===t)return zr("GRPC error has no .code"),Qr.UNKNOWN;switch(t){case xo.OK:return Qr.OK;case xo.CANCELLED:return Qr.CANCELLED;case xo.UNKNOWN:return Qr.UNKNOWN;case xo.DEADLINE_EXCEEDED:return Qr.DEADLINE_EXCEEDED;case xo.RESOURCE_EXHAUSTED:return Qr.RESOURCE_EXHAUSTED;case xo.INTERNAL:return Qr.INTERNAL;case xo.UNAVAILABLE:return Qr.UNAVAILABLE;case xo.UNAUTHENTICATED:return Qr.UNAUTHENTICATED;case xo.INVALID_ARGUMENT:return Qr.INVALID_ARGUMENT;case xo.NOT_FOUND:return Qr.NOT_FOUND;case xo.ALREADY_EXISTS:return Qr.ALREADY_EXISTS;case xo.PERMISSION_DENIED:return Qr.PERMISSION_DENIED;case xo.FAILED_PRECONDITION:return Qr.FAILED_PRECONDITION;case xo.ABORTED:return Qr.ABORTED;case xo.OUT_OF_RANGE:return Qr.OUT_OF_RANGE;case xo.UNIMPLEMENTED:return Qr.UNIMPLEMENTED;case xo.DATA_LOSS:return Qr.DATA_LOSS;default:return Wr()}}(Ro=xo||(xo={}))[Ro.OK=0]="OK",Ro[Ro.CANCELLED=1]="CANCELLED",Ro[Ro.UNKNOWN=2]="UNKNOWN",Ro[Ro.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ro[Ro.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ro[Ro.NOT_FOUND=5]="NOT_FOUND",Ro[Ro.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ro[Ro.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ro[Ro.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ro[Ro.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ro[Ro.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ro[Ro.ABORTED=10]="ABORTED",Ro[Ro.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ro[Ro.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ro[Ro.INTERNAL=13]="INTERNAL",Ro[Ro.UNAVAILABLE=14]="UNAVAILABLE",Ro[Ro.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Do{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){mi(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return gi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new os(Mi.comparator);function Mo(){return Lo}const Po=new os(Mi.comparator);function Uo(...t){let e=Po;for(const n of t)e=e.insert(n.key,n);return e}function $o(){return new Do((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Fo=new os(Mi.comparator),Vo=new us(Mi.comparator);function jo(...t){let e=Vo;for(const n of t)e=e.add(n);return e}const Bo=new us(li);function qo(){return Bo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,zo.createSynthesizedTargetChangeForCurrentChange(t,e)),new Ho(di.min(),n,qo(),Mo(),jo())}}class zo{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new zo(Ei.EMPTY_BYTE_STRING,e,jo(),jo(),jo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t,e,n,r){this.O=t,this.removedTargetIds=e,this.key=n,this.F=r}}class Ko{constructor(t,e){this.targetId=t,this.$=e}}class Wo{constructor(t,e,n=Ei.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Xo{constructor(){this.B=0,this.L=Jo(),this.U=Ei.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=jo(),e=jo(),n=jo();return this.L.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Wr()}})),new zo(this.U,this.q,t,e,n)}J(){this.K=!1,this.L=Jo()}Y(t,e){this.K=!0,this.L=this.L.insert(t,e)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class Yo{constructor(t){this.nt=t,this.st=new Map,this.it=Mo(),this.rt=Qo(),this.ot=new us(li)}ut(t){for(const e of t.O)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ht(t){this.forEachTarget(t,(e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:Wr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach(((t,n)=>{this.ft(n)&&e(n)}))}_t(t){const e=t.targetId,n=t.$.count,r=this.wt(e);if(r){const t=r.target;if(gs(t))if(0===n){const n=new Mi(t.path);this.ct(e,n,ts.newNoDocument(n,di.min()))}else Xr(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach(((n,r)=>{const i=this.wt(r);if(i){if(n.current&&gs(i.target)){const e=new Mi(i.target.path);null!==this.it.get(e)||this.It(r,e)||this.ct(r,e,ts.newNoDocument(e,t))}n.j&&(e.set(r,n.H()),n.J())}}));let n=jo();this.rt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.it.forEach(((e,n)=>n.setReadTime(t)));const r=new Ho(t,e,this.ot,this.it,n);return this.it=Mo(),this.rt=Qo(),this.ot=new us(li),r}at(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.ft(t))return;const r=this.lt(t);this.It(t,e)?r.Y(e,1):r.X(e),this.rt=this.rt.insert(e,this.Tt(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new Xo,this.st.set(t,e)),e}Tt(t){let e=this.rt.get(t);return e||(e=new us(li),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||Hr("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new Xo),this.nt.getRemoteKeysForTarget(t).forEach((e=>{this.ct(t,e,null)}))}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function Qo(){return new os(Mi.comparator)}function Jo(){return new os(Mi.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),ta=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class ea{constructor(t,e){this.databaseId=t,this.N=e}}function na(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ra(t,e){return t.N?e.toBase64():e.toUint8Array()}function ia(t,e){return na(t,e.toTimestamp())}function sa(t){return Xr(!!t),di.fromTimestamp(function(t){const e=Ci(t);return new fi(e.seconds,e.nanos)}(t))}function oa(t,e){return function(t){return new yi(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function aa(t){const e=yi.fromString(t);return Xr(Ra(e)),e}function ca(t,e){return oa(t.databaseId,e.path)}function ua(t,e){const n=aa(e);if(n.get(1)!==t.databaseId.projectId)throw new Jr(Qr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Jr(Qr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Mi(da(n))}function la(t,e){return oa(t.databaseId,e)}function ha(t){const e=aa(t);return 4===e.length?yi.emptyPath():da(e)}function fa(t){return new yi(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function da(t){return Xr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function pa(t,e,n){return{name:ca(t,e),fields:n.value.mapValue.fields}}function ma(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Wr()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.N?(Xr(void 0===e||"string"==typeof e),Ei.fromBase64String(e||"")):(Xr(void 0===e||e instanceof Uint8Array),Ei.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Qr.UNKNOWN:No(t.code);return new Jr(e,t.message||"")}(o);n=new Wo(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ua(t,r.document.name),s=sa(r.document.updateTime),o=new Ji({mapValue:{fields:r.document.fields}}),a=ts.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Go(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ua(t,r.document),s=r.readTime?sa(r.readTime):di.min(),o=ts.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Go([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ua(t,r.document),s=r.removedTargetIds||[];n=new Go([],s,i,null)}else{if(!("filter"in e))return Wr();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new ko(r),s=t.targetId;n=new Ko(s,i)}}return n}function ga(t,e){let n;if(e instanceof bo)n={update:pa(t,e.key,e.value)};else if(e instanceof So)n={delete:ca(t,e.key)};else if(e instanceof Eo)n={update:pa(t,e.key,e.data),updateMask:xa(e.fieldMask)};else{if(!(e instanceof Io))return Wr();n={verify:ca(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof eo)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof no)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof io)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof oo)return{fieldPath:e.field.canonicalString(),increment:n.k};throw Wr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ia(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Wr()}(t,e.precondition)),n}function va(t,e){return t&&t.length>0?(Xr(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?sa(t.updateTime):sa(e);return n.isEqual(di.min())&&(n=sa(e)),new ho(n,t.transformResults||[])}(t,e)))):[]}function ya(t,e){return{documents:[la(t,e.path)]}}function wa(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=la(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=la(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Wi(t.value))return{unaryFilter:{field:Aa(t.field),op:"IS_NAN"}};if(Ki(t.value))return{unaryFilter:{field:Aa(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Wi(t.value))return{unaryFilter:{field:Aa(t.field),op:"IS_NOT_NAN"}};if(Ki(t.value))return{unaryFilter:{field:Aa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Aa(t.field),op:Ca(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Aa(t.field),direction:Ta(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.N||Ni(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function _a(t){let e=ha(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Xr(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Ea(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Is(Sa(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ni(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Ss(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Ss(n,e)}(n.endAt)),Ns(e,i,o,s,a,"F",c,u)}function ba(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Wr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Ea(t){return t?void 0!==t.unaryFilter?[ka(t)]:void 0!==t.fieldFilter?[Ia(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Ea(t))).reduce(((t,e)=>t.concat(e))):Wr():[]}function Ta(t){return Zo[t]}function Ca(t){return ta[t]}function Aa(t){return{fieldPath:t.canonicalString()}}function Sa(t){return _i.fromServerFormat(t.fieldPath)}function Ia(t){return vs.create(Sa(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Wr()}}(t.fieldFilter.op),t.fieldFilter.value)}function ka(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Sa(t.unaryFilter.field);return vs.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Sa(t.unaryFilter.field);return vs.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Sa(t.unaryFilter.field);return vs.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Sa(t.unaryFilter.field);return vs.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Wr()}}function xa(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ra(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Na=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Da="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Wr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ma(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ma?e:Ma.resolve(e)}catch(t){return Ma.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ma.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ma.reject(e)}static resolve(t){return new Ma(((e,n)=>{e(t)}))}static reject(t){return new Ma(((e,n)=>{n(t)}))}static waitFor(t){return new Ma(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Ma.resolve(!1);for(const n of t)e=e.next((t=>t?Ma.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ua{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&go(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&vo(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&vo(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(di.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),jo())}isEqual(t){return this.batchId===t.batchId&&hi(this.mutations,t.mutations,((t,e)=>wo(t,e)))&&hi(this.baseMutations,t.baseMutations,((t,e)=>wo(t,e)))}}class $a{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Xr(t.mutations.length===n.length);let r=Fo;const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new $a(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t,e,n,r,i=di.min(),s=di.min(),o=Ei.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Va(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Va(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Va(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(t){this.Jt=t}}function Ba(t){const e=_a({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Vs(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(){}Zt(t,e){this.te(t,e),e.ee()}te(t,e){if("nullValue"in t)this.ne(e,5);else if("booleanValue"in t)this.ne(e,10),e.se(t.booleanValue?1:0);else if("integerValue"in t)this.ne(e,15),e.se(Ai(t.integerValue));else if("doubleValue"in t){const n=Ai(t.doubleValue);isNaN(n)?this.ne(e,13):(this.ne(e,15),Di(n)?e.se(0):e.se(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ne(e,20),"string"==typeof n?e.ie(n):(e.ie(`${n.seconds||""}`),e.se(n.nanos||0))}else if("stringValue"in t)this.re(t.stringValue,e),this.oe(e);else if("bytesValue"in t)this.ne(e,30),e.ue(Si(t.bytesValue)),this.oe(e);else if("referenceValue"in t)this.ae(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ne(e,45),e.se(n.latitude||0),e.se(n.longitude||0)}else"mapValue"in t?Qi(t)?this.ne(e,Number.MAX_SAFE_INTEGER):(this.ce(t.mapValue,e),this.oe(e)):"arrayValue"in t?(this.he(t.arrayValue,e),this.oe(e)):Wr()}re(t,e){this.ne(e,25),this.le(t,e)}le(t,e){e.ie(t)}ce(t,e){const n=t.fields||{};this.ne(e,55);for(const r of Object.keys(n))this.re(r,e),this.te(n[r],e)}he(t,e){const n=t.values||[];this.ne(e,50);for(const r of n)this.te(r,e)}ae(t,e){this.ne(e,37),Mi.fromName(t).path.forEach((t=>{this.ne(e,60),this.le(t,e)}))}ne(t,e){t.se(e)}oe(t){t.se(2)}}qa.fe=new qa;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ha{constructor(){this.qe=new za}addToCollectionParentIndex(t,e){return this.qe.add(e),Ma.resolve()}getCollectionParents(t,e){return Ma.resolve(this.qe.getEntries(e))}addFieldIndex(t,e){return Ma.resolve()}deleteFieldIndex(t,e){return Ma.resolve()}getDocumentsMatchingTarget(t,e){return Ma.resolve(null)}getIndexType(t,e){return Ma.resolve(0)}getFieldIndexes(t,e){return Ma.resolve([])}getNextCollectionGroupToUpdate(t){return Ma.resolve(null)}getMinOffset(t,e){return Ma.resolve(is.min())}updateCollectionGroup(t,e,n){return Ma.resolve()}updateIndexEntries(t,e){return Ma.resolve()}}class za{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new us(yi.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new us(yi.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Ga{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ga(t,Ga.DEFAULT_COLLECTION_PERCENTILE,Ga.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ga.DEFAULT_COLLECTION_PERCENTILE=10,Ga.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ga.DEFAULT=new Ga(41943040,Ga.DEFAULT_COLLECTION_PERCENTILE,Ga.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ga.DISABLED=new Ga(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ka{constructor(t){this.mn=t}next(){return this.mn+=2,this.mn}static gn(){return new Ka(0)}static yn(){return new Ka(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Wa(t){if(t.code!==Qr.FAILED_PRECONDITION||t.message!==Da)throw t;Hr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xa{constructor(){this.changes=new Do((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ts.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ma.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ya{constructor(t,e,n){this.ds=t,this.Bs=e,this.indexManager=n}Ls(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Us(t,e,n)))}Us(t,e,n){return this.ds.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}qs(t,e){t.forEach(((t,n)=>{for(const r of e)r.applyToLocalView(n)}))}Ks(t,e){return this.ds.getEntries(t,e).next((e=>this.Gs(t,e).next((()=>e))))}Gs(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.qs(e,t)))}Qs(t,e,n){return function(t){return Mi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.js(t,e.path):Us(e)?this.Ws(t,e,n):this.zs(t,e,n)}js(t,e){return this.Ls(t,new Mi(e)).next((t=>{let e=Uo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Ws(t,e,n){const r=e.collectionGroup;let i=Uo();return this.indexManager.getCollectionParents(t,r).next((s=>Ma.forEach(s,(s=>{const o=function(t,e){return new Os(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.zs(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}zs(t,e,n){let r;return this.ds.getAllFromCollection(t,e.path,n).next((n=>(r=n,this.Bs.getAllMutationBatchesAffectingQuery(t,e)))).next((t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=ts.newInvalidDocument(n),r=r.insert(n,i)),vo(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}})).next((()=>(r.forEach(((t,n)=>{Hs(e,n)||(r=r.remove(t))})),r)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Hs=n,this.Js=r}static Ys(t,e){let n=jo(),r=jo();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Qa(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this.Xs=!1}initialize(t,e){this.Zs=t,this.indexManager=e,this.Xs=!0}Qs(t,e,n,r){return this.ti(t,e).next((i=>i||this.ei(t,e,r,n))).next((n=>n||this.ni(t,e)))}ti(t,e){return Ma.resolve(null)}ei(t,e,n,r){return Ls(e)||r.isEqual(di.min())?this.ni(t,e):this.Zs.Ks(t,n).next((i=>{const s=this.si(e,i);return this.ii(e,s,n,r)?this.ni(t,e):(qr()<=o["in"].DEBUG&&Hr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),qs(e)),this.ri(t,s,e,ns(r,-1)))}))}si(t,e){let n=new us(Gs(t));return e.forEach(((e,r)=>{Hs(t,r)&&(n=n.add(r))})),n}ii(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ni(t,e){return qr()<=o["in"].DEBUG&&Hr("QueryEngine","Using full collection scan to execute query:",qs(e)),this.Zs.Qs(t,e,is.min())}ri(t,e,n,r){return this.Zs.Qs(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,e,n,r){this.persistence=t,this.oi=e,this.M=r,this.ui=new os(li),this.ai=new Do((t=>ds(t)),ms),this.ci=new Map,this.hi=t.getRemoteDocumentCache(),this.fs=t.getTargetCache(),this._s=t.getBundleCache(),this.li(n)}li(t){this.indexManager=this.persistence.getIndexManager(t),this.Bs=this.persistence.getMutationQueue(t,this.indexManager),this.fi=new Ya(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ui)))}}function tc(t,e,n,r){return new Za(t,e,n,r)}async function ec(t,e){const n=Yr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.Bs.getAllMutationBatches(t).next((i=>(r=i,n.li(e),n.Bs.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=jo();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.fi.Ks(t,o).next((t=>({di:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function nc(t,e){const n=Yr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.hi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Ma.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Xr(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.Bs.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.Bs.performConsistencyCheck(t))).next((()=>n.fi.Ks(t,r)))}))}function rc(t){const e=Yr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.fs.getLastRemoteSnapshotVersion(t)))}function ic(t,e){const n=Yr(t),r=e.snapshotVersion;let i=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.hi.newChangeBuffer({trackRemovals:!0});i=n.ui;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.fs.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.fs.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Ei.EMPTY_BYTE_STRING,di.min()).withLastLimboFreeSnapshotVersion(di.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.fs.updateTargetData(t,u))}));let a=Mo();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(sc(t,s,e.documentUpdates).next((t=>{a=t}))),!r.isEqual(di.min())){const e=n.fs.getLastRemoteSnapshotVersion(t).next((e=>n.fs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Ma.waitFor(o).next((()=>s.apply(t))).next((()=>n.fi.Gs(t,a))).next((()=>a))})).then((t=>(n.ui=i,t)))}function sc(t,e,n){let r=jo();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Mo();return n.forEach(((n,i)=>{const s=t.get(n);i.isNoDocument()&&i.version.isEqual(di.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!s.isValidDocument()||i.version.compareTo(s.version)>0||0===i.version.compareTo(s.version)&&s.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):Hr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",i.version)})),r}))}function oc(t,e){const n=Yr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(t,e))))}function ac(t,e){const n=Yr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.fs.getTargetData(t,e).next((i=>i?(r=i,Ma.resolve(r)):n.fs.allocateTargetId(t).next((i=>(r=new Va(e,i,0,t.currentSequenceNumber),n.fs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.ui.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ui=n.ui.insert(t.targetId,t),n.ai.set(e,t.targetId)),t}))}async function cc(t,e,n){const r=Yr(t),i=r.ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Pa(t))throw t;Hr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.ui=r.ui.remove(e),r.ai.delete(i.target)}function uc(t,e,n){const r=Yr(t);let i=di.min(),s=jo();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Yr(t),i=r.ai.get(n);return void 0!==i?Ma.resolve(r.ui.get(i)):r.fs.getTargetData(e,n)}(r,t,Fs(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.oi.Qs(t,e,n?i:di.min(),n?s:jo()))).next((t=>(lc(r,zs(e),t),{documents:t,_i:s})))))}function lc(t,e,n){let r=di.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.ci.set(e,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hc{constructor(t){this.M=t,this.yi=new Map,this.pi=new Map}getBundleMetadata(t,e){return Ma.resolve(this.yi.get(e))}saveBundleMetadata(t,e){var n;return this.yi.set(e.id,{id:(n=e).id,version:n.version,createTime:sa(n.createTime)}),Ma.resolve()}getNamedQuery(t,e){return Ma.resolve(this.pi.get(e))}saveNamedQuery(t,e){return this.pi.set(e.name,function(t){return{name:t.name,query:Ba(t.bundledQuery),readTime:sa(t.readTime)}}(e)),Ma.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(){this.overlays=new os(Mi.comparator),this.Ii=new Map}getOverlay(t,e){return Ma.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.Xt(t,e,r)})),Ma.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Ii.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Ii.delete(n)),Ma.resolve()}getOverlaysForCollection(t,e,n){const r=$o(),i=e.length+1,s=new Mi(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Ma.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new os(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=$o(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=$o(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return Ma.resolve(o)}Xt(t,e,n){if(null===n)return;const r=this.overlays.get(n.key);if(null!==r){const t=this.Ii.get(r.largestBatchId).delete(n.key);this.Ii.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Fa(e,n));let i=this.Ii.get(e);void 0===i&&(i=jo(),this.Ii.set(e,i)),this.Ii.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this.Ti=new us(pc.Ei),this.Ai=new us(pc.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(t,e){const n=new pc(t,e);this.Ti=this.Ti.add(n),this.Ai=this.Ai.add(n)}bi(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Pi(new pc(t,e))}Vi(t,e){t.forEach((t=>this.removeReference(t,e)))}vi(t){const e=new Mi(new yi([])),n=new pc(e,t),r=new pc(e,t+1),i=[];return this.Ai.forEachInRange([n,r],(t=>{this.Pi(t),i.push(t.key)})),i}Si(){this.Ti.forEach((t=>this.Pi(t)))}Pi(t){this.Ti=this.Ti.delete(t),this.Ai=this.Ai.delete(t)}Di(t){const e=new Mi(new yi([])),n=new pc(e,t),r=new pc(e,t+1);let i=jo();return this.Ai.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new pc(t,0),n=this.Ti.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class pc{constructor(t,e){this.key=t,this.Ci=e}static Ei(t,e){return Mi.comparator(t.key,e.key)||li(t.Ci,e.Ci)}static Ri(t,e){return li(t.Ci,e.Ci)||Mi.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.Bs=[],this.xi=1,this.Ni=new us(pc.Ei)}checkEmpty(t){return Ma.resolve(0===this.Bs.length)}addMutationBatch(t,e,n,r){const i=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const s=new Ua(i,e,n,r);this.Bs.push(s);for(const o of r)this.Ni=this.Ni.add(new pc(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Ma.resolve(s)}lookupMutationBatch(t,e){return Ma.resolve(this.ki(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Mi(n),i=r<0?0:r;return Ma.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return Ma.resolve(0===this.Bs.length?-1:this.xi-1)}getAllMutationBatches(t){return Ma.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new pc(e,0),r=new pc(e,Number.POSITIVE_INFINITY),i=[];return this.Ni.forEachInRange([n,r],(t=>{const e=this.ki(t.Ci);i.push(e)})),Ma.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new us(li);return e.forEach((t=>{const e=new pc(t,0),r=new pc(t,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([e,r],(t=>{n=n.add(t.Ci)}))})),Ma.resolve(this.Oi(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Mi.isDocumentKey(i)||(i=i.child(""));const s=new pc(new Mi(i),0);let o=new us(li);return this.Ni.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.Ci)),!0)}),s),Ma.resolve(this.Oi(o))}Oi(t){const e=[];return t.forEach((t=>{const n=this.ki(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Xr(0===this.Fi(e.batchId,"removed")),this.Bs.shift();let n=this.Ni;return Ma.forEach(e.mutations,(r=>{const i=new pc(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.Ni=n}))}_n(t){}containsKey(t,e){const n=new pc(e,0),r=this.Ni.firstAfterOrEqual(n);return Ma.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.Bs.length,Ma.resolve()}Fi(t,e){return this.Mi(t)}Mi(t){return 0===this.Bs.length?0:t-this.Bs[0].batchId}ki(t){const e=this.Mi(t);return e<0||e>=this.Bs.length?null:this.Bs[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t){this.$i=t,this.docs=new os(Mi.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.$i(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ma.resolve(n?n.document.mutableCopy():ts.newInvalidDocument(e))}getEntries(t,e){let n=Mo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ts.newInvalidDocument(t))})),Ma.resolve(n)}getAllFromCollection(t,e,n){let r=Mo();const i=new Mi(e.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i}}=s.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||ss(rs(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return Ma.resolve(r)}getAllFromCollectionGroup(t,e,n,r){Wr()}Bi(t,e){return Ma.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new vc(this)}getSize(t){return Ma.resolve(this.size)}}class vc extends Xa{constructor(t){super(),this.Kn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Kn.addEntry(t,r)):this.Kn.removeEntry(n)})),Ma.waitFor(e)}getFromCache(t,e){return this.Kn.getEntry(t,e)}getAllFromCache(t,e){return this.Kn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t){this.persistence=t,this.Li=new Do((t=>ds(t)),ms),this.lastRemoteSnapshotVersion=di.min(),this.highestTargetId=0,this.Ui=0,this.qi=new dc,this.targetCount=0,this.Ki=Ka.gn()}forEachTarget(t,e){return this.Li.forEach(((t,n)=>e(n))),Ma.resolve()}getLastRemoteSnapshotVersion(t){return Ma.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ma.resolve(this.Ui)}allocateTargetId(t){return this.highestTargetId=this.Ki.next(),Ma.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Ui&&(this.Ui=e),Ma.resolve()}Tn(t){this.Li.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ki=new Ka(e),this.highestTargetId=e),t.sequenceNumber>this.Ui&&(this.Ui=t.sequenceNumber)}addTargetData(t,e){return this.Tn(e),this.targetCount+=1,Ma.resolve()}updateTargetData(t,e){return this.Tn(e),Ma.resolve()}removeTargetData(t,e){return this.Li.delete(e.target),this.qi.vi(e.targetId),this.targetCount-=1,Ma.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Li.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Li.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Ma.waitFor(i).next((()=>r))}getTargetCount(t){return Ma.resolve(this.targetCount)}getTargetData(t,e){const n=this.Li.get(e)||null;return Ma.resolve(n)}addMatchingKeys(t,e,n){return this.qi.bi(e,n),Ma.resolve()}removeMatchingKeys(t,e,n){this.qi.Vi(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Ma.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.qi.vi(e),Ma.resolve()}getMatchingKeysForTargetId(t,e){const n=this.qi.Di(e);return Ma.resolve(n)}containsKey(t,e){return Ma.resolve(this.qi.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,e){this.Gi={},this.overlays={},this.es=new ai(0),this.ns=!1,this.ns=!0,this.referenceDelegate=t(this),this.fs=new yc(this),this.indexManager=new Ha,this.ds=function(t){return new gc(t)}((t=>this.referenceDelegate.Qi(t))),this.M=new ja(e),this._s=new hc(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new fc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Gi[t.toKey()];return n||(n=new mc(e,this.referenceDelegate),this.Gi[t.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(t,e,n){Hr("MemoryPersistence","Starting transaction:",t);const r=new _c(this.es.next());return this.referenceDelegate.ji(),n(r).next((t=>this.referenceDelegate.Wi(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}zi(t,e){return Ma.or(Object.values(this.Gi).map((n=>()=>n.containsKey(t,e))))}}class _c extends La{constructor(t){super(),this.currentSequenceNumber=t}}class bc{constructor(t){this.persistence=t,this.Hi=new dc,this.Ji=null}static Yi(t){return new bc(t)}get Xi(){if(this.Ji)return this.Ji;throw Wr()}addReference(t,e,n){return this.Hi.addReference(n,e),this.Xi.delete(n.toString()),Ma.resolve()}removeReference(t,e,n){return this.Hi.removeReference(n,e),this.Xi.add(n.toString()),Ma.resolve()}markPotentiallyOrphaned(t,e){return this.Xi.add(e.toString()),Ma.resolve()}removeTarget(t,e){this.Hi.vi(e.targetId).forEach((t=>this.Xi.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Xi.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ji(){this.Ji=new Set}Wi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ma.forEach(this.Xi,(n=>{const r=Mi.fromPath(n);return this.Zi(t,r).next((t=>{t||e.removeEntry(r,di.min())}))})).next((()=>(this.Ji=null,e.apply(t))))}updateLimboDocument(t,e){return this.Zi(t,e).next((t=>{t?this.Xi.delete(e.toString()):this.Xi.add(e.toString())}))}Qi(t){return 0}Zi(t,e){return Ma.or([()=>Ma.resolve(this.Hi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.zi(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){this.activeTargetIds=qo()}nr(t){this.activeTargetIds=this.activeTargetIds.add(t)}sr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}er(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Tc{constructor(){this.Ur=new Ec,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Ur.nr(t),this.qr[t]||"not-current"}updateQueryState(t,e,n){this.qr[t]=e}removeLocalQueryTarget(t){this.Ur.sr(t)}isLocalQueryTarget(t){return this.Ur.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(t){return this.Ur.activeTargetIds.has(t)}start(){return this.Ur=new Ec,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{Kr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){Hr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Wr(){Hr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(t){this.Jr=t.Jr,this.Yr=t.Yr}Xr(t){this.Zr=t}eo(t){this.no=t}onMessage(t){this.so=t}close(){this.Yr()}send(t){this.Jr(t)}io(){this.Zr()}ro(t){this.no(t)}oo(t){this.so(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.uo=e+"://"+t.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(t,e,n,r,i){const s=this.ho(t,e);Hr("RestConnection","Sending: ",s,n);const o={};return this.lo(o,r,i),this.fo(t,s,o,n).then((t=>(Hr("RestConnection","Received: ",t),t)),(e=>{throw Gr("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e}))}_o(t,e,n,r,i){return this.co(t,e,n,r,i)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+jr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=Sc[t];return`${this.uo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,r){return new Promise(((i,s)=>{const o=new $r;o.listenOnce(Dr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Nr.NO_ERROR:const e=o.getResponseJson();Hr("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Nr.TIMEOUT:Hr("Connection",'RPC "'+t+'" timed out'),s(new Jr(Qr.DEADLINE_EXCEEDED,"Request time out"));break;case Nr.HTTP_ERROR:const n=o.getStatus();if(Hr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Qr).indexOf(e)>=0?e:Qr.UNKNOWN}(t.status);s(new Jr(e,t.message))}else s(new Jr(Qr.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Jr(Qr.UNAVAILABLE,"Connection failed."));break;default:Wr()}}finally{Hr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}wo(t,e,n){const r=[this.uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Rr(),s=Or(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Pr({})),this.lo(o.initMessageHeaders,e,n),(0,a.uI)()||(0,a.b$)()||(0,a.d)()||(0,a.w1)()||(0,a.Mn)()||(0,a.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");Hr("Connection","Creating WebChannel: "+c,o);const u=i.createWebChannel(c,o);let l=!1,h=!1;const f=new Ic({Jr:t=>{h?Hr("Connection","Not sending because WebChannel is closed:",t):(l||(Hr("Connection","Opening WebChannel transport."),u.open(),l=!0),Hr("Connection","WebChannel sending:",t),u.send(t))},Yr:()=>u.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(u,Ur.EventType.OPEN,(()=>{h||Hr("Connection","WebChannel transport opened.")})),d(u,Ur.EventType.CLOSE,(()=>{h||(h=!0,Hr("Connection","WebChannel transport closed"),f.ro())})),d(u,Ur.EventType.ERROR,(t=>{h||(h=!0,Gr("Connection","WebChannel transport errored:",t),f.ro(new Jr(Qr.UNAVAILABLE,"The operation could not be completed")))})),d(u,Ur.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Xr(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){Hr("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=xo[t];if(void 0!==e)return No(e)}(t),n=i.message;void 0===e&&(e=Qr.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,f.ro(new Jr(e,n)),u.close()}else Hr("Connection","WebChannel received:",n),f.oo(n)}})),d(s,Lr.STAT_EVENT,(t=>{t.stat===Mr.PROXY?Hr("Connection","Detected buffering proxy"):t.stat===Mr.NOPROXY&&Hr("Connection","Detected no buffering proxy")})),setTimeout((()=>{f.io()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(t){return new ea(t,!0)}class Oc{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Yn=t,this.timerId=e,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,e-n);r>0&&Hr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t,e,n,r,i,s,o,a){this.Yn=t,this.Vo=n,this.vo=r,this.So=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Oc(t,e)}ko(){return 1===this.state||5===this.state||this.Mo()}Mo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&null===this.Co&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,(()=>this.Bo())))}Lo(t){this.Uo(),this.stream.send(t)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(t,e){this.Uo(),this.qo(),this.No.cancel(),this.Do++,4!==t?this.No.reset():e&&e.code===Qr.RESOURCE_EXHAUSTED?(zr(e.toString()),zr("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):e&&e.code===Qr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Ko(),this.stream.close(),this.stream=null),this.state=t,await this.listener.eo(e)}Ko(){}auth(){this.state=1;const t=this.Go(this.Do),e=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Do===e&&this.Qo(t,n)}),(e=>{t((()=>{const t=new Jr(Qr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.jo(t)}))}))}Qo(t,e){const n=this.Go(this.Do);this.stream=this.Wo(t,e),this.stream.Xr((()=>{n((()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,(()=>(this.Mo()&&(this.state=3),Promise.resolve()))),this.listener.Xr())))})),this.stream.eo((t=>{n((()=>this.jo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.No.Ro((async()=>{this.state=0,this.start()}))}jo(t){return Hr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Go(t){return e=>{this.Yn.enqueueAndForget((()=>this.Do===t?e():(Hr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Dc extends Nc{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.M=i}Wo(t,e){return this.So.wo("Listen",t,e)}onMessage(t){this.No.reset();const e=ma(this.M,t),n=function(t){if(!("targetChange"in t))return di.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?di.min():e.readTime?sa(e.readTime):di.min()}(t);return this.listener.zo(e,n)}Ho(t){const e={};e.database=fa(this.M),e.addTarget=function(t,e){let n;const r=e.target;return n=gs(r)?{documents:ya(t,r)}:{query:wa(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ra(t,e.resumeToken):e.snapshotVersion.compareTo(di.min())>0&&(n.readTime=na(t,e.snapshotVersion.toTimestamp())),n}(this.M,t);const n=ba(this.M,t);n&&(e.labels=n),this.Lo(e)}Jo(t){const e={};e.database=fa(this.M),e.removeTarget=t,this.Lo(e)}}class Lc extends Nc{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.M=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(t,e){return this.So.wo("Write",t,e)}onMessage(t){if(Xr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Yo){this.No.reset();const e=va(t.writeResults,t.commitTime),n=sa(t.commitTime);return this.listener.tu(n,e)}return Xr(!t.writeResults||0===t.writeResults.length),this.Yo=!0,this.listener.eu()}nu(){const t={};t.database=fa(this.M),this.Lo(t)}Zo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>ga(this.M,t)))};this.Lo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.So=n,this.M=r,this.su=!1}iu(){if(this.su)throw new Jr(Qr.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,e,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.So.co(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Qr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Jr(Qr.UNKNOWN,t.toString())}))}_o(t,e,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.So._o(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Qr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Jr(Qr.UNKNOWN,t.toString())}))}terminate(){this.su=!0}}class Pc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){0===this.ru&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}lu(t){"Online"===this.state?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.fu(),this.ru=0,"Online"===t&&(this.uu=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}hu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(zr(e),this.uu=!1):Hr("OnlineStateTracker",e)}fu(){null!==this.ou&&(this.ou.cancel(),this.ou=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.Kr((t=>{n.enqueueAndForget((async()=>{Gc(this)&&(Hr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Yr(t);e.wu.add(4),await Fc(e),e.yu.set("Unknown"),e.wu.delete(4),await $c(e)}(this))}))})),this.yu=new Pc(n,r)}}async function $c(t){if(Gc(t))for(const e of t.mu)await e(!0)}async function Fc(t){for(const e of t.mu)await e(!1)}function Vc(t,e){const n=Yr(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),zc(n)?Hc(n):lu(n).Mo()&&Bc(n,e))}function jc(t,e){const n=Yr(t),r=lu(n);n._u.delete(e),r.Mo()&&qc(n,e),0===n._u.size&&(r.Mo()?r.$o():Gc(n)&&n.yu.set("Unknown"))}function Bc(t,e){t.pu.Z(e.targetId),lu(t).Ho(e)}function qc(t,e){t.pu.Z(e),lu(t).Jo(e)}function Hc(t){t.pu=new Yo({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t._u.get(e)||null}),lu(t).start(),t.yu.au()}function zc(t){return Gc(t)&&!lu(t).ko()&&t._u.size>0}function Gc(t){return 0===Yr(t).wu.size}function Kc(t){t.pu=void 0}async function Wc(t){t._u.forEach(((e,n)=>{Bc(t,e)}))}async function Xc(t,e){Kc(t),zc(t)?(t.yu.lu(e),Hc(t)):t.yu.set("Unknown")}async function Yc(t,e,n){if(t.yu.set("Online"),e instanceof Wo&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t._u.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t._u.delete(r),t.pu.removeTarget(r))}(t,e)}catch(n){Hr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Qc(t,n)}else if(e instanceof Go?t.pu.ut(e):e instanceof Ko?t.pu._t(e):t.pu.ht(e),!n.isEqual(di.min()))try{const e=await rc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.pu.yt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t._u.get(r);i&&t._u.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t._u.get(e);if(!n)return;t._u.set(e,n.withResumeToken(Ei.EMPTY_BYTE_STRING,n.snapshotVersion)),qc(t,e);const r=new Va(n.target,e,1,n.sequenceNumber);Bc(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Hr("RemoteStore","Failed to raise snapshot:",e),await Qc(t,e)}}async function Qc(t,e,n){if(!Pa(e))throw e;t.wu.add(1),await Fc(t),t.yu.set("Offline"),n||(n=()=>rc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Hr("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await $c(t)}))}function Jc(t,e){return e().catch((n=>Qc(t,n,e)))}async function Zc(t){const e=Yr(t),n=hu(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;tu(e);)try{const t=await oc(e.localStore,r);if(null===t){0===e.du.length&&n.$o();break}r=t.batchId,eu(e,t)}catch(t){await Qc(e,t)}nu(e)&&ru(e)}function tu(t){return Gc(t)&&t.du.length<10}function eu(t,e){t.du.push(e);const n=hu(t);n.Mo()&&n.Xo&&n.Zo(e.mutations)}function nu(t){return Gc(t)&&!hu(t).ko()&&t.du.length>0}function ru(t){hu(t).start()}async function iu(t){hu(t).nu()}async function su(t){const e=hu(t);for(const n of t.du)e.Zo(n.mutations)}async function ou(t,e,n){const r=t.du.shift(),i=$a.from(r,e,n);await Jc(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Zc(t)}async function au(t,e){e&&hu(t).Xo&&await async function(t,e){if(n=e.code,Oo(n)&&n!==Qr.ABORTED){const n=t.du.shift();hu(t).Fo(),await Jc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Zc(t)}var n}(t,e),nu(t)&&ru(t)}async function cu(t,e){const n=Yr(t);n.asyncQueue.verifyOperationInProgress(),Hr("RemoteStore","RemoteStore received new credentials");const r=Gc(n);n.wu.add(3),await Fc(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await $c(n)}async function uu(t,e){const n=Yr(t);e?(n.wu.delete(2),await $c(n)):e||(n.wu.add(2),await Fc(n),n.yu.set("Unknown"))}function lu(t){return t.Iu||(t.Iu=function(t,e,n){const r=Yr(t);return r.iu(),new Dc(e,r.So,r.authCredentials,r.appCheckCredentials,r.M,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Xr:Wc.bind(null,t),eo:Xc.bind(null,t),zo:Yc.bind(null,t)}),t.mu.push((async e=>{e?(t.Iu.Fo(),zc(t)?Hc(t):t.yu.set("Unknown")):(await t.Iu.stop(),Kc(t))}))),t.Iu}function hu(t){return t.Tu||(t.Tu=function(t,e,n){const r=Yr(t);return r.iu(),new Lc(e,r.So,r.authCredentials,r.appCheckCredentials,r.M,n)}(t.datastore,t.asyncQueue,{Xr:iu.bind(null,t),eo:au.bind(null,t),eu:su.bind(null,t),tu:ou.bind(null,t)}),t.mu.push((async e=>{e?(t.Tu.Fo(),await Zc(t)):(await t.Tu.stop(),t.du.length>0&&(Hr("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))}))),t.Tu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class fu{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new fu(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Jr(Qr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function du(t,e){if(zr("AsyncQueue",`${e}: ${t}`),Pa(t))return new Jr(Qr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Mi.comparator(e.key,n.key):(t,e)=>Mi.comparator(t.key,e.key),this.keyedMap=Uo(),this.sortedSet=new os(this.comparator)}static emptySet(t){return new pu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof pu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new pu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(){this.Eu=new os(Mi.comparator)}track(t){const e=t.doc.key,n=this.Eu.get(e);n?0!==t.type&&3===n.type?this.Eu=this.Eu.insert(e,t):3===t.type&&1!==n.type?this.Eu=this.Eu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Eu=this.Eu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Eu=this.Eu.remove(e):1===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):Wr():this.Eu=this.Eu.insert(e,t)}Au(){const t=[];return this.Eu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class gu{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new gu(t,e,pu.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&js(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(){this.Ru=void 0,this.listeners=[]}}class yu{constructor(){this.queries=new Do((t=>Bs(t)),js),this.onlineState="Unknown",this.bu=new Set}}async function wu(t,e){const n=Yr(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new vu),i)try{s.Ru=await n.onListen(r)}catch(t){const n=du(t,`Initialization of query '${qs(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.Pu(n.onlineState),s.Ru&&e.Vu(s.Ru)&&Tu(n)}async function _u(t,e){const n=Yr(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function bu(t,e){const n=Yr(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Vu(i)&&(r=!0);e.Ru=i}}r&&Tu(n)}function Eu(t,e,n){const r=Yr(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Tu(t){t.bu.forEach((t=>{t.next()}))}class Cu{constructor(t,e,n){this.query=t,this.vu=e,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=n||{}}Vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new gu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.Su?this.Cu(t)&&(this.vu.next(t),e=!0):this.xu(t,this.onlineState)&&(this.Nu(t),e=!0),this.Du=t,e}onError(t){this.vu.error(t)}Pu(t){this.onlineState=t;let e=!1;return this.Du&&!this.Su&&this.xu(this.Du,t)&&(this.Nu(this.Du),e=!0),e}xu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.ku||!n)&&(!t.docs.isEmpty()||"Offline"===e)}Cu(t){if(t.docChanges.length>0)return!0;const e=this.Du&&this.Du.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Nu(t){t=gu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Su=!0,this.vu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Au{constructor(t){this.key=t}}class Su{constructor(t){this.key=t}}class Iu{constructor(t,e){this.query=t,this.Uu=e,this.qu=null,this.current=!1,this.Ku=jo(),this.mutatedKeys=jo(),this.Gu=Gs(t),this.Qu=new pu(this.Gu)}get ju(){return this.Uu}Wu(t,e){const n=e?e.zu:new mu,r=e?e.Qu:this.Qu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Hs(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Hu(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.Gu(l,a)>0||c&&this.Gu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Qu:s,zu:n,ii:o,mutatedKeys:i}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Au();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Wr()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const s=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==i.length||a?{snapshot:new gu(this.query,t.Qu,r,i,t.mutatedKeys,0===o,a,!1),Xu:s}:{Xu:s}}Pu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new mu,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.Uu=this.Uu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Uu=this.Uu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=jo(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new Su(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new Au(n))})),e}ta(t){this.Uu=t._i,this.Ku=jo();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ea(){return gu.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu)}}class ku{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class xu{constructor(t){this.key=t,this.na=!1}}class Ru{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sa={},this.ia=new Do((t=>Bs(t)),js),this.ra=new Map,this.oa=new Set,this.ua=new os(Mi.comparator),this.aa=new Map,this.ca=new dc,this.ha={},this.la=new Map,this.fa=Ka.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return!0===this.da}}async function Ou(t,e){const n=Yu(t);let r,i;const s=n.ia.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ea();else{const t=await ac(n.localStore,Fs(e));n.isPrimaryClient&&Vc(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Nu(n,e,r,"current"===s)}return i}async function Nu(t,e,n,r){t._a=(e,n,r)=>async function(t,e,n,r){let i=e.view.Wu(n);i.ii&&(i=await uc(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return Hu(t,e.targetId,o.Xu),o.snapshot}(t,e,n,r);const i=await uc(t.localStore,e,!0),s=new Iu(e,i._i),o=s.Wu(i.documents),a=zo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);Hu(t,n,c.Xu);const u=new ku(e,n,s);return t.ia.set(e,u),t.ra.has(n)?t.ra.get(n).push(e):t.ra.set(n,[e]),c.snapshot}async function Du(t,e){const n=Yr(t),r=n.ia.get(e),i=n.ra.get(r.targetId);if(i.length>1)return n.ra.set(r.targetId,i.filter((t=>!js(t,e)))),void n.ia.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await cc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),jc(n.remoteStore,r.targetId),Bu(n,r.targetId)})).catch(Wa)):(Bu(n,r.targetId),await cc(n.localStore,r.targetId,!0))}async function Lu(t,e,n){const r=Qu(t);try{const t=await function(t,e){const n=Yr(t),r=fi.now(),i=e.reduce(((t,e)=>t.add(e.key)),jo());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.fi.Ks(t,i).next((i=>{s=i;const o=[];for(const t of e){const e=yo(t,s.get(t.key));null!=e&&o.push(new Eo(t.key,e,Zi(e.value.mapValue),fo.exists(!0)))}return n.Bs.addMutationBatch(t,r,o,e)})))).then((t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.ha[t.currentUser.toKey()];r||(r=new os(li)),r=r.insert(e,n),t.ha[t.currentUser.toKey()]=r}(r,t.batchId,n),await Ku(r,t.changes),await Zc(r.remoteStore)}catch(t){const e=du(t,"Failed to persist write");n.reject(e)}}async function Mu(t,e){const n=Yr(t);try{const t=await ic(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.aa.get(e);r&&(Xr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.na=!0:t.modifiedDocuments.size>0?Xr(r.na):t.removedDocuments.size>0&&(Xr(r.na),r.na=!1))})),await Ku(n,t,e)}catch(t){await Wa(t)}}function Pu(t,e,n){const r=Yr(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ia.forEach(((n,r)=>{const i=r.view.Pu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Yr(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Pu(e)&&(r=!0)})),r&&Tu(n)}(r.eventManager,e),t.length&&r.sa.zo(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Uu(t,e,n){const r=Yr(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.aa.get(e),s=i&&i.key;if(s){let t=new os(Mi.comparator);t=t.insert(s,ts.newNoDocument(s,di.min()));const n=jo().add(s),i=new Ho(di.min(),new Map,new us(li),t,n);await Mu(r,i),r.ua=r.ua.remove(s),r.aa.delete(e),Gu(r)}else await cc(r.localStore,e,!1).then((()=>Bu(r,e,n))).catch(Wa)}async function $u(t,e){const n=Yr(t),r=e.batch.batchId;try{const t=await nc(n.localStore,e);ju(n,r,null),Vu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ku(n,t)}catch(t){await Wa(t)}}async function Fu(t,e,n){const r=Yr(t);try{const t=await function(t,e){const n=Yr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.Bs.lookupMutationBatch(t,e).next((e=>(Xr(null!==e),r=e.keys(),n.Bs.removeMutationBatch(t,e)))).next((()=>n.Bs.performConsistencyCheck(t))).next((()=>n.fi.Ks(t,r)))}))}(r.localStore,e);ju(r,e,n),Vu(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ku(r,t)}catch(n){await Wa(n)}}function Vu(t,e){(t.la.get(e)||[]).forEach((t=>{t.resolve()})),t.la.delete(e)}function ju(t,e,n){const r=Yr(t);let i=r.ha[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.ha[r.currentUser.toKey()]=i}}function Bu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ra.get(e))t.ia.delete(r),n&&t.sa.wa(r,n);t.ra.delete(e),t.isPrimaryClient&&t.ca.vi(e).forEach((e=>{t.ca.containsKey(e)||qu(t,e)}))}function qu(t,e){t.oa.delete(e.path.canonicalString());const n=t.ua.get(e);null!==n&&(jc(t.remoteStore,n),t.ua=t.ua.remove(e),t.aa.delete(n),Gu(t))}function Hu(t,e,n){for(const r of n)r instanceof Au?(t.ca.addReference(r.key,e),zu(t,r)):r instanceof Su?(Hr("SyncEngine","Document no longer in limbo: "+r.key),t.ca.removeReference(r.key,e),t.ca.containsKey(r.key)||qu(t,r.key)):Wr()}function zu(t,e){const n=e.key,r=n.path.canonicalString();t.ua.get(n)||t.oa.has(r)||(Hr("SyncEngine","New document in limbo: "+n),t.oa.add(r),Gu(t))}function Gu(t){for(;t.oa.size>0&&t.ua.size<t.maxConcurrentLimboResolutions;){const e=t.oa.values().next().value;t.oa.delete(e);const n=new Mi(yi.fromString(e)),r=t.fa.next();t.aa.set(r,new xu(n)),t.ua=t.ua.insert(n,r),Vc(t.remoteStore,new Va(Fs(Ds(n.path)),r,2,ai.A))}}async function Ku(t,e,n){const r=Yr(t),i=[],s=[],o=[];r.ia.isEmpty()||(r.ia.forEach(((t,a)=>{o.push(r._a(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Qa.Ys(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.sa.zo(i),await async function(t,e){const n=Yr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ma.forEach(e,(e=>Ma.forEach(e.Hs,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Ma.forEach(e.Js,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Pa(t))throw t;Hr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.ui.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.ui=n.ui.insert(t,i)}}}(r.localStore,s))}async function Wu(t,e){const n=Yr(t);if(!n.currentUser.isEqual(e)){Hr("SyncEngine","User change. New user:",e.toKey());const t=await ec(n.localStore,e);n.currentUser=e,function(t,e){t.la.forEach((t=>{t.forEach((t=>{t.reject(new Jr(Qr.CANCELLED,e))}))})),t.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Ku(n,t.di)}}function Xu(t,e){const n=Yr(t),r=n.aa.get(e);if(r&&r.na)return jo().add(r.key);{let t=jo();const r=n.ra.get(e);if(!r)return t;for(const e of r){const r=n.ia.get(e);t=t.unionWith(r.view.ju)}return t}}function Yu(t){const e=Yr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Uu.bind(null,e),e.sa.zo=bu.bind(null,e.eventManager),e.sa.wa=Eu.bind(null,e.eventManager),e}function Qu(t){const e=Yr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$u.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Fu.bind(null,e),e}class Ju{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=Rc(t.databaseInfo.databaseId),this.sharedClientState=this.ga(t),this.persistence=this.ya(t),await this.persistence.start(),this.gcScheduler=this.pa(t),this.localStore=this.Ia(t)}pa(t){return null}Ia(t){return tc(this.persistence,new Ja,t.initialUser,this.M)}ya(t){return new wc(bc.Yi,this.M)}ga(t){return new Tc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Zu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Pu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wu.bind(null,this.syncEngine),await uu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new yu}createDatastore(t){const e=Rc(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new kc(r));var r;return function(t,e,n,r){return new Mc(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Pu(this.syncEngine,t,0),s=Ac.vt()?new Ac:new Cc,new Uc(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Ru(t,e,n,r,i,s);return o&&(a.da=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Yr(t);Hr("RemoteStore","RemoteStore shutting down."),e.wu.add(5),await Fc(e),e.gu.shutdown(),e.yu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ea(this.observer.next,t)}error(t){this.observer.error?this.Ea(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Aa(){this.muted=!0}Ea(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class el{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Vr.UNAUTHENTICATED,this.clientId=ui.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Hr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Hr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Jr(Qr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=du(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function nl(t,e){t.asyncQueue.verifyOperationInProgress(),Hr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await ec(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function rl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await il(t);Hr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>cu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>cu(e.remoteStore,n))),t.onlineComponents=e}async function il(t){return t.offlineComponents||(Hr("FirestoreClient","Using default OfflineComponentProvider"),await nl(t,new Ju)),t.offlineComponents}async function sl(t){return t.onlineComponents||(Hr("FirestoreClient","Using default OnlineComponentProvider"),await rl(t,new Zu)),t.onlineComponents}function ol(t){return sl(t).then((t=>t.syncEngine))}async function al(t){const e=await sl(t),n=e.eventManager;return n.onListen=Ou.bind(null,e.syncEngine),n.onUnlisten=Du.bind(null,e.syncEngine),n}function cl(t,e,n={}){const r=new Zr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new tl({next:n=>{e.enqueueAndForget((()=>_u(t,o))),n.fromCache&&"server"===r.source?i.reject(new Jr(Qr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Cu(n,s,{includeMetadataChanges:!0,ku:!0});return wu(t,o)}(await al(t),t.asyncQueue,e,n,r))),r.promise}const ul=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t,e,n){if(!n)throw new Jr(Qr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hl(t,e,n,r){if(!0===e&&!0===r)throw new Jr(Qr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fl(t){if(!Mi.isDocumentKey(t))throw new Jr(Qr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dl(t){if(Mi.isDocumentKey(t))throw new Jr(Qr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Wr()}function ml(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Jr(Qr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pl(t);throw new Jr(Qr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gl{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Jr(Qr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Jr(Qr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,hl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gl({}),this._settingsFrozen=!1,t instanceof Oi?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Jr(Qr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oi(t.options.projectId)}(t))}get app(){if(!this._app)throw new Jr(Qr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Jr(Qr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ei;switch(t.type){case"gapi":const e=t.client;return Xr(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new ii(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Jr(Qr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ul.get(t);e&&(Hr("ComponentProvider","Removing Datastore"),ul.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _l(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new yl(this.firestore,t,this._key)}}class wl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new wl(this.firestore,t,this._query)}}class _l extends wl{constructor(t,e,n){super(t,e,Ds(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new yl(this.firestore,null,new Mi(t))}withConverter(t){return new _l(this.firestore,t,this._path)}}function bl(t,e,...n){if(t=(0,a.m9)(t),ll("collection","path",e),t instanceof vl){const r=yi.fromString(e,...n);return dl(r),new _l(t,null,r)}{if(!(t instanceof yl||t instanceof _l))throw new Jr(Qr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(yi.fromString(e,...n));return dl(r),new _l(t.firestore,null,r)}}function El(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=ui.R()),ll("doc","path",e),t instanceof vl){const r=yi.fromString(e,...n);return fl(r),new yl(t,null,new Mi(r))}{if(!(t instanceof yl||t instanceof _l))throw new Jr(Qr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(yi.fromString(e,...n));return fl(r),new yl(t.firestore,t instanceof _l?t.converter:null,new Mi(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tl{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new Oc(this,"async_queue_retry"),this.Qa=()=>{const t=xc();t&&Hr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.No.Po()};const t=xc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ja(),this.Wa(t)}enterRestrictedMode(t){if(!this.Ba){this.Ba=!0,this.Ka=t||!1;const e=xc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Qa)}}enqueue(t){if(this.ja(),this.Ba)return new Promise((()=>{}));const e=new Zr;return this.Wa((()=>this.Ba&&this.Ka?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.$a.push(t),this.za())))}async za(){if(0!==this.$a.length){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(E){if(!Pa(E))throw E;Hr("AsyncQueue","Operation failed with retryable error: "+E)}this.$a.length>0&&this.No.Ro((()=>this.za()))}}Wa(t){const e=this.Fa.then((()=>(this.qa=!0,t().catch((t=>{this.Ua=t,this.qa=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw zr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.qa=!1,t))))));return this.Fa=e,e}enqueueAfterDelay(t,e,n){this.ja(),this.Ga.indexOf(t)>-1&&(e=0);const r=fu.createAndSchedule(this,t,e,n,(t=>this.Ha(t)));return this.La.push(r),r}ja(){this.Ua&&Wr()}verifyOperationInProgress(){}async Ja(){let t;do{t=this.Fa,await t}while(t!==this.Fa)}Ya(t){for(const e of this.La)if(e.timerId===t)return!0;return!1}Xa(t){return this.Ja().then((()=>{this.La.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.La)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Ja()}))}Za(t){this.Ga.push(t)}Ha(t){const e=this.La.indexOf(t);this.La.splice(e,1)}}class Cl extends vl{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Tl,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Il(this),this._firestoreClient.terminate()}}function Al(t=(0,i.Mq)()){return(0,i.qX)(t,"firestore").getImmediate()}function Sl(t){return t._firestoreClient||Il(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Il(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Ri(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new el(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Jr(Qr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _i(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new xl(Ei.fromBase64String(t))}catch(t){throw new Jr(Qr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new xl(Ei.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Jr(Qr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Jr(Qr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return li(this._lat,t._lat)||li(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=/^__.*__$/;class Dl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Eo(t,this.data,this.fieldMask,e,this.fieldTransforms):new bo(t,this.data,e,this.fieldTransforms)}}class Ll{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Eo(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Ml(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Wr()}}class Pl{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.M=n,this.ignoreUndefinedProperties=r,void 0===i&&this.tc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(t){return new Pl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.nc({path:n,ic:!1});return r.rc(t),r}oc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.nc({path:n,ic:!1});return r.tc(),r}uc(t){return this.nc({path:void 0,ic:!0})}ac(t){return Zl(t,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}tc(){if(this.path)for(let t=0;t<this.path.length;t++)this.rc(this.path.get(t))}rc(t){if(0===t.length)throw this.ac("Document fields must not be empty");if(Ml(this.ec)&&Nl.test(t))throw this.ac('Document fields cannot begin and end with "__"')}}class Ul{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.M=n||Rc(t)}lc(t,e,n,r=!1){return new Pl({ec:t,methodName:e,hc:n,path:_i.emptyPath(),ic:!1,cc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function $l(t){const e=t._freezeSettings(),n=Rc(t._databaseId);return new Ul(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Fl(t,e,n,r,i,s={}){const o=t.lc(s.merge||s.mergeFields?2:0,e,n,i);Xl("Data must be an object, but it was:",o,r);const a=Kl(r,o);let c,u;if(s.merge)c=new bi(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Yl(e,r,n);if(!o.contains(i))throw new Jr(Qr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);th(t,i)||t.push(i)}c=new bi(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Dl(new Ji(a),c,u)}class Vl extends Rl{_toFieldTransform(t){if(2!==t.ec)throw 1===t.ec?t.ac(`${this._methodName}() can only appear at the top level of your update data`):t.ac(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Vl}}function jl(t,e,n){return new Pl({ec:3,hc:e.settings.hc,methodName:t._methodName,ic:n},e.databaseId,e.M,e.ignoreUndefinedProperties)}class Bl extends Rl{constructor(t,e){super(t),this.fc=e}_toFieldTransform(t){const e=jl(this,t,!0),n=this.fc.map((t=>Gl(t,e))),r=new no(n);return new uo(t.path,r)}isEqual(t){return this===t}}function ql(t,e,n,r){const i=t.lc(1,e,n);Xl("Data must be an object, but it was:",i,r);const s=[],o=Ji.empty();mi(r,((t,r)=>{const c=Jl(e,t,n);r=(0,a.m9)(r);const u=i.oc(c);if(r instanceof Vl)s.push(c);else{const t=Gl(r,u);null!=t&&(s.push(c),o.set(c,t))}}));const c=new bi(s);return new Ll(o,c,i.fieldTransforms)}function Hl(t,e,n,r,i,s){const o=t.lc(1,e,n),c=[Yl(e,r,n)],u=[i];if(s.length%2!=0)throw new Jr(Qr.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)c.push(Yl(e,s[a])),u.push(s[a+1]);const l=[],h=Ji.empty();for(let d=c.length-1;d>=0;--d)if(!th(l,c[d])){const t=c[d];let e=u[d];e=(0,a.m9)(e);const n=o.oc(t);if(e instanceof Vl)l.push(t);else{const r=Gl(e,n);null!=r&&(l.push(t),h.set(t,r))}}const f=new bi(l);return new Ll(h,f,o.fieldTransforms)}function zl(t,e,n,r=!1){return Gl(n,t.lc(r?4:3,e))}function Gl(t,e){if(Wl(t=(0,a.m9)(t)))return Xl("Unsupported field value:",e,t),Kl(t,e);if(t instanceof Rl)return function(t,e){if(!Ml(e.ec))throw e.ac(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ac(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ic&&4!==e.ec)throw e.ac("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Gl(i,e.uc(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ys(e.M,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=fi.fromDate(t);return{timestampValue:na(e.M,n)}}if(t instanceof fi){const n=new fi(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:na(e.M,n)}}if(t instanceof Ol)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof xl)return{bytesValue:ra(e.M,t._byteString)};if(t instanceof yl){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.ac(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:oa(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ac(`Unsupported field value: ${pl(t)}`)}(t,e)}function Kl(t,e){const n={};return gi(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mi(t,((t,r)=>{const i=Gl(r,e.sc(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Wl(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof fi||t instanceof Ol||t instanceof xl||t instanceof yl||t instanceof Rl)}function Xl(t,e,n){if(!Wl(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=pl(n);throw"an object"===r?e.ac(t+" a custom object"):e.ac(t+" "+r)}}function Yl(t,e,n){if((e=(0,a.m9)(e))instanceof kl)return e._internalPath;if("string"==typeof e)return Jl(t,e);throw Zl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ql=new RegExp("[~\\*/\\[\\]]");function Jl(t,e,n){if(e.search(Ql)>=0)throw Zl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kl(...e.split("."))._internalPath}catch(r){throw Zl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Jr(Qr.INVALID_ARGUMENT,a+t+c)}function th(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new nh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(rh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class nh extends eh{data(){return super.data()}}function rh(t,e){return"string"==typeof e?Jl(t,e):e instanceof kl?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class sh extends eh{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new oh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(rh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class oh extends sh{data(t={}){return super.data(t)}}class ah{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new ih(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new oh(this._firestore,this._userDataWriter,n.key,n,new ih(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Jr(Qr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new oh(t._firestore,t._userDataWriter,n.doc.key,n.doc,new ih(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new oh(t._firestore,t._userDataWriter,e.doc.key,e.doc,new ih(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:ch(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function ch(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Wr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function uh(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Jr(Qr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lh{}function hh(t,...e){for(const n of e)t=n._apply(t);return t}class fh extends lh{constructor(t,e,n){super(),this._c=t,this.wc=e,this.mc=n,this.type="where"}_apply(t){const e=$l(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Jr(Qr.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){mh(o,s);const e=[];for(const n of o)e.push(ph(r,t,n));a={arrayValue:{values:e}}}else a=ph(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||mh(o,s),a=zl(n,e,o,"in"===s||"not-in"===s);const c=vs.create(i,s,a);return function(t,e){if(e.S()){const n=Ps(t);if(null!==n&&!n.isEqual(e.field))throw new Jr(Qr.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=Ms(t);null!==r&&gh(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new Jr(Qr.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Jr(Qr.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this._c,this.wc,this.mc);return new wl(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Os(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function dh(t,e,n){const r=e,i=rh("where",t);return new fh(i,r,n)}function ph(t,e,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new Jr(Qr.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Us(e)&&-1!==n.indexOf("/"))throw new Jr(Qr.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(yi.fromString(n));if(!Mi.isDocumentKey(r))throw new Jr(Qr.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Hi(t,new Mi(r))}if(n instanceof yl)return Hi(t,n._key);throw new Jr(Qr.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pl(n)}.`)}function mh(t,e){if(!Array.isArray(t)||0===t.length)throw new Jr(Qr.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new Jr(Qr.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function gh(t,e,n){if(!n.isEqual(e))throw new Jr(Qr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vh{convertValue(t,e="none"){switch(Ui(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ai(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Si(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Wr()}}convertObject(t,e){const n={};return mi(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Ol(Ai(t.latitude),Ai(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ki(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(xi(t));default:return null}}convertTimestamp(t){const e=Ci(t);return new fi(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=yi.fromString(t);Xr(Ra(n));const r=new Oi(n.get(1),n.get(3)),i=new Mi(n.popFirst(5));return r.isEqual(e)||zr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class wh extends vh{constructor(t){super(),this.firestore=t}convertBytes(t){return new xl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new yl(this.firestore,null,e)}}function _h(t){t=ml(t,wl);const e=ml(t.firestore,Cl),n=Sl(e),r=new wh(e);return uh(t._query),cl(n,t._query).then((n=>new ah(e,r,t,n)))}function bh(t,e,n,...r){t=ml(t,yl);const i=ml(t.firestore,Cl),s=$l(i);let o;return o="string"==typeof(e=(0,a.m9)(e))||e instanceof kl?Hl(s,"updateDoc",t._key,e,n,r):ql(s,"updateDoc",t._key,e),Th(i,[o.toMutation(t._key,fo.exists(!0))])}function Eh(t,e){const n=ml(t.firestore,Cl),r=El(t),i=yh(t.converter,e);return Th(n,[Fl($l(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,fo.exists(!1))]).then((()=>r))}function Th(t,e){return function(t,e){const n=new Zr;return t.asyncQueue.enqueueAndForget((async()=>Lu(await ol(t),e,n))),n.promise}(Sl(t),e)}function Ch(...t){return new Bl("arrayUnion",t)}!function(t,e=!0){!function(t){jr=t}(i.Jn),(0,i.Xd)(new s.wA("firestore",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new Cl(r,new ni(t.getProvider("auth-internal")),new oi(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),(0,i.KN)(Fr,"3.4.9",t),(0,i.KN)(Fr,"3.4.9","esm2017")}()},3597:function(t,e,n){"use strict";n.d(e,{Jt:function(){return de},cF:function(){return me},iH:function(){return pe},B0:function(){return fe}});n(2801),n(8675),n(3462),n(6699),n(1703);var r=n(3367),i=n(3536),s=n(7805);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l extends i.ZR{constructor(t,e){super(h(t),`Firebase Storage: ${e} (${h(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}_codeEquals(t){return h(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function h(t){return"storage/"+t}function f(){const t="An unknown error occurred, please check the error payload for server response.";return new l("unknown",t)}function d(t){return new l("object-not-found","Object '"+t+"' does not exist.")}function p(t){return new l("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function m(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l("unauthenticated",t)}function g(){return new l("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function v(t){return new l("unauthorized","User does not have permission to access '"+t+"'.")}function y(){return new l("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function w(){return new l("canceled","User canceled the upload/download.")}function _(t){return new l("invalid-url","Invalid URL '"+t+"'.")}function b(t){return new l("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function E(){return new l("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function T(){return new l("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function C(){return new l("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function A(){return new l("no-download-url","The given file does not have any download URLs.")}function S(t){return new l("invalid-argument",t)}function I(){return new l("app-deleted","The Firebase app was deleted.")}function k(t){return new l("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function x(t,e){return new l("invalid-format","String does not match format '"+t+"': "+e)}function R(t){throw new l("internal-error","Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=O.makeFromUrl(t,e)}catch(r){return new O(t,"")}if(""===n.path)return n;throw b(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+r+s,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${l}/b/${r}/o${f}`,"i"),p={bucket:1,path:3},m=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,g="([^?#]*)",v=new RegExp(`^https?://${m}/${r}/${g}`,"i"),y={bucket:1,path:2},w=[{regex:a,indices:c,postModify:i},{regex:d,indices:p,postModify:u},{regex:v,indices:y,postModify:u}];for(let o=0;o<w.length;o++){const e=w[o],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new O(t,i),e.postModify(n);break}}if(null==n)throw _(t);return n}}class N{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){i=setTimeout((()=>{i=null,t(d,c())}),e)}function f(){s&&clearTimeout(s)}function d(t,...e){if(u)return void f();if(t)return f(),void l.call(null,t,...e);const n=c()||o;if(n)return f(),void l.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function m(t){p||(p=!0,f(),u||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}function L(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t){return void 0!==t}function P(t){return"function"===typeof t}function U(t){return"object"===typeof t&&!Array.isArray(t)}function $(t){return"string"===typeof t||t instanceof String}function F(t){return V()&&t instanceof Blob}function V(){return"undefined"!==typeof Blob}function j(t,e,n,r){if(r<e)throw S(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw S(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t,e,n){let r=e;return null==n&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function q(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(H||(H={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(t,e,n,r,i,s,o,a,c,u,l){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new G(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===H.NO_ERROR,i=n.getStatus();if(!e||this.isRetryStatusCode_(i)){const e=n.getErrorCode()===H.ABORT;return void t(!1,new G(!1,null,e))}const s=-1!==this.successCodes_.indexOf(i);t(!0,new G(s,n))}))},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());M(t)?n(t):n()}catch(s){r(s)}else if(null!==i){const t=f();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?I():w();r(t)}else{const t=y();r(t)}};this.canceled_?e(!1,new G(!1,null,!0)):this.backoffId_=D(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&L(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=[408,429],r=-1!==n.indexOf(t),i=-1!==this.additionalRetryCodes_.indexOf(t);return e||r||i}}class G{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function K(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function W(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function X(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Y(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function Q(t,e,n,r,i,s){const o=q(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return X(c,e),K(c,n),W(c,s),Y(c,r),new z(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Z(...t){const e=J();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(V())return new Blob(t);throw new l("unsupported-environment","This browser doesn't seem to support creating Blobs")}function tt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class rt{constructor(t,e){this.data=t,this.contentType=e||null}}function it(t,e){switch(t){case nt.RAW:return new rt(st(e));case nt.BASE64:case nt.BASE64URL:return new rt(at(t,e));case nt.DATA_URL:return new rt(ut(e),lt(e))}throw f()}function st(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(i){const i=r,s=t.charCodeAt(++n);r=65536|(1023&i)<<10|1023&s,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320===(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function ot(t){let e;try{e=decodeURIComponent(t)}catch(n){throw x(nt.DATA_URL,"Malformed data URL.")}return st(e)}function at(t,e){switch(t){case nt.BASE64:{const n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){const e=n?"-":"_";throw x(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case nt.BASE64URL:{const n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r){const e=n?"+":"/";throw x(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=et(e)}catch(i){throw x(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ct{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw x(nt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=ht(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}function ut(t){const e=new ct(t);return e.base64?at(nt.BASE64,e.rest):ot(e.rest)}function lt(t){const e=new ct(t);return e.contentType}function ht(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t,e){let n=0,r="";F(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(F(this.data_)){const n=this.data_,r=tt(n,t,e);return null===r?null:new ft(r)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new ft(n,!0)}}static getBlob(...t){if(V()){const e=t.map((t=>t instanceof ft?t.data_:t));return new ft(Z.apply(null,e))}{const e=t.map((t=>$(t)?it(nt.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const r=new Uint8Array(n);let i=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)r[i++]=t[e]})),new ft(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){let e;try{e=JSON.parse(t)}catch(n){return null}return U(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function mt(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function gt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,e){return e}class yt{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||vt}}let wt=null;function _t(t){return!$(t)||t.length<2?t:gt(t)}function bt(){if(wt)return wt;const t=[];function e(t,e){return _t(e)}t.push(new yt("bucket")),t.push(new yt("generation")),t.push(new yt("metageneration")),t.push(new yt("name","fullPath",!0));const n=new yt("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new yt("size");return i.xform=r,t.push(i),t.push(new yt("timeCreated")),t.push(new yt("updated")),t.push(new yt("md5Hash",null,!0)),t.push(new yt("cacheControl",null,!0)),t.push(new yt("contentDisposition",null,!0)),t.push(new yt("contentEncoding",null,!0)),t.push(new yt("contentLanguage",null,!0)),t.push(new yt("contentType",null,!0)),t.push(new yt("metadata","customMetadata",!0)),wt=t,wt}function Et(t,e){function n(){const n=t["bucket"],r=t["fullPath"],i=new O(n,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Tt(t,e,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const t=n[s];r[t.local]=t.xform(r,e[t.server])}return Et(r,t),r}function Ct(t,e,n){const r=dt(e);if(null===r)return null;const i=r;return Tt(t,i,n)}function At(t,e,n,r){const i=dt(e);if(null===i)return null;if(!$(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map((e=>{const i=t["bucket"],s=t["fullPath"],a="/b/"+o(i)+"/o/"+o(s),c=B(a,n,r),u=q({alt:"media",token:e});return c+u}));return c[0]}function St(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t){if(!t)throw f()}function xt(t,e){function n(n,r){const i=Ct(t,r,e);return kt(null!==i),i}return n}function Rt(t,e){function n(n,r){const i=Ct(t,r,e);return kt(null!==i),At(i,r,t.host,t._protocol)}return n}function Ot(t){function e(e,n){let r;return r=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?g():m():402===e.getStatus()?p(t.bucket):403===e.getStatus()?v(t.path):n,r.serverResponse=n.serverResponse,r}return e}function Nt(t){const e=Ot(t);function n(n,r){let i=e(n,r);return 404===n.getStatus()&&(i=d(t.path)),i.serverResponse=r.serverResponse,i}return n}function Dt(t,e,n){const r=e.fullServerUrl(),i=B(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new It(i,s,xt(t,n),o);return a.errorHandler=Nt(e),a}function Lt(t,e,n){const r=e.fullServerUrl(),i=B(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new It(i,s,Rt(t,n),o);return a.errorHandler=Nt(e),a}function Mt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Pt(t,e,n){const r=Object.assign({},n);return r["fullPath"]=t.path,r["size"]=e.size(),r["contentType"]||(r["contentType"]=Mt(null,e)),r}function Ut(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=Pt(e,r,i),l=St(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",f="\r\n--"+c+"--",d=ft.getBlob(h,r,f);if(null===d)throw T();const p={name:u["fullPath"]},m=B(s,t.host,t._protocol),g="POST",v=t.maxUploadRetryTime,y=new It(m,g,xt(t,n),v);return y.urlParams=p,y.headers=o,y.body=d.uploadData(),y.errorHandler=Ot(e),y}class $t{constructor(t,e,n,r){this.current=t,this.total=e,this.finalized=!!n,this.metadata=r||null}}function Ft(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(i){kt(!1)}const r=e||["active"];return kt(!!n&&-1!==r.indexOf(n)),n}function Vt(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=Pt(e,r,i),a={name:o["fullPath"]},c=B(s,t.host,t._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o["contentType"],"Content-Type":"application/json; charset=utf-8"},h=St(o,n),f=t.maxUploadRetryTime;function d(t){let e;Ft(t);try{e=t.getResponseHeader("X-Goog-Upload-URL")}catch(n){kt(!1)}return kt($(e)),e}const p=new It(c,u,d,f);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=Ot(e),p}function jt(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(t){const e=Ft(t,["active","final"]);let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(s){kt(!1)}n||kt(!1);const i=Number(n);return kt(!isNaN(i)),new $t(i,r.size(),"final"===e)}const o="POST",a=t.maxUploadRetryTime,c=new It(n,o,s,a);return c.headers=i,c.errorHandler=Ot(e),c}const Bt=262144;function qt(t,e,n,r,i,s,o,a){const c=new $t(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw C();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,f=h+l,d=l===u?"upload, finalize":"upload",p={"X-Goog-Upload-Command":d,"X-Goog-Upload-Offset":`${c.current}`},m=r.slice(h,f);if(null===m)throw T();function g(t,n){const i=Ft(t,["active","final"]),o=c.current+l,a=r.size();let u;return u="final"===i?xt(e,s)(t,n):null,new $t(o,a,"final"===i,u)}const v="POST",y=e.maxUploadRetryTime,w=new It(n,v,g,y);return w.headers=p,w.body=m.uploadData(),w.progressCallback=a||null,w.errorHandler=Ot(t),w}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function zt(t){switch(t){case"running":case"pausing":case"canceling":return Ht.RUNNING;case"paused":return Ht.PAUSED;case"success":return Ht.SUCCESS;case"canceled":return Ht.CANCELED;case"error":return Ht.ERROR;default:return Ht.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t,e,n){const r=P(t)||null!=e||null!=n;if(r)this.next=t,this.error=null!==e&&void 0!==e?e:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const e=t;this.next=e.next,this.error=e.error,this.complete=e.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t){return(...e)=>{Promise.resolve().then((()=>t(...e)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wt=null;class Xt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=H.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=H.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=H.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,r){if(this.sent_)throw R("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw R("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw R("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw R("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw R("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class Yt extends Xt{initXhr(){this.xhr_.responseType="text"}}function Qt(){return Wt?Wt():new Yt}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt{constructor(t,e,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=n,this._mappings=bt(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=t=>{this._request=void 0,this._chunkMultiplier=1,t._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=t,this._transition("error"))},this._metadataErrorHandler=t=>{this._request=void 0,t._codeEquals("canceled")?this.completeTransitions_():(this._error=t,this._transition("error"))},this._promise=new Promise(((t,e)=>{this._resolve=t,this._reject=e,this._start()})),this._promise.then(null,(()=>{}))}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([e,n])=>{switch(this._state){case"running":t(e,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}}))}_createResumable(){this._resolveToken(((t,e)=>{const n=Vt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,Qt,t,e);this._request=r,r.getPromise().then((t=>{this._request=void 0,this._uploadUrl=t,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const t=this._uploadUrl;this._resolveToken(((e,n)=>{const r=jt(this._ref.storage,this._ref._location,t,this._blob),i=this._ref.storage._makeRequest(r,Qt,e,n);this._request=i,i.getPromise().then((t=>{this._request=void 0,this._updateProgress(t.current),this._needToFetchStatus=!1,t.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const t=Bt*this._chunkMultiplier,e=new $t(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,i)=>{let s;try{s=qt(this._ref._location,this._ref.storage,n,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const o=this._ref.storage._makeRequest(s,Qt,r,i);this._request=o,o.getPromise().then((t=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(t.current),t.finalized?(this._metadata=t.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){const t=Bt*this._chunkMultiplier;t<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((t,e)=>{const n=Dt(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,Qt,t,e);this._request=r,r.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((t,e)=>{const n=Ut(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,Qt,t,e);this._request=r,r.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":this._state=t,void 0!==this._request&&this._request.cancel();break;case"pausing":this._state=t,void 0!==this._request&&this._request.cancel();break;case"running":const e="paused"===this._state;this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=w(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=zt(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,n,r){const i=new Gt(e||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);-1!==e&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise();const t=this._observers.slice();t.forEach((t=>{this._notifyObserver(t)}))}_finishPromise(){if(void 0!==this._resolve){let t=!0;switch(zt(this._state)){case Ht.SUCCESS:Kt(this._resolve.bind(null,this.snapshot))();break;case Ht.CANCELED:case Ht.ERROR:const e=this._reject;Kt(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){const e=zt(this._state);switch(e){case Ht.RUNNING:case Ht.PAUSED:t.next&&Kt(t.next.bind(t,this.snapshot))();break;case Ht.SUCCESS:t.complete&&Kt(t.complete.bind(t))();break;case Ht.CANCELED:case Ht.ERROR:t.error&&Kt(t.error.bind(t,this._error))();break;default:t.error&&Kt(t.error.bind(t,this._error))()}}resume(){const t="paused"===this._state||"pausing"===this._state;return t&&this._transition("running"),t}pause(){const t="running"===this._state;return t&&this._transition("pausing"),t}cancel(){const t="running"===this._state||"pausing"===this._state;return t&&this._transition("canceling"),t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t,e){this._service=t,this._location=e instanceof O?e:O.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Zt(t,e)}get root(){const t=new O(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return gt(this._location.path)}get storage(){return this._service}get parent(){const t=pt(this._location.path);if(null===t)return null;const e=new O(this._location.bucket,t);return new Zt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw k(t)}}function te(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Jt(t,new ft(e),n)}function ee(t){t._throwIfRoot("getDownloadURL");const e=Lt(t.storage,t._location,bt());return t.storage.makeRequestWithTokens(e,Qt).then((t=>{if(null===t)throw A();return t}))}function ne(t,e){const n=mt(t._location.path,e),r=new O(t._location.bucket,n);return new Zt(t.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t){return/^[A-Za-z]+:\/\//.test(t)}function ie(t,e){return new Zt(t,e)}function se(t,e){if(t instanceof ce){const n=t;if(null==n._bucket)throw E();const r=new Zt(n,n._bucket);return null!=e?se(r,e):r}return void 0!==e?ne(t,e):t}function oe(t,e){if(e&&re(e)){if(t instanceof ce)return ie(t,e);throw S("To use ref(service, url), the first argument must be a Storage instance.")}return se(t,e)}function ae(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:O.makeFromBucketSpec(n,t)}class ce{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?O.makeFromBucketSpec(r,this._host):ae(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=O.makeFromBucketSpec(this._url,t):this._bucket=ae(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){j("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){j("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Zt(this,t)}_makeRequest(t,e,n,r){if(this._deleted)return new N(I());{const i=Q(t,this._appId,n,r,e,this._firebaseVersion);return this._requests.add(i),i.getPromise().then((()=>this._requests.delete(i)),(()=>this._requests.delete(i))),i}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const ue="@firebase/storage",le="0.9.6",he="storage";function fe(t,e,n){return t=(0,i.m9)(t),te(t,e,n)}function de(t){return t=(0,i.m9)(t),ee(t)}function pe(t,e){return t=(0,i.m9)(t),oe(t,e)}function me(t=(0,r.Mq)(),e){t=(0,i.m9)(t);const n=(0,r.qX)(t,he),s=n.getImmediate({identifier:e});return s}function ge(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new ce(n,i,s,e,r.Jn)}function ve(){(0,r.Xd)(new s.wA(he,ge,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(ue,le,""),(0,r.KN)(ue,le,"esm2017")}ve()},563:function(t,e,n){"use strict";n.d(e,{z:function(){return s}});n(1703);var r,i=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function s(t,e){void 0===e&&(e={});var n=e.registrationOptions;void 0===n&&(n={}),delete e.registrationOptions;var s=function(t){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];e&&e[t]&&e[t].apply(e,n)};"serviceWorker"in navigator&&r.then((function(){i()?(c(t,s,n),navigator.serviceWorker.ready.then((function(t){s("ready",t)})).catch((function(t){return o(s,t)}))):(a(t,s,n),navigator.serviceWorker.ready.then((function(t){s("ready",t)})).catch((function(t){return o(s,t)})))}))}function o(t,e){navigator.onLine||t("offline"),t("error",e)}function a(t,e,n){navigator.serviceWorker.register(t,n).then((function(t){e("registered",t),t.waiting?e("updated",t):t.onupdatefound=function(){e("updatefound",t);var n=t.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?e("updated",t):e("cached",t))}}})).catch((function(t){return o(e,t)}))}function c(t,e,n){fetch(t).then((function(r){404===r.status?(e("error",new Error("Service worker not found at "+t)),u()):-1===r.headers.get("content-type").indexOf("javascript")?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+r.headers.get("content-type"))),u()):a(t,e,n)})).catch((function(t){return o(e,t)}))}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){return o(emit,t)}))}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise((function(t){return window.addEventListener("load",t)})):{then:function(t){return window.addEventListener("load",t)}})},6690:function(t,e,n){"use strict";function r(t,e,n){return t.split(e).join(n)}(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=" /*# sourceMappingURL=contenteditable.vue.map */";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}})();var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{ref:"element",tag:"component",attrs:{contenteditable:t.contenteditable},on:{input:t.update,blur:t.update,paste:t.onPaste,keypress:t.onKeypress,keydown:t.fwdEv,keyup:t.fwdEv,mouseenter:t.fwdEv,mouseover:t.fwdEv,mousemove:t.fwdEv,mousedown:t.fwdEv,mouseup:t.fwdEv,auxclick:t.fwdEv,click:t.fwdEv,dblclick:t.fwdEv,contextmenu:t.fwdEv,wheel:t.fwdEv,mouseleave:t.fwdEv,mouseout:t.fwdEv,select:t.fwdEv,pointerlockchange:t.fwdEv,pointerlockerror:t.fwdEv,dragstart:t.fwdEv,drag:t.fwdEv,dragend:t.fwdEv,dragenter:t.fwdEv,dragover:t.fwdEv,dragleave:t.fwdEv,drop:t.fwdEv,transitionstart:t.fwdEv,transitioncancel:t.fwdEv,transitionend:t.fwdEv,transitionrun:t.fwdEv,compositionstart:t.fwdEv,compositionupdate:t.fwdEv,compositionend:t.fwdEv,cut:t.fwdEv,copy:t.fwdEv}})},staticRenderFns:[],_scopeId:"data-v-52c9b494",name:"contenteditable",props:{tag:String,contenteditable:{type:Boolean,default:!0},value:String,noHTML:{type:Boolean,default:!0},noNL:{type:Boolean,default:!1}},mounted:function(){this.update_content(this.value)},computed:{},data:function(){return{}},methods:{current_content:function(){return this.noHTML?this.$refs.element.innerText:this.$refs.element.innerHTML},update_content:function(t){this.noHTML?this.$refs.element.innerText=t:this.$refs.element.innerHTML=t},update:function(t){this.$emit("input",this.current_content())},onPaste:function(t){t.preventDefault();var e=(t.originalEvent||t).clipboardData.getData("text/plain");this.noNL&&(e=r(e,"\r\n"," "),e=r(e,"\n"," "),e=r(e,"\r"," ")),window.document.execCommand("insertText",!1,e),this.fwdEv(t)},onKeypress:function(t){"Enter"==t.key&&this.noNL&&(t.preventDefault(),this.$emit("returned",this.current_content)),this.fwdEv(t)},fwdEv:function(t){this.$emit(t.type,t)}},watch:{value:function(t,e){t!=this.current_content()&&this.update_content(t)}}},s={install:function(t){t.component(i.name,i)}},o=null;"undefined"!==typeof window?o=window.Vue:"undefined"!==typeof n.g&&(o=n.g.Vue),o&&o.use(s),e["Z"]=s},2809:function(t,e,n){"use strict";n(1703);function r(t,e){for(var n in e)t[n]=e[n];return t}var i=/[!'()*]/g,s=function(t){return"%"+t.charCodeAt(0).toString(16)},o=/%2C/g,a=function(t){return encodeURIComponent(t).replace(i,s).replace(o,",")};function c(t){try{return decodeURIComponent(t)}catch(e){0}return t}function u(t,e,n){void 0===e&&(e={});var r,i=n||h;try{r=i(t||"")}catch(a){r={}}for(var s in e){var o=e[s];r[s]=Array.isArray(o)?o.map(l):l(o)}return r}var l=function(t){return null==t||"object"===typeof t?t:String(t)};function h(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]})),e):e}function f(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return a(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(a(e)):r.push(a(e)+"="+a(t)))})),r.join("&")}return a(e)+"="+a(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var d=/\/?$/;function p(t,e,n,r){var i=r&&r.options.stringifyQuery,s=e.query||{};try{s=m(s)}catch(a){}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:s,params:e.params||{},fullPath:y(e,i),matched:t?v(t):[]};return n&&(o.redirectedFrom=y(n,i)),Object.freeze(o)}function m(t){if(Array.isArray(t))return t.map(m);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=m(t[n]);return e}return t}var g=p(null,{path:"/"});function v(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function y(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;void 0===i&&(i="");var s=e||f;return(n||"/")+s(r)+i}function w(t,e,n){return e===g?t===e:!!e&&(t.path&&e.path?t.path.replace(d,"")===e.path.replace(d,"")&&(n||t.hash===e.hash&&_(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&_(t.query,e.query)&&_(t.params,e.params))))}function _(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,i){var s=t[n],o=r[i];if(o!==n)return!1;var a=e[n];return null==s||null==a?s===a:"object"===typeof s&&"object"===typeof a?_(s,a):String(s)===String(a)}))}function b(t,e){return 0===t.path.replace(d,"/").indexOf(e.path.replace(d,"/"))&&(!e.hash||t.hash===e.hash)&&E(t.query,e.query)}function E(t,e){for(var n in e)if(!(n in t))return!1;return!0}function T(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],s=n.enteredCbs[r];if(i&&s){delete n.enteredCbs[r];for(var o=0;o<s.length;o++)i._isBeingDestroyed||s[o](i)}}}}var C={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,i=e.children,s=e.parent,o=e.data;o.routerView=!0;var a=s.$createElement,c=n.name,u=s.$route,l=s._routerViewCache||(s._routerViewCache={}),h=0,f=!1;while(s&&s._routerRoot!==s){var d=s.$vnode?s.$vnode.data:{};d.routerView&&h++,d.keepAlive&&s._directInactive&&s._inactive&&(f=!0),s=s.$parent}if(o.routerViewDepth=h,f){var p=l[c],m=p&&p.component;return m?(p.configProps&&A(m,o,p.route,p.configProps),a(m,o,i)):a()}var g=u.matched[h],v=g&&g.components[c];if(!g||!v)return l[c]=null,a();l[c]={component:v},o.registerRouteInstance=function(t,e){var n=g.instances[c];(e&&n!==t||!e&&n===t)&&(g.instances[c]=e)},(o.hook||(o.hook={})).prepatch=function(t,e){g.instances[c]=e.componentInstance},o.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==g.instances[c]&&(g.instances[c]=t.componentInstance),T(u)};var y=g.props&&g.props[c];return y&&(r(l[c],{route:u,configProps:y}),A(v,o,u,y)),a(v,o,i)}};function A(t,e,n,i){var s=e.props=S(n,i);if(s){s=e.props=r({},s);var o=e.attrs=e.attrs||{};for(var a in s)t.props&&a in t.props||(o[a]=s[a],delete s[a])}}function S(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function I(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function k(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}function x(t){return t.replace(/\/(?:\s*\/)+/g,"/")}var R=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},O=Y,N=U,D=$,L=j,M=X,P=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function U(t,e){var n,r=[],i=0,s=0,o="",a=e&&e.delimiter||"/";while(null!=(n=P.exec(t))){var c=n[0],u=n[1],l=n.index;if(o+=t.slice(s,l),s=l+c.length,u)o+=u[1];else{var h=t[s],f=n[2],d=n[3],p=n[4],m=n[5],g=n[6],v=n[7];o&&(r.push(o),o="");var y=null!=f&&null!=h&&h!==f,w="+"===g||"*"===g,_="?"===g||"*"===g,b=n[2]||a,E=p||m;r.push({name:d||i++,prefix:f||"",delimiter:b,optional:_,repeat:w,partial:y,asterisk:!!v,pattern:E?q(E):v?".*":"[^"+B(b)+"]+?"})}}return s<t.length&&(o+=t.substr(s)),o&&r.push(o),r}function $(t,e){return j(U(t,e),e)}function F(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function V(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function j(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",z(e)));return function(e,r){for(var i="",s=e||{},o=r||{},a=o.pretty?F:encodeURIComponent,c=0;c<t.length;c++){var u=t[c];if("string"!==typeof u){var l,h=s[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(R(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var f=0;f<h.length;f++){if(l=a(h[f]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===f?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?V(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function B(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function q(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function H(t,e){return t.keys=e,t}function z(t){return t&&t.sensitive?"":"i"}function G(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return H(t,e)}function K(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(Y(t[i],e,n).source);var s=new RegExp("(?:"+r.join("|")+")",z(n));return H(s,e)}function W(t,e,n){return X(U(t,n),e,n)}function X(t,e,n){R(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,s="",o=0;o<t.length;o++){var a=t[o];if("string"===typeof a)s+=B(a);else{var c=B(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",s+=u}}var l=B(n.delimiter||"/"),h=s.slice(-l.length)===l;return r||(s=(h?s.slice(0,-l.length):s)+"(?:"+l+"(?=$))?"),s+=i?"$":r&&h?"":"(?="+l+"|$)",H(new RegExp("^"+s,z(n)),e)}function Y(t,e,n){return R(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?G(t,e):R(t)?K(t,e,n):W(t,e,n)}O.parse=N,O.compile=D,O.tokensToFunction=L,O.tokensToRegExp=M;var Q=Object.create(null);function J(t,e,n){e=e||{};try{var r=Q[t]||(Q[t]=O.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(i){return""}finally{delete e[0]}}function Z(t,e,n,i){var s="string"===typeof t?{path:t}:t;if(s._normalized)return s;if(s.name){s=r({},t);var o=s.params;return o&&"object"===typeof o&&(s.params=r({},o)),s}if(!s.path&&s.params&&e){s=r({},s),s._normalized=!0;var a=r(r({},e.params),s.params);if(e.name)s.name=e.name,s.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;s.path=J(c,a,"path "+e.path)}else 0;return s}var l=k(s.path||""),h=e&&e.path||"/",f=l.path?I(l.path,h,n||s.append):h,d=u(l.query,s.query,i&&i.options.parseQuery),p=s.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:f,query:d,hash:p}}var tt,et=[String,Object],nt=[String,Array],rt=function(){},it={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:nt,default:"click"}},render:function(t){var e=this,n=this.$router,i=this.$route,s=n.resolve(this.to,i,this.append),o=s.location,a=s.route,c=s.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,f=null==l?"router-link-active":l,d=null==h?"router-link-exact-active":h,m=null==this.activeClass?f:this.activeClass,g=null==this.exactActiveClass?d:this.exactActiveClass,v=a.redirectedFrom?p(null,Z(a.redirectedFrom),null,n):a;u[g]=w(i,v,this.exactPath),u[m]=this.exact||this.exactPath?u[g]:b(i,v);var y=u[g]?this.ariaCurrentValue:null,_=function(t){st(t)&&(e.replace?n.replace(o,rt):n.push(o,rt))},E={click:st};Array.isArray(this.event)?this.event.forEach((function(t){E[t]=_})):E[this.event]=_;var T={class:u},C=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:_,isActive:u[m],isExactActive:u[g]});if(C){if(1===C.length)return C[0];if(C.length>1||!C.length)return 0===C.length?t():t("span",{},C)}if("a"===this.tag)T.on=E,T.attrs={href:c,"aria-current":y};else{var A=ot(this.$slots.default);if(A){A.isStatic=!1;var S=A.data=r({},A.data);for(var I in S.on=S.on||{},S.on){var k=S.on[I];I in E&&(S.on[I]=Array.isArray(k)?k:[k])}for(var x in E)x in S.on?S.on[x].push(E[x]):S.on[x]=_;var R=A.data.attrs=r({},A.data.attrs);R.href=c,R["aria-current"]=y}else T.on=E}return t(this.tag,T,this.$slots.default)}};function st(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ot(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=ot(e.children)))return e}}function at(t){if(!at.installed||tt!==t){at.installed=!0,tt=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",C),t.component("RouterLink",it);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ct="undefined"!==typeof window;function ut(t,e,n,r,i){var s=e||[],o=n||Object.create(null),a=r||Object.create(null);t.forEach((function(t){lt(s,o,a,t,i)}));for(var c=0,u=s.length;c<u;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),u--,c--);return{pathList:s,pathMap:o,nameMap:a}}function lt(t,e,n,r,i,s){var o=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=ft(o,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:ht(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:s,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=s?x(s+"/"+r.path):void 0;lt(t,e,n,r,l,i)})),e[l.path]||(t.push(l.path),e[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],f=0;f<h.length;++f){var d=h[f];0;var p={path:d,children:r.children};lt(t,e,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function ht(t,e){var n=O(t,[],e);return n}function ft(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:x(e.path+"/"+t)}function dt(t,e){var n=ut(t),r=n.pathList,i=n.pathMap,s=n.nameMap;function o(t){ut(t,r,i,s)}function a(t,e){var n="object"!==typeof t?s[t]:void 0;ut([e||t],r,i,s,n),n&&n.alias.length&&ut(n.alias.map((function(t){return{path:t,children:[e]}})),r,i,s,n)}function c(){return r.map((function(t){return i[t]}))}function u(t,n,o){var a=Z(t,n,!1,e),c=a.name;if(c){var u=s[c];if(!u)return f(null,a);var l=u.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=J(u.path,a.params,'named route "'+c+'"'),f(u,a,o)}if(a.path){a.params={};for(var d=0;d<r.length;d++){var p=r[d],m=i[p];if(pt(m.regex,a.path,a.params))return f(m,a,o)}}return f(null,a)}function l(t,n){var r=t.redirect,i="function"===typeof r?r(p(t,n,null,e)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return f(null,n);var o=i,a=o.name,c=o.path,l=n.query,h=n.hash,d=n.params;if(l=o.hasOwnProperty("query")?o.query:l,h=o.hasOwnProperty("hash")?o.hash:h,d=o.hasOwnProperty("params")?o.params:d,a){s[a];return u({_normalized:!0,name:a,query:l,hash:h,params:d},void 0,n)}if(c){var m=mt(c,t),g=J(m,d,'redirect route with path "'+m+'"');return u({_normalized:!0,path:g,query:l,hash:h},void 0,n)}return f(null,n)}function h(t,e,n){var r=J(n,e.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var s=i.matched,o=s[s.length-1];return e.params=i.params,f(o,e)}return f(null,e)}function f(t,n,r){return t&&t.redirect?l(t,r||n):t&&t.matchAs?h(t,n,t.matchAs):p(t,n,r,e)}return{match:u,addRoute:a,getRoutes:c,addRoutes:o}}function pt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,s=r.length;i<s;++i){var o=t.keys[i-1];o&&(n[o.name||"pathMatch"]="string"===typeof r[i]?c(r[i]):r[i])}return!0}function mt(t,e){return I(t,e.parent?e.parent.path:"/",!0)}var gt=ct&&window.performance&&window.performance.now?window.performance:Date;function vt(){return gt.now().toFixed(3)}var yt=vt();function wt(){return yt}function _t(t){return yt=t}var bt=Object.create(null);function Et(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=r({},window.history.state);return n.key=wt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",At),function(){window.removeEventListener("popstate",At)}}function Tt(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick((function(){var s=St(),o=i.call(t,e,n,r?s:null);o&&("function"===typeof o.then?o.then((function(t){Dt(t,s)})).catch((function(t){0})):Dt(o,s))}))}}function Ct(){var t=wt();t&&(bt[t]={x:window.pageXOffset,y:window.pageYOffset})}function At(t){Ct(),t.state&&t.state.key&&_t(t.state.key)}function St(){var t=wt();if(t)return bt[t]}function It(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-r.left-e.x,y:i.top-r.top-e.y}}function kt(t){return Ot(t.x)||Ot(t.y)}function xt(t){return{x:Ot(t.x)?t.x:window.pageXOffset,y:Ot(t.y)?t.y:window.pageYOffset}}function Rt(t){return{x:Ot(t.x)?t.x:0,y:Ot(t.y)?t.y:0}}function Ot(t){return"number"===typeof t}var Nt=/^#\d/;function Dt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=Nt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var i=t.offset&&"object"===typeof t.offset?t.offset:{};i=Rt(i),e=It(r,i)}else kt(t)&&(e=xt(t))}else n&&kt(t)&&(e=xt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Lt=ct&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Mt(t,e){Ct();var n=window.history;try{if(e){var i=r({},n.state);i.key=wt(),n.replaceState(i,"",t)}else n.pushState({key:_t(vt())},"",t)}catch(s){window.location[e?"replace":"assign"](t)}}function Pt(t){Mt(t,!0)}function Ut(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],(function(){r(i+1)})):r(i+1)};r(0)}var $t={redirected:2,aborted:4,cancelled:8,duplicated:16};function Ft(t,e){return qt(t,e,$t.redirected,'Redirected when going from "'+t.fullPath+'" to "'+zt(e)+'" via a navigation guard.')}function Vt(t,e){var n=qt(t,e,$t.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function jt(t,e){return qt(t,e,$t.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Bt(t,e){return qt(t,e,$t.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function qt(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var Ht=["params","query","hash"];function zt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return Ht.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Gt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Kt(t,e){return Gt(t)&&t._isRouter&&(null==e||t.type===e)}function Wt(t){return function(e,n,r){var i=!1,s=0,o=null;Xt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){i=!0,s++;var c,u=Zt((function(e){Jt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),n.components[a]=e,s--,s<=0&&r()})),l=Zt((function(t){var e="Failed to resolve async component "+a+": "+t;o||(o=Gt(t)?t:new Error(e),r(o))}));try{c=t(u,l)}catch(f){l(f)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Xt(t,e){return Yt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Yt(t){return Array.prototype.concat.apply([],t)}var Qt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Jt(t){return t.__esModule||Qt&&"Module"===t[Symbol.toStringTag]}function Zt(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=g,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(ct){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ne(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function re(t,e,n,r){var i=Xt(t,(function(t,r,i,s){var o=ie(t,e);if(o)return Array.isArray(o)?o.map((function(t){return n(t,r,i,s)})):n(o,r,i,s)}));return Yt(r?i.reverse():i)}function ie(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function se(t){return re(t,"beforeRouteLeave",ae,!0)}function oe(t){return re(t,"beforeRouteUpdate",ae)}function ae(t,e){if(e)return function(){return t.apply(e,arguments)}}function ce(t){return re(t,"beforeRouteEnter",(function(t,e,n,r){return ue(t,n,r)}))}function ue(t,e,n){return function(r,i,s){return t(r,i,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),s(t)}))}}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(o){throw this.errorCbs.forEach((function(t){t(o)})),o}var s=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach((function(t){t&&t(r,s)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!i.ready&&(Kt(t,$t.redirected)&&s===g||(i.ready=!0,i.readyErrorCbs.forEach((function(e){e(t)}))))}))},te.prototype.confirmTransition=function(t,e,n){var r=this,i=this.current;this.pending=t;var s=function(t){!Kt(t)&&Gt(t)&&(r.errorCbs.length?r.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},o=t.matched.length-1,a=i.matched.length-1;if(w(t,i)&&o===a&&t.matched[o]===i.matched[a])return this.ensureURL(),t.hash&&Tt(this.router,i,t,!1),s(Vt(i,t));var c=ne(this.current.matched,t.matched),u=c.updated,l=c.deactivated,h=c.activated,f=[].concat(se(l),this.router.beforeHooks,oe(u),h.map((function(t){return t.beforeEnter})),Wt(h)),d=function(e,n){if(r.pending!==t)return s(jt(i,t));try{e(t,i,(function(e){!1===e?(r.ensureURL(!0),s(Bt(i,t))):Gt(e)?(r.ensureURL(!0),s(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(s(Ft(i,t)),"object"===typeof e&&e.replace?r.replace(e):r.push(e)):n(e)}))}catch(o){s(o)}};Ut(f,d,(function(){var n=ce(h),o=n.concat(r.router.resolveHooks);Ut(o,d,(function(){if(r.pending!==t)return s(jt(i,t));r.pending=null,e(t),r.router.app&&r.router.app.$nextTick((function(){T(t)}))}))}))},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=g,this.pending=null};var le=function(t){function e(e,n){t.call(this,e,n),this._startLocation=he(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Lt&&n;r&&this.listeners.push(Et());var i=function(){var n=t.current,i=he(t.base);t.current===g&&i===t._startLocation||t.transitionTo(i,(function(t){r&&Tt(e,t,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){Mt(x(r.base+t.fullPath)),Tt(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){Pt(x(r.base+t.fullPath)),Tt(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(he(this.base)!==this.current.fullPath){var e=x(this.base+this.current.fullPath);t?Mt(e):Pt(e)}},e.prototype.getCurrentLocation=function(){return he(this.base)},e}(te);function he(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(x(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var fe=function(t){function e(e,n,r){t.call(this,e,n),r&&de(this.base)||pe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Lt&&n;r&&this.listeners.push(Et());var i=function(){var e=t.current;pe()&&t.transitionTo(me(),(function(n){r&&Tt(t.router,n,e,!0),Lt||ye(n.fullPath)}))},s=Lt?"popstate":"hashchange";window.addEventListener(s,i),this.listeners.push((function(){window.removeEventListener(s,i)}))}},e.prototype.push=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){ve(t.fullPath),Tt(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){ye(t.fullPath),Tt(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;me()!==e&&(t?ve(e):ye(e))},e.prototype.getCurrentLocation=function(){return me()},e}(te);function de(t){var e=he(t);if(!/^\/#/.test(e))return window.location.replace(x(t+"/#"+e)),!0}function pe(){var t=me();return"/"===t.charAt(0)||(ye("/"+t),!1)}function me(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function ge(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function ve(t){Lt?Mt(ge(t)):window.location.hash=t}function ye(t){Lt?Pt(ge(t)):window.location.replace(ge(t))}var we=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){Kt(t,$t.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),_e=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=dt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Lt&&!1!==t.fallback,this.fallback&&(e="hash"),ct||(e="abstract"),this.mode=e,e){case"history":this.history=new le(this,t.base);break;case"hash":this.history=new fe(this,t.base,this.fallback);break;case"abstract":this.history=new we(this,t.base);break;default:0}},be={currentRoute:{configurable:!0}};function Ee(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Te(t,e,n){var r="hash"===n?"#"+e:e;return t?x(t+"/"+r):r}_e.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},be.currentRoute.get=function(){return this.history&&this.history.current},_e.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof le||n instanceof fe){var r=function(t){var r=n.current,i=e.options.scrollBehavior,s=Lt&&i;s&&"fullPath"in t&&Tt(e,t,r,!1)},i=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},_e.prototype.beforeEach=function(t){return Ee(this.beforeHooks,t)},_e.prototype.beforeResolve=function(t){return Ee(this.resolveHooks,t)},_e.prototype.afterEach=function(t){return Ee(this.afterHooks,t)},_e.prototype.onReady=function(t,e){this.history.onReady(t,e)},_e.prototype.onError=function(t){this.history.onError(t)},_e.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},_e.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},_e.prototype.go=function(t){this.history.go(t)},_e.prototype.back=function(){this.go(-1)},_e.prototype.forward=function(){this.go(1)},_e.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},_e.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=Z(t,e,n,this),i=this.match(r,e),s=i.redirectedFrom||i.fullPath,o=this.history.base,a=Te(o,s,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},_e.prototype.getRoutes=function(){return this.matcher.getRoutes()},_e.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},_e.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(_e.prototype,be),_e.install=at,_e.version="3.5.4",_e.isNavigationFailure=Kt,_e.NavigationFailureType=$t,_e.START_LOCATION=g,ct&&window.Vue&&window.Vue.use(_e),e["Z"]=_e},8935:function(t,e,n){"use strict";n(4633);var r=Object.freeze({});function i(t){return void 0===t||null===t}function s(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return null!==t&&"object"===typeof t}var l=Object.prototype.toString;function h(t){return"[object Object]"===l.call(t)}function f(t){return"[object RegExp]"===l.call(t)}function d(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function p(t){return s(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function m(t){return null==t?"":Array.isArray(t)||h(t)&&t.toString===l?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}v("slot,component",!0);var y=v("key,ref,slot,slot-scope,is");function w(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function b(t,e){return _.call(t,e)}function E(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var T=/-(\w)/g,C=E((function(t){return t.replace(T,(function(t,e){return e?e.toUpperCase():""}))})),A=E((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),S=/\B([A-Z])/g,I=E((function(t){return t.replace(S,"-$1").toLowerCase()}));function k(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function x(t,e){return t.bind(e)}var R=Function.prototype.bind?x:k;function O(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function N(t,e){for(var n in e)t[n]=e[n];return t}function D(t){for(var e={},n=0;n<t.length;n++)t[n]&&N(e,t[n]);return e}function L(t,e,n){}var M=function(t,e,n){return!1},P=function(t){return t};function U(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),s=Array.isArray(e);if(i&&s)return t.length===e.length&&t.every((function(t,n){return U(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||s)return!1;var o=Object.keys(t),a=Object.keys(e);return o.length===a.length&&o.every((function(n){return U(t[n],e[n])}))}catch(c){return!1}}function $(t,e){for(var n=0;n<t.length;n++)if(U(t[n],e))return n;return-1}function F(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var V="data-server-rendered",j=["component","directive","filter"],B=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:M,isReservedAttr:M,isUnknownElement:M,getTagNamespace:L,parsePlatformTagName:P,mustUseProp:M,async:!0,_lifecycleHooks:B},H=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function z(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function G(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var K=new RegExp("[^"+H.source+".$_\\d]");function W(t){if(!K.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var X,Y="__proto__"in{},Q="undefined"!==typeof window,J="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Z=J&&WXEnvironment.platform.toLowerCase(),tt=Q&&window.navigator.userAgent.toLowerCase(),et=tt&&/msie|trident/.test(tt),nt=tt&&tt.indexOf("msie 9.0")>0,rt=tt&&tt.indexOf("edge/")>0,it=(tt&&tt.indexOf("android"),tt&&/iphone|ipad|ipod|ios/.test(tt)||"ios"===Z),st=(tt&&/chrome\/\d+/.test(tt),tt&&/phantomjs/.test(tt),tt&&tt.match(/firefox\/(\d+)/)),ot={}.watch,at=!1;if(Q)try{var ct={};Object.defineProperty(ct,"passive",{get:function(){at=!0}}),window.addEventListener("test-passive",null,ct)}catch(Ao){}var ut=function(){return void 0===X&&(X=!Q&&!J&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),X},lt=Q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ht(t){return"function"===typeof t&&/native code/.test(t.toString())}var ft,dt="undefined"!==typeof Symbol&&ht(Symbol)&&"undefined"!==typeof Reflect&&ht(Reflect.ownKeys);ft="undefined"!==typeof Set&&ht(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var pt=L,mt=0,gt=function(){this.id=mt++,this.subs=[]};gt.prototype.addSub=function(t){this.subs.push(t)},gt.prototype.removeSub=function(t){w(this.subs,t)},gt.prototype.depend=function(){gt.target&&gt.target.addDep(this)},gt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},gt.target=null;var vt=[];function yt(t){vt.push(t),gt.target=t}function wt(){vt.pop(),gt.target=vt[vt.length-1]}var _t=function(t,e,n,r,i,s,o,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},bt={child:{configurable:!0}};bt.child.get=function(){return this.componentInstance},Object.defineProperties(_t.prototype,bt);var Et=function(t){void 0===t&&(t="");var e=new _t;return e.text=t,e.isComment=!0,e};function Tt(t){return new _t(void 0,void 0,void 0,String(t))}function Ct(t){var e=new _t(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var At=Array.prototype,St=Object.create(At),It=["push","pop","shift","unshift","splice","sort","reverse"];It.forEach((function(t){var e=At[t];G(St,t,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&o.observeArray(i),o.dep.notify(),s}))}));var kt=Object.getOwnPropertyNames(St),xt=!0;function Rt(t){xt=t}var Ot=function(t){this.value=t,this.dep=new gt,this.vmCount=0,G(t,"__ob__",this),Array.isArray(t)?(Y?Nt(t,St):Dt(t,St,kt),this.observeArray(t)):this.walk(t)};function Nt(t,e){t.__proto__=e}function Dt(t,e,n){for(var r=0,i=n.length;r<i;r++){var s=n[r];G(t,s,e[s])}}function Lt(t,e){var n;if(u(t)&&!(t instanceof _t))return b(t,"__ob__")&&t.__ob__ instanceof Ot?n=t.__ob__:xt&&!ut()&&(Array.isArray(t)||h(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Ot(t)),e&&n&&n.vmCount++,n}function Mt(t,e,n,r,i){var s=new gt,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var a=o&&o.get,c=o&&o.set;a&&!c||2!==arguments.length||(n=t[e]);var u=!i&&Lt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return gt.target&&(s.depend(),u&&(u.dep.depend(),Array.isArray(e)&&$t(e))),e},set:function(e){var r=a?a.call(t):n;e===r||e!==e&&r!==r||a&&!c||(c?c.call(t,e):n=e,u=!i&&Lt(e),s.notify())}})}}function Pt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Mt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Ut(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function $t(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&$t(e)}Ot.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Mt(t,e[n])},Ot.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Lt(t[e])};var Ft=q.optionMergeStrategies;function Vt(t,e){if(!e)return t;for(var n,r,i,s=dt?Reflect.ownKeys(e):Object.keys(e),o=0;o<s.length;o++)n=s[o],"__ob__"!==n&&(r=t[n],i=e[n],b(t,n)?r!==i&&h(r)&&h(i)&&Vt(r,i):Pt(t,n,i));return t}function jt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?Vt(r,i):i}:e?t?function(){return Vt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Bt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?qt(n):n}function qt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Ht(t,e,n,r){var i=Object.create(t||null);return e?N(i,e):i}Ft.data=function(t,e,n){return n?jt(t,e,n):e&&"function"!==typeof e?t:jt(t,e)},B.forEach((function(t){Ft[t]=Bt})),j.forEach((function(t){Ft[t+"s"]=Ht})),Ft.watch=function(t,e,n,r){if(t===ot&&(t=void 0),e===ot&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var s in N(i,t),e){var o=i[s],a=e[s];o&&!Array.isArray(o)&&(o=[o]),i[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return i},Ft.props=Ft.methods=Ft.inject=Ft.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return N(i,t),e&&N(i,e),i},Ft.provide=jt;var zt=function(t,e){return void 0===e?t:e};function Gt(t,e){var n=t.props;if(n){var r,i,s,o={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(s=C(i),o[s]={type:null})}else if(h(n))for(var a in n)i=n[a],s=C(a),o[s]=h(i)?i:{type:i};else 0;t.props=o}}function Kt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(h(n))for(var s in n){var o=n[s];r[s]=h(o)?N({from:s},o):{from:o}}else 0}}function Wt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Xt(t,e,n){if("function"===typeof e&&(e=e.options),Gt(e,n),Kt(e,n),Wt(e),!e._base&&(e.extends&&(t=Xt(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Xt(t,e.mixins[r],n);var s,o={};for(s in t)a(s);for(s in e)b(t,s)||a(s);function a(r){var i=Ft[r]||zt;o[r]=i(t[r],e[r],n,r)}return o}function Yt(t,e,n,r){if("string"===typeof n){var i=t[e];if(b(i,n))return i[n];var s=C(n);if(b(i,s))return i[s];var o=A(s);if(b(i,o))return i[o];var a=i[n]||i[s]||i[o];return a}}function Qt(t,e,n,r){var i=e[t],s=!b(n,t),o=n[t],a=ne(Boolean,i.type);if(a>-1)if(s&&!b(i,"default"))o=!1;else if(""===o||o===I(t)){var c=ne(String,i.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Jt(r,i,t);var u=xt;Rt(!0),Lt(o),Rt(u)}return o}function Jt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==te(e.type)?r.call(t):r}}var Zt=/^\s*function (\w+)/;function te(t){var e=t&&t.toString().match(Zt);return e?e[1]:""}function ee(t,e){return te(t)===te(e)}function ne(t,e){if(!Array.isArray(e))return ee(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(ee(e[n],t))return n;return-1}function re(t,e,n){yt();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var s=0;s<i.length;s++)try{var o=!1===i[s].call(r,t,e,n);if(o)return}catch(Ao){se(Ao,r,"errorCaptured hook")}}}se(t,e,n)}finally{wt()}}function ie(t,e,n,r,i){var s;try{s=n?t.apply(e,n):t.call(e),s&&!s._isVue&&p(s)&&!s._handled&&(s.catch((function(t){return re(t,r,i+" (Promise/async)")})),s._handled=!0)}catch(Ao){re(Ao,r,i)}return s}function se(t,e,n){if(q.errorHandler)try{return q.errorHandler.call(null,t,e,n)}catch(Ao){Ao!==t&&oe(Ao,null,"config.errorHandler")}oe(t,e,n)}function oe(t,e,n){if(!Q&&!J||"undefined"===typeof console)throw t;console.error(t)}var ae,ce=!1,ue=[],le=!1;function he(){le=!1;var t=ue.slice(0);ue.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ht(Promise)){var fe=Promise.resolve();ae=function(){fe.then(he),it&&setTimeout(L)},ce=!0}else if(et||"undefined"===typeof MutationObserver||!ht(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ae="undefined"!==typeof setImmediate&&ht(setImmediate)?function(){setImmediate(he)}:function(){setTimeout(he,0)};else{var de=1,pe=new MutationObserver(he),me=document.createTextNode(String(de));pe.observe(me,{characterData:!0}),ae=function(){de=(de+1)%2,me.data=String(de)},ce=!0}function ge(t,e){var n;if(ue.push((function(){if(t)try{t.call(e)}catch(Ao){re(Ao,e,"nextTick")}else n&&n(e)})),le||(le=!0,ae()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var ve=new ft;function ye(t){we(t,ve),ve.clear()}function we(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!u(t)||Object.isFrozen(t)||t instanceof _t)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(i){n=t.length;while(n--)we(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)we(t[r[n]],e)}}}var _e=E((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function be(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return ie(r,null,arguments,e,"v-on handler");for(var i=r.slice(),s=0;s<i.length;s++)ie(i[s],null,t,e,"v-on handler")}return n.fns=t,n}function Ee(t,e,n,r,s,a){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=_e(c),i(u)||(i(l)?(i(u.fns)&&(u=t[c]=be(u,a)),o(h.once)&&(u=t[c]=s(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)i(t[c])&&(h=_e(c),r(h.name,e[c],h.capture))}function Te(t,e,n){var r;t instanceof _t&&(t=t.data.hook||(t.data.hook={}));var a=t[e];function c(){n.apply(this,arguments),w(r.fns,c)}i(a)?r=be([c]):s(a.fns)&&o(a.merged)?(r=a,r.fns.push(c)):r=be([a,c]),r.merged=!0,t[e]=r}function Ce(t,e,n){var r=e.options.props;if(!i(r)){var o={},a=t.attrs,c=t.props;if(s(a)||s(c))for(var u in r){var l=I(u);Ae(o,c,u,l,!0)||Ae(o,a,u,l,!1)}return o}}function Ae(t,e,n,r,i){if(s(e)){if(b(e,n))return t[n]=e[n],i||delete e[n],!0;if(b(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function Se(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Ie(t){return c(t)?[Tt(t)]:Array.isArray(t)?xe(t):void 0}function ke(t){return s(t)&&s(t.text)&&a(t.isComment)}function xe(t,e){var n,r,a,u,l=[];for(n=0;n<t.length;n++)r=t[n],i(r)||"boolean"===typeof r||(a=l.length-1,u=l[a],Array.isArray(r)?r.length>0&&(r=xe(r,(e||"")+"_"+n),ke(r[0])&&ke(u)&&(l[a]=Tt(u.text+r[0].text),r.shift()),l.push.apply(l,r)):c(r)?ke(u)?l[a]=Tt(u.text+r):""!==r&&l.push(Tt(r)):ke(r)&&ke(u)?l[a]=Tt(u.text+r.text):(o(t._isVList)&&s(r.tag)&&i(r.key)&&s(e)&&(r.key="__vlist"+e+"_"+n+"__"),l.push(r)));return l}function Re(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Oe(t){var e=Ne(t.$options.inject,t);e&&(Rt(!1),Object.keys(e).forEach((function(n){Mt(t,n,e[n])})),Rt(!0))}function Ne(t,e){if(t){for(var n=Object.create(null),r=dt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var s=r[i];if("__ob__"!==s){var o=t[s].from,a=e;while(a){if(a._provided&&b(a._provided,o)){n[s]=a._provided[o];break}a=a.$parent}if(!a)if("default"in t[s]){var c=t[s].default;n[s]="function"===typeof c?c.call(e):c}else 0}}return n}}function De(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var s=t[r],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==e&&s.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(Le)&&delete n[u];return n}function Le(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Me(t){return t.isComment&&t.asyncFactory}function Pe(t,e,n){var i,s=Object.keys(e).length>0,o=t?!!t.$stable:!s,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&n&&n!==r&&a===n.$key&&!s&&!n.$hasNormal)return n;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=Ue(e,c,t[c]))}else i={};for(var u in e)u in i||(i[u]=$e(e,u));return t&&Object.isExtensible(t)&&(t._normalized=i),G(i,"$stable",o),G(i,"$key",a),G(i,"$hasNormal",s),i}function Ue(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:Ie(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!Me(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function $e(t,e){return function(){return t[e]}}function Fe(t,e){var n,r,i,o,a;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))if(dt&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),l=c.next();while(!l.done)n.push(e(l.value,n.length)),l=c.next()}else for(o=Object.keys(t),n=new Array(o.length),r=0,i=o.length;r<i;r++)a=o[r],n[r]=e(t[a],a,r);return s(n)||(n=[]),n._isVList=!0,n}function Ve(t,e,n,r){var i,s=this.$scopedSlots[t];s?(n=n||{},r&&(n=N(N({},r),n)),i=s(n)||("function"===typeof e?e():e)):i=this.$slots[t]||("function"===typeof e?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},i):i}function je(t){return Yt(this.$options,"filters",t,!0)||P}function Be(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function qe(t,e,n,r,i){var s=q.keyCodes[e]||n;return i&&r&&!q.keyCodes[e]?Be(i,r):s?Be(s,t):r?I(r)!==e:void 0===t}function He(t,e,n,r,i){if(n)if(u(n)){var s;Array.isArray(n)&&(n=D(n));var o=function(o){if("class"===o||"style"===o||y(o))s=t;else{var a=t.attrs&&t.attrs.type;s=r||q.mustUseProp(e,a,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=C(o),u=I(o);if(!(c in s)&&!(u in s)&&(s[o]=n[o],i)){var l=t.on||(t.on={});l["update:"+o]=function(t){n[o]=t}}};for(var a in n)o(a)}else;return t}function ze(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ke(r,"__static__"+t,!1)),r}function Ge(t,e,n){return Ke(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ke(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&We(t[r],e+"_"+r,n);else We(t,e,n)}function We(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Xe(t,e){if(e)if(h(e)){var n=t.on=t.on?N({},t.on):{};for(var r in e){var i=n[r],s=e[r];n[r]=i?[].concat(i,s):s}}else;return t}function Ye(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var s=t[i];Array.isArray(s)?Ye(s,e,n):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return r&&(e.$key=r),e}function Qe(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Je(t,e){return"string"===typeof t?e+t:t}function Ze(t){t._o=Ge,t._n=g,t._s=m,t._l=Fe,t._t=Ve,t._q=U,t._i=$,t._m=ze,t._f=je,t._k=qe,t._b=He,t._v=Tt,t._e=Et,t._u=Ye,t._g=Xe,t._d=Qe,t._p=Je}function tn(t,e,n,i,s){var a,c=this,u=s.options;b(i,"_uid")?(a=Object.create(i),a._original=i):(a=i,i=i._original);var l=o(u._compiled),h=!l;this.data=t,this.props=e,this.children=n,this.parent=i,this.listeners=t.on||r,this.injections=Ne(u.inject,i),this.slots=function(){return c.$slots||Pe(t.scopedSlots,c.$slots=De(n,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Pe(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Pe(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var s=pn(a,t,e,n,r,h);return s&&!Array.isArray(s)&&(s.fnScopeId=u._scopeId,s.fnContext=i),s}:this._c=function(t,e,n,r){return pn(a,t,e,n,r,h)}}function en(t,e,n,i,o){var a=t.options,c={},u=a.props;if(s(u))for(var l in u)c[l]=Qt(l,u,e||r);else s(n.attrs)&&rn(c,n.attrs),s(n.props)&&rn(c,n.props);var h=new tn(n,c,o,i,t),f=a.render.call(null,h._c,h);if(f instanceof _t)return nn(f,n,h.parent,a,h);if(Array.isArray(f)){for(var d=Ie(f)||[],p=new Array(d.length),m=0;m<d.length;m++)p[m]=nn(d[m],n,h.parent,a,h);return p}}function nn(t,e,n,r,i){var s=Ct(t);return s.fnContext=n,s.fnOptions=r,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function rn(t,e){for(var n in e)t[C(n)]=e[n]}Ze(tn.prototype);var sn={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;sn.prepatch(n,n)}else{var r=t.componentInstance=cn(t,Nn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Un(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,jn(n,"mounted")),t.data.keepAlive&&(e._isMounted?tr(n):Fn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Vn(e,!0):e.$destroy())}},on=Object.keys(sn);function an(t,e,n,r,a){if(!i(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var l;if(i(t.cid)&&(l=t,t=Cn(l,c),void 0===t))return Tn(l,e,n,r,a);e=e||{},Tr(t),s(e.model)&&hn(t.options,e);var h=Ce(e,t,a);if(o(t.options.functional))return en(t,h,e,n,r);var f=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}un(e);var p=t.options.name||a,m=new _t("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:f,tag:a,children:r},l);return m}}}function cn(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return s(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function un(t){for(var e=t.hook||(t.hook={}),n=0;n<on.length;n++){var r=on[n],i=e[r],s=sn[r];i===s||i&&i._merged||(e[r]=i?ln(s,i):s)}}function ln(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function hn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),o=i[r],a=e.model.callback;s(o)?(Array.isArray(o)?-1===o.indexOf(a):o!==a)&&(i[r]=[a].concat(o)):i[r]=a}var fn=1,dn=2;function pn(t,e,n,r,i,s){return(Array.isArray(n)||c(n))&&(i=r,r=n,n=void 0),o(s)&&(i=dn),mn(t,e,n,r,i)}function mn(t,e,n,r,i){if(s(n)&&s(n.__ob__))return Et();if(s(n)&&s(n.is)&&(e=n.is),!e)return Et();var o,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===dn?r=Ie(r):i===fn&&(r=Se(r)),"string"===typeof e)?(a=t.$vnode&&t.$vnode.ns||q.getTagNamespace(e),o=q.isReservedTag(e)?new _t(q.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!s(c=Yt(t.$options,"components",e))?new _t(e,n,r,void 0,void 0,t):an(c,n,t,r,e)):o=an(e,n,t,r);return Array.isArray(o)?o:s(o)?(s(a)&&gn(o,a),s(n)&&vn(n),o):Et()}function gn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),s(t.children))for(var r=0,a=t.children.length;r<a;r++){var c=t.children[r];s(c.tag)&&(i(c.ns)||o(n)&&"svg"!==c.tag)&&gn(c,e,n)}}function vn(t){u(t.style)&&ye(t.style),u(t.class)&&ye(t.class)}function yn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,i=n&&n.context;t.$slots=De(e._renderChildren,i),t.$scopedSlots=r,t._c=function(e,n,r,i){return pn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return pn(t,e,n,r,i,!0)};var s=n&&n.data;Mt(t,"$attrs",s&&s.attrs||r,null,!0),Mt(t,"$listeners",e._parentListeners||r,null,!0)}var wn,_n=null;function bn(t){Ze(t.prototype),t.prototype.$nextTick=function(t){return ge(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=Pe(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{_n=e,t=r.call(e._renderProxy,e.$createElement)}catch(Ao){re(Ao,e,"render"),t=e._vnode}finally{_n=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof _t||(t=Et()),t.parent=i,t}}function En(t,e){return(t.__esModule||dt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function Tn(t,e,n,r,i){var s=Et();return s.asyncFactory=t,s.asyncMeta={data:e,context:n,children:r,tag:i},s}function Cn(t,e){if(o(t.error)&&s(t.errorComp))return t.errorComp;if(s(t.resolved))return t.resolved;var n=_n;if(n&&s(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&s(t.loadingComp))return t.loadingComp;if(n&&!s(t.owners)){var r=t.owners=[n],a=!0,c=null,l=null;n.$on("hook:destroyed",(function(){return w(r,n)}));var h=function(t){for(var e=0,n=r.length;e<n;e++)r[e].$forceUpdate();t&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==l&&(clearTimeout(l),l=null))},f=F((function(n){t.resolved=En(n,e),a?r.length=0:h(!0)})),d=F((function(e){s(t.errorComp)&&(t.error=!0,h(!0))})),m=t(f,d);return u(m)&&(p(m)?i(t.resolved)&&m.then(f,d):p(m.component)&&(m.component.then(f,d),s(m.error)&&(t.errorComp=En(m.error,e)),s(m.loading)&&(t.loadingComp=En(m.loading,e),0===m.delay?t.loading=!0:c=setTimeout((function(){c=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,h(!1))}),m.delay||200)),s(m.timeout)&&(l=setTimeout((function(){l=null,i(t.resolved)&&d(null)}),m.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function An(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(s(n)&&(s(n.componentOptions)||Me(n)))return n}}function Sn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Rn(t,e)}function In(t,e){wn.$on(t,e)}function kn(t,e){wn.$off(t,e)}function xn(t,e){var n=wn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function Rn(t,e,n){wn=t,Ee(e,n||{},In,kn,xn,t),wn=void 0}function On(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,s=t.length;i<s;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var s,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var a=o.length;while(a--)if(s=o[a],s===e||s.fn===e){o.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?O(n):n;for(var r=O(arguments,1),i='event handler for "'+t+'"',s=0,o=n.length;s<o;s++)ie(n[s],e,r,e,i)}return e}}var Nn=null;function Dn(t){var e=Nn;return Nn=t,function(){Nn=e}}function Ln(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Mn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,s=Dn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),s(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){jn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||w(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),jn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Pn(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=Et),jn(t,"beforeMount"),r=function(){t._update(t._render(),n)},new ir(t,r,L,{before:function(){t._isMounted&&!t._isDestroyed&&jn(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,jn(t,"mounted")),t}function Un(t,e,n,i,s){var o=i.data.scopedSlots,a=t.$scopedSlots,c=!!(o&&!o.$stable||a!==r&&!a.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),u=!!(s||t.$options._renderChildren||c);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=s,t.$attrs=i.data.attrs||r,t.$listeners=n||r,e&&t.$options.props){Rt(!1);for(var l=t._props,h=t.$options._propKeys||[],f=0;f<h.length;f++){var d=h[f],p=t.$options.props;l[d]=Qt(d,p,e,t)}Rt(!0),t.$options.propsData=e}n=n||r;var m=t.$options._parentListeners;t.$options._parentListeners=n,Rn(t,n,m),u&&(t.$slots=De(s,i.context),t.$forceUpdate())}function $n(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Fn(t,e){if(e){if(t._directInactive=!1,$n(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Fn(t.$children[n]);jn(t,"activated")}}function Vn(t,e){if((!e||(t._directInactive=!0,!$n(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Vn(t.$children[n]);jn(t,"deactivated")}}function jn(t,e){yt();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,s=n.length;i<s;i++)ie(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),wt()}var Bn=[],qn=[],Hn={},zn=!1,Gn=!1,Kn=0;function Wn(){Kn=Bn.length=qn.length=0,Hn={},zn=Gn=!1}var Xn=0,Yn=Date.now;if(Q&&!et){var Qn=window.performance;Qn&&"function"===typeof Qn.now&&Yn()>document.createEvent("Event").timeStamp&&(Yn=function(){return Qn.now()})}function Jn(){var t,e;for(Xn=Yn(),Gn=!0,Bn.sort((function(t,e){return t.id-e.id})),Kn=0;Kn<Bn.length;Kn++)t=Bn[Kn],t.before&&t.before(),e=t.id,Hn[e]=null,t.run();var n=qn.slice(),r=Bn.slice();Wn(),er(n),Zn(r),lt&&q.devtools&&lt.emit("flush")}function Zn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&jn(r,"updated")}}function tr(t){t._inactive=!1,qn.push(t)}function er(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Fn(t[e],!0)}function nr(t){var e=t.id;if(null==Hn[e]){if(Hn[e]=!0,Gn){var n=Bn.length-1;while(n>Kn&&Bn[n].id>t.id)n--;Bn.splice(n+1,0,t)}else Bn.push(t);zn||(zn=!0,ge(Jn))}}var rr=0,ir=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++rr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ft,this.newDepIds=new ft,this.expression="","function"===typeof e?this.getter=e:(this.getter=W(e),this.getter||(this.getter=L)),this.value=this.lazy?void 0:this.get()};ir.prototype.get=function(){var t;yt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Ao){if(!this.user)throw Ao;re(Ao,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ye(t),wt(),this.cleanupDeps()}return t},ir.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},ir.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},ir.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():nr(this)},ir.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';ie(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},ir.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ir.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},ir.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||w(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var sr={enumerable:!0,configurable:!0,get:L,set:L};function or(t,e,n){sr.get=function(){return this[e][n]},sr.set=function(t){this[e][n]=t},Object.defineProperty(t,n,sr)}function ar(t){t._watchers=[];var e=t.$options;e.props&&cr(t,e.props),e.methods&&gr(t,e.methods),e.data?ur(t):Lt(t._data={},!0),e.computed&&fr(t,e.computed),e.watch&&e.watch!==ot&&vr(t,e.watch)}function cr(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],s=!t.$parent;s||Rt(!1);var o=function(s){i.push(s);var o=Qt(s,e,n,t);Mt(r,s,o),s in t||or(t,"_props",s)};for(var a in e)o(a);Rt(!0)}function ur(t){var e=t.$options.data;e=t._data="function"===typeof e?lr(e,t):e||{},h(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var s=n[i];0,r&&b(r,s)||z(s)||or(t,"_data",s)}Lt(e,!0)}function lr(t,e){yt();try{return t.call(e,e)}catch(Ao){return re(Ao,e,"data()"),{}}finally{wt()}}var hr={lazy:!0};function fr(t,e){var n=t._computedWatchers=Object.create(null),r=ut();for(var i in e){var s=e[i],o="function"===typeof s?s:s.get;0,r||(n[i]=new ir(t,o||L,L,hr)),i in t||dr(t,i,s)}}function dr(t,e,n){var r=!ut();"function"===typeof n?(sr.get=r?pr(e):mr(n),sr.set=L):(sr.get=n.get?r&&!1!==n.cache?pr(e):mr(n.get):L,sr.set=n.set||L),Object.defineProperty(t,e,sr)}function pr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),gt.target&&e.depend(),e.value}}function mr(t){return function(){return t.call(this,this)}}function gr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?L:R(e[n],t)}function vr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)yr(t,n,r[i]);else yr(t,n,r)}}function yr(t,e,n,r){return h(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function wr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Pt,t.prototype.$delete=Ut,t.prototype.$watch=function(t,e,n){var r=this;if(h(e))return yr(r,t,e,n);n=n||{},n.user=!0;var i=new ir(r,t,e,n);if(n.immediate){var s='callback for immediate watcher "'+i.expression+'"';yt(),ie(e,r,[i.value],r,s),wt()}return function(){i.teardown()}}}var _r=0;function br(t){t.prototype._init=function(t){var e=this;e._uid=_r++,e._isVue=!0,t&&t._isComponent?Er(e,t):e.$options=Xt(Tr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Ln(e),Sn(e),yn(e),jn(e,"beforeCreate"),Oe(e),ar(e),Re(e),jn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Er(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Tr(t){var e=t.options;if(t.super){var n=Tr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Cr(t);i&&N(t.extendOptions,i),e=t.options=Xt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Cr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Ar(t){this._init(t)}function Sr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=O(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Ir(t){t.mixin=function(t){return this.options=Xt(this.options,t),this}}function kr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var s=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Xt(n.options,t),o["super"]=n,o.options.props&&xr(o),o.options.computed&&Rr(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,j.forEach((function(t){o[t]=n[t]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=N({},o.options),i[r]=o,o}}function xr(t){var e=t.options.props;for(var n in e)or(t.prototype,"_props",n)}function Rr(t){var e=t.options.computed;for(var n in e)dr(t.prototype,n,e[n])}function Or(t){j.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&h(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function Nr(t){return t&&(t.Ctor.options.name||t.tag)}function Dr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!f(t)&&t.test(e)}function Lr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!e(a)&&Mr(n,s,r,i)}}}function Mr(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,w(n,e)}br(Ar),wr(Ar),On(Ar),Mn(Ar),bn(Ar);var Pr=[String,RegExp,Array],Ur={name:"keep-alive",abstract:!0,props:{include:Pr,exclude:Pr,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var s=r.tag,o=r.componentInstance,a=r.componentOptions;e[i]={name:Nr(a),tag:s,componentInstance:o},n.push(i),this.max&&n.length>parseInt(this.max)&&Mr(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Mr(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Lr(t,(function(t){return Dr(e,t)}))})),this.$watch("exclude",(function(e){Lr(t,(function(t){return!Dr(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=An(t),n=e&&e.componentOptions;if(n){var r=Nr(n),i=this,s=i.include,o=i.exclude;if(s&&(!r||!Dr(s,r))||o&&r&&Dr(o,r))return e;var a=this,c=a.cache,u=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,w(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},$r={KeepAlive:Ur};function Fr(t){var e={get:function(){return q}};Object.defineProperty(t,"config",e),t.util={warn:pt,extend:N,mergeOptions:Xt,defineReactive:Mt},t.set=Pt,t.delete=Ut,t.nextTick=ge,t.observable=function(t){return Lt(t),t},t.options=Object.create(null),j.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,N(t.options.components,$r),Sr(t),Ir(t),kr(t),Or(t)}Fr(Ar),Object.defineProperty(Ar.prototype,"$isServer",{get:ut}),Object.defineProperty(Ar.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Ar,"FunctionalRenderContext",{value:tn}),Ar.version="2.6.14";var Vr=v("style,class"),jr=v("input,textarea,option,select,progress"),Br=function(t,e,n){return"value"===n&&jr(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},qr=v("contenteditable,draggable,spellcheck"),Hr=v("events,caret,typing,plaintext-only"),zr=function(t,e){return Yr(e)||"false"===e?"false":"contenteditable"===t&&Hr(e)?e:"true"},Gr=v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Kr="http://www.w3.org/1999/xlink",Wr=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Xr=function(t){return Wr(t)?t.slice(6,t.length):""},Yr=function(t){return null==t||!1===t};function Qr(t){var e=t.data,n=t,r=t;while(s(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Jr(r.data,e));while(s(n=n.parent))n&&n.data&&(e=Jr(e,n.data));return Zr(e.staticClass,e.class)}function Jr(t,e){return{staticClass:ti(t.staticClass,e.staticClass),class:s(t.class)?[t.class,e.class]:e.class}}function Zr(t,e){return s(t)||s(e)?ti(t,ei(e)):""}function ti(t,e){return t?e?t+" "+e:t:e||""}function ei(t){return Array.isArray(t)?ni(t):u(t)?ri(t):"string"===typeof t?t:""}function ni(t){for(var e,n="",r=0,i=t.length;r<i;r++)s(e=ei(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function ri(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var ii={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},si=v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),oi=v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ai=function(t){return si(t)||oi(t)};function ci(t){return oi(t)?"svg":"math"===t?"math":void 0}var ui=Object.create(null);function li(t){if(!Q)return!0;if(ai(t))return!1;if(t=t.toLowerCase(),null!=ui[t])return ui[t];var e=document.createElement(t);return t.indexOf("-")>-1?ui[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:ui[t]=/HTMLUnknownElement/.test(e.toString())}var hi=v("text,number,password,search,email,tel,url");function fi(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function di(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function pi(t,e){return document.createElementNS(ii[t],e)}function mi(t){return document.createTextNode(t)}function gi(t){return document.createComment(t)}function vi(t,e,n){t.insertBefore(e,n)}function yi(t,e){t.removeChild(e)}function wi(t,e){t.appendChild(e)}function _i(t){return t.parentNode}function bi(t){return t.nextSibling}function Ei(t){return t.tagName}function Ti(t,e){t.textContent=e}function Ci(t,e){t.setAttribute(e,"")}var Ai=Object.freeze({createElement:di,createElementNS:pi,createTextNode:mi,createComment:gi,insertBefore:vi,removeChild:yi,appendChild:wi,parentNode:_i,nextSibling:bi,tagName:Ei,setTextContent:Ti,setStyleScope:Ci}),Si={create:function(t,e){Ii(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Ii(t,!0),Ii(e))},destroy:function(t){Ii(t,!0)}};function Ii(t,e){var n=t.data.ref;if(s(n)){var r=t.context,i=t.componentInstance||t.elm,o=r.$refs;e?Array.isArray(o[n])?w(o[n],i):o[n]===i&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}var ki=new _t("",{},[]),xi=["create","activate","update","remove","destroy"];function Ri(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&s(t.data)===s(e.data)&&Oi(t,e)||o(t.isAsyncPlaceholder)&&i(e.asyncFactory.error))}function Oi(t,e){if("input"!==t.tag)return!0;var n,r=s(n=t.data)&&s(n=n.attrs)&&n.type,i=s(n=e.data)&&s(n=n.attrs)&&n.type;return r===i||hi(r)&&hi(i)}function Ni(t,e,n){var r,i,o={};for(r=e;r<=n;++r)i=t[r].key,s(i)&&(o[i]=r);return o}function Di(t){var e,n,r={},a=t.modules,u=t.nodeOps;for(e=0;e<xi.length;++e)for(r[xi[e]]=[],n=0;n<a.length;++n)s(a[n][xi[e]])&&r[xi[e]].push(a[n][xi[e]]);function l(t){return new _t(u.tagName(t).toLowerCase(),{},[],void 0,t)}function h(t,e){function n(){0===--n.listeners&&f(t)}return n.listeners=e,n}function f(t){var e=u.parentNode(t);s(e)&&u.removeChild(e,t)}function d(t,e,n,r,i,a,c){if(s(t.elm)&&s(a)&&(t=a[c]=Ct(t)),t.isRootInsert=!i,!p(t,e,n,r)){var l=t.data,h=t.children,f=t.tag;s(f)?(t.elm=t.ns?u.createElementNS(t.ns,f):u.createElement(f,t),E(t),w(t,h,e),s(l)&&b(t,e),y(n,t.elm,r)):o(t.isComment)?(t.elm=u.createComment(t.text),y(n,t.elm,r)):(t.elm=u.createTextNode(t.text),y(n,t.elm,r))}}function p(t,e,n,r){var i=t.data;if(s(i)){var a=s(t.componentInstance)&&i.keepAlive;if(s(i=i.hook)&&s(i=i.init)&&i(t,!1),s(t.componentInstance))return m(t,e),y(n,t.elm,r),o(a)&&g(t,e,n,r),!0}}function m(t,e){s(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,_(t)?(b(t,e),E(t)):(Ii(t),e.push(t))}function g(t,e,n,i){var o,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,s(o=a.data)&&s(o=o.transition)){for(o=0;o<r.activate.length;++o)r.activate[o](ki,a);e.push(a);break}y(n,t.elm,i)}function y(t,e,n){s(t)&&(s(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function w(t,e,n){if(Array.isArray(e)){0;for(var r=0;r<e.length;++r)d(e[r],n,t.elm,null,!0,e,r)}else c(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function _(t){while(t.componentInstance)t=t.componentInstance._vnode;return s(t.tag)}function b(t,n){for(var i=0;i<r.create.length;++i)r.create[i](ki,t);e=t.data.hook,s(e)&&(s(e.create)&&e.create(ki,t),s(e.insert)&&n.push(t))}function E(t){var e;if(s(e=t.fnScopeId))u.setStyleScope(t.elm,e);else{var n=t;while(n)s(e=n.context)&&s(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent}s(e=Nn)&&e!==t.context&&e!==t.fnContext&&s(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function T(t,e,n,r,i,s){for(;r<=i;++r)d(n[r],s,t,e,!1,n,r)}function C(t){var e,n,i=t.data;if(s(i))for(s(e=i.hook)&&s(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(s(e=t.children))for(n=0;n<t.children.length;++n)C(t.children[n])}function A(t,e,n){for(;e<=n;++e){var r=t[e];s(r)&&(s(r.tag)?(S(r),C(r)):f(r.elm))}}function S(t,e){if(s(e)||s(t.data)){var n,i=r.remove.length+1;for(s(e)?e.listeners+=i:e=h(t.elm,i),s(n=t.componentInstance)&&s(n=n._vnode)&&s(n.data)&&S(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);s(n=t.data.hook)&&s(n=n.remove)?n(t,e):e()}else f(t.elm)}function I(t,e,n,r,o){var a,c,l,h,f=0,p=0,m=e.length-1,g=e[0],v=e[m],y=n.length-1,w=n[0],_=n[y],b=!o;while(f<=m&&p<=y)i(g)?g=e[++f]:i(v)?v=e[--m]:Ri(g,w)?(x(g,w,r,n,p),g=e[++f],w=n[++p]):Ri(v,_)?(x(v,_,r,n,y),v=e[--m],_=n[--y]):Ri(g,_)?(x(g,_,r,n,y),b&&u.insertBefore(t,g.elm,u.nextSibling(v.elm)),g=e[++f],_=n[--y]):Ri(v,w)?(x(v,w,r,n,p),b&&u.insertBefore(t,v.elm,g.elm),v=e[--m],w=n[++p]):(i(a)&&(a=Ni(e,f,m)),c=s(w.key)?a[w.key]:k(w,e,f,m),i(c)?d(w,r,t,g.elm,!1,n,p):(l=e[c],Ri(l,w)?(x(l,w,r,n,p),e[c]=void 0,b&&u.insertBefore(t,l.elm,g.elm)):d(w,r,t,g.elm,!1,n,p)),w=n[++p]);f>m?(h=i(n[y+1])?null:n[y+1].elm,T(t,h,n,p,y,r)):p>y&&A(e,f,m)}function k(t,e,n,r){for(var i=n;i<r;i++){var o=e[i];if(s(o)&&Ri(t,o))return i}}function x(t,e,n,a,c,l){if(t!==e){s(e.elm)&&s(a)&&(e=a[c]=Ct(e));var h=e.elm=t.elm;if(o(t.isAsyncPlaceholder))s(e.asyncFactory.resolved)?N(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(o(e.isStatic)&&o(t.isStatic)&&e.key===t.key&&(o(e.isCloned)||o(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,d=e.data;s(d)&&s(f=d.hook)&&s(f=f.prepatch)&&f(t,e);var p=t.children,m=e.children;if(s(d)&&_(e)){for(f=0;f<r.update.length;++f)r.update[f](t,e);s(f=d.hook)&&s(f=f.update)&&f(t,e)}i(e.text)?s(p)&&s(m)?p!==m&&I(h,p,m,n,l):s(m)?(s(t.text)&&u.setTextContent(h,""),T(h,null,m,0,m.length-1,n)):s(p)?A(p,0,p.length-1):s(t.text)&&u.setTextContent(h,""):t.text!==e.text&&u.setTextContent(h,e.text),s(d)&&s(f=d.hook)&&s(f=f.postpatch)&&f(t,e)}}}function R(t,e,n){if(o(n)&&s(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var O=v("attrs,class,staticClass,staticStyle,key");function N(t,e,n,r){var i,a=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,o(e.isComment)&&s(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(s(c)&&(s(i=c.hook)&&s(i=i.init)&&i(e,!0),s(i=e.componentInstance)))return m(e,n),!0;if(s(a)){if(s(u))if(t.hasChildNodes())if(s(i=c)&&s(i=i.domProps)&&s(i=i.innerHTML)){if(i!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,f=0;f<u.length;f++){if(!h||!N(h,u[f],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else w(e,u,n);if(s(c)){var d=!1;for(var p in c)if(!O(p)){d=!0,b(e,n);break}!d&&c["class"]&&ye(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,a){if(!i(e)){var c=!1,h=[];if(i(t))c=!0,d(e,h);else{var f=s(t.nodeType);if(!f&&Ri(t,e))x(t,e,h,null,null,a);else{if(f){if(1===t.nodeType&&t.hasAttribute(V)&&(t.removeAttribute(V),n=!0),o(n)&&N(t,e,h))return R(e,h,!0),t;t=l(t)}var p=t.elm,m=u.parentNode(p);if(d(e,h,p._leaveCb?null:m,u.nextSibling(p)),s(e.parent)){var g=e.parent,v=_(e);while(g){for(var y=0;y<r.destroy.length;++y)r.destroy[y](g);if(g.elm=e.elm,v){for(var w=0;w<r.create.length;++w)r.create[w](ki,g);var b=g.data.hook.insert;if(b.merged)for(var E=1;E<b.fns.length;E++)b.fns[E]()}else Ii(g);g=g.parent}}s(m)?A([t],0,0):s(t.tag)&&C(t)}}return R(e,h,c),e.elm}s(t)&&C(t)}}var Li={create:Mi,update:Mi,destroy:function(t){Mi(t,ki)}};function Mi(t,e){(t.data.directives||e.data.directives)&&Pi(t,e)}function Pi(t,e){var n,r,i,s=t===ki,o=e===ki,a=$i(t.data.directives,t.context),c=$i(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,Vi(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(Vi(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)Vi(u[n],"inserted",e,t)};s?Te(e,"insert",h):h()}if(l.length&&Te(e,"postpatch",(function(){for(var n=0;n<l.length;n++)Vi(l[n],"componentUpdated",e,t)})),!s)for(n in a)c[n]||Vi(a[n],"unbind",t,t,o)}var Ui=Object.create(null);function $i(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++)r=t[n],r.modifiers||(r.modifiers=Ui),i[Fi(r)]=r,r.def=Yt(e.$options,"directives",r.name,!0);return i}function Fi(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Vi(t,e,n,r,i){var s=t.def&&t.def[e];if(s)try{s(n.elm,t,n,r,i)}catch(Ao){re(Ao,n.context,"directive "+t.name+" "+e+" hook")}}var ji=[Si,Li];function Bi(t,e){var n=e.componentOptions;if((!s(n)||!1!==n.Ctor.options.inheritAttrs)&&(!i(t.data.attrs)||!i(e.data.attrs))){var r,o,a,c=e.elm,u=t.data.attrs||{},l=e.data.attrs||{};for(r in s(l.__ob__)&&(l=e.data.attrs=N({},l)),l)o=l[r],a=u[r],a!==o&&qi(c,r,o,e.data.pre);for(r in(et||rt)&&l.value!==u.value&&qi(c,"value",l.value),u)i(l[r])&&(Wr(r)?c.removeAttributeNS(Kr,Xr(r)):qr(r)||c.removeAttribute(r))}}function qi(t,e,n,r){r||t.tagName.indexOf("-")>-1?Hi(t,e,n):Gr(e)?Yr(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):qr(e)?t.setAttribute(e,zr(e,n)):Wr(e)?Yr(n)?t.removeAttributeNS(Kr,Xr(e)):t.setAttributeNS(Kr,e,n):Hi(t,e,n)}function Hi(t,e,n){if(Yr(n))t.removeAttribute(e);else{if(et&&!nt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var zi={create:Bi,update:Bi};function Gi(t,e){var n=e.elm,r=e.data,o=t.data;if(!(i(r.staticClass)&&i(r.class)&&(i(o)||i(o.staticClass)&&i(o.class)))){var a=Qr(e),c=n._transitionClasses;s(c)&&(a=ti(a,ei(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Ki,Wi={create:Gi,update:Gi},Xi="__r",Yi="__c";function Qi(t){if(s(t[Xi])){var e=et?"change":"input";t[e]=[].concat(t[Xi],t[e]||[]),delete t[Xi]}s(t[Yi])&&(t.change=[].concat(t[Yi],t.change||[]),delete t[Yi])}function Ji(t,e,n){var r=Ki;return function i(){var s=e.apply(null,arguments);null!==s&&es(t,i,n,r)}}var Zi=ce&&!(st&&Number(st[1])<=53);function ts(t,e,n,r){if(Zi){var i=Xn,s=e;e=s._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return s.apply(this,arguments)}}Ki.addEventListener(t,e,at?{capture:n,passive:r}:n)}function es(t,e,n,r){(r||Ki).removeEventListener(t,e._wrapper||e,n)}function ns(t,e){if(!i(t.data.on)||!i(e.data.on)){var n=e.data.on||{},r=t.data.on||{};Ki=e.elm,Qi(n),Ee(n,r,ts,es,Ji,e.context),Ki=void 0}}var rs,is={create:ns,update:ns};function ss(t,e){if(!i(t.data.domProps)||!i(e.data.domProps)){var n,r,o=e.elm,a=t.data.domProps||{},c=e.data.domProps||{};for(n in s(c.__ob__)&&(c=e.data.domProps=N({},c)),a)n in c||(o[n]="");for(n in c){if(r=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),r===a[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=r;var u=i(r)?"":String(r);os(o,u)&&(o.value=u)}else if("innerHTML"===n&&oi(o.tagName)&&i(o.innerHTML)){rs=rs||document.createElement("div"),rs.innerHTML="<svg>"+r+"</svg>";var l=rs.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(l.firstChild)o.appendChild(l.firstChild)}else if(r!==a[n])try{o[n]=r}catch(Ao){}}}}function os(t,e){return!t.composing&&("OPTION"===t.tagName||as(t,e)||cs(t,e))}function as(t,e){var n=!0;try{n=document.activeElement!==t}catch(Ao){}return n&&t.value!==e}function cs(t,e){var n=t.value,r=t._vModifiers;if(s(r)){if(r.number)return g(n)!==g(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var us={create:ss,update:ss},ls=E((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function hs(t){var e=fs(t.style);return t.staticStyle?N(t.staticStyle,e):e}function fs(t){return Array.isArray(t)?D(t):"string"===typeof t?ls(t):t}function ds(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=hs(i.data))&&N(r,n)}(n=hs(t.data))&&N(r,n);var s=t;while(s=s.parent)s.data&&(n=hs(s.data))&&N(r,n);return r}var ps,ms=/^--/,gs=/\s*!important$/,vs=function(t,e,n){if(ms.test(e))t.style.setProperty(e,n);else if(gs.test(n))t.style.setProperty(I(e),n.replace(gs,""),"important");else{var r=ws(e);if(Array.isArray(n))for(var i=0,s=n.length;i<s;i++)t.style[r]=n[i];else t.style[r]=n}},ys=["Webkit","Moz","ms"],ws=E((function(t){if(ps=ps||document.createElement("div").style,t=C(t),"filter"!==t&&t in ps)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<ys.length;n++){var r=ys[n]+e;if(r in ps)return r}}));function _s(t,e){var n=e.data,r=t.data;if(!(i(n.staticStyle)&&i(n.style)&&i(r.staticStyle)&&i(r.style))){var o,a,c=e.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},h=u||l,f=fs(e.data.style)||{};e.data.normalizedStyle=s(f.__ob__)?N({},f):f;var d=ds(e,!0);for(a in h)i(d[a])&&vs(c,a,"");for(a in d)o=d[a],o!==h[a]&&vs(c,a,null==o?"":o)}}var bs={create:_s,update:_s},Es=/\s+/;function Ts(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Es).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Cs(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Es).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function As(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&N(e,Ss(t.name||"v")),N(e,t),e}return"string"===typeof t?Ss(t):void 0}}var Ss=E((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),Is=Q&&!nt,ks="transition",xs="animation",Rs="transition",Os="transitionend",Ns="animation",Ds="animationend";Is&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Rs="WebkitTransition",Os="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ns="WebkitAnimation",Ds="webkitAnimationEnd"));var Ls=Q?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Ms(t){Ls((function(){Ls(t)}))}function Ps(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Ts(t,e))}function Us(t,e){t._transitionClasses&&w(t._transitionClasses,e),Cs(t,e)}function $s(t,e,n){var r=Vs(t,e),i=r.type,s=r.timeout,o=r.propCount;if(!i)return n();var a=i===ks?Os:Ds,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=o&&u()};setTimeout((function(){c<o&&u()}),s+1),t.addEventListener(a,l)}var Fs=/\b(transform|all)(,|$)/;function Vs(t,e){var n,r=window.getComputedStyle(t),i=(r[Rs+"Delay"]||"").split(", "),s=(r[Rs+"Duration"]||"").split(", "),o=js(i,s),a=(r[Ns+"Delay"]||"").split(", "),c=(r[Ns+"Duration"]||"").split(", "),u=js(a,c),l=0,h=0;e===ks?o>0&&(n=ks,l=o,h=s.length):e===xs?u>0&&(n=xs,l=u,h=c.length):(l=Math.max(o,u),n=l>0?o>u?ks:xs:null,h=n?n===ks?s.length:c.length:0);var f=n===ks&&Fs.test(r[Rs+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:f}}function js(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return Bs(e)+Bs(t[n])})))}function Bs(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function qs(t,e){var n=t.elm;s(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=As(t.data.transition);if(!i(r)&&!s(n._enterCb)&&1===n.nodeType){var o=r.css,a=r.type,c=r.enterClass,l=r.enterToClass,h=r.enterActiveClass,f=r.appearClass,d=r.appearToClass,p=r.appearActiveClass,m=r.beforeEnter,v=r.enter,y=r.afterEnter,w=r.enterCancelled,_=r.beforeAppear,b=r.appear,E=r.afterAppear,T=r.appearCancelled,C=r.duration,A=Nn,S=Nn.$vnode;while(S&&S.parent)A=S.context,S=S.parent;var I=!A._isMounted||!t.isRootInsert;if(!I||b||""===b){var k=I&&f?f:c,x=I&&p?p:h,R=I&&d?d:l,O=I&&_||m,N=I&&"function"===typeof b?b:v,D=I&&E||y,L=I&&T||w,M=g(u(C)?C.enter:C);0;var P=!1!==o&&!nt,U=Gs(N),$=n._enterCb=F((function(){P&&(Us(n,R),Us(n,x)),$.cancelled?(P&&Us(n,k),L&&L(n)):D&&D(n),n._enterCb=null}));t.data.show||Te(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),N&&N(n,$)})),O&&O(n),P&&(Ps(n,k),Ps(n,x),Ms((function(){Us(n,k),$.cancelled||(Ps(n,R),U||(zs(M)?setTimeout($,M):$s(n,a,$)))}))),t.data.show&&(e&&e(),N&&N(n,$)),P||U||$()}}}function Hs(t,e){var n=t.elm;s(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=As(t.data.transition);if(i(r)||1!==n.nodeType)return e();if(!s(n._leaveCb)){var o=r.css,a=r.type,c=r.leaveClass,l=r.leaveToClass,h=r.leaveActiveClass,f=r.beforeLeave,d=r.leave,p=r.afterLeave,m=r.leaveCancelled,v=r.delayLeave,y=r.duration,w=!1!==o&&!nt,_=Gs(d),b=g(u(y)?y.leave:y);0;var E=n._leaveCb=F((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),w&&(Us(n,l),Us(n,h)),E.cancelled?(w&&Us(n,c),m&&m(n)):(e(),p&&p(n)),n._leaveCb=null}));v?v(T):T()}function T(){E.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),f&&f(n),w&&(Ps(n,c),Ps(n,h),Ms((function(){Us(n,c),E.cancelled||(Ps(n,l),_||(zs(b)?setTimeout(E,b):$s(n,a,E)))}))),d&&d(n,E),w||_||E())}}function zs(t){return"number"===typeof t&&!isNaN(t)}function Gs(t){if(i(t))return!1;var e=t.fns;return s(e)?Gs(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Ks(t,e){!0!==e.data.show&&qs(e)}var Ws=Q?{create:Ks,activate:Ks,remove:function(t,e){!0!==t.data.show?Hs(t,e):e()}}:{},Xs=[zi,Wi,is,us,bs,Ws],Ys=Xs.concat(ji),Qs=Di({nodeOps:Ai,modules:Ys});nt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&so(t,"input")}));var Js={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Te(n,"postpatch",(function(){Js.componentUpdated(t,e,n)})):Zs(t,e,n.context),t._vOptions=[].map.call(t.options,no)):("textarea"===n.tag||hi(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",ro),t.addEventListener("compositionend",io),t.addEventListener("change",io),nt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Zs(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,no);if(i.some((function(t,e){return!U(t,r[e])}))){var s=t.multiple?e.value.some((function(t){return eo(t,i)})):e.value!==e.oldValue&&eo(e.value,i);s&&so(t,"change")}}}};function Zs(t,e,n){to(t,e,n),(et||rt)&&setTimeout((function(){to(t,e,n)}),0)}function to(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var s,o,a=0,c=t.options.length;a<c;a++)if(o=t.options[a],i)s=$(r,no(o))>-1,o.selected!==s&&(o.selected=s);else if(U(no(o),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function eo(t,e){return e.every((function(e){return!U(e,t)}))}function no(t){return"_value"in t?t._value:t.value}function ro(t){t.target.composing=!0}function io(t){t.target.composing&&(t.target.composing=!1,so(t.target,"input"))}function so(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function oo(t){return!t.componentInstance||t.data&&t.data.transition?t:oo(t.componentInstance._vnode)}var ao={bind:function(t,e,n){var r=e.value;n=oo(n);var i=n.data&&n.data.transition,s=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,qs(n,(function(){t.style.display=s}))):t.style.display=r?s:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=oo(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,r?qs(n,(function(){t.style.display=t.__vOriginalDisplay})):Hs(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},co={model:Js,show:ao},uo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function lo(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?lo(An(e.children)):t}function ho(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var s in i)e[C(s)]=i[s];return e}function fo(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function po(t){while(t=t.parent)if(t.data.transition)return!0}function mo(t,e){return e.key===t.key&&e.tag===t.tag}var go=function(t){return t.tag||Me(t)},vo=function(t){return"show"===t.name},yo={name:"transition",props:uo,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(go),n.length)){0;var r=this.mode;0;var i=n[0];if(po(this.$vnode))return i;var s=lo(i);if(!s)return i;if(this._leaving)return fo(t,i);var o="__transition-"+this._uid+"-";s.key=null==s.key?s.isComment?o+"comment":o+s.tag:c(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var a=(s.data||(s.data={})).transition=ho(this),u=this._vnode,l=lo(u);if(s.data.directives&&s.data.directives.some(vo)&&(s.data.show=!0),l&&l.data&&!mo(s,l)&&!Me(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=N({},a);if("out-in"===r)return this._leaving=!0,Te(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),fo(t,i);if("in-out"===r){if(Me(s))return u;var f,d=function(){f()};Te(a,"afterEnter",d),Te(a,"enterCancelled",d),Te(h,"delayLeave",(function(t){f=t}))}}return i}}},wo=N({tag:String,moveClass:String},uo);delete wo.mode;var _o={props:wo,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=Dn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],s=this.children=[],o=ho(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(r){for(var u=[],l=[],h=0;h<r.length;h++){var f=r[h];f.data.transition=o,f.data.pos=f.elm.getBoundingClientRect(),n[f.key]?u.push(f):l.push(f)}this.kept=t(e,null,u),this.removed=l}return t(e,null,s)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(bo),t.forEach(Eo),t.forEach(To),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;Ps(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Os,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Os,t),n._moveCb=null,Us(n,e))})}})))},methods:{hasMove:function(t,e){if(!Is)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Cs(n,t)})),Ts(n,e),n.style.display="none",this.$el.appendChild(n);var r=Vs(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function bo(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Eo(t){t.data.newPos=t.elm.getBoundingClientRect()}function To(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var s=t.elm.style;s.transform=s.WebkitTransform="translate("+r+"px,"+i+"px)",s.transitionDuration="0s"}}var Co={Transition:yo,TransitionGroup:_o};Ar.config.mustUseProp=Br,Ar.config.isReservedTag=ai,Ar.config.isReservedAttr=Vr,Ar.config.getTagNamespace=ci,Ar.config.isUnknownElement=li,N(Ar.options.directives,co),N(Ar.options.components,Co),Ar.prototype.__patch__=Q?Qs:L,Ar.prototype.$mount=function(t,e){return t=t&&Q?fi(t):void 0,Pn(this,t,e)},Q&&setTimeout((function(){q.devtools&&lt&&lt.emit("init",Ar)}),0),e["Z"]=Ar},4665:function(t,e,n){"use strict";n(1703);
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function r(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}var i="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},s=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){s&&(t._devtoolHook=s,s.emit("vuex:init",t),s.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){s.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){s.emit("vuex:action",t,e)}),{prepend:!0}))}function a(t,e){return t.filter(e)[0]}function c(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=a(e,(function(e){return e.original===t}));if(n)return n.copy;var r=Array.isArray(t)?[]:{};return e.push({original:t,copy:r}),Object.keys(t).forEach((function(n){r[n]=c(t[n],e)})),r}function u(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function l(t){return null!==t&&"object"===typeof t}function h(t){return t&&"function"===typeof t.then}function f(t,e){return function(){return t(e)}}var d=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},d.prototype.addChild=function(t,e){this._children[t]=e},d.prototype.removeChild=function(t){delete this._children[t]},d.prototype.getChild=function(t){return this._children[t]},d.prototype.hasChild=function(t){return t in this._children},d.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},d.prototype.forEachChild=function(t){u(this._children,t)},d.prototype.forEachGetter=function(t){this._rawModule.getters&&u(this._rawModule.getters,t)},d.prototype.forEachAction=function(t){this._rawModule.actions&&u(this._rawModule.actions,t)},d.prototype.forEachMutation=function(t){this._rawModule.mutations&&u(this._rawModule.mutations,t)},Object.defineProperties(d.prototype,p);var m=function(t){this.register([],t,!1)};function g(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;g(t.concat(r),e.getChild(r),n.modules[r])}}m.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},m.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},m.prototype.update=function(t){g([],this.root,t)},m.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new d(e,n);if(0===t.length)this.root=i;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],i)}e.modules&&u(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},m.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},m.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var v;var y=function(t){var e=this;void 0===t&&(t={}),!v&&"undefined"!==typeof window&&window.Vue&&N(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new m(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new v,this._makeLocalGettersCache=Object.create(null);var i=this,s=this,a=s.dispatch,c=s.commit;this.dispatch=function(t,e){return a.call(i,t,e)},this.commit=function(t,e,n){return c.call(i,t,e,n)},this.strict=r;var u=this._modules.root.state;T(this,u,[],this._modules.root),E(this,u),n.forEach((function(t){return t(e)}));var l=void 0!==t.devtools?t.devtools:v.config.devtools;l&&o(this)},w={state:{configurable:!0}};function _(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function b(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;T(t,n,[],t._modules.root,!0),E(t,n,e)}function E(t,e,n){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,s={};u(i,(function(e,n){s[n]=f(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var o=v.config.silent;v.config.silent=!0,t._vm=new v({data:{$$state:e},computed:s}),v.config.silent=o,t.strict&&x(t),r&&(n&&t._withCommit((function(){r._data.$$state=null})),v.nextTick((function(){return r.$destroy()})))}function T(t,e,n,r,i){var s=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!s&&!i){var a=R(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){v.set(a,c,r.state)}))}var u=r.context=C(t,o,n);r.forEachMutation((function(e,n){var r=o+n;S(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:o+n,i=e.handler||e;I(t,r,i,u)})),r.forEachGetter((function(e,n){var r=o+n;k(t,r,e,u)})),r.forEachChild((function(r,s){T(t,e,n.concat(s),r,i)}))}function C(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var s=O(n,r,i),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=e+c),t.dispatch(c,o)},commit:r?t.commit:function(n,r,i){var s=O(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=e+c),t.commit(c,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return A(t,e)}},state:{get:function(){return R(t.state,n)}}}),i}function A(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function S(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function I(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return h(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function k(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function x(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function R(t,e){return e.reduce((function(t,e){return t[e]}),t)}function O(t,e,n){return l(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function N(t){v&&t===v||(v=t,r(v))}w.state.get=function(){return this._vm._data.$$state},w.state.set=function(t){0},y.prototype.commit=function(t,e,n){var r=this,i=O(t,e,n),s=i.type,o=i.payload,a=(i.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},y.prototype.dispatch=function(t,e){var n=this,r=O(t,e),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(s)}))):a[0](s);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(u){0}e(t)}))}))}},y.prototype.subscribe=function(t,e){return _(t,this._subscribers,e)},y.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return _(n,this._actionSubscribers,e)},y.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch((function(){return t(r.state,r.getters)}),e,n)},y.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},y.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),T(this,this.state,t,this._modules.get(t),n.preserveState),E(this,this.state)},y.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=R(e.state,t.slice(0,-1));v.delete(n,t[t.length-1])})),b(this)},y.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},y.prototype.hotUpdate=function(t){this._modules.update(t),b(this,!0)},y.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(y.prototype,w);var D=V((function(t,e){var n={};return $(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=j(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),L=V((function(t,e){var n={};return $(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var s=j(this.$store,"mapMutations",t);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),M=V((function(t,e){var n={};return $(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||j(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),P=V((function(t,e){var n={};return $(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var s=j(this.$store,"mapActions",t);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),U=function(t){return{mapState:D.bind(null,t),mapGetters:M.bind(null,t),mapMutations:L.bind(null,t),mapActions:P.bind(null,t)}};function $(t){return F(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function F(t){return Array.isArray(t)||l(t)}function V(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function j(t,e,n){var r=t._modulesNamespaceMap[n];return r}function B(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var r=t.transformer;void 0===r&&(r=function(t){return t});var i=t.mutationTransformer;void 0===i&&(i=function(t){return t});var s=t.actionFilter;void 0===s&&(s=function(t,e){return!0});var o=t.actionTransformer;void 0===o&&(o=function(t){return t});var a=t.logMutations;void 0===a&&(a=!0);var u=t.logActions;void 0===u&&(u=!0);var l=t.logger;return void 0===l&&(l=console),function(t){var h=c(t.state);"undefined"!==typeof l&&(a&&t.subscribe((function(t,s){var o=c(s);if(n(t,h,o)){var a=z(),u=i(t),f="mutation "+t.type+a;q(l,f,e),l.log("%c prev state","color: #9E9E9E; font-weight: bold",r(h)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",r(o)),H(l)}h=o})),u&&t.subscribeAction((function(t,n){if(s(t,n)){var r=z(),i=o(t),a="action "+t.type+r;q(l,a,e),l.log("%c action","color: #03A9F4; font-weight: bold",i),H(l)}})))}}function q(t,e,n){var r=n?t.groupCollapsed:t.group;try{r.call(t,e)}catch(i){t.log(e)}}function H(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function z(){var t=new Date;return" @ "+K(t.getHours(),2)+":"+K(t.getMinutes(),2)+":"+K(t.getSeconds(),2)+"."+K(t.getMilliseconds(),3)}function G(t,e){return new Array(e+1).join(t)}function K(t,e){return G("0",e-t.toString().length)+t}var W={Store:y,install:N,version:"3.6.2",mapState:D,mapMutations:L,mapGetters:M,mapActions:P,createNamespacedHelpers:U,createLogger:B};e["ZP"]=W},3367:function(t,e,n){"use strict";n.d(e,{Jn:function(){return mt},qX:function(){return ht},Xd:function(){return lt},Mq:function(){return vt},ZF:function(){return gt},KN:function(){return yt}});var r=n(7805),i=n(7366),s=n(3536);n(6699),n(2801);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,m=new WeakMap;function g(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),m.set(e,t),e}function v(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));f.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){y=t(y)}function _(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function b(t){return"function"===typeof t?_(t):(t instanceof IDBTransaction&&v(t),o(t,u())?new Proxy(t,y):t)}function E(t){if(t instanceof IDBRequest)return g(t);if(p.has(t))return p.get(t);const e=b(t);return e!==t&&(p.set(t,e),m.set(e,t)),e}const T=t=>m.get(t);function C(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const A=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],I=new Map;function k(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(I.get(e))return I.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!A.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return I.set(e,s),s}w((t=>({...t,get:(e,n,r)=>k(e,n)||t.get(e,n,r),has:(e,n)=>!!k(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(R(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function R(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const O="@firebase/app",N="0.7.25",D=new i.Yd("@firebase/app"),L="@firebase/app-compat",M="@firebase/analytics-compat",P="@firebase/analytics",U="@firebase/app-check-compat",$="@firebase/app-check",F="@firebase/auth",V="@firebase/auth-compat",j="@firebase/database",B="@firebase/database-compat",q="@firebase/functions",H="@firebase/functions-compat",z="@firebase/installations",G="@firebase/installations-compat",K="@firebase/messaging",W="@firebase/messaging-compat",X="@firebase/performance",Y="@firebase/performance-compat",Q="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="9.8.2",st="[DEFAULT]",ot={[O]:"fire-core",[L]:"fire-core-compat",[P]:"fire-analytics",[M]:"fire-analytics-compat",[$]:"fire-app-check",[U]:"fire-app-check-compat",[F]:"fire-auth",[V]:"fire-auth-compat",[j]:"fire-rtdb",[B]:"fire-rtdb-compat",[q]:"fire-fn",[H]:"fire-fn-compat",[z]:"fire-iid",[G]:"fire-iid-compat",[K]:"fire-fcm",[W]:"fire-fcm-compat",[X]:"fire-perf",[Y]:"fire-perf-compat",[Q]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){D.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return D.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ft={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},dt=new s.LL("app","Firebase",ft);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=it;function gt(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw dt.create("bad-app-name",{appName:String(i)});const o=at.get(i);if(o){if((0,s.vZ)(t,o.options)&&(0,s.vZ)(n,o.config))return o;throw dt.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of ct.values())a.addComponent(r);const c=new pt(t,n,a);return at.set(i,c),c}function vt(t=st){const e=at.get(t);if(!e)throw dt.create("no-app",{appName:t});return e}function yt(t,e,n){var i;let s=null!==(i=ot[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void D.warn(t.join(" "))}lt(new r.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wt="firebase-heartbeat-database",_t=1,bt="firebase-heartbeat-store";let Et=null;function Tt(){return Et||(Et=C(wt,_t,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bt)}}}).catch((t=>{throw dt.create("storage-open",{originalErrorMessage:t.message})}))),Et}async function Ct(t){try{const e=await Tt();return e.transaction(bt).objectStore(bt).get(St(t))}catch(e){throw dt.create("storage-get",{originalErrorMessage:e.message})}}async function At(t,e){try{const n=await Tt(),r=n.transaction(bt,"readwrite"),i=r.objectStore(bt);return await i.put(e,St(t)),r.done}catch(n){throw dt.create("storage-set",{originalErrorMessage:n.message})}}function St(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=1024,kt=2592e6;class xt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Nt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Rt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=kt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Rt(),{heartbeatsToSend:e,unsentEntries:n}=Ot(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Rt(){const t=new Date;return t.toISOString().substring(0,10)}function Ot(t,e=It){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Dt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Ct(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Dt(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){lt(new r.wA("platform-logger",(t=>new x(t)),"PRIVATE")),lt(new r.wA("heartbeat",(t=>new xt(t)),"PRIVATE")),yt(O,N,t),yt(O,N,"esm2017"),yt("fire-js","")}Lt("")},7805:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return i}});n(1703);var r=n(3536);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},7366:function(t,e,n){"use strict";n.d(e,{Yd:function(){return u},in:function(){return i}});n(1703);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}}}]);
//# sourceMappingURL=chunk-vendors.16195dc0.js.map
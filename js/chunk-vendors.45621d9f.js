(self["webpackChunksfpj"]=self["webpackChunksfpj"]||[]).push([[998],{1001:function(t,e,n){"use strict";function r(t,e,n,r,i,o,s,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,{Z:function(){return r}})},9662:function(t,e,n){var r=n(614),i=n(6330),o=TypeError;t.exports=function(t){if(r(t))return t;throw o(i(t)+" is not a function")}},6077:function(t,e,n){var r=n(614),i=String,o=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw o("Can't set "+i(t)+" as a prototype")}},1223:function(t,e,n){var r=n(5112),i=n(30),o=n(3070).f,s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o(a,s,{configurable:!0,value:i(null)}),t.exports=function(t){a[s][t]=!0}},5787:function(t,e,n){var r=n(7976),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw i("Incorrect invocation")}},9670:function(t,e,n){var r=n(111),i=String,o=TypeError;t.exports=function(t){if(r(t))return t;throw o(i(t)+" is not an object")}},4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var r,i,o,s=n(4019),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),f=n(648),d=n(6330),p=n(8880),g=n(8052),m=n(3070).f,v=n(7976),y=n(9518),w=n(7674),b=n(5112),_=n(9711),E=c.Int8Array,T=E&&E.prototype,C=c.Uint8ClampedArray,A=C&&C.prototype,S=E&&y(E),I=T&&y(T),k=Object.prototype,x=c.TypeError,R=b("toStringTag"),N=_("TYPED_ARRAY_TAG"),O=_("TYPED_ARRAY_CONSTRUCTOR"),D=s&&!!w&&"Opera"!==f(c.opera),M=!1,L={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},P={BigInt64Array:8,BigUint64Array:8},U=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(L,e)||h(P,e)},F=function(t){if(!l(t))return!1;var e=f(t);return h(L,e)||h(P,e)},$=function(t){if(F(t))return t;throw x("Target is not a typed array")},B=function(t){if(u(t)&&(!w||v(S,t)))return t;throw x(d(t)+" is not a typed array constructor")},V=function(t,e,n,r){if(a){if(n)for(var i in L){var o=c[i];if(o&&h(o.prototype,t))try{delete o.prototype[t]}catch(s){try{o.prototype[t]=e}catch(u){}}}I[t]&&!n||g(I,t,n?e:D&&T[t]||e,r)}},j=function(t,e,n){var r,i;if(a){if(w){if(n)for(r in L)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(o){}if(S[t]&&!n)return;try{return g(S,t,n?e:D&&S[t]||e)}catch(o){}}for(r in L)i=c[r],!i||i[t]&&!n||g(i,t,e)}};for(r in L)i=c[r],o=i&&i.prototype,o?p(o,O,i):D=!1;for(r in P)i=c[r],o=i&&i.prototype,o&&p(o,O,i);if((!D||!u(S)||S===Function.prototype)&&(S=function(){throw x("Incorrect invocation")},D))for(r in L)c[r]&&w(c[r],S);if((!D||!I||I===k)&&(I=S.prototype,D))for(r in L)c[r]&&w(c[r].prototype,I);if(D&&y(A)!==I&&w(A,I),a&&!h(I,R))for(r in M=!0,m(I,R,{get:function(){return l(this)?this[N]:void 0}}),L)c[r]&&p(c[r],N,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:D,TYPED_ARRAY_CONSTRUCTOR:O,TYPED_ARRAY_TAG:M&&N,aTypedArray:$,aTypedArrayConstructor:B,exportTypedArrayMethod:V,exportTypedArrayStaticMethod:j,isView:U,isTypedArray:F,TypedArray:S,TypedArrayPrototype:I}},1318:function(t,e,n){var r=n(5656),i=n(1400),o=n(6244),s=function(t){return function(e,n,s){var a,c=r(e),u=o(c),l=i(s,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},206:function(t,e,n){var r=n(1702);t.exports=r([].slice)},4326:function(t,e,n){var r=n(1702),i=r({}.toString),o=r("".slice);t.exports=function(t){return o(i(t),8,-1)}},648:function(t,e,n){var r=n(1694),i=n(614),o=n(4326),s=n(5112),a=s("toStringTag"),c=Object,u="Arguments"==o(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?o(e):"Object"==(r=o(e))&&i(e.callee)?"Arguments":r}},7741:function(t,e,n){var r=n(1702),i=Error,o=r("".replace),s=function(t){return String(i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=o(t,a,"");return t}},9920:function(t,e,n){var r=n(2597),i=n(3887),o=n(1236),s=n(3070);t.exports=function(t,e,n){for(var a=i(e),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var r=n(9781),i=n(3070),o=n(9114);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),i=n(8880),o=n(6339),s=n(3072);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;return r(n)&&o(n,u,a),a.global?c?t[e]=n:s(e,n):(a.unsafe?t[e]&&(c=!0):delete t[e],c?t[e]=n:i(t,e,n)),t}},3072:function(t,e,n){var r=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),i=n(111),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},6833:function(t,e,n){var r=n(8113);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},5268:function(t,e,n){var r=n(4326),i=n(7854);t.exports="process"==r(i.process)},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,i,o=n(7854),s=n(8113),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(t,e,n){var r=n(7293),i=n(9114);t.exports=!r((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",i(1,7)),7!==t.stack)}))},2109:function(t,e,n){var r=n(7854),i=n(1236).f,o=n(8880),s=n(8052),a=n(3072),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,v=t.stat;if(l=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(v?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&o(d,"sham",!0),s(l,h,d,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var r=n(4374),i=Function.prototype,o=i.apply,s=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},9974:function(t,e,n){var r=n(1702),i=n(9662),o=n(4374),s=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:o?s(t,e):function(){return t.apply(e,arguments)}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(t,e,n){var r=n(9781),i=n(2597),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(t,e,n){var r=n(4374),i=Function.prototype,o=i.bind,s=i.call,a=r&&o.bind(s,s);t.exports=r?function(t){return t&&a(t)}:function(t){return t&&function(){return s.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),i=n(614),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),i=n(7908),o=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(i(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),i=n(7293),o=n(317);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),i=n(7293),o=n(4326),s=Object,a=r("".split);t.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?a(t,""):s(t)}:s},9587:function(t,e,n){var r=n(614),i=n(111),o=n(7674);t.exports=function(t,e,n){var s,a;return o&&r(s=e.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(t,a),t}},2788:function(t,e,n){var r=n(1702),i=n(614),o=n(5465),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(t){return s(t)}),t.exports=o.inspectSource},8340:function(t,e,n){var r=n(111),i=n(8880);t.exports=function(t,e){r(e)&&"cause"in e&&i(t,"cause",e.cause)}},9909:function(t,e,n){var r,i,o,s=n(8536),a=n(7854),c=n(1702),u=n(111),l=n(8880),h=n(2597),f=n(5465),d=n(6200),p=n(3501),g="Object already initialized",m=a.TypeError,v=a.WeakMap,y=function(t){return o(t)?i(t):r(t,{})},w=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(s||f.state){var b=f.state||(f.state=new v),_=c(b.get),E=c(b.has),T=c(b.set);r=function(t,e){if(E(b,t))throw new m(g);return e.facade=t,T(b,t,e),e},i=function(t){return _(b,t)||{}},o=function(t){return E(b,t)}}else{var C=d("state");p[C]=!0,r=function(t,e){if(h(t,C))throw new m(g);return e.facade=t,l(t,C,e),e},i=function(t){return h(t,C)?t[C]:{}},o=function(t){return h(t,C)}}t.exports={set:r,get:i,has:o,enforce:y,getterFor:w}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),i=n(614),o=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";t.exports=s},111:function(t,e,n){var r=n(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),i=n(614),o=n(7976),s=n(3307),a=Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&o(e.prototype,a(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(7293),i=n(614),o=n(2597),s=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),l=u.enforce,h=u.get,f=Object.defineProperty,d=s&&!r((function(){return 8!==f((function(){}),"length",{value:8}).length})),p=String(String).split("String"),g=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||a&&t.name!==e)&&f(t,"name",{value:e,configurable:!0}),d&&n&&o(n,"arity")&&t.length!==n.arity&&f(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?s&&f(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=l(t);return o(r,"source")||(r.source=p.join("string"==typeof e?e:"")),t};Function.prototype.toString=g((function(){return i(this)&&h(this).source||c(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},133:function(t,e,n){var r=n(7392),i=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,e,n){var r=n(7854),i=n(614),o=n(2788),s=r.WeakMap;t.exports=i(s)&&/native code/.test(o(s))},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},30:function(t,e,n){var r,i=n(9670),o=n(6048),s=n(748),a=n(3501),c=n(490),u=n(317),l=n(6200),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),m=function(){},v=function(t){return f+p+h+t+f+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},w=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&r?y(r):w():y(r);var t=s.length;while(t--)delete b[d][s[t]];return b()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[d]=i(t),n=new m,m[d]=null,n[g]=t):n=b(),void 0===e?n:o.f(n,e)}},6048:function(t,e,n){var r=n(9781),i=n(3353),o=n(3070),s=n(9670),a=n(5656),c=n(1956);e.f=r&&!i?Object.defineProperties:function(t,e){s(t);var n,r=a(e),i=c(e),u=i.length,l=0;while(u>l)o.f(t,n=i[l++],r[n]);return t}},3070:function(t,e,n){var r=n(9781),i=n(4664),o=n(3353),s=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?o?function(t,e,n){if(s(t),e=a(e),s(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(s(t),e=a(e),s(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),i=n(6916),o=n(5296),s=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return s(!i(o.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),i=n(748),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(2597),i=n(614),o=n(7908),s=n(6200),a=n(8544),c=s("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=o(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),i=n(2597),o=n(5656),s=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=o(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~s(l,n)||c(l,n));return l}},1956:function(t,e,n){var r=n(6324),i=n(748);t.exports=Object.keys||function(t){return r(t,i)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(1702),i=n(9670),o=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(6916),i=n(614),o=n(111),s=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!o(a=r(n,t)))return a;if(i(n=t.valueOf)&&!o(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!o(a=r(n,t)))return a;throw s("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),i=n(1702),o=n(8006),s=n(5181),a=n(9670),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=s.f;return n?c(e,n(t)):e}},2626:function(t,e,n){var r=n(3070).f;t.exports=function(t,e,n){n in t||r(t,n,{configurable:!0,get:function(){return e[n]},set:function(t){e[n]=t}})}},4488:function(t){var e=TypeError;t.exports=function(t){if(void 0==t)throw e("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),i=n(9711),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},5465:function(t,e,n){var r=n(7854),i=n(3072),o="__core-js_shared__",s=r[o]||i(o,{});t.exports=s},2309:function(t,e,n){var r=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.8",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.8/LICENSE",source:"https://github.com/zloirock/core-js"})},261:function(t,e,n){var r,i,o,s,a=n(7854),c=n(2104),u=n(9974),l=n(614),h=n(2597),f=n(7293),d=n(490),p=n(206),g=n(317),m=n(8053),v=n(6833),y=n(5268),w=a.setImmediate,b=a.clearImmediate,_=a.process,E=a.Dispatch,T=a.Function,C=a.MessageChannel,A=a.String,S=0,I={},k="onreadystatechange";try{r=a.location}catch(D){}var x=function(t){if(h(I,t)){var e=I[t];delete I[t],e()}},R=function(t){return function(){x(t)}},N=function(t){x(t.data)},O=function(t){a.postMessage(A(t),r.protocol+"//"+r.host)};w&&b||(w=function(t){m(arguments.length,1);var e=l(t)?t:T(t),n=p(arguments,1);return I[++S]=function(){c(e,void 0,n)},i(S),S},b=function(t){delete I[t]},y?i=function(t){_.nextTick(R(t))}:E&&E.now?i=function(t){E.now(R(t))}:C&&!v?(o=new C,s=o.port2,o.port1.onmessage=N,i=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!f(O)?(i=O,a.addEventListener("message",N,!1)):i=k in g("script")?function(t){d.appendChild(g("script"))[k]=function(){d.removeChild(this),x(t)}}:function(t){setTimeout(R(t),0)}),t.exports={set:w,clear:b}},1400:function(t,e,n){var r=n(9303),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},5656:function(t,e,n){var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),i=Object;t.exports=function(t){return i(r(t))}},4590:function(t,e,n){var r=n(3002),i=RangeError;t.exports=function(t,e){var n=r(t);if(n%e)throw i("Wrong offset");return n}},3002:function(t,e,n){var r=n(9303),i=RangeError;t.exports=function(t){var e=r(t);if(e<0)throw i("The argument can't be less than 0");return e}},7593:function(t,e,n){var r=n(6916),i=n(111),o=n(2190),s=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||o(t))return t;var n,c=s(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var r=n(7593),i=n(2190);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},1694:function(t,e,n){var r=n(5112),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},1340:function(t,e,n){var r=n(648),i=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),i=0,o=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++i+o,36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),i=n(7293);t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(t){var e=TypeError;t.exports=function(t,n){if(t<n)throw e("Not enough arguments");return t}},5112:function(t,e,n){var r=n(7854),i=n(2309),o=n(2597),s=n(9711),a=n(133),c=n(3307),u=i("wks"),l=r.Symbol,h=l&&l["for"],f=c?l:l&&l.withoutSetter||s;t.exports=function(t){if(!o(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&o(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):f(e)}return u[t]}},9191:function(t,e,n){"use strict";var r=n(5005),i=n(2597),o=n(8880),s=n(7976),a=n(7674),c=n(9920),u=n(2626),l=n(9587),h=n(6277),f=n(8340),d=n(7741),p=n(2914),g=n(9781),m=n(1913);t.exports=function(t,e,n,v){var y="stackTraceLimit",w=v?2:1,b=t.split("."),_=b[b.length-1],E=r.apply(null,b);if(E){var T=E.prototype;if(!m&&i(T,"cause")&&delete T.cause,!n)return E;var C=r("Error"),A=e((function(t,e){var n=h(v?e:t,void 0),r=v?new E(t):new E;return void 0!==n&&o(r,"message",n),p&&o(r,"stack",d(r.stack,2)),this&&s(T,this)&&l(r,this,A),arguments.length>w&&f(r,arguments[w]),r}));if(A.prototype=T,"Error"!==_?a?a(A,C):c(A,C,{name:!0}):g&&y in E&&(u(A,E,y),u(A,E,"prepareStackTrace")),c(A,E),!m)try{T.name!==_&&o(T,"name",_),T.constructor=A}catch(S){}return A}}},2262:function(t,e,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(9303),a=n(1223);r({target:"Array",proto:!0},{at:function(t){var e=i(this),n=o(e),r=s(t),a=r>=0?r:n+r;return a<0||a>=n?void 0:e[a]}}),a("at")},6699:function(t,e,n){"use strict";var r=n(2109),i=n(1318).includes,o=n(7293),s=n(1223),a=o((function(){return!Array(1).includes()}));r({target:"Array",proto:!0,forced:a},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")},1703:function(t,e,n){var r=n(2109),i=n(7854),o=n(2104),s=n(9191),a="WebAssembly",c=i[a],u=7!==Error("e",{cause:7}).cause,l=function(t,e){var n={};n[t]=s(t,e,u),r({global:!0,constructor:!0,arity:1,forced:u},n)},h=function(t,e){if(c&&c[t]){var n={};n[t]=s(a+"."+t,e,u),r({target:a,stat:!0,constructor:!0,arity:1,forced:u},n)}};l("Error",(function(t){return function(e){return o(t,this,arguments)}})),l("EvalError",(function(t){return function(e){return o(t,this,arguments)}})),l("RangeError",(function(t){return function(e){return o(t,this,arguments)}})),l("ReferenceError",(function(t){return function(e){return o(t,this,arguments)}})),l("SyntaxError",(function(t){return function(e){return o(t,this,arguments)}})),l("TypeError",(function(t){return function(e){return o(t,this,arguments)}})),l("URIError",(function(t){return function(e){return o(t,this,arguments)}})),h("CompileError",(function(t){return function(e){return o(t,this,arguments)}})),h("LinkError",(function(t){return function(e){return o(t,this,arguments)}})),h("RuntimeError",(function(t){return function(e){return o(t,this,arguments)}}))},4506:function(t,e,n){"use strict";var r=n(2109),i=n(1702),o=n(4488),s=n(9303),a=n(1340),c=n(7293),u=i("".charAt),l=c((function(){return"\ud842"!=="𠮷".at(-2)}));r({target:"String",proto:!0,forced:l},{at:function(t){var e=a(o(this)),n=e.length,r=s(t),i=r>=0?r:n+r;return i<0||i>=n?void 0:u(e,i)}})},8675:function(t,e,n){"use strict";var r=n(260),i=n(6244),o=n(9303),s=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",(function(t){var e=s(this),n=i(e),r=o(t),a=r>=0?r:n+r;return a<0||a>=n?void 0:e[a]}))},3462:function(t,e,n){"use strict";var r=n(7854),i=n(6916),o=n(260),s=n(6244),a=n(4590),c=n(7908),u=n(7293),l=r.RangeError,h=r.Int8Array,f=h&&h.prototype,d=f&&f.set,p=o.aTypedArray,g=o.exportTypedArrayMethod,m=!u((function(){var t=new Uint8ClampedArray(2);return i(d,t,{length:1,0:3},1),3!==t[1]})),v=m&&o.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var t=new h(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));g("set",(function(t){p(this);var e=a(arguments.length>1?arguments[1]:void 0,1),n=c(t);if(m)return i(d,this,n,e);var r=this.length,o=s(n),u=0;if(o+e>r)throw l("Wrong length");while(u<o)this[e+u]=n[u++]}),!m||v)},1091:function(t,e,n){var r=n(2109),i=n(7854),o=n(261).clear;r({global:!0,bind:!0,enumerable:!0,forced:i.clearImmediate!==o},{clearImmediate:o})},2801:function(t,e,n){"use strict";var r=n(2109),i=n(5005),o=n(9114),s=n(3070).f,a=n(2597),c=n(5787),u=n(9587),l=n(6277),h=n(3678),f=n(7741),d=n(1913),p="DOMException",g=i("Error"),m=i(p),v=function(){c(this,y);var t=arguments.length,e=l(t<1?void 0:arguments[0]),n=l(t<2?void 0:arguments[1],"Error"),r=new m(e,n),i=g(e);return i.name=p,s(r,"stack",o(1,f(i.stack,1))),u(r,this,v),r},y=v.prototype=m.prototype,w="stack"in g(p),b="stack"in new m(1,2),_=w&&!b;r({global:!0,constructor:!0,forced:d||_},{DOMException:_?v:m});var E=i(p),T=E.prototype;if(T.constructor!==E)for(var C in d||s(T,"constructor",o(1,E)),h)if(a(h,C)){var A=h[C],S=A.s;a(E,S)||s(E,S,o(6,A.c))}},4633:function(t,e,n){n(1091),n(2986)},2986:function(t,e,n){var r=n(2109),i=n(7854),o=n(261).set;r({global:!0,bind:!0,enumerable:!0,forced:i.setImmediate!==o},{setImmediate:o})},3536:function(t,e,n){"use strict";n.d(e,{BH:function(){return c},L:function(){return a},LL:function(){return b},Mn:function(){return g},ZR:function(){return w},b$:function(){return f},d:function(){return d},eu:function(){return v},hl:function(){return m},m9:function(){return A},ru:function(){return h},uI:function(){return l},vZ:function(){return T},w1:function(){return p}});n(1703),n(2801),n(6699);
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
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|s>>4;let h=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,s=o?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==s||null==c||null==l)throw Error();const h=e<<2|s>>4;if(r.push(h),64!==c){const t=s<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},s=function(t){const e=r(t);return o.encodeByteArray(e,!0)},a=function(t){return s(t).replace(/\./g,"")};
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
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function l(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function h(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function d(){return u().indexOf("Electron/")>=0}function p(){const t=u();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g(){return u().indexOf("MSAppHost/")>=0}function m(){return"object"===typeof indexedDB}function v(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
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
const y="FirebaseError";class w extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=y,Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,b.prototype.create)}}class b{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?_(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new w(r,s,n);return a}}function _(t,e){return t.replace(E,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const E=/\{\$([^}]+)}/g;
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
 */function T(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(C(n)&&C(o)){if(!T(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function C(t){return null!==t&&"object"===typeof t}
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
function A(t){return t&&t._delegate?t._delegate:t}},5659:function(t,e,n){"use strict";n(1703);var r={single_source_shortest_paths:function(t,e,n){var i={},o={};o[e]=0;var s,a,c,u,l,h,f,d,p,g=r.PriorityQueue.make();g.push(e,0);while(!g.empty())for(c in s=g.pop(),a=s.value,u=s.cost,l=t[a]||{},l)l.hasOwnProperty(c)&&(h=l[c],f=u+h,d=o[c],p="undefined"===typeof o[c],(p||d>f)&&(o[c]=f,g.push(c,f),i[c]=a));if("undefined"!==typeof n&&"undefined"===typeof o[n]){var m=["Could not find a path from ",e," to ",n,"."].join("");throw new Error(m)}return i},extract_shortest_path_from_predecessor_list:function(t,e){var n=[],r=e;while(r)n.push(r),t[r],r=t[r];return n.reverse(),n},find_path:function(t,e,n){var i=r.single_source_shortest_paths(t,e,n);return r.extract_shortest_path_from_predecessor_list(i,n)},PriorityQueue:{make:function(t){var e,n=r.PriorityQueue,i={};for(e in t=t||{},n)n.hasOwnProperty(e)&&(i[e]=n[e]);return i.queue=[],i.sorter=t.sorter||n.default_sorter,i},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var n={value:t,cost:e};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=r},4683:function(t,e,n){"use strict";n(8675),n(3462),t.exports=function(t){for(var e=[],n=t.length,r=0;r<n;r++){var i=t.charCodeAt(r);if(i>=55296&&i<=56319&&n>r+1){var o=t.charCodeAt(r+1);o>=56320&&o<=57343&&(i=1024*(i-55296)+o-56320+65536,r+=1)}i<128?e.push(i):i<2048?(e.push(i>>6|192),e.push(63&i|128)):i<55296||i>=57344&&i<65536?(e.push(i>>12|224),e.push(i>>6&63|128),e.push(63&i|128)):i>=65536&&i<=1114111?(e.push(i>>18|240),e.push(i>>12&63|128),e.push(i>>6&63|128),e.push(63&i|128)):e.push(239,191,189)}return new Uint8Array(e).buffer}},9017:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(3367),i="firebase",o="9.8.2";
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
(0,r.KN)(i,o,"app")},6926:function(t,e,n){"use strict";n.d(e,{ET:function(){return Ah},vr:function(){return xh},hJ:function(){return El},JU:function(){return Tl},QT:function(){return _h},PL:function(){return Th},ad:function(){return Il},cf:function(){return Sh},IO:function(){return dh},r7:function(){return Ch},ar:function(){return gh}});n(1703),n(8675),n(3462),n(2801),n(2262),n(4506),n(6699);var r,i=n(3367),o=n(7805),s=n(7366),a=n(3536),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function f(){}function d(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function g(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++v)}var m="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:w,b.apply(null,arguments)}function _(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function E(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function T(){this.s=this.s,this.o=this.o}var C=0,A={};T.prototype.s=!1,T.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=C)){var t=g(this);delete A[t]}},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const S=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},I=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"===typeof t?t.split(""):t;for(let o=0;o<r;o++)o in i&&e.call(n,i[o],o,t)};function k(t){t:{var e=Kn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function x(t){return Array.prototype.concat.apply([],arguments)}function R(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function N(t){return/^[\s\xa0]*$/.test(t)}var O,D=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function M(t,e){return-1!=t.indexOf(e)}function L(t,e){return t<e?-1:t>e?1:0}t:{var P=h.navigator;if(P){var U=P.userAgent;if(U){O=U;break t}}O=""}function F(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function $(t){const e={};for(const n in t)e[n]=t[n];return e}var B="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<B.length;e++)n=B[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function j(t){return j[" "](t),t}function q(t){var e=nt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}j[" "]=f;var H,z=M(O,"Opera"),K=M(O,"Trident")||M(O,"MSIE"),G=M(O,"Edge"),W=G||K,X=M(O,"Gecko")&&!(M(O.toLowerCase(),"webkit")&&!M(O,"Edge"))&&!(M(O,"Trident")||M(O,"MSIE"))&&!M(O,"Edge"),Y=M(O.toLowerCase(),"webkit")&&!M(O,"Edge");function Q(){var t=h.document;return t?t.documentMode:void 0}t:{var J="",Z=function(){var t=O;return X?/rv:([^\);]+)(\)|;)/.exec(t):G?/Edge\/([\d\.]+)/.exec(t):K?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):Y?/WebKit\/(\S+)/.exec(t):z?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Z&&(J=Z?Z[1]:""),K){var tt=Q();if(null!=tt&&tt>parseFloat(J)){H=String(tt);break t}}H=J}var et,nt={};function rt(){return q((function(){let t=0;const e=D(String(H)).split("."),n=D("9").split("."),r=Math.max(e.length,n.length);for(let s=0;0==t&&s<r;s++){var i=e[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==i[0].length&&0==o[0].length)break;t=L(0==i[1].length?0:parseInt(i[1],10),0==o[1].length?0:parseInt(o[1],10))||L(0==i[2].length,0==o[2].length)||L(i[2],o[2]),i=i[3],o=o[3]}while(0==t)}return 0<=t}))}if(h.document&&K){var it=Q();et=it||(parseInt(H,10)||void 0)}else et=void 0;var ot=et,st=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",f,e),h.removeEventListener("test",f,e)}catch(n){}return t}();function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ct(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(X){t:{try{j(e.nodeName);var i=!0;break t}catch(o){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:ut[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ct.Z.h.call(this)}}at.prototype.h=function(){this.defaultPrevented=!0},E(ct,at);var ut={2:"touch",3:"pen",4:"mouse"};ct.prototype.h=function(){ct.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var lt="closure_listenable_"+(1e6*Math.random()|0),ht=0;function ft(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++ht,this.ca=this.fa=!1}function dt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function pt(t){this.src=t,this.g={},this.h=0}function gt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],o=S(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(dt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function mt(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.ca&&o.listener==e&&o.capture==!!n&&o.ia==r)return i}return-1}pt.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=mt(t,e,r,i);return-1<s?(e=t[s],n||(e.fa=!1)):(e=new ft(e,this.src,o,!!r,i),e.fa=n,t.push(e)),e};var vt="closure_lm_"+(1e6*Math.random()|0),yt={};function wt(t,e,n,r,i){if(r&&r.once)return Et(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)wt(t,e[o],n,r,i);return null}return n=xt(n),t&&t[lt]?t.N(e,n,p(r)?!!r.capture:!!r,i):bt(t,e,n,!1,r,i)}function bt(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=p(i)?!!i.capture:!!i,a=It(t);if(a||(t[vt]=a=new pt(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=_t(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)st||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(At(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function _t(){function t(n){return e.call(t.src,t.listener,n)}var e=St;return t}function Et(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)Et(t,e[o],n,r,i);return null}return n=xt(n),t&&t[lt]?t.O(e,n,p(r)?!!r.capture:!!r,i):bt(t,e,n,!0,r,i)}function Tt(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)Tt(t,e[o],n,r,i);else r=p(r)?!!r.capture:!!r,n=xt(n),t&&t[lt]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=mt(o,n,r,i),-1<n&&(dt(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=It(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mt(e,n,r,i)),(n=-1<t?e[t]:null)&&Ct(n))}function Ct(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[lt])gt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(At(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=It(e))?(gt(n,t),0==n.h&&(n.src=null,e[vt]=null)):dt(t)}}}function At(t){return t in yt?yt[t]:yt[t]="on"+t}function St(t,e){if(t.ca)t=!0;else{e=new ct(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Ct(t),t=n.call(r,e)}return t}function It(t){return t=t[vt],t instanceof pt?t:null}var kt="__closure_events_fn_"+(1e9*Math.random()>>>0);function xt(t){return"function"===typeof t?t:(t[kt]||(t[kt]=function(e){return t.handleEvent(e)}),t[kt])}function Rt(){T.call(this),this.i=new pt(this),this.P=this,this.I=null}function Nt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var i=e;e=new at(r,t),V(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=Ot(s,r,!0,e)&&i}if(s=e.g=t,i=Ot(s,r,!0,e)&&i,i=Ot(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=Ot(s,r,!1,e)&&i}function Ot(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.ca&&s.capture==n){var a=s.listener,c=s.ia||s.src;s.fa&&gt(t.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}E(Rt,T),Rt.prototype[lt]=!0,Rt.prototype.removeEventListener=function(t,e,n,r){Tt(this,t,e,n,r)},Rt.prototype.M=function(){if(Rt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)dt(n[r]);delete e.g[t],e.h--}}this.I=null},Rt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Rt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Dt=h.JSON.stringify;function Mt(){var t=qt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Lt{constructor(){this.h=this.g=null}add(t,e){const n=Ut.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Pt,Ut=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ft),(t=>t.reset()));class Ft{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function $t(t){h.setTimeout((()=>{throw t}),0)}function Bt(t,e){Pt||Vt(),jt||(Pt(),jt=!0),qt.add(t,e)}function Vt(){var t=h.Promise.resolve(void 0);Pt=function(){t.then(Ht)}}var jt=!1,qt=new Lt;function Ht(){for(var t;t=Mt();){try{t.h.call(t.g)}catch(n){$t(n)}var e=Ut;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}jt=!1}function zt(t,e){Rt.call(this),this.h=t||1,this.g=e||h,this.j=b(this.kb,this),this.l=Date.now()}function Kt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Gt(t,e,n){if("function"===typeof t)n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Wt(t){t.g=Gt((()=>{t.g=null,t.i&&(t.i=!1,Wt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}E(zt,Rt),r=zt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Nt(this,"tick"),this.da&&(Kt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){zt.Z.M.call(this),Kt(this),delete this.g};class Xt extends T{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Wt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yt(t){T.call(this),this.h=t,this.g={}}E(Yt,T);var Qt=[];function Jt(t,e,n,r){Array.isArray(n)||(n&&(Qt[0]=n.toString()),n=Qt);for(var i=0;i<n.length;i++){var o=wt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Zt(t){F(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Ct(t)}),t),t.g={}}function te(){this.g=!0}function ee(t,e,n,r,i,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}function ne(t,e,n,r,i,o,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s}))}function re(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+oe(t,n)+(r?" "+r:"")}))}function ie(t,e){t.info((function(){return"TIMEOUT: "+e}))}function oe(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return Dt(n)}catch(a){return e}}Yt.prototype.M=function(){Yt.Z.M.call(this),Zt(this)},Yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},te.prototype.Aa=function(){this.g=!1},te.prototype.info=function(){};var se={},ae=null;function ce(){return ae=ae||new Rt}function ue(t){at.call(this,se.Ma,t)}function le(t){const e=ce();Nt(e,new ue(e,t))}function he(t,e){at.call(this,se.STAT_EVENT,t),this.stat=e}function fe(t){const e=ce();Nt(e,new he(e,t))}function de(t,e){at.call(this,se.Na,t),this.size=e}function pe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}se.Ma="serverreachability",E(ue,at),se.STAT_EVENT="statevent",E(he,at),se.Na="timingevent",E(de,at);var ge={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},me={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ve(){}function ye(t){return t.h||(t.h=t.i())}function we(){}ve.prototype.h=null;var be,_e={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ee(){at.call(this,"d")}function Te(){at.call(this,"c")}function Ce(){}function Ae(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Yt(this),this.P=Ie,t=W?125:void 0,this.W=new zt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Se}function Se(){this.i=null,this.g="",this.h=!1}E(Ee,at),E(Te,at),E(Ce,ve),Ce.prototype.g=function(){return new XMLHttpRequest},Ce.prototype.i=function(){return{}},be=new Ce;var Ie=45e3,ke={},xe={};function Re(t,e,n){t.K=1,t.v=en(Xe(e)),t.s=n,t.U=!0,Ne(t,null)}function Ne(t,e){t.F=Date.now(),Le(t),t.A=Xe(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),vn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Se,t.g=Tr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Xt(b(t.Ia,t,t.g),t.O)),Jt(t.V,t.g,"readystatechange",t.gb),e=t.H?$(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),le(1),ee(t.j,t.u,t.A,t.m,t.X,t.s)}function Oe(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function De(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Me(t,n),r==xe){4==e&&(t.o=4,fe(14),i=!1),re(t.j,t.m,null,"[Incomplete Response]");break}if(r==ke){t.o=4,fe(15),re(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}re(t.j,t.m,r,null),Be(t,r)}Oe(t)&&r!=xe&&r!=ke&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,fe(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),gr(e),e.L=!0,fe(11))):(re(t.j,t.m,n,"[Invalid Chunked Response]"),$e(t),Fe(t))}function Me(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?xe:(n=Number(e.substring(n,r)),isNaN(n)?ke:(r+=1,r+n>e.length?xe:(e=e.substr(r,n),t.C=r+n,e)))}function Le(t){t.Y=Date.now()+t.P,Pe(t,t.P)}function Pe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=pe(b(t.eb,t),e)}function Ue(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Fe(t){0==t.l.G||t.I||yr(t.l,t)}function $e(t){Ue(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Kt(t.W),Zt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Be(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||An(n.i,t)))if(n.I=t.N,!t.J&&An(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;vr(n),or(n)}pr(n),fe(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=pe(b(n.ab,n),6e3));if(1>=Cn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else br(n,11)}else if((t.J||n.g==t)&&vr(n),!N(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=r.i;!o.g&&(M(t,"spdy")||M(t,"quic")||M(t,"h2"))&&(o.j=o.l,o.g=new Set,o.h&&(Sn(o,o.h),o.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,tn(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var s=t;if(r.oa=Er(r,r.H?r.la:null,r.W),s.J){In(r.i,s);var a=s,c=r.K;c&&a.setTimeout(c),a.B&&(Ue(a),Le(a)),r.g=s}else dr(r);0<n.l.length&&cr(n)}else"stop"!=u[0]&&"close"!=u[0]||br(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?br(n,7):ir(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}le(4)}catch(u){}}function Ve(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(d(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function je(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(d(t)||"string"===typeof t)I(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(d(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Ve(t),i=r.length;for(var o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}}function qe(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof qe)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function He(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];ze(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],ze(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function ze(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=Ae.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Jn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const l=Jn(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>l)&&(3!=l||W||this.g&&(this.h.h||this.g.ga()||Zn(this.g)))){this.I||4!=l||7==e||le(8==e||0>=f?3:2),Ue(this);var n=this.g.ba();this.N=n;e:if(Oe(this)){var r=Zn(this.g);t="";var i=r.length,o=4==Jn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){$e(this),Fe(this);var s="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.ga();if(this.i=200==n,ne(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,fe(12),$e(this),Fe(this);break t}re(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Be(this,n)}this.U?(De(this,l,s),W&&this.i&&3==l&&(Jt(this.V,this.W,"tick",this.fb),this.W.start())):(re(this.j,this.m,s,null),Be(this,s)),4==l&&$e(this),this.i&&!this.I&&(4==l?yr(this.l,this):(this.i=!1,Le(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,fe(12)):(this.o=0,fe(13)),$e(this),Fe(this)}}}catch(l){}},r.fb=function(){if(this.g){var t=Jn(this.g),e=this.g.ga();this.C<e.length&&(Ue(this),De(this,t,e),this.i&&4!=t&&Le(this))}},r.cancel=function(){this.I=!0,$e(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ie(this.j,this.A),2!=this.K&&(le(3),fe(17)),$e(this),this.o=2,Fe(this)):Pe(this,this.Y-t)},r=qe.prototype,r.R=function(){He(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return He(this),this.g.concat()},r.get=function(t,e){return ze(this.h,t)?this.h[t]:e},r.set=function(t,e){ze(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],o=this.get(i);t.call(e,o,i,this)}};var Ke=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ge(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function We(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof We){this.g=void 0!==e?e:t.g,Ye(this,t.j),this.s=t.s,Qe(this,t.i),Je(this,t.m),this.l=t.l,e=t.h;var n=new dn;n.i=e.i,e.g&&(n.g=new qe(e.g),n.h=e.h),Ze(this,n),this.o=t.o}else t&&(n=String(t).match(Ke))?(this.g=!!e,Ye(this,n[1]||"",!0),this.s=on(n[2]||""),Qe(this,n[3]||"",!0),Je(this,n[4]),this.l=on(n[5]||"",!0),Ze(this,n[6]||"",!0),this.o=on(n[7]||"")):(this.g=!!e,this.h=new dn(null,this.g))}function Xe(t){return new We(t)}function Ye(t,e,n){t.j=n?on(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qe(t,e,n){t.i=n?on(e,!0):e}function Je(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ze(t,e,n){e instanceof dn?(t.h=e,wn(t.h,t.g)):(n||(e=sn(e,hn)),t.h=new dn(e,t.g))}function tn(t,e,n){t.h.set(e,n)}function en(t){return tn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nn(t){return t instanceof We?Xe(t):new We(t,void 0)}function rn(t,e,n,r){var i=new We(null,void 0);return t&&Ye(i,t),e&&Qe(i,e),n&&Je(i,n),r&&(i.l=r),i}function on(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function sn(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,an),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function an(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}We.prototype.toString=function(){var t=[],e=this.j;e&&t.push(sn(e,cn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(sn(e,cn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(sn(n,"/"==n.charAt(0)?ln:un,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",sn(n,fn)),t.join("")};var cn=/[#\/\?@]/g,un=/[#\?:]/g,ln=/[#\?]/g,hn=/[#\?@]/g,fn=/#/g;function dn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function pn(t){t.g||(t.g=new qe,t.h=0,t.i&&Ge(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function gn(t,e){pn(t),e=yn(t,e),ze(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ze(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&He(t)))}function mn(t,e){return pn(t),e=yn(t,e),ze(t.g.h,e)}function vn(t,e,n){gn(t,e),0<n.length&&(t.i=null,t.g.set(yn(t,e),R(n)),t.h+=n.length)}function yn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function wn(t,e){e&&!t.j&&(pn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(gn(this,e),vn(this,n,t))}),t)),t.j=e}r=dn.prototype,r.add=function(t,e){pn(this),this.i=null,t=yn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){pn(this),this.g.forEach((function(n,r){I(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){pn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],o=0;o<i.length;o++)n.push(e[r]);return n},r.R=function(t){pn(this);var e=[];if("string"===typeof t)mn(this,t)&&(e=x(e,this.g.get(yn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=x(e,t[n])}return e},r.set=function(t,e){return pn(this),this.i=null,t=yn(this,t),mn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var o=0;o<r.length;o++){var s=i;""!==r[o]&&(s+="="+encodeURIComponent(String(r[o]))),t.push(s)}}return this.i=t.join("&")};var bn=class{constructor(t,e){this.h=t,this.g=e}};function _n(t){this.l=t||En,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ea&&h.g.Ea()&&h.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var En=10;function Tn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Cn(t){return t.h?1:t.g?t.g.size:0}function An(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Sn(t,e){t.g?t.g.add(e):t.h=e}function In(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function kn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return R(t.i)}function xn(){}function Rn(){this.g=new xn}function Nn(t,e,n){const r=n||"";try{je(t,(function(t,n){let i=t;p(t)&&(i=Dt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function On(t,e){const n=new te;if(h.Image){const r=new Image;r.onload=_(Dn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=_(Dn,n,r,"TestLoadImage: error",!1,e),r.onabort=_(Dn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=_(Dn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Dn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(o){}}function Mn(t){this.l=t.$b||null,this.j=t.ib||!1}function Ln(t,e){Rt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Pn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_n.prototype.cancel=function(){if(this.i=kn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},xn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},xn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},E(Mn,ve),Mn.prototype.g=function(){return new Ln(this.l,this.j)},Mn.prototype.i=function(t){return function(){return t}}({}),E(Ln,Rt);var Pn=0;function Un(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Fn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,$n(t)}function $n(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Ln.prototype,r.open=function(t,e){if(this.readyState!=Pn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,$n(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Fn(this)),this.readyState=Pn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$n(this)),this.g&&(this.readyState=3,$n(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Un(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fn(this):$n(this),3==this.readyState&&Un(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Fn(this))},r.Ta=function(t){this.g&&(this.response=t,Fn(this))},r.ha=function(){this.g&&Fn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ln.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Bn=h.JSON.parse;function Vn(t){Rt.call(this),this.headers=new qe,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=jn,this.K=this.L=!1}E(Vn,Rt);var jn="",qn=/^https?$/i,Hn=["POST","PUT"];function zn(t){return K&&rt()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Kn(t){return"content-type"==t.toLowerCase()}function Gn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Wn(t),Yn(t)}function Wn(t){t.D||(t.D=!0,Nt(t,"complete"),Nt(t,"error"))}function Xn(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=Jn(t)||2!=t.ba()))if(t.v&&4==Jn(t))Gt(t.Fa,0,t);else if(Nt(t,"readystatechange"),4==Jn(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var i=String(t.H).match(Ke)[1]||null;if(!i&&h.self&&h.self.location){var o=h.self.location.protocol;i=o.substr(0,o.length-1)}r=!qn.test(i?i.toLowerCase():"")}n=r}if(n)Nt(t,"complete"),Nt(t,"success");else{t.m=6;try{var s=2<Jn(t)?t.g.statusText:""}catch(a){s=""}t.j=s+" ["+t.ba()+"]",Wn(t)}}finally{Yn(t)}}}function Yn(t,e){if(t.g){Qn(t);const r=t.g,i=t.C[0]?f:null;t.g=null,t.C=null,e||Nt(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Qn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Jn(t){return t.g?t.g.readyState:0}function Zn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case jn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tr(t){let e="";return F(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function er(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=tr(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):tn(t,e,n))}function nr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rr(t){this.za=0,this.l=[],this.h=new te,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=nr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=nr("baseRetryDelayMs",5e3,t),this.$a=nr("retryDelaySeedMs",1e4,t),this.Ya=nr("forwardChannelMaxRetries",2,t),this.ra=nr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new _n(t&&t.concurrentRequestLimit),this.Ca=new Rn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ir(t){if(sr(t),3==t.G){var e=t.V++,n=Xe(t.F);tn(n,"SID",t.J),tn(n,"RID",e),tn(n,"TYPE","terminate"),hr(t,n),e=new Ae(t,t.h,e,void 0),e.K=2,e.v=en(Xe(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=Tr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Le(e)}_r(t)}function or(t){t.g&&(gr(t),t.g.cancel(),t.g=null)}function sr(t){or(t),t.u&&(h.clearTimeout(t.u),t.u=null),vr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function ar(t,e){t.l.push(new bn(t.Za++,e)),3==t.G&&cr(t)}function cr(t){Tn(t.i)||t.m||(t.m=!0,Bt(t.Ha,t),t.C=0)}function ur(t,e){return!(Cn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=pe(b(t.Ha,t,e),wr(t,t.C)),t.C++,!0))}function lr(t,e){var n;n=e?e.m:t.V++;const r=Xe(t.F);tn(r,"SID",t.J),tn(r,"RID",n),tn(r,"AID",t.U),hr(t,r),t.o&&t.s&&er(r,t.o,t.s),n=new Ae(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=fr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Sn(t.i,n),Re(n,r,e)}function hr(t,e){t.j&&je({},(function(t,n){tn(e,n,t)}))}function fr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?b(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let s=0;s<n;s++){let n=i[s].h;const a=i[s].g;if(n-=e,0>n)e=Math.max(0,i[s].h-100),o=!1;else try{Nn(a,t,"req"+n+"_")}catch(Qr){r&&r(a)}}if(o){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function dr(t){t.g||t.u||(t.Y=1,Bt(t.Ga,t),t.A=0)}function pr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=pe(b(t.Ga,t),wr(t,t.A)),t.A++,!0)}function gr(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function mr(t){t.g=new Ae(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Xe(t.oa);tn(e,"RID","rpc"),tn(e,"SID",t.J),tn(e,"CI",t.N?"0":"1"),tn(e,"AID",t.U),hr(t,e),tn(e,"TYPE","xmlhttp"),t.o&&t.s&&er(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=en(Xe(e)),n.s=null,n.U=!0,Ne(n,t)}function vr(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function yr(t,e){var n=null;if(t.g==e){vr(t),gr(t),t.g=null;var r=2}else{if(!An(t.i,e))return;n=e.D,In(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ce(),Nt(r,new de(r,n,e,i)),cr(t)}else dr(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&ur(t,e)||2==r&&pr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:br(t,5);break;case 4:br(t,10);break;case 3:br(t,6);break;default:br(t,2)}}function wr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function br(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=b(t.jb,t);n||(n=new We("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Ye(n,"https"),en(n)),On(n.toString(),r)}else fe(2);t.G=0,t.j&&t.j.va(e),_r(t),sr(t)}function _r(t){t.G=0,t.I=-1,t.j&&(0==kn(t.i).length&&0==t.l.length||(t.i.i.length=0,R(t.l),t.l.length=0),t.j.ua())}function Er(t,e,n){let r=nn(n);if(""!=r.i)e&&Qe(r,e+"."+r.i),Je(r,r.m);else{const t=h.location;r=rn(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&F(t.aa,(function(t,e){tn(r,e,t)})),e=t.D,n=t.sa,e&&n&&tn(r,e,n),tn(r,"VER",t.ma),hr(t,r),r}function Tr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Vn(new Mn({ib:!0})):new Vn(t.qa),e.L=t.H,e}function Cr(){}function Ar(){if(K&&!(10<=Number(ot)))throw Error("Environmental error: no available transport.")}function Sr(t,e){Rt.call(this),this.g=new rr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!N(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!N(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new xr(this)}function Ir(t){Ee.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function kr(){Te.call(this),this.status=1}function xr(t){this.g=t}r=Vn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():be.g(),this.C=this.u?ye(this.u):ye(be),this.g.onreadystatechange=b(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(o){return void Gn(this,o)}t=n||"";const i=new qe(this.headers);r&&je(r,(function(t,e){i.set(e,t)})),r=k(i.T()),n=h.FormData&&t instanceof h.FormData,!(0<=S(Hn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Qn(this),0<this.B&&((this.K=zn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.pa,this)):this.A=Gt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){Gn(this,o)}},r.pa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Nt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Nt(this,"complete"),Nt(this,"abort"),Yn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yn(this,!0)),Vn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Xn(this):this.cb())},r.cb=function(){Xn(this)},r.ba=function(){try{return 2<Jn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Bn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=rr.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ae(this,this.h,t,void 0);let o=this.s;if(this.P&&(o?(o=$(o),V(o,this.P)):o=this.P),null===this.o&&(i.H=o),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=fr(this,i,e),n=Xe(this.F),tn(n,"RID",t),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),hr(this,n),this.o&&o&&er(n,this.o,o),Sn(this.i,i),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",e),tn(n,"SID","null"),i.$=!0,Re(i,n,null)):Re(i,n,e),this.G=2}}else 3==this.G&&(t?lr(this,t):0==this.l.length||Tn(this.i)||lr(this))},r.Ga=function(){if(this.u=null,mr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=pe(b(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,fe(10),or(this),mr(this))},r.ab=function(){null!=this.v&&(this.v=null,or(this),pr(this),fe(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),fe(2)):(this.h.info("Failed to ping google.com"),fe(1))},r=Cr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Ar.prototype.g=function(t,e){return new Sr(t,e)},E(Sr,Rt),Sr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Bt(b(t.hb,t,e))),fe(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Er(t,null,t.W),cr(t)},Sr.prototype.close=function(){ir(this.g)},Sr.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ar(this.g,e)}else this.v?(e={},e.__data__=Dt(t),ar(this.g,e)):ar(this.g,t)},Sr.prototype.M=function(){this.g.j=null,delete this.j,ir(this.g),delete this.g,Sr.Z.M.call(this)},E(Ir,Ee),E(kr,Te),E(xr,Cr),xr.prototype.xa=function(){Nt(this.g,"a")},xr.prototype.wa=function(t){Nt(this.g,new Ir(t))},xr.prototype.va=function(t){Nt(this.g,new kr(t))},xr.prototype.ua=function(){Nt(this.g,"b")},Ar.prototype.createWebChannel=Ar.prototype.g,Sr.prototype.send=Sr.prototype.u,Sr.prototype.open=Sr.prototype.m,Sr.prototype.close=Sr.prototype.close,ge.NO_ERROR=0,ge.TIMEOUT=8,ge.HTTP_ERROR=6,me.COMPLETE="complete",we.EventType=_e,_e.OPEN="a",_e.CLOSE="b",_e.ERROR="c",_e.MESSAGE="d",Rt.prototype.listen=Rt.prototype.N,Vn.prototype.listenOnce=Vn.prototype.O,Vn.prototype.getLastError=Vn.prototype.La,Vn.prototype.getLastErrorCode=Vn.prototype.Da,Vn.prototype.getStatus=Vn.prototype.ba,Vn.prototype.getResponseJson=Vn.prototype.Qa,Vn.prototype.getResponseText=Vn.prototype.ga,Vn.prototype.send=Vn.prototype.ea;var Rr=u.createWebChannelTransport=function(){return new Ar},Nr=u.getStatEventTarget=function(){return ce()},Or=u.ErrorCode=ge,Dr=u.EventType=me,Mr=u.Event=se,Lr=u.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Pr=u.FetchXmlHttpFactory=Mn,Ur=u.WebChannel=we,Fr=u.XhrIo=Vn;const $r="@firebase/firestore";
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
 */class Br{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Br.UNAUTHENTICATED=new Br(null),Br.GOOGLE_CREDENTIALS=new Br("google-credentials-uid"),Br.FIRST_PARTY=new Br("first-party-uid"),Br.MOCK_USER=new Br("mock-user");
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
let Vr="9.8.0";
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
 */const jr=new s.Yd("@firebase/firestore");function qr(){return jr.logLevel}function Hr(t,...e){if(jr.logLevel<=s["in"].DEBUG){const n=e.map(Gr);jr.debug(`Firestore (${Vr}): ${t}`,...n)}}function zr(t,...e){if(jr.logLevel<=s["in"].ERROR){const n=e.map(Gr);jr.error(`Firestore (${Vr}): ${t}`,...n)}}function Kr(t,...e){if(jr.logLevel<=s["in"].WARN){const n=e.map(Gr);jr.warn(`Firestore (${Vr}): ${t}`,...n)}}function Gr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function Wr(t="Unexpected state"){const e=`FIRESTORE (${Vr}) INTERNAL ASSERTION FAILED: `+t;throw zr(e),new Error(e)}function Xr(t,e){t||Wr()}function Yr(t,e){return t}
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
 */class ti{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ei{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Br.UNAUTHENTICATED)))}shutdown(){}}class ni{constructor(t){this.t=t,this.currentUser=Br.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Zr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zr,t.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},s=t=>{Hr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((t=>s(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(Hr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zr)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Hr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Xr("string"==typeof e.accessToken),new ti(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Xr(null===t||"string"==typeof t),new Br(t)}}class ri{constructor(t,e,n){this.type="FirstParty",this.user=Br.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ii{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new ri(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Br.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class oi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class si{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Hr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Hr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Hr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):Hr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Xr("string"==typeof t.token),this.p=t.token,new oi(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
 */function pi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class vi{constructor(t,e,n){void 0===e?e=0:e>t.length&&Wr(),void 0===n?n=t.length-e:n>t.length-e&&Wr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===vi.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof vi?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class yi extends vi{construct(t,e,n){return new yi(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Jr(Qr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new yi(e)}static emptyPath(){return new yi([])}}const wi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bi extends vi{construct(t,e,n){return new bi(t,e,n)}static isValidIdentifier(t){return wi.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bi.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new bi(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Jr(Qr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Jr(Qr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Jr(Qr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(o=!o,r++):"."!==e||o?(n+=e,r++):(i(),r++)}if(i(),o)throw new Jr(Qr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new bi(e)}static emptyPath(){return new bi([])}}
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
 */class _i{constructor(t){this.fields=t,t.sort(bi.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return hi(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
 */class Ri{constructor(t,e,n,r,i,o,s,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class Ni{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ni("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ni&&t.projectId===this.projectId&&t.database===this.database}}
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
 */function Oi(t){return null==t}function Di(t){return 0===t&&1/t==-1/0}function Mi(t){return"number"==typeof t&&Number.isInteger(t)&&!Di(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */class Li{constructor(t){this.path=t}static fromPath(t){return new Li(yi.fromString(t))}static fromName(t){return new Li(yi.fromString(t).popFirst(5))}static empty(){return new Li(yi.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===yi.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return yi.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Li(new yi(t.slice()))}}
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
 */const Pi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ui(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ii(t)?4:Qi(t)?9007199254740991:10:Wr()}function Fi(t,e){if(t===e)return!0;const n=Ui(t);if(n!==Ui(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xi(t).isEqual(xi(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ci(t.timestampValue),r=Ci(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Si(t.bytesValue).isEqual(Si(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ai(t.geoPointValue.latitude)===Ai(e.geoPointValue.latitude)&&Ai(t.geoPointValue.longitude)===Ai(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ai(t.integerValue)===Ai(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ai(t.doubleValue),r=Ai(e.doubleValue);return n===r?Di(n)===Di(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return hi(t.arrayValue.values||[],e.arrayValue.values||[],Fi);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(pi(n)!==pi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Fi(n[i],r[i])))return!1;return!0}(t,e);default:return Wr()}}function $i(t,e){return void 0!==(t.values||[]).find((t=>Fi(t,e)))}function Bi(t,e){if(t===e)return 0;const n=Ui(t),r=Ui(e);if(n!==r)return li(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return li(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ai(t.integerValue||t.doubleValue),r=Ai(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Vi(t.timestampValue,e.timestampValue);case 4:return Vi(xi(t),xi(e));case 5:return li(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Si(t),r=Si(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=li(n[i],r[i]);if(0!==t)return t}return li(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=li(Ai(t.latitude),Ai(e.latitude));return 0!==n?n:li(Ai(t.longitude),Ai(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Bi(n[i],r[i]);if(t)return t}return li(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Pi.mapValue&&e===Pi.mapValue)return 0;if(t===Pi.mapValue)return 1;if(e===Pi.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const t=li(r[s],o[s]);if(0!==t)return t;const e=Bi(n[r[s]],i[o[s]]);if(0!==e)return e}return li(r.length,o.length)}(t.mapValue,e.mapValue);default:throw Wr()}}function Vi(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return li(t,e);const n=Ci(t),r=Ci(e),i=li(n.seconds,r.seconds);return 0!==i?i:li(n.nanos,r.nanos)}function ji(t){return qi(t)}function qi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ci(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Si(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Li.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=qi(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${qi(t.fields[i])}`;return n+"}"}(t.mapValue):Wr();var e,n}function Hi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zi(t){return!!t&&"integerValue"in t}function Ki(t){return!!t&&"arrayValue"in t}function Gi(t){return!!t&&"nullValue"in t}function Wi(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xi(t){return!!t&&"mapValue"in t}function Yi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return gi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Yi(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Qi(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Ji{constructor(t){this.value=t}static empty(){return new Ji({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Xi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Yi(e)}setAll(t){let e=bi.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Yi(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Xi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Fi(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Xi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){gi(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Ji(Yi(this.value))}}function Zi(t){const e=[];return gi(t.fields,((t,n)=>{const r=new bi([t]);if(Xi(n)){const t=Zi(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new _i(e)
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
 */}class to{constructor(t,e,n,r,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new to(t,0,di.min(),di.min(),Ji.empty(),0)}static newFoundDocument(t,e,n){return new to(t,1,e,di.min(),n,0)}static newNoDocument(t,e){return new to(t,2,e,di.min(),Ji.empty(),0)}static newUnknownDocument(t,e){return new to(t,3,e,di.min(),Ji.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ji.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ji.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof to&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new to(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class eo{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}eo.UNKNOWN_ID=-1;function no(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=di.fromTimestamp(1e9===r?new fi(n+1,0):new fi(n,r));return new io(i,Li.empty(),e)}function ro(t){return new io(t.readTime,t.key,-1)}class io{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new io(di.min(),Li.empty(),-1)}static max(){return new io(di.max(),Li.empty(),-1)}}function oo(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Li.comparator(t.documentKey,e.documentKey),0!==n?n:li(t.largestBatchId,e.largestBatchId))}
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
 */class so{constructor(t,e){this.comparator=t,this.root=e||co.EMPTY}insert(t,e){return new so(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,co.BLACK,null,null))}remove(t){return new so(this.comparator,this.root.remove(t,this.comparator).copy(null,null,co.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ao(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ao(this.root,t,this.comparator,!1)}getReverseIterator(){return new ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ao(this.root,t,this.comparator,!0)}}class ao{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class co{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:co.RED,this.left=null!=r?r:co.EMPTY,this.right=null!=i?i:co.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new co(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return co.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return co.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,co.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,co.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Wr();if(this.right.isRed())throw Wr();const t=this.left.check();if(t!==this.right.check())throw Wr();return t+(this.isRed()?0:1)}}co.EMPTY=null,co.RED=!0,co.BLACK=!1,co.EMPTY=new class{constructor(){this.size=0}get key(){throw Wr()}get value(){throw Wr()}get color(){throw Wr()}get left(){throw Wr()}get right(){throw Wr()}copy(t,e,n,r,i){return this}insert(t,e,n){return new co(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class uo{constructor(t){this.comparator=t,this.data=new so(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new lo(this.data.getIterator())}getIteratorFrom(t){return new lo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof uo))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new uo(this.comparator);return e.data=t,e}}class lo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class ho{constructor(t,e=null,n=[],r=[],i=null,o=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.P=null}}function fo(t,e=null,n=[],r=[],i=null,o=null,s=null){return new ho(t,e,n,r,i,o,s)}function po(t){const e=Yr(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+ji(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Oi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>ji(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>ji(t))).join(",")),e.P=t}return e.P}function go(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ji(e.value)}`;var e})).join(", ")}]`),Oi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>ji(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>ji(t))).join(",")),`Target(${e})`}function mo(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!xo(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Fi(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!No(t.startAt,e.startAt)&&No(t.endAt,e.endAt)}function vo(t){return Li.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class yo extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.V(t,e,n):new wo(t,e,n):"array-contains"===e?new To(t,n):"in"===e?new Co(t,n):"not-in"===e?new Ao(t,n):"array-contains-any"===e?new So(t,n):new yo(t,e,n)}static V(t,e,n){return"in"===e?new bo(t,n):new _o(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(Bi(e,this.value)):null!==e&&Ui(this.value)===Ui(e)&&this.v(Bi(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Wr()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class wo extends yo{constructor(t,e,n){super(t,e,n),this.key=Li.fromName(n.referenceValue)}matches(t){const e=Li.comparator(t.key,this.key);return this.v(e)}}class bo extends yo{constructor(t,e){super(t,"in",e),this.keys=Eo("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class _o extends yo{constructor(t,e){super(t,"not-in",e),this.keys=Eo("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Eo(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Li.fromName(t.referenceValue)))}class To extends yo{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ki(e)&&$i(e.arrayValue,this.value)}}class Co extends yo{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&$i(this.value.arrayValue,e)}}class Ao extends yo{constructor(t,e){super(t,"not-in",e)}matches(t){if($i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!$i(this.value.arrayValue,e)}}class So extends yo{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ki(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>$i(this.value.arrayValue,t)))}}class Io{constructor(t,e){this.position=t,this.inclusive=e}}class ko{constructor(t,e="asc"){this.field=t,this.dir=e}}function xo(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ro(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(r=o.field.isKeyField()?Li.comparator(Li.fromName(s.referenceValue),n.key):Bi(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function No(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fi(t.position[n],e.position[n]))return!1;return!0}
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
 */class Oo{constructor(t,e=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function Do(t,e,n,r,i,o,s,a){return new Oo(t,e,n,r,i,o,s,a)}function Mo(t){return new Oo(t)}function Lo(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Po(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Uo(t){for(const e of t.filters)if(e.S())return e.field;return null}function Fo(t){return null!==t.collectionGroup}function $o(t){const e=Yr(t);if(null===e.D){e.D=[];const t=Uo(e),n=Po(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new ko(t)),e.D.push(new ko(bi.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new ko(bi.keyField(),t))}}}return e.D}function Bo(t){const e=Yr(t);if(!e.C)if("F"===e.limitType)e.C=fo(e.path,e.collectionGroup,$o(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of $o(e)){const e="desc"===i.dir?"asc":"desc";t.push(new ko(i.field,e))}const n=e.endAt?new Io(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Io(e.startAt.position,e.startAt.inclusive):null;e.C=fo(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.C}function Vo(t,e,n){return new Oo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jo(t,e){return mo(Bo(t),Bo(e))&&t.limitType===e.limitType}function qo(t){return`${po(Bo(t))}|lt:${t.limitType}`}function Ho(t){return`Query(target=${go(Bo(t))}; limitType=${t.limitType})`}function zo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Li.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Ro(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,$o(t),e))&&!(t.endAt&&!function(t,e,n){const r=Ro(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,$o(t),e))}(t,e)}function Ko(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Go(t){return(e,n)=>{let r=!1;for(const i of $o(t)){const t=Wo(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Wo(t,e,n){const r=t.field.isKeyField()?Li.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Bi(r,i):Wr()}
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
 */function Xo(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Di(e)?"-0":e}}function Yo(t){return{integerValue:""+t}}function Qo(t,e){return Mi(e)?Yo(e):Xo(t,e)}
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
 */class Jo{constructor(){this._=void 0}}function Zo(t,e,n){return t instanceof ns?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof rs?is(t,e):t instanceof os?ss(t,e):function(t,e){const n=es(t,e),r=cs(n)+cs(t.k);return zi(n)&&zi(t.k)?Yo(r):Xo(t.M,r)}(t,e)}function ts(t,e,n){return t instanceof rs?is(t,e):t instanceof os?ss(t,e):n}function es(t,e){return t instanceof as?zi(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ns extends Jo{}class rs extends Jo{constructor(t){super(),this.elements=t}}function is(t,e){const n=us(e);for(const r of t.elements)n.some((t=>Fi(t,r)))||n.push(r);return{arrayValue:{values:n}}}class os extends Jo{constructor(t){super(),this.elements=t}}function ss(t,e){let n=us(e);for(const r of t.elements)n=n.filter((t=>!Fi(t,r)));return{arrayValue:{values:n}}}class as extends Jo{constructor(t,e){super(),this.M=t,this.k=e}}function cs(t){return Ai(t.integerValue||t.doubleValue)}function us(t){return Ki(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class ls{constructor(t,e){this.field=t,this.transform=e}}function hs(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof rs&&e instanceof rs||t instanceof os&&e instanceof os?hi(t.elements,e.elements,Fi):t instanceof as&&e instanceof as?Fi(t.k,e.k):t instanceof ns&&e instanceof ns}(t.transform,e.transform)}class fs{constructor(t,e){this.version=t,this.transformResults=e}}class ds{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ds}static exists(t){return new ds(void 0,t)}static updateTime(t){return new ds(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ps(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class gs{}function ms(t,e,n){t instanceof _s?function(t,e,n){const r=t.value.clone(),i=Cs(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Es?function(t,e,n){if(!ps(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Cs(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Ts(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function vs(t,e,n){t instanceof _s?function(t,e,n){if(!ps(t.precondition,e))return;const r=t.value.clone(),i=As(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(bs(e),r).setHasLocalMutations()}(t,e,n):t instanceof Es?function(t,e,n){if(!ps(t.precondition,e))return;const r=As(t.fieldTransforms,n,e),i=e.data;i.setAll(Ts(t)),i.setAll(r),e.convertToFoundDocument(bs(e),i).setHasLocalMutations()}(t,e,n):function(t,e){ps(t.precondition,e)&&e.convertToNoDocument(di.min())}(t,e)}function ys(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=es(r.transform,t||null);null!=i&&(null==n&&(n=Ji.empty()),n.set(r.field,i))}return n||null}function ws(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&hi(t,e,((t,e)=>hs(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function bs(t){return t.isFoundDocument()?t.version:di.min()}class _s extends gs{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Es extends gs{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Ts(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Cs(t,e,n){const r=new Map;Xr(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,ts(s,a,n[i]))}return r}function As(t,e,n){const r=new Map;for(const i of t){const t=i.transform,o=n.data.field(i.field);r.set(i.field,Zo(t,o,e))}return r}class Ss extends gs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Is extends gs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
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
 */class ks{constructor(t){this.count=t}}
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
 */var xs,Rs;function Ns(t){switch(t){default:return Wr();case Qr.CANCELLED:case Qr.UNKNOWN:case Qr.DEADLINE_EXCEEDED:case Qr.RESOURCE_EXHAUSTED:case Qr.INTERNAL:case Qr.UNAVAILABLE:case Qr.UNAUTHENTICATED:return!1;case Qr.INVALID_ARGUMENT:case Qr.NOT_FOUND:case Qr.ALREADY_EXISTS:case Qr.PERMISSION_DENIED:case Qr.FAILED_PRECONDITION:case Qr.ABORTED:case Qr.OUT_OF_RANGE:case Qr.UNIMPLEMENTED:case Qr.DATA_LOSS:return!0}}function Os(t){if(void 0===t)return zr("GRPC error has no .code"),Qr.UNKNOWN;switch(t){case xs.OK:return Qr.OK;case xs.CANCELLED:return Qr.CANCELLED;case xs.UNKNOWN:return Qr.UNKNOWN;case xs.DEADLINE_EXCEEDED:return Qr.DEADLINE_EXCEEDED;case xs.RESOURCE_EXHAUSTED:return Qr.RESOURCE_EXHAUSTED;case xs.INTERNAL:return Qr.INTERNAL;case xs.UNAVAILABLE:return Qr.UNAVAILABLE;case xs.UNAUTHENTICATED:return Qr.UNAUTHENTICATED;case xs.INVALID_ARGUMENT:return Qr.INVALID_ARGUMENT;case xs.NOT_FOUND:return Qr.NOT_FOUND;case xs.ALREADY_EXISTS:return Qr.ALREADY_EXISTS;case xs.PERMISSION_DENIED:return Qr.PERMISSION_DENIED;case xs.FAILED_PRECONDITION:return Qr.FAILED_PRECONDITION;case xs.ABORTED:return Qr.ABORTED;case xs.OUT_OF_RANGE:return Qr.OUT_OF_RANGE;case xs.UNIMPLEMENTED:return Qr.UNIMPLEMENTED;case xs.DATA_LOSS:return Qr.DATA_LOSS;default:return Wr()}}(Rs=xs||(xs={}))[Rs.OK=0]="OK",Rs[Rs.CANCELLED=1]="CANCELLED",Rs[Rs.UNKNOWN=2]="UNKNOWN",Rs[Rs.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Rs[Rs.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Rs[Rs.NOT_FOUND=5]="NOT_FOUND",Rs[Rs.ALREADY_EXISTS=6]="ALREADY_EXISTS",Rs[Rs.PERMISSION_DENIED=7]="PERMISSION_DENIED",Rs[Rs.UNAUTHENTICATED=16]="UNAUTHENTICATED",Rs[Rs.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Rs[Rs.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Rs[Rs.ABORTED=10]="ABORTED",Rs[Rs.OUT_OF_RANGE=11]="OUT_OF_RANGE",Rs[Rs.UNIMPLEMENTED=12]="UNIMPLEMENTED",Rs[Rs.INTERNAL=13]="INTERNAL",Rs[Rs.UNAVAILABLE=14]="UNAVAILABLE",Rs[Rs.DATA_LOSS=15]="DATA_LOSS";
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
class Ds{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){gi(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return mi(this.inner)}size(){return this.innerSize}}
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
 */const Ms=new so(Li.comparator);function Ls(){return Ms}const Ps=new so(Li.comparator);function Us(...t){let e=Ps;for(const n of t)e=e.insert(n.key,n);return e}function Fs(){return new Ds((t=>t.toString()),((t,e)=>t.isEqual(e)))}const $s=new so(Li.comparator),Bs=new uo(Li.comparator);function Vs(...t){let e=Bs;for(const n of t)e=e.add(n);return e}const js=new uo(li);function qs(){return js}
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
 */class Hs{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,zs.createSynthesizedTargetChangeForCurrentChange(t,e)),new Hs(di.min(),n,qs(),Ls(),Vs())}}class zs{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new zs(Ei.EMPTY_BYTE_STRING,e,Vs(),Vs(),Vs())}}
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
 */class Ks{constructor(t,e,n,r){this.O=t,this.removedTargetIds=e,this.key=n,this.F=r}}class Gs{constructor(t,e){this.targetId=t,this.$=e}}class Ws{constructor(t,e,n=Ei.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Xs{constructor(){this.B=0,this.L=Js(),this.U=Ei.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=Vs(),e=Vs(),n=Vs();return this.L.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Wr()}})),new zs(this.U,this.q,t,e,n)}J(){this.K=!1,this.L=Js()}Y(t,e){this.K=!0,this.L=this.L.insert(t,e)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class Ys{constructor(t){this.nt=t,this.st=new Map,this.it=Ls(),this.rt=Qs(),this.ot=new uo(li)}ut(t){for(const e of t.O)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ht(t){this.forEachTarget(t,(e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:Wr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach(((t,n)=>{this.ft(n)&&e(n)}))}_t(t){const e=t.targetId,n=t.$.count,r=this.wt(e);if(r){const t=r.target;if(vo(t))if(0===n){const n=new Li(t.path);this.ct(e,n,to.newNoDocument(n,di.min()))}else Xr(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach(((n,r)=>{const i=this.wt(r);if(i){if(n.current&&vo(i.target)){const e=new Li(i.target.path);null!==this.it.get(e)||this.It(r,e)||this.ct(r,e,to.newNoDocument(e,t))}n.j&&(e.set(r,n.H()),n.J())}}));let n=Vs();this.rt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.it.forEach(((e,n)=>n.setReadTime(t)));const r=new Hs(t,e,this.ot,this.it,n);return this.it=Ls(),this.rt=Qs(),this.ot=new uo(li),r}at(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.ft(t))return;const r=this.lt(t);this.It(t,e)?r.Y(e,1):r.X(e),this.rt=this.rt.insert(e,this.Tt(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new Xs,this.st.set(t,e)),e}Tt(t){let e=this.rt.get(t);return e||(e=new uo(li),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||Hr("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new Xs),this.nt.getRemoteKeysForTarget(t).forEach((e=>{this.ct(t,e,null)}))}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function Qs(){return new so(Li.comparator)}function Js(){return new so(Li.comparator)}
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
 */const Zs=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),ta=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class ea{constructor(t,e){this.databaseId=t,this.N=e}}function na(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ra(t,e){return t.N?e.toBase64():e.toUint8Array()}function ia(t,e){return na(t,e.toTimestamp())}function oa(t){return Xr(!!t),di.fromTimestamp(function(t){const e=Ci(t);return new fi(e.seconds,e.nanos)}(t))}function sa(t,e){return function(t){return new yi(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function aa(t){const e=yi.fromString(t);return Xr(Ra(e)),e}function ca(t,e){return sa(t.databaseId,e.path)}function ua(t,e){const n=aa(e);if(n.get(1)!==t.databaseId.projectId)throw new Jr(Qr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Jr(Qr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Li(da(n))}function la(t,e){return sa(t.databaseId,e)}function ha(t){const e=aa(t);return 4===e.length?yi.emptyPath():da(e)}function fa(t){return new yi(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function da(t){return Xr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function pa(t,e,n){return{name:ca(t,e),fields:n.value.mapValue.fields}}function ga(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Wr()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(t,e){return t.N?(Xr(void 0===e||"string"==typeof e),Ei.fromBase64String(e||"")):(Xr(void 0===e||e instanceof Uint8Array),Ei.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(t){const e=void 0===t.code?Qr.UNKNOWN:Os(t.code);return new Jr(e,t.message||"")}(s);n=new Ws(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ua(t,r.document.name),o=oa(r.document.updateTime),s=new Ji({mapValue:{fields:r.document.fields}}),a=to.newFoundDocument(i,o,s),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Ks(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ua(t,r.document),o=r.readTime?oa(r.readTime):di.min(),s=to.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Ks([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ua(t,r.document),o=r.removedTargetIds||[];n=new Ks([],o,i,null)}else{if(!("filter"in e))return Wr();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new ks(r),o=t.targetId;n=new Gs(o,i)}}return n}function ma(t,e){let n;if(e instanceof _s)n={update:pa(t,e.key,e.value)};else if(e instanceof Ss)n={delete:ca(t,e.key)};else if(e instanceof Es)n={update:pa(t,e.key,e.data),updateMask:xa(e.fieldMask)};else{if(!(e instanceof Is))return Wr();n={verify:ca(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof ns)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof rs)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof os)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof as)return{fieldPath:e.field.canonicalString(),increment:n.k};throw Wr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ia(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Wr()}(t,e.precondition)),n}function va(t,e){return t&&t.length>0?(Xr(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?oa(t.updateTime):oa(e);return n.isEqual(di.min())&&(n=oa(e)),new fs(n,t.transformResults||[])}(t,e)))):[]}function ya(t,e){return{documents:[la(t,e.path)]}}function wa(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=la(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=la(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Wi(t.value))return{unaryFilter:{field:Aa(t.field),op:"IS_NAN"}};if(Gi(t.value))return{unaryFilter:{field:Aa(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Wi(t.value))return{unaryFilter:{field:Aa(t.field),op:"IS_NOT_NAN"}};if(Gi(t.value))return{unaryFilter:{field:Aa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Aa(t.field),op:Ca(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Aa(t.field),direction:Ta(t.dir)}}(t)))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(t,e){return t.N||Oi(e)?e:{value:e}}(t,e.limit);var a;return null!==s&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function ba(t){let e=ha(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Xr(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let o=[];n.where&&(o=Ea(n.where));let s=[];n.orderBy&&(s=n.orderBy.map((t=>function(t){return new ko(Sa(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Oi(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Io(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Io(n,e)}(n.endAt)),Do(e,i,s,o,a,"F",c,u)}function _a(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Wr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Ea(t){return t?void 0!==t.unaryFilter?[ka(t)]:void 0!==t.fieldFilter?[Ia(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Ea(t))).reduce(((t,e)=>t.concat(e))):Wr():[]}function Ta(t){return Zs[t]}function Ca(t){return ta[t]}function Aa(t){return{fieldPath:t.canonicalString()}}function Sa(t){return bi.fromServerFormat(t.fieldPath)}function Ia(t){return yo.create(Sa(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Wr()}}(t.fieldFilter.op),t.fieldFilter.value)}function ka(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Sa(t.unaryFilter.field);return yo.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Sa(t.unaryFilter.field);return yo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Sa(t.unaryFilter.field);return yo.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Sa(t.unaryFilter.field);return yo.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Wr()}}function xa(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ra(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */const Na=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Oa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Da="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
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
 */class Ma{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */class La{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Wr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new La(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof La?e:La.resolve(e)}catch(t){return La.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):La.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):La.reject(e)}static resolve(t){return new La(((e,n)=>{e(t)}))}static reject(t){return new La(((e,n)=>{n(t)}))}static waitFor(t){return new La(((e,n)=>{let r=0,i=0,o=!1;t.forEach((t=>{++r,t.next((()=>{++i,o&&i===r&&e()}),(t=>n(t)))})),o=!0,i===r&&e()}))}static or(t){let e=La.resolve(!1);for(const n of t)e=e.next((t=>t?La.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}}
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
class Ua{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&ms(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&vs(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&vs(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(di.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Vs())}isEqual(t){return this.batchId===t.batchId&&hi(this.mutations,t.mutations,((t,e)=>ws(t,e)))&&hi(this.baseMutations,t.baseMutations,((t,e)=>ws(t,e)))}}class Fa{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Xr(t.mutations.length===n.length);let r=$s;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new Fa(t,e,n,r)}}
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
 */class $a{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class Ba{constructor(t,e,n,r,i=di.min(),o=di.min(),s=Ei.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s}withSequenceNumber(t){return new Ba(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Ba(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ba(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class Va{constructor(t){this.Jt=t}}function ja(t){const e=ba({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Vo(e,e.limit,"L"):e}
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
 */class qa{constructor(){}Zt(t,e){this.te(t,e),e.ee()}te(t,e){if("nullValue"in t)this.ne(e,5);else if("booleanValue"in t)this.ne(e,10),e.se(t.booleanValue?1:0);else if("integerValue"in t)this.ne(e,15),e.se(Ai(t.integerValue));else if("doubleValue"in t){const n=Ai(t.doubleValue);isNaN(n)?this.ne(e,13):(this.ne(e,15),Di(n)?e.se(0):e.se(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ne(e,20),"string"==typeof n?e.ie(n):(e.ie(`${n.seconds||""}`),e.se(n.nanos||0))}else if("stringValue"in t)this.re(t.stringValue,e),this.oe(e);else if("bytesValue"in t)this.ne(e,30),e.ue(Si(t.bytesValue)),this.oe(e);else if("referenceValue"in t)this.ae(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ne(e,45),e.se(n.latitude||0),e.se(n.longitude||0)}else"mapValue"in t?Qi(t)?this.ne(e,Number.MAX_SAFE_INTEGER):(this.ce(t.mapValue,e),this.oe(e)):"arrayValue"in t?(this.he(t.arrayValue,e),this.oe(e)):Wr()}re(t,e){this.ne(e,25),this.le(t,e)}le(t,e){e.ie(t)}ce(t,e){const n=t.fields||{};this.ne(e,55);for(const r of Object.keys(n))this.re(r,e),this.te(n[r],e)}he(t,e){const n=t.values||[];this.ne(e,50);for(const r of n)this.te(r,e)}ae(t,e){this.ne(e,37),Li.fromName(t).path.forEach((t=>{this.ne(e,60),this.le(t,e)}))}ne(t,e){t.se(e)}oe(t){t.se(2)}}qa.fe=new qa;
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
class Ha{constructor(){this.qe=new za}addToCollectionParentIndex(t,e){return this.qe.add(e),La.resolve()}getCollectionParents(t,e){return La.resolve(this.qe.getEntries(e))}addFieldIndex(t,e){return La.resolve()}deleteFieldIndex(t,e){return La.resolve()}getDocumentsMatchingTarget(t,e){return La.resolve(null)}getIndexType(t,e){return La.resolve(0)}getFieldIndexes(t,e){return La.resolve([])}getNextCollectionGroupToUpdate(t){return La.resolve(null)}getMinOffset(t,e){return La.resolve(io.min())}updateCollectionGroup(t,e,n){return La.resolve()}updateIndexEntries(t,e){return La.resolve()}}class za{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new uo(yi.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new uo(yi.comparator)).toArray()}}
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
 */new Uint8Array(0);class Ka{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ka(t,Ka.DEFAULT_COLLECTION_PERCENTILE,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */Ka.DEFAULT_COLLECTION_PERCENTILE=10,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ka.DEFAULT=new Ka(41943040,Ka.DEFAULT_COLLECTION_PERCENTILE,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ka.DISABLED=new Ka(-1,0,0);
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
class Ga{constructor(t){this.mn=t}next(){return this.mn+=2,this.mn}static gn(){return new Ga(0)}static yn(){return new Ga(-1)}}
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
class Xa{constructor(){this.changes=new Ds((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,to.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?La.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class Ya{constructor(t,e,n){this.ds=t,this.Bs=e,this.indexManager=n}Ls(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Us(t,e,n)))}Us(t,e,n){return this.ds.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}qs(t,e){t.forEach(((t,n)=>{for(const r of e)r.applyToLocalView(n)}))}Ks(t,e){return this.ds.getEntries(t,e).next((e=>this.Gs(t,e).next((()=>e))))}Gs(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.qs(e,t)))}Qs(t,e,n){return function(t){return Li.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.js(t,e.path):Fo(e)?this.Ws(t,e,n):this.zs(t,e,n)}js(t,e){return this.Ls(t,new Li(e)).next((t=>{let e=Us();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Ws(t,e,n){const r=e.collectionGroup;let i=Us();return this.indexManager.getCollectionParents(t,r).next((o=>La.forEach(o,(o=>{const s=function(t,e){return new Oo(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.zs(t,s,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}zs(t,e,n){let r;return this.ds.getAllFromCollection(t,e.path,n).next((n=>(r=n,this.Bs.getAllMutationBatchesAffectingQuery(t,e)))).next((t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=to.newInvalidDocument(n),r=r.insert(n,i)),vs(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}})).next((()=>(r.forEach(((t,n)=>{zo(e,n)||(r=r.remove(t))})),r)))}}
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
 */class Qa{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Hs=n,this.Js=r}static Ys(t,e){let n=Vs(),r=Vs();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Qa(t,e.fromCache,n,r)}}
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
 */class Ja{constructor(){this.Xs=!1}initialize(t,e){this.Zs=t,this.indexManager=e,this.Xs=!0}Qs(t,e,n,r){return this.ti(t,e).next((i=>i||this.ei(t,e,r,n))).next((n=>n||this.ni(t,e)))}ti(t,e){return La.resolve(null)}ei(t,e,n,r){return Lo(e)||r.isEqual(di.min())?this.ni(t,e):this.Zs.Ks(t,n).next((i=>{const o=this.si(e,i);return this.ii(e,o,n,r)?this.ni(t,e):(qr()<=s["in"].DEBUG&&Hr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ho(e)),this.ri(t,o,e,no(r,-1)))}))}si(t,e){let n=new uo(Go(t));return e.forEach(((e,r)=>{zo(t,r)&&(n=n.add(r))})),n}ii(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ni(t,e){return qr()<=s["in"].DEBUG&&Hr("QueryEngine","Using full collection scan to execute query:",Ho(e)),this.Zs.Qs(t,e,io.min())}ri(t,e,n,r){return this.Zs.Qs(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */class Za{constructor(t,e,n,r){this.persistence=t,this.oi=e,this.M=r,this.ui=new so(li),this.ai=new Ds((t=>po(t)),mo),this.ci=new Map,this.hi=t.getRemoteDocumentCache(),this.fs=t.getTargetCache(),this._s=t.getBundleCache(),this.li(n)}li(t){this.indexManager=this.persistence.getIndexManager(t),this.Bs=this.persistence.getMutationQueue(t,this.indexManager),this.fi=new Ya(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ui)))}}function tc(t,e,n,r){return new Za(t,e,n,r)}async function ec(t,e){const n=Yr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.Bs.getAllMutationBatches(t).next((i=>(r=i,n.li(e),n.Bs.getAllMutationBatches(t)))).next((e=>{const i=[],o=[];let s=Vs();for(const t of r){i.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}for(const t of e){o.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}return n.fi.Ks(t,s).next((t=>({di:t,removedBatchIds:i,addedBatchIds:o})))}))}))}function nc(t,e){const n=Yr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.hi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,o=i.keys();let s=La.resolve();return o.forEach((t=>{s=s.next((()=>r.getEntry(e,t))).next((e=>{const o=n.docVersions.get(t);Xr(null!==o),e.version.compareTo(o)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),s.next((()=>t.Bs.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.Bs.performConsistencyCheck(t))).next((()=>n.fi.Ks(t,r)))}))}function rc(t){const e=Yr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.fs.getLastRemoteSnapshotVersion(t)))}function ic(t,e){const n=Yr(t),r=e.snapshotVersion;let i=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const o=n.hi.newChangeBuffer({trackRemovals:!0});i=n.ui;const s=[];e.targetChanges.forEach(((o,a)=>{const c=i.get(a);if(!c)return;s.push(n.fs.removeMatchingKeys(t,o.removedDocuments,a).next((()=>n.fs.addMatchingKeys(t,o.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Ei.EMPTY_BYTE_STRING,di.min()).withLastLimboFreeSnapshotVersion(di.min()):o.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(o.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,o)&&s.push(n.fs.updateTargetData(t,u))}));let a=Ls();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),s.push(oc(t,o,e.documentUpdates).next((t=>{a=t}))),!r.isEqual(di.min())){const e=n.fs.getLastRemoteSnapshotVersion(t).next((e=>n.fs.setTargetsMetadata(t,t.currentSequenceNumber,r)));s.push(e)}return La.waitFor(s).next((()=>o.apply(t))).next((()=>n.fi.Gs(t,a))).next((()=>a))})).then((t=>(n.ui=i,t)))}function oc(t,e,n){let r=Vs();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Ls();return n.forEach(((n,i)=>{const o=t.get(n);i.isNoDocument()&&i.version.isEqual(di.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):Hr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),r}))}function sc(t,e){const n=Yr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(t,e))))}function ac(t,e){const n=Yr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.fs.getTargetData(t,e).next((i=>i?(r=i,La.resolve(r)):n.fs.allocateTargetId(t).next((i=>(r=new Ba(e,i,0,t.currentSequenceNumber),n.fs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.ui.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ui=n.ui.insert(t.targetId,t),n.ai.set(e,t.targetId)),t}))}async function cc(t,e,n){const r=Yr(t),i=r.ui.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Pa(t))throw t;Hr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.ui=r.ui.remove(e),r.ai.delete(i.target)}function uc(t,e,n){const r=Yr(t);let i=di.min(),o=Vs();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Yr(t),i=r.ai.get(n);return void 0!==i?La.resolve(r.ui.get(i)):r.fs.getTargetData(e,n)}(r,t,Bo(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{o=t}))})).next((()=>r.oi.Qs(t,e,n?i:di.min(),n?o:Vs()))).next((t=>(lc(r,Ko(e),t),{documents:t,_i:o})))))}function lc(t,e,n){let r=di.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.ci.set(e,r)}
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
class hc{constructor(t){this.M=t,this.yi=new Map,this.pi=new Map}getBundleMetadata(t,e){return La.resolve(this.yi.get(e))}saveBundleMetadata(t,e){var n;return this.yi.set(e.id,{id:(n=e).id,version:n.version,createTime:oa(n.createTime)}),La.resolve()}getNamedQuery(t,e){return La.resolve(this.pi.get(e))}saveNamedQuery(t,e){return this.pi.set(e.name,function(t){return{name:t.name,query:ja(t.bundledQuery),readTime:oa(t.readTime)}}(e)),La.resolve()}}
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
 */class fc{constructor(){this.overlays=new so(Li.comparator),this.Ii=new Map}getOverlay(t,e){return La.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.Xt(t,e,r)})),La.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Ii.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Ii.delete(n)),La.resolve()}getOverlaysForCollection(t,e,n){const r=Fs(),i=e.length+1,o=new Li(e.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const t=s.getNext().value,o=t.getKey();if(!e.isPrefixOf(o.path))break;o.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return La.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new so(((t,e)=>t-e));const o=this.overlays.getIterator();for(;o.hasNext();){const t=o.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Fs(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const s=Fs(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>s.set(t,e))),s.size()>=r)break;return La.resolve(s)}Xt(t,e,n){if(null===n)return;const r=this.overlays.get(n.key);if(null!==r){const t=this.Ii.get(r.largestBatchId).delete(n.key);this.Ii.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new $a(e,n));let i=this.Ii.get(e);void 0===i&&(i=Vs(),this.Ii.set(e,i)),this.Ii.set(e,i.add(n.key))}}
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
 */class dc{constructor(){this.Ti=new uo(pc.Ei),this.Ai=new uo(pc.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(t,e){const n=new pc(t,e);this.Ti=this.Ti.add(n),this.Ai=this.Ai.add(n)}bi(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Pi(new pc(t,e))}Vi(t,e){t.forEach((t=>this.removeReference(t,e)))}vi(t){const e=new Li(new yi([])),n=new pc(e,t),r=new pc(e,t+1),i=[];return this.Ai.forEachInRange([n,r],(t=>{this.Pi(t),i.push(t.key)})),i}Si(){this.Ti.forEach((t=>this.Pi(t)))}Pi(t){this.Ti=this.Ti.delete(t),this.Ai=this.Ai.delete(t)}Di(t){const e=new Li(new yi([])),n=new pc(e,t),r=new pc(e,t+1);let i=Vs();return this.Ai.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new pc(t,0),n=this.Ti.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class pc{constructor(t,e){this.key=t,this.Ci=e}static Ei(t,e){return Li.comparator(t.key,e.key)||li(t.Ci,e.Ci)}static Ri(t,e){return li(t.Ci,e.Ci)||Li.comparator(t.key,e.key)}}
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
 */class gc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.Bs=[],this.xi=1,this.Ni=new uo(pc.Ei)}checkEmpty(t){return La.resolve(0===this.Bs.length)}addMutationBatch(t,e,n,r){const i=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new Ua(i,e,n,r);this.Bs.push(o);for(const s of r)this.Ni=this.Ni.add(new pc(s.key,i)),this.indexManager.addToCollectionParentIndex(t,s.key.path.popLast());return La.resolve(o)}lookupMutationBatch(t,e){return La.resolve(this.ki(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Mi(n),i=r<0?0:r;return La.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return La.resolve(0===this.Bs.length?-1:this.xi-1)}getAllMutationBatches(t){return La.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new pc(e,0),r=new pc(e,Number.POSITIVE_INFINITY),i=[];return this.Ni.forEachInRange([n,r],(t=>{const e=this.ki(t.Ci);i.push(e)})),La.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new uo(li);return e.forEach((t=>{const e=new pc(t,0),r=new pc(t,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([e,r],(t=>{n=n.add(t.Ci)}))})),La.resolve(this.Oi(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Li.isDocumentKey(i)||(i=i.child(""));const o=new pc(new Li(i),0);let s=new uo(li);return this.Ni.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(s=s.add(t.Ci)),!0)}),o),La.resolve(this.Oi(s))}Oi(t){const e=[];return t.forEach((t=>{const n=this.ki(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Xr(0===this.Fi(e.batchId,"removed")),this.Bs.shift();let n=this.Ni;return La.forEach(e.mutations,(r=>{const i=new pc(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.Ni=n}))}_n(t){}containsKey(t,e){const n=new pc(e,0),r=this.Ni.firstAfterOrEqual(n);return La.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.Bs.length,La.resolve()}Fi(t,e){return this.Mi(t)}Mi(t){return 0===this.Bs.length?0:t-this.Bs[0].batchId}ki(t){const e=this.Mi(t);return e<0||e>=this.Bs.length?null:this.Bs[e]}}
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
 */class mc{constructor(t){this.$i=t,this.docs=new so(Li.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,o=this.$i(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return La.resolve(n?n.document.mutableCopy():to.newInvalidDocument(e))}getEntries(t,e){let n=Ls();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():to.newInvalidDocument(t))})),La.resolve(n)}getAllFromCollection(t,e,n){let r=Ls();const i=new Li(e.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:t,value:{document:i}}=o.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||oo(ro(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return La.resolve(r)}getAllFromCollectionGroup(t,e,n,r){Wr()}Bi(t,e){return La.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new vc(this)}getSize(t){return La.resolve(this.size)}}class vc extends Xa{constructor(t){super(),this.Kn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Kn.addEntry(t,r)):this.Kn.removeEntry(n)})),La.waitFor(e)}getFromCache(t,e){return this.Kn.getEntry(t,e)}getAllFromCache(t,e){return this.Kn.getEntries(t,e)}}
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
 */class yc{constructor(t){this.persistence=t,this.Li=new Ds((t=>po(t)),mo),this.lastRemoteSnapshotVersion=di.min(),this.highestTargetId=0,this.Ui=0,this.qi=new dc,this.targetCount=0,this.Ki=Ga.gn()}forEachTarget(t,e){return this.Li.forEach(((t,n)=>e(n))),La.resolve()}getLastRemoteSnapshotVersion(t){return La.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return La.resolve(this.Ui)}allocateTargetId(t){return this.highestTargetId=this.Ki.next(),La.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Ui&&(this.Ui=e),La.resolve()}Tn(t){this.Li.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ki=new Ga(e),this.highestTargetId=e),t.sequenceNumber>this.Ui&&(this.Ui=t.sequenceNumber)}addTargetData(t,e){return this.Tn(e),this.targetCount+=1,La.resolve()}updateTargetData(t,e){return this.Tn(e),La.resolve()}removeTargetData(t,e){return this.Li.delete(e.target),this.qi.vi(e.targetId),this.targetCount-=1,La.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Li.forEach(((o,s)=>{s.sequenceNumber<=e&&null===n.get(s.targetId)&&(this.Li.delete(o),i.push(this.removeMatchingKeysForTargetId(t,s.targetId)),r++)})),La.waitFor(i).next((()=>r))}getTargetCount(t){return La.resolve(this.targetCount)}getTargetData(t,e){const n=this.Li.get(e)||null;return La.resolve(n)}addMatchingKeys(t,e,n){return this.qi.bi(e,n),La.resolve()}removeMatchingKeys(t,e,n){this.qi.Vi(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),La.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.qi.vi(e),La.resolve()}getMatchingKeysForTargetId(t,e){const n=this.qi.Di(e);return La.resolve(n)}containsKey(t,e){return La.resolve(this.qi.containsKey(e))}}
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
 */class wc{constructor(t,e){this.Gi={},this.overlays={},this.es=new ai(0),this.ns=!1,this.ns=!0,this.referenceDelegate=t(this),this.fs=new yc(this),this.indexManager=new Ha,this.ds=function(t){return new mc(t)}((t=>this.referenceDelegate.Qi(t))),this.M=new Va(e),this._s=new hc(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new fc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Gi[t.toKey()];return n||(n=new gc(e,this.referenceDelegate),this.Gi[t.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(t,e,n){Hr("MemoryPersistence","Starting transaction:",t);const r=new bc(this.es.next());return this.referenceDelegate.ji(),n(r).next((t=>this.referenceDelegate.Wi(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}zi(t,e){return La.or(Object.values(this.Gi).map((n=>()=>n.containsKey(t,e))))}}class bc extends Ma{constructor(t){super(),this.currentSequenceNumber=t}}class _c{constructor(t){this.persistence=t,this.Hi=new dc,this.Ji=null}static Yi(t){return new _c(t)}get Xi(){if(this.Ji)return this.Ji;throw Wr()}addReference(t,e,n){return this.Hi.addReference(n,e),this.Xi.delete(n.toString()),La.resolve()}removeReference(t,e,n){return this.Hi.removeReference(n,e),this.Xi.add(n.toString()),La.resolve()}markPotentiallyOrphaned(t,e){return this.Xi.add(e.toString()),La.resolve()}removeTarget(t,e){this.Hi.vi(e.targetId).forEach((t=>this.Xi.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Xi.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ji(){this.Ji=new Set}Wi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return La.forEach(this.Xi,(n=>{const r=Li.fromPath(n);return this.Zi(t,r).next((t=>{t||e.removeEntry(r,di.min())}))})).next((()=>(this.Ji=null,e.apply(t))))}updateLimboDocument(t,e){return this.Zi(t,e).next((t=>{t?this.Xi.delete(e.toString()):this.Xi.add(e.toString())}))}Qi(t){return 0}Zi(t,e){return La.or([()=>La.resolve(this.Hi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.zi(t,e)])}}
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
 */class Ec{constructor(){this.activeTargetIds=qs()}nr(t){this.activeTargetIds=this.activeTargetIds.add(t)}sr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}er(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Tc{constructor(){this.Ur=new Ec,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Ur.nr(t),this.qr[t]||"not-current"}updateQueryState(t,e,n){this.qr[t]=e}removeLocalQueryTarget(t){this.Ur.sr(t)}isLocalQueryTarget(t){return this.Ur.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(t){return this.Ur.activeTargetIds.has(t)}start(){return this.Ur=new Ec,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class kc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.uo=e+"://"+t.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(t,e,n,r,i){const o=this.ho(t,e);Hr("RestConnection","Sending: ",o,n);const s={};return this.lo(s,r,i),this.fo(t,o,s,n).then((t=>(Hr("RestConnection","Received: ",t),t)),(e=>{throw Kr("RestConnection",`${t} failed with error: `,e,"url: ",o,"request:",n),e}))}_o(t,e,n,r,i){return this.co(t,e,n,r,i)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Vr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=Sc[t];return`${this.uo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,r){return new Promise(((i,o)=>{const s=new Fr;s.listenOnce(Dr.COMPLETE,(()=>{try{switch(s.getLastErrorCode()){case Or.NO_ERROR:const e=s.getResponseJson();Hr("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Or.TIMEOUT:Hr("Connection",'RPC "'+t+'" timed out'),o(new Jr(Qr.DEADLINE_EXCEEDED,"Request time out"));break;case Or.HTTP_ERROR:const n=s.getStatus();if(Hr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",s.getResponseText()),n>0){const t=s.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Qr).indexOf(e)>=0?e:Qr.UNKNOWN}(t.status);o(new Jr(e,t.message))}else o(new Jr(Qr.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new Jr(Qr.UNAVAILABLE,"Connection failed."));break;default:Wr()}}finally{Hr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);s.send(e,"POST",a,n,15)}))}wo(t,e,n){const r=[this.uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Rr(),o=Nr(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new Pr({})),this.lo(s.initMessageHeaders,e,n),(0,a.uI)()||(0,a.b$)()||(0,a.d)()||(0,a.w1)()||(0,a.Mn)()||(0,a.ru)()||(s.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");Hr("Connection","Creating WebChannel: "+c,s);const u=i.createWebChannel(c,s);let l=!1,h=!1;const f=new Ic({Jr:t=>{h?Hr("Connection","Not sending because WebChannel is closed:",t):(l||(Hr("Connection","Opening WebChannel transport."),u.open(),l=!0),Hr("Connection","WebChannel sending:",t),u.send(t))},Yr:()=>u.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(u,Ur.EventType.OPEN,(()=>{h||Hr("Connection","WebChannel transport opened.")})),d(u,Ur.EventType.CLOSE,(()=>{h||(h=!0,Hr("Connection","WebChannel transport closed"),f.ro())})),d(u,Ur.EventType.ERROR,(t=>{h||(h=!0,Kr("Connection","WebChannel transport errored:",t),f.ro(new Jr(Qr.UNAVAILABLE,"The operation could not be completed")))})),d(u,Ur.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Xr(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){Hr("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=xs[t];if(void 0!==e)return Os(e)}(t),n=i.message;void 0===e&&(e=Qr.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,f.ro(new Jr(e,n)),u.close()}else Hr("Connection","WebChannel received:",n),f.oo(n)}})),d(o,Mr.STAT_EVENT,(t=>{t.stat===Lr.PROXY?Hr("Connection","Detected buffering proxy"):t.stat===Lr.NOPROXY&&Hr("Connection","Detected no buffering proxy")})),setTimeout((()=>{f.io()}),0),f}}
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
 */function Rc(t){return new ea(t,!0)}class Nc{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Yn=t,this.timerId=e,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,e-n);r>0&&Hr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
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
 */class Oc{constructor(t,e,n,r,i,o,s,a){this.Yn=t,this.Vo=n,this.vo=r,this.So=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Nc(t,e)}ko(){return 1===this.state||5===this.state||this.Mo()}Mo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&null===this.Co&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,(()=>this.Bo())))}Lo(t){this.Uo(),this.stream.send(t)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(t,e){this.Uo(),this.qo(),this.No.cancel(),this.Do++,4!==t?this.No.reset():e&&e.code===Qr.RESOURCE_EXHAUSTED?(zr(e.toString()),zr("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):e&&e.code===Qr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Ko(),this.stream.close(),this.stream=null),this.state=t,await this.listener.eo(e)}Ko(){}auth(){this.state=1;const t=this.Go(this.Do),e=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Do===e&&this.Qo(t,n)}),(e=>{t((()=>{const t=new Jr(Qr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.jo(t)}))}))}Qo(t,e){const n=this.Go(this.Do);this.stream=this.Wo(t,e),this.stream.Xr((()=>{n((()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,(()=>(this.Mo()&&(this.state=3),Promise.resolve()))),this.listener.Xr())))})),this.stream.eo((t=>{n((()=>this.jo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.No.Ro((async()=>{this.state=0,this.start()}))}jo(t){return Hr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Go(t){return e=>{this.Yn.enqueueAndForget((()=>this.Do===t?e():(Hr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Dc extends Oc{constructor(t,e,n,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,o),this.M=i}Wo(t,e){return this.So.wo("Listen",t,e)}onMessage(t){this.No.reset();const e=ga(this.M,t),n=function(t){if(!("targetChange"in t))return di.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?di.min():e.readTime?oa(e.readTime):di.min()}(t);return this.listener.zo(e,n)}Ho(t){const e={};e.database=fa(this.M),e.addTarget=function(t,e){let n;const r=e.target;return n=vo(r)?{documents:ya(t,r)}:{query:wa(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ra(t,e.resumeToken):e.snapshotVersion.compareTo(di.min())>0&&(n.readTime=na(t,e.snapshotVersion.toTimestamp())),n}(this.M,t);const n=_a(this.M,t);n&&(e.labels=n),this.Lo(e)}Jo(t){const e={};e.database=fa(this.M),e.removeTarget=t,this.Lo(e)}}class Mc extends Oc{constructor(t,e,n,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,o),this.M=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(t,e){return this.So.wo("Write",t,e)}onMessage(t){if(Xr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Yo){this.No.reset();const e=va(t.writeResults,t.commitTime),n=oa(t.commitTime);return this.listener.tu(n,e)}return Xr(!t.writeResults||0===t.writeResults.length),this.Yo=!0,this.listener.eu()}nu(){const t={};t.database=fa(this.M),this.Lo(t)}Zo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>ma(this.M,t)))};this.Lo(e)}}
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
 */class Lc extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.So=n,this.M=r,this.su=!1}iu(){if(this.su)throw new Jr(Qr.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,e,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.So.co(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Qr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Jr(Qr.UNKNOWN,t.toString())}))}_o(t,e,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.So._o(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Qr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Jr(Qr.UNKNOWN,t.toString())}))}terminate(){this.su=!0}}class Pc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){0===this.ru&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}lu(t){"Online"===this.state?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.fu(),this.ru=0,"Online"===t&&(this.uu=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}hu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(zr(e),this.uu=!1):Hr("OnlineStateTracker",e)}fu(){null!==this.ou&&(this.ou.cancel(),this.ou=null)}}
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
 */class Uc{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.Kr((t=>{n.enqueueAndForget((async()=>{Kc(this)&&(Hr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Yr(t);e.wu.add(4),await $c(e),e.yu.set("Unknown"),e.wu.delete(4),await Fc(e)}(this))}))})),this.yu=new Pc(n,r)}}async function Fc(t){if(Kc(t))for(const e of t.mu)await e(!0)}async function $c(t){for(const e of t.mu)await e(!1)}function Bc(t,e){const n=Yr(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),zc(n)?Hc(n):lu(n).Mo()&&jc(n,e))}function Vc(t,e){const n=Yr(t),r=lu(n);n._u.delete(e),r.Mo()&&qc(n,e),0===n._u.size&&(r.Mo()?r.$o():Kc(n)&&n.yu.set("Unknown"))}function jc(t,e){t.pu.Z(e.targetId),lu(t).Ho(e)}function qc(t,e){t.pu.Z(e),lu(t).Jo(e)}function Hc(t){t.pu=new Ys({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t._u.get(e)||null}),lu(t).start(),t.yu.au()}function zc(t){return Kc(t)&&!lu(t).ko()&&t._u.size>0}function Kc(t){return 0===Yr(t).wu.size}function Gc(t){t.pu=void 0}async function Wc(t){t._u.forEach(((e,n)=>{jc(t,e)}))}async function Xc(t,e){Gc(t),zc(t)?(t.yu.lu(e),Hc(t)):t.yu.set("Unknown")}async function Yc(t,e,n){if(t.yu.set("Online"),e instanceof Ws&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t._u.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t._u.delete(r),t.pu.removeTarget(r))}(t,e)}catch(n){Hr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Qc(t,n)}else if(e instanceof Ks?t.pu.ut(e):e instanceof Gs?t.pu._t(e):t.pu.ht(e),!n.isEqual(di.min()))try{const e=await rc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.pu.yt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t._u.get(r);i&&t._u.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t._u.get(e);if(!n)return;t._u.set(e,n.withResumeToken(Ei.EMPTY_BYTE_STRING,n.snapshotVersion)),qc(t,e);const r=new Ba(n.target,e,1,n.sequenceNumber);jc(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Hr("RemoteStore","Failed to raise snapshot:",e),await Qc(t,e)}}async function Qc(t,e,n){if(!Pa(e))throw e;t.wu.add(1),await $c(t),t.yu.set("Offline"),n||(n=()=>rc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Hr("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await Fc(t)}))}function Jc(t,e){return e().catch((n=>Qc(t,n,e)))}async function Zc(t){const e=Yr(t),n=hu(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;tu(e);)try{const t=await sc(e.localStore,r);if(null===t){0===e.du.length&&n.$o();break}r=t.batchId,eu(e,t)}catch(t){await Qc(e,t)}nu(e)&&ru(e)}function tu(t){return Kc(t)&&t.du.length<10}function eu(t,e){t.du.push(e);const n=hu(t);n.Mo()&&n.Xo&&n.Zo(e.mutations)}function nu(t){return Kc(t)&&!hu(t).ko()&&t.du.length>0}function ru(t){hu(t).start()}async function iu(t){hu(t).nu()}async function ou(t){const e=hu(t);for(const n of t.du)e.Zo(n.mutations)}async function su(t,e,n){const r=t.du.shift(),i=Fa.from(r,e,n);await Jc(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Zc(t)}async function au(t,e){e&&hu(t).Xo&&await async function(t,e){if(n=e.code,Ns(n)&&n!==Qr.ABORTED){const n=t.du.shift();hu(t).Fo(),await Jc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Zc(t)}var n}(t,e),nu(t)&&ru(t)}async function cu(t,e){const n=Yr(t);n.asyncQueue.verifyOperationInProgress(),Hr("RemoteStore","RemoteStore received new credentials");const r=Kc(n);n.wu.add(3),await $c(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await Fc(n)}async function uu(t,e){const n=Yr(t);e?(n.wu.delete(2),await Fc(n)):e||(n.wu.add(2),await $c(n),n.yu.set("Unknown"))}function lu(t){return t.Iu||(t.Iu=function(t,e,n){const r=Yr(t);return r.iu(),new Dc(e,r.So,r.authCredentials,r.appCheckCredentials,r.M,n)
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
 */}(t.datastore,t.asyncQueue,{Xr:Wc.bind(null,t),eo:Xc.bind(null,t),zo:Yc.bind(null,t)}),t.mu.push((async e=>{e?(t.Iu.Fo(),zc(t)?Hc(t):t.yu.set("Unknown")):(await t.Iu.stop(),Gc(t))}))),t.Iu}function hu(t){return t.Tu||(t.Tu=function(t,e,n){const r=Yr(t);return r.iu(),new Mc(e,r.So,r.authCredentials,r.appCheckCredentials,r.M,n)}(t.datastore,t.asyncQueue,{Xr:iu.bind(null,t),eo:au.bind(null,t),eu:ou.bind(null,t),tu:su.bind(null,t)}),t.mu.push((async e=>{e?(t.Tu.Fo(),await Zc(t)):(await t.Tu.stop(),t.du.length>0&&(Hr("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))}))),t.Tu
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
 */}class fu{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new fu(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Jr(Qr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function du(t,e){if(zr("AsyncQueue",`${e}: ${t}`),Pa(t))return new Jr(Qr.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class pu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Li.comparator(e.key,n.key):(t,e)=>Li.comparator(t.key,e.key),this.keyedMap=Us(),this.sortedSet=new so(this.comparator)}static emptySet(t){return new pu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof pu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new pu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class gu{constructor(){this.Eu=new so(Li.comparator)}track(t){const e=t.doc.key,n=this.Eu.get(e);n?0!==t.type&&3===n.type?this.Eu=this.Eu.insert(e,t):3===t.type&&1!==n.type?this.Eu=this.Eu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Eu=this.Eu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Eu=this.Eu.remove(e):1===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):Wr():this.Eu=this.Eu.insert(e,t)}Au(){const t=[];return this.Eu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class mu{constructor(t,e,n,r,i,o,s,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new mu(t,e,pu.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&jo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class vu{constructor(){this.Ru=void 0,this.listeners=[]}}class yu{constructor(){this.queries=new Ds((t=>qo(t)),jo),this.onlineState="Unknown",this.bu=new Set}}async function wu(t,e){const n=Yr(t),r=e.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new vu),i)try{o.Ru=await n.onListen(r)}catch(t){const n=du(t,`Initialization of query '${Ho(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,o),o.listeners.push(e),e.Pu(n.onlineState),o.Ru&&e.Vu(o.Ru)&&Tu(n)}async function bu(t,e){const n=Yr(t),r=e.query;let i=!1;const o=n.queries.get(r);if(o){const t=o.listeners.indexOf(e);t>=0&&(o.listeners.splice(t,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function _u(t,e){const n=Yr(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Vu(i)&&(r=!0);e.Ru=i}}r&&Tu(n)}function Eu(t,e,n){const r=Yr(t),i=r.queries.get(e);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(e)}function Tu(t){t.bu.forEach((t=>{t.next()}))}class Cu{constructor(t,e,n){this.query=t,this.vu=e,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=n||{}}Vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new mu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.Su?this.Cu(t)&&(this.vu.next(t),e=!0):this.xu(t,this.onlineState)&&(this.Nu(t),e=!0),this.Du=t,e}onError(t){this.vu.error(t)}Pu(t){this.onlineState=t;let e=!1;return this.Du&&!this.Su&&this.xu(this.Du,t)&&(this.Nu(this.Du),e=!0),e}xu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.ku||!n)&&(!t.docs.isEmpty()||"Offline"===e)}Cu(t){if(t.docChanges.length>0)return!0;const e=this.Du&&this.Du.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Nu(t){t=mu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Su=!0,this.vu.next(t)}}
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
class Au{constructor(t){this.key=t}}class Su{constructor(t){this.key=t}}class Iu{constructor(t,e){this.query=t,this.Uu=e,this.qu=null,this.current=!1,this.Ku=Vs(),this.mutatedKeys=Vs(),this.Gu=Go(t),this.Qu=new pu(this.Gu)}get ju(){return this.Uu}Wu(t,e){const n=e?e.zu:new gu,r=e?e.Qu:this.Qu;let i=e?e.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=zo(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Hu(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.Gu(l,a)>0||c&&this.Gu(l,c)<0)&&(s=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(s=!0)),d&&(l?(o=o.add(l),i=f?i.add(t):i.delete(t)):(o=o.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;o.size>this.query.limit;){const t="F"===this.query.limitType?o.last():o.first();o=o.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Qu:o,zu:n,ii:s,mutatedKeys:i}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Au();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Wr()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const o=e?this.Yu():[],s=0===this.Ku.size&&this.current?1:0,a=s!==this.qu;return this.qu=s,0!==i.length||a?{snapshot:new mu(this.query,t.Qu,r,i,t.mutatedKeys,0===s,a,!1),Xu:o}:{Xu:o}}Pu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new gu,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.Uu=this.Uu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Uu=this.Uu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=Vs(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new Su(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new Au(n))})),e}ta(t){this.Uu=t._i,this.Ku=Vs();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ea(){return mu.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu)}}class ku{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class xu{constructor(t){this.key=t,this.na=!1}}class Ru{constructor(t,e,n,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sa={},this.ia=new Ds((t=>qo(t)),jo),this.ra=new Map,this.oa=new Set,this.ua=new so(Li.comparator),this.aa=new Map,this.ca=new dc,this.ha={},this.la=new Map,this.fa=Ga.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return!0===this.da}}async function Nu(t,e){const n=Yu(t);let r,i;const o=n.ia.get(e);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.ea();else{const t=await ac(n.localStore,Bo(e));n.isPrimaryClient&&Bc(n.remoteStore,t);const o=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Ou(n,e,r,"current"===o)}return i}async function Ou(t,e,n,r){t._a=(e,n,r)=>async function(t,e,n,r){let i=e.view.Wu(n);i.ii&&(i=await uc(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,i))));const o=r&&r.targetChanges.get(e.targetId),s=e.view.applyChanges(i,t.isPrimaryClient,o);return Hu(t,e.targetId,s.Xu),s.snapshot}(t,e,n,r);const i=await uc(t.localStore,e,!0),o=new Iu(e,i._i),s=o.Wu(i.documents),a=zs.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=o.applyChanges(s,t.isPrimaryClient,a);Hu(t,n,c.Xu);const u=new ku(e,n,o);return t.ia.set(e,u),t.ra.has(n)?t.ra.get(n).push(e):t.ra.set(n,[e]),c.snapshot}async function Du(t,e){const n=Yr(t),r=n.ia.get(e),i=n.ra.get(r.targetId);if(i.length>1)return n.ra.set(r.targetId,i.filter((t=>!jo(t,e)))),void n.ia.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await cc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Vc(n.remoteStore,r.targetId),ju(n,r.targetId)})).catch(Wa)):(ju(n,r.targetId),await cc(n.localStore,r.targetId,!0))}async function Mu(t,e,n){const r=Qu(t);try{const t=await function(t,e){const n=Yr(t),r=fi.now(),i=e.reduce(((t,e)=>t.add(e.key)),Vs());let o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.fi.Ks(t,i).next((i=>{o=i;const s=[];for(const t of e){const e=ys(t,o.get(t.key));null!=e&&s.push(new Es(t.key,e,Zi(e.value.mapValue),ds.exists(!0)))}return n.Bs.addMutationBatch(t,r,s,e)})))).then((t=>(t.applyToLocalDocumentSet(o),{batchId:t.batchId,changes:o})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.ha[t.currentUser.toKey()];r||(r=new so(li)),r=r.insert(e,n),t.ha[t.currentUser.toKey()]=r}(r,t.batchId,n),await Gu(r,t.changes),await Zc(r.remoteStore)}catch(t){const e=du(t,"Failed to persist write");n.reject(e)}}async function Lu(t,e){const n=Yr(t);try{const t=await ic(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.aa.get(e);r&&(Xr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.na=!0:t.modifiedDocuments.size>0?Xr(r.na):t.removedDocuments.size>0&&(Xr(r.na),r.na=!1))})),await Gu(n,t,e)}catch(t){await Wa(t)}}function Pu(t,e,n){const r=Yr(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ia.forEach(((n,r)=>{const i=r.view.Pu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Yr(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Pu(e)&&(r=!0)})),r&&Tu(n)}(r.eventManager,e),t.length&&r.sa.zo(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Uu(t,e,n){const r=Yr(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.aa.get(e),o=i&&i.key;if(o){let t=new so(Li.comparator);t=t.insert(o,to.newNoDocument(o,di.min()));const n=Vs().add(o),i=new Hs(di.min(),new Map,new uo(li),t,n);await Lu(r,i),r.ua=r.ua.remove(o),r.aa.delete(e),Ku(r)}else await cc(r.localStore,e,!1).then((()=>ju(r,e,n))).catch(Wa)}async function Fu(t,e){const n=Yr(t),r=e.batch.batchId;try{const t=await nc(n.localStore,e);Vu(n,r,null),Bu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Gu(n,t)}catch(t){await Wa(t)}}async function $u(t,e,n){const r=Yr(t);try{const t=await function(t,e){const n=Yr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.Bs.lookupMutationBatch(t,e).next((e=>(Xr(null!==e),r=e.keys(),n.Bs.removeMutationBatch(t,e)))).next((()=>n.Bs.performConsistencyCheck(t))).next((()=>n.fi.Ks(t,r)))}))}(r.localStore,e);Vu(r,e,n),Bu(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Gu(r,t)}catch(n){await Wa(n)}}function Bu(t,e){(t.la.get(e)||[]).forEach((t=>{t.resolve()})),t.la.delete(e)}function Vu(t,e,n){const r=Yr(t);let i=r.ha[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.ha[r.currentUser.toKey()]=i}}function ju(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ra.get(e))t.ia.delete(r),n&&t.sa.wa(r,n);t.ra.delete(e),t.isPrimaryClient&&t.ca.vi(e).forEach((e=>{t.ca.containsKey(e)||qu(t,e)}))}function qu(t,e){t.oa.delete(e.path.canonicalString());const n=t.ua.get(e);null!==n&&(Vc(t.remoteStore,n),t.ua=t.ua.remove(e),t.aa.delete(n),Ku(t))}function Hu(t,e,n){for(const r of n)r instanceof Au?(t.ca.addReference(r.key,e),zu(t,r)):r instanceof Su?(Hr("SyncEngine","Document no longer in limbo: "+r.key),t.ca.removeReference(r.key,e),t.ca.containsKey(r.key)||qu(t,r.key)):Wr()}function zu(t,e){const n=e.key,r=n.path.canonicalString();t.ua.get(n)||t.oa.has(r)||(Hr("SyncEngine","New document in limbo: "+n),t.oa.add(r),Ku(t))}function Ku(t){for(;t.oa.size>0&&t.ua.size<t.maxConcurrentLimboResolutions;){const e=t.oa.values().next().value;t.oa.delete(e);const n=new Li(yi.fromString(e)),r=t.fa.next();t.aa.set(r,new xu(n)),t.ua=t.ua.insert(n,r),Bc(t.remoteStore,new Ba(Bo(Mo(n.path)),r,2,ai.A))}}async function Gu(t,e,n){const r=Yr(t),i=[],o=[],s=[];r.ia.isEmpty()||(r.ia.forEach(((t,a)=>{s.push(r._a(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Qa.Ys(a.targetId,t);o.push(e)}})))})),await Promise.all(s),r.sa.zo(i),await async function(t,e){const n=Yr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>La.forEach(e,(e=>La.forEach(e.Hs,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>La.forEach(e.Js,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Pa(t))throw t;Hr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.ui.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.ui=n.ui.insert(t,i)}}}(r.localStore,o))}async function Wu(t,e){const n=Yr(t);if(!n.currentUser.isEqual(e)){Hr("SyncEngine","User change. New user:",e.toKey());const t=await ec(n.localStore,e);n.currentUser=e,function(t,e){t.la.forEach((t=>{t.forEach((t=>{t.reject(new Jr(Qr.CANCELLED,e))}))})),t.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Gu(n,t.di)}}function Xu(t,e){const n=Yr(t),r=n.aa.get(e);if(r&&r.na)return Vs().add(r.key);{let t=Vs();const r=n.ra.get(e);if(!r)return t;for(const e of r){const r=n.ia.get(e);t=t.unionWith(r.view.ju)}return t}}function Yu(t){const e=Yr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Lu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Uu.bind(null,e),e.sa.zo=_u.bind(null,e.eventManager),e.sa.wa=Eu.bind(null,e.eventManager),e}function Qu(t){const e=Yr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Fu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$u.bind(null,e),e}class Ju{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=Rc(t.databaseInfo.databaseId),this.sharedClientState=this.ga(t),this.persistence=this.ya(t),await this.persistence.start(),this.gcScheduler=this.pa(t),this.localStore=this.Ia(t)}pa(t){return null}Ia(t){return tc(this.persistence,new Ja,t.initialUser,this.M)}ya(t){return new wc(_c.Yi,this.M)}ga(t){return new Tc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Zu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Pu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wu.bind(null,this.syncEngine),await uu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new yu}createDatastore(t){const e=Rc(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new kc(r));var r;return function(t,e,n,r){return new Lc(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Pu(this.syncEngine,t,0),o=Ac.vt()?new Ac:new Cc,new Uc(e,n,r,i,o);var e,n,r,i,o}createSyncEngine(t,e){return function(t,e,n,r,i,o,s){const a=new Ru(t,e,n,r,i,o);return s&&(a.da=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Yr(t);Hr("RemoteStore","RemoteStore shutting down."),e.wu.add(5),await $c(e),e.gu.shutdown(),e.yu.set("Unknown")}(this.remoteStore)}}
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
class el{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Br.UNAUTHENTICATED,this.clientId=ui.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Hr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Hr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Jr(Qr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=du(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function nl(t,e){t.asyncQueue.verifyOperationInProgress(),Hr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await ec(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function rl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await il(t);Hr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>cu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>cu(e.remoteStore,n))),t.onlineComponents=e}async function il(t){return t.offlineComponents||(Hr("FirestoreClient","Using default OfflineComponentProvider"),await nl(t,new Ju)),t.offlineComponents}async function ol(t){return t.onlineComponents||(Hr("FirestoreClient","Using default OnlineComponentProvider"),await rl(t,new Zu)),t.onlineComponents}function sl(t){return ol(t).then((t=>t.syncEngine))}async function al(t){const e=await ol(t),n=e.eventManager;return n.onListen=Nu.bind(null,e.syncEngine),n.onUnlisten=Du.bind(null,e.syncEngine),n}function cl(t,e,n={}){const r=new Zr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const o=new tl({next:o=>{e.enqueueAndForget((()=>bu(t,s)));const a=o.docs.has(n);!a&&o.fromCache?i.reject(new Jr(Qr.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&o.fromCache&&r&&"server"===r.source?i.reject(new Jr(Qr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:t=>i.reject(t)}),s=new Cu(Mo(n.path),o,{includeMetadataChanges:!0,ku:!0});return wu(t,s)}(await al(t),t.asyncQueue,e,n,r))),r.promise}function ul(t,e,n={}){const r=new Zr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const o=new tl({next:n=>{e.enqueueAndForget((()=>bu(t,s))),n.fromCache&&"server"===r.source?i.reject(new Jr(Qr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),s=new Cu(n,o,{includeMetadataChanges:!0,ku:!0});return wu(t,s)}(await al(t),t.asyncQueue,e,n,r))),r.promise}const ll=new Map;
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
 */function hl(t,e,n){if(!n)throw new Jr(Qr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fl(t,e,n,r){if(!0===e&&!0===r)throw new Jr(Qr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function dl(t){if(!Li.isDocumentKey(t))throw new Jr(Qr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function pl(t){if(Li.isDocumentKey(t))throw new Jr(Qr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Wr()}function ml(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Jr(Qr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gl(t);throw new Jr(Qr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class vl{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Jr(Qr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Jr(Qr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,fl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class yl{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vl({}),this._settingsFrozen=!1,t instanceof Ni?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Jr(Qr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ni(t.options.projectId)}(t))}get app(){if(!this._app)throw new Jr(Qr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Jr(Qr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ei;switch(t.type){case"gapi":const e=t.client;return Xr(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new ii(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Jr(Qr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ll.get(t);e&&(Hr("ComponentProvider","Removing Datastore"),ll.delete(t),e.terminate())}(this),Promise.resolve()}}
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
class wl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _l(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new wl(this.firestore,t,this._key)}}class bl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new bl(this.firestore,t,this._query)}}class _l extends bl{constructor(t,e,n){super(t,e,Mo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new wl(this.firestore,null,new Li(t))}withConverter(t){return new _l(this.firestore,t,this._path)}}function El(t,e,...n){if(t=(0,a.m9)(t),hl("collection","path",e),t instanceof yl){const r=yi.fromString(e,...n);return pl(r),new _l(t,null,r)}{if(!(t instanceof wl||t instanceof _l))throw new Jr(Qr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(yi.fromString(e,...n));return pl(r),new _l(t.firestore,null,r)}}function Tl(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=ui.R()),hl("doc","path",e),t instanceof yl){const r=yi.fromString(e,...n);return dl(r),new wl(t,null,new Li(r))}{if(!(t instanceof wl||t instanceof _l))throw new Jr(Qr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(yi.fromString(e,...n));return dl(r),new wl(t.firestore,t instanceof _l?t.converter:null,new Li(r))}}
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
class Cl{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new Nc(this,"async_queue_retry"),this.Qa=()=>{const t=xc();t&&Hr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.No.Po()};const t=xc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ja(),this.Wa(t)}enterRestrictedMode(t){if(!this.Ba){this.Ba=!0,this.Ka=t||!1;const e=xc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Qa)}}enqueue(t){if(this.ja(),this.Ba)return new Promise((()=>{}));const e=new Zr;return this.Wa((()=>this.Ba&&this.Ka?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.$a.push(t),this.za())))}async za(){if(0!==this.$a.length){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(E){if(!Pa(E))throw E;Hr("AsyncQueue","Operation failed with retryable error: "+E)}this.$a.length>0&&this.No.Ro((()=>this.za()))}}Wa(t){const e=this.Fa.then((()=>(this.qa=!0,t().catch((t=>{this.Ua=t,this.qa=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw zr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.qa=!1,t))))));return this.Fa=e,e}enqueueAfterDelay(t,e,n){this.ja(),this.Ga.indexOf(t)>-1&&(e=0);const r=fu.createAndSchedule(this,t,e,n,(t=>this.Ha(t)));return this.La.push(r),r}ja(){this.Ua&&Wr()}verifyOperationInProgress(){}async Ja(){let t;do{t=this.Fa,await t}while(t!==this.Fa)}Ya(t){for(const e of this.La)if(e.timerId===t)return!0;return!1}Xa(t){return this.Ja().then((()=>{this.La.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.La)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Ja()}))}Za(t){this.Ga.push(t)}Ha(t){const e=this.La.indexOf(t);this.La.splice(e,1)}}function Al(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
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
 */(t,["next","error","complete"])}class Sl extends yl{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Cl,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||xl(this),this._firestoreClient.terminate()}}function Il(t=(0,i.Mq)()){return(0,i.qX)(t,"firestore").getImmediate()}function kl(t){return t._firestoreClient||xl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function xl(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Ri(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new el(t._authCredentials,t._appCheckCredentials,t._queue,r)}
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
class Rl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Jr(Qr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bi(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class Nl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Nl(Ei.fromBase64String(t))}catch(t){throw new Jr(Qr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Nl(Ei.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class Ol{constructor(t){this._methodName=t}}
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
 */class Dl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Jr(Qr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Jr(Qr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return li(this._lat,t._lat)||li(this._long,t._long)}}
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
 */const Ml=/^__.*__$/;class Ll{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Es(t,this.data,this.fieldMask,e,this.fieldTransforms):new _s(t,this.data,e,this.fieldTransforms)}}class Pl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Es(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Ul(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Wr()}}class Fl{constructor(t,e,n,r,i,o){this.settings=t,this.databaseId=e,this.M=n,this.ignoreUndefinedProperties=r,void 0===i&&this.tc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(t){return new Fl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.nc({path:n,ic:!1});return r.rc(t),r}oc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.nc({path:n,ic:!1});return r.tc(),r}uc(t){return this.nc({path:void 0,ic:!0})}ac(t){return eh(t,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}tc(){if(this.path)for(let t=0;t<this.path.length;t++)this.rc(this.path.get(t))}rc(t){if(0===t.length)throw this.ac("Document fields must not be empty");if(Ul(this.ec)&&Ml.test(t))throw this.ac('Document fields cannot begin and end with "__"')}}class $l{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.M=n||Rc(t)}lc(t,e,n,r=!1){return new Fl({ec:t,methodName:e,hc:n,path:bi.emptyPath(),ic:!1,cc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Bl(t){const e=t._freezeSettings(),n=Rc(t._databaseId);return new $l(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Vl(t,e,n,r,i,o={}){const s=t.lc(o.merge||o.mergeFields?2:0,e,n,i);Ql("Data must be an object, but it was:",s,r);const a=Xl(r,s);let c,u;if(o.merge)c=new _i(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const t=[];for(const r of o.mergeFields){const i=Jl(e,r,n);if(!s.contains(i))throw new Jr(Qr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);nh(t,i)||t.push(i)}c=new _i(t),u=s.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=s.fieldTransforms;return new Ll(new Ji(a),c,u)}class jl extends Ol{_toFieldTransform(t){if(2!==t.ec)throw 1===t.ec?t.ac(`${this._methodName}() can only appear at the top level of your update data`):t.ac(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof jl}}function ql(t,e,n){return new Fl({ec:3,hc:e.settings.hc,methodName:t._methodName,ic:n},e.databaseId,e.M,e.ignoreUndefinedProperties)}class Hl extends Ol{constructor(t,e){super(t),this.fc=e}_toFieldTransform(t){const e=ql(this,t,!0),n=this.fc.map((t=>Wl(t,e))),r=new rs(n);return new ls(t.path,r)}isEqual(t){return this===t}}function zl(t,e,n,r){const i=t.lc(1,e,n);Ql("Data must be an object, but it was:",i,r);const o=[],s=Ji.empty();gi(r,((t,r)=>{const c=th(e,t,n);r=(0,a.m9)(r);const u=i.oc(c);if(r instanceof jl)o.push(c);else{const t=Wl(r,u);null!=t&&(o.push(c),s.set(c,t))}}));const c=new _i(o);return new Pl(s,c,i.fieldTransforms)}function Kl(t,e,n,r,i,o){const s=t.lc(1,e,n),c=[Jl(e,r,n)],u=[i];if(o.length%2!=0)throw new Jr(Qr.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<o.length;a+=2)c.push(Jl(e,o[a])),u.push(o[a+1]);const l=[],h=Ji.empty();for(let d=c.length-1;d>=0;--d)if(!nh(l,c[d])){const t=c[d];let e=u[d];e=(0,a.m9)(e);const n=s.oc(t);if(e instanceof jl)l.push(t);else{const r=Wl(e,n);null!=r&&(l.push(t),h.set(t,r))}}const f=new _i(l);return new Pl(h,f,s.fieldTransforms)}function Gl(t,e,n,r=!1){return Wl(n,t.lc(r?4:3,e))}function Wl(t,e){if(Yl(t=(0,a.m9)(t)))return Ql("Unsupported field value:",e,t),Xl(t,e);if(t instanceof Ol)return function(t,e){if(!Ul(e.ec))throw e.ac(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ac(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ic&&4!==e.ec)throw e.ac("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Wl(i,e.uc(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Qo(e.M,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=fi.fromDate(t);return{timestampValue:na(e.M,n)}}if(t instanceof fi){const n=new fi(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:na(e.M,n)}}if(t instanceof Dl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Nl)return{bytesValue:ra(e.M,t._byteString)};if(t instanceof wl){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.ac(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:sa(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ac(`Unsupported field value: ${gl(t)}`)}(t,e)}function Xl(t,e){const n={};return mi(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gi(t,((t,r)=>{const i=Wl(r,e.sc(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Yl(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof fi||t instanceof Dl||t instanceof Nl||t instanceof wl||t instanceof Ol)}function Ql(t,e,n){if(!Yl(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=gl(n);throw"an object"===r?e.ac(t+" a custom object"):e.ac(t+" "+r)}}function Jl(t,e,n){if((e=(0,a.m9)(e))instanceof Rl)return e._internalPath;if("string"==typeof e)return th(t,e);throw eh("Field path arguments must be of type string or ",t,!1,void 0,n)}const Zl=new RegExp("[~\\*/\\[\\]]");function th(t,e,n){if(e.search(Zl)>=0)throw eh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Rl(...e.split("."))._internalPath}catch(r){throw eh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function eh(t,e,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=` in field ${r}`),s&&(c+=` in document ${i}`),c+=")"),new Jr(Qr.INVALID_ARGUMENT,a+t+c)}function nh(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class rh{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new wl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new ih(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(oh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class ih extends rh{data(){return super.data()}}function oh(t,e){return"string"==typeof e?th(t,e):e instanceof Rl?e._internalPath:e._delegate._internalPath}
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
 */class sh{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ah extends rh{constructor(t,e,n,r,i,o){super(t,e,n,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ch(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(oh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ch extends ah{data(t={}){return super.data(t)}}class uh{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new sh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new ch(this._firestore,this._userDataWriter,n.key,n,new sh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Jr(Qr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new ch(t._firestore,t._userDataWriter,n.doc.key,n.doc,new sh(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new ch(t._firestore,t._userDataWriter,e.doc.key,e.doc,new sh(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,o=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),o=n.indexOf(e.doc.key)),{type:lh(e.type),doc:r,oldIndex:i,newIndex:o}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function lh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Wr()}}
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
function hh(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Jr(Qr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fh{}function dh(t,...e){for(const n of e)t=n._apply(t);return t}class ph extends fh{constructor(t,e,n){super(),this._c=t,this.wc=e,this.mc=n,this.type="where"}_apply(t){const e=Bl(t.firestore),n=function(t,e,n,r,i,o,s){let a;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new Jr(Qr.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on documentId().`);if("in"===o||"not-in"===o){vh(s,o);const e=[];for(const n of s)e.push(mh(r,t,n));a={arrayValue:{values:e}}}else a=mh(r,t,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||vh(s,o),a=Gl(n,e,s,"in"===o||"not-in"===o);const c=yo.create(i,o,a);return function(t,e){if(e.S()){const n=Uo(t);if(null!==n&&!n.isEqual(e.field))throw new Jr(Qr.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=Po(t);null!==r&&yh(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new Jr(Qr.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Jr(Qr.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this._c,this.wc,this.mc);return new bl(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Oo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function gh(t,e,n){const r=e,i=oh("where",t);return new ph(i,r,n)}function mh(t,e,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new Jr(Qr.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fo(e)&&-1!==n.indexOf("/"))throw new Jr(Qr.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(yi.fromString(n));if(!Li.isDocumentKey(r))throw new Jr(Qr.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Hi(t,new Li(r))}if(n instanceof wl)return Hi(t,n._key);throw new Jr(Qr.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gl(n)}.`)}function vh(t,e){if(!Array.isArray(t)||0===t.length)throw new Jr(Qr.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new Jr(Qr.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function yh(t,e,n){if(!n.isEqual(e))throw new Jr(Qr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
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
class wh{convertValue(t,e="none"){switch(Ui(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ai(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Si(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Wr()}}convertObject(t,e){const n={};return gi(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Dl(Ai(t.latitude),Ai(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ki(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(xi(t));default:return null}}convertTimestamp(t){const e=Ci(t);return new fi(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=yi.fromString(t);Xr(Ra(n));const r=new Ni(n.get(1),n.get(3)),i=new Li(n.popFirst(5));return r.isEqual(e)||zr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
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
 */function bh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
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
function _h(t){t=ml(t,wl);const e=ml(t.firestore,Sl);return cl(kl(e),t._key).then((n=>kh(e,t,n)))}class Eh extends wh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Nl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new wl(this.firestore,null,e)}}function Th(t){t=ml(t,bl);const e=ml(t.firestore,Sl),n=kl(e),r=new Eh(e);return hh(t._query),ul(n,t._query).then((n=>new uh(e,r,t,n)))}function Ch(t,e,n,...r){t=ml(t,wl);const i=ml(t.firestore,Sl),o=Bl(i);let s;return s="string"==typeof(e=(0,a.m9)(e))||e instanceof Rl?Kl(o,"updateDoc",t._key,e,n,r):zl(o,"updateDoc",t._key,e),Ih(i,[s.toMutation(t._key,ds.exists(!0))])}function Ah(t,e){const n=ml(t.firestore,Sl),r=Tl(t),i=bh(t.converter,e);return Ih(n,[Vl(Bl(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,ds.exists(!1))]).then((()=>r))}function Sh(t,...e){var n,r,i;t=(0,a.m9)(t);let o={includeMetadataChanges:!1},s=0;"object"!=typeof e[s]||Al(e[s])||(o=e[s],s++);const c={includeMetadataChanges:o.includeMetadataChanges};if(Al(e[s])){const t=e[s];e[s]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[s+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[s+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let u,l,h;if(t instanceof wl)l=ml(t.firestore,Sl),h=Mo(t._key.path),u={next:n=>{e[s]&&e[s](kh(l,t,n))},error:e[s+1],complete:e[s+2]};else{const n=ml(t,bl);l=ml(n.firestore,Sl),h=n._query;const r=new Eh(l);u={next:t=>{e[s]&&e[s](new uh(l,r,n,t))},error:e[s+1],complete:e[s+2]},hh(t._query)}return function(t,e,n,r){const i=new tl(r),o=new Cu(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>wu(await al(t),o))),()=>{i.Aa(),t.asyncQueue.enqueueAndForget((async()=>bu(await al(t),o)))}}(kl(l),h,c,u)}function Ih(t,e){return function(t,e){const n=new Zr;return t.asyncQueue.enqueueAndForget((async()=>Mu(await sl(t),e,n))),n.promise}(kl(t),e)}function kh(t,e,n){const r=n.docs.get(e._key),i=new Eh(t);return new ah(t,i,e._key,r,new sh(n.hasPendingWrites,n.fromCache),e.converter)}
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
 */function xh(...t){return new Hl("arrayUnion",t)}!function(t,e=!0){!function(t){Vr=t}(i.Jn),(0,i.Xd)(new o.wA("firestore",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new Sl(r,new ni(t.getProvider("auth-internal")),new si(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),(0,i.KN)($r,"3.4.9",t),(0,i.KN)($r,"3.4.9","esm2017")}()},3597:function(t,e,n){"use strict";n.d(e,{Jt:function(){return de},cF:function(){return ge},iH:function(){return pe},B0:function(){return fe}});n(2801),n(8675),n(3462),n(6699),n(1703);var r=n(3367),i=n(3536),o=n(7805);
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
const s="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5;
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
class l extends i.ZR{constructor(t,e){super(h(t),`Firebase Storage: ${e} (${h(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}_codeEquals(t){return h(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function h(t){return"storage/"+t}function f(){const t="An unknown error occurred, please check the error payload for server response.";return new l("unknown",t)}function d(t){return new l("object-not-found","Object '"+t+"' does not exist.")}function p(t){return new l("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l("unauthenticated",t)}function m(){return new l("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function v(t){return new l("unauthorized","User does not have permission to access '"+t+"'.")}function y(){return new l("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function w(){return new l("canceled","User canceled the upload/download.")}function b(t){return new l("invalid-url","Invalid URL '"+t+"'.")}function _(t){return new l("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function E(){return new l("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function T(){return new l("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function C(){return new l("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function A(){return new l("no-download-url","The given file does not have any download URLs.")}function S(t){return new l("invalid-argument",t)}function I(){return new l("app-deleted","The Firebase app was deleted.")}function k(t){return new l("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function x(t,e){return new l("invalid-format","String does not match format '"+t+"': "+e)}function R(t){throw new l("internal-error","Internal error: "+t)}
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
 */class N{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=N.makeFromUrl(t,e)}catch(r){return new N(t,"")}if(""===n.path)return n;throw _(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${l}/b/${r}/o${f}`,"i"),p={bucket:1,path:3},g=e===s?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",v=new RegExp(`^https?://${g}/${r}/${m}`,"i"),y={bucket:1,path:2},w=[{regex:a,indices:c,postModify:i},{regex:d,indices:p,postModify:u},{regex:v,indices:y,postModify:u}];for(let s=0;s<w.length;s++){const e=w[s],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new N(t,i),e.postModify(n);break}}if(null==n)throw b(t);return n}}class O{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
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
 */function D(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){i=setTimeout((()=>{i=null,t(d,c())}),e)}function f(){o&&clearTimeout(o)}function d(t,...e){if(u)return void f();if(t)return f(),void l.call(null,t,...e);const n=c()||s;if(n)return f(),void l.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(t){p||(p=!0,f(),u||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),o=setTimeout((()=>{s=!0,g(!0)}),n),g}function M(t){t(!1)}
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
 */function L(t){return void 0!==t}function P(t){return"function"===typeof t}function U(t){return"object"===typeof t&&!Array.isArray(t)}function F(t){return"string"===typeof t||t instanceof String}function $(t){return B()&&t instanceof Blob}function B(){return"undefined"!==typeof Blob}function V(t,e,n,r){if(r<e)throw S(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw S(`Invalid value for '${t}'. Expected ${n} or less.`)}
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
 */function j(t,e,n){let r=e;return null==n&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function q(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
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
class z{constructor(t,e,n,r,i,o,s,a,c,u,l){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=s,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new K(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===H.NO_ERROR,i=n.getStatus();if(!e||this.isRetryStatusCode_(i)){const e=n.getErrorCode()===H.ABORT;return void t(!1,new K(!1,null,e))}const o=-1!==this.successCodes_.indexOf(i);t(!0,new K(o,n))}))},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());L(t)?n(t):n()}catch(o){r(o)}else if(null!==i){const t=f();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?I():w();r(t)}else{const t=y();r(t)}};this.canceled_?e(!1,new K(!1,null,!0)):this.backoffId_=D(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&M(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=[408,429],r=-1!==n.indexOf(t),i=-1!==this.additionalRetryCodes_.indexOf(t);return e||r||i}}class K{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function G(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function W(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function X(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Y(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function Q(t,e,n,r,i,o){const s=q(t.urlParams),a=t.url+s,c=Object.assign({},t.headers);return X(c,e),G(c,n),W(c,o),Y(c,r),new z(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}
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
 */function J(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Z(...t){const e=J();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(B())return new Blob(t);throw new l("unsupported-environment","This browser doesn't seem to support creating Blobs")}function tt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
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
 */const nt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class rt{constructor(t,e){this.data=t,this.contentType=e||null}}function it(t,e){switch(t){case nt.RAW:return new rt(ot(e));case nt.BASE64:case nt.BASE64URL:return new rt(at(t,e));case nt.DATA_URL:return new rt(ut(e),lt(e))}throw f()}function ot(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(i){const i=r,o=t.charCodeAt(++n);r=65536|(1023&i)<<10|1023&o,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320===(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function st(t){let e;try{e=decodeURIComponent(t)}catch(n){throw x(nt.DATA_URL,"Malformed data URL.")}return ot(e)}function at(t,e){switch(t){case nt.BASE64:{const n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){const e=n?"-":"_";throw x(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case nt.BASE64URL:{const n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r){const e=n?"+":"/";throw x(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=et(e)}catch(i){throw x(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class ct{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw x(nt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=ht(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}function ut(t){const e=new ct(t);return e.base64?at(nt.BASE64,e.rest):st(e.rest)}function lt(t){const e=new ct(t);return e.contentType}function ht(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
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
 */class ft{constructor(t,e){let n=0,r="";$(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if($(this.data_)){const n=this.data_,r=tt(n,t,e);return null===r?null:new ft(r)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new ft(n,!0)}}static getBlob(...t){if(B()){const e=t.map((t=>t instanceof ft?t.data_:t));return new ft(Z.apply(null,e))}{const e=t.map((t=>F(t)?it(nt.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const r=new Uint8Array(n);let i=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)r[i++]=t[e]})),new ft(r,!0)}}uploadData(){return this.data_}}
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
 */function pt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function gt(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function mt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
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
 */function vt(t,e){return e}class yt{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||vt}}let wt=null;function bt(t){return!F(t)||t.length<2?t:mt(t)}function _t(){if(wt)return wt;const t=[];function e(t,e){return bt(e)}t.push(new yt("bucket")),t.push(new yt("generation")),t.push(new yt("metageneration")),t.push(new yt("name","fullPath",!0));const n=new yt("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new yt("size");return i.xform=r,t.push(i),t.push(new yt("timeCreated")),t.push(new yt("updated")),t.push(new yt("md5Hash",null,!0)),t.push(new yt("cacheControl",null,!0)),t.push(new yt("contentDisposition",null,!0)),t.push(new yt("contentEncoding",null,!0)),t.push(new yt("contentLanguage",null,!0)),t.push(new yt("contentType",null,!0)),t.push(new yt("metadata","customMetadata",!0)),wt=t,wt}function Et(t,e){function n(){const n=t["bucket"],r=t["fullPath"],i=new N(n,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Tt(t,e,n){const r={type:"file"},i=n.length;for(let o=0;o<i;o++){const t=n[o];r[t.local]=t.xform(r,e[t.server])}return Et(r,t),r}function Ct(t,e,n){const r=dt(e);if(null===r)return null;const i=r;return Tt(t,i,n)}function At(t,e,n,r){const i=dt(e);if(null===i)return null;if(!F(i["downloadTokens"]))return null;const o=i["downloadTokens"];if(0===o.length)return null;const s=encodeURIComponent,a=o.split(","),c=a.map((e=>{const i=t["bucket"],o=t["fullPath"],a="/b/"+s(i)+"/o/"+s(o),c=j(a,n,r),u=q({alt:"media",token:e});return c+u}));return c[0]}function St(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}
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
 */function kt(t){if(!t)throw f()}function xt(t,e){function n(n,r){const i=Ct(t,r,e);return kt(null!==i),i}return n}function Rt(t,e){function n(n,r){const i=Ct(t,r,e);return kt(null!==i),At(i,r,t.host,t._protocol)}return n}function Nt(t){function e(e,n){let r;return r=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?m():g():402===e.getStatus()?p(t.bucket):403===e.getStatus()?v(t.path):n,r.serverResponse=n.serverResponse,r}return e}function Ot(t){const e=Nt(t);function n(n,r){let i=e(n,r);return 404===n.getStatus()&&(i=d(t.path)),i.serverResponse=r.serverResponse,i}return n}function Dt(t,e,n){const r=e.fullServerUrl(),i=j(r,t.host,t._protocol),o="GET",s=t.maxOperationRetryTime,a=new It(i,o,xt(t,n),s);return a.errorHandler=Ot(e),a}function Mt(t,e,n){const r=e.fullServerUrl(),i=j(r,t.host,t._protocol),o="GET",s=t.maxOperationRetryTime,a=new It(i,o,Rt(t,n),s);return a.errorHandler=Ot(e),a}function Lt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Pt(t,e,n){const r=Object.assign({},n);return r["fullPath"]=t.path,r["size"]=e.size(),r["contentType"]||(r["contentType"]=Lt(null,e)),r}function Ut(t,e,n,r,i){const o=e.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();s["Content-Type"]="multipart/related; boundary="+c;const u=Pt(e,r,i),l=St(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",f="\r\n--"+c+"--",d=ft.getBlob(h,r,f);if(null===d)throw T();const p={name:u["fullPath"]},g=j(o,t.host,t._protocol),m="POST",v=t.maxUploadRetryTime,y=new It(g,m,xt(t,n),v);return y.urlParams=p,y.headers=s,y.body=d.uploadData(),y.errorHandler=Nt(e),y}class Ft{constructor(t,e,n,r){this.current=t,this.total=e,this.finalized=!!n,this.metadata=r||null}}function $t(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(i){kt(!1)}const r=e||["active"];return kt(!!n&&-1!==r.indexOf(n)),n}function Bt(t,e,n,r,i){const o=e.bucketOnlyServerUrl(),s=Pt(e,r,i),a={name:s["fullPath"]},c=j(o,t.host,t._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":s["contentType"],"Content-Type":"application/json; charset=utf-8"},h=St(s,n),f=t.maxUploadRetryTime;function d(t){let e;$t(t);try{e=t.getResponseHeader("X-Goog-Upload-URL")}catch(n){kt(!1)}return kt(F(e)),e}const p=new It(c,u,d,f);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=Nt(e),p}function Vt(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function o(t){const e=$t(t,["active","final"]);let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(o){kt(!1)}n||kt(!1);const i=Number(n);return kt(!isNaN(i)),new Ft(i,r.size(),"final"===e)}const s="POST",a=t.maxUploadRetryTime,c=new It(n,s,o,a);return c.headers=i,c.errorHandler=Nt(e),c}const jt=262144;function qt(t,e,n,r,i,o,s,a){const c=new Ft(0,0);if(s?(c.current=s.current,c.total=s.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw C();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,f=h+l,d=l===u?"upload, finalize":"upload",p={"X-Goog-Upload-Command":d,"X-Goog-Upload-Offset":`${c.current}`},g=r.slice(h,f);if(null===g)throw T();function m(t,n){const i=$t(t,["active","final"]),s=c.current+l,a=r.size();let u;return u="final"===i?xt(e,o)(t,n):null,new Ft(s,a,"final"===i,u)}const v="POST",y=e.maxUploadRetryTime,w=new It(n,v,m,y);return w.headers=p,w.body=g.uploadData(),w.progressCallback=a||null,w.errorHandler=Nt(t),w}
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
 */class Kt{constructor(t,e,n){const r=P(t)||null!=e||null!=n;if(r)this.next=t,this.error=null!==e&&void 0!==e?e:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const e=t;this.next=e.next,this.error=e.error,this.complete=e.complete}}}
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
 */function Gt(t){return(...e)=>{Promise.resolve().then((()=>t(...e)))}}
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
class Jt{constructor(t,e,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=n,this._mappings=_t(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=t=>{this._request=void 0,this._chunkMultiplier=1,t._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=t,this._transition("error"))},this._metadataErrorHandler=t=>{this._request=void 0,t._codeEquals("canceled")?this.completeTransitions_():(this._error=t,this._transition("error"))},this._promise=new Promise(((t,e)=>{this._resolve=t,this._reject=e,this._start()})),this._promise.then(null,(()=>{}))}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([e,n])=>{switch(this._state){case"running":t(e,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}}))}_createResumable(){this._resolveToken(((t,e)=>{const n=Bt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,Qt,t,e);this._request=r,r.getPromise().then((t=>{this._request=void 0,this._uploadUrl=t,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const t=this._uploadUrl;this._resolveToken(((e,n)=>{const r=Vt(this._ref.storage,this._ref._location,t,this._blob),i=this._ref.storage._makeRequest(r,Qt,e,n);this._request=i,i.getPromise().then((t=>{this._request=void 0,this._updateProgress(t.current),this._needToFetchStatus=!1,t.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const t=jt*this._chunkMultiplier,e=new Ft(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,i)=>{let o;try{o=qt(this._ref._location,this._ref.storage,n,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const s=this._ref.storage._makeRequest(o,Qt,r,i);this._request=s,s.getPromise().then((t=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(t.current),t.finalized?(this._metadata=t.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){const t=jt*this._chunkMultiplier;t<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((t,e)=>{const n=Dt(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,Qt,t,e);this._request=r,r.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((t,e)=>{const n=Ut(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,Qt,t,e);this._request=r,r.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":this._state=t,void 0!==this._request&&this._request.cancel();break;case"pausing":this._state=t,void 0!==this._request&&this._request.cancel();break;case"running":const e="paused"===this._state;this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=w(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=zt(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,n,r){const i=new Kt(e||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);-1!==e&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise();const t=this._observers.slice();t.forEach((t=>{this._notifyObserver(t)}))}_finishPromise(){if(void 0!==this._resolve){let t=!0;switch(zt(this._state)){case Ht.SUCCESS:Gt(this._resolve.bind(null,this.snapshot))();break;case Ht.CANCELED:case Ht.ERROR:const e=this._reject;Gt(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){const e=zt(this._state);switch(e){case Ht.RUNNING:case Ht.PAUSED:t.next&&Gt(t.next.bind(t,this.snapshot))();break;case Ht.SUCCESS:t.complete&&Gt(t.complete.bind(t))();break;case Ht.CANCELED:case Ht.ERROR:t.error&&Gt(t.error.bind(t,this._error))();break;default:t.error&&Gt(t.error.bind(t,this._error))()}}resume(){const t="paused"===this._state||"pausing"===this._state;return t&&this._transition("running"),t}pause(){const t="running"===this._state;return t&&this._transition("pausing"),t}cancel(){const t="running"===this._state||"pausing"===this._state;return t&&this._transition("canceling"),t}}
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
 */class Zt{constructor(t,e){this._service=t,this._location=e instanceof N?e:N.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Zt(t,e)}get root(){const t=new N(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mt(this._location.path)}get storage(){return this._service}get parent(){const t=pt(this._location.path);if(null===t)return null;const e=new N(this._location.bucket,t);return new Zt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw k(t)}}function te(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Jt(t,new ft(e),n)}function ee(t){t._throwIfRoot("getDownloadURL");const e=Mt(t.storage,t._location,_t());return t.storage.makeRequestWithTokens(e,Qt).then((t=>{if(null===t)throw A();return t}))}function ne(t,e){const n=gt(t._location.path,e),r=new N(t._location.bucket,n);return new Zt(t.storage,r)}
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
 */function re(t){return/^[A-Za-z]+:\/\//.test(t)}function ie(t,e){return new Zt(t,e)}function oe(t,e){if(t instanceof ce){const n=t;if(null==n._bucket)throw E();const r=new Zt(n,n._bucket);return null!=e?oe(r,e):r}return void 0!==e?ne(t,e):t}function se(t,e){if(e&&re(e)){if(t instanceof ce)return ie(t,e);throw S("To use ref(service, url), the first argument must be a Storage instance.")}return oe(t,e)}function ae(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:N.makeFromBucketSpec(n,t)}class ce{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=s,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?N.makeFromBucketSpec(r,this._host):ae(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=N.makeFromBucketSpec(this._url,t):this._bucket=ae(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){V("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){V("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Zt(this,t)}_makeRequest(t,e,n,r){if(this._deleted)return new O(I());{const i=Q(t,this._appId,n,r,e,this._firebaseVersion);return this._requests.add(i),i.getPromise().then((()=>this._requests.delete(i)),(()=>this._requests.delete(i))),i}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const ue="@firebase/storage",le="0.9.6",he="storage";function fe(t,e,n){return t=(0,i.m9)(t),te(t,e,n)}function de(t){return t=(0,i.m9)(t),ee(t)}function pe(t,e){return t=(0,i.m9)(t),se(t,e)}function ge(t=(0,r.Mq)(),e){t=(0,i.m9)(t);const n=(0,r.qX)(t,he),o=n.getImmediate({identifier:e});return o}function me(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return new ce(n,i,o,e,r.Jn)}function ve(){(0,r.Xd)(new o.wA(he,me,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(ue,le,""),(0,r.KN)(ue,le,"esm2017")}ve()},8733:function(t,e,n){n(1703);const r=n(115),i=n(8151),o=n(1173),s=n(2375);function a(t,e,n,o,s){const a=[].slice.call(arguments,1),c=a.length,u="function"===typeof a[c-1];if(!u&&!r())throw new Error("Callback required as last argument");if(!u){if(c<1)throw new Error("Too few arguments provided");return 1===c?(n=e,e=o=void 0):2!==c||e.getContext||(o=n,n=e,e=void 0),new Promise((function(r,s){try{const s=i.create(n,o);r(t(s,e,o))}catch(a){s(a)}}))}if(c<2)throw new Error("Too few arguments provided");2===c?(s=n,n=e,e=o=void 0):3===c&&(e.getContext&&"undefined"===typeof s?(s=o,o=void 0):(s=o,o=n,n=e,e=void 0));try{const r=i.create(n,o);s(null,t(r,e,o))}catch(l){s(l)}}e.create=i.create,e.toCanvas=a.bind(null,o.render),e.toDataURL=a.bind(null,o.renderToDataURL),e.toString=a.bind(null,(function(t,e,n){return s.render(t,n)}))},115:function(t){t.exports=function(){return"function"===typeof Promise&&Promise.prototype&&Promise.prototype.then}},8079:function(t,e,n){const r=n(51).getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];const e=Math.floor(t/7)+2,n=r(t),i=145===n?26:2*Math.ceil((n-13)/(2*e-2)),o=[n-7];for(let r=1;r<e-1;r++)o[r]=o[r-1]-i;return o.push(6),o.reverse()},e.getPositions=function(t){const n=[],r=e.getRowColCoords(t),i=r.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)0===e&&0===t||0===e&&t===i-1||e===i-1&&0===t||n.push([r[e],r[t]]);return n}},6105:function(t,e,n){const r=n(3595),i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(t){this.mode=r.ALPHANUMERIC,this.data=t}o.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let n=45*i.indexOf(this.data[e]);n+=i.indexOf(this.data[e+1]),t.put(n,11)}this.data.length%2&&t.put(i.indexOf(this.data[e]),6)},t.exports=o},9726:function(t){function e(){this.buffer=[],this.length=0}e.prototype={get:function(t){const e=Math.floor(t/8);return 1===(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let n=0;n<e;n++)this.putBit(1===(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=e},4874:function(t,e,n){function r(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}n(1703),n(8675),n(3462),r.prototype.set=function(t,e,n,r){const i=t*this.size+e;this.data[i]=n,r&&(this.reservedBit[i]=!0)},r.prototype.get=function(t,e){return this.data[t*this.size+e]},r.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n},r.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=r},5634:function(t,e,n){n(8675),n(3462);const r=n(4683),i=n(3595);function o(t){this.mode=i.BYTE,this.data=new Uint8Array(r(t))}o.getBitsLength=function(t){return 8*t},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)},t.exports=o},8146:function(t,e,n){const r=n(6747),i=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case r.L:return i[4*(t-1)+0];case r.M:return i[4*(t-1)+1];case r.Q:return i[4*(t-1)+2];case r.H:return i[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case r.L:return o[4*(t-1)+0];case r.M:return o[4*(t-1)+1];case r.Q:return o[4*(t-1)+2];case r.H:return o[4*(t-1)+3];default:return}}},6747:function(t,e,n){function r(t){if("string"!==typeof t)throw new Error("Param is not a string");const n=t.toLowerCase();switch(n){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}n(1703),e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&"undefined"!==typeof t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,n){if(e.isValid(t))return t;try{return r(t)}catch(i){return n}}},1945:function(t,e,n){const r=n(51).getSymbolSize,i=7;e.getPositions=function(t){const e=r(t);return[[0,0],[e-i,0],[0,e-i]]}},576:function(t,e,n){const r=n(51),i=1335,o=21522,s=r.getBCHDigit(i);e.getEncodedBits=function(t,e){const n=t.bit<<3|e;let a=n<<10;while(r.getBCHDigit(a)-s>=0)a^=i<<r.getBCHDigit(a)-s;return(n<<10|a)^o}},4187:function(t,e,n){n(8675),n(3462),n(1703);const r=new Uint8Array(512),i=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)r[e]=t,i[t]=e,t<<=1,256&t&&(t^=285);for(let e=255;e<512;e++)r[e]=r[e-255]})(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return i[t]},e.exp=function(t){return r[t]},e.mul=function(t,e){return 0===t||0===e?0:r[i[t]+i[e]]}},7133:function(t,e,n){n(1703);const r=n(3595),i=n(51);function o(t){this.mode=r.KANJI,this.data=t}o.getBitsLength=function(t){return 13*t},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=i.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13)}},t.exports=o},4207:function(t,e,n){n(1703),e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const r={N1:3,N2:3,N3:40,N4:10};function i(t,n,r){switch(t){case e.Patterns.PATTERN000:return(n+r)%2===0;case e.Patterns.PATTERN001:return n%2===0;case e.Patterns.PATTERN010:return r%3===0;case e.Patterns.PATTERN011:return(n+r)%3===0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2===0;case e.Patterns.PATTERN101:return n*r%2+n*r%3===0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2===0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2===0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){const e=t.size;let n=0,i=0,o=0,s=null,a=null;for(let c=0;c<e;c++){i=o=0,s=a=null;for(let u=0;u<e;u++){let e=t.get(c,u);e===s?i++:(i>=5&&(n+=r.N1+(i-5)),s=e,i=1),e=t.get(u,c),e===a?o++:(o>=5&&(n+=r.N1+(o-5)),a=e,o=1)}i>=5&&(n+=r.N1+(i-5)),o>=5&&(n+=r.N1+(o-5))}return n},e.getPenaltyN2=function(t){const e=t.size;let n=0;for(let r=0;r<e-1;r++)for(let i=0;i<e-1;i++){const e=t.get(r,i)+t.get(r,i+1)+t.get(r+1,i)+t.get(r+1,i+1);4!==e&&0!==e||n++}return n*r.N2},e.getPenaltyN3=function(t){const e=t.size;let n=0,i=0,o=0;for(let r=0;r<e;r++){i=o=0;for(let s=0;s<e;s++)i=i<<1&2047|t.get(r,s),s>=10&&(1488===i||93===i)&&n++,o=o<<1&2047|t.get(s,r),s>=10&&(1488===o||93===o)&&n++}return n*r.N3},e.getPenaltyN4=function(t){let e=0;const n=t.data.length;for(let r=0;r<n;r++)e+=t.data[r];const i=Math.abs(Math.ceil(100*e/n/5)-10);return i*r.N4},e.applyMask=function(t,e){const n=e.size;for(let r=0;r<n;r++)for(let o=0;o<n;o++)e.isReserved(o,r)||e.xor(o,r,i(t,o,r))},e.getBestMask=function(t,n){const r=Object.keys(e.Patterns).length;let i=0,o=1/0;for(let s=0;s<r;s++){n(s),e.applyMask(s,t);const r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(s,t),r<o&&(o=r,i=s)}return i}},3595:function(t,e,n){n(1703);const r=n(7117),i=n(6945);function o(t){if("string"!==typeof t)throw new Error("Param is not a string");const n=t.toLowerCase();switch(n){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!r.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return i.testNumeric(t)?e.NUMERIC:i.testAlphanumeric(t)?e.ALPHANUMERIC:i.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,n){if(e.isValid(t))return t;try{return o(t)}catch(r){return n}}},9050:function(t,e,n){const r=n(3595);function i(t){this.mode=r.NUMERIC,this.data=t.toString()}i.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let e,n,r;for(e=0;e+3<=this.data.length;e+=3)n=this.data.substr(e,3),r=parseInt(n,10),t.put(r,10);const i=this.data.length-e;i>0&&(n=this.data.substr(e),r=parseInt(n,10),t.put(r,3*i+1))},t.exports=i},9529:function(t,e,n){n(8675),n(3462);const r=n(4187);e.mul=function(t,e){const n=new Uint8Array(t.length+e.length-1);for(let i=0;i<t.length;i++)for(let o=0;o<e.length;o++)n[i+o]^=r.mul(t[i],e[o]);return n},e.mod=function(t,e){let n=new Uint8Array(t);while(n.length-e.length>=0){const t=n[0];for(let o=0;o<e.length;o++)n[o]^=r.mul(e[o],t);let i=0;while(i<n.length&&0===n[i])i++;n=n.slice(i)}return n},e.generateECPolynomial=function(t){let n=new Uint8Array([1]);for(let i=0;i<t;i++)n=e.mul(n,new Uint8Array([1,r.exp(i)]));return n}},8151:function(t,e,n){n(8675),n(3462),n(1703);const r=n(51),i=n(6747),o=n(9726),s=n(4874),a=n(8079),c=n(1945),u=n(4207),l=n(8146),h=n(6227),f=n(5755),d=n(576),p=n(3595),g=n(6423);function m(t,e){const n=t.size,r=c.getPositions(e);for(let i=0;i<r.length;i++){const e=r[i][0],o=r[i][1];for(let r=-1;r<=7;r++)if(!(e+r<=-1||n<=e+r))for(let i=-1;i<=7;i++)o+i<=-1||n<=o+i||(r>=0&&r<=6&&(0===i||6===i)||i>=0&&i<=6&&(0===r||6===r)||r>=2&&r<=4&&i>=2&&i<=4?t.set(e+r,o+i,!0,!0):t.set(e+r,o+i,!1,!0))}}function v(t){const e=t.size;for(let n=8;n<e-8;n++){const e=n%2===0;t.set(n,6,e,!0),t.set(6,n,e,!0)}}function y(t,e){const n=a.getPositions(e);for(let r=0;r<n.length;r++){const e=n[r][0],i=n[r][1];for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)-2===n||2===n||-2===r||2===r||0===n&&0===r?t.set(e+n,i+r,!0,!0):t.set(e+n,i+r,!1,!0)}}function w(t,e){const n=t.size,r=f.getEncodedBits(e);let i,o,s;for(let a=0;a<18;a++)i=Math.floor(a/3),o=a%3+n-8-3,s=1===(r>>a&1),t.set(i,o,s,!0),t.set(o,i,s,!0)}function b(t,e,n){const r=t.size,i=d.getEncodedBits(e,n);let o,s;for(o=0;o<15;o++)s=1===(i>>o&1),o<6?t.set(o,8,s,!0):o<8?t.set(o+1,8,s,!0):t.set(r-15+o,8,s,!0),o<8?t.set(8,r-o-1,s,!0):o<9?t.set(8,15-o-1+1,s,!0):t.set(8,15-o-1,s,!0);t.set(r-8,8,1,!0)}function _(t,e){const n=t.size;let r=-1,i=n-1,o=7,s=0;for(let a=n-1;a>0;a-=2){6===a&&a--;while(1){for(let n=0;n<2;n++)if(!t.isReserved(i,a-n)){let r=!1;s<e.length&&(r=1===(e[s]>>>o&1)),t.set(i,a-n,r),o--,-1===o&&(s++,o=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}}function E(t,e,n){const i=new o;n.forEach((function(e){i.put(e.mode.bit,4),i.put(e.getLength(),p.getCharCountIndicator(e.mode,t)),e.write(i)}));const s=r.getSymbolTotalCodewords(t),a=l.getTotalCodewordsCount(t,e),c=8*(s-a);i.getLengthInBits()+4<=c&&i.put(0,4);while(i.getLengthInBits()%8!==0)i.putBit(0);const u=(c-i.getLengthInBits())/8;for(let r=0;r<u;r++)i.put(r%2?17:236,8);return T(i,t,e)}function T(t,e,n){const i=r.getSymbolTotalCodewords(e),o=l.getTotalCodewordsCount(e,n),s=i-o,a=l.getBlocksCount(e,n),c=i%a,u=a-c,f=Math.floor(i/a),d=Math.floor(s/a),p=d+1,g=f-d,m=new h(g);let v=0;const y=new Array(a),w=new Array(a);let b=0;const _=new Uint8Array(t.buffer);for(let r=0;r<a;r++){const t=r<u?d:p;y[r]=_.slice(v,v+t),w[r]=m.encode(y[r]),v+=t,b=Math.max(b,t)}const E=new Uint8Array(i);let T,C,A=0;for(T=0;T<b;T++)for(C=0;C<a;C++)T<y[C].length&&(E[A++]=y[C][T]);for(T=0;T<g;T++)for(C=0;C<a;C++)E[A++]=w[C][T];return E}function C(t,e,n,i){let o;if(Array.isArray(t))o=g.fromArray(t);else{if("string"!==typeof t)throw new Error("Invalid data");{let r=e;if(!r){const e=g.rawSplit(t);r=f.getBestVersionForData(e,n)}o=g.fromString(t,r||40)}}const a=f.getBestVersionForData(o,n);if(!a)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<a)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+a+".\n")}else e=a;const c=E(e,n,o),l=r.getSymbolSize(e),h=new s(l);return m(h,e),v(h),y(h,e),b(h,n,0),e>=7&&w(h,e),_(h,c),isNaN(i)&&(i=u.getBestMask(h,b.bind(null,h,n))),u.applyMask(i,h),b(h,n,i),{modules:h,version:e,errorCorrectionLevel:n,maskPattern:i,segments:o}}e.create=function(t,e){if("undefined"===typeof t||""===t)throw new Error("No input text");let n,o,s=i.M;return"undefined"!==typeof e&&(s=i.from(e.errorCorrectionLevel,i.M),n=f.from(e.version),o=u.from(e.maskPattern),e.toSJISFunc&&r.setToSJISFunction(e.toSJISFunc)),C(t,n,s,o)}},6227:function(t,e,n){n(1703),n(8675),n(3462);const r=n(9529);function i(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}i.prototype.initialize=function(t){this.degree=t,this.genPoly=r.generateECPolynomial(this.degree)},i.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const n=r.mod(e,this.genPoly),i=this.degree-n.length;if(i>0){const t=new Uint8Array(this.degree);return t.set(n,i),t}return n},t.exports=i},6945:function(t,e){const n="[0-9]+",r="[A-Z $%*+\\-./:]+";let i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";i=i.replace(/u/g,"\\u");const o="(?:(?![A-Z0-9 $%*+\\-./:]|"+i+")(?:.|[\r\n]))+";e.KANJI=new RegExp(i,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(o,"g"),e.NUMERIC=new RegExp(n,"g"),e.ALPHANUMERIC=new RegExp(r,"g");const s=new RegExp("^"+i+"$"),a=new RegExp("^"+n+"$"),c=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return s.test(t)},e.testNumeric=function(t){return a.test(t)},e.testAlphanumeric=function(t){return c.test(t)}},6423:function(t,e,n){n(1703);const r=n(3595),i=n(9050),o=n(6105),s=n(5634),a=n(7133),c=n(6945),u=n(51),l=n(5659);function h(t){return unescape(encodeURIComponent(t)).length}function f(t,e,n){const r=[];let i;while(null!==(i=t.exec(n)))r.push({data:i[0],index:i.index,mode:e,length:i[0].length});return r}function d(t){const e=f(c.NUMERIC,r.NUMERIC,t),n=f(c.ALPHANUMERIC,r.ALPHANUMERIC,t);let i,o;u.isKanjiModeEnabled()?(i=f(c.BYTE,r.BYTE,t),o=f(c.KANJI,r.KANJI,t)):(i=f(c.BYTE_KANJI,r.BYTE,t),o=[]);const s=e.concat(n,i,o);return s.sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function p(t,e){switch(e){case r.NUMERIC:return i.getBitsLength(t);case r.ALPHANUMERIC:return o.getBitsLength(t);case r.KANJI:return a.getBitsLength(t);case r.BYTE:return s.getBitsLength(t)}}function g(t){return t.reduce((function(t,e){const n=t.length-1>=0?t[t.length-1]:null;return n&&n.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}function m(t){const e=[];for(let n=0;n<t.length;n++){const i=t[n];switch(i.mode){case r.NUMERIC:e.push([i,{data:i.data,mode:r.ALPHANUMERIC,length:i.length},{data:i.data,mode:r.BYTE,length:i.length}]);break;case r.ALPHANUMERIC:e.push([i,{data:i.data,mode:r.BYTE,length:i.length}]);break;case r.KANJI:e.push([i,{data:i.data,mode:r.BYTE,length:h(i.data)}]);break;case r.BYTE:e.push([{data:i.data,mode:r.BYTE,length:h(i.data)}])}}return e}function v(t,e){const n={},i={start:{}};let o=["start"];for(let s=0;s<t.length;s++){const a=t[s],c=[];for(let t=0;t<a.length;t++){const u=a[t],l=""+s+t;c.push(l),n[l]={node:u,lastCount:0},i[l]={};for(let t=0;t<o.length;t++){const s=o[t];n[s]&&n[s].node.mode===u.mode?(i[s][l]=p(n[s].lastCount+u.length,u.mode)-p(n[s].lastCount,u.mode),n[s].lastCount+=u.length):(n[s]&&(n[s].lastCount=u.length),i[s][l]=p(u.length,u.mode)+4+r.getCharCountIndicator(u.mode,e))}}o=c}for(let r=0;r<o.length;r++)i[o[r]].end=0;return{map:i,table:n}}function y(t,e){let n;const c=r.getBestModeForData(t);if(n=r.from(e,c),n!==r.BYTE&&n.bit<c.bit)throw new Error('"'+t+'" cannot be encoded with mode '+r.toString(n)+".\n Suggested mode is: "+r.toString(c));switch(n!==r.KANJI||u.isKanjiModeEnabled()||(n=r.BYTE),n){case r.NUMERIC:return new i(t);case r.ALPHANUMERIC:return new o(t);case r.KANJI:return new a(t);case r.BYTE:return new s(t)}}e.fromArray=function(t){return t.reduce((function(t,e){return"string"===typeof e?t.push(y(e,null)):e.data&&t.push(y(e.data,e.mode)),t}),[])},e.fromString=function(t,n){const r=d(t,u.isKanjiModeEnabled()),i=m(r),o=v(i,n),s=l.find_path(o.map,"start","end"),a=[];for(let e=1;e<s.length-1;e++)a.push(o.table[s[e]].node);return e.fromArray(g(a))},e.rawSplit=function(t){return e.fromArray(d(t,u.isKanjiModeEnabled()))}},51:function(t,e,n){let r;n(1703);const i=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return i[t]},e.getBCHDigit=function(t){let e=0;while(0!==t)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!==typeof t)throw new Error('"toSJISFunc" is not a valid function.');r=t},e.isKanjiModeEnabled=function(){return"undefined"!==typeof r},e.toSJIS=function(t){return r(t)}},7117:function(t,e){e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},5755:function(t,e,n){n(1703);const r=n(51),i=n(8146),o=n(6747),s=n(3595),a=n(7117),c=7973,u=r.getBCHDigit(c);function l(t,n,r){for(let i=1;i<=40;i++)if(n<=e.getCapacity(i,r,t))return i}function h(t,e){return s.getCharCountIndicator(t,e)+4}function f(t,e){let n=0;return t.forEach((function(t){const r=h(t.mode,e);n+=r+t.getBitsLength()})),n}function d(t,n){for(let r=1;r<=40;r++){const i=f(t,r);if(i<=e.getCapacity(r,n,s.MIXED))return r}}e.from=function(t,e){return a.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,n){if(!a.isValid(t))throw new Error("Invalid QR Code version");"undefined"===typeof n&&(n=s.BYTE);const o=r.getSymbolTotalCodewords(t),c=i.getTotalCodewordsCount(t,e),u=8*(o-c);if(n===s.MIXED)return u;const l=u-h(n,t);switch(n){case s.NUMERIC:return Math.floor(l/10*3);case s.ALPHANUMERIC:return Math.floor(l/11*2);case s.KANJI:return Math.floor(l/13);case s.BYTE:default:return Math.floor(l/8)}},e.getBestVersionForData=function(t,e){let n;const r=o.from(e,o.M);if(Array.isArray(t)){if(t.length>1)return d(t,r);if(0===t.length)return 1;n=t[0]}else n=t;return l(n.mode,n.getLength(),r)},e.getEncodedBits=function(t){if(!a.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;while(r.getBCHDigit(e)-u>=0)e^=c<<r.getBCHDigit(e)-u;return t<<12|e}},1173:function(t,e,n){n(1703);const r=n(3717);function i(t,e,n){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=n,e.width=n,e.style.height=n+"px",e.style.width=n+"px"}function o(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}e.render=function(t,e,n){let s=n,a=e;"undefined"!==typeof s||e&&e.getContext||(s=e,e=void 0),e||(a=o()),s=r.getOptions(s);const c=r.getImageWidth(t.modules.size,s),u=a.getContext("2d"),l=u.createImageData(c,c);return r.qrToImageData(l.data,t,s),i(u,a,c),u.putImageData(l,0,0),a},e.renderToDataURL=function(t,n,r){let i=r;"undefined"!==typeof i||n&&n.getContext||(i=n,n=void 0),i||(i={});const o=e.render(t,n,i),s=i.type||"image/png",a=i.rendererOpts||{};return o.toDataURL(s,a.quality)}},2375:function(t,e,n){const r=n(3717);function i(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function o(t,e,n){let r=t+e;return"undefined"!==typeof n&&(r+=" "+n),r}function s(t,e,n){let r="",i=0,s=!1,a=0;for(let c=0;c<t.length;c++){const u=Math.floor(c%e),l=Math.floor(c/e);u||s||(s=!0),t[c]?(a++,c>0&&u>0&&t[c-1]||(r+=s?o("M",u+n,.5+l+n):o("m",i,0),i=0,s=!1),u+1<e&&t[c+1]||(r+=o("h",a),a=0)):i++}return r}e.render=function(t,e,n){const o=r.getOptions(e),a=t.modules.size,c=t.modules.data,u=a+2*o.margin,l=o.color.light.a?"<path "+i(o.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",h="<path "+i(o.color.dark,"stroke")+' d="'+s(c,a,o.margin)+'"/>',f='viewBox="0 0 '+u+" "+u+'"',d=o.width?'width="'+o.width+'" height="'+o.width+'" ':"",p='<svg xmlns="http://www.w3.org/2000/svg" '+d+f+' shape-rendering="crispEdges">'+l+h+"</svg>\n";return"function"===typeof n&&n(null,p),p}},3717:function(t,e,n){function r(t){if("number"===typeof t&&(t=t.toString()),"string"!==typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");const n=parseInt(e.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+e.slice(0,6).join("")}}n(1703),e.getOptions=function(t){t||(t={}),t.color||(t.color={});const e="undefined"===typeof t.margin||null===t.margin||t.margin<0?4:t.margin,n=t.width&&t.width>=21?t.width:void 0,i=t.scale||4;return{width:n,scale:n?4:i,margin:e,color:{dark:r(t.color.dark||"#000000ff"),light:r(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,n){const r=e.getScale(t,n);return Math.floor((t+2*n.margin)*r)},e.qrToImageData=function(t,n,r){const i=n.modules.size,o=n.modules.data,s=e.getScale(i,r),a=Math.floor((i+2*r.margin)*s),c=r.margin*s,u=[r.color.light,r.color.dark];for(let e=0;e<a;e++)for(let n=0;n<a;n++){let l=4*(e*a+n),h=r.color.light;if(e>=c&&n>=c&&e<a-c&&n<a-c){const t=Math.floor((e-c)/s),r=Math.floor((n-c)/s);h=u[o[t*i+r]?1:0]}t[l++]=h.r,t[l++]=h.g,t[l++]=h.b,t[l]=h.a}}},563:function(t,e,n){"use strict";n.d(e,{z:function(){return o}});n(1703);var r,i=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function o(t,e){void 0===e&&(e={});var n=e.registrationOptions;void 0===n&&(n={}),delete e.registrationOptions;var o=function(t){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];e&&e[t]&&e[t].apply(e,n)};"serviceWorker"in navigator&&r.then((function(){i()?(c(t,o,n),navigator.serviceWorker.ready.then((function(t){o("ready",t)})).catch((function(t){return s(o,t)}))):(a(t,o,n),navigator.serviceWorker.ready.then((function(t){o("ready",t)})).catch((function(t){return s(o,t)})))}))}function s(t,e){navigator.onLine||t("offline"),t("error",e)}function a(t,e,n){navigator.serviceWorker.register(t,n).then((function(t){e("registered",t),t.waiting?e("updated",t):t.onupdatefound=function(){e("updatefound",t);var n=t.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?e("updated",t):e("cached",t))}}})).catch((function(t){return s(e,t)}))}function c(t,e,n){fetch(t).then((function(r){404===r.status?(e("error",new Error("Service worker not found at "+t)),u()):-1===r.headers.get("content-type").indexOf("javascript")?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+r.headers.get("content-type"))),u()):a(t,e,n)})).catch((function(t){return s(e,t)}))}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){return s(emit,t)}))}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise((function(t){return window.addEventListener("load",t)})):{then:function(t){return window.addEventListener("load",t)}})},6690:function(t,e,n){"use strict";function r(t,e,n){return t.split(e).join(n)}(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=" /*# sourceMappingURL=contenteditable.vue.map */";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}})();var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{ref:"element",tag:"component",attrs:{contenteditable:t.contenteditable},on:{input:t.update,blur:t.update,paste:t.onPaste,keypress:t.onKeypress,keydown:t.fwdEv,keyup:t.fwdEv,mouseenter:t.fwdEv,mouseover:t.fwdEv,mousemove:t.fwdEv,mousedown:t.fwdEv,mouseup:t.fwdEv,auxclick:t.fwdEv,click:t.fwdEv,dblclick:t.fwdEv,contextmenu:t.fwdEv,wheel:t.fwdEv,mouseleave:t.fwdEv,mouseout:t.fwdEv,select:t.fwdEv,pointerlockchange:t.fwdEv,pointerlockerror:t.fwdEv,dragstart:t.fwdEv,drag:t.fwdEv,dragend:t.fwdEv,dragenter:t.fwdEv,dragover:t.fwdEv,dragleave:t.fwdEv,drop:t.fwdEv,transitionstart:t.fwdEv,transitioncancel:t.fwdEv,transitionend:t.fwdEv,transitionrun:t.fwdEv,compositionstart:t.fwdEv,compositionupdate:t.fwdEv,compositionend:t.fwdEv,cut:t.fwdEv,copy:t.fwdEv}})},staticRenderFns:[],_scopeId:"data-v-52c9b494",name:"contenteditable",props:{tag:String,contenteditable:{type:Boolean,default:!0},value:String,noHTML:{type:Boolean,default:!0},noNL:{type:Boolean,default:!1}},mounted:function(){this.update_content(this.value)},computed:{},data:function(){return{}},methods:{current_content:function(){return this.noHTML?this.$refs.element.innerText:this.$refs.element.innerHTML},update_content:function(t){this.noHTML?this.$refs.element.innerText=t:this.$refs.element.innerHTML=t},update:function(t){this.$emit("input",this.current_content())},onPaste:function(t){t.preventDefault();var e=(t.originalEvent||t).clipboardData.getData("text/plain");this.noNL&&(e=r(e,"\r\n"," "),e=r(e,"\n"," "),e=r(e,"\r"," ")),window.document.execCommand("insertText",!1,e),this.fwdEv(t)},onKeypress:function(t){"Enter"==t.key&&this.noNL&&(t.preventDefault(),this.$emit("returned",this.current_content)),this.fwdEv(t)},fwdEv:function(t){this.$emit(t.type,t)}},watch:{value:function(t,e){t!=this.current_content()&&this.update_content(t)}}},o={install:function(t){t.component(i.name,i)}},s=null;"undefined"!==typeof window?s=window.Vue:"undefined"!==typeof n.g&&(s=n.g.Vue),s&&s.use(o),e["Z"]=o},2809:function(t,e,n){"use strict";n(1703);function r(t,e){for(var n in e)t[n]=e[n];return t}var i=/[!'()*]/g,o=function(t){return"%"+t.charCodeAt(0).toString(16)},s=/%2C/g,a=function(t){return encodeURIComponent(t).replace(i,o).replace(s,",")};function c(t){try{return decodeURIComponent(t)}catch(e){0}return t}function u(t,e,n){void 0===e&&(e={});var r,i=n||h;try{r=i(t||"")}catch(a){r={}}for(var o in e){var s=e[o];r[o]=Array.isArray(s)?s.map(l):l(s)}return r}var l=function(t){return null==t||"object"===typeof t?t:String(t)};function h(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]})),e):e}function f(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return a(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(a(e)):r.push(a(e)+"="+a(t)))})),r.join("&")}return a(e)+"="+a(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var d=/\/?$/;function p(t,e,n,r){var i=r&&r.options.stringifyQuery,o=e.query||{};try{o=g(o)}catch(a){}var s={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:o,params:e.params||{},fullPath:y(e,i),matched:t?v(t):[]};return n&&(s.redirectedFrom=y(n,i)),Object.freeze(s)}function g(t){if(Array.isArray(t))return t.map(g);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=g(t[n]);return e}return t}var m=p(null,{path:"/"});function v(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function y(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;void 0===i&&(i="");var o=e||f;return(n||"/")+o(r)+i}function w(t,e,n){return e===m?t===e:!!e&&(t.path&&e.path?t.path.replace(d,"")===e.path.replace(d,"")&&(n||t.hash===e.hash&&b(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&b(t.query,e.query)&&b(t.params,e.params))))}function b(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,i){var o=t[n],s=r[i];if(s!==n)return!1;var a=e[n];return null==o||null==a?o===a:"object"===typeof o&&"object"===typeof a?b(o,a):String(o)===String(a)}))}function _(t,e){return 0===t.path.replace(d,"/").indexOf(e.path.replace(d,"/"))&&(!e.hash||t.hash===e.hash)&&E(t.query,e.query)}function E(t,e){for(var n in e)if(!(n in t))return!1;return!0}function T(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var s=0;s<o.length;s++)i._isBeingDestroyed||o[s](i)}}}}var C={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,i=e.children,o=e.parent,s=e.data;s.routerView=!0;var a=o.$createElement,c=n.name,u=o.$route,l=o._routerViewCache||(o._routerViewCache={}),h=0,f=!1;while(o&&o._routerRoot!==o){var d=o.$vnode?o.$vnode.data:{};d.routerView&&h++,d.keepAlive&&o._directInactive&&o._inactive&&(f=!0),o=o.$parent}if(s.routerViewDepth=h,f){var p=l[c],g=p&&p.component;return g?(p.configProps&&A(g,s,p.route,p.configProps),a(g,s,i)):a()}var m=u.matched[h],v=m&&m.components[c];if(!m||!v)return l[c]=null,a();l[c]={component:v},s.registerRouteInstance=function(t,e){var n=m.instances[c];(e&&n!==t||!e&&n===t)&&(m.instances[c]=e)},(s.hook||(s.hook={})).prepatch=function(t,e){m.instances[c]=e.componentInstance},s.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[c]&&(m.instances[c]=t.componentInstance),T(u)};var y=m.props&&m.props[c];return y&&(r(l[c],{route:u,configProps:y}),A(v,s,u,y)),a(v,s,i)}};function A(t,e,n,i){var o=e.props=S(n,i);if(o){o=e.props=r({},o);var s=e.attrs=e.attrs||{};for(var a in o)t.props&&a in t.props||(s[a]=o[a],delete o[a])}}function S(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function I(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var o=t.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function k(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}function x(t){return t.replace(/\/(?:\s*\/)+/g,"/")}var R=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},N=Y,O=U,D=F,M=V,L=X,P=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function U(t,e){var n,r=[],i=0,o=0,s="",a=e&&e.delimiter||"/";while(null!=(n=P.exec(t))){var c=n[0],u=n[1],l=n.index;if(s+=t.slice(o,l),o=l+c.length,u)s+=u[1];else{var h=t[o],f=n[2],d=n[3],p=n[4],g=n[5],m=n[6],v=n[7];s&&(r.push(s),s="");var y=null!=f&&null!=h&&h!==f,w="+"===m||"*"===m,b="?"===m||"*"===m,_=n[2]||a,E=p||g;r.push({name:d||i++,prefix:f||"",delimiter:_,optional:b,repeat:w,partial:y,asterisk:!!v,pattern:E?q(E):v?".*":"[^"+j(_)+"]+?"})}}return o<t.length&&(s+=t.substr(o)),s&&r.push(s),r}function F(t,e){return V(U(t,e),e)}function $(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function B(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function V(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",z(e)));return function(e,r){for(var i="",o=e||{},s=r||{},a=s.pretty?$:encodeURIComponent,c=0;c<t.length;c++){var u=t[c];if("string"!==typeof u){var l,h=o[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(R(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var f=0;f<h.length;f++){if(l=a(h[f]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===f?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?B(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function j(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function q(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function H(t,e){return t.keys=e,t}function z(t){return t&&t.sensitive?"":"i"}function K(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return H(t,e)}function G(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(Y(t[i],e,n).source);var o=new RegExp("(?:"+r.join("|")+")",z(n));return H(o,e)}function W(t,e,n){return X(U(t,n),e,n)}function X(t,e,n){R(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,o="",s=0;s<t.length;s++){var a=t[s];if("string"===typeof a)o+=j(a);else{var c=j(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}var l=j(n.delimiter||"/"),h=o.slice(-l.length)===l;return r||(o=(h?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&h?"":"(?="+l+"|$)",H(new RegExp("^"+o,z(n)),e)}function Y(t,e,n){return R(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?K(t,e):R(t)?G(t,e,n):W(t,e,n)}N.parse=O,N.compile=D,N.tokensToFunction=M,N.tokensToRegExp=L;var Q=Object.create(null);function J(t,e,n){e=e||{};try{var r=Q[t]||(Q[t]=N.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(i){return""}finally{delete e[0]}}function Z(t,e,n,i){var o="string"===typeof t?{path:t}:t;if(o._normalized)return o;if(o.name){o=r({},t);var s=o.params;return s&&"object"===typeof s&&(o.params=r({},s)),o}if(!o.path&&o.params&&e){o=r({},o),o._normalized=!0;var a=r(r({},e.params),o.params);if(e.name)o.name=e.name,o.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;o.path=J(c,a,"path "+e.path)}else 0;return o}var l=k(o.path||""),h=e&&e.path||"/",f=l.path?I(l.path,h,n||o.append):h,d=u(l.query,o.query,i&&i.options.parseQuery),p=o.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:f,query:d,hash:p}}var tt,et=[String,Object],nt=[String,Array],rt=function(){},it={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:nt,default:"click"}},render:function(t){var e=this,n=this.$router,i=this.$route,o=n.resolve(this.to,i,this.append),s=o.location,a=o.route,c=o.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,f=null==l?"router-link-active":l,d=null==h?"router-link-exact-active":h,g=null==this.activeClass?f:this.activeClass,m=null==this.exactActiveClass?d:this.exactActiveClass,v=a.redirectedFrom?p(null,Z(a.redirectedFrom),null,n):a;u[m]=w(i,v,this.exactPath),u[g]=this.exact||this.exactPath?u[m]:_(i,v);var y=u[m]?this.ariaCurrentValue:null,b=function(t){ot(t)&&(e.replace?n.replace(s,rt):n.push(s,rt))},E={click:ot};Array.isArray(this.event)?this.event.forEach((function(t){E[t]=b})):E[this.event]=b;var T={class:u},C=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:b,isActive:u[g],isExactActive:u[m]});if(C){if(1===C.length)return C[0];if(C.length>1||!C.length)return 0===C.length?t():t("span",{},C)}if("a"===this.tag)T.on=E,T.attrs={href:c,"aria-current":y};else{var A=st(this.$slots.default);if(A){A.isStatic=!1;var S=A.data=r({},A.data);for(var I in S.on=S.on||{},S.on){var k=S.on[I];I in E&&(S.on[I]=Array.isArray(k)?k:[k])}for(var x in E)x in S.on?S.on[x].push(E[x]):S.on[x]=b;var R=A.data.attrs=r({},A.data.attrs);R.href=c,R["aria-current"]=y}else T.on=E}return t(this.tag,T,this.$slots.default)}};function ot(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function st(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=st(e.children)))return e}}function at(t){if(!at.installed||tt!==t){at.installed=!0,tt=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",C),t.component("RouterLink",it);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ct="undefined"!==typeof window;function ut(t,e,n,r,i){var o=e||[],s=n||Object.create(null),a=r||Object.create(null);t.forEach((function(t){lt(o,s,a,t,i)}));for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:s,nameMap:a}}function lt(t,e,n,r,i,o){var s=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=ft(s,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:ht(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=o?x(o+"/"+r.path):void 0;lt(t,e,n,r,l,i)})),e[l.path]||(t.push(l.path),e[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],f=0;f<h.length;++f){var d=h[f];0;var p={path:d,children:r.children};lt(t,e,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function ht(t,e){var n=N(t,[],e);return n}function ft(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:x(e.path+"/"+t)}function dt(t,e){var n=ut(t),r=n.pathList,i=n.pathMap,o=n.nameMap;function s(t){ut(t,r,i,o)}function a(t,e){var n="object"!==typeof t?o[t]:void 0;ut([e||t],r,i,o,n),n&&n.alias.length&&ut(n.alias.map((function(t){return{path:t,children:[e]}})),r,i,o,n)}function c(){return r.map((function(t){return i[t]}))}function u(t,n,s){var a=Z(t,n,!1,e),c=a.name;if(c){var u=o[c];if(!u)return f(null,a);var l=u.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=J(u.path,a.params,'named route "'+c+'"'),f(u,a,s)}if(a.path){a.params={};for(var d=0;d<r.length;d++){var p=r[d],g=i[p];if(pt(g.regex,a.path,a.params))return f(g,a,s)}}return f(null,a)}function l(t,n){var r=t.redirect,i="function"===typeof r?r(p(t,n,null,e)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return f(null,n);var s=i,a=s.name,c=s.path,l=n.query,h=n.hash,d=n.params;if(l=s.hasOwnProperty("query")?s.query:l,h=s.hasOwnProperty("hash")?s.hash:h,d=s.hasOwnProperty("params")?s.params:d,a){o[a];return u({_normalized:!0,name:a,query:l,hash:h,params:d},void 0,n)}if(c){var g=gt(c,t),m=J(g,d,'redirect route with path "'+g+'"');return u({_normalized:!0,path:m,query:l,hash:h},void 0,n)}return f(null,n)}function h(t,e,n){var r=J(n,e.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var o=i.matched,s=o[o.length-1];return e.params=i.params,f(s,e)}return f(null,e)}function f(t,n,r){return t&&t.redirect?l(t,r||n):t&&t.matchAs?h(t,n,t.matchAs):p(t,n,r,e)}return{match:u,addRoute:a,getRoutes:c,addRoutes:s}}function pt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var s=t.keys[i-1];s&&(n[s.name||"pathMatch"]="string"===typeof r[i]?c(r[i]):r[i])}return!0}function gt(t,e){return I(t,e.parent?e.parent.path:"/",!0)}var mt=ct&&window.performance&&window.performance.now?window.performance:Date;function vt(){return mt.now().toFixed(3)}var yt=vt();function wt(){return yt}function bt(t){return yt=t}var _t=Object.create(null);function Et(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=r({},window.history.state);return n.key=wt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",At),function(){window.removeEventListener("popstate",At)}}function Tt(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick((function(){var o=St(),s=i.call(t,e,n,r?o:null);s&&("function"===typeof s.then?s.then((function(t){Dt(t,o)})).catch((function(t){0})):Dt(s,o))}))}}function Ct(){var t=wt();t&&(_t[t]={x:window.pageXOffset,y:window.pageYOffset})}function At(t){Ct(),t.state&&t.state.key&&bt(t.state.key)}function St(){var t=wt();if(t)return _t[t]}function It(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-r.left-e.x,y:i.top-r.top-e.y}}function kt(t){return Nt(t.x)||Nt(t.y)}function xt(t){return{x:Nt(t.x)?t.x:window.pageXOffset,y:Nt(t.y)?t.y:window.pageYOffset}}function Rt(t){return{x:Nt(t.x)?t.x:0,y:Nt(t.y)?t.y:0}}function Nt(t){return"number"===typeof t}var Ot=/^#\d/;function Dt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=Ot.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var i=t.offset&&"object"===typeof t.offset?t.offset:{};i=Rt(i),e=It(r,i)}else kt(t)&&(e=xt(t))}else n&&kt(t)&&(e=xt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Mt=ct&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Lt(t,e){Ct();var n=window.history;try{if(e){var i=r({},n.state);i.key=wt(),n.replaceState(i,"",t)}else n.pushState({key:bt(vt())},"",t)}catch(o){window.location[e?"replace":"assign"](t)}}function Pt(t){Lt(t,!0)}function Ut(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],(function(){r(i+1)})):r(i+1)};r(0)}var Ft={redirected:2,aborted:4,cancelled:8,duplicated:16};function $t(t,e){return qt(t,e,Ft.redirected,'Redirected when going from "'+t.fullPath+'" to "'+zt(e)+'" via a navigation guard.')}function Bt(t,e){var n=qt(t,e,Ft.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Vt(t,e){return qt(t,e,Ft.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function jt(t,e){return qt(t,e,Ft.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function qt(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var Ht=["params","query","hash"];function zt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return Ht.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Kt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Gt(t,e){return Kt(t)&&t._isRouter&&(null==e||t.type===e)}function Wt(t){return function(e,n,r){var i=!1,o=0,s=null;Xt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){i=!0,o++;var c,u=Zt((function(e){Jt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),n.components[a]=e,o--,o<=0&&r()})),l=Zt((function(t){var e="Failed to resolve async component "+a+": "+t;s||(s=Kt(t)?t:new Error(e),r(s))}));try{c=t(u,l)}catch(f){l(f)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Xt(t,e){return Yt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Yt(t){return Array.prototype.concat.apply([],t)}var Qt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Jt(t){return t.__esModule||Qt&&"Module"===t[Symbol.toStringTag]}function Zt(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(ct){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ne(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function re(t,e,n,r){var i=Xt(t,(function(t,r,i,o){var s=ie(t,e);if(s)return Array.isArray(s)?s.map((function(t){return n(t,r,i,o)})):n(s,r,i,o)}));return Yt(r?i.reverse():i)}function ie(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function oe(t){return re(t,"beforeRouteLeave",ae,!0)}function se(t){return re(t,"beforeRouteUpdate",ae)}function ae(t,e){if(e)return function(){return t.apply(e,arguments)}}function ce(t){return re(t,"beforeRouteEnter",(function(t,e,n,r){return ue(t,n,r)}))}function ue(t,e,n){return function(r,i,o){return t(r,i,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),o(t)}))}}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(s){throw this.errorCbs.forEach((function(t){t(s)})),s}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach((function(t){t&&t(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!i.ready&&(Gt(t,Ft.redirected)&&o===m||(i.ready=!0,i.readyErrorCbs.forEach((function(e){e(t)}))))}))},te.prototype.confirmTransition=function(t,e,n){var r=this,i=this.current;this.pending=t;var o=function(t){!Gt(t)&&Kt(t)&&(r.errorCbs.length?r.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},s=t.matched.length-1,a=i.matched.length-1;if(w(t,i)&&s===a&&t.matched[s]===i.matched[a])return this.ensureURL(),t.hash&&Tt(this.router,i,t,!1),o(Bt(i,t));var c=ne(this.current.matched,t.matched),u=c.updated,l=c.deactivated,h=c.activated,f=[].concat(oe(l),this.router.beforeHooks,se(u),h.map((function(t){return t.beforeEnter})),Wt(h)),d=function(e,n){if(r.pending!==t)return o(Vt(i,t));try{e(t,i,(function(e){!1===e?(r.ensureURL(!0),o(jt(i,t))):Kt(e)?(r.ensureURL(!0),o(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(o($t(i,t)),"object"===typeof e&&e.replace?r.replace(e):r.push(e)):n(e)}))}catch(s){o(s)}};Ut(f,d,(function(){var n=ce(h),s=n.concat(r.router.resolveHooks);Ut(s,d,(function(){if(r.pending!==t)return o(Vt(i,t));r.pending=null,e(t),r.router.app&&r.router.app.$nextTick((function(){T(t)}))}))}))},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=m,this.pending=null};var le=function(t){function e(e,n){t.call(this,e,n),this._startLocation=he(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Mt&&n;r&&this.listeners.push(Et());var i=function(){var n=t.current,i=he(t.base);t.current===m&&i===t._startLocation||t.transitionTo(i,(function(t){r&&Tt(e,t,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){Lt(x(r.base+t.fullPath)),Tt(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){Pt(x(r.base+t.fullPath)),Tt(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(he(this.base)!==this.current.fullPath){var e=x(this.base+this.current.fullPath);t?Lt(e):Pt(e)}},e.prototype.getCurrentLocation=function(){return he(this.base)},e}(te);function he(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(x(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var fe=function(t){function e(e,n,r){t.call(this,e,n),r&&de(this.base)||pe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Mt&&n;r&&this.listeners.push(Et());var i=function(){var e=t.current;pe()&&t.transitionTo(ge(),(function(n){r&&Tt(t.router,n,e,!0),Mt||ye(n.fullPath)}))},o=Mt?"popstate":"hashchange";window.addEventListener(o,i),this.listeners.push((function(){window.removeEventListener(o,i)}))}},e.prototype.push=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){ve(t.fullPath),Tt(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,o=i.current;this.transitionTo(t,(function(t){ye(t.fullPath),Tt(r.router,t,o,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;ge()!==e&&(t?ve(e):ye(e))},e.prototype.getCurrentLocation=function(){return ge()},e}(te);function de(t){var e=he(t);if(!/^\/#/.test(e))return window.location.replace(x(t+"/#"+e)),!0}function pe(){var t=ge();return"/"===t.charAt(0)||(ye("/"+t),!1)}function ge(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function me(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function ve(t){Mt?Lt(me(t)):window.location.hash=t}function ye(t){Mt?Pt(me(t)):window.location.replace(me(t))}var we=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){Gt(t,Ft.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),be=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=dt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Mt&&!1!==t.fallback,this.fallback&&(e="hash"),ct||(e="abstract"),this.mode=e,e){case"history":this.history=new le(this,t.base);break;case"hash":this.history=new fe(this,t.base,this.fallback);break;case"abstract":this.history=new we(this,t.base);break;default:0}},_e={currentRoute:{configurable:!0}};function Ee(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Te(t,e,n){var r="hash"===n?"#"+e:e;return t?x(t+"/"+r):r}be.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},_e.currentRoute.get=function(){return this.history&&this.history.current},be.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof le||n instanceof fe){var r=function(t){var r=n.current,i=e.options.scrollBehavior,o=Mt&&i;o&&"fullPath"in t&&Tt(e,t,r,!1)},i=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},be.prototype.beforeEach=function(t){return Ee(this.beforeHooks,t)},be.prototype.beforeResolve=function(t){return Ee(this.resolveHooks,t)},be.prototype.afterEach=function(t){return Ee(this.afterHooks,t)},be.prototype.onReady=function(t,e){this.history.onReady(t,e)},be.prototype.onError=function(t){this.history.onError(t)},be.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},be.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},be.prototype.go=function(t){this.history.go(t)},be.prototype.back=function(){this.go(-1)},be.prototype.forward=function(){this.go(1)},be.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},be.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=Z(t,e,n,this),i=this.match(r,e),o=i.redirectedFrom||i.fullPath,s=this.history.base,a=Te(s,o,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},be.prototype.getRoutes=function(){return this.matcher.getRoutes()},be.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},be.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(be.prototype,_e),be.install=at,be.version="3.5.4",be.isNavigationFailure=Gt,be.NavigationFailureType=Ft,be.START_LOCATION=m,ct&&window.Vue&&window.Vue.use(be),e["Z"]=be},9531:function(t,e,n){"use strict";n(6699);var r={name:"TextareaAutosize",props:{value:{type:[String,Number],default:""},autosize:{type:Boolean,default:!0},minHeight:{type:[Number],default:null},maxHeight:{type:[Number],default:null},important:{type:[Boolean,Array],default:!1}},data:function(){return{val:null,maxHeightScroll:!1,height:"auto"}},computed:{computedStyles:function(){return this.autosize?{resize:this.isResizeImportant?"none !important":"none",height:this.height,overflow:this.maxHeightScroll?"auto":this.isOverflowImportant?"hidden !important":"hidden"}:{}},isResizeImportant:function(){var t=this.important;return!0===t||Array.isArray(t)&&t.includes("resize")},isOverflowImportant:function(){var t=this.important;return!0===t||Array.isArray(t)&&t.includes("overflow")},isHeightImportant:function(){var t=this.important;return!0===t||Array.isArray(t)&&t.includes("height")}},watch:{value:function(t){this.val=t},val:function(t){this.$nextTick(this.resize),this.$emit("input",t)},minHeight:function(){this.$nextTick(this.resize)},maxHeight:function(){this.$nextTick(this.resize)},autosize:function(t){t&&this.resize()}},methods:{resize:function(){var t=this,e=this.isHeightImportant?"important":"";return this.height="auto".concat(e?" !important":""),this.$nextTick((function(){var n=t.$el.scrollHeight+1;t.minHeight&&(n=n<t.minHeight?t.minHeight:n),t.maxHeight&&(n>t.maxHeight?(n=t.maxHeight,t.maxHeightScroll=!0):t.maxHeightScroll=!1);var r=n+"px";t.height="".concat(r).concat(e?" !important":"")})),this}},created:function(){this.val=this.value},mounted:function(){this.resize()}};function i(t,e,n,r,i,o,s,a,c,u){"boolean"!==typeof s&&(c=a,a=s,s=!1);var l,h="function"===typeof n?n.options:n;if(t&&t.render&&(h.render=t.render,h.staticRenderFns=t.staticRenderFns,h._compiled=!0,i&&(h.functional=!0)),r&&(h._scopeId=r),o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},h._ssrRegister=l):e&&(l=s?function(){e.call(this,u(this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),l)if(h.functional){var f=h.render;h.render=function(t,e){return l.call(e),f(t,e)}}else{var d=h.beforeCreate;h.beforeCreate=d?[].concat(d,l):[l]}return n}var o=i;const s=r;var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],style:t.computedStyles,domProps:{value:t.val},on:{focus:t.resize,input:function(e){e.target.composing||(t.val=e.target.value)}}})},c=[];const u=void 0,l=void 0,h=void 0,f=!1;var d=o({render:a,staticRenderFns:c},u,s,l,f,h,void 0,void 0),p="1.1.1",g=function(t){t.component("TextareaAutosize",d)},m={install:g,version:p};"undefined"!==typeof window&&window.Vue&&window.Vue.use(m),e["Z"]=m},8935:function(t,e,n){"use strict";n(4633);var r=Object.freeze({});function i(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function s(t){return!0===t}function a(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return null!==t&&"object"===typeof t}var l=Object.prototype.toString;function h(t){return"[object Object]"===l.call(t)}function f(t){return"[object RegExp]"===l.call(t)}function d(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function p(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function g(t){return null==t?"":Array.isArray(t)||h(t)&&t.toString===l?JSON.stringify(t,null,2):String(t)}function m(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}v("slot,component",!0);var y=v("key,ref,slot,slot-scope,is");function w(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function _(t,e){return b.call(t,e)}function E(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var T=/-(\w)/g,C=E((function(t){return t.replace(T,(function(t,e){return e?e.toUpperCase():""}))})),A=E((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),S=/\B([A-Z])/g,I=E((function(t){return t.replace(S,"-$1").toLowerCase()}));function k(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function x(t,e){return t.bind(e)}var R=Function.prototype.bind?x:k;function N(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function O(t,e){for(var n in e)t[n]=e[n];return t}function D(t){for(var e={},n=0;n<t.length;n++)t[n]&&O(e,t[n]);return e}function M(t,e,n){}var L=function(t,e,n){return!1},P=function(t){return t};function U(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every((function(t,n){return U(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var s=Object.keys(t),a=Object.keys(e);return s.length===a.length&&s.every((function(n){return U(t[n],e[n])}))}catch(c){return!1}}function F(t,e){for(var n=0;n<t.length;n++)if(U(t[n],e))return n;return-1}function $(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var B="data-server-rendered",V=["component","directive","filter"],j=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:L,isReservedAttr:L,isUnknownElement:L,getTagNamespace:M,parsePlatformTagName:P,mustUseProp:L,async:!0,_lifecycleHooks:j},H=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function z(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function K(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var G=new RegExp("[^"+H.source+".$_\\d]");function W(t){if(!G.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var X,Y="__proto__"in{},Q="undefined"!==typeof window,J="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Z=J&&WXEnvironment.platform.toLowerCase(),tt=Q&&window.navigator.userAgent.toLowerCase(),et=tt&&/msie|trident/.test(tt),nt=tt&&tt.indexOf("msie 9.0")>0,rt=tt&&tt.indexOf("edge/")>0,it=(tt&&tt.indexOf("android"),tt&&/iphone|ipad|ipod|ios/.test(tt)||"ios"===Z),ot=(tt&&/chrome\/\d+/.test(tt),tt&&/phantomjs/.test(tt),tt&&tt.match(/firefox\/(\d+)/)),st={}.watch,at=!1;if(Q)try{var ct={};Object.defineProperty(ct,"passive",{get:function(){at=!0}}),window.addEventListener("test-passive",null,ct)}catch(As){}var ut=function(){return void 0===X&&(X=!Q&&!J&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),X},lt=Q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ht(t){return"function"===typeof t&&/native code/.test(t.toString())}var ft,dt="undefined"!==typeof Symbol&&ht(Symbol)&&"undefined"!==typeof Reflect&&ht(Reflect.ownKeys);ft="undefined"!==typeof Set&&ht(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var pt=M,gt=0,mt=function(){this.id=gt++,this.subs=[]};mt.prototype.addSub=function(t){this.subs.push(t)},mt.prototype.removeSub=function(t){w(this.subs,t)},mt.prototype.depend=function(){mt.target&&mt.target.addDep(this)},mt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},mt.target=null;var vt=[];function yt(t){vt.push(t),mt.target=t}function wt(){vt.pop(),mt.target=vt[vt.length-1]}var bt=function(t,e,n,r,i,o,s,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},_t={child:{configurable:!0}};_t.child.get=function(){return this.componentInstance},Object.defineProperties(bt.prototype,_t);var Et=function(t){void 0===t&&(t="");var e=new bt;return e.text=t,e.isComment=!0,e};function Tt(t){return new bt(void 0,void 0,void 0,String(t))}function Ct(t){var e=new bt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var At=Array.prototype,St=Object.create(At),It=["push","pop","shift","unshift","splice","sort","reverse"];It.forEach((function(t){var e=At[t];K(St,t,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=e.apply(this,n),s=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify(),o}))}));var kt=Object.getOwnPropertyNames(St),xt=!0;function Rt(t){xt=t}var Nt=function(t){this.value=t,this.dep=new mt,this.vmCount=0,K(t,"__ob__",this),Array.isArray(t)?(Y?Ot(t,St):Dt(t,St,kt),this.observeArray(t)):this.walk(t)};function Ot(t,e){t.__proto__=e}function Dt(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];K(t,o,e[o])}}function Mt(t,e){var n;if(u(t)&&!(t instanceof bt))return _(t,"__ob__")&&t.__ob__ instanceof Nt?n=t.__ob__:xt&&!ut()&&(Array.isArray(t)||h(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Nt(t)),e&&n&&n.vmCount++,n}function Lt(t,e,n,r,i){var o=new mt,s=Object.getOwnPropertyDescriptor(t,e);if(!s||!1!==s.configurable){var a=s&&s.get,c=s&&s.set;a&&!c||2!==arguments.length||(n=t[e]);var u=!i&&Mt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return mt.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(e)&&Ft(e))),e},set:function(e){var r=a?a.call(t):n;e===r||e!==e&&r!==r||a&&!c||(c?c.call(t,e):n=e,u=!i&&Mt(e),o.notify())}})}}function Pt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Lt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Ut(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||_(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ft(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ft(e)}Nt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Lt(t,e[n])},Nt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Mt(t[e])};var $t=q.optionMergeStrategies;function Bt(t,e){if(!e)return t;for(var n,r,i,o=dt?Reflect.ownKeys(e):Object.keys(e),s=0;s<o.length;s++)n=o[s],"__ob__"!==n&&(r=t[n],i=e[n],_(t,n)?r!==i&&h(r)&&h(i)&&Bt(r,i):Pt(t,n,i));return t}function Vt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?Bt(r,i):i}:e?t?function(){return Bt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function jt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?qt(n):n}function qt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Ht(t,e,n,r){var i=Object.create(t||null);return e?O(i,e):i}$t.data=function(t,e,n){return n?Vt(t,e,n):e&&"function"!==typeof e?t:Vt(t,e)},j.forEach((function(t){$t[t]=jt})),V.forEach((function(t){$t[t+"s"]=Ht})),$t.watch=function(t,e,n,r){if(t===st&&(t=void 0),e===st&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var o in O(i,t),e){var s=i[o],a=e[o];s&&!Array.isArray(s)&&(s=[s]),i[o]=s?s.concat(a):Array.isArray(a)?a:[a]}return i},$t.props=$t.methods=$t.inject=$t.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return O(i,t),e&&O(i,e),i},$t.provide=Vt;var zt=function(t,e){return void 0===e?t:e};function Kt(t,e){var n=t.props;if(n){var r,i,o,s={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(o=C(i),s[o]={type:null})}else if(h(n))for(var a in n)i=n[a],o=C(a),s[o]=h(i)?i:{type:i};else 0;t.props=s}}function Gt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(h(n))for(var o in n){var s=n[o];r[o]=h(s)?O({from:o},s):{from:s}}else 0}}function Wt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Xt(t,e,n){if("function"===typeof e&&(e=e.options),Kt(e,n),Gt(e,n),Wt(e),!e._base&&(e.extends&&(t=Xt(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Xt(t,e.mixins[r],n);var o,s={};for(o in t)a(o);for(o in e)_(t,o)||a(o);function a(r){var i=$t[r]||zt;s[r]=i(t[r],e[r],n,r)}return s}function Yt(t,e,n,r){if("string"===typeof n){var i=t[e];if(_(i,n))return i[n];var o=C(n);if(_(i,o))return i[o];var s=A(o);if(_(i,s))return i[s];var a=i[n]||i[o]||i[s];return a}}function Qt(t,e,n,r){var i=e[t],o=!_(n,t),s=n[t],a=ne(Boolean,i.type);if(a>-1)if(o&&!_(i,"default"))s=!1;else if(""===s||s===I(t)){var c=ne(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Jt(r,i,t);var u=xt;Rt(!0),Mt(s),Rt(u)}return s}function Jt(t,e,n){if(_(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==te(e.type)?r.call(t):r}}var Zt=/^\s*function (\w+)/;function te(t){var e=t&&t.toString().match(Zt);return e?e[1]:""}function ee(t,e){return te(t)===te(e)}function ne(t,e){if(!Array.isArray(e))return ee(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(ee(e[n],t))return n;return-1}function re(t,e,n){yt();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,t,e,n);if(s)return}catch(As){oe(As,r,"errorCaptured hook")}}}oe(t,e,n)}finally{wt()}}function ie(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&p(o)&&!o._handled&&(o.catch((function(t){return re(t,r,i+" (Promise/async)")})),o._handled=!0)}catch(As){re(As,r,i)}return o}function oe(t,e,n){if(q.errorHandler)try{return q.errorHandler.call(null,t,e,n)}catch(As){As!==t&&se(As,null,"config.errorHandler")}se(t,e,n)}function se(t,e,n){if(!Q&&!J||"undefined"===typeof console)throw t;console.error(t)}var ae,ce=!1,ue=[],le=!1;function he(){le=!1;var t=ue.slice(0);ue.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ht(Promise)){var fe=Promise.resolve();ae=function(){fe.then(he),it&&setTimeout(M)},ce=!0}else if(et||"undefined"===typeof MutationObserver||!ht(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ae="undefined"!==typeof setImmediate&&ht(setImmediate)?function(){setImmediate(he)}:function(){setTimeout(he,0)};else{var de=1,pe=new MutationObserver(he),ge=document.createTextNode(String(de));pe.observe(ge,{characterData:!0}),ae=function(){de=(de+1)%2,ge.data=String(de)},ce=!0}function me(t,e){var n;if(ue.push((function(){if(t)try{t.call(e)}catch(As){re(As,e,"nextTick")}else n&&n(e)})),le||(le=!0,ae()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var ve=new ft;function ye(t){we(t,ve),ve.clear()}function we(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!u(t)||Object.isFrozen(t)||t instanceof bt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(i){n=t.length;while(n--)we(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)we(t[r[n]],e)}}}var be=E((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function _e(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return ie(r,null,arguments,e,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)ie(i[o],null,t,e,"v-on handler")}return n.fns=t,n}function Ee(t,e,n,r,o,a){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=be(c),i(u)||(i(l)?(i(u.fns)&&(u=t[c]=_e(u,a)),s(h.once)&&(u=t[c]=o(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)i(t[c])&&(h=be(c),r(h.name,e[c],h.capture))}function Te(t,e,n){var r;t instanceof bt&&(t=t.data.hook||(t.data.hook={}));var a=t[e];function c(){n.apply(this,arguments),w(r.fns,c)}i(a)?r=_e([c]):o(a.fns)&&s(a.merged)?(r=a,r.fns.push(c)):r=_e([a,c]),r.merged=!0,t[e]=r}function Ce(t,e,n){var r=e.options.props;if(!i(r)){var s={},a=t.attrs,c=t.props;if(o(a)||o(c))for(var u in r){var l=I(u);Ae(s,c,u,l,!0)||Ae(s,a,u,l,!1)}return s}}function Ae(t,e,n,r,i){if(o(e)){if(_(e,n))return t[n]=e[n],i||delete e[n],!0;if(_(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function Se(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Ie(t){return c(t)?[Tt(t)]:Array.isArray(t)?xe(t):void 0}function ke(t){return o(t)&&o(t.text)&&a(t.isComment)}function xe(t,e){var n,r,a,u,l=[];for(n=0;n<t.length;n++)r=t[n],i(r)||"boolean"===typeof r||(a=l.length-1,u=l[a],Array.isArray(r)?r.length>0&&(r=xe(r,(e||"")+"_"+n),ke(r[0])&&ke(u)&&(l[a]=Tt(u.text+r[0].text),r.shift()),l.push.apply(l,r)):c(r)?ke(u)?l[a]=Tt(u.text+r):""!==r&&l.push(Tt(r)):ke(r)&&ke(u)?l[a]=Tt(u.text+r.text):(s(t._isVList)&&o(r.tag)&&i(r.key)&&o(e)&&(r.key="__vlist"+e+"_"+n+"__"),l.push(r)));return l}function Re(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Ne(t){var e=Oe(t.$options.inject,t);e&&(Rt(!1),Object.keys(e).forEach((function(n){Lt(t,n,e[n])})),Rt(!0))}function Oe(t,e){if(t){for(var n=Object.create(null),r=dt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=t[o].from,a=e;while(a){if(a._provided&&_(a._provided,s)){n[o]=a._provided[s];break}a=a.$parent}if(!a)if("default"in t[o]){var c=t[o].default;n[o]="function"===typeof c?c.call(e):c}else 0}}return n}}function De(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==e&&o.fnContext!==e||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(Me)&&delete n[u];return n}function Me(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Le(t){return t.isComment&&t.asyncFactory}function Pe(t,e,n){var i,o=Object.keys(e).length>0,s=t?!!t.$stable:!o,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(s&&n&&n!==r&&a===n.$key&&!o&&!n.$hasNormal)return n;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=Ue(e,c,t[c]))}else i={};for(var u in e)u in i||(i[u]=Fe(e,u));return t&&Object.isExtensible(t)&&(t._normalized=i),K(i,"$stable",s),K(i,"$key",a),K(i,"$hasNormal",o),i}function Ue(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:Ie(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!Le(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Fe(t,e){return function(){return t[e]}}function $e(t,e){var n,r,i,s,a;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))if(dt&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),l=c.next();while(!l.done)n.push(e(l.value,n.length)),l=c.next()}else for(s=Object.keys(t),n=new Array(s.length),r=0,i=s.length;r<i;r++)a=s[r],n[r]=e(t[a],a,r);return o(n)||(n=[]),n._isVList=!0,n}function Be(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=O(O({},r),n)),i=o(n)||("function"===typeof e?e():e)):i=this.$slots[t]||("function"===typeof e?e():e);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function Ve(t){return Yt(this.$options,"filters",t,!0)||P}function je(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function qe(t,e,n,r,i){var o=q.keyCodes[e]||n;return i&&r&&!q.keyCodes[e]?je(i,r):o?je(o,t):r?I(r)!==e:void 0===t}function He(t,e,n,r,i){if(n)if(u(n)){var o;Array.isArray(n)&&(n=D(n));var s=function(s){if("class"===s||"style"===s||y(s))o=t;else{var a=t.attrs&&t.attrs.type;o=r||q.mustUseProp(e,a,s)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=C(s),u=I(s);if(!(c in o)&&!(u in o)&&(o[s]=n[s],i)){var l=t.on||(t.on={});l["update:"+s]=function(t){n[s]=t}}};for(var a in n)s(a)}else;return t}function ze(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ge(r,"__static__"+t,!1)),r}function Ke(t,e,n){return Ge(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ge(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&We(t[r],e+"_"+r,n);else We(t,e,n)}function We(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Xe(t,e){if(e)if(h(e)){var n=t.on=t.on?O({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function Ye(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var o=t[i];Array.isArray(o)?Ye(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return r&&(e.$key=r),e}function Qe(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Je(t,e){return"string"===typeof t?e+t:t}function Ze(t){t._o=Ke,t._n=m,t._s=g,t._l=$e,t._t=Be,t._q=U,t._i=F,t._m=ze,t._f=Ve,t._k=qe,t._b=He,t._v=Tt,t._e=Et,t._u=Ye,t._g=Xe,t._d=Qe,t._p=Je}function tn(t,e,n,i,o){var a,c=this,u=o.options;_(i,"_uid")?(a=Object.create(i),a._original=i):(a=i,i=i._original);var l=s(u._compiled),h=!l;this.data=t,this.props=e,this.children=n,this.parent=i,this.listeners=t.on||r,this.injections=Oe(u.inject,i),this.slots=function(){return c.$slots||Pe(t.scopedSlots,c.$slots=De(n,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Pe(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Pe(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var o=pn(a,t,e,n,r,h);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,r){return pn(a,t,e,n,r,h)}}function en(t,e,n,i,s){var a=t.options,c={},u=a.props;if(o(u))for(var l in u)c[l]=Qt(l,u,e||r);else o(n.attrs)&&rn(c,n.attrs),o(n.props)&&rn(c,n.props);var h=new tn(n,c,s,i,t),f=a.render.call(null,h._c,h);if(f instanceof bt)return nn(f,n,h.parent,a,h);if(Array.isArray(f)){for(var d=Ie(f)||[],p=new Array(d.length),g=0;g<d.length;g++)p[g]=nn(d[g],n,h.parent,a,h);return p}}function nn(t,e,n,r,i){var o=Ct(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function rn(t,e){for(var n in e)t[C(n)]=e[n]}Ze(tn.prototype);var on={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;on.prepatch(n,n)}else{var r=t.componentInstance=cn(t,On);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Un(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Vn(n,"mounted")),t.data.keepAlive&&(e._isMounted?tr(n):$n(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Bn(e,!0):e.$destroy())}},sn=Object.keys(on);function an(t,e,n,r,a){if(!i(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var l;if(i(t.cid)&&(l=t,t=Cn(l,c),void 0===t))return Tn(l,e,n,r,a);e=e||{},Tr(t),o(e.model)&&hn(t.options,e);var h=Ce(e,t,a);if(s(t.options.functional))return en(t,h,e,n,r);var f=e.on;if(e.on=e.nativeOn,s(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}un(e);var p=t.options.name||a,g=new bt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:f,tag:a,children:r},l);return g}}}function cn(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function un(t){for(var e=t.hook||(t.hook={}),n=0;n<sn.length;n++){var r=sn[n],i=e[r],o=on[r];i===o||i&&i._merged||(e[r]=i?ln(o,i):o)}}function ln(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function hn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),s=i[r],a=e.model.callback;o(s)?(Array.isArray(s)?-1===s.indexOf(a):s!==a)&&(i[r]=[a].concat(s)):i[r]=a}var fn=1,dn=2;function pn(t,e,n,r,i,o){return(Array.isArray(n)||c(n))&&(i=r,r=n,n=void 0),s(o)&&(i=dn),gn(t,e,n,r,i)}function gn(t,e,n,r,i){if(o(n)&&o(n.__ob__))return Et();if(o(n)&&o(n.is)&&(e=n.is),!e)return Et();var s,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===dn?r=Ie(r):i===fn&&(r=Se(r)),"string"===typeof e)?(a=t.$vnode&&t.$vnode.ns||q.getTagNamespace(e),s=q.isReservedTag(e)?new bt(q.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(c=Yt(t.$options,"components",e))?new bt(e,n,r,void 0,void 0,t):an(c,n,t,r,e)):s=an(e,n,t,r);return Array.isArray(s)?s:o(s)?(o(a)&&mn(s,a),o(n)&&vn(n),s):Et()}function mn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var r=0,a=t.children.length;r<a;r++){var c=t.children[r];o(c.tag)&&(i(c.ns)||s(n)&&"svg"!==c.tag)&&mn(c,e,n)}}function vn(t){u(t.style)&&ye(t.style),u(t.class)&&ye(t.class)}function yn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,i=n&&n.context;t.$slots=De(e._renderChildren,i),t.$scopedSlots=r,t._c=function(e,n,r,i){return pn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return pn(t,e,n,r,i,!0)};var o=n&&n.data;Lt(t,"$attrs",o&&o.attrs||r,null,!0),Lt(t,"$listeners",e._parentListeners||r,null,!0)}var wn,bn=null;function _n(t){Ze(t.prototype),t.prototype.$nextTick=function(t){return me(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=Pe(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{bn=e,t=r.call(e._renderProxy,e.$createElement)}catch(As){re(As,e,"render"),t=e._vnode}finally{bn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof bt||(t=Et()),t.parent=i,t}}function En(t,e){return(t.__esModule||dt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function Tn(t,e,n,r,i){var o=Et();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function Cn(t,e){if(s(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=bn;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),s(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var r=t.owners=[n],a=!0,c=null,l=null;n.$on("hook:destroyed",(function(){return w(r,n)}));var h=function(t){for(var e=0,n=r.length;e<n;e++)r[e].$forceUpdate();t&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==l&&(clearTimeout(l),l=null))},f=$((function(n){t.resolved=En(n,e),a?r.length=0:h(!0)})),d=$((function(e){o(t.errorComp)&&(t.error=!0,h(!0))})),g=t(f,d);return u(g)&&(p(g)?i(t.resolved)&&g.then(f,d):p(g.component)&&(g.component.then(f,d),o(g.error)&&(t.errorComp=En(g.error,e)),o(g.loading)&&(t.loadingComp=En(g.loading,e),0===g.delay?t.loading=!0:c=setTimeout((function(){c=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,h(!1))}),g.delay||200)),o(g.timeout)&&(l=setTimeout((function(){l=null,i(t.resolved)&&d(null)}),g.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function An(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||Le(n)))return n}}function Sn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Rn(t,e)}function In(t,e){wn.$on(t,e)}function kn(t,e){wn.$off(t,e)}function xn(t,e){var n=wn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function Rn(t,e,n){wn=t,Ee(e,n||{},In,kn,xn,t),wn=void 0}function Nn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,o=t.length;i<o;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var o,s=n._events[t];if(!s)return n;if(!e)return n._events[t]=null,n;var a=s.length;while(a--)if(o=s[a],o===e||o.fn===e){s.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?N(n):n;for(var r=N(arguments,1),i='event handler for "'+t+'"',o=0,s=n.length;o<s;o++)ie(n[o],e,r,e,i)}return e}}var On=null;function Dn(t){var e=On;return On=t,function(){On=e}}function Mn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Ln(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=Dn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Vn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||w(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Vn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Pn(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=Et),Vn(t,"beforeMount"),r=function(){t._update(t._render(),n)},new ir(t,r,M,{before:function(){t._isMounted&&!t._isDestroyed&&Vn(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,Vn(t,"mounted")),t}function Un(t,e,n,i,o){var s=i.data.scopedSlots,a=t.$scopedSlots,c=!!(s&&!s.$stable||a!==r&&!a.$stable||s&&t.$scopedSlots.$key!==s.$key||!s&&t.$scopedSlots.$key),u=!!(o||t.$options._renderChildren||c);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o,t.$attrs=i.data.attrs||r,t.$listeners=n||r,e&&t.$options.props){Rt(!1);for(var l=t._props,h=t.$options._propKeys||[],f=0;f<h.length;f++){var d=h[f],p=t.$options.props;l[d]=Qt(d,p,e,t)}Rt(!0),t.$options.propsData=e}n=n||r;var g=t.$options._parentListeners;t.$options._parentListeners=n,Rn(t,n,g),u&&(t.$slots=De(o,i.context),t.$forceUpdate())}function Fn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function $n(t,e){if(e){if(t._directInactive=!1,Fn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)$n(t.$children[n]);Vn(t,"activated")}}function Bn(t,e){if((!e||(t._directInactive=!0,!Fn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Bn(t.$children[n]);Vn(t,"deactivated")}}function Vn(t,e){yt();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,o=n.length;i<o;i++)ie(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),wt()}var jn=[],qn=[],Hn={},zn=!1,Kn=!1,Gn=0;function Wn(){Gn=jn.length=qn.length=0,Hn={},zn=Kn=!1}var Xn=0,Yn=Date.now;if(Q&&!et){var Qn=window.performance;Qn&&"function"===typeof Qn.now&&Yn()>document.createEvent("Event").timeStamp&&(Yn=function(){return Qn.now()})}function Jn(){var t,e;for(Xn=Yn(),Kn=!0,jn.sort((function(t,e){return t.id-e.id})),Gn=0;Gn<jn.length;Gn++)t=jn[Gn],t.before&&t.before(),e=t.id,Hn[e]=null,t.run();var n=qn.slice(),r=jn.slice();Wn(),er(n),Zn(r),lt&&q.devtools&&lt.emit("flush")}function Zn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Vn(r,"updated")}}function tr(t){t._inactive=!1,qn.push(t)}function er(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,$n(t[e],!0)}function nr(t){var e=t.id;if(null==Hn[e]){if(Hn[e]=!0,Kn){var n=jn.length-1;while(n>Gn&&jn[n].id>t.id)n--;jn.splice(n+1,0,t)}else jn.push(t);zn||(zn=!0,me(Jn))}}var rr=0,ir=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++rr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ft,this.newDepIds=new ft,this.expression="","function"===typeof e?this.getter=e:(this.getter=W(e),this.getter||(this.getter=M)),this.value=this.lazy?void 0:this.get()};ir.prototype.get=function(){var t;yt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(As){if(!this.user)throw As;re(As,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ye(t),wt(),this.cleanupDeps()}return t},ir.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},ir.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},ir.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():nr(this)},ir.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';ie(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},ir.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ir.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},ir.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||w(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var or={enumerable:!0,configurable:!0,get:M,set:M};function sr(t,e,n){or.get=function(){return this[e][n]},or.set=function(t){this[e][n]=t},Object.defineProperty(t,n,or)}function ar(t){t._watchers=[];var e=t.$options;e.props&&cr(t,e.props),e.methods&&mr(t,e.methods),e.data?ur(t):Mt(t._data={},!0),e.computed&&fr(t,e.computed),e.watch&&e.watch!==st&&vr(t,e.watch)}function cr(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;o||Rt(!1);var s=function(o){i.push(o);var s=Qt(o,e,n,t);Lt(r,o,s),o in t||sr(t,"_props",o)};for(var a in e)s(a);Rt(!0)}function ur(t){var e=t.$options.data;e=t._data="function"===typeof e?lr(e,t):e||{},h(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&_(r,o)||z(o)||sr(t,"_data",o)}Mt(e,!0)}function lr(t,e){yt();try{return t.call(e,e)}catch(As){return re(As,e,"data()"),{}}finally{wt()}}var hr={lazy:!0};function fr(t,e){var n=t._computedWatchers=Object.create(null),r=ut();for(var i in e){var o=e[i],s="function"===typeof o?o:o.get;0,r||(n[i]=new ir(t,s||M,M,hr)),i in t||dr(t,i,o)}}function dr(t,e,n){var r=!ut();"function"===typeof n?(or.get=r?pr(e):gr(n),or.set=M):(or.get=n.get?r&&!1!==n.cache?pr(e):gr(n.get):M,or.set=n.set||M),Object.defineProperty(t,e,or)}function pr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),mt.target&&e.depend(),e.value}}function gr(t){return function(){return t.call(this,this)}}function mr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?M:R(e[n],t)}function vr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)yr(t,n,r[i]);else yr(t,n,r)}}function yr(t,e,n,r){return h(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function wr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Pt,t.prototype.$delete=Ut,t.prototype.$watch=function(t,e,n){var r=this;if(h(e))return yr(r,t,e,n);n=n||{},n.user=!0;var i=new ir(r,t,e,n);if(n.immediate){var o='callback for immediate watcher "'+i.expression+'"';yt(),ie(e,r,[i.value],r,o),wt()}return function(){i.teardown()}}}var br=0;function _r(t){t.prototype._init=function(t){var e=this;e._uid=br++,e._isVue=!0,t&&t._isComponent?Er(e,t):e.$options=Xt(Tr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Mn(e),Sn(e),yn(e),Vn(e,"beforeCreate"),Ne(e),ar(e),Re(e),Vn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Er(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Tr(t){var e=t.options;if(t.super){var n=Tr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Cr(t);i&&O(t.extendOptions,i),e=t.options=Xt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Cr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Ar(t){this._init(t)}function Sr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=N(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Ir(t){t.mixin=function(t){return this.options=Xt(this.options,t),this}}function kr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name;var s=function(t){this._init(t)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=e++,s.options=Xt(n.options,t),s["super"]=n,s.options.props&&xr(s),s.options.computed&&Rr(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,V.forEach((function(t){s[t]=n[t]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=t,s.sealedOptions=O({},s.options),i[r]=s,s}}function xr(t){var e=t.options.props;for(var n in e)sr(t.prototype,"_props",n)}function Rr(t){var e=t.options.computed;for(var n in e)dr(t.prototype,n,e[n])}function Nr(t){V.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&h(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function Or(t){return t&&(t.Ctor.options.name||t.tag)}function Dr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!f(t)&&t.test(e)}function Mr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!e(a)&&Lr(n,o,r,i)}}}function Lr(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,w(n,e)}_r(Ar),wr(Ar),Nn(Ar),Ln(Ar),_n(Ar);var Pr=[String,RegExp,Array],Ur={name:"keep-alive",abstract:!0,props:{include:Pr,exclude:Pr,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;e[i]={name:Or(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&Lr(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Lr(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Mr(t,(function(t){return Dr(e,t)}))})),this.$watch("exclude",(function(e){Mr(t,(function(t){return!Dr(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=An(t),n=e&&e.componentOptions;if(n){var r=Or(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!Dr(o,r))||s&&r&&Dr(s,r))return e;var a=this,c=a.cache,u=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,w(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},Fr={KeepAlive:Ur};function $r(t){var e={get:function(){return q}};Object.defineProperty(t,"config",e),t.util={warn:pt,extend:O,mergeOptions:Xt,defineReactive:Lt},t.set=Pt,t.delete=Ut,t.nextTick=me,t.observable=function(t){return Mt(t),t},t.options=Object.create(null),V.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,O(t.options.components,Fr),Sr(t),Ir(t),kr(t),Nr(t)}$r(Ar),Object.defineProperty(Ar.prototype,"$isServer",{get:ut}),Object.defineProperty(Ar.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Ar,"FunctionalRenderContext",{value:tn}),Ar.version="2.6.14";var Br=v("style,class"),Vr=v("input,textarea,option,select,progress"),jr=function(t,e,n){return"value"===n&&Vr(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},qr=v("contenteditable,draggable,spellcheck"),Hr=v("events,caret,typing,plaintext-only"),zr=function(t,e){return Yr(e)||"false"===e?"false":"contenteditable"===t&&Hr(e)?e:"true"},Kr=v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Gr="http://www.w3.org/1999/xlink",Wr=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Xr=function(t){return Wr(t)?t.slice(6,t.length):""},Yr=function(t){return null==t||!1===t};function Qr(t){var e=t.data,n=t,r=t;while(o(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Jr(r.data,e));while(o(n=n.parent))n&&n.data&&(e=Jr(e,n.data));return Zr(e.staticClass,e.class)}function Jr(t,e){return{staticClass:ti(t.staticClass,e.staticClass),class:o(t.class)?[t.class,e.class]:e.class}}function Zr(t,e){return o(t)||o(e)?ti(t,ei(e)):""}function ti(t,e){return t?e?t+" "+e:t:e||""}function ei(t){return Array.isArray(t)?ni(t):u(t)?ri(t):"string"===typeof t?t:""}function ni(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=ei(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function ri(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var ii={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},oi=v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),si=v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ai=function(t){return oi(t)||si(t)};function ci(t){return si(t)?"svg":"math"===t?"math":void 0}var ui=Object.create(null);function li(t){if(!Q)return!0;if(ai(t))return!1;if(t=t.toLowerCase(),null!=ui[t])return ui[t];var e=document.createElement(t);return t.indexOf("-")>-1?ui[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:ui[t]=/HTMLUnknownElement/.test(e.toString())}var hi=v("text,number,password,search,email,tel,url");function fi(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function di(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function pi(t,e){return document.createElementNS(ii[t],e)}function gi(t){return document.createTextNode(t)}function mi(t){return document.createComment(t)}function vi(t,e,n){t.insertBefore(e,n)}function yi(t,e){t.removeChild(e)}function wi(t,e){t.appendChild(e)}function bi(t){return t.parentNode}function _i(t){return t.nextSibling}function Ei(t){return t.tagName}function Ti(t,e){t.textContent=e}function Ci(t,e){t.setAttribute(e,"")}var Ai=Object.freeze({createElement:di,createElementNS:pi,createTextNode:gi,createComment:mi,insertBefore:vi,removeChild:yi,appendChild:wi,parentNode:bi,nextSibling:_i,tagName:Ei,setTextContent:Ti,setStyleScope:Ci}),Si={create:function(t,e){Ii(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Ii(t,!0),Ii(e))},destroy:function(t){Ii(t,!0)}};function Ii(t,e){var n=t.data.ref;if(o(n)){var r=t.context,i=t.componentInstance||t.elm,s=r.$refs;e?Array.isArray(s[n])?w(s[n],i):s[n]===i&&(s[n]=void 0):t.data.refInFor?Array.isArray(s[n])?s[n].indexOf(i)<0&&s[n].push(i):s[n]=[i]:s[n]=i}}var ki=new bt("",{},[]),xi=["create","activate","update","remove","destroy"];function Ri(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&o(t.data)===o(e.data)&&Ni(t,e)||s(t.isAsyncPlaceholder)&&i(e.asyncFactory.error))}function Ni(t,e){if("input"!==t.tag)return!0;var n,r=o(n=t.data)&&o(n=n.attrs)&&n.type,i=o(n=e.data)&&o(n=n.attrs)&&n.type;return r===i||hi(r)&&hi(i)}function Oi(t,e,n){var r,i,s={};for(r=e;r<=n;++r)i=t[r].key,o(i)&&(s[i]=r);return s}function Di(t){var e,n,r={},a=t.modules,u=t.nodeOps;for(e=0;e<xi.length;++e)for(r[xi[e]]=[],n=0;n<a.length;++n)o(a[n][xi[e]])&&r[xi[e]].push(a[n][xi[e]]);function l(t){return new bt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function h(t,e){function n(){0===--n.listeners&&f(t)}return n.listeners=e,n}function f(t){var e=u.parentNode(t);o(e)&&u.removeChild(e,t)}function d(t,e,n,r,i,a,c){if(o(t.elm)&&o(a)&&(t=a[c]=Ct(t)),t.isRootInsert=!i,!p(t,e,n,r)){var l=t.data,h=t.children,f=t.tag;o(f)?(t.elm=t.ns?u.createElementNS(t.ns,f):u.createElement(f,t),E(t),w(t,h,e),o(l)&&_(t,e),y(n,t.elm,r)):s(t.isComment)?(t.elm=u.createComment(t.text),y(n,t.elm,r)):(t.elm=u.createTextNode(t.text),y(n,t.elm,r))}}function p(t,e,n,r){var i=t.data;if(o(i)){var a=o(t.componentInstance)&&i.keepAlive;if(o(i=i.hook)&&o(i=i.init)&&i(t,!1),o(t.componentInstance))return g(t,e),y(n,t.elm,r),s(a)&&m(t,e,n,r),!0}}function g(t,e){o(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,b(t)?(_(t,e),E(t)):(Ii(t),e.push(t))}function m(t,e,n,i){var s,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,o(s=a.data)&&o(s=s.transition)){for(s=0;s<r.activate.length;++s)r.activate[s](ki,a);e.push(a);break}y(n,t.elm,i)}function y(t,e,n){o(t)&&(o(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function w(t,e,n){if(Array.isArray(e)){0;for(var r=0;r<e.length;++r)d(e[r],n,t.elm,null,!0,e,r)}else c(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function b(t){while(t.componentInstance)t=t.componentInstance._vnode;return o(t.tag)}function _(t,n){for(var i=0;i<r.create.length;++i)r.create[i](ki,t);e=t.data.hook,o(e)&&(o(e.create)&&e.create(ki,t),o(e.insert)&&n.push(t))}function E(t){var e;if(o(e=t.fnScopeId))u.setStyleScope(t.elm,e);else{var n=t;while(n)o(e=n.context)&&o(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent}o(e=On)&&e!==t.context&&e!==t.fnContext&&o(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function T(t,e,n,r,i,o){for(;r<=i;++r)d(n[r],o,t,e,!1,n,r)}function C(t){var e,n,i=t.data;if(o(i))for(o(e=i.hook)&&o(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(o(e=t.children))for(n=0;n<t.children.length;++n)C(t.children[n])}function A(t,e,n){for(;e<=n;++e){var r=t[e];o(r)&&(o(r.tag)?(S(r),C(r)):f(r.elm))}}function S(t,e){if(o(e)||o(t.data)){var n,i=r.remove.length+1;for(o(e)?e.listeners+=i:e=h(t.elm,i),o(n=t.componentInstance)&&o(n=n._vnode)&&o(n.data)&&S(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);o(n=t.data.hook)&&o(n=n.remove)?n(t,e):e()}else f(t.elm)}function I(t,e,n,r,s){var a,c,l,h,f=0,p=0,g=e.length-1,m=e[0],v=e[g],y=n.length-1,w=n[0],b=n[y],_=!s;while(f<=g&&p<=y)i(m)?m=e[++f]:i(v)?v=e[--g]:Ri(m,w)?(x(m,w,r,n,p),m=e[++f],w=n[++p]):Ri(v,b)?(x(v,b,r,n,y),v=e[--g],b=n[--y]):Ri(m,b)?(x(m,b,r,n,y),_&&u.insertBefore(t,m.elm,u.nextSibling(v.elm)),m=e[++f],b=n[--y]):Ri(v,w)?(x(v,w,r,n,p),_&&u.insertBefore(t,v.elm,m.elm),v=e[--g],w=n[++p]):(i(a)&&(a=Oi(e,f,g)),c=o(w.key)?a[w.key]:k(w,e,f,g),i(c)?d(w,r,t,m.elm,!1,n,p):(l=e[c],Ri(l,w)?(x(l,w,r,n,p),e[c]=void 0,_&&u.insertBefore(t,l.elm,m.elm)):d(w,r,t,m.elm,!1,n,p)),w=n[++p]);f>g?(h=i(n[y+1])?null:n[y+1].elm,T(t,h,n,p,y,r)):p>y&&A(e,f,g)}function k(t,e,n,r){for(var i=n;i<r;i++){var s=e[i];if(o(s)&&Ri(t,s))return i}}function x(t,e,n,a,c,l){if(t!==e){o(e.elm)&&o(a)&&(e=a[c]=Ct(e));var h=e.elm=t.elm;if(s(t.isAsyncPlaceholder))o(e.asyncFactory.resolved)?O(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(s(e.isStatic)&&s(t.isStatic)&&e.key===t.key&&(s(e.isCloned)||s(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,d=e.data;o(d)&&o(f=d.hook)&&o(f=f.prepatch)&&f(t,e);var p=t.children,g=e.children;if(o(d)&&b(e)){for(f=0;f<r.update.length;++f)r.update[f](t,e);o(f=d.hook)&&o(f=f.update)&&f(t,e)}i(e.text)?o(p)&&o(g)?p!==g&&I(h,p,g,n,l):o(g)?(o(t.text)&&u.setTextContent(h,""),T(h,null,g,0,g.length-1,n)):o(p)?A(p,0,p.length-1):o(t.text)&&u.setTextContent(h,""):t.text!==e.text&&u.setTextContent(h,e.text),o(d)&&o(f=d.hook)&&o(f=f.postpatch)&&f(t,e)}}}function R(t,e,n){if(s(n)&&o(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var N=v("attrs,class,staticClass,staticStyle,key");function O(t,e,n,r){var i,a=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,s(e.isComment)&&o(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(o(c)&&(o(i=c.hook)&&o(i=i.init)&&i(e,!0),o(i=e.componentInstance)))return g(e,n),!0;if(o(a)){if(o(u))if(t.hasChildNodes())if(o(i=c)&&o(i=i.domProps)&&o(i=i.innerHTML)){if(i!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,f=0;f<u.length;f++){if(!h||!O(h,u[f],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else w(e,u,n);if(o(c)){var d=!1;for(var p in c)if(!N(p)){d=!0,_(e,n);break}!d&&c["class"]&&ye(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,a){if(!i(e)){var c=!1,h=[];if(i(t))c=!0,d(e,h);else{var f=o(t.nodeType);if(!f&&Ri(t,e))x(t,e,h,null,null,a);else{if(f){if(1===t.nodeType&&t.hasAttribute(B)&&(t.removeAttribute(B),n=!0),s(n)&&O(t,e,h))return R(e,h,!0),t;t=l(t)}var p=t.elm,g=u.parentNode(p);if(d(e,h,p._leaveCb?null:g,u.nextSibling(p)),o(e.parent)){var m=e.parent,v=b(e);while(m){for(var y=0;y<r.destroy.length;++y)r.destroy[y](m);if(m.elm=e.elm,v){for(var w=0;w<r.create.length;++w)r.create[w](ki,m);var _=m.data.hook.insert;if(_.merged)for(var E=1;E<_.fns.length;E++)_.fns[E]()}else Ii(m);m=m.parent}}o(g)?A([t],0,0):o(t.tag)&&C(t)}}return R(e,h,c),e.elm}o(t)&&C(t)}}var Mi={create:Li,update:Li,destroy:function(t){Li(t,ki)}};function Li(t,e){(t.data.directives||e.data.directives)&&Pi(t,e)}function Pi(t,e){var n,r,i,o=t===ki,s=e===ki,a=Fi(t.data.directives,t.context),c=Fi(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,Bi(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(Bi(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)Bi(u[n],"inserted",e,t)};o?Te(e,"insert",h):h()}if(l.length&&Te(e,"postpatch",(function(){for(var n=0;n<l.length;n++)Bi(l[n],"componentUpdated",e,t)})),!o)for(n in a)c[n]||Bi(a[n],"unbind",t,t,s)}var Ui=Object.create(null);function Fi(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++)r=t[n],r.modifiers||(r.modifiers=Ui),i[$i(r)]=r,r.def=Yt(e.$options,"directives",r.name,!0);return i}function $i(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Bi(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(As){re(As,n.context,"directive "+t.name+" "+e+" hook")}}var Vi=[Si,Mi];function ji(t,e){var n=e.componentOptions;if((!o(n)||!1!==n.Ctor.options.inheritAttrs)&&(!i(t.data.attrs)||!i(e.data.attrs))){var r,s,a,c=e.elm,u=t.data.attrs||{},l=e.data.attrs||{};for(r in o(l.__ob__)&&(l=e.data.attrs=O({},l)),l)s=l[r],a=u[r],a!==s&&qi(c,r,s,e.data.pre);for(r in(et||rt)&&l.value!==u.value&&qi(c,"value",l.value),u)i(l[r])&&(Wr(r)?c.removeAttributeNS(Gr,Xr(r)):qr(r)||c.removeAttribute(r))}}function qi(t,e,n,r){r||t.tagName.indexOf("-")>-1?Hi(t,e,n):Kr(e)?Yr(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):qr(e)?t.setAttribute(e,zr(e,n)):Wr(e)?Yr(n)?t.removeAttributeNS(Gr,Xr(e)):t.setAttributeNS(Gr,e,n):Hi(t,e,n)}function Hi(t,e,n){if(Yr(n))t.removeAttribute(e);else{if(et&&!nt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var zi={create:ji,update:ji};function Ki(t,e){var n=e.elm,r=e.data,s=t.data;if(!(i(r.staticClass)&&i(r.class)&&(i(s)||i(s.staticClass)&&i(s.class)))){var a=Qr(e),c=n._transitionClasses;o(c)&&(a=ti(a,ei(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Gi,Wi={create:Ki,update:Ki},Xi="__r",Yi="__c";function Qi(t){if(o(t[Xi])){var e=et?"change":"input";t[e]=[].concat(t[Xi],t[e]||[]),delete t[Xi]}o(t[Yi])&&(t.change=[].concat(t[Yi],t.change||[]),delete t[Yi])}function Ji(t,e,n){var r=Gi;return function i(){var o=e.apply(null,arguments);null!==o&&eo(t,i,n,r)}}var Zi=ce&&!(ot&&Number(ot[1])<=53);function to(t,e,n,r){if(Zi){var i=Xn,o=e;e=o._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return o.apply(this,arguments)}}Gi.addEventListener(t,e,at?{capture:n,passive:r}:n)}function eo(t,e,n,r){(r||Gi).removeEventListener(t,e._wrapper||e,n)}function no(t,e){if(!i(t.data.on)||!i(e.data.on)){var n=e.data.on||{},r=t.data.on||{};Gi=e.elm,Qi(n),Ee(n,r,to,eo,Ji,e.context),Gi=void 0}}var ro,io={create:no,update:no};function oo(t,e){if(!i(t.data.domProps)||!i(e.data.domProps)){var n,r,s=e.elm,a=t.data.domProps||{},c=e.data.domProps||{};for(n in o(c.__ob__)&&(c=e.data.domProps=O({},c)),a)n in c||(s[n]="");for(n in c){if(r=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),r===a[n])continue;1===s.childNodes.length&&s.removeChild(s.childNodes[0])}if("value"===n&&"PROGRESS"!==s.tagName){s._value=r;var u=i(r)?"":String(r);so(s,u)&&(s.value=u)}else if("innerHTML"===n&&si(s.tagName)&&i(s.innerHTML)){ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+r+"</svg>";var l=ro.firstChild;while(s.firstChild)s.removeChild(s.firstChild);while(l.firstChild)s.appendChild(l.firstChild)}else if(r!==a[n])try{s[n]=r}catch(As){}}}}function so(t,e){return!t.composing&&("OPTION"===t.tagName||ao(t,e)||co(t,e))}function ao(t,e){var n=!0;try{n=document.activeElement!==t}catch(As){}return n&&t.value!==e}function co(t,e){var n=t.value,r=t._vModifiers;if(o(r)){if(r.number)return m(n)!==m(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var uo={create:oo,update:oo},lo=E((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function ho(t){var e=fo(t.style);return t.staticStyle?O(t.staticStyle,e):e}function fo(t){return Array.isArray(t)?D(t):"string"===typeof t?lo(t):t}function po(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=ho(i.data))&&O(r,n)}(n=ho(t.data))&&O(r,n);var o=t;while(o=o.parent)o.data&&(n=ho(o.data))&&O(r,n);return r}var go,mo=/^--/,vo=/\s*!important$/,yo=function(t,e,n){if(mo.test(e))t.style.setProperty(e,n);else if(vo.test(n))t.style.setProperty(I(e),n.replace(vo,""),"important");else{var r=bo(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},wo=["Webkit","Moz","ms"],bo=E((function(t){if(go=go||document.createElement("div").style,t=C(t),"filter"!==t&&t in go)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<wo.length;n++){var r=wo[n]+e;if(r in go)return r}}));function _o(t,e){var n=e.data,r=t.data;if(!(i(n.staticStyle)&&i(n.style)&&i(r.staticStyle)&&i(r.style))){var s,a,c=e.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},h=u||l,f=fo(e.data.style)||{};e.data.normalizedStyle=o(f.__ob__)?O({},f):f;var d=po(e,!0);for(a in h)i(d[a])&&yo(c,a,"");for(a in d)s=d[a],s!==h[a]&&yo(c,a,null==s?"":s)}}var Eo={create:_o,update:_o},To=/\s+/;function Co(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(To).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Ao(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(To).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function So(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&O(e,Io(t.name||"v")),O(e,t),e}return"string"===typeof t?Io(t):void 0}}var Io=E((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),ko=Q&&!nt,xo="transition",Ro="animation",No="transition",Oo="transitionend",Do="animation",Mo="animationend";ko&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(No="WebkitTransition",Oo="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Do="WebkitAnimation",Mo="webkitAnimationEnd"));var Lo=Q?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Po(t){Lo((function(){Lo(t)}))}function Uo(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Co(t,e))}function Fo(t,e){t._transitionClasses&&w(t._transitionClasses,e),Ao(t,e)}function $o(t,e,n){var r=Vo(t,e),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===xo?Oo:Mo,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=s&&u()};setTimeout((function(){c<s&&u()}),o+1),t.addEventListener(a,l)}var Bo=/\b(transform|all)(,|$)/;function Vo(t,e){var n,r=window.getComputedStyle(t),i=(r[No+"Delay"]||"").split(", "),o=(r[No+"Duration"]||"").split(", "),s=jo(i,o),a=(r[Do+"Delay"]||"").split(", "),c=(r[Do+"Duration"]||"").split(", "),u=jo(a,c),l=0,h=0;e===xo?s>0&&(n=xo,l=s,h=o.length):e===Ro?u>0&&(n=Ro,l=u,h=c.length):(l=Math.max(s,u),n=l>0?s>u?xo:Ro:null,h=n?n===xo?o.length:c.length:0);var f=n===xo&&Bo.test(r[No+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:f}}function jo(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return qo(e)+qo(t[n])})))}function qo(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Ho(t,e){var n=t.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=So(t.data.transition);if(!i(r)&&!o(n._enterCb)&&1===n.nodeType){var s=r.css,a=r.type,c=r.enterClass,l=r.enterToClass,h=r.enterActiveClass,f=r.appearClass,d=r.appearToClass,p=r.appearActiveClass,g=r.beforeEnter,v=r.enter,y=r.afterEnter,w=r.enterCancelled,b=r.beforeAppear,_=r.appear,E=r.afterAppear,T=r.appearCancelled,C=r.duration,A=On,S=On.$vnode;while(S&&S.parent)A=S.context,S=S.parent;var I=!A._isMounted||!t.isRootInsert;if(!I||_||""===_){var k=I&&f?f:c,x=I&&p?p:h,R=I&&d?d:l,N=I&&b||g,O=I&&"function"===typeof _?_:v,D=I&&E||y,M=I&&T||w,L=m(u(C)?C.enter:C);0;var P=!1!==s&&!nt,U=Go(O),F=n._enterCb=$((function(){P&&(Fo(n,R),Fo(n,x)),F.cancelled?(P&&Fo(n,k),M&&M(n)):D&&D(n),n._enterCb=null}));t.data.show||Te(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),O&&O(n,F)})),N&&N(n),P&&(Uo(n,k),Uo(n,x),Po((function(){Fo(n,k),F.cancelled||(Uo(n,R),U||(Ko(L)?setTimeout(F,L):$o(n,a,F)))}))),t.data.show&&(e&&e(),O&&O(n,F)),P||U||F()}}}function zo(t,e){var n=t.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=So(t.data.transition);if(i(r)||1!==n.nodeType)return e();if(!o(n._leaveCb)){var s=r.css,a=r.type,c=r.leaveClass,l=r.leaveToClass,h=r.leaveActiveClass,f=r.beforeLeave,d=r.leave,p=r.afterLeave,g=r.leaveCancelled,v=r.delayLeave,y=r.duration,w=!1!==s&&!nt,b=Go(d),_=m(u(y)?y.leave:y);0;var E=n._leaveCb=$((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),w&&(Fo(n,l),Fo(n,h)),E.cancelled?(w&&Fo(n,c),g&&g(n)):(e(),p&&p(n)),n._leaveCb=null}));v?v(T):T()}function T(){E.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),f&&f(n),w&&(Uo(n,c),Uo(n,h),Po((function(){Fo(n,c),E.cancelled||(Uo(n,l),b||(Ko(_)?setTimeout(E,_):$o(n,a,E)))}))),d&&d(n,E),w||b||E())}}function Ko(t){return"number"===typeof t&&!isNaN(t)}function Go(t){if(i(t))return!1;var e=t.fns;return o(e)?Go(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Wo(t,e){!0!==e.data.show&&Ho(e)}var Xo=Q?{create:Wo,activate:Wo,remove:function(t,e){!0!==t.data.show?zo(t,e):e()}}:{},Yo=[zi,Wi,io,uo,Eo,Xo],Qo=Yo.concat(Vi),Jo=Di({nodeOps:Ai,modules:Qo});nt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&ss(t,"input")}));var Zo={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Te(n,"postpatch",(function(){Zo.componentUpdated(t,e,n)})):ts(t,e,n.context),t._vOptions=[].map.call(t.options,rs)):("textarea"===n.tag||hi(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",is),t.addEventListener("compositionend",os),t.addEventListener("change",os),nt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){ts(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,rs);if(i.some((function(t,e){return!U(t,r[e])}))){var o=t.multiple?e.value.some((function(t){return ns(t,i)})):e.value!==e.oldValue&&ns(e.value,i);o&&ss(t,"change")}}}};function ts(t,e,n){es(t,e,n),(et||rt)&&setTimeout((function(){es(t,e,n)}),0)}function es(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=t.options.length;a<c;a++)if(s=t.options[a],i)o=F(r,rs(s))>-1,s.selected!==o&&(s.selected=o);else if(U(rs(s),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function ns(t,e){return e.every((function(e){return!U(e,t)}))}function rs(t){return"_value"in t?t._value:t.value}function is(t){t.target.composing=!0}function os(t){t.target.composing&&(t.target.composing=!1,ss(t.target,"input"))}function ss(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function as(t){return!t.componentInstance||t.data&&t.data.transition?t:as(t.componentInstance._vnode)}var cs={bind:function(t,e,n){var r=e.value;n=as(n);var i=n.data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,Ho(n,(function(){t.style.display=o}))):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=as(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?Ho(n,(function(){t.style.display=t.__vOriginalDisplay})):zo(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},us={model:Zo,show:cs},ls={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function hs(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?hs(An(e.children)):t}function fs(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var o in i)e[C(o)]=i[o];return e}function ds(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function ps(t){while(t=t.parent)if(t.data.transition)return!0}function gs(t,e){return e.key===t.key&&e.tag===t.tag}var ms=function(t){return t.tag||Le(t)},vs=function(t){return"show"===t.name},ys={name:"transition",props:ls,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(ms),n.length)){0;var r=this.mode;0;var i=n[0];if(ps(this.$vnode))return i;var o=hs(i);if(!o)return i;if(this._leaving)return ds(t,i);var s="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?s+"comment":s+o.tag:c(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var a=(o.data||(o.data={})).transition=fs(this),u=this._vnode,l=hs(u);if(o.data.directives&&o.data.directives.some(vs)&&(o.data.show=!0),l&&l.data&&!gs(o,l)&&!Le(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=O({},a);if("out-in"===r)return this._leaving=!0,Te(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),ds(t,i);if("in-out"===r){if(Le(o))return u;var f,d=function(){f()};Te(a,"afterEnter",d),Te(a,"enterCancelled",d),Te(h,"delayLeave",(function(t){f=t}))}}return i}}},ws=O({tag:String,moveClass:String},ls);delete ws.mode;var bs={props:ws,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=Dn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=fs(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else;}if(r){for(var u=[],l=[],h=0;h<r.length;h++){var f=r[h];f.data.transition=s,f.data.pos=f.elm.getBoundingClientRect(),n[f.key]?u.push(f):l.push(f)}this.kept=t(e,null,u),this.removed=l}return t(e,null,o)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(_s),t.forEach(Es),t.forEach(Ts),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;Uo(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Oo,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Oo,t),n._moveCb=null,Fo(n,e))})}})))},methods:{hasMove:function(t,e){if(!ko)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Ao(n,t)})),Co(n,e),n.style.display="none",this.$el.appendChild(n);var r=Vo(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function _s(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Es(t){t.data.newPos=t.elm.getBoundingClientRect()}function Ts(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}var Cs={Transition:ys,TransitionGroup:bs};Ar.config.mustUseProp=jr,Ar.config.isReservedTag=ai,Ar.config.isReservedAttr=Br,Ar.config.getTagNamespace=ci,Ar.config.isUnknownElement=li,O(Ar.options.directives,us),O(Ar.options.components,Cs),Ar.prototype.__patch__=Q?Jo:M,Ar.prototype.$mount=function(t,e){return t=t&&Q?fi(t):void 0,Pn(this,t,e)},Q&&setTimeout((function(){q.devtools&&lt&&lt.emit("init",Ar)}),0),e["Z"]=Ar},4665:function(t,e,n){"use strict";n(1703);
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function r(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}var i="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},o=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function s(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){o.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){o.emit("vuex:action",t,e)}),{prepend:!0}))}function a(t,e){return t.filter(e)[0]}function c(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=a(e,(function(e){return e.original===t}));if(n)return n.copy;var r=Array.isArray(t)?[]:{};return e.push({original:t,copy:r}),Object.keys(t).forEach((function(n){r[n]=c(t[n],e)})),r}function u(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function l(t){return null!==t&&"object"===typeof t}function h(t){return t&&"function"===typeof t.then}function f(t,e){return function(){return t(e)}}var d=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},d.prototype.addChild=function(t,e){this._children[t]=e},d.prototype.removeChild=function(t){delete this._children[t]},d.prototype.getChild=function(t){return this._children[t]},d.prototype.hasChild=function(t){return t in this._children},d.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},d.prototype.forEachChild=function(t){u(this._children,t)},d.prototype.forEachGetter=function(t){this._rawModule.getters&&u(this._rawModule.getters,t)},d.prototype.forEachAction=function(t){this._rawModule.actions&&u(this._rawModule.actions,t)},d.prototype.forEachMutation=function(t){this._rawModule.mutations&&u(this._rawModule.mutations,t)},Object.defineProperties(d.prototype,p);var g=function(t){this.register([],t,!1)};function m(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;m(t.concat(r),e.getChild(r),n.modules[r])}}g.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},g.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},g.prototype.update=function(t){m([],this.root,t)},g.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new d(e,n);if(0===t.length)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}e.modules&&u(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},g.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},g.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var v;var y=function(t){var e=this;void 0===t&&(t={}),!v&&"undefined"!==typeof window&&window.Vue&&O(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new g(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new v,this._makeLocalGettersCache=Object.create(null);var i=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(t,e){return a.call(i,t,e)},this.commit=function(t,e,n){return c.call(i,t,e,n)},this.strict=r;var u=this._modules.root.state;T(this,u,[],this._modules.root),E(this,u),n.forEach((function(t){return t(e)}));var l=void 0!==t.devtools?t.devtools:v.config.devtools;l&&s(this)},w={state:{configurable:!0}};function b(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function _(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;T(t,n,[],t._modules.root,!0),E(t,n,e)}function E(t,e,n){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={};u(i,(function(e,n){o[n]=f(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var s=v.config.silent;v.config.silent=!0,t._vm=new v({data:{$$state:e},computed:o}),v.config.silent=s,t.strict&&x(t),r&&(n&&t._withCommit((function(){r._data.$$state=null})),v.nextTick((function(){return r.$destroy()})))}function T(t,e,n,r,i){var o=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=r),!o&&!i){var a=R(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){v.set(a,c,r.state)}))}var u=r.context=C(t,s,n);r.forEachMutation((function(e,n){var r=s+n;S(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:s+n,i=e.handler||e;I(t,r,i,u)})),r.forEachGetter((function(e,n){var r=s+n;k(t,r,e,u)})),r.forEachChild((function(r,o){T(t,e,n.concat(o),r,i)}))}function C(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=N(n,r,i),s=o.payload,a=o.options,c=o.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:r?t.commit:function(n,r,i){var o=N(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return A(t,e)}},state:{get:function(){return R(t.state,n)}}}),i}function A(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function S(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function I(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return h(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function k(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function x(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function R(t,e){return e.reduce((function(t,e){return t[e]}),t)}function N(t,e,n){return l(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function O(t){v&&t===v||(v=t,r(v))}w.state.get=function(){return this._vm._data.$$state},w.state.set=function(t){0},y.prototype.commit=function(t,e,n){var r=this,i=N(t,e,n),o=i.type,s=i.payload,a=(i.options,{type:o,payload:s}),c=this._mutations[o];c&&(this._withCommit((function(){c.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},y.prototype.dispatch=function(t,e){var n=this,r=N(t,e),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(o)}))):a[0](o);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,n.state,t)}))}catch(u){0}e(t)}))}))}},y.prototype.subscribe=function(t,e){return b(t,this._subscribers,e)},y.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return b(n,this._actionSubscribers,e)},y.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch((function(){return t(r.state,r.getters)}),e,n)},y.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},y.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),T(this,this.state,t,this._modules.get(t),n.preserveState),E(this,this.state)},y.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=R(e.state,t.slice(0,-1));v.delete(n,t[t.length-1])})),_(this)},y.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},y.prototype.hotUpdate=function(t){this._modules.update(t),_(this,!0)},y.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(y.prototype,w);var D=B((function(t,e){var n={};return F(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=V(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),M=B((function(t,e){var n={};return F(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=V(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),L=B((function(t,e){var n={};return F(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||V(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),P=B((function(t,e){var n={};return F(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=V(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),U=function(t){return{mapState:D.bind(null,t),mapGetters:L.bind(null,t),mapMutations:M.bind(null,t),mapActions:P.bind(null,t)}};function F(t){return $(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function $(t){return Array.isArray(t)||l(t)}function B(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function V(t,e,n){var r=t._modulesNamespaceMap[n];return r}function j(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var r=t.transformer;void 0===r&&(r=function(t){return t});var i=t.mutationTransformer;void 0===i&&(i=function(t){return t});var o=t.actionFilter;void 0===o&&(o=function(t,e){return!0});var s=t.actionTransformer;void 0===s&&(s=function(t){return t});var a=t.logMutations;void 0===a&&(a=!0);var u=t.logActions;void 0===u&&(u=!0);var l=t.logger;return void 0===l&&(l=console),function(t){var h=c(t.state);"undefined"!==typeof l&&(a&&t.subscribe((function(t,o){var s=c(o);if(n(t,h,s)){var a=z(),u=i(t),f="mutation "+t.type+a;q(l,f,e),l.log("%c prev state","color: #9E9E9E; font-weight: bold",r(h)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",r(s)),H(l)}h=s})),u&&t.subscribeAction((function(t,n){if(o(t,n)){var r=z(),i=s(t),a="action "+t.type+r;q(l,a,e),l.log("%c action","color: #03A9F4; font-weight: bold",i),H(l)}})))}}function q(t,e,n){var r=n?t.groupCollapsed:t.group;try{r.call(t,e)}catch(i){t.log(e)}}function H(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function z(){var t=new Date;return" @ "+G(t.getHours(),2)+":"+G(t.getMinutes(),2)+":"+G(t.getSeconds(),2)+"."+G(t.getMilliseconds(),3)}function K(t,e){return new Array(e+1).join(t)}function G(t,e){return K("0",e-t.toString().length)+t}var W={Store:y,install:O,version:"3.6.2",mapState:D,mapMutations:M,mapGetters:L,mapActions:P,createNamespacedHelpers:U,createLogger:j};e["ZP"]=W},8373:function(t,e,n){"use strict";var r,i;
/*!
 * wordcloud2.js
 * http://timdream.org/wordcloud2.js/
 *
 * Copyright 2011 - 2019 Tim Guan-tin Chien and contributors.
 * Released under the MIT license
 */n(4633),n(1703),window.setImmediate||(window.setImmediate=function(){return window.msSetImmediate||window.webkitSetImmediate||window.mozSetImmediate||window.oSetImmediate||function(){if(!window.postMessage||!window.addEventListener)return null;var t=[void 0],e="zero-timeout-message",n=function(n){var r=t.length;return t.push(n),window.postMessage(e+r.toString(36),"*"),r};return window.addEventListener("message",(function(n){if("string"===typeof n.data&&n.data.substr(0,e.length)===e){n.stopImmediatePropagation();var r=parseInt(n.data.substr(e.length),36);t[r]&&(t[r](),t[r]=void 0)}}),!0),window.clearImmediate=function(e){t[e]&&(t[e]=void 0)},n}()||function(t){window.setTimeout(t,0)}}()),window.clearImmediate||(window.clearImmediate=function(){return window.msClearImmediate||window.webkitClearImmediate||window.mozClearImmediate||window.oClearImmediate||function(t){window.clearTimeout(t)}}()),function(n){var o=function(){var t=document.createElement("canvas");if(!t||!t.getContext)return!1;var e=t.getContext("2d");return!!e&&(!!e.getImageData&&(!!e.fillText&&(!!Array.prototype.some&&!!Array.prototype.push)))}(),s=function(){if(o){var t,e,n=document.createElement("canvas").getContext("2d"),r=20;while(r){if(n.font=r.toString(10)+"px sans-serif",n.measureText("Ｗ").width===t&&n.measureText("m").width===e)return r+1;t=n.measureText("Ｗ").width,e=n.measureText("m").width,r--}return 0}}(),a=function(t){if(Array.isArray(t)){var e=t.slice();return e.splice(0,2),e}return[]},c=function(t){for(var e,n,r=t.length;r;)e=Math.floor(Math.random()*r),n=t[--r],t[r]=t[e],t[e]=n;return t},u={},l=function(t,e){if(o){var n=Math.floor(Math.random()*Date.now());Array.isArray(t)||(t=[t]),t.forEach((function(e,n){if("string"===typeof e){if(t[n]=document.getElementById(e),!t[n])throw new Error("The element id specified is not found.")}else if(!e.tagName&&!e.appendChild)throw new Error("You must pass valid HTML elements, or ID of the element.")}));var r={list:[],fontFamily:'"Trebuchet MS", "Heiti TC", "微軟正黑體", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',fontWeight:"normal",color:"random-dark",minSize:0,weightFactor:1,clearCanvas:!0,backgroundColor:"#fff",gridSize:8,drawOutOfBound:!1,shrinkToFit:!1,origin:null,drawMask:!1,maskColor:"rgba(255,0,0,0.3)",maskGapWidth:.3,wait:0,abortThreshold:0,abort:function(){},minRotation:-Math.PI/2,maxRotation:Math.PI/2,rotationSteps:0,shuffle:!0,rotateRatio:.1,shape:"circle",ellipticity:.65,classes:null,hover:null,click:null};if(e)for(var i in e)i in r&&(r[i]=e[i]);if("function"!==typeof r.weightFactor){var l=r.weightFactor;r.weightFactor=function(t){return t*l}}if("function"!==typeof r.shape)switch(r.shape){case"circle":default:r.shape="circle";break;case"cardioid":r.shape=function(t){return 1-Math.sin(t)};break;case"diamond":r.shape=function(t){var e=t%(2*Math.PI/4);return 1/(Math.cos(e)+Math.sin(e))};break;case"square":r.shape=function(t){return Math.min(1/Math.abs(Math.cos(t)),1/Math.abs(Math.sin(t)))};break;case"triangle-forward":r.shape=function(t){var e=t%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"triangle":case"triangle-upright":r.shape=function(t){var e=(t+3*Math.PI/2)%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"pentagon":r.shape=function(t){var e=(t+.955)%(2*Math.PI/5);return 1/(Math.cos(e)+.726543*Math.sin(e))};break;case"star":r.shape=function(t){var e=(t+.955)%(2*Math.PI/10);return(t+.955)%(2*Math.PI/5)-2*Math.PI/10>=0?1/(Math.cos(2*Math.PI/10-e)+3.07768*Math.sin(2*Math.PI/10-e)):1/(Math.cos(e)+3.07768*Math.sin(e))};break}r.gridSize=Math.max(Math.floor(r.gridSize),4);var h,f,d,p,g,m,v,y,w=r.gridSize,b=w-r.maskGapWidth,_=Math.abs(r.maxRotation-r.minRotation),E=Math.abs(Math.floor(r.rotationSteps)),T=Math.min(r.maxRotation,r.minRotation);switch(r.color){case"random-dark":v=function(){return q(10,50)};break;case"random-light":v=function(){return q(50,90)};break;default:"function"===typeof r.color&&(v=r.color);break}"function"===typeof r.fontWeight&&(y=r.fontWeight);var C=null;"function"===typeof r.classes&&(C=r.classes);var A,S=!1,I=[],k=function(t){var e,n,r=t.currentTarget,i=r.getBoundingClientRect();t.touches?(e=t.touches[0].clientX,n=t.touches[0].clientY):(e=t.clientX,n=t.clientY);var o=e-i.left,s=n-i.top,a=Math.floor(o*(r.width/i.width||1)/w),c=Math.floor(s*(r.height/i.height||1)/w);return I[a][c]},x=function(t){var e=k(t);A!==e&&(A=e,e?r.hover(e.item,e.dimension,t):r.hover(void 0,void 0,t))},R=function(t){var e=k(t);e&&(r.click(e.item,e.dimension,t),t.preventDefault())},N=[],O=function(t){if(N[t])return N[t];var e=8*t,n=e,i=[];0===t&&i.push([p[0],p[1],0]);while(n--){var o=1;"circle"!==r.shape&&(o=r.shape(n/e*2*Math.PI)),i.push([p[0]+t*o*Math.cos(-n/e*2*Math.PI),p[1]+t*o*Math.sin(-n/e*2*Math.PI)*r.ellipticity,n/e*2*Math.PI])}return N[t]=i,i},D=function(){return r.abortThreshold>0&&(new Date).getTime()-m>r.abortThreshold},M=function(){return 0===r.rotateRatio||Math.random()>r.rotateRatio?0:0===_?T:E>0?T+Math.floor(Math.random()*E)*_/(E-1):T+Math.random()*_},L=function(t,e,n,i){var o=!1,a=r.weightFactor(e);if(a<=r.minSize)return!1;var c,u=1;a<s&&(u=function(){var t=2;while(t*a<s)t+=2;return t}()),c=y?y(t,e,a,i):r.fontWeight;var l=document.createElement("canvas"),h=l.getContext("2d",{willReadFrequently:!0});h.font=c+" "+(a*u).toString(10)+"px "+r.fontFamily;var f=h.measureText(t).width/u,d=Math.max(a*u,h.measureText("m").width,h.measureText("Ｗ").width)/u,p=f+2*d,g=3*d,m=Math.ceil(p/w),v=Math.ceil(g/w);p=m*w,g=v*w;var b=-f/2,_=.4*-d,E=Math.ceil((p*Math.abs(Math.sin(n))+g*Math.abs(Math.cos(n)))/w),T=Math.ceil((p*Math.abs(Math.cos(n))+g*Math.abs(Math.sin(n)))/w),C=T*w,A=E*w;l.setAttribute("width",C),l.setAttribute("height",A),o&&(document.body.appendChild(l),h.save()),h.scale(1/u,1/u),h.translate(C*u/2,A*u/2),h.rotate(-n),h.font=c+" "+(a*u).toString(10)+"px "+r.fontFamily,h.fillStyle="#000",h.textBaseline="middle",h.fillText(t,b*u,(_+.5*a)*u);var S=h.getImageData(0,0,C,A).data;if(D())return!1;o&&(h.strokeRect(b*u,_,f*u,d*u),h.restore());var I,k,x,R=[],N=T,O=[E/2,T/2,E/2,T/2];while(N--){I=E;while(I--){x=w;t:while(x--){k=w;while(k--)if(S[4*((I*w+x)*C+(N*w+k))+3]){R.push([N,I]),N<O[3]&&(O[3]=N),N>O[1]&&(O[1]=N),I<O[0]&&(O[0]=I),I>O[2]&&(O[2]=I),o&&(h.fillStyle="rgba(255, 0, 0, 0.5)",h.fillRect(N*w,I*w,w-.5,w-.5));break t}}o&&(h.fillStyle="rgba(0, 0, 255, 0.5)",h.fillRect(N*w,I*w,w-.5,w-.5))}}return o&&(h.fillStyle="rgba(0, 255, 0, 0.5)",h.fillRect(O[3]*w,O[0]*w,(O[1]-O[3]+1)*w,(O[2]-O[0]+1)*w)),{mu:u,occupied:R,bounds:O,gw:T,gh:E,fillTextOffsetX:b,fillTextOffsetY:_,fillTextWidth:f,fillTextHeight:d,fontSize:a}},P=function(t,e,n,i,o){var s=o.length;while(s--){var a=t+o[s][0],c=e+o[s][1];if(a>=f||c>=d||a<0||c<0){if(!r.drawOutOfBound)return!1}else if(!h[a][c])return!1}return!0},U=function(e,n,i,o,s,a,c,u,l,h){var f,d,p,g=i.fontSize;f=v?v(o,s,g,a,c,h):r.color,d=y?y(o,s,g,h):r.fontWeight,p=C?C(o,s,g,h):r.classes,t.forEach((function(t){if(t.getContext){var s=t.getContext("2d"),a=i.mu;s.save(),s.scale(1/a,1/a),s.font=d+" "+(g*a).toString(10)+"px "+r.fontFamily,s.fillStyle=f,s.translate((e+i.gw/2)*w*a,(n+i.gh/2)*w*a),0!==u&&s.rotate(-u),s.textBaseline="middle",s.fillText(o,i.fillTextOffsetX*a,(i.fillTextOffsetY+.5*g)*a),s.restore()}else{var c=document.createElement("span"),h="";h="rotate("+-u/Math.PI*180+"deg) ",1!==i.mu&&(h+="translateX(-"+i.fillTextWidth/4+"px) scale("+1/i.mu+")");var m={position:"absolute",display:"block",font:d+" "+g*i.mu+"px "+r.fontFamily,left:(e+i.gw/2)*w+i.fillTextOffsetX+"px",top:(n+i.gh/2)*w+i.fillTextOffsetY+"px",width:i.fillTextWidth+"px",height:i.fillTextHeight+"px",lineHeight:g+"px",whiteSpace:"nowrap",transform:h,webkitTransform:h,msTransform:h,transformOrigin:"50% 40%",webkitTransformOrigin:"50% 40%",msTransformOrigin:"50% 40%"};for(var v in f&&(m.color=f),c.textContent=o,m)c.style[v]=m[v];if(l)for(var y in l)c.setAttribute(y,l[y]);p&&(c.className+=p),t.appendChild(c)}}))},F=function(e,n,r,i,o){if(!(e>=f||n>=d||e<0||n<0)){if(h[e][n]=!1,r){var s=t[0].getContext("2d");s.fillRect(e*w,n*w,b,b)}S&&(I[e][n]={item:o,dimension:i})}},$=function(e,n,i,o,s,a){var c,u,l=s.occupied,h=r.drawMask;if(h&&(c=t[0].getContext("2d"),c.save(),c.fillStyle=r.maskColor),S){var p=s.bounds;u={x:(e+p[3])*w,y:(n+p[0])*w,w:(p[1]-p[3]+1)*w,h:(p[2]-p[0]+1)*w}}var g=l.length;while(g--){var m=e+l[g][0],v=n+l[g][1];m>=f||v>=d||m<0||v<0||F(m,v,h,u,a)}h&&c.restore()},B=function t(e){var n,i,o;Array.isArray(e)?(n=e[0],i=e[1]):(n=e.word,i=e.weight,o=e.attributes);var s=M(),u=a(e),l=L(n,i,s,u);if(!l)return!1;if(D())return!1;if(!r.drawOutOfBound&&!r.shrinkToFit){var h=l.bounds;if(h[1]-h[3]+1>f||h[2]-h[0]+1>d)return!1}var p=g+1,m=function(t){var r=Math.floor(t[0]-l.gw/2),a=Math.floor(t[1]-l.gh/2),c=l.gw,h=l.gh;return!!P(r,a,c,h,l.occupied)&&(U(r,a,l,n,i,g-p,t[2],s,o,u),$(r,a,c,h,l,e),!0)};while(p--){var v=O(g-p);r.shuffle&&(v=[].concat(v),c(v));var y=v.some(m);if(y)return!0}return!!r.shrinkToFit&&(Array.isArray(e)?e[1]=3*e[1]/4:e.weight=3*e.weight/4,t(e))},V=function(e,n,r){if(n)return!t.some((function(t){var n=new CustomEvent(e,{detail:r||{}});return!t.dispatchEvent(n)}),this);t.forEach((function(t){var n=new CustomEvent(e,{detail:r||{}});t.dispatchEvent(n)}),this)},j=function(){var e=t[0];if(e.getContext)f=Math.ceil(e.width/w),d=Math.ceil(e.height/w);else{var i=e.getBoundingClientRect();f=Math.ceil(i.width/w),d=Math.ceil(i.height/w)}if(V("wordcloudstart",!0)){var o,s,a,c,l;if(p=r.origin?[r.origin[0]/w,r.origin[1]/w]:[f/2,d/2],g=Math.floor(Math.sqrt(f*f+d*d)),h=[],!e.getContext||r.clearCanvas){t.forEach((function(t){if(t.getContext){var e=t.getContext("2d");e.fillStyle=r.backgroundColor,e.clearRect(0,0,f*(w+1),d*(w+1)),e.fillRect(0,0,f*(w+1),d*(w+1))}else t.textContent="",t.style.backgroundColor=r.backgroundColor,t.style.position="relative"})),o=f;while(o--){h[o]=[],s=d;while(s--)h[o][s]=!0}}else{var v=document.createElement("canvas").getContext("2d");v.fillStyle=r.backgroundColor,v.fillRect(0,0,1,1);var y,b,_=v.getImageData(0,0,1,1).data,E=e.getContext("2d").getImageData(0,0,f*w,d*w).data;o=f;while(o--){h[o]=[],s=d;while(s--){b=w;t:while(b--){y=w;while(y--){a=4;while(a--)if(E[4*((s*w+b)*f*w+(o*w+y))+a]!==_[a]){h[o][s]=!1;break t}}}!1!==h[o][s]&&(h[o][s]=!0)}}E=v=_=void 0}if(r.hover||r.click){S=!0,o=f+1;while(o--)I[o]=[];r.hover&&e.addEventListener("mousemove",x),r.click&&(e.addEventListener("click",R),e.style.webkitTapHighlightColor="rgba(0, 0, 0, 0)"),e.addEventListener("wordcloudstart",(function t(){e.removeEventListener("wordcloudstart",t),e.removeEventListener("mousemove",x),e.removeEventListener("click",R),A=void 0}))}a=0,0!==r.wait?(c=window.setTimeout,l=window.clearTimeout):(c=window.setImmediate,l=window.clearImmediate);var T=function(e,n){t.forEach((function(t){t.addEventListener(e,n)}),this)},C=function(e,n){t.forEach((function(t){t.removeEventListener(e,n)}),this)},k=function t(){C("wordcloudstart",t),l(u[n])};T("wordcloudstart",k),u[n]=c((function t(){if(a>=r.list.length)return l(u[n]),V("wordcloudstop",!1),C("wordcloudstart",k),void delete u[n];m=(new Date).getTime();var e=B(r.list[a]),i=!V("wordclouddrawn",!0,{item:r.list[a],drawn:e});if(D()||i)return l(u[n]),r.abort(),V("wordcloudabort",!1),V("wordcloudstop",!1),C("wordcloudstart",k),void delete u[n];a++,u[n]=c(t,r.wait)}),r.wait)}};j()}function q(t,e){return"hsl("+(360*Math.random()).toFixed()+","+(30*Math.random()+70).toFixed()+"%,"+(Math.random()*(e-t)+t).toFixed()+"%)"}};l.isSupported=o,l.minFontSize=s,l.stop=function(){if(u)for(var t in u)window.clearImmediate(u[t])},n.WordCloud=l,r=[],i=function(){return l}.apply(e,r),void 0===i||(t.exports=i)}(this)},3367:function(t,e,n){"use strict";n.d(e,{Jn:function(){return gt},qX:function(){return ht},Xd:function(){return lt},Mq:function(){return vt},ZF:function(){return mt},KN:function(){return yt}});var r=n(7805),i=n(7366),o=n(3536);n(6699),n(2801);const s=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{e(E(t.result)),r()},o=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function v(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)}));f.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){y=t(y)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function _(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&v(t),s(t,u())?new Proxy(t,y):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=_(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function C(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=E(s);return r&&s.addEventListener("upgradeneeded",(t=>{r(E(s.result),t.oldVersion,t.newVersion,E(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((t=>{o&&t.addEventListener("close",(()=>o())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const A=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],I=new Map;function k(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(I.get(e))return I.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!A.includes(n))return;const o=async function(t,...e){const o=this.transaction(t,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),i&&o.done]))[0]};return I.set(e,o),o}w((t=>({...t,get:(e,n,r)=>k(e,n)||t.get(e,n,r),has:(e,n)=>!!k(e,n)||t.has(e,n)})));
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
class x{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(R(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function R(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const N="@firebase/app",O="0.7.25",D=new i.Yd("@firebase/app"),M="@firebase/app-compat",L="@firebase/analytics-compat",P="@firebase/analytics",U="@firebase/app-check-compat",F="@firebase/app-check",$="@firebase/auth",B="@firebase/auth-compat",V="@firebase/database",j="@firebase/database-compat",q="@firebase/functions",H="@firebase/functions-compat",z="@firebase/installations",K="@firebase/installations-compat",G="@firebase/messaging",W="@firebase/messaging-compat",X="@firebase/performance",Y="@firebase/performance-compat",Q="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="9.8.2",ot="[DEFAULT]",st={[N]:"fire-core",[M]:"fire-core-compat",[P]:"fire-analytics",[L]:"fire-analytics-compat",[F]:"fire-app-check",[U]:"fire-app-check-compat",[$]:"fire-auth",[B]:"fire-auth-compat",[V]:"fire-rtdb",[j]:"fire-rtdb-compat",[q]:"fire-fn",[H]:"fire-fn-compat",[z]:"fire-iid",[K]:"fire-iid-compat",[G]:"fire-fcm",[W]:"fire-fcm-compat",[X]:"fire-perf",[Y]:"fire-perf-compat",[Q]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){D.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return D.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
const ft={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},dt=new o.LL("app","Firebase",ft);
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
 */const gt=it;function mt(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:ot,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw dt.create("bad-app-name",{appName:String(i)});const s=at.get(i);if(s){if((0,o.vZ)(t,s.options)&&(0,o.vZ)(n,s.config))return s;throw dt.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of ct.values())a.addComponent(r);const c=new pt(t,n,a);return at.set(i,c),c}function vt(t=ot){const e=at.get(t);if(!e)throw dt.create("no-app",{appName:t});return e}function yt(t,e,n){var i;let o=null!==(i=st[t])&&void 0!==i?i:t;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void D.warn(t.join(" "))}lt(new r.wA(`${o}-version`,(()=>({library:o,version:e})),"VERSION"))}
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
const wt="firebase-heartbeat-database",bt=1,_t="firebase-heartbeat-store";let Et=null;function Tt(){return Et||(Et=C(wt,bt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_t)}}}).catch((t=>{throw dt.create("storage-open",{originalErrorMessage:t.message})}))),Et}async function Ct(t){try{const e=await Tt();return e.transaction(_t).objectStore(_t).get(St(t))}catch(e){throw dt.create("storage-get",{originalErrorMessage:e.message})}}async function At(t,e){try{const n=await Tt(),r=n.transaction(_t,"readwrite"),i=r.objectStore(_t);return await i.put(e,St(t)),r.done}catch(n){throw dt.create("storage-set",{originalErrorMessage:n.message})}}function St(t){return`${t.name}!${t.options.appId}`}
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
 */const It=1024,kt=2592e6;class xt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ot(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Rt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=kt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Rt(),{heartbeatsToSend:e,unsentEntries:n}=Nt(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Rt(){const t=new Date;return t.toISOString().substring(0,10)}function Nt(t,e=It){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Dt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ot{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Ct(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Dt(t){return(0,o.L)(JSON.stringify({version:2,heartbeats:t})).length}
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
 */function Mt(t){lt(new r.wA("platform-logger",(t=>new x(t)),"PRIVATE")),lt(new r.wA("heartbeat",(t=>new xt(t)),"PRIVATE")),yt(N,O,t),yt(N,O,"esm2017"),yt("fire-js","")}Mt("")},7805:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return i}});n(1703);var r=n(3536);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */const o="[DEFAULT]";
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
 */class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=o){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=o){return this.instances.has(t)}getOptions(t=o){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,o]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=o){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===o?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
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
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},7366:function(t,e,n){"use strict";n.d(e,{Yd:function(){return u},in:function(){return i}});n(1703);
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
 */const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},329:function(t,e){"use strict";
/*! js-cookie v3.0.1 | MIT */function n(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}var r={read:function(t){return'"'===t[0]&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function i(t,e){function r(r,i,o){if("undefined"!==typeof document){o=n({},e,o),"number"===typeof o.expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),r=encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var a in o)o[a]&&(s+="; "+a,!0!==o[a]&&(s+="="+o[a].split(";")[0]));return document.cookie=r+"="+t.write(i,r)+s}}function o(e){if("undefined"!==typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},i=0;i<n.length;i++){var o=n[i].split("="),s=o.slice(1).join("=");try{var a=decodeURIComponent(o[0]);if(r[a]=t.read(s,a),e===a)break}catch(c){}}return e?r[e]:r}}return Object.create({set:r,get:o,remove:function(t,e){r(t,"",n({},e,{expires:-1}))},withAttributes:function(t){return i(this.converter,n({},this.attributes,t))},withConverter:function(t){return i(n({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(e)},converter:{value:Object.freeze(t)}})}var o=i(r,{path:"/"});e["Z"]=o}}]);
//# sourceMappingURL=chunk-vendors.45621d9f.js.map
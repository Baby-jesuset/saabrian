var Nb=Object.create;var cv=Object.defineProperty;var Lb=Object.getOwnPropertyDescriptor;var Ob=Object.getOwnPropertyNames;var Ib=Object.getPrototypeOf,zb=Object.prototype.hasOwnProperty;var Ni=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Pb=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Ob(t))!zb.call(e,s)&&s!==n&&cv(e,s,{get:()=>t[s],enumerable:!(i=Lb(t,s))||i.enumerable});return e};var _r=(e,t,n)=>(n=e!=null?Nb(Ib(e)):{},Pb(t||!e||!e.__esModule?cv(n,"default",{value:e,enumerable:!0}):n,e));var yv=Ni(Te=>{"use strict";function Kf(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Xc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Li(e){return e.length===0?null:e[0]}function Wc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Xc(o,n))l<s&&0>Xc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Xc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Xc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Te.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(uv=performance,Te.unstable_now=function(){return uv.now()}):(Wf=Date,hv=Wf.now(),Te.unstable_now=function(){return Wf.now()-hv});var uv,Wf,hv,ji=[],Us=[],Bb=1,ri=null,mn=3,Jf=!1,ll=!1,cl=!1,Qf=!1,pv=typeof setTimeout=="function"?setTimeout:null,mv=typeof clearTimeout=="function"?clearTimeout:null,fv=typeof setImmediate<"u"?setImmediate:null;function qc(e){for(var t=Li(Us);t!==null;){if(t.callback===null)Wc(Us);else if(t.startTime<=e)Wc(Us),t.sortIndex=t.expirationTime,Kf(ji,t);else break;t=Li(Us)}}function jf(e){if(cl=!1,qc(e),!ll)if(Li(ji)!==null)ll=!0,xr||(xr=!0,yr());else{var t=Li(Us);t!==null&&$f(jf,t.startTime-e)}}var xr=!1,ul=-1,gv=5,vv=-1;function _v(){return Qf?!0:!(Te.unstable_now()-vv<gv)}function Yf(){if(Qf=!1,xr){var e=Te.unstable_now();vv=e;var t=!0;try{t:{ll=!1,cl&&(cl=!1,mv(ul),ul=-1),Jf=!0;var n=mn;try{e:{for(qc(e),ri=Li(ji);ri!==null&&!(ri.expirationTime>e&&_v());){var i=ri.callback;if(typeof i=="function"){ri.callback=null,mn=ri.priorityLevel;var s=i(ri.expirationTime<=e);if(e=Te.unstable_now(),typeof s=="function"){ri.callback=s,qc(e),t=!0;break e}ri===Li(ji)&&Wc(ji),qc(e)}else Wc(ji);ri=Li(ji)}if(ri!==null)t=!0;else{var a=Li(Us);a!==null&&$f(jf,a.startTime-e),t=!1}}break t}finally{ri=null,mn=n,Jf=!1}t=void 0}}finally{t?yr():xr=!1}}}var yr;typeof fv=="function"?yr=function(){fv(Yf)}:typeof MessageChannel<"u"?(Zf=new MessageChannel,dv=Zf.port2,Zf.port1.onmessage=Yf,yr=function(){dv.postMessage(null)}):yr=function(){pv(Yf,0)};var Zf,dv;function $f(e,t){ul=pv(function(){e(Te.unstable_now())},t)}Te.unstable_IdlePriority=5;Te.unstable_ImmediatePriority=1;Te.unstable_LowPriority=4;Te.unstable_NormalPriority=3;Te.unstable_Profiling=null;Te.unstable_UserBlockingPriority=2;Te.unstable_cancelCallback=function(e){e.callback=null};Te.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):gv=0<e?Math.floor(1e3/e):5};Te.unstable_getCurrentPriorityLevel=function(){return mn};Te.unstable_next=function(e){switch(mn){case 1:case 2:case 3:var t=3;break;default:t=mn}var n=mn;mn=t;try{return e()}finally{mn=n}};Te.unstable_requestPaint=function(){Qf=!0};Te.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=mn;mn=e;try{return t()}finally{mn=n}};Te.unstable_scheduleCallback=function(e,t,n){var i=Te.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:Bb++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Kf(Us,e),Li(ji)===null&&e===Li(Us)&&(cl?(mv(ul),ul=-1):cl=!0,$f(jf,n-i))):(e.sortIndex=s,Kf(ji,e),ll||Jf||(ll=!0,xr||(xr=!0,yr()))),e};Te.unstable_shouldYield=_v;Te.unstable_wrapCallback=function(e){var t=mn;return function(){var n=mn;mn=t;try{return e.apply(this,arguments)}finally{mn=n}}}});var Sv=Ni((hN,xv)=>{"use strict";xv.exports=yv()});var Ov=Ni(Bt=>{"use strict";var nd=Symbol.for("react.transitional.element"),Fb=Symbol.for("react.portal"),Hb=Symbol.for("react.fragment"),Vb=Symbol.for("react.strict_mode"),Gb=Symbol.for("react.profiler"),kb=Symbol.for("react.consumer"),Xb=Symbol.for("react.context"),qb=Symbol.for("react.forward_ref"),Wb=Symbol.for("react.suspense"),Yb=Symbol.for("react.memo"),Av=Symbol.for("react.lazy"),Zb=Symbol.for("react.activity"),Kb=Symbol.for("react.view_transition"),Mv=Symbol.iterator;function Jb(e){return e===null||typeof e!="object"?null:(e=Mv&&e[Mv]||e["@@iterator"],typeof e=="function"?e:null)}var wv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rv=Object.assign,Cv={};function Mr(e,t,n){this.props=e,this.context=t,this.refs=Cv,this.updater=n||wv}Mr.prototype.isReactComponent={};Mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Dv(){}Dv.prototype=Mr.prototype;function id(e,t,n){this.props=e,this.context=t,this.refs=Cv,this.updater=n||wv}var sd=id.prototype=new Dv;sd.constructor=id;Rv(sd,Mr.prototype);sd.isPureReactComponent=!0;var bv=Array.isArray;function ed(){}var xe={H:null,A:null,T:null,S:null},Uv=Object.prototype.hasOwnProperty;function ad(e,t,n){var i=n.ref;return{$$typeof:nd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function Qb(e,t){return ad(e.type,t,e.props)}function rd(e){return typeof e=="object"&&e!==null&&e.$$typeof===nd}function jb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ev=/\/+/g;function td(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jb(""+e.key):t.toString(36)}function $b(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(ed,ed):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Sr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case nd:case Fb:r=!0;break;case Av:return r=e._init,Sr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+td(e,0):i,bv(s)?(n="",r!=null&&(n=r.replace(Ev,"$&/")+"/"),Sr(s,t,n,"",function(c){return c})):s!=null&&(rd(s)&&(s=Qb(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(Ev,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(bv(e))for(var l=0;l<e.length;l++)i=e[l],a=o+td(i,l),r+=Sr(i,t,n,a,s);else if(l=Jb(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+td(i,l++),r+=Sr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Sr($b(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Yc(e,t,n){if(e==null)return e;var i=[],s=0;return Sr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function tE(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Tv=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Nv(e){var t=xe.T,n={};n.types=t!==null?t.types:null,xe.T=n;try{var i=e(),s=xe.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(ed,Tv)}catch(a){Tv(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),xe.T=t}}function Lv(e){var t=xe.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else Nv(Lv.bind(null,e))}var eE={map:Yc,forEach:function(e,t,n){Yc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yc(e,function(){t++}),t},toArray:function(e){return Yc(e,function(t){return t})||[]},only:function(e){if(!rd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Bt.Activity=Zb;Bt.Children=eE;Bt.Component=Mr;Bt.Fragment=Hb;Bt.Profiler=Gb;Bt.PureComponent=id;Bt.StrictMode=Vb;Bt.Suspense=Wb;Bt.ViewTransition=Kb;Bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=xe;Bt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return xe.H.useMemoCache(e)}};Bt.addTransitionType=Lv;Bt.cache=function(e){return function(){return e.apply(null,arguments)}};Bt.cacheSignal=function(){return null};Bt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Rv({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!Uv.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return ad(e.type,s,i)};Bt.createContext=function(e){return e={$$typeof:Xb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:kb,_context:e},e};Bt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)Uv.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return ad(e,a,s)};Bt.createRef=function(){return{current:null}};Bt.forwardRef=function(e){return{$$typeof:qb,render:e}};Bt.isValidElement=rd;Bt.lazy=function(e){return{$$typeof:Av,_payload:{_status:-1,_result:e},_init:tE}};Bt.memo=function(e,t){return{$$typeof:Yb,type:e,compare:t===void 0?null:t}};Bt.startTransition=Nv;Bt.unstable_useCacheRefresh=function(){return xe.H.useCacheRefresh()};Bt.use=function(e){return xe.H.use(e)};Bt.useActionState=function(e,t,n){return xe.H.useActionState(e,t,n)};Bt.useCallback=function(e,t){return xe.H.useCallback(e,t)};Bt.useContext=function(e){return xe.H.useContext(e)};Bt.useDebugValue=function(){};Bt.useDeferredValue=function(e,t){return xe.H.useDeferredValue(e,t)};Bt.useEffect=function(e,t){return xe.H.useEffect(e,t)};Bt.useEffectEvent=function(e){return xe.H.useEffectEvent(e)};Bt.useId=function(){return xe.H.useId()};Bt.useImperativeHandle=function(e,t,n){return xe.H.useImperativeHandle(e,t,n)};Bt.useInsertionEffect=function(e,t){return xe.H.useInsertionEffect(e,t)};Bt.useLayoutEffect=function(e,t){return xe.H.useLayoutEffect(e,t)};Bt.useMemo=function(e,t){return xe.H.useMemo(e,t)};Bt.useOptimistic=function(e,t){return xe.H.useOptimistic(e,t)};Bt.useReducer=function(e,t,n){return xe.H.useReducer(e,t,n)};Bt.useRef=function(e){return xe.H.useRef(e)};Bt.useState=function(e){return xe.H.useState(e)};Bt.useSyncExternalStore=function(e,t,n){return xe.H.useSyncExternalStore(e,t,n)};Bt.useTransition=function(){return xe.H.useTransition()};Bt.version="19.3.1"});var Zc=Ni((dN,Iv)=>{"use strict";Iv.exports=Ov()});var Bv=Ni(gn=>{"use strict";var nE=Zc();function Pv(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ns(){}var Mn={d:{f:Ns,r:function(){throw Error(Pv(522))},D:Ns,C:Ns,L:Ns,m:Ns,X:Ns,S:Ns,M:Ns},p:0,findDOMNode:null},iE=Symbol.for("react.portal"),sE=Symbol.for("react.recoverable"),zv=Symbol.for("react.optimistic_key");function aE(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:iE,key:i==null?null:i===zv?zv:""+i,children:e,containerInfo:t,implementation:n}}var hl=nE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Kc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Mn;gn.browser=function(e){return{$$typeof:sE,_reason:e}};gn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Pv(299));return aE(e,t,null,n)};gn.flushSync=function(e){var t=hl.T,n=Mn.p;try{if(hl.T=null,Mn.p=2,e)return e()}finally{hl.T=t,Mn.p=n,Mn.d.f()}};gn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Mn.d.C(e,t))};gn.prefetchDNS=function(e){typeof e=="string"&&Mn.d.D(e)};gn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Kc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Mn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Mn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};gn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Kc(t.as,t.crossOrigin);Mn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&Mn.d.M(e)};gn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Kc(n,t.crossOrigin);Mn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};gn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Kc(t.as,t.crossOrigin);Mn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else Mn.d.m(e)};gn.requestFormReset=function(e){Mn.d.r(e)};gn.unstable_batchedUpdates=function(e,t){return e(t)};gn.useFormState=function(e,t,n){return hl.H.useFormState(e,t,n)};gn.useFormStatus=function(){return hl.H.useHostTransitionStatus()};gn.version="19.3.1"});var Vv=Ni((mN,Hv)=>{"use strict";function Fv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fv)}catch(e){console.error(e)}}Fv(),Hv.exports=Bv()});var wM=Ni(Dh=>{"use strict";var Ze=Sv(),Ay=Zc(),rE=Vv();function Y(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function wy(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jl(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function Ry(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cy(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gv(e){if(jl(e)!==e)throw Error(Y(188))}function oE(e){var t=e.alternate;if(!t){if(t=jl(e),t===null)throw Error(Y(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return Gv(s),e;if(a===i)return Gv(s),t;a=a.sibling}throw Error(Y(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(Y(189))}}if(n.alternate!==i)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?e:t}function Dy(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Dy(e),t!==null)return t;e=e.sibling}return null}function In(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&In(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function ka(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function kv(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function Uy(e){var t=[null,null],n=ka(e);return n===null||Ny(t,e,n.child,{foundSelf:!1}),t}function Ny(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&Ny(e,t,n.child,i))return!0;n=n.sibling}return!1}function Ye(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(Y(559))}}var Cr=null,Bd=null;function lE(e,t,n){return e===n?!0:e===t?(Cr=e,!0):!1}function cE(e,t,n){return e===n?(Bd=e,!1):e===t?(Bd!==null&&(Cr=e),!0):!1}function Xv(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Fd(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var _e=Object.assign,uE=Symbol.for("react.element"),Jc=Symbol.for("react.transitional.element"),_l=Symbol.for("react.portal"),Dr=Symbol.for("react.fragment"),Ly=Symbol.for("react.strict_mode"),Hd=Symbol.for("react.profiler"),Oy=Symbol.for("react.consumer"),Fi=Symbol.for("react.context"),Kp=Symbol.for("react.forward_ref"),Vd=Symbol.for("react.suspense"),Gd=Symbol.for("react.suspense_list"),Jp=Symbol.for("react.memo"),zs=Symbol.for("react.lazy");Symbol.for("react.scope");var kd=Symbol.for("react.activity"),hE=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var fE=Symbol.for("react.memo_cache_sentinel"),Xd=Symbol.for("react.view_transition"),dE=Symbol.for("react.recoverable"),qv=Symbol.iterator;function fl(e){return e===null||typeof e!="object"?null:(e=qv&&e[qv]||e["@@iterator"],typeof e=="function"?e:null)}var pE=Symbol.for("react.client.reference");function qd(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===pE?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dr:return"Fragment";case Hd:return"Profiler";case Ly:return"StrictMode";case Vd:return"Suspense";case Gd:return"SuspenseList";case kd:return"Activity";case Xd:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case _l:return"Portal";case Fi:return e.displayName||"Context";case Oy:return(e._context.displayName||"Context")+".Consumer";case Kp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jp:return t=e.displayName||null,t!==null?t:qd(e.type)||"Memo";case zs:t=e._payload,e=e._init;try{return qd(e(t))}catch{}}return null}var yl=Array.isArray,zt=Ay.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=rE.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Da={pending:!1,data:null,method:null,action:null},Wd=[],Ur=-1;function Wi(e){return{current:e}}function ln(e){0>Ur||(e.current=Wd[Ur],Wd[Ur]=null,Ur--)}function be(e,t){Ur++,Wd[Ur]=e.current,e.current=t}var ki=Wi(null),zl=Wi(null),qs=Wi(null),zu=Wi(null);function Pu(e,t){switch(be(qs,t),be(zl,e),be(ki,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ay(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ay(t),e=nM(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ln(ki),be(ki,e)}function Qr(){ln(ki),ln(zl),ln(qs)}function Yd(e){var t=e.memoizedState;t!==null&&(oo._currentValue=t.memoizedState,be(zu,e)),t=ki.current;var n=nM(t,e.type);t!==n&&(be(zl,e),be(ki,n))}function Bu(e){zl.current===e&&(ln(ki),ln(zl)),zu.current===e&&(ln(zu),oo._currentValue=Da)}var od,Wv;function Os(e){if(od===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);od=t&&t[1]||"",Wv=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+od+e+Wv}var ld=!1;function cd(e,t){if(!e||ld)return"";ld=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(v){var h=v}Reflect.construct(e,[],p)}else{try{p.call()}catch(v){h=v}p=!1;try{var d=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(d!==void 0?Object.defineProperty(e.prototype,"props",d):delete e.prototype.props)}}}else{try{throw Error()}catch(v){h=v}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(v){if(v&&h&&typeof v.stack=="string")return[v.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{ld=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Os(n):""}function mE(e,t){switch(e.tag){case 26:case 27:case 5:return Os(e.type);case 16:return Os("Lazy");case 13:return e.child!==t&&t!==null?Os("Suspense Fallback"):Os("Suspense");case 19:return Os("SuspenseList");case 0:case 15:return cd(e.type,!1);case 11:return cd(e.type.render,!1);case 1:return cd(e.type,!0);case 31:return Os("Activity");case 30:return Os("ViewTransition");default:return""}}function Yv(e){try{var t="",n=null;do t+=mE(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Zd=Object.prototype.hasOwnProperty,Qp=Ze.unstable_scheduleCallback,ud=Ze.unstable_cancelCallback,gE=Ze.unstable_shouldYield,vE=Ze.unstable_requestPaint,Kn=Ze.unstable_now,_E=Ze.unstable_getCurrentPriorityLevel,Iy=Ze.unstable_ImmediatePriority,zy=Ze.unstable_UserBlockingPriority,Fu=Ze.unstable_NormalPriority,yE=Ze.unstable_LowPriority,Py=Ze.unstable_IdlePriority,xE=Ze.log,SE=Ze.unstable_setDisableYieldValue,$l=null,Jn=null;function Fs(e){if(typeof xE=="function"&&SE(e),Jn&&typeof Jn.setStrictMode=="function")try{Jn.setStrictMode($l,e)}catch{}}var Qn=Math.clz32?Math.clz32:EE,ME=Math.log,bE=Math.LN2;function EE(e){return e>>>=0,e===0?32:31-(ME(e)/bE|0)|0}var Qc=256,jc=262144,$c=4194304;function Ta(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function hh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Ta(i):(r&=o,r!==0?s=Ta(r):n||(n=o&~e,n!==0&&(s=Ta(n))))):(o=i&~a,o!==0?s=Ta(o):r!==0?s=Ta(r):n||(n=i&~e,n!==0&&(s=Ta(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function tc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function By(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Qn(n),s=1<<i;t|=e[i],n&=~s}return t}function TE(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fy(){var e=$c;return $c<<=1,($c&62914560)===0&&($c=4194304),e}function hd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ec(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function AE(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var u=31-Qn(n),p=1<<u;o[u]=0,l[u]=-1;var h=c[u];if(h!==null)for(c[u]=null,u=0;u<h.length;u++){var d=h[u];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&Hy(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function Hy(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Qn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Vy(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Qn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Gy(e,t){var n=t&-t;return n=(n&42)!==0?1:jp(n),(n&(e.suspendedLanes|t))!==0?0:n}function jp(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $p(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ky(){var e=le.p;return e!==0?e:(e=window.event,e===void 0?32:EM(e.type))}function Zv(e,t){var n=le.p;try{return le.p=e,t()}finally{le.p=n}}var hs=Math.random().toString(36).slice(2),rn="__reactFiber$"+hs,zn="__reactProps$"+hs,uo="__reactContainer$"+hs,Kv="__reactEvents$"+hs,wE="__reactListeners$"+hs,RE="__reactHandles$"+hs,Jv="__reactResources$"+hs,nc="__reactMarker$"+hs,Hu="__reactLoad$"+hs;function fh(e){delete e[rn],delete e[zn],delete e[wE],delete e[RE]}function Ra(e){var t;if(t=e[rn])return t;for(var n=e.parentNode;n;){if(t=n[uo]||n[rn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=dy(e);e!==null;){if(n=e[rn])return n;e=dy(e)}return t}e=n,n=e.parentNode}return null}function ho(e){if(e=e[rn]||e[uo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function xl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Y(33))}function Vr(e){var t=e[Jv];return t||(t=e[Jv]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tn(e){e[nc]=!0}function Xy(e){e[Hu]=void 0}var qy=new Set,Wy={};function Xa(e,t){jr(e,t),jr(e+"Capture",t)}function jr(e,t){for(Wy[e]=t,e=0;e<t.length;e++)qy.add(t[e])}var CE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qv={},jv={};function DE(e){return Zd.call(jv,e)?!0:Zd.call(Qv,e)?!1:CE.test(e)?jv[e]=!0:(Qv[e]=!0,!1)}var re=!1;function $v(){var e=re;return re=!1,e}function vu(e,t,n){if(DE(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function tu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function $i(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function qn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function UE(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kd(e){if(!e._valueTracker){var t=Yy(e)?"checked":"value";e._valueTracker=UE(e,t,""+e[t])}}function Zy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Yy(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var NE=/[\n"\\]/g;function hi(e){return e.replace(NE,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Jd(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qn(t)):e.value!==""+qn(t)&&(e.value=""+qn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?fd(e,qn(e.value)):fd(e,qn(t)):n!=null?fd(e,qn(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+qn(o):e.removeAttribute("name")}function Ky(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Kd(e);return}n=n!=null?""+qn(n):"",t=t!=null?""+qn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Kd(e)}function fd(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Gr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+qn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Jy(e,t,n){if(t!=null&&(t=""+qn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+qn(n):""}function Qy(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Y(92));if(yl(i)){if(1<i.length)throw Error(Y(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=qn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Kd(e)}function $r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var LE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function t_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||LE.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function jy(e,t,n){if(t!=null&&typeof t!="object")throw Error(Y(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",re=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(t_(e,s,i),re=!0)}else for(var a in t)t.hasOwnProperty(a)&&t_(e,a,t[a])}function tm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var OE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),IE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _u(e){return IE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Hi(){}var Qd=null;function em(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nr=null,kr=null;function e_(e){var t=ho(e);if(t&&(e=t.stateNode)){var n=e[zn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Jd(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+hi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[zn]||null;if(!s)throw Error(Y(90));Jd(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Zy(i)}break t;case"textarea":Jy(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Gr(e,!!n.multiple,t,!1)}}}var dd=!1;function $y(e,t,n){if(dd)return e(t,n);dd=!0;try{var i=e(t);return i}finally{if(dd=!1,(Nr!==null||kr!==null)&&(Ah(),Nr&&(t=Nr,e=kr,kr=Nr=null,e_(t),e)))for(t=0;t<e.length;t++)e_(e[t])}}function Pl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[zn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Y(231,t,typeof n));return n}var as=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jd=!1;if(as)try{br={},Object.defineProperty(br,"passive",{get:function(){jd=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{jd=!1}var br,Hs=null,nm=null,yu=null;function tx(){if(yu)return yu;var e,t=nm,n=t.length,i,s="value"in Hs?Hs.value:Hs.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return yu=s.slice(e,1<i?1-i:void 0)}function xu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function eu(){return!0}function n_(){return!1}function An(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?eu:n_,this.isPropagationStopped=n_,this}return _e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=eu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=eu)},persist:function(){},isPersistent:eu}),t}var ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dh=An(ra),ic=_e({},ra,{view:0,detail:0}),zE=An(ic),pd,md,dl,ph=_e({},ic,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:im,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dl&&(dl&&e.type==="mousemove"?(pd=e.screenX-dl.screenX,md=e.screenY-dl.screenY):md=pd=0,dl=e),pd)},movementY:function(e){return"movementY"in e?e.movementY:md}}),i_=An(ph),PE=_e({},ph,{dataTransfer:0}),BE=An(PE),FE=_e({},ic,{relatedTarget:0}),gd=An(FE),HE=_e({},ra,{animationName:0,elapsedTime:0,pseudoElement:0}),VE=An(HE),GE=_e({},ra,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kE=An(GE),XE=_e({},ra,{data:0}),s_=An(XE),qE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=YE[e])?!!t[e]:!1}function im(){return ZE}var KE=_e({},ic,{key:function(e){if(e.key){var t=qE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?WE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:im,charCode:function(e){return e.type==="keypress"?xu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),JE=An(KE),QE=_e({},ph,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),a_=An(QE),jE=_e({},ra,{submitter:0}),$E=An(jE),tT=_e({},ic,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:im}),eT=An(tT),nT=_e({},ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),iT=An(nT),sT=_e({},ph,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),aT=An(sT),rT=_e({},ra,{newState:0,oldState:0,source:0}),oT=An(rT),lT=[9,13,27,32],sm=as&&"CompositionEvent"in window,bl=null;as&&"documentMode"in document&&(bl=document.documentMode);var cT=as&&"TextEvent"in window&&!bl,ex=as&&(!sm||bl&&8<bl&&11>=bl),r_=" ",o_=!1;function nx(e,t){switch(e){case"keyup":return lT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ix(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lr=!1;function uT(e,t){switch(e){case"compositionend":return ix(t);case"keypress":return t.which!==32?null:(o_=!0,r_);case"textInput":return e=t.data,e===r_&&o_?null:e;default:return null}}function hT(e,t){if(Lr)return e==="compositionend"||!sm&&nx(e,t)?(e=tx(),yu=nm=Hs=null,Lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ex&&t.locale!=="ko"?null:t.data;default:return null}}var fT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function l_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fT[e.type]:t==="textarea"}function sx(e,t,n,i){Nr?kr?kr.push(i):kr=[i]:Nr=i,t=lh(t,"onChange"),0<t.length&&(n=new dh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var El=null,Bl=null;function dT(e){$S(e,0)}function mh(e){var t=xl(e);if(Zy(t))return e}function c_(e,t){if(e==="change")return t}var ax=!1;as&&(as?(iu="oninput"in document,iu||(vd=document.createElement("div"),vd.setAttribute("oninput","return;"),iu=typeof vd.oninput=="function"),nu=iu):nu=!1,ax=nu&&(!document.documentMode||9<document.documentMode));var nu,iu,vd;function u_(){El&&(El.detachEvent("onpropertychange",rx),Bl=El=null)}function rx(e){if(e.propertyName==="value"&&mh(Bl)){var t=[];sx(t,Bl,e,em(e)),$y(dT,t)}}function pT(e,t,n){e==="focusin"?(u_(),El=t,Bl=n,El.attachEvent("onpropertychange",rx)):e==="focusout"&&u_()}function mT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mh(Bl)}function gT(e,t){if(e==="click")return mh(t)}function vT(e,t){if(e==="input"||e==="change")return mh(t)}function _T(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $n=typeof Object.is=="function"?Object.is:_T;function Fl(e,t){if($n(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Zd.call(t,s)||!$n(e[s],t[s]))return!1}return!0}function $d(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function h_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function f_(e,t){var n=h_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=h_(n)}}function ox(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ox(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$d(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$d(e.document)}return t}function am(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var yT=as&&"documentMode"in document&&11>=document.documentMode,Or=null,tp=null,Tl=null,ep=!1;function d_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ep||Or==null||Or!==$d(i)||(i=Or,"selectionStart"in i&&am(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Tl&&Fl(Tl,i)||(Tl=i,i=lh(tp,"onSelect"),0<i.length&&(t=new dh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Or)))}function ba(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ir={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionrun:ba("Transition","TransitionRun"),transitionstart:ba("Transition","TransitionStart"),transitioncancel:ba("Transition","TransitionCancel"),transitionend:ba("Transition","TransitionEnd")},_d={},cx={};as&&(cx=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function qa(e){if(_d[e])return _d[e];if(!Ir[e])return e;var t=Ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cx)return _d[e]=t[n];return e}var ux=qa("animationend"),hx=qa("animationiteration"),fx=qa("animationstart"),xT=qa("transitionrun"),ST=qa("transitionstart"),MT=qa("transitioncancel"),dx=qa("transitionend"),px=new Map,np="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");np.push("scrollEnd");function Ai(e,t){px.set(e,t),Xa(t,[e])}var bT=0;function rs(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Ti.identifierPrefix;var n=bT++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function p_(e){if(e==null||typeof e=="string")return e;var t=null,n=Jr;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function fs(e,t){return e=p_(e),t=p_(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Vu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},li=[],zr=0,rm=0;function gh(){for(var e=zr,t=rm=zr=0;t<e;){var n=li[t];li[t++]=null;var i=li[t];li[t++]=null;var s=li[t];li[t++]=null;var a=li[t];if(li[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&mx(n,s,a)}}function vh(e,t,n,i){li[zr++]=e,li[zr++]=t,li[zr++]=n,li[zr++]=i,rm|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function om(e,t,n,i){return vh(e,t,n,i),Gu(e)}function Wa(e,t){return vh(e,null,null,t),Gu(e)}function mx(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Qn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Gu(e){if(50<Il)throw Il=0,Du=null,Error(Y(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Pr={};function ET(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(e,t,n,i){return new ET(e,t,n,i)}function lm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function is(e,t){var n=e.alternate;return n===null?(n=Ln(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function gx(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Su(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")lm(i)&&(r=1);else if(typeof i=="string")r=JA(e,n,ki.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case kd:return e=Ln(31,n,t,s),e.elementType=kd,e.lanes=a,e;case Dr:return Ua(n.children,s,a,t);case Ly:r=8,s|=24;break;case Hd:return e=Ln(12,n,t,s|2),e.elementType=Hd,e.lanes=a,e;case Vd:return e=Ln(13,n,t,s),e.elementType=Vd,e.lanes=a,e;case Gd:return e=Ln(19,n,t,s),e.elementType=Gd,e.lanes=a,e;case hE:case Xd:return e=s|32,e=Ln(30,n,t,e),e.elementType=Xd,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Fi:r=10;break t;case Oy:r=9;break t;case Kp:r=11;break t;case Jp:r=14;break t;case zs:r=16,i=null;break t}r=29,n=Error(Y(130,e===null?"null":typeof e,"")),i=null}return t=Ln(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Ua(e,t,n,i){return e=Ln(7,e,i,t),e.lanes=n,e}function yd(e,t,n){return e=Ln(6,e,null,t),e.lanes=n,e}function vx(e){var t=Ln(18,null,null,0);return t.stateNode=e,t}function xd(e,t,n){return t=Ln(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var m_=new WeakMap;function fi(e,t){if(typeof e=="object"&&e!==null){var n=m_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Yv(t)},m_.set(e,t),t)}return{value:e,source:t,stack:Yv(t)}}var Br=[],Fr=0,ku=null,Hl=0,ci=[],ui=0,ea=null,Vi=1,Gi="";function es(e,t){Br[Fr++]=Hl,Br[Fr++]=ku,ku=e,Hl=t}function _x(e,t,n){ci[ui++]=Vi,ci[ui++]=Gi,ci[ui++]=ea,ea=e;var i=Vi;e=Gi;var s=32-Qn(i)-1;i&=~(1<<s),n+=1;var a=32-Qn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Vi=1<<32-Qn(t)+s|n<<s|i,Gi=a+e}else Vi=1<<a|n<<s|i,Gi=e}function _h(e){e.return!==null&&(es(e,1),_x(e,1,0))}function cm(e){for(;e===ku;)ku=Br[--Fr],Br[Fr]=null,Hl=Br[--Fr],Br[Fr]=null;for(;e===ea;)ea=ci[--ui],ci[ui]=null,Gi=ci[--ui],ci[ui]=null,Vi=ci[--ui],ci[ui]=null}function yx(e,t){ci[ui++]=Vi,ci[ui++]=Gi,ci[ui++]=ea,Vi=t.id,Gi=t.overflow,ea=e}var en=null,Me=null,Yt=!1,Ws=null,di=!1,ip=Error(Y(519));function na(e){var t=Error(Y(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vl(fi(t,e)),ip}function g_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[rn]=e,t[zn]=i,n){case"dialog":Qt("cancel",t),Qt("close",t);break;case"iframe":case"object":case"embed":Qt("load",t);break;case"video":case"audio":for(n=0;n<ql.length;n++)Qt(ql[n],t);break;case"source":Qt("error",t);break;case"img":case"image":case"link":Qt("error",t),Qt("load",t);break;case"details":Qt("toggle",t);break;case"input":Qt("invalid",t),Ky(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Qt("invalid",t);break;case"textarea":Qt("invalid",t),Qy(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||eM(t.textContent,n)?(i.popover!=null&&(Qt("beforetoggle",t),Qt("toggle",t)),i.onScroll!=null&&Qt("scroll",t),i.onScrollEnd!=null&&Qt("scrollend",t),i.onClick!=null&&(t.onclick=Hi),t=!0):t=!1,t||na(e,!0)}function Xu(e){for(en=e.return;en;)switch(en.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:en=en.return}}function Er(e){if(e!==en)return!1;if(!Yt)return Xu(e),Yt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Vp(e.type,e.memoizedProps)),n=!n),n&&Me&&na(e),Xu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));Me=fy(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));Me=fy(e)}else t===27?(t=Me,oa(e.type)?(e=qp,qp=null,Me=e):Me=t):Me=en?pi(e.stateNode.nextSibling):null;return!0}function Ia(){Me=en=null,Yt=!1}function Sd(){var e=Ws;return e!==null&&(Un===null?Un=e:Un.push.apply(Un,e),Ws=null),e}function Vl(e){Ws===null?Ws=[e]:Ws.push(e)}var sp=Wi(null),Ya=null,ns=null;function Vs(e,t,n){be(sp,t._currentValue),t._currentValue=n}function ss(e){e._currentValue=sp.current,ln(sp)}function Mu(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ap(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Mu(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(Y(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Mu(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Mu(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function za(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(Y(387));if(r=r.memoizedProps,r!==null){var o=s.type;$n(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===zu.current){if(r=s.alternate,r===null)throw Error(Y(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(oo):e=[oo])}s=s.return}return e!==null&&ap(t,e,n,i),t.flags|=262144,e!==null}function qu(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pa(e){Ya=e,ns=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function on(e){return xx(Ya,e)}function su(e,t){return Ya===null&&Pa(e),xx(e,t)}function xx(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ns===null){if(e===null)throw Error(Y(308));ns=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ns=ns.next=t;return n}var TT=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},AT=Ze.unstable_scheduleCallback,wT=Ze.unstable_NormalPriority,Ve={$$typeof:Fi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function um(){return{controller:new TT,data:new Map,refCount:0}}function sc(e){e.refCount--,e.refCount===0&&AT(wT,function(){e.controller.abort()})}function v_(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var Sl=null;function RT(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Al=null,rp=0,Ba=0,Xr=null;function CT(e,t){if(Al===null){var n=Al=[];rp=0,Ba=Bm(),Xr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return rp++,t.then(__,__),t}function __(){if(--rp===0&&(Sl=null,Al!==null)){Xr!==null&&(Xr.status="fulfilled");var e=Al;Al=null,Ba=0,Xr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function DT(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var y_=zt.S;zt.S=function(e,t){if(BS=Kn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&CT(e,t),Sl!==null)for(var n=so;n!==null;)v_(n,Sl),n=n.next;if(n=e.types,n!==null){for(var i=so;i!==null;)v_(i,n),i=i.next;if(Ba!==0){i=Sl,i===null&&(i=Sl=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}y_!==null&&y_(e,t)};var Na=Wi(null);function hm(){var e=Na.current;return e!==null?e:ve.pooledCache}function bu(e,t){t===null?be(Na,Na.current):be(Na,t.pool)}function Sx(){var e=hm();return e===null?null:{parent:Ve._currentValue,pool:e}}var fo=Error(Y(460)),fm=Error(Y(474)),yh=Error(Y(542)),Wu={then:function(){}};function x_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Mx(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Hi,Hi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,M_(e),e===void 0&&!("reason"in t)?Error(Y(600)):e;default:if(typeof t.status=="string")t.then(Hi,Hi);else{if(e=ve,e!==null&&100<e.shellSuspendCounter)throw Error(Y(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,M_(e),e}throw La=t,fo}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(La=n,fo):n}}var La=null;function S_(){if(La===null)throw Error(Y(459));var e=La;return La=null,e}function M_(e){if(e===fo||e===yh)throw Error(Y(483))}var qr=null,Gl=0;function au(e){var t=Gl;return Gl+=1,qr===null&&(qr=[]),Mx(qr,e,t)}function Ls(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ru(e,t){throw t.$$typeof===uE?Error(Y(525)):(e=Object.prototype.toString.call(t),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function bx(e){function t(f,_){if(e){var g=f.deletions;g===null?(f.deletions=[_],f.flags|=16):g.push(_)}}function n(f,_){if(!e)return null;for(;_!==null;)t(f,_),_=_.sibling;return null}function i(f){for(var _=new Map;f!==null;)f.key===null?_.set(f.index,f):_.set(f.key,f),f=f.sibling;return _}function s(f,_){return f=is(f,_),f.index=0,f.sibling=null,f}function a(f,_,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<_?(f.flags|=2,_):g):(f.flags|=134217730,_)):(f.flags|=1048576,_)}function r(f){return e&&f.alternate===null&&(f.flags|=134217730),f}function o(f,_,g,x){return _===null||_.tag!==6?(_=yd(g,f.mode,x),_.return=f,_):(_=s(_,g),_.return=f,_)}function l(f,_,g,x){var D=g.type;return D===Dr?(f=u(f,_,g.props.children,x,g.key),Ls(f,g),f):_!==null&&(_.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===zs&&Aa(D)===_.type)?(_=s(_,g.props),Ls(_,g),_.return=f,_):(_=Su(g.type,g.key,g.props,null,f.mode,x),Ls(_,g),_.return=f,_)}function c(f,_,g,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=xd(g,f.mode,x),_.return=f,_):(_=s(_,g.children||[]),_.return=f,_)}function u(f,_,g,x,D){return _===null||_.tag!==7?(_=Ua(g,f.mode,x,D),_.return=f,_):(_=s(_,g),_.return=f,_)}function p(f,_,g){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=yd(""+_,f.mode,g),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Jc:return g=Su(_.type,_.key,_.props,null,f.mode,g),Ls(g,_),g.return=f,g;case _l:return _=xd(_,f.mode,g),_.return=f,_;case zs:return _=Aa(_),p(f,_,g)}if(yl(_)||fl(_))return _=Ua(_,f.mode,g,null),_.return=f,_;if(typeof _.then=="function")return p(f,au(_),g);if(_.$$typeof===Fi)return p(f,su(f,_),g);ru(f,_)}return null}function h(f,_,g,x){var D=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return D!==null?null:o(f,_,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Jc:return g.key===D?l(f,_,g,x):null;case _l:return g.key===D?c(f,_,g,x):null;case zs:return g=Aa(g),h(f,_,g,x)}if(yl(g)||fl(g))return D!==null?null:u(f,_,g,x,null);if(typeof g.then=="function")return h(f,_,au(g),x);if(g.$$typeof===Fi)return h(f,_,su(f,g),x);ru(f,g)}return null}function d(f,_,g,x,D){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return f=f.get(g)||null,o(_,f,""+x,D);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Jc:return f=f.get(x.key===null?g:x.key)||null,l(_,f,x,D);case _l:return f=f.get(x.key===null?g:x.key)||null,c(_,f,x,D);case zs:return x=Aa(x),d(f,_,g,x,D)}if(yl(x)||fl(x))return f=f.get(g)||null,u(_,f,x,D,null);if(typeof x.then=="function")return d(f,_,g,au(x),D);if(x.$$typeof===Fi)return d(f,_,g,su(_,x),D);ru(_,x)}return null}function v(f,_,g,x){for(var D=null,C=null,A=_,U=_=0,E=null;A!==null&&U<g.length;U++){A.index>U?(E=A,A=null):E=A.sibling;var S=h(f,A,g[U],x);if(S===null){A===null&&(A=E);break}e&&A&&S.alternate===null&&t(f,A),_=a(S,_,U),C===null?D=S:C.sibling=S,C=S,A=E}if(U===g.length)return n(f,A),Yt&&es(f,U),D;if(A===null){for(;U<g.length;U++)A=p(f,g[U],x),A!==null&&(_=a(A,_,U),C===null?D=A:C.sibling=A,C=A);return Yt&&es(f,U),D}for(A=i(A);U<g.length;U++)E=d(A,f,U,g[U],x),E!==null&&(e&&(S=E.alternate,S!==null&&A.delete(S.key===null?U:S.key)),_=a(E,_,U),C===null?D=E:C.sibling=E,C=E);return e&&A.forEach(function(R){return t(f,R)}),Yt&&es(f,U),D}function y(f,_,g,x){if(g==null)throw Error(Y(151));for(var D=null,C=null,A=_,U=_=0,E=null,S=g.next();A!==null&&!S.done;U++,S=g.next()){A.index>U?(E=A,A=null):E=A.sibling;var R=h(f,A,S.value,x);if(R===null){A===null&&(A=E);break}e&&A&&R.alternate===null&&t(f,A),_=a(R,_,U),C===null?D=R:C.sibling=R,C=R,A=E}if(S.done)return n(f,A),Yt&&es(f,U),D;if(A===null){for(;!S.done;U++,S=g.next())S=p(f,S.value,x),S!==null&&(_=a(S,_,U),C===null?D=S:C.sibling=S,C=S);return Yt&&es(f,U),D}for(A=i(A);!S.done;U++,S=g.next())S=d(A,f,U,S.value,x),S!==null&&(e&&(E=S.alternate,E!==null&&A.delete(E.key===null?U:E.key)),_=a(S,_,U),C===null?D=S:C.sibling=S,C=S);return e&&A.forEach(function(q){return t(f,q)}),Yt&&es(f,U),D}function m(f,_,g,x){if(typeof g=="object"&&g!==null&&g.type===Dr&&g.key===null&&g.props.ref===void 0&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Jc:t:{for(var D=g.key;_!==null;){if(_.key===D){if(D=g.type,D===Dr){if(_.tag===7){n(f,_.sibling),x=s(_,g.props.children),Ls(x,g),x.return=f,f=x;break t}}else if(_.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===zs&&Aa(D)===_.type){n(f,_.sibling),x=s(_,g.props),Ls(x,g),x.return=f,f=x;break t}n(f,_);break}else t(f,_);_=_.sibling}g.type===Dr?(x=Ua(g.props.children,f.mode,x,g.key),Ls(x,g),x.return=f,f=x):(x=Su(g.type,g.key,g.props,null,f.mode,x),Ls(x,g),x.return=f,f=x)}return r(f);case _l:t:{for(D=g.key;_!==null;){if(_.key===D)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(f,_.sibling),x=s(_,g.children||[]),x.return=f,f=x;break t}else{n(f,_);break}else t(f,_);_=_.sibling}x=xd(g,f.mode,x),x.return=f,f=x}return r(f);case zs:return g=Aa(g),m(f,_,g,x)}if(yl(g))return v(f,_,g,x);if(fl(g)){if(D=fl(g),typeof D!="function")throw Error(Y(150));return g=D.call(g),y(f,_,g,x)}if(typeof g.then=="function")return m(f,_,au(g),x);if(g.$$typeof===Fi)return m(f,_,su(f,g),x);ru(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,_!==null&&_.tag===6?(n(f,_.sibling),x=s(_,g),x.return=f,f=x):(n(f,_),x=yd(g,f.mode,x),x.return=f,f=x),r(f)):n(f,_)}return function(f,_,g,x){try{Gl=0;var D=m(f,_,g,x);return qr=null,D}catch(A){if(A===fo||A===yh)throw A;var C=Ln(29,A,null,f.mode);return C.lanes=x,C.return=f,C}finally{}}}var Fa=bx(!0),Ex=bx(!1),Ps=!1;function dm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function op(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ys(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Zs(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(oe&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Gu(e),mx(e,null,n),t}return vh(e,i,t,n),Gu(e)}function wl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Vy(e,n)}}function Md(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var lp=!1;function Rl(){if(lp){var e=Xr;if(e!==null)throw e}}function Cl(e,t,n,i){lp=!1;var s=e.updateQueue;Ps=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==r&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,u=c=l=null,o=a;do{var h=o.lane&-536870913,d=h!==o.lane;if(d?(ee&h)===h:(i&h)===h){h!==0&&h===Ba&&(lp=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,y=o;h=t;var m=n;switch(y.tag){case 1:if(v=y.payload,typeof v=="function"){p=v.call(m,p,h);break t}p=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(m,p,h):v,h==null)break t;p=_e({},p,h);break t;case 2:Ps=!0}}h=o.callback,h!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[h]:d.push(h))}else d={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=d,l=p):u=u.next=d,r|=h;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);u===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,a===null&&(s.shared.lanes=0),aa|=r,e.lanes=r,e.memoizedState=p}}function Tx(e,t){if(typeof e!="function")throw Error(Y(191,e));e.call(t)}function Ax(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Tx(n[e],t)}var ia=Wi(null),Yu=Wi(0);function b_(e,t){e=us,be(Yu,e),be(ia,t),us=e|t.baseLanes}function cp(){be(Yu,us),be(ia,ia.current)}function pm(){us=Yu.current,ln(ia),ln(Yu)}var hn=Wi(null),vn=null;function Ks(e){var t=e.alternate;be(cn,cn.current&1),be(hn,e),vn===null&&(t===null||ia.current!==null||t.memoizedState!==null)&&(vn=e)}function up(e){be(cn,cn.current),be(hn,e),vn===null&&(vn=e)}function wx(e){e.tag===22?(be(cn,cn.current),be(hn,e),vn===null&&(vn=e)):Js()}function Js(){be(cn,cn.current),be(hn,hn.current)}function Wn(e){ln(hn),vn===e&&(vn=null),ln(cn)}var cn=Wi(0);function kl(e,t){be(hn,hn.current),be(cn,t)}function mm(e){ln(cn),ln(hn),vn===e&&(vn=null)}function Zu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Xp(n)||Gm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var os=0,kt=null,me=null,He=null,Ku=!1,Wr=!1,Ha=!1,Ju=0,Xl=0,Yr=null,UT=0;function Oe(){throw Error(Y(321))}function gm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$n(e[n],t[n]))return!1;return!0}function vm(e,t,n,i,s,a){return os=a,kt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zt.H=e===null||e.memoizedState===null?sS:aS,Ha=!1,a=n(i,s),Ha=!1,Wr&&(a=Cx(t,n,i,s)),Rx(e),a}function Rx(e){zt.H=Qu;var t=me!==null&&me.next!==null;if(os=0,He=me=kt=null,Ku=!1,Xl=0,Yr=null,t)throw Error(Y(300));e===null||Ge||(e=e.dependencies,e!==null&&qu(e)&&(Ge=!0))}function Cx(e,t,n,i){kt=e;var s=0;do{if(Wr&&(Yr=null),Xl=0,Wr=!1,25<=s)throw Error(Y(301));if(s+=1,He=me=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}zt.H=FT,a=t(n,i)}while(Wr);return a}function NT(){var e=zt.H,t=e.useState()[0];return t=typeof t.then=="function"?ac(t):t,e=e.useState()[0],(me!==null?me.memoizedState:null)!==e&&(kt.flags|=1024),t}function _m(){var e=Ju!==0;return Ju=0,e}function ym(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function xm(e){if(Ku){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ku=!1}os=0,He=me=kt=null,Wr=!1,Xl=Ju=0,Yr=null}function Tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?kt.memoizedState=He=e:He=He.next=e,He}function Pe(){if(me===null){var e=kt.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=He===null?kt.memoizedState:He.next;if(t!==null)He=t,me=e;else{if(e===null)throw kt.alternate===null?Error(Y(467)):Error(Y(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},He===null?kt.memoizedState=He=e:He=He.next=e}return He}function xh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ac(e){var t=Xl;return Xl+=1,Yr===null&&(Yr=[]),e=Mx(Yr,e,t),t=kt,(He===null?t.memoizedState:He.next)===null&&(t=t.alternate,zt.H=t===null||t.memoizedState===null?sS:aS),e}function Sh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ac(e);if(e.$$typeof===dE)return;if(e.$$typeof===Fi)return on(e)}throw Error(Y(438,String(e)))}function Sm(e){var t=null,n=kt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=kt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=xh(),kt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=fE;return t.index++,n}function ls(e,t){return typeof t=="function"?t(e):t}function Eu(e){var t=Pe();return Mm(t,me,e)}function Mm(e,t,n){var i=e.queue;if(i===null)throw Error(Y(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,u=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(ee&p)===p:(os&p)===p){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Ba&&(u=!0);else if((os&h)===h){c=c.next,h===Ba&&(u=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,kt.lanes|=h,aa|=h;p=c.action,Ha&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else h={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=a):l=l.next=h,kt.lanes|=p,aa|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!$n(a,e.memoizedState)&&(Ge=!0,u&&(n=Xr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function bd(e){var t=Pe(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);$n(a,t.memoizedState)||(Ge=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Dx(e,t,n){var i=kt,s=Pe(),a=Yt;if(a){if(n===void 0)throw Error(Y(407));n=n()}else n=t();var r=!$n((me||s).memoizedState,n);if(r&&(s.memoizedState=n,Ge=!0),s=s.queue,bm(Lx.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||He!==null&&(He.memoizedState.tag&1)!==0,to(e?9:8,{destroy:void 0},Nx.bind(null,i,s,n,t),null),e){if(i.flags|=2048,ve===null)throw Error(Y(349));a||(os&127)!==0||Ux(i,t,n)}return n}function Ux(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=kt.updateQueue,t===null?(t=xh(),kt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Nx(e,t,n,i){t.value=n,t.getSnapshot=i,Ox(t)&&Ix(e)}function Lx(e,t,n){return n(function(){Ox(t)&&Ix(e)})}function Ox(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$n(e,n)}catch{return!0}}function Ix(e){var t=Wa(e,2);t!==null&&On(t,e,2)}function hp(e){var t=Tn();if(typeof e=="function"){var n=e;if(e=n(),Ha){Fs(!0);try{n()}finally{Fs(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:e},t}function zx(e,t,n,i){return e.baseState=n,Mm(e,me,typeof i=="function"?i:ls)}function LT(e,t,n,i,s){if(bh(e))throw Error(Y(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};zt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,Px(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Px(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=zt.T,r={};r.types=a!==null?a.types:null,zt.T=r;try{var o=n(s,i),l=zt.S;l!==null&&l(r,o),E_(e,t,o)}catch(c){fp(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),zt.T=a}}else try{a=n(s,i),E_(e,t,a)}catch(c){fp(e,t,c)}}function E_(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){T_(e,t,i)},function(i){return fp(e,t,i)}):T_(e,t,n)}function T_(e,t,n){t.status="fulfilled",t.value=n,Bx(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Px(e,n)))}function fp(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Bx(t),t=t.next;while(t!==i)}e.action=null}function Bx(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Fx(e,t){return t}function A_(e,t){if(Yt){var n=ve.formState;if(n!==null){t:{var i=kt;if(Yt){if(Me){e:{for(var s=Me,a=di;s.nodeType!==8;){if(!a){s=null;break e}if(s=pi(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Me=pi(s.nextSibling),i=s.data==="F!";break t}}na(i)}i=!1}i&&(t=n[0])}}return n=Tn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fx,lastRenderedState:t},n.queue=i,n=eS.bind(null,kt,i),i.dispatch=n,i=hp(!1),a=wm.bind(null,kt,!1,i.queue),i=Tn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=LT.bind(null,kt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function w_(e){var t=Pe();return Hx(t,me,e)}function Hx(e,t,n){if(t=Mm(e,t,Fx)[0],e=Eu(ls)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=ac(t)}catch(r){throw r===fo?yh:r}else i=t;t=Pe();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(kt.flags|=2048,to(9,{destroy:void 0},OT.bind(null,s,n),null)),[i,a,e]}function OT(e,t){e.action=t}function R_(e){var t=Pe(),n=me;if(n!==null)return Hx(t,n,e);Pe(),t=t.memoizedState,n=Pe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function to(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=kt.updateQueue,t===null&&(t=xh(),kt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Vx(){return Pe().memoizedState}function Tu(e,t,n,i){var s=Tn();kt.flags|=e,s.memoizedState=to(1|t,{destroy:void 0},n,i===void 0?null:i)}function Mh(e,t,n,i){var s=Pe();i=i===void 0?null:i;var a=s.memoizedState.inst;me!==null&&i!==null&&gm(i,me.memoizedState.deps)?s.memoizedState=to(t,a,n,i):(kt.flags|=e,s.memoizedState=to(1|t,a,n,i))}function C_(e,t){Tu(8390656,8,e,t)}function bm(e,t){Mh(2048,8,e,t)}function IT(e){kt.flags|=4;var t=kt.updateQueue;if(t===null)t=xh(),kt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Gx(e){var t=Pe().memoizedState;return IT({ref:t,nextImpl:e}),function(){if((oe&2)!==0)throw Error(Y(440));return t.impl.apply(void 0,arguments)}}function kx(e,t){return Mh(4,2,e,t)}function Xx(e,t){return Mh(4,4,e,t)}function qx(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wx(e,t,n){n=n!=null?n.concat([e]):null,Mh(4,4,qx.bind(null,t,e),n)}function Em(){}function Yx(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&gm(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Zx(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&gm(t,i[1]))return i[0];if(i=e(),Ha){Fs(!0);try{e()}finally{Fs(!1)}}return n.memoizedState=[i,t],i}function Tm(e,t,n){return n===void 0||(os&1073741824)!==0&&(ee&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=HS(),kt.lanes|=e,aa|=e,n)}function Kx(e,t,n,i){return $n(n,t)?n:ia.current!==null?(e=Tm(e,n,i),$n(e,t)||(Ge=!0),e):(os&106)===0||(os&1073741824)!==0&&(ee&261930)===0?(Ge=!0,e.memoizedState=n):(e=HS(),kt.lanes|=e,aa|=e,t)}function Jx(e,t,n,i,s){var a=le.p;le.p=a!==0&&8>a?a:8;var r=zt.T,o={};o.types=r!==null?r.types:null,zt.T=o,wm(e,!1,t,n);try{var l=s(),c=zt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=DT(l,i);Dl(e,t,u,jn(e))}else Dl(e,t,i,jn(e))}catch(p){Dl(e,t,{then:function(){},status:"rejected",reason:p},jn())}finally{le.p=a,r!==null&&o.types!==null&&(r.types=o.types),zt.T=r}}function zT(){}function dp(e,t,n,i){if(e.tag!==5)throw Error(Y(476));var s=Qx(e).queue;Jx(e,s,t,Da,n===null?zT:function(){return jx(e),n(i)})}function Qx(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Da,baseState:Da,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:Da},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function jx(e){var t=Qx(e);t.next===null&&(t=e.alternate.memoizedState),Dl(e,t.next.queue,{},jn())}function Am(){return on(oo)}function $x(){return Pe().memoizedState}function tS(){return Pe().memoizedState}function PT(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jn();e=Ys(n);var i=Zs(t,e,n);i!==null&&(On(i,t,n),wl(i,t,n)),t={cache:um()},e.payload=t;return}t=t.return}}function BT(e,t,n){var i=jn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},bh(e)?nS(t,n):(n=om(e,t,n,i),n!==null&&(On(n,e,i),iS(n,t,i)))}function eS(e,t,n){var i=jn();Dl(e,t,n,i)}function Dl(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(bh(e))nS(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,$n(o,r))return vh(e,t,s,0),ve===null&&gh(),!1}catch{}finally{}if(n=om(e,t,s,i),n!==null)return On(n,e,i),iS(n,t,i),!0}return!1}function wm(e,t,n,i){if(i={lane:2,revertLane:Bm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},bh(e)){if(t)throw Error(Y(479))}else t=om(e,n,i,2),t!==null&&On(t,e,2)}function bh(e){var t=e.alternate;return e===kt||t!==null&&t===kt}function nS(e,t){Wr=Ku=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function iS(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Vy(e,n)}}var Qu={readContext:on,use:Sh,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe,useEffectEvent:Oe},sS={readContext:on,use:Sh,useCallback:function(e,t){return Tn().memoizedState=[e,t===void 0?null:t],e},useContext:on,useEffect:C_,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Tu(4194308,4,qx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Tu(4194308,4,e,t)},useInsertionEffect:function(e,t){Tu(4,2,e,t)},useMemo:function(e,t){var n=Tn();t=t===void 0?null:t;var i=e();if(Ha){Fs(!0);try{e()}finally{Fs(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Tn();if(n!==void 0){var s=n(t);if(Ha){Fs(!0);try{n(t)}finally{Fs(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=BT.bind(null,kt,e),[i.memoizedState,e]},useRef:function(e){var t=Tn();return e={current:e},t.memoizedState=e},useState:function(e){e=hp(e);var t=e.queue,n=eS.bind(null,kt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Em,useDeferredValue:function(e,t){var n=Tn();return Tm(n,e,t)},useTransition:function(){var e=hp(!1);return e=Jx.bind(null,kt,e.queue,!0,!1),Tn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=kt,s=Tn();if(Yt){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=t(),ve===null)throw Error(Y(349));(ee&127)!==0||Ux(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,C_(Lx.bind(null,i,a,e),[e]),i.flags|=2048,to(9,{destroy:void 0},Nx.bind(null,i,a,n,t),null),n},useId:function(){var e=Tn(),t=ve.identifierPrefix;if(Yt){var n=Gi,i=Vi;n=(i&~(1<<32-Qn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ju++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=UT++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Am,useFormState:A_,useActionState:A_,useOptimistic:function(e){var t=Tn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=wm.bind(null,kt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Sm,useCacheRefresh:function(){return Tn().memoizedState=PT.bind(null,kt)},useEffectEvent:function(e){var t=Tn(),n={impl:e};return t.memoizedState=n,function(){if((oe&2)!==0)throw Error(Y(440));return n.impl.apply(void 0,arguments)}}},aS={readContext:on,use:Sh,useCallback:Yx,useContext:on,useEffect:bm,useImperativeHandle:Wx,useInsertionEffect:kx,useLayoutEffect:Xx,useMemo:Zx,useReducer:Eu,useRef:Vx,useState:function(){return Eu(ls)},useDebugValue:Em,useDeferredValue:function(e,t){var n=Pe();return Kx(n,me.memoizedState,e,t)},useTransition:function(){var e=Eu(ls)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:ac(e),t]},useSyncExternalStore:Dx,useId:$x,useHostTransitionStatus:Am,useFormState:w_,useActionState:w_,useOptimistic:function(e,t){var n=Pe();return zx(n,me,e,t)},useMemoCache:Sm,useCacheRefresh:tS,useEffectEvent:Gx},FT={readContext:on,use:Sh,useCallback:Yx,useContext:on,useEffect:bm,useImperativeHandle:Wx,useInsertionEffect:kx,useLayoutEffect:Xx,useMemo:Zx,useReducer:bd,useRef:Vx,useState:function(){return bd(ls)},useDebugValue:Em,useDeferredValue:function(e,t){var n=Pe();return me===null?Tm(n,e,t):Kx(n,me.memoizedState,e,t)},useTransition:function(){var e=bd(ls)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:ac(e),t]},useSyncExternalStore:Dx,useId:$x,useHostTransitionStatus:Am,useFormState:R_,useActionState:R_,useOptimistic:function(e,t){var n=Pe();return me!==null?zx(n,me,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Sm,useCacheRefresh:tS,useEffectEvent:Gx};function Ed(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:_e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=jn(),s=Ys(i);s.payload=t,n!=null&&(s.callback=n),t=Zs(e,s,i),t!==null&&(On(t,e,i),wl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=jn(),s=Ys(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Zs(e,s,i),t!==null&&(On(t,e,i),wl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jn(),i=Ys(n);i.tag=2,t!=null&&(i.callback=t),t=Zs(e,i,n),t!==null&&(On(t,e,n),wl(t,e,n))}};function D_(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Fl(n,i)||!Fl(s,a):!0}function U_(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&pp.enqueueReplaceState(t,t.state,null)}function Va(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=_e({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function rS(e){Vu(e)}function oS(e){console.error(e)}function lS(e){Vu(e)}function ju(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function N_(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function mp(e,t,n){return n=Ys(n),n.tag=3,n.payload={element:null},n.callback=function(){ju(e,t)},n}function cS(e){return e=Ys(e),e.tag=3,e}function uS(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){N_(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){N_(t,n,i),typeof s!="function"&&(Qs===null?Qs=new Set([this]):Qs.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function HT(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&za(t,n,s,!0),n=hn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return vn===null?rh():n.alternate===null&&Ie===0&&(Ie=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Wu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Ud(e,i,s)),!1;case 22:return n.flags|=65536,i===Wu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Ud(e,i,s)),!1}throw Error(Y(435,n.tag))}return Ud(e,i,s),rh(),!1}if(Yt)return t=hn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==ip&&(e=Error(Y(422),{cause:i}),Vl(fi(e,n)))):(i!==ip&&(t=Error(Y(423),{cause:i}),Vl(fi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=fi(i,n),s=mp(e.stateNode,i,s),Md(e,s),Ie!==4&&(Ie=2)),!1;var a=Error(Y(520),{cause:i});if(a=fi(a,n),Ol===null?Ol=[a]:Ol.push(a),Ie!==4&&(Ie=2),t===null)return!0;i=fi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=mp(n.stateNode,i,e),Md(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Qs===null||!Qs.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=cS(s),uS(s,e,n,i),Md(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Rm=Error(Y(461)),Ge=!1;function We(e,t,n,i){t.child=e===null?Ex(t,null,n,i):Fa(t,e.child,n,i)}function L_(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Pa(t),i=vm(e,t,n,r,a,s),o=_m(),e!==null&&!Ge?(ym(e,t,s),cs(e,t,s)):(Yt&&o&&_h(t),t.flags|=1,We(e,t,i,s),t.child)}function O_(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!lm(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,hS(e,t,a,i,s)):(e=Su(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Dm(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Fl,n(r,i)&&e.ref===t.ref)return cs(e,t,s)}return t.flags|=1,e=is(a,i),e.ref=t.ref,e.return=t,t.child=e}function hS(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(Fl(a,i)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=i=a,Dm(e,s))(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,cs(e,t,s)}return gp(e,t,n,i,s)}function fS(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return I_(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&bu(t,a!==null?a.cachePool:null),a!==null?b_(t,a):cp(),wx(t);else return i=t.lanes=536870912,I_(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(bu(t,a.cachePool),b_(t,a),Js(),t.memoizedState=null):(e!==null&&bu(t,null),cp(),Js());return We(e,t,s,n),t.child}function Ul(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function I_(e,t,n,i,s){var a=hm();return a=a===null?null:{parent:Ve._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&bu(t,null),cp(),wx(t),e!==null&&za(e,t,i,!0),t.childLanes=s,null}function Au(e,t){return t=Eh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function z_(e,t,n){return Fa(t,e.child,null,n),e=Au(t,t.pendingProps),e.flags|=2,Wn(t),t.memoizedState=null,e}function VT(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Yt){if(i.mode==="hidden")return e=Au(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Ul(null,e);if(up(t),(e=Me)?(e=fM(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ea!==null?{id:Vi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},n=vx(e),n.return=t,t.child=n,en=t,Me=null)):e=null,e===null)throw na(t);return t.lanes=536870912,null}return Au(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(up(t),s)if(t.flags&256)t.flags&=-257,t=z_(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(Y(558));else if(Ge||za(e,t,n,!1),s=(n&e.childLanes)!==0,Ge||s){if(ia.current===null){if(i=ve,i!==null&&(r=Gy(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Wa(e,r),On(i,e,r),Rm;rh()}t=z_(e,t,n)}else e=a.treeContext,Me=pi(r.nextSibling),en=t,Yt=!0,Ws=null,di=!1,e!==null&&yx(t,e),t=Au(t,i),t.flags|=134221824;return t}return e=is(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ar(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Y(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gp(e,t,n,i,s){return Pa(t),n=vm(e,t,n,i,void 0,s),i=_m(),e!==null&&!Ge?(ym(e,t,s),cs(e,t,s)):(Yt&&i&&_h(t),t.flags|=1,We(e,t,n,s),t.child)}function P_(e,t,n,i,s,a){return Pa(t),t.updateQueue=null,n=Cx(t,i,n,s),Rx(e),i=_m(),e!==null&&!Ge?(ym(e,t,a),cs(e,t,a)):(Yt&&i&&_h(t),t.flags|=1,We(e,t,n,a),t.child)}function B_(e,t,n,i,s){if(Pa(t),t.stateNode===null){var a=Pr,r=n.contextType;typeof r=="object"&&r!==null&&(a=on(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=pp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},dm(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?on(r):Pr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Ed(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&pp.enqueueReplaceState(a,a.state,null),Cl(t,i,a,s),Rl(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=Va(n,o);a.props=l;var c=a.context,u=n.contextType;r=Pr,typeof u=="object"&&u!==null&&(r=on(u));var p=n.getDerivedStateFromProps;u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&U_(t,a,i,r),Ps=!1;var h=t.memoizedState;a.state=h,Cl(t,i,a,s),Rl(),c=t.memoizedState,o||h!==c||Ps?(typeof p=="function"&&(Ed(t,n,p,i),c=t.memoizedState),(l=Ps||D_(t,n,l,i,h,c,r))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,op(e,t),r=t.memoizedProps,u=Va(n,r),a.props=u,p=t.pendingProps,h=a.context,c=n.contextType,l=Pr,typeof c=="object"&&c!==null&&(l=on(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||h!==l)&&U_(t,a,i,l),Ps=!1,h=t.memoizedState,a.state=h,Cl(t,i,a,s),Rl();var d=t.memoizedState;r!==p||h!==d||Ps||e!==null&&e.dependencies!==null&&qu(e.dependencies)?(typeof o=="function"&&(Ed(t,n,o,i),d=t.memoizedState),(u=Ps||D_(t,n,u,i,h,d,l)||e!==null&&e.dependencies!==null&&qu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Ar(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=Fa(t,e.child,null,s),t.child=Fa(t,null,n,s)):We(e,t,n,s),t.memoizedState=a.state,e=t.child):e=cs(e,t,s),e}function F_(e,t,n,i){return Ia(),t.flags|=256,We(e,t,n,i),t.child}var vp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _p(e){return{baseLanes:e,cachePool:Sx()}}function yp(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Zn),e}function dS(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Yt){if(s?Ks(t):Js(),(e=Me)?(e=fM(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ea!==null?{id:Vi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},n=vx(e),n.return=t,t.child=n,en=t,Me=null)):e=null,e===null)throw na(t);return Gm(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(Js(),s=t.mode,a=Eh({mode:"hidden",children:a},s),i=Ua(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=_p(n),i.childLanes=yp(e,r,n),t.memoizedState=vp,Ul(null,i)):(Ks(t),Cm(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return GT(e,t,a,r,i,l,o,n)}return s?(Js(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=is(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=is(l,s):(s=Ua(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,Ul(null,i),i=t.child,s=e.child.memoizedState,s===null?s=_p(n):(a=s.cachePool,a!==null?(o=Ve._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=Sx(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=yp(e,r,n),t.memoizedState=vp,Ul(e.child,i)):(Ks(t),n=e.child,e=n.sibling,n=is(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Cm(e,t){return t=Eh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Eh(e,t){return e=Ln(22,e,null,t),e.lanes=0,e}function ou(e,t,n){return Fa(t,e.child,null,n),e=Cm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function GT(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(Ks(t),t.flags&=-257,ou(e,t,o)):t.memoizedState!==null?(Js(),t.child=e.child,t.flags|=128,null):(Js(),a=s.fallback,r=t.mode,s=Eh({mode:"visible",children:s.children},r),a=Ua(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,Fa(t,e.child,null,o),s=t.child,s.memoizedState=_p(o),s.childLanes=yp(e,i,o),t.memoizedState=vp,Ul(null,s));if(Ks(t),Gm(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(Y(419)),s.stack="",s.digest=i,Vl({value:s,source:null,stack:null})),ou(e,t,o)}if(Ge||za(e,t,o,!1),i=(o&e.childLanes)!==0,Ge||i){if(ia.current!==null)return ou(e,t,o);if(i=ve,i!==null&&(s=Gy(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,Wa(e,s),On(i,e,s),Rm;return Xp(a)||rh(),ou(e,t,o)}return Xp(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,Me=pi(a.nextSibling),en=t,Yt=!0,Ws=null,di=!1,e!==null&&yx(t,e),t=Cm(t,s.children),t.flags|=134221824,t)}function H_(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Mu(e.return,t,n)}function V_(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Zu(n)===null&&(t=e),e=e.sibling}return t}function lu(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Td(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function xp(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=cn.current;if(t.flags&128)return kl(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,kl(t,r),s==="backwards"&&e!==null?(Td(e),We(e,t,i,n),Td(e)):We(e,t,i,n),i=Yt?Hl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&H_(e,n,t);else if(e.tag===19)H_(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=V_(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,Td(t)),lu(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Zu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}lu(t,!0,n,null,a,i);break;case"together":lu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=V_(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),lu(t,!1,s,n,a,i)}return t.child}function G_(e,t,n){var i=t.pendingProps;return Vs(t,t.type,i.value),We(e,t,i.children,n),t.child}function cs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),aa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(za(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Y(153));if(t.child!==null){for(e=t.child,n=is(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=is(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dm(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&qu(e)))}function kT(e,t,n){switch(t.tag){case 3:Pu(t,t.stateNode.containerInfo),Vs(t,Ve,e.memoizedState.cache),Ia();break;case 27:case 5:Yd(t);break;case 4:Pu(t,t.stateNode.containerInfo);break;case 10:Vs(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,up(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return Ks(t),t.flags|=128,null;i=za(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?dS(e,t,n):(Ks(t),e=cs(e,t,n),e!==null?e.sibling:null)}Ks(t);break;case 19:if(t.flags&128)return xp(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(za(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return xp(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),kl(t,cn.current),i)break;return null;case 22:return t.lanes=0,fS(e,t,n,t.pendingProps);case 24:Vs(t,Ve,e.memoizedState.cache)}return cs(e,t,n)}function pS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!Dm(e,n)&&(t.flags&128)===0)return Ge=!1,kT(e,t,n);Ge=(e.flags&131072)!==0}else Ge=!1,Yt&&(t.flags&1048576)!==0&&_x(t,Hl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e=="function")lm(e)?(i=Va(e,i),t.tag=1,t=B_(null,t,e,i,n)):(t.tag=0,t=gp(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Kp){t.tag=11,t=L_(null,t,e,i,n);break t}else if(s===Jp){t.tag=14,t=O_(null,t,e,i,n);break t}else if(s===Fi){t.tag=10,t.type=e,t=G_(null,t,n);break t}}throw t=qd(e)||e,Error(Y(306,t,""))}}return t;case 0:return gp(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Va(i,t.pendingProps),B_(e,t,i,s,n);case 3:t:{if(Pu(t,t.stateNode.containerInfo),e===null)throw Error(Y(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,op(e,t),Cl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Vs(t,Ve,i),i!==a.cache&&ap(t,[Ve],n,!0),Rl(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=F_(e,t,i,n);break t}else if(i!==s){s=fi(Error(Y(424)),t),Vl(s),t=F_(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Me=pi(e.firstChild),en=t,Yt=!0,Ws=null,di=!0,n=Ex(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Ia(),i===s){t=cs(e,t,n);break t}We(e,t,i,n)}t=t.child}return t;case 26:return Ar(e,t),e===null?(n=my(t.type,null,t.pendingProps,null))?t.memoizedState=n:Yt||(t.stateNode=iM(t.type,t.pendingProps,qs.current,t)):t.memoizedState=my(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Yd(t),e===null&&Yt&&(i=t.stateNode=dM(t.type,t.pendingProps,qs.current),en=t,di=!0,s=Me,oa(t.type)?(qp=s,Me=pi(i.firstChild)):Me=s),We(e,t,t.pendingProps.children,n),Ar(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Yt&&((s=i=Me)&&(i=IA(i,t.type,t.pendingProps,di),i!==null?(t.stateNode=i,en=t,Me=pi(i.firstChild),di=!1,s=!0):s=!1),s||na(t)),Yd(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Vp(s,a)?i=null:r!==null&&Vp(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=vm(e,t,NT,null,null,n),oo._currentValue=s),Ar(e,t),We(e,t,i,n),t.child;case 6:return e===null&&Yt&&((e=n=Me)&&(n=zA(n,t.pendingProps,di),n!==null?(t.stateNode=n,en=t,Me=null,e=!0):e=!1),e||na(t)),null;case 13:return dS(e,t,n);case 4:return Pu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Fa(t,null,i,n):We(e,t,i,n),t.child;case 11:return L_(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,Ar(e,t),We(e,t,i,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:return G_(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,Pa(t),s=on(s),i=i(s),t.flags|=1,We(e,t,i,n),t.child;case 14:return O_(e,t,t.type,t.pendingProps,n);case 15:return hS(e,t,t.type,t.pendingProps,n);case 19:return xp(e,t,n);case 31:return VT(e,t,n);case 22:return fS(e,t,n,t.pendingProps);case 24:return Pa(t),i=on(Ve),e===null?(s=hm(),s===null&&(s=ve,a=um(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},dm(t),Vs(t,Ve,s)):((e.lanes&n)!==0&&(op(e,t),Cl(t,null,null,n),Rl()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Vs(t,Ve,i)):(i=a.cache,Vs(t,Ve,i),i!==s.cache&&ap(t,[Ve],n,!0))),We(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:Yt&&_h(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:Ar(e,t),We(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(Y(156,t.tag))}function ts(e){e.flags|=4}function Ad(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?_y(t,i):_y(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(kS())e.flags|=8192;else throw La=Wu,fm}else e.flags&=-16777217}function k_(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vM(t))if(kS())e.flags|=8192;else throw La=Wu,fm}function cu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Fy():536870912,e.lanes|=t,eo|=t)}function pl(e,t){if(!Yt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function XT(e,t,n){var i=t.pendingProps;switch(cm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ss(Ve),Qr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Er(t)?ts(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Sd())),Se(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(ts(t),a!==null?(Se(t),k_(t,a)):(Se(t),Ad(t,s,null,i,n))):a?a!==e.memoizedState?(ts(t),Se(t),k_(t,a)):(Se(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ts(t),Se(t),Ad(t,s,e,i,n)),null;case 27:if(Bu(t),n=qs.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ts(t);else{if(!i){if(t.stateNode===null)throw Error(Y(166));return Se(t),t.subtreeFlags&=-33554433,null}e=ki.current,Er(t)?g_(t,e):(e=dM(s,i,n),t.stateNode=e,ts(t))}return Se(t),t.subtreeFlags&=-33554433,null;case 5:if(Bu(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ts(t);else{if(!i){if(t.stateNode===null)throw Error(Y(166));return Se(t),t.subtreeFlags&=-33554433,null}if(a=ki.current,Er(t))g_(t,a);else{var r=Yl(qs.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[rn]=t,a[zn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(un(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&ts(t)}}return Se(t),t.subtreeFlags&=-33554433,Ad(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ts(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Y(166));if(e=qs.current,Er(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=en,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[rn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||eM(e.nodeValue,n)),e||na(t,!0)}else e=Yl(e).createTextNode(i),e[rn]=t,t.stateNode=e}return Se(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Er(t),n!==null){if(e===null){if(!i)throw Error(Y(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(557));e[rn]=t}else Ia(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),e=!1}else n=Sd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Wn(t),t):(Wn(t),null);if((t.flags&128)!==0)throw Error(Y(558))}return Se(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Er(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(Y(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Y(317));s[rn]=t}else Ia(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),s=!1}else s=Sd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Wn(t),t):(Wn(t),null)}return Wn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),cu(t,t.updateQueue),Se(t),null);case 4:return Qr(),e===null&&Fm(t.stateNode.containerInfo),t.flags|=67108864,Se(t),null;case 10:return ss(t.type),Se(t),null;case 19:if(mm(t),i=t.memoizedState,i===null)return Se(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)pl(i,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Zu(e),a!==null){for(t.flags|=128,pl(i,!1),e=a.updateQueue,t.updateQueue=e,cu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)gx(n,e),n=n.sibling;return kl(t,cn.current&1|2),Yt&&es(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Kn()>sh&&(t.flags|=128,s=!0,pl(i,!1),t.lanes=4194304)}else{if(!s)if(e=Zu(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,cu(t,e),pl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!Yt)return Se(t),null}else 2*Kn()-i.renderingStartTime>sh&&n!==536870912&&(t.flags|=128,s=!0,pl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Kn(),e.sibling=null,a=cn.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||Yt?kl(t,a):(n=a,be(hn,t),be(cn,n),vn===null&&(vn=t)),Yt&&es(t,i.treeForkCount),e}return Se(t),null;case 22:case 23:return Wn(t),pm(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),n=t.updateQueue,n!==null&&cu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&ln(Na),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ss(Ve),Se(t),null;case 25:return null;case 30:return t.flags|=33554432,Se(t),null}throw Error(Y(156,t.tag))}function qT(e,t){switch(cm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ss(Ve),Qr(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Bu(t),null;case 31:if(t.memoizedState!==null){if(Wn(t),t.alternate===null)throw Error(Y(340));Ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Wn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Y(340));Ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return mm(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Qr(),null;case 10:return ss(t.type),null;case 22:case 23:return Wn(t),pm(),e!==null&&ln(Na),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ss(Ve),null;case 25:return null;default:return null}}function mS(e,t){switch(cm(t),t.tag){case 3:ss(Ve),Qr();break;case 26:case 27:case 5:Bu(t);break;case 4:Qr();break;case 31:t.memoizedState!==null&&Wn(t);break;case 13:Wn(t);break;case 19:mm(t);break;case 10:ss(t.type);break;case 22:case 23:Wn(t),pm(),e!==null&&ln(Na);break;case 24:ss(Ve)}}function rc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){de(t,t.return,o)}}function sa(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(u){de(s,l,u)}}}i=i.next}while(i!==a)}}catch(u){de(t,t.return,u)}}function gS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ax(t,n)}catch(i){de(e,e.return,i)}}}function vS(e,t,n){n.props=Va(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){de(e,t,i)}}function Pi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=rs(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=oM(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new ti(e);In(e.child,!1,LA,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){de(e,t,o)}}function an(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){de(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){de(e,t,s)}else n.current=null}function $u(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)hM(e.stateNode,t[n])}function X_(e){for(var t=e.return;t!==null&&(Nm(t)&&hM(e.stateNode,t.stateNode),!Um(t));)t=t.return}function Nl(e){for(var t=e.return;t!==null&&(Nm(t)&&OA(e.stateNode,t.stateNode),!Um(t));)t=t.return}function Um(e){return e.tag===5||e.tag===3||e.tag===27}function Nm(e){return e&&e.tag===7&&e.stateNode!==null}function Sp(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){de(e,e.return,s)}}function wd(e,t,n){try{var i=e.stateNode;mA(i,e.type,n,t),i[zn]=t}catch(s){de(e,e.return,s)}}function _S(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&oa(e.type)||e.tag===4}function Rd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||_S(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&oa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mp(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hi)),$u(e,i),re=!0;else if(s!==4&&(s===27&&($u(e,i),i=null,oa(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Mp(e,t,n,i),e=e.sibling;e!==null;)Mp(e,t,n,i),e=e.sibling}function th(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),$u(e,i),re=!0;else if(s!==4&&(s===27&&($u(e,i),i=null,oa(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(th(e,t,n,i),e=e.sibling;e!==null;)th(e,t,n,i),e=e.sibling}function yS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);un(t,i,n),t[rn]=e,t[zn]=n}catch(a){de(e,e.return,a)}}var eh=!1,Yn=null;function q_(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(eh=!0)}var Bi=null;function W_(){var e=Bi;return Bi=null,e}var Nn=0;function po(e,t,n,i,s){return Nn=0,xS(e.child,t,n,i,s)}function xS(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=Gp(r);i.push(o),o.view&&(a=!0)}else a||Gp(r).view&&(a=!0);eh=!0,sM(r,Nn===0?t:t+"_"+Nn,n),Nn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||xS(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function qi(e,t){for(;e!==null;)e.tag===5?aM(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||qi(e.child,t)),e=e.sibling}function wu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(wu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(Y(544));var n=t.name;t=fs(t.default,t.share),t!=="none"&&(po(e,n,t,null,!1)||qi(e.child,!1))}e=e.sibling}}function bp(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=rs(i,n),a=fs(i.default,n.paired?i.share:i.enter);a!=="none"?po(e,s,a,null,!1)?(wu(e),n.paired||t||no(e,i.onEnter)):qi(e.child,!1):wu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)bp(e,t),e=e.sibling;else wu(e)}function Ep(e){if(Yn!==null&&Yn.size!==0){var t=Yn;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=fs(n.default,n.share);if(a!=="none"&&(po(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,no(e,n.onShare)):qi(e.child,!1)),t.delete(i),t.size===0)break}}}Ep(e)}e=e.sibling}}}function Tp(e){if(e.tag===30){var t=e.memoizedProps,n=rs(t,e.stateNode),i=Yn!==null?Yn.get(n):void 0,s=fs(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(po(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,Yn.delete(n),no(e,t.onShare)):no(e,t.onExit):qi(e.child,!1)),Yn!==null&&Ep(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Tp(e),e=e.sibling;else Yn!==null&&Ep(e)}function SS(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=rs(t,e.stateNode);t=fs(t.default,t.update),e.flags&=-5,t!=="none"&&po(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&SS(e);e=e.sibling}}function Ap(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,qi(e.child,!1))}Ap(e)}e=e.sibling}}function Ru(e){if(e.tag===30)e.stateNode.paired=null,qi(e.child,!1),Ap(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ru(e),e=e.sibling;else Ap(e)}function MS(e){for(e=e.child;e!==null;)e.tag===30?qi(e.child,!1):(e.subtreeFlags&33554432)!==0&&MS(e),e=e.sibling}function Lm(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&Nn<a.length){var c=a[Nn],u=Gp(l);(c.view||u.view)&&(o=!0);var p;if(p=(e.flags&4)===0)if(u.clip)p=!0;else{p=c.rect;var h=u.rect;p=p.y!==h.y||p.x!==h.x||p.height!==h.height||p.width!==h.width}p&&(e.flags|=4),u.abs?u=!c.abs:(c=c.rect,u=u.rect,u=c.height!==u.height||c.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&sM(l,Nn===0?n:n+"_"+Nn,s),o&&(e.flags&4)!==0||(Bi===null&&(Bi=[]),Bi.push(l,Nn===0?i:i+"_"+Nn,t.memoizedProps)),Nn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:Lm(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function bS(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=rs(n,i),a=fs(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(SA)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;Nn=0,s=Lm(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||no(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&bS(e,t);e=e.sibling}}var je=!1,ce=!1,Oi=!1,Cd=!1,Y_=typeof WeakSet=="function"?WeakSet:Set,$e=null,Ii=!1,Ml=!1,nh=!1,wp=!1;function WT(e,t,n){if(e=e.containerInfo,Fp=lo,e=lx(e),am(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,u=0,p=0,h=e,d=null;e:for(;;){for(var v;h!==i||a!==0&&h.nodeType!==3||(l=o+a),h!==r||s!==0&&h.nodeType!==3||(c=o+s),h.nodeType===3&&(o+=h.nodeValue.length),(v=h.firstChild)!==null;)d=h,h=v;for(;;){if(h===e)break e;if(d===i&&++u===a&&(l=o),d===r&&++p===s&&(c=o),(v=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=v}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(Hp={focusedElem:e,selectionRange:i},lo=!1,n=(n&335544064)===n,$e=t,t=n?9270:1024;$e!==null;){if(e=$e,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&Tp(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&q_(e),uu(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Tp(i),uu(n);continue}else if(i!==null&&i.memoizedState!==null){n&&q_(e),uu(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,$e=i):(n&&SS(e),uu(n))}}Yn=null}function uu(e){for(;$e!==null;){var t=$e,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=Va(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){de(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)kp(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":kp(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=rs(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=fs(s.default,s.update),s!=="none"&&po(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(Y(163))}if(i=t.sibling,i!==null){i.return=t.return,$e=i;break}$e=t.return}}function ES(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:zi(e,n),i&4&&rc(5,n);break;case 1:if(zi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){de(n,n.return,r)}else{var s=Va(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){de(n,n.return,r)}}i&64&&gS(n),i&512&&Pi(n,n.return);break;case 3:if(zi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ax(e,t)}catch(r){de(n,n.return,r)}}break;case 27:t===null&&i&4&&yS(n);case 26:case 5:zi(e,n),t===null&&i&4&&Sp(n),i&512&&Pi(n,n.return);break;case 12:zi(e,n);break;case 31:zi(e,n),i&4&&RS(e,n);break;case 13:zi(e,n),i&4&&CS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=sA.bind(null,n),PA(e,n))));break;case 22:if(i=n.memoizedState!==null||je,!i){var a=t!==null&&t.memoizedState!==null||ce;t=je,s=ce,je=i,(ce=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Mi(e,n,i)):zi(e,n),je=t,ce=s}break;case 30:zi(e,n),i&512&&Pi(n,n.return);break;case 7:i&512&&Pi(n,n.return);default:zi(e,n)}}function Rp(e,t){for(e=e.child;e!==null;)TS(e,t),e=e.sibling}function TS(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){de(e,e.return,l)}Cp(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,re=!0}catch(l){de(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?cy(o,!0):cy(e.stateNode,!1)}catch(l){de(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&Rp(e,t);break;default:Rp(e,t)}}function Cp(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:TS(n,i);break t;case 22:n.memoizedState===null&&Cp(n,i);break t;default:Cp(n,i)}}e=e.sibling}}function AS(e){var t=e.alternate;t!==null&&(e.alternate=null,AS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&fh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,Dn=!1;function Si(e,t,n){for(n=n.child;n!==null;)wS(e,t,n),n=n.sibling}function wS(e,t,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount($l,n)}catch{}switch(n.tag){case 26:ce||an(n,t),Si(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!ce&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ce||an(n,t),Nl(n);var i=Ae,s=Dn;oa(n.type)&&(Ae=n.stateNode,Dn=!1),Si(e,t,n),pM(n.stateNode,n.type,n.memoizedProps),Ae=i,Dn=s;break;case 5:ce||an(n,t),Nl(n);case 6:if(n.tag===6&&Nl(n),i=Ae,s=Dn,Ae=null,Si(e,t,n),Ae=i,Dn=s,Ae!==null)if(Dn)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(n.stateNode),re=!0}catch(a){de(n,t,a)}else try{Ae.removeChild(n.stateNode),re=!0}catch(a){de(n,t,a)}break;case 18:Ae!==null&&(Dn?(e=Ae,ly(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),co(e)):ly(Ae,n.stateNode));break;case 4:i=Ae,s=Dn,Ae=n.stateNode.containerInfo,Dn=!0,Si(e,t,n),Ae=i,Dn=s;break;case 0:case 11:case 14:case 15:sa(2,n,t),ce||sa(4,n,t),Si(e,t,n);break;case 1:ce||(an(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&vS(n,t,i)),Si(e,t,n);break;case 21:Si(e,t,n);break;case 22:ce=(i=ce)||n.memoizedState!==null,Si(e,t,n),ce=i;break;case 30:an(n,t),Si(e,t,n);break;case 7:ce||an(n,t),Si(e,t,n);break;default:Si(e,t,n)}}function RS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{co(e)}catch(n){de(t,t.return,n)}}}function CS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{co(e)}catch(n){de(t,t.return,n)}}function YT(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Y_),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Y_),t;default:throw Error(Y(435,e.tag))}}function hu(e,t){var n=YT(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=aA.bind(null,e,i);i.then(s,s)}})}function bn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(oa(l.type)){Ae=l.stateNode,Dn=!1;break t}break;case 5:Ae=l.stateNode,Dn=!1;break t;case 3:case 4:Ae=l.stateNode.containerInfo,Dn=!0;break t}l=l.return}if(Ae===null)throw Error(Y(160));wS(r,o,a),Ae=null,Dn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)DS(t,e,n),t=t.sibling}var bi=null;function DS(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}bn(t,e,n),En(e),s&4&&(sa(3,e,e.return),rc(3,e),sa(5,e,e.return));break;case 1:bn(t,e,n),En(e),s&512&&(ce||i===null||an(i,i.return)),s&64&&je&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=bi,bn(t,e,n),En(e),s&512&&(ce||i===null||an(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(je)e.stateNode=iM(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[nc]||i[rn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),un(i,t,n),i[rn]=e,tn(i),t=i;break t;case"link":if(a=vy("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),un(i,t,n),s.head.appendChild(i);break;case"meta":if(a=vy("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),un(i,t,n),s.head.appendChild(i);break;default:throw Error(Y(468,t))}i[rn]=e,tn(i),t=i}e.stateNode=t}else je||Wp(a,e.type,e.stateNode);else e.stateNode=gy(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||ce||t.parentNode.removeChild(t)):s.count--,n===null?je||Wp(a,e.type,e.stateNode):gy(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&wd(e,e.memoizedProps,i.memoizedProps);break;case 27:bn(t,e,n),En(e),s&512&&(ce||i===null||an(i,i.return)),i!==null&&s&4&&wd(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=Oi,Oi=!1,bn(t,e,n),Oi=a,En(e),s&512&&(ce||i===null||an(i,i.return)),e.flags&32){t=e.stateNode;try{$r(t,""),re=!0}catch(u){de(e,e.return,u)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,wd(e,t,i!==null?i.memoizedProps:t)),s&1024&&(Cd=!0);break;case 6:if(bn(t,e,n),En(e),s&4){if(e.stateNode===null)throw Error(Y(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,re=!0}catch(u){de(e,e.return,u)}}break;case 3:if(re=!1,Nu=null,a=bi,bi=Zl(t.containerInfo),bn(t,e,n),bi=a,En(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{co(t.containerInfo)}catch(u){de(e,e.return,u)}Cd&&(Cd=!1,US(e)),re=!1;break;case 4:s=Oi,Oi=je,i=$v(),a=bi,bi=Zl(e.stateNode.containerInfo),bn(t,e,n),En(e),bi=a,re&&Ml&&(nh=!0),re=i,Oi=s;break;case 12:bn(t,e,n),En(e);break;case 31:bn(t,e,n),En(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,hu(e,t)));break;case 13:bn(t,e,n),En(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Th=Kn()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,hu(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=je,l=ce,c=Oi;je=o||a,Oi=c||a,ce=l||r,bn(t,e,n),ce=l,Oi=c,je=o,En(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||je||ce||(t=r||ce,n=je,i=ce,je=a||je,ce=t,Is(e,2),je=n,ce=i),!a&&Oi||Rp(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,hu(e,n))));break;case 19:bn(t,e,n),En(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,hu(e,t)));break;case 30:s&512&&(ce||i===null||an(i,i.return)),s=$v(),a=Ml,r=(n&335544064)===n,o=e.memoizedProps,Ml=r&&fs(o.default,o.update)!=="none",bn(t,e,n),En(e),r&&i!==null&&re&&(e.flags|=4),Ml=a,re=s;break;case 21:break;case 7:s&512&&(ce||i===null||an(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:bn(t,e,n),En(e)}}function En(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(_S(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(Nm(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(Um(s))break;s=s.return}var r=i;if(n==null)throw Error(Y(160));switch(n.tag){case 27:var o=n.stateNode,l=Rd(e);th(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&($r(c,""),n.flags&=-33);var u=Rd(e);th(e,u,c,r);break;case 3:case 4:var p=n.stateNode.containerInfo,h=Rd(e);Mp(e,h,p,r);break;default:throw Error(Y(161))}}catch(d){de(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function US(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;US(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,lo=!0,t.reset(),lo=!1),e=e.sibling}}function Tr(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)NS(t,e),t=t.sibling;else bS(t,!1)}function NS(e,t){var n=e.alternate;if(n===null)bp(e,!1);else switch(e.tag){case 3:if(wp=Ii=!1,W_(),Tr(t,e),!Ii&&!nh){if(e=Bi,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];aM(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),wp=!0}Bi=null;break;case 5:Tr(t,e);break;case 4:i=Ii,Ii=!1,Tr(t,e),Ii&&(nh=!0),Ii=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?bp(e,!1):Tr(t,e));break;case 30:i=Ii,s=W_(),Ii=!1,Tr(t,e),Ii&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=rs(a,r),r=rs(n.memoizedProps,r);var o=fs(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Nn=0,t=Lm(e,n,t,r,o,a,!0),Nn!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(no(e,e.memoizedProps.onUpdate),Bi=s):s!==null&&(s.push.apply(s,Bi),Bi=s),Ii=(e.flags&32)!==0?!0:i;break;default:Tr(t,e)}}function zi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ES(e,t.alternate,t),t=t.sibling}function Is(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:sa(4,n,n.return),Is(n,i);break;case 1:an(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&vS(n,n.return,s),Is(n,i);break;case 27:(i&2)!==0&&pM(n.stateNode,n.type,n.memoizedProps);case 5:an(n,n.return),n.tag!==5&&n.tag!==27||Nl(n),Is(n,i);break;case 6:Nl(n);break;case 26:an(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||ce||s.parentNode.removeChild(s),Is(n,i);break;case 22:n.memoizedState===null&&Is(n,i);break;case 30:an(n,n.return),Is(n,i);break;case 7:an(n,n.return);default:Is(n,i)}e=e.sibling}}function Mi(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:Mi(s,a,n),rc(4,a);break;case 1:if(Mi(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(u){de(i,i.return,u)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)Tx(c[s],l)}catch(u){de(i,i.return,u)}}o&&r&64&&gS(a),Pi(a,a.return);break;case 27:(n&2)!==0&&yS(a);case 5:a.tag!==5&&a.tag!==27||X_(a),Mi(s,a,n),o&&i===null&&r&4&&Sp(a),Pi(a,a.return);break;case 6:X_(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||je||Wp(Zl(l.ownerDocument),a.type,l),Mi(s,a,n),o&&i===null&&r&4&&Sp(a),Pi(a,a.return);break;case 12:Mi(s,a,n);break;case 31:Mi(s,a,n),o&&r&4&&RS(s,a);break;case 13:Mi(s,a,n),o&&r&4&&CS(s,a);break;case 22:a.memoizedState===null&&Mi(s,a,n),Pi(a,a.return);break;case 30:Mi(s,a,n),Pi(a,a.return);break;case 7:Pi(a,a.return);default:Mi(s,a,n)}t=t.sibling}}function Om(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&sc(n))}function Im(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sc(e))}function oi(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)LS(e,t,n,i),t=t.sibling;else s&&MS(t)}function LS(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Ru(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:oi(e,t,n,i),a&2048&&rc(9,t);break;case 1:oi(e,t,n,i);break;case 3:oi(e,t,n,i),s&&wp&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&sc(a)));break;case 12:if(a&2048){oi(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){de(t,t.return,c)}}else oi(e,t,n,i);break;case 31:oi(e,t,n,i);break;case 13:oi(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&Ru(o),r._visibility&2?oi(e,t,n,i):Ll(e,t)):(s&&o!==null&&o.memoizedState!==null&&Ru(t),r._visibility&2?oi(e,t,n,i):(r._visibility|=2,wr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&Om(o,t);break;case 24:oi(e,t,n,i),a&2048&&Im(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(qi(a.child,!0),qi(t.child,!0))),oi(e,t,n,i);break;default:oi(e,t,n,i)}}function wr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:wr(a,r,o,l,s),rc(8,r);break;case 23:break;case 22:var u=r.stateNode;r.memoizedState!==null?u._visibility&2?wr(a,r,o,l,s):Ll(a,r):(u._visibility|=2,wr(a,r,o,l,s)),s&&c&2048&&Om(r.alternate,r);break;case 24:wr(a,r,o,l,s),s&&c&2048&&Im(r.alternate,r);break;default:wr(a,r,o,l,s)}t=t.sibling}}function Ll(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Ll(n,i),s&2048&&Om(i.alternate,i);break;case 24:Ll(n,i),s&2048&&Im(i.alternate,i);break;default:Ll(n,i)}t=t.sibling}}var wa=8192;function Ea(e,t,n){if(e.subtreeFlags&wa)for(e=e.child;e!==null;)OS(e,t,n),e=e.sibling}function OS(e,t,n){switch(e.tag){case 26:Ea(e,t,n),e.flags&wa&&(e.memoizedState!==null?QA(n,bi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&yy(n,e)));break;case 5:Ea(e,t,n),e.flags&wa&&(e=e.stateNode,(t&335544128)===t&&yy(n,e));break;case 3:case 4:var i=bi;bi=Zl(e.stateNode.containerInfo),Ea(e,t,n),bi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=wa,wa=16777216,Ea(e,t,n),wa=i):Ea(e,t,n));break;case 30:if((e.flags&wa)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,Yn===null&&(Yn=new Map),Yn.set(i,s)}Ea(e,t,n);break;default:Ea(e,t,n)}}function IS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ml(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];$e=i,PS(i,e)}IS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zS(e),e=e.sibling}function zS(e){switch(e.tag){case 0:case 11:case 15:ml(e),e.flags&2048&&sa(9,e,e.return);break;case 3:ml(e);break;case 12:ml(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Cu(e)):ml(e);break;default:ml(e)}}function Cu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];$e=i,PS(i,e)}IS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:sa(8,t,t.return),Cu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Cu(t));break;default:Cu(t)}e=e.sibling}}function PS(e,t){for(;$e!==null;){var n=$e;switch(n.tag){case 0:case 11:case 15:sa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:sc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,$e=i;else t:for(n=e;$e!==null;){i=$e;var s=i.sibling,a=i.return;if(AS(i),i===n){$e=null;break t}if(s!==null){s.return=a,$e=s;break t}$e=a}}}var ZT={getCacheForType:function(e){var t=on(Ve),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return on(Ve).controller.signal}},KT=typeof WeakMap=="function"?WeakMap:Map,oe=0,ve=null,jt=null,ee=0,he=0,Xn=null,Gs=!1,mo=!1,zm=!1,us=0,Ie=0,aa=0,Oa=0,ih=0,Zn=0,eo=0,Ol=null,Un=null,Dp=!1,Th=0,BS=0,sh=1/0,ah=null,Qs=null,Ue=0,Ti=null,Ga=null,Xi=0,Up=0,Np=null,FS=null,Zr=null,Kr=null,Jr=null,Il=0,Du=null;function jn(){return(oe&2)!==0&&ee!==0?ee&-ee:zt.T!==null?Bm():ky()}function HS(){if(Zn===0)if((ee&536870912)===0||Yt){var e=jc;jc<<=1,(jc&3932160)===0&&(jc=262144),Zn=e}else Zn=536870912;return e=hn.current,e!==null&&(e.flags|=32),Zn}function no(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=oM(rs(e.memoizedProps,n))),Kr===null&&(Kr=[]),Kr.push(t.bind(null,i))}}function On(e,t,n){(e===ve&&(he===2||he===9)||e.cancelPendingCommit!==null)&&(io(e,0),ks(e,ee,Zn,!1)),ec(e,n),((oe&2)===0||e!==ve)&&(e===ve&&((oe&2)===0&&(Oa|=n),Ie===4&&ks(e,ee,Zn,!1)),Yi(e))}function VS(e,t,n){if((oe&6)!==0)throw Error(Y(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||tc(e,t),s=i?jT(e,t):Dd(e,t,!0),a=i;do{if(s===0){mo&&!i&&ks(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!JT(n)){s=Dd(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=Ol;var l=o.current.memoizedState.isDehydrated;if(l&&(io(o,r).flags|=256),r=Dd(o,r,!1),r!==2&&r!==6){if(zm&&!l){o.errorRecoveryDisabledLanes|=a,Oa|=a,s=4;break t}a=Un,Un=s,a!==null&&(Un===null?Un=a:Un.push.apply(Un,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){io(e,0),ks(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(Y(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:ks(i,t,Zn,!Gs);break t;case 2:Un=null;break;case 3:case 5:break;default:throw Error(Y(329))}if((t&62914560)===t&&(s=Th+300-Kn(),10<s)){if(ks(i,t,Zn,!Gs),hh(i,0,!0)!==0)break t;Xi=t,i.timeoutHandle=Hm(Z_.bind(null,i,n,Un,ah,Dp,t,Zn,Oa,eo,Gs,a,"Throttled",-0,0),s);break t}Z_(i,n,Un,ah,Dp,t,Zn,Oa,eo,Gs,a,null,-0,0)}}break}while(!0);Yi(e)}function Z_(e,t,n,i,s,a,r,o,l,c,u,p,h,d){e.timeoutHandle=-1;var v=t.subtreeFlags,y=(a&335544064)===a;if(p=null,(y||v&8192||(v&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hi},Yn=null,OS(t,a,p),y&&(v=p,y=e.containerInfo,y=(y.nodeType===9?y:y.ownerDocument).__reactViewTransition,y!=null&&(v.count++,v.waitingForViewTransition=!0,v=Kl.bind(v),y.finished.then(v,v))),v=(a&62914560)===a?Th-Kn():(a&4194048)===a?BS-Kn():0,v=jA(p,v),v!==null)){Xi=a,e.cancelPendingCommit=v(J_.bind(null,e,t,a,n,i,s,r,o,l,c,u,p,null,h,d)),ks(e,a,r,!c);return}J_(e,t,a,n,i,s,r,o,l,c,u,p)}function JT(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!$n(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ks(e,t,n,i){t=By(e,t),t&=~ih,t&=~Oa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Qn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&Hy(e,n,t)}function Ah(){return(oe&6)===0?(oc(0,!1),!1):!0}function Pm(){if(jt!==null){if(he===0)var e=jt.return;else e=jt,ns=Ya=null,xm(e),qr=null,Gl=0,e=jt;for(;e!==null;)mS(e.alternate,e),e=e.return;jt=null}}function io(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_A(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Xi=0,Pm(),ve=e,jt=n=is(e.current,null),ee=t,he=0,Xn=null,Gs=!1,mo=tc(e,t),zm=!1,eo=Zn=ih=Oa=aa=Ie=0,Un=Ol=null,Dp=!1,us=By(e,t),gh(),n}function GS(e,t){kt=null,zt.H=Qu,t===fo||t===yh?(t=S_(),he=3):t===fm?(t=S_(),he=4):he=t===Rm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Xn=t,jt===null&&(Ie=1,ju(e,fi(t,e.current)))}function kS(){var e=hn.current;return e===null?!0:(ee&4194048)===ee?vn===null:(ee&62914560)===ee||(ee&536870912)!==0?e===vn:!1}function XS(){var e=zt.H;return zt.H=Qu,e===null?Qu:e}function qS(){var e=zt.A;return zt.A=ZT,e}function rh(){Ie=4,Gs||(ee&4194048)!==ee&&hn.current!==null||(mo=!0),(aa&134217727)===0&&(Oa&134217727)===0||ve===null||ks(ve,ee,Zn,!1)}function Dd(e,t,n){var i=oe;oe|=2;var s=XS(),a=qS();(ve!==e||ee!==t)&&(ah=null,io(e,t)),t=!1;var r=Ie;t:do try{if(he!==0&&jt!==null){var o=jt,l=Xn;switch(he){case 8:Pm(),r=6;break t;case 3:case 2:case 9:case 6:hn.current===null&&(t=!0);var c=he;if(he=0,Xn=null,Hr(e,o,l,c),n&&mo){r=0;break t}break;default:c=he,he=0,Xn=null,Hr(e,o,l,c)}}QT(),r=Ie;break}catch(u){GS(e,u)}while(!0);return t&&e.shellSuspendCounter++,ns=Ya=null,oe=i,zt.H=s,zt.A=a,jt===null&&(ve=null,ee=0,gh()),r}function QT(){for(;jt!==null;)WS(jt)}function jT(e,t){var n=oe;oe|=2;var i=XS(),s=qS();ve!==e||ee!==t?(ah=null,sh=Kn()+500,io(e,t)):mo=tc(e,t);t:do try{if(he!==0&&jt!==null){t=jt;var a=Xn;e:switch(he){case 1:he=0,Xn=null,Hr(e,t,a,1);break;case 2:case 9:if(x_(a)){he=0,Xn=null,K_(t);break}t=function(){he!==2&&he!==9||ve!==e||(he=7),Yi(e)},a.then(t,t);break t;case 3:he=7;break t;case 4:he=5;break t;case 7:x_(a)?(he=0,Xn=null,K_(t)):(he=0,Xn=null,Hr(e,t,a,7));break;case 5:var r=null;switch(jt.tag){case 26:r=jt.memoizedState;case 5:case 27:var o=jt;if(r?vM(r):o.stateNode.complete){he=0,Xn=null;var l=o.sibling;if(l!==null)jt=l;else{var c=o.return;c!==null?(jt=c,wh(c)):jt=null}break e}}he=0,Xn=null,Hr(e,t,a,5);break;case 6:he=0,Xn=null,Hr(e,t,a,6);break;case 8:Pm(),Ie=6;break t;default:throw Error(Y(462))}}$T();break}catch(u){GS(e,u)}while(!0);return ns=Ya=null,zt.H=i,zt.A=s,oe=n,jt!==null?0:(ve=null,ee=0,gh(),Ie)}function $T(){for(;jt!==null&&!gE();)WS(jt)}function WS(e){var t=pS(e.alternate,e,us);e.memoizedProps=e.pendingProps,t===null?wh(e):jt=t}function K_(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=P_(n,t,t.pendingProps,t.type,void 0,ee);break;case 11:t=P_(n,t,t.pendingProps,t.type.render,t.ref,ee);break;case 5:xm(t);var i=t;i===en&&(Yt?(Xu(i),i.tag===5&&i.stateNode!=null&&(Me=i.stateNode)):(Xu(i),Yt=!0));default:mS(n,t),t=jt=gx(t,us),t=pS(n,t,us)}e.memoizedProps=e.pendingProps,t===null?wh(e):jt=t}function Hr(e,t,n,i){ns=Ya=null,xm(t),qr=null,Gl=0;var s=t.return;try{if(HT(e,s,t,n,ee)){Ie=1,ju(e,fi(n,e.current)),jt=null;return}}catch(a){if(s!==null)throw jt=s,a;Ie=1,ju(e,fi(n,e.current)),jt=null;return}t.flags&32768?(Yt||i===1?e=!0:mo||(ee&536870912)!==0?e=!1:(Gs=e=!0,(i===2||i===9||i===3||i===6)&&(i=hn.current,i!==null&&i.tag===13&&(i.flags|=16384))),YS(t,e)):wh(t)}function wh(e){var t=e;do{if((t.flags&32768)!==0){YS(t,Gs);return}e=t.return;var n=XT(t.alternate,t,us);if(n!==null){jt=n;return}if(t=t.sibling,t!==null){jt=t;return}jt=t=e}while(t!==null);Ie===0&&(Ie=5)}function YS(e,t){do{var n=qT(e.alternate,e);if(n!==null){n.flags&=32767,jt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){jt=e;return}jt=e=n}while(e!==null);Ie=6,jt=null}function J_(e,t,n,i,s,a,r,o,l,c,u,p){e.cancelPendingCommit=null;do Rh();while(Ue!==0);if((oe&6)!==0)throw Error(Y(327));if(t!==null){if(t===e.current)throw Error(Y(177));e===ve&&(jt=ve=null,ee=0),Ga=t,Ti=e,Xi=n,Np=s,FS=i,tA(e,t,n,r,o,l,p)}}function tA(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(Up=o,o|=rm,AE(e,n,o,i,s,a),Kr=null,(n&335544064)===n?(Jr=RT(e),i=10262):(Jr=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,rA(Fu,function(){return zp(),null})):(e.callbackNode=null,e.callbackPriority=0),eh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=zt.T,zt.T=null,s=le.p,le.p=2,a=oe,oe|=4;try{WT(e,t,n)}finally{oe=a,le.p=s,zt.T=i}}Ue=1,eh?Zr=EA(r,e.containerInfo,Jr,Lp,Op,nA,Ip,zp,eA,null,null):(Lp(),Op(),Ip())}function eA(e){if(Ue!==0){var t=Ti.onRecoverableError;t(e,{componentStack:null})}}function nA(){Ue===3&&(Ue=0,NS(Ga,Ti),Ue=4)}function Lp(){if(Ue===1){Ue=0;var e=Ti,t=Ga,n=Xi,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=zt.T,zt.T=null;var s=le.p;le.p=2;var a=oe;oe|=4;try{Ml=nh=!1,DS(t,e,n),n=Hp;var r=lx(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&ox(o.ownerDocument.documentElement,o)){if(l!==null&&am(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var p=o.ownerDocument||document,h=p&&p.defaultView||window;if(h.getSelection){var d=h.getSelection(),v=o.textContent.length,y=Math.min(l.start,v),m=l.end===void 0?y:Math.min(l.end,v);!d.extend&&y>m&&(r=m,m=y,y=r);var f=f_(o,y),_=f_(o,m);if(f&&_&&(d.rangeCount!==1||d.anchorNode!==f.node||d.anchorOffset!==f.offset||d.focusNode!==_.node||d.focusOffset!==_.offset)){var g=p.createRange();g.setStart(f.node,f.offset),d.removeAllRanges(),y>m?(d.addRange(g),d.extend(_.node,_.offset)):(g.setEnd(_.node,_.offset),d.addRange(g))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var x=p[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}lo=!!Fp,Hp=Fp=null}finally{oe=a,le.p=s,zt.T=i}}e.current=t,Ue=2}}function Op(){if(Ue===2){Ue=0;var e=Ti,t=Ga,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=zt.T,zt.T=null;var i=le.p;le.p=2;var s=oe;oe|=4;try{ES(e,t.alternate,t)}finally{oe=s,le.p=i,zt.T=n}}Ue=3}}function Ip(){if(Ue===4||Ue===3){Ue=0;var e=Zr;Zr=null,vE();var t=Ti,n=Ga,i=Xi,s=FS,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Ue=5:(Ue=0,Ga=Ti=null,ZS(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(Qs=null),$p(i),n=n.stateNode,Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot($l,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=zt.T,a=le.p,le.p=2,zt.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{zt.T=n,le.p=a}}if(s=Kr,r=Jr,Jr=null,s!==null&&(Kr=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(Xi&3)!==0&&Rh(),Yi(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===Du?Il++:(Il=0,Du=t):(Il=0,Du=null),oc(0,!1)}}function ZS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sc(t)))}function Rh(){return Zr!==null&&(Zr.skipTransition(),Zr=null),Lp(),Op(),Ip(),zp()}function zp(){if(Ue!==5)return!1;var e=Ti,t=Up;Up=0;var n=$p(Xi),i=zt.T,s=le.p;try{le.p=32>n?32:n,zt.T=null,n=Np,Np=null;var a=Ti,r=Xi;if(Ue=0,Ga=Ti=null,Xi=0,(oe&6)!==0)throw Error(Y(331));var o=oe;if(oe|=4,zS(a.current),LS(a,a.current,r,n),oe=o,oc(0,!1),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot($l,a)}catch{}return!0}finally{le.p=s,zt.T=i,ZS(e,t)}}function Q_(e,t,n){t=fi(n,t),t=mp(e.stateNode,t,2),e=Zs(e,t,2),e!==null&&(ec(e,2),Yi(e))}function de(e,t,n){if(e.tag===3)Q_(e,e,n);else for(;t!==null;){if(t.tag===3){Q_(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qs===null||!Qs.has(i))){e=fi(n,e),n=cS(2),i=Zs(t,n,2),i!==null&&(uS(n,i,t,e),ec(i,2),Yi(i));break}}t=t.return}}function Ud(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new KT;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(zm=!0,s.add(n),e=iA.bind(null,e,t,n),t.then(e,e))}function iA(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ve===e&&(ee&n)===n&&((Ie===4||Ie===3&&(ee&62914560)===ee&&300>Kn()-Th)&&(oe&2)===0?io(e,0):ih|=n,eo===ee&&(eo=0)),Yi(e)}function KS(e,t){t===0&&(t=Fy()),e=Wa(e,t),e!==null&&(ec(e,t),Yi(e))}function sA(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),KS(e,n)}function aA(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Y(314))}i!==null&&i.delete(t),KS(e,n)}function rA(e,t){return Qp(e,t)}var so=null,Rr=null,Pp=!1,oh=!1,Nd=!1,Xs=0;function Yi(e){e!==Rr&&e.next===null&&(Rr===null?so=Rr=e:Rr=Rr.next=e),oh=!0,Pp||(Pp=!0,lA())}function oc(e,t){if(!Nd&&oh){Nd=!0;do for(var n=!1,i=so;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Qn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,j_(i,a))}else a=ee,a=hh(i,i===ve?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||tc(i,a)||(n=!0,j_(i,a));i=i.next}while(n);Nd=!1}}function oA(){JS()}function JS(){oh=Pp=!1;var e=0;Xs!==0&&vA()&&(e=Xs);for(var t=Kn(),n=null,i=so;i!==null;){var s=i.next,a=QS(i,t);a===0?(i.next=null,n===null?so=s:n.next=s,s===null&&(Rr=n)):(n=i,(e!==0||(a&3)!==0)&&(oh=!0)),i=s}Ue!==0&&Ue!==5||oc(e,!1),Xs!==0&&(Xs=0)}function QS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Qn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=TE(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=ve,n=ee,n=hh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(he===2||he===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&ud(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||tc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&ud(i),$p(n)){case 2:case 8:n=zy;break;case 32:n=Fu;break;case 268435456:n=Py;break;default:n=Fu}return i=jS.bind(null,e),n=Qp(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&ud(i),e.callbackPriority=2,e.callbackNode=null,2}function jS(e,t){if(Ue!==0&&Ue!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Rh()&&e.callbackNode!==n)return null;var i=ee;return i=hh(e,e===ve?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(VS(e,i,t),QS(e,Kn()),e.callbackNode!=null&&e.callbackNode===n?jS.bind(null,e):null)}function j_(e,t){if(Rh())return null;VS(e,t,!0)}function lA(){yA(function(){(oe&6)!==0?Qp(Iy,oA):JS()})}function Bm(){if(Xs===0){var e=Ba;e===0&&(e=Qc,Qc<<=1,(Qc&261888)===0&&(Qc=256)),Xs=e}return Xs}function $_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_u(e)}function cA(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=$_((s[zn]||null).action),r=i.submitter;r&&(t=(t=r[zn]||null)?$_(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new dh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Xs!==0){var l=new FormData(s,r);dp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),dp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(fu=0;fu<np.length;fu++)du=np[fu],ty=du.toLowerCase(),ey=du[0].toUpperCase()+du.slice(1),Ai(ty,"on"+ey);var du,ty,ey,fu;Ai(ux,"onAnimationEnd");Ai(hx,"onAnimationIteration");Ai(fx,"onAnimationStart");Ai("dblclick","onDoubleClick");Ai("focusin","onFocus");Ai("focusout","onBlur");Ai(xT,"onTransitionRun");Ai(ST,"onTransitionStart");Ai(MT,"onTransitionCancel");Ai(dx,"onTransitionEnd");jr("onMouseEnter",["mouseout","mouseover"]);jr("onMouseLeave",["mouseout","mouseover"]);jr("onPointerEnter",["pointerout","pointerover"]);jr("onPointerLeave",["pointerout","pointerover"]);Xa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xa("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ql));function $S(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){Vu(u)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){Vu(u)}s.currentTarget=null,a=l}}}}function Qt(e,t){var n=t[Kv];n===void 0&&(n=t[Kv]=new Set);var i=e+"__bubble";n.has(i)||(tM(t,e,2,!1),n.add(i))}function Ld(e,t,n){var i=0;t&&(i|=4),tM(n,e,i,t)}var pu="_reactListening"+Math.random().toString(36).slice(2);function Fm(e){if(!e[pu]){e[pu]=!0,qy.forEach(function(n){n!=="selectionchange"&&(uA.has(n)||Ld(n,!1,e),Ld(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pu]||(t[pu]=!0,Ld("selectionchange",!1,t))}}function tM(e,t,n,i){switch(EM(t)){case 2:var s=nw;break;case 8:s=iw;break;default:s=Wm}n=s.bind(null,t,n,e),s=void 0,!jd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Od(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=Ra(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}$y(function(){var c=a,u=em(n),p=[];t:{var h=px.get(e);if(h!==void 0){var d=dh,v=e;switch(e){case"keypress":if(xu(n)===0)break t;case"keydown":case"keyup":d=JE;break;case"focusin":v="focus",d=gd;break;case"focusout":v="blur",d=gd;break;case"beforeblur":case"afterblur":d=gd;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=i_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=BE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=eT;break;case ux:case hx:case fx:d=VE;break;case dx:d=iT;break;case"scroll":case"scrollend":d=zE;break;case"wheel":d=aT;break;case"copy":case"cut":case"paste":d=kE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=a_;break;case"submit":d=$E;break;case"toggle":case"beforetoggle":d=oT}var y=(t&4)!==0,m=!y&&(e==="scroll"||e==="scrollend"),f=y?h!==null?h+"Capture":null:h;y=[];for(var _=c,g;_!==null;){var x=_;if(g=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||g===null||f===null||(x=Pl(_,f),x!=null&&y.push(Wl(_,x,g))),m)break;_=_.return}0<y.length&&(h=new d(h,v,null,n,u),p.push({event:h,listeners:y}))}}if((t&7)===0){t:{if(d=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",d&&n!==Qd&&(v=n.relatedTarget||n.fromElement)&&(Ra(v)||v[uo]))break t;(h||d)&&(v=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,h?(d=n.relatedTarget||n.toElement,h=c,d=d?Ra(d):null,d!==null&&(m=jl(d),y=d.tag,d!==m||y!==5&&y!==27&&y!==6)&&(d=null)):(h=null,d=c),h!==d&&(y=i_,x="onMouseLeave",f="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(y=a_,x="onPointerLeave",f="onPointerEnter",_="pointer"),m=h==null?v:xl(h),g=d==null?v:xl(d),v=new y(x,_+"leave",h,n,u),v.target=m,v.relatedTarget=g,x=null,Ra(u)===c&&(y=new y(f,_+"enter",d,n,u),y.target=g,y.relatedTarget=m,x=y),m=x,y=h&&d?Fd(h,d,hA):null,h!==null&&ny(p,v,h,y,!1),d!==null&&m!==null&&ny(p,m,d,y,!0)))}t:{if(h=c?xl(c):window,d=h.nodeName&&h.nodeName.toLowerCase(),d==="select"||d==="input"&&h.type==="file")var D=c_;else if(l_(h))if(ax)D=vT;else{D=mT;var C=pT}else d=h.nodeName,!d||d.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&tm(c.elementType)&&(D=c_):D=gT;if(D&&(D=D(e,c))){sx(p,D,n,u);break t}C&&C(e,h,c)}switch(C=c?xl(c):window,e){case"focusin":(l_(C)||C.contentEditable==="true")&&(Or=C,tp=c,Tl=null);break;case"focusout":Tl=tp=Or=null;break;case"mousedown":ep=!0;break;case"contextmenu":case"mouseup":case"dragend":ep=!1,d_(p,n,u);break;case"selectionchange":if(yT)break;case"keydown":case"keyup":d_(p,n,u)}var A;if(sm)t:{switch(e){case"compositionstart":var U="onCompositionStart";break t;case"compositionend":U="onCompositionEnd";break t;case"compositionupdate":U="onCompositionUpdate";break t}U=void 0}else Lr?nx(e,n)&&(U="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(ex&&n.locale!=="ko"&&(Lr||U!=="onCompositionStart"?U==="onCompositionEnd"&&Lr&&(A=tx()):(Hs=u,nm="value"in Hs?Hs.value:Hs.textContent,Lr=!0)),C=lh(c,U),0<C.length&&(U=new s_(U,e,null,n,u),p.push({event:U,listeners:C}),A?U.data=A:(A=ix(n),A!==null&&(U.data=A)))),(A=cT?uT(e,n):hT(e,n))&&(U=lh(c,"onBeforeInput"),0<U.length&&(C=new s_("onBeforeInput","beforeinput",null,n,u),p.push({event:C,listeners:U}),C.data=A)),cA(p,e,c,n,u)}$S(p,t)})}function Wl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function lh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Pl(e,n),s!=null&&i.unshift(Wl(e,s,a)),s=Pl(e,t),s!=null&&i.push(Wl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function hA(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ny(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Pl(n,a),c!=null&&r.unshift(Wl(n,c,l))):s||(c=Pl(n,a),c!=null&&r.push(Wl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var fA=/\r\n?/g,dA=/\u0000|\uFFFD/g;function iy(e){return(typeof e=="string"?e:""+e).replace(fA,`
`).replace(dA,"")}function eM(e,t){return t=iy(t),iy(e)===t}function fe(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||$r(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&$r(e,""+i);else return;break;case"className":tu(e,"class",i);break;case"tabIndex":tu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":tu(e,n,i);break;case"style":jy(e,i,a);return;case"data":if(t!=="object"){tu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=_u(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&fe(e,t,"name",s.name,s,null),fe(e,t,"formEncType",s.formEncType,s,null),fe(e,t,"formMethod",s.formMethod,s,null),fe(e,t,"formTarget",s.formTarget,s,null)):(fe(e,t,"encType",s.encType,s,null),fe(e,t,"method",s.method,s,null),fe(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=_u(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Hi);return;case"onScroll":i!=null&&Qt("scroll",e);return;case"onScrollEnd":i!=null&&Qt("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Y(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Y(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=_u(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Qt("beforetoggle",e),Qt("toggle",e),vu(e,"popover",i);break;case"xlinkActuate":$i(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":$i(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":$i(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":$i(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":$i(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":$i(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":$i(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":$i(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":$i(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":vu(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=OE.get(n)||n,vu(e,n,i);else return}re=!0}function Bp(e,t,n,i,s,a){switch(n){case"style":jy(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Y(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Y(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")$r(e,i);else if(typeof i=="number"||typeof i=="bigint")$r(e,""+i);else return;break;case"onScroll":i!=null&&Qt("scroll",e);return;case"onScrollEnd":i!=null&&Qt("scrollend",e);return;case"onClick":i!=null&&(e.onclick=Hi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Wy.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[zn]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}re=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):vu(e,n,i)}return}re=!0}function un(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qt("error",e),Qt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Y(137,t));default:fe(e,t,a,r,n,null)}}s&&fe(e,t,"srcSet",n.srcSet,n,null),i&&fe(e,t,"src",n.src,n,null);return;case"input":Qt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"name":s=u;break;case"type":r=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":a=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(Y(137,t));break;default:fe(e,t,i,u,n,null)}}Ky(e,a,o,l,c,r,s,!1);return;case"select":Qt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:fe(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Gr(e,!!i,t,!1):n!=null&&Gr(e,!!i,n,!0);return;case"textarea":Qt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Y(91));break;default:fe(e,t,r,o,n,null)}Qy(e,i,s,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:fe(e,t,l,i,n,null)}return;case"dialog":Qt("beforetoggle",e),Qt("toggle",e),Qt("cancel",e),Qt("close",e);break;case"iframe":case"object":Qt("load",e);break;case"video":case"audio":for(i=0;i<ql.length;i++)Qt(ql[i],e);break;case"image":Qt("error",e),Qt("load",e);break;case"details":Qt("toggle",e);break;case"embed":case"source":case"link":Qt("error",e),Qt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Y(137,t));default:fe(e,t,c,i,n,null)}return;default:if(tm(t)){for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!==void 0&&Bp(e,t,u,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&fe(e,t,o,i,n,null))}var pA={};function mA(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,u=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||fe(e,t,d,null,i,p)}}for(var h in i){var d=i[h];if(p=n[h],i.hasOwnProperty(h)&&(d!=null||p!=null))switch(h){case"type":d!==p&&(re=!0),a=d;break;case"name":d!==p&&(re=!0),s=d;break;case"checked":d!==p&&(re=!0),c=d;break;case"defaultChecked":d!==p&&(re=!0),u=d;break;case"value":d!==p&&(re=!0),r=d;break;case"defaultValue":d!==p&&(re=!0),o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(Y(137,t));break;default:d!==p&&fe(e,t,h,d,i,p)}}Jd(e,r,o,l,c,u,a,s);return;case"select":d=r=o=h=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||fe(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(re=!0),h=a;break;case"defaultValue":a!==l&&(re=!0),o=a;break;case"multiple":a!==l&&(re=!0),r=a;default:a!==l&&fe(e,t,s,a,i,l)}t=o,n=r,i=d,h!=null?Gr(e,!!n,h,!1):!!i!=!!n&&(t!=null?Gr(e,!!n,t,!0):Gr(e,!!n,n?[]:"",!1));return;case"textarea":d=h=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:fe(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(re=!0),h=s;break;case"defaultValue":s!==a&&(re=!0),d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(Y(91));break;default:s!==a&&fe(e,t,r,s,i,a)}Jy(e,h,d);return;case"option":for(var v in n)if(h=n[v],n.hasOwnProperty(v)&&h!=null&&!i.hasOwnProperty(v))switch(v){case"selected":e.selected=!1;break;default:fe(e,t,v,null,i,h)}for(l in i)if(h=i[l],d=n[l],i.hasOwnProperty(l)&&h!==d&&(h!=null||d!=null))switch(l){case"selected":h!==d&&(re=!0),e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:fe(e,t,l,h,i,d)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var y in n)h=n[y],n.hasOwnProperty(y)&&h!=null&&!i.hasOwnProperty(y)&&fe(e,t,y,null,i,h);for(c in i)if(h=i[c],d=n[c],i.hasOwnProperty(c)&&h!==d&&(h!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(Y(137,t));break;default:fe(e,t,c,h,i,d)}return;default:if(tm(t)){for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&Bp(e,t,m,void 0,i,h);for(u in i)h=i[u],d=n[u],!i.hasOwnProperty(u)||h===d||h===void 0&&d===void 0||Bp(e,t,u,h,i,d);return}}for(var f in n)h=n[f],n.hasOwnProperty(f)&&h!=null&&!i.hasOwnProperty(f)&&fe(e,t,f,null,i,h);for(p in i)h=i[p],d=n[p],!i.hasOwnProperty(p)||h===d||h==null&&d==null||fe(e,t,p,h,i,d)}function sy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gA(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&sy(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var u=l.transferSize,p=l.initiatorType;u&&sy(p)&&(l=l.responseEnd,r+=u*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Fp=null,Hp=null;function Yl(e){return e.nodeType===9?e:e.ownerDocument}function ay(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nM(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function iM(e,t,n,i){return n=Yl(n).createElement(e),n[rn]=i,n[zn]=t,un(n,e,t),tn(n),n}function Vp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Id=null;function vA(){var e=window.event;return e&&e.type==="popstate"?e===Id?!1:(Id=e,!0):(Id=null,!1)}var Hm=typeof setTimeout=="function"?setTimeout:void 0,_A=typeof clearTimeout=="function"?clearTimeout:void 0,ry=typeof Promise=="function"?Promise:void 0,oy=typeof requestAnimationFrame=="function"?requestAnimationFrame:Hm,yA=typeof queueMicrotask=="function"?queueMicrotask:typeof ry<"u"?function(e){return ry.resolve(null).then(e).catch(xA)}:Hm;function xA(e){setTimeout(function(){throw e})}function oa(e){return e==="head"}function ly(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),co(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Pd(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Pd(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[nc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Pd(e.ownerDocument.body);n=s}while(n);co(t)}function cy(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function sM(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function aM(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function rM(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Gp(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return rM(t,n,e)}function SA(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return rM(t,n,e)}function MA(e){return e.documentElement.clientHeight}function bA(e){this.addEventListener("load",e),this.addEventListener("error",e)}function EA(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var u=c.startViewTransition({update:function(){var h=c.defaultView,d=h.navigation&&h.navigation.transition,v=c.fonts.status;i();var y=[];if(v==="loaded"&&(MA(c),c.fonts.status==="loading"&&y.push(c.fonts.ready)),v=y.length,e!==null)for(var m=e.suspenseyImages,f=0,_=0;_<m.length;_++){var g=m[_];if(!g.complete){var x=g.getBoundingClientRect();if(0<x.bottom&&0<x.right&&x.top<h.innerHeight&&x.left<h.innerWidth){if(f+=_M(g),f>Lu){y.length=v;break}g=new Promise(bA.bind(g)),y.push(g)}}}if(0<y.length)return h=Promise.race([Promise.all(y),new Promise(function(D){return setTimeout(D,500)})]).then(s,s),(d?Promise.allSettled([d.finished,h]):h).then(a,a);if(s(),d)return d.finished.then(a,a);a()},types:n});c.__reactViewTransition=u;var p=[];return u.ready.then(function(){for(var h=c.documentElement.getAnimations({subtree:!0}),d=0;d<h.length;d++){var v=h[d],y=v.effect,m=y.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){p.push(v),v=y.getKeyframes();for(var f=m=void 0,_=!0,g=0;g<v.length;g++){var x=v[g],D=x.width;if(m===void 0)m=D;else if(m!==D){_=!1;break}if(D=x.height,f===void 0)f=D;else if(f!==D){_=!1;break}delete x.width,delete x.height,x.transform==="none"&&delete x.transform}_&&m!==void 0&&f!==void 0&&(y.setKeyframes(v),_=getComputedStyle(y.target,y.pseudoElement),_.width!==m||_.height!==f)&&(_=v[0],_.width=m,_.height=f,_=v[v.length-1],_.width=m,_.height=f,y.setKeyframes(v))}}r()},function(h){c.__reactViewTransition===u&&(c.__reactViewTransition=null);try{if(typeof h=="object"&&h!==null)switch(h.name){case"InvalidStateError":(h.message==="View transition was skipped because document visibility state is hidden."||h.message==="Skipping view transition because document visibility state has become hidden."||h.message==="Skipping view transition because viewport size changed."||h.message==="Transition was aborted because of invalid state")&&(h=null)}h!==null&&l(h)}finally{i(),s(),r()}}),u.finished.finally(function(){for(var h=0;h<p.length;h++)p[h].cancel();c.__reactViewTransition===u&&(c.__reactViewTransition=null),o()}),u}catch{return i(),s(),r(),null}}function Ca(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Ca.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:_e({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};Ca.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};Ca.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function oM(e){return{name:e,group:new Ca("group",e),imagePair:new Ca("image-pair",e),old:new Ca("old",e),new:new Ca("new",e)}}function ti(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}ti.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(lM(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=ao(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),In(this._fragmentFiber.child,!1,TA,e,o,i)}this._eventListeners=a}};function TA(e,t,n,i){return Ye(e).addEventListener(t,n,i),!1}ti.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=lM(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=ao(s.optionsOrUseCapture),In(this._fragmentFiber.child,!1,AA,e,n,s),i.splice(t,1),a!==null&&a()}};function AA(e,t,n,i){return Ye(e).removeEventListener(t,n,i),!1}function ao(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function uy(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function lM(e,t,n,i){if(e.length===0)return-1;i=uy(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&uy(a.optionsOrUseCapture)===i)return s}return-1}ti.prototype.dispatchEvent=function(e){var t=ka(this._fragmentFiber);if(t===null)return!0;t=Ye(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,ao(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,ao(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};ti.prototype.focus=function(e){In(this._fragmentFiber.child,!0,cM,e,void 0,void 0)};function cM(e,t){return e.tag===6?!1:(e=Ye(e),BA(e,t))}ti.prototype.focusLast=function(e){var t=[];In(this._fragmentFiber.child,!0,Vm,t,void 0,void 0);for(var n=t.length-1;0<=n&&!cM(t[n],e);n--);};function Vm(e,t){return t.push(e),!1}ti.prototype.blur=function(){var e=ka(this._fragmentFiber);e!==null&&(e=Ye(e),e=Yl(e).activeElement,e!==null&&In(this._fragmentFiber.child,!1,wA,e,void 0,void 0))};function wA(e,t){return e.tag===6?!1:(e=Ye(e),e===t||e.contains(t)?(t.blur(),!0):!1)}ti.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),In(this._fragmentFiber.child,!1,RA,e,void 0,void 0)};function RA(e,t){return e.tag===6||(e=Ye(e),t.observe(e)),!1}ti.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),In(this._fragmentFiber.child,!1,CA,e,void 0,void 0);for(var n=t=0;n<Ei.length;n++){var i=Ei[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Ei[t++]=i}Ei.length=t}};function CA(e,t){return e.tag===6||(e=Ye(e),t.unobserve(e)),!1}var Ei=[],zd=!1;function DA(e,t,n){Ei.push({fragmentInstance:e,observer:t,instance:n}),zd||(zd=!0,FA(function(){zd=!1;var i=Ei;Ei=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}ti.prototype.getClientRects=function(){var e=[];return In(this._fragmentFiber.child,!1,UA,e,void 0,void 0),e};function UA(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=Ye(e),t.push.apply(t,e.getClientRects());return!1}ti.prototype.getRootNode=function(e){var t=ka(this._fragmentFiber);return t===null?this:Ye(t).getRootNode(e)};ti.prototype.compareDocumentPosition=function(e){var t=ka(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];In(this._fragmentFiber.child,!1,Vm,n,void 0,void 0);var i=Ye(t);if(n.length===0){if(n=i,kv(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Uy(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=Ye(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=Ye(n[0]),s=Ye(n[n.length-1]);var a=kv(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||NA(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function NA(e,t,n,i,s){var a=Ra(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=ka(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=Fd(n,a,Xv),t===null?t=!1:(In(t,!0,lE,a,n),a=Cr,Cr=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=Fd(i,a,Xv),t===null?t=!1:(In(t,!0,cE,a,i),a=Cr,Bd=Cr=null,t=a!==null)),t):!1}function hy(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}ti.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(Y(566));var t=[];In(this._fragmentFiber.child,!1,Vm,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=Uy(this._fragmentFiber);if(i=n?i[1]||i[0]||ka(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=Ye(i),hy(e,n);return}if(i=Ye(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=Ye(s),hy(s,n)):Ye(s).scrollIntoView(e),i+=n?-1:1}};function LA(e,t){return e=Ye(e),uM(e,t),!1}function uM(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function hM(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,ao(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Ei.length;o++){var l=Ei[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Ei[r++]=l)}Ei.length=r,a.observe(e)}),uM(e,t))}function OA(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,ao(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?DA(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function kp(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":kp(n),fh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function IA(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[nc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function zA(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=pi(e.nextSibling),e===null))return null;return e}function fM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=pi(e.nextSibling),e===null))return null;return e}function Xp(e){return e.data==="$?"||e.data==="$~"}function Gm(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function PA(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function pi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var qp=null;function fy(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return pi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function dy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function BA(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function FA(e){oy(function(){oy(function(t){return e(t)})})}function dM(e,t,n){switch(t=Yl(n),e){case"html":if(e=t.documentElement,!e)throw Error(Y(452));return e;case"head":if(e=t.head,!e)throw Error(Y(453));return e;case"body":if(e=t.body,!e)throw Error(Y(454));return e;default:throw Error(Y(451))}}function pM(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&fe(e,t,i,null,pA,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Hi&&(e.onclick=null),fh(e)}function Pd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);fh(e)}var mi=new Map,py=new Set;function Zl(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var ds=le.d;le.d={f:HA,r:VA,D:GA,C:kA,L:XA,m:qA,X:YA,S:WA,M:ZA};function HA(){var e=ds.f(),t=Ah();return e||t}function VA(e){var t=ho(e);t!==null&&t.tag===5&&t.type==="form"?jx(t):ds.r(e)}var go=typeof document>"u"?null:document;function mM(e,t,n){var i=go;if(i&&typeof t=="string"&&t){var s=hi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),py.has(s)||(py.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),un(t,"link",e),tn(t),i.head.appendChild(t)))}}function GA(e){ds.D(e),mM("dns-prefetch",e,null)}function kA(e,t){ds.C(e,t),mM("preconnect",e,t)}function XA(e,t,n){ds.L(e,t,n);var i=go;if(i&&e&&t){var s='link[rel="preload"][as="'+hi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+hi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+hi(n.imageSizes)+'"]')):s+='[href="'+hi(e)+'"]';var a=s;switch(t){case"style":a=ro(e);break;case"script":a=vo(e)}if(!(mi.has(a)||(e=_e({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),mi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(lc(a))||t==="script"&&i.querySelector(cc(a))))){var r=i.createElement("link");un(r,"link",e),t==="style"&&(r[Hu]=!0,r.onload=r.onerror=function(){Xy(r)}),tn(r),i.head.appendChild(r)}}}function qA(e,t){ds.m(e,t);var n=go;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+hi(i)+'"][href="'+hi(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=vo(e)}if(!mi.has(a)&&(e=_e({rel:"modulepreload",href:e},t),mi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(cc(a)))return}i=n.createElement("link"),un(i,"link",e),tn(i),n.head.appendChild(i)}}}function WA(e,t,n){ds.S(e,t,n);var i=go;if(i&&e){var s=Vr(i).hoistableStyles,a=ro(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(lc(a)))o.loading=5;else{e=_e({rel:"stylesheet",href:e,"data-precedence":t},n),(n=mi.get(a))&&km(e,n);var l=r=i.createElement("link");tn(l),un(l,"link",e),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Uu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function YA(e,t){ds.X(e,t);var n=go;if(n&&e){var i=Vr(n).hoistableScripts,s=vo(e),a=i.get(s);a||(a=n.querySelector(cc(s)),a||(e=_e({src:e,async:!0},t),(t=mi.get(s))&&Xm(e,t),a=n.createElement("script"),tn(a),un(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function ZA(e,t){ds.M(e,t);var n=go;if(n&&e){var i=Vr(n).hoistableScripts,s=vo(e),a=i.get(s);a||(a=n.querySelector(cc(s)),a||(e=_e({src:e,async:!0,type:"module"},t),(t=mi.get(s))&&Xm(e,t),a=n.createElement("script"),tn(a),un(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function my(e,t,n,i){var s=(s=qs.current)?Zl(s):null;if(!s)throw Error(Y(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=ro(n.href),t=Vr(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ro(n.href);var a=Vr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(lc(e)))?a._p||(r.instance=a,r.state.loading=5):(a=mi.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mi.set(e,a)),KA(s,e,a,r.state))),t&&i===null)throw Error(Y(528,""));return r}if(t&&i!==null)throw Error(Y(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=vo(n),t=Vr(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Y(444,e))}}function ro(e){return'href="'+hi(e)+'"'}function lc(e){return'link[rel="stylesheet"]['+e+"]"}function gM(e){return _e({},e,{"data-precedence":e.precedence,precedence:null})}function KA(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Hu]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[Hu]=!0,t.onload=t.onerror=Xy.bind(null,t),un(t,"link",n),tn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function vo(e){return'[src="'+hi(e)+'"]'}function cc(e){return"script[async]"+e}function gy(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+hi(n.href)+'"]');if(i)return t.instance=i,tn(i),i;var s=_e({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),tn(i),un(i,"style",s),Uu(i,n.precedence,e),t.instance=i;case"stylesheet":s=ro(n.href);var a=e.querySelector(lc(s));if(a)return t.state.loading|=4,t.instance=a,tn(a),a;i=gM(n),(s=mi.get(s))&&km(i,s),a=(e.ownerDocument||e).createElement("link"),tn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),un(a,"link",i),t.state.loading|=4,Uu(a,n.precedence,e),t.instance=a;case"script":return a=vo(n.src),(s=e.querySelector(cc(a)))?(t.instance=s,tn(s),s):(i=n,(s=mi.get(a))&&(i=_e({},n),Xm(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),tn(s),un(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(Y(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Uu(i,n.precedence,e));return t.instance}function Uu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function km(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Xm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Nu=null;function vy(e,t,n){if(Nu===null){var i=new Map,s=Nu=new Map;s.set(n,i)}else s=Nu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[nc]||a[rn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function Wp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function JA(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function _y(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function vM(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function _M(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function yy(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=_M(t),e.suspenseyImages.push(t)),e=$A.bind(e),t.decode().then(e,e))}function QA(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=ro(i.href),a=t.querySelector(lc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Kl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,tn(a);return}a=t.ownerDocument||t,i=gM(i),(s=mi.get(s))&&km(i,s),a=a.createElement("link"),tn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),un(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Kl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Lu=0;function jA(e,t){return e.stylesheets&&e.count===0&&Ou(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Ou(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Lu===0&&(Lu=62500*gA());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ou(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Lu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function yM(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Ou(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Kl(){this.count--,yM(this)}function $A(){this.imgCount--,yM(this)}var ch=null;function Ou(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ch=new Map,t.forEach(tw,e),ch=null,Kl.call(e))}function tw(e,t){if(!(t.state.loading&4)){var n=ch.get(e);if(n)var i=n.get(null);else{n=new Map,ch.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Kl.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var oo={$$typeof:Fi,Provider:null,Consumer:null,_currentValue:Da,_currentValue2:Da,_threadCount:0};function ew(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hd(0),this.hiddenUpdates=hd(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function xM(e,t,n,i,s,a,r,o,l,c,u,p){return e=new ew(e,t,n,r,l,c,u,p,o),t=1,a===!0&&(t|=24),a=Ln(3,null,null,t),e.current=a,a.stateNode=e,t=um(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},dm(a),e}function SM(e){return e?(e=Pr,e):Pr}function MM(e,t,n,i,s,a){s=SM(s),i.context===null?i.context=s:i.pendingContext=s,i=Ys(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Zs(e,i,t),n!==null&&(On(n,e,t),wl(n,e,t))}function xy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qm(e,t){xy(e,t),(e=e.alternate)&&xy(e,t)}function bM(e){if(e.tag===13||e.tag===31){var t=Wa(e,67108864);t!==null&&On(t,e,67108864),qm(e,67108864)}}function Sy(e){if(e.tag===13||e.tag===31){var t=jn();t=jp(t);var n=Wa(e,t);n!==null&&On(n,e,t),qm(e,t)}}var lo=!0;function nw(e,t,n,i){var s=zt.T;zt.T=null;var a=le.p;try{le.p=2,Wm(e,t,n,i)}finally{le.p=a,zt.T=s}}function iw(e,t,n,i){var s=zt.T;zt.T=null;var a=le.p;try{le.p=8,Wm(e,t,n,i)}finally{le.p=a,zt.T=s}}function Wm(e,t,n,i){if(lo){var s=Yp(i);if(s===null)Od(e,t,i,uh,n),My(e,i);else if(aw(s,e,t,n,i))i.stopPropagation();else if(My(e,i),t&4&&-1<sw.indexOf(e)){for(;s!==null;){var a=ho(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Ta(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Qn(r);o.entanglements[1]|=l,r&=~l}Yi(a),(oe&6)===0&&(sh=Kn()+500,oc(0,!1))}}break;case 31:case 13:o=Wa(a,2),o!==null&&On(o,a,2),Ah(),qm(a,2)}if(a=Yp(i),a===null&&Od(e,t,i,uh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Od(e,t,i,null,n)}}function Yp(e){return e=em(e),Ym(e)}var uh=null;function Ym(e){if(uh=null,e=Ra(e),e!==null){var t=jl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Ry(t),e!==null)return e;e=null}else if(n===31){if(e=Cy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return uh=e,null}function EM(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_E()){case Iy:return 2;case zy:return 8;case Fu:case yE:return 32;case Py:return 268435456;default:return 32}default:return 32}}var Zp=!1,js=null,$s=null,ta=null,Jl=new Map,Ql=new Map,Bs=[],sw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function My(e,t){switch(e){case"focusin":case"focusout":js=null;break;case"dragenter":case"dragleave":$s=null;break;case"mouseover":case"mouseout":ta=null;break;case"pointerover":case"pointerout":Jl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ql.delete(t.pointerId)}}function gl(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=ho(t),t!==null&&bM(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function aw(e,t,n,i,s){switch(t){case"focusin":return js=gl(js,e,t,n,i,s),!0;case"dragenter":return $s=gl($s,e,t,n,i,s),!0;case"mouseover":return ta=gl(ta,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return Jl.set(a,gl(Jl.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Ql.set(a,gl(Ql.get(a)||null,e,t,n,i,s)),!0}return!1}function TM(e){var t=Ra(e.target);if(t!==null){var n=jl(t);if(n!==null){if(t=n.tag,t===13){if(t=Ry(n),t!==null){e.blockedOn=t,Zv(e.priority,function(){Sy(n)});return}}else if(t===31){if(t=Cy(n),t!==null){e.blockedOn=t,Zv(e.priority,function(){Sy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Iu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yp(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Qd=i,n.target.dispatchEvent(i),Qd=null}else return t=ho(n),t!==null&&bM(t),e.blockedOn=n,!1;t.shift()}return!0}function by(e,t,n){Iu(e)&&n.delete(t)}function rw(){Zp=!1,js!==null&&Iu(js)&&(js=null),$s!==null&&Iu($s)&&($s=null),ta!==null&&Iu(ta)&&(ta=null),Jl.forEach(by),Ql.forEach(by)}function mu(e,t){e.blockedOn===t&&(e.blockedOn=null,Zp||(Zp=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,rw)))}var gu=null;function Ey(e){gu!==e&&(gu=e,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,function(){gu===e&&(gu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Ym(i||n)===null)continue;break}var a=ho(n);a!==null&&(e.splice(t,3),t-=3,dp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function co(e){function t(l){return mu(l,e)}js!==null&&mu(js,e),$s!==null&&mu($s,e),ta!==null&&mu(ta,e),Jl.forEach(t),Ql.forEach(t);for(var n=0;n<Bs.length;n++){var i=Bs[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Bs.length&&(n=Bs[0],n.blockedOn===null);)TM(n),n.blockedOn===null&&Bs.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[zn]||null;if(typeof a=="function")r||Ey(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[zn]||null)o=r.formAction;else if(Ym(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Ey(n)}}}function AM(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Zm(e){this._internalRoot=e}Ch.prototype.render=Zm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Y(409));var n=t.current,i=jn();MM(n,i,e,t,null,null)};Ch.prototype.unmount=Zm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;MM(e.current,2,null,e,null,null),Ah(),t[uo]=null}};function Ch(e){this._internalRoot=e}Ch.prototype.unstable_scheduleHydration=function(e){if(e){var t=ky();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bs.length&&t!==0&&t<Bs[n].priority;n++);Bs.splice(n,0,e),n===0&&TM(e)}};var Ty=Ay.version;if(Ty!=="19.3.1")throw Error(Y(527,Ty,"19.3.1"));le.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=oE(t),e=e!==null?Dy(e):null,e=e===null?null:e.stateNode,e};var ow={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:zt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(vl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!vl.isDisabled&&vl.supportsFiber))try{$l=vl.inject(ow),Jn=vl}catch{}var vl;Dh.createRoot=function(e,t){if(!wy(e))throw Error(Y(299));var n=!1,i="",s=rS,a=oS,r=lS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=xM(e,1,!1,null,null,n,i,null,s,a,r,AM),e[uo]=t.current,Fm(e),new Zm(t)};Dh.hydrateRoot=function(e,t,n){if(!wy(e))throw Error(Y(299));var i=!1,s="",a=rS,r=oS,o=lS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=xM(e,1,!0,t,n??null,i,s,l,a,r,o,AM),t.context=SM(null),n=t.current,i=jn(),i=jp(i),s=Ys(i),s.callback=null,Zs(n,s,i),n=i,t.current.lanes=n,ec(t,n),Yi(t),e[uo]=t.current,Fm(e),new Ch(t)};Dh.version="19.3.1"});var DM=Ni((vN,CM)=>{"use strict";function RM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(RM)}catch(e){console.error(e)}}RM(),CM.exports=wM()});var ub=Ni(Bf=>{"use strict";var IU=Symbol.for("react.transitional.element"),zU=Symbol.for("react.fragment");function cb(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:IU,type:e,key:i,ref:t!==void 0?t:null,props:n}}Bf.Fragment=zU;Bf.jsx=cb;Bf.jsxs=cb});var Pc=Ni((MN,hb)=>{"use strict";hb.exports=ub()});var Cb=_r(DM(),1);var hr=_r(Zc(),1);var lw=0,UM=1,cw=2;var P1=1,uw=2,ys=3,_a=0,Hn=1,vi=2,ma=0,Bo=1,NM=2,LM=3,OM=4,hw=5,er=100,fw=101,dw=102,pw=103,mw=104,gw=200,vw=201,_w=202,yw=203,wg=204,Rg=205,xw=206,Sw=207,Mw=208,bw=209,Ew=210,Tw=211,Aw=212,ww=213,Rw=214,Cw=0,Dw=1,Uw=2,cf=3,Nw=4,Lw=5,Ow=6,Iw=7,B1=0,zw=1,Pw=2,ga=0,Bw=1,Fw=2,Hw=3,Vw=4,Gw=5,kw=6,X0=7;var F1=300,Go=301,ko=302,Cg=303,Dg=304,Of=306,As=1e3,Ss=1001,Ug=1002,Fn=1003,Xw=1004;var Uh=1005;var ii=1006,Km=1007;var Ms=1008;var ws=1009,H1=1010,V1=1011,Sc=1012,q0=1013,ir=1014,bs=1015,zc=1016,W0=1017,Y0=1018,Xo=1020,G1=35902,k1=1021,X1=1022,Di=1023,q1=1024,W1=1025,Fo=1026,qo=1027,Y1=1028,Z0=1029,Z1=1030,K0=1031;var J0=1033,sf=33776,af=33777,rf=33778,of=33779,Ng=35840,Lg=35841,Og=35842,Ig=35843,zg=36196,Pg=37492,Bg=37496,Fg=37808,Hg=37809,Vg=37810,Gg=37811,kg=37812,Xg=37813,qg=37814,Wg=37815,Yg=37816,Zg=37817,Kg=37818,Jg=37819,Qg=37820,jg=37821,lf=36492,$g=36494,t0=36495,K1=36283,e0=36284,n0=36285,i0=36286;var uf=2300,s0=2301,Jm=2302,IM=2400,zM=2401,PM=2402;var qw=3200,Ww=3201;var J1=0,Yw=1,pa="",Bn="srgb",xa="srgb-linear",Q0="display-p3",If="display-p3-linear",hf="linear",Ee="srgb",ff="rec709",df="p3";var _o=7680;var BM=519,Zw=512,Kw=513,Jw=514,Q1=515,Qw=516,jw=517,$w=518,tR=519,FM=35044;var HM="300 es",Es=2e3,pf=2001,ya=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qm=Math.PI/180,a0=180/Math.PI;function $o(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[e&255]+_n[e>>8&255]+_n[e>>16&255]+_n[e>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[n&63|128]+_n[n>>8&255]+"-"+_n[n>>16&255]+_n[n>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function fn(e,t,n){return Math.max(t,Math.min(n,e))}function eR(e,t){return(e%t+t)%t}function jm(e,t,n){return(1-n)*e+n*t}function uc(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Pn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var ut=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(fn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=n,u[4]=a,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],p=i[7],h=i[2],d=i[5],v=i[8],y=s[0],m=s[3],f=s[6],_=s[1],g=s[4],x=s[7],D=s[2],C=s[5],A=s[8];return a[0]=r*y+o*_+l*D,a[3]=r*m+o*g+l*C,a[6]=r*f+o*x+l*A,a[1]=c*y+u*_+p*D,a[4]=c*m+u*g+p*C,a[7]=c*f+u*x+p*A,a[2]=h*y+d*_+v*D,a[5]=h*m+d*g+v*C,a[8]=h*f+d*x+v*A,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return n*r*u-n*o*c-i*a*u+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=u*r-o*c,h=o*l-u*a,d=c*a-r*l,v=n*p+i*h+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/v;return t[0]=p*y,t[1]=(s*c-u*i)*y,t[2]=(o*i-s*r)*y,t[3]=h*y,t[4]=(u*n-s*l)*y,t[5]=(s*a-o*n)*y,t[6]=d*y,t[7]=(i*l-c*n)*y,t[8]=(r*n-i*a)*y,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply($m.makeScale(t,n)),this}rotate(t){return this.premultiply($m.makeRotation(-t)),this}translate(t,n){return this.premultiply($m.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$m=new qt;function j1(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function mf(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function nR(){let e=mf("canvas");return e.style.display="block",e}var VM={};function vc(e){e in VM||(VM[e]=!0,console.warn(e))}function iR(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var GM=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kM=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hc={[xa]:{transfer:hf,primaries:ff,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e,fromReference:e=>e},[Bn]:{transfer:Ee,primaries:ff,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[If]:{transfer:hf,primaries:df,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.applyMatrix3(kM),fromReference:e=>e.applyMatrix3(GM)},[Q0]:{transfer:Ee,primaries:df,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.convertSRGBToLinear().applyMatrix3(kM),fromReference:e=>e.applyMatrix3(GM).convertLinearToSRGB()}},sR=new Set([xa,If]),ue={enabled:!0,_workingColorSpace:xa,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!sR.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let i=hc[t].toReference,s=hc[n].fromReference;return s(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return hc[e].primaries},getTransfer:function(e){return e===pa?hf:hc[e].transfer},getLuminanceCoefficients:function(e,t=this._workingColorSpace){return e.fromArray(hc[t].luminanceCoefficients)}};function Ho(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function tg(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var yo,r0=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{yo===void 0&&(yo=mf("canvas")),yo.width=t.width,yo.height=t.height;let i=yo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=yo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=mf("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Ho(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ho(n[i]/255)*255):n[i]=Ho(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},aR=0,gf=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aR++}),this.uuid=$o(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(eg(s[r].image)):a.push(eg(s[r]))}else a=eg(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function eg(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?r0.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var rR=0,Vn=class e extends ya{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Ss,s=Ss,a=ii,r=Ms,o=Di,l=ws,c=e.DEFAULT_ANISOTROPY,u=pa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rR++}),this.uuid=$o(),this.name="",this.source=new gf(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==F1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case As:t.x=t.x-Math.floor(t.x);break;case Ss:t.x=t.x<0?0:1;break;case Ug:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case As:t.y=t.y-Math.floor(t.y);break;case Ss:t.y=t.y<0?0:1;break;case Ug:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=F1;Vn.DEFAULT_ANISOTROPY=1;var Ke=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],u=l[4],p=l[8],h=l[1],d=l[5],v=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(p-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let g=(c+1)/2,x=(d+1)/2,D=(f+1)/2,C=(u+h)/4,A=(p+y)/4,U=(v+m)/4;return g>x&&g>D?g<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(g),s=C/i,a=A/i):x>D?x<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(x),i=C/s,a=U/s):D<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(D),i=A/a,s=U/a),this.set(i,s,a,n),this}let _=Math.sqrt((m-v)*(m-v)+(p-y)*(p-y)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(p-y)/_,this.z=(h-u)/_,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},o0=class extends ya{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Ke(0,0,t,n),this.scissorTest=!1,this.viewport=new Ke(0,0,t,n);let s={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let a=new Vn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let n=Object.assign({},t.texture.image);return this.texture.source=new gf(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rs=class extends o0{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},vf=class extends Vn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var l0=class extends Vn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var si=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],u=i[s+2],p=i[s+3],h=a[r+0],d=a[r+1],v=a[r+2],y=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=u,t[n+3]=p;return}if(o===1){t[n+0]=h,t[n+1]=d,t[n+2]=v,t[n+3]=y;return}if(p!==y||l!==h||c!==d||u!==v){let m=1-o,f=l*h+c*d+u*v+p*y,_=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){let D=Math.sqrt(g),C=Math.atan2(D,f*_);m=Math.sin(m*C)/D,o=Math.sin(o*C)/D}let x=o*_;if(l=l*m+h*x,c=c*m+d*x,u=u*m+v*x,p=p*m+y*x,m===1-o){let D=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=D,c*=D,u*=D,p*=D}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],p=a[r],h=a[r+1],d=a[r+2],v=a[r+3];return t[n]=o*v+u*p+l*d-c*h,t[n+1]=l*v+u*h+c*p-o*d,t[n+2]=c*v+u*d+o*h-l*p,t[n+3]=u*v-o*p-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),p=o(a/2),h=l(i/2),d=l(s/2),v=l(a/2);switch(r){case"XYZ":this._x=h*u*p+c*d*v,this._y=c*d*p-h*u*v,this._z=c*u*v+h*d*p,this._w=c*u*p-h*d*v;break;case"YXZ":this._x=h*u*p+c*d*v,this._y=c*d*p-h*u*v,this._z=c*u*v-h*d*p,this._w=c*u*p+h*d*v;break;case"ZXY":this._x=h*u*p-c*d*v,this._y=c*d*p+h*u*v,this._z=c*u*v+h*d*p,this._w=c*u*p-h*d*v;break;case"ZYX":this._x=h*u*p-c*d*v,this._y=c*d*p+h*u*v,this._z=c*u*v-h*d*p,this._w=c*u*p+h*d*v;break;case"YZX":this._x=h*u*p+c*d*v,this._y=c*d*p+h*u*v,this._z=c*u*v-h*d*p,this._w=c*u*p-h*d*v;break;case"XZY":this._x=h*u*p-c*d*v,this._y=c*d*p-h*u*v,this._z=c*u*v+h*d*p,this._w=c*u*p+h*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],u=n[6],p=n[10],h=i+o+p;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(u-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fn(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+r*o+s*c-a*l,this._y=s*u+r*l+a*o-i*c,this._z=a*u+r*c+i*l-s*o,this._w=r*u-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-n;return this._w=d*r+n*this._w,this._x=d*i+n*this._x,this._y=d*s+n*this._y,this._z=d*a+n*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),p=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=r*p+this._w*h,this._x=i*p+this._x*h,this._y=s*p+this._y*h,this._z=a*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(XM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(XM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),u=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*u,this.y=i+l*u+o*c-a*p,this.z=s+l*p+a*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ng.copy(this).projectOnVector(t),this.sub(ng)}reflect(t){return this.sub(ng.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(fn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ng=new N,XM=new si,sr=class{constructor(t=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(wi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(wi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=wi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,wi):wi.fromBufferAttribute(a,r),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nh.copy(i.boundingBox)),Nh.applyMatrix4(t.matrixWorld),this.union(Nh)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fc),Lh.subVectors(this.max,fc),xo.subVectors(t.a,fc),So.subVectors(t.b,fc),Mo.subVectors(t.c,fc),la.subVectors(So,xo),ca.subVectors(Mo,So),Za.subVectors(xo,Mo);let n=[0,-la.z,la.y,0,-ca.z,ca.y,0,-Za.z,Za.y,la.z,0,-la.x,ca.z,0,-ca.x,Za.z,0,-Za.x,-la.y,la.x,0,-ca.y,ca.x,0,-Za.y,Za.x,0];return!ig(n,xo,So,Mo,Lh)||(n=[1,0,0,0,1,0,0,0,1],!ig(n,xo,So,Mo,Lh))?!1:(Oh.crossVectors(la,ca),n=[Oh.x,Oh.y,Oh.z],ig(n,xo,So,Mo,Lh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ps[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ps[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ps[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ps[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ps[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ps[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ps[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ps[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ps),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ps=[new N,new N,new N,new N,new N,new N,new N,new N],wi=new N,Nh=new sr,xo=new N,So=new N,Mo=new N,la=new N,ca=new N,Za=new N,fc=new N,Lh=new N,Oh=new N,Ka=new N;function ig(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Ka.fromArray(e,a);let o=s.x*Math.abs(Ka.x)+s.y*Math.abs(Ka.y)+s.z*Math.abs(Ka.z),l=t.dot(Ka),c=n.dot(Ka),u=i.dot(Ka);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var oR=new sr,dc=new N,sg=new N,Mc=class{constructor(t=new N,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):oR.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dc.subVectors(t,this.center);let n=dc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(dc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sg.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dc.copy(t.center).add(sg)),this.expandByPoint(dc.copy(t.center).sub(sg))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ms=new N,ag=new N,Ih=new N,ua=new N,rg=new N,zh=new N,og=new N,_f=class{constructor(t=new N,n=new N(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ms)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=ms.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ms.copy(this.origin).addScaledVector(this.direction,n),ms.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){ag.copy(t).add(n).multiplyScalar(.5),Ih.copy(n).sub(t).normalize(),ua.copy(this.origin).sub(ag);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Ih),o=ua.dot(this.direction),l=-ua.dot(Ih),c=ua.lengthSq(),u=Math.abs(1-r*r),p,h,d,v;if(u>0)if(p=r*l-o,h=r*o-l,v=a*u,p>=0)if(h>=-v)if(h<=v){let y=1/u;p*=y,h*=y,d=p*(p+r*h+2*o)+h*(r*p+h+2*l)+c}else h=a,p=Math.max(0,-(r*h+o)),d=-p*p+h*(h+2*l)+c;else h=-a,p=Math.max(0,-(r*h+o)),d=-p*p+h*(h+2*l)+c;else h<=-v?(p=Math.max(0,-(-r*a+o)),h=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+h*(h+2*l)+c):h<=v?(p=0,h=Math.min(Math.max(-a,-l),a),d=h*(h+2*l)+c):(p=Math.max(0,-(r*a+o)),h=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+h*(h+2*l)+c);else h=r>0?-a:a,p=Math.max(0,-(r*h+o)),d=-p*p+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(ag).addScaledVector(Ih,h),d}intersectSphere(t,n){ms.subVectors(t.center,this.origin);let i=ms.dot(this.direction),s=ms.dot(ms)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(a=(t.min.y-h.y)*u,r=(t.max.y-h.y)*u):(a=(t.max.y-h.y)*u,r=(t.min.y-h.y)*u),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-h.z)*p,l=(t.max.z-h.z)*p):(o=(t.max.z-h.z)*p,l=(t.min.z-h.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,ms)!==null}intersectTriangle(t,n,i,s,a){rg.subVectors(n,t),zh.subVectors(i,t),og.crossVectors(rg,zh);let r=this.direction.dot(og),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ua.subVectors(this.origin,t);let l=o*this.direction.dot(zh.crossVectors(ua,zh));if(l<0)return null;let c=o*this.direction.dot(rg.cross(ua));if(c<0||l+c>r)return null;let u=-o*ua.dot(og);return u<0?null:this.at(u/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Re=class e{constructor(t,n,i,s,a,r,o,l,c,u,p,h,d,v,y,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,u,p,h,d,v,y,m)}set(t,n,i,s,a,r,o,l,c,u,p,h,d,v,y,m){let f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=s,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=p,f[14]=h,f[3]=d,f[7]=v,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/bo.setFromMatrixColumn(t,0).length(),a=1/bo.setFromMatrixColumn(t,1).length(),r=1/bo.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let h=r*u,d=r*p,v=o*u,y=o*p;n[0]=l*u,n[4]=-l*p,n[8]=c,n[1]=d+v*c,n[5]=h-y*c,n[9]=-o*l,n[2]=y-h*c,n[6]=v+d*c,n[10]=r*l}else if(t.order==="YXZ"){let h=l*u,d=l*p,v=c*u,y=c*p;n[0]=h+y*o,n[4]=v*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*u,n[9]=-o,n[2]=d*o-v,n[6]=y+h*o,n[10]=r*l}else if(t.order==="ZXY"){let h=l*u,d=l*p,v=c*u,y=c*p;n[0]=h-y*o,n[4]=-r*p,n[8]=v+d*o,n[1]=d+v*o,n[5]=r*u,n[9]=y-h*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let h=r*u,d=r*p,v=o*u,y=o*p;n[0]=l*u,n[4]=v*c-d,n[8]=h*c+y,n[1]=l*p,n[5]=y*c+h,n[9]=d*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let h=r*l,d=r*c,v=o*l,y=o*c;n[0]=l*u,n[4]=y-h*p,n[8]=v*p+d,n[1]=p,n[5]=r*u,n[9]=-o*u,n[2]=-c*u,n[6]=d*p+v,n[10]=h-y*p}else if(t.order==="XZY"){let h=r*l,d=r*c,v=o*l,y=o*c;n[0]=l*u,n[4]=-p,n[8]=c*u,n[1]=h*p+y,n[5]=r*u,n[9]=d*p-v,n[2]=v*p-d,n[6]=o*u,n[10]=y*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lR,t,cR)}lookAt(t,n,i){let s=this.elements;return ei.subVectors(t,n),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),ha.crossVectors(i,ei),ha.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),ha.crossVectors(i,ei)),ha.normalize(),Ph.crossVectors(ei,ha),s[0]=ha.x,s[4]=Ph.x,s[8]=ei.x,s[1]=ha.y,s[5]=Ph.y,s[9]=ei.y,s[2]=ha.z,s[6]=Ph.z,s[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],p=i[5],h=i[9],d=i[13],v=i[2],y=i[6],m=i[10],f=i[14],_=i[3],g=i[7],x=i[11],D=i[15],C=s[0],A=s[4],U=s[8],E=s[12],S=s[1],R=s[5],q=s[9],H=s[13],k=s[2],Z=s[6],G=s[10],tt=s[14],X=s[3],dt=s[7],_t=s[11],St=s[15];return a[0]=r*C+o*S+l*k+c*X,a[4]=r*A+o*R+l*Z+c*dt,a[8]=r*U+o*q+l*G+c*_t,a[12]=r*E+o*H+l*tt+c*St,a[1]=u*C+p*S+h*k+d*X,a[5]=u*A+p*R+h*Z+d*dt,a[9]=u*U+p*q+h*G+d*_t,a[13]=u*E+p*H+h*tt+d*St,a[2]=v*C+y*S+m*k+f*X,a[6]=v*A+y*R+m*Z+f*dt,a[10]=v*U+y*q+m*G+f*_t,a[14]=v*E+y*H+m*tt+f*St,a[3]=_*C+g*S+x*k+D*X,a[7]=_*A+g*R+x*Z+D*dt,a[11]=_*U+g*q+x*G+D*_t,a[15]=_*E+g*H+x*tt+D*St,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],p=t[6],h=t[10],d=t[14],v=t[3],y=t[7],m=t[11],f=t[15];return v*(+a*l*p-s*c*p-a*o*h+i*c*h+s*o*d-i*l*d)+y*(+n*l*d-n*c*h+a*r*h-s*r*d+s*c*u-a*l*u)+m*(+n*c*p-n*o*d-a*r*p+i*r*d+a*o*u-i*c*u)+f*(-s*o*u-n*l*p+n*o*h+s*r*p-i*r*h+i*l*u)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=t[9],h=t[10],d=t[11],v=t[12],y=t[13],m=t[14],f=t[15],_=p*m*c-y*h*c+y*l*d-o*m*d-p*l*f+o*h*f,g=v*h*c-u*m*c-v*l*d+r*m*d+u*l*f-r*h*f,x=u*y*c-v*p*c+v*o*d-r*y*d-u*o*f+r*p*f,D=v*p*l-u*y*l-v*o*h+r*y*h+u*o*m-r*p*m,C=n*_+i*g+s*x+a*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/C;return t[0]=_*A,t[1]=(y*h*a-p*m*a-y*s*d+i*m*d+p*s*f-i*h*f)*A,t[2]=(o*m*a-y*l*a+y*s*c-i*m*c-o*s*f+i*l*f)*A,t[3]=(p*l*a-o*h*a-p*s*c+i*h*c+o*s*d-i*l*d)*A,t[4]=g*A,t[5]=(u*m*a-v*h*a+v*s*d-n*m*d-u*s*f+n*h*f)*A,t[6]=(v*l*a-r*m*a-v*s*c+n*m*c+r*s*f-n*l*f)*A,t[7]=(r*h*a-u*l*a+u*s*c-n*h*c-r*s*d+n*l*d)*A,t[8]=x*A,t[9]=(v*p*a-u*y*a-v*i*d+n*y*d+u*i*f-n*p*f)*A,t[10]=(r*y*a-v*o*a+v*i*c-n*y*c-r*i*f+n*o*f)*A,t[11]=(u*o*a-r*p*a-u*i*c+n*p*c+r*i*d-n*o*d)*A,t[12]=D*A,t[13]=(u*y*s-v*p*s+v*i*h-n*y*h-u*i*m+n*p*m)*A,t[14]=(v*o*s-r*y*s-v*i*l+n*y*l+r*i*m-n*o*m)*A,t[15]=(r*p*s-u*o*s+u*i*l-n*p*l-r*i*h+n*o*h)*A,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,u=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*r,0,c*l-s*o,u*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,u=r+r,p=o+o,h=a*c,d=a*u,v=a*p,y=r*u,m=r*p,f=o*p,_=l*c,g=l*u,x=l*p,D=i.x,C=i.y,A=i.z;return s[0]=(1-(y+f))*D,s[1]=(d+x)*D,s[2]=(v-g)*D,s[3]=0,s[4]=(d-x)*C,s[5]=(1-(h+f))*C,s[6]=(m+_)*C,s[7]=0,s[8]=(v+g)*A,s[9]=(m-_)*A,s[10]=(1-(h+y))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=bo.set(s[0],s[1],s[2]).length(),r=bo.set(s[4],s[5],s[6]).length(),o=bo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Ri.copy(this);let c=1/a,u=1/r,p=1/o;return Ri.elements[0]*=c,Ri.elements[1]*=c,Ri.elements[2]*=c,Ri.elements[4]*=u,Ri.elements[5]*=u,Ri.elements[6]*=u,Ri.elements[8]*=p,Ri.elements[9]*=p,Ri.elements[10]*=p,n.setFromRotationMatrix(Ri),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=Es){let l=this.elements,c=2*a/(n-t),u=2*a/(i-s),p=(n+t)/(n-t),h=(i+s)/(i-s),d,v;if(o===Es)d=-(r+a)/(r-a),v=-2*r*a/(r-a);else if(o===pf)d=-r/(r-a),v=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Es){let l=this.elements,c=1/(n-t),u=1/(i-s),p=1/(r-a),h=(n+t)*c,d=(i+s)*u,v,y;if(o===Es)v=(r+a)*p,y=-2*p;else if(o===pf)v=a*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},bo=new N,Ri=new Re,lR=new N(0,0,0),cR=new N(1,1,1),ha=new N,Ph=new N,ei=new N,qM=new Re,WM=new si,Ki=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],u=s[9],p=s[2],h=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(fn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-fn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-fn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return qM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qM,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return WM.setFromEuler(this),this.setFromQuaternion(WM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ki.DEFAULT_ORDER="XYZ";var bc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},uR=0,YM=new N,Eo=new si,gs=new Re,Bh=new N,pc=new N,hR=new N,fR=new si,ZM=new N(1,0,0),KM=new N(0,1,0),JM=new N(0,0,1),QM={type:"added"},dR={type:"removed"},To={type:"childadded",child:null},lg={type:"childremoved",child:null},Gn=class e extends ya{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uR++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new N,n=new Ki,i=new si,s=new N(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Re},normalMatrix:{value:new qt}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Eo.setFromAxisAngle(t,n),this.quaternion.multiply(Eo),this}rotateOnWorldAxis(t,n){return Eo.setFromAxisAngle(t,n),this.quaternion.premultiply(Eo),this}rotateX(t){return this.rotateOnAxis(ZM,t)}rotateY(t){return this.rotateOnAxis(KM,t)}rotateZ(t){return this.rotateOnAxis(JM,t)}translateOnAxis(t,n){return YM.copy(t).applyQuaternion(this.quaternion),this.position.add(YM.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(ZM,t)}translateY(t){return this.translateOnAxis(KM,t)}translateZ(t){return this.translateOnAxis(JM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gs.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Bh.copy(t):Bh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),pc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gs.lookAt(pc,Bh,this.up):gs.lookAt(Bh,pc,this.up),this.quaternion.setFromRotationMatrix(gs),s&&(gs.extractRotation(s.matrixWorld),Eo.setFromRotationMatrix(gs),this.quaternion.premultiply(Eo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(QM),To.child=t,this.dispatchEvent(To),To.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(dR),lg.child=t,this.dispatchEvent(lg),lg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gs.multiply(t.parent.matrixWorld)),t.applyMatrix4(gs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(QM),To.child=t,this.dispatchEvent(To),To.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pc,t,hR),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pc,fR,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),p=r(t.shapes),h=r(t.skeletons),d=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Gn.DEFAULT_UP=new N(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ci=new N,vs=new N,cg=new N,_s=new N,Ao=new N,wo=new N,jM=new N,ug=new N,hg=new N,fg=new N,Io=class e{constructor(t=new N,n=new N,i=new N){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Ci.subVectors(t,n),s.cross(Ci);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Ci.subVectors(s,n),vs.subVectors(i,n),cg.subVectors(t,n);let r=Ci.dot(Ci),o=Ci.dot(vs),l=Ci.dot(cg),c=vs.dot(vs),u=vs.dot(cg),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let h=1/p,d=(c*l-o*u)*h,v=(r*u-o*l)*h;return a.set(1-d-v,v,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,_s)===null?!1:_s.x>=0&&_s.y>=0&&_s.x+_s.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,_s)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,_s.x),l.addScaledVector(r,_s.y),l.addScaledVector(o,_s.z),l)}static isFrontFacing(t,n,i,s){return Ci.subVectors(i,n),vs.subVectors(t,n),Ci.cross(vs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),vs.subVectors(this.a,this.b),Ci.cross(vs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Ao.subVectors(s,i),wo.subVectors(a,i),ug.subVectors(t,i);let l=Ao.dot(ug),c=wo.dot(ug);if(l<=0&&c<=0)return n.copy(i);hg.subVectors(t,s);let u=Ao.dot(hg),p=wo.dot(hg);if(u>=0&&p<=u)return n.copy(s);let h=l*p-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),n.copy(i).addScaledVector(Ao,r);fg.subVectors(t,a);let d=Ao.dot(fg),v=wo.dot(fg);if(v>=0&&d<=v)return n.copy(a);let y=d*c-l*v;if(y<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(wo,o);let m=u*v-d*p;if(m<=0&&p-u>=0&&d-v>=0)return jM.subVectors(a,s),o=(p-u)/(p-u+(d-v)),n.copy(s).addScaledVector(jM,o);let f=1/(m+y+h);return r=y*f,o=h*f,n.copy(i).addScaledVector(Ao,r).addScaledVector(wo,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fa={h:0,s:0,l:0},Fh={h:0,s:0,l:0};function dg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Wt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,n),this}setRGB(t,n,i,s=ue.workingColorSpace){return this.r=t,this.g=n,this.b=i,ue.toWorkingColorSpace(this,s),this}setHSL(t,n,i,s=ue.workingColorSpace){if(t=eR(t,1),n=fn(n,0,1),i=fn(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=dg(r,a,t+1/3),this.g=dg(r,a,t),this.b=dg(r,a,t-1/3)}return ue.toWorkingColorSpace(this,s),this}setStyle(t,n=Bn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Bn){let i=$1[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ho(t.r),this.g=Ho(t.g),this.b=Ho(t.b),this}copyLinearToSRGB(t){return this.r=tg(t.r),this.g=tg(t.g),this.b=tg(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Bn){return ue.fromWorkingColorSpace(yn.copy(this),t),Math.round(fn(yn.r*255,0,255))*65536+Math.round(fn(yn.g*255,0,255))*256+Math.round(fn(yn.b*255,0,255))}getHexString(t=Bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ue.workingColorSpace){ue.fromWorkingColorSpace(yn.copy(this),n);let i=yn.r,s=yn.g,a=yn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,u=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=u<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=ue.workingColorSpace){return ue.fromWorkingColorSpace(yn.copy(this),n),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=Bn){ue.fromWorkingColorSpace(yn.copy(this),t);let n=yn.r,i=yn.g,s=yn.b;return t!==Bn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(fa),this.setHSL(fa.h+t,fa.s+n,fa.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(fa),t.getHSL(Fh);let i=jm(fa.h,Fh.h,n),s=jm(fa.s,Fh.s,n),a=jm(fa.l,Fh.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new Wt;Wt.NAMES=$1;var pR=0,ar=class extends ya{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pR++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=Bo,this.side=_a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wg,this.blendDst=Rg,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=cf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=BM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_o,this.stencilZFail=_o,this.stencilZPass=_o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bo&&(i.blending=this.blending),this.side!==_a&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wg&&(i.blendSrc=this.blendSrc),this.blendDst!==Rg&&(i.blendDst=this.blendDst),this.blendEquation!==er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cf&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==BM&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_o&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_o&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_o&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}},Wo=class extends ar{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=B1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ke=new N,Hh=new ut,xn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=FM,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return vc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Hh.fromBufferAttribute(this,n),Hh.applyMatrix3(t),this.setXY(n,Hh.x,Hh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.applyMatrix3(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.applyMatrix4(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.applyNormalMatrix(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.transformDirection(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=uc(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Pn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=uc(n,this.array)),n}setX(t,n){return this.normalized&&(n=Pn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=uc(n,this.array)),n}setY(t,n){return this.normalized&&(n=Pn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=uc(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Pn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=uc(n,this.array)),n}setW(t,n){return this.normalized&&(n=Pn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Pn(n,this.array),i=Pn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Pn(n,this.array),i=Pn(i,this.array),s=Pn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=Pn(n,this.array),i=Pn(i,this.array),s=Pn(s,this.array),a=Pn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==FM&&(t.usage=this.usage),t}};var yf=class extends xn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var xf=class extends xn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var dn=class extends xn{constructor(t,n,i){super(new Float32Array(t),n,i)}},mR=0,gi=new Re,pg=new Gn,Ro=new N,ni=new sr,mc=new sr,nn=new N,_i=class e extends ya{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mR++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(j1(t)?xf:yf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new qt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,n,i){return gi.makeTranslation(t,n,i),this.applyMatrix4(gi),this}scale(t,n,i){return gi.makeScale(t,n,i),this.applyMatrix4(gi),this}lookAt(t){return pg.lookAt(t),pg.updateMatrix(),this.applyMatrix4(pg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ro).negate(),this.translate(Ro.x,Ro.y,Ro.z),this}setFromPoints(t){let n=[];for(let i=0,s=t.length;i<s;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new dn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];ni.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mc);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let i=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];mc.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(ni.min,mc.min),ni.expandByPoint(nn),nn.addVectors(ni.max,mc.max),ni.expandByPoint(nn)):(ni.expandByPoint(mc.min),ni.expandByPoint(mc.max))}ni.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)nn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(nn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)nn.fromBufferAttribute(o,c),l&&(Ro.fromBufferAttribute(t,c),nn.add(Ro)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new N,l[U]=new N;let c=new N,u=new N,p=new N,h=new ut,d=new ut,v=new ut,y=new N,m=new N;function f(U,E,S){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,E),p.fromBufferAttribute(i,S),h.fromBufferAttribute(a,U),d.fromBufferAttribute(a,E),v.fromBufferAttribute(a,S),u.sub(c),p.sub(c),d.sub(h),v.sub(h);let R=1/(d.x*v.y-v.x*d.y);isFinite(R)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(p,-d.y).multiplyScalar(R),m.copy(p).multiplyScalar(d.x).addScaledVector(u,-v.x).multiplyScalar(R),o[U].add(y),o[E].add(y),o[S].add(y),l[U].add(m),l[E].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let U=0,E=_.length;U<E;++U){let S=_[U],R=S.start,q=S.count;for(let H=R,k=R+q;H<k;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let g=new N,x=new N,D=new N,C=new N;function A(U){D.fromBufferAttribute(s,U),C.copy(D);let E=o[U];g.copy(E),g.sub(D.multiplyScalar(D.dot(E))).normalize(),x.crossVectors(C,E);let R=x.dot(l[U])<0?-1:1;r.setXYZW(U,g.x,g.y,g.z,R)}for(let U=0,E=_.length;U<E;++U){let S=_[U],R=S.start,q=S.count;for(let H=R,k=R+q;H<k;H+=3)A(t.getX(H+0)),A(t.getX(H+1)),A(t.getX(H+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);let s=new N,a=new N,r=new N,o=new N,l=new N,c=new N,u=new N,p=new N;if(t)for(let h=0,d=t.count;h<d;h+=3){let v=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,y),r.fromBufferAttribute(n,m),u.subVectors(r,a),p.subVectors(s,a),u.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=n.count;h<d;h+=3)s.fromBufferAttribute(n,h+0),a.fromBufferAttribute(n,h+1),r.fromBufferAttribute(n,h+2),u.subVectors(r,a),p.subVectors(s,a),u.cross(p),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)nn.fromBufferAttribute(t,n),nn.normalize(),t.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,p=o.normalized,h=new c.constructor(l.length*u),d=0,v=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*u;for(let f=0;f<u;f++)h[v++]=c[d++]}return new xn(h,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let u=0,p=c.length;u<p;u++){let h=c[u],d=t(h,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let p=0,h=c.length;p<h;p++){let d=c[p];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(n));let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(n))}let a=t.morphAttributes;for(let c in a){let u=[],p=a[c];for(let h=0,d=p.length;h<d;h++)u.push(p[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,u=r.length;c<u;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$M=new Re,Ja=new _f,Vh=new Mc,t1=new N,Co=new N,Do=new N,Uo=new N,mg=new N,Gh=new N,kh=new ut,Xh=new ut,qh=new ut,e1=new N,n1=new N,i1=new N,Wh=new N,Yh=new N,Xe=class extends Gn{constructor(t=new _i,n=new Wo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Gh.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let u=o[l],p=a[l];u!==0&&(mg.fromBufferAttribute(p,t),r?Gh.addScaledVector(mg,u):Gh.addScaledVector(mg.sub(n),u))}n.add(Gh)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vh.copy(i.boundingSphere),Vh.applyMatrix4(a),Ja.copy(t.ray).recast(t.near),!(Vh.containsPoint(Ja.origin)===!1&&(Ja.intersectSphere(Vh,t1)===null||Ja.origin.distanceToSquared(t1)>(t.far-t.near)**2))&&($M.copy(a).invert(),Ja.copy(t.ray).applyMatrix4($M),!(i.boundingBox!==null&&Ja.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ja)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,p=a.attributes.normal,h=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,y=h.length;v<y;v++){let m=h[v],f=r[m.materialIndex],_=Math.max(m.start,d.start),g=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=_,D=g;x<D;x+=3){let C=o.getX(x),A=o.getX(x+1),U=o.getX(x+2);s=Zh(this,f,t,i,c,u,p,C,A,U),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let m=v,f=y;m<f;m+=3){let _=o.getX(m),g=o.getX(m+1),x=o.getX(m+2);s=Zh(this,r,t,i,c,u,p,_,g,x),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,y=h.length;v<y;v++){let m=h[v],f=r[m.materialIndex],_=Math.max(m.start,d.start),g=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=_,D=g;x<D;x+=3){let C=x,A=x+1,U=x+2;s=Zh(this,f,t,i,c,u,p,C,A,U),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=v,f=y;m<f;m+=3){let _=m,g=m+1,x=m+2;s=Zh(this,r,t,i,c,u,p,_,g,x),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function gR(e,t,n,i,s,a,r,o){let l;if(t.side===Hn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===_a,o),l===null)return null;Yh.copy(o),Yh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Yh);return c<n.near||c>n.far?null:{distance:c,point:Yh.clone(),object:e}}function Zh(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Co),e.getVertexPosition(l,Do),e.getVertexPosition(c,Uo);let u=gR(e,t,n,i,Co,Do,Uo,Wh);if(u){s&&(kh.fromBufferAttribute(s,o),Xh.fromBufferAttribute(s,l),qh.fromBufferAttribute(s,c),u.uv=Io.getInterpolation(Wh,Co,Do,Uo,kh,Xh,qh,new ut)),a&&(kh.fromBufferAttribute(a,o),Xh.fromBufferAttribute(a,l),qh.fromBufferAttribute(a,c),u.uv1=Io.getInterpolation(Wh,Co,Do,Uo,kh,Xh,qh,new ut)),r&&(e1.fromBufferAttribute(r,o),n1.fromBufferAttribute(r,l),i1.fromBufferAttribute(r,c),u.normal=Io.getInterpolation(Wh,Co,Do,Uo,e1,n1,i1,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new N,materialIndex:0};Io.getNormal(Co,Do,Uo,p.normal),u.face=p}return u}var Ec=class e extends _i{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],u=[],p=[],h=0,d=0;v("z","y","x",-1,-1,i,n,t,r,a,0),v("z","y","x",1,-1,i,n,-t,r,a,1),v("x","z","y",1,1,t,i,n,s,r,2),v("x","z","y",1,-1,t,i,-n,s,r,3),v("x","y","z",1,-1,t,n,i,s,a,4),v("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(u,3)),this.setAttribute("uv",new dn(p,2));function v(y,m,f,_,g,x,D,C,A,U,E){let S=x/A,R=D/U,q=x/2,H=D/2,k=C/2,Z=A+1,G=U+1,tt=0,X=0,dt=new N;for(let _t=0;_t<G;_t++){let St=_t*R-H;for(let Vt=0;Vt<Z;Vt++){let $t=Vt*S-q;dt[y]=$t*_,dt[m]=St*g,dt[f]=k,c.push(dt.x,dt.y,dt.z),dt[y]=0,dt[m]=0,dt[f]=C>0?1:-1,u.push(dt.x,dt.y,dt.z),p.push(Vt/A),p.push(1-_t/U),tt+=1}}for(let _t=0;_t<U;_t++)for(let St=0;St<A;St++){let Vt=h+St+Z*_t,$t=h+St+Z*(_t+1),W=h+(St+1)+Z*(_t+1),it=h+(St+1)+Z*_t;l.push(Vt,$t,it),l.push($t,W,it),X+=6}o.addGroup(d,X,E),d+=X,h+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Yo(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function wn(e){let t={};for(let n=0;n<e.length;n++){let i=Yo(e[n]);for(let s in i)t[s]=i[s]}return t}function vR(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function tb(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var _R={clone:Yo,merge:wn},yR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ji=class extends ar{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yR,this.fragmentShader=xR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yo(t.uniforms),this.uniformsGroups=vR(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Sf=class extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Es}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},da=new N,s1=new ut,a1=new ut,Rn=class extends Sf{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=a0*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qm*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return a0*2*Math.atan(Math.tan(Qm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){da.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(da.x,da.y).multiplyScalar(-t/da.z),da.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(da.x,da.y).multiplyScalar(-t/da.z)}getViewSize(t,n){return this.getViewBounds(t,s1,a1),n.subVectors(a1,s1)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Qm*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},No=-90,Lo=1,c0=class extends Gn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rn(No,Lo,t,n);s.layers=this.layers,this.add(s);let a=new Rn(No,Lo,t,n);a.layers=this.layers,this.add(a);let r=new Rn(No,Lo,t,n);r.layers=this.layers,this.add(r);let o=new Rn(No,Lo,t,n);o.layers=this.layers,this.add(o);let l=new Rn(No,Lo,t,n);l.layers=this.layers,this.add(l);let c=new Rn(No,Lo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Es)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pf)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,u]=this.children,p=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),t.render(n,u),t.setRenderTarget(p,h,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Mf=class extends Vn{constructor(t,n,i,s,a,r,o,l,c,u){t=t!==void 0?t:[],n=n!==void 0?n:Go,super(t,n,i,s,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},u0=class extends Rs{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Mf(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ii}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ec(5,5,5),a=new Ji({name:"CubemapFromEquirect",uniforms:Yo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Hn,blending:ma});a.uniforms.tEquirect.value=n;let r=new Xe(s,a),o=n.minFilter;return n.minFilter===Ms&&(n.minFilter=ii),new c0(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n,i,s){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},gg=new N,SR=new N,MR=new qt,xs=class{constructor(t=new N(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=gg.subVectors(i,n).cross(SR.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(gg),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||MR.getNormalMatrix(t),s=this.coplanarPoint(gg).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qa=new Mc,Kh=new N,Tc=class{constructor(t=new xs,n=new xs,i=new xs,s=new xs,a=new xs,r=new xs){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Es){let i=this.planes,s=t.elements,a=s[0],r=s[1],o=s[2],l=s[3],c=s[4],u=s[5],p=s[6],h=s[7],d=s[8],v=s[9],y=s[10],m=s[11],f=s[12],_=s[13],g=s[14],x=s[15];if(i[0].setComponents(l-a,h-c,m-d,x-f).normalize(),i[1].setComponents(l+a,h+c,m+d,x+f).normalize(),i[2].setComponents(l+r,h+u,m+v,x+_).normalize(),i[3].setComponents(l-r,h-u,m-v,x-_).normalize(),i[4].setComponents(l-o,h-p,m-y,x-g).normalize(),n===Es)i[5].setComponents(l+o,h+p,m+y,x+g).normalize();else if(n===pf)i[5].setComponents(o,p,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qa.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qa)}intersectsSprite(t){return Qa.center.set(0,0,0),Qa.radius=.7071067811865476,Qa.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qa)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Kh.x=s.normal.x>0?t.max.x:t.min.x,Kh.y=s.normal.y>0?t.max.y:t.min.y,Kh.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Kh)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function eb(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function bR(e){let t=new WeakMap;function n(o,l){let c=o.array,u=o.usage,p=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let u=l.array,p=l._updateRange,h=l.updateRanges;if(e.bindBuffer(c,o),p.count===-1&&h.length===0&&e.bufferSubData(c,0,u),h.length!==0){for(let d=0,v=h.length;d<v;d++){let y=h[d];e.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}p.count!==-1&&(e.bufferSubData(c,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count),p.count=-1),l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var Zo=class e extends _i{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,p=t/o,h=n/l,d=[],v=[],y=[],m=[];for(let f=0;f<u;f++){let _=f*h-r;for(let g=0;g<c;g++){let x=g*p-a;v.push(x,-_,0),y.push(0,0,1),m.push(g/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){let g=_+c*f,x=_+c*(f+1),D=_+1+c*(f+1),C=_+1+c*f;d.push(g,x,C),d.push(x,D,C)}this.setIndex(d),this.setAttribute("position",new dn(v,3)),this.setAttribute("normal",new dn(y,3)),this.setAttribute("uv",new dn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ER=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,AR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,UR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,LR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,PR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,BR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,HR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,YR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ZR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,KR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,JR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$R=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t2="gl_FragColor = linearToOutputTexel( gl_FragColor );",e2=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,i2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,s2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,a2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,o2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,f2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,g2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,v2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,M2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,b2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,E2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,T2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,L2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,H2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,G2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,k2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,W2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Y2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_C=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,MC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,DC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,UC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,NC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,LC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,BC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,XC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ZC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$C=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,e3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:ER,alphahash_pars_fragment:TR,alphamap_fragment:AR,alphamap_pars_fragment:wR,alphatest_fragment:RR,alphatest_pars_fragment:CR,aomap_fragment:DR,aomap_pars_fragment:UR,batching_pars_vertex:NR,batching_vertex:LR,begin_vertex:OR,beginnormal_vertex:IR,bsdfs:zR,iridescence_fragment:PR,bumpmap_pars_fragment:BR,clipping_planes_fragment:FR,clipping_planes_pars_fragment:HR,clipping_planes_pars_vertex:VR,clipping_planes_vertex:GR,color_fragment:kR,color_pars_fragment:XR,color_pars_vertex:qR,color_vertex:WR,common:YR,cube_uv_reflection_fragment:ZR,defaultnormal_vertex:KR,displacementmap_pars_vertex:JR,displacementmap_vertex:QR,emissivemap_fragment:jR,emissivemap_pars_fragment:$R,colorspace_fragment:t2,colorspace_pars_fragment:e2,envmap_fragment:n2,envmap_common_pars_fragment:i2,envmap_pars_fragment:s2,envmap_pars_vertex:a2,envmap_physical_pars_fragment:g2,envmap_vertex:r2,fog_vertex:o2,fog_pars_vertex:l2,fog_fragment:c2,fog_pars_fragment:u2,gradientmap_pars_fragment:h2,lightmap_pars_fragment:f2,lights_lambert_fragment:d2,lights_lambert_pars_fragment:p2,lights_pars_begin:m2,lights_toon_fragment:v2,lights_toon_pars_fragment:_2,lights_phong_fragment:y2,lights_phong_pars_fragment:x2,lights_physical_fragment:S2,lights_physical_pars_fragment:M2,lights_fragment_begin:b2,lights_fragment_maps:E2,lights_fragment_end:T2,logdepthbuf_fragment:A2,logdepthbuf_pars_fragment:w2,logdepthbuf_pars_vertex:R2,logdepthbuf_vertex:C2,map_fragment:D2,map_pars_fragment:U2,map_particle_fragment:N2,map_particle_pars_fragment:L2,metalnessmap_fragment:O2,metalnessmap_pars_fragment:I2,morphinstance_vertex:z2,morphcolor_vertex:P2,morphnormal_vertex:B2,morphtarget_pars_vertex:F2,morphtarget_vertex:H2,normal_fragment_begin:V2,normal_fragment_maps:G2,normal_pars_fragment:k2,normal_pars_vertex:X2,normal_vertex:q2,normalmap_pars_fragment:W2,clearcoat_normal_fragment_begin:Y2,clearcoat_normal_fragment_maps:Z2,clearcoat_pars_fragment:K2,iridescence_pars_fragment:J2,opaque_fragment:Q2,packing:j2,premultiplied_alpha_fragment:$2,project_vertex:tC,dithering_fragment:eC,dithering_pars_fragment:nC,roughnessmap_fragment:iC,roughnessmap_pars_fragment:sC,shadowmap_pars_fragment:aC,shadowmap_pars_vertex:rC,shadowmap_vertex:oC,shadowmask_pars_fragment:lC,skinbase_vertex:cC,skinning_pars_vertex:uC,skinning_vertex:hC,skinnormal_vertex:fC,specularmap_fragment:dC,specularmap_pars_fragment:pC,tonemapping_fragment:mC,tonemapping_pars_fragment:gC,transmission_fragment:vC,transmission_pars_fragment:_C,uv_pars_fragment:yC,uv_pars_vertex:xC,uv_vertex:SC,worldpos_vertex:MC,background_vert:bC,background_frag:EC,backgroundCube_vert:TC,backgroundCube_frag:AC,cube_vert:wC,cube_frag:RC,depth_vert:CC,depth_frag:DC,distanceRGBA_vert:UC,distanceRGBA_frag:NC,equirect_vert:LC,equirect_frag:OC,linedashed_vert:IC,linedashed_frag:zC,meshbasic_vert:PC,meshbasic_frag:BC,meshlambert_vert:FC,meshlambert_frag:HC,meshmatcap_vert:VC,meshmatcap_frag:GC,meshnormal_vert:kC,meshnormal_frag:XC,meshphong_vert:qC,meshphong_frag:WC,meshphysical_vert:YC,meshphysical_frag:ZC,meshtoon_vert:KC,meshtoon_frag:JC,points_vert:QC,points_frag:jC,shadow_vert:$C,shadow_frag:t3,sprite_vert:e3,sprite_frag:n3},vt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Zi={basic:{uniforms:wn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:wn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:wn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:wn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:wn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:wn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:wn([vt.points,vt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:wn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:wn([vt.common,vt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:wn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:wn([vt.sprite,vt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:wn([vt.common,vt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:wn([vt.lights,vt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Zi.physical={uniforms:wn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var Jh={r:0,b:0,g:0},ja=new Ki,i3=new Re;function s3(e,t,n,i,s,a,r){let o=new Wt(0),l=a===!0?0:1,c,u,p=null,h=0,d=null;function v(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:t).get(g)),g}function y(_){let g=!1,x=v(_);x===null?f(o,l):x&&x.isColor&&(f(x,1),g=!0);let D=e.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(_,g){let x=v(g);x&&(x.isCubeTexture||x.mapping===Of)?(u===void 0&&(u=new Xe(new Ec(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Yo(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ja.copy(g.backgroundRotation),ja.x*=-1,ja.y*=-1,ja.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ja.y*=-1,ja.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(i3.makeRotationFromEuler(ja)),u.material.toneMapped=ue.getTransfer(x.colorSpace)!==Ee,(p!==x||h!==x.version||d!==e.toneMapping)&&(u.material.needsUpdate=!0,p=x,h=x.version,d=e.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Xe(new Zo(2,2),new Ji({name:"BackgroundMaterial",uniforms:Yo(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:_a,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=ue.getTransfer(x.colorSpace)!==Ee,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(p!==x||h!==x.version||d!==e.toneMapping)&&(c.material.needsUpdate=!0,p=x,h=x.version,d=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,g){_.getRGB(Jh,tb(e)),i.buffers.color.setClear(Jh.r,Jh.g,Jh.b,g,r)}return{getClearColor:function(){return o},setClearColor:function(_,g=1){o.set(_),l=g,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(o,l)},render:y,addToRenderList:m}}function a3(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=h(null),a=s,r=!1;function o(S,R,q,H,k){let Z=!1,G=p(H,q,R);a!==G&&(a=G,c(a.object)),Z=d(S,H,q,k),Z&&v(S,H,q,k),k!==null&&t.update(k,e.ELEMENT_ARRAY_BUFFER),(Z||r)&&(r=!1,x(S,R,q,H),k!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return e.createVertexArray()}function c(S){return e.bindVertexArray(S)}function u(S){return e.deleteVertexArray(S)}function p(S,R,q){let H=q.wireframe===!0,k=i[S.id];k===void 0&&(k={},i[S.id]=k);let Z=k[R.id];Z===void 0&&(Z={},k[R.id]=Z);let G=Z[H];return G===void 0&&(G=h(l()),Z[H]=G),G}function h(S){let R=[],q=[],H=[];for(let k=0;k<n;k++)R[k]=0,q[k]=0,H[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:q,attributeDivisors:H,object:S,attributes:{},index:null}}function d(S,R,q,H){let k=a.attributes,Z=R.attributes,G=0,tt=q.getAttributes();for(let X in tt)if(tt[X].location>=0){let _t=k[X],St=Z[X];if(St===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(St=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(St=S.instanceColor)),_t===void 0||_t.attribute!==St||St&&_t.data!==St.data)return!0;G++}return a.attributesNum!==G||a.index!==H}function v(S,R,q,H){let k={},Z=R.attributes,G=0,tt=q.getAttributes();for(let X in tt)if(tt[X].location>=0){let _t=Z[X];_t===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(_t=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(_t=S.instanceColor));let St={};St.attribute=_t,_t&&_t.data&&(St.data=_t.data),k[X]=St,G++}a.attributes=k,a.attributesNum=G,a.index=H}function y(){let S=a.newAttributes;for(let R=0,q=S.length;R<q;R++)S[R]=0}function m(S){f(S,0)}function f(S,R){let q=a.newAttributes,H=a.enabledAttributes,k=a.attributeDivisors;q[S]=1,H[S]===0&&(e.enableVertexAttribArray(S),H[S]=1),k[S]!==R&&(e.vertexAttribDivisor(S,R),k[S]=R)}function _(){let S=a.newAttributes,R=a.enabledAttributes;for(let q=0,H=R.length;q<H;q++)R[q]!==S[q]&&(e.disableVertexAttribArray(q),R[q]=0)}function g(S,R,q,H,k,Z,G){G===!0?e.vertexAttribIPointer(S,R,q,k,Z):e.vertexAttribPointer(S,R,q,H,k,Z)}function x(S,R,q,H){y();let k=H.attributes,Z=q.getAttributes(),G=R.defaultAttributeValues;for(let tt in Z){let X=Z[tt];if(X.location>=0){let dt=k[tt];if(dt===void 0&&(tt==="instanceMatrix"&&S.instanceMatrix&&(dt=S.instanceMatrix),tt==="instanceColor"&&S.instanceColor&&(dt=S.instanceColor)),dt!==void 0){let _t=dt.normalized,St=dt.itemSize,Vt=t.get(dt);if(Vt===void 0)continue;let $t=Vt.buffer,W=Vt.type,it=Vt.bytesPerElement,Et=W===e.INT||W===e.UNSIGNED_INT||dt.gpuType===q0;if(dt.isInterleavedBufferAttribute){let gt=dt.data,Ut=gt.stride,Ht=dt.offset;if(gt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<X.locationSize;Lt++)f(X.location+Lt,gt.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Lt=0;Lt<X.locationSize;Lt++)m(X.location+Lt);e.bindBuffer(e.ARRAY_BUFFER,$t);for(let Lt=0;Lt<X.locationSize;Lt++)g(X.location+Lt,St/X.locationSize,W,_t,Ut*it,(Ht+St/X.locationSize*Lt)*it,Et)}else{if(dt.isInstancedBufferAttribute){for(let gt=0;gt<X.locationSize;gt++)f(X.location+gt,dt.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let gt=0;gt<X.locationSize;gt++)m(X.location+gt);e.bindBuffer(e.ARRAY_BUFFER,$t);for(let gt=0;gt<X.locationSize;gt++)g(X.location+gt,St/X.locationSize,W,_t,St*it,St/X.locationSize*gt*it,Et)}}else if(G!==void 0){let _t=G[tt];if(_t!==void 0)switch(_t.length){case 2:e.vertexAttrib2fv(X.location,_t);break;case 3:e.vertexAttrib3fv(X.location,_t);break;case 4:e.vertexAttrib4fv(X.location,_t);break;default:e.vertexAttrib1fv(X.location,_t)}}}}_()}function D(){U();for(let S in i){let R=i[S];for(let q in R){let H=R[q];for(let k in H)u(H[k].object),delete H[k];delete R[q]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;let R=i[S.id];for(let q in R){let H=R[q];for(let k in H)u(H[k].object),delete H[k];delete R[q]}delete i[S.id]}function A(S){for(let R in i){let q=i[R];if(q[S.id]===void 0)continue;let H=q[S.id];for(let k in H)u(H[k].object),delete H[k];delete q[S.id]}}function U(){E(),r=!0,a!==s&&(a=s,c(a.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function r3(e,t,n){let i;function s(c){i=c}function a(c,u){e.drawArrays(i,c,u),n.update(u,i,1)}function r(c,u,p){p!==0&&(e.drawArraysInstanced(i,c,u,p),n.update(u,i,p))}function o(c,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,p);let d=0;for(let v=0;v<p;v++)d+=u[v];n.update(d,i,1)}function l(c,u,p,h){if(p===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<c.length;v++)r(c[v],u[v],h[v]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,p);let v=0;for(let y=0;y<p;y++)v+=u[y];for(let y=0;y<h.length;y++)n.update(v,i,h[y])}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function o3(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==Di&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let A=C===zc&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ws&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==bs&&!A)}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let p=n.logarithmicDepthBuffer===!0,h=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),d=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),y=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),f=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),g=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,D=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,maxTextures:h,maxVertexTextures:d,maxTextureSize:v,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:g,vertexTextures:x,maxSamples:D}}function l3(e){let t=this,n=null,i=0,s=!1,a=!1,r=new xs,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){let d=p.length!==0||h||i!==0||s;return s=h,i=p.length,d},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,h){n=u(p,h,0)},this.setState=function(p,h,d){let v=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,f=e.get(p);if(!s||v===null||v.length===0||a&&!m)a?u(null):c();else{let _=a?0:i,g=_*4,x=f.clippingState||null;l.value=x,x=u(v,h,g,d);for(let D=0;D!==g;++D)x[D]=n[D];f.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(p,h,d,v){let y=p!==null?p.length:0,m=null;if(y!==0){if(m=l.value,v!==!0||m===null){let f=d+y*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,x=d;g!==y;++g,x+=4)r.copy(p[g]).applyMatrix4(_,o),r.normal.toArray(m,x),m[x+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function c3(e){let t=new WeakMap;function n(r,o){return o===Cg?r.mapping=Go:o===Dg&&(r.mapping=ko),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===Cg||o===Dg)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new u0(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var bf=class extends Sf{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},zo=4,r1=[.125,.215,.35,.446,.526,.582],nr=20,vg=new bf,o1=new Wt,_g=null,yg=0,xg=0,Sg=!1,tr=(1+Math.sqrt(5))/2,Oo=1/tr,l1=[new N(-tr,Oo,0),new N(tr,Oo,0),new N(-Oo,0,tr),new N(Oo,0,tr),new N(0,tr,-Oo),new N(0,tr,Oo),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Ko=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100){_g=this._renderer.getRenderTarget(),yg=this._renderer.getActiveCubeFace(),xg=this._renderer.getActiveMipmapLevel(),Sg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,s,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=h1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=u1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_g,yg,xg),this._renderer.xr.enabled=Sg,t.scissorTest=!1,Qh(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Go||t.mapping===ko?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_g=this._renderer.getRenderTarget(),yg=this._renderer.getActiveCubeFace(),xg=this._renderer.getActiveMipmapLevel(),Sg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:zc,format:Di,colorSpace:xa,depthBuffer:!1},s=c1(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=c1(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u3(a)),this._blurMaterial=h3(a,t,n)}return s}_compileMaterial(t){let n=new Xe(this._lodPlanes[0],t);this._renderer.compile(n,vg)}_sceneToCubeUV(t,n,i,s){let o=new Rn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,h=u.toneMapping;u.getClearColor(o1),u.toneMapping=ga,u.autoClear=!1;let d=new Wo({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),v=new Xe(new Ec,d),y=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,y=!0):(d.color.copy(o1),y=!0);for(let f=0;f<6;f++){let _=f%3;_===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):_===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let g=this._cubeSize;Qh(s,_*g,f>2?g:0,g,g),u.setRenderTarget(s),y&&u.render(v,o),u.render(t,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=p,t.background=m}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Go||t.mapping===ko;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=h1()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=u1());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new Xe(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;Qh(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,vg)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=l1[(s-a-1)%l1.length];this._blur(t,a-1,a,r,o)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,p=new Xe(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*nr-1),y=a/v,m=isFinite(a)?1+Math.floor(u*y):nr;m>nr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${nr}`);let f=[],_=0;for(let A=0;A<nr;++A){let U=A/y,E=Math.exp(-U*U/2);f.push(E),A===0?_+=E:A<m&&(_+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/_;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:g}=this;h.dTheta.value=v,h.mipInt.value=g-i;let x=this._sizeLods[s],D=3*x*(s>g-zo?s-g+zo:0),C=4*(this._cubeSize-x);Qh(n,D,C,3*x,2*x),l.setRenderTarget(n),l.render(p,vg)}};function u3(e){let t=[],n=[],i=[],s=e,a=e-zo+1+r1.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-zo?l=r1[r-e+zo-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),u=-c,p=1+c,h=[u,u,p,u,p,p,u,u,p,p,u,p],d=6,v=6,y=3,m=2,f=1,_=new Float32Array(y*v*d),g=new Float32Array(m*v*d),x=new Float32Array(f*v*d);for(let C=0;C<d;C++){let A=C%3*2/3-1,U=C>2?0:-1,E=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];_.set(E,y*v*C),g.set(h,m*v*C);let S=[C,C,C,C,C,C];x.set(S,f*v*C)}let D=new _i;D.setAttribute("position",new xn(_,y)),D.setAttribute("uv",new xn(g,m)),D.setAttribute("faceIndex",new xn(x,f)),t.push(D),s>zo&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function c1(e,t,n){let i=new Rs(e,t,n);return i.texture.mapping=Of,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qh(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function h3(e,t,n){let i=new Float32Array(nr),s=new N(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:j0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function u1(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:j0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function h1(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:j0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function j0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function f3(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Cg||l===Dg,u=l===Go||l===ko;if(c||u){let p=t.get(o),h=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new Ko(e)),p=c?n.fromEquirectangular(o,p):n.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),p.texture;if(p!==void 0)return p.texture;{let d=o.image;return c&&d&&d.height>0||u&&d&&s(d)?(n===null&&(n=new Ko(e)),p=c?n.fromEquirectangular(o):n.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),o.addEventListener("dispose",a),p.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function d3(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&vc("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function p3(e,t,n,i){let s={},a=new WeakMap;function r(p){let h=p.target;h.index!==null&&t.remove(h.index);for(let v in h.attributes)t.remove(h.attributes[v]);for(let v in h.morphAttributes){let y=h.morphAttributes[v];for(let m=0,f=y.length;m<f;m++)t.remove(y[m])}h.removeEventListener("dispose",r),delete s[h.id];let d=a.get(h);d&&(t.remove(d),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(p,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,n.memory.geometries++),h}function l(p){let h=p.attributes;for(let v in h)t.update(h[v],e.ARRAY_BUFFER);let d=p.morphAttributes;for(let v in d){let y=d[v];for(let m=0,f=y.length;m<f;m++)t.update(y[m],e.ARRAY_BUFFER)}}function c(p){let h=[],d=p.index,v=p.attributes.position,y=0;if(d!==null){let _=d.array;y=d.version;for(let g=0,x=_.length;g<x;g+=3){let D=_[g+0],C=_[g+1],A=_[g+2];h.push(D,C,C,A,A,D)}}else if(v!==void 0){let _=v.array;y=v.version;for(let g=0,x=_.length/3-1;g<x;g+=3){let D=g+0,C=g+1,A=g+2;h.push(D,C,C,A,A,D)}}else return;let m=new(j1(h)?xf:yf)(h,1);m.version=y;let f=a.get(p);f&&t.remove(f),a.set(p,m)}function u(p){let h=a.get(p);if(h){let d=p.index;d!==null&&h.version<d.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:u}}function m3(e,t,n){let i;function s(h){i=h}let a,r;function o(h){a=h.type,r=h.bytesPerElement}function l(h,d){e.drawElements(i,d,a,h*r),n.update(d,i,1)}function c(h,d,v){v!==0&&(e.drawElementsInstanced(i,d,a,h*r,v),n.update(d,i,v))}function u(h,d,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,a,h,0,v);let m=0;for(let f=0;f<v;f++)m+=d[f];n.update(m,i,1)}function p(h,d,v,y){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/r,d[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,a,h,0,y,0,v);let f=0;for(let _=0;_<v;_++)f+=d[_];for(let _=0;_<y.length;_++)n.update(f,i,y[_])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function g3(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function v3(e,t,n){let i=new WeakMap,s=new Ke;function a(r,o,l){let c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==p){let E=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],g=0;d===!0&&(g=1),v===!0&&(g=2),y===!0&&(g=3);let x=o.attributes.position.count*g,D=1;x>t.maxTextureSize&&(D=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let C=new Float32Array(x*D*4*p),A=new vf(C,x,D,p);A.type=bs,A.needsUpdate=!0;let U=g*4;for(let S=0;S<p;S++){let R=m[S],q=f[S],H=_[S],k=x*D*4*S;for(let Z=0;Z<R.count;Z++){let G=Z*U;d===!0&&(s.fromBufferAttribute(R,Z),C[k+G+0]=s.x,C[k+G+1]=s.y,C[k+G+2]=s.z,C[k+G+3]=0),v===!0&&(s.fromBufferAttribute(q,Z),C[k+G+4]=s.x,C[k+G+5]=s.y,C[k+G+6]=s.z,C[k+G+7]=0),y===!0&&(s.fromBufferAttribute(H,Z),C[k+G+8]=s.x,C[k+G+9]=s.y,C[k+G+10]=s.z,C[k+G+11]=H.itemSize===4?s.w:1)}}h={count:p,texture:A,size:new ut(x,D)},i.set(o,h),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let v=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:a}}function _3(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,u=l.geometry,p=t.get(l,u);if(s.get(p)!==c&&(t.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return p}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var Ef=class extends Vn{constructor(t,n,i,s,a,r,o,l,c,u=Fo){if(u!==Fo&&u!==qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Fo&&(i=ir),i===void 0&&u===qo&&(i=Xo),super(null,s,a,r,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=o!==void 0?o:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},nb=new Vn,f1=new Ef(1,1),ib=new vf,sb=new l0,ab=new Mf,d1=[],p1=[],m1=new Float32Array(16),g1=new Float32Array(9),v1=new Float32Array(4);function tl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=d1[s];if(a===void 0&&(a=new Float32Array(s),d1[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function Je(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Qe(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function zf(e,t){let n=p1[t];n===void 0&&(n=new Int32Array(t),p1[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function y3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function x3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Je(n,t))return;e.uniform2fv(this.addr,t),Qe(n,t)}}function S3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Je(n,t))return;e.uniform3fv(this.addr,t),Qe(n,t)}}function M3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Je(n,t))return;e.uniform4fv(this.addr,t),Qe(n,t)}}function b3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Je(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Qe(n,t)}else{if(Je(n,i))return;v1.set(i),e.uniformMatrix2fv(this.addr,!1,v1),Qe(n,i)}}function E3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Je(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Qe(n,t)}else{if(Je(n,i))return;g1.set(i),e.uniformMatrix3fv(this.addr,!1,g1),Qe(n,i)}}function T3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Je(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Qe(n,t)}else{if(Je(n,i))return;m1.set(i),e.uniformMatrix4fv(this.addr,!1,m1),Qe(n,i)}}function A3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function w3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Je(n,t))return;e.uniform2iv(this.addr,t),Qe(n,t)}}function R3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Je(n,t))return;e.uniform3iv(this.addr,t),Qe(n,t)}}function C3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Je(n,t))return;e.uniform4iv(this.addr,t),Qe(n,t)}}function D3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function U3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Je(n,t))return;e.uniform2uiv(this.addr,t),Qe(n,t)}}function N3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Je(n,t))return;e.uniform3uiv(this.addr,t),Qe(n,t)}}function L3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Je(n,t))return;e.uniform4uiv(this.addr,t),Qe(n,t)}}function O3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(f1.compareFunction=Q1,a=f1):a=nb,n.setTexture2D(t||a,s)}function I3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||sb,s)}function z3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||ab,s)}function P3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||ib,s)}function B3(e){switch(e){case 5126:return y3;case 35664:return x3;case 35665:return S3;case 35666:return M3;case 35674:return b3;case 35675:return E3;case 35676:return T3;case 5124:case 35670:return A3;case 35667:case 35671:return w3;case 35668:case 35672:return R3;case 35669:case 35673:return C3;case 5125:return D3;case 36294:return U3;case 36295:return N3;case 36296:return L3;case 35678:case 36198:case 36298:case 36306:case 35682:return O3;case 35679:case 36299:case 36307:return I3;case 35680:case 36300:case 36308:case 36293:return z3;case 36289:case 36303:case 36311:case 36292:return P3}}function F3(e,t){e.uniform1fv(this.addr,t)}function H3(e,t){let n=tl(t,this.size,2);e.uniform2fv(this.addr,n)}function V3(e,t){let n=tl(t,this.size,3);e.uniform3fv(this.addr,n)}function G3(e,t){let n=tl(t,this.size,4);e.uniform4fv(this.addr,n)}function k3(e,t){let n=tl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function X3(e,t){let n=tl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function q3(e,t){let n=tl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function W3(e,t){e.uniform1iv(this.addr,t)}function Y3(e,t){e.uniform2iv(this.addr,t)}function Z3(e,t){e.uniform3iv(this.addr,t)}function K3(e,t){e.uniform4iv(this.addr,t)}function J3(e,t){e.uniform1uiv(this.addr,t)}function Q3(e,t){e.uniform2uiv(this.addr,t)}function j3(e,t){e.uniform3uiv(this.addr,t)}function $3(e,t){e.uniform4uiv(this.addr,t)}function tD(e,t,n){let i=this.cache,s=t.length,a=zf(n,s);Je(i,a)||(e.uniform1iv(this.addr,a),Qe(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||nb,a[r])}function eD(e,t,n){let i=this.cache,s=t.length,a=zf(n,s);Je(i,a)||(e.uniform1iv(this.addr,a),Qe(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||sb,a[r])}function nD(e,t,n){let i=this.cache,s=t.length,a=zf(n,s);Je(i,a)||(e.uniform1iv(this.addr,a),Qe(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||ab,a[r])}function iD(e,t,n){let i=this.cache,s=t.length,a=zf(n,s);Je(i,a)||(e.uniform1iv(this.addr,a),Qe(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||ib,a[r])}function sD(e){switch(e){case 5126:return F3;case 35664:return H3;case 35665:return V3;case 35666:return G3;case 35674:return k3;case 35675:return X3;case 35676:return q3;case 5124:case 35670:return W3;case 35667:case 35671:return Y3;case 35668:case 35672:return Z3;case 35669:case 35673:return K3;case 5125:return J3;case 36294:return Q3;case 36295:return j3;case 36296:return $3;case 35678:case 36198:case 36298:case 36306:case 35682:return tD;case 35679:case 36299:case 36307:return eD;case 35680:case 36300:case 36308:case 36293:return nD;case 36289:case 36303:case 36311:case 36292:return iD}}var h0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=B3(n.type)}},f0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=sD(n.type)}},d0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Mg=/(\w+)(\])?(\[|\.)?/g;function _1(e,t){e.seq.push(t),e.map[t.id]=t}function aD(e,t,n){let i=e.name,s=i.length;for(Mg.lastIndex=0;;){let a=Mg.exec(i),r=Mg.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){_1(n,c===void 0?new h0(o,e,t):new f0(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new d0(o),_1(n,p)),n=p}}}var Vo=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);aD(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function y1(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var rD=37297,oD=0;function lD(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}function cD(e){let t=ue.getPrimaries(ue.workingColorSpace),n=ue.getPrimaries(e),i;switch(t===n?i="":t===df&&n===ff?i="LinearDisplayP3ToLinearSRGB":t===ff&&n===df&&(i="LinearSRGBToLinearDisplayP3"),e){case xa:case If:return[i,"LinearTransferOETF"];case Bn:case Q0:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function x1(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),s=e.getShaderInfoLog(t).trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+lD(e.getShaderSource(t),r)}else return s}function uD(e,t){let n=cD(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function hD(e,t){let n;switch(t){case Bw:n="Linear";break;case Fw:n="Reinhard";break;case Hw:n="OptimizedCineon";break;case Vw:n="ACESFilmic";break;case kw:n="AgX";break;case X0:n="Neutral";break;case Gw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var jh=new N;function fD(){ue.getLuminanceCoefficients(jh);let e=jh.x.toFixed(4),t=jh.y.toFixed(4),n=jh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dD(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gc).join(`
`)}function pD(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function mD(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function gc(e){return e!==""}function S1(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function M1(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var gD=/^[ \t]*#include +<([\w\d./]+)>/gm;function p0(e){return e.replace(gD,_D)}var vD=new Map;function _D(e,t){let n=Xt[t];if(n===void 0){let i=vD.get(t);if(i!==void 0)n=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return p0(n)}var yD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function b1(e){return e.replace(yD,xD)}function xD(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function E1(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function SD(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===P1?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===uw?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===ys&&(t="SHADOWMAP_TYPE_VSM"),t}function MD(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Go:case ko:t="ENVMAP_TYPE_CUBE";break;case Of:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bD(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case ko:t="ENVMAP_MODE_REFRACTION";break}return t}function ED(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case B1:t="ENVMAP_BLENDING_MULTIPLY";break;case zw:t="ENVMAP_BLENDING_MIX";break;case Pw:t="ENVMAP_BLENDING_ADD";break}return t}function TD(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function AD(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=SD(n),c=MD(n),u=bD(n),p=ED(n),h=TD(n),d=dD(n),v=pD(a),y=s.createProgram(),m,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(gc).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(gc).join(`
`),f.length>0&&(f+=`
`)):(m=[E1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gc).join(`
`),f=[E1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ga?"#define TONE_MAPPING":"",n.toneMapping!==ga?Xt.tonemapping_pars_fragment:"",n.toneMapping!==ga?hD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,uD("linearToOutputTexel",n.outputColorSpace),fD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(gc).join(`
`)),r=p0(r),r=S1(r,n),r=M1(r,n),o=p0(o),o=S1(o,n),o=M1(o,n),r=b1(r),o=b1(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===HM?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===HM?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let g=_+m+r,x=_+f+o,D=y1(s,s.VERTEX_SHADER,g),C=y1(s,s.FRAGMENT_SHADER,x);s.attachShader(y,D),s.attachShader(y,C),n.index0AttributeName!==void 0?s.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(R){if(e.debug.checkShaderErrors){let q=s.getProgramInfoLog(y).trim(),H=s.getShaderInfoLog(D).trim(),k=s.getShaderInfoLog(C).trim(),Z=!0,G=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Z=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,y,D,C);else{let tt=x1(s,D,"vertex"),X=x1(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+q+`
`+tt+`
`+X)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(H===""||k==="")&&(G=!1);G&&(R.diagnostics={runnable:Z,programLog:q,vertexShader:{log:H,prefix:m},fragmentShader:{log:k,prefix:f}})}s.deleteShader(D),s.deleteShader(C),U=new Vo(s,y),E=mD(s,y)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(y,rD)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=oD++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=D,this.fragmentShader=C,this}var wD=0,m0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new g0(t),n.set(t,i)),i}},g0=class{constructor(t){this.id=wD++,this.code=t,this.usedTimes=0}};function RD(e,t,n,i,s,a,r){let o=new bc,l=new m0,c=new Set,u=[],p=s.logarithmicDepthBuffer,h=s.vertexTextures,d=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,R,q,H){let k=q.fog,Z=H.geometry,G=E.isMeshStandardMaterial?q.environment:null,tt=(E.isMeshStandardMaterial?n:t).get(E.envMap||G),X=tt&&tt.mapping===Of?tt.image.height:null,dt=v[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let _t=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,St=_t!==void 0?_t.length:0,Vt=0;Z.morphAttributes.position!==void 0&&(Vt=1),Z.morphAttributes.normal!==void 0&&(Vt=2),Z.morphAttributes.color!==void 0&&(Vt=3);let $t,W,it,Et;if(dt){let ae=Zi[dt];$t=ae.vertexShader,W=ae.fragmentShader}else $t=E.vertexShader,W=E.fragmentShader,l.update(E),it=l.getVertexShaderID(E),Et=l.getFragmentShaderID(E);let gt=e.getRenderTarget(),Ut=H.isInstancedMesh===!0,Ht=H.isBatchedMesh===!0,Lt=!!E.map,Zt=!!E.matcap,T=!!tt,st=!!E.aoMap,et=!!E.lightMap,pt=!!E.bumpMap,K=!!E.normalMap,Ct=!!E.displacementMap,ft=!!E.emissiveMap,bt=!!E.metalnessMap,w=!!E.roughnessMap,M=E.anisotropy>0,z=E.clearcoat>0,j=E.dispersion>0,$=E.iridescence>0,F=E.sheen>0,Dt=E.transmission>0,mt=M&&!!E.anisotropyMap,Mt=z&&!!E.clearcoatMap,Pt=z&&!!E.clearcoatNormalMap,nt=z&&!!E.clearcoatRoughnessMap,ct=$&&!!E.iridescenceMap,Ft=$&&!!E.iridescenceThicknessMap,Nt=F&&!!E.sheenColorMap,Tt=F&&!!E.sheenRoughnessMap,It=!!E.specularMap,Gt=!!E.specularColorMap,ye=!!E.specularIntensityMap,L=Dt&&!!E.transmissionMap,at=Dt&&!!E.thicknessMap,J=!!E.gradientMap,Q=!!E.alphaMap,rt=E.alphaTest>0,Ot=!!E.alphaHash,te=!!E.extensions,Ce=ga;E.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Ce=e.toneMapping);let Be={shaderID:dt,shaderType:E.type,shaderName:E.name,vertexShader:$t,fragmentShader:W,defines:E.defines,customVertexShaderID:it,customFragmentShaderID:Et,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Ht,batchingColor:Ht&&H._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&H.instanceColor!==null,instancingMorph:Ut&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:gt===null?e.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:xa,alphaToCoverage:!!E.alphaToCoverage,map:Lt,matcap:Zt,envMap:T,envMapMode:T&&tt.mapping,envMapCubeUVHeight:X,aoMap:st,lightMap:et,bumpMap:pt,normalMap:K,displacementMap:h&&Ct,emissiveMap:ft,normalMapObjectSpace:K&&E.normalMapType===Yw,normalMapTangentSpace:K&&E.normalMapType===J1,metalnessMap:bt,roughnessMap:w,anisotropy:M,anisotropyMap:mt,clearcoat:z,clearcoatMap:Mt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:nt,dispersion:j,iridescence:$,iridescenceMap:ct,iridescenceThicknessMap:Ft,sheen:F,sheenColorMap:Nt,sheenRoughnessMap:Tt,specularMap:It,specularColorMap:Gt,specularIntensityMap:ye,transmission:Dt,transmissionMap:L,thicknessMap:at,gradientMap:J,opaque:E.transparent===!1&&E.blending===Bo&&E.alphaToCoverage===!1,alphaMap:Q,alphaTest:rt,alphaHash:Ot,combine:E.combine,mapUv:Lt&&y(E.map.channel),aoMapUv:st&&y(E.aoMap.channel),lightMapUv:et&&y(E.lightMap.channel),bumpMapUv:pt&&y(E.bumpMap.channel),normalMapUv:K&&y(E.normalMap.channel),displacementMapUv:Ct&&y(E.displacementMap.channel),emissiveMapUv:ft&&y(E.emissiveMap.channel),metalnessMapUv:bt&&y(E.metalnessMap.channel),roughnessMapUv:w&&y(E.roughnessMap.channel),anisotropyMapUv:mt&&y(E.anisotropyMap.channel),clearcoatMapUv:Mt&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&y(E.sheenRoughnessMap.channel),specularMapUv:It&&y(E.specularMap.channel),specularColorMapUv:Gt&&y(E.specularColorMap.channel),specularIntensityMapUv:ye&&y(E.specularIntensityMap.channel),transmissionMapUv:L&&y(E.transmissionMap.channel),thicknessMapUv:at&&y(E.thicknessMap.channel),alphaMapUv:Q&&y(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(K||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(Lt||Q),fog:!!k,useFog:E.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Vt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Lt&&E.map.isVideoTexture===!0&&ue.getTransfer(E.map.colorSpace)===Ee,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===vi,flipSided:E.side===Hn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:te&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&E.extensions.multiDraw===!0||Ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function f(E){let S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(let R in E.defines)S.push(R),S.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(_(S,E),g(S,E),S.push(e.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function _(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function g(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.doubleSided&&o.enable(10),S.flipSided&&o.enable(11),S.useDepthPacking&&o.enable(12),S.dithering&&o.enable(13),S.transmission&&o.enable(14),S.sheen&&o.enable(15),S.opaque&&o.enable(16),S.pointsUvs&&o.enable(17),S.decodeVideoTexture&&o.enable(18),S.alphaToCoverage&&o.enable(19),E.push(o.mask)}function x(E){let S=v[E.type],R;if(S){let q=Zi[S];R=_R.clone(q.uniforms)}else R=E.uniforms;return R}function D(E,S){let R;for(let q=0,H=u.length;q<H;q++){let k=u[q];if(k.cacheKey===S){R=k,++R.usedTimes;break}}return R===void 0&&(R=new AD(e,S,E,a),u.push(R)),R}function C(E){if(--E.usedTimes===0){let S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:D,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:U}}function CD(){let e=new WeakMap;function t(a){let r=e.get(a);return r===void 0&&(r={},e.set(a,r)),r}function n(a){e.delete(a)}function i(a,r,o){e.get(a)[r]=o}function s(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:s}}function DD(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function T1(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function A1(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(p,h,d,v,y,m){let f=e[t];return f===void 0?(f={id:p.id,object:p,geometry:h,material:d,groupOrder:v,renderOrder:p.renderOrder,z:y,group:m},e[t]=f):(f.id=p.id,f.object=p,f.geometry=h,f.material=d,f.groupOrder=v,f.renderOrder=p.renderOrder,f.z=y,f.group=m),t++,f}function o(p,h,d,v,y,m){let f=r(p,h,d,v,y,m);d.transmission>0?i.push(f):d.transparent===!0?s.push(f):n.push(f)}function l(p,h,d,v,y,m){let f=r(p,h,d,v,y,m);d.transmission>0?i.unshift(f):d.transparent===!0?s.unshift(f):n.unshift(f)}function c(p,h){n.length>1&&n.sort(p||DD),i.length>1&&i.sort(h||T1),s.length>1&&s.sort(h||T1)}function u(){for(let p=t,h=e.length;p<h;p++){let d=e[p];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:u,sort:c}}function UD(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new A1,e.set(i,[r])):s>=a.length?(r=new A1,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function ND(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new N,color:new Wt};break;case"SpotLight":n={position:new N,direction:new N,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":n={color:new Wt,position:new N,halfWidth:new N,halfHeight:new N};break}return e[t.id]=n,n}}}function LD(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var OD=0;function ID(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function zD(e){let t=new ND,n=LD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);let s=new N,a=new Re,r=new Re;function o(c){let u=0,p=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,v=0,y=0,m=0,f=0,_=0,g=0,x=0,D=0,C=0,A=0;c.sort(ID);for(let E=0,S=c.length;E<S;E++){let R=c[E],q=R.color,H=R.intensity,k=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=q.r*H,p+=q.g*H,h+=q.b*H;else if(R.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(R.sh.coefficients[G],H);A++}else if(R.isDirectionalLight){let G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let tt=R.shadow,X=n.get(R);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=Z,i.directionalShadowMatrix[d]=R.shadow.matrix,_++}i.directional[d]=G,d++}else if(R.isSpotLight){let G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(q).multiplyScalar(H),G.distance=k,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,i.spot[y]=G;let tt=R.shadow;if(R.map&&(i.spotLightMap[D]=R.map,D++,tt.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[y]=tt.matrix,R.castShadow){let X=n.get(R);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,i.spotShadow[y]=X,i.spotShadowMap[y]=Z,x++}y++}else if(R.isRectAreaLight){let G=t.get(R);G.color.copy(q).multiplyScalar(H),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=G,m++}else if(R.isPointLight){let G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){let tt=R.shadow,X=n.get(R);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,X.shadowCameraNear=tt.camera.near,X.shadowCameraFar=tt.camera.far,i.pointShadow[v]=X,i.pointShadowMap[v]=Z,i.pointShadowMatrix[v]=R.shadow.matrix,g++}i.point[v]=G,v++}else if(R.isHemisphereLight){let G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(H),G.groundColor.copy(R.groundColor).multiplyScalar(H),i.hemi[f]=G,f++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=h;let U=i.hash;(U.directionalLength!==d||U.pointLength!==v||U.spotLength!==y||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==_||U.numPointShadows!==g||U.numSpotShadows!==x||U.numSpotMaps!==D||U.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=x+D-C,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,U.directionalLength=d,U.pointLength=v,U.spotLength=y,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=_,U.numPointShadows=g,U.numSpotShadows=x,U.numSpotMaps=D,U.numLightProbes=A,i.version=OD++)}function l(c,u){let p=0,h=0,d=0,v=0,y=0,m=u.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){let g=c[f];if(g.isDirectionalLight){let x=i.directional[p];x.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(g.isSpotLight){let x=i.spot[d];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(g.isRectAreaLight){let x=i.rectArea[v];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),r.identity(),a.copy(g.matrixWorld),a.premultiply(m),r.extractRotation(a),x.halfWidth.set(g.width*.5,0,0),x.halfHeight.set(0,g.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),v++}else if(g.isPointLight){let x=i.point[h];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){let x=i.hemi[y];x.direction.setFromMatrixPosition(g.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function w1(e){let t=new zD(e),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function a(u){n.push(u)}function r(u){i.push(u)}function o(){t.setup(n)}function l(u){t.setupView(n,u)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function PD(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new w1(e),t.set(s,[o])):a>=r.length?(o=new w1(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var v0=class extends ar{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_0=class extends ar{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},BD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function HD(e,t,n){let i=new Tc,s=new ut,a=new ut,r=new Ke,o=new v0({depthPacking:Ww}),l=new _0,c={},u=n.maxTextureSize,p={[_a]:Hn,[Hn]:_a,[vi]:vi},h=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:BD,fragmentShader:FD}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let v=new _i;v.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Xe(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=P1;let f=this.type;this.render=function(C,A,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let E=e.getRenderTarget(),S=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),q=e.state;q.setBlending(ma),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let H=f!==ys&&this.type===ys,k=f===ys&&this.type!==ys;for(let Z=0,G=C.length;Z<G;Z++){let tt=C[Z],X=tt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let dt=X.getFrameExtents();if(s.multiply(dt),a.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/dt.x),s.x=a.x*dt.x,X.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/dt.y),s.y=a.y*dt.y,X.mapSize.y=a.y)),X.map===null||H===!0||k===!0){let St=this.type!==ys?{minFilter:Fn,magFilter:Fn}:{};X.map!==null&&X.map.dispose(),X.map=new Rs(s.x,s.y,St),X.map.texture.name=tt.name+".shadowMap",X.camera.updateProjectionMatrix()}e.setRenderTarget(X.map),e.clear();let _t=X.getViewportCount();for(let St=0;St<_t;St++){let Vt=X.getViewport(St);r.set(a.x*Vt.x,a.y*Vt.y,a.x*Vt.z,a.y*Vt.w),q.viewport(r),X.updateMatrices(tt,St),i=X.getFrustum(),x(A,U,X.camera,tt,this.type)}X.isPointLightShadow!==!0&&this.type===ys&&_(X,U),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(E,S,R)};function _(C,A){let U=t.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Rs(s.x,s.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(A,null,U,h,y,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(A,null,U,d,y,null)}function g(C,A,U,E){let S=null,R=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)S=R;else if(S=U.isPointLight===!0?l:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let q=S.uuid,H=A.uuid,k=c[q];k===void 0&&(k={},c[q]=k);let Z=k[H];Z===void 0&&(Z=S.clone(),k[H]=Z,A.addEventListener("dispose",D)),S=Z}if(S.visible=A.visible,S.wireframe=A.wireframe,E===ys?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:p[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let q=e.properties.get(S);q.light=U}return S}function x(C,A,U,E,S){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===ys)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);let H=t.update(C),k=C.material;if(Array.isArray(k)){let Z=H.groups;for(let G=0,tt=Z.length;G<tt;G++){let X=Z[G],dt=k[X.materialIndex];if(dt&&dt.visible){let _t=g(C,dt,E,S);C.onBeforeShadow(e,C,A,U,H,_t,X),e.renderBufferDirect(U,null,H,_t,C,X),C.onAfterShadow(e,C,A,U,H,_t,X)}}}else if(k.visible){let Z=g(C,k,E,S);C.onBeforeShadow(e,C,A,U,H,Z,null),e.renderBufferDirect(U,null,H,Z,C,null),C.onAfterShadow(e,C,A,U,H,Z,null)}}let q=C.children;for(let H=0,k=q.length;H<k;H++)x(q[H],A,U,E,S)}function D(C){C.target.removeEventListener("dispose",D);for(let U in c){let E=c[U],S=C.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function VD(e){function t(){let L=!1,at=new Ke,J=null,Q=new Ke(0,0,0,0);return{setMask:function(rt){J!==rt&&!L&&(e.colorMask(rt,rt,rt,rt),J=rt)},setLocked:function(rt){L=rt},setClear:function(rt,Ot,te,Ce,Be){Be===!0&&(rt*=Ce,Ot*=Ce,te*=Ce),at.set(rt,Ot,te,Ce),Q.equals(at)===!1&&(e.clearColor(rt,Ot,te,Ce),Q.copy(at))},reset:function(){L=!1,J=null,Q.set(-1,0,0,0)}}}function n(){let L=!1,at=null,J=null,Q=null;return{setTest:function(rt){rt?Et(e.DEPTH_TEST):gt(e.DEPTH_TEST)},setMask:function(rt){at!==rt&&!L&&(e.depthMask(rt),at=rt)},setFunc:function(rt){if(J!==rt){switch(rt){case Cw:e.depthFunc(e.NEVER);break;case Dw:e.depthFunc(e.ALWAYS);break;case Uw:e.depthFunc(e.LESS);break;case cf:e.depthFunc(e.LEQUAL);break;case Nw:e.depthFunc(e.EQUAL);break;case Lw:e.depthFunc(e.GEQUAL);break;case Ow:e.depthFunc(e.GREATER);break;case Iw:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}J=rt}},setLocked:function(rt){L=rt},setClear:function(rt){Q!==rt&&(e.clearDepth(rt),Q=rt)},reset:function(){L=!1,at=null,J=null,Q=null}}}function i(){let L=!1,at=null,J=null,Q=null,rt=null,Ot=null,te=null,Ce=null,Be=null;return{setTest:function(ae){L||(ae?Et(e.STENCIL_TEST):gt(e.STENCIL_TEST))},setMask:function(ae){at!==ae&&!L&&(e.stencilMask(ae),at=ae)},setFunc:function(ae,ai,pn){(J!==ae||Q!==ai||rt!==pn)&&(e.stencilFunc(ae,ai,pn),J=ae,Q=ai,rt=pn)},setOp:function(ae,ai,pn){(Ot!==ae||te!==ai||Ce!==pn)&&(e.stencilOp(ae,ai,pn),Ot=ae,te=ai,Ce=pn)},setLocked:function(ae){L=ae},setClear:function(ae){Be!==ae&&(e.clearStencil(ae),Be=ae)},reset:function(){L=!1,at=null,J=null,Q=null,rt=null,Ot=null,te=null,Ce=null,Be=null}}}let s=new t,a=new n,r=new i,o=new WeakMap,l=new WeakMap,c={},u={},p=new WeakMap,h=[],d=null,v=!1,y=null,m=null,f=null,_=null,g=null,x=null,D=null,C=new Wt(0,0,0),A=0,U=!1,E=null,S=null,R=null,q=null,H=null,k=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,G=0,tt=e.getParameter(e.VERSION);tt.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(tt)[1]),Z=G>=1):tt.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),Z=G>=2);let X=null,dt={},_t=e.getParameter(e.SCISSOR_BOX),St=e.getParameter(e.VIEWPORT),Vt=new Ke().fromArray(_t),$t=new Ke().fromArray(St);function W(L,at,J,Q){let rt=new Uint8Array(4),Ot=e.createTexture();e.bindTexture(L,Ot),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let te=0;te<J;te++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(at,0,e.RGBA,1,1,Q,0,e.RGBA,e.UNSIGNED_BYTE,rt):e.texImage2D(at+te,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,rt);return Ot}let it={};it[e.TEXTURE_2D]=W(e.TEXTURE_2D,e.TEXTURE_2D,1),it[e.TEXTURE_CUBE_MAP]=W(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[e.TEXTURE_2D_ARRAY]=W(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),it[e.TEXTURE_3D]=W(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),r.setClear(0),Et(e.DEPTH_TEST),a.setFunc(cf),pt(!1),K(UM),Et(e.CULL_FACE),st(ma);function Et(L){c[L]!==!0&&(e.enable(L),c[L]=!0)}function gt(L){c[L]!==!1&&(e.disable(L),c[L]=!1)}function Ut(L,at){return u[L]!==at?(e.bindFramebuffer(L,at),u[L]=at,L===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=at),L===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=at),!0):!1}function Ht(L,at){let J=h,Q=!1;if(L){J=p.get(at),J===void 0&&(J=[],p.set(at,J));let rt=L.textures;if(J.length!==rt.length||J[0]!==e.COLOR_ATTACHMENT0){for(let Ot=0,te=rt.length;Ot<te;Ot++)J[Ot]=e.COLOR_ATTACHMENT0+Ot;J.length=rt.length,Q=!0}}else J[0]!==e.BACK&&(J[0]=e.BACK,Q=!0);Q&&e.drawBuffers(J)}function Lt(L){return d!==L?(e.useProgram(L),d=L,!0):!1}let Zt={[er]:e.FUNC_ADD,[fw]:e.FUNC_SUBTRACT,[dw]:e.FUNC_REVERSE_SUBTRACT};Zt[pw]=e.MIN,Zt[mw]=e.MAX;let T={[gw]:e.ZERO,[vw]:e.ONE,[_w]:e.SRC_COLOR,[wg]:e.SRC_ALPHA,[Ew]:e.SRC_ALPHA_SATURATE,[Mw]:e.DST_COLOR,[xw]:e.DST_ALPHA,[yw]:e.ONE_MINUS_SRC_COLOR,[Rg]:e.ONE_MINUS_SRC_ALPHA,[bw]:e.ONE_MINUS_DST_COLOR,[Sw]:e.ONE_MINUS_DST_ALPHA,[Tw]:e.CONSTANT_COLOR,[Aw]:e.ONE_MINUS_CONSTANT_COLOR,[ww]:e.CONSTANT_ALPHA,[Rw]:e.ONE_MINUS_CONSTANT_ALPHA};function st(L,at,J,Q,rt,Ot,te,Ce,Be,ae){if(L===ma){v===!0&&(gt(e.BLEND),v=!1);return}if(v===!1&&(Et(e.BLEND),v=!0),L!==hw){if(L!==y||ae!==U){if((m!==er||g!==er)&&(e.blendEquation(e.FUNC_ADD),m=er,g=er),ae)switch(L){case Bo:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case NM:e.blendFunc(e.ONE,e.ONE);break;case LM:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case OM:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Bo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case NM:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case LM:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case OM:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}f=null,_=null,x=null,D=null,C.set(0,0,0),A=0,y=L,U=ae}return}rt=rt||at,Ot=Ot||J,te=te||Q,(at!==m||rt!==g)&&(e.blendEquationSeparate(Zt[at],Zt[rt]),m=at,g=rt),(J!==f||Q!==_||Ot!==x||te!==D)&&(e.blendFuncSeparate(T[J],T[Q],T[Ot],T[te]),f=J,_=Q,x=Ot,D=te),(Ce.equals(C)===!1||Be!==A)&&(e.blendColor(Ce.r,Ce.g,Ce.b,Be),C.copy(Ce),A=Be),y=L,U=!1}function et(L,at){L.side===vi?gt(e.CULL_FACE):Et(e.CULL_FACE);let J=L.side===Hn;at&&(J=!J),pt(J),L.blending===Bo&&L.transparent===!1?st(ma):st(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);let Q=L.stencilWrite;r.setTest(Q),Q&&(r.setMask(L.stencilWriteMask),r.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),r.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ft(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Et(e.SAMPLE_ALPHA_TO_COVERAGE):gt(e.SAMPLE_ALPHA_TO_COVERAGE)}function pt(L){E!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),E=L)}function K(L){L!==lw?(Et(e.CULL_FACE),L!==S&&(L===UM?e.cullFace(e.BACK):L===cw?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):gt(e.CULL_FACE),S=L}function Ct(L){L!==R&&(Z&&e.lineWidth(L),R=L)}function ft(L,at,J){L?(Et(e.POLYGON_OFFSET_FILL),(q!==at||H!==J)&&(e.polygonOffset(at,J),q=at,H=J)):gt(e.POLYGON_OFFSET_FILL)}function bt(L){L?Et(e.SCISSOR_TEST):gt(e.SCISSOR_TEST)}function w(L){L===void 0&&(L=e.TEXTURE0+k-1),X!==L&&(e.activeTexture(L),X=L)}function M(L,at,J){J===void 0&&(X===null?J=e.TEXTURE0+k-1:J=X);let Q=dt[J];Q===void 0&&(Q={type:void 0,texture:void 0},dt[J]=Q),(Q.type!==L||Q.texture!==at)&&(X!==J&&(e.activeTexture(J),X=J),e.bindTexture(L,at||it[L]),Q.type=L,Q.texture=at)}function z(){let L=dt[X];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{e.compressedTexImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{e.compressedTexImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{e.texSubImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{e.texSubImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pt(){try{e.texStorage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{e.texStorage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{e.texImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ft(){try{e.texImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(L){Vt.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),Vt.copy(L))}function Tt(L){$t.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),$t.copy(L))}function It(L,at){let J=l.get(at);J===void 0&&(J=new WeakMap,l.set(at,J));let Q=J.get(L);Q===void 0&&(Q=e.getUniformBlockIndex(at,L.name),J.set(L,Q))}function Gt(L,at){let Q=l.get(at).get(L);o.get(at)!==Q&&(e.uniformBlockBinding(at,Q,L.__bindingPointIndex),o.set(at,Q))}function ye(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},X=null,dt={},u={},p=new WeakMap,h=[],d=null,v=!1,y=null,m=null,f=null,_=null,g=null,x=null,D=null,C=new Wt(0,0,0),A=0,U=!1,E=null,S=null,R=null,q=null,H=null,Vt.set(0,0,e.canvas.width,e.canvas.height),$t.set(0,0,e.canvas.width,e.canvas.height),s.reset(),a.reset(),r.reset()}return{buffers:{color:s,depth:a,stencil:r},enable:Et,disable:gt,bindFramebuffer:Ut,drawBuffers:Ht,useProgram:Lt,setBlending:st,setMaterial:et,setFlipSided:pt,setCullFace:K,setLineWidth:Ct,setPolygonOffset:ft,setScissorTest:bt,activeTexture:w,bindTexture:M,unbindTexture:z,compressedTexImage2D:j,compressedTexImage3D:$,texImage2D:ct,texImage3D:Ft,updateUBOMapping:It,uniformBlockBinding:Gt,texStorage2D:Pt,texStorage3D:nt,texSubImage2D:F,texSubImage3D:Dt,compressedTexSubImage2D:mt,compressedTexSubImage3D:Mt,scissor:Nt,viewport:Tt,reset:ye}}function R1(e,t,n,i){let s=GD(i);switch(n){case k1:return e*t;case q1:return e*t;case W1:return e*t*2;case Y1:return e*t/s.components*s.byteLength;case Z0:return e*t/s.components*s.byteLength;case Z1:return e*t*2/s.components*s.byteLength;case K0:return e*t*2/s.components*s.byteLength;case X1:return e*t*3/s.components*s.byteLength;case Di:return e*t*4/s.components*s.byteLength;case J0:return e*t*4/s.components*s.byteLength;case sf:case af:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case rf:case of:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Lg:case Ig:return Math.max(e,16)*Math.max(t,8)/4;case Ng:case Og:return Math.max(e,8)*Math.max(t,8)/2;case zg:case Pg:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Bg:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Fg:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Hg:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Vg:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Gg:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case kg:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Xg:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case qg:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Wg:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Yg:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Zg:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Kg:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Jg:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Qg:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case jg:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case lf:case $g:case t0:return Math.ceil(e/4)*Math.ceil(t/4)*16;case K1:case e0:return Math.ceil(e/4)*Math.ceil(t/4)*8;case n0:case i0:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function GD(e){switch(e){case ws:case H1:return{byteLength:1,components:1};case Sc:case V1:case zc:return{byteLength:2,components:1};case W0:case Y0:return{byteLength:2,components:4};case ir:case q0:case bs:return{byteLength:4,components:1};case G1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function kD(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap,p,h=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,M){return d?new OffscreenCanvas(w,M):mf("canvas")}function y(w,M,z){let j=1,$=bt(w);if(($.width>z||$.height>z)&&(j=z/Math.max($.width,$.height)),j<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let F=Math.floor(j*$.width),Dt=Math.floor(j*$.height);p===void 0&&(p=v(F,Dt));let mt=M?v(F,Dt):p;return mt.width=F,mt.height=Dt,mt.getContext("2d").drawImage(w,0,0,F,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+F+"x"+Dt+")."),mt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),w;return w}function m(w){return w.generateMipmaps&&w.minFilter!==Fn&&w.minFilter!==ii}function f(w){e.generateMipmap(w)}function _(w,M,z,j,$=!1){if(w!==null){if(e[w]!==void 0)return e[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let F=M;if(M===e.RED&&(z===e.FLOAT&&(F=e.R32F),z===e.HALF_FLOAT&&(F=e.R16F),z===e.UNSIGNED_BYTE&&(F=e.R8)),M===e.RED_INTEGER&&(z===e.UNSIGNED_BYTE&&(F=e.R8UI),z===e.UNSIGNED_SHORT&&(F=e.R16UI),z===e.UNSIGNED_INT&&(F=e.R32UI),z===e.BYTE&&(F=e.R8I),z===e.SHORT&&(F=e.R16I),z===e.INT&&(F=e.R32I)),M===e.RG&&(z===e.FLOAT&&(F=e.RG32F),z===e.HALF_FLOAT&&(F=e.RG16F),z===e.UNSIGNED_BYTE&&(F=e.RG8)),M===e.RG_INTEGER&&(z===e.UNSIGNED_BYTE&&(F=e.RG8UI),z===e.UNSIGNED_SHORT&&(F=e.RG16UI),z===e.UNSIGNED_INT&&(F=e.RG32UI),z===e.BYTE&&(F=e.RG8I),z===e.SHORT&&(F=e.RG16I),z===e.INT&&(F=e.RG32I)),M===e.RGB&&z===e.UNSIGNED_INT_5_9_9_9_REV&&(F=e.RGB9_E5),M===e.RGBA){let Dt=$?hf:ue.getTransfer(j);z===e.FLOAT&&(F=e.RGBA32F),z===e.HALF_FLOAT&&(F=e.RGBA16F),z===e.UNSIGNED_BYTE&&(F=Dt===Ee?e.SRGB8_ALPHA8:e.RGBA8),z===e.UNSIGNED_SHORT_4_4_4_4&&(F=e.RGBA4),z===e.UNSIGNED_SHORT_5_5_5_1&&(F=e.RGB5_A1)}return(F===e.R16F||F===e.R32F||F===e.RG16F||F===e.RG32F||F===e.RGBA16F||F===e.RGBA32F)&&t.get("EXT_color_buffer_float"),F}function g(w,M){let z;return w?M===null||M===ir||M===Xo?z=e.DEPTH24_STENCIL8:M===bs?z=e.DEPTH32F_STENCIL8:M===Sc&&(z=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ir||M===Xo?z=e.DEPTH_COMPONENT24:M===bs?z=e.DEPTH_COMPONENT32F:M===Sc&&(z=e.DEPTH_COMPONENT16),z}function x(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Fn&&w.minFilter!==ii?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function D(w){let M=w.target;M.removeEventListener("dispose",D),A(M),M.isVideoTexture&&u.delete(M)}function C(w){let M=w.target;M.removeEventListener("dispose",C),E(M)}function A(w){let M=i.get(w);if(M.__webglInit===void 0)return;let z=w.source,j=h.get(z);if(j){let $=j[M.__cacheKey];$.usedTimes--,$.usedTimes===0&&U(w),Object.keys(j).length===0&&h.delete(z)}i.remove(w)}function U(w){let M=i.get(w);e.deleteTexture(M.__webglTexture);let z=w.source,j=h.get(z);delete j[M.__cacheKey],r.memory.textures--}function E(w){let M=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let $=0;$<M.__webglFramebuffer[j].length;$++)e.deleteFramebuffer(M.__webglFramebuffer[j][$]);else e.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)e.deleteFramebuffer(M.__webglFramebuffer[j]);else e.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&e.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&e.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&e.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=w.textures;for(let j=0,$=z.length;j<$;j++){let F=i.get(z[j]);F.__webglTexture&&(e.deleteTexture(F.__webglTexture),r.memory.textures--),i.remove(z[j])}i.remove(w)}let S=0;function R(){S=0}function q(){let w=S;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),S+=1,w}function H(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function k(w,M){let z=i.get(w);if(w.isVideoTexture&&Ct(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){let j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$t(z,w,M);return}}n.bindTexture(e.TEXTURE_2D,z.__webglTexture,e.TEXTURE0+M)}function Z(w,M){let z=i.get(w);if(w.version>0&&z.__version!==w.version){$t(z,w,M);return}n.bindTexture(e.TEXTURE_2D_ARRAY,z.__webglTexture,e.TEXTURE0+M)}function G(w,M){let z=i.get(w);if(w.version>0&&z.__version!==w.version){$t(z,w,M);return}n.bindTexture(e.TEXTURE_3D,z.__webglTexture,e.TEXTURE0+M)}function tt(w,M){let z=i.get(w);if(w.version>0&&z.__version!==w.version){W(z,w,M);return}n.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture,e.TEXTURE0+M)}let X={[As]:e.REPEAT,[Ss]:e.CLAMP_TO_EDGE,[Ug]:e.MIRRORED_REPEAT},dt={[Fn]:e.NEAREST,[Xw]:e.NEAREST_MIPMAP_NEAREST,[Uh]:e.NEAREST_MIPMAP_LINEAR,[ii]:e.LINEAR,[Km]:e.LINEAR_MIPMAP_NEAREST,[Ms]:e.LINEAR_MIPMAP_LINEAR},_t={[Zw]:e.NEVER,[tR]:e.ALWAYS,[Kw]:e.LESS,[Q1]:e.LEQUAL,[Jw]:e.EQUAL,[$w]:e.GEQUAL,[Qw]:e.GREATER,[jw]:e.NOTEQUAL};function St(w,M){if(M.type===bs&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ii||M.magFilter===Km||M.magFilter===Uh||M.magFilter===Ms||M.minFilter===ii||M.minFilter===Km||M.minFilter===Uh||M.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,X[M.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,X[M.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,X[M.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,dt[M.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,dt[M.minFilter]),M.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,_t[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Fn||M.minFilter!==Uh&&M.minFilter!==Ms||M.type===bs&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Vt(w,M){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",D));let j=M.source,$=h.get(j);$===void 0&&($={},h.set(j,$));let F=H(M);if(F!==w.__cacheKey){$[F]===void 0&&($[F]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,z=!0),$[F].usedTimes++;let Dt=$[w.__cacheKey];Dt!==void 0&&($[w.__cacheKey].usedTimes--,Dt.usedTimes===0&&U(M)),w.__cacheKey=F,w.__webglTexture=$[F].texture}return z}function $t(w,M,z){let j=e.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=e.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=e.TEXTURE_3D);let $=Vt(w,M),F=M.source;n.bindTexture(j,w.__webglTexture,e.TEXTURE0+z);let Dt=i.get(F);if(F.version!==Dt.__version||$===!0){n.activeTexture(e.TEXTURE0+z);let mt=ue.getPrimaries(ue.workingColorSpace),Mt=M.colorSpace===pa?null:ue.getPrimaries(M.colorSpace),Pt=M.colorSpace===pa||mt===Mt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let nt=y(M.image,!1,s.maxTextureSize);nt=ft(M,nt);let ct=a.convert(M.format,M.colorSpace),Ft=a.convert(M.type),Nt=_(M.internalFormat,ct,Ft,M.colorSpace,M.isVideoTexture);St(j,M);let Tt,It=M.mipmaps,Gt=M.isVideoTexture!==!0,ye=Dt.__version===void 0||$===!0,L=F.dataReady,at=x(M,nt);if(M.isDepthTexture)Nt=g(M.format===qo,M.type),ye&&(Gt?n.texStorage2D(e.TEXTURE_2D,1,Nt,nt.width,nt.height):n.texImage2D(e.TEXTURE_2D,0,Nt,nt.width,nt.height,0,ct,Ft,null));else if(M.isDataTexture)if(It.length>0){Gt&&ye&&n.texStorage2D(e.TEXTURE_2D,at,Nt,It[0].width,It[0].height);for(let J=0,Q=It.length;J<Q;J++)Tt=It[J],Gt?L&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,Tt.width,Tt.height,ct,Ft,Tt.data):n.texImage2D(e.TEXTURE_2D,J,Nt,Tt.width,Tt.height,0,ct,Ft,Tt.data);M.generateMipmaps=!1}else Gt?(ye&&n.texStorage2D(e.TEXTURE_2D,at,Nt,nt.width,nt.height),L&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,nt.width,nt.height,ct,Ft,nt.data)):n.texImage2D(e.TEXTURE_2D,0,Nt,nt.width,nt.height,0,ct,Ft,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Gt&&ye&&n.texStorage3D(e.TEXTURE_2D_ARRAY,at,Nt,It[0].width,It[0].height,nt.depth);for(let J=0,Q=It.length;J<Q;J++)if(Tt=It[J],M.format!==Di)if(ct!==null)if(Gt){if(L)if(M.layerUpdates.size>0){let rt=R1(Tt.width,Tt.height,M.format,M.type);for(let Ot of M.layerUpdates){let te=Tt.data.subarray(Ot*rt/Tt.data.BYTES_PER_ELEMENT,(Ot+1)*rt/Tt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,Ot,Tt.width,Tt.height,1,ct,te,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,Tt.width,Tt.height,nt.depth,ct,Tt.data,0,0)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,J,Nt,Tt.width,Tt.height,nt.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?L&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,Tt.width,Tt.height,nt.depth,ct,Ft,Tt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,J,Nt,Tt.width,Tt.height,nt.depth,0,ct,Ft,Tt.data)}else{Gt&&ye&&n.texStorage2D(e.TEXTURE_2D,at,Nt,It[0].width,It[0].height);for(let J=0,Q=It.length;J<Q;J++)Tt=It[J],M.format!==Di?ct!==null?Gt?L&&n.compressedTexSubImage2D(e.TEXTURE_2D,J,0,0,Tt.width,Tt.height,ct,Tt.data):n.compressedTexImage2D(e.TEXTURE_2D,J,Nt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?L&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,Tt.width,Tt.height,ct,Ft,Tt.data):n.texImage2D(e.TEXTURE_2D,J,Nt,Tt.width,Tt.height,0,ct,Ft,Tt.data)}else if(M.isDataArrayTexture)if(Gt){if(ye&&n.texStorage3D(e.TEXTURE_2D_ARRAY,at,Nt,nt.width,nt.height,nt.depth),L)if(M.layerUpdates.size>0){let J=R1(nt.width,nt.height,M.format,M.type);for(let Q of M.layerUpdates){let rt=nt.data.subarray(Q*J/nt.data.BYTES_PER_ELEMENT,(Q+1)*J/nt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Q,nt.width,nt.height,1,ct,Ft,rt)}M.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ct,Ft,nt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Nt,nt.width,nt.height,nt.depth,0,ct,Ft,nt.data);else if(M.isData3DTexture)Gt?(ye&&n.texStorage3D(e.TEXTURE_3D,at,Nt,nt.width,nt.height,nt.depth),L&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ct,Ft,nt.data)):n.texImage3D(e.TEXTURE_3D,0,Nt,nt.width,nt.height,nt.depth,0,ct,Ft,nt.data);else if(M.isFramebufferTexture){if(ye)if(Gt)n.texStorage2D(e.TEXTURE_2D,at,Nt,nt.width,nt.height);else{let J=nt.width,Q=nt.height;for(let rt=0;rt<at;rt++)n.texImage2D(e.TEXTURE_2D,rt,Nt,J,Q,0,ct,Ft,null),J>>=1,Q>>=1}}else if(It.length>0){if(Gt&&ye){let J=bt(It[0]);n.texStorage2D(e.TEXTURE_2D,at,Nt,J.width,J.height)}for(let J=0,Q=It.length;J<Q;J++)Tt=It[J],Gt?L&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,ct,Ft,Tt):n.texImage2D(e.TEXTURE_2D,J,Nt,ct,Ft,Tt);M.generateMipmaps=!1}else if(Gt){if(ye){let J=bt(nt);n.texStorage2D(e.TEXTURE_2D,at,Nt,J.width,J.height)}L&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ct,Ft,nt)}else n.texImage2D(e.TEXTURE_2D,0,Nt,ct,Ft,nt);m(M)&&f(j),Dt.__version=F.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function W(w,M,z){if(M.image.length!==6)return;let j=Vt(w,M),$=M.source;n.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+z);let F=i.get($);if($.version!==F.__version||j===!0){n.activeTexture(e.TEXTURE0+z);let Dt=ue.getPrimaries(ue.workingColorSpace),mt=M.colorSpace===pa?null:ue.getPrimaries(M.colorSpace),Mt=M.colorSpace===pa||Dt===mt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let Pt=M.isCompressedTexture||M.image[0].isCompressedTexture,nt=M.image[0]&&M.image[0].isDataTexture,ct=[];for(let Q=0;Q<6;Q++)!Pt&&!nt?ct[Q]=y(M.image[Q],!0,s.maxCubemapSize):ct[Q]=nt?M.image[Q].image:M.image[Q],ct[Q]=ft(M,ct[Q]);let Ft=ct[0],Nt=a.convert(M.format,M.colorSpace),Tt=a.convert(M.type),It=_(M.internalFormat,Nt,Tt,M.colorSpace),Gt=M.isVideoTexture!==!0,ye=F.__version===void 0||j===!0,L=$.dataReady,at=x(M,Ft);St(e.TEXTURE_CUBE_MAP,M);let J;if(Pt){Gt&&ye&&n.texStorage2D(e.TEXTURE_CUBE_MAP,at,It,Ft.width,Ft.height);for(let Q=0;Q<6;Q++){J=ct[Q].mipmaps;for(let rt=0;rt<J.length;rt++){let Ot=J[rt];M.format!==Di?Nt!==null?Gt?L&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,rt,0,0,Ot.width,Ot.height,Nt,Ot.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,rt,It,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,rt,0,0,Ot.width,Ot.height,Nt,Tt,Ot.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,rt,It,Ot.width,Ot.height,0,Nt,Tt,Ot.data)}}}else{if(J=M.mipmaps,Gt&&ye){J.length>0&&at++;let Q=bt(ct[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,at,It,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(nt){Gt?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ct[Q].width,ct[Q].height,Nt,Tt,ct[Q].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,It,ct[Q].width,ct[Q].height,0,Nt,Tt,ct[Q].data);for(let rt=0;rt<J.length;rt++){let te=J[rt].image[Q].image;Gt?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,rt+1,0,0,te.width,te.height,Nt,Tt,te.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,rt+1,It,te.width,te.height,0,Nt,Tt,te.data)}}else{Gt?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Nt,Tt,ct[Q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,It,Nt,Tt,ct[Q]);for(let rt=0;rt<J.length;rt++){let Ot=J[rt];Gt?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,rt+1,0,0,Nt,Tt,Ot.image[Q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,rt+1,It,Nt,Tt,Ot.image[Q])}}}m(M)&&f(e.TEXTURE_CUBE_MAP),F.__version=$.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function it(w,M,z,j,$,F){let Dt=a.convert(z.format,z.colorSpace),mt=a.convert(z.type),Mt=_(z.internalFormat,Dt,mt,z.colorSpace);if(!i.get(M).__hasExternalTextures){let nt=Math.max(1,M.width>>F),ct=Math.max(1,M.height>>F);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?n.texImage3D($,F,Mt,nt,ct,M.depth,0,Dt,mt,null):n.texImage2D($,F,Mt,nt,ct,0,Dt,mt,null)}n.bindFramebuffer(e.FRAMEBUFFER,w),K(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,j,$,i.get(z).__webglTexture,0,pt(M)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,j,$,i.get(z).__webglTexture,F),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Et(w,M,z){if(e.bindRenderbuffer(e.RENDERBUFFER,w),M.depthBuffer){let j=M.depthTexture,$=j&&j.isDepthTexture?j.type:null,F=g(M.stencilBuffer,$),Dt=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,mt=pt(M);K(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,mt,F,M.width,M.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,mt,F,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,F,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Dt,e.RENDERBUFFER,w)}else{let j=M.textures;for(let $=0;$<j.length;$++){let F=j[$],Dt=a.convert(F.format,F.colorSpace),mt=a.convert(F.type),Mt=_(F.internalFormat,Dt,mt,F.colorSpace),Pt=pt(M);z&&K(M)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pt,Mt,M.width,M.height):K(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pt,Mt,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,Mt,M.width,M.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function gt(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);let j=i.get(M.depthTexture).__webglTexture,$=pt(M);if(M.depthTexture.format===Fo)K(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,j,0,$):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,j,0);else if(M.depthTexture.format===qo)K(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,j,0,$):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ut(w){let M=i.get(w),z=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");gt(M.__webglFramebuffer,w)}else if(z){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]=e.createRenderbuffer(),Et(M.__webglDepthbuffer[j],w,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=e.createRenderbuffer(),Et(M.__webglDepthbuffer,w,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ht(w,M,z){let j=i.get(w);M!==void 0&&it(j.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),z!==void 0&&Ut(w)}function Lt(w){let M=w.texture,z=i.get(w),j=i.get(M);w.addEventListener("dispose",C);let $=w.textures,F=w.isWebGLCubeRenderTarget===!0,Dt=$.length>1;if(Dt||(j.__webglTexture===void 0&&(j.__webglTexture=e.createTexture()),j.__version=M.version,r.memory.textures++),F){z.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[mt]=[];for(let Mt=0;Mt<M.mipmaps.length;Mt++)z.__webglFramebuffer[mt][Mt]=e.createFramebuffer()}else z.__webglFramebuffer[mt]=e.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let mt=0;mt<M.mipmaps.length;mt++)z.__webglFramebuffer[mt]=e.createFramebuffer()}else z.__webglFramebuffer=e.createFramebuffer();if(Dt)for(let mt=0,Mt=$.length;mt<Mt;mt++){let Pt=i.get($[mt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=e.createTexture(),r.memory.textures++)}if(w.samples>0&&K(w)===!1){z.__webglMultisampledFramebuffer=e.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let mt=0;mt<$.length;mt++){let Mt=$[mt];z.__webglColorRenderbuffer[mt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,z.__webglColorRenderbuffer[mt]);let Pt=a.convert(Mt.format,Mt.colorSpace),nt=a.convert(Mt.type),ct=_(Mt.internalFormat,Pt,nt,Mt.colorSpace,w.isXRRenderTarget===!0),Ft=pt(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ft,ct,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+mt,e.RENDERBUFFER,z.__webglColorRenderbuffer[mt])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=e.createRenderbuffer(),Et(z.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(F){n.bindTexture(e.TEXTURE_CUBE_MAP,j.__webglTexture),St(e.TEXTURE_CUBE_MAP,M);for(let mt=0;mt<6;mt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Mt=0;Mt<M.mipmaps.length;Mt++)it(z.__webglFramebuffer[mt][Mt],w,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Mt);else it(z.__webglFramebuffer[mt],w,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(M)&&f(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Dt){for(let mt=0,Mt=$.length;mt<Mt;mt++){let Pt=$[mt],nt=i.get(Pt);n.bindTexture(e.TEXTURE_2D,nt.__webglTexture),St(e.TEXTURE_2D,Pt),it(z.__webglFramebuffer,w,Pt,e.COLOR_ATTACHMENT0+mt,e.TEXTURE_2D,0),m(Pt)&&f(e.TEXTURE_2D)}n.unbindTexture()}else{let mt=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(mt=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(mt,j.__webglTexture),St(mt,M),M.mipmaps&&M.mipmaps.length>0)for(let Mt=0;Mt<M.mipmaps.length;Mt++)it(z.__webglFramebuffer[Mt],w,M,e.COLOR_ATTACHMENT0,mt,Mt);else it(z.__webglFramebuffer,w,M,e.COLOR_ATTACHMENT0,mt,0);m(M)&&f(mt),n.unbindTexture()}w.depthBuffer&&Ut(w)}function Zt(w){let M=w.textures;for(let z=0,j=M.length;z<j;z++){let $=M[z];if(m($)){let F=w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,Dt=i.get($).__webglTexture;n.bindTexture(F,Dt),f(F),n.unbindTexture()}}}let T=[],st=[];function et(w){if(w.samples>0){if(K(w)===!1){let M=w.textures,z=w.width,j=w.height,$=e.COLOR_BUFFER_BIT,F=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Dt=i.get(w),mt=M.length>1;if(mt)for(let Mt=0;Mt<M.length;Mt++)n.bindFramebuffer(e.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Mt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Mt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Mt=0;Mt<M.length;Mt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),mt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Dt.__webglColorRenderbuffer[Mt]);let Pt=i.get(M[Mt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Pt,0)}e.blitFramebuffer(0,0,z,j,0,0,z,j,$,e.NEAREST),l===!0&&(T.length=0,st.length=0,T.push(e.COLOR_ATTACHMENT0+Mt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(T.push(F),st.push(F),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,st)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,T))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),mt)for(let Mt=0;Mt<M.length;Mt++){n.bindFramebuffer(e.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Mt,e.RENDERBUFFER,Dt.__webglColorRenderbuffer[Mt]);let Pt=i.get(M[Mt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Mt,e.TEXTURE_2D,Pt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let M=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[M])}}}function pt(w){return Math.min(s.maxSamples,w.samples)}function K(w){let M=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ct(w){let M=r.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function ft(w,M){let z=w.colorSpace,j=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==xa&&z!==pa&&(ue.getTransfer(z)===Ee?(j!==Di||$!==ws)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function bt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=R,this.setTexture2D=k,this.setTexture2DArray=Z,this.setTexture3D=G,this.setTextureCube=tt,this.rebindTextures=Ht,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=it,this.useMultisampledRTT=K}function XD(e,t){function n(i,s=pa){let a,r=ue.getTransfer(s);if(i===ws)return e.UNSIGNED_BYTE;if(i===W0)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Y0)return e.UNSIGNED_SHORT_5_5_5_1;if(i===G1)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===H1)return e.BYTE;if(i===V1)return e.SHORT;if(i===Sc)return e.UNSIGNED_SHORT;if(i===q0)return e.INT;if(i===ir)return e.UNSIGNED_INT;if(i===bs)return e.FLOAT;if(i===zc)return e.HALF_FLOAT;if(i===k1)return e.ALPHA;if(i===X1)return e.RGB;if(i===Di)return e.RGBA;if(i===q1)return e.LUMINANCE;if(i===W1)return e.LUMINANCE_ALPHA;if(i===Fo)return e.DEPTH_COMPONENT;if(i===qo)return e.DEPTH_STENCIL;if(i===Y1)return e.RED;if(i===Z0)return e.RED_INTEGER;if(i===Z1)return e.RG;if(i===K0)return e.RG_INTEGER;if(i===J0)return e.RGBA_INTEGER;if(i===sf||i===af||i===rf||i===of)if(r===Ee)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===sf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===af)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===of)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===sf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===af)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===of)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ng||i===Lg||i===Og||i===Ig)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ng)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Og)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ig)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zg||i===Pg||i===Bg)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===zg||i===Pg)return r===Ee?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Bg)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Fg||i===Hg||i===Vg||i===Gg||i===kg||i===Xg||i===qg||i===Wg||i===Yg||i===Zg||i===Kg||i===Jg||i===Qg||i===jg)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Fg)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hg)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vg)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gg)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kg)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xg)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qg)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wg)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yg)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zg)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kg)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jg)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qg)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jg)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lf||i===$g||i===t0)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===lf)return r===Ee?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$g)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===t0)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===K1||i===e0||i===n0||i===i0)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===lf)return a.COMPRESSED_RED_RGTC1_EXT;if(i===e0)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===n0)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===i0)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var y0=class extends Rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ts=class extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},qD={type:"move"},_c=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let y of t.hand.values()){let m=n.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=u.position.distanceTo(p.position),d=.02,v=.005;c.inputState.pinching&&h>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qD)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Ts;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},WD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,x0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){let s=new Vn,a=t.properties.get(s);a.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Ji({vertexShader:WD,fragmentShader:YD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xe(new Zo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},S0=class extends ya{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,p=null,h=null,d=null,v=null,y=new x0,m=n.getContextAttributes(),f=null,_=null,g=[],x=[],D=new ut,C=null,A=new Rn;A.layers.enable(1),A.viewport=new Ke;let U=new Rn;U.layers.enable(2),U.viewport=new Ke;let E=[A,U],S=new y0;S.layers.enable(1),S.layers.enable(2);let R=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let it=g[W];return it===void 0&&(it=new _c,g[W]=it),it.getTargetRaySpace()},this.getControllerGrip=function(W){let it=g[W];return it===void 0&&(it=new _c,g[W]=it),it.getGripSpace()},this.getHand=function(W){let it=g[W];return it===void 0&&(it=new _c,g[W]=it),it.getHandSpace()};function H(W){let it=x.indexOf(W.inputSource);if(it===-1)return;let Et=g[it];Et!==void 0&&(Et.update(W.inputSource,W.frame,c||r),Et.dispatchEvent({type:W.type,data:W.inputSource}))}function k(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",Z);for(let W=0;W<g.length;W++){let it=x[W];it!==null&&(x[W]=null,g[W].disconnect(it))}R=null,q=null,y.reset(),t.setRenderTarget(f),d=null,h=null,p=null,s=null,_=null,$t.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",k),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,it),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Rs(d.framebufferWidth,d.framebufferHeight,{format:Di,type:ws,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,Et=null,gt=null;m.depth&&(gt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,it=m.stencil?qo:Fo,Et=m.stencil?Xo:ir);let Ut={colorFormat:n.RGBA8,depthFormat:gt,scaleFactor:a};p=new XRWebGLBinding(s,n),h=p.createProjectionLayer(Ut),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),_=new Rs(h.textureWidth,h.textureHeight,{format:Di,type:ws,depthTexture:new Ef(h.textureWidth,h.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(W){for(let it=0;it<W.removed.length;it++){let Et=W.removed[it],gt=x.indexOf(Et);gt>=0&&(x[gt]=null,g[gt].disconnect(Et))}for(let it=0;it<W.added.length;it++){let Et=W.added[it],gt=x.indexOf(Et);if(gt===-1){for(let Ht=0;Ht<g.length;Ht++)if(Ht>=x.length){x.push(Et),gt=Ht;break}else if(x[Ht]===null){x[Ht]=Et,gt=Ht;break}if(gt===-1)break}let Ut=g[gt];Ut&&Ut.connect(Et)}}let G=new N,tt=new N;function X(W,it,Et){G.setFromMatrixPosition(it.matrixWorld),tt.setFromMatrixPosition(Et.matrixWorld);let gt=G.distanceTo(tt),Ut=it.projectionMatrix.elements,Ht=Et.projectionMatrix.elements,Lt=Ut[14]/(Ut[10]-1),Zt=Ut[14]/(Ut[10]+1),T=(Ut[9]+1)/Ut[5],st=(Ut[9]-1)/Ut[5],et=(Ut[8]-1)/Ut[0],pt=(Ht[8]+1)/Ht[0],K=Lt*et,Ct=Lt*pt,ft=gt/(-et+pt),bt=ft*-et;it.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(bt),W.translateZ(ft),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let w=Lt+ft,M=Zt+ft,z=K-bt,j=Ct+(gt-bt),$=T*Zt/M*w,F=st*Zt/M*w;W.projectionMatrix.makePerspective(z,j,$,F,w,M),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function dt(W,it){it===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(it.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;y.texture!==null&&(W.near=y.depthNear,W.far=y.depthFar),S.near=U.near=A.near=W.near,S.far=U.far=A.far=W.far,(R!==S.near||q!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,q=S.far,A.near=R,A.far=q,U.near=R,U.far=q,A.updateProjectionMatrix(),U.updateProjectionMatrix(),W.updateProjectionMatrix());let it=W.parent,Et=S.cameras;dt(S,it);for(let gt=0;gt<Et.length;gt++)dt(Et[gt],it);Et.length===2?X(S,A,U):S.projectionMatrix.copy(A.projectionMatrix),_t(W,S,it)};function _t(W,it,Et){Et===null?W.matrix.copy(it.matrixWorld):(W.matrix.copy(Et.matrixWorld),W.matrix.invert(),W.matrix.multiply(it.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(it.projectionMatrix),W.projectionMatrixInverse.copy(it.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=a0*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let St=null;function Vt(W,it){if(u=it.getViewerPose(c||r),v=it,u!==null){let Et=u.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let gt=!1;Et.length!==S.cameras.length&&(S.cameras.length=0,gt=!0);for(let Ht=0;Ht<Et.length;Ht++){let Lt=Et[Ht],Zt=null;if(d!==null)Zt=d.getViewport(Lt);else{let st=p.getViewSubImage(h,Lt);Zt=st.viewport,Ht===0&&(t.setRenderTargetTextures(_,st.colorTexture,h.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(_))}let T=E[Ht];T===void 0&&(T=new Rn,T.layers.enable(Ht),T.viewport=new Ke,E[Ht]=T),T.matrix.fromArray(Lt.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(Lt.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Ht===0&&(S.matrix.copy(T.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),gt===!0&&S.cameras.push(T)}let Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){let Ht=p.getDepthInformation(Et[0]);Ht&&Ht.isValid&&Ht.texture&&y.init(t,Ht,s.renderState)}}for(let Et=0;Et<g.length;Et++){let gt=x[Et],Ut=g[Et];gt!==null&&Ut!==void 0&&Ut.update(gt,it,c||r)}St&&St(W,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),v=null}let $t=new eb;$t.setAnimationLoop(Vt),this.setAnimationLoop=function(W){St=W},this.dispose=function(){}}},$a=new Ki,ZD=new Re;function KD(e,t){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,tb(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,_,g,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),p(m,f)):f.isMeshPhongMaterial?(a(m,f),u(m,f)):f.isMeshStandardMaterial?(a(m,f),h(m,f),f.isMeshPhysicalMaterial&&d(m,f,x)):f.isMeshMatcapMaterial?(a(m,f),v(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),y(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,_,g):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Hn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Hn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _=t.get(f),g=_.envMap,x=_.envMapRotation;g&&(m.envMap.value=g,$a.copy(x),$a.x*=-1,$a.y*=-1,$a.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&($a.y*=-1,$a.z*=-1),m.envMapRotation.value.setFromMatrix4(ZD.makeRotationFromEuler($a)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=g*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Hn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let _=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function JD(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){let x=g.program;i.uniformBlockBinding(_,x)}function c(_,g){let x=s[_.id];x===void 0&&(v(_),x=u(_),s[_.id]=x,_.addEventListener("dispose",m));let D=g.program;i.updateUBOMapping(_,D);let C=t.render.frame;a[_.id]!==C&&(h(_),a[_.id]=C)}function u(_){let g=p();_.__bindingPointIndex=g;let x=e.createBuffer(),D=_.__size,C=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,D,C),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,g,x),x}function p(){for(let _=0;_<o;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let g=s[_.id],x=_.uniforms,D=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,g);for(let C=0,A=x.length;C<A;C++){let U=Array.isArray(x[C])?x[C]:[x[C]];for(let E=0,S=U.length;E<S;E++){let R=U[E];if(d(R,C,E,D)===!0){let q=R.__offset,H=Array.isArray(R.value)?R.value:[R.value],k=0;for(let Z=0;Z<H.length;Z++){let G=H[Z],tt=y(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,e.bufferSubData(e.UNIFORM_BUFFER,q+k,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,k),k+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,q,R.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(_,g,x,D){let C=_.value,A=g+"_"+x;if(D[A]===void 0)return typeof C=="number"||typeof C=="boolean"?D[A]=C:D[A]=C.clone(),!0;{let U=D[A];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return D[A]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function v(_){let g=_.uniforms,x=0,D=16;for(let A=0,U=g.length;A<U;A++){let E=Array.isArray(g[A])?g[A]:[g[A]];for(let S=0,R=E.length;S<R;S++){let q=E[S],H=Array.isArray(q.value)?q.value:[q.value];for(let k=0,Z=H.length;k<Z;k++){let G=H[k],tt=y(G),X=x%D,dt=X%tt.boundary,_t=X+dt;x+=dt,_t!==0&&D-_t<tt.storage&&(x+=D-_t),q.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=x,x+=tt.storage}}}let C=x%D;return C>0&&(x+=D-C),_.__size=x,_.__cache={},this}function y(_){let g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){let g=_.target;g.removeEventListener("dispose",m);let x=r.indexOf(g.__bindingPointIndex);r.splice(x,1),e.deleteBuffer(s[g.id]),delete s[g.id],delete a[g.id]}function f(){for(let _ in s)e.deleteBuffer(s[_]);r=[],s={},a={}}return{bind:l,update:c,dispose:f}}var Tf=class{constructor(t={}){let{canvas:n=nR(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1}=t;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=r;let d=new Uint32Array(4),v=new Int32Array(4),y=null,m=null,f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bn,this.toneMapping=ga,this.toneMappingExposure=1;let g=this,x=!1,D=0,C=0,A=null,U=-1,E=null,S=new Ke,R=new Ke,q=null,H=new Wt(0),k=0,Z=n.width,G=n.height,tt=1,X=null,dt=null,_t=new Ke(0,0,Z,G),St=new Ke(0,0,Z,G),Vt=!1,$t=new Tc,W=!1,it=!1,Et=new Re,gt=new N,Ut=new Ke,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Lt=!1;function Zt(){return A===null?tt:1}let T=i;function st(b,O){return n.getContext(b,O)}try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine","three.js r167"),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",Q,!1),n.addEventListener("webglcontextcreationerror",rt,!1),T===null){let O="webgl2";if(T=st(O,b),T===null)throw st(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let et,pt,K,Ct,ft,bt,w,M,z,j,$,F,Dt,mt,Mt,Pt,nt,ct,Ft,Nt,Tt,It,Gt,ye;function L(){et=new d3(T),et.init(),It=new XD(T,et),pt=new o3(T,et,t,It),K=new VD(T),Ct=new g3(T),ft=new CD,bt=new kD(T,et,K,ft,pt,It,Ct),w=new c3(g),M=new f3(g),z=new bR(T),Gt=new a3(T,z),j=new p3(T,z,Ct,Gt),$=new _3(T,j,z,Ct),Ft=new v3(T,pt,bt),Pt=new l3(ft),F=new RD(g,w,M,et,pt,Gt,Pt),Dt=new KD(g,ft),mt=new UD,Mt=new PD(et),ct=new s3(g,w,M,K,$,h,l),nt=new HD(g,$,pt),ye=new JD(T,Ct,pt,K),Nt=new r3(T,et,Ct),Tt=new m3(T,et,Ct),Ct.programs=F.programs,g.capabilities=pt,g.extensions=et,g.properties=ft,g.renderLists=mt,g.shadowMap=nt,g.state=K,g.info=Ct}L();let at=new S0(g,T);this.xr=at,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let b=et.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=et.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(b){b!==void 0&&(tt=b,this.setSize(Z,G,!1))},this.getSize=function(b){return b.set(Z,G)},this.setSize=function(b,O,B=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,G=O,n.width=Math.floor(b*tt),n.height=Math.floor(O*tt),B===!0&&(n.style.width=b+"px",n.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(Z*tt,G*tt).floor()},this.setDrawingBufferSize=function(b,O,B){Z=b,G=O,tt=B,n.width=Math.floor(b*B),n.height=Math.floor(O*B),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(S)},this.getViewport=function(b){return b.copy(_t)},this.setViewport=function(b,O,B,P){b.isVector4?_t.set(b.x,b.y,b.z,b.w):_t.set(b,O,B,P),K.viewport(S.copy(_t).multiplyScalar(tt).round())},this.getScissor=function(b){return b.copy(St)},this.setScissor=function(b,O,B,P){b.isVector4?St.set(b.x,b.y,b.z,b.w):St.set(b,O,B,P),K.scissor(R.copy(St).multiplyScalar(tt).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(b){K.setScissorTest(Vt=b)},this.setOpaqueSort=function(b){X=b},this.setTransparentSort=function(b){dt=b},this.getClearColor=function(b){return b.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(b=!0,O=!0,B=!0){let P=0;if(b){let I=!1;if(A!==null){let ot=A.texture.format;I=ot===J0||ot===K0||ot===Z0}if(I){let ot=A.texture.type,yt=ot===ws||ot===ir||ot===Sc||ot===Xo||ot===W0||ot===Y0,At=ct.getClearColor(),wt=ct.getClearAlpha(),V=At.r,lt=At.g,ht=At.b;yt?(d[0]=V,d[1]=lt,d[2]=ht,d[3]=wt,T.clearBufferuiv(T.COLOR,0,d)):(v[0]=V,v[1]=lt,v[2]=ht,v[3]=wt,T.clearBufferiv(T.COLOR,0,v))}else P|=T.COLOR_BUFFER_BIT}O&&(P|=T.DEPTH_BUFFER_BIT),B&&(P|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",Q,!1),n.removeEventListener("webglcontextcreationerror",rt,!1),mt.dispose(),Mt.dispose(),ft.dispose(),w.dispose(),M.dispose(),$.dispose(),Gt.dispose(),ye.dispose(),F.dispose(),at.dispose(),at.removeEventListener("sessionstart",pn),at.removeEventListener("sessionend",fr),Qi.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let b=Ct.autoReset,O=nt.enabled,B=nt.autoUpdate,P=nt.needsUpdate,I=nt.type;L(),Ct.autoReset=b,nt.enabled=O,nt.autoUpdate=B,nt.needsUpdate=P,nt.type=I}function rt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ot(b){let O=b.target;O.removeEventListener("dispose",Ot),te(O)}function te(b){Ce(b),ft.remove(b)}function Ce(b){let O=ft.get(b).programs;O!==void 0&&(O.forEach(function(B){F.releaseProgram(B)}),b.isShaderMaterial&&F.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,B,P,I,ot){O===null&&(O=Ht);let yt=I.isMesh&&I.matrixWorld.determinant()<0,At=sl(b,O,B,P,I);K.setMaterial(P,yt);let wt=B.index,V=1;if(P.wireframe===!0){if(wt=j.getWireframeAttribute(B),wt===void 0)return;V=2}let lt=B.drawRange,ht=B.attributes.position,Rt=lt.start*V,Kt=(lt.start+lt.count)*V;ot!==null&&(Rt=Math.max(Rt,ot.start*V),Kt=Math.min(Kt,(ot.start+ot.count)*V)),wt!==null?(Rt=Math.max(Rt,0),Kt=Math.min(Kt,wt.count)):ht!=null&&(Rt=Math.max(Rt,0),Kt=Math.min(Kt,ht.count));let ne=Kt-Rt;if(ne<0||ne===1/0)return;Gt.setup(I,P,At,B,wt);let De,Jt=Nt;if(wt!==null&&(De=z.get(wt),Jt=Tt,Jt.setIndex(De)),I.isMesh)P.wireframe===!0?(K.setLineWidth(P.wireframeLinewidth*Zt()),Jt.setMode(T.LINES)):Jt.setMode(T.TRIANGLES);else if(I.isLine){let xt=P.linewidth;xt===void 0&&(xt=1),K.setLineWidth(xt*Zt()),I.isLineSegments?Jt.setMode(T.LINES):I.isLineLoop?Jt.setMode(T.LINE_LOOP):Jt.setMode(T.LINE_STRIP)}else I.isPoints?Jt.setMode(T.POINTS):I.isSprite&&Jt.setMode(T.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Jt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))Jt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let xt=I._multiDrawStarts,Le=I._multiDrawCounts,ie=I._multiDrawCount,Sn=wt?z.get(wt).bytesPerElement:1,Ds=ft.get(P).currentProgram.getUniforms();for(let ze=0;ze<ie;ze++)Ds.setValue(T,"_gl_DrawID",ze),Jt.render(xt[ze]/Sn,Le[ze])}else if(I.isInstancedMesh)Jt.renderInstances(Rt,ne,I.count);else if(B.isInstancedBufferGeometry){let xt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Le=Math.min(B.instanceCount,xt);Jt.renderInstances(Rt,ne,Le)}else Jt.render(Rt,ne)};function Be(b,O,B){b.transparent===!0&&b.side===vi&&b.forceSinglePass===!1?(b.side=Hn,b.needsUpdate=!0,kn(b,O,B),b.side=_a,b.needsUpdate=!0,kn(b,O,B),b.side=vi):kn(b,O,B)}this.compile=function(b,O,B=null){B===null&&(B=b),m=Mt.get(B),m.init(O),_.push(m),B.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),b!==B&&b.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),m.setupLights();let P=new Set;return b.traverse(function(I){let ot=I.material;if(ot)if(Array.isArray(ot))for(let yt=0;yt<ot.length;yt++){let At=ot[yt];Be(At,B,I),P.add(At)}else Be(ot,B,I),P.add(ot)}),_.pop(),m=null,P},this.compileAsync=function(b,O,B=null){let P=this.compile(b,O,B);return new Promise(I=>{function ot(){if(P.forEach(function(yt){ft.get(yt).currentProgram.isReady()&&P.delete(yt)}),P.size===0){I(b);return}setTimeout(ot,10)}et.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let ae=null;function ai(b){ae&&ae(b)}function pn(){Qi.stop()}function fr(){Qi.start()}let Qi=new eb;Qi.setAnimationLoop(ai),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(b){ae=b,at.setAnimationLoop(b),b===null?Qi.stop():Qi.start()},at.addEventListener("sessionstart",pn),at.addEventListener("sessionend",fr),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(O),O=at.getCamera()),b.isScene===!0&&b.onBeforeRender(g,b,O,A),m=Mt.get(b,_.length),m.init(O),_.push(m),Et.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$t.setFromProjectionMatrix(Et),it=this.localClippingEnabled,W=Pt.init(this.clippingPlanes,it),y=mt.get(b,f.length),y.init(),f.push(y),at.enabled===!0&&at.isPresenting===!0){let ot=g.xr.getDepthSensingMesh();ot!==null&&xi(ot,O,-1/0,g.sortObjects)}xi(b,O,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(X,dt),Lt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Lt&&ct.addToRenderList(y,b),this.info.render.frame++,W===!0&&Pt.beginShadows();let B=m.state.shadowsArray;nt.render(B,b,O),W===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset();let P=y.opaque,I=y.transmissive;if(m.setupLights(),O.isArrayCamera){let ot=O.cameras;if(I.length>0)for(let yt=0,At=ot.length;yt<At;yt++){let wt=ot[yt];el(P,I,b,wt)}Lt&&ct.render(b);for(let yt=0,At=ot.length;yt<At;yt++){let wt=ot[yt];Gc(y,b,wt,wt.viewport)}}else I.length>0&&el(P,I,b,O),Lt&&ct.render(b),Gc(y,b,O);A!==null&&(bt.updateMultisampleRenderTarget(A),bt.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(g,b,O),Gt.resetDefaultState(),U=-1,E=null,_.pop(),_.length>0?(m=_[_.length-1],W===!0&&Pt.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function xi(b,O,B,P){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$t.intersectsSprite(b)){P&&Ut.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Et);let yt=$.update(b),At=b.material;At.visible&&y.push(b,yt,At,B,Ut.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$t.intersectsObject(b))){let yt=$.update(b),At=b.material;if(P&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ut.copy(b.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ut.copy(yt.boundingSphere.center)),Ut.applyMatrix4(b.matrixWorld).applyMatrix4(Et)),Array.isArray(At)){let wt=yt.groups;for(let V=0,lt=wt.length;V<lt;V++){let ht=wt[V],Rt=At[ht.materialIndex];Rt&&Rt.visible&&y.push(b,yt,Rt,B,Ut.z,ht)}}else At.visible&&y.push(b,yt,At,B,Ut.z,null)}}let ot=b.children;for(let yt=0,At=ot.length;yt<At;yt++)xi(ot[yt],O,B,P)}function Gc(b,O,B,P){let I=b.opaque,ot=b.transmissive,yt=b.transparent;m.setupLightsView(B),W===!0&&Pt.setGlobalState(g.clippingPlanes,B),P&&K.viewport(S.copy(P)),I.length>0&&dr(I,O,B),ot.length>0&&dr(ot,O,B),yt.length>0&&dr(yt,O,B),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function el(b,O,B,P){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[P.id]===void 0&&(m.state.transmissionRenderTarget[P.id]=new Rs(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?zc:ws,minFilter:Ms,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));let ot=m.state.transmissionRenderTarget[P.id],yt=P.viewport||S;ot.setSize(yt.z,yt.w);let At=g.getRenderTarget();g.setRenderTarget(ot),g.getClearColor(H),k=g.getClearAlpha(),k<1&&g.setClearColor(16777215,.5),g.clear(),Lt&&ct.render(B);let wt=g.toneMapping;g.toneMapping=ga;let V=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),m.setupLightsView(P),W===!0&&Pt.setGlobalState(g.clippingPlanes,P),dr(b,B,P),bt.updateMultisampleRenderTarget(ot),bt.updateRenderTargetMipmap(ot),et.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let ht=0,Rt=O.length;ht<Rt;ht++){let Kt=O[ht],ne=Kt.object,De=Kt.geometry,Jt=Kt.material,xt=Kt.group;if(Jt.side===vi&&ne.layers.test(P.layers)){let Le=Jt.side;Jt.side=Hn,Jt.needsUpdate=!0,nl(ne,B,P,De,Jt,xt),Jt.side=Le,Jt.needsUpdate=!0,lt=!0}}lt===!0&&(bt.updateMultisampleRenderTarget(ot),bt.updateRenderTargetMipmap(ot))}g.setRenderTarget(At),g.setClearColor(H,k),V!==void 0&&(P.viewport=V),g.toneMapping=wt}function dr(b,O,B){let P=O.isScene===!0?O.overrideMaterial:null;for(let I=0,ot=b.length;I<ot;I++){let yt=b[I],At=yt.object,wt=yt.geometry,V=P===null?yt.material:P,lt=yt.group;At.layers.test(B.layers)&&nl(At,O,B,wt,V,lt)}}function nl(b,O,B,P,I,ot){b.onBeforeRender(g,O,B,P,I,ot),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),I.transparent===!0&&I.side===vi&&I.forceSinglePass===!1?(I.side=Hn,I.needsUpdate=!0,g.renderBufferDirect(B,O,P,I,b,ot),I.side=_a,I.needsUpdate=!0,g.renderBufferDirect(B,O,P,I,b,ot),I.side=vi):g.renderBufferDirect(B,O,P,I,b,ot),b.onAfterRender(g,O,B,P,I,ot)}function kn(b,O,B){O.isScene!==!0&&(O=Ht);let P=ft.get(b),I=m.state.lights,ot=m.state.shadowsArray,yt=I.state.version,At=F.getParameters(b,I.state,ot,O,B),wt=F.getProgramCacheKey(At),V=P.programs;P.environment=b.isMeshStandardMaterial?O.environment:null,P.fog=O.fog,P.envMap=(b.isMeshStandardMaterial?M:w).get(b.envMap||P.environment),P.envMapRotation=P.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,V===void 0&&(b.addEventListener("dispose",Ot),V=new Map,P.programs=V);let lt=V.get(wt);if(lt!==void 0){if(P.currentProgram===lt&&P.lightsStateVersion===yt)return il(b,At),lt}else At.uniforms=F.getUniforms(b),b.onBeforeCompile(At,g),lt=F.acquireProgram(At,wt),V.set(wt,lt),P.uniforms=At.uniforms;let ht=P.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ht.clippingPlanes=Pt.uniform),il(b,At),P.needsLights=rl(b),P.lightsStateVersion=yt,P.needsLights&&(ht.ambientLightColor.value=I.state.ambient,ht.lightProbe.value=I.state.probe,ht.directionalLights.value=I.state.directional,ht.directionalLightShadows.value=I.state.directionalShadow,ht.spotLights.value=I.state.spot,ht.spotLightShadows.value=I.state.spotShadow,ht.rectAreaLights.value=I.state.rectArea,ht.ltc_1.value=I.state.rectAreaLTC1,ht.ltc_2.value=I.state.rectAreaLTC2,ht.pointLights.value=I.state.point,ht.pointLightShadows.value=I.state.pointShadow,ht.hemisphereLights.value=I.state.hemi,ht.directionalShadowMap.value=I.state.directionalShadowMap,ht.directionalShadowMatrix.value=I.state.directionalShadowMatrix,ht.spotShadowMap.value=I.state.spotShadowMap,ht.spotLightMatrix.value=I.state.spotLightMatrix,ht.spotLightMap.value=I.state.spotLightMap,ht.pointShadowMap.value=I.state.pointShadowMap,ht.pointShadowMatrix.value=I.state.pointShadowMatrix),P.currentProgram=lt,P.uniformsList=null,lt}function pr(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=Vo.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function il(b,O){let B=ft.get(b);B.outputColorSpace=O.outputColorSpace,B.batching=O.batching,B.batchingColor=O.batchingColor,B.instancing=O.instancing,B.instancingColor=O.instancingColor,B.instancingMorph=O.instancingMorph,B.skinning=O.skinning,B.morphTargets=O.morphTargets,B.morphNormals=O.morphNormals,B.morphColors=O.morphColors,B.morphTargetsCount=O.morphTargetsCount,B.numClippingPlanes=O.numClippingPlanes,B.numIntersection=O.numClipIntersection,B.vertexAlphas=O.vertexAlphas,B.vertexTangents=O.vertexTangents,B.toneMapping=O.toneMapping}function sl(b,O,B,P,I){O.isScene!==!0&&(O=Ht),bt.resetTextureUnits();let ot=O.fog,yt=P.isMeshStandardMaterial?O.environment:null,At=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:xa,wt=(P.isMeshStandardMaterial?M:w).get(P.envMap||yt),V=P.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,lt=!!B.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),ht=!!B.morphAttributes.position,Rt=!!B.morphAttributes.normal,Kt=!!B.morphAttributes.color,ne=ga;P.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ne=g.toneMapping);let De=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Jt=De!==void 0?De.length:0,xt=ft.get(P),Le=m.state.lights;if(W===!0&&(it===!0||b!==E)){let Fe=b===E&&P.id===U;Pt.setState(P,b,Fe)}let ie=!1;P.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==Le.state.version||xt.outputColorSpace!==At||I.isBatchedMesh&&xt.batching===!1||!I.isBatchedMesh&&xt.batching===!0||I.isBatchedMesh&&xt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&xt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&xt.instancing===!1||!I.isInstancedMesh&&xt.instancing===!0||I.isSkinnedMesh&&xt.skinning===!1||!I.isSkinnedMesh&&xt.skinning===!0||I.isInstancedMesh&&xt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&xt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&xt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&xt.instancingMorph===!1&&I.morphTexture!==null||xt.envMap!==wt||P.fog===!0&&xt.fog!==ot||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==Pt.numPlanes||xt.numIntersection!==Pt.numIntersection)||xt.vertexAlphas!==V||xt.vertexTangents!==lt||xt.morphTargets!==ht||xt.morphNormals!==Rt||xt.morphColors!==Kt||xt.toneMapping!==ne||xt.morphTargetsCount!==Jt)&&(ie=!0):(ie=!0,xt.__version=P.version);let Sn=xt.currentProgram;ie===!0&&(Sn=kn(P,O,I));let Ds=!1,ze=!1,mr=!1,se=Sn.getUniforms(),sn=xt.uniforms;if(K.useProgram(Sn.program)&&(Ds=!0,ze=!0,mr=!0),P.id!==U&&(U=P.id,ze=!0),Ds||E!==b){se.setValue(T,"projectionMatrix",b.projectionMatrix),se.setValue(T,"viewMatrix",b.matrixWorldInverse);let Fe=se.map.cameraPosition;Fe!==void 0&&Fe.setValue(T,gt.setFromMatrixPosition(b.matrixWorld)),pt.logarithmicDepthBuffer&&se.setValue(T,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&se.setValue(T,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,ze=!0,mr=!0)}if(I.isSkinnedMesh){se.setOptional(T,I,"bindMatrix"),se.setOptional(T,I,"bindMatrixInverse");let Fe=I.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),se.setValue(T,"boneTexture",Fe.boneTexture,bt))}I.isBatchedMesh&&(se.setOptional(T,I,"batchingTexture"),se.setValue(T,"batchingTexture",I._matricesTexture,bt),se.setOptional(T,I,"batchingIdTexture"),se.setValue(T,"batchingIdTexture",I._indirectTexture,bt),se.setOptional(T,I,"batchingColorTexture"),I._colorsTexture!==null&&se.setValue(T,"batchingColorTexture",I._colorsTexture,bt));let ge=B.morphAttributes;if((ge.position!==void 0||ge.normal!==void 0||ge.color!==void 0)&&Ft.update(I,B,Sn),(ze||xt.receiveShadow!==I.receiveShadow)&&(xt.receiveShadow=I.receiveShadow,se.setValue(T,"receiveShadow",I.receiveShadow)),P.isMeshGouraudMaterial&&P.envMap!==null&&(sn.envMap.value=wt,sn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),P.isMeshStandardMaterial&&P.envMap===null&&O.environment!==null&&(sn.envMapIntensity.value=O.environmentIntensity),ze&&(se.setValue(T,"toneMappingExposure",g.toneMappingExposure),xt.needsLights&&al(sn,mr),ot&&P.fog===!0&&Dt.refreshFogUniforms(sn,ot),Dt.refreshMaterialUniforms(sn,P,tt,G,m.state.transmissionRenderTarget[b.id]),Vo.upload(T,pr(xt),sn,bt)),P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(Vo.upload(T,pr(xt),sn,bt),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&se.setValue(T,"center",I.center),se.setValue(T,"modelViewMatrix",I.modelViewMatrix),se.setValue(T,"normalMatrix",I.normalMatrix),se.setValue(T,"modelMatrix",I.matrixWorld),P.isShaderMaterial||P.isRawShaderMaterial){let Fe=P.uniformsGroups;for(let gr=0,ol=Fe.length;gr<ol;gr++){let kc=Fe[gr];ye.update(kc,Sn),ye.bind(kc,Sn)}}return Sn}function al(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function rl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,O,B){ft.get(b.texture).__webglTexture=O,ft.get(b.depthTexture).__webglTexture=B;let P=ft.get(b);P.__hasExternalTextures=!0,P.__autoAllocateDepthBuffer=B===void 0,P.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),P.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){let B=ft.get(b);B.__webglFramebuffer=O,B.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,B=0){A=b,D=O,C=B;let P=!0,I=null,ot=!1,yt=!1;if(b){let wt=ft.get(b);wt.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(T.FRAMEBUFFER,null),P=!1):wt.__webglFramebuffer===void 0?bt.setupRenderTarget(b):wt.__hasExternalTextures&&bt.rebindTextures(b,ft.get(b.texture).__webglTexture,ft.get(b.depthTexture).__webglTexture);let V=b.texture;(V.isData3DTexture||V.isDataArrayTexture||V.isCompressedArrayTexture)&&(yt=!0);let lt=ft.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(lt[O])?I=lt[O][B]:I=lt[O],ot=!0):b.samples>0&&bt.useMultisampledRTT(b)===!1?I=ft.get(b).__webglMultisampledFramebuffer:Array.isArray(lt)?I=lt[B]:I=lt,S.copy(b.viewport),R.copy(b.scissor),q=b.scissorTest}else S.copy(_t).multiplyScalar(tt).floor(),R.copy(St).multiplyScalar(tt).floor(),q=Vt;if(K.bindFramebuffer(T.FRAMEBUFFER,I)&&P&&K.drawBuffers(b,I),K.viewport(S),K.scissor(R),K.setScissorTest(q),ot){let wt=ft.get(b.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+O,wt.__webglTexture,B)}else if(yt){let wt=ft.get(b.texture),V=O||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,wt.__webglTexture,B||0,V)}U=-1},this.readRenderTargetPixels=function(b,O,B,P,I,ot,yt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=ft.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&yt!==void 0&&(At=At[yt]),At){K.bindFramebuffer(T.FRAMEBUFFER,At);try{let wt=b.texture,V=wt.format,lt=wt.type;if(!pt.textureFormatReadable(V)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-P&&B>=0&&B<=b.height-I&&T.readPixels(O,B,P,I,It.convert(V),It.convert(lt),ot)}finally{let wt=A!==null?ft.get(A).__webglFramebuffer:null;K.bindFramebuffer(T.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(b,O,B,P,I,ot,yt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=ft.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&yt!==void 0&&(At=At[yt]),At){K.bindFramebuffer(T.FRAMEBUFFER,At);try{let wt=b.texture,V=wt.format,lt=wt.type;if(!pt.textureFormatReadable(V))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-P&&B>=0&&B<=b.height-I){let ht=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,ht),T.bufferData(T.PIXEL_PACK_BUFFER,ot.byteLength,T.STREAM_READ),T.readPixels(O,B,P,I,It.convert(V),It.convert(lt),0),T.flush();let Rt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);await iR(T,Rt,4);try{T.bindBuffer(T.PIXEL_PACK_BUFFER,ht),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ot)}finally{T.deleteBuffer(ht),T.deleteSync(Rt)}return ot}}finally{let wt=A!==null?ft.get(A).__webglFramebuffer:null;K.bindFramebuffer(T.FRAMEBUFFER,wt)}}},this.copyFramebufferToTexture=function(b,O=null,B=0){b.isTexture!==!0&&(vc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);let P=Math.pow(2,-B),I=Math.floor(b.image.width*P),ot=Math.floor(b.image.height*P),yt=O!==null?O.x:0,At=O!==null?O.y:0;bt.setTexture2D(b,0),T.copyTexSubImage2D(T.TEXTURE_2D,B,0,0,yt,At,I,ot),K.unbindTexture()},this.copyTextureToTexture=function(b,O,B=null,P=null,I=0){b.isTexture!==!0&&(vc("WebGLRenderer: copyTextureToTexture function signature has changed."),P=arguments[0]||null,b=arguments[1],O=arguments[2],I=arguments[3]||0,B=null);let ot,yt,At,wt,V,lt;B!==null?(ot=B.max.x-B.min.x,yt=B.max.y-B.min.y,At=B.min.x,wt=B.min.y):(ot=b.image.width,yt=b.image.height,At=0,wt=0),P!==null?(V=P.x,lt=P.y):(V=0,lt=0);let ht=It.convert(O.format),Rt=It.convert(O.type);bt.setTexture2D(O,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,O.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,O.unpackAlignment);let Kt=T.getParameter(T.UNPACK_ROW_LENGTH),ne=T.getParameter(T.UNPACK_IMAGE_HEIGHT),De=T.getParameter(T.UNPACK_SKIP_PIXELS),Jt=T.getParameter(T.UNPACK_SKIP_ROWS),xt=T.getParameter(T.UNPACK_SKIP_IMAGES),Le=b.isCompressedTexture?b.mipmaps[I]:b.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,Le.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Le.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,At),T.pixelStorei(T.UNPACK_SKIP_ROWS,wt),b.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,I,V,lt,ot,yt,ht,Rt,Le.data):b.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,I,V,lt,Le.width,Le.height,ht,Le.data):T.texSubImage2D(T.TEXTURE_2D,I,V,lt,ot,yt,ht,Rt,Le),T.pixelStorei(T.UNPACK_ROW_LENGTH,Kt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ne),T.pixelStorei(T.UNPACK_SKIP_PIXELS,De),T.pixelStorei(T.UNPACK_SKIP_ROWS,Jt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,xt),I===0&&O.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(b,O,B=null,P=null,I=0){b.isTexture!==!0&&(vc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,P=arguments[1]||null,b=arguments[2],O=arguments[3],I=arguments[4]||0);let ot,yt,At,wt,V,lt,ht,Rt,Kt,ne=b.isCompressedTexture?b.mipmaps[I]:b.image;B!==null?(ot=B.max.x-B.min.x,yt=B.max.y-B.min.y,At=B.max.z-B.min.z,wt=B.min.x,V=B.min.y,lt=B.min.z):(ot=ne.width,yt=ne.height,At=ne.depth,wt=0,V=0,lt=0),P!==null?(ht=P.x,Rt=P.y,Kt=P.z):(ht=0,Rt=0,Kt=0);let De=It.convert(O.format),Jt=It.convert(O.type),xt;if(O.isData3DTexture)bt.setTexture3D(O,0),xt=T.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)bt.setTexture2DArray(O,0),xt=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,O.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,O.unpackAlignment);let Le=T.getParameter(T.UNPACK_ROW_LENGTH),ie=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Sn=T.getParameter(T.UNPACK_SKIP_PIXELS),Ds=T.getParameter(T.UNPACK_SKIP_ROWS),ze=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ne.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ne.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,wt),T.pixelStorei(T.UNPACK_SKIP_ROWS,V),T.pixelStorei(T.UNPACK_SKIP_IMAGES,lt),b.isDataTexture||b.isData3DTexture?T.texSubImage3D(xt,I,ht,Rt,Kt,ot,yt,At,De,Jt,ne.data):O.isCompressedArrayTexture?T.compressedTexSubImage3D(xt,I,ht,Rt,Kt,ot,yt,At,De,ne.data):T.texSubImage3D(xt,I,ht,Rt,Kt,ot,yt,At,De,Jt,ne),T.pixelStorei(T.UNPACK_ROW_LENGTH,Le),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ie),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Sn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ds),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ze),I===0&&O.generateMipmaps&&T.generateMipmap(xt),K.unbindTexture()},this.initRenderTarget=function(b){ft.get(b).__webglFramebuffer===void 0&&bt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?bt.setTextureCube(b,0):b.isData3DTexture?bt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?bt.setTexture2DArray(b,0):bt.setTexture2D(b,0),K.unbindTexture()},this.resetState=function(){D=0,C=0,A=null,K.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Es}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=t===Q0?"display-p3":"srgb",n.unpackColorSpace=ue.workingColorSpace===If?"display-p3":"srgb"}};var Ac=class extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var Af=class extends Vn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=Fn,u=Fn,p,h){super(null,r,o,l,c,u,s,a,p,h),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jo=class extends Vn{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},yi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),a=0;n.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),a+=i.distanceTo(s),n.push(a),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n){let i=this.getLengths(),s=0,a=i.length,r;n?r=n:r=t*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(a-1);let u=i[s],h=i[s+1]-u,d=(r-u)/h;return(s+d)/(a-1)}getTangent(t,n){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);let r=this.getPoint(s),o=this.getPoint(a),l=n||(r.isVector2?new ut:new N);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n){let i=new N,s=[],a=[],r=[],o=new N,l=new Re;for(let d=0;d<=t;d++){let v=d/t;s[d]=this.getTangentAt(v,new N)}a[0]=new N,r[0]=new N;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),p=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let d=1;d<=t;d++){if(a[d]=a[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(fn(s[d-1].dot(s[d]),-1,1));a[d].applyMatrix4(l.makeRotationAxis(o,v))}r[d].crossVectors(s[d],a[d])}if(n===!0){let d=Math.acos(fn(a[0].dot(a[t]),-1,1));d/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(d=-d);for(let v=1;v<=t;v++)a[v].applyMatrix4(l.makeRotationAxis(s[v],d*v)),r[v].crossVectors(s[v],a[v])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},wc=class extends yi{constructor(t=0,n=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,n=new ut){let i=n,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+t*a,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*p+this.aX,c=h*p+d*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},M0=class extends wc{constructor(t,n,i,s,a,r){super(t,n,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}};function $0(){let e=0,t=0,n=0,i=0;function s(a,r,o,l){e=a,t=o,n=-3*a+3*r-2*o-l,i=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,u,p){let h=(r-a)/c-(o-a)/(c+u)+(o-r)/u,d=(o-r)/u-(l-r)/(u+p)+(l-o)/p;h*=u,d*=u,s(r,o,h,d)},calc:function(a){let r=a*a,o=r*a;return e+t*a+n*r+i*o}}}var $h=new N,bg=new $0,Eg=new $0,Tg=new $0,Rc=class extends yi{constructor(t=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=s}getPoint(t,n=new N){let i=n,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%a]:($h.subVectors(s[0],s[1]).add(s[0]),c=$h);let p=s[o%a],h=s[(o+1)%a];if(this.closed||o+2<a?u=s[(o+2)%a]:($h.subVectors(s[a-1],s[a-2]).add(s[a-1]),u=$h),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,v=Math.pow(c.distanceToSquared(p),d),y=Math.pow(p.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);y<1e-4&&(y=1),v<1e-4&&(v=y),m<1e-4&&(m=y),bg.initNonuniformCatmullRom(c.x,p.x,h.x,u.x,v,y,m),Eg.initNonuniformCatmullRom(c.y,p.y,h.y,u.y,v,y,m),Tg.initNonuniformCatmullRom(c.z,p.z,h.z,u.z,v,y,m)}else this.curveType==="catmullrom"&&(bg.initCatmullRom(c.x,p.x,h.x,u.x,this.tension),Eg.initCatmullRom(c.y,p.y,h.y,u.y,this.tension),Tg.initCatmullRom(c.z,p.z,h.z,u.z,this.tension));return i.set(bg.calc(l),Eg.calc(l),Tg.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function C1(e,t,n,i,s){let a=(i-t)*.5,r=(s-n)*.5,o=e*e,l=e*o;return(2*n-2*i+a+r)*l+(-3*n+3*i-2*a-r)*o+a*e+n}function QD(e,t){let n=1-e;return n*n*t}function jD(e,t){return 2*(1-e)*e*t}function $D(e,t){return e*e*t}function yc(e,t,n,i){return QD(e,t)+jD(e,n)+$D(e,i)}function tU(e,t){let n=1-e;return n*n*n*t}function eU(e,t){let n=1-e;return 3*n*n*e*t}function nU(e,t){return 3*(1-e)*e*e*t}function iU(e,t){return e*e*e*t}function xc(e,t,n,i,s){return tU(e,t)+eU(e,n)+nU(e,i)+iU(e,s)}var wf=class extends yi{constructor(t=new ut,n=new ut,i=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new ut){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(xc(t,s.x,a.x,r.x,o.x),xc(t,s.y,a.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},b0=class extends yi{constructor(t=new N,n=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new N){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(xc(t,s.x,a.x,r.x,o.x),xc(t,s.y,a.y,r.y,o.y),xc(t,s.z,a.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Rf=class extends yi{constructor(t=new ut,n=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new ut){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new ut){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},E0=class extends yi{constructor(t=new N,n=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new N){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new N){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cf=class extends yi{constructor(t=new ut,n=new ut,i=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new ut){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(yc(t,s.x,a.x,r.x),yc(t,s.y,a.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},T0=class extends yi{constructor(t=new N,n=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new N){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(yc(t,s.x,a.x,r.x),yc(t,s.y,a.y,r.y),yc(t,s.z,a.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Df=class extends yi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new ut){let i=n,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],u=s[r>s.length-2?s.length-1:r+1],p=s[r>s.length-3?s.length-1:r+2];return i.set(C1(o,l.x,c.x,u.x,p.x),C1(o,l.y,c.y,u.y,p.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new ut().fromArray(s))}return this}},A0=Object.freeze({__proto__:null,ArcCurve:M0,CatmullRomCurve3:Rc,CubicBezierCurve:wf,CubicBezierCurve3:b0,EllipseCurve:wc,LineCurve:Rf,LineCurve3:E0,QuadraticBezierCurve:Cf,QuadraticBezierCurve3:T0,SplineCurve:Df}),w0=class extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new A0[i](n,t))}return this}getPoint(t,n){let i=t*this.getLength(),s=this.getCurveLengths(),a=0;for(;a<s.length;){if(s[a]>=i){let r=s[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,n)}a++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){let n=[],i;for(let s=0,a=this.curves;s<a.length;s++){let r=a[s],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let s=t.curves[n];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let s=this.curves[n];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let s=t.curves[n];this.curves.push(new A0[s.type]().fromJSON(s))}return this}},Qo=class extends w0{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,i=t.length;n<i;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){let i=new Rf(this.currentPoint.clone(),new ut(t,n));return this.curves.push(i),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,i,s){let a=new Cf(this.currentPoint.clone(),new ut(t,n),new ut(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(t,n,i,s,a,r){let o=new wf(this.currentPoint.clone(),new ut(t,n),new ut(i,s),new ut(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){let n=[this.currentPoint.clone()].concat(t),i=new Df(n);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,i,s,a,r){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,n+l,i,s,a,r),this}absarc(t,n,i,s,a,r){return this.absellipse(t,n,i,i,s,a,r),this}ellipse(t,n,i,s,a,r,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,n+u,i,s,a,r,o,l),this}absellipse(t,n,i,s,a,r,o,l){let c=new wc(t,n,i,s,a,r,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var rr=class extends Qo{constructor(t){super(t),this.uuid=$o(),this.type="Shape",this.holes=[]}getPointsHoles(t){let n=[];for(let i=0,s=this.holes.length;i<s;i++)n[i]=this.holes[i].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let s=t.holes[n];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let s=this.holes[n];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let s=t.holes[n];this.holes.push(new Qo().fromJSON(s))}return this}},sU={triangulate:function(e,t,n=2){let i=t&&t.length,s=i?t[0]*n:e.length,a=rb(e,0,s,n,!0),r=[];if(!a||a.next===a.prev)return r;let o,l,c,u,p,h,d;if(i&&(a=cU(e,t,a,n)),e.length>80*n){o=c=e[0],l=u=e[1];for(let v=n;v<s;v+=n)p=e[v],h=e[v+1],p<o&&(o=p),h<l&&(l=h),p>c&&(c=p),h>u&&(u=h);d=Math.max(c-o,u-l),d=d!==0?32767/d:0}return Cc(a,r,n,o,l,d,0),r}};function rb(e,t,n,i,s){let a,r;if(s===xU(e,t,n,i)>0)for(a=t;a<n;a+=i)r=D1(a,e[a],e[a+1],r);else for(a=n-i;a>=t;a-=i)r=D1(a,e[a],e[a+1],r);return r&&Pf(r,r.next)&&(Uc(r),r=r.next),r}function or(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(Pf(n,n.next)||Ne(n.prev,n,n.next)===0)){if(Uc(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function Cc(e,t,n,i,s,a,r){if(!e)return;!r&&a&&pU(e,i,s,a);let o=e,l,c;for(;e.prev!==e.next;){if(l=e.prev,c=e.next,a?rU(e,i,s,a):aU(e)){t.push(l.i/n|0),t.push(e.i/n|0),t.push(c.i/n|0),Uc(e),e=c.next,o=c.next;continue}if(e=c,e===o){r?r===1?(e=oU(or(e),t,n),Cc(e,t,n,i,s,a,2)):r===2&&lU(e,t,n,i,s,a):Cc(or(e),t,n,i,s,a,1);break}}}function aU(e){let t=e.prev,n=e,i=e.next;if(Ne(t,n,i)>=0)return!1;let s=t.x,a=n.x,r=i.x,o=t.y,l=n.y,c=i.y,u=s<a?s<r?s:r:a<r?a:r,p=o<l?o<c?o:c:l<c?l:c,h=s>a?s>r?s:r:a>r?a:r,d=o>l?o>c?o:c:l>c?l:c,v=i.next;for(;v!==t;){if(v.x>=u&&v.x<=h&&v.y>=p&&v.y<=d&&Po(s,o,a,l,r,c,v.x,v.y)&&Ne(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function rU(e,t,n,i){let s=e.prev,a=e,r=e.next;if(Ne(s,a,r)>=0)return!1;let o=s.x,l=a.x,c=r.x,u=s.y,p=a.y,h=r.y,d=o<l?o<c?o:c:l<c?l:c,v=u<p?u<h?u:h:p<h?p:h,y=o>l?o>c?o:c:l>c?l:c,m=u>p?u>h?u:h:p>h?p:h,f=R0(d,v,t,n,i),_=R0(y,m,t,n,i),g=e.prevZ,x=e.nextZ;for(;g&&g.z>=f&&x&&x.z<=_;){if(g.x>=d&&g.x<=y&&g.y>=v&&g.y<=m&&g!==s&&g!==r&&Po(o,u,l,p,c,h,g.x,g.y)&&Ne(g.prev,g,g.next)>=0||(g=g.prevZ,x.x>=d&&x.x<=y&&x.y>=v&&x.y<=m&&x!==s&&x!==r&&Po(o,u,l,p,c,h,x.x,x.y)&&Ne(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;g&&g.z>=f;){if(g.x>=d&&g.x<=y&&g.y>=v&&g.y<=m&&g!==s&&g!==r&&Po(o,u,l,p,c,h,g.x,g.y)&&Ne(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;x&&x.z<=_;){if(x.x>=d&&x.x<=y&&x.y>=v&&x.y<=m&&x!==s&&x!==r&&Po(o,u,l,p,c,h,x.x,x.y)&&Ne(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function oU(e,t,n){let i=e;do{let s=i.prev,a=i.next.next;!Pf(s,a)&&ob(s,i,i.next,a)&&Dc(s,a)&&Dc(a,s)&&(t.push(s.i/n|0),t.push(i.i/n|0),t.push(a.i/n|0),Uc(i),Uc(i.next),i=e=a),i=i.next}while(i!==e);return or(i)}function lU(e,t,n,i,s,a){let r=e;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&vU(r,o)){let l=lb(r,o);r=or(r,r.next),l=or(l,l.next),Cc(r,t,n,i,s,a,0),Cc(l,t,n,i,s,a,0);return}o=o.next}r=r.next}while(r!==e)}function cU(e,t,n,i){let s=[],a,r,o,l,c;for(a=0,r=t.length;a<r;a++)o=t[a]*i,l=a<r-1?t[a+1]*i:e.length,c=rb(e,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(gU(c));for(s.sort(uU),a=0;a<s.length;a++)n=hU(s[a],n);return n}function uU(e,t){return e.x-t.x}function hU(e,t){let n=fU(e,t);if(!n)return t;let i=lb(n,e);return or(i,i.next),or(n,n.next)}function fU(e,t){let n=t,i=-1/0,s,a=e.x,r=e.y;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){let h=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=a&&h>i&&(i=h,s=n.x<n.next.x?n:n.next,h===a))return s}n=n.next}while(n!==t);if(!s)return null;let o=s,l=s.x,c=s.y,u=1/0,p;n=s;do a>=n.x&&n.x>=l&&a!==n.x&&Po(r<c?a:i,r,l,c,r<c?i:a,r,n.x,n.y)&&(p=Math.abs(r-n.y)/(a-n.x),Dc(n,e)&&(p<u||p===u&&(n.x>s.x||n.x===s.x&&dU(s,n)))&&(s=n,u=p)),n=n.next;while(n!==o);return s}function dU(e,t){return Ne(e.prev,e,t.prev)<0&&Ne(t.next,e,e.next)<0}function pU(e,t,n,i){let s=e;do s.z===0&&(s.z=R0(s.x,s.y,t,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==e);s.prevZ.nextZ=null,s.prevZ=null,mU(s)}function mU(e){let t,n,i,s,a,r,o,l,c=1;do{for(n=e,e=null,a=null,r=0;n;){for(r++,i=n,o=0,t=0;t<c&&(o++,i=i.nextZ,!!i);t++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||n.z<=i.z)?(s=n,n=n.nextZ,o--):(s=i,i=i.nextZ,l--),a?a.nextZ=s:e=s,s.prevZ=a,a=s;n=i}a.nextZ=null,c*=2}while(r>1);return e}function R0(e,t,n,i,s){return e=(e-n)*s|0,t=(t-i)*s|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function gU(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Po(e,t,n,i,s,a,r,o){return(s-r)*(t-o)>=(e-r)*(a-o)&&(e-r)*(i-o)>=(n-r)*(t-o)&&(n-r)*(a-o)>=(s-r)*(i-o)}function vU(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!_U(e,t)&&(Dc(e,t)&&Dc(t,e)&&yU(e,t)&&(Ne(e.prev,e,t.prev)||Ne(e,t.prev,t))||Pf(e,t)&&Ne(e.prev,e,e.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Pf(e,t){return e.x===t.x&&e.y===t.y}function ob(e,t,n,i){let s=ef(Ne(e,t,n)),a=ef(Ne(e,t,i)),r=ef(Ne(n,i,e)),o=ef(Ne(n,i,t));return!!(s!==a&&r!==o||s===0&&tf(e,n,t)||a===0&&tf(e,i,t)||r===0&&tf(n,e,i)||o===0&&tf(n,t,i))}function tf(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function ef(e){return e>0?1:e<0?-1:0}function _U(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&ob(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Dc(e,t){return Ne(e.prev,e,e.next)<0?Ne(e,t,e.next)>=0&&Ne(e,e.prev,t)>=0:Ne(e,t,e.prev)<0||Ne(e,e.next,t)<0}function yU(e,t){let n=e,i=!1,s=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&s<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function lb(e,t){let n=new C0(e.i,e.x,e.y),i=new C0(t.i,t.x,t.y),s=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=s,s.prev=n,i.next=n,n.prev=i,a.next=i,i.prev=a,i}function D1(e,t,n,i){let s=new C0(e,t,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Uc(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function C0(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xU(e,t,n,i){let s=0;for(let a=t,r=n-i;a<n;a+=i)s+=(e[r]-e[a])*(e[a+1]+e[r+1]),r=a;return s}var va=class e{static area(t){let n=t.length,i=0;for(let s=n-1,a=0;a<n;s=a++)i+=t[s].x*t[a].y-t[a].x*t[s].y;return i*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(t,n){let i=[],s=[],a=[];U1(t),N1(i,t);let r=t.length;n.forEach(U1);for(let l=0;l<n.length;l++)s.push(r),r+=n[l].length,N1(i,n[l]);let o=sU.triangulate(i,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function U1(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function N1(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Nc=class e extends _i{constructor(t=new rr([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];let i=this,s=[],a=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];r(c)}this.setAttribute("position",new dn(s,3)),this.setAttribute("uv",new dn(a,2)),this.computeVertexNormals();function r(o){let l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,p=n.depth!==void 0?n.depth:1,h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,d=n.bevelThickness!==void 0?n.bevelThickness:.2,v=n.bevelSize!==void 0?n.bevelSize:d-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3,f=n.extrudePath,_=n.UVGenerator!==void 0?n.UVGenerator:SU,g,x=!1,D,C,A,U;f&&(g=f.getSpacedPoints(u),x=!0,h=!1,D=f.computeFrenetFrames(u,!1),C=new N,A=new N,U=new N),h||(m=0,d=0,v=0,y=0);let E=o.extractPoints(c),S=E.shape,R=E.holes;if(!va.isClockWise(S)){S=S.reverse();for(let T=0,st=R.length;T<st;T++){let et=R[T];va.isClockWise(et)&&(R[T]=et.reverse())}}let H=va.triangulateShape(S,R),k=S;for(let T=0,st=R.length;T<st;T++){let et=R[T];S=S.concat(et)}function Z(T,st,et){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),T.clone().addScaledVector(st,et)}let G=S.length,tt=H.length;function X(T,st,et){let pt,K,Ct,ft=T.x-st.x,bt=T.y-st.y,w=et.x-T.x,M=et.y-T.y,z=ft*ft+bt*bt,j=ft*M-bt*w;if(Math.abs(j)>Number.EPSILON){let $=Math.sqrt(z),F=Math.sqrt(w*w+M*M),Dt=st.x-bt/$,mt=st.y+ft/$,Mt=et.x-M/F,Pt=et.y+w/F,nt=((Mt-Dt)*M-(Pt-mt)*w)/(ft*M-bt*w);pt=Dt+ft*nt-T.x,K=mt+bt*nt-T.y;let ct=pt*pt+K*K;if(ct<=2)return new ut(pt,K);Ct=Math.sqrt(ct/2)}else{let $=!1;ft>Number.EPSILON?w>Number.EPSILON&&($=!0):ft<-Number.EPSILON?w<-Number.EPSILON&&($=!0):Math.sign(bt)===Math.sign(M)&&($=!0),$?(pt=-bt,K=ft,Ct=Math.sqrt(z)):(pt=ft,K=bt,Ct=Math.sqrt(z/2))}return new ut(pt/Ct,K/Ct)}let dt=[];for(let T=0,st=k.length,et=st-1,pt=T+1;T<st;T++,et++,pt++)et===st&&(et=0),pt===st&&(pt=0),dt[T]=X(k[T],k[et],k[pt]);let _t=[],St,Vt=dt.concat();for(let T=0,st=R.length;T<st;T++){let et=R[T];St=[];for(let pt=0,K=et.length,Ct=K-1,ft=pt+1;pt<K;pt++,Ct++,ft++)Ct===K&&(Ct=0),ft===K&&(ft=0),St[pt]=X(et[pt],et[Ct],et[ft]);_t.push(St),Vt=Vt.concat(St)}for(let T=0;T<m;T++){let st=T/m,et=d*Math.cos(st*Math.PI/2),pt=v*Math.sin(st*Math.PI/2)+y;for(let K=0,Ct=k.length;K<Ct;K++){let ft=Z(k[K],dt[K],pt);gt(ft.x,ft.y,-et)}for(let K=0,Ct=R.length;K<Ct;K++){let ft=R[K];St=_t[K];for(let bt=0,w=ft.length;bt<w;bt++){let M=Z(ft[bt],St[bt],pt);gt(M.x,M.y,-et)}}}let $t=v+y;for(let T=0;T<G;T++){let st=h?Z(S[T],Vt[T],$t):S[T];x?(A.copy(D.normals[0]).multiplyScalar(st.x),C.copy(D.binormals[0]).multiplyScalar(st.y),U.copy(g[0]).add(A).add(C),gt(U.x,U.y,U.z)):gt(st.x,st.y,0)}for(let T=1;T<=u;T++)for(let st=0;st<G;st++){let et=h?Z(S[st],Vt[st],$t):S[st];x?(A.copy(D.normals[T]).multiplyScalar(et.x),C.copy(D.binormals[T]).multiplyScalar(et.y),U.copy(g[T]).add(A).add(C),gt(U.x,U.y,U.z)):gt(et.x,et.y,p/u*T)}for(let T=m-1;T>=0;T--){let st=T/m,et=d*Math.cos(st*Math.PI/2),pt=v*Math.sin(st*Math.PI/2)+y;for(let K=0,Ct=k.length;K<Ct;K++){let ft=Z(k[K],dt[K],pt);gt(ft.x,ft.y,p+et)}for(let K=0,Ct=R.length;K<Ct;K++){let ft=R[K];St=_t[K];for(let bt=0,w=ft.length;bt<w;bt++){let M=Z(ft[bt],St[bt],pt);x?gt(M.x,M.y+g[u-1].y,g[u-1].x+et):gt(M.x,M.y,p+et)}}}W(),it();function W(){let T=s.length/3;if(h){let st=0,et=G*st;for(let pt=0;pt<tt;pt++){let K=H[pt];Ut(K[2]+et,K[1]+et,K[0]+et)}st=u+m*2,et=G*st;for(let pt=0;pt<tt;pt++){let K=H[pt];Ut(K[0]+et,K[1]+et,K[2]+et)}}else{for(let st=0;st<tt;st++){let et=H[st];Ut(et[2],et[1],et[0])}for(let st=0;st<tt;st++){let et=H[st];Ut(et[0]+G*u,et[1]+G*u,et[2]+G*u)}}i.addGroup(T,s.length/3-T,0)}function it(){let T=s.length/3,st=0;Et(k,st),st+=k.length;for(let et=0,pt=R.length;et<pt;et++){let K=R[et];Et(K,st),st+=K.length}i.addGroup(T,s.length/3-T,1)}function Et(T,st){let et=T.length;for(;--et>=0;){let pt=et,K=et-1;K<0&&(K=T.length-1);for(let Ct=0,ft=u+m*2;Ct<ft;Ct++){let bt=G*Ct,w=G*(Ct+1),M=st+pt+bt,z=st+K+bt,j=st+K+w,$=st+pt+w;Ht(M,z,j,$)}}}function gt(T,st,et){l.push(T),l.push(st),l.push(et)}function Ut(T,st,et){Lt(T),Lt(st),Lt(et);let pt=s.length/3,K=_.generateTopUV(i,s,pt-3,pt-2,pt-1);Zt(K[0]),Zt(K[1]),Zt(K[2])}function Ht(T,st,et,pt){Lt(T),Lt(st),Lt(pt),Lt(st),Lt(et),Lt(pt);let K=s.length/3,Ct=_.generateSideWallUV(i,s,K-6,K-3,K-2,K-1);Zt(Ct[0]),Zt(Ct[1]),Zt(Ct[3]),Zt(Ct[1]),Zt(Ct[2]),Zt(Ct[3])}function Lt(T){s.push(l[T*3+0]),s.push(l[T*3+1]),s.push(l[T*3+2])}function Zt(T){a.push(T.x),a.push(T.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return MU(n,i,t)}static fromJSON(t,n){let i=[];for(let a=0,r=t.shapes.length;a<r;a++){let o=n[t.shapes[a]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new A0[s.type]().fromJSON(s)),new e(i,t.options)}},SU={generateTopUV:function(e,t,n,i,s){let a=t[n*3],r=t[n*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new ut(a,r),new ut(o,l),new ut(c,u)]},generateSideWallUV:function(e,t,n,i,s,a){let r=t[n*3],o=t[n*3+1],l=t[n*3+2],c=t[i*3],u=t[i*3+1],p=t[i*3+2],h=t[s*3],d=t[s*3+1],v=t[s*3+2],y=t[a*3],m=t[a*3+1],f=t[a*3+2];return Math.abs(o-u)<Math.abs(r-c)?[new ut(r,1-l),new ut(c,1-p),new ut(h,1-v),new ut(y,1-f)]:[new ut(o,1-l),new ut(u,1-p),new ut(d,1-v),new ut(m,1-f)]}};function MU(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,s=e.length;i<s;i++){let a=e[i];n.shapes.push(a.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Uf=class e extends _i{constructor(t=new rr([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};let i=[],s=[],a=[],r=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new dn(s,3)),this.setAttribute("normal",new dn(a,3)),this.setAttribute("uv",new dn(r,2));function c(u){let p=s.length/3,h=u.extractPoints(n),d=h.shape,v=h.holes;va.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,f=v.length;m<f;m++){let _=v[m];va.isClockWise(_)===!0&&(v[m]=_.reverse())}let y=va.triangulateShape(d,v);for(let m=0,f=v.length;m<f;m++){let _=v[m];d=d.concat(_)}for(let m=0,f=d.length;m<f;m++){let _=d[m];s.push(_.x,_.y,0),a.push(0,0,1),r.push(_.x,_.y)}for(let m=0,f=y.length;m<f;m++){let _=y[m],g=_[0]+p,x=_[1]+p,D=_[2]+p;i.push(g,x,D),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes;return bU(n,t)}static fromJSON(t,n){let i=[];for(let s=0,a=t.shapes.length;s<a;s++){let r=n[t.shapes[s]];i.push(r)}return new e(i,t.curveSegments)}};function bU(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){let s=e[n];t.shapes.push(s.uuid)}else t.shapes.push(e.uuid);return t}var Lc=class e extends _i{constructor(t=1,n=.4,i=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:a},i=Math.floor(i),s=Math.floor(s);let r=[],o=[],l=[],c=[],u=new N,p=new N,h=new N;for(let d=0;d<=i;d++)for(let v=0;v<=s;v++){let y=v/s*a,m=d/i*Math.PI*2;p.x=(t+n*Math.cos(m))*Math.cos(y),p.y=(t+n*Math.cos(m))*Math.sin(y),p.z=n*Math.sin(m),o.push(p.x,p.y,p.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),h.subVectors(p,u).normalize(),l.push(h.x,h.y,h.z),c.push(v/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let v=1;v<=s;v++){let y=(s+1)*d+v-1,m=(s+1)*(d-1)+v-1,f=(s+1)*(d-1)+v,_=(s+1)*d+v;r.push(y,m,_),r.push(m,f,_)}this.setIndex(r),this.setAttribute("position",new dn(o,3)),this.setAttribute("normal",new dn(l,3)),this.setAttribute("uv",new dn(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Oc=class extends ar{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=J1,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},lr=class extends Oc{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Wt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Wt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Wt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function nf(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function EU(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var jo=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},D0=class extends jo{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:IM,endingEnd:IM}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case zM:a=t,o=2*n-i;break;case PM:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case zM:r=t,l=2*i-n;break;case PM:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*u,this._offsetNext=r*u}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,p=this._offsetNext,h=this._weightPrev,d=this._weightNext,v=(i-n)/(s-n),y=v*v,m=y*v,f=-h*m+2*h*y-h*v,_=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*v+1,g=(-1-d)*m+(1.5+d)*y+.5*v,x=d*m-d*y;for(let D=0;D!==o;++D)a[D]=f*r[u+D]+_*r[c+D]+g*r[l+D]+x*r[p+D];return a}},U0=class extends jo{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-n)/(s-n),p=1-u;for(let h=0;h!==o;++h)a[h]=r[c+h]*p+r[l+h]*u;return a}},N0=class extends jo{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ui=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=nf(n,this.TimeBufferType),this.values=nf(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:nf(t.times,Array),values:nf(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new N0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new U0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new D0(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case uf:n=this.InterpolantFactoryMethodDiscrete;break;case s0:n=this.InterpolantFactoryMethodLinear;break;case Jm:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return uf;case this.InterpolantFactoryMethodLinear:return s0;case this.InterpolantFactoryMethodSmooth:return Jm}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&EU(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Jm,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,h=p-i,d=p+i;for(let v=0;v!==i;++v){let y=n[p+v];if(y!==n[h+v]||y!==n[d+v]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,h=r*i;for(let d=0;d!==i;++d)n[h+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};Ui.prototype.TimeBufferType=Float32Array;Ui.prototype.ValueBufferType=Float32Array;Ui.prototype.DefaultInterpolation=s0;var cr=class extends Ui{constructor(t,n,i){super(t,n,i)}};cr.prototype.ValueTypeName="bool";cr.prototype.ValueBufferType=Array;cr.prototype.DefaultInterpolation=uf;cr.prototype.InterpolantFactoryMethodLinear=void 0;cr.prototype.InterpolantFactoryMethodSmooth=void 0;var L0=class extends Ui{};L0.prototype.ValueTypeName="color";var O0=class extends Ui{};O0.prototype.ValueTypeName="number";var I0=class extends jo{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let u=c+o;c!==u;c+=4)si.slerpFlat(a,0,r,c-o,r,c,l);return a}},Nf=class extends Ui{InterpolantFactoryMethodLinear(t){return new I0(this.times,this.values,this.getValueSize(),t)}};Nf.prototype.ValueTypeName="quaternion";Nf.prototype.InterpolantFactoryMethodSmooth=void 0;var ur=class extends Ui{constructor(t,n,i){super(t,n,i)}};ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=uf;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;var z0=class extends Ui{};z0.prototype.ValueTypeName="vector";var P0=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,a===!1&&s.onStart!==void 0&&s.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,p){return c.push(u,p),this},this.removeHandler=function(u){let p=c.indexOf(u);return p!==-1&&c.splice(p,2),this},this.getHandler=function(u){for(let p=0,h=c.length;p<h;p+=2){let d=c[p],v=c[p+1];if(d.global&&(d.lastIndex=0),d.test(u))return v}return null}}},TU=new P0,B0=class{constructor(t){this.manager=t!==void 0?t:TU,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};B0.DEFAULT_MATERIAL_NAME="__DEFAULT";var F0=class extends Gn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}};var Ag=new Re,L1=new N,O1=new N,H0=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tc,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;L1.setFromMatrixPosition(t.matrixWorld),n.position.copy(L1),O1.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(O1),n.updateMatrixWorld(),Ag.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ag),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ag)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var V0=class extends H0{constructor(){super(new bf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ic=class extends F0{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gn.DEFAULT_UP),this.updateMatrix(),this.target=new Gn,this.shadow=new V0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var tv="\\[\\]\\.:\\/",AU=new RegExp("["+tv+"]","g"),ev="[^"+tv+"]",wU="[^"+tv.replace("\\.","")+"]",RU=/((?:WC+[\/:])*)/.source.replace("WC",ev),CU=/(WCOD+)?/.source.replace("WCOD",wU),DU=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ev),UU=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ev),NU=new RegExp("^"+RU+CU+DU+UU+"$"),LU=["material","materials","bones","map"],G0=class{constructor(t,n,i){let s=i||we.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},we=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(AU,"")}static parseTrackName(t){let n=NU.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);LU.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=G0;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _N=new Float32Array(1);var I1=new Re,Lf=class{constructor(t,n,i=0,s=1/0){this.ray=new _f(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new bc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return I1.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(I1),this}intersectObject(t,n=!0,i=[]){return k0(t,this,i,n),i.sort(z1),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)k0(t[s],this,i,n);return i.sort(z1),i}};function z1(e,t){return e.distance-t.distance}function k0(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)k0(a[r],t,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"167"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="167");var wb=_r(Pc(),1),fb={portrait:[1.6,2.25],landscape:[2.25,1.6]},PU={left:.27,center:.5,right:.73},Hc=.018,Cn=.007,qe=4,db=1/.05,BU=1/960,FU=2,Cs=72,pb=24,nv=.36,Sb=.095,HU=.0135,Ff=.036,Fc=.15,mb=1024,gb={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},"glossy-soft":{roughness:.38,metalness:0,clearcoat:.4,clearcoatRoughness:.24,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},Hf=[0,.07,.93,1],VU=[-.95,-.28,.28,.95],GU=9,kU=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,XU=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,qU=`
uniform float foilStrength;
uniform float foilAspect;
uniform vec3 foilKey;
uniform vec3 foilFill;
uniform vec3 foilTop;
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;

float foilHash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float foilBump(float t, float center, float width) {
  float x = (t - center) / width;
  return max(0.0, 1.0 - x * x);
}

vec3 foilSpectrum(float t) {
  return vec3(
    foilBump(t, 0.82, 0.32) + 0.4 * foilBump(t, 0.02, 0.12),
    foilBump(t, 0.5, 0.26),
    foilBump(t, 0.18, 0.24)
  );
}

vec3 foilGrating(float u, float spacing) {
  vec3 color = vec3(0.0);
  for (int m = 1; m <= 2; m++) {
    float order = float(m);
    float t = (spacing * abs(u) / order - 0.38) / 0.32;
    color += foilSpectrum(t) / order;
  }
  return color;
}

vec3 foilShard(vec2 p) {
  vec2 base = floor(p);
  float best = 9.0;
  float edge = 9.0;
  vec2 id = base;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 cell = base + vec2(float(i), float(j));
      vec2 site = cell + vec2(foilHash(cell), foilHash(cell + 7.31)) * 0.9 + 0.05;
      float d = length(site - p);
      if (d < best) {
        edge = best;
        best = d;
        id = cell;
      } else if (d < edge) {
        edge = d;
      }
    }
  }
  return vec3(foilHash(id + 3.17), foilHash(id + 11.73), edge - best);
}
`,WU=`
if (foilStrength > 0.0) {
  vec3 foilView = normalize(vViewPosition);
  vec3 foilNormal = normalize(normal);
  vec2 foilP = vec2(vFoilUv.x, vFoilUv.y * foilAspect);
  vec3 shard = foilShard(foilP * 26.0);
  vec2 ray = foilP - vec2(-1.6, 2.6 * foilAspect);
  float angle = atan(ray.y, ray.x) + (shard.x - 0.5) * 0.16;
  vec3 grating = normalize(vFoilX * cos(angle) + vFoilY * sin(angle));
  float spacing = 1.7 * (0.95 + shard.y * 0.1);
  vec3 rainbow = foilGrating(dot(foilKey + foilView, grating), spacing);
  rainbow += 0.6 * foilGrating(dot(foilTop + foilView, grating), spacing);
  rainbow *= 0.8 + 0.2 * smoothstep(0.0, 0.04, shard.z);
  rainbow = max(rainbow - 0.35 * min(rainbow.r, min(rainbow.g, rainbow.b)), 0.0);
  vec2 grid = foilP * 64.0;
  vec2 cell = floor(grid);
  vec2 jitter = vec2(foilHash(cell + 1.7), foilHash(cell + 9.2));
  float flake = smoothstep(0.32, 0.06, length(fract(grid) - jitter * 0.6 - 0.2)) * step(0.45, foilHash(cell + 4.4));
  vec3 facet = normalize(foilNormal + (vFoilX * (jitter.x - 0.5) + vFoilY * (jitter.y - 0.5)) * 0.8);
  float glint = pow(max(dot(reflect(-foilKey, facet), foilView), 0.0), 28.0);
  glint += 0.7 * pow(max(dot(reflect(-foilTop, facet), foilView), 0.0), 28.0);
  float fine = 1.0 - smoothstep(0.35, 0.9, max(fwidth(grid.x), fwidth(grid.y)));
  vec3 sparkle = flake * glint * fine * (vec3(0.7) + foilGrating(dot(foilKey + foilView, grating) + jitter.x * 0.4, spacing));
  float ink = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  float foil = foilStrength * (0.08 + 0.92 * smoothstep(0.04, 0.7, ink));
  float facing = clamp(dot(foilNormal, foilView), 0.0, 1.0);
  float tint = clamp(dot(rainbow, vec3(0.4)), 0.0, 1.0);
  outgoingLight = outgoingLight * (1.0 - foil * (0.3 + 0.32 * tint)) + (rainbow * 0.62 * (0.4 + 0.6 * facing) + sparkle * 1.6) * foil;
}
`,vb={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},Sa=(e,t,n)=>Math.min(n,Math.max(t,e)),Bc=(e,t,n)=>e+(t-e)*n,iv=(e,t)=>{try{let n=document.createElement("canvas").getContext("2d");if(!n)return t;n.fillStyle="#000000",n.fillStyle=e;let i=n.fillStyle;if(i.startsWith("#")){let a=parseInt(i.slice(1),16);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]}let s=i.match(/[\d.]+/g);return!s||s.length<3?t:[Number(s[0])/255,Number(s[1])/255,Number(s[2])/255]}catch{return t}},YU=e=>.2126*e[0]+.7152*e[1]+.0722*e[2],Vf=(e,t=1)=>`rgba(${Math.round(e[0]*255)}, ${Math.round(e[1]*255)}, ${Math.round(e[2]*255)}, ${t})`,Mb=e=>{let t=e>>>0;return()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}},ov=(e,t,n,i,s,a)=>{let r=Math.max(0,Math.min(a,i/2,s/2)),o=r*.4477;e.moveTo(t+r,n),e.lineTo(t+i-r,n),e.bezierCurveTo(t+i-o,n,t+i,n+o,t+i,n+r),e.lineTo(t+i,n+s-r),e.bezierCurveTo(t+i,n+s-o,t+i-o,n+s,t+i-r,n+s),e.lineTo(t+r,n+s),e.bezierCurveTo(t+o,n+s,t,n+s-o,t,n+s-r),e.lineTo(t,n+r),e.bezierCurveTo(t,n+o,t+o,n,t+r,n)},sv=(e,t)=>{if(!t)return Promise.resolve(null);let n=e.get(t);if(n)return n;let i=new Promise(s=>{let a=new Image;a.crossOrigin="anonymous",a.decoding="async",a.onload=()=>s(a),a.onerror=()=>s(null),a.src=t});return e.set(t,i),i},_b=(e,t)=>{let[n,i]=fb[e]||fb.portrait,s=Bc(.03,Math.min(n,i)*.2,Sa(t,0,1)),a={width:.34,height:.07,y:i/2-.13},r=i/2-.055;return{width:n,height:i,radius:s,slot:a,ringY:r,hangY:r+Sb}},ZU=e=>{let{width:t,height:n,radius:i,slot:s}=e,a=new rr;ov(a,-t/2+Cn,-n/2+Cn,t-Cn*2,n-Cn*2,Math.max(i-Cn,.005));let r=new Qo;ov(r,-s.width/2-Cn,s.y-s.height/2-Cn,s.width+Cn*2,s.height+Cn*2,s.height/2+Cn),a.holes.push(r);let o=new Nc(a,{depth:Hc,bevelEnabled:!0,bevelThickness:Cn,bevelSize:Cn,bevelSegments:5,curveSegments:24});o.translate(0,0,-Hc/2);let l=new Uf(a,24),c=l.getAttribute("position"),u=l.getAttribute("uv");for(let p=0;p<c.count;p++)u.setXY(p,(c.getX(p)+t/2)/t,(c.getY(p)+n/2)/n);return u.needsUpdate=!0,{body:o,face:l}},yb=e=>{let t=new rr,n=e*1.16;ov(t,-n/2+.014,-Fc/2+.014,n-.028,Fc-.028,.024);let i=new Nc(t,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return i.translate(0,0,-.01),i},KU=e=>{let t=Hf.length,n=new _i;n.setAttribute("position",new xn(new Float32Array(e*t*3),3)),n.setAttribute("normal",new xn(new Float32Array(e*t*3),3)),n.setAttribute("uv",new xn(new Float32Array(e*t*2),2));let i=[];for(let s=0;s<e-1;s++)for(let a=0;a<t-1;a++){let r=s*t+a;i.push(r,r+t,r+1,r+1,r+t,r+t+1)}return n.setIndex(i),n},JU=e=>{let t=new Ac;t.background=new Wt(.035,.035,.04);let n=new Zo(1,1),i=[],s=(o,l,c,u=0)=>{let p=new Wo({color:new Wt(o,o,o),side:vi});i.push(p);let h=new Xe(n,p);h.position.set(...l),h.scale.set(c[0],c[1],1),h.lookAt(0,0,0),h.rotateZ(u),t.add(h)};s(2.6,[0,4.5,8],[9,4]),s(6,[-5.5,.5,7],[.9,14]),s(4,[5,-.5,8],[.6,14]),s(3.5,[0,-1,9],[24,.35],Math.PI/3),s(2.5,[1,2.5,9],[24,.2],Math.PI/3),s(1.4,[0,6,-6],[12,4]),s(.5,[0,-7,1],[16,6]),s(.9,[8,0,-2],[4,10]);let a=new Ko(e),r=a.fromScene(t,.035);return a.dispose(),n.dispose(),i.forEach(o=>o.dispose()),r},av=(e,t)=>{let n=new Jo(e);return n.colorSpace=Bn,n.anisotropy=t,n},QU=()=>{let t=document.createElement("canvas");t.width=128,t.height=128;let n=t.getContext("2d");if(!n)return new Jo(t);let i=Mb(7),s=Float32Array.from({length:16384},()=>i()),a=(l,c)=>{let u=0;for(let p=-1;p<=1;p++)for(let h=-1;h<=1;h++)u+=s[(c+p+128)%128*128+(l+h+128)%128];return u/9*1.6},r=n.createImageData(128,128);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=a((c-1+128)%128,l)-a((c+1)%128,l),p=a(c,(l-1+128)%128)-a(c,(l+1)%128),h=Math.hypot(u,p,1),d=(l*128+c)*4;r.data[d]=(u/h*.5+.5)*255,r.data[d+1]=(p/h*.5+.5)*255,r.data[d+2]=(1/h*.5+.5)*255,r.data[d+3]=255}n.putImageData(r,0,0);let o=new Jo(t);return o.wrapS=As,o.wrapT=As,o.repeat.set(5,7),o},jU=()=>{let n=Mb(19),i=Float32Array.from({length:16384},()=>n()),s=l=>Math.sqrt(Math.max(0,1-4*l*l)),a=(l,c)=>{let u=(l%128+128)%128,p=(c%128+128)%128,h=u/128*8,d=p/128*8,v=Math.floor(h),y=Math.floor(d),m=h-v-.5,f=d-y-.5,_=(v+y)%2===0,g=s(m)*(.55+.45*Math.cos(f*Math.PI*(_?1:.6))),x=s(f)*(.55+.45*Math.cos(m*Math.PI*(_?.6:1)));return(_?Math.max(g,x*.7):Math.max(x,g*.7))+i[p*128+u]*.08},r=new Uint8Array(16384*4);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=(a(c-1,l)-a(c+1,l))*1.6,p=(a(c,l-1)-a(c,l+1))*1.6,h=Math.hypot(u,p,1),d=(l*128+c)*4;r[d]=(u/h*.5+.5)*255,r[d+1]=(p/h*.5+.5)*255,r[d+2]=(1/h*.5+.5)*255,r[d+3]=255}let o=new Af(r,128,128);return o.wrapS=As,o.wrapT=As,o.magFilter=ii,o.minFilter=Ms,o.generateMipmaps=!0,o.needsUpdate=!0,o},$U=(e,t,n,i,s)=>{let a=(s==="contain"?Math.min:Math.max)(n/t.width,i/t.height),r=t.width*a,o=t.height*a;e.drawImage(t,(n-r)/2,(i-o)/2,r,o)},xb=(e,t,n,i)=>{let s=e.getContext("2d");s&&(s.fillStyle=Vf(n),s.fillRect(0,0,e.width,e.height),t&&$U(s,t,e.width,e.height,i))},tN=(e,t,n)=>{let s=t?Math.max(64,Math.round(t.width/t.height*192)):384;e.width=192,e.height=s;let a=e.getContext("2d");if(!a)return s/192;if(a.fillStyle=Vf(n),a.fillRect(0,0,192,s),t)return a.save(),a.translate(192,0),a.rotate(Math.PI/2),a.drawImage(t,0,0,s,192),a.restore(),s/192;let r=YU(n)>.5?[0,0,0]:[1,1,1];a.fillStyle=Vf(r,.05);for(let o=0;o<s;o+=4)a.fillRect(0,o,192,1);a.fillStyle=Vf(r,.2);for(let o=0;o<s;o+=14)a.fillRect(192*.075,o,2,8),a.fillRect(192*.925-2,o,2,8);return s/192},eN=()=>{let e=()=>Array.from({length:qe+1},()=>new N);return{nodes:e(),previous:e(),velocities:e(),lengths:new Float64Array(qe),impulses:new Float64Array(qe),rest:1,anchor:new N,body:{position:new N,previous:new N,velocity:new N,quaternion:new si,previousQuaternion:new si,angular:new N,mass:1,inverseInertia:new N(1,1,1),hang:new N},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},pe={a:new N,b:new N,c:new N,d:new N,e:new N,f:new N,g:new N,pin:new N,q:new si,r:new si},lv=(e,t,n)=>(pe.r.copy(e.quaternion).invert(),n.copy(t).applyQuaternion(pe.r),n.set(n.x*e.inverseInertia.x,n.y*e.inverseInertia.y,n.z*e.inverseInertia.z),n.applyQuaternion(e.quaternion)),bb=(e,t)=>{let{x:n,y:i,z:s,w:a}=e;e.x+=.5*(t.x*a+t.y*s-t.z*i),e.y+=.5*(t.y*a+t.z*n-t.x*s),e.z+=.5*(t.z*a+t.x*i-t.y*n),e.w+=.5*(-t.x*n-t.y*i-t.z*s),e.normalize()},Eb=(e,t,n)=>{let i=pe.c.crossVectors(t,n);return 1/e.mass+i.dot(lv(e,i,pe.d))},Tb=(e,t,n)=>{e.position.addScaledVector(n,1/e.mass),bb(e.quaternion,lv(e,pe.e.crossVectors(t,n),pe.f))},nN=(e,t,n,i)=>{let{nodes:s,body:a}=e,r=s[t],o=t===0?0:db,l=t===qe-1,c=pe.g,u=s[t+1];l&&(c.copy(a.hang).applyQuaternion(a.quaternion),u=pe.b.copy(a.position).add(c));let p=pe.a.subVectors(u,r),h=p.length(),d=h-e.rest;if(d<=0||h<1e-9)return;let v=p.divideScalar(h),y=l?Eb(a,c,v):db,m=(h-e.lengths[t])/n,_=(i.hold*Math.tanh(i.stiffness*d/i.hold)+i.spring*d+i.bandDamping*Math.max(0,m))*n*n-e.impulses[t];if(_<=0)return;let g=Math.min(d/(o+y),_);e.impulses[t]+=g,o&&r.addScaledVector(v,g*o),l?Tb(a,c,v.multiplyScalar(-g)):u.addScaledVector(v,-g*y)},iN=(e,t,n)=>{let i=pe.g.copy(t.local).applyQuaternion(e.quaternion),s=pe.a.copy(n).sub(e.position).sub(i),a=s.length();if(a<1e-9)return;let r=s.divideScalar(a),o=a/Eb(e,i,r);Tb(e,i,r.multiplyScalar(o))},rv=(e,t,n)=>{let{nodes:i,previous:s,velocities:a,body:r,anchor:o}=e;i[0].copy(o);for(let c=1;c<=qe;c++)i[c].copy(i[c-1]),n?i[c].x+=e.rest:i[c].y-=e.rest;r.quaternion.identity(),n&&r.quaternion.setFromAxisAngle(new N(0,0,1),Math.PI/2),r.hang.set(0,t.hangY,0);let l=pe.a.copy(r.hang).applyQuaternion(r.quaternion);r.position.copy(i[qe]).sub(l),r.previous.copy(r.position),r.previousQuaternion.copy(r.quaternion),r.velocity.set(0,0,0),r.angular.set(0,0,0);for(let c=0;c<=qe;c++)s[c].copy(i[c]),a[c].set(0,0,0);e.lengths.fill(e.rest),e.turn=0,e.twist=0,e.twistRaw=0,e.calm=0},sN=(e,t,n)=>{e.rest=n/qe;let{width:i,height:s}=t,a=e.body,r=Hc+Cn*2;a.mass=1,a.inverseInertia.set(12/(s*s+r*r),12/(i*i+r*r),12/(i*i+s*s)),a.hang.set(0,t.hangY,0)},aN=(e,t,n,i)=>{let s=Math.max(1,Math.ceil(t/BU-1e-6)),a=t/s,{nodes:r,previous:o,velocities:l,body:c}=e,u=n.breeze*(Math.sin(i*.53)*.7+Math.sin(i*1.31+1.7)*.3)*3,p=n.breeze*Math.sin(i*.37+.6)*2,h=e.grab,d=pe.pin,v=Math.exp(-n.nodeDrag*a),y=Math.exp(-n.linearDrag*a),m=Math.exp(-n.angularDrag*a);for(let _=0;_<s;_++){for(let S=1;S<qe;S++){let R=l[S];R.y-=n.gravity*a,R.x+=u*a,R.z+=p*a,o[S].copy(r[S]),r[S].addScaledVector(R,a)}c.previous.copy(c.position),c.previousQuaternion.copy(c.quaternion);let g=c.quaternion;if(h){let S=pe.q.copy(h.rotation).multiply(pe.r.copy(g).invert());S.w<0&&S.set(-S.x,-S.y,-S.z,-S.w);let R=pe.a.set(S.x,S.y,S.z).multiplyScalar(2*n.grip);R.addScaledVector(c.angular,-n.gripDamping),c.angular.addScaledVector(lv(c,R,pe.b),a)}let x=pe.a.set(0,1,0).applyQuaternion(g),D=pe.b.set(-x.x*x.z,-x.y*x.z,1-x.z*x.z);if(D.lengthSq()>.001){let S=pe.d.set(0,0,1).applyQuaternion(g),R=Math.atan2(pe.e.crossVectors(D,S).dot(x),D.dot(S)),q=R-e.twistRaw;q>Math.PI?q-=Math.PI*2:q<-Math.PI&&(q+=Math.PI*2),e.twist+=q,e.twistRaw=R}if(!h){let S=c.angular.dot(x);c.angular.addScaledVector(x,(n.twist*(e.turn-e.twist)-n.twistDamping*S)*a)}c.velocity.y-=n.gravity*a,c.velocity.x+=u*.35*a,c.velocity.z+=p*.35*a,c.position.addScaledVector(c.velocity,a),bb(c.quaternion,pe.f.copy(c.angular).multiplyScalar(a)),e.impulses.fill(0),h&&d.lerpVectors(h.from,h.target,(_+1)/s);for(let S=0;S<FU;S++){for(let R=0;R<qe;R++)nN(e,R,a,n);h&&iN(c,h,d)}for(let S=1;S<qe;S++){let R=l[S].subVectors(r[S],o[S]).divideScalar(a).multiplyScalar(v);R.multiplyScalar(1/(1+n.nodeAir*R.length()*a))}c.velocity.subVectors(c.position,c.previous).divideScalar(a);let C=pe.q.copy(c.previousQuaternion).invert().premultiply(c.quaternion);c.angular.set(C.x,C.y,C.z).multiplyScalar(2/a*(C.w<0?-1:1));let A=pe.a.set(0,0,1).applyQuaternion(c.quaternion),U=c.velocity.dot(A),E=pe.b.copy(c.velocity).addScaledVector(A,-U);E.multiplyScalar(1/(1+n.air*E.length()*a)),c.velocity.copy(E).addScaledVector(A,U/(1+n.broadside*Math.abs(U)*a)).multiplyScalar(y),c.angular.multiplyScalar(m/(1+n.spinAir*c.angular.length()*a)),c.velocity.lengthSq()>3600&&c.velocity.setLength(60),c.angular.lengthSq()>1600&&c.angular.setLength(40),r[qe].copy(c.hang).applyQuaternion(c.quaternion).add(c.position);for(let S=0;S<qe;S++)e.lengths[S]=r[S].distanceTo(r[S+1])}h&&h.from.copy(h.target);let f=c.velocity.lengthSq()+c.angular.lengthSq()*.3;for(let _=1;_<qe;_++)f+=l[_].lengthSq()*.05;e.calm=f<2e-4?e.calm+t:0},rN=({frontImage:e,backImage:t,imageFit:n="cover",cardColor:i="#ffffff",orientation:s="portrait",finish:a="glossy",cornerRadius:r=.3,size:o=.6,anchor:l="center",strapLength:c=.5,strapImage:u,strapColor:p="#111111",strapWidth:h=.65,metal:d="silver",gravity:v=1,damping:y=.5,elasticity:m=.5,breeze:f=.5,interactive:_=!0,intro:g=!0,className:x="",style:D})=>{let C=(0,hr.useRef)(null),A=(0,hr.useRef)(null),U=(0,hr.useRef)(null);return A.current={frontImage:e,backImage:t,imageFit:n==="contain"?"contain":"cover",cardColor:i,orientation:s==="landscape"?"landscape":"portrait",finish:a,cornerRadius:r,size:o,anchor:l,strapLength:c,strapImage:u,strapColor:p,strapWidth:h,metal:d,gravity:v,damping:y,elasticity:m,breeze:f,interactive:_,intro:g},(0,hr.useEffect)(()=>{U.current?.()}),(0,hr.useEffect)(()=>{let E=C.current;if(!E)return;let S;try{S=new Tf({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}S.setClearColor(0,0),S.outputColorSpace=Bn,S.toneMapping=X0,S.toneMappingExposure=1;let R=S.domElement;R.className="lanyard-canvas",R.setAttribute("aria-hidden","true"),E.appendChild(R);let q=Math.min(8,S.capabilities.getMaxAnisotropy()),H=new Ac,k=JU(S);H.environment=k.texture;let Z=new Rn(pb,1,.1,200),G=new Ic(16777215,1.6);G.position.set(-2.5,4,6);let tt=new Ic(16777215,.35);tt.position.set(3,-1,4),H.add(G,tt);let X=new Map,dt={front:null,back:null,strap:null},_t=document.createElement("canvas"),St=document.createElement("canvas"),Vt=document.createElement("canvas"),$t=av(_t,q),W=av(St,q),it=av(Vt,q);it.wrapS=Ss,it.wrapT=As;let Et=QU(),gt=jU(),Ut={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new N},foilFill:{value:new N},foilTop:{value:new N}},Ht=V=>{Object.assign(V.uniforms,Ut),V.vertexShader=V.vertexShader.replace("#include <common>",`#include <common>
${kU}`).replace("#include <project_vertex>",`#include <project_vertex>
${XU}`),V.fragmentShader=V.fragmentShader.replace("#include <common>",`#include <common>
${qU}`).replace("#include <opaque_fragment>",`${WU}
#include <opaque_fragment>`)},Lt=new lr({map:$t,normalMap:Et,normalScale:new ut(.06,.06)}),Zt=new lr({map:W,normalMap:Et,normalScale:new ut(.06,.06)});Lt.onBeforeCompile=Ht,Zt.onBeforeCompile=Ht;let T=new lr,st=new Oc({metalness:1}),et=new lr({map:it,normalMap:gt,normalScale:new ut(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new Wt(.32,.32,.34),side:vi}),pt=new Ts,K=new Xe(void 0,T),Ct=new Xe(void 0,Lt),ft=new Xe(void 0,Zt),bt=new Xe(new Lc(Sb,HU,18,72),st);bt.rotation.y=Math.PI/2-.7,pt.add(K,Ct,ft,bt),H.add(pt);let w=KU(Cs),M=new Xe(w,et);M.frustumCulled=!1,H.add(M);let z=new Ts,j=new Xe(yb(nv),st);j.position.y=Ff+Fc/2-.004;let $=new Xe(new Lc(Ff,.0105,14,40),st);z.add(j,$),H.add(z);let F=eN(),Dt=[],mt=new N,Mt=new N,Pt=new Rc(Dt,!1,"centripetal"),nt={width:1,height:1},ct=_b("portrait",.3),Ft={},Nt=nv,Tt=2,It=0,Gt=performance.now(),ye=0,L=!0,at=!0,J=!1,Q=!1,rt=null,Ot=0,te=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,Ce=()=>{let V=A.current,lt=iv(V.cardColor,[1,1,1]),ht=mb,Rt=Math.round(mb*ct.height/ct.width);(_t.width!==ht||_t.height!==Rt)&&(_t.width=ht,_t.height=Rt,St.width=ht,St.height=Rt,$t.dispose(),W.dispose()),xb(_t,dt.front,lt,V.imageFit),xb(St,dt.back||dt.front,lt,V.imageFit),$t.needsUpdate=!0,W.needsUpdate=!0,kn()},Be=()=>{let V=A.current;Tt=tN(Vt,dt.strap,iv(V.strapColor,[.07,.07,.07])),gt.repeat.set(2,2*Tt),it.dispose(),it.needsUpdate=!0,kn()},ae=()=>{let V=A.current,lt=nt.width/nt.height,ht=ct.height/Sa(V.size,.15,.9),Rt=ct.width/.72;ht*lt<Rt&&(ht=Rt/lt);let Kt=ht*lt;Z.aspect=lt,Z.position.set(0,0,ht/2/Math.tan(pb*Math.PI/360)),Z.lookAt(0,0,0),Z.updateProjectionMatrix(),Z.updateMatrixWorld(),Ut.foilKey.value.set(-2.5,4,6).normalize().transformDirection(Z.matrixWorldInverse),Ut.foilFill.value.set(3,-1,4).normalize().transformDirection(Z.matrixWorldInverse),Ut.foilTop.value.set(.5,4.5,8).normalize().transformDirection(Z.matrixWorldInverse);let ne=((PU[V.anchor]??.5)-.5)*Kt,De=ht/2+.2,xt=ht/2-ht*Bc(.12,.42,Sa(V.strapLength,0,1))+(ct.hangY-ct.height/2);F.anchor.set(ne,De,0),sN(F,ct,De-xt),F.nodes[0].copy(F.anchor),F.previous[0].copy(F.anchor)},ai=()=>{let V=A.current,lt=`${V.orientation}|${V.cornerRadius}`;if(lt!==Ft.layoutKey){ct=_b(V.orientation,V.cornerRadius);let xt=ZU(ct);K.geometry.dispose(),Ct.geometry.dispose(),ft.geometry.dispose(),K.geometry=xt.body,Ct.geometry=xt.face,ft.geometry=xt.face.clone(),Ct.position.z=Hc/2+Cn+6e-4,ft.rotation.y=Math.PI,ft.position.z=-(Hc/2+Cn+6e-4),bt.position.set(0,ct.ringY,0),Ft.framingKey=""}let ht=`${lt}|${V.size}|${V.anchor}|${V.strapLength}|${nt.width}|${nt.height}`;ht!==Ft.framingKey&&(ae(),J?lt!==Ft.layoutKey&&rv(F,ct,!1):(rv(F,ct,V.intro&&!te),J=!0));let Rt=`${V.frontImage}|${V.backImage}|${V.strapImage}`;if(Rt!==Ft.imageKey){let xt=++Ot;Promise.all([sv(X,V.frontImage),sv(X,V.backImage),sv(X,V.strapImage)]).then(([Le,ie,Sn])=>{!at||xt!==Ot||(dt.front=Le,dt.back=ie,dt.strap=Sn,Ce(),Be())})}let Kt=`${lt}|${V.cardColor}|${V.imageFit}`;Kt!==Ft.faceKey&&Ce(),V.strapColor!==Ft.strapColor&&Be();let ne=gb[V.finish]||gb.glossy,De=iv(V.cardColor,[1,1,1]);[Lt,Zt].forEach(xt=>{xt.roughness=ne.roughness,xt.metalness=ne.metalness,xt.clearcoat=ne.clearcoat,xt.clearcoatRoughness=ne.clearcoatRoughness,xt.anisotropy=ne.anisotropy}),Ut.foilStrength.value=ne.foil,Ut.foilAspect.value=ct.height/ct.width,T.color.setRGB(De[0]*.92,De[1]*.92,De[2]*.92,Bn),T.roughness=Math.min(ne.roughness,.35),T.metalness=ne.metalness,T.clearcoat=1,T.clearcoatRoughness=.08;let Jt=vb[V.metal]||vb.silver;st.color.set(Jt.color),st.roughness=Jt.roughness,Nt=nv*Sa(V.strapWidth,.4,2),Nt!==Ft.strapScale&&(j.geometry.dispose(),j.geometry=yb(Nt)),R.style.touchAction=V.interactive?"pan-y":"auto",Ft={layoutKey:lt,framingKey:ht,imageKey:Rt,faceKey:Kt,strapColor:V.strapColor,strapScale:Nt},kn()},pn=Array.from({length:Cs},()=>new N),fr=Array.from({length:Cs},()=>new N),Qi=VU.map(V=>[Math.cos(V),Math.sin(V)]),xi={tangent:new N,toCamera:new N,basis:new Re,up:new N,across:new N,facing:new N,end:new N},Gc=()=>{let V=F.nodes[qe],lt=Ff+Fc+.05,ht=qe-1;for(;ht>0&&F.nodes[ht].distanceTo(V)<lt*1.1;)ht--;let Rt=xi.up.subVectors(F.nodes[ht],V);Rt.lengthSq()<1e-8&&Rt.set(0,1,0).applyQuaternion(F.body.quaternion),Rt.normalize(),mt.copy(V).addScaledVector(Rt,lt),Mt.copy(V).addScaledVector(Rt,Ff+Fc*.35),Dt.length=0;for(let ge=0;ge<=ht;ge++)Dt.push(F.nodes[ge]);Dt.push(mt,Mt),Pt.updateArcLengths();for(let ge=0;ge<Cs;ge++)Pt.getPointAt(ge/(Cs-1),pn[ge]);let Kt=Pt.getLength(),ne=1-mt.distanceTo(Mt)/Math.max(Kt,.001),De=w.getAttribute("position"),Jt=w.getAttribute("normal"),xt=w.getAttribute("uv"),Le=Hf.length,ie=F.rest*qe,Sn=ie/(Nt*Tt),Ds=Nt/Math.pow(Math.max(1,Kt/Math.max(ie,.001)),.35),{tangent:ze,toCamera:mr,across:se,facing:sn}=xi;for(let ge=0;ge<Cs;ge++){ze.subVectors(pn[Math.min(Cs-1,ge+1)],pn[Math.max(0,ge-1)]),ze.lengthSq()<1e-12&&ze.set(0,-1,0),ze.normalize(),mr.subVectors(Z.position,pn[ge]).normalize();let Fe=fr[ge].crossVectors(mr,ze);Fe.lengthSq()<1e-10&&Fe.copy(ge>0?fr[ge-1]:pe.a.set(1,0,0)),Fe.normalize(),ge>0&&Fe.dot(fr[ge-1])<0&&Fe.negate();let gr=-F.twist*Math.pow(Math.min(1,ge/(Cs-1)/ne),1.3);sn.crossVectors(ze,Fe),se.copy(Fe).multiplyScalar(Math.cos(gr)).addScaledVector(sn,Math.sin(gr)),sn.crossVectors(ze,se);let ol=pn[ge],kc=(1-ge/(Cs-1))*Sn;for(let vr=0;vr<Le;vr++){let Gf=ge*Le+vr,kf=(Hf[vr]-.5)*Ds,[Xf,qf]=Qi[vr];De.setXYZ(Gf,ol.x+se.x*kf,ol.y+se.y*kf,ol.z+se.z*kf),Jt.setXYZ(Gf,sn.x*Xf+se.x*qf,sn.y*Xf+se.y*qf,sn.z*Xf+se.z*qf),xt.setXY(Gf,Hf[vr],kc)}}xi.end.copy(se),De.needsUpdate=!0,Jt.needsUpdate=!0,xt.needsUpdate=!0,se.copy(xi.end).addScaledVector(Rt,-xi.end.dot(Rt)).normalize(),sn.crossVectors(se,Rt).normalize(),xi.basis.makeBasis(se,Rt,sn),z.quaternion.setFromRotationMatrix(xi.basis),z.position.copy(V)},el=()=>{pt.position.copy(F.body.position),pt.quaternion.copy(F.body.quaternion),Gc(),S.render(H,Z)},dr=()=>{let V=A.current,lt=40*Sa(V.gravity,0,3),ht=Math.max(lt,20),Rt=Sa(V.elasticity,0,1),Kt=Sa(V.damping,0,1);return{gravity:lt,hold:ht*Bc(2.2,5.5,Rt),stiffness:ht*10*qe,spring:ht*Bc(.1,.4,Rt)*qe,bandDamping:ht*Bc(.3,.08,Rt)*qe,linearDrag:.25*Math.pow(16,Kt),angularDrag:.5*Math.pow(12,Kt),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:te?0:Sa(V.breeze,0,1)}},nl=V=>{if(It=0,!at)return;let lt=Math.min(1/30,Math.max(1/240,(V-Gt)/1e3));Gt=V,ye+=lt;let ht=dr();aN(F,lt,ht,ye);let Rt=F.body;Number.isFinite(Rt.position.x+Rt.position.y+Rt.position.z+Rt.quaternion.w)||(F.grab=null,rv(F,ct,!1)),el();let Kt=F.calm>1.2&&!F.grab&&ht.breeze===0;L&&!Kt&&(It=requestAnimationFrame(nl))},kn=()=>{It||!L||!at||(F.calm=0,Gt=performance.now(),It=requestAnimationFrame(nl))},pr=new Lf,il=new ut,sl=V=>{let lt=R.getBoundingClientRect();il.set((V.clientX-lt.left)/lt.width*2-1,-((V.clientY-lt.top)/lt.height)*2+1),pr.setFromCamera(il,Z)},al=()=>(pt.updateMatrixWorld(),pr.intersectObjects([K,Ct,ft],!1)[0]||null),rl=V=>{R.style.cursor!==V&&(R.style.cursor=V)},b=V=>{let lt=F.body,ht=pe.a.set(0,1,0).applyQuaternion(lt.quaternion),Rt=F.turn>0?-1:1;if(F.turn===0){let Kt=pe.c.subVectors(V,Z.position).normalize();Rt=pe.b.subVectors(V,lt.position).cross(Kt).dot(ht)<0?-1:1}F.turn=F.turn===0?Math.PI*Rt:0,lt.angular.addScaledVector(ht,GU*Rt)},O=V=>{if(!A.current.interactive||V.button>0)return;sl(V);let lt=al();lt&&(F.grab={local:lt.point.clone().sub(F.body.position).applyQuaternion(F.body.quaternion.clone().invert()),rotation:F.body.quaternion.clone(),reach:lt.distance,from:lt.point.clone(),target:lt.point.clone()},rt={x:V.clientX,y:V.clientY,time:performance.now(),point:lt.point.clone()},R.setPointerCapture?.(V.pointerId),rl("grabbing"),V.preventDefault(),kn())},B=V=>{if(A.current.interactive){if(sl(V),F.grab){rt&&Math.hypot(V.clientX-rt.x,V.clientY-rt.y)>6&&(rt=null),pr.ray.at(F.grab.reach,F.grab.target),kn();return}V.pointerType!=="touch"&&(Q=!!al(),rl(Q?"grab":""))}},P=V=>{F.grab&&(F.grab=null,rt&&V.type==="pointerup"&&performance.now()-rt.time<450&&b(rt.point),rt=null,R.releasePointerCapture?.(V.pointerId),rl(Q&&V.pointerType!=="touch"?"grab":""),kn())},I=V=>{!A.current.interactive||V.touches.length!==1||(sl(V.touches[0]),al()&&V.preventDefault())};R.addEventListener("pointerdown",O),R.addEventListener("pointermove",B),R.addEventListener("pointerup",P),R.addEventListener("pointercancel",P),R.addEventListener("lostpointercapture",P),R.addEventListener("touchstart",I,{passive:!1});let ot=()=>{nt.width=Math.max(1,E.clientWidth),nt.height=Math.max(1,E.clientHeight),S.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),S.setSize(nt.width,nt.height,!1),ai(),el()},yt=new ResizeObserver(ot);yt.observe(E);let At=new IntersectionObserver(([V])=>{L=V.isIntersecting,L&&kn()});At.observe(E);let wt=()=>{document.hidden||kn()};return document.addEventListener("visibilitychange",wt),E.__lanyardState=()=>({position:F.body.position.toArray(),quaternion:F.body.quaternion.toArray(),turn:F.turn,calm:F.calm}),U.current=ai,ot(),()=>{at=!1,cancelAnimationFrame(It),U.current=null,delete E.__lanyardState,yt.disconnect(),At.disconnect(),document.removeEventListener("visibilitychange",wt),R.removeEventListener("pointerdown",O),R.removeEventListener("pointermove",B),R.removeEventListener("pointerup",P),R.removeEventListener("pointercancel",P),R.removeEventListener("lostpointercapture",P),R.removeEventListener("touchstart",I),[K,Ct,ft,bt,j,$,M].forEach(V=>V.geometry?.dispose()),[Lt,Zt,T,st,et].forEach(V=>V.dispose()),[$t,W,it,Et,gt].forEach(V=>V.dispose()),k.dispose(),S.dispose(),R.parentNode&&R.parentNode.removeChild(R)}},[]),(0,wb.jsx)("div",{ref:C,className:`lanyard ${x}`.trim(),style:D})},Ab=rN;var Ub=_r(Pc(),1),oN={imageFit:["cover","contain"],orientation:["portrait","landscape"],finish:["glossy","glossy-soft","matte","holographic","metallic"],anchor:["left","center","right"],metal:["graphite","silver","gold"]},Ma=(e,t)=>{if(e===void 0||e==="")return t;let n=Number(e);return Number.isFinite(n)?n:t},Rb=(e,t)=>e===void 0||e===""?t:e!=="false"&&e!=="0",Vc=(e,t,n)=>oN[t].includes(e)?e:n,lN=e=>{let t=e.dataset;return{frontImage:t.front,backImage:t.back,imageFit:Vc(t.imageFit,"imageFit","cover"),cardColor:t.cardColor||"#ffffff",orientation:Vc(t.orientation,"orientation","portrait"),finish:Vc(t.finish,"finish","glossy"),cornerRadius:Ma(t.cornerRadius,.3),size:Ma(t.size,.6),anchor:Vc(t.anchor,"anchor","center"),strapLength:Ma(t.strapLength,.5),strapImage:t.strapImage,strapColor:t.strapColor||"#111111",strapWidth:Ma(t.strapWidth,.65),metal:Vc(t.metal,"metal","silver"),gravity:Ma(t.gravity,1),damping:Ma(t.damping,.5),elasticity:Ma(t.elasticity,.5),breeze:Ma(t.breeze,.5),interactive:Rb(t.interactive,!0),intro:Rb(t.intro,!0)}},Db=[];for(let e of document.querySelectorAll("[data-lanyard]")){if(e.dataset.lanyardReady==="true")continue;let t=document.createElement("div");t.className="lanyard-root",e.appendChild(t);let n=lN(e);(0,Cb.createRoot)(t).render((0,Ub.jsx)(Ab,{...n})),e.dataset.lanyardReady="true",Db.push(e);let i=0,s=()=>{if(t.querySelector("canvas")){window.setTimeout(()=>e.classList.add("lanyard-live"),200),e.dispatchEvent(new CustomEvent("lanyard:ready"));return}if(++i>120){e.classList.add("lanyard-failed");return}requestAnimationFrame(s)};requestAnimationFrame(s)}window.__lanyard={mounts:Db};

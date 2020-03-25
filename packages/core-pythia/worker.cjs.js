"use strict";var e=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){var n,r=(n="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(e){var t;e=e||{},t||(t=void 0!==e?e:{});var r,a={};for(r in t)t.hasOwnProperty(r)&&(a[r]=t[r]);function i(e,t){throw t}var o,s="";s=self.location.href,n&&(s=n),s=0!==s.indexOf("blob:")?s.substr(0,s.lastIndexOf("/")+1):"",o=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)};var _=t.print||console.log.bind(console),c=t.printErr||console.warn.bind(console);for(r in a)a.hasOwnProperty(r)&&(t[r]=a[r]);a=null,t.quit&&(i=t.quit);var u,f,l=0;t.wasmBinary&&(u=t.wasmBinary),t.noExitRuntime&&(f=t.noExitRuntime),"object"!=typeof WebAssembly&&c("no native wasm support detected");var p,d,y,h,v,m,w=new WebAssembly.Table({initial:321,maximum:321,element:"anyfunc"}),b=!1,E="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function g(e,t,n){var r=t+n;for(n=t;e[n]&&!(n>=r);)++n;if(16<n-t&&e.subarray&&E)return E.decode(e.subarray(t,n));for(r="";t<n;){var a=e[t++];if(128&a){var i=63&e[t++];if(192==(224&a))r+=String.fromCharCode((31&a)<<6|i);else{var o=63&e[t++];65536>(a=224==(240&a)?(15&a)<<12|i<<6|o:(7&a)<<18|i<<12|o<<6|63&e[t++])?r+=String.fromCharCode(a):(a-=65536,r+=String.fromCharCode(55296|a>>10,56320|1023&a))}}else r+=String.fromCharCode(a)}return r}function P(e){d=e,t.HEAP8=y=new Int8Array(e),t.HEAP16=v=new Int16Array(e),t.HEAP32=m=new Int32Array(e),t.HEAPU8=h=new Uint8Array(e),t.HEAPU16=new Uint16Array(e),t.HEAPU32=new Uint32Array(e),t.HEAPF32=new Float32Array(e),t.HEAPF64=new Float64Array(e)}"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le");var A=t.INITIAL_MEMORY||16777216;function T(e){for(;0<e.length;){var n=e.shift();if("function"==typeof n)n();else{var r=n.ub;"number"==typeof r?void 0===n.bb?t.dynCall_v(r):t.dynCall_vi(r,n.bb):r(void 0===n.bb?null:n.bb)}}}(p=t.wasmMemory?t.wasmMemory:new WebAssembly.Memory({initial:A/65536}))&&(d=p.buffer),A=d.byteLength,P(d),m[16576]=5309344;var x=[],k=[],B=[],I=[];function S(){var e=t.preRun.shift();x.unshift(e)}var L=Math.abs,R=Math.ceil,M=Math.floor,C=Math.min,N=0,K=null;function H(e){throw t.onAbort&&t.onAbort(e),_(e),c(e),b=!0,new WebAssembly.RuntimeError("abort("+e+"). Build with -s ASSERTIONS=1 for more info.")}function z(){var e=Y;return String.prototype.startsWith?e.startsWith("data:application/octet-stream;base64,"):0===e.indexOf("data:application/octet-stream;base64,")}t.preloadedImages={},t.preloadedAudios={};var U,J,Y="libpythia.worker.wasm";if(!z()){var O=Y;Y=t.locateFile?t.locateFile(O,s):s+O}function j(){try{if(u)return new Uint8Array(u);if(o)return o(Y);throw"both async and sync fetching of the wasm failed"}catch(e){H(e)}}function D(e,t){for(var n=0,r=e.length-1;0<=r;r--){var a=e[r];"."===a?e.splice(r,1):".."===a?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n;n--)e.unshift("..");return e}function W(e){var t="/"===e.charAt(0),n="/"===e.substr(-1);return(e=D(e.split("/").filter((function(e){return!!e})),!t).join("/"))||t||(e="."),e&&n&&(e+="/"),(t?"/":"")+e}function F(e){var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1);return e=t[0],t=t[1],e||t?(t&&(t=t.substr(0,t.length-1)),e+t):"."}function $(e){if("/"===e)return"/";var t=e.lastIndexOf("/");return-1===t?e:e.substr(t+1)}function V(){for(var e="",t=!1,n=arguments.length-1;-1<=n&&!t;n--){if("string"!=typeof(t=0<=n?arguments[n]:"/"))throw new TypeError("Arguments to path.resolve must be strings");if(!t)return"";e=t+"/"+e,t="/"===t.charAt(0)}return(t?"/":"")+(e=D(e.split("/").filter((function(e){return!!e})),!t).join("/"))||"."}k.push({ub:function(){We()}});var Q=[];function q(e,t){Q[e]={input:[],Na:[],Va:t},ge(e,X)}var X={open:function(e){var t=Q[e.node.$a];if(!t)throw new _e(43);e.Ma=t,e.seekable=!1},close:function(e){e.Ma.Va.flush(e.Ma)},flush:function(e){e.Ma.Va.flush(e.Ma)},read:function(e,t,n,r){if(!e.Ma||!e.Ma.Va.lb)throw new _e(60);for(var a=0,i=0;i<r;i++){try{var o=e.Ma.Va.lb(e.Ma)}catch(e){throw new _e(29)}if(void 0===o&&0===a)throw new _e(6);if(null==o)break;a++,t[n+i]=o}return a&&(e.node.timestamp=Date.now()),a},write:function(e,t,n,r){if(!e.Ma||!e.Ma.Va.eb)throw new _e(60);try{for(var a=0;a<r;a++)e.Ma.Va.eb(e.Ma,t[n+a])}catch(e){throw new _e(29)}return r&&(e.node.timestamp=Date.now()),a}},Z={lb:function(e){if(!e.input.length){var t=null;if("undefined"!=typeof window&&"function"==typeof window.prompt?null!==(t=window.prompt("Input: "))&&(t+="\n"):"function"==typeof readline&&null!==(t=readline())&&(t+="\n"),!t)return null;for(var n=0,r=0;r<t.length;++r){var a=t.charCodeAt(r);55296<=a&&57343>=a&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++r)),127>=a?++n:n=2047>=a?n+2:65535>=a?n+3:n+4}var i=(n=Array(n+1)).length;if(r=0,0<i){a=r,i=r+i-1;for(var o=0;o<t.length;++o){var s=t.charCodeAt(o);if(55296<=s&&57343>=s&&(s=65536+((1023&s)<<10)|1023&t.charCodeAt(++o)),127>=s){if(r>=i)break;n[r++]=s}else{if(2047>=s){if(r+1>=i)break;n[r++]=192|s>>6}else{if(65535>=s){if(r+2>=i)break;n[r++]=224|s>>12}else{if(r+3>=i)break;n[r++]=240|s>>18,n[r++]=128|s>>12&63}n[r++]=128|s>>6&63}n[r++]=128|63&s}}n[r]=0,t=r-a}else t=0;n.length=t,e.input=n}return e.input.shift()},eb:function(e,t){null===t||10===t?(_(g(e.Na,0)),e.Na=[]):0!=t&&e.Na.push(t)},flush:function(e){e.Na&&0<e.Na.length&&(_(g(e.Na,0)),e.Na=[])}},G={eb:function(e,t){null===t||10===t?(c(g(e.Na,0)),e.Na=[]):0!=t&&e.Na.push(t)},flush:function(e){e.Na&&0<e.Na.length&&(c(g(e.Na,0)),e.Na=[])}},ee={Oa:null,Qa:function(){return ee.createNode(null,"/",16895,0)},createNode:function(e,t,n,r){if(24576==(61440&n)||4096==(61440&n))throw new _e(63);return ee.Oa||(ee.Oa={dir:{node:{Ta:ee.Ja.Ta,Pa:ee.Ja.Pa,Wa:ee.Ja.Wa,Ya:ee.Ja.Ya,qb:ee.Ja.qb,sb:ee.Ja.sb,rb:ee.Ja.rb,pb:ee.Ja.pb,ab:ee.Ja.ab},stream:{Ua:ee.Ka.Ua}},file:{node:{Ta:ee.Ja.Ta,Pa:ee.Ja.Pa},stream:{Ua:ee.Ka.Ua,read:ee.Ka.read,write:ee.Ka.write,gb:ee.Ka.gb,mb:ee.Ka.mb,ob:ee.Ka.ob}},link:{node:{Ta:ee.Ja.Ta,Pa:ee.Ja.Pa,Xa:ee.Ja.Xa},stream:{}},hb:{node:{Ta:ee.Ja.Ta,Pa:ee.Ja.Pa},stream:Ee}}),16384==(61440&(n=de(e,t,n,r)).mode)?(n.Ja=ee.Oa.dir.node,n.Ka=ee.Oa.dir.stream,n.Ia={}):32768==(61440&n.mode)?(n.Ja=ee.Oa.file.node,n.Ka=ee.Oa.file.stream,n.La=0,n.Ia=null):40960==(61440&n.mode)?(n.Ja=ee.Oa.link.node,n.Ka=ee.Oa.link.stream):8192==(61440&n.mode)&&(n.Ja=ee.Oa.hb.node,n.Ka=ee.Oa.hb.stream),n.timestamp=Date.now(),e&&(e.Ia[t]=n),n},Gb:function(e){if(e.Ia&&e.Ia.subarray){for(var t=[],n=0;n<e.La;++n)t.push(e.Ia[n]);return t}return e.Ia},Hb:function(e){return e.Ia?e.Ia.subarray?e.Ia.subarray(0,e.La):new Uint8Array(e.Ia):new Uint8Array(0)},ib:function(e,t){var n=e.Ia?e.Ia.length:0;n>=t||(t=Math.max(t,n*(1048576>n?2:1.125)|0),0!=n&&(t=Math.max(t,256)),n=e.Ia,e.Ia=new Uint8Array(t),0<e.La&&e.Ia.set(n.subarray(0,e.La),0))},yb:function(e,t){if(e.La!=t)if(0==t)e.Ia=null,e.La=0;else{if(!e.Ia||e.Ia.subarray){var n=e.Ia;e.Ia=new Uint8Array(t),n&&e.Ia.set(n.subarray(0,Math.min(t,e.La)))}else if(e.Ia||(e.Ia=[]),e.Ia.length>t)e.Ia.length=t;else for(;e.Ia.length<t;)e.Ia.push(0);e.La=t}},Ja:{Ta:function(e){var t={};return t.Fb=8192==(61440&e.mode)?e.id:1,t.Jb=e.id,t.mode=e.mode,t.Lb=1,t.uid=0,t.Ib=0,t.$a=e.$a,16384==(61440&e.mode)?t.size=4096:32768==(61440&e.mode)?t.size=e.La:40960==(61440&e.mode)?t.size=e.link.length:t.size=0,t.Cb=new Date(e.timestamp),t.Kb=new Date(e.timestamp),t.Eb=new Date(e.timestamp),t.tb=4096,t.Db=Math.ceil(t.size/t.tb),t},Pa:function(e,t){void 0!==t.mode&&(e.mode=t.mode),void 0!==t.timestamp&&(e.timestamp=t.timestamp),void 0!==t.size&&ee.yb(e,t.size)},Wa:function(){throw ce[44]},Ya:function(e,t,n,r){return ee.createNode(e,t,n,r)},qb:function(e,t,n){if(16384==(61440&e.mode)){try{var r=pe(t,n)}catch(e){}if(r)for(var a in r.Ia)throw new _e(55)}delete e.parent.Ia[e.name],e.name=n,t.Ia[n]=e,e.parent=t},sb:function(e,t){delete e.Ia[t]},rb:function(e,t){var n,r=pe(e,t);for(n in r.Ia)throw new _e(55);delete e.Ia[t]},pb:function(e){var t,n=[".",".."];for(t in e.Ia)e.Ia.hasOwnProperty(t)&&n.push(t);return n},ab:function(e,t,n){return(e=ee.createNode(e,t,41471,0)).link=n,e},Xa:function(e){if(40960!=(61440&e.mode))throw new _e(28);return e.link}},Ka:{read:function(e,t,n,r,a){var i=e.node.Ia;if(a>=e.node.La)return 0;if(8<(e=Math.min(e.node.La-a,r))&&i.subarray)t.set(i.subarray(a,a+e),n);else for(r=0;r<e;r++)t[n+r]=i[a+r];return e},write:function(e,t,n,r,a,i){if(t.buffer===y.buffer&&(i=!1),!r)return 0;if((e=e.node).timestamp=Date.now(),t.subarray&&(!e.Ia||e.Ia.subarray)){if(i)return e.Ia=t.subarray(n,n+r),e.La=r;if(0===e.La&&0===a)return e.Ia=t.slice(n,n+r),e.La=r;if(a+r<=e.La)return e.Ia.set(t.subarray(n,n+r),a),r}if(ee.ib(e,a+r),e.Ia.subarray&&t.subarray)e.Ia.set(t.subarray(n,n+r),a);else for(i=0;i<r;i++)e.Ia[a+i]=t[n+i];return e.La=Math.max(e.La,a+r),r},Ua:function(e,t,n){if(1===n?t+=e.position:2===n&&32768==(61440&e.node.mode)&&(t+=e.node.La),0>t)throw new _e(28);return t},gb:function(e,t,n){ee.ib(e.node,t+n),e.node.La=Math.max(e.node.La,t+n)},mb:function(e,t,n,r,a,i,o){if(32768!=(61440&e.node.mode))throw new _e(43);if(e=e.node.Ia,2&o||e.buffer!==t.buffer){if((0<a||a+r<e.length)&&(e=e.subarray?e.subarray(a,a+r):Array.prototype.slice.call(e,a,a+r)),a=!0,o=t.buffer==y.buffer,!(r=$e(r)))throw new _e(48);(o?y:t).set(e,r)}else a=!1,r=e.byteOffset;return{Nb:r,Bb:a}},ob:function(e,t,n,r,a){if(32768!=(61440&e.node.mode))throw new _e(43);return 2&a||ee.Ka.write(e,t,0,r,n,!1),0}}},te=null,ne={},re=[],ae=1,ie=null,oe=!0,se={},_e=null,ce={};function ue(e,t){if(t=t||{},!(e=V("/",e)))return{path:"",node:null};var n,r={kb:!0,fb:0};for(n in r)void 0===t[n]&&(t[n]=r[n]);if(8<t.fb)throw new _e(32);e=D(e.split("/").filter((function(e){return!!e})),!1);var a=te;for(r="/",n=0;n<e.length;n++){var i=n===e.length-1;if(i&&t.parent)break;if(a=pe(a,e[n]),r=W(r+"/"+e[n]),a.Za&&(!i||i&&t.kb)&&(a=a.Za.root),!i||t.jb)for(i=0;40960==(61440&a.mode);)if(a=Be(r),a=ue(r=V(F(r),a),{fb:t.fb}).node,40<i++)throw new _e(32)}return{path:r,node:a}}function fe(e){for(var t;;){if(e===e.parent)return e=e.Qa.nb,t?"/"!==e[e.length-1]?e+"/"+t:e+t:e;t=t?e.name+"/"+t:e.name,e=e.parent}}function le(e,t){for(var n=0,r=0;r<t.length;r++)n=(n<<5)-n+t.charCodeAt(r)|0;return(e+n>>>0)%ie.length}function pe(e,t){var n;if(n=(n=ve(e,"x"))?n:e.Ja.Wa?0:2)throw new _e(n,e);for(n=ie[le(e.id,t)];n;n=n.xb){var r=n.name;if(n.parent.id===e.id&&r===t)return n}return e.Ja.Wa(e,t)}function de(e,t,n,r){return t=le((e=new Oe(e,t,n,r)).parent.id,e.name),e.xb=ie[t],ie[t]=e}var ye={r:0,rs:1052672,"r+":2,w:577,wx:705,xw:705,"w+":578,"wx+":706,"xw+":706,a:1089,ax:1217,xa:1217,"a+":1090,"ax+":1218,"xa+":1218};function he(e){var t=["r","w","rw"][3&e];return 512&e&&(t+="w"),t}function ve(e,t){return oe||(-1===t.indexOf("r")||292&e.mode)&&(-1===t.indexOf("w")||146&e.mode)&&(-1===t.indexOf("x")||73&e.mode)?0:2}function me(e,t){try{return pe(e,t),20}catch(e){}return ve(e,"wx")}function we(e,t){Ne||((Ne=function(){}).prototype={});var n,r=new Ne;for(n in e)r[n]=e[n];return e=r,t=function(e){for(e=e||0;e<=4096;e++)if(!re[e])return e;throw new _e(33)}(t),e.Sa=t,re[t]=e}var be,Ee={open:function(e){e.Ka=ne[e.node.$a].Ka,e.Ka.open&&e.Ka.open(e)},Ua:function(){throw new _e(70)}};function ge(e,t){ne[e]={Ka:t}}function Pe(e,t){var n="/"===t,r=!t;if(n&&te)throw new _e(10);if(!n&&!r){var a=ue(t,{kb:!1});if(t=a.path,(a=a.node).Za)throw new _e(10);if(16384!=(61440&a.mode))throw new _e(54)}t={type:e,Mb:{},nb:t,wb:[]},(e=e.Qa(t)).Qa=t,t.root=e,n?te=e:a&&(a.Za=t,a.Qa&&a.Qa.wb.push(t))}function Ae(e,t,n){var r=ue(e,{parent:!0}).node;if(!(e=$(e))||"."===e||".."===e)throw new _e(28);var a=me(r,e);if(a)throw new _e(a);if(!r.Ja.Ya)throw new _e(63);return r.Ja.Ya(r,e,t,n)}function Te(e){Ae(e,16895,0)}function xe(e,t,n){void 0===n&&(n=t,t=438),Ae(e,8192|t,n)}function ke(e,t){if(!V(e))throw new _e(44);var n=ue(t,{parent:!0}).node;if(!n)throw new _e(44);var r=me(n,t=$(t));if(r)throw new _e(r);if(!n.Ja.ab)throw new _e(63);n.Ja.ab(n,t,e)}function Be(e){if(!(e=ue(e).node))throw new _e(44);if(!e.Ja.Xa)throw new _e(28);return V(fe(e.parent),e.Ja.Xa(e))}function Ie(e,n,r,a){if(""===e)throw new _e(44);if("string"==typeof n){var i=ye[n];if(void 0===i)throw Error("Unknown file open mode: "+n);n=i}if(r=64&n?4095&(void 0===r?438:r)|32768:0,"object"==typeof e)var o=e;else{e=W(e);try{o=ue(e,{jb:!(131072&n)}).node}catch(e){}}if(i=!1,64&n)if(o){if(128&n)throw new _e(20)}else o=Ae(e,r,0),i=!0;if(!o)throw new _e(44);if(8192==(61440&o.mode)&&(n&=-513),65536&n&&16384!=(61440&o.mode))throw new _e(54);if(!i&&(r=o?40960==(61440&o.mode)?32:16384==(61440&o.mode)&&("r"!==he(n)||512&n)?31:ve(o,he(n)):44))throw new _e(r);if(512&n){var s;if(!(s="string"==typeof(r=o)?ue(r,{jb:!0}).node:r).Ja.Pa)throw new _e(63);if(16384==(61440&s.mode))throw new _e(31);if(32768!=(61440&s.mode))throw new _e(28);if(r=ve(s,"w"))throw new _e(r);s.Ja.Pa(s,{size:0,timestamp:Date.now()})}n&=-641,(a=we({node:o,path:fe(o),flags:n,seekable:!0,position:0,Ka:o.Ka,Ab:[],error:!1},a)).Ka.open&&a.Ka.open(a),!t.logReadFiles||1&n||(Ke||(Ke={}),e in Ke||(Ke[e]=1,c("FS.trackingDelegate error on read file: "+e)));try{se.onOpenFile&&(o=0,1!=(2097155&n)&&(o|=1),0!=(2097155&n)&&(o|=2),se.onOpenFile(e,o))}catch(t){c("FS.trackingDelegate['onOpenFile']('"+e+"', flags) threw an exception: "+t.message)}return a}function Se(e,t,n){if(null===e.Sa)throw new _e(8);if(!e.seekable||!e.Ka.Ua)throw new _e(70);if(0!=n&&1!=n&&2!=n)throw new _e(28);e.position=e.Ka.Ua(e,t,n),e.Ab=[]}function Le(e,t,n,r){var a=y;if(0>n||0>r)throw new _e(28);if(null===e.Sa)throw new _e(8);if(1==(2097155&e.flags))throw new _e(8);if(16384==(61440&e.node.mode))throw new _e(31);if(!e.Ka.read)throw new _e(28);var i=void 0!==r;if(i){if(!e.seekable)throw new _e(70)}else r=e.position;return t=e.Ka.read(e,a,t,n,r),i||(e.position+=t),t}function Re(){_e||((_e=function(e,t){this.node=t,this.zb=function(e){this.Ra=e},this.zb(e),this.message="FS error"}).prototype=Error(),_e.prototype.constructor=_e,[44].forEach((function(e){ce[e]=new _e(e),ce[e].stack="<generic error, no stack>"})))}function Me(e,t,n){e=W("/dev/"+e);var r=function(e,t){var n=0;return e&&(n|=365),t&&(n|=146),n}(!!t,!!n);Ce||(Ce=64);var a=Ce++<<8|0;ge(a,{open:function(e){e.seekable=!1},close:function(){n&&n.buffer&&n.buffer.length&&n(10)},read:function(e,n,r,a){for(var i=0,o=0;o<a;o++){try{var s=t()}catch(e){throw new _e(29)}if(void 0===s&&0===i)throw new _e(6);if(null==s)break;i++,n[r+o]=s}return i&&(e.node.timestamp=Date.now()),i},write:function(e,t,r,a){for(var i=0;i<a;i++)try{n(t[r+i])}catch(e){throw new _e(29)}return a&&(e.node.timestamp=Date.now()),i}}),xe(e,r,a)}var Ce,Ne,Ke,He={},ze=void 0;function Ue(){return m[(ze+=4)-4>>2]}function Je(e){if(!(e=re[e]))throw new _e(8);return e}var Ye=0;function Oe(e,t,n,r){e||(e=this),this.parent=e,this.Qa=e.Qa,this.Za=null,this.id=ae++,this.name=t,this.mode=n,this.Ja={},this.Ka={},this.$a=r}Object.defineProperties(Oe.prototype,{read:{get:function(){return 365==(365&this.mode)},set:function(e){e?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146==(146&this.mode)},set:function(e){e?this.mode|=146:this.mode&=-147}}}),Re(),ie=Array(4096),Pe(ee,"/"),Te("/tmp"),Te("/home"),Te("/home/web_user"),function(){if(Te("/dev"),ge(259,{read:function(){return 0},write:function(e,t,n,r){return r}}),xe("/dev/null",259),q(1280,Z),q(1536,G),xe("/dev/tty",1280),xe("/dev/tty1",1536),"object"==typeof crypto&&"function"==typeof crypto.getRandomValues)var e=new Uint8Array(1),t=function(){return crypto.getRandomValues(e),e[0]};t||(t=function(){H("random_device")}),Me("random",t),Me("urandom",t),Te("/dev/shm"),Te("/dev/shm/tmp")}(),Te("/proc"),Te("/proc/self"),Te("/proc/self/fd"),Pe({Qa:function(){var e=de("/proc/self","fd",16895,73);return e.Ja={Wa:function(e,t){var n=re[+t];if(!n)throw new _e(8);return(e={parent:null,Qa:{nb:"fake"},Ja:{Xa:function(){return n.path}}}).parent=e}},e}},"/proc/self/fd");var je={w:function(e,n,r){ze=r;try{var a=Je(e);switch(n){case 0:var i=Ue();return 0>i?-28:Ie(a.path,a.flags,0,i).Sa;case 1:case 2:return 0;case 3:return a.flags;case 4:return i=Ue(),a.flags|=i,0;case 12:return i=Ue(),v[i+0>>1]=2,0;case 13:case 14:return 0;case 16:case 8:return-28;case 9:return t.___errno_location&&(m[t.___errno_location()>>2]=28),-1;default:return-28}}catch(e){return void 0!==He&&e instanceof _e||H(e),-e.Ra}},D:function(e,t,n){try{return Le(Je(e),t,n)}catch(e){return void 0!==He&&e instanceof _e||H(e),-e.Ra}},z:function(e,t,n){ze=n;try{return Ie(e?g(h,e,void 0):"",t,Ue()).Sa}catch(e){return void 0!==He&&e instanceof _e||H(e),-e.Ra}},C:function(e,t,n){ze=n;try{var r=Je(e);switch(t){case 21509:case 21505:return r.Ma?0:-59;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return r.Ma?0:-59;case 21519:if(!r.Ma)return-59;var a=Ue();return m[a>>2]=0;case 21520:return r.Ma?-28:-59;case 21531:if(e=a=Ue(),!r.Ka.vb)throw new _e(59);return r.Ka.vb(r,t,e);case 21523:case 21524:return r.Ma?0:-59;default:H("bad ioctl syscall "+t)}}catch(e){return void 0!==He&&e instanceof _e||H(e),-e.Ra}},t:function(){H()},h:function(e,t){throw Fe(e,t||1),"longjmp"},E:function(e,t,n){h.copyWithin(e,t,t+n)},F:function(e){var t=h.length;if(2147418112<e)return!1;for(var n=1;4>=n;n*=2){var r=t*(1+.2/n);r=Math.min(r,e+100663296),0<(r=Math.max(16777216,e,r))%65536&&(r+=65536-r%65536);e:{try{p.grow(Math.min(2147418112,r)-d.byteLength+65535>>16),P(p.buffer);var a=1;break e}catch(e){}a=void 0}if(a)return!0}return!1},m:function(e){!f&&(b=!0,t.onExit)&&t.onExit(e),i(e,new lt(e))},s:function(e){try{var t=Je(e);if(null===t.Sa)throw new _e(8);t.cb&&(t.cb=null);try{t.Ka.close&&t.Ka.close(t)}catch(e){throw e}finally{re[t.Sa]=null}return t.Sa=null,0}catch(e){return void 0!==He&&e instanceof _e||H(e),e.Ra}},B:function(e,t,n,r){try{e:{for(var a=Je(e),i=e=0;i<n;i++){var o=m[t+(8*i+4)>>2],s=Le(a,m[t+8*i>>2],o,void 0);if(0>s){var _=-1;break e}if(e+=s,s<o)break}_=e}return m[r>>2]=_,0}catch(e){return void 0!==He&&e instanceof _e||H(e),e.Ra}},A:function(e,t,n,r,a){try{var i=Je(e);return-9007199254740992>=(e=4294967296*n+(t>>>0))||9007199254740992<=e?-61:(Se(i,e,r),J=[i.position>>>0,(U=i.position,1<=+L(U)?0<U?(0|C(+M(U/4294967296),4294967295))>>>0:~~+R((U-+(~~U>>>0))/4294967296)>>>0:0)],m[a>>2]=J[0],m[a+4>>2]=J[1],i.cb&&0===e&&0===r&&(i.cb=null),0)}catch(e){return void 0!==He&&e instanceof _e||H(e),e.Ra}},v:function(e,t,n,r){try{e:{for(var a=Je(e),i=e=0;i<n;i++){var o=a,s=m[t+8*i>>2],_=m[t+(8*i+4)>>2],u=void 0,f=y;if(0>_||0>u)throw new _e(28);if(null===o.Sa)throw new _e(8);if(0==(2097155&o.flags))throw new _e(8);if(16384==(61440&o.node.mode))throw new _e(31);if(!o.Ka.write)throw new _e(28);1024&o.flags&&Se(o,0,2);var l=void 0!==u;if(l){if(!o.seekable)throw new _e(70)}else u=o.position;var p=o.Ka.write(o,f,s,_,u,void 0);l||(o.position+=p);try{o.path&&se.onWriteToFile&&se.onWriteToFile(o.path)}catch(e){c("FS.trackingDelegate['onWriteToFile']('"+o.path+"') threw an exception: "+e.message)}var d=p;if(0>d){var h=-1;break e}e+=d}h=e}return m[r>>2]=h,0}catch(e){return void 0!==He&&e instanceof _e||H(e),e.Ra}},a:function(){return 0|l},x:function(e){var t=Date.now();return m[e>>2]=t/1e3|0,m[e+4>>2]=t%1e3*1e3|0,0},g:function(e){var t=ct();try{return at(e)}catch(e){if(ft(t),e!==e+0&&"longjmp"!==e)throw e;Fe(1,0)}},j:function(e,t){var n=ct();try{return it(e,t)}catch(e){if(ft(n),e!==e+0&&"longjmp"!==e)throw e;Fe(1,0)}},i:function(e,t,n){var r=ct();try{return ot(e,t,n)}catch(e){if(ft(r),e!==e+0&&"longjmp"!==e)throw e;Fe(1,0)}},q:function(e,t,n,r){var a=ct();try{return st(e,t,n,r)}catch(e){if(ft(a),e!==e+0&&"longjmp"!==e)throw e;Fe(1,0)}},y:function(e,t,n,r,a){var i=ct();try{return _t(e,t,n,r,a)}catch(e){if(ft(i),e!==e+0&&"longjmp"!==e)throw e;Fe(1,0)}},n:function(e){var t=ct();try{Qe(e)}catch(e){if(ft(t),e!==e+0&&"longjmp"!==e)throw e;Fe(1,0)}},e:function(e,t){var n=ct();try{qe(e,t)}catch(e){if(ft(n),e!==e+0&&"longjmp"!==e)throw e;Fe(1,0)}},d:function(e,t,n){var r=ct();try{Xe(e,t,n)}catch(e){if(ft(r),e!==e+0&&"longjmp"!==e)throw e;Fe(1,0)}},f:function(e,t,n,r){var a=ct();try{Ze(e,t,n,r)}catch(e){if(ft(a),e!==e+0&&"longjmp"!==e)throw e;Fe(1,0)}},l:function(e,t,n,r,a){var i=ct();try{Ge(e,t,n,r,a)}catch(e){if(ft(i),e!==e+0&&"longjmp"!==e)throw e;Fe(1,0)}},o:function(e,t,n,r,a,i){var o=ct();try{et(e,t,n,r,a,i)}catch(e){if(ft(o),e!==e+0&&"longjmp"!==e)throw e;Fe(1,0)}},p:function(e,t,n,r,a,i,o){var s=ct();try{tt(e,t,n,r,a,i,o)}catch(e){if(ft(s),e!==e+0&&"longjmp"!==e)throw e;Fe(1,0)}},r:function(e,t,n,r,a,i,o,s){var _=ct();try{nt(e,t,n,r,a,i,o,s)}catch(e){if(ft(_),e!==e+0&&"longjmp"!==e)throw e;Fe(1,0)}},u:function(e,t,n,r,a,i,o,s,_){var c=ct();try{rt(e,t,n,r,a,i,o,s,_)}catch(e){if(ft(c),e!==e+0&&"longjmp"!==e)throw e;Fe(1,0)}},memory:p,k:function e(t,n,r,a){n|=0,r|=0,a|=0;var i=0;for(Ye=Ye+1|0,m[(t|=0)>>2]=Ye;(0|i)<(0|a);){if(0==(0|m[r+(i<<3)>>2]))return m[r+(i<<3)>>2]=Ye,m[r+(4+(i<<3))>>2]=n,m[r+(8+(i<<3))>>2]=0,l=0|a,0|r;i=i+1|0}return r=0|e(0|t,0|n,0|(r=0|Ve(0|r,8*(1+(a=2*a|0)|0)|0)),0|a),l=0|a,0|r},b:function(e){l=0|e},table:w,c:function(e,t,n){e|=0,t|=0,n|=0;for(var r,a=0;(0|a)<(0|n)&&0!=(0|(r=0|m[t+(a<<3)>>2]));){if((0|r)==(0|e))return 0|m[t+(4+(a<<3))>>2];a=a+1|0}return 0}},De=function(){function e(e){t.asm=e.exports,N--,t.monitorRunDependencies&&t.monitorRunDependencies(N),0==N&&K&&(e=K,K=null,e())}function n(t){e(t.instance)}function r(e){return(u||"function"!=typeof fetch?new Promise((function(e){e(j())})):fetch(Y,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at '"+Y+"'";return e.arrayBuffer()})).catch((function(){return j()}))).then((function(e){return WebAssembly.instantiate(e,a)})).then(e,(function(e){c("failed to asynchronously prepare wasm: "+e),H(e)}))}var a={a:je};if(N++,t.monitorRunDependencies&&t.monitorRunDependencies(N),t.instantiateWasm)try{return t.instantiateWasm(a,e)}catch(e){return c("Module.instantiateWasm callback failed with error: "+e),!1}return function(){if(u||"function"!=typeof WebAssembly.instantiateStreaming||z()||"function"!=typeof fetch)return r(n);fetch(Y,{credentials:"same-origin"}).then((function(e){return WebAssembly.instantiateStreaming(e,a).then(n,(function(e){c("wasm streaming compile failed: "+e),c("falling back to ArrayBuffer instantiation"),r(n)}))}))}(),{}}();t.asm=De;var We=t.___wasm_call_ctors=function(){return(We=t.___wasm_call_ctors=t.asm.G).apply(null,arguments)};t._vscp_error_ctx_size=function(){return(t._vscp_error_ctx_size=t.asm.H).apply(null,arguments)},t._vscp_error_reset=function(){return(t._vscp_error_reset=t.asm.I).apply(null,arguments)},t._vscp_error_status=function(){return(t._vscp_error_status=t.asm.J).apply(null,arguments)},t._vscp_pythia_configure=function(){return(t._vscp_pythia_configure=t.asm.K).apply(null,arguments)},t._vscp_pythia_cleanup=function(){return(t._vscp_pythia_cleanup=t.asm.L).apply(null,arguments)},t._vscp_pythia_blinded_password_buf_len=function(){return(t._vscp_pythia_blinded_password_buf_len=t.asm.M).apply(null,arguments)},t._vscp_pythia_deblinded_password_buf_len=function(){return(t._vscp_pythia_deblinded_password_buf_len=t.asm.N).apply(null,arguments)},t._vscp_pythia_blinding_secret_buf_len=function(){return(t._vscp_pythia_blinding_secret_buf_len=t.asm.O).apply(null,arguments)},t._vscp_pythia_transformation_private_key_buf_len=function(){return(t._vscp_pythia_transformation_private_key_buf_len=t.asm.P).apply(null,arguments)},t._vscp_pythia_transformation_public_key_buf_len=function(){return(t._vscp_pythia_transformation_public_key_buf_len=t.asm.Q).apply(null,arguments)},t._vscp_pythia_transformed_password_buf_len=function(){return(t._vscp_pythia_transformed_password_buf_len=t.asm.R).apply(null,arguments)},t._vscp_pythia_transformed_tweak_buf_len=function(){return(t._vscp_pythia_transformed_tweak_buf_len=t.asm.S).apply(null,arguments)},t._vscp_pythia_proof_value_buf_len=function(){return(t._vscp_pythia_proof_value_buf_len=t.asm.T).apply(null,arguments)},t._vscp_pythia_password_update_token_buf_len=function(){return(t._vscp_pythia_password_update_token_buf_len=t.asm.U).apply(null,arguments)},t._vscp_pythia_blind=function(){return(t._vscp_pythia_blind=t.asm.V).apply(null,arguments)},t._vscp_pythia_deblind=function(){return(t._vscp_pythia_deblind=t.asm.W).apply(null,arguments)},t._vscp_pythia_compute_transformation_key_pair=function(){return(t._vscp_pythia_compute_transformation_key_pair=t.asm.X).apply(null,arguments)},t._vscp_pythia_transform=function(){return(t._vscp_pythia_transform=t.asm.Y).apply(null,arguments)},t._vscp_pythia_prove=function(){return(t._vscp_pythia_prove=t.asm.Z).apply(null,arguments)},t._vscp_pythia_verify=function(){return(t._vscp_pythia_verify=t.asm._).apply(null,arguments)},t._vscp_pythia_get_password_update_token=function(){return(t._vscp_pythia_get_password_update_token=t.asm.$).apply(null,arguments)},t._vscp_pythia_update_deblinded_with_token=function(){return(t._vscp_pythia_update_deblinded_with_token=t.asm.aa).apply(null,arguments)},t._vsc_buffer_new=function(){return(t._vsc_buffer_new=t.asm.ba).apply(null,arguments)},t._vsc_buffer_new_with_capacity=function(){return(t._vsc_buffer_new_with_capacity=t.asm.ca).apply(null,arguments)},t._vsc_buffer_delete=function(){return(t._vsc_buffer_delete=t.asm.da).apply(null,arguments)},t._vsc_buffer_data=function(){return(t._vsc_buffer_data=t.asm.ea).apply(null,arguments)},t._vsc_buffer_make_secure=function(){return(t._vsc_buffer_make_secure=t.asm.fa).apply(null,arguments)},t._vsc_buffer_bytes=function(){return(t._vsc_buffer_bytes=t.asm.ga).apply(null,arguments)},t._vsc_buffer_len=function(){return(t._vsc_buffer_len=t.asm.ha).apply(null,arguments)},t._vsc_data_ctx_size=function(){return(t._vsc_data_ctx_size=t.asm.ia).apply(null,arguments)},t._vsc_data=function(){return(t._vsc_data=t.asm.ja).apply(null,arguments)},t._vsc_data_len=function(){return(t._vsc_data_len=t.asm.ka).apply(null,arguments)},t._vsc_data_bytes=function(){return(t._vsc_data_bytes=t.asm.la).apply(null,arguments)},t.___errno_location=function(){return(t.___errno_location=t.asm.ma).apply(null,arguments)};var Fe=t._setThrew=function(){return(Fe=t._setThrew=t.asm.na).apply(null,arguments)},$e=t._malloc=function(){return($e=t._malloc=t.asm.oa).apply(null,arguments)};t._free=function(){return(t._free=t.asm.pa).apply(null,arguments)};var Ve=t._realloc=function(){return(Ve=t._realloc=t.asm.qa).apply(null,arguments)},Qe=t.dynCall_v=function(){return(Qe=t.dynCall_v=t.asm.ra).apply(null,arguments)},qe=t.dynCall_vi=function(){return(qe=t.dynCall_vi=t.asm.sa).apply(null,arguments)},Xe=t.dynCall_vii=function(){return(Xe=t.dynCall_vii=t.asm.ta).apply(null,arguments)},Ze=t.dynCall_viii=function(){return(Ze=t.dynCall_viii=t.asm.ua).apply(null,arguments)},Ge=t.dynCall_viiii=function(){return(Ge=t.dynCall_viiii=t.asm.va).apply(null,arguments)},et=t.dynCall_viiiii=function(){return(et=t.dynCall_viiiii=t.asm.wa).apply(null,arguments)},tt=t.dynCall_viiiiii=function(){return(tt=t.dynCall_viiiiii=t.asm.xa).apply(null,arguments)},nt=t.dynCall_viiiiiii=function(){return(nt=t.dynCall_viiiiiii=t.asm.ya).apply(null,arguments)},rt=t.dynCall_viiiiiiii=function(){return(rt=t.dynCall_viiiiiiii=t.asm.za).apply(null,arguments)},at=t.dynCall_i=function(){return(at=t.dynCall_i=t.asm.Aa).apply(null,arguments)},it=t.dynCall_ii=function(){return(it=t.dynCall_ii=t.asm.Ba).apply(null,arguments)},ot=t.dynCall_iii=function(){return(ot=t.dynCall_iii=t.asm.Ca).apply(null,arguments)},st=t.dynCall_iiii=function(){return(st=t.dynCall_iiii=t.asm.Da).apply(null,arguments)},_t=t.dynCall_iiiii=function(){return(_t=t.dynCall_iiiii=t.asm.Ea).apply(null,arguments)},ct=t.stackSave=function(){return(ct=t.stackSave=t.asm.Fa).apply(null,arguments)};t.stackAlloc=function(){return(t.stackAlloc=t.asm.Ga).apply(null,arguments)};var ut,ft=t.stackRestore=function(){return(ft=t.stackRestore=t.asm.Ha).apply(null,arguments)};function lt(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function pt(){function e(){if(!ut&&(ut=!0,t.calledRun=!0,!b)){if(t.noFSInit||be||(be=!0,Re(),t.stdin=t.stdin,t.stdout=t.stdout,t.stderr=t.stderr,t.stdin?Me("stdin",t.stdin):ke("/dev/tty","/dev/stdin"),t.stdout?Me("stdout",null,t.stdout):ke("/dev/tty","/dev/stdout"),t.stderr?Me("stderr",null,t.stderr):ke("/dev/tty1","/dev/stderr"),Ie("/dev/stdin","r"),Ie("/dev/stdout","w"),Ie("/dev/stderr","w")),T(k),oe=!1,T(B),t.onRuntimeInitialized&&t.onRuntimeInitialized(),t.postRun)for("function"==typeof t.postRun&&(t.postRun=[t.postRun]);t.postRun.length;){var e=t.postRun.shift();I.unshift(e)}T(I)}}if(!(0<N)){if(t.preRun)for("function"==typeof t.preRun&&(t.preRun=[t.preRun]);t.preRun.length;)S();T(x),0<N||(t.setStatus?(t.setStatus("Running..."),setTimeout((function(){setTimeout((function(){t.setStatus("")}),1),e()}),1)):e())}}if(t.asm=De,t.then=function(e){if(ut)e(t);else{var n=t.onRuntimeInitialized;t.onRuntimeInitialized=function(){n&&n(),e(t)}}return t},K=function e(){ut||pt(),ut||(K=e)},t.run=pt,t.preInit)for("function"==typeof t.preInit&&(t.preInit=[t.preInit]);0<t.preInit.length;)t.preInit.pop()();return f=!0,pt(),e});e.exports=r}));var t=(e,t)=>{class n extends Error{constructor(e){super(e),this.name="PythiaError",this.message=e}static handleStatusCode(e){if(0!=e){if(-1==e)throw new n("This error should not be returned if assertions is enabled.");if(-200==e)throw new n("Underlying pythia library returns -1.");if(-202==e)throw new n("Underlying random number generator failed.");throw new n("Unexpected status code:"+e)}}}return n};function n(e,t){if(!("number"==typeof t||t instanceof Number))throw new TypeError(`'${e}' is not a number`);if(Number.isNaN(t))throw new TypeError(`'${e}' is NaN`);if(t===1/0)throw new TypeError(`'${e}' is Infinity`);if(t===-1/0)throw new TypeError(`'${e}' is -Infinity`)}function r(e,t){if(n(e,t),0==t)throw new TypeError(`'${e}' is NULL`)}var a={ensureNumber:n,ensureString:function(e,t){if(!("string"==typeof t||t instanceof String))throw new TypeError(`'${e}' is not a string`)},ensureBoolean:function(e,t){if("boolean"!=typeof t)throw new TypeError(`'${e}' is not a boolean`)},ensureByteArray:function(e,t){if(!(t instanceof Uint8Array))throw new TypeError(`'${e}' is not an Uint8Array`)},ensureClass:function(e,t,n){if(!(t instanceof n))throw new TypeError(`'${e}' is not an instance of the class ${n.name}`);r(e,t.ctxPtr)},ensureNotNull:r,ensureImplementInterface:function(e,t,n,a,i){if(r(e,t.ctxPtr),!i.isImplemented(t.ctxPtr,a))throw new TypeError(`'${e}' does not implement interface '${n}'`)}};var i=(e,t)=>class{static configure(){const n=e._vscp_pythia_configure();t.PythiaError.handleStatusCode(n)}static cleanup(){e._vscp_pythia_cleanup()}static blindedPasswordBufLen(){let t;return t=e._vscp_pythia_blinded_password_buf_len(),t}static deblindedPasswordBufLen(){let t;return t=e._vscp_pythia_deblinded_password_buf_len(),t}static blindingSecretBufLen(){let t;return t=e._vscp_pythia_blinding_secret_buf_len(),t}static transformationPrivateKeyBufLen(){let t;return t=e._vscp_pythia_transformation_private_key_buf_len(),t}static transformationPublicKeyBufLen(){let t;return t=e._vscp_pythia_transformation_public_key_buf_len(),t}static transformedPasswordBufLen(){let t;return t=e._vscp_pythia_transformed_password_buf_len(),t}static transformedTweakBufLen(){let t;return t=e._vscp_pythia_transformed_tweak_buf_len(),t}static proofValueBufLen(){let t;return t=e._vscp_pythia_proof_value_buf_len(),t}static passwordUpdateTokenBufLen(){let t;return t=e._vscp_pythia_password_update_token_buf_len(),t}static blind(n){a.ensureByteArray("password",n);const r=n.length*n.BYTES_PER_ELEMENT,i=e._malloc(r);e.HEAP8.set(n,i);const o=e._vsc_data_ctx_size(),s=e._malloc(o);e._vsc_data(s,i,r);const _=t.Pythia.blindedPasswordBufLen(),c=e._vsc_buffer_new_with_capacity(_),u=t.Pythia.blindingSecretBufLen(),f=e._vsc_buffer_new_with_capacity(u);try{const n=e._vscp_pythia_blind(s,c,f);t.PythiaError.handleStatusCode(n);const r=e._vsc_buffer_bytes(c),a=e._vsc_buffer_len(c),o=e.HEAPU8.slice(r,r+a),_=e._vsc_buffer_bytes(f),u=e._vsc_buffer_len(f);return{blindedPassword:o,blindingSecret:e.HEAPU8.slice(_,_+u)}}finally{e._free(i),e._free(s),e._vsc_buffer_delete(c),e._vsc_buffer_delete(f)}}static deblind(n,r){a.ensureByteArray("transformedPassword",n),a.ensureByteArray("blindingSecret",r);const i=n.length*n.BYTES_PER_ELEMENT,o=e._malloc(i);e.HEAP8.set(n,o);const s=e._vsc_data_ctx_size(),_=e._malloc(s);e._vsc_data(_,o,i);const c=r.length*r.BYTES_PER_ELEMENT,u=e._malloc(c);e.HEAP8.set(r,u);const f=e._vsc_data_ctx_size(),l=e._malloc(f);e._vsc_data(l,u,c);const p=t.Pythia.deblindedPasswordBufLen(),d=e._vsc_buffer_new_with_capacity(p);try{const n=e._vscp_pythia_deblind(_,l,d);t.PythiaError.handleStatusCode(n);const r=e._vsc_buffer_bytes(d),a=e._vsc_buffer_len(d);return e.HEAPU8.slice(r,r+a)}finally{e._free(o),e._free(_),e._free(u),e._free(l),e._vsc_buffer_delete(d)}}static computeTransformationKeyPair(n,r,i){a.ensureByteArray("transformationKeyId",n),a.ensureByteArray("pythiaSecret",r),a.ensureByteArray("pythiaScopeSecret",i);const o=n.length*n.BYTES_PER_ELEMENT,s=e._malloc(o);e.HEAP8.set(n,s);const _=e._vsc_data_ctx_size(),c=e._malloc(_);e._vsc_data(c,s,o);const u=r.length*r.BYTES_PER_ELEMENT,f=e._malloc(u);e.HEAP8.set(r,f);const l=e._vsc_data_ctx_size(),p=e._malloc(l);e._vsc_data(p,f,u);const d=i.length*i.BYTES_PER_ELEMENT,y=e._malloc(d);e.HEAP8.set(i,y);const h=e._vsc_data_ctx_size(),v=e._malloc(h);e._vsc_data(v,y,d);const m=t.Pythia.transformationPrivateKeyBufLen(),w=e._vsc_buffer_new_with_capacity(m),b=t.Pythia.transformationPublicKeyBufLen(),E=e._vsc_buffer_new_with_capacity(b);try{const n=e._vscp_pythia_compute_transformation_key_pair(c,p,v,w,E);t.PythiaError.handleStatusCode(n);const r=e._vsc_buffer_bytes(w),a=e._vsc_buffer_len(w),i=e.HEAPU8.slice(r,r+a),o=e._vsc_buffer_bytes(E),_=e._vsc_buffer_len(E);return{transformationPrivateKey:i,transformationPublicKey:e.HEAPU8.slice(o,o+_)}}finally{e._free(s),e._free(c),e._free(f),e._free(p),e._free(y),e._free(v),e._vsc_buffer_delete(w),e._vsc_buffer_delete(E)}}static transform(n,r,i){a.ensureByteArray("blindedPassword",n),a.ensureByteArray("tweak",r),a.ensureByteArray("transformationPrivateKey",i);const o=n.length*n.BYTES_PER_ELEMENT,s=e._malloc(o);e.HEAP8.set(n,s);const _=e._vsc_data_ctx_size(),c=e._malloc(_);e._vsc_data(c,s,o);const u=r.length*r.BYTES_PER_ELEMENT,f=e._malloc(u);e.HEAP8.set(r,f);const l=e._vsc_data_ctx_size(),p=e._malloc(l);e._vsc_data(p,f,u);const d=i.length*i.BYTES_PER_ELEMENT,y=e._malloc(d);e.HEAP8.set(i,y);const h=e._vsc_data_ctx_size(),v=e._malloc(h);e._vsc_data(v,y,d);const m=t.Pythia.transformedPasswordBufLen(),w=e._vsc_buffer_new_with_capacity(m),b=t.Pythia.transformedTweakBufLen(),E=e._vsc_buffer_new_with_capacity(b);try{const n=e._vscp_pythia_transform(c,p,v,w,E);t.PythiaError.handleStatusCode(n);const r=e._vsc_buffer_bytes(w),a=e._vsc_buffer_len(w),i=e.HEAPU8.slice(r,r+a),o=e._vsc_buffer_bytes(E),_=e._vsc_buffer_len(E);return{transformedPassword:i,transformedTweak:e.HEAPU8.slice(o,o+_)}}finally{e._free(s),e._free(c),e._free(f),e._free(p),e._free(y),e._free(v),e._vsc_buffer_delete(w),e._vsc_buffer_delete(E)}}static prove(n,r,i,o,s){a.ensureByteArray("transformedPassword",n),a.ensureByteArray("blindedPassword",r),a.ensureByteArray("transformedTweak",i),a.ensureByteArray("transformationPrivateKey",o),a.ensureByteArray("transformationPublicKey",s);const _=n.length*n.BYTES_PER_ELEMENT,c=e._malloc(_);e.HEAP8.set(n,c);const u=e._vsc_data_ctx_size(),f=e._malloc(u);e._vsc_data(f,c,_);const l=r.length*r.BYTES_PER_ELEMENT,p=e._malloc(l);e.HEAP8.set(r,p);const d=e._vsc_data_ctx_size(),y=e._malloc(d);e._vsc_data(y,p,l);const h=i.length*i.BYTES_PER_ELEMENT,v=e._malloc(h);e.HEAP8.set(i,v);const m=e._vsc_data_ctx_size(),w=e._malloc(m);e._vsc_data(w,v,h);const b=o.length*o.BYTES_PER_ELEMENT,E=e._malloc(b);e.HEAP8.set(o,E);const g=e._vsc_data_ctx_size(),P=e._malloc(g);e._vsc_data(P,E,b);const A=s.length*s.BYTES_PER_ELEMENT,T=e._malloc(A);e.HEAP8.set(s,T);const x=e._vsc_data_ctx_size(),k=e._malloc(x);e._vsc_data(k,T,A);const B=t.Pythia.proofValueBufLen(),I=e._vsc_buffer_new_with_capacity(B),S=t.Pythia.proofValueBufLen(),L=e._vsc_buffer_new_with_capacity(S);try{const n=e._vscp_pythia_prove(f,y,w,P,k,I,L);t.PythiaError.handleStatusCode(n);const r=e._vsc_buffer_bytes(I),a=e._vsc_buffer_len(I),i=e.HEAPU8.slice(r,r+a),o=e._vsc_buffer_bytes(L),s=e._vsc_buffer_len(L);return{proofValueC:i,proofValueU:e.HEAPU8.slice(o,o+s)}}finally{e._free(c),e._free(f),e._free(p),e._free(y),e._free(v),e._free(w),e._free(E),e._free(P),e._free(T),e._free(k),e._vsc_buffer_delete(I),e._vsc_buffer_delete(L)}}static verify(n,r,i,o,s,_){a.ensureByteArray("transformedPassword",n),a.ensureByteArray("blindedPassword",r),a.ensureByteArray("tweak",i),a.ensureByteArray("transformationPublicKey",o),a.ensureByteArray("proofValueC",s),a.ensureByteArray("proofValueU",_);const c=n.length*n.BYTES_PER_ELEMENT,u=e._malloc(c);e.HEAP8.set(n,u);const f=e._vsc_data_ctx_size(),l=e._malloc(f);e._vsc_data(l,u,c);const p=r.length*r.BYTES_PER_ELEMENT,d=e._malloc(p);e.HEAP8.set(r,d);const y=e._vsc_data_ctx_size(),h=e._malloc(y);e._vsc_data(h,d,p);const v=i.length*i.BYTES_PER_ELEMENT,m=e._malloc(v);e.HEAP8.set(i,m);const w=e._vsc_data_ctx_size(),b=e._malloc(w);e._vsc_data(b,m,v);const E=o.length*o.BYTES_PER_ELEMENT,g=e._malloc(E);e.HEAP8.set(o,g);const P=e._vsc_data_ctx_size(),A=e._malloc(P);e._vsc_data(A,g,E);const T=s.length*s.BYTES_PER_ELEMENT,x=e._malloc(T);e.HEAP8.set(s,x);const k=e._vsc_data_ctx_size(),B=e._malloc(k);e._vsc_data(B,x,T);const I=_.length*_.BYTES_PER_ELEMENT,S=e._malloc(I);e.HEAP8.set(_,S);const L=e._vsc_data_ctx_size(),R=e._malloc(L);e._vsc_data(R,S,I);const M=e._vscp_error_ctx_size(),C=e._malloc(M);let N;e._vscp_error_reset(C);try{N=e._vscp_pythia_verify(l,h,b,A,B,R,C);const n=e._vscp_error_status(C);return t.PythiaError.handleStatusCode(n),!!N}finally{e._free(u),e._free(l),e._free(d),e._free(h),e._free(m),e._free(b),e._free(g),e._free(A),e._free(x),e._free(B),e._free(S),e._free(R),e._free(C)}}static getPasswordUpdateToken(n,r){a.ensureByteArray("previousTransformationPrivateKey",n),a.ensureByteArray("newTransformationPrivateKey",r);const i=n.length*n.BYTES_PER_ELEMENT,o=e._malloc(i);e.HEAP8.set(n,o);const s=e._vsc_data_ctx_size(),_=e._malloc(s);e._vsc_data(_,o,i);const c=r.length*r.BYTES_PER_ELEMENT,u=e._malloc(c);e.HEAP8.set(r,u);const f=e._vsc_data_ctx_size(),l=e._malloc(f);e._vsc_data(l,u,c);const p=t.Pythia.passwordUpdateTokenBufLen(),d=e._vsc_buffer_new_with_capacity(p);try{const n=e._vscp_pythia_get_password_update_token(_,l,d);t.PythiaError.handleStatusCode(n);const r=e._vsc_buffer_bytes(d),a=e._vsc_buffer_len(d);return e.HEAPU8.slice(r,r+a)}finally{e._free(o),e._free(_),e._free(u),e._free(l),e._vsc_buffer_delete(d)}}static updateDeblindedWithToken(n,r){a.ensureByteArray("deblindedPassword",n),a.ensureByteArray("passwordUpdateToken",r);const i=n.length*n.BYTES_PER_ELEMENT,o=e._malloc(i);e.HEAP8.set(n,o);const s=e._vsc_data_ctx_size(),_=e._malloc(s);e._vsc_data(_,o,i);const c=r.length*r.BYTES_PER_ELEMENT,u=e._malloc(c);e.HEAP8.set(r,u);const f=e._vsc_data_ctx_size(),l=e._malloc(f);e._vsc_data(l,u,c);const p=t.Pythia.deblindedPasswordBufLen(),d=e._vsc_buffer_new_with_capacity(p);try{const n=e._vscp_pythia_update_deblinded_with_token(_,l,d);t.PythiaError.handleStatusCode(n);const r=e._vsc_buffer_bytes(d),a=e._vsc_buffer_len(d);return e.HEAPU8.slice(r,r+a)}finally{e._free(o),e._free(_),e._free(u),e._free(l),e._vsc_buffer_delete(d)}}};var o=n=>{const r=new e(n);return new Promise((e,n)=>{r.onRuntimeInitialized=()=>{const n={};n.PythiaError=t(),n.Pythia=i(r,n),e(n)},r.onAbort=e=>{n(new Error(e))}})};module.exports=o;

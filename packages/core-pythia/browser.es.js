var e=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){var n,r=(n="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(e){var t;e=e||{},t||(t=void 0!==e?e:{});var r,a={};for(r in t)t.hasOwnProperty(r)&&(a[r]=t[r]);function o(e,t){throw t}var i="";document.currentScript&&(i=document.currentScript.src),n&&(i=n),i=0!==i.indexOf("blob:")?i.substr(0,i.lastIndexOf("/")+1):"";var s=t.print||console.log.bind(console),c=t.printErr||console.warn.bind(console);for(r in a)a.hasOwnProperty(r)&&(t[r]=a[r]);a=null,t.quit&&(o=t.quit);var u,f,l=0;t.wasmBinary&&(u=t.wasmBinary),t.noExitRuntime&&(f=t.noExitRuntime),"object"!=typeof WebAssembly&&c("no native wasm support detected");var _,d,p,y,h,m,v=new WebAssembly.Table({initial:321,maximum:321,element:"anyfunc"}),w=!1,b="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function E(e,t,n){var r=t+n;for(n=t;e[n]&&!(n>=r);)++n;if(16<n-t&&e.subarray&&b)return b.decode(e.subarray(t,n));for(r="";t<n;){var a=e[t++];if(128&a){var o=63&e[t++];if(192==(224&a))r+=String.fromCharCode((31&a)<<6|o);else{var i=63&e[t++];65536>(a=224==(240&a)?(15&a)<<12|o<<6|i:(7&a)<<18|o<<12|i<<6|63&e[t++])?r+=String.fromCharCode(a):(a-=65536,r+=String.fromCharCode(55296|a>>10,56320|1023&a))}}else r+=String.fromCharCode(a)}return r}function g(e){return 0<e%65536&&(e+=65536-e%65536),e}function P(e){d=e,t.HEAP8=p=new Int8Array(e),t.HEAP16=h=new Int16Array(e),t.HEAP32=m=new Int32Array(e),t.HEAPU8=y=new Uint8Array(e),t.HEAPU16=new Uint16Array(e),t.HEAPU32=new Uint32Array(e),t.HEAPF32=new Float32Array(e),t.HEAPF64=new Float64Array(e)}"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le");var A=t.TOTAL_MEMORY||16777216;function T(e){for(;0<e.length;){var n=e.shift();if("function"==typeof n)n();else{var r=n.wb;"number"==typeof r?void 0===n.eb?t.dynCall_v(r):t.dynCall_vi(r,n.eb):r(void 0===n.eb?null:n.eb)}}}(_=t.wasmMemory?t.wasmMemory:new WebAssembly.Memory({initial:A/65536}))&&(d=_.buffer),A=d.byteLength,P(d),m[16580]=5309360;var L=[],B=[],x=[],S=[];function M(){var e=t.preRun.shift();L.unshift(e)}var k=Math.abs,R=Math.ceil,N=Math.floor,K=Math.min,U=0,C=null;function H(e){throw t.onAbort&&t.onAbort(e),s(e),c(e),w=!0,new WebAssembly.RuntimeError("abort("+e+"). Build with -s ASSERTIONS=1 for more info.")}function z(){var e=I;return String.prototype.startsWith?e.startsWith("data:application/octet-stream;base64,"):0===e.indexOf("data:application/octet-stream;base64,")}t.preloadedImages={},t.preloadedAudios={};var O,Y,I="libpythia.browser.wasm";if(!z()){var j=I;I=t.locateFile?t.locateFile(j,i):i+j}function D(){try{if(u)return new Uint8Array(u);throw"both async and sync fetching of the wasm failed"}catch(e){H(e)}}function W(e,t){for(var n=0,r=e.length-1;0<=r;r--){var a=e[r];"."===a?e.splice(r,1):".."===a?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n;n--)e.unshift("..");return e}function F(e){var t="/"===e.charAt(0),n="/"===e.substr(-1);return(e=W(e.split("/").filter((function(e){return!!e})),!t).join("/"))||t||(e="."),e&&n&&(e+="/"),(t?"/":"")+e}function V(e){var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1);return e=t[0],t=t[1],e||t?(t&&(t=t.substr(0,t.length-1)),e+t):"."}function $(e){if("/"===e)return"/";var t=e.lastIndexOf("/");return-1===t?e:e.substr(t+1)}function Q(){for(var e="",t=!1,n=arguments.length-1;-1<=n&&!t;n--){if("string"!=typeof(t=0<=n?arguments[n]:"/"))throw new TypeError("Arguments to path.resolve must be strings");if(!t)return"";e=t+"/"+e,t="/"===t.charAt(0)}return(t?"/":"")+(e=W(e.split("/").filter((function(e){return!!e})),!t).join("/"))||"."}B.push({wb:function(){Fe()}});var X=[];function q(e,t){X[e]={input:[],Pa:[],Xa:t},ge(e,Z)}var Z={open:function(e){var t=X[e.node.bb];if(!t)throw new ce(43);e.Oa=t,e.seekable=!1},close:function(e){e.Oa.Xa.flush(e.Oa)},flush:function(e){e.Oa.Xa.flush(e.Oa)},read:function(e,t,n,r){if(!e.Oa||!e.Oa.Xa.nb)throw new ce(60);for(var a=0,o=0;o<r;o++){try{var i=e.Oa.Xa.nb(e.Oa)}catch(e){throw new ce(29)}if(void 0===i&&0===a)throw new ce(6);if(null==i)break;a++,t[n+o]=i}return a&&(e.node.timestamp=Date.now()),a},write:function(e,t,n,r){if(!e.Oa||!e.Oa.Xa.gb)throw new ce(60);try{for(var a=0;a<r;a++)e.Oa.Xa.gb(e.Oa,t[n+a])}catch(e){throw new ce(29)}return r&&(e.node.timestamp=Date.now()),a}},G={nb:function(e){if(!e.input.length){var t=null;if("undefined"!=typeof window&&"function"==typeof window.prompt?null!==(t=window.prompt("Input: "))&&(t+="\n"):"function"==typeof readline&&null!==(t=readline())&&(t+="\n"),!t)return null;for(var n=0,r=0;r<t.length;++r){var a=t.charCodeAt(r);55296<=a&&57343>=a&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++r)),127>=a?++n:n=2047>=a?n+2:65535>=a?n+3:n+4}var o=(n=Array(n+1)).length;if(r=0,0<o){a=r,o=r+o-1;for(var i=0;i<t.length;++i){var s=t.charCodeAt(i);if(55296<=s&&57343>=s&&(s=65536+((1023&s)<<10)|1023&t.charCodeAt(++i)),127>=s){if(r>=o)break;n[r++]=s}else{if(2047>=s){if(r+1>=o)break;n[r++]=192|s>>6}else{if(65535>=s){if(r+2>=o)break;n[r++]=224|s>>12}else{if(r+3>=o)break;n[r++]=240|s>>18,n[r++]=128|s>>12&63}n[r++]=128|s>>6&63}n[r++]=128|63&s}}n[r]=0,t=r-a}else t=0;n.length=t,e.input=n}return e.input.shift()},gb:function(e,t){null===t||10===t?(s(E(e.Pa,0)),e.Pa=[]):0!=t&&e.Pa.push(t)},flush:function(e){e.Pa&&0<e.Pa.length&&(s(E(e.Pa,0)),e.Pa=[])}},J={gb:function(e,t){null===t||10===t?(c(E(e.Pa,0)),e.Pa=[]):0!=t&&e.Pa.push(t)},flush:function(e){e.Pa&&0<e.Pa.length&&(c(E(e.Pa,0)),e.Pa=[])}},ee={Qa:null,Sa:function(){return ee.createNode(null,"/",16895,0)},createNode:function(e,t,n,r){if(24576==(61440&n)||4096==(61440&n))throw new ce(63);return ee.Qa||(ee.Qa={dir:{node:{Va:ee.La.Va,Ra:ee.La.Ra,Ya:ee.La.Ya,$a:ee.La.$a,sb:ee.La.sb,ub:ee.La.ub,tb:ee.La.tb,rb:ee.La.rb,cb:ee.La.cb},stream:{Wa:ee.Ma.Wa}},file:{node:{Va:ee.La.Va,Ra:ee.La.Ra},stream:{Wa:ee.Ma.Wa,read:ee.Ma.read,write:ee.Ma.write,ib:ee.Ma.ib,ob:ee.Ma.ob,qb:ee.Ma.qb}},link:{node:{Va:ee.La.Va,Ra:ee.La.Ra,Za:ee.La.Za},stream:{}},jb:{node:{Va:ee.La.Va,Ra:ee.La.Ra},stream:Ee}}),16384==(61440&(n=pe(e,t,n,r)).mode)?(n.La=ee.Qa.dir.node,n.Ma=ee.Qa.dir.stream,n.Ka={}):32768==(61440&n.mode)?(n.La=ee.Qa.file.node,n.Ma=ee.Qa.file.stream,n.Na=0,n.Ka=null):40960==(61440&n.mode)?(n.La=ee.Qa.link.node,n.Ma=ee.Qa.link.stream):8192==(61440&n.mode)&&(n.La=ee.Qa.jb.node,n.Ma=ee.Qa.jb.stream),n.timestamp=Date.now(),e&&(e.Ka[t]=n),n},Ib:function(e){if(e.Ka&&e.Ka.subarray){for(var t=[],n=0;n<e.Na;++n)t.push(e.Ka[n]);return t}return e.Ka},Jb:function(e){return e.Ka?e.Ka.subarray?e.Ka.subarray(0,e.Na):new Uint8Array(e.Ka):new Uint8Array},kb:function(e,t){var n=e.Ka?e.Ka.length:0;n>=t||(t=Math.max(t,n*(1048576>n?2:1.125)|0),0!=n&&(t=Math.max(t,256)),n=e.Ka,e.Ka=new Uint8Array(t),0<e.Na&&e.Ka.set(n.subarray(0,e.Na),0))},Ab:function(e,t){if(e.Na!=t)if(0==t)e.Ka=null,e.Na=0;else{if(!e.Ka||e.Ka.subarray){var n=e.Ka;e.Ka=new Uint8Array(new ArrayBuffer(t)),n&&e.Ka.set(n.subarray(0,Math.min(t,e.Na)))}else if(e.Ka||(e.Ka=[]),e.Ka.length>t)e.Ka.length=t;else for(;e.Ka.length<t;)e.Ka.push(0);e.Na=t}},La:{Va:function(e){var t={};return t.Hb=8192==(61440&e.mode)?e.id:1,t.Lb=e.id,t.mode=e.mode,t.Nb=1,t.uid=0,t.Kb=0,t.bb=e.bb,16384==(61440&e.mode)?t.size=4096:32768==(61440&e.mode)?t.size=e.Na:40960==(61440&e.mode)?t.size=e.link.length:t.size=0,t.Eb=new Date(e.timestamp),t.Mb=new Date(e.timestamp),t.Gb=new Date(e.timestamp),t.vb=4096,t.Fb=Math.ceil(t.size/t.vb),t},Ra:function(e,t){void 0!==t.mode&&(e.mode=t.mode),void 0!==t.timestamp&&(e.timestamp=t.timestamp),void 0!==t.size&&ee.Ab(e,t.size)},Ya:function(){throw ue[44]},$a:function(e,t,n,r){return ee.createNode(e,t,n,r)},sb:function(e,t,n){if(16384==(61440&e.mode)){try{var r=de(t,n)}catch(e){}if(r)for(var a in r.Ka)throw new ce(55)}delete e.parent.Ka[e.name],e.name=n,t.Ka[n]=e,e.parent=t},ub:function(e,t){delete e.Ka[t]},tb:function(e,t){var n,r=de(e,t);for(n in r.Ka)throw new ce(55);delete e.Ka[t]},rb:function(e){var t,n=[".",".."];for(t in e.Ka)e.Ka.hasOwnProperty(t)&&n.push(t);return n},cb:function(e,t,n){return(e=ee.createNode(e,t,41471,0)).link=n,e},Za:function(e){if(40960!=(61440&e.mode))throw new ce(28);return e.link}},Ma:{read:function(e,t,n,r,a){var o=e.node.Ka;if(a>=e.node.Na)return 0;if(8<(e=Math.min(e.node.Na-a,r))&&o.subarray)t.set(o.subarray(a,a+e),n);else for(r=0;r<e;r++)t[n+r]=o[a+r];return e},write:function(e,t,n,r,a,o){if(t.buffer===p.buffer&&(o=!1),!r)return 0;if((e=e.node).timestamp=Date.now(),t.subarray&&(!e.Ka||e.Ka.subarray)){if(o)return e.Ka=t.subarray(n,n+r),e.Na=r;if(0===e.Na&&0===a)return e.Ka=new Uint8Array(t.subarray(n,n+r)),e.Na=r;if(a+r<=e.Na)return e.Ka.set(t.subarray(n,n+r),a),r}if(ee.kb(e,a+r),e.Ka.subarray&&t.subarray)e.Ka.set(t.subarray(n,n+r),a);else for(o=0;o<r;o++)e.Ka[a+o]=t[n+o];return e.Na=Math.max(e.Na,a+r),r},Wa:function(e,t,n){if(1===n?t+=e.position:2===n&&32768==(61440&e.node.mode)&&(t+=e.node.Na),0>t)throw new ce(28);return t},ib:function(e,t,n){ee.kb(e.node,t+n),e.node.Na=Math.max(e.node.Na,t+n)},ob:function(e,t,n,r,a,o,i){if(32768!=(61440&e.node.mode))throw new ce(43);if(n=e.node.Ka,2&i||n.buffer!==t.buffer){if((0<a||a+r<e.node.Na)&&(n=n.subarray?n.subarray(a,a+r):Array.prototype.slice.call(n,a,a+r)),e=!0,a=t.buffer==p.buffer,!(r=$e(r)))throw new ce(48);(a?p:t).set(n,r)}else e=!1,r=n.byteOffset;return{Pb:r,Db:e}},qb:function(e,t,n,r,a){if(32768!=(61440&e.node.mode))throw new ce(43);return 2&a?0:(ee.Ma.write(e,t,0,r,n,!1),0)}}},te=null,ne={},re=[],ae=1,oe=null,ie=!0,se={},ce=null,ue={};function fe(e,t){if(t=t||{},!(e=Q("/",e)))return{path:"",node:null};var n,r={mb:!0,hb:0};for(n in r)void 0===t[n]&&(t[n]=r[n]);if(8<t.hb)throw new ce(32);e=W(e.split("/").filter((function(e){return!!e})),!1);var a=te;for(r="/",n=0;n<e.length;n++){var o=n===e.length-1;if(o&&t.parent)break;if(a=de(a,e[n]),r=F(r+"/"+e[n]),a.ab&&(!o||o&&t.mb)&&(a=a.ab.root),!o||t.lb)for(o=0;40960==(61440&a.mode);)if(a=xe(r),a=fe(r=Q(V(r),a),{hb:t.hb}).node,40<o++)throw new ce(32)}return{path:r,node:a}}function le(e){for(var t;;){if(e===e.parent)return e=e.Sa.pb,t?"/"!==e[e.length-1]?e+"/"+t:e+t:e;t=t?e.name+"/"+t:e.name,e=e.parent}}function _e(e,t){for(var n=0,r=0;r<t.length;r++)n=(n<<5)-n+t.charCodeAt(r)|0;return(e+n>>>0)%oe.length}function de(e,t){var n;if(n=(n=me(e,"x"))?n:e.La.Ya?0:2)throw new ce(n,e);for(n=oe[_e(e.id,t)];n;n=n.zb){var r=n.name;if(n.parent.id===e.id&&r===t)return n}return e.La.Ya(e,t)}function pe(e,t,n,r){return Ue||((Ue=function(e,t,n,r){e||(e=this),this.parent=e,this.Sa=e.Sa,this.ab=null,this.id=ae++,this.name=t,this.mode=n,this.La={},this.Ma={},this.bb=r}).prototype={},Object.defineProperties(Ue.prototype,{read:{get:function(){return 365==(365&this.mode)},set:function(e){e?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146==(146&this.mode)},set:function(e){e?this.mode|=146:this.mode&=-147}}})),function(e){var t=_e(e.parent.id,e.name);e.zb=oe[t],oe[t]=e}(e=new Ue(e,t,n,r)),e}var ye={r:0,rs:1052672,"r+":2,w:577,wx:705,xw:705,"w+":578,"wx+":706,"xw+":706,a:1089,ax:1217,xa:1217,"a+":1090,"ax+":1218,"xa+":1218};function he(e){var t=["r","w","rw"][3&e];return 512&e&&(t+="w"),t}function me(e,t){return ie?0:(-1===t.indexOf("r")||292&e.mode)&&(-1===t.indexOf("w")||146&e.mode)&&(-1===t.indexOf("x")||73&e.mode)?0:2}function ve(e,t){try{return de(e,t),20}catch(e){}return me(e,"wx")}function we(e,t){Ce||((Ce=function(){}).prototype={},Object.defineProperties(Ce.prototype,{object:{get:function(){return this.node},set:function(e){this.node=e}}}));var n,r=new Ce;for(n in e)r[n]=e[n];return e=r,t=function(e){for(e=e||0;e<=4096;e++)if(!re[e])return e;throw new ce(33)}(t),e.Ua=t,re[t]=e}var be,Ee={open:function(e){e.Ma=ne[e.node.bb].Ma,e.Ma.open&&e.Ma.open(e)},Wa:function(){throw new ce(70)}};function ge(e,t){ne[e]={Ma:t}}function Pe(e,t){var n="/"===t,r=!t;if(n&&te)throw new ce(10);if(!n&&!r){var a=fe(t,{mb:!1});if(t=a.path,(a=a.node).ab)throw new ce(10);if(16384!=(61440&a.mode))throw new ce(54)}t={type:e,Ob:{},pb:t,yb:[]},(e=e.Sa(t)).Sa=t,t.root=e,n?te=e:a&&(a.ab=t,a.Sa&&a.Sa.yb.push(t))}function Ae(e,t,n){var r=fe(e,{parent:!0}).node;if(!(e=$(e))||"."===e||".."===e)throw new ce(28);var a=ve(r,e);if(a)throw new ce(a);if(!r.La.$a)throw new ce(63);return r.La.$a(r,e,t,n)}function Te(e){Ae(e,16895,0)}function Le(e,t,n){void 0===n&&(n=t,t=438),Ae(e,8192|t,n)}function Be(e,t){if(!Q(e))throw new ce(44);var n=fe(t,{parent:!0}).node;if(!n)throw new ce(44);var r=ve(n,t=$(t));if(r)throw new ce(r);if(!n.La.cb)throw new ce(63);n.La.cb(n,t,e)}function xe(e){if(!(e=fe(e).node))throw new ce(44);if(!e.La.Za)throw new ce(28);return Q(le(e.parent),e.La.Za(e))}function Se(e,n,r,a){if(""===e)throw new ce(44);if("string"==typeof n){var o=ye[n];if(void 0===o)throw Error("Unknown file open mode: "+n);n=o}if(r=64&n?4095&(void 0===r?438:r)|32768:0,"object"==typeof e)var i=e;else{e=F(e);try{i=fe(e,{lb:!(131072&n)}).node}catch(e){}}if(o=!1,64&n)if(i){if(128&n)throw new ce(20)}else i=Ae(e,r,0),o=!0;if(!i)throw new ce(44);if(8192==(61440&i.mode)&&(n&=-513),65536&n&&16384!=(61440&i.mode))throw new ce(54);if(!o&&(r=i?40960==(61440&i.mode)?32:16384==(61440&i.mode)&&("r"!==he(n)||512&n)?31:me(i,he(n)):44))throw new ce(r);if(512&n){var s;if(!(s="string"==typeof(r=i)?fe(r,{lb:!0}).node:r).La.Ra)throw new ce(63);if(16384==(61440&s.mode))throw new ce(31);if(32768!=(61440&s.mode))throw new ce(28);if(r=me(s,"w"))throw new ce(r);s.La.Ra(s,{size:0,timestamp:Date.now()})}n&=-641,(a=we({node:i,path:le(i),flags:n,seekable:!0,position:0,Ma:i.Ma,Cb:[],error:!1},a)).Ma.open&&a.Ma.open(a),!t.logReadFiles||1&n||(He||(He={}),e in He||(He[e]=1,console.log("FS.trackingDelegate error on read file: "+e)));try{se.onOpenFile&&(i=0,1!=(2097155&n)&&(i|=1),0!=(2097155&n)&&(i|=2),se.onOpenFile(e,i))}catch(t){console.log("FS.trackingDelegate['onOpenFile']('"+e+"', flags) threw an exception: "+t.message)}return a}function Me(e,t,n){if(null===e.Ua)throw new ce(8);if(!e.seekable||!e.Ma.Wa)throw new ce(70);if(0!=n&&1!=n&&2!=n)throw new ce(28);e.position=e.Ma.Wa(e,t,n),e.Cb=[]}function ke(e,t,n,r){var a=p;if(0>n||0>r)throw new ce(28);if(null===e.Ua)throw new ce(8);if(1==(2097155&e.flags))throw new ce(8);if(16384==(61440&e.node.mode))throw new ce(31);if(!e.Ma.read)throw new ce(28);var o=void 0!==r;if(o){if(!e.seekable)throw new ce(70)}else r=e.position;return t=e.Ma.read(e,a,t,n,r),o||(e.position+=t),t}function Re(){ce||((ce=function(e,t){this.node=t,this.Bb=function(e){this.Ta=e},this.Bb(e),this.message="FS error"}).prototype=Error(),ce.prototype.constructor=ce,[44].forEach((function(e){ue[e]=new ce(e),ue[e].stack="<generic error, no stack>"})))}function Ne(e,t,n){e=F("/dev/"+e);var r=function(e,t){var n=0;return e&&(n|=365),t&&(n|=146),n}(!!t,!!n);Ke||(Ke=64);var a=Ke++<<8|0;ge(a,{open:function(e){e.seekable=!1},close:function(){n&&n.buffer&&n.buffer.length&&n(10)},read:function(e,n,r,a){for(var o=0,i=0;i<a;i++){try{var s=t()}catch(e){throw new ce(29)}if(void 0===s&&0===o)throw new ce(6);if(null==s)break;o++,n[r+i]=s}return o&&(e.node.timestamp=Date.now()),o},write:function(e,t,r,a){for(var o=0;o<a;o++)try{n(t[r+o])}catch(e){throw new ce(29)}return a&&(e.node.timestamp=Date.now()),o}}),Le(e,r,a)}var Ke,Ue,Ce,He,ze={},Oe=0;function Ye(){return m[(Oe+=4)-4>>2]}function Ie(e){if(void 0===e&&(e=Ye()),!(e=re[e]))throw new ce(8);return e}var je=0;Re(),oe=Array(4096),Pe(ee,"/"),Te("/tmp"),Te("/home"),Te("/home/web_user"),function(){if(Te("/dev"),ge(259,{read:function(){return 0},write:function(e,t,n,r){return r}}),Le("/dev/null",259),q(1280,G),q(1536,J),Le("/dev/tty",1280),Le("/dev/tty1",1536),"object"==typeof crypto&&"function"==typeof crypto.getRandomValues)var e=new Uint8Array(1),t=function(){return crypto.getRandomValues(e),e[0]};t||(t=function(){H("random_device")}),Ne("random",t),Ne("urandom",t),Te("/dev/shm"),Te("/dev/shm/tmp")}(),Te("/proc"),Te("/proc/self"),Te("/proc/self/fd"),Pe({Sa:function(){var e=pe("/proc/self","fd",16895,73);return e.La={Ya:function(e,t){var n=re[+t];if(!n)throw new ce(8);return(e={parent:null,Sa:{pb:"fake"},La:{Za:function(){return n.path}}}).parent=e}},e}},"/proc/self/fd");var De={A:function(){},w:function(e,n){Oe=n;try{var r=Ie();switch(Ye()){case 0:var a=Ye();return 0>a?-28:Se(r.path,r.flags,0,a).Ua;case 1:case 2:return 0;case 3:return r.flags;case 4:return a=Ye(),r.flags|=a,0;case 12:return a=Ye(),h[a+0>>1]=2,0;case 13:case 14:return 0;case 16:case 8:return-28;case 9:return t.___errno_location&&(m[t.___errno_location()>>2]=28),-1;default:return-28}}catch(e){return void 0!==ze&&e instanceof ce||H(e),-e.Ta}},F:function(e,t){Oe=t;try{return ke(Ie(),Ye(),Ye())}catch(e){return void 0!==ze&&e instanceof ce||H(e),-e.Ta}},z:function(e,t){Oe=t;try{var n=Ye();return Se(n?E(y,n,void 0):"",Ye(),Ye()).Ua}catch(e){return void 0!==ze&&e instanceof ce||H(e),-e.Ta}},D:function(e,t){Oe=t;try{var n=Ie(),r=Ye();switch(r){case 21509:case 21505:return n.Oa?0:-59;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return n.Oa?0:-59;case 21519:if(!n.Oa)return-59;var a=Ye();return m[a>>2]=0;case 21520:return n.Oa?-28:-59;case 21531:if(e=a=Ye(),!n.Ma.xb)throw new ce(59);return n.Ma.xb(n,r,e);case 21523:case 21524:return n.Oa?0:-59;default:H("bad ioctl syscall "+r)}}catch(e){return void 0!==ze&&e instanceof ce||H(e),-e.Ta}},s:function(){},u:function(){H()},h:function(e,t){throw Ve(e,t||1),"longjmp"},G:function(e,t,n){y.set(y.subarray(t,t+n),e)},H:function(e){if(2147418112<e)return!1;for(var t=Math.max(p.length,16777216);t<e;)t=536870912>=t?g(2*t):Math.min(g((3*t+2147483648)/4),2147418112);e:{try{_.grow(t-d.byteLength+65535>>16),P(_.buffer);var n=1;break e}catch(e){}n=void 0}return!!n},m:function(e){!f&&(w=!0,t.onExit)&&t.onExit(e),o(e,new _t(e))},t:function(e){try{var t=Ie(e);if(null===t.Ua)throw new ce(8);t.fb&&(t.fb=null);try{t.Ma.close&&t.Ma.close(t)}catch(e){throw e}finally{re[t.Ua]=null}return t.Ua=null,0}catch(e){return void 0!==ze&&e instanceof ce||H(e),e.Ta}},C:function(e,t,n,r){try{e:{for(var a=Ie(e),o=e=0;o<n;o++){var i=m[t+(8*o+4)>>2],s=ke(a,m[t+8*o>>2],i,void 0);if(0>s){var c=-1;break e}if(e+=s,s<i)break}c=e}return m[r>>2]=c,0}catch(e){return void 0!==ze&&e instanceof ce||H(e),e.Ta}},B:function(e,t,n,r,a){try{var o=Ie(e);return-9007199254740992>=(e=4294967296*n+(t>>>0))||9007199254740992<=e?-61:(Me(o,e,r),Y=[o.position>>>0,(O=o.position,1<=+k(O)?0<O?(0|K(+N(O/4294967296),4294967295))>>>0:~~+R((O-+(~~O>>>0))/4294967296)>>>0:0)],m[a>>2]=Y[0],m[a+4>>2]=Y[1],o.fb&&0===e&&0===r&&(o.fb=null),0)}catch(e){return void 0!==ze&&e instanceof ce||H(e),e.Ta}},E:function(e,t,n,r){try{e:{for(var a=Ie(e),o=e=0;o<n;o++){var i=a,s=m[t+8*o>>2],c=m[t+(8*o+4)>>2],u=void 0,f=p;if(0>c||0>u)throw new ce(28);if(null===i.Ua)throw new ce(8);if(0==(2097155&i.flags))throw new ce(8);if(16384==(61440&i.node.mode))throw new ce(31);if(!i.Ma.write)throw new ce(28);1024&i.flags&&Me(i,0,2);var l=void 0!==u;if(l){if(!i.seekable)throw new ce(70)}else u=i.position;var _=i.Ma.write(i,f,s,c,u,void 0);l||(i.position+=_);try{i.path&&se.onWriteToFile&&se.onWriteToFile(i.path)}catch(e){console.log("FS.trackingDelegate['onWriteToFile']('"+i.path+"') threw an exception: "+e.message)}var d=_;if(0>d){var y=-1;break e}e+=d}y=e}return m[r>>2]=y,0}catch(e){return void 0!==ze&&e instanceof ce||H(e),e.Ta}},a:function(){return 0|l},x:function(e){var t=Date.now();return m[e>>2]=t/1e3|0,m[e+4>>2]=t%1e3*1e3|0,0},g:function(e){var t=ut();try{return at(e)}catch(e){if(lt(t),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},j:function(e,t){var n=ut();try{return ot(e,t)}catch(e){if(lt(n),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},i:function(e,t,n){var r=ut();try{return it(e,t,n)}catch(e){if(lt(r),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},q:function(e,t,n,r){var a=ut();try{return st(e,t,n,r)}catch(e){if(lt(a),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},y:function(e,t,n,r,a){var o=ut();try{return ct(e,t,n,r,a)}catch(e){if(lt(o),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},n:function(e){var t=ut();try{Xe(e)}catch(e){if(lt(t),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},e:function(e,t){var n=ut();try{qe(e,t)}catch(e){if(lt(n),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},d:function(e,t,n){var r=ut();try{Ze(e,t,n)}catch(e){if(lt(r),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},f:function(e,t,n,r){var a=ut();try{Ge(e,t,n,r)}catch(e){if(lt(a),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},l:function(e,t,n,r,a){var o=ut();try{Je(e,t,n,r,a)}catch(e){if(lt(o),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},o:function(e,t,n,r,a,o){var i=ut();try{et(e,t,n,r,a,o)}catch(e){if(lt(i),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},p:function(e,t,n,r,a,o,i){var s=ut();try{tt(e,t,n,r,a,o,i)}catch(e){if(lt(s),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},r:function(e,t,n,r,a,o,i,s){var c=ut();try{nt(e,t,n,r,a,o,i,s)}catch(e){if(lt(c),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},v:function(e,t,n,r,a,o,i,s,c){var u=ut();try{rt(e,t,n,r,a,o,i,s,c)}catch(e){if(lt(u),e!==e+0&&"longjmp"!==e)throw e;Ve(1,0)}},memory:_,k:function e(t,n,r,a){n|=0,r|=0,a|=0;var o=0;for(je=je+1|0,m[(t|=0)>>2]=je;(0|o)<(0|a);){if(0==(0|m[r+(o<<3)>>2]))return m[r+(o<<3)>>2]=je,m[r+(4+(o<<3))>>2]=n,m[r+(8+(o<<3))>>2]=0,l=0|a,0|r;o=o+1|0}return r=0|e(0|t,0|n,0|(r=0|Qe(0|r,8*(1+(a=2*a|0)|0)|0)),0|a),l=0|a,0|r},c:function(e){l=0|e},table:v,b:function(e,t,n){e|=0,t|=0,n|=0;for(var r,a=0;(0|a)<(0|n)&&0!=(0|(r=0|m[t+(a<<3)>>2]));){if((0|r)==(0|e))return 0|m[t+(4+(a<<3))>>2];a=a+1|0}return 0}},We=function(){function e(e){t.asm=e.exports,U--,t.monitorRunDependencies&&t.monitorRunDependencies(U),0==U&&C&&(e=C,C=null,e())}function n(t){e(t.instance)}function r(e){return(u||"function"!=typeof fetch?new Promise((function(e){e(D())})):fetch(I,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at '"+I+"'";return e.arrayBuffer()})).catch((function(){return D()}))).then((function(e){return WebAssembly.instantiate(e,a)})).then(e,(function(e){c("failed to asynchronously prepare wasm: "+e),H(e)}))}var a={env:De,wasi_snapshot_preview1:De};if(U++,t.monitorRunDependencies&&t.monitorRunDependencies(U),t.instantiateWasm)try{return t.instantiateWasm(a,e)}catch(e){return c("Module.instantiateWasm callback failed with error: "+e),!1}return function(){if(u||"function"!=typeof WebAssembly.instantiateStreaming||z()||"function"!=typeof fetch)return r(n);fetch(I,{credentials:"same-origin"}).then((function(e){return WebAssembly.instantiateStreaming(e,a).then(n,(function(e){c("wasm streaming compile failed: "+e),c("falling back to ArrayBuffer instantiation"),r(n)}))}))}(),{}}();t.asm=We;var Fe=t.___wasm_call_ctors=function(){return t.asm.I.apply(null,arguments)};t._vscp_error_ctx_size=function(){return t.asm.J.apply(null,arguments)},t._vscp_error_reset=function(){return t.asm.K.apply(null,arguments)},t._vscp_error_status=function(){return t.asm.L.apply(null,arguments)},t._vscp_pythia_configure=function(){return t.asm.M.apply(null,arguments)},t._vscp_pythia_cleanup=function(){return t.asm.N.apply(null,arguments)},t._vscp_pythia_blinded_password_buf_len=function(){return t.asm.O.apply(null,arguments)},t._vscp_pythia_deblinded_password_buf_len=function(){return t.asm.P.apply(null,arguments)},t._vscp_pythia_blinding_secret_buf_len=function(){return t.asm.Q.apply(null,arguments)},t._vscp_pythia_transformation_private_key_buf_len=function(){return t.asm.R.apply(null,arguments)},t._vscp_pythia_transformation_public_key_buf_len=function(){return t.asm.S.apply(null,arguments)},t._vscp_pythia_transformed_password_buf_len=function(){return t.asm.T.apply(null,arguments)},t._vscp_pythia_transformed_tweak_buf_len=function(){return t.asm.U.apply(null,arguments)},t._vscp_pythia_proof_value_buf_len=function(){return t.asm.V.apply(null,arguments)},t._vscp_pythia_password_update_token_buf_len=function(){return t.asm.W.apply(null,arguments)},t._vscp_pythia_blind=function(){return t.asm.X.apply(null,arguments)},t._vscp_pythia_deblind=function(){return t.asm.Y.apply(null,arguments)},t._vscp_pythia_compute_transformation_key_pair=function(){return t.asm.Z.apply(null,arguments)},t._vscp_pythia_transform=function(){return t.asm._.apply(null,arguments)},t._vscp_pythia_prove=function(){return t.asm.$.apply(null,arguments)},t._vscp_pythia_verify=function(){return t.asm.aa.apply(null,arguments)},t._vscp_pythia_get_password_update_token=function(){return t.asm.ba.apply(null,arguments)},t._vscp_pythia_update_deblinded_with_token=function(){return t.asm.ca.apply(null,arguments)},t._vsc_buffer_new=function(){return t.asm.da.apply(null,arguments)},t._vsc_buffer_new_with_capacity=function(){return t.asm.ea.apply(null,arguments)},t._vsc_buffer_delete=function(){return t.asm.fa.apply(null,arguments)},t._vsc_buffer_data=function(){return t.asm.ga.apply(null,arguments)},t._vsc_buffer_make_secure=function(){return t.asm.ha.apply(null,arguments)},t._vsc_buffer_bytes=function(){return t.asm.ia.apply(null,arguments)},t._vsc_buffer_len=function(){return t.asm.ja.apply(null,arguments)},t._vsc_data_ctx_size=function(){return t.asm.ka.apply(null,arguments)},t._vsc_data=function(){return t.asm.la.apply(null,arguments)},t._vsc_data_len=function(){return t.asm.ma.apply(null,arguments)},t._vsc_data_bytes=function(){return t.asm.na.apply(null,arguments)},t.___errno_location=function(){return t.asm.oa.apply(null,arguments)};var Ve=t._setThrew=function(){return t.asm.pa.apply(null,arguments)},$e=t._malloc=function(){return t.asm.qa.apply(null,arguments)};t._free=function(){return t.asm.ra.apply(null,arguments)};var Qe=t._realloc=function(){return t.asm.sa.apply(null,arguments)},Xe=t.dynCall_v=function(){return t.asm.ta.apply(null,arguments)},qe=t.dynCall_vi=function(){return t.asm.ua.apply(null,arguments)},Ze=t.dynCall_vii=function(){return t.asm.va.apply(null,arguments)},Ge=t.dynCall_viii=function(){return t.asm.wa.apply(null,arguments)},Je=t.dynCall_viiii=function(){return t.asm.xa.apply(null,arguments)},et=t.dynCall_viiiii=function(){return t.asm.ya.apply(null,arguments)},tt=t.dynCall_viiiiii=function(){return t.asm.za.apply(null,arguments)},nt=t.dynCall_viiiiiii=function(){return t.asm.Aa.apply(null,arguments)},rt=t.dynCall_viiiiiiii=function(){return t.asm.Ba.apply(null,arguments)},at=t.dynCall_i=function(){return t.asm.Ca.apply(null,arguments)},ot=t.dynCall_ii=function(){return t.asm.Da.apply(null,arguments)},it=t.dynCall_iii=function(){return t.asm.Ea.apply(null,arguments)},st=t.dynCall_iiii=function(){return t.asm.Fa.apply(null,arguments)},ct=t.dynCall_iiiii=function(){return t.asm.Ga.apply(null,arguments)},ut=t.stackSave=function(){return t.asm.Ha.apply(null,arguments)};t.stackAlloc=function(){return t.asm.Ia.apply(null,arguments)};var ft,lt=t.stackRestore=function(){return t.asm.Ja.apply(null,arguments)};function _t(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function dt(){function e(){if(!ft&&(ft=!0,!w)){if(t.noFSInit||be||(be=!0,Re(),t.stdin=t.stdin,t.stdout=t.stdout,t.stderr=t.stderr,t.stdin?Ne("stdin",t.stdin):Be("/dev/tty","/dev/stdin"),t.stdout?Ne("stdout",null,t.stdout):Be("/dev/tty","/dev/stdout"),t.stderr?Ne("stderr",null,t.stderr):Be("/dev/tty1","/dev/stderr"),Se("/dev/stdin","r"),Se("/dev/stdout","w"),Se("/dev/stderr","w")),T(B),ie=!1,T(x),t.onRuntimeInitialized&&t.onRuntimeInitialized(),t.postRun)for("function"==typeof t.postRun&&(t.postRun=[t.postRun]);t.postRun.length;){var e=t.postRun.shift();S.unshift(e)}T(S)}}if(!(0<U)){if(t.preRun)for("function"==typeof t.preRun&&(t.preRun=[t.preRun]);t.preRun.length;)M();T(L),0<U||(t.setStatus?(t.setStatus("Running..."),setTimeout((function(){setTimeout((function(){t.setStatus("")}),1),e()}),1)):e())}}if(t.asm=We,t.then=function(e){if(ft)e(t);else{var n=t.onRuntimeInitialized;t.onRuntimeInitialized=function(){n&&n(),e(t)}}return t},C=function e(){ft||dt(),ft||(C=e)},t.run=dt,t.preInit)for("function"==typeof t.preInit&&(t.preInit=[t.preInit]);0<t.preInit.length;)t.preInit.pop()();return f=!0,dt(),e});e.exports=r}));var t=(e,t)=>{class n extends Error{constructor(e){super(e),this.name="PythiaError",this.message=e}static handleStatusCode(e){if(0!=e){if(-1==e)throw new n("This error should not be returned if assertions is enabled.");if(-200==e)throw new n("Underlying pythia library returns -1.");if(-202==e)throw new n("Underlying random number generator failed.");throw new n("Unexpected status code:"+e)}}}return n};function n(e,t){if(!("number"==typeof t||t instanceof Number))throw new TypeError(`'${e}' is not a number`);if(Number.isNaN(t))throw new TypeError(`'${e}' is NaN`);if(t===1/0)throw new TypeError(`'${e}' is Infinity`);if(t===-1/0)throw new TypeError(`'${e}' is -Infinity`)}function r(e,t){if(n(e,t),0==t)throw new TypeError(`'${e}' is NULL`)}var a={ensureNumber:n,ensureString:function(e,t){if(!("string"==typeof t||t instanceof String))throw new TypeError(`'${e}' is not a string`)},ensureBoolean:function(e,t){if("boolean"!=typeof t)throw new TypeError(`'${e}' is not a boolean`)},ensureByteArray:function(e,t){if(!(t instanceof Uint8Array))throw new TypeError(`'${e}' is not an Uint8Array`)},ensureClass:function(e,t,n){if(!(t instanceof n))throw new TypeError(`'${e}' is not an instance of the class ${n.name}`);r(e,t.ctxPtr)},ensureNotNull:r,ensureImplementInterface:function(e,t,n,a,o){if(r(e,t.ctxPtr),!o.isImplemented(t.ctxPtr,a))throw new TypeError(`'${e}' does not implement interface '${n}'`)}};var o=(e,t)=>{class n{static configure(){const n=e._vscp_pythia_configure();t.PythiaError.handleStatusCode(n)}static cleanup(){e._vscp_pythia_cleanup()}static blindedPasswordBufLen(){let t;return t=e._vscp_pythia_blinded_password_buf_len(),t}static deblindedPasswordBufLen(){let t;return t=e._vscp_pythia_deblinded_password_buf_len(),t}static blindingSecretBufLen(){let t;return t=e._vscp_pythia_blinding_secret_buf_len(),t}static transformationPrivateKeyBufLen(){let t;return t=e._vscp_pythia_transformation_private_key_buf_len(),t}static transformationPublicKeyBufLen(){let t;return t=e._vscp_pythia_transformation_public_key_buf_len(),t}static transformedPasswordBufLen(){let t;return t=e._vscp_pythia_transformed_password_buf_len(),t}static transformedTweakBufLen(){let t;return t=e._vscp_pythia_transformed_tweak_buf_len(),t}static proofValueBufLen(){let t;return t=e._vscp_pythia_proof_value_buf_len(),t}static passwordUpdateTokenBufLen(){let t;return t=e._vscp_pythia_password_update_token_buf_len(),t}static blind(r){a.ensureByteArray("password",r);const o=r.length*r.BYTES_PER_ELEMENT,i=e._malloc(o);e.HEAP8.set(r,i);const s=e._vsc_data_ctx_size(),c=e._malloc(s);e._vsc_data(c,i,o);const u=n.blindedPasswordBufLen(),f=e._vsc_buffer_new_with_capacity(u),l=n.blindingSecretBufLen(),_=e._vsc_buffer_new_with_capacity(l);try{const n=e._vscp_pythia_blind(c,f,_);t.PythiaError.handleStatusCode(n);const r=e._vsc_buffer_bytes(f),a=e._vsc_buffer_len(f),o=e.HEAPU8.slice(r,r+a),s=e._vsc_buffer_bytes(_),u=e._vsc_buffer_len(_);return{blindedPassword:o,blindingSecret:e.HEAPU8.slice(s,s+u)}}finally{e._free(i),e._free(c),e._vsc_buffer_delete(f),e._vsc_buffer_delete(_)}}static deblind(r,o){a.ensureByteArray("transformedPassword",r),a.ensureByteArray("blindingSecret",o);const i=r.length*r.BYTES_PER_ELEMENT,s=e._malloc(i);e.HEAP8.set(r,s);const c=e._vsc_data_ctx_size(),u=e._malloc(c);e._vsc_data(u,s,i);const f=o.length*o.BYTES_PER_ELEMENT,l=e._malloc(f);e.HEAP8.set(o,l);const _=e._vsc_data_ctx_size(),d=e._malloc(_);e._vsc_data(d,l,f);const p=n.deblindedPasswordBufLen(),y=e._vsc_buffer_new_with_capacity(p);try{const n=e._vscp_pythia_deblind(u,d,y);t.PythiaError.handleStatusCode(n);const r=e._vsc_buffer_bytes(y),a=e._vsc_buffer_len(y);return e.HEAPU8.slice(r,r+a)}finally{e._free(s),e._free(u),e._free(l),e._free(d),e._vsc_buffer_delete(y)}}static computeTransformationKeyPair(r,o,i){a.ensureByteArray("transformationKeyId",r),a.ensureByteArray("pythiaSecret",o),a.ensureByteArray("pythiaScopeSecret",i);const s=r.length*r.BYTES_PER_ELEMENT,c=e._malloc(s);e.HEAP8.set(r,c);const u=e._vsc_data_ctx_size(),f=e._malloc(u);e._vsc_data(f,c,s);const l=o.length*o.BYTES_PER_ELEMENT,_=e._malloc(l);e.HEAP8.set(o,_);const d=e._vsc_data_ctx_size(),p=e._malloc(d);e._vsc_data(p,_,l);const y=i.length*i.BYTES_PER_ELEMENT,h=e._malloc(y);e.HEAP8.set(i,h);const m=e._vsc_data_ctx_size(),v=e._malloc(m);e._vsc_data(v,h,y);const w=n.transformationPrivateKeyBufLen(),b=e._vsc_buffer_new_with_capacity(w),E=n.transformationPublicKeyBufLen(),g=e._vsc_buffer_new_with_capacity(E);try{const n=e._vscp_pythia_compute_transformation_key_pair(f,p,v,b,g);t.PythiaError.handleStatusCode(n);const r=e._vsc_buffer_bytes(b),a=e._vsc_buffer_len(b),o=e.HEAPU8.slice(r,r+a),i=e._vsc_buffer_bytes(g),s=e._vsc_buffer_len(g);return{transformationPrivateKey:o,transformationPublicKey:e.HEAPU8.slice(i,i+s)}}finally{e._free(c),e._free(f),e._free(_),e._free(p),e._free(h),e._free(v),e._vsc_buffer_delete(b),e._vsc_buffer_delete(g)}}static transform(r,o,i){a.ensureByteArray("blindedPassword",r),a.ensureByteArray("tweak",o),a.ensureByteArray("transformationPrivateKey",i);const s=r.length*r.BYTES_PER_ELEMENT,c=e._malloc(s);e.HEAP8.set(r,c);const u=e._vsc_data_ctx_size(),f=e._malloc(u);e._vsc_data(f,c,s);const l=o.length*o.BYTES_PER_ELEMENT,_=e._malloc(l);e.HEAP8.set(o,_);const d=e._vsc_data_ctx_size(),p=e._malloc(d);e._vsc_data(p,_,l);const y=i.length*i.BYTES_PER_ELEMENT,h=e._malloc(y);e.HEAP8.set(i,h);const m=e._vsc_data_ctx_size(),v=e._malloc(m);e._vsc_data(v,h,y);const w=n.transformedPasswordBufLen(),b=e._vsc_buffer_new_with_capacity(w),E=n.transformedTweakBufLen(),g=e._vsc_buffer_new_with_capacity(E);try{const n=e._vscp_pythia_transform(f,p,v,b,g);t.PythiaError.handleStatusCode(n);const r=e._vsc_buffer_bytes(b),a=e._vsc_buffer_len(b),o=e.HEAPU8.slice(r,r+a),i=e._vsc_buffer_bytes(g),s=e._vsc_buffer_len(g);return{transformedPassword:o,transformedTweak:e.HEAPU8.slice(i,i+s)}}finally{e._free(c),e._free(f),e._free(_),e._free(p),e._free(h),e._free(v),e._vsc_buffer_delete(b),e._vsc_buffer_delete(g)}}static prove(r,o,i,s,c){a.ensureByteArray("transformedPassword",r),a.ensureByteArray("blindedPassword",o),a.ensureByteArray("transformedTweak",i),a.ensureByteArray("transformationPrivateKey",s),a.ensureByteArray("transformationPublicKey",c);const u=r.length*r.BYTES_PER_ELEMENT,f=e._malloc(u);e.HEAP8.set(r,f);const l=e._vsc_data_ctx_size(),_=e._malloc(l);e._vsc_data(_,f,u);const d=o.length*o.BYTES_PER_ELEMENT,p=e._malloc(d);e.HEAP8.set(o,p);const y=e._vsc_data_ctx_size(),h=e._malloc(y);e._vsc_data(h,p,d);const m=i.length*i.BYTES_PER_ELEMENT,v=e._malloc(m);e.HEAP8.set(i,v);const w=e._vsc_data_ctx_size(),b=e._malloc(w);e._vsc_data(b,v,m);const E=s.length*s.BYTES_PER_ELEMENT,g=e._malloc(E);e.HEAP8.set(s,g);const P=e._vsc_data_ctx_size(),A=e._malloc(P);e._vsc_data(A,g,E);const T=c.length*c.BYTES_PER_ELEMENT,L=e._malloc(T);e.HEAP8.set(c,L);const B=e._vsc_data_ctx_size(),x=e._malloc(B);e._vsc_data(x,L,T);const S=n.proofValueBufLen(),M=e._vsc_buffer_new_with_capacity(S),k=n.proofValueBufLen(),R=e._vsc_buffer_new_with_capacity(k);try{const n=e._vscp_pythia_prove(_,h,b,A,x,M,R);t.PythiaError.handleStatusCode(n);const r=e._vsc_buffer_bytes(M),a=e._vsc_buffer_len(M),o=e.HEAPU8.slice(r,r+a),i=e._vsc_buffer_bytes(R),s=e._vsc_buffer_len(R);return{proofValueC:o,proofValueU:e.HEAPU8.slice(i,i+s)}}finally{e._free(f),e._free(_),e._free(p),e._free(h),e._free(v),e._free(b),e._free(g),e._free(A),e._free(L),e._free(x),e._vsc_buffer_delete(M),e._vsc_buffer_delete(R)}}static verify(n,r,o,i,s,c){a.ensureByteArray("transformedPassword",n),a.ensureByteArray("blindedPassword",r),a.ensureByteArray("tweak",o),a.ensureByteArray("transformationPublicKey",i),a.ensureByteArray("proofValueC",s),a.ensureByteArray("proofValueU",c);const u=n.length*n.BYTES_PER_ELEMENT,f=e._malloc(u);e.HEAP8.set(n,f);const l=e._vsc_data_ctx_size(),_=e._malloc(l);e._vsc_data(_,f,u);const d=r.length*r.BYTES_PER_ELEMENT,p=e._malloc(d);e.HEAP8.set(r,p);const y=e._vsc_data_ctx_size(),h=e._malloc(y);e._vsc_data(h,p,d);const m=o.length*o.BYTES_PER_ELEMENT,v=e._malloc(m);e.HEAP8.set(o,v);const w=e._vsc_data_ctx_size(),b=e._malloc(w);e._vsc_data(b,v,m);const E=i.length*i.BYTES_PER_ELEMENT,g=e._malloc(E);e.HEAP8.set(i,g);const P=e._vsc_data_ctx_size(),A=e._malloc(P);e._vsc_data(A,g,E);const T=s.length*s.BYTES_PER_ELEMENT,L=e._malloc(T);e.HEAP8.set(s,L);const B=e._vsc_data_ctx_size(),x=e._malloc(B);e._vsc_data(x,L,T);const S=c.length*c.BYTES_PER_ELEMENT,M=e._malloc(S);e.HEAP8.set(c,M);const k=e._vsc_data_ctx_size(),R=e._malloc(k);e._vsc_data(R,M,S);const N=e._vscp_error_ctx_size(),K=e._malloc(N);let U;e._vscp_error_reset(K);try{U=e._vscp_pythia_verify(_,h,b,A,x,R,K);const n=e._vscp_error_status(K);return t.PythiaError.handleStatusCode(n),!!U}finally{e._free(f),e._free(_),e._free(p),e._free(h),e._free(v),e._free(b),e._free(g),e._free(A),e._free(L),e._free(x),e._free(M),e._free(R),e._free(K)}}static getPasswordUpdateToken(r,o){a.ensureByteArray("previousTransformationPrivateKey",r),a.ensureByteArray("newTransformationPrivateKey",o);const i=r.length*r.BYTES_PER_ELEMENT,s=e._malloc(i);e.HEAP8.set(r,s);const c=e._vsc_data_ctx_size(),u=e._malloc(c);e._vsc_data(u,s,i);const f=o.length*o.BYTES_PER_ELEMENT,l=e._malloc(f);e.HEAP8.set(o,l);const _=e._vsc_data_ctx_size(),d=e._malloc(_);e._vsc_data(d,l,f);const p=n.passwordUpdateTokenBufLen(),y=e._vsc_buffer_new_with_capacity(p);try{const n=e._vscp_pythia_get_password_update_token(u,d,y);t.PythiaError.handleStatusCode(n);const r=e._vsc_buffer_bytes(y),a=e._vsc_buffer_len(y);return e.HEAPU8.slice(r,r+a)}finally{e._free(s),e._free(u),e._free(l),e._free(d),e._vsc_buffer_delete(y)}}static updateDeblindedWithToken(r,o){a.ensureByteArray("deblindedPassword",r),a.ensureByteArray("passwordUpdateToken",o);const i=r.length*r.BYTES_PER_ELEMENT,s=e._malloc(i);e.HEAP8.set(r,s);const c=e._vsc_data_ctx_size(),u=e._malloc(c);e._vsc_data(u,s,i);const f=o.length*o.BYTES_PER_ELEMENT,l=e._malloc(f);e.HEAP8.set(o,l);const _=e._vsc_data_ctx_size(),d=e._malloc(_);e._vsc_data(d,l,f);const p=n.deblindedPasswordBufLen(),y=e._vsc_buffer_new_with_capacity(p);try{const n=e._vscp_pythia_update_deblinded_with_token(u,d,y);t.PythiaError.handleStatusCode(n);const r=e._vsc_buffer_bytes(y),a=e._vsc_buffer_len(y);return e.HEAPU8.slice(r,r+a)}finally{e._free(s),e._free(u),e._free(l),e._free(d),e._vsc_buffer_delete(y)}}}return n};var i=()=>{const n=new e;return new Promise((e,r)=>{n.onRuntimeInitialized=()=>{const r={};r.PythiaError=t(),r.Pythia=o(n,r),e(r)},n.onAbort=e=>{r(new Error(e))}})};export default i;

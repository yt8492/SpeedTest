!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.js=e():t.js=e()}(global,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){var r,o,i;o=[e],void 0===(i="function"==typeof(r=function(t){"use strict";function e(t){return t.length-1|0}function n(){}function r(t){return function(t,e,n){return s.call(n,t,e,0,0,~t,t<<10^e>>>4),n}(t,t>>31,Object.create(s.prototype))}function o(){i=this,n.call(this),this._defaultRandom=r(Math.random()*Math.pow(2,32)|0)}var i,p,a,u;function s(t,e,r,o,i,p){if(n.call(this),this._x=t,this._y=e,this._z=r,this._w=o,this._v=i,this._addend=p,0==(this._x|this._y|this._z|this._w|this._v))throw O(function(t){var e;if(null==t)e="null";else if(function(t){var e,n;if(n=t,Array.isArray(n))e=!0;else{var r=ArrayBuffer.isView(t);e=r}return e}(t))e="[...]";else{var n=t.toString();e=n}return e}("Initial state must have at least one non-zero element."));var a=0;if(a<=63)do{a=a+1|0,this.nextInt_1(),_()}while(a<=63)}function c(){p=this}function _(){return null==p&&new c,p}function f(){a=this,this._MIN_VALUE=-2147483648,this._MAX_VALUE=2147483647,this._SIZE_BYTES=4,this._SIZE_BITS=32}function l(){return null==a&&new f,a}function y(){}function d(t){y.call(this),this._outputStream=t}function h(){m.call(this)}function m(){y.call(this),this._buffer=""}function b(t){u.println_6(t)}function g(t,e){null!=Error.captureStackTrace?Error.captureStackTrace(t,e):t.stack=(new Error).stack}function v(t,e,n){Error.call(t),function(t,e,n){if(!E(t,"message")){var r,o=e;if(null==o){var i=n;r=null==i?null:i.toString()}else r=o;var p=r;t.message=null==p?void 0:p}E(t,"cause")||(t.cause=n),t.name=Object.getPrototypeOf(t).constructor.name}(t,e,n)}function E(t,e){return Object.getPrototypeOf(t).hasOwnProperty(e)}function S(){g(this,S)}function I(){g(this,I)}function j(){g(this,j)}function x(t,e){return function(t,e){(function(t,e){v(e,t,null),S.call(e)})(t,e),j.call(e)}(t,e),I.call(e),e}function O(t){var e=x(t,Object.create(I.prototype));return g(e,O),e}return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,s.prototype=Object.create(n.prototype),s.prototype.constructor=s,d.prototype=Object.create(y.prototype),d.prototype.constructor=d,m.prototype=Object.create(y.prototype),m.prototype.constructor=m,h.prototype=Object.create(m.prototype),h.prototype.constructor=h,S.prototype=Object.create(Error.prototype),S.prototype.constructor=S,j.prototype=Object.create(S.prototype),j.prototype.constructor=j,I.prototype=Object.create(j.prototype),I.prototype.constructor=I,n.prototype.nextInt_1=function(){return this.nextBits_1(32)},n.$metadata$={simpleName:"Random",kind:"class",interfaces:[]},o.prototype.nextBits_1=function(t){return this._defaultRandom.nextBits_1(t)},o.prototype.nextInt_1=function(){return this._defaultRandom.nextInt_1()},o.$metadata$={simpleName:"Default",kind:"object",interfaces:[]},s.prototype.nextInt_1=function(){var t=this._x;t^=t>>>2,this._x=this._y,this._y=this._z,this._z=this._w;var e=this._v;return this._w=e,t=t^t<<1^e^e<<4,this._v=t,this._addend=this._addend+362437|0,t+this._addend|0},s.prototype.nextBits_1=function(t){return function(t,e){return t>>>(32-e|0)&(0|-e)>>31}(this.nextInt_1(),t)},s.$metadata$={simpleName:"XorWowRandom",kind:"class",interfaces:[]},c.prototype.toString=function(){return"kotlin.Unit"},c.$metadata$={simpleName:"Unit",kind:"object",interfaces:[]},f.prototype._get_MIN_VALUE_=function(){return this._MIN_VALUE},f.prototype._get_MAX_VALUE_=function(){return this._MAX_VALUE},f.prototype._get_SIZE_BYTES_=function(){return this._SIZE_BYTES},f.prototype._get_SIZE_BITS_=function(){return this._SIZE_BITS},f.$metadata$={simpleName:"IntCompanionObject",kind:"object",interfaces:[]},Object.defineProperty(f.prototype,"MIN_VALUE",{configurable:!0,get:f.prototype._get_MIN_VALUE_}),Object.defineProperty(f.prototype,"MAX_VALUE",{configurable:!0,get:f.prototype._get_MAX_VALUE_}),Object.defineProperty(f.prototype,"SIZE_BYTES",{configurable:!0,get:f.prototype._get_SIZE_BYTES_}),Object.defineProperty(f.prototype,"SIZE_BITS",{configurable:!0,get:f.prototype._get_SIZE_BITS_}),y.prototype.println_5=function(){this.print_2("\n")},y.prototype.println_6=function(t){this.print_2(t),this.println_5()},y.$metadata$={simpleName:"BaseOutput",kind:"class",interfaces:[]},d.prototype.print_2=function(t){var e=String(t);this._outputStream.write(e)},d.$metadata$={simpleName:"NodeJsOutput",kind:"class",interfaces:[]},h.prototype.print_2=function(t){var e=String(t),n=e.lastIndexOf("\n",0);if(n>=0){var r=this._get_buffer__0(),o=e;this._set_buffer__0(r+o.substring(0,n)),this.flush();var i=n+1|0;e=e.substring(i)}this._set_buffer__0(this._get_buffer__0()+e)},h.prototype.flush=function(){(function(){var t=console;return t.log.apply(t,[].concat([].slice.call([this._get_buffer__0()])))}).call(this),this._set_buffer__0("")},h.$metadata$={simpleName:"BufferedOutputToConsoleLog",kind:"class",interfaces:[]},m.prototype._set_buffer__0=function(t){this._buffer=t},m.prototype._get_buffer__0=function(){return this._buffer},m.prototype.print_2=function(t){var e=this,n=this._buffer;e._buffer=n+String(t)},m.$metadata$={simpleName:"BufferedOutput",kind:"class",interfaces:[]},S.$metadata$={simpleName:"Exception",kind:"class",interfaces:[]},I.$metadata$={simpleName:"IllegalArgumentException",kind:"class",interfaces:[]},j.$metadata$={simpleName:"RuntimeException",kind:"class",interfaces:[]},n.prototype.nextBits_1=n.prototype.nextBits_1,y.prototype.print_2=y.prototype.print_2,d.prototype.println_5=y.prototype.println_5,d.prototype.println_6=y.prototype.println_6,m.prototype.println_5=y.prototype.println_5,m.prototype.println_6=y.prototype.println_6,h.prototype._set_buffer__0=m.prototype._set_buffer__0,h.prototype._get_buffer__0=m.prototype._get_buffer__0,h.prototype.println_5=y.prototype.println_5,h.prototype.println_6=y.prototype.println_6,u="undefined"!=typeof process&&process.versions&&process.versions.node?new d(process.stdout):new h,function(){b("start");for(var t,n=0,r=new Int32Array(5e6);n<5e6;)r[n]=(null==i&&new o,i).nextInt_1(),n=n+1|0;b("Compare Count: "+function t(n,r,o){var i=0;if((r+1|0)<o){var p=(r+o|0)/2|0;i=(i=(i=i+t(n,r,p)|0)+t(n,p,o)|0)+function(t,n,r,o){var i=0,p=new Int32Array(1+(r-n|0)|0),a=new Int32Array(1+(o-r|0)|0),u=p.length-1|0,s=0,c=u-1|0;if(-2147483648!==u&&s<=c)do{var f=s;s=s+1|0,p[f]=t[n+f|0]}while(s<=c);var y=a.length-1|0,d=0,h=y-1|0;if(-2147483648!==y&&d<=h)do{var m=d;d=d+1|0,a[m]=t[r+m|0]}while(d<=h);p[e(p)]=l()._MAX_VALUE,a[e(a)]=l()._MAX_VALUE;var b=0,g=0,v=n,E=o-1|0;if(-2147483648!==o&&v<=E)do{var S,I=v;if(v=v+1|0,p[b]<a[g]){var j=b;b=j+1|0,S=p[j]}else{var x=g;g=x+1|0,S=a[x]}t[I]=S,i=i+1|0,_()}while(v<=E);return i}(n,r,p,o)|0}return i}(t=r,0,t.length)),b("end")}(),t})?r.apply(e,o):r)||(t.exports=i)}])}));
//# sourceMappingURL=main.js.map
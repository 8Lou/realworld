import{r as k,B as H,C as M,D,E as U,G as R,g as S,H as j,I as K,l as L,J as E}from"./entry.00d493d3.js";const z=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function N(n,a){a?a={...z,...a}:a=z;const r=P(a);return r.dispatch(n),r.toString()}const T=Object.freeze(["prototype","__proto__","constructor"]);function P(n){let a="",r=new Map;const e=t=>{a+=t};return{toString(){return a},getContext(){return r},dispatch(t){return n.replacer&&(t=n.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const s=Object.prototype.toString.call(t);let c="";const f=s.length;f<10?c="unknown:["+s+"]":c=s.slice(8,f-1),c=c.toLowerCase();let i=null;if((i=r.get(t))===void 0)r.set(t,r.size);else return this.dispatch("[CIRCULAR:"+i+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(c!=="object"&&c!=="function"&&c!=="asyncfunction")this[c]?this[c](t):n.ignoreUnknown||this.unkown(t,c);else{let u=Object.keys(t);n.unorderedObjects&&(u=u.sort());let h=[];n.respectType!==!1&&!C(t)&&(h=T),n.excludeKeys&&(u=u.filter(o=>!n.excludeKeys(o)),h=h.filter(o=>!n.excludeKeys(o))),e("object:"+(u.length+h.length)+":");const d=o=>{this.dispatch(o),e(":"),n.excludeValues||this.dispatch(t[o]),e(",")};for(const o of u)d(o);for(const o of h)d(o)}},array(t,s){if(s=s===void 0?n.unorderedArrays!==!1:s,e("array:"+t.length+":"),!s||t.length<=1){for(const i of t)this.dispatch(i);return}const c=new Map,f=t.map(i=>{const u=P(n);u.dispatch(i);for(const[h,d]of u.getContext())c.set(h,d);return u.toString()});return r=c,f.sort(),this.array(f,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,s){if(e(s),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),C(t)?this.dispatch("[native]"):this.dispatch(t.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),n.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const s=[...t];return this.array(s,n.unorderedSets!==!1)},set(t){e("set:");const s=[...t];return this.array(s,n.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(n.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const F="[native code] }",W=F.length;function C(n){return typeof n!="function"?!1:Function.prototype.toString.call(n).slice(-W)===F}class _{constructor(a,r){a=this.words=a||[],this.sigBytes=r===void 0?a.length*4:r}toString(a){return(a||I).stringify(this)}concat(a){if(this.clamp(),this.sigBytes%4)for(let r=0;r<a.sigBytes;r++){const e=a.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=e<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<a.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=a.words[r>>>2];return this.sigBytes+=a.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new _([...this.words])}}const I={stringify(n){const a=[];for(let r=0;r<n.sigBytes;r++){const e=n.words[r>>>2]>>>24-r%4*8&255;a.push((e>>>4).toString(16),(e&15).toString(16))}return a.join("")}},J={stringify(n){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let e=0;e<n.sigBytes;e+=3){const t=n.words[e>>>2]>>>24-e%4*8&255,s=n.words[e+1>>>2]>>>24-(e+1)%4*8&255,c=n.words[e+2>>>2]>>>24-(e+2)%4*8&255,f=t<<16|s<<8|c;for(let i=0;i<4&&e*8+i*6<n.sigBytes*8;i++)r.push(a.charAt(f>>>6*(3-i)&63))}return r.join("")}},$={parse(n){const a=n.length,r=[];for(let e=0;e<a;e++)r[e>>>2]|=(n.charCodeAt(e)&255)<<24-e%4*8;return new _(r,a)}},q={parse(n){return $.parse(unescape(encodeURIComponent(n)))}};class V{constructor(){this._data=new _,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new _,this._nDataBytes=0}_append(a){typeof a=="string"&&(a=q.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes}_doProcessBlock(a,r){}_process(a){let r,e=this._data.sigBytes/(this.blockSize*4);a?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,s=Math.min(t*4,this._data.sigBytes);if(t){for(let c=0;c<t;c+=this.blockSize)this._doProcessBlock(this._data.words,c);r=this._data.words.splice(0,t),this._data.sigBytes-=s}return new _(r,s)}}class G extends V{update(a){return this._append(a),this._process(),this}finalize(a){a&&this._append(a)}}const O=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Q=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],b=[];class X extends G{constructor(){super(...arguments),this._hash=new _([...O])}reset(){super.reset(),this._hash=new _([...O])}_doProcessBlock(a,r){const e=this._hash.words;let t=e[0],s=e[1],c=e[2],f=e[3],i=e[4],u=e[5],h=e[6],d=e[7];for(let o=0;o<64;o++){if(o<16)b[o]=a[r+o]|0;else{const v=b[o-15],w=(v<<25|v>>>7)^(v<<14|v>>>18)^v>>>3,m=b[o-2],A=(m<<15|m>>>17)^(m<<13|m>>>19)^m>>>10;b[o]=w+b[o-7]+A+b[o-16]}const p=i&u^~i&h,l=t&s^t&c^s&c,y=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),B=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),x=d+B+p+Q[o]+b[o],g=y+l;d=h,h=u,u=i,i=f+x|0,f=c,c=s,s=t,t=x+g|0}e[0]=e[0]+t|0,e[1]=e[1]+s|0,e[2]=e[2]+c|0,e[3]=e[3]+f|0,e[4]=e[4]+i|0,e[5]=e[5]+u|0,e[6]=e[6]+h|0,e[7]=e[7]+d|0}finalize(a){super.finalize(a);const r=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(e+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Y(n){return new X().finalize(n).toString(J)}function Z(n,a={}){const r=typeof n=="string"?n:N(n,a);return Y(r).slice(0,10)}const tt=()=>null;function et(...n){const a=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(a);let[r,e,t={}]=n;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=t.server??!0,t.default=t.default??tt,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0;const s=R(),c=()=>s.isHydrating?s.payload.data[r]:s.static.data[r],f=()=>c()!==void 0;(!s._asyncData[r]||!t.immediate)&&(s._asyncData[r]={data:k(c()??t.default()),pending:k(!f()),error:H(s.payload._errors,r),status:k("idle")});const i={...s._asyncData[r]};i.refresh=i.execute=(o={})=>{if(s._asyncDataPromises[r]){if(o.dedupe===!1)return s._asyncDataPromises[r];s._asyncDataPromises[r].cancelled=!0}if((o._initial||s.isHydrating&&o._initial!==!1)&&f())return c();i.pending.value=!0,i.status.value="pending";const p=new Promise((l,y)=>{try{l(e(s))}catch(B){y(B)}}).then(l=>{if(p.cancelled)return s._asyncDataPromises[r];let y=l;t.transform&&(y=t.transform(l)),t.pick&&(y=rt(y,t.pick)),i.data.value=y,i.error.value=null,i.status.value="success"}).catch(l=>{if(p.cancelled)return s._asyncDataPromises[r];i.error.value=l,i.data.value=S(t.default()),i.status.value="error"}).finally(()=>{p.cancelled||(i.pending.value=!1,s.payload.data[r]=i.data.value,i.error.value&&(s.payload._errors[r]=j(i.error.value)),delete s._asyncDataPromises[r])});return s._asyncDataPromises[r]=p,s._asyncDataPromises[r]};const u=()=>i.refresh({_initial:!0}),h=t.server!==!1&&s.payload.serverRendered;{const o=K();if(o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const l=o._nuxtOnBeforeMountCbs;o&&(M(()=>{l.forEach(y=>{y()}),l.splice(0,l.length)}),D(()=>l.splice(0,l.length)))}h&&s.isHydrating&&f()?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):o&&(s.payload.serverRendered&&s.isHydrating||t.lazy)&&t.immediate?o._nuxtOnBeforeMountCbs.push(u):t.immediate&&u(),t.watch&&U(t.watch,()=>i.refresh());const p=s.hook("app:data:refresh",l=>{if(!l||l.includes(r))return i.refresh()});o&&D(p)}const d=Promise.resolve(s._asyncDataPromises[r]).then(()=>i);return Object.assign(d,i),d}function rt(n,a){const r={};for(const e of a)r[e]=n[e];return r}function nt(n,a,r){const[e={},t]=typeof a=="string"?[{},a]:[a,r],s=L(()=>{let w=n;return typeof w=="function"&&(w=w()),S(w)}),c=e.key||Z([t,S(e.baseURL),typeof s.value=="string"?s.value:"",S(e.params||e.query)]);if(!c||typeof c!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+c);if(!n)throw new Error("[nuxt] [useFetch] request is missing.");const f=c===t?"$f"+c:c;if(!e.baseURL&&typeof s.value=="string"&&s.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:i,lazy:u,default:h,transform:d,pick:o,watch:p,immediate:l,...y}=e,B=E({...y,cache:typeof e.cache=="boolean"?void 0:e.cache}),x={server:i,lazy:u,default:h,transform:d,pick:o,immediate:l,watch:p===!1?[]:[B,s,...p||[]]};let g;return et(f,()=>{var m;return(m=g==null?void 0:g.abort)==null||m.call(g),g=typeof AbortController<"u"?new AbortController:{},typeof s.value=="string"&&s.value.startsWith("/"),(e.$fetch||globalThis.$fetch)(s.value,{signal:g.signal,...B})},x)}export{nt as u};

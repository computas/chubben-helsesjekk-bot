"use strict";exports.id=972,exports.ids=[972],exports.modules={7895:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(6005),a=n.n(r);let i={randomUUID:a().randomUUID},o=new Uint8Array(256),l=o.length,u=[];for(let e=0;e<256;++e)u.push((e+256).toString(16).slice(1));let d=function(e,t,n){if(i.randomUUID&&!t&&!e)return i.randomUUID();let r=(e=e||{}).random||(e.rng||function(){return l>o.length-16&&(a().randomFillSync(o),l=0),o.slice(l,l+=16)})();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=r[e];return t}return function(e,t=0){return(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase()}(r)}},16716:(e,t,n)=>{n.d(t,{default:()=>o});var r=n(28964),a=n(95094),i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};let o=(0,r.forwardRef)((e,t)=>{var{title:n,titleId:o}=e,l=i(e,["title","titleId"]);let u=(0,a.M)();return u=n?o||"title-"+u:void 0,r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":u},l),n?r.createElement("title",{id:u},n):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.287 5.807a.75.75 0 0 1 .463.693v11a.75.75 0 0 1-1.28.53l-5.5-5.5a.75.75 0 0 1 0-1.06l5.5-5.5a.75.75 0 0 1 .817-.163M9.561 12l3.689 3.69V8.31z",clipRule:"evenodd"}))})},95094:(e,t,n)=>{n.d(t,{M:()=>i});var r=n(28964);let a=r.useId;function i(e){var t;if(void 0!==a){let t=a();return null!=e?e:t.replace(/(:)/g,"")}return null!==(t=function(e){let[t,n]=(0,r.useState)(e);return e||t}(e))&&void 0!==t?t:""}},91484:(e,t,n)=>{n.d(t,{j:()=>a});let r={};function a(){return r}},26370:(e,t,n)=>{n.d(t,{dP:()=>a,jE:()=>r,vh:()=>i});let r=6048e5,a=864e5,i=36e5},50839:(e,t,n)=>{function r(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}n.d(t,{L:()=>r})},90600:(e,t,n)=>{n.d(t,{j:()=>l});var r=n(26370),a=n(82505);function i(e){let t=(0,a.Q)(e);return t.setHours(0,0,0,0),t}function o(e){let t=(0,a.Q)(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function l(e,t){let n=(0,a.Q)(e),l=(0,a.Q)(t),d=u(n,l),s=Math.abs(function(e,t){let n=i(e),a=i(t);return Math.round((+n-o(n)-(+a-o(a)))/r.dP)}(n,l));n.setDate(n.getDate()-d*s);let m=Number(u(n,l)===-d),f=d*(s-m);return 0===f?0:f}function u(e,t){let n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}},93435:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(26370),a=n(82505);function i(e,t,n){var i;let o=(+(0,a.Q)(e)-+(0,a.Q)(t))/r.vh;return(i=n?.roundingMethod,e=>{let t=(i?Math[i]:Math.trunc)(e);return 0===t?0:t})(o)}},15296:(e,t,n)=>{n.d(t,{Q:()=>u});var r=n(26370),a=n(39767),i=n(50839),o=n(82505),l=n(91484);function u(e,t){let n=(0,o.Q)(e);return Math.round((+(0,a.z)(n,t)-+function(e,t){let n=(0,l.j)(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,u=function(e,t){let n=(0,o.Q)(e),r=n.getFullYear(),u=(0,l.j)(),d=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??u.firstWeekContainsDate??u.locale?.options?.firstWeekContainsDate??1,s=(0,i.L)(e,0);s.setFullYear(r+1,0,d),s.setHours(0,0,0,0);let m=(0,a.z)(s,t),f=(0,i.L)(e,0);f.setFullYear(r,0,d),f.setHours(0,0,0,0);let c=(0,a.z)(f,t);return n.getTime()>=m.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}(e,t),d=(0,i.L)(e,0);return d.setFullYear(u,0,r),d.setHours(0,0,0,0),(0,a.z)(d,t)}(n,t))/r.jE)+1}},19447:(e,t,n)=>{n.d(t,{nb:()=>d});let r={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en m\xe5ned",other:"omtrent {{count}} m\xe5neder"},xMonths:{one:"en m\xe5ned",other:"{{count}} m\xe5neder"},aboutXYears:{one:"omtrent ett \xe5r",other:"omtrent {{count}} \xe5r"},xYears:{one:"ett \xe5r",other:"{{count}} \xe5r"},overXYears:{one:"over ett \xe5r",other:"over {{count}} \xe5r"},almostXYears:{one:"nesten ett \xe5r",other:"nesten {{count}} \xe5r"}};function a(e){return (t={})=>{let n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}let i={date:a({formats:{full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},defaultWidth:"full"}),time:a({formats:{full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:a({formats:{full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},o={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i g\xe5r kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"};function l(e){return(t,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&e.formattingValues){let t=e.defaultFormattingWidth||e.defaultWidth,a=n?.width?String(n.width):t;r=e.formattingValues[a]||e.formattingValues[t]}else{let t=e.defaultWidth,a=n?.width?String(n.width):e.defaultWidth;r=e.values[a]||e.values[t]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function u(e){return(t,n={})=>{let r;let a=n.width,i=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],o=t.match(i);if(!o)return null;let l=o[0],u=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(u)?function(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}(u,e=>e.test(l)):function(e,t){for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}(u,e=>e.test(l));return r=e.valueCallback?e.valueCallback(d):d,{value:r=n.valueCallback?n.valueCallback(r):r,rest:t.slice(l.length)}}}let d={code:"nb",formatDistance:(e,t,n)=>{let a;let i=r[e];return(a="string"==typeof i?i:1===t?i.one:i.other.replace("{{count}}",String(t)),n?.addSuffix)?n.comparison&&n.comparison>0?"om "+a:a+" siden":a},formatLong:i,formatRelative:(e,t,n,r)=>o[e],localize:{ordinalNumber:(e,t)=>Number(e)+".",era:l({values:{narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["f\xf8r Kristus","etter Kristus"]},defaultWidth:"wide"}),quarter:l({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:l({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},defaultWidth:"wide"}),day:l({values:{narrow:["S","M","T","O","T","F","L"],short:["s\xf8","ma","ti","on","to","fr","l\xf8"],abbreviated:["s\xf8n","man","tir","ons","tor","fre","l\xf8r"],wide:["s\xf8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\xf8rdag"]},defaultWidth:"wide"}),dayPeriod:l({values:{narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"p\xe5 morg.",afternoon:"p\xe5 etterm.",evening:"p\xe5 kvelden",night:"p\xe5 natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"p\xe5 morg.",afternoon:"p\xe5 etterm.",evening:"p\xe5 kvelden",night:"p\xe5 natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"p\xe5 morgenen",afternoon:"p\xe5 ettermiddagen",evening:"p\xe5 kvelden",night:"p\xe5 natten"}},defaultWidth:"wide"})},match:{ordinalNumber:function(e){return(t,n={})=>{let r=t.match(e.matchPattern);if(!r)return null;let a=r[0],i=t.match(e.parsePattern);if(!i)return null;let o=e.valueCallback?e.valueCallback(i[0]):i[0];return{value:o=n.valueCallback?n.valueCallback(o):o,rest:t.slice(a.length)}}}({matchPattern:/^(\d+)\.?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)}),era:u({matchPatterns:{narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^f/i,/^e/i]},defaultParseWidth:"any"}),quarter:u({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:u({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:u({matchPatterns:{narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:u({matchPatterns:{narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}}},39767:(e,t,n)=>{n.d(t,{z:()=>i});var r=n(82505),a=n(91484);function i(e,t){let n=(0,a.j)(),i=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=(0,r.Q)(e),l=o.getDay();return o.setDate(o.getDate()-((l<i?7:0)+l-i)),o.setHours(0,0,0,0),o}},82505:(e,t,n)=>{function r(e){let t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new e.constructor(+e):new Date("number"==typeof e||"[object Number]"===t||"string"==typeof e||"[object String]"===t?e:NaN)}n.d(t,{Q:()=>r})},29377:(e,t,n)=>{n.d(t,{a:()=>r});var r={done:!1,hasNext:!1}},96240:(e,t,n)=>{n.d(t,{a:()=>r});function r(e,t,n){let r=e.length-t.length;if(0===r)return e(...t);if(1===r){let r;return r=n=>e(n,...t),void 0===n?r:Object.assign(r,{lazy:n,lazyArgs:t})}throw Error("Wrong number of arguments")}},84920:(e,t,n)=>{n.d(t,{Z:()=>r});let r=(0,n(45347).createProxy)(String.raw`C:\Users\mabo\Documents\chubben\helsesjekk-bot\node_modules\@navikt\aksel-icons\dist\react\esm\CaretLeft.js#default`)},61121:(e,t,n)=>{n.d(t,{a:()=>a});var r=n(79460);function a(...e){return(0,r.a)(i,e)}var i=(e,t)=>e[t]},79460:(e,t,n)=>{n.d(t,{a:()=>r});function r(e,t,n){let r=e.length-t.length;if(0===r)return e(...t);if(1===r){let r;return r=n=>e(n,...t),void 0===n?r:Object.assign(r,{lazy:n,lazyArgs:t})}throw Error("Wrong number of arguments")}},83562:(e,t,n)=>{n.d(t,{a:()=>a});var r=n(79460);function a(...e){return(0,r.a)(i,e)}var i=(e,t)=>{let n={};for(let[r,a]of e.entries()){let i=t(a,r,e);if(void 0!==i){let{[i]:e}=n;void 0===e&&(e=[],n[i]=e),e.push(a)}}return n}}};
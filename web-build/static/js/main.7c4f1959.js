(()=>{"use strict";var e={6890:(e,t,r)=>{r.r(t),r.d(t,{default:()=>M});var n=r(5693),a=r(8077),o=r(2640),i=r(3034),l=r(9439),u=r(2365),f=r(8053),c=r(4333),s=r(3497),d=r(1133),h=r(9526),m=r(7557);function v(e){var t=e.onStart,r=(0,h.useState)(""),n=(0,l.default)(r,2),a=n[0],o=n[1];return(0,m.jsxs)(d.default,{style:{flexDirection:"row",flex:1,justifyContent:"center",alignItems:"center"},children:[(0,m.jsx)(s.default,{style:y.input,keyboardType:"numeric",onChangeText:function(e){return function(e){o(e.replace(/[^0-9]/g,""))}(e)},value:a,placeholder:"n"}),(0,m.jsx)(d.default,{children:(0,m.jsx)(u.default,{title:"Start",onPress:function(){f.default.dismiss(),t(parseInt(a))}})})]})}var y=c.default.create({input:{height:40,margin:12,borderWidth:1,padding:10,width:50,borderColor:"#050505"}}),g=r(2021),p=r(3455);function x(){var e=(0,h.useState)(),t=(0,l.default)(e,2),r=t[0],n=t[1],a=(0,h.useState)(),o=(0,l.default)(a,2),i=o[0],u=o[1],f=(0,h.useState)(),c=(0,l.default)(f,2),s=c[0],y=c[1];return(0,m.jsx)(d.default,{style:{flex:1,justifyContent:"center",alignItems:"center"},onLayout:function(e){!function(e){e.x,e.y;var t=e.width,r=e.height;u(t),y(r)}(e.nativeEvent.layout)},children:r>0?(0,m.jsx)(j,{n:r,width:i,height:s}):(0,m.jsx)(v,{onStart:function(e){n(e)}})})}function j(e){var t=e.n,r=e.width,n=e.height,a=function(e,t,r){var n=t*r/e,a=Math.sqrt(n),o=Math.min(r,t),i=Math.max(r,t);if(a<=o&&a<=i/e)return a;for(var l=1,u=0,f=0,c=0;f<=c;)u=o/l,f=i/Math.ceil(e/l),c=o/(l+1),l++;return Math.min(u,f)}(t,r,n),o=Math.floor(n/a),i=Math.floor(r/a);return(0,m.jsx)(d.default,{style:{flex:1,justifyContent:"center",alignItems:"center",width:r,height:n},children:(0,m.jsx)(d.default,{style:{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row"},children:Array.from({length:i},(function(e,r){return(0,m.jsx)(d.default,{children:Array.from({length:o},(function(e,r){if(t>0)return t--,(0,m.jsx)(w,{length:a},r)}))},r)}))})})}function w(e){var t=e.length,r=(0,h.useRef)(new g.default.Value(0)).current;(0,h.useEffect)((function(){!function e(){r.setValue(0),g.default.timing(r,{toValue:1,duration:2e3,easing:p.default.linear,useNativeDriver:!0}).start(e)}()}),[r]);var n=r.interpolate({inputRange:[0,1],outputRange:["0deg","360deg"]});return(0,m.jsx)(d.default,{style:{flex:1,alignItems:"center",justifyContent:"center"},children:(0,m.jsx)(g.default.View,{style:{width:t,height:t,backgroundColor:"#2196F3FF",borderWidth:1,borderColor:"black",transform:[{rotate:n}]}})})}var b=r(4506),A=r(9233);function C(){var e,t=function e(t){return t<=2?1:e(t-1)+e(t-2)},r=function(t){var r={data:t,left:null,right:null};if(null==e)e=r;else for(var n=e;null!=n;)if(t<n.data){if(null==n.left)return void(n.left=r);n=n.left}else{if(null==n.right)return void(n.right=r);n=n.right}},n=function e(t){if(0===t.length)return[];var r=(0,b.default)(t),n=r[0];return e(r.slice(1)).concat([n])};return(0,m.jsxs)(d.default,{style:{flex:1,justifyContent:"center",alignItems:"center"},children:[(0,m.jsx)(I,{name:"Fib",algorithmImplementation:function(e){var r=performance.now();return t(e),S(r,performance.now())}}),(0,m.jsx)(I,{name:"Matrix",algorithmImplementation:function(e){for(var t=Array.from(Array(e),(function(t,r){return Array.from(new Array(e),(function(e,t){return(r+1)*(t+1)}))})),r=Array.from(Array(e),(function(t,r){return Array.from(new Array(e),(function(e,t){return r+1+(t+1)}))})),n=Array.from(Array(e),(function(){return new Array(e)})),a=performance.now(),o=0;o<e;o++)for(var i=0;i<e;i++){for(var l=0,u=0;u<e;u++)l+=t[o][u]*r[u][i];n[o][i]=l}return S(a,performance.now())}}),(0,m.jsx)(I,{name:"Binary",algorithmImplementation:function(e){var t=Array.from(Array(e),(function(e,t){return Math.floor(1e3*(Math.sin(t)-Math.sin(t+1)))})),n=performance.now();for(var a of t)r(a);return S(n,performance.now())}}),(0,m.jsx)(I,{name:"Array",algorithmImplementation:function(e){var t=Array.from(Array(e),(function(e,t){return t})),r=performance.now();return n(t),S(r,performance.now())}})]})}function I(e){var t=e.name,r=e.algorithmImplementation,n=(0,h.useState)(null),a=(0,l.default)(n,2),o=a[0],i=a[1],u=(0,h.useState)(),f=(0,l.default)(u,2),c=f[0],s=f[1];return(0,m.jsxs)(d.default,{style:{flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[(0,m.jsxs)(A.default,{style:{width:50},children:[t,":"]}),(0,m.jsx)(v,{onStart:function(e){i(r(e)),s(e)}}),(0,m.jsx)(d.default,{style:{width:100},children:null!=o&&(0,m.jsxs)(A.default,{children:[o,"ms; n = ",c]})})]})}function S(e,t){var r=t-e;return Math.floor(r)}function M(){return(0,m.jsx)(n.default,{children:(0,m.jsx)(F,{})})}var O=(0,a.default)();function F(){return(0,m.jsxs)(O.Navigator,{initialRouteName:"UI-View",screenOptions:{title:"React Native Test App",headerStyle:{backgroundColor:"#2196F3FF"},headerTintColor:"#fff",tabBarActiveTintColor:"#2196F3FF",tabBarLabelPosition:"below-icon",unmountOnBlur:!0},children:[(0,m.jsx)(O.Screen,{name:"UI-View",component:x,options:{tabBarLabel:"UI-View",tabBarIcon:function(e){var t=e.color,r=e.size;return(0,m.jsx)(o.default,{name:"eye",color:t,size:r})}}}),(0,m.jsx)(O.Screen,{name:"Calculation-View",component:C,options:{tabBarLabel:"Calculation-View",tabBarIcon:function(e){var t=e.color,r=e.size;return(0,m.jsx)(i.default,{name:"calculate",color:t,size:r})}}})]})}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.m=e,(()=>{var e=[];r.O=(t,n,a,o)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,a,o]=e[c],l=!0,u=0;u<n.length;u++)(!1&o||i>=o)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(l=!1,o<i&&(i=o));if(l){e.splice(c--,1);var f=a();void 0!==f&&(t=f)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,a,o]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[i,l,u]=n,f=0;if(i.some((t=>0!==e[t]))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(u)var c=u(r)}for(t&&t(n);f<i.length;f++)o=i[f],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[353],(()=>r(9484)));n=r.O(n)})();
//# sourceMappingURL=main.7c4f1959.js.map
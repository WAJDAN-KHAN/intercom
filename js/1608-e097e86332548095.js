(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1608],{11432:function(e,t,i){"use strict";var n=i(930),r=i(85696),a=i(7980);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,i,l=e.src,s=e.sizes,b=e.unoptimized,S=void 0!==b&&b,z=e.priority,C=void 0!==z&&z,E=e.loading,I=e.className,x=e.quality,j=e.width,_=e.height,k=e.fill,L=e.style,R=e.onLoadingComplete,N=e.placeholder,O=void 0===N?"empty":N,A=e.blurDataURL,q=c(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoadingComplete","placeholder","blurDataURL"]),M=u.useContext(h.ImageConfigContext),B=u.useMemo(function(){var e=m||M||g.imageConfigDefault,t=[].concat(a(e.deviceSizes),a(e.imageSizes)).sort(function(e,t){return e-t}),i=e.deviceSizes.sort(function(e,t){return e-t});return o({},e,{allSizes:t,deviceSizes:i})},[M]),D=y;if("loader"in q){if(q.loader){var P,W=q.loader;D=function(e){e.config;var t=c(e,["config"]);return W(t)}}delete q.loader}var T="",U=v(j),F=v(_);if(function(e){var t;return"object"==typeof e&&(p(e)||void 0!==e.src)}(l)){var G=p(l)?l.default:l;if(!G.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(G)));if(!G.height||!G.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(G)));if(t=G.blurWidth,i=G.blurHeight,A=A||G.blurDataURL,T=G.src,!k){if(U||F){if(U&&!F){var Z=U/G.width;F=Math.round(G.height*Z)}else if(!U&&F){var H=F/G.height;U=Math.round(G.width*H)}}else U=G.width,F=G.height}}l="string"==typeof l?l:T;var V=!C&&("lazy"===E||void 0===E);(l.startsWith("data:")||l.startsWith("blob:"))&&(S=!0,V=!1),B.unoptimized&&(S=!0);var J=r(u.useState(!1),2),$=J[0],K=J[1],Q=r(u.useState(!1),2),X=Q[0],Y=Q[1],ee=v(x),et=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0}:{},X?{}:{color:"transparent"},L),ei="blur"===O&&A&&!$?{backgroundSize:et.objectFit||"cover",backgroundPosition:et.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(f.getImageBlurSvg({widthInt:U,heightInt:F,blurWidth:t,blurHeight:i,blurDataURL:A}),'")')}:{},en=function(e){var t=e.config,i=e.src,n=e.unoptimized,r=e.width,o=e.quality,l=e.sizes,s=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var c=function(e,t,i){var n=e.deviceSizes,r=e.allSizes;if(i){for(var o,l=/(^|\s)(1?\d?\d)vw/g,s=[];o=l.exec(i);o)s.push(parseInt(o[2]));if(s.length){var c=.01*Math.min.apply(Math,s);return{widths:r.filter(function(e){return e>=n[0]*c}),kind:"w"}}return{widths:r,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:a(new Set([t,2*t].map(function(e){return r.find(function(t){return t>=e})||r[r.length-1]}))),kind:"x"}}(t,r,l),u=c.widths,d=c.kind,f=u.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:u.map(function(e,n){return"".concat(s({config:t,src:i,quality:o,width:e})," ").concat("w"===d?e:n+1).concat(d)}).join(", "),src:s({config:t,src:i,quality:o,width:u[f]})}}({config:B,src:l,unoptimized:S,width:U,quality:ee,sizes:s,loader:D}),er=l,ea="imagesizes";ea="imageSizes";var eo=(n(P={},"imageSrcSet",en.srcSet),n(P,ea,en.sizes),n(P,"crossOrigin",q.crossOrigin),P),el=u.useRef(R);u.useEffect(function(){el.current=R},[R]);var es=o({isLazy:V,imgAttributes:en,heightInt:F,widthInt:U,qualityInt:ee,className:I,imgStyle:et,blurStyle:ei,loading:E,config:B,fill:k,unoptimized:S,placeholder:O,loader:D,srcString:er,onLoadingCompleteRef:el,setBlurComplete:K,setShowAltText:Y},q);return u.default.createElement(u.default.Fragment,null,u.default.createElement(w,Object.assign({},es)),C?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+en.src+en.srcSet+en.sizes,rel:"preload",as:"image",href:en.srcSet?void 0:en.src},eo))):null)};var o=i(6495).Z,l=i(92648).Z,s=i(91598).Z,c=i(17273).Z,u=s(i(67294)),d=l(i(72717)),f=i(88259),g=i(48187),h=i(89239);i(99475);var m={deviceSizes:[768,990,1024,1440],imageSizes:[128,175,256,384,512],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function p(e){return void 0!==e.default}function v(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function b(e,t,i,n,r){e&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){e.parentNode&&("blur"===i&&r(!0),(null==n?void 0:n.current)&&n.current(e))}))}var w=function(e){var t=e.imgAttributes,i=e.heightInt,n=e.widthInt,r=(e.qualityInt,e.className),a=e.imgStyle,l=e.blurStyle,s=e.isLazy,d=e.fill,f=e.placeholder,g=e.loading,h=e.srcString,m=(e.config,e.unoptimized,e.loader,e.onLoadingCompleteRef),p=e.setBlurComplete,v=e.setShowAltText,w=e.onLoad,y=e.onError,S=c(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=s?"lazy":g,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},S,t,{width:n,height:i,decoding:"async","data-nimg":"future".concat(d?"-fill":""),className:r,loading:g,style:o({},a,l),ref:u.useCallback(function(e){e&&(y&&(e.src=e.src),e.complete&&b(e,h,f,m,p))},[h,f,m,p,y]),onLoad:function(e){b(e.currentTarget,h,f,m,p),w&&w(e)},onError:function(e){v(!0),"blur"===f&&p(!0),y&&y(e)}})))};function y(e){var t=e.config,i=e.src,n=e.width,r=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},88259:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){var t=e.widthInt,i=e.heightInt,n=e.blurWidth,r=e.blurHeight,a=e.blurDataURL,o=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(n||t," ").concat(r||i,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&r?"1":"20","'/%3E").concat(o,"%3C/filter%3E%3Cimage filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E")}},930:function(e){e.exports=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e},e.exports.default=e.exports,e.exports.__esModule=!0},61608:function(e,t,i){e.exports=i(11432)}}]);
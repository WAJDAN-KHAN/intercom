"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2822],{15501:function(e,t,r){r.d(t,{Z:function(){return d}}),r(67294);var n=r(67213),i=r(35669),a=r(54521),o=r(40382),c=r(96975),s=r(7112),l=r(23355),u=r(85893);function d(e){var t=e.environment,r=e.nonce,d=e.pathname,p=e.query,f=e.cookie,g=e.userAgent,_=e.children,b=e.marketoForms,v=e.featureFlags,m=e.assignedVariations,h=e.glossaryItems;return(0,u.jsx)(c.Z.Provider,{value:b||[],children:(0,u.jsx)(s.Z.Provider,{value:{environment:t,nonce:r,query:p,cookie:f,userAgent:g},children:(0,u.jsx)(a.Z.Provider,{value:v,children:(0,u.jsx)(n.Z.Provider,{value:m||{},children:(0,u.jsx)(o.Z.Provider,{value:h||{},children:(0,u.jsx)(i.Z.Provider,{value:(0,l.Z)({localeCode:l.i,pathname:d,preserveQuery:!0}),children:_})})})})})})}},40382:function(e,t,r){r.d(t,{Q:function(){return a}});var n=r(67294),i=(0,n.createContext)([]);function a(){return(0,n.useContext)(i)}t.Z=i},96975:function(e,t,r){r.d(t,{q:function(){return a}});var n=r(67294),i=(0,n.createContext)([]);function a(){return(0,n.useContext)(i)}i.displayName="MarketoFormsContext",t.Z=i},70162:function(e,t,r){r.d(t,{oN:function(){return g},vs:function(){return x},H_:function(){return m},x7:function(){return v},BD:function(){return w},Ao:function(){return b}});var n=r(59499),i=r(16835),a=r(4730),o=r(67294),c=r(81472),s=(0,o.createContext)({activeIndex:0,maxIndex:0,inView:!1,setActiveIndex:function(){},onTriggerClick:function(){},behaviour:"accordion"}),l=function(){var e=(0,o.useContext)(s);if(void 0===e)throw Error("useDisclosureContext must be used within a DisclosureRoot");return e},u=r(85893),d=["id","behaviour","children","className"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g=function(e){var t=e.id,r=e.behaviour,n=e.children,l=e.className,p=(0,a.Z)(e,d),g=(0,o.useState)(0),_=g[0],b=g[1],v=(0,o.useState)(0),m=v[0],h=v[1],y=(0,o.useRef)([]),O=(0,o.useRef)(),j=(0,c.useInView)({amount:.65}),w=(0,i.Z)(j,2),x=w[0],P=w[1],I=function(e){b(e),"accordion"===r&&D(_,e)},D=function(e,t){var r=y.current[t],n=x.current.querySelectorAll('[role="region"]')[e];if(n&&r){var i=r.getBoundingClientRect(),a=e<t?null==n?void 0:n.offsetHeight:0,o=window.scrollY+i.top-a-.1*window.innerHeight;O.current=setTimeout(function(){window.scrollTo({top:o,behavior:"smooth"})},1)}};return(0,o.useLayoutEffect)(function(){var e=x.current.querySelectorAll("[data-disclosure-trigger]");y.current=Array.from(e),h(y.current.length-1)},[x]),(0,u.jsx)(s.Provider,{value:{inView:P,behaviour:r,defaultIndex:0,maxIndex:m,activeIndex:_,setActiveIndex:b,onTriggerClick:I},children:(0,u.jsx)("article",f(f({id:t,"data-disclosure-id":t,ref:x,className:l},p),{},{children:n}))})};function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var b=function(e){var t=e.orientation,r=o.useRef(null),i=l().behaviour,a=function(){var e;return Array.from(null===(e=r.current)||void 0===e?void 0:e.querySelectorAll("button[data-disclosure-trigger]"))},c=(0,o.useCallback)(function(e,t){var r=e[t];"tabs"===i&&(r.click(),r.focus())},[i]),s=(0,o.useCallback)(function(e,t){var r=e.indexOf(t),n=r<e.length-1?r+1:0;c(e,n)},[c]),u=(0,o.useCallback)(function(e,t){var r=e.indexOf(t),n=r>0?r-1:e.length-1;c(e,n)},[c]),d=(0,o.useCallback)(function(e){c(e,0)},[c]),p=(0,o.useCallback)(function(e){c(e,e.length-1)},[c]),f=(0,o.useCallback)(function(e){if(!e.defaultPrevented&&!e.isComposing){var t=a(),r=document.activeElement;switch(e.key){case"ArrowUp":case"ArrowLeft":e.preventDefault(),u(t,r);break;case"ArrowDown":case"ArrowRight":e.preventDefault(),s(t,r);break;case"Home":e.preventDefault(),d(t);break;case"End":e.preventDefault(),p(t)}}},[d,p,s,u]);return(0,o.useEffect)(function(){return r.current.addEventListener("keydown",f),function(){var e;null===(e=r.current)||void 0===e||e.removeEventListener("keydown",f)}},[i,f]),function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({ref:r},"tabs"===i?{role:"tablist","aria-orientation":void 0===t?"vertical":t}:{})},v=function(){var e=l().activeIndex,t=(0,c.useSpringRef)(),r=(0,c.useTransition)(e,{ref:t,keys:null,from:{opacity:0},enter:{opacity:1},leave:{position:"absolute",opacity:0}});return(0,o.useEffect)(function(){t.start()},[t,e]),r},m=function(e){var t=e.id;return{role:"tabpanel","aria-labelledby":"trigger-".concat(t),id:"panel-".concat(t),tabIndex:0}},h=r(36951),y=r(57927);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var w=function(e){var t=e.index,r=e.id,n=e.tracking,i=e.activationMode,a=l(),c=a.inView,s=a.behaviour,u=a.activeIndex,d=a.onTriggerClick,p=(0,o.useRef)(null),f=(0,o.useState)(!1),g=f[0],_=f[1],b=u===t,v=(0,o.useCallback)(function(){d(t),_(!0),n&&(0,y.NR)({action:h.M.Click,type:h.$.Button,text:n.text,location:n.location})},[t,d]);return(0,o.useEffect)(function(){u===t&&c||_(!1)},[u,t,c]),j(j({ref:p,type:"button",id:"trigger-".concat(r),active:b,selected:g},"tabs"===s?{role:"tab","aria-expanded":b,tabIndex:b?0:-1}:{role:"button","aria-selected":b,tabIndex:0}),{},{"aria-controls":"panel-".concat(r),"data-disclosure-trigger":"true"},{auto:{onMouseEnter:v,onFocus:v},manual:{onClick:v}}[void 0===i?"manual":i])},x=function(e){var t=e.index,r=e.id,n=l(),i=n.activeIndex,a=n.maxIndex,s=n.defaultIndex,u=n.behaviour,d=(0,o.useRef)(null),p=i===t,f=t===s&&p,g=(0,o.useCallback)(function(){var e=d.current.children[0];p&&(e.style.display="block"),requestAnimationFrame(function(){var t=p?null==e?void 0:e.offsetHeight:0;d.current.style.setProperty("--accordion-panel-height","".concat(t,"px"))})},[p]);(0,o.useEffect)(function(){g()},[g,p,u]);var _=function(){g()};return(0,c.useIsomorphicLayoutEffect)(function(){return window.addEventListener("resize",_),function(){window.removeEventListener("resize",_)}},[_]),(0,c.useIsomorphicLayoutEffect)(function(){d.current.children[0].style.display=f?"block":"none",d.current.style.setProperty("--accordion-panel-height","auto")},[]),{ref:d,role:"region","aria-labelledby":"trigger-".concat(r),isLast:t===a,id:"panel-".concat(r)}}},67710:function(e,t,r){r.d(t,{yo:function(){return h}});var n=r(59499),i=r(4730);r(67294);var a=r(94184),o=r.n(a),c=r(31069),s={hero_banner_content:"hero_banner_content__qe4Kh",hero_banner_root:"hero_banner_root__AItWe",hero_banner_media:"hero_banner_media__jDjn5"},l=r(85893),u=["className","dataTestId"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var p=function(e){var t=e.className,r=e.dataTestId,a=(0,i.Z)(e,u);return(0,l.jsx)(c.W,{size:"lg",gutter:!1,asChild:!0,children:(0,l.jsx)("article",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({"data-testid":r,className:o()(s.hero_banner_root,t)},a))})},f=r(48745),g=["className","dataTestId"];function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var b=function(e){var t=e.className,r=e.dataTestId,a=(0,i.Z)(e,g);return(0,l.jsx)(f.d,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({"data-testid":r,className:o()(s.hero_banner_media,t)},a))},v=["className","dataTestId"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var h={Root:p,Content:function(e){var t=e.className,r=e.dataTestId,a=(0,i.Z)(e,v);return(0,l.jsx)(c.W,{size:"lg",gutter:!0,asChild:!0,children:(0,l.jsx)("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({"data-testid":r,className:o()(s.hero_banner_content,t)},a))})},Media:b}},48745:function(e,t,r){r.d(t,{d:function(){return p}});var n=r(59499),i=r(4730);r(67294);var a=r(94184),o=r.n(a),c={hero_media_container:"hero_media_container__g9TPn",fill:"fill__ydvzY"},s=r(85893),l=["fill","dataTestId","className","children"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var p=function(e){var t=e.fill,r=e.dataTestId,a=e.className,u=e.children,p=(0,i.Z)(e,l);return(0,s.jsx)("div",d(d({"data-testid":r,className:o()(c.hero_media_container,(0,n.Z)({},c.fill,t),a)},p),{},{children:u}))}},68878:function(e,t,r){r.d(t,{a:function(){return m},x6:function(){return p},xy:function(){return T},x3:function(){return f},NZ:function(){return c},ss:function(){return w},x_:function(){return h},PL:function(){return C},C6:function(){return E}});var n=r(67294),i=r(34446),a=r(70162),o=r(85893),c=function(e){var t=e.id,r=e.className,n=e.dataTestId,c=e.children,s=(0,i.a)("(min-width: 760px)");return(0,o.jsx)(a.oN,{id:t,behaviour:!0===s?"tabs":"accordion",className:r,"data-testid":n,children:c})},s=r(59499),l=r(94184),u=r.n(l),d={product_card_layout:"product_card_layout__w_Kna",with_padding:"with_padding__k3YH_",with_rounded:"with_rounded__V61Qi",bg_none:"bg_none__A5Dim",bg_light:"bg_light__Vpv2e",layout_landscape:"layout_landscape__Fn9CU",layout_portrait:"layout_portrait___3GoO",layout_columns:"layout_columns__Pnssl",headless:"headless__dwyxX",reverse:"reverse__Xv7x6",product_card_region:"product_card_region__qUtdi",position_header:"position_header__Zegof",position_aside:"position_aside__E93_h",position_main:"position_main__CiS4V",position_cta:"position_cta__h7bXF",align_start:"align_start__zILEw",align_center:"align_center__Uvf4E",align_end:"align_end__M4Ko7",justify_start:"justify_start__ruWcC",justify_center:"justify_center__EvCud",justify_end:"justify_end__OcLCM",tab_panel_list:"tab_panel_list__xw8oL",tab_panel:"tab_panel__D6IXk",accordion_panel:"accordion_panel__DZiil",last:"last__PsQYl",trigger_list:"trigger_list__w8Xci",orientation_vertical:"orientation_vertical__I7JqF",orientation_horizontal:"orientation_horizontal__in9rX",trigger:"trigger__sROm5",trigger_progress_bg:"trigger_progress_bg__hW850",trigger_progress_bar:"trigger_progress_bar__EZ1fD",active:"active__F8fbf",user_selected:"user_selected__t2xPE",invert:"invert__Wlooy",trigger_title:"trigger_title__tS4V8",trigger_description:"trigger_description__QgHnL",trigger_learn_more:"trigger_learn_more__GAxnj",panel_media:"panel_media__DZl29"},p=function(e){var t,r=e.headless,n=e.layout,i=void 0===n?"landscape":n,a=e.reverse,c=e.bg,l=e.padding,p=e.rounded,f=e.children,g=e.className,_=u()(d.product_card_layout,(t={},(0,s.Z)(t,d["layout_".concat(i)],!0),(0,s.Z)(t,d.reverse,void 0!==a&&a),(0,s.Z)(t,d["bg_".concat(void 0===c?"light":c)],!0),(0,s.Z)(t,d.with_padding,void 0===l||l),(0,s.Z)(t,d.with_rounded,void 0===p||p),(0,s.Z)(t,d.headless,void 0!==r&&r),(0,s.Z)(t,"className",g),t));return(0,o.jsx)("div",{"data-i2-child":"product-card-layout","data-layout":i,className:u()(d.product_card,_),children:f})},f=function(e){var t,r=e.position,n=void 0===r?"main":r,i=e.align,a=e.justify,c=e.className,l=e.children;return(0,o.jsx)("div",{"data-i2-child":"product_card_region_".concat(n),className:u()(d.product_card_region,(t={},(0,s.Z)(t,d["position_".concat(n)],!0),(0,s.Z)(t,d["align_".concat(void 0===i?"stretch":i)],!0),(0,s.Z)(t,d["justify_".concat(void 0===a?"stretch":a)],!0),t),c),children:l})},g=r(4730),_=["ref","isLast"];function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m=function(e){var t=e.id,r=e.index,n=e.className,i=e.children,c=(0,a.vs)({id:t,index:r}),l=c.ref,p=c.isLast,f=(0,g.Z)(c,_);return(0,o.jsx)("div",v(v({},f),{},{"data-i2-child":"accordion-panel",className:u()(d.accordion_panel,(0,s.Z)({},d.last,p),n),ref:l,children:(0,o.jsx)("div",{children:i})}))},h=function(e){var t=e.layout,r=e.className,i=(0,a.x7)(),c=n.Children.toArray(e.children);return(0,o.jsx)("div",{"data-i2-layout":t,"data-i2-child":"product-card-tab-panel-list",className:u()(d.tab_panel_list,(0,s.Z)({},d["layout_".concat(t)],!0),r),children:i(function(e,t){return n.cloneElement(c[t],{style:e})})})},y=r(81472);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var w=function(e){var t=e.id,r=e.index,n=e.style,i=e.className,c=e.children,s=(0,a.H_)({id:t,index:r});return(0,o.jsx)(y.animated.div,j(j({},s),{},{className:u()(d.tab_panel,i),style:j({},n),children:c}))},x=r(68357),P=["ref","active","selected"];function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var C=function(e){var t=e.id,r=e.index,n=e.title,i=e.tracking,c=e.description,s=e.learnMoreUrl,l=e.invert,p=e.className,f=(0,a.BD)({index:r,id:t,tracking:i}),_=f.ref,b=f.active,v=f.selected,m=(0,g.Z)(f,P);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("button",D(D({ref:_},m),{},{"data-i2-child":"trigger",className:u()(d.trigger,b&&d.active,v&&d.user_selected,l&&d.invert,p),children:[(0,o.jsx)("div",{className:d.trigger_progress_bg}),(0,o.jsx)("div",{className:d.trigger_progress_bar}),(0,o.jsx)("span",{className:d.trigger_title,children:n}),(0,o.jsx)("span",{className:d.trigger_description,children:c})]})),s&&(0,o.jsx)(x.P,{href:s,"data-i2-child":"learn-more",font:"sans_bold",caret:!0,underline:!0,analyticsMetadata:null==i?void 0:i.location,className:u()(d.trigger_learn_more,b&&d.user_selected),children:"Learn more"})]})},Z=["ref"];function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var E=function(e){var t,r=e.orientation,n=void 0===r?"vertical":r,i=e.align,c=e.justify,l=(0,a.Ao)({orientation:n}),p=l.ref,f=(0,g.Z)(l,Z);return(0,o.jsx)("div",N(N({ref:p},f),{},{"data-i2-child":"trigger-list",className:u()(d.trigger_list,(t={},(0,s.Z)(t,d["orientation_".concat(n)],!0),(0,s.Z)(t,d["align_".concat(void 0===i?"start":i)],!0),(0,s.Z)(t,d["justify_".concat(void 0===c?"start":c)],!0),t),e.className),children:e.children}))},A=r(29314),S=r(73583),T=function(e){var t=e.sizes,r=e.bg,n=e.image,a=e.animation,c=(0,i.a)("screen and (prefers-reduced-motion)"),s=(0,i.a)("screen and (prefers-reduced-data)");return(0,o.jsxs)("div",{className:d.panel_media,children:[r?(0,o.jsx)(A.Ei,{fill:!0,src:r.src,lqipSet:r.lqipSet,alt:r.alt?r.alt:"Missing Alt Text",quality:90,sizes:r.sizes||t,"data-i2-child":"card-media-bg",className:d.bg}):null,!a||c||s?(0,o.jsx)(A.Ei,{src:n.src,alt:n.alt?n.alt:"Missing Alt Text",width:n.width,height:n.height,quality:90,sizes:n.sizes||t,"data-i2-child":"card-media-img"}):(0,o.jsx)(S.n,{autoplay:!0,position:"absolute",src:a.src,ratio:"".concat(a.width,"/").concat(a.height),"data-i2-child":"card-media-lottie"})]})}},73583:function(e,t,r){r.d(t,{n:function(){return b}});var n=r(59499),i=r(16835),a=r(67294),o=r(94184),c=r.n(o),s=r(4730),l=r(81472),u=r(25889),d={rive_wrapper:"rive_wrapper__K8O6j",in_view:"in_view__E2hI2",relative:"relative__db1Sn",absolute:"absolute__DSEvy",rive_inner_wrapper:"rive_inner_wrapper__go7Fc"},p=r(85893),f=["src","autoplay","alignment","fit","dataTestId"];function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var _=function(e){var t=e.src,r=e.autoplay,o=e.alignment,c=e.fit,_=e.dataTestId,b=(0,s.Z)(e,f),v=(0,l.useInView)({amount:.25}),m=(0,i.Z)(v,2),h=m[0],y=m[1],O=(0,u.useRive)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({src:t,autoplay:r,layout:new u.Layout({fit:c,alignment:o})},b)),j=O.RiveComponent,w=O.rive;return(0,a.useEffect)(function(){y&&w?null==w||w.play():null==w||w.pause()},[w,y]),(0,p.jsx)("div",{ref:h,"data-testid":_,className:d.rive_inner_wrapper,children:(0,p.jsx)(j,{})})},b=function(e){var t,r=e.src,a=e.autoplay,o=e.position,s=e.alignment,f=void 0===s?u.Alignment.Center:s,g=e.fit,b=void 0===g?u.Fit.Contain:g,v=e.priority,m=e.ratio,h=e.className,y=e.dataTestId,O=(0,l.useInView)({amount:.25,once:!0}),j=(0,i.Z)(O,2),w=j[0],x=j[1];return(0,p.jsx)("div",{ref:w,style:{aspectRatio:void 0===m?"16/9":m},className:c()(d.rive_wrapper,h,(t={},(0,n.Z)(t,d.in_view,v||x),(0,n.Z)(t,d[void 0===o?"relative":o],!0),t)),children:(0,p.jsx)("div",{"data-testid":y,className:c()(d.rive_inner_wrapper),children:(v||x)&&(0,p.jsx)(_,{src:r,autoplay:void 0===a||a,fit:b,alignment:f})})})}},45059:function(e,t,r){r.d(t,{t:function(){return l}});var n=r(59499);r(67294);var i=r(94184),a=r.n(i),o=r(88426),c={section_stack:"section_stack__i2Ohi",base:"base__YMDNF",lg:"lg__EVYIK",xl:"xl__fzTXj"},s=r(85893),l=function(e){var t=e.size,r=e.children,i=e.asChild,l=e.className,u=e.dataTestId,d=i?o.g7:"div";return(0,s.jsx)(d,{"data-testid":u,className:a()(c.section_stack,(0,n.Z)({},c[void 0===t?"base":t],!0),l),children:r})}},46565:function(e,t,r){r.d(t,{vX:function(){return f}});var n=r(59499);r(67294);var i=r(94184),a=r.n(i),o=r(57927),c=r(71607),s=r(99235),l=r(93039),u={section_intro:"section_intro__uM4XO",center:"center__ZTKcL",left:"left__IukXY",right:"right__GBUQF",title:"title__jBRjC",subtitle:"subtitle__I6B63",badge_container:"badge_container__WCmAj",cta_container:"cta_container__CiqDv"},d=r(36951),p=r(85893),f=function(e){var t,r=e.size,i=e.font,f=void 0===i?"serif":i,g=e.justify,_=e.heading,b=e.title,v=e.subtitle,m=e.badge,h=e.ctas,y=e.status,O=e.className,j=e.dataTestId,w=e.analyticsMetadata,x=(0,o.Fh)({action:d.M.Visible,type:d.$.Title,text:b,location:w||m&&"".concat(m.label," section")});return(0,p.jsxs)("div",{"data-testid":j,"data-i2-child":"section-intro",className:a()(u.section_intro,O,(t={},(0,n.Z)(t,u[f],!0),(0,n.Z)(t,u[void 0===g?"start":g],!0),t)),children:[m&&(0,p.jsxs)("div",{className:u.badge_container,children:[(0,p.jsx)(c.Ct,{color:m.color,variant:m.variant,children:m.label}),y&&(0,p.jsx)(c.Ct,{color:"grey",variant:"pill",withDot:!1,children:y})]}),(0,p.jsx)(l.sS,{"data-i2-child":"title",className:u.title,variant:{sm:"h4",base:"h3",lg:"h2"}[void 0===r?"base":r],font:f,ref:x,asChild:!0,children:(0,p.jsx)(void 0===_?"h2":_,{children:b})}),v&&(0,p.jsx)(l.xv,{"data-i2-child":"subtitle",font:"sans"===f?"serif":"sans",asChild:!0,children:(0,p.jsx)("p",{className:u.subtitle,children:v})}),h&&(0,p.jsx)("div",{className:u.cta_container,children:h.map(function(e,t){return(0,p.jsx)(s.eu,{analyticsMetadata:e.analyticsMetadata,href:e.href,intent:e.intent,children:e.text},t)})})]})}},14076:function(e,t,r){var n,i;r.d(t,{a:function(){return n}}),(i=n||(n={}))[i.Home=0]="Home",i[i.FinCopilot=1]="FinCopilot",i[i.ForCustomers=2]="ForCustomers",i[i.ForAgents=3]="ForAgents",i[i.ForLeaders=4]="ForLeaders",i[i.PricingCalculator=5]="PricingCalculator",i[i.NoIndex=6]="NoIndex"},11873:function(e,t,r){r.d(t,{E:function(){return c}});var n,i=r(59499),a=r(14076),o=JSON.parse('{"aA":{"cK":"https://images.ctfassets.net/xny2w179f4ki/79Nvz7jvpVbBARuz6I4KMf/b7df138f641f7216b1fe3a238b9fab89/og-homepage.png"},"iE":{"cK":"https://images.ctfassets.net/xny2w179f4ki/6a2M2tc44HuXuFkoOuYYlJ/28bc143e51bffc3986e795ec595a7cd1/og-copilot.png"},"QT":{"cK":"https://images.ctfassets.net/xny2w179f4ki/6WxHCBqoguGwK6iSJvsmfY/d3a4b75374221780dfe64a3111bebf21/og-for-leaders.png"},"aZ":{"cK":"https://images.ctfassets.net/xny2w179f4ki/4NYCC2qivGfosZqHYM60ET/085b775a56df0aa84c70743f4d96defc/og-for-agents.png"},"ue":{"cK":"https://images.ctfassets.net/xny2w179f4ki/3YkllSErWRZa4XQhkkZyNM/f9a510294ac57594f96de20f66440617/og-for-customers.png"},"Xi":{"cK":"https://images.ctfassets.net/xny2w179f4ki/nGjQSNOq9dDDnLorWVla6/1f9144452498b312c1c3ae0a37499a54/og-pricing-calculator.png"}}'),c=function(e){return s[e]},s=(n={},(0,i.Z)(n,a.a.Home,{disableCrawling:!1,metaTitle:"Intercom: The complete AI-first customer service solution",metaDescription:"Intercom is the complete AI-first customer service solution, giving exceptional experiences for support teams with AI agent, AI copilot, tickets, phone & more",openGraphImage:o.aA.cK,twitterImage:o.aA.cK}),(0,i.Z)(n,a.a.FinCopilot,{disableCrawling:!1,metaTitle:"Copilot, the personal AI assistant for every support agent | Intercom",metaDescription:"Intercom’s AI copilot gives every customer service agent their own personal AI assistant, providing expert support from your knowledge hub and conversations.",openGraphImage:o.iE.cK,twitterImage:o.iE.cK}),(0,i.Z)(n,a.a.ForCustomers,{disableCrawling:!1,metaTitle:"Offer an exceptional customer service experience | Intercom",metaDescription:"Increase your resolution rates & unlock 24/7 multilingual support with Intercom’s AI agent, omnichannel support & connected help center. Start a free trial.",openGraphImage:o.ue.cK,twitterImage:o.ue.cK}),(0,i.Z)(n,a.a.ForAgents,{disableCrawling:!1,metaTitle:"Empower customer support agents with AI first tools | Intercom",metaDescription:"Save agents time and increase productivity with Intercom’s AI-first platform using AI Copilot, tickets, phone support & shared inbox. Start a free trial.",openGraphImage:o.aZ.cK,twitterImage:o.aZ.cK}),(0,i.Z)(n,a.a.ForLeaders,{disableCrawling:!1,metaTitle:"Boost customer service team performance | Intercom",metaDescription:"Lower support volume & boost team performance with Intercom’s AI reports & insights, workflow automation, knowledge management, integrations & outbound messages",openGraphImage:o.QT.cK,twitterImage:o.QT.cK}),(0,i.Z)(n,a.a.PricingCalculator,{disableCrawling:!1,metaTitle:"Pricing Calculator | Intercom",metaDescription:"Calculate your estimated costs for using Intercom’s AI-first customer service. Choose the number of seats for Fin resolutions, Fin AI Copilot and Proactive Support Plus.",openGraphTitle:"Pricing Calculator | Intercom",openGraphDescription:"Calculate your estimated costs for using Intercom’s AI-first customer service",openGraphImage:o.Xi.cK,twitterImage:o.Xi.cK}),(0,i.Z)(n,a.a.NoIndex,{disableCrawling:!0,metaTitle:"Intercom: The complete AI-first customer service solution",metaDescription:"Intercom is the complete AI-first customer service solution, giving exceptional experiences for support teams with AI agent, AI copilot, tickets, phone & more",openGraphImage:o.aA.cK,twitterImage:o.aA.cK}),n)}}]);
(this["webpackJsonpapp-store"]=this["webpackJsonpapp-store"]||[]).push([[7],{117:function(e,n,t){"use strict";t.r(n);var s=t(68),i=t(2),a=t(70),c=t(17),l=t(63),u=t(78),r=t(74),o=t(75),d=t(77),m=t(66),p=t(10);n.default=Object(c.b)((function(e){return{reduxAppList:e.homepageApplist}}),(function(e){return{reduxChargePopularApplist:function(n){e(Object(a.e)(n))}}}))(Object(l.g)((function(e){var n=e.reduxChargePopularApplist,t=e.reduxAppList,a=Object(i.useState)(!1),c=Object(s.a)(a,2),l=c[0],b=c[1],h=Object(i.useState)(1),j=Object(s.a)(h,2),f=j[0],v=j[1],O=Object(i.useState)(!1),x=Object(s.a)(O,2),g=x[0],_=x[1],N=Object(i.useState)(!1),w=Object(s.a)(N,2),y=w[0],C=w[1],k=Object(i.useState)(null),M=Object(s.a)(k,2),S=M[0],E=M[1],L=Object(i.useRef)();return Object(i.useEffect)((function(){0===t.popular_applist.length&&(b(!0),fetch("".concat("https://apiv2.iphonecake.com","/v7/applist.php?p=1&type=top"),{method:"GET"}).then((function(e){return e.ok?e.json():(b(!0),Promise.reject())})).then((function(e){e&&e.info&&(b(!1),n(e.info),v(f+1))})))}),[]),Object(i.useEffect)((function(){var e=function(e){t.popular_applist.length>0&&L.current&&window.scrollY+window.innerHeight===L.current.clientHeight+60&&(C(!0),fetch("".concat("https://apiv2.iphonecake.com","/v7/applist.php?p=").concat(f,"&type=new"),{method:"GET"}).then((function(e){return e.ok?e.json():(C(!1),Promise.reject())})).then((function(e){e&&e.info&&e.info.length>0?(n(t.popular_applist.concat(e.info)),v(f+1),C(!1)):(alert("No more data!"),C(!1))})))};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),Object(p.jsxs)("div",{className:"popularBodyHeight",ref:L,children:[Object(p.jsx)("div",{style:{display:y?"block":"none"},children:Object(p.jsx)(m.a,{marginTop:0,fixed:!0})}),Object(p.jsx)(d.a,{menuModalOpen:g,setMenuModalOpen:_}),Object(p.jsx)(o.a,{menuModalOpen:g,setMenuModalOpen:_}),Object(p.jsx)(u.a,{handleSearch:function(e){E(e)}}),Object(p.jsx)(r.a,{items:t.popular_applist,itemsPending:l,itemMapList:S})]})})))},66:function(e,n,t){"use strict";t(2),t(71);var s=t(99),i=t(10);n.a=function(e){var n=e.marginTop,t=e.fixed;return Object(i.jsx)("div",{className:"pending",style:{minHeight:"calc(100vh - ".concat(n,"px)"),position:t?"fixed":"static"},children:Object(i.jsxs)("div",{className:"pending_box",children:[Object(i.jsx)(s.a,{color:"primary",className:"mb-1",style:{height:"50px",width:"50px"}}),Object(i.jsx)("h1",{style:{color:"#ffffff",marginTop:"20px"},children:"Loading..."})]})})}},70:function(e,n,t){"use strict";t.d(n,"d",(function(){return i})),t.d(n,"f",(function(){return a})),t.d(n,"e",(function(){return c})),t.d(n,"g",(function(){return o})),t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return l}));var s=t(7),i=function(e){return{type:s.a,payload:e}},a=function(e){return{type:s.c,payload:e}},c=function(e){return{type:s.b,payload:e}},l=function(e){return{type:s.f,payload:e}},u=function(e){return{type:s.e,payload:e}},r=function(e,n){var t=!n.indexOf(e)>-1?"".concat(n," ").concat(e):n;return{type:s.h,payload:t}},o=function(e,n,t){var i=n?n.split(" ").filter((function(e){return""!==e})):"",a="";return t||(!i.includes("menu-default")||e%4!==0&&e%4!==3||(e=1),i.includes("menu-sub-hidden")&&e%4===2&&(e=0),!i.includes("menu-hidden")||e%4!==2&&e%4!==3||(e=0)),e%4===0?(i.includes("menu-default")&&i.includes("menu-sub-hidden")?a="menu-default menu-sub-hidden":i.includes("menu-default")?a="menu-default":i.includes("menu-sub-hidden")?a="menu-sub-hidden":i.includes("menu-hidden")&&(a="menu-hidden"),e=0):e%4===1?i.includes("menu-default")&&i.includes("menu-sub-hidden")?a="menu-default menu-sub-hidden main-hidden sub-hidden":i.includes("menu-default")?a="menu-default sub-hidden":i.includes("menu-sub-hidden")?a="menu-sub-hidden main-hidden sub-hidden":i.includes("menu-hidden")&&(a="menu-hidden main-show-temporary"):e%4===2?i.includes("menu-default")&&i.includes("menu-sub-hidden")?a="menu-default menu-sub-hidden sub-hidden":i.includes("menu-default")?a="menu-default main-hidden sub-hidden":i.includes("menu-sub-hidden")?a="menu-sub-hidden sub-hidden":i.includes("menu-hidden")&&(a="menu-hidden main-show-temporary sub-show-temporary"):e%4===3&&(i.includes("menu-default")&&i.includes("menu-sub-hidden")?a="menu-default menu-sub-hidden sub-show-temporary":i.includes("menu-default")?a="menu-default sub-hidden":i.includes("menu-sub-hidden")?a="menu-sub-hidden sub-show-temporary":i.includes("menu-hidden")&&(a="menu-hidden main-show-temporary")),i.includes("menu-mobile")&&(a+=" menu-mobile"),{type:s.i,payload:{containerClassnames:a,menuClickCount:e}}}},71:function(e,n,t){},73:function(e,n,t){},74:function(e,n,t){"use strict";t(2);var s=t(67),i=t(103),a=t(66),c=t(10);n.a=function(e){var n=e.items,t=e.itemsPending,l=e.tweaked,u=e.itemMapList,r=function(e){l?window.open("about:blank").location.href="https://eapp.iphonecake.com/tw_install.php?id=".concat(e):window.open("about:blank").location.href="https://eapp.iphonecake.com/install.php?id=".concat(e)};return Object(c.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{flexDirection:"column",overflowY:"scroll"},children:t?Object(c.jsx)("div",{children:Object(c.jsx)(a.a,{marginTop:60})}):Object(c.jsxs)(c.Fragment,{children:[u?u.map((function(e){return l?Object(c.jsxs)("div",{className:"universal_item",children:[Object(c.jsx)("div",{className:"universal_item_imagebox",children:Object(c.jsx)("img",{className:"universal_item_image",src:e.icon,alt:""})}),Object(c.jsxs)("div",{className:"universal_item_infobox",children:[Object(c.jsx)("h2",{className:"universal_item_title m-0",children:e.name}),Object(c.jsxs)("div",{className:"universal_item_subinfo",children:["v",e.ver," By\xa0",e.seller]})]}),Object(c.jsx)("div",{className:"universal_item_buttonbox",children:Object(c.jsx)(i.a,{onClick:function(){r(e.id)},className:"universal_item_button",children:"GET"})})]},e.app_id):Object(c.jsxs)(s.b,{to:"/item/".concat(e.id),className:"universal_item",children:[Object(c.jsx)("div",{className:"universal_item_imagebox",children:Object(c.jsx)("img",{className:"universal_item_image",src:e.icon,alt:""})}),Object(c.jsxs)("div",{className:"universal_item_infobox",children:[Object(c.jsx)("h2",{className:"universal_item_title m-0",children:e.name}),Object(c.jsxs)("div",{className:"universal_item_subinfo",children:["v",e.ver," By\xa0",e.seller]})]}),Object(c.jsx)("div",{className:"universal_item_buttonbox",children:Object(c.jsx)(i.a,{onClick:function(){r(e.id)},className:"universal_item_button",children:"GET"})})]},e.app_id)})):n.map((function(e){return l?Object(c.jsxs)("div",{to:"/item/".concat(e.app_id),className:"universal_item",children:[Object(c.jsx)("div",{className:"universal_item_imagebox",children:Object(c.jsx)("img",{className:"universal_item_image",src:e.icon,alt:""})}),Object(c.jsxs)("div",{className:"universal_item_infobox",children:[Object(c.jsx)("h2",{className:"universal_item_title m-0",children:e.app_name}),Object(c.jsxs)("div",{className:"universal_item_subinfo",children:["v",e.version," By\xa0",e.intro]})]}),Object(c.jsx)("div",{className:"universal_item_buttonbox",children:Object(c.jsx)(i.a,{onClick:function(){return r(e.app_id)},className:"universal_item_button",children:"GET"})})]},e.app_id):Object(c.jsxs)(s.b,{to:"/item/".concat(e.app_id),className:"universal_item",children:[Object(c.jsx)("div",{className:"universal_item_imagebox",children:Object(c.jsx)("img",{className:"universal_item_image",src:e.icon,alt:""})}),Object(c.jsxs)("div",{className:"universal_item_infobox",children:[Object(c.jsx)("h2",{className:"universal_item_title m-0",children:e.app_name}),Object(c.jsxs)("div",{className:"universal_item_subinfo",children:["v",e.version," By\xa0",e.intro]})]}),Object(c.jsx)("div",{className:"universal_item_buttonbox",children:Object(c.jsx)(i.a,{onClick:function(){return r(e.app_id)},className:"universal_item_button",children:"GET"})})]},e.app_id)})),t?null:Object(c.jsx)("div",{className:"item_dash"})]})})}},75:function(e,n,t){"use strict";t(2);var s=t(103),i=(t(76),t(10));n.a=function(e){var n=e.menuModalOpen,t=e.setMenuModalOpen;return Object(i.jsxs)("div",{className:"home_header",children:[Object(i.jsx)("div",{className:"home_menu d-flex align-items-center",children:Object(i.jsx)(s.a,{className:"home_menu_button",onClick:function(){t(!n)},children:Object(i.jsx)("div",{style:{transform:"scale(2)"},className:"d-flex align-items-center justify-content-center",children:Object(i.jsx)("i",{className:"simple-icon-menu home_menu_button_icon"})})})}),Object(i.jsx)("div",{className:"home_title w-100 h-100",children:Object(i.jsx)("h1",{className:"m-0 p-0",children:"AppCake"})})]})}},76:function(e,n,t){},77:function(e,n,t){"use strict";var s=t(2),i=t(120),a=t(79),c=t(80),l=t(81),u=t(83),r=t(82),o=t(17),d=t(11),m=t.n(d),p=t(114),b=t(115),h=t(116),j=t(67),f=t(63),v=t(64),O=t.n(v),x=t(86),g=t.n(x),_=t(70),N=[{id:"gogo",to:"/user",subs:[{icon:"simple-icon-notebook",label:"Latest",to:"/latest"},{icon:"simple-icon-star",label:"Popular",to:"/popular"},{icon:"simple-icon-social-dropbox",label:"Tweaked",to:"/tweaked"}]}],w=t(10),y=function(e){Object(u.a)(t,e);var n=Object(r.a)(t);function t(e){var s;return Object(a.a)(this,t),(s=n.call(this,e)).handleWindowResize=function(e){var n=s.props.containerClassnames;if(!e||e.isTrusted){var t=s.getMenuClassesForResize(n);s.props.setContainerClassnames(0,t.join(" "),s.props.selectedMenuHasSubItems)}},s.handleDocumentClick=function(e){var n=s.getContainer(),t=!1;(e.target&&e.target.classList&&(e.target.classList.contains("menu-button")||e.target.classList.contains("menu-button-mobile"))||e.target.parentElement&&e.target.parentElement.classList&&(e.target.parentElement.classList.contains("menu-button")||e.target.parentElement.classList.contains("menu-button-mobile"))||e.target.parentElement&&e.target.parentElement.parentElement&&e.target.parentElement.parentElement.classList&&(e.target.parentElement.parentElement.classList.contains("menu-button")||e.target.parentElement.parentElement.classList.contains("menu-button-mobile")))&&(t=!0),n.contains(e.target)||n===e.target||t||(s.setState({viewingParentMenu:""}),s.toggle())},s.getMenuClassesForResize=function(e){var n=s.props,t=n.menuHiddenBreakpoint,i=n.subHiddenBreakpoint,a=e.split(" ").filter((function(e){return""!==e})),c=window.innerWidth;return c<t?a.push("menu-mobile"):c<i?(a=a.filter((function(e){return"menu-mobile"!==e}))).includes("menu-default")&&!a.includes("menu-sub-hidden")&&a.push("menu-sub-hidden"):(a=a.filter((function(e){return"menu-mobile"!==e}))).includes("menu-default")&&a.includes("menu-sub-hidden")&&(a=a.filter((function(e){return"menu-sub-hidden"!==e}))),a},s.getContainer=function(){return m.a.findDOMNode(Object(l.a)(s))},s.toggle=function(){var e=s.getIsHasSubItem();s.props.changeSelectedMenuHasSubItems(e);var n=s.props,t=n.containerClassnames,i=n.menuClickCount,a=t?t.split(" ").filter((function(e){return""!==e})):"",c=-1;e?a.includes("menu-sub-hidden")&&3===i?c=2:(a.includes("menu-hidden")||a.includes("menu-mobile"))&&(c=0):!a.includes("menu-default")||i%4!==0&&i%4!==3?!a.includes("menu-sub-hidden")||2!==i&&3!==i?(a.includes("menu-hidden")||a.includes("menu-mobile"))&&(c=0):c=0:c=1,c>=0&&s.props.setContainerClassnames(c,t,e)},s.handleProps=function(){s.addEvents()},s.addEvents=function(){["click","touchstart","touchend"].forEach((function(e){return document.addEventListener(e,s.handleDocumentClick,!0)}))},s.removeEvents=function(){["click","touchstart","touchend"].forEach((function(e){return document.removeEventListener(e,s.handleDocumentClick,!0)}))},s.setSelectedLiActive=function(e){var n=document.querySelector(".sub-menu  li.active");null!=n&&n.classList.remove("active");var t=document.querySelector(".third-level-menu  li.active");null!=t&&t.classList.remove("active");var i=document.querySelector(".third-level-menu  a.active");null!=i&&i.parentElement.classList.add("active");var a=document.querySelector(".sub-menu  a.active");if(null!=a)a.parentElement.classList.add("active"),s.setState({selectedParentMenu:a.parentElement.parentElement.getAttribute("data-parent")},e);else{var c=document.querySelector(".main-menu  li a.active");null!=c?s.setState({selectedParentMenu:c.getAttribute("data-flag")},e):""===s.state.selectedParentMenu&&s.setState({selectedParentMenu:N[0].id},e)}},s.setHasSubItemStatus=function(){var e=s.getIsHasSubItem();s.props.changeSelectedMenuHasSubItems(e),s.toggle()},s.getIsHasSubItem=function(){var e=s.state.selectedParentMenu,n=N.find((function(n){return n.id===e}));return!!n&&!!(n&&n.subs&&n.subs.length>0)},s.openSubMenu=function(e,n){var t=n.id,i=n.subs&&n.subs.length>0;if(s.props.changeSelectedMenuHasSubItems(i),i){e.preventDefault();var a=s.props,c=a.containerClassnames,l=a.menuClickCount,u=c?c.split(" ").filter((function(e){return""!==e})):"";u.includes("menu-mobile")?s.props.addContainerClassname("sub-show-temporary",c):!u.includes("menu-sub-hidden")||2!==l&&0!==l?!u.includes("menu-hidden")||1!==l&&3!==l?!u.includes("menu-default")||u.includes("menu-sub-hidden")||1!==l&&3!==l||s.props.setContainerClassnames(0,c,i):s.props.setContainerClassnames(2,c,i):s.props.setContainerClassnames(3,c,i),s.setState({viewingParentMenu:t})}else s.setState({viewingParentMenu:t,selectedParentMenu:t}),s.toggle()},s.toggleMenuCollapse=function(e,n){e.preventDefault();var t=s.state.collapsedMenus;return t.indexOf(n)>-1?s.setState({collapsedMenus:t.filter((function(e){return e!==n}))}):(t.push(n),s.setState({collapsedMenus:t})),!1},s.filteredList=function(e){var n=s.props.currentUser;return n?e.filter((function(e){return e.roles&&e.roles.includes(n.role)||!e.roles})):e},s.state={selectedParentMenu:"",viewingParentMenu:"",collapsedMenus:[],submenuDisplay:!0},s}return Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&(this.setSelectedLiActive(this.setHasSubItemStatus),window.scrollTo(0,0)),this.handleProps()}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize(),this.handleProps(),this.setSelectedLiActive(this.setHasSubItemStatus)}},{key:"componentWillUnmount",value:function(){this.removeEvents(),window.removeEventListener("resize",this.handleWindowResize)}},{key:"render",value:function(){var e=this,n=this.state,t=(n.selectedParentMenu,n.viewingParentMenu,n.collapsedMenus),s=n.submenuDisplay;return Object(w.jsx)("div",{className:"sidebar",children:Object(w.jsx)("div",{className:"sub-menu",style:{display:s?"block":"none"},children:Object(w.jsx)("div",{className:"scroll",children:Object(w.jsx)(g.a,{options:{suppressScrollX:!0,wheelPropagation:!1},children:N?this.filteredList(N).map((function(n){return Object(w.jsx)(p.a,{className:O()({"d-block":e.state.selectedParentMenu===n.id&&""===e.state.viewingParentMenu||e.state.viewingParentMenu===n.id}),"data-parent":n.id,children:n.subs&&e.filteredList(n.subs).map((function(s,i){return Object(w.jsx)(b.a,{onClick:function(){(0,e.props.setMenuModalOpen)(!1)},className:"".concat(s.subs&&s.subs.length>0?"has-sub-item":""),children:s.newWindow?Object(w.jsxs)("a",{href:s.to,rel:"noopener noreferrer",target:"_blank",children:[Object(w.jsx)("i",{className:s.icon})," ",Object(w.jsxs)("h3",{className:"m-0 p-0",children:[Object(w.jsx)("i",{className:s.icon})," ",s.label]})]}):s.subs&&s.subs.length>0?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(j.c,{className:"rotate-arrow-icon opacity-50 ".concat(-1===t.indexOf("".concat(n.id,"_").concat(i))?"":"collapsed"),to:s.to,id:"".concat(n.id,"_").concat(i),onClick:function(t){return e.toggleMenuCollapse(t,"".concat(n.id,"_").concat(i))},children:[Object(w.jsx)("i",{className:"simple-icon-arrow-down"})," ",Object(w.jsxs)("h3",{className:"m-0 p-0",children:[Object(w.jsx)("i",{className:s.icon})," ",s.label]})]}),Object(w.jsx)(h.a,{isOpen:-1===t.indexOf("".concat(n.id,"_").concat(i)),children:Object(w.jsx)(p.a,{className:"third-level-menu",children:e.filteredList(s.subs).map((function(e,t){return Object(w.jsx)(b.a,{children:e.newWindow?Object(w.jsxs)("a",{href:e.to,rel:"noopener noreferrer",target:"_blank",children:[Object(w.jsx)("i",{className:e.icon})," ",e.label]}):Object(w.jsxs)(j.c,{to:e.to,children:[Object(w.jsx)("i",{className:e.icon})," ",e.label]})},"".concat(n.id,"_").concat(i,"_").concat(t))}))})})]}):Object(w.jsx)(j.c,{to:s.to,children:Object(w.jsxs)("h3",{className:"m-0 p-0",children:[Object(w.jsx)("i",{className:s.icon})," ",s.label]})})},"".concat(n.id,"_").concat(i))}))},n.id)})):Object(w.jsx)("div",{})})})})})}}]),t}(s.Component),C=Object(f.g)(Object(o.b)((function(e){var n=e.menu;return{containerClassnames:n.containerClassnames,subHiddenBreakpoint:n.subHiddenBreakpoint,menuHiddenBreakpoint:n.menuHiddenBreakpoint,menuClickCount:n.menuClickCount,selectedMenuHasSubItems:n.selectedMenuHasSubItems}}),{setContainerClassnames:_.g,addContainerClassname:_.a,changeDefaultClassnames:_.b,changeSelectedMenuHasSubItems:_.c})(y));n.a=function(e){var n=e.menuModalOpen,t=e.setMenuModalOpen;return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(i.a,{isOpen:n,wrapClassName:"universal-modal-left",children:Object(w.jsx)(C,{setMenuModalOpen:t})})})}},78:function(e,n,t){"use strict";var s=t(68),i=t(2),a=t(113),c=(t(73),t(66)),l=t(10),u=function(){var e=Object(i.useState)(null),n=Object(s.a)(e,2),t=n[0],a=n[1];return Object(i.useEffect)((function(){fetch("ad.json").then((function(e){return e.json()})).then((function(e){a(e.html)}))}),[]),Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})};n.a=function(e){var n=e.tweaked,t=e.handleSearch,r=Object(i.useState)(""),o=Object(s.a)(r,2),d=o[0],m=o[1],p=Object(i.useState)(!1),b=Object(s.a)(p,2),h=b[0],j=b[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{style:{display:h?"block":"none"},children:Object(l.jsx)(c.a,{marginTop:0,fixed:!0})}),Object(l.jsxs)("div",{className:"searchbar",children:[Object(l.jsx)(a.a,{type:"search",value:d,className:"searchbar_input h-100",placeholder:"Search",onChange:function(e){m(e.target.value)},onKeyUp:function(e){13===e.keyCode&&(""===d.replace(/(^\s*)|(\s*$)/g,"")?t(null):(j(!0),n?fetch("".concat("https://apiv2.iphonecake.com","/v7/tweak_search.php?q=").concat(d),{method:"GET"}).then((function(e){return e.ok?e.json():(alert("System Error ".concat(e.status,", please contact with Dev Team!")),j(!1),Promise.reject())})).then((function(e){j(!1),t(e.list)})):fetch("".concat("https://apiv2.iphonecake.com","/v7/appsearch.php?q=").concat(d),{method:"GET"}).then((function(e){return e.ok?e.json():(alert("System Error ".concat(e.status,", please contact with Dev Team!")),j(!1),Promise.reject())})).then((function(e){j(!1),t(e.list)}))))}}),Object(l.jsx)("div",{className:"searchbar_icon",style:{transform:"scale(1.4)"},children:Object(l.jsx)("i",{className:"simple-icon-magnifier"})}),Object(l.jsx)("img",{src:"".concat("","/adHTML.png"),alt:""})]}),Object(l.jsx)(u,{})]})}}}]);
//# sourceMappingURL=7.0f7aeabe.chunk.js.map
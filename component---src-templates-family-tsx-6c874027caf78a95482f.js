(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"4NV/":function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var r=t("ERkP"),n=t.n(r),l=function(){return n.a.createElement("div",{className:"separator"})}},"9pK0":function(e,a,t){"use strict";var r=t("SN++"),n=t("ERkP"),l=t.n(n),c=t("O94r"),i=t.n(c);a.a=function(e){return l.a.forwardRef((function(a,t){return l.a.createElement("div",Object(r.a)({},a,{ref:t,className:i()(a.className,e)}))}))}},Ba1N:function(e,a,t){"use strict";var r=t("SN++"),n=t("hkJn"),l=t("O94r"),c=t.n(l),i=t("ERkP"),o=t.n(i),m=t("Jloh"),s=t("9zGm"),u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.active,i=e.children,u=e.className,d=e.as,b=void 0===d?"li":d,f=e.linkAs,p=void 0===f?s.a:f,E=e.linkProps,v=e.href,g=e.title,N=e.target,h=Object(n.a)(e,["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"]),y=Object(m.a)(t,"breadcrumb-item");return o.a.createElement(b,Object(r.a)({ref:a},h,{className:c()(y,u,{active:l}),"aria-current":l?"page":void 0}),l?i:o.a.createElement(p,Object(r.a)({},E,{href:v,title:g,target:N}),i))}));u.displayName="BreadcrumbItem",u.defaultProps={active:!1,linkProps:{}};var d=u,b=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.listProps,s=e.children,u=e.label,d=e.as,b=void 0===d?"nav":d,f=Object(n.a)(e,["bsPrefix","className","listProps","children","label","as"]),p=Object(m.a)(t,"breadcrumb");return o.a.createElement(b,Object(r.a)({"aria-label":u,className:l,ref:a},f),o.a.createElement("ol",Object(r.a)({},i,{className:c()(p,null==i?void 0:i.className)}),s))}));b.displayName="Breadcrumb",b.defaultProps={label:"breadcrumb",listProps:{}},b.Item=d;a.a=b},GLu6:function(e,a,t){"use strict";t("izFX");var r=t("ERkP"),n=t.n(r),l=t("tMbb"),c=t("Wbzz"),i=t("6c1n"),o=t.n(i),m=t("LUDU");a.a=function(e){var a=e.product,t=a.primaryPhoto?a.primaryPhoto.file.childImageSharp.fluid:void 0,r=Object(c.useStaticQuery)("1174895840").allFile.nodes[0].childImageSharp.fluid;return n.a.createElement("div",{className:"col-md-4 col-sm-6"},n.a.createElement(l.Link,{to:"/"+a.slug,className:"product-link"},n.a.createElement(m.a,null,t?n.a.createElement(o.a,{fluid:t}):n.a.createElement(o.a,{fluid:r}),n.a.createElement(m.a.Body,null,n.a.createElement(m.a.Title,{className:"text-center"},a.name)))))}},LUDU:function(e,a,t){"use strict";var r=t("SN++"),n=t("hkJn"),l=t("O94r"),c=t.n(l),i=t("ERkP"),o=t.n(i),m=t("Jloh"),s=t("KsuF"),u=t("9pK0"),d=t("NfA7"),b=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.variant,s=e.as,u=void 0===s?"img":s,d=Object(n.a)(e,["bsPrefix","className","variant","as"]),b=Object(m.a)(t,"card-img");return o.a.createElement(u,Object(r.a)({ref:a,className:c()(i?b+"-"+i:b,l)},d))}));b.displayName="CardImg",b.defaultProps={variant:null};var f=b,p=Object(u.a)("h5"),E=Object(u.a)("h6"),v=Object(s.a)("card-body"),g=Object(s.a)("card-title",{Component:p}),N=Object(s.a)("card-subtitle",{Component:E}),h=Object(s.a)("card-link",{Component:"a"}),y=Object(s.a)("card-text",{Component:"p"}),P=Object(s.a)("card-header"),O=Object(s.a)("card-footer"),j=Object(s.a)("card-img-overlay"),k=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,s=e.bg,u=e.text,b=e.border,f=e.body,p=e.children,E=e.as,g=void 0===E?"div":E,N=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),h=Object(m.a)(t,"card"),y=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return o.a.createElement(d.a.Provider,{value:y},o.a.createElement(g,Object(r.a)({ref:a},N,{className:c()(l,h,s&&"bg-"+s,u&&"text-"+u,b&&"border-"+b)}),f?o.a.createElement(v,null,p):p))}));k.displayName="Card",k.defaultProps={body:!1},k.Img=f,k.Title=g,k.Subtitle=N,k.Body=v,k.Link=h,k.Text=y,k.Header=P,k.Footer=O,k.ImgOverlay=j;a.a=k},xLm4:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return v}));t("bVRK"),t("HiP7"),t("YJP+"),t("97js"),t("FSl4"),t("qfyY"),t("/sgr"),t("izFX"),t("Tz2Q");var r=t("ERkP"),n=t.n(r),l=t("x/ZH"),c=t("tMbb"),i=t("9Dj+"),o=t("H8eV"),m=t("GLu6"),s=t("zJh8"),u=t("qPZV"),d=t("xPLO"),b=t("zHzs"),f=t("4NV/");function p(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,a){if(!e)return;if("string"==typeof e)return E(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return E(e,a)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,r=new Array(a);t<a;t++)r[t]=e[t];return r}var v="2267201886";a.default=function(e){var a,t,r,E,v,g,N,h=e.data.allorsProductCategory,y=null===(a=h.categoryImage)||void 0===a||null===(t=a.file)||void 0===t||null===(r=t.childImageSharp)||void 0===r||null===(E=r.original)||void 0===E?void 0:E.src,P=p(h._children||[]).sort((function(e,a){return e.name&&a.name&&e.name.localeCompare(a.name)}));null!=h.allProducts&&(g=p((null===(N=h.allProducts)||void 0===N?void 0:N.map((function(e){return e.UnifiedGood})))||[]).sort((function(e,a){return e.name&&a.name&&e.name.localeCompare(a.name)})));return n.a.createElement(i.a,null,n.a.createElement(o.a,{title:h.name,description:null!==(v=h.seoDescription)&&void 0!==v?v:h.description,image:y}),n.a.createElement("main",{role:"main"},n.a.createElement("article",null,n.a.createElement("header",{className:"page-header"},n.a.createElement(s.a,null,n.a.createElement(u.a,null,n.a.createElement(d.a,null,n.a.createElement(b.a,{section:"catalogue",family:h}),n.a.createElement("h1",{className:"page-title"},h.name),n.a.createElement("p",{className:"page-description"},h.seoDescription),n.a.createElement(f.a,null))))),n.a.createElement(s.a,null,n.a.createElement(u.a,null,n.a.createElement(d.a,{xl:"3",lg:"4",xs:"12"},n.a.createElement("div",{className:"list-group mb-4"},n.a.createElement(c.Link,{to:"/catalogue",className:"list-group-item list-group-item-action active"},n.a.createElement(l.a,{icon:"chevron-left"})," ",n.a.createElement(c.FormattedMessage,{id:"back"})),P&&P.map((function(e){return n.a.createElement(c.Link,{key:"/"+e.slug,to:"/"+e.slug,className:"list-group-item list-group-item-action"},e.name)})))),n.a.createElement(d.a,{xl:"9",lg:"8",xs:"12"},n.a.createElement(u.a,null,g&&g.map((function(e){return n.a.createElement(m.a,{key:e.slug,product:e})})))))))))}},zHzs:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));t("izFX");var r=t("ERkP"),n=t.n(r),l=t("tMbb"),c=t("Ba1N"),i=function(e){var a=e.section,t=e.family,r=e.group,i=e.product;return n.a.createElement(c.a,null,n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(l.Link,{to:"/"},n.a.createElement(l.FormattedMessage,{id:"home"}))),a&&!(t||r)&&n.a.createElement(c.a.Item,{active:!0},n.a.createElement(l.FormattedMessage,{id:a})),a&&(t||r)&&n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(l.Link,{to:"/"+a},n.a.createElement(l.FormattedMessage,{id:a}))),t&&!r&&n.a.createElement(c.a.Item,{active:!0},t.name),t&&r&&n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(l.Link,{to:"/"+t.slug},t.name)),r&&!i&&n.a.createElement(c.a.Item,{active:!0},r.name),r&&i&&n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(l.Link,{to:"/"+r.slug},r.name)),i&&n.a.createElement(c.a.Item,{active:!0},i.name))}}}]);
//# sourceMappingURL=component---src-templates-family-tsx-6c874027caf78a95482f.js.map
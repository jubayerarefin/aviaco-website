(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"4NV/":function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var r=t("ERkP"),n=t.n(r),l=function(){return n.a.createElement("div",{className:"separator"})}},"58i5":function(e,a,t){"use strict";var r=t("nGXB"),n=t("4cZ3").find,l=t("M3SG"),c=t("noml"),i=!0,s=c("find");"find"in[]&&Array(1).find((function(){i=!1})),r({target:"Array",proto:!0,forced:i||!s},{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),l("find")},Ba1N:function(e,a,t){"use strict";var r=t("SN++"),n=t("hkJn"),l=t("O94r"),c=t.n(l),i=t("ERkP"),s=t.n(i),m=t("Jloh"),o=t("9zGm"),d=s.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.active,i=e.children,d=e.className,u=e.as,f=void 0===u?"li":u,E=e.linkAs,b=void 0===E?o.a:E,p=e.linkProps,v=e.href,N=e.title,g=e.target,h=Object(n.a)(e,["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"]),w=Object(m.a)(t,"breadcrumb-item");return s.a.createElement(f,Object(r.a)({ref:a},h,{className:c()(w,d,{active:l}),"aria-current":l?"page":void 0}),l?i:s.a.createElement(b,Object(r.a)({},p,{href:v,title:N,target:g}),i))}));d.displayName="BreadcrumbItem",d.defaultProps={active:!1,linkProps:{}};var u=d,f=s.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.listProps,o=e.children,d=e.label,u=e.as,f=void 0===u?"nav":u,E=Object(n.a)(e,["bsPrefix","className","listProps","children","label","as"]),b=Object(m.a)(t,"breadcrumb");return s.a.createElement(f,Object(r.a)({"aria-label":d,className:l,ref:a},E),s.a.createElement("ol",Object(r.a)({},i,{className:c()(b,null==i?void 0:i.className)}),o))}));f.displayName="Breadcrumb",f.defaultProps={label:"breadcrumb",listProps:{}},f.Item=u;a.a=f},NOKo:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return b}));t("izFX"),t("58i5");var r=t("ERkP"),n=t.n(r),l=t("6c1n"),c=t.n(l),i=t("9Dj+"),s=t("H8eV"),m=t("4NV/"),o=t("zHzs"),d=t("zJh8"),u=t("qPZV"),f=t("xPLO"),E=t("tMbb"),b="1440587780";a.default=function(e){var a=e.data,t=Object(E.useIntl)(),r=a.allFile.edges.find((function(e){return"taos"===e.node.name})).node.childImageSharp.fluid;return n.a.createElement(i.a,null,n.a.createElement(s.a,{title:t.formatMessage({id:"news-seo-title"}),description:t.formatMessage({id:"news-seo-description"}),keywords:t.formatMessage({id:"news-seo-keyword"})}),n.a.createElement("main",{role:"main"},n.a.createElement("article",null,n.a.createElement("header",{className:"page-header"},n.a.createElement(d.a,null,n.a.createElement(u.a,null,n.a.createElement(f.a,null,n.a.createElement(o.a,{section:"whatsnew"}),n.a.createElement("h1",{className:"page-title"},n.a.createElement(E.FormattedMessage,{id:"whats-new"})),n.a.createElement("p",{className:"page-description"},n.a.createElement(E.FormattedMessage,{id:"whats-new-description"})),n.a.createElement(m.a,null))))),function(e){switch(e){case"fr":case"es":return n.a.createElement(d.a,null,n.a.createElement(u.a,null));default:return n.a.createElement(d.a,null,n.a.createElement(u.a,null,n.a.createElement(f.a,null,n.a.createElement(c.a,{fluid:r,className:"img-fluid",alt:"TAOS"}))))}}(t.locale))))}},zHzs:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));t("izFX");var r=t("ERkP"),n=t.n(r),l=t("tMbb"),c=t("Ba1N"),i=function(e){var a=e.section,t=e.family,r=e.group,i=e.product;return n.a.createElement(c.a,null,n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(l.Link,{to:"/"},n.a.createElement(l.FormattedMessage,{id:"home"}))),a&&!(t||r)&&n.a.createElement(c.a.Item,{active:!0},n.a.createElement(l.FormattedMessage,{id:a})),a&&(t||r)&&n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(l.Link,{to:"/"+a},n.a.createElement(l.FormattedMessage,{id:a}))),t&&!r&&n.a.createElement(c.a.Item,{active:!0},t.name),t&&r&&n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(l.Link,{to:"/"+t.slug},t.name)),r&&!i&&n.a.createElement(c.a.Item,{active:!0},r.name),r&&i&&n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(l.Link,{to:"/"+r.slug},r.name)),i&&n.a.createElement(c.a.Item,{active:!0},i.name))}}}]);
//# sourceMappingURL=component---src-pages-news-tsx-68d7a5e2e15bc0ebe9c3.js.map
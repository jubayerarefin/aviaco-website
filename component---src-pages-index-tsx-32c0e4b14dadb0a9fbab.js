(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"4NV/":function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("ERkP"),r=t.n(n),l=function(){return r.a.createElement("div",{className:"separator"})}},"58i5":function(e,a,t){"use strict";var n=t("nGXB"),r=t("4cZ3").find,l=t("M3SG"),c=t("noml"),o=!0,i=c("find");"find"in[]&&Array(1).find((function(){o=!1})),n({target:"Array",proto:!0,forced:o||!i},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),l("find")},"9pK0":function(e,a,t){"use strict";var n=t("SN++"),r=t("ERkP"),l=t.n(r),c=t("O94r"),o=t.n(c);a.a=function(e){return l.a.forwardRef((function(a,t){return l.a.createElement("div",Object(n.a)({},a,{ref:t,className:o()(a.className,e)}))}))}},LUDU:function(e,a,t){"use strict";var n=t("SN++"),r=t("hkJn"),l=t("O94r"),c=t.n(l),o=t("ERkP"),i=t.n(o),m=t("Jloh"),s=t("KsuF"),u=t("9pK0"),d=t("NfA7"),f=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,o=e.variant,s=e.as,u=void 0===s?"img":s,d=Object(r.a)(e,["bsPrefix","className","variant","as"]),f=Object(m.a)(t,"card-img");return i.a.createElement(u,Object(n.a)({ref:a,className:c()(o?f+"-"+o:f,l)},d))}));f.displayName="CardImg",f.defaultProps={variant:null};var p=f,E=Object(u.a)("h5"),g=Object(u.a)("h6"),h=Object(s.a)("card-body"),b=Object(s.a)("card-title",{Component:E}),v=Object(s.a)("card-subtitle",{Component:g}),y=Object(s.a)("card-link",{Component:"a"}),N=Object(s.a)("card-text",{Component:"p"}),k=Object(s.a)("card-header"),w=Object(s.a)("card-footer"),q=Object(s.a)("card-img-overlay"),O=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,s=e.bg,u=e.text,f=e.border,p=e.body,E=e.children,g=e.as,b=void 0===g?"div":g,v=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(m.a)(t,"card"),N=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return i.a.createElement(d.a.Provider,{value:N},i.a.createElement(b,Object(n.a)({ref:a},v,{className:c()(l,y,s&&"bg-"+s,u&&"text-"+u,f&&"border-"+f)}),p?i.a.createElement(h,null,E):E))}));O.displayName="Card",O.defaultProps={body:!1},O.Img=p,O.Title=b,O.Subtitle=v,O.Body=h,O.Link=y,O.Text=N,O.Header=k,O.Footer=w,O.ImgOverlay=q;a.a=O},QeBL:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return v}));t("bVRK"),t("HiP7"),t("YJP+"),t("97js"),t("FSl4"),t("qfyY"),t("/sgr"),t("Tz2Q"),t("izFX"),t("58i5");var n=t("ERkP"),r=t.n(n),l=t("x/ZH"),c=t("6c1n"),o=t.n(c),i=t("tMbb"),m=t("9Dj+"),s=t("H8eV"),u=t("4NV/"),d=t("Zgaf"),f=t("zJh8"),p=t("qPZV"),E=t("xPLO"),g=t("LUDU");function h(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,a){if(!e)return;if("string"==typeof e)return b(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,a)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}var v="555073931";a.default=function(e){var a,t=e.data,n=Object(i.useIntl)(),c=t.allFile,b=t.allAllorsSerialisedItem,v=t.allorsCatalogue,y=function(e){for(var a,t=null!==(a=null==e?void 0:e.slice(0))&&void 0!==a?a:[],n=t.length-1;n>0;n--){var r=Math.floor(Math.random()*(n+1)),l=[t[r],t[n]];t[n]=l[0],t[r]=l[1]}return t}(null===(a=b.nodes)||void 0===a?void 0:a.filter((function(e){var a;return null===(a=e.primaryPhoto)||void 0===a?void 0:a.file.childImageSharp}))).slice(0,4),N=r.a.useState(!1),k=N[0],w=N[1],q=c.edges.find((function(e){return"heroshot"===e.node.name})).node.childImageSharp.fluid,O=c.edges.find((function(e){return"quote"===e.node.name})).node.childImageSharp.fluid,j=h(v.productCategories).sort((function(e,a){return e.name&&a.name&&e.name.localeCompare(a.name)}));return r.a.createElement(m.a,null,r.a.createElement(s.a,{title:n.formatMessage({id:"home-seo-title"}),keywords:n.formatMessage({id:"home-seo-keyword"}),description:n.formatMessage({id:"home-seo-description"})}),r.a.createElement("main",{role:"main"},r.a.createElement("section",{id:"home-heroshot"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(E.a,{md:"12",lg:"12"},r.a.createElement("div",{className:"text-content"},q&&r.a.createElement("div",{className:"video"},k&&r.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{title:"Company Presentation Video",className:"embed-responsive-item",src:"https://www.youtube.com/embed/N-n8Ouxikhs?autoplay=1",allow:"autoplay; encrypted-media"})),!k&&r.a.createElement("div",{className:"video-wrapper",onClick:function(){return w(!0)}},r.a.createElement(o.a,{fluid:q,className:"img-fluid heroshot",alt:"Aviaco,supplying and management of Ground Support Equipment"}),r.a.createElement("div",{className:"play-btn"}))),function(e){switch(e){case"fr":return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"À propos d'Aviaco"),r.a.createElement("p",{className:"text-justify"},"Aviaco est une multinationale, spécialisée dans la fourniture et la gestion d'équipements de GSE pour le secteur de l'aviation."),r.a.createElement("h2",null,"Nos services de base"),r.a.createElement("ul",{className:"fa-ul"},r.a.createElement("li",null,r.a.createElement(l.a,{icon:"check"})," Vente et achat de matériel d'assistance au sol de haute qualité dans le monde entier"),r.a.createElement("li",null,r.a.createElement(l.a,{icon:"check"})," Location GSE court et long terme"),r.a.createElement("li",null,r.a.createElement(l.a,{icon:"check"})," Réparation & maintenance"),r.a.createElement("li",null,r.a.createElement(l.a,{icon:"check"})," Gestion de flotte")));case"es":return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Sobre Aviaco"),r.a.createElement("p",{className:"text-justify"},"Aviaco es una empresa multinacional centrada en el suministro y la gestión de equipos de apoyo en tierra (GSE) para el sector de la aviación."),r.a.createElement("h2",null,"Nuestros servicios centrales"),r.a.createElement("ul",{className:"fa-ul"},r.a.createElement("li",null,r.a.createElement(l.a,{icon:"check"})," Compra y venta de equipos de apoyo en tierra de alta calidad en todo el mundo"),r.a.createElement("li",null,r.a.createElement(l.a,{icon:"check"})," Alquiler de equipos a corto y largo plazo"),r.a.createElement("li",null,r.a.createElement(l.a,{icon:"check"})," Reparación y Mantenimiento"),r.a.createElement("li",null,r.a.createElement(l.a,{icon:"check"})," Gestión de flotas")));default:return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Aviaco: specialists in Ground Support Equipment"),r.a.createElement("p",{className:"text-justify"},"Aviaco specialises in ground support equipment. Are you looking to invest? You’ll find we offer a huge range of new and second-hand ground support equipment for sale and for lease. Rely on our repair and maintenance services to keep your equipment running smoothly. And we also offer fleet management to help you keep track of every piece of equipment at your airport."),r.a.createElement("h2",null,"Our core services"),r.a.createElement("p",{className:"text-justify"},"With over 25 years of experience in the ground support industry, Aviaco has the skills and expertise to offer a full range of services for ground support equipment. What do our services include?"),r.a.createElement("ul",{className:"fa-ul"},r.a.createElement("li",null,r.a.createElement(l.a,{icon:"check"}),r.a.createElement("span",{className:"font-weight-bold"},"Sale of high-quality ground support equipment"),r.a.createElement("p",null,"Brand new? Or fully refurbished second-hand GSE? You’ll find what you need with Aviaco.")),r.a.createElement("li",null,r.a.createElement(l.a,{icon:"check"}),r.a.createElement("span",{className:"font-weight-bold"},"Leasing of ground support equipment"),r.a.createElement("p",null,"GSE temporarily out of action? Are you looking for a long-term lease? Aviaco is at your service.")),r.a.createElement("li",null,r.a.createElement(l.a,{icon:"check"}),r.a.createElement("span",{className:"font-weight-bold"},"The purchase of your old equipment"),r.a.createElement("p",null,"Is your old and out-of-use ground support equipment rusting away? Find out what it’s worth ...")),r.a.createElement("li",null,r.a.createElement(l.a,{icon:"check"}),r.a.createElement("span",{className:"font-weight-bold"},"Repair and maintenance"),r.a.createElement("p",null,"Keep your ground support equipment in excellent condition and you’ll keep downtime to a minimum.")),r.a.createElement("li",null,r.a.createElement(l.a,{icon:"check"}),r.a.createElement("span",{className:"font-weight-bold"},"Fleet management"),r.a.createElement("p",null,"Let Aviaco manage your ground support equipment for you."))))}}(n.locale)),r.a.createElement("div",{className:"readmore"},r.a.createElement(i.Link,{to:"/about",className:"btn btn-primary"},r.a.createElement(i.FormattedMessage,{id:"read-more"})," ",r.a.createElement(l.a,{icon:"angle-right"}))))))),r.a.createElement("section",null,r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(E.a,{md:"8",lg:"8"},r.a.createElement("h2",null,r.a.createElement(i.FormattedMessage,{id:"current-offers"}))),r.a.createElement(E.a,{md:"4",lg:"4",className:"text-right product-nav"},r.a.createElement(i.Link,{to:"/offers",className:"block"},r.a.createElement(i.FormattedMessage,{id:"current-offers"})))),r.a.createElement(u.a,null),r.a.createElement(p.a,null,y.map((function(e){return r.a.createElement(d.a,{key:e.allorsId,item:e})}))))),r.a.createElement("section",{id:"home-quote"},r.a.createElement(f.a,null,r.a.createElement(p.a,{className:"align-items-center no-gutters quote-bg"},r.a.createElement(E.a,{lg:"6",md:"6",className:"quote"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},r.a.createElement(i.FormattedMessage,{id:"quote"})),r.a.createElement("footer",{className:"blockquote-footer"},r.a.createElement("cite",{title:"Source Title"},"A satisfied customer")))),r.a.createElement(E.a,{lg:"6",md:"6",className:"d-none d-lg-block pl-0 pr-0"},r.a.createElement(o.a,{fluid:O,className:"img-fluid",alt:"A satisfied customer"}))))),r.a.createElement("section",null,r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(E.a,{md:"8",lg:"8"},r.a.createElement("h2",null,r.a.createElement(i.FormattedMessage,{id:"categories"}))),r.a.createElement(E.a,{md:"4",lg:"4",className:"text-right product-nav"},r.a.createElement(i.Link,{to:"/catalogue",className:"block"},r.a.createElement(i.FormattedMessage,{id:"catalogue"})),r.a.createElement(i.Link,{to:"/brands",className:"block"},r.a.createElement(i.FormattedMessage,{id:"brands"})))),r.a.createElement(u.a,null),r.a.createElement(p.a,null,r.a.createElement(E.a,{md:"12",lg:"12",xl:"12",className:"order-lg-2"},r.a.createElement(p.a,null,j&&j.map((function(e){var a=e.categoryImage.file.childImageSharp.fluid;return r.a.createElement(E.a,{key:e.slug,lg:"3",md:"4",xs:"6"},r.a.createElement(i.Link,{to:"/"+e.slug,key:e.slug,className:"product-link"},r.a.createElement(g.a,null,r.a.createElement(o.a,{fluid:a}),r.a.createElement(g.a.Body,null,r.a.createElement(g.a.Title,null,e.name)))))})))))))))}},Zgaf:function(e,a,t){"use strict";t("izFX");var n=t("ERkP"),r=t.n(n),l=t("tMbb"),c=t("6c1n"),o=t.n(c),i=t("LUDU"),m=t("xPLO");a.a=function(e){var a,t=e.item,n=t.primaryPhoto?t.primaryPhoto.file.childImageSharp.fluid:void 0,c=null===(a=t.partWhereSerialisedItem)||void 0===a?void 0:a.UnifiedGood;return c&&r.a.createElement(m.a,{sm:"12",md:"3",lg:"3"},r.a.createElement(l.Link,{to:"/"+c.slug,className:"product-link"},r.a.createElement(i.a,null,n&&r.a.createElement(o.a,{fluid:n}),r.a.createElement(i.a.Body,null,r.a.createElement(i.a.Title,{className:"text-center"},c.name)))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-32c0e4b14dadb0a9fbab.js.map
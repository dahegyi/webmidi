"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[85,554],{6416:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var t=n(7294),l=n(6010),i=n(2719),s=n(3905),r=n(7707),c=n(1575),o=n(2822),m="mdxPageWrapper_3qD3";var d=function(e){var a=e.content,n=a.frontMatter,d=a.metadata,u=n.title,v=n.description,f=n.wrapperClassName,g=n.hide_table_of_contents,N=d.permalink;return t.createElement(i.Z,{title:u,description:v,permalink:N,wrapperClassName:null!=f?f:o.kM.wrapper.mdxPages,pageClassName:o.kM.page.mdxPage},t.createElement("main",{className:"container container--fluid margin-vert--lg"},t.createElement("div",{className:(0,l.Z)("row",m)},t.createElement("div",{className:(0,l.Z)("col",!g&&"col--8")},t.createElement(s.Zo,{components:r.Z},t.createElement(a,null))),!g&&a.toc&&t.createElement("div",{className:"col col--2"},t.createElement(c.Z,{toc:a.toc,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level})))))}},1575:function(e,a,n){n.d(a,{Z:function(){return m}});var t=n(3117),l=n(102),i=n(7294),s=n(6010),r=n(5002),c="tableOfContents_35-E",o=["className"];var m=function(e){var a=e.className,n=(0,l.Z)(e,o);return i.createElement("div",{className:(0,s.Z)(c,"thin-scrollbar",a)},i.createElement(r.Z,(0,t.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(3117),l=n(102),i=n(7294),s=n(2822),r=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function c(e){var a=e.toc,n=e.className,t=e.linkClassName,l=e.isChild;return a.length?i.createElement("ul",{className:l?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(c,{isChild:!0,toc:e.children,className:n,linkClassName:t}))}))):null}function o(e){var a=e.toc,n=e.className,o=void 0===n?"table-of-contents table-of-contents__left-border":n,m=e.linkClassName,d=void 0===m?"table-of-contents__link":m,u=e.linkActiveClassName,v=void 0===u?void 0:u,f=e.minHeadingLevel,g=e.maxHeadingLevel,N=(0,l.Z)(e,r),p=(0,s.LU)(),_=null!=f?f:p.tableOfContents.minHeadingLevel,k=null!=g?g:p.tableOfContents.maxHeadingLevel,E=(0,s.DA)({toc:a,minHeadingLevel:_,maxHeadingLevel:k}),C=(0,i.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:_,maxHeadingLevel:k}}),[d,v,_,k]);return(0,s.Si)(C),i.createElement(c,(0,t.Z)({toc:E,className:o,linkClassName:d},N))}},7472:function(e,a,n){n.d(a,{Z:function(){return u}});var t=n(7294),l=(n(9960),n(2822)),i=n(4996),s="footer_2bJW",r="container_J_cY",c="copyright_3Nz8",o="sponsor_W6vH",m="sponsors_N4HH",d=(n(9750),n(541),n(2263));var u=function(){(0,d.Z)().siteConfig;var e=(0,l.LU)().footer,a=e||{},n=a.copyright,u=(a.links,a.logo),v=void 0===u?{}:u;return(0,i.Z)(v.src),(0,i.Z)(v.srcDark||v.src),e?t.createElement("footer",{className:"footer "+s},t.createElement("div",{className:"container "+r},t.createElement("div",{className:o},t.createElement("p",null,"This video was produced with financial support from:"),t.createElement("div",{className:m},t.createElement("img",{src:"../../../static/img/sponsors/logo-cegep-edouard.svg",alt:"logo Cegep Edouard-Montpetit"}))),n?t.createElement("div",{className:"footer__copyright "+c,dangerouslySetInnerHTML:{__html:n}}):null)):null}}}]);
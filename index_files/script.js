(()=>{"use strict";function t(t){t.toggleClass("accordion__item--active");const c=t.find(".accordion__body");if(c.get(0))if(t.hasClass("accordion__item--active")){const t=c.get(0).scrollHeight;c.css("height",t)}else c.css("height",0)}document.addEventListener("DOMContentLoaded",(function(){$(".accordion__target").on("click",(function(){let c=$(this).parents(".accordion__item"),i=c.parent(".accordion").find(".accordion__item--active").not(c);i&&t(i),t(c)})),$(".accordion--default-open > :first-child").each((function(){t($(this))}))}))})();
//# sourceMappingURL=script.js.map
!function(e){"use strict";var n=function(e,n){var t=e.find(".countter"),o="#"+t.attr("id"),d=t.data("delay"),r=t.data("time");n(o).counterUp({delay:d,time:r})};e(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/single-counter.default",n)}))}(jQuery);
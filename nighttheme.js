$('.switch-btn').click(function(){$(this).toggleClass('switch-on');if ($(this).hasClass('switch-on')){$(this).trigger('on.switch');}else{$(this).trigger('off.switch');}});$(document).ready(function(){$(".switch-btn").click(function(){$("#topnav,.header-menu,.showpageNum a,.title-wrap aside,.textcomments,.soder,.comment-body,#footer-wrapper,#footer,.footer-wrapper,.vazhno,.back-top").toggleClass("night1");$("body,.item .post-body,.FollowByEmail .widget-content,.category,.category a,#recentcomments").toggleClass("night2");$("#outer-wrapper,.post h2 a,.post h2 a:visited,.post h2 strong,.post-title,#votixrelated2 a,.status-msg-body,h2,h3,h4,h5,h6,span.toc-note").toggleClass("night3");$(".kod,.pre,.toc-entry-col2").toggleClass("night4");$(".textcomments,.header-menu").toggleClass("night5");$("#sidebar777").toggleClass("night6");});});

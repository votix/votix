var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var WPac=WPac||{getCookie:function(a){return(a=(document.cookie.match("(^|; )"+a+"=([^;]*)")||0)[2])&&decodeURIComponent(a)},getSearchPath:function(a){var b=document.createElement("a");b.href=a;a=b.pathname+b.search;return 0!=a.indexOf("/")?"/"+a:a},getChan:function(a){if(a.chan)return a.chan;if(a.url){var b=document.createElement("a");b.href=a.url;a=a.chanFull?b.pathname+b.search:b.pathname;return 0!=a.indexOf("/")?"/"+a:a}b=window.location;return a.chanFull?b.pathname+b.search:b.pathname},getUrl:function(a){var b=
window.location.href;return decodeURIComponent(a.url||b.substring(0,0<b.indexOf("#")?b.indexOf("#"):b.length))},getLang:function(){var a=navigator;return(a.language||a.systemLanguage||a.userLanguage||"en").substr(0,2).toLowerCase()},params:function(a,b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(encodeURIComponent(d)+"="+encodeURIComponent(b[d]));return a+"?"+c.join("&")},rand:function(a,b){return Math.floor(Math.random()*(b-a+1))+a},hashCode:function(a){var b=0;if(0==
a.length)return b;for(var c=0;c<a.length;c++)var d=a.charCodeAt(c),b=(b<<5)-b+d,b=b&b;return b},init:function(a){if(a)if(a.length)for(var b=0;b<a.length;b++)this.load(a[b]);else this.load(a)},load:function(a){if(!a.loaded)if(a.loaded=!0,a.host=WPac.protocol+"//"+WPac.cluster[this.rand(0,WPac.cluster.length-1)],WPac.Widget[a.widget].url){var b=this;WPac.Lib.loadJson(a,WPac.Widget[a.widget],function(c){a.lang=a.lang||c.lang||WPac.getLang();a.data=c;b.boot(a)})}else a.lang_org=a.lang,a.lang=a.lang||
WPac.getLang(),this.boot(a)},boot:function(a){if(WPac[a.widget])WPac[a.widget].main(a);else{var b=WPac.origin_embed+"/widget",c=WPac.Widget[a.widget],d=c.i18n;WPac.Lib.loadJss(b+"/js/",d&&d[a.lang]||c.js,function(){WPac[a.widget].main(a)});c.css&&WPac.Lib.loadCsss(b+"/css/",c.css)}},Lib:{loadJson:function(a,b,c){var d="wpac_"+Math.abs(WPac.hashCode(JSON.stringify(a)));window[d]=function(a){return c(a)};a=b.url(a);a+=(-1<a.indexOf("?")?"&":"?")+"callback="+d;return this.loadJs(a)},loadJss:function(a,
b,c,d){var e=this;if(b.length>(d=d||0))WPac.Lib.loadJs(a+b[d]+".js"+WPac.ver,function(){return e.loadJss(a,b,c,d+1)});else if(c)return c()},loadJs:function(a,b){var c=document.createElement("script");c.type="text/javascript";c.src=a;c.async=!0;b&&("undefined"!=typeof c.onload?c.onload=b:c.onreadystatechange="undefined"!=typeof c.onreadystatechange?function(){"complete"!=this.readyState&&"loaded"!=this.readyState||b()}:c.onload=function(){var a=c.readyState;a&&!/loaded|complete/.test(a)||b()});this.appendToRoot(c)},
loadCsss:function(a,b){for(var c=0;c<b.length;c++)WPac.Lib.loadCss(a+b[c]+".css"+WPac.ver)},loadCss:function(a){var b=document.createElement("link");b.rel="stylesheet";b.type="text/css";b.href=a;this.appendToRoot(b)},appendToRoot:function(a){(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a)}}};WPac=WPac||{};WPac.protocol="https:";WPac.protocolws="wss:";WPac.host=WPac.host||"https://widgetpack.com";WPac.admin_host=WPac.admin_host||"https://widgetpack.com/admin";WPac.app_host=WPac.app_host||"app.widgetpack.com";WPac.embed_host=WPac.embed_host||"cdn.widgetpack.com";WPac.rt_host=WPac.rt_host||"rt3.cackle.me";WPac.origin=WPac.protocol+"//"+WPac.app_host;WPac.origin_embed=WPac.protocol+"//"+WPac.embed_host;WPac.originws=WPac.protocolws+"//"+WPac.app_host;WPac.cluster=[WPac.app_host];
WPac.ver="?v=1488759785645";
WPac.Widget=WPac.Widget||{Admin:{js:["admin"]},Sign:{js:["sign"]},Setup:{js:["setup"]},Setup2:{js:["setup2"]},SiteNew:{js:["site-new"]},SiteChosen:{js:["site-chosen"]},SiteInstall:{js:["admin/site-install"]},SiteSetting:{js:["site-setting"]},SiteAdmin:{js:["site-admin"]},SiteStopword:{js:["site-stopword"]},SiteBan:{js:["site-ban"]},Rating:{js:["rating"],css:["rating"]},RatingSetting:{js:["admin/rating-setting"],css:["social"]},RatingInstall:{js:["admin/rating-install"]},RatingModeration:{js:["admin/rating-mod"],css:["rating-mod"]},
Comment:{url:function(a){var b={id:a.id,chan:WPac.getChan(a),sort:WPac.getCookie("wp-comment-sort")||a.sort||"desc"},c=window.location.hash.match(/wpc-([0-9]+)/);c&&1<c.length&&(b.commentId=c[1]);return WPac.params(a.host+"/widget/comment/bootstrap",b)},js:["comment"],i18n:{br:["comment_br"],de:["comment_de"],es:["comment_es"],fr:["comment_fr"],id:["comment_id"],it:["comment_it"],nl:["comment_nl"],pl:["comment_pl"],pt:["comment_pt"],ru:["comment_ru"],tr:["comment_tr"],uk:["comment_uk"]},css:["comment"]},
CommentCount:{js:["comment-count"]},CommentRecent:{url:function(a){return WPac.Widget.recent_url("comment",a)},js:["comment-recent"],css:["recent"]},CommentSetting:{js:["admin/comment-setting"],css:["social"]},CommentInstall:{js:["admin/comment-install"]},CommentModeration:{js:["admin/comment-mod"],css:["comment-mod"]},CommentMiniwidgets:{js:["admin/comment-miniwidgets"]},ReviewSetting:{js:["admin/review-setting"],css:["social"]},ReviewInstall:{js:["admin/review-install"]},ReviewModeration:{js:["admin/review-mod"],
css:["review-mod"]},ReviewMiniwidgets:{js:["admin/review-miniwidgets"]},Review:{url:function(a){return WPac.params(a.host+"/widget/review/bootstrap",{id:a.id,chan:WPac.getChan(a),sort:WPac.getCookie("wp-rw-sort")||a.sort||"id",order:WPac.getCookie("wp-rw-order")||a.order||"desc"})},js:["review"],i18n:{fr:["review_fr"],sr:["review_sr"],br:["review_br"],nl:["review_nl"],de:["review_de"],es:["review_es"],pl:["review_pl"],ru:["review_ru"],uk:["review_uk"]},css:["review"]},ReviewCount:{js:["review-count"]},
ReviewRecent:{url:function(a){return WPac.Widget.recent_url("review",a)},js:["review-recent"],css:["recent"]},GreviewInstall:{js:["admin/greview-install"],css:["greview-install"]},GreviewModeration:{js:["admin/greview-moderation"],css:["greview-install"]},GreviewSetting:{js:["admin/greview-setting"]},GoogleReview:{url:function(a){return WPac.params(a.host+"/widget/google-review/boot",{site_id:a.id,place_id:a.place_id})},js:["google-review"],css:["google-review"]},FacebookReview:{url:function(a){return WPac.params(a.host+
"/widget/fbrev/boot",{site_id:a.id,page_id:a.page_id})},js:["facebook-review"],css:["facebook-review"]},FbrevInstall:{js:["admin/fbrev-install"],css:["fbrev-install"]},ChatInstall:{js:["admin/chat-install"]},ChatDashboard:{js:["admin/chat-dashboard"],css:["chat-dashboard"]},Chat:{js:["chat"],css:["chat"]},SubscriptionPlan:{js:["admin/subscription-plan"]},SubscriptionPayment:{js:["admin/subscription-payment"]},Pricing:{js:["pricing"],css:["pricing"]},recent_url:function(a,b){var c={id:b.id};b.limit&&
(c.size=b.limit);b.chan?c.chan=b.chan:b.url&&(c.chan=WPac.getSearchPath(b.url));return WPac.params(b.host+"/widget/"+a+"/recent",c)}};window.wpac_init&&WPac.init(wpac_init);


}
/*
     FILE ARCHIVED ON 12:27:56 May 08, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:02:15 Jan 09, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.493
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.014
  esindex: 0.009
  cdx.remote: 7.61
  LoadShardBlock: 72.818 (3)
  PetaboxLoader3.datanode: 104.587 (5)
  load_resource: 271.23 (2)
  PetaboxLoader3.resolve: 226.536 (2)
*/
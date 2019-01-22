// Timeago
// https://github.com/hustcc/timeago.js
!function(t,e){"object"==typeof module&&module.exports?(module.exports=e(),module.exports.default=module.exports):t.timeago=e()}("undefined"!=typeof window?window:this,function(){function t(t){return t instanceof Date?t:isNaN(t)?/^\d+$/.test(t)?new Date(e(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(t)):new Date(e(t))}function e(t){return parseInt(t)}function n(t,n,r){n=l[n]?n:l[r]?r:"en";for(var o=0,i=t<0?1:0,a=t=Math.abs(t);t>=p[o]&&o<h;o++)t/=p[o];return t=e(t),o*=2,t>(0===o?9:1)&&(o+=1),l[n](t,o,a)[i].replace("%s",t)}function r(e,n){return((n=n?t(n):new Date)-t(e))/1e3}function o(t){for(var e=1,n=0,r=Math.abs(t);t>=p[n]&&n<h;n++)t/=p[n],e*=p[n];return r%=e,r=r?e-r:e,Math.ceil(r)}function i(t){return a(t,"data-timeago")||a(t,"datetime")}function a(t,e){return t.getAttribute?t.getAttribute(e):t.attr?t.attr(e):void 0}function u(t,e){return t.setAttribute?t.setAttribute(m,e):t.attr?t.attr(m,e):void 0}function c(t,e){this.nowDate=t,this.defaultLocale=e||"en"}function d(t,e){return new c(t,e)}var f="second_minute_hour_day_week_month_year".split("_"),s="秒_分钟_小时_天_周_月_年".split("_"),l={en:function(t,e){if(0===e)return["just now","right now"];var n=f[parseInt(e/2)];return t>1&&(n+="s"),[t+" "+n+" ago","in "+t+" "+n]},zh_CN:function(t,e){if(0===e)return["刚刚","片刻后"];var n=s[parseInt(e/2)];return[t+n+"前",t+n+"后"]}},p=[60,60,24,7,365/7/12,12],h=6,m="data-tid",w={};return c.prototype.doRender=function(t,e,i){var a,c=r(e,this.nowDate),d=this;t.innerHTML=n(c,i,this.defaultLocale),w[a=setTimeout(function(){d.doRender(t,e,i),delete w[a]},Math.min(1e3*o(c),2147483647))]=0,u(t,a)},c.prototype.format=function(t,e){return n(r(t,this.nowDate),e,this.defaultLocale)},c.prototype.render=function(t,e){void 0===t.length&&(t=[t]);for(var n=0,r=t.length;n<r;n++)this.doRender(t[n],i(t[n]),e)},c.prototype.setLocale=function(t){this.defaultLocale=t},d.register=function(t,e){l[t]=e},d.cancel=function(t){var e;if(t)(e=a(t,m))&&(clearTimeout(e),delete w[e]);else{for(e in w)clearTimeout(e);w={}}},d});

var seconds = formatNum.bind(null, 'секунду', '%s секунду', '%s секунды', '%s секунд'),
  minutes = formatNum.bind(null, 'минуту', '%s минуту', '%s минуты', '%s минут'),
  hours = formatNum.bind(null, 'час', '%s час', '%s часа', '%s часов'),
  days = formatNum.bind(null, 'день', '%s день', '%s дня', '%s дней'),
  weeks = formatNum.bind(null, 'неделю', '%s неделю', '%s недели', '%s недель'),
  months = formatNum.bind(null, 'месяц', '%s месяц', '%s месяца', '%s месяцев'),
  years = formatNum.bind(null, 'год', '%s год', '%s года', '%s лет');

export default function(number, index) {
  switch(index) {
    case 0: return ['только что', 'через несколько секунд'];
    case 1: return [seconds(number) + ' назад', 'через ' + seconds(number)];
    case 2: // ['минуту назад', 'через минуту'];
    case 3: return [minutes(number) + ' назад', 'через ' + minutes(number)];
    case 4: // ['час назад', 'через час'];
    case 5: return [hours(number) + ' назад', 'через ' + hours(number)];
    case 6: return ['вчера', 'завтра'];
    case 7: return [days(number) + ' назад', 'через ' + days(number)];
    case 8: // ['неделю назад', 'через неделю'];
    case 9: return [weeks(number) + ' назад', 'через ' + weeks(number)];
    case 10: // ['месяц назад', 'через месяц'];
    case 11: return [months(number) + ' назад', 'через ' + months(number)];
    case 12: // ['год назад', 'через год'];
    case 13: return [years(number) + ' назад', 'через ' + years(number)];
    default: return ['', '']
  }
};

/**
 *
 * @param f1 - 1
 * @param f - 21, 31, ...
 * @param s - 2-4, 22-24, 32-34 ...
 * @param t - 5-20, 25-30, ...
 * @param n
 * @returns {string}
 */
function formatNum(f1, f, s, t, n) {
  var n10 = n % 10,
    str = t;

  if (n === 1) {
    str = f1;
  } else if (n10 === 1 && n > 20) {
    str = f;
  } else if (n10 > 1 && n10 < 5 && (n > 20 || n < 10)) {
    str = s;
  }
  
  return str;
}

// build time:Thu Mar 28 2019 14:24:16 GMT+0800 (China Standard Time)
LazyLoad=function(e){function t(t,s){var n=e.createElement(t),c;for(c in s)s.hasOwnProperty(c)&&n.setAttribute(c,s[c]);return n}function s(e){var t=i[e],s,n;if(t)s=t.callback,n=t.urls,n.shift(),u=0,n.length||(s&&s.call(t.context,t.obj),i[e]=null,f[e].length&&c(e))}function n(){var t=navigator.userAgent;o={async:e.createElement("script").async===!0};(o.webkit=/AppleWebKit\//.test(t))||(o.ie=/MSIE/.test(t))||(o.opera=/Opera/.test(t))||(o.gecko=/Gecko\//.test(t))||(o.unknown=!0)}function c(c,u,h,g,p){var y=function(){s(c)},k=c==="css",b=[],d,m,v,j;o||n();if(u)if(u=typeof u==="string"?[u]:u.concat(),k||o.async||o.gecko||o.opera)f[c].push({urls:u,callback:h,obj:g,context:p});else{d=0;for(m=u.length;d<m;++d)f[c].push({urls:[u[d]],callback:d===m-1?h:null,obj:g,context:p})}if(!i[c]&&(j=i[c]=f[c].shift())){l||(l=e.head||e.getElementsByTagName("head")[0]);u=j.urls;d=0;for(m=u.length;d<m;++d)h=u[d],k?v=o.gecko?t("style"):t("link",{href:h,rel:"stylesheet"}):(v=t("script",{src:h}),v.async=!1),v.className="lazyload",v.setAttribute("charset","utf-8"),o.ie&&!k?v.onreadystatechange=function(){if(/loaded|complete/.test(v.readyState))v.onreadystatechange=null,y()}:k&&(o.gecko||o.webkit)?o.webkit?(j.urls[d]=v.href,a()):(v.innerHTML='@import "'+h+'";',r(v)):v.onload=v.onerror=y,b.push(v);d=0;for(m=b.length;d<m;++d)l.appendChild(b[d])}}function r(e){var t;try{t=!!e.sheet.cssRules}catch(n){u+=1;u<200?setTimeout(function(){r(e)},50):t&&s("css");return}s("css")}function a(){var e=i.css,t;if(e){for(t=h.length;--t>=0;)if(h[t].href===e.urls[0]){s("css");break}u+=1;e&&(u<200?setTimeout(a,50):s("css"))}}var o,l,i={},u=0,f={css:[],js:[]},h=e.styleSheets;return{css:function(e,t,s,n){c("css",e,t,s,n)},js:function(e,t,s,n){c("js",e,t,s,n)}}}(this.document);
//rebuild by neat 
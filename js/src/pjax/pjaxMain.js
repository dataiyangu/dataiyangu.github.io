// build time:Thu Feb 07 2019 17:15:05 GMT+0800 (China Standard Time)
$(document).pjax("a[target!=_blank]","#pjax-container",{fragment:"#pjax-container",timeout:5e3});$(window).on("popstate.pjax",function(){pjax()});$(document).on("pjax:start",function(){$(document).unbind("keyup")});$(document).on("pjax:complete",function(){require.config({waitSeconds:0,paths:{"jquery.share.min":"/js/src/pjax/share/jquery.share.min",css:"/js/src/pjax/css",pjax_function_public:"/js/src/pjax/pjax_function_public",comments:"/js/src/pjax/comments_git",love:"/js/src/love"},shim:{share:{deps:["css!/js/src/pjax/share/share.min","jquery.share.min"]},comments:{deps:["css!/js/src/pjax/comments/gitalk"]}}});require(["jquery.share.min","share","css","pjax_function_public","comments"],function(){pjax()})});function pjax(){gitalk();eye_js();article_top_js();busuanzi_js();pjaxshare();category_js();opacity_js();motion_js();scrollspy_js();postdetails_js();lean_analytics();baidutuisong();initSidebarDimension();lazyLoad();donate();my_scrollReveal_js()}
//rebuild by neat 
// build time:Wed Oct 30 2019 16:32:05 GMT+0800 (China Standard Time)
function outArticle(){$(".eye").animate({left:0},{duration:500,easing:"easeOutBounce",complete:function(){}});$(".header_left").animate({left:0},{duration:500,easing:"easeOutBounce",complete:function(){}});$(".aplayer-body").animate({left:"-66px"},{duration:80,easing:"easeOutBounce",complete:function(){}})}function inArticle(){$(".eye").animate({left:"-18px"},{duration:500,easing:"easeOutBounce",complete:function(){}});$(".header_left").animate({left:"-18px"},{duration:500,easing:"easeOutBounce",complete:function(){}});if($(".header_left").css("width").indexOf("80")!=-1){$(".header_sidebar").click()}if($(".eye1").css("display")=="block"){$(".eye2").click()}if($(".aplayer-body").css("left").indexOf("-84")==-1|$(".aplayer-body").css("left").indexOf("-66")==-1){if($(".aplayer-narrow").length!=1){$(".aplayer-miniswitcher").click();$(".aplayer-body").animate({left:"-84px"},{duration:80,easing:"easeOutBounce",complete:function(){}})}}$(".aplayer-body").animate({left:"-84px"},{duration:80,easing:"easeOutBounce",complete:function(){}})}function hover_sidebar(){var e=0;$(".hover_sidebar").hover(function(){e=setTimeout(function(){outArticle()},1e3)},function(){clearTimeout(e)});var t=0;$("#posts").hover(function(){t=setTimeout(function(){inArticle()},1e3)},function(){clearTimeout(t)})}hover_sidebar();$(function(){var e=setTimeout(inArticle,1e3);$(".header_sidebar , .eye .eye2 , .aplayer-miniswitcher").mouseenter(function(){clearTimeout(e)})});
//rebuild by neat 
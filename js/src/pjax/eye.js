// build time:Tue Mar 12 2019 21:04:55 GMT+0800 (China Standard Time)
function eye(){var e="253px";var o=false;$(".eye .eye2").click(function(){if(o==false){$(".eye .eye1").animate({width:e,opacity:"show"},{duration:500,easing:"easeOutBounce",complete:function(){}});o=true}else{$(".eye .eye1").animate({width:"0px",opacity:"hide"},{duration:500,easing:"easeOutBounce",complete:function(){}});o=false}});$(".eye ul li").click(function(){$(".eye .eye1").velocity("stop").velocity({width:0},{display:"none"});o=false;$color=$(this).css("background-color");$(".eye .eye1").css("background",$color);$("#canvas").css("background",$color);$("article").css("background",$color);var e=$(this).css("background-color");if(e.indexOf("rgb(50, 50, 50)")>=0){$("p").css({color:"#999"});$("a").css({color:"#FF99CC"});$("h1 a").css({color:"#FFFF66"});$("h1").css({color:"#FFFF66"})}else{$("p").css({color:"#666"});$("a:not(.social-share-icon)").css({color:"#555"});$("h1").css({color:"#555"});$(".sidebar a ").css({color:"#999"});$(".header_left a ").css({color:"#999"})}})}eye();
//rebuild by neat 
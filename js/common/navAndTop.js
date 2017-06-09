/**
 * Created by zh on 2017/5/26.
 */


/*采用正则表达式获取地址栏参数：*/
function GetQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return unescape(r[2]);
        return null;
}
/*sessionStorage*/
function sSs(key,value){
    if(value==undefined){
        return sessionStorage.getItem(key);//获取指定key本地存储的值
    }
    if(value==null){
        sessionStorage.removeItem(key);//删除指定key本地存储的值
        return true;
    }
    sessionStorage.setItem(key,value);//将value存储到key字段
    return true;
}

$(function(){
    //footer qq
    $(".qq").mouseover(function(){
        $(this).addClass("qqchange")
    }).mouseout(function(){
        $(this).removeClass("qqchange");
    });

    $(".bannerTu").height($(window).height()/3);
    $(window).resize(function(){
        $(".bannerTu").height($(window).height()/3);
    });

  /*  var path = GetQueryString('path');//获取url的path值
    sSs(path,$('#'+path).offset().top);
    console.log("-------",path,sSs(path));*/

    var $orangeSrc="images/orangeArrow.png";
    var $whiteSrc="images/whiteArrow.png";
    $(".parentNav>li:not('.none')").hover(function(){
        //图标
        $(this).find("img").attr("src",$orangeSrc);
    },function(){
        $(this).find("img").attr("src",$whiteSrc);
    });

    /*回到顶部*/
    $(window).on("mousewheel",function(){
        var $scrollToTop=$(document).scrollTop();
        $scrollTop=$(document).scrollTop();// 页面部分滚动后的获取滚动高度
        if($scrollToTop>=1300){
            $(".toTop").show();
        }else{
            $(".toTop").hide();
        }
    });
    $(".toTop").click(function () {
        $('html,body').animate({scrollTop: -($(this).offset().top)}, 2000);
    });

    /*滑到制定页面部分*/
    //加载时滑动
    var path = GetQueryString('path');//获取url的path值
    if(path) {
        sSs(path, $('#' + path).offset().top - 63);
        $('html,body').animate({scrollTop: sSs(path)}, 2000);
    }
   /* if(path) {
        $('html,body').animate({scrollTop:$('#'+path).offset().top-63}, 2000);
    }*/

    $(".header .subNav a").attr("data-role");  //给所有a设置一属性
    var $scrollTop=0;
    $(".header .subNav a").click(function (e) {
           //console.log("---",window.location.href);
          var dataRole=$(this).attr('data-role');
           if($('#'+dataRole).offset().top==$scrollTop){
               $("html,body").stop(true);
           }else{
               $('html,body').animate({scrollTop:$('#'+dataRole).offset().top-63}, 1000);
           }
           $scrollTop=$('#'+$(this).attr('data-role')).offset().top;
           e.preventDefault();
    });

    $(".header .parentNav>li>a.last").click(function (e) {
        var dataRole=$(this).attr('data-role');
        if($('#'+dataRole).offset().top==$scrollTop){
            $("html,body").stop(true);
        }else{
            $('html,body').animate({scrollTop:$('#'+dataRole).offset().top-63}, 1000);
        }
        $scrollTop=$('#'+$(this).attr('data-role')).offset().top;
        e.preventDefault();
    });


    $(".consult").css({"top":$(window).height()/3-50});  //在线咨询定位
});

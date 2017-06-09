/**
 * Created by zh on 2017/6/1.
 */
$(function(){
    /*轮播图效果*/
    var $banner = $(".fullServ .tu");
    var $imgList = $(".fullImgList");
    var v_width = $banner.width();//获取banner的宽度
    var page = 1;  //初始页面
    var page_count = 3;  //总页数
    var timer = null;
    loop($banner,$imgList,page,page_count,v_width,timer);


    $(".smallPic li").mouseover(function(){
         var $index=$(this).index();
        var bigLi=$(".bigPic li");
        bigLi.css("background","url(images/big0"+($index+1)+".jpg) no-repeat top center" )
    })

});
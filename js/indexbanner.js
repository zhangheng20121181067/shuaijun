/**
 * Created by zh on 2017/5/25.
 */
$(function(){
   /*
   //banner 图片请求
    $.ajax({
        type:"get",
        url:"https://www.easy-mock.com/mock/59279da491470c0ac1fe1e84/wanzan/page/get_banner",
        success:function(bannerData){
             var $bannImgEle=$(".list-img").find("img");
             var $bannSrcList=bannerData.data.projects;
             for(var i=0;i<$bannImgEle.length;i++){
                 $bannImgEle.eq(i).attr("src",$bannSrcList[i].img);
             }
        }
    });*/
    /*轮播图效果*/
    var $banner = $(".banner");
    var $imgList = $(".list-img");

    //var var_width = $banner.width();//获取banner的宽度(每次递减的left值)
    var v_width=$imgList.find("img").width();  //设置li的宽度为banner的宽度
    $imgList.find("li").width(v_width);
    var page=1;//初始页面
    var page_count = 3;  //总页数
    var timer = null;
    loop($banner,$imgList,page,page_count,v_width);
    //窗口大小变化时 banner的宽高变化
    $(window).resize(function(){
        $banner.height($(window).height()*2/3); //窗口变化时获取banner的初始高度
    });
    function loop($v_content,$imgList,page,page_count,v_width){
        $imgList.width(v_width * page_count);   //设置ul的宽度为banner的宽度的三倍
        $(".list-btn").find("span").click(function () {
            clearInterval(timer);
            var index = $(this).index();
            $imgList.animate({"left": -v_width * index}, 1000);
            $(this).addClass("current").siblings().removeClass("current");
            page=index+1;
        });
        //定时器函数
        function auto() {
            clearInterval(timer);
            timer = setInterval(function () {
                if (page == page_count) {
                    $imgList.animate({"left": 0}, 1000);
                    page = 1;
                } else {
                    $imgList.animate({"left":-v_width*page }, 1000);
                    page++;
                }
                $(".list-btn").find("span").eq(page - 1).addClass("current").siblings().removeClass("current");
            }, 8000)
        }

        //初始调用
        auto();
        //轮播框划入划出函数
        $v_content.mouseover(function () {
            clearInterval(timer);
        }).mouseout(function () {
            auto();
        });
    }
});

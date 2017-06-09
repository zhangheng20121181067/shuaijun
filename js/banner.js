/**
 * Created by zh on 2017/5/31.
 */
function loop($v_content,$list_img,page,page_count,v_width,timer){

    $list_img.find("li").width(v_width);  //设置li的宽度为banner的宽度
    $list_img.width(v_width * page_count);   //设置ul的宽度为banner的宽度的三倍

    $(".list-btn").find("span").click(function () {
        clearInterval(timer);
        var index = $(this).index();
        $list_img.animate({"left": -v_width * index}, 1000);
        $(this).addClass("current").siblings().removeClass("current");
    });
    //定时器函数
    function auto() {
        clearInterval(timer);
        timer = setInterval(function () {
            if (page == page_count) {
                $list_img.animate({"left": 0}, 1000);
                page = 1;
            } else {
                $list_img.animate({"left": "-=" + v_width}, 1000);
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
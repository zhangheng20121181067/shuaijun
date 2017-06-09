/**
 * Created by zh on 2017/6/1.
 */
$(function(){
    $("span.arrow").click(function(e){
        e.stopPropagation();
        $(".chatRoomplat").toggle();
    });
    $(document).click(function(){
        $(".chatRoomplat").hide();
    });
    $(".chatRoomplat").click(function(e){
        e.stopPropagation();
    });
})
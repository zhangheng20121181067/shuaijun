/**
 * Created by zh on 2017/6/1.
 */
$(function(){
    var count=0;
    $(".pageList span.next").click(function(){
        var arr=[];
        count++;
        if(count>=5){
            return false;
        }
        $(".pageList span").eq(count).addClass("act").siblings().removeClass("act");
        for(var j=count*29;j<(count+1)*29;j++){
            arr.push(j);
        }
        console.log(count,arr);
        for(var i=0;i<29;i++){
            $(".articleList li").eq(i).find("span").html(arr[i])
        }
    });
    $(".pageList span:not(.next)").click(function(){
        var arr=[];
        var $index=$(this).index();
        count=$index;
        for(var j=$index*29;j<($index+1)*29;j++){
            arr.push(j);
        }
        for(var i=0;i<29;i++){
            $(this).addClass("act").siblings().removeClass("act");
            $(".articleList li").eq(i).find("span").html(arr[i])
        }
    });
});
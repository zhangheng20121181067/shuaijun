/**
 * Created by zh on 2017/5/26.
 */
$(function() {
    $.ajax({
        type:"get",
        url:"https://www.easy-mock.com/mock/59279da491470c0ac1fe1e84/wanzan/page/get_brands",
        success:function(BrandsData){
            //var $bannerTuImg=BrandsData.data.projects.bannerTu.img;
           // var $cultureDesc=BrandsData.data.projects.culture.desc;
          //  var stoEnvirImgData=BrandsData.data.projects.storeEnvironment.piclist;
           /*
           //banner图
            $(".bannerTu img").attr("src",$bannerTuImg);*/

            //品牌文化描述
          //  $(".culture p").text($cultureDesc);

            //酒店环境
          /*  var stoEnvirImgEle=$(".envirList li img");
            for(var i=0;i<stoEnvirImgEle.length;i++){
                stoEnvirImgEle.eq(i).attr("src",stoEnvirImgData[i].img)
            }*/

            //招贤纳士
            var $tr=$(".recruit .table tbody tr");
            var $recruitData=BrandsData.data.projects.recruit;
            for(var i=0;i<$tr.length;i++){
                $tr.eq(i).find("td").eq(0).text($recruitData[i].station);
                $tr.eq(i).find("td").eq(1).text($recruitData[i].count);
                $tr.eq(i).find("td").eq(2).text($recruitData[i].place);
                $tr.eq(i).find("td").eq(3).text($recruitData[i].Requirement);
                $tr.eq(i).find("td").eq(4).text($recruitData[i].treatment)
            }

        }
    });




    //店内环境图 点击切换
    $(".environment li").click(function(){
        var index=$(this).index();
        $(".envirList").eq(index).addClass("block").siblings().removeClass("block")
    });

    //鼠标滑过投递
    var $orangeSrc="images/toudi2.png";
    var $whiteSrc="images/toudi1.png";
    $(".table").on("mouseover","tr",function(){
        $(this).children("td").children("img").attr("src",$orangeSrc);
        $(this).siblings().children("td").children("img").attr("src",$whiteSrc);
    });

    //点击投递
    //为投递的td加上类标记
    var $tr=$(".recruit tbody tr");
    $tr.each(function(){
        $(this).children("td").eq(5).addClass("toudi");
    });

    //点击更多
    $(".table tr:gt(3)").hide();
    $(".recruit .more").click(function(){
        $(".table tr:gt(3)").toggle();
        $(this).find("span.know").toggle();
        $(this).find("span.down").toggleClass("act");

        $(".modal").height($(document).height());   //点击投递后遮罩层高度
    });
    //窗口大小变化时
    $(window).resize(function(){
        $(".modal").height($(document).height());//窗口大小变化时遮罩层高度
    });

    $(".modal").height($(document).height()-144); //初始遮罩层高度
    var pop=document.getElementsByClassName("pop")[0];
    $(".toudi").click(function(e){
      //console.log(e)
        openModal();
        popShow(pop);
        e.stopPropagation();
    });
    $(document).click(function(){
        pop.style.display="none";
        closeModal();
    });
    $(".pop").click(function(e) {
        e.stopPropagation();
    })

});
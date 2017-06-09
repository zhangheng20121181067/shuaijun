/**
 * Created by zh on 2017/5/26.
 */
$(function() {
   // console.log("浏览器当前窗口可视区域高度:",$(window).height(),$(window).height()); //浏览器当前窗口可视区域高度
   // console.log("浏览器当前窗口文档的高度:",$(document).height()); //浏览器当前窗口文档的高度
  //  console.log("浏览器当前窗口文档body的高度:",$(document.body).outerHeight(true));//浏览器当前窗口文档body的高度
  //  console.log("浏览器当前窗口文档body的总高度:",$(document.body).outerHeight(true));//浏览器当前窗口文档body的总高度 包括border padding margin
    $(".banner").height($(window).height()*2/3);  //设置并获取banner的初始高度
    $(".consult").css({"top":$(window).height()*2/3-50});  //在线咨询定位
    $(".content").css({"top":$(window).height()*2/3});

    $.ajax({
        type:"get",
        url:"https://www.easy-mock.com/mock/59279da491470c0ac1fe1e84/wanzan/page/get_index",
        success:function(indexData){
            //走进帅君描述
          //  var $introData=indexData.data.projects.intro;
            //var $introEle=$(".content .intro");
           // $introEle.find(".text p").text($introData.desc);
          //  $introEle.find(".video img").attr("src",$introData.img);   //走进帅军图片

            //服务项目
          //  var $servProData=indexData.data.projects.service;
          //  var $servImgEle=$(".content .serviceProject .picList img");
           // var $servdivEle=$(".content .serviceProject .desc p");
           // var $servSrcList=$servProData.piclist;
           // var $servdivList=$servProData.divinfo;
           // for(var i=0;i<$servImgEle.length;i++){
             //   $servImgEle.eq(i).attr("src",$servSrcList[i].img);
              //  $servdivEle.eq(i).text($servdivList[i].text);    //服务项目的四个描述
         //   }
             //养生咨询
            var $infoOneTdEle=$(".info .commonSense .one dd a");
            var $infoTwoTdEle=$(".info .commonSense .two dd a");
            var $infoNewsTdEle=$(".info .commonSense .news dd.newDd a");
            var $infoNewsimgEle=$(".info .commonSense .news dd img");
            //console.log(indexData.data.projects.keepHealth)
            var $infoOneTdData=indexData.data.projects.keepHealth.keepOne;
            var $infoTwoTdData=indexData.data.projects.keepHealth.keepTwo;
            var $infoNewsTdData=indexData.data.projects.keepHealth.news;
            var $infoNewsimgData=indexData.data.projects.keepHealth.news.img;
            for(var i=0;i<$infoOneTdEle.length;i++){
                $infoOneTdEle.eq(i).text($infoOneTdData.infos[i].info);
                $infoTwoTdEle.eq(i).text($infoTwoTdData.infos[i].info);
            }
           // $infoNewsimgEle.attr("src",$infoNewsimgData);  //新闻动态图片
            for(var i=0;i<$infoNewsTdEle.length;i++){
                $infoNewsTdEle.eq(i).text($infoNewsTdData.infos[i].info);
            }

        }
    });




    /*服务项目动效*/
    //左边的盒子切换
    $(".picList li").mouseover(function () {
        $(".serviceProject").find(".desc").eq( $(this).index()).addClass("block").siblings().removeClass("block");
        $(this).find("a").css("background-color","rgba(133,147,170,0)");
        $(this).siblings().find("a").css("background-color","rgba(133,147,170,.3)");
    }).mouseout(function(){
        $(".picList li").find("a").css("background-color","rgba(133,147,170,0)");
    });
    $(".picList").mouseout(function(){
     $(this).find("a").css("background-color","rgba(133,147,170,0)");
    });

    //文字溢出
    var pStr=$(".intro .text p").text();
    var aaa=pStr.substr(0,200);
    $(".intro .text p").text(aaa+"......")
});
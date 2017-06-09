/**
 * Created by zh on 2017/5/27.
 */
/*取窗口滚动条高度*/
function getScrollTop(){
    var scrollTop=0;
    if(document.documentElement&&document.documentElement.scrollTop) {
        scrollTop=document.documentElement.scrollTop;
    } else if(document.body) {
        scrollTop=document.body.scrollTop;
    }
    return scrollTop;
}

function openModal(){
    $(".modal").show();
}
function closeModal(){
    $(".modal").hide();
}

//弹出框
function popShow(elm){
    //窗口变化时
    window.onresize=function(){
        popShow(elm);
    };

    //定位
    elm.style.display="block";
    var l=(document.documentElement.clientWidth-elm.offsetWidth)/2;
    var t=(document.documentElement.clientHeight-elm.offsetHeight)/2;
    elm.style.left=l+'px';
    elm.style.top=t+'px';  //定位高度等于滚轮高度加上可视窗高度

    //投递和取消事件
    var send=elm.getElementsByTagName("a")[0];
    var cancel=elm.getElementsByClassName("cancel")[0];
    send.onclick=function(){
        window.location.href="http://www.baidu.com";
        closeModal();
    };

    //点击取消时
    cancel.onclick=function(){
        elm.style.display="none";
        closeModal();
    }
}

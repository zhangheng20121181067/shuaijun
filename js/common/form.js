/**
 * Created by zh on 2017/6/5.
 */
$(function(){

    $(".store").change(function(e){
        if($(this).val()=="yuding"){
            $(this).removeClass("change")
        }else{
            $(this).addClass("change")
        }
    });
    $(".member").change(function(e){
        if($(this).val()=="yesNo"){
            $(this).removeClass("change")
        }else{
            $(this).addClass("change")
        }
    });
    $("#date").focus(function(){
        $(this).val("");
    }).blur(function(){
        $(this).val("到店日期*")
    });
    $("#vip").focus(function(){
        $(this).val("");
    }).blur(function(){
        $(this).val("贵宾人数*")
    });
    $(".firstName").focus(function(){
        $(this).val("");
    }).blur(function(){
        $(this).val("姓名*")
    });
    $(".telephone").focus(function(){
        $(this).val("");
    }).blur(function(){
        $(this).val("电话*")
    });
});
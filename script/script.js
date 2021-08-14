// eslint-disable

$(function (){
    $(".mainMenu > li").mouseover(function (){
        $(".subMenu").stop().slideDown(200);
        $(".subMenuBG").stop().slideDown(200);
    });
    $(".mainMenu > li").mouseout(function (){
        $(".subMenu").stop().slideUp(200);
        $(".subMenuBG").stop().slideUp(200);
    });
});
$(document).ready(function()
{
    $(".test").mouseover(function()
    {
        $(this).css("cursor", "pointer");
        $(this).animate({'opacity': 1, 'margin-top': '0px', 'box-shadow': '50px 50px 50px #999'}, {duration: 500});
    });
    $(".test").mouseout(function()
    {
        $(this).animate({'opacity': 0.5, 'margin-top': '0px', 'box-shadow': '0px 0px 0px #000'}, {duration: 500});
    });
    $("#strength").click(function(){
        window.location.href="strength.html";
    });
    $("#llmj").click(function(){
      window.location.href = "mainpage.html";
    });
    $("#xialastr").click(function(){
      window.location.href = "strength.html";
    });
    $("#profile").click(function(){
      window.location.href = "profile.html";
    });
    $("#myprofile").click(function(){
      window.location.href = "profilein.html";
    });
        $("#contact").click(function(){
      window.location.href = "equipment.html";});
});

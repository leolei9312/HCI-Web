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
    $("#llmj").click(function(){
      window.location.href = "mainpage.html";
    });
    $("#xialastr").click(function(){
      window.location.href = "strength.html";
    });
    $("#workout").click(function(){
        window.location.href="workout.html";
    });
    $("#profile").click(function(){
      window.location.href = "profile.html";
    });
    $("#contact").click(function(){
      window.location.href = "equipment.html";
    });
    
});

/*var a = document.getElementsByTagName("username").value;
var b = document.getElementsByTagName("password").value;

alert(a);
 */

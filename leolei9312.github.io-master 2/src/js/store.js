$(document).ready(function()
{
    $(".test").mouseover(function()
    {
        $(this).css("cursor", "pointer");
         });
    $(".test").mouseout(function()
    {
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
      window.location.href = "equipment.html";
    });
    $("#equipment").click(function(){
      window.location.href = "equipment.html";
    });

    $("#b-search").click(function(){

        var inword = $("#inword").val();
      if(inword == ""){
        alert("Please input the things you want to find.");
      }
      else{
      window.location.href = "equipment.html";
      }
    });


});


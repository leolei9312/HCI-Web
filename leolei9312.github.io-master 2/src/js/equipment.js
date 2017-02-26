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


    /* $("#.test2").click(function(){
      window.location.href = "equipment.html";
    });
  */
    $("#eq1").hover(function()
    {
         $("#words1").css("display", "block");
        // $("#words1").animate({'display': 'block'}, {duration:500});
    });/*
    $("#eq1").click(function()
    {
        // eq = document.getElementById("eq1");
        // eq.style.display = "none";
         window.location.href = "https://www.amazon.com/Tone-Fitness-Ab-Toning-Wheel/dp/B003P90LQG/ref=sr_1_1?ie=UTF8&qid=1487814513&sr=8-1&keywords=Fitness+Equipment";
        // $("#words1").animate({'display': 'block'}, {duration:500});
    });
    $("#words1").click(function()
    {
        // eq = document.getElementById("eq1");
        // eq.style.display = "none";
         window.location.href = "https://www.amazon.com/Tone-Fitness-Ab-Toning-Wheel/dp/B003P90LQG/ref=sr_1_1?ie=UTF8&qid=1487814513&sr=8-1&keywords=Fitness+Equipment";
        // $("#words1").animate({'display': 'block'}, {duration:500});
    });*/

    $("#eq1").mouseout(function()
    {
        // eq = document.getElementById("eq1");
        // eq.style.display = "block";
        $("#words1").css("display", "none");
    });

      $("#eq2").hover(function()
    {
         $("#words2").css("display", "block");
         });
    $("#eq2").mouseout(function()
    {
        $("#words2").css("display", "none");
    });

    $("#eq3").hover(function()
    {
         $("#words3").css("display", "block");
         });
    $("#eq3").mouseout(function()
    {
        $("#words3").css("display", "none");
    });

     $("#eq4").hover(function()
    {
         $("#words4").css("display", "block");
         });
    $("#eq4").mouseout(function()
    {
        $("#words4").css("display", "none");
    });

  // $("#words1").mouseover(function()
  //   {
  //       words = document.getElementById("words1");
  //       words.style.display = "block";
  //   });
  //   $("#words1").mouseout(function()
  //   {
  //       words = document.getElementById("words1");
  //       words.style.display = "none";
  //   });

  
/* style="display:none" onmouseover="over()" onmouseout = "out()" 
*/

});
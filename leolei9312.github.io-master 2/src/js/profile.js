islogin = false;
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
   $("#joinus").click(function(){
      $("#bottom").css("bottom", "-500px");
   });
   $("#backlogin").click(function(){
      $("#bottom").css("bottom", "0px");
   });
   $("#loginbutton").click(function(){
      var username = $("#username").val();
      var password = $("#password").val();
      if(username == "" || password == ""){
        alert("Please fill in username and password.");
      }
      else{
        islogin = true;
        window.location.href = "profilein.html";
      }
   });
   $("#signbutton").click(function(){
      var usernamesignup = $("#usernamesignup").val();
      var passwordsignup = $("#passwordsignup").val();
      var emailsignup = $("#emailsignup").val();
      var passwordsignup_confirm = $("#passwordsignup_confirm").val();
      var gendersignup = $("#gendersignup").val();
      var agesignup = $("#agesignup").val();
      var heightsignup = $("#heightsignup").val();
      var weightsignup = $("#weightsignup").val();
      if(usernamesignup == "" || passwordsignup == "" || passwordsignup_confirm == "" || emailsignup == "" || gendersignup == "" || agesignup == "" || heightsignup == "" || weightsignup == ""){
        alert("Please fill in all forms.");
      }
      else{
        islogin = true;
        window.location.href = "profilein.html";
      }
   });
   $("#profile").click(function(){
      if(islogin) window.location.href = "profilein.html";
      else window.location.href = "profile.html";
   });
   $("#contact").click(function(){
      window.location.href = "equipment.html";
    });
});

/*var a = document.getElementsByTagName("username").value;
var b = document.getElementsByTagName("password").value;

alert(a);
 */

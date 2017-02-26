


//Add to Calendar button
//main button
$(document).ready(function(){
    $("#addbut").click(function(){
      $("#groupbut").toggle(500);
    });
  });
//group button
$(document).ready(function(){
    $('button[id^="gb"]').click(function(){
        var temp = $(this).text();
        var exercise;
        if($("#breast p1").css("color") == "rgb(255, 255, 255)"){
          exercise = "UpperBody";
        }
        else exercise = "FullBody";
        if(!temp.includes("√")){

          if(!$("#" + temp.toLocaleLowerCase()).text().includes(exercise)){
            $(this).text(temp + " √");
            $("#" + temp.toLocaleLowerCase()).append(" • " + exercise);
          }
          else alert("This exercise has been added.");
      }
        else{
          $(this).text(temp.split(" ")[0]);
          var str = $("#" + $(this).text().toLocaleLowerCase()).text().replace(" • " + exercise, "");
          $("#" + $(this).text().toLocaleLowerCase()).text(str);
      }
    });
});
//This is for dropdown button
$(document).ready(function(){
  $("#llmj").click(function(){
      window.location.href = "mainpage.html";
  });
  $("#xialastr").click(function(){
    window.location.href = "strength.html";
  });
});
//this is for different exercise
$(document).ready(function(){
    $("#breast").click(function(){
        $("#breast p1").css({"color": "white", "font-size": "25px"});
        $("#run p1").css({"color": "#000", "font-size": "18px"});
        $("html, body").animate({
          scrollTop: $("#video1").offset().top
        }, 900);
        return false;
    });
    $("#run").click(function(){
        $("#run p1").css({"color": "white", "font-size": "25px"});
        $("#breast p1").css({"color": "#000", "font-size": "18px"});
        $("html, body").animate({
          scrollTop: $("#video").offset().top
        }, 900);
        return false;
    });
});
//This is for video
$(document).ready(function(){
    $('img[id^="image"]').css("cursor", "pointer");
});
$(document).ready(function(){
  $(window).scroll(function(){
    if($(document).scrollTop() > 110){
      $("#cate").css("position", "fixed");
      $("#right").css("position", "fixed");
    }
    else{
      $("#cate").css("position", "relative");
      $("#right").css("position", "sticky");
    }
    if($(document).scrollTop() > 800){
      $("#breast p1").css({"color": "white", "font-size": "25px"});
      $("#run p1").css({"color": "#000", "font-size": "18px"});
    }
    if($(document).scrollTop() < 650){
      $("#run p1").css({"color": "white", "font-size": "25px"});
      $("#breast p1").css({"color": "#000", "font-size": "18px"});
    }
    $("#breast p1").mouseover(function(){
        $(this).css("color", "white");
    });
    $("#breast p1").mouseout(function(){
        if($(this).css("font-size") != "25px") $(this).css("color", "#000");
      });

    $("#run p1").mouseover(function(){
        $(this).css("color", "white");
    });
    $("#run p1").mouseout(function(){
        if($(this).css("font-size") != "25px") $(this).css("color", "#000");
    });
  });
});

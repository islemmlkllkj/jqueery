
function bolde(){ 
  event.preventDefault();
  var  getId=document.getElementById("texte") ;
  getId.style.fontWeight="bold";
  }
function ITALICE(){
  event.preventDefault();
  var getID=document.getElementById("texte");
  getID.style.fontStyle="italic"
  }
   function Underline(){
    event.preventDefault();
    var getID=document.getElementById("texte");
    getID.style.textDecoration ="underline";
    }
    function SIZE(){
      event.preventDefault();
      var getID=document.getElementById("texte");

      getID.style.fontSize=document.getElementById("fs").value;
    }
     function STYLE() {
      event.preventDefault();
      var getID=document.getElementById("texte");

      getID.style.fontFamily=document.getElementById("islem").value;
    }
    // $('#services').mouseenter(function(){
    //   $('.h3').click(function(){
    //    alert(This is GoMyCode Track. 
    //     Each track has its own goal. 
    //     By adopting this track, you chose your own goal.);
    //   });
    // })
    $("#services").mouseenter(function(){
      $(".iss").show();
    });
    $("#services").mouseleave(function(){
      $(".iss").hide();
    });
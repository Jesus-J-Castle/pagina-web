
  /* Script de menu fijo y deslizante*/ 
  $(document).ready(function () {

        $(window).scroll(function () {
          scroll = $(window).scrollTop();
          if (scroll > 1) {
            $('.menu').css({ "position": "fixed" });

            $('.menu').css({ "z-index": "100" });
            
            $('.menu').css({ "width": "100%" });
            
            $('.menu').css({ "top": "0" });
            $('.menu').css({ "background": "rgba(125, 7, 68,0.9)" });
            $('.menu a').css({ "color": "#fff" });
            $('.logo').css({ "color": "#fff" });
            $('.menu').css({ "box-shadow": "rgba(0, 0, 0, 0.22) 6px 1px 1px" });
            

            $(".menu a").hover(function () {
              $(this).css("color", "grey");
            }, function () {
              $(this).css("color", "white");
            });

            //AGREGUE ESTO PARA LA CORTINA
            $('.left-panel').css({"display":"none"})
            $('.menu-b').css({"display":"none"})
            $('.other-panel').css({"display":"none"})
            $('.reloj').css({"top":"50px"})
          } else {
            $('.menu').css({ "position": "relative" });
            
            $('.menu').css({ "box-shadow": "0 0 0" });
            $('.menu a').css({ "color": "#fff" });
            $('.logo').css({ "color": "#fff" });
            
            //AGREGUEESTO PARA LA CORTINA
            $('.left-panel').css({"display":"flex"})
            $('.menu-b').css({"display":"flex"})
            $('.other-panel').css({"display":"flex"})
          
            
          }
        })
  
            $('.menu-icon').click(function () {
            $('header nav').slideToggle();
            $('header nav').css({ "z-index": "100" });
        })
  
    })
      /* ---  Seccion DOCUMENTOS-A --- */ 
        
      //  $(document).ready(function(){ $('.btn-bank').on('click',function(){ $('#bank').slideDown('slow'); }); });

       $(document).ready(function(){
        $(".btn-docu").click(function(){
          $("#docu-a").slideDown();
      });
      $(".btn-docu-2").click(function(){
          $("#docu-a").slideUp('slow');
        });
      });

      /* Seccion documentos B*/ 
      
      $(document).ready(function(){
        $(".btn-docu-b").click(function(){
          $("#docu-b").slideDown();
      });
      $(".btn-docu-b-2").click(function(){
          $("#docu-b").slideUp('slow');
        });
      });

      // SECCION DOCUMENTOS C

      $(document).ready(function(){
        $(".btn-docu-c").click(function(){
          $("#docu-c").slideDown();
      });
      $(".btn-docu-c-2").click(function(){
          $("#docu-c").slideUp('slow');
        });
      });

       // SECCION DOCUMENTOS D

    $(document).ready(function(){
        $(".btn-docu-d").click(function(){
          $("#docu-d").slideDown();
      });
      $(".btn-docu-d-2").click(function(){
          $("#docu-d").slideUp('slow');
        });
      });


/*
          $(".menu a").hover(function () {
            $(this).css("color", "grey");
          }, function () {
            $(this).css("color", "white");
          });
      });*/

        /* --  Funcion aboutUS Toggle  -- */

        //$(document).ready(function(){ $('.btn-toggle').on('click',function(){ $('#toggle').slideToggle('slow');   }); });

        $(document).ready(function(){
          $(".btn-toggle").click(function(){
            $("#toggle").slideDown();
          });
          $(".btn-toggle-2").click(function(){
            $("#toggle").slideUp('slow');  
          });
        });

        /* -- Seccion A (NEWS & Avisos) -- */

        $(document).ready(function(){
          $(".btn-seccion-a").click(function(){
            $(".oculto-0").hide();
            $(".oculto-1").hide();
            $(".oculto-2").hide();
            $(".oculto-3").hide();
            $(".oculto-4").hide();
            
            $(".oculto-boton").hide();
          });

          $(".btn-seccion-a2").click(function(){
            $(".oculto-1").show('slow');
            $(".oculto-boton").show('slow')
          });

          $(".btn-seccion-a3").click(function(){
            $(".oculto-2").show('slow');
            $(".oculto-boton").show('slow')
          });

          $(".btn-seccion-a4").click(function(){
            $(".oculto-3").show('slow');
            $(".oculto-boton").show('slow')
          });

          $(".btn-seccion-a5").click(function(){
            $(".oculto-4").show('slow');
            $(".oculto-boton").show('slow')
          });

          $(".btn-seccion-a6").click(function(){
            $(".oculto-0").show('slow');
          });

        });
    
        /* ---  Seccion Toggle CALENDARIO --- */ 
        
       // $(document).ready(function(){  $('.btn-seccion-calendar').on('click',function(){ $('#seccion-calendar').slideToggle('slow'); }); });
        $(document).ready(function(){
          $(".btn-seccion-calendar").click(function(){
            $("#seccion-calendar").slideDown();
        });
        $(".btn-seccion-calendar-2").click(function(){
            $("#seccion-calendar").slideUp();
          });
        });

        // JQUERY SOBRE EL ABOUT US

  
        $(document).ready(function(){
          $(".fondos-toggle-1").click(function(){
          
            
            $(".fondos-toggle-1 p").toggle('slow');

          });
        });


        // JQUERY HOVER ARCHIVOS

        $(document).ready(function(){
	        $("#archivo .archivo-fondo-1").hover(function(){
                                              
            $("#archivo .archivo-fondo-1 img").hide();
		     
            }, function(){

            $("#archivo .archivo-fondo-1 img").show();
            
		      });
        });
        
        //

        $(document).ready(function(){
	        $("#archivo .archivo-fondo-2").hover(function(){
                                              
            $("#archivo .archivo-fondo-2 img").hide();
		     
            }, function(){

            $("#archivo .archivo-fondo-2 img").show();
            $("#archivo .archivo-fondo-2 img").css("position","relative");
            
		      });
        });

        //
        
        $(document).ready(function(){
	        $("#archivo .archivo-fondo-3").hover(function(){
                                              
            $("#archivo .archivo-fondo-3 img").hide();
		     
            }, function(){

            $("#archivo .archivo-fondo-3 img").show();
            $("#archivo .archivo-fondo-3 img").css("position","relative");
            
		      });
        });

        //
        
        $(document).ready(function(){
	        $("#archivo .archivo-fondo-4").hover(function(){
                                              
            $("#archivo .archivo-fondo-4 img").hide();
		     
            }, function(){

            $("#archivo .archivo-fondo-4 img").show();
            $("#archivo .archivo-fondo-4 img").css("position","relative");
            
		      });
        });
    
  // 

  // ===================== FECHA =========================

  var datetime = null,
  date = null;

  var update = function() {
  moment.locale('es');
  date = moment(new Date());
  datetime.html(date.format('HH:mm:ss'));
  datetime2.html(date.format('dddd, DD MMMM YYYY'));
};

$(document).ready(function() {
  datetime = $('.time h1');
  datetime2 = $('.time h3');
  update();
  setInterval(update, 1000);
});

/*
===========================================
===          GUIAS DE USUARIO           ===   
===========================================
*/

$(document).ready(function(){
  $("#docu-c .ti").click(function(){
    $("#GMti").toggle('slow');
  });
});


// ===============  Guias & Manuales 

$(document).ready(function(){
  $(".rd").click(function(){
    $("#GMdax").toggle('slow');
  });
});

// ===============  VIdeos Guias de Usuario

$(document).ready(function(){
  $(".ms-video-1").click(function(){
    $("#ms-video-1").toggle('slow');
  });
});

// =============== 

$(document).ready(function(){
  $(".ms-video-2").click(function(){
    $("#ms-video-2").toggle('slow');
  });
});

/*
===========================================
===             Indicadores             ===   
===========================================
*/

(document).ready(function(){
  $(".menu-b").click(function(){

    $('.menu').css({ "z-index": "100" });

    $('.left-panel').css({ "z-index": "1" });
            
});

});

$(function() {
    /* Navbar Scroll */
    $(document).on("scroll", function() {
    if ($(document).scrollTop() > 0) {
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }
  });

  
  
  $("body").css("padding-top", $(".navbar").height() + 10);
  
  /* Date Picker Kodları */
  $("#datepicker1").datepicker({
    uiLibrary: "bootstrap4"
  });

  $("#datepicker2").datepicker({
    uiLibrary: "bootstrap4"
  });
  $("#datepicker3").datepicker({
    uiLibrary: "bootstrap4"
  });
  $("#datepicker4").datepicker({
    uiLibrary: "bootstrap4"
  });
  
  /* Uçuş ve Otel arama Tek/Çift Yön */
  var $radios1 = $('#inlineRadio1');
  var $radios2 = $('#inlineRadio2');
  $radios2.change(function() {
     $('.divDatepicker2').hide();
  });
  $radios1.change(function() {
    $('.divDatepicker2').show();
 });
  
    
});




     
 
    
    


/* Açılır Toggle Menü  */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    $(".menu-background").toggleClass("is-active");
    $(".menu-items").toggleClass("is-active");
  });

  function getContent(){
    document.getElementById("content-name").value = document.getElementById("input-name").innerHTML;
    document.getElementById("content-email").value = document.getElementById("input-email").innerHTML;
  }
});

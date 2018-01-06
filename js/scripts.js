$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    $(".menu-background").toggleClass("is-active");
    $(".menu-items").toggleClass("is-active");
  });

  $(".testbtn").click(function(){
    console.log(getContent);
  });

});

function getFormContent(){
  document.getElementById('input-name').value=document.getElementById('content-name').innerHTML;
  document.getElementById('input-email').value=document.getElementById('content-email').innerHTML;
  document.getElementById('input-message').value=document.getElementById('content-message').innerHTML;
}

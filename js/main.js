
//preloader
//after window is loaded completely
window.onload = function(){
    //hide the preloader
    $(".preloader").fadeOut(1000);
    setTimeout(() => {
      document.querySelector(".preloader").style.display = "none";
    }, 1000);


}

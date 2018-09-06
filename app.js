
//preloading
window.addEventListener('load', function(){
    document.querySelector('.preloader').style.display = "none";
});

//navbar click
document.querySelector('.navBtn').addEventListener('click', function(){
    document.querySelector('.nav').classList.toggle('nav--show');
});

//preloading
window.addEventListener('load', function(){
    document.querySelector('.preloader').style.display = "none";
});

//navbar click
document.querySelector('.navBtn').addEventListener('click', function(){
    document.querySelector('.nav').classList.toggle('nav--show');
});

//play/stop video
document.querySelector('.video__switch').addEventListener('click', function(){
    let btn = document.querySelector('.video__switch-btn');
    if(!btn.classList.contains('btnSlide')){
        btn.classList.add('btnSlide');
        document.querySelector('.video__item').pause();
    }else{
        btn.classList.remove('btnSlide');
        document.querySelector('.video__item').play();
    }
});
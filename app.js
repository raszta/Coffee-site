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

//submit form
document.querySelector('.drink-form').addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.querySelector('.input-name').value;
    const lastName = document.querySelector('.input-lastname').value;
    const email = document.querySelector('.input-email').value;

    const val = empty(name,lastName,email);
    if(val){
        showFeedback("Successful added", 'success');
        let customer = new Customer(name,lastName,email);
        addCustomer(customer);
    }else{        
        showFeedback("Some values are empty", 'error');
    }
});

//check if values from form are empty
function empty(a, b, c) {
    let result;
    if (a === '' || b === '' || c === '') {
        result = false;
    } else {
        result = true;
    }
    return result;
}
//show the warning of form
function showFeedback(text, type) {
    const feedback = document.querySelector('.drink-form__feedback');
    if (type === 'success') {        
        feedback.classList.add('success');
        feedback.innerText = text;
        this.removeAlert('success');
    } else if (type === 'error') {
        feedback.classList.add('error');
        feedback.innerText = text;
        this.removeAlert('error');
    }
}
//removing of warning from form
function removeAlert(type) {
    setTimeout(function () {
        document.querySelector('.drink-form__feedback').classList.remove(type);
    }, 3000);
}

//customer constructor
function Customer(name,lastName,email){
    this.name = name;
    this.lastName = lastName;
    this.email = email;
}

//add customer from form
function addCustomer(customer){
    const images = [1,2,3,4,5];
    let random = Math.floor(Math.random()*images.length);
    const div = document.createElement('div');
    div.classList.add('person');
    div.innerHTML = ` <img src="/img/person-${random}.jpeg" alt="person avatar" class="person__image">
            <h4 class="person__name">${customer.name}</h4>
            <h4 class="person__lastname">${customer.lastName}</h4>`;
    document.querySelector('.drink-card__list').appendChild(div);
    clearField();
}

//clear fields from form
function clearField(){
    document.querySelector('.input-name').value = '';
    document.querySelector('.input-lastname').value = '';
    document.querySelector('.input-email').value = '';
}
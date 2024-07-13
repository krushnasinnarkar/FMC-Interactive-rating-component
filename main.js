const buttons = document.querySelectorAll('button');
const ratings = document.getElementById('rating');
const submit = document.getElementById('submit');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
var isActive;
isActive = false;

function checkActive() {
    buttons.forEach(btns => {
        if(btns.classList.contains('active')){
            btns.classList.remove('active');
        }
    })
}

function setRating(num){
    console.log(`rating is ${num}`);
    ratings.textContent = num;
}

buttons.forEach(btn => {
    btn.addEventListener('click', function(){
        if(btn.hasAttribute('value')){
            checkActive();
            console.log(isActive);
            var temp;
            temp = btn.getAttribute('value');
            setRating(temp);
            btn.classList.toggle('active');
            isActive = true;
        }
    })
})

function submission(){
    if(isActive){
        card1.classList.add('active');
        card2.classList.add('active');
    }
    else {
        window.alert('choose a button godammit!');
    }
}
const dateElement = document.getElementsByClassName('time')
const date = new Date()
for (let i = 0; i<dateElement.length;i++){
    dateElement[i].innerText = date.toLocaleDateString()
}
document.getElementsByClassName('hamburger')[0].addEventListener('click',() => {
    const clicked = document.getElementsByClassName('hamburger')[0].classList.contains('clicked')
    if (clicked){
        document.getElementsByClassName('hamburger')[0].innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>'
        document.getElementsByClassName('hamburger')[0].classList.remove('clicked')
    }else{
        document.getElementsByClassName('hamburger')[0].innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'
        document.getElementsByClassName('hamburger')[0].classList.add('clicked')
    }
})
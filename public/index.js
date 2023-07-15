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
        if(document.getElementsByClassName('hamburger')[0].classList.contains('pages')){
            document.getElementsByClassName('slide')[0].style.transform = 'translateY(0)';
        }else{
            document.getElementsByClassName('header-content')[0].style.transform = 'translate(15%,-20%)';
        }        
        document.getElementsByClassName('slide')[0].style.transition = '.45s';
        document.getElementsByClassName('navbar')[0].style.transform = 'translateY(-200%)'
    }else{
        document.getElementsByClassName('hamburger')[0].innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'
        document.getElementsByClassName('hamburger')[0].classList.add('clicked')
        if(document.getElementsByClassName('hamburger')[0].classList.contains('pages')){
            document.getElementsByClassName('slide')[0].style.transform = 'translateY(0)';
        }else{
            document.getElementsByClassName('header-content')[0].style.transform = 'translate(15%,30%)';
        }
        document.getElementsByClassName('slide')[0].style.transition = '.45s';
        document.getElementsByClassName('navbar')[0].style.transform = 'translateY(0)'
    }
})

const textarea = document.getElementsByClassName('textarea-control')
for (let i =0;textarea.length;i++){
    textarea[i].addEventListener('keyup',e => {
        const count = e.target.scrollHeight
        textarea[i].style.height = count+'px'
    })
}


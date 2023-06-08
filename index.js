const dateElement = document.getElementsByClassName('time')
const date = new Date()
for (let i = 0; i<dateElement.length;i++){
    dateElement[i].innerText = date.toLocaleDateString()
}

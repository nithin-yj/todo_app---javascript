let box = document.getElementById('box')
let listContainer = document.getElementById('list-container')

function Task(){
    if(box.value === ''){
        alert('Task name cannot be empty')
    }
    else{

        let li = document.createElement('li')
        li.innerHTML = box.value
        listContainer.appendChild(li)

    }
    box.value == ''
}
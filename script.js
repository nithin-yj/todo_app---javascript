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
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)

    }
    box.value == ''
}   

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')

    }
    else{
        if(e.target.tagName === 'SPAN'){
            e.target.parentElement.remove()

        }
    }
},false)
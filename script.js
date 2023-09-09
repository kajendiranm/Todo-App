let input = document.getElementById('input')
let button = document.querySelector('button')
let result_box = document.querySelector('.lists')

let todos = [];
window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addtodo(todo))
}

button.addEventListener("click", ()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(input.value)
    input.value=""

    
})

function remove(todo){
    let index = todos.indexOf(todo)
    if(index>-1)
        todos.splice(index,1)
    localStorage.setItem('todos',JSON.stringify(todos))
    
}
function addtodo(todo){
    let para = document.createElement('p')
    para.innerText = todo
    result_box.appendChild(para)

    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
        para.style.color='red'
        remove(para.innerText)
    })

    para.addEventListener('dblclick',()=>{
        result_box.removeChild(para)
        remove(para.innerText)
    })
}
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
      button.click();
    }
});

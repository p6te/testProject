let toDoInput
let errorInfo
let addBtn
let ulList 
let newToDo
let newDiv
let btn1
let btn2
let btn3
let info1
let info3

let popup
let popupInfo
let todoToEdit
let popupInput
let popupAddBtn
let popupCloseBtn

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
     toDoInput = document.querySelector('.todo-input')
     errorInfo = document.querySelector('.error-info')
     addBtn = document.querySelector('.btn-add')
     ulList = document.querySelector('.todolist ul')
     popup = document.querySelector('.popup')
     popupInfo = document.querySelector('.popup-info')
     popupInput = document.querySelector('.popup-input')
     popupAddBtn =  document.querySelector('.accept')
     popupCloseBtn =  document.querySelector('.cancel')

}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTask)
    ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closePopup)
    popupAddBtn.addEventListener('click', changeTodoText)
    toDoInput.addEventListener('keyup', enterKeyCheck)
    

}

const addNewTask = () =>{
    if(toDoInput.value !== ''){
        newToDo = document.createElement('li')
        newToDo.textContent = toDoInput.value
        ulList.append(newToDo)
        createToolsArea(newToDo)

        toDoInput.value = ''
        errorInfo.textContent = ''

    } else {
        errorInfo.textContent = 'Wpisz treść zadania'
    }
}


const createToolsArea = (newToDoArg) => {
    
    newDiv = document.createElement('div')
    btn1 = document.createElement('button')
    btn2 = document.createElement('button')
    btn3 = document.createElement('button')
    info1 = document.createElement('i')
    info3 = document.createElement('i')

    newDiv.classList.add('tools')
    info1.classList.add('fas')
    info1.classList.add('fa-check')
    info3.classList.add('fas')
    info3.classList.add('fa-times')
    btn1.classList.add('complete')
    btn2.classList.add('edit')
    btn3.classList.add('delete')

    btn2.textContent = 'EDIT'

    newDiv.append(btn1)
    newDiv.append(btn2)
    newDiv.append(btn3)
    btn1.append(info1)
    btn3.append(info3)

    newToDoArg.append(newDiv)
}

const checkClick = e => {
    if(e.target.matches('.complete')){
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')   
    } else if(e.target.matches('.edit')){
        editTodo(e);
    }else if (e.target.matches('.delete')){
        deleteTodo(e)
    }
}

const editTodo = (e) => {
    todoToEdit = e.target.closest('li')

    popupInput.value = todoToEdit.firstChild.textContent

    popup.style.display = 'flex'
    
}

const closePopup = () => {
    popup.style.display = 'none'
    popupInfo.textContent = ""
}

const changeTodoText = () => {
    if(popupInput.value !== '' ){
        todoToEdit.firstChild.textContent = popupInput.value
        popup.style.display = 'none'
        popupInfo.textContent = ""
    }else {
        popupInfo.textContent = "Musisz wpisać treść zadania"

    }

}
const deleteTodo = (e) => {
    (e.target.closest('li')).remove()

    const allTodos = ulList.querySelectorAll('li')

    if (allTodos.length == 0 ){
        errorInfo.textContent = 'Brak zadań na liście'
    } else {
        errorInfo.textContent = ''
    }
}

const enterKeyCheck = e => {
    if(e.key === "Enter")
    {addNewTask()}
}



document.addEventListener('DOMContentLoaded', main)
/**
 1. Capture the necessary items 
 2. Create Event Listner(after clicking the submit button) and based on that
    2.1. Create todo Div
    2.2. Create todo-item List
    2.3. Create Check and Trash Buttons
    2.4. Insert these items into todo DIV   
 3. Insert these items into todo-list UL   

 4. Add Event Listener to Check and Trash button and make these functional
*/

// * 1. Capture the necessary items 
const todoListul    = document.querySelector('.todo-list');
const todoInput     = document.querySelector('.todo-input');
const todoBtn       = document.querySelector('.todo-button');
const todoContainer = document.querySelector('.todo-container');



/** 
 2. Create Event Listner(after clicking the submit button) and based on that
    2.1. Create todo Div
    2.2. Create todo-item List
    2.3. Create Check and Trash Buttons
    2.4. Insert these items into todo DIV 
*/

// * 2. Create Event Listner(after clicking the submit button)
todoBtn.addEventListener('click', function(e){
    e.preventDefault();
    // console.log('Start');

    // Store the user input value
    const userInput = todoInput.value;

    if(userInput == ''){
        const formEl = document.forms[0];
        const p = document.createElement('p');
        p.className = 'error-msg';
        p.innerText = 'Sorry, You are trying to insert an empty task!';
        
        
        formEl.after(p);
        // formEl.parentNode.insertBefore(p, formEl.nextSibling);

        setTimeout(function () {
            let flag = true;
            p.className += ' drop-effect';

            // ! Remove the Error Paragraph after ending the animation  
            p.addEventListener('transitionend', function(){
                if(flag){
                    p.remove();
                }
                flag = false;
            });
            
        }, 1500);

        
    } else{
        // * 2.1. Create todo Div
        const todoDiv   = document.createElement('div');
        todoDiv.className = 'todo';

        // * 2.2. Create todo-item List
        const todoLi    = document.createElement('li');
        todoLi.className = 'todo-item';

        todoLi.innerText = userInput; 

        // * 2.3. Create Check and Trash Buttons
        // * Check Button
        const checkBtn   = document.createElement('button');
        checkBtn.className = 'check';
        checkBtn.innerHTML = '<i class="fas fa-check"></i>';

        // ! Trash Button
        const trashBtn   = document.createElement('button');
        trashBtn.className = 'trash';
        trashBtn.innerHTML = '<i class="fas fa-trash"></i>';

        // * Add/Append the list under the todo DIV
        // * 2.4. Insert these items into todo DIV 
        todoDiv.appendChild(todoLi);
        todoListul.appendChild(todoDiv);

        todoDiv.appendChild(checkBtn);
        todoDiv.appendChild(trashBtn);
        
        // ! Clear user input
        todoInput.value = '';
        checkList();
    }    
}); 

// * 4. Add Event Listener to Check and Trash button and make these functional
todoListul.addEventListener('click', function(e){
    e.preventDefault()
    const clickedEl = e.target;
    const todoDiv = clickedEl.parentNode;
    
    if(clickedEl.className == 'check'){
        todoDiv.className += ' completed'; 

        clickedEl.remove();
        
    }else if(clickedEl.className == 'trash'){
        let flag = true;
        todoDiv.className += ' drop-effect';

            todoDiv.addEventListener('transitionend', function(){
                if(flag){
                    todoDiv.remove();
                    checkList();
                }
                flag = false;
            });
        
    }
    
    
});

// ? 5. Check if the list is empty or not - if yes -> show success message
function checkList(){
    // console.log('length at checklist',todoListul.children.length);
    const p = document.createElement('p');
    p.className = 'finish-msg';

    if(todoListul.children.length == 0 ){
        const todoContainer = document.querySelector('.todo-container');
        const todoListul = document.querySelector('.todo-list');
        
        p.innerText = 'All tasks are done!';
        
        // formEl.after(p);
        todoContainer.insertBefore(p, todoListul);
        
    }else{ 

        if(todoContainer.firstElementChild.className == 'finish-msg'){
            const p = document.querySelector('.finish-msg');
            let flag = true;
            p.className += ' drop-effect';
            
            p.addEventListener('transitionend', function(){
                if(flag){
                    p.remove();
                }
                flag = false;
            });
        }

    }
}

checkList();


// todo Write Your Javascript Code here
// todo Your task is to check
// todo Also add a search bar to search through the todo-list
// todo If there is not task then it should show success message




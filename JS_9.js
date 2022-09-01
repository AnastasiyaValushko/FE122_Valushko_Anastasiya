window.addEventListener('load', function(){
    console.log('Страница загружена')
    
    let input = document.querySelector('.list-text');
    let ul = document.querySelector('ul.todos');

    function createToDo(){
    
        let elem = document.createElement('input');
        elem.getAttribute('type', 'checkbox');
        elem.classList.add('elem');
        elem.append();

        let li = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.classList.add('checkbox');
        checkbox.setAttribute('type', 'checkbox');
        let text = document.createElement('span');
        text.classList.add('todo-text');
        let newToDo = input.value;
        text.append(newToDo);
        li.append(checkbox);

        let editable = text.contentEditable;
        text.contentEditable = 'true';
        
        
        let deleteButton = document.createElement('span');
        deleteButton.classList.add('trash');
        let icon = document.createElement('i');
        icon.classList.add('fa', 'fa-trash', 'fa-2x');
        deleteButton.appendChild(icon);

        ul.appendChild(li).append(text, deleteButton);
        input.value = '';
        listenDeleteTodo(deleteButton);
    }

    
    function listenDeleteTodo(element){
        element.addEventListener('click', (event)=> {
            element.parentElement.remove();
            event.stopPropagation();
        });
    }

    function onClickToDo(event){
            event.target.parentElement.classList.toggle('checked');
    }     
    

    let btn = document.querySelector('.btn');
    btn.addEventListener("click", createToDo);

   
    input.addEventListener("keypress", function(elem){
        const keyEnter = 13;
        if (elem.which == keyEnter) {
            createToDo();
        }
    });

    ul.addEventListener('click', onClickToDo);

    let saveButton = document.querySelector("button.save");
    let clearButton = document.querySelector("button.clear");

    saveButton.addEventListener('click', function(){
        localStorage.setItem('todos', ul.innerHTML);
    });

        clearButton.addEventListener("click", function(){
        ul.innerHTML = "";
        localStorage.removeItem('todos', ul.innerHTML);
    });

    

    


    
    
});


window.addEventListener('load', function(){
    console.log('Страница загружена')

    let checkbox = document.querySelector('.checkbox');
    
    // Array.from(checkbox).forEach(function(e){
    //     e.addEventListener('click', function(e){
    //         e.target.value = 'FOCUS';
    //     });
    //     e.addEventListener('blur', function(e){
    //         e.target.value = '';
    //     });
    // });

    
    checkbox.addEventListener('mousedown', function(){
        checkbox.style.backgroundColor = 'rgb(226, 182, 169)';
    });

    let checked = document.querySelector('li');
    

    let input = document.querySelector('input.list-text');
    let ul = document.querySelector('ul.todos');


    function createToDo(){

        
        let li = document.createElement('li');
        let text = document.createElement('span');
        text.classList.add('todo-text');
        let newToDo = input.value;
        text.append(newToDo);

        
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
        if (event.target.tagName === 'li'){
            event.target.classList.toggle('checked');
        }
    }
  


    input.addEventListener("keypress", (keyPressed) => {
        const keyEnter = 13;
        if (keyPressed.which == keyEnter) {
                createToDo();
        }
    });
        
    ul.addEventListener('click', onClickToDo);
    
});


window.addEventListener('load', function(){
    console.log('Страница загружена')
    
    let input = document.querySelector('.list-text');
    let ul = document.querySelector('ul.todos');
    let ButtonAdd = document.getElementsByClassName('btn');



    function createToDo(){
    
        let elem = document.createElement('input');
        elem.getAttribute('type', 'checkbox');
        elem.classList.add('elem');
        elem.append();

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


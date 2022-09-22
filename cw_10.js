function Note(data){
    if (data.title.length > 0) this.data = data;

}

Note.prototype.edit = function(data){ // для редактирования заметки
    Object.assign(this.data, data);
}

const note1 = new Note({title: 'title', content: 'content'});
const note2 = new Note({title: '', content: 'content'});
const note3 = new Note({title: 'title', content: ''});

function NoteController(){
    this.notes = [];
    this.id = 0;
};

NoteController.prototype.add = function(data){
    if (!data.title) return;
    let note = new Note(data);
    let id = this.id++;
    note.edit({id});
    this.notes.push(note);
}

NoteController.prototype.edit = function(id, data){ //для редактирования КОНКРЕТНОЙ заметки (находит нужную нам заметку)
    this.notes.forEach(note => {
        if (note.data.id === id){
            note.edit(data);
        }
    });
}

NoteController.prototype.remove = function(id){
    this.notes = this.notes.filter(note => note.data.id !== id) // возвращаем заметки, не соответствующие нужному id
}

const notes = new NoteController();


function NoteUI(selector){
    NoteController.apply(this);
    this.selector = selector;
    this.notesContainer = null;
}

NoteUI.prototype = Object.create(NoteController.prototype);

NoteUI.prototype.init = function(){
    const container = document.querySelector(this.selector);

    let formContainer = this.createElement('form');
    let titleInput = this.createElement('input', [
        ['type', 'text'],
        ['placeholder', 'title']
    ]);
    let contentInput = this.createElement('input', [
        ['type', 'text'],
        ['placeholder', 'content']
    ]);
    let buttonAdd = this.createElement('button', [
        ['type', 'submit']
    ], 'Add');

    this.notesContainer = this.createElement('div', [
        ['class', 'notes']
    ]);

    formContainer.addEventListener('submit', event =>{
        event.preventDefault();
        let data = {
            title: titleInput.value,
            content: contentInput.value
        }

        this.add(data);

        titleInput.value = '';
        contentInput.value = '';

        this.render();
    });

    formContainer.append(titleInput, contentInput, buttonAdd);

    container.append(formContainer, this.notesContainer);
}

NoteUI.prototype.createElement = function(elem, attributes = [], content = null){
    let element = document.createElement(elem);
    if (attributes.length > 0){
        attributes.forEach(attr =>{
            element.setAttribute(attr[0], attr[1]);
        });
    }

    if(content !== null){
        element.innerText = content;
    }

    return element;
}

NoteUI.prototype.render = function(){
    this.notesContainer.innerHTML = '';
    this.notes.forEach(note => {
        let noteElem = this.createElement('div', [['class'],['note_elem']]);
        let title = this.createElement('h2', [
            ['class', 'title']
        ], note.data.title);
        let content = this.createElement('p',[
            ['class', 'content']
        ], note.data.content);

        let editButton = this.createElement('button', [], 'Edit');
        let delButton = this.createElement('button', [], 'Remove');

        delButton.addEventListener('click', () => {
            this.remove(note.data.id);
            this.render();
        });

        let flag = true;

        editButton.addEventListener('click', () =>{
            if(flag){
                title.contentEditable = true;
                content.contentEditable = true;
                editButton.innerText = 'Save';
                flag = !flag;
            }else{
                title.contentEditable = false;
                content.contentEditable = false;
                editButton.innerText = 'Edit';
                flag = !flag;
                let data = {
                    title: title.innerText,
                    content: content.innerText
                }
                this.edit(note.data.id, data);
            } 
            console.log(this.notes);
        });

        noteElem.addEventListener('keydown', event =>{
            let target = event.target;
            if (target.classList.contains('title') || target.classList.contains('content')){
                if(event.altKey && event.code === 'Enter'){
                    title.contentEditable = false;
                    content.contentEditable = false;
                    editButton.innerText = 'Edit';
                    flag = !flag;
                    let data = {
                        title: title.innerText,
                        content: content.innerText
                    }
                    this.edit(note.data.id, data);
                }
            }
        });

        noteElem.append(title, content, editButton, delButton);
        this.notesContainer.append(noteElem);
    });
}

new NoteUI('.note').init();
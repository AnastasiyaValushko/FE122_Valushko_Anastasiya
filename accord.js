const accordeon = (selector) => {
    const container = document.querySelector(selector);
    const butons = container.querySelectorAll('.accordeon_button');
    if (!butons) return;

    const contents = container.querySelectorAll('.accordeon_content');
    if (!contents) return;

    const show = (event) => {
        let nextElem = event.target.nextElementSibling;
        let button = event.target;

        contents.forEach(element => {
            if (nextElem !== element) element.classList.remove('active');
        });
        butons.forEach(element => {
            if (button !== element) element.classList.remove('active');
        });

        button.classList.toggle('active');
        nextElem.classList.toggle('active');
    }

    butons.forEach(button => {
        button.addEventListener('click', show);
    });
}

accordeon('.accordeon_container')
const tooltips = function(selector){
    let tooltipContainer = document.querySelectorAll(selector);

    const createTooltip = function (event, tooltip){
        console.log(event);
        let text = tooltip.title;

        let x = event.target.offsetLeft + (event.target.offsetWidth - event.target.offsetWidth / 2);
        let y = event.target.offsetTop + (event.target.offsetHeight + 5);

        let div = document.createElement('div');
        div.classList.add('tooltip');
        div.innerText = text; //div.innerText = tooltip.title
        div.style.top = y + 'px';
        div.style.left = x + 'px';
        return div
    }

    const findTooltip = function (container){
        let tooltips = container.querySelectorAll('.tooltip_element');

        tooltips.forEach((tooltip) => {
            let div = null;
            tooltip.addEventListener('mouseover', function(event){
                div = createTooltip(event, tooltip, container);
                container.append(div);
            });

            tooltip.addEventListener('mouseout', function(){
                div.remove();
            });
        });
    }

    tooltipContainer.forEach((container) => {
        findTooltip(container);
    });
}

tooltips('.tooltips');
const tooltips = function(selector){
    let tooltipContainer = document.querySelectorAll(selector);

    const createTooltip = function (event, tooltip){
        let x = event.target.offsetLeft + (event.target.offsetWidth - event.target.offsetWidth / 3);
        let y = event.target.offsetTop + (event.target.offsetHeight + 7);

        let div = document.createElement('div');
        div.classList.add('tooltip');
        div.innerText = tooltip.title; 

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
let day = prompt('Какое число месяца?');
    dekada = (day <= 10) ? ('Первая декада месяца'):
             (day <= 20) ? ('Вторая декада месяца'):
             (day <= 31) ? ('Третья декада месяца'): ('Введите другое число');
console.log(dekada);

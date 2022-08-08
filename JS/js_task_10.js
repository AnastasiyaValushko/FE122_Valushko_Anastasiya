let month = (day <= 31) ? ('Январь'):
        (day <= 59) ? ('Февраль'):
        (day <= 90) ? ('Март'):
        (day <= 120) ? ('Апрель'):
        (day <= 151) ? ('Май'):
        (day <= 181) ? ('Июнь'):
        (day <= 211) ? ('Июль'):
        (day <= 242) ? ('Август'):
        (day <= 273) ? ('Сентьбрь'):
        (day <= 304) ? ('Октябрь'):
        (day <= 334) ? ('Ноябрь'):
        (day <= 365) ? ('Декабрь') : ('Такого месяца не существует');
console.log(month);  

let season = "";

switch (month) {
  case "Декабрь":
  case "Январь":
  case "Февраль":
    season = "Зима";
    break;
  case "Март":
  case "Апрель":
  case "Май":
    season = "Весна";
    break;
  case "Июнь":
  case "Июль":
  case "Август":
    season = "Лето";
    break;
  case "Сентябрь":
  case "Октябрь":
  case "Ноябрь":
    season = "Осень";
    break;
  default:
    season = "Нет такой поры года!";
}

alert(season);
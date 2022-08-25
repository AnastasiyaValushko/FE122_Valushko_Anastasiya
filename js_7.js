let Teapot = function(){
    this.get = function(){
        if (confirm ('Включить водонагреватель?')){
            this.power = prompt('Введите мощность водонагревателя, кВТ');
            this.tk = prompt('Введите конечную температуру воды, °С (обычно 60°C)'); 
            this.tn = prompt('Введите начальную температуру воды, °С'); 
            this.size = prompt('Введите объём нагреваемой воды, л');
        }else{
            this.size = 0;
        };
        this.operation();
    };

    this.operation = function(){
        this.result = (0.00117 * this.size * (this.tk - this.tn) / this.power) * 60;
        this.show();
    };
    
    this.show = function(){
        
        if(this.size == 0 || this.size == undefined){
            alert('Водонагреватель не включен');
        } else{
            alert('Время нагрева воды в водонагревателе' + ' = ' + 0.00117 + ' * ' + this.size + ' * ' + '(' + this.tk + ' - ' + this.tn + ')' + ' / ' + this.power + ' = ' + this.result + ' минут');
        }
    };
};

let teapot = new Teapot();
teapot.get();
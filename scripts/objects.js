var car = {
        producer: 'Тойота',
        model: 'Камри',
        birthYear: 2000,
        avgSpeed: 120,
        print: function (){
            alert (
                `Производитель: ${this.producer}\n`+
                `Модель: ${this.model}\n`+
                `Год выпуска: ${this.birthYear}\n`+
                `Возраст автомобиля: ${this.age()}\n`+
                `Средняя скорость: ${this.avgSpeed}\n`);
        },
        time: function(s){
            t=s/this.avgSpeed;
            if (t > 4){
                t += Math.floor(t / 4);
            }
            return t;
        },
        age: function(){
            var myDate = new Date();
            return carAge = myDate.getFullYear()-this.birthYear;
        }
    
    };
    car.print();
    s = +prompt('Введите расстояние');
    alert (`Чтобы пройти расстояние ${s} понадобится ${car.time (s)} часов`);


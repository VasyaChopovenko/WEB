console.log('<=========== TASK 12 ===========>');

/**
* Класс, объекты которого описывают параметры гамбургера. 
* 
* @constructor
* @param size        Размер
* @param stuffing    Начинка
* @throws {HamburgerException}  При неправильном использовании
*/
class Hamburger {
    constructor(size, stuffing) {
        if (size == Hamburger.SIZE_SMALL || size == Hamburger.SIZE_LARGE) {
            this.size = size;
        } else if (size == undefined) {
            throw new HamburgerException("HamburgerException: no size given");
        } else if (size != Hamburger.SIZE_SMALL || size != Hamburger.SIZE_LARGE) {
            throw new HamburgerException("HamburgerException: invalid size " + size.name);
        }

        if (stuffing == Hamburger.STUFF_CHEESE || stuffing == Hamburger.STUFF_SALAD || stuffing == Hamburger.STUFF_POTATO) {
            this.stuffing = stuffing;
        } else if (stuffing == undefined) {
            throw new HamburgerException("HamburgerException: no stuff given");
        } else if (stuffing != Hamburger.SIZE_SMALL || stuffing != Hamburger.SIZE_LARGE) {
            throw new HamburgerException("HamburgerException: invalid stuff " + stuffing.name);
        }

        this.toppings = new Array();
    }
    /**
    * Добавить добавку к гамбургеру. Можно добавить несколько
    * добавок, при условии, что они разные.
    *
    * @param topping     Тип добавки
    * @throws {HamburgerException}  При неправильном использовании
    */
    addTopping(topping) {
        if (topping == Hamburger.TOPPING_SPICE || topping == Hamburger.TOPPING_MAYO) {
            if (this.toppings.filter(existingTopping => existingTopping === topping).length > 0) {
                throw new HamburgerException(`HamburgerException: "${topping.name}" has already added to hamburger`);
            }
            this.toppings.push(topping);
        } else if (topping == undefined) {
            throw new HamburgerException("HamburgerException: no topping given");
        } else if (topping != Hamburger.TOPPING_SPICE || topping != Hamburger.TOPPING_MAYO) {
            throw new HamburgerException("HamburgerException: invalid topping " + topping.name);
        }
    }
    /**
     * Убрать добавку, при условии, что она ранее была
     * добавлена.
     *
     * @param topping   Тип добавки
     * @throws {HamburgerException}  При неправильном использовании
     */
    removeTopping(topping) {
        if (topping == Hamburger.TOPPING_SPICE || topping == Hamburger.TOPPING_MAYO) {
            this.toppings = this.toppings.filter(existingTopping => existingTopping.name != topping.name);
        } else if (topping == undefined) {
            throw new HamburgerException("HamburgerException: no topping given");
        } else if (topping != Hamburger.TOPPING_SPICE || topping != Hamburger.TOPPING_MAYO) {
            throw new HamburgerException("HamburgerException: invalid topping " + topping.name);
        }
    }
    /**
     * Получить список добавок.
     *
     * @return {Array} Массив добавленных добавок, содержит константы
     *                 Hamburger.TOPPING_*
     */
    getToppings() {
        return this.toppings;
    }
    /**
     * Узнать размер гамбургера
     */
    getSize() {
        return this.size;
    }
    /**
     * Узнать начинку гамбургера
     */
    getStuffing() {
        return this.stuffing;
    }
    /**
     * Узнать цену гамбургера
     * @return {Number} Цена в тугриках
     */
    calculatePrice() {
        let toppingsPrice = 0;
        if (this.toppings.length > 1) {
            toppingsPrice = this.toppings.reduce((p, c) =>  p.price + c.price);
        } else if (this.toppings.length === 1) {
            toppingsPrice = this.toppings[0].price;
        }

        return this.size.price + this.stuffing.price + toppingsPrice;
    }
    /**
     * Узнать калорийность
     * @return {Number} Калорийность в калориях
     */
    calculateCalories() {
        let toppingsCalories = 0;
        if (this.toppings.length > 1) {
            toppingsCalories = this.toppings.reduce((p, c) =>  p.calories + c.calories);
        } else if (this.toppings.length === 1) {
            toppingsCalories = this.toppings[0].calories;
        }

        return this.size.calories + this.stuffing.calories + toppingsCalories;
    }
}

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = { name: 'SIZE_SMALL', price: 50, calories: 20 };
Hamburger.SIZE_LARGE = { name: 'SIZE_LARGE', price: 100, calories: 40 };

Hamburger.STUFF_CHEESE = { name: 'STUFF_CHEESE', price: 10, calories: 20 };
Hamburger.STUFF_SALAD = { name: 'STUFF_SALAD', price: 20, calories: 5 };
Hamburger.STUFF_POTATO = { name: 'STUFF_POTATO', price: 15, calories: 10 };

Hamburger.TOPPING_SPICE = { name: 'TOPPING_SPICE', price: 15, calories: 0 };
Hamburger.TOPPING_MAYO = { name: 'TOPPING_MAYO', price: 20, calories: 5 };

/**
 * Представляет информацию об ошибке в ходе работы с гамбургером. 
 * Подробности хранятся в свойстве message.
 * @constructor 
 */
class HamburgerException extends Error {
    constructor(message) {
        super(message);
        this.name = 'HamburgerException';
    }
}

// маленький гамбургер с начинкой из сыра
let hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFF_CHEESE);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
console.log("Calories: %f", hamburger.calculateCalories());
// сколько стоит
console.log("Price: %f", hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);
// А сколько теперь стоит? 
console.log("Price with sauce: %f", hamburger.calculatePrice());
// Проверить, большой ли гамбургер? 

console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Have %d toppings", hamburger.getToppings().length); // 1

let h2 = new Hamburger(); // => HamburgerException: no size given


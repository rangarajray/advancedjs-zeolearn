/**
 * Created by moksha on 09/01/17.
 */
var Animal = {
    speak() {
        console.log(this.name + ' makes a noise.');
    }
};

class Dog {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' barks.');
    }
}

Object.setPrototypeOf(Dog.prototype, Animal);

var d = new Dog('Mitzie');
d.speak();
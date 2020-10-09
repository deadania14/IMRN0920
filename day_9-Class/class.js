class Animal { // Code class di sini 

    constructor(name, legs, cold_blooded) {
        this.name = name;
        this.legs = legs;
        this.cold_blooded = cold_blooded


    }
}
var sheep = new Animal("shaun", 4, false);
// console.log(sheep)
console.log(sheep.name) // "shaun" 
console.log(sheep.legs) // 4 
console.log(sheep.cold_blooded) // false

// Code class Ape dan class Frog di sini
class Ape extends Animal { // Code class di sini 

    constructor(name) {
        super(name)

    }
    yell() {
        console.log("Auooo");
    }
}

class Frog extends Animal { // Code class di sini 

    constructor(name) {
        super(name)

    }
    jump() {
        console.log("hop hop");
    }
}
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
console.log(sungokong.name);


var kodok = new Frog("buduk")
kodok.jump() // "hop hop"
console.log(kodok.name);

class Clock {
    // Code di sini
    constructor(temp) {
        this.templ = temp;

    }
    start() {
        this.render();
    }
    tick() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this.templ.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        return output;
    }
    render() {
        let timer;
        console.log(this.tick());

        var self = this
        timer = setTimeout(function() { return self.render() }, 1000)
    }
}

var clock = new Clock({ template: 'h:m:s' });
clock.start();
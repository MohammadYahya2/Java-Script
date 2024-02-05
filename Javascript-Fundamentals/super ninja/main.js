class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log("My name is " + this.name);
    }

    showStats() {
        console.log(`I am a ${this.name}, my health is ${this.health}, I can run at a speed of ${this.speed}, and my strength is ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const Senseis = new Sensei("Master Splinter", 200, 10, 10, 10);
Senseis.drinkSake();
Senseis.speakWisdom();
Senseis.showStats();
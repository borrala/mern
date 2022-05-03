class Ninja{
    constructor(name, speed = 3,strength = 3, health = 60){
        this.name = name;
        this.speed = speed;
        this.strength = strength;
        this.health = health;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log("name:",this.name,", speed:", this.speed, ", strength:", this.strength,", health:",this.health);
    }
    drinkSake(){
        this.health += 10;
    }
}
const jared = new Ninja("Jared");
console.log(jared);
jared.sayName();
jared.showStats();
jared.drinkSake();
jared.showStats();
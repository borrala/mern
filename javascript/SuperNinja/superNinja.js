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
class Sensei extends Ninja{
    constructor(name, speed =10, strength = 10, health = 200, wisdom = 10){
        super(name)
        this.name = name;
        this.speed = speed;
        this.strength = strength;
        this.health = health;
        this.wisdom = wisdom;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("You will make a fine warrior Goku.. Krillin... you will be a good friend.")
    }
}
const masterRoshi = new Sensei("Master Roshi");
console.log(masterRoshi);
masterRoshi.speakWisdom();
masterRoshi.showStats();
masterRoshi.showStats();
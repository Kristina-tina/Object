"use strict";

let isUser = {
   name: 'Tina',
   surname: 'Object',
   email: 'bbbbb',
   password: 'dd',
   tel: "",
   adress: {
      street: 'Zaporozhskaya',
      house: '',
   }
};

function greeting(isUser) {
   console.log('Hi, ${isUser.name}, ${isUser.surname}');
}
for (let key in isUser) {
  console.log (key);
}
  

let isAuto = {
   colour: '',
   model: '',
   brand: '',
   engineCapacity: '',
   speed: '0',
   maxSpeed: '200',

 accelerate () {
   this.speed = this.speed + accelValue; 
      if (this.speed > this.maxSpeed){
         this.speed = this.maxSpeed;
      }
      return this.speed;
 }, 

deaccelerate () {
   this.speed = this.speed - accelValue;
   if(this.speed < 0){
      this.speed = 0;
   }
      return this.speed;
},

   stop() {
      this.speed = 0;
      return this.speed;
   }
} 

//5//

function NewAuto (isAuto, colour, model, brand, engineCapacity, speed, maxSpeed){
   this.auto = isAuto;
   this.colour = colour,
   this.model = model,
   this.brand = brand,
   this.engineCap = engineCapacity,
   this.speed = speed,
   this.maxS = maxSpeed
};

const auto1 = NewAuto  ('', '', '',);
console.log('auto1 :>> ', auto1); 

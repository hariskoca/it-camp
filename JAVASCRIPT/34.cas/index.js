//class

class Auto {
  type;
  name;
  yearOfManufacture;
  price;

  constructor(type, name, yearOfManufacture, price) {
    this.type = type;
    this.name = name;
    this.yearOfManufacture = yearOfManufacture;
    this.price = price;
  }
  getPrice() {
    return `The price is ${this.price} euros`;
  }
}

const a1 = new Auto("BMW", "C1", 2012, 35000);

const a2 = new Auto("Mercedes", "C Class", 2023, 97500);

const a3 = new Auto("Audi", "AS", 2019, 45000);

console.log(a1.PriceInCents());

function Auto2(name, price) {
  this.name = name;
  this.price = price;
}

Auto2.prototype.getPrice = () => {
  return this.price;
};

const b1 = new Auto2();

console.log(b1.getPrice());
console.log(b1);

// custom array method

Array.prototype.myMap = function (callback) {
  this.forEach((value, index, array) => {
    result.push(callback(value, index, array));
  });

  return result;
};

const arr = [1, 2, 3, 4].myMap((value) => {
  return value * 2;
});

console.log(arr);

// inheritance

class Mamel {
  name;
}

class Human extends Mamel {}

console.log(new Mamel(), new Human());

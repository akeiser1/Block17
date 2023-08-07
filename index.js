const coffeeMenu = [
  {
    name: "cappuccino",
    price: 8,
    seasonal: false,
  },
  {
    name: 'espresso',
    price: 5,
    seasonal: false,
  },
  {
    name: "latte",
    price: 5,
    seasonal: false,
  },
  {
    name: "affogato",
    price: 9,
    seasonal: true,
  },
  {
    name: "macchiato",
    price: 6,
    seasonal: false,
  },
  {
    name: "americano",
    price: 7,
    seasonal: false,
  },
  {
    name: "iced coffee",
    price: 6,
    seasonal: false,
  },
  {
    name: 'frappe',
    price: 8,
    seasonal: false,
  },
  {
    name: "cuban espresso",
    price: 1,
    seasonal: true,
  },
  {
    name: "Starbuck's best coffee",
    price: 100,
    seasonal: true,
  }
];

console.log(coffeeMenu.filter((coffee) => {
  if (coffee.price <= 5) {
    return true;
  }

  return false;
}))

console.log(coffeeMenu.filter((coffee) => {
  if (coffee.price % 2 === 0) {
    return true;
  }
  return false;
}))

console.log(coffeeMenu.filter((coffee) => {
  if (coffee.seasonal) {
    return true;
  }
  return false;
}))

console.log(coffeeMenu.map((coffee) => {
  if (coffee.seasonal) {
    return `${coffee.name} with imported beans`;
  }
  return coffee.name;
}))

function someFunction(accumulator, currentValue) {
 return accumulator + currentValue.price
}

const total = coffeeMenu.reduce(
  someFunction,
   0);

console.log(total)

const someFunction = (a, b) => a + b;

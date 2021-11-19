const calculateAgeInDogYears = (ageOfPerson) => {
  const ageInDogYears = ageOfPerson / 7;
  return ageInDogYears;
};
const dogAge = calculateAgeInDogYears(22);
console.log(dogAge);

//---------------------------

const favoriteAnimal = (animal) => {
  if (animal === "dog") {
    console.log("My favorite dog breed is schnauzer");
  } else if (animal === "cat") {
    console.log("My favorite breed of cat is persian");
  } else {
    return console.log("You are weird if it isn't a dog or cat");
  }
};

//----------------------------

const add = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};

const addition = add(45, 45);

console.log(addition);

//----------------------------

const go = (direction, speed) => {
  if (speed < 75) {
    return `The car is moving ${direction} at ${speed}mph`;
  } else if (speed > 75) {
    return `The car is moving ${direction} at ${speed}mph. SLOW DOWN!`;
  }
};

const currentSpeed = go("forward", 110);
console.log(currentSpeed);

//----------------------------

const evenOrOdd = (num) => {
  if (num % 2 == 0) {
    return console.log(`${num} is an even number!`);
  } else {
    return console.log(`${num} is an odd number!`);
  }
};

evenOrOdd(2);

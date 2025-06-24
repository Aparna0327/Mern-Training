const car = {
  brand: "Toyota",
  model: "Innova",
  year: 2022,
  start: function () {
    console.log("Engine started!");
  }
};

console.log(car.brand);    // Output: Toyota
car.start();               // Calls the function inside object

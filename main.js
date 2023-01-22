const increaseWillpower = document.querySelector("button.increase");
const decreaseWillpower = document.querySelector("button.decrease");
const meter = document.querySelector("meter.level");

console.log("am intrat in script macar");
increaseWillpower.addEventListener("click", increaseWill());

function increaseWill() {
  console.log("am intrat");
  meter.value++;
}

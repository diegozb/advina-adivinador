let input = document.querySelector(".input")
let num = Math.floor(Math.random()*101)

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    console.log(input.value);
    console.log(num)
    if (input.value == num) {
      alert("Acertaste el número correcto!!")
    }
    else {
      alert("Sigue intentando")
    }
  }
});

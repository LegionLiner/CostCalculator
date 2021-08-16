let range = document.querySelector("[type='range']")
let text = document.querySelector("[text]")
let result = document.querySelector("[result]")
let weight = document.querySelector(".weight")
let volume = document.querySelector(".volume")
let butOne = document.querySelector("#but1")
let butTwo = document.querySelector("#but2")
let butThree = document.querySelector("#but3")
let inputs = document.querySelectorAll("[type='text']")
text.innerHTML = "2500"
result.innerHTML = "125500"

range.addEventListener("input", function() {
  text.innerHTML = range.value
  result.innerHTML = ((range.value * 2) * (weight.value * 2) * (volume.value / 2))
  if (butOne.checked) {
   result.innerHTML = +result.innerHTML + 150;
  }
  if (butTwo.checked) {
   result.innerHTML = +result.innerHTML + 500;
  }
  if (butThree.checked) {
    result.innerHTML = +result.innerHTML + 300;
  }
})

butOne.addEventListener("input", function() {
  if (butOne.checked) {
    result.innerHTML = +result.innerHTML + 150;
  } else {
    result.innerHTML = +result.innerHTML - 150;
  }
})
butTwo.addEventListener("input", function() {
  if (butTwo.checked) {
    result.innerHTML = +result.innerHTML + 500;
  } else {
    result.innerHTML = +result.innerHTML - 500;
  }
})
butThree.addEventListener("input", function() {
  if (butThree.checked) {
    result.innerHTML = +result.innerHTML + 300;
  } else {
    result.innerHTML = +result.innerHTML - 300;
  }
})

inputs.forEach((item) => {
  item.addEventListener("input", function() {
    // let i = +item.value;
    result.innerHTML = (range.value * (weight.value * 2) * (volume.value / 2))
  })
});

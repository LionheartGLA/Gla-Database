(() => {

const symbols = {
  "+": "+",
  "-": "−",
  "*": "×",
  "/": "÷"
};

const output = document.getElementById("rOutput");


function solve(numbers, target, ops) {

  const used = Array(numbers.length).fill(false);

  function search(value, expr, index, usedOps) {

    if (index === numbers.length) {

      if (Math.abs(value - target) < 0.000001)
        return expr;

      return null;
    }


    for (let i = 0; i < numbers.length; i++) {

      if (used[i]) continue;

      used[i] = true;


      for (const op of ops) {

        if (usedOps.includes(op))
          continue;


        let result;


        if (op === "+")
          result = value + numbers[i];

        else if (op === "-")
          result = value - numbers[i];

        else if (op === "*")
          result = value * numbers[i];

        else if (op === "/" && numbers[i] !== 0)
          result = value / numbers[i];


        if (result !== undefined) {

          const found = search(
            result,
            expr + " " + symbols[op] + " " + numbers[i],
            index + 1,
            [...usedOps, op]
          );


          if (found)
            return found;
        }
      }


      used[i] = false;
    }


    return null;
  }



  for (let i = 0; i < numbers.length; i++) {

    used[i] = true;


    const result = search(
      numbers[i],
      String(numbers[i]),
      1,
      []
    );


    used[i] = false;


    if (result)
      return result;
  }


  return null;
}



document.querySelectorAll(".numBox")
.forEach(input => {

  input.onclick = () => {
    input.classList.toggle("selected");
  };

});



document.querySelectorAll(".ops button")
.forEach(button => {

  button.onclick = () => {
    button.classList.toggle("active");
  };

});

document.getElementById("clearNumbers").onclick = () => {
  document.querySelectorAll(".numBox")
    .forEach(button => {
      button.classList.remove("selected");
      document.getElementById("rTarget").value = "";
    });
};



document.getElementById("rSolve").onclick = () => {


  const numbers = [
    ...document.querySelectorAll(".numBox.selected")
  ]
  .map(input => Number(input.value))
  .filter(Number.isFinite);



  const target = Number(
    document.getElementById("rTarget").value
  );



  const ops = [
    ...document.querySelectorAll(".ops button.active")
  ]
  .map(button => button.dataset.op);



  if (numbers.length === 0) {

    output.innerHTML = "Selecione pelo menos um número.";
    return;
  }


  if (!ops.length) {

    output.innerHTML = "Selecione pelo menos uma operação.";
    return;
  }


  const result = solve(numbers, target, ops);

  output.innerHTML = result
    ? `<div class="expr">${result} = ${target}</div>`
    : "Nenhuma solução encontrada.";

};

})();
var input = document.getElementById("input");
var button = document.querySelectorAll(".button");
var lenghtListButton = button.length;

for (var i = 0; i < lenghtListButton; i++) {
    button[i].addEventListener("click", function(e) {
        switch(e.target.innerText) {
            case "C":
                input.innerHTML = "";
                break;
            case "=":
                input.innerHTML = eval(input.innerHTML);
                break;
            default:
                input.innerHTML += e.target.innerHTML;
        }
    });
}

// ----------------------------

// save the button.length to a variable (v)
// add try-catch
// meaningful variable names (v)
// fix -- ++ in calculation (v)

// ----------------------------





// var result = document.getElementById("result");
// var clear = document.getElementById("clear");
// var show = false;
// var number = document.querySelectorAll(".numbers div");
// var operator = document.querySelectorAll(".operators div")
    //     var current = input.innerHTML;
    //     var last = current[current.length - 1];

    //     if(show === false) {
    //         input.innerHTML += e.target.innerHTML;
    //     }
    //     else if(show === true && last === "+" || last === "-" || last === "x" || last === ":")
    //     {
    //         show = false;
    //         input.innerHTML += e.target.innerHTML;
    //     }
    //     else {
    //         show = false;
    //         input.innerHTML = "";
    //         input.innerHTML += e.target.innerHTML;
    //     }
    // });
// }

//handle click operator button
// for(var i = 0; i < operator.length; i++) {
//     operator[i].addEventListener("click", function(e) {
//         var current = input.innerHTML;
//         var last = current[current.length - 1];

//         if(last === "+" || last === "-" || last === "x" || last === ":") {
//             var newString = current.substring(0, current.length - 1) + e.target.innerHTML;
//             input.innerHTML = newString;
//         }
//         else if(current.length == 0) {
//             console.log("Must a number");
//         }
//         else {
//             input.innerHTML += e.target.innerHTML;
//         }
//     });
// }



// Clear button 
// clear.addEventListener("click", function() {
//     input.innerHTML = "";
//     console.log("clear");
// });

// handle click euqal button
// result.addEventListener("click", function() {
//     var inputS = input.innerHTML;
//     var numbers = inputS.split(/\+|\-|\x|\:/g);
//     var operators = inputS.replace(/[0-9]|\./g, "").split("");
//     console.log(inputS)
//     console.log(eval(inputS))



    // var add = operators.indexOf("+");
    // while (add != -1) {
    //     numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    //     operators.splice(add, 1);
    //     add = operators.indexOf("+");
    // }

    // var subtract = operators.indexOf("-");
    // while (subtract != -1) {
    //     numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    //     operators.splice(subtract, 1);
    //     subtract = operators.indexOf("-");
    // }

    // var multiply = operators.indexOf("x");
    // while (multiply != -1) {
    //     numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    //     operators.splice(multiply, 1);
    //     multiply = operators.indexOf("x");
    // }

    // var divide = operators.indexOf(":");
    // while (divide != -1) {
    //     numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    //     operators.splice(divide, 1);
    //     divide = operators.indexOf(":");
    // }


    // input.innerHTML = numbers[0];
    // show = true;

// })
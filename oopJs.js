class Calculator{
    constructor(){
         this.input = document.getElementById("input");
        this.button = document.querySelectorAll(".buttonX");
        this.result = 0;
        this.string = '';
    }

    init(){
        for(let i = 0; i < this.button.length; i++) {
            this.button[i].addEventListener("click", function(e) {
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
    }
}
    const calculator = new Calculator();
    calculator.init();



    // add(num){
    //     this.value += num;
    // }
    // subtract(num){
    //     this.value -= num;
    // }
    // multiply(num){
    //     this.value *= num;
    // }
    // divide(num){
    //     this.value /= num;
    // }
    // clear(){
    //     this.value = 0;
    // }
    // showValue(){
    //     console.log(this.value);
    // }

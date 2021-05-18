function calculator(form){
    let resultP = form.querySelector(".result");
    let a = form.a.value;
    let b = form.b.value;
    let c = form.c;
    let h = form.h;
    if(h !== undefined){
        h = form.h.value;
    }
    if(c !== undefined){
        c = form.c.value;
    }
    let operator = form.dataset.operator;
    let result;
    switch(operator){
        case '+':
            result = parseFloat(a) + parseFloat(b);
            break;
        case '-':
            result = parseFloat(a) - parseFloat(b);
            break;
        case '*':
            result = parseFloat(a) * parseFloat(b);
            break;
        case '/':
            result = parseFloat(a) / parseFloat(b);
            break;
        case 'trojkat':
            result = "Obwód: " + (parseFloat(a) + parseFloat(b) + parseFloat(c)) + "<br>Pole: " + (parseFloat(a) * parseFloat(h) / 2);
            break;

    }
    resultP.innerHTML = result;

}
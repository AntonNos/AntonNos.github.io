function convert() {
    "use strict";
    const UAH = 1, EURO = 33, USD = 28.1; 
    var input = document.getElementById('input_curr'), output, pick_input = document.getElementById("pick_input"), pick_output = document.getElementById("pick_output"),
    currency_input = pick_input.options[pick_input.selectedIndex].value, 
    currency_output = pick_output.options[pick_output.selectedIndex].value;
    
    if (currency_input === currency_output) {
        output = input.value;
    } else if (currency_input === 'USD' && currency_output === 'UAH') {
        output = input.value * USD;
    } else if (currency_input === 'EURO' && currency_output === 'UAH') {
        output = input.value * EURO;
    } else if (currency_input === 'USD' && currency_output === 'EURO') {
        output = input.value * USD / EURO;
    } else if (currency_input === 'EURO' && currency_output === 'USD') {
        output = input.value * EURO / USD;
    } else if (currency_input === 'UAH' && currency_output === 'USD') {
        output = input.value * UAH / USD;
    } else if (currency_input === 'UAH' && currency_output === 'EURO') {
        output = input.value * UAH / EURO;
    }
    document.getElementById('output_curr').value = output;
}

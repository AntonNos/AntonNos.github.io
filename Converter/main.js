function convert() {
    "use strict";
    var input = document.getElementById('input_curr'), output, pick_input = document.getElementById("pick_input"), currency_input = pick_input.options[pick_input.selectedIndex].value, currency_output = document.getElementById("pick_output");
    currency_output = pick_output.options[pick_output.selectedIndex].value;
    
    if (currency_input === currency_output) {
        output = input.value;
    } else if (currency_input === 'USD' && currency_output === 'UAH') {
        output = input.value * 27.2;
    } else if (currency_input === 'EURO' && currency_output === 'UAH') {
        output = input.value * 32.14;
    } else if (currency_input === 'USD' && currency_output === 'EURO') {
        output = input.value * 0.84;
    } else if (currency_input === 'EURO' && currency_output === 'USD') {
        output = input.value * 1.18;
    } else if (currency_input === 'UAH' && currency_output === 'USD') {
        output = input.value * 0.036;
    } else if (currency_input === 'UAH' && currency_output === 'EURO') {
        output = input.value * 0.031;
    }
    document.getElementById('output_curr').value = output;
}

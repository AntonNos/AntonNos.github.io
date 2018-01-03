function convert() {
    "use strict";
    const USDtoUAH = 28.1, EUROtoUAH = 33, USDtoEURO = 0.85, EUROtoUSD = 1.17, UAHtoUSD = 0.035, UAHtoEURO = 0.03;
    
    var input = document.getElementById('input_curr'), output, pick_input = document.getElementById("pick_input"), pick_output = document.getElementById("pick_output"),
    currency_input = pick_input.options[pick_input.selectedIndex].value, 
    currency_output = pick_output.options[pick_output.selectedIndex].value;
    
    if (currency_input === currency_output) {
        output = input.value;
    } else if (currency_input === 'USD' && currency_output === 'UAH') {
        output = input.value * USDtoUAH;
    } else if (currency_input === 'EURO' && currency_output === 'UAH') {
        output = input.value * EUROtoUAH;
    } else if (currency_input === 'USD' && currency_output === 'EURO') {
        output = input.value * USDtoEURO;
    } else if (currency_input === 'EURO' && currency_output === 'USD') {
        output = input.value * EUROtoUSD;
    } else if (currency_input === 'UAH' && currency_output === 'USD') {
        output = input.value * UAHtoUSD;
    } else if (currency_input === 'UAH' && currency_output === 'EURO') {
        output = input.value * UAHtoEURO;
    }
    document.getElementById('output_curr').value = output;
}

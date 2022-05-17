let inputYear = document.getElementById('input_year');
let inputIncome = document.getElementById('input_income');
let inputPersonOne = document.getElementById('input_person_one');
let inputPersonTwo = document.getElementById('input_person_two');
let inputChurch = document.getElementById('input_church');
let outputChurch = document.getElementById('output_church');
let result;
let y;
let outputResult = document.getElementById('output_result');
let outputError = document.getElementById('output_error');
// let input0 = document.getElementById('input_0');
// let input8 = document.getElementById('input_8');
// let input9 = document.getElementById('input_9');



function calcZve() {
    // console.log('läuft');
    // console.log(inputYear.value, typeof (inputYear));
    // console.log(inputIncome.value, typeof (inputIncome));
    // console.log(inputPersonOne.value, typeof (inputPersonOne));
    // console.log(inputPersonTwo.value, typeof (inputPersonTwo));
    console.log(inputChurch.value, typeof (inputChurch));
    if ((inputPersonOne.checked) && (inputIncome.value > 0)) {
        zvE = inputIncome.value;
    }

    else if ((inputPersonTwo.checked) && (inputIncome.value > 0)) {
        zvE = inputIncome.value / 2;
    }

    if (inputYear.value = '2019') {
        if (zvE <= 9168) {
            outputResult.innerHTML = 0;
        }

        else if ((zvE >= 9169) && (zvE <= 14254)) {
            y = (zvE - 9168) / 10000;
            result = ((980.14 * y + 1400) * y).toFixed(2);
            outputResult.innerHTML = result;
        }
        else if ((zvE >= 14255) && (zvE <= 55960)) {
            y = (zvE - 14254) / 10000;
            result = (((216.16 * y + 2397) * y) + 965.58).toFixed(2);
            outputResult.innerHTML = result;
        }
        else if ((zvE >= 55961) && (zvE <= 265326)) {
            result = ((0.42 * zvE - 8780.90)).toFixed(2);
            outputResult.innerHTML = result
        }
        else if ((zvE >= 265327)) {
            result = ((0.45 * zvE - 16740.68)).toFixed(2);
            outputResult.innerHTML = result;
        }
    }
    else if (inputYear.value = '2020') {
        if (zvE <= 9408) {
            result = 0;
            outputResult.innerHTML = result;
        }

        else if ((zvE >= 9409) && (zvE <= 14532)) {
            y = (zvE - 9408) / 10000;
            result = ((972.87 * y + 1400) * y).toFixed(2);
            outputResult.innerHTML = result;
        }
        else if ((zvE >= 14533) && (zvE <= 57051)) {
            y = (zvE - 14532) / 10000;
            result = (((212.02 * y + 2397) * y) + 972.79).toFixed(2);
            outputResult.innerHTML = result;
        }

        else if ((zvE >= 57052) && (zvE <= 270500)) {
            result = ((0.42 * zvE - 8963.74)).toFixed(2);
            outputResult.innerHTML = result;
        }

        else if ((zvE >= 270501)) {
            result = ((0.45 * zvE - 17078.74)).toFixed(2);
            outputResult.innerHTML = result;
        }

    }
    else if (inputYear.value = '2021') {
        if ((zvE <= 9744)) {
            result = 0;
            outputResult.innerHTML = result;
        }

        else if ((zvE >= 9745) && (zvE <= 14753)) {
            y = (zvE - 9744) / 10000;
            result = ((995.21 * y + 1400) * y).toFixed(2);
            outputResult.innerHTML = result;

        }

        else if ((zvE >= 14754) && (zvE <= 57918)) {
            y = (zvE - 14753) / 10000;
            result = (((208.85 * y + 2397) * y) + 950.96).toFixed(2);
            outputResult.innerHTML = result;

        }

        else if ((zvE >= 57919) && (zvE <= 274612)) {
            result = ((0.42 * zvE - 9136.63)).toFixed(2);
            outputResult.innerHTML = result;

        }

        else if (zvE >= 274613) {
            result = ((0.45 * zvE - 17374.99)).toFixed(2);
            outputResult.innerHTML = result;
        }
    }

    if (inputChurch.value = '0') { outputChurch.innerHTML = '0'; }
    else if (inputChurch.value = '8') { outputChurch.innerHTML = (result * 8) / 100; }
    else if (inputChurch.value = '9') { outputChurch.innerHTML = (result * 9) / 100; }


    // if (inputChurch.value = '0') { outputChurch.innerHTML = '0'; 

    // else if (inputChurch.value = '8') {
    //     console.log((result * 8) / 100);
    //     outputChurch.innerHTML = ((result * 8) / 100);

    // }
    // else if (inputChurch.value = '9') {
    //     outputChurch.innerHTML = ((result * 9) / 100);
    // }


    // ---------------------function Kirchensteuer-----------------

    // else {
    //     outputError.innerHTML = "Bitte geben Sie einen Wert ein";
    // }
}
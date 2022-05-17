let inputYear = document.getElementById('input_year');
let inputIncome = document.getElementById('input_income');
let inputPersonOne = document.getElementById('input_person_one');
let inputPersonTwo = document.getElementById('input_person_two');
let inputChurch = document.getElementById('input_church')
let result;
let y;
let outputResult = document.getElementById('output_result');
let outputError = document.getElementById('output_error');


function calcZve() {
    // console.log('läuft');
    // console.log(inputYear.value, typeof (inputYear));
    // console.log(inputIncome.value, typeof (inputIncome));
    // console.log(inputPersonOne.value, typeof (inputPersonOne));
    // console.log(inputPersonTwo.value, typeof (inputPersonTwo));
    // console.log(inputChurch.value, typeof (inputChurch));
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
            outputResult.innerHTML = ((0.42 * zvE - 8780.90)).toFixed(2);
        }
        else if ((zvE >= 265327)) {
            outputResult.innerHTML = ((0.45 * zvE - 16740.68)).toFixed(2);
        }
    }
    else if (inputYear.value = '2020') {
        if (zvE <= 9408) {
            outputResult.innerHTML = 0;
        }

        else if ((zvE >= 9409) && (zvE <= 14532)) {
            y = (zvE - 9408) / 10000;
            outputResult.innerHTML = ((972.87 * y + 1400) * y).toFixed(2);
        }
        else if ((zvE >= 14533) && (zvE <= 57051)) {
            y = (zvE - 14532) / 10000;
            outputResult.innerHTML = (((212.02 * y + 2397) * y) + 972.79).toFixed(2);
        }

        else if ((zvE >= 57052) && (zvE <= 270500)) {
            outputResult.innerHTML = ((0.42 * zvE - 8963.74)).toFixed(2);
        }

        else if ((zvE >= 270501)) {
            outputResult.innerHTML = ((0.45 * zvE - 17078.74)).toFixed(2);
        }

    }
    else if (inputYear.value = '2021') {
        if ((zvE <= 9744)) {
            outputResult.innerHTML = 0;
        }

        else if ((zvE >= 9745) && (zvE <= 14753)) {
            y = (zvE - 9744) / 10000;
            outputResult.innerHTML = ((995.21 * y + 1400) * y).toFixed(2);
        }

        else if ((zvE >= 14754) && (zvE <= 57918)) {
            y = (zvE - 14753) / 10000;
            outputResult.innerHTML = (((208.85 * y + 2397) * y) + 950.96).toFixed(2);
        }

        else if ((zvE >= 57919) && (zvE <= 274612)) {
            outputResult.innerHTML = ((0.42 * zvE - 9136.63)).toFixed(2);
        }

        else if ((zvE >= 274613)) {
            outputResult.innerHTML = ((0.45 * zvE - 17374.99)).toFixed(2);
        }
    }
    else {
        outputError.innerHTML = "Bitte geben Sie einen Wert ein";
    }



}


// ---------------------function Kirchensteuer-----------------


let kirchensteuer = () => {

}
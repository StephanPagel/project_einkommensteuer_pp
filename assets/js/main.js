let inputYear = document.getElementById('input_year');
let inputIncome = document.getElementById('input_income');
let inputPersonOne = document.getElementById('input_person_one');
let inputPersonTwo = document.getElementById('input_person_two');
let inputChurch = document.getElementById('input_church')
let outputResult = document.getElementById('output_result');
let outputError = document.getElementById('output_error');

let zvE = () => {
    // console.log('läuft');
    // console.log(inputYear.value, typeof (inputYear));
    // console.log(inputIncome.value, typeof (inputIncome));
    // console.log(inputPersonOne.value, typeof (inputPersonOne));
    // console.log(inputPersonTwo.value, typeof (inputPersonTwo));
    // console.log(inputChurch.value, typeof (inputChurch));
    if ((inputPersonOne.checked) && (inputIncome.value > 0)) {

        zvE = inputIncome.value;
        console.log(zvE);
        ESt();
    }

    else if ((inputPersonTwo.checked) && (inputIncome.value > 0)) {
        zvE = inputIncome.value / 2;
        console.log(zvE);
        ESt();
    }

    else {
        outputError.innerHTML = "Bitte geben Sie einen Wert ein";
    }
}


function ESt() {
    let y;

    if ((inputYear.value = '2019') && (zvE <= 9168)) {
        outputResult.innerHTML = 0;
    }

    else if ((inputYear.value = '2019') && (zvE >= 9169) && (zvE <= 14254)) {
        y = (zvE - 9168) / 10000;
        outputResult.innerHTML = ((980.14 * y + 1400) * y).toFixed(2);
    }
}
ESt();

// if ((netToBrut.checked) && (mwst19.checked))
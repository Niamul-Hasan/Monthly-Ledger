
document.getElementById('calculate').addEventListener('click', function () {
    // getting income 
    const incomeInput = document.getElementById('income');
    const incomeAmount = parseFloat(incomeInput.value);
    //getting rent cost
    const rentinput = document.getElementById('rent');
    const rentValue = rentinput.value;
    const rentAmount = parseFloat(rentValue);
    //getting food cost
    const foodInput = document.getElementById('food');
    const foodValue = foodInput.value;
    const foodAmount = parseFloat(foodValue);
    //getting cloth cost
    const clothInput = document.getElementById('cloth');
    const clothValue = clothInput.value;
    const clothAmount = parseFloat(clothValue);
    //checking error and return error message
    if (rentAmount < 0 || foodAmount < 0 || clothAmount < 0 || incomeAmount < 0) {
        getErrorMessage();
    }
    if (isNaN(rentAmount) || isNaN(foodAmount) || isNaN(clothAmount) || isNaN(incomeAmount)) {
        getErrorMessage();
    }

    if (incomeAmount >= 0 && rentAmount >= 0 && foodAmount >= 0 && clothAmount >= 0) {
        // Calculate total expense
        const totalExpense = rentAmount + foodAmount + clothAmount;
        if (totalExpense > incomeAmount) {
            getBalanceError();
        }

        if (totalExpense <= incomeAmount) {
            //update Total Expense in html
            const expenseField = document.getElementById('expense');
            expenseField.innerText = totalExpense;
            //update Balance in html
            const balanceAfterExpense = incomeAmount - totalExpense;
            const balanceField = document.getElementById('balance');
            balanceField.innerText = balanceAfterExpense;
            noError();
        }

    }

})

//bonous part of saving amount
document.getElementById('save').addEventListener('click', function () {
    getSavingAndUpdateBalance('income', 'balance')
})

function getSavingAndUpdateBalance(income, balance) {
    // getting main income amount 
    const incomeInput = document.getElementById(income);
    const incomeAmount = parseFloat(incomeInput.value);
    //getting remaning balance after expence
    const balanceField = document.getElementById(balance).innerText;
    const balanceAmount = parseFloat(balanceField);
    //getting parcentage value from input field
    const savingInput = document.getElementById('save-input');
    const savingParcentageValue = savingInput.value;

    //updating saving Amount field in html
    if (parseFloat(savingParcentageValue) > 0 && typeof parseFloat(savingParcentageValue) == 'number' && parseFloat(savingParcentageValue) <= 100) {
        const savingAmount = incomeAmount * parseFloat(savingParcentageValue) / 100;
        const savingField = document.getElementById("saving-amount");

        //updating remaining balance field after expense and saving
        const remainingBalanceField = document.getElementById('remaining-balance');
        const balanceAfterSaving = balanceAmount - savingAmount;
        // checking is the saving valid or not 
        if (balanceAfterSaving < 0) {
            getSavingError();
        }
        else {
            savingField.innerText = savingAmount;
            remainingBalanceField.innerText = balanceAfterSaving;
            noError();
        }
    }
    else {
        getErrorMessage();
    }
}

//function for error message
function getErrorMessage() {
    document.getElementById('error').style.display = 'block';
}

function getBalanceError() {
    document.getElementById('balance-error').style.display = 'block'
}
function getSavingError() {
    document.getElementById('saving-error').style.display = 'block';
}
function noError() {
    document.getElementById('error').style.display = 'none';
    document.getElementById('balance-error').style.display = 'none'
    document.getElementById('saving-error').style.display = 'none';
}
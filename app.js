function activateCalcMode(){
    var isAdvanced = document.querySelector('.calcMode').checked;
    
    if (isAdvanced) {
        document.querySelector('.simple-mode').style.display = 'none';
        document.querySelector('.advanced-mode').style.display = 'block'; 

    }   else {
        document.querySelector('.simple-mode').style.display = 'block';
        document.querySelector('.advanced-mode').style.display = 'none'; 
    }
}

function splitBill() {
    const userForm = document.querySelector('.userForm');
    const simpleResult = document.querySelector('.simpleResult');
    const simpleResultAmt = document.querySelector('.simpleResultAmt');
    const err = document.querySelector('.simple-err');
    const curr = document.querySelector('#currency').value;
    
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        err.classList.add('noerr'); 

        const numOfPeople = document.querySelector('#people').value.trim();
        const amount = document.querySelector('.userForm #amount').value.trim();

        if (numOfPeople === '' || amount === '') {
            err.innerText = 'Please fill in all fields with applicable values';
            err.classList.remove('noerr');
        }   else if (isNaN(numOfPeople) || isNaN(amount)) {
            err.innerText = 'Check your values';
            err.classList.remove('noerr');
        }   else if (numOfPeople <= 0 || amount <= 0) {
            err.innerText = 'Please enter a valid number';
            err.classList.remove('noerr');
        }   else {
            let eachSplit = amount / numOfPeople;
            eachSplit = eachSplit.toFixed(2);

            simpleResultAmt.innerText = curr + " " + eachSplit;
            simpleResult.classList.remove('notCalculated'); 
        }
        
    });
}

function splitBillAdvanced() {
    
    const advUserForm = document.querySelector('.advUserForm');
    
    
    advUserForm.addEventListener('submit', (e) => {
        e.preventDefault();
        err.classList.add('noerr');
        
        console.log('advanced');
    });
}  

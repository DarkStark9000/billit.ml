function splitBill () {
    const userForm = document.querySelector('.userForm');
    const result = document.querySelector('.result');
    const resultAmt = document.querySelector('.resultAmt');
    const err = document.querySelector('.err');
    const curr = document.querySelector('#currency').value;
    
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        err.classList.add('noerr');
        
        const numOfPeople = document.querySelector('#people').value.trim();
        const amount = document.querySelector('#amount').value.trim();
        
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
            
            resultAmt.innerText = curr + " " + eachSplit;
            result.classList.remove('notCalculated'); 
        }
    });
}
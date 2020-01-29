    //elements//
    
    const resultEl = document.getElementById('secure-pass');
    const lengthEl = document.getElementById('pass-length');
    const lowerEl = document.getElementById('low-case');
    const upperEl = document.getElementById('up-case');
    const numbersEl = document.getElementById('numb');
    const symbolEl = document.getElementById('symb');
    const generateEl = document.getElementById('generate');
    const clipboardEl= document.getElementById('clipboard');

    const randomFunc = {
        lower: getRandomLower,
        upper: getRandomUpper,
        numner: getRandomNumber,
        symbol: getRandomSymbol
    };

    //event listener functions//

    generateEl.addEventListener('click', () => {
        const length = +lengthEl.value;
        const isLower = lowerEl.checked;
        const isUpper = upperEl.checked;
        const isNumber = numbersEl.checked;
        const isSymbol = symbolEl.checked;

        resultEl.innerText = generatePassword(isLower, isNumber, isSymbol, isUpper, length);
    });

    //generate pass function//

    function generatePassword(lower, upper, number, symbol, length) {
        //1. initial password variable

        //2.filter unchecked boxes

        //3.loop over length

        //4. call generator function for each type

        //5. add final password to the password variable and return

        let generatedPassword = '';

        const checkCount = lower + upper + number + symbol;

        //console.log('checkCount', checkCount);

        const checkArr = [ { lower }, { upper }, { number }, { symbol }].filter
        (
            item => Object.values(item)[0]
        );

        console.log('checkArr', checkArr);

        if(checkCount === 0) {
            return '';
        }

        for(let i = 0; i < length; i+= checkCount) {
            checkArr.forEach(type => {
                const funcName = Object.keys(type)[0];
                console.log('funcName', funcName);

                generatedPassword += randomFunc[funcName]();
            });
        }

        //console.log(generatedPassword);
        
        
    }

    //generator functions//

    function getRandomLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    function getRandomUpper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    function getRandomNumber() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }

    function getRandomSymbol() {
        const symbols = '!,@,#,$,%,^,&,*,_,-,+,=,~,`';
        return symbols[Math.floor(Math.random() * symbols.length)];
    }
         
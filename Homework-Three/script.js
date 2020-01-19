
    //****Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code.
    //The user will be prompted to choose from the following password criteria:
    //Length (must be between 8 and 128 characters)
    //Character type: Special characters (see examples), Numeric characters, Lowercase characters, Uppercase characters
    //The application should validate user input and ensure that at least one character type is selected.
    //Once all prompts are answered, the user will be presented with a password matching the answered prompts. Displaying the generated password in an alert is acceptable, but attempt to write the password to the page instead.
    //As a bonus, the user should also have the option to click a button to copy the password to their clipboard.
    //Your application should have a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.
    //Your application should be deployed to GitHub Pages.
    //Your application's GitHub repository should contain a README.md file explaining the purpose and functionality of the application. The README.md file should include a screenshot of the completed application as well as a link to the deployed GitHub Pages URL.

    //greeting//
    

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

    //input for different letters and symbols http://www.net-comber.com/charset.html//
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
         
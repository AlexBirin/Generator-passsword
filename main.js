const passwordField = document.querySelector ('.js-password-field'),
    lengthItem = document.querySelector ('.js-length-item'),
    lengthRange = document.querySelector ('.js-length-range'),
    number = document.querySelector ('.js-number'),
    symbols = document.querySelector ('.js-symbols'),
    btnGenerate = document.querySelector ('.js-btn-generate'),
    charsNumber = '0123456789',
    charsSymbols = '@#$%^&*([]';

    lengthRange.addEventListener('input', function () {
        lengthItem.value = lengthRange.value;
    })
    lengthItem.addEventListener('input', function () {
        lengthRange.value = lengthItem.value;
    })

    btnGenerate.addEventListener ('click', () => {
        let password = '';

        let charsLetters = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';

        if(number.chacked) {
            charsLetters += charsNumber;
            console.log(charsLetters)
        }
        if(symbols.chacked) {
            charsLetters += charsSymbols;
            console.log(charsLetters)
        }
        for (let i = 0; i < lengthItem.value; i++){
            password += charsLetters [Math.floor(Math.random()*charsLetters.length)];
            console.log(Math.floor(Math.random()*charsLetters.length));
        }
        passwordField.innerHTML = password;
    })
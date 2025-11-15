let generateBtn = document.querySelector("#generate-btn");

function getrandomChar() {
    const chars = [
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        '0','1','2','3','4','5','6','7','8','9',
        '!','@','#','$','%','^','&','*','(',')','_','+','-','=','[',']','{','}','|',';',':','\'',',','.','<','>','/','?','`','~'
    ];

    let randomIndex = Math.floor(Math.random() * chars.length);
    return chars[randomIndex];
}

function generatePassword(length=15) {
    let password = "";

    for (let i=0; i <= length; i++) {
        password += getrandomChar();
    }
    return password;
}

generateBtn.addEventListener('click', () => {
    const password1 = generatePassword();
    const password2 = generatePassword();

    document.querySelector("#pwd-1").textContent = password1;
    document.querySelector("#pwd-2").textContent = password2;
});

document.querySelectorAll(".pwd").forEach((element) => {
    element.addEventListener('click', () => {
        let text = element.textContent;
        navigator.clipboard.writeText(text);

        console.log(`"${text}" copid to clipboard!`)
    });
});

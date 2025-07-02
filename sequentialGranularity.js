function getLayeredDepth(code) {
    let depth = 0;

    //  Check if the number still has more than one digit
    for (; code >= 10; depth++) {
        let sum = 0;
        const strCode = code.toString();

        for (let i = 0; i < strCode.length; i++) {
            sum += parseInt(strCode[i]);
        }

        code = sum;
    }

    return depth;
}

// Set security level by checking the depth count
function determineSecurityLevel(code) {
    let depth = getLayeredDepth(code);

    if (depth >= 10) {
        console.log('Security Level: Omega');
    } else {
        console.log('Security Level: Sigma');
    }
}

const temporalCode = 20240628;
determineSecurityLevel(temporalCode);

function romanToArabic(roman: string) {
    const digits = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    let arabic: number = 0;
    for (let i = 0; i < roman.length; i++) {
        // if next digit is bigger, subtract next digit by current digit
        // then skip the next digit        
        if (digits[roman.charAt(i)] < digits[roman.charAt(i + 1)]) {
            arabic += digits[roman.charAt(i + 1)] - digits[roman.charAt(i)];
            i++;
        } else {
            arabic += digits[roman.charAt(i)];
        }
    }

    return arabic;

}

console.log(romanToArabic('MCM'));
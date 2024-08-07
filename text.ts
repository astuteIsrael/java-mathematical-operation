function missingAlphabet(letters: string): string {

    
    const sortedLetters = letters.split('').sort();

    
    for (let i = 0; i < sortedLetters.length - 1; i++) {
        const currentCharCode = sortedLetters[i].charCodeAt(0);
        const nextCharCode = sortedLetters[i + 1].charCodeAt(0);
        
        
        
        if (nextCharCode - currentCharCode > 1) {
            return String.fromCharCode(currentCharCode + 1);
        }
    }

    return '';
}


console.log(missingAlphabet("dacfbgh")); // Output: "e"

class VigenereCipheringMachine {
    constructor(bool = true) {
        this.bool = bool;
    }

    encrypt(message, key) {
        let spaces = 0;
        if (message === undefined || key === undefined) throw Error;
        message = message.toUpperCase().split('');
        key = key.toUpperCase().split('');
        const encrypted = message.map((value, index) => {
            if (value === " " || /[!@#$(),.\/|*\-&^%:'\d]/.test(value)) {
                spaces++;
                return value;
            }
            let kIndex;
            if(index < key.length-1){
                kIndex = index-spaces;
            }else
            {  kIndex = (index-spaces) % key.length ;
            } 
            let crChar = value.charCodeAt(0) - 65 + key[kIndex].charCodeAt(0)-65;
            if (crChar > 25) crChar -= 26;
            return String.fromCharCode(crChar + 65);
            }
        );
        if (!this.bool) encrypted.reverse();
        return encrypted.join('');
    }

    decrypt(encryptedMessage, key) 
    {
        let spaces = 0;
        if (encryptedMessage === undefined || key === undefined) throw Error;
        let message = encryptedMessage.toUpperCase().split('');
        key = key.toUpperCase().split('');
        const decrypted = message.map((value, index) => {
                if (value === " " || /[!@#$(),.\/|*\-&^%:'\d]/.test(value)) 
                {
                    spaces++;
                    return value;
                }
                let kIndex;
                if(index < key.length-1){
                    kIndex = index-spaces;
                }else
                {  
                    kIndex = (index-spaces) % key.length ;
                } 
                let crChar = (value.charCodeAt(0) - 65) - (key[kIndex].charCodeAt(0) - 65);
                if (crChar < 0) crChar += 26;
                return String.fromCharCode(crChar + 65);
            }
        );
        if (!this.bool) decrypted.reverse();
        return decrypted.join('');
    }

}

module.exports = VigenereCipheringMachine;

const {NotImplementedError} = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {

  constructor(isDirect = true) {
    this.isDirectMachine = isDirect;
    this.vocabulary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  getResult(message, key, operation) {
    const messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    const length = this.vocabulary.length;
    let keyIndex = 0;
    let result = '';

    for (let i = 0; i < messageUpper.length; i++) {
      const messageCharCode = this.vocabulary.indexOf(messageUpper[i]);
      if (messageCharCode !== -1) {
        const keyCharCode = this.vocabulary.indexOf(keyUpper[keyIndex]);
        let charCode;
        switch (operation) {
          case 'encrypt': charCode = messageCharCode + keyCharCode; break;
          case 'decrypt': charCode = messageCharCode - keyCharCode; break;
          default: throw new Error('Unknown operation call');
        }
        let index = (charCode % length) + length;
        result += this.vocabulary[index % length];
        keyIndex = (keyIndex + 1) % keyUpper.length;
      } else {
        result += messageUpper[i];
      }
    }

    if (this.isDirectMachine) return result;
    return result.split('')
      .reverse()
      .join('');
  }

  encrypt(message, key) {
    if (arguments.length < 2 || message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    return this.getResult(message, key, 'encrypt');
  }

  decrypt(message, key) {
    if (arguments.length < 2 || message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    return this.getResult(message, key, 'decrypt');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};

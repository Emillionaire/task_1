const nameOne = 'Vasya!';
const nameTwo = 'Pupkin';
const nameThree = 'Kesha9999';

class Validator {
    constructor(name, phoneNumber = null) {
        this.name = name
        this.phoneNumber = phoneNumber
    }

    validateUsername() {
        const check1 = /^[a-z_-\d]+$/i.test(this.name)
        const check2 = !/\d{4,}/.test(this.name)
        const check3 = !/^\d+/.test(this.name)
        const check4 = !/.+\d$/.test(this.name)
        return [check1, check2, check3, check4].every((check) => check)
    }

    convertPhoneNumber() {
        if (this.phoneNumber.startsWith('8')) {
            this.phoneNumber = `+7${this.phoneNumber.slice(1)}`
        }
        return this.phoneNumber.replaceAll(/[- ()]/g, '')
    }
}


const first = new Validator(nameOne);
const second = new Validator(nameTwo);
const third = new Validator(nameThree);
console.log(first.validateUsername());
console.log(second.validateUsername());
console.log(third.validateUsername());

export default class EngineClass {
    constructor() {
        this.mode_logique = {
            'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13,
            'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
        }
        this.mode_3 = {
            'a': 3, 'b': 6, 'c': 9, 'd': 12, 'e': 15, 'f': 18, 'g': 21, 'h': 24, 'i': 27, 'j': 30, 'k': 33, 'l': 36,
            'm': 39, 'n': 42, 'o': 45, 'p': 48, 'q': 51, 'r': 54, 's': 57, 't': 60, 'u': 63, 'v': 66, 'w': 69, 'x': 72, 'y': 75, 'z': 78
        }
        this.mode_6 = {
            'a': 6, 'b': 12, 'c': 18, 'd': 24, 'e': 30, 'f': 36, 'g': 42, 'h': 48, 'i': 54, 'j': 60, 'k': 66, 'l': 72,
            'm': 78, 'n': 84, 'o': 90, 'p': 96, 'q': 102, 'r': 108, 's': 114, 't': 120, 'u': 126, 'v': 132, 'w': 138, 'x': 144, 'y': 150, 'z': 156
        }

        this.mode_9 = {
            'a': 9, 'b': 18, 'c': 27, 'd': 36, 'e': 45, 'f': 54, 'g': 63, 'h': 72, 'i': 81, 'j': 90, 'k': 99, 'l': 108,
            'm': 117, 'n': 126, 'o': 135, 'p': 144, 'q': 153, 'r': 162, 's': 171, 't': 180, 'u': 189, 'v': 198, 'w': 207, 'x': 216, 'y': 225, 'z': 234
        }

        this.mode_logique_inv = {
            'z': 1, 'y': 2, 'x': 3, 'w': 4, 'v': 5, 'u': 6, 't': 7, 's': 8, 'r': 9, 'q': 10, 'p': 11, 'o': 12, 'n': 13,
            'm': 14, 'l': 15, 'k': 16, 'j': 17, 'i': 18, 'h': 19, 'g': 20, 'f': 21, 'e': 22, 'd': 23, 'c': 24, 'b': 25, 'a': 26
        }

        this.mode_3_inv = {
            'z': 3, 'y': 6, 'x': 9, 'w': 12, 'v': 15, 'u': 18, 't': 21, 's': 24, 'r': 27, 'q': 30, 'p': 33, 'o': 36,
            'n': 39, 'm': 42, 'l': 45, 'k': 48, 'j': 51, 'i': 54, 'h': 57, 'g': 60, 'f': 63, 'e': 66, 'd': 69, 'c': 72, 'b': 75, 'a': 78
        }

        this.mode_6_inv = {
            'z': 6, 'y': 12, 'x': 18, 'w': 24, 'v': 30, 'u': 36, 't': 42, 's': 48, 'r': 54, 'q': 60, 'p': 66, 'o': 72,
            'n': 78, 'm': 84, 'l': 90, 'k': 96, 'j': 102, 'i': 108, 'h': 114, 'g': 120, 'f': 126, 'e': 132, 'd': 138, 'c': 144, 'b': 150, 'a': 156
        }

        this.mode_9_inv = {
            'z': 9, 'y': 18, 'x': 27, 'w': 36, 'v': 45, 'u': 54, 't': 63, 's': 72, 'r': 81, 'q': 90, 'p': 99, 'o': 108,
            'n': 117, 'm': 126, 'l': 135, 'k': 144, 'j': 153, 'i': 162, 'h': 171, 'g': 180, 'f': 189, 'e': 198, 'd': 207, 'c': 216, 'b': 225, 'a': 234
        }

        this.mode_logique_convert = {
            '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f', '7': 'g', '8': 'h', '9': 'i', '10': 'j', '11': 'k', '12': 'l',
            '13': 'm', '14': 'n', '15': 'o', '16': 'p', '17': 'q', '18': 'r', '19': 's', '20': 't', '21': 'u', '22': 'v', '23': 'w', '24': 'x', '25': 'y', '26': 'z'
        }

        this.mode_logique_convert_inv = {
            '1': 'z', '2': 'y', '3': 'x', '4': 'w', '5': 'v', '6': 'u', '7': 't', '8': 's', '9': 'r', '10': 'q', '11': 'p', '12': 'o',
            '13': 'n', '14': 'm', '15': 'l', '16': 'k', '17': 'j', '18': 'i', '19': 'h', '20': 'g', '21': 'f', '22': 'e', '23': 'd', '24': 'c', '25': 'b', '26': 'a'
        }

        this.MODES = [this.mode_logique, this.mode_3, this.mode_6, this.mode_9, this.mode_logique_inv, this.mode_3_inv, this.mode_6_inv, this.mode_9_inv]
    }

    sum(input, mode) {
        let sum = 0;
        for (let i of input) {
            if (mode.hasOwnProperty(i)) sum += mode[i];
        }
        return sum;
    }

    removeVowel(input) {
        const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        let out = "";
        for (let letter of input) {
            if (!vowels.includes(letter)) {
                out += letter;
            }
        }
        return out;
    }

    calculator(input) {
        let results = [];

        let logique = [];
        this.MODES.forEach(mode => {
            logique.push(this.sum(input, mode));
        })

        let nostra = [];
        this.MODES.forEach(mode => {
            nostra.push(this.sum(this.removeVowel(input), mode));
        })

        let diff = [];
        let y = 4;
        for (let x = 0; x < 4; x++) {
            diff.push(logique[y] - logique[x]);
            y++;
        }

        results.push(diff);
        results.push(logique.slice(0,4));
        results.push(nostra.slice(0,4));
        results.push(logique.slice(4,8));
        results.push(nostra.slice(4,8));
        results.push(diff);

        return results;
    }
}
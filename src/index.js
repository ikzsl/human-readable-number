module.exports = function toReadable(number) {
    if (!number) return "zero";
    const mapOnesToText = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        0: "",
    };

    const mapTensToText = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
        0: "",
    };

    const mapElewensToText = {
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        10: "ten",
    };

    const reversedNumberArray = number.toString().split("").reverse();
    const [ones, tens, hundreds] = reversedNumberArray;

    const hundredsString = hundreds ? mapOnesToText[hundreds] + " hundred" : "";
    const tentsString = tens ? " " + mapTensToText[tens] : "";
    const onesString = (tens !== "0" ? " " : "") + mapOnesToText[ones];

    const lastTwoDigitsString =
        tens === "1"
            ? ` ${mapElewensToText[tens + ones]}`
            : `${tentsString}${onesString}`;

    return `${hundredsString}${lastTwoDigitsString}`.trim();
};

// console.log(toReadable(305));

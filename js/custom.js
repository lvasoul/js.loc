// String without some letters

function f(str) {
    let bad_letters = ['h', 'e', 'l', 'o', 'w', 'r', 'd', '!'];
    // let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', n, o, p, q, r, s, t, v, x, y, z, '!'];
    let ttt = [];
    let yyy = '';
    // let zzz = 0;
    for (let i = 0; i < str.length; i++) {
        if (bad_letters === letter) {

        }

        // bad_letters = letters[i];
        let letter = str[i];
        // ttt.push(letter.codePointAt());
        // ttt.toString();
        // yyy += String.fromCodePoint(zzz);
        let re = /letter/gi;
        let str = 'Яблоки круглые и яблоки сочные.';
        let newstr = str.replace(re, 'апельсины');
        console.log(re);
        console.log(yyy);
    }
    // return ttt;
//     return String.fromCodePoint(ttt);
}

    var qqq = [9731, 9733, 9842, 0x2F804];
// console.log('Q - ' + String.fromCodePoint( qqq ));
console.log('last ' + f('Hello world!'));

// Expressions Matter
// let a, b, c, d = 0;
//
// function expressionMatter(a, b, c) {
//     let arr = [d = a * (b + c),
//               d = a * b * c,
//               d = a + b * c,
//               d = a + b + c,
//               d = (a + b) * c];
//     return Math.max.apply(null, arr);
// }
// SMARTY decision
// function expressionMatter2(a, b, c) {
//   return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
// }


// Century From Year

// function century(year) {
//     var result = 0;
//     for (let i = 100; i < year; i+=100) {
//             result = i / 100;
//     }
//     return result + 1;
// }
//
// // SMARTY decision
// function century2(year) {
//     return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
// }



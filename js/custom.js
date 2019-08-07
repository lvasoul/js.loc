

// Expressions Matter
let a, b, c, d = 0;

function expressionMatter(a, b, c) {
    let arr = [d = a * (b + c),
              d = a * b * c,
              d = a + b * c,
              d = a + b + c,
              d = (a + b) * c];
    return Math.max.apply(null, arr);
}
// SMARTY decision
function expressionMatter2(a, b, c) {
  return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
}


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



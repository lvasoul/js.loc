function methodOne() {
    var val = document.querySelector('#methodone').value;
    var errTxt = errCheck(val);
    if (errTxt !== '') {
        document.getElementById("result").innerHTML = errTxt;
    }
    else {
        var diameter = val / 3.14;
        var diameter = diameter.toFixed(1);
        document.getElementById("result").innerHTML = 'Diametr: ' + diameter;
    }
}



// Check Type Errors
function errCheck(e){
    if ( e == '' ){
       return '... я все вижу, ты ничего не вводил!!';
     }else if( e <= 0 ){
       return 'Введите только положительное значение';
     }else if( isInt(e) == false ){
       return 'Введите только целое число.';
     }else{
        return '';
     }
}

function isInt(value) {
     let reg = /^[0-9]+$/;
     return ( reg.test(value) ) ? true : false;
}
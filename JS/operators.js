
function operate(x) {
    var num1 = parseInt(document.getElementById("firstnoval").value);
    var num2 = parseInt(document.getElementById("secondnoval").value);
    var key = x;
    switch (key) {
        case 'y' :
            res = num1 + num2;
            document.getElementById("resval").value = res;
            break;
            case '-' :
            res = num1 - num2;
            document.getElementById("resval").value = res;
            break;
            case '*' :
            res = num1 * num2;
            document.getElementById("resval").value = res;
            break;
            case '/' :
            res = num1 / num2;
            document.getElementById("resval").value = res;
            break;
            case '%' :
            res = num1 % num2;
            document.getElementById("resval").value = res;
            break;
            case '==' :
            res = num1 == num2;
            document.getElementById("resval").value = res;
            break;
            case '&' :
            res = num1 & num2;
            document.getElementById("resval").value = res;
            break;
            case '|' :
            res = num1 | num2;
            document.getElementById("resval").value = res;
            break;
            case '<<' :
            res = num1 << num2;
            document.getElementById("resval").value = res;
            break;
            case '>>' :
            res = num1 >> num2;
            document.getElementById("resval").value = res;
            break;
            case '^' :
            res = num1 ^ num2;
            document.getElementById("resval").value = res;
            break;
        default:
            break;
    }
}
function reset() {
    document.getElementById("firstnoval").value ="";
    document.getElementById("secondnoval").value = "";
    document.getElementById("resval").value = "";
}
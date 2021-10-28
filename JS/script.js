function printColor(ev) 
{
    document.body.style.backgroundColor = ev.value;
    document.getElementById('Div1').style.backgroundColor = ev.value;
}

function ModoClaro()
{
    document.body.style.backgroundColor = "white";
    document.getElementById('Div1').style.backgroundColor = "white";
    document.getElementById('Div1').style.color = "black";
}

function ModoOscuro()
{
    document.body.style.backgroundColor = "black";
    document.getElementById('Div1').style.backgroundColor = "black";
    document.getElementById('Div1').style.color = "white";
}     


var a = 4
var b = 3 

var c = Suma(a, b) // 7

Suma(a, b)

function Suma(num1, num2) 
{
    var total = num1 + num2;
    document.getElementById('total').value = total;

    return total;   // The function returns the product of p1 and p2
}
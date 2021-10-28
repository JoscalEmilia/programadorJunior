
var menu = document.getElementById('menu')
var opciones = false;
menu.addEventListener('click', Menu)


function Menu()
{
    if(!opciones)
    {
        document.getElementById('opciones').style.display = 'block';
        opciones = true;
    }
    else
    {
        document.getElementById('opciones').style.display = 'none'
        opciones = false;
    }
}
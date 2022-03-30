let history = '';


function addToHistory(){
    document.getElementById("output").value = history;
}

function calculer()
{
    let a = document.getElementById("output").value;
    let b = eval(a);

    document.getElementById("output").value = b;
    history = document.getElementById("output").value
}

function afficher(val)
{
    document.getElementById("output").value+=val
}

function effacer()
{
    document.getElementById("output").value = ""
}

function erase()
{
    var valeur = document.getElementById("output").value.slice(0, -1);
    document.getElementById("output").value = valeur;
}
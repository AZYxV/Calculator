function addToHistory()
{
    document.getElementById('output').value = localStorage.getItem('calcul')
}

function calculer()
{
    let a = document.getElementById("output").value;
    let b = eval(a);

    document.getElementById("output").value = b;
    localStorage.setItem('calcul', b);
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
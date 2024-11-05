let jedna = document.getElementById('jedna')

jedna.addEventListener('click', function(){
    alert("alert")

})

const dva = document.getElementById('dva')

dva.addEventListener('click', function(){
    dva.textContent = "ahoj";
   

})

function Showtext(){
    var p = document.createElement("p");
    p.innerText = "ZDRAVIM";
    document.getElementById('text').appendChild(p);
}

document.getElementById("addTextButton").addEventListener('click', function() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = 'Toto je nově přidaný text';
});

document.getElementById("hoverText").addEventListener("mouseout", function() {
    this.textContent = "Přejeďte myší sem.";
});

function hellouser(){
    let user = document.getElementById('user').value;
    alert('Vítám tě na webové stránce ' + user);
}

let cas = document.getElementById('cas');
let datum = document.getElementById('datum');

const pcas =  document.getElementById('pcas');

const pdatum = document.getElementById('pdatum');

cas.addEventListener('click', function(){
    const aktualnicas = new Date();
    const skutecnycas = aktualnicas.toLocaleTimeString();
    pcas.textContent = 'Momentální čas je: ' + skutecnycas;
})

datum.addEventListener('click', function(){
    const aktualnidatum = new Date();
    const skutecnedatum = aktualnidatum.toLocaleDateString();
    pdatum.textContent = 'Momentální datum je: ' + skutecnedatum;
})

function add3() {
    const enter= document.getElementById("cislo1").value;
    const vysledek1 = parseInt(enter) + 3;
    document.getElementById("vysledek1").innerText = "Výsledek = " + vysledek1;
}

function sumHodnoty() {
    const cislo2 = parseFloat(document.getElementById('cislo2').value) || 0;
    const cislo3 = parseFloat(document.getElementById('cislo3').value) || 0;
    document.getElementById('vysledek').innerText = `Výsledek: ${cislo2 + cislo3}`;
}

console.log("hoi");

// declaraties van alle interactieve DOM elementen op de pagina.

var monster = document.querySelector("#monster")
var food = document.querySelector("food")
var play = document.querySelector("#play")
var clean = document.querySelector("#clean")

var tekstInput = document.querySelector('#tekstinput')
var tekstP = document.querySelector('#tekst');
var imageEl = document.querySelector("#food")

var blafAudio = document.querySelector('#laugh')
var blafAudio = document.querySelector('#eat')

var geelButton = document.querySelector("#kleurgeel");
var rozeButton = document.querySelector("#kleurroze");
var groenButton = document.querySelector("#kleurgroen");
var paarsButton = document.querySelector("#kleurpaars");

var lampimg = document.querySelector("#kaars")

var monsterstatus = "blij"


// namen

var namen = ["hoi mijn naam is Cookie", "hoi mijn naam is Spooky", "hoi mijn naam is George", "hoi mijn naam is Bobby", "hoi mijn naam is Willie"]

var randomNummer = Math.random() * 5;

var naamElement = document.querySelector("p.naam");

randomNummer = Math.floor(randomNummer);

naamElement.textContent = namen[randomNummer];



/// het monster word verdrietig als je stopt met kriebelen

// DOM manipulatie functies
function monsterblij() {
    console.log("blij");
    monster.src = 'images/happy.png';
    tekstP.textContent = 'Dubbel tik lekker op mijn buikje!';
}

function monstersad() {
    console.log("sad");
    monster.src = 'images/sad.png';
    tekstP.textContent = 'Ugghhrr waarom ben je nou gestopt?, nu heb ik zin in wat lekkers!';
    document.getElementById('laugh').play();
}

// EventListeners
monster.addEventListener("click", monsterblij);
monster.addEventListener("dblclick", monstersad);

/// het monster word dik van al dat eten

// DOM manipulatie functies
function monsterfat() {
    console.log("fat");
    monster.src = 'images/fat.png';
    tekstP.textContent = 'Pfoee ik zit helemaal vol, gooi de bal dan val ik wat kilootjes af!!';
    document.getElementById('eat').play();
}

//eventlisteners
imageEl.addEventListener("dragend", monsterfat);

/// het monster word blij als je hem met de spons schoonmaakt

/// DOM manipulatie functies
function monsterdirty() {
    console.log("dirty");
    monster.src = "images/dirty.png";
    monster.classList.add('sporten')
    setTimeout(() => {
        monster.classList.remove('sporten')
    }, 2000);
    tekstP.textContent = 'Door al dat sporten ben ik wel erg vies geworden, maak me weer schoon met de spons!';
    monsterstatus = "vies";
    console.log(monsterstatus);
}

function monsterblij() {
    if (monsterstatus == "vies") {
        console.log("blij");
        monster.src = "images/happy.png";
        tekstP.textContent = 'Dubbel tik lekker op mijn buikje!';
    }
}

// EventListeners
play.addEventListener("dragend", monsterdirty);
clean.addEventListener("dragend", monsterblij);

/// het monster veranderd van kleur als je op de buttons klikt

// DOM manipulatie functies
function monstergeel() {
    console.log('geel');
    monster.src = 'images/geel.png';
}

function monsterroze() {
    console.log("roze");
    monster.src = 'images/roze.png';
}

function monstergroen() {
    console.log("groen");
    monster.src = 'images/groen.png';
}

function monsterpaars() {
    console.log("paars")
    monster.src = 'images/happy.png';
}

//eventListeners
geelButton.addEventListener('click', monstergeel);

rozeButton.addEventListener('click', monsterroze);

groenButton.addEventListener('click', monstergroen);

paarsButton.addEventListener('click', monsterpaars);

/// de kaars gaat aan om er op te klikken, en uit met dubbelklik

// DOM manipulatie functies
function kaarsuit() {
    console.log("kaarsuit")
    lampimg.src = 'images/kaarsuit_1.png';
}

function kaarsaan() {
    console.log("kaarsaan")
    lampimg.src = 'images/kaarsaan.png';
}

console.log("lichtknop");

/// EventListeners 
lampimg.addEventListener("dblclick", kaarsuit);
lampimg.addEventListener("click", kaarsaan);
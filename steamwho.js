alert("STEAM Who?");
alert("Inserire 0 per risponere NO, inserire 1 per rispondere SI")
var scelta = prompt("Il personaggio ha vinto un Nobel? ");
scelta = parseInt(scelta);
if (scelta == 0) {
    var scelta = prompt("Il personaggio ha vissuto dopo la Seconda Guerra Mondiale? ");
    scelta = parseInt(scelta);
    if (scelta == 0) {
        var scelta = prompt("Il personaggio è italiano? ");
        scelta = parseInt(scelta);
        if (scelta == 0) {
            var scelta = prompt("Il personaggio è nato in Europa Orientale? ");
            scelta = parseInt(scelta);
            if (scelta == 0) {
                var scelta = prompt("Il personaggio è inglese? ");
                scelta = parseInt(scelta);
                if (scelta == 0) {
                    var scelta = prompt("Il personaggio è un astronomo? ");
                    scelta = parseInt(scelta);
                    if (scelta == 0) {
                        console.log("CARTESIO");
                        alert("Cartesio");
                    } else if (scelta == 1) {
                        console.log("KEPLERO");
                        alert("Giovanni Keplero");
                    } else {
                        console.log("Errore");
                    }
                } else if (scelta == 1) {
                var scelta = prompt("Il personaggio è correlato ad una mela? ");
                scelta = parseInt(scelta);
                if (scelta == 0) {
                    console.log("NEWTON");
                    alert("Isaac Newton");
                } else if (scelta == 1) {
                    console.log("SHAKESPEARE");
                    alert("William Shakespeare");
                } else {
                    console.log("Errore");
                }
		    } else {
                console.log("Errore");
            }
        } else if (scelta == 1) {
            var scelta = prompt("Il personaggio è dell'Antica Grecia? ");
            scelta = parseInt(scelta);
            if (scelta == 0) {
                var scelta = prompt("Il personaggio ha vissuto nel Novecento? ");
                scelta = parseInt(scelta);
                if (scelta == 0) {
                    console.log("MENDEL");
                    alert("Gregor Mendel");
                } else if (scelta == 1) {
                    console.log("TESLA");
                    alert("Nikola Tesla");
                } else {
                    console.log("Errore");
                }
            } else if (scelta == 1) {
                console.log("PITAGORA");
                alert("Pitagora");
            } else {
                console.log("Errore");
            }
        } else {
            console.log("Errore");
        }
        } else if (scelta == 1) {
            var scelta = prompt("Il personaggio ha vissuto durante il Rinascimento? ");
            scelta = parseInt(scelta);
            if (scelta == 0) {
                var scelta = prompt("Il personaggio è un poeta? ");
                scelta = parseInt(scelta);
                if (scelta == 0) {
                    console.log("FIBONACCI");
                    alert("Leonardo Fibonacci");
                } else if (scelta == 1) {
                    console.log("DANTE");
                    alert("Dante Alighieri");
                } else {
                    console.log("Errore");
                }
            } else if (scelta == 1) {
                var scelta = prompt("Il personaggio è nato ad Arezzo? ");
                scelta = parseInt(scelta);
                if (scelta == 0) {
                    console.log("DA VINCI");
                    alert("Leonardo da Vinci");
                } else if (scelta == 1) {
                    console.log("MICHELANGELO");
                    alert("Michelangelo Buonarroti");
                } else {
                    console.log("Errore");
                }
            } else {
                console.log("Errore");
            }
        } else {
            console.log("Errore");
        }
    } else if (scelta == 1) {
        var scelta = prompt("Il personaggio è nato nel continente americano? ");
        scelta = parseInt(scelta);
        if (scelta == 0) {
            var scelta = prompt("Il personaggio è italiano? ");
            scelta = parseInt(scelta);
            if (scelta == 0) {
                var scelta = prompt("Il personaggio è un artista? ");
                scelta = parseInt(scelta);
                if (scelta == 0) {
                    console.log("HAWKING");
                    alert("Stephen Hawking");
                } else if (scelta == 1) {
                    console.log("PICASSO");
                    alert("Pablo Picasso");
                } else {
                    console.log("Errore");
                }
            } else if (scelta == 1) {
                var scelta = prompt("Il personaggio ha vinto un Oscar? ");
                scelta = parseInt(scelta);
                if (scelta == 0) {
                    console.log("FERRARI");
                    alert("Enzo Ferrari");
                } else if (scelta == 1) {
                    console.log("FELLINI");
                    alert("Federico Fellini");
                } else {
                    console.log("Errore");
                }
            } else {
                console.log("Errore");
            }
        } else if (scelta == 1) {
            var scelta = prompt("Il personaggio è una donna? ");
            scelta = parseInt(scelta);
            if (scelta == 0) {
                var scelta = prompt("Il personaggio è ancora vivo? ");
                scelta = parseInt(scelta);
                if (scelta == 0) {
                    var scelta = prompt("Il personaggio è vissuto dopo il 2000? ");
                    scelta = parseInt(scelta);
                    if (scelta == 0) {
                        console.log("OPPENHEIMER");
                        alert("J. Robert Oppenheimer");
                    } else if (scelta == 1) {
                        console.log("STEVE JOBS");
                        alert("Steve Jobs");
                    } else {
                        console.log("Errore");
                    }
                } else if (scelta == 1) {
                    console.log("ZUCKEBERG");
                    alert("Mark Zuckerberg");
                } else {
                    console.log("Errore");
                }
            } else if (scelta == 1) {
                var scelta = prompt("Il personaggio è messicano? ");
                scelta = parseInt(scelta);
                if (scelta == 0) {
                    console.log("JOHNSON")
                    alert("Katherine Johnson");
                } else if (scelta == 1) {
                    console.log("KAHLO")
                    alert("Frida Kahlo");
                }
            }
        }
    }
} else if (scelta == 1) {
    var scelta = prompt("Il personaggio è tedesco? ");
    scelta = parseInt(scelta);
    if (scelta == 0) {
        var scelta = prompt("Il personaggio è italiano? ");
        scelta = parseInt(scelta);
        if (scelta == 0) {
            console.log("TURING")
            alert("Alan Turing");
        } else if (scelta == 1) {
            var scelta = prompt("Il personaggio è un uomo? ");
            scelta = parseInt(scelta);
            if (scelta == 0) {
                console.log("MONTALCINO")
                alert("Rita Levi Montalcino");
            } else if (scelta == 1) {
                console.log("FERMI")
                alert("Enrico Fermi");
            }
        }
    } else if (scelta == 1) {
        var scelta = prompt("Il personaggio è nato prima del Novecento? ");
        scelta = parseInt(scelta);
        if (scelta == 0) {
            console.log("HEISENBERG");
            alert("Werner Karl Heisenberg");
        } else if (scelta == 1) {
            console.log("EINSTEIN");
            alert("Albert Einstein");
        }
    }
} else {
    console.log("Errore");
}
var gameScreen = document.createElement("div");
gameScreen.id = "game-screen";
gameScreen.innerHTML = "<h2 style='text-align:center; font-size: 2em;'>Scegli il tuo personaggio</h2><p style='text-align:center; font-size: 1em; margin-top: 0.3em;'>Pensa ad uno di questi personaggi...</p>";

lista = ["Albert Einstein", "Leonardo da Vinci", "Enrico Fermi", "Werner Karl Heisenberg", "Gregor Mendel", 
    "Pablo Picasso", "Michelangelo Buonarroti", "Steve Jobs", "J. Robert Oppenheimer", "Katherine Johnson", 
    "William Shakespeare", "Nikola Tesla", "Cartesio", "Dante Alighieri", "Frida Kahlo",
    "Charles Darwin", "Rita Levi Montalcini", "Giovanni Keplero", "Pitagora", "Federico Fellini",
    "Isaac Newton", "Alan Turing", "Leonardo Fibonacci", "Stephen Hawking", "Enzo Ferrari", "Sigmund Freud", 
    "Renzo Piano", "Mark Zuckerberg", "Galileo Galilei", "Marie Curie"]

wikipedia = [
    "https://it.wikipedia.org/wiki/Albert_Einstein",
    "https://it.wikipedia.org/wiki/Leonardo_da_Vinci",
    "https://it.wikipedia.org/wiki/Enrico_Fermi",
    "https://it.wikipedia.org/wiki/Werner_Heisenberg",
    "https://it.wikipedia.org/wiki/Gregor_Mendel",
    "https://it.wikipedia.org/wiki/Pablo_Picasso",
    "https://it.wikipedia.org/wiki/Michelangelo_Buonarroti",
    "https://it.wikipedia.org/wiki/Steve_Jobs",
    "https://it.wikipedia.org/wiki/J._Robert_Oppenheimer",
    "https://it.wikipedia.org/wiki/Katherine_Johnson",
    "https://it.wikipedia.org/wiki/William_Shakespeare",
    "https://it.wikipedia.org/wiki/Nikola_Tesla",
    "https://it.wikipedia.org/wiki/Cartesio",
    "https://it.wikipedia.org/wiki/Dante_Alighieri",
    "https://it.wikipedia.org/wiki/Frida_Kahlo",
    "https://it.wikipedia.org/wiki/Charles_Darwin",
    "https://it.wikipedia.org/wiki/Rita_Levi_Montalcini",
    "https://it.wikipedia.org/wiki/Johannes_Kepler",
    "https://it.wikipedia.org/wiki/Pitagora",
    "https://it.wikipedia.org/wiki/Federico_Fellini",
    "https://it.wikipedia.org/wiki/Isaac_Newton",
    "https://it.wikipedia.org/wiki/Alan_Turing",
    "https://it.wikipedia.org/wiki/Leonardo_Fibonacci",
    "https://it.wikipedia.org/wiki/Stephen_Hawking",
    "https://it.wikipedia.org/wiki/Enzo_Ferrari",
    "https://it.wikipedia.org/wiki/Sigmund_Freud",
    "https://it.wikipedia.org/wiki/Renzo_Piano",
    "https://it.wikipedia.org/wiki/Mark_Zuckerberg",
    "https://it.wikipedia.org/wiki/Galileo_Galilei",
    "https://it.wikipedia.org/wiki/Marie_Curie"
    ];

// Schermata Personaggi
function startGame() {
    ABBA = document.getElementById("crediti").style.display;
    gameScreen.innerHTML = "";
    document.getElementById("title-background").style.display = "none";
    document.getElementById("button").style.display = "none";
    document.getElementById("crediti").style.display = "none";
    
    // Creazione della griglia invisibile per le immagini
    var gridContainer = document.createElement("div");
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = "repeat(5, 1fr)"; // 5 colonne
    gridContainer.style.gridGap = "10px"; // Spazio tra le celle

	
    // Codice per creare le immagini e le didascalie
    for (let i = 1; i <= 30; i++) {
        var imageContainer = document.createElement("div"); // Contenitore per immagine e didascalia
        imageContainer.style.textAlign = "center"; // Centra il contenuto

        var image = document.createElement("img");
        image.src = "Immagini\\immagine" + i + ".jpg"; // Sostituisci "immagine" con il percorso delle tue immagini
        image.alt = "Immagine " + i;
        image.id = "image-griglia";
        image.style.width = "200px"; // Regola la larghezza dell'immagine
        image.style.height = "200px"; // Regola l'altezza dell'immagine
        image.dataset.link = wikipedia[i - 1]; // Aggiungi il link come attributo personalizzato
        image.addEventListener("click", function() {
            window.open(this.dataset.link, "_blank"); // Apre il link in una nuova scheda quando l'immagine viene cliccata
        });

        imageContainer.appendChild(image); // Aggiunge l'immagine al contenitore

        var caption = document.createElement("p");
        caption.id = "caption"
        caption.textContent = lista[i - 1];
        caption.style.marginTop = "5px"; // Aggiunge spazio sopra la didascalia
        imageContainer.appendChild(caption); // Aggiunge la didascalia al contenitore

        gridContainer.appendChild(imageContainer); // Aggiunge il contenitore alla griglia
    }

    gameScreen.appendChild(gridContainer);

    var buttonA = document.createElement("button");
    buttonA.id = "botton-a";
    buttonA.textContent = "INIZIA!";
    buttonA.style.position = "relative"; // Imposta la posizione relativa per il posizionamento relativo ai contenuti della pagina
    buttonA.style.display = "block"; // Rende il bottone un blocco per occupare l'intera larghezza
    buttonA.style.margin = "auto"; // Centra orizzontalmente
    buttonA.style.fontSize = "3em"; // Grandezza aumentata di 3 volte
    buttonA.style.padding = "10px 20px"; // Padding aggiunto per migliorare l'aspetto
    buttonA.style.marginTop = "20px"; // Aggiunge spazio sopra il bottone
    document.body.appendChild(buttonA); // Aggiunge il bottone come figlio del corpo della pagina


buttonA.onclick = function inizio() {
        PierGiorgio();
        domandaNobel();
    
        // Aggiunge i bottoni al contenitore
        buttonsContainer.appendChild(buttonSi);
        buttonsContainer.appendChild(buttonNo);
    
        // Aggiunge il contenitore dei bottoni al contenuto della nuova schermata
        newContent.appendChild(buttonsContainer);
        gameScreen.appendChild(newContent);
    };
    
    
    gameScreen.appendChild(buttonA);
    
    document.getElementById("background").appendChild(gameScreen);
}


function domandaNobel() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio ha vinto un premio Nobel?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        domandaTedesco();
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        domandaSecondaGuerraMondiale();
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaSecondaGuerraMondiale() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è vissuto dopo la Seconda Guerra Mondiale?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        // Azione da eseguire se la risposta è SI
        domandaAmericano();
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        // Azione da eseguire se la risposta è NO
        domandaItaliano2()
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

// Funzione per la terza domanda
function domandaTedesco() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è tedesco?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        // Azione da eseguire se la risposta è SI
        domanda900();
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        // Azione da eseguire se la risposta è NO
        domandaItaliano1()
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaAmericano() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è del continente americano?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        domandaDonna();
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        domandaItaliano3();
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domanda900() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è nato prima del 1900?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        x = "Albert Einstein";
        Personaggio(x);;
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        x = "Werner Karl Heisenberg";
        Personaggio(x);;
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaItaliano1() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è italiano?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        domandaUomo();
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        domandaChimico();
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaItaliano2() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è italiano?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        domandaRinascimento();
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        domandaEstEuropa();
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaUomo() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è un uomo?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        x = "Enrico Fermi";
        Personaggio(x);;
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        x = "Rita Levi Montalcino";
        Personaggio(x);;
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaItaliano3() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è italiano?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        domandaOscar();
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        domandaSpagnolo();
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaDonna() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è una donna?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        domandaPittrice();
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        domandaVivo();
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaRinascimento() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è del Rinascimento?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        domandaArezzo();
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        domandaPoeta1();
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaEstEuropa() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è nato in Europa Orientale?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        domandaAnticaGrecia();
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        domandaInglese();
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaArezzo() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è nato ad Arezzo?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        x = "Michelangelo Buonarroti";
        Personaggio(x);
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        domandaPittore();
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaPoeta1() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è un poeta?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        x = "Dante Alighieri";
        Personaggio(x);;
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        x = "Leonardo Fibonacci";
        Personaggio(x);;
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaAnticaGrecia() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è nato in Antica Grecia?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        x = "Pitagora";
        Personaggio(x);;
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        domanda1900();
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaInglese() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è inglese?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        domandaMela();
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        domandaAstronomo();
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaOscar() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio ha vinto un Oscar?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        x = "Federico Fellini";
        Personaggio(x);;
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        domandaArchitetto();
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaSpagnolo() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è spagnolo?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        x = "Pablo Picasso";
        Personaggio(x);
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        x = "Stephen Hawking";
        Personaggio(x);
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaPittrice() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è una pittrice?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        x = "Frida Kahlo";
        Personaggio(x);
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        x = "Katherine Johnson";
        Personaggio(x);
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaVivo() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è ancora vivo?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        x = "Mark Zuckerberg";
        Personaggio(x);
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        domanda2000();
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domanda2000() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è vissuto dopo il 2000?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        x = "Steve Jobs";
        Personaggio(x);
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        x = "J. Robert Oppenheimer";
        Personaggio(x);
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domanda1900() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è vissuto nel Novecento?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        domandaPsicologo()
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        x = "Gregor Mendel";
        Personaggio(x);
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaMela() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è correlato ad una mela?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        x = "Isaac Newton";
        Personaggio(x)
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        domandaPoeta2()
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaAstronomo() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è un astronomo?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        x = "Giovanni Keplero";
        Personaggio(x)
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        x = "Cartesio";
        Personaggio(x)
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaArchitetto() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è un architetto?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        x = "Renzo Piano";
        Personaggio(x)
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        x = "Enzo Ferrari";
        Personaggio(x);
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaPittore() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è anche un pittore?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        x = "Leonardo Da Vinci";
        Personaggio(x)
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        x = "Galileo Galilei";
        Personaggio(x);
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaPsicologo() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è uno psicologo?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        x = "Sigmund Freud";
        Personaggio(x)
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        x = "Nikola Tesla";
        Personaggio(x);
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaChimico() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è un chimico?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        x = "Maria Skłodowska Curie";
        Personaggio(x)
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        x = "Alan Turing";
        Personaggio(x);
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

function domandaPoeta2() {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è un poeta?";
    nuovaDomanda.style.textAlign = "center";

    // Creazione dei bottoni SI e NO
    var buttonSi = document.createElement("button");
    buttonSi.id = "botton-si";
    buttonSi.textContent = "SI";
    buttonSi.onclick = function() {
        x = "William Shakespeare";
        Personaggio(x);
    };

    var buttonNo = document.createElement("button");
    buttonNo.id = "botton-no";
    buttonNo.textContent = "NO";
    buttonNo.onclick = function() {
        x = "Charles Darwin";
        Personaggio(x);
    };

    // Aggiunge i bottoni al contenitore
    var buttonsContainer = document.createElement("div");
    buttonsContainer.style.textAlign = "center";
    buttonsContainer.appendChild(buttonSi);
    buttonsContainer.appendChild(buttonNo);

    // Aggiunge tutto al contenitore principale
    gameScreen.appendChild(nuovaDomanda);
    gameScreen.appendChild(buttonsContainer);
}

// Schermata finale
function Personaggio(x) {
    // Rimuove il contenuto precedente
    gameScreen.innerHTML = "";
    document.getElementById("tipo-pensante").style.display = "none";
    document.getElementById("crediti").style.display = ABBA;

    var credi = document.getElementById("return-button");
    credi.style.width = "200px"; // Imposta la larghezza del bottone a 200px
    credi.style.height = "200px"; // Imposta l'altezza del bottone a 100px
    

    // Aggiunge il testo per la nuova domanda
    var nuovaDomanda = document.createElement("h2");
    nuovaDomanda.id = "Domanda";
    nuovaDomanda.textContent = "Il personaggio è " + x;
    nuovaDomanda.style.textAlign = "center";
    gameScreen.appendChild(nuovaDomanda);

    // Crea un overlay per oscurare la schermata principale
    var overlay = document.createElement("div");
    overlay.id = "overlay";
    document.body.appendChild(overlay);

    // Crea un contenitore per l'immagine ingrandita
    var modalContainer = document.createElement("div");
    modalContainer.id = "modal-container";
    document.body.appendChild(modalContainer);

    // Crea l'immagine ingrandita
    var modalImage = document.createElement("img");
    modalImage.src = "Immagini\\" + x + ".jpg";
    modalImage.alt = x;
    modalImage.style.maxWidth = "90%"; // Imposta la larghezza massima al 90% della larghezza della viewport
    modalImage.style.maxHeight = "90%"; // Imposta l'altezza massima al 90% dell'altezza della viewport
    modalContainer.appendChild(modalImage);

    // Aggiungi un gestore di eventi "click" all'overlay per chiudere la visualizzazione modale
    overlay.addEventListener("click", function() {
        modalContainer.classList.remove("active"); // Rimuove la classe "active" dal contenitore dell'immagine per nasconderlo
        overlay.classList.remove("active"); // Rimuove la classe "active" dall'overlay per nasconderlo
    });

    // Aggiungi un gestore di eventi "click" all'immagine principale per ingrandire l'immagine e mostrare l'overlay con animazione
    var image = document.createElement("img");
    image.src = "Immagini\\" + x + ".jpg";
    image.alt = x;
    image.id = "finalimage";
    image.style.width = "500px";
    image.style.height = "500px";
    image.style.display = "block"; // Imposta l'immagine come blocco per utilizzare il margin: auto per centrare orizzontalmente
    image.style.marginLeft = "auto"; // Imposta il margine sinistro su auto per centrare l'immagine
    image.style.marginRight = "auto"; // Imposta il margine destro su auto per centrare l'immagine
    image.addEventListener("click", function() {
        // Introduce un piccolo ritardo prima di applicare la classe "active" per far sì che l'animazione sia visibile
        setTimeout(function() {
            modalContainer.classList.add("active"); // Aggiunge la classe "active" al contenitore dell'immagine per visualizzarlo con animazione
            overlay.classList.add("active"); // Aggiunge la classe "active" all'overlay per visualizzarlo con animazione
        }, 10); // 10 millisecondi di ritardo
    });
    gameScreen.appendChild(image);
}
i = 0;
document.addEventListener("DOMContentLoaded", function() {
    // Selezione dell'elemento del bottone
    var button = document.getElementById("crediti");

    // Aggiunta di un gestore di eventi per il clic sul bottone
    button.addEventListener("click", function() {
        document.getElementById("title-background").style.display = "none";
        document.getElementById("button").style.display = "none";
        gameScreen.innerHTML = "";
    i = i + 1;
    if (i != 1) {
        document.getElementById("Domanda").style.display = "none";
        // Qua bisogna fare in modo che cancelli quello vecchio ma non so come si chiami, perciò per ora lascio così, ho provato con la stringa precedente
        var Credi = document.createElement("h2");
    }
    else{
        var Credi = document.createElement("h2");
    }
    console.log(i);
        Credi.id = "Domanda";
        Credi.textContent = "STEAM Who? \
        Fatto da: \
        Matteo Tiraferri, \
        Leonardo Boga, \
        Diego Amati, \
        Federico Catani.";

    Credi.style.textAlign = "center";
    document.body.appendChild(Credi);
    });
  });

function PierGiorgio(){
    var modalImage = document.createElement("img");
    modalImage.src = "Immagini\\tipopensante1.png";
    modalImage.alt = "tipopensante";
    modalImage.id = "tipo-pensante";
    modalImage.style.width = "600px";
    modalImage.style.height = "600px";
    modalImage.style.maxWidth = "100%"; // Imposta la larghezza massima al 90% della larghezza della viewport
    modalImage.style.maxHeight = "100%"; // Imposta l'altezza massima al 90% dell'altezza della viewport
    document.body.appendChild(modalImage);
}

  // Questo assicura che lo script verrà eseguito dopo che l'elemento del bottone è stato creato nel DOM.
document.addEventListener("DOMContentLoaded", function() {
    // Selezione dell'elemento del bottone
    var button = document.getElementById("return-button");

    // Aggiunta di un gestore di eventi per il clic sul bottone
    button.addEventListener("click", function() {
        window.location.href = "main.html";
    });
  });
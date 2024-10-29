
// Classi
var Prodotto = /** @class */ (function () {
    function Prodotto(tipo, id, taglia, colore, stato) {
        if (stato === void 0) { stato = 'disponibile'; }
        this.tipo = tipo;
        this.id = id;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato;
    }
    Prodotto.prototype.assegnaCliente = function (cliente) {
        console.log("Prodotto ".concat(this.id, " assegnato a ").concat(cliente.nome, " ").concat(cliente.cognome));
        this.stato = 'esaurito';
    };
    return Prodotto;
}());
var Cliente = /** @class */ (function () {
    function Cliente(nome, cognome, email, metodoPagamentoPreferito) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamentoPreferito = metodoPagamentoPreferito;
    }
    Cliente.prototype.ordinaProdotto = function (prodotto) {
        if (prodotto.stato === 'disponibile') {
            console.log("".concat(this.nome, " ").concat(this.cognome, " ha ordinato il prodotto ").concat(prodotto.id));
            prodotto.assegnaCliente(this);
        }
        else {
            console.log("Il prodotto ".concat(prodotto.id, " non \u00E8 disponibile"));
        }
    };
    return Cliente;
}());
var ProcessoProduzione = /** @class */ (function () {
    function ProcessoProduzione(nome, descrizione) {
        this.nome = nome;
        this.descrizione = descrizione;
        this.prodottiInProduzione = [];
    }
    ProcessoProduzione.prototype.aggiungiProdotto = function (prodotto) {
        this.prodottiInProduzione.push(prodotto);
        console.log("Prodotto ".concat(prodotto.id, " aggiunto al processo ").concat(this.nome));
    };
    return ProcessoProduzione;
}());
// Istanziazione e test
// Creazione prodotti
var costume1 = new Prodotto('costume da bagno', 'CB001', 'M', 'Blu');
var pareo1 = new Prodotto('pareo', 'P001', 'Unica', 'Verde');
var cappello1 = new Prodotto('cappello', 'CAP001', 'L', 'Bianco');
// Creazione clienti
var cliente1 = new Cliente('Mario', 'Rossi', 'mario.rossi@email.com', 'Carta di credito');
var cliente2 = new Cliente('Giulia', 'Bianchi', 'giulia.bianchi@email.com', 'PayPal');
// Creazione processo di produzione
var processoPlaticaRiciclata = new ProcessoProduzione('Processo Plastica Riciclata', 'Processo di trasformazione della plastica riciclata in tessuti per beachwear');
// Aggiunta prodotti al processo di produzione
processoPlaticaRiciclata.aggiungiProdotto(costume1);
processoPlaticaRiciclata.aggiungiProdotto(pareo1);
processoPlaticaRiciclata.aggiungiProdotto(cappello1);
// Test ordinazione prodotti
cliente1.ordinaProdotto(costume1);
cliente2.ordinaProdotto(pareo1);
// Tentativo di ordinare un prodotto già esaurito
cliente2.ordinaProdotto(costume1);
// Aggiunta di un nuovo prodotto al processo di produzione
var costume2 = new Prodotto('costume da bagno', 'CB002', 'S', 'Rosso');
processoPlaticaRiciclata.aggiungiProdotto(costume2);
// Visualizzazione dei prodotti in produzione
console.log("Prodotti in produzione:");
processoPlaticaRiciclata.prodottiInProduzione.forEach(function (prodotto) {
    console.log("- ".concat(prodotto.tipo, " (ID: ").concat(prodotto.id, "), Colore: ").concat(prodotto.colore, ", Taglia: ").concat(prodotto.taglia, ", Stato: ").concat(prodotto.stato));
});
// Funzione per visualizzare lo stato del magazzino
function visualizzaStatoMagazzino(prodotti) {
    console.log("\nStato del magazzino:");
    prodotti.forEach(function (prodotto) {
        console.log("- ".concat(prodotto.tipo, " (ID: ").concat(prodotto.id, "), Stato: ").concat(prodotto.stato));
    });
}
// Visualizzazione dello stato del magazzino
visualizzaStatoMagazzino([costume1, pareo1, cappello1, costume2]);
// Funzione per calcolare le statistiche di vendita
function calcolaStatisticheVendita(prodotti) {
    var totale = prodotti.length;
    var venduti = prodotti.filter(function (p) { return p.stato === 'esaurito'; }).length;
    var disponibili = totale - venduti;
    console.log("\nStatistiche di vendita:");
    console.log("Totale prodotti: ".concat(totale));
    console.log("Prodotti venduti: ".concat(venduti));
    console.log("Prodotti disponibili: ".concat(disponibili));
    console.log("Percentuale venduta: ".concat((venduti / totale * 100).toFixed(2), "%"));
}
// Calcolo e visualizzazione delle statistiche di vendita
calcolaStatisticheVendita([costume1, pareo1, cappello1, costume2]);
// Simulazione di un nuovo ordine
var cliente3 = new Cliente('Laura', 'Verdi', 'laura.verdi@email.com', 'Bonifico');
cliente3.ordinaProdotto(cappello1);
// Aggiornamento delle statistiche dopo il nuovo ordine
visualizzaStatoMagazzino([costume1, pareo1, cappello1, costume2]);
calcolaStatisticheVendita([costume1, pareo1, cappello1, costume2]);
// Funzione per simulare la produzione di nuovi articoli
function produciNuoviArticoli(processo, quantita) {
    console.log("\nProduzione di ".concat(quantita, " nuovi articoli:"));
    for (var i = 0; i < quantita; i++) {
        var tipi = ['costume da bagno', 'pareo', 'cappello'];
        var tipo = tipi[Math.floor(Math.random() * tipi.length)];
        var id = "".concat(tipo.charAt(0).toUpperCase()).concat(String(Math.floor(Math.random() * 1000)).padStart(3, '0'));
        var colori = ['Blu', 'Verde', 'Rosso', 'Giallo', 'Nero', 'Bianco'];
        var colore = colori[Math.floor(Math.random() * colori.length)];
        var taglie = ['XS', 'S', 'M', 'L', 'XL', 'Unica'];
        var taglia = taglie[Math.floor(Math.random() * taglie.length)];
        var nuovoProdotto = new Prodotto(tipo, id, taglia, colore);
        processo.aggiungiProdotto(nuovoProdotto);
        console.log("- ".concat(nuovoProdotto.tipo, " (ID: ").concat(nuovoProdotto.id, "), Colore: ").concat(nuovoProdotto.colore, ", Taglia: ").concat(nuovoProdotto.taglia));
    }
}
// Simulazione della produzione di 5 nuovi articoli
produciNuoviArticoli(processoPlaticaRiciclata, 5);
// Visualizzazione dei prodotti in produzione dopo la produzione di nuovi articoli
console.log("\nProdotti in produzione:");
processoPlaticaRiciclata.prodottiInProduzione.forEach(function (prodotto) {
    console.log("- ".concat(prodotto.tipo, " (ID: ").concat(prodotto.id, "), Colore: ").concat(prodotto.colore, ", Taglia: ").concat(prodotto.taglia, ", Stato: ").concat(prodotto.stato));
});

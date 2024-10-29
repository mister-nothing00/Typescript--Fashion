// Interfacce

export interface IProdotto {
    tipo: 'costume da bagno' | 'pareo' | 'cappello';
    id: string;
    taglia: string;
    colore: string;
    stato: 'disponibile' | 'esaurito';
    assegnaCliente(cliente: ICliente): void;
}

export interface ICliente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamentoPreferito: string;
    ordinaProdotto(prodotto: IProdotto): void;
}

export interface IProcessoProduzione {
    nome: string;
    descrizione: string;
    prodottiInProduzione: IProdotto[];
    aggiungiProdotto(prodotto: IProdotto): void;
}

// Classi

class Prodotto implements IProdotto {
    constructor(
        public tipo: 'costume da bagno' | 'pareo' | 'cappello',
        public id: string,
        public taglia: string,
        public colore: string,
        public stato: 'disponibile' | 'esaurito' = 'disponibile'
    ) {}

    assegnaCliente(cliente: ICliente): void {
        console.log(`Prodotto ${this.id} assegnato a ${cliente.nome} ${cliente.cognome}`);
        this.stato = 'esaurito';
    }
}

class Cliente implements ICliente {
    constructor(
        public nome: string,
        public cognome: string,
        public email: string,
        public metodoPagamentoPreferito: string
    ) {}

    ordinaProdotto(prodotto: IProdotto): void {
        if (prodotto.stato === 'disponibile') {
            console.log(`${this.nome} ${this.cognome} ha ordinato il prodotto ${prodotto.id}`);
            prodotto.assegnaCliente(this);
        } else {
            console.log(`Il prodotto ${prodotto.id} non è disponibile`);
        }
    }
}

class ProcessoProduzione implements IProcessoProduzione {
    prodottiInProduzione: IProdotto[] = [];

    constructor(
        public nome: string,
        public descrizione: string
    ) {}

    aggiungiProdotto(prodotto: IProdotto): void {
        this.prodottiInProduzione.push(prodotto);
        console.log(`Prodotto ${prodotto.id} aggiunto al processo ${this.nome}`);
    }
}

// Istanziazione e test

// Creazione prodotti
const costume1 = new Prodotto('costume da bagno', 'CB001', 'M', 'Blu');
const pareo1 = new Prodotto('pareo', 'P001', 'Unica', 'Verde');
const cappello1 = new Prodotto('cappello', 'CAP001', 'L', 'Bianco');

// Creazione clienti
const cliente1 = new Cliente('Mario', 'Rossi', 'mario.rossi@email.com', 'Carta di credito');
const cliente2 = new Cliente('Giulia', 'Bianchi', 'giulia.bianchi@email.com', 'PayPal');

// Creazione processo di produzione
const processoPlaticaRiciclata = new ProcessoProduzione(
    'Processo Plastica Riciclata',
    'Processo di trasformazione della plastica riciclata in tessuti per beachwear'
);

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
const costume2 = new Prodotto('costume da bagno', 'CB002', 'S', 'Rosso');
processoPlaticaRiciclata.aggiungiProdotto(costume2);

// Visualizzazione dei prodotti in produzione
console.log("Prodotti in produzione:");
processoPlaticaRiciclata.prodottiInProduzione.forEach(prodotto => {
    console.log(`- ${prodotto.tipo} (ID: ${prodotto.id}), Colore: ${prodotto.colore}, Taglia: ${prodotto.taglia}, Stato: ${prodotto.stato}`);
});

// Funzione per visualizzare lo stato del magazzino
function visualizzaStatoMagazzino(prodotti: IProdotto[]) {
    console.log("\nStato del magazzino:");
    prodotti.forEach(prodotto => {
        console.log(`- ${prodotto.tipo} (ID: ${prodotto.id}), Stato: ${prodotto.stato}`);
    });
}

// Visualizzazione dello stato del magazzino
visualizzaStatoMagazzino([costume1, pareo1, cappello1, costume2]);

// Funzione per calcolare le statistiche di vendita
function calcolaStatisticheVendita(prodotti: IProdotto[]) {
    const totale = prodotti.length;
    const venduti = prodotti.filter(p => p.stato === 'esaurito').length;
    const disponibili = totale - venduti;

    console.log("\nStatistiche di vendita:");
    console.log(`Totale prodotti: ${totale}`);
    console.log(`Prodotti venduti: ${venduti}`);
    console.log(`Prodotti disponibili: ${disponibili}`);
    console.log(`Percentuale venduta: ${(venduti / totale * 100).toFixed(2)}%`);
}

// Calcolo e visualizzazione delle statistiche di vendita
calcolaStatisticheVendita([costume1, pareo1, cappello1, costume2]);

// Simulazione di un nuovo ordine
const cliente3 = new Cliente('Laura', 'Verdi', 'laura.verdi@email.com', 'Bonifico');
cliente3.ordinaProdotto(cappello1);

// Aggiornamento delle statistiche dopo il nuovo ordine
visualizzaStatoMagazzino([costume1, pareo1, cappello1, costume2]);
calcolaStatisticheVendita([costume1, pareo1, cappello1, costume2]);

// Funzione per simulare la produzione di nuovi articoli
function produciNuoviArticoli(processo: IProcessoProduzione, quantita: number) {
    console.log(`\nProduzione di ${quantita} nuovi articoli:`);
    for (let i = 0; i < quantita; i++) {
        const tipi: ('costume da bagno' | 'pareo' | 'cappello')[] = ['costume da bagno', 'pareo', 'cappello'];
        const tipo = tipi[Math.floor(Math.random() * tipi.length)];
        const id = `${tipo.charAt(0).toUpperCase()}${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`;
        const colori = ['Blu', 'Verde', 'Rosso', 'Giallo', 'Nero', 'Bianco'];
        const colore = colori[Math.floor(Math.random() * colori.length)];
        const taglie = ['XS', 'S', 'M', 'L', 'XL', 'Unica'];
        const taglia = taglie[Math .floor(Math.random() * taglie.length)];

        const nuovoProdotto = new Prodotto(tipo, id, taglia, colore);
        processo.aggiungiProdotto(nuovoProdotto);
        console.log(`- ${nuovoProdotto.tipo} (ID: ${nuovoProdotto.id}), Colore: ${nuovoProdotto.colore}, Taglia: ${nuovoProdotto.taglia}`);
    }
}

// Simulazione della produzione di 5 nuovi articoli
produciNuoviArticoli(processoPlaticaRiciclata, 5);

// Visualizzazione dei prodotti in produzione dopo la produzione di nuovi articoli
console.log("\nProdotti in produzione:");
processoPlaticaRiciclata.prodottiInProduzione.forEach(prodotto => {
    console.log(`- ${prodotto.tipo} (ID: ${prodotto.id}), Colore: ${prodotto.colore}, Taglia: ${prodotto.taglia}, Stato: ${prodotto.stato}`);
});
# 🏖️ Gestione Prodotti Beachwear

Questo progetto rappresenta un sistema di gestione per prodotti di beachwear come costumi da bagno, parei e cappelli. La struttura include diverse interfacce e classi, ciascuna progettata per gestire i vari aspetti della produzione, dell'inventario e delle vendite di questi prodotti. 

## ✨ Caratteristiche principali

- **Gestione Prodotti**: Creazione, gestione dello stato e assegnazione dei prodotti a clienti.
- **Gestione Clienti**: Permette ai clienti di ordinare prodotti e impostare un metodo di pagamento preferito.
- **Processo di Produzione**: Simulazione del processo di produzione per aggiungere nuovi prodotti e monitorarli.

## 🗂️ Struttura del Codice

### 📋 Interfacce

1. **IProdotto**: Definisce le proprietà di base dei prodotti e un metodo per assegnarli ai clienti.
    - **Proprietà**: tipo, id, taglia, colore, stato (disponibile o esaurito).
    - **Metodo**: `assegnaCliente(cliente: ICliente)` per associare un prodotto a un cliente.

2. **ICliente**: Definisce le proprietà e i metodi per un cliente.
    - **Proprietà**: nome, cognome, email, metodo di pagamento preferito.
    - **Metodo**: `ordinaProdotto(prodotto: IProdotto)` per ordinare un prodotto.

3. **IProcessoProduzione**: Rappresenta un processo di produzione.
    - **Proprietà**: nome, descrizione, prodotti attualmente in produzione.
    - **Metodo**: `aggiungiProdotto(prodotto: IProdotto)` per aggiungere un prodotto al processo di produzione.

### 🏗️ Classi

1. **Prodotto**: Implementa `IProdotto` e permette di assegnare un cliente a un prodotto.
    - Se un cliente ordina un prodotto, lo stato cambia a "esaurito".
    
2. **Cliente**: Implementa `ICliente` e consente ai clienti di ordinare prodotti.
    - Se il prodotto è disponibile, viene assegnato al cliente, altrimenti un messaggio indica che il prodotto non è disponibile.
    
3. **ProcessoProduzione**: Implementa `IProcessoProduzione` e permette di aggiungere e monitorare i prodotti in produzione.

## 🧪 Test e Funzioni

Il codice include esempi di utilizzo delle classi e delle interfacce:
- Creazione di prodotti e clienti.
- Aggiunta di prodotti al processo di produzione.
- Ordini da parte dei clienti con gestione della disponibilità.
- Visualizzazione dello stato del magazzino e delle statistiche di vendita.

### 📊 Funzioni Aggiuntive

1. **`visualizzaStatoMagazzino`**: Mostra la disponibilità dei prodotti in magazzino.
2. **`calcolaStatisticheVendita`**: Calcola e visualizza statistiche come la percentuale di prodotti venduti.
3. **`produciNuoviArticoli`**: Simula la produzione di nuovi articoli con caratteristiche casuali (tipo, colore, taglia).

## 🚀 Esempio di Utilizzo

```typescript
// Creazione prodotti
const costume1 = new Prodotto('costume da bagno', 'CB001', 'M', 'Blu');
const pareo1 = new Prodotto('pareo', 'P001', 'Unica', 'Verde');

// Creazione clienti
const cliente1 = new Cliente('Mario', 'Rossi', 'mario.rossi@email.com', 'Carta di credito');

// Aggiunta di prodotti al processo di produzione
const processoPlaticaRiciclata = new ProcessoProduzione(
    'Processo Plastica Riciclata',
    'Processo di trasformazione della plastica riciclata in tessuti per beachwear'
);
processoPlaticaRiciclata.aggiungiProdotto(costume1);

// Ordine di un prodotto da parte di un cliente
cliente1.ordinaProdotto(costume1);

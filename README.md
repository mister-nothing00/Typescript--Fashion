# Panoramica del Progetto: TypeScript Fashion

🏖️ **Gestione Prodotti Beachwear**

Questo progetto rappresenta un sistema di gestione per prodotti di beachwear, come costumi da bagno, parei e cappelli. La struttura include diverse interfacce e classi, ciascuna progettata per gestire i vari aspetti della produzione, dell'inventario e delle vendite di questi prodotti.

✨ **Caratteristiche principali**

- **Gestione Prodotti**: Creazione, gestione dello stato e assegnazione dei prodotti a clienti.
- **Gestione Clienti**: Permette ai clienti di ordinare prodotti e impostare un metodo di pagamento preferito.
- **Processo di Produzione**: Simulazione del processo di produzione per aggiungere nuovi prodotti e monitorarli.

🗂️ **Struttura del Codice**

📋 **Interfacce**

- **IProduct**: Definisce le proprietà di base dei prodotti e un metodo per assegnarli ai clienti.
  - Proprietà: `type`, `id`, `size`, `color`, `state` (available || spent).
  - Metodo: `assignCostumer(costumer: ICostumer)` per associare un prodotto a un cliente.

- **ICostumer**: Definisce le proprietà e i metodi per un cliente.
  - Proprietà: `name`, `surname`, `email`, `paymentMethod`.
  - Metodo: `orderProduct(product: IProduct)` per ordinare un prodotto.

- **IProduction**: Rappresenta un processo di produzione.
  - Proprietà: `name`, `description`, `productsInProduction`.
  - Metodo: `addProduct(product: IProduct)` per aggiungere un prodotto al processo di produzione.

🏗️ **Classi**

- **Prodotto**: Implementa `IProduct` e permette di assegnare un cliente a un prodotto.
  - Se un cliente ordina un prodotto, lo stato cambia a "esaurito".

- **Cliente**: Implementa `ICostumer` e consente ai clienti di ordinare prodotti.
  - Se il prodotto è disponibile, viene assegnato al cliente; altrimenti, un messaggio indica che il prodotto non è disponibile.

- **ProcessoProduzione**: Implementa `IProduction` e permette di aggiungere e monitorare i prodotti in produzione.

🧪 **Test e Funzioni**

Il codice include esempi di utilizzo delle classi e delle interfacce:

- Creazione di prodotti e clienti.
- Aggiunta di prodotti al processo di produzione.
- Ordini da parte dei clienti con gestione della disponibilità.
- Visualizzazione dello stato del magazzino e delle statistiche di vendita.

📊 **Funzioni Aggiuntive**

- **calculateSalesStatistics**: Calcola e visualizza statistiche come la percentuale di prodotti venduti.
- **produceNewArticles**: Simula la produzione di nuovi articoli con caratteristiche casuali (tipo, colore, taglia).

🚀 **Esempio di Utilizzo**

```typescript
// Creazione prodotti
const swimsuit1 = new Product('swimsuit', 'CB001', 'M', 'Blue');
const pareo1 = new Product('pareo', 'P001', 'Unique', 'Green');

// Creazione clienti
const costumer1 = new Costumer('Mario', 'Rossi', 'mario.rossi@email.com', 'Credit Card');

// Aggiunta di prodotti al processo di produzione
const recycledPlasticProcess = new ProductionProcess(
    'Processo Plastica Riciclata',
    'Processo di trasformazione della plastica riciclata in tessuti per beachwear'
);
recycledPlasticProcess.addProduct(swimsuit1);

// Ordine di un prodotto da parte di un cliente
costumer1.orderProduct(swimsuit1);

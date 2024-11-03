// Interfacce

export interface IProduct {
    type: "swimsuit" | "pareo" | "cap";
    id: string;
    size: string;
    color: string;
    state: "available" | "spent";
    assignCustomer(customer: ICostumer): void;
  }
  
  export interface ICostumer {
    name: string;
    surname: string;
    email: string;
    paymentMethod: string;
    orderProduct(product: IProduct): void;
  }
  
  export interface IProduction {
    name: string;
    description: string;
    productsInProduction: IProduct[];
    addProduct(product: IProduct): void;
  }
  
  // Classi
  
  class Product implements IProduct {
    constructor(
      public type: "swimsuit" | "pareo" | "cap",
      public id: string,
      public size: string,
      public color: string,
      public state: "available" | "spent" = "available"
    ) {}
  
    assignCustomer(customer: ICostumer): void {
      console.log(
        `Product ${this.id} assigned to ${customer.name} ${customer.surname}`
      );
      this.state = "spent";
    }
  }
  
  class Costumer implements ICostumer {
    constructor(
      public name: string,
      public surname: string,
      public email: string,
      public paymentMethod: string
    ) {}
  
    orderProduct(product: IProduct): void {
      if (product.state === "available") {
        console.log(
          `${this.name} ${this.surname} ordered the product ${product.id}`
        );
        product.assignCustomer(this);
      } else {
        console.log(`Product ${product.id} isn't available`);
      }
    }
  }
  
  class ProductionProcess implements IProduction {
    productsInProduction: IProduct[] = [];
  
    constructor(public name: string, public description: string) {}
  
    addProduct(product: IProduct): void {
      this.productsInProduction.push(product);
      console.log(`Product ${product.id} added to the process ${this.name}`);
    }
  }
  
  // Test
  
  // Creation product
  const swimsuit1 = new Product("swimsuit", "CB001", "M", "Blue");
  const pareo1 = new Product("pareo", "P001", "Unique", "Green");
  const cap1 = new Product("cap", "CAP001", "L", "White");
  
  // Creation costumer
  const costumer1 = new Costumer(
    "Mario",
    "Rossi",
    "mario.rossi@email.com",
    "Credit Card"
  );
  const costumer2 = new Costumer(
    "Giulia",
    "Bianchi",
    "giulia.bianchi@email.com",
    "PayPal"
  );
  
  // Creation Production Process
  const recycledPlasticProcess = new ProductionProcess(
    "Recycled Plastic process",
    "Process of transforming recycled plastic into beachwear fabrics"
  );
  
  // Add products to production Process
  recycledPlasticProcess.addProduct(swimsuit1);
  recycledPlasticProcess.addProduct(pareo1);
  recycledPlasticProcess.addProduct(cap1);
  
  // Test order products
  costumer1.orderProduct(swimsuit1);
  costumer2.orderProduct(pareo1);
  
  // Attempting to order a product that is already out of stock
  costumer2.orderProduct(swimsuit1);
  
  // Adding a new product to the manufacturing process
  const swimsuit2 = new Product("swimsuit", "CB002", "S", "Red");
  recycledPlasticProcess.addProduct(swimsuit2);
  
  // Viewing products in production
  console.log("Products in production:");
  recycledPlasticProcess.productsInProduction.forEach((product) => {
    console.log(
      `- ${product.type} (ID: ${product.id}), Color: ${product.color}, Size: ${product.size}, State: ${product.state}`
    );
  });
  
  // Function to display the warehouse status
  function viewWarehouseStatus(products: IProduct[]) {
    console.log("\nWarehouse status:");
    products.forEach((product) => {
      console.log(
        `- ${product.type} (ID: ${product.id}), State: ${product.state}`
      );
    });
  }
  
  // View the warehouse status
  viewWarehouseStatus([swimsuit1, pareo1, cap1, swimsuit2]);
  
  // Function to calculate sales statistics
  function calculateSalesStatistics(products: IProduct[]) {
    const total = products.length;
    const sales = products.filter((p) => p.state === "spent").length;
    const available = total - sales;
  
    console.log("\nWarehouse status:");
    console.log(`Total products: ${total}`);
    console.log(`Products sales: ${sales}`);
    console.log(`Products available: ${available}`);
    console.log(`Percentage sold: ${((sales / total) * 100).toFixed(2)}%`);
  }
  
  // Calculation and display of sales statistics
  calculateSalesStatistics([swimsuit1, pareo1, cap1, swimsuit2]);
  
  // Simulation of a new order
  const costumer3 = new Costumer(
    "Laura",
    "Verdi",
    "laura.verdi@email.com",
    "Wire transfer"
  );
  costumer3.orderProduct(cap1);
  
  // Update statistics after new order
  viewWarehouseStatus([swimsuit1, pareo1, cap1, swimsuit2]);
  calculateSalesStatistics([swimsuit1, pareo1, cap1, swimsuit2]);
  
  // Function to simulate the production of new items
  function produceNewArticles(process: IProduction, quantity: number) {
    console.log(`\nProduction of ${quantity} new items:`);
    for (let i = 0; i < quantity; i++) {
      const types: ("swimsuit" | "pareo" | "cap")[] = ["swimsuit", "pareo", "cap"];
      const type = types[Math.floor(Math.random() * types.length)];
      const id = `${type.charAt(0).toUpperCase()}${String(
        Math.floor(Math.random() * 1000)
      ).padStart(3, "0")}`;
      const colors = ["Blue", "Green", "Red", "Yellow", "Black", "White"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const sizes = ["XS", "S", "M", "L", "XL", "Unique"];
      const size = sizes[Math.floor(Math.random() * sizes.length)];
  
      const newProduct = new Product(type, id, size, color);
      process.addProduct(newProduct);
      console.log(
        `- ${newProduct.type} (ID: ${newProduct.id}), Color: ${newProduct.color}, Size: ${newProduct.size}`
      );
    }
  }
  
  // Simulation of the production of 5 new items
  produceNewArticles(recycledPlasticProcess, 5);
  
  // Viewing products in production after the production of new items
  console.log("\nProducts in production:");
  recycledPlasticProcess.productsInProduction.forEach((product) => {
    console.log(
      `- ${product.type} (ID: ${product.id}), Color: ${product.color}, Size: ${product.size}, State: ${product.state}`
    );
  });
  
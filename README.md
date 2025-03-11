# Project Overview: TypeScript Fashion

## 🏖️ **Beachwear Product Management**
This project represents a management system for beachwear products, such as swimwear, pareos, and hats. The structure includes various interfaces and classes, each designed to handle different aspects of production, inventory, and sales of these products.

## ✨ **Key Features**
* **Product Management**: Creation, status management, and assignment of products to customers.
* **Customer Management**: Allows customers to order products and set a preferred payment method.
* **Production Process**: Simulation of the production process to add new products and monitor them.

## 🗂️ **Code Structure**

### 📋 **Interfaces**
* **IProduct**: Defines the basic properties of products and a method to assign them to customers.
   * Properties: `type`, `id`, `size`, `color`, `state` (available || spent).
   * Method: `assignCostumer(costumer: ICostumer)` to associate a product with a customer.
* **ICostumer**: Defines the properties and methods for a customer.
   * Properties: `name`, `surname`, `email`, `paymentMethod`.
   * Method: `orderProduct(product: IProduct)` to order a product.
* **IProduction**: Represents a production process.
   * Properties: `name`, `description`, `productsInProduction`.
   * Method: `addProduct(product: IProduct)` to add a product to the production process.

### 🏗️ **Classes**
* **Product**: Implements `IProduct` and allows assigning a customer to a product.
   * If a customer orders a product, the status changes to "spent".
* **Customer**: Implements `ICostumer` and allows customers to order products.
   * If the product is available, it is assigned to the customer; otherwise, a message indicates that the product is not available.
* **ProductionProcess**: Implements `IProduction` and allows adding and monitoring products in production.

## 🧪 **Tests and Functions**
The code includes examples of using the classes and interfaces:
* Creation of products and customers.
* Adding products to the production process.
* Orders from customers with availability management.
* Viewing inventory status and sales statistics.

## 📊 **Additional Functions**
* **calculateSalesStatistics**: Calculates and displays statistics such as the percentage of products sold.
* **produceNewArticles**: Simulates the production of new articles with random characteristics (type, color, size).

## 🚀 **Usage Example**

```typescript
// Creating products
const swimsuit1 = new Product('swimsuit', 'CB001', 'M', 'Blue');
const pareo1 = new Product('pareo', 'P001', 'Unique', 'Green');

// Creating customers
const customer1 = new Customer('Mario', 'Rossi', 'mario.rossi@email.com', 'Credit Card');

// Adding products to the production process
const recycledPlasticProcess = new ProductionProcess(
    'Recycled Plastic Process',
    'Process of transforming recycled plastic into fabrics for beachwear'
);
recycledPlasticProcess.addProduct(swimsuit1);

// A customer ordering a product
customer1.orderProduct(swimsuit1);
```

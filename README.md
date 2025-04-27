


# **EcommerceClothStore - Fake eCommerce Store with React, Tailwind, and Vite**

Welcome to the **EcommerceClothStore** repository! This project is a **fake eCommerce API** and **front-end** application that simulates an online clothing store. Built with **React**, **Tailwind CSS**, and **Vite**, this project offers a smooth and modern development experience with a responsive design for both men's and women's apparel.

---

## **Table of Contents**

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## **Features**

- **Product Listings**: Browse a variety of men's and women's clothing, complete with product names, descriptions, and prices.
- **Add to Cart**: Add items to the shopping cart and view the current items.
- **Cart Management**: View the shopping cart and proceed with adding/removing items.
  
This project simulates an eCommerce store with a **fake API**, allowing developers to build and test their eCommerce interfaces.

---

## **Technologies Used**

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for building modern, responsive designs.
- **Vite**: A fast and modern build tool for React projects that provides lightning-fast development and hot-reloading.
- **Fake API**: A simulated backend API for managing products and the shopping cart.

---

## **Installation**

To set up this project locally, follow these steps:

### 1. **Clone the Repository**

```bash
git clone https://github.com/Ahmedkhan78/EcommerceClothStore.git
```

### 2. **Navigate to the Project Directory**

```bash
cd EcommerceClothStore
```

### 3. **Install Dependencies**

Run the following command to install all the necessary dependencies:

```bash
npm install
```

---

## **Usage**

Once the dependencies are installed, you can start the development server with Vite:

### 1. **Start the Development Server**

```bash
npm run dev
```

This will start the server at `http://localhost:3000`.

### 2. **Test the Application**

Open your browser and go to `http://localhost:3000` to interact with the clothing store's front end.

---

## **API Endpoints**

The application uses a fake API for managing products and the shopping cart.

### 1. **Get All Products**

**Endpoint**: `GET /products`  
**Description**: Fetches a list of all available products in the store.  
**Response**: A list of products with details like name, price, and description.

### 2. **Get Product by ID**

**Endpoint**: `GET /products/:id`  
**Description**: Fetches a specific product by its ID.  
**Response**: Details of the requested product.

### 3. **Add Product to Cart**

**Endpoint**: `POST /cart`  
**Description**: Adds a product to the shopping cart by product ID.  
**Request Body**:  
```json
{
  "productId": 1
}
```
**Response**: Confirmation message and updated cart.

### 4. **View Cart**

**Endpoint**: `GET /cart`  
**Description**: Fetches the items currently in the shopping cart.  
**Response**: A list of products in the cart.

---

## **Contributing**

We welcome contributions! To contribute:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature-branch`).
5. Open a Pull Request.

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.




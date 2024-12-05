// app.js
document.addEventListener("DOMContentLoaded", () => {
    const cartCountElement = document.getElementById("cart-count");
    let cart = [];
  
    // Example product data (you can replace with actual data from a database in a real app)
    const products = [
      { id: 1, name: "Wireless Headphones", price: 99.99, img: "https://via.placeholder.com/250x200?text=Product+1" },
      { id: 2, name: "Smart Watch", price: 150.00, img: "https://via.placeholder.com/250x200?text=Product+2" },
      { id: 3, name: "Bluetooth Speaker", price: 59.99, img: "https://via.placeholder.com/250x200?text=Product+3" },
      { id: 4, name: "Gaming Mouse", price: 29.99, img: "https://via.placeholder.com/250x200?text=Product+4" },
     
  
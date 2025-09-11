import React from "react";

// ProductCard component
function ProductCard({ name, price, inStock }) {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    width: "200px",
    margin: "10px",
    textAlign: "center",
    boxShadow: "2px 2px 6px rgba(0,0,0,0.1)",
  };

  const stockStyle = {
    color: inStock ? "green" : "red",
    fontWeight: "bold",
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p style={stockStyle}>{inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}

// Example usage
function App() {
  const products = [
    { name: "Laptop", price: 55000, inStock: true },
    { name: "Smartphone", price: 22000, inStock: false },
    { name: "Headphones", price: 1500, inStock: true },
  ];

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          inStock={product.inStock}
        />
      ))}
    </div>
  );
}

export default App;

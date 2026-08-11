import React from "react";
import "./App.css";

function App() {

  let products = [
    {
      category: "Electronics",
      name: "Product 1",
      price: 10
    },
    {
      category: "Home",
      name: "Product 2",
      price: 20
    },
    {
      category: "Garden",
      name: "Product 3",
      price: 30
    },
    {
      category: "Sports",
      name: "Product 4",
      price: 40
    }
  ];

  return (
    <div>

      <nav className="navbar">

        <h2>ShopEasy</h2>

        <div className="links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#About">About</a>
          <a href="#Contact">Contact</a>
        </div>

        <button>Login</button>

      </nav>


      <div className="home" id="home">

        <div>
          <h1>Find products you love</h1>

          <p>
            Discover our latest products at amazing prices!
          </p>

          <button>Shop Now</button>
        </div>

        <div className="design">
          <div className="box1"></div>
          <div className="box2"></div>
        </div>

      </div>


      <div className="products" id="products">

        {products.map((item, index) => (
          <div className="product" key={index}>

            <p>{item.category}</p>

            <h3>{item.name}</h3>

            <h4>${item.price}</h4>

            <button
              onClick={() => alert(item.name + " added")}
            >
              Buy Now
            </button>

          </div>
        ))}

      </div>
      <footer>
        <p>ShopEasy ©️ 2026</p>
      </footer>

    </div>
  );
}

export default App;
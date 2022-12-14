import React from "react";
import LoginHeader from "../components/loginheader";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <>
      <LoginHeader />
      <Navbar />
      <div className="container-fluid justify-content-center text-center container mt-3">
        <h2>
          {" "}
          <span className="poke-red">Welcome to Poke</span>Baller!
        </h2>
        <p>
          Use PokeBaller to add and keep track of cards in your own personal
          digital collection.
        </p>
        <p>Navigate to "add" to begin compiling cards to your collection.</p>
        <p>To see your collection, navigate to "view."</p>
      </div>
    </>
  );
};

export default Home;

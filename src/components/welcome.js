import React from 'react'

const Welcome = () => {
  return (
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
  )
}

export default Welcome

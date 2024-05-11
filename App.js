import React from "react";
import ReactDOM from "react-dom";

// HeaderComponent
const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://maayaofbath.co.uk/wp-content/uploads/2022/02/maya-logo.svg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Book Table</li>
          <li>Festive Menu</li>
          <li>Buffet Menu</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//css in JS
const styleCard = {
    backgroundColor: "#f0f0f0"
}
// RestaurantCardComponent
const RestaurantCardComponent = ()=> {
    return <div className="rest-card-box" style={styleCard} >
    {/* style={{backgroundColor: "#0f0f0f"}} */}
        <img className="card-logo" alt="cardImg"
        src="https://bing.com/th?id=OSK.bd08e0277e18bc666728d3dc29370cf2"></img>
        <h3 className="card-header">Meghana Foods</h3>
        <h4 id="head4">Egg Biriyani, North Indian, Asian</h4>
        <h4 id="head4">4.4 stars</h4>
        <h4 id="head4">40-45 mins</h4>
    </div>
}
// BodyComponent
const BodyComponent = ()=>{
    return <div className="search-bar">
    <h1>Search</h1>
    <div id="rest-container">
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>
    <RestaurantCardComponent/>


    </div>


    </div>
}

const MainApp = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainApp />);

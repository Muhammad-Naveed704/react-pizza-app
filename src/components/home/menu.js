// import axios from "axios";
import { useState, useEffect } from "react";
import "./home.css";

const MenuBar = () => {
  const [menuArr, setMenuArr] = useState([]);
  const [inputSearch, setinputSearch] = useState("");

  const dataFetching = async () => {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${inputSearch}`
      );
      const data = await res.json();
      console.log(data.data.recipes);
      setMenuArr(data.data.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataFetching();
  }, []);

  const inputChangeHandle = (val) => {
    // console.log(val)
    setinputSearch(val.target.value);
  };

  const SearchDataHandler = () => {
    dataFetching();
  };

  return (
    <div style={{ width: "97%" }}>
      <div className="searchingComp">
        <input
          type="text"
          placeholder="Enter your favourite dish"
          className="searchInput"
          value={inputSearch}
          onChange={inputChangeHandle}
        />
        <button className="searchBtn" onClick={SearchDataHandler}>
          search
        </button>
      </div>
      <div className="mainCardContainer">
        <Menu menu={menuArr} />
      </div>
    </div>
  );
};

function Menu({ menu }) {
  // console.log(menu)
  return (
    <>
      {menu.map((item, index) => (
        <Card
          key={index}
          image={item.image_url}
          title={item.title}
          publisher={item.publisher}
        />
      ))}
    </>
  );
}

function Card(recipeItem) {
  console.log(recipeItem);
  return (
    <div className="card">
      <div className="cardRight">
        <img src={recipeItem.image} />
        <button>order now</button>
      </div>

      <div className="cardinfo">
        <p className="recipePublisher">{recipeItem.publisher}</p>
        <p className="recipeTitle">{recipeItem.title}</p>
        <p className="recipePric">
          {" "}
          <span>Price</span> $ {Math.round(Math.random() * 100)}.00{" "}
        </p>
      </div>
    </div>
  );
}

export default MenuBar;

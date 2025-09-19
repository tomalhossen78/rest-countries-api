import { useState } from "react";
import "./country.css";
const Country = ({ country, handleCount }) => {
  // console.log(country.population.population);
  const handleVisited = () => {
    // console.log("visited");
    setState(!state);
    !state ? handleCount(1) : handleCount(-1);
  };
  const [state, setState] = useState(false);
  return (
    <div className={`country ${state && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name : {country.name.common}</h3>
      <p>Population : {country.population.population / 1000000} Millions </p>
      <p>
        Area : {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited}>
        {!state ? "Not Visited" : "Already Visited"}
      </button>
    </div>
  );
};

export default Country;

import { use, useState } from "react";
import Country from "./Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countriesdata = use(countriesPromise);
  const countries = countriesdata.countries;

  const [count, setCount] = useState(0);
  const handleCount = (p) => {
    setCount(count + p);
  };
  return (
    <div>
      <h1>In the countries : {countries.length}</h1>
      <h2>Total Visited Country : {count}</h2>
      <ul id="countries">
        {countries.map((country, index) => (
          <Country handleCount={handleCount} key={index} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;

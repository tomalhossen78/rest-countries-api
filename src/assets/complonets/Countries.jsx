import React from "react";
const res = fetch("https://openapi.programming-hero.com/api/all").then((res) =>
  res.json()
);
console.log(res);
const Countries = () => {
  return <div>Countries</div>;
};

export default Countries;

import React, { useState } from "react";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai", "Bangalore"] },
  {
    name: "United States",
    value: "US",
    cities: ["New York", "Los Angeles", "Chicago"],
  },
  {
    name: "United Kingdom",
    value: "UK",
    cities: ["London", "Manchester", "Edinburgh"],
  },
  { name: "Canada", value: "CA", cities: ["Toronto", "Vancouver", "Montreal"] },
  {
    name: "Australia",
    value: "AU",
    cities: ["Sydney", "Melbourne", "Brisbane"],
  },
  { name: "Germany", value: "DE", cities: ["Berlin", "Munich", "Hamburg"] },
  { name: "France", value: "FR", cities: ["Paris", "Marseille", "Lyon"] },
  { name: "Japan", value: "JP", cities: ["Tokyo", "Osaka", "Kyoto"] },
  {
    name: "Brazil",
    value: "BR",
    cities: ["Sao Paulo", "Rio de Janeiro", "Brasilia"],
  },
  {
    name: "South Africa",
    value: "ZA",
    cities: ["Johannesburg", "Cape Town", "Pretoria"],
  },
];

export const Dropdown = () => {
  const [country, setCountry] = useState("");
  const [cities, setCities] = useState([]);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);

    // Find the selected country and update the cities state
    const selectedCountryObj = countries.find(
      (item) => item.value === selectedCountry
    );
    setCities(selectedCountryObj ? selectedCountryObj.cities : []);
  };

  // const handleCountryChange = (e) => {
  //   const selectedCountry = e.target.value;
  //   setCountry(selectedCountry);

  //   // Use filter to find the selected country and extract its cities
  //   const selectedCountryObj = countries.filter(
  //     (item) => item.value === selectedCountry
  //   )[0];
  //   setCities(selectedCountryObj ? selectedCountryObj.cities : []);
  // };

  return (
    <div>
      <select value={country} onChange={handleCountryChange}>
        {countries.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>

      <select value={cities}>
        {cities.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

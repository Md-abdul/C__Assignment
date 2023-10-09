import React, { useEffect, useState } from "react";
import { CharacterItem } from "./CharacterItem";
import Loading from "./Loading";
import styled from "styled-components";

export const CharacterList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchdata = async () => {
    try {
      const response = await fetch("https://comichero.onrender.com/characters");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const characters = await response.json();
      setData(characters);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <DIV>
      {data.map((item) => (
        <CharacterItem key={item.id} character={item} />
      ))}
    </DIV>
  );
};


const DIV = styled.div`
  margin: 5px;
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  background-color: rgb(240,240,240);
`
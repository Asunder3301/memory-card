import { useEffect, useState } from "react";
import { Card } from "./Card.jsx";
import { PokeAPI } from "../modules/pokeapi.js";

const initial_pokemon = [
  { name: "togepi", status: false },
  { name: "rayquaza", status: false },
  { name: "sableye", status: false },
  { name: "lucario", status: false },
  { name: "marshadow", status: false },
  { name: "crobat", status: false },
  { name: "wynaut", status: false },
  { name: "charmander", status: false },
  { name: "suicune", status: false },
  { name: "mismagius", status: false },
  { name: "latias", status: false },
  { name: "mantyke", status: false },
];

export function App() {
  const [scores, setScores] = useState({ currentScore: 0, highScore: 0 });
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    //Loop through pokemon array and give each obj a url key
    async function loadImages() {
      const updatedPokemon = await Promise.all(
        initial_pokemon.map(async (p) => {
          const data = await PokeAPI.getData(p.name);
          return { ...p, url: data.image };
        })
      );
      setPokemon(shuffleCards(updatedPokemon));
    }
    loadImages();
  }, []);

  function shuffleCards(array) {
    //Loop through array backwards
    for (let i = array.length - 1; i > 0; i--) {
      //Pick random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));

      //Swap elements
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  function handleClick(name) {
    const clicked = pokemon.find((p) => p.name === name);

    if (clicked && clicked.status === false) {
      const nextScore = scores.currentScore + 1;
      const nextHighScore = Math.max(nextScore, scores.highScore);

      setScores({ currentScore: nextScore, highScore: nextHighScore });

      //Update the clicked pokemon's status
      shuffleCards(
        setPokemon((prev) =>
          prev.map((p) => (p.name === name ? { ...p, status: true } : p))
        )
      );
    } else {
      //Reset current score
      setScores((prev) => ({ ...prev, currentScore: 0 }));

      //Reset game board status
      shuffleCards(
        setPokemon((prev) => prev.map((p) => ({ ...p, status: false })))
      );
    }
  }

  return (
    <>
      <div id="title">
        <h1>Pokemon Memory Game</h1>
        <p>
          Earn points by clicking on a image but don't click on the same image
          more than once!
        </p>
      </div>

      <div id="scores">
        <p>Score: {scores.currentScore}</p>
        <p>High Score: {scores.highScore}</p>
      </div>

      <div className="card-container">
        {pokemon.map((item) => (
          <Card
            onClick={() => handleClick(item.name)}
            name={item.name}
            url={item.url || ""}
            key={item.name}
            status={item.status}
          />
        ))}
      </div>
    </>
  );
}

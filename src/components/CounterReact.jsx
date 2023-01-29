import { useState, useEffect } from 'react';
import axios from 'axios';
import CardCharacter from './CardCharacter.jsx';

const Counter = () => {
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    async function getCharacters() {
      const response = (await axios.get('https://rickandmortyapi.com/api/character')).data.results;
      setCharacters(response);
    }

    getCharacters();
  }, []);

  return (
    <>
      <div className="bg-slate-800 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center p-10">
        {characters.length && characters.map(({ name, image }) => <CardCharacter name={name} image={image} />)}
      </div>
    </>
  );
};

export default Counter;

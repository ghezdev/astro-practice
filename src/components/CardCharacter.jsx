import React from 'react';

const CardCharacter = ({ name, image }) => {
  return (
    <div className="bg-slate-100 flex flex-col items-center w-48 h-60 justify-between box-border p-4 rounded-lg">
      <img className="w-full border-black border-2" src={image} />
      <p className="font-bold">{name}</p>
    </div>
  );
};

export default CardCharacter;

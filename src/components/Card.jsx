import React from 'react';

const Card = ({ card }) => {
  const [name, imageUrl] = card;

  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xs text-detail mb-0.5 text-center">{name}</div>
      </div>
    </div>
  );
};

export default Card;

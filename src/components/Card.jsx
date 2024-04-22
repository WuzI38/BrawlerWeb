import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card, to }) => {
  var id, name, imageUrl, useLinks;

  if (to) {
    [id, name, imageUrl] = card;
    useLinks = true;
  } else {
    [name, imageUrl] = card;
    useLinks = false;
  }

  const cardContent = (
    <>
      <img className="w-full" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xs text-detail mb-0.5 text-center">{name}</div>
      </div>
    </>
  );

  return (
    <div className="rounded overflow-hidden shadow-lg">
      {useLinks && id ? (
        <Link to={`/commanders/${to}/${id}`}>
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </div>
  );
};

export default Card;

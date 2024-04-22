import React from 'react';
import { ClipLoader } from 'react-spinners';
import Card from './Card';
import { useFetchCards } from '../utils/Methods'

const Cards = ({ endpoint, limit, link, columns }) => {
    const args = limit ? `${endpoint}?limit=${limit}` : endpoint;

    const { cards, loading } = useFetchCards(args);

    return (
        <div className="flex justify-center p-5 mb-10">
            {loading ? (
                <ClipLoader color="#F2F1F2" loading={loading} size={150} />
                ) : (
                <div className={`grid ${columns['columns']} gap-4`}>
                    {cards.map((card, index) => (
                        <Card key={index} card={card} to={link}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cards;

import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { BeatLoader } from 'react-spinners';
import Card from './Card';

const Cards = ({ endpoint, limit, onLoaded }) => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

    let columns = 'grid-cols-1';
    if (isDesktop) {
        columns = 'grid-cols-6';
    } 
    else if (!isMobile) {
        columns = 'grid-cols-3';
    }

    useEffect(() => {
        const fetchCards = async () => {
        try {
            const res = await fetch(`${endpoint}?limit=${limit}`);
            const data = await res.json();
            setCards(data);
        } 
        catch (error) {
            console.log('Error fetching data', error);
        } 
        finally {
            setLoading(false);
        if (onLoaded) {
            onLoaded();
        }
      }
    };
        fetchCards();
    }, [endpoint, limit, onLoaded]);

    return (
        <div className="flex justify-center p-5 mb-10">
            {loading ? (
                <BeatLoader color="#123abc" loading={loading} size={150} />
                ) : (
                <div className={`grid ${columns} gap-4`}>
                    {cards.map((card, index) => (
                        <Card key={index} card={card} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cards;

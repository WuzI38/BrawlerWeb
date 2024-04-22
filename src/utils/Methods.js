import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';

export const getColumnClass = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

    if (isDesktop) {
        return 'grid-cols-6';
    } else if (!isMobile) {
        return 'grid-cols-3';
    } else {
        return 'grid-cols-1';
    }
};


export const useFetchCards = (args) => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const res = await fetch(args);
                const data = await res.json();
                setCards(data);
            } 
            catch (error) {
                console.log('Error fetching data', error);
            } 
            finally {
                setLoading(false);
            }
        };
        fetchCards();
    }, [args]);

    return { cards, loading };
};
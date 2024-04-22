import React from 'react';
import { ClipLoader } from 'react-spinners';
import SectionTitle from './SectionTitle';
import Card from './Card';
import { useFetchCards } from '../utils/Methods'

const CardsByType = ({ id, columns }) => {
    const endpoint = `/api/commanders/${id}`;
    const { cards, loading } = useFetchCards(endpoint);

    return (
        <div className="flex flex-col space-y-8">
            {Object.entries(cards).map(([type, cards]) => {
                if (cards.length === 0) {
                    return null; // Don't render a section if there are no cards of this type
                }

                return (
                    <div key={type}>
                        <SectionTitle text={type} />
                        <div className='flex justify-center p-5 mb-10'>
                            {loading ? (
                                <ClipLoader color="#F2F1F2" loading={loading} size={150} />
                            ) : (
                                <div className={`grid ${columns['columns']} gap-4`}>
                                    {cards.map((card, index) => (
                                        <Card key={index} card={card} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardsByType;

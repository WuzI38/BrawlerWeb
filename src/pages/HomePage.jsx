import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import Cards from '../components/Cards';

const HomePage = () => {
  const [isFirstCardsLoaded, setIsFirstCardsLoaded] = useState(false);

  const handleCardsLoaded = () => {
    setIsFirstCardsLoaded(true);
  };

  return (
    <div>
      <SectionTitle text="Top commanders by popularity" />
      <Cards endpoint="/api/commanders/popularity" limit={6} onLoaded={handleCardsLoaded} />
      <SectionTitle text="Top commanders by winrate" />
      {isFirstCardsLoaded && (
        <Cards endpoint="/api/commanders/winrate" limit={6} />
      )}
    </div>
  );
};

export default HomePage;
